<template>
    <div class="ac-nav" :class="{'state--mini': isNavToggle}">
        <header class="ac-nav__header">
            <h1 class="ac-logo"><router-link to="/"><img src="/resources/images/svg/logo.svg" class="size--30" alt="Arches Logo"></router-link></h1>
            <button class="ac-btn__nav-toggle" @click="onClickNavToggle"><img src="/resources/images/svg/icon_nav_toggle_arrow.svg" class="size--16" alt="Nav Toggle"></button>
        </header>
        <div class="ac-nav__search">
            <div class="a-input-search size--full">
                <input type="text" placeholder="Search" value="">
                <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
            </div><!-- //a-input-search -->
        </div>
        <nav class="ac-nav__list">
            <div class="ac-nav__list-inner">
                <template v-for="nav in navData">
                    <div v-if="nav.level == 1" :class="`ac-nav__item lv${nav.level}`">
                        <span class="label" v-text="nav.label"></span>
                    </div>
                    <router-link v-else :to="`/${nav.url}`" :class="`ac-nav__item lv${nav.level}`">
                        <span class="icon" :title="(isNavToggle) ? nav.label : ''"><img src="/resources/images/svg/list-unordered-24.svg" class="size--16" alt=""></span>
                        <span class="label" v-text="nav.label"></span>
                    </router-link>
                </template>
            </div>
        </nav>
    </div><!-- //ac-nav -->
</template>

<script>
export default {
    data() {
        return {
            navData: [
                {level:1, label:'GUIDE', },
                {level:2, label:'All', url:'guide' },
                {level:2, label:'Text', url:'guide-text' },
                {level:2, label:'Color', url:'guide-color' },
                {level:2, label:'Title', url:'guide-title' },
                {level:2, label:'Icon', url:'guide-icon' },
                {level:2, label:'Button', url:'guide-button' },
                {level:2, label:'Input', url:'guide-input' },
                {level:2, label:'Textarea', url:'guide-textarea' },
                {level:2, label:'Chip, Token, File', url:'guide-token' },
                {level:2, label:'Check,Radio,Switch', url:'guide-check-radio-switch' },
                {level:2, label:'Select', url:'guide-select' },
                {level:2, label:'Image', url:'guide-image' },
                {level:2, label:'List', url:'guide-list' },
                {level:2, label:'Tab', url:'guide-tab' },
                {level:2, label:'Table', url:'guide-table' },
                {level:2, label:'Paging', url:'guide-paging' },
                {level:2, label:'Gird', url:'guide-grid' },
                {level:2, label:'Gird Form', url:'guide-grid-form' },
                {level:2, label:'Tooltip', url:'guide-tooltip' },
                {level:2, label:'Alert Message', url:'guide-alert-message' },
                {level:2, label:'Toast Message', url:'guide-toast-message' },
                {level:2, label:'Snackbar', url:'guide-snackbar' },
                {level:2, label:'User', url:'guide-user' },
                {level:2, label:'Progress', url:'guide-progress' },
                {level:2, label:'Etc', url:'guide-etc' },
                {level:2, label:'Popup', url:'guide-popup' },
                {level:2, label:'Search', url:'guide-search' },
                {level:2, label:'View', url:'guide-view' },

                {level:1, label:'VRIX', },
                {level:2, label:'List', url:'guide-vrix-list' },
                {level:2, label:'Combobox', url:'guide-vrix-combobox' },
                {level:2, label:'Datefield', url:'guide-vrix-datefield' },
                {level:2, label:'Tree', url:'guide-vrix-tree' },
                {level:2, label:'Autocomplete', url:'guide-vrix-autocomplete' },
                {level:2, label:'Tokenizer', url:'guide-vrix-tokenizer' },
                {level:2, label:'Popup', url:'guide-vrix-popup' },

                {level:1, label:'TACHYON', },

                {level:1, label:'COMPONENT', },
                {level:2, label:'com-dropdown-bar', url:'guide-com-dropdown-bar' },
                {level:2, label:'com-paging', url:'guide-com-paging' },

                {level:1, label:'PAGE LINK', },
                {level:2, label:'File List', url:'customer-profile' },
                {level:2, label:'Sample', url:'sample' },
                {level:2, label:'Sample Detail', url:'sample-detail' },
                {level:2, label:'Error', url:'error' },
                {level:2, label:'Memo', url:'guide-memo' },

                // {level:2, label:'Home', url:'home' },
                // {level:1, label:'LOGIN', },
                // {level:2, label:'Login', url:'login' },
                // {level:2, label:'Join', url:'join' },
                // {level:2, label:'Password Email', url:'password-email' },
                // {level:2, label:'Password Code', url:'password-code' },
                // {level:2, label:'Password Update', url:'password-update' },

                // {level:1, label:'CUSTOMER', },
                // {level:1, label:'SALES', },
                // {level:1, label:'BUSINESS TRIP', },
            ],
            isNavToggle: false
        };
    },
    methods: {
        onClickNavToggle() {
            this.isNavToggle = !this.isNavToggle;
        }
    }
};
</script>

<style scoped>
</style>
