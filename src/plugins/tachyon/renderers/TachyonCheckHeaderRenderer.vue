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
        name: 'tachyon-check-header-renderer',
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
                const items = this.grid.items;
                if (checkBox.checked) {
                    this.checkColumn.addItems(items);
                } else {
                    this.checkColumn.removeItems(items);
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
            const checkBox = this.$refs.checkBox;
            const collection = this.grid.collection;
            if (!collection) {
                return;
            }

            checkBox.checked = this.checkColumn.getItems().length === collection.length;
        }
    }

</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
