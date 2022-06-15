<template>
    <layout-profile title="Google" :active-index="1" hide-share>

        <div class="a-cp-organization a-cc-organization">
            <div class="a-cp-organization__map">

                <!-- TEST -->
                <div style="width:100%;height:100%;display: flex;align-items: center;justify-content: center">
                    조직도 영역
                </div><!-- //TEST -->

            </div>
            <div class="a-cp-organization__side">
                <div class="a-cp-organization__side-header">
                    <div class="a-cp-organization__control">
                        <div class="a-cp-organization__control-l">
                            <button class="a-btn-type-1 line icon btn-write"><img src="/resources/images/svg/pencil-24.svg" alt=""></button>
                            <button class="a-btn-type-1 line icon btn-download"><img src="/resources/images/svg/circle-download-24.svg" alt=""></button>
                            <button class="a-btn-type-1 line icon btn-upload"><img src="/resources/images/svg/circle-upload-24.svg" alt=""></button>
                        </div>
                        <div class="a-cp-organization__control-r">
                            <button class="a-btn-type-1 line icon btn-share"><img src="/resources/images/svg/share-android-24.svg" alt=""></button>
                        </div>
                    </div><!-- //a-cp-organization__control -->

                    <div class="a-search-1 size--full a-cp-organization__search">
                        <div class="a-search__item">
                            <div class="a-search__item-l">
                                <div class="a-input-search">
                                    <input type="text" placeholder="고객명 검색" value="">
                                    <button class="btn-clear"><img src="/resources/images/svg/circle-x-fill-gray-24.svg" class="size--16" alt="Clear"></button>
                                </div><!-- //a-input-search -->
                            </div><!-- //a-search__item-l -->
                        </div><!-- //a-search__item -->
                        <div class="a-search__item">
                            <div class="a-search__item-l">
                                <div class="a-tab-2">
                                    <button selected>인물 전체</button>
                                    <button>분류된 인물</button>
                                    <button>미분류 인물</button>
                                </div><!-- //a-tab-2 -->
                            </div><!-- //a-search__item-l -->
                        </div><!-- //a-search__item -->
                    </div><!-- //a-search-1 -->
                </div>
                <div class="a-cp-organization__side-body">

                    <div class="a-list-3 a-cp-organization__side-scroll">
                        <div class="a-list__item" v-for="(item, index) in 10" :key="`item-${index}}`">
                            <div class="a-list__item-l">
                                <div class="title a-color-label-2">Sundar Pichai - {{index+1}}</div>
                                <div class="label position a-color-label-2">Marketing manager</div>
                                <div class="label team a-color-label-3">
                                    <span class="icon"><img src="/resources/images/svg/git-fork-gray-24.svg" alt=""></span>
                                    Global Sales &amp; Biz.development
                                </div>
                            </div>
                            <div class="a-list__item-r">
                                <div class="a-user size--large">
                                    <span class="a-user__label">AB</span>
                                </div><!-- //a-user -->
                            </div>
                        </div><!-- //a-list__item -->
                    </div><!-- //a-list-3 -->
                </div>
            </div>
        </div><!-- //a-cp-organization -->

    </layout-profile>
</template>

<script>
import Layout from "@/views/customer/contacts/Layout";
export default {
    name: 'customer-contacts-organization',
    components: {
        'layout-profile': Layout
    },
	data() {
		return {
		};
	},
    methods: {
	},
};
</script>

<style scoped>
</style>
