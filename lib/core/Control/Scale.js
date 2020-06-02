'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

var _BaseControl2 = require('./BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processUnit = function processUnit(unit, instance) {
  if (unit) {
    unit = global[unit] || unit;
    instance.setUnit(unit);
  }
};

var Scale = function (_BaseControl) {
  (0, _inherits3.default)(Scale, _BaseControl);

  function Scale() {
    (0, _classCallCheck3.default)(this, Scale);
    return (0, _possibleConstructorReturn3.default)(this, (Scale.__proto__ || (0, _getPrototypeOf2.default)(Scale)).apply(this, arguments));
  }

  (0, _createClass3.default)(Scale, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.instance = _map2.default.BScaleControl(config);
      processUnit(config.unit, this.instance);
      this.map.addControl(this.instance);
    }
  }]);
  return Scale;
}(_BaseControl3.default);

exports.default = Scale;