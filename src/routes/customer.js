import detail from '@/routes/customer.detail';

export default [
	{
		path: '/customer',
		redirect: '/customer-profile',
	},
	{
		path: '/customer-profile',
		name: 'customer-profile',
		component: () => import('@/views/customer/profile/Index.vue'),
	},
	{
		path: '/customer-contacts',
		name: 'customer-contacts',
		component: () => import('@/views/customer/contacts/Index.vue'),
	},
	{
		path: '/',
		component: () => import('@/views/layouts/LayoutDetailPopup.vue'),
		children: [...detail],
	},

];
