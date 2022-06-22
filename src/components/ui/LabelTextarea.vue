<template>
    <label-box class="a-label-textarea"
         :class="{'state--focus' : isTextareaFocusValue,  'state--value': value || typing}"
         :label="label"
         :readonly="readonly"
         :disabled="disabled">
        <textarea ref="labelTextarea"
                  v-model="textareaValue"
                  @focus="onFocusEvent"
                  @blur="onBlurEvent"></textarea>
    </label-box>
</template>

<script>
export default {
    name: 'label-textarea',
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
        value: ''
    },
	data() {
		return {
            textareaValue: '',
            isTextareaFocusValue: false
        };
	},
    computed: {
        typing() {
            return !(this.textareaValue === null || this.textareaValue === '' || this.textareaValue === undefined);
        },
    },
    mounted() {
        this.textareaValue = this.value;
    },
    methods: {
        onBoxFocus() {
            this.$refs.labelTextarea.focus();
        },
        onFocusEvent() {
            this.isTextareaFocusValue = true
        },
        onBlurEvent() {
            // this.isTextareaFocusValue = (this.textareaValue == '') ? false : true
            this.isTextareaFocusValue = false;
        }
	},
};
</script>
<style scoped>
</style>
