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

var _polyline = require('../options/polyline');

var _polyline2 = _interopRequireDefault(_polyline);

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPolylineOptions = function getPolylineOptions(config) {
  return {
    strokeColor: config.strokeColor,
    strokeWeight: config.strokeWeight,
    strokeOpacity: config.strokeOpacity,
    strokeStyle: config.strokeStyle,
    enableMassClear: config.massClear,
    enableClicking: config.clicking,
    icons: config.icons
  };
};

var processPoints = function processPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return points.map(function (item) {
    return _utils2.default.convert2BPoint(item);
  });
};

var Polyline = function (_BaseOverlay) {
  (0, _inherits3.default)(Polyline, _BaseOverlay);

  function Polyline() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Polyline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Polyline.__proto__ || (0, _getPrototypeOf2.default)(Polyline)).call.apply(_ref, [this].concat(args))), _this), _this.outOfRangeOpts = ['clicking'], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Polyline, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getPolylineOptions(config);
      var points = processPoints(config.path);
      this.instance = _map2.default.BPolyline(points, options);
      this.map.addOverlay(this.instance);
      this.processOptions(config);
    }
  }, {
    key: 'processOptions',
    value: function processOptions(config) {
      if (config.path && Array.isArray(config.path)) {
        config.path = processPoints(config.path);
      }

      _utils2.default.processSetOptions(this.instance, _polyline2.default.SET, config);
      _utils2.default.processBooleanOptions(this.instance, _polyline2.default.BOOLEAN, config);
    }
  }]);
  return Polyline;
}(_BaseOverlay3.default);

exports.default = Polyline;