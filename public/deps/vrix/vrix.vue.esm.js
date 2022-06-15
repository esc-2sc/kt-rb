import Vue from 'vue';
import { asString, parse } from 'date-format';

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

function extend(target) {
  var prototype = target.prototype;

  for (var _len = arguments.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    options[_key - 1] = arguments[_key];
  }

  options.forEach(function (option) {
    Object.getOwnPropertyNames(option).forEach(function (name) {
      Object.defineProperty(prototype, name, Object.getOwnPropertyDescriptor(option, name));
    });
  });
  return target;
}

var ComponentWrapper =
/*#__PURE__*/
function () {
  function ComponentWrapper(comp) {
    _classCallCheck(this, ComponentWrapper);

    this._compoenent = comp;
  }

  _createClass(ComponentWrapper, [{
    key: "component",
    get: function get() {
      return this._compoenent;
    }
  }, {
    key: "element",
    get: function get() {
      return this.component.$el;
    }
  }]);

  return ComponentWrapper;
}();
var ComponentFactory =
/*#__PURE__*/
function () {
  function ComponentFactory(parent, wrapper) {
    _classCallCheck(this, ComponentFactory);

    this.parent = parent;
    this.wrapper = wrapper;
  }

  _createClass(ComponentFactory, [{
    key: "create",
    value: function create(data) {
      var component = new this.wrapper(_objectSpread2({
        parent: this.parent
      }, data));
      component.$mount();
      return component;
    }
  }], [{
    key: "factoryWrapper",
    value: function factoryWrapper(parent, wrapper, extendMethods) {
      var Factory;

      if (extendMethods) {
        Factory = extend(
        /*#__PURE__*/
        function (_ComponentFactory) {
          _inherits(_class, _ComponentFactory);

          function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, parent, wrapper));
          }

          return _class;
        }(ComponentFactory), extendMethods);
      } else {
        Factory = ComponentFactory;
      }

      var factory = new Factory(parent, wrapper);
      return (
        /*#__PURE__*/
        function (_ComponentWrapper) {
          _inherits(VueComponentWrapper, _ComponentWrapper);

          function VueComponentWrapper(data) {
            _classCallCheck(this, VueComponentWrapper);

            return _possibleConstructorReturn(this, _getPrototypeOf(VueComponentWrapper).call(this, factory.create(data)));
          }

          return VueComponentWrapper;
        }(ComponentWrapper)
      );
    }
  }]);

  return ComponentFactory;
}();

var ListEvents = ['selection-changing', 'selection-change', 'item-down', 'item-up', 'item-click', 'item-double-click', 'render-updating', 'render-update', 'size-change', 'caret-change', 'collection-change'];
var ListMethods = ['getItemElementAt', 'getItemElement', 'getVisibleIndices', 'getVisibleElements', 'getElementAll', 'scrollToIndex', 'scrollToItem', 'scrollToTop', 'scrollToBottom', 'getItemStart', 'getItemSize', 'setItemSize', 'invalidate', 'validateNow', 'syncScroll'];
var defaultMethods = {};

function setupMethods(name) {
  defaultMethods[name] = function () {
    if (this.instance) {
      return this.instance[name].apply(this.instance, arguments);
    }

    return null;
  };
}

ListMethods.forEach(function (p) {
  setupMethods(p);
});

function getValue(item, field) {
  if (!item) {
    return null;
  }

  if (!field) {
    return item;
  }

  if (field instanceof Function) {
    return field(item);
  } else if (!item) {
    return '';
  } else if (_typeof(item) !== 'object') {
    return item;
  }

  return vrix.util.getValue(item, field);
}

