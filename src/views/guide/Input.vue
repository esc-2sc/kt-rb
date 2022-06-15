<template>
    <guide-box title="Input" desc="Input, Search Input, Label Input, One Input, Label Autocomplete" :to="$options.name">
        <guide-box-item title="Input">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <input type="text" class="a-input" placeholder="Input">
                    </div>
                    <div>
                        <input type="text" class="a-input line" placeholder="Input">
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <input type="text" class="a-input state--focus" placeholder="Input">
                    </div>
                    <div>
                        <input type="text" class="a-input line state--focus" placeholder="Input">
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <input type="text" class="a-input" placeholder="Input" value="Value">
                    </div>
                    <div>
                        <input type="text" class="a-input line" placeholder="Input" value="Value">
                    </div>
                </guide-table-item>
                <guide-table-item label="Error">
                    <div>
                        <input type="text" class="a-input state--error" placeholder="Input" value="Error">
                    </div>
                    <div>
                        <input type="text" class="a-input line state--error" placeholder="Input" value="Error">
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <input type="text" class="a-input" placeholder="Input" value="Readonly" readonly>
                    </div>
                    <div>
                        <input type="text" class="a-input line" placeholder="Input" value="Readonly" readonly>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <input type="text" class="a-input" placeholder="Placeholder" value="" disabled>
                        <br><br>
                        <input type="text" class="a-input" placeholder="Disabled" value="Disabled" disabled>
                    </div>
                    <div>
                        <input type="text" class="a-input line" placeholder="Placeholder" value="" disabled>
                        <br><br>
                        <input type="text" class="a-input line" placeholder="Disabled" value="Disabled" disabled>
                    </div>
                </guide-table-item>
                <guide-table-item label="Size : full">
                    <div>
                        <input type="text" class="a-input size--full" placeholder="size--full" value="">
                    </div>
                    <div>
                        <input type="text" class="a-input line size--full" placeholder="size--full" value="">
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Search Input">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <div class="a-input-search">
                            <input type="text" placeholder="Search" value="">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                    <div>
                        <div class="a-input-search line">
                            <input type="text" placeholder="Search" value="">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <div class="a-input-search state--focus">
                            <input type="text" placeholder="Search" value="">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                    <div>
                        <div class="a-input-search line state--focus">
                            <input type="text" placeholder="Search" value="">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <div class="a-input-search">
                            <input type="text" placeholder="Search" value="Value">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                    <div>
                        <div class="a-input-search line">
                            <input type="text" placeholder="Search" value="Value">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Error">
                    <div>
                        <div class="a-input-search state--error">
                            <input type="text" placeholder="Search" value="Error">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                    <div>
                        <div class="a-input-search line state--error">
                            <input type="text" placeholder="Search" value="Error">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <div class="a-input-search">
                            <input type="text" placeholder="Search" value="Readonly" readonly>
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                    <div>
                        <div class="a-input-search line">
                            <input type="text" placeholder="Search" value="Readonly" readonly>
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <div class="a-input-search">
                            <input type="text" placeholder="Search" value="" disabled>
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                        <br><br>
                        <div class="a-input-search">
                            <input type="text" placeholder="Search" value="Disabled" disabled>
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                    <div>
                        <div class="a-input-search line">
                            <input type="text" placeholder="Search" value="" disabled>
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                        <br><br>
                        <div class="a-input-search line">
                            <input type="text" placeholder="Search" value="Disabled" disabled>
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                </guide-table-item>
                <guide-table-item label="Size : full">
                    <div>
                        <div class="a-input-search size--full">
                            <input type="text" placeholder="Search" value="size--full">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                    <div>
                        <div class="a-input-search line size--full">
                            <input type="text" placeholder="Search" value="size--full">
                            <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                        </div><!-- //a-input-search -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Label Input">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <label-input label="텍스트"></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line"></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <label-input label="텍스트" class="state--focus"></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line state--focus"></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <label-input label="텍스트" value="Value"></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line" value="Value"></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="Error">
                    <div>
                        <label-input label="텍스트" class="state--error" value="Error"></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line state--error" value="Error"></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <label-input label="텍스트" value="Readonly" readonly></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line" value="Readonly" readonly></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <label-input label="텍스트" value="" disabled></label-input>
                        <br><br>
                        <label-input label="텍스트" value="Disabled" disabled></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line" value="" disabled></label-input>
                        <br><br>
                        <label-input label="텍스트" class="line" value="Disabled" disabled></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="Size : full">
                    <div>
                        <label-input label="size--full" class="size--full" value=""></label-input>
                    </div>
                    <div>
                        <label-input label="size--full" class="line size--full" value=""></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="mini">
                    <div>
                        <label-input label="텍스트" class="mini" value=""></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="mini" value="Google"></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line mini" value=""></label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line mini" value="Google"></label-input>
                    </div>
                </guide-table-item>
                <guide-table-item label="mini + button">
                    <div>
                        <label-input label="텍스트" class="mini" value="">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="mini" value="Google">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line mini" value="">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-input>
                    </div>
                    <div>
                        <label-input label="텍스트" class="line mini" value="Google">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-input>
                    </div>
                </guide-table-item>
            </guide-table>

        </guide-box-item>

        <guide-box-item title="One Input">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                    </div>
                    <div>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <input type="number" class="a-input one state--focus" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one state--focus" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one state--focus" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                    </div>
                    <div>
                        <input type="number" class="a-input one line state--focus" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line state--focus" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line state--focus" min="0" max="9" maxlength="1" @input="maxLengthCheck($event)">
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)">
                    </div>
                    <div>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)">
                    </div>
                </guide-table-item>
                <guide-table-item label="Error">
                    <div>
                        <input type="number" class="a-input one state--error" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one state--error" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one state--error" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)">
                    </div>
                    <div>
                        <input type="number" class="a-input one line state--error" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line state--error" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)">
                        <input type="number" class="a-input one line state--error" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)">
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)" readonly>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)" readonly>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)" readonly>
                    </div>
                    <div>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)" readonly>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)" readonly>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)" readonly>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" disabled>
                        <br><br>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)" disabled>
                    </div>
                    <div>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)" disabled>
                        <br><br>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="1" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="2" @input="maxLengthCheck($event)" disabled>
                        <input type="number" class="a-input one line" min="0" max="9" maxlength="1" value="3" @input="maxLengthCheck($event)" disabled>
                    </div>
                </guide-table-item>
                <guide-table-item label="Size : full">
                    <div>
                        <input type="number" class="a-input one size--full" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)">
                    </div>
                    <div>
                        <input type="number" class="a-input one line size--full" min="0" max="9" maxlength="1" value="" @input="maxLengthCheck($event)">
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

	    <guide-box-item title="Label Autocomplete">
		    <guide-table>
			    <guide-table-item label="Autocomplete">
				    <div>

					    <label-input label="참석자" class="size--full line mini" value="">
						    <div class="a-list-dropdown nowrap" slot="autocomplete">
							    <div class="a-list-dropdown__header">
								    <div class="a-list-dropdown__title">최근 참석자</div>
							    </div>
							    <div class="a-list-dropdown__body">
								    <div class="a-list-dropdown__item" v-for="(item, index) in 5" :key="`item-${index}`">
									    <div class="a-list-dropdown__before">
										    <div class="a-user">
											    <span class="a-user__label">AB</span>
										    </div>
									    </div>
									    <div class="a-list-dropdown__label">
										    <span class="label">James CEO</span>
										    <span class="team">해외총괄</span>
									    </div>
								    </div>
							    </div>
						    </div>
					    </label-input>

				    </div>
				    <div>

					    <label-input label="회의장소" class="size--full line mini" value="">
						    <div class="a-list-dropdown nowrap" slot="autocomplete">
							    <div class="a-list-dropdown__header">
								    <div class="a-list-dropdown__title">최근 회의장소</div>
							    </div>
							    <div class="a-list-dropdown__body">
								    <div class="a-list-dropdown__item" v-for="(item, index) in 5" :key="`item-${index}`">
									    <div class="a-list-dropdown__label">{{5-index}}층 임원회의실</div>
								    </div>
							    </div>
						    </div>
					    </label-input>

				    </div>
			    </guide-table-item>
		    </guide-table>
	    </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-input',
    components: {
    },
	data() {
		return {
        };
	},
    mounted() {
    },
    methods: {
        maxLengthCheck(event) {
            const eTarget = event.target;
            if (eTarget.value.length > eTarget.maxLength){
                eTarget.value = eTarget.value.slice(0, eTarget.maxLength);
            }
        }
	},
};
</script>
<style scoped>
.a-input.one + .a-input.one{
    margin-left:20px;
}
</style>
