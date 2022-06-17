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
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
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
};
</script>
