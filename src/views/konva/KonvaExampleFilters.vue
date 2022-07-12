<template>
  <div class="detail-content">
    <v-stage ref="stage" :config="stageSize">
      <v-layer ref="layer">
        <v-rect
            ref="rect"
            @mousemove="handleMouseMove"
            :config="{
            filters: filters,
            noise: 1,
            x: 10,
            y: 10,
            width: 500,
            height: 500,
            fill: color,
            shadowBlur: 10
          }"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
// https://konvajs.org/docs/vue/
const width = window.innerWidth;
const height = window.innerHeight;
import Konva from 'konva';

export default {
  name: 'KonvaExampleFilters',
  data() {
    return {
      configKonva: {},
      stageSize: {
        width,
        height
      },
      color: 'green',
      filters: [Konva.Filters.Noise]
    };
  },
  mounted() {
    const rectNode = this.$refs.rect.getNode();
    rectNode.cache();
  },
  updated() {
    // recache
    const rectNode = this.$refs.rect.getNode();
    // may need to redraw layer manually
    rectNode.cache();
  },
  methods: {
    handleMouseMove() {
      this.color = Konva.Util.getRandomColor();
    }
  },
};
</script>

<style scoped>
</style>
