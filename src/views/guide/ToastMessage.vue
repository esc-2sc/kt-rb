<template>
    <guide-box title="ToastMessage" desc="With CTA, Without CTA" :to="$options.name">
        <guide-box-item title="With CTA">
            <guide-table>
                <guide-table-item label="Information">
                    <div>
                        <div class="a-toast-message">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/info-24.svg" class="size--22" alt="Information"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">Information</strong>
                                <span class="a-toast-message__desc">New Activity for today</span>
                            </div>
                            <div class="a-toast-message__func">
                                <button class="btn-action a-color-point-1">Action</button>
                                <button class="btn-dismiss">Dismiss</button>
                            </div>
                        </div><!-- //a-toast-message -->
                    </div>
                    <div>
                        <div class="a-toast-message theme--dark">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/info-24.svg" class="size--22" alt="Information"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">새로운 소식</strong>
                                <span class="a-toast-message__desc">오늘의 새로운 활동 추가 되었습니다.</span>
                            </div>
                            <div class="a-toast-message__func">
                                <button class="btn-action a-color-point-1-1">바로가기</button>
                                <button class="btn-dismiss">읽음처리</button>
                            </div>
                        </div><!-- //a-toast-message -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Warning">
                    <div>
                        <div class="a-toast-message">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/alert-24.svg" class="size--22" alt="Warning"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">Warning</strong>
                                <span class="a-toast-message__desc">Not sure your File</span>
                            </div>
                            <div class="a-toast-message__func">
                                <button class="btn-action a-color-point-3">Action</button>
                                <button class="btn-dismiss">Dismiss</button>
                            </div>
                        </div><!-- //a-toast-message -->
                    </div>
                    <div>
                        <div class="a-toast-message theme--dark">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/alert-24.svg" class="size--22" alt="Warning"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">경고</strong>
                                <span class="a-toast-message__desc">파일이 정확히지 않습니다.</span>
                            </div>
                            <div class="a-toast-message__func">
                                <button class="btn-action a-color-point-3">재첨부</button>
                                <button class="btn-dismiss">첨부취소</button>
                            </div>
                        </div><!-- //a-toast-message -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Success">
                    <div>
                        <div class="a-toast-message">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/circle-check-24.svg" class="size--22" alt="Success"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">Success</strong>
                                <span class="a-toast-message__desc">Save your Reoport file safty</span>
                            </div>
                            <div class="a-toast-message__func">
                                <button class="btn-action a-color-point-2">Action</button>
                                <button class="btn-dismiss">Dismiss</button>
                            </div>
                        </div><!-- //a-toast-message -->
                    </div>
                    <div>
                        <div class="a-toast-message theme--dark">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/circle-check-24.svg" class="size--22" alt="Success"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">완료</strong>
                                <span class="a-toast-message__desc">보고서가 안전하게 저장되었습니다.</span>
                            </div>
                            <div class="a-toast-message__func">
                                <button class="btn-action a-color-point-2">보관함으로</button>
                                <button class="btn-dismiss">목록으로</button>
                            </div>
                        </div><!-- //a-toast-message -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="Without CTA">
            <guide-table>
                <guide-table-item label="Information">
                    <div>
                        <div class="a-toast-message">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/info-24.svg" class="size--22" alt="Information"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">Information</strong>
                                <span class="a-toast-message__desc">New Activity for today</span>
                            </div>
                            <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus.svg" class="size--16" alt="Close"></button>
                        </div><!-- //a-toast-message -->
                    </div>
                    <div>
                        <div class="a-toast-message theme--dark">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/info-24.svg" class="size--22" alt="Information"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">새로운 소식</strong>
                                <span class="a-toast-message__desc">오늘의 새로운 활동 추가 되었습니다.</span>
                            </div>
                            <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Close"></button>
                        </div><!-- //a-toast-message -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Warning">
                    <div>
                        <div class="a-toast-message">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/alert-24.svg" class="size--22" alt="Warning"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">Warning</strong>
                                <span class="a-toast-message__desc">Not sure your File</span>
                            </div>
                            <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus.svg" class="size--16" alt="Close"></button>
                        </div><!-- //a-toast-message -->
                    </div>
                    <div>
                        <div class="a-toast-message theme--dark">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/alert-24.svg" class="size--22" alt="Warning"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">경고</strong>
                                <span class="a-toast-message__desc">파일이 정확히지 않습니다.</span>
                            </div>
                            <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Close"></button>
                        </div><!-- //a-toast-message -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Success">
                    <div>
                        <div class="a-toast-message">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/circle-check-24.svg" class="size--22" alt="Success"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">Success</strong>
                                <span class="a-toast-message__desc">Save your Reoport file safty</span>
                            </div>
                            <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus.svg" class="size--16" alt="Close"></button>
                        </div><!-- //a-toast-message -->
                    </div>
                    <div>
                        <div class="a-toast-message theme--dark">
                            <div class="a-toast-message__icon"><img src="/resources/images/svg/circle-check-24.svg" class="size--22" alt="Success"></div>
                            <div class="a-toast-message__label">
                                <strong class="a-toast-message__title">완료</strong>
                                <span class="a-toast-message__desc">보고서가 안전하게 저장되었습니다.</span>
                            </div>
                            <button class="a-toast-message__close"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Close"></button>
                        </div><!-- //a-toast-message -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-toast-message',
    components: {
    },
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
