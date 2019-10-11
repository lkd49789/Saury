'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _ajax = require('./utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      "pages": [
      //主页
      'pages/main/index',
      //消息页面
      'pages/main/messagePage/message',
      //登陆
      'pages/login/login',
      //选择登录页面
      'pages/login/choosePageLogin', 'pages/login/forgetPassword',
      // //日程
      'pages/schedule/index', 'pages/schedule/plan/details', 'pages/schedule/plan/createDetails',
      //我的
      'pages/mine/index', 'pages/mine/data/basedata',
      //我的名片
      'pages/mine/myBusinessCard/myBusinessCard',
      // 'pages/mine/myBusinessCard/showMyBusinessCard',
      'pages/mine/myBusinessCard/map',
      //个人简历
      'pages/mine/myrecord/record',
      // 劳动关系
      'pages/mine/laborRelation/labor-relation',
      //webView
      'pages/mine/webView/viewView', 'pages/mine/webView/help_webView',
      //设置
      'pages/mine/tools'],
      "subPackages": [{
        "root": 'pages/modules/zzbangVip',
        "name": 'zzbangVip',
        "pages": ['getCasePageList', 'caseDetailPage', 'register', 'pactDoc'],
        "independent": false
      }, {
        "root": 'pages/modules/conflictRetrieval',
        "name": 'conflictRetrieval',
        "pages": ['conflictRetrievalList', 'conflictRetrievalAudit/conflictRetrievalDetail', 'conflictRetrievalAudit/searchResult', 'conflictRetrievalAudit/subSearchResult', 'auditedResults/auditedResults', 'auditedResults/auditedResultDetail', 'search/conflictSearch'],
        "independent": false
      }, {
        "root": 'pages/modules/myRegister',
        "name": 'myRegister',
        "pages": ['register', 'myRegisterList', 'search/search_register', 'caseInfo/createCaseInfo', 'conflict/conflictDetail', 'conflict/createConflict', 'conflict/conflictList', 'clientLinker/clientCaseLinkerChosen', 'clientLinker/createClientLinker', 'clientLinker/clientCaseLinkerList', 'caseLawyerLinker/caseLawyerLinkerList', 'caseChargeAndContract/lawyerChargeInfo', 'caseChargeAndContract/chooseChargeMethod', 'caseChargeAndContract/createNomalCharge', 'caseChargeAndContract/createRiskCharge', 'caseChargeAndContract/distributionInformation'],
        "independent": false
      }, {
        "root": "pages/modules/mycase",
        "name": "mycase",
        "pages": ["mycase", "caseDetail/casedetail", "caseDetail/cases/casebase", "caseDetail/cases/caseintroduce", "caseDetail/cases/casepersonnelinformation", "search/search_case", "caseDetail/cases/casepersonal/creatpersonalinfo", "caseDetail/cases/conflictinterest/conflictinterest", "caseDetail/cases/conflictinterest/conflictinterest-detail", "caseDetail/cases/contractdetail/contractinfo", "caseDetail/cases/contractdetail/chargeinfo", "caseDetail/cases/contractdetail/contractdoc"],
        "independent": false
      }, {
        "root": "pages/modules/myclient",
        "name": "myclient",
        "pages": ["myClientList", "clientDetail/clientStatistics", "clientDetail/clientDetail", "clientDetail/itemDetail/clientBaseInfo", "clientDetail/itemDetail/clientLinkman", "clientDetail/itemDetail/clientCaseMange", "search/search_client", "clientDetail/itemDetail/clientLinkmanDetail/clientLinkmanDetail", "clientDetail/itemDetail/recordsList", "directory/directory", "createClient/createClientBaseInfo", "createClient/createClientPrincipalInfo"],
        "independent": false
      }, {
        "root": "pages/modules/myRecord",
        "name": "myRecord",
        "pages": ["workRecord", "myLogdetail/logdetail", "MyParticipantWorklogs/MyParticipantWorklogsDetail", "logsStatistics/statisticsDetail", "creatWorkRecord/creatWorkRecord", "logsStatistics/statisticsCovers/statisticsRecord", "compileRecord/compileRecord", "search/search_record", "logDoc/document", "myLogdetail/auditResultsDetail"],
        "independent": false
      }, {
        "root": "pages/modules/myTaskCourse",
        "name": "myTaskCourse",
        "pages": ["taskProject", "createProject", "taskStage/taskStageList", "taskStage/taskDetail/taskdetail", "taskStage/createtask/createStage", "taskStage/createtask/creatTask", "taskStage/createtask/creatTaskAll", "search/searchTask", "caseClientSearch/searchCaseClient"],
        "independent": false
      }, {
        "root": "pages/modules/myMeeting",
        "name": "myMeeting",
        "pages": ["meetingList", "meetingDetail/meetingDetail", "search/searchMeeting", "creatMeeting/creatMeeting", "creatMeeting/chooseMeetingRoom"],
        "independent": false
      }, {
        "root": "pages/modules/myApplyList",
        "name": "myApplyList",
        "pages": ["MyApplyList", "myApplyDetail/myApplyDetail", "createApply/createApply", "search/searchMyApply"],
        "independent": false
      }, {
        "root": "pages/modules/auditModules/applyAudit",
        "name": "applyAudit",
        "pages": ["applyAuditList", "search/searchApplyAudit", "applyAuditDetail"],
        "independent": false
      }, {
        "root": "pages/modules/auditModules/recordAudit",
        "name": "recordAudit",
        "pages": ["recordAuditList", "recordAudit", "search/searchRecordAudit", "logDetail"],
        "independent": false
      }, {
        "root": "pages/modules/auditModules/caseAudit",
        "name": "caseAudit",
        "pages": ["auditCaseList", "caseDetailAudit/caseDetailAudit", "caseDetailAudit/auditCase", "search/searchCase_audit"],
        "independent": false
      }, {
        "root": "pages/modules/auditModules/approveAudit",
        "name": "approveAudit",
        "pages": ["approveList", "approveDetail", "approveAudit", "search/searchApprove"],
        "independent": false
      }, {
        "root": "pages/modules/bill",
        "name": "bill",
        "pages": ["myBill/myBill", "myBill/myBillDetail", "myBill/myBillDetails", "manageBill/manageBill", "manageBill/manageBillDetail", "manageBill/manageBillDetails", "manageBill/manageBillExamine", "search/searchMyBill", "search/searchManageBill"],
        "independent": false
      }, {
        "root": "pages/modules/invoice",
        "name": "invoice",
        "pages": ["myInvoce/myinvoice", "myInvoce/myinvoiceDetail", "manageInvoce/manageInvoice", "manageInvoce/manageInvoiceDetail", "manageInvoce/manageInvoiceExamine", "search/searchMyNoice", "search/searchManageNoice"],
        "independent": false
      }, {
        "root": "pages/modules/receivables",
        "name": "receivables",
        "pages": ["myReceivables/myReceivables", "myReceivables/myReceivablesDetail", "manageReceivables/manageReceivables", "manageReceivables/manageReceivablesDetail", "manageReceivables/manageReceivablesExamine", "search/searchReceivables", "search/searchManageReceivables"],
        "independent": false
      }, {
        "root": "pages/modules/cost",
        "name": "cost",
        "pages": ["myCost/myCost", "myCost/myCostDetail", "myCost/financialOperationRecord", "manageCost/manageCost", "manageCost/manageCostDetail", "manageCost/manageCostExamine", "search/searchCost", "search/searchManageCost"],
        "independent": false
      }, {
        "root": "pages/modules/caseManagement",
        "name": "caseManagement",
        "pages": ["caseManagement", "search/search_caseManagement"],
        "independent": false
      }, {
        "root": 'pages/modules/ConflictInterestPreflight',
        "name": 'ConflictInterestPreflight',
        "pages": ['ConflictInterestPreflight'],
        "independent": false
      }],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#5d73fa',
        navigationBarTitleText: '律智荟',
        navigationBarTextStyle: 'white'
        // enablePullDownRefresh: true,
        // backgroundTextStyle: 'dark',
        // backgroundColorTop: '#f4f4f4',
        // backgroundColorBottom: '#f4f4f4'
      },
      tabBar: {
        color: '#7a7a7a',
        selectedColor: '#5d73fa',
        backgroundColor: '#fff',
        // borderStyle: 'black',
        list: [{
          iconPath: './images/home.png',
          selectedIconPath: './images/homeSelect.png',
          pagePath: 'pages/main/index',
          text: '首页'
        }, {
          iconPath: './images/schedule.png',
          selectedIconPath: './images/scheduleSelect.png',
          pagePath: 'pages/schedule/index',
          text: '日程'
        }, {
          iconPath: './images/mine.png',
          selectedIconPath: './images/mineSelect.png',
          pagePath: 'pages/mine/index',
          text: '我的'
        }]
      }
    }, _this.global = {
      userInfo: {},
      netWorkString: true,
      options: {},
      currentUserId: 0,
      tenant: {}
      //获取用户信息
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'GetCurrentLoginInformations',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var CurrentLoginInformationsData, userInfo, http, avatarData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/app/session/GetCurrentLoginInformations', 'post');

              case 2:
                CurrentLoginInformationsData = _context.sent;

                if (!(CurrentLoginInformationsData.statusCode == 200)) {
                  _context.next = 14;
                  break;
                }

                userInfo = {};

                userInfo = CurrentLoginInformationsData.data.result.user;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + CurrentLoginInformationsData.data.result.user.id;

                this.global.currentUserId = CurrentLoginInformationsData.data.result.user.id;
                _context.next = 10;
                return _ajax2.default.getAavatar(http);

              case 10:
                avatarData = _context.sent;

                userInfo['userAvatar'] = avatarData;
                this.global.userInfo = userInfo;
                this.global.tenant = CurrentLoginInformationsData.data.result.tenant;

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetCurrentLoginInformations() {
        return _ref2.apply(this, arguments);
      }

      return GetCurrentLoginInformations;
    }()
  }, {
    key: 'onLaunch',
    value: function onLaunch() {
      var _this2 = this;

      // 判断是否有网
      wx.onNetworkStatusChange(function (res) {
        if (res.isConnected) {
          _this2.global.netWorkString = true;
        } else {
          _this2.global.netWorkString = false;
        }
      });
      if (Object.keys(this.global.userInfo).length == 0) {
        this.GetCurrentLoginInformations();
      }
    }
  }, {
    key: 'onShow',
    value: function onShow(options) {
      this.global.options = options;
      wx.login({
        success: function success(res) {
          var code = res.code;
          wx.getSetting({
            success: function success(res) {
              var accessToken = wx.getStorageSync('access');
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  withCredentials: true,
                  success: function success(res) {
                    wx.request({
                      url: 'https://www.ailinkedlaw.com/api/Account/GetWechatUserInfo', //接口地址
                      data: {
                        code: code,
                        encryptedData: res.encryptedData,
                        iv: res.iv,
                        rawData: res.rawData,
                        signature: res.signature
                      },
                      method: "POST",
                      header: {
                        'content-type': 'application/json' //默认值
                      },
                      success: function success(res) {
                        if (res.data.result.accessToken) {
                          try {
                            wx.setStorageSync('access', res.data.result.accessToken);
                          } catch (err) {
                            console.log(err);
                          }
                        } else {
                          wx.redirectTo({
                            url: '/pages/login/choosePageLogin'
                          });
                        }
                      }
                    });
                  }
                });
              } else if (!accessToken || !res.authSetting['scope.userInfo']) {
                wx.redirectTo({
                  url: '/pages/login/choosePageLogin'
                });
              }
            }
          });
        }
      });
      //检查是否存在新版本
      wx.getUpdateManager().onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          //如果有新版本
          // 小程序有新版本，会主动触发下载操作（无需开发者触发）
          wx.getUpdateManager().onUpdateReady(function () {
            //当新版本下载完成，会进行回调
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，单击确定重启应用',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  wx.getUpdateManager().applyUpdate();
                }
              }
            });
          });
          // 小程序有新版本，会主动触发下载操作（无需开发者触发）
          wx.getUpdateManager().onUpdateFailed(function () {
            //当新版本下载失败，会进行回调
            wx.showModal({
              title: '提示',
              content: '检查到有新版本，但下载失败，请检查网络设置',
              showCancel: false
            });
          });
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInBhZ2VQYXRoIiwidGV4dCIsImdsb2JhbCIsInVzZXJJbmZvIiwibmV0V29ya1N0cmluZyIsIm9wdGlvbnMiLCJjdXJyZW50VXNlcklkIiwidGVuYW50IiwiYWpheCIsImdldERhdGEiLCJDdXJyZW50TG9naW5JbmZvcm1hdGlvbnNEYXRhIiwic3RhdHVzQ29kZSIsImRhdGEiLCJyZXN1bHQiLCJ1c2VyIiwiaHR0cCIsImlkIiwiZ2V0QWF2YXRhciIsImF2YXRhckRhdGEiLCJ3eCIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsInJlcyIsImlzQ29ubmVjdGVkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIkdldEN1cnJlbnRMb2dpbkluZm9ybWF0aW9ucyIsImxvZ2luIiwic3VjY2VzcyIsImNvZGUiLCJnZXRTZXR0aW5nIiwiYWNjZXNzVG9rZW4iLCJnZXRTdG9yYWdlU3luYyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXF1ZXN0IiwidXJsIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwicmF3RGF0YSIsInNpZ25hdHVyZSIsIm1ldGhvZCIsImhlYWRlciIsInNldFN0b3JhZ2VTeW5jIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0VG8iLCJnZXRVcGRhdGVNYW5hZ2VyIiwib25DaGVja0ZvclVwZGF0ZSIsImhhc1VwZGF0ZSIsIm9uVXBkYXRlUmVhZHkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUVFQSxNLEdBQVM7QUFDUCxlQUFTO0FBQ1A7QUFDQSx3QkFGTztBQUdQO0FBQ0Esc0NBSk87QUFLUDtBQUNBLHlCQU5PO0FBT1A7QUFDQSxtQ0FSTyxFQVNQLDRCQVRPO0FBVVA7QUFDQSw0QkFYTyxFQVlQLDZCQVpPLEVBYVAsbUNBYk87QUFjUDtBQUNBLHdCQWZPLEVBZ0JQLDBCQWhCTztBQWlCUDtBQUNBLGdEQWxCTztBQW1CUDtBQUNBLHFDQXBCTztBQXFCUDtBQUNBLGtDQXRCTztBQXVCUDtBQUNBLCtDQXhCTztBQXlCUDtBQUNBLG1DQTFCTyxFQTJCUCxpQ0EzQk87QUE0QlA7QUFDQSx3QkE3Qk8sQ0FERjtBQWtKUCxxQkFBYyxDQUNaO0FBQ0UsZ0JBQU8seUJBRFQ7QUFFRSxnQkFBTyxXQUZUO0FBR0UsaUJBQVEsQ0FDTixpQkFETSxFQUVOLGdCQUZNLEVBR04sVUFITSxFQUlOLFNBSk0sQ0FIVjtBQVNFLHVCQUFjO0FBVGhCLE9BRFksRUFZWjtBQUNFLGdCQUFPLGlDQURUO0FBRUUsZ0JBQU8sbUJBRlQ7QUFHRSxpQkFBUSxDQUNOLHVCQURNLEVBRU4sZ0RBRk0sRUFHTixxQ0FITSxFQUlOLHdDQUpNLEVBS04sK0JBTE0sRUFNTixvQ0FOTSxFQU9OLHVCQVBNLENBSFY7QUFZRSx1QkFBYztBQVpoQixPQVpZLEVBMEJaO0FBQ0UsZ0JBQU8sMEJBRFQ7QUFFRSxnQkFBTyxZQUZUO0FBR0UsaUJBQVEsQ0FDTixVQURNLEVBRU4sZ0JBRk0sRUFHTix3QkFITSxFQUlOLHlCQUpNLEVBS04seUJBTE0sRUFNTix5QkFOTSxFQU9OLHVCQVBNLEVBUU4scUNBUk0sRUFTTixpQ0FUTSxFQVVOLG1DQVZNLEVBV04sdUNBWE0sRUFZTix3Q0FaTSxF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SEQsYUFBYjtBQUtELFdBTkQ7QUFPRDtBQUNGLE9BMUJEO0FBMkJEOzs7O0VBampCMEJJLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xuICBpbXBvcnQgYWpheCBmcm9tICcuL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBcInBhZ2VzXCI6IFtcbiAgICAgICAgLy/kuLvpobVcbiAgICAgICAgJ3BhZ2VzL21haW4vaW5kZXgnLFxuICAgICAgICAvL+a2iOaBr+mhtemdolxuICAgICAgICAncGFnZXMvbWFpbi9tZXNzYWdlUGFnZS9tZXNzYWdlJyxcbiAgICAgICAgLy/nmbvpmYZcbiAgICAgICAgJ3BhZ2VzL2xvZ2luL2xvZ2luJyxcbiAgICAgICAgLy/pgInmi6nnmbvlvZXpobXpnaJcbiAgICAgICAgJ3BhZ2VzL2xvZ2luL2Nob29zZVBhZ2VMb2dpbicsXG4gICAgICAgICdwYWdlcy9sb2dpbi9mb3JnZXRQYXNzd29yZCcsXG4gICAgICAgIC8vIC8v5pel56iLXG4gICAgICAgICdwYWdlcy9zY2hlZHVsZS9pbmRleCcsXG4gICAgICAgICdwYWdlcy9zY2hlZHVsZS9wbGFuL2RldGFpbHMnLFxuICAgICAgICAncGFnZXMvc2NoZWR1bGUvcGxhbi9jcmVhdGVEZXRhaWxzJyxcbiAgICAgICAgLy/miJHnmoRcbiAgICAgICAgJ3BhZ2VzL21pbmUvaW5kZXgnLFxuICAgICAgICAncGFnZXMvbWluZS9kYXRhL2Jhc2VkYXRhJyxcbiAgICAgICAgLy/miJHnmoTlkI3niYdcbiAgICAgICAgJ3BhZ2VzL21pbmUvbXlCdXNpbmVzc0NhcmQvbXlCdXNpbmVzc0NhcmQnLFxuICAgICAgICAvLyAncGFnZXMvbWluZS9teUJ1c2luZXNzQ2FyZC9zaG93TXlCdXNpbmVzc0NhcmQnLFxuICAgICAgICAncGFnZXMvbWluZS9teUJ1c2luZXNzQ2FyZC9tYXAnLFxuICAgICAgICAvL+S4quS6uueugOWOhlxuICAgICAgICAncGFnZXMvbWluZS9teXJlY29yZC9yZWNvcmQnLFxuICAgICAgICAvLyDlirPliqjlhbPns7tcbiAgICAgICAgJ3BhZ2VzL21pbmUvbGFib3JSZWxhdGlvbi9sYWJvci1yZWxhdGlvbicsXG4gICAgICAgIC8vd2ViVmlld1xuICAgICAgICAncGFnZXMvbWluZS93ZWJWaWV3L3ZpZXdWaWV3JyxcbiAgICAgICAgJ3BhZ2VzL21pbmUvd2ViVmlldy9oZWxwX3dlYlZpZXcnLFxuICAgICAgICAvL+iuvue9rlxuICAgICAgICAncGFnZXMvbWluZS90b29scycsXG4gICAgICAgIC8v5qih5Z2XXG4gICAgICAgIC8vIC8v5oiR55qE5qGI5Lu2XG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2FzZS9teWNhc2UnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNhc2UvY2FzZURldGFpbC9jYXNlZGV0YWlsJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXljYXNlL2Nhc2VEZXRhaWwvY2FzZXMvY2FzZWJhc2UnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNhc2UvY2FzZURldGFpbC9jYXNlcy9jYXNlaW50cm9kdWNlJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXljYXNlL2Nhc2VEZXRhaWwvY2FzZXMvY2FzZXBlcnNvbm5lbGluZm9ybWF0aW9uJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXljYXNlL3NlYXJjaC9zZWFyY2hfY2FzZScsXG4gICAgICAgIC8vIC8v5qGI5Lu25Lq65ZGY6K+m5oOF5L+h5oGvXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2FzZS9jYXNlRGV0YWlsL2Nhc2VzL2Nhc2VwZXJzb25hbC9jcmVhdHBlcnNvbmFsaW5mbycsXG4gICAgICAgIC8vIC8v5Yip55uK5Yay56qBXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2FzZS9jYXNlRGV0YWlsL2Nhc2VzL2NvbmZsaWN0aW50ZXJlc3QvY29uZmxpY3RpbnRlcmVzdCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2FzZS9jYXNlRGV0YWlsL2Nhc2VzL2NvbmZsaWN0aW50ZXJlc3QvY29uZmxpY3RpbnRlcmVzdC1kZXRhaWwnLFxuICAgICAgICAvLyAvL+WQiOWQjOS/oeaBr1xuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNhc2UvY2FzZURldGFpbC9jYXNlcy9jb250cmFjdGRldGFpbC9jb250cmFjdGluZm8nLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNhc2UvY2FzZURldGFpbC9jYXNlcy9jb250cmFjdGRldGFpbC9jaGFyZ2VpbmZvJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXljYXNlL2Nhc2VEZXRhaWwvY2FzZXMvY29udHJhY3RkZXRhaWwvY29udHJhY3Rkb2MnLFxuICAgICAgICAvLyAvL+aIkeeahOWuouaIt+aooeWdl1xuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNsaWVudC9teUNsaWVudExpc3QnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNsaWVudC9jbGllbnREZXRhaWwvY2xpZW50U3RhdGlzdGljcycsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2xpZW50L2NsaWVudERldGFpbC9jbGllbnREZXRhaWwnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNsaWVudC9jbGllbnREZXRhaWwvaXRlbURldGFpbC9jbGllbnRCYXNlSW5mbycsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2xpZW50L2NsaWVudERldGFpbC9pdGVtRGV0YWlsL2NsaWVudExpbmttYW4nLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNsaWVudC9jbGllbnREZXRhaWwvaXRlbURldGFpbC9jbGllbnRDYXNlTWFuZ2UnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teWNsaWVudC9zZWFyY2gvc2VhcmNoX2NsaWVudCcsXG4gICAgICAgIC8vIC8v5a6i5oi35pa55pys5qGI6IGU57O75Lq66K+m5oOF6aG1XG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2xpZW50L2NsaWVudERldGFpbC9pdGVtRGV0YWlsL2NsaWVudExpbmttYW5EZXRhaWwvY2xpZW50TGlua21hbkRldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215Y2xpZW50L2NsaWVudERldGFpbC9pdGVtRGV0YWlsL3JlY29yZHNMaXN0JyxcbiAgICAgICAgLy8g5oiR55qE5pel5b+X5qih5Z2XXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215UmVjb3JkL3dvcmtSZWNvcmQnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teVJlY29yZC9teUxvZ2RldGFpbC9sb2dkZXRhaWwnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teVJlY29yZC9NeVBhcnRpY2lwYW50V29ya2xvZ3MvTXlQYXJ0aWNpcGFudFdvcmtsb2dzRGV0YWlsJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXlSZWNvcmQvbG9nc1N0YXRpc3RpY3Mvc3RhdGlzdGljc0RldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215UmVjb3JkL2NyZWF0V29ya1JlY29yZC9jcmVhdFdvcmtSZWNvcmQnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teVJlY29yZC9sb2dzU3RhdGlzdGljcy9zdGF0aXN0aWNzQ292ZXJzL3N0YXRpc3RpY3NSZWNvcmQnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teVJlY29yZC9jb21waWxlUmVjb3JkL2NvbXBpbGVSZWNvcmQnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teVJlY29yZC9zZWFyY2gvc2VhcmNoX3JlY29yZCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215UmVjb3JkL2xvZ0RvYy9kb2N1bWVudCcsXG4gICAgICAgIC8v5Lu75Yqh6L+b56iL5qih5Z2XXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215VGFza0NvdXJzZS90YXNrUHJvamVjdCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215VGFza0NvdXJzZS90YXNrU3RhZ2UvdGFza1N0YWdlTGlzdCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215VGFza0NvdXJzZS90YXNrU3RhZ2UvdGFza0RldGFpbC90YXNrZGV0YWlsJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXlUYXNrQ291cnNlL3Rhc2tTdGFnZS9jcmVhdGV0YXNrL2NyZWF0ZVN0YWdlJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXlUYXNrQ291cnNlL3Rhc2tTdGFnZS9jcmVhdGV0YXNrL2NyZWF0VGFzaycsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215VGFza0NvdXJzZS90YXNrU3RhZ2UvY3JlYXRldGFzay9jcmVhdFRhc2tBbGwnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teVRhc2tDb3Vyc2Uvc2VhcmNoL3NlYXJjaFRhc2snLFxuICAgICAgICAvL+aIkeeahOS8muiurlxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teU1lZXRpbmcvbWVldGluZ0xpc3QnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teU1lZXRpbmcvbWVldGluZ0RldGFpbC9tZWV0aW5nRGV0YWlsJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXlNZWV0aW5nL3NlYXJjaC9zZWFyY2hNZWV0aW5nJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXlNZWV0aW5nL2NyZWF0TWVldGluZy9jcmVhdE1lZXRpbmcnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teU1lZXRpbmcvY3JlYXRNZWV0aW5nL2Nob29zZU1lZXRpbmdSb29tJyxcbiAgICAgICAgLy/miJHnmoTor7flgYdcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvbXlBcHBseUxpc3QvTXlBcHBseUxpc3QnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teUFwcGx5TGlzdC9teUFwcGx5RGV0YWlsL215QXBwbHlEZXRhaWwnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9teUFwcGx5TGlzdC9jcmVhdGVBcHBseS9jcmVhdGVBcHBseScsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215QXBwbHlMaXN0L3NlYXJjaC9zZWFyY2hNeUFwcGx5JyxcbiAgICAgICAgLy/lrqHmoLjmqKHlnZdcbiAgICAgICAgLy/or7flgYflrqHmoLhcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYXVkaXRNb2R1bGVzL2FwcGx5QXVkaXQvYXBwbHlBdWRpdExpc3QnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvYXBwbHlBdWRpdC9zZWFyY2gvc2VhcmNoQXBwbHlBdWRpdCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2F1ZGl0TW9kdWxlcy9hcHBseUF1ZGl0L2FwcGx5QXVkaXREZXRhaWwnLFxuICAgICAgICAvL+aXpeW/l+WuoeaguFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvcmVjb3JkQXVkaXQvcmVjb3JkQXVkaXRMaXN0JyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYXVkaXRNb2R1bGVzL3JlY29yZEF1ZGl0L3JlY29yZEF1ZGl0JyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYXVkaXRNb2R1bGVzL3JlY29yZEF1ZGl0L3NlYXJjaC9zZWFyY2hSZWNvcmRBdWRpdCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2F1ZGl0TW9kdWxlcy9yZWNvcmRBdWRpdC9sb2dEZXRhaWwnLFxuICAgICAgICAvLyAvL+ahiOS7tuWuoeaguFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvY2FzZUF1ZGl0L2F1ZGl0Q2FzZUxpc3QnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvY2FzZUF1ZGl0L2Nhc2VEZXRhaWxBdWRpdC9jYXNlRGV0YWlsQXVkaXQnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvY2FzZUF1ZGl0L2Nhc2VEZXRhaWxBdWRpdC9hdWRpdENhc2UnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvY2FzZUF1ZGl0L3NlYXJjaC9zZWFyY2hDYXNlX2F1ZGl0JyxcbiAgICAgICAgLy8gLy/mlofkuablrqHmoLhcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYXVkaXRNb2R1bGVzL2FwcHJvdmVBdWRpdC9hcHByb3ZlTGlzdCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2F1ZGl0TW9kdWxlcy9hcHByb3ZlQXVkaXQvYXBwcm92ZURldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2F1ZGl0TW9kdWxlcy9hcHByb3ZlQXVkaXQvYXBwcm92ZUF1ZGl0JyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYXVkaXRNb2R1bGVzL2FwcHJvdmVBdWRpdC9zZWFyY2gvc2VhcmNoQXBwcm92ZScsXG4gICAgICAgIC8vIC8v5oiR55qE6LSm5Y2VXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2JpbGwvbXlCaWxsL215QmlsbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2JpbGwvbXlCaWxsL215QmlsbERldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2JpbGwvbXlCaWxsL215QmlsbERldGFpbHMnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9iaWxsL21hbmFnZUJpbGwvbWFuYWdlQmlsbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2JpbGwvbWFuYWdlQmlsbC9tYW5hZ2VCaWxsRGV0YWlsJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYmlsbC9tYW5hZ2VCaWxsL21hbmFnZUJpbGxEZXRhaWxzJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYmlsbC9tYW5hZ2VCaWxsL21hbmFnZUJpbGxFeGFtaW5lJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYmlsbC9zZWFyY2gvc2VhcmNoTXlCaWxsJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvYmlsbC9zZWFyY2gvc2VhcmNoTWFuYWdlQmlsbCcsXG4gICAgICAgIC8vIC8v5oiR55qE5Y+R56WoXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2ludm9pY2UvbXlJbnZvY2UvbXlpbnZvaWNlJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvaW52b2ljZS9teUludm9jZS9teWludm9pY2VEZXRhaWwnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9pbnZvaWNlL21hbmFnZUludm9jZS9tYW5hZ2VJbnZvaWNlJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvaW52b2ljZS9tYW5hZ2VJbnZvY2UvbWFuYWdlSW52b2ljZURldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2ludm9pY2UvbWFuYWdlSW52b2NlL21hbmFnZUludm9pY2VFeGFtaW5lJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvaW52b2ljZS9zZWFyY2gvc2VhcmNoTXlOb2ljZScsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2ludm9pY2Uvc2VhcmNoL3NlYXJjaE1hbmFnZU5vaWNlJyxcbiAgICAgICAgLy8gLy/mlLbmrL7orqTpooZcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvcmVjZWl2YWJsZXMvbXlSZWNlaXZhYmxlcy9teVJlY2VpdmFibGVzJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvcmVjZWl2YWJsZXMvbXlSZWNlaXZhYmxlcy9teVJlY2VpdmFibGVzRGV0YWlsJyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvcmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXMnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9yZWNlaXZhYmxlcy9tYW5hZ2VSZWNlaXZhYmxlcy9tYW5hZ2VSZWNlaXZhYmxlc0RldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL3JlY2VpdmFibGVzL21hbmFnZVJlY2VpdmFibGVzL21hbmFnZVJlY2VpdmFibGVzRXhhbWluZScsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL3JlY2VpdmFibGVzL3NlYXJjaC9zZWFyY2hSZWNlaXZhYmxlcycsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL3JlY2VpdmFibGVzL3NlYXJjaC9zZWFyY2hNYW5hZ2VSZWNlaXZhYmxlcycsXG4gICAgICAgIC8vIC8v5oiR55qE6LS555SoXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2Nvc3QvbXlDb3N0L215Q29zdCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2Nvc3QvbXlDb3N0L215Q29zdERldGFpbCcsXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL2Nvc3QvbWFuYWdlQ29zdC9tYW5hZ2VDb3N0JyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvY29zdC9tYW5hZ2VDb3N0L21hbmFnZUNvc3REZXRhaWwnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9jb3N0L21hbmFnZUNvc3QvbWFuYWdlQ29zdEV4YW1pbmUnLFxuICAgICAgICAvLyAncGFnZXMvbW9kdWxlcy9jb3N0L3NlYXJjaC9zZWFyY2hDb3N0JyxcbiAgICAgICAgLy8gJ3BhZ2VzL21vZHVsZXMvY29zdC9zZWFyY2gvc2VhcmNoTWFuYWdlQ29zdCcsXG4gICAgICAgIC8vIC8v5oiR55qE5pel56iLXG4gICAgICAgIC8vICdwYWdlcy9tb2R1bGVzL215U2NoZWR1bGUvbXlTY2hlZHVsZScsXG5cbiAgICAgIF0sXG4gICAgICBcInN1YlBhY2thZ2VzXCI6W1xuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6J3BhZ2VzL21vZHVsZXMvenpiYW5nVmlwJyxcbiAgICAgICAgICBcIm5hbWVcIjonenpiYW5nVmlwJyxcbiAgICAgICAgICBcInBhZ2VzXCI6W1xuICAgICAgICAgICAgJ2dldENhc2VQYWdlTGlzdCcsXG4gICAgICAgICAgICAnY2FzZURldGFpbFBhZ2UnLFxuICAgICAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgICAgICdwYWN0RG9jJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJpbmRlcGVuZGVudFwiOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6J3BhZ2VzL21vZHVsZXMvY29uZmxpY3RSZXRyaWV2YWwnLFxuICAgICAgICAgIFwibmFtZVwiOidjb25mbGljdFJldHJpZXZhbCcsXG4gICAgICAgICAgXCJwYWdlc1wiOltcbiAgICAgICAgICAgICdjb25mbGljdFJldHJpZXZhbExpc3QnLFxuICAgICAgICAgICAgJ2NvbmZsaWN0UmV0cmlldmFsQXVkaXQvY29uZmxpY3RSZXRyaWV2YWxEZXRhaWwnLFxuICAgICAgICAgICAgJ2NvbmZsaWN0UmV0cmlldmFsQXVkaXQvc2VhcmNoUmVzdWx0JyxcbiAgICAgICAgICAgICdjb25mbGljdFJldHJpZXZhbEF1ZGl0L3N1YlNlYXJjaFJlc3VsdCcsXG4gICAgICAgICAgICAnYXVkaXRlZFJlc3VsdHMvYXVkaXRlZFJlc3VsdHMnLFxuICAgICAgICAgICAgJ2F1ZGl0ZWRSZXN1bHRzL2F1ZGl0ZWRSZXN1bHREZXRhaWwnLFxuICAgICAgICAgICAgJ3NlYXJjaC9jb25mbGljdFNlYXJjaCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImluZGVwZW5kZW50XCI6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInJvb3RcIjoncGFnZXMvbW9kdWxlcy9teVJlZ2lzdGVyJyxcbiAgICAgICAgICBcIm5hbWVcIjonbXlSZWdpc3RlcicsXG4gICAgICAgICAgXCJwYWdlc1wiOltcbiAgICAgICAgICAgICdyZWdpc3RlcicsXG4gICAgICAgICAgICAnbXlSZWdpc3Rlckxpc3QnLFxuICAgICAgICAgICAgJ3NlYXJjaC9zZWFyY2hfcmVnaXN0ZXInLFxuICAgICAgICAgICAgJ2Nhc2VJbmZvL2NyZWF0ZUNhc2VJbmZvJyxcbiAgICAgICAgICAgICdjb25mbGljdC9jb25mbGljdERldGFpbCcsXG4gICAgICAgICAgICAnY29uZmxpY3QvY3JlYXRlQ29uZmxpY3QnLFxuICAgICAgICAgICAgJ2NvbmZsaWN0L2NvbmZsaWN0TGlzdCcsXG4gICAgICAgICAgICAnY2xpZW50TGlua2VyL2NsaWVudENhc2VMaW5rZXJDaG9zZW4nLFxuICAgICAgICAgICAgJ2NsaWVudExpbmtlci9jcmVhdGVDbGllbnRMaW5rZXInLFxuICAgICAgICAgICAgJ2NsaWVudExpbmtlci9jbGllbnRDYXNlTGlua2VyTGlzdCcsXG4gICAgICAgICAgICAnY2FzZUxhd3llckxpbmtlci9jYXNlTGF3eWVyTGlua2VyTGlzdCcsXG4gICAgICAgICAgICAnY2FzZUNoYXJnZUFuZENvbnRyYWN0L2xhd3llckNoYXJnZUluZm8nLFxuICAgICAgICAgICAgJ2Nhc2VDaGFyZ2VBbmRDb250cmFjdC9jaG9vc2VDaGFyZ2VNZXRob2QnLFxuICAgICAgICAgICAgJ2Nhc2VDaGFyZ2VBbmRDb250cmFjdC9jcmVhdGVOb21hbENoYXJnZScsXG4gICAgICAgICAgICAnY2FzZUNoYXJnZUFuZENvbnRyYWN0L2NyZWF0ZVJpc2tDaGFyZ2UnLFxuICAgICAgICAgICAgJ2Nhc2VDaGFyZ2VBbmRDb250cmFjdC9kaXN0cmlidXRpb25JbmZvcm1hdGlvbidcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiaW5kZXBlbmRlbnRcIjpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6XCJwYWdlcy9tb2R1bGVzL215Y2FzZVwiLFxuICAgICAgICAgIFwibmFtZVwiOlwibXljYXNlXCIsXG4gICAgICAgICAgXCJwYWdlc1wiOltcbiAgICAgICAgICAgIFwibXljYXNlXCIsXG4gICAgICAgICAgICBcImNhc2VEZXRhaWwvY2FzZWRldGFpbFwiLFxuICAgICAgICAgICAgXCJjYXNlRGV0YWlsL2Nhc2VzL2Nhc2ViYXNlXCIsXG4gICAgICAgICAgICBcImNhc2VEZXRhaWwvY2FzZXMvY2FzZWludHJvZHVjZVwiLFxuICAgICAgICAgICAgXCJjYXNlRGV0YWlsL2Nhc2VzL2Nhc2VwZXJzb25uZWxpbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoX2Nhc2VcIixcbiAgICAgICAgICAgIFwiY2FzZURldGFpbC9jYXNlcy9jYXNlcGVyc29uYWwvY3JlYXRwZXJzb25hbGluZm9cIixcbiAgICAgICAgICAgIFwiY2FzZURldGFpbC9jYXNlcy9jb25mbGljdGludGVyZXN0L2NvbmZsaWN0aW50ZXJlc3RcIixcbiAgICAgICAgICAgIFwiY2FzZURldGFpbC9jYXNlcy9jb25mbGljdGludGVyZXN0L2NvbmZsaWN0aW50ZXJlc3QtZGV0YWlsXCIsXG4gICAgICAgICAgICBcImNhc2VEZXRhaWwvY2FzZXMvY29udHJhY3RkZXRhaWwvY29udHJhY3RpbmZvXCIsXG4gICAgICAgICAgICBcImNhc2VEZXRhaWwvY2FzZXMvY29udHJhY3RkZXRhaWwvY2hhcmdlaW5mb1wiLFxuICAgICAgICAgICAgXCJjYXNlRGV0YWlsL2Nhc2VzL2NvbnRyYWN0ZGV0YWlsL2NvbnRyYWN0ZG9jXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiaW5kZXBlbmRlbnRcIjpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6XCJwYWdlcy9tb2R1bGVzL215Y2xpZW50XCIsXG4gICAgICAgICAgXCJuYW1lXCI6XCJteWNsaWVudFwiLFxuICAgICAgICAgIFwicGFnZXNcIjpbXG4gICAgICAgICAgICBcIm15Q2xpZW50TGlzdFwiLFxuICAgICAgICAgICAgXCJjbGllbnREZXRhaWwvY2xpZW50U3RhdGlzdGljc1wiLFxuICAgICAgICAgICAgXCJjbGllbnREZXRhaWwvY2xpZW50RGV0YWlsXCIsXG4gICAgICAgICAgICBcImNsaWVudERldGFpbC9pdGVtRGV0YWlsL2NsaWVudEJhc2VJbmZvXCIsXG4gICAgICAgICAgICBcImNsaWVudERldGFpbC9pdGVtRGV0YWlsL2NsaWVudExpbmttYW5cIixcbiAgICAgICAgICAgIFwiY2xpZW50RGV0YWlsL2l0ZW1EZXRhaWwvY2xpZW50Q2FzZU1hbmdlXCIsXG4gICAgICAgICAgICBcInNlYXJjaC9zZWFyY2hfY2xpZW50XCIsXG4gICAgICAgICAgICBcImNsaWVudERldGFpbC9pdGVtRGV0YWlsL2NsaWVudExpbmttYW5EZXRhaWwvY2xpZW50TGlua21hbkRldGFpbFwiLFxuICAgICAgICAgICAgXCJjbGllbnREZXRhaWwvaXRlbURldGFpbC9yZWNvcmRzTGlzdFwiLFxuICAgICAgICAgICAgXCJkaXJlY3RvcnkvZGlyZWN0b3J5XCIsXG4gICAgICAgICAgICBcImNyZWF0ZUNsaWVudC9jcmVhdGVDbGllbnRCYXNlSW5mb1wiLFxuICAgICAgICAgICAgXCJjcmVhdGVDbGllbnQvY3JlYXRlQ2xpZW50UHJpbmNpcGFsSW5mb1wiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJpbmRlcGVuZGVudFwiOmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInJvb3RcIjpcInBhZ2VzL21vZHVsZXMvbXlSZWNvcmRcIixcbiAgICAgICAgICBcIm5hbWVcIjpcIm15UmVjb3JkXCIsXG4gICAgICAgICAgXCJwYWdlc1wiOltcbiAgICAgICAgICAgIFwid29ya1JlY29yZFwiLFxuICAgICAgICAgICAgXCJteUxvZ2RldGFpbC9sb2dkZXRhaWxcIixcbiAgICAgICAgICAgIFwiTXlQYXJ0aWNpcGFudFdvcmtsb2dzL015UGFydGljaXBhbnRXb3JrbG9nc0RldGFpbFwiLFxuICAgICAgICAgICAgXCJsb2dzU3RhdGlzdGljcy9zdGF0aXN0aWNzRGV0YWlsXCIsXG4gICAgICAgICAgICBcImNyZWF0V29ya1JlY29yZC9jcmVhdFdvcmtSZWNvcmRcIixcbiAgICAgICAgICAgIFwibG9nc1N0YXRpc3RpY3Mvc3RhdGlzdGljc0NvdmVycy9zdGF0aXN0aWNzUmVjb3JkXCIsXG4gICAgICAgICAgICBcImNvbXBpbGVSZWNvcmQvY29tcGlsZVJlY29yZFwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoX3JlY29yZFwiLFxuICAgICAgICAgICAgXCJsb2dEb2MvZG9jdW1lbnRcIixcbiAgICAgICAgICAgIFwibXlMb2dkZXRhaWwvYXVkaXRSZXN1bHRzRGV0YWlsXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiaW5kZXBlbmRlbnRcIjpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6XCJwYWdlcy9tb2R1bGVzL215VGFza0NvdXJzZVwiLFxuICAgICAgICAgIFwibmFtZVwiOlwibXlUYXNrQ291cnNlXCIsXG4gICAgICAgICAgXCJwYWdlc1wiOltcbiAgICAgICAgICAgIFwidGFza1Byb2plY3RcIixcbiAgICAgICAgICAgIFwiY3JlYXRlUHJvamVjdFwiLFxuICAgICAgICAgICAgXCJ0YXNrU3RhZ2UvdGFza1N0YWdlTGlzdFwiLFxuICAgICAgICAgICAgXCJ0YXNrU3RhZ2UvdGFza0RldGFpbC90YXNrZGV0YWlsXCIsXG4gICAgICAgICAgICBcInRhc2tTdGFnZS9jcmVhdGV0YXNrL2NyZWF0ZVN0YWdlXCIsXG4gICAgICAgICAgICBcInRhc2tTdGFnZS9jcmVhdGV0YXNrL2NyZWF0VGFza1wiLFxuICAgICAgICAgICAgXCJ0YXNrU3RhZ2UvY3JlYXRldGFzay9jcmVhdFRhc2tBbGxcIixcbiAgICAgICAgICAgIFwic2VhcmNoL3NlYXJjaFRhc2tcIixcbiAgICAgICAgICAgIFwiY2FzZUNsaWVudFNlYXJjaC9zZWFyY2hDYXNlQ2xpZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiaW5kZXBlbmRlbnRcIjpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6XCJwYWdlcy9tb2R1bGVzL215TWVldGluZ1wiLFxuICAgICAgICAgIFwibmFtZVwiOlwibXlNZWV0aW5nXCIsXG4gICAgICAgICAgXCJwYWdlc1wiOltcbiAgICAgICAgICAgIFwibWVldGluZ0xpc3RcIixcbiAgICAgICAgICAgIFwibWVldGluZ0RldGFpbC9tZWV0aW5nRGV0YWlsXCIsXG4gICAgICAgICAgICBcInNlYXJjaC9zZWFyY2hNZWV0aW5nXCIsXG4gICAgICAgICAgICBcImNyZWF0TWVldGluZy9jcmVhdE1lZXRpbmdcIixcbiAgICAgICAgICAgIFwiY3JlYXRNZWV0aW5nL2Nob29zZU1lZXRpbmdSb29tXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiaW5kZXBlbmRlbnRcIjpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6XCJwYWdlcy9tb2R1bGVzL215QXBwbHlMaXN0XCIsXG4gICAgICAgICAgXCJuYW1lXCI6XCJteUFwcGx5TGlzdFwiLFxuICAgICAgICAgIFwicGFnZXNcIjpbXG4gICAgICAgICAgICBcIk15QXBwbHlMaXN0XCIsXG4gICAgICAgICAgICBcIm15QXBwbHlEZXRhaWwvbXlBcHBseURldGFpbFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVBcHBseS9jcmVhdGVBcHBseVwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoTXlBcHBseVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImluZGVwZW5kZW50XCI6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicm9vdFwiOlwicGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvYXBwbHlBdWRpdFwiLFxuICAgICAgICAgIFwibmFtZVwiOlwiYXBwbHlBdWRpdFwiLFxuICAgICAgICAgIFwicGFnZXNcIjpbXG4gICAgICAgICAgICBcImFwcGx5QXVkaXRMaXN0XCIsXG4gICAgICAgICAgICBcInNlYXJjaC9zZWFyY2hBcHBseUF1ZGl0XCIsXG4gICAgICAgICAgICBcImFwcGx5QXVkaXREZXRhaWxcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiaW5kZXBlbmRlbnRcIjpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6XCJwYWdlcy9tb2R1bGVzL2F1ZGl0TW9kdWxlcy9yZWNvcmRBdWRpdFwiLFxuICAgICAgICAgIFwibmFtZVwiOlwicmVjb3JkQXVkaXRcIixcbiAgICAgICAgICBcInBhZ2VzXCI6W1xuICAgICAgICAgICAgXCJyZWNvcmRBdWRpdExpc3RcIixcbiAgICAgICAgICAgIFwicmVjb3JkQXVkaXRcIixcbiAgICAgICAgICAgIFwic2VhcmNoL3NlYXJjaFJlY29yZEF1ZGl0XCIsXG4gICAgICAgICAgICBcImxvZ0RldGFpbFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImluZGVwZW5kZW50XCI6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicm9vdFwiOlwicGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvY2FzZUF1ZGl0XCIsXG4gICAgICAgICAgXCJuYW1lXCI6XCJjYXNlQXVkaXRcIixcbiAgICAgICAgICBcInBhZ2VzXCI6W1xuICAgICAgICAgICAgXCJhdWRpdENhc2VMaXN0XCIsXG4gICAgICAgICAgICBcImNhc2VEZXRhaWxBdWRpdC9jYXNlRGV0YWlsQXVkaXRcIixcbiAgICAgICAgICAgIFwiY2FzZURldGFpbEF1ZGl0L2F1ZGl0Q2FzZVwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoQ2FzZV9hdWRpdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImluZGVwZW5kZW50XCI6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicm9vdFwiOlwicGFnZXMvbW9kdWxlcy9hdWRpdE1vZHVsZXMvYXBwcm92ZUF1ZGl0XCIsXG4gICAgICAgICAgXCJuYW1lXCI6XCJhcHByb3ZlQXVkaXRcIixcbiAgICAgICAgICBcInBhZ2VzXCI6W1xuICAgICAgICAgICAgXCJhcHByb3ZlTGlzdFwiLFxuICAgICAgICAgICAgXCJhcHByb3ZlRGV0YWlsXCIsXG4gICAgICAgICAgICBcImFwcHJvdmVBdWRpdFwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoQXBwcm92ZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImluZGVwZW5kZW50XCI6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicm9vdFwiOiBcInBhZ2VzL21vZHVsZXMvYmlsbFwiLFxuICAgICAgICAgIFwibmFtZVwiOlwiYmlsbFwiLFxuICAgICAgICAgIFwicGFnZXNcIjogW1xuICAgICAgICAgICAgXCJteUJpbGwvbXlCaWxsXCIsXG4gICAgICAgICAgICBcIm15QmlsbC9teUJpbGxEZXRhaWxcIixcbiAgICAgICAgICAgIFwibXlCaWxsL215QmlsbERldGFpbHNcIixcbiAgICAgICAgICAgIFwibWFuYWdlQmlsbC9tYW5hZ2VCaWxsXCIsXG4gICAgICAgICAgICBcIm1hbmFnZUJpbGwvbWFuYWdlQmlsbERldGFpbFwiLFxuICAgICAgICAgICAgXCJtYW5hZ2VCaWxsL21hbmFnZUJpbGxEZXRhaWxzXCIsXG4gICAgICAgICAgICBcIm1hbmFnZUJpbGwvbWFuYWdlQmlsbEV4YW1pbmVcIixcbiAgICAgICAgICAgIFwic2VhcmNoL3NlYXJjaE15QmlsbFwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoTWFuYWdlQmlsbFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImluZGVwZW5kZW50XCI6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicm9vdFwiOiBcInBhZ2VzL21vZHVsZXMvaW52b2ljZVwiLFxuICAgICAgICAgIFwibmFtZVwiOlwiaW52b2ljZVwiLFxuICAgICAgICAgIFwicGFnZXNcIjogW1xuICAgICAgICAgICAgXCJteUludm9jZS9teWludm9pY2VcIixcbiAgICAgICAgICAgIFwibXlJbnZvY2UvbXlpbnZvaWNlRGV0YWlsXCIsXG4gICAgICAgICAgICBcIm1hbmFnZUludm9jZS9tYW5hZ2VJbnZvaWNlXCIsXG4gICAgICAgICAgICBcIm1hbmFnZUludm9jZS9tYW5hZ2VJbnZvaWNlRGV0YWlsXCIsXG4gICAgICAgICAgICBcIm1hbmFnZUludm9jZS9tYW5hZ2VJbnZvaWNlRXhhbWluZVwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoTXlOb2ljZVwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoTWFuYWdlTm9pY2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJpbmRlcGVuZGVudFwiOmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInJvb3RcIjogXCJwYWdlcy9tb2R1bGVzL3JlY2VpdmFibGVzXCIsXG4gICAgICAgICAgXCJuYW1lXCI6XCJyZWNlaXZhYmxlc1wiLFxuICAgICAgICAgIFwicGFnZXNcIjogW1xuICAgICAgICAgICAgXCJteVJlY2VpdmFibGVzL215UmVjZWl2YWJsZXNcIixcbiAgICAgICAgICAgIFwibXlSZWNlaXZhYmxlcy9teVJlY2VpdmFibGVzRGV0YWlsXCIsXG4gICAgICAgICAgICBcIm1hbmFnZVJlY2VpdmFibGVzL21hbmFnZVJlY2VpdmFibGVzXCIsXG4gICAgICAgICAgICBcIm1hbmFnZVJlY2VpdmFibGVzL21hbmFnZVJlY2VpdmFibGVzRGV0YWlsXCIsXG4gICAgICAgICAgICBcIm1hbmFnZVJlY2VpdmFibGVzL21hbmFnZVJlY2VpdmFibGVzRXhhbWluZVwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoUmVjZWl2YWJsZXNcIixcbiAgICAgICAgICAgIFwic2VhcmNoL3NlYXJjaE1hbmFnZVJlY2VpdmFibGVzXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiaW5kZXBlbmRlbnRcIjpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJyb290XCI6IFwicGFnZXMvbW9kdWxlcy9jb3N0XCIsXG4gICAgICAgICAgXCJuYW1lXCI6XCJjb3N0XCIsXG4gICAgICAgICAgXCJwYWdlc1wiOiBbXG4gICAgICAgICAgICBcIm15Q29zdC9teUNvc3RcIixcbiAgICAgICAgICAgIFwibXlDb3N0L215Q29zdERldGFpbFwiLFxuICAgICAgICAgICAgXCJteUNvc3QvZmluYW5jaWFsT3BlcmF0aW9uUmVjb3JkXCIsXG4gICAgICAgICAgICBcIm1hbmFnZUNvc3QvbWFuYWdlQ29zdFwiLFxuICAgICAgICAgICAgXCJtYW5hZ2VDb3N0L21hbmFnZUNvc3REZXRhaWxcIixcbiAgICAgICAgICAgIFwibWFuYWdlQ29zdC9tYW5hZ2VDb3N0RXhhbWluZVwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoQ29zdFwiLFxuICAgICAgICAgICAgXCJzZWFyY2gvc2VhcmNoTWFuYWdlQ29zdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImluZGVwZW5kZW50XCI6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicm9vdFwiOiBcInBhZ2VzL21vZHVsZXMvY2FzZU1hbmFnZW1lbnRcIixcbiAgICAgICAgICBcIm5hbWVcIjpcImNhc2VNYW5hZ2VtZW50XCIsXG4gICAgICAgICAgXCJwYWdlc1wiOiBbXG4gICAgICAgICAgICBcImNhc2VNYW5hZ2VtZW50XCIsXG4gICAgICAgICAgICBcInNlYXJjaC9zZWFyY2hfY2FzZU1hbmFnZW1lbnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJpbmRlcGVuZGVudFwiOmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInJvb3RcIjoncGFnZXMvbW9kdWxlcy9Db25mbGljdEludGVyZXN0UHJlZmxpZ2h0JyxcbiAgICAgICAgICBcIm5hbWVcIjonQ29uZmxpY3RJbnRlcmVzdFByZWZsaWdodCcsXG4gICAgICAgICAgXCJwYWdlc1wiOltcbiAgICAgICAgICAgICdDb25mbGljdEludGVyZXN0UHJlZmxpZ2h0J1xuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJpbmRlcGVuZGVudFwiOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflvovmmbrojZ8nLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXG4gICAgICAgIC8vIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgLy8gYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcbiAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCdcbiAgICAgIH0sXG4gICAgICB0YWJCYXI6IHtcbiAgICAgICAgY29sb3I6ICcjN2E3YTdhJyxcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyM1ZDczZmEnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgLy8gYm9yZGVyU3R5bGU6ICdibGFjaycsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL2hvbWUucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9ob21lU2VsZWN0LnBuZycsXG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21haW4vaW5kZXgnLFxuICAgICAgICAgICAgdGV4dDogJ+mmlumhtSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvc2NoZWR1bGUucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9zY2hlZHVsZVNlbGVjdC5wbmcnLFxuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zY2hlZHVsZS9pbmRleCcsXG4gICAgICAgICAgICB0ZXh0OiAn5pel56iLJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9taW5lLnBuZycsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvbWluZVNlbGVjdC5wbmcnLFxuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lL2luZGV4JyxcbiAgICAgICAgICAgIHRleHQ6ICfmiJHnmoQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcbiAgICBnbG9iYWwgPSB7XG4gICAgICB1c2VySW5mbzoge30sXG4gICAgICBuZXRXb3JrU3RyaW5nOiB0cnVlLFxuICAgICAgb3B0aW9uczp7fSxcbiAgICAgIGN1cnJlbnRVc2VySWQ6MCxcbiAgICAgIHRlbmFudDp7fSxcbiAgICB9XG4gICAgLy/ojrflj5bnlKjmiLfkv6Hmga9cbiAgICBhc3luYyBHZXRDdXJyZW50TG9naW5JbmZvcm1hdGlvbnMoKSB7XG4gICAgICB2YXIgQ3VycmVudExvZ2luSW5mb3JtYXRpb25zRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvYXBwL3Nlc3Npb24vR2V0Q3VycmVudExvZ2luSW5mb3JtYXRpb25zJyxcbiAgICAgICAgJ3Bvc3QnXG4gICAgICApXG4gICAgICBpZiAoQ3VycmVudExvZ2luSW5mb3JtYXRpb25zRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgdXNlckluZm8gPSB7fVxuICAgICAgICB1c2VySW5mbyA9IEN1cnJlbnRMb2dpbkluZm9ybWF0aW9uc0RhdGEuZGF0YS5yZXN1bHQudXNlcjtcbiAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgQ3VycmVudExvZ2luSW5mb3JtYXRpb25zRGF0YS5kYXRhLnJlc3VsdC51c2VyLmlkO1xuICAgICAgICB0aGlzLmdsb2JhbC5jdXJyZW50VXNlcklkID0gQ3VycmVudExvZ2luSW5mb3JtYXRpb25zRGF0YS5kYXRhLnJlc3VsdC51c2VyLmlkO1xuICAgICAgICB2YXIgYXZhdGFyRGF0YSA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgdXNlckluZm9bJ3VzZXJBdmF0YXInXSA9IGF2YXRhckRhdGE7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnVzZXJJbmZvID0gdXNlckluZm87XG4gICAgICAgIHRoaXMuZ2xvYmFsLnRlbmFudD1DdXJyZW50TG9naW5JbmZvcm1hdGlvbnNEYXRhLmRhdGEucmVzdWx0LnRlbmFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgb25MYXVuY2goKSB7XG4gICAgICAvLyDliKTmlq3mmK/lkKbmnInnvZFcbiAgICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZShyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWwubmV0V29ya1N0cmluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWwubmV0V29ya1N0cmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuZ2xvYmFsLnVzZXJJbmZvKS5sZW5ndGg9PTApe1xuICAgICAgICB0aGlzLkdldEN1cnJlbnRMb2dpbkluZm9ybWF0aW9ucygpO1xuICAgICAgfVxuICAgIH1cbiAgICBvblNob3cob3B0aW9ucykge1xuICAgICAgdGhpcy5nbG9iYWwub3B0aW9ucz1vcHRpb25zO1xuICAgICAgd3gubG9naW4oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIHZhciBjb2RlID0gcmVzLmNvZGU7XG4gICAgICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICB2YXIgYWNjZXNzVG9rZW49d3guZ2V0U3RvcmFnZVN5bmMoJ2FjY2VzcycpO1xuICAgICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWlsaW5rZWRsYXcuY29tL2FwaS9BY2NvdW50L0dldFdlY2hhdFVzZXJJbmZvJywgLy/mjqXlj6PlnLDlnYBcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogcmVzLmVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdjogcmVzLml2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogcmVzLnJhd0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5zaWduYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8v6buY6K6k5YC8XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlc3VsdC5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdhY2Nlc3MnLCByZXMuZGF0YS5yZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vY2hvb3NlUGFnZUxvZ2luJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1lbHNlIGlmKCFhY2Nlc3NUb2tlbiB8fCAhcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKXtcbiAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2Nob29zZVBhZ2VMb2dpbidcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8v5qOA5p+l5piv5ZCm5a2Y5Zyo5paw54mI5pysXG4gICAgICB3eC5nZXRVcGRhdGVNYW5hZ2VyKCkub25DaGVja0ZvclVwZGF0ZSgocmVzKSA9PiB7XG4gICAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xuICAgICAgICBpZiAocmVzLmhhc1VwZGF0ZSkgeyAvL+WmguaenOacieaWsOeJiOacrFxuICAgICAgICAgIC8vIOWwj+eoi+W6j+acieaWsOeJiOacrO+8jOS8muS4u+WKqOinpuWPkeS4i+i9veaTjeS9nO+8iOaXoOmcgOW8gOWPkeiAheinpuWPke+8iVxuICAgICAgICAgIHd4LmdldFVwZGF0ZU1hbmFnZXIoKS5vblVwZGF0ZVJlYWR5KCgpID0+IHsgLy/lvZPmlrDniYjmnKzkuIvovb3lrozmiJDvvIzkvJrov5vooYzlm57osINcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5pu05paw5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+aWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOWNleWHu+ehruWumumHjeWQr+W6lOeUqCcsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG4gICAgICAgICAgICAgICAgICB3eC5nZXRVcGRhdGVNYW5hZ2VyKCkuYXBwbHlVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyDlsI/nqIvluo/mnInmlrDniYjmnKzvvIzkvJrkuLvliqjop6blj5HkuIvovb3mk43kvZzvvIjml6DpnIDlvIDlj5HogIXop6blj5HvvIlcbiAgICAgICAgICB3eC5nZXRVcGRhdGVNYW5hZ2VyKCkub25VcGRhdGVGYWlsZWQoKCkgPT4geyAvL+W9k+aWsOeJiOacrOS4i+i9veWksei0pe+8jOS8mui/m+ihjOWbnuiwg1xuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICBjb250ZW50OiAn5qOA5p+l5Yiw5pyJ5paw54mI5pys77yM5L2G5LiL6L295aSx6LSl77yM6K+35qOA5p+l572R57uc6K6+572uJyxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuIl19