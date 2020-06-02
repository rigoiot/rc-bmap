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

var _core = require('../../../core');

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _MaxContent = require('./MaxContent');

var _MaxContent2 = _interopRequireDefault(_MaxContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoWindow = (_temp2 = _class = function (_BaseOverlay) {
  (0, _inherits3.default)(InfoWindow, _BaseOverlay);

  function InfoWindow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InfoWindow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InfoWindow.__proto__ || (0, _getPrototypeOf2.default)(InfoWindow)).call.apply(_ref, [this].concat(args))), _this), _this.getRealOverlay = function () {
      return new _core.InfoWindow(_this.config, _this.mapInstance);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return InfoWindow;
}(_BaseOverlay3.default), _class.Content = _Content2.default, _class.Title = _Title2.default, _class.MaxContent = _MaxContent2.default, _temp2);
exports.default = InfoWindow;