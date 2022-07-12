import Vue from 'vue';
import AsyncComputed from 'vue-async-computed'
import VueKonva from 'vue-konva';

import './vrix.js'
import './tachyon'

import ComDropdownBar from "@/components/dropdownbar/ComDropdownBar";
import ComPaging from "@/components/paging/ComPaging";
Vue.use(AsyncComputed);
Vue.use(VueKonva);
Vue.component('com-dropdown-bar', ComDropdownBar);
Vue.component('com-paging', ComPaging);