<template>
    <guide-box title="Tooltip" desc="White, Dark" :to="$options.name">
        <guide-box-item title="White">
            <guide-table>
                <guide-table-item label="Top Arrow">
                    <div>
                        <div class="a-tooltip top--left">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip top--center">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip top--right">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Left Arrow">
                    <div>
                        <div class="a-tooltip left--top">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip left--middle">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip left--bottom">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Right Arrow">
                    <div>
                        <div class="a-tooltip right--top">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip right--middle">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip right--bottom">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Bottom Arrow">
                    <div>
                        <div class="a-tooltip bottom--left">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip bottom--center">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip bottom--right">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="nowrap">
                    <div>
                        <div class="a-tooltip left--middle nowrap" style="max-width:300px;">
                            <div class="a-tooltip__label">max-width:300px; Tooltip Message Tooltip Message Tooltip Message Tooltip Message Tooltip Message Tooltip Message Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="Dark">
            <guide-table>
                <guide-table-item label="Top Arrow">
                    <div>
                        <div class="a-tooltip top--left theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip top--center theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip top--right theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Left Arrow">
                    <div>
                        <div class="a-tooltip left--top theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip left--middle theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip left--bottom theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Right Arrow">
                    <div>
                        <div class="a-tooltip right--top theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip right--middle theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip right--bottom theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Bottom Arrow">
                    <div>
                        <div class="a-tooltip bottom--left theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip bottom--center theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                    <div>
                        <div class="a-tooltip bottom--right theme--dark">
                            <div class="a-tooltip__label">Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
                <guide-table-item label="nowrap">
                    <div>
                        <div class="a-tooltip left--middle theme--dark nowrap" style="max-width:300px;">
                            <div class="a-tooltip__label">max-width:300px; Tooltip Message Tooltip Message Tooltip Message Tooltip Message Tooltip Message Tooltip Message Tooltip Message</div>
                        </div><!-- //a-tooltip -->
                    </div>
                </guide-table-item>
	            <guide-table-item label="dark--gray">
		            <div>
			            <div class="a-tooltip left--middle theme--dark dark--gray">
				            <div class="a-tooltip__label">class="theme--dark dark--gray"</div>
			            </div><!-- //a-tooltip -->
		            </div>
	            </guide-table-item>
            </guide-table>
        </guide-box-item>

	    <guide-box-item title="Example">
		    <guide-table>
			    <guide-table-item label="Example 1">
				    <div>

					    <div class="a-tooltip right--middle theme--dark dark--gray nowrap">
						    <div class="a-tooltip__label">발행전 미리보기</div>
					    </div><!-- //a-tooltip -->

				    </div>
				    <div>

					    <div class="a-tooltip right--middle theme--dark dark--gray">
						    <div class="a-tooltip__label">
							    <span class="a-color-point-1-1">걱정하지 마세요.</span><br>
							    회의록은 자동 저장 되어<br>
							    언제든지 다시 작성 할 수 있습니다
						    </div>
					    </div><!-- //a-tooltip -->

				    </div>
				    <div>
					    <div class="a-tooltip right--middle theme--dark dark--gray nowrap">
						    <div class="a-tooltip__label">
							    <span class="a-color-point-3-1">저장한 내용이 전부 삭제됩니다</span>
						    </div>
					    </div><!-- //a-tooltip -->
				    </div>
			    </guide-table-item>
		    </guide-table>
	    </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-tooltip',
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