var Listable = Vue.extend({
  name: 'listable',
  provide: function provide() {
    return {
      owner: this
    };
  },
  props: {
    value: undefined,
    items: {
      type: Array
    },
    scrollTarget: {
      type: [String, HTMLElement]
    },

    /**
     * 행 높이를 설정
     * 기본값 : 40
     */
    rowHeight: {
      type: Number,
      default: 40
    },
    autoHeight: {
      type: Boolean,
      default: false
    },

    /**
     * 항목 리스트의 행 개수를 설정.
     */
    rowCount: {
      type: Number,
      default: -1
    },

    /**
     * 'layout = 'grid' 일때 컬럼 개수
     */
    columnCount: {
      type: Number,
      default: 0
    },
    columnWidth: {
      type: Number,
      default: 0
    },

    /**
     * 각 항목의 label로 표시할 객체 속성 이름
     */
    labelField: {
      type: [String, Function],
      default: 'label'
    },

    /**
     * 각 항목의 value로 표시할 객체 속성 이름
     */
    valueField: {
      type: [String, Function]
    },

    /**
     * 리스트 레이아웃 설정
     * 'vertical', 'horizontal', 'grid', 'flow'
     */
    layout: {
      type: String,
      default: 'vertical'
    },
    horizontalGap: {
      type: Number,
      default: 0
    },
    verticalGap: {
      type: Number,
      default: 0
    },

    /**
     * 각 행 또는 컬럼이 다른 크기 가질 수 있는지 여부
     * true : 항목을 표현한 엘리먼트 크기
     * false : rowHeight 값
     */
    autoSize: {
      type: Boolean,
      default: false
    },

    /**
     * 최소 선택 개수
     * default: 0
     */
    minSelection: {
      type: Number,
      default: 0
    },

    /**
     * 최대 선택 개수
     * default: 1
     */
    maxSelection: {
      type: Number,
      default: 1
    },
    itemFactory: {
      type: Object
    },

    /**
     * 아이템 엘리먼트의 너비를 계산할 때 호출됩니다.
     *
     */
    measureElementWidth: {
      type: Function
    },

    /**
     * 아이템 엘리먼트의 높이를 계산할 때 호출됩니다.
     *
     */
    measureElementHeight: {
      type: Function
    },
    selectOnClick: {
      type: Boolean,
      default: true
    },
    selectOnFocus: {
      type: Boolean,
      default: false
    },
    selectOnKeys: {
      type: Array,
      default: function _default() {
        return [13, 32];
      }
    },
    useCtrlOnSelection: {
      type: Boolean,
      default: false
    },
    selectedValue: null
  },
  data: function data() {
    return {
      instance: null,
      selectedItems: [],
      selectedItem: null,
      selectedIndices: [],
      selectedIndex: -1,
      lockSelect: false,
      deferredFunc: null
    };
  },
  computed: {
    collection: function collection() {
      return this.items && this.instance && this.instance.collection;
    },
    itemStaticClass: function itemStaticClass() {
      return 'layout--' + this.layout;
    },
    itemFactoryWrapper: function itemFactoryWrapper() {
      if (!this.itemFactory) {
        throw new Error("'itemFactory' is null");
      }

      var self = this;
      return ComponentFactory.factoryWrapper(this, this.itemFactory, {
        create: function create(data) {
          var component = ComponentFactory.prototype.create.apply(this, [data]);
          component.$scopedSlots = self.$scopedSlots;

          if (component.$el && data.staticClass) {
            component.$el.classList.add(data.staticClass);
          }

          return component;
        }
      });
    }
  },
  watch: {
    instance: {
      immediate: true,
      handler: function handler(instance) {
        var _this = this;

        if (instance) {
          ListEvents.forEach(function (type) {
            instance.addEventListener(type, _this.onListInstanceEvents);
          });
          var exceptions = ['itemFactory', 'scrollTarget'];

          for (var p in this.$props) {
            if (exceptions.indexOf(p) < 0 && p in instance) {
              instance[p] = this.$props[p];
            }
          }

          this._isInited = true;

          if (this.deferredFunc) {
            this.deferredFunc();
            this.deferredFunc = null;
          }
        }
      }
    },
    value: {
      immediate: true,
      handler: function handler(value, old) {
        var _this2 = this;

        if (value === undefined && old === undefined || this.selectedItem === value) {
          return;
        }

        if (value) {
          this.pendingData = {
            value: value
          };
        }

        this.observeItems().then(function (changed) {
          if (!changed) {
            if (value && !Array.isArray(value)) {
              value = [value];
            }

            _this2.internalSelectItems(value);
          }
        });
      }
    },
    selectedValue: {
      immediate: true,
      handler: function handler(value, old) {
        var _this3 = this;

        if (value === undefined && old === undefined || this.selectedItem && this.itemToValue(this.selectedItem) === value) {
          return;
        }

        if (value != null) {
          this.pendingData = {
            selectedValue: value
          };
        }

        this.observeItems().then(function (changed) {
          if (!changed) {
            _this3.selectItem(_this3.findItem(value));
          }
        });
      }
    },
    items: {
      deep: true,
      handler: function handler(value) {
        this.instance.items = value;
        this.instance.validateNow();
        this.$emit('update:items', value);
      }
    },
    rowHeight: function rowHeight(value) {
      this.instance.rowHeight = value;
    },
    selectedItem: function selectedItem(value) {
      this.selectItem(value);
    },
    selectedItems: function selectedItems(value) {
      this.internalSelectItems(value);
    },
    selectedIndex: function selectedIndex(value) {
      this.internalSelectItems(this.items[value]);
    },
    selectedIndices: function selectedIndices(value) {
      var _this4 = this;

      this.internalSelectItems((value || []).map(function (i) {
        return _this4.items[i];
      }));
    }
  },
  beforeMount: function beforeMount() {
    var _this5 = this;

    var target = this.scrollTarget;

    if (target) {
      //상속된 클래스 'mounted' 실행후 호출하기 위한.
      this.$once('hook:mounted', function () {
        var element = null;

        if (target instanceof HTMLElement) {
          element = target;
        } else if (typeof target === 'string') {
          element = document.querySelector(target);
        }

        if (element) {
          _this5.instance.scrollTarget = element;
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this6 = this;

    if (this.instance) {
      ListEvents.forEach(function (type) {
        _this6.instance.removeEventListener(type, _this6.onListInstanceEvents);
      });
      this.instance.destroy();
    }
  },
  methods: _objectSpread2({}, defaultMethods, {
    /**
     * 지정된 항목에 대해 문자열을 반환합니다.
     * labelField(문자열) 이름이 같은 속성의 값
     * labelField(함수) 함수 반환 값
     * @param item
     * @param field
     * @returns {string}
     */
    itemToLabel: function itemToLabel(item, field) {
      return getValue(item, field || this.labelField);
    },
    itemToValue: function itemToValue(item, field) {
      return getValue(item, field || this.valueField || this.labelField);
    },
    findItem: function findItem(value) {
      var _this7 = this;

      return this.items && this.items.find(function (item) {
        return value === _this7.itemToValue(item);
      });
    },
    contains: function contains(item) {
      if (this.instance && this.instance.collection) {
        return this.instance.collection.contains(item);
      }

      return !!(this.items && this.items.indexOf(item) >= 0);
    },
    selectItem: function selectItem(item) {
      if (this.selectedItem !== item || this.instance && this.instance.selectedItem !== item) {
        this.internalSelectItems(item ? [item] : null, true);
      }
    },
    selectItems: function selectItems(value) {
      return this.internalSelectItems(value, true);
    },
    internalSelectItems: function internalSelectItems(value) {
      var _this8 = this;

      var outsideCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.lockSelect && !outsideCall) {
        return;
      }

      if (!this.instance || !this._isInited) {
        this.deferredFunc = function () {
          _this8.internalSelectItems(value);
        };

        return;
      }

      if (value != null) {
        value = Array.isArray(value) ? value : [value];
      }

      if (!value || this.items && this.contains(value) && !vrix.util.compareArray(this.selectedItems, value)) {
        this.instance.selectedItems = value;
      }

      this.pendingData = null;
    },
    observeItems: function observeItems() {
      var _this9 = this;

      return new Promise(function (resolve) {
        var changed = false;

        var handler = function handler() {
          changed = true;
        };

        _this9.$on('update:items', handler);

        _this9.$nextTick(function () {
          _this9.$off('update:items', handler);

          resolve(changed);
        });
      });
    },

    /**
     * listInstance 이벤트 핸들
     *
     * @param event
     */
    onListInstanceEvents: function onListInstanceEvents(event) {
      var _this10 = this;

      if (event.type === 'selection-change') {
        this.lockSelect = true;
        var list = this.instance;
        this.selectedItems = list.selectedItems;
        this.selectedItem = list.selectedItem;
        this.selectedIndices = list.selectedIndices;
        this.selectedIndex = list.selectedIndex;
        this.$emit('input', this.maxSelection <= 1 ? this.selectedItem : this.selectedItems);
        this.$emit('update:selectedValue', this.itemToValue(this.selectedItem));
        this.$nextTick(function () {
          _this10.lockSelect = false;
        });
      } else if (event.type === 'collection-change') {
        if (event.detail.kind === 'reset') {
          var data = this.pendingData;

          if (data && (data.value || data.selectedValue)) {
            var found = null;

            if (data.value) {
              found = data.value;
            } else if (data.selectedValue != null) {
              found = this.findItem(data.selectedValue);
            }

            this.internalSelectItems(found);
          }
        }
      }

      this.$emit(event.type, event);
    }
  })
});

var ListItemAble = {
  name: 'listitemable',
  inject: {
    owner: {
      default: null
    }
  },
  props: {
    item: null,
    labelField: {
      type: [String, Function]
    },
    valueField: {
      type: [String, Function]
    }
  },
  data: function data() {
    return {
      index: -1,
      state: function state() {
        return {};
      }
    };
  },
  computed: {
    staticClass: function staticClass() {
      return 'vx-list__item';
    },
    itemLabel: function itemLabel() {
      return this.owner.itemToLabel(this.item);
    },
    itemValue: function itemValue() {
      return this.owner.itemToValue(this.item);
    },
    itemAttrs: function itemAttrs() {
      return {
        selected: this.state.selected,
        active: this.state.active
      };
    },
    scopedProps: function scopedProps() {
      return _objectSpread2({}, this.state, {
        item: this.item,
        index: this.index,
        label: this.itemLabel,
        value: this.itemValue
      });
    }
  }
};

var ListItem = Vue.extend({
  name: 'vx-list-item',
  mixins: [ListItemAble],
  methods: {
    genContent: function genContent() {
      return [this.genIcon(), this.genLabel()];
    },
    genLabel: function genLabel() {
      var children = [];

      if (this.$scopedSlots.label) {
        children.push(this.$scopedSlots.label(this.scopedProps));
      } else {
        children.push(this.itemLabel);
      }

      return this.$createElement('div', {
        staticClass: this.staticClass + '__label'
      }, children);
    },
    genIcon: function genIcon() {
      if (!this.$scopedSlots.icon) {
        return;
      }

      var children = [];
      children.push(this.$scopedSlots.icon(this.scopedProps));
      return this.$createElement('div', {
        staticClass: this.staticClass + '__icon'
      }, children);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.staticClass,
      attrs: this.itemAttrs
    }, this.genContent());
  }
});

var Observer = new Vue.observable({}).__ob__.constructor;
var dummyObserver = new Observer({
  DUMMY: 'DUMMY'
});
function unobserve(value) {
  Object.defineProperty(value, '__ob__', {
    value: dummyObserver,
    enumerable: false,
    configurable: true
  });
  return value;
}

var VxList = Listable.extend({
  name: 'vx-list',
  props: {
    itemFactory: {
      type: Function,
      default: ListItem
    }
  },
  data: function data() {
    return {
      needUpdate: false
    };
  },
  watch: {
    needUpdate: function needUpdate(value) {
      if (value) {
        this.invalidate();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var instance = this.instance;

    if (!instance) {
      instance = this.instance = unobserve(vrix.ui.List.create(this.$el, {
        itemFactory: function itemFactory(item, index) {
          var wrapper = new _this.itemFactoryWrapper({
            propsData: {
              item: item,
              labelField: _this.labelField,
              valueField: _this.valueField
            },
            staticClass: _this.itemStaticClass
          });

          if (_this.autoSize) {
            wrapper.component.$once('hook:updated', function (event) {
              _this.updateElementSize(wrapper.element, item, index);
            });
          }

          return wrapper.element;
        },
        renderItemCallback: function renderItemCallback(element, item, index, state) {
          var vm = element.__vue__;
          vm.index = index;
          vm.state = state;
        },
        freeItemCallback: function freeItemCallback(element) {
          var vm = element.__vue__;
          vm.$destroy();
        }
      }));
      instance.addEventListener('render-updating', function (event) {
        if (_this.autoSize) {
          _this.needUpdate = false;
        }
      });
      instance.addEventListener('render-update', function (event) {
        if (_this.autoSize) {
          if (_this.needUpdate) ;
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.instance) {
      this.instance = null;
    }
  },
  methods: {
    updateElementSize: function updateElementSize(element, item, index) {
      var instance = this.instance;

      if (!this.needUpdate && instance.calculateElementWidth(element, item, index) !== instance.getItemSize(index)) {
        this.needUpdate = true;
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-list'
    });
  }
});

var VxTreeItem = ListItem.extend({
  name: 'vx-tree-item',
  props: {
    indent: {
      type: Number,
      default: 0
    }
  },
  computed: {
    staticClass: function staticClass() {
      return 'vx-tree__item';
    },
    itemAttrs: function itemAttrs() {
      return {
        selected: this.state.selected,
        active: this.state.active,
        isOpened: this.state.isOpened
      };
    },
    calculatedLeft: function calculatedLeft() {
      var left = (this.state.level || 0) * this.indent;
      return left + 'px';
    }
  },
  methods: {
    genContent: function genContent() {
      return [this.genToggle(), this.genIcon(), this.genLabel()];
    },
    genToggle: function genToggle() {
      var _this = this;

      var children = [];

      if (this.$scopedSlots.toggle) {
        children.push(this.$scopedSlots.toggle(this.scopedProps));
      } else {
        children.push(this.state.isOpened ? '-' : '+');
      }

      return this.$createElement('div', {
        staticClass: this.staticClass + '__toggle',
        class: {
          'toggle--open': this.state.isOpened
        },
        style: {
          visibility: this.state.hasChildren ? '' : 'hidden'
        },
        on: {
          click: function click(event) {
            event.stopPropagation();

            _this.owner.toggleNode(_this.item);
          }
        }
      }, children);
    }
  },
  render: function render(h) {
    var _class;

    var style = {};

    if (this.indent > 0) {
      style.left = this.calculatedLeft;
    }

    return h('div', {
      staticClass: this.staticClass,
      class: (_class = {}, _defineProperty(_class, "vx-level-".concat(this.state.level), true), _defineProperty(_class, 'vx-leaf', !this.state.hasChildren), _class),
      style: style,
      attrs: this.itemAttrs
    }, this.genContent());
  }
});

var DropIndicator = {
  name: 'tree-drop-indicator',
  inject: {
    owner: {
      default: null
    }
  },
  props: {},
  computed: {},
  methods: {
    genContent: function genContent() {
      return this.$slots.default;
    },
    showDropIndicator: function showDropIndicator(detail) {
      var LINE_HEIGHT = 10;
      var tree = this.owner;
      var collection = tree.collection;
      var dropPosition = detail.dropPosition;
      var indent = tree.indent || 40;
      var dropIndex = dropPosition.dropIndex;
      var dropItem = dropPosition.dropItem;
      var insertParentItem = dropPosition.insertParentItem;
      var insertIndex = dropPosition.insertIndex;
      var level = collection.getNodeLevel(insertParentItem);
      var insertLevel;
      var yy;
      var hh;

      if (dropItem === insertParentItem && (!tree.isOpenNode(dropItem) || tree.hasChildren(dropItem) || insertIndex === 0)) {
        var dropHeight = tree.getItemSize(dropIndex);
        hh = dropHeight - LINE_HEIGHT;
        yy = Math.round(tree.getItemStart(dropIndex) + (dropHeight - hh) / 2);
        insertLevel = level;
      } else {
        var children = tree.getChildren(insertParentItem);
        var index;

        if (children.length <= insertIndex) {
          if (dropIndex === collection.length - 1) {
            index = dropIndex + 1;
          } else {
            index = collection.indexOf(children[children.length - 1]) + 1;
          }
        } else {
          index = collection.indexOf(children[insertIndex]);
        }

        hh = LINE_HEIGHT;
        yy = Math.round(tree.getItemStart(index) - hh / 2);
        insertLevel = level + 1;
      }

      var style = this.$el.style;
      style.top = yy + 'px';
      style.height = hh + 'px';
      style.right = 0 + 'px';
      style.left = Math.max(0, insertLevel * indent) + 'px';
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-indicator'
    }, this.genContent());
  }
};

var DropIndicator$1 = {
  name: 'list-drop-indicator',
  inject: {
    owner: {
      default: null
    }
  },
  props: {},
  methods: {
    genContent: function genContent() {
      return this.$slots.default;
    },
    showDropIndicator: function showDropIndicator(detail) {
      var LINE_HEIGHT = 10;
      var tree = this.owner;
      var collection = tree.collection;
      var dropPosition = detail.dropPosition;
      var indent = tree.indent || 40;
      var dropIndex = dropPosition.dropIndex;
      var dropItem = dropPosition.dropItem;
      var insertParentItem = dropPosition.insertParentItem;
      var insertIndex = dropPosition.insertIndex;
      var level = collection.getNodeLevel(insertParentItem);
      var insertLevel;
      var yy;
      var hh;

      if (dropItem === insertParentItem && (!tree.isOpenNode(dropItem) || tree.hasChildren(dropItem) || insertIndex === 0)) {
        var dropHeight = tree.getItemSize(dropIndex);
        hh = dropHeight - LINE_HEIGHT;
        yy = Math.round(tree.getItemStart(dropIndex) + (dropHeight - hh) / 2);
        insertLevel = level;
      } else {
        var children = tree.getChildren(insertParentItem);
        var index;

        if (children.length <= insertIndex) {
          if (dropIndex === collection.length - 1) {
            index = dropIndex + 1;
          } else {
            index = collection.indexOf(children[children.length - 1]) + 1;
          }
        } else {
          index = collection.indexOf(children[insertIndex]);
        }

        hh = LINE_HEIGHT;
        yy = Math.round(tree.getItemStart(index) - hh / 2);
        insertLevel = level + 1;
      }

      var style = this.$el.style;
      style.top = yy + 'px';
      style.height = hh + 'px';
      style.right = 0 + 'px';
      style.left = Math.max(0, insertLevel * indent) + 'px';
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-indicator'
    }, this.genContent());
  }
};

var DRAG_EVENTS = ['drag-ready', 'drag-start', 'drag-move', 'drag-over', 'drag-out', 'drag-enter', 'drag-leave', 'drag-end', 'drop', 'drag-cancel', 'drag-mirror-create', 'drag-mirror-remove'];
var ListDraggable = {
  name: 'list-draggable',
  props: {
    draggable: {
      type: Boolean,
      default: false
    },
    droppable: {
      type: Boolean,
      default: false
    },
    draggableSelector: {
      type: [String, Function],
      default: '.vx-list__item'
    },
    droppableSelector: {
      type: [String, Function],
      default: '.vx-list__item'
    },
    dropIndicator: {
      type: Object,
      default: function _default() {
        return DropIndicator$1;
      }
    }
  },
  data: function data() {
    return {
      dragManager: null,
      dragging: false,
      dragEntering: false
    };
  },
  computed: {},
  watch: {
    draggable: {
      immediate: true,
      handler: function handler(value, old) {
        var _this = this;

        if (value) {
          this.$nextTick(function () {
            _this.dragManager = unobserve(new vrix.ui.DragManager(_this.$el, {
              scrollTarget: _this.$el,
              draggable: _this.draggableSelector,
              droppable: _this.droppableSelector,
              dragSource: function dragSource(element, event) {
                return element.__vue__.item;
              }
            }));
          });
        } else {
          this.dragManager = null;
        }
      }
    },
    dragManager: function dragManager(manager, old) {
      var _this2 = this;

      if (old) {
        old.destroy();
        DRAG_EVENTS.forEach(function (type) {
          old.removeEventListener(type, _this2.onDragManagerEvent);
        });
      }

      if (manager) {
        //리스너 등록.
        DRAG_EVENTS.forEach(function (type) {
          manager.addEventListener(type, _this2.onDragManagerEvent);
        });
      }
    }
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {},
  methods: {
    genIndicator: function genIndicator() {
      if (!this.dragging || !this.dragEntering) {
        return null;
      }

      var children = [];

      if (this.$scopedSlots.dropIndicator) {
        children.push(this.$scopedSlots.dropIndicator({
          item: this.dragManager.dragSource
        }));
      }

      return this.$createElement(this.dropIndicator, {
        staticClass: this.$options.name + '__indicator',
        ref: 'indicator'
      }, children);
    },

    /**
     * 드랍위치 정보를 계산합니다.
     * @param detail
     * @returns {{dragIndex: Number, dragItem: *, dropIndex: Number, dropItem: *, insertIndex: Number}}
     */
    calculateDropPosition: function calculateDropPosition(detail) {},

    /**
     * 드랍된 아이템을 적용합니다.
     */
    applyDroppedItem: function applyDroppedItem(detail) {},

    /**
     * 드랍가능한 영역인지 확인합니다.
     * @returns {Boolean}
     */
    validDropPosition: function validDropPosition(dropPosition) {
      return true;
    },
    validDragEnter: function validDragEnter(dropPosition, old) {
      if (dropPosition && old) {
        for (var p in dropPosition) {
          if (dropPosition[p] != old[p]) {
            return false;
          }
        }

        return true;
      }

      return false;
    },
    showDropIndicator: function showDropIndicator(detail) {
      var indicator = this.$refs.indicator;

      if (indicator) {
        indicator.showDropIndicator(detail);
      }
    },
    hideDropIndicator: function hideDropIndicator(destroy) {},
    onDragReady: function onDragReady(event) {},

    /**
     * 드래그 시작 핸들러
     * @param event
     */
    onDragStart: function onDragStart(event) {
      if (!event.defaultPrevented) {
        this.dragging = true;
      }
    },

    /**
     * 드래그 오버 핸들러
     * @param event
     */
    onDragOver: function onDragOver(event) {
      var detail = event.detail;
      var dropPosition = this.calculateDropPosition(detail);
      detail.dropPosition = dropPosition;

      if (!this.dragManager.dragScrolling && dropPosition && this.validDropPosition(dropPosition) && !event.defaultPrevented) {
        if (!this.validDragEnter(dropPosition, this._pendingDropPosition)) {
          this.dragManager.cancelDragEnter();
        }

        this._pendingDropPosition = dropPosition;
        event.preventDefault();
      } else {
        this._pendingDropPosition = null;
      }
    },
    onDragOut: function onDragOut(event) {
      event.detail.dropPosition = this._pendingDropPosition; //this._dispatchItemDragEvent(event);

      this._pendingDropPosition = null;
    },
    onDragEnter: function onDragEnter(event) {
      var detail = event.detail;
      detail.dropPosition = this._pendingDropPosition; //TODO 소스 정리 필요!!!

      this.$emit("item-".concat(event.type), event);

      if (event.defaultPrevented) {
        return;
      }

      this.dragEntering = true;
      this.showDropIndicator(detail);
    },
    onDragLeave: function onDragLeave(event) {
      event.detail.dropPosition = this._pendingDropPosition;
      this.dragEntering = false;
      this.hideDropIndicator();
      this._pendingDropPosition = null;
    },
    onDragEnd: function onDragEnd(event) {
      event.detail.dropPosition = this._pendingDropPosition;
      this.dragging = false;
      this.dragEntering = false;
      this.hideDropIndicator(true);
      this._pendingDropPosition = null;
    },
    onDragCancel: function onDragCancel(event) {
      event.detail.dropPosition = this._pendingDropPosition;
      this.dragging = false;
      this.dragEntering = false;
      this.hideDropIndicator(true);
      this._pendingDropPosition = null;
    },
    onDrop: function onDrop(event) {
      if (this.droppable) {
        var detail = event.detail;
        detail.dropPosition = this._pendingDropPosition; //TODO 소스 정리 필요!!!

        this.$emit("item-".concat(event.type), event);

        if (!event.defaultPrevented) {
          this.applyDroppedItem(detail);
        }
      }
    },
    onDragMirrorCreate: function onDragMirrorCreate(event) {},
    onDragMirrorRemove: function onDragMirrorRemove(e) {},
    onDragManagerEvent: function onDragManagerEvent(event) {
      if (event.cancelable && event.type !== 'drag-enter' && event.type !== 'drop') {
        this.$emit("item-".concat(event.type), event);
      } //TODO 소스 줄이기!!!


      switch (event.type) {
        case 'drag-ready':
          this.onDragReady(event);
          break;

        case 'drag-start':
          this.onDragStart(event);
          break;

        case 'drag-over':
          this.onDragOver(event);
          break;

        case 'drag-out':
          this.onDragOut(event);
          break;

        case 'drag-enter':
          this.onDragEnter(event);
          break;

        case 'drag-leave':
          this.onDragLeave(event);
          break;

        case 'drag-end':
          this.onDragEnd(event);
          break;

        case 'drop':
          this.onDrop(event);
          break;

        case 'drag-cancel':
          this.onDragCancel(event);
          break;

        case 'drag-mirror-create':
          this.onDragMirrorCreate(event);
          break;

        case 'drag-mirror-remove':
          this.onDragMirrorRemove(event);
          break;
      }

      if (!event.cancelable) {
        this.$emit("item-".concat(event.type), event);
      }
    }
  }
};

var TreeDraggable = {
  name: 'tree-draggable',
  mixins: [ListDraggable],
  props: {
    draggableSelector: {
      type: [String, Function],
      default: '.vx-tree__item'
    },
    droppableSelector: {
      type: [String, Function],
      default: '.vx-tree__item'
    },
    dropIndicator: {
      type: Object,
      default: function _default() {
        return DropIndicator;
      }
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted: function mounted() {},
  destroyed: function destroyed() {},
  methods: {
    /**
     * 드랍위치 정보를 계산합니다.
     * @param detail
     * @returns {{dragIndex: Number, dragItem: *, dropIndex: Number, dropItem: *, insertIndex: Number}}
     */
    calculateDropPosition: function calculateDropPosition(detail) {
      var GAP_RATIO = 0.30;
      var LAST_RATIO = 0.10;
      var event = detail.trigger;
      var dragItem = detail.dragSource;
      var dragIndex = this.collection.indexOf(dragItem);
      var overIndex = this.instance.mouseEventToIndex(event);

      if (overIndex < 0) {
        return null;
      }

      var overElement = detail.overContainer;
      var overItem = this.collection.get(overIndex);
      var overRect = overElement.getBoundingClientRect();
      var overY = Math.round(event.clientY - overRect.top);
      var overHeight = overRect.height;
      var topRatio = overY / overHeight;
      var bottomRatio = 1 - topRatio;
      var insertParentItem = this.getParentNode(overItem);
      var insertChildren = this.getChildren(insertParentItem);
      var insertIndex = insertChildren.indexOf(overItem);

      if (topRatio < GAP_RATIO) ; else if (bottomRatio < GAP_RATIO) {
        if (this.isOpenNode(overItem) && this.hasChildren(overItem)) {
          insertParentItem = overItem;
          insertIndex = 0;
        } else {
          //마지막 인덱스일때.
          if (bottomRatio < LAST_RATIO && insertParentItem && this.collection.length - 1 === overIndex) {
            insertParentItem = null;
            insertChildren = this.getChildren(insertParentItem) || [];
            insertIndex = insertChildren.length;
          } else {
            insertIndex = insertIndex + 1;
          }
        }
      } else {
        insertParentItem = overItem;
        insertChildren = this.getChildren(insertParentItem) || [];
        insertIndex = insertChildren.length;
      }

      return {
        dragIndex: dragIndex,
        dragItem: dragItem,
        dropIndex: overIndex,
        dropItem: overItem,
        insertParentItem: insertParentItem,
        insertIndex: insertIndex
      };
    },

    /**
     * 드랍된 아이템을 적용합니다.
     */
    applyDroppedItem: function applyDroppedItem(detail) {
      var collection = this.collection;
      var dropPosition = detail.dropPosition;
      var dragItem = dropPosition.dragItem;
      var dragParentItem = collection.getParentNode(dragItem);
      var dragChildIndex = collection.getNodeIndex(dragItem);
      var insertParentItem = dropPosition.insertParentItem;
      var insertChildIndex = dropPosition.insertIndex; //같은 부모

      if (dragParentItem === insertParentItem && dragChildIndex < insertChildIndex) {
        insertChildIndex = Math.max(insertChildIndex - 1, 0);
      }

      this.removeNode(dragParentItem, dragItem);
      this.addNodeAt(insertParentItem, dragItem, insertChildIndex);
    },

    /**
     * 드랍가능한 영역인지 확인합니다.
     * @returns {Boolean}
     */
    validDropPosition: function validDropPosition(dropPosition) {
      var dragNode = dropPosition.dragItem;
      var dropNode = dropPosition.dropItem;
      var dropParentNode = dropPosition.insertParentItem; //부모의 노드의 상대 인덱스

      var insertIndex = dropPosition.insertIndex; //1. 드래그 위치와 드랍위치가 같을 때
      //2. 드랍위치가 자식들일 때.

      var node = dropNode;

      while (node) {
        if (node === dragNode) {
          return false;
        }

        node = this.getParentNode(node);
      } //3. 같은 부모이면서 드랍될 인덱스가 현재와 같을 때


      if (this.getParentNode(dragNode) === dropParentNode) {
        var children = this.getChildren(dropParentNode);
        var delta = insertIndex - children.indexOf(dragNode);

        if (delta >= 0 && delta <= 1) {
          return false;
        }
      }

      return true;
    },

    /**
     * 드래그 오버 핸들러
     * @param event
     */
    onDragOver: function onDragOver(event) {
      ListDraggable.methods.onDragOver.apply(this, arguments);
      var dropItem = event.detail.dropPosition && event.detail.dropPosition.dropItem;

      if (this._pendingOpenId) {
        clearTimeout(this._pendingOpenId);
        this._pendingOpenId = null;
      }

      var DELAY_OPEN_TIME = 600;

      if (!this.isOpenNode(dropItem) && this.hasChildren(dropItem)) {
        this._pendingOpenId = setTimeout(function () {
          this.openNode(dropItem);
          this.validateNow();
        }.bind(this), DELAY_OPEN_TIME);
      }
    }
  }
};

var NODE_EVENTS = ['node-add', 'node-remove', 'node-open', 'node-opening', 'node-close', 'node-closing'];
var VxTree = Listable.extend({
  name: 'vx-tree',
  mixins: [TreeDraggable],
  props: {
    indent: {
      type: Number,
      default: 0
    },
    childrenField: {
      type: String,
      default: 'children'
    },
    itemFactory: {
      type: Function,
      default: VxTreeItem
    },

    /**
     * 'items' 설정 시 자동으로 지정된 레벨까지 노드를 확장시킵니다.
     */
    autoExpandLevel: {
      type: Number,
      default: 0
    }
  },
  mounted: function mounted() {
    var _this = this;

    var instance = this.instance;

    if (!instance) {
      instance = this.instance = unobserve(vrix.ui.Tree.create(this.$el, {
        itemFactory: function itemFactory(item, index) {
          var wrapper = new _this.itemFactoryWrapper({
            propsData: {
              indent: _this.indent,
              item: item,
              labelField: _this.labelField,
              valueField: _this.valueField
            },
            staticClass: _this.itemStaticClass
          });
          return wrapper.element;
        },
        renderItemCallback: function renderItemCallback(element, item, index, state) {
          var vm = element.__vue__;
          vm.index = index;
          vm.state = state;
        },
        freeItemCallback: function freeItemCallback(element) {
          var vm = element.__vue__;
          vm.$destroy();
        }
      }));
      NODE_EVENTS.forEach(function (name) {
        instance.addEventListener(name, function (event) {
          _this.$emit(event.type, event);
        });
      });
    }
  },
  destroyed: function destroyed() {},
  methods: {
    findValue: function findValue(value) {
      var _this2 = this;

      return this.findOne(function (node) {
        return value === _this2.itemToValue(node);
      });
    },

    /**
     * 지정된 노드의 부모 노드를 반환합니다.
     */
    getParentNode: function getParentNode(node) {
      return this.instance && this.instance.getParentNode(node);
    },

    /**
     * 지정된 노드의 자식노드들을 반환합니다.
     * @param node 부모 노드입니다.
     */
    getChildren: function getChildren(node) {
      return this.instance && this.instance.getChildren(node);
    },
    getDisplayableChildren: function getDisplayableChildren(node) {
      return this.instance && this.instance.getDisplayableChildren(node);
    },

    /**
     * 해당 노드에 자식이 있는지 여부입니다.
     */
    hasChildren: function hasChildren(node) {
      return this.instance && this.instance.hasChildren(node);
    },

    /**
     * 부모 노드에 자식 노드를 추가합니다.
     * 부모 노드가 null이면 최상위 목록에 추가합니다.
     * @param parent 부모 노드
     * @param node 추가할 자식 노드
     *
     */
    addNode: function addNode(parent, node) {
      return this.instance && this.instance.addNode(parent, node);
    },

    /**
     * 노드의 지정된 인덱스 위치에 자식 노드를 추가합니다.
     * 부모 노드가 null이면 최상위 목록에 추가합니다.
     * @param parent 부모 노드.
     * @param node 추가할 자식 노드.
     * @param index 자식 노드 삽입 위치의 인덱스.
     */
    addNodeAt: function addNodeAt(parent, node, index) {
      return this.instance && this.instance.addNodeAt(parent, node, index);
    },

    /**
     * 부모 노드에 자식 노드를 추가합니다.
     * 부모 노드가 null이면 최상위 목록에 추가합니다.
     * @param parent 부모 노드
     * @param nodes 추가할 자식 노드 목록
     *
     */
    addNodes: function addNodes(parent, nodes) {
      return this.instance && this.instance.addNodes(parent, nodes);
    },

    /**
     * 노드의 지정된 인덱스 위치에 자식 노드목록을 추가합니다.
     * 부모 노드가 null이면 최상위 목록에 추가합니다.
     * @param parent 부모 노드.
     * @param nodes 추가할 자식 노드 목록
     * @param index 자식 노드 삽입 위치의 인덱스.
     */
    addNodesAt: function addNodesAt(parent, nodes, index) {
      return this.instance && this.instance.addNodesAt(parent, nodes, index);
    },

    /**
     * 부모 노드에서 자식 노드를 삭제합니다.
     * @param parent 부모 노드입니다.
     * @param node 삭제할 자식 노드 입니다.
     */
    removeNode: function removeNode(parent, node) {
      return this.instance && this.instance.removeNode(parent, node);
    },

    /**
     * 해당 node가 있는지 확인합니다.
     * @param node
     * @return 있으면 true,
     */
    contains: function contains(node) {
      return this.instance && this.instance.contains(node);
    },

    /**
     *    해당 노드가 확장되어 있는지 여부입니다.
     */
    isOpenNode: function isOpenNode(node) {
      return this.instance && this.instance.isOpenNode(node);
    },

    /**
     * 해당 노느가 출력된 노드인지 확인합니다.
     * @param node
     * @return
     */
    isDisplayableNode: function isDisplayableNode(node) {
      return this.instance && this.instance.isDisplayableNode(node);
    },

    /**
     * 지정된 노드를 확장합니다.
     */
    openNode: function openNode(node) {
      return this.instance && this.instance.openNode(node);
    },

    /**
     * 지정된 노드를 축소합니다.
     */
    closeNode: function closeNode(node) {
      return this.instance && this.instance.closeNode(node);
    },

    /**
     * 노드 배열을 확장합니다.
     * @param nodes
     */
    openNodes: function openNodes(nodes) {
      return this.instance && this.instance.openNodes(nodes);
    },

    /**
     * 출력된 노드 목록을 반환합니다.
     * @returns {Array}
     */
    getDisplayableNodes: function getDisplayableNodes() {
      return this.instance && this.instance.getDisplayableNodes();
    },

    /**
     * 확장되어있는 노드목록을 반환합니다.
     * @returns {Array},
     */
    getOpenedNodes: function getOpenedNodes() {
      return this.instance && this.instance.getOpenedNodes();
    },

    /**
     * 지정된 노드의 레벨을 반환합니다.
     */
    getNodeLevel: function getNodeLevel(node) {
      return this.instance && this.instance.getNodeLevel(node);
    },

    /**
     * 전체 노드를 탐색합니다.
     * 지정된 함수(callBack)에 대해 true를 반환하는 모든 항목이 포함된 새 배열을 만듭니다
     * @param callback  function callback(node, parent, children)
     * @param prefetchNode 시작 기준 노드입니다. 지정되지 않으면 루트노드를 기준으로 합니다.
     * @param postOrder true 이면 후위탐색, false 이면 전위탐색
     * @return true를 반환하는 항목의 배열입니다.
     */
    find: function find(callback, prefetchNode, postOrder) {
      return this.instance && this.instance.find(callback, prefetchNode, postOrder);
    },

    /**
     * 전체 노드를 탐색합니다.
     * 지정된 함수(callBack)에 대해 처음으로 true를 반환하는 항목을 반환하고 탐색을 중지합니다.
     * @param callback  function callback(node, parent, children)
     * @param prefetchNode 시작 기준 노드입니다. 지정되지 않으면 루트노드를 기준으로 합니다.
     * @param postOrder true 이면 후위탐색, false 이면 전위탐색
     * @return 처음으로 true를 반환하는 항목입니다.
     */
    findOne: function findOne(callback, prefetchNode, postOrder) {
      return this.instance && this.instance.findOne(callback, prefetchNode, postOrder);
    },

    /**
     * 전체 노드를 확장합니다.
     */
    expandAll: function expandAll() {
      this.instance && this.instance.expandAll();
    },

    /**
     * 전체 노드를 축소합니다.
     */
    collapseAll: function collapseAll() {
      this.instance && this.instance.collapseAll();
    },

    /**
     * 지정된 노드가 확장되어 있으면 축소하고 축소되어 있으면 확장합니다.
     */
    toggleNode: function toggleNode(node) {
      this.instance && this.instance.toggleNode(node);
    }
  },
  render: function render(h) {
    var children = [this.genIndicator()];
    return h('div', {
      staticClass: 'vx-tree',
      class: _defineProperty({}, 'vx-dragging', this.dragging)
    }, children);
  }
});

var VxPopup = {
  name: 'vx-popup',
  provide: function provide() {
    return {
      vxPopup: this
    };
  },
  model: {
    prop: 'isOpened',
    event: 'update:isOpened'
  },
  props: {
    lazyContent: {
      type: Boolean,
      default: true
    },
    overlap: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    },

    /**
     * 팝업을 배치하는데 기준이 되는 엘리먼트.
     * 기본값: 최상위 노드(body)
     */
    positionTarget: {
      type: [HTMLElement, String],
      default: null
    },

    /**
     * 수평 정렬 방향
     * 가능한 값은 'left', 'right', 'auto'
     * 기본값 : 'left'
     */
    horizontalAlign: {
      type: String
    },

    /**
     * 수평 정렬 방향
     * 가능한 값은 'top', 'bottom', 'auto'
     * 기본값 : 'top'
     */
    verticalAlign: {
      type: String
    },

    /**
     * 수평정렬 된 위치에 추가 되는 값
     */
    horizontalOffset: {
      type: Number,
      default: 0
    },

    /**
     * 수직정렬 된 위치에 추가 되는 값
     */
    verticalOffset: {
      type: Number,
      default: 0
    },

    /**
     *  여러개의 팝업중에 가장 최상위로 위치
     */
    alwaysOnTop: {
      type: Boolean,
      default: false
    },

    /**
     *  여러개의 팝업중에 상위위치 우선 순위(값이 클수록 상위)
     */
    priority: {
      type: Number,
      default: 0
    },
    closeEvents: {
      type: Array,
      default: function _default() {
        return ['close'];
      }
    },

    /**
     * 컨텐츠 엘리먼트 클래스 지정
     * 공백 구분으로 여러 클래스 지정가능('classA classB classC...')
     */
    contentClass: {
      type: String
    },
    autoLayout: {
      type: Boolean,
      default: false
    },

    /**
     * 팝업 닫기 대기시간.
     */
    closeDelay: {
      type: Number,
      default: 0
    },

    /**
     * 팝업이 닫힐때 팝업 인스턴스 캐쉬 삭제
     *
     */
    destroyOnClose: {
      type: Boolean,
      default: false
    },

    /**
     * 팝업 컨텐츠영역 외 클릭시 팝업 닫기 여부
     */
    closeOnOutsideClick: {
      type: Boolean,
      default: false
    },

    /**
     * 팝업 컨텐츠영역 외 마우스 다운시 팝업 닫기 여부
     */
    closeOnOutsideDown: {
      type: Boolean,
      default: false
    },

    /**
     * 'resize' 이벤트 발생시 팝업 닫기 여부.
     */
    closeOnResize: {
      type: Boolean,
      default: false
    },

    /**
     * 팝업 컨텐츠 영역외 다운, 클릭시 닫기 예외 영역
     */
    exceptionOutside: {
      type: [Array, Function]
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    active: {
      type: HTMLElement
    }
  },
  data: function data() {
    return {
      needContent: false
    };
  },
  computed: {
    popupInstance: function popupInstance() {
      this._instance = this._instance || this.createPopupInstance();
      return this._instance;
    },
    positionTargetInstance: function positionTargetInstance() {
      var target = this.positionTarget;

      if (!target) {
        return null;
      }

      var found;

      if (target instanceof HTMLElement) {
        found = target;
      } else if (typeof target === 'string') {
        if (this.$vnode) {
          found = this.$vnode.context.$el.querySelector(target);
        }

        if (!found) {
          found = document.querySelector(target);
        }
      }

      if (!found) {
        throw new Error("'positionTarget' \"".concat(target, "\" not found."));
      }

      return found;
    }
  },
  watch: {
    isOpened: function isOpened(value) {
      if (value) {
        this.open();
      } else {
        this.close();
      }
    }
  },
  destroyed: function destroyed() {
    this.deactivateContent(this.getContent());
    this.popupInstance.destroy();
  },
  methods: {
    createPopupInstance: function createPopupInstance() {
      var _this = this;

      var options = _objectSpread2({}, this.$props, {
        contentFactory: function contentFactory(data, options) {
          return new vrix.core.ProgressPromise(function (resolve, reject, progress) {
            if (_this.lazyContent) {
              if (_this.needContent) {
                resolve(_this.getContent());
              } else {
                _this.$once('hook:updated', function () {
                  var child = this.$el.firstElementChild;

                  if (typeof this.contentClass === 'string') {
                    this.contentClass.split(' ').filter(function (name) {
                      return !!name;
                    }).forEach(function (name) {
                      return child.classList.add(name);
                    });
                  }

                  resolve(child);
                });
              }

              _this.needContent = true;
            } else {
              resolve(_this.$el.firstElementChild);
            }
          });
        },
        contentDestroy: function contentDestroy(content) {
          if (_this.destroyOnClose) {
            _this.needContent = false;
          }
        }
      });

      return unobserve(new vrix.ui.Popup(options));
    },

    /**
     * 강제로 컨텐츠를 생성합니다.
     * @returns {Promise}
     */
    forceBuildContent: function forceBuildContent() {
      return this.popupInstance.forceBuildContent(this);
    },

    /**
     * 팝업 컨텐츠 엘리먼트를 반환합니다.
     * @returns {HTMLElement}
     */
    getContent: function getContent() {
      return this.popupInstance && this.popupInstance.content;
    },

    /**
     *
     * @param options
     * @returns {vrix.ui.Popup}
     */
    open: function open(options) {
      var _this2 = this;

      options = _objectSpread2({
        active: this.active
      }, options);

      if (this.positionTargetInstance) {
        options.positionTarget = this.positionTargetInstance;

        if (!this.verticalAlign) {
          options.verticalAlign = 'top';
        }

        if (!this.horizontalAlign) {
          options.verticalAlign = 'left';
        }
      }

      return this.popupInstance.open(this, options).opening(function () {
        _this2.$emit('opening');
      }).opened(function () {
        _this2.activateContent(_this2.getContent());

        _this2.$emit('update:isOpened', true);

        _this2.$emit('open');
      }).closed(function () {
        _this2.deactivateContent(_this2.getContent());

        _this2.$emit('update:isOpened', false);

        _this2.$emit('close');
      });
    },

    /**
     *
     * @param params
     * @returns {vrix.ui.Popup}
     */
    close: function close(params) {
      return this.popupInstance.close(params);
    },

    /**
     * @param params
     * @returns {vrix.ui.Popup}
     */
    cancel: function cancel(params) {
      return this.popupInstance.cancel(params);
    },
    activateContent: function activateContent(content) {
      var _this3 = this;

      var instance = content && content.__vue__;

      if (instance) {
        var funcs = instance.$options.activated;

        if (funcs) {
          funcs.forEach(function (func) {
            return func.apply(instance);
          });
        }

        this.closeEvents.forEach(function (type) {
          instance.$on(type, _this3.onClosePopup);
        });
      }
    },
    deactivateContent: function deactivateContent(content) {
      var _this4 = this;

      var instance = content && content.__vue__;

      if (instance) {
        var funcs = instance.$options.deactivated;

        if (funcs) {
          funcs.forEach(function (func) {
            return func.apply(instance);
          });
        }

        this.closeEvents.forEach(function (type) {
          instance.$off(type, _this4.onClosePopup);
        });
      }
    },
    onClosePopup: function onClosePopup(event) {
      this.close(event);
    }
  },
  render: function render(h) {
    return h('template', {
      style: {
        //ie11 template issue!!!
        display: 'none'
      }
    }, !this.lazyContent || this.needContent ? this.$slots.default : []);
  }
};

var Dropdownable = {
  name: 'dropdownable',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: Number
    },
    minWidth: {
      type: Number
    },

    /**
     * 아이템 선택 후 팝업 닫기 여부
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },

    /**
     * 팝업 컨텐츠영역 외 클릭시 팝업 닫기 여부
     */
    closeOnOutsideClick: {
      type: Boolean,
      default: false
    },

    /**
     * 팝업 컨텐츠영역 외 마우스 다운시 팝업 닫기 여부
     */
    closeOnOutsideDown: {
      type: Boolean,
      default: true
    },

    /**
     * 팝업 컨텐츠 클래스
     *
     */
    contentClass: {
      type: String
    }
  },
  data: function data() {
    return {
      isOpened: false,
      isOpening: false,
      selectedItems: null
    };
  },
  computed: {
    prefixClassName: function prefixClassName() {
      return this.$options.name;
    },

    /**
     * 선택된 아이템이 있는지 여부입니다.
     * @returns {boolean}
     */
    hasSelections: function hasSelections() {
      return !!(this.selectedItems && this.selectedItems.length > 0);
    },
    popupContentClass: function popupContentClass() {
      var name = (this.$attrs.name || '').trim();
      var contentClass = (this.contentClass || '').trim();
      return name + (name ? ' ' : '') + contentClass;
    }
  },
  watch: {
    isOpened: function isOpened(value) {
      var _this = this;

      if (value) {
        this.isOpening = true;
        this.$refs.dropdown.open({
          active: this.$el
        }).opened(function (content) {
          var found = content && content.querySelector('[tabindex]');

          if (found) {
            // use 'setActive' in IE/Edge so container does not scroll...
            if (found.setActive) {
              found.setActive(); // IE/Edge
            } else {
              found.focus(); // All other browsers
            }
          }

          _this.isOpened = true;

          _this.$nextTick(function () {
            _this.isOpening = false;
          });
        }).closed(function (result) {
          _this.isOpened = false;
          _this.isOpening = false;
        });
      } else {
        this.$refs.dropdown.close();
      }

      this.$emit('update:isOpened', this.isOpened);
    },
    selectedItems: function selectedItems(value) {
      if (this.closeOnSelect && this.isOpened && !this.isOpening) {
        this.$nextTick(this.close);
      }
    }
  },
  methods: {
    calculatedMinWidth: function calculatedMinWidth() {
      if (this.isOpened) ;

      var minWidth = this.minWidth;

      if (isNaN(minWidth) && this.$el) {
        minWidth = this.$el.offsetWidth;
      }

      if (isNaN(this.maxWidth)) {
        return minWidth;
      }

      return Math.min(this.maxWidth, minWidth);
    },
    open: function open() {
      if (!this.isOpened) {
        this.isOpened = true;
      }
    },
    close: function close() {
      if (this.isOpened) {
        this.isOpened = false;
      }
    },
    itemToLabel: function itemToLabel(item) {
      return item;
    },
    itemToValue: function itemToValue(item) {
      return item;
    },
    genContent: function genContent() {
      return this.genControl();
    },
    genControl: function genControl() {
      var children = [];
      children.push(this.hasSelections ? this.genSelections() : this.genPlaceholder());
      children.push(this.genDropdownTrigger());
      return this.$createElement('div', {
        staticClass: "".concat(this.prefixClassName, "__control"),
        on: {
          mousedown: this.onControlMouseDown,
          mouseup: this.onControlMouseUp,
          click: this.onControlClick
        },
        ref: 'control'
      }, children);
    },
    genSelections: function genSelections() {
      var _this2 = this;

      var children = this.selectedItems.map(function (item) {
        return _this2.genSelection(item);
      });
      return this.$createElement('div', {
        staticClass: "".concat(this.prefixClassName, "__selections")
      }, children);
    },
    genSelection: function genSelection(item) {
      var slot = this.$scopedSlots.selection;
      return this.$createElement('div', {
        staticClass: "".concat(this.prefixClassName, "__selection")
      }, slot ? slot(item) : this.itemToLabel(item));
    },
    genPlaceholder: function genPlaceholder() {
      var placeholder = this.placeholder || '';

      if (placeholder.length <= 0) {
        return null;
      }

      var slot = this.$scopedSlots.placeholder;
      return this.$createElement('div', {
        staticClass: "".concat(this.prefixClassName, "__placeholder")
      }, slot ? slot() : placeholder);
    },
    genDropdownTrigger: function genDropdownTrigger() {
      var slot = this.$scopedSlots.trigger;
      return this.$createElement('div', {
        staticClass: "".concat(this.prefixClassName, "__dropdown-trigger")
      }, slot ? slot() : '열기');
    },
    genDropdown: function genDropdown() {
      var dropdownContent = this.genDropdownContent();
      return this.$createElement(VxPopup, {
        props: {
          positionTarget: ".".concat(this.prefixClassName, "__control"),
          closeOnOutsideDown: this.closeOnOutsideDown,
          closeOnResize: true,
          destroyOnClose: false,
          contentClass: this.popupContentClass,
          active: this.$el
        },
        on: {
          'opening': this.onDropdownOpening
        },
        ref: 'dropdown'
      }, [dropdownContent]);
    },
    genDropdownContent: function genDropdownContent() {
      return null;
    },
    onControlMouseDown: function onControlMouseDown(event) {
      this.$emit('mousedown', event);
    },
    onControlMouseUp: function onControlMouseUp(event) {
      this.$emit('mouseup', event);
    },
    onControlClick: function onControlClick(event) {
      var target = event.target;

      if (this.isOpened) {
        var control = this.$refs.control;

        if (control === target || control.contains(target)) {
          this.$nextTick(this.close);
        }
      } else {
        this.open();
      }

      this.$emit('click', event);
    },
    onDropdownOpening: function onDropdownOpening(event) {}
  },
  render: function render(h) {
    var children = [this.genContent(), this.genDropdown()];
    return h('div', {
      staticClass: this.prefixClassName
    }, children);
  }
};

var VxCombobox = {
  name: 'vx-combobox',
  mixins: [Dropdownable],
  props: {
    value: undefined,
    items: {
      type: Array
    },
    labelField: {
      type: [String, Function],
      default: 'label'
    },
    valueField: {
      type: [String, Function]
    },
    rowHeight: {
      type: Number,
      default: 40
    },
    rowCount: {
      type: Number,
      default: 7
    },
    minSelection: {
      type: Number,
      default: 0
    },
    maxSelection: {
      type: Number,
      default: 1
    },
    selectedValue: null
  },
  computed: {
    selectedLabels: function selectedLabels() {
      var _this = this;

      var items = this.selectedItems || [];
      return items.map(function (item) {
        return _this.itemToLabel(item);
      });
    },
    selectedValues: function selectedValues() {
      var _this2 = this;

      var items = this.selectedItems || [];
      return items.map(function (item) {
        return _this2.itemToValue(item);
      });
    },
    selectedItem: function selectedItem() {
      return this.selectedItems && this.selectedItems.length > 0 ? this.selectedItems[0] : null;
    },
    selectedIndex: function selectedIndex() {
      return this.selectedItem ? this.items.indexOf(this.selectedItem) : -1;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value, old) {
        if (value === undefined && old === undefined || this.selectedItem === value) {
          return;
        }

        this.selectItems(value);
      }
    },
    selectedValue: {
      immediate: true,
      handler: function handler(value, old) {
        if (value === undefined && old === undefined || this.selectedItem && this.itemToValue(this.selectedItem) === value) {
          return;
        }

        this.selectValue(value);
      }
    },
    minSelection: {
      immediate: true,
      handler: function handler(value) {
        if (value > 0) {
          this.forceBuildContent();
        }
      }
    }
  },
  methods: {
    getSelectedItem: function getSelectedItem() {
      return this.selectedItems && this.selectedItems[0] || null;
    },
    getSelectedValue: function getSelectedValue() {
      return this.itemToValue(this.getSelectedItem());
    },
    itemToLabel: function itemToLabel(item) {
      return VxList.options.methods.itemToLabel.apply(this, [item, this.labelField]);
    },
    itemToValue: function itemToValue(item) {
      return VxList.options.methods.itemToValue.apply(this, [item, this.valueField]);
    },
    selectItems: function selectItems(value) {
      if (value && !Array.isArray(value)) {
        value = [value];
      }

      if (!this.forceBuildContent()) {
        this.$refs.dropdownList.selectItems(value);
      }
    },
    selectValue: function selectValue(value) {
      var _this3 = this;

      if (!this.forceBuildContent()) {
        if (!this.items || this.selectedItem && this.itemToValue(this.selectedItem) === value) {
          return;
        }

        this.selectItems(this.items.find(function (item) {
          return value === _this3.itemToValue(item);
        }));
      }
    },
    genDropdownContent: function genDropdownContent() {
      var width = this.calculatedMinWidth();
      return this.$createElement(VxList, {
        staticClass: 'vx-combobox__dropdown-content',
        style: {
          width: "".concat(width, "px"),
          minWidth: "".concat(width, "px"),
          minHeight: "".concat(this.rowHeight, "px")
        },
        props: _objectSpread2({}, this.$props),
        on: {
          'input': this.onInput,
          'update:selectedValue': this.onUpdateSelectedValue,
          'selection-changing': this.onListEvents,
          'selection-change': this.onListEvents,
          'item-down': this.onListEvents,
          'item-up': this.onListEvents,
          'item-click': this.onListEvents,
          'collection-change': this.onListEvents
        },
        scopedSlots: this.$scopedSlots,
        ref: 'dropdownList'
      });
    },
    forceBuildContent: function forceBuildContent() {
      var _this4 = this;

      if (!this.$refs.dropdownList) {
        this.$nextTick(function () {
          if (!_this4.$refs.dropdown) ; else {
            _this4.$refs.dropdown.forceBuildContent();
          }
        });
        return true;
      }

      return false;
    },
    onListEvents: function onListEvents(event) {
      var type = event.type;

      if (type === 'selection-change') {
        this.selectedItems = event.detail.selectedItemsTo;
      }

      this.$emit(type, event);
    },
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onUpdateSelectedValue: function onUpdateSelectedValue(value) {
      this.$emit('update:selectedValue', value);
    },
    onDropdownOpening: function onDropdownOpening(event) {
      var dropdownList = this.$refs.dropdownList;
      dropdownList.syncScroll();

      if (this.selectedIndex >= 0) {
        dropdownList.scrollToIndex(this.selectedIndex);
      }

      dropdownList.invalidate();
      dropdownList.validateNow();
    }
  }
};

var DEFAULT_WEEK_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function cloneDate(date) {
  return new Date(date.getTime());
}
/**
 * 해당 월의 시작 주의 첫날을 반환합니다.
 * @param date
 * @returns {Date}
 */

function getMonthStart(date) {
  var start = new Date(date.getFullYear(), date.getMonth(), 1);
  start.setDate(-start.getDay() + 1);
  return start;
}
function toYYYY(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  return 0;
}
function toYYYYMM(date) {
  if (date instanceof Date) {
    return date.getFullYear() * 100 + (date.getMonth() + 1);
  }

  return 0;
}
function toYYYYMMDD(date) {
  if (date instanceof Date) {
    return toYYYYMM(date) * 100 + date.getDate();
  }

  return 0;
}
function parseDate(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (value instanceof Date) {
    return value;
  } else if (typeof value === 'string') {
    var result = null;

    if (format) {
      result = toDate(value, format);
    } else {
      result = Date.parse(value);
    }

    if (isNaN(result)) {
      throw new Error("Invalid Date. value is '".concat(value, "'"));
    }

    return new Date(result);
  }

  return null;
}
function toDate(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy.MM.dd';
  return parse(format, value);
}
function toDateString(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy.MM.dd';
  return asString(format, date);
}
function equals(d1, d2, type) {
  if (type === 'year') {
    return toYYYY(d1) === toYYYY(d2);
  } else if (type === 'month') {
    return toYYYYMM(d1) === toYYYYMM(d2);
  }

  return toYYYYMMDD(d1) === toYYYYMMDD(d2);
}

var VxDateTableItem = Vue.extend({
  name: 'vx-date-table-item',
  mixins: [ListItemAble],
  inject: {
    dateTable: {
      default: null
    }
  },
  props: {},
  computed: {
    staticClass: function staticClass() {
      return 'vx-date-table__item';
    },
    scopedProps: function scopedProps() {
      return _objectSpread2({}, this.state, {
        item: this.item
      });
    }
  },
  methods: {
    genContent: function genContent() {
      return [this.genItem()];
    },
    genItem: function genItem() {
      return this.$createElement('div', {
        staticClass: 'vx-date-table__item-label'
      }, [this.genLabel()]);
    },
    genLabel: function genLabel() {
      if (this.$scopedSlots.day) {
        return this.$scopedSlots.day(this.scopedProps);
      }

      return '' + this.item.value;
    }
  },
  render: function render(h) {
    var _clazz;

    var clazz = (_clazz = {}, _defineProperty(_clazz, 'vx-' + (this.item.tense === 0 ? 'present' : this.item.tense > 0 ? 'future' : 'past'), true), _defineProperty(_clazz, 'vx-disabled', !this.item.allowed), _defineProperty(_clazz, 'vx-extra', this.item.extra), _clazz);

    if ('weekday' in this.item) {
      clazz['vx-' + DEFAULT_WEEK_LABELS[this.item.weekday].toLowerCase()] = true;
    }

    return h('div', {
      staticClass: this.staticClass,
      class: clazz,
      attrs: this.itemAttrs
    }, this.genContent());
  }
});

function sign(value) {
  return value === 0 ? 0 : value > 0 ? 1 : -1;
}

var BaseProvider =
/*#__PURE__*/
function () {
  function BaseProvider(table, x, y) {
    var minDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date(1970, 0, 1);
    var maxDate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Date(2101, 11, 31);

    _classCallCheck(this, BaseProvider);

    this.table = table;
    this.x = x;
    this.y = y;
    this.count = x * y;
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.current = null;
    this.items = [];
  }

  _createClass(BaseProvider, [{
    key: "updateItems",
    value: function updateItems(date) {
      if (this.validItems(date) || this.minDate > date || this.maxDate < date) {
        return this.items;
      }

      this.current = date;
      this.items = this.createItems(date);
      return this.items;
    }
  }, {
    key: "validItems",
    value: function validItems(date) {
      return !!this.findItem(date);
    }
  }, {
    key: "createItems",
    value: function createItems(date) {}
  }, {
    key: "createItem",
    value: function createItem(date) {
      var toValue = this.constructor.toValue;
      return {
        source: date,
        fullValue: toValue(date),
        allowed: !this.table.allowDates || !!this.table.allowDates(date),
        tense: sign(toValue(date) - toValue(this.table.today)),
        extra: false
      };
    }
  }, {
    key: "findItem",
    value: function findItem(date) {
      var value = this.constructor.toValue(date);
      return this.items.find(function (item) {
        return value === item.fullValue;
      });
    }
  }, {
    key: "move",
    value: function move(value) {}
  }, {
    key: "equals",
    value: function equals(date) {
      var toValue = this.constructor.toValue;
      return toValue(this.current) === toValue(date);
    }
  }]);

  return BaseProvider;
}();

var YearProvider =
/*#__PURE__*/
function (_BaseProvider) {
  _inherits(YearProvider, _BaseProvider);

  function YearProvider(table, x, y) {
    _classCallCheck(this, YearProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(YearProvider).call(this, table, x, y));
  }

  _createClass(YearProvider, [{
    key: "getBlockIndex",
    value: function getBlockIndex(date) {
      return Math.floor((date.getFullYear() - this.minDate.getFullYear()) / this.count);
    }
  }, {
    key: "createItems",
    value: function createItems(date) {
      var min = this.minDate.getFullYear();
      var first = Math.max(min, min + this.count * this.getBlockIndex(date));
      var items = [];
      var start = new Date(first, 0, 1);

      for (var i = 0; i < this.count; i++) {
        items.push(this.createItem(cloneDate(start)));
        start.setFullYear(start.getFullYear() + 1);
      }

      return items;
    }
  }, {
    key: "createItem",
    value: function createItem(date) {
      var item = _get(_getPrototypeOf(YearProvider.prototype), "createItem", this).call(this, date);

      item.value = +this.constructor.toValue(date);
      item.year = date.getFullYear();
      return item;
    }
  }, {
    key: "move",
    value: function move(value) {
      var min = this.minDate.getFullYear();
      var first = Math.max(min, min + this.count * (this.getBlockIndex(this.current) + value));
      return this.updateItems(new Date(first, 0, 1));
    }
  }], [{
    key: "toValue",
    value: function toValue(date) {
      return toYYYY(date);
    }
  }]);

  return YearProvider;
}(BaseProvider);
var MonthProvider =
/*#__PURE__*/
function (_BaseProvider2) {
  _inherits(MonthProvider, _BaseProvider2);

  function MonthProvider() {
    _classCallCheck(this, MonthProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(MonthProvider).apply(this, arguments));
  }

  _createClass(MonthProvider, [{
    key: "createItems",
    value: function createItems(date) {
      var items = [];
      var start = new Date(date.getFullYear(), 0, 1);

      for (var i = 0; i < this.count; i++) {
        items.push(this.createItem(cloneDate(start)));
        start.setMonth(start.getMonth() + 1);
      }

      return items;
    }
  }, {
    key: "createItem",
    value: function createItem(date) {
      var item = _get(_getPrototypeOf(MonthProvider.prototype), "createItem", this).call(this, date);

      item.value = date.getMonth() + 1;
      item.year = date.getFullYear();
      item.month = date.getMonth() + 1;
      return item;
    }
  }, {
    key: "move",
    value: function move(value) {
      return this.updateItems(new Date(this.current.getFullYear() + value, 0, 1));
    }
  }], [{
    key: "toValue",
    value: function toValue(date) {
      return toYYYYMM(date);
    }
  }]);

  return MonthProvider;
}(BaseProvider);
var DayProvider =
/*#__PURE__*/
function (_BaseProvider3) {
  _inherits(DayProvider, _BaseProvider3);

  function DayProvider() {
    _classCallCheck(this, DayProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(DayProvider).apply(this, arguments));
  }

  _createClass(DayProvider, [{
    key: "createItems",
    value: function createItems(date) {
      var items = [];
      var start = getMonthStart(date);

      for (var i = 0; i < this.count; i++) {
        items.push(this.createItem(cloneDate(start)));
        start.setDate(start.getDate() + 1);
      }

      return items;
    }
  }, {
    key: "createItem",
    value: function createItem(date) {
      var item = _get(_getPrototypeOf(DayProvider.prototype), "createItem", this).call(this, date);

      item.value = date.getDate();
      item.year = date.getFullYear();
      item.month = date.getMonth() + 1;
      item.day = date.getDate();
      item.weekday = date.getDay();
      item.extra = toYYYYMM(date) !== toYYYYMM(this.current);
      return item;
    }
  }, {
    key: "validItems",
    value: function validItems(date) {
      return toYYYYMM(date) === toYYYYMM(this.current);
    }
  }, {
    key: "move",
    value: function move(value) {
      var date = cloneDate(this.current);
      date.setDate(1);
      date.setMonth(date.getMonth() + value);
      return this.updateItems(date);
    }
  }], [{
    key: "toValue",
    value: function toValue(date) {
      return toYYYYMMDD(date);
    }
  }]);

  return DayProvider;
}(BaseProvider);

var VxDateTable = Vue.extend({
  name: 'vx-date-table',
  provide: function provide() {
    return {
      dateTable: this
    };
  },
  props: {
    value: {
      /* 문자열은 ISO 8601만 가능*/
      type: [String, Date]
    },
    type: {
      type: String,
      default: 'day',
      validator: function validator(type) {
        return ['day', 'month', 'year'].find(function (t) {
          return t === type;
        });
      }
    },
    today: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    caret: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    weekLabels: {
      type: Array,
      default: function _default() {
        return DEFAULT_WEEK_LABELS.slice(0);
      }
    },
    allowDates: {
      type: Function
    },
    itemFactory: {
      type: Function,
      default: VxDateTableItem
    }
  },
  data: function data() {
    return {
      internalCaret: this.caret,
      internalSelectedDate: null,
      items: null
    };
  },
  computed: {
    providers: function providers() {
      return {
        'year': new YearProvider(this, 3, 4),
        'month': new MonthProvider(this, 3, 4),
        'day': new DayProvider(this, 7, 6)
      };
    },
    dateProvider: function dateProvider() {
      return this.providers[this.type];
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        if (value !== undefined) {
          this.selectDate(value, this._isMounted);
        }
      }
    },
    type: function type(value) {
      this.updateItems();
    },
    internalCaret: {
      immediate: true,
      handler: function handler(value) {
        this.updateItems();
        this.$emit('update:caret', value);
      }
    }
  },
  methods: {
    genContent: function genContent() {
      return [this.genHeader(), this.genTable()];
    },
    genHeader: function genHeader() {
      var _this = this;

      if (this.type !== 'day') {
        return null;
      }

      var children = this.weekLabels.map(function (label, index) {
        return _this.genWeekday(label, index);
      });
      return this.$createElement('div', {
        staticClass: 'vx-date-table__header'
      }, children);
    },
    genWeekday: function genWeekday(label, index) {
      return this.$createElement('div', {
        key: index,
        staticClass: 'vx-date-table__header-weekday',
        class: _defineProperty({}, 'vx-' + DEFAULT_WEEK_LABELS[index].toLowerCase(), true)
      }, label);
    },
    genTable: function genTable() {
      return this.$createElement(VxList, {
        staticClass: 'vx-date-table__body',
        props: {
          itemFactory: this.itemFactory,
          items: this.items,
          columnCount: this.dateProvider.x,
          rowCount: this.dateProvider.y,
          autoHeight: true,
          layout: 'grid'
        },
        on: {
          'collection-change': this.onListCollectionChange,
          'selection-changing': this.onListSelectionChanging,
          'item-click': this.onListItemClick
        },
        ref: 'list'
      });
    },
    move: function move(value) {
      this.items = this.dateProvider.move(value);
      this.internalCaret = this.dateProvider.current;
    },
    updateItems: function updateItems() {
      this.items = this.dateProvider.updateItems(this.internalCaret);
    },
    selectDate: function selectDate(value) {
      var _this2 = this;

      var isMoveCaret = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var trigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var toValue = this.dateProvider.constructor.toValue;
      var date = value ? parseDate(value) : null;

      if (value === this.internalSelectedDate || !this.validDate(date)) {
        return false;
      }

      if (date && isMoveCaret) {
        this.internalCaret = date;
      }

      if (toValue(this.internalSelectedDate) !== toValue(date)) {
        var found = date && this.dateProvider.findItem(date) || null;

        if (date) {
          found = this.dateProvider.findItem(date);
        }

        if (!this.$refs.list) {
          this.$nextTick(function () {
            if (_this2.$refs.list) {
              _this2.$refs.list.selectedItem = found;
            }
          });
        } else {
          this.$refs.list.selectedItem = found;
        }

        this.internalSelectedDate = date;
        this.$emit('selection-change', this.internalSelectedDate, trigger);
      }

      if (toValue(this.value) !== toValue(date)) {
        this.$emit('input', date);
      }

      return true;
    },
    validDate: function validDate(date) {
      return !this.allowDates || this.allowDates(date);
    },
    flush: function flush() {
      var list = this.$refs.list;

      if (list) {
        list.invalidate();
        list.validateNow();
      }
    },
    onListCollectionChange: function onListCollectionChange(event) {
      var _this3 = this;

      if (event.detail.kind === 'reset') {
        if (this.internalSelectedDate) {
          this.$nextTick(function () {
            if (_this3.$refs.list) {
              _this3.$refs.list.selectedItem = _this3.dateProvider.findItem(_this3.internalSelectedDate);
            }
          });
        }
      }
    },
    onListSelectionChanging: function onListSelectionChanging(event) {
      var item = event.detail.selectedItemTo;

      if (item && !this.validDate(item.source)) {
        event.preventDefault();
      }
    },
    onListItemClick: function onListItemClick(event) {
      var date = event.detail.item.source;
      this.$emit(event.type, event);

      if (!event.defaultPrevented) {
        this.selectDate(date, true, event);
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-date-table',
      class: _defineProperty({}, "vx-date-table--year--".concat(this.type), true)
    }, this.genContent());
  }
});

var VxCalendar = VxDateTable.extend({
  name: 'vx-calendar.js',
  props: {
    type: {
      type: String,
      default: 'day'
    }
  }
});

var VxDatePickerDay = VxDateTable.extend({
  name: 'vx-date-picker-day',
  props: {
    type: {
      type: String,
      default: 'day'
    }
  }
});

var VxDatePickerYear = VxDateTable.extend({
  name: 'vx-date-picker-year',
  props: {
    type: {
      type: String,
      default: 'year'
    }
  }
});

var VxDatePickerMonth = VxDateTable.extend({
  name: 'vx-date-picker-month',
  props: {
    type: {
      type: String,
      default: 'month'
    }
  }
});

var DATE_PATH = ['day', 'month', 'year'];
var VxDatePicker = Vue.extend({
  props: {
    value: {
      /* 문자열은 ISO 8601만 가능*/
      type: [String, Date]
    },
    type: {
      type: String,
      default: 'day',
      validator: function validator(type) {
        return ['day', 'month', 'year'].find(function (v) {
          return v === type;
        });
      }
    },
    today: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    weekLabels: {
      type: Array,
      default: function _default() {
        return DEFAULT_WEEK_LABELS.slice(0);
      }
    },
    allowDates: {
      type: Function
    },
    titleFormat: {
      type: Function,
      default: function _default(type, date, items) {
        var yyyymmdd = '' + toYYYYMMDD(date);

        switch (type) {
          case 'year':
            return items ? "".concat(items[0].value, "-").concat(items[items.length - 1].value) : '';

          case 'month':
            return "".concat(yyyymmdd.substr(0, 4));
        }

        return "".concat(yyyymmdd.substr(0, 4), "-").concat(yyyymmdd.substr(4, 2));
      }
    },
    format: {
      type: String
    },
    selectedDate: {
      type: Date
    }
  },
  data: function data() {
    return {
      dateItems: null,
      internalType: this.type,
      internalCaret: new Date(),
      internalSelectedDate: null
    };
  },
  computed: {
    headerTitle: function headerTitle() {
      return this.titleFormat(this.internalType, this.internalCaret, this.dateItems);
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        if (value !== undefined) {
          this.selectDate(parseDate(value, this.format));
          this.valueChanged = true;
        }
      }
    },
    selectedDate: {
      immediate: true,
      handler: function handler(value) {
        if (value !== undefined) {
          this.selectDate(value);
          this.valueChanged = true;
        }
      }
    }
  },
  methods: {
    genContent: function genContent() {
      return [this.genControl(), this.genTable()];
    },
    genControl: function genControl() {
      var children = [this.genPrev(), this.genTitle(), this.genNext()];
      return this.$createElement('div', {
        staticClass: 'vx-date-picker__control'
      }, children);
    },
    genPrev: function genPrev() {
      var slot = this.$slots.prev;
      return this.$createElement('div', {
        staticClass: 'vx-date-picker__control-prev',
        on: {
          'click': this.prev
        }
      }, slot ? slot : '<');
    },
    genNext: function genNext() {
      var slot = this.$slots.next;
      return this.$createElement('div', {
        staticClass: 'vx-date-picker__control-next',
        on: {
          'click': this.next
        }
      }, slot ? slot : '>');
    },
    genTitle: function genTitle() {
      var slot = this.$slots.title;
      return this.$createElement('div', {
        staticClass: 'vx-date-picker__control-title',
        on: {
          'click': this.onTitleClick
        }
      }, slot ? slot() : this.headerTitle);
    },
    genTable: function genTable() {
      var component = null;

      if (this.internalType === 'day') {
        component = VxDatePickerDay;
      } else if (this.internalType === 'month') {
        component = VxDatePickerMonth;
      } else {
        component = VxDatePickerYear;
      }

      return this.$createElement(component, {
        staticClass: 'vx-date-picker__body',
        props: _objectSpread2({}, this.$props, {
          value: this.internalSelectedDate,
          caret: this.internalCaret,
          type: this.internalType
        }),
        ref: 'table',
        on: {
          'input': this.onDateTableInput,
          'update:caret': this.onDateTableCaretUpdate,
          'item-click': this.onDateTableEvents,
          'item-down': this.onDateTableEvents,
          'item-up': this.onDateTableEvents,
          'selection-change': this.onDateTableSelectionChange
        },
        scopedSlots: this.$scopedSlots
      });
    },
    getSelectedDate: function getSelectedDate() {
      return this.internalSelectedDate;
    },
    getSelectedFormatDate: function getSelectedFormatDate() {
      if (this.internalSelectedDate) {
        return this.format && toDateString(this.internalSelectedDate, this.format) || this.internalSelectedDate.toISOString();
      }

      return null;
    },
    selectDate: function selectDate(date) {
      if (date) {
        if (!equals(this.internalCaret, date, this.type)) {
          this.internalCaret = date;
        }
      }

      if (!equals(this.internalSelectedDate, date, this.type)) {
        this.internalSelectedDate = date;
      }
    },
    move: function move(value) {
      if (this.$refs.table) {
        this.$refs.table.move(value);
      }
    },
    prev: function prev() {
      this.move(-1);
    },
    next: function next() {
      this.move(+1);
    },

    /**
     * 상위이동(day -> month, month -> year)
     */
    moveTop: function moveTop(date) {
      var _this = this;

      this.lockedCall(function () {
        var index = DATE_PATH.findIndex(function (type) {
          return type === _this.internalType;
        });

        if (index + 1 < DATE_PATH.length) {
          _this.internalType = DATE_PATH[index + 1];

          if (date) {
            _this.internalCaret = date;
          }
        }
      });
    },

    /**
     * 하위 이동(year -> month, month -> day)
     */
    moveBottom: function moveBottom(date) {
      var _this2 = this;

      this.lockedCall(function () {
        var index = DATE_PATH.findIndex(function (type) {
          return type === _this2.internalType;
        });

        if (index - 1 >= 0) {
          _this2.internalType = DATE_PATH[index - 1];

          if (date) {
            _this2.internalCaret = date;
          }
        }
      });
    },
    lockedCall: function lockedCall(callback) {
      var _this3 = this;

      if (!this.locked) {
        this.locked = true;
        callback();
        this.$nextTick(function () {
          _this3.locked = false;
        });
      }
    },
    flush: function flush() {
      this.$refs.table.flush();
    },
    onDateTableInput: function onDateTableInput(date) {
      if (this.type === this.internalType) {
        var value = this.format ? toDateString(date, this.format) : date;
        this.$emit('input', value);
        this.$emit('update:selectedDate', date);
      }
    },
    onDateTableCaretUpdate: function onDateTableCaretUpdate(date) {
      var _this4 = this;

      this.$nextTick(function () {
        if (_this4.$refs.table) {
          _this4.internalCaret = date;
          _this4.dateItems = _this4.$refs.table.items;
        }
      });
    },
    onDateTableSelectionChange: function onDateTableSelectionChange(date) {
      if (this.type === this.internalType && (this.internalSelectedDate !== date || this.valueChanged)) {
        this.internalSelectedDate = date;
        this.$emit('selection-change', date);
        this.$emit('update:selectedDate', date);
      }
    },
    onDateTableEvents: function onDateTableEvents(event) {
      var type = event.type;

      if (type === 'item-click') {
        this.valueChanged = false;

        if (this.type !== this.internalType) {
          this.moveBottom(event.detail.item.source);
          event.preventDefault();
        }
      }

      this.$emit(type, event);
    },
    onTitleClick: function onTitleClick(event) {
      this.valueChanged = false;
      this.moveTop();
    },
    onMousewheel: function onMousewheel(event) {
      var _this5 = this;

      this.$nextTick(function () {
        if (event.wheelDelta > 0) {
          _this5.prev();
        } else {
          _this5.next();
        }
      });
      event.preventDefault();
      return false;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-date-picker',
      on: {
        'mousewheel': this.onMousewheel
      }
    }, this.genContent());
  }
});

var VxDateField = {
  name: 'vx-date-field',
  mixins: [Dropdownable],
  props: _objectSpread2({}, VxDatePicker.options.props, {
    selectedFormat: {
      type: Function,
      default: function _default(type, date) {
        var yyyymmdd = '' + toYYYYMMDD(date);

        switch (type) {
          case 'year':
            return "".concat(yyyymmdd.substr(0, 4));

          case 'month':
            return "".concat(yyyymmdd.substr(0, 4), "-").concat(yyyymmdd.substr(4, 2));
        }

        return "".concat(yyyymmdd.substr(0, 4), "-").concat(yyyymmdd.substr(4, 2), "-").concat(yyyymmdd.substr(6, 2));
      }
    }
  }),
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        if (value !== undefined) {
          this.selectDate(parseDate(value, this.format));
        }
      }
    },
    selectedDate: {
      immediate: true,
      handler: function handler(value, old) {
        if (value !== undefined) {
          this.selectDate(value);
        }
      }
    }
  },
  methods: {
    getSelectedDate: function getSelectedDate() {
      return this.$refs.datePicker && this.$refs.datePicker.getSelectedDate();
    },
    getSelectedFormatDate: function getSelectedFormatDate() {
      return this.$refs.datePicker && this.$refs.datePicker.getSelectedFormatDate();
    },
    itemToLabel: function itemToLabel(date) {
      return this.selectedFormat && this.selectedFormat(this.type, date) || date;
    },
    selectDate: function selectDate(date) {
      var _this = this;

      if (!this.$refs.datePicker) {
        this.$nextTick(function () {
          if (_this.$refs.dropdown) {
            _this.$refs.dropdown.forceBuildContent();
          }
        });
      } else {
        this.$refs.datePicker.selectDate(date);
      }
    },
    genDropdownContent: function genDropdownContent() {
      return this.$createElement(VxDatePicker, {
        staticClass: 'vx-date-field__dropdown-content',
        props: _objectSpread2({}, this.$props),
        on: {
          'input': this.onDatePickerInput,
          'selection-change': this.onDatePickerSelectionChange,
          'item-click': this.onDatePickerItemEvents,
          'item-down': this.onDatePickerItemEvents,
          'item-up': this.onDatePickerItemEvents
        },
        scopedSlots: this.$scopedSlots,
        ref: 'datePicker'
      });
    },
    onDatePickerSelectionChange: function onDatePickerSelectionChange(date) {
      //선택 후 닫힘.
      this.selectedItems = date ? [date] : [];
      this.$emit('selection-change', date);
    },
    onDatePickerInput: function onDatePickerInput(date) {
      this.$emit('input', date);
    },
    onDropdownOpening: function onDropdownOpening() {
      this.$refs.datePicker.flush();
    },
    onDatePickerItemEvents: function onDatePickerItemEvents(event) {
      this.$emit(event.type, event);
    }
  }
};

