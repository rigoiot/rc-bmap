'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberRe = /^[0-9]+.?[0-9]*/;

/**
 * 是否为Point
 * @param {*} point
 */
var isPoint = function isPoint(point) {
  return numberRe.test(point.lng) && (0, _typeof3.default)(numberRe.test(point.lat));
};

/**
 * 是否为BMap.Point
 * @param {*} point
 */
var isBPoint = function isBPoint(point) {
  return isPoint(point) && point.equals;
};

/**
 * 是否为Size
 * @param {*} point
 */
var isSize = function isSize(size) {
  return numberRe.test(size.width) && (0, _typeof3.default)(numberRe.test(size.height));
};

/**
 * 是否为BMap.Size
 * @param {*} size
 */
var isBSize = function isBSize(size) {
  return isSize(size) && size.equals;
};

/**
 * 是否为矩形范围
 * @param {*} bounds
 */
var isBounds = function isBounds(bounds) {
  return numberRe.test(bounds.sw) && numberRe.test(bounds.ne);
};

/**
 * 是否为BMap.Bounds
 * @param {*} bounds
 */
var isBBounds = function isBBounds(bounds) {
  return isBounds(bounds) && bounds.equals;
};

/**
 * 是否为空
 * @param {*} obj
 */
var isNil = function isNil(obj) {
  return obj === undefined || obj === null;
};

/**
 * 是否为字符串
 * @param {*} str
 */
var isString = function isString(str) {
  return typeof str === 'string';
};

/**
 * 首字母转为大写
 * @param {*} str
 */
var firstUpperCase = function firstUpperCase(str) {
  return str.replace(/^\S/, function (s) {
    return s.toUpperCase();
  });
};

/**
 * 首字母转为小写
 * @param {*} str
 */
var firstLowerCase = function firstLowerCase(str) {
  return str.replace(/^\S/, function (s) {
    return s.toLowerCase();
  });
};

/**
 * 获取行政区包含点集合
 * @param {*} name 行政区名称
 */
var getBoundary = function getBoundary(name) {
  return new _promise2.default(function (resolve, reject) {
    var boundary = new global.BMap.Boundary();

    boundary.get(name, function (res) {
      var count = res.boundaries.length;
      if (count === 0) {
        reject();
      }
      var area = [];
      var allPoints = [];
      for (var i = 0; i < count; i += 1) {
        var arr = res.boundaries[i].split(';').map(function (item) {
          var pointArr = item.split(',');
          return _map2.default.BPoint({ lng: pointArr[0], lat: pointArr[1].trim() });
        });
        allPoints = allPoints.concat(arr);
        area.push(arr);
      }

      resolve({
        area: area,
        points: allPoints
      });
    });
  });
};

/**
 * 将传入值转换为 BMap.Point
 * @param {*} point 点对象 { lng, lat }
 * @param {*} propsName 用于错误提示
 */
var convert2BPoint = function convert2BPoint(point) {
  var propsName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'point';

  if (isNil(point)) {
    throw Error('Missing property `' + propsName + '`');
  }
  if (!isPoint(point)) {
    throw Error('The `' + propsName + '` property should be a literal value `{ lng, lat }`');
  } else if (!isBPoint(point)) {
    point = _map2.default.BPoint((0, _extends3.default)({}, point));
  }
  return point;
};

/**
 * 将传入值转换为 BMap.Size
 * @param {*} point 矩形尺寸 { width, height }
 * @param {*} propsName 用于错误提示
 */
var convert2BSize = function convert2BSize(size) {
  var propsName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'size';

  if (isNil(size)) {
    throw Error('Missing property `' + propsName + '`');
  }
  if (!isSize(size)) {
    throw Error('The `' + propsName + '` property should be a literal value `{ width, height }`');
  }
  if (!isBSize(size)) {
    size = _map2.default.BSize((0, _extends3.default)({}, size));
  }
  return size;
};

/**
 * 将值转换为 BMap.Bounds
 * @param {*} point 矩形区域 { sw, ne }
 * @param {*} propsName 用于错误提示
 */
var convert2BBounds = function convert2BBounds(bounds) {
  var propsName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bounds';

  if (isNil(bounds)) {
    throw Error('Missing property `' + propsName + '`');
  }
  if (!isBounds(bounds)) {
    throw Error('The `' + propsName + '` property should be a literal value `{ width, height }`');
  }
  if (!isBBounds(bounds)) {
    bounds = _map2.default.BBounds((0, _extends3.default)({}, bounds));
  }
  return bounds;
};

/**
 * 为目标对象绑定事件
 * @param {*} target 目标对象
 * @param {*} events 事件集合
 */
