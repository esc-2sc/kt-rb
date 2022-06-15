<template>
    <layout-content title="Contacts" icon="people-gray-24.svg">

        <div class="a-cp-home a-cc-home">
            <div class="a-cp-count__info">
                <div class="a-cp-count__info-item">
                    <div class="a-cp-count__header">
                        <div class="a-cp-count__title">Our Contacts</div>
                    </div>
                    <div class="a-cp-count__detail col--2">
                        <div class="a-cp-count__detail-item">
                            <em>234</em>
                            <span class="a-color-label-3">Contacts <br>with us</span>
                        </div>
                        <div class="a-cp-count__detail-item">
                            <em>12</em>
                            <span class="a-color-label-3">New Customers were <br>added this year</span>
                        </div>
                    </div>
                </div>
                <div class="a-cp-count__info-item">
                    <div class="a-cp-count__header">
                        <div class="a-cp-count__title">Activity with Concats</div>
                        <div class="a-tab-1 a-cp-count__tab">
                            <button selected>Month</button>
                            <button>3Months</button>
                            <button>1Year</button>
                        </div><!-- //a-tab-1 -->
                    </div>
                    <div class="a-cp-count__detail col--3">
                        <div class="a-cp-count__detail-item">
                            <em>12</em>
                            <span class="a-color-label-3">Biz trips</span>
                        </div>
                        <div class="a-cp-count__detail-item">
                            <em>23</em>
                            <span class="a-color-label-3">Meeting</span>
                        </div>
                        <div class="a-cp-count__detail-item">
                            <em>15</em>
                            <span class="a-color-label-3">Dining <br>together</span>
                        </div>
                    </div>
                </div>
            </div><!-- //a-cp-count__info -->

            <div class="a-search-1 a-cp-home__search">
                <div class="a-search__item">
                    <div class="a-search__item-l">
                        <div class="a-input-search">
                            <input type="text" placeholder="사람 또는 활동 내역 검색" value="">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div><!-- //a-search__item-l -->
                    <div class="a-search__item-r">
                        <div class="a-search__buttons">
                            <button class="a-btn-type-1 transparent">
                                <img src="/resources/images/svg/circle-plus-24.svg" alt="" class="icon">
                                <span class="label">사람추가</span>
                            </button>
                            <button class="a-btn-type-1 transparent">
                                <img src="/resources/images/svg/circle-download-24.svg" alt="" class="icon">
                                <span class="label">엑셀파일</span>
                            </button>
                        </div><!-- //a-search__buttons -->
                    </div><!-- //a-search__item-r -->
                </div><!-- //a-search__item -->
                <div class="a-search__item">
                    <div class="a-search__item-l">
                        <div class="a-tab-2">
                            <button selected>최근 활동 순으로</button>
                            <button>누적된 활동 순으로</button>
                        </div><!-- //a-tab-2 -->
                    </div><!-- //a-search__item-l -->
                    <div class="a-search__item-r">
                        <div class="a-search__buttons">
                            <button class="a-btn-type-1 transparent">
                                <img src="/resources/images/svg/setting-24.svg" alt="" class="icon">
                                <span class="label a-color-label-1">필터</span>
                            </button>
                        </div><!-- //a-search__buttons -->
                    </div><!-- //a-search__item-r -->
                </div><!-- //a-search__item -->
            </div><!-- //a-search-1 -->

            <div class="a-cp-list__area">
                <div class="a-list-2 col--2">
                    <div class="a-list__item" v-for="(item, index) in profileData" :key="`item-${item.title}${index}`">
                        <div class="a-list__item-header">
                            <div class="subject">
                                {{index+1}} - {{item.name}}
                                <span class="label a-color-label-3" v-text="item.company"></span>
                            </div>
                        </div>
                        <div class="a-list__item-body">
                            <div class="label desc" v-text="item.desc"></div>
                            <div class="label date-count a-color-label-3">
                                <span class="date">최근 {{item.lastDate}}</span>
                                <span class="count">누적 {{item.accumulateCount}}건</span>
                            </div>
                        </div>
                        <div class="a-list__item-side">
                            <div class="a-user size--large">
                                <span class="a-user__label">AB</span>
                            </div><!-- //a-user -->
                        </div>
                    </div>
                </div><!-- //a-list-2 -->
            </div><!-- //a-cp-list__area -->

            <div class="a-cp-paging">
                <div class="a-paging-more">
                    <button class="a-btn-type-1 line">
                        <img src="/resources/images/svg/chevron-down-24.svg" class="icon" alt="">
                        <span class="label">더보기</span>
                    </button>
                </div><!-- //a-paging-more -->
                <!-- com-paging v-model="pageNum"
                            :mode="1"
                            :page-count="pageCount"
                            :page-range="1"></com-paging -->
            </div><!-- //a-cp-paging -->
        </div><!-- //a-cp-home -->

    </layout-content>
</template>

<script>
export default {
    name: 'customer-contacts',
	data() {
		return {
		    profileData: [
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
                {name:'홍길동', company:'Apple', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,},
            ],
            pageNum: 1,
            pageCount: 20,
		};
	},
    methods: {
	},
};
</script>

<style scoped>
</style>
