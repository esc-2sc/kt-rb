<template>
    <div>
        login content
        <input type="text" id="litepicker">
        <!--<vue-rangedate-picker></vue-rangedate-picker>-->
      <br><br>
      <vue-rangedate-picker :months="this.months" :shortDays="this.shortDays" :captions=this.captions i18n="EN" format="YYYY-MM-DD"></vue-rangedate-picker>
      <br><br>
      <vue-rangedate-picker class="com-calendar" :months="this.months" :shortDays="this.shortDays" :captions=this.captions i18n="EN" format="YYYY-MM-DD"></vue-rangedate-picker>

      <br><br>
      <div class="label-list">
        <ul class="label-box">
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-106</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-104</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">T-T503</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-104</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-106</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-104</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-106</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-104</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-106</span>
          </li>
          <li>
            <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
            <span class="label-name">B-104</span>
          </li>
        </ul>
      </div><!--//label-list-->

      <br><br>
      <div class="com-layer">
        <div class="com-layer-header">
          <button class="btn-close"><img src="/resources/images/svg/icon-close.svg" alt=""></button>
          <h2>2022.05.19</h2>
        </div><!-- //com-layer-header -->
        <div class="com-layer-body">
          <div class="graph-view">
            <div class="view-header">
              <div class="view-item">
                <div class="cell">장애물감지</div>
                <div class="cell time">시간별</div>
                <div class="cell">금지구역진입</div>
                </div>
            </div>
            <div class="view-body">
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:63px"></span><span class="number">8</span>
                </div>
                <div class="cell time">01:00</div>
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">02:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar"></span><span class="number"></span>
                </div>
                <div class="cell time">03:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:63px"></span><span class="number">8</span>
                </div>
                <div class="cell time">04:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">05:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">06:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">07:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">08:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">09:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">10:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">11:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">12:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">13:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">14:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">15:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">16:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
              <div class="view-item">
                <div class="cell">
                  <span class="bar" style="width:13px"></span><span class="number">1</span>
                </div>
                <div class="cell time">17:00</div>
                <div class="cell">
                  <span class="bar" style="width:48px"></span><span class="number">5</span>
                </div>
              </div><!-- //view-item -->
            </div><!-- //view-body -->
          </div><!--//graph-view-->
        </div><!-- //com-layer-body -->
      </div>
      <br><br>
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
