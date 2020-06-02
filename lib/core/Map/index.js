'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp, _initialiseProps; /*
                                      * 百度地图核心类
                                      *
                                      */

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

var _map3 = require('../options/map');

var _map4 = _interopRequireDefault(_map3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 地图初始化配置项所需属性
 */
var getMapOptions = function getMapOptions(config) {
  return {
    minZoom: config.minZoom,
    maxZoom: config.maxZoom,
    mapType: config.mapType && global[config.mapType],
    enableHighResolution: config.highResolution,
    enableAutoResize: config.autoResize,
    enableMapClick: config.mapClick
  };
};

/**
 * 处理地图显示中心点
 */
var processCenter = function processCenter(center) {
  if (!_utils2.default.isNil(center) && !_utils2.default.isString(center)) {
    center = _utils2.default.convert2BPoint(center, 'center');
  }

  return center;
};

var Map = (_temp = _class = function Map(container, config) {
  (0, _classCallCheck3.default)(this, Map);

  _initialiseProps.call(this);

  var mapOptions = getMapOptions(config);
  this.instance = _map2.default.BMap(container, mapOptions);
  this.config.center = processCenter(config.center);
  if (!config.zoom) {
    throw Error('Missing the required property `zoom`');
  }
  this.instance.centerAndZoom(this.config.center, config.zoom);
}

/**
 * 设置右键菜单
 */


/**
 * 设置地图类型
 */


/**
 * 处理地图相关事件
 * 绑定之前先统一解绑
 */


/**
 * 处理可以通过 setXXX 以及 enable、disableXXX 的方法
 */


/**
 * 重绘
 */
, _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.config = {};
  this.instance = null;
  this.requiredProperty = ['zoom', 'center'];

  this.processContextMenu = function (contextMenu) {
    if (_this.contextMenu) {
      _this.instance.removeContextMenu(_this.contextMenu);
    }
    _this.contextMenu = contextMenu;
    if (contextMenu) {
      _this.instance.addContextMenu(contextMenu);
    }
  };

  this.setMapType = function (mapType) {
    if (mapType && global[mapType]) {
      _this.instance.setMapType(global[mapType]);
    }
  };

  this.processEvents = function (events) {
    _utils2.default.unbindEvents(_this.instance);
    _utils2.default.bindEvents(_this.instance, events);
  };

  this.processOptions = function (config) {
    _utils2.default.processSetOptions(_this.instance, _map4.default.SET, config);
    _utils2.default.processBooleanOptions(_this.instance, _map4.default.BOOLEAN, config);
  };

  this.repaint = function (config) {
    // 先进行一步转换，因为this.config.center为转换后的值，防止diff出现 bad case
    if (config.center) {
      config.center = processCenter(config.center);
    }
    var diffConfig = _utils2.default.compareConfig(_this.config, config);

    _this.processContextMenu(diffConfig.contextMenu);
    _this.setMapType(diffConfig.mapType);
    _this.processOptions(diffConfig);
    _this.config = (0, _extends3.default)({}, _this.config, diffConfig);
    _this.processEvents(_this.config.events);
  };
}, _temp);
exports.default = Map;