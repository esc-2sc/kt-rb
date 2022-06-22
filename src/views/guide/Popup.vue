<template>
    <guide-box title="Popup" desc="Left, Center aligned" :to="$options.name">
        <guide-box-item title="Left aligned">
            <guide-table>
                <guide-table-item label="Background White">
                    <div>

                        <div class="a-popup line" style="width:550px;">
                            <div class="a-popup__header">
                                <div class="a-popup__title">New Company</div>
                                <div class="a-popup__func">
                                    <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
                                </div>
                            </div>
                            <div class="a-popup__body">
                                content area
                            </div>
                            <div class="a-popup__buttons right">
                                <button class="a-btn-type-1 transparent">Cancel</button>
                                <button class="a-btn-type-1">
                                    <img src="/resources/images/svg/check-white-24.svg" class="icon" alt="">
                                    <span class="label">Save</span>
                                </button>
                            </div>
                        </div><!-- //a-popup -->

                    </div>
	                <div>

		                <div class="a-popup theme--gray" style="width:550px;">
			                <div class="a-popup__header">
				                <div class="a-popup__title">
					                New Company
					                <div class="a-popup__title-info">
						                <span class="date">2021.09.09</span>
					                </div>
				                </div>
				                <div class="a-popup__func">
					                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
				                </div>
			                </div>
			                <div class="a-popup__body">
				                content area
			                </div>
			                <div class="a-popup__buttons right">
				                <button class="a-btn-type-1 transparent">Cancel</button>
				                <button class="a-btn-type-1">
					                <img src="/resources/images/svg/check-white-24.svg" class="icon" alt="">
					                <span class="label">Save</span>
				                </button>
			                </div>
		                </div><!-- //a-popup -->

	                </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="" is-dark>
            <guide-table>
                <guide-table-item label="<span class='a-color-label-white'>Background Dark</span>">
                    <div>
                        <div class="a-popup" style="width:550px;">
                            <div class="a-popup__header">
                                <div class="a-popup__title">New Company</div>
                                <div class="a-popup__func">
                                    <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
                                </div>
                            </div>
                            <div class="a-popup__body">
                                content area
                            </div>
                            <div class="a-popup__buttons right">
                                <button class="a-btn-type-1 transparent">Cancel</button>
                                <button class="a-btn-type-1">
                                    <img src="/resources/images/svg/check-white-24.svg" class="icon" alt="">
                                    <span class="label">Save</span>
                                </button>
                            </div>
                        </div><!-- //a-popup -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="Center aligned">
            <guide-table-item label="Background White">
                <div>

                    <div class="a-popup line" style="width:400px;">
                        <div class="a-popup__header">
                            <div class="a-popup__func">
                                <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
                            </div>
                        </div>
                        <div class="a-popup__body center">
                            <figure><img src="/resources/images/svg/paper-airplane-fill-tilt-24.svg" alt=""></figure>
                            <h5 class="a-popup__body-title a-title-5 a-color-label-black">Great job!</h5>
                            <p>
                                You have completed all your<br>
                                tasks for your first project. Keep going!
                            </p>
                        </div>
                        <div class="a-popup__buttons">
                            <button class="a-btn-type-1">
                                <span class="label">Confirm</span>
                            </button>
                        </div>
                    </div><!-- //a-popup -->

                </div>
            </guide-table-item>
        </guide-box-item>
        <guide-box-item title="" is-dark>
            <guide-table>
                <guide-table-item label="<span class='a-color-label-white'>Background Dark</span>">
                    <div>

                        <div class="a-popup" style="width:400px;">
                            <div class="a-popup__header">
                                <div class="a-popup__func">
                                    <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
                                </div>
                            </div>
                            <div class="a-popup__body center">
                                <figure><img src="/resources/images/svg/paper-airplane-fill-tilt-24.svg" alt=""></figure>
                                <h5 class="a-popup__body-title a-title-5 a-color-label-black">전송완료</h5>
                                <p>
                                    회원정보가 잘 전달 되었습니다.<br>
                                    이제 새로운 디자인을 입력하세요.
                                </p>
                            </div>
                            <div class="a-popup__buttons">
                                <button class="a-btn-type-1">
                                    <span class="label">Confirm</span>
                                </button>
                            </div>
                        </div><!-- //a-popup -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-popup',
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
