export default [
	// Hub
	// {
	// 	path: '/collaboration-meeting-management',
	// 	name: 'collaboration-meeting-management',
	// 	component: () => import('@/views/collaboration/meeting/Management.vue'),
	// },
	// {
	// 	path: '/collaboration-meeting-list',
	// 	name: 'collaboration-meeting-list',
	// 	component: () => import('@/views/collaboration/meeting/List.vue'),
	// },
	{
		path: '/collaboration-meeting-detail',
		name: 'collaboration-meeting-detail',
		component: () => import('@/views/collaboration/meeting/Detail.vue'),
	},
	{
		path: '/collaboration-meeting-write',
		name: 'collaboration-meeting-write',
		component: () => import('@/views/collaboration/meeting/Write.vue'),
	},
	{
		path: '/collaboration-meeting-write-popup',
		name: 'collaboration-meeting-write-popup',
		component: () => import('@/views/collaboration/meeting/WritePopup.vue'),
	},
	{
		path: '/collaboration-meeting-write-popup-2',
		name: 'collaboration-meeting-write-popup-2',
		component: () => import('@/views/collaboration/meeting/WritePopup2.vue'),
	},
	{
		path: '/collaboration-meeting-call-detail',
		name: 'collaboration-meeting-call-detail',
		component: () => import('@/views/collaboration/meeting/CallDetail.vue'),
	},
	{
		path: '/collaboration-meeting-call-write',
		name: 'collaboration-meeting-call-write',
		component: () => import('@/views/collaboration/meeting/CallWrite.vue'),
	},

	// Action Item
	// {
	// 	path: '/collaboration-actionitem-management',
	// 	name: 'collaboration-actionitem-management',
	// 	component: () => import('@/views/collaboration/actionitem/Management.vue'),
	// },
	// {
	// 	path: '/collaboration-actionitem-list',
	// 	name: 'collaboration-actionitem-list',
	// 	component: () => import('@/views/collaboration/actionitem/List.vue'),
	// },
	{
		path: '/collaboration-actionitem-detail',
		name: 'collaboration-actionitem-detail',
		component: () => import('@/views/collaboration/actionitem/Detail.vue'),
	},
	{
		path: '/collaboration-actionitem-write',
		name: 'collaboration-actionitem-write',
		component: () => import('@/views/collaboration/actionitem/Write.vue'),
	},

	// Customer
	{
		path: '/collaboration-customer-list',
		name: 'collaboration-customer-list',
		component: () => import('@/views/collaboration/customer/Index.vue'),
	},
	{
		path: '/collaboration-customer-detail',
		name: 'collaboration-customer-detail',
		component: () => import('@/views/collaboration/customer/Detail.vue'),
	},
	{
		path: '/collaboration-customer-write',
		name: 'collaboration-customer-write',
		component: () => import('@/views/collaboration/customer/Write.vue'),
	},
	{
		path: '/collaboration-customer-write-popup',
		name: 'collaboration-customer-write-popup',
		component: () => import('@/views/collaboration/customer/WritePopup.vue'),
	},
];
