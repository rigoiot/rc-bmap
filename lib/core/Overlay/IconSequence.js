'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconSequence = function IconSequence() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _classCallCheck3.default)(this, IconSequence);
  var symbol = config.symbol,
      offset = config.offset,
      repeat = config.repeat,
      fixedRotation = config.fixedRotation;

  var icon = _map2.default.BIconSequence(symbol, offset, repeat, fixedRotation);
  return icon;
};

exports.default = IconSequence;