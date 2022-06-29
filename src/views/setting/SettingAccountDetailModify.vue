<template>
    <div class="detail-content p-setting-account-modify">

        <div class="r-box full r-alarm-list">
            <div class="r-box__content">
                <div class="r-box__list">

                    <div class="r-box__list-header">
                        <h2 class="tit">계정 수정</h2>
                    </div><!--//r-box__list-header-->
                    <div class="r-box__list-body">
                        <div>
                            <button class="a-btn-type-1" @click="openPopup">
                                <span class="label">계정 수정 - Popup</span>
                            </button><!-- //a-btn-type-1 -->
                        </div>
                    </div><!--// r-box__list-body-->

                </div><!--//r-box__list-->
            </div><!-- //r-box__content -->
        </div><!-- //r-box r-filter-list -->

        <vx-popup ref="popup" modal>
            <div class="r-popup r-popup-type-1 p-setting-account-modify-popup">
                <div class="r-popup__header">
                    <div class="title">계정 수정</div>
                    <div class="func">
                        <button class="btn-close" @click="closePopup"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
                    </div>
                </div><!-- //r-popup__header -->
                <div class="r-popup__body">

                    <div class="r-popup__row">
                        <div class="r-list-tab">
                            <div class="r-list-tab__item-l"><span class="label">권한</span></div>
                            <div class="r-list-tab__item-r">
                                <div class="a-tab-3">
                                    <button class="selected">일반회원</button>
                                    <button>중간관리자</button>
                                    <button>관리자 (슈퍼어드민)</button>
                                </div>
                            </div>
                        </div><!--//r-list-tab-->
                    </div><!-- //r-popup__row -->

                    <div class="r-popup__row">
                        <label-input label="아이디 (사번)" class="line" value="0001002"></label-input>
                    </div><!--//r-popup__row -->

                    <div class="r-popup__row">
                        <label-input label="이름" class="line"></label-input>
                    </div><!--//r-popup__row -->

                    <div class="r-popup__row">
                        <label-input label="휴대폰 번호" class="line" value="010-1234-5678"></label-input>
                    </div><!--//r-popup__row -->

                    <div class="r-popup__row">
                        <label-input label="이메일" class="line"></label-input>
                    </div><!--//r-popup__row -->

                    <div class="r-popup__row">
                        <div class="r-list-tab">
                            <div class="r-list-tab__item-l"><span class="label">사용여부</span></div>
                            <div class="r-list-tab__item-r">
                                <div class="a-tab-3">
                                    <button class="selected">사용</button>
                                    <button>중단</button>
                                    <button>잠금</button>
                                </div>
                            </div>
                        </div><!--//r-list-tab-->
                    </div><!--//r-popup__row -->
                </div><!-- // r-popup__body -->
                <div class="r-popup__footer">
                    <div class="btn-wrap right">
                        <button type="button" class="a-btn-type-1 color--white">취소</button>
                        <button type="button" class="a-btn-type-1 color--blue">저장</button>
                    </div>
                </div>
            </div><!-- //r-popup, r-popup-type-1 -->
        </vx-popup>

    </div><!-- // detail-content -->
</template>

<script>
export default {
  name: 'SettingAlarmTemplateModify',
  components: {},
  data() {
    return {
    };
  },
  mounted() {
    this.openPopup();
  },
  methods: {
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
