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

	// 설정 - 알람
	{
		path: '/setting-alarm-send-list',
		name: 'setting-alarm-send-list',
		component: () => import('@/views/setting/SettingAlarmSendList.vue'),
	},
	{
		path: '/setting-alarm-send-search',
		name: 'setting-alarm-send-search',
		component: () => import('@/views/setting/SettingAlarmSendSearch.vue'),
	},
	{
		path: '/setting-alarm-send-detail',
		name: 'setting-alarm-send-detail',
		component: () => import('@/views/setting/SettingAlarmSendDetail.vue'),
	},
	{
		path: '/setting-alarm-template-list',
		name: 'setting-alarm-template-list',
		component: () => import('@/views/setting/SettingAlarmTemplateList.vue'),
	},
	// {
	// 	path: '/setting-alarm-template-time',
	// 	name: 'setting-alarm-template-time',
	// 	component: () => import('@/views/setting/SettingAlarmTemplateTime.vue'),
	// },
	// {
	// 	path: '/setting-alarm-template-modify',
	// 	name: 'setting-alarm-template-modify',
	// 	component: () => import('@/views/setting/SettingAlarmTemplateModify.vue'),
	// },
	{
		path: '/setting-alarm-template-snackbar',
		name: 'setting-alarm-template-snackbar',
		component: () => import('@/views/setting/SettingAlarmTemplateSnackbar.vue'),
	},

	// 설정 - 계정관리
	{
		path: '/setting-account-list',
		name: 'setting-account-list',
		component: () => import('@/views/setting/SettingAccountList.vue'),
	},
	// {
	// 	path: '/setting-account-change',
	// 	name: 'setting-account-change',
	// 	component: () => import('@/views/setting/SettingAccountChange.vue'),
	// },
	// {
	// 	path: '/setting-account-change-popup',
	// 	name: 'setting-account-change-popup',
	// 	component: () => import('@/views/setting/SettingAccountChangePopup.vue'),
	// },
	{
		path: '/setting-account-detail',
		name: 'setting-account-detail',
		component: () => import('@/views/setting/SettingAccountDetail.vue'),
	},
	// {
	// 	path: '/setting-account-detail-modify',
	// 	name: 'setting-account-detail-modify',
	// 	component: () => import('@/views/setting/SettingAccountDetailModify.vue'),
	// },
	{
		path: '/setting-account-snackbar',
		name: 'setting-account-snackbar',
		component: () => import('@/views/setting/SettingAccountSnackbar.vue'),
	},
];
