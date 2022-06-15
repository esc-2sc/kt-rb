<template>
    <main class="ac-main">
        <navigation></navigation>
        <div class="ac-container">
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
