import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/routes/login';
import error from '@/routes/error';
import detail from '@/routes/detail';
import guide from '@/routes/guide';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/viewer'
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/Index.vue'),
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutLogin.vue'),
			children: [...login],
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutDetail.vue'),
			children: [...detail],
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutGuide.vue'),
			children: [...guide],
		},
		...error,
	],
});

export default router;
