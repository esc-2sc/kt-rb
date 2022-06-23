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
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
</style>
