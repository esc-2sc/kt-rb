export default [
	{
		path: '/landing',
		redirect: '/landing-loading'
	},
	// 분석중
	{
		path: '/landing-loading',
		name: 'landing-loading',
		component: () => import('@/views/landing/LandingLoading.vue'),
	},
	// 조치완료
	{
		path: '/landing-complete',
		name: 'landing-complete',
		component: () => import('@/views/landing/LandingComplete.vue'),
	},
	// 주행상태 분석
	{
		path: '/landing-drive-state',
		name: 'landing-drive-state',
		component: () => import('@/views/landing/LandingDriveState.vue'),
	},
	// 배터리 분석
	{
		path: '/landing-battery',
		name: 'landing-battery',
		component: () => import('@/views/landing/LandingBattery.vue'),
	},
	// 금지구역 진입
	{
		path: '/landing-closed-area',
		name: 'landing-closed-area',
		component: () => import('@/views/landing/LandingClosedArea.vue'),
	},
	// 지도완성도 분석
	{
		path: '/landing-map-completion',
		name: 'landing-map-completion',
		component: () => import('@/views/landing/LandingMapCompletion.vue'),
	},
];