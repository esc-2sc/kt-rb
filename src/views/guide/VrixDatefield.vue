<template>
    <guide-box title="VRIX - Datefield" desc="default" :to="$options.name">
        <guide-box-item title="Default (line, right, readonly, disabled)">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <vx-date-field class="a-input-date"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택">
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택">
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택">
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택">
                        </vx-date-field>
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <vx-date-field class="a-input-date"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate">
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate">
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate">
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate">
                        </vx-date-field>
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <vx-date-field class="a-input-date"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" readonly>
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" readonly>
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" readonly>
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" readonly>
                        </vx-date-field>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <vx-date-field class="a-input-date"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" disabled>
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" disabled>
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" disabled>
                        </vx-date-field>
                    </div>
                    <div>
                        <vx-date-field class="a-input-date line right"
                                       content-class="theme--date-picker-default"
                                       placeholder="날짜선택"
                                       v-model="sampleDate" disabled>
                        </vx-date-field>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-vrix-date-field',
    components: {
    },
	data() {
		return {
            sampleDate: new Date()
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