var Draggable = {
  name: 'draggable'
};

var VxWindow = Vue.extend({
  name: 'vx-window',
  mixins: [Draggable],
  props: {
    title: {
      type: String,
      default: ''
    },
    closeButton: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    genContent: function genContent() {
      return [this.genHeader(), this.genBody()];
    },
    genHeader: function genHeader() {
      var children = [this.genIcon(), this.genTitle(), this.genCloseButton()];
      return this.$createElement('div', {
        staticClass: 'vx-window__header'
      }, children);
    },
    genIcon: function genIcon() {
      var slot = this.$slots.icon;

      if (!slot) {
        return null;
      }

      return this.$createElement('div', {
        staticClass: 'vx-window__header-icon'
      }, slot);
    },
    genTitle: function genTitle() {
      var slot = this.$slots.title;
      return this.$createElement('div', {
        staticClass: 'vx-window__header-title'
      }, slot ? slot : this.title);
    },
    genCloseButton: function genCloseButton() {
      if (!this.closeButton) {
        return null;
      }

      var slot = this.$slots.close;
      return this.$createElement('button', {
        staticClass: 'vx-window__header-close',
        on: {
          click: this.onClick
        }
      }, slot ? slot : 'close');
    },
    genBody: function genBody() {
      return this.$createElement('div', {
        staticClass: 'vx-window__body'
      }, this.$slots.default);
    },
    onClick: function onClick() {
      this.$emit('close');
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-window'
    }, this.genContent());
  }
});

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

