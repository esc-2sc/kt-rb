<template>
  <div class="detail-content">
    <v-stage ref="stage" :config="stageSize">
      <v-layer ref="layer">
        <v-text
            @dragstart="handleDragStart"
            @dragend="handleDragEnd"
            :config="{
            text: 'Draggable Text',
            x: 50,
            y: 50,
            draggable: true,
            fill: isDragging ? 'green' : 'black'
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

export default {
  name: 'KonvaExampleDragDrop',
  data() {
    return {
      configKonva: {},
      stageSize: {
        width: width,
        height: height
      },
      isDragging: false
    };
  },
  methods: {
    handleDragStart() {
      this.isDragging = true;
    },
    handleDragEnd() {
      this.isDragging = false;
    }
  },
};
</script>

<style scoped>
</style>
