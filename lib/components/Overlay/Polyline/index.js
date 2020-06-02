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

var _class, _temp2;

var _IconSequence = require('./IconSequence');

var _IconSequence2 = _interopRequireDefault(_IconSequence);

var _BaseOverlay2 = require('../BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _core = require('../../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Polyline = (_temp2 = _class = function (_BaseOverlay) {
  (0, _inherits3.default)(Polyline, _BaseOverlay);

  function Polyline() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Polyline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Polyline.__proto__ || (0, _getPrototypeOf2.default)(Polyline)).call.apply(_ref, [this].concat(args))), _this), _this.getRealOverlay = function () {
      return new _core.Polyline(_this.config, _this.mapInstance);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Polyline;
}(_BaseOverlay3.default), _class.IconSequence = _IconSequence2.default, _temp2);
exports.default = Polyline;