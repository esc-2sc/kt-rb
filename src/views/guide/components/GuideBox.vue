<template>
    <div class="g-box">
        <div class="g-box__header" v-if="isTitleDesc">
            <div class="g-box__title" v-if="isTitle" v-text="title"></div>
            <div class="g-box__desc" v-if="isDesc" v-text="desc"></div>
        </div>
        <div class="g-box__body">
            <slot></slot>
        </div>
        <guide-box-link :to="to"></guide-box-link>
    </div>
</template>

<script>
export default {
    name: 'guide-box',
    props: {
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        to: {
            type: String,
        }
    },
	data() {
		return {
        };
	},
    computed: {
        isTitle() {
            return this.title !== '' || this.title !== undefined;
        },
        isDesc() {
            return this.desc !== '' || this.desc !== undefined;
        },
        isTitleDesc() {
            return this.isTitle && this.isDesc;
        }
    },
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
.g-box{
    position: relative;
}
.g-box__header{
    padding:80px 80px 40px 80px;
}
.g-box__title,
.g-box__desc{
    font-family: Pretendard, sans-serif;
    font-weight:500;
    line-height:30px;
}
.g-box__title{
    font-size:30px;
    color:#000;
}
.g-box__desc{
    margin-top:10px;
    font-size:16px;
    color:#777;
}
.g-box__body{
    padding-bottom:80px;
}
</style>
