<template>
    <div>
        login content
        <input type="text" id="litepicker">
        <!--<vue-rangedate-picker></vue-rangedate-picker>-->
      <br><br>
      <vue-rangedate-picker :months="this.months" :shortDays="this.shortDays" :captions=this.captions i18n="EN" format="YYYY-MM-DD"></vue-rangedate-picker>
      <br><br>
      <vue-rangedate-picker class="com-calendar" :months="this.months" :shortDays="this.shortDays" :captions=this.captions i18n="EN" format="YYYY-MM-DD"></vue-rangedate-picker>

    </div>
</template>

<script>
import Litepicker from 'litepicker';
import VueRangedatePicker from 'vue-rangedate-picker';
export default {
    name: 'login',
    components: {VueRangedatePicker},
	data() {
    return {
      selectedDate: {
        start: '',
        end: '',
      },
      captions:{
        title: '',
        ok_button: '확인'
      },
      shortDays:['일','월','화','수','목','금','토'],
      months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    };
	},
	methods: {
	},
    mounted() {
    const picker = new Litepicker({
      element: document.getElementById('litepicker')
    });
    }
};
</script>

<style scoped>
</style>
