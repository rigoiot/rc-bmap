'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('../../core');

var _core2 = _interopRequireDefault(_core);

var _ContextMenu = require('../ContextMenu');

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _PlaceHolder = require('./PlaceHolder');

var _PlaceHolder2 = _interopRequireDefault(_PlaceHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillStyle = {
  width: '100%',
  height: '100%'
};

var Map = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(Map, _PureComponent);

  function Map() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.configComponent = ['Point', 'PlaceHolder'], _this.centralizedUpdates = function (_ref2) {
      var name = _ref2.name,
          data = _ref2.data;

      var configName = _core.Util.firstLowerCase(name);
      _this.config[configName] = data;
    }, _this.createMapInstance = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(config) {
        var _this$props, mounted, name, mapInstance;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, mounted = _this$props.mounted, name = _this$props.name;
                _context.next = 3;
                return (0, _core2.default)(_this.mapContainer, config);

              case 3:
                _this.map = _context.sent;
                mapInstance = _this.map.instance;

                if (name) {
                  global['' + name] = mapInstance;
                }
                _this.forceUpdate(function () {
                  if (mounted) {
                    mounted(mapInstance);
                  }
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.getMapContainer = function (ref) {
      _this.mapContainer = ref;
    }, _this.getMapInstance = function () {
      return _this.map && _this.map.instance;
    }, _this.renderChildren = function () {
      var children = _this.props.children;

      return _react2.default.Children.map(children, function (child) {
        if (_this.map || child && _this.configComponent.indexOf(child.type.displayName) > -1) {
          return child;
        }
        return null;
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // 仅用作config的组件


  (0, _createClass3.default)(Map, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        getMapInstance: this.getMapInstance,
        centralizedUpdates: this.centralizedUpdates
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          children = _props.children,
          resetProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

      this.config = (0, _extends3.default)({}, this.config, resetProps);
      this.createMapInstance(this.config);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props2 = this.props,
          children = _props2.children,
          resetProps = (0, _objectWithoutProperties3.default)(_props2, ['children']);

      this.config = (0, _extends3.default)({}, this.config, resetProps);
      if (this.map) {
        this.map.repaint(this.config);
      }
    }

    /**
     * 内部子组件属性更新触发方法
     */


    /**
     * 初始化地图实例
     */


    /**
     * 获得地图容器ref
     */


    /**
     * 获得地图实例
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: this.getMapContainer, style: fillStyle },
        this.renderChildren()
      );
    }
  }]);
  return Map;
}(_react.PureComponent), _class.PlaceHolder = _PlaceHolder2.default, _class.ContextMenu = _ContextMenu2.default, _class.childContextTypes = {
  getMapInstance: _propTypes2.default.func,
  centralizedUpdates: _propTypes2.default.func
}, _temp2);
exports.default = Map;


Map.propTypes = {
  // 
  ak: _propTypes2.default.string,
  // 地图实例别名
  // 设置后可通过window[name]进行获取
  name: _propTypes2.default.string,
  // 当前缩放等级
  zoom: _propTypes2.default.number,
  // 当前百度地图版本, 2 or 3
  version: _propTypes2.default.number,
  // 最小缩放等级
  minZoom: _propTypes2.default.number,
  // 最大缩放等级
  maxZoom: _propTypes2.default.number,
  // 设置地图默认的鼠标指针样式
  defaultCursor: _propTypes2.default.string,
  // 设置拖拽地图时的鼠标指针样式
  draggingCursor: _propTypes2.default.string,
  // 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
  mapStyle: _propTypes2.default.object,
  // 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
  mapStyleV2: _propTypes2.default.object,
  // 设置地图类型
  mapType: _propTypes2.default.string,
  // 地图初始化完成回调函数
  mounted: _propTypes2.default.func,
  // 是否启用使用高分辨率地图
  highResolution: _propTypes2.default.bool,
  // 自动适应地图容器变化
  autoResize: _propTypes2.default.bool,
  // 地图可点
  mapClick: _propTypes2.default.bool,
  // 拖拽
  dragging: _propTypes2.default.bool,
  // 滚轮缩放
  scrollWheelZoom: _propTypes2.default.bool,
  // 双击放大
  doubleClickZoom: _propTypes2.default.bool,
  // 键盘操作
  keyboard: _propTypes2.default.bool,
  // 惯性拖拽
  inertialDragging: _propTypes2.default.bool,
  // 连续缩放
  continuousZoom: _propTypes2.default.bool,
  // 双指操作
  pinchToZoom: _propTypes2.default.bool
};