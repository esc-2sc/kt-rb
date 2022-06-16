import Vue from 'vue';
import App from './App.vue';

// router
import router from '@/routes/index';

// vuex
import store from '@/store/index';

// CSS
import('../public/resources/css/style.css');

// Plugins : vrix, tachyon, chartjs
import '@/plugins';

Vue.config.productionTip = false;
new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
