export default [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/Index.vue'),
	},
	{
		path: '/join',
		name: 'join',
		component: () => import('@/views/login/Join.vue'),
	},
	{
		path: '/password-email',
		name: 'password-email',
		component: () => import('@/views/login/PasswordEmail.vue'),
	},
	{
		path: '/password-code',
		name: 'password-code',
		component: () => import('@/views/login/PasswordCode.vue'),
	},
	{
		path: '/password-update',
		name: 'password-update',
		component: () => import('@/views/login/PasswordUpdate.vue'),
	},
];
