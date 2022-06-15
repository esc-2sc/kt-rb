<template>
    <label-box class="a-label-token"
               :class="{'state--focus': isInputFocusValue, 'state--value': value || typing || items.length !== 0, 'has--control': slotCountButton}"
               :label="label"
               :readonly="readonly"
               :disabled="disabled"
               @focus="onBoxFocus"
               @blur="onBoxBlur">

        <div class="a-chip-1 color--bg-1" v-for="(item, index) in items" :key="`item-${item.label}-${index}`">
            <span class="a-chip__label" v-text="item.label"></span>
            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
        </div><!-- //a-chip-1 -->
        <input ref="labelInput" type="text"
               v-model="inputValue"
               :readonly="readonly"
               :disabled="disabled"
               @focus="onInputFocusEvent"
               @blur="onInputBlurEvent">
        <div class="a-label__func" v-if="slotCountButton">
            <slot name="button"></slot>
        </div>
    </label-box>
</template>

<script>
export default {
    name: 'label-token',
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
        items: {
            type: Array,
            default: () => [],
        },
        value: ''
    },
    data() {
        return {
            inputValue: '',
            isInputFocusValue: false,
            slotCountButton: 0,
        };
    },
    computed: {
        typing() {
            return !(this.inputValue === null || this.inputValue === ''  || this.inputValue === undefined);
        },
    },
    mounted() {
        this.checkSlotCount();
        this.inputValue = this.value;
    },
    methods: {
        checkSlotCount() {
            for (let prop in this.$slots) {
                // console.log(prop);
                if (prop.indexOf('button') === 0) {
                    this.slotCountButton++;
                }
            }
        },
        onBoxFocus() {
            this.$refs.labelInput.focus();
        },
        onBoxBlur() {
        },
        onInputFocusEvent() {
            this.isInputFocusValue = true
        },
        onInputBlurEvent() {
            // this.isInputFocusValue = (this.inputValue == '') ? false : true;
            this.isInputFocusValue = false;
        }
    },
};
</script>
<style scoped>
</style>
