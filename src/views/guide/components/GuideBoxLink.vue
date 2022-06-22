<template>
    <div class="g-box-link">
        <router-link to="/guide" class="g-box-link__back"><img src="/resources/images/svg/icon_nav_toggle_arrow.svg" class="size--16" alt="Back"></router-link>
        <router-link :to="`/${to}`" class="g-box-link__single"><img src="/resources/images/svg/icon_nav_toggle_arrow.svg" class="size--16" alt="Sing view"></router-link>
    </div>
</template>

<script>
export default {
    name: 'guide-box-link',
    props: {
        to: {
            type: String,
        },
    },
    components: {
    },
	data() {
		return {
        };
	},
    computed: {
    },
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
.g-box-link{
    position: absolute;
    left:0;
    right:0;
    top:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.g-box-link > a{
    display: flex;
    align-items: center;
    justify-content: center;
    width:80px;
    height:80px;
}
.g-box-link img{
    background-color: #c7c7c8;
}
.g-box-link__back{}
.g-box-link__single{
    opacity: 0;
    pointer-events: none;
}
.g-box-link__single img{
    transform: rotate(180deg);
}
</style>
