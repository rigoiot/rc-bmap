'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp, _initialiseProps;

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseOverlay = (_temp = _class = function BaseOverlay(config, map) {
  (0, _classCallCheck3.default)(this, BaseOverlay);

  _initialiseProps.call(this);

  this.map = map;
  this.config = (0, _extends3.default)({}, config);
  this.init(config);
  this.processEvents(config.events);
}, _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.config = {};
  this.outOfRangeOpts = [];

  this.hasOutOfRangeOpts = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return opts.some(function (item) {
      return _this.outOfRangeOpts.indexOf(item) > -1;
    });
  };

  this.processEvents = function (events) {
    _utils2.default.unbindEvents(_this.instance);
    _utils2.default.bindEvents(_this.instance, events);
  };

  this.repaint = function (config) {
    var diffConfig = _utils2.default.compareConfig(_this.config, config) || {};

    if (_this.hasOutOfRangeOpts((0, _keys2.default)(diffConfig))) {
      _this.destroy();
      _this.init((0, _extends3.default)({}, _this.config, diffConfig));
    } else {
      _this.processOptions(diffConfig);
    }
    _this.config = (0, _extends3.default)({}, _this.config, diffConfig);
    _this.processEvents(_this.config.events);
  };

  this.destroy = function () {
    _this.map.removeOverlay(_this.instance);
  };
}, _temp);
exports.default = BaseOverlay;