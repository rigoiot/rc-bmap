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

var _polygon = require('../options/polygon');

var _polygon2 = _interopRequireDefault(_polygon);

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPolygonOptions = function getPolygonOptions(config) {
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

var processPoints = function processPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return points.map(function (item) {
    return _utils2.default.convert2BPoint(item);
  });
};

var Polygon = function (_BaseOverlay) {
  (0, _inherits3.default)(Polygon, _BaseOverlay);

  function Polygon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Polygon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).call.apply(_ref, [this].concat(args))), _this), _this.outOfRangeOpts = ['clicking'], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Polygon, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getPolygonOptions(config);
      var points = processPoints(config.path);
      this.instance = _map2.default.BPolygon(points, options);
      this.map.addOverlay(this.instance);
      this.processOptions(config);
    }
  }, {
    key: 'processOptions',
    value: function processOptions(config) {
      if (config.path && Array.isArray(config.path)) {
        config.path = processPoints(config.path);
      }

      _utils2.default.processSetOptions(this.instance, _polygon2.default.SET, config);
      _utils2.default.processBooleanOptions(this.instance, _polygon2.default.BOOLEAN, config);
    }
  }]);
  return Polygon;
}(_BaseOverlay3.default);

exports.default = Polygon;