
export default {
    inject: ['grid', 'column'],
    props: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    activated() {
    },
    deactivated() {
    },
    methods: {
        /**
         * 필터 적용
         */
        apply() {
        },
        /**
         * 닫기
         */
        close() {
            this.$emit('close');
        },
        clear() {
        },
    }
}