var VxSelectorGroup = {
  name: 'vx-selector-group',
  props: {
    value: null,

    /**
     * 선택 가능한 이벤트 목록
     */
    selectOnEvents: {
      type: Array,
      default: function _default() {
        return ['click'];
      }
    },

    /**
     * 선택시 'trueAs' or 'falseAs' 설정 할 속성 이름
     * 그룹 구성 엘리먼트가 HTMLElement 이면 attribute 로 접근,
     * 이외 오브젝트는 property 로 접근합니다.
     */
    selectedField: {
      type: String,
      default: 'selected'
    },

    /**
     * 'true' 표시하는 값
     */
    trueAs: {
      type: [String, Boolean],
      default: true
    },

    /**
     * 'false' 표시하는 값
     */
    falseAs: {
      type: [String, Boolean],
      default: false
    },
    valueField: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      vnodes: [],
      selected: null,
      selectedValue: null
    };
  },
  computed: {
    boundChildEvents: function boundChildEvents() {
      return this.onChildEvents.bind(this);
    }
  },
  watch: {
    value: function value(v) {
      var _this = this;

      if (this.valueField && this.selectedValue !== v) {
        this.selected = this.vnodes.find(function (node) {
          return _this.getValue(node) === v;
        }) || null;
      }
    },
    vnodes: function vnodes(nodes, old) {
      var _this2 = this;

      if (Array.isArray(old)) {
        old.forEach(function (node) {
          return _this2.removeListener(node);
        });
      } //초기 세팅


      nodes.forEach(function (node) {
        _this2.addListener(node);
      });
      this.$nextTick(function () {
        _this2.selected = nodes.find(function (node) {
          if (_this2.valueField && _this2.value) {
            return _this2.getValue(node) === _this2.value;
          }

          return _this2.isSelect(node);
        }) || null;
      });
    },
    selected: function selected(node) {
      var _this3 = this;

      this.vnodes.forEach(function (selector) {
        _this3.setSelect(selector, node === selector);
      });
      this.selectedValue = this.getValue(node);
      this.$emit('input', this.valueField && node ? this.selectedValue : node);
      this.$emit('change', {
        node: node,
        element: node && (node.componentInstance || node.elm),
        index: this.vnodes.indexOf(node),
        value: this.selectedValue
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.updateVNodes();
    this.$once('hook:beforeDestroy', function () {
      _this4.vnodes || [].forEach(function (node) {
        return _this4.removeListener(node);
      });
    });
  },
  updated: function updated() {
    this.updateVNodes();
  },
  methods: {
    updateVNodes: function updateVNodes() {
      var children = this._vnode && this._vnode.children;

      if (Array.isArray(children)) {
        var nodes = children.filter(function (node) {
          return node.tag;
        });

        if (!compareArray(this.vnodes, nodes)) {
          this.vnodes = nodes;
        }
      }
    },
    addListener: function addListener(node) {
      var _this5 = this;

      var element = node.componentInstance || node.elm;
      this.selectOnEvents.forEach(function (name) {
        if (element instanceof HTMLElement) {
          element.addEventListener(name, _this5.boundChildEvents);
        } else if (element) {
          element.$on(name, _this5.boundChildEvents);
        }
      });
    },
    removeListener: function removeListener(node) {
      var _this6 = this;

      var element = node.componentInstance || node.elm;
      this.selectOnEvents.forEach(function (name) {
        if (element instanceof HTMLElement) {
          element.removeEventListener(name, _this6.boundChildEvents);
        } else if (element) {
          element.$off(name, _this6.boundChildEvents);
        }
      });
    },
    getValue: function getValue(node) {
      if (this.valueField && node) {
        var field = this.valueField;
        var element = node.componentInstance || node.elm;

        if (element instanceof HTMLElement) {
          return element.getAttribute(field);
        } else if (element && field in element) {
          return element[field];
        }
      }

      return null;
    },
    isSelect: function isSelect(node) {
      var field = this.selectedField;
      var element = node.componentInstance || node.elm;

      if (element instanceof HTMLElement) {
        return element.hasAttribute(field);
      } else if (element && field in element) {
        return element[field] === this.trueAs;
      }

      return false;
    },

    /**
     * 노드 선택 지정및 해제
     * @param node
     * @param isSelect
     */
    setSelect: function setSelect(node, isSelect) {
      var field = this.selectedField;
      var element = node.componentInstance || node.elm;

      if (element instanceof HTMLElement) {
        if (isSelect) {
          element.setAttribute(field, this.trueAs);
        } else {
          element.removeAttribute(field);
        }
      } else if (element && field in element) {
        element[field] = isSelect ? this.trueAs : this.falseAs;
      }
    },
    onChildEvents: function onChildEvents(event) {
      this.selected = this.vnodes.find(function (selector) {
        return selector.elm === event.currentTarget;
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-selector-group'
    }, this.$slots.default);
  }
};

var VxInputControl = Vue.extend({
  name: 'vx-input-control',
  inject: {
    autoComplete: {
      default: null
    }
  },
  methods: {
    genContent: function genContent() {
      return [this.getInput(), this.genClear()];
    },
    getInput: function getInput() {
      if (this.$scopedSlots.input) {
        return this.$scopedSlots.input(this.scopedProps);
      }

      return this.$createElement('input', {
        staticClass: 'control__input',
        domProps: {
          autocomplete: 'off'
        }
      });
    },
    genClear: function genClear() {
      if (!this.autoComplete.clearButton) {
        return null;
      }

      var slot = this.autoComplete.$slots.clear;
      return this.$createElement('div', {
        staticClass: 'control__clear',
        on: {
          click: this.clear
        }
      }, slot ? slot : 'X');
    },
    clear: function clear() {
      this.autoComplete.clear();
      this.autoComplete.focus();
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'input-control',
      attrs: this.itemAttrs
    }, this.genContent());
  }
});

var VxSuggestItem = Vue.extend({
  name: 'vx-suggest-item',
  inject: {
    autoComplete: {
      default: null
    }
  },
  props: {
    item: null
  },
  data: function data() {
    return {
      index: -1,
      search: '',
      state: function state() {
        return {};
      }
    };
  },
  computed: {
    staticClass: function staticClass() {
      return 'vx-suggest__item';
    },
    itemLabel: function itemLabel() {
      return this.autoComplete.itemToLabel(this.item);
    },
    itemHtml: function itemHtml() {
      return this.search ? this.autoComplete.toHighlightHtml(this.itemLabel, this.search) : this.itemLabel;
    },
    itemAttrs: function itemAttrs() {
      return {
        active: this.state.active
      };
    },
    scopedProps: function scopedProps() {
      return _objectSpread2({}, this.state, {
        item: this.item,
        index: this.index,
        label: this.itemLabel,
        html: this.itemHtml
      });
    }
  },
  methods: {},
  render: function render(h) {
    var children = [];
    var domProps = {};

    if (this.$scopedSlots.suggest) {
      children.push(this.$scopedSlots.suggest(this.scopedProps));
    } else {
      domProps.innerHTML = this.itemHtml;
    }

    return h('div', {
      staticClass: this.staticClass,
      attrs: this.itemAttrs,
      domProps: domProps
    }, children);
  }
});

var Properties = ['suggestSource', 'suggestCount', 'suggestFilter', 'inputValue', 'labelField', 'minChar', 'placeholder', 'delimiterOnKeys'];
var Methods = ['clear', 'focus', 'blur', 'itemToLabel', 'toHighlightHtml', 'openSuggest', 'closeSuggest'];
var Events = ['input-change', 'suggest-open', 'suggest-close', 'suggest-select', 'suggest-progress', 'suggest-change', 'suggest-error', 'suggest-caret-change', 'input-key-down', 'focus', 'blur'];
var defaultProps = {};
var defaultWatch = {};
var defaultMethods$1 = {};

function setupProp(name) {
  defaultProps[name] = undefined;

  defaultWatch[name] = function (value) {
    if (this.instance) {
      this.instance[name] = value;
    }
  };
}

Properties.forEach(function (name) {
  setupProp(name);
});
Methods.forEach(function (name) {
  defaultMethods$1[name] = function () {
    if (this.instance) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.instance[name].apply(this.instance, args);
    }
  };
});
var AutoCompletable = {
  provide: function provide() {
    return {
      autoComplete: this
    };
  },
  props: _objectSpread2({}, defaultProps, {
    suggestItemFactory: {
      type: Function,
      default: VxSuggestItem
    }
  }),
  data: function data() {
    return {
      instance: null
    };
  },
  computed: {
    inputFactoryWrapper: function inputFactoryWrapper() {
      return ComponentFactory.factoryWrapper(this, VxInputControl);
    },
    suggestItemFactoryWrapper: function suggestItemFactoryWrapper() {
      if (!this.suggestItemFactory) {
        throw new Error("'itemFactory' is null");
      }

      var self = this;
      return ComponentFactory.factoryWrapper(this, this.suggestItemFactory, {
        create: function create(data) {
          var component = ComponentFactory.prototype.create.apply(this, [data]);
          component.$scopedSlots = self.$scopedSlots;
          return component;
        }
      });
    }
  },
  watch: _objectSpread2({}, defaultWatch, {
    instance: function instance(_instance) {
      var _this = this;

      if (_instance) {
        Events.forEach(function (type) {
          _instance.addEventListener(type, _this.onInstanceEvents);
        });
        var props = this.$props;
        var exceptions = ['value'];

        for (var p in props) {
          if (exceptions.indexOf(p) < 0) {
            var value = props[p];

            if (value !== undefined && !(value instanceof Function && value.prototype instanceof Vue)) {
              _instance[p] = value;
            }
          }
        }
      }
    }
  }),
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    if (this.instance) {
      var inputGroup = this.instance.inputGroup;

      if (inputGroup && inputGroup.__vue__) {
        inputGroup.__vue__.$destroy();
      }

      Events.forEach(function (type) {
        _this2.instance.removeEventListener(type, _this2.onInstanceEvents);
      });
      this.instance.destroy();
    }
  },
  methods: _objectSpread2({}, defaultMethods$1, {
    onInstanceEvents: function onInstanceEvents(event) {
      this.$emit(type, event);
    }
  })
};

