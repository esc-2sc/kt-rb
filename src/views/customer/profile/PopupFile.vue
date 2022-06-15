<template>
    <div class="a-popup a-cp-popup-file">
        <div class="a-popup__header">
            <div class="a-popup__title">파일 첨부</div>
            <div class="a-popup__func">
                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
            </div>
        </div>
        <div class="a-popup__body">

            <div class="a-tab-nav center nowrap a-cp-popup-file__tab">
                <button selected>거래선 백서</button>
                <button>영업프로필</button>
                <button>MOU/LTA</button>
                <button>CS 프로필</button>
                <button>기타</button>
            </div><!-- //a-tab-nav -->

            <label-file label="파일첨부" :items="sampleFileItems" class="size--full a-cp-popup-file__list">
                <div class="a-chip-file color--bg-white" v-for="(file, index) in sampleFileItems" :key="`file-${file.label}-${index}`">
                    <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                    <span class="a-chip__label" v-text="file.label"></span>
                    <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                </div><!-- //a-chip-file -->
                <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
            </label-file>

        </div>
        <div class="a-popup__buttons right">
            <button class="a-btn-type-1 transparent">취소</button>
            <button class="a-btn-type-1">
                <img src="/resources/images/svg/check-white-24.svg" class="icon" alt="">
                <span class="label">저장하기</span>
            </button>
        </div>
    </div><!-- //a-popup -->
</template>

<script>
export default {
    name: 'customer-profile-popup-file',
    data() {
        return {
            sampleFileItems: [
                {label: '텍스트1.xls', value:''},
                {label: '텍스트2.xls', value:''}
            ],
        };
    },
    methods: {
    },
};
</script>

<style scoped>
</style>
