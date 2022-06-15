<template>
    <div class="ac-login-main">
        <div class="ac-login">
            <div class="ac-login__header">
                <h2 class="ac-login__title">Digital Business Platform For Future. <em>Arches</em></h2>
            </div>
            <router-view></router-view>
        </div>
        <div class="a-visual">
            <figure class="a-visual__img-1"></figure>
        </div><!-- //a-visual -->
    </div>
</template>

<script>
export default {
	name: 'layout-login',
	components: {
	},
    data() {
        return {
        };
    },
};
</script>
