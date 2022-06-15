<template>
    <guide-box title="Progress" desc="a-progress-1" :to="$options.name">

        <guide-box-item title="a-progress-1">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <div class="a-progress-1">
                            <div class="a-progress__bar" style="width:0%">
                                <span class="a-progress__label">0번</span>
                            </div>
                        </div><!-- //a-progress-1 -->

                    </div>

                    <div>

                        <div class="a-progress-1">
                            <div class="a-progress__bar" style="width:50%">
                                <span class="a-progress__label">0번</span>
                            </div>
                        </div><!-- //a-progress-1 -->

                    </div>
                    <div>

                        <div class="a-progress-1">
                            <div class="a-progress__bar" style="width:100%">
                                <span class="a-progress__label">00번</span>
                            </div>
                        </div><!-- //a-progress-1 -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

    </guide-box>
</template>

<script>
export default {
    name: 'guide-progress',
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
