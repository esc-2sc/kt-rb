<template>
    <div class="r-login-wrap">
      <div class="r-login__form">
        <div class="r-login__form-header">
          <div class="logo-rb"><img src="/resources/images/svg/logo-black-text.svg" alt=""></div>
          <div class="logo-kt"><img src="/resources/images/svg/logo-kt.svg" alt="KT"></div>
        </div>
        <div class="r-login__form-content">
          <div class="r-login__form-write">
            <div class="login"><label-input class="size--full" label="아이디(사번)" value="98764987"></label-input></div>
            <div class="password"><label-input class="size--full" type="password" label="비밀번호" value="98764987"></label-input></div>
            <div class="btn-login"><button class="a-btn-type-1 size--x-large"><span class="label">로그인</span></button></div>
          </div>
          <div class="r-login__form-option">
            <div class="option-l">
              <label class="a-checkbox">
                <input type="checkbox" checked="checked">
                <span class="label">아이디(사번) 저장</span>
              </label><!-- //a-checkbox -->
            </div>
            <div class="option-r">
              <button class="a-btn-type-1 transparent">
                <span class="label a-color-point-1">가입신청</span>
              </button><!-- //a-btn-type-1 -->
            </div>
          </div>
        </div>
        <div class="r-login__form-footer">
            <p>본 사이트는 Chrome Browser에 최적화되어 있습니다.</p>
            <p>로그인이 어려울 경우 관리자에게 문의하여 주십시오.</p>
            <p>대표이메일 : kt_robot_mg@kt.com</p>
        </div>
      </div><!-- //r-login__form -->
      <div class="r-login__video"></div><!-- //r-login__video -->
    </div><!-- //r-login -->
</template>

<script>
export default {
    name: 'login',
	data() {
    return {};
	},
	methods: {
	},
};
</script>

<style scoped>
</style>
