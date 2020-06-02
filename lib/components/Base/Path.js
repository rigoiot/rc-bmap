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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Path = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(Path, _PureComponent);

  function Path() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Path);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Path.__proto__ || (0, _getPrototypeOf2.default)(Path)).call.apply(_ref, [this].concat(args))), _this), _this.items = [], _this.addPoint = function (index, item) {
      if (_this.items[index]) {
        _this.items.splice(index, 0, item);
      } else {
        _this.items[index] = item;
      }
    }, _this.updatePoint = function (index, item) {
      _this.items[index] = item;
    }, _this.removePoint = function (index) {
      // Fix sync call removePoint cause index confusion
      // https://github.com/jser-club/rc-bmap/issues/92
      _this.items.splice(index, 1, undefined);
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

  (0, _createClass3.default)(Path, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        addPoint: this.addPoint,
        updatePoint: this.updatePoint,
        removePoint: this.removePoint
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context;

      context.centralizedUpdates({
        name: this.props.name || 'path',
        data: [].concat((0, _toConsumableArray3.default)(this.items))
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;
      // filter undefined item

      context.centralizedUpdates({
        name: this.props.name || 'path',
        data: [].concat((0, _toConsumableArray3.default)(this.items.filter(function (i) {
          return i;
        })))
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.context;

      context.centralizedUpdates({
        name: this.props.name || 'path',
        data: null
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
  return Path;
}(_react.PureComponent), _class.displayName = 'Path', _class.contextTypes = {
  centralizedUpdates: _propTypes2.default.func
}, _class.childContextTypes = {
  addPoint: _propTypes2.default.func,
  updatePoint: _propTypes2.default.func,
  removePoint: _propTypes2.default.func
}, _temp2);
exports.default = Path;