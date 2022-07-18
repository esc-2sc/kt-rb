<template>
  <div class="detail-content">
    <v-stage ref="stage"
             :config="stageSize"
             @mouseover="onMouseover"
             @mouseout="onMouseout"
             @mousedown="onMousedown"
             @mouseup="onMouseup"
             @mousemove="onMousemove"
             @dragmove="onDragmove">
      <v-layer>
        <template v-for="(item, i) in data">
          <v-rect :config="{
            x: item.x,
            y: item.y,
            width:5,
            height:5,
            fill: item.color,
            id: item.id,
          }"></v-rect>
        </template>
        <v-label ref="tooltip" :config="{
          opacity: .75,
          visible: false,
          listening: false,
          }">
          <v-tag :config="{
            fill: 'black',
            pointerDirection: 'down',
            pointerWidth: 10,
            pointerHeight: 10,
            lineJoin: 'round',
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowOffsetY: 10,
            shadowOpacity: 0.2,
          }"></v-tag>
          <v-text :config="textConfig"></v-text>
        </v-label>
      </v-layer>
<!--      <v-layer ref="tooltipLayer">-->
<!--        -->
<!--      </v-layer>-->
<!--      <v-layer ref="dragLayer"></v-layer>-->
    </v-stage>
  </div>
</template>

<script>
// https://konvajs.org/docs/vue/
import Konva from 'konva';
const width = window.innerWidth - 96;
const height = window.innerHeight - 228;
const colors = ['#C0F9E1','#5FE8AE','#42BC90','#04B978','#00462D']
// const colors = ['red', 'orange', 'cyan', 'green', 'blue', 'purple'];
export default {
  name: 'KonvaExampleNodes20000',
  data() {
    return {
      configKonva: {},
      data: [],
      stageSize: {
        width: width,
        height: height
      },
      textConfig: {
        text: '',
        fontFamily: 'Calibri',
        fontSize: 18,
        padding: 5,
        fill: 'white',
      }
    };
  },
  mounted() {
    for (var n = 0; n < 20000; n++) {
      var x = Math.random() * width;
      var y = height + Math.random() * 200 - 100 + (height / width) * -1 * x;
      this.data.push({
        x: x,
        y: y,
        id: `circle-${n}`,
        color: colors[Math.round(Math.random() * 5)],
      });
    }
  },
  methods: {
    onMouseover(e) {
      const tooltip = this.$refs.tooltip.getNode();
      var node = e.target;
      // console.log(e.target.getStage().getPointerPosition())
      if (node.colorKey) {
        // update tooltip
        var mousePos = node.getStage().getPointerPosition();
        tooltip.position({
          x: mousePos.x,
          y: mousePos.y - 5,
        });
        tooltip
        .getText()
        .text('node: ' + node._id + ', color: ' + node.colorKey);
        tooltip.show();
      }
    },
    onMousemove(e) {
    },
    onDragmove(e) {
    },
    onMousedown(e) {
      const tooltip = this.$refs.tooltip.getNode();
      tooltip.hide();
    },
    onMouseout(e) {
      const tooltip = this.$refs.tooltip.getNode();
      tooltip.hide();
      // console.log(e);
    },
    onMouseup(e) {
      // console.log(e.nodes);
    },
  },
};
</script>

<style scoped>
</style>
