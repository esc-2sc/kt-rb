import detail from '@/routes/sample.detail';

export default [
	{
		path: '/sample',
		name: 'sample',
		component: () => import('@/views/sample/Index.vue'),
	},
	{
		path: '/',
		component: () => import('@/views/layouts/LayoutDetailPopup.vue'),
		children: [...detail],
	},

];
