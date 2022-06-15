<template>
    <label-box class="a-label-input"
               :class="{'state--focus': isInputFocusValue, 'state--value': value || typing,'has--control': slotCountButton }"
               :label="label"
               :readonly="readonly"
               :disabled="disabled"
               @focus="onBoxFocus">
        <input ref="labelInput" :type="type"
               v-model="value"
               :readonly="readonly || combobox"
               :disabled="disabled"
               @focus="onFocusEvent"
               @blur="onBlurEvent">
        <div class="a-label__func" v-if="slotCountButton">
            <slot name="button"></slot>
        </div>
	    <div class="a-label__autocomplete" v-if="slotCountAutocomplete">
		    <slot name="autocomplete"></slot>
	    </div>
    </label-box>
</template>

<script>
export default {
    name: 'label-input',
    props: {
        label: {
            type: String,
            default: ''
        },
        readonly: {
            type: Boolean,
        },
        disabled: {
            type: Boolean
        },
        type: {
            type: String,
            default: 'text'
        },
        combobox: {
            type: Boolean,
            default: false
        },
        value: ''
    },
	data() {
		return {
            inputValue: '',
            isInputFocusValue: false,
            slotCountButton: 0,
            slotCountAutocomplete: 0,
        };
	},
    computed: {
        typing() {
            return !(this.value === null || this.value === ''  || this.value === undefined);
        },
    },
    mounted() {
        this.checkSlotCount();
        // this.inputValue = this.value;
    },
    methods: {
        checkSlotCount() {
            for (let prop in this.$slots) {
                if (prop.indexOf('button') === 0) {
                    this.slotCountButton++;
                }
	            if (prop.indexOf('autocomplete') === 0) {
		            this.slotCountAutocomplete++;
	            }
            }
        },
        onBoxFocus() {
            this.$refs.labelInput.focus();
        },
        onFocusEvent() {
            this.isInputFocusValue = true
        },
        onBlurEvent() {
            // this.isInputFocusValue = (this.inputValue == '') ? false : true;
            this.isInputFocusValue = false;
        }
	},
};
</script>
<style scoped>
</style>
