<template>
    <div class="a-popup a-cp-popup-photo a-cp-popup-gift">
        <div class="a-popup__header">
            <div class="a-popup__title">Activity Data</div>
            <div class="a-popup__func">
                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
            </div>
        </div>
        <div class="a-tab-nav a-popup__tab-nav">
            <button>Meeting Photos</button>
            <button>Visited restaurants</button>
            <button selected>Gifts exchanged</button>
        </div><!-- //a-tab-nav -->
        <div class="a-popup__body">
            <div class="a-cp-popup-photo__image">
                <figure style="background-image: url('/resources/images/temp/img_temp2.jpg')"></figure>
            </div><!-- //a-cp-popup-restaurant__photo -->
            <div class="a-cp-popup-photo__detail">
                <div class="a-cp-popup-photo__detail-header">
                    <div class="a-cp-popup-photo__detail-title">전주 비빕밥 <span class="a-color-label-3">주류</span></div>
                    <div class="a-cp-popup-photo__detail-badge">
                        <span class="a-badge-2 a-bg-point-3">받은선물</span>
                    </div>
                    <div class="a-cp-popup-photo__detail-func">
                        <button class="a-btn-type-1 line icon btn-add"><img src="/resources/images/svg/pencil-24.svg" class="size--16" alt="Add"></button>
                    </div>
                </div><!-- //a-cp-popup-photo__detail-header -->
                <div class="a-cp-popup-photo__detail-info">
                    <div class="a-cp-popup-photo__info-item">
                        <p>
                            <span class="icon"><img src="/resources/images/svg/comment-gray-24.svg" class="size--16" alt=""></span>
                            <span class="label">터질듯한 기포와 풍부한 아로마 , 역시 KRUG</span>
                        </p>
                    </div>
                </div>
                <div class="a-cp-popup-photo__detail-thumbnail">
                    <div class="a-img-2 size--small selected">
                        <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    </div><!-- //a-img-2 -->
                    <div class="a-img-2 size--small">
                        <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    </div><!-- //a-img-2 -->
                    <div class="a-img-2 size--small">
                        <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    </div><!-- //a-img-2 -->
                    <div class="a-img-2 size--small">
                        <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    </div><!-- //a-img-2 -->
                    <div class="a-img-2 size--small">
                        <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    </div><!-- //a-img-2 -->
                </div><!-- //a-cp-popup-photo__detail-thumbnail -->
            </div>
        </div>
        <div class="a-cp-photos">
            <div class="a-cp-photos__header">
                <div class="a-cp-photos__title">Restaurants List</div>
                <div class="a-cp-photos__func">
                    <button class="a-btn-type-1 transparent line icon btn-add"><img src="/resources/images/svg/circle-plus-24.svg" class="size--16" alt="Add"></button>
                </div>
            </div><!-- //a-cp-photos__header -->
            <div class="a-cp-photos__body">
                <div class="a-img-1 a-cp-photos__item selected">
                    <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    <span class="a-img__label">KRUG 와인</span>
                </div><!-- //a-img-1 -->

                <div class="a-img-1 a-cp-photos__item">
                    <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    <span class="a-img__label">타이틀리스트 골프공</span>
                </div><!-- //a-img-1 -->

                <div class="a-img-1 a-cp-photos__item">
                    <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    <span class="a-img__label">립스틱</span>
                </div><!-- //a-img-1 -->

                <div class="a-img-1 a-cp-photos__item">
                    <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    <span class="a-img__label">샤넬향수</span>
                </div><!-- //a-img-1 -->
            </div><!-- //a-cp-photos__body -->
            <div class="a-cp-photos__control">
                <button class="a-btn-type-1 transparent icon btn-prev"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                <button class="a-btn-type-1 transparent icon btn-next"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
            </div><!-- //a-cp-photos__control -->
        </div><!-- //a-cp-photos -->
    </div><!-- //a-popup -->
</template>

<script>
export default {
    name: 'customer-profile-overview-popup-gift',
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
