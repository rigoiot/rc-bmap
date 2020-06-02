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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp, _initialiseProps;

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

var _autoComplete = require('../options/autoComplete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAutocompleteOptions = function getAutocompleteOptions(config, map) {
  return {
    location: config.location || map,
    types: config.types,
    onSearchComplete: config.onSearchComplete,
    input: config.input
  };
};

var AutoComplete = (_temp = _class = function () {
  function AutoComplete() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var map = arguments[1];
    (0, _classCallCheck3.default)(this, AutoComplete);

    _initialiseProps.call(this);

    this.config = (0, _extends3.default)({}, config);
    this.init(config, map);
  }

  (0, _createClass3.default)(AutoComplete, [{
    key: 'processOptions',
    value: function processOptions(config) {
      if (config.value) {
        config.inputValue = config.value;
      }
      _utils2.default.processSetOptions(this.instance, _autoComplete2.default.SET, config);
    }
  }]);
  return AutoComplete;
}(), _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.config = {};
  this.outOfRangeOpts = ['input', 'onSearchComplete'];

  this.hasOutOfRangeOpts = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return opts.some(function (item) {
      return _this.outOfRangeOpts.indexOf(item) > -1;
    });
  };

  this.init = function (config, map) {
    _this.checkInputExist();
    var options = getAutocompleteOptions(config, map);
    _this.instance = _map2.default.BAutocomplete(options);
    _this.processOptions(config);
    _this.processEvents(config.events);
  };

  this.checkInputExist = function () {
    if (!document.querySelector('#' + _this.config.input)) {
      throw Error('[Input] ' + _this.config.input + ' is not exist when init autocomplete.');
    }
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
    _this.instance.dispose();
  };

  this.processEvents = function (events) {
    _utils2.default.unbindEvents(_this.instance);
    _utils2.default.bindEvents(_this.instance, events);
  };
}, _temp);
exports.default = AutoComplete;