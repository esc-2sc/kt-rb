import Vue from 'vue';
import axios from "axios";

Vue.prototype.axios = axios;

// Design Guide UI
import GuideBox from "@/views/guide/components/GuideBox";
import GuideBoxItem from "@/views/guide/components/GuideBoxItem";
import GuideBoxLink from "@/views/guide/components/GuideBoxLink";
import GuideTable from "@/views/guide/components/GuideTable";
import GuideTableItem from "@/views/guide/components/GuideTableItem";
Vue.component('guide-box', GuideBox);
Vue.component('guide-box-item', GuideBoxItem);
Vue.component('guide-box-link', GuideBoxLink);
Vue.component('guide-table', GuideTable);
Vue.component('guide-table-item', GuideTableItem);