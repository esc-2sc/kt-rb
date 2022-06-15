<template>
    <layout-profile title="Google" :active-index="2">
        <div class="a-cp-document">
            <div class="a-search-1 a-cp-document__search">
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
                                <img src="/resources/images/svg/circle-upload-24.svg" alt="" class="icon">
                                <span class="label">파일 업로드</span>
                            </button>
                        </div><!-- //a-search__buttons -->
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

            <div class="a-list-1 a-cp-document__list">
                <div class="a-list__body">
                    <div class="a-list__item" v-for="(item, index) in fileData" :key="`item-${item.title}${index}`">
                        <div class="a-list__item-l">
                            <div class="icon"><img :src="`/resources/images/svg/file/file_${item.fileType}.svg`" alt=""></div>
                            <div class="subject">
                                <span class="subject-label" v-text="`${index+1} - ${item.title}`"></span>
                            </div>
                            <div class="label name-team">
                                <span class="name" v-text="item.name"></span>
                                <span class="team a-color-label-2" v-text="item.team"></span>
                            </div>
                            <div class="label date a-color-label-2" v-text="item.date"></div>
                        </div>
                        <div class="a-list__item-r">
                            <div class="a-list__buttons">
                                <div class="a-btn-popup">
                                    <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/file2-24.svg" alt=""></button>
                                    <div class="a-btn-popup__layer a-list-dropdown a-list__file-popup">
                                        <div class="a-list-dropdown__item">
	                                        <div class="a-list-dropdown__before">
		                                        <span class="icon"><img src="/resources/images/svg/file/file_pdf.svg" class="size--16" alt=""></span>
	                                        </div>
                                            <div class="a-list-dropdown__label nowrap">경영 보고서.pdf</div>
                                            <div class="a-list-dropdown__after">
                                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-gray-24.svg" alt=""></button>
                                            </div>
                                        </div>
                                        <div class="a-list-dropdown__item">
	                                        <div class="a-list-dropdown__before">
		                                        <span class="icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--16" alt=""></span>
	                                        </div>
                                            <div class="a-list-dropdown__label nowrap">하반기 휴가계획.xls</div>
                                            <div class="a-list-dropdown__after">
                                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-gray-24.svg" alt=""></button>
                                            </div>
                                        </div>
                                        <div class="a-list-dropdown__item">
                                            <button class="a-list-dropdown__item-button a-color-point-1">모두 받기</button>
                                        </div>
                                    </div><!-- //a-btn-popup__layer -->
                                </div><!-- //a-btn-popup -->

                                <div class="a-btn-popup">
                                    <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/tertiary.svg" alt=""></button>
                                    <div class="a-btn-popup__layer a-list-dropdown a-list__more-popup">
                                        <div class="a-list-dropdown__item">
                                            <div class="a-list-dropdown__label">공유하기</div>
                                            <div class="a-list-dropdown__after">
                                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/share-android-gray-24.svg" alt=""></button>
                                            </div>
                                        </div>
                                        <div class="a-list-dropdown__item">
                                            <div class="a-list-dropdown__label">삭제하기</div>
                                            <div class="a-list-dropdown__after">
                                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/trash-gray-24.svg" class="sv" alt=""></button>
                                            </div>
                                        </div>
                                    </div><!-- //a-btn-popup__layer -->
                                </div><!-- //a-btn-popup -->
                            </div><!-- //a-list__buttons -->
                        </div>
                    </div><!-- //a-list__item -->
                </div><!-- //a-list__body -->
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
import Layout from "@/views/customer/profile/Layout";
export default {
    name: 'customer-profile-email',
    components: {
        'layout-profile': Layout
    },
    data() {
        return {
            fileData: [
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
                {title:'Cost Policy 2021', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'eml'},
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
