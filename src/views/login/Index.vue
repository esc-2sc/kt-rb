<template>
    <div class="ac-login__box">
        <div class="ac-login__box-header">
            <h3 class="ac-login__box-title a-title-3">LOGIN</h3>
            <p class="ac-login__box-desc">
                신규 사용자 이신가요?
                <button class="a-color-point-1">계정 만들기</button>
            </p>
        </div>
        <div class="ac-login__form">
            <label-input label="아이디" class="mini line size--full"></label-input>
            <label-input label="비밀번호" type="password" class="mini line size--full"></label-input>
        </div>
        <div class="a-btn-group column ac-login__button">
            <button class="a-btn-type-1 size--large btn-login">로그인</button>
            <button class="a-btn-type-1 transparent size--large btn-password-find">
                <span class="a-color-point-1">비밀번호 찾기</span>
            </button>
        </div>
    </div><!-- //ac-login__box -->
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
