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

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

var _circle = require('../options/circle');

var _circle2 = _interopRequireDefault(_circle);

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCircleOptions = function getCircleOptions(config) {
  return {
    strokeColor: config.strokeColor,
    fillColor: config.fillColor,
    strokeWeight: config.strokeWeight,
    strokeOpacity: config.strokeOpacity,
    fillOpacity: config.fillOpacity,
    strokeStyle: config.strokeStyle,
    enableMassClear: config.massClear,
    enableClicking: config.clicking
  };
};

var Circle = function (_BaseOverlay) {
  (0, _inherits3.default)(Circle, _BaseOverlay);

  function Circle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Circle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).call.apply(_ref, [this].concat(args))), _this), _this.outOfRangeOpts = ['clicking'], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Circle, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getCircleOptions(config);
      var center = _utils2.default.convert2BPoint(config.center);
      this.instance = _map2.default.BCircle(center, config.radius, options);
      this.map.addOverlay(this.instance);
      this.processOptions(config);
    }
  }, {
    key: 'processOptions',
    value: function processOptions(config) {
      if (config.center) {
        config.center = _utils2.default.convert2BPoint(config.center);
      }
      _utils2.default.processSetOptions(this.instance, _circle2.default.SET, config);
      _utils2.default.processBooleanOptions(this.instance, _circle2.default.BOOLEAN, config);
    }
  }]);
  return Circle;
}(_BaseOverlay3.default);

exports.default = Circle;