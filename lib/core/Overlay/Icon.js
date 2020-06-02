'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIconOptions = function getIconOptions(config) {
  return {
    anchor: config.anchor,
    imageOffset: config.imageOffset,
    imageSize: config.imageSize,
    infoWindowAnchor: config.infoWindowAnchor,
    printImageUrl: config.printImageUrl
  };
};

var processConfig = function processConfig(config) {
  var size = config.size,
      imageOffset = config.imageOffset,
      imageSize = config.imageSize,
      infoWindowAnchor = config.infoWindowAnchor;

  var result = (0, _extends3.default)({}, config);

  if (size) {
    result.size = _utils2.default.convert2BSize(size);
  }

  if (imageOffset) {
    result.imageOffset = _utils2.default.convert2BSize(imageOffset);
  }

  if (imageSize) {
    result.imageSize = _utils2.default.convert2BSize(imageSize);
  }

  if (infoWindowAnchor) {
    result.infoWindowAnchor = _utils2.default.convert2BSize(infoWindowAnchor);
  }
  return result;
};

var Icon = function Icon() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _classCallCheck3.default)(this, Icon);

  var result = processConfig(config);
  var options = getIconOptions(result);
  var icon = _map2.default.BIcon(result.imageUrl, result.size, options);
  return icon;
};

exports.default = Icon;