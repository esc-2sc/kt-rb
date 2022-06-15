<template>
    <div class="g-table">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'guide-table',
    components: {
    },
	data() {
		return {
        };
	},
    computed: {
    },
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
.g-table-item + .g-table-item{
    margin-top:30px;
}
</style>
