<template>
    <guide-box title="Table" desc="Single, Multiple, Vertical, Horizontal, Mini, Sort, Filter, Checkbox" :to="$options.name">
        <guide-box-item title="Single Line">

            <div class="a-table">
                <table>
                    <colgroup>
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Invoice date</th>
                        <th>Due date</th>
                        <th class="right">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Nike</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr class="selected">
                        <td>Adidas</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr>
                        <td>Gucci</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    </tbody>
                </table>
            </div><!-- //a-table -->

        </guide-box-item>
        <guide-box-item title="Multiple Line">
            <div class="a-table">
                <table>
                    <colgroup>
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Last login</th>
                        <th>Department</th>
                        <th>Department</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <span class="a-color-label-black">Logan Henderson</span><br>
                            2019.09.09~2020.01.01
                        </td>
                        <td>
                            <span class="a-color-label-black">Logan Henderson</span><br>
                            2019.09.09~2020.01.01
                        </td>
                        <td>Development</td>
                        <td>
                            <a href="#">Active</a>
                        </td>
                    </tr>
                    <tr class="selected">
                        <td>
                            <span class="a-color-label-black">Logan Henderson</span><br>
                            2019.09.09~2020.01.01
                        </td>
                        <td>
                            <span class="a-color-label-black">Logan Henderson</span><br>
                            2019.09.09~2020.01.01
                        </td>
                        <td>Development</td>
                        <td>
                            <a href="#">Active</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="a-color-label-black">Logan Henderson</span><br>
                            2019.09.09~2020.01.01
                        </td>
                        <td>
                            <span class="a-color-label-black">Logan Henderson</span><br>
                            2019.09.09~2020.01.01
                        </td>
                        <td>Development</td>
                        <td>
                            <a href="#">Active</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div><!-- //a-table -->
        </guide-box-item>
        <guide-box-item title="Vertical Line">

            <div class="a-table line-vertical">
                <table>
                    <colgroup>
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Invoice date</th>
                        <th>Due date</th>
                        <th class="right">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Nike</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr class="selected">
                        <td>Adidas</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr>
                        <td>Gucci</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    </tbody>
                </table>
            </div><!-- //a-table -->

        </guide-box-item>
        <guide-box-item title="Horizontal Line">
            <div class="a-table line-horizontal">
                <table>
                    <colgroup>
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Invoice date</th>
                        <th>Due date</th>
                        <th class="right">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Nike</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr class="selected">
                        <td>Adidas</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr>
                        <td>Gucci</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    </tbody>
                </table>
            </div><!-- //a-table -->
        </guide-box-item>
        <guide-box-item title="Mini Line">
            <div class="a-table mini">
                <table>
                    <colgroup>
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Invoice date</th>
                        <th>Due date</th>
                        <th class="right">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Nike</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr class="selected">
                        <td>Adidas</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr>
                        <td>Gucci</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    </tbody>
                </table>
            </div><!-- //a-table -->
        </guide-box-item>
        <guide-box-item title="Checkbox / Sort / Filter option">
            <div class="a-table">
                <table>
                    <colgroup>
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>
                            <label class="a-checkbox">
                                <input type="checkbox">
                                <span class="label">Company</span>
                            </label><!-- //a-checkbox -->
                        </th>
                        <th>
                            <div class="a-table__header">
                                <span class="a-table__header-label">Invoice date</span>
                                <div class="a-table__header-func">
                                    <button class="btn-toggle-sort"><img src="/resources/images/svg/triangle-down-gray-24.svg" class="size--16" alt=""></button>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div class="a-table__header">
                                <span class="a-table__header-label">Due date</span>
                                <div class="a-table__header-func">
                                    <button class="btn-toggle-sort" selected><img src="/resources/images/svg/triangle-down-gray-24.svg" class="size--16" alt=""></button>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div class="a-table__header">
                                <span class="a-table__header-label">Amount</span>
                                <div class="a-table__header-func">
                                    <button class="btn-setting"><img src="/resources/images/svg/setting-gray-24.svg" class="size--16" alt=""></button>
                                </div>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <label class="a-checkbox">
                                <input type="checkbox">
                                <span class="label">Nike</span>
                            </label><!-- //a-checkbox -->
                        </td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr class="selected">
                        <td>
                            <label class="a-checkbox">
                                <input type="checkbox">
                                <span class="label">Adidas</span>
                            </label><!-- //a-checkbox -->
                        </td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    <tr>
                        <td>Gucci</td>
                        <td>05/10/2019</td>
                        <td>05/10/2019</td>
                        <td class="right">$2,900,000</td>
                    </tr>
                    </tbody>
                </table>
            </div><!-- //a-table -->
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-table',
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
