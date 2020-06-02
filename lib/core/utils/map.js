"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BMapUtil = {
  BMap: function BMap(container, opts) {
    return new global.BMap.Map(container, opts);
  },
  BPoint: function BPoint(_ref) {
    var lng = _ref.lng,
        lat = _ref.lat;

    return new global.BMap.Point(lng, lat);
  },
  BSize: function BSize(_ref2) {
    var width = _ref2.width,
        height = _ref2.height;

    return new global.BMap.Size(Number(width), Number(height));
  },
  BPixel: function BPixel(_ref3) {
    var x = _ref3.x,
        y = _ref3.y;

    return new global.BMap.Pixel(x, y);
  },
  BBounds: function BBounds(_ref4) {
    var sw = _ref4.sw,
        ne = _ref4.ne;

    var swPoint = BMapUtil.BPoint(sw);
    var nePoint = BMapUtil.BPoint(ne);

    return new global.BMap.Bounds(swPoint, nePoint);
  },
  BMenuItem: function BMenuItem(text, callback, opts) {
    return new global.BMap.MenuItem(text, callback, opts);
  },
  BContextMenu: function BContextMenu() {
    var subMenus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var contextMenu = new global.BMap.ContextMenu();
    subMenus.forEach(function (item) {
      contextMenu.addItem(item);
      if (item.separator) {
        contextMenu.addSeparator();
      }
    });
    return contextMenu;
  },
  BIcon: function BIcon(url, size, opts) {
    return new global.BMap.Icon(url, size, opts);
  },
  BIconSequence: function BIconSequence(symbol, offset, repeat, fixedRotation) {
    return new global.BMap.IconSequence(symbol, offset, repeat, fixedRotation);
  },
  BControl: function BControl() {
    return new global.BMap.Control();
  },
  BCityListControl: function BCityListControl(opts) {
    return new global.BMap.CityListControl(opts);
  },
  BCopyrightControl: function BCopyrightControl(opts) {
    return new global.BMap.CopyrightControl(opts);
  },
  BNavigationControl: function BNavigationControl(opts) {
    return new global.BMap.NavigationControl(opts);
  },
  BMapTypeControl: function BMapTypeControl(opts) {
    return new global.BMap.MapTypeControl(opts);
  },
  BScaleControl: function BScaleControl(opts) {
    return new global.BMap.ScaleControl(opts);
  },
  BPanoramaControl: function BPanoramaControl(opts) {
    return new global.BMap.PanoramaControl(opts);
  },
  BOverviewMapControl: function BOverviewMapControl(opts) {
    return new global.BMap.OverviewMapControl(opts);
  },
  BGeolocationControl: function BGeolocationControl(opts) {
    return new global.BMap.GeolocationControl(opts);
  },
  BOverlay: function BOverlay() {
    return new global.BMap.Overlay();
  },
  BMarker: function BMarker(point, opts) {
    return new global.BMap.Marker(point, opts);
  },
  BLabel: function BLabel(content, opts) {
    return new global.BMap.Label(content, opts);
  },
  BTextIcon: function BTextIcon(point, content, styles) {
    return new BMapLib.TextIconOverlay(point, content, { styles: styles });
  },
  BCircle: function BCircle(center, radius, opts) {
    return new global.BMap.Circle(center, radius, opts);
  },
  BPolyline: function BPolyline(points, opts) {
    return new global.BMap.Polyline(points, opts);
  },
  BInfoWindow: function BInfoWindow(content, opts) {
    return new global.BMap.InfoWindow(content, opts);
  },
  BPolygon: function BPolygon(points, opts) {
    return new global.BMap.Polygon(points, opts);
  },
  BGroundOverlay: function BGroundOverlay(bounds, opts) {
    return new global.BMap.GroundOverlay(bounds, opts);
  },
  BPointCollection: function BPointCollection(points, opts) {
    return new global.BMap.PointCollection(points, opts);
  },
  BAutocomplete: function BAutocomplete(opts) {
    return new global.BMap.Autocomplete(opts);
  },
  BSymbol: function BSymbol(path, opts) {
    return new global.BMap.Symbol(path, opts);
  },
  BTileLayer: function BTileLayer(opts) {
    return new global.BMap.TileLayer(opts);
  },
  BTrafficLayer: function BTrafficLayer(opts) {
    return new global.BMap.TrafficLayer(opts);
  },
  BLocalSearch: function BLocalSearch(location, opts) {
    return new global.BMap.LocalSearch(location, opts);
  },
  BGeolocation: function BGeolocation() {
    return new global.BMap.Geolocation();
  },
  BConvertor: function BConvertor() {
    return new global.BMap.Convertor();
  },
  BTransitRoute: function BTransitRoute(location, opts) {
    return new global.BMap.TransitRoute(location, opts);
  },
  BWalkingRoute: function BWalkingRoute(location, opts) {
    return new global.BMap.WalkingRoute(location, opts);
  },
  BRidingRoute: function BRidingRoute(location, opts) {
    return new global.BMap.RidingRoute(location, opts);
  },
  BDrivingRoute: function BDrivingRoute(location, opts) {
    return new global.BMap.DrivingRoute(location, opts);
  },

  /**
   * 根据关键字查询位置信息
   * @param {*} keyword 关键字
   * @param {*} location 定位信息[map实例/string/point]
   */
  search: function search(keyword, location) {
    return new _promise2.default(function (resolve) {
      var local = BMapUtil.BLocalSearch(location, {
        onSearchComplete: function onSearchComplete(result) {
          var list = [];
          for (var i = 0, len = result.getCurrentNumPois(); i < len - 1; i += 1) {
            list.push(result.getPoi(i));
          }
          resolve(result);
        }
      });
      local.search(keyword);
    });
  },


  /**
   * 获取当前位置信息
   */
  getCurrentPosition: function getCurrentPosition() {
    return new _promise2.default(function (resolve, reject) {
      var geo = BMapUtil.BGeolocation();
      geo.getCurrentPosition(function (result) {
        var status = geo.getStatus();
        if (status === global.BMAP_STATUS_SUCCESS) {
          resolve(result);
        } else {
          reject(status);
        }
      });
    });
  },


  /**
   * 对指定的地址进行解析，返回坐标点
   * @param {*} address
   * @param {*} city
   */
  getPoint: function getPoint(address, city) {
    return new _promise2.default(function (resolve, reject) {
      var geo = new global.BMap.Geocoder();
      geo.getPoint(address, function (point) {
        if (point) {
          resolve(point);
        } else {
          reject();
        }
      }, city);
    });
  },


  /**
   * 对指定坐标点解析，返回地址信息
   * @param {*} point
   */
  getLocation: function getLocation(point) {
    return new _promise2.default(function (resolve, reject) {
      var geo = new global.BMap.Geocoder();
      // change the point to bpoint
      if (point.lng && point.lat) {
        point = BMapUtil.BPoint(point);
      }
      geo.getLocation(point, function (result) {
        if (result) {
          resolve(result);
        } else {
          reject();
        }
      });
    });
  }
};

exports.default = BMapUtil;