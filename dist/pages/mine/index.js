'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../npm/wepy-async-function/index.js');

var _ajax = require('./../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mineIndex = function (_wepy$page) {
  _inherits(mineIndex, _wepy$page);

  function mineIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mineIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mineIndex.__proto__ || Object.getPrototypeOf(mineIndex)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      isScroll: true,
      tempFilePaths: '../../images/avatar.png',
      personAnnualCounts: [],
      meData: {
        name: '',
        category: '',
        phone: ''
      },
      currentUserId: 0
    }, _this.methods = {
      toCase: function toCase() {
        wx.navigateTo({ url: '../modules/mycase/mycase' });
      },
      toClient: function toClient() {
        wx.navigateTo({ url: '../modules/myclient/myClientList' });
      },
      toLog: function toLog() {
        wx.navigateTo({ url: '../modules/myRecord/workRecord' });
      },
      toBill: function toBill() {
        wx.navigateTo({ url: '../modules/bill/myBill/myBill' });
      },

      // webView() {
      //   wx.navigateTo({
      //     url: './webView/viewView'
      //   });
      // },
      onShareAppMessage: function onShareAppMessage(res) {
        return {
          title: '律智荟--法律圈智能汇聚平台',
          path: '/pages/mine/index',
          imageUrl: '../../images/ShareAppMessage.jpg'
        };
      },

      // //上传头像
      // tophoto() {
      //   var that = this;
      //   wx.chooseImage({
      //     count: 1, // 默认9
      //     sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      //     success: function(res) {
      //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      //       console.log(res.tempFilePaths[0]);
      //       var tempFilePaths = res.tempFilePaths[0];
      //       that.uploadFile(tempFilePaths)
      //       that.tempFilePaths = tempFilePaths;
      //       // this.$apply();
      //     }
      //   });
      // },
      //我的名片
      toBusinessCard: function toBusinessCard() {
        _wepy2.default.navigateTo({ url: './myBusinessCard/myBusinessCard?id=' + this.currentUserId });
      },

      // 跳转基本信息
      tobasedata: function tobasedata() {
        _wepy2.default.navigateTo({
          url: '../mine/data/basedata'
        });
      },

      //跳转至我的履历页面
      torecord: function torecord() {
        _wepy2.default.navigateTo({
          url: '../mine/myrecord/record?id=' + this.currentUserId
        });
      },

      // 跳转至劳动合同信息页面
      tolaborRelation: function tolaborRelation() {
        _wepy2.default.navigateTo({
          url: '../mine/laborRelation/labor-relation'
        });
      },
      totools: function totools() {
        _wepy2.default.navigateTo({
          url: '../mine/tools'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mineIndex, [{
    key: 'GetPersonAnnualCounts',

    // 获取'案件''客户''时间''金额'数据
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var PersonAnnualCounts, data, idx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/analyzeStatistics/GetPersonAnnualCounts', 'post');

              case 2:
                PersonAnnualCounts = _context.sent;

                if (!(PersonAnnualCounts.statusCode == 200 && PersonAnnualCounts.data.result.length !== 0)) {
                  _context.next = 22;
                  break;
                }

                data = PersonAnnualCounts.data.result;
                _context.t0 = regeneratorRuntime.keys(data);

              case 6:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 22;
                  break;
                }

                idx = _context.t1.value;
                _context.t2 = data[idx].name;
                _context.next = _context.t2 === 'Case' ? 11 : _context.t2 === 'Client' ? 13 : _context.t2 === 'Worklog' ? 15 : _context.t2 === 'Finance' ? 17 : 19;
                break;

              case 11:
                this.personAnnualCounts[0] = data[idx].value.toFixed();
                return _context.abrupt('break', 20);

              case 13:
                this.personAnnualCounts[1] = data[idx].value.toFixed();
                return _context.abrupt('break', 20);

              case 15:
                this.personAnnualCounts[2] = data[idx].value.toFixed();
                return _context.abrupt('break', 20);

              case 17:
                this.personAnnualCounts[3] = data[idx].value.toFixed();
                return _context.abrupt('break', 20);

              case 19:
                return _context.abrupt('break', 20);

              case 20:
                _context.next = 6;
                break;

              case 22:
                this.$apply();

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetPersonAnnualCounts() {
        return _ref2.apply(this, arguments);
      }

      return GetPersonAnnualCounts;
    }()
    //获取用户基本信息

  }, {
    key: 'GetMe',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var getMeData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ajax2.default.getData('/api/services/web/personal/GetMe', 'post');

              case 2:
                getMeData = _context2.sent;

                this.meData.name = getMeData.data.result.name;
                this.meData.category = getMeData.data.result.category;
                this.meData.phone = getMeData.data.result.phone;
                // 本地缓存meData的数据
                wx.setStorageSync('meData', getMeData.data.result);
                this.$apply();

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetMe() {
        return _ref3.apply(this, arguments);
      }

      return GetMe;
    }()
    // async uploadFile(tempFilePaths) {
    //   var imageData = await ajax.uploadFile(
    //     '/api/services/web/personal/UploadPhoto',
    //     tempFilePaths
    //   )
    //   var data = JSON.parse(imageData.data).result;
    //   var formData = {
    //     option: {
    //       url: data,
    //       x: 0,
    //       y: 0,
    //       width: 0,
    //       height: 0,
    //       targetWidth: 0,
    //       targetHeight: 0
    //     }
    //   }
    //   var userImageData = await ajax.getData(
    //     '/api/services/web/personal/cropPhoto',
    //     'post',
    //     data
    //   )
    //   console.log(userImageData)
    // }
    // onLoad(){

    // }

  }, {
    key: 'onShow',
    value: function onShow() {
      this.currentUserId = this.$parent.global.userInfo.id;
      this.tempFilePaths = this.$parent.global.userInfo.userAvatar;
      this.GetMe();
      this.GetPersonAnnualCounts();
    }
  }]);

  return mineIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mineIndex , 'pages/mine/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1pbmVJbmRleCIsImRhdGEiLCJpc1Njcm9sbCIsInRlbXBGaWxlUGF0aHMiLCJwZXJzb25Bbm51YWxDb3VudHMiLCJtZURhdGEiLCJuYW1lIiwiY2F0ZWdvcnkiLCJwaG9uZSIsImN1cnJlbnRVc2VySWQiLCJtZXRob2RzIiwidG9DYXNlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9DbGllbnQiLCJ0b0xvZyIsInRvQmlsbCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwidGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJ0b0J1c2luZXNzQ2FyZCIsIndlcHkiLCJ0b2Jhc2VkYXRhIiwidG9yZWNvcmQiLCJ0b2xhYm9yUmVsYXRpb24iLCJ0b3Rvb2xzIiwiYWpheCIsImdldERhdGEiLCJQZXJzb25Bbm51YWxDb3VudHMiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwibGVuZ3RoIiwiaWR4IiwidmFsdWUiLCJ0b0ZpeGVkIiwiJGFwcGx5IiwiZ2V0TWVEYXRhIiwic2V0U3RvcmFnZVN5bmMiLCIkcGFyZW50IiwiZ2xvYmFsIiwidXNlckluZm8iLCJpZCIsInVzZXJBdmF0YXIiLCJHZXRNZSIsIkdldFBlcnNvbkFubnVhbENvdW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLHFCQUFlLHlCQUZWO0FBR0xDLDBCQUFvQixFQUhmO0FBSUxDLGNBQVE7QUFDTkMsY0FBTSxFQURBO0FBRU5DLGtCQUFVLEVBRko7QUFHTkMsZUFBTztBQUhELE9BSkg7QUFTTEMscUJBQWU7QUFUVixLLFFBV1BDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNBO0FBQ05DLFdBQUdDLFVBQUgsQ0FBYyxFQUFFQyxLQUFLLDBCQUFQLEVBQWQ7QUFDRCxPQUhPO0FBSVJDLGNBSlEsc0JBSUU7QUFDUkgsV0FBR0MsVUFBSCxDQUFjLEVBQUVDLEtBQUssa0NBQVAsRUFBZDtBQUNELE9BTk87QUFPUkUsV0FQUSxtQkFPRDtBQUNMSixXQUFHQyxVQUFILENBQWMsRUFBRUMsS0FBSyxnQ0FBUCxFQUFkO0FBQ0QsT0FUTztBQVVSRyxZQVZRLG9CQVVBO0FBQ05MLFdBQUdDLFVBQUgsQ0FBYyxFQUFFQyxLQUFLLCtCQUFQLEVBQWQ7QUFDRCxPQVpPOztBQWFSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUksdUJBbEJRLDZCQWtCVUMsR0FsQlYsRUFrQmU7QUFDckIsZUFBTztBQUNMQyxpQkFBTyxnQkFERjtBQUVMQyxnQkFBTSxtQkFGRDtBQUdMQyxvQkFBVTtBQUhMLFNBQVA7QUFLRCxPQXhCTzs7QUF5QlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLG9CQTNDUSw0QkEyQ1E7QUFDZEMsdUJBQUtYLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSyx3Q0FBc0MsS0FBS0wsYUFBbEQsRUFBaEI7QUFDRCxPQTdDTzs7QUE4Q1I7QUFDQWdCLGdCQS9DUSx3QkErQ0s7QUFDWEQsdUJBQUtYLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FuRE87O0FBb0RSO0FBQ0FZLGNBckRRLHNCQXFERztBQUNURix1QkFBS1gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLGdDQUFnQyxLQUFLTDtBQUQ1QixTQUFoQjtBQUdELE9BekRPOztBQTBEUjtBQUNBa0IscUJBM0RRLDZCQTJEVTtBQUNoQkgsdUJBQUtYLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0EvRE87QUFnRVJjLGFBaEVRLHFCQWdFRTtBQUNSSix1QkFBS1gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXBFTyxLOzs7Ozs7QUFzRVY7Ozs7Ozs7Ozt1QkFFaUNlLGVBQUtDLE9BQUwsQ0FDN0IsMkRBRDZCLEVBRTdCLE1BRjZCLEM7OztBQUEzQkMsa0M7O3NCQUtBQSxtQkFBbUJDLFVBQW5CLElBQWlDLEdBQWpDLElBQXdDRCxtQkFBbUI5QixJQUFuQixDQUF3QmdDLE1BQXhCLENBQStCQyxNQUEvQixLQUEwQyxDOzs7OztBQUNoRmpDLG9CLEdBQU84QixtQkFBbUI5QixJQUFuQixDQUF3QmdDLE07c0RBQ25CaEMsSTs7Ozs7Ozs7QUFBUGtDLG1COzhCQUNDbEMsS0FBS2tDLEdBQUwsRUFBVTdCLEk7Z0RBQ1gsTSx3QkFHQSxRLHdCQUdBLFMsd0JBR0EsUzs7OztBQVJILHFCQUFLRixrQkFBTCxDQUF3QixDQUF4QixJQUE2QkgsS0FBS2tDLEdBQUwsRUFBVUMsS0FBVixDQUFnQkMsT0FBaEIsRUFBN0I7Ozs7QUFHQSxxQkFBS2pDLGtCQUFMLENBQXdCLENBQXhCLElBQTZCSCxLQUFLa0MsR0FBTCxFQUFVQyxLQUFWLENBQWdCQyxPQUFoQixFQUE3Qjs7OztBQUdBLHFCQUFLakMsa0JBQUwsQ0FBd0IsQ0FBeEIsSUFBNkJILEtBQUtrQyxHQUFMLEVBQVVDLEtBQVYsQ0FBZ0JDLE9BQWhCLEVBQTdCOzs7O0FBR0EscUJBQUtqQyxrQkFBTCxDQUF3QixDQUF4QixJQUE2QkgsS0FBS2tDLEdBQUwsRUFBVUMsS0FBVixDQUFnQkMsT0FBaEIsRUFBN0I7Ozs7Ozs7Ozs7O0FBT1IscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRjs7Ozs7Ozs7Ozs7O3VCQUV3QlQsZUFBS0MsT0FBTCxDQUNwQixrQ0FEb0IsRUFFcEIsTUFGb0IsQzs7O0FBQWxCUyx5Qjs7QUFJSixxQkFBS2xDLE1BQUwsQ0FBWUMsSUFBWixHQUFtQmlDLFVBQVV0QyxJQUFWLENBQWVnQyxNQUFmLENBQXNCM0IsSUFBekM7QUFDQSxxQkFBS0QsTUFBTCxDQUFZRSxRQUFaLEdBQXVCZ0MsVUFBVXRDLElBQVYsQ0FBZWdDLE1BQWYsQ0FBc0IxQixRQUE3QztBQUNBLHFCQUFLRixNQUFMLENBQVlHLEtBQVosR0FBb0IrQixVQUFVdEMsSUFBVixDQUFlZ0MsTUFBZixDQUFzQnpCLEtBQTFDO0FBQ0E7QUFDQUksbUJBQUc0QixjQUFILENBQWtCLFFBQWxCLEVBQTRCRCxVQUFVdEMsSUFBVixDQUFlZ0MsTUFBM0M7QUFDQSxxQkFBS0ssTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OzZCQUNRO0FBQ04sV0FBSzdCLGFBQUwsR0FBcUIsS0FBS2dDLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkMsUUFBcEIsQ0FBNkJDLEVBQWxEO0FBQ0EsV0FBS3pDLGFBQUwsR0FBcUIsS0FBS3NDLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkMsUUFBcEIsQ0FBNkJFLFVBQWxEO0FBQ0EsV0FBS0MsS0FBTDtBQUNBLFdBQUtDLHFCQUFMO0FBQ0Q7Ozs7RUE3Sm9DdkIsZUFBS3dCLEk7O2tCQUF2QmhELFMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xyXG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG1pbmVJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpc1Njcm9sbDogdHJ1ZSxcclxuICAgICAgdGVtcEZpbGVQYXRoczogJy4uLy4uL2ltYWdlcy9hdmF0YXIucG5nJyxcclxuICAgICAgcGVyc29uQW5udWFsQ291bnRzOiBbXSxcclxuICAgICAgbWVEYXRhOiB7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBjdXJyZW50VXNlcklkOiAwXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9DYXNlKCl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4uL21vZHVsZXMvbXljYXNlL215Y2FzZScgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvQ2xpZW50KCl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4uL21vZHVsZXMvbXljbGllbnQvbXlDbGllbnRMaXN0JyB9KTtcclxuICAgICAgfSxcclxuICAgICAgdG9Mb2coKXtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi4vbW9kdWxlcy9teVJlY29yZC93b3JrUmVjb3JkJyB9KTtcclxuICAgICAgfSxcclxuICAgICAgdG9CaWxsKCl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4uL21vZHVsZXMvYmlsbC9teUJpbGwvbXlCaWxsJyB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8gd2ViVmlldygpIHtcclxuICAgICAgLy8gICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgLy8gICAgIHVybDogJy4vd2ViVmlldy92aWV3VmlldydcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfSxcclxuICAgICAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiAn5b6L5pm66I2fLS3ms5XlvovlnIjmmbrog73msYfogZrlubPlj7AnLFxyXG4gICAgICAgICAgcGF0aDogJy9wYWdlcy9taW5lL2luZGV4JyxcclxuICAgICAgICAgIGltYWdlVXJsOiAnLi4vLi4vaW1hZ2VzL1NoYXJlQXBwTWVzc2FnZS5qcGcnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8gLy/kuIrkvKDlpLTlg49cclxuICAgICAgLy8gdG9waG90bygpIHtcclxuICAgICAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgIC8vICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAvLyAgICAgY291bnQ6IDEsIC8vIOm7mOiupDlcclxuICAgICAgLy8gICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgIC8vICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAvLyAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuICAgICAgLy8gICAgICAgY29uc29sZS5sb2cocmVzLnRlbXBGaWxlUGF0aHNbMF0pO1xyXG4gICAgICAvLyAgICAgICB2YXIgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAvLyAgICAgICB0aGF0LnVwbG9hZEZpbGUodGVtcEZpbGVQYXRocylcclxuICAgICAgLy8gICAgICAgdGhhdC50ZW1wRmlsZVBhdGhzID0gdGVtcEZpbGVQYXRocztcclxuICAgICAgLy8gICAgICAgLy8gdGhpcy4kYXBwbHkoKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfSxcclxuICAgICAgLy/miJHnmoTlkI3niYdcclxuICAgICAgdG9CdXNpbmVzc0NhcmQoKXtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL215QnVzaW5lc3NDYXJkL215QnVzaW5lc3NDYXJkP2lkPScrdGhpcy5jdXJyZW50VXNlcklkfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi3s+i9rOWfuuacrOS/oeaBr1xyXG4gICAgICB0b2Jhc2VkYXRhKCkge1xyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9taW5lL2RhdGEvYmFzZWRhdGEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v6Lez6L2s6Iez5oiR55qE5bGl5Y6G6aG16Z2iXHJcbiAgICAgIHRvcmVjb3JkKCkge1xyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9taW5lL215cmVjb3JkL3JlY29yZD9pZD0nICsgdGhpcy5jdXJyZW50VXNlcklkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi3s+i9rOiHs+WKs+WKqOWQiOWQjOS/oeaBr+mhtemdolxyXG4gICAgICB0b2xhYm9yUmVsYXRpb24oKSB7XHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL21pbmUvbGFib3JSZWxhdGlvbi9sYWJvci1yZWxhdGlvbidcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgdG90b29scygpIHtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vbWluZS90b29scydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIOiOt+WPlifmoYjku7YnJ+WuouaItycn5pe26Ze0Jyfph5Hpop0n5pWw5o2uXHJcbiAgICBhc3luYyBHZXRQZXJzb25Bbm51YWxDb3VudHMoKSB7XHJcbiAgICAgIHZhciBQZXJzb25Bbm51YWxDb3VudHMgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2FuYWx5emVTdGF0aXN0aWNzL0dldFBlcnNvbkFubnVhbENvdW50cycsXHJcbiAgICAgICAgJ3Bvc3QnXHJcbiAgICAgIClcclxuICAgICAgLy8gY29uc29sZS5sb2coUGVyc29uQW5udWFsQ291bnRzKVxyXG4gICAgICBpZiAoUGVyc29uQW5udWFsQ291bnRzLnN0YXR1c0NvZGUgPT0gMjAwICYmIFBlcnNvbkFubnVhbENvdW50cy5kYXRhLnJlc3VsdC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFBlcnNvbkFubnVhbENvdW50cy5kYXRhLnJlc3VsdDtcclxuICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YSkge1xyXG4gICAgICAgICAgc3dpdGNoIChkYXRhW2lkeF0ubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdDYXNlJzpcclxuICAgICAgICAgICAgICB0aGlzLnBlcnNvbkFubnVhbENvdW50c1swXSA9IGRhdGFbaWR4XS52YWx1ZS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NsaWVudCc6XHJcbiAgICAgICAgICAgICAgdGhpcy5wZXJzb25Bbm51YWxDb3VudHNbMV0gPSBkYXRhW2lkeF0udmFsdWUudG9GaXhlZCgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdXb3JrbG9nJzpcclxuICAgICAgICAgICAgICB0aGlzLnBlcnNvbkFubnVhbENvdW50c1syXSA9IGRhdGFbaWR4XS52YWx1ZS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ZpbmFuY2UnOlxyXG4gICAgICAgICAgICAgIHRoaXMucGVyc29uQW5udWFsQ291bnRzWzNdID0gZGF0YVtpZHhdLnZhbHVlLnRvRml4ZWQoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIC8v6I635Y+W55So5oi35Z+65pys5L+h5oGvXHJcbiAgICBhc3luYyBHZXRNZSgpIHtcclxuICAgICAgdmFyIGdldE1lRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0TWUnLFxyXG4gICAgICAgICdwb3N0J1xyXG4gICAgICApXHJcbiAgICAgIHRoaXMubWVEYXRhLm5hbWUgPSBnZXRNZURhdGEuZGF0YS5yZXN1bHQubmFtZTtcclxuICAgICAgdGhpcy5tZURhdGEuY2F0ZWdvcnkgPSBnZXRNZURhdGEuZGF0YS5yZXN1bHQuY2F0ZWdvcnk7XHJcbiAgICAgIHRoaXMubWVEYXRhLnBob25lID0gZ2V0TWVEYXRhLmRhdGEucmVzdWx0LnBob25lO1xyXG4gICAgICAvLyDmnKzlnLDnvJPlrZhtZURhdGHnmoTmlbDmja5cclxuICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ21lRGF0YScsIGdldE1lRGF0YS5kYXRhLnJlc3VsdCk7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICAvLyBhc3luYyB1cGxvYWRGaWxlKHRlbXBGaWxlUGF0aHMpIHtcclxuICAgIC8vICAgdmFyIGltYWdlRGF0YSA9IGF3YWl0IGFqYXgudXBsb2FkRmlsZShcclxuICAgIC8vICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvVXBsb2FkUGhvdG8nLFxyXG4gICAgLy8gICAgIHRlbXBGaWxlUGF0aHNcclxuICAgIC8vICAgKVxyXG4gICAgLy8gICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoaW1hZ2VEYXRhLmRhdGEpLnJlc3VsdDtcclxuICAgIC8vICAgdmFyIGZvcm1EYXRhID0ge1xyXG4gICAgLy8gICAgIG9wdGlvbjoge1xyXG4gICAgLy8gICAgICAgdXJsOiBkYXRhLFxyXG4gICAgLy8gICAgICAgeDogMCxcclxuICAgIC8vICAgICAgIHk6IDAsXHJcbiAgICAvLyAgICAgICB3aWR0aDogMCxcclxuICAgIC8vICAgICAgIGhlaWdodDogMCxcclxuICAgIC8vICAgICAgIHRhcmdldFdpZHRoOiAwLFxyXG4gICAgLy8gICAgICAgdGFyZ2V0SGVpZ2h0OiAwXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHZhciB1c2VySW1hZ2VEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgLy8gICAgICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9jcm9wUGhvdG8nLFxyXG4gICAgLy8gICAgICdwb3N0JyxcclxuICAgIC8vICAgICBkYXRhXHJcbiAgICAvLyAgIClcclxuICAgIC8vICAgY29uc29sZS5sb2codXNlckltYWdlRGF0YSlcclxuICAgIC8vIH1cclxuICAgIC8vIG9uTG9hZCgpe1xyXG4gICAgICBcclxuICAgIC8vIH1cclxuICAgIG9uU2hvdygpe1xyXG4gICAgICB0aGlzLmN1cnJlbnRVc2VySWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsLnVzZXJJbmZvLmlkO1xyXG4gICAgICB0aGlzLnRlbXBGaWxlUGF0aHMgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsLnVzZXJJbmZvLnVzZXJBdmF0YXI7XHJcbiAgICAgIHRoaXMuR2V0TWUoKTtcclxuICAgICAgdGhpcy5HZXRQZXJzb25Bbm51YWxDb3VudHMoKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==