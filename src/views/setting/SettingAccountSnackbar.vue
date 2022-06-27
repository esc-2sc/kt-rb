<template>
    <div class="detail-content p-setting-account-list">

        <div class="r-box full r-filter-list">
            <div class="r-box__nav">
                nav area
            </div>
            <div class="r-box__content">
                <div class="r-tachyon full">
                    <div class="r-tachyon__header">
                        <div class="r-tachyon__header-l">
                            <h2 class="r-tachyon__title">Snackbar Message</h2>
                        </div>
                        <!-- div class="r-tachyon__header-r">
                        </div -->
                    </div><!-- //r-tachyon__header -->

                    <div class="a-toast-message theme--dark">
                        <div class="a-toast-message__icon"><img src="/resources/images/svg/circle-check-24.svg" class="size--22" alt="Success"></div>
                        <div class="a-toast-message__label">
                            <strong class="a-toast-message__title">변경 완료</strong>
                            <span class="a-toast-message__desc">계정의 권한이 변경 되었습니다.</span>
                        </div>
                        <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Close"></button>
                    </div><!-- //a-toast-message -->

                    <br><br>

                    <div class="a-toast-message theme--dark">
                        <div class="a-toast-message__icon"><img src="/resources/images/svg/circle-check-24.svg" class="size--22" alt="Success"></div>
                        <div class="a-toast-message__label">
                            <strong class="a-toast-message__title">수정 완료</strong>
                            <span class="a-toast-message__desc">계정 정보가 수정 되었습니다.</span>
                        </div>
                        <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Close"></button>
                    </div><!-- //a-toast-message -->

                    <br><br>

                    <div class="a-toast-message theme--dark">
                        <div class="a-toast-message__icon"><img src="/resources/images/svg/icon_delete_red.svg" class="size--22" alt="Success"></div>
                        <div class="a-toast-message__label">
                            <strong class="a-toast-message__title">삭제 완료</strong>
                            <span class="a-toast-message__desc">계정이 삭제 되었습니다</span>
                        </div>
                        <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Close"></button>
                    </div><!-- //a-toast-message -->

                </div><!-- //r-tachyon -->
            </div><!-- //r-box__content -->
        </div><!-- //r-box r-filter-list -->

    </div><!-- // detail-content -->
</template>

<script>
export default {
  name: 'SettingAccountSnackbar',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style scoped>
</style>
