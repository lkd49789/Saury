'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var distributionInformation = function (_wepy$page) {
  _inherits(distributionInformation, _wepy$page);

  function distributionInformation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, distributionInformation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = distributionInformation.__proto__ || Object.getPrototypeOf(distributionInformation)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      submitData: {},
      caseId: '',
      allocStyleListData: {},
      lawyerChargeList: [],
      AllocBaseAmount: '',
      AllocStyle: ''
    }, _this.components = {}, _this.methods = {
      submitData: function submitData() {
        this.submitData.AllocBaseAmount = this.AllocBaseAmount;
        this.submitData.AllocStyle = this.AllocStyle;
        this.CreateOrUpdateCaseCharge();
      },
      UpdateLawyerCharge: function UpdateLawyerCharge(item, index, e) {
        var value = +e.detail.value;
        var subData = item;
        if (value !== subData.allocRatio) {
          subData.allocRatio = value;
          delete subData.avatar;
          this.UpdateCaseLawyerCharge(subData, index);
        }
      },
      AllocBaseAmount: function AllocBaseAmount(e) {
        this.AllocBaseAmount = e.detail.value;
        this.$apply();
      },
      radioChange: function radioChange(e) {
        this.AllocStyle = e.detail.value;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(distributionInformation, [{
    key: 'GetCaseChargeAndContractForEdit',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(caseId) {
        var resData, index;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeAndContractForEdit', 'post', {
                  Id: this.caseId
                });

              case 2:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  this.allocStyleListData = resData.data.result.allocStyleList;
                  for (index in this.allocStyleListData) {
                    if (this.allocStyleListData[index].value == this.submitData.AllocStyle) {
                      this.allocStyleListData[index].isSelected = true;
                      this.AllocStyle = this.allocStyleListData[index].value;
                      this.AllocBaseAmount = this.submitData.AllocBaseAmount;
                    }
                  }
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetCaseChargeAndContractForEdit(_x) {
        return _ref2.apply(this, arguments);
      }

      return GetCaseChargeAndContractForEdit;
    }()
  }, {
    key: 'GetCaseChargeList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var resData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeList', 'post', {
                  id: this.caseId
                });

              case 2:
                resData = _context2.sent;

                if (resData.statusCode == 200) {
                  this.lawyerChargeList = resData.data.result.lawyerChargeList;
                  this.GetAvatar(resData.data.result.lawyerChargeList);
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetCaseChargeList() {
        return _ref3.apply(this, arguments);
      }

      return GetCaseChargeList;
    }()
  }, {
    key: 'GetAvatar',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var index, http;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = regeneratorRuntime.keys(data);

              case 1:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 9;
                  break;
                }

                index = _context3.t1.value;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + data[index].userId;
                _context3.next = 6;
                return _ajax2.default.getAavatar(http);

              case 6:
                this.lawyerChargeList[index].avatar = _context3.sent;
                _context3.next = 1;
                break;

              case 9:
                this.$apply();

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetAvatar(_x2) {
        return _ref4.apply(this, arguments);
      }

      return GetAvatar;
    }()
  }, {
    key: 'UpdateCaseLawyerCharge',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(subData, index) {
        var resData;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                wx.showLoading({
                  title: 'Loading...', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                _context4.next = 3;
                return _ajax2.default.getData('/api/services/web/caseLawyer/UpdateCaseLawyerCharge', 'post', subData);

              case 3:
                resData = _context4.sent;

                if (resData.statusCode == 200) {
                  this.lawyerChargeList[index].allocRatio = subData.allocRatio;
                  this.$apply();
                } else {
                  wx.showToast({
                    title: resData.data.error.message, //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: false, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                  });
                }

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function UpdateCaseLawyerCharge(_x3, _x4) {
        return _ref5.apply(this, arguments);
      }

      return UpdateCaseLawyerCharge;
    }()
    //提交数据

  }, {
    key: 'CreateOrUpdateCaseCharge',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var resData;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                wx.showLoading({
                  title: 'Loading...', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                _context5.next = 3;
                return _ajax2.default.getData('/api/services/web/case/CreateOrUpdateCaseCharge', 'post', this.submitData);

              case 3:
                resData = _context5.sent;

                if (resData.statusCode == 200) {
                  wx.setStorage({
                    key: 'CREATE_LAWYERCHARGE_DATA',
                    data: this.submitData,
                    success: function success() {
                      wx.navigateBack({
                        delta: 3 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                      });
                    }
                  });
                }

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function CreateOrUpdateCaseCharge() {
        return _ref6.apply(this, arguments);
      }

      return CreateOrUpdateCaseCharge;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.caseId = options.caseId || 'EB97EE3D-EE60-E911-AC1B-B0D9BF31DAD7';
      this.submitData = wx.getStorageSync('CREATE_LAWYERCHARGE_DATA');
      this.GetCaseChargeAndContractForEdit();
      this.GetCaseChargeList();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return distributionInformation;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(distributionInformation , 'pages/modules/myRegister/caseChargeAndContract/distributionInformation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RyaWJ1dGlvbkluZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbImRpc3RyaWJ1dGlvbkluZm9ybWF0aW9uIiwiZGF0YSIsInN1Ym1pdERhdGEiLCJjYXNlSWQiLCJhbGxvY1N0eWxlTGlzdERhdGEiLCJsYXd5ZXJDaGFyZ2VMaXN0IiwiQWxsb2NCYXNlQW1vdW50IiwiQWxsb2NTdHlsZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiQ3JlYXRlT3JVcGRhdGVDYXNlQ2hhcmdlIiwiVXBkYXRlTGF3eWVyQ2hhcmdlIiwiaXRlbSIsImluZGV4IiwiZSIsInZhbHVlIiwiZGV0YWlsIiwic3ViRGF0YSIsImFsbG9jUmF0aW8iLCJhdmF0YXIiLCJVcGRhdGVDYXNlTGF3eWVyQ2hhcmdlIiwiJGFwcGx5IiwicmFkaW9DaGFuZ2UiLCJhamF4IiwiZ2V0RGF0YSIsIklkIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJhbGxvY1N0eWxlTGlzdCIsImlzU2VsZWN0ZWQiLCJpZCIsIkdldEF2YXRhciIsImh0dHAiLCJ1c2VySWQiLCJnZXRBYXZhdGFyIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInN1Y2Nlc3MiLCJzaG93VG9hc3QiLCJlcnJvciIsIm1lc3NhZ2UiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRTdG9yYWdlIiwia2V5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvcHRpb25zIiwiZ2V0U3RvcmFnZVN5bmMiLCJHZXRDYXNlQ2hhcmdlQW5kQ29udHJhY3RGb3JFZGl0IiwiR2V0Q2FzZUNoYXJnZUxpc3QiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLHVCOzs7Ozs7Ozs7Ozs7Ozt3TkFDbkJDLEksR0FBTztBQUNMQyxrQkFBVyxFQUROO0FBRUxDLGNBQVEsRUFGSDtBQUdMQywwQkFBb0IsRUFIZjtBQUlMQyx3QkFBa0IsRUFKYjtBQUtMQyx1QkFB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ZDtBQVNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBRUVDLE8sRUFBUztBQUNkLFdBQUsvQyxNQUFMLEdBQWMrQyxRQUFRL0MsTUFBUixJQUFnQixzQ0FBOUI7QUFDQSxXQUFLRCxVQUFMLEdBQWtCa0MsR0FBR2UsY0FBSCxDQUFrQiwwQkFBbEIsQ0FBbEI7QUFDQSxXQUFLQywrQkFBTDtBQUNBLFdBQUtDLGlCQUFMO0FBQ0Q7Ozs2QkFDUSxDQUFFOzs7O0VBakl3Q0MsZUFBS0MsSTs7a0JBQXJDdkQsdUIiLCJmaWxlIjoiZGlzdHJpYnV0aW9uSW5mb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGRpc3RyaWJ1dGlvbkluZm9ybWF0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgc3VibWl0RGF0YTp7fSxcbiAgICAgIGNhc2VJZDogJycsXG4gICAgICBhbGxvY1N0eWxlTGlzdERhdGE6IHt9LFxuICAgICAgbGF3eWVyQ2hhcmdlTGlzdDogW10sXG4gICAgICBBbGxvY0Jhc2VBbW91bnQ6JycsXG4gICAgICBBbGxvY1N0eWxlOicnXG4gICAgfTtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN1Ym1pdERhdGEoKXtcbiAgICAgICAgdGhpcy5zdWJtaXREYXRhLkFsbG9jQmFzZUFtb3VudD10aGlzLkFsbG9jQmFzZUFtb3VudDtcbiAgICAgICAgdGhpcy5zdWJtaXREYXRhLkFsbG9jU3R5bGU9dGhpcy5BbGxvY1N0eWxlO1xuICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlQ2FzZUNoYXJnZSgpO1xuICAgICAgfSxcbiAgICAgIFVwZGF0ZUxhd3llckNoYXJnZShpdGVtLGluZGV4LGUpe1xuICAgICAgICB2YXIgdmFsdWU9K2UuZGV0YWlsLnZhbHVlO1xuICAgICAgICB2YXIgc3ViRGF0YT1pdGVtO1xuICAgICAgICBpZih2YWx1ZSE9PXN1YkRhdGEuYWxsb2NSYXRpbyl7XG4gICAgICAgICAgc3ViRGF0YS5hbGxvY1JhdGlvPXZhbHVlO1xuICAgICAgICAgIGRlbGV0ZSBzdWJEYXRhLmF2YXRhcjtcbiAgICAgICAgICB0aGlzLlVwZGF0ZUNhc2VMYXd5ZXJDaGFyZ2Uoc3ViRGF0YSxpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBBbGxvY0Jhc2VBbW91bnQoZSl7XG4gICAgICAgIHRoaXMuQWxsb2NCYXNlQW1vdW50PWUuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHJhZGlvQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5BbGxvY1N0eWxlPWUuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgYXN5bmMgR2V0Q2FzZUNoYXJnZUFuZENvbnRyYWN0Rm9yRWRpdChjYXNlSWQpIHtcbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlQ2hhcmdlQW5kQ29udHJhY3RGb3JFZGl0JyxcbiAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgSWQ6IHRoaXMuY2FzZUlkXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHRoaXMuYWxsb2NTdHlsZUxpc3REYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5hbGxvY1N0eWxlTGlzdDtcbiAgICAgICAgZm9yKHZhciBpbmRleCBpbiB0aGlzLmFsbG9jU3R5bGVMaXN0RGF0YSl7XG4gICAgICAgICAgaWYoIHRoaXMuYWxsb2NTdHlsZUxpc3REYXRhW2luZGV4XS52YWx1ZT09dGhpcy5zdWJtaXREYXRhLkFsbG9jU3R5bGUpe1xuICAgICAgICAgICAgdGhpcy5hbGxvY1N0eWxlTGlzdERhdGFbaW5kZXhdLmlzU2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuQWxsb2NTdHlsZT10aGlzLmFsbG9jU3R5bGVMaXN0RGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLkFsbG9jQmFzZUFtb3VudD10aGlzLnN1Ym1pdERhdGEuQWxsb2NCYXNlQW1vdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBHZXRDYXNlQ2hhcmdlTGlzdCgpIHtcbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlQ2hhcmdlTGlzdCcsXG4gICAgICAgICdwb3N0Jywge1xuICAgICAgICAgIGlkOiB0aGlzLmNhc2VJZFxuICAgICAgICB9XG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLmxhd3llckNoYXJnZUxpc3QgPSByZXNEYXRhLmRhdGEucmVzdWx0Lmxhd3llckNoYXJnZUxpc3Q7XG4gICAgICAgIHRoaXMuR2V0QXZhdGFyKHJlc0RhdGEuZGF0YS5yZXN1bHQubGF3eWVyQ2hhcmdlTGlzdClcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgR2V0QXZhdGFyKGRhdGEpIHtcbiAgICAgIGZvciAodmFyIGluZGV4IGluIGRhdGEpIHtcbiAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgZGF0YVtpbmRleF0udXNlcklkO1xuICAgICAgICB0aGlzLmxhd3llckNoYXJnZUxpc3RbaW5kZXhdLmF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIGFzeW5jIFVwZGF0ZUNhc2VMYXd5ZXJDaGFyZ2Uoc3ViRGF0YSxpbmRleCl7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICB9KTtcbiAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VMYXd5ZXIvVXBkYXRlQ2FzZUxhd3llckNoYXJnZScsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAgc3ViRGF0YVxuICAgICAgKVxuICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICB0aGlzLmxhd3llckNoYXJnZUxpc3RbaW5kZXhdLmFsbG9jUmF0aW89c3ViRGF0YS5hbGxvY1JhdGlvO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAgLy/mj5DkuqTmlbDmja5cbiAgICBhc3luYyBDcmVhdGVPclVwZGF0ZUNhc2VDaGFyZ2UoKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9DcmVhdGVPclVwZGF0ZUNhc2VDaGFyZ2UnLFxuICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICB0aGlzLnN1Ym1pdERhdGFcbiAgICAgIClcbiAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICBrZXk6ICdDUkVBVEVfTEFXWUVSQ0hBUkdFX0RBVEEnLFxuICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN1Ym1pdERhdGEsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAzIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLmNhc2VJZCA9IG9wdGlvbnMuY2FzZUlkfHwnRUI5N0VFM0QtRUU2MC1FOTExLUFDMUItQjBEOUJGMzFEQUQ3JztcbiAgICAgIHRoaXMuc3VibWl0RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfTEFXWUVSQ0hBUkdFX0RBVEEnKTtcbiAgICAgIHRoaXMuR2V0Q2FzZUNoYXJnZUFuZENvbnRyYWN0Rm9yRWRpdCgpO1xuICAgICAgdGhpcy5HZXRDYXNlQ2hhcmdlTGlzdCgpO1xuICAgIH07XG4gICAgb25TaG93KCkge307XG4gIH1cbiJdfQ==