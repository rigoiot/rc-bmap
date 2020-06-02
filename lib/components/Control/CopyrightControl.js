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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('../../core');

var _BaseControl2 = require('./BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

var _Copyright = require('../Copyright');

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CopyrightControl = (_temp2 = _class = function (_BaseControl) {
  (0, _inherits3.default)(CopyrightControl, _BaseControl);

  function CopyrightControl() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CopyrightControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CopyrightControl.__proto__ || (0, _getPrototypeOf2.default)(CopyrightControl)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      copyrights: []
    }, _this.addCopyright = function (index, item) {
      if (_this.config.copyrights[index]) {
        _this.config.copyrights.splice(index, 0, item);
      } else {
        _this.config.copyrights[index] = item;
      }
    }, _this.updateCopyright = function (index, item) {
      _this.config.copyrights.splice(index, 1, item);
    }, _this.removeCopyright = function (index) {
      _this.config.copyrights.splice(index, 1, undefined);
    }, _this.getRealControl = function () {
      _this.config.copyrights = _this.config.copyrights.filter(function (item) {
        return item;
      });
      return new _core.Copyright(_this.config, _this.mapInstance);
    }, _this.renderChildren = function () {
      return _react2.default.Children.map(_this.props.children, function (child, index) {
        if (child) {
          return _react2.default.cloneElement(child, {
            index: index
          });
        }
        return null;
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CopyrightControl, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        addCopyright: this.addCopyright,
        updateCopyright: this.updateCopyright,
        removeCopyright: this.removeCopyright
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderChildren()
      );
    }
  }]);
  return CopyrightControl;
}(_BaseControl3.default), _class.Copyright = _Copyright2.default, _class.childContextTypes = {
  addCopyright: _propTypes2.default.func,
  updateCopyright: _propTypes2.default.func,
  removeCopyright: _propTypes2.default.func
}, _temp2);
exports.default = CopyrightControl;