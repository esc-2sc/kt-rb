import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/routes/login';
import customer from '@/routes/customer';
import collaboration from '@/routes/collaboration';
import mail from '@/routes/mail';

import error from '@/routes/error';
import sample from '@/routes/sample';
import guide from '@/routes/guide';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/sample'
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/Index.vue')
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutLogin.vue'),
			children: [...login],
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutDetailFile.vue'),
			children: [...mail],
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutDetailFile.vue'),
			children: [...customer],
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutDetailFile.vue'),
			children: [...collaboration],
		},
		{
			path: '/',
			component: () => import('@/views/layouts/LayoutDetail.vue'),
			children: [...sample],
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
