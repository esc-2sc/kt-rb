<template>
    <main class="wrap">
        <header class="header">
            <h1 class="logo"><a href="#"><img src="/resources/images/svg/logo-black.svg" alt="R-Brain"></a></h1>
            <navigation/>
            <div class="aside">
                <span class="user">robot_seoul45</span>
            </div>
        </header>
        <div class="contents">
            <input type="text" id="litepicker">
            <vue-rangedate-picker></vue-rangedate-picker>
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
