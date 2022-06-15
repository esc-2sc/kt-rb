<template>
    <guide-box title="Grid" desc="a-grid-1" :to="$options.name">
        <guide-box-item title="a-grid-1">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <div class="a-grid-1">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                텍스트
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                    <div>

                        <div class="a-grid-1 line">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                텍스트
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                    <div>

                        <div class="a-grid-1">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                <input type="text" class="a-input" placeholder="Input">
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                </guide-table-item>
                <guide-table-item label="size--label-160 ">
                    <div>

                        <div class="a-grid-1 size--label-160">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                텍스트
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                    <div>

                        <div class="a-grid-1 line size--label-160">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                텍스트
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                    <div>

                        <div class="a-grid-1 size--label-160">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                <input type="text" class="a-input" placeholder="Input">
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                </guide-table-item>
                <guide-table-item label="size--label-192">
                    <div>

                        <div class="a-grid-1 size--label-192">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                텍스트
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                    <div>

                        <div class="a-grid-1 line size--label-192">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                텍스트
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                    <div>

                        <div class="a-grid-1 size--label-192">
                            <div class="a-grid__label">제목</div>
                            <div class="a-grid__content">
                                <input type="text" class="a-input" placeholder="Input">
                            </div>
                        </div><!-- //a-grid-1 -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-grid',
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
.a-grid__label{background-color:rgba(255,0,0,.1)}
</style>
