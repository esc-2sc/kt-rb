<template>
    <div class="m-checkbox-container">
        <label class="m-checkbox label--none">
            <input ref="checkBox" type="checkbox" @change="onChange">
            <span class="label"></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'tachyon-check-item-renderer',
        inject: {
            grid: {
                default: null
            },
            checkColumn: {
                default: null
            }
        },
        data() {
            return {
                /** 그리드 랩퍼에서 넣어줌*/
                state: {},
            }
        },
        computed: {
            item() {
                return this.state.item;
            },
            cell() {
                return this.state.cell;
            },
            column() {
                return this.state.column;
            },
            label() {
                return this.state.label;
            },
            attrs() {
                return {
                    selected: this.state.selected,
                    hovered: this.state.hovered
                }
            },
        },
        methods: {

            //-------------------------------------------------
            //   Event Handlers
            //-------------------------------------------------
            onChange(event) {
                const checkBox = this.$refs.checkBox;
                if (checkBox.checked) {
                    this.checkColumn.addItem(this.item);
                } else {
                    this.checkColumn.removeItem(this.item);
                }
            }
        },

        //-------------------------------------------------
        //   Tachyon Life Cycle
        //-------------------------------------------------

        /**
         * 렌더러 갱신시 호출됩니다.
         * @param grid
         * @param state
         */
        prepare(grid, state) {
            const item = state.item;
            const checkBox = this.$refs.checkBox;
            checkBox.checked = this.checkColumn.hasItem(item);
        }
    }

</script>

<style scoped>
    .m-checkbox-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
