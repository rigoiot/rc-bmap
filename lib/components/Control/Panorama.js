'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _core = require('../../core');

var _BaseControl2 = require('./BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panorama = function (_BaseControl) {
  (0, _inherits3.default)(Panorama, _BaseControl);

  function Panorama() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Panorama);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Panorama.__proto__ || (0, _getPrototypeOf2.default)(Panorama)).call.apply(_ref, [this].concat(args))), _this), _this.getRealControl = function () {
      return new _core.Panorama(_this.config, _this.mapInstance);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Panorama;
}(_BaseControl3.default);

exports.default = Panorama;