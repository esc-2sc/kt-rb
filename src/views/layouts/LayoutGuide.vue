<template>
    <main class="ac-main">
        <navigation-guide></navigation-guide>
        <div class="ac-container guide">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import NavigationGuide from "@/views/layouts/NavigationGuide";

export default {
	name: 'layout-guide',
	components: {
        NavigationGuide,
	},
    data() {
        return {
        };
    },
};
</script>
<style scoped>
    .ac-container.guide{
        padding:032px 40px;
        background-color: #bababa;
    }
    .ac-container.guide >>> > div{
        background-color: #fff;
        border-radius: 14px;
    }
</style>
