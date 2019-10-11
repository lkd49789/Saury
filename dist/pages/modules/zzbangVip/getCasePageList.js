'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _thirdParty_ajax = require('./../../../utils/cofig/thirdParty_ajax.js');

var _thirdParty_ajax2 = _interopRequireDefault(_thirdParty_ajax);

var _api = require('./../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getCasePageList = function (_wepy$page) {
  _inherits(getCasePageList, _wepy$page);

  function getCasePageList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, getCasePageList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = getCasePageList.__proto__ || Object.getPrototypeOf(getCasePageList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      backgroundColorTop: '#f4f4f4',
      backgroundColorBottom: '#f4f4f4'
    }, _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
      navbar: _navbar2.default
    }, _this.data = {
      userId: '',
      tenantId: '',
      currentTab: 0,
      navbars: ['案件列表', '抢单中', '进行中', '已完成'],
      totalCount: 0,
      Page: 1,
      casePageListDatas: [],
      CaseType: 1,
      isRegister: false,
      PlatformMemberId: ''
    }, _this.methods = {
      toCaseDetail: function toCaseDetail(CaseId) {
        wx.navigateTo({
          url: './caseDetailPage?CaseId=' + CaseId + '&CaseType=' + this.CaseType + '&PlatformMemberId=' + this.PlatformMemberId
        });
      },
      toRegisterPage: function toRegisterPage() {
        wx.navigateTo({
          url: './register'
        });
      }
    }, _this.events = {}, _this.watch = {
      currentTab: function currentTab(cur) {
        this.totalCount = 0;
        this.Page = 1;
        this.casePageListDatas = [];
        switch (cur) {
          case 0:
            this.CaseType = 1;
            break;
          case 1:
            this.CaseType = 2;
            break;
          case 2:
            this.CaseType = 3;
            break;
          case 3:
            this.CaseType = 4;
            break;
          default:
            break;
        }
        this.GetCasePageList();
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(getCasePageList, [{
    key: 'onPullDownRefresh',

    // 下拉刷新
    value: function onPullDownRefresh() {
      this.casePageListDatas = [];
      this.Page = 1;
      this.GetCasePageList();
      wx.hideNavigationBarLoading(); //完成停止加载
      wx.stopPullDownRefresh(); //停止下拉刷新
    }
    // 上拉加载

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (this.totalCount / 10 > this.Page && this.$parent.global.netWorkString) {
        this.Page += 1;
        this.GetCasePageList();
      } else {
        if (this.$parent.global.netWorkString) {
          wx.showToast({
            title: '我们是有底线的！',
            icon: 'none',
            duration: 1500,
            mask: false
          });
        } else {
          wx.showToast({
            title: '网络连接失败！',
            icon: 'none',
            duration: 1500,
            mask: false
          });
        }
      }
    }
    //接案列表

  }, {
    key: 'GetCasePageList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data, resData, _casePageListDatas, casePageListDatas, index;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({
                  title: 'Loading...', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                data = {
                  Page: this.Page,
                  Limit: 10,
                  CaseType: this.CaseType,
                  PlatformMemberId: this.PlatformMemberId
                };
                _context.next = 4;
                return _thirdParty_ajax2.default.getData('/Cases/GetCasePageList', 'POST', data);

              case 4:
                resData = _context.sent;

                if (!(resData.data.state == 200)) {
                  _context.next = 35;
                  break;
                }

                this.totalCount = resData.data.data.totalCount;
                casePageListDatas = resData.data.data.caseData;
                _context.t0 = regeneratorRuntime.keys(casePageListDatas);

              case 9:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 32;
                  break;
                }

                index = _context.t1.value;

                casePageListDatas[index].Fee = (0, _api.tranNumber)(casePageListDatas[index].Fee, 0);
                _context.t2 = casePageListDatas[index].CaseLevel;
                _context.next = _context.t2 === 1 ? 15 : _context.t2 === 2 ? 17 : _context.t2 === 3 ? 19 : _context.t2 === 4 ? 21 : _context.t2 === 5 ? 23 : _context.t2 === 6 ? 25 : _context.t2 === 7 ? 27 : 29;
                break;

              case 15:
                casePageListDatas[index].CaseLevel = 'A+级';
                return _context.abrupt('break', 30);

              case 17:
                casePageListDatas[index].CaseLevel = 'A级';
                return _context.abrupt('break', 30);

              case 19:
                casePageListDatas[index].CaseLevel = 'A-级';
                return _context.abrupt('break', 30);

              case 21:
                casePageListDatas[index].CaseLevel = 'B+级';
                return _context.abrupt('break', 30);

              case 23:
                casePageListDatas[index].CaseLevel = 'B级';
                return _context.abrupt('break', 30);

              case 25:
                casePageListDatas[index].CaseLevel = 'B-级';
                return _context.abrupt('break', 30);

              case 27:
                casePageListDatas[index].CaseLevel = 'C级';
                return _context.abrupt('break', 30);

              case 29:
                return _context.abrupt('break', 30);

              case 30:
                _context.next = 9;
                break;

              case 32:
                (_casePageListDatas = this.casePageListDatas).push.apply(_casePageListDatas, _toConsumableArray(casePageListDatas));
                _context.next = 36;
                break;

              case 35:
                wx.showToast({
                  title: resData.data.data.msg, //提示的内容,
                  icon: 'none', //图标,
                  duration: 2000, //延迟时间,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });

              case 36:
                this.$apply();

              case 37:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetCasePageList() {
        return _ref2.apply(this, arguments);
      }

      return GetCasePageList;
    }()
    //判断是否登录

  }, {
    key: 'MemberRegisterState',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var resData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showLoading({
                  title: 'Loading...', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                _context2.next = 3;
                return _thirdParty_ajax2.default.getData('/Register/MemberRegisterState', 'GET', {
                  PlatformMemberId: this.tenantId + this.userId
                });

              case 3:
                resData = _context2.sent;

                if (resData.data.data.status) {
                  this.isRegister = true;
                  this.PlatformMemberId = this.tenantId + this.userId;
                } else {
                  this.isRegister = false;
                  this.PlatformMemberId = '';
                }
                this.GetCasePageList();
                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function MemberRegisterState() {
        return _ref3.apply(this, arguments);
      }

      return MemberRegisterState;
    }()
  }, {
    key: 'isRefresh',
    value: function isRefresh(refresh, PlatformMemberId) {
      if (refresh) {
        this.totalCount = 0;
        this.Page = 1;
        this.currentTab = 0;
        this.casePageListDatas = [];
        this.MemberRegisterState();
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      if (this.$parent.global.userInfo.id && this.$parent.global.tenant.id) {
        this.userId = this.$parent.global.userInfo.id.toString();
        this.tenantId = this.$parent.global.tenant.id.toString();
      }
      this.MemberRegisterState();
    }
  }]);

  return getCasePageList;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(getCasePageList , 'pages/modules/zzbangVip/getCasePageList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldENhc2VQYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJnZXRDYXNlUGFnZUxpc3QiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibmF2YmFyIiwiZGF0YSIsInVzZXJJZCIsInRlbmFudElkIiwiY3VycmVudFRhYiIsIm5hdmJhcnMiLCJ0b3RhbENvdW50IiwiUGFnZSIsImNhc2VQYWdlTGlzdERhdGFzIiwiQ2FzZVR5cGUiLCJpc1JlZ2lzdGVyIiwiUGxhdGZvcm1NZW1iZXJJZCIsIm1ldGhvZHMiLCJ0b0Nhc2VEZXRhaWwiLCJDYXNlSWQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1JlZ2lzdGVyUGFnZSIsImV2ZW50cyIsIndhdGNoIiwiY3VyIiwiR2V0Q2FzZVBhZ2VMaXN0IiwiY29tcHV0ZWQiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzaG93TG9hZGluZyIsInN1Y2Nlc3MiLCJMaW1pdCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXRlIiwiY2FzZURhdGEiLCJpbmRleCIsIkZlZSIsIkNhc2VMZXZlbCIsInB1c2giLCJtc2ciLCIkYXBwbHkiLCJzdGF0dXMiLCJyZWZyZXNoIiwiTWVtYmVyUmVnaXN0ZXJTdGF0ZSIsInVzZXJJbmZvIiwiaWQiLCJ0ZW5hbnQiLCJ0b1N0cmluZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFHcUJB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LEVBQWE7QUFDWCxhQUFLM0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGFBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBS0gsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGFBQUtJLGlCQUFMLEdBQXlCLEVBQXpCO0FBQ0EsYUFBSzBDLG1CQUFMO0FBQ0Q7QUFDRjs7OzZCQUNRO0FBQ1AsVUFBSSxLQUFLeEIsT0FBTCxDQUFhQyxNQUFiLENBQW9Cd0IsUUFBcEIsQ0FBNkJDLEVBQTdCLElBQW1DLEtBQUsxQixPQUFMLENBQWFDLE1BQWIsQ0FBb0IwQixNQUFwQixDQUEyQkQsRUFBbEUsRUFBc0U7QUFDcEUsYUFBS2xELE1BQUwsR0FBYyxLQUFLd0IsT0FBTCxDQUFhQyxNQUFiLENBQW9Cd0IsUUFBcEIsQ0FBNkJDLEVBQTdCLENBQWdDRSxRQUFoQyxFQUFkO0FBQ0EsYUFBS25ELFFBQUwsR0FBZ0IsS0FBS3VCLE9BQUwsQ0FBYUMsTUFBYixDQUFvQjBCLE1BQXBCLENBQTJCRCxFQUEzQixDQUE4QkUsUUFBOUIsRUFBaEI7QUFDRDtBQUNELFdBQUtKLG1CQUFMO0FBQ0Q7Ozs7RUFqTTBDSyxlQUFLQyxJOztrQkFBN0JsRSxlIiwiZmlsZSI6ImdldENhc2VQYWdlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL3RoaXJkUGFydHlfYWpheC5qcyc7XG4gIGltcG9ydCB7XG4gICAgdHJhbk51bWJlclxuICB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGdldENhc2VQYWdlTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICB9O1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJuYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdmJhcnMub25jZVwiOlwibmF2YmFyc1wiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbmF2YmFyXG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgdXNlcklkOiAnJyxcbiAgICAgIHRlbmFudElkOiAnJyxcbiAgICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgICBuYXZiYXJzOiBbJ+ahiOS7tuWIl+ihqCcsICfmiqLljZXkuK0nLCAn6L+b6KGM5LitJywgJ+W3suWujOaIkCddLFxuICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgIFBhZ2U6IDEsXG4gICAgICBjYXNlUGFnZUxpc3REYXRhczogW10sXG4gICAgICBDYXNlVHlwZTogMSxcbiAgICAgIGlzUmVnaXN0ZXI6IGZhbHNlLFxuICAgICAgUGxhdGZvcm1NZW1iZXJJZDogJycsXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9DYXNlRGV0YWlsKENhc2VJZCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL2Nhc2VEZXRhaWxQYWdlP0Nhc2VJZD0nICsgQ2FzZUlkICsgJyZDYXNlVHlwZT0nICsgdGhpcy5DYXNlVHlwZSArICcmUGxhdGZvcm1NZW1iZXJJZD0nICsgdGhpcy5QbGF0Zm9ybU1lbWJlcklkXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHRvUmVnaXN0ZXJQYWdlKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL3JlZ2lzdGVyJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIHdhdGNoID0ge1xuICAgICAgY3VycmVudFRhYihjdXIpIHtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5QYWdlID0gMTtcbiAgICAgICAgdGhpcy5jYXNlUGFnZUxpc3REYXRhcyA9IFtdO1xuICAgICAgICBzd2l0Y2ggKGN1cikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMuQ2FzZVR5cGUgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5DYXNlVHlwZSA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLkNhc2VUeXBlID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRoaXMuQ2FzZVR5cGUgPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuR2V0Q2FzZVBhZ2VMaXN0KCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgY29tcHV0ZWQgPSB7fTtcbiAgICAvLyDkuIvmi4nliLfmlrBcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuY2FzZVBhZ2VMaXN0RGF0YXMgPSBbXTtcbiAgICAgIHRoaXMuUGFnZSA9IDE7XG4gICAgICB0aGlzLkdldENhc2VQYWdlTGlzdCgpO1xuICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgfVxuICAgIC8vIOS4iuaLieWKoOi9vVxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLlBhZ2UgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuUGFnZSArPSAxO1xuICAgICAgICB0aGlzLkdldENhc2VQYWdlTGlzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8v5o6l5qGI5YiX6KGoXG4gICAgYXN5bmMgR2V0Q2FzZVBhZ2VMaXN0KCkge1xuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgfSk7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgUGFnZTogdGhpcy5QYWdlLFxuICAgICAgICBMaW1pdDogMTAsXG4gICAgICAgIENhc2VUeXBlOiB0aGlzLkNhc2VUeXBlLFxuICAgICAgICBQbGF0Zm9ybU1lbWJlcklkOiB0aGlzLlBsYXRmb3JtTWVtYmVySWRcbiAgICAgIH1cbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL0Nhc2VzL0dldENhc2VQYWdlTGlzdCcsXG4gICAgICAgICdQT1NUJyxcbiAgICAgICAgZGF0YVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuZGF0YS5zdGF0ZSA9PSAyMDApIHtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLmRhdGEudG90YWxDb3VudDtcbiAgICAgICAgdmFyIGNhc2VQYWdlTGlzdERhdGFzID0gcmVzRGF0YS5kYXRhLmRhdGEuY2FzZURhdGE7XG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIGNhc2VQYWdlTGlzdERhdGFzKSB7XG4gICAgICAgICAgY2FzZVBhZ2VMaXN0RGF0YXNbaW5kZXhdLkZlZSA9IHRyYW5OdW1iZXIoY2FzZVBhZ2VMaXN0RGF0YXNbaW5kZXhdLkZlZSwgMCk7XG4gICAgICAgICAgc3dpdGNoIChjYXNlUGFnZUxpc3REYXRhc1tpbmRleF0uQ2FzZUxldmVsKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGNhc2VQYWdlTGlzdERhdGFzW2luZGV4XS5DYXNlTGV2ZWwgPSAnQSvnuqcnXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBjYXNlUGFnZUxpc3REYXRhc1tpbmRleF0uQ2FzZUxldmVsID0gJ0HnuqcnXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBjYXNlUGFnZUxpc3REYXRhc1tpbmRleF0uQ2FzZUxldmVsID0gJ0Et57qnJ1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY2FzZVBhZ2VMaXN0RGF0YXNbaW5kZXhdLkNhc2VMZXZlbCA9ICdCK+e6pydcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGNhc2VQYWdlTGlzdERhdGFzW2luZGV4XS5DYXNlTGV2ZWwgPSAnQue6pydcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIGNhc2VQYWdlTGlzdERhdGFzW2luZGV4XS5DYXNlTGV2ZWwgPSAnQi3nuqcnXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBjYXNlUGFnZUxpc3REYXRhc1tpbmRleF0uQ2FzZUxldmVsID0gJ0PnuqcnXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FzZVBhZ2VMaXN0RGF0YXMucHVzaCguLi5jYXNlUGFnZUxpc3REYXRhcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZGF0YS5tc2csIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIC8v5Yik5pat5piv5ZCm55m75b2VXG4gICAgYXN5bmMgTWVtYmVyUmVnaXN0ZXJTdGF0ZSgpIHtcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvUmVnaXN0ZXIvTWVtYmVyUmVnaXN0ZXJTdGF0ZScsXG4gICAgICAgICdHRVQnLCB7XG4gICAgICAgICAgUGxhdGZvcm1NZW1iZXJJZDogdGhpcy50ZW5hbnRJZCArIHRoaXMudXNlcklkXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLmRhdGEuZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pc1JlZ2lzdGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5QbGF0Zm9ybU1lbWJlcklkID0gdGhpcy50ZW5hbnRJZCArIHRoaXMudXNlcklkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1JlZ2lzdGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuUGxhdGZvcm1NZW1iZXJJZCA9ICcnO1xuICAgICAgfVxuICAgICAgdGhpcy5HZXRDYXNlUGFnZUxpc3QoKVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgaXNSZWZyZXNoKHJlZnJlc2gsIFBsYXRmb3JtTWVtYmVySWQpIHtcbiAgICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuUGFnZSA9IDE7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IDA7XG4gICAgICAgIHRoaXMuY2FzZVBhZ2VMaXN0RGF0YXMgPSBbXTtcbiAgICAgICAgdGhpcy5NZW1iZXJSZWdpc3RlclN0YXRlKClcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwudXNlckluZm8uaWQgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC50ZW5hbnQuaWQpIHtcbiAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsLnVzZXJJbmZvLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGVuYW50SWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsLnRlbmFudC5pZC50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgdGhpcy5NZW1iZXJSZWdpc3RlclN0YXRlKClcbiAgICB9O1xuICB9XG4iXX0=