<template>
  <div class="detail-content p-setting-alarm-send-list">

    <div class="r-box full r-filter-list">
      <div class="r-box__nav">
        nav area
      </div>
      <div class="r-box__content">
        <div class="r-tachyon full">
          <div class="r-tachyon__header">
            <div class="r-tachyon__header-l">
              <h2 class="r-tachyon__title">알람 발신 이력 상세</h2>
            </div>
            <div class="r-tachyon__header-r"></div>
          </div><!-- //r-tachyon__header -->

          <div>
            <button class="a-btn-type-1" @click="openPopup">
              <span class="label">알람 발신 이력 상세 - Popup</span>
            </button><!-- //a-btn-type-1 -->
          </div>

        </div><!-- //r-tachyon -->
      </div><!-- //r-box__content -->
    </div><!-- //r-box r-filter-list -->

    <vx-popup ref="popup" modal close-on-outside-down>
      <div class="r-popup r-popup-type-1 p-setting-alarm-detail-popup">
        <div class="r-popup__header">
          <div class="title">알람 발신 이력 상세</div>
          <div class="func">
            <button class="btn-close"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
          </div>
        </div><!-- //r-popup__header -->
        <div class="r-popup__body">

          <div class="r-list-group">
            <h3 class="r-list__title">로봇정보</h3>
            <div class="a-list-1">
              <div class="a-list__body">
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">로봇모델</span>
                    <p class="desc">KT_서빙로봇_임대형</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">제조사</span>
                    <p class="desc">베어로보틱스</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">서비스계약</span>
                    <p class="desc">S003693850</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">MAC 주소</span>
                    <p class="desc">00.00.00.00.F4.7B</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">서비스</span>
                    <p class="desc">서빙</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">고객사명</span>
                    <p class="desc">천천</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">본부</span>
                    <p class="desc">강북/강원</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">관제레벨</span>
                    <p class="desc">L2</p>
                  </div>
                </div>
              </div><!-- //a-list__body -->
            </div><!-- //a-list-1 -->
          </div><!-- //r-list-group -->
          <div class="r-list-group">
            <h3 class="r-list__title">알람상세</h3>
            <div class="a-list-1">
              <div class="a-list__body">
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">알람구분</span>
                    <p class="desc">장애물 감지</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">알람코드</span>
                    <p class="desc">10019</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">알람등급</span>
                    <p class="desc">Major</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">관제레벨</span>
                    <p class="desc">L2</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">발신일시</span>
                    <p class="desc">2022-01-20 14:08:10</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">수신플랫폼</span>
                    <p class="desc">Robot Makers, 고객케어, 로봇케어</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">내용</span>
                    <p class="desc">로봇에서 장애물이 감지됐습니다.</p>
                  </div>
                </div>
              </div><!-- //a-list__body -->
            </div><!-- //a-list-1 -->
          </div><!-- //r-list-group -->
          <div class="r-list-group">
            <h3 class="r-list__title">조치이력</h3>
            <div class="a-list-1">
              <div class="a-list__body">
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">조치상태</span>
                    <p class="desc">수동종료</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">처리자</span>
                    <p class="desc">10031696</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">처리일시</span>
                    <p class="desc">2022-01-20 14:08:10</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">발생원인</span>
                    <p class="desc">장애물 감지</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label a-color-label-3">조치내역</span>
                    <p class="desc">직접 조치 완료했습니다.</p>
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
  name: 'SettingAlarmSendDetail',
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
