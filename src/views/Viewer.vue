<template>
    <div class="viewer">
        <div class="content-map">
            <div class="map-inner">
                <img src="/resources/images/temp/temp_map.png" alt="">
            </div>
        </div><!-- // content-map -->
        <aside class="control-robot">
            <div class="control-robot__info">
                <div class="info-robot">
                    <span class="robot-model">SR01_00.00.00.96.E7.C5</span>
                    <a href="#" class="robot-change">로봇변경</a>
                </div>
                <div class="info-map">
                    <span class="map-location">수라채그릴</span>
                    <span class="map-num">641</span>
                </div>
            </div><!-- //control-robot__info -->
            <div class="control-robot__panel">
                <figure class="panel-img"><img src="/resources/images/temp/temp_robot_model_1.png" alt=""></figure>
                <div class="a-tab-5 round panel-tab">
                    <button selected>Map</button>
                    <button>Zone</button>
                </div>
                <!-- map -->
                <div class="panel-content scroll map">
                    <div class="control-item">
                        <div class="control-item__header">
                            <span class="label">주행상태 분석</span>
                            <label class="a-switch">
                                <input type="checkbox" checked>
                                <span class="icon"></span>
                            </label><!-- //a-switch -->
                        </div><!-- //control-item__header -->
                        <div class="control-item__content">
                            <vx-combobox
                              placeholder="선택"
                              v-model="comboboxData1SelectedValue"
                              :items="comboboxData1"
                              :row-count="getMaxRowCount(comboboxData1)"
                              label-field="label"
                              value-field="value"></vx-combobox>
