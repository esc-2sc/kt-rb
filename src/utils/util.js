import Vue from 'vue';

const Observer = new Vue.observable({}).__ob__.constructor;
const dummyObserver = new Observer({DUMMY: 'DUMMY'});
const EventBus = new Vue();

export default EventBus;

/**
 * Vue observer 해제
 * 대용량 데이타 문제...
 */
export function unobserve(value) {
    Object.defineProperty(value, '__ob__', {
        value: dummyObserver,
        enumerable: false,
        configurable: true,
    });

    return value;
}

export function cacheFunction(callback) {
    let cache = {};
    return function (...args) {
        const value = args[args.length - 1];
        let result = cache[value];
        if (!result) {
            cache[value] = result = callback.apply(null, args);
        } else {
        }
        return result;
    }
}

/**
 * html중 아스키 문자열 치환, '&#아스키코드;' 패턴
 * @param str
 * @returns {*}
 */
export function decodeHtmlAsciiCode(str) {
    return str.replace(/(&#(\d+);)/g,
        function (match, capture, charCode) {
            return String.fromCharCode(charCode);
        });
}
