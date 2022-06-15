<template>
    <div class="ac-detail-view" :class="classObject">
        <div class="ac-detail-view__header">
            <div class="ac-detail-view__header-l">
                <button class="btn-bookmark"><img src="/resources/images/svg/bookmark-white-24.svg" class="size--24" alt=""></button>
                <button class="btn-share"><img src="/resources/images/svg/share-android-white-24.svg" class="size--24" alt=""></button>
            </div>
            <div class="ac-detail-view__header-r">
                <button class="btn-close" @click="goBack"><img src="/resources/images/svg/x-white-24.svg" class="size--24" alt="Close"></button>
            </div>
        </div>
        <div class="ac-detail-view__body">
            <router-view></router-view>
        </div>
    </div><!-- //ac-detail-view -->
</template>

<script>
export default {
	name: 'layout-detail-view',
    data() {
        return {
	        isContentClass: false,
	        contentClass: null
        };
    },
	computed: {
		classObject() {
			return {
				[`${this.contentClass}`]: this.isContentClass
			}
		}
	},
	created() {
		this.$EventBus.$on('content-class', (payload) => {
			this.isContentClass = (payload) ? true : false;
			this.contentClass = (this.isContentClass) ? payload : null;
		});
	},
	methods: {
        goBack() {
            this.$router.go(-1);
            // this.$router.push('/customer-profile');
        },
    }
};
</script>
