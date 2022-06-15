<template>
    <div class="tachyon-filter type--search">
        <div class="tachyon-filter__header">
            <div class="tachyon-filter__search">
                <input ref="searchInput" class="tachyon-filter__search-input" @input="debounceSearch($event.currentTarget.value)">
                <div class="tachyon-filter__search-control">
                    <button class="btn-search" v-if="!this.searchInput.length">검색</button>
                    <button class="btn-cancel" v-else @click="clear()">취소</button>
                </div>
            </div>
            <!--전제 선택/해제-->
            <div class="tachyon-filter__options">
                <label class="m-checkbox">
                    <!--
                        :id="getUniqueName('all')"
                        :for="getUniqueName('all')"
                    -->
                    <input ref="selectAllCheck" type="checkbox"
                           :checked="selectedSize === displayedItems.length"
                           @change="setSelectAll($event.currentTarget.checked)">
                    <span class="label">{{this.searchInput.length > 0 ? '모든 검색 결과 선택':'모두 선택'}}</span>
                </label>
            </div>
        </div>
        <div class="tachyon-filter__list" :style="styleFilterListHeight">
            <!--필터 목록-->
            <vx-list ref="list"
                     :row-height="listRowHeight"
                     :items="displayedItems">
                <template v-slot:label="{item, index, label, value, selected, active}">
                    <label class="m-checkbox">
                        <!--
                            :id="getUniqueName(item)"
                            :for="getUniqueName(item)"
                        -->
                        <input ref="checkBox" type="checkbox"
                               :checked="isSelected(item)"
                               @change="setSelect(item, $event.currentTarget.checked)">
                        <span class="label">{{item}}({{itemCountMap[item]}})</span>
                    </label>
                </template>
            </vx-list>
        </div>

        <div class="tachyon-filter__control">
            <!--취소-->
            <button class="btn-cancel"
                    @click="close()">취소</button>
            <!--적용-->
            <button class="btn-apply" :disabled="selectedSize === 0"
                    @click="apply()">적용</button>

        </div>
    </div>
</template>

<script>
    import IFilterWindow from './IFilterWindow';

    let PREFIX_COUNT = 0;

    function arrayValueToObject(array) {
        return array.reduce((map, value) => {
            map[value] = null;
            return map;
        }, {});
    }

    function stringCompare(a, b, caseInsensitive) {
        if (a == null && b == null) {
            return 0;
        }

        if (a == null) {
            return 1;
        }

        if (b == null) {
            return -1;
        }

        if (caseInsensitive) {
            a = a.toLowerCase();
            b = b.toLowerCase();
        }

        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        return 0;
    }

    export default {
        name: 'filter-set-window',
        mixins: [IFilterWindow],
        data() {
            return {
                filterItems: [],
                selectedMap: {},
                itemCountMap: {},
                searchInput: '',
                listRowHeight: 40
            }
        },
        computed: {
            prefix() {
                return '' + ++PREFIX_COUNT;
            },
            displayedItems() {
                if (this.searchInput.length <= 0) {
                    return this.filterItems;
                }
                const text = this.searchInput.toLowerCase();
                return this.filterItems.filter(item => {
                    return (item || '').toLowerCase().indexOf(text) >= 0;
                });
            },
            selectedSize() {
                const filtered = this.displayedItems.filter(item => this.isSelected(item));
                return filtered.length;
            },
            debounceSearch() {
                return vrix.util.debounceFunction(value => {
                    this.searchInput = (value || '').trim();
                }, this, 500);
            },
            styleFilterListHeight() {
                const spaceHeight = 8;
                const maxCount = 5;
                const listHeight = Math.min(this.displayedItems.length * this.listRowHeight, maxCount * this.listRowHeight) + spaceHeight;

                return `height:${Math.max(listHeight, this.listRowHeight + spaceHeight)}px`;
            }
        },
        watch: {

        },
        mounted() {
        },
        activated() {
            this.updateDisplayedItems();
        },
        deactivated() {
            this.clear();
        },
        methods: {
            getUniqueName(name) {
                return this.prefix + '_' + name;
            },
            /**
             * 선택 여부
             */
            isSelected(item) {
                return item in this.selectedMap;
            },
            /**
             * 전체 선택
             * @param selected
             */
            setSelectAll(selected) {
                //필터 아이템 목록 재갱신을 위한...
                this.displayedItems.forEach(item => {
                    this.setSelect(item, selected);
                })
            },
            /**
             * 선택 해제 설정
             * @param item
             * @param selected
             */
            setSelect(item, selected) {
                if (selected) {
                    this.selectItem(item);
                } else {
                    this.unselectItem(item);
                }
            },
            /**
             * 아이템 선택
             * @param item
             */
            selectItem(item) {
                if (!(item in this.selectedMap)) {
                    this.$set(this.selectedMap, item, null);
                }
            },
            /**
             * 아이템 선택 해제
             * @param item
             */
            unselectItem(item) {
                if (item in this.selectedMap) {
                    this.$delete(this.selectedMap, item);
                }
            },
            updateDisplayedItems() {
                const filter = this.column.filterInstance;
                const items = [];
                const countMap = {};

                //필터 리스트에 보이는 아이템목록
                this.grid.collection.forEach(item => {
                    const value = filter.itemToValue(item);
                    if (filter.compareOtherFilters(item)) {
                        if (!(value in countMap)) {
                            items.push(value);
                            countMap[value] = 0;
                        }
                        countMap[value]++;
                    }
                });

                const selectedMap = arrayValueToObject(filter.canCompare ? filter.getValues() : filter.getPossibleValues());

                //정렬
                this.filterItems = items.sort(stringCompare);
                this.selectedMap = selectedMap;
                this.itemCountMap = countMap;
            },
            /**
             * 필터 적용
             */
            apply() {
                const filter = this.column.filterInstance;
                filter.setValues(Object.keys(this.selectedMap));
                filter.refresh();
                this.close();

                //검색필드 초기한후 전체 기준으로 크기비교
                this.$nextTick(() => {
                    this.$emit('apply', this.selectedSize !== this.filterItems.length);
                });
            },
            clear() {
                this.searchInput = '';
                if (this.$refs.searchInput) {
                    this.$refs.searchInput.value = '';
                }
            },
        },
        prepare(grid, state) {
        }
    }

</script>

<style scoped>
</style>
