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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

var _BaseControl2 = require('./BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOverviewMapControlOptions = function getOverviewMapControlOptions(config) {
  return {
    anchor: config.anchor,
    offset: config.offset,
    size: config.size && _map2.default.BSize((0, _extends3.default)({}, config.size)),
    isOpen: config.isOpen
  };
};

var OverviewMap = function (_BaseControl) {
  (0, _inherits3.default)(OverviewMap, _BaseControl);

  function OverviewMap() {
    (0, _classCallCheck3.default)(this, OverviewMap);
    return (0, _possibleConstructorReturn3.default)(this, (OverviewMap.__proto__ || (0, _getPrototypeOf2.default)(OverviewMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(OverviewMap, [{
    key: 'init',
    value: function init() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = getOverviewMapControlOptions(config);
      this.instance = _map2.default.BOverviewMapControl(options);
      this.map.addControl(this.instance);
      _utils2.default.bindEvents(this.instance, config.events);
    }
  }]);
  return OverviewMap;
}(_BaseControl3.default);

exports.default = OverviewMap;