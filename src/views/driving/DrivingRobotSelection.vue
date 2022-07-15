<template>
  <div class="detail-content p-driving-robot-selection">
    <div class="r-box full r-search-dashboard">
      <div class="r-search-box">
        <div class="r-search-filter">
          <div class="r-search-row">
            <div class="a-input-search size--full">
              <input type="text" placeholder="사업장 , 고객사 또는 MAC 주소" value="">
              <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
            </div><!-- //a-input-search -->
          </div>
          <div class="r-search-row">
            <div class="r-filter">
              <div class="r-filter-options">
                <div class="title">서비스</div>
                <div class="option-box">
                  <div class="a-tab-3">
                    <button selected>전체</button>
                    <button>서빙</button>
                    <button>방역</button>
                    <button>러기지</button>
                    <button>호텔</button>
                    <button>기타</button>
                  </div>
                </div><!--//option-box-->
              </div><!--//r-filter-options -->
              <div class="r-filter-options">
                <div class="title">제조사</div>
                <div class="option-box">
                  <div class="a-tab-3">
                    <button selected>전체</button>
                    <button>현대 로보틱스</button>
                    <button>베어 로보틱스</button>
                    <button>러기지</button>
                    <button>호텔</button>
                    <button>기타</button>
                  </div>
                </div><!--//option-box-->
              </div><!--//r-filter-options -->
              <div class="r-filter-options">
                <div class="title">본부</div>
                <div class="option-box">
                  <div class="a-tab-3">
                    <button selected>전체</button>
                    <button>강남/서부</button>
                    <button>강북/강원</button>
                    <button>충남/충북</button>
                    <button>대구/경북</button>
                    <button>전남/전북</button>
                    <button>부산/경남</button>
                  </div>
                </div><!--//option-box-->
              </div><!--//r-filter-options -->
            </div>
          </div>
        </div><!--//r-search-filter -->
        <div class="r-search-recent">
          <div class="item-header">
            <h2 class="tit">최근 검색</h2>
            <div class="r-paging-box">
              <button class="btn-prev"><img src="/resources/images/svg/icon-gray-arrow-left.svg" alt=""></button>
              <button class="btn-next"><img src="/resources/images/svg/icon-gray-arrow-right.svg" alt=""><img src="" alt=""></button>
            </div>
          </div>
          <div class="item-body">
            <div class="item-list">
              <div class="item">
                <div class="tit">청약_베어서빙로봇_판매형</div>
                <div class="txt">
                  <span>썬앳푸드</span>
                  <span>사업장 : 썬앳푸드 아산지점</span>
                  <span>MAC : S2000242290</span>
                </div>
                <div class="img"><img src="/resources/images/temp/temp-robot-01.png" alt=""></div>
              </div><!--//item-->
            </div>
          </div>
        </div><!--//r-search-recent-->
      </div><!--//r-search-box-->
      <div class="r-search-result">
      <div class="r-tachyon min--auto full">
        <div class="r-tachyon__header">
          <div class="r-tachyon__header-l">
            <h2 class="r-tachyon__title">전체 <em>345건</em></h2>
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
            <tachyon-column header-text="로봇모델명" data-field=""></tachyon-column>
            <tachyon-column header-text="서비스" data-field=""></tachyon-column>
            <tachyon-column header-text="제조사" data-field=""></tachyon-column>
            <tachyon-column header-text="서비스 계약 ID" data-field=""></tachyon-column>
            <tachyon-column header-text="MAC 주소" data-field=""></tachyon-column>
            <tachyon-column header-text="고객사명" data-field=""></tachyon-column>
            <tachyon-column header-text="사업장명" data-field=""></tachyon-column>
            <tachyon-column header-text="본부" data-field=""></tachyon-column>
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
    </div><!--///r-search-result-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrivingRobotSelection',
  data() {
    return {
      pageNum: 1,
      pageCount: 20,
      gridItems: [],
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
