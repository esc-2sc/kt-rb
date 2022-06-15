<template>
    <guide-box title="Snackbar" desc="With CTA, Without CTA" :to="$options.name">
        <guide-box-item title="With CTA">
            <guide-table>
                <guide-table-item label="Single Button">
                    <div>
                        <div class="a-snackbar">
                            <div class="a-snackbar__label">Email Sent</div>
                            <div class="a-snackbar__func">
                                <button class="btn-back a-color-point-1"><img src="/resources/images/svg/arrow-left-blue-24.svg" alt="Back">Back</button>
                            </div>
                        </div><!-- //a-snackbar -->
                    </div>
                    <div>
                        <div class="a-snackbar theme--dark">
                            <div class="a-snackbar__label">이메일 전송 완료</div>
                            <div class="a-snackbar__func">
                                <button class="btn-back a-color-point-1-1"><img src="/resources/images/svg/arrow-left-blue-24.svg" alt="Back">뒤로가기</button>
                            </div>
                        </div><!-- //a-snackbar -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Multiple Button">
                    <div>
                        <div class="a-snackbar">
                            <div class="a-snackbar__label">Email Sent</div>
                            <div class="a-snackbar__func">
                                <button class="btn-action a-color-point-1">Action</button>
                                <button class="btn-dismiss">Dismiss</button>
                            </div>
                        </div><!-- //a-snackbar -->
                    </div>
                    <div>
                        <div class="a-snackbar theme--dark">
                            <div class="a-snackbar__label">이메일 전송 완료</div>
                            <div class="a-snackbar__func">
                                <button class="btn-goto a-color-point-1-1">메일함으로</button>
                                <button class="btn-list">목록으로</button>
                            </div>
                        </div><!-- //a-snackbar -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="Without CTA">
            <guide-table>
                <guide-table-item label="Left Aligned">
                    <div>
                        <div class="a-snackbar">
                            <div class="a-snackbar__label">Saved to Favorites</div>
                        </div><!-- //a-snackbar -->
                    </div>
                    <div>
                        <div class="a-snackbar theme--dark">
                            <div class="a-snackbar__label">이메일 전송 완료</div>
                        </div><!-- //a-snackbar -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Center Aligned">
                    <div>
                        <div class="a-snackbar center">
                            <div class="a-snackbar__label">Saved to Favorites</div>
                        </div><!-- //a-snackbar -->
                    </div>
                    <div>
                        <div class="a-snackbar theme--dark center">
                            <div class="a-snackbar__label">이메일 전송 완료</div>
                        </div><!-- //a-snackbar -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-snackbar',
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
