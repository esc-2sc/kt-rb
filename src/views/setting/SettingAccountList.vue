<template>
    <div class="detail-content p-setting-account-list">

        <div class="r-box full r-filter-list">
            <div class="r-box__nav">
                <div class="r-box__nav-header">
                    <div class="a-input-search">
                        <input type="text" placeholder="장애물" value="Value">
                        <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                    </div><!-- //a-input-search -->
                    <div class="r-filter-header">
                        <div class="title">Filter</div>
                        <div class="func"><button type="button" class="a-btn-type-1 size--small color--white">초기화</button></div>
                    </div><!--//filter-header-->
                </div><!--//r-box__nav-search-->
                <div class="r-box__nav-body scroll">
                    <div class="r-filter">
                        <div class="r-filter-options">
                            <div class="title">권한</div>
                            <div class="option-box">
                                <div class="a-tab-3">
                                    <button selected>전체</button>
                                    <button>일반회원</button>
                                    <button>중간관리자</button>
                                    <button>관리자(슈퍼어드민)</button>
                                </div>
                            </div><!--//option-box-->
                        </div><!--//r-filter-options -->
                        <div class="r-filter-options">
                            <div class="title">사용여부</div>
                            <div class="option-box">
                                <div class="a-tab-3">
                                    <button selected>전체</button>
                                    <button>사용</button>
                                    <button>중단</button>
                                    <button>잠김</button>
                                </div>
                            </div><!--//option-box-->
                        </div><!--//r-filter-options -->
                    </div><!-- // r-box-filter -->
                </div><!-- //r-box__nav-cont -->
            </div>
            <div class="r-box__content">
                <div class="r-tachyon min--auto full">
                    <div class="r-tachyon__header">
                        <div class="r-tachyon__header-l">
                            <h2 class="r-tachyon__title">전체 <em>345건</em></h2>
                        </div>
                        <div class="r-tachyon__header-r">
                            <div class="r-tachyon__buttons">
                                <button class="a-btn-type-1 transparent btn-del">
                                    <img src="/resources/images/svg/icon_delete.svg" alt="" class="icon">
                                    <span class="label">삭제하기</span>
                                </button>
                                <button class="a-btn-type-1 transparent btn-change">
                                    <img src="/resources/images/svg/icon_manage_accounts.svg" alt="" class="icon">
                                    <span class="label">권한변경</span>
                                </button>
                            </div>
                        </div>
                    </div><!-- //r-tachyon__header -->
                    <tachyon-grid
                      theme="themeBoardLine"
                      :row-height="56"
                      :header-row-height="56"
                      :row-count="5"
                      :items="gridItems"
                      @collection-change="onGridItemReset"
                      @scroll="onGridScrollEvent">
                        <columns>
                            <tachyon-column header-text="번호" data-field=""></tachyon-column>
                            <tachyon-column header-text="아이디(사번)" data-field=""></tachyon-column>
                            <tachyon-column header-text="권한명" data-field=""></tachyon-column>
                            <tachyon-column header-text="이름" data-field=""></tachyon-column>
                            <tachyon-column header-text="고객사명" data-field=""></tachyon-column>
                            <tachyon-column header-text="사업장명" data-field=""></tachyon-column>
                            <tachyon-column header-text="사용여부" data-field=""></tachyon-column>
                            <tachyon-column header-text="비밀번호 만료일" data-field=""></tachyon-column>
                            <tachyon-column header-text="비밀번호 변경일" data-field=""></tachyon-column>
                            <tachyon-column header-text="등록일" data-field=""></tachyon-column>
                            <tachyon-column header-text="수정일" data-field=""></tachyon-column>
                        </columns>
                    </tachyon-grid>
                    <div class="r-tachyon__footer">
                        <div class="r-tachyon__footer-l">
                            <com-paging
                              v-model="pageNum"
                              :page-count="pageCount"
                              :page-range="5"></com-paging>
                        </div>
                        <div class="r-tachyon__footer-r" v-if="false">
                            button
                        </div>
                    </div>
                </div><!-- //r-tachyon -->
            </div><!-- //r-box__content -->
        </div><!-- //r-box r-filter-list -->

    </div><!-- // detail-content -->
</template>

<script>
import VueRangedatePicker from 'vue-rangedate-picker';
export default {
  name: 'SettingAccountList',
  components: {VueRangedatePicker},
  data() {
    return {
      pageNum: 1,
      pageCount: 20,
      gridItems: [],
      captions:{
        title: '',
        ok_button: '확인'
      },
      shortDays:['일','월','화','수','목','금','토'],
      months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    };
  },
  methods: {
    onGridItemReset() {
      console.log('reset');
    },
    onGridScrollEvent() {
      console.log('scroll');
    }
  },
};
</script>
<style scoped>
</style>
