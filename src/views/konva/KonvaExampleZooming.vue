<template>
  <div class="detail-content">
    <v-stage ref="stage" :config="stageSize">
      <v-layer>
        <v-circle ref="circle" @wheel="onWheel" :config="circleConfig" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
// https://konvajs.org/docs/vue/
const width = window.innerWidth - 96;
const height = window.innerHeight - 228;

export default {
  name: 'KonvaExampleZooming',
  data() {
    return {
      configKonva: {},
      stageSize: {
        width: width,
        height: height
      },
      circleConfig: {
        x: width / 2,
        y: height / 2,
        radius: 100,
        fill: 'green',
      },
      scaleBy: 1.01,
    };
  },
  mounted() {
  },
  methods: {
    onWheel(e) {
      console.log(e.type);
      const stage = this.$refs.stage.getNode();
      console.log(stage);
      e.evt.preventDefault();
      var oldScale = stage.scaleX();
      var pointer = stage.getPointerPosition();

      var mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
      };

      let direction = e.evt.deltaY > 0 ? 1 : -1;
      if (e.evt.ctrlKey) {
        direction = -direction;
      }
      var newScale = direction > 0 ? oldScale * this.scaleBy : oldScale / this.scaleBy;
      stage.scale({ x: newScale, y: newScale });

      var newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      stage.position(newPos);
    }
  },
};
</script>

<style scoped>
</style>
