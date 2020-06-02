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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseOverlay2 = require('../BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _core = require('../../../core');

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = (_temp2 = _class = function (_BaseOverlay) {
  (0, _inherits3.default)(Label, _BaseOverlay);

  function Label() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Label);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Label.__proto__ || (0, _getPrototypeOf2.default)(Label)).call.apply(_ref, [this].concat(args))), _this), _this.getRealOverlay = function () {
      return new _core.Label(_this.config, _this.mapInstance);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Label, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.context,
          props = this.props;
      var children = props.children,
          resetProps = (0, _objectWithoutProperties3.default)(props, ['children']);

      this.config = (0, _extends3.default)({}, this.config, resetProps);
      this.mapInstance = context.getMapInstance();
      var overlay = this.getRealOverlay();
      this.overlay = overlay;
      this.instance = overlay.instance;

      context.centralizedUpdates({
        name: 'label',
        data: this.instance
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.context;
      var _props = this.props,
          children = _props.children,
          resetProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

      this.config = (0, _extends3.default)({}, this.config, resetProps);
      this.overlay.repaint((0, _extends3.default)({}, this.config));

      context.centralizedUpdates({
        name: 'label',
        data: this.overlay.instance
      });
    }
  }]);
  return Label;
}(_BaseOverlay3.default), _class.Content = _Content2.default, _class.contextTypes = {
  getMapInstance: _propTypes2.default.func,
  centralizedUpdates: _propTypes2.default.func
}, _temp2);
exports.default = Label;