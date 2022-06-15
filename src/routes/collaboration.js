import detail from '@/routes/collaboration.detail';

export default [
	{
		path: '/collaboration',
		redirect: '/collaboration-customer',
	},
	{
		path: '/collaboration-customer',
		name: 'collaboration-customer',
		component: () => import('@/views/collaboration/customer/Index.vue'),
	},
	{
		path: '/collaboration-customer-write-start',
		name: 'collaboration-customer-write-start',
		component: () => import('@/views/collaboration/customer/WriteStart.vue'),
	},
	{
		path: '/',
		component: () => import('@/views/layouts/LayoutDetailPopup.vue'),
		children: [...detail],
	},

];
