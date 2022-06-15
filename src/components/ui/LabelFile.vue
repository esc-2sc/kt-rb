<template>
    <label-box class="a-label-file"
               :class="{'state--focus': isFocus, 'state--value': items.length !== 0,'has--control': slotCountButton}"
               :label="label"
               :readonly="readonly"
               :disabled="disabled"
               @focus="onFocus"
               @blur="onBlur">
        <div class="a-label-file__list">
            <slot></slot>
        </div><!-- //a-label-file__list -->
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
        // value: ''
    },
    data() {
        return {
            slotCountButton: 0,
            isFocus: false
        };
    },
    mounted() {
        this.checkSlotCount();
    },
    methods: {
        checkSlotCount() {
            for (let prop in this.$slots) {
                if (prop.indexOf('button') === 0) {
                    this.slotCountButton++;
                }
            }
        },
        onFocus() {
            this.isFocus = true;
        },
        onBlur() {
            this.isFocus = false;
        },
    },
};
</script>
<style scoped>
</style>
