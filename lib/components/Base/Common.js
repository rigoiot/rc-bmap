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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Common = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(Common, _PureComponent);

  function Common() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Common);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Common.__proto__ || (0, _getPrototypeOf2.default)(Common)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.centralizedUpdates = function (_ref2) {
      var name = _ref2.name,
          data = _ref2.data;

      var configName = _core.Util.firstLowerCase(name);
      _this.config[configName] = data;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Common, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        centralizedUpdates: this.centralizedUpdates
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context,
          getData = this.getData;

      var data = getData && getData() || {};
      context.centralizedUpdates(data);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context,
          getData = this.getData;

      var data = getData && getData() || {};
      context.centralizedUpdates(data);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.context,
          getData = this.getData;

      var data = getData && getData() || {};
      data.data = null;
      context.centralizedUpdates(data);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      if (children) {
        return _react2.default.createElement(
          'div',
          null,
          children
        );
      }
      return null;
    }
  }]);
  return Common;
}(_react.PureComponent), _class.contextTypes = {
  centralizedUpdates: _propTypes2.default.func
}, _class.displayName = 'CommonBaseComponent', _class.childContextTypes = {
  centralizedUpdates: _propTypes2.default.func
}, _temp2);
exports.default = Common;