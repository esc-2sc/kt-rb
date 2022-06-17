<template>
    <main class="wrap">
        <input type="text" id="litepicker">
        <header>
            <navigation></navigation>
          <br>
          <vue-rangedate-picker></vue-rangedate-picker>
        </header>
        <div class="contents">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import Litepicker from 'litepicker';
import Navigation from "@/views/layouts/Navigation";
import VueRangedatePicker from 'vue-rangedate-picker';

export default {
	name: 'layout-detail',
	components: {
        Navigation,
        VueRangedatePicker
	},
    data() {
        return {
        };
    },
    mounted() {
      const picker = new Litepicker({
        element: document.getElementById('litepicker')
      });
    }
};
</script>
