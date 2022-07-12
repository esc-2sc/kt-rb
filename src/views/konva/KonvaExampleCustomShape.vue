<template>
  <div class="detail-content">
    <v-stage ref="stage" :config="stageSize">
      <v-layer>
        <v-shape :config="{
        sceneFunc: function(context, shape) {
          context.beginPath();
          context.moveTo(20, 50);
          context.lineTo(220, 80);
          context.quadraticCurveTo(150, 100, 260, 170);
          context.closePath();

          // special Konva.js method
          context.fillStrokeShape(shape);
        },
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      }"/>
        <v-text :config="{text: 'Some text on canvas', fontSize: 15}"/>
        <v-rect :config="{
          x:220,
          y: 250,
          width: 100,
          height: 100,
          fill: 'red',
          shadowBlur: 10
        }"
        />
        <v-circle :config="{
          x: 400,
          y: 300,
          radius: 50,
          fill: 'green'
        }"
        />
        <v-line :config="{
        x: 220,
        y: 400,
        points: [0, 0, 100, 0, 100, 100],
        tension: 0.5,
        closed: true,
        stroke: 'black',
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        fillLinearGradientColorStops: [0, 'red', 1, 'yellow']
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
  name: 'KonvaExampleCustomShape',
  data() {
    return {
      configKonva: {},
      stageSize: {
        width: width,
        height: height
      }
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
