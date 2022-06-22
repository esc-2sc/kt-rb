<template>
    <div class="a-paging">
        <div class="a-paging__func prev">
            <!-- button class="btn-first" :disabled="!canFirst()" @click="first()"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button -->
            <button class="btn-prev" :disabled="!canPrev()" @click="prev()"><img src="/resources/images/svg/chevron-left-24.svg" class="size--16" alt="Prev"></button>
        </div>
        <div class="a-paging__nums" v-if="mode === 0">
            <span v-for="pageNum in pageNums" :key="pageNum"
                  :class="{selected: isSelected(pageNum) }"
                  @click="move(pageNum)" v-text="pageNum"></span>
        </div>
        <div class="a-paging__count" v-else-if="mode === 1">
            <span><em v-text="internalPageIndex"></em> / {{pageCount}}</span>
        </div>
        <vx-combobox class="a-paging__combobox inline" v-if="mode === 2"
                     content-class="a-paging__combobox-dropdown"
                     :items="pageNums"
                     v-model="internalPageIndex"
                     :row-count="5"
                     label-field="label"
                     value-field="value"></vx-combobox>
        <div class="a-paging__func next">
            <button class="btn-next" :disabled="!canNext()" @click="next()"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button>
            <!-- button class="btn-last" :disabled="!canLast()" @click="last()"><img src="/resources/images/svg/chevron-right-24.svg" class="size--16" alt="Next"></button -->
        </div>
    </div><!-- //a-paging -->
</template>

<script>

    export default {
        name: 'com-paging',
        model: {
            prop: 'pageIndex',
            event: 'change'
        },
        props: {
            /**
             * 총 페이지 갯수
             */
            pageCount: {
                type: Number,
                default: 0
            },
            /**
             * 페이지의 한 그룹에 표시될 페이지 갯수
             */
            pageRange: {
                type: Number,
                default: 0
            },
            /**
             * 현재 페이지(Num)
             */
            pageIndex: {
                type: Number,
                default: 1
            },
            mode: {
                type: Number,
                default: 0
            }
        },
        data(vm) {
            return {
                /**
                 * 컴포넌트에서 사용할 internalPageIndex 초기값 할당
                 */
                internalPageIndex: vm.pageIndex
            };
        },
        computed: {
            /**
             * 페이지 목록
             */
            pageNums() {
                let array = [];
                let startPage = this.pageGroupIndex * this.pageRange + 1;
                let endPage = Math.min(this.pageCount + 1, startPage + this.pageRange);

                for (let i = startPage; i < endPage; i++) {
                    array.push(i);
                }
                return array;
            },
            /**
             * 현재 pageIndex 에 대한 groupIndex
             */
            pageGroupIndex() {
                return parseInt((this.internalPageIndex - 1) / this.pageRange);
            }
        },
        watch: {
            /**
             * pageIndex 와 internalPageIndex 바인딩
             */
            pageIndex(value) {
                this.internalPageIndex = value;
            }
        },
        methods: {
            /*-------------------------------------
             *  업무 로직
             *-------------------------------------*/
            /**
             * selected class 바인딩
             */
            isSelected(index) {
                return index === this.internalPageIndex;
            },
            /**
             * 다음 페이지로 이동가능 여부
             */
            canNext() {
                return this.pageGroupIndex < Math.ceil(this.pageCount / this.pageRange) - 1;
            },
            /**
             * 이전 페이지로 이동가능 여부
             */
            canPrev() {
                return this.pageGroupIndex > 0;
            },
            /**
             * 가장 처음 페이지로 이동가능 여부
             */
            canFirst() {
                return this.internalPageIndex > 1;
            },
            /**
             * 가장 마지막 페이지로 이동가능 여부
             */
            canLast() {
                return this.internalPageIndex < this.pageCount;
            },
            /**
             * 페이지 이동
             */
            move(index) {
                if (this.internalPageIndex === index) return;
                this.internalPageIndex = index;
                this.$emit('change', index);
            },
            /**
             * 다음 페이지로 이동
             */
            next() {
                if (this.canNext()) {
                    this.move((this.pageGroupIndex + 1) * this.pageRange + 1);
                } else {
                    this.last();
                }
            },
            /**
             * 이전 페이지로 이동
             */
            prev() {
                if (this.canPrev()) {
                    this.move((this.pageGroupIndex - 1) * this.pageRange + 1);
                } else {
                    this.first();
                }
            },
            /**
             * 가장 처음 페이지로 이동
             */
            first() {
                if (this.canFirst()) {
                    this.move(1);
                }
            },
            /**
             * 가장 마지막 페이지로 이동
             */
            last() {
                if (this.canLast()) {
                    this.move(this.pageCount);
                }
            }
        }
    }
</script>
