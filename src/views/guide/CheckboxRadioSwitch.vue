<template>
    <guide-box title="Checkbox, Radio" desc="Checkbox, Radio, Switch" :to="$options.name">
        <guide-box-item title="Checkbox">
            <guide-table>
                <guide-table-item label="Default">
                    <div>
                        <label class="a-checkbox">
                            <input type="checkbox">
                            <span class="label">Checkbox</span>
                        </label><!-- //a-checkbox -->
                    </div>
                    <div none>
                        <label class="a-checkbox single">
                            <input type="checkbox">
                            <span class="label"></span>
                        </label><!-- //a-checkbox -->
                    </div>
                    <div right>
                        <label class="a-checkbox right">
                            <input type="checkbox">
                            <span class="label">Checkbox Right</span>
                        </label><!-- //a-checkbox -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Hover">
                    <div>
                        <label class="a-checkbox state--hover">
                            <input type="checkbox">
                            <span class="label">Checkbox</span>
                        </label><!-- //a-checkbox -->
                    </div>
                    <div none>
                        <label class="a-checkbox single state--hover">
                            <input type="checkbox">
                            <span class="label"></span>
                        </label><!-- //a-checkbox -->
                    </div>
                    <div right>
                        <label class="a-checkbox right state--hover">
                            <input type="checkbox">
                            <span class="label">Checkbox Right</span>
                        </label><!-- //a-checkbox -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <label class="a-checkbox">
                            <input type="checkbox" checked>
                            <span class="label">Checkbox</span>
                        </label><!-- //a-checkbox -->
                    </div>
                    <div none>
                        <label class="a-checkbox single">
                            <input type="checkbox" checked>
                            <span class="label"></span>
                        </label><!-- //a-checkbox -->
                    </div>
                    <div right>
                        <label class="a-checkbox right">
                            <input type="checkbox" checked>
                            <span class="label">Checkbox Right</span>
                        </label><!-- //a-checkbox -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <label class="a-checkbox">
                            <input type="checkbox" disabled>
                            <span class="label">Checkbox</span>
                        </label><!-- //a-checkbox -->
                        <br><br>
                        <label class="a-checkbox">
                            <input type="checkbox" checked disabled>
                            <span class="label">Checkbox</span>
                        </label><!-- //a-checkbox -->
                    </div>

                    <div none>
                        <label class="a-checkbox single">
                            <input type="checkbox" disabled>
                            <span class="label"></span>
                        </label><!-- //a-checkbox -->
                        <br><br>
                        <label class="a-checkbox single">
                            <input type="checkbox" checked disabled>
                            <span class="label"></span>
                        </label><!-- //a-checkbox -->
                    </div>
                    <div right>
                        <label class="a-checkbox right">
                            <input type="checkbox" disabled>
                            <span class="label">Checkbox Right</span>
                        </label><!-- //a-checkbox -->
                        <br><br>
                        <label class="a-checkbox right">
                            <input type="checkbox" checked disabled>
                            <span class="label">Checkbox Right</span>
                        </label><!-- //a-checkbox -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>


        <guide-box-item title="Radio">
            <guide-table>
                <guide-table-item label="Default">
                    <div>
                        <label class="a-radio">
                            <input type="radio">
                            <span class="label">Radio</span>
                        </label><!-- //a-radio -->
                    </div>
                    <div none>
                        <label class="a-radio single">
                            <input type="radio">
                            <span class="label"></span>
                        </label><!-- //a-radio -->
                    </div>
                    <div right>
                        <label class="a-radio right">
                            <input type="radio">
                            <span class="label">Radio Right</span>
                        </label><!-- //a-radio -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Hover">
                    <div>
                        <label class="a-radio state--hover">
                            <input type="radio">
                            <span class="label">Radio</span>
                        </label><!-- //a-radio -->
                    </div>
                    <div none>
                        <label class="a-radio single state--hover">
                            <input type="radio">
                            <span class="label"></span>
                        </label><!-- //a-radio -->
                    </div>
                    <div right>
                        <label class="a-radio right state--hover">
                            <input type="radio">
                            <span class="label">Radio Right</span>
                        </label><!-- //a-radio -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <label class="a-radio">
                            <input type="radio" checked>
                            <span class="label">Radio</span>
                        </label><!-- //a-radio -->
                    </div>
                    <div none>
                        <label class="a-radio single">
                            <input type="radio" checked>
                            <span class="label"></span>
                        </label><!-- //a-radio -->
                    </div>
                    <div right>
                        <label class="a-radio right">
                            <input type="radio" checked>
                            <span class="label">Radio Right</span>
                        </label><!-- //a-radio -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <label class="a-radio">
                            <input type="radio" disabled>
                            <span class="label">Radio</span>
                        </label><!-- //a-radio -->
                        <br><br>
                        <label class="a-radio">
                            <input type="radio" checked disabled>
                            <span class="label">Radio</span>
                        </label><!-- //a-radio -->
                    </div>

                    <div none>
                        <label class="a-radio single">
                            <input type="radio" disabled>
                            <span class="label"></span>
                        </label><!-- //a-radio -->
                        <br><br>
                        <label class="a-radio single">
                            <input type="radio" checked disabled>
                            <span class="label"></span>
                        </label><!-- //a-radio -->
                    </div>
                    <div right>
                        <label class="a-radio right">
                            <input type="radio" disabled>
                            <span class="label">Radio Right</span>
                        </label><!-- //a-radio -->
                        <br><br>
                        <label class="a-radio right">
                            <input type="radio" checked disabled>
                            <span class="label">Radio Right</span>
                        </label><!-- //a-radio -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>


        <guide-box-item title="Switch">
            <guide-table>
                <guide-table-item label="Default">
                    <div>
                        <label class="a-switch">
                            <input type="checkbox">
                            <span class="icon"></span>
                            <span class="label">Switch</span>
                        </label><!-- //a-switch -->
                    </div>
                    <div none>
                        <label class="a-switch">
                            <input type="checkbox">
                            <span class="icon"></span>
                        </label><!-- //a-switch -->
                    </div>
                    <div right>
                        <label class="a-switch right">
                            <input type="checkbox">
                            <span class="icon"></span>
                            <span class="label">Switch Right</span>
                        </label><!-- //a-switch -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Hover">
                    <div>
                        <label class="a-switch state--hover">
                            <input type="checkbox">
                            <span class="icon"></span>
                            <span class="label">Switch</span>
                        </label><!-- //a-switch -->
                    </div>
                    <div none>
                        <label class="a-switch state--hover">
                            <input type="checkbox">
                            <span class="icon"></span>
                        </label><!-- //a-switch -->
                    </div>
                    <div right>
                        <label class="a-switch right state--hover">
                            <input type="checkbox">
                            <span class="icon"></span>
                            <span class="label">Switch Right</span>
                        </label><!-- //a-switch -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <label class="a-switch">
                            <input type="checkbox" checked>
                            <span class="icon"></span>
                            <span class="label">Switch</span>
                        </label><!-- //a-switch -->
                    </div>
                    <div none>
                        <label class="a-switch">
                            <input type="checkbox" checked>
                            <span class="icon"></span>
                        </label><!-- //a-switch -->
                    </div>
                    <div right>
                        <label class="a-switch right">
                            <input type="checkbox" checked>
                            <span class="icon"></span>
                            <span class="label">Switch Right</span>
                        </label><!-- //a-switch -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <label class="a-switch">
                            <input type="checkbox" disabled>
                            <span class="icon"></span>
                            <span class="label">Switch</span>
                        </label><!-- //a-switch -->
                        <br><br>
                        <label class="a-switch">
                            <input type="checkbox" checked disabled>
                            <span class="icon"></span>
                            <span class="label">Switch</span>
                        </label><!-- //a-switch -->
                    </div>

                    <div none>
                        <label class="a-switch">
                            <input type="checkbox" disabled>
                            <span class="icon"></span>
                        </label><!-- //a-switch -->
                        <br><br>
                        <label class="a-switch">
                            <input type="checkbox" checked disabled>
                            <span class="icon"></span>
                        </label><!-- //a-switch -->
                    </div>

                    <div right>
                        <label class="a-switch right">
                            <input type="checkbox" disabled>
                            <span class="icon"></span>
                            <span class="label">Switch Right</span>
                        </label><!-- //a-switch -->
                        <br><br>
                        <label class="a-switch right">
                            <input type="checkbox" checked disabled>
                            <span class="icon"></span>
                            <span class="label">Switch Right</span>
                        </label><!-- //a-switch -->
                    </div>
                </guide-table-item>
	            <guide-table-item label="size--24">
		            <div>
			            <label class="a-switch size--24">
				            <input type="checkbox">
				            <span class="icon"></span>
				            <span class="label">Switch</span>
			            </label><!-- //a-switch -->
			            <br><br>
			            <label class="a-switch line size--24">
				            <input type="checkbox">
				            <span class="icon"></span>
				            <span class="label">Switch</span>
			            </label><!-- //a-switch -->
			            <br><br>
			            <label class="a-switch size--24">
				            <input type="checkbox" checked>
				            <span class="icon"></span>
				            <span class="label">Switch</span>
			            </label><!-- //a-switch -->
		            </div>

		            <div none>
			            <label class="a-switch size--24">
				            <input type="checkbox">
				            <span class="icon"></span>
			            </label><!-- //a-switch -->
			            <br><br>
			            <label class="a-switch line size--24">
				            <input type="checkbox">
				            <span class="icon"></span>
			            </label><!-- //a-switch -->
			            <br><br>
			            <label class="a-switch size--24">
				            <input type="checkbox" checked>
				            <span class="icon"></span>
			            </label><!-- //a-switch -->
		            </div>

		            <div right>
			            <label class="a-switch right size--24">
				            <input type="checkbox">
				            <span class="icon"></span>
				            <span class="label">Switch Right</span>
			            </label><!-- //a-switch -->
			            <br><br>
			            <label class="a-switch right line size--24">
				            <input type="checkbox">
				            <span class="icon"></span>
				            <span class="label">Switch Right</span>
			            </label><!-- //a-switch -->
			            <br><br>
			            <label class="a-switch right size--24">
				            <input type="checkbox" checked>
				            <span class="icon"></span>
				            <span class="label">Switch Right</span>
			            </label><!-- //a-switch -->
		            </div>
	            </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-check-radio-switch',
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
