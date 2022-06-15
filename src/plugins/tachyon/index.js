import Vue from 'vue'
import tachyon, {TachyonColumn} from 'tachyon';

//타키온 테마
import './theme';

import DefaultHeaderRenderer from './renderers/DefaultHeaderRenderer';
import XlsxExport from './addons/xlsx/export';
import XlsxImport from './addons/xlsx/import';
import CollectionManager from './addons/collection/CollectionManager';

import TachyonCheckColumn from './columns/TachyonCheckColumn';
import TachyonFilterColumn from './columns/TachyonFilterColumn';

import * as formatter from '../../utils/formatter';

Vue.use(tachyon);
Vue.component('tachyon-check-column', TachyonCheckColumn);
Vue.component('tachyon-filter-column', TachyonFilterColumn);

//타키온 엑셀 내보내기
// tachyon.addon.add('xlsx-export', XlsxExport);
// tachyon.addon.add('xlsx-import', XlsxImport);
// tachyon.addon.add('collection-manager', CollectionManager);

//타키온 헤더렌더러 기본값 설정
TachyonColumn.props.headerRenderer.default = DefaultHeaderRenderer;

//타키온 포멧터 지정 - 숫자
// tachyon.formatter.add('number', {
//     format: function (value) {
//         if (value == null || value === '') {
//             return '';
//         }
//         if (this.options.scale != null) {
//             value = +value * this.options.scale;
//         }
//         return formatter.toNumberString(value, this.pattern);
//     }
// });

//타키온 포멧터 지정 - 날짜
// tachyon.formatter.add('date', {
//     format: function (value) {
//         const sourcePattern = this.source;
//         const date = (!sourcePattern || sourcePattern === 'date') ? new Date(value) : formatter.toDate(value, sourcePattern);
//         if (!date || isNaN(date.getTime())) {
//             console.warn('date is invalid', value, this.options);
//         }
//         return formatter.toDateString(value, this.pattern);
//     }
// });
