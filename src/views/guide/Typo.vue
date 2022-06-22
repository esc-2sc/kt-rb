<template>
    <guide-box title="Typo" desc="" :to="$options.name">
        <guide-box-item title="Default : Font-size:13px, Line-height:1.53846 / Line-height 수치 20px 기준">
          <table>
            <tr>
              <td style="font-size:36px;font-weight:700;">타이포 Display / Font-size : 36px / Font-weight : 700<br />타이포 Display / Font-size : 36px / Font-weight : 700</td>
            </tr>
            <tr>
              <td style="font-size:36px;font-weight:400;">타이포 Display / Font-size : 36px / Font-weight : 400<br />타이포 Display / Font-size : 36px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:32px;font-weight:700;">타이포 Display / Font-size : 32px / Font-weight : 700<br />타이포 Display / Font-size : 32px / Font-weight : 700</td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:400;">타이포 Display / Font-size : 24px / Font-weight : 400<br />타이포 Display / Font-size : 24px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:20px;font-weight:700;">타이포 Display / Font-size : 20px / Font-weight : 700<br />타이포 Display / Font-size : 20px / Font-weight : 700</td>
            </tr>
            <tr>
              <td style="font-size:18px;font-weight:600;">타이포 Display / Font-size : 18px / Font-weight : 600<br />타이포 Display / Font-size : 18px / Font-weight : 600</td>
            </tr>
            <tr>
              <td style="font-size:20px;font-weight:400;">타이포 Display / Font-size : 20px / Font-weight : 400<br />타이포 Display / Font-size : 20px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:15px;font-weight:400;">타이포 Display / Font-size : 15px / Font-weight : 400<br />타이포 Display / Font-size : 15px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:13px;font-weight:400;">타이포 Display / Font-size : 13px / Font-weight : 400<br />타이포 Display / Font-size : 13px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:12px;font-weight:400;">타이포 Display / Font-size : 12px / Font-weight : 400<br />타이포 Display / Font-size : 12px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:11px;font-weight:400;">타이포 Display / Font-size : 11px / Font-weight : 400<br />타이포 Display / Font-size : 11px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:10px;font-weight:400;">타이포 Display / Font-size : 10px / Font-weight : 400<br />타이포 Display / Font-size : 10px / Font-weight : 400</td>
            </tr>
            <tr>
              <td style="font-size:20px;font-weight:600;">타이포 Display / Font-size : 20px / Font-weight : 600<br />타이포 Display / Font-size : 20px / Font-weight : 600</td>
            </tr>
            <tr>
              <td style="font-size:15px;font-weight:600;">타이포 Display / Font-size : 15px / Font-weight : 600<br />타이포 Display / Font-size : 15px / Font-weight : 600</td>
            </tr>
            <tr>
              <td style="font-size:13px;font-weight:600;">타이포 Display / Font-size : 13px / Font-weight : 600<br />타이포 Display / Font-size : 13px / Font-weight : 600</td>
            </tr>
            <tr>
              <td style="font-size:12px;font-weight:600;">타이포 Display / Font-size : 12px / Font-weight : 600<br />타이포 Display / Font-size : 12px / Font-weight : 600</td>
            </tr>
            <tr>
              <td style="font-size:11px;font-weight:600;">타이포 Display / Font-size : 11px / Font-weight : 600<br />타이포 Display / Font-size : 11px / Font-weight : 600</td>
            </tr>
          </table>
        </guide-box-item>
    </guide-box>
</template>

<script>
import fileToInnerHTML from "@/views/guide/mixin/fileToInnerHTML";
export default {
	mixins: [fileToInnerHTML],
    name: 'guide-typo',
	props: {},
	data() {
		return {
        };
	},
    mounted() {
    	// console.log(this.axios);
    },
    methods: {
	},
};
</script>
<style scoped>
table{
  color:#646669;
  line-height:1.53846;
}
table td{
  padding:20px;
  border:1px solid #ddd;
}
</style>
