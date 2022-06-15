import Vue$1 from 'vue';

var ColumnProps = ['dataField', 'headerText', 'width', 'minWidth', 'visible', 'styles', 'id', 'editable', 'editOnEvents', 'resizable', 'labelFunction', 'sortable', 'sortCompare', 'sortDescending', 'isSortOriginal', 'calculateHeaderLayout', 'isRowMerge', 'isColumnMerge', 'mergeDependColumns', 'open', 'format', 'filter'];
var defaultProps = {};
var defaultWatch = {};

function setupProp(name) {
  defaultProps[name] = undefined;
  defaultWatch[name] = createWatch(name);
}

function createWatch(name) {
  return {
    immediate: true,
    handler: function handler(value) {
      if (value !== undefined) {
        this.columnInstance[name] = value;
      }
    }
  };
}
ColumnProps.forEach(function (p) {
  return setupProp(p);
});
var ColumnCore = {
  name: 'column-core',
  props: defaultProps,
  computed: {
    columnInstance: function columnInstance() {
      throw new Error('Not implemented !!!');
    }
  },
  watch: defaultWatch,
  mounted: function mounted() {
    this.columnInstance.children = this.$children.map(function (child) {
      return child.columnInstance;
    });
  },
  render: function render(h) {
    return h('template', this.$slots.default);
  }
};

function _typeof(obj) {
  "@babel/helpers - typeof";

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
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function fnCall(func, params, target) {
  if (func instanceof Function) {
    return func.apply(target, params);
  }
}

var ComponentWrapper = /*#__PURE__*/function () {
  function ComponentWrapper(parent, wrapper) {
    _classCallCheck(this, ComponentWrapper);

    this.parent = parent;
    this.wrapper = wrapper;
  }

  _createClass(ComponentWrapper, [{
    key: "create",
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var component = new this.wrapper(_objectSpread2({
        parent: this.parent
      }, options));
      component.$scopedSlots = this.parent.$scopedSlots;
      component.$mount();
      return component;
    }
  }], [{
    key: "factory",
    value: function factory(parent, wrapper) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var factory = new ComponentWrapper(parent, wrapper);
      return {
        get htmlElement() {
          return this.compoenent.$el;
        },

        created: function created(grid) {
          this.compoenent = factory.create(_objectSpread2({
            grid: grid
          }, options));
        },
        prepare: function prepare(grid, state) {
          if (this.compoenent.state) {
            this.compoenent.state = state;
          }

          fnCall(this.compoenent.$options.prepare, arguments, this.compoenent);
        },
        paint: function paint(ctx, state, w, h) {
          fnCall(this.compoenent.$options.paint, arguments, this.compoenent);
        },
        dispose: function dispose() {},

        /**
         * ItemEditor 인터페이스
         */
        getSaveValue: function getSaveValue() {
          return fnCall(this.compoenent.$options.getSaveValue, arguments, this.compoenent);
        }
      };
    }
  }]);

  return ComponentWrapper;
}();

var vueComponentProps = ['render', 'name'];

function isVueExtendComponent(component) {
  return component instanceof Function && component['super'] === Vue$1;
}

function buildFactory(parent, template) {
  var component = null;

  if (isVueExtendComponent(template)) {
    component = template;
  } else if (template && _typeof(template) === 'object' && vueComponentProps.every(function (p) {
    return p in template;
  })) {
    component = Vue$1.extend(template);
  }

  if (component) {
    return Object.freeze(ComponentWrapper.factory(parent, component));
  }

  return template;
}

function templateToFactory(parent, template) {
  var factory = null;

  if (!isVueExtendComponent(template) && template instanceof Function) {
    factory = function factory() {
      return buildFactory(parent, template.apply(parent, arguments));
    };
  } else {
    factory = buildFactory(parent, template);
  }

  return factory || template;
}

var Observer = new Vue$1.observable({}).__ob__.constructor;
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

