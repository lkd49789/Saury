'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../npm/wepy-async-function/index.js');

var _api = require('./../../utils/cofig/api.js');

var _ajax = require('./../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainIndex = function (_wepy$page) {
  _inherits(mainIndex, _wepy$page);

  function mainIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mainIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mainIndex.__proto__ || Object.getPrototypeOf(mainIndex)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      currentTab: 0,
      // swiper
      circular: true,
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 500,
      //消息swiper
      GetUserNotifications_data: [],
      GetPersonAnnualCounts: [{
        name: '我的客户',
        value: 0,
        icon: '',
        comparedValue: '0',
        annualData: [{
          name: 0,
          value: 0
        }]
      }, {
        name: '我的案件',
        value: 0,
        icon: '',
        comparedValue: '0',
        annualData: [{
          name: 0,
          value: 0
        }]
      }, {
        name: '我的日志',
        value: 0,
        icon: '',
        comparedValue: '0',
        annualData: [{
          name: 0,
          value: 0
        }]
      }],
      swiperTitle: ['我的客户', '我的案件', '我的日志', '我的账单'],
      comparedValue: 0,
      //功能页面
      functionData: [
        // {
        //   displayName: '我的案件',
        //   icon: 'icon-wodeanjian',
        //   color: '#5d73fa',
        //   link: '../modules/mycase/mycase',
        //   name: "Pages.Business.Cases.MyCases",
        //   // isShow: true
        // }, {
        //   displayName: '我的客户',
        //   icon: 'icon-wodekehu',
        //   color: '#e20000',
        //   link: '../modules/myclient/myClientList',
        //   name: 'Pages.Customers.MyCustomers.Manage',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的日志',
        //   icon: 'icon-woderizhi',
        //   color: '#009dff',
        //   link: '../modules/myRecord/workRecord',
        //   name: 'Pages.Works.Log.MyWorklog',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的进程',
        //   icon: 'icon-wodejincheng',
        //   color: '#ff9900',
        //   link: '../modules/myTaskCourse/taskProject',
        //   name: 'Pages.Business.Cases.MyProcesses',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的会议',
        //   icon: 'icon-huiyi-copy',
        //   color: '#ff9900',
        //   link: '../modules/myMeeting/meetingList',
        //   name: 'Pages.Works.Meeting.MyMeeting',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的请假',
        //   icon: 'icon-wodeqingjia',
        //   color: '#ff9900',
        //   link: '../modules/myApplyList/MyApplyList',
        //   name: 'Pages.HumanResource.Attendance.MyApplyList',
        //   // isShow: true
        // }, {
        //   displayName: '我的账单',
        //   icon: 'icon-wodezhangdan',
        //   color: '#ff9900',
        //   link: '../modules/bill/myBill/myBill',
        //   name: 'Pages.Financial.Billings.MyBillings',
        //   // isShow: true
        // },
        // {
        //   displayName: '账单管理',
        //   icon: 'icon-zhangdanguanli',
        //   color: '#ff9900',
        //   link: '../modules/bill/manageBill/manageBill',
        //   name: 'Pages.Financial.Billings.Manage',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的发票',
        //   icon: 'icon-wodefapiao',
        //   color: '#e20000',
        //   link: '../modules/invoice/myInvoce/myinvoice',
        //   name: 'Pages.Financial.Invoices.MyApplyInvoices',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的发票',
        //   icon: 'icon-wodefapiao',
        //   color: '#e20000',
        //   link: '../modules/invoice/myInvoce/myinvoice',
        //   name: 'Pages.Financial.Invoices.MyApplyInvoices',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的费用',
        //   icon: 'icon-wodefeiyong',
        //   color: '#e20000',
        //   link: '../modules/cost/myCost/myCost',
        //   name: 'Pages.Financial.Charge.MyCharges',
        //   // isShow: true
        // },
        // {
        //   displayName: '费用管理',
        //   icon: 'icon-feiyongguanli',
        //   color: '#e20000',
        //   link: '../modules/cost/manageCost/manageCost',
        //   name: 'Pages.Financial.Charge.Manage',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的收款',
        //   icon: 'icon-wodeshoukuan',
        //   color: '#ff9900',
        //   link: '../modules/receivables/myReceivables/myReceivables',
        //   name: 'Pages.Financial.Receipts.MyReceipts',
        //   // isShow: true
        // },
        // {
        //   displayName: '收款管理',
        //   icon: 'icon-shoukuanguanli',
        //   color: '#ff9900',
        //   link: '../modules/receivables/manageReceivables/manageReceivables',
        //   name: 'Pages.Financial.Receipts',
        //   // isShow: true
        // },
        // {
        //   displayName: '我的立案',
        //   icon: 'icon-wodelian',
        //   color: '#5d73fa',
        //   link: '../modules/myRegister/myRegisterList',
        //   name: 'Pages.Business.CaseApplications.MyApplyCases',
        //   // isShow: true
        // },
        // {
        //   displayName: '冲突检索',
        //   icon: 'icon-chongtujiansuo',
        //   color: '#e20000',
        //   link: '../modules/conflictRetrieval/conflictRetrievalList',
        //   name: 'Pages.Business.CaseApplications.Check',
        //   // isShow: true
        // },
        // {
        //   displayName: '利益冲突预检',
        //   icon: 'icon-liyichongtuyujian',
        //   color: '#e20000',
        //   link: '../modules/ConflictInterestPreflight/ConflictInterestPreflight',
        //   name: 'Pages.Business.CaseApplications.CheckCustomers',
        //   // isShow: true
        // }
      ],
      // 审核
      auditFunction: [{
        displayName: '案件审核',
        icon: 'icon-anjianshenhe',
        color: '#5d73fa',
        link: '../modules/auditModules/caseAudit/auditCaseList',
        image: '../../images/1-02.png'
      }, {
        displayName: '日志审核',
        icon: 'icon-rizhishenhe',
        color: '#5d73fa',
        link: '../modules/auditModules/recordAudit/recordAuditList',
        image: '../../images/2-02.png'
      }, {
        displayName: '请假审核',
        icon: 'icon-qingjiashenhe',
        color: '#009dff',
        link: '../modules/auditModules/applyAudit/applyAuditList',
        image: '../../images/3-02.png'
      }, {
        displayName: '文书审核',
        icon: 'icon-wenshushenhe',
        color: '#009dff',
        link: '../modules/auditModules/approveAudit/approveList',
        image: '../../images/3-04.png'
      }]
    }, _this.methods = {
      toMessagePage: function toMessagePage() {
        wx.navigateTo({
          url: './messagePage/message'
        });
      },
      onShareAppMessage: function onShareAppMessage(res) {
        return {
          title: '律智荟--法律圈智能汇聚平台',
          path: '/pages/mine/index',
          imageUrl: '../../images/ShareAppMessage.jpg',
          success: function success(res) {
            console.log(res);
          }
        };
      },
      linkAddress: function linkAddress(link) {
        wx.navigateTo({
          url: link
        });
      },
      bindchange: function bindchange(e) {
        // console.log(e.detail.current);
        this.currentTab = e.detail.current;
        this.$apply();
      },

      //跳转至我的客户
      //跳转至我的案件
      toSwiper: function toSwiper() {
        switch (this.currentTab) {
          case 0:
            _wepy2.default.navigateTo({
              url: '../modules/myclient/myClientList'
            });
            break;
          case 1:
            _wepy2.default.navigateTo({
              url: '../modules/mycase/mycase'
            });
            break;
          case 2:
            _wepy2.default.navigateTo({
              url: '../modules/myRecord/workRecord'
            });
            break;
          case 3:
            _wepy2.default.navigateTo({
              url: '../modules/bill/myBill/myBill'
            });
            break;
          default:
            break;
        }
        // if (this.currentTab == 'Case') {
        // }
      }
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mainIndex, [{
    key: 'getSwiperdata',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resData, comparedValueAry, i, len;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/analyzeStatistics/GetPersonAnnualCounts', //获取swiper数据
                'post');

              case 2:
                resData = _context.sent;

                console.log(resData);

                if (!(resData.statusCode == 200)) {
                  _context.next = 29;
                  break;
                }

                this.GetPersonAnnualCounts = resData.data.result;
                //浮点指数
                comparedValueAry = [];
                i = 0, len = resData.data.result.length;

              case 8:
                if (!(i < len)) {
                  _context.next = 26;
                  break;
                }

                // console.log(res.data.result[i].comparedValue);
                comparedValueAry.push((resData.data.result[i].comparedValue * 100).toFixed(2));
                resData.data.result[i].value = Number(resData.data.result[i].value).toFixed();
                _context.t0 = resData.data.result[i].name;
                _context.next = _context.t0 === 'Client' ? 14 : _context.t0 === 'Case' ? 16 : _context.t0 === 'Worklog' ? 18 : _context.t0 === 'Finance' ? 20 : 22;
                break;

              case 14:
                resData.data.result[i].name = '我的客户';
                return _context.abrupt('break', 23);

              case 16:
                resData.data.result[i].name = '我的案件';
                return _context.abrupt('break', 23);

              case 18:
                resData.data.result[i].name = '我的日志';
                return _context.abrupt('break', 23);

              case 20:
                resData.data.result[i].name = '我的财务';
                return _context.abrupt('break', 23);

              case 22:
                return _context.abrupt('break', 23);

              case 23:
                i++;
                _context.next = 8;
                break;

              case 26:
                this.comparedValue = comparedValueAry;
                wx.setStorageSync('AnnualCounts', resData.data.result);
                this.$apply();

              case 29:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSwiperdata() {
        return _ref2.apply(this, arguments);
      }

      return getSwiperdata;
    }()
    //获取通知消息

  }, {
    key: 'GetUserNotifications',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data, resData, UserNotifications_Data, index, len;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {
                  maxResultCount: 10,
                  notificationName: "",
                  skipCount: 0,
                  state: ""
                };
                _context2.next = 3;
                return _ajax2.default.getData('/api/services/app/notification/GetWechatMiniUserNotifications', 'POST', data);

              case 3:
                resData = _context2.sent;

                if (!(resData.statusCode == 200)) {
                  _context2.next = 95;
                  break;
                }

                UserNotifications_Data = resData.data.result.items;
                index = 0, len = UserNotifications_Data.length;

              case 7:
                if (!(index < len)) {
                  _context2.next = 92;
                  break;
                }

                UserNotifications_Data[index].notification.creationTime = (0, _api.beautify_time)(UserNotifications_Data[index].notification.creationTime);
                _context2.t0 = UserNotifications_Data[index].notification.notificationName;
                _context2.next = _context2.t0 === 'App.Financial.Billings.Returned' ? 12 : _context2.t0 === 'App.Works.Task.Confirmed' ? 14 : _context2.t0 === 'App.Works.Task.Comment.Created' ? 16 : _context2.t0 === 'App.Works.Log.Returned' ? 18 : _context2.t0 === 'App.HumanResource.Attendance.Approved' ? 20 : _context2.t0 === 'App.Works.Task.WaitForConfirmed' ? 22 : _context2.t0 === 'App.Works.Meeting.Rejected' ? 24 : _context2.t0 === 'App.HumanResource.Attendance.Created' ? 26 : _context2.t0 === 'App.HumanResource.Attendance.Returned' ? 28 : _context2.t0 === 'App.HumanResource.Attendance.Returned' ? 30 : _context2.t0 === 'App.Financial.Billings.Approved' ? 32 : _context2.t0 === 'App.Financial.Invoice.WaitForClaimed' ? 34 : _context2.t0 === 'App.Financial.Billings.Created' ? 36 : _context2.t0 === 'App.Financial.Invoice.Returned' ? 38 : _context2.t0 === 'App.Works.Meeting.Confirmed' ? 40 : _context2.t0 === 'App.Works.Meeting.StartRemind' ? 42 : _context2.t0 === 'App.Financial.Charge.WaitForApproved' ? 44 : _context2.t0 === 'App.Works.Task.Archived' ? 46 : _context2.t0 === 'App.Financial.Invoice.Canceled' ? 48 : _context2.t0 === 'App.Works.Meeting.MeetingMinutesCompleted' ? 50 : _context2.t0 === 'App.Works.Log.Approved' ? 52 : _context2.t0 === 'App.Works.Meeting.Reminded' ? 54 : _context2.t0 === 'App.Financial.Receipt.WaitForConfirmed' ? 56 : _context2.t0 === 'App.Financial.Receipt.WaitForClaimed' ? 58 : _context2.t0 === 'App.Financial.Charge.Returned' ? 60 : _context2.t0 === 'App.Works.Log.Created' ? 62 : _context2.t0 === 'App.Financial.Charge.Approved' ? 64 : _context2.t0 === 'App.Works.Task.Rejected' ? 66 : _context2.t0 === 'App.Works.Meeting.Created' ? 68 : _context2.t0 === 'App.Works.Meeting.WaitApproved' ? 70 : _context2.t0 === 'App.Works.Task.Completed' ? 72 : _context2.t0 === 'App.Works.Log.WaitApproved' ? 74 : _context2.t0 === 'App.Financial.Invoice.WaitForRegistered' ? 76 : _context2.t0 === 'App.Business.CaseCreation.Created' ? 78 : _context2.t0 === 'App.Business.StampFiles.Returned' ? 80 : _context2.t0 === 'App.Business.StampFiles.Created' ? 82 : _context2.t0 === 'App.Business.StampFiles.Approved' ? 84 : _context2.t0 === 'App.Business.StampFiles.Approved' ? 86 : 88;
                break;

              case 12:
                UserNotifications_Data[index].TextTile = '账单-已退回';
                return _context2.abrupt('break', 89);

              case 14:
                UserNotifications_Data[index].TextTile = '任务-已参与';
                return _context2.abrupt('break', 89);

              case 16:
                UserNotifications_Data[index].TextTile = '任务-新消息';
                return _context2.abrupt('break', 89);

              case 18:
                UserNotifications_Data[index].TextTile = '工作日志-已退回';
                return _context2.abrupt('break', 89);

              case 20:
                UserNotifications_Data[index].TextTile = '请假-已审核';
                return _context2.abrupt('break', 89);

              case 22:
                UserNotifications_Data[index].TextTile = '任务-待确认';
                return _context2.abrupt('break', 89);

              case 24:
                UserNotifications_Data[index].TextTile = '会议-已拒绝';
                return _context2.abrupt('break', 89);

              case 26:
                UserNotifications_Data[index].TextTile = '请假-待审核';
                return _context2.abrupt('break', 89);

              case 28:
                UserNotifications_Data[index].TextTile = '请假-已退回';
                return _context2.abrupt('break', 89);

              case 30:
                UserNotifications_Data[index].TextTile = '请假-已退回';
                return _context2.abrupt('break', 89);

              case 32:
                UserNotifications_Data[index].TextTile = '账单-已审核';
                return _context2.abrupt('break', 89);

              case 34:
                UserNotifications_Data[index].TextTile = '发票-待领取';
                return _context2.abrupt('break', 89);

              case 36:
                UserNotifications_Data[index].TextTile = '账单-待处理';
                return _context2.abrupt('break', 89);

              case 38:
                UserNotifications_Data[index].TextTile = '发票-已退回';
                return _context2.abrupt('break', 89);

              case 40:
                UserNotifications_Data[index].TextTile = '会议-已参与';
                return _context2.abrupt('break', 89);

              case 42:
                UserNotifications_Data[index].TextTile = '会议-即将开始';
                return _context2.abrupt('break', 89);

              case 44:
                UserNotifications_Data[index].TextTile = '费用-待审核';
                return _context2.abrupt('break', 89);

              case 46:
                UserNotifications_Data[index].TextTile = '任务-已归档';
                return _context2.abrupt('break', 89);

              case 48:
                UserNotifications_Data[index].TextTile = '发票-已作废';
                return _context2.abrupt('break', 89);

              case 50:
                UserNotifications_Data[index].TextTile = '会议-纪要-已完成';
                return _context2.abrupt('break', 89);

              case 52:
                UserNotifications_Data[index].TextTile = '工作日志-已审核';
                return _context2.abrupt('break', 89);

              case 54:
                UserNotifications_Data[index].TextTile = '会议-预设提醒';
                return _context2.abrupt('break', 89);

              case 56:
                UserNotifications_Data[index].TextTile = '收款-待确认';
                return _context2.abrupt('break', 89);

              case 58:
                UserNotifications_Data[index].TextTile = '收款-待认领';
                return _context2.abrupt('break', 89);

              case 60:
                UserNotifications_Data[index].TextTile = '费用-已退回';
                return _context2.abrupt('break', 89);

              case 62:
                UserNotifications_Data[index].TextTile = '工作日志-已参与';
                return _context2.abrupt('break', 89);

              case 64:
                UserNotifications_Data[index].TextTile = '费用-已审核';
                return _context2.abrupt('break', 89);

              case 66:
                UserNotifications_Data[index].TextTile = '任务-已拒绝';
                return _context2.abrupt('break', 89);

              case 68:
                UserNotifications_Data[index].TextTile = '会议-新会议';
                return _context2.abrupt('break', 89);

              case 70:
                UserNotifications_Data[index].TextTile = '会议-待参与';
                return _context2.abrupt('break', 89);

              case 72:
                UserNotifications_Data[index].TextTile = '任务-已完成';
                return _context2.abrupt('break', 89);

              case 74:
                UserNotifications_Data[index].TextTile = '工作日志-待审核';
                return _context2.abrupt('break', 89);

              case 76:
                UserNotifications_Data[index].TextTile = '发票-待开票';
                return _context2.abrupt('break', 89);

              case 78:
                UserNotifications_Data[index].TextTile = '立案-待审核';
                return _context2.abrupt('break', 89);

              case 80:
                UserNotifications_Data[index].TextTile = '文书报审-已退回';
                return _context2.abrupt('break', 89);

              case 82:
                UserNotifications_Data[index].TextTile = '文书报审-待审核';
                return _context2.abrupt('break', 89);

              case 84:
                UserNotifications_Data[index].TextTile = '文书报审-已审核';
                return _context2.abrupt('break', 89);

              case 86:
                UserNotifications_Data[index].TextTile = '文书报审-已审核';
                return _context2.abrupt('break', 89);

              case 88:
                return _context2.abrupt('break', 89);

              case 89:
                index++;
                _context2.next = 7;
                break;

              case 92:
                this.GetUserNotifications_data = UserNotifications_Data;
                _context2.next = 96;
                break;

              case 95:
                this.GetUserNotifications_data = [];

              case 96:
                this.$apply();

              case 97:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetUserNotifications() {
        return _ref3.apply(this, arguments);
      }

      return GetUserNotifications;
    }()
    //功能权限

  }, {
    key: 'GetFunctionItems',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var id, resData, GetFunctionItemsData, itemsData, index, len;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = {
                  id: this.$parent.global.currentUserId
                };
                _context3.next = 3;
                return _ajax2.default.getData('/api/services/app/function/GetFunctionItems', 'post', id);

              case 3:
                resData = _context3.sent;

                if (!(resData.statusCode == 200)) {
                  _context3.next = 57;
                  break;
                }

                GetFunctionItemsData = resData.data.result.items;
                itemsData = [];
                index = 0, len = GetFunctionItemsData.length;

              case 8:
                if (!(index < len)) {
                  _context3.next = 55;
                  break;
                }

                _context3.t0 = GetFunctionItemsData[index].name;
                _context3.next = _context3.t0 === 'Pages.Business.Cases.MyCases' ? 12 : _context3.t0 === 'Pages.Customers.MyCustomers.Manage' ? 14 : _context3.t0 === 'Pages.Works.Log.MyWorklog' ? 16 : _context3.t0 === 'Pages.Works.Task' ? 18 : _context3.t0 === 'Pages.Works.Meeting.MyMeeting' ? 20 : _context3.t0 === 'Pages.HumanResource.Attendance.MyApplyList' ? 22 : _context3.t0 === 'Pages.Financial.Billings.MyBillings' ? 24 : _context3.t0 === 'Pages.Financial.Billings.Manage' ? 26 : _context3.t0 === 'Pages.Financial.Invoices.MyApplyInvoices' ? 28 : _context3.t0 === 'Pages.Financial.Invoices.Manage' ? 30 : _context3.t0 === 'Pages.Financial.Charge.MyCharges' ? 32 : _context3.t0 === 'Pages.Financial.Charge.Manage' ? 34 : _context3.t0 === 'Pages.Financial.Receipts.MyReceipts' ? 36 : _context3.t0 === 'Pages.Financial.Receipts' ? 38 : _context3.t0 === 'Pages.Business.CaseApplications.MyApplyCases' ? 40 : _context3.t0 === 'Pages.Business.CaseApplications.Check' ? 42 : _context3.t0 === 'Pages.Business.CaseApplications.CheckCustomers' ? 44 : _context3.t0 === 'Pages.Business.Cases.Manage' ? 46 : _context3.t0 === 'Pages.Business.Cases.Create' ? 48 : _context3.t0 === 'Pages.Customers.MyCustomers' ? 50 : 52;
                break;

              case 12:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodeanjian',
                  color: '#5d73fa',
                  link: '../modules/mycase/mycase',
                  name: "Pages.Business.Cases.MyCases"
                });
                return _context3.abrupt('break', 52);

              case 14:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodekehu',
                  color: '#e20000',
                  link: '../modules/myclient/myClientList',
                  name: 'Pages.Customers.MyCustomers.Manage'
                });
                return _context3.abrupt('break', 52);

              case 16:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-woderizhi',
                  color: '#009dff',
                  link: '../modules/myRecord/workRecord',
                  name: 'Pages.Works.Log.MyWorklog'
                });
                return _context3.abrupt('break', 52);

              case 18:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodejincheng',
                  color: '#ff9900',
                  link: '../modules/myTaskCourse/taskProject',
                  name: 'Pages.Works.Task',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 20:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-huiyi-copy',
                  color: '#ff9900',
                  link: '../modules/myMeeting/meetingList',
                  name: 'Pages.Works.Meeting.MyMeeting',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 22:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodeqingjia',
                  color: '#ff9900',
                  link: '../modules/myApplyList/MyApplyList',
                  name: 'Pages.HumanResource.Attendance.MyApplyList',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 24:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodezhangdan',
                  color: '#ff9900',
                  link: '../modules/bill/myBill/myBill',
                  name: 'Pages.Financial.Billings.MyBillings',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 26:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-zhangdanguanli',
                  color: '#ff9900',
                  link: '../modules/bill/manageBill/manageBill',
                  name: 'Pages.Financial.Billings.Manage',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 28:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodefapiao',
                  color: '#e20000',
                  link: '../modules/invoice/myInvoce/myinvoice',
                  name: 'Pages.Financial.Invoices.MyApplyInvoices',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 30:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-fapiaoguanli',
                  color: '#e20000',
                  link: '../modules/invoice/manageInvoce/manageInvoice',
                  name: 'Pages.Financial.Invoices.Manage',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 32:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodefeiyong',
                  color: '#e20000',
                  link: '../modules/cost/myCost/myCost',
                  name: 'Pages.Financial.Charge.MyCharges',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 34:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-feiyongguanli',
                  color: '#e20000',
                  link: '../modules/cost/manageCost/manageCost',
                  name: 'Pages.Financial.Charge.Manage',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 36:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodeshoukuan',
                  color: '#ff9900',
                  link: '../modules/receivables/myReceivables/myReceivables',
                  name: 'Pages.Financial.Receipts.MyReceipts',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 38:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-shoukuanguanli',
                  color: '#ff9900',
                  link: '../modules/receivables/manageReceivables/manageReceivables',
                  name: 'Pages.Financial.Receipts',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 40:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-wodelian',
                  color: '#5d73fa',
                  link: '../modules/myRegister/myRegisterList',
                  name: 'Pages.Business.CaseApplications.MyApplyCases',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 42:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-chongtujiansuo',
                  color: '#e20000',
                  link: '../modules/conflictRetrieval/conflictRetrievalList',
                  name: 'Pages.Business.CaseApplications.Check',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 44:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-liyichongtuyujian',
                  color: '#e20000',
                  link: '../modules/ConflictInterestPreflight/ConflictInterestPreflight',
                  name: 'Pages.Business.CaseApplications.CheckCustomers',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 46:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-anjianguanli',
                  color: '#5d73fa',
                  link: '../modules/caseManagement/caseManagement',
                  name: 'Pages.Business.Cases.Manage',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 48:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-lianshenqing',
                  color: '#5d73fa',
                  link: '../modules/myRegister/register',
                  name: 'Pages.Business.Cases.Create',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 50:
                itemsData.push({
                  displayName: GetFunctionItemsData[index].displayName,
                  icon: 'icon-kehuguanli',
                  color: '#5d73fa',
                  link: "../modules/myclient/myClientList?IsAll=true",
                  name: 'Pages.Customers.MyCustomers',
                  isShow: true
                });
                return _context3.abrupt('break', 52);

              case 52:
                index++;
                _context3.next = 8;
                break;

              case 55:
                // this.setData({
                //   functionData:itemsData
                // })
                this.functionData = itemsData;
                this.$apply();

              case 57:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetFunctionItems() {
        return _ref4.apply(this, arguments);
      }

      return GetFunctionItems;
    }()
    //获取用户信息

  }, {
    key: 'GetCurrentLoginInformations',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var CurrentLoginInformationsData, userInfo, http, avatarData;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _ajax2.default.getData('/api/services/app/session/GetCurrentLoginInformations', 'post');

              case 2:
                CurrentLoginInformationsData = _context4.sent;

                if (!(CurrentLoginInformationsData.statusCode == 200)) {
                  _context4.next = 14;
                  break;
                }

                userInfo = {};

                userInfo = CurrentLoginInformationsData.data.result.user;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + CurrentLoginInformationsData.data.result.user.id;

                this.$parent.global.currentUserId = CurrentLoginInformationsData.data.result.user.id;
                _context4.next = 10;
                return _ajax2.default.getAavatar(http);

              case 10:
                avatarData = _context4.sent;

                userInfo['userAvatar'] = avatarData;
                this.$parent.global.userInfo = userInfo;
                this.$parent.global.tenant = CurrentLoginInformationsData.data.result.tenant;

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GetCurrentLoginInformations() {
        return _ref5.apply(this, arguments);
      }

      return GetCurrentLoginInformations;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      this.GetCurrentLoginInformations();
      this.getSwiperdata();
      this.GetUserNotifications();
      this.GetFunctionItems();
    }
  }]);

  return mainIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mainIndex , 'pages/main/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1haW5JbmRleCIsImNvbXBvbmVudHMiLCJkYXRhIiwiY3VycmVudFRhYiIsImNpcmN1bGFyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsIkdldFVzZXJOb3RpZmljYXRpb25zX2RhdGEiLCJHZXRQZXJzb25Bbm51YWxDb3VudHMiLCJuYW1lIiwidmFsdWUiLCJpY29uIiwiY29tcGFyZWRWYWx1ZSIsImFubnVhbERhdGEiLCJzd2lwZXJUaXRsZSIsImZ1bmN0aW9uRGF0YSIsImF1ZGl0RnVuY3Rpb24iLCJkaXNwbGF5TmFtZSIsImNvbG9yIiwibGluayIsImltYWdlIiwibWV0aG9kcyIsInRvTWVzc2FnZVBhZ2UiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsInRpdGxlIiwicGF0aCIsImltYWdlVXJsIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJsaW5rQWRkcmVzcyIsImJpbmRjaGFuZ2UiLCJlIiwiZGV0YWlsIiwiY3VycmVudCIsIiRhcHBseSIsInRvU3dpcGVyIiwid2VweSIsIndhdGNoIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsImNvbXBhcmVkVmFsdWVBcnkiLCJpIiwibGVuIiwibGVuZ3RoIiwicHVzaCIsInRvRml4ZWQiLCJOdW1iZXIiLCJzZXRTdG9yYWdlU3luYyIsIm1heFJlc3VsdENvdW50Iiwibm90aWZpY2F0aW9uTmFtZSIsInNraXBDb3VudCIsInN0YXRlIiwiVXNlck5vdGlmaWNhdGlvbnNfRGF0YSIsIml0ZW1zIiwiaW5kZXgiLCJub3RpZmljYXRpb24iLCJjcmVhdGlvblRpbWUiLCJUZXh0VGlsZSIsImlkIiwiJHBhcmVudCIsImdsb2JhbCIsImN1cnJlbnRVc2VySWQiLCJHZXRGdW5jdGlvbkl0ZW1zRGF0YSIsIml0ZW1zRGF0YSIsImlzU2hvdyIsIkN1cnJlbnRMb2dpbkluZm9ybWF0aW9uc0RhdGEiLCJ1c2VySW5mbyIsInVzZXIiLCJodHRwIiwiZ2V0QWF2YXRhciIsImF2YXRhckRhdGEiLCJ0ZW5hbnQiLCJHZXRDdXJyZW50TG9naW5JbmZvcm1hdGlvbnMiLCJnZXRTd2lwZXJkYXRhIiwiR2V0VXNlck5vdGlmaWNhdGlvbnMiLCJHZXRGdW5jdGlvbkl0ZW1zIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBRFA7QUFFTDtBQUNBQyxnQkFBVSxJQUhMO0FBSUxDLHFCQUFlLEtBSlY7QUFLTEMsZ0JBQVUsS0FMTDtBQU1MQyxnQkFBVSxJQU5MO0FBT0xDLGdCQUFVLEdBUEw7QUFRTDtBQUNBQyxpQ0FBMkIsRUFUdEI7QUFVTEMsNkJBQXVCLENBQUM7QUFDcEJDLGNBQU0sTUFEYztBQUVwQkMsZUFBTyxDQUZhO0FBR3BCQyxjQUFNLEVBSGM7QUFJcEJDLHVCQUFlLEdBSks7QUFLcEJDLG9CQUFZLENBQUM7QUFDWEosZ0JBQU0sQ0FESztBQUVYQyxpQkFBTztBQUZJLFNBQUQ7QUFMUSxPQUFELEVBVXJCO0FBQ0VELGNBQU0sTUFEUjtBQUVFQyxlQUFPLENBRlQ7QUFHRUMsY0FBTSxFQUhSO0FBSUVDLHVCQUFlLEdBSmpCO0FBS0VDLG9CQUFZLENBQUM7QUFDWEosZ0JBQU0sQ0FESztBQUVYQyxpQkFBTztBQUZJLFNBQUQ7QUFMZCxPQVZxQixFQW9CckI7QUFDRUQsY0FBTSxNQURSO0FBRUVDLGVBQU8sQ0FGVDtBQUdFQyxjQUFNLEVBSFI7QUFJRUMsdUJBQWUsR0FKakI7QUFLRUMsb0JBQVksQ0FBQztBQUNYSixnQkFBTSxDQURLO0FBRVhDLGlCQUFPO0FBRkksU0FBRDtBQUxkLE9BcEJxQixDQVZsQjtBQXlDTEksbUJBQWEsQ0FBQyxNQUFELEVBQVMsTUFB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MEIseUJBR0EsZ0MseUJBR0Esd0IseUJBR0EsdUMseUJBR0EsaUMseUJBR0EsNEIseUJBR0Esc0MseUJBR0EsdUMseUJBR0EsdUMseUJBR0EsaUMseUJBR0Esc0MseUJBR0EsZ0MseUJBR0EsZ0MseUJBR0EsNkIseUJBR0EsK0IseUJBR0Esc0MseUJBR0EseUIseUJBR0EsZ0MseUJBR0EsMkMseUJBR0Esd0IseUJBR0EsNEIseUJBR0Esd0MseUJBR0Esc0MseUJBR0EsK0IseUJBR0EsdUIseUJBR0EsK0IseUJBR0EseUIseUJBR0EsMkIseUJBR0EsZ0MseUJBR0EsMEIseUJBR0EsNEIseUJBR0EseUMseUJBR0EsbUMseUJBR0Esa0MseUJBR0EsaUMseUJBR0Esa0MseUJBR0Esa0M7Ozs7QUE5R0hHLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFVBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFNBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFdBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFVBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFNBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFVBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFBQTlCLEdBQXlDLFFBQXpDOzs7O0FBR0FMLHVDQUF1QkUsS0FBdkIsRUFBOEJHLFFB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QUE2QnpFLElBQTdCLENBQWtDK0MsTUFBbEMsQ0FBeUM0QixJQUFwRDtBQUNJQyxvQixHQUFPLG9EQUFvREgsNkJBQTZCekUsSUFBN0IsQ0FBa0MrQyxNQUFsQyxDQUF5QzRCLElBQXpDLENBQThDVCxFOztBQUM3RyxxQkFBS0MsT0FBTCxDQUFhQyxNQUFiLENBQW9CQyxhQUFwQixHQUFvQ0ksNkJBQTZCekUsSUFBN0IsQ0FBa0MrQyxNQUFsQyxDQUF5QzRCLElBQXpDLENBQThDVCxFQUFsRjs7dUJBQ3VCdkIsZUFBS2tDLFVBQUwsQ0FBZ0JELElBQWhCLEM7OztBQUFuQkUsMEI7O0FBQ0pKLHlCQUFTLFlBQVQsSUFBeUJJLFVBQXpCO0FBQ0EscUJBQUtYLE9BQUwsQ0FBYUMsTUFBYixDQUFvQk0sUUFBcEIsR0FBK0JBLFFBQS9CO0FBQ0EscUJBQUtQLE9BQUwsQ0FBYUMsTUFBYixDQUFvQlcsTUFBcEIsR0FBMkJOLDZCQUE2QnpFLElBQTdCLENBQWtDK0MsTUFBbEMsQ0FBeUNnQyxNQUFwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdLO0FBQ1AsV0FBS0MsMkJBQUw7QUFDQSxXQUFLQyxhQUFMO0FBQ0EsV0FBS0Msb0JBQUw7QUFDQSxXQUFLQyxnQkFBTDtBQUNEOzs7O0VBcnJCb0MxQyxlQUFLMkMsSTs7a0JBQXZCdEYsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcbiAgaW1wb3J0IHtcbiAgICB0b0ZpeGVkLFxuICAgIGJlYXV0aWZ5X3RpbWVcbiAgfSBmcm9tICcuLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWFpbkluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgICAvLyBzd2lwZXJcbiAgICAgIGNpcmN1bGFyOiB0cnVlLFxuICAgICAgaW5kaWNhdG9yRG90czogZmFsc2UsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBpbnRlcnZhbDogNTAwMCxcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAvL+a2iOaBr3N3aXBlclxuICAgICAgR2V0VXNlck5vdGlmaWNhdGlvbnNfZGF0YTogW10sXG4gICAgICBHZXRQZXJzb25Bbm51YWxDb3VudHM6IFt7XG4gICAgICAgICAgbmFtZTogJ+aIkeeahOWuouaItycsXG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgY29tcGFyZWRWYWx1ZTogJzAnLFxuICAgICAgICAgIGFubnVhbERhdGE6IFt7XG4gICAgICAgICAgICBuYW1lOiAwLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ+aIkeeahOahiOS7ticsXG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgY29tcGFyZWRWYWx1ZTogJzAnLFxuICAgICAgICAgIGFubnVhbERhdGE6IFt7XG4gICAgICAgICAgICBuYW1lOiAwLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ+aIkeeahOaXpeW/lycsXG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgY29tcGFyZWRWYWx1ZTogJzAnLFxuICAgICAgICAgIGFubnVhbERhdGE6IFt7XG4gICAgICAgICAgICBuYW1lOiAwLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN3aXBlclRpdGxlOiBbJ+aIkeeahOWuouaItycsICfmiJHnmoTmoYjku7YnLCAn5oiR55qE5pel5b+XJywgJ+aIkeeahOi0puWNlSddLFxuICAgICAgY29tcGFyZWRWYWx1ZTogMCxcbiAgICAgIC8v5Yqf6IO96aG16Z2iXG4gICAgICBmdW5jdGlvbkRhdGE6IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn5oiR55qE5qGI5Lu2JyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi13b2RlYW5qaWFuJyxcbiAgICAgICAgLy8gICBjb2xvcjogJyM1ZDczZmEnLFxuICAgICAgICAvLyAgIGxpbms6ICcuLi9tb2R1bGVzL215Y2FzZS9teWNhc2UnLFxuICAgICAgICAvLyAgIG5hbWU6IFwiUGFnZXMuQnVzaW5lc3MuQ2FzZXMuTXlDYXNlc1wiLFxuICAgICAgICAvLyAgIC8vIGlzU2hvdzogdHJ1ZVxuICAgICAgICAvLyB9LCB7XG4gICAgICAgIC8vICAgZGlzcGxheU5hbWU6ICfmiJHnmoTlrqLmiLcnLFxuICAgICAgICAvLyAgIGljb246ICdpY29uLXdvZGVrZWh1JyxcbiAgICAgICAgLy8gICBjb2xvcjogJyNlMjAwMDAnLFxuICAgICAgICAvLyAgIGxpbms6ICcuLi9tb2R1bGVzL215Y2xpZW50L215Q2xpZW50TGlzdCcsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkN1c3RvbWVycy5NeUN1c3RvbWVycy5NYW5hZ2UnLFxuICAgICAgICAvLyAgIC8vIGlzU2hvdzogdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgZGlzcGxheU5hbWU6ICfmiJHnmoTml6Xlv5cnLFxuICAgICAgICAvLyAgIGljb246ICdpY29uLXdvZGVyaXpoaScsXG4gICAgICAgIC8vICAgY29sb3I6ICcjMDA5ZGZmJyxcbiAgICAgICAgLy8gICBsaW5rOiAnLi4vbW9kdWxlcy9teVJlY29yZC93b3JrUmVjb3JkJyxcbiAgICAgICAgLy8gICBuYW1lOiAnUGFnZXMuV29ya3MuTG9nLk15V29ya2xvZycsXG4gICAgICAgIC8vICAgLy8gaXNTaG93OiB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBkaXNwbGF5TmFtZTogJ+aIkeeahOi/m+eoiycsXG4gICAgICAgIC8vICAgaWNvbjogJ2ljb24td29kZWppbmNoZW5nJyxcbiAgICAgICAgLy8gICBjb2xvcjogJyNmZjk5MDAnLFxuICAgICAgICAvLyAgIGxpbms6ICcuLi9tb2R1bGVzL215VGFza0NvdXJzZS90YXNrUHJvamVjdCcsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkJ1c2luZXNzLkNhc2VzLk15UHJvY2Vzc2VzJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn5oiR55qE5Lya6K6uJyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi1odWl5aS1jb3B5JyxcbiAgICAgICAgLy8gICBjb2xvcjogJyNmZjk5MDAnLFxuICAgICAgICAvLyAgIGxpbms6ICcuLi9tb2R1bGVzL215TWVldGluZy9tZWV0aW5nTGlzdCcsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLldvcmtzLk1lZXRpbmcuTXlNZWV0aW5nJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn5oiR55qE6K+35YGHJyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi13b2RlcWluZ2ppYScsXG4gICAgICAgIC8vICAgY29sb3I6ICcjZmY5OTAwJyxcbiAgICAgICAgLy8gICBsaW5rOiAnLi4vbW9kdWxlcy9teUFwcGx5TGlzdC9NeUFwcGx5TGlzdCcsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkh1bWFuUmVzb3VyY2UuQXR0ZW5kYW5jZS5NeUFwcGx5TGlzdCcsXG4gICAgICAgIC8vICAgLy8gaXNTaG93OiB0cnVlXG4gICAgICAgIC8vIH0sIHtcbiAgICAgICAgLy8gICBkaXNwbGF5TmFtZTogJ+aIkeeahOi0puWNlScsXG4gICAgICAgIC8vICAgaWNvbjogJ2ljb24td29kZXpoYW5nZGFuJyxcbiAgICAgICAgLy8gICBjb2xvcjogJyNmZjk5MDAnLFxuICAgICAgICAvLyAgIGxpbms6ICcuLi9tb2R1bGVzL2JpbGwvbXlCaWxsL215QmlsbCcsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkZpbmFuY2lhbC5CaWxsaW5ncy5NeUJpbGxpbmdzJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn6LSm5Y2V566h55CGJyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi16aGFuZ2Rhbmd1YW5saScsXG4gICAgICAgIC8vICAgY29sb3I6ICcjZmY5OTAwJyxcbiAgICAgICAgLy8gICBsaW5rOiAnLi4vbW9kdWxlcy9iaWxsL21hbmFnZUJpbGwvbWFuYWdlQmlsbCcsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkZpbmFuY2lhbC5CaWxsaW5ncy5NYW5hZ2UnLFxuICAgICAgICAvLyAgIC8vIGlzU2hvdzogdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgZGlzcGxheU5hbWU6ICfmiJHnmoTlj5HnpagnLFxuICAgICAgICAvLyAgIGljb246ICdpY29uLXdvZGVmYXBpYW8nLFxuICAgICAgICAvLyAgIGNvbG9yOiAnI2UyMDAwMCcsXG4gICAgICAgIC8vICAgbGluazogJy4uL21vZHVsZXMvaW52b2ljZS9teUludm9jZS9teWludm9pY2UnLFxuICAgICAgICAvLyAgIG5hbWU6ICdQYWdlcy5GaW5hbmNpYWwuSW52b2ljZXMuTXlBcHBseUludm9pY2VzJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn5oiR55qE5Y+R56WoJyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi13b2RlZmFwaWFvJyxcbiAgICAgICAgLy8gICBjb2xvcjogJyNlMjAwMDAnLFxuICAgICAgICAvLyAgIGxpbms6ICcuLi9tb2R1bGVzL2ludm9pY2UvbXlJbnZvY2UvbXlpbnZvaWNlJyxcbiAgICAgICAgLy8gICBuYW1lOiAnUGFnZXMuRmluYW5jaWFsLkludm9pY2VzLk15QXBwbHlJbnZvaWNlcycsXG4gICAgICAgIC8vICAgLy8gaXNTaG93OiB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBkaXNwbGF5TmFtZTogJ+aIkeeahOi0ueeUqCcsXG4gICAgICAgIC8vICAgaWNvbjogJ2ljb24td29kZWZlaXlvbmcnLFxuICAgICAgICAvLyAgIGNvbG9yOiAnI2UyMDAwMCcsXG4gICAgICAgIC8vICAgbGluazogJy4uL21vZHVsZXMvY29zdC9teUNvc3QvbXlDb3N0JyxcbiAgICAgICAgLy8gICBuYW1lOiAnUGFnZXMuRmluYW5jaWFsLkNoYXJnZS5NeUNoYXJnZXMnLFxuICAgICAgICAvLyAgIC8vIGlzU2hvdzogdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgZGlzcGxheU5hbWU6ICfotLnnlKjnrqHnkIYnLFxuICAgICAgICAvLyAgIGljb246ICdpY29uLWZlaXlvbmdndWFubGknLFxuICAgICAgICAvLyAgIGNvbG9yOiAnI2UyMDAwMCcsXG4gICAgICAgIC8vICAgbGluazogJy4uL21vZHVsZXMvY29zdC9tYW5hZ2VDb3N0L21hbmFnZUNvc3QnLFxuICAgICAgICAvLyAgIG5hbWU6ICdQYWdlcy5GaW5hbmNpYWwuQ2hhcmdlLk1hbmFnZScsXG4gICAgICAgIC8vICAgLy8gaXNTaG93OiB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBkaXNwbGF5TmFtZTogJ+aIkeeahOaUtuasvicsXG4gICAgICAgIC8vICAgaWNvbjogJ2ljb24td29kZXNob3VrdWFuJyxcbiAgICAgICAgLy8gICBjb2xvcjogJyNmZjk5MDAnLFxuICAgICAgICAvLyAgIGxpbms6ICcuLi9tb2R1bGVzL3JlY2VpdmFibGVzL215UmVjZWl2YWJsZXMvbXlSZWNlaXZhYmxlcycsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkZpbmFuY2lhbC5SZWNlaXB0cy5NeVJlY2VpcHRzJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn5pS25qy+566h55CGJyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi1zaG91a3Vhbmd1YW5saScsXG4gICAgICAgIC8vICAgY29sb3I6ICcjZmY5OTAwJyxcbiAgICAgICAgLy8gICBsaW5rOiAnLi4vbW9kdWxlcy9yZWNlaXZhYmxlcy9tYW5hZ2VSZWNlaXZhYmxlcy9tYW5hZ2VSZWNlaXZhYmxlcycsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkZpbmFuY2lhbC5SZWNlaXB0cycsXG4gICAgICAgIC8vICAgLy8gaXNTaG93OiB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBkaXNwbGF5TmFtZTogJ+aIkeeahOeri+ahiCcsXG4gICAgICAgIC8vICAgaWNvbjogJ2ljb24td29kZWxpYW4nLFxuICAgICAgICAvLyAgIGNvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgIC8vICAgbGluazogJy4uL21vZHVsZXMvbXlSZWdpc3Rlci9teVJlZ2lzdGVyTGlzdCcsXG4gICAgICAgIC8vICAgbmFtZTogJ1BhZ2VzLkJ1c2luZXNzLkNhc2VBcHBsaWNhdGlvbnMuTXlBcHBseUNhc2VzJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn5Yay56qB5qOA57SiJyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi1jaG9uZ3R1amlhbnN1bycsXG4gICAgICAgIC8vICAgY29sb3I6ICcjZTIwMDAwJyxcbiAgICAgICAgLy8gICBsaW5rOiAnLi4vbW9kdWxlcy9jb25mbGljdFJldHJpZXZhbC9jb25mbGljdFJldHJpZXZhbExpc3QnLFxuICAgICAgICAvLyAgIG5hbWU6ICdQYWdlcy5CdXNpbmVzcy5DYXNlQXBwbGljYXRpb25zLkNoZWNrJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGRpc3BsYXlOYW1lOiAn5Yip55uK5Yay56qB6aKE5qOAJyxcbiAgICAgICAgLy8gICBpY29uOiAnaWNvbi1saXlpY2hvbmd0dXl1amlhbicsXG4gICAgICAgIC8vICAgY29sb3I6ICcjZTIwMDAwJyxcbiAgICAgICAgLy8gICBsaW5rOiAnLi4vbW9kdWxlcy9Db25mbGljdEludGVyZXN0UHJlZmxpZ2h0L0NvbmZsaWN0SW50ZXJlc3RQcmVmbGlnaHQnLFxuICAgICAgICAvLyAgIG5hbWU6ICdQYWdlcy5CdXNpbmVzcy5DYXNlQXBwbGljYXRpb25zLkNoZWNrQ3VzdG9tZXJzJyxcbiAgICAgICAgLy8gICAvLyBpc1Nob3c6IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgXSxcbiAgICAgIC8vIOWuoeaguFxuICAgICAgYXVkaXRGdW5jdGlvbjogW1xuICAgICAgICB7XG4gICAgICAgICAgZGlzcGxheU5hbWU6ICfmoYjku7blrqHmoLgnLFxuICAgICAgICAgIGljb246ICdpY29uLWFuamlhbnNoZW5oZScsXG4gICAgICAgICAgY29sb3I6ICcjNWQ3M2ZhJyxcbiAgICAgICAgICBsaW5rOiAnLi4vbW9kdWxlcy9hdWRpdE1vZHVsZXMvY2FzZUF1ZGl0L2F1ZGl0Q2FzZUxpc3QnLFxuICAgICAgICAgIGltYWdlOiAnLi4vLi4vaW1hZ2VzLzEtMDIucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGlzcGxheU5hbWU6ICfml6Xlv5flrqHmoLgnLFxuICAgICAgICAgIGljb246ICdpY29uLXJpemhpc2hlbmhlJyxcbiAgICAgICAgICBjb2xvcjogJyM1ZDczZmEnLFxuICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL2F1ZGl0TW9kdWxlcy9yZWNvcmRBdWRpdC9yZWNvcmRBdWRpdExpc3QnLFxuICAgICAgICAgIGltYWdlOiAnLi4vLi4vaW1hZ2VzLzItMDIucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGlzcGxheU5hbWU6ICfor7flgYflrqHmoLgnLFxuICAgICAgICAgIGljb246ICdpY29uLXFpbmdqaWFzaGVuaGUnLFxuICAgICAgICAgIGNvbG9yOiAnIzAwOWRmZicsXG4gICAgICAgICAgbGluazogJy4uL21vZHVsZXMvYXVkaXRNb2R1bGVzL2FwcGx5QXVkaXQvYXBwbHlBdWRpdExpc3QnLFxuICAgICAgICAgIGltYWdlOiAnLi4vLi4vaW1hZ2VzLzMtMDIucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGlzcGxheU5hbWU6ICfmlofkuablrqHmoLgnLFxuICAgICAgICAgIGljb246ICdpY29uLXdlbnNodXNoZW5oZScsXG4gICAgICAgICAgY29sb3I6ICcjMDA5ZGZmJyxcbiAgICAgICAgICBsaW5rOiAnLi4vbW9kdWxlcy9hdWRpdE1vZHVsZXMvYXBwcm92ZUF1ZGl0L2FwcHJvdmVMaXN0JyxcbiAgICAgICAgICBpbWFnZTogJy4uLy4uL2ltYWdlcy8zLTA0LnBuZydcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b01lc3NhZ2VQYWdlKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL21lc3NhZ2VQYWdlL21lc3NhZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiAn5b6L5pm66I2fLS3ms5XlvovlnIjmmbrog73msYfogZrlubPlj7AnLFxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvbWluZS9pbmRleCcsXG4gICAgICAgICAgaW1hZ2VVcmw6ICcuLi8uLi9pbWFnZXMvU2hhcmVBcHBNZXNzYWdlLmpwZycsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5rQWRkcmVzcyhsaW5rKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogbGlua1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBiaW5kY2hhbmdlKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwuY3VycmVudCk7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgLy/ot7Povazoh7PmiJHnmoTlrqLmiLdcbiAgICAgIC8v6Lez6L2s6Iez5oiR55qE5qGI5Lu2XG4gICAgICB0b1N3aXBlcigpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnRUYWIpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6ICcuLi9tb2R1bGVzL215Y2xpZW50L215Q2xpZW50TGlzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnLi4vbW9kdWxlcy9teWNhc2UvbXljYXNlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6ICcuLi9tb2R1bGVzL215UmVjb3JkL3dvcmtSZWNvcmQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgIHVybDogJy4uL21vZHVsZXMvYmlsbC9teUJpbGwvbXlCaWxsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50VGFiID09ICdDYXNlJykge1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3YXRjaCA9IHt9XG4gICAgYXN5bmMgZ2V0U3dpcGVyZGF0YSgpIHtcbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvYW5hbHl6ZVN0YXRpc3RpY3MvR2V0UGVyc29uQW5udWFsQ291bnRzJywgLy/ojrflj5Zzd2lwZXLmlbDmja5cbiAgICAgICAgJ3Bvc3QnXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzRGF0YSlcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHRoaXMuR2V0UGVyc29uQW5udWFsQ291bnRzID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgLy/mta7ngrnmjIfmlbBcbiAgICAgICAgdmFyIGNvbXBhcmVkVmFsdWVBcnkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsbGVuPXJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXN1bHRbaV0uY29tcGFyZWRWYWx1ZSk7XG4gICAgICAgICAgY29tcGFyZWRWYWx1ZUFyeS5wdXNoKChyZXNEYXRhLmRhdGEucmVzdWx0W2ldLmNvbXBhcmVkVmFsdWUgKiAxMDApLnRvRml4ZWQoMikpO1xuICAgICAgICAgIHJlc0RhdGEuZGF0YS5yZXN1bHRbaV0udmFsdWUgPSBOdW1iZXIocmVzRGF0YS5kYXRhLnJlc3VsdFtpXS52YWx1ZSkudG9GaXhlZCgpO1xuICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5kYXRhLnJlc3VsdFtpXS5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdDbGllbnQnOlxuICAgICAgICAgICAgICByZXNEYXRhLmRhdGEucmVzdWx0W2ldLm5hbWUgPSAn5oiR55qE5a6i5oi3JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDYXNlJzpcbiAgICAgICAgICAgICAgcmVzRGF0YS5kYXRhLnJlc3VsdFtpXS5uYW1lID0gJ+aIkeeahOahiOS7tic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnV29ya2xvZyc6XG4gICAgICAgICAgICAgIHJlc0RhdGEuZGF0YS5yZXN1bHRbaV0ubmFtZSA9ICfmiJHnmoTml6Xlv5cnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0ZpbmFuY2UnOlxuICAgICAgICAgICAgICByZXNEYXRhLmRhdGEucmVzdWx0W2ldLm5hbWUgPSAn5oiR55qE6LSi5YqhJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wYXJlZFZhbHVlID0gY29tcGFyZWRWYWx1ZUFyeTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0FubnVhbENvdW50cycsIHJlc0RhdGEuZGF0YS5yZXN1bHQpO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL+iOt+WPlumAmuefpea2iOaBr1xuICAgIGFzeW5jIEdldFVzZXJOb3RpZmljYXRpb25zKCkge1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIG1heFJlc3VsdENvdW50OiAxMCxcbiAgICAgICAgbm90aWZpY2F0aW9uTmFtZTogXCJcIixcbiAgICAgICAgc2tpcENvdW50OiAwLFxuICAgICAgICBzdGF0ZTogXCJcIixcbiAgICAgIH1cbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy9hcHAvbm90aWZpY2F0aW9uL0dldFdlY2hhdE1pbmlVc2VyTm90aWZpY2F0aW9ucycsXG4gICAgICAgICdQT1NUJyxcbiAgICAgICAgZGF0YVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgdmFyIFVzZXJOb3RpZmljYXRpb25zX0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICBmb3IgKHZhciBpbmRleD0wLGxlbj1Vc2VyTm90aWZpY2F0aW9uc19EYXRhLmxlbmd0aDtpbmRleDxsZW47aW5kZXgrKykge1xuICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLm5vdGlmaWNhdGlvbi5jcmVhdGlvblRpbWUgPSBiZWF1dGlmeV90aW1lKFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLm5vdGlmaWNhdGlvbi5jcmVhdGlvblRpbWUpXG4gICAgICAgICAgc3dpdGNoIChVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5ub3RpZmljYXRpb24ubm90aWZpY2F0aW9uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5CaWxsaW5ncy5SZXR1cm5lZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+i0puWNlS3lt7LpgIDlm54nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5UYXNrLkNvbmZpcm1lZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S7u+WKoS3lt7Llj4LkuI4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5UYXNrLkNvbW1lbnQuQ3JlYXRlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S7u+WKoS3mlrDmtojmga8nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5Mb2cuUmV0dXJuZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICflt6XkvZzml6Xlv5ct5bey6YCA5ZueJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuSHVtYW5SZXNvdXJjZS5BdHRlbmRhbmNlLkFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn6K+35YGHLeW3suWuoeaguCc7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuVGFzay5XYWl0Rm9yQ29uZmlybWVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lu75YqhLeW+heehruiupCdcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5NZWV0aW5nLlJlamVjdGVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lya6K6uLeW3suaLkue7nSdcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5IdW1hblJlc291cmNlLkF0dGVuZGFuY2UuQ3JlYXRlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+ivt+WBhy3lvoXlrqHmoLgnXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdBcHAuSHVtYW5SZXNvdXJjZS5BdHRlbmRhbmNlLlJldHVybmVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn6K+35YGHLeW3sumAgOWbnidcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5IdW1hblJlc291cmNlLkF0dGVuZGFuY2UuUmV0dXJuZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfor7flgYct5bey6YCA5ZueJ1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5CaWxsaW5ncy5BcHByb3ZlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+i0puWNlS3lt7LlrqHmoLgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuSW52b2ljZS5XYWl0Rm9yQ2xhaW1lZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+WPkeelqC3lvoXpooblj5YnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuQmlsbGluZ3MuQ3JlYXRlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+i0puWNlS3lvoXlpITnkIYnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuSW52b2ljZS5SZXR1cm5lZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+WPkeelqC3lt7LpgIDlm54nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5NZWV0aW5nLkNvbmZpcm1lZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S8muiuri3lt7Llj4LkuI4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5NZWV0aW5nLlN0YXJ0UmVtaW5kJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lya6K6uLeWNs+WwhuW8gOWniyc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5DaGFyZ2UuV2FpdEZvckFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn6LS555SoLeW+heWuoeaguCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLlRhc2suQXJjaGl2ZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfku7vliqEt5bey5b2S5qGjJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuRmluYW5jaWFsLkludm9pY2UuQ2FuY2VsZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICflj5Hnpagt5bey5L2c5bqfJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuTWVldGluZy5NZWV0aW5nTWludXRlc0NvbXBsZXRlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S8muiuri3nuqropoEt5bey5a6M5oiQJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuTG9nLkFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5bel5L2c5pel5b+XLeW3suWuoeaguCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLk1lZXRpbmcuUmVtaW5kZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfkvJrorq4t6aKE6K6+5o+Q6YaSJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuRmluYW5jaWFsLlJlY2VpcHQuV2FpdEZvckNvbmZpcm1lZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+aUtuasvi3lvoXnoa7orqQnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuUmVjZWlwdC5XYWl0Rm9yQ2xhaW1lZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+aUtuasvi3lvoXorqTpooYnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuQ2hhcmdlLlJldHVybmVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn6LS555SoLeW3sumAgOWbnic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLkxvZy5DcmVhdGVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5bel5L2c5pel5b+XLeW3suWPguS4jic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5DaGFyZ2UuQXBwcm92ZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfotLnnlKgt5bey5a6h5qC4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuVGFzay5SZWplY3RlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S7u+WKoS3lt7Lmi5Lnu50nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5NZWV0aW5nLkNyZWF0ZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfkvJrorq4t5paw5Lya6K6uJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuTWVldGluZy5XYWl0QXBwcm92ZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfkvJrorq4t5b6F5Y+C5LiOJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuVGFzay5Db21wbGV0ZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfku7vliqEt5bey5a6M5oiQJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuTG9nLldhaXRBcHByb3ZlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+W3peS9nOaXpeW/ly3lvoXlrqHmoLgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuSW52b2ljZS5XYWl0Rm9yUmVnaXN0ZXJlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+WPkeelqC3lvoXlvIDnpagnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5CdXNpbmVzcy5DYXNlQ3JlYXRpb24uQ3JlYXRlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+eri+ahiC3lvoXlrqHmoLgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5CdXNpbmVzcy5TdGFtcEZpbGVzLlJldHVybmVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5paH5Lmm5oql5a6hLeW3sumAgOWbnic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXBwLkJ1c2luZXNzLlN0YW1wRmlsZXMuQ3JlYXRlZCc6XG4gICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+aWh+S5puaKpeWuoS3lvoXlrqHmoLgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FwcC5CdXNpbmVzcy5TdGFtcEZpbGVzLkFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5paH5Lmm5oql5a6hLeW3suWuoeaguCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXBwLkJ1c2luZXNzLlN0YW1wRmlsZXMuQXBwcm92ZWQnOlxuICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfmlofkuabmiqXlrqEt5bey5a6h5qC4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5HZXRVc2VyTm90aWZpY2F0aW9uc19kYXRhID0gVXNlck5vdGlmaWNhdGlvbnNfRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuR2V0VXNlck5vdGlmaWNhdGlvbnNfZGF0YSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgLy/lip/og73mnYPpmZBcbiAgICBhc3luYyBHZXRGdW5jdGlvbkl0ZW1zKCkge1xuICAgICAgdmFyIGlkID0ge1xuICAgICAgICBpZDogdGhpcy4kcGFyZW50Lmdsb2JhbC5jdXJyZW50VXNlcklkXG4gICAgICB9XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvYXBwL2Z1bmN0aW9uL0dldEZ1bmN0aW9uSXRlbXMnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGlkXG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgR2V0RnVuY3Rpb25JdGVtc0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zXG4gICAgICAgIHZhciBpdGVtc0RhdGEgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXg9MCxsZW49R2V0RnVuY3Rpb25JdGVtc0RhdGEubGVuZ3RoO2luZGV4PGxlbjtpbmRleCsrKSB7XG4gICAgICAgICAgc3dpdGNoIChHZXRGdW5jdGlvbkl0ZW1zRGF0YVtpbmRleF0ubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuQnVzaW5lc3MuQ2FzZXMuTXlDYXNlcyc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXdvZGVhbmppYW4nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgICAgICAgICAgbGluazogJy4uL21vZHVsZXMvbXljYXNlL215Y2FzZScsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQYWdlcy5CdXNpbmVzcy5DYXNlcy5NeUNhc2VzXCIsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuQ3VzdG9tZXJzLk15Q3VzdG9tZXJzLk1hbmFnZSc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXdvZGVrZWh1JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNlMjAwMDAnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL215Y2xpZW50L215Q2xpZW50TGlzdCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLkN1c3RvbWVycy5NeUN1c3RvbWVycy5NYW5hZ2UnLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VzLldvcmtzLkxvZy5NeVdvcmtsb2cnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi13b2Rlcml6aGknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwOWRmZicsXG4gICAgICAgICAgICAgICAgbGluazogJy4uL21vZHVsZXMvbXlSZWNvcmQvd29ya1JlY29yZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLldvcmtzLkxvZy5NeVdvcmtsb2cnLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VzLldvcmtzLlRhc2snOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi13b2RlamluY2hlbmcnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCcsXG4gICAgICAgICAgICAgICAgbGluazogJy4uL21vZHVsZXMvbXlUYXNrQ291cnNlL3Rhc2tQcm9qZWN0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGFnZXMuV29ya3MuVGFzaycsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuV29ya3MuTWVldGluZy5NeU1lZXRpbmcnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi1odWl5aS1jb3B5JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL215TWVldGluZy9tZWV0aW5nTGlzdCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLldvcmtzLk1lZXRpbmcuTXlNZWV0aW5nJyxcbiAgICAgICAgICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQYWdlcy5IdW1hblJlc291cmNlLkF0dGVuZGFuY2UuTXlBcHBseUxpc3QnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi13b2RlcWluZ2ppYScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmY5OTAwJyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnLi4vbW9kdWxlcy9teUFwcGx5TGlzdC9NeUFwcGx5TGlzdCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLkh1bWFuUmVzb3VyY2UuQXR0ZW5kYW5jZS5NeUFwcGx5TGlzdCcsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuRmluYW5jaWFsLkJpbGxpbmdzLk15QmlsbGluZ3MnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6R2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXdvZGV6aGFuZ2RhbicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmY5OTAwJyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnLi4vbW9kdWxlcy9iaWxsL215QmlsbC9teUJpbGwnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWdlcy5GaW5hbmNpYWwuQmlsbGluZ3MuTXlCaWxsaW5ncycsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuRmluYW5jaWFsLkJpbGxpbmdzLk1hbmFnZSc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXpoYW5nZGFuZ3VhbmxpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL2JpbGwvbWFuYWdlQmlsbC9tYW5hZ2VCaWxsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGFnZXMuRmluYW5jaWFsLkJpbGxpbmdzLk1hbmFnZScsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuRmluYW5jaWFsLkludm9pY2VzLk15QXBwbHlJbnZvaWNlcyc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXdvZGVmYXBpYW8nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UyMDAwMCcsXG4gICAgICAgICAgICAgICAgbGluazogJy4uL21vZHVsZXMvaW52b2ljZS9teUludm9jZS9teWludm9pY2UnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWdlcy5GaW5hbmNpYWwuSW52b2ljZXMuTXlBcHBseUludm9pY2VzJyxcbiAgICAgICAgICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQYWdlcy5GaW5hbmNpYWwuSW52b2ljZXMuTWFuYWdlJzpcbiAgICAgICAgICAgICAgaXRlbXNEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBHZXRGdW5jdGlvbkl0ZW1zRGF0YVtpbmRleF0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ljb24tZmFwaWFvZ3VhbmxpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNlMjAwMDAnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL2ludm9pY2UvbWFuYWdlSW52b2NlL21hbmFnZUludm9pY2UnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWdlcy5GaW5hbmNpYWwuSW52b2ljZXMuTWFuYWdlJyxcbiAgICAgICAgICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQYWdlcy5GaW5hbmNpYWwuQ2hhcmdlLk15Q2hhcmdlcyc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXdvZGVmZWl5b25nJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNlMjAwMDAnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL2Nvc3QvbXlDb3N0L215Q29zdCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLkZpbmFuY2lhbC5DaGFyZ2UuTXlDaGFyZ2VzJyxcbiAgICAgICAgICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQYWdlcy5GaW5hbmNpYWwuQ2hhcmdlLk1hbmFnZSc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLWZlaXlvbmdndWFubGknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UyMDAwMCcsXG4gICAgICAgICAgICAgICAgbGluazogJy4uL21vZHVsZXMvY29zdC9tYW5hZ2VDb3N0L21hbmFnZUNvc3QnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWdlcy5GaW5hbmNpYWwuQ2hhcmdlLk1hbmFnZScsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuRmluYW5jaWFsLlJlY2VpcHRzLk15UmVjZWlwdHMnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi13b2Rlc2hvdWt1YW4nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCcsXG4gICAgICAgICAgICAgICAgbGluazogJy4uL21vZHVsZXMvcmVjZWl2YWJsZXMvbXlSZWNlaXZhYmxlcy9teVJlY2VpdmFibGVzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGFnZXMuRmluYW5jaWFsLlJlY2VpcHRzLk15UmVjZWlwdHMnLFxuICAgICAgICAgICAgICAgIGlzU2hvdzogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VzLkZpbmFuY2lhbC5SZWNlaXB0cyc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXNob3VrdWFuZ3VhbmxpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL3JlY2VpdmFibGVzL21hbmFnZVJlY2VpdmFibGVzL21hbmFnZVJlY2VpdmFibGVzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGFnZXMuRmluYW5jaWFsLlJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQYWdlcy5CdXNpbmVzcy5DYXNlQXBwbGljYXRpb25zLk15QXBwbHlDYXNlcyc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLXdvZGVsaWFuJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM1ZDczZmEnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL215UmVnaXN0ZXIvbXlSZWdpc3Rlckxpc3QnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWdlcy5CdXNpbmVzcy5DYXNlQXBwbGljYXRpb25zLk15QXBwbHlDYXNlcycsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUGFnZXMuQnVzaW5lc3MuQ2FzZUFwcGxpY2F0aW9ucy5DaGVjayc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLWNob25ndHVqaWFuc3VvJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNlMjAwMDAnLFxuICAgICAgICAgICAgICAgIGxpbms6ICcuLi9tb2R1bGVzL2NvbmZsaWN0UmV0cmlldmFsL2NvbmZsaWN0UmV0cmlldmFsTGlzdCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLkJ1c2luZXNzLkNhc2VBcHBsaWNhdGlvbnMuQ2hlY2snLFxuICAgICAgICAgICAgICAgIGlzU2hvdzogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VzLkJ1c2luZXNzLkNhc2VBcHBsaWNhdGlvbnMuQ2hlY2tDdXN0b21lcnMnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi1saXlpY2hvbmd0dXl1amlhbicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZTIwMDAwJyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnLi4vbW9kdWxlcy9Db25mbGljdEludGVyZXN0UHJlZmxpZ2h0L0NvbmZsaWN0SW50ZXJlc3RQcmVmbGlnaHQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWdlcy5CdXNpbmVzcy5DYXNlQXBwbGljYXRpb25zLkNoZWNrQ3VzdG9tZXJzJyxcbiAgICAgICAgICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ1BhZ2VzLkJ1c2luZXNzLkNhc2VzLk1hbmFnZSc6XG4gICAgICAgICAgICAgIGl0ZW1zRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGljb246ICdpY29uLWFuamlhbmd1YW5saScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNWQ3M2ZhJyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnLi4vbW9kdWxlcy9jYXNlTWFuYWdlbWVudC9jYXNlTWFuYWdlbWVudCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLkJ1c2luZXNzLkNhc2VzLk1hbmFnZScsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdQYWdlcy5CdXNpbmVzcy5DYXNlcy5DcmVhdGUnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi1saWFuc2hlbnFpbmcnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgICAgICAgICAgbGluazogJy4uL21vZHVsZXMvbXlSZWdpc3Rlci9yZWdpc3RlcicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhZ2VzLkJ1c2luZXNzLkNhc2VzLkNyZWF0ZScsXG4gICAgICAgICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdQYWdlcy5DdXN0b21lcnMuTXlDdXN0b21lcnMnOlxuICAgICAgICAgICAgICBpdGVtc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IEdldEZ1bmN0aW9uSXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnaWNvbi1rZWh1Z3VhbmxpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM1ZDczZmEnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiLi4vbW9kdWxlcy9teWNsaWVudC9teUNsaWVudExpc3Q/SXNBbGw9dHJ1ZVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWdlcy5DdXN0b21lcnMuTXlDdXN0b21lcnMnLFxuICAgICAgICAgICAgICAgIGlzU2hvdzogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAgICAgLy8gICBmdW5jdGlvbkRhdGE6aXRlbXNEYXRhXG4gICAgICAgIC8vIH0pXG4gICAgICAgdGhpcy5mdW5jdGlvbkRhdGE9aXRlbXNEYXRhO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL+iOt+WPlueUqOaIt+S/oeaBr1xuICAgIGFzeW5jIEdldEN1cnJlbnRMb2dpbkluZm9ybWF0aW9ucygpIHtcbiAgICAgIHZhciBDdXJyZW50TG9naW5JbmZvcm1hdGlvbnNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy9hcHAvc2Vzc2lvbi9HZXRDdXJyZW50TG9naW5JbmZvcm1hdGlvbnMnLFxuICAgICAgICAncG9zdCdcbiAgICAgIClcbiAgICAgIGlmIChDdXJyZW50TG9naW5JbmZvcm1hdGlvbnNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHZhciB1c2VySW5mbyA9IHt9XG4gICAgICAgIHVzZXJJbmZvID0gQ3VycmVudExvZ2luSW5mb3JtYXRpb25zRGF0YS5kYXRhLnJlc3VsdC51c2VyO1xuICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBDdXJyZW50TG9naW5JbmZvcm1hdGlvbnNEYXRhLmRhdGEucmVzdWx0LnVzZXIuaWQ7XG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWwuY3VycmVudFVzZXJJZCA9IEN1cnJlbnRMb2dpbkluZm9ybWF0aW9uc0RhdGEuZGF0YS5yZXN1bHQudXNlci5pZDtcbiAgICAgICAgdmFyIGF2YXRhckRhdGEgPSBhd2FpdCBhamF4LmdldEFhdmF0YXIoaHR0cCk7XG4gICAgICAgIHVzZXJJbmZvWyd1c2VyQXZhdGFyJ10gPSBhdmF0YXJEYXRhO1xuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsLnVzZXJJbmZvID0gdXNlckluZm87XG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWwudGVuYW50PUN1cnJlbnRMb2dpbkluZm9ybWF0aW9uc0RhdGEuZGF0YS5yZXN1bHQudGVuYW50O1xuICAgICAgfVxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICB0aGlzLkdldEN1cnJlbnRMb2dpbkluZm9ybWF0aW9ucygpO1xuICAgICAgdGhpcy5nZXRTd2lwZXJkYXRhKCk7XG4gICAgICB0aGlzLkdldFVzZXJOb3RpZmljYXRpb25zKCk7XG4gICAgICB0aGlzLkdldEZ1bmN0aW9uSXRlbXMoKTtcbiAgICB9XG4gIH1cbiJdfQ==