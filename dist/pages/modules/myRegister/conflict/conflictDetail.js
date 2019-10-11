'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var conflictDetail = function (_wepy$page) {
    _inherits(conflictDetail, _wepy$page);

    function conflictDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, conflictDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = conflictDetail.__proto__ || Object.getPrototypeOf(conflictDetail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            id: 0,
            conflictInfo: {}
        }, _this.components = {}, _this.methods = {
            toAuditPage: function toAuditPage() {
                wx.navigateTo({ url: './createConflict?id=' + this.id });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(conflictDetail, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.id = +options.id;
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var conflictInfoData = wx.getStorageSync('CREATE_CONFLICTLIST_DATA');
            this.conflictInfo = conflictInfoData[this.id];
        }
    }]);

    return conflictDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(conflictDetail , 'pages/modules/myRegister/conflict/conflictDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0RGV0YWlsLmpzIl0sIm5hbWVzIjpbImNvbmZsaWN0RGV0YWlsIiwiZGF0YSIsImlkIiwiY29uZmxpY3RJbmZvIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJ0b0F1ZGl0UGFnZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJvcHRpb25zIiwiJGFwcGx5IiwiY29uZmxpY3RJbmZvRGF0YSIsImdldFN0b3JhZ2VTeW5jIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNqQkMsSSxHQUFPO0FBQ0hDLGdCQUFHLENBREE7QUFFSEMsMEJBQWE7QUFGVixTLFFBSVBDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNOQyx1QkFETSx5QkFDTztBQUNUQyxtQkFBR0MsVUFBSCxDQUFjLEVBQUVDLEtBQUsseUJBQXVCLEtBQUtQLEVBQW5DLEVBQWQ7QUFDSDtBQUhLLFMsUUFLVlEsTSxHQUFTLEUsUUFDVEMsSyxHQUFRLEUsUUFDUkMsUSxHQUFXLEU7Ozs7OytCQUNKQyxPLEVBQVM7QUFDWixpQkFBS1gsRUFBTCxHQUFRLENBQUNXLFFBQVFYLEVBQWpCO0FBQ0EsaUJBQUtZLE1BQUw7QUFDSDs7O2lDQUNPO0FBQ0gsZ0JBQUlDLG1CQUFpQlIsR0FBR1MsY0FBSCxDQUFrQiwwQkFBbEIsQ0FBckI7QUFDRCxpQkFBS2IsWUFBTCxHQUFrQlksaUJBQWlCLEtBQUtiLEVBQXRCLENBQWxCO0FBQ0g7Ozs7RUFyQnVDZSxlQUFLQyxJOztrQkFBNUJsQixjIiwiZmlsZSI6ImNvbmZsaWN0RGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29uZmxpY3REZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaWQ6MCxcbiAgICAgICAgICAgIGNvbmZsaWN0SW5mbzp7fVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b0F1ZGl0UGFnZSgpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL2NyZWF0ZUNvbmZsaWN0P2lkPScrdGhpcy5pZH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7fTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaWQ9K29wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9O1xuICAgICAgICBvblNob3coKXtcbiAgICAgICAgICAgICB2YXIgY29uZmxpY3RJbmZvRGF0YT13eC5nZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NPTkZMSUNUTElTVF9EQVRBJyk7XG4gICAgICAgICAgICB0aGlzLmNvbmZsaWN0SW5mbz1jb25mbGljdEluZm9EYXRhW3RoaXMuaWRdO1xuICAgICAgICB9XG4gICAgfVxuIl19