<template>
    <guide-box title="VRIX - Combobox" desc="vx-combobox" :to="$options.name">
        <guide-box-item title="vx-combobox - Full(Default) / Inline">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <vx-combobox placeholder="Placeholder"
                                     :items="comboboxData1"
                                     :row-count="getMaxRowCount(comboboxData1)"
                                     label-field="label"
                                     value-field="value"></vx-combobox>
                    </div>
                    <div>
                        <vx-combobox class="inline" placeholder="Placeholder"
                                     :items="comboboxData1"
                                     :row-count="getMaxRowCount(comboboxData1)"
                                     label-field="label"
                                     value-field="value"></vx-combobox>
                    </div>
                </guide-table-item>
                <guide-table-item label="Selected / Disabled">
                    <div>
                        <vx-combobox placeholder="Placeholder"
                                     :items="comboboxData1"
                                     v-model="comboboxData1SelectedValue"
                                     :row-count="getMaxRowCount(comboboxData1)"
                                     label-field="label"
                                     value-field="value"></vx-combobox>
                    </div>
                    <div>
                        <vx-combobox class="inline" placeholder="Placeholder"
                                     :items="comboboxData1"
                                     v-model="comboboxData1SelectedValue"
                                     :row-count="getMaxRowCount(comboboxData1)"
                                     label-field="label"
                                     value-field="value"></vx-combobox>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <vx-combobox placeholder="Placeholder" disabled
                                     :items="comboboxData1"
                                     :row-count="getMaxRowCount(comboboxData1)"
                                     label-field="label"
                                     value-field="value"></vx-combobox>
                    </div>
                    <div>
                        <vx-combobox class="inline" placeholder="Placeholder" disabled
                                     :items="comboboxData1"
                                     :row-count="getMaxRowCount(comboboxData1)"
                                     label-field="label"
                                     value-field="value"></vx-combobox>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-vrix-combobox',
    components: {
    },
	data() {
		return {
            comboboxData1SelectedValue: null,
		    comboboxData1: [
                {label: 'Option 1', value: '' },
                {label: 'Option 2', value: '' },
                {label: 'Option 3', value: '' },
                {label: 'Option 4', value: '' },
                {label: 'Option 5', value: '' },
            ],
        };
	},
    mounted() {
        this.comboboxData1SelectedValue = this.comboboxData1[1];
    },
    methods: {
        getMaxRowCount(items = [],maxCount=5) {
            return Math.min(items.length, maxCount);
        }
	},
};
</script>
<style scoped>
</style>
