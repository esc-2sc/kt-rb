<template>
    <div class="ac-nav">
        <header class="ac-nav__header">
            <h1 class="ac-logo"><router-link to="/"><img src="/resources/images/svg/logo.svg" class="size--30" alt="Arches Logo"></router-link></h1>
        </header>
        <div class="ac-nav__search">
            <div class="a-input-search size--full">
                <input type="text" placeholder="Search" value="">
                <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
            </div><!-- //a-input-search -->
        </div>
        <nav class="ac-nav__list">
            <div class="ac-nav__list-inner">
                <div class="ac-nav__item lv1">
                    <!-- span class="icon"></span -->
                    <span class="label">DESIGN GUIDE</span>
                </div>
                <router-link to="/guide" class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/organization-24.svg" class="size--16" alt=""></span>
                    <span class="label">Guide</span>
                </router-link>
                <router-link to="/customer" class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/organization-24.svg" class="size--16" alt=""></span>
                    <span class="label">Page</span>
                </router-link>

                <div class="ac-nav__item lv1">
                    <!-- span class="icon"></span -->
                    <span class="label">CUSTOMER</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/organization-24.svg" class="size--16" alt=""></span>
                    <span class="label">Profile</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/person-24.svg" class="size--16" alt=""></span>
                    <span class="label">Contacts</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/package-dependents-24.svg" class="size--16" alt=""></span>
                    <span class="label">Transaction</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/sync-24.svg" class="size--16" alt=""></span>
                    <span class="label">Interaction</span>
                </div>

                <div class="ac-nav__item lv1">
                    <!-- span class="icon"></span -->
                    <span class="label">SALES</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/pulse-24.svg" class="size--16" alt=""></span>
                    <span class="label">Sales Dashboard</span>
                </div>

                <div class="ac-nav__item lv1">
                    <!-- span class="icon"></span -->
                    <span class="label">MARKETING</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/package-24.svg" class="size--16" alt=""></span>
                    <span class="label">Product</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/search-24.svg" class="size--16" alt=""></span>
                    <span class="label">Price</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/verified-24.svg" class="size--16" alt=""></span>
                    <span class="label">Promotion</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/milestone-24.svg" class="size--16" alt=""></span>
                    <span class="label">Place</span>
                </div>

                <div class="ac-nav__item lv1">
                    <!-- span class="icon"></span -->
                    <span class="label">COLLABORATION</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/globe-24.svg" class="size--16" alt=""></span>
                    <span class="label">Meeting  Hub</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/list-unordered-24.svg" class="size--16" alt=""></span>
                    <span class="label">Action Item</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></span>
                    <span class="label">Customer Meeting</span>
                </div>
                <div class="ac-nav__item lv2">
                    <span class="icon"><img src="/resources/images/svg/beaker-24.svg" class="size--16" alt=""></span>
                    <span class="label">Crawling Pool</span>
                </div>
            </div>
        </nav>
    </div><!-- //ac-nav -->
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        goTo(link='/') {
            this.$router.push(link);
        }
    }
};
</script>

<style scoped>
.ac-nav__item[disabled]{
    opacity: .3;
    pointer-events: none;
}
</style>
