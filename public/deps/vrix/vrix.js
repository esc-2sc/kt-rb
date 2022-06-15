(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.vrix = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  var defaults = {
    collection: {},
    formatter: {
      number: {
        nullTo: '',
        nanTo: '',
        thousandsSeparator: ',',
        roundFunction: Math.round,
        fractionDigits: undefined,
        trailingZeros: false,
        abbreviations: undefined,
        positiveSign: null,
        negativeSign: '-'
      }
    },
    net: {
      url: {
        pathVars: {
          varOpen: '{',
          varClose: '}'
        }
      },
      http: {
        baseUrl: '',
        method: 'GET',
        responseType: 'json',
        useHiddenMethod: true,
        hiddenMethodParamName: '_method',
        contentTypeResolver: function contentTypeResolver(body) {
          if (body != null && !(body instanceof FormData) && _typeof(body) === 'object') {
            return 'application/json';
          }

          return undefined;
        },
        bodyTransformer: function bodyTransformer(body, contentType) {
          if (_typeof(body) === 'object' && contentType != null && contentType.toLowerCase().indexOf('json') >= 0) {
            return JSON.stringify(body);
          }

          return body;
        }
      },
      WebSocket: {
        reconnectInterval: 1500,
        reconnectAttempt: -1
      }
    }
  };

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reHasRegExpChar = RegExp(reRegExpChar.source);
  function escapeRegExp() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
  }
  /**
   * Copy an object.
   *
   * @public
   * @function
   * @param {*} source
   * @param {boolean} [deep]
   * @returns {*} Clone.
   */

  function copy(source, deep) {
    if (source == null) return source;

    if (source instanceof Date) {
      return new Date(source.getTime());
    }

    if (source instanceof RegExp) {
      var text = String(source),
          slashIndex = text.lastIndexOf('/');
      return new RegExp(text.slice(1, slashIndex), text.slice(slashIndex + 1));
    }

    if (Array.isArray(source)) {
      var n = source.length;
      var o = new Array(n);

      for (var i = n - 1; i >= 0; i--) {
        o[i] = deep ? copy(source[i], deep) : source[i];
      }

      return o;
    }

    if (_typeof(source) === 'object') {
      var _o = {};

      for (var k in source) {
        _o[k] = deep ? copy(source[k], deep) : source[k];
      }

      return _o;
    }

    return source;
  }
  /**
   * Clone an object.
   * @param source
   * @returns {*}
   */

  function clone(source) {
    return copy(source, true);
  }
  function compareArray(v1, v2) {
    var n1 = v1 && v1.length || 0;
    var n2 = v2 && v2.length || 0;

    if (n1 !== n2) {
      return false;
    }

    for (var i = 0; i < n1; i++) {
      if (v1[i] !== v2[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * Mix objects.
   * 오브젝트 타입만 적용됩니다.(Array는 제외)
   * @param args
   * @returns {Object}
   *
   * @example
   * let d = {a: 1, b: 2};
   * vrix.util.mixin(d, {c: 3, d: 4}, {b: 'A', e: 'E'}, {override: true});
   * console.log(d); d = {a: 1, b: "A", c: 3, d: 4, e: "E"}
   */

  function mixin() {
    var numArgs = arguments.length;
    var target = arguments.length <= 0 ? undefined : arguments[0];

    if (numArgs < 2) {
      return target;
    }

    var numSource = numArgs;
    var options = numArgs - 1 < 0 || arguments.length <= numArgs - 1 ? undefined : arguments[numArgs - 1];

    if (options && Object.keys(options).length <= 3 && ('overwrite' in options || 'copy' in options || 'deep' in options)) {
      numSource = numArgs - 1;
    } else {
      options = {
        overwrite: true,
        copy: false,
        deep: false
      };
    }

    var overwrite = !!options.overwrite;
    var isCopy = !!options.copy;
    var isDeep = !!options.deep;

    for (var i = 1; i < numSource; ++i) {
      var source = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (_typeof(source) !== 'object' || Array.isArray(source)) {
        console.warn('`source` is not an object.', source);
        continue;
      }

      for (var p in source) {
        var t = target[p];

        if (t !== undefined && !overwrite) {
          continue;
        }

        var s = isCopy ? copy(source[p], true) : source[p];

        if (isDeep && _typeof(t) === 'object' && _typeof(s) === 'object') {
          mixin(t, s, options);
        } else {
          target[p] = s;
        }
      }
    }

    return target;
  }
  function withBehavior(element) {
    var prototype = element.prototype;

    for (var _len = arguments.length, behaviors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      behaviors[_key - 1] = arguments[_key];
    }

    behaviors.forEach(function (behavior) {
      Object.getOwnPropertyNames(behavior).forEach(function (name) {
        Object.defineProperty(prototype, name, Object.getOwnPropertyDescriptor(behavior, name));
      });
    });
    return element;
  }
  function cacheFunction(callback) {
    var cache = {};
    return function (value) {
      var result = cache[value];

      if (!result) {
        result = callback(value);
      }

      return result;
    };
  }
  /**
   *
   * @param func
   * @param thisTarget
   * @param delay
   * @returns {function(...[*]=)}
   */

  function debounceFunction(func) {
    var thisTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var timerId = null;
    return function () {
      if (timerId) {
        clearTimeout(timerId);
      }

      var args = arguments;
      timerId = setTimeout(function () {
        func.apply(thisTarget, args);
      }, delay);
    };
  }
  /**
   *
   * @param func
   * @param thisTarget
   * @param delay
   * @returns {function(...[*]=)}
   */

  function throttleFunction(func) {
    var thisTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var isAccess = true;
    return function () {
      if (!isAccess) {
        return;
      }

      isAccess = false;
      func.apply(thisTarget, arguments);
      setTimeout(function () {
        isAccess = true;
      }, delay);
    };
  }
  var internalParsePath = cacheFunction(function (value) {
    return value && (value.indexOf('.') !== -1 && value.split('.') || [value]);
  });
  function parsePath(path) {
    if (Array.isArray(path)) ; else {
      var type = _typeof(path);

      switch (type) {
        case 'number':
          path += '';

        case 'string':
          path = internalParsePath(path);
          break;

        default:
          {
            throw new TypeError("path must be a Number/String/Array, received ".concat(type, " instead."));
          }
      }
    }

    return path;
  }
  /**
   *
   * @param {Object} data
   * @param {Array, String} path
   * @returns {*}
   */

  function getValue(data, path) {
    path = parsePath(path);
    var num = path && path.length || 0;
    var o = data;

    for (var i = 0; i < num; i++) {
      var field = path[i];

      if (field in o) {
        o = o[field];
      } else {
        return null;
      }
    }

    return o;
  }
  /**
   *
   * @param data
   * @param path
   * @param value
   * @returns {boolean}
   */

  function setValue(data, path, value) {
    path = parsePath(path);
    var num = path && path.length || 0;
    var o = data;
    var i = 0;

    for (; i < num - 1; i++) {
      var field = path[i];

      if (field in o) {
        o = o[field];
      } else {
        //error
        o = null;
        break;
      }
    }

    if (o && num > 0 && o[path[i]] !== value) {
      o[path[i]] = value;
      return true;
    }

    return false;
  }

  var utils = /*#__PURE__*/Object.freeze({
    escapeRegExp: escapeRegExp,
    copy: copy,
    clone: clone,
    compareArray: compareArray,
    mixin: mixin,
    withBehavior: withBehavior,
    cacheFunction: cacheFunction,
    debounceFunction: debounceFunction,
    throttleFunction: throttleFunction,
    parsePath: parsePath,
    getValue: getValue,
    setValue: setValue
  });

  var G = (typeof global === "undefined" ? "undefined" : _typeof(global)) === _typeof(null) ? global : self;
  var findIndex = [].findIndex || function (callback, context) {
    var i = this.length;

    while (i--) {
      if (callback.call(context, this[i])) return i;
    }

    return i;
  };
  var defineProperty = Object.defineProperty; // even if not unique each time, the used WeakMap
  // is one and one only so it's not required to grant
  // uniqueness per each instance. This is enough.

  var UID = '__event-target__' + Math.random();
  var WeakMap = G.WeakMap || function WeakMap() {
    return {
      get: function get(obj) {
        return obj[UID];
      },
      set: function set(obj, value) {
        defineProperty(obj, UID, {
          configurable: true,
          value: value
        });
      }
    };
  };

  var EventTarget = G.EventTarget;

  try {
    new EventTarget();
  } catch (e) {
    EventTarget = function () {
      // used to relate instances to listeners
      var wm = new WeakMap(); // get listeners or relate them once to the instance

      var get = function get(self) {
        return wm.get(self) || set(self);
      };

      var set = function set(self) {
        var dictionary = new Null();
        wm.set(self, dictionary);
        return dictionary;
      }; // define values as configurable


      var define = function define(where, what) {
        for (var key in what) {
          defineProperty(where, key, {
            configurable: true,
            value: what[key]
          });
        }
      }; // no need to transpile here, it's a very simple class


      function EventTarget() {} // EventTarget "class" definition


      define(EventTarget.prototype, {
        addEventListener: addEventListener,
        dispatchEvent: dispatchEvent,
        removeEventListener: removeEventListener
      }); // dispatch event for each listener

      function dispatch(info) {
        var options = info.options;

        if (options && options.once) {
          removeEventListener.call(info.target, this.type, info.listener, info.options);
        }

        if (typeof info.listener === 'function') {
          info.listener.call(info.target, this);
        } else {
          info.listener.handleEvent(this);
        }
      } // search for a registered listener


      function registered(info) {
        return this === info.listener;
      } // public methods


      function addEventListener(type, listener, options) {
        var secret = get(this);
        var listeners = secret[type] || (secret[type] = []);

        if (findIndex.call(listeners, registered, listener) < 0) {
          listeners.push({
            target: this,
            listener: listener,
            options: options
          });
        }
      }

      function dispatchEvent(event) {
        var secret = get(this);
        var listeners = secret[event.type];

        if (listeners) {
          define(event, {
            currentTarget: this,
            target: this
          });
          listeners.forEach(dispatch, event);
          delete event.currentTarget;
          delete event.target;
        }

        return true;
      } // used both as public and private method,
      // to avoid method pollution/interception of private listeners


      function removeEventListener(type, listener, options) {
        var secret = get(this);
        var listeners = secret[type];

        if (listeners) {
          var i = findIndex.call(listeners, registered, listener);
          if (-1 < i) listeners.splice(i, 1);
        }
      } // private "class"


      function Null() {}

      Null.prototype = Object.create(null);
      return EventTarget;
    }();
  }

  var EventTarget$1 = EventTarget;

  /***
     Copyright 2013 Teun Duynstee

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */
  var thenBy_module = function () {
    function identity(v) {
      return v;
    }

    function ignoreCase(v) {
      return typeof v === "string" ? v.toLowerCase() : v;
    }

    function makeCompareFunction(f, opt) {
      opt = typeof opt === "number" ? {
        direction: opt
      } : opt || {};

      if (typeof f != "function") {
        var prop = f; // make unary function

        f = function f(v1) {
          return !!v1[prop] ? v1[prop] : "";
        };
      }

      if (f.length === 1) {
        // f is a unary function mapping a single item to its sort score
        var uf = f;
        var preprocess = opt.ignoreCase ? ignoreCase : identity;

        var cmp = opt.cmp || function (v1, v2) {
          return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
        };

        f = function f(v1, v2) {
          return cmp(preprocess(uf(v1)), preprocess(uf(v2)));
        };
      }

      if (opt.direction === -1) return function (v1, v2) {
        return -f(v1, v2);
      };
      return f;
    }
    /* adds a secondary compare function to the target function (`this` context)
       which is applied in case the first one returns 0 (equal)
       returns a new compare function, which has a `thenBy` method as well */


    function tb(func, opt) {
      /* should get value false for the first call. This can be done by calling the 
      exported function, or the firstBy property on it (for es6 module compatibility)
      */
      var x = typeof this == "function" && !this.firstBy ? this : false;
      var y = makeCompareFunction(func, opt);
      var f = x ? function (a, b) {
        return x(a, b) || y(a, b);
      } : y;
      f.thenBy = tb;
      return f;
    }

    tb.firstBy = tb;
    return tb;
  }();

  var _fixBabelExtend = function (O) {
    var gPO = O.getPrototypeOf || function (o) {
      return o.__proto__;
    },
        sPO = O.setPrototypeOf || function (o, p) {
      o.__proto__ = p;
      return o;
    },
        construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
      var Constructor,
          a = [null];
      a.push.apply(a, args);
      Constructor = Parent.bind.apply(Parent, a);
      return sPO(new Constructor(), Class.prototype);
    };

    return function fixBabelExtend(Class) {
      var Parent = gPO(Class);
      return sPO(Class, sPO(function Super() {
        return construct(Parent, arguments, gPO(this).constructor);
      }, Parent));
    };
  }(Object);

  var EventCounter =
  /*#__PURE__*/
  function () {
    function EventCounter() {
      _classCallCheck(this, EventCounter);

      this.count = 0;

      if (arguments.length >= 2) {
        this.startCallback = arguments[0];
        this.endCallback = arguments[1];
      } else if (arguments.length === 1) {
        this.endCallback = arguments[0];
      }
    }

    _createClass(EventCounter, [{
      key: "start",
      value: function start() {
        var event = null;

        if (this.count <= 0 && this.startCallback) {
          event = this.startCallback.apply(null, arguments);
        }

        this.count++;
        return event;
      }
    }, {
      key: "end",
      value: function end() {
        var event = null;
        this.count--;

        if (this.count <= 0 && this.endCallback) {
          event = this.endCallback.apply(null, arguments);
          this.count = 0;
        }

        return event;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.count--;
      }
    }, {
      key: "counting",
      get: function get() {
        return this.count > 0;
      }
    }]);

    return EventCounter;
  }();

  var observe = function () {
    var methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
    return function (array, handler) {
      methods.forEach(function (method) {
        var original = array[method];

        array[method] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var result = original.apply(this, args);
          handler(method, args, result);
          return result;
        };

        array[method].__original = original;
      });
    };
  }();

  var IList = _fixBabelExtend(
  /*#__PURE__*/
  function (_EventTarget) {
    _inherits(IList, _EventTarget);

    function IList(source) {
      var _this;

      _classCallCheck(this, IList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(IList).call(this));
      _this._source = null;
      _this._active = null;
      _this._sortFunction = null;
      _this._filterFunction = null;
      _this._eventCounter = new EventCounter(_this._dispatchCollectionEvent.bind(_assertThisInitialized(_this)));
      return _this;
    }
    /**
     *
     */


    _createClass(IList, [{
      key: "eventStart",
      value: function eventStart() {
        this._eventCounter.start();
      }
    }, {
      key: "eventEnd",
      value: function eventEnd() {
        this._eventCounter.end();
      }
    }, {
      key: "get",
      value: function get(index) {
        if (index >= 0 && index < this.length) {
          return this.localItems[index];
        }

        return null;
      }
    }, {
      key: "indexOf",
      value: function indexOf(item, fromIndex) {
        return this.localItems.indexOf(item, fromIndex);
      }
    }, {
      key: "lastIndexOf",
      value: function lastIndexOf(item, fromIndex) {
        return this.localItems.lastIndexOf(item, fromIndex);
      }
    }, {
      key: "contains",
      value: function contains(item) {
        var items = Array.isArray(item) ? item.slice(0) : [item];

        for (var i, num = items.length; i < num; i++) {
          if (this.indexOf(items[i]) < 0) {
            return false;
          }
        }

        return true;
      }
    }, {
      key: "setValue",
      value: function setValue(index, property, value) {
        return this._internalSetValue(this.get(index), property, value);
      }
    }, {
      key: "setItemValue",
      value: function setItemValue(item, property, value) {
        return this._internalSetValue(item, property, value);
      }
    }, {
      key: "sort",
      value: function sort(sortFields) {
        var num = sortFields && sortFields.length || 0;

        if (num > 0) {
          var field = sortFields[0];
          var func = thenBy_module(field.sortFunction, field.descending ? 0 : -1);

          for (var i = 1; i < num; i++) {
            field = sortFields[i];
            func = func.thenBy(field.sortFunction, field.descending ? 0 : -1);
          }

          this._sortFunction = func;
        } else {
          this._sortFunction = null;
        }
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this._eventCounter.start();

        this._internalRefresh();

        this._eventCounter.end('refresh');
      }
    }, {
      key: "clear",
      value: function clear() {
        this.source = [];
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.localItems && this.localItems.slice(0) || [];
      }
    }, {
      key: "subList",
      value: function subList(fromIndex, toIndex) {
        var items = this.localItems.slice(fromIndex, toIndex);
        return new this.constructor(items);
      }
    }, {
      key: "_reset",
      value: function _reset() {
        this._eventCounter.start();

        this._internalRefresh();

        this._eventCounter.end('reset');
      }
    }, {
      key: "_internalSetValue",
      value: function _internalSetValue(item, property, value) {
        if (item && property != null) {
          var oldValue = getValue(item, property);

          if (value !== oldValue) {
            this._eventCounter.start();

            setValue(item, property, value);

            this._eventCounter.end('update', {
              source: item,
              index: this.indexOf(item),
              property: property,
              newValue: value,
              oldValue: oldValue
            });

            return true;
          }
        }

        return false;
      }
    }, {
      key: "_internalRefresh",
      value: function _internalRefresh() {}
    }, {
      key: "_dispatchCollectionEvent",
      value: function _dispatchCollectionEvent(kind, item, index, oldIndex) {
        var items = item && !Array.isArray(item) && [item] || item;
        var detail = {
          collection: this,
          kind: kind,
          index: index
        };

        if (items) {
          detail.items = items;
        }

        if (oldIndex != null) {
          detail.oldIndex = oldIndex;
        }

        this.dispatchEvent(new CustomEvent('collection-change', {
          bubbles: false,
          cancelable: false,
          detail: detail
        }));
      }
    }, {
      key: "source",
      get: function get() {
        return this._source;
      },
      set: function set(v) {
        var _this2 = this;

        if (this._source !== v) {
          this._source = v;

          this._reset();

          if (Array.isArray(v) && !Object.isFrozen(v)) {
            //TODO root 배열만 처리.
            var dispatch = this._dispatchCollectionEvent.bind(this);

            observe(v, function (method, args, result) {
              if (_this2._eventCounter.counting) {
                return;
              }

              switch (method) {
                case 'push':
                  dispatch('add', args, v.length - args.length);
                  break;

                case 'unshift':
                  dispatch('add', args, 0);
                  break;

                case 'pop':
                  dispatch('remove', result, v.length);
                  break;

                case 'shift':
                  dispatch('remove', result, 0);
                  break;

                case 'splice':
                  if (args[1] > 0) {
                    dispatch('remove', result, args[0]);
                  }

                  var added = args.slice(2);

                  if (added.length > 0) {
                    dispatch('add', added, args[0]);
                  }

                  break;

                case 'sort':
                case 'reverse':
                  _this2.refresh();

                  break;
              }
            });
          }
        }
      }
    }, {
      key: "length",
      get: function get() {
        return this._active && this._active.length || 0;
      }
    }, {
      key: "isEmpty",
      get: function get() {
        return this.length === 0;
      }
    }, {
      key: "filterFunction",
      get: function get() {
        return this._filterFunction;
      },
      set: function set(v) {
        if (this._filterFunction !== v) {
          this._filterFunction = v;
          this.refresh();
        }
      }
    }, {
      key: "sortFunction",
      get: function get() {
        return this._sortFunction;
      }
    }, {
      key: "localItems",
      get: function get() {
        return this._active || [];
      }
    }]);

    return IList;
  }(EventTarget$1));

  /**
   * ArrayList 클래스는 데이터의 소스로 배열을 관리하는 List를 구현합니다.
   * 내부 배열은 List 인터페이스의 메서드 및 속성을 사용하여 추가, 삭제, 변경 할 수 있습니다.
   */

  var ArrayList =
  /*#__PURE__*/
  function (_IList) {
    _inherits(ArrayList, _IList);

    function ArrayList(source) {
      var _this;

      _classCallCheck(this, ArrayList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayList).call(this));
      _this.source = source || [];
      return _this;
    }
    /**
     * 아이템을 맨끝 위치에 추가합니다.
     * @param item
     * @returns {boolean}
     */


    _createClass(ArrayList, [{
      key: "add",
      value: function add(item) {
        return this.addAt(this.length, item);
      }
      /**
       * 지정된 인덱스에 아이템을 추가합니다.
       * @param index
       * @param item
       * @returns {boolean}
       */

    }, {
      key: "addAt",
      value: function addAt(index, item) {
        if (index >= 0) {
          if (index >= this.length) {
            index = this.length;
          }

          this._eventCounter.start();

          if (this.source !== this._active) {
            var sourceIndex = index;
            var activeIndex = 0; //원본 배열에 추가시
            //1.정렬 되어 있다면 마지막 인덱스에 추가.

            if (this.sortFunction) {
              sourceIndex = this.source.length;
            } else if (this.filterFunction) {
              if (sourceIndex >= this._active.length) {
                sourceIndex = this.source.length;
              } else {
                sourceIndex = this.source.indexOf(this._active[index]);
              }
            }

            this.source.splice(sourceIndex, 0, item); //가공된 배열 추가시.
            //1. 필터링 한후 정렬..

            if (!this.filterFunction || this.filterFunction(item, index, this.source)) {
              if (this.sortFunction) {
                activeIndex = this._findInsertIndex(this._active, item);
              } else {
                var i = sourceIndex - 1;

                while (i >= 0) {
                  var sItem = this.source[i];

                  if (this.filterFunction(sItem, i, this.source)) {
                    activeIndex = this._active.indexOf(sItem);

                    if (activeIndex >= 0) {
                      activeIndex += 1;
                      break;
                    }
                  }

                  i--;
                }

                if (activeIndex < 0) {
                  activeIndex = 0;
                }
              }
            } else {
              activeIndex = -1;
            }

            if (activeIndex >= 0) {
              this._active.splice(activeIndex, 0, item);
            }

            index = activeIndex;
          } else {
            this._active.splice(index, 0, item);
          }

          this._eventCounter.end('add', item, index);

          return true;
        }

        return false;
      }
      /**
       * 항목 목록을 맨끝 위치부터 추가합니다.
       * @param items
       */

    }, {
      key: "addAll",
      value: function addAll(items) {
        this.addAllAt(this.length, items);
      }
      /**
       * 항목 목록을 지정된 위치부터 추가합니다.
       * @param index
       * @param items
       */

    }, {
      key: "addAllAt",
      value: function addAllAt(index, items) {
        var numItems = items && items.length || 0;

        if (numItems > 0 && index >= 0) {
          this._eventCounter.start();

          for (var i = 0; i < numItems; i++) {
            this.addAt(index + i, items[i]);
          }

          this._eventCounter.end('add', items, index);
        }
      }
      /**
       * 아이템을 삭제합니다.
       * @param item
       * @returns {boolean}
       */

    }, {
      key: "remove",
      value: function remove(item) {
        return this.removeAt(this.indexOf(item)) === item;
      }
      /**
       * 항목 목록을 삭제합니다.
       * @param item
       * @returns {boolean}
       */

    }, {
      key: "removeAll",
      value: function removeAll(items) {
        this._eventCounter.start();

        items = items && items.slice(0) || [];
        var removedItems = [];
        items.forEach(function (item) {
          if (this.remove(item)) {
            removedItems.push(item);
          }
        }.bind(this));

        if (removedItems.length > 0) {
          this._eventCounter.end('remove', removedItems, -1);
        } else {
          this._eventCounter.cancel();
        }
      }
      /**
       * 지정된 위치의 아이템을 삭제합니다.
       * @param index
       * @returns {T}
       */

    }, {
      key: "removeAt",
      value: function removeAt(index) {
        var removed;

        if (index >= 0 && index < this.length) {
          this._eventCounter.start();

          removed = this._active.splice(index, 1)[0];

          if (this.source !== this._active) {
            this.source.splice(this.source.indexOf(removed), 1);
          }

          this._eventCounter.end('remove', removed, index);
        }

        return removed;
      }
      /**
       * 지정된 위치에 아이템을 덮어씁니다.
       * @param index
       * @param item
       * @returns {boolean}
       */

    }, {
      key: "set",
      value: function set(index, item) {
        if (index >= 0 && index < this.length) {
          this._eventCounter.start();

          this.removeAt(index);
          this.addAt(index, item);

          this._eventCounter.end('set', item, index);

          return true;
        }

        return false;
      }
      /**
       * 배열의 'from' 항목을 'to' 위치에 이동합니다.
       * @param from
       * @param to
       * @returns {boolean}
       */

    }, {
      key: "move",
      value: function move(from, to) {
        if (from !== to && 0 <= from && from < this.length && 0 <= to) {
          this._eventCounter.start();

          var item = this.removeAt(from);
          this.addAt(to, item);

          this._eventCounter.end('move', item, this.indexOf(item), from);

          return true;
        }

        return false;
      }
      /**
       * @private
       */

    }, {
      key: "_internalRefresh",
      value: function _internalRefresh() {
        var num = this.source && this.source.length || 0;

        if (num > 0 && (this.sortFunction || this.filterFunction)) {
          var array = this.source && this.source.slice(0) || 0;

          if (this.filterFunction) {
            array = array.filter(this.filterFunction);
          }

          if (this.sortFunction) {
            array = array.sort(this.sortFunction);
          }

          this._active = array;
        } else {
          this._active = this.source;
        }
      }
      /**
       * @private
       */

    }, {
      key: "_findInsertIndex",
      value: function _findInsertIndex(items, target) {
        var index = 0;
        var lowerBound = 0;
        var upperBound = items.length - 1;
        var item = null;
        var direction = 1;

        while (lowerBound <= upperBound) {
          index = Math.round((lowerBound + upperBound) / 2);
          item = items[index];
          direction = this.sortFunction && this.sortFunction(target, item);

          if (direction <= -1) {
            upperBound = index - 1;
          } else if (direction >= 1) {
            lowerBound = index + 1;
          } else {
            break;
          }
        }

        return direction > 0 ? index + 1 : index;
      }
    }]);

    return ArrayList;
  }(IList);

  var _fixBabelExtend$1 = function (O) {
    var gPO = O.getPrototypeOf || function (o) {
      return o.__proto__;
    },
        sPO = O.setPrototypeOf || function (o, p) {
      o.__proto__ = p;
      return o;
    },
        construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
      var Constructor,
          a = [null];
      a.push.apply(a, args);
      Constructor = Parent.bind.apply(Parent, a);
      return sPO(new Constructor(), Class.prototype);
    };

    return function fixBabelExtend(Class) {
      var Parent = gPO(Class);
      return sPO(Class, sPO(function Super() {
        return construct(Parent, arguments, gPO(this).constructor);
      }, Parent));
    };
  }(Object);

  var Selector = _fixBabelExtend$1(
  /*#__PURE__*/
  function (_EventTarget) {
    _inherits(Selector, _EventTarget);

    function Selector() {
      var _this;

      _classCallCheck(this, Selector);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Selector).call(this)); //TODO 수정필요

      _this.useIndexProperty = true;
      _this._items = [];

      _this._collectionFactory = function () {
        return new ArrayList();
      };

      _this._minSelection = 0;
      _this._maxSelection = 1;
      _this._selectionValidator = null;
      _this._selectedIndex = -1;
      _this._selectedIndices = [];
      _this._selectedItem = null;
      _this._selectedItems = [];
      _this._precedents = {};
      _this._isItemsChanging = false;
      _this._isSelectionsChanged = false;
      return _this;
    }

    _createClass(Selector, [{
      key: "items",
      get: function get() {
        return this._items;
      },
      set: function set(v) {
        if (v == null) {
          v = [];
        }

        if (this._items === v || this._items.length + v.length === 0) {
          return;
        }

        if (!Array.isArray(v)) {
          console.warn('`items` must be an array.');
          v = [v];
        }

        this._isItemsChanging = true;
        this._items = v;
        this._collection = this.collectionFactory();
        this._collection.source = v;
        this.dispatchEvent(new CustomEvent('items-change', {
          detail: {
            itemsFrom: this._items,
            itemsTo: v
          }
        }));

        if (!this._isSelectionsChanged || this.selectedItems.length <= 0) {
          var selectedItems = [];
          var min = this.minSelection;

          if (min > 0) {
            var vn = v.length;

            for (var i = 0; i < min && i < vn; ++i) {
              selectedItems.push(v[i]);
            }
          }

          this.selectedItems = selectedItems;
        }

        this._isItemsChanging = false;
        this._isSelectionsChanged = false;
      }
    }, {
      key: "collection",
      get: function get() {
        return this._collection;
      }
    }, {
      key: "collectionFactory",
      get: function get() {
        return this._collectionFactory;
      },
      set: function set(v) {
        if (typeof v !== 'function') throw new TypeError('`collectionFactory` must be a function.');

        if (this._collectionFactory !== v) {
          this._collectionFactory = v;
        }
      }
    }, {
      key: "minSelection",
      get: function get() {
        return this._minSelection;
      },
      set: function set(v) {
        if (v == null) v = 0;
        v = Number(v);
        if (isNaN(v)) v = 0;

        if (v > 0 && this.maxSelection > 0 && v > this.maxSelection) {
          console.warn('`minSelection` should be less than or equals to `maxSelection`.');
          return;
        }

        if (this._minSelection !== v) {
          this._minSelection = v;
          var selectedItems = this.selectedItems || [];
          selectedItems = selectedItems.concat();
          var n = selectedItems.length;

          if (n < v) {
            var list = this.collection;
            var ll = list && list.length || 0;
            var sn = n;
            var item;

            for (var i = 0; sn < v && i < ll; ++i) {
              item = list.get(i);

              if (selectedItems.indexOf(item) < 0) {
                selectedItems.push(item);
                ++sn;
              }
            }

            if (sn !== n) this.selectedItems = selectedItems;
          }
        }
      }
    }, {
      key: "maxSelection",
      get: function get() {
        return this._maxSelection;
      },
      set: function set(v) {
        if (v == null) v = 0;
        v = Number(v);
        if (isNaN(v)) v = 0;

        if (v > 0 && this.minSelection > 0 && v < this.minSelection) {
          console.warn('`maxSelection` should be greater than or equals to `minSelection`.');
          return;
        }

        if (this._maxSelection !== v) {
          this._maxSelection = v;
          var selectedItems = this.selectedItems || [];
          selectedItems = selectedItems.concat();
          var n = selectedItems.length;

          if (v > 0 && n > v) {
            selectedItems.splice(0, n - v);
            this.selectedItems = selectedItems;
          }
        }
      }
      /**
       * @callback vrix.Selector~SelectionValidator
       * @param {*} Item to validation processing.
       * @param {number} Index of item.
       * @param {vrix.Selector} Selector
       * @return {boolean} Validity
       */

      /**
       * @type {vrix.Selector~SelectionValidator}
       */

    }, {
      key: "selectionValidator",
      get: function get() {
        return this._selectionValidator;
      },
      set: function set(v) {
        if (v != null && typeof v !== 'function') v = null;

        if (this._selectionValidator !== v) {
          this._selectionValidator = v;
        }
      }
      /**
       * @type {number}
       */

    }, {
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(v) {
        if (!this.useIndexProperty) {
          console.warn('selectedIndex are not used.');
          return;
        }

        if (v == null) v = -1;
        v = Number(v);
        if (isNaN(v) || v < -1) v = -1;
        if (v < 0 && this.minSelection > 0) return; // Selection is required.

        if (v >= this.collection.length) {
          console.warn('Could not select index ' + v + ' cause not enough elements.');
          return;
        }

        if (this._selectedIndex === v) return;
        this._precedents = {
          selectedIndex: v,
          selectedIndices: v >= 0 ? [v] : []
        };
        this.selectedItems = v >= 0 ? [this.collection.get(v)] : [];
      }
      /**
       * @type {number[]}
       */

    }, {
      key: "selectedIndices",
      get: function get() {
        return this._selectedIndices !== null ? this._selectedIndices.concat() : [];
      },
      set: function set(v) {
        if (!this.useIndexProperty) {
          console.warn('selectedIndices are not used.');
          return;
        }

        if (v == null) v = [];

        if (!Array.isArray(v)) {
          console.warn('`selectedIndices` must be an array.');
          return;
        }

        var n = v.length;
        if (!this.selectedIndices.length && !n) return;
        var selectedItems = [];
        var ll = this.collection.length;
        var index;

        for (var i = 0; i < n; ++i) {
          if (v[i] == null) {
            console.warn('Element of `selectedIndices` must be a number.');
            return;
          }

          index = Number(v[i]);

          if (isNaN(index)) {
            console.warn('Element of `selectedIndices` must be a number.');
            return;
          }

          if (index < 0) {
            console.warn('Element of `selectedIndices` should be greater than or equals to zero.');
            return;
          }

          if (index >= ll) {
            console.warn('Element of `selectedIndices` should be less than length of `list`.');
            return;
          }

          selectedItems.push(this._collection.get(index));
        }

        this._precedents = {
          selectedIndex: v[v.length - 1],
          selectedIndices: v
        };
        this.selectedItems = selectedItems;
      }
      /**
       * @type {*}
       */

    }, {
      key: "selectedItem",
      get: function get() {
        return this._selectedItem;
      },
      set: function set(v) {
        if (v != null && this.collection.indexOf(v) < 0) v = null;
        if (v == null && this.minSelection > 0) return; // Selection is required.

        if (this._selectedItem === v) return;
        this._precedents = {
          selectedItem: v
        };
        this.selectedItems = v == null ? [] : [v];
      }
      /**
       * @type {*[]}
       */

    }, {
      key: "selectedItems",
      get: function get() {
        return this._selectedItems != null ? this._selectedItems.concat() : [];
      },
      set: function set(v) {
        if (v == null) v = [];

        if (!Array.isArray(v)) {
          console.warn('`selectedItems` must be an array.');
          return;
        }

        if (!this.collection) {
          return;
        }

        if (this._isItemsChanging) {
          this._isSelectionsChanged = true;
        }

        var current = {
          selectedIndex: this.selectedIndex,
          selectedIndices: this.selectedIndices,
          selectedItem: this.selectedItem,
          selectedItems: this.selectedItems
        };
        var vn = v.length;
        var collection = this.collection;
        var ll = collection.length;

        if (!vn && !current.selectedItems.length) {
          this._precedents = {};
          return;
        }

        if (this.minSelection > 0 && vn < this.minSelection && vn < ll) {
          this._precedents = {};
          return; // More selectedItems required.
        }

        if (this.maxSelection > 0 && vn > this.maxSelection) {
          this._precedents = {};
          return; // Too many selectedItems.
        }

        if (vn > 0 && this.selectionValidator) {
          for (var i = vn - 1; i >= 0; i--) {
            if (!this.selectionValidator(v[i], this)) {
              v.splice(i, 1);
            }
          }

          vn = v.length;
        }

        var precedents = this._precedents = this._precedents || {};

        if (precedents.selectedIndices == null) {
          if (this.useIndexProperty) {
            var selectedIndices = [];

            for (var _i = 0; _i < vn; ++_i) {
              selectedIndices[_i] = collection.indexOf(v[_i]);

              if (selectedIndices[_i] < 0) {
                console.warn('Element of `selectedItems` must be in `list`.');
                this._precedents = {};
                return;
              }
            }

            precedents.selectedIndices = selectedIndices;
          } else {
            if (!collection.contains(v)) {
              console.warn('Element of `selectedItems` must be in `list`.');
              this._precedents = {};
              return;
            }
          }
        }

        if (this.useIndexProperty && precedents.selectedIndex == null) {
          precedents.selectedIndex = !vn ? -1 : precedents.selectedIndices[vn - 1];
        }

        if (precedents.selectedItem == null) {
          precedents.selectedItem = !vn ? null : v[vn - 1];
        }

        var eventDetail = _objectSpread2({
          selectedItemFrom: current.selectedItem,
          selectedItemsFrom: current.selectedItems,
          selectedItemTo: precedents.selectedItem,
          selectedItemsTo: v
        }, this.useIndexProperty ? {
          selectedIndexTo: precedents.selectedIndex,
          selectedIndicesTo: precedents.selectedIndices,
          selectedIndexFrom: current.selectedIndex,
          selectedIndicesFrom: current.selectedIndices
        } : {});

        this._precedents = {};
        var e = new CustomEvent('selection-changing', {
          cancelable: true,
          detail: eventDetail
        });
        this.dispatchEvent(e);
        if (e.defaultPrevented) return;

        if (this.useIndexProperty) {
          this._selectedIndex = precedents.selectedIndex;
          this._selectedIndices = precedents.selectedIndices;
        }

        this._selectedItem = precedents.selectedItem;
        this._selectedItems = v;
        this.dispatchEvent(new CustomEvent('selection-change', {
          detail: eventDetail
        }));
      }
    }]);

    return Selector;
  }(EventTarget$1));
  var SelectorBehavior = {
    get selector() {
      if (!this._selector) {
        this._selector = new Selector();
      }

      return this._selector;
    },

    get items() {
      return this._selector.items;
    },

    set items(value) {
      this._selector.items = value;
    },

    get collection() {
      return this._selector.collection;
    },

    get minSelection() {
      return this._selector.minSelection;
    },

    set minSelection(value) {
      this._selector.minSelection = value;
    },

    get maxSelection() {
      return this._selector.maxSelection;
    },

    set maxSelection(value) {
      this._selector.maxSelection = value;
    },

    get selectionValidator() {
      return this._selector.selectionValidator;
    },

    set selectionValidator(value) {
      this._selector.selectionValidator = value;
    },

    get selectedIndex() {
      return this._selector.selectedIndex;
    },

    set selectedIndex(value) {
      this._selector.selectedIndex = value;
    },

    get selectedIndices() {
      return this._selector.selectedIndices;
    },

    set selectedIndices(value) {
      this._selector.selectedIndices = value;
    },

    get selectedItem() {
      return this._selector.selectedItem;
    },

    set selectedItem(value) {
      this._selector.selectedItem = value;
    },

    get selectedItems() {
      return this._selector.selectedItems;
    },

    set selectedItems(value) {
      this._selector.selectedItems = value;
    },

    hasSelectedItem: function hasSelectedItem(item) {
      return !!(this.selectedItems && this.selectedItems.indexOf(item) >= 0);
    },
    addSelectedItem: function addSelectedItem(item) {
      if (!this.hasSelectedItem(item)) {
        if (this.maxSelection === 1) {
          this.selectedItem = item;
        } else {
          var items = this.selectedItems && this.selectedItems.slice(0) || [];
          items.push(item);

          if (this.maxSelection >= 2 && items.length > this.maxSelection) {
            items.splice(0, items.length - this.maxSelection);
          }

          this.selectedItems = items;
        }

        return true;
      }

      return false;
    },
    removeSelectedItem: function removeSelectedItem(item) {
      if (this.hasSelectedItem(item)) {
        if (this.maxSelection === 1) {
          this.selectedItem = null;
        } else {
          var items = this.selectedItems.slice(0);
          items.splice(items.indexOf(item), 1);
          this.selectedItems = items;
        }

        return true;
      }

      return false;
    },
    toggleSelectedItem: function toggleSelectedItem(item) {
      if (this.hasSelectedItem(item)) {
        return this.removeSelectedItem(item);
      } else {
        return this.addSelectedItem(item);
      }
    }
  };

  /**
   *  Promise에 진행상태를 나타는 서브 클래스
   */
  var ProgressPromise =
  /*#__PURE__*/
  function (_Promise) {
    _inherits(ProgressPromise, _Promise);

    function ProgressPromise(executor) {
      var _this;

      _classCallCheck(this, ProgressPromise);

      var pResolve;
      var pReject;
      _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressPromise).call(this, function (resolve, reject) {
        pResolve = resolve;
        pReject = reject;
      }));
      _this._resolve = pResolve;
      _this._reject = pReject;
      _this._progressHandlers = [];
      _this._pendingResult = [];
      _this._inited = false;
      executor(pResolve, pReject, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (!_this._inited) {
          _this._pendingResult.push(args);

          return;
        }

        try {
          return _this._progressHandlers.forEach(function (listener) {
            return listener.apply(null, args);
          });
        } catch (error) {
          _this._reject(error);
        }
      });
      _this._inited = true;
      return _this;
    }

    _createClass(ProgressPromise, [{
      key: "then",
      value: function then(onfulfilled, onrejected) {
        _get(_getPrototypeOf(ProgressPromise.prototype), "then", this).call(this, onfulfilled, onrejected);

        return this;
      }
    }, {
      key: "catch",
      value: function _catch(onrejected) {
        _get(_getPrototypeOf(ProgressPromise.prototype), "catch", this).call(this, onrejected);

        return this;
      }
    }, {
      key: "progress",
      value: function progress(onProgress) {
        if (typeof onProgress !== 'function') {
          throw new TypeError('not a function');
        }

        try {
          this._pendingResult.forEach(function (result) {
            onProgress.apply(null, result);
          });
        } catch (error) {
          this._reject(error);
        }

        this._progressHandlers.push(onProgress);

        return this;
      }
    }], [{
      key: "all",
      value: function all() {
        for (var _len2 = arguments.length, promises = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          promises[_key2] = arguments[_key2];
        }

        return new ProgressPromise(function (resolve, reject, progress) {
          var results = new Array(promises.length);
          var numPromises = promises.length;
          var resolveCount = 0;
          promises.forEach(function (promise, index) {
            promise.then(function (result) {
              results[index] = result;
              resolveCount++;
              progress(resolveCount, numPromises);

              if (resolveCount === numPromises) {
                resolve(results);
              }

              return result;
            }).catch(reject);
          });
        });
      }
    }, {
      key: "next",
      value: function next(executor) {
        var autoRun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var sequence = new Sequence(function () {
          if (autoRun) {
            Promise.resolve().then(function () {
              return sequence.run();
            });
          }
        });
        return sequence.next(executor);
      }
    }]);

    return ProgressPromise;
  }(_wrapNativeSuper(Promise));

  var Sequence =
  /*#__PURE__*/
  function (_ProgressPromise) {
    _inherits(Sequence, _ProgressPromise);

    function Sequence(executor) {
      var _this2;

      _classCallCheck(this, Sequence);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Sequence).call(this, executor));
      _this2.tokens = [];
      _this2.results = [];
      _this2.running = false;
      return _this2;
    }

    _createClass(Sequence, [{
      key: "next",
      value: function next(executor) {
        this.tokens.push(executor);
        return this;
      }
    }, {
      key: "run",
      value: function run() {
        var _this3 = this;

        if (this.running || this.tokens.length <= 0) {
          return;
        }

        this.running = true;
        var actives = this.tokens.slice(0);
        var results = [];

        var complete = function complete(result) {
          results.push(result);

          _this3._progressHandlers.forEach(function (listener) {
            return listener.apply(null, [results.length, _this3.tokens.length]);
          });
        };

        var execute = function execute() {
          var token = actives.shift();

          if (!token) {
            _this3._resolve(results);

            return;
          }

          token(results.slice(0)).then().then(function (result) {
            complete(result);
            execute();
            return result;
          }).catch(function (error) {
            complete(error);
            execute();
            return error;
          });
        };

        execute();
      }
    }]);

    return Sequence;
  }(ProgressPromise);

  function createRootNode(source, childField) {
    var node = Object.create({
      __ROOT_NODE__: true
    });
    node[childField] = source;
    return node;
  }

  function createChildrenField(node, childrenField) {
    if (node && !(childrenField in node)) {
      node[childrenField] = [];
    }
  }

  function arrayInsert(array, index, addItems) {
    Array.prototype.splice.apply(array, [index, 0].concat(addItems));
  }

  function arrayRemove(array, index, removeItems) {
    array.splice(index, removeItems.length);
  }

  function _find(parent, children, callback, isPostOrder, onlyOne) {
    var numChildren = children && children.length || 0,
        result = [],
        child,
        childChildren,
        i;

    for (i = 0; i < numChildren; ++i) {
      child = children[i];

      if (!isPostOrder) {
        if (callback(child, parent, children)) {
          result.push(child);

          if (onlyOne) {
            return result;
          }
        }
      }

      childChildren = this.getChildren(child);

      if (childChildren && childChildren.length > 0) {
        result = result.concat(_find.call(this, child, childChildren, callback, isPostOrder, onlyOne));

        if (result.length > 0 && onlyOne) {
          return result;
        }
      }

      if (isPostOrder) {
        if (callback(child, parent, children)) {
          result.push(child);

          if (onlyOne) {
            return result;
          }
        }
      }
    }

    return result;
  }

  function getDepth(node) {
    var depth = 1;
    node && node.children && node.children.forEach(function (child) {
      depth = Math.max(depth, getDepth(child) + 1);
    });
    return depth;
  }

  var NO_PARENT = 'noParent';
  var PARENT_TO_ABOVE = 'parentToAbove';

  var HierarchyList =
  /*#__PURE__*/
  function (_IList) {
    _inherits(HierarchyList, _IList);

    function HierarchyList(source) {
      var _this;

      _classCallCheck(this, HierarchyList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HierarchyList).call(this));
      _this._rootNode = null;
      _this._displayableNodes = [];
      _this._openNodesMap = new Map();
      _this._parentMap = new Map();
      _this._childrenMap = new Map();
      _this._childrenField = 'children';
      _this._displayPolicy = PARENT_TO_ABOVE;
      _this.source = source || [];
      return _this;
    }

    _createClass(HierarchyList, [{
      key: "getParentNode",

      /**
       * 해당 노드의 부모 노드를 반환합니다.
       * @param node 자식 노드입니다.
       * @returns {*}
       */
      value: function getParentNode(node) {
        var parent = this._internalGetParentNode(node);

        if (parent === this._rootNode) {
          parent = null;
        }

        return parent;
      }
      /**
       * 해당 노드의 조상 노드 목록을 반환합니다.
       * @param node
       * @returns {Array}
       */

    }, {
      key: "getAncestorNodes",
      value: function getAncestorNodes(node) {
        var pNodes = [];
        var active = this.getParentNode(node);

        while (active) {
          pNodes.unshift(active);
          active = this.getParentNode(active);
        }

        return pNodes;
      }
      /**
       * 해당 노드의 후손 노드 목록을 반환합니다. null이면 전체 노드 반환
       * @param node
       * @returns {Array}
       */

    }, {
      key: "getDescendantNodes",
      value: function getDescendantNodes(node) {
        return this.find(function (child) {
          return !!child && node !== child;
        }, node);
      }
    }, {
      key: "_internalGetParentNode",
      value: function _internalGetParentNode(node) {
        var parent = this._parentMap.get(node);

        if (!parent && this._rootNode) {
          var children = this.getNativeChildren(this._rootNode);

          if (children && children.indexOf(node) >= 0) {
            return null;
          }

          this._addAllParentMapping();

          parent = this._parentMap.get(node);
        }

        return parent;
      }
      /**
       * 해당 노드의 자식노드들을 반환합니다.
       * @param node 부모 노드입니다.
       * @returns {Array} 자식노드 배열입니다.
       */

    }, {
      key: "getChildren",
      value: function getChildren(node) {
        if (node == null) {
          node = this._rootNode;
        }

        var children = null;

        if (!this._childrenMap.has(node)) {
          if (node == this._rootNode || this.childrenField in node) {
            children = this.getNativeChildren(node);

            this._addChildrenMapping(node, children);
          }
        }

        children = this._childrenMap.get(node);
        return children;
      }
      /**
       * 해당 노드의 가공되지 않은 원본 자식노드들을 반환합니다.
       * @param node 부모 노드입니다.
       * @returns {Array} 자식노드 배열입니다.
       */

    }, {
      key: "getNativeChildren",
      value: function getNativeChildren(node) {
        if (!node) {
          node = this._rootNode;
        }

        if (node && this.childrenField in node) {
          return node[this.childrenField];
        }

        return null;
      }
      /**
       * 해당노드 하위의 열린 노드들을 배열형태로 반환합니다.
       * @param node 부모 노드입니다.
       * @returns {Array} 자식노드 배열입니다.
       */

    }, {
      key: "getDisplayableChildren",
      value: function getDisplayableChildren(node) {
        return this._internalGetDisplayableChildren(node, false);
      }
      /**
       * 해당노드의 형제노드들을 반환합니다.
       * @returns {Array} 형제노드 배열입니다.
       */

    }, {
      key: "getSiblingNodes",
      value: function getSiblingNodes(node) {
        var parentNode = this.getParentNode(node);
        return this.getChildren(parentNode);
      }
      /**
       * 해당 노드 부모의 기준으로 인덱스를 반환합니다.
       * @param node
       * @returns {Number} 형제 노드목록에서의 인덱스.
       */

    }, {
      key: "getNodeIndex",
      value: function getNodeIndex(node) {
        var nodes = this.getSiblingNodes(node) || [];
        return nodes.indexOf(node);
      }
    }, {
      key: "_internalGetDisplayableChildren",
      value: function _internalGetDisplayableChildren(node, doParentMapping) {
        var result = [];

        if (this.isOpenNode(node)) {
          var children = this.getChildren(node),
              numChildren = children && children.length || 0,
              i,
              child;

          for (i = 0; i < numChildren; i++) {
            child = children[i];

            if (doParentMapping) {
              this._addParentMapping(node, child);
            }

            if (this._displayPolicy === NO_PARENT) {
              if (!this.isOpenNode(child) || !this.hasChildren(child)) {
                result.push(child);
              }
            } else if (this._displayPolicy === PARENT_TO_ABOVE) {
              result.push(child);
            }

            result = result.concat(this._internalGetDisplayableChildren(child, doParentMapping) || []);
          }
        }

        return result;
      }
      /**
       * 해당 노드에 자식이 있는지 확인합니다.
       * @param node
       * @returns {boolean}
       */

    }, {
      key: "hasChildren",
      value: function hasChildren(node) {
        var children = this.getChildren(node);
        return children && children.length > 0 || false;
      }
      /**
       * 부모 노드에 자식 노드를 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드
       * @param node 추가할 자식 노드
       * @returns {boolean}
       */

    }, {
      key: "addNode",
      value: function addNode(parent, node) {
        var children = this.getNativeChildren(parent),
            numChildren = children && children.length || 0;
        return this.addNodeAt(parent, node, numChildren);
      }
      /**
       * 노드의 지정된 인덱스 위치에 자식 노드를 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드.
       * @param node 추가할 자식 노드.
       * @param index 자식 노드 삽입 위치의 인덱스.
       * @returns {boolean}
       */

    }, {
      key: "addNodeAt",
      value: function addNodeAt(parent, node, index) {
        return this.addNodesAt(parent, [node], index);
      }
      /**
       * 부모 노드에 자식 노드를 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드
       * @param nodes 추가할 자식 노드 목록
       * @returns {boolean}
       */

    }, {
      key: "addNodes",
      value: function addNodes(parent, nodes) {
        var children = this.getNativeChildren(parent),
            numChildren = children && children.length || 0;
        return this.addNodesAt(parent, nodes, numChildren);
      }
      /**
       * 노드의 지정된 인덱스 위치에 자식 노드목록을 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드.
       * @param nodes 추가할 자식 노드 목록
       * @param index 자식 노드 삽입 위치의 인덱스.
       * @returns {boolean}
       */

    }, {
      key: "addNodesAt",
      value: function addNodesAt(parent, nodes, index) {
        if (!nodes || nodes.length <= 0) {
          return false;
        }

        if (!parent) {
          parent = this._rootNode;
        }

        index = Math.max(index, 0);
        createChildrenField(parent, this.childrenField);
        var displayableChildren = this.getChildren(parent),
            children = this.getNativeChildren(parent),
            numChildren = children && children.length || 0,
            numNodes = nodes.length,
            i,
            node;

        if (displayableChildren !== children) {
          node = displayableChildren[index];
          index = children.indexOf(node);

          if (index < 0) {
            index = numChildren;
          }
        }

        index = Math.min(index, numChildren); //1. 부모 노드 닫기.

        this._internalCloseNode(parent, true); //2. 노드 추가


        for (i = 0; i < numNodes; i++) {
          node = nodes[i];

          this._removeParentMapping(node);

          children.splice(index + i, 0, node);

          this._addParentMapping(parent, node);
        } //3. 차일드 목록 삭제.


        this._removeChildrenMapping(parent); //4. 부모 노드 다시 열기.


        this._internalOpenNode(parent, true);

        this._dispatchNodeEvent('node-add', false, false, nodes, parent);

        return true;
      }
      /**
       * 부모 노드에서 자식 노드를 삭제합니다.
       * @param parent 부모 노드입니다.
       * @param node 삭제할 자식 노드 입니다.
       * @returns {boolean}
       */

    }, {
      key: "removeNode",
      value: function removeNode(parent, node) {
        var _this2 = this;

        if (!parent) {
          parent = this._rootNode;
        }

        var children = this.getNativeChildren(parent),
            removeIndex = children ? children.indexOf(node) : -1;

        if (removeIndex < 0) {
          return false;
        } //부모노드 맵 삭제.


        var removedNodes = this.find(function (node) {
          return true;
        }, node); // 부모 노드 닫기.

        this._internalCloseNode(parent, true); //차일드 목록 삭제.


        this._removeChildrenMapping(parent);

        removedNodes && removedNodes.forEach(function (o) {
          _this2._removeOpenNodeMapping(o);

          _this2._removeChildrenMapping(o);

          _this2._removeParentMapping(o);
        });
        children.splice(removeIndex, 1); // 부모 노드 다시 열기.

        this._internalOpenNode(parent, true);

        this._dispatchNodeEvent('node-remove', false, false, node, parent);

        return true;
      }
      /**
       * 해당 node가 있는지 확인합니다.
       * @param node {Object | Array}
       * @return {boolean} 노드가 포함되어 있으면 true.
       */

    }, {
      key: "contains",
      value: function contains(node) {
        if (Array.isArray(node)) {
          var nodes = node.slice(0);
          this.find(function (o) {
            var index = nodes.indexOf(o);

            if (index >= 0) {
              nodes.splice(index, 1);
            }
          });
          return nodes.length === 0;
        } else {
          return !!this.findOne(function (o) {
            return node === o;
          });
        }
      }
      /**
       * 해당 노드가 확장되어 있는지 확인합니다.
       * @param node
       * @return {boolean} 노드가 확장되어 있으면 true.
       */

    }, {
      key: "isOpenNode",
      value: function isOpenNode(node) {
        if (node === this._rootNode) {
          return true;
        }

        return this._openNodesMap.has(node);
      }
      /**
       * 해당 노느가 출력된 노드인지 확인합니다.
       * @param node
       * @return {boolean} 출련된 노드면 true.
       */

    }, {
      key: "isDisplayableNode",
      value: function isDisplayableNode(node) {
        var p = node;

        while (p) {
          if (!this.isOpenNode(p)) {
            return false;
          }

          p = this.getParentNode(p);
        }

        return true;
      }
      /**
       * 해당 노드를 확장합니다.
       * @param node
       * @return {boolean} 해당 노드가 확장되면 true.
       */

    }, {
      key: "openNode",
      value: function openNode(node) {
        if (node !== null && !this.isOpenNode(node) && this._dispatchNodeEvent('node-opening', false, true, node)) {
          this._addOpenNodeMapping(node);

          this._internalOpenNode(node, true);

          this._dispatchNodeEvent('node-open', false, false, node);

          return true;
        }

        return false;
      }
    }, {
      key: "_internalOpenNode",
      value: function _internalOpenNode(node, dispatch) {
        if (this.isDisplayableNode(node)) {
          var children = this._internalGetDisplayableChildren(node, true);

          if (children && children.length > 0) {
            var nodes = this._displayableNodes,
                index = node === this._rootNode ? nodes.length : nodes.indexOf(node);

            if (index >= 0) {
              index += 1;
              arrayInsert(nodes, index, children);

              if (dispatch) {
                this._dispatchCollectionEvent('add', children, index);
              }

              if (this._displayPolicy === NO_PARENT && node && node !== this._rootNode) {
                arrayRemove(nodes, index - 1, [node]);

                this._dispatchCollectionEvent('remove', [node], index - 1);
              }
            }
          }
        }
      }
      /**
       * 해당 노드를 축소합니다.
       * @param node
       * @return {boolean} 해당 노드가 축소되면 true.
       */

    }, {
      key: "closeNode",
      value: function closeNode(node) {
        if (node !== null && this.isOpenNode(node) && this._dispatchNodeEvent('node-closing', false, true, node)) {
          this._internalCloseNode(node, true);

          this._removeOpenNodeMapping(node);

          this._dispatchNodeEvent('node-close', false, false, node);

          return true;
        }

        return false;
      }
    }, {
      key: "_internalCloseNode",
      value: function _internalCloseNode(node, dispatch) {
        if (this.isDisplayableNode(node)) {
          var children = this._internalGetDisplayableChildren(node, false);

          if (children && children.length > 0) {
            var index = this._displayableNodes.indexOf(children[0]);

            if (index >= 0) {
              arrayRemove(this._displayableNodes, index, children);

              if (dispatch) {
                this._dispatchCollectionEvent('remove', children, index);
              }
            }
          }
        }
      }
      /**
       * 해당 노드 배열을 확장합니다.
       * @param nodes
       */

    }, {
      key: "openNodes",
      value: function openNodes(nodes) {
        var numNodes = nodes && nodes.length,
            node,
            i;

        this._openNodesMap.clear();

        for (i = 0; i < numNodes; i++) {
          node = nodes[i];

          this._addOpenNodeMapping(node);
        }

        this._resetDisplayableNodes();

        this._active = this._displayableNodes;

        this._dispatchCollectionEvent('refresh');
      }
      /**
       * 확장되어있는 노드목록을 반환합니다.
       * @returns {Array} 확장된 노드 목록
       */

    }, {
      key: "getOpenedNodes",
      value: function getOpenedNodes() {
        var nodes = [];

        this._openNodesMap.forEach(function (value, key) {
          nodes.push(key);
        });

        return nodes;
      }
      /**
       * 해당 노드의 레벨을 반환합니다.
       * @returns {Number} 노드 레벨
       */

    }, {
      key: "getNodeLevel",
      value: function getNodeLevel(node) {
        if (node === null) {
          return -1;
        }

        var level = -1,
            active = this._internalGetParentNode(node);

        while (active) {
          active = this._internalGetParentNode(active);
          level++;
        }

        return level;
      }
      /**
       * 해당 노드의 깊이를 반환합니다.
       * @param node
       */

    }, {
      key: "getNodeDepth",
      value: function getNodeDepth(node) {
        var nodes = !node ? this.toArray() : [node];
        return nodes.reduce(function (a, b) {
          return Math.max(a, getDepth(b));
        }, 1);
      }
      /**
       * 전체 노드를 탐색합니다.
       * 지정된 함수(callBack)에 대해 true를 반환하는 모든 항목이 포함된 새 배열을 만듭니다
       * @param callback  function callback(node, parent, children)
       * @param prefetchNode 시작 기준 노드입니다. 지정되지 않으면 루트노드를 기준으로 합니다.
       * @param postOrder true 이면 후위탐색, false 이면 전위탐색
       * @return true를 반환하는 항목의 배열입니다.
       */

    }, {
      key: "find",
      value: function find(callback, prefetchNode, postOrder) {
        if (this.source && callback) {
          var parent = prefetchNode && this.getParentNode(prefetchNode) || null;
          var children = prefetchNode && [prefetchNode] || this.getNativeChildren(parent);
          return _find.call(this, parent, children, callback, postOrder, false);
        }

        return null;
      }
      /**
       * 전체 노드를 탐색합니다.
       * 지정된 함수(callBack)에 대해 처음으로 true를 반환하는 항목을 반환하고 탐색을 중지합니다.
       * @param callback  function callback(node, parent, children)
       * @param prefetchNode 시작 기준 노드입니다. 지정되지 않으면 루트노드를 기준으로 합니다.
       * @param postOrder true 이면 후위탐색, false 이면 전위탐색
       * @return 처음으로 true를 반환하는 항목입니다.
       */

    }, {
      key: "findOne",
      value: function findOne(callback, prefetchNode, postOrder) {
        if (this.source && callback) {
          var parent = prefetchNode && this.getParentNode(prefetchNode) || null,
              children = prefetchNode && [prefetchNode] || this.getNativeChildren(parent),
              result = _find.call(this, parent, children, callback, postOrder, true);

          if (result && result.length > 0) {
            return result[0];
          }
        }

        return null;
      }
      /**
       * 전체 노드를 확장합니다.
       */

    }, {
      key: "expandAll",
      value: function expandAll() {
        this.openNodes(this._getParentsInNodes(this.getNativeChildren(null)));
      }
      /**
       * 전체 노드를 축소합니다.
       */

    }, {
      key: "collapseAll",
      value: function collapseAll() {
        this.openNodes([]);
      }
    }, {
      key: "_resetDisplayableNodes",
      value: function _resetDisplayableNodes() {
        this._displayableNodes = [];

        this._internalOpenNode(this._rootNode, false);
      }
    }, {
      key: "_internalRefresh",
      value: function _internalRefresh() {
        this._openNodesMap.clear();

        this._parentMap.clear();

        this._childrenMap.clear(); //루트 노드 생성.
        //외부에서는 사용되지 않음.


        this._rootNode = createRootNode(this.source, this.childrenField);

        this._resetDisplayableNodes();

        this._active = this._displayableNodes;
      }
    }, {
      key: "_getParentsInNodes",
      value: function _getParentsInNodes(nodes) {
        var numNodes = nodes && nodes.length || 0,
            parents = [],
            node,
            children,
            i;

        for (i = 0; i < numNodes; i++) {
          node = nodes[i];
          children = this.getChildren(node);

          if (children && children.length > 0) {
            parents.push(node);
            parents = parents.concat(this._getParentsInNodes(children));
          }
        }

        return parents;
      }
    }, {
      key: "_addOpenNodeMapping",
      value: function _addOpenNodeMapping(node) {
        this._openNodesMap.set(node, true);
      }
    }, {
      key: "_removeOpenNodeMapping",
      value: function _removeOpenNodeMapping(node) {
        this._openNodesMap.delete(node);
      }
    }, {
      key: "_addAllParentMapping",
      value: function _addAllParentMapping() {
        var _this3 = this;

        if (!this._lockAllParentMapping) {
          this._lockAllParentMapping = true;
          this.find(function (node, parent) {
            if (!parent) {
              parent = _this3._rootNode;
            }

            _this3._addParentMapping(parent, node);
          }, null, false);
          this._lockAllParentMapping = false;
        }
      }
    }, {
      key: "_addParentMapping",
      value: function _addParentMapping(parent, node) {
        this._parentMap.set(node, parent);

        if (!parent) {
          console.warn('HierarchyList._addParentMapping !!!', node);
        }
      }
    }, {
      key: "_removeParentMapping",
      value: function _removeParentMapping(node) {
        this._parentMap.delete(node);
      }
    }, {
      key: "_addChildrenMapping",
      value: function _addChildrenMapping(node, children) {
        this._childrenMap.set(node, children);
      }
    }, {
      key: "_removeChildrenMapping",
      value: function _removeChildrenMapping(node) {
        this._childrenMap.delete(node);
      }
    }, {
      key: "_dispatchNodeEvent",
      value: function _dispatchNodeEvent(type, bubbles, cancelable, nodes, parent) {
        if (!nodes) {
          nodes = [];
        } else if (!Array.isArray(nodes)) {
          nodes = [nodes];
        }

        var first = nodes.length > 0 ? nodes[0] : null;

        if (first !== null && !parent) {
          parent = this.getParentNode(first);
        }

        var event = new CustomEvent(type, {
          bubbles: bubbles,
          cancelable: cancelable,
          detail: {
            collection: this,
            nodes: nodes,
            node: first,
            parent: parent
          }
        });
        return this.dispatchEvent(event);
      }
    }, {
      key: "displayableNodes",
      get: function get() {
        return this._displayableNodes;
      }
    }, {
      key: "childrenField",
      get: function get() {
        return this._childrenField;
      },
      set: function set(v) {
        if (this._childrenField !== v) {
          this._childrenField = v;

          this._reset();
        }
      }
    }, {
      key: "displayPolicy",
      get: function get() {
        return this._displayPolicy;
      },
      set: function set(v) {
        if (this._displayPolicy !== v) {
          this._displayPolicy = v;
          this.reset();
        }
      }
    }]);

    return HierarchyList;
  }(IList);

  function appendToUrl(url, key, value) {
    var lc = url.charAt(url.length - 1);
    if (lc !== '?' && lc !== '&') url = url + '&';
    url = url + key;
    if (value !== undefined) url = url + '=' + value;
    return url;
  }
  /**
   * Append parameters to URL query string.
   *
   * @function params
   * @memberOf vrix.net.url
   * @param {string|function} url - Base URL.
   * @param {object|function|string} paramsOrKey - The object contains key-value pair parameters. Or parameter key.
   * @param {*} [value] - Parameter value.
   * @returns {string} - URL.
   */


  function paramsTo(url, paramsOrKey, value) {
    // url
    if (url == null) return '';
    if (typeof url !== 'string' && typeof url !== 'function') throw new TypeError('`url` argument must be `string` or `function` type.');

    while (typeof url === 'function') {
      url = url();
    }

    if (url == null) return '';
    if (typeof url !== 'string') throw new TypeError('`url()` result is invalid type.');
    if (url.trim().length <= 0) return ''; // paramsOrKey

    if (typeof paramsOrKey !== 'string' && _typeof(paramsOrKey) !== 'object' && typeof paramsOrKey !== 'function') throw new TypeError('`paramsOrKey` argument is invalid type.');

    while (typeof paramsOrKey === 'function') {
      paramsOrKey = paramsOrKey();
    }

    if (paramsOrKey == null) return url; // No parameters.

    var key = typeof paramsOrKey === 'string' ? encodeURIComponent(paramsOrKey.trim()) : null;
    var params = _typeof(paramsOrKey) === 'object' ? paramsOrKey : null;
    if (key == null && params == null) throw new TypeError('Invalid `paramsOrKey` argument.');
    if (url.indexOf('?') < 0) url = url + '?'; // Append query-string starter.

    if (key != null) {
      // Validate key.
      if (key.length <= 0) throw new Error('Key must not be empty.');

      if (value === undefined) {
        // Key only.
        url = appendToUrl(url, key);
      } else if (value != null) {
        while (typeof value === 'function') {
          value = value();
        }

        if (value != null) {
          if (Array.isArray(value)) {
            // Array type.
            value.forEach(function (e) {
              if (e != null) {
                if (Array.isArray(e)) throw new Error('Array in array is not supported. key=' + key);
                if (_typeof(e) === 'object') throw new Error('`object` type in array is not supported. key=' + key);
                url = appendToUrl(url, key, encodeURIComponent(e));
              }
            });
          } else {
            if (_typeof(value) === 'object') throw new Error('`object` type is not supported. key=' + key);
            url = appendToUrl(url, key, encodeURIComponent(value));
          }
        } else console.warn('No `value()` result.');
      }
    } else {
      for (var k in params) {
        var _value = params[k];

        if (_value != null) {
          if (!Array.isArray(_value) && _typeof(_value) === 'object') throw new TypeError('`object` type is not supported. key=' + key);
          url = paramsTo(url, k, _value);
        }
      }
    }

    if (url.charAt(url.length - 1) === '?') url = url.substring(0, url.length - 1); // No parameter.
    //TODO Validate URL length.

    return url;
  }
  function paramsFrom(url) {
    var queryStringIndex = url.lastIndexOf('?');
    var query = {};

    if (queryStringIndex >= 0) {
      var entries = url.substring(queryStringIndex + 1).split('&');
      entries.forEach(function (e) {
        var kv = e.split('=');

        if (kv.length > 2) {
          console.warn('Invalid query-string entry. (' + e + ')');
        } else {
          if (kv.length < 2) kv = [e, true];
          var k = decodeURIComponent(kv[0]);
          var v = decodeURIComponent(kv[1]);

          if (query[k] !== undefined) {
            if (Array.isArray(query[k])) {
              query[k].push(v);
            } else {
              query[k] = [query[k], v];
            }
          } else {
            query[k] = v;
          }
        }
      });
    }

    return query;
  }

  /**
   * Apply path-variables to URI template.
   *
   * @function pathVars
   * @memberOf vrix.net.url
   * @param {string|function} uri - URI template.
   * @param {Object|function} pathVars - Path-variables to map to URI.
   * @param {string} [varOpen] - The token that means a path-variable opening.
   * @param {string} [varClose] - The token that means a path-variable closing.
   * @returns {string} - Mapped URI.
   * @see {@link vrix.defaults.net.url.pathVars}
   */
  function pathVars(uri, pathVars, varOpen, varClose) {
    if (uri == null || uri.trim().length <= 0) return '';
    if (typeof uri !== 'string' && typeof uri !== 'function') throw new TypeError('`uri` argument must be `string` or `function` type.');

    while (typeof uri === 'function') {
      uri = uri();
    }

    if (uri == null || typeof uri !== 'string') throw new TypeError('Invalid `uri`.');
    if (_typeof(pathVars) !== 'object' && typeof pathVars !== 'function') throw new TypeError('`pathVars` argument must be `object` or `function` type.');

    while (typeof pathVars === 'function') {
      pathVars = pathVars();
    }

    if (pathVars == null) return uri; // No path-variable.

    if (_typeof(pathVars) !== 'object') throw new TypeError('Invalid `pathVars`.');
    if (varOpen == null) varOpen = vrix.defaults.net.url.pathVars.varOpen;
    if (typeof varOpen !== 'string') throw new TypeError('`varOpen` argument must be `string` type.');
    if (varOpen.trim().length <= 0) throw new TypeError('`varOpen` argument must be not empty.');
    if (varClose == null) varClose = vrix.defaults.net.url.pathVars.varClose;
    if (typeof varClose !== 'string') throw new TypeError('`varClose` argument must be `string` type.');
    if (varClose.trim().length <= 0) throw new TypeError('`varClose` argument must be not empty.');
    var otl = varOpen.length;
    var ctl = varClose.length;
    var cursor = 0;
    var oi;
    var ci;
    var vi;
    var pathValue;

    while ((oi = uri.indexOf(varOpen, cursor)) >= 0) {
      // varOpen index.
      ci = uri.indexOf(varClose, cursor); // varClose index.

      if (ci < 0) throw new Error('Could not found varClose(`' + varClose + '`).');
      if (ci < oi) throw new Error('Could not found varOpen(`' + varOpen + '`).');
      vi = uri.indexOf(varOpen, oi + otl); // Duplicate validation index.

      if (vi >= 0 && vi < ci) throw new Error('Duplicated varOpen. location=...' + uri.substring(oi, ci) + '...');
      pathValue = pathVars[uri.substring(oi + otl, ci)];
      if (pathValue != null) pathValue = encodeURIComponent(pathValue);else throw new Error('Could not found path-variable-value in pathVars. key=' + uri.substring(oi + otl, ci));
      uri = uri.substring(0, oi) + pathValue + uri.substring(ci + ctl);
      cursor = oi + pathValue.length;
    } //TODO Check URL length.


    return uri;
  }

  var cookie = {};

  if (document && document.cookie) {
    var tokens = decodeURIComponent(document.cookie).split(';');
    tokens.forEach(function (token) {
      token = token.trim();
      var eqIndex = token.indexOf('=');

      if (eqIndex < 0) {
        cookie[token] = true;
        return;
      }

      var key = token.substring(0, eqIndex).trim();
      if (key.length > 0) cookie[key] = token.substring(eqIndex + 1).trim();
    });
  }
  /**
   * Get cookie value.
   * No `key` argument to returns cookie key-value pairs.
   *
   * @function get
   * @memberOf vrix.browser.cookie
   * @param {string|function} [key] - Cookie key.
   * @returns {string|Object<string, string>} - Cookie value or cookie key-value pairs.
   */


  function get(key) {
    if (key === undefined) return cookie;
    if (typeof key === 'function') key = key();
    if (key == null) return null;
    if (typeof key !== 'string') throw new TypeError('`key` is not `string` type.');
    return cookie[key.trim()];
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var resolveUrl = createCommonjsModule(function (module, exports) {
    // Copyright 2014 Simon Lydell
    // X11 (“MIT”) Licensed. (See LICENSE.)
    void function (root, factory) {
      {
        module.exports = factory();
      }
    }(commonjsGlobal, function () {
      function resolveUrl()
      /* ...urls */
      {
        var numUrls = arguments.length;

        if (numUrls === 0) {
          throw new Error("resolveUrl requires at least one argument; got none.");
        }

        var base = document.createElement("base");
        base.href = arguments[0];

        if (numUrls === 1) {
          return base.href;
        }

        var head = document.getElementsByTagName("head")[0];
        head.insertBefore(base, head.firstChild);
        var a = document.createElement("a");
        var resolved;

        for (var index = 1; index < numUrls; index++) {
          a.href = arguments[index];
          resolved = a.href;
          base.href = resolved;
        }

        head.removeChild(base);
        return resolved;
      }

      return resolveUrl;
    });
  });

  /**
   * @callback vrix.net~ContentTypeResolver
   * @param {*} body
   * @return {string} Content type string to set to http request header. i.e. application/json
   */

  /**
   * @callback vrix.net~BodyTransformer
   * @param {*} body
   * @param {string} contentType
   * @return {*} Transformed body.
   */

  /**
   * @typedef {object} vrix.net~HttpOptions
   * @type {object}
   * @property {object<string, *>} [pathVars] - Path-variables to map to URL.
   * @property {string} [varOpen] - The token that means a path-variable opening.
   * @property {string} [varClose] - The token that means a path-variable closing.
   * @property {object<string, *>} [headers] - Key-value pairs to the header to be sent.
   * @property {string} [responseType] - An enumerated value that defines the response type.
   * @property {string} [user] - The optional user name to use for authentication purposes.
   * @property {string} [password] - The optional password to use for authentication purposes.
   * @property {boolean} [useHiddenMethod]
   * @property {string} [hiddenMethodParamName]
   * @property {vrix.net~ContentTypeResolver} [contentTypeResolver]
   * @property {vrix.net~BodyTransformer} [bodyTransformer]
   * @see {@link vrix.net.url.params}
   * @see {@link vrix.net.url.pathVars}
   * @see {@link vrix.enums.net.http.responseType}
   */

  /**
   * @typedef {object} vrix.net~HttpPending
   * @type {vrix.ProgressPromise}
   * @property {vrix.ProgressPromise} upload - The promise for uploading progress.
   * @property {XMLHttpRequest} xhr - XMLHttpRequest.
   * @property {function} abort - Aborts the request if it has already been sent.
   */

  /**
   * Send a http-request to the server.
   *
   * @public
   * @function
   * @param {string|function} [url] - URL to send the request to.
   * @param {object<string, *>} [params] - Request parameters to query string.
   * @param {string|function} [method] - HTTP method to use, such as 'GET', 'POST', 'PUT', 'DELETE', etc.
   * @param {*} [body]
   * @param {vrix.net~HttpOptions} [options]
   * @returns {ProgressPromise}
   * @see {@link vrix.defaults.net.http}
   */

  function http(url, params, method, body, options) {
    options = mixin({}, vrix.defaults.net.http, options || {});
    if (url == null) url = '/'; // Null to root path.

    if (arguments.length === 2 && Object.keys(arguments[1]).find(function (key) {
      return key === 'params' || key === 'method' || key === 'body' || key === 'responseType';
    })) {
      var arg = arguments[1];
      params = arg.params || {};

      if ('method' in arg) {
        method = arg.method;
      }

      if ('body' in arg) {
        body = arg.body;
      }

      if ('responseType' in arg) {
        options.responseType = arg.responseType;
      }
    }

    if (!!options.baseUrl) {
      url = resolveUrl(options.baseUrl, url);
    }

    if (options.pathVars != null) {
      url = pathVars(url, options.pathVars, options.varOpen, options.varClose);
    }

    method = method || options.method;

    if (options.useHiddenMethod) {
      if (method.toUpperCase() !== 'GET' && method.toUpperCase() !== 'POST') {
        params = params || {};
        params[options.hiddenMethodParamName] = method;
        method = 'POST';
      }
    }

    if (params != null) url = paramsTo(url, params);
    var headers = options.headers || {}; //TODO Validate headers.

    var contentType; // Find `Content-Type` header.

    for (var headerName in headers) {
      if (headerName.toLowerCase() === 'content-type') {
        contentType = headers[headerName];
        break;
      }
    }

    var contentTypeResolver = options.contentTypeResolver;

    if (contentType == null && contentTypeResolver != null) {
      // Resolve `Content-Type` header.
      if (typeof contentTypeResolver !== 'function') throw new TypeError('`contentTypeResolver` is not a `function`.');
      contentType = contentTypeResolver(body);

      if (contentType != null) {
        if (typeof contentType !== 'string') throw new TypeError('`contentTypeResolver()` result is not `string` type.');else headers['Content-Type'] = contentType;
      }
    }

    var bodyTransformer = options.bodyTransformer;

    if (bodyTransformer != null) {
      // Transform body.
      if (typeof bodyTransformer !== 'function') throw new TypeError('`bodyTransformer` is not a `function`.');
      body = bodyTransformer(body, contentType);
    }

    var responseType = options.responseType;
    var user = options.user;
    if (user != null && typeof user !== 'string') throw new TypeError('`options.user` is not a `string`.');
    var password = options.password;
    if (password != null && typeof password !== 'string') throw new TypeError('`options.password` is not a `string`.');
    var xhr = new XMLHttpRequest();
    var temporary = {};
    var promise = new ProgressPromise(function (resolve, reject, progress) {
      var pending = false;
      /* Begin of promise properties block */

      temporary.upload = new ProgressPromise(function (resolve, reject, progress) {
        if (xhr.upload) {
          xhr.upload.onprogress = function (e) {
            progress(e.loaded, e.total);
          };

          xhr.upload.onload = resolve;
          xhr.upload.onerror = xhr.upload.ontimeout = xhr.upload.onabort = reject;
        } else reject(new TypeError('Could not found `XMLHttpRequest#upload`.'));
      });
      temporary.upload.catch(function (error) {
        console.warn('Error in uploading...', error);
      });

      temporary.abort = function () {
        if (pending) xhr.abort();
      };
      /* End of promise properties block */
      // When progress.


      xhr.onprogress = function (e) {
        progress(e.loaded, e.total);
      }; // When done.


      xhr.onload = function (e) {
        pending = false;
        var status = xhr.status;

        if (status >= 200 && status < 300) {
          // Success.
          // IE11 bug fixed.
          try {
            var response = xhr.response;

            if (response != null) {
              response = responseType === 'json' && typeof response === 'string' && response.length > 0 ? JSON.parse(response) : response;
            }

            resolve(response);
          } catch (error) {
            reject({
              event: e,
              xhr: xhr,
              error: error
            });
          }
        } else {
          reject({
            event: e,
            xhr: xhr
          });
        }
      }; // When failed.


      xhr.onerror = xhr.ontimeout = xhr.onabort = function (e) {
        pending = false;
        reject({
          event: e,
          xhr: xhr
        });
      }; // Open.


      if (user != null && user.length > 0) {
        if (password != null && password.length > 0) xhr.open(method, url, true, user, password);else xhr.open(method, url, true, user);
      } else xhr.open(method, url, true); // Response type.


      xhr.responseType = responseType; // CSRF header.

      var csrf = get('XSRF-TOKEN');
      if (csrf && csrf.length) xhr.setRequestHeader('X-XSRF-TOKEN', csrf); // Headers from user.

      if (headers) {
        for (var key in headers) {
          if (headers[key] != null) xhr.setRequestHeader(key, headers[key]);
        }
      } // Send.


      pending = true;
      xhr.send(body);
    });
    promise.upload = temporary.upload;
    promise.xhr = xhr;
    promise.abort = temporary.abort;
    return promise;
  }

  /**
   * Download a file from URL.
   *
   * @public
   * @function
   * @param {string|function} [url] - URL to send the request to.
   * @param {object<string, *>} [params] - Request parameters to query string.
   * @param {string|function} [method] - HTTP method to use, such as 'GET', 'POST', 'PUT', 'DELETE', etc.
   * @param {*} [body]
   * @param {vrix.net~HttpOptions} [options]
   * @param {string} [fileName] - File name to save.
   * @returns {vrix.net~HttpPending}
   * @see {@link vrix.net.http}
   */

  function download(url, params, method, body, fileName) {
    var options = {};
    if (url == null) url = '/'; // Null to root path.

    if (arguments.length === 2 && Object.keys(arguments[1]).find(function (key) {
      return key === 'params' || key === 'method' || key === 'body' || key === 'fileName';
    })) {
      var arg = arguments[1];
      params = arg.params || {};

      if ('method' in arg) {
        method = arg.method;
      }

      if ('body' in arg) {
        body = arg.body;
      }

      if ('fileName' in arg) {
        fileName = arg.fileName;
      }
    }

    options.responseType = 'blob';
    var promise = http(url, params, method, body, options).then(function (result) {
      if (fileName == null) {
        // Find file name from Content-Disposition header.
        var contentDisposition = promise.xhr.getResponseHeader('Content-Disposition');

        if (contentDisposition != null && contentDisposition.trim().length > 0) {
          var tokens = contentDisposition.split(';');
          var n = tokens.length;
          var token;
          var kvs;
          var k;
          var value;

          for (var i = 0; i < n; ++i) {
            token = tokens[i];
            kvs = token.split('=');

            if (kvs.length >= 2) {
              k = kvs[0].trim();

              if (k.toLowerCase() === 'filename') {
                value = kvs[1].trim();

                while (value.charAt(0) === '"') {
                  value = value.substring(1);
                }

                while (value.charAt(value.length - 1) === '"') {
                  value = value.substring(0, value.length - 1);
                }

                fileName = decodeURIComponent(value);
                break;
              }
            }
          }
        }

        if (fileName == null) throw new Error('Could not found `fileName`.');
      }

      if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(result, fileName);else {
        // Others
        var _url = URL.createObjectURL(result);

        var a = document.createElement('a');
        a.href = _url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        requestAnimationFrame(function () {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(_url);
        });
      }
      return result;
    });
    return promise;
  }

  /**
   * Browse and select file.
   *
   * @function browse
   * @memberOf vrix.file
   * @param {string} [accept] - A String, containing a comma-separated list of accepted content types.
   * @param {boolean} [multiple] - Specifies whether more than one file can be selected. When set to true, it specifies that the user is allowed to select more than one file.
   * @returns {Promise<FileList>}
   */
  function browse(accept, multiple) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');

    if (accept != null) {
      if (typeof accept !== 'string') throw new Error('`accept` argument must be `string` type.');
      input.setAttribute('accept', accept);
    }

    if (multiple) {
      input.setAttribute('multiple', 'multiple');
    }

    input.style.display = 'none';
    document.body.appendChild(input); // Prevent event propagation.

    input.onclick = function (e) {
      e.stopPropagation();
      delete input.onclick;
    };

    var promise = new Promise(function (resolve) {
      // Detect done.
      var clearInput = function clearInput() {
        input.removeEventListener('change', clearInput);
        document.body.removeChild(input);
        resolve(input.files);
      };

      input.addEventListener('change', clearInput);
    }); // Perform click.

    input.click();
    return promise;
  }

  function buildTemplate(domString) {
    domString = (domString || '').replace(/(\t|\n$)/g, '');
    var fragment, template;

    if (typeof HTMLTemplateElement === 'undefined') {
      template = document.createElement('div');
      template.innerHTML = domString;
      fragment = document.createDocumentFragment();
      fragment.appendChild(template.firstChild);
    } else {
      template = document.createElement('template');
      template.innerHTML = domString;
      fragment = template.content;
    }

    return fragment;
  }
  function mountDomElement(instance) {
    var dom = instance.constructor.__dom__;
    var root = document.importNode(dom.template, true);

    if (!root) {
      return;
    }

    root = root.querySelector('*');
    var parent = root.parentNode || root.parentElement;

    if (parent) {
      parent.removeChild(root);
    }

    var domMap = {};
    dom.idList.forEach(function (id) {
      var element = root.querySelector('[id="' + id + '"]');

      if (!element && root.getAttribute('id') === id) {
        element = root;
      }

      domMap[id] = element;
      domMap[id].removeAttribute('id');
    });
    root.__instance__ = instance;
    instance.DOM = domMap;
    instance.root = root;
  }
  function buildDomElement(value) {
    if (value instanceof HTMLElement) {
      return value.cloneNode();
    } else if (value instanceof Function) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return value.apply(null, args);
    } else if (typeof value === 'string') {
      var template = buildTemplate(value);

      if (template) {
        return document.importNode(template, true).querySelector('*');
      }
    }

    return null;
  } //----------------------------------
  //  Element helper
  //----------------------------------

  function setPosition(element, x, y, isForceUpdate) {
    if (element.__x !== x || element.__y !== y || isForceUpdate) {
      var style = element.style;
      style.left = x + 'px';
      style.top = y + 'px';
      element.__x = x;
      element.__y = y;
      return true;
    }

    return false;
  }
  function setTranslate(element, x, y, isForceUpdate) {
    if (element.__x !== x || element.__y !== y || isForceUpdate) {
      var style = element.style;
      element.style.transform = style.webkitTransform = 'translate(' + x + 'px,' + y + 'px)';
      element.__x = x;
      element.__y = y;
    }
  }
  function setWidth(element, value) {
    if (element.__width !== value) {
      element.__width = value;
      element.style.width = isNaN(value) ? value : value + 'px';
      return true;
    }

    return false;
  }
  function setHeight(element, value) {
    if (element.__height !== value) {
      element.__height = value;
      element.style.height = isNaN(value) ? value : value + 'px';
      return true;
    }

    return false;
  }
  function setMaxHeight(element, value) {
    if (element.__maxHeight !== value) {
      element.__maxHeight = value;
      element.style.maxHeight = isNaN(value) ? value : value + 'px';
      return true;
    }

    return false;
  }
  function setSize(element, w, h) {
    var widthChanged = setWidth(element, w);
    var heightChanged = setHeight(element, h);
    return widthChanged || heightChanged;
  }
  function addClass(element, className) {
    var classList = element.classList;

    if (classList && !classList.contains(className)) {
      classList.add(className);
      return true;
    }

    return false;
  }
  function removeClass(element, className) {
    var classList = element.classList;

    if (classList && classList.contains(className)) {
      classList.remove(className);
      return true;
    }

    return false;
  }
  function setScale(element, value) {
    if (element.__scale !== value) {
      element.__scale = value;
      var style = element.style;
      style.transform = style.OTransform = style.msTransform = style.MozTransform = style.WebkitTransform = 'scale(' + value + ')';
      return true;
    }

    return false;
  }
  var ElementHelper = {
    setPosition: setPosition,
    setTranslate: setTranslate,
    setWidth: setWidth,
    setHeight: setHeight,
    setMaxHeight: setMaxHeight,
    setSize: setSize,
    addClass: addClass,
    removeClass: removeClass
  }; //----------------------------------
  /*

  (function () {
      var helper = vrix.namespace('vrix.helper');

      /!**
       * 정리필요.
       *!/
      helper.interactionHelper = (function () {
          function createDragEvent(type, target, fromEvent, toEvent) {
              const fromX = fromEvent.clientX,
                  fromY = fromEvent.clientY,
                  toX = toEvent.clientX,
                  toY = toEvent.clientY,
                  rect = target.getBoundingClientRect();

              return new CustomEvent(type, {
                  bubbles: false,
                  cancelable: true,
                  detail: {
                      clientX: toX,
                      clientY: toY,
                      downX: fromX,
                      downY: fromY,
                      deltaX: toX - fromX,
                      deltaY: toY - fromY,
                      localX: toX - rect.left,
                      localY: toY - rect.top,
                      fromEvent: fromEvent,
                      toEvent: toEvent,
                      element: target
                  }
              });
          }

          const DefaultOption = {
              dragStartEvents: ['mousedown'],
              draggingEvents: ['mousemove'],
              dragEndEvents: ['mouseup']
          };

          return function (target, option) {

              option = mixin(mixin({}, DefaultOption), option || {});

              var dragReadyFunc,
                  dragStartFunc,
                  draggingFunc,
                  dragEndFunc,
                  isStarted,
                  fromEvent,
                  toEvent;

              function startDrag(event) {
                  fromEvent = event;
                  toEvent = event;
                  isStarted = false;

                  if (!dispatchEvent('drag-ready', dragReadyFunc)) {
                      cancelDrag();
                      return;
                  }

                  option.draggingEvents.forEach(function (eventType) {
                      document.addEventListener(eventType, onDragging);
                  });

                  option.dragEndEvents.forEach(function (eventType) {
                      document.addEventListener(eventType, onDragEnd);
                  });
              }

              function dispatchEvent(type, eventHook) {
                  const event = createDragEvent(type, target, fromEvent, toEvent);
                  if (eventHook instanceof Function) {
                      eventHook(event);
                  }
                  /!* if (isDispatch) {
                   return target.dispatchEvent(event);
                   }*!/
                  return !event.defaultPrevented;
              }

              function onDragging(event) {
                  event.preventDefault();
                  toEvent = event;
                  if (!isStarted) {
                      isStarted = true;
                      if (!dispatchEvent('drag-start', dragStartFunc)) {
                          cancelDrag();
                          return;
                      }
                  }

                  if (isStarted) {
                      dispatchEvent('dragging', draggingFunc);
                  }
              }

              function onDragEnd(event) {
                  event.preventDefault();
                  toEvent = event;
                  if (isStarted) {
                      dispatchEvent('drag-end', dragEndFunc);
                      isStarted = false;
                  }
                  cancelDrag();
              }

              function cancelDrag() {
                  option.draggingEvents.forEach(function (eventType) {
                      document.removeEventListener(eventType, onDragging);
                  });
                  option.dragEndEvents.forEach(function (eventType) {
                      document.removeEventListener(eventType, onDragEnd);
                  });
                  isStarted = false;
              }


              option.dragStartEvents.forEach(function (eventType) {
                  target.addEventListener(eventType, startDrag);
              });

              return {
                  startDrag: startDrag,
                  release: function () {

                  },
                  dragReadyCallback: function (func) {
                      dragReadyFunc = func;
                      return this;
                  },
                  dragStartCallback: function (func) {
                      dragStartFunc = func;
                      return this;
                  },
                  draggingCallback: function (func) {
                      draggingFunc = func;
                      return this;
                  },
                  dragEndCallback: function (func) {
                      dragEndFunc = func;
                      return this;
                  }
              }
          }
      })();
  })();
  */

  var BLOCK_SIZE = 128;
  var BLOCK_SHIFT = 7;
  var BLOCK_MASK = 127;

  function toBlockIndex(value) {
    return value >> BLOCK_SHIFT;
  }

  function toBlockOffset(value) {
    return value & BLOCK_MASK;
  }

  var Block =
  /*#__PURE__*/
  function () {
    function Block(index) {
      _classCallCheck(this, Block);

      this._index = index;
      this._items = new Array(BLOCK_SIZE);
      this._total = 0;
      this._empty = BLOCK_SIZE;
    }

    _createClass(Block, [{
      key: "getTotal",
      value: function getTotal() {
        return this._total;
      }
    }, {
      key: "getItem",
      value: function getItem(index) {
        return this._items[index];
      }
    }, {
      key: "addSize",
      value: function addSize(index, value) {
        var lastValue = this.getSize(BLOCK_MASK); //공간확보

        this._items.splice(index, 0, null);

        if (value != null) {
          this.setSize(index, value);
        }

        this._total -= lastValue || 0;
        this._items.length = BLOCK_SIZE;
      }
    }, {
      key: "removeSize",
      value: function removeSize(index) {
        var removedValue = this.getSize(index);

        this._items.splice(index, 1);

        if (removedValue != null) {
          this._total -= removedValue || 0;
          this._empty = Math.min(BLOCK_SIZE, this._empty + 1);
        }

        return removedValue;
      }
    }, {
      key: "getSize",
      value: function getSize(index) {
        var item = this._items[index];

        if (item) {
          return item.value;
        }

        return undefined;
      }
    }, {
      key: "setSize",
      value: function setSize(index, value) {
        var item = this.getItem(index);

        if (!item) {
          item = {};
          this._items[index] = item;
          this._empty--;
        }

        if (item.value !== value) {
          var old = item.value || 0;
          item.value = value;
          this._total += value - old;
          return true;
        }

        return false;
      }
    }, {
      key: "empty",
      get: function get() {
        return this._empty;
      }
    }]);

    return Block;
  }();

  var Vector =
  /*#__PURE__*/
  function () {
    function Vector() {
      _classCallCheck(this, Vector);

      this._length = 0;
      this._maxIndex = -1;
    }

    _createClass(Vector, [{
      key: "clear",
      value: function clear() {}
    }, {
      key: "length",
      get: function get() {
        return Math.max(this._length > 0 ? this._length : this._maxIndex + 1, 0);
      },
      set: function set(value) {
        if (this._length !== value) {
          this._length = value;

          if (this._length <= this._maxIndex) {
            this._maxIndex = this._length - 1;
          }
        }
      }
      /**
       * 사이즈 설정된 최대 인덱스.
       * @returns {number}
       */

    }, {
      key: "maxIndex",
      get: function get() {
        return this._maxIndex;
      }
    }]);

    return Vector;
  }();

  var LinearVector =
  /*#__PURE__*/
  function (_Vector) {
    _inherits(LinearVector, _Vector);

    function LinearVector() {
      var _this;

      _classCallCheck(this, LinearVector);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LinearVector).call(this));
      _this._defaultSize = 30;
      _this._blocks = [];
      _this._gap = 0;
      return _this;
    }

    _createClass(LinearVector, [{
      key: "clear",
      value: function clear() {
        this._blocks = [];
        this._maxIndex = -1;
      }
    }, {
      key: "setSize",
      value: function setSize(index, value) {
        this._maxIndex = Math.max(index, this._maxIndex);
        var blockIndex = toBlockIndex(index);
        var offset = toBlockOffset(index);

        var block = this._getBlock(blockIndex);

        return block.setSize(offset, value);
      }
    }, {
      key: "getSize",
      value: function getSize(index) {
        return this._getItemValue(this._getItem(index));
      }
    }, {
      key: "indexOf",
      value: function indexOf(size) {
        var index = 0; //recent.index;

        var startY = 0; //recent.startY;

        var blockIndex = toBlockIndex(index);
        var blockOffset = toBlockOffset(index);

        var block = this._getBlock(blockIndex); //블록 총 height


        var total = 0;
        var value = 0;
        var item;

        while (startY < size) {
          item = block.getItem(blockOffset);
          value = this._getItemValue(item) + this.gap;

          if (startY + value > size) {
            break;
          }

          startY += value;
          blockOffset++;

          if (blockOffset >= BLOCK_SIZE) {
            blockOffset = 0;
            blockIndex += 1;
            total = this._getBlockTotalAt(blockIndex);

            while (total + startY < size) {
              startY += total;
              index += BLOCK_SIZE;
              blockIndex += 1;
              total = this._getBlockTotalAt(blockIndex);
            }

            block = this._getBlock(blockIndex);
          }

          index++;
        } //recent.index = index;
        //recent.startY = startY;


        return index;
      }
    }, {
      key: "getPartSize",
      value: function getPartSize(from, to) {
        var total = 0,
            blockIndex,
            index = from;

        while (index <= to) {
          while (toBlockOffset(index) === 0 && index + BLOCK_SIZE < to) {
            blockIndex = toBlockIndex(index);
            total += this._getBlockTotalAt(blockIndex);
            index += BLOCK_SIZE;
          }

          total += this.getSize(index) + this.gap;
          index++;
        }

        return total;
      }
    }, {
      key: "getTotal",
      value: function getTotal() {
        return this.getPartSize(0, this.length - 1) - (this.length > 0 && this.gap || 0);
      }
    }, {
      key: "addSize",
      value: function addSize(index, value) {
        var blocks = this._blocks;
        var numBlocks = blocks.length;
        var blockIndex = toBlockIndex(index),
            blockOffset = toBlockOffset(index),
            i = blockIndex,
            block,
            nextValue;

        for (; i < numBlocks; i++) {
          block = this._getBlock(i); //마지막 값

          nextValue = block.removeSize(BLOCK_MASK);
          block.addSize(blockOffset, value); //다음 블록으로 이동할 아이템

          value = nextValue;
          blockOffset = 0;
        } //캐스팅 비교


        if (nextValue != null) {
          block = this._getBlock(numBlocks);
          block.addSize(0, nextValue);
        }

        this.length++;
        this._maxIndex++;
      }
    }, {
      key: "removeSize",
      value: function removeSize(index) {
        var blocks = this._blocks;
        var numBlocks = blocks.length;
        var blockIndex = toBlockIndex(index),
            blockOffset = toBlockOffset(index),
            i,
            block,
            value,
            preValue = null;
        block = this._getBlock(blockIndex);
        block.removeSize(blockOffset);

        for (i = numBlocks - 1; i >= blockIndex; i--) {
          block = this._getBlock(i);
          value = block.removeSize(0); //캐스팅 비교.

          if (preValue != null) {
            block.setSize(BLOCK_MASK, preValue);
          }

          preValue = value;
        }

        this.length--;
        this._maxIndex--;
      }
    }, {
      key: "_getBlock",
      value: function _getBlock(index) {
        var block = this._blocks[index];

        if (!block) {
          block = this._blocks[index] = new Block(index);
        }

        return block;
      }
    }, {
      key: "_getItem",
      value: function _getItem(index) {
        var blockIndex = toBlockIndex(index);
        var offset = toBlockOffset(index);

        if (blockIndex >= 0 && blockIndex < this._blocks.length) {
          var block = this._getBlock(blockIndex);

          return block.getItem(offset);
        }

        return null;
      }
    }, {
      key: "_getBlockTotal",
      value: function _getBlockTotal(block) {
        return block.getTotal() + block.empty * this.defaultSize + this.gap * BLOCK_SIZE;
      }
    }, {
      key: "_getBlockTotalAt",
      value: function _getBlockTotalAt(blockIndex) {
        return this._getBlockTotal(this._getBlock(blockIndex));
      }
    }, {
      key: "_getItemValue",
      value: function _getItemValue(item) {
        return item && item.value || this.defaultSize;
      }
    }, {
      key: "gap",
      get: function get() {
        return this._gap;
      },
      set: function set(value) {
        this._gap = value;
      }
    }, {
      key: "defaultSize",
      get: function get() {
        return this._defaultSize;
      },
      set: function set(value) {
        this._defaultSize = value;
      }
    }]);

    return LinearVector;
  }(Vector);

  var Layout =
  /*#__PURE__*/
  function () {
    function Layout(instance) {
      _classCallCheck(this, Layout);

      this._listInstance = instance;
      this._linearVector = new LinearVector();
    }

    _createClass(Layout, [{
      key: "clear",
      value: function clear() {
        this._linearVector.clear();
      }
    }, {
      key: "setItemSize",
      value: function setItemSize(index, value) {
        return this._linearVector.setSize(index, value);
      }
    }, {
      key: "getItemSize",
      value: function getItemSize(index) {
        return this._linearVector.getSize(index);
      }
    }, {
      key: "getItemStart",
      value: function getItemStart(index) {
        return this._linearVector.getPartSize(0, index - 1);
      }
    }, {
      key: "getPartSize",
      value: function getPartSize(from, to) {
        return this._linearVector.getPartSize(from, to);
      }
    }, {
      key: "getTotalSize",
      value: function getTotalSize() {
        return this._linearVector.getTotal();
      }
    }, {
      key: "getItemIndexOf",
      value: function getItemIndexOf(size) {
        return this._linearVector.indexOf(size);
      }
    }, {
      key: "beginUpdate",
      value: function beginUpdate() {
        this._oldElements = this._listInstance.getVisibleElements();
        this.updateLinearVector();
      }
    }, {
      key: "doUpdate",
      value: function doUpdate(scrollX, scrollY, width, height, widthChanged, heightChanged) {}
    }, {
      key: "endUpdate",
      value: function endUpdate() {
        this.updateLinearVector();
        this.updateListSize();
      }
    }, {
      key: "updateLinearVector",
      value: function updateLinearVector() {}
    }, {
      key: "updateListSize",
      value: function updateListSize() {}
    }, {
      key: "positionToItemIndex",
      value: function positionToItemIndex(x, y) {
        return -1;
      }
    }, {
      key: "itemIndexToRowIndex",
      value: function itemIndexToRowIndex(itemIndex) {
        return itemIndex;
      }
    }, {
      key: "itemsAdded",
      value: function itemsAdded(location, items) {}
    }, {
      key: "itemsRemoved",
      value: function itemsRemoved(location, items) {}
    }, {
      key: "gap",
      get: function get() {
        return this._linearVector._gap;
      },
      set: function set(value) {
        this._linearVector._gap = value;
      }
    }]);

    return Layout;
  }();

  var VerticalLayout =
  /*#__PURE__*/
  function (_Layout) {
    _inherits(VerticalLayout, _Layout);

    function VerticalLayout(instance) {
      _classCallCheck(this, VerticalLayout);

      return _possibleConstructorReturn(this, _getPrototypeOf(VerticalLayout).call(this, instance));
    }

    _createClass(VerticalLayout, [{
      key: "doUpdate",
      value: function doUpdate(scrollX, scrollY, width, height, widthChanged, heightChanged) {
        var instance = this._listInstance;
        var autoSize = instance.autoSize;
        var collection = instance.collection;
        var rowHeight = instance.rowHeight;
        var endRowIndex = instance.numItems - 1;
        var startRowIndex = this.getItemIndexOf(scrollY);
        var startY = this.getItemStart(startRowIndex);
        var gap = this.gap;
        var index = startRowIndex;
        var yy = startY;
        var viewportHeight = this.calculateViewportHeight();

        while (index <= endRowIndex && yy < scrollY + viewportHeight) {
          var item = collection.get(index);
          var element = instance.createItemElement(index);
          var hh = this.getItemSize(index);

          if (element) {
            instance.updateItemElement(element, item, index);

            if (autoSize) {
              hh = Math.max(rowHeight, instance.calculateElementHeight(element, item, index));
            }

            instance.setLayoutElement(element, 0, yy, undefined, hh);
            instance.pushVisibleElements(element, item, index);
          }

          this.setItemSize(index, hh);
          yy += hh + gap;
          index++; //외부 사이즈 없을때 크기 재확인.

          if (height === 0) {
            viewportHeight = this.calculateViewportHeight();
          }
        }
      }
    }, {
      key: "updateLinearVector",
      value: function updateLinearVector() {
        var instance = this._listInstance;
        var vector = this._linearVector;
        vector.defaultSize = instance.rowHeight;
        vector.gap = instance.verticalGap;
        vector.length = instance.numItems;
      }
    }, {
      key: "updateListSize",
      value: function updateListSize() {
        var instance = this._listInstance;
        var contentLayer = instance.contentLayer;
        var width = this.calculateContentWidth();
        ElementHelper.setSize(contentLayer, 'auto', this.calculateContentHeight());

        if (width !== this.calculateContentWidth() || ElementHelper.setSize(contentLayer, 'auto', this.calculateContentHeight())) ;

        if (instance.rowCount > 0) {
          ElementHelper.setHeight(instance.scrollTarget, this.calculateViewportHeight());
        }
      }
    }, {
      key: "calculateViewportWidth",
      value: function calculateViewportWidth() {
        var instance = this._listInstance;
        var viewRect = instance.getViewportRect(); //let contentRect = instance.getContentRect();

        return viewRect.width;
      }
    }, {
      key: "calculateViewportHeight",
      value: function calculateViewportHeight() {
        var instance = this._listInstance;
        var viewRect = instance.getViewportRect();
        var contentRect = instance.getContentRect();
        var height = 0;

        if (viewRect && contentRect) {
          if (instance.rowCount > 0) {
            height = this.getPartSize(0, instance.normalizedRowCount - 1);
          } else if (viewRect.height <= 0) {
            height = this.calculateContentHeight() - instance.verticalScrollPosition;
          } else {
            var topScrollOffset = contentRect.top - viewRect.top;
            height = Math.max(0, Math.min(viewRect.height - topScrollOffset, viewRect.height, this.calculateContentHeight() - instance.verticalScrollPosition));
          }
        }

        return height;
      }
    }, {
      key: "calculateContentWidth",
      value: function calculateContentWidth() {
        return this.calculateViewportWidth();
      }
    }, {
      key: "calculateContentHeight",
      value: function calculateContentHeight() {
        return this.getTotalSize();
      }
    }, {
      key: "positionToItemIndex",
      value: function positionToItemIndex(x, y) {
        return this.getItemIndexOf(y);
      }
    }, {
      key: "itemsAdded",
      value: function itemsAdded(location, items) {
        var vector = this._linearVector;
        var size = vector.defaultSize;
        items.forEach(function (item, index) {
          vector.addSize(location + index, size);
        });
      }
    }, {
      key: "itemsRemoved",
      value: function itemsRemoved(location, items) {
        var vector = this._linearVector;
        items.forEach(function (item, index) {
          vector.removeSize(location);
        });
      }
    }]);

    return VerticalLayout;
  }(Layout);
  var HorizontalLayout =
  /*#__PURE__*/
  function (_Layout2) {
    _inherits(HorizontalLayout, _Layout2);

    function HorizontalLayout(instance) {
      _classCallCheck(this, HorizontalLayout);

      return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalLayout).call(this, instance));
    }

    _createClass(HorizontalLayout, [{
      key: "doUpdate",
      value: function doUpdate(scrollX, scrollY, width, height, widthChanged, heightChanged) {
        var instance = this._listInstance;
        var collection = instance.collection;
        var autoSize = instance.autoSize;
        var columnWidth = instance.columnWidth;
        var rowHeight = instance.rowHeight;
        var startColumnIndex = this.getItemIndexOf(scrollX);
        var endColumnIndex = instance.numItems - 1;
        var startX = this.getItemStart(startColumnIndex);
        var gap = this.gap;
        var index = startColumnIndex;
        var xx = startX;
        var viewportWidth = this.calculateViewportWidth();

        while (index <= endColumnIndex && xx < scrollX + viewportWidth) {
          var item = collection.get(index);
          var element = instance.createItemElement(index);
          var ww = this.getItemSize(index);

          if (element) {
            instance.updateItemElement(element, item, index);

            if (autoSize) {
              ww = Math.max(columnWidth, instance.calculateElementWidth(element, item, index));
            }

            instance.setLayoutElement(element, xx, 0, ww, rowHeight);
            instance.pushVisibleElements(element, item, index);
          }

          this.setItemSize(index, ww);
          xx += ww + gap;
          index++; //외부 사이즈 없을때 크기 재확인.

          if (width === 0) {
            viewportWidth = this.calculateViewportWidth();
          }
        }
      }
    }, {
      key: "updateLinearVector",
      value: function updateLinearVector() {
        var instance = this._listInstance;
        var vector = this._linearVector;
        vector.defaultSize = instance.columnWidth;
        vector.gap = instance.horizontalGap;
        vector.length = instance.numItems;
      }
    }, {
      key: "updateListSize",
      value: function updateListSize() {
        var instance = this._listInstance;
        var contentLayer = instance.contentLayer;
        var height = this.calculateContentHeight();
        ElementHelper.setSize(contentLayer, this.calculateContentWidth(), height);

        if (height !== this.calculateContentHeight() || ElementHelper.setSize(contentLayer, this.calculateContentWidth(), this.calculateContentHeight())) ;

        if (instance.columnCount > 0) {
          ElementHelper.setHeight(instance.scrollTarget, this.calculateViewportWidth());
        }
      }
    }, {
      key: "calculateViewportWidth",
      value: function calculateViewportWidth() {
        var instance = this._listInstance;
        var viewRect = instance.getViewportRect();
        var contentRect = instance.getContentRect();
        var width = 0;

        if (viewRect && contentRect) {
          if (instance.columnCount > 0) {
            width = this.getPartSize(0, instance.normalizedRowCount - 1);
          } else if (viewRect.width <= 0) {
            width = this.calculateContentWidth() - instance.horizontalScrollPosition;
          } else {
            var leftScrollOffset = contentRect.left - viewRect.left;
            width = Math.max(0, Math.min(viewRect.width - leftScrollOffset, viewRect.width, this.calculateContentWidth() - instance.horizontalScrollPosition));
          }
        }

        return width;
      }
    }, {
      key: "calculateViewportHeight",
      value: function calculateViewportHeight() {
        var instance = this._listInstance;
        /*let viewRect = instance.getViewportRect();
        let contentRect = instance.getContentRect();
         if (viewRect && contentRect) {
            let topScrollOffset = contentRect.top - viewRect.top;
            return Math.min(viewRect.height - topScrollOffset, viewRect.height, contentRect.height);
        }*/

        return instance.rowHeight;
      }
    }, {
      key: "calculateContentWidth",
      value: function calculateContentWidth() {
        return this.getTotalSize();
      }
    }, {
      key: "calculateContentHeight",
      value: function calculateContentHeight() {
        return this.calculateViewportHeight();
      }
    }, {
      key: "positionToItemIndex",
      value: function positionToItemIndex(x, y) {
        return this.getItemIndexOf(x);
      }
    }, {
      key: "itemsAdded",
      value: function itemsAdded(location, items) {
        VerticalLayout.prototype.itemsAdded.apply(this, arguments);
      }
    }, {
      key: "itemsRemoved",
      value: function itemsRemoved(location, items) {
        VerticalLayout.prototype.itemsRemoved.apply(this, arguments);
      }
    }]);

    return HorizontalLayout;
  }(Layout);
  var GridLayout =
  /*#__PURE__*/
  function (_Layout3) {
    _inherits(GridLayout, _Layout3);

    function GridLayout(instance) {
      var _this;

      _classCallCheck(this, GridLayout);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GridLayout).call(this, instance));
      _this._numColumns = 0;
      return _this;
    }

    _createClass(GridLayout, [{
      key: "doUpdate",
      value: function doUpdate(scrollX, scrollY, width, height, widthChanged, heightChanged) {
        var instance = this._listInstance;
        var collection = instance.collection;
        var autoSize = instance.autoSize;
        var rowCount = instance.rowCount;
        var rowHeight = instance.rowHeight;
        var columnWidth = this.columnWidth;
        var numColumns = this.numColumns;
        var numItems = instance.numItems;
        var verticalGap = instance.verticalGap;
        var horizontalGap = instance.horizontalGap;
        var startRowIndex = this.getItemIndexOf(scrollY);
        var endRowIndex = Math.ceil(numItems / numColumns);
        var startY = this.getItemStart(startRowIndex);
        var rowIndex = startRowIndex;
        var index = startRowIndex * numColumns;
        var yy = startY;
        var viewportHeight = this.calculateViewportHeight();

        while (rowIndex <= endRowIndex && yy < scrollY + viewportHeight) {
          var hh = this.getItemSize(rowIndex);
          var maxHeight = rowHeight;
          var xx = 0;
          var columnIndex = 0;

          for (; columnIndex < numColumns && index < numItems; columnIndex++) {
            var item = collection.get(index);
            var element = instance.createItemElement(index);

            if (element) {
              instance.updateItemElement(element, item, index);

              if (autoSize) {
                hh = Math.max(rowHeight, instance.calculateElementHeight(element, item, index));

                if (maxHeight < hh) {
                  maxHeight = hh;
                }
              } else {
                maxHeight = hh;
              }

              instance.setLayoutElement(element, xx, yy, columnWidth, hh);
              instance.pushVisibleElements(element, item, index);
            }

            xx += columnWidth + horizontalGap;
            index++;
          }

          this.setItemSize(rowIndex, maxHeight);
          yy += maxHeight + verticalGap;
          rowIndex++; //외부 사이즈 없을때 크기 재확인.

          if (height === 0) {
            viewportHeight = this.calculateViewportHeight();
          }
        }
      }
    }, {
      key: "updateLinearVector",
      value: function updateLinearVector() {
        var instance = this._listInstance;
        var vector = this._linearVector;
        var verticalGap = instance.verticalGap;
        var horizontalGap = instance.horizontalGap;
        var columnCount = instance.columnCount;
        var columnWidth = instance.columnWidth;
        var viewportWidth = this.calculateViewportWidth();

        if (columnCount > 0 && columnWidth <= 0) {
          columnWidth = Math.floor((viewportWidth - 1 - columnCount * horizontalGap) / columnCount);
        }

        var numColumns = columnCount;

        if (numColumns <= 0) {
          numColumns = Math.max(1, Math.floor(viewportWidth / (columnWidth + horizontalGap)));
        }

        this._columnWidth = columnWidth;

        if (this._numColumns !== numColumns) {
          this._numColumns = numColumns;
          vector.clear();
        }

        if (vector.defaultSize !== instance.rowHeight) {
          vector.defaultSize = instance.rowHeight;
          vector.clear();
        }

        vector.defaultSize = instance.rowHeight;
        vector.gap = verticalGap;
        vector.length = Math.ceil(instance.numItems / numColumns);
      }
    }, {
      key: "updateListSize",
      value: function updateListSize() {
        var instance = this._listInstance;
        var contentLayer = instance.contentLayer;
        ElementHelper.setSize(contentLayer, 'auto', this.calculateContentHeight());

        if (ElementHelper.setSize(contentLayer, 'auto', this.calculateContentHeight())) ; //console.log('List.content grid changed!!!');
        //외부 컨테이너 크기 설정


        if (instance.rowCount > 0) {
          ElementHelper.setHeight(instance.scrollTarget, this.calculateViewportHeight());
        }

        contentLayer.style.maxWidth = this.calculateContentWidth() + 'px';
        ElementHelper.setTranslate(contentLayer, Math.max(0, Math.floor((instance.root.offsetWidth - this.calculateContentWidth()) / 2)), 0);
      }
    }, {
      key: "calculateViewportWidth",
      value: function calculateViewportWidth() {
        return VerticalLayout.prototype.calculateViewportWidth.apply(this, arguments);
      }
    }, {
      key: "calculateViewportHeight",
      value: function calculateViewportHeight() {
        return VerticalLayout.prototype.calculateViewportHeight.apply(this, arguments);
      }
    }, {
      key: "calculateContentWidth",
      value: function calculateContentWidth() {
        return this.columnWidth * this.numColumns + (this.numColumns - 1) * this._listInstance.horizontalGap;
      }
    }, {
      key: "calculateContentHeight",
      value: function calculateContentHeight() {
        return this.getTotalSize();
      }
    }, {
      key: "positionToItemIndex",
      value: function positionToItemIndex(x, y) {
        var instance = this._listInstance;
        var contentLayer = instance.contentLayer;
        var horizontalGap = instance.horizontalGap;
        var columnWidth = this.columnWidth;
        var numColumns = this.numColumns;
        x -= contentLayer.offsetLeft;
        var columnIndex = -1;

        for (var i = 0, left = 0, right = columnWidth; i < numColumns; i++) {
          if (x >= left && x <= right) {
            columnIndex = i;
            break;
          }

          left = right + horizontalGap;
          right = left + columnWidth;
        }

        var rowIndex = this.getItemIndexOf(y);

        if (columnIndex >= 0 && rowIndex >= 0) {
          return rowIndex * numColumns + columnIndex;
        }

        return -1;
      }
    }, {
      key: "itemIndexToRowIndex",
      value: function itemIndexToRowIndex(itemIndex) {
        return parseInt(itemIndex / this.numColumns);
      }
    }, {
      key: "numColumns",
      get: function get() {
        return this._numColumns;
      }
    }, {
      key: "columnWidth",
      get: function get() {
        return this._columnWidth;
      }
    }]);

    return GridLayout;
  }(Layout);
  var FlowLayout =
  /*#__PURE__*/
  function (_Layout4) {
    _inherits(FlowLayout, _Layout4);

    function FlowLayout(instance) {
      var _this2;

      _classCallCheck(this, FlowLayout);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FlowLayout).call(this, instance));

      _this2._clearRowInfos();

      return _this2;
    }

    _createClass(FlowLayout, [{
      key: "doUpdate",
      value: function doUpdate(scrollX, scrollY, width, height, widthChanged, heightChanged) {
        var instance = this._listInstance;
        var collection = instance.collection;
        var autoSize = instance.autoSize;
        var rowHeight = instance.rowHeight;
        var numItems = instance.numItems;
        var verticalGap = instance.verticalGap;
        var horizontalGap = instance.horizontalGap;
        var rowInfos = this._rowInfos; //컬럼 개수 계산.

        var viewportWidth = this.calculateViewportWidth();
        var isContinuousMode = this.virtualScrollMode !== 'normal';
        var rowIndex;
        var itemIndex;

        if (widthChanged) {
          rowIndex = 0;
          itemIndex = 0;

          this._clearRowInfos();
        } else {
          var startRowIndex = this.getItemIndexOf(scrollY);
          var rowInfo = rowInfos[startRowIndex];
          rowIndex = startRowIndex;

          if (rowInfo) {
            itemIndex = rowInfo.start;
          } else {
            for (; rowIndex >= 0; rowIndex--) {
              if (rowInfos[rowIndex]) {
                break;
              }
            }

            if (rowIndex <= 0) {
              itemIndex = 0;
              rowIndex = 0;
            } else {
              itemIndex = rowInfos[rowIndex].end + 1;
              rowIndex += 1;
            }
          }
        }

        var yy = this.getItemStart(rowIndex),
            viewportHeight = this.calculateViewportHeight(),
            xx,
            ww,
            hh,
            maxHeight,
            startItemIndex,
            endItemIndex,
            item,
            element,
            nextElement,
            pendingElements;

        while (rowIndex < numItems && itemIndex < numItems && yy < scrollY + viewportHeight) {
          startItemIndex = itemIndex;
          endItemIndex = itemIndex;
          hh = this.getItemSize(rowIndex);
          maxHeight = rowHeight;
          xx = 0;
          pendingElements = [];

          for (; itemIndex < numItems; itemIndex++) {
            item = collection.get(itemIndex);
            element = nextElement || instance.createItemElement(itemIndex);
            nextElement = null;

            if (element) {
              instance.updateItemElement(element, item, itemIndex);
              ww = instance.calculateElementWidth(element, item, itemIndex); //한 행의 한개의 엘리먼트는 필수.

              if (startItemIndex < itemIndex && xx + ww > viewportWidth) {
                nextElement = element;
                break;
              }

              if (autoSize) {
                hh = instance.calculateElementHeight(element, item, itemIndex);

                if (maxHeight < hh) {
                  maxHeight = hh;
                }
              } else {
                maxHeight = hh;
                ElementHelper.setHeight(element, hh);
              }

              ElementHelper.setTranslate(element, xx, yy);
              xx += ww + horizontalGap;
            }

            pendingElements.push(element);
            endItemIndex = itemIndex;
          }

          this.setItemSize(rowIndex, maxHeight);

          this._updateRowInfos(rowIndex, startItemIndex, endItemIndex); //보이지 않는다면 해당행 삭제.


          if (yy + maxHeight < scrollY && !isContinuousMode) {
            instance.freeElements(pendingElements);
          } else {
            pendingElements.forEach(function (element, i) {
              if (element) {
                var index = startItemIndex + i;

                var _item = collection.get(index);

                instance.pushVisibleElements(element, _item, index);
              }
            });
          }

          yy += maxHeight + verticalGap;
          rowIndex++;
        }

        if (nextElement) {
          instance.freeElements([nextElement]);
        }
      }
    }, {
      key: "updateLinearVector",
      value: function updateLinearVector() {
        var instance = this._listInstance;
        var vector = this._linearVector;
        vector.defaultSize = instance.rowHeight;
        vector.gap = instance.verticalGap;
        var numItems = instance.numItems;
        var rowInfos = this._rowInfos;
        var numRowInfos = rowInfos.length;
        var length;

        if (numRowInfos > 0) {
          var lastInfo = rowInfos[numRowInfos - 1];

          if (lastInfo.end === numItems - 1) {
            length = numRowInfos;
          } else {
            length = Math.ceil(numItems / (this._totalItems / rowInfos.length));
          }
        } else {
          length = numItems;
        }

        vector.length = length;
      }
    }, {
      key: "updateListSize",
      value: function updateListSize() {
        var instance = this._listInstance;
        var contentLayer = instance.contentLayer;
        ElementHelper.setSize(contentLayer, this.calculateContentWidth(), this.calculateContentHeight());

        if (ElementHelper.setSize(contentLayer, this.calculateContentWidth(), this.calculateContentHeight())) ;
      }
    }, {
      key: "calculateViewportWidth",
      value: function calculateViewportWidth() {
        return VerticalLayout.prototype.calculateViewportWidth.apply(this, arguments);
      }
    }, {
      key: "calculateViewportHeight",
      value: function calculateViewportHeight() {
        return VerticalLayout.prototype.calculateViewportHeight.apply(this, arguments);
      }
    }, {
      key: "calculateContentWidth",
      value: function calculateContentWidth() {
        return this.calculateViewportWidth();
      }
    }, {
      key: "calculateContentHeight",
      value: function calculateContentHeight() {
        return this.getTotalSize();
      }
    }, {
      key: "positionToItemIndex",
      value: function positionToItemIndex(x, y) {
        var instance = this._listInstance;
        var contentLayer = instance.contentLayer;
        var rowIndex = this.getItemIndexOf(y);
        return -1;
      }
    }, {
      key: "itemIndexToRowIndex",
      value: function itemIndexToRowIndex(itemIndex) {
        var rowInfos = this._rowInfos;
        var numRowInfos = rowInfos.length || 0;

        for (var i = 0, info; i < numRowInfos; i++) {
          info = rowInfos[i];

          if (info && itemIndex <= info.end) {
            return i;
          }
        }

        return -1;
      }
    }, {
      key: "itemsAdded",
      value: function itemsAdded(location, items) {
        this._deleteRowInfos(location);
      }
    }, {
      key: "itemsRemoved",
      value: function itemsRemoved(location, items) {
        this._deleteRowInfos(location);
      }
    }, {
      key: "_deleteRowInfos",
      value: function _deleteRowInfos(itemIndex) {
        var rowInfos = this._rowInfos;
        var rowIndex = Math.max(0, this.itemIndexToRowIndex(location));

        while (rowIndex < rowInfos.length) {
          var info = rowInfos.pop();
          this._totalItems -= info.end - info.start + 1;
        }
      }
    }, {
      key: "_updateRowInfos",
      value: function _updateRowInfos(rowIndex, startItemIndex, endItemIndex) {
        var rowInfos = this._rowInfos;
        var info = rowInfos[rowIndex];

        if (!info) {
          info = rowInfos[rowIndex] = {};
        }

        var oldCount = info.end - info.start;

        if (info.start !== startItemIndex) {
          info.start = startItemIndex;
        }

        if (info.end !== endItemIndex) {
          info.end = endItemIndex;
        }

        if (!isNaN(oldCount)) {
          this._totalItems -= oldCount + 1;
        }

        this._totalItems += endItemIndex - startItemIndex + 1;
      }
    }, {
      key: "_clearRowInfos",
      value: function _clearRowInfos() {
        this._rowInfos = [];
        this._totalItems = 0;
        this.updateLinearVector();
      }
    }]);

    return FlowLayout;
  }(Layout);

  function findElement(value) {
    if (value instanceof HTMLElement) {
      return value;
    }

    if (typeof value === 'string') {
      return document.querySelector(value);
    }

    return null;
  }

  function parseNodeIds(node) {
    var idList = [];

    if (node.attributes) {
      var attributes = Array.prototype.slice.call(node.attributes),
          num = attributes.length,
          attribute,
          i;

      for (i = 0; i < num; i++) {
        attribute = attributes[i];

        if (attribute.name === 'id' && attribute.value) {
          idList.push(attribute.value);
        }
      }
    }

    if (node.firstChild) {
      var child = node.firstChild;

      while (child) {
        idList = idList.concat(parseNodeIds(child));
        child = child.nextSibling;
      }
    }

    return idList;
  }

  function initDom(clazz) {
    if (!clazz.hasOwnProperty('__dom__')) {
      var template = buildTemplate(clazz.__template__());
      var idList = parseNodeIds(template) || [];
      Object.defineProperty(clazz, '__dom__', {
        value: {
          template: template,
          idList: idList
        },
        writable: false,
        configurable: false,
        enumerable: false
      });
    }
  }

  var Element =
  /*#__PURE__*/
  function () {
    function Element() {
      _classCallCheck(this, Element);

      this._reasonsMask = 0;
      this._invalidateFlag = false;
      mountDomElement(this);
    }

    _createClass(Element, [{
      key: "addEventListener",
      value: function addEventListener(type, listener, useCapture) {
        this.root.addEventListener.apply(this.root, arguments);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, listener, useCapture) {
        this.root.removeEventListener.apply(this.root, arguments);
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        return this.root.dispatchEvent.apply(this.root, arguments);
      }
    }, {
      key: "doLayout",
      value: function doLayout() {}
    }, {
      key: "validateNow",
      value: function validateNow() {
        if (this._invalidateFlag) {
          this.doLayout();
          this._reasonsMask = 0;
          this._invalidateFlag = false;
          return true;
        }

        return false;
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        this._invalidateFor();
      }
    }, {
      key: "_invalidateFor",
      value: function _invalidateFor(reason) {
        var _this = this;

        this._reasonsMask |= reason | 0;

        if (!this._invalidateFlag) {
          this._invalidateFlag = true;
          window.requestAnimationFrame(function () {
            _this.validateNow();
          });
        }
      }
    }, {
      key: "_isInvalidateReason",
      value: function _isInvalidateReason(reason) {
        return (this._reasonsMask & reason) === reason;
      }
    }], [{
      key: "create",
      value: function create(container) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        initDom(this);
        var parent = findElement(container);

        if (parent) {
          var instance = mixin(new this(parent, mixin({
            parent: parent
          }, options)), options);
          parent.appendChild(instance.root);
          return instance;
        }

        throw Error('Invalid container');
      }
    }]);

    return Element;
  }();

  var _fixBabelExtend$2 = function (O) {
    var gPO = O.getPrototypeOf || function (o) {
      return o.__proto__;
    },
        sPO = O.setPrototypeOf || function (o, p) {
      o.__proto__ = p;
      return o;
    },
        construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
      var Constructor,
          a = [null];
      a.push.apply(a, args);
      Constructor = Parent.bind.apply(Parent, a);
      return sPO(new Constructor(), Class.prototype);
    };

    return function fixBabelExtend(Class) {
      var Parent = gPO(Class);
      return sPO(Class, sPO(function Super() {
        return construct(Parent, arguments, gPO(this).constructor);
      }, Parent));
    };
  }(Object);
  var INTERVAL = 250;

  var SizeDetector = _fixBabelExtend$2(
  /*#__PURE__*/
  function (_EventTarget) {
    _inherits(SizeDetector, _EventTarget);

    function SizeDetector(target) {
      var _this;

      _classCallCheck(this, SizeDetector);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SizeDetector).call(this));
      _this._target = target;

      _this._init();

      return _this;
    }

    _createClass(SizeDetector, [{
      key: "start",
      value: function start(interval) {
        var _this2 = this;

        if (isNaN(interval)) {
          interval = INTERVAL;
        }

        if (!this._intervalId) {
          this._intervalId = setInterval(function () {
            if (_this2._doCheck()) {
              _this2.dispatchEvent(new CustomEvent('size-change', {
                bubbles: false,
                cancelable: false,
                detail: {
                  element: _this2._target,
                  width: _this2._width,
                  height: _this2._height
                }
              }));
            }
          }, interval);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this._intervalId) {
          clearInterval(this._intervalId);

          this._init();
        }
      }
    }, {
      key: "_init",
      value: function _init() {
        this._intervalId = null;
        this._width = -1;
        this._height = -1;
      }
    }, {
      key: "_doCheck",
      value: function _doCheck() {
        var visible = this._isVisible();

        var width;
        var height;

        if (!visible) {
          width = 0;
          height = 0;
        } else {
          width = this._getTargetWidth();
          height = this._getTargetHeight();
        }

        if (width !== this._width || height !== this._height) {
          this._width = width;
          this._height = height;
          return width > 0 && height > 0;
        }

        return false;
      }
    }, {
      key: "_getTargetWidth",
      value: function _getTargetWidth() {
        return this._target.clientWidth;
      }
    }, {
      key: "_getTargetHeight",
      value: function _getTargetHeight() {
        return this._target.clientHeight;
      }
    }, {
      key: "_isVisible",
      value: function _isVisible() {
        var rect = this._target.getBoundingClientRect();

        return rect.width > 0 && rect.height > 0;
      }
    }]);

    return SizeDetector;
  }(EventTarget$1));

  var ITEM_TYPE_MAP = {
    'mousedown': 'item-down',
    'mouseup': 'item-up',
    'click': 'item-click',
    'dblclick': 'item-double-click'
  };
  var RENDER_MODES = ['none', 'normal', 'lazy'];
  var ELEMENT_CACHE_COUNT = 0;
  var Reason = {
    SCROLL_VALUE_CHANGE: 1 << 1,
    ITEMS_CHANGE: 1 << 2,
    SIZE_CHANGE: 1 << 3,
    SELECTION_CHANGE: 1 << 4,
    CARET_CHANGE: 1 << 5,
    SYNC_SCROLL: 1 << 6,
    FACTORY_CHANGE: 1 << 7,
    LAYOUT_UPDATE: 1 << 8,
    ITEMS_UPDATE: 1 << 9,
    ALL: 0xFFFFFFFF
  };

  var List =
  /*#__PURE__*/
  function (_Element) {
    _inherits(List, _Element);

    _createClass(List, null, [{
      key: "__template__",
      value: function __template__() {
        return "<div class=\"list-container\" style=\"position:relative;\">\n            <div id=\"contentLayer\" class=\"list-content\" style=\"display:block;position:relative;overflow:hidden\"></div> \n        </div>";
      }
    }]);

    function List(container, options) {
      var _this;

      _classCallCheck(this, List);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this));
      _this.elementCacheCount = ELEMENT_CACHE_COUNT;
      _this._container = container;
      _this._contentLayer = _this.DOM.contentLayer; //'none', 'normal', 'lazy'
      //default 'normal'

      _this._renderMode = 'normal';
      _this._collection = null;
      _this._rowHeight = 30;
      _this._autoHeight = false;
      _this._columnWidth = 0;
      _this._numColumns = 1;
      _this._horizontalScrollPosition = 0;
      _this._verticalScrollPosition = 0;
      _this._displayedElements = [];
      _this._visibleElements = [];
      _this._visibleIndices = [];
      _this._freedElements = [];
      _this._typicalMeta = null;
      _this._horizontalGap = 0;
      _this._verticalGap = 0;
      _this._columnCount = 0;
      _this._rowCount = 0;
      _this._minRowCount = 0;
      _this._maxRowCount = 0;
      _this._caretIndex = -1;
      _this._triggerEvent = null;
      _this._boundCollectionChange = _this._onCollectionChange.bind(_assertThisInitialized(_this));
      _this._boundScrollTargetScroll = _this._onScrollTargetScroll.bind(_assertThisInitialized(_this));

      var boundMouseEvent = _this._onMouseEvent.bind(_assertThisInitialized(_this));

      ['mousedown', 'mouseup', 'click', 'dblclick'].forEach(function (type) {
        _this.addEventListener(type, boundMouseEvent);
      });
      _this.scrollTarget = container;
      _this.layout = 'vertical';

      _this.selector.collectionFactory = function () {
        if (_this.collection) {
          _this.collection.removeEventListener('collection-change', _this._boundCollectionChange);
        }

        var collection = new ArrayList();
        collection.addEventListener('collection-change', _this._boundCollectionChange);
        return collection;
      };

      _this.selector.addEventListener('selection-changing', function (event) {
        if (!_this._redispatchEvent(event)) {
          event.preventDefault();
        }
      });

      _this.selector.addEventListener('selection-change', function (event) {
        _this._redispatchEvent(event);

        _this._invalidateFor(Reason.SELECTION_CHANGE);
      });

      _this.selectOnKeys = [13, 32];
      _this.selectOnClick = true;
      _this.useCtrlkeyOnSelection = false;
      _this.dispatchEventHook = null;
      _this.measureElementWidth = null;
      _this.measureElementHeight = null;

      _this.addEventListener('keydown', _this._onKeydown.bind(_assertThisInitialized(_this)));

      return _this;
    }

    _createClass(List, [{
      key: "getVisibleIndices",

      /**
       * 리스트에 표시된 인덱스를 반환합니다.
       * @returns {Array.<Number>}
       */
      value: function getVisibleIndices() {
        return this._visibleIndices.slice(0);
      }
      /**
       * 리스트에 표시된 엘리먼트를 반환합니다.
       * @returns {Array.<HTMLElement>}
       */

    }, {
      key: "getVisibleElements",
      value: function getVisibleElements() {
        return this._visibleElements.slice(0);
      }
    }, {
      key: "getElementAll",
      value: function getElementAll() {
        var elements = [];

        if (this.renderMode !== 'normal') {
          elements = elements.concat(this._displayedElements);
        } else if (this._visibleElements) {
          elements = elements.concat(this._visibleElements);
        }

        if (this._freedElements) {
          elements = elements.concat(this._freedElements);
        }

        return elements;
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        this.verticalScrollPosition = 0;
        this.freeElements(this.getElementAll());
        this._caretIndex = -1;
        this._visibleIndices = [];
        this._visibleElements = [];
        this._displayedElements = [];
        this._freedElements = [];

        this._layoutControl.clear();

        setSize(this.contentLayer, 0, 0);
      }
    }, {
      key: "clearCacheForLayout",
      value: function clearCacheForLayout() {
        this.freeElements(this.getElementAll());
        this._visibleIndices = [];
        this._visibleElements = [];
        this._displayedElements = [];
        this._freedElements = [];

        this._layoutControl.clear();
      }
      /**
       * 리스트의 자원을 모두 해제합니다.
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._unregisterScroller();

        if (this.root) {
          if (this.root.parentElement) {
            this.root.parentElement.removeChild(this.root);
          }
        }

        this.items = null;
      }
    }, {
      key: "getViewportRect",
      value: function getViewportRect() {
        var target = this._normalizedScrollTarget;
        var x = 0,
            y = 0,
            w = 0,
            h = 0;

        if (target === window) {
          w = window.innerWidth;
          h = window.innerHeight;
        } else if (target) {
          var rect = target.getBoundingClientRect();
          x = rect.left + target.clientLeft;
          y = rect.top + target.clientTop;
          w = target.clientWidth;
          h = target.clientHeight;
        }

        return {
          left: x,
          top: y,
          width: w,
          height: h
        };
      }
    }, {
      key: "getContentRect",
      value: function getContentRect() {
        return this._contentLayer.getBoundingClientRect();
      }
    }, {
      key: "calculateViewportWidth",
      value: function calculateViewportWidth() {
        return this._layoutControl.calculateViewportWidth();
      }
    }, {
      key: "calculateViewportHeight",
      value: function calculateViewportHeight() {
        return this._layoutControl.calculateViewportHeight();
      }
    }, {
      key: "calculateContentWidth",
      value: function calculateContentWidth() {
        return this._layoutControl.calculateContentWidth();
      }
    }, {
      key: "calculateContentHeight",
      value: function calculateContentHeight() {
        return this._layoutControl.calculateContentHeight();
      }
      /**
       * 해당 index 아이템 위치를 반환합니다.
       * 레이아웃 'vertical' 일때 y 위치,  'horizontal' x 위치
       * @param index
       * @returns {Number}
       */

    }, {
      key: "getItemStart",
      value: function getItemStart(index) {
        return this._layoutControl.getItemStart(index);
      }
      /**
       * 해당 index 항목의 크기를 반환합니다.
       * @param index
       * @returns {*}
       */

    }, {
      key: "getItemSize",
      value: function getItemSize(index) {
        return this._layoutControl.getItemSize(index);
      }
      /**
       * 지정된 distance를 포함하는 항목의 인덱스를 반환합니다.
       * @param size
       * @returns {Number}
       */

    }, {
      key: "getItemIndexOf",
      value: function getItemIndexOf(distance) {
        return this._layoutControl.getItemIndexOf(distance);
      }
      /**
       * 해당 인덱스의 항목의 크기를 변경합니다.
       * @param index
       * @param size
       */

    }, {
      key: "setItemSize",
      value: function setItemSize(index, size) {
        return this._layoutControl.setItemSize(index, size);
      }
      /**
       * 해당 인덱스의 위치로 스크롤합니다. 이미 표시되어 있는 경우 스크롤 되지 않습니다.
       * @param index
       */

    }, {
      key: "scrollToIndex",
      value: function scrollToIndex(index) {
        index = Math.max(0, Math.min(index, this.numItems - 1));
        var MAX_COUNT = 10; //임시 예외 처리용.

        var rowIndex = this.itemIndexToRowIndex(index);
        var isHorizontal = this.layout === 'horizontal';
        var i = 0;

        do {
          this._internalScrollToIndex(rowIndex);

          var scrollStart = void 0;
          var scrollEnd = void 0;

          if (isHorizontal) {
            scrollStart = this.horizontalScrollPosition;
            scrollEnd = scrollStart + this.calculateViewportWidth() + 1;
          } else {
            scrollStart = this.verticalScrollPosition;
            scrollEnd = scrollStart + this.calculateViewportHeight() + 1;
          }

          var itemTop = this.getItemStart(rowIndex);
          var itemBottom = itemTop + this.getItemSize(rowIndex);

          if (itemTop >= scrollStart && itemBottom <= scrollEnd) {
            break;
          }
        } while (i++ < MAX_COUNT);

        if (i >= MAX_COUNT) {
          console.warn('List.scrollToIndex error!!!');
        }
      }
      /**
       * 지정된 항목의 위치로 스크롤합니다. 이미 표시되어 있는 경우 스크롤 되지 않습니다.
       * @param item
       */

    }, {
      key: "scrollToItem",
      value: function scrollToItem(item) {
        if (this.collection) {
          this.scrollToIndex(this.collection.indexOf(item));
        }
      }
      /**
       * 해당 인덱스로 스크롤합니다. index 항목을 최상위로 배치합니다.
       * @param index
       */

    }, {
      key: "scrollToTop",
      value: function scrollToTop(index) {
        this.scrollToIndex(index);
        var element = this.getItemElementAt(index);

        if (element) {
          var sRect = this.scrollTarget.getBoundingClientRect();
          var tRect = element.getBoundingClientRect();
          var delta = tRect.top - sRect.top;

          if (delta > 0) {
            this.verticalScrollPosition += delta;
          }
        }
      }
      /**
       * 해당 인덱스로 스크롤합니다. index 항목을 최하위로 배치합니다.
       * @param index
       */

    }, {
      key: "scrollToBottom",
      value: function scrollToBottom(index) {
        this.scrollToIndex(index);
        var element = this.getItemElementAt(index);

        if (element) {
          var sRect = this.scrollTarget.getBoundingClientRect();
          var tRect = element.getBoundingClientRect();
          var delta = sRect.bottom - tRect.bottom;

          if (delta > 0) {
            this.verticalScrollPosition -= delta;
          }
        }
      }
      /**
       * x,y 위치에 있는 아이템 인덱스를 반환합니다.
       * @param x
       * @param y
       * @returns {*|number}
       */

    }, {
      key: "positionToIndex",
      value: function positionToIndex(x, y) {
        return this._layoutControl.positionToItemIndex(x, y);
      }
    }, {
      key: "itemIndexToRowIndex",
      value: function itemIndexToRowIndex(itemIndex) {
        return this._layoutControl.itemIndexToRowIndex(itemIndex);
      }
    }, {
      key: "getItemElement",
      value: function getItemElement(item) {
        return this.getItemElementAt(this.collection.indexOf(item));
      }
    }, {
      key: "getItemElementAt",
      value: function getItemElementAt(index) {
        var offset = this._visibleIndices.indexOf(index);

        if (offset >= 0) {
          return this._visibleElements[offset];
        }

        if (index < this._displayedElements.length) {
          return this._displayedElements[index];
        }

        return null;
      }
      /**
       * 표시 목록을 다시 렌더링합니다.
       */

    }, {
      key: "invalidate",
      value: function invalidate() {
        this._invalidateFor(Reason.LAYOUT_UPDATE);
      }
    }, {
      key: "beginVisibleElements",
      value: function beginVisibleElements() {
        this._newVisibleIndices = [];
        this._newVisibleElements = [];
        this._oldVisibleElements = this._visibleElements.slice(0);
        this._cacheIsContinuousMode = this.renderMode !== 'normal';
      }
    }, {
      key: "endVisibleElements",
      value: function endVisibleElements() {
        if (this._cacheIsContinuousMode) {
          this._hideElements(this._visibleElements);
        } else {
          this.freeElements(this._visibleElements);
        }

        this._visibleIndices = this._newVisibleIndices;
        this._visibleElements = this._newVisibleElements;
        delete this._cacheIsContinuousMode;
      }
    }, {
      key: "pushVisibleElements",
      value: function pushVisibleElements(element, item, index) {
        if (this._cacheIsContinuousMode) {
          this._displayedElements[index] = element;
        }

        this._newVisibleIndices.push(index);

        this._newVisibleElements.push(element);
      }
      /**
       * 렌더러 갱신.
       * @param element
       * @param item
       * @param index
       */

    }, {
      key: "updateItemElement",
      value: function updateItemElement(element, item, index) {
        var func = this.renderItemCallback;

        if (func) {
          func(element, item, index, {
            selected: this.selectedItems.indexOf(item) >= 0,
            active: this.caretIndex === index
          });
        }
      }
    }, {
      key: "createItemElement",
      value: function createItemElement(index) {
        var indices = this._visibleIndices;
        var elements = this._visibleElements;
        var offset = indices.indexOf(index);
        var element;

        if (offset >= 0) {
          element = elements[offset];
          indices[offset] = null;
          elements[offset] = null;
        }

        if (!element) {
          element = this._displayedElements[index];
        }

        if (!element) {
          element = this._freedElements.shift();
        }

        if (!element) {
          element = buildDomElement(this.itemFactory, this.collection.get(index), index);
        }

        if (!(element instanceof HTMLElement)) ; else {
          if (this._contentLayer !== element.parentElement) {
            this._contentLayer.appendChild(element);
          }

          this._showElement(element);
        }

        return element;
      }
    }, {
      key: "calculateElementWidth",
      value: function calculateElementWidth(element, item, index) {
        if (this.measureElementWidth instanceof Function) {
          return this.measureElementWidth(element, item, index);
        } else if (element.getMeasureWidth instanceof Function) {
          return element.getMeasureWidth(item, index);
        }

        return element.offsetWidth; //element.getBoundingClientRect().width;
      }
    }, {
      key: "calculateElementHeight",
      value: function calculateElementHeight(element, item, index) {
        if (this._isAutoHeight()) {
          var value = parseFloat(this._getTypicalMetaValue('maxHeight'));

          if (!value) {
            ElementHelper.setMaxHeight(element, 'none');
          }
        }

        if (this.measureElementHeight instanceof Function) {
          return this.measureElementHeight(element, item, index);
        } else if (element.getMeasureHeight instanceof Function) {
          return element.getMeasureHeight(item, index);
        }

        return element.offsetHeight; //element.getBoundingClientRect().height;
      }
    }, {
      key: "setLayoutElement",
      value: function setLayoutElement(element, x, y, width, height) {
        if (this._isAutoHeight()) {
          ElementHelper.setMaxHeight(element, height);
        } else {
          ElementHelper.setHeight(element, height);
        }

        if (width) {
          ElementHelper.setWidth(element, width);
        }

        ElementHelper.setTranslate(element, x, y);
      }
      /**
       *
       * @param elements
       * @private
       */

    }, {
      key: "freeElements",
      value: function freeElements(elements) {
        var _this2 = this;

        elements = elements || [];
        var contentLayer = this._contentLayer,
            freeItemCallback = this.freeItemCallback,
            freedElements = this._freedElements,
            visibleElements = this._visibleElements,
            visibleIndices = this._visibleIndices,
            displayedElements = this._displayedElements;
        elements.forEach(function (element) {
          if (element) {
            var result = freeItemCallback && freeItemCallback(element);
            /*if (result === false) {
                let offset = visibleElements.indexOf(element);
                let index = offset >= 0 ? visibleIndices[offset] : -1;
                if (index >= 0) {
                    displayedElements[index] = element;
                    helper.setTranslate(element, 0, -10000);
                    return;
                }
            }*/

            var displayedIndex = displayedElements.indexOf(element);

            if (displayedIndex >= 0) {
              displayedElements[displayedIndex] = undefined;
            }

            if (freedElements.length < _this2.elementCacheCount) {
              freedElements.push(element);

              _this2._hideElement(element);
            } else if (element.parentElement) {
              contentLayer.removeChild(element);
            }
          }
        });
      }
    }, {
      key: "mouseEventToIndex",
      value: function mouseEventToIndex(event) {
        var layer = this.contentLayer;

        if (layer.contains(event.target)) {
          var clientX = event.clientX,
              clientY = event.clientY,
              rect = layer.getBoundingClientRect(),
              x = Math.round(clientX - rect.left),
              y = Math.round(clientY - rect.top);
          var index = this.positionToIndex(x, y);

          if (index >= 0 && index < this.numItems) {
            return index;
          }
        }

        return -1;
      }
    }, {
      key: "_isAutoHeight",
      value: function _isAutoHeight() {
        return this.autoSize && (this.layout === 'vertical' || this.layout === 'grid');
      }
    }, {
      key: "_internalScrollToIndex",
      value: function _internalScrollToIndex(index) {
        var delta = this._getScrollIndexDelta(index),
            scrollChanged = false,
            oldVsp,
            oldHsp;

        if (delta) {
          oldVsp = this.verticalScrollPosition;
          oldHsp = this.horizontalScrollPosition;
          this.horizontalScrollPosition += delta.x;
          this.verticalScrollPosition += delta.y;

          if (this.horizontalScrollPosition !== oldHsp || this.verticalScrollPosition !== oldVsp) {
            scrollChanged = true;
            this.invalidate();
            this.validateNow();
          }
        }

        return scrollChanged;
      }
    }, {
      key: "_getScrollIndexDelta",
      value: function _getScrollIndexDelta(index) {
        var isHorizontal = this.layout === 'horizontal';
        var scrollStart;
        var scrollEnd;

        if (isHorizontal) {
          scrollStart = this.horizontalScrollPosition;
          scrollEnd = scrollStart + this.calculateViewportWidth();
        } else {
          scrollStart = this.verticalScrollPosition;
          scrollEnd = scrollStart + this.calculateViewportHeight();
        }

        var itemStart = this.getItemStart(index),
            itemEnd = itemStart + this.getItemSize(index),
            dyt = itemStart - scrollStart,
            dyb = itemEnd - scrollEnd;

        if (scrollStart <= itemStart && itemEnd <= scrollEnd) {
          return null;
        }

        var delta = Math.abs(dyt) < Math.abs(dyb) ? dyt : dyb;
        return isHorizontal ? {
          x: delta,
          y: 0
        } : {
          x: 0,
          y: delta
        };
      }
    }, {
      key: "_registerScroller",
      value: function _registerScroller() {
        var _this3 = this;

        if (this.scrollTarget) {
          this._normalizedScrollTarget.addEventListener('scroll', this._boundScrollTargetScroll);

          var detector = this._sizeDetector = new SizeDetector(this.scrollTarget);
          detector.addEventListener('size-change', function (event) {
            //this.syncScroll();
            _this3.dispatchEvent(new CustomEvent(event.type, {
              bubbles: false,
              detail: event.detail
            }));

            _this3._invalidateFor(Reason.SIZE_CHANGE);
          });
          detector.start();
        }
      }
    }, {
      key: "_unregisterScroller",
      value: function _unregisterScroller() {
        if (this.scrollTarget) {
          this._sizeDetector.stop();

          this._normalizedScrollTarget.removeEventListener('scroll', this._boundScrollTargetScroll);
        }
      }
    }, {
      key: "syncScroll",
      value: function syncScroll() {
        var viewRect = this.getViewportRect();
        var contentRect = this.getContentRect();
        var startX = contentRect.left - viewRect.left + this.scrollTarget.scrollLeft;
        var startY = contentRect.top - viewRect.top + this.scrollTarget.scrollTop;
        var valueX = startX + this.horizontalScrollPosition;
        var valueY = startY + this.verticalScrollPosition;

        if (this.scrollTarget.scrollLeft !== valueX || this.scrollTarget.scrollTop !== valueY) {
          this._lockedScroll = true;
          this.scrollTarget.scrollLeft = valueX;
          this.scrollTarget.scrollTop = valueY;

          this._invalidateFor(Reason.SYNC_SCROLL);

          this._lockedScroll = false;
        }
      }
    }, {
      key: "doLayout",
      value: function doLayout() {
        if (!this._isVisible()) {
          return;
        }

        var width = this.scrollTarget.clientWidth;
        var height = this.scrollTarget.clientHeight;
        var reasonsMask = this._reasonsMask;
        this.dispatchEvent(new CustomEvent('render-updating', {
          bubbles: false,
          detail: reasonsMask
        }));

        if (this._isInvalidateReason(Reason.ITEMS_CHANGE)) {
          this._updateTypicalMeta();
        }

        if (this.autoHeight && this.rowCount > 0) {
          this.rowHeight = Math.floor(Math.max((height - 1) / this.rowCount, 10));
        }

        this.beginVisibleElements();

        if (this.numItems > 0) {
          var lc = this._layoutControl;
          lc.beginUpdate();
          lc.doUpdate(this.horizontalScrollPosition, this.verticalScrollPosition, width, height, this._oldWidth !== width, this._oldHeight !== height);
          lc.endUpdate();
        }

        this.endVisibleElements();
        this._oldWidth = this.scrollTarget.clientWidth;
        this._oldHeight = this.scrollTarget.clientHeight;
        this.dispatchEvent(new CustomEvent('render-update', {
          bubbles: false,
          detail: reasonsMask
        }));
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (this.dispatchEventHook) {
          event = this.dispatchEventHook(event);

          if (!event) {
            return;
          }
        }

        return _get(_getPrototypeOf(List.prototype), "dispatchEvent", this).call(this, event);
      }
    }, {
      key: "_isVisible",
      value: function _isVisible() {
        var rect = this.scrollTarget.getBoundingClientRect();
        return this._container && rect.width > 0 && rect.height > 0;
      }
    }, {
      key: "_hideElements",
      value: function _hideElements(elements) {
        var _this4 = this;

        elements && elements.forEach(function (element) {
          if (element) {
            _this4._hideElement(element);
          }
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(element) {
        if (element && element.hidden) {
          element.hidden = false;
        }
      }
    }, {
      key: "_hideElement",
      value: function _hideElement(element) {
        if (element) {
          element.hidden = true;
        }
      }
      /**
       * 아이템 렌더러의 기본 정보(스타일, 타입)를 갱신합니다.
       * @private
       */

    }, {
      key: "_updateTypicalMeta",
      value: function _updateTypicalMeta() {
        if (this.itemFactory) {
          if (this.numItems <= 0 || this._typicalMeta && this._typicalMeta.factory === this.itemFactory) {
            return;
          }

          try {
            var element = buildDomElement(this.itemFactory, this.collection.get(0), 0);

            this._contentLayer.appendChild(element);

            var style = window.getComputedStyle(element); //maxWidth, maxHeight 정보 필요

            this._typicalMeta = {
              style: {
                maxWidth: style.maxWidth,
                maxHeight: style.maxHeight
              },
              factory: this.itemFactory
            };

            this._contentLayer.removeChild(element);

            this.freeElements([element]);
          } catch (error) {
            this._typicalMeta = null;
          }
        } else {
          this._typicalMeta = null;
        }
      }
      /**
       *
       * @param key
       * @private
       */

    }, {
      key: "_getTypicalMetaValue",
      value: function _getTypicalMetaValue(key) {
        return this._typicalMeta && this._typicalMeta.style[key] || null;
      }
    }, {
      key: "_itemsAdded",
      value: function _itemsAdded(location, items) {
        if (location >= 0) {
          var numItems = items && items.length || 0,
              numIndices = this._visibleIndices.length,
              i,
              index;

          for (i = 0; i < numIndices; i++) {
            index = this._visibleIndices[i];

            if (index >= location) {
              this._visibleIndices[i] = index + numItems;
            }
          }

          if (this._displayedElements.length > 0) {
            for (i = 0; i < numItems; i++) {
              this._displayedElements.splice(location + i, 0, undefined);
            }
          }

          this._layoutControl.itemsAdded(location, items);

          this.invalidate(Reason.ITEMS_UPDATE);
        }
      }
    }, {
      key: "_itemsRemoved",
      value: function _itemsRemoved(location, items) {
        if (location >= 0) {
          var numItems = items && items.length || 0,
              offset = this._visibleIndices.indexOf(location);

          if (numItems > 0 && offset >= 0) {
            //행 인덱스 삭제
            this._visibleIndices.splice(offset, numItems);

            var numRowIndices = this._visibleIndices.length;

            for (var i = 0; i < numRowIndices; i++) {
              var index = this._visibleIndices[i];

              if (index >= location) {
                this._visibleIndices[i] = index - numItems;
              }
            } //셀 정보 삭제


            this.freeElements(this._visibleElements.splice(offset, numItems));
          }

          for (var _i = 0; _i < numItems; _i++) {
            this.freeElements(this._displayedElements.splice(location, 1));
          }

          this._layoutControl.itemsRemoved(location, items);

          this._invalidateFor(Reason.ITEMS_UPDATE);
        }
      }
    }, {
      key: "_commitSelection",
      value: function _commitSelection(index, ctrlKey) {
        var item = this.collection.get(index);

        if (this.maxSelection === 1 || !ctrlKey) {
          this.selectedItem = item;
        } else {
          this.toggleSelectedItem(item);
        }
      }
    }, {
      key: "_dispatchItemEvent",
      value: function _dispatchItemEvent(type, index, cancelable, trigger) {
        return this.dispatchEvent(new CustomEvent(type, {
          bubbles: false,
          cancelable: !!cancelable,
          detail: {
            index: index,
            item: this.collection.get(index),
            element: this.getItemElementAt(index),
            trigger: trigger
          }
        }));
      }
    }, {
      key: "_redispatchEvent",
      value: function _redispatchEvent(event) {
        return this.dispatchEvent(new CustomEvent(event.type, {
          cancelable: event.cancelable,
          detail: _objectSpread2({}, event.detail, {
            trigger: this._triggerEvent
          })
        }));
      }
    }, {
      key: "_commitCaret",
      value: function _commitCaret(index) {
        if (index >= 0 && index < this.numItems) {
          this.caretIndex = index;
          this.scrollToIndex(index);
          return true;
        }

        return false;
      }
    }, {
      key: "_moveArrow",
      value: function _moveArrow(event) {
        var isGrid = this.layout === 'grid';
        var next = this.caretIndex;

        switch (event.keyCode) {
          case 37:
            //left
            next -= 1;
            break;

          case 38:
            //up
            next -= isGrid ? this.numColumns : 1;
            break;

          case 39:
            //right
            next += 1;
            break;

          case 40:
            //down
            next += isGrid ? this.numColumns : 1;
            break;
        }

        if (this.caretIndex !== next) {
          this._commitCaret(next);

          return true;
        }

        return false;
      }
    }, {
      key: "_onScrollTargetScroll",
      value: function _onScrollTargetScroll(event) {
        if (!this._lockedScroll) {
          var viewRect = this.getViewportRect();
          var contentRect = this.getContentRect();
          this._horizontalScrollPosition = Math.round(Math.max(0, viewRect.left - contentRect.left));
          this._verticalScrollPosition = Math.round(Math.max(0, viewRect.top - contentRect.top));

          this._invalidateFor(Reason.SCROLL_VALUE_CHANGE);
        }
      }
    }, {
      key: "_onCollectionChange",
      value: function _onCollectionChange(event) {
        var detail = event.detail,
            kind = detail.kind;

        switch (kind) {
          case 'move':
            this._itemsRemoved(detail.oldIndex, detail.items);

            this._itemsAdded(detail.index, detail.items);

            break;

          case 'add':
            this._itemsAdded(detail.index, detail.items);

            break;

          case 'remove':
            this._itemsRemoved(detail.index, detail.items);

            break;

          case 'set':
          case 'update':
            this.invalidate();
            break;

          case 'reset':
            this.clearCache();

            this._invalidateFor(Reason.ITEMS_CHANGE);

            break;

          case 'refresh':
            this.clearCacheForLayout();
            this.invalidate();
            break;
        }

        this._redispatchEvent(event);
      }
    }, {
      key: "_onMouseEvent",
      value: function _onMouseEvent(event) {
        var index = this.mouseEventToIndex(event);
        var type = ITEM_TYPE_MAP[event.type];

        if (index >= 0 && type && (!event.cancelable || !event.defaultPrevented)) {
          this._triggerEvent = event; //멀티 선택.

          var ctrlKey = this.useCtrlkeyOnSelection && !event.ctrlKey;

          if (type === 'item-down') {
            if (this._dispatchItemEvent(type, index, true, event)) {
              this._downIndex = index;

              this._commitCaret(index);

              if (!this.selectOnClick) {
                this._commitSelection(index, ctrlKey);
              }
            } else {
              this._downIndex = -1;
            }
          } else if (type === 'item-click') {
            if (this._downIndex === index) {
              if (this._dispatchItemEvent(type, index, true, event)) {
                if (this.selectOnClick) {
                  this._commitSelection(index, ctrlKey);
                }
              }
            }
          } else {
            this._dispatchItemEvent(type, index, false, event);
          }

          this._triggerEvent = null;
        }
      }
    }, {
      key: "_onKeydown",
      value: function _onKeydown(event) {
        var keyCode = event.keyCode;
        var element = event.target;

        if (element instanceof HTMLElement && (['input', 'textarea'].indexOf(element.tagName.toLowerCase()) >= 0 || element.isContentEditable)) {
          return;
        }

        this._triggerEvent = event;

        if (this.selectOnKeys.indexOf(keyCode) >= 0) {
          if (this.caretIndex >= 0) {
            this.toggleSelectedItem(this.collection.get(this.caretIndex));
            event.preventDefault();
          }
        } else if (this._moveArrow(event)) {
          event.preventDefault();
        }

        this._triggerEvent = null;
      }
    }, {
      key: "contentLayer",
      get: function get() {
        return this._contentLayer;
      }
      /**
       * 스크롤 대상 엘리먼트
       * @returns {*}
       */

    }, {
      key: "scrollTarget",
      get: function get() {
        return this._scrollTarget;
      },
      set: function set(value) {
        value = value || this._container || this.root;

        if (value !== this.scrollTarget) {
          this._unregisterScroller();

          this._scrollTarget = value;

          this._registerScroller();

          this.invalidate();
        }
      }
    }, {
      key: "renderMode",
      get: function get() {
        return this._renderMode;
      },
      set: function set(value) {
        if (RENDER_MODES.indexOf(value) < 0) {
          value = 'normal';
        }

        if (this._renderMode !== value) {
          this._renderMode = value;
        }
      }
    }, {
      key: "_normalizedScrollTarget",
      get: function get() {
        //TODO 정리 필요
        var target = this.scrollTarget;
        var parent = target && target.parentElement;
        var doc = target && target.ownerDocument || document;

        if (target && target.offsetParent && parent === doc.documentElement) {
          return window;
        }

        return target;
      }
      /**
       * 수평 스크롤 위치 값
       * @returns {Number}
       */

    }, {
      key: "horizontalScrollPosition",
      get: function get() {
        return this._horizontalScrollPosition;
      },
      set: function set(value) {
        value = Math.min(Math.max(0, value), this.maxHorizontalScrollPosition);

        if (this._horizontalScrollPosition !== value) {
          this._horizontalScrollPosition = value;
          this.syncScroll();
        }
      }
      /**
       * 수직 스크롤 위치 값
       * @returns {Number}
       */

    }, {
      key: "verticalScrollPosition",
      get: function get() {
        return this._verticalScrollPosition;
      },
      set: function set(value) {
        value = Math.min(Math.max(0, value), this.maxVerticalScrollPosition);

        if (this._verticalScrollPosition !== value) {
          this._verticalScrollPosition = value;
          this.syncScroll();
        }
      }
      /**
       * 수평 스크롤 최대 값
       * @returns {Number}
       */

    }, {
      key: "maxHorizontalScrollPosition",
      get: function get() {
        return Math.max(this.scrollTarget.scrollWidth - this.scrollTarget.clientWidth, 0);
      }
      /**
       * 수직 스크롤 최대 값
       * @returns {Number}
       */

    }, {
      key: "maxVerticalScrollPosition",
      get: function get() {
        return Math.max(this.scrollTarget.scrollHeight - this.scrollTarget.clientHeight, 0);
      }
      /**
       * 리스트 레이아웃 설정
       * 'vertical', 'horizontal', 'grid', 'flow'
       */

    }, {
      key: "layout",
      get: function get() {
        return this._layout;
      },
      set: function set(value) {
        if (this._layout !== value) {
          this._layout = value;
          var lc;

          switch (value) {
            case 'horizontal':
              lc = new HorizontalLayout(this);
              break;

            case 'grid':
              lc = new GridLayout(this);
              break;

            case 'flow':
              lc = new FlowLayout(this);
              break;

            case 'vertical':
              lc = new VerticalLayout(this);
              break;

            default:
              throw new TypeError("layout must be 'vertical/horizontal/grid/flow', received ".concat(value, " instead."));
          }

          this._layoutControl = lc;
          this.invalidate();
        }
      }
      /**
       * 각 행 또는 컬럼이 다른 크기 가질 수 있는지 여부
       *    true 경우 아이템의 최대 사이즈
       *    false 경우 rowHeight 속성의 값이 됩니다.
       * @returns {Boolean}
       */

    }, {
      key: "autoSize",
      get: function get() {
        return this._autoSize;
      },
      set: function set(value) {
        if (this._autoSize !== value) {
          this._autoSize = value;
          this.invalidate();
        }
      }
    }, {
      key: "itemFactory",
      get: function get() {
        return this._itemFactory;
      },
      set: function set(value) {
        if (this.itemFactory !== value) {
          this._itemFactory = value;

          this._invalidateFor(Reason.FACTORY_CHANGE);
        }
      }
      /**
       * 아이템 렌더러 갱신시 호출되는 함수입니다.
       * renderItemCallback(element, item, index, selected, focused)
       */

    }, {
      key: "renderItemCallback",
      get: function get() {
        return this._renderItemCallback;
      },
      set: function set(value) {
        if (this._renderItemCallback !== value) {
          this._renderItemCallback = value;
          this.invalidate();
        }
      }
      /**
       * 데이타 삭제 및 가상스크롤 사용시 화면에 표시가 안될 때 호출되는 함수입니다.
       * freeItemCallback(element)
       */

    }, {
      key: "freeItemCallback",
      get: function get() {
        return this._freeItemCallback;
      },
      set: function set(value) {
        if (this._freeItemCallback !== value) {
          this._freeItemCallback = value;
          this.invalidate();
        }
      }
      /**
       * layout이 'grid' 일때 사용되는 가로 너비입니다.
       * @returns {Number}
       */

    }, {
      key: "columnWidth",
      get: function get() {
        return this._columnWidth;
      },
      set: function set(value) {
        if (this.columnWidth !== value) {
          this._columnWidth = value;

          if (this.layout === 'horizontal') {
            this._layoutControl.clear();
          }

          this.invalidate();
        }
      }
    }, {
      key: "rowHeight",
      get: function get() {
        return this._rowHeight;
      },
      set: function set(value) {
        if (this._rowHeight !== value) {
          this._rowHeight = value;

          if (this.layout !== 'horizontal') {
            this._layoutControl.clear();
          }

          this.invalidate();
        }
      }
    }, {
      key: "autoHeight",
      get: function get() {
        return this._autoHeight;
      },
      set: function set(value) {
        if (this._autoHeight !== value) {
          this._autoHeight = value;
          this.invalidate();
        }
      }
      /**
       *
       * @returns {Number}
       */

    }, {
      key: "verticalGap",
      get: function get() {
        return this._verticalGap;
      },
      set: function set(value) {
        if (this._verticalGap !== value) {
          this._verticalGap = value;
          this.invalidate();
        }
      }
    }, {
      key: "horizontalGap",
      get: function get() {
        return this._horizontalGap;
      },
      set: function set(value) {
        if (this._horizontalGap !== value) {
          this._horizontalGap = value;
          this.invalidate();
        }
      }
    }, {
      key: "numItems",
      get: function get() {
        return this.collection && this.collection.length || 0;
      }
    }, {
      key: "numColumns",
      get: function get() {
        return this._numColumns;
      }
    }, {
      key: "maxRowCount",
      get: function get() {
        return this._maxRowCount;
      },
      set: function set(value) {
        if (this._maxRowCount !== value) {
          this._maxRowCount = value;
          this.invalidate();
        }
      }
    }, {
      key: "rowCount",
      get: function get() {
        return this._rowCount;
      },
      set: function set(value) {
        if (this._rowCount !== value) {
          this._rowCount = value;
          this.invalidate();
        }
      }
    }, {
      key: "columnCount",
      get: function get() {
        return this._columnCount;
      },
      set: function set(value) {
        if (this._columnCount !== value) {
          this._columnCount = value;
          this.invalidate();
        }
      }
      /**
       * 리스트 커서 인덱스입니다.
       * @returns {number}
       */

    }, {
      key: "caretIndex",
      get: function get() {
        return this._caretIndex;
      },
      set: function set(index) {
        if (this._caretIndex !== index) {
          this._caretIndex = index;

          this._invalidateFor(Reason.CARET_CHANGE);

          this.dispatchEvent(new CustomEvent('caret-change', {
            bubbles: false,
            cancelable: false,
            detail: {
              index: index,
              item: this.collection.get(index),
              trigger: this._triggerEvent
            }
          }));
        }
      }
    }, {
      key: "normalizedRowCount",
      get: function get() {
        var count = this.rowCount;

        if (this.maxRowCount > 0 && count > this.maxRowCount) {
          count = this.maxRowCount;
        }

        return count;
      }
    }]);

    return List;
  }(Element);

  var List$1 = withBehavior(List, SelectorBehavior);

  var NODE_EVENTS = ['node-add', 'node-remove', 'node-open', 'node-opening', 'node-close', 'node-closing'];

  var Tree =
  /*#__PURE__*/
  function (_List) {
    _inherits(Tree, _List);

    function Tree(container, options) {
      var _this;

      _classCallCheck(this, Tree);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tree).call(this, container, options));
      _this.autoExpandLevel = 0;
      _this._childrenField = 'children';
      _this._boundNodeEventHandler = _this._onNodeEventHandler.bind(_assertThisInitialized(_this));
      _this.selector.useIndexProperty = false;

      _this.selector.collectionFactory = function () {
        if (_this.collection) {
          _this.collection.removeEventListener('collection-change', _this._boundCollectionChange);

          NODE_EVENTS.forEach(function (type) {
            _this.collection.removeEventListener(type, _this._boundNodeEventHandler);
          });
        }

        var collection = new HierarchyList();
        collection.childrenField = _this.childrenField;
        collection.addEventListener('collection-change', _this._boundCollectionChange);
        NODE_EVENTS.forEach(function (type) {
          collection.addEventListener(type, _this._boundNodeEventHandler);
        });
        return collection;
      };

      return _this;
    }

    _createClass(Tree, [{
      key: "updateItemElement",

      /**
       * 렌더러 갱신.
       * @param element
       * @param item
       * @param index
       */
      value: function updateItemElement(element, item, index) {
        var func = this.renderItemCallback;

        if (func) {
          func(element, item, index, {
            selected: this.selectedItems.indexOf(item) >= 0,
            active: this.caretIndex === index,
            hasChildren: this.collection.hasChildren(item),
            level: this.collection.getNodeLevel(item),
            isOpened: this.collection.isOpenNode(item)
          });
        }
      }
      /**
       * 지정된 노드의 부모 노드를 반환합니다.
       */

    }, {
      key: "getParentNode",
      value: function getParentNode(node) {
        return this.collection && this.collection.getParentNode(node);
      }
      /**
       * 해당 노드의 조상 노드 목록을 반환합니다.
       * @param node
       * @returns {Array}
       */

    }, {
      key: "getAncestorNodes",
      value: function getAncestorNodes(node) {
        return this.collection && this.collection.getAncestorNodes(node);
      }
      /**
       * 지정된 노드의 자식노드들을 반환합니다.
       * @param node 부모 노드입니다.
       */

    }, {
      key: "getChildren",
      value: function getChildren(node) {
        return this.collection && this.collection.getChildren(node);
      }
    }, {
      key: "getDisplayableChildren",
      value: function getDisplayableChildren(node) {
        return this.collection && this.collection.getDisplayableChildren(node);
      }
      /**
       * 해당 노드에 자식이 있는지 여부입니다.
       */

    }, {
      key: "hasChildren",
      value: function hasChildren(node) {
        return this.collection && this.collection.hasChildren(node);
      }
      /**
       * 부모 노드에 자식 노드를 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드
       * @param node 추가할 자식 노드
       *
       */

    }, {
      key: "addNode",
      value: function addNode(parent, node) {
        return this.collection && this.collection.addNode(parent, node);
      }
      /**
       * 노드의 지정된 인덱스 위치에 자식 노드를 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드.
       * @param node 추가할 자식 노드.
       * @param index 자식 노드 삽입 위치의 인덱스.
       */

    }, {
      key: "addNodeAt",
      value: function addNodeAt(parent, node, index) {
        return this.collection && this.collection.addNodeAt(parent, node, index);
      }
      /**
       * 부모 노드에 자식 노드를 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드
       * @param nodes 추가할 자식 노드 목록
       *
       */

    }, {
      key: "addNodes",
      value: function addNodes(parent, nodes) {
        return this.collection && this.collection.addNodes(parent, nodes);
      }
      /**
       * 노드의 지정된 인덱스 위치에 자식 노드목록을 추가합니다.
       * 부모 노드가 null이면 최상위 목록에 추가합니다.
       * @param parent 부모 노드.
       * @param nodes 추가할 자식 노드 목록
       * @param index 자식 노드 삽입 위치의 인덱스.
       */

    }, {
      key: "addNodesAt",
      value: function addNodesAt(parent, nodes, index) {
        return this.collection && this.collection.addNodesAt(parent, nodes, index);
      }
      /**
       * 부모 노드에서 자식 노드를 삭제합니다.
       * @param parent 부모 노드입니다.
       * @param node 삭제할 자식 노드 입니다.
       */

    }, {
      key: "removeNode",
      value: function removeNode(parent, node) {
        return this.collection && this.collection.removeNode(parent, node);
      }
      /**
       * 해당 node가 있는지 확인합니다.
       * @param node
       * @return 있으면 true,
       */

    }, {
      key: "contains",
      value: function contains(node) {
        return this.collection && this.collection.contains(node);
      }
      /**
       *    해당 노드가 확장되어 있는지 여부입니다.
       */

    }, {
      key: "isOpenNode",
      value: function isOpenNode(node) {
        return this.collection && this.collection.isOpenNode(node);
      }
      /**
       * 해당 노느가 출력된 노드인지 확인합니다.
       * @param node
       * @return
       */

    }, {
      key: "isDisplayableNode",
      value: function isDisplayableNode(node) {
        return this.collection && this.collection.isDisplayableNode(node);
      }
      /**
       * 지정된 노드를 확장합니다.
       */

    }, {
      key: "openNode",
      value: function openNode(node) {
        return this.collection && this.collection.openNode(node);
      }
      /**
       * 지정된 노드를 축소합니다.
       */

    }, {
      key: "closeNode",
      value: function closeNode(node) {
        return this.collection && this.collection.closeNode(node);
      }
      /**
       * 노드 배열을 확장합니다.
       * @param nodes
       */

    }, {
      key: "openNodes",
      value: function openNodes(nodes) {
        return this.collection && this.collection.openNodes(nodes);
      }
      /**
       * 출력된 노드 목록을 반환합니다.
       * @returns {Array}
       */

    }, {
      key: "getDisplayableNodes",
      value: function getDisplayableNodes() {
        return this.collection && this.collection.displayableNodes;
      }
      /**
       * 확장되어있는 노드목록을 반환합니다.
       * @returns {Array}
       */

    }, {
      key: "getOpenedNodes",
      value: function getOpenedNodes() {
        return this.collection && this.collection.getOpenedNodes();
      }
      /**
       * 지정된 노드의 레벨을 반환합니다.
       */

    }, {
      key: "getNodeLevel",
      value: function getNodeLevel(node) {
        return this.collection && this.collection.getNodeLevel(node);
      }
      /**
       * 전체 노드를 탐색합니다.
       * 지정된 함수(callBack)에 대해 true를 반환하는 모든 항목이 포함된 새 배열을 만듭니다
       * @param callback  function callback(node, parent, children)
       * @param prefetchNode 시작 기준 노드입니다. 지정되지 않으면 루트노드를 기준으로 합니다.
       * @param postOrder true 이면 후위탐색, false 이면 전위탐색
       * @return true를 반환하는 항목의 배열입니다.
       */

    }, {
      key: "find",
      value: function find(callback, prefetchNode, postOrder) {
        return this.collection && this.collection.find(callback, prefetchNode, postOrder);
      }
      /**
       * 전체 노드를 탐색합니다.
       * 지정된 함수(callBack)에 대해 처음으로 true를 반환하는 항목을 반환하고 탐색을 중지합니다.
       * @param callback  function callback(node, parent, children)
       * @param prefetchNode 시작 기준 노드입니다. 지정되지 않으면 루트노드를 기준으로 합니다.
       * @param postOrder true 이면 후위탐색, false 이면 전위탐색
       * @return 처음으로 true를 반환하는 항목입니다.
       */

    }, {
      key: "findOne",
      value: function findOne(callback, prefetchNode, postOrder) {
        return this.collection && this.collection.findOne(callback, prefetchNode, postOrder);
      }
      /**
       * 전체 노드를 확장합니다.
       */

    }, {
      key: "expandAll",
      value: function expandAll() {
        this.collection && this.collection.expandAll();
      }
      /**
       * 전체 노드를 축소합니다.
       */

    }, {
      key: "collapseAll",
      value: function collapseAll() {
        this.collection && this.collection.collapseAll();
      }
      /**
       * 지정된 노드가 확장되어 있으면 축소하고 축소되어 있으면 확장합니다.
       */

    }, {
      key: "toggleNode",
      value: function toggleNode(node) {
        if (this.isOpenNode(node)) {
          this.closeNode(node);
        } else {
          this.openNode(node);
        }
      }
    }, {
      key: "_onCollectionChange",
      value: function _onCollectionChange(event) {
        var _this2 = this;

        _get(_getPrototypeOf(Tree.prototype), "_onCollectionChange", this).call(this, event);

        if (event.detail.kind === 'reset') {
          if (this.autoExpandLevel > 0) {
            this.openNodes(this.find(function (node) {
              return _this2.getNodeLevel(node) < _this2.autoExpandLevel;
            }));
          }
        }
      }
    }, {
      key: "_onNodeEventHandler",
      value: function _onNodeEventHandler(event) {
        var newEvent = new CustomEvent(event.type, {
          bubbles: true,
          cancelable: event.cancelable,
          detail: event.detail
        });
        this.dispatchEvent(newEvent);

        if (newEvent.defaultPrevented) {
          event.preventDefault();
        }

        switch (event.type) {
          case 'node-open':
          case 'node-close':
          case 'node-add':
          case 'node-remove':
            this.invalidate();
            break;
        }
      }
    }, {
      key: "childrenField",
      get: function get() {
        return this._childrenField;
      },
      set: function set(value) {
        if (this._childrenField !== value) {
          this._childrenField = value;

          if (this.collection) {
            this.collection.childrenField = this.childrenField;
          }
        }
      }
    }]);

    return Tree;
  }(List$1); //setDomElement(Tree, template);

  var _fixBabelExtend$3 = function (O) {
    var gPO = O.getPrototypeOf || function (o) {
      return o.__proto__;
    },
        sPO = O.setPrototypeOf || function (o, p) {
      o.__proto__ = p;
      return o;
    },
        construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
      var Constructor,
          a = [null];
      a.push.apply(a, args);
      Constructor = Parent.bind.apply(Parent, a);
      return sPO(new Constructor(), Class.prototype);
    };

    return function fixBabelExtend(Class) {
      var Parent = gPO(Class);
      return sPO(Class, sPO(function Super() {
        return construct(Parent, arguments, gPO(this).constructor);
      }, Parent));
    };
  }(Object);

  function normalizeRect(target) {
    if (target === document.documentElement || target === window) {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      };
    }

    return target.getBoundingClientRect();
  }

  function calculateCroppedArea(position, size, fitRect) {
    var verticalCrop = Math.min(0, position.top) + Math.min(0, fitRect.bottom - (position.top + size.height));
    var horizontalCrop = Math.min(0, position.left) + Math.min(0, fitRect.right - (position.left + size.width));
    return Math.abs(verticalCrop) * size.width + Math.abs(horizontalCrop) * size.height;
  }
  /**
   * TODO 수정 예정!!!
   */


  var Overlay =
  /*#__PURE__*/
  function () {
    function Overlay() {
      _classCallCheck(this, Overlay);

      this.overlayTarget = null;
      this.positionTarget = null;
      this.screenTarget = window;
      this.overlap = false;
      this.horizontalAlign = null;
      this.verticalAlign = null;
      this.dynamicAlign = true;
      this.horizontalOffset = 0;
      this.verticalOffset = 0;
      this._fitInfo = null;
    }

    _createClass(Overlay, [{
      key: "fit",
      value: function fit() {
        this._discoverInfo();

        if (this.horizontalAlign || this.verticalAlign) {
          this.position();
        } else {
          this.constrain();
          this.center();
        }
      }
    }, {
      key: "resetFit",
      value: function resetFit() {
        var info = this._fitInfo || {};
        mixin(this.overlayTarget.style, info.overlayInlineStyle || {});
        this._fitInfo = null;
      }
    }, {
      key: "refit",
      value: function refit() {
        var scrollLeft = this.overlayTarget.scrollLeft;
        var scrollTop = this.overlayTarget.scrollTop;
        this.resetFit();
        this.fit();
        this.overlayTarget.scrollLeft = scrollLeft;
        this.overlayTarget.scrollTop = scrollTop;
      }
    }, {
      key: "position",
      value: function position() {
        var targetStyle = this.overlayTarget.style;
        targetStyle.position = 'fixed';
        targetStyle.boxSizing = 'border-box';
        var rect = this.targetRect;
        var positionRect = normalizeRect(this.positionTarget || this.screenTarget);
        var fitRect = normalizeRect(this.screenTarget);
        var margin = this._fitInfo.margin;
        var size = {
          width: rect.width + margin.left + margin.right,
          height: rect.height + margin.top + margin.bottom
        };

        var position = this._getPosition(this.horizontalAlign, this.verticalAlign, size, positionRect, fitRect);

        var left = position.left + margin.left;
        var top = position.top + margin.top;
        var right = Math.min(fitRect.right - margin.right, left + rect.width);
        var bottom = Math.min(fitRect.bottom - margin.bottom, top + rect.height);
        left = Math.max(fitRect.left + margin.left, Math.min(left, right - this._fitInfo.sizedBy.minWidth));
        top = Math.max(fitRect.top + margin.top, Math.min(top, bottom - this._fitInfo.sizedBy.minHeight));

        if (this.horizontalAlign === 'right') {
          targetStyle.right = Math.max(0, fitRect.width - right) + 'px';
          targetStyle.removeProperty('left');
        } else if (this.horizontalAlign === 'auto') {
          targetStyle.left = Math.round(left - (rect.width - positionRect.width) / 2) + 'px';
        } else if (this.horizontalAlign !== 'none') {
          targetStyle.left = left + 'px';
        }

        if (this.verticalAlign === 'bottom') {
          targetStyle.bottom = Math.max(0, fitRect.height - bottom) + 'px';
          targetStyle.removeProperty('top');
        } else if (this.verticalAlign === 'auto') {
          targetStyle.top = Math.round(top - (rect.height - positionRect.height) / 2) + 'px';
        } else if (this.verticalAlign !== 'none') {
          targetStyle.top = top + 'px';
        }
      }
    }, {
      key: "constrain",
      value: function constrain() {
        var fitInfo = this._fitInfo;

        if (!fitInfo.positionedBy.vertically) {
          this.overlayTarget.style.position = 'fixed';
          this.overlayTarget.style.top = '0px';
        }

        if (!fitInfo.positionedBy.horizontally) {
          this.overlayTarget.style.position = 'fixed';
          this.overlayTarget.style.left = '0px';
        }

        this.overlayTarget.style.boxSizing = 'border-box';
        var rect = this.targetRect;

        if (!fitInfo.sizedBy.height) {
          this._sizeDimension(rect, fitInfo.positionedBy.vertically, 'top', 'bottom', 'Height');
        }

        if (!fitInfo.sizedBy.width) {
          this._sizeDimension(rect, fitInfo.positionedBy.horizontally, 'left', 'right', 'Width');
        }
      }
    }, {
      key: "center",
      value: function center() {
        var targetStyle = this.overlayTarget.style;
        var rect = this.targetRect;
        var fitRect = normalizeRect(this.screenTarget);
        var top = this.verticalOffset + fitRect.top + (fitRect.height - rect.height) / 2;
        var left = this.horizontalOffset + fitRect.left + (fitRect.width - rect.width) / 2;
        targetStyle.position = 'fixed';
        setPosition(this.overlayTarget, left, top, true);
      }
    }, {
      key: "_discoverInfo",
      value: function _discoverInfo() {
        if (!this._fitInfo) {
          var style = window.getComputedStyle(this.overlayTarget);
          this._fitInfo = {
            overlayInlineStyle: {
              top: style.top || '',
              left: style.left || '',
              position: style.position || '',
              maxWidth: style.maxWidth || '',
              maxHeight: style.maxHeight || '',
              boxSizing: style.boxSizing || ''
            },
            positionedBy: {
              vertically: this.positionTarget != null ? style.top !== 'auto' ? 'top' : style.bottom !== 'auto' ? 'bottom' : null : null,
              horizontally: this.positionTarget != null ? style.left !== 'auto' ? 'left' : style.right !== 'auto' ? 'right' : null : null
            },
            sizedBy: {
              height: style.maxHeight !== 'none',
              width: style.maxWidth !== 'none',
              minWidth: parseInt(style.minWidth, 10) || 0,
              minHeight: parseInt(style.minHeight, 10) || 0
            },
            margin: {
              top: parseInt(style.marginTop, 10) || 0,
              right: parseInt(style.marginRight, 10) || 0,
              bottom: parseInt(style.marginBottom, 10) || 0,
              left: parseInt(style.marginLeft, 10) || 0
            }
          };
        }

        return this._fitInfo;
      }
    }, {
      key: "_sizeDimension",
      value: function _sizeDimension(rect, positionedBy, start, end, extent) {
        var info = this._fitInfo;
        var fitRect = normalizeRect(this.screenTarget);
        var max = extent === 'Width' ? fitRect.width : fitRect.height;
        var flip = positionedBy === end;
        var offset = flip ? max - rect[end] : rect[start];
        var margin = info.margin[flip ? start : end];
        var offsetExtent = 'offset' + extent;
        var sizingOffset = this[offsetExtent] - this.overlayTarget[offsetExtent];
        this.overlayTarget.style['max' + extent] = max - margin - offset - sizingOffset + 'px';
      }
    }, {
      key: "_getPosition",
      value: function _getPosition(hAlign, vAlign, size, positionRect, fitRect) {
        var positions = [{
          verticalAlign: 'top',
          horizontalAlign: 'left',
          top: positionRect.top + this.verticalOffset,
          left: positionRect.left + this.horizontalOffset
        }, {
          verticalAlign: 'top',
          horizontalAlign: 'right',
          top: positionRect.top + this.verticalOffset,
          left: positionRect.right - size.width - this.horizontalOffset
        }, {
          verticalAlign: 'bottom',
          horizontalAlign: 'left',
          top: positionRect.bottom - size.height - this.verticalOffset,
          left: positionRect.left + this.horizontalOffset
        }, {
          verticalAlign: 'bottom',
          horizontalAlign: 'right',
          top: positionRect.bottom - size.height - this.verticalOffset,
          left: positionRect.right - size.width - this.horizontalOffset
        }];
        var isOverlab = this.overlap || !this.positionTarget;

        if (!isOverlab) {
          for (var i = 0, l = positions.length; i < l; i++) {
            var copy = {};

            for (var key in positions[i]) {
              copy[key] = positions[i][key];
            }

            positions.push(copy);
          }

          positions[0].top = positions[1].top += positionRect.height;
          positions[2].top = positions[3].top -= positionRect.height;
          positions[4].left = positions[6].left += positionRect.width;
          positions[5].left = positions[7].left -= positionRect.width;
        }

        vAlign = vAlign === 'auto' ? null : vAlign;
        hAlign = hAlign === 'auto' ? null : hAlign;
        var position;

        for (var _i = 0; _i < positions.length; _i++) {
          var pos = positions[_i];

          if (!this.dynamicAlign && isOverlab && pos.verticalAlign === vAlign && pos.horizontalAlign === hAlign) {
            position = pos;
            break;
          }

          var alignOk = (!vAlign || pos.verticalAlign === vAlign) && (!hAlign || pos.horizontalAlign === hAlign);

          if (!this.dynamicAlign && !alignOk) {
            continue;
          }

          position = position || pos;
          pos.croppedArea = calculateCroppedArea(pos, size, fitRect);
          var diff = pos.croppedArea - position.croppedArea;

          if (diff < 0 || diff === 0 && alignOk) {
            position = pos;
          }

          if (position.croppedArea === 0 && alignOk) {
            break;
          }
        }

        return position;
      }
    }, {
      key: "targetRect",
      get: function get() {
        return this.overlayTarget.getBoundingClientRect();
      }
    }]);

    return Overlay;
  }();

  var DEFAULT_POPUP_OPTIONS = Object.freeze({
    /**
     * 팝업 배경 엘리먼트 반환
     * @name backdropFactory
     * @type Function
     * @returns {HTMLElement}
     * @optional
     */
    backdropFactory: function backdropFactory() {
      var backdrop = document.createElement('div');
      backdrop.style.cssText = 'display:block;' + 'top:0;' + 'left:0;' + 'width:100%;' + 'height:100%;' + 'background-color: black;' + 'opacity: 0.6;' + 'transition: opacity 0.2s;' + 'position:fixed;' + 'pointer-events:auto;';
      return backdrop;
    },
    modal: false,
    style: {},
    closeEvents: ['close'],
    cancelEvents: ['cancel'],
    closeDelay: 0,
    alwaysOnTop: false,
    priority: 0,
    autoLayout: false,
    autoFocus: true,
    destroyOnClose: false,
    closeOnResize: false,
    closeOnOutsideDown: false,
    closeOnOutsideClick: false,
    exceptionOutside: [],
    contentFactory: function contentFactory(data, options) {
      return new Promise(function (resolve) {
        resolve(data, options);
      });
    },
    contentDestroy: function contentDestroy(content) {},
    appendContent: function appendContent(content, parent) {
      parent.appendChild(content);
    },
    removeContent: function removeContent(content, parent) {
      parent.removeChild(content);
    }
  });
  var State = {
    CLOSE: 0,
    OPEN: 1
  };
  var PopupCount = 1;

  function releaseCallback(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i].state === State.OPEN) {
        array.splice(i, 1);
      }
    }
  }

  var Popup = _fixBabelExtend$3(
  /*#__PURE__*/
  function (_EventTarget) {
    _inherits(Popup, _EventTarget);

    function Popup(options) {
      var _this;

      _classCallCheck(this, Popup);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this));
      _this._overlay = new Overlay();
      _this._id = '__popup' + PopupCount++ + '__';
      _this._options = mixin({}, DEFAULT_POPUP_OPTIONS, options || {});
      _this._content = null;
      _this._sizeDetector = null;
      _this._lastResult = null;
      _this._isOpened = false;
      _this._isClosing = false;
      _this._openingCallback = [];
      _this._openedCallback = [];
      _this._closingCallback = [];
      _this._closedCallback = [];

      _this._boundUpdateLayout = function (event) {
        _this.updateLayout();
      };

      return _this;
    }
    /**
     * 팝업 컨텐츠
     */


    _createClass(Popup, [{
      key: "forceBuildContent",
      value: function forceBuildContent(data, options) {
        var _this2 = this;

        options = this._options = mixin({}, this._options, options || {});
        return new Promise(function (resolve) {
          if (_this2.content) {
            resolve(_this2.content);
          } else {
            options.contentFactory(data, options).then(function (content) {
              _this2._content = content || _this2._content;
              resolve(_this2._content);
            }).catch(function (error) {
              console.error(error);
            });
          }
        });
      }
      /**
       * 팝업을 엽니다.
       * @param data
       * @param options
       * @returns {Popup}
       */

    }, {
      key: "open",
      value: function open(data, options) {
        var _this3 = this;

        if (!this.isOpened) {
          this._isOpened = true;
          this._isOpening = true;

          this._releaseCallbacks();

          window.requestAnimationFrame(function () {
            if (_this3._isOpening) {
              _this3._isOpening = false;

              _this3._internalOpen(data, options);
            }
          });
        }

        return this;
      }
      /**
       * 팝업을 닫습니다. closed 콜백함수 두번째 인자에 false 가 설정됩니다.
       * @param params closed 콜백함수에 넘겨줄 데이타.
       * @returns {Popup}
       */

    }, {
      key: "close",
      value: function close(params) {
        if (this.isOpened) {
          if (this._isOpening) {
            this._isOpened = false;
            this._isOpening = false;
          } else {
            this._internalClose(params, false);
          }
        }

        return this;
      }
      /**
       * 팝업을 닫습니다. closed 콜백함수 두번째 인자에 true 가 설정됩니다.
       * @param params
       * @returns {Popup}
       */

    }, {
      key: "cancel",
      value: function cancel(params) {
        if (this.isOpened) {
          this._internalClose(params, true);
        }

        return this;
      }
    }, {
      key: "center",
      value: function center() {
        if (this.isOpened) {
          if (PopupManager.hasPopup(this)) {
            this._overlay.center();
          } else {
            this._pendingCenter = true;
          }
        }

        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.isOpened) {
          this.close();
        }

        if (this.content) {
          if (this.content.popupInstance) {
            this.content.popupInstance = null;
          }

          if (this.content.parentElement) {
            this.content.parentElement.removeChild(this.content);
          }

          if (this.options.contentDestroy instanceof Function) {
            this.options.contentDestroy(this.content);
          }

          this._content = null;
        }

        if (this.backDrop) {
          this._backDrop = null;
        }

        return this;
      }
      /**
       *
       * @param data
       * @param options
       * @private
       */

    }, {
      key: "_internalOpen",
      value: function _internalOpen(data, options) {
        var _this4 = this;

        this.forceBuildContent(data, options).then(function (content) {
          if (_this4._isOpened) {
            _this4._updateContent();

            if (_this4.options.autoLayout) {
              if (!_this4._sizeDetector) {
                _this4._sizeDetector = new SizeDetector(content);

                _this4._sizeDetector.addEventListener('size-change', _this4._boundUpdateLayout);

                _this4._sizeDetector.start();
              }
            }
          }
        });
      }
    }, {
      key: "_pushCallback",
      value: function _pushCallback(array, callback) {
        if (!(callback instanceof Function)) {
          console.warn('callback is not Function', callback);
          return;
        }

        if (this._isOpened && !this._isOpening) {
          return;
        }

        var state = this.isOpened ? State.OPEN : State.CLOSE;
        array.push({
          state: state,
          callback: callback
        });
      }
    }, {
      key: "_executeCallback",
      value: function _executeCallback(array, params) {
        var results = [];
        array.forEach(function (item) {
          results.push(item.callback.apply(null, params));
        });
        return results;
      }
    }, {
      key: "_releaseCallbacks",
      value: function _releaseCallbacks() {
        releaseCallback(this._openingCallback);
        releaseCallback(this._openedCallback);
        releaseCallback(this._closingCallback);
        releaseCallback(this._closedCallback);
      }
      /**
       * 팝업이 열리고 컨텐츠가 렌더링 되기 전 호출
       * @param callback
       * @returns {Popup}
       */

    }, {
      key: "opening",
      value: function opening(callback) {
        this._pushCallback(this._openingCallback, callback);

        return this;
      }
      /**
       * 팝업이 열리고 컨텐트가 렌더링 후 호출
       * @param callback
       * @returns {Popup}
       */

    }, {
      key: "opened",
      value: function opened(callback) {
        this._pushCallback(this._openedCallback, callback);

        return this;
      }
      /**
       * 팝업이 닫히기전 호출될는 콜백
       * callback 반환 값이 false면 닫기 취소.
       * @param callback
       * @returns {Popup}
       */

    }, {
      key: "closing",
      value: function closing(callback) {
        this._pushCallback(this._closingCallback, callback);

        return this;
      }
      /**
       * 팝업이 닫힐때 호출되는 콜백
       * @param callback
       * @returns {Popup}
       */

    }, {
      key: "closed",
      value: function closed(callback) {
        this._pushCallback(this._closedCallback, callback);

        return this;
      }
      /**
       *  팝업 레이아웃 갱신
       * @returns {Popup}
       */

    }, {
      key: "updateLayout",
      value: function updateLayout() {
        this._overlay.refit();

        return this;
      }
      /**
       * 팝업 컨텐츠의 레이어 컨테이너를 반환.
       */

    }, {
      key: "_getPopupContainer",
      value: function _getPopupContainer() {
        var CONTAINER_ID = '__popups__';
        var doc = this.content && this.content.ownerDocument;

        if (!doc || !doc.parentWindow) {
          doc = document;
        }

        var stage = doc.body;
        var container = stage.querySelector('#' + CONTAINER_ID);

        if (!container) {
          container = document.createElement('div');
          container.id = CONTAINER_ID;
          container.style.cssText = 'left:0;' + 'top:0;' + 'display:block;' + 'position:fixed;' + 'z-index: 9999;';
          stage.appendChild(container);
        }

        return container;
      }
    }, {
      key: "_internalClose",
      value: function _internalClose(param, cancel) {
        var _this5 = this;

        if (this.isOpened && !this._isClosing) {
          var execute = function execute() {
            _this5._lastResult = param;
            _this5._isOpened = false;

            _this5._unwatchContentForClose(_this5.content);

            _this5._destroyBackDrop();

            _this5._removeContent();

            _this5._executeCallback(_this5._closedCallback, [param, cancel]);

            if (_this5.options.destroyOnClose) {
              _this5.destroy();
            }

            PopupManager.removePopup(_this5);
            _this5._isClosing = false;

            if (_this5._sizeDetector) {
              _this5._sizeDetector.removeEventListener('size-change', _this5._boundUpdateLayout);

              _this5._sizeDetector.stop();

              _this5._sizeDetector = null;
            }
          };

          var results = this._executeCallback(this._closingCallback, [param, cancel]);

          var isCancelClose = results.every(function (result, index, array) {
            return result !== false;
          });

          if (isCancelClose) {
            if (this.options.closeDelay > 0) {
              this._isClosing = true;
              setTimeout(execute, this.options.closeDelay);
            } else {
              execute();
            }
          }
        }
      }
    }, {
      key: "_updateContent",
      value: function _updateContent() {
        var content = this.content; //컨텐츠 document 연결

        this._appendContent();

        this._executeCallback(this._openingCallback, [content]);

        this._applyBackDrop(); //리스너 등록.


        this._watchContentForClose(); //오버레이 및 스타일 적용.


        this._applyOverlayOrStyle(); //레이아웃 갱신.


        this.updateLayout();

        this._setContentFocus();

        content.popupInstance = this;

        this._executeCallback(this._openedCallback, [content]);

        PopupManager.addPopup(this);

        if (this._pendingCenter) {
          this._pendingCenter = false;
          this.center();
        }
      }
    }, {
      key: "_appendContent",
      value: function _appendContent() {
        var content = this.content;
        var options = this.options;

        var container = this._getPopupContainer();

        options.appendContent(content, container);
      }
    }, {
      key: "_removeContent",
      value: function _removeContent() {
        var options = this.options;
        var content = this.content;

        if (content && content.parentElement) {
          options.removeContent(content, content.parentElement);
        }
      }
    }, {
      key: "_setContentFocus",
      value: function _setContentFocus() {
        if (this.options.autoFocus && this.content && this.content.focus) {
          this.content.focus();
        }
      }
    }, {
      key: "_applyBackDrop",
      value: function _applyBackDrop() {
        var content = this.content;
        var options = this.options;

        if (!options.modal && this.backDrop) {
          if (this.backDrop.parentElement) {
            this.backDrop.parentElement.removeChild(content);
          }

          this._backDrop = null;
        } else if (options.modal) {
          if (!this.backDrop) {
            this._backDrop = this.options.backdropFactory();
          }

          if (!this.backDrop.parentElement) {
            var container = this._getPopupContainer();

            container.insertBefore(this.backDrop, content);
          }
        }
      }
    }, {
      key: "_destroyBackDrop",
      value: function _destroyBackDrop() {
        var backDrop = this.backDrop;

        if (backDrop && backDrop.parentElement) {
          backDrop.parentElement.removeChild(backDrop);
        }
      }
    }, {
      key: "_applyOverlayOrStyle",
      value: function _applyOverlayOrStyle() {
        var content = this.content;
        var options = this.options;
        this._overlay.overlayTarget = content;
        mixin(content.style, options.style);
        mixin(this._overlay, options);
      }
    }, {
      key: "_watchContentForClose",
      value: function _watchContentForClose() {
        var _this6 = this;

        var content = this.content;
        var options = this.options,
            closeEvents = options.closeEvents || [],
            cancelEvents = options.cancelEvents || [];

        if (!this._boundCloseHandler) {
          this._boundCloseHandler = function (e) {
            if (closeEvents.indexOf(e.type) >= 0) {
              _this6.close(e);
            } else {
              _this6.cancel(e);
            }
          };

          closeEvents.concat(cancelEvents).forEach(function (event) {
            content.addEventListener(event, _this6._boundCloseHandler);
          });
        }
      }
    }, {
      key: "_unwatchContentForClose",
      value: function _unwatchContentForClose(content) {
        var _this7 = this;

        var options = this.options,
            closeEvents = options.closeEvents || [],
            cancelEvents = options.cancelEvents || [];

        if (this._boundCloseHandler) {
          closeEvents.concat(cancelEvents).forEach(function (event) {
            content.removeEventListener(event, _this7._boundCloseHandler);
          });
          this._boundCloseHandler = null;
        }
      }
    }, {
      key: "_contains",
      value: function _contains(event) {
        var exception = this.options.exceptionOutside;
        var exceptionElements = [];

        if (exception instanceof Function) {
          if (exception(event)) {
            return true;
          }
        } else if (Array.isArray(exception)) {
          exceptionElements = exception;
        }

        var elements = [this.content].concat(exceptionElements),
            path = event.path || [],
            x = event.clientX,
            y = event.clientY,
            target = event.target;

        if (this.options.active instanceof HTMLElement && this.options.active.contains(target)) {
          return true;
        }

        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (path.indexOf(element) >= 0 || element.contains(target) || this._containsInPopup(element, target)) {
            return true;
          }

          var rect = element.getBoundingClientRect();
          var right = element.clientWidth === element.offsetWidth && rect.width < element.scrollWidth ? rect.left + element.scrollWidth : rect.right;
          var bottom = element.clientHeight === element.offsetHeight && rect.height < element.scrollHeight ? rect.top + element.scrollHeight : rect.bottom;

          if (!(x < rect.left || x > right || y < rect.top || y > bottom)) {
            return true;
          }
        }

        return false;
      }
      /**
       * target 팝업일 경우 팝업 호스트가 포함되는지 유무확인
       * @param source
       * @param target
       * @returns {boolean}
       * @private
       */

    }, {
      key: "_containsInPopup",
      value: function _containsInPopup(source, target) {
        while (target) {
          if (target.popupInstance && source.contains(target.popupInstance.options.active)) {
            return true;
          }

          target = target.parentElement;
        }

        return false;
      }
    }, {
      key: "_cancelByEvent",
      value: function _cancelByEvent(event) {
        var _this8 = this;

        if (event.defaultPrevented) {
          return;
        }

        var type = event.type,
            target = event.target;
        var _this$options = this.options,
            closeOnOutsideDown = _this$options.closeOnOutsideDown,
            closeOnOutsideClick = _this$options.closeOnOutsideClick,
            exceptionOutside = _this$options.exceptionOutside;

        if (type === 'scroll' && (closeOnOutsideDown || closeOnOutsideClick)) {
          var exceptionElements = [this.content].concat(Array.isArray(exceptionOutside) ? exceptionOutside : []);

          if (exceptionElements.filter(function (element) {
            return target === element || element.contains(target) || _this8._containsInPopup(element, target);
          }).length <= 0) {
            this.cancel(event);
          }
        } else if ((type === 'mousedown' && closeOnOutsideDown || type === 'click' && closeOnOutsideClick) && !this._contains(event)) {
          this.cancel(event);
        }
      }
    }, {
      key: "content",
      get: function get() {
        return this._content;
      }
    }, {
      key: "backDrop",
      get: function get() {
        return this._backDrop;
      }
    }, {
      key: "lastResult",
      get: function get() {
        return this._lastResult;
      }
      /**
       * 팝업 열림 여부
       * @returns {boolean}
       */

    }, {
      key: "isOpened",
      get: function get() {
        return this._isOpened;
      }
      /**
       * 팝업 설정
       * @returns {*}
       */

    }, {
      key: "options",
      get: function get() {
        return this._options;
      }
    }]);

    return Popup;
  }(EventTarget$1));
  var STAGE_EVENTS = ['mousedown', 'mouseup', 'click', 'mousewheel', 'focus'];
  var PopupManager = new (
  /*#__PURE__*/
  function () {
    function _class() {
      _classCallCheck(this, _class);

      this._popups = [];
      this._pendingPopupMap = new Map();
      this._minZIndex = 1000;
      this._lockedPopups = null;
      this._alwaysOnTopCount = 0;
      this._boundResize = this._onResize.bind(this);
      this._boundScroll = this._onScroll.bind(this);
      this._boundStageEventHandler = this._onStageEvents.bind(this);
    }

    _createClass(_class, [{
      key: "hasPopup",
      value: function hasPopup(popup) {
        return this._popups.indexOf(popup) >= 0;
      }
      /**
       * 팝업 추가
       * @param popup
       */

    }, {
      key: "addPopup",
      value: function addPopup(popup) {
        if (this._popups.indexOf(popup) < 0) {
          this._popups.push(popup);

          if (popup.options.alwaysOnTop) {
            this._alwaysOnTopCount++;
          }

          if (this._lockedPopups) {
            this._lockedPopups.push(popup);
          }

          this.bringToFront(popup);

          if (this._popups.length <= 1) {
            this._addStageListeners();
          }
        }
      }
      /**
       * 팝업 삭제
       * @param popup
       */

    }, {
      key: "removePopup",
      value: function removePopup(popup) {
        var index = this._popups.indexOf(popup);

        if (index >= 0) {
          this._popups.splice(index, 1);

          if (popup.options.alwaysOnTop) {
            this._alwaysOnTopCount--;
          } //삭제시 갱신 취소.


          var fid = this._pendingPopupMap.get(popup);

          if (fid) {
            window.cancelAnimationFrame(fid);
          }

          if (this._popups.length === 0) {
            this._removeStageListeners();
          }
        }
      }
      /**
       * @param popup
       */

    }, {
      key: "bringToFront",
      value: function bringToFront(popup) {
        var instances = this._popups;
        var oldIndex = instances.indexOf(popup);

        if (oldIndex < 0) {
          return;
        }

        var alwaysOnTopCount = this._alwaysOnTopCount;
        var targetPriority = popup.options.priority; //1. 삭제.

        instances.splice(oldIndex, 1);
        var start, end, i, insertIndex;

        if (popup.options.alwaysOnTop) {
          end = instances.length - 1;
          start = Math.max(0, end - (alwaysOnTopCount - 1) + 1);
        } else {
          end = instances.length - 1 - alwaysOnTopCount;
          start = 0;
        }

        insertIndex = start; //팝업 객체 목록은 정렬이 되어 있음.

        for (i = start; i <= end; i++) {
          if (targetPriority < instances[i].options.priority) {
            break;
          }

          insertIndex = i + 1;
        } //2. 추가.


        instances.splice(insertIndex, 0, popup); //.이전 위치 부터 최상단 팝업까지 zIndex 변경.

        for (i = 0; i < instances.length; i++) {
          this._updateZIndex(instances[i]);
        }
      }
    }, {
      key: "center",
      value: function center(popup) {
        popup.center();
      }
    }, {
      key: "_updateZIndex",
      value: function _updateZIndex(popup, index) {
        if (popup.isOpened) {
          if (!index) {
            index = this._popups.indexOf(popup);
          }

          var zIndex = this._minZIndex + index * 2;
          popup.content.style.zIndex = zIndex;

          if (popup.backDrop) {
            popup.backDrop.style.zIndex = zIndex - 1;
          }
        }
      }
    }, {
      key: "_cancelPopups",
      value: function _cancelPopups(event) {
        var lockedPopups = this._lockedPopups;

        this._popups.slice(0).forEach(function (popup) {
          if (!lockedPopups || lockedPopups.indexOf(popup) < 0) {
            popup._cancelByEvent(event);
          }
        });
      }
    }, {
      key: "_addStageListeners",
      value: function _addStageListeners() {
        var _this9 = this;

        if (!this._isInitiated) {
          this._isInitiated = true;
          window.addEventListener('resize', this._boundResize);
          window.addEventListener('scroll', this._boundScroll, true);
          STAGE_EVENTS.forEach(function (type) {
            document.addEventListener(type, _this9._boundStageEventHandler, type === 'focus');
          });
        }
      }
    }, {
      key: "_removeStageListeners",
      value: function _removeStageListeners() {
        var _this10 = this;

        if (this._isInitiated) {
          this._isInitiated = false;
          window.removeEventListener('resize', this._boundResize);
          window.removeEventListener('scroll', this._boundScroll, true);
          STAGE_EVENTS.forEach(function (type) {
            document.removeEventListener(type, _this10._boundStageEventHandler, type === 'focus');
          });
          this._lockedPopups = null;
        }
      }
    }, {
      key: "_onScroll",
      value: function _onScroll(event) {
        this._cancelPopups(event);
      }
    }, {
      key: "_onResize",
      value: function _onResize(event) {
        var instances = this._popups;
        var pendingPopupMap = this._pendingPopupMap;

        if (instances && instances.length > 0) {
          instances.forEach(function (popup) {
            var fid = pendingPopupMap.get(popup);

            if (fid) {
              window.cancelAnimationFrame(fid);
            }

            if (popup.options.closeOnResize) {
              popup.close(event);
            } else {
              fid = window.requestAnimationFrame(function () {
                popup.updateLayout();
                pendingPopupMap.delete(popup);
              });
              pendingPopupMap.set(popup, fid);
            }
          });
        }
      }
    }, {
      key: "_onStageEvents",
      value: function _onStageEvents(event) {
        var _this11 = this;

        switch (event.type) {
          case 'mousedown':
            this._lockedPopups = [];

            this._cancelPopups(event);

            break;

          case 'mouseup':
            if (this._lockedPopups) {
              window.requestAnimationFrame(function () {
                _this11._lockedPopups = null;
              });
            }

            break;

          case 'click':
            //case 'mousewheel' :
            this._cancelPopups(event);

            break;

          case 'focus':
            this._popups.some(function (popup) {
              if (popup.content.contains(event.target)) {
                _this11.bringToFront(popup);

                return true;
              }
            });

            break;
        }
      }
    }]);

    return _class;
  }())();
  function popup(data, options) {
    return new Popup().open(data, options);
  }

  /**
   * TODO 기능 추가 필요!!!
   * @param text
   * @param search
   * @param options
   * @returns {string}
   */

  function highlight(text, search, tagTemplate) {
    var expression = escapeRegExp(search);
    var regexp = new RegExp("(".concat(expression.split(' ').join('|'), ")"), 'gi');
    return "".concat(text.replace(regexp, tagTemplate));
  }

  var defaultOptions = {
    suggestDelay: 300,
    suggestFactory: '<div class="suggest-container"><div class="suggest-list"></div></div>',
    suggestItemFactory: '<div></div>',
    hookRenderSuggestItem: null,
    hookFreeSuggestItem: null,
    suggestItemSize: 40,
    suggestItemHighlightTemplate: '<em class="suggest-item__highlight">$1</em>',
    inputFactory: '<div class="input-control"><input autocomplete="off"></div>'
  };

  var AutoComplete =
  /*#__PURE__*/
  function (_Element) {
    _inherits(AutoComplete, _Element);

    _createClass(AutoComplete, null, [{
      key: "__template__",
      value: function __template__() {
        return '<div class="auto-complete">' + '<div id="selectContainer" class="select-container"></div>' + '</div>';
      }
    }]);

    function AutoComplete(parent) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AutoComplete);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoComplete).call(this));
      _this._options = options;
      _this._selectContainer = _this.DOM.selectContainer;
      _this._boundInputEvent = _this._onInputEvent.bind(_assertThisInitialized(_this));
      _this._boundInputFocus = _this._onInputFocus.bind(_assertThisInitialized(_this));
      _this._boundInputBlur = _this._onInputBlur.bind(_assertThisInitialized(_this));
      _this._boundSuggestListItemClick = _this._onSuggestListItemClick.bind(_assertThisInitialized(_this));
      _this._boundSuggestListCaretChange = _this._onSuggestListCaretChange.bind(_assertThisInitialized(_this));
      _this._caretSuggestIndex = -1;
      _this._lockedCount = 0;
      _this._focused = false;
      _this._suggestPopup = null;
      _this._suggestContainer = null;
      _this._suggestList = null;
      _this._suggestItems = [];
      _this._selectedSuggestItem = null;
      _this._lastSuggestPromise = null;
      _this._lastSuggestValue = '';
      _this._inputedValue = '';
      _this._highlightCache = {};
      _this._inputElement = null;
      _this._inputGroup = null;
      _this._debounceLoadSuggest = vrix.util.debounceFunction(_this._loadSuggest, _assertThisInitialized(_this), _this._options.suggestDelay);
      _this.labelField = options.labelField || null;
      _this.minChar = 1;
      _this.suggestFilter = true;
      _this.placeholder = options.placeholder || '';
      /**
       * 제안 목록에 보여줄 개수
       */

      _this.suggestCount = 6;
      _this.suggestMinCount = 0;
      _this.delimiterOnKeys = [9, 13];

      _this.addEventListener('mousedown', _this._onMouseDown.bind(_assertThisInitialized(_this)));

      return _this;
    }

    _createClass(AutoComplete, [{
      key: "clear",

      /**
       *  초기화.
       */
      value: function clear() {
        this._closeSuggestList();

        this._caretSuggestIndex = -1;

        this._setInputValue('');

        this._suggestItems = [];

        if (this._suggestList) {
          this._suggestList.items = [];
        }
      }
      /**
       * input 포커스 설정
       * @private
       */

    }, {
      key: "focus",
      value: function focus() {
        this._inputElement.focus();
      }
      /**
       * input 포커스 해제
       * @private
       */

    }, {
      key: "blur",
      value: function blur() {
        this._inputElement.blur();
      }
      /**
       * 지정된 데이터의 labelField 표시하는 문자열 반환.
       */

    }, {
      key: "itemToLabel",
      value: function itemToLabel(item) {
        return this.labelField !== null ? item[this.labelField] : item && item.toString();
      }
      /**
       *
       * @param text
       * @param search
       * @returns {html}
       */

    }, {
      key: "toHighlightHtml",
      value: function toHighlightHtml(text) {
        var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var key = text + '|' + search;
        var html = this._highlightCache[key];

        if (html === undefined) {
          html = this._highlightCache[key] = highlight(text, search, this._options.suggestItemHighlightTemplate);
        }

        return html;
      }
      /**
       * 제안 목록를 value 기준으로 엽니다.
       * @param {string} value
       */

    }, {
      key: "openSuggest",
      value: function openSuggest() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

        if (value === undefined) {
          value = this.inputValue;
        }

        value = value || '';

        if (value.length >= this.minChar) {
          this.inputValue = value;

          this._loadSuggest(value);

          return true;
        }

        return false;
      }
      /**
       * 제안 목록를 닫습니다.
       */

    }, {
      key: "closeSuggest",
      value: function closeSuggest() {
        this._closeSuggestList();
      }
      /**
       * 해당 자원을 모두 해제합니다.
       */

    }, {
      key: "destroy",
      value: function destroy() {
        if (this._suggestList) {
          this._suggestList.destroy();

          this._suggestList = null;
        }

        if (this._suggestPopup) {
          this._suggestPopup.destroy();

          this._suggestPopup = null;
        }

        this.clear();
      }
      /**
       * input 엘리먼트 설정
       * @private
       */

    }, {
      key: "_setInputElement",
      value: function _setInputElement(element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('inputFactory is wrong.');
        }

        var container = this._selectContainer;

        if (this.inputGroup) {
          container.removeChild(this.inputGroup);
        }

        var input = this.inputElement;

        if (input) {
          input.removeEventListener('focus', this._boundInputFocus);
          input.removeEventListener('blur', this._boundInputBlur);
          input.removeEventListener('keydown', this._boundInputEvent);
          input.removeEventListener('keyup', this._boundInputEvent);
          input.removeEventListener('input', this._boundInputEvent);
        }

        this._inputGroup = element;
        container.appendChild(element);
        input = this._inputElement = container.querySelector('input');

        if (input) {
          input.placeholder = this.placeholder;
          input.addEventListener('focus', this._boundInputFocus);
          input.addEventListener('blur', this._boundInputBlur);
          input.addEventListener('keydown', this._boundInputEvent);
          input.addEventListener('keyup', this._boundInputEvent);
          input.addEventListener('input', this._boundInputEvent);
        }
      }
    }, {
      key: "_getSuggestPopup",
      value: function _getSuggestPopup() {
        if (!this._suggestPopup) {
          this._suggestPopup = new Popup({
            positionTarget: this._options.positionTarget || this.root,
            horizontalAlign: 'left',
            verticalAlign: 'top',
            alwaysOnTop: true,
            autoFocus: false,
            closeOnResize: true,
            closeOnOutsideDown: true,
            exceptionOutside: [this.root],
            active: this.root
          });
          this._suggestContainer = buildDomElement(this._options.suggestFactory);
          this._suggestList = this._createSuggestList(this._suggestContainer.querySelector('.suggest-list') || this._suggestContainer);
        }

        return this._suggestPopup;
      }
      /**
       * 토큰 제안 목록 보이기
       */

    }, {
      key: "_openSuggestList",
      value: function _openSuggestList(items) {
        var _this2 = this;

        if (this._suggestItems !== items) {
          this._suggestItems = items;
          this._highlightCache = {};
        }

        if (items.length <= 0) {
          return;
        }

        var popup = this._getSuggestPopup();

        var list = this._suggestList;
        var container = this._suggestContainer;

        var updateListItemsFunc = function updateListItemsFunc() {
          if (list.items !== items) {
            list.rowCount = Math.max(_this2.suggestMinCount, Math.min(items.length, _this2.suggestCount));
            list.items = items;

            _this2._commitCaretSuggestIndex(-1);
          }
        };

        if (popup.isOpened) {
          updateListItemsFunc();

          this._layoutSuggestList();

          return;
        }

        var onMouseDown = function onMouseDown(event) {
          event.preventDefault(); //IE 스크롤바 클릭시 포커스 이동 방지

          _this2._lockFocus();
        };

        var onMouseUp = function onMouseUp(event) {
          _this2._unlockFocus();
        };

        popup.open(container).opening(function (content) {
          //제안 리스트 너비 지정
          //자동 으로 크기 지정필요.
          var rect = _this2.root.getBoundingClientRect();

          container.style.minWidth = rect.width + 'px';
          updateListItemsFunc();
        }).opened(function (content) {
          container.addEventListener('mousedown', onMouseDown);
          container.addEventListener('mouseup', onMouseUp);
          list.addEventListener('item-click', _this2._boundSuggestListItemClick);
          list.addEventListener('caret-change', _this2._boundSuggestListCaretChange);

          _this2._dispatchEvent('suggest-open', {
            items: items
          });
        }).closed(function (content) {
          container.removeEventListener('mousedown', onMouseDown);
          container.removeEventListener('mouseup', onMouseUp);
          list.removeEventListener('item-click', _this2._boundSuggestListItemClick);
          list.removeEventListener('caret-change', _this2._boundSuggestListCaretChange);

          _this2._dispatchEvent('suggest-close');
        });
      }
      /**
       * 제안 목록 숨기기
       */

    }, {
      key: "_closeSuggestList",
      value: function _closeSuggestList() {
        var popup = this._suggestPopup;

        if (popup && popup.isOpened) {
          popup.close();
        }
      }
      /**
       * 제안 목록 인스턴스 생성.
       * @private
       */

    }, {
      key: "_createSuggestList",
      value: function _createSuggestList(container) {
        var self = this;
        var options = self._options;
        return List$1.create(container, {
          itemFactory: function itemFactory(item, index) {
            var element = buildDomElement(options.suggestItemFactory, item, index);
            ElementHelper.addClass(element, 'suggest-item');
            return element;
          },
          renderItemCallback: function renderItemCallback(element, item, index, state) {
            if (options.hookRenderSuggestItem instanceof Function) {
              options.hookRenderSuggestItem.apply(this, arguments);
            } else {
              var text = self.itemToLabel(item);
              element.innerHTML = self.toHighlightHtml(text, self._lastSuggestValue);

              if (state.active) {
                element.setAttribute('active', '');
              } else {
                element.removeAttribute('active');
              }
            }
          },
          freeItemCallback: function freeItemCallback(element) {
            if (options.hookFreeSuggestItem instanceof Function) {
              options.hookFreeSuggestItem.apply(this, arguments);
            }
          },
          rowHeight: options.suggestItemSize
        });
      }
      /**
       * 제안 목록 재배치
       */

    }, {
      key: "_layoutSuggestList",
      value: function _layoutSuggestList() {
        if (!this.isOpenedSuggest) {
          return;
        }

        this._suggestPopup.updateLayout();
      }
      /**
       * input 포커스 유지
       */

    }, {
      key: "_lockFocus",
      value: function _lockFocus() {
        if (this._focused) {
          this._lockedCount++;
        }
      }
      /**
       * input 포커스 해제
       */

    }, {
      key: "_unlockFocus",
      value: function _unlockFocus() {
        if (this._lockedCount <= 0) {
          return;
        }

        this._lockedCount--;

        if (this._lockedCount <= 0) {
          this._lockedCount = 0;
          this.focus(); //ie 포커스 안가는 경우 있음. 다시 재실행.

          this.focus();
        }
      }
      /**
       * 제안목록 필터 적용.
       * @private
       */

    }, {
      key: "_filterSuggestItems",
      value: function _filterSuggestItems(value) {
        var _this3 = this;

        var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var expression = escapeRegExp(value);
        var matches = new RegExp(expression, 'i');
        return items.filter(function (item) {
          var label = _this3.itemToLabel(item);

          if (_this3.suggestFilter instanceof Function) {
            return _this3.suggestFilter(item, label, _this3);
          }

          return !_this3.suggestFilter || matches.test(label);
        });
      }
      /**
       *
       */

    }, {
      key: "_changeInputValue",
      value: function _changeInputValue(value) {
        var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var min = Math.max(0, this.minChar);

        if (this._inputedValue !== value) {
          this._inputedValue = value;

          this._dispatchEvent('input-change', {
            value: value,
            trigger: trigger
          });

          if (value.length < min) {
            this._closeSuggestList();
          } else {
            this._debounceLoadSuggest(value);
          }

          this._selectedSuggestItem = null;
          this._highlightCache = {};
          return true;
        }

        return false;
      }
    }, {
      key: "_loadSuggest",
      value: function _loadSuggest(value) {
        var _this4 = this;

        //이전 입력값과 같다면.
        if (value === this._lastSuggestValue && this._suggestItems.length > 0) {
          this._openSuggestList(this._suggestItems);

          return;
        }

        var openSuggestFunc = function openSuggestFunc(value, items) {
          if (value !== _this4._inputedValue) {
            return;
          }

          value = value || '';
          items = _this4._filterSuggestItems(value, items);

          if (items.length > 0) {
            _this4._openSuggestList(items);
          } else {
            //TODO 제안 목록이 없습니다.
            _this4._closeSuggestList();
          }

          _this4._dispatchEvent('suggest-change', {
            value: value,
            items: items
          });
        };

        this._lastSuggestValue = value || '';
        var source = this.suggestSource;

        if (source instanceof Function) {
          source = source(value);
        }

        if (Array.isArray(source)) {
          openSuggestFunc(value, source);
        } else if (source instanceof Promise || source instanceof ProgressPromise) {
          //TODO Promise cancel 필요!!!
          if (this._lastSuggestPromise && this._lastSuggestPromise !== source) {
            ElementHelper.removeClass(this.root, 'suggest-progress');

            this._dispatchEvent('suggest-cancel');
          }

          this._lastSuggestPromise = source;
          ElementHelper.addClass(this.root, 'suggest-progress');

          this._dispatchEvent('suggest-progress', {
            value: value
          }); //대기중 표시


          source.then(function (result) {
            if (source === _this4._lastSuggestPromise) {
              openSuggestFunc(value, result);
              _this4._lastSuggestPromise = null;
            }

            ElementHelper.removeClass(_this4.root, 'suggest-progress');
          }).catch(function (reason) {
            console.error(reason);

            if (source === _this4._lastSuggestPromise) {
              _this4._lastSuggestPromise = null;
            }

            _this4._dispatchEvent('suggest-error', {
              error: reason
            });

            ElementHelper.removeClass(_this4.root, 'suggest-progress');
          });
        }
      }
    }, {
      key: "_hasDelimiterKey",
      value: function _hasDelimiterKey(event) {
        var delimiters = this.delimiterOnKeys;

        if (delimiters.indexOf(event.keyCode) >= 0) {
          return true;
        }

        return delimiters.indexOf(String.fromCharCode(event.keyCode)) >= 0;
      }
      /**
       * input value 반환.
       * @returns {String}
       * @private
       */

    }, {
      key: "_getInputValue",
      value: function _getInputValue() {
        return this._inputElement && this._inputElement.value || '';
      }
      /**
       * input value 설정.
       * @param value
       * @private
       */

    }, {
      key: "_setInputValue",
      value: function _setInputValue(value) {
        var oldValue = this._getInputValue();

        if (value !== oldValue) {
          this._inputElement.value = this._inputedValue = value;

          this._dispatchEvent('input-change', {
            value: value
          });
        }
      }
    }, {
      key: "_selectSuggestItem",
      value: function _selectSuggestItem(item) {
        this._selectedSuggestItem = item;

        this._setInputValue(this.itemToLabel(item));

        this._closeSuggestList();

        this._dispatchEvent('suggest-select', {
          item: item
        });
      }
    }, {
      key: "_commitCaretSuggestIndex",
      value: function _commitCaretSuggestIndex(index) {
        if (this._caretSuggestIndex !== index) {
          var oldIndex = this._caretSuggestIndex;
          this._caretSuggestIndex = index;
          this._suggestList.caretIndex = index;

          this._suggestList.scrollToIndex(index);

          this._suggestList.invalidate();

          this._suggestList.validateNow();

          this._dispatchEvent('suggest-caret-change', {
            value: index,
            oldValue: oldIndex
          });
        }
      }
    }, {
      key: "_moveUp",
      value: function _moveUp(event) {
        if (!this.isOpenedSuggest) {
          return;
        }

        var numItems = this._suggestItems.length;

        if (numItems > 0 && this.isOpenedSuggest) {
          if (this._caretSuggestIndex >= 0) {
            this._commitCaretSuggestIndex(this._caretSuggestIndex - 1);
          }

          if (this._caretSuggestIndex < 0) {
            this._closeSuggestList();
          }

          event.preventDefault();
        }
      }
    }, {
      key: "_moveDown",
      value: function _moveDown(event) {
        var numItems = this._suggestItems.length;

        if (numItems > 0) {
          if (!this.isOpenedSuggest) {
            this.openSuggest();
          } else {
            var index = Math.min(numItems - 1, Math.max(this._caretSuggestIndex + 1, 0));

            if (this.isOpenedSuggest) {
              this._commitCaretSuggestIndex(index);
            }

            event.preventDefault();
          }
        }
      }
    }, {
      key: "_dispatchEvent",
      value: function _dispatchEvent(type, detail) {
        return this.dispatchEvent(new CustomEvent(type, {
          bubbles: false,
          cancelable: false,
          detail: detail
        }));
      }
      /**
       * 제안 목록 적용
       */

    }, {
      key: "_applySuggestItem",
      value: function _applySuggestItem() {
        //제안 목록에서 선택.
        if (this.isOpenedSuggest) {
          var index = this._caretSuggestIndex;

          if (this._suggestItems.length === 1) {
            index = 0;
          }

          if (index >= 0) {
            var item = this._suggestItems[index];

            this._selectSuggestItem(item);

            return true;
          }
        }

        return false;
      }
    }, {
      key: "_adjustNavigation",
      value: function _adjustNavigation(event) {
        switch (event.keyCode) {
          case 38:
            this._moveUp(event);

            break;

          case 40:
            this._moveDown(event);

            break;
        }
      }
    }, {
      key: "_onMouseDown",
      value: function _onMouseDown(event) {
        if (event.target !== this._inputElement) {
          event.preventDefault();
          event.stopPropagation();

          this._inputElement.focus();
        }

        if (this._focused && !this.isOpenedSuggest) {
          this.openSuggest();
        }
      }
    }, {
      key: "_onInputEvent",
      value: function _onInputEvent(event) {
        var type = event.type;

        if (type === 'keydown') {
          if (this._hasDelimiterKey(event)) {
            if (this._applySuggestItem()) {
              event.preventDefault();
              event.stopPropagation();
            }
          } else {
            this._adjustNavigation(event);
          }

          this.dispatchEvent(new CustomEvent('input-key-down', {
            detail: {
              trigger: event
            }
          }));
        } else if (type === 'keyup') ; else if (type === 'input') {
          this._changeInputValue(this._getInputValue(), event);
        }
      }
    }, {
      key: "_onInputFocus",
      value: function _onInputFocus(event) {
        if (this._focused) {
          return;
        }

        this._focused = true;

        if (!this.isOpenedSuggest) {
          this.openSuggest();
        }

        this.dispatchEvent(new CustomEvent('focus', {
          detail: {
            trigger: event
          }
        }));
      }
    }, {
      key: "_onInputBlur",
      value: function _onInputBlur(event) {
        if (this._lockedCount > 0) {
          this.focus();
          return;
        }

        this._focused = false;

        this._closeSuggestList();

        this.dispatchEvent(new CustomEvent('blur', {
          detail: {
            trigger: event
          }
        }));
      }
    }, {
      key: "_onSuggestListItemClick",
      value: function _onSuggestListItemClick(event) {
        var item = copy(event.detail.item, true);

        this._selectSuggestItem(item);
      }
    }, {
      key: "_onSuggestListCaretChange",
      value: function _onSuggestListCaretChange(event) {
        var index = event.detail.index;

        if (index !== this._caretSuggestIndex) {
          this._caretSuggestIndex = index;
        }
      }
    }, {
      key: "inputFactory",
      get: function get() {
        return this._inputFactory;
      },
      set: function set(value) {
        if (this._inputFactory !== value) {
          this._inputFactory = value;

          this._setInputElement(buildDomElement(value));
        }
      }
    }, {
      key: "inputGroup",
      get: function get() {
        return this._inputGroup;
      }
    }, {
      key: "inputElement",
      get: function get() {
        return this._inputElement;
      }
      /**
       * 제안 목록을 만드는 데이타 소스.
       * @params {Array|Function|Promise}
       */

    }, {
      key: "suggestSource",
      get: function get() {
        return this._suggestSource;
      },
      set: function set(value) {
        if (value !== this.suggestSource) {
          this._suggestSource = value;
        }
      }
      /**
       *  제안 목록 활성화 여부.
       */

    }, {
      key: "isOpenedSuggest",
      get: function get() {
        return !!(this._suggestPopup && this._suggestPopup.isOpened);
      }
      /**
       * 제안목록 커서 인덱스
       * @returns {number}
       */

    }, {
      key: "caretSuggestIndex",
      get: function get() {
        return this._caretSuggestIndex;
      }
      /**
       * 포커스 여부
       * @returns {boolean}
       */

    }, {
      key: "focused",
      get: function get() {
        return this._focused;
      }
      /**
       * 입력된 값
       * @returns {String}
       */

    }, {
      key: "inputValue",
      get: function get() {
        return this._getInputValue();
      },
      set: function set(value) {
        this._setInputValue(value);
      }
      /**
       * 선택됨 제안 아이템
       * @returns {null}
       */

    }, {
      key: "selectedSuggestItem",
      get: function get() {
        return this._selectedSuggestItem;
      }
    }, {
      key: "lastSuggestValue",
      get: function get() {
        return this._lastSuggestValue || '';
      }
    }], [{
      key: "create",
      value: function create(container) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Element.create.apply(AutoComplete, [container, mixin({}, defaultOptions, options)]);
      }
    }]);

    return AutoComplete;
  }(Element);

  var HIDDEN_CSS = 'width: auto; height: auto; overflow: hidden; position: fixed;visibility: hidden; top: -999999px; left: -999999px;';
  var SELECT_ITEM_CLASS = 'select-item';
  var defaultOptions$1 = _objectSpread2({}, defaultOptions, {
    inputFactory: '<div class="input-control"><input autocomplete="off"></div>',
    selectedItemFactory: "<div><span class=\"".concat(SELECT_ITEM_CLASS, "-label\"></span><span class=\"").concat(SELECT_ITEM_CLASS, "-remover\">\xD7</span></div>")
  });

  var Tokenizer =
  /*#__PURE__*/
  function (_AutoComplete) {
    _inherits(Tokenizer, _AutoComplete);

    _createClass(Tokenizer, null, [{
      key: "__template__",
      value: function __template__() {
        return '<div class="tokenizer">' + '<div id="inputSizer"></div>' + '<div id="selectContainer" class="select-container"></div>' + '</div>';
      }
    }]);

    function Tokenizer(parent, options) {
      var _this;

      _classCallCheck(this, Tokenizer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tokenizer).call(this, parent, options));
      _this._inputSizer = _this.DOM.inputSizer;
      _this._inputSizer.style.cssText = HIDDEN_CSS;
      _this._boundCollectionChange = _this._onCollectionChange.bind(_assertThisInitialized(_this));

      _this._selectContainer.addEventListener('click', _this._onSelectContainerMouseClick.bind(_assertThisInitialized(_this)));

      _this._selectedElements = [];
      _this._caretSelectedIndex = -1;
      _this._anchorSelectedIndex = -1;
      _this._typicalSelectedElement = null;
      _this.selectedItems = [];
      _this.selectedFilter = null;
      /**
       * 토큰에 표시될 텍스트 엘리먼트 셀렉터
       */

      _this.labelSelector = ".".concat(SELECT_ITEM_CLASS, "-label");
      /**
       * 토큰 삭제 엘리먼트 셀렉터
       */

      _this.removerSelector = ".".concat(SELECT_ITEM_CLASS, "-remover");
      _this.allowDuplicate = false;
      _this.allowOnlySuggest = false;
      _this.addOnFocusOut = false;
      _this.multiple = true;

      _this.addEventListener('input-focus-out', function () {
        if (_this.addOnFocusOut && _this.inputValue.trim().length > 0) {
          _this._addSelectedItemByInput();
        }
      });

      return _this;
    }

    _createClass(Tokenizer, [{
      key: "clear",

      /**
       *  초기화.
       *  @override
       */
      value: function clear() {
        var _this2 = this;

        _get(_getPrototypeOf(Tokenizer.prototype), "clear", this).call(this);

        this._selectedElements.forEach(function (element) {
          _this2._freeSelectedElement(element);
        });

        this._selectedElements = [];
        this._caretSelectedIndex = -1;
        this._anchorSelectedIndex = -1;
      }
      /**
       *
       */

    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(Tokenizer.prototype), "destroy", this).call(this);

        this.selectedItems = null;
        this.clear();

        if (this._typicalSelectedElement) {
          this._freeSelectedElement(this._typicalSelectedElement);

          this._typicalSelectedElement = null;
        }
      }
      /**
       * 토큰 삭제
       * @param item
       */

    }, {
      key: "removeSelectedItem",
      value: function removeSelectedItem(item) {
        this.removeSelectedItemAt(this.collection.get(item));
      }
      /**
       * 토큰 삭제
       * @param index
       */

    }, {
      key: "removeSelectedItemAt",
      value: function removeSelectedItemAt(index) {
        if (index < 0 || index >= this.collection.length) {
          return;
        }

        this._removeSelectedItemItemAt(index);

        this._commitCaretSelectedIndex(-1);

        this.focus();
      }
      /**
       * Tokenizer 크기 설정.
       * @private
       */

    }, {
      key: "_measure",
      value: function _measure() {
        var element = this._typicalSelectedElement;

        if (element) {
          var rect = element.getBoundingClientRect();
          var computedStyle = getComputedStyle(element);
          var height = rect.height + parseInt(computedStyle.marginTop) + parseInt(computedStyle.marginBottom);
          this._selectContainer.style.minHeight = height + 'px';
          this._inputElement.style.minHeight = height + 'px';
        }
      }
      /**
       * 토큰 데이타 생성.
       * @private
       */

    }, {
      key: "_createSelectedItem",
      value: function _createSelectedItem(value) {
        return this.labelField ? _defineProperty({}, this.labelField, value) : value;
      }
      /**
       * 토큰 데이타 추가.
       * @private
       */

    }, {
      key: "_addSelectedItem",
      value: function _addSelectedItem(item) {
        var _this3 = this;

        //데이타 중복 확인.
        var items = this._selectedCollection.toArray();

        var label = this.itemToLabel(item);

        if (label == null) {
          console.warn('Wrong item', item);
          return false;
        }

        if (this.selectedFilter instanceof Function && !this.selectedFilter(item, items)) {
          return false;
        } else if (!this.allowDuplicate && items.some(function (item) {
          return _this3.itemToLabel(item) === label;
        })) {
          console.warn('Duplicate item', item);

          this._dispatchEvent('select-cancel', {
            item: item
          });

          return false;
        }

        if (!this.multiple) {
          this._selectedCollection.removeAll(this._selectedCollection.toArray());
        }

        this._selectedCollection.add(item);

        return true;
      }
      /**
       * 입력값으로 추가
       * @returns {boolean}
       * @private
       */

    }, {
      key: "_addSelectedItemByInput",
      value: function _addSelectedItemByInput() {
        if (!this.allowOnlySuggest) {
          var value = this.inputValue.trim();

          if (value.length > 0) {
            this._selectSuggestItem(this._createSelectedItem(value));

            return true;
          }
        }

        return false;
      }
      /**
       * 토큰 데이타 삭제.
       * @private
       */

    }, {
      key: "_removeSelectedItemItemAt",
      value: function _removeSelectedItemItemAt(index) {
        return this._selectedCollection.removeAt(index);
      }
      /**
       * 토큰 엘리먼트 라벨 설정
       * @private
       */

    }, {
      key: "_setSelectedLabel",
      value: function _setSelectedLabel(element, item) {
        var label = this.itemToLabel(item);

        if (this.labelSelector instanceof Function) {
          this.labelSelector(element, item, label, this);
        } else if (this.labelSelector) {
          var labelElement = element.querySelector(this.labelSelector);

          if (labelElement) {
            labelElement.innerHTML = label;
          }
        }
      }
      /**
       * @private
       */

    }, {
      key: "_createTypicalSelectedElement",
      value: function _createTypicalSelectedElement() {
        if (this._typicalSelectedElement) {
          this._freeSelectedElement(this._typicalSelectedElement);
        }

        var element = this._typicalSelectedElement = buildDomElement(this.selectedItemFactory);
        ElementHelper.addClass(element, SELECT_ITEM_CLASS);
        element.style.cssText = HIDDEN_CSS;
        this.root.appendChild(element);

        this._setSelectedLabel(element, this._createSelectedItem(''));

        this._measure();
      }
      /**
       * 토큰 엘리먼트 생성
       * @private
       */

    }, {
      key: "_createSelectedElement",
      value: function _createSelectedElement(item, index) {
        var container = this._selectContainer;
        var element = buildDomElement(this.selectedItemFactory, item, index);
        container.appendChild(element);
        ElementHelper.addClass(element, SELECT_ITEM_CLASS);

        this._setSelectedLabel(element, item);

        this._selectedElements[index] = element;
        element.__selectedItem__ = item;

        this._layoutInputElement();

        return element;
      }
      /**
       * 토큰 엘리먼트 삭제
       * @private
       */

    }, {
      key: "_removeSelectedElement",
      value: function _removeSelectedElement(item, index) {
        var element;

        if (index < 0) {
          element = this._selectedElements.find(function (element) {
            return element.__selectedItem__ === item;
          });
        } else {
          element = this._selectedElements[index];
        }

        if (element) {
          this._freeSelectedElement(element);

          this._selectedElements.splice(index, 1);

          this._layoutInputElement();

          return true;
        }

        return false;
      }
    }, {
      key: "_freeSelectedElement",
      value: function _freeSelectedElement(element) {
        var callback = this._options.hookFreeSelectedElement;

        if (callback instanceof Function) {
          callback(element);
        }

        if (element.parentElement) {
          element.parentElement.removeChild(element);
        }
      }
    }, {
      key: "_layoutInputElement",
      value: function _layoutInputElement() {
        if (this._selectedElements.length > 0) {
          this._lockFocus();

          this._selectContainer.insertBefore(this.inputGroup, null);

          this._unlockFocus();
        }
      }
    }, {
      key: "_itemsAdded",
      value: function _itemsAdded(index, items) {
        var _this4 = this;

        this._lockFocus();

        (items || []).forEach(function (item, i) {
          _this4._createSelectedElement(item, index + i);
        });

        this._commitCaretSelectedIndex(-1);

        this._unlockFocus();
      }
    }, {
      key: "_itemsRemoved",
      value: function _itemsRemoved(index, items) {
        var _this5 = this;

        this._lockFocus();

        (items || []).forEach(function (item, i) {
          _this5._removeSelectedElement(item, index);
        });

        this._commitCaretSelectedIndex(-1);

        this._unlockFocus();

        this._layoutSuggestList();
      }
    }, {
      key: "_itemsReset",
      value: function _itemsReset(items) {
        this.clear();

        if (items && items.length > 0) {
          this._itemsAdded(0, items, false);
        }
      }
    }, {
      key: "_resizeInputElement",
      value: function _resizeInputElement(value) {
        this._inputSizer.innerHTML = value || '';

        var containerRect = this._selectContainer.getBoundingClientRect();

        var sizerRect = this._inputSizer.getBoundingClientRect();

        var typicalRect = this._typicalSelectedElement.getBoundingClientRect();

        this.inputGroup.style.minWidth = Math.min(containerRect.width, sizerRect.width + typicalRect.width) + 'px';
      }
    }, {
      key: "_findSelectedIndex",
      value: function _findSelectedIndex(target) {
        var cssName = '.' + SELECT_ITEM_CLASS;
        var found = target.closest(cssName);

        if (found) {
          return this._selectedElements.indexOf(found);
        }

        return -1;
      }
      /**
       *
       * @param value
       * @override
       */

    }, {
      key: "_changeInputValue",
      value: function _changeInputValue(value, trigger) {
        if (_get(_getPrototypeOf(Tokenizer.prototype), "_changeInputValue", this).call(this, value, trigger)) {
          this._commitCaretSelectedIndex(-1);

          this._resizeInputElement(value);

          this._layoutSuggestList();
        }
      }
      /**
       *
       * @param item
       * @override
       */

    }, {
      key: "_selectSuggestItem",
      value: function _selectSuggestItem(item) {
        this._addSelectedItem(item);

        this._closeSuggestList();

        this.inputValue = '';
        /* if (this.minChar <= 0 && this.focused) {
             this._loadSuggest('');
         }*/
      }
      /**
       * @private
       */

    }, {
      key: "_activeSelectedElement",
      value: function _activeSelectedElement(index) {
        var element = this._selectedElements[index];

        if (element && !element.hasAttribute('active')) {
          element.setAttribute('active', '');
        }
      }
      /**
       * @private
       */

    }, {
      key: "_deactiveSelectedElement",
      value: function _deactiveSelectedElement(index) {
        var element = this._selectedElements[index];

        if (element && element.hasAttribute('active')) {
          element.removeAttribute('active');
        }
      }
    }, {
      key: "_commitCaretSelectedIndex",
      value: function _commitCaretSelectedIndex(index, shift) {
        var _this6 = this;

        var selectedItems = this._selectedCollection.toArray();

        if (shift && index >= 0) {
          if (this._anchorSelectedIndex < 0) {
            this._anchorSelectedIndex = index;
          }
        } else {
          this._anchorSelectedIndex = index;
        }

        if (this._caretSelectedIndex !== index) {
          var oldIndex = this._caretSelectedIndex;
          this._caretSelectedIndex = index;
          var start = Math.min(this._anchorSelectedIndex, index);
          var end = Math.max(this._anchorSelectedIndex, index);
          selectedItems.forEach(function (item, i) {
            if (i >= start && i <= end) {
              _this6._activeSelectedElement(i);
            } else {
              _this6._deactiveSelectedElement(i);
            }
          });

          this._dispatchEvent('item-caret-change', {
            value: index,
            oldValue: oldIndex
          });
        }
      }
    }, {
      key: "_moveLeft",
      value: function _moveLeft(event) {
        var numSelectedItems = this._selectedCollection.length;
        var caretIndex = this._caretSelectedIndex;

        if (numSelectedItems > 0 && (this._inputElement.selectionStart === 0 || caretIndex >= 0)) {
          var index;

          if (caretIndex === 0) {
            index = -1;
          } else if (caretIndex > 0) {
            index = caretIndex - 1;
          } else {
            index = numSelectedItems - 1;
          }

          this._commitCaretSelectedIndex(index, event.shift);

          event.preventDefault();
          return true;
        }

        return false;
      }
    }, {
      key: "_moveRight",
      value: function _moveRight(event) {
        var numSelectedItems = this._selectedCollection.length;
        var caretIndex = this._caretSelectedIndex;
        var value = this.inputValue;

        if (numSelectedItems > 0 && this._inputElement.selectionStart === value.length || caretIndex >= 0) {
          var index;

          if (caretIndex === numSelectedItems - 1) {
            index = -1;
          } else if (caretIndex < numSelectedItems - 1) {
            index = caretIndex + 1;
          } else {
            index = 0;
          }

          this._commitCaretSelectedIndex(index, event.shift);

          event.preventDefault();
          return true;
        }

        return false;
      }
    }, {
      key: "_backspace",
      value: function _backspace(event) {
        var caretIndex = this._caretSelectedIndex;

        if (caretIndex >= 0) {
          this._removeSelectedItemItemAt(caretIndex);

          event.preventDefault();
          return true;
        } else if (this._selectedCollection.length > 0 && this._inputElement.selectionStart === 0) {
          this._moveLeft(event);

          return true;
        }

        return false;
      }
    }, {
      key: "_delete",
      value: function _delete(event) {
        var caretIndex = this._caretSelectedIndex;

        if (caretIndex >= 0) {
          this._removeSelectedItemItemAt(caretIndex);

          event.preventDefault();
          return true;
        }

        return false;
      }
      /**
       * @override
       */

    }, {
      key: "_applySuggestItem",
      value: function _applySuggestItem() {
        if (!this.isOpenedSuggest || this.caretSuggestIndex < 0) {
          return this._addSelectedItemByInput();
        }

        return _get(_getPrototypeOf(Tokenizer.prototype), "_applySuggestItem", this).call(this);
      }
      /**
       *
       * @param event
       * @override
       */

    }, {
      key: "_adjustNavigation",
      value: function _adjustNavigation(event) {
        switch (event.keyCode) {
          case 8:
            //backspace
            if (this._backspace(event)) {
              return;
            }

            break;

          case 46:
            //delete
            if (this._delete(event)) {
              return;
            }

            break;

          case 37:
            this._moveLeft(event);

            return;

          case 39:
            this._moveRight(event);

            return;

          case 35:
            return;
        }

        _get(_getPrototypeOf(Tokenizer.prototype), "_adjustNavigation", this).call(this, event);
      }
      /**
       *
       * @param event
       * @private
       */

    }, {
      key: "_onCollectionChange",
      value: function _onCollectionChange(event) {
        var detail = event.detail;
        var index = detail.index,
            items = detail.items;

        switch (detail.kind) {
          case 'move':
            break;

          case 'set':
          case 'add':
            this._itemsAdded(index, items);

            this._dispatchEvent('item-add', {
              items: items,
              index: index
            });

            break;

          case 'remove':
            this._itemsRemoved(index, items);

            this._dispatchEvent('item-remove', {
              items: items,
              index: index
            });

            break;

          case 'reset':
            this._itemsReset(this.collection.source);

            this._dispatchEvent('item-reset', {
              items: this.collection.source
            });

            break;

          case 'refresh':
            break;
        }

        this._dispatchEvent(event.type, detail);
      }
    }, {
      key: "_onSelectContainerMouseClick",
      value: function _onSelectContainerMouseClick(event) {
        var remover = event.target.closest(this.removerSelector);

        var found = this._findSelectedIndex(event.target);

        if (remover && found >= 0) {
          this._removeSelectedItemItemAt(found);

          this.focus();
        }
      }
    }, {
      key: "collection",
      get: function get() {
        return this._selectedCollection;
      }
      /**
       * 토큰 목록
       * @returns {Array}
       * @private
       */

    }, {
      key: "selectedItems",
      get: function get() {
        return this._selectedCollection && this._selectedCollection.source || [];
      },
      set: function set(values) {
        if (!values) {
          values = [];
        }

        if (this.selectedItems !== values) {
          if (this.collection) {
            this.collection.removeEventListener('collection-change', this._boundCollectionChange);
          }

          this._selectedCollection = new ArrayList();
          this.collection.addEventListener('collection-change', this._boundCollectionChange);
          this._selectedCollection.source = values;
        }
      }
      /**
       * 토큰 엘리먼트 팩토리
       * @returns
       */

    }, {
      key: "selectedItemFactory",
      get: function get() {
        return this._selectedItemFactory;
      },
      set: function set(value) {
        if (this._selectedItemFactory !== value) {
          this._selectedItemFactory = value;

          this._createTypicalSelectedElement();
        }
      }
    }, {
      key: "inputValue",
      get: function get() {
        return _get(_getPrototypeOf(Tokenizer.prototype), "inputValue", this);
      },
      set: function set(value) {
        if (this.inputValue !== value) {
          _set(_getPrototypeOf(Tokenizer.prototype), "inputValue", value, this, true);

          this._resizeInputElement(value);
        }
      }
    }], [{
      key: "create",
      value: function create(container) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Element.create.apply(Tokenizer, [container, mixin({}, defaultOptions$1, options)]);
      }
    }]);

    return Tokenizer;
  }(AutoComplete);

  var defaultOptions$2 = _objectSpread2({}, defaultOptions$1);

  var ComboBox =
  /*#__PURE__*/
  function (_Tokenizer) {
    _inherits(ComboBox, _Tokenizer);

    _createClass(ComboBox, null, [{
      key: "__template__",
      value: function __template__() {
        return "<div class=\"combobox\">\n                    <div id=\"inputSizer\"></div>\n                    <div class=\"combobox-controls\">\n                        <div id=\"selectContainer\" class=\"select-container\"></div>\n                        <div id=\"dropdownTrigger\" class=\"dropdown-trigger\"><button tabindex=\"-1\">\u25BC</button></div>\n                    </div>\n                </div>";
      }
    }]);

    function ComboBox(parent, options) {
      var _this;

      _classCallCheck(this, ComboBox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBox).call(this, parent, options));
      _this.allowOnlySuggest = true;
      _this.multiple = false;
      _this.minChar = 0;
      return _this;
    }

    _createClass(ComboBox, [{
      key: "_createSelectedItem",
      value: function _createSelectedItem(item) {
        return item;
      }
    }, {
      key: "items",
      get: function get() {
        return _get(_getPrototypeOf(ComboBox.prototype), "suggestSource", this);
      },
      set: function set(value) {
        _set(_getPrototypeOf(ComboBox.prototype), "suggestSource", value, this, true);
      }
    }], [{
      key: "create",
      value: function create(container) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Element.create.apply(ComboBox, [container, mixin({}, defaultOptions$2, options)]);
      }
    }]);

    return ComboBox;
  }(Tokenizer);

  var _fixBabelExtend$4 = function (O) {
    var gPO = O.getPrototypeOf || function (o) {
      return o.__proto__;
    },
        sPO = O.setPrototypeOf || function (o, p) {
      o.__proto__ = p;
      return o;
    },
        construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
      var Constructor,
          a = [null];
      a.push.apply(a, args);
      Constructor = Parent.bind.apply(Parent, a);
      return sPO(new Constructor(), Class.prototype);
    };

    return function fixBabelExtend(Class) {
      var Parent = gPO(Class);
      return sPO(Class, sPO(function Super() {
        return construct(Parent, arguments, gPO(this).constructor);
      }, Parent));
    };
  }(Object);
  var HP = HTMLElement.prototype;
  var matchesFunction = HP.matches || HP.matchesSelector || HP.webkitMatchesSelector || HP.mozMatchesSelector || HP.msMatchesSelector;
  var MIRROR_POPUP_OPTION = {
    priority: 99999999,
    alwaysOnTop: true,
    horizontalAlign: 'left',
    verticalAlign: 'top',
    style: {
      margin: 0,
      pointerEvents: 'none'
    },
    destroyOnClose: true
  };
  var DEFAULT_OPTIONS = {
    dragLimitLength: 10,
    cancelKeyCodes: [27],
    //ESC,
    mirrorAnchor: [] //미러 엘리먼트 마우스 앵커 위치([0~1, 0~1]) ex: 중앙 앵커 [0.5, 0.5]

  };
  var RELEASE_EVENT = '__release__';
  var DRAG_SCROLLING_SIZE = 30;
  var DRAG_SCROLLING_VALUE = 10;

  function setUserSelect(element, value) {
    var style = element.style;
    style.userSelect = value;
    style.msUserSelect = value;
    style.webkitUserSelect = value;
    style.mozUserSelect = value;
    style.oUserSelect = value;
  }

  var DragManager = _fixBabelExtend$4(
  /*#__PURE__*/
  function (_EventTarget) {
    _inherits(DragManager, _EventTarget);

    function DragManager(container, options) {
      var _this;

      _classCallCheck(this, DragManager);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DragManager).call(this));

      if (!(container instanceof HTMLElement)) {
        throw new Error('Draggable container is expected to be of type `HTMLElement`');
      }

      _this._container = container;
      _this._options = mixin({}, DEFAULT_OPTIONS, options);
      _this._mirrorPopup = new Popup();
      _this._boundContainerMouseDown = _this._onContainerMouseDown.bind(_assertThisInitialized(_this));
      _this._document = container.ownerDocument || document;

      _this._container.addEventListener('mousedown', _this._boundContainerMouseDown);

      _this._dragging = false;
      _this._mirrorElement = null;
      _this._dragScrollingId = -1;
      _this._dragScrolling = false;
      return _this;
    }

    _createClass(DragManager, [{
      key: "cancel",
      value: function cancel() {
        this._dragCancel();

        this.dispatchEvent(new CustomEvent(RELEASE_EVENT));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.cancel();

        this._container.removeEventListener('mousedown', this._boundContainerMouseDown);
      }
    }, {
      key: "cancelDragEnter",
      value: function cancelDragEnter() {
        this._dragLeave(new CustomEvent('drag-enter-cancel'));
      }
    }, {
      key: "_dragReady",
      value: function _dragReady(event) {
        var found = this._findElement(event);

        var element = this._getDraggableElement(found);

        if (!element) {
          return false;
        }

        var dragSource = this._options.dragSource;
        this._dragElement = element;
        this._dragSource = dragSource instanceof Function ? dragSource(element, event) : dragSource;

        if (!this._dispatchDragEvent('drag-ready', null, event, true)) {
          this._dragElement = null;
          this._dragSource = null;
          return false;
        }

        return true;
      }
    }, {
      key: "_dragStart",
      value: function _dragStart(event) {
        var _this2 = this;

        if (!this._dispatchDragEvent('drag-start', null, event, true)) {
          return false;
        }

        var dragElement = this._dragElement;
        this._scroller = this._getScroller();
        this._dragging = true; //Mirror 엘리먼트 생성.

        var mirrorElement = this._mirrorElement = this._createMirrorElement(dragElement);

        if (mirrorElement) {
          ElementHelper.addClass(mirrorElement, 'drag-mirror');
          ElementHelper.addClass(dragElement, 'drag-dragging');

          this._mirrorPopup.open(mirrorElement, MIRROR_POPUP_OPTION).opening(function (content) {
            _this2._dispatchMirrorEvent('drag-mirror-create', dragElement, mirrorElement, event);

            _this2._mirrorOffset = _this2._calculateMirrorOffset(event);

            _this2._moveMirrorElement(event);
          });
        }

        return true;
      }
    }, {
      key: "_dragMove",
      value: function _dragMove(event) {
        if (!this._dragging) {
          return false;
        }

        var delta = this._calculateDragScrollDelta(event);

        if (delta) {
          this._startDragScrolling(delta);
        } else {
          this._stopDragScrolling();
        }

        var found = this._findElement(event);

        var overContainer = this._getDroppableElement(found);

        var oldOverContainer = this._overContainer;
        var isOutContainer = oldOverContainer && oldOverContainer !== overContainer;

        this._moveMirrorElement(event);

        this._dispatchDragEvent('drag-move', overContainer, event);

        if (isOutContainer) {
          this._dragLeave(event);

          ElementHelper.removeClass(oldOverContainer, 'drag-container-over');

          this._dispatchDragEvent('drag-out', this._overContainer, event);

          this._overContainer = null;
        }

        if (overContainer) {
          if (this._overContainer !== overContainer) {
            ElementHelper.addClass(overContainer, 'drag-container-over');
            this._overContainer = overContainer;
          }

          var test = this._dispatchDragEvent('drag-over', overContainer, event, true);

          if (!test) {
            this._dragEnter(event, overContainer);
          } else if (this._dropContainer) {
            this._dragLeave(event);
          }
        }

        return true;
      }
    }, {
      key: "_dragEnter",
      value: function _dragEnter(event, overContainer) {
        if (this._dropContainer !== overContainer && this._dispatchDragEvent('drag-enter', overContainer, event, true)) {
          this._dropContainer = overContainer;
          ElementHelper.addClass(overContainer, 'drag-container-enter');

          if (this._mirrorElement) {
            this._mirrorElement.setAttribute('drag-entering', '');
          }
        }
      }
    }, {
      key: "_dragLeave",
      value: function _dragLeave(event) {
        if (this._dropContainer) {
          ElementHelper.removeClass(this._dropContainer, 'drag-container-enter');

          this._dispatchDragEvent('drag-leave', this._dropContainer, event);

          if (this._mirrorElement) {
            this._mirrorElement.removeAttribute('drag-entering');
          }

          this._dropContainer = null;
        }
      }
    }, {
      key: "_dragEnd",
      value: function _dragEnd(event) {
        if (!this._dragging) {
          return false;
        }

        if (this._dropContainer) {
          this._dispatchDragEvent('drop', this._dropContainer, event, true);
        }

        this._dragStop('drag-end', event);

        return true;
      }
    }, {
      key: "_dragCancel",
      value: function _dragCancel() {
        if (!this._dragging) {
          return false;
        }

        this._dragStop('drag-cancel', new CustomEvent('drag-cancel'));

        return true;
      }
    }, {
      key: "_dragStop",
      value: function _dragStop(type, event) {
        if (this._overContainer) {
          ElementHelper.removeClass(this._overContainer, 'drag-container-over');
        }

        if (this._mirrorElement) {
          this._dispatchMirrorEvent('drag-mirror-remove', this._dragElement, this._mirrorElement, event);

          ElementHelper.removeClass(this._mirrorElement, 'drag-mirror');

          this._mirrorElement.removeAttribute('drag-entering');

          this._mirrorPopup.close();
        }

        if (this._dropContainer) {
          ElementHelper.removeClass(this._dropContainer, 'drag-container-enter');
        }

        if (this._dragElement) {
          ElementHelper.removeClass(this._dragElement, 'drag-dragging');
        }

        this._stopDragScrolling();

        this._dispatchDragEvent(type, this._dropContainer, event);

        this._dragging = false;
        this._dragElement = null;
        this._dragSource = null;
        this._mirrorElement = null;
        this._dropContainer = null;
        this._overContainer = null;
      }
    }, {
      key: "_calculateDragScrollDelta",
      value: function _calculateDragScrollDelta(event) {
        var scroller = this._scroller;

        if (!scroller) {
          return null;
        }

        var rect = scroller.getBoundingClientRect();
        var x = Math.round(event.clientX - rect.left);
        var y = Math.round(event.clientY - rect.top);
        var deltaX = 0;
        var deltaY = 0;

        if (scroller.clientWidth < scroller.scrollWidth) {
          if (x <= DRAG_SCROLLING_SIZE) {
            deltaX = -DRAG_SCROLLING_VALUE;
          } else if (rect.width - x <= DRAG_SCROLLING_SIZE) {
            deltaX = DRAG_SCROLLING_VALUE;
          }
        }

        if (scroller.clientHeight < scroller.scrollHeight) {
          if (y <= DRAG_SCROLLING_SIZE) {
            deltaY = -DRAG_SCROLLING_VALUE;
          } else if (rect.height - y <= DRAG_SCROLLING_SIZE) {
            deltaY = DRAG_SCROLLING_VALUE;
          }
        }

        if (deltaX === 0 && deltaY === 0) {
          return null;
        }

        return {
          x: deltaX,
          y: deltaY
        };
      }
    }, {
      key: "_startDragScrolling",
      value: function _startDragScrolling(delta) {
        var _this3 = this;

        var scroller = this._scroller;

        if (delta && scroller && this._dragScrollingId < 0) {
          var scrollFunc = function scrollFunc() {
            var oldLeft = scroller.scrollLeft;
            var oldTop = scroller.scrollTop;
            scroller.scrollTop += delta.y;
            scroller.scrollLeft += delta.x;
            _this3._dragScrollingId = window.requestAnimationFrame(scrollFunc);
            _this3._dragScrolling = scroller.scrollLeft !== oldLeft || scroller.scrollTop !== oldTop;
          };

          scrollFunc();
        }
      }
    }, {
      key: "_stopDragScrolling",
      value: function _stopDragScrolling() {
        if (this._dragScrollingId > 0) {
          window.cancelAnimationFrame(this._dragScrollingId);
          this._dragScrollingId = -1;
          this._dragScrolling = false;
        }
      }
    }, {
      key: "_getDraggableElement",
      value: function _getDraggableElement(element) {
        return this._normalizeElement(element, this._options.draggable);
      }
    }, {
      key: "_getDroppableElement",
      value: function _getDroppableElement(element) {
        return this._normalizeElement(element, this._options.droppable);
      }
    }, {
      key: "_createMirrorElement",
      value: function _createMirrorElement(element) {
        var mirror = this._options.mirror;

        if (mirror === false) ; else if (mirror instanceof Function) {
          return mirror(element);
        } else if (element instanceof HTMLElement) {
          var mirrorElement = element.cloneNode(true);
          var rect = element.getBoundingClientRect();
          ElementHelper.setSize(mirrorElement, rect.width, rect.height);
          return mirrorElement;
        }

        return null;
      }
    }, {
      key: "_getScroller",
      value: function _getScroller() {
        var target = this._options.scrollTarget;

        if (target instanceof HTMLElement) {
          return target;
        } else if (typeof target === 'string') {
          return this._document.querySelector(target);
        }

        return null;
      }
    }, {
      key: "_calculateMirrorOffset",
      value: function _calculateMirrorOffset(event) {
        var dragElement = this._dragElement;
        var mirrorElement = this._mirrorElement;
        var anchor = this._options.mirrorAnchor;
        var offset;

        if (Array.isArray(anchor) && anchor.length >= 2) {
          offset = {
            left: mirrorElement.offsetWidth * anchor[0] || 0,
            top: mirrorElement.offsetHeight * anchor[1] || 0
          };
        } else {
          var rect = dragElement.getBoundingClientRect();
          offset = {
            left: event.clientX - rect.left,
            top: event.clientY - rect.top
          };
        }

        return offset;
      }
    }, {
      key: "_moveMirrorElement",
      value: function _moveMirrorElement(event) {
        if (this._mirrorElement && this._mirrorOffset) {
          var style = this._mirrorElement.style;
          var x = event.clientX - this._mirrorOffset.left;
          var y = event.clientY - this._mirrorOffset.top;
          style.webkitTransform = style.transform = 'translate(' + x + 'px,' + y + 'px)';
        }
      }
    }, {
      key: "_findElement",
      value: function _findElement(event) {
        return event.target; //this._document.elementFromPoint(event.clientX, event.clientY);
      }
      /**
       * TODO 캐쉬 작업 필요!!!
       * @param element
       * @param condition
       * @returns {HTMLElement|null}
       * @private
       */

    }, {
      key: "_normalizeElement",
      value: function _normalizeElement(element, condition) {
        if (!element) {
          return null;
        }

        if (condition === true) {
          return element;
        } else if (condition instanceof Function) {
          return condition(element);
        } else if (typeof condition === 'string') {
          if (!this._container.contains(element)) {
            return null;
          }

          var node = element;

          while (node && node !== this._document.body && node !== this._document && node !== this._container) {
            if (matchesFunction.call(node, condition)) {
              return node;
            }

            node = node.parentNode;
          }
        }

        return null;
      }
    }, {
      key: "_dispatchDragEvent",
      value: function _dispatchDragEvent(type, overContainer, trigger, cancelable) {
        //polyfill 'event-target' bug

        /*
        return this.dispatchEvent(new CustomEvent(type, {
            cancelable: !!cancelable,
            detail: {
                container: this._container,
                dragSource: this._dragSource,
                dragElement: this._dragElement,
                overContainer: overContainer,
                trigger: trigger
            }
        }));
        */
        var event = new CustomEvent(type, {
          cancelable: !!cancelable,
          detail: {
            container: this._container,
            dragSource: this._dragSource,
            dragElement: this._dragElement,
            overContainer: overContainer,
            trigger: trigger
          }
        });
        this.dispatchEvent(event);
        return !event.defaultPrevented;
      }
    }, {
      key: "_dispatchMirrorEvent",
      value: function _dispatchMirrorEvent(type, dragElement, mirror, trigger) {
        return this.dispatchEvent(new CustomEvent(type, {
          cancelable: true,
          detail: {
            container: this._container,
            dragSource: this._dragSource,
            dragElement: dragElement,
            mirrorElement: mirror,
            trigger: trigger
          }
        }));
      }
    }, {
      key: "_toggleUserSelect",
      value: function _toggleUserSelect(value) {
        setUserSelect(this._document.body, value ? '' : 'none');
      }
    }, {
      key: "_onContainerMouseDown",
      value: function _onContainerMouseDown(event) {
        var _this4 = this;

        if (event.button !== 0 || event.ctrlKey || event.metaKey) {
          return;
        }

        if (!this._dragReady(event)) {
          return;
        }

        var doc = this._document;
        var downX = event.clientX;
        var downY = event.clientY;
        var downEvent = event;

        var onPreventEvent = function onPreventEvent(e) {
          event.preventDefault();
        };

        var onKeyDown = function onKeyDown(e) {
          var cancelKeyCodes = _this4._options.cancelKeyCodes || [];

          if (cancelKeyCodes.indexOf(e.keyCode) >= 0) {
            _this4.cancel();
          }
        };

        var onMouseMove = function onMouseMove(e) {
          if (_this4._dragging) {
            if (_this4._dragMove(e)) {
              e.stopPropagation();
            }
          } else {
            var deltaX = e.clientX - downX;
            var deltaY = e.clientY - downY;

            if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) > _this4._options.dragLimitLength) {
              if (_this4._dragStart(downEvent)) {
                //드래그 시작.
                doc.addEventListener('keydown', onKeyDown);
              } else {
                _this4.dispatchEvent(new CustomEvent(RELEASE_EVENT));
              }
            }
          }
        };

        var onMouseUp = function onMouseUp(e) {
          if (_this4._dragging) {
            if (_this4._dragEnd(e)) {
              e.stopPropagation();
            }
          }

          _this4.dispatchEvent(new CustomEvent(RELEASE_EVENT));
        };

        var onRelease = function onRelease(e) {
          e.stopPropagation();

          _this4._toggleUserSelect(true);

          doc.removeEventListener('keydown', onKeyDown);
          doc.removeEventListener('mouseup', onMouseUp);
          doc.removeEventListener('mousemove', onMouseMove);
          doc.removeEventListener('dragstart', onPreventEvent);

          _this4.removeEventListener(RELEASE_EVENT, onRelease);
        };

        this._toggleUserSelect(false);

        doc.addEventListener('mousemove', onMouseMove);
        doc.addEventListener('mouseup', onMouseUp);
        doc.addEventListener('dragstart', onPreventEvent);
        this.addEventListener(RELEASE_EVENT, onRelease);
      }
    }, {
      key: "dragging",
      get: function get() {
        return this._dragging;
      }
    }, {
      key: "dragElement",
      get: function get() {
        return this._dragElement;
      }
    }, {
      key: "dragSource",
      get: function get() {
        return this._dragSource;
      }
    }, {
      key: "dragScrolling",
      get: function get() {
        return this._dragScrolling;
      }
    }]);

    return DragManager;
  }(EventTarget$1));

  var Point =
  /*#__PURE__*/
  function () {
    function Point(x, y) {
      _classCallCheck(this, Point);

      this.setValues(x, y);
    }

    _createClass(Point, [{
      key: "setValues",

      /**
       * x, y 좌표를 설정합니다.
       * @param x
       * @param y
       * @returns {Point}
       */
      value: function setValues(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        return this;
      }
    }, {
      key: "subtract",
      value: function subtract(p) {
        return new Point(this.x - p.x, this.y - p.y);
      }
    }, {
      key: "interpolate",
      value: function interpolate(p, f) {
        return new Point(p.x + (this.x - p.x) * f, p.y + (this.y - p.y) * f);
      }
    }, {
      key: "offset",
      value: function offset(dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
      }
      /**
       * 객체의 복사본을 만듭니다.
       * @returns {Point}
       */

    }, {
      key: "clone",
      value: function clone() {
        return new Point(this.x, this.y);
      }
    }, {
      key: "equals",
      value: function equals(point) {
        return point && this.x === point.x && this.y === point.y;
      }
      /**
       * x, y좌표를 문자열로 반환합니다.
       * @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        return '[Point (x=' + this.x + ' y=' + this.y + ')]';
      }
      /**
       * 두점 사이의 거리를 구합니다.
       * @param p1
       * @param p2
       * @returns {number}
       */

    }, {
      key: "interpolate",
      value: function interpolate(p1, p2, f) {
        return p1.interpolate(p2, f);
      }
    }, {
      key: "polar",
      value: function polar(len, angle) {
        return new Point(len * Math.cos(angle), len * Math.sin(angle));
      }
    }, {
      key: "length",
      get: function get() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }], [{
      key: "distance",
      value: function distance(p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
      }
    }]);

    return Point;
  }();

  function clampValue(value, min, max) {
    if (!isNaN(min)) {
      value = Math.max(value, min);
    }

    if (!isNaN(max)) {
      value = Math.min(value, max);
    }

    return value;
  }

  var defaultOption = {
    autoPage: {
      left: true,
      right: true,
      top: true,
      bottom: true
    },
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10
    }
  };

  var ScaleViewer =
  /*#__PURE__*/
  function (_Element) {
    _inherits(ScaleViewer, _Element);

    _createClass(ScaleViewer, null, [{
      key: "__template__",
      value: function __template__() {
        return '<div id="scroller" class="size-viewer-scroller" tabindex="-1">' + '<div id="container" class="size-viewer-container" style="min-width: 100%;min-height: 100%;">' + '<div id="viewport" class="size-viewer-viewport" style="transform-origin:0 0;position: absolute">' + '</div>' + '</div>' + '</div>';
      }
    }]);

    function ScaleViewer(parentElement, options) {
      var _this;

      _classCallCheck(this, ScaleViewer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ScaleViewer).call(this));
      _this.panOnKey = 32;
      _this._scale = 1;
      _this._minScale = 0.2;
      _this._maxScale = 4;
      _this._padding = defaultOption.padding;
      _this._autoPage = defaultOption.autoPage;
      _this._enablePan = true;
      _this._enableZoom = true;
      _this._isPanning = false;
      _this._hiddenScroll = false;
      var scroller = _this._scroller = _this.DOM.scroller;
      var container = _this._container = _this.DOM.container;
      var viewport = _this._viewport = _this.DOM.viewport;
      scroller.addEventListener('scroll', _this._onScroll.bind(_assertThisInitialized(_this)));

      _this.addEventListener('mousewheel', _this._onMouseWheel.bind(_assertThisInitialized(_this)));

      _this.addEventListener('keydown', _this._onKeyDown.bind(_assertThisInitialized(_this)));

      _this.addEventListener('keyup', _this._onKeyUp.bind(_assertThisInitialized(_this))); //크기 변경 체크.


      var detector = _this._sizeDetector = new SizeDetector(_this.root);
      detector.addEventListener('size-change', function (event) {
        _this.dispatchEvent(new CustomEvent(event.type, {
          bubbles: false,
          detail: event.detail
        }));

        _this.invalidate();
      });

      var boundDragHandler = _this._onDragHandler.bind(_assertThisInitialized(_this));

      var dragManager = _this._dragManager = new DragManager(_this.root, {
        draggable: true,
        mirror: false,
        dragLimitLength: 0
      });
      ['drag-start', 'drag-move', 'drag-end'].forEach(function (type) {
        dragManager.addEventListener(type, boundDragHandler);
      });
      return _this;
    }

    _createClass(ScaleViewer, [{
      key: "setContent",

      /**
       *
       * @param content
       */
      value: function setContent(content) {
        if (this._content) {
          this._viewport.removeChild(this._content);
        }

        this._content = content;

        if (this._content) {
          this._viewport.appendChild(this._content);

          this.invalidate();
          this.validateNow();
        }
      }
      /**
       * content 중앙으로 스크롤 이동합니다.
       * @param offsetX
       * @param offsetY
       */

    }, {
      key: "center",
      value: function center(offsetX, offsetY) {
        offsetX = offsetX || 0;
        offsetY = offsetY || 0;
        this.validateNow();
        var scroller = this._scroller;
        this.scrollLeft = offsetX + (scroller.scrollWidth - scroller.clientWidth) / 2;
        this.scrollTop = offsetY + (scroller.scrollHeight - scroller.clientHeight) / 2;
      }
      /**
       * 내부 리소스 삭제
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._sizeDetector.stop();
      }
    }, {
      key: "doLayout",
      value: function doLayout(width, height) {
        this._layoutContent();

        this._layoutContainer();

        this._centerContent();
      }
    }, {
      key: "_internalSetScale",
      value: function _internalSetScale(value) {
        value = clampValue(value, this.minScale, this.maxScale);

        if (this._scale !== value) {
          var oldValue = this._scale;
          this._scale = value;

          this._dispatchChangeEvent('scale', value, oldValue);

          return true;
        }

        return false;
      }
      /**
       *
       * 컨텐츠 배치
       *  @private
       */

    }, {
      key: "_layoutContent",
      value: function _layoutContent() {
        if (!this.content) {
          return;
        }

        var ww = Math.round(this.content.offsetWidth);
        var hh = Math.round(this.content.offsetHeight);
        setSize(this._viewport, ww, hh);
      }
      /**
       * 컨테이너 배치
       * @private
       */

    }, {
      key: "_layoutContainer",
      value: function _layoutContainer() {
        var scroller = this._scroller;
        var container = this._container;
        var viewport = this._viewport;
        var padding = this.padding;
        var autoPage = this.autoPage;
        var pl = autoPage.left ? scroller.clientWidth - padding.left : padding.left;
        var pr = autoPage.right ? scroller.clientWidth - padding.right : padding.right;
        var pt = autoPage.top ? scroller.clientHeight - padding.top : padding.top;
        var pb = autoPage.bottom ? scroller.clientHeight - padding.bottom : padding.bottom;
        var dw = Math.round(viewport.clientWidth * (this.scale - 1));
        var dh = Math.round(viewport.clientHeight * (this.scale - 1));
        var containerWidth = Math.round(viewport.clientWidth + pl + pr + dw);
        var containerHeight = Math.round(viewport.clientHeight + pt + pb + dh);
        setSize(container, containerWidth, containerHeight);
      }
      /**
       * 컨텐츠 가운데 정렬
       * @private
       */

    }, {
      key: "_centerContent",
      value: function _centerContent() {
        var container = this._container;
        var viewport = this._viewport;
        var padding = this.padding;
        var autoPage = this.autoPage;
        var viewportWidth = Math.round(viewport.clientWidth * this.scale);
        var viewportHeight = Math.round(viewport.clientHeight * this.scale);
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;
        var cx = padding.left;

        if (autoPage.left === autoPage.right
        /* || viewportWidth < scroller.clientWidth*/
        ) {
            cx = Math.max(0, (containerWidth - viewportWidth) / 2);
          } else if (autoPage.left) {
          cx = containerWidth - viewportWidth - padding.right;
        }

        var cy = padding.top;

        if (autoPage.top === autoPage.bottom
        /*|| viewportHeight < scroller.clientHeight*/
        ) {
            cy = Math.max(0, (containerHeight - viewportHeight) / 2);
          } else if (autoPage.top) {
          cy = containerHeight - viewportHeight - padding.bottom;
        }

        setPosition(viewport, Math.round(cx), Math.round(cy));
      }
    }, {
      key: "_doZoom",
      value: function _doZoom(newScale, oldScale, ox, oy) {
        setScale(this._viewport, newScale);
        ox = ox / oldScale || 0;
        oy = oy / oldScale || 0;
        this._scroller.scrollLeft += Math.round(ox * (newScale - oldScale));
        this._scroller.scrollTop += Math.round(oy * (newScale - oldScale));
        this.invalidate();
      }
    }, {
      key: "_dispatchChangeEvent",
      value: function _dispatchChangeEvent(property, newValue, oldValue) {
        this.dispatchEvent(new CustomEvent(property + '-change', {
          bubbles: false,
          cancelable: false,
          detail: {
            property: property,
            newValue: newValue,
            oldValue: oldValue
          }
        }));
      }
    }, {
      key: "_validateEvent",
      value: function _validateEvent(event) {
        return ![HTMLInputElement, HTMLTextAreaElement].find(function (clazz) {
          return event.target instanceof clazz;
        });
      }
    }, {
      key: "_onScroll",
      value: function _onScroll(event) {
        this.invalidate();
        this.dispatchEvent(new CustomEvent('scroll-change', {
          bubbles: false,
          cancelable: false,
          detail: {
            scrollTop: this.scrollTop,
            scrollLeft: this.scrollLeft,
            trigger: event
          }
        }));
      }
    }, {
      key: "_onMouseWheel",
      value: function _onMouseWheel(event) {
        if (event.defaultPrevented) {
          return;
        } //옵션으로 설정하게..


        if (event.ctrlKey && this.enableZoom) {
          event.preventDefault(); //스크롤 상하 구하기

          var delta = 0;

          if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
          } else if (event.detail) {
            delta = -event.detail / 3;
          }

          delta = delta / Math.abs(delta);
          var SCALE_GAP = 0.1;
          var oldScale = this.scale;
          var newScale = clampValue(this.scale + delta * SCALE_GAP, this.minScale, this.maxScale);

          if (this._internalSetScale(newScale)) {
            var containerRect = this._viewport.getBoundingClientRect();

            var px = event.clientX - containerRect.left;
            var py = event.clientY - containerRect.top;

            this._doZoom(newScale, oldScale, px, py);
          }
        }
      }
    }, {
      key: "_onDragHandler",
      value: function _onDragHandler(event) {
        if (!this.isPanning) {
          return;
        }

        var detail = event.detail;
        var mouseEvent = detail.trigger;

        switch (event.type) {
          case 'drag-start':
          case 'drag-move':
            var point = new Point(mouseEvent.clientX, mouseEvent.clientY);

            if (this._oldPanningPoint) {
              var delta = point.subtract(this._oldPanningPoint);

              if (delta.length !== 0) {
                this.scrollLeft -= delta.x;
                this.scrollTop -= delta.y;
              }
            }

            this._oldPanningPoint = point;
            break;

          case 'drag-end':
            delete this._oldPanningPoint;
            break;
        }
      }
    }, {
      key: "_onKeyDown",
      value: function _onKeyDown(event) {
        if (!this._validateEvent(event)) {
          return;
        }

        if (this.enablePan && (this.panOnKey === true || event.keyCode === this.panOnKey)) {
          this.root.setAttribute('panning', true);
          this._isPanning = true;
          event.preventDefault();
        }
      }
    }, {
      key: "_onKeyUp",
      value: function _onKeyUp(event) {
        if (!this._validateEvent(event)) {
          return;
        }

        if (this.enablePan && (this.panOnKey === true || event.keyCode === this.panOnKey)) {
          this.root.removeAttribute('panning');
          this._isPanning = false;
          event.preventDefault();
        }
      }
    }, {
      key: "content",
      get: function get() {
        return this._content;
      }
      /**
       * 수평 스크롤
       * @returns {number}
       */

    }, {
      key: "scrollLeft",
      get: function get() {
        return Math.round(this._scroller.scrollLeft);
      },
      set: function set(value) {
        if (this.scrollLeft !== value) {
          this._scroller.scrollLeft = value;
        }
      }
      /**
       * 수직 스크롤
       * @returns {number}
       */

    }, {
      key: "scrollTop",
      get: function get() {
        return Math.round(this._scroller.scrollTop);
      },
      set: function set(value) {
        if (this.scrollTop !== value) {
          this._scroller.scrollTop = value;
        }
      }
      /**
       * 최소 스케일
       * @returns {number}
       */

    }, {
      key: "minScale",
      get: function get() {
        return this._minScale || 0.2;
      },
      set: function set(value) {
        if (this.minScale !== value) {
          this._minScale = value;
        }
      }
      /**
       * 최대 스케일
       * @returns {number}
       */

    }, {
      key: "maxScale",
      get: function get() {
        return this._maxScale || 4;
      },
      set: function set(value) {
        if (this.maxScale !== value) {
          this._maxScale = value;
        }
      }
      /**
       * 컨텐츠 비율을 확대하거나 축소합니다.
       * @returns {number}
       */

    }, {
      key: "scale",
      get: function get() {
        return this._scale;
      },
      set: function set(value) {
        var oldScale = this.scale;

        if (this._internalSetScale(value)) {
          var rect = this._viewport.getBoundingClientRect();

          this._doZoom(value, oldScale, rect.width / 2, rect.height / 2);
        }
      }
      /**
       * 가로/세로 스크롤을 숨깁니다.
       * @returns {boolean}
       */

    }, {
      key: "hiddenScroll",
      get: function get() {
        return this._hiddenScroll;
      },
      set: function set(value) {
        if (this._hiddenScroll !== value) {
          this._hiddenScroll = value;
          this._scroller.style.overflow = value ? 'hidden' : '';
          this.invalidate();
        }
      }
    }, {
      key: "autoPage",
      get: function get() {
        return this._autoPage;
      },
      set: function set(value) {
        if (this.autoPage !== value) {
          this._autoPage = value;
          this.invalidate();
        }
      }
    }, {
      key: "padding",
      get: function get() {
        return this._padding;
      },
      set: function set(value) {
        if (this.padding !== value) {
          this._padding = value;
          this.invalidate();
        }
      }
    }, {
      key: "enablePan",
      get: function get() {
        return this._enablePan;
      },
      set: function set(value) {
        if (this._enablePan !== value) {
          this._enablePan = value;
        }
      }
    }, {
      key: "enableZoom",
      get: function get() {
        return this._enableZoom;
      },
      set: function set(value) {
        if (this._enableZoom !== value) {
          this._enableZoom = value;
        }
      }
    }, {
      key: "isPanning",
      get: function get() {
        return this._isPanning;
      }
    }]);

    return ScaleViewer;
  }(Element);

  function vrix$1(config) {
    if (config) {
      mixin(defaults, config, {
        overwrite: true,
        deep: true,
        copy: false
      });
    }
  }

  mixin(vrix$1, {
    defaults: defaults,
    core: {
      ProgressPromise: ProgressPromise,
      Selector: Selector
    },
    collection: {
      ArrayList: ArrayList,
      HierarchyList: HierarchyList
    },
    net: {
      http: http,
      download: download
    },
    file: {
      browse: browse
    },
    ui: {
      List: List$1,
      Tree: Tree,
      Popup: Popup,
      AutoComplete: AutoComplete,
      Tokenizer: Tokenizer,
      ComboBox: ComboBox,
      ScaleViewer: ScaleViewer,
      PopupManager: PopupManager,
      DragManager: DragManager,
      popup: popup
    },
    util: _objectSpread2({}, utils, {
      paramsTo: paramsTo,
      paramsFrom: paramsFrom
    }),
    dom: {
      build: buildDomElement
    }
  });

  return vrix$1;

}));
//# sourceMappingURL=vrix.js.map
