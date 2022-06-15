<template>
    <label-box class="a-label-tab size--full clear"
               :class="{'state--focus': isFocus, 'state--value':slotCountDefault, 'has--control': slotCountButton}"
               :label="label"
               :readonly="readonly"
               :disabled="disabled"
               @focus="onBoxFocus"
               @blur="onBoxBlur">
        <slot></slot>
        <div class="a-label__func" v-if="slotCountButton">
            <slot name="button"></slot>
        </div>
    </label-box>
</template>

<script>
export default {
    name: 'label-tab',
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
    },
    data() {
        return {
            slotCountDefault: 0,
            slotCountButton: 0,
            isFocus: false
        };
    },
    computed: {
    },
    mounted() {
        this.checkSlotCount();
    },
    methods: {
        checkSlotCount() {
            for (let prop in this.$slots) {
                if (prop.indexOf('default') === 0) {
                    this.slotCountDefault++;
                }
                if (prop.indexOf('button') === 0) {
                    this.slotCountButton++;
                }
            }
        },
        onBoxFocus() {
            this.isFocus = true;
        },
        onBoxBlur() {
            this.isFocus = false;
        },
    },
};
</script>
<style scoped>
</style>