var TachyonItemRenderer = Vue$1.extend({
  name: 'tachyon-item-renderer',
  inject: {
    grid: {
      default: null
    }
  },
  data: function data() {
    return {
      state: {}
    };
  },
  computed: {
    item: function item() {
      return this.state.item;
    },
    cellPosition: function cellPosition() {
      return this.state.cellPosition;
    },
    column: function column() {
      return this.state.column;
    },
    label: function label() {
      var v = this.state.label;
      return v != null ? '' + v : '';
    },
    staticClass: function staticClass() {
      return '';
    },
    attrs: function attrs() {
      return {
        selected: this.state.selected,
        hovered: this.state.hovered
      };
    },
    scopedProps: function scopedProps() {
      return {
        state: this.state,
        item: this.item,
        column: this.column,
        cell: this.state.cell,
        cellPosition: this.cellPosition,
        label: this.label
      };
    }
  },
  methods: {
    genLabel: function genLabel() {
      if (!this.item) {
        return null;
      }

      var children = [];

      if (this.$scopedSlots.itemRenderer) {
        children.push(this.$scopedSlots.itemRenderer(this.scopedProps));
      } else {
        children.push(this.label);
      }

      return children;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.staticClass,
      attrs: this.attrs
    }, this.genLabel());
  }
});

var TachyonHeaderRenderer = Vue$1.extend({
  name: 'tachyon-header-renderer',
  inject: {
    grid: {
      default: null
    }
  },
  data: function data() {
    return {
      state: {}
    };
  },
  computed: {
    cell: function cell() {
      return this.state.cellPosition;
    },
    column: function column() {
      return this.state.column;
    },
    label: function label() {
      var v = this.state.label;
      return v != null ? '' + v : '';
    },
    staticClass: function staticClass() {
      return '';
    },
    attrs: function attrs() {
      return {
        selected: this.state.selected,
        hovered: this.state.hovered
      };
    },
    scopedProps: function scopedProps() {
      return {
        state: this.state,
        column: this.column,
        label: this.label
      };
    }
  },
  methods: {
    genLabel: function genLabel() {
      var children = [];

      if (this.$scopedSlots.headerRenderer) {
        children.push(this.$scopedSlots.headerRenderer(this.scopedProps));
      } else {
        children.push(this.label);
      }

      return children;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.staticClass,
      attrs: this.attrs
    }, this.genLabel());
  }
});

var TachyonItemEditor = Vue$1.extend({
  name: 'tachyon-item-editor',
  inject: {
    grid: {
      default: null
    }
  },
  data: function data() {
    return {
      state: {}
    };
  },
  computed: {
    item: function item() {
      return this.state.item;
    },
    cellPosition: function cellPosition() {
      return this.state.cellPosition;
    },
    column: function column() {
      return this.state.column;
    },
    label: function label() {
      var v = this.state.label;
      return v != null ? '' + v : '';
    },
    staticClass: function staticClass() {
      return '';
    },
    attrs: function attrs() {
      return {
        selected: this.state.selected,
        hovered: this.state.hovered
      };
    },
    scopedProps: function scopedProps() {
      return {
        state: this.state,
        item: this.item,
        column: this.column,
        cell: this.state.cell,
        cellPosition: this.cellPosition,
        label: this.label
      };
    }
  },
  methods: {
    genLabel: function genLabel() {
      if (!this.item) {
        return null;
      }

      var children = [];

      if (this.$scopedSlots.itemEditor) {
        children.push(this.$scopedSlots.itemEditor(this.scopedProps));
      } else {
        children.push(this.label);
      }

      return children;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.staticClass,
      attrs: this.attrs
    }, this.genLabel());
  }
});

