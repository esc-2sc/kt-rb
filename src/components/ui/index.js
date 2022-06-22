import Vue from 'vue';
Vue.prototype.$EventBus = new Vue();

// Design Layout
// import LayoutContent from "@/views/layouts/LayoutContent";
// Vue.component('layout-content', LayoutContent);

// Design UI
import LabelBox from "@/components/ui/LabelBox";
import LabelInput from "@/components/ui/LabelInput";
import LabelTextarea from "@/components/ui/LabelTextarea";
import LabelToken from "@/components/ui/LabelToken";
import LabelFile from "@/components/ui/LabelFile";
import LabelTab from "@/components/ui/LabelTab";

Vue.component('label-box', LabelBox);
Vue.component('label-input', LabelInput);
Vue.component('label-textarea', LabelTextarea);
Vue.component('label-token', LabelToken);
Vue.component('label-file', LabelFile);
Vue.component('label-tab', LabelTab);

