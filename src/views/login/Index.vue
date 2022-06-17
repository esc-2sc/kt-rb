<template>
    <div>
        login content
        <input type="text" id="litepicker">
        <vue-rangedate-picker></vue-rangedate-picker>
    </div>
</template>

<script>
import Litepicker from 'litepicker';
import VueRangedatePicker from 'vue-rangedate-picker';
export default {
    name: 'login',
    components: {VueRangedatePicker},
	data() {
		return {};
	},
	methods: {
	},
    mounted() {
    const picker = new Litepicker({
      element: document.getElementById('litepicker')
    });
    }
};
</script>

<style scoped>
</style>
