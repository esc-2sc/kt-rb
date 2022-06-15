<template>
    <guide-box title="Paging" desc="Paging" :to="$options.name">
        <guide-box-item title="Default">
            <guide-table>
                <guide-table-item label="Default">
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <div class="a-paging__nums">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                            <div class="a-paging__func next">
                                <button class="btn-next"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <div class="a-paging__count">
                                <span><em>1</em> / 20</span>
                            </div>
                            <div class="a-paging__func next">
                                <button class="btn-next"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <vx-combobox class="a-paging__combobox inline"
                                         content-class="a-paging__combobox-dropdown"
                                         :items="pagingComboboxData"
                                         v-model="pagingComboboxDataSelectedValue"
                                         :row-count="getMaxRowCount()"
                                         label-field="label"
                                         value-field="value"></vx-combobox>
                            <div class="a-paging__func next">
                                <button class="btn-next"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                </guide-table-item>
                <guide-table-item label="Hover / Active">
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <div class="a-paging__nums">
                                <span>1</span>
                                <span class="selected">2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                            <div class="a-paging__func next">
                                <button class="btn-next"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <div class="a-paging__count">
                                <span><em>1</em> / 20</span>
                            </div>
                            <div class="a-paging__func next">
                                <button class="btn-next"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <vx-combobox class="a-paging__combobox inline"
                                         content-class="a-paging__combobox-dropdown"
                                         :items="pagingComboboxData"
                                         v-model="pagingComboboxDataSelectedValue"
                                         :row-count="getMaxRowCount()"
                                         label-field="label"
                                         value-field="value"></vx-combobox>
                            <div class="a-paging__func next">
                                <button class="btn-next"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev" disabled><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <div class="a-paging__nums">
                                <span>1</span>
                                <span class="selected">2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                            <div class="a-paging__func next">
                                <button class="btn-next" disabled><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev" disabled><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <div class="a-paging__count">
                                <span><em>1</em> / 1</span>
                            </div>
                            <div class="a-paging__func next">
                                <button class="btn-next" disabled><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                    <div>

                        <div class="a-paging">
                            <div class="a-paging__func prev">
                                <button class="btn-prev" disabled><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
                            </div>
                            <vx-combobox class="a-paging__combobox inline" disabled
                                         content-class="a-paging__combobox-dropdown"
                                         :items="pagingComboboxData"
                                         v-model="pagingComboboxDataSelectedValue"
                                         :row-count="getMaxRowCount()"
                                         label-field="label"
                                         value-field="value"></vx-combobox>
                            <div class="a-paging__func next">
                                <button class="btn-next" disabled><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
                            </div>
                        </div><!-- //a-paging -->

                    </div>
                </guide-table-item>
            </guide-table>

        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-paging',
    components: {
    },
	data() {
		return {
            pagingComboboxDataSelectedValue: null,
		    pagingComboboxData: [
                {label: '1', value: '' },
                {label: '2', value: '' },
                {label: '3', value: '' },
                {label: '4', value: '' },
                {label: '5', value: '' },
                {label: '999', value: '' },
            ]
        };
	},
    mounted() {
        this.pagingComboboxDataSelectedValue = this.pagingComboboxData[0];
    },
    methods: {
        getMaxRowCount(rowCount=5) {
            const maxCountValue = 5;
            return Math.min(rowCount, maxCountValue);
        }
	},
};
</script>
<style scoped>
</style>
