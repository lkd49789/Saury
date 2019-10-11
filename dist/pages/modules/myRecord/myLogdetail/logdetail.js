'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import navbar from '../../../components/navbar';
var logdetail = function (_wepy$page) {
  _inherits(logdetail, _wepy$page);

  function logdetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, logdetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = logdetail.__proto__ || Object.getPrototypeOf(logdetail)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      addOpacity: 1,
      chooseMe: false,
      id: 0,
      workLogData: {},
      avatar: [],
      toAudit: false
    }, _this.methods = {
      toauditResultsDetail: function toauditResultsDetail() {
        if (this.workLogData.approvalList.length > 0) {
          var approvalList = JSON.stringify(this.workLogData.approvalList);
          wx.navigateTo({ url: './auditResultsDetail?approvalList=' + approvalList });
        }
      },
      toDocument: function toDocument() {
        wx.navigateTo({ url: '../logDoc/document?id=' + this.id });
      },
      touchStart: function touchStart() {
        this.addOpacity = 0.6;
        this.$apply();
      },
      touchEnd: function touchEnd() {
        this.addOpacity = 1;
        var data = {
          id: this.id,
          selfDuration: this.workLogData.selfDuration,
          billDuration: this.workLogData.billDuration,
          businessDuration: this.workLogData.businessDuration
        };
        data = JSON.stringify(data);
        wx.navigateTo({
          url: '../../auditModules/recordAudit/recordAudit?data=' + data
        });
        this.$apply();
      },
      deselect: function deselect() {
        var _this2 = this;

        wx.showModal({
          title: '你确定吗？', //提示的标题,
          content: '是否确认不再显示该参与日志？取消后将无法再转化为自己的日志', //提示的内容,
          showCancel: true, //是否显示取消按钮,
          cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
          cancelColor: '#5d73fa', //取消按钮的文字颜色,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#5d73fa', //确定按钮的文字颜色,
          success: function success(res) {
            if (res.confirm) {
              _this2.CancelMyParticipantWorklog();
            }
          }
        });
      },
      chooseMe: function chooseMe() {
        var data = {
          isData: true,
          startTime: this.workLogData.startTime,
          endTime: this.workLogData.endTime,
          id: this.workLogData.id,
          clientId: this.workLogData.clientId,
          caseId: this.workLogData.caseId
        };
        data = JSON.stringify(data);
        wx.navigateTo({
          url: '../creatWorkRecord/creatWorkRecord?data=' + data
        });
      },
      toCompileRecord: function toCompileRecord() {
        var data = {
          // isData:true,
          startTime: this.workLogData.startTime,
          endTime: this.workLogData.endTime,
          id: this.workLogData.id,
          clientId: this.workLogData.clientId,
          caseId: this.workLogData.caseId
        };
        data = JSON.stringify(data);
        wx.navigateTo({
          url: '../compileRecord/compileRecord?data=' + data
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(logdetail, [{
    key: 'GetWorklog',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, workLogData, sT, eT, participantList, index, employeeId, http, avatar, approvalList, isRefresh;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({
                  title: '加载中！请稍等！', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                id = {
                  id: this.id
                };
                _context.next = 4;
                return _ajax2.default.getData('/api/services/web/worklog/GetWorklog', 'post', id);

              case 4:
                workLogData = _context.sent;

                if (!(workLogData.statusCode == 200)) {
                  _context.next = 36;
                  break;
                }

                workLogData = workLogData.data.result;

                if (this.chooseMe) {
                  wx.setStorageSync('myParticipantWorkLoags', workLogData);
                }
                // 日志时间
                sT = (0, _api.formatDate)(workLogData.startTime);
                eT = (0, _api.formatDate)(workLogData.endTime);

                workLogData.startTime = {
                  Y: sT[0] + '/' + sT[1] + '/' + sT[2],
                  M: sT[3] + ':' + sT[4]
                };
                workLogData.endTime = {
                  Y: eT[0] + '/' + eT[1] + '/' + eT[2],
                  M: eT[3] + ':' + eT[4]
                };
                workLogData.selfDuration = workLogData.selfDuration.toFixed(1);
                workLogData.businessDuration = workLogData.businessDuration.toFixed(1);
                workLogData.billDuration = workLogData.billDuration.toFixed(1);
                //参与人头像

                if (!(workLogData.participantList.length !== 0)) {
                  _context.next = 29;
                  break;
                }

                participantList = workLogData.participantList;
                _context.t0 = regeneratorRuntime.keys(participantList);

              case 18:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 29;
                  break;
                }

                index = _context.t1.value;
                employeeId = participantList[index].employeeId;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + employeeId;
                _context.next = 24;
                return _ajax2.default.getAavatar(http);

              case 24:
                avatar = _context.sent;

                this.avatar[index] = avatar;
                this.$apply();
                _context.next = 18;
                break;

              case 29:
                //通过人数
                if (workLogData.approvalList.length !== 0) {
                  approvalList = workLogData.approvalList;

                  for (index in approvalList) {
                    approvalList[index].approvalDateText = (0, _api.formatTime)(approvalList[index].approvalDate);
                  }
                }
                this.workLogData = workLogData;
                isRefresh = {
                  isRefresh: false
                };

                wx.setStorageSync('isRefresh', isRefresh);
                //缓存日志基本信息
                this.$apply();
                _context.next = 37;
                break;

              case 36:
                wx.showToast({
                  title: '网络出错！', //提示的内容,
                  icon: 'none', //图标,
                  duration: 2000, //延迟时间,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });

              case 37:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetWorklog() {
        return _ref2.apply(this, arguments);
      }

      return GetWorklog;
    }()
    // 获取日志提醒参与信息

  }, {
    key: 'GetMyParticipantWorklogs',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var GetMyParticipantWorklogs, MyParticipantWorklogsCount;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showLoading({
                  title: '提交中，请稍等！', //提示的内容,
                  mask: true //显示透明蒙层，防止触摸穿透,
                });
                _context2.next = 3;
                return _ajax2.default.getData('/api/services/web/worklog/GetMyParticipantWorklogs', 'post');

              case 3:
                GetMyParticipantWorklogs = _context2.sent;
                MyParticipantWorklogsCount = GetMyParticipantWorklogs.data.result.length;

                if (MyParticipantWorklogsCount) {
                  wx.navigateBack({
                    delta: 1
                  });
                } else {
                  wx.navigateBack({
                    delta: 2
                  });
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetMyParticipantWorklogs() {
        return _ref3.apply(this, arguments);
      }

      return GetMyParticipantWorklogs;
    }()
    //取消参与提醒

  }, {
    key: 'CancelMyParticipantWorklog',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        var data, CancelData, isRefresh;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wx.showLoading({
                  title: '提交中，请稍等！', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success() {
                    _this3.GetMyParticipantWorklogs();
                  }
                });
                data = {
                  id: this.id
                };
                _context3.next = 4;
                return _ajax2.default.getData('/api/services/web/worklog/CancelMyParticipantWorklog', 'post', data);

              case 4:
                CancelData = _context3.sent;

                if (CancelData.statusCode == 200) {
                  isRefresh = wx.getStorageSync('isRefresh');

                  isRefresh.isRefresh = true;
                  wx.setStorageSync('isRefresh', isRefresh);
                } else {
                  wx.showToast({
                    title: error.data.restult.message,
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function CancelMyParticipantWorklog() {
        return _ref4.apply(this, arguments);
      }

      return CancelMyParticipantWorklog;
    }()
    // 转化为我的

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.id = options.id;
      this.chooseMe = options.chooseMe || false;
      this.GetWorklog();
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var isRefresh = wx.getStorageSync('isRefresh');
      if (isRefresh.isRefresh) {
        this.workLogData = {};
        this.avatar = [], this.GetWorklog();
      }
    }
  }]);

  return logdetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(logdetail , 'pages/modules/myRecord/myLogdetail/logdetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2RldGFpbC5qcyJdLCJuYW1lcyI6WyJsb2dkZXRhaWwiLCJjb21wb25lbnRzIiwiZGF0YSIsImFkZE9wYWNpdHkiLCJjaG9vc2VNZSIsImlkIiwid29ya0xvZ0RhdGEiLCJhdmF0YXIiLCJ0b0F1ZGl0IiwibWV0aG9kcyIsInRvYXVkaXRSZXN1bHRzRGV0YWlsIiwiYXBwcm92YWxMaXN0IiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvRG9jdW1lbnQiLCJ0b3VjaFN0YXJ0IiwiJGFwcGx5IiwidG91Y2hFbmQiLCJzZWxmRHVyYXRpb24iLCJiaWxsRHVyYXRpb24iLCJidXNpbmVzc0R1cmF0aW9uIiwiZGVzZWxlY3QiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsIkNhbmNlbE15UGFydGljaXBhbnRXb3JrbG9nIiwiaXNEYXRhIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImNsaWVudElkIiwiY2FzZUlkIiwidG9Db21waWxlUmVjb3JkIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiYWpheCIsImdldERhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0Iiwic2V0U3RvcmFnZVN5bmMiLCJzVCIsImVUIiwiWSIsIk0iLCJ0b0ZpeGVkIiwicGFydGljaXBhbnRMaXN0IiwiaW5kZXgiLCJlbXBsb3llZUlkIiwiaHR0cCIsImdldEFhdmF0YXIiLCJhcHByb3ZhbERhdGVUZXh0IiwiYXBwcm92YWxEYXRlIiwiaXNSZWZyZXNoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzIiwiTXlQYXJ0aWNpcGFudFdvcmtsb2dzQ291bnQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIkNhbmNlbERhdGEiLCJnZXRTdG9yYWdlU3luYyIsImVycm9yIiwicmVzdHVsdCIsIm1lc3NhZ2UiLCJvcHRpb25zIiwiR2V0V29ya2xvZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBO0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxrQkFBWSxDQURQO0FBRUxDLGdCQUFVLEtBRkw7QUFHTEMsVUFBSSxDQUhDO0FBSUxDLG1CQUFhLEVBSlI7QUFLTEMsY0FBUSxFQUxIO0FBTUxDLGVBQVM7QUFOSixLLFFBUVBDLE8sR0FBVTtBQUNSQywwQkFEUSxrQ0FDYztBQUNwQixZQUFHLEtBQUtKLFdBQUwsQ0FBaUJLLFlBQWpCLENBQThCQyxNQUE5QixHQUFxQyxDQUF4QyxFQUEwQztBQUMxQyxjQUFJRCxlQUFhRSxLQUFLQyxTQUFMLENBQWUsS0FBS1IsV0FBTCxDQUFpQkssWUFBaEMsQ0FBakI7QUFDQUksYUFBR0MsVUFBSCxDQUFjLEVBQUVDLEtBQUssdUNBQXFDTixZQUE1QyxFQUFkO0FBQ0M7QUFDRixPQU5PO0FBT1JPLGdCQVBRLHdCQU9JO0FBQ1ZILFdBQUdDLFVBQUgsQ0FBYyxFQUFFQyxLQUFLLDJCQUF5QixLQUFLWixFQUFyQyxFQUFkO0FBQ0QsT0FUTztBQVVSYyxnQkFWUSx3QkFVSztBQUNYLGFBQUtoQixVQUFMLEdBQWtCLEdBQWxCO0FBQ0EsYUFBS2lCLE1BQUw7QUFDRCxPQWJPO0FBY1JDLGNBZFEsc0JBY0c7QUFDVCxhQUFLbEIsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFlBQUlELE9BQU87QUFDVEcsY0FBSSxLQUFLQSxFQURBO0FBRVRpQix3QkFBYyxLQUFLaEIsV0FBTCxDQUFpQmdCLFlBRnRCO0FBR1RDLHdCQUFjLEtBQUtqQixXQUFMLENBQWlCaUIsWUFIdEI7QUFJVEMsNEJBQWtCLEtBQUtsQixXQUFMLENBQWlCa0I7QUFKMUIsU0FBWDtBQU1BdEIsZUFB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SUEsV0FBV3ZCLFVBQVgsSUFBeUIsR0FBN0IsRUFBa0M7QUFDNUJlLDJCQUQ0QixHQUNoQmhELEdBQUd5RCxjQUFILENBQWtCLFdBQWxCLENBRGdCOztBQUVoQ1QsNEJBQVVBLFNBQVYsR0FBc0IsSUFBdEI7QUFDQWhELHFCQUFHbUMsY0FBSCxDQUFrQixXQUFsQixFQUErQmEsU0FBL0I7QUFDRCxpQkFKRCxNQUlPO0FBQ0xoRCxxQkFBR2lELFNBQUgsQ0FBYTtBQUNYckMsMkJBQU84QyxNQUFNdkUsSUFBTixDQUFXd0UsT0FBWCxDQUFtQkMsT0FEZjtBQUVYViwwQkFBTSxNQUZLO0FBR1hDLDhCQUFVLElBSEM7QUFJWHJCLDBCQUFNO0FBSkssbUJBQWI7QUFNRDs7Ozs7Ozs7Ozs7Ozs7OztBQUVIOzs7OzJCQUNPK0IsTyxFQUFTO0FBQ2QsV0FBS3ZFLEVBQUwsR0FBVXVFLFFBQVF2RSxFQUFsQjtBQUNBLFdBQUtELFFBQUwsR0FBZ0J3RSxRQUFReEUsUUFBUixJQUFvQixLQUFwQztBQUNBLFdBQUt5RSxVQUFMO0FBQ0EsV0FBS3pELE1BQUw7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSTJDLFlBQVloRCxHQUFHeUQsY0FBSCxDQUFrQixXQUFsQixDQUFoQjtBQUNBLFVBQUlULFVBQVVBLFNBQWQsRUFBeUI7QUFDckIsYUFBS3pELFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsRUFBZCxFQUNBLEtBQUtzRSxVQUFMLEVBREE7QUFFSDtBQUNGOzs7O0VBeE5vQ0MsZUFBS0MsSTs7a0JBQXZCL0UsUyIsImZpbGUiOiJsb2dkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICBpbXBvcnQge1xuICAgIGZvcm1hdERhdGUsZm9ybWF0VGltZVxuICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIC8vIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBsb2dkZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICBkYXRhID0ge1xuICAgICAgYWRkT3BhY2l0eTogMSxcbiAgICAgIGNob29zZU1lOiBmYWxzZSxcbiAgICAgIGlkOiAwLFxuICAgICAgd29ya0xvZ0RhdGE6IHt9LFxuICAgICAgYXZhdGFyOiBbXSxcbiAgICAgIHRvQXVkaXQ6IGZhbHNlLFxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvYXVkaXRSZXN1bHRzRGV0YWlsKCl7XG4gICAgICAgIGlmKHRoaXMud29ya0xvZ0RhdGEuYXBwcm92YWxMaXN0Lmxlbmd0aD4wKXtcbiAgICAgICAgdmFyIGFwcHJvdmFsTGlzdD1KU09OLnN0cmluZ2lmeSh0aGlzLndvcmtMb2dEYXRhLmFwcHJvdmFsTGlzdClcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4vYXVkaXRSZXN1bHRzRGV0YWlsP2FwcHJvdmFsTGlzdD0nK2FwcHJvdmFsTGlzdH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9Eb2N1bWVudCgpe1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi4vbG9nRG9jL2RvY3VtZW50P2lkPScrdGhpcy5pZCB9KTtcbiAgICAgIH0sXG4gICAgICB0b3VjaFN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAwLjY7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHNlbGZEdXJhdGlvbjogdGhpcy53b3JrTG9nRGF0YS5zZWxmRHVyYXRpb24sXG4gICAgICAgICAgYmlsbER1cmF0aW9uOiB0aGlzLndvcmtMb2dEYXRhLmJpbGxEdXJhdGlvbixcbiAgICAgICAgICBidXNpbmVzc0R1cmF0aW9uOiB0aGlzLndvcmtMb2dEYXRhLmJ1c2luZXNzRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uLy4uL2F1ZGl0TW9kdWxlcy9yZWNvcmRBdWRpdC9yZWNvcmRBdWRpdD9kYXRhPScgKyBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGRlc2VsZWN0KCkge1xuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5L2g56Gu5a6a5ZCX77yfJywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgY29udGVudDogJ+aYr+WQpuehruiupOS4jeWGjeaYvuekuuivpeWPguS4juaXpeW/l++8n+WPlua2iOWQjuWwhuaXoOazleWGjei9rOWMluS4uuiHquW3seeahOaXpeW/lycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxuICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICBjYW5jZWxDb2xvcjogJyM1ZDczZmEnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIHRoaXMuQ2FuY2VsTXlQYXJ0aWNpcGFudFdvcmtsb2coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNob29zZU1lKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICBpc0RhdGE6IHRydWUsXG4gICAgICAgICAgc3RhcnRUaW1lOiB0aGlzLndvcmtMb2dEYXRhLnN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lOiB0aGlzLndvcmtMb2dEYXRhLmVuZFRpbWUsXG4gICAgICAgICAgaWQ6IHRoaXMud29ya0xvZ0RhdGEuaWQsXG4gICAgICAgICAgY2xpZW50SWQ6IHRoaXMud29ya0xvZ0RhdGEuY2xpZW50SWQsXG4gICAgICAgICAgY2FzZUlkOiB0aGlzLndvcmtMb2dEYXRhLmNhc2VJZCxcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL2NyZWF0V29ya1JlY29yZC9jcmVhdFdvcmtSZWNvcmQ/ZGF0YT0nICsgZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0b0NvbXBpbGVSZWNvcmQoKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIC8vIGlzRGF0YTp0cnVlLFxuICAgICAgICAgIHN0YXJ0VGltZTogdGhpcy53b3JrTG9nRGF0YS5zdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZTogdGhpcy53b3JrTG9nRGF0YS5lbmRUaW1lLFxuICAgICAgICAgIGlkOiB0aGlzLndvcmtMb2dEYXRhLmlkLFxuICAgICAgICAgIGNsaWVudElkOiB0aGlzLndvcmtMb2dEYXRhLmNsaWVudElkLFxuICAgICAgICAgIGNhc2VJZDogdGhpcy53b3JrTG9nRGF0YS5jYXNlSWQsXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9jb21waWxlUmVjb3JkL2NvbXBpbGVSZWNvcmQ/ZGF0YT0nICsgZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFzeW5jIEdldFdvcmtsb2coKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5Yqg6L295Lit77yB6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgIH0pO1xuICAgICAgdmFyIGlkID0ge1xuICAgICAgICBpZDogdGhpcy5pZFxuICAgICAgfTtcbiAgICAgIHZhciB3b3JrTG9nRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2cvR2V0V29ya2xvZycsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAgaWRcbiAgICAgIClcbiAgICAgIGlmICh3b3JrTG9nRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgd29ya0xvZ0RhdGEgPSB3b3JrTG9nRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMuY2hvb3NlTWUpIHtcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnbXlQYXJ0aWNpcGFudFdvcmtMb2FncycsIHdvcmtMb2dEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDml6Xlv5fml7bpl7RcbiAgICAgICAgdmFyIHNUID0gZm9ybWF0RGF0ZSh3b3JrTG9nRGF0YS5zdGFydFRpbWUpO1xuICAgICAgICB2YXIgZVQgPSBmb3JtYXREYXRlKHdvcmtMb2dEYXRhLmVuZFRpbWUpXG4gICAgICAgIHdvcmtMb2dEYXRhLnN0YXJ0VGltZSA9IHtcbiAgICAgICAgICBZOiBzVFswXSArICcvJyArIHNUWzFdICsgJy8nICsgc1RbMl0sXG4gICAgICAgICAgTTogc1RbM10gKyAnOicgKyBzVFs0XVxuICAgICAgICB9XG4gICAgICAgIHdvcmtMb2dEYXRhLmVuZFRpbWUgPSB7XG4gICAgICAgICAgWTogZVRbMF0gKyAnLycgKyBlVFsxXSArICcvJyArIGVUWzJdLFxuICAgICAgICAgIE06IGVUWzNdICsgJzonICsgZVRbNF1cbiAgICAgICAgfVxuICAgICAgICB3b3JrTG9nRGF0YS5zZWxmRHVyYXRpb249d29ya0xvZ0RhdGEuc2VsZkR1cmF0aW9uLnRvRml4ZWQoMSk7XG4gICAgICAgIHdvcmtMb2dEYXRhLmJ1c2luZXNzRHVyYXRpb249d29ya0xvZ0RhdGEuYnVzaW5lc3NEdXJhdGlvbi50b0ZpeGVkKDEpO1xuICAgICAgICB3b3JrTG9nRGF0YS5iaWxsRHVyYXRpb249d29ya0xvZ0RhdGEuYmlsbER1cmF0aW9uLnRvRml4ZWQoMSk7XG4gICAgICAgIC8v5Y+C5LiO5Lq65aS05YOPXG4gICAgICAgIGlmICh3b3JrTG9nRGF0YS5wYXJ0aWNpcGFudExpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdmFyIHBhcnRpY2lwYW50TGlzdCA9IHdvcmtMb2dEYXRhLnBhcnRpY2lwYW50TGlzdDtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJ0aWNpcGFudExpc3QpIHtcbiAgICAgICAgICAgIHZhciBlbXBsb3llZUlkID0gcGFydGljaXBhbnRMaXN0W2luZGV4XS5lbXBsb3llZUlkXG4gICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBlbXBsb3llZUlkO1xuICAgICAgICAgICAgdmFyIGF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyW2luZGV4XSA9IGF2YXRhcjtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v6YCa6L+H5Lq65pWwXG4gICAgICAgIGlmICh3b3JrTG9nRGF0YS5hcHByb3ZhbExpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdmFyIGFwcHJvdmFsTGlzdCA9IHdvcmtMb2dEYXRhLmFwcHJvdmFsTGlzdDtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBhcHByb3ZhbExpc3QpIHtcbiAgICAgICAgICAgIGFwcHJvdmFsTGlzdFtpbmRleF0uYXBwcm92YWxEYXRlVGV4dD1mb3JtYXRUaW1lKGFwcHJvdmFsTGlzdFtpbmRleF0uYXBwcm92YWxEYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLndvcmtMb2dEYXRhID0gd29ya0xvZ0RhdGFcbiAgICAgICAgdmFyIGlzUmVmcmVzaCA9IHtcbiAgICAgICAgICBpc1JlZnJlc2g6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcsIGlzUmVmcmVzaCk7XG4gICAgICAgIC8v57yT5a2Y5pel5b+X5Z+65pys5L+h5oGvXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOWHuumUme+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g6I635Y+W5pel5b+X5o+Q6YaS5Y+C5LiO5L+h5oGvXG4gICAgYXN5bmMgR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzKCkge1xuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgIH0pO1xuICAgICAgdmFyIEdldE15UGFydGljaXBhbnRXb3JrbG9ncyA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2cvR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzJyxcbiAgICAgICAgJ3Bvc3QnXG4gICAgICApXG4gICAgICB2YXIgTXlQYXJ0aWNpcGFudFdvcmtsb2dzQ291bnQgPSBHZXRNeVBhcnRpY2lwYW50V29ya2xvZ3MuZGF0YS5yZXN1bHQubGVuZ3RoO1xuICAgICAgaWYgKE15UGFydGljaXBhbnRXb3JrbG9nc0NvdW50KSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvL+WPlua2iOWPguS4juaPkOmGklxuICAgIGFzeW5jIENhbmNlbE15UGFydGljaXBhbnRXb3JrbG9nKCkge1xuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICB9XG4gICAgICB2YXIgQ2FuY2VsRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2cvQ2FuY2VsTXlQYXJ0aWNpcGFudFdvcmtsb2cnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIGlmIChDYW5jZWxEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHZhciBpc1JlZnJlc2ggPSB3eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgIGlzUmVmcmVzaC5pc1JlZnJlc2ggPSB0cnVlO1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJywgaXNSZWZyZXNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IGVycm9yLmRhdGEucmVzdHVsdC5tZXNzYWdlLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOi9rOWMluS4uuaIkeeahFxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcbiAgICAgIHRoaXMuY2hvb3NlTWUgPSBvcHRpb25zLmNob29zZU1lIHx8IGZhbHNlO1xuICAgICAgdGhpcy5HZXRXb3JrbG9nKCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICB2YXIgaXNSZWZyZXNoID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcpO1xuICAgICAgaWYgKGlzUmVmcmVzaC5pc1JlZnJlc2gpIHtcbiAgICAgICAgICB0aGlzLndvcmtMb2dEYXRhID0ge307XG4gICAgICAgICAgdGhpcy5hdmF0YXIgPSBbXSxcbiAgICAgICAgICB0aGlzLkdldFdvcmtsb2coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==