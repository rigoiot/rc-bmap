'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp, _initialiseProps; /*
                                      * 基础控件类
                                      * 用于统一处理重绘、销毁逻辑
                                      */

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseControl = (_temp = _class = function BaseControl(config, map) {
  (0, _classCallCheck3.default)(this, BaseControl);

  _initialiseProps.call(this);

  this.map = map;
  this.repaint(config);
}

/**
 * 重绘
 */


/**
 * 销毁
 */
, _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.instance = null;

  this.repaint = function (config) {
    _this.destroy();
    config = (0, _extends3.default)({}, config, _utils2.default.convertControlOptions(config));
    _this.init(config);
    _utils2.default.processControlVisible(_this.instance, config.visible);
  };

  this.destroy = function () {
    if (_this.instance) {
      _this.map.removeControl(_this.instance);
      _this.instance = null;
    }
  };
}, _temp);
exports.default = BaseControl;