var VxAutoComplete = {
  name: 'vx-auto-complete',
  mixins: [AutoCompletable],
  props: {
    value: {
      type: String,
      default: ''
    },
    clearButton: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: function value(v) {
      this.instance.inputValue = v;
    },
    instance: function instance(_instance) {
      if (_instance) {
        if (this.value !== undefined) {
          this.instance.inputValue = this.value;
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var instance = this.instance;

    if (!instance) {
      instance = this.instance = unobserve(vrix.ui.AutoComplete.create(this.$el, {
        inputFactory: function inputFactory(value) {
          return new _this.inputFactoryWrapper().element;
        },
        suggestFactory: '<div class="vx-auto-complete"><div class="suggest-list"></div></div>',
        suggestItemFactory: function suggestItemFactory(item, index) {
          var wrapper = new _this.suggestItemFactoryWrapper({
            propsData: {
              item: item
            }
          });
          return wrapper.element;
        },
        hookRenderSuggestItem: function hookRenderSuggestItem(element, item, index, state) {
          var vm = element.__vue__;
          vm.search = instance.lastSuggestValue;
          vm.index = index;
          vm.state = state;
        },
        hookFreeSuggestItem: function hookFreeSuggestItem(element) {
          var vm = element.__vue__;
          vm.$destroy();
        },
        placeholder: this.placeholder
      }));
    }
  },
  methods: {
    onInstanceEvents: function onInstanceEvents(event) {
      var type = event.type,
          detail = event.detail;

      if (type === 'input-change') {
        this.$emit('update:inputValue', detail.value);
        this.$emit('input', detail.value);
      }

      this.$emit(type, event);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-auto-complete'
    });
  }
};

var VxTokenItem = Vue.extend({
  name: 'vx-token-item',
  inject: {
    tokenizer: {
      default: null
    }
  },
  props: {
    item: null,
    labelField: {
      type: [String, Function]
    },
    index: {
      type: Number
    }
  },
  computed: {
    staticClass: function staticClass() {
      return 'vx-tokenizer__item';
    },
    itemLabel: function itemLabel() {
      return this.item && this.tokenizer.itemToLabel(this.item) || '';
    },
    scopedProps: function scopedProps() {
      return {
        item: this.item,
        index: this.index,
        label: this.itemLabel
      };
    }
  },
  methods: {
    genContent: function genContent() {
      return [this.genLabel(), this.genRemover()];
    },
    genLabel: function genLabel() {
      var children = [];

      if (this.$scopedSlots.label) {
        children.push(this.$scopedSlots.label(this.scopedProps));
      } else {
        children.push(this.itemLabel);
      }

      return this.$createElement('span', {
        staticClass: this.staticClass + '-label'
      }, children);
    },
    genRemover: function genRemover() {
      var children = [];

      if (this.$scopedSlots.remover) {
        children.push(this.$scopedSlots.remover(this.scopedProps));
      } else {
        children.push('x');
      }

      return this.$createElement('button', {
        staticClass: this.staticClass + '-remover',
        on: {
          click: function click(event) {//this.tokenizer.removeTokenAt(this.index)
          }
        }
      }, children);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.staticClass
    }, this.genContent());
  }
});

var TOKEN_EVENTS = ['item-caret-change', 'item-reset', 'item-add', 'item-remove', 'select-cancel'];
var VxTokenizer = {
  name: 'vx-tokenizer',
  provide: function provide() {
    return {
      tokenizer: this
    };
  },
  model: {
    prop: 'selectedItems',
    event: 'change'
  },
  mixins: [AutoCompletable],
  props: {
    selectedItemFactory: {
      type: Function,
      default: VxTokenItem
    },
    selectedItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    allowDuplicate: {
      type: Boolean,
      default: false
    },
    allowOnlySuggest: {
      type: Boolean,
      default: false
    },
    addOnFocusOut: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedItemFactoryWrapper: function selectedItemFactoryWrapper() {
      if (!this.selectedItemFactory) {
        throw new Error("'selectedItemFactory' is null");
      }

      var self = this;
      return ComponentFactory.factoryWrapper(this, this.selectedItemFactory, {
        create: function create(data) {
          var component = ComponentFactory.prototype.create.apply(this, [data]);
          component.$scopedSlots = self.$scopedSlots;
          return component;
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    var instance = this.instance;

    if (!instance) {
      instance = this.instance = unobserve(vrix.ui.Tokenizer.create(this.$el, {
        inputFactory: function inputFactory(value) {
          return new _this.inputFactoryWrapper().element;
        },
        suggestFactory: '<div class="vx-tokenizer"><div class="suggest-list"></div></div>',
        suggestItemFactory: function suggestItemFactory(item, index) {
          var wrapper = new _this.suggestItemFactoryWrapper({
            propsData: {
              item: item,
              index: index
            }
          });
          return wrapper.element;
        },
        hookRenderSuggestItem: function hookRenderSuggestItem(element, item, index, state) {
          var vm = element.__vue__;
          vm.search = instance.lastSuggestValue;
          vm.index = index;
          vm.state = state;
        },
        hookFreeSuggestItem: function hookFreeSuggestItem(element) {
          var vm = element.__vue__;
          vm.$destroy();
        },
        selectedItemFactory: function selectedItemFactory(item, index) {
          var wrapper = new _this.selectedItemFactoryWrapper({
            propsData: {
              item: item,
              index: index,
              labelField: _this.labelField
            }
          });
          return wrapper.element;
        },
        hookFreeSelectedElement: function hookFreeSelectedElement(element) {
          var vm = element.__vue__;
          vm.$destroy();
        },
        placeholder: this.placeholder,
        removerSelector: '.vx-tokenizer__item-remover'
      }));
    }
  },
  watch: {
    selectedItems: function selectedItems(v) {
      if (!vrix.util.compareArray(this.instance.selectedItems, v)) {
        this.instance.selectedItems = v || [];
      }
    },
    instance: function instance(_instance) {
      var _this2 = this;

      if (_instance) {
        TOKEN_EVENTS.forEach(function (type) {
          _instance.addEventListener(type, _this2.onInstanceEvents);
        });
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;

    if (this.instance) {
      TOKEN_EVENTS.forEach(function (type) {
        _this3.instance.removeEventListener(type, _this3.onInstanceEvents);
      });
    }
  },
  methods: {
    addSelectedItem: function addSelectedItem(item) {
      return this.instance.addSelectedItem(item);
    },

    /**
     * 토큰 삭제
     * @param item
     */
    removeSelectedItem: function removeSelectedItem(item) {
      return this.instance.removeSelectedItem(item);
    },

    /**
     * 토큰 삭제
     * @param index
     */
    removeSelectedItemAt: function removeSelectedItemAt(index) {
      return this.instance.removeSelectedItemAt(index);
    },
    onInstanceEvents: function onInstanceEvents(event) {
      var type = event.type;

      switch (type) {
        case 'item-reset':
        case 'item-add':
        case 'item-remove':
          this.$emit('change', this.instance.selectedItems); //this.$emit('update:selectedItems', this.instance.selectedItems);

          break;
      }

      this.$emit(type, event);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-tokenizer'
    });
  }
};

var Properties$1 = ['minScale', 'maxScale', 'scale', 'autoPage', 'enablePan', 'hiddenScroll'];
var Methods$1 = ['setContent', 'center', 'destroy', 'invalidate'];
var Events$1 = ['scale-change', 'scroll-change'];
var defaultProps$1 = {};
var defaultWatch$1 = {};
var defaultMethods$2 = {};

function setupProp$1(name) {
  defaultProps$1[name] = undefined;

  defaultWatch$1[name] = function (value) {
    if (this.instance) {
      this.instance[name] = value;
    }
  };
}

Properties$1.forEach(function (name) {
  setupProp$1(name);
});
Methods$1.forEach(function (name) {
  defaultMethods$2[name] = function () {
    if (this.instance) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.instance[name].apply(this.instance, args);
    }
  };
});
var VxScaleViewer = {
  provide: function provide() {
    return {
      scaleViewer: this
    };
  },
  props: _objectSpread2({}, defaultProps$1),
  data: function data() {
    return {
      instance: null
    };
  },
  computed: {
    isPanning: function isPanning() {
      return !!(this.instance && this.instance.isPanning);
    }
  },
  mounted: function mounted() {
    var instance = this.instance;

    if (!instance) {
      instance = this.instance = unobserve(vrix.ui.ScaleViewer.create(this.$el, {}));
      instance.setContent(this.$el.firstElementChild);
      instance.center();
    }
  },
  watch: _objectSpread2({}, defaultWatch$1, {
    instance: function instance(_instance) {
      var _this = this;

      if (_instance) {
        Events$1.forEach(function (type) {
          _instance.addEventListener(type, _this.onInstanceEvents);
        });
        var props = this.$props;
        var exceptions = [];

        for (var p in props) {
          if (exceptions.indexOf(p) < 0) {
            var value = props[p];

            if (value !== undefined && !(value instanceof Function && value.prototype instanceof Vue)) {
              _instance[p] = value;
            }
          }
        }
      }
    }
  }),
  beforeDestroy: function beforeDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  },
  methods: _objectSpread2({}, defaultMethods$2, {
    onInstanceEvents: function onInstanceEvents(event) {
      this.$emit(event.type, event);
    }
  }),
  render: function render(h) {
    return h('div', {
      staticClass: 'vx-scale-viewer'
    }, this.$slots.default);
  }
};



var components = /*#__PURE__*/Object.freeze({
  VxList: VxList,
  VxTree: VxTree,
  VxPopup: VxPopup,
  VxCombobox: VxCombobox,
  VxListItem: ListItem,
  VxTreeItem: VxTreeItem,
  VxCalendar: VxCalendar,
  VxDatePicker: VxDatePicker,
  VxDateField: VxDateField,
  VxWindow: VxWindow,
  VxSelectorGroup: VxSelectorGroup,
  VxDateTable: VxDateTable,
  VxAutoComplete: VxAutoComplete,
  VxTokenizer: VxTokenizer,
  VxScaleViewer: VxScaleViewer
});

var vrixVue = {
  install: function install(Vue, options) {
    var comps = components || {};

    for (var key in comps) {
      Vue.component(key, comps[key]);
    }
  },
  version: '1.0.0',
  ComponentFactory: ComponentFactory
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vrixVue, {
    components: components
  });
}

export default vrixVue;
//# sourceMappingURL=vrix.vue.esm.js.map
