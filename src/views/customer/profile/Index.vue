<template>
    <layout-content title="Profile">

        <div class="a-cp-home">
            <div class="a-cp-count__info">
                <div class="a-cp-count__info-item">
                    <div class="a-cp-count__header">
                        <div class="a-cp-count__title">Our Customers</div>
                    </div>
                    <div class="a-cp-count__detail col--2">
                        <div class="a-cp-count__detail-item">
                            <em>234</em>
                            <span class="a-color-label-3">Customers<br>with us</span>
                        </div>
                        <div class="a-cp-count__detail-item">
                            <em>12</em>
                            <span class="a-color-label-3">New Customers were <br>added this year</span>
                        </div>
                    </div>
                </div>
                <div class="a-cp-count__info-item">
                    <div class="a-cp-count__header">
                        <div class="a-cp-count__title">Activity with Customers</div>
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
                            <em>23</em>
                            <span class="a-color-label-3">Dining <br>together</span>
                        </div>
                    </div>
                </div>
            </div><!-- //a-cp-count__info -->

            <div class="a-search-1 a-cp-home__search">
                <div class="a-search__item">
                    <div class="a-search__item-l">
                        <div class="a-input-search">
                            <input type="text" placeholder="고객명 또는 활동 내역 검색" value="">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div><!-- //a-search__item-l -->
                    <div class="a-search__item-r">
                        <div class="a-search__buttons">
                            <button class="a-btn-type-1 transparent">
                                <img src="/resources/images/svg/circle-plus-24.svg" alt="" class="icon">
                                <span class="label">고객추가</span>
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
                            <button class="a-btn-type-1 transparent" @click="onClickSampleToggleFilter">
                                <img src="/resources/images/svg/setting-24.svg" alt="" class="icon">
                                <span class="label a-color-label-1">필터</span>
                            </button>
                        </div><!-- //a-search__buttons -->
                    </div><!-- //a-search__item-r -->
                </div><!-- //a-search__item -->
                <div class="a-filter-1" v-if="isFilterToggle">
                    <div class="a-search__item">
                        <label-tab label="담당 부서별">
                            <div class="a-tab-3">
                                <button selected>전체</button>
                                <button>Finance Center</button>
                                <button>Business Center</button>
                                <button>Tech Group</button>
                                <button>R&D Group</button>
                                <button>Design Team</button>
                                <button>Dev Team</button>
                                <button>Marketing</button>
                            </div><!-- //a-tab-2 -->
                        </label-tab>
                    </div><!-- //a-search__item -->
                    <div class="a-search__item">
                        <label-tab label="담당 지역별">
                            <div class="a-tab-3">
                                <button>전체</button>
                                <button class="checked">국내총괄</button>
                                <button>일본총괄</button>
                                <button class="checked">유럽총괄</button>
                            </div><!-- //a-tab-2 -->
                        </label-tab>
                    </div><!-- //a-search__item -->
                    <div class="a-search__item">
                        <label-tab label="알파벳">
                            <div class="a-tab-3">
                                <button selected>All</button>
                                <button>A</button>
                                <button>B</button>
                                <button>C</button>
                                <button>D</button>
                                <button>E</button>
                                <button>F</button>
                                <button>G</button>
                                <button>H</button>
                                <button>I</button>
                                <button>J</button>
                                <button>K</button>
                                <button>L</button>
                                <button>M</button>
                                <button>N</button>
                                <button>O</button>
                                <button>P</button>
                                <button>Q</button>
                                <button>R</button>
                                <button>S</button>
                                <button>T</button>
                                <button>U</button>
                                <button>V</button>
                                <button>W</button>
                                <button>X</button>
                                <button>Y</button>
                                <button>Z</button>
                            </div><!-- //a-tab-2 -->
                            <div class="a-tab-3">
                                <button>ㄱ</button>
                                <button>ㄴ</button>
                                <button>ㄷ</button>
                                <button>ㄹ</button>
                                <button>ㅁ</button>
                                <button>ㅂ</button>
                                <button>ㅅ</button>
                                <button>ㅇ</button>
                                <button>ㅈ</button>
                                <button>ㅊ</button>
                                <button>ㅋ</button>
                                <button>ㅌ</button>
                                <button>ㅍ</button>
                                <button>ㅎ</button>
                                <button>123</button>
                                <button>ETC</button>
                            </div><!-- //a-tab-2 -->
                        </label-tab>
                    </div><!-- //a-search__item -->
                    <div class="a-search__item">
                        <label-token label="거래선 조건" class="clear size--full" :items="sampleItems" value=""></label-token>
                    </div><!-- //a-search__item -->
                </div><!-- //a-filter-1 -->
                <div class="a-search__item a-filter-options">
                    <div class="a-search__item-l">
                        <div class="a-chip-1 color--bg-1">
                            <span class="a-chip__label">Finance Center</span>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-1 -->
                        <div class="a-chip-1 color--bg-1">
                            <span class="a-chip__label">Apple</span>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-1 -->
                    </div>
                    <div class="a-search__item-r">
                        <div class="a-search__buttons">
                            <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/sync-24.svg" alt="" class="icon"></button>
                        </div><!-- //a-search__buttons -->
                    </div>
                </div><!-- //a-filter-options -->
            </div><!-- //a-search-1 -->

            <div class="a-cp-list__area">
                <div class="a-list-2 col--2">
                    <div class="a-list__item" v-for="(item, index) in profileData" :key="`item-${item.title}${index}`">
                        <div class="a-list__item-header">
                            <div class="subject" v-text="`${index+1} - ${item.title}`"></div>
                        </div>
                        <div class="a-list__item-body">
                            <div class="label desc" v-text="item.desc"></div>
                            <div class="label date-count a-color-label-3">
                                <span class="date">최근 {{item.lastDate}}</span>
                                <span class="count">누적 {{item.accumulateCount}}건</span>
                            </div>
                        </div>
                        <div class="a-list__item-side">
                            <span class="logo"><img :src="`/resources/images/svg/logo/${item.img}`" :alt="item.title"></span>
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
    name: 'customer-profile',
	data() {
		return {
		    profileData: [
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
                {title:'NIKE', desc:'미주 캘리포니아 본사 에서  하반기 업무 협의', lastDate:'2021.6.23', accumulateCount:24,img:'nike.png'},
            ],
            pageNum: 1,
            pageCount: 20,
            sampleItems: [
                {label: '마이크로소프트', value:''},
                {label: '애플', value:''},
            ],
            isFilterToggle: false
		};
	},
    methods: {
        onClickSampleToggleFilter() {
            this.isFilterToggle = !this.isFilterToggle;
        }
	},
};
</script>

<style scoped>
</style>
