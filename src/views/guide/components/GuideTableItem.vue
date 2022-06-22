<template>
    <div class="g-table-item">
        <div class="g-table-item__label" v-html="label"></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'guide-table-item',
    props: {
        label: String,
    },
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
.g-table-item{
    display: flex;
}
.g-table-item > *{
    flex:1;
}
.g-table-item > * + *{
    margin-left:50px;
}
.g-table-item > *[none]{
    flex:none;
}
.g-table-item > *[right]{
    text-align: right;
}
.g-table-item > .g-table-item__label{
    flex:none;
    width:150px;
    align-self: center;
}
.g-table-item > .g-table-item__label + *{
    margin-left:0;
}
</style>
<style>
.g-table-item__label .g-label{
    display: flex;
    align-items: center;
    height:40px;
}
</style>
