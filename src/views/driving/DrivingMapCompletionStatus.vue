<template>
  <div class="viewer">

    <div style="height:100%;display: flex;align-items: center;justify-content: center">
      <button class="a-btn-type-1" @click="openPopup">지도 완성도 현황</button>
    </div>

    <vx-popup ref="popup" modal close-on-outside-down>
      <div class="r-popup r-popup-type-2 p-driving-map-completion-popup">
        <div class="r-popup__header">
          <div class="title">지도 완성도 현황</div>
          <div class="func">
            <button class="btn-close" @click="closePopup"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
          </div>
        </div><!-- //r-popup__header -->
        <div class="r-popup__body">

          <div class="p-driving-map-completion-content">
            <div class="r-tachyon">
              <div class="r-tachyon__header">
                <div class="r-tachyon__header-l">
                  <h2 class="r-tachyon__title">전체 <em>345건</em></h2>
                </div>
                <div class="r-tachyon__header-r">
                  <p>조회기간 2022.04.03 ~ 20022.06.05</p>
                </div>
              </div><!-- //r-tachyon__header -->
              <tachyon-grid
                  theme="themeBoardLine"
                  :row-height="56"
                  :header-row-height="56"
                  :row-count="10"
                  :items="gridItems"
                  @collection-change="onGridItemReset"
                  @scroll="onGridScrollEvent">
                <columns>
                  <tachyon-column header-text="Node" data-field="" width="128"></tachyon-column>
                  <tachyon-column header-text="가장 근접한 장애물과의 거리" data-field=""></tachyon-column>
                  <tachyon-column header-text="주행가능 구역 내 위치" data-field=""></tachyon-column>
                  <tachyon-column header-text="적정성" data-field="" width="120"></tachyon-column>
                  <tachyon-column header-text="가이드" data-field=""></tachyon-column>
                  <tachyon-column header-text="발신 일시" data-field="" width="160"></tachyon-column>
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
          </div><!-- //p-setting-account-change-content -->

        </div><!-- // r-popup__body -->
      </div><!-- //r-popup, r-popup-type-1 -->
    </vx-popup>

  </div><!-- // contents -->
</template>

<script>
export default {
  name: '',
	data() {
		return {
      pageNum: 1,
      pageCount: 20,
      gridItems: []
    };
	},
  mounted() {
    this.openPopup();
  },
  methods: {
    onGridItemReset() {
      console.log('reset');
    },
    onGridScrollEvent() {
      console.log('scroll');
    },
    openPopup() {
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    }
  },
};
</script>
<style scoped>
</style>
