<template>
    <main>
        <navigation></navigation>
        <router-view></router-view>
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