var bindEvents = function bindEvents(target) {
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _keys2.default)(events).forEach(function (eventName) {
    var eventType = (0, _typeof3.default)(events[eventName]);
    if (eventType !== 'function') {
      console.warn('Events\'s props value should be a function, but got \'' + eventType + '\'');
    }
    var callback = function callback() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (eventType === 'function') {
        var _events$eventName;

        (_events$eventName = events[eventName]).call.apply(_events$eventName, [null].concat(args));
      }
    };
    target.events = target.events || {};
    target.addEventListener(eventName, callback);
    target.events['' + eventName] = callback;
  });
};

/**
 * 将目标对象中已绑定事件移除
 * @param {*} target
 */
var unbindEvents = function unbindEvents(target) {
  var _target$events = target.events,
      events = _target$events === undefined ? {} : _target$events;

  (0, _keys2.default)(events).forEach(function (eventName) {
    var event = events[eventName];
    target.removeEventListener(eventName, event);
  });
  target.events = {};
};

/**
 * 处理 target.setXXX 方法
 * @param {*} target 目标对象
 * @param {*} options 属性集合
 * @param {*} values 值集合
 */
var processSetOptions = function processSetOptions(target, options, values) {
  options.forEach(function (key) {
    if (values[key] || typeof values[key] === 'boolean') {
      var upKey = firstUpperCase(key);
      if (target['set' + upKey]) {
        target['set' + upKey](values[key]);
      }
    }
  });
};

/**
 * 处理 target.enableXXX 、 target.disableXXX 方法
 * @param {*} target 目标对象
 * @param {*} options 属性集合
 * @param {*} values 值集合
 */
var processBooleanOptions = function processBooleanOptions(target, options, values) {
  options.forEach(function (key) {
    if (values[key] || typeof values[key] === 'boolean') {
      var upKey = firstUpperCase(key);
      var prefix = values[key] ? 'enable' : 'disable';
      if (target['' + prefix + upKey]) {
        target['' + prefix + upKey]();
      }
    }
  });
};

/**
 * 比较新旧config，返回差异集合
 * @param {*} oldConfig
 * @param {*} newConfig
 */
var compareConfig = function compareConfig(oldConfig, newConfig) {
  var result = (0, _extends3.default)({}, oldConfig, newConfig);
  var keys = (0, _keys2.default)(result);
  for (var i = 0, len = keys.length; i < len; i += 1) {
    var key = keys[i];
    if (!isNil(oldConfig[key]) && (0, _lodash2.default)(oldConfig[key], result[key])) {
      delete result[key];
    }
  }
  return result;
};

/**
 * 转换Control配置项
 * @param {*} param0
 */
var convertControlOptions = function convertControlOptions(_ref) {
  var anchor = _ref.anchor,
      offset = _ref.offset;

  var result = {};

  if (anchor) {
    result.anchor = !isNil(global[anchor]) ? global[anchor] : anchor;
  }

  if (offset) {
    result.offset = convert2BSize(offset, 'offset');
  }
  return result;
};

/**
 * 处理Control显示隐藏
 * @param {*} target
 * @param {*} visible
 */
var processControlVisible = function processControlVisible(target, visible) {
  if (!isNil(target) && !isNil(visible)) {
    return visible ? target.show() : target.hide();
  }
  return null;
};

var libScriptsMap = {};
/**
 * 同步请求第三方script
 * @param {*} src script链接
 *
 * 此处保证每个script在整个文档流中有且只有一个，不重复添加
 */
var syncScript = function syncScript(src) {
  var scriptLoader = libScriptsMap[src];
  if (!scriptLoader) {
    // eslint-disable-next-line no-multi-assign
    libScriptsMap[src] = scriptLoader = new _promise2.default(function (resolved) {
      var script = document.createElement('script');
      script.src = src;
      // eslint-disable-next-line no-multi-assign
      script.onload = script.onreadystatechange = function loaded() {
        // for IE
        if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
          resolved();
        }
      };
      document.head.appendChild(script);
    });
  }

  return scriptLoader;
};

exports.default = {
  syncScript: syncScript,
  isPoint: isPoint,
  isBPoint: isBPoint,
  isSize: isSize,
  isBSize: isBSize,
  isBounds: isBounds,
  isBBounds: isBBounds,
  isNil: isNil,
  isString: isString,
  getBoundary: getBoundary,
  convert2BPoint: convert2BPoint,
  convert2BSize: convert2BSize,
  convert2BBounds: convert2BBounds,
  bindEvents: bindEvents,
  unbindEvents: unbindEvents,
  processSetOptions: processSetOptions,
  processBooleanOptions: processBooleanOptions,
  compareConfig: compareConfig,
  firstLowerCase: firstLowerCase,
  convertControlOptions: convertControlOptions,
  processControlVisible: processControlVisible
};