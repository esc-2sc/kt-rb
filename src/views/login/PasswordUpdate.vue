<template>
    <div class="ac-login__box">
        <div class="ac-login__box-header">
            <h3 class="ac-login__box-title a-title-3">비밀번호 업데이트</h3>
        </div>
        <div class="ac-login__form">
            <div class="ac-login__user">
                <div class="a-user size--large">
                    <span class="a-user__label">AB</span>
                </div><!-- //a-user -->
                <div class="ac-login__user-label">archeskorea@gmail.com</div>
            </div><!-- //ac-login__user -->
            <label-input label="새 비밀번호" type="password" class="mini line size--full"></label-input>
            <label-input label="새 비밀번호 확인" type="password" class="mini line size--full"></label-input>
        </div>
        <div class="a-btn-group column ac-login__button">
            <button class="a-btn-type-1 size--large btn-update">암호 업데이트</button>
        </div>
    </div><!-- //ac-login__box -->
</template>

<script>
export default {
    name: 'password-update',
    data() {
        return {};
    },
    methods: {
    },
};
</script>

<style scoped>
</style>
