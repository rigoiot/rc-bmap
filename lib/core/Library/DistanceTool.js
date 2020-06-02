'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDistanceToolOptions = function getDistanceToolOptions(config) {
  return {
    followText: config.followText || '单击确定地点，双击结束',
    unit: config.unit,
    lineColor: config.lineColor || 'red',
    lineStroke: config.lineStroke || 2,
    opacity: config.opacity,
    cursor: config.cursor,
    lineStyle: config.lineStyle,
    secIcon: config.secIcon,
    closeIcon: config.closeIcon
  };
};

var DistanceTool = function () {
  function DistanceTool(config, map) {
    var _this = this;

    (0, _classCallCheck3.default)(this, DistanceTool);

    this.processEvents = function (events) {
      _utils2.default.unbindEvents(_this.instance);
      _utils2.default.bindEvents(_this.instance, events);
    };

    this.destroy = function () {
      if (_this.instance) {
        _this.instance.close();
      }
    };

    this.map = map;
    this.init(config);
  }

  (0, _createClass3.default)(DistanceTool, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getDistanceToolOptions(config);
      this.instance = new global.BMapLib.DistanceTool(this.map, options);
      this.processEvents(config.events);
    }
  }]);
  return DistanceTool;
}();

exports.default = DistanceTool;