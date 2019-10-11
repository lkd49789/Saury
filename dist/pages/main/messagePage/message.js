'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _placeHolderImage = require('./../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

var _api = require('./../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var message = function (_wepy$page) {
    _inherits(message, _wepy$page);

    function message() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = message.__proto__ || Object.getPrototypeOf(message)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            showTools: false,
            totalCount: 0,
            maxResultCount: 10,
            skipCount: 0,
            GetUserNotifications_data: [],
            EmployeePhoto: [],
            isDisabled: [],
            sign_id: [],
            sign_id_all: [],
            delet_id: [],
            delet_id_all: [],
            all_checked: false,
            show_sign: false
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.methods = {
            // 跳转
            jump_page: function jump_page(item, index) {
                console.log(item.linkPage, item.notification.data.properties.id, item.notification.notificationName, item.id, index, item.state);
                // e20c1211-1939-4ec0-ae31-e7946eae33f2
                if (item.state == 0) {
                    this.SetNotificationAsRead(item.id, index);
                }
                switch (item.notification.notificationName) {
                    case 'App.Financial.Receipt.WaitForAssigned':
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id + '&type=1'
                        });
                        break;
                    case 'App.Financial.Receipt.WaitForConfirmed':
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id + '&type=0'
                        });
                        break;
                    case 'App.Financial.Receipt.WaitForClaimed':
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id + '&type=0'
                        });
                        break;
                    default:
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id
                        });
                        break;
                }
            },

            //全选
            all_checked: function all_checked() {
                this.all_checked = !this.all_checked;
                if (this.all_checked) {
                    this.isDisabled = this.isDisabled.map(function (item) {
                        return item = true;
                    });
                    this.sign_id = this.sign_id_all;
                    this.delet_id = this.delet_id_all;
                } else {
                    this.isDisabled = this.isDisabled.map(function (item) {
                        return item = false;
                    });
                    this.sign_id = [];
                    this.delet_id = [];
                }
                this.$apply();
            },

            //单选
            sign: function sign(id, index, state) {
                this.isDisabled[index] = !this.isDisabled[index];
                if (this.isDisabled[index]) {
                    this.delet_id = [].concat(_toConsumableArray(this.delet_id), [id]);
                    if (state == 0) {
                        this.sign_id = [].concat(_toConsumableArray(this.sign_id), [id]);
                    } else {
                        this.sign_id = [].concat(_toConsumableArray(this.sign_id), [null]);
                    }
                } else {
                    this.delet_id.splice(this.delet_id.indexOf(id), 1);
                    // if (state == 0) {
                    this.sign_id.splice(this.sign_id.indexOf(id), 1);
                    // }
                }
            },

            // 批量完成
            isAllComlated: function isAllComlated() {
                if (this.show_sign) {
                    var id = [];
                    for (var index = 0, len = this.sign_id.length; index < len; index++) {
                        if (this.sign_id[index] !== null) {
                            id.push(this.sign_id[index]);
                        }
                    }
                    this.SetAllNotificationsAsRead(id);
                } else {
                    console.log('1123');
                }
            },

            //删除提醒消息
            deleteNotification: function deleteNotification(id, index) {
                var _this2 = this;

                if (!this.showTools) {
                    wx.showModal({
                        title: '是否确认！', //提示的标题,
                        content: '一旦删除将无法恢复！', //提示的内容,
                        showCancel: true, //是否显示取消按钮,
                        cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                        cancelColor: '#7a7a7a', //取消按钮的文字颜色,
                        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                        confirmColor: '#5d73fa', //确定按钮的文字颜色,
                        success: function success(res) {
                            if (res.confirm) {
                                _this2.showTools = false;
                                _this2.DeleteUserNotification(id, index);
                            }
                        }
                    });
                }
            },

            //批量删除
            DeleteUserNotifications: function DeleteUserNotifications() {
                var _this3 = this;

                wx.showModal({
                    title: '是否确认！', //提示的标题,
                    content: '一旦删除将无法恢复！', //提示的内容,
                    showCancel: true, //是否显示取消按钮,
                    cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                    cancelColor: '#7a7a7a', //取消按钮的文字颜色,
                    confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: '#5d73fa', //确定按钮的文字颜色,
                    success: function success(res) {
                        if (res.confirm) {
                            _this3.showTools = false;
                            _this3.DeleteUserNotifications();
                        }
                    }
                });
            },
            showTools: function showTools() {
                this.showTools = !this.showTools;
                this.sign_id = [];
                this.delet_id = [];
                this.all_checked = false;
                if (this.showTools) {
                    this.GetUserNotifications(false, '0');
                } else {
                    this.GetUserNotifications(false);
                }
                this.isDisabled = this.isDisabled.map(function (item) {
                    item = false;
                    return item;
                });
                this.$apply();
            }
        }, _this.mixins = [_mixin2.default], _this.events = {}, _this.watch = {
            isDisabled: function isDisabled(value) {
                var all_checked = value.every(function (item) {
                    return item == true;
                });
                if (all_checked) {
                    this.all_checked = true;
                } else {
                    this.all_checked = false;
                }
            },
            sign_id: function sign_id(value) {
                var isSign = value.every(function (item) {
                    return item == null;
                });
                if (!isSign) {
                    this.show_sign = true;
                } else {
                    this.show_sign = false;
                }
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(message, [{
        key: 'onReachBottom',

        //上拉加载
        value: function onReachBottom() {
            if (this.totalCount / (this.skipCount + 10) > 1 && this.$parent.global.netWorkString) {
                this.skipCount += 10;
                if (this.showTools) {
                    this.GetUserNotifications(true, '0');
                } else {
                    this.GetUserNotifications(true);
                }

                this.$apply();
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
        //下拉刷新

    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.sign_id = [];
            this.delet_id = [];
            this.showTools = false;
            this.GetUserNotifications(false);
            this.$apply();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
        //获取通知消息

    }, {
        key: 'GetUserNotifications',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isRresh) {
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                var data, resData, UserNotifications_Data, isDisabled, index, len;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true //显示透明蒙层，防止触摸穿透,
                                });
                                if (!isRresh) {
                                    this.skipCount = 0;
                                    this.sign_id = [];
                                    this.delet_id = [];
                                    this.GetUserNotifications_data = [];
                                    this.EmployeePhoto = [];
                                    this.isDisabled = [];
                                    this.all_checked = false;
                                }
                                data = {
                                    maxResultCount: this.maxResultCount,
                                    notificationName: "",
                                    skipCount: this.skipCount,
                                    state: state
                                };
                                _context.next = 5;
                                return _ajax2.default.getData('/api/services/app/notification/GetWechatMiniUserNotifications', 'POST', data);

                            case 5:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 9 : _context.t0 === 403 ? 144 : _context.t0 === 500 ? 148 : 152;
                                break;

                            case 9:
                                if (!(resData.data.result.totalCount !== 0)) {
                                    _context.next = 140;
                                    break;
                                }

                                this.totalCount = resData.data.result.totalCount;
                                UserNotifications_Data = resData.data.result.items;
                                isDisabled = [];
                                index = 0, len = UserNotifications_Data.length;

                            case 14:
                                if (!(index < len)) {
                                    _context.next = 134;
                                    break;
                                }

                                UserNotifications_Data[index].notification.creationTime = (0, _api.beautify_time)(UserNotifications_Data[index].notification.creationTime);
                                _context.t1 = UserNotifications_Data[index].notification.notificationName;
                                _context.next = _context.t1 === 'App.Financial.Billings.Returned' ? 19 : _context.t1 === 'App.Works.Task.Confirmed' ? 22 : _context.t1 === 'App.Works.Task.Comment.Created' ? 25 : _context.t1 === 'App.Works.Log.Returned' ? 28 : _context.t1 === 'App.HumanResource.Attendance.Approved' ? 31 : _context.t1 === 'App.Works.Task.WaitForConfirmed' ? 34 : _context.t1 === 'App.Works.Meeting.Rejected' ? 37 : _context.t1 === 'App.HumanResource.Attendance.Created' ? 40 : _context.t1 === 'App.HumanResource.Attendance.Returned' ? 43 : _context.t1 === 'App.HumanResource.Attendance.Returned' ? 46 : _context.t1 === 'App.Financial.Billings.Approved' ? 49 : _context.t1 === 'App.Financial.Billings.Created' ? 52 : _context.t1 === 'App.Financial.Invoice.Returned' ? 55 : _context.t1 === 'App.Works.Meeting.Confirmed' ? 58 : _context.t1 === 'App.Works.Meeting.StartRemind' ? 61 : _context.t1 === 'App.Financial.Charge.WaitForApproved' ? 64 : _context.t1 === 'App.Works.Task.Archived' ? 67 : _context.t1 === 'App.Financial.Invoice.Canceled' ? 70 : _context.t1 === 'App.Works.Meeting.MeetingMinutesCompleted' ? 73 : _context.t1 === 'App.Works.Log.Approved' ? 76 : _context.t1 === 'App.Works.Meeting.Reminded' ? 79 : _context.t1 === 'App.Financial.Receipt.WaitForConfirmed' ? 82 : _context.t1 === 'App.Financial.Receipt.WaitForClaimed' ? 85 : _context.t1 === 'App.Financial.Charge.Returned' ? 88 : _context.t1 === 'App.Works.Log.Created' ? 91 : _context.t1 === 'App.Financial.Charge.Approved' ? 94 : _context.t1 === 'App.Works.Task.Rejected' ? 97 : _context.t1 === 'App.Works.Meeting.Created' ? 100 : _context.t1 === 'App.Works.Meeting.WaitApproved' ? 103 : _context.t1 === 'App.Works.Task.Completed' ? 106 : _context.t1 === 'App.Works.Log.WaitApproved' ? 109 : _context.t1 === 'App.Financial.Invoice.WaitForRegistered' ? 112 : _context.t1 === 'App.Financial.Receipt.WaitForClaimed' ? 115 : _context.t1 === 'App.Business.CaseCreation.Created' ? 118 : _context.t1 === 'App.Business.StampFiles.Returned' ? 121 : _context.t1 === 'App.Business.StampFiles.Created' ? 124 : _context.t1 === 'App.Business.StampFiles.Approved' ? 127 : 130;
                                break;

                            case 19:
                                UserNotifications_Data[index].TextTile = '账单-已退回';
                                UserNotifications_Data[index].linkPage = '../../modules/bill/myBill/myBillDetail';
                                return _context.abrupt('break', 130);

                            case 22:
                                UserNotifications_Data[index].TextTile = '任务-已参与';
                                UserNotifications_Data[index].linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                return _context.abrupt('break', 130);

                            case 25:
                                UserNotifications_Data[index].TextTile = '任务-新消息';
                                UserNotifications_Data[index].linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                return _context.abrupt('break', 130);

                            case 28:
                                UserNotifications_Data[index].TextTile = '工作日志-已退回';
                                UserNotifications_Data[index].linkPage = '../../modules/myRecord/myLogdetail/logdetail';
                                return _context.abrupt('break', 130);

                            case 31:
                                UserNotifications_Data[index].TextTile = '请假-已审核';
                                UserNotifications_Data[index].linkPage = '../../modules/myApplyList/myApplyDetail/myApplyDetail';
                                return _context.abrupt('break', 130);

                            case 34:
                                UserNotifications_Data[index].TextTile = '任务-待确认';
                                UserNotifications_Data[index].linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                return _context.abrupt('break', 130);

                            case 37:
                                UserNotifications_Data[index].TextTile = '会议-已拒绝';
                                UserNotifications_Data[index].linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                return _context.abrupt('break', 130);

                            case 40:
                                UserNotifications_Data[index].TextTile = '请假-待审核';
                                UserNotifications_Data[index].linkPage = '../../modules/auditModules/applyAudit/applyAuditDetail';
                                return _context.abrupt('break', 130);

                            case 43:
                                UserNotifications_Data[index].TextTile = '请假-已退回';
                                UserNotifications_Data[index].linkPage = '../../modules/myApplyList/myApplyDetail/myApplyDetail';
                                return _context.abrupt('break', 130);

                            case 46:
                                UserNotifications_Data[index].TextTile = '请假-已退回';
                                UserNotifications_Data[index].linkPage = '../../modules/myApplyList/myApplyDetail/myApplyDetail';
                                return _context.abrupt('break', 130);

                            case 49:
                                UserNotifications_Data[index].TextTile = '账单-已审核';
                                UserNotifications_Data[index].linkPage = '../../modules/bill/myBill/myBillDetail';
                                return _context.abrupt('break', 130);

                            case 52:
                                UserNotifications_Data[index].TextTile = '账单-待处理';
                                UserNotifications_Data[index].linkPage = '../../modules/bill/manageBill/manageBillDetail';
                                return _context.abrupt('break', 130);

                            case 55:
                                UserNotifications_Data[index].TextTile = '发票-已退回';
                                UserNotifications_Data[index].linkPage = '../../modules/invoice/myInvoce/myinvoiceDetail';
                                return _context.abrupt('break', 130);

                            case 58:
                                UserNotifications_Data[index].TextTile = '会议-已参与';
                                UserNotifications_Data[index].linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                return _context.abrupt('break', 130);

                            case 61:
                                UserNotifications_Data[index].TextTile = '会议-即将开始';
                                UserNotifications_Data[index].linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                return _context.abrupt('break', 130);

                            case 64:
                                UserNotifications_Data[index].TextTile = '费用-待审核';
                                UserNotifications_Data[index].linkPage = '../../modules/cost/manageCost/manageCostDetail';
                                return _context.abrupt('break', 130);

                            case 67:
                                UserNotifications_Data[index].TextTile = '任务-已归档';
                                UserNotifications_Data[index].linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                return _context.abrupt('break', 130);

                            case 70:
                                UserNotifications_Data[index].TextTile = '发票-已作废';
                                UserNotifications_Data[index].linkPage = '../../modules/invoice/myInvoce/myinvoiceDetail';
                                return _context.abrupt('break', 130);

                            case 73:
                                UserNotifications_Data[index].TextTile = '会议-纪要-已完成';
                                UserNotifications_Data[index].linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                return _context.abrupt('break', 130);

                            case 76:
                                UserNotifications_Data[index].TextTile = '工作日志-已审核';
                                UserNotifications_Data[index].linkPage = '../../modules/myRecord/myLogdetail/logdetail';
                                return _context.abrupt('break', 130);

                            case 79:
                                UserNotifications_Data[index].TextTile = '会议-预设提醒';
                                UserNotifications_Data[index].linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                return _context.abrupt('break', 130);

                            case 82:
                                UserNotifications_Data[index].TextTile = '收款-待确认';
                                UserNotifications_Data[index].linkPage = '../../modules/receivables/manageReceivables/manageReceivablesDetail';
                                return _context.abrupt('break', 130);

                            case 85:
                                UserNotifications_Data[index].TextTile = '收款-待认领';
                                UserNotifications_Data[index].linkPage = '../../modules/receivables/manageReceivables/manageReceivablesDetail';
                                return _context.abrupt('break', 130);

                            case 88:
                                UserNotifications_Data[index].TextTile = '费用-已退回';
                                UserNotifications_Data[index].linkPage = '../../modules/cost/myCost/costDetail';
                                return _context.abrupt('break', 130);

                            case 91:
                                UserNotifications_Data[index].TextTile = '工作日志-已参与';
                                UserNotifications_Data[index].linkPage = '../../modules/myRecord/myLogdetail/logdetail';
                                return _context.abrupt('break', 130);

                            case 94:
                                UserNotifications_Data[index].TextTile = '费用-已审核';
                                UserNotifications_Data[index].linkPage = '../../modules/cost/myCost/costDetail';
                                return _context.abrupt('break', 130);

                            case 97:
                                UserNotifications_Data[index].TextTile = '任务-已拒绝';
                                UserNotifications_Data[index].linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                return _context.abrupt('break', 130);

                            case 100:
                                UserNotifications_Data[index].TextTile = '会议-新会议';
                                UserNotifications_Data[index].linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                return _context.abrupt('break', 130);

                            case 103:
                                UserNotifications_Data[index].TextTile = '会议-待参与';
                                UserNotifications_Data[index].linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                return _context.abrupt('break', 130);

                            case 106:
                                UserNotifications_Data[index].TextTile = '任务-已完成';
                                UserNotifications_Data[index].linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                return _context.abrupt('break', 130);

                            case 109:
                                UserNotifications_Data[index].TextTile = '工作日志-待审核';
                                UserNotifications_Data[index].linkPage = '../../modules/auditModules/recordAudit/logDetail';
                                return _context.abrupt('break', 130);

                            case 112:
                                UserNotifications_Data[index].TextTile = '发票-待开票';
                                UserNotifications_Data[index].linkPage = '../../modules/invoice/manageInvoce/manageInvoiceDetail';
                                return _context.abrupt('break', 130);

                            case 115:
                                UserNotifications_Data[index].TextTile = '发票-待领取';
                                UserNotifications_Data[index].linkPage = '../../modules/invoice/manageInvoce/manageInvoiceDetail';
                                return _context.abrupt('break', 130);

                            case 118:
                                UserNotifications_Data[index].TextTile = '立案-待审核';
                                UserNotifications_Data[index].linkPage = '../../modules/auditModules/caseAudit/caseDetailAudit/caseDetailAudit';
                                return _context.abrupt('break', 130);

                            case 121:
                                UserNotifications_Data[index].TextTile = '文书报审-已退回';
                                UserNotifications_Data[index].linkPage = '../../modules/auditModules/approveAudit/approveDetail';
                                return _context.abrupt('break', 130);

                            case 124:
                                UserNotifications_Data[index].TextTile = '文书报审-待审核';
                                UserNotifications_Data[index].linkPage = '../../modules/auditModules/approveAudit/approveDetail';
                                return _context.abrupt('break', 130);

                            case 127:
                                UserNotifications_Data[index].TextTile = '文书报审-已审核';
                                UserNotifications_Data[index].linkPage = '../../modules/auditModules/approveAudit/approveDetail';
                                return _context.abrupt('break', 130);

                            case 130:
                                isDisabled[index] = false;

                            case 131:
                                index++;
                                _context.next = 14;
                                break;

                            case 134:
                                console.log(1);
                                this.GetPhoto(UserNotifications_Data, isRresh);
                                this.GetState(UserNotifications_Data, isRresh);
                                if (isRresh) {
                                    this.isDisabled = [].concat(_toConsumableArray(this.isDisabled), isDisabled);
                                    this.GetUserNotifications_data = [].concat(_toConsumableArray(this.GetUserNotifications_data), _toConsumableArray(UserNotifications_Data));
                                } else {
                                    this.isDisabled = isDisabled;
                                    this.GetUserNotifications_data = UserNotifications_Data;
                                }
                                _context.next = 142;
                                break;

                            case 140:
                                this.placeHolder.placeHolderImageIndex = 0;
                                this.placeHolder.placeHolderShow = true;

                            case 142:
                                this.$apply();
                                return _context.abrupt('break', 152);

                            case 144:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 152);

                            case 148:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 152);

                            case 152:
                                this.$apply();

                            case 153:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetUserNotifications(_x2) {
                return _ref2.apply(this, arguments);
            }

            return GetUserNotifications;
        }()
        //获取头像

    }, {
        key: 'GetPhoto',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data, refresh) {
                var avatarData, index, http, resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                avatarData = [];
                                _context2.t0 = regeneratorRuntime.keys(data);

                            case 2:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 11;
                                    break;
                                }

                                index = _context2.t1.value;
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + data[index].notification.data.properties.creatorUserId;
                                _context2.next = 7;
                                return _ajax2.default.getUserAvatar(http);

                            case 7:
                                resData = _context2.sent;

                                avatarData[index] = resData.tempFilePath;
                                _context2.next = 2;
                                break;

                            case 11:
                                if (refresh) {
                                    this.EmployeePhoto = [].concat(_toConsumableArray(this.EmployeePhoto), avatarData);
                                } else {
                                    this.EmployeePhoto = avatarData;
                                }
                                this.$apply();

                            case 13:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetPhoto(_x3, _x4) {
                return _ref3.apply(this, arguments);
            }

            return GetPhoto;
        }()
    }, {
        key: 'GetState',
        value: function GetState(data, refresh) {
            var sign_id_all = [];
            var delet_id_all = [];
            for (var index in data) {
                delet_id_all[index] = data[index].id;
                if (data[index].state == 0) {
                    sign_id_all[index] = data[index].id;
                } else {
                    sign_id_all[index] = null;
                }
            }
            if (refresh) {
                this.delet_id_all = [].concat(_toConsumableArray(this.delet_id_all), delet_id_all);
                this.sign_id_all = [].concat(_toConsumableArray(this.sign_id_all), sign_id_all);
            } else {
                this.delet_id_all = delet_id_all;
                this.sign_id_all = sign_id_all;
            }
            this.$apply();
        }
        //标记

    }, {
        key: 'SetNotificationAsRead',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, index) {
                var _this4 = this;

                var data, resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        _this4.GetUserNotifications_data[index].state = 1;
                                    }
                                });
                                data = {
                                    id: id
                                };
                                _context3.next = 4;
                                return _ajax2.default.getData('/api/services/app/notification/SetNotificationAsRead', 'POST', data);

                            case 4:
                                resData = _context3.sent;

                                if (resData.data.success) {
                                    console.log('完成');
                                }

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function SetNotificationAsRead(_x5, _x6) {
                return _ref4.apply(this, arguments);
            }

            return SetNotificationAsRead;
        }()
        //批量标记

    }, {
        key: 'SetAllNotificationsAsRead',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
                var _this5 = this;

                var resData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        _this5.sign_id = [];
                                        _this5.delet_id = [];

                                        _this5.GetUserNotifications(false);
                                        _this5.$apply();
                                    }
                                });
                                _context4.next = 3;
                                return _ajax2.default.getData('/api/services/app/notification/SetNotificationsAsRead', 'POST', id);

                            case 3:
                                resData = _context4.sent;

                                if (resData.statusCode == 200) {
                                    this.showTools = false;
                                }

                            case 5:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function SetAllNotificationsAsRead(_x7) {
                return _ref5.apply(this, arguments);
            }

            return SetAllNotificationsAsRead;
        }()
        //删除消息

    }, {
        key: 'DeleteUserNotification',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, index) {
                var _this6 = this;

                var data, resData;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        _this6.GetUserNotifications_data.splice(index, 1);
                                        _this6.EmployeePhoto.splice(index, 1);
                                        _this6.isDisabled.splice(index, 1);;
                                        _this6.delet_id_all.splice(index, 1);
                                        _this6.sign_id_all.splice(index, 1);
                                        _this6.$apply();
                                    }
                                });
                                data = {
                                    id: id
                                };
                                _context5.next = 4;
                                return _ajax2.default.getData('/api/services/app/notification/DeleteUserNotification', 'POST', data);

                            case 4:
                                resData = _context5.sent;

                                if (resData.data.success) {
                                    console.log('删除成功');
                                }

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function DeleteUserNotification(_x8, _x9) {
                return _ref6.apply(this, arguments);
            }

            return DeleteUserNotification;
        }()
        //批量删除

    }, {
        key: 'DeleteUserNotifications',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _this7 = this;

                var data, resData;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        _this7.GetUserNotifications(false);
                                    }
                                });
                                data = this.delet_id;
                                _context6.next = 4;
                                return _ajax2.default.getData('/api/services/app/notification/DeleteUserNotifications', 'POST', data);

                            case 4:
                                resData = _context6.sent;

                                if (resData.success) {
                                    console.log('多选删除完成');
                                }

                            case 6:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function DeleteUserNotifications() {
                return _ref7.apply(this, arguments);
            }

            return DeleteUserNotifications;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetUserNotifications(false);
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return message;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(message , 'pages/main/messagePage/message'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCJkYXRhIiwic2hvd1Rvb2xzIiwidG90YWxDb3VudCIsIm1heFJlc3VsdENvdW50Iiwic2tpcENvdW50IiwiR2V0VXNlck5vdGlmaWNhdGlvbnNfZGF0YSIsIkVtcGxveWVlUGhvdG8iLCJpc0Rpc2FibGVkIiwic2lnbl9pZCIsInNpZ25faWRfYWxsIiwiZGVsZXRfaWQiLCJkZWxldF9pZF9hbGwiLCJhbGxfY2hlY2tlZCIsInNob3dfc2lnbiIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJtZXRob2RzIiwianVtcF9wYWdlIiwiaXRlbSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImxpbmtQYWdlIiwibm90aWZpY2F0aW9uIiwicHJvcGVydGllcyIsImlkIiwibm90aWZpY2F0aW9uTmFtZSIsInN0YXRlIiwiU2V0Tm90aWZpY2F0aW9uQXNSZWFkIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwibWFwIiwiJGFwcGx5Iiwic2lnbiIsInNwbGljZSIsImluZGV4T2YiLCJpc0FsbENvbWxhdGVkIiwibGVuIiwibGVuZ3RoIiwicHVzaCIsIlNldEFsbE5vdGlmaWNhdGlvbnNBc1JlYWQiLCJkZWxldGVOb3RpZmljYXRpb24iLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsIkRlbGV0ZVVzZXJOb3RpZmljYXRpb24iLCJEZWxldGVVc2VyTm90aWZpY2F0aW9ucyIsIkdldFVzZXJOb3RpZmljYXRpb25zIiwibWl4aW5zIiwiZXZlbnRzIiwid2F0Y2giLCJ2YWx1ZSIsImV2ZXJ5IiwiaXNTaWduIiwiY29tcHV0ZWQiLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiaXNScmVzaCIsInNob3dMb2FkaW5nIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsIlVzZXJOb3RpZmljYXRpb25zX0RhdGEiLCJpdGVtcyIsImNyZWF0aW9uVGltZSIsIlRleHRUaWxlIiwiR2V0UGhvdG8iLCJHZXRTdGF0ZSIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwicmVmcmVzaCIsImF2YXRhckRhdGEiLCJodHRwIiwiY3JlYXRvclVzZXJJZCIsImdldFVzZXJBdmF0YXIiLCJ0ZW1wRmlsZVBhdGgiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsTSxHQUFTO0FBQ0xDLG1DQUF1QixJQURsQjtBQUVMQyxpQ0FBcUIsTUFGaEI7QUFHTEMsZ0NBQW9CLFNBSGY7QUFJTEMsbUNBQXVCO0FBSmxCLFMsUUFNVEMsSSxHQUFPO0FBQ0hDLHVCQUFXLEtBRFI7QUFFSEMsd0JBQVksQ0FGVDtBQUdIQyw0QkFBZ0IsRUFIYjtBQUlIQyx1QkFBVyxDQUpSO0FBS0hDLHVDQUEyQixFQUx4QjtBQU1IQywyQkFBZSxFQU5aO0FBT0hDLHdCQUFZLEVBUFQ7QUFRSEMscUJBQVMsRUFSTjtBQVNIQyx5QkFBYSxFQVRWO0FBVUhDLHNCQUFVLEVBVlA7QUFXSEMsMEJBQWMsRUFYWDtBQVlIQyx5QkFBYSxLQVpW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QUVoQixNQUZnQixFQUdoQi9FLElBSGdCLEM7OztBQUFoQmdGLHVDOztBQUtKLG9DQUFHQSxRQUFRMUIsT0FBWCxFQUFtQjtBQUNmL0IsNENBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFSTtBQUNMLGlCQUFLbUMsb0JBQUwsQ0FBMEIsS0FBMUI7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUF4akJzQnVDLGVBQUtDLEk7O2tCQUFyQnpHLE8iLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgYmVhdXRpZnlfdGltZVxuICAgIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBtZXNzYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHNob3dUb29sczogZmFsc2UsXG4gICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgbWF4UmVzdWx0Q291bnQ6IDEwLFxuICAgICAgICAgICAgc2tpcENvdW50OiAwLFxuICAgICAgICAgICAgR2V0VXNlck5vdGlmaWNhdGlvbnNfZGF0YTogW10sXG4gICAgICAgICAgICBFbXBsb3llZVBob3RvOiBbXSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IFtdLFxuICAgICAgICAgICAgc2lnbl9pZDogW10sXG4gICAgICAgICAgICBzaWduX2lkX2FsbDogW10sXG4gICAgICAgICAgICBkZWxldF9pZDogW10sXG4gICAgICAgICAgICBkZWxldF9pZF9hbGw6IFtdLFxuICAgICAgICAgICAgYWxsX2NoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd19zaWduOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2VcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIOi3s+i9rFxuICAgICAgICAgICAganVtcF9wYWdlKGl0ZW0saW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmxpbmtQYWdlLCBpdGVtLm5vdGlmaWNhdGlvbi5kYXRhLnByb3BlcnRpZXMuaWQsIGl0ZW0ubm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbk5hbWUsIGl0ZW0uaWQsIGluZGV4LCBpdGVtLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAvLyBlMjBjMTIxMS0xOTM5LTRlYzAtYWUzMS1lNzk0NmVhZTMzZjJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdGF0ZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0Tm90aWZpY2F0aW9uQXNSZWFkKGl0ZW0uaWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLm5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuUmVjZWlwdC5XYWl0Rm9yQXNzaWduZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmxpbmtQYWdlICsgJz9pZD0nICsgaXRlbS5ub3RpZmljYXRpb24uZGF0YS5wcm9wZXJ0aWVzLmlkICsgJyZ0eXBlPTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5SZWNlaXB0LldhaXRGb3JDb25maXJtZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmxpbmtQYWdlICsgJz9pZD0nICsgaXRlbS5ub3RpZmljYXRpb24uZGF0YS5wcm9wZXJ0aWVzLmlkICsgJyZ0eXBlPTAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5SZWNlaXB0LldhaXRGb3JDbGFpbWVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5saW5rUGFnZSArICc/aWQ9JyArIGl0ZW0ubm90aWZpY2F0aW9uLmRhdGEucHJvcGVydGllcy5pZCArICcmdHlwZT0wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0ubGlua1BhZ2UgKyAnP2lkPScgKyBpdGVtLm5vdGlmaWNhdGlvbi5kYXRhLnByb3BlcnRpZXMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+WFqOmAiVxuICAgICAgICAgICAgYWxsX2NoZWNrZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfY2hlY2tlZCA9ICF0aGlzLmFsbF9jaGVja2VkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbF9jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbl9pZCA9IHRoaXMuc2lnbl9pZF9hbGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRfaWQgPSB0aGlzLmRlbGV0X2lkX2FsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduX2lkID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRfaWQgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+WNlemAiVxuICAgICAgICAgICAgc2lnbihpZCwgaW5kZXgsIHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rpc2FibGVkW2luZGV4XSA9ICF0aGlzLmlzRGlzYWJsZWRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWRbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRfaWQgPSBbLi4udGhpcy5kZWxldF9pZCwgaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduX2lkID0gWy4uLnRoaXMuc2lnbl9pZCwgaWRdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduX2lkID0gWy4uLnRoaXMuc2lnbl9pZCwgbnVsbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0X2lkLnNwbGljZSh0aGlzLmRlbGV0X2lkLmluZGV4T2YoaWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHN0YXRlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduX2lkLnNwbGljZSh0aGlzLnNpZ25faWQuaW5kZXhPZihpZCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOaJuemHj+WujOaIkFxuICAgICAgICAgICAgaXNBbGxDb21sYXRlZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93X3NpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4PTAsbGVuPXRoaXMuc2lnbl9pZC5sZW5ndGg7aW5kZXg8bGVuO2luZGV4KysgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaWduX2lkW2luZGV4XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLnB1c2godGhpcy5zaWduX2lkW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRBbGxOb3RpZmljYXRpb25zQXNSZWFkKGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTEyMycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5Yig6Zmk5o+Q6YaS5raI5oGvXG4gICAgICAgICAgICBkZWxldGVOb3RpZmljYXRpb24oaWQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dUb29scykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmmK/lkKbnoa7orqTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuIDml6bliKDpmaTlsIbml6Dms5XmgaLlpI3vvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjN2E3YTdhJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EZWxldGVVc2VyTm90aWZpY2F0aW9uKGlkLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+aJuemHj+WIoOmZpFxuICAgICAgICAgICAgRGVsZXRlVXNlck5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmmK/lkKbnoa7orqTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+S4gOaXpuWIoOmZpOWwhuaXoOazleaBouWkje+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRlbGV0ZVVzZXJOb3RpZmljYXRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dUb29scygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb29scyA9ICF0aGlzLnNob3dUb29scztcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25faWQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0X2lkID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxfY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hvd1Rvb2xzKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyTm90aWZpY2F0aW9ucyhmYWxzZSwnMCcpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFVzZXJOb3RpZmljYXRpb25zKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXVxuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBpc0Rpc2FibGVkKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFsbF9jaGVja2VkID0gdmFsdWUuZXZlcnkoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtID09IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChhbGxfY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbF9jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsX2NoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaWduX2lkKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzU2lnbiA9IHZhbHVlLmV2ZXJ5KGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9PSBudWxsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoIWlzU2lnbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dfc2lnbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93X3NpZ24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIC8v5LiK5ouJ5Yqg6L29XG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gKHRoaXMuc2tpcENvdW50KzEwKSA+IDEgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwQ291bnQgKz0gMTA7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaG93VG9vbHMpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFVzZXJOb3RpZmljYXRpb25zKHRydWUsJzAnKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyTm90aWZpY2F0aW9ucyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSl77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+S4i+aLieWIt+aWsFxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMuc2lnbl9pZCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kZWxldF9pZCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zaG93VG9vbHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuR2V0VXNlck5vdGlmaWNhdGlvbnMoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxuICAgICAgICB9XG4gICAgICAgIC8v6I635Y+W6YCa55+l5raI5oGvXG4gICAgICAgIGFzeW5jIEdldFVzZXJOb3RpZmljYXRpb25zKGlzUnJlc2gsc3RhdGU9JycpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFpc1JyZXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbl9pZCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRfaWQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldFVzZXJOb3RpZmljYXRpb25zX2RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLkVtcGxveWVlUGhvdG8gPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF9jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBtYXhSZXN1bHRDb3VudDogdGhpcy5tYXhSZXN1bHRDb3VudCxcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25OYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNraXBDb3VudDogdGhpcy5za2lwQ291bnQsXG4gICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy9hcHAvbm90aWZpY2F0aW9uL0dldFdlY2hhdE1pbmlVc2VyTm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBVc2VyTm90aWZpY2F0aW9uc19EYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0Rpc2FibGVkID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleD0wLGxlbj1Vc2VyTm90aWZpY2F0aW9uc19EYXRhLmxlbmd0aDtpbmRleDxsZW47aW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLm5vdGlmaWNhdGlvbi5jcmVhdGlvblRpbWUgPSBiZWF1dGlmeV90aW1lKFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLm5vdGlmaWNhdGlvbi5jcmVhdGlvblRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5ub3RpZmljYXRpb24ubm90aWZpY2F0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuRmluYW5jaWFsLkJpbGxpbmdzLlJldHVybmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+i0puWNlS3lt7LpgIDlm54nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9iaWxsL215QmlsbC9teUJpbGxEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5UYXNrLkNvbmZpcm1lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfku7vliqEt5bey5Y+C5LiOJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvbXlUYXNrQ291cnNlL3Rhc2tTdGFnZS90YXNrRGV0YWlsL3Rhc2tkZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5UYXNrLkNvbW1lbnQuQ3JlYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfku7vliqEt5paw5raI5oGvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvbXlUYXNrQ291cnNlL3Rhc2tTdGFnZS90YXNrRGV0YWlsL3Rhc2tkZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5Mb2cuUmV0dXJuZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5bel5L2c5pel5b+XLeW3sumAgOWbnic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL215UmVjb3JkL215TG9nZGV0YWlsL2xvZ2RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLkh1bWFuUmVzb3VyY2UuQXR0ZW5kYW5jZS5BcHByb3ZlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfor7flgYct5bey5a6h5qC4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvbXlBcHBseUxpc3QvbXlBcHBseURldGFpbC9teUFwcGx5RGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5UYXNrLldhaXRGb3JDb25maXJtZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lu75YqhLeW+heehruiupCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvbXlUYXNrQ291cnNlL3Rhc2tTdGFnZS90YXNrRGV0YWlsL3Rhc2tkZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLk1lZXRpbmcuUmVqZWN0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lya6K6uLeW3suaLkue7nSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvbXlNZWV0aW5nL21lZXRpbmdEZXRhaWwvbWVldGluZ0RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuSHVtYW5SZXNvdXJjZS5BdHRlbmRhbmNlLkNyZWF0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn6K+35YGHLeW+heWuoeaguCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvYXVkaXRNb2R1bGVzL2FwcGx5QXVkaXQvYXBwbHlBdWRpdERldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuSHVtYW5SZXNvdXJjZS5BdHRlbmRhbmNlLlJldHVybmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+ivt+WBhy3lt7LpgIDlm54nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL215QXBwbHlMaXN0L215QXBwbHlEZXRhaWwvbXlBcHBseURldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuSHVtYW5SZXNvdXJjZS5BdHRlbmRhbmNlLlJldHVybmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+ivt+WBhy3lt7LpgIDlm54nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL215QXBwbHlMaXN0L215QXBwbHlEZXRhaWwvbXlBcHBseURldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuRmluYW5jaWFsLkJpbGxpbmdzLkFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+i0puWNlS3lt7LlrqHmoLgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9iaWxsL215QmlsbC9teUJpbGxEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuQmlsbGluZ3MuQ3JlYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfotKbljZUt5b6F5aSE55CGJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvYmlsbC9tYW5hZ2VCaWxsL21hbmFnZUJpbGxEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuSW52b2ljZS5SZXR1cm5lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICflj5Hnpagt5bey6YCA5ZueJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvaW52b2ljZS9teUludm9jZS9teWludm9pY2VEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5NZWV0aW5nLkNvbmZpcm1lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfkvJrorq4t5bey5Y+C5LiOJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvbXlNZWV0aW5nL21lZXRpbmdEZXRhaWwvbWVldGluZ0RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLk1lZXRpbmcuU3RhcnRSZW1pbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lya6K6uLeWNs+WwhuW8gOWniyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL215TWVldGluZy9tZWV0aW5nRGV0YWlsL21lZXRpbmdEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuQ2hhcmdlLldhaXRGb3JBcHByb3ZlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfotLnnlKgt5b6F5a6h5qC4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvY29zdC9tYW5hZ2VDb3N0L21hbmFnZUNvc3REZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5UYXNrLkFyY2hpdmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S7u+WKoS3lt7LlvZLmoaMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9teVRhc2tDb3Vyc2UvdGFza1N0YWdlL3Rhc2tEZXRhaWwvdGFza2RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5JbnZvaWNlLkNhbmNlbGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+WPkeelqC3lt7LkvZzlup8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9pbnZvaWNlL215SW52b2NlL215aW52b2ljZURldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLk1lZXRpbmcuTWVldGluZ01pbnV0ZXNDb21wbGV0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lya6K6uLee6quimgS3lt7LlrozmiJAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9teU1lZXRpbmcvbWVldGluZ0RldGFpbC9tZWV0aW5nRGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuTG9nLkFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+W3peS9nOaXpeW/ly3lt7LlrqHmoLgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9teVJlY29yZC9teUxvZ2RldGFpbC9sb2dkZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5NZWV0aW5nLlJlbWluZGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S8muiuri3pooTorr7mj5DphpInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9teU1lZXRpbmcvbWVldGluZ0RldGFpbC9tZWV0aW5nRGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuRmluYW5jaWFsLlJlY2VpcHQuV2FpdEZvckNvbmZpcm1lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfmlLbmrL4t5b6F56Gu6K6kJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvcmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXNEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuUmVjZWlwdC5XYWl0Rm9yQ2xhaW1lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfmlLbmrL4t5b6F6K6k6aKGJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvcmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXNEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5GaW5hbmNpYWwuQ2hhcmdlLlJldHVybmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+i0ueeUqC3lt7LpgIDlm54nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9jb3N0L215Q29zdC9jb3N0RGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuTG9nLkNyZWF0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5bel5L2c5pel5b+XLeW3suWPguS4jic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL215UmVjb3JkL215TG9nZGV0YWlsL2xvZ2RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5DaGFyZ2UuQXBwcm92ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn6LS555SoLeW3suWuoeaguCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL2Nvc3QvbXlDb3N0L2Nvc3REZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5Xb3Jrcy5UYXNrLlJlamVjdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S7u+WKoS3lt7Lmi5Lnu50nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9teVRhc2tDb3Vyc2UvdGFza1N0YWdlL3Rhc2tEZXRhaWwvdGFza2RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLk1lZXRpbmcuQ3JlYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfkvJrorq4t5paw5Lya6K6uJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvbXlNZWV0aW5nL21lZXRpbmdEZXRhaWwvbWVldGluZ0RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLldvcmtzLk1lZXRpbmcuV2FpdEFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+S8muiuri3lvoXlj4LkuI4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9teU1lZXRpbmcvbWVldGluZ0RldGFpbC9tZWV0aW5nRGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuVGFzay5Db21wbGV0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Lu75YqhLeW3suWujOaIkCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL215VGFza0NvdXJzZS90YXNrU3RhZ2UvdGFza0RldGFpbC90YXNrZGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuV29ya3MuTG9nLldhaXRBcHByb3ZlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICflt6XkvZzml6Xlv5ct5b6F5a6h5qC4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvYXVkaXRNb2R1bGVzL3JlY29yZEF1ZGl0L2xvZ0RldGFpbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXBwLkZpbmFuY2lhbC5JbnZvaWNlLldhaXRGb3JSZWdpc3RlcmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+WPkeelqC3lvoXlvIDnpagnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9pbnZvaWNlL21hbmFnZUludm9jZS9tYW5hZ2VJbnZvaWNlRGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuRmluYW5jaWFsLlJlY2VpcHQuV2FpdEZvckNsYWltZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0uVGV4dFRpbGUgPSAn5Y+R56WoLeW+hemihuWPlic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5saW5rUGFnZSA9ICcuLi8uLi9tb2R1bGVzL2ludm9pY2UvbWFuYWdlSW52b2NlL21hbmFnZUludm9pY2VEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5CdXNpbmVzcy5DYXNlQ3JlYXRpb24uQ3JlYXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfnq4vmoYgt5b6F5a6h5qC4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvYXVkaXRNb2R1bGVzL2Nhc2VBdWRpdC9jYXNlRGV0YWlsQXVkaXQvY2FzZURldGFpbEF1ZGl0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuQnVzaW5lc3MuU3RhbXBGaWxlcy5SZXR1cm5lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTm90aWZpY2F0aW9uc19EYXRhW2luZGV4XS5UZXh0VGlsZSA9ICfmlofkuabmiqXlrqEt5bey6YCA5ZueJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLmxpbmtQYWdlID0gJy4uLy4uL21vZHVsZXMvYXVkaXRNb2R1bGVzL2FwcHJvdmVBdWRpdC9hcHByb3ZlRGV0YWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcHAuQnVzaW5lc3MuU3RhbXBGaWxlcy5DcmVhdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+aWh+S5puaKpeWuoS3lvoXlrqHmoLgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9hdWRpdE1vZHVsZXMvYXBwcm92ZUF1ZGl0L2FwcHJvdmVEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FwcC5CdXNpbmVzcy5TdGFtcEZpbGVzLkFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJOb3RpZmljYXRpb25zX0RhdGFbaW5kZXhdLlRleHRUaWxlID0gJ+aWh+S5puaKpeWuoS3lt7LlrqHmoLgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck5vdGlmaWNhdGlvbnNfRGF0YVtpbmRleF0ubGlua1BhZ2UgPSAnLi4vLi4vbW9kdWxlcy9hdWRpdE1vZHVsZXMvYXBwcm92ZUF1ZGl0L2FwcHJvdmVEZXRhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWRbaW5kZXhdID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFBob3RvKFVzZXJOb3RpZmljYXRpb25zX0RhdGEsIGlzUnJlc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRTdGF0ZShVc2VyTm90aWZpY2F0aW9uc19EYXRhLCBpc1JyZXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gWy4uLnRoaXMuaXNEaXNhYmxlZCwgLi4uaXNEaXNhYmxlZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyTm90aWZpY2F0aW9uc19kYXRhID0gWy4uLnRoaXMuR2V0VXNlck5vdGlmaWNhdGlvbnNfZGF0YSwgLi4uVXNlck5vdGlmaWNhdGlvbnNfRGF0YV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyTm90aWZpY2F0aW9uc19kYXRhID0gVXNlck5vdGlmaWNhdGlvbnNfRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v6I635Y+W5aS05YOPXG4gICAgICAgIGFzeW5jIEdldFBob3RvKGRhdGEsIHJlZnJlc2gpIHtcbiAgICAgICAgICAgIHZhciBhdmF0YXJEYXRhID0gW11cbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBkYXRhW2luZGV4XS5ub3RpZmljYXRpb24uZGF0YS5wcm9wZXJ0aWVzLmNyZWF0b3JVc2VySWQ7XG4gICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldFVzZXJBdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgYXZhdGFyRGF0YVtpbmRleF0gPSByZXNEYXRhLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZVBob3RvID0gWy4uLnRoaXMuRW1wbG95ZWVQaG90bywgLi4uYXZhdGFyRGF0YV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuRW1wbG95ZWVQaG90byA9IGF2YXRhckRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIEdldFN0YXRlKGRhdGEsIHJlZnJlc2gpIHtcbiAgICAgICAgICAgIHZhciBzaWduX2lkX2FsbCA9IFtdO1xuICAgICAgICAgICAgdmFyIGRlbGV0X2lkX2FsbCA9IFtdXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRfaWRfYWxsW2luZGV4XSA9IGRhdGFbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2luZGV4XS5zdGF0ZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25faWRfYWxsW2luZGV4XSA9IGRhdGFbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25faWRfYWxsW2luZGV4XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0X2lkX2FsbCA9IFsuLi50aGlzLmRlbGV0X2lkX2FsbCwgLi4uZGVsZXRfaWRfYWxsXVxuICAgICAgICAgICAgICAgIHRoaXMuc2lnbl9pZF9hbGwgPSBbLi4udGhpcy5zaWduX2lkX2FsbCwgLi4uc2lnbl9pZF9hbGxdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRfaWRfYWxsID0gZGVsZXRfaWRfYWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbl9pZF9hbGwgPSBzaWduX2lkX2FsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/moIforrBcbiAgICAgICAgYXN5bmMgU2V0Tm90aWZpY2F0aW9uQXNSZWFkKGlkLCBpbmRleCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0VXNlck5vdGlmaWNhdGlvbnNfZGF0YVtpbmRleF0uc3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL2FwcC9ub3RpZmljYXRpb24vU2V0Tm90aWZpY2F0aW9uQXNSZWFkJyxcbiAgICAgICAgICAgICAgICAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WujOaIkCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/mibnph4/moIforrBcbiAgICAgICAgYXN5bmMgU2V0QWxsTm90aWZpY2F0aW9uc0FzUmVhZChpZCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbl9pZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0X2lkID0gW107XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFVzZXJOb3RpZmljYXRpb25zKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL2FwcC9ub3RpZmljYXRpb24vU2V0Tm90aWZpY2F0aW9uc0FzUmVhZCcsXG4gICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+WIoOmZpOa2iOaBr1xuICAgICAgICBhc3luYyBEZWxldGVVc2VyTm90aWZpY2F0aW9uKGlkLCBpbmRleCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0VXNlck5vdGlmaWNhdGlvbnNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkVtcGxveWVlUGhvdG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Rpc2FibGVkLnNwbGljZShpbmRleCwgMSk7O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0X2lkX2FsbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25faWRfYWxsLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvYXBwL25vdGlmaWNhdGlvbi9EZWxldGVVc2VyTm90aWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIoOmZpOaIkOWKnycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/mibnph4/liKDpmaRcbiAgICAgICAgYXN5bmMgRGVsZXRlVXNlck5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyTm90aWZpY2F0aW9ucyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGVsZXRfaWRcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL2FwcC9ub3RpZmljYXRpb24vRGVsZXRlVXNlck5vdGlmaWNhdGlvbnMnLFxuICAgICAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihyZXNEYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflpJrpgInliKDpmaTlrozmiJAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0VXNlck5vdGlmaWNhdGlvbnMoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=