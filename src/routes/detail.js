export default [
	{
		path: '/viewer',
		name: 'viewer',
		component: () => import('@/views/Viewer.vue'),
	},
	{
		path: '/detail',
		name: 'detail',
		component: () => import('@/views/Detail.vue'),
	},
];
