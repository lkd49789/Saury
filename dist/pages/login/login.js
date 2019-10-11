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

var login = function (_wepy$page) {
  _inherits(login, _wepy$page);

  function login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = login.__proto__ || Object.getPrototypeOf(login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '律智荟',
      navigationBarTextStyle: 'black'
    }, _this.data = {
      loginImage: '../../images/login.jpg',
      err: false,
      token: 0,
      openId: '',
      unionId: ''
    }, _this.methods = {
      toforgate: function toforgate() {
        _wepy2.default.navigateTo({
          url: '../login/forgetPassword'
        });
      },
      formSubmit: function formSubmit(e) {
        var _this2 = this;

        wx.request({
          url: 'https://www.ailinkedlaw.com/api/Account/GetAccessToken',
          method: 'post',
          data: {
            tenancyName: e.detail.value.domain,
            usernameOrEmailAddress: e.detail.value.username,
            password: e.detail.value.password
          },
          success: function success(res) {
            if (res.statusCode == 200) {
              var accessToken = res.data.result.accessToken;
              if (_this2.openId && _this2.unionId) {
                var data = {
                  openId: _this2.openId,
                  unionId: _this2.unionId,
                  loginProvider: 'WechatMini'
                };
                wx.request({
                  url: 'https://www.ailinkedlaw.com/api/services/web/userExternalLogin/AddWechatUserLogin',
                  method: 'POST',
                  header: {
                    Authorization: 'Bearer ' + accessToken
                  },
                  data: data,
                  success: function success(resData) {
                    if (resData.data.success) {
                      _this2.storage(accessToken);
                    } else {
                      wx.showModal({
                        title: '警告',
                        content: resData.data.error.message,
                        showCancel: true,
                        confirmText: '确定',
                        success: function success(res) {
                          if (res.confirm) {
                            _this2.storage(accessToken);
                          }
                        }
                      });
                    }
                  },
                  fail: function fail(err) {
                    console.log(err);
                  },
                  complete: function complete() {}
                });
                // this.AddWechatUserLogin();
              } else {
                _this2.storage(accessToken);
              }
            } else {
              wx.showToast({
                title: '登陆失败！',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: function success(result) {},
                fail: function fail() {},
                complete: function complete() {}
              });
            }
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // mixins = [TestMixin ];


  _createClass(login, [{
    key: 'storage',

    // onShow() {
    //   wx.hideTabBar({
    //     animation: false //是否需要过渡动画
    //   });
    // }
    value: function storage(accessToken) {
      try {
        wx.setStorageSync('access', accessToken);
      } catch (err) {
        console.log(err);
      }
      wx.switchTab({
        url: '../main/index'
      });
    }
    // async AddWechatUserLogin() {
    //   var data = {
    //     openId: this.openId,
    //     unionId: this.unionId,
    //     loginProvider: 'WechatMini',
    //   }
    //   var resData = await ajax.getData(
    //     '/api/services/web/userExternalLogin/AddWechatUserLogin',
    //     'POST',
    //     data
    //   )
    //   console.log(resData);
    //   // console.log(resData.error.message);
    // }

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      if (Object.keys(options).length !== 0) {
        this.openId = options.openId;
        this.unionId = options.unionId;
      }
      this.$apply();
    }
  }]);

  return login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(login , 'pages/login/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwiY29uZmlnIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImRhdGEiLCJsb2dpbkltYWdlIiwiZXJyIiwidG9rZW4iLCJvcGVuSWQiLCJ1bmlvbklkIiwibWV0aG9kcyIsInRvZm9yZ2F0ZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZm9ybVN1Ym1pdCIsImUiLCJ3eCIsInJlcXVlc3QiLCJtZXRob2QiLCJ0ZW5hbmN5TmFtZSIsImRldGFpbCIsInZhbHVlIiwiZG9tYWluIiwidXNlcm5hbWVPckVtYWlsQWRkcmVzcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsImFjY2Vzc1Rva2VuIiwicmVzdWx0IiwibG9naW5Qcm92aWRlciIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJyZXNEYXRhIiwic3RvcmFnZSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImVycm9yIiwibWVzc2FnZSIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIiwic2hvd1RvYXN0IiwiaWNvbiIsImltYWdlIiwiZHVyYXRpb24iLCJtYXNrIiwic2V0U3RvcmFnZVN5bmMiLCJzd2l0Y2hUYWIiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsMkJBQXFCLE1BRGQ7QUFFUEMsb0NBQThCLE1BRnZCO0FBR1BDLDhCQUF3QixLQUhqQjtBQUlQQyw4QkFB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ekMsR0FBWjtBQUNEO0FBQ0RXLFNBQUdzQyxTQUFILENBQWE7QUFDWHpDLGFBQUs7QUFETSxPQUFiO0FBR0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzJCQUNPMEMsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBT0MsSUFBUCxDQUFZRixPQUFaLEVBQXFCRyxNQUFyQixLQUFnQyxDQUFwQyxFQUF1QztBQUNyQyxhQUFLbkQsTUFBTCxHQUFjZ0QsUUFBUWhELE1BQXRCO0FBQ0EsYUFBS0MsT0FBTCxHQUFlK0MsUUFBUS9DLE9BQXZCO0FBQ0Q7QUFDRCxXQUFLbUQsTUFBTDtBQUNEOzs7O0VBaklnQ2hELGVBQUtpRCxJOztrQkFBbkIvRCxLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflvovmmbrojZ8nLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH07XG4gICAgLy8gbWl4aW5zID0gW1Rlc3RNaXhpbiBdO1xuICAgIGRhdGEgPSB7XG4gICAgICBsb2dpbkltYWdlOiAnLi4vLi4vaW1hZ2VzL2xvZ2luLmpwZycsXG4gICAgICBlcnI6IGZhbHNlLFxuICAgICAgdG9rZW46IDAsXG4gICAgICBvcGVuSWQ6ICcnLFxuICAgICAgdW5pb25JZDogJydcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b2ZvcmdhdGUoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vbG9naW4vZm9yZ2V0UGFzc3dvcmQnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5haWxpbmtlZGxhdy5jb20vYXBpL0FjY291bnQvR2V0QWNjZXNzVG9rZW4nLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRlbmFuY3lOYW1lOiBlLmRldGFpbC52YWx1ZS5kb21haW4sXG4gICAgICAgICAgICB1c2VybmFtZU9yRW1haWxBZGRyZXNzOiBlLmRldGFpbC52YWx1ZS51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBlLmRldGFpbC52YWx1ZS5wYXNzd29yZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZT09MjAwKSB7XG4gICAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IHJlcy5kYXRhLnJlc3VsdC5hY2Nlc3NUb2tlblxuICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuSWQgJiYgdGhpcy51bmlvbklkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICBvcGVuSWQ6IHRoaXMub3BlbklkLFxuICAgICAgICAgICAgICAgICAgdW5pb25JZDogdGhpcy51bmlvbklkLFxuICAgICAgICAgICAgICAgICAgbG9naW5Qcm92aWRlcjogJ1dlY2hhdE1pbmknLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFpbGlua2VkbGF3LmNvbS9hcGkvc2VydmljZXMvd2ViL3VzZXJFeHRlcm5hbExvZ2luL0FkZFdlY2hhdFVzZXJMb2dpbicsXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZShhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcz0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlKGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5BZGRXZWNoYXRVc2VyTG9naW4oKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UoYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eZu+mZhuWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAoKT0+e30sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6ICgpPT57fVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBvblNob3coKSB7XG4gICAgLy8gICB3eC5oaWRlVGFiQmFyKHtcbiAgICAvLyAgICAgYW5pbWF0aW9uOiBmYWxzZSAvL+aYr+WQpumcgOimgei/h+a4oeWKqOeUu1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICAgIHN0b3JhZ2UoYWNjZXNzVG9rZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdhY2Nlc3MnLCBhY2Nlc3NUb2tlbilcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnLi4vbWFpbi9pbmRleCdcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIGFzeW5jIEFkZFdlY2hhdFVzZXJMb2dpbigpIHtcbiAgICAvLyAgIHZhciBkYXRhID0ge1xuICAgIC8vICAgICBvcGVuSWQ6IHRoaXMub3BlbklkLFxuICAgIC8vICAgICB1bmlvbklkOiB0aGlzLnVuaW9uSWQsXG4gICAgLy8gICAgIGxvZ2luUHJvdmlkZXI6ICdXZWNoYXRNaW5pJyxcbiAgICAvLyAgIH1cbiAgICAvLyAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgIC8vICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdXNlckV4dGVybmFsTG9naW4vQWRkV2VjaGF0VXNlckxvZ2luJyxcbiAgICAvLyAgICAgJ1BPU1QnLFxuICAgIC8vICAgICBkYXRhXG4gICAgLy8gICApXG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlc0RhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgLy8gfVxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMub3BlbklkID0gb3B0aW9ucy5vcGVuSWQ7XG4gICAgICAgIHRoaXMudW5pb25JZCA9IG9wdGlvbnMudW5pb25JZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG4iXX0=