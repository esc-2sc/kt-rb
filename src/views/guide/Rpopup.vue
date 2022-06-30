<template>
  <guide-box title="r-popup" desc="Default" :to="$options.name">
    <guide-box-item title="Default">

      <div class="r-popup">
        <div class="r-popup__header">
          <div class="title">Title</div>
          <div class="func">
            <button class="btn-close"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
          </div>
        </div><!-- //r-popup__header -->
        <div class="r-popup__body">
          <div style="text-align:center">body</div>
        </div><!-- // r-popup__body -->
        <div class="r-popup__footer">
          <div class="btn-wrap right">
            <button type="button" class="a-btn-type-1 color--white">취소</button>
            <button type="button" class="a-btn-type-1 color--blue">권한변경</button>
          </div>
        </div><!-- r-popup__footer -->
      </div><!-- //r-popup -->

    </guide-box-item>

    <guide-box-item title="auto scroll">
      <button type="button" class="a-btn-type-1 color--white" @click="openPopup1">기본</button>
      <button type="button" class="a-btn-type-1 color--blue" @click="openPopup2">최대</button>

      <vx-popup ref="autoScroll1">
        <div class="r-popup-auto">
          <div class="r-popup-auto__content">

            <div class="r-popup">
              <div class="r-popup__header">
                <div class="title">Title</div>
                <div class="func">
                  <button class="btn-close" @click="closePopup1"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
                </div>
              </div><!-- //r-popup__header -->
              <div class="r-popup__body">
                <div style="text-align:center;">body</div>
              </div><!-- // r-popup__body -->
              <div class="r-popup__footer">
                <div class="btn-wrap right">
                  <button type="button" class="a-btn-type-1 color--white" @click="closePopup1">취소</button>
                  <button type="button" class="a-btn-type-1 color--blue" @click="closePopup1">권한변경</button>
                </div>
              </div><!-- r-popup__footer -->
            </div><!-- //r-popup -->

          </div><!-- //r-popup-auto__content -->
        </div><!-- //r-popup-auto -->
      </vx-popup>

      <vx-popup ref="autoScroll2">
        <div class="r-popup-auto">
          <div class="r-popup-auto__content">

            <div class="r-popup">
              <div class="r-popup__header">
                <div class="title">Title</div>
                <div class="func">
                  <button class="btn-close" @click="closePopup2"><img src="/resources/images/svg/icon-close.svg" alt="close"></button>
                </div>
              </div><!-- //r-popup__header -->
              <div class="r-popup__body">
                <div style="text-align:center;height:3000px;">body</div>
              </div><!-- // r-popup__body -->
              <div class="r-popup__footer">
                <div class="btn-wrap right">
                  <button type="button" class="a-btn-type-1 color--white" @click="closePopup2">취소</button>
                  <button type="button" class="a-btn-type-1 color--blue" @click="closePopup2">권한변경</button>
                </div>
              </div><!-- r-popup__footer -->
            </div><!-- //r-popup -->

          </div><!-- //r-popup-auto__content -->
        </div><!-- //r-popup-auto -->
      </vx-popup>


    </guide-box-item>
  </guide-box>
</template>

<script>
export default {
  name: 'guide-popup',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    openPopup1() {
      this.$refs.autoScroll1.open();
    },
    closePopup1() {
      this.$refs.autoScroll1.close();
    },
    openPopup2() {
      this.$refs.autoScroll2.open();
    },
    closePopup2() {
      this.$refs.autoScroll2.close();
    },
  },
};
</script>
<style scoped>
</style>
