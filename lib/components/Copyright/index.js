'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containerStyle = {
  position: 'absolute',
  top: -10000
};

var Copyright = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(Copyright, _PureComponent);

  function Copyright() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Copyright);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Copyright.__proto__ || (0, _getPrototypeOf2.default)(Copyright)).call.apply(_ref, [this].concat(args))), _this), _this.getCopyright = function () {
      var _this2 = _this,
          context = _this2.context;
      var _this$props = _this.props,
          index = _this$props.index,
          bounds = _this$props.bounds;

      return {
        id: index,
        bounds: bounds || context.getMapInstance().getBounds(),
        content: _this.container.innerHTML
      };
    }, _this.getContainer = function (ref) {
      _this.container = ref;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Copyright, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context;
      var index = this.props.index;

      context.addCopyright(index, this.getCopyright());
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;
      var index = this.props.index;

      context.updateCopyright(index, this.getCopyright());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.context;
      var index = this.props.index;

      context.removeCopyright(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { ref: this.getContainer, style: containerStyle },
        children
      );
    }
  }]);
  return Copyright;
}(_react.PureComponent), _class.contextTypes = {
  getMapInstance: _propTypes2.default.func,
  addCopyright: _propTypes2.default.func,
  updateCopyright: _propTypes2.default.func,
  removeCopyright: _propTypes2.default.func
}, _temp2);
exports.default = Copyright;