export default [
	{
		path: '/guide',
		name: 'guide',
		component: () => import('@/views/guide/Index.vue'),
	},
	{
		path: '/guide-text',
		name: 'guide-text',
		component: () => import('@/views/guide/Text.vue'),
		props: {filePath: 'guide/Text.vue'},
	},
	{
		path: '/guide-color',
		name: 'guide-color',
		component: () => import('@/views/guide/Color.vue'),
		props: {filePath: '/views/guide/Color.vue'},
	},
	{
		path: '/guide-title',
		name: 'guide-title',
		component: () => import('@/views/guide/Title.vue'),
		props: {filePath: '/views/guide/Title.vue'},
	},
	{
		path: '/guide-icon',
		name: 'guide-icon',
		component: () => import('@/views/guide/Icon.vue'),
		props: {filePath: '/views/guide/Icon.vue'},
	},
	{
		path: '/guide-button',
		name: 'guide-button',
		component: () => import('@/views/guide/Button.vue'),
		props: {filePath: '/views/guide/Button.vue'},
	},
	{
		path: '/guide-input',
		name: 'guide-input',
		component: () => import('@/views/guide/Input.vue'),
		props: {filePath: '/views/guide/Input.vue'},
	},
	{
		path: '/guide-textarea',
		name: 'guide-textarea',
		component: () => import('@/views/guide/Textarea.vue'),
		props: {filePath: '/views/guide/Textarea.vue'},
	},
	{
		path: '/guide-token',
		name: 'guide-token',
		component: () => import('@/views/guide/Token.vue'),
		props: {filePath: '/views/guide/Token.vue'},
	},
	{
		path: '/guide-check-radio-switch',
		name: 'guide-check-radio-switch',
		component: () => import('@/views/guide/CheckboxRadioSwitch.vue'),
		props: {filePath: '/views/guide/CheckboxRadioSwitch.vue'},
	},
	{
		path: '/guide-select',
		name: 'guide-select',
		component: () => import('@/views/guide/Select.vue'),
		props: {filePath: '/views/guide/Select.vue'},
	},
	{
		path: '/guide-image',
		name: 'guide-image',
		component: () => import('@/views/guide/Image.vue'),
		props: {filePath: '/views/guide/Image.vue'},
	},
	{
		path: '/guide-list',
		name: 'guide-list',
		component: () => import('@/views/guide/List.vue'),
		props: {filePath: '/views/guide/List.vue'},
	},
	{
		path: '/guide-tab',
		name: 'guide-tab',
		component: () => import('@/views/guide/Tab.vue'),
		props: {filePath: '/views/guide/Tab.vue'},
	},
	{
		path: '/guide-table',
		name: 'guide-table',
		component: () => import('@/views/guide/Table.vue'),
		props: {filePath: '/views/guide/Table.vue'},
	},
	{
		path: '/guide-paging',
		name: 'guide-paging',
		component: () => import('@/views/guide/Paging.vue'),
		props: {filePath: '/views/guide/Paging.vue'},
	},
	{
		path: '/guide-grid',
		name: 'guide-grid',
		component: () => import('@/views/guide/Grid.vue'),
		props: {filePath: '/views/guide/Grid.vue'},
	},
	{
		path: '/guide-grid-form',
		name: 'guide-grid-form',
		component: () => import('@/views/guide/GridForm.vue'),
		props: {filePath: '/views/guide/GridForm.vue'},
	},
	{
		path: '/guide-tooltip',
		name: 'guide-tooltip',
		component: () => import('@/views/guide/Tooltip.vue'),
		props: {filePath: '/views/guide/Tooltip.vue'},
	},
	{
		path: '/guide-alert-message',
		name: 'guide-alert-message',
		component: () => import('@/views/guide/AlertMessage.vue'),
		props: {filePath: '/views/guide/AlertMessage.vue'},
	},
	{
		path: '/guide-toast-message',
		name: 'guide-toast-message',
		component: () => import('@/views/guide/ToastMessage.vue'),
		props: {filePath: '/views/guide/ToastMessage.vue'},
	},
	{
		path: '/guide-snackbar',
		name: 'guide-snackbar',
		component: () => import('@/views/guide/Snackbar.vue'),
		props: {filePath: '/views/guide/Snackbar.vue'},
	},
	{
		path: '/guide-user',
		name: 'guide-user',
		component: () => import('@/views/guide/User.vue'),
		props: {filePath: '/views/guide/User.vue'},
	},
	{
		path: '/guide-progress',
		name: 'guide-progress',
		component: () => import('@/views/guide/Progress.vue'),
		props: {filePath: '/views/guide/Progress.vue'},
	},
	{
		path: '/guide-etc',
		name: 'guide-etc',
		component: () => import('@/views/guide/Etc.vue'),
		props: {filePath: '/views/guide/Etc.vue'},
	},
	{
		path: '/guide-popup',
		name: 'guide-grid-popup',
		component: () => import('@/views/guide/Popup.vue'),
		props: {filePath: '/views/guide/Popup.vue'},
	},
	{
		path: '/guide-memo',
		name: 'guide-memo',
		component: () => import('@/views/guide/Memo.vue'),
		props: {filePath: '/views/guide/Memo.vue'},
	},

	// PAGE
	{
		path: '/guide-search',
		name: 'guide-search',
		component: () => import('@/views/guide/Search.vue'),
	},
	{
		path: '/guide-view',
		name: 'guide-view',
		component: () => import('@/views/guide/View.vue'),
	},

	// VRIX
	{
		path: '/guide-vrix-list',
		name: 'guide-vrix-list',
		component: () => import('@/views/guide/VrixList.vue'),
	},
	{
		path: '/guide-vrix-combobox',
		name: 'guide-vrix-combobox',
		component: () => import('@/views/guide/VrixCombobox.vue'),
	},
	{
		path: '/guide-vrix-datefield',
		name: 'guide-vrix-datefield',
		component: () => import('@/views/guide/VrixDatefield.vue'),
	},
	{
		path: '/guide-vrix-tree',
		name: 'guide-vrix-tree',
		component: () => import('@/views/guide/VrixTree.vue'),
	},
	{
		path: '/guide-vrix-autocomplete',
		name: 'guide-vrix-autocomplete',
		component: () => import('@/views/guide/VrixAutocomplete.vue'),
	},
	{
		path: '/guide-vrix-tokenizer',
		name: 'guide-vrix-tokenizer',
		component: () => import('@/views/guide/VrixTokenizer.vue'),
	},
	{
		path: '/guide-vrix-popup',
		name: 'guide-vrix-popup',
		component: () => import('@/views/guide/VrixPopup.vue'),
	},

	// Components
	{
		path: '/guide-com-dropdown-bar',
		name: 'guide-com-dropdown-bar',
		component: () => import('@/views/guide/ComponentComDropwDownBar.vue'),
	},

	{
		path: '/guide-com-paging',
		name: 'guide-com-paging',
		component: () => import('@/views/guide/ComponentComPaging.vue'),
	},
];
