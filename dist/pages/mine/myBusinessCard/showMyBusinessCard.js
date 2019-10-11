'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var showMyBusinessCard = function (_wepy$page) {
    _inherits(showMyBusinessCard, _wepy$page);

    function showMyBusinessCard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, showMyBusinessCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = showMyBusinessCard.__proto__ || Object.getPrototypeOf(showMyBusinessCard)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: "个人名片",
            navigationBarBackgroundColor: '#ffffff',
            navigationBarTextStyle: 'black'
        }, _this.data = {
            baseData: {},
            viewSize: ''
        }, _this.components = {}, _this.methods = {
            dial: function dial() {
                wx.makePhoneCall({
                    phoneNumber: this.baseData.phone
                });
            },
            map: function map() {
                wx.navigateTo({ url: './map' });
            },
            contactNow: function contactNow() {
                var _this2 = this;

                wx.showActionSheet({
                    itemList: ['立即呼叫', '保存至通讯录'], //按钮的文字数组，数组长度最大为6个,
                    itemColor: '#5d73fa', //按钮的文字颜色,
                    success: function success(res) {
                        switch (res.tapIndex) {
                            case 0:
                                wx.makePhoneCall({
                                    phoneNumber: _this2.baseData.phone
                                    //  success
                                });
                                break;
                            case 1:
                                wx.addPhoneContact({
                                    //   photoFilePath: ,
                                    //   nickName: ,
                                    //   lastName: ,
                                    //   middleName: ,
                                    firstName: _this2.baseData.name,
                                    mobilePhoneNumber: _this2.baseData.phone,
                                    //   weChatNumber: ,
                                    //   email: ,
                                    success: function success(result) {
                                        console.log(result);
                                    },
                                    fail: function fail() {},
                                    complete: function complete() {}
                                });
                                break;
                        }
                    }
                });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(showMyBusinessCard, [{
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            return {
                title: '个人名片',
                path: '/pages/mine/myBusinessCard/showMyBusinessCard?originalFirm=' + this.baseData.originalFirm + '&name=' + this.baseData.name + '&phone=' + this.baseData.phone + '&perEmail=' + this.baseData.perEmail + '&homeAddress=' + this.baseData.homeAddress + '&goodBusiness=' + this.baseData.goodBusiness + '&currentAvatar=' + this.baseData.currentAvatar
            };
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var _this3 = this;

            this.viewSize = wx.getSystemInfo({
                success: function success(res) {
                    _this3.viewSize = res.windowWidth;
                    _this3.$apply();
                }
            });
            this.baseData = options;
            this.$apply();
        }
    }]);

    return showMyBusinessCard;
}(_wepy2.default.page);

exports.default = showMyBusinessCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dNeUJ1c2luZXNzQ2FyZC5qcyJdLCJuYW1lcyI6WyJzaG93TXlCdXNpbmVzc0NhcmQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiYmFzZURhdGEiLCJ2aWV3U2l6ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZGlhbCIsInd4IiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwicGhvbmUiLCJtYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29udGFjdE5vdyIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwiaXRlbUNvbG9yIiwic3VjY2VzcyIsInJlcyIsInRhcEluZGV4IiwiYWRkUGhvbmVDb250YWN0IiwiZmlyc3ROYW1lIiwibmFtZSIsIm1vYmlsZVBob25lTnVtYmVyIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJjb21wbGV0ZSIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJ0aXRsZSIsInBhdGgiLCJvcmlnaW5hbEZpcm0iLCJwZXJFbWFpbCIsImhvbWVBZGRyZXNzIiwiZ29vZEJ1c2luZXNzIiwiY3VycmVudEF2YXRhciIsIm9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxrQjs7Ozs7Ozs7Ozs7Ozs7a05BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDBDQUE4QixTQUZ6QjtBQUdMQyxvQ0FBd0I7QUFIbkIsUyxRQUtUQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyxzQkFBVTtBQUZQLFMsUUFJUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ05DLGdCQURNLGtCQUNBO0FBQ0ZDLG1CQUFHQyxhQUFILENBQWlCO0FBQ2JDLGlDQUFhLEtBQUtQLFFBQUwsQ0FBY1E7QUFEZCxpQkFBakI7QUFHSCxhQUxLO0FBTU5DLGVBTk0saUJBTUQ7QUFDREosbUJBQUdLLFVBQUgsQ0FBYyxFQUFFQyxLQUFLLE9BQVAsRUFBZDtBQUNILGFBUks7QUFTTkMsc0JBVE0sd0JBU087QUFBQTs7QUFDVFAsbUJBQUdRLGVBQUgsQ0FBbUI7QUFDZkMsOEJBQVUsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQURLLEVBQ2U7QUFDOUJDLCtCQUFXLFNBRkksRUFFTztBQUN0QkMsNkJBQVMsc0JBQU87QUFDWixnQ0FBUUMsSUFBSUMsUUFBWjtBQUNJLGlDQUFLLENBQUw7QUFDSWIsbUNBQUdDLGFBQUgsQ0FBaUI7QUFDYkMsaURBQWEsT0FBS1AsUUFBTCxDQUFjUTtBQUMzQjtBQUZhLGlDQUFqQjtBQUlBO0FBQ0osaUNBQUssQ0FBTDtBQUNJSCxtQ0FBR2MsZUFBSCxDQUFtQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLCtDQUFXLE9BQUtwQixRQUFMLENBQWNxQixJQUxWO0FBTWZDLHVEQUFtQixPQUFLdEIsUUFBTCxDQUFjUSxLQU5sQjtBQU9mO0FBQ0E7QUFDQVEsNkNBQVMsaUJBQUNPLE1BQUQsRUFBWTtBQUNqQkMsZ0RBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNILHFDQVhjO0FBWWZHLDBDQUFNLGdCQUFNLENBQUUsQ0FaQztBQWFmQyw4Q0FBVSxvQkFBTSxDQUFFO0FBYkgsaUNBQW5CO0FBZUE7QUF2QlI7QUF5Qkg7QUE3QmMsaUJBQW5CO0FBK0JIO0FBekNLLFMsUUEyQ1ZDLE0sR0FBUyxFLFFBQ1RDLEssR0FBUSxFLFFBQ1JDLFEsR0FBVyxFOzs7Ozs0Q0FDUztBQUNoQixtQkFBTztBQUNIQyx1QkFBTyxNQURKO0FBRUhDLHNCQUFNLGdFQUFnRSxLQUFLaEMsUUFBTCxDQUFjaUMsWUFBOUUsR0FBNkYsUUFBN0YsR0FBd0csS0FBS2pDLFFBQUwsQ0FBY3FCLElBQXRILEdBQTZILFNBQTdILEdBQXlJLEtBQUtyQixRQUFMLENBQWNRLEtBQXZKLEdBQStKLFlBQS9KLEdBQThLLEtBQUtSLFFBQUwsQ0FBY2tDLFFBQTVMLEdBQXVNLGVBQXZNLEdBQXlOLEtBQUtsQyxRQUFMLENBQWNtQyxXQUF2TyxHQUFxUCxnQkFBclAsR0FBd1EsS0FBS25DLFFBQUwsQ0FBY29DLFlBQXRSLEdBQXFTLGlCQUFyUyxHQUF5VCxLQUFLcEMsUUFBTCxDQUFjcUM7QUFGMVUsYUFBUDtBQUlIOzs7K0JBQ01DLE8sRUFBUztBQUFBOztBQUNaLGlCQUFLckMsUUFBTCxHQUFnQkksR0FBR2tDLGFBQUgsQ0FBaUI7QUFDN0J2Qix5QkFBUyxzQkFBTztBQUNaLDJCQUFLZixRQUFMLEdBQWdCZ0IsSUFBSXVCLFdBQXBCO0FBQ0EsMkJBQUtDLE1BQUw7QUFDSDtBQUo0QixhQUFqQixDQUFoQjtBQU1BLGlCQUFLekMsUUFBTCxHQUFnQnNDLE9BQWhCO0FBQ0EsaUJBQUtHLE1BQUw7QUFDSDs7OztFQXhFMkNDLGVBQUtDLEk7O2tCQUFoQ2pELGtCIiwiZmlsZSI6InNob3dNeUJ1c2luZXNzQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNob3dNeUJ1c2luZXNzQ2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5Liq5Lq65ZCN54mHXCIsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBiYXNlRGF0YToge30sXG4gICAgICAgICAgICB2aWV3U2l6ZTogJydcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZGlhbCgpe1xuICAgICAgICAgICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5iYXNlRGF0YS5waG9uZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcCgpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL21hcCcgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFjdE5vdygpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdDogWyfnq4vljbPlkbzlj6snLCAn5L+d5a2Y6Iez6YCa6K6v5b2VJ10sIC8v5oyJ6ZKu55qE5paH5a2X5pWw57uE77yM5pWw57uE6ZW/5bqm5pyA5aSn5Li6NuS4qixcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbG9yOiAnIzVkNzNmYScsIC8v5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuYmFzZURhdGEucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgc3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5hZGRQaG9uZUNvbnRhY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBwaG90b0ZpbGVQYXRoOiAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG5pY2tOYW1lOiAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGxhc3ROYW1lOiAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG1pZGRsZU5hbWU6ICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogdGhpcy5iYXNlRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUGhvbmVOdW1iZXI6IHRoaXMuYmFzZURhdGEucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdlQ2hhdE51bWJlcjogLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBlbWFpbDogLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB3YXRjaCA9IHt9O1xuICAgICAgICBjb21wdXRlZCA9IHt9O1xuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuKrkurrlkI3niYcnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvbWluZS9teUJ1c2luZXNzQ2FyZC9zaG93TXlCdXNpbmVzc0NhcmQ/b3JpZ2luYWxGaXJtPScgKyB0aGlzLmJhc2VEYXRhLm9yaWdpbmFsRmlybSArICcmbmFtZT0nICsgdGhpcy5iYXNlRGF0YS5uYW1lICsgJyZwaG9uZT0nICsgdGhpcy5iYXNlRGF0YS5waG9uZSArICcmcGVyRW1haWw9JyArIHRoaXMuYmFzZURhdGEucGVyRW1haWwgKyAnJmhvbWVBZGRyZXNzPScgKyB0aGlzLmJhc2VEYXRhLmhvbWVBZGRyZXNzICsgJyZnb29kQnVzaW5lc3M9JyArIHRoaXMuYmFzZURhdGEuZ29vZEJ1c2luZXNzICsgJyZjdXJyZW50QXZhdGFyPScgKyB0aGlzLmJhc2VEYXRhLmN1cnJlbnRBdmF0YXIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld1NpemUgPSB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTaXplID0gcmVzLndpbmRvd1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5iYXNlRGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9O1xuICAgIH1cbiJdfQ==