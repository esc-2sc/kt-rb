<template>
    <guide-box title="Icon" desc="SVG, IMAGE, FILE" :to="$options.name">
        <guide-box-item title="SVG - R">
            <ul class="g-icon-list">
                <li v-for="(icon, n) in iconsR" :key="`icon-svg-${n}`" :class="{'is-white': icon.isWhite}">
                    <figure><img :src="`/resources/images/svg/${icon.name}`" alt=""></figure>
                    <span class="path">/resources/images/svg/<strong class="a-color-label-black">{{icon.name}}</strong></span>
                </li>
            </ul>
        </guide-box-item>

        <guide-box-item title="SVG - A">
            <ul class="g-icon-list">
                <li v-for="(icon, n) in icons" :key="`icon-svg-${n}`" :class="{'is-white': icon.isWhite}">
                    <figure><img :src="`/resources/images/svg/${icon.name}`" alt=""></figure>
                    <span class="path">/resources/images/svg/<strong class="a-color-label-black">{{icon.name}}</strong></span>
                </li>
            </ul>
        </guide-box-item>
        <guide-box-item title="SVG : File">
            <ul class="g-icon-list">
                <li v-for="(icon, n) in iconsFile" :key="`icon-file-${n}`" :class="{'is-white': icon.isWhite}">
                    <figure><img :src="`/resources/images/svg/file/${icon.name}`" alt=""></figure>
                    <span class="path">/resources/images/svg/file/<strong class="a-color-label-black">{{icon.name}}</strong></span>
                </li>
            </ul>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-icon',
    components: {
    },
	data() {
		return {
            iconsR: [
              // {name:'icon-close-32.svg'},
              {name:'icon_info_blue.svg'},
              {name:'icon_delete_red.svg'},
              {name:'icon_notifications_off.svg'},
              {name:'icon_download.svg'},
              {name:'icon_manage_accounts.svg'},
              {name:'logo-black.svg'},
              {name:'robot.svg'},
              {name:'home.svg'},
              {name:'map2.svg'},
              {name:'icon-alerts-compress.svg'},
              {name:'icon-alerts-emergency.svg'},
              {name:'icon-alerts-noun-robot.svg'},
              {name:'icon-alerts-pan.svg'},
              {name:'icon-alerts-warning.svg'},
              {name:'icon-alerts-wifi.svg'},
              {name:'icon-arrow-left.svg'},
              {name:'icon-arrow-right.svg'},
              {name:'icon-arrow-first.svg'},
              {name:'icon-arrow-last.svg'},
              {name:'icon-calendar-month.svg'},
              {name:'icon-time.svg'},
              {name:'icon-close.svg'},
              {name:'icon-restart.svg'},
              {name:'icon-info.svg'},
              {name:'icon-battery-charging.svg'},
              {name:'icon-battery-unknown.svg'},
              {name:'icon-battery-vert.svg'},
              {name:'icon-battery_alert.svg'},
              {name:'icon-label-01.svg'},
              {name:'icon-label-02.svg'},
              {name:'icon-label-03.svg'},
              {name:'icon-label-04.svg'},
              {name:'icon-label-05.svg'},
              {name:'icon-label-06.svg'},
              {name:'icon-label-07.svg'},
              {name:'icon-label-08.svg'},
              {name:'icon-label-09.svg'},
              {name:'icon-label-10.svg'},
              {name:'icon-label-11.svg'},
              {name:'icon-label-12.svg'},
              {name:'icon-label-13.svg'},
              {name:'icon-label-14.svg'},
              {name:'icon-label-15.svg'},
              {name:'icon-label-16.svg'},
              {name:'icon-label-17.svg'},
              {name:'icon-label-18.svg'},
              {name:'icon-label-19.svg'},
              {name:'icon-label-20.svg'},
              {name:'icon-label-21.svg'},
              {name:'icon-label-22.svg'},
            ],
		    icons: [
                  {name:'airplain.svg'},
                  {name:'alert-24.svg'},
                  {name:'arrow-left-blue-24.svg'},
                  {name:'arrow-down-24.svg'},
                  {name:'arrow-up-24.svg'},
                  {name:'arrow-sort-24.svg'},
                  {name:'beaker-24.svg'},
                  {name:'bell-fill-24.svg'},
                  {name:'book-24.svg'},
                  {name:'book-white-24.svg', isWhite:true},
                  {name:'bookmark-white-24.svg', isWhite:true},
                  {name:'briefcase-24.svg'},
                  {name:'calendar-24.svg'},
                  {name:'check-24.svg'},
                  {name:'check-blue-24.svg'},
                  {name:'check-green-24.svg'},
                  {name:'check-white-24.svg', isWhite:true},
                  {name:'checklist-24.svg'},
                  {name:'chevron-down-24.svg'},
                  {name:'chevron-left-24.svg'},
                  {name:'chevron-right-24.svg'},
                  {name:'chevron-right-blue-24.svg'},
                  {name:'chevron-up-24.svg'},
                  {name:'circle-check-24.svg'},
                  {name:'circle-check-fill-24.svg'},
                  {name:'circle-check-fill-blue-24.svg'},
                  {name:'circle-check-fill-white-24.svg', isWhite:true},
                  {name:'circle-download-24.svg'},
                  {name:'circle-download-gray-24.svg'},
                  {name:'circle-minus-fill-24.svg'},
                  {name:'circle-minus-gray.svg'},
                  {name:'circle-minus-white.svg', isWhite:true},
                  {name:'circle-minus.svg'},
                  {name:'circle-plus-24.svg'},
                  {name:'circle-plus-gray-24.svg'},
                  {name:'circle-plus-fill-24.svg'},
                  {name:'circle-plus-fill-blue-24.svg'},
                  {name:'circle-upload-24.svg'},
                  {name:'circle-x-fill-gray-24.svg'},
                  {name:'clock-24.svg'},
                  {name:'codescan-checkmark-24.svg'},
                  {name:'codescan-checkmark-white-24.svg', isWhite:true},
                  {name:'comment-24.svg'},
                  {name:'comment-discussion-24.svg'},
                  {name:'comment-discussion-gray-24.svg'},
                  {name:'comment-discussion-white-24.svg', isWhite:true},
                  {name:'comment-gray-24.svg'},
                  {name:'device-mobile-24.svg'},
                  {name:'device-mobile-gray-24.svg'},
                  {name:'disappointed-red-24.svg'},
                  {name:'duplicate-24.svg'},
                  {name:'eye-24.svg'},
                  {name:'file-24.svg'},
                  {name:'file-gray-24.svg'},
                  {name:'file2-24.svg'},
                  {name:'folder.svg'},
                  {name:'graph.svg'},
                  {name:'gift-24.svg'},
                  {name:'git-fork-24.svg'},
                  {name:'git-fork-gray-24.svg'},
                  {name:'globe-24.svg'},
                  {name:'icon_nav_toggle_arrow.svg', isWhite:true},
                  {name:'infinity-24.svg'},
                  {name:'info-24.svg'},
                  {name:'info-black-24.svg'},
                  {name:'info-gray-24.svg'},
                  {name:'lightbulb-24.svg'},
                  {name:'link-24.svg'},
                  {name:'list-ordered-24.svg'},
                  {name:'list-unordered-24.svg'},
                  {name:'list-unordered-gray-24.svg'},
                  {name:'list-unordered-white-24.svg', isWhite:true},
                  {name:'loading-white-24.svg', isWhite:true},
                  {name:'location-24.svg'},
                  {name:'location-gray-24.svg'},
                  {name:'logo-white.svg', isWhite:true},
                  {name:'logo.svg'},
                  {name:'mail.svg'},
                  {name:'mail-24.svg'},
                  {name:'mail-gray-24.svg'},
                  {name:'mail-white-24.svg', isWhite:true},
                  {name:'meeting-24.svg'},
                  {name:'milestone-24.svg'},
                  {name:'mortar-board-24.svg'},
                  {name:'mortar-board-blue-24.svg'},
                  {name:'north-star-green-24.svg'},
                  {name:'number-24.svg'},
                  {name:'organization-24.svg'},
                  {name:'organization-gray-24.svg'},
                  {name:'organization-simple-24.svg'},
                  {name:'package-24.svg'},
                  {name:'package-dependents-24.svg'},
                  {name:'paper-airplane-fill-tilt-24.svg'},
                  {name:'paper-airplane-fill-tilt-white-24.svg', isWhite:true},
                  {name:'pencil.svg'},
                  {name:'pencil-24.svg'},
                  {name:'pencil-gray-24.svg'},
                  {name:'pencil-white-24.svg', isWhite:true},
                  {name:'people-24.svg'},
                  {name:'people-gray-24.svg'},
                  {name:'person-24.svg'},
                  {name:'person-gray-24.svg'},
                  {name:'plus-24.svg'},
                  {name:'plus-white-24.svg', isWhite:true},
                  {name:'pulse-24.svg'},
                  {name:'report.svg'},
                  {name:'search-24.svg'},
                  {name:'search-big-24.svg'},
                  {name:'search-gray-24.svg'},
                  {name:'setting-24.svg'},
                  {name:'setting-gray-24.svg'},
                  {name:'share-android-24.svg'},
                  {name:'share-android-gray-24.svg'},
                  {name:'share-android-white-24.svg', isWhite:true},
                  {name:'sign-out-24.svg'},
                  {name:'smiley-blue-24.svg'},
                  {name:'square-4-24.svg'},
                  {name:'sync-24.svg'},
                  {name:'tertiary.svg'},
                  {name:'trash-24.svg'},
                  {name:'trash-gray-24.svg'},
                  {name:'triangle-down-gray-24.svg'},
                  {name:'verified-24.svg'},
                  {name:'visa.svg'},
                  {name:'x-24.svg'},
                  {name:'x-white-24.svg', isWhite:true},
              ],

            iconsFile: [
                {name:'file_doc.svg', },
                {name:'file_ppt.svg', },
                {name:'file_xls.svg', },
                {name:'file_pdf.svg', },
                {name:'file_img.svg', },
                {name:'file_gif.svg', },
                {name:'file_rar.svg', },
                {name:'file_zip.svg', },
                {name:'file_comp.svg', },
                {name:'file_file.svg', },

                {name:'file_ai.svg', },
                {name:'file_aep.svg', },
                {name:'file_pr.svg', },
                {name:'file_psd.svg', },
                {name:'file_xd.svg', },

                {name:'file_html.svg', },
                {name:'file_css.svg', },
                {name:'file_js.svg', },
                {name:'file_xml.svg', },
                {name:'file_ts.svg', },
                {name:'file_vue.svg', },
                {name:'file_java.svg', },
                {name:'file_asp.svg', },
                {name:'file_php.svg', },
                {name:'file_code.svg', },

                {name:'file_png.svg', },
                {name:'file_svg.svg', },

                {name:'file_jpg.svg', },
                {name:'file_raw.svg', },

                {name:'file_eps.svg', },
                {name:'file_dwg.svg', },
                {name:'file_eml.svg', },
                {name:'file_raw.svg', },

                {name:'file_avi.svg', },
                {name:'file_mid.svg', },
                {name:'file_mov.svg', },
                {name:'file_mpeg.svg', },
                {name:'file_wmv.svg', },
                {name:'file_video.svg', },

                {name:'file_mp3.svg', },
                {name:'file_mp4.svg', },
                {name:'file_wav.svg', },
                {name:'file_wma.svg', },
                {name:'file_music.svg', },

            ]
        };
	},
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
.g-icon-list{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #cacccf;
    /*box-shadow: 0 4px 20px rgba(0, 0, 0, .1);*/
    border-radius: 10px;
    overflow: hidden;
}
.g-icon-list li{
    width:20%;
    padding:10px;
    margin-bottom:-1px;
    border-top:1px solid #cacccf;
    border-bottom:1px solid #cacccf;
    border-left:1px solid #cacccf;
;
}
.g-icon-list li:nth-child(5n+1){border-left:0;}
.g-icon-list li:nth-child(-n + 5){border-top:0;}
.g-icon-list figure{
    display: flex;
    align-items: center;
    justify-content: center;
    height:100px;
}
.g-icon-list .path{
    position: relative;
    z-index: 1;
    display: block;
    text-align: center;
    word-break: break-all;
    font-family: Consolas, sans-serif;
    font-size:11px;
    color:#989898;
}
.g-icon-list li.is-white{
    background-color:#989898;
}
.g-icon-list li.is-white .path{
    color:#fff;
}
.g-icon-list li figure{
    transform: scale(1);

    will-change: transform;
    transition:transform .25s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}
.g-icon-list li:hover figure{
    transform: scale(1.75);
}
</style>
