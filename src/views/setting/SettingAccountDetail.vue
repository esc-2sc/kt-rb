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
              <h2 class="r-tachyon__title">계정 상세정보</h2>
            </div>
            <div class="r-tachyon__header-r"></div>
          </div><!-- //r-tachyon__header -->

          <div>
            <button class="a-btn-type-1" @click="openPopup">
              <span class="label">계정 상세정보 - Popup</span>
            </button><!-- //a-btn-type-1 -->
          </div>

        </div><!-- //r-tachyon -->
      </div><!-- //r-box__content -->
    </div><!-- //r-box r-filter-list -->

    <vx-popup ref="popup" modal close-on-outside-down>
      <div class="r-popup r-popup-type-1 p-setting-alarm-detail-popup">
        <div class="r-popup__header">
          <div class="title">계정 상세정보</div>
          <div class="func">
            <button class="btn-close"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
          </div>
        </div><!-- //r-popup__header -->
        <div class="r-popup__body">

          <div class="r-list-group">
            <h3 class="r-list__title">계정 정보</h3>
            <div class="a-list-1">
              <div class="a-list__body">
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">권한</span>
                    <p class="desc">일반회원</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">아이디</span>
                    <p class="desc">100***</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">이름</span>
                    <p class="desc">홍길동</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">휴대폰 번호</span>
                    <p class="desc">010-000-2309</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">이메일</span>
                    <p class="desc">hongkimde@gmail.com</p>
                  </div>
                </div>
              </div><!-- //a-list__body -->
            </div><!-- //a-list-1 -->
          </div><!-- //r-list-group -->
          <div class="r-list-group">
            <h3 class="r-list__title">History</h3>
            <div class="a-list-1">
              <div class="a-list__body">
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">마지막 로그인 일시</span>
                    <p class="desc">2022-06-29 18:31:22</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">사용여부</span>
                    <p class="desc"><span class="a-color-point-3">중단</span></p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">비밀번호 만료일</span>
                    <p class="desc">2022-06-29 18:31:22</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">비밀번호 변경일</span>
                    <p class="desc">2022-06-29 18:31:22</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">등록일</span>
                    <p class="desc">2022-06-29 18:31:22</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">수정일</span>
                    <p class="desc">2022-06-29 18:31:22</p>
                  </div>
                </div>
              </div><!-- //a-list__body -->
            </div><!-- //a-list-1 -->
          </div><!-- //r-list-group -->
        </div><!-- // r-popup__body -->
      </div><!-- //r-popup, r-popup-type-1 -->
    </vx-popup>

  </div><!-- // detail-content -->
</template>

<script>
export default {
  name: 'SettingAccountDetail',
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
    }
  },
};
</script>
<style scoped>
</style>
