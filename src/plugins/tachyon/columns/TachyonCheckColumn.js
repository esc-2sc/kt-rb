
import {TachyonColumn} from 'tachyon';
import TachyonCheckHeaderRenderer from '../renderers/TachyonCheckHeaderRenderer';
import TachyonCheckItemRenderer from '../renderers/TachyonCheckItemRenderer';

export default {
    name: 'tachyon-check-column',
    provide() {
        return {
            checkColumn: this
        }
    },
    model: {
        prop: 'items',
        event: 'items-change'
    },
    mixins: [TachyonColumn],
    props: {
        useCheckHeader: {
            type: Boolean,
            default: false
        },
        headerRenderer: {
            type: [Function, Object],
            //TODO props에서는 this 바인딩이 되지 않음 'headerRenderer'가 함수형일때 함수 호출시 해당 객체(this) 를 바인딩 해줌!!
            default: function () {
                return this.useCheckHeader ? TachyonCheckHeaderRenderer : null;
            },
        },
        itemRenderer: {
            type: [Function, Object],
            default: () => TachyonCheckItemRenderer,
        },
        trueAs: {
            type: [String, Number, Boolean],
            default: true,
        },
        falseAs: {
            type: [String, Number, Boolean],
            default: false,
        },
        disableCollectionUpdate: {
            type: Boolean,
            default: false
        },
        sortable:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            items: [],
            grid: null,
        }
    },
    computed: {},
    watch: {
        grid(value, old) {
            if (old) {
                old.removeEventListener('collection-change', this.onGridCollectionChange);
            }

            if (value) {
                value.addEventListener('collection-change', this.onGridCollectionChange);
            }
        },
        items(value) {
            //TODO 초기선택 작업 필요!!!!
            this.emitItemsChange();
        }
    },
    beforeMount() {
        const handler = (event) => {
            this.columnInstance.removeEventListener('grid-change', handler);
            this.grid = event.detail.grid;
        };
        this.columnInstance.addEventListener('grid-change', handler);
    },
    beforeDestroy() {
        if (this.grid) {
            this.grid.removeEventListener('collection-change', this.onGridCollectionChange);
        }
    },
    methods: {

        /**
         * 선택된 데이타 목록을 초기화 합니다.
         */
        clear() {
            if (this.items.length > 0) {
                const removed = this.items.slice(0);
                this.items.length = 0;
                this.$emit('item-remove', removed);
                this.emitItemsChange();
                this.grid.invalidate();
            }
        },
        /**
         * 선택된 목록을 반환합니다.
         * @returns {*}
         */
        getItems() {
            return this.items;
        },
        /**
         * 해당 아이템이 포함되어 있는지 확인합니다.
         * @param item
         * @returns {boolean}
         */
        hasItem(item) {
            return this.items.indexOf(item) >= 0;
        },
        /**
         * 해당 아이템 목록을 추가합니다.
         * @param items
         */
        addItems(items) {
            const isAdded = (items || []).reduce((flag, item) => {
                if (this.internalAddItem(item)) {
                    flag = true;
                }
                return flag;
            }, false);

            if (isAdded) {
                this.$emit('item-add', items);
                this.emitItemsChange();
                this.grid.invalidate();
            }
        },
        /**
         * 해당 아이템을 추가합니다.
         * @param items
         */
        addItem(item) {
            if (this.internalAddItem(item)) {
                this.$emit('item-add', item);
                this.emitItemsChange();
                this.grid.invalidate();
            }
        },
        /**
         * @private
         * @param item
         * @returns {boolean}
         */
        internalAddItem(item) {
            if (!this.hasItem(item)) {
                this.items.push(item);
                this.updateItemValue(item, true);
                return true;
            }
            return false;
        },
        /**
         * 해당 아이템 목록 삭제합니다
         * @param items
         */
        removeItems(items) {
            const isRemoved = (items || []).reduce((flag, item) => {
                if (this.internalRemoveItem(item)) {
                    flag = true;
                }
                return flag;
            }, false);

            if (isRemoved) {
                this.$emit('item-remove', items);
                this.emitItemsChange();
                this.grid.invalidate();
            }
        },
        /**
         * 해당 아이템 삭제합니다
         * @param item
         */
        removeItem(item) {
            if (this.internalRemoveItem(item)) {
                this.$emit('item-remove', item);
                this.emitItemsChange();
                this.grid.invalidate();
            }
        },
        /**
         * @private
         * @param item
         * @returns {boolean}
         */
        internalRemoveItem(item) {
            const index = this.items.indexOf(item);
            if (index >= 0) {
                this.items.splice(index, 1);
                this.updateItemValue(item, false);
                return true;
            }
            return false;
        },


        updateItemValue(item, flag) {

            const collection = this.grid && this.grid.collection;
            const dataField = this.dataField;

            if (!collection || !dataField || !collection.contains(item)) {
                return;
            }

            const value = flag ? this.trueAs : this.falseAs;

            if (!this.disableCollectionUpdate) {
                collection.setItemValue(item, dataField, value)
            } else {
                try {
                    const path = this.columnInstance.dataFieldPath.slice(0);
                    while (path.length > 1) {
                        item = item[path.shift()];
                    }
                    item[path.shift()] = value;
                } catch (e) {
                    console.error(e)
                }
            }
        },
        emitItemsChange() {
            this.$emit('items-change', this.items);
        },
        /**
         * grid collection-change
         * @param event
         */
        onGridCollectionChange(event) {
            const detail = event.detail
            const kind = detail.kind;
            if (kind === 'reset') {
                const collection = event.detail.collection;
                this.items = collection.toArray()
                    .filter(item => this.columnInstance.itemToValue(item) === this.trueAs)
            } else if (kind === 'remove') {
                (detail.items || []).forEach(item => {
                    this.removeItem(item);
                });
            }
        }
    },
}
