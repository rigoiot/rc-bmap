'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp, _initialiseProps;

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrafficLayer = (_temp = _class = function () {
  function TrafficLayer(config, map) {
    (0, _classCallCheck3.default)(this, TrafficLayer);

    _initialiseProps.call(this);

    this.map = map;
    this.init(config);
  }

  (0, _createClass3.default)(TrafficLayer, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var now = new Date();
      if (!config.weekday) {
        config.weekday = now.getDay();
      }

      if (!config.hour) {
        config.hour = now.getHours();
      }

      this.instance = _map2.default.BTrafficLayer({
        predictDate: {
          weekday: config.weekday,
          hour: config.hour
        }
      });

      this.map.addTileLayer(this.instance);
    }
  }]);
  return TrafficLayer;
}(), _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.repaint = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _this.destroy();
    _this.init(config);
  };

  this.destroy = function () {
    if (_this.instance) {
      _this.map.removeTileLayer(_this.instance);
    }
  };
}, _temp);
exports.default = TrafficLayer;