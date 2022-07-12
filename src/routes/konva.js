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

];