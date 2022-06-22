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
  overflow: auto;
}
</style>