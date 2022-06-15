<template>
    <layout-profile title="Google" :active-index="3">
        <div class="a-cp-meeting a-cc-meeting">
            <div class="a-search-1 a-cp-meeting__search">
                <div class="a-search__item">
                    <div class="a-search__item-l">
                        <div class="a-input-search">
                            <input type="text" placeholder="고객명 또는 활동 내역 검색" value="">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div><!-- //a-search__item-l -->
                    <div class="a-search__item-r">
                        <vx-date-field class="a-input-date"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택">
                        </vx-date-field>
                    </div><!-- //a-search__item-r -->
                </div><!-- //a-search__item -->
                <div class="a-search__item">
                    <div class="a-search__item-l">
                        <div class="a-tab-2">
                            <button selected>전체 파일</button>
                            <button>거래선 백서</button>
                            <button>영업 프로필</button>
                            <button>CS 프로필</button>
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

            <div class="a-list-2 col--2 a-cp-meeting__list">
                <div class="a-list__item" v-for="(item, index) in fileData" :key="`item-${item.title}${index}`">
                    <div class="a-list__item-header">
                        <div class="subject" v-text="`${index+1} - ${item.title}`"></div>
                        <div class="label date a-color-label-3" v-text="item.date"></div>
                    </div>
                    <div class="a-list__item-body">
                        <div class="user">
                            <div class="a-user">
                                <span class="a-user__label">AB</span>
                            </div><!-- //a-user -->
                            <div class="name-team">
                                <span class="name" v-text="item.name"></span>
                                <span class="team a-color-label-2" v-text="item.team"></span>
                            </div>
                        </div>
                        <div class="location">
                            <span class="icon"><img src="/resources/images/svg/location-gray-24.svg" alt=""></span>
                            <span class="a-color-label-3" v-text="item.address"></span>
                        </div>
                    </div>
                    <div class="a-list__item-side">
                        <button class="a-btn-type-1 transparent icon size--large"><img src="/resources/images/svg/file-24.svg" alt=""></button>
                    </div>
                </div>
            </div><!-- //a-list-1 -->

            <div class="a-cp-paging">
                <com-paging v-model="pageNum"
                            :mode="1"
                            :page-count="pageCount"
                            :page-range="1"></com-paging>
            </div><!-- //a-cp-paging -->
        </div><!-- //a-cp-file -->
    </layout-profile>
</template>

<script>
import Layout from "@/views/customer/contacts/Layout";
export default {
    name: 'customer-contacts-meeting',
    components: {
        'layout-profile': Layout
    },
    data() {
        return {
            fileData: [
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
                // {title:'미주 배터리 사업부 Google 미팅', name:'홍길동', team:'Design Group', date: '2021.05.01~2021.05.10 ', address:'877 Americana Way, Glendale, CA 91210 미국'},
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
