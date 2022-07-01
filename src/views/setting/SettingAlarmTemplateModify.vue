<template>
  <div class="detail-content p-setting-alarm-template-modify">

    <div class="r-box full r-alarm-list">
      <div class="r-box__content">
        <div class="r-box__list">

          <div class="r-box__list-header">
            <h2 class="tit">알람 템플릿 수정</h2>
          </div><!--//r-box__list-header-->
          <div class="r-box__list-body">

            <div>
              <button class="a-btn-type-1" @click="openPopup">
                <span class="label">알람 템플릿 수정 - Popup</span>
              </button><!-- //a-btn-type-1 -->
            </div>

          </div><!--// r-box__list-body-->
        </div><!--//r-box__list-->
      </div><!-- //r-box__content -->
    </div><!-- //r-box r-filter-list -->

    <vx-popup ref="popup" modal>
      <div class="r-popup-auto">
        <div class="r-popup-auto__content">
         <div class="r-popup r-popup-type-1 p-setting-alarm-detail-popup">
        <div class="r-popup__header">
          <div class="title">알람 템플릿 수정</div>
          <div class="func">
            <button class="btn-close" @click="closePopup"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
          </div>
        </div><!-- //r-popup__header -->
        <div class="r-popup__body">

          <div class="r-popup__row">
            <div class="a-list-1">
              <div class="a-list__body">
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label">서비스</span>
                    <p class="desc">서빙</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label">알람구분</span>
                    <p class="desc">장애물 감지</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label">알람유형</span>
                    <p class="desc">SW</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label">알람코드</span>
                    <p class="desc">10101010</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label">알람 사용 여부</span>
                    <p class="desc">Y</p>
                  </div>
                </div>
              </div><!-- //a-list__body -->
            </div><!-- //a-list-1 -->
          </div><!-- //r-popup__row -->

          <div class="r-popup__row">
            <div class="r-list-tab">
              <div class="r-list-tab__item-l"><span class="label">알람등급</span></div>
              <div class="r-list-tab__item-r">
                <div class="a-tab-3">
                  <button class="selected">Major</button>
                  <button>Fatal</button>
                  <button>Critical</button>
                  <button>Minor</button>
                </div>
              </div>
            </div><!--//r-list-tab-->
          </div><!-- //r-popup__row -->

          <div class="r-popup__row">
            <textarea class="a-textarea size--full line" placeholder="알람내용"></textarea>
          </div><!--//r-popup__row -->

          <div class="r-popup__row">
            <textarea class="a-textarea size--full line" placeholder="알람설명"></textarea>
          </div><!--//r-popup__row -->

          <div class="r-popup__row">
            <div class="r-list-tab">
              <div class="r-list-tab__item-l"><span class="label">알람 노출 여부</span></div>
              <div class="r-list-tab__item-r">
                <div class="a-tab-3">
                  <button class="selected">노출</button>
                  <button>숨김</button>
                </div>
              </div>
            </div><!--//r-list-tab-->
            <div class="r-list-tab">
              <div class="r-list-tab__item-l"><span class="label">알림설정</span></div>
              <div class="r-list-tab__item-r">
                <div class="a-tab-3">
                  <button class="selected">가시 알림 설정</button>
                  <button>가청 알림 설정</button>
                </div>
              </div>
            </div><!--//r-list-tab-->
          </div><!--//r-popup__row -->

          <div class="r-popup__row">
            <div class="r-list-tab">
              <div class="r-list-tab__item-l"><span class="label">SMS 발신설정</span></div>
              <div class="r-list-tab__item-r">
                <div class="a-tab-3">
                  <button class="selected">발생  SMS</button>
                  <button>복구  SMS</button>
                </div>
              </div>
            </div><!--//r-list-tab-->
            <div class="r-list-tab">
              <div class="r-list-tab__item-l"><span class="label">발신 시간대  00:00~20:20</span></div>
              <div class="r-list-tab__item-r">
                <div :class="['a-tab-3', {'open-time-view':isTimeView}]">
                  <button >기본 시간대</button>
                  <button id="time-select" @click="testTimeView" selected>직접입력</button>
                </div>
                <div class="r-time-select" v-if="false">
                  <div class="r-time-select__group">
                    <div class="r-time-select__title">시작</div>
                    <div class="r-time-select__list">
                      <ul class="scroll">
                        <li v-for="hour in 24"><button :selected="hour == 1">{{ `${hour}시` }}</button></li>
                      </ul>
                      <ul class="scroll">
                        <li v-for="(minute, index) in minutes"><button :selected="index == 0">{{`${minute}분`}}</button></li>
                      </ul>
                    </div><!-- //r-time-select__list -->
                  </div><!-- //r-time-select__group -->
                  <div class="r-time-select__group">
                    <div class="r-time-select__title">종료</div>
                    <div class="r-time-select__list">
                      <ul class="scroll">
                        <li v-for="hour in 24"><button :selected="hour == 6">{{ `${hour}시` }}</button></li>
                      </ul>
                      <ul class="scroll">
                        <li v-for="(minute, index) in minutes"><button :selected="index == 5">{{`${minute}분`}}</button></li>
                      </ul>
                    </div><!-- //r-time-select__list -->
                  </div><!-- //r-time-select__group -->
                </div><!-- //r-time-select -->
              </div>
            </div><!--//r-list-tab-->
          </div><!--//r-popup__row -->

          <div class="r-popup__row">
            <div class="r-list-tab">
              <div class="r-list-tab__item-l"><span class="label">관제레벨</span></div>
              <div class="r-list-tab__item-r">
                <div class="a-tab-3">
                  <button class="selected">L3</button>
                  <button>L2</button>
                  <button>L1</button>
                </div>
              </div>
            </div><!--//r-list-tab-->
            <div class="r-list-tab">
              <div class="r-list-tab__item-l"><span class="label">발신 플랫폼</span></div>
              <div class="r-list-tab__item-r">
                <div class="a-tab-3">
                  <button class="selected">Robot Makers</button>
                  <button>고객케어</button>
                  <button>로봇케어</button>
                </div>
              </div>
            </div><!--//r-list-tab-->
          </div><!--//r-popup__row -->

          <div class="r-popup__row">
            <textarea class="a-textarea size--full line" placeholder="관제 가이드 (SOP)"></textarea>
          </div><!--//r-popup__row -->
        </div><!-- // r-popup__body -->
        <div class="r-popup__footer">
          <div class="btn-wrap right">
            <button type="button" class="a-btn-type-1 color--white">취소</button>
            <button type="button" class="a-btn-type-1 color--blue">저장</button>
          </div>
        </div>
      </div><!-- //r-popup, r-popup-type-1 -->
        </div><!-- //r-popup-auto__content -->
      </div><!-- //r-popup-auto -->
    </vx-popup>
    <vx-popup ref="timeSelect"
              position-target="#time-select"
              :horizontalOffset="-24"
              :verticalOffset="9"
              horizontalAlign="right"
              close-on-outside-down>
      <div class="r-time-select">
        <div class="r-time-select__group">
          <div class="r-time-select__title">시작</div>
          <div class="r-time-select__list">
            <ul class="scroll">
              <li v-for="hour in 24"><button :selected="hour == 1">{{ `${hour}시` }}</button></li>
            </ul>
            <ul class="scroll">
              <li v-for="(minute, index) in minutes"><button :selected="index == 0">{{`${minute}분`}}</button></li>
            </ul>
          </div><!-- //r-time-select__list -->
        </div><!-- //r-time-select__group -->
        <div class="r-time-select__group">
          <div class="r-time-select__title">종료</div>
          <div class="r-time-select__list">
            <ul class="scroll">
              <li v-for="hour in 24"><button :selected="hour == 6">{{ `${hour}시` }}</button></li>
            </ul>
            <ul class="scroll">
              <li v-for="(minute, index) in minutes"><button :selected="index == 5">{{`${minute}분`}}</button></li>
            </ul>
          </div><!-- //r-time-select__list -->
        </div><!-- //r-time-select__group -->
      </div><!-- //r-time-select -->
    </vx-popup>
  </div><!-- // detail-content -->
</template>

<script>
export default {
  name: 'SettingAlarmTemplateModify',
  components: {},
  data() {
    return {
      minutes: ['00', '05', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
      isTimeView: false
    };
  },
  mounted() {
    this.openPopup();
  },
  methods: {
    openPopup() {
      this.$refs.popup.open().opened(() => {
        this.$refs.timeSelect.open();
      });
    },
    closePopup() {
      this.$refs.popup.close();
    },
    testTimeView() {
      this.isTimeView = !this.isTimeView;
      this.$refs.timeSelect.open();
    }
  },
};
</script>
<style scoped>
</style>
