<template>
    <div class="a-popup a-cp-popup-photo">
        <div class="a-popup__header">
            <div class="a-popup__title">Activity Data</div>
            <div class="a-popup__func">
                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
            </div>
        </div>
        <div class="a-tab-nav a-popup__tab-nav">
            <button selected>Meeting Photos</button>
            <button>Visited restaurants</button>
            <button>Gifts exchanged</button>
        </div><!-- //a-tab-nav -->
        <div class="a-popup__body">
            <div class="a-cp-popup-photo__image">
                <figure style="background-image: url('/resources/images/temp/img_temp2.jpg')"></figure>
            </div><!-- //a-cp-popup-restaurant__photo -->
            <div class="a-cp-popup-photo__detail">
                <div class="a-cp-popup-photo__detail-header">
                    <div class="a-cp-popup-photo__detail-title">Google Conference 2021</div>
                    <div class="a-cp-popup-photo__detail-func">
                        <button class="a-btn-type-1 line icon btn-add"><img src="/resources/images/svg/pencil-24.svg" class="size--16" alt="Add"></button>
                    </div>
                </div><!-- //a-cp-popup-photo__detail-header -->
                <div class="a-cp-popup-photo__detail-info">
                    <div class="a-cp-popup-photo__info-item">
                        <p>
                            <span class="icon"><img src="/resources/images/svg/location-gray-24.svg" class="size--16" alt=""></span>
                            <span class="label">877 Americana Way, Glendale, CA 91210 미국</span>
                        </p>
                    </div>
                    <div class="a-cp-popup-photo__info-item">
                        <p>
                            <span class="icon"><img src="/resources/images/svg/comment-gray-24.svg" class="size--16" alt=""></span>
                            <span class="label">구글 개발자 토마스 집에 방문했습니다. 집에서도 열심히 일하는 토마스 ㅎㅎ  (2010.09.09)</span>
                        </p>
                    </div>
                    <div class="a-cp-popup-photo__info-item">
                        <p>
                            <span class="icon"><img src="/resources/images/svg/people-gray-24.svg" class="size--16" alt=""></span>
                            <span class="a-badge-chip">홍길동</span>
                            <span class="a-badge-chip">Tom Brown</span>
                            <span class="a-badge-chip">Chumabusi Satoshi</span>
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
                    <span class="a-img__label">텍스트 텍스트 텍스트 텍스트 텍스트</span>
                </div><!-- //a-img-1 -->

                <div class="a-img-1 a-cp-photos__item">
                    <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    <span class="a-img__label">텍스트 텍스트 텍스트 텍스트 텍스트</span>
                </div><!-- //a-img-1 -->

                <div class="a-img-1 a-cp-photos__item">
                    <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    <span class="a-img__label">텍스트 텍스트 텍스트 텍스트 텍스트</span>
                </div><!-- //a-img-1 -->

                <div class="a-img-1 a-cp-photos__item">
                    <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                    <span class="a-img__label">텍스트 텍스트 텍스트 텍스트 텍스트</span>
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
    name: 'customer-profile-overview-popup-photo',
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
