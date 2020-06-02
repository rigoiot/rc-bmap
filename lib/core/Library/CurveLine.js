'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp, _initialiseProps;

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurveLineOptions = function getCurveLineOptions(config) {
  return {
    strokeColor: config.strokeColor,
    strokeWeight: config.strokeWeight,
    strokeOpacity: config.strokeOpacity,
    strokeStyle: config.strokeStyle
  };
};

var CurveLine = (_temp = _class = function () {
  function CurveLine(config, map) {
    (0, _classCallCheck3.default)(this, CurveLine);

    _initialiseProps.call(this);

    this.map = map;
    this.init(config);
  }

  (0, _createClass3.default)(CurveLine, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getCurveLineOptions(config);
      var points = this.processPoints(config.path);
      this.instance = new global.BMapLib.CurveLine(points, options);
      this.map.addOverlay(this.instance);
      this.processEditing(config.editing);
    }
  }]);
  return CurveLine;
}(), _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.repaint = function (config) {
    if (_this.instance) {
      _this.instance.disableEditing();
      _this.destroy();
      _this.init(config);
    }
  };

  this.processPoints = function (points) {
    return points.map(function (point) {
      return _utils2.default.convert2BPoint(point);
    });
  };

  this.processEditing = function (editing) {
    if (editing) {
      _this.instance.enableEditing();
    } else {
      _this.instance.disableEditing();
    }
  };

  this.destroy = function () {
    if (_this.instance) {
      _this.map.removeOverlay(_this.instance);
    }
  };
}, _temp);
exports.default = CurveLine;