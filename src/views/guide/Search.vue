<template>
    <guide-box title="Search" desc="a-search-1" :to="$options.name">
        <guide-box-item title="a-search-1">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <div class="a-search-1">
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
                                        <button>고객명  A~Z</button>
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

                    </div>
                </guide-table-item>
                <guide-table-item label="example 2">
                    <div>

                        <div class="a-search-1">
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

                    </div>
                </guide-table-item>
                <guide-table-item label="example 3">
                    <div>

                        <div class="a-search-1">
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
                                        <button selected>전체 미팅</button>
                                        <button>주요정보</button>
                                        <button>임원</button>
                                        <button>임원 외</button>
                                    </div><!-- //a-tab-2 -->
                                </div><!-- //a-search__item-l -->
                            </div><!-- //a-search__item -->
                        </div><!-- //a-search-1 -->

                    </div>
                </guide-table-item>
                <guide-table-item label="example 4">
                    <div>

                        <div class="a-search-1">
                            <div class="a-search__item">
                                <div class="a-search__item-l">
                                    <div class="a-input-search">
                                        <input type="text" placeholder="고객명 또는 활동 내역 검색" value="">
                                        <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                                    </div><!-- //a-input-search -->
                                </div><!-- //a-search__item-l -->
                            </div><!-- //a-search__item -->
                            <div class="a-search__item">
                                <div class="a-search__item-l">
                                    <div class="a-tab-2">
                                        <button selected>인물 전체</button>
                                        <button>분류된 인물</button>
                                        <button>미분류 인물</button>
                                    </div><!-- //a-tab-2 -->
                                </div><!-- //a-search__item-l -->
                            </div><!-- //a-search__item -->
                        </div><!-- //a-search-1 -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-tab',
    components: {
    },
	data() {
		return {
            comboboxData1:[
                {label:'ABC', value:''},
                {label:'ABC', value:''},
                {label:'ABC', value:''},
            ],
            comboboxData2:[
                {label:'ㄱㄴㄷ', value:''},
                {label:'ㄱㄴㄷ', value:''},
                {label:'ㄱㄴㄷ', value:''},
            ],
            comboboxData3:[
                {label:'123,Etc', value:''},
                {label:'123,Etc', value:''},
                {label:'123,Etc', value:''},
            ],
            companyName: 'Google',
            companyData: [
                {label:'Apple', value:''},
            ],
            sampleItems: [
                {label: '마이크로소프트', value:''},
                {label: '애플', value:''},
            ],
            isFilterToggle: true
        };
	},
    mounted() {
    },
    methods: {
        getMaxRowCount(items = [],maxCount=5) {
            return Math.min(items.length, maxCount);
        },
        onClickSampleToggleFilter() {
            this.isFilterToggle = !this.isFilterToggle;
        }
	},
};
</script>
<style scoped>
</style>
