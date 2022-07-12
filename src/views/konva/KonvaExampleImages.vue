<template>
  <div class="detail-content">
    <v-stage ref="stage" :config="stageSize">
      <v-layer ref="layer">
        <v-image :config="{
            image: image
          }"/>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
// https://konvajs.org/docs/vue/
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  name: 'KonvaExampleImages',
  data() {
    return {
      configKonva: {},
      stageSize: {
        width,
        height
      },
      image: null
    };
  },
  created() {
    const image = new Image();
    image.src = "https://konvajs.org/assets/yoda.jpg";
    image.onload = (e) => {
      // set image only when it is loaded
      console.log(e);
      this.image = image;
    };
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
