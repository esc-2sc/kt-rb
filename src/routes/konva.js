export default [
	{
		path: '/konva',
		redirect: '/KonvaExample1'
	},
	{
		path: '/konva-1',
		name: 'KonvaExample1',
		component: () => import('@/views/konva/KonvaExample1.vue'),
	},
	{
		path: '/konva-basic-shapes',
		name: 'KonvaExampleBasicShapes',
		component: () => import('@/views/konva/KonvaExampleBasicShapes.vue'),
	},
	{
		path: '/konva-custom-shape',
		name: 'KonvaExampleCustomShape',
		component: () => import('@/views/konva/KonvaExampleCustomShape.vue'),
	},
	{
		path: '/konva-events',
		name: 'KonvaExampleEvents',
		component: () => import('@/views/konva/KonvaExampleEvents.vue'),
	},
	{
		path: '/konva-images',
		name: 'KonvaExampleImages',
		component: () => import('@/views/konva/KonvaExampleImages.vue'),
	},
	{
		path: '/konva-filters',
		name: 'KonvaExampleFilters',
		component: () => import('@/views/konva/KonvaExampleFilters.vue'),
	},
	{
		path: '/konva-save-load',
		name: 'KonvaExampleSaveLoad',
		component: () => import('@/views/konva/KonvaExampleSaveLoad.vue'),
	},
	{
		path: '/konva-drag-drop',
		name: 'KonvaExampleDragDrop',
		component: () => import('@/views/konva/KonvaExampleDragDrop.vue'),
	},
	{
		path: '/konva-transformer',
		name: 'KonvaExampleTransformer',
		component: () => import('@/views/konva/KonvaExampleTransformer.vue'),
	},
	{
		path: '/konva-simple-animations',
		name: 'KonvaExampleSimpleAnimations',
		component: () => import('@/views/konva/KonvaExampleSimpleAnimations.vue'),
	},
	{
		path: '/konva-cache',
		name: 'KonvaExampleCache',
		component: () => import('@/views/konva/KonvaExampleCache.vue'),
	},
	{
		path: '/konva-changing-z-index',
		name: 'KonvaExampleChangingzIndex',
		component: () => import('@/views/konva/KonvaExampleChangingzIndex.vue'),
	},

];