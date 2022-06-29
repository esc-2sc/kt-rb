<template>
    <main class="wrap">
        <header class="header">
            <h1 class="logo"><router-link to="/guide"><img src="/resources/images/svg/logo-black.svg" alt="R-Brain"></router-link></h1>
            <navigation/>
            <div class="aside">
                <span class="user">robot_seoul45</span>
            </div>
        </header>
        <div class="contents">
            <div class="guide-content scroll">
                <router-view></router-view>
            </div>
        </div>
    </main>
</template>

<script>
import Navigation from "@/views/layouts/NavigationGuide";

export default {
	name: 'layout-guide',
	components: {
      Navigation,
	},
    data() {
        return {
        };
    },
};
</script>
<style scoped>
.guide-content{
  position: fixed;
  left:360px;
  right:27px;
  top: calc(var(--height-header) - 5px);
  bottom: 27px;
  background-color:#fff;
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding-top:40px;
  overflow: auto;
}
</style>