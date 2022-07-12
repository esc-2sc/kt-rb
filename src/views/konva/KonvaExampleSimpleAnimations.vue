<template>
  <div class="detail-content">
    <v-stage ref="stage" :config="stageSize">
      <v-layer ref="layer">
        <v-rect
            ref="rect"
            @dragstart="changeSize"
            @dragend="changeSize"
            :config="{
            x: 0,
            y: 0,
            width: 50,
            height: 50,
            fill: 'green',
            draggable: true
          }"
        />
        <v-regular-polygon
            ref="hexagon"
            :config="{
          x: 200,
          y: 200,
          sides: 3,
          radius: 20,
          fill: 'red'
        }"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
// https://konvajs.org/docs/vue/
import Konva from "konva";
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  name: 'KonvaExampleSimpleAnimations',
  data() {
    return {
      configKonva: {},
      stageSize: {
        width,
        height
      },
    };
  },
  mounted() {
    const vm = this;
    const amplitude = 100;
    const period = 5000;

    // in ms
    const centerX = vm.$refs.stage.getNode().getWidth() / 2;
    const hexagon = this.$refs.hexagon.getNode();

    // example of Konva.Animation
    const anim = new Konva.Animation(function(frame) {
      hexagon.setX(
          amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
      );
    }, hexagon.getLayer());

    anim.start();
  },
  methods: {
    changeSize(e) {
      // to() is a method of `Konva.Node` instances
      e.target.to({
        scaleX: Math.random() + 0.8,
        scaleY: Math.random() + 0.8,
        duration: 0.2
      });
    }
  },
};
</script>

<style scoped>
</style>
