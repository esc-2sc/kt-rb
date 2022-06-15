<template>
    <div class="ac-login__box">
        <div class="ac-login__box-header none">
            <h3 class="ac-login__box-title a-title-3">JOIN</h3>
        </div>
        <div class="ac-login__form">
            <label-input label="이름" class="mini line size--full" value="홍길동"></label-input>
            <label-input label="이메일" class="mini line size--full" value="arches-korea@gmail.com"></label-input>
            <label-input label="아이디" class="mini line size--full" value="Arches King"></label-input>
            <label-input label="비밀번호" type="password" class="mini line size--full"></label-input>
            <label-input label="비밀번호 확인" type="password" class="mini line size--full"></label-input>
        </div>
        <div class="a-btn-group column ac-login__button">
            <button class="a-btn-type-1 size--large btn-reg">회원가입</button>
        </div>
    </div><!-- //ac-login__box -->
</template>

<script>
export default {
    name: 'join',
	data() {
		return {};
	},
	methods: {
	},
};
</script>

<style scoped>
</style>
