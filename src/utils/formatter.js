
import * as dateFormatter from 'date-format';
import numberFormatter from 'number-format.js/lib/format.es5.js';

export function toDateString(date, format = 'yyyy.MM.dd') {
    let result = dateFormatter.asString(format, date);
    const mReg = format.match(/M/g);
    if (mReg && mReg.length === 1) {
        result = result.replace(/M/, date.getMonth() + 1);
    }

    const dReg = format.match(/d/g);
    if (dReg && dReg.length === 1) {
        result = result.replace(/d/, date.getDay());
    }

    return result;
}

export function toTimeString(date, format = 'yyyy.MM.dd hh:mm:ss') {
    return toDateString(date, format)
}

export function toDate(value, format = 'yyyy.MM.dd') {
    return dateFormatter.parse(format, value, new Date(2000, 0, 1));
}

export function toNumberString(value, format = '#,##0.00') {
    return numberFormatter(format, value);
}
