<template>
    <nav class="control-robot">
        <div class="control-robot__panel scroll">
            <template v-for="nav in navData">
                <div v-if="nav.level == 1" :class="`guide-nav__item lv${nav.level}`" v-text="nav.label"></div>
                <router-link v-else :to="`/${nav.url}`" :class="`guide-nav__item lv${nav.level}`" v-text="nav.label" :disabled="nav.ing"></router-link>
            </template>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
          navData: [
            {level:1, label:'PAGE - GUIDE', },
            {level:2, label:'layout - viewer', url:'viewer' },
            {level:2, label:'layout - detail', url:'detail' },
            {level:2, label:'login', url:'login' },

            {level:1, label:'PAGE - 설정 - 알람', },
            {level:2, label:'발신관리', url:'setting-alarm-send-list' },
            {level:2, label:'발신관리 - 검색결과', url:'setting-alarm-send-search' },
            {level:2, label:'발신관리 - 상세(팝업)', url:'setting-alarm-send-detail' },
            {level:2, label:'템플릿 관리', url:'setting-alarm-template-list'},
            {level:2, label:'템플릿 관리 - 시간설정(팝업)', url:'setting-alarm-template-time', ing: true, },
            {level:2, label:'템플릿 관리 - 수정/저장(팝업)', url:'setting-alarm-template-modify', ing: true, },
            {level:2, label:'템플릿 관리 - 저장 완료(Snackbar)', url:'setting-alarm-template-snackbar'},

            {level:1, label:'PAGE - 설정 - 계정관리', },
            {level:2, label:'계정관리', url:'setting-account-list' },
            {level:2, label:'계정관리 - 권한변경(팝업)', url:'setting-account-change', ing: true, },
            {level:2, label:'계정관리 - 상세정보(팝업)', url:'setting-account-detail' },
            {level:2, label:'계정관리 - 계정수정(팝업)', url:'setting-account-detail-modify', ing: true, },
            {level:2, label:'계정관리 - Snackbar', url:'setting-account-snackbar'},

            {level:1, label:'GUIDE-A', },
            // {level:2, label:'All', url:'guide' },
            // {level:2, label:'Typo', url:'guide-typo' },
            {level:2, label:'Text', url:'guide-text' },
            // {level:2, label:'Color', url:'guide-color' },
            // {level:2, label:'Title', url:'guide-title' },
            {level:2, label:'Icon', url:'guide-icon' },
            {level:2, label:'Button', url:'guide-button' },
            {level:2, label:'Input', url:'guide-input' },
            {level:2, label:'Textarea', url:'guide-textarea' },
            {level:2, label:'Chip, Token, File', url:'guide-token' },
            {level:2, label:'Check,Radio,Switch', url:'guide-check-radio-switch' },
            // {level:2, label:'Select', url:'guide-select' },
            // {level:2, label:'Image', url:'guide-image' },
            {level:2, label:'List', url:'guide-list' },
            {level:2, label:'Tab', url:'guide-tab' },
            {level:2, label:'Table', url:'guide-table' },
            {level:2, label:'Paging', url:'guide-paging' },
            {level:2, label:'Gird', url:'guide-grid' },
            // {level:2, label:'Gird Form', url:'guide-grid-form' },
            {level:2, label:'Tooltip', url:'guide-tooltip' },
            {level:2, label:'Alert Message', url:'guide-alert-message' },
            {level:2, label:'Toast Message', url:'guide-toast-message' },
            {level:2, label:'Snackbar', url:'guide-snackbar' },
            // {level:2, label:'User', url:'guide-user' },
            // {level:2, label:'Progress', url:'guide-progress' },
            // {level:2, label:'Etc', url:'guide-etc' },
            // {level:2, label:'Popup', url:'guide-popup' },
            // {level:2, label:'Search', url:'guide-search' },
            // {level:2, label:'View', url:'guide-view' },

            {level:1, label:'GUIDE-R', },
            {level:2, label:'date-picker', url:'guide-r-date-picker' },
            {level:2, label:'r-chart-nav', url:'guide-r-chart-nav' },
            {level:2, label:'r-popup', url:'guide-r-popup' },

            {level:1, label:'VRIX', },
            {level:2, label:'List', url:'guide-vrix-list' },
            {level:2, label:'Combobox', url:'guide-vrix-combobox' },
            {level:2, label:'Datefield', url:'guide-vrix-datefield' },
            {level:2, label:'Tree', url:'guide-vrix-tree' },
            {level:2, label:'Autocomplete', url:'guide-vrix-autocomplete' },
            {level:2, label:'Tokenizer', url:'guide-vrix-tokenizer' },
            {level:2, label:'Popup', url:'guide-vrix-popup' },

            {level:1, label:'TACHYON', },
            {level:2, label:'Data Table', url:'guide-tachyon' },

            {level:1, label:'COMPONENT', },
            {level:2, label:'com-dropdown-bar', url:'guide-com-dropdown-bar' },
            {level:2, label:'com-paging', url:'guide-com-paging' },
          ],
        };
    },
    methods: {
    }
};
</script>
<style scoped>
.control-robot{position:fixed;bottom:27px;}
.guide-nav__item.lv1{
  font-size: 11px;
  line-height: 11px;
  color: #989898;}
.guide-nav__item.lv2{
  position: relative;
  display: flex;
  align-items: center;
  margin-top:5px;
  padding:5px 10px;
  font-size: 13px;
  line-height: 13px;
  color: #000;
}
.guide-nav__item.lv2 + .lv1{margin-top:30px;}
.guide-nav__item.lv2.router-link-active{color:var(--color-point-1);}
.guide-nav__item.lv2[disabled]{
  opacity: .1;
  pointer-events: none;
}
</style>