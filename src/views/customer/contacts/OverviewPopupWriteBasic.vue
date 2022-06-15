<template>
    <div class="a-popup a-cp-popup-org__write a-cc-popup-org__write">
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
                        <label-file label="프로필 이미지" class=" size--full" :items="sampleImageItems">
                            <div class="a-chip-img" v-for="(file, index) in sampleImageItems" :key="`file-${file.label}-${index}`">
                                <figure class="a-chip__img">
                                    <div class="a-user">
                                        <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                                        <!-- span class="a-user__label">AB</span -->
                                    </div><!-- //a-user -->
                                </figure>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-img -->
                        </label-file>
                    </div>
                    <div class="a-form__item"><label-input label="이름" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="조직명" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="직위" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="직책" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="성병" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="생년월일" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="국적" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="본사주수" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="근무지" class="mini size--full" value=""></label-input></div>
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
    name: 'customer-contacts-overview-popup-write-basic',
    data() {
        return {
            sampleImageItems: [
                {label:'BMW', src: '/resources/images/temp/img_bmw.png', value:''},
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
