<template>
    <div class="a-popup a-cp-popup__photo-modify">
        <div class="a-popup__header">
            <div class="a-popup__title">미팅 사진 </div>
            <div class="a-popup__func">
                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
            </div>
        </div>
        <div class="a-popup__body">

            <div class="a-form-1">
                <div class="a-form__content">
                    <div class="a-form__item"><label-input label="사진제목" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item">
                        <label-file label="미팅사진" :items="sampleImageItems" class="control size--full a-cp-photo-modify__list">
                            <div class="a-chip-img cover" v-for="(file, index) in 2" :key="`file-${file.label}-${index}`">
                                <figure class="a-chip__img" :style="`background-image:url('https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')`"></figure>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-img -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                            <button slot="button" class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/trash-24.svg" class="size--16" alt=""></button>
                        </label-file>
                    </div>
                    <div class="a-form__item"><label-input label="위치" class="mini size--full" value=""></label-input></div>
                    <div class="a-form__item"><label-textarea label="미팅내용" class="size--full" value=""></label-textarea></div>
                    <label-token label="참석자" class="size--full" :items="sampleItems" value="">
                        <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
                    </label-token>
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
    name: 'customer-contacts-overview-popup-photo-modify',
    data() {
        return {
            sampleItems: [
                {label: '홍길동1', value:''},
                {label: '홍길동2', value:''},
            ],
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
