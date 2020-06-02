'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurveLine = exports.HeatMap = exports.DistanceTool = exports.TrafficLayer = exports.TileLayer = exports.Symbol = exports.IconSequence = exports.Icon = exports.PointCollection = exports.GroundOverlay = exports.AutoComplete = exports.Constants = exports.Polyline = exports.InfoWindow = exports.TextIcon = exports.Label = exports.Polygon = exports.Circle = exports.Marker = exports.initCustomOverlay = exports.Geolocation = exports.OverviewMap = exports.Panorama = exports.Scale = exports.MapType = exports.Navigation = exports.Copyright = exports.CityList = exports.initCustomControl = exports.Util = exports.BMapUtil = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

var _map = require('./utils/map');

var _map2 = _interopRequireDefault(_map);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _Custom = require('./Control/Custom');

var _Custom2 = _interopRequireDefault(_Custom);

var _CityList = require('./Control/CityList');

var _CityList2 = _interopRequireDefault(_CityList);

var _Copyright = require('./Control/Copyright');

var _Copyright2 = _interopRequireDefault(_Copyright);

var _Navigation = require('./Control/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MapType = require('./Control/MapType');

var _MapType2 = _interopRequireDefault(_MapType);

var _Scale = require('./Control/Scale');

var _Scale2 = _interopRequireDefault(_Scale);

var _Panorama = require('./Control/Panorama');

var _Panorama2 = _interopRequireDefault(_Panorama);

var _OverviewMap = require('./Control/OverviewMap');

var _OverviewMap2 = _interopRequireDefault(_OverviewMap);

var _Geolocation = require('./Control/Geolocation');

var _Geolocation2 = _interopRequireDefault(_Geolocation);

var _Custom3 = require('./Overlay/Custom');

var _Custom4 = _interopRequireDefault(_Custom3);

var _Marker = require('./Overlay/Marker');

var _Marker2 = _interopRequireDefault(_Marker);

var _InfoWindow = require('./Overlay/InfoWindow');

var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

var _Circle = require('./Overlay/Circle');

var _Circle2 = _interopRequireDefault(_Circle);

var _Polygon = require('./Overlay/Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Polyline = require('./Overlay/Polyline');

var _Polyline2 = _interopRequireDefault(_Polyline);

var _Label = require('./Overlay/Label');

var _Label2 = _interopRequireDefault(_Label);

var _TextIcon = require('./Overlay/TextIcon');

var _TextIcon2 = _interopRequireDefault(_TextIcon);

var _GroundOverlay = require('./Overlay/GroundOverlay');

var _GroundOverlay2 = _interopRequireDefault(_GroundOverlay);

var _PointCollection = require('./Overlay/PointCollection');

var _PointCollection2 = _interopRequireDefault(_PointCollection);

var _Icon = require('./Overlay/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _IconSequence = require('./Overlay/IconSequence');

var _IconSequence2 = _interopRequireDefault(_IconSequence);

var _Symbol2 = require('./Overlay/Symbol');

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _AutoComplete = require('./AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _TileLayer = require('./Layer/TileLayer');

var _TileLayer2 = _interopRequireDefault(_TileLayer);

var _TrafficLayer = require('./Layer/TrafficLayer');

var _TrafficLayer2 = _interopRequireDefault(_TrafficLayer);

var _DistanceTool = require('./Library/DistanceTool');

var _DistanceTool2 = _interopRequireDefault(_DistanceTool);

var _HeatMap = require('./Library/HeatMap');

var _HeatMap2 = _interopRequireDefault(_HeatMap);

var _CurveLine = require('./Library/CurveLine');

var _CurveLine2 = _interopRequireDefault(_CurveLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BMapUtil = _map2.default;
exports.Util = _utils2.default;
exports.initCustomControl = _Custom2.default;
exports.CityList = _CityList2.default;
exports.Copyright = _Copyright2.default;
exports.Navigation = _Navigation2.default;
exports.MapType = _MapType2.default;
exports.Scale = _Scale2.default;
exports.Panorama = _Panorama2.default;
exports.OverviewMap = _OverviewMap2.default;
exports.Geolocation = _Geolocation2.default;
exports.initCustomOverlay = _Custom4.default;
exports.Marker = _Marker2.default;
exports.Circle = _Circle2.default;
exports.Polygon = _Polygon2.default;
exports.Label = _Label2.default;
exports.TextIcon = _TextIcon2.default;
exports.InfoWindow = _InfoWindow2.default;
exports.Polyline = _Polyline2.default;
exports.Constants = _constants2.default;
exports.AutoComplete = _AutoComplete2.default;
exports.GroundOverlay = _GroundOverlay2.default;
exports.PointCollection = _PointCollection2.default;
exports.Icon = _Icon2.default;
exports.IconSequence = _IconSequence2.default;
exports.Symbol = _Symbol3.default;
exports.TileLayer = _TileLayer2.default;
exports.TrafficLayer = _TrafficLayer2.default;
exports.DistanceTool = _DistanceTool2.default;
exports.HeatMap = _HeatMap2.default;
exports.CurveLine = _CurveLine2.default;


var addBMapScript = function addBMapScript(ak) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  if (!global.BMap && !global.mapLoader) {
    global.mapLoader = new _promise2.default(function (resolve) {
      var script = document.createElement('script');
      script.src = 'https://api.map.baidu.com/api?v=' + version + '.0&ak=' + ak + '&callback=initBMapCallBack';
      document.head.appendChild(script);
      global.initBMapCallBack = function () {
        resolve(global.BMap);
        document.head.removeChild(script);
        delete global.mapLoader;
        delete global.initBMapCallBack;
      };
    });
  }
  return global.mapLoader;
};

var initMap = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(container, config) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new _Map2.default(container, config));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function initMap(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = initMap;