<template>
    <div class="a-popup a-cp-popup-org__write a-cc-popup-org__write">
        <div class="a-popup__header">
            <div class="a-popup__title">Additional Information</div>
            <div class="a-popup__func">
                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
            </div>
        </div>
        <div class="a-popup__body">

            <div class="a-form-1">
                <div class="a-form__content">
                    <div class="a-form__item"><label-input label="연락처" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="이메일" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="취미/특기" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-input label="선호하는 음식" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-textarea label="경력" class="size--full" value=""></label-textarea></div>
                    <div class="a-form__item"><label-textarea label="학력" class="size--full" value=""></label-textarea></div>
                    <div class="a-form__item"><label-textarea label="메모" class="size--full" value=""></label-textarea></div>
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
    name: 'customer-contacts-overview-popup-write-additional',
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
