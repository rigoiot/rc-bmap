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

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrafficLayer = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(TrafficLayer, _PureComponent);

  function TrafficLayer() {
    (0, _classCallCheck3.default)(this, TrafficLayer);
    return (0, _possibleConstructorReturn3.default)(this, (TrafficLayer.__proto__ || (0, _getPrototypeOf2.default)(TrafficLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(TrafficLayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context,
          props = this.props;
      var children = props.children,
          resetProps = (0, _objectWithoutProperties3.default)(props, ['children']);

      this.config = (0, _extends3.default)({}, this.config, resetProps);
      this.mapInstance = context.getMapInstance();
      var layer = new _core.TrafficLayer(this.config, this.mapInstance);
      this.layer = layer;
      this.instance = layer.instance;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          children = _props.children,
          resetProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

      this.config = (0, _extends3.default)({}, this.config, resetProps);
      this.layer.repaint((0, _extends3.default)({}, this.config));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.layer.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children || null;
    }
  }]);
  return TrafficLayer;
}(_react.PureComponent), _class.contextTypes = {
  getMapInstance: _propTypes2.default.func
}, _temp);
exports.default = TrafficLayer;