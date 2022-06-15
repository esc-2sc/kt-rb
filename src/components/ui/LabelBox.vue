<template>
    <div class="a-label-box" tabindex="0" @focus="onFocusEvent" @blur="onBlurEvent">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'label-box',
    components: {
    },
	data() {
		return {
        };
	},
    mounted() {
    },
    methods: {
        onFocusEvent() {
            this.$emit('focus');
        },
        onBlurEvent() {
            this.$emit('blur');
        }
	},
};
</script>
<style scoped>
</style>
