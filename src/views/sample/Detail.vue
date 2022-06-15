<template>
    <div class="ac-content-view">
        <div class="ac-content-view__header">
            <div class="ac-content-view__header-inner">
                <div class="ac-content-view__header-l">
                    <h2 class="a-title-4 ac-content-view__header-title">Sample Title</h2>
                </div><!-- //ac-content-view__header-l -->
                <div class="ac-content-view__header-r">
                    <div class="a-tab-nav">
                        <button v-for="(nav, index) in navData" :key="`n-${nav}${index}`"
                                :selected="nav.isSelected">{{nav.label}}</button>
                    </div><!-- //a-tab-nav -->
                </div><!-- //ac-content-view__header-r -->
            </div>
        </div><!-- //ac-content-view__header -->
        <div class="ac-content-view__body">
            <div class="ac-content-view__wrap">
                <p style="height:3000px;">
                    Sample Detail
                </p>
            </div><!-- //ac-content-view__wrap -->
        </div><!-- //ac-content-view__body -->
    </div><!-- //ac-content-view -->
</template>

<script>
export default {
    name: 'sample-detail',
	data() {
		return {
		    navData: [
                {label:'Overview', value:'', isSelected: true},
                {label:'Organization', value:'' },
                {label:'Document & Email', value:'' },
                {label:'Meeting', value:'' },
                {label:'File', value:'' },
            ]
		};
	},
    methods: {
	},
};
</script>

<style scoped>
</style>
