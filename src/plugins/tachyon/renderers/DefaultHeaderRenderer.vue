<template>
    <div class="header-item">
        <span class="header-item__title" :class="sortingClass">{{label}}</span>
        <div class="header-item__sort" v-show="isSorting">
            <span class="label">{{sortDescendingLabel}}</span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: 'default-header-renderer',
        inject: {
            grid: {
                default: null
            }
        },
        data() {
            return {
                state: {},
                sortDescendingLabel: ''
            }
        },
        computed: {
            sortingClass() {
                if (!this.isSorting) {
                    this.sortDescendingLabel = '정렬';
                    return 'sort-none'
                } else if (this.sortDescending) {
                    this.sortDescendingLabel = '내림차순';
                    return 'sort-desc'
                } else {
                    this.sortDescendingLabel = '오름차순';
                    return 'sort-asc'
                }
            },
            label() {
                return this.state.label;
            },
            column() {
                return this.state.column;
            },
            isSorting() {
                if (this.column) {
                    return this.grid.gridInstance.getSortColumns().indexOf(this.column) >= 0;
                }
                return false;
            },
            sortDescending() {
                return this.column && this.column.sortDescending;
            }
        },
    });
</script>

<style scoped>
</style>

