'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _core = require('../../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DistanceTool = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(DistanceTool, _PureComponent);

  function DistanceTool() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DistanceTool);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DistanceTool.__proto__ || (0, _getPrototypeOf2.default)(DistanceTool)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.centralizedUpdates = function (_ref2) {
      var name = _ref2.name,
          data = _ref2.data;

      var configName = _core.Util.firstLowerCase(name);
      _this.config[configName] = data;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DistanceTool, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        centralizedUpdates: this.centralizedUpdates
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var map = this.context.getMapInstance();

      var _props = this.props,
          children = _props.children,
          resetProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

      this.config = (0, _extends3.default)({}, this.config, resetProps);

      _core.Util.syncScript('https://api.map.baidu.com/library/DistanceTool/1.2/src/DistanceTool_min.js').then(function () {
        _this2.tool = new _core.DistanceTool((0, _extends3.default)({}, _this2.config), map);
        if (_this2.props.getInstance) {
          _this2.props.getInstance(_this2.tool.instance);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.tool) {
        var _props2 = this.props,
            children = _props2.children,
            resetProps = (0, _objectWithoutProperties3.default)(_props2, ['children']);

        this.config = (0, _extends3.default)({}, this.config, resetProps);
        this.tool.init(this.config);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.tool) {
        this.tool.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        null,
        children
      );
    }
  }]);
  return DistanceTool;
}(_react.PureComponent), _class.Icon = _Icon2.default, _class.contextTypes = {
  getMapInstance: _propTypes2.default.func
}, _class.childContextTypes = {
  centralizedUpdates: _propTypes2.default.func
}, _temp2);
exports.default = DistanceTool;