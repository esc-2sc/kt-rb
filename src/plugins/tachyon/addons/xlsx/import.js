
//확인 필수!!!
//import Worker from 'worker-loader!./exceljs.worker.js';
import worker from './worker';

function toColumns(grid) {
    return grid.columns.map(column => column.toJSON());
}

export function importXlsx(file, columns, options = {}) {
    return new Promise((resolve, reject) => {
        const messageFunc = (event) => {
            worker.removeEventListener('message', messageFunc);
            const data = event.data;
            if (data.type === 'array') {
                resolve(data);
            } else {
                console.error(new Error(data.data));
                reject(data);
            }
        };

        worker.addEventListener('message', messageFunc);
        worker.postMessage({
            type: 'read',
            columns,
            file
        });
    });
}

export default {
    created(grid) {
        this.running = false;
    },
    import(file, options = {}) {
        if (this.running) {
            console.warn('importing excel.');
            return Promise.reject(new Error('importing excel'));
        }

        this.running = true;

        const columns = toColumns(this.grid);
        return importXlsx(file, columns, options)
            .finally(() => {
                this.running = false;
            });
    }
}