<!--                            <select class="r-select">-->
<!--                                <option>장애물 감지</option>-->
<!--                            </select>-->
                        </div><!-- //control-item__content -->
                    </div>
                    <div class="control-item">
                        <div class="control-item__header">
                            <span class="label">금지구역 진입 분석</span>
                            <label class="a-switch">
                                <input type="checkbox">
                                <span class="icon"></span>
                            </label><!-- //a-switch -->
                        </div><!-- //control-item__header -->
                    </div>
                    <div class="control-item disabled">
                        <div class="control-item__header">
                            <span class="label">지도 완성도 분석</span>
                            <label class="a-switch">
                                <input type="checkbox">
                                <span class="icon"></span>
                            </label><!-- //a-switch -->
                        </div>
                        <div class="control-item__content">
                            <div class="r-eyes">
                                <div class="r-eyes__item">
                                    <span class="label">경계선 분석</span>
                                    <label class="r-eye-toggle">
                                        <input type="checkbox" class="r-eye-toggle__input" checked>
                                        <span class="r-eye-toggle__label"></span>
                                    </label><!-- //r-eye-toggle -->
                                </div>
                                <div class="r-eyes__item">
                                    <span class="label">주행영역 노이즈</span>
                                    <label class="r-eye-toggle">
                                        <input type="checkbox" class="r-eye-toggle__input" checked>
                                        <span class="r-eye-toggle__label"></span>
                                    </label><!-- //r-eye-toggle -->
                                </div>
                                <div class="r-eyes__item">
                                    <span class="label">라벨 지정 적정성</span>
                                    <label class="r-eye-toggle">
                                        <input type="checkbox" class="r-eye-toggle__input">
                                        <span class="r-eye-toggle__label"></span>
                                    </label><!-- //r-eye-toggle -->
                                </div>
                            </div><!-- //r-eyes -->
                        </div><!-- //control-item__content -->
                    </div>
                </div><!-- //map -->
                <!-- zone -->
                <div class="panel-content scroll zone" style="display: none;">
                    <div class="r-eyes">
                        <div class="r-eyes__item">
                            <span class="label">A</span>
                            <label class="r-eye-toggle">
                                <input type="checkbox" class="r-eye-toggle__input" checked>
                                <span class="r-eye-toggle__label"></span>
                            </label><!-- //r-eye-toggle -->
                        </div>
                        <div class="r-eyes__item">
                            <span class="label">B</span>
                            <label class="r-eye-toggle">
                                <input type="checkbox" class="r-eye-toggle__input" checked>
                                <span class="r-eye-toggle__label"></span>
                            </label><!-- //r-eye-toggle -->
                        </div>
                        <div class="r-eyes__item">
                            <span class="label">C</span>
                            <label class="r-eye-toggle">
                                <input type="checkbox" class="r-eye-toggle__input">
                                <span class="r-eye-toggle__label"></span>
                            </label><!-- //r-eye-toggle -->
                        </div>
                        <div class="r-eyes__item">
                            <span class="label">D</span>
                            <label class="r-eye-toggle">
                                <input type="checkbox" class="r-eye-toggle__input">
                                <span class="r-eye-toggle__label"></span>
                            </label><!-- //r-eye-toggle -->
                        </div>
                        <div class="r-eyes__item">
                            <span class="label">E</span>
                            <label class="r-eye-toggle">
                                <input type="checkbox" class="r-eye-toggle__input">
                                <span class="r-eye-toggle__label"></span>
                            </label><!-- //r-eye-toggle -->
                        </div>
                        <div class="r-eyes__item">
                            <span class="label">F</span>
                            <label class="r-eye-toggle">
                                <input type="checkbox" class="r-eye-toggle__input">
                                <span class="r-eye-toggle__label"></span>
                            </label><!-- //r-eye-toggle -->
                        </div>
                    </div><!-- //r-eyes -->
                </div><!-- //zone -->
            </div>
        </aside><!-- //control-robot -->
        <div class="control-map" :class="{'active': isActive}">
            <div class="control-map__top">
                <div class="r-btns-icon column">
                    <button @click="onChangeOpenMenu"><img src="/resources/images/svg/format-list.svg" alt=""></button>
                    <button><img src="/resources/images/svg/map.svg" alt=""></button>
                </div>
            </div>
            <div class="control-map__bottom">
                <div class="r-btns-icon column">
                    <button><img src="/resources/images/svg/signal.svg" alt=""></button>
                    <button><img src="/resources/images/svg/label-off.svg" alt=""></button>
                </div>
                <div class="r-zoom-in-out">
                    <button class="btn-in"><img src="/resources/images/svg/plus.svg" alt=""></button>
                    <div class="graph"><span style="height:50%"></span></div>
                    <button class="btn-out"><img src="/resources/images/svg/minus.svg" alt=""></button>
                </div>
            </div>
        </div><!-- //control-map -->
        <div class="control-timeline">
            <div class="timeline-filter">
                <div class="a-tab-5 round date-mode">
                    <button>TODAY</button>
                    <button selected>History</button>
                </div>
                <div class="r-select-calendar date-current">4월 20일 ~ 5월 19일</div>
                <div class="a-tab-5 round date-type">
                    <button selected>일별</button>
                    <button>시간별</button>
                    <button>요일별</button>
                    <button>월별</button>
                </div>
            </div>
            <div class="timeline-chart">
                <div class="timeline-nav">
                    <navigation-chart/>
                </div>
            </div>
        </div><!-- //control-timeline -->
        <div class="graph-layer">
          <div class="graph-layer-header">
            <button class="btn-close"><img src="/resources/images/svg/icon-close.svg" alt=""></button>
            <h2>2022.05.19</h2>
          </div><!-- //com-layer-header -->
          <div class="graph-layer-body">
            <div class="graph-view">
              <div class="view-header">
                <div class="view-item">
                  <div class="cell">장애물감지</div>
                  <div class="cell time">시간별</div>
                  <div class="cell">금지구역진입</div>
                </div>
              </div>
              <div class="view-body scroll">
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
        </div><!--//com-layer-->
        <div class="label-list">
          <ul class="label-box">
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-01.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-02.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-03.svg" alt=""></span>
              <span class="label-name">T-T503</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-04.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-05.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-06.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-07.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-08.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-09.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-10.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-11.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-12.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-13.svg" alt=""></span>
              <span class="label-name">T-T503</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-14.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-15.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-16.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-17.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-18.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-19.svg" alt=""></span>
              <span class="label-name">B-106</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-20.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-21.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
            <li>
              <span class="label-icon"><img src="/resources/images/svg/icon-label-22.svg" alt=""></span>
              <span class="label-name">B-104</span>
            </li>
          </ul>
        </div><!--//label-list-->
        <div class="map-info-window" :class="{'open': isActive}">
            <div class="map-info__header">
                <span class="info-date">2022-12-28</span>
                <span class="info-time">17:05:23</span>
                <span class="r-btns-icon"><button><img src="/resources/images/svg/icon-restart.svg" alt="reload"></button></span>
            </div><!-- // map-info__header --->
            <div class="map-info__body">
              <div class="info-item map">
                <h2>MAP</h2>
                <div class="info-box">
                  <div class="label"><span>라벨</span><em class="bg-blue">23</em></div>
                  <div class="label"><span>충전</span><em class="bg-green">D1</em></div>
                  <div class="label"><span>대기</span><em class="bg-yellow">W1</em></div>
                </div>
                <p class="info-txt">현재지도 생성일자 : 2022.08.09</p>
              </div>
              <div class="info-item zone">
                <h2>ZONE</h2>
                <div class="info-box">
                  <div class="label"><span>ZONE</span><em class="bg-blue">14</em></div>
                  <p class="info-txt">평균 넓이: 약 50 cm²</p>
                </div>
              </div>
              <div class="info-item alerts">
                <h2>RECENT ALERTS</h2>
                <div class="alerts-list">
                  <div class="list-item">
                    <strong class="tit">금지구역 진입</strong>
                    <span class="date">2022-11-02/01:03:38</span>
                    <span class="icon"><img src="/resources/images/svg/icon-alerts-warning.svg" alt=""></span>
                  </div><!--// list-item -->
                  <div class="list-item">
                    <strong class="tit">장애물 감지</strong>
                    <span class="date">2022-11-02/01:03:38</span>
                    <span class="icon"><img src="/resources/images/svg/icon-alerts-emergency.svg" alt=""></span>
                  </div><!--// list-item -->
                  <div class="list-item">
                    <strong class="tit">주행취소</strong>
                    <span class="date">2022-11-02/01:03:38</span>
                    <span class="icon"><img src="/resources/images/svg/icon-alerts-noun-robot.svg" alt=""></span>
                  </div><!--// list-item -->
                  <div class="list-item">
                    <strong class="tit">비상버튼 정지</strong>
                    <span class="date">2022-11-02/01:03:38</span>
                    <span class="icon"><img src="/resources/images/svg/icon-alerts-compress.svg" alt=""></span>
                  </div><!--// list-item -->
                  <div class="list-item">
                    <strong class="tit">플랫폼 요청 정지</strong>
                    <span class="date">2022-11-02/01:03:38</span>
                    <span class="icon"><img src="/resources/images/svg/icon-alerts-pan.svg" alt=""></span>
                  </div><!--// list-item -->
                  <div class="list-item">
                    <strong class="tit">SM 요청 정지</strong>
                    <span class="date">2022-11-02/01:03:38</span>
                    <span class="icon"><img src="/resources/images/svg/icon-alerts-wifi.svg" alt=""></span>
                  </div><!--// list-item -->
                </div><!--//alerts-list-->
                <div class="r-btns-line">
                  <button>더보기</button>
                </div>
              </div>
            </div><!-- //map-info__body -->
        </div><!-- //map-info-window -->
    </div>
</template>

<script>
import NavigationChart from "@/views/layouts/NavigationChart";
export default {
    name: 'Viewer',
    components: {
      NavigationChart
    },
	data() {
		return {
            isActive:0,
              comboboxData1SelectedValue: null,
              comboboxData1: [
                {label: '장애물감지', value: '' },
                {label: '주행취소', value: '' },
                {label: '주행실패', value: '' },
                {label: '플랫폼요청정지', value: '' },
                {label: 'SM요청정지', value: '' },
                {label: '비상버튼정지', value: '' },
                {label: '금지구역진입', value: '' },
              ],
        };
	},
    mounted() {
      this.comboboxData1SelectedValue = this.comboboxData1[0];
    },
    methods: {
        onChangeOpenMenu(){
            this.isActive = !this.isActive;
        },
      getMaxRowCount(items = [],maxCount=5) {
        return Math.min(items.length, maxCount);
      }
	},
};
</script>
