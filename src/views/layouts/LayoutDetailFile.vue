<template>
    <main class="ac-main">
        <navigation-file></navigation-file>
        <div class="ac-container">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import NavigationFile from "@/views/layouts/NavigationFile";

export default {
	name: 'layout-detail',
	components: {
        NavigationFile
	},
    data() {
        return {
        };
    },
};
</script>

