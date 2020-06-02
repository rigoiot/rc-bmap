'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONTEXT_MENU_ICON = _core.Constants.CONTEXT_MENU_ICON;
// 内置ContextMenuIcon集合

var builtInArray = [CONTEXT_MENU_ICON.ZOOM_IN, CONTEXT_MENU_ICON.ZOOM_OUT];

/**
 * 处理icon
 * @param {*} iconUrl icon链接
 */
var getIconUrl = function getIconUrl(iconUrl) {
  var icon = iconUrl;
  if (iconUrl && builtInArray.indexOf(iconUrl) > -1) {
    icon = global[iconUrl];
  }
  return icon;
};

var ContextMenuItem = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(ContextMenuItem, _PureComponent);

  function ContextMenuItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContextMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContextMenuItem.__proto__ || (0, _getPrototypeOf2.default)(ContextMenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'ContextMenuItem', _this.instance = null, _this.getInstance = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          separator = _this$props.separator,
          iconUrl = _this$props.iconUrl,
          text = _this$props.text,
          width = _this$props.width,
          id = _this$props.id,
          onClick = _this$props.onClick;

      var menuItem = _core.BMapUtil.BMenuItem(text, onClick, {
        id: id,
        width: width,
        iconUrl: getIconUrl(iconUrl)
      });
      menuItem.separator = separator;
      if (!_core.Util.isNil(disabled) && disabled) {
        menuItem.disable();
      } else {
        menuItem.enable();
      }
      return menuItem;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContextMenuItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context;
      var index = this.props.index;


      this.instance = this.getInstance();
      context.addMenuItem(index, this.instance);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;
      var index = this.props.index;

      this.instance = this.getInstance();
      context.updateMenuItem(index, this.instance);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.context;
      var index = this.props.index;

      context.removeMenuItem(index);
    }

    /**
     * 根据 props 初始化MenuItem
     */

  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return ContextMenuItem;
}(_react.PureComponent), _class.contextTypes = {
  addMenuItem: _propTypes2.default.func,
  updateMenuItem: _propTypes2.default.func,
  removeMenuItem: _propTypes2.default.func
}, _temp2);
exports.default = ContextMenuItem;