<template>
    <div class="ac-content">
        <div class="ac-content-header">
            <div class="ac-content-header__l">
                <h2 class="ac-content-title">
                    <img :src="`/resources/images/svg/${icon}`" class="size--24" alt="">
                    {{title}}
                </h2>
            </div>
            <div class="ac-content-header__r">
                <div class="ac-content-header__buttons">
                    <button class="btn-chat"><img src="/resources/images/svg/comment-discussion-24.svg" class="size--24" alt=""></button>
                    <button class="btn-mail"><img src="/resources/images/svg/mail-24.svg" class="size--24" alt=""></button>
                </div>
                <div class="ac-content-header__user">
                    <div class="a-user">
                        <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                        <span class="a-user__label">AB</span>
                    </div><!-- //a-user -->
                </div>
            </div>
        </div><!-- //ac-content-header -->
        <div class="ac-content-body">
            <slot></slot>
        </div><!-- //ac-content-body -->
    </div><!-- //ac-content -->
</template>

<script>
export default {
    name: 'layout-content',
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default:'organization-24.svg'
        }
    },
	data() {
		return {
		};
	},
    methods: {
	},
};
</script>

<style scoped>
</style>
