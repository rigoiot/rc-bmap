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

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

var _ground = require('../options/ground');

var _ground2 = _interopRequireDefault(_ground);

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getGroundOverlayOptions = function getGroundOverlayOptions(config) {
  return {
    opacity: config.opacity,
    imageURL: config.imageURL,
    displayOnMaxLevel: config.displayOnMaxLevel,
    displayOnMinLevel: config.displayOnMinLevel
  };
};

var GroundOverlay = function (_BaseOverlay) {
  (0, _inherits3.default)(GroundOverlay, _BaseOverlay);

  function GroundOverlay() {
    (0, _classCallCheck3.default)(this, GroundOverlay);
    return (0, _possibleConstructorReturn3.default)(this, (GroundOverlay.__proto__ || (0, _getPrototypeOf2.default)(GroundOverlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(GroundOverlay, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var bounds = _utils2.default.convert2BBounds(config.bounds);
      var options = getGroundOverlayOptions(config);
      this.instance = _map2.default.BGroundOverlay(bounds, options);
      this.map.addOverlay(this.instance);
      this.processOptions(config);
    }
  }, {
    key: 'processOptions',
    value: function processOptions(config) {
      if (config.bounds) {
        config.bounds = _utils2.default.convert2BBounds(config.bounds);
      }
      _utils2.default.processSetOptions(this.instance, _ground2.default.SET, config);
    }
  }]);
  return GroundOverlay;
}(_BaseOverlay3.default);

exports.default = GroundOverlay;