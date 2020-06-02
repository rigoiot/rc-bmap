'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextMenu = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(ContextMenu, _PureComponent);

  function ContextMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContextMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContextMenu.__proto__ || (0, _getPrototypeOf2.default)(ContextMenu)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'ContextMenu', _this.menuItems = [], _this.instance = null, _this.addMenuItem = function (index, item) {
      if (_this.menuItems[index]) {
        _this.menuItems.splice(index, 0, item);
      } else {
        _this.menuItems[index] = item;
      }
    }, _this.updateMenuItem = function (index, item) {
      _this.menuItems[index] = item;
    }, _this.removeMenuItem = function (index) {
      _this.menuItems.splice(index, 1, undefined);
    }, _this.repaint = function () {
      _this.instance = _core.BMapUtil.BContextMenu([].concat((0, _toConsumableArray3.default)(_this.menuItems.filter(function (i) {
        return i;
      }))));
    }, _this.renderChildren = function () {
      return _react2.default.Children.map(_this.props.children, function (child, index) {
        if (child) {
          // 这里将 index 传递给MenuItem，保证子元素的显示顺序
          return _react2.default.cloneElement(child, {
            index: index
          });
        }
        return null;
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // 子元素集合


  // BContextMenu实例


  (0, _createClass3.default)(ContextMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        addMenuItem: this.addMenuItem,
        updateMenuItem: this.updateMenuItem,
        removeMenuItem: this.removeMenuItem
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context;

      this.repaint();
      context.centralizedUpdates({
        name: 'contextMenu',
        data: this.instance
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;

      this.repaint();
      context.centralizedUpdates({
        name: 'contextMenu',
        data: this.instance
      });
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
  return ContextMenu;
}(_react.PureComponent), _class.Item = _Item2.default, _class.contextTypes = {
  centralizedUpdates: _propTypes2.default.func }, _class.childContextTypes = {
  addMenuItem: _propTypes2.default.func,
  updateMenuItem: _propTypes2.default.func,
  removeMenuItem: _propTypes2.default.func
}, _temp2);
exports.default = ContextMenu;