'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _BaseControl2 = require('./BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomHOC = function CustomHOC(WrappedComponent) {
  return function (_BaseControl) {
    (0, _inherits3.default)(_class2, _BaseControl);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class2.__proto__ || (0, _getPrototypeOf2.default)(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.control = null, _this.getContainer = function (ref) {
        _this.container = ref;
      }, _this.initialize = function () {
        var _this2 = _this,
            container = _this2.container,
            mapInstance = _this2.mapInstance;

        mapInstance.getContainer().appendChild(container);
        return container;
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
        this.control = (0, _core.initCustomControl)(this.config, this.initialize, this.mapInstance);
      }
    }, {
      key: 'render',
      value: function render() {
        var context = this.context;
        var children = this.props.children;

        return _react2.default.createElement(
          'div',
          { ref: this.getContainer },
          _react2.default.createElement(WrappedComponent, (0, _extends3.default)({
            map: context.getMapInstance()
          }, this.props)),
          children
        );
      }
    }]);
    return _class2;
  }(_BaseControl3.default);
};

exports.default = CustomHOC;