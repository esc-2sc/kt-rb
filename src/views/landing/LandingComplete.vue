<template>
  <div class="r-landing">
    <div class="r-landing__inner">
      <div class="r-landing__header">
        <h1 class="logo"><img src="/resources/images/svg/logo-black.svg" alt="R-Brain"></h1>
        <p class="tit">지도완성도 분석</p>
      </div><!--//r-landing__header-->
      <div class="r-landing__body">
        <!--  지도완성도 분석 - 조치완료 -->
        <div class="item-view">
          <div class="label">조치완료</div>
          <div class="icon"><img src="/resources/images/svg/icon-complete.svg" alt=""></div>
          <div class="txt-1">발생알람에 대해<br>조치완료 처리 되었습니다</div>
          <div class="photo"><img src="/resources/images/temp/temp-landing-robot-01.png" alt=""></div>
        </div><!-- //지도완성도 분석 - 조치완료 -->
      </div><!--//r-landing__body -->
      <div class="r-landing__footer">
        <p>자세한 사항은 R-Brain에서 확인 가능 합니다</p>
        <p>ⓒ R-Brain</p>
      </div><!-- //r-landing__footer -->
    </div><!-- //r-landing__inner -->
    <div class="r-landing__fix"><button class="btn-completed">조치완료</button></div>
    <div class="r-landing__inner-bg"><img src="/resources/images/temp/temp-bg-landing.png" alt=""></div><!-- //r-landing__inner-bg-->
  </div><!-- //r-landing -->
</template>

<script>
export default {
    name: 'LandingComplete',
	data() {
    return {
    };
	},
  mounted() {
  },
  methods: {
	},
};
</script>

<style scoped>
</style>
