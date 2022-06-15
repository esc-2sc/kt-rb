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
                    <div v-else-if="nav.divider" :class="`ac-nav__item divider`">

                    </div>
                    <router-link v-else :to="`/${nav.url}`" :class="`ac-nav__item lv${nav.level}`" :disabled="!nav.complete">
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
                {level:1, label:'HOME', },
                {level:2, label:'Home', url:'home' },

                {level:1, label:'LOGIN', },
                {level:2, label:'Login', url:'login', complete: true},
                {level:2, label:'Join', url:'join', complete: true },
                {level:2, label:'Password Email', url:'password-email', complete: true },
                {level:2, label:'Password Code', url:'password-code', complete: true },
                {level:2, label:'Password Update', url:'password-update', complete: true },

                {level:1, label:'CUSTOMER', },
                {level:2, label:'Profile', url:'customer-profile', complete: true, },
                {level:2, label:'P - Overview', url:'customer-profile-overview', complete: true },
                {level:2, label:'PO - Popup - Photo', url:'customer-profile-overview-popup-photo', complete: true },
                {level:2, label:'PO - PP - Modify', url:'customer-profile-overview-popup-photo-modify', complete: true },
                {level:2, label:'PO - Popup - Restaurant', url:'customer-profile-overview-popup-restaurant', complete: true },
                {level:2, label:'PO - PR - Modify', url:'customer-profile-overview-popup-restaurant-modify', complete: true },
                {level:2, label:'PO - Popup - Gift', url:'customer-profile-overview-popup-gift', complete: true },
                {level:2, label:'PO - PG - Modify', url:'customer-profile-overview-popup-gift-modify', complete: true },
                {level:2, label:'PO - Write - Basic', url:'customer-profile-overview-popup-write-basic', complete: true },
                {level:2, label:'PO - Write - Additional', url:'customer-profile-overview-popup-write-additional', complete: true },
                {level:2, label:'P - Organization', url:'customer-profile-organization', complete: true },
                {level:2, label:'PO - Popup - Summary', url:'customer-profile-organization-popup-summary', complete: true },
                {level:2, label:'P - Email', url:'customer-profile-email', complete: true },
                {level:2, label:'P - Meeting', url:'customer-profile-meeting', complete: true },
                {level:2, label:'P - File', url:'customer-profile-file', complete: true },
                {level:2, label:'Popup - File', url:'customer-profile-popup-file', complete: true },
                {level:2, label:'Popup - Photo', url:'customer-profile-popup-photo', complete: true },

                {level:2, divider:true },

                {level:2, label:'Contacts', url:'customer-contacts', complete: true },
                {level:2, label:'C - Overview', url:'customer-contacts-overview', complete: true },
                {level:2, label:'CO - Popup - Photo', url:'customer-contacts-overview-popup-photo', complete: true },
                {level:2, label:'CO - Popup - Restaurant', url:'customer-contacts-overview-popup-restaurant', complete: true },
                {level:2, label:'CO - Popup - Gift', url:'customer-contacts-overview-popup-gift', complete: true },
                {level:2, label:'CO - Write - Basic', url:'customer-contacts-overview-popup-write-basic', complete: true },
                {level:2, label:'CO - Write - Additional', url:'customer-contacts-overview-popup-write-additional', complete: true },
                {level:2, label:'C - Organization', url:'customer-contacts-organization', complete: true },
                {level:2, label:'CO - Popup - Summary', url:'customer-contacts-organization-popup-summary', complete: true },
                {level:2, label:'C - Document & Email', url:'customer-contacts-document', complete: true },
                {level:2, label:'C - Meeting', url:'customer-contacts-meeting', complete: true },

	            {level:2, divider:true },

	            {level:2, label:'Transaction', url:'customer-transaction', complete: false },
	            // {level:2, label:'T - NAME', url:'customer-transaction-NAME' },

	            {level:2, divider:true },

	            {level:2, label:'Interaction', url:'customer-interaction', complete: false},
	            // {level:2, label:'I - NAME', url:'customer-interaction-NAME' },

	            {level:1, label:'COLLABORATION', },
	            {level:2, label:'C - Meeting Hub', url:'collaboration-', complete: false},
	            {level:2, label:'CM - 회의 관리', url:'collaboration-', complete: false},
	            {level:2, label:'CM - 회의 목록', url:'collaboration-', complete: false},
	            {level:2, label:'CM - 회의록 보기', url:'collaboration-meeting-detail', complete: true},
	            {level:2, label:'CM - 회의록 등록/편집', url:'collaboration-meeting-write', complete: true},
	            {level:2, label:'CM - 회의록 등록/Popup', url:'collaboration-meeting-write-popup', complete: true},
	            {level:2, label:'CM - 회의록 등록/Popup2', url:'collaboration-meeting-write-popup-2', complete: true},
	            // {level:2, label:'CM - Action Item 상세', url:'collaboration-', complete: false},
	            {level:2, label:'CM - Meeting Call 보기', url:'collaboration-meeting-call-detail', complete: true},
	            {level:2, label:'CM - Meeting Call 등록/편집', url:'collaboration-meeting-call-write', complete: true},

	            {level:2, label:'C - Action Item', url:'collaboration-', complete: false},
	            {level:2, label:'CA - 관리', url:'collaboration-', complete: false},
	            {level:2, label:'CA - 목록', url:'collaboration-', complete: false},
	            {level:2, label:'CA - 상세 보기', url:'collaboration-actionitem-detail', complete: true},
	            {level:2, label:'CA - 상세 등록/편집', url:'collaboration-actionitem-write', complete: true},

	            {level:2, label:'C - Customer Meeting', url:'collaboration-customer', complete: false},
	            {level:2, label:'CC - 출장 회의록 보기', url:'collaboration-customer-detail', complete: true},
	            {level:2, label:'CC - 출장 회의록 등록/선택', url:'collaboration-customer-write-start', complete: true},
	            {level:2, label:'CC - 출장 회의록 등록/편집', url:'collaboration-customer-write', complete: true},
	            {level:2, label:'CC - 출장 회의록 등록/Popup', url:'collaboration-customer-write-popup', complete: true},

	            {level:1, label:'MARKETING', },
	            {level:2, label:'M - Product', url:'marketing-', complete: false},
	            {level:2, label:'M - Price', url:'marketing-', complete: false},
	            {level:2, label:'M - Promotion', url:'marketing-', complete: false},
	            {level:2, label:'M - Place(Customer Mix)', url:'marketing-', complete: false},

	            {level:1, label:'SALES', },
	            {level:2, label:'Sales Dashboard', url:'sales-', complete: false},

	            {level:1, label:'ETC', },
	            {level:2, label:'메일 보내기', url:'mail-write', complete: true},
	            {level:2, label:'Resume', url:'etc-', complete: false},
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
.ac-nav__item.lv2[disabled]{
    opacity: .5;
    pointer-events: none;
}
.ac-nav__item.divider{
    height:1px;
    margin-top:16px;
    margin-bottom:16px;
    border-top:1px dashed #a9a9a9;
    pointer-events: none;
    opacity: .5;
}
</style>
