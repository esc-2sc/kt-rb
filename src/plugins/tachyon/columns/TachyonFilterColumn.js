
import {TachyonColumn} from 'tachyon';
import TachyonFilterHeaderRenderer from '../renderers/TachyonFilterHeaderRenderer';

export default {
    name: 'tachyon-filter-column',
    mixins: [TachyonColumn],
    props: {
        headerRenderer: {
            type: [Function, Object],
            default: () => TachyonFilterHeaderRenderer
        },
        filter: {
            type: Object,
            default: () => ({type: 'set'})
        }
    },
    data() {
        return {
            items: [],
            grid: null,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
