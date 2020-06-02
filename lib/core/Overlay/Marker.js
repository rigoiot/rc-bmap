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

var _marker = require('../options/marker');

var _marker2 = _interopRequireDefault(_marker);

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMarkerOptions = function getMarkerOptions(config) {
  return {
    offset: config.offset,
    icon: config.icon,
    enableMassClear: config.massClear,
    enableClicking: config.clicking,
    raiseOnDrag: config.raiseOnDrag,
    draggingCursor: config.draggingCursor,
    rotation: config.rotation,
    shadow: config.shadow,
    title: config.title
  };
};

var Marker = function (_BaseOverlay) {
  (0, _inherits3.default)(Marker, _BaseOverlay);

  function Marker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Marker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Marker.__proto__ || (0, _getPrototypeOf2.default)(Marker)).call.apply(_ref, [this].concat(args))), _this), _this.outOfRangeOpts = ['clicking', 'raiseOnDrag', 'draggingCursor', 'shadow'], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Marker, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getMarkerOptions(config);
      var point = _utils2.default.convert2BPoint(config.point);
      this.instance = _map2.default.BMarker(point, options);
      this.map.addOverlay(this.instance);
      this.processOptions(config);
      this.setContextMenu(config.contextMenu);
    }
  }, {
    key: 'processOptions',
    value: function processOptions(config) {
      var animation = config.animation;

      if (animation) {
        config.animation = global[animation] || animation;
      }

      if (config.point) {
        config.position = _utils2.default.convert2BPoint(config.point);
      } else {
        delete config.position;
      }

      _utils2.default.processSetOptions(this.instance, _marker2.default.SET, config);
      _utils2.default.processBooleanOptions(this.instance, _marker2.default.BOOLEAN, config);

      if (config.contextMenu) {
        this.setContextMenu(config.contextMenu);
      }
    }
  }, {
    key: 'setContextMenu',
    value: function setContextMenu(contextMenu) {
      if (this.contextMenu) {
        this.instance.removeContextMenu(this.contextMenu);
      }
      this.contextMenu = contextMenu;
      if (contextMenu) {
        this.instance.addContextMenu(contextMenu);
      }
    }
  }]);
  return Marker;
}(_BaseOverlay3.default);

exports.default = Marker;