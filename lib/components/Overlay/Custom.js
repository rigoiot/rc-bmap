'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('../../core');

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAP_PANES = _core.Constants.MAP_PANES;

// fix: #106 the custom overlay's container position should be absolute

var containerStyle = {
  position: 'absolute'
};

var CustomHOC = function CustomHOC(WrappedComponent) {
  return function (_BaseOverlay) {
    (0, _inherits3.default)(_class2, _BaseOverlay);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class2.__proto__ || (0, _getPrototypeOf2.default)(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.overlay = null, _this.getContainer = function (ref) {
        _this.container = ref;
      }, _this.initialize = function () {
        var _this2 = _this,
            container = _this2.container,
            mapInstance = _this2.mapInstance;

        mapInstance.getPanes()[MAP_PANES.MARKER].appendChild(container);
        return container;
      }, _this.draw = function () {
        var _this3 = _this,
            container = _this3.container,
            mapInstance = _this3.mapInstance;
        var _this$config = _this.config,
            point = _this$config.point,
            _this$config$offset = _this$config.offset,
            offset = _this$config$offset === undefined ? { width: 0, height: 0 } : _this$config$offset;

        var bdPoint = _core.Util.convert2BPoint((0, _extends3.default)({}, point));
        // 当地图scroll时，container的高度为0 宽度为0，导致计算出现错误，所以存储上次有效宽高
        _this.lastWidth = container.offsetWidth > 0 ? container.offsetWidth : _this.lastWidth;
        _this.lastHeight = container.offsetHeight > 0 ? container.offsetHeight : _this.lastHeight;

        var position = mapInstance.pointToOverlayPixel(bdPoint);
        container.style.left = position.x - _this.lastWidth / 2 + offset.width / 2 + 'px';
        container.style.top = position.y - _this.lastHeight / 2 + offset.height / 2 + 'px';
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class2, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var context = this.context;
        var _props = this.props,
            children = _props.children,
            resetProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

        this.config = (0, _extends3.default)({}, this.config, resetProps);
        this.mapInstance = context.getMapInstance();
        this.overlay = (0, _core.initCustomOverlay)(this.config, this.initialize, this.draw, this.mapInstance);
      }
    }, {
      key: 'render',
      value: function render() {
        var context = this.context;
        var children = this.props.children;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { ref: this.getContainer, style: containerStyle },
            _react2.default.createElement(WrappedComponent, (0, _extends3.default)({
              map: context.getMapInstance()
            }, this.props)),
            children
          )
        );
      }
    }]);
    return _class2;
  }(_BaseOverlay3.default);
};

exports.default = CustomHOC;