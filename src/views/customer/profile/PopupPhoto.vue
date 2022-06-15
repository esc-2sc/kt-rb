<template>
    <div class="a-popup a-cp-popup-photo2">
        <div class="a-popup__header">
            <div class="a-popup__title">사진 첨부</div>
            <div class="a-popup__func">
                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
            </div>
        </div>
        <div class="a-popup__body">

            <label-file label="이미지 첨부" :items="sampleImageItems" class="control size--full a-cp-popup-photo2__list">
                <div class="a-chip-img cover" v-for="(file, index) in sampleImageItems" :key="`file-${file.label}-${index}`">
                    <figure class="a-chip__img" :style="`background-image:url('${file.src}')`"></figure>
                    <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                </div><!-- //a-chip-img -->
                <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                <button slot="button" class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/trash-24.svg" class="size--16" alt=""></button>
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
    name: 'customer-profile-popup-photo',
    data() {
        return {
            sampleImageItems: [
                {src: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', value:''},
                {src: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', value:''},
            ]
        };
    },
    methods: {
    },
};
</script>

<style scoped>
</style>
