'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _placeHolderImage = require('./../../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseintroduce = function (_wepy$page) {
  _inherits(caseintroduce, _wepy$page);

  function caseintroduce() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, caseintroduce);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseintroduce.__proto__ || Object.getPrototypeOf(caseintroduce)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = { placeHolderImage: _placeHolderImage2.default }, _this.config = {
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      backgroundColorTop: '#f4f4f4',
      backgroundColorBottom: '#f4f4f4'
    }, _this.data = {
      // linkerDatas: {
      title: '',
      linkerData: [],
      clientId: '',
      pageNumber: 1,
      pageSize: 10,
      totalCount: 0

      // };
    }, _this.mixins = [_mixin2.default], _this.methods = {
      toclientlinkmandetail: function toclientlinkmandetail(index) {
        // console.log(index);
        wx.navigateTo({
          url: './clientLinkmanDetail/clientLinkmanDetail?index=' + index
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(caseintroduce, [{
    key: 'onReachBottom',

    // 下拉刷新
    // onPullDownRefresh() {
    //   this.linkerData = [];
    //   this.linkerPhoto = [];
    //   this.pageNumber = 1;
    //   this.getLinkerData();

    //结束下拉刷新
    //   wx.hideNavigationBarLoading(); //完成停止加载
    //   // this.isUpdate = !this.isUpdate;
    //   wx.stopPullDownRefresh(); //停止下拉刷新
    // }
    //上拉加载
    value: function onReachBottom() {
      if (this.pageNumber < this.totalCount / 10) {
        this.pageNumber += 1;
        this.getLinkerData();
        _wepy2.default.showToast({
          title: '加载更多...',
          icon: 'loading',
          mask: true
        });
      } else {
        _wepy2.default.showToast({
          title: '没有更多...',
          icon: 'none',
          mask: true,
          duration: 1000
        });
      }
    }
    // 获取联系人信息

  }, {
    key: 'getLinkerData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var clientId, resData, _linkerData, linkerData, i, id, http, linkerPhotoData, contactsListData;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clientId = {
                  ClientId: this.clientId,
                  caseId: this.caseId,
                  pageNumber: this.pageNumber,
                  pageSize: this.pageSize
                };

                wx.showLoading({
                  title: '加载中，请稍等哦！',
                  mask: true
                });
                _context.next = 4;
                return _ajax2.default.getData('/api/services/web/clientContacts/GetClientContactsList', 'post', clientId);

              case 4:
                resData = _context.sent;

                if (!(resData.statusCode == 200)) {
                  _context.next = 24;
                  break;
                }

                this.totalCount = resData.data.result.totalCount;
                linkerData = resData.data.result.items;
                _context.t0 = regeneratorRuntime.keys(linkerData);

              case 9:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 19;
                  break;
                }

                i = _context.t1.value;
                id = linkerData[i].id;
                http = '/api/services/web/clientContacts/GetClientContactAvatar?id=' + id;
                _context.next = 15;
                return _ajax2.default.getAavatar(http);

              case 15:
                linkerPhotoData = _context.sent;

                linkerData[i]['avatar'] = linkerPhotoData;
                _context.next = 9;
                break;

              case 19:
                (_linkerData = this.linkerData).push.apply(_linkerData, _toConsumableArray(linkerData));
                contactsListData = wx.getStorageSync('clientData');

                contactsListData.ContactsListData = this.linkerData;
                wx.setStorageSync('clientData', contactsListData);
                this.$apply();

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLinkerData() {
        return _ref2.apply(this, arguments);
      }

      return getLinkerData;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      console.log(options);
      this.clientId = options.id;
      this.title = options.title || '客户联系人';
      this.caseId = options.caseId || '';
      this.getLinkerData();
    }
  }]);

  return caseintroduce;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(caseintroduce , 'pages/modules/myclient/clientDetail/itemDetail/clientLinkman'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudExpbmttYW4uanMiXSwibmFtZXMiOlsiY2FzZWludHJvZHVjZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiZGF0YSIsInRpdGxlIiwibGlua2VyRGF0YSIsImNsaWVudElkIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwidG90YWxDb3VudCIsIm1peGlucyIsIm1ldGhvZHMiLCJ0b2NsaWVudGxpbmttYW5kZXRhaWwiLCJpbmRleCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImdldExpbmtlckRhdGEiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiIsIkNsaWVudElkIiwiY2FzZUlkIiwic2hvd0xvYWRpbmciLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiaXRlbXMiLCJpIiwiaWQiLCJodHRwIiwiZ2V0QWF2YXRhciIsImxpbmtlclBob3RvRGF0YSIsInB1c2giLCJjb250YWN0c0xpc3REYXRhIiwiZ2V0U3RvcmFnZVN5bmMiLCJDb250YWN0c0xpc3REYXRhIiwic2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLG9CQUFtQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixhQUE3QyxFQUFwQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FB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aW5rbWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9taXhpbi5qcyc7XG5pbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FzZWludHJvZHVjZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7IHBsYWNlSG9sZGVySW1hZ2V9O1xuICBjb25maWcgPSB7XG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0J1xuICB9O1xuICBkYXRhID0ge1xuICAgIC8vIGxpbmtlckRhdGFzOiB7XG4gICAgdGl0bGU6JycsXG4gICAgbGlua2VyRGF0YTogW10sXG4gICAgY2xpZW50SWQ6ICcnLFxuICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgcGFnZVNpemU6IDEwLFxuICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgXG4gICAgLy8gfTtcbiAgfTtcbiAgIG1peGlucyA9IFttaXhpbnMgXTtcbiAgbWV0aG9kcyA9IHtcbiAgICB0b2NsaWVudGxpbmttYW5kZXRhaWwoaW5kZXgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsaWVudExpbmttYW5EZXRhaWwvY2xpZW50TGlua21hbkRldGFpbD9pbmRleD0nICsgaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLy8g5LiL5ouJ5Yi35pawXG4gIC8vIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAvLyAgIHRoaXMubGlua2VyRGF0YSA9IFtdO1xuICAvLyAgIHRoaXMubGlua2VyUGhvdG8gPSBbXTtcbiAgLy8gICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAvLyAgIHRoaXMuZ2V0TGlua2VyRGF0YSgpO1xuXG4gICAgLy/nu5PmnZ/kuIvmi4nliLfmlrBcbiAgLy8gICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cbiAgLy8gICAvLyB0aGlzLmlzVXBkYXRlID0gIXRoaXMuaXNVcGRhdGU7XG4gIC8vICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxuICAvLyB9XG4gIC8v5LiK5ouJ5Yqg6L29XG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgaWYgKHRoaXMucGFnZU51bWJlciA8IHRoaXMudG90YWxDb3VudCAvIDEwKSB7XG4gICAgICB0aGlzLnBhZ2VOdW1iZXIgKz0gMTtcbiAgICAgIHRoaXMuZ2V0TGlua2VyRGF0YSgpO1xuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veabtOWkmi4uLicsXG4gICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfmsqHmnInmm7TlpJouLi4nLFxuICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8g6I635Y+W6IGU57O75Lq65L+h5oGvXG4gIGFzeW5jIGdldExpbmtlckRhdGEoKSB7XG4gICAgdmFyIGNsaWVudElkID0ge1xuICAgICAgQ2xpZW50SWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICBjYXNlSWQ6dGhpcy5jYXNlSWQsXG4gICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZVxuICAgIH07XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK3vvIzor7fnqI3nrYnlk6bvvIEnLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICB9KTtcbiAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRDb250YWN0cy9HZXRDbGllbnRDb250YWN0c0xpc3QnLFxuICAgICAgJ3Bvc3QnLFxuICAgICAgY2xpZW50SWRcbiAgICApO1xuICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgIHRoaXMudG90YWxDb3VudD1yZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICB2YXIgbGlua2VyRGF0YSA9cmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgIGZvciAodmFyIGkgaW4gbGlua2VyRGF0YSkge1xuICAgICAgICB2YXIgaWQgPSBsaW5rZXJEYXRhW2ldLmlkO1xuICAgICAgICB2YXIgaHR0cCA9XG4gICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NsaWVudENvbnRhY3RzL0dldENsaWVudENvbnRhY3RBdmF0YXI/aWQ9JyArIGlkO1xuICAgICAgICB2YXIgbGlua2VyUGhvdG9EYXRhID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xuICAgICAgICBsaW5rZXJEYXRhW2ldWydhdmF0YXInXSA9IGxpbmtlclBob3RvRGF0YTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlua2VyRGF0YS5wdXNoKC4uLmxpbmtlckRhdGEpO1xuICAgICAgdmFyIGNvbnRhY3RzTGlzdERhdGE9d3guZ2V0U3RvcmFnZVN5bmMoJ2NsaWVudERhdGEnKTtcbiAgICAgIGNvbnRhY3RzTGlzdERhdGEuQ29udGFjdHNMaXN0RGF0YT10aGlzLmxpbmtlckRhdGE7XG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygnY2xpZW50RGF0YScsIGNvbnRhY3RzTGlzdERhdGEpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgXG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICB0aGlzLmNsaWVudElkPW9wdGlvbnMuaWQ7XG4gICAgdGhpcy50aXRsZT1vcHRpb25zLnRpdGxlfHwn5a6i5oi36IGU57O75Lq6JztcbiAgICB0aGlzLmNhc2VJZD1vcHRpb25zLmNhc2VJZHx8Jyc7XG4gICAgdGhpcy5nZXRMaW5rZXJEYXRhKCk7XG4gIH1cbn1cbiJdfQ==