var TachyonColumn = {
  name: 'tachyon-column',
  mixins: [ColumnCore],
  props: {
    mode: {
      type: String,
      default: 'dom'
    },
    headerRenderer: {
      type: [Function, Object],
      default: null
    },
    itemRenderer: {
      type: [Function, Object],
      default: null
    },
    itemEditor: {
      type: [Function, Object],
      default: null
    }
  },
  computed: {
    columnInstance: function columnInstance() {
      return unobserve(tachyon.createColumn());
    }
  },
  watch: {
    mode: {
      immediate: true,
      handler: function handler(value) {
        this.updateItemRenderer();
      }
    },
    headerRenderer: {
      immediate: true,
      handler: function handler(value) {
        this.updateHeaderRenderer();
      }
    },
    itemRenderer: {
      immediate: true,
      handler: function handler(value) {
        this.updateItemRenderer();
      }
    },
    itemEditor: {
      immediate: true,
      handler: function handler(value) {
        this.updateItemEditor();
      }
    }
  },
  methods: {
    updateHeaderRenderer: function updateHeaderRenderer() {
      var factory = null;

      if (this.$vnode.data.scopedSlots && this.$vnode.data.scopedSlots.headerRenderer) {
        factory = templateToFactory(this, TachyonHeaderRenderer);
      } else if (this.headerRenderer) {
        factory = templateToFactory(this, this.headerRenderer);
      }

      this.columnInstance.headerRenderer = factory;
    },
    updateItemRenderer: function updateItemRenderer() {
      var factory = null;

      if (this.mode === 'canvas') {
        factory = tachyon.component.Renderer.defaultCanvasItemRenderer;
      } else if (this.$vnode.data.scopedSlots && this.$vnode.data.scopedSlots.itemRenderer) {
        factory = templateToFactory(this, TachyonItemRenderer);
      } else if (this.itemRenderer) {
        factory = templateToFactory(this, this.itemRenderer);
      }

      this.columnInstance.itemRenderer = factory;
    },
    updateItemEditor: function updateItemEditor() {
      var factory = null;

      if (this.$vnode.data.scopedSlots && this.$vnode.data.scopedSlots.itemEditor) {
        factory = templateToFactory(this, TachyonItemEditor);
      } else if (this.itemEditor) {
        factory = templateToFactory(this, this.itemEditor);
      }

      this.columnInstance.itemEditor = factory;
    }
  }
};

var GridProperties = ['items', 'columns', 'labelFunction', 'rowHeight', 'headerRowHeight', 'autoRowHeight', 'rowCount', 'maxRowCount', 'useNullItemRenderer', 'autoMerge', 'frozenLeft', 'frozenRight', 'frozenTop', 'frozenBottom', 'mergeCompare', 'sortableColumns', 'resizableColumns', 'draggableColumns', 'editable', 'editOnKeys', 'editOnEvents', 'selectionMode', 'theme', 'styles', 'pasteFromClipboard', 'selectOnDrag'];
var GridMethods = ['itemToLabel', 'scrollToCell', 'focus', 'getSortColumns', 'sortByColumns', 'getAddon', 'addAddon', 'addColumn', 'addColumnAt', 'addColumns', 'addColumnsAt', 'removeColumn', 'removeColumnsAt', 'getMergeCells', 'addMergeCells', 'addMergeCell', 'removeMergeCell', 'removeMergeCells', 'invalidate', 'validateNow', 'lockDisplay', 'unlockDisplay', 'isCellEditable', 'startEdit', 'endEdit', 'cancelEdit', 'isEditing', 'analysisMergeAll'];
var GridEvents = ['selection-changing', 'selection-change', 'collection-change', 'node-change', 'column-collection-change', 'column-node-change', 'scroll', 'normalized-columns-change', 'item-over', 'item-out', 'item-down', 'item-up', 'item-drag', 'item-click', 'item-double-click', 'item-edit-starting', 'item-edit-start', 'item-edit-ending', 'item-edit-end', 'item-edit-cancel', 'header-double-click', 'header-down', 'header-up', 'header-click', 'header-drag', 'header-drop', 'header-out', 'header-over', 'selection-drag-start', 'selection-drag-end'];
var defaultProps$1 = {};
var defaultWatch$1 = {};
var defaultMethods = {};

function setupProp$1(name) {
  defaultProps$1[name] = undefined;

  defaultWatch$1[name] = function (newVal, oldVal) {
    if (this.gridInstance) {
      this.gridInstance[name] = newVal;
    }
  };
}

GridProperties.forEach(function (name) {
  setupProp$1(name);
});
GridMethods.forEach(function (name) {
  defaultMethods[name] = function () {
    if (this.gridInstance) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.gridInstance[name].apply(this.gridInstance, args);
    }
  };
});
var GridCore = {
  name: 'grid-core',
  provide: function provide() {
    return {
      grid: this
    };
  },
  props: _objectSpread2(_objectSpread2({}, defaultProps$1), {}, {
    //'headerRenderer', 'itemRenderer', 'mergeItemRenderer', 'nullItemRenderer',
    headerRenderer: {
      type: [Function, Object]
    },
    itemRenderer: {
      type: [Function, Object]
    },
    mergeItemRenderer: {
      type: [Function, Object]
    },
    nullItemRenderer: {
      type: [Function, Object]
    },
    itemEditor: {
      type: [Function, Object]
    }
  }),
  data: function data() {
    return {
      gridInstance: null,
      selectedItems: function selectedItems() {
        return [];
      },
      selectedItem: null,
      selectedIndices: function selectedIndices() {
        return [];
      },
      selectedIndex: -1,
      selectedCells: function selectedCells() {
        return [];
      },
      selectedCell: null,
      pendingValue: this.value,
      deferredFunc: null
    };
  },
  computed: {
    collection: function collection() {
      return this.items && this.gridInstance && this.gridInstance.collection || null;
    },
    staticClass: function staticClass() {
      return "".concat(this.$options.name, "-wrapper");
    },
    normalizedColumns: function normalizedColumns() {
      if (this.items && this.columns) ;

      return this.gridInstance && this.gridInstance.normalizedColumns || [];
    }
  },
  watch: _objectSpread2(_objectSpread2({}, defaultWatch$1), {}, {
    gridInstance: function gridInstance(grid) {
      var _this = this;

      if (grid) {
        GridEvents.forEach(function (type) {
          grid.addEventListener(type, _this.onGridInstanceEvents);
        });
        var rendererProps = ['headerRenderer', 'itemRenderer', 'mergeItemRenderer', 'nullItemRenderer', 'itemEditor'];
        var props = this.$props;

        for (var p in props) {
          var value = props[p];

          if (value !== undefined) {
            if (rendererProps.indexOf(p) >= 0) {
              grid[p] = templateToFactory(this, value);
            } else {
              grid[p] = value;
            }
          }
        }

        if (this.deferredFunc) {
          this.deferredFunc();
          this.deferredFunc = null;
        }

        grid.hookFreeElement = function (element) {
          if (element.htmlElement && element.htmlElement.__vue__) {
            element.htmlElement.__vue__.$destroy();
          }

          return false;
        };
      }
    },
    headerRenderer: function headerRenderer(value) {
      this.gridInstance.headerRenderer = templateToFactory(this, value);
    },
    itemRenderer: function itemRenderer(value) {
      this.gridInstance.itemRenderer = templateToFactory(this, value);
    },
    mergeItemRenderer: function mergeItemRenderer(value) {
      this.gridInstance.mergeItemRenderer = templateToFactory(this, value);
    },
    nullItemRenderer: function nullItemRenderer(value) {
      this.gridInstance.nullItemRenderer = templateToFactory(this, value);
    },
    itemEditor: function itemEditor(value) {
      this.gridInstance.itemEditor = templateToFactory(this, value);
    },
    value: {
      handler: function handler(value) {
        if (value && !Array.isArray(value)) {
          value = [value];
        }

        this.setSelections(value);
      }
    },
    selectedItems: function selectedItems(value) {
      this.setSelections(value);
    },
    selectedItem: function selectedItem(value) {
      this.setSelections(value);
    },
    selectedIndices: function selectedIndices(value) {
      var _this2 = this;

      this.setSelections((value || []).map(function (i) {
        return _this2.items[i];
      }));
    },
    selectedIndex: function selectedIndex(value) {
      this.setSelections(this.items[value]);
    },
    selectedCells: function selectedCells(value) {
      this.setSelections(value);
    },
    selectedCell: function selectedCell(value) {
      this.setSelections(value);
    }
  }),
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;

    if (this.gridInstance) {
      GridEvents.forEach(function (type) {
        _this3.gridInstance.removeEventListener(type, _this3.onGridInstanceEvents);
      });
      this.gridInstance.destroy();
    }
  },
  methods: _objectSpread2(_objectSpread2({}, defaultMethods), {}, {
    genColumns: function genColumns() {
      var slots = this.$slots.default || [];
      var found = slots.find(function (vnode) {
        return vnode.tag === 'columns';
      });
      var children = found ? found.children : [];
      return this.$createElement('template', {
        ref: 'columns'
      }, children);
    },
    setSelections: function setSelections(value) {
      var _this4 = this;

      if (this.lockSelect) {
        return;
      }

      if (!this.gridInstance) {
        this.deferredFunc = function () {
          _this4.setSelections(value);
        };

        return;
      }

      if (value != null) {
        value = Array.isArray(value) ? value : [value];
      }

      if (!this.gridInstance.isCellMode) {
        this.gridInstance.selectedItems = value;
      } else {
        this.gridInstance.selectedCells = value;
      }

      this.pendingValue = null;
    },
    syncSelection: function syncSelection() {
      var _this5 = this;

      var grid = this.gridInstance;
      var selector = grid.selector;
      this.lockSelect = true;
      this.selectedItems = grid.selectedItems;
      this.selectedItem = grid.selectedItem;
      this.selectedIndices = grid.selectedIndices;
      this.selectedIndex = grid.selectedIndex;
      this.selectedCells = grid.selectedCells;
      this.selectedCell = grid.selectedCell;
      var result;

      if (selector.isRowMode) {
        result = selector.isMultipleMode ? grid.selectedItems : grid.selectedItem;
      } else {
        result = selector.isMultipleMode ? grid.selectedCells : grid.selectedCell;
      }

      this.$emit('input', result);
      this.$nextTick(function () {
        _this5.lockSelect = false;
      });
    },
    onGridInstanceEvents: function onGridInstanceEvents(event) {
      var type = event.type,
          detail = event.detail;

      if (type === 'selection-change') {
        this.syncSelection();
      } else if (type === 'collection-change' && detail.kind === 'reset') {
        if (this.pendingValue) {
          this.setSelections(this.pendingValue);
        }
      } else ;

      this.$emit(type, event);
    }
  }),
  render: function render(h) {
    var children = [this.genColumns()];
    return h('div', {
      staticClass: this.staticClass
    }, children);
  }
};

var TachyonGrid = {
  name: 'tachyon-grid',
  mixins: [GridCore],
  mounted: function mounted() {
    var instance = this.gridInstance;

    if (!instance) {
      instance = this.gridInstance = unobserve(tachyon.createGrid(this.$el, {}));
    }

    var node = this.$refs.columns;

    if (node && node.parentElement) {
      node.parentElement.removeChild(node);
    }

    this.gridInstance.columns = this.$children.map(function (child) {
      return child.columnInstance;
    });
  },
  methods: {}
};

var TachyonTreeItemRenderer = Vue$1.extend({
  name: 'tachyon-tree-item-renderer',
  inject: {
    grid: {
      default: null
    }
  },
  props: {
    indent: {
      type: Number,
      default: 30
    }
  },
  data: function data() {
    return {
      state: function state() {
        return {};
      },
      hasChildren: false,
      level: -1,
      isOpened: false
    };
  },
  computed: {
    item: function item() {
      return this.state.item;
    },
    column: function column() {
      return this.state.column;
    },
    label: function label() {
      return this.state.label;
    },
    staticClass: function staticClass() {
      return 'tachyon-tree__item';
    },
    attrs: function attrs() {
      return {
        selected: this.state.selected,
        hovered: this.state.hovered
      };
    },
    scopedProps: function scopedProps() {
      return {
        item: this.state.item,
        cell: this.state.cell,
        cellPosition: this.state.cellPosition,
        column: this.state.column,
        label: this.label,
        level: this.level,
        isOpened: this.isOpened,
        hasChildren: this.hasChildren,
        state: this.state
      };
    },
    calculatedLeft: function calculatedLeft() {
      if (this.column && this.column.boxMode) {
        return 0;
      }

      return (this.level || 0) * this.indent + 'px';
    }
  },
  methods: {
    genLabel: function genLabel() {
      if (!this.item) {
        return null;
      }

      var children = [];

      if (this.$scopedSlots.itemRenderer) {
        children.push(this.$scopedSlots.itemRenderer(this.scopedProps));
      } else {
        children.push(this.label);
      }

      return children;
    },
    genContent: function genContent() {
      return [this.genToggle(), this.genLabel()];
    },
    genToggle: function genToggle() {
      var _this = this;

      var children = [];

      if (this.$scopedSlots.toggle) {
        children.push(this.$scopedSlots.toggle(this.scopedProps));
      } else {
        children.push(this.isOpened ? '-' : '+');
      }

      return this.$createElement('div', {
        staticClass: this.staticClass + '__toggle',
        class: {
          'toggle--open': this.isOpened
        },
        style: {
          visibility: this.hasChildren ? '' : 'hidden'
        },
        on: {
          mousedown: function mousedown(event) {
            event.stopPropagation();

            _this.grid.toggleNode(_this.item);
          }
        }
      }, children);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.staticClass,
      class: _defineProperty({}, this.staticClass + '--leaf', !this.hasChildren),
      style: {
        paddingLeft: this.calculatedLeft
      },
      attrs: this.attrs
    }, this.genContent());
  },

  /**
   * Tachyon Life Cycle
   * 렌더러 갱신시 호출됩니다.
   * @param grid
   * @param state
   */
  prepare: function prepare(grid, state) {
    var item = state.item;
    this.hasChildren = grid.hasChildren(item);
    this.level = grid.getNodeLevel(item);
    this.isOpened = grid.isOpenNode(item);
  }
});

var TachyonTreeColumn = {
  name: 'tachyon-tree-column',
  mixins: [ColumnCore],
  props: {
    indent: {
      type: Number,
      default: 20
    },

    /**
     * 노드 모양을 '┌' 보이게 합니다.
     * @returns {Boolean}
     */
    boxMode: {
      type: Boolean,
      default: false
    },
    headerRenderer: {
      type: [Function, Object],
      default: null
    },
    itemRenderer: {
      type: [Function, Object],
      default: TachyonTreeItemRenderer
    }
  },
  computed: {
    columnInstance: function columnInstance() {
      return unobserve(tachyon.createTreeColumn());
    }
  },
  watch: {
    indent: createWatch('indent'),
    boxMode: createWatch('boxMode'),
    headerRenderer: {
      immediate: true,
      handler: function handler(value) {
        if (value) {
          this.columnInstance.headerRenderer = templateToFactory(this, value);
        }
      }
    },
    itemRenderer: {
      immediate: true,
      handler: function handler(value) {
        if (value) {
          this.columnInstance.itemRenderer = templateToFactory(this, this.itemRenderer);
        }
      }
    }
  }
};

var TachyonTreeGrid = {
  name: 'tachyon-tree-grid',
  mixins: [GridCore],
  props: {
    autoExpandLevel: {
      type: Number,
      default: 0
    }
  },
  mounted: function mounted() {
    var instance = this.gridInstance;

    if (!instance) {
      instance = this.gridInstance = unobserve(tachyon.createTreeGrid(this.$el, {}));
    }

    var node = this.$refs.columns;

    if (node && node.parentElement) {
      node.parentElement.removeChild(node);
    }

    this.gridInstance.columns = this.$children.map(function (child) {
      return child.columnInstance;
    });
  },
  destroyed: function destroyed() {},
  methods: {
    toggleNode: function toggleNode(node) {
      return this.gridInstance.toggleNode(node);
    }
  }
};

var components = /*#__PURE__*/Object.freeze({
__proto__: null,
TachyonColumn: TachyonColumn,
TachyonGrid: TachyonGrid,
TachyonTreeColumn: TachyonTreeColumn,
TachyonTreeGrid: TachyonTreeGrid
});

var __TACHYON_VERSION__ = '1.0.0';

var _install = function () {
  var installed = false;
  return function (Vue, components) {
    if (installed) {
      return;
    }

    if (components) {
      for (var key in components) {
        Vue.component(key, components[key]);
      }

      installed = true;
    }
  };
}();

var TachyonVue = {
  'version': __TACHYON_VERSION__,
  'install': function install(Vue, options) {
    _install(Vue, components);
  }
};
var Vue = window && window.Vue;

if (Vue) {
  Vue.use(TachyonVue);
}

export default TachyonVue;
export { ComponentWrapper, TachyonColumn, TachyonGrid, TachyonTreeColumn, TachyonTreeGrid };
//# sourceMappingURL=tachyon.vue.esm.js.map
