<template>
    <div class="a-dropdown-bar">
        <div class="a-dropdown-bar__control" :class="controlClasses">
            <div class="a-dropdown-bar__selection" @click="toggle()">
                <slot name="title">
                </slot>
            </div>
            <div class="a-dropdown-bar__trigger"
                 @click="toggle()">
                <slot name="trigger">
                    <button class="a-dropdown-bar__trigger-button"><img src="/resources/images/svg/chevron-down-24.svg" class="size--16" alt=""></button>
                </slot>
            </div>
        </div>
        <div v-if="lazyIsOpened" class="a-dropdown-bar__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'com-dropdown-bar',
        model: {
            prop: 'isOpened',
            event: 'change'
        },
        props: {
            isOpened: {
                type: Boolean,
            },
        },
        data() {
            return {
                lazyIsOpened: this.isOpened
            };
        },
        computed: {
            controlClasses() {
                return {
                    'is-open': this.lazyIsOpened
                }
            },
            boundDocumentMouseDown() {
                return this.onDocumentMouseDown.bind(this);
            }
        },
        watch: {
            isOpened(value) {
                this.lazyIsOpened = value;
            },
            lazyIsOpened(value) {
                if (value) {
                    this.watchMousedown();
                } else {
                    this.unwatchMousedown();
                }
                this.$emit('change', value);
            }
        },
        beforeDestroy() {
            this.unwatchMousedown();
        },
        methods: {
            watchMousedown() {
                document.addEventListener('mousedown', this.boundDocumentMouseDown);
            },
            unwatchMousedown() {
                document.removeEventListener('mousedown', this.boundDocumentMouseDown);
            },
            open() {
                this.lazyIsOpened = true;
            },
            close() {
                this.lazyIsOpened = false;
            },
            toggle() {
                this.lazyIsOpened = !this.lazyIsOpened;
            },
            contains(element) {
                const root = this.$el;
                return element && root === element || root.contains(element);
            },
            /*-------------------------------------
             *  Event handler
             *-------------------------------------*/

            /**
             * document mousedown
             * 외부 클릭시 content 닫기
             * @param event
             */
            onDocumentMouseDown(event) {
                if (!this.contains(event.target)) {
                    this.lazyIsOpened = false;
                }
            }
        }
    }
</script>

<style scoped>
</style>
