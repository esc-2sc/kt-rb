<template>
    <div class="detail-content p-setting-account-list">

        <div class="r-box full r-filter-list">
            <div class="r-box__nav">
                nav area
            </div>
            <div class="r-box__content">
                <div class="r-tachyon full">
                    <div class="r-tachyon__header">
                        <div class="r-tachyon__header-l">
                            <h2 class="r-tachyon__title">권한변경 </h2>
                        </div>
                        <div class="r-tachyon__header-r">
                        </div>
                    </div><!-- //r-tachyon__header -->

                    <div>
                        <button class="a-btn-type-1" @click="openPopup">
                            <span class="label">알람 템플릿 수정 - Popup</span>
                        </button><!-- //a-btn-type-1 -->
                    </div>
                </div><!-- //r-tachyon -->
            </div><!-- //r-box__content -->
        </div><!-- //r-box r-filter-list -->

        <vx-popup ref="popup" modal>
          <div class="r-popup-auto">
            <div class="r-popup-auto__content">
              <div class="r-popup r-popup-type-2 p-setting-account-change-popup">
                <div class="r-popup__header">
                    <div class="title">권한변경</div>
                    <div class="func">
                        <button class="btn-close" @click="closePopup"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
<!--                        <button class="btn-close" @click="closePopup"><img src="/resources/images/svg/icon-close-32.svg" alt="close"></button>-->
                    </div>
                </div><!-- //r-popup__header -->
                <div class="r-popup__body">

                <div class="p-setting-account-change-content">
                    <div class="r-tachyon">
                        <div class="r-tachyon__option">
                            <div class="r-tachyon__option-l">
                                <div class="option-radios">
                                    <strong class="option-title">권한선택</strong>
                                    <label class="a-radio">
                                        <input type="radio" checked>
                                        <span class="label">일반회원</span>
                                    </label><!-- //a-radio -->
                                    <label class="a-radio">
                                        <input type="radio">
                                        <span class="label">중간관리자</span>
                                    </label><!-- //a-radio -->
                                    <label class="a-radio">
                                        <input type="radio">
                                        <span class="label">관리자(슈퍼어드민)</span>
                                    </label><!-- //a-radio -->
                                </div>
                            </div>
                            <div class="r-tachyon__option-r">
                                <p class="message"><img src="/resources/images/svg/icon_info_blue.svg" alt="info">선택된 계정의 권한이 일괄 변경됩니다.</p>
                            </div>
                        </div>
                        <tachyon-grid
                          theme="themeBoardLine"
                          :row-height="56"
                          :header-row-height="56"
                          :row-count="5"
                          :items="gridItems"
                          @collection-change="onGridItemReset"
                          @scroll="onGridScrollEvent">
                            <columns>
                                <tachyon-column header-text="아이디" data-field="" width="120"></tachyon-column>
                                <tachyon-column header-text="변경 전 권한명" data-field=""></tachyon-column>
                                <tachyon-column header-text="계정명" data-field="" width="88"></tachyon-column>
                                <tachyon-column header-text="고객사명" data-field="" width="88"></tachyon-column>
                                <tachyon-column header-text="사업장명" data-field=""></tachyon-column>
                                <tachyon-column header-text="사용여부" data-field="" width="88"></tachyon-column>
                                <tachyon-column header-text="등록일" data-field="" width="88"></tachyon-column>
                                <tachyon-column header-text="수정일" data-field="" width="88"></tachyon-column>
                            </columns>
                        </tachyon-grid>
                    </div><!-- //r-tachyon -->
                </div><!-- //p-setting-account-change-content -->

                </div><!-- // r-popup__body -->
                <div class="r-popup__footer">
                    <div class="btn-wrap right">
                        <button type="button" class="a-btn-type-1 color--white">취소</button>
                        <button type="button" class="a-btn-type-1 color--blue">권한변경</button>
                    </div>
                </div>
            </div><!-- //r-popup, r-popup-type-1 -->
            </div><!-- //r-popup-auto__content -->
          </div><!-- //r-popup-auto -->
        </vx-popup>

    </div><!-- // detail-content -->
</template>

<script>
export default {
  name: 'SettingAccountChange',
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
