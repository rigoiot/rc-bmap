'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Common2 = require('./Common');

var _Common3 = _interopRequireDefault(_Common2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Point = (_temp2 = _class = function (_Common) {
  (0, _inherits3.default)(Point, _Common);

  function Point() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Point);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Point.__proto__ || (0, _getPrototypeOf2.default)(Point)).call.apply(_ref, [this].concat(args))), _this), _this.centralizedUpdates = function (name, item) {
      _this.context.centralizedUpdates({
        name: name,
        data: item
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Point, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context;
      var _props = this.props,
          index = _props.index,
          _props$name = _props.name,
          name = _props$name === undefined ? 'point' : _props$name,
          resetProps = (0, _objectWithoutProperties3.default)(_props, ['index', 'name']);
      // 若存在addPoint，则证明在Path下，不进行统一数据变更逻辑

      if (context.addPoint) {
        context.addPoint(index, (0, _extends3.default)({}, resetProps));
      } else {
        this.centralizedUpdates(name, (0, _extends3.default)({}, resetProps));
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;
      var _props2 = this.props,
          index = _props2.index,
          _props2$name = _props2.name,
          name = _props2$name === undefined ? 'point' : _props2$name,
          resetProps = (0, _objectWithoutProperties3.default)(_props2, ['index', 'name']);

      if (context.updatePoint) {
        context.updatePoint(index, (0, _extends3.default)({}, resetProps));
      } else {
        this.centralizedUpdates(name, (0, _extends3.default)({}, resetProps));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var context = this.context;
      var index = this.props.index;

      if (context.removePoint) {
        context.removePoint(index);
      }
    }
  }]);
  return Point;
}(_Common3.default), _class.displayName = 'Point', _class.contextTypes = {
  centralizedUpdates: _propTypes2.default.func,
  addPoint: _propTypes2.default.func,
  updatePoint: _propTypes2.default.func,
  removePoint: _propTypes2.default.func
}, _temp2);
exports.default = Point;