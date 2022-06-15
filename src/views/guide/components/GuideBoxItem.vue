<template>
    <div class="g-box-item" :class="{'bg-dark' : isDark, 'bg-gray': isGray}">
        <div class="g-box-item__header" v-if="isTitle">
            <div class="g-box-item__title" v-html="title"></div>
        </div>
        <div class="g-box-item__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guide-box-item',
    props: {
        title: {
            type: String,
        },
        isDark: {
            type: Boolean,
            default: false
        },
        isGray: {
            type: Boolean,
            default: false
        }
    },
    components: {
    },
	data() {
		return {
        };
	},
    computed: {
        isTitle() {
            return this.title !== '' || this.title !== undefined
        },
    },
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
.g-box-item{padding:40px 80px;}
.g-box-item__header{padding-bottom:20px;}
.g-box-item__title{font-family: Pretendard, sans-serif;font-weight: 500;font-size: 15px;line-height: 22px;color:#000;}
.g-box-item__body{}
.g-box-item.bg-dark{background-color:#555;}
.g-box-item.bg-dark .g-box-item__title{color:#fff;}
.g-box-item.bg-gray{background-color:#f8f8f8;}
</style>
