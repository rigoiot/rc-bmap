'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _Common2 = require('./Common');

var _Common3 = _interopRequireDefault(_Common2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bounds = (_temp2 = _class = function (_Common) {
  (0, _inherits3.default)(Bounds, _Common);

  function Bounds() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Bounds);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Bounds.__proto__ || (0, _getPrototypeOf2.default)(Bounds)).call.apply(_ref, [this].concat(args))), _this), _this.getData = function () {
      return {
        name: _this.props.name || 'bounds',
        data: {
          sw: _this.config.sw || _this.props.sw,
          ne: _this.config.ne || _this.props.ne
        }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Bounds;
}(_Common3.default), _class.displayName = 'Bounds', _temp2);
exports.default = Bounds;