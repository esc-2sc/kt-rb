<template>
  <div class="viewer">
    <v-stage ref="stage"
             :config="configKonva"
             @dragstart="handleDragstart"
             @dragend="handleDragend">
      <v-layer ref="layer">
        <v-image :config="{
            x: imagePos.x,
            y: imagePos.y,
            image: image
          }"/>
        <v-rect
            v-for="item in list"
            :key="item.id"
            :config="{
            x: item.x,
            y: item.y,
            width: item.width,
            height: item.height,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 0,
            rotation: item.rotation,
            id: item.id,
            numPoints: 5,
            innerRadius: 0,
            outerRadius: 0,
            fill: '#41d4dd',
            opacity: item.opacity,
            draggable: true,
            // scaleX: dragItemId === item.id ? item.scale * 1.2 : item.scale,
            // scaleY: dragItemId === item.id ? item.scale * 1.2 : item.scale,
            shadowColor: '#41d4dd',
            shadowBlur: dragItemId === item.id ? 0 : 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowOpacity: 0.5
          }"
        ></v-rect>
      </v-layer>
    </v-stage>
    <div class="content-map">
      <div class="map-inner">
        <img src="/resources/images/temp/temp_map.png" alt="">
      </div>
    </div><!-- // content-map -->
    <aside class="control-robot">
      <div class="control-robot__panel">
        <figure class="panel-img"><img src="/resources/images/temp/temp_robot_model_1.png" alt=""></figure>
        <div class="panel-robot-info">
          <div class="info-robot">
            <span class="robot-name">베어서빙로봇_판매형 </span>
            <span class="robot-model">00.00.00.46.00.00</span>
            <a href="#" class="robot-change">로봇변경</a>
          </div>
          <div class="info-map">
            <span class="map-location">수라채그릴</span>
          </div>
        </div><!-- //panel-robot`-info -->
        <div class="a-tab-5 round panel-tab">
          <button selected>Map</button>
          <button>Zone</button>
        </div>
        <!-- map -->
        <div class="panel-content map">
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
                  <label class="r-eye-toggle color--blue">
                    <input type="checkbox" class="r-eye-toggle__input" checked>
                    <span class="r-eye-toggle__label"></span>
                  </label><!-- //r-eye-toggle -->
                </div>
                <div class="r-eyes__item">
                  <span class="label">주행영역 노이즈</span>
                  <label class="r-eye-toggle color--orange">
                    <input type="checkbox" class="r-eye-toggle__input" checked>
                    <span class="r-eye-toggle__label"></span>
                  </label><!-- //r-eye-toggle -->
                </div>
                <div class="r-eyes__item">
                  <span class="label">라벨 지정 적정성</span>
                  <label class="r-eye-toggle color--green">
                    <input type="checkbox" class="r-eye-toggle__input">
                    <span class="r-eye-toggle__label"></span>
                  </label><!-- //r-eye-toggle -->
                </div>
                <div class="r-eyes__more">
                  <button class="btn-more">상세보기</button>
                </div>
              </div><!-- //r-eyes -->
            </div><!-- //control-item__content -->
          </div>
        </div><!-- //map -->
        <!-- zone -->
        <div class="panel-content zone" style="display: none;">
          <div class="r-eyes">
            <div class="r-eyes__item">
              <span class="label">A<em>20 m²</em></span>
              <label class="r-eye-toggle color--blue">
                <input type="checkbox" class="r-eye-toggle__input" checked>
                <span class="r-eye-toggle__label"></span>
              </label><!-- //r-eye-toggle -->
            </div>
            <div class="r-eyes__item">
              <span class="label">B <em>20 m²</em></span>
              <label class="r-eye-toggle color--green">
                <input type="checkbox" class="r-eye-toggle__input" checked>
                <span class="r-eye-toggle__label"></span>
              </label><!-- //r-eye-toggle -->
            </div>
            <div class="r-eyes__item">
              <span class="label">C<em>20 m²</em></span>
              <label class="r-eye-toggle color--purple">
                <input type="checkbox" class="r-eye-toggle__input">
                <span class="r-eye-toggle__label"></span>
              </label><!-- //r-eye-toggle -->
            </div>
            <div class="r-eyes__item">
              <span class="label">D<em>20 m²</em></span>
              <label class="r-eye-toggle color--pink">
                <input type="checkbox" class="r-eye-toggle__input">
                <span class="r-eye-toggle__label"></span>
              </label><!-- //r-eye-toggle -->
            </div>
            <div class="r-eyes__item">
              <span class="label">E<em>20 m²</em></span>
              <label class="r-eye-toggle color--orange">
                <input type="checkbox" class="r-eye-toggle__input">
                <span class="r-eye-toggle__label"></span>
              </label><!-- //r-eye-toggle -->
            </div>
            <div class="r-eyes__item">
              <span class="label">F<em>20 m²</em></span>
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
          <button class="btn-list" @click="onChangeOpenMenu" :class="{'selected': isActive}"></button>
          <button class="btn-zoom"></button>
        </div>
      </div>
      <div class="control-map__bottom">
        <div class="r-btns-icon column">
          <button class="btn-signal"></button>
          <button class="btn-label"></button>
        </div>
        <div class="r-zoom-in-out">
          <button class="btn-in"><img src="/resources/images/svg/plus.svg" alt=""></button>
          <div class="graph"><span style="height:50%"></span></div>
          <button class="btn-out"><img src="/resources/images/svg/minus.svg" alt=""></button>
        </div>
      </div>
    </div><!-- //control-map -->
    <div class="control-bar-legend">
      <div class="r-bar-legend__bar">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </div><!-- //control-bar-legend -->
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
                <div class="bar"><span style="width:63px"></span></div>
                <div class="number">8</div>
              </div>
              <div class="cell time">01:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">12</div>
              </div>
              <div class="cell time">02:00</div>
              <div class="cell">
                <div class="bar"><span style="width:48px"></span></div>
                <div class="number">15</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:0"></span></div>
                <div class="number">0</div>
              </div>
              <div class="cell time">03:00</div>
              <div class="cell">
                <div class="bar"><span style="width:48px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:63px"></span></div>
                <div class="number">8</div>
              </div>
              <div class="cell time">04:00</div>
              <div class="cell">
                <div class="bar"><span style="width:63px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">05:00</div>
              <div class="cell">
                <div class="bar"><span style="width:63px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">06:00</div>
              <div class="cell">
                <div class="bar"><span style="width:48px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">07:00</div>
              <div class="cell">
                <div class="bar"><span style="width:48px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">08:00</div>
              <div class="cell">
                <div class="bar"><span style="width:48px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">09:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">10:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">11:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <span class="number">1</span>
              </div>
              <div class="cell time">12:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <span class="number">5</span>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">13:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">14:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">15:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">16:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
              </div>
            </div><!-- //view-item -->
            <div class="view-item">
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">1</div>
              </div>
              <div class="cell time">17:00</div>
              <div class="cell">
                <div class="bar"><span style="width:13px"></span></div>
                <div class="number">5</div>
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
        <div class="info-label">
          <div class="info-box">
            <div class="label"><span>라벨</span><em class="bg-blue">23</em></div>
            <div class="label"><span>충전</span><em class="bg-green">D1</em></div>
            <div class="label"><span>대기</span><em class="bg-yellow">W1</em></div>
          </div>
          <div class="info-box">
            <div class="label"><span>Zone</span><em class="bg-blue">14</em></div>
            <p class="info-txt">평균 넓이: 약 50 cm²</p>
          </div>
          <div class="info-box map">
            <div class="label"><span>Map</span><em>141</em></div>
            <p class="info-txt">현재지도 생성일자 : 2022.09.08</p>
          </div>
        </div><!--//info-label-box-->
        <div class="info-date selected">
          <div class="date">4월20 ~ 5월19일</div>
          <div class="total">345건</div>
        </div>
      </div><!-- // map-info__header --->
      <div class="map-info__body scroll">
        <!--<h2>RECENT ALERTS</h2>-->
        <div class="alerts-list">
          <div class="list-item">
            <strong class="tit">금지구역 진입</strong>
            <span class="date">2022-11-02/01:03:38</span>
            <p class="txt">로봇이 금지구역에 진입했습니다</p>
            <span class="icon warning"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">장애물 감지</strong>
            <p class="txt">로봇에서 장애물이 감지됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon emergency"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">주행취소</strong>
            <p class="txt">로봇 화면에서 취소 버튼이 선택되어 주행이 취소됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon robot-cancel"></span>
          </div><!--// list-item -->
          <div class="list-item selected">
            <strong class="tit">주행실패</strong>
            <p class="txt">로봇의 내부 하드웨어 에러로 주행에 실패했습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon robot-noun"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">비상버튼 정지</strong>
            <p class="txt">로봇의 비상버튼이 선택되어 로봇이 정지됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon compress"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">플랫폼 요청 정지</strong>
            <p class="txt">플랫폼 요청에 의해 로봇이 정지됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon pan"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit selected">SM 요청 정지</strong>
            <p class="txt">로봇 내부 서비스매니저에서 오류가 발생해 주행이 취소됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon wifi"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">SM 요청 정지</strong>
            <p class="txt">로봇 내부 서비스매니저에서 오류가 발생해 주행이 취소됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon wifi"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">SM 요청 정지</strong>
            <p class="txt">로봇 내부 서비스매니저에서 오류가 발생해 주행이 취소됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon wifi"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">SM 요청 정지</strong>
            <p class="txt">로봇 내부 서비스매니저에서 오류가 발생해 주행이 취소됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon wifi"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">SM 요청 정지</strong>
            <p class="txt">로봇 내부 서비스매니저에서 오류가 발생해 주행이 취소됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon wifi"></span>
          </div><!--// list-item -->
          <div class="list-item">
            <strong class="tit">SM 요청 정지</strong>
            <p class="txt">로봇 내부 서비스매니저에서 오류가 발생해 주행이 취소됐습니다</p>
            <span class="date">2022-11-02/01:03:38</span>
            <span class="icon wifi"></span>
          </div><!--// list-item -->

        </div><!--//alerts-list-->
        <div class="r-btns-line"><button>더보기</button></div>
      </div><!-- //map-info__body -->
    </div><!-- //map-info-window -->
  </div>
