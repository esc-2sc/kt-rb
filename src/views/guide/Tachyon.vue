<template>
    <guide-box title="Data Table" desc="themeBoardLine" :to="$options.name">
        <guide-box-item title="r-tachyon">

            <div class="r-tachyon">
                <tachyon-grid
                  theme="themeBoardLine"
                  :row-height="56"
                  :header-row-height="56"
                  :row-count="5"
                  :items="gridItems"
                  @collection-change="onGridItemReset"
                  @scroll="onGridScrollEvent">
                    <columns>
                        <tachyon-column header-text="번호" data-field=""></tachyon-column>
                        <tachyon-column header-text="발신상태" data-field=""></tachyon-column>
                        <tachyon-column header-text="알람구분" data-field=""></tachyon-column>
                        <tachyon-column header-text="내용" data-field=""></tachyon-column>
                        <tachyon-column header-text="로봇명" data-field=""></tachyon-column>
                        <tachyon-column header-text="서비스" data-field=""></tachyon-column>
                        <tachyon-column header-text="발신 일시 / 조치 일시" data-field=""></tachyon-column>
                        <tachyon-column header-text="소요시간" data-field=""></tachyon-column>
                        <tachyon-column header-text="수신 플랫폼" data-field=""></tachyon-column>
                    </columns>
                </tachyon-grid>
            </div><!-- //r-tachyon -->

        </guide-box-item>
        <guide-box-item title="r-tachyon round">

            <div class="r-tachyon round">
                <tachyon-grid
                  theme="themeBoardLine"
                  :row-height="64"
                  :header-row-height="64"
                  :row-count="4"
                  :items="gridItems"
                  @collection-change="onGridItemReset"
                  @scroll="onGridScrollEvent">
                    <columns>
                        <tachyon-column header-text="이름" data-field=""></tachyon-column>
                        <tachyon-column header-text="아이디" data-field=""></tachyon-column>
                        <tachyon-column header-text="소속" data-field=""></tachyon-column>
                        <tachyon-column header-text="직책" data-field=""></tachyon-column>
                        <tachyon-column header-text="직급" data-field=""></tachyon-column>
                        <tachyon-column header-text="발신 일시" data-field=""></tachyon-column>
                        <tachyon-column header-text="발신 플랫폼" data-field=""></tachyon-column>
                        <tachyon-column header-text="발신상태" data-field=""></tachyon-column>
                        <tachyon-column header-text="수신 플랫폼" data-field=""></tachyon-column>
                    </columns>
                </tachyon-grid>
                <div class="r-tachyon__footer">
                    <div class="r-tachyon__footer-l">
                        <com-paging
                          v-model="pageNum"
                          :page-count="pageCount"
                          :page-range="5"></com-paging>
                    </div>
                    <div class="r-tachyon__footer-r" v-if="false">
                        button
                    </div>
                </div>
                <div class="r-tachyon__footer" v-if="false">
                    <com-paging
                      v-model="pageNum"
                      :page-count="pageCount"
                      :page-range="5"></com-paging>
                </div>
            </div><!-- //r-tachyon -->

        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-tachyon',
    components: {
    },
	data() {
		return {
          pageNum: 1,
          pageCount: 20,
          gridItems: []
        };
	},
    mounted() {
    },
    methods: {
      onGridItemReset() {
        console.log('reset');
      },
      onGridScrollEvent() {
        console.log('scroll');
      }
	},
};
</script>
<style scoped>
</style>
