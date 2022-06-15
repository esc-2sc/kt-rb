<template>
    <guide-box title="Etc" desc="Badge, Chips" :to="$options.name">
        <guide-box-item title="Badge: a-badge-1, a-badge-2, a-badge-chip">
            <guide-table>
	            <guide-table-item label="a-badge-1 <br>size--16">
		            <div>
			            <span class="a-badge-1 size--16">텍</span>
		            </div>
		            <div>
			            <span class="a-badge-1 a-color-bg-2 size--16">텍</span>
		            </div>
		            <div>
			            <span class="a-badge-1 a-bg-point-1 size--16">텍스</span>
		            </div>
		            <div>
			            <span class="a-badge-1 a-bg-point-2 size--16">텍스트</span>
		            </div>
		            <div>
			            <span class="a-badge-1 a-bg-point-3 size--16">텍스트트</span>
		            </div>
		            <div>
			            <span class="a-badge-1 a-bg-point-4 size--16">텍스트트트</span>
		            </div>
	            </guide-table-item>

                <guide-table-item label="a-badge-1 <br>auto width (Default)">
                    <div>
                        <span class="a-badge-1">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-color-bg-2">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-bg-point-1">텍스</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-bg-point-2">텍스트</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-bg-point-3">텍스트트</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-bg-point-4">텍스트트트</span>
                    </div>
                </guide-table-item>
                <guide-table-item label="a-badge-1<br>fix width">
                    <div>
                        <span class="a-badge-1" style="width:70px">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-color-bg-2" style="width:70px">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-bg-point-1" style="width:70px">텍스</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-bg-point-2" style="width:70px">텍스트</span>
                    </div>
                    <div>
                        <span class="a-badge-1 a-bg-point-3" style="width:70px">텍스트트</span>
                    </div>
                    <div>
                        <span class="a-badge-1 ellipsis a-bg-point-4" style="width:70px">텍스트트트</span>
                    </div>
                </guide-table-item>
            </guide-table>

            <br><br>

            <guide-table>
                <guide-table-item label="a-badge-2<br>auto width (Default)">
                    <div>
                        <span class="a-badge-2">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-color-bg-2">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-1">텍스</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-2">텍스트</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-3">텍스트트</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-4">텍스트트트</span>
                    </div>
                </guide-table-item>

                <guide-table-item label="a-badge-2<br>fix width (Default)">
                    <div>
                        <span class="a-badge-2" style="width:70px">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-color-bg-2" style="width:70px">텍</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-1" style="width:70px">텍스</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-2" style="width:70px">텍스트</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-3" style="width:70px">텍스트트</span>
                    </div>
                    <div>
                        <span class="a-badge-2 a-bg-point-4" style="width:70px">텍스트트트</span>
                    </div>
                </guide-table-item>

                <guide-table-item label="a-badge-chip">
                    <div>
                        <span class="a-badge-chip">텍스트</span>
                        <span class="a-badge-chip">텍스트</span>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-etc',
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
