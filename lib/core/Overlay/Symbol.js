'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSymbolOptions = function getSymbolOptions(config) {
  return {
    anchor: config.anchor && _utils2.default.convert2BSize(config.anchor),
    fillColor: config.fillColor,
    fillOpacity: config.fillOpacity,
    scale: config.scale,
    rotation: config.rotation,
    strokeColor: config.strokeColor,
    strokeOpacity: config.strokeOpacity,
    strokeWeight: config.strokeWeight
  };
};

var processPath = function processPath(path) {
  return global[path] ? global[path] : path;
};

var _Symbol = function _Symbol() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _classCallCheck3.default)(this, _Symbol);

  var options = getSymbolOptions(config);
  var path = processPath(config.path);
  return _map2.default.BSymbol(path, options);
};

exports.default = _Symbol;