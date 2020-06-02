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

var _Polygon = require('./Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Point = _Base2.default.Point,
    Path = _Base2.default.Path;
var Boundary = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(Boundary, _PureComponent);

  function Boundary() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Boundary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Boundary.__proto__ || (0, _getPrototypeOf2.default)(Boundary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      area: []
    }, _this.getPoints = function (name) {
      _core.Util.getBoundary(name).then(function (_ref2) {
        var points = _ref2.points,
            area = _ref2.area;

        _this.processAutoViewport(points);
        _this.setState({
          name: name,
          area: area
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Boundary, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var name = this.props.name;

      this.getPoints(name);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var name = this.props.name;

      if (name !== this.state.name) {
        this.getPoints(name);
      }
    }
  }, {
    key: 'processAutoViewport',
    value: function processAutoViewport() {
      var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = this.context,
          props = this.props;
      var autoViewport = props.autoViewport;

      if (autoViewport) {
        context.getMapInstance().setViewport(points);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          area = _state.area,
          name = _state.name;
      var _props = this.props,
          children = _props.children,
          resetProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

      return area.length > 0 ? _react2.default.createElement(
        'div',
        null,
        area.map(function (points, index) {
          return _react2.default.createElement(
            _Polygon2.default,
            (0, _extends3.default)({
              key: name + '_' + index
            }, resetProps),
            _react2.default.createElement(
              Path,
              null,
              points.map(function (item, idx) {
                return _react2.default.createElement(Point, { key: idx, lng: item.lng, lat: item.lat });
              })
            ),
            children
          );
        })
      ) : null;
    }
  }]);
  return Boundary;
}(_react.PureComponent), _class.contextTypes = {
  getMapInstance: _propTypes2.default.func
}, _temp2);
exports.default = Boundary;