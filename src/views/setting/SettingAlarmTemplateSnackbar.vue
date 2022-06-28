<template>
    <div class="detail-content p-setting-alarm-send-list">

        <div class="r-box full r-alarm-list">
          <div class="r-box__content">
                  <div class="r-box__list">
                    <div class="r-box__list-header">
                      <h2 class="tit">알람 템플릿 수정</h2>
                    </div><!--//r-box__list-header-->
                    <div class="r-box__list-body">
                      <div class="a-toast-message theme--dark">
                        <div class="a-toast-message__icon"><img src="/resources/images/svg/circle-check-24.svg" class="size--22" alt="Success"></div>
                        <div class="a-toast-message__label">
                          <strong class="a-toast-message__title">저장완료</strong>
                          <span class="a-toast-message__desc">변경사항이 저장 되었습니다.</span>
                        </div>
                        <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Close"></button>
                      </div><!-- //a-toast-message -->
                    </div><!--//r-box__list-body-->
                  </div><!--//r-box__list-->
                </div><!--//r-box__content-->
        </div><!-- //r-box r-alarm-list -->

    </div><!-- // detail-content -->
</template>

<script>
// import VueRangedatePicker from 'vue-rangedate-picker';
export default {
  name: 'SettingAlarmTemplateSnackbar',
  // components: {VueRangedatePicker},
  data() {
    return {
      // pageNum: 1,
      // pageCount: 20,
      // gridItems: [],
      // captions:{
      //   title: '',
      //   ok_button: '확인'
      // },
      // shortDays:['일','월','화','수','목','금','토'],
      // months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    };
  },
  methods: {
    // onGridItemReset() {
    //   console.log('reset');
    // },
    // onGridScrollEvent() {
    //   console.log('scroll');
    // }
  },
};
</script>
<style scoped>
</style>
