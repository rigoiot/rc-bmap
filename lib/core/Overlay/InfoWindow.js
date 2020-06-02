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

var _infoWindow = require('../options/infoWindow');

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInfoWindowOptions = function getInfoWindowOptions(config) {
  return {
    width: config.width,
    height: config.height,
    maxWidth: config.maxWidth,
    offset: config.offset,
    title: config.title,
    enableAutoPan: config.autoPan,
    enableCloseOnClick: config.closeOnClick,
    enableMessage: config.displayMessage,
    message: config.message
  };
};

var InfoWindow = function (_BaseOverlay) {
  (0, _inherits3.default)(InfoWindow, _BaseOverlay);

  function InfoWindow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InfoWindow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InfoWindow.__proto__ || (0, _getPrototypeOf2.default)(InfoWindow)).call.apply(_ref, [this].concat(args))), _this), _this.outOfRangeOpts = ['maxWidth', 'offset', 'displayMessage', 'message', 'point'], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InfoWindow, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getInfoWindowOptions(config);
      var point = _utils2.default.convert2BPoint(config.point);
      this.instance = _map2.default.BInfoWindow(config.content, options);
      this.processVisible(config.visible, point);
    }
  }, {
    key: 'processOptions',
    value: function processOptions(config) {
      var point = config.point || this.config.point;
      config.point = _utils2.default.convert2BPoint(point);

      _utils2.default.processSetOptions(this.instance, _infoWindow2.default.SET, config);
      _utils2.default.processBooleanOptions(this.instance, _infoWindow2.default.BOOLEAN, config);
      this.processVisible(config.visible, config.point);
    }
  }, {
    key: 'processVisible',
    value: function processVisible() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var point = arguments[1];

      if (this.instance.isOpen() && !visible) {
        this.map.closeInfoWindow();
      } else if (!this.instance.isOpen() && visible) {
        this.map.openInfoWindow(this.instance, point);
      }
    }
  }]);
  return InfoWindow;
}(_BaseOverlay3.default);

exports.default = InfoWindow;