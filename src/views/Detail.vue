<template>
    <div class="detail-content">
        <div class="r-box" v-if="false">
<!--            <div class="r-box__nav">filter</div>-->
            <div class="r-box__content">

                <div class="a-list-1" style="margin:32px;">
                    <div class="a-list__body">
                        <div class="a-list__item-row">
                            <div class="a-list__item-label">
                                <span class="label a-color-label-3">로봇명</span>
                                <p class="desc">SR01_00.00.00.96.E7.C5</p>
                            </div>
                            <div class="a-list__item-label">
                                <span class="label a-color-label-3">수신 플랫폼</span>
                                <p class="desc">Robot Makers (SMS)</p>
                            </div>
                            <div class="a-list__item-label">
                                <span class="label a-color-label-3">발신 요청 상태</span>
                                <p class="desc a-color-point-1">발신완료</p>
                            </div>
                            <div class="a-list__item-label">
                                <span class="label a-color-label-3">발신일시</span>
                                <p class="desc">2022-01-20 14:07:40</p>
                            </div>
                        </div>
                        <div class="a-list__item-row">
                            <div class="a-list__item-label">
                                <span class="label a-color-label-3">알람 구분</span>
                                <p class="desc">장애물감지</p>
                            </div>
                            <div class="a-list__item-label">
                                <span class="label a-color-label-3">내용</span>
                                <p class="desc">플랫폼 요청에 의해 로봇이 정지됐습니다.</p>
                            </div>
                        </div>
                    </div><!-- //a-list__body -->
                </div><!-- //a-list-1 -->

            </div><!-- //r-box__content -->
        </div><!-- //r-box -->

<!--        <div class="r-box full r-filter-list">-->
        <div class="r-box full r-filter-list">
            <div class="r-box__nav">
                filter
            </div>
            <div class="r-box__content">
                <div class="r-tachyon full">
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
                            <tachyon-column header-text="발신상태" data-field=""></tachyon-column>
                            <tachyon-column header-text="알람구분" data-field=""></tachyon-column>
                            <tachyon-column header-text="내용" data-field=""></tachyon-column>
                            <tachyon-column header-text="로봇명" data-field=""></tachyon-column>
                            <tachyon-column header-text="서비스" data-field=""></tachyon-column>
                            <tachyon-column header-text="발신 일시 / 조치 일시" data-field=""></tachyon-column>
                            <tachyon-column header-text="소요시간" data-field=""></tachyon-column>
                            <tachyon-column header-text="수신 플랫폼" data-field=""></tachyon-column>
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
export default {
    name: 'Detail',
    components: {
    },
	data() {
		return {
          pageNum: 1,
          pageCount: 20,
          gridItems: []
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
