'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var HTMLStringComponent = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(HTMLStringComponent, _PureComponent);

  function HTMLStringComponent() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HTMLStringComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HTMLStringComponent.__proto__ || (0, _getPrototypeOf2.default)(HTMLStringComponent)).call.apply(_ref, [this].concat(args))), _this), _this.getContent = function (ref) {
      _this.content = ref;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HTMLStringComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context;

      this.instance = this.content.innerHTML;
      context.centralizedUpdates({
        name: this.name,
        data: this.content.innerHTML
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;

      context.centralizedUpdates({
        name: this.name,
        data: this.content.innerHTML
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.context;

      context.centralizedUpdates({
        name: this.name,
        data: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { ref: this.getContent, style: containerStyle },
        children || null
      );
    }
  }]);
  return HTMLStringComponent;
}(_react.PureComponent), _class.contextTypes = {
  centralizedUpdates: _propTypes2.default.func
}, _class.displayName = 'HTMLComponent', _temp2);
exports.default = HTMLStringComponent;