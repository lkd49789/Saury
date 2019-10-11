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

var clientDetail = function (_wepy$page) {
    _inherits(clientDetail, _wepy$page);

    function clientDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            items: [{
                name: 'D',
                value: '完善中',
                checked: 'true'
            }, {
                name: 'A',
                value: '已完善，不可修改'
            }],
            id: '',
            meetingData: {},
            userId: 0,
            noParticipate: false, //不参与弹框
            participate: false, //参与弹框
            isParticipate: false, //是否参与
            participated: false,
            remarkValue: '', //是否参与原因数据
            radioStatus: 'D', //单选选中的值
            TextCount: 0
        }, _this.methods = {
            // 保存会议纪要
            comfirmRcord: function comfirmRcord() {
                if (this.remarkValue) {
                    this.CreateOrUpdateMeetingMinutes();
                } else {
                    wx.showToast({
                        title: '备注原因不能为空！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                }
            },

            //单元框赋值
            radioChange: function radioChange(e) {
                this.radioStatus = e.detail.value;
                this.$apply();
            },

            // 失去焦点
            bindinput: function bindinput(e) {
                this.remarkValue = e.detail.value;
                this.$apply();
            },

            //参与
            comfirmParticipation: function comfirmParticipation() {
                if (this.remarkValue) {
                    this.ConfirmMeetingParticipant('C');
                } else {
                    wx.showToast({
                        title: '备注原因不能为空！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                }
            },

            //不参与
            comfirmNoParticipation: function comfirmNoParticipation() {
                if (this.remarkValue) {
                    this.ConfirmMeetingParticipant('R');
                } else {
                    wx.showToast({
                        title: '备注原因不能为空！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                }
            },

            // 显示隐藏完善会议纪要弹窗
            meetingRcord: function meetingRcord() {
                this.remarkValue = '';
                this.meetingRcord = !this.meetingRcord;
                this.recordSummary = !this.recordSummary;
            },

            //显示
            noParticipation: function noParticipation() {
                // this.remarkValue = '';
                this.remarkValue = '';
                this.noParticipate = !this.noParticipate;
                // this.waitAffirm = !this.waitAffirm;
                this.$apply();
            },
            participate: function participate() {
                // this.remarkValue = '';
                this.remarkValue = "";
                this.participate = !this.participate;
                this.$apply();
                // this.waitAffirm = !this.waitAffirm;
            },
            preview: function preview(id, fileClass) {
                var http = '/api/services/web/meetingAttachment/GetDocumentFile?id=' + id;
                _ajax2.default.preView(http, fileClass);
            },
            previewDoc: function previewDoc(id, fileClass) {
                var http = '/api/services/web/meeting/GetMeetingMinutesFile?id=' + id;
                _ajax2.default.preView(http, fileClass);
            }
        }, _this.watch = {
            remarkValue: function remarkValue(value) {
                this.TextCount = value.length;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'GetMeeting',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, meetingData, mhttp, moderatorAvatar, lhttp, linkerAvatar, startTime, endTime, start_Time, start, end_Time, end, index, attachmentList, iconfont, pindex, participantList, phttp, participantAvatar;
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
                                    id: this.id
                                };
                                _context.next = 4;
                                return _ajax2.default.getData('/api/services/web/meeting/GetMeeting', 'post', data);

                            case 4:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 8 : _context.t0 === 403 ? 109 : _context.t0 === 500 ? 114 : 118;
                                break;

                            case 8:
                                if (!resData.data.result) {
                                    _context.next = 104;
                                    break;
                                }

                                meetingData = resData.data.result;
                                //主持人头像

                                if (!meetingData.moderator) {
                                    _context.next = 16;
                                    break;
                                }

                                mhttp = '/api/services/web/personal/GetEmployeePhoto?id=' + meetingData.moderator;
                                _context.next = 14;
                                return _ajax2.default.getUserAvatar(mhttp);

                            case 14:
                                moderatorAvatar = _context.sent;

                                meetingData.moderatorAvatar = moderatorAvatar.tempFilePath;

                            case 16:
                                if (!meetingData.linker) {
                                    _context.next = 22;
                                    break;
                                }

                                lhttp = '/api/services/web/personal/GetEmployeePhoto?id=' + meetingData.linker;
                                _context.next = 20;
                                return _ajax2.default.getUserAvatar(lhttp);

                            case 20:
                                linkerAvatar = _context.sent;

                                meetingData.linkerAvatar = linkerAvatar.tempFilePath;

                            case 22:
                                // 是否标记
                                if (meetingData.isMark) {
                                    meetingData.isMark = meetingData.isMark.replace(/\s+/g, "");
                                }
                                if (meetingData.privacy) {
                                    meetingData.privacy = meetingData.privacy.replace(/\s+/g, "");
                                }
                                // //开始结束时间
                                startTime = meetingData.startTime;
                                endTime = meetingData.endTime;
                                start_Time = (0, _api.formatDate)(startTime);
                                start = {};
                                end_Time = (0, _api.formatDate)(endTime);
                                end = {};

                                start.Y = start_Time[0] + '/' + start_Time[1] + '/' + start_Time[2];
                                start.M = start_Time[3] + ':' + start_Time[4];
                                end.M = end_Time[3] + ':' + end_Time[4];
                                meetingData.startTime = start;
                                meetingData.endTime = end;
                                //相隔时间
                                meetingData.diffTime = (new Date(new Date(endTime).getTime() - new Date(startTime).getTime()) / 3600000).toFixed();
                                //确认状态
                                _context.t1 = meetingData.status;
                                _context.next = _context.t1 === 'D' ? 39 : _context.t1 === 'C' ? 41 : _context.t1 === 'A' ? 43 : 45;
                                break;

                            case 39:
                                meetingData['statusColor'] = "#ff9900";
                                return _context.abrupt('break', 47);

                            case 41:
                                meetingData['statusColor'] = "#009dff";
                                return _context.abrupt('break', 47);

                            case 43:
                                meetingData['statusColor'] = "#069400";
                                return _context.abrupt('break', 47);

                            case 45:
                                meetingData['statusColor'] = "#ff9900";
                                return _context.abrupt('break', 47);

                            case 47:
                                _context.t2 = regeneratorRuntime.keys(meetingData.attachmentList);

                            case 48:
                                if ((_context.t3 = _context.t2()).done) {
                                    _context.next = 88;
                                    break;
                                }

                                index = _context.t3.value;
                                attachmentList = meetingData.attachmentList;
                                _context.t4 = attachmentList[index].extension;
                                _context.next = _context.t4 === '.pdf' ? 54 : _context.t4 === '.ppt' ? 57 : _context.t4 === '.pptx' ? 60 : _context.t4 === '.png' ? 64 : _context.t4 === '.docx' ? 68 : _context.t4 === '.doc' ? 71 : _context.t4 === '.xls' ? 74 : _context.t4 === '.xlsx' ? 77 : _context.t4 === '.jpg' ? 80 : 83;
                                break;

                            case 54:
                                attachmentList[index]['icon'] = 'icon-pdfpng1';
                                attachmentList[index]['color'] = '#e20000';
                                return _context.abrupt('break', 86);

                            case 57:
                                attachmentList[index]['icon'] = 'icon-pdfpng1';
                                attachmentList[index]['color'] = '#e20000';
                                return _context.abrupt('break', 86);

                            case 60:
                                iconfont = {};

                                attachmentList[index]['icon'] = 'icon-pdfpng1';
                                attachmentList[index]['color'] = '#e20000';
                                return _context.abrupt('break', 86);

                            case 64:
                                iconfont = {};

                                attachmentList[index]['icon'] = 'icon-pdfpng1';
                                attachmentList[index]['color'] = '#e20000';
                                return _context.abrupt('break', 86);

                            case 68:
                                attachmentList[index]['icon'] = 'icon-wold1';
                                attachmentList[index]['color'] = '#009dff';
                                return _context.abrupt('break', 86);

                            case 71:
                                attachmentList[index]['icon'] = 'icon-wold1';
                                attachmentList[index]['color'] = '#009dff';
                                return _context.abrupt('break', 86);

                            case 74:
                                attachmentList[index]['icon'] = 'icon-exl1';
                                attachmentList[index]['color'] = '#069400';
                                return _context.abrupt('break', 86);

                            case 77:
                                attachmentList[index]['icon'] = 'icon-exl1';
                                attachmentList[index]['color'] = '#069400';
                                return _context.abrupt('break', 86);

                            case 80:
                                attachmentList[index]['icon'] = 'icon-jpggeshi';
                                attachmentList[index]['color'] = '#ff9900';
                                return _context.abrupt('break', 86);

                            case 83:
                                attachmentList[index]['icon'] = 'icon-weizhiwenjiangeshi';
                                attachmentList[index]['color'] = '#7a7a7a';
                                return _context.abrupt('break', 86);

                            case 86:
                                _context.next = 48;
                                break;

                            case 88:
                                _context.t5 = regeneratorRuntime.keys(meetingData.participantList);

                            case 89:
                                if ((_context.t6 = _context.t5()).done) {
                                    _context.next = 100;
                                    break;
                                }

                                pindex = _context.t6.value;

                                if (meetingData.participantList[pindex].employeeId == this.userId) {
                                    if (meetingData.participantList[pindex].status == 'N' && meetingData.status !== 'A') {
                                        this.isParticipate = true;
                                    } else if (meetingData.participantList[pindex].status == 'A') {
                                        this.isParticipate = false;
                                    }
                                }
                                participantList = meetingData.participantList[pindex];
                                phttp = '/api/services/web/personal/GetEmployeePhoto?id=' + participantList.employeeId;
                                _context.next = 96;
                                return _ajax2.default.getUserAvatar(phttp);

                            case 96:
                                participantAvatar = _context.sent;

                                participantList.Avatar = participantAvatar.tempFilePath;
                                _context.next = 89;
                                break;

                            case 100:
                                //会议室风格
                                if (meetingData.meetingRoom.styleText.length !== 0) {
                                    meetingData.meetingRoom.styleText = meetingData.meetingRoom.styleText.split(',');
                                    meetingData.meetingRoom.equipmentText = meetingData.meetingRoom.equipmentText.split(',');
                                } else {
                                    meetingData.meetingRoom.styleText = ['未填写'];
                                    meetingData.meetingRoom.equipmentText = ['未填写'];
                                }
                                //原因
                                // this.remarkValue=meetingData.remark;
                                this.meetingData = meetingData;
                                _context.next = 107;
                                break;

                            case 104:
                                console.log('数据为空');
                                this.placeHolder.placeHolderImageIndex = 0;
                                this.placeHolder.placeHolderShow = true;

                            case 107:
                                this.$apply();
                                return _context.abrupt('break', 119);

                            case 109:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 119);

                            case 114:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 118:
                                return _context.abrupt('break', 119);

                            case 119:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetMeeting() {
                return _ref2.apply(this, arguments);
            }

            return GetMeeting;
        }()
        // 是否参与

    }, {
        key: 'ConfirmMeetingParticipant',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(status) {
                var _this2 = this;

                var data, resData, isRefresh;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.isParticipate = false;
                                        _this2.noParticipate = false;
                                        _this2.participate = false;
                                        _this2.$apply();
                                    }
                                });
                                data = {
                                    EmployeeId: this.userId,
                                    MeetingId: this.id,
                                    Remark: this.remarkValue,
                                    Status: status
                                };
                                _context2.next = 4;
                                return _ajax2.default.getData('/api/services/web/meetingParticipant/ConfirmMeetingParticipant', 'post', data);

                            case 4:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    wx.showToast({
                                        title: '操作完成',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                    isRefresh = wx.getStorageSync('isRefresh');

                                    isRefresh.isRefresh = true;
                                    wx.setStorageSync('isRefresh', isRefresh);
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function ConfirmMeetingParticipant(_x) {
                return _ref3.apply(this, arguments);
            }

            return ConfirmMeetingParticipant;
        }()
        //完善提交会议日志

    }, {
        key: 'CreateOrUpdateMeetingMinutes',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var data, res, isRefresh;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    Id: this.id,
                                    Status: this.radioStatus,
                                    Summary: this.remarkValue
                                };
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/meeting/CreateOrUpdateMeetingMinutes', 'post', data);

                            case 3:
                                res = _context3.sent;

                                if (res.statusCode == 200) {
                                    isRefresh = wx.getStorageSync('isRefresh');

                                    isRefresh.isRefresh = true;
                                    wx.setStorageSync('isRefresh', isRefresh);
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function CreateOrUpdateMeetingMinutes() {
                return _ref4.apply(this, arguments);
            }

            return CreateOrUpdateMeetingMinutes;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.id = options.id;
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            if (this.$parent.global.userInfo.id) {
                this.userId = this.$parent.global.userInfo.id.toString();
            }
            this.GetMeeting();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myMeeting/meetingDetail/meetingDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmdEZXRhaWwuanMiXSwibmFtZXMiOlsiY2xpZW50RGV0YWlsIiwiY29tcG9uZW50cyIsImRhdGEiLCJpdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJpZCIsIm1lZXRpbmdEYXRhIiwidXNlcklkIiwibm9QYXJ0aWNpcGF0ZSIsInBhcnRpY2lwYXRlIiwiaXNQYXJ0aWNpcGF0ZSIsInBhcnRpY2lwYXRlZCIsInJlbWFya1ZhbHVlIiwicmFkaW9TdGF0dXMiLCJUZXh0Q291bnQiLCJtZXRob2RzIiwiY29tZmlybVJjb3JkIiwiQ3JlYXRlT3JVcGRhdGVNZWV0aW5nTWludXRlcyIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwicmFkaW9DaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwiYmluZGlucHV0IiwiY29tZmlybVBhcnRpY2lwYXRpb24iLCJDb25maXJtTWVldGluZ1BhcnRpY2lwYW50IiwiY29tZmlybU5vUGFydGljaXBhdGlvbiIsIm1lZXRpbmdSY29yZCIsInJlY29yZFN1bW1hcnkiLCJub1BhcnRpY2lwYXRpb24iLCJwcmV2aWV3IiwiZmlsZUNsYXNzIiwiaHR0cCIsImFqYXgiLCJwcmVWaWV3IiwicHJldmlld0RvYyIsIndhdGNoIiwibGVuZ3RoIiwic2hvd0xvYWRpbmciLCJzdWNjZXNzIiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwibW9kZXJhdG9yIiwibWh0dHAiLCJnZXRVc2VyQXZhdGFyIiwibW9kZXJhdG9yQXZhdGFyIiwidGVtcEZpbGVQYXRoIiwibGlua2VyIiwibGh0dHAiLCJsaW5rZXJBdmF0YXIiLCJpc01hcmsiLCJyZXBsYWNlIiwicHJpdmFjeSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJzdGFydF9UaW1lIiwic3RhcnQiLCJlbmRfVGltZSIsImVuZCIsIlkiLCJNIiwiZGlmZlRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRvRml4ZWQiLCJzdGF0dXMiLCJhdHRhY2htZW50TGlzdCIsImluZGV4IiwiZXh0ZW5zaW9uIiwiaWNvbmZvbnQiLCJwYXJ0aWNpcGFudExpc3QiLCJwaW5kZXgiLCJlbXBsb3llZUlkIiwicGh0dHAiLCJwYXJ0aWNpcGFudEF2YXRhciIsIkF2YXRhciIsIm1lZXRpbmdSb29tIiwic3R5bGVUZXh0Iiwic3BsaXQiLCJlcXVpcG1lbnRUZXh0IiwiY29uc29sZSIsImxvZyIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwiRW1wbG95ZWVJZCIsIk1lZXRpbmdJZCIsIlJlbWFyayIsIlN0YXR1cyIsImlzUmVmcmVzaCIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIklkIiwiU3VtbWFyeSIsInJlcyIsIm9wdGlvbnMiLCIkcGFyZW50IiwiZ2xvYmFsIiwidXNlckluZm8iLCJ0b1N0cmluZyIsIkdldE1lZXRpbmciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0hDLG1CQUFPLENBQUM7QUFDQUMsc0JBQU0sR0FETjtBQUVBQyx1QkFBTyxLQUZQO0FBR0FDLHlCQUFTO0FBSFQsYUFBRCxFQUtIO0FBQ0lGLHNCQUFNLEdBRFY7QUFFSUMsdUJBQU87QUFGWCxhQUxHLENBREo7QUFXSEUsZ0JBQUksRUFYRDtBQVlIQyx5QkFBYSxFQVpWO0FBYUhDLG9CQUFRLENBYkw7QUFjSEMsMkJBQWUsS0FkWixFQWNtQjtBQUN0QkMseUJBQWEsS0FmVixFQWVpQjtBQUNwQkMsMkJBQWUsS0FoQlosRUFnQm1CO0FBQ3RCQywwQkFBYSxLQWpCVjtBQWtCSEMseUJBQWEsRUFsQlYsRUFrQmM7QUFDakJDLHlCQUFhLEdBbkJWLEVBbUJlO0FBQ2xCQyx1QkFBVTtBQXBCUCxTLFFBc0JQQyxPLEdBQVU7QUFDTjtBQUNBQyx3QkFGTSwwQkFFUztBQUNYLG9CQUFJLEtBQUtKLFdBQVQsRUFBc0I7QUFDbEIseUJBQUtLLDRCQUFMO0FBQ0gsaUJBRkQsTUFFTztBQUNIQyx1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPLFdBREU7QUFFVEMsOEJBQU0sTUFGRztBQUdUQyxrQ0FBVSxJQUhEO0FBSVRDLDhCQUFNO0FBSkcscUJBQWI7QUFNSDtBQUNKLGFBYks7O0FBY047QUFDQUMsdUJBZk0sdUJBZU1DLENBZk4sRUFlUztBQUNYLHFCQUFLWixXQUFMLEdBQW1CWSxFQUFFQyxNQUFGLENBQVN2QixLQUE1QjtBQUNBLHFCQUFLd0IsTUFBTDtBQUNILGFBbEJLOztBQW1CTjtBQUNBQyxxQkFwQk0scUJBb0JJSCxDQXBCSixFQW9CTztBQUNULHFCQUFLYixXQUFMLEdBQW1CYSxFQUFFQyxNQUFGLENBQVN2QixLQUE1QjtBQUNBLHFCQUFLd0IsTUFBTDtBQUNILGFBdkJLOztBQXdCTjtBQUNBRSxnQ0F6Qk0sa0NBeUJpQjtBQUNuQixvQkFBSSxLQUFLakIsV0FBVCxFQUFzQjtBQUNsQix5QkFBS2tCLHlCQUFMLENBQStCLEdBQS9CO0FBQ0gsaUJBRkQsTUFFTztBQUNIWix1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPLFdBREU7QUFFVEMsOEJBQU0sTUFGRztBQUdUQyxrQ0FBVSxJQUhEO0FBSVRDLDhCQUFNO0FBSkcscUJBQWI7QUFNSDtBQUNKLGFBcENLOztBQXFDTjtBQUNBUSxrQ0F0Q00sb0NBc0NtQjtBQUNyQixvQkFBSSxLQUFLbkIsV0FBVCxFQUFzQjtBQUNsQix5QkFBS2tCLHlCQUFMLENBQStCLEdBQS9CO0FBQ0gsaUJBRkQsTUFFTztBQUNIWix1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPLFdBREU7QUFFVEMsOEJBQU0sTUFGRztBQUdUQyxrQ0FBVSxJQUhEO0FBSVRDLDhCQUFNO0FBSkcscUJBQWI7QUFNSDtBQUNKLGFBakRLOztBQWtETjtBQUNBUyx3QkFuRE0sMEJBbURTO0FBQ1gscUJBQUtwQixXQUFMLEdBQW1CLEVBQW5CO0FBQ0EscUJBQUtvQixZQUFMLEdBQW9CLENBQUMsS0FBS0EsWUFBMUI7QUFDQSxxQkFBS0MsYUFBTCxHQUFxQixDQUFDLEtBQUtBLGFBQTNCO0FBQ0gsYUF2REs7O0FBd0ROO0FBQ0FDLDJCQXpETSw2QkF5RFk7QUFDZDtBQUNBLHFCQUFLdEIsV0FBTCxHQUFpQixFQUFqQjtBQUNBLHFCQUFLSixhQUFMLEdBQXFCLENBQUMsS0FBS0EsYUFBM0I7QUFDQTtBQUNBLHFCQUFLbUIsTUFBTDtBQUNILGFBL0RLO0FBZ0VObEIsdUJBaEVNLHlCQWdFUTtBQUNWO0FBQ0EscUJBQUtHLFdBQUwsR0FBaUIsRUFBakI7QUFDQSxxQkFBS0gsV0FBTCxHQUFtQixDQUFDLEtBQUtBLFdBQXpCO0FBQ0EscUJBQUtrQixNQUFMO0FBQ0E7QUFDSCxhQXRFSztBQXVFTlEsbUJBdkVNLG1CQXVFRTlCLEVBdkVGLEVBdUVNK0IsU0F2RU4sRUF1RWlCO0FBQ25CLG9CQUFJQyxPQUFPLDREQUE0RGhDLEVBQXZFO0FBQ0FpQywrQkFBS0MsT0FBTCxDQUFhRixJQUFiLEVBQW1CRCxTQUFuQjtBQUNILGFBMUVLO0FBMkVOSSxzQkEzRU0sc0JBMkVLbkMsRUEzRUwsRUEyRVMrQixTQTNFVCxFQTJFb0I7QUFDdEIsb0JBQUlDLE9BQU8sd0RBQXdEaEMsRUFBbkU7QUFDQWlDLCtCQUFLQyxPQUFMLENBQWFGLElBQWIsRUFBbUJELFNBQW5CO0FBQ0g7QUE5RUssUyxRQWdGVkssSyxHQUFNO0FBQ0Y3Qix1QkFERSx1QkFDVVQsS0FEVixFQUNnQjtBQUNkLHFCQUFLVyxTQUFMLEdBQWVYLE1BQU11QyxNQUFyQjtBQUNIO0FBSEMsUzs7Ozs7Ozs7Ozs7O0FBTUZ4QixtQ0FBR3lCLFdBQUgsQ0FBZTtBQUNidkIsMkNBQU8sWUFETSxFQUNRO0FBQ3JCRywwQ0FBTSxJQUZPLEVBRUQ7QUFDWnFCLDZDQUFTLHNCQUFPLENBQUU7QUFITCxpQ0FBZjtBQUtJNUMsb0MsR0FBTztBQUNQSyx3Q0FBSSxLQUFLQTtBQURGLGlDOzt1Q0FHU2lDLGVBQUtPLE9BQUwsQ0FDaEIsc0NBRGdCLEVBRWhCLE1BRmdCLEVBR2hCN0MsSUFIZ0IsQzs7O0FBQWhCOEMsdUM7OENBTUlBLFFBQVFDLFU7Z0VBQ1AsRyx1QkF3SUEsRyx5QkFNQSxHOzs7O3FDQTdJR0QsUUFBUTlDLElBQVIsQ0FBYWdELE07Ozs7O0FBQ1QxQywyQyxHQUFjd0MsUUFBUTlDLElBQVIsQ0FBYWdELE07QUFDL0I7O3FDQUNHMUMsWUFBWTJDLFM7Ozs7O0FBQ1BDLHFDLEdBQVEsb0RBQW9ENUMsWUFBWTJDLFM7O3VDQUNuRFgsZUFBS2EsYUFBTCxDQUFtQkQsS0FBbkIsQzs7O0FBQXRCRSwrQzs7QUFDRjlDLDRDQUFZOEMsZUFBWixHQUE0QkEsZ0JBQWdCQyxZQUE1Qzs7O3FDQUdGL0MsWUFBWWdELE07Ozs7O0FBQ1BDLHFDLEdBQVEsb0RBQW9EakQsWUFBWWdELE07O3VDQUNyRGhCLGVBQUthLGFBQUwsQ0FBbUJJLEtBQW5CLEM7OztBQUFuQkMsNEM7O0FBQ0psRCw0Q0FBWWtELFlBQVosR0FBeUJBLGFBQWFILFlBQXRDOzs7QUFFSjtBQUNBLG9DQUFHL0MsWUFBWW1ELE1BQWYsRUFBc0I7QUFDakJuRCxnREFBWW1ELE1BQVosR0FBcUJuRCxZQUFZbUQsTUFBWixDQUFtQkMsT0FBbkIsQ0FBMkIsTUFBM0IsRUFBbUMsRUFBbkMsQ0FBckI7QUFFSjtBQUNELG9DQUFJcEQsWUFBWXFELE9BQWhCLEVBQXdCO0FBQ25CckQsZ0RBQVlxRCxPQUFaLEdBQXNCckQsWUFBWXFELE9BQVosQ0FBb0JELE9BQXBCLENBQTRCLE1BQTVCLEVBQW9DLEVBQXBDLENBQXRCO0FBQ0o7QUFDRDtBQUNJRSx5QyxHQUFVdEQsWUFBWXNELFM7QUFDdEJDLHVDLEdBQVF2RCxZQUFZdUQsTztBQUNwQkMsMEMsR0FBYSxxQkFBV0YsU0FBWCxDO0FBQ2JHLHFDLEdBQVEsRTtBQUNSQyx3QyxHQUFXLHFCQUFXSCxPQUFYLEM7QUFDWEksbUMsR0FBTSxFOztBQUNWRixzQ0FBTUcsQ0FBTixHQUFTSixXQUFXLENBQVgsSUFBZ0IsR0FBaEIsR0FBc0JBLFdBQVcsQ0FBWCxDQUF0QixHQUFzQyxHQUF0QyxHQUE0Q0EsV0FBVyxDQUFYLENBQXJEO0FBQ0FDLHNDQUFNSSxDQUFOLEdBQVVMLFdBQVcsQ0FBWCxJQUFnQixHQUFoQixHQUFzQkEsV0FBVyxDQUFYLENBQWhDO0FBQ0FHLG9DQUFJRSxDQUFKLEdBQVFILFNBQVMsQ0FBVCxJQUFjLEdBQWQsR0FBb0JBLFNBQVMsQ0FBVCxDQUE1QjtBQUNBMUQsNENBQVlzRCxTQUFaLEdBQXdCRyxLQUF4QjtBQUNBekQsNENBQVl1RCxPQUFaLEdBQXNCSSxHQUF0QjtBQUNBO0FBQ0EzRCw0Q0FBWThELFFBQVosR0FBcUIsQ0FBQyxJQUFJQyxJQUFKLENBQVMsSUFBSUEsSUFBSixDQUFTUixPQUFULEVBQWtCUyxPQUFsQixLQUE0QixJQUFJRCxJQUFKLENBQVNULFNBQVQsRUFBb0JVLE9BQXBCLEVBQXJDLElBQW9FLE9BQXJFLEVBQThFQyxPQUE5RSxFQUFyQjtBQUNBOzhDQUNRakUsWUFBWWtFLE07Z0VBQ1gsRyx3QkFHQSxHLHdCQUdBLEc7Ozs7QUFMRGxFLDRDQUFZLGFBQVosSUFBNkIsU0FBN0I7Ozs7QUFHQUEsNENBQVksYUFBWixJQUE2QixTQUE3Qjs7OztBQUdBQSw0Q0FBWSxhQUFaLElBQTZCLFNBQTdCOzs7O0FBR0FBLDRDQUFZLGFBQVosSUFBNkIsU0FBN0I7Ozs7c0VBSVVBLFlBQVltRSxjOzs7Ozs7OztBQUFyQkMscUM7QUFDREQsOEMsR0FBaUJuRSxZQUFZbUUsYzs4Q0FDekJBLGVBQWVDLEtBQWYsRUFBc0JDLFM7Z0VBQ3JCLE0sd0JBSUEsTSx3QkFJQSxPLHdCQUtBLE0sd0JBS0EsTyx3QkFJQSxNLHdCQUlBLE0sd0JBSUEsTyx3QkFJQSxNOzs7O0FBakNERiwrQ0FBZUMsS0FBZixFQUFzQixNQUF0QixJQUFnQyxjQUFoQztBQUNBRCwrQ0FBZUMsS0FBZixFQUFzQixPQUF0QixJQUFpQyxTQUFqQzs7OztBQUdBRCwrQ0FBZUMsS0FBZixFQUFzQixNQUF0QixJQUFnQyxjQUFoQztBQUNBRCwrQ0FBZUMsS0FBZixFQUFzQixPQUF0QixJQUFpQyxTQUFqQzs7OztBQUdJRSx3QyxHQUFXLEU7O0FBQ2ZILCtDQUFlQyxLQUFmLEVBQXNCLE1BQXRCLElBQWdDLGNBQWhDO0FBQ0FELCtDQUFlQyxLQUFmLEVBQXNCLE9BQXRCLElBQWlDLFNBQWpDOzs7O0FBR0lFLHdDLEdBQVcsRTs7QUFDZkgsK0NBQWVDLEtBQWYsRUFBc0IsTUFBdEIsSUFBZ0MsY0FBaEM7QUFDQUQsK0NBQWVDLEtBQWYsRUFBc0IsT0FBdEIsSUFBaUMsU0FBakM7Ozs7QUFHQUQsK0NBQWVDLEtBQWYsRUFBc0IsTUFBdEIsSUFBZ0MsWUFBaEM7QUFDQUQsK0NBQWVDLEtBQWYsRUFBc0IsT0FBdEIsSUFBaUMsU0FBakM7Ozs7QUFHQUQsK0NBQWVDLEtBQWYsRUFBc0IsTUFBdEIsSUFBZ0MsWUFBaEM7QUFDQUQsK0NBQWVDLEtBQWYsRUFBc0IsT0FBdEIsSUFBaUMsU0FBakM7Ozs7QUFHQUQsK0NBQWVDLEtBQWYsRUFBc0IsTUFBdEIsSUFBZ0MsV0FBaEM7QUFDQUQsK0NBQWVDLEtBQWYsRUFBc0IsT0FBdEIsSUFBaUMsU0FBakM7Ozs7QUFHQUQsK0NBQWVDLEtBQWYsRUFBc0IsTUFBdEIsSUFBZ0MsV0FBaEM7QUFDQUQsK0NBQWVDLEtBQWYsRUFBc0IsT0FBdEIsSUFBaUMsU0FBakM7Ozs7QUFHQUQsK0NBQWVDLEtBQWYsRUFBc0IsTUFBdEIsSUFBZ0MsZUFBaEM7QUFDQUQsK0NBQWVDLEtBQWYsRUFBc0IsT0FBdEIsSUFBaUMsU0FBakM7Ozs7QUFPQUQsK0NBQWVDLEtBQWYsRUFBc0IsTUFBdEIsSUFBZ0MseUJBQWhDO0FBQ0FELCtDQUFlQyxLQUFmLEVBQXNCLE9BQXRCLElBQWlDLFNBQWpDOzs7Ozs7OztzRUFLT3BFLFlBQVl1RSxlOzs7Ozs7OztBQUF0QkMsc0M7O0FBQ0wsb0NBQUd4RSxZQUFZdUUsZUFBWixDQUE0QkMsTUFBNUIsRUFBb0NDLFVBQXBDLElBQWdELEtBQUt4RSxNQUF4RCxFQUErRDtBQUMzRCx3Q0FBR0QsWUFBWXVFLGVBQVosQ0FBNEJDLE1BQTVCLEVBQW9DTixNQUFwQyxJQUE0QyxHQUE1QyxJQUFpRGxFLFlBQVlrRSxNQUFaLEtBQXFCLEdBQXpFLEVBQTZFO0FBQ3pFLDZDQUFLOUQsYUFBTCxHQUFtQixJQUFuQjtBQUNILHFDQUZELE1BRU0sSUFBR0osWUFBWXVFLGVBQVosQ0FBNEJDLE1BQTVCLEVBQW9DTixNQUFwQyxJQUE0QyxHQUEvQyxFQUFtRDtBQUNyRCw2Q0FBSzlELGFBQUwsR0FBbUIsS0FBbkI7QUFDSDtBQUNKO0FBQ0dtRSwrQyxHQUFrQnZFLFlBQVl1RSxlQUFaLENBQTRCQyxNQUE1QixDO0FBQ2xCRSxxQyxHQUFRLG9EQUFvREgsZ0JBQWdCRSxVOzt1Q0FDbER6QyxlQUFLYSxhQUFMLENBQW1CNkIsS0FBbkIsQzs7O0FBQTFCQyxpRDs7QUFDSkosZ0RBQWdCSyxNQUFoQixHQUF5QkQsa0JBQWtCNUIsWUFBM0M7Ozs7O0FBRUo7QUFDQSxvQ0FBRy9DLFlBQVk2RSxXQUFaLENBQXdCQyxTQUF4QixDQUFrQzFDLE1BQWxDLEtBQTJDLENBQTlDLEVBQWdEO0FBQzVDcEMsZ0RBQVk2RSxXQUFaLENBQXdCQyxTQUF4QixHQUFrQzlFLFlBQVk2RSxXQUFaLENBQXdCQyxTQUF4QixDQUFrQ0MsS0FBbEMsQ0FBd0MsR0FBeEMsQ0FBbEM7QUFDQS9FLGdEQUFZNkUsV0FBWixDQUF3QkcsYUFBeEIsR0FBc0NoRixZQUFZNkUsV0FBWixDQUF3QkcsYUFBeEIsQ0FBc0NELEtBQXRDLENBQTRDLEdBQTVDLENBQXRDO0FBQ0gsaUNBSEQsTUFHSztBQUNEL0UsZ0RBQVk2RSxXQUFaLENBQXdCQyxTQUF4QixHQUFrQyxDQUFDLEtBQUQsQ0FBbEM7QUFDQTlFLGdEQUFZNkUsV0FBWixDQUF3QkcsYUFBeEIsR0FBc0MsQ0FBQyxLQUFELENBQXRDO0FBQ0g7QUFDRDtBQUNBO0FBQ0EscUNBQUtoRixXQUFMLEdBQW1CQSxXQUFuQjs7Ozs7QUFFQWlGLHdDQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLHFDQUFLQyxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7OztBQUVKLHFDQUFLaEUsTUFBTDs7OztBQUdBNEQsd0NBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EscUNBQUtDLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLaEUsTUFBTDs7OztBQUdBNEQsd0NBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EscUNBQUtDLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLaEUsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtaOzs7OztrR0FDZ0M2QyxNOzs7Ozs7OztBQUM1QnRELG1DQUFHeUIsV0FBSCxDQUFlO0FBQ1h2QiwyQ0FBTyxVQURJLEVBQ1E7QUFDbkJHLDBDQUFNLElBRkssRUFFQztBQUNacUIsNkNBQVEsbUJBQUk7QUFDWiwrQ0FBS2xDLGFBQUwsR0FBbUIsS0FBbkI7QUFDQSwrQ0FBS0YsYUFBTCxHQUFxQixLQUFyQjtBQUNBLCtDQUFLQyxXQUFMLEdBQWlCLEtBQWpCO0FBQ0EsK0NBQUtrQixNQUFMO0FBQ0M7QUFSVSxpQ0FBZjtBQVVJM0Isb0MsR0FBTztBQUNQNEYsZ0RBQVksS0FBS3JGLE1BRFY7QUFFUHNGLCtDQUFXLEtBQUt4RixFQUZUO0FBR1B5Riw0Q0FBUSxLQUFLbEYsV0FITjtBQUlQbUYsNENBQVF2QjtBQUpELGlDOzt1Q0FNU2xDLGVBQUtPLE9BQUwsQ0FDaEIsZ0VBRGdCLEVBRWhCLE1BRmdCLEVBR2hCN0MsSUFIZ0IsQzs7O0FBQWhCOEMsdUM7O0FBS0osb0NBQUlBLFFBQVFDLFVBQVIsSUFBc0IsR0FBMUIsRUFBK0I7QUFDMUI3Qix1Q0FBR0MsU0FBSCxDQUFhO0FBQ05DLCtDQUFPLE1BREQ7QUFFTkMsOENBQU0sTUFGQTtBQUdOQyxrREFBVSxJQUhKO0FBSU5DLDhDQUFNO0FBSkEscUNBQWI7QUFNR3lFLDZDQVB1QixHQU9YOUUsR0FBRytFLGNBQUgsQ0FBa0IsV0FBbEIsQ0FQVzs7QUFRM0JELDhDQUFVQSxTQUFWLEdBQXNCLElBQXRCO0FBQ0E5RSx1Q0FBR2dGLGNBQUgsQ0FBa0IsV0FBbEIsRUFBK0JGLFNBQS9CO0FBQ0E5RSx1Q0FBR2lGLFlBQUgsQ0FBZ0I7QUFDWkMsK0NBQU87QUFESyxxQ0FBaEI7QUFHSDs7Ozs7Ozs7Ozs7Ozs7OztBQUVMOzs7Ozs7Ozs7OztBQUVRcEcsb0MsR0FBTztBQUNQcUcsd0NBQUksS0FBS2hHLEVBREY7QUFFUDBGLDRDQUFRLEtBQUtsRixXQUZOO0FBR1B5Riw2Q0FBUyxLQUFLMUY7QUFIUCxpQzs7dUNBS0swQixlQUFLTyxPQUFMLENBQ1osd0RBRFksRUFFWixNQUZZLEVBR1o3QyxJQUhZLEM7OztBQUFadUcsbUM7O0FBS0osb0NBQUlBLElBQUl4RCxVQUFKLElBQWtCLEdBQXRCLEVBQTJCO0FBQ25CaUQsNkNBRG1CLEdBQ1A5RSxHQUFHK0UsY0FBSCxDQUFrQixXQUFsQixDQURPOztBQUV2QkQsOENBQVVBLFNBQVYsR0FBc0IsSUFBdEI7QUFDQTlFLHVDQUFHZ0YsY0FBSCxDQUFrQixXQUFsQixFQUErQkYsU0FBL0I7QUFDQTlFLHVDQUFHaUYsWUFBSCxDQUFnQjtBQUNaQywrQ0FBTztBQURLLHFDQUFoQjtBQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUVJLE8sRUFBUztBQUNaLGlCQUFLbkcsRUFBTCxHQUFVbUcsUUFBUW5HLEVBQWxCO0FBQ0EsaUJBQUtzQixNQUFMO0FBQ0g7OztpQ0FDTztBQUNKLGdCQUFHLEtBQUs4RSxPQUFMLENBQWFDLE1BQWIsQ0FBb0JDLFFBQXBCLENBQTZCdEcsRUFBaEMsRUFBbUM7QUFDOUIscUJBQUtFLE1BQUwsR0FBYyxLQUFLa0csT0FBTCxDQUFhQyxNQUFiLENBQW9CQyxRQUFwQixDQUE2QnRHLEVBQTdCLENBQWdDdUcsUUFBaEMsRUFBZDtBQUNKO0FBQ0QsaUJBQUtDLFVBQUw7QUFDSDs7OztFQXhWcUNDLGVBQUtDLEk7O2tCQUExQmpILFkiLCJmaWxlIjoibWVldGluZ0RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG4gICAgaW1wb3J0IHtcbiAgICAgICAgZm9ybWF0RGF0ZVxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjbGllbnREZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0QnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ+WujOWWhOS4rScsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICd0cnVlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAn5bey5a6M5ZaE77yM5LiN5Y+v5L+u5pS5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgbWVldGluZ0RhdGE6IHt9LFxuICAgICAgICAgICAgdXNlcklkOiAwLFxuICAgICAgICAgICAgbm9QYXJ0aWNpcGF0ZTogZmFsc2UsIC8v5LiN5Y+C5LiO5by55qGGXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZTogZmFsc2UsIC8v5Y+C5LiO5by55qGGXG4gICAgICAgICAgICBpc1BhcnRpY2lwYXRlOiBmYWxzZSwgLy/mmK/lkKblj4LkuI5cbiAgICAgICAgICAgIHBhcnRpY2lwYXRlZDpmYWxzZSxcbiAgICAgICAgICAgIHJlbWFya1ZhbHVlOiAnJywgLy/mmK/lkKblj4LkuI7ljp/lm6DmlbDmja5cbiAgICAgICAgICAgIHJhZGlvU3RhdHVzOiAnRCcsIC8v5Y2V6YCJ6YCJ5Lit55qE5YC8XG4gICAgICAgICAgICBUZXh0Q291bnQ6MFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g5L+d5a2Y5Lya6K6u57qq6KaBXG4gICAgICAgICAgICBjb21maXJtUmNvcmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtYXJrVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVPclVwZGF0ZU1lZXRpbmdNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSH5rOo5Y6f5Zug5LiN6IO95Li656m677yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+WNleWFg+ahhui1i+WAvFxuICAgICAgICAgICAgcmFkaW9DaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmFkaW9TdGF0dXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOWkseWOu+eEpueCuVxuICAgICAgICAgICAgYmluZGlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFya1ZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5Y+C5LiOXG4gICAgICAgICAgICBjb21maXJtUGFydGljaXBhdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1hcmtWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbmZpcm1NZWV0aW5nUGFydGljaXBhbnQoJ0MnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflpIfms6jljp/lm6DkuI3og73kuLrnqbrvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5LiN5Y+C5LiOXG4gICAgICAgICAgICBjb21maXJtTm9QYXJ0aWNpcGF0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbWFya1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ29uZmlybU1lZXRpbmdQYXJ0aWNpcGFudCgnUicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+Wkh+azqOWOn+WboOS4jeiDveS4uuepuu+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5pi+56S66ZqQ6JeP5a6M5ZaE5Lya6K6u57qq6KaB5by556qXXG4gICAgICAgICAgICBtZWV0aW5nUmNvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1hcmtWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMubWVldGluZ1Jjb3JkID0gIXRoaXMubWVldGluZ1Jjb3JkO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkU3VtbWFyeSA9ICF0aGlzLnJlY29yZFN1bW1hcnk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/mmL7npLpcbiAgICAgICAgICAgIG5vUGFydGljaXBhdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbWFya1ZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1hcmtWYWx1ZT0nJztcbiAgICAgICAgICAgICAgICB0aGlzLm5vUGFydGljaXBhdGUgPSAhdGhpcy5ub1BhcnRpY2lwYXRlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMud2FpdEFmZmlybSA9ICF0aGlzLndhaXRBZmZpcm07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbWFya1ZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1hcmtWYWx1ZT1cIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljaXBhdGUgPSAhdGhpcy5wYXJ0aWNpcGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMud2FpdEFmZmlybSA9ICF0aGlzLndhaXRBZmZpcm07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmlldyhpZCwgZmlsZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvbWVldGluZ0F0dGFjaG1lbnQvR2V0RG9jdW1lbnRGaWxlP2lkPScgKyBpZDtcbiAgICAgICAgICAgICAgICBhamF4LnByZVZpZXcoaHR0cCwgZmlsZUNsYXNzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZpZXdEb2MoaWQsIGZpbGVDbGFzcykge1xuICAgICAgICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL21lZXRpbmcvR2V0TWVldGluZ01pbnV0ZXNGaWxlP2lkPScgKyBpZDtcbiAgICAgICAgICAgICAgICBhamF4LnByZVZpZXcoaHR0cCwgZmlsZUNsYXNzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2g9e1xuICAgICAgICAgICAgcmVtYXJrVmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuVGV4dENvdW50PXZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRNZWV0aW5nKCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9tZWV0aW5nL0dldE1lZXRpbmcnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNEYXRhLmRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVldGluZ0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/kuLvmjIHkurrlpLTlg49cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lZXRpbmdEYXRhLm1vZGVyYXRvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1odHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArIG1lZXRpbmdEYXRhLm1vZGVyYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGVyYXRvckF2YXRhcj1hd2FpdCBhamF4LmdldFVzZXJBdmF0YXIobWh0dHApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhLm1vZGVyYXRvckF2YXRhcj1tb2RlcmF0b3JBdmF0YXIudGVtcEZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy/ogZTns7vkurrlpLTlg49cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lZXRpbmdEYXRhLmxpbmtlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArIG1lZXRpbmdEYXRhLmxpbmtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5rZXJBdmF0YXI9YXdhaXQgYWpheC5nZXRVc2VyQXZhdGFyKGxodHRwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nRGF0YS5saW5rZXJBdmF0YXI9bGlua2VyQXZhdGFyLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYr+WQpuagh+iusFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVldGluZ0RhdGEuaXNNYXJrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ0RhdGEuaXNNYXJrID0gbWVldGluZ0RhdGEuaXNNYXJrLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbWVldGluZ0RhdGEucHJpdmFjeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhLnByaXZhY3kgPSBtZWV0aW5nRGF0YS5wcml2YWN5LnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvL+W8gOWni+e7k+adn+aXtumXtFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0VGltZT1tZWV0aW5nRGF0YS5zdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kVGltZT1tZWV0aW5nRGF0YS5lbmRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0X1RpbWUgPSBmb3JtYXREYXRlKHN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRfVGltZSA9IGZvcm1hdERhdGUoZW5kVGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydC5ZPSBzdGFydF9UaW1lWzBdICsgJy8nICsgc3RhcnRfVGltZVsxXSArICcvJyArIHN0YXJ0X1RpbWVbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydC5NID0gc3RhcnRfVGltZVszXSArICc6JyArIHN0YXJ0X1RpbWVbNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQuTSA9IGVuZF9UaW1lWzNdICsgJzonICsgZW5kX1RpbWVbNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nRGF0YS5zdGFydFRpbWUgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhLmVuZFRpbWUgPSBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+ebuOmalOaXtumXtFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ0RhdGEuZGlmZlRpbWU9KG5ldyBEYXRlKG5ldyBEYXRlKGVuZFRpbWUpLmdldFRpbWUoKS1uZXcgRGF0ZShzdGFydFRpbWUpLmdldFRpbWUoKSkvMzYwMDAwMCkudG9GaXhlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/noa7orqTnirbmgIFcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobWVldGluZ0RhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhWydzdGF0dXNDb2xvciddID0gXCIjZmY5OTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhWydzdGF0dXNDb2xvciddID0gXCIjMDA5ZGZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhWydzdGF0dXNDb2xvciddID0gXCIjMDY5NDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ0RhdGFbJ3N0YXR1c0NvbG9yJ10gPSBcIiNmZjk5MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6ZmE5Lu2XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBtZWV0aW5nRGF0YS5hdHRhY2htZW50TGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRhY2htZW50TGlzdCA9IG1lZXRpbmdEYXRhLmF0dGFjaG1lbnRMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYXR0YWNobWVudExpc3RbaW5kZXhdLmV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcucGRmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRMaXN0W2luZGV4XVsnaWNvbiddID0gJ2ljb24tcGRmcG5nMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50TGlzdFtpbmRleF1bJ2NvbG9yJ10gPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnBwdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50TGlzdFtpbmRleF1bJ2ljb24nXSA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydjb2xvciddID0gJyNlMjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5wcHR4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydpY29uJ10gPSAnaWNvbi1wZGZwbmcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRMaXN0W2luZGV4XVsnY29sb3InXSA9ICcjZTIwMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcucG5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydpY29uJ10gPSAnaWNvbi1wZGZwbmcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRMaXN0W2luZGV4XVsnY29sb3InXSA9ICcjZTIwMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcuZG9jeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50TGlzdFtpbmRleF1bJ2ljb24nXSA9ICdpY29uLXdvbGQxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRMaXN0W2luZGV4XVsnY29sb3InXSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcuZG9jJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRMaXN0W2luZGV4XVsnaWNvbiddID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydjb2xvciddID0gJyMwMDlkZmYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy54bHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydpY29uJ10gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRMaXN0W2luZGV4XVsnY29sb3InXSA9ICcjMDY5NDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcueGxzeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50TGlzdFtpbmRleF1bJ2ljb24nXSA9ICdpY29uLWV4bDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydjb2xvciddID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5qcGcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydpY29uJ10gPSAnaWNvbi1qcGdnZXNoaSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50TGlzdFtpbmRleF1bJ2NvbG9yJ10gPSAnI2ZmOTkwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnLnBuZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhdHRhY2htZW50TGlzdFtpbmRleF1bJ2ljb24nXSA9ICdpY29uLWpwZ2dlc2hpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGF0dGFjaG1lbnRMaXN0W2luZGV4XVsnY29sb3InXSA9ICcjZmY5OTAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydpY29uJ10gPSAnaWNvbi13ZWl6aGl3ZW5qaWFuZ2VzaGknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudExpc3RbaW5kZXhdWydjb2xvciddID0gJyM3YTdhN2EnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy/kvJrorq7lj4LkuI7kurpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBpbmRleCBpbiBtZWV0aW5nRGF0YS5wYXJ0aWNpcGFudExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtZWV0aW5nRGF0YS5wYXJ0aWNpcGFudExpc3RbcGluZGV4XS5lbXBsb3llZUlkPT10aGlzLnVzZXJJZCl7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVldGluZ0RhdGEucGFydGljaXBhbnRMaXN0W3BpbmRleF0uc3RhdHVzPT0nTicmJm1lZXRpbmdEYXRhLnN0YXR1cyE9PSdBJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGFydGljaXBhdGU9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYobWVldGluZ0RhdGEucGFydGljaXBhbnRMaXN0W3BpbmRleF0uc3RhdHVzPT0nQScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhcnRpY2lwYXRlPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0aWNpcGFudExpc3QgPSBtZWV0aW5nRGF0YS5wYXJ0aWNpcGFudExpc3RbcGluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgcGFydGljaXBhbnRMaXN0LmVtcGxveWVlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydGljaXBhbnRBdmF0YXIgPSBhd2FpdCBhamF4LmdldFVzZXJBdmF0YXIocGh0dHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50TGlzdC5BdmF0YXIgPSBwYXJ0aWNpcGFudEF2YXRhci50ZW1wRmlsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+S8muiuruWupOmjjuagvFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVldGluZ0RhdGEubWVldGluZ1Jvb20uc3R5bGVUZXh0Lmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhLm1lZXRpbmdSb29tLnN0eWxlVGV4dD1tZWV0aW5nRGF0YS5tZWV0aW5nUm9vbS5zdHlsZVRleHQuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nRGF0YS5tZWV0aW5nUm9vbS5lcXVpcG1lbnRUZXh0PW1lZXRpbmdEYXRhLm1lZXRpbmdSb29tLmVxdWlwbWVudFRleHQuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhLm1lZXRpbmdSb29tLnN0eWxlVGV4dD1bJ+acquWhq+WGmSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdEYXRhLm1lZXRpbmdSb29tLmVxdWlwbWVudFRleHQ9WyfmnKrloavlhpknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6f5ZugXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbWFya1ZhbHVlPW1lZXRpbmdEYXRhLnJlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVldGluZ0RhdGEgPSBtZWV0aW5nRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7kuLrnqbonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmmK/lkKblj4LkuI5cbiAgICAgICAgYXN5bmMgQ29uZmlybU1lZXRpbmdQYXJ0aWNpcGFudChzdGF0dXMpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFydGljaXBhdGU9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ub1BhcnRpY2lwYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNpcGF0ZT1mYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgRW1wbG95ZWVJZDogdGhpcy51c2VySWQsXG4gICAgICAgICAgICAgICAgTWVldGluZ0lkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIFJlbWFyazogdGhpcy5yZW1hcmtWYWx1ZSxcbiAgICAgICAgICAgICAgICBTdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9tZWV0aW5nUGFydGljaXBhbnQvQ29uZmlybU1lZXRpbmdQYXJ0aWNpcGFudCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nOWujOaIkCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgaXNSZWZyZXNoID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIGlzUmVmcmVzaC5pc1JlZnJlc2ggPSB0cnVlXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcsIGlzUmVmcmVzaCk7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+WujOWWhOaPkOS6pOS8muiuruaXpeW/l1xuICAgICAgICBhc3luYyBDcmVhdGVPclVwZGF0ZU1lZXRpbmdNaW51dGVzKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgU3RhdHVzOiB0aGlzLnJhZGlvU3RhdHVzLFxuICAgICAgICAgICAgICAgIFN1bW1hcnk6IHRoaXMucmVtYXJrVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXMgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL21lZXRpbmcvQ3JlYXRlT3JVcGRhdGVNZWV0aW5nTWludXRlcycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzUmVmcmVzaCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICBpc1JlZnJlc2guaXNSZWZyZXNoID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKXtcbiAgICAgICAgICAgIGlmKHRoaXMuJHBhcmVudC5nbG9iYWwudXNlckluZm8uaWQpe1xuICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuJHBhcmVudC5nbG9iYWwudXNlckluZm8uaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuR2V0TWVldGluZygpO1xuICAgICAgICB9XG4gICAgfVxuIl19