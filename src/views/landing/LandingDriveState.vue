<template>
    <div class="r-landing">
      <div class="r-landing__inner">
        <div class="r-landing__header">
          <h1 class="logo"><img src="/resources/images/svg/logo-black.svg" alt="R-Brain"></h1>
          <p class="tit">주행상태</p>
        </div><!--//r-landing__header-->
        <div class="r-landing__body">
          <!-- 주행상태 -->
          <div class="item-view type-1">
            <div class="label">SM 요청정지</div>
            <div class="txt-1">로봇 내부 서비스매니저에<br>오류가 발생해 주행이 취소 됐습니다</div>
            <div class="photo"><img src="/resources/images/temp/temp-landing-robot-01.png" alt=""></div>
          </div><!-- //주행상태 -->

          <!-- 배터리 분석 -->
          <div class="item-view type-2">
            <div class="label">충전 패턴 이상</div>
            <div class="state">45%</div>
            <div class="state-bar" style="width:45%"></div>
            <div class="txt-1">로봇 충전을 잊지 않으셨나요?<br> 혹시 충전중이시라면 어댑터 부분의<br> 확인이 필요 합니다</div>
            <div class="photo"><img src="/resources/images/temp/temp-landing-robot-01.png" alt=""></div>
          </div><!-- //배터리 분석 -->

          <!-- 금지구역 진입 -->
          <div class="item-view type-3">
            <div class="label">이상 주행 발생</div>
            <div class="txt-1">아래 위치에서 로봇의 주행이<br>비정상적 입니다</div>
            <div class="photo"><img src="/resources/images/temp/temp-landing-robot-01.png" alt=""></div>
          </div><!-- //금지구역 진입 -->

          <!-- 지도완성도 분석 -->
          <div class="item-view type-4">
            <div class="label">이상 주행 발생</div>
            <div class="txt-1">작성된 로봇 지도 기반<br>주행영역을 추출합니다</div>
            <div class="txt-2">주행영역을 수정하고 싶다면, 금지구역을<br>재설정해주세요</div>
            <div class="photo"><img src="/resources/images/temp/temp-landing-robot-01.png" alt=""></div>
          </div><!-- //지도완성도 분석 -->

          <!--  지도완성도 분석 - 조치완료 -->
          <div class="item-view">
            <div class="label">조치완료</div>
            <div class="icon"><img src="/resources/images/svg/icon-complete.svg" alt=""></div>
            <div class="txt-1">발생알람에 대해<br>조치완료 처리 되었습니다</div>
            <div class="photo"><img src="/resources/images/temp/temp-landing-robot-01.png" alt=""></div>
          </div><!-- //지도완성도 분석 - 조치완료 -->

          <!--  지도완성도 분석 - 분석중 -->
          <div class="item-view">
            <div class="label">분석중</div>
            <div class="icon"><img src="/resources/images/svg/icon-loading.svg" alt=""></div>
            <div class="txt-1">분석이 완료되면<br>결과페이지가 노출됩니다</div>
            <div class="photo"><img src="/resources/images/temp/temp-landing-robot-01.png" alt=""></div>
          </div><!-- //지도완성도 분석 - 분석중 -->

          <div class="item-table">
            <div class="a-list-1">
              <div class="a-list__body">
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label">발생일시</span>
                    <p class="desc">2022.09.09 23:34</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label">고객사</span>
                    <p class="desc">청초수물회</p>
                  </div>
                  <div class="a-list__item-label">
                    <span class="label">사업장</span>
                    <p class="desc">의왕 백운호수점</p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label">MAC</span>
                    <p class="desc"><em class="a-color-point-1">00.00.39.98</em></p>
                  </div>
                </div>
                <div class="a-list__item-row">
                  <div class="a-list__item-label">
                    <span class="label">로봇명</span>
                    <p class="desc">케이티_서빙로봇_임대형</p>
                  </div>
                </div>
              </div><!-- //a-list__body -->
            </div><!-- //a-list-1 -->
          </div>
          <div class="item-map">
            <img src="/resources/images/temp/temp-landing-map.png" alt="">
          </div>
          <div class="item-check-list">
            <div class="tit">Check list</div>
            <ul class="list">
              <li>해당위치 주변에 장애물이 있는지 확인해주세요.</li>
              <li>지도 완성도를 체크하여 주세요</li>
              <li>rbrain.kt.co.kr 웹접속하여 상세정보를 확인해주세요.<br>로그인>로봇선택>주행>주행상태분석</li>
            </ul>
          </div>
        </div><!--//r-landing__body -->
        <div class="r-landing__footer">
          <p>자세한 사항은 R-Brain에서 확인 가능 합니다</p>
          <p>ⓒ R-Brain</p>
        </div><!-- //r-landing__footer -->
        <div class="r-landing__fix"><button class="btn-completed">조치완료</button></div>
      </div><!-- //r-landing__inner -->
      <div class="r-landing__inner-bg"><img src="/resources/images/temp/temp-bg-landing.png" alt=""></div><!-- //r-landing__inner-bg-->
    </div><!-- //r-landing -->
</template>

<script>
export default {
    name: 'LandingDriveState',
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
