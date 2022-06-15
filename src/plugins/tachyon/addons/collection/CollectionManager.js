
function defaultCompare(v1, v2) {
    //캐스팅 비교 1 == '1'
    return v1 == v2;
}

function removeArrayItem(array, item) {
    const index = array.indexOf(item);
    if (index >= 0) {
        array.splice(index, 1);
        return true;
    }
    return false;
}


class CollectionManager {
    constructor(grid, compareFunction = null) {
        this.grid = grid;
        this.compareFunction = compareFunction;
        this.clear();
        grid.addEventListener('collection-change', this._onCollectionChange.bind(this));
    }

    /**
     * 새로 생성된 아이템 목록
     * @returns {[]}
     */
    get createdItems() {
        return this._createdItems.slice(0);
    }

    /**
     * 삭제된 아이템 목록
     * @returns {[]}
     */
    get removedItems() {
        return this._removedItems.slice(0);
    }

    /**
     * 갱신된 아이템 목록
     * @returns  {[]}
     */
    get updatedItems() {
        return this._updatedItems.slice(0);
    }

    /**
     * 데이타 변경 여부
     * @returns {boolean}
     */
    get isChanged() {
        return this._createdItems.length > 0 || this._updatedItems.length > 0 || this._removedItems.length > 0
    }

    /**
     * 초기화
     */
    clear() {
        this._createdItems = [];
        this._updatedItems = [];
        this._removedItems = [];
        this._oldDataMap = new Map();
    }

    /**
     * 변경되기 전 아이템 값
     * @param item
     * @param dataField
     * @returns {*|null}
     */
    getOldItemValue(item, dataField) {
        let oldData = this._oldDataMap.get(item);
        return oldData && oldData[dataField] || null;
    }

    _compareValue(v1, v2) {
        return this.compareFunction instanceof Function && this.compareFunction(v1, v2) || defaultCompare(v1, v2);
    }

    _collectionAdded(items, location) {
        //추가 히스토리 저장
        Array.prototype.push.apply(this._createdItems, items);
    }

    _collectionRemoved(items, location) {
        items.forEach(item => {
            const createdIndex = this._createdItems.indexOf(item);
            if (createdIndex >= 0) {
                removeArrayItem(this._createdItems, item);
            } else {
                removeArrayItem(this._updatedItems, item);
                //삭제 히스토리 저장
                this._removedItems.push(item);
            }
        });
    }

    _collectionUpdated(items) {
        const createdItems = this._createdItems;
        const updatedItems = this._updatedItems;
        const oldDataMap = this._oldDataMap;

        items.forEach((item, index) => {
            const {source, property, newValue, oldValue} = item;

            //생성된 데이타 제외..
            if (createdItems.indexOf(source) < 0) {
                let oldData = oldDataMap.get(source);
                if (!oldData) {
                    oldData = {};
                    oldDataMap.set(source, oldData);
                }

                if (!(property in oldData)) {
                    oldData[property] = oldValue;
                }

                //원본소스와 비교.
                const isChanged = !this._compareValue(oldData[property], newValue);
                if (isChanged) {
                    if (updatedItems.indexOf(source) < 0) {
                        updatedItems.push(source);
                    }
                } else {
                    delete oldData[property];
                    if (Object.keys(oldData).length <= 0) {
                        removeArrayItem(updatedItems, source);
                    }
                }
            }
        });
    }

    _onCollectionChange(event) {
        const detail = event.detail,
            kind = detail.kind,
            items = detail.items,
            location = detail.location;
        switch (kind) {
            case 'add':
                this._collectionAdded(items, location);
                break;
            case 'remove':
                this._collectionRemoved(items, location);
                break;
            case 'update':
                this._collectionUpdated(items, location);
                break;
            case 'reset':
                this.clear();
                break;
        }
    }
}


export default {
    created(grid) {
        this.manager = new CollectionManager(grid);
    },
    get createdItems() {
        return this.manager.createdItems;
    },

    get removedItems() {
        return this.manager.removedItems;
    },

    get updatedItems() {
        return this.manager.updatedItems;
    },

    get isChanged() {
        return this.manager.isChanged;
    },
}
