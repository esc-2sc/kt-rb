<template>
    <div class="viewer">
        <div class="content-map">
            <div class="map-inner">
                <img src="/resources/images/temp/temp_map.png" alt="">
            </div>
        </div><!-- // content-map -->
        <aside class="control-robot">
            <div>SR01_00.00.00.96.E7.C5 / 로봇변경</div>
            <div>
                <span>수라채그릴</span>
                <span>641</span>
            </div>
            <div class="control-robot__panel">
                <figure class="panel-img"><img src="/resources/images/temp/temp_robot_model_1.png" alt=""></figure>
                <div class="com-tab-1 panel-tab">
                    <button selected>Map</button>
                    <button>Zone</button>
                </div>
                <!-- map -->
                <div class="panel-content map">
                    <div>
                        <span class="label">주행상태 분석</span>
                        <span class="com-switch-1"><input type="checkbox"></span>
                    </div>
                    <div>
                        <span class="label">금지구역 진입 분석</span>
                        <span class="com-switch-1"><input type="checkbox"></span>
                    </div>
                    <div>
                        <span class="label">지도 완성도 분석</span>
                        <span class="com-switch-1"><input type="checkbox"></span>
                    </div>
                </div><!-- //map -->
                <!-- zone -->
                <div class="panel-content zone">
                    <div>
                        <span class="label">A</span>
                        <button>view/hide</button>
                    </div>
                    <div>
                        <span class="label">b</span>
                        <button>view/hide</button>
                    </div>
                    <div>
                        <span class="label">C</span>
                        <button>view/hide</button>
                    </div>
                    <div>
                        <span class="label">D</span>
                        <button>view/hide</button>
                    </div>
                    <div>
                        <span class="label">E</span>
                        <button>view/hide</button>
                    </div>
                    <div>
                        <span class="label">F</span>
                        <button>view/hide</button>
                    </div>
                </div><!-- //zone -->
            </div>
        </aside><!-- //control-robot -->
        <div class="control-map">
            <div class="control-map__top">
                <div class="com-btns-icon column">
                    <button><img src="/resources/images/svg/format-list.svg" alt=""></button>
                    <button><img src="/resources/images/svg/map.svg" alt=""></button>
                </div>
            </div>
            <div class="control-map__bottom">
                <div class="com-btns-icon column">
                    <button><img src="/resources/images/svg/signal.svg" alt=""></button>
                    <button><img src="/resources/images/svg/label-off.svg" alt=""></button>
                </div>
                <div class="com-zoom-in-out">
                    <button class="btn-in"><img src="/resources/images/svg/plus.svg" alt=""></button>
                    <div class="graph"><span style="height:50%"></span></div>
                    <button class="btn-out"><img src="/resources/images/svg/minus.svg" alt=""></button>
                </div>
            </div>
        </div><!-- //control-map -->
        <div class="control-timeline">
            <div class="timeline-filter">
                <div class="com-tab-1 date-mode">
                    <button>TODAY</button>
                    <button selected>History</button>
                </div>
                <div class="com-select-calendar date-current">4월 20일 ~ 5월 19일</div>
                <div class="com-tab-1 date-type">
                    <button selected>일별</button>
                    <button>시간별</button>
                    <button>요일별</button>
                    <button>월별</button>
                </div>
            </div>
            <div class="timeline-chart">
                <div class="timeline-nav"><img src="/resources/images/temp/temp_chart_timeline.png" alt=""></div>
            </div>
        </div><!-- //control-timeline -->
        <div class="map-info-window">
            <div>
                <span>2022-12-28</span>
                <span>17:05:23</span>
                <button>reload</button>
            </div>
            <div>
                <h2>MAP</h2>
                <div>
                    <div><span>라벨</span><em>23</em></div>
                    <div><span>충전</span><em>D1</em></div>
                    <div><span>대기</span><em>W1</em></div>
                </div>
                <p>현재지도 생성일자 : 2022.08.09</p>
            </div>
            <div>
                <h2>ZONE</h2>
                <div>
                    <div><span>ZONE</span><em>14</em></div>
                    <p>평균 넓이: 약 50 cm²</p>
                </div>
            </div>
            <div>
                <h2>RECENT ALERTS</h2>
                <div>
                    <div>
                        <strong>금지구역 진입</strong>
                        <span>2022-11-02/01:03:38</span>
                        <span>icon</span>
                    </div>
                </div>
                <div>
                    <button>더보기</button>
                </div>
            </div>
        </div><!-- //map-info-window -->
    </div>
</template>

<script>
export default {
    name: 'Viewer',
    components: {
    },
	data() {
		return {
        };
	},
	methods: {
	},
};
</script>
