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

var getTileLayerOptions = function getTileLayerOptions(config) {
  return {
    transparentPng: config.transparentPng,
    tileUrlTemplate: config.tileUrlTemplate,
    zIndex: config.zIndex
  };
};

var TileLayer = (_temp = _class = function () {
  function TileLayer(config, map) {
    (0, _classCallCheck3.default)(this, TileLayer);

    _initialiseProps.call(this);

    this.map = map;
    this.init(config);
  }

  (0, _createClass3.default)(TileLayer, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getTileLayerOptions(config);
      this.instance = _map2.default.BTileLayer(options);
      if (config.getTilesUrl) {
        this.instance.getTilesUrl = config.getTilesUrl;
      }
      this.map.addTileLayer(this.instance);
    }
  }]);
  return TileLayer;
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
exports.default = TileLayer;