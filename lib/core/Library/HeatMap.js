"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHeatMapOptions = function getHeatMapOptions(config) {
  return {
    radius: config.radius,
    visible: config.visible,
    gradient: config.gradient,
    opacity: config.opacity
  };
};

var HeatMap = (_temp = _class = function () {
  function HeatMap(config, map) {
    (0, _classCallCheck3.default)(this, HeatMap);

    _initialiseProps.call(this);

    this.map = map;
    this.init(config);
  }

  (0, _createClass3.default)(HeatMap, [{
    key: "init",
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getHeatMapOptions(config);
      this.instance = new global.BMapLib.HeatmapOverlay(options);
      this.map.addOverlay(this.instance);
      this.setData(config);
    }
  }]);
  return HeatMap;
}(), _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.repaint = function (config) {
    if (_this.instance) {
      var options = getHeatMapOptions(config);
      _this.instance.setOptions(options);
      _this.setData(config);
    }
  };

  this.setData = function (config) {
    if (config.data) {
      _this.instance.setDataSet({
        max: config.max,
        data: config.data
      });
    }
  };

  this.destroy = function () {
    if (_this.instance) {
      _this.map.removeOverlay(_this.instance);
    }
  };
}, _temp);
exports.default = HeatMap;