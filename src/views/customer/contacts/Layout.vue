<template>
    <div class="ac-content-view">
        <div class="ac-content-view__header">
            <div class="ac-content-view__header-inner">
                <div class="ac-content-view__header-l">
                    <h2 class="a-title-4 ac-content-view__header-title">{{title}}</h2>
                </div><!-- //ac-content-view__header-l -->
                <div class="ac-content-view__header-r">
                    <div class="a-tab-nav">
                        <button v-for="(nav, index) in navData" :key="`n-${nav}${index}`" @click="goTo(nav)"
                                :selected="activeIndex === index">{{nav.label}}</button>
                    </div><!-- //a-tab-nav -->
                </div><!-- //ac-content-view__header-r -->
            </div>
        </div><!-- //ac-content-view__header -->
        <div class="ac-content-view__body">
            <div class="ac-content-view__wrap">
                <div class="ac-content-share" v-if="!hideShare">
                    <div class="ac-content-share__inner">
                        <button class="a-btn-type-1 line icon btn-share"><img src="/resources/images/svg/share-android-24.svg" class="size--16" alt=""></button>
                    </div>
                </div><!-- //ac-content-share -->
                <slot></slot>
            </div><!-- //ac-content-view__wrap -->
        </div><!-- //ac-content-view__body -->
    </div><!-- //ac-content-view -->
</template>

<script>
export default {
    name: 'customer-contacts-layout',
    props: {
        title: {
            type: String,
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        hideShare: {
            type: Boolean,
        }
    },
	data() {
		return {
            navData: [
                {label:'Overview', value:'customer-contacts-overview', },
                {label:'Organization', value:'customer-contacts-organization', },
                {label:'Document & Email', value:'customer-contacts-document', },
                {label:'Meeting', value:'customer-contacts-meeting', },
            ],
		};
	},
    methods: {
        goTo(item) {
            this.$router.push(`/${item.value}`);
        }
	},
};
</script>

<style scoped>
</style>
