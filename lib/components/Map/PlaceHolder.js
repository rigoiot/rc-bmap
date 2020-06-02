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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

var PlaceHolder = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(PlaceHolder, _PureComponent);

  function PlaceHolder() {
    (0, _classCallCheck3.default)(this, PlaceHolder);
    return (0, _possibleConstructorReturn3.default)(this, (PlaceHolder.__proto__ || (0, _getPrototypeOf2.default)(PlaceHolder)).apply(this, arguments));
  }

  (0, _createClass3.default)(PlaceHolder, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children || _react2.default.createElement(
        'div',
        { style: style },
        '\u5730\u56FE\u52A0\u8F7D\u4E2D...'
      );
    }
  }]);
  return PlaceHolder;
}(_react.PureComponent), _class.displayName = 'PlaceHolder', _temp);
exports.default = PlaceHolder;