'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var map = function (_wepy$page) {
    _inherits(map, _wepy$page);

    function map() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, map);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = map.__proto__ || Object.getPrototypeOf(map)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: ""
        }, _this.data = {
            mapCtx: null,
            viewSize: 0
        }, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(map, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            this.mapCtx = wx.createMapContext('myMap');
            this.viewSize = wx.getSystemInfo({
                success: function success(res) {
                    _this2.viewSize = res.windowHeight;
                    _this2.$apply();
                }
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return map;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(map , 'pages/mine/myBusinessCard/map'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6WyJtYXAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1hcEN0eCIsInZpZXdTaXplIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid3giLCJjcmVhdGVNYXBDb250ZXh0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLG9CQUFPLElBREo7QUFFSEMsc0JBQVM7QUFGTixTLFFBS1BDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OztpQ0FFRjtBQUFBOztBQUNMLGlCQUFLTixNQUFMLEdBQWNPLEdBQUdDLGdCQUFILENBQW9CLE9BQXBCLENBQWQ7QUFDQSxpQkFBS1AsUUFBTCxHQUFnQk0sR0FBR0UsYUFBSCxDQUFpQjtBQUN6QkMseUJBQVMsc0JBQU87QUFDWiwyQkFBS1QsUUFBTCxHQUFnQlUsSUFBSUMsWUFBcEI7QUFDQSwyQkFBS0MsTUFBTDtBQUNIO0FBSndCLGFBQWpCLENBQWhCO0FBTUg7OztpQ0FFUSxDQUFHOzs7O0VBOUJtQkMsZUFBS0MsSTs7a0JBQWpCbkIsRyIsImZpbGUiOiJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hcCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJcIixcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgbWFwQ3R4Om51bGwsXG4gICAgICAgIHZpZXdTaXplOjAsXG4gICAgfTtcblxuICAgIGNvbXBvbmVudHMgPSB7fTtcblxuICAgIG1ldGhvZHMgPSB7fTtcblxuICAgIGV2ZW50cyA9IHt9O1xuXG4gICAgd2F0Y2ggPSB7fTtcblxuICAgIGNvbXB1dGVkID0ge307XG5cbiAgICBvbkxvYWQoKSB7IFxuICAgICAgICB0aGlzLm1hcEN0eCA9IHd4LmNyZWF0ZU1hcENvbnRleHQoJ215TWFwJylcbiAgICAgICAgdGhpcy52aWV3U2l6ZSA9IHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1NpemUgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvblNob3coKSB7IH07XG4gIH1cbiJdfQ==