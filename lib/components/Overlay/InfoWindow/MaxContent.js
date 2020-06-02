'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _HTMLComponent2 = require('../HTMLComponent');

var _HTMLComponent3 = _interopRequireDefault(_HTMLComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaxContent = function (_HTMLComponent) {
  (0, _inherits3.default)(MaxContent, _HTMLComponent);

  function MaxContent() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MaxContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MaxContent.__proto__ || (0, _getPrototypeOf2.default)(MaxContent)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'maxContent', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return MaxContent;
}(_HTMLComponent3.default);

exports.default = MaxContent;