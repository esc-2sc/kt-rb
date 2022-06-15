<template>
    <layout-profile title="Google" :active-index="4">
        <div class="a-cp-file">
            <div class="a-search-1 a-cp-file__search">
                <div class="a-search__item">
                    <div class="a-search__item-l">
                        <div class="a-input-search">
                            <input type="text" placeholder="파일명 검색" value="">
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

            <div class="a-list-1 a-cp-file__list">
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
                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-24.svg" alt=""></button>
                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/tertiary.svg" alt=""></button>
                            </div>
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
    name: 'customer-profile-file',
    components: {
        'layout-profile': Layout
    },
	data() {
		return {
		    fileData: [
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
                {title:'Cost Policy 2021.xls', name:'홍길동', team:'Design Group', date: '05/10/2019', fileType: 'xls'},
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
