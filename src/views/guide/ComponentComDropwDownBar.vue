<template>
    <guide-box title="Component - ComponentComDropwDownBar" desc="com-dropdown-bar, Dropdown List" :to="$options.name">
        <guide-box-item title="com-dropdown-bar - Full(Default) / Inline">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened1">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    {{item.label}}
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar class="inline" v-model="isComDropDownOpened2">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <label class="a-checkbox">
                                        <input type="checkbox" v-model="item.checked">
                                        <span class="label">{{item.label}}</span>
                                    </label>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>

                <guide-table-item label="Disabled">
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened3" disabled>
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    {{item.label}}
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar class="inline" v-model="isComDropDownOpened4" disabled>
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <label class="a-checkbox">
                                        <input type="checkbox" v-model="item.checked">
                                        <span class="label">{{item.label}}</span>
                                    </label>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="com-dropdown-bar > <a href='/guide-list' class='a-color-point-2'>a-list-dropdown__item</a>">
            <guide-table>
                <guide-table-item label="Text, Checkbox">
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened5">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    {{item.label}}
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened6">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__before">
                                        <label class="a-checkbox single">
                                            <input type="checkbox" v-model="item.checked">
                                            <span class="label"></span>
                                        </label><!-- //a-checkbox -->
                                    </div>
                                    <div class="a-list-dropdown__label">{{item.label}}</div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>

                <guide-table-item label="Button">
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened7">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__label">{{item.label}}</div>
                                    <div class="a-list-dropdown__after" v-if="item.checked">
                                        <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                    </div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened8">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__label">{{item.label}}</div>
                                    <div class="a-list-dropdown__after" v-if="item.checked">
                                        <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                    </div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>

                <guide-table-item label="Avatar, Checkbox">
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened9">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__before">
                                        <div class="a-user">
                                            <span class="a-user__label">{{item.userName}}</span>
                                        </div>
                                    </div>
                                    <div class="a-list-dropdown__label">{{item.label}}</div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened10">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__before">
                                        <label class="a-checkbox single">
                                            <input type="checkbox" v-model="item.checked">
                                            <span class="label"></span>
                                        </label><!-- //a-checkbox -->
                                        <div class="a-user">
                                            <span class="a-user__label">{{item.userName}}</span>
                                        </div>
                                    </div>
                                    <div class="a-list-dropdown__label">{{item.label}}</div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>

                <guide-table-item label="Avatar, Checkbox, Button">
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened11">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__before">
                                        <div class="a-user">
                                            <span class="a-user__label">{{item.userName}}</span>
                                        </div>
                                    </div>
                                    <div class="a-list-dropdown__label">{{item.label}}</div>
                                    <div class="a-list-dropdown__after" v-if="item.checked">
                                        <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                    </div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened12">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__before">
                                        <label class="a-checkbox single">
                                            <input type="checkbox" v-model="item.checked">
                                            <span class="label"></span>
                                        </label><!-- //a-checkbox -->
                                        <div class="a-user">
                                            <span class="a-user__label">{{item.userName}}</span>
                                        </div>
                                    </div>
                                    <div class="a-list-dropdown__label">{{item.label}}</div>
                                    <div class="a-list-dropdown__after" v-if="item.checked">
                                        <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                    </div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>

                <guide-table-item label="Members">
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened13">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__before">
                                        <div class="a-user">
                                            <span class="a-user__label">{{item.userName}}</span>
                                        </div>
                                    </div>
                                    <div class="a-list-dropdown__label nowrap">
                                        <span class="label">{{item.userFullName}} {{item.position}}</span>
                                        <span class="email">{{item.email}}</span>
                                    </div>
                                    <div class="a-list-dropdown__after" v-if="item.checked">
                                        <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                    </div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar v-model="isComDropDownOpened14">
                            <template v-slot:title>
                                <div class="a-dropdown-bar__title">
                                    <span class="label">Placeholder</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData1" :key="`bar-${n}`">
                                    <div class="a-list-dropdown__before">
                                        <div class="a-user">
                                            <span class="a-user__label">{{item.userName}}</span>
                                        </div>
                                    </div>
                                    <div class="a-list-dropdown__label nowrap">
                                        <span class="label">{{item.userFullName}} {{item.position}}</span>
                                        <span class="email">{{item.email}}</span>
                                    </div>
                                    <div class="a-list-dropdown__after" v-if="item.checked">
                                        <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                    </div>
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="com-dropdown-bar > <a href='/guide-input' class='a-color-point-2'>a-label-input</a>, <a href='/guide-list' class='a-color-point-2'>a-list-dropdown__item</a>">
            <guide-table>
                <guide-table-item label="Example 1">
                    <div>
                        <com-dropdown-bar class="clear" v-model="isComDropDownOpenedLabelInput1">
                            <template v-slot:title>
                                <label-input label="식당점수" class="mini size--full" combobox value="">
                                    <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/number-24.svg" class="size--16" alt=""></button>
                                </label-input>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData2" :key="`bar-${n}`">
                                    {{item.label}}
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                    <div>
                        <com-dropdown-bar class="clear" v-model="isComDropDownOpenedLabelInput2">
                            <template v-slot:title>
                                <label-input label="보낸선물 또는 받은선물" class="mini size--full" combobox value="">
                                    <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/gift-24.svg" class="size--16" alt=""></button>
                                </label-input>
                            </template>
                            <template v-slot:content>
                                <div class="a-dropdown-bar__item" v-for="(item, n) in comboboxData3" :key="`bar-${n}`">
                                    {{item.label}}
                                </div>
                            </template>
                        </com-dropdown-bar>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-com-dropdown-bar',
    components: {
    },
	data() {
		return {
		    comboboxData1: [
                {label: 'Option 1', value: '', userFullName: 'James', userName: 'AB', email:'jamespaul@gmail.com', position: 'CEO',  checked: false },
                {label: 'Option 2', value: '', userFullName: 'James', userName: 'AB', email:'jamespaul@gmail.com', position: 'CEO',  checked: true },
                {label: 'Option 3', value: '', userFullName: 'James', userName: 'AB', email:'jamespaul@gmail.com', position: 'CEO',  checked: true },
                {label: 'Option 4', value: '', userFullName: 'James', userName: 'AB', email:'jamespaul@gmail.com', position: 'CEO',  checked: true },
                {label: 'Option 5', value: '', userFullName: 'James', userName: 'AB', email:'jamespaul@gmail.com', position: 'CEO',  checked: false },
            ],
            comboboxData2: [
                {label: '1점', value: '', },
                {label: '2점', value: '', },
                {label: '3점', value: '', },
                {label: '4점', value: '', },
                {label: '5점', value: '', },
            ],
            comboboxData3: [
                {label: '보낸선물', value: '', },
                {label: '받은선물', value: '', },
            ],
            isComDropDownOpened1: false,
            isComDropDownOpened2: false,
            isComDropDownOpened3: false,
            isComDropDownOpened4: false,
            isComDropDownOpened5: false,
            isComDropDownOpened6: false,
            isComDropDownOpened7: false,
            isComDropDownOpened8: false,
            isComDropDownOpened9: false,
            isComDropDownOpened10: false,
            isComDropDownOpened11: false,
            isComDropDownOpened12: false,
            isComDropDownOpened13: false,
            isComDropDownOpened14: false,
            isComDropDownOpenedLabelInput1: false,
            isComDropDownOpenedLabelInput2: false
        };
	},
    mounted() {
    },
    methods: {
        getMaxRowCount(rowCount=5) {
            const maxCountValue = 5;
            return Math.min(rowCount, maxCountValue);
        }
	},
};
</script>
<style scoped>
</style>
