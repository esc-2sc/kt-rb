import detail from '@/routes/mail.detail';

export default [
	{
		path: '/mail',
		name: 'mail',
		component: () => import('@/views/mail/Index.vue'),
	},
	{
		path: '/',
		component: () => import('@/views/layouts/LayoutDetailPopup.vue'),
		children: [...detail],
	},

];
