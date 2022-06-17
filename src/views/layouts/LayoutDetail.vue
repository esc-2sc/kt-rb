<template>
    <main class="wrap">
        <input type="text" id="litepicker">
        <header>
            <navigation></navigation>
        </header>
        <div class="contents">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import Litepicker from 'litepicker';
import Navigation from "@/views/layouts/Navigation";

export default {
	name: 'layout-detail',
	components: {
        Navigation,
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
