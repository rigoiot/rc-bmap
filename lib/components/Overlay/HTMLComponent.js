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

var _class, _temp;

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTMLComponent = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(HTMLComponent, _PureComponent);

  function HTMLComponent(props) {
    (0, _classCallCheck3.default)(this, HTMLComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTMLComponent.__proto__ || (0, _getPrototypeOf2.default)(HTMLComponent)).call(this, props));

    _this.div = document.createElement('div');
    return _this;
  }

  (0, _createClass3.default)(HTMLComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context;

      _reactDom2.default.render(this.props.children, this.div);
      context.centralizedUpdates({
        name: this.name,
        data: this.div
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;

      _reactDom2.default.render(this.props.children, this.div);
      context.centralizedUpdates({
        name: this.name,
        data: this.div
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.context;

      context.centralizedUpdates({
        name: this.name,
        data: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return HTMLComponent;
}(_react.PureComponent), _class.contextTypes = {
  centralizedUpdates: _propTypes2.default.func
}, _class.displayName = 'HTMLComponent', _temp);
exports.default = HTMLComponent;