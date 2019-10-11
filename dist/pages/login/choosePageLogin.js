'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chooseLogin = function (_wepy$page) {
    _inherits(chooseLogin, _wepy$page);

    function chooseLogin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, chooseLogin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = chooseLogin.__proto__ || Object.getPrototypeOf(chooseLogin)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            backgroundTextStyle: 'dark',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '律智荟',
            navigationBarTextStyle: 'black'
        }, _this.data = {
            bgImage: '../../images/minapp_startup_bg12.jpg',
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
            code: ''
        }, _this.components = {}, _this.methods = {
            bindGetUserInfo: function bindGetUserInfo(res) {
                if (res.detail.userInfo) {
                    wx.request({
                        url: 'https://www.ailinkedlaw.com/api/Account/GetWechatUserInfo', //接口地址
                        data: {
                            code: this.code,
                            encryptedData: res.detail.encryptedData,
                            iv: res.detail.iv,
                            rawData: res.detail.rawData,
                            signature: res.detail.signature
                        },
                        method: "POST",
                        header: {
                            'content-type': 'application/json' //默认值
                        },
                        success: function success(res) {
                            if (res.data.result.accessToken) {
                                wx.switchTab({
                                    url: '../main/index'
                                });
                                try {
                                    wx.setStorageSync('access', res.data.result.accessToken);
                                } catch (err) {
                                    console.log(err);
                                }
                            } else {
                                wx.navigateTo({
                                    url: './login?openId=' + res.data.result.openId + '&unionId=' + res.data.result.unionId
                                });
                            }
                        }
                    });
                } else {
                    //用户按了拒绝按钮
                    wx.showModal({
                        title: '警告',
                        content: '您点击了拒绝授权，将无法快捷进入小程序，请授权之后再进入!!!',
                        showCancel: false,
                        confirmText: '返回授权',
                        success: function success(res) {
                            if (res.confirm) {
                                console.log('用户点击了“返回授权”');
                            }
                        }
                    });
                }
            },
            toLogin: function toLogin() {
                wx.navigateTo({
                    url: './login'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(chooseLogin, [{
        key: 'onShow',
        value: function onShow() {
            var _this2 = this;

            wx.login({
                success: function success(res) {
                    var code = res.code;
                    _this2.code = res.code;
                    _this2.$apply();
                },
                fail: function fail() {},
                complete: function complete() {}
            });
        }
    }]);

    return chooseLogin;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(chooseLogin , 'pages/login/choosePageLogin'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZVBhZ2VMb2dpbi5qcyJdLCJuYW1lcyI6WyJjaG9vc2VMb2dpbiIsImNvbmZpZyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiYmdJbWFnZSIsImNhbklVc2UiLCJ3eCIsImNvZGUiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImJpbmRHZXRVc2VySW5mbyIsInJlcyIsImRldGFpbCIsInVzZXJJbmZvIiwicmVxdWVzdCIsInVybCIsImVuY3J5cHRlZERhdGEiLCJpdiIsInJhd0RhdGEiLCJzaWduYXR1cmUiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzdWx0IiwiYWNjZXNzVG9rZW4iLCJzd2l0Y2hUYWIiLCJzZXRTdG9yYWdlU3luYyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwib3BlbklkIiwidW5pb25JZCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJ0b0xvZ2luIiwibG9naW4iLCIkYXBwbHkiLCJmYWlsIiwiY29tcGxldGUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNMQyxpQ0FBcUIsTUFEaEI7QUFFTEMsMENBQThCLE1BRnpCO0FBR0xDLG9DQUF3QixLQUhuQjtBQUlMQyxvQ0FBd0I7QUFKbkIsUyxRQU1UQyxJLEdBQU87QUFDSEMscUJBQVMsc0NBRE47QUFFSEMscUJBQVNDLEdBQUdELE9BQUgsQ0FBVyw4QkFBWCxDQUZOO0FBR0hFLGtCQUFNO0FBSEgsUyxRQUtQQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVU7QUFDTkMsMkJBRE0sMkJBQ1VDLEdBRFYsRUFDZTtBQUNqQixvQkFBSUEsSUFBSUMsTUFBSixDQUFXQyxRQUFmLEVBQXlCO0FBQ3JCUCx1QkFBR1EsT0FBSCxDQUFXO0FBQ1BDLDZCQUFLLDJEQURFLEVBQzJEO0FBQ2xFWiw4QkFBTTtBQUNGSSxrQ0FBTSxLQUFLQSxJQURUO0FBRUZTLDJDQUFlTCxJQUFJQyxNQUFKLENBQVdJLGFBRnhCO0FBR0ZDLGdDQUFJTixJQUFJQyxNQUFKLENBQVdLLEVBSGI7QUFJRkMscUNBQVNQLElBQUlDLE1BQUosQ0FBV00sT0FKbEI7QUFLRkMsdUNBQVdSLElBQUlDLE1BQUosQ0FBV087QUFMcEIseUJBRkM7QUFTUEMsZ0NBQVEsTUFURDtBQVVQQyxnQ0FBUTtBQUNKLDRDQUFnQixrQkFEWixDQUMrQjtBQUQvQix5QkFWRDtBQWFQQyxpQ0FBUyxzQkFBTztBQUNaLGdDQUFJWCxJQUFJUixJQUFKLENBQVNvQixNQUFULENBQWdCQyxXQUFwQixFQUFpQztBQUM3QmxCLG1DQUFHbUIsU0FBSCxDQUFhO0FBQ1RWLHlDQUFLO0FBREksaUNBQWI7QUFHQSxvQ0FBSTtBQUNBVCx1Q0FBR29CLGNBQUgsQ0FBa0IsUUFBbEIsRUFBNEJmLElBQUlSLElBQUosQ0FBU29CLE1BQVQsQ0FBZ0JDLFdBQTVDO0FBQ0gsaUNBRkQsQ0FFRSxPQUFPRyxHQUFQLEVBQVk7QUFDVkMsNENBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNIO0FBQ0osNkJBVEQsTUFTTztBQUNIckIsbUNBQUd3QixVQUFILENBQWM7QUFDVmYseUNBQUssb0JBQW9CSixJQUFJUixJQUFKLENBQVNvQixNQUFULENBQWdCUSxNQUFwQyxHQUE2QyxXQUE3QyxHQUEyRHBCLElBQUlSLElBQUosQ0FBU29CLE1BQVQsQ0FBZ0JTO0FBRHRFLGlDQUFkO0FBR0g7QUFDSjtBQTVCTSxxQkFBWDtBQThCSCxpQkEvQkQsTUErQk87QUFDSDtBQUNBMUIsdUJBQUcyQixTQUFILENBQWE7QUFDVEMsK0JBQU8sSUFERTtBQUVUQyxpQ0FBUyxpQ0FGQTtBQUdUQyxvQ0FBWSxLQUhIO0FBSVRDLHFDQUFhLE1BSko7QUFLVGYsaUNBQVMsaUJBQVNYLEdBQVQsRUFBYztBQUNuQixnQ0FBSUEsSUFBSTJCLE9BQVIsRUFBaUI7QUFDYlYsd0NBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFDSjtBQVRRLHFCQUFiO0FBV0g7QUFDSixhQS9DSztBQWdETlUsbUJBaERNLHFCQWdESTtBQUNOakMsbUJBQUd3QixVQUFILENBQWM7QUFDVmYseUJBQUs7QUFESyxpQkFBZDtBQUdIO0FBcERLLFM7Ozs7O2lDQXNERDtBQUFBOztBQUNMVCxlQUFHa0MsS0FBSCxDQUFTO0FBQ0xsQix5QkFBUyxzQkFBTztBQUNaLHdCQUFJZixPQUFPSSxJQUFJSixJQUFmO0FBQ0EsMkJBQUtBLElBQUwsR0FBWUksSUFBSUosSUFBaEI7QUFDQSwyQkFBS2tDLE1BQUw7QUFDSCxpQkFMSTtBQU1MQyxzQkFBTSxnQkFBTSxDQUFFLENBTlQ7QUFPTEMsMEJBQVUsb0JBQU0sQ0FBRTtBQVBiLGFBQVQ7QUFTSDs7OztFQTdFb0NDLGVBQUtDLEk7O2tCQUF6QmhELFciLCJmaWxlIjoiY2hvb3NlUGFnZUxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjaG9vc2VMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflvovmmbrojZ8nLFxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYmdJbWFnZTogJy4uLy4uL2ltYWdlcy9taW5hcHBfc3RhcnR1cF9iZzEyLmpwZycsXG4gICAgICAgICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZEdldFVzZXJJbmZvKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGV0YWlsLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWlsaW5rZWRsYXcuY29tL2FwaS9BY2NvdW50L0dldFdlY2hhdFVzZXJJbmZvJywgLy/mjqXlj6PlnLDlnYBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogcmVzLmRldGFpbC5lbmNyeXB0ZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2OiByZXMuZGV0YWlsLml2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHJlcy5kZXRhaWwucmF3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kZXRhaWwuc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy/pu5jorqTlgLxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZXN1bHQuYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uL21haW4vaW5kZXgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnYWNjZXNzJywgcmVzLmRhdGEucmVzdWx0LmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2xvZ2luP29wZW5JZD0nICsgcmVzLmRhdGEucmVzdWx0Lm9wZW5JZCArICcmdW5pb25JZD0nICsgcmVzLmRhdGEucmVzdWx0LnVuaW9uSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL+eUqOaIt+aMieS6huaLkue7neaMiemSrlxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICforablkYonLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aCqOeCueWHu+S6huaLkue7neaOiOadg++8jOWwhuaXoOazleW/q+aNt+i/m+WFpeWwj+eoi+W6j++8jOivt+aOiOadg+S5i+WQjuWGjei/m+WFpSEhIScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75LqG4oCc6L+U5Zue5o6I5p2D4oCdJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTG9naW4oKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vbG9naW4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHJlcy5jb2RlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSByZXMuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuIl19