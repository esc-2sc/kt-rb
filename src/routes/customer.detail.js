export default [
	// Profile
	{
		path: '/customer-profile-overview',
		name: 'customer-profile-overview',
		component: () => import('@/views/customer/profile/Overview.vue'),
	},
	{
		path: '/customer-profile-overview-popup-photo',
		name: 'customer-profile-overview-popup-photo',
		component: () => import('@/views/customer/profile/OverviewPopupPhoto.vue'),
	},
	{
		path: '/customer-profile-overview-popup-photo-modify',
		name: 'customer-profile-overview-popup-photo-modify',
		component: () => import('@/views/customer/profile/OverviewPopupPhotoModify.vue'),
	},
	{
		path: '/customer-profile-overview-popup-restaurant',
		name: 'customer-profile-overview-restaurant-popup-restaurant',
		component: () => import('@/views/customer/profile/OverviewPopupRestaurant.vue'),
	},
	{
		path: '/customer-profile-overview-popup-restaurant-modify',
		name: 'customer-profile-overview-restaurant-popup-restaurant-modify',
		component: () => import('@/views/customer/profile/OverviewPopupRestaurantModify.vue'),
	},
	{
		path: '/customer-profile-overview-popup-gift',
		name: 'customer-profile-overview-popup-gift',
		component: () => import('@/views/customer/profile/OverviewPopupGift.vue'),
	},
	{
		path: '/customer-profile-overview-popup-gift-modify',
		name: 'customer-profile-overview-popup-gift-modify',
		component: () => import('@/views/customer/profile/OverviewPopupGiftModify.vue'),
	},
	{
		path: '/customer-profile-overview-popup-write-basic',
		name: 'customer-profile-overview-popup-write-basic',
		component: () => import('@/views/customer/profile/OverviewPopupWriteBasic.vue'),
	},
	{
		path: '/customer-profile-overview-popup-write-additional',
		name: 'customer-profile-overview-popup-write-additional',
		component: () => import('@/views/customer/profile/OverviewPopupWriteAdditional.vue'),
	},
	{
		path: '/customer-profile-organization',
		name: 'customer-profile-organization',
		component: () => import('@/views/customer/profile/Organization.vue'),
	},
	{
		path: '/customer-profile-organization-popup-summary',
		name: 'customer-profile-organization-popup-summary',
		component: () => import('@/views/customer/profile/OrganizationPopupSummary.vue'),
	},
	{
		path: '/customer-profile-email',
		name: 'customer-profile-email',
		component: () => import('@/views/customer/profile/DocumentEmail.vue'),
	},

	{
		path: '/customer-profile-meeting',
		name: 'customer-profile-meeting',
		component: () => import('@/views/customer/profile/Meeting.vue'),
	},

	{
		path: '/customer-profile-file',
		name: 'customer-profile-file',
		component: () => import('@/views/customer/profile/File.vue'),
	},

	{
		path: '/customer-profile-popup-file',
		name: 'customer-profile-popup-file',
		component: () => import('@/views/customer/profile/PopupFile.vue'),
	},
	{
		path: '/customer-profile-popup-photo',
		name: 'customer-profile-popup-photo',
		component: () => import('@/views/customer/profile/PopupPhoto.vue'),
	},

	// Contacts
	{
		path: '/customer-contacts-overview',
		name: 'customer-contacts-overview',
		component: () => import('@/views/customer/contacts/Overview.vue'),
	},
	{
		path: '/customer-contacts-overview-popup-photo',
		name: 'customer-contacts-overview-popup-photo',
		component: () => import('@/views/customer/contacts/OverviewPopupPhoto.vue'),
	},

	{
		path: '/customer-contacts-overview-popup-restaurant',
		name: 'customer-contacts-overview-restaurant-popup-restaurant',
		component: () => import('@/views/customer/contacts/OverviewPopupRestaurant.vue'),
	},
	{
		path: '/customer-contacts-overview-popup-gift',
		name: 'customer-contacts-overview-popup-gift',
		component: () => import('@/views/customer/contacts/OverviewPopupGift.vue'),
	},
	{
		path: '/customer-contacts-overview-popup-write-basic',
		name: 'customer-contacts-overview-popup-write-basic',
		component: () => import('@/views/customer/contacts/OverviewPopupWriteBasic.vue'),
	},
	{
		path: '/customer-contacts-overview-popup-write-additional',
		name: 'customer-contacts-overview-popup-write-additional',
		component: () => import('@/views/customer/contacts/OverviewPopupWriteAdditional.vue'),
	},
	{
		path: '/customer-contacts-organization',
		name: 'customer-contacts-organization',
		component: () => import('@/views/customer/contacts/Organization.vue'),
	},
	{
		path: '/customer-contacts-organization-popup-summary',
		name: 'customer-contacts-organization-popup-summary',
		component: () => import('@/views/customer/contacts/OrganizationPopupSummary.vue'),
	},
	{
		path: '/customer-contacts-document',
		name: 'customer-contacts-document',
		component: () => import('@/views/customer/contacts/DocumentEmail.vue'),
	},
	{
		path: '/customer-contacts-meeting',
		name: 'customer-contacts-meeting',
		component: () => import('@/views/customer/contacts/Meeting.vue'),
	},
];
