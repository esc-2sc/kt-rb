<template>
    <guide-box title="Textarea" desc="Textarea, Label Textarea" :to="$options.name">
        <guide-box-item title="Textarea">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <textarea class="a-textarea" placeholder="Textarea"></textarea>
                    </div>
                    <div>
                        <textarea class="a-textarea line" placeholder="Textarea"></textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <textarea class="a-textarea state--focus" placeholder="Textarea"></textarea>
                    </div>
                    <div>
                        <textarea class="a-textarea line state--focus" placeholder="Textarea"></textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <textarea class="a-textarea" placeholder="Textarea">Value</textarea>
                    </div>
                    <div>
                        <textarea class="a-textarea line" placeholder="Textarea">Value</textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Error">
                    <div>
                        <textarea class="a-textarea state--error" placeholder="Textarea"></textarea>
                    </div>
                    <div>
                        <textarea class="a-textarea line state--error" placeholder="Textarea"></textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <textarea class="a-textarea" placeholder="Textarea" readonly>Readonly</textarea>
                    </div>
                    <div>
                        <textarea class="a-textarea line" placeholder="Textarea" readonly>Readonly</textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <textarea class="a-textarea" placeholder="Textarea" disabled></textarea>
                        <br><br>
                        <textarea class="a-textarea" placeholder="Textarea" disabled>Disabled</textarea>
                    </div>
                    <div>
                        <textarea class="a-textarea line" placeholder="Textarea" disabled></textarea>
                        <br><br>
                        <textarea class="a-textarea line" placeholder="Textarea" disabled>Disabled</textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Size : full">
                    <div>
                        <textarea class="a-textarea size--full" placeholder="Textarea">size--full</textarea>
                    </div>
                    <div>
                        <textarea class="a-textarea line size--full" placeholder="Textarea">size--full</textarea>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Label Textarea">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <label-textarea label="텍스트"></label-textarea>
                    </div>
                    <div>
                        <label-textarea label="텍스트" class="line"></label-textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <label-textarea label="텍스트" class="state--focus"></label-textarea>
                    </div>
                    <div>
                        <label-textarea label="텍스트" class="line state--focus"></label-textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <label-textarea label="텍스트" value="Value"></label-textarea>
                    </div>
                    <div>
                        <label-textarea label="텍스트" class="line" value="Value"></label-textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Error">
                    <div>
                        <label-textarea label="텍스트" class="state--error" value="Error"></label-textarea>
                    </div>
                    <div>
                        <label-textarea label="텍스트" class="line state--error" value="Error"></label-textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <label-textarea label="Readonly" value="" readonly></label-textarea>
                    </div>
                    <div>
                        <label-textarea label="Readonly" class="line" value="Readonly" readonly></label-textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <label-textarea label="Textarea" value="" disabled></label-textarea>
                        <br><br>
                        <label-textarea label="Textarea" value="Disabled" disabled></label-textarea>
                    </div>
                    <div>
                        <label-textarea label="Textarea" class="line" value="" disabled></label-textarea>
                        <br><br>
                        <label-textarea label="Textarea" class="line" value="Disabled" disabled></label-textarea>
                    </div>
                </guide-table-item>
                <guide-table-item label="Size : full">
                    <div>
                        <label-textarea label="size--full" class="size--full" value=""></label-textarea>
                    </div>
                    <div>
                        <label-textarea label="size--full" class="line size--full" value=""></label-textarea>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-textarea',
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
