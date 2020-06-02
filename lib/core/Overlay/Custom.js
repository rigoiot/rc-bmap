'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp, _initialiseProps;

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomOverlay = (_temp = _class = function CustomOverlay(config, map) {
  (0, _classCallCheck3.default)(this, CustomOverlay);

  _initialiseProps.call(this);

  this.config = (0, _extends3.default)({}, config);
  this.map = map;
  this.processOptions(config);
}, _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.config = {};

  this.processOptions = function (_ref) {
    var visible = _ref.visible;

    if (!_utils2.default.isNil(visible)) {
      if (!visible) {
        _this.hide();
      } else {
        _this.show();
      }
    }
  };

  this.repaint = function (config) {
    var diffConfig = _utils2.default.compareConfig(_this.config, config);
    _this.processOptions(diffConfig);
    _this.config = (0, _extends3.default)({}, _this.config, diffConfig);
  };

  this.destroy = function () {
    _this.map.removeOverlay(_this);
  };
}, _temp);

// 异步加载时，BMap对象不存在，所以提供获得类方法，确保调用时BMap对象存在。

var initCustomOverlay = function initCustomOverlay(config, initialize, draw, mapInstance) {
  CustomOverlay.prototype = _map2.default.BOverlay();
  CustomOverlay.prototype.initialize = initialize;
  CustomOverlay.prototype.draw = draw;

  var overlay = new CustomOverlay(config, mapInstance);
  mapInstance.addOverlay(overlay);

  return overlay;
};

exports.default = initCustomOverlay;