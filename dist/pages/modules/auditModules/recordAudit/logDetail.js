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
      passCount: 0,
      avatar: [],
      toAudit: false
    }, _this.methods = {
      toauditResultsDetail: function toauditResultsDetail() {
        if (this.workLogData.approvalList.length > 0) {
          var approvalList = JSON.stringify(this.workLogData.approvalList);
          wx.navigateTo({ url: '../../myRecord/myLogdetail/auditResultsDetail?approvalList=' + approvalList });
        }
      },
      toDocument: function toDocument() {
        wx.navigateTo({ url: '../../myRecord/logDoc/document?id=' + this.id });
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
        console.log(data);
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
                  _context.next = 37;
                  break;
                }

                workLogData = workLogData.data.result;

                if (workLogData.processStatus == 'N') {
                  this.toAudit = true;
                } else {
                  this.toAudit = false;
                }
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
                  _context.next = 30;
                  break;
                }

                participantList = workLogData.participantList;
                _context.t0 = regeneratorRuntime.keys(participantList);

              case 19:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 30;
                  break;
                }

                index = _context.t1.value;
                employeeId = participantList[index].employeeId;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + employeeId;
                _context.next = 25;
                return _ajax2.default.getAavatar(http);

              case 25:
                avatar = _context.sent;

                this.avatar[index] = avatar;
                this.$apply();
                _context.next = 19;
                break;

              case 30:
                //通过人数
                if (workLogData.approvalList.length !== 0) {
                  approvalList = workLogData.approvalList;

                  approvalList[0].approvalDateText = (0, _api.formatTime)(approvalList[0].approvalDate);
                }
                this.workLogData = workLogData;
                isRefresh = {
                  isRefresh: false
                };

                wx.setStorageSync('isRefresh', isRefresh);
                //缓存日志基本信息
                this.$apply();
                _context.next = 38;
                break;

              case 37:
                wx.showToast({
                  title: '网络出错！', //提示的内容,
                  icon: 'none', //图标,
                  duration: 2000, //延迟时间,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });

              case 38:
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
        this.passCount = 0, this.avatar = [], this.GetWorklog();
      }
    }
  }]);

  return logdetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(logdetail , 'pages/modules/auditModules/recordAudit/logDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ0RldGFpbC5qcyJdLCJuYW1lcyI6WyJsb2dkZXRhaWwiLCJjb21wb25lbnRzIiwiZGF0YSIsImFkZE9wYWNpdHkiLCJjaG9vc2VNZSIsImlkIiwid29ya0xvZ0RhdGEiLCJwYXNzQ291bnQiLCJhdmF0YXIiLCJ0b0F1ZGl0IiwibWV0aG9kcyIsInRvYXVkaXRSZXN1bHRzRGV0YWlsIiwiYXBwcm92YWxMaXN0IiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvRG9jdW1lbnQiLCJ0b3VjaFN0YXJ0IiwiJGFwcGx5IiwidG91Y2hFbmQiLCJzZWxmRHVyYXRpb24iLCJiaWxsRHVyYXRpb24iLCJidXNpbmVzc0R1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImRlc2VsZWN0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJDYW5jZWxNeVBhcnRpY2lwYW50V29ya2xvZyIsImlzRGF0YSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJjbGllbnRJZCIsImNhc2VJZCIsInRvQ29tcGlsZVJlY29yZCIsInNob3dMb2FkaW5nIiwibWFzayIsImFqYXgiLCJnZXREYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsInByb2Nlc3NTdGF0dXMiLCJzZXRTdG9yYWdlU3luYyIsInNUIiwiZVQiLCJZIiwiTSIsInRvRml4ZWQiLCJwYXJ0aWNpcGFudExpc3QiLCJpbmRleCIsImVtcGxveWVlSWQiLCJodHRwIiwiZ2V0QWF2YXRhciIsImFwcHJvdmFsRGF0ZVRleHQiLCJhcHByb3ZhbERhdGUiLCJpc1JlZnJlc2giLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJHZXRNeVBhcnRpY2lwYW50V29ya2xvZ3MiLCJNeVBhcnRpY2lwYW50V29ya2xvZ3NDb3VudCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiQ2FuY2VsRGF0YSIsImdldFN0b3JhZ2VTeW5jIiwiZXJyb3IiLCJyZXN0dWx0IiwibWVzc2FnZSIsIm9wdGlvbnMiLCJHZXRXb3JrbG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxrQkFBWSxDQURQO0FBRUxDLGdCQUFVLEtBRkw7QUFHTEMsVUFBSSxDQUhDO0FBSUxDLG1CQUFhLEVBSlI7QUFLTEMsaUJBQVcsQ0FMTjtBQU1MQyxjQUFRLEVBTkg7QUFPTEMsZUFBUztBQVBKLEssUUFTUEMsTyxHQUFVO0FBQ1BDLDBCQURPLGtDQUNlO0FBQ3BCLFlBQUcsS0FBS0wsV0FBTCxDQUFpQk0sWUFBakIsQ0FBOEJDLE1BQTlCLEdBQXFDLENBQXhDLEVBQTBDO0FBQ3hDLGNBQUlELGVBQWFFLEtBQUtDLFNBQUwsQ0FBZSxLQUFLVCxXQUFMLENBQWlCTSxZQUFoQyxDQUFqQjtBQUNBSSxhQUFHQyxVQUFILENBQWMsRUFBRUMsS0FBSyxnRUFBOEROLFlBQXJFLEVBQWQ7QUFDRDtBQUNILE9BTk87QUFPUk8sZ0JBUFEsd0JBT0k7QUFDVkgsV0FBR0MsVUFBSCxDQUFjLEVBQUVDLEtBQUssdUNBQXFDLEtBQUtiLEVBQWpELEVBQWQ7QUFDRCxPQVRPO0FBVVJlLGdCQVZRLHdCQVVLO0FBQ1gsYUFBS2pCLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxhQUFLa0IsTUFBTDtBQUNELE9BYk87QUFjUkMsY0FkUSxzQkFjRztBQUNULGFBQUtuQixVQUFMLEdBQWtCLENBQWxCO0FBQ0EsWUFBSUQsT0FBTztBQUNURyxjQUFJLEtBQUtBLEVBREE7QUFFVGtCLHdCQUFjLEtBQUtqQixXQUFMLENBQWlCaUIsWUFGdEI7QUFHVEMsd0JBQWMsS0FBS2xCLFdBQUwsQ0FBaUJrQixZQUh0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InNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gIGltcG9ydCB7XG4gICAgZm9ybWF0RGF0ZSxmb3JtYXRUaW1lXG4gIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9nZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgZGF0YSA9IHtcbiAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICBjaG9vc2VNZTogZmFsc2UsXG4gICAgICBpZDogMCxcbiAgICAgIHdvcmtMb2dEYXRhOiB7fSxcbiAgICAgIHBhc3NDb3VudDogMCxcbiAgICAgIGF2YXRhcjogW10sXG4gICAgICB0b0F1ZGl0OiBmYWxzZSxcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgdG9hdWRpdFJlc3VsdHNEZXRhaWwoKXtcbiAgICAgICAgIGlmKHRoaXMud29ya0xvZ0RhdGEuYXBwcm92YWxMaXN0Lmxlbmd0aD4wKXtcbiAgICAgICAgICAgdmFyIGFwcHJvdmFsTGlzdD1KU09OLnN0cmluZ2lmeSh0aGlzLndvcmtMb2dEYXRhLmFwcHJvdmFsTGlzdClcbiAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4uLy4uL215UmVjb3JkL215TG9nZGV0YWlsL2F1ZGl0UmVzdWx0c0RldGFpbD9hcHByb3ZhbExpc3Q9JythcHByb3ZhbExpc3R9KTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b0RvY3VtZW50KCl7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuLi8uLi9teVJlY29yZC9sb2dEb2MvZG9jdW1lbnQ/aWQ9Jyt0aGlzLmlkIH0pO1xuICAgICAgfSxcbiAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICB0b3VjaEVuZCgpIHtcbiAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgc2VsZkR1cmF0aW9uOiB0aGlzLndvcmtMb2dEYXRhLnNlbGZEdXJhdGlvbixcbiAgICAgICAgICBiaWxsRHVyYXRpb246IHRoaXMud29ya0xvZ0RhdGEuYmlsbER1cmF0aW9uLFxuICAgICAgICAgIGJ1c2luZXNzRHVyYXRpb246IHRoaXMud29ya0xvZ0RhdGEuYnVzaW5lc3NEdXJhdGlvblxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vLi4vYXVkaXRNb2R1bGVzL3JlY29yZEF1ZGl0L3JlY29yZEF1ZGl0P2RhdGE9JyArIGRhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgZGVzZWxlY3QoKSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfkvaDnoa7lrprlkJfvvJ8nLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICBjb250ZW50OiAn5piv5ZCm56Gu6K6k5LiN5YaN5pi+56S66K+l5Y+C5LiO5pel5b+X77yf5Y+W5raI5ZCO5bCG5peg5rOV5YaN6L2s5YyW5Li66Ieq5bex55qE5pel5b+XJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzVkNzNmYScsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5DYW5jZWxNeVBhcnRpY2lwYW50V29ya2xvZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2hvb3NlTWUoKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIGlzRGF0YTogdHJ1ZSxcbiAgICAgICAgICBzdGFydFRpbWU6IHRoaXMud29ya0xvZ0RhdGEuc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWU6IHRoaXMud29ya0xvZ0RhdGEuZW5kVGltZSxcbiAgICAgICAgICBpZDogdGhpcy53b3JrTG9nRGF0YS5pZCxcbiAgICAgICAgICBjbGllbnRJZDogdGhpcy53b3JrTG9nRGF0YS5jbGllbnRJZCxcbiAgICAgICAgICBjYXNlSWQ6IHRoaXMud29ya0xvZ0RhdGEuY2FzZUlkLFxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vY3JlYXRXb3JrUmVjb3JkL2NyZWF0V29ya1JlY29yZD9kYXRhPScgKyBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHRvQ29tcGlsZVJlY29yZCgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgLy8gaXNEYXRhOnRydWUsXG4gICAgICAgICAgc3RhcnRUaW1lOiB0aGlzLndvcmtMb2dEYXRhLnN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lOiB0aGlzLndvcmtMb2dEYXRhLmVuZFRpbWUsXG4gICAgICAgICAgaWQ6IHRoaXMud29ya0xvZ0RhdGEuaWQsXG4gICAgICAgICAgY2xpZW50SWQ6IHRoaXMud29ya0xvZ0RhdGEuY2xpZW50SWQsXG4gICAgICAgICAgY2FzZUlkOiB0aGlzLndvcmtMb2dEYXRhLmNhc2VJZCxcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL2NvbXBpbGVSZWNvcmQvY29tcGlsZVJlY29yZD9kYXRhPScgKyBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgYXN5bmMgR2V0V29ya2xvZygpIHtcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK3vvIHor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgfSk7XG4gICAgICB2YXIgaWQgPSB7XG4gICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICB9O1xuICAgICAgdmFyIHdvcmtMb2dEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvd29ya2xvZy9HZXRXb3JrbG9nJyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICBpZFxuICAgICAgKVxuICAgICAgaWYgKHdvcmtMb2dEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHZhciB3b3JrTG9nRGF0YSA9IHdvcmtMb2dEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICBpZih3b3JrTG9nRGF0YS5wcm9jZXNzU3RhdHVzPT0nTicpe1xuICAgICAgICAgIHRoaXMudG9BdWRpdCA9IHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy50b0F1ZGl0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaG9vc2VNZSkge1xuICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdteVBhcnRpY2lwYW50V29ya0xvYWdzJywgd29ya0xvZ0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaXpeW/l+aXtumXtFxuICAgICAgICB2YXIgc1QgPSBmb3JtYXREYXRlKHdvcmtMb2dEYXRhLnN0YXJ0VGltZSk7XG4gICAgICAgIHZhciBlVCA9IGZvcm1hdERhdGUod29ya0xvZ0RhdGEuZW5kVGltZSlcbiAgICAgICAgd29ya0xvZ0RhdGEuc3RhcnRUaW1lID0ge1xuICAgICAgICAgIFk6IHNUWzBdICsgJy8nICsgc1RbMV0gKyAnLycgKyBzVFsyXSxcbiAgICAgICAgICBNOiBzVFszXSArICc6JyArIHNUWzRdXG4gICAgICAgIH1cbiAgICAgICAgd29ya0xvZ0RhdGEuZW5kVGltZSA9IHtcbiAgICAgICAgICBZOiBlVFswXSArICcvJyArIGVUWzFdICsgJy8nICsgZVRbMl0sXG4gICAgICAgICAgTTogZVRbM10gKyAnOicgKyBlVFs0XVxuICAgICAgICB9XG4gICAgICAgIHdvcmtMb2dEYXRhLnNlbGZEdXJhdGlvbj13b3JrTG9nRGF0YS5zZWxmRHVyYXRpb24udG9GaXhlZCgxKTtcbiAgICAgICAgd29ya0xvZ0RhdGEuYnVzaW5lc3NEdXJhdGlvbj13b3JrTG9nRGF0YS5idXNpbmVzc0R1cmF0aW9uLnRvRml4ZWQoMSk7XG4gICAgICAgIHdvcmtMb2dEYXRhLmJpbGxEdXJhdGlvbj13b3JrTG9nRGF0YS5iaWxsRHVyYXRpb24udG9GaXhlZCgxKTtcbiAgICAgICAgXG4gICAgICAgIC8v5Y+C5LiO5Lq65aS05YOPXG4gICAgICAgIGlmICh3b3JrTG9nRGF0YS5wYXJ0aWNpcGFudExpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdmFyIHBhcnRpY2lwYW50TGlzdCA9IHdvcmtMb2dEYXRhLnBhcnRpY2lwYW50TGlzdDtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJ0aWNpcGFudExpc3QpIHtcbiAgICAgICAgICAgIHZhciBlbXBsb3llZUlkID0gcGFydGljaXBhbnRMaXN0W2luZGV4XS5lbXBsb3llZUlkXG4gICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBlbXBsb3llZUlkO1xuICAgICAgICAgICAgdmFyIGF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyW2luZGV4XSA9IGF2YXRhcjtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v6YCa6L+H5Lq65pWwXG4gICAgICAgIGlmICh3b3JrTG9nRGF0YS5hcHByb3ZhbExpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdmFyIGFwcHJvdmFsTGlzdCA9IHdvcmtMb2dEYXRhLmFwcHJvdmFsTGlzdDtcbiAgICAgICAgICBhcHByb3ZhbExpc3RbMF0uYXBwcm92YWxEYXRlVGV4dD1mb3JtYXRUaW1lKGFwcHJvdmFsTGlzdFswXS5hcHByb3ZhbERhdGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3JrTG9nRGF0YSA9IHdvcmtMb2dEYXRhXG4gICAgICAgIHZhciBpc1JlZnJlc2ggPSB7XG4gICAgICAgICAgaXNSZWZyZXNoOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAvL+e8k+WtmOaXpeW/l+WfuuacrOS/oeaBr1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlh7rplJnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOiOt+WPluaXpeW/l+aPkOmGkuWPguS4juS/oeaBr1xuICAgIGFzeW5jIEdldE15UGFydGljaXBhbnRXb3JrbG9ncygpIHtcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICB9KTtcbiAgICAgIHZhciBHZXRNeVBhcnRpY2lwYW50V29ya2xvZ3MgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi93b3JrbG9nL0dldE15UGFydGljaXBhbnRXb3JrbG9ncycsXG4gICAgICAgICdwb3N0J1xuICAgICAgKVxuICAgICAgdmFyIE15UGFydGljaXBhbnRXb3JrbG9nc0NvdW50ID0gR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzLmRhdGEucmVzdWx0Lmxlbmd0aDtcbiAgICAgIGlmIChNeVBhcnRpY2lwYW50V29ya2xvZ3NDb3VudCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy/lj5bmtojlj4LkuI7mj5DphpJcbiAgICBhc3luYyBDYW5jZWxNeVBhcnRpY2lwYW50V29ya2xvZygpIHtcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLkdldE15UGFydGljaXBhbnRXb3JrbG9ncygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBpZDogdGhpcy5pZFxuICAgICAgfVxuICAgICAgdmFyIENhbmNlbERhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi93b3JrbG9nL0NhbmNlbE15UGFydGljaXBhbnRXb3JrbG9nJyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICBkYXRhXG4gICAgICApXG4gICAgICBpZiAoQ2FuY2VsRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgaXNSZWZyZXNoID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcpO1xuICAgICAgICBpc1JlZnJlc2guaXNSZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcsIGlzUmVmcmVzaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBlcnJvci5kYXRhLnJlc3R1bHQubWVzc2FnZSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDovazljJbkuLrmiJHnmoRcbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICB0aGlzLmNob29zZU1lID0gb3B0aW9ucy5jaG9vc2VNZSB8fCBmYWxzZTtcbiAgICAgIHRoaXMuR2V0V29ya2xvZygpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25TaG93KCkge1xuICAgICAgdmFyIGlzUmVmcmVzaCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKTtcbiAgICAgIGlmIChpc1JlZnJlc2guaXNSZWZyZXNoKSB7XG4gICAgICAgIHRoaXMud29ya0xvZ0RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5wYXNzQ291bnQgPSAwLFxuICAgICAgICAgIHRoaXMuYXZhdGFyID0gW10sXG4gICAgICAgICAgdGhpcy5HZXRXb3JrbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=