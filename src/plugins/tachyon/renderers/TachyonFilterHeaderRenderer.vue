<template>
    <div class="header-item header-item-filter" :class="filteredClass">
        <span class="header-item__title">{{label}}</span>

        <div class="header-item__filter" @mousedown="onOpenFilterPopup">열기</div>

        <vx-popup ref="popup" :position-target="popupTarget" close-on-outside-down>
            <filter-text-window v-if="isFilter('text')"></filter-text-window>
            <filter-set-window v-else @apply="onFilterApply"></filter-set-window>
        </vx-popup>
    </div>
</template>

<script>
    import FilterSetWindow from './FilterSetWindow';
    import FilterTextWindow from './FilterTextWindow';

    export default {
        name: 'filter-header-renderer',
        components: {FilterTextWindow, FilterSetWindow},
        provide() {
            return Object.defineProperty({}, 'column', {
                get: () => this.column,
            });
        },
        inject: ['grid'],
        data() {
            return {
                /** 그리드 랩퍼에서 넣어줌*/
                state: {},
                popupTarget: null,
                filterWindow: null,
                //필터 상태
                isFiltered: false
            }
        },
        computed: {
            column() {
                return this.state.column;
            },
            label() {
                return this.state.label;
            },
            /**
             * 필터결과 여부 클래스
             */
            filteredClass(){
                return {
                    //이름 변경해도 되요!!!..
                    filtered: this.isFiltered
                }
            }
        },
        mounted() {
            const handler = (event) => {
                if (event.detail.kind === 'reset' && this.filterWindow) {
                    this.$refs.popup.close();
                    this.filterWindow.clear();
                }
            };

            this.grid.$on('collection-change', handler);
            this.$once('hook:beforeDestroy', () => {
                this.grid.$off('collection-change', handler);
            });

            this.popupTarget = this.$el;
        },
        methods: {
            isFilter(type) {
                const column = this.column;
                return column && column.filter && column.filter.type === type;
            },
            /**
             * 필터 팝업 열기
             */
            openFilterPopup() {
                this.$refs.popup.open()
                    .opened(content => {
                        this.filterWindow = content && content.__vue__;
                    });
            },
            /**
             * 필터 팝업 닫기
             */
            closeFilterPopup() {
                this.$refs.popup.close();
            },
            onOpenFilterPopup(event) {
                event.preventDefault();
                event.stopPropagation();
                this.openFilterPopup();
            },
            /**
             * 필터 적용 이벤트 핸들러
             * @param filtered
             */
            onFilterApply(filtered) {
                this.isFiltered = filtered;
            }
        },
        prepare(apply, state) {
        }
    }

</script>

<style scoped>
</style>
