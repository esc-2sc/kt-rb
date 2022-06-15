
import worker from './worker';

function generateField(field, index) {
    return field + '_' + index;
}

function normalizeColumns(columns) {
    for (let i = columns.length - 1; i >= 0; i--) {
        let column = columns[i];
        let children = column.children;
        if (children && children.length > 0) {
            if (column.boxMode === true) {
                children.forEach((child, index) => {
                    child.dataField = generateField(child.dataField, index)
                })
            }
            normalizeColumns(children);
            if (children.length <= 0) {
                columns.splice(i, 1);
            }
        } else if (!column.visible) {
            columns.splice(i, 1);
        }
    }
    return columns;
}

function toColumns(grid) {
    return normalizeColumns(grid.columns.map(column => column.toJSON()));
}

function toMergeCells(grid) {
    const cells = grid.getMergeCells();
    return cells.reduce((array, cell) => {
        array.push(cell.toJSON());
        if (Array.isArray(cell.crossCells)) {
            array = array.concat(cell.crossCells.map(c => c.toJSON()))
        }
        return array;
    }, [])
}

function toNumber(value) {
    if (value != null && value !== '') {
        return +value;
    }
    return null;
}


function toRows(grid) {

    const items = grid.collection.toArray();
    const columns = grid.normalizedColumns;
    const numColumns = columns.length;

    if (tachyon.isTreeGrid(grid)) {
        return items.map(item => {
            const row = {};
            for (let i = 0; i < numColumns; i++) {
                const column = columns[i];
                const isNumber = column.format && column.format.type === 'number';
                const dataField = 'hostColumn' in column ? generateField(column.dataField, column.hostColumn.children.indexOf(column)) : column.dataField;
                const value = column.itemToLabel(item);
                const original = item[dataField];
                row[dataField] = isNumber ? toNumber(original != null ? original : value) : value;
            }
            return row;
        });
    } else {
        const filtered = columns.filter(column => !!(column.labelFunction instanceof Function || column.format && column.format.type === 'number'));
        if (filtered.length >= 0) {
            const updateItem = item => {
                const row = {...item};
                filtered.forEach(column => {
                    if (column.dataField != null) {
                        const isNumber = column.format && column.format.type === 'number';
                        const dataField = column.dataField;
                        const value = column.itemToLabel(item);
                        const original = item[dataField];
                        row[dataField] = isNumber ? toNumber(original != null ? original : value) : value;
                    }
                });
                return row;
            };

            return items.map(item => {
                return updateItem(item);
            });
        }
    }

    return items;
}

function saveFile(data, name) {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(data, name);
    } else {
        let url = window.URL.createObjectURL(data);
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
}

/**
 * 동시 여러 번 호출시 문제 있음!!!
 */
export function exportXlsx(name, columns, rows, mergeCells, options = {}) {
    return new Promise((resolve, reject) => {
        const messageFunc = (event) => {
            worker.removeEventListener('message', messageFunc);
            const data = event.data;
            if (data.type === 'xlsx') {
                //파일 내려받기
                saveFile(data.data, name);
                resolve(data);
            } else {
                reject(data);
            }
        };

        worker.addEventListener('message', messageFunc);
        worker.postMessage({
            type: 'write',
            columns, rows, mergeCells, options
        });
    });
}

export default {
    created(grid) {
        this.running = false;
    },
    export(name = 'excel.xlsx', options) {
        if (this.running) {
            return Promise.reject('exporting');
        }
        this.running = true;


        const columns = toColumns(this.grid);
        const rows = toRows(this.grid);
        const mergeCells = toMergeCells(this.grid);

        return exportXlsx(name, columns, rows, mergeCells, options)
            .then(() => {
                this.running = false;
            })
            .catch(() => {
                this.running = false;
            })
    },
}