</template>

<script>
// https://konvajs.org/docs/vue/
import NavigationChart from "@/views/layouts/NavigationChart";

export default {
  name: 'KonvaExample1',
  components: {
    NavigationChart
  },
  data() {
    return {
      image: null,
      imagePos: {
        x: 0,
        y: 0
      },
      list: [],
      dragItemId: null,
      configKonva: {},
      timerID: null,
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
  created() {
    const image = new Image();
    image.src = "/resources/images/map/01.png";
    image.onload = (e) => {
      // set image only when it is loaded
      console.log(e);
      // console.log(image.width, image.height);
      this.image = image;
      this.imagePos.width = image.width;
      this.imagePos.height = image.height;
      this.imagePos.x = (window.innerWidth/2) - image.width/2;
      this.imagePos.y = (window.innerHeight/2) - image.height/2;
    };
  },
  mounted() {
    this.comboboxData1SelectedValue = this.comboboxData1[0];
    window.addEventListener('resize', this.resize);
    this.resize();
  },
  methods: {
    resize() {
      // console.log(this.image.width, this.image.height);
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      this.configKonva.width = winW;
      this.configKonva.height = winH;

      if(this.imagePos.width && this.imagePos.height) {
        this.imagePos.x = (window.innerWidth/2) - this.imagePos.width/2;
        this.imagePos.y = (window.innerHeight/2) - this.imagePos.height/2;
      }

      clearTimeout(this.timerID);
      this.timerID = setTimeout(() => {
        this.list = [];
        for (let n = 0; n < 100; n++) {
          this.list.push({
            id: Math.round(Math.random() * 10000).toString(),
            x: Math.random() * winW,
            y: Math.random() * winH,
            rotation: Math.random() * 0,
            scale: 1,
            width: 15,
            height: 15,
            opacity: Math.random(),
            fill: 'green',
            strokeWidth: 0,
          });
        }

        console.log('resize');
      }, 150);

    },
    handleDragstart(e) {
      console.log('handleDragstart');
      // save drag element:
      this.dragItemId = e.target.id();
      // move current element to the top:
      const item = this.list.find(i => i.id === this.dragItemId);
      const index = this.list.indexOf(item);
      this.list.splice(index, 1);
      this.list.push(item);
    },
    handleDragend(e) {
      console.log('handleDragend');
      this.dragItemId = null;
    },
    onChangeOpenMenu(){
      this.isActive = !this.isActive;
    },
    getMaxRowCount(items = [],maxCount=5) {
      return Math.min(items.length, maxCount);
    }
  },
};
</script>

<style scoped>
</style>
