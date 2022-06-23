<template>
    <guide-box title="Button" desc="Primary, Secondary, Tertiary, Scaling" :to="$options.name">
        <guide-box-item title="Primary Buttons (button, a)">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <button class="a-btn-type-1"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Hover">
                    <div>
                        <button class="a-btn-type-1 state--hover"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--hover">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--hover">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon state--hover"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon state--hover"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Foscused">
                    <div>
                        <button class="a-btn-type-1 state--focus"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--focus">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--focus">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon state--focus"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon state--focus"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <button class="a-btn-type-1" disabled><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1" disabled>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1" disabled>
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <a href="#" class="a-btn-type-1 icon" disabled><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                        <br><br>
                        <button class="a-btn-type-1 icon disabled"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Secondary Buttons (button, a)">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <button class="a-btn-type-1 line"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 line"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 line">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 line">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 line">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 line">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon line"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon line"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Hover">
                    <div>
                        <button class="a-btn-type-1 state--hover line"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover line"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--hover line">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover line">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--hover line">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover line">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon state--hover line"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon state--hover line"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Foscused">
                    <div>
                        <button class="a-btn-type-1 state--focus line"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus line"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--focus line">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus line">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--focus line">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus line">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon state--focus line"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon state--focus line"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <button class="a-btn-type-1 line" disabled><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled line"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 line" disabled>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled line">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 line" disabled>
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled line">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <a href="#" class="a-btn-type-1 icon line" disabled><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                        <br><br>
                        <button class="a-btn-type-1 icon disabled line"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Tertiary Buttons (button, a)" is-gray>
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <button class="a-btn-type-1 transparent"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 transparent"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 transparent">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 transparent">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 transparent">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 transparent">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Hover">
                    <div>
                        <button class="a-btn-type-1 state--hover transparent"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover transparent"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--hover transparent">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover transparent">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--hover transparent">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--hover transparent">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon state--hover transparent"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon state--hover transparent"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Foscused">
                    <div>
                        <button class="a-btn-type-1 state--focus transparent"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus transparent"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--focus transparent">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus transparent">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 state--focus transparent">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 state--focus transparent">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon state--focus transparent"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon state--focus transparent"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <button class="a-btn-type-1 transparent" disabled><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled transparent"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 transparent" disabled>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled transparent">
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 transparent" disabled>
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 disabled transparent">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <a href="#" class="a-btn-type-1 icon transparent" disabled><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></a>
                        <br><br>
                        <button class="a-btn-type-1 icon disabled transparent"><img src="/resources/images/svg/circle-check-fill-24.svg" class="icon" alt=""></button>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Scaling Buttons (button, a) / size--large, size--small">
            <guide-table>
                <guide-table-item label="X Large">
                    <div>
                        <button class="a-btn-type-1 size--x-large"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 size--x-large">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 size--x-large">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 size--x-large">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 size--x-large">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon size--x-large"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon size--x-large"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Large">
                    <div>
                        <button class="a-btn-type-1 size--large"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 size--large">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 size--large">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 size--large">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 size--large">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon size--large"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon size--large"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Medium">
                    <div>
                        <button class="a-btn-type-1"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
                <guide-table-item label="Small">
                    <div>
                        <button class="a-btn-type-1 size--small"><span class="label">Label</span></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 size--small"><span class="label">Label</span></a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 size--small">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 size--small">
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                            <span class="label">Icon Left</span>
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 size--small">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 size--small">
                            <span class="label">Icon Right</span>
                            <img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt="">
                        </a>
                    </div>
                    <div>
                        <button class="a-btn-type-1 icon size--small"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></button>
                        <br><br>
                        <a href="#" class="a-btn-type-1 icon size--small"><img src="/resources/images/svg/circle-check-fill-white-24.svg" class="icon" alt=""></a>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
	    <guide-box-item title="Circle Buttons (button, a) / line > <a href='/guide-color' class='a-color-point-2'>icon background color</a>">
		    <guide-table>
			    <guide-table-item label="a-btn-type-2 (Circle)">
				    <div>
					    <button class="a-btn-type-2">
						    <span class="icon a-bg-point-1"><img src="/resources/images/svg/paper-airplane-fill-tilt-white-24.svg" class="size--16" alt=""></span>
						    <span class="label">발행</span>
					    </button>
					    <br><br>
					    <a href="#" class="a-btn-type-2">
						    <span class="icon a-bg-point-1-1"><img src="/resources/images/svg/paper-airplane-fill-tilt-white-24.svg" class="size--16" alt=""></span>
						    <span class="label">발행</span>
					    </a>
				    </div>
				    <div>
					    <button class="a-btn-type-2 line">
						    <span class="icon"><img src="/resources/images/svg/eye-24.svg" class="size--16" alt=""></span>
						    <span class="label">미리보기</span>
					    </button>
					    <br><br>
					    <a href="#" class="a-btn-type-2 line">
						    <span class="icon"><img src="/resources/images/svg/eye-24.svg" class="size--16" alt=""></span>
						    <span class="label">미리보기</span>
					    </a>
				    </div>
				    <div>
					    <button class="a-btn-type-2 line">
						    <span class="icon a-color-bg-1"><img src="/resources/images/svg/plus-white-24.svg" class="size--16" alt=""></span>
						    <span class="label">추가</span>
					    </button>
					    <br><br>
					    <a href="#" class="a-btn-type-2 line">
						    <span class="icon a-color-bg-2"><img src="/resources/images/svg/plus-white-24.svg" class="size--16" alt=""></span>
						    <span class="label">추가</span>
					    </a>
				    </div>

			    </guide-table-item>
		    </guide-table>
	    </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-button',
    components: {
    },
	data() {
		return {
        };
	},
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
</style>
