<template>
    <guide-box title="Text" desc="Default, Text" :to="$options.name">
        <guide-box-item title="Default - font-family:'Pretendard'; font-size:13px / line-height:1 / font-weight:500">
            <p>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</p>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>`1234567890-=</p>
            <p>~!@#$%^&*()_+</p>
        </guide-box-item>

<!--        <guide-box-item title="Text - Size / 400">-->
<!--            <p class="a-text-1">class="a-text-1" (20px / 400)</p>-->
<!--            <p class="a-text-2">class="a-text-2" (18px / 400)</p>-->
<!--            <p class="a-text-3">class="a-text-3" (15px / 400)</p>-->
<!--            <p class="a-text-4">class="a-text-4" (13px / 400)</p>-->
<!--            <p class="a-text-5">class="a-text-5" (12px / 400)</p>-->
<!--            <p class="a-text-6">class="a-text-6" (11px / 400)</p>-->
<!--            <p class="a-text-6">class="a-text-7" (9px / 400)</p>-->
<!--        </guide-box-item>-->

<!--        <guide-box-item title="Component - Size / 500">-->
<!--            <p class="a-text-1-c">class="a-text-1-c" (20px / 500)</p>-->
<!--            <p class="a-text-2-c">class="a-text-2-c" (18px / 500)</p>-->
<!--            <p class="a-text-3-c">class="a-text-3-c" (14px / 500)</p>-->
<!--            <p class="a-text-4-c">class="a-text-4-c" (12px / 500)</p>-->
<!--        </guide-box-item>-->
    </guide-box>
</template>

<script>
import fileToInnerHTML from "@/views/guide/mixin/fileToInnerHTML";
export default {
	mixins: [fileToInnerHTML],
    name: 'guide-text',
	props: {},
	data() {
		return {
        };
	},
    mounted() {
    	// console.log(this.axios);
    },
    methods: {
	},
};
</script>
<style scoped>
</style>
