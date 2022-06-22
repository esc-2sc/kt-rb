<template>
    <guide-box title="Select" desc="Select" :to="$options.name">
        <guide-box-item title="Default">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <select class="a-select">
                            <option>선택</option>
                            <option value="1">Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3">Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select">
                            <option>선택</option>
                            <optgroup label="Group Label 1">
                                <option value="1">Menu option 1</option>
                                <option value="2">Menu option 2</option>
                                <option value="3">Menu option 3</option>
                            </optgroup>
                            <optgroup label="Group Label 2">
                                <option value="1">Menu option 1</option>
                                <option value="2">Menu option 2</option>
                                <option value="3">Menu option 3</option>
                            </optgroup>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select" multiple>
                            <option>선택</option>
                            <option value="1">Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3">Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select auto" multiple>
                            <option>선택</option>
                            <option value="1">Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3">Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Selected / Disabled">
                    <div>
                        <select class="a-select">
                            <option>선택</option>
                            <option value="1">Menu option 1</option>
                            <option value="2" selected>Menu option 2</option>
                            <option value="3" disabled>Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select">
                            <option>선택</option>
                            <optgroup label="Group Label 1">
                                <option value="1" selected>Menu option 1</option>
                                <option value="2">Menu option 2</option>
                                <option value="3">Menu option 3</option>
                            </optgroup>
                            <optgroup label="Group Label 2">
                                <option value="1" disabled>Menu option 1</option>
                                <option value="2">Menu option 2</option>
                                <option value="3">Menu option 3</option>
                            </optgroup>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select" multiple>
                            <option>선택</option>
                            <option value="1" selected>Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select auto" multiple>
                            <option>선택</option>
                            <option value="1" selected>Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                            <option value="3">Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <select class="a-select" disabled>
                            <option>선택</option>
                            <option value="1">Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3" disabled>Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select" disabled>
                            <option>선택</option>
                            <optgroup label="Group Label 1">
                                <option value="1" selected>Menu option 1</option>
                                <option value="2">Menu option 2</option>
                                <option value="3">Menu option 3</option>
                            </optgroup>
                            <optgroup label="Group Label 2">
                                <option value="1" disabled>Menu option 1</option>
                                <option value="2">Menu option 2</option>
                                <option value="3">Menu option 3</option>
                            </optgroup>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select" multiple disabled>
                            <option>선택</option>
                            <option value="1">Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3">Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                    <div>
                        <select class="a-select auto" multiple disabled>
                            <option>선택</option>
                            <option value="1">Menu option 1</option>
                            <option value="2">Menu option 2</option>
                            <option value="3">Menu option 3</option>
                        </select><!-- //a-select -->
                    </div>
                </guide-table-item>
            </guide-table>

        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-select',
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
