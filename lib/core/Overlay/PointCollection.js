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

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPointCollectionOptions = function getPointCollectionOptions(config) {
  return {
    shape: config.shape ? global[config.shape] : null,
    size: config.size ? global[config.size] : null,
    color: config.color
  };
};

var processPoints = function processPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return points.map(function (item) {
    return _utils2.default.convert2BPoint(item);
  });
};

var PointCollection = function (_BaseOverlay) {
  (0, _inherits3.default)(PointCollection, _BaseOverlay);

  function PointCollection() {
    (0, _classCallCheck3.default)(this, PointCollection);
    return (0, _possibleConstructorReturn3.default)(this, (PointCollection.__proto__ || (0, _getPrototypeOf2.default)(PointCollection)).apply(this, arguments));
  }

  (0, _createClass3.default)(PointCollection, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getPointCollectionOptions(config);
      var points = processPoints(config.path);
      this.instance = _map2.default.BPointCollection(points, options);
      this.map.addOverlay(this.instance);
    }
  }, {
    key: 'processOptions',
    value: function processOptions(config) {
      if (config.shape || config.size || config.color) {
        this.instance.setStyles({
          shape: config.shape ? global[config.shape] : global[this.config.shape],
          size: config.shape ? global[config.size] : global[this.config.size],
          color: config.color || this.config.color
        });
      }

      if (config.path) {
        this.instance.setPoints(processPoints(config.path));
      }
    }
  }]);
  return PointCollection;
}(_BaseOverlay3.default);

exports.default = PointCollection;