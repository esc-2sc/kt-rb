<template>
    <div class="a-popup a-cp-popup-org__write">
        <div class="a-popup__header">
            <div class="a-popup__title">Basic Information</div>
            <div class="a-popup__func">
                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
            </div>
        </div>
        <div class="a-popup__body">

            <div class="a-form-1">
                <div class="a-form__content">
                    <div class="a-form__item">
                        <label-file label="회사로고" class=" size--full" :items="sampleImageItems">
                            <div class="a-chip-img" v-for="(file, index) in sampleImageItems" :key="`file-${file.label}-${index}`">
                                <figure class="a-chip__img"><img :src="file.src" :alt="file.label"></figure>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-img -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>
                    </div>
                    <div class="a-form__item"><label-input label="기업명" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="설립년도" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="CEO" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="직원수" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="본사주소" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="연락처" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="웹사이트" class="mini size--full" value=""></label-input></div>
                </div>
            </div><!-- //a-form-1 -->

        </div>
        <div class="a-popup__buttons right">
            <button class="a-btn-type-1 transparent">닫기</button>
            <button class="a-btn-type-1">
                <img src="/resources/images/svg/check-white-24.svg" class="icon" alt="">
                <span class="label">저장하기</span>
            </button>
        </div>
    </div><!-- //a-popup -->
</template>

<script>
export default {
    name: 'customer-profile-overview-popup-write-basic',
    data() {
        return {
            sampleImageItems: [
                {label:'Google', src: '/resources/images/temp/img_google.png', value:''},
                {label:'BMW', src: '/resources/images/temp/img_bmw.png', value:''},
            ]
        };
    },
    methods: {
    },
};
</script>

<style scoped>
</style>
