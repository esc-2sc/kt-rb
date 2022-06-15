
/*-------------------------------------
 * Tachyon Theme
 * themeDefault
 * themeBoardLine
 *-------------------------------------*/

tachyon({
    styles: {
        /**
         * 배경 색.
         */
        backgroundColor: '#ffffff',
        /**
         * 기본 폰트
         */
        font: '400 12px/1.367 "Noto Sans KR","맑은 고딕","Malgun Gothic",MalgunGothic,Gulim,"굴림",Helvetica,AppleSDGothicNeo,sans-serif',

        /**
         * 기본 폰트 색
         */
        color: 'rgba(34,34,34,1)',

        /**
         * 셀 텍스트 정렬
         */
        textAlign: 'left',

        /**
         * 셀 수직 정렬
         */
        verticalAlign: 'middle',

        /**
         * 기본 행 크기
         */
        rowHeight: 30,

        /**
         * 헤더 기본 행 크기
         */
        headerRowHeight: 30,

        /**
         * 셀 선택 배경색
         */
        cellSelectionColor: 'rgba(244,245,248,1)',

        /**
         * 셀 오버 배경색
         */
        cellOverColor: 'rgba(244,245,248,1)',

        /**
         * 셀 선택 텍스트 색
         */
        textSelectionColor: 'rgba(34,34,34,1)',

        /**
         * 셀 오버 텍스트 색
         */
        textOverColor: 'rgba(34,34,34,1)',

        /**
         * 행 배경 색
         */
        rowColors: ['rgba(255,255,255,1)'],

        /**
         * @type {number}
         */
        cellPadding: {
            left: 12,
            right: 12,
            top: 0,
            bottom: 0
        },

        /**
         * 행 구분선
         */
        rowLine: {
            width: 1,
            color: 'rgba(224,224,224,1)',
            dashed: []

        },

        /**
         * 컬럼 구분선
         */
        columnLine: {
            width: 1,
            color: 'rgba(196,196,196,1)',
            dashed: []
        },

        /**
         * 고정 구분선
         */
        frozenLine: {
            width: 1,
            color: 'rgba(0,0,0,1)',
            dashed: []
        },

        /**
         * 캐럿
         */
        caretLine: {
            width: 2,
            color: 'rgba(70,141,247,1)',
            dashed: []
        },

        /**
         * 헤더 행 구분선
         */
        headerRowLine: {
            width: 1,
            color: 'rgba(196,196,196,1)',
            dashed: []
        },

        /**
         * 헤더 행 구분선
         */
        headerColumnLine: {
            width: 1,
            color: 'rgba(196,196,196,1)',
            dashed: []
        },

        // cellBackgroundColor: 'RGBA(72,84,101, 0.7)'
    }
});

// Theme : 'themeDefault'
tachyon.theme.add('themeDefault', {
    css: 'm-tachyon-default',
    canvasStyle: {
        columnLine: {
            color: 'rgba(196,196,196,1)',
        },
        headerRowLine: {
            width: 1,
            color: 'rgba(196,196,196,1)',
        },
        headerColumnLine: {
            width: 1,
            color: 'rgba(196,196,196,1)',
        },
        caretLine: {
            width: 2,
            color: 'rgba(151, 159, 167,1)',
        },
    }
});

// Theme : 'themeSa'
tachyon.theme.add('themeSa', {
    css: 'm-tachyon-sa',
    canvasStyle: {
        columnLine: {
            color: 'rgba(196,196,196,1)',
        },
        headerRowLine: {
            width: 1,
            color: 'rgba(196,196,196,1)',
        },
        headerColumnLine: {
            width: 1,
            color: 'rgba(196,196,196,1)',
        },
        caretLine: {
            width: 0,
            color: 'rgba(151, 159, 167,0)',
        },
        frozenLine: {
            width: 1,
            color: 'rgba(137,137,137,1)'
        },
        cellSelectionColor: 'rgba(255,255,255,0)',
        cellOverColor: 'rgba(255,255,255,0)',
        rowColors: ['rgba(255,255,255,0)'],
    }
});

// Theme : 'themeBoardLine'
tachyon.theme.add('themeBoardLine', {
    css: 'm-tachyon-table-line',
    canvasStyle: {
        font: '300 14px/1.45 "Noto Sans KR",sans-serif',
        color: '#777777',
        rowLine: {
            color: 'rgba(224,224,224,1)',
        },
        columnLine: {
            color: 'rgba(224,224,224,0)',
        },
        headerRowLine: {
            width: 1,
            color: 'rgba(224,224,224,1)',
        },
        headerColumnLine: {
            width: 0,
            color: 'rgba(224,224,224,0)',
        },
        caretLine: {
            width: 1,
            color: 'rgba(88, 88, 88,1)',
        },
    }
});

// Theme : 'themeBoardLine2'
tachyon.theme.add('themeBoardLine2', {
    css: 'm-tachyon-table-line2',
    canvasStyle: {
        font: '300 12px/1.45 "Noto Sans KR",sans-serif',
        color: '#000',
        rowLine: {
            width:1,
            color: 'rgba(232,232,232,1)',
        },
        columnLine: {
            color: 'rgba(232,232,232,1)',
        },
        headerRowLine: {
            width: 1,
            color: 'rgba(193,193,193,1)',
        },
        headerColumnLine: {
            width: 1,
            color: 'rgba(193,193,193,1)',
        },
        caretLine: {
            width: 1,
            color: 'rgba(88, 88, 88,1)',
        },
    }
});

// Theme : 'themeModify'
tachyon.theme.add('themeModify', {
    css: 'm-tachyon-modify',
    canvasStyle: {
        rowLine: {
            color: '#f0f0f0',
        },
        columnLine: {
            color: '#c4c4c4',
        },
        headerRowLine: {
            width: 1,
            color: '#c4c4c4',
        },
        headerColumnLine: {
            width: 1,
            color: '#c4c4c4',
        },
        caretLine: {
            width: 2,
            color: '#468df7',
        },
        cellSelectionColor: '#f8f8f8',
        cellOverColor: '#f4f5f8',
    }
});

// Theme : 'themeDefault'
tachyon.theme.add('eqrPlanTheme', {
    css: 'm-tachyon-default',
    canvasStyle: {
        cellOverColor: 'rgba(0,0,0,0)',
        cellSelectionColor: 'rgba(0,0,0,0)'
    }
});
