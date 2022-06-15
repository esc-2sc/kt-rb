<template>
    <guide-box title="Component - ComPaging" desc="com-paging" :to="$options.name">
        <guide-box-item title="com-paging : <span class='a-text-4 a-color-label-black'>v-model, page-count, page-range, mode:0, 1, 2</span>">
            <guide-table>
                <guide-table-item label="Default">
                    <div>
                        <com-paging v-model="pageNum1"
                                    :page-count="pageCount"
                                    :page-range="5"></com-paging>
                    </div>
                    <div>
                        <com-paging v-model="pageNum2"
                                    :mode="1"
                                    :page-count="pageCount"
                                    :page-range="1"></com-paging>
                    </div>
                    <div>
                        <com-paging v-model="pageNum3"
                                    :mode="2"
                                    :page-count="pageCount"
                                    :page-range="1"></com-paging>
                    </div>
                </guide-table-item>
                <guide-table-item label="More">
                    <div>
                        <div class="a-paging-more">
                            <button class="a-btn-type-1 line">
                                <img src="/resources/images/svg/chevron-down-24.svg" class="icon" alt="">
                                <span class="label">더보기</span>
                            </button>
                        </div><!-- //a-paging-more -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-com-paging',
    components: {
    },
	data() {
		return {
            pageNum1: 1,
            pageNum2: 1,
            pageNum3: 1,
            pageCount: 20,
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
