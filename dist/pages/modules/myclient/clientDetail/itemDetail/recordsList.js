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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var visitrecord = function (_wepy$page) {
  _inherits(visitrecord, _wepy$page);

  function visitrecord() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, visitrecord);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = visitrecord.__proto__ || Object.getPrototypeOf(visitrecord)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      backgroundColorTop: '#f4f4f4',
      backgroundColorBottom: '#f4f4f4'
    }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
      placeHolderImage: _placeHolderImage2.default
    }, _this.data = {
      clientId: '',
      VisitRecordsData: {},
      recordsToatalCount: 0,
      visitorAvatar: [], //拜访人头像
      intervieweeAvatar: [], //受访人头像,
      pageNumber: 1
    }, _this.mixins = [_mixin2.default], _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(visitrecord, [{
    key: 'onReachBottom',

    // 上拉加载
    value: function onReachBottom() {
      if (this.pageNumber < this.recordsToatalCount / 10) {
        this.pageNumber += 1;
        this.GetVisitRecords();
        this.getAvatar();
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
  }, {
    key: 'getAvatar',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var i, intervieweeList, interviewee, j, http, intervieweeAvatar, visitorList, visitor;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = regeneratorRuntime.keys(this.VisitRecordsData);

              case 1:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 18;
                  break;
                }

                i = _context.t1.value;
                intervieweeList = this.VisitRecordsData[i].intervieweeList;
                interviewee = [];
                _context.t2 = regeneratorRuntime.keys(intervieweeList);

              case 6:
                if ((_context.t3 = _context.t2()).done) {
                  _context.next = 15;
                  break;
                }

                j = _context.t3.value;
                http = intervieweeList[j].avatar;
                _context.next = 11;
                return _ajax2.default.getUserAvatar(http);

              case 11:
                intervieweeAvatar = _context.sent;

                if (intervieweeAvatar.statusCode == 200) {
                  interviewee.push(intervieweeAvatar.tempFilePath);
                } else {
                  wx.showToast({
                    title: '网络故障!部分数据无法正常显示',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }
                _context.next = 6;
                break;

              case 15:
                this.intervieweeAvatar[i] = interviewee;
                _context.next = 1;
                break;

              case 18:
                _context.t4 = regeneratorRuntime.keys(this.VisitRecordsData);

              case 19:
                if ((_context.t5 = _context.t4()).done) {
                  _context.next = 36;
                  break;
                }

                i = _context.t5.value;
                visitorList = this.VisitRecordsData[i].visitorList;
                visitor = [];
                _context.t6 = regeneratorRuntime.keys(visitorList);

              case 24:
                if ((_context.t7 = _context.t6()).done) {
                  _context.next = 33;
                  break;
                }

                j = _context.t7.value;
                http = visitorList[j].avatar;
                _context.next = 29;
                return _ajax2.default.getUserAvatar(http);

              case 29:
                intervieweeAvatar = _context.sent;

                if (intervieweeAvatar.statusCode == 200) {
                  visitor.push(intervieweeAvatar.tempFilePath);
                } else {
                  wx.showToast({
                    title: '网络故障!部分数据无法正常显示',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }
                _context.next = 24;
                break;

              case 33:
                this.visitorAvatar[i] = visitor;
                _context.next = 19;
                break;

              case 36:
                this.$apply();

              case 37:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAvatar() {
        return _ref2.apply(this, arguments);
      }

      return getAvatar;
    }()
  }, {
    key: 'GetVisitRecords',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data, VisitRecordsData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {
                  ClientId: this.clientId,
                  pageNumber: this.pageNumber,
                  pageSize: 10
                };
                _context2.next = 3;
                return _ajax2.default.getData('/api/services/web/clientVisitServiceRecords/GetVisitRecords', 'post', data);

              case 3:
                VisitRecordsData = _context2.sent;

                this.VisitRecordsData = this.VisitRecordsData.concat(VisitRecordsData.data.result.items);
                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetVisitRecords() {
        return _ref3.apply(this, arguments);
      }

      return GetVisitRecords;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      wx.getStorage({
        key: 'clientData',
        success: function success(res) {
          _this2.VisitRecordsData = res.data.RecordsDatas.items;
          _this2.clientId = res.data.RecordsDatas.items[0].clientId;
          _this2.recordsToatalCount = res.data.RecordsDatas.totalCount;
          _this2.getAvatar();
          _this2.$apply();
        }
      });
    }
  }]);

  return visitrecord;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(visitrecord , 'pages/modules/myclient/clientDetail/itemDetail/recordsList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHNMaXN0LmpzIl0sIm5hbWVzIjpbInZpc2l0cmVjb3JkIiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJkYXRhIiwiY2xpZW50SWQiLCJWaXNpdFJlY29yZHNEYXRhIiwicmVjb3Jkc1RvYXRhbENvdW50IiwidmlzaXRvckF2YXRhciIsImludGVydmlld2VlQXZhdGFyIiwicGFnZU51bWJlciIsIm1peGlucyIsIm1ldGhvZHMiLCJHZXRWaXNpdFJlY29yZHMiLCJnZXRBdmF0YXIiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImR1cmF0aW9uIiwiaSIsImludGVydmlld2VlTGlzdCIsImludGVydmlld2VlIiwiaiIsImh0dHAiLCJhdmF0YXIiLCJhamF4IiwiZ2V0VXNlckF2YXRhciIsInN0YXR1c0NvZGUiLCJwdXNoIiwidGVtcEZpbGVQYXRoIiwid3giLCJ2aXNpdG9yTGlzdCIsInZpc2l0b3IiLCIkYXBwbHkiLCJDbGllbnRJZCIsInBhZ2VTaXplIiwiZ2V0RGF0YSIsImNvbmNhdCIsInJlc3VsdCIsIml0ZW1zIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJSZWNvcmRzRGF0YXMiLCJ0b3RhbENvdW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNUQyw2QkFBdUIsSUFEZDtBQUVUQywyQkFBcUIsTUFGWjtBQUdUQywwQkFBb0IsU0FIWDtBQUlUQyw2QkFBdUI7QUFKZCxLLFFBTVZDLE8sR0FB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c0JpQyxNQUF0QixDQUE2QmpDLGlCQUFpQkYsSUFBakIsQ0FBc0JvQyxNQUF0QixDQUE2QkMsS0FBMUQsQ0FBdEI7QUFDQSxxQkFBS04sTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQUE7O0FBQ1BILFNBQUdVLFVBQUgsQ0FBYztBQUNaQyxhQUFLLFlBRE87QUFFWkMsaUJBQVMsc0JBQU87QUFDZCxpQkFBS3RDLGdCQUFMLEdBQXdCdUMsSUFBSXpDLElBQUosQ0FBUzBDLFlBQVQsQ0FBc0JMLEtBQTlDO0FBQ0EsaUJBQUtwQyxRQUFMLEdBQWV3QyxJQUFJekMsSUFBSixDQUFTMEMsWUFBVCxDQUFzQkwsS0FBdEIsQ0FBNEIsQ0FBNUIsRUFBK0JwQyxRQUE5QztBQUNBLGlCQUFLRSxrQkFBTCxHQUEwQnNDLElBQUl6QyxJQUFKLENBQVMwQyxZQUFULENBQXNCQyxVQUFoRDtBQUNBLGlCQUFLakMsU0FBTDtBQUNBLGlCQUFLcUIsTUFBTDtBQUNEO0FBUlcsT0FBZDtBQVVEOzs7O0VBN0dzQ3BCLGVBQUtpQyxJOztrQkFBekJ2RCxXIiwiZmlsZSI6InJlY29yZHNMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9taXhpbi5qcyc7XG4gIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHZpc2l0cmVjb3JkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0J1xuICB9O1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwbGFjZUhvbGRlckltYWdlXG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgY2xpZW50SWQ6JycsXG4gICAgICBWaXNpdFJlY29yZHNEYXRhOiB7fSxcbiAgICAgIHJlY29yZHNUb2F0YWxDb3VudDogMCxcbiAgICAgIHZpc2l0b3JBdmF0YXI6IFtdLCAvL+aLnOiuv+S6uuWktOWDj1xuICAgICAgaW50ZXJ2aWV3ZWVBdmF0YXI6IFtdLCAvL+WPl+iuv+S6uuWktOWDjyxcbiAgICAgIHBhZ2VOdW1iZXI6MVxuICAgIH07XG4gICAgbWl4aW5zID0gW21peGluc107XG4gICAgbWV0aG9kcyA9IHt9O1xuICAgIC8vIOS4iuaLieWKoOi9vVxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBpZiAodGhpcy5wYWdlTnVtYmVyIDwgdGhpcy5yZWNvcmRzVG9hdGFsQ291bnQgLyAxMCkge1xuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgKz0gMTtcbiAgICAgICB0aGlzLkdldFZpc2l0UmVjb3JkcygpO1xuICAgICAgIHRoaXMuZ2V0QXZhdGFyKCk7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veabtOWkmi4uLicsXG4gICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmsqHmnInmm7TlpJouLi4nLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRBdmF0YXIoKSB7XG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMuVmlzaXRSZWNvcmRzRGF0YSkge1xuICAgICAgICB2YXIgaW50ZXJ2aWV3ZWVMaXN0ID0gdGhpcy5WaXNpdFJlY29yZHNEYXRhW2ldLmludGVydmlld2VlTGlzdDtcbiAgICAgICAgdmFyIGludGVydmlld2VlID0gW11cbiAgICAgICAgZm9yICh2YXIgaiBpbiBpbnRlcnZpZXdlZUxpc3QpIHtcbiAgICAgICAgICB2YXIgaHR0cCA9IGludGVydmlld2VlTGlzdFtqXS5hdmF0YXI7XG4gICAgICAgICAgdmFyIGludGVydmlld2VlQXZhdGFyID0gYXdhaXQgYWpheC5nZXRVc2VyQXZhdGFyKGh0dHApO1xuICAgICAgICAgIGlmIChpbnRlcnZpZXdlZUF2YXRhci5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgaW50ZXJ2aWV3ZWUucHVzaChpbnRlcnZpZXdlZUF2YXRhci50ZW1wRmlsZVBhdGgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6ZqcIemDqOWIhuaVsOaNruaXoOazleato+W4uOaYvuekuicsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJ2aWV3ZWVBdmF0YXJbaV0gPSBpbnRlcnZpZXdlZTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5WaXNpdFJlY29yZHNEYXRhKSB7XG4gICAgICAgIHZhciB2aXNpdG9yTGlzdCA9IHRoaXMuVmlzaXRSZWNvcmRzRGF0YVtpXS52aXNpdG9yTGlzdDtcbiAgICAgICAgdmFyIHZpc2l0b3IgPSBbXVxuICAgICAgICBmb3IgKHZhciBqIGluIHZpc2l0b3JMaXN0KSB7XG4gICAgICAgICAgdmFyIGh0dHAgPSB2aXNpdG9yTGlzdFtqXS5hdmF0YXI7XG4gICAgICAgICAgdmFyIGludGVydmlld2VlQXZhdGFyID0gYXdhaXQgYWpheC5nZXRVc2VyQXZhdGFyKGh0dHApXG4gICAgICAgICAgaWYgKGludGVydmlld2VlQXZhdGFyLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICB2aXNpdG9yLnB1c2goaW50ZXJ2aWV3ZWVBdmF0YXIudGVtcEZpbGVQYXRoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanCHpg6jliIbmlbDmja7ml6Dms5XmraPluLjmmL7npLonLFxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2l0b3JBdmF0YXJbaV0gPSB2aXNpdG9yO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgYXN5bmMgR2V0VmlzaXRSZWNvcmRzKCkge1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIENsaWVudElkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICAgIHBhZ2VTaXplOiAxMFxuICAgICAgfVxuICAgICAgdmFyIFZpc2l0UmVjb3Jkc0RhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50VmlzaXRTZXJ2aWNlUmVjb3Jkcy9HZXRWaXNpdFJlY29yZHMnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIHRoaXMuVmlzaXRSZWNvcmRzRGF0YT10aGlzLlZpc2l0UmVjb3Jkc0RhdGEuY29uY2F0KFZpc2l0UmVjb3Jkc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ2NsaWVudERhdGEnLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIHRoaXMuVmlzaXRSZWNvcmRzRGF0YSA9IHJlcy5kYXRhLlJlY29yZHNEYXRhcy5pdGVtcztcbiAgICAgICAgICB0aGlzLmNsaWVudElkPSByZXMuZGF0YS5SZWNvcmRzRGF0YXMuaXRlbXNbMF0uY2xpZW50SWQ7XG4gICAgICAgICAgdGhpcy5yZWNvcmRzVG9hdGFsQ291bnQgPSByZXMuZGF0YS5SZWNvcmRzRGF0YXMudG90YWxDb3VudDtcbiAgICAgICAgICB0aGlzLmdldEF2YXRhcigpO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuIl19