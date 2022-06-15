<template>
    <div class="tachyon-filter type--text">
        <div class="tachyon-filter__header">
            <vx-combobox class="m-combobox-rectangle tachyon-filter__operator"
                         content-class="theme--dropdown-options"
                         v-model="selectedOperatorItem"
                         :items="operatorItems" :row-count="operatorItems.length"
                         label-field="label" :min-selection="1"
                         @selection-change="apply()"></vx-combobox>
            <div class="tachyon-filter__search">
                <input ref="input" class="tachyon-filter__search-input" @input="debounceInput($event.currentTarget.value)">
                <div class="tachyon-filter__search-control">
                    <button class="btn-search" v-if="!this.inputValue.length">검색</button>
                    <button class="btn-cancel" v-else @click="clear()">취소</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import IFilterWindow from './IFilterWindow';

    export default {
        name: 'filter-text-window',
        mixins: [IFilterWindow],
        data() {
            return {
                selectedOperatorItem: null,
                inputValue: ''
            }
        },
        computed: {
            operatorItems() {
                return [
                    {value: 'contains', label: '포함'},
                    {value: 'notContains', label: '포함하지 않음'},
                    {value: 'startsWith', label: '시작 문자'},
                    {value: 'endsWith', label: '끝 문자'},

                    {value: 'equals', label: '같음'},
                    {value: 'notEqual', label: '같지 않음'},
                    /*  {value: 'lessThan', label: 'lessThan'},
                      {value: 'lessThanOrEqual', label: 'lessThanOrEqual'},
                      {value: 'greaterThan', label: 'greaterThan'},
                      {value: 'greaterThanOrEqual', label: 'greaterThanOrEqual'},*/
                ]
            },
            debounceInput() {
                return vrix.util.debounceFunction(value => {
                    this.inputValue = (value || '').trim();
                }, this, 500);
            }
        },
        watch: {
            inputValue(value) {
                this.apply();
            }
        },
        activated() {
            this.$nextTick(() => {
                this.$refs.input.focus();
            })
        },
        methods: {
            /**
             * 필터 적용
             */
            apply() {
                const filter = this.column.filterInstance;
                const fromCondition = this.selectedOperatorItem.value;
                const fromValue = this.inputValue;

                filter.setConditions([fromCondition]);
                filter.setValues([fromValue]);
                filter.refresh();
            },
            clear() {
                this.inputValue = '';
                if (this.$refs.input) {
                    this.$refs.input.value = '';
                }
            },
        },
        prepare(grid, state) {
        }
    }

</script>

<style scoped>
</style>
