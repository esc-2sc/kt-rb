<template>
    <div class="ac-login__box">
        <div class="ac-login__box-header none">
            <h3 class="ac-login__box-title a-title-3">비밀번호 업데이트</h3>
        </div>
        <div class="ac-login__form">
            <p class="ac-login__form-message">이메일로 재설정 코드를 전송합니다</p>
            <div class="a-grid-form__item">
                <label-input label="이메일" class="mini line size--full" value="Arches@gmail.com"></label-input>
                <button class="a-btn-type-1 size--large ac-btn__send"><span class="label">전송</span></button>
            </div>
        </div>
        <div class="ac-login__code" :class="{'disabled': !isCodeActive}">
            <p class="ac-login__code-label">코드 6자리 입력</p>
            <div class="ac-login__code-form">
                <input type="number" class="a-input line one" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)" :disabled="!isCodeActive">
                <input type="number" class="a-input line one" min="0" max="9" maxlength="1" value="4" @input="maxLengthCheck($event)" :disabled="!isCodeActive">
                <input type="number" class="a-input line one" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" :disabled="!isCodeActive">
                <input type="number" class="a-input line one" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" :disabled="!isCodeActive">
                <input type="number" class="a-input line one" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" :disabled="!isCodeActive">
                <input type="number" class="a-input line one" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" :disabled="!isCodeActive">
            </div>
        </div><!-- //ac-login__code -->
    </div><!-- //ac-login__box -->
</template>

<script>
export default {
    name: 'password-code',
    data() {
        return {
            isCodeActive: true
        };
    },
    methods: {
        maxLengthCheck(event) {
            const eTarget = event.target;
            if (eTarget.value.length > eTarget.maxLength){
                eTarget.value = eTarget.value.slice(0, eTarget.maxLength);
            }
        }
    },
};
</script>

<style scoped>
</style>
