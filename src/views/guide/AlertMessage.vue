<template>
    <guide-box title="AlertMessage" desc="Center Aligned" :to="$options.name">
        <guide-box-item title="Center Aligned">
            <guide-table>
                <guide-table-item label="Background White">
                    <div>
                        <div class="a-alert-message line">
                            <div class="a-alert-message__label">
                                <div class="a-alert-message__title">파일을 저장합니다</div>
                                <div class="a-alert-message__desc">변경된 내용으로 저장하시겠습니까?</div>
                            </div>
                            <div class="a-alert-message__buttons">
                                <button class="a-btn-type-1">저장하기</button>
                                <button class="a-btn-type-1 transparent">취소하기</button>
                            </div>
                        </div><!-- //a-alert-message -->
                    </div>
                    <div>
                        <div class="a-alert-message line">
                            <div class="a-alert-message__label">
                                <div class="a-alert-message__title">All Done!</div>
                                <div class="a-alert-message__desc">
                                    You have completed all your<br>
                                    tasks for today. great job!
                                </div>
                            </div>
                            <div class="a-alert-message__buttons">
                                <button class="a-btn-type-1">OK, thanks!</button>
                                <!-- button class="a-btn-type-1 transparent">취소하기</button -->
                            </div>
                        </div><!-- //a-alert-message -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="" is-dark>
            <guide-table>
                <guide-table-item label="<span class='a-color-label-white'>Background Dark</span>">
                    <div>
                        <div class="a-alert-message">
                            <div class="a-alert-message__label">
                                <div class="a-alert-message__title">파일을 저장합니다</div>
                                <div class="a-alert-message__desc">변경된 내용으로 저장하시겠습니까?</div>
                            </div>
                            <div class="a-alert-message__buttons">
                                <button class="a-btn-type-1">저장하기</button>
                                <button class="a-btn-type-1 transparent">취소하기</button>
                            </div>
                        </div><!-- //a-alert-message -->
                    </div>
                    <div>
                        <div class="a-alert-message">
                            <div class="a-alert-message__label">
                                <div class="a-alert-message__title">All Done!</div>
                                <div class="a-alert-message__desc">
                                    You have completed all your<br>
                                    tasks for today. great job!
                                </div>
                            </div>
                            <div class="a-alert-message__buttons">
                                <button class="a-btn-type-1">OK, thanks!</button>
                                <!-- button class="a-btn-type-1 transparent">취소하기</button -->
                            </div>
                        </div><!-- //a-alert-message -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-alert-message',
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
