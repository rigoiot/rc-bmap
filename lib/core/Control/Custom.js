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

var CustomControl = (_temp = _class = function CustomControl(config, map) {
  (0, _classCallCheck3.default)(this, CustomControl);

  _initialiseProps.call(this);

  this.map = map;
  config = (0, _extends3.default)({}, config, _utils2.default.convertControlOptions(config));
  this.config = (0, _extends3.default)({}, config);
  this.defaultAnchor = config.anchor;
  this.defaultOffset = config.offset;
}, _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.config = {};

  this.processOptions = function (_ref) {
    var anchor = _ref.anchor,
        offset = _ref.offset,
        visible = _ref.visible;

    if (anchor) {
      _this.setAnchor(anchor);
    }
    if (offset) {
      _this.setOffset(offset);
    }
    if (!_utils2.default.isNil(visible)) {
      if (!visible) {
        _this.hide();
      } else {
        _this.show();
      }
    }
  };

  this.repaint = function (config) {
    config = (0, _extends3.default)({}, config, _utils2.default.convertControlOptions(config));
    var diffConfig = _utils2.default.compareConfig(_this.config, config);
    _this.processOptions(diffConfig);
    _this.config = (0, _extends3.default)({}, _this.config, diffConfig);
  };

  this.destroy = function () {
    _this.map.removeControl(_this);
  };
}, _temp);

// 异步加载时，BMap对象不存在，所以提供获得类方法，确保调用时BMap对象存在。

var initCustomControl = function initCustomControl(config, initialize, mapInstance) {
  CustomControl.prototype = _map2.default.BControl();
  CustomControl.prototype.initialize = initialize;

  var control = new CustomControl(config, mapInstance);
  mapInstance.addControl(control);
  _utils2.default.processControlVisible(control, config.visible);
  return control;
};

exports.default = initCustomControl;