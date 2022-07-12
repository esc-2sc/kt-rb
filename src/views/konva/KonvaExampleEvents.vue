<template>
  <div class="detail-content">
    <v-stage ref="stage" :config="stageSize">
      <v-layer ref="layer">
        <v-regular-polygon
            @mousemove="handleMouseMove"
            @mouseout="handleMouseOut"
            :config="{
            x: 80,
            y: 120,
            sides: 3,
            radius: 80,
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4
          }"
        />
        <v-text ref="text" :config="{
          x: 10,
          y: 10,
          fontFamily: 'Calibri',
          fontSize: 24,
          text: text,
          fill: 'black'
        }" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
// https://konvajs.org/docs/vue/
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  name: 'KonvaExampleEvents',
  data() {
    return {
      configKonva: {},
      stageSize: {
        width,
        height
      },
      text: ''
    };
  },
  mounted() {
  },
  methods: {
    writeMessage(message) {
      this.text = message;
    },
    handleMouseOut(event) {
      this.writeMessage('Mouseout triangle');
    },
    handleMouseMove(event) {
      const mousePos = this.$refs.stage.getNode().getPointerPosition();
      const x = mousePos.x - 190;
      const y = mousePos.y - 40;
      this.writeMessage('x: ' + x + ', y: ' + y);
    }
  },
};
</script>

<style scoped>
</style>
