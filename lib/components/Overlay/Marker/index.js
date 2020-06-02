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

var _BaseOverlay2 = require('../BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _ContextMenu = require('../../ContextMenu');

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Symbol2 = require('../Symbol');

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _core = require('../../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marker = (_temp2 = _class = function (_BaseOverlay) {
  (0, _inherits3.default)(Marker, _BaseOverlay);

  function Marker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Marker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Marker.__proto__ || (0, _getPrototypeOf2.default)(Marker)).call.apply(_ref, [this].concat(args))), _this), _this.getRealOverlay = function () {
      // symbol 覆盖 icon 属性
      if (_this.config.symbol) {
        _this.config.icon = _this.config.symbol;
      }
      return new _core.Marker(_this.config, _this.mapInstance);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Marker;
}(_BaseOverlay3.default), _class.ContextMenu = _ContextMenu2.default, _class.Icon = _Icon2.default, _class.Symbol = _Symbol3.default, _temp2);
exports.default = Marker;