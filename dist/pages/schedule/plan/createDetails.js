'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../utils/cofig/api.js');

var _nowDateTimePicker = require('./../../../components/Date/nowDateTimePicker.js');

var _nowDateTimePicker2 = _interopRequireDefault(_nowDateTimePicker);

var _endDateTimePicker = require('./../../../components/Date/endDateTimePicker.js');

var _endDateTimePicker2 = _interopRequireDefault(_endDateTimePicker);

var _option = require('./../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "StartTime": { "xmlns:v-bind": "", "v-bind:timeObj.sync": "dateOptions", "v-bind:dateData.sync": "StartTime", "v-bind:twoWayTitle.once": "StartTime" }, "EndTime": { "v-bind:timeObj.sync": "dateOptions1", "v-bind:dateData.sync": "EndTime", "v-bind:twoWayTitle.once": "EndTime" }, "RemindTime": { "v-bind:options.sync": "RemindTime", "v-bind:index.sync": "RemindTimeIndex", "v-bind:twoWayTitle.once": "RemindTimeIndex" } }, _this.$events = {}, _this.components = {
            StartTime: _nowDateTimePicker2.default,
            EndTime: _endDateTimePicker2.default,
            RemindTime: _option2.default
        }, _this.data = {
            addOpacity: 1,
            submitData: {
                Address: "",
                AttachmentId: "",
                CaseId: "",
                Category: "",
                Description: "",
                EndTime: "",
                EventType: "",
                Id: "",
                IsAllDay: "",
                IsConverted: "",
                IsInbox: "",
                IsMark: "",
                IsRemind: "",
                Participant: "",
                Priority: "",
                Privacy: "",
                RelationId: "",
                Remark: "",
                RemindTime: "",
                Situation: "",
                StartTime: "",
                Tag: "",
                Title: ""
            },
            inputChecked: [false, false, false, false, false],
            warning: [false, false, false],
            //日程类型
            categoryCombobox: {
                value: [],
                displayText: [],
                index: -1
            },
            //日程事件类型
            eventTypeCombobox: {
                value: [],
                displayText: [],
                index: -1
            },
            //关联客户名称
            RelationId: {
                value: [],
                displayText: [],
                index: -1
            },
            //关联案件名称
            CaseId: {
                value: [],
                displayText: [],
                index: -1
            },
            //时间选择器
            dateOptions: {
                title: '开始时间',
                name: 'StartTime',
                time: ''
            },
            StartTime: '',
            dateOptions1: {
                title: '结束时间',
                name: 'EndTime',
                time: ''
            },
            EndTime: '',
            situationCombobox: {
                value: [],
                displayText: [],
                index: -1
            },
            priorityCombobox: {
                value: [],
                displayText: [],
                index: -1
            },
            //隐私范围
            privacyCombobox: {
                value: [],
                displayText: [],
                index: -1
            },
            //隐私标记
            IsMarkPrivacy: [{
                checked: false,
                title: '放入收集箱'
            }, {
                checked: false,
                title: '是否标记'
            }],
            //会议提醒
            RemindTime: {
                // title:'',
                value: [0, 5, 10, 15, 30, 45, 60, 90, 120, 150, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 1440, 2880, 4320, 5760, 10080, 20160],
                displayText: ['无', '5分钟', '10分钟', '15分钟', '30分钟', '45分钟', '1小时', '1.5小时', '2小时', '2.5小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '9小时', '10小时', '11小时', '0.5天', '1天', '2天', '3天', '4天', '1周', '2周']
            },
            RemindTimeIndex: 0,
            IsRemind: [{
                value: "Y",
                displayText: "是"
            }, {
                value: "N",
                displayText: "否"
            }],
            IsRemindChecked: false,
            isRemindTime: false,
            //日程标签
            Tag: {
                title: '标签',
                name: 'Tag',
                options: false,
                TagItem: []
            },
            TagValue: '',
            //是否显示客户和案件
            ifShowCustomer: false
        }, _this.watch = {
            StartTime: function StartTime(dateData) {
                this.submitData.StartTime = dateData[0] + '/' + dateData[1] + '/' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.$apply();
            },
            EndTime: function EndTime(dateData) {
                this.submitData.EndTime = dateData[0] + '/' + dateData[1] + '/' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.$apply();
            },
            RemindTimeIndex: function RemindTimeIndex(index) {
                this.submitData.RemindTime = this.RemindTime.value[index];
                this.$apply();
            }
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {

                if (this.submitData.Title && this.submitData.Description && this.submitData.Category) {
                    console.log(1);

                    this.CreateOrUpdatePlan();
                } else {
                    this.addOpacity = 1;
                    if (!this.submitData.Title) {
                        this.warning[0] = true;
                    }
                    if (!this.submitData.Description) {
                        this.warning[1] = true;
                    }
                    if (!this.submitData.Category) {
                        this.warning[2] = true;
                    }
                }
                this.$apply();
            },
            bindinput: function bindinput(e) {
                var inputData = e.detail.value;
                console.log(e);
                switch (e.target.id) {
                    case 'Title':
                        this.submitData.Title = e.detail.value;
                        break;
                    case 'Describe':
                        this.submitData.Description = e.detail.value;
                        break;
                    default:
                        break;
                }
            },
            isChecked: function isChecked(e) {
                if (e.target.id == 'IsMark') {
                    this.IsMarkPrivacy[1].checked = !this.IsMarkPrivacy[1].checked;
                    if (this.IsMarkPrivacy[1].checked) {
                        this.submitData.IsMark = 'Y';
                    } else {
                        this.submitData.IsMark = 'N';
                    }
                } else if (e.target.id == 'Privacy') {
                    this.IsMarkPrivacy[0].checked = !this.IsMarkPrivacy[0].checked;
                    if (this.IsMarkPrivacy[0].checked) {
                        this.submitData.Privacy = 'Y';
                    } else {
                        this.submitData.Privacy = 'N';
                    }
                }
                this.$apply();
            },
            IsRemind: function IsRemind() {
                this.IsRemindChecked = !this.IsRemindChecked;
                if (this.IsRemindChecked) {
                    this.submitData.IsRemind = this.IsRemind[0].value;
                    this.isRemindTime = true;
                } else {
                    this.submitData.IsRemind = this.IsRemind[1].value;
                    this.isRemindTime = false;
                    this.RemindTimeIndex = 0;
                    this.submitData.RemindTime = 0;
                }
                this.$apply();
            },
            bindfocus: function bindfocus(index) {
                this.inputChecked[index] = !this.inputChecked[index];
                this.$apply();
            },
            bindblur: function bindblur(index) {
                this.inputChecked[index] = !this.inputChecked[index];
                this.$apply();
            },
            bindPickerChange: function bindPickerChange(res, e) {
                console.log(res);
                console.log(e);
                switch (res) {
                    case 'categoryCombobox':
                        this.categoryCombobox.index = +e.detail.value;
                        this.submitData.Category = this.categoryCombobox.value[this.categoryCombobox.index];
                        console.log(e.detail.value);
                        if (e.detail.value == "0") {
                            this.ifShowCustomer = true;
                        } else {
                            this.ifShowCustomer = false;
                        }
                        break;
                    case 'eventTypeCombobox':
                        this.eventTypeCombobox.index = +e.detail.value;
                        this.submitData.EventType = this.eventTypeCombobox.value[this.eventTypeCombobox.index];
                        break;
                    case 'situationCombobox':
                        this.situationCombobox.index = +e.detail.value;
                        this.submitData.Situation = this.situationCombobox.value[this.situationCombobox.index];
                        break;
                    case 'priorityCombobox':
                        this.priorityCombobox.index = +e.detail.value;
                        this.submitData.Priority = this.priorityCombobox.value[this.priorityCombobox.index];
                        break;
                    case 'privacyCombobox':
                        this.privacyCombobox.index = +e.detail.value;
                        this.submitData.Privacy = this.privacyCombobox.value[this.privacyCombobox.index];
                    case 'RelationId':
                        this.RelationId.index = +e.detail.value;
                        this.submitData.RelationId = this.RelationId.value[this.RelationId.index];
                        this.GetGeneralComboboxList('case', this.submitData.RelationId);
                    case 'CaseId':
                        this.CaseId.index = +e.detail.value;
                        this.submitData.CaseId = this.CaseId.value[this.CaseId.index];
                    default:
                        break;
                }
                this.$apply();
            },
            deletePItem: function deletePItem(index) {
                this.Participant.index.splice(index, 1);
                var Pvalue = this.submitData.Participant.split(',');
                Pvalue.splice(index, 1);
                Pvalue = Pvalue.toString();
                this.submitData.Participant = Pvalue;
                this.$apply();
            },
            tagBindconfirm: function tagBindconfirm() {
                if (this.TagValue) {
                    this.Tag.TagItem.push(this.TagValue);
                    this.Tag.TagItem = (0, _api.myDistinct)(this.Tag.TagItem);
                    this.TagValue = '';
                    this.submitData.Tag = this.Tag.TagItem.toString();
                    this.$apply();
                } else {
                    return;
                }
            },
            tagBindinput: function tagBindinput(e) {
                if (e.detail.value) {
                    this.TagValue = e.detail.value;
                }
                this.$apply();
            },
            deleteTagItem: function deleteTagItem(index) {
                this.Tag.TagItem.splice(index, 1);
                this.submitData.Tag = this.Tag.TagItem.toString();
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'GetPlanForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, EditData, categoryCombobox, index, eventTypeCombobox, situationCombobox, priorityCombobox, privacyCombobox;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {};
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/schedule/GetScheduleForEdit', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    EditData = resData.data.result;
                                    // wx.setStorageSync('meetingRoomData',EditData.meetingRoomCombobox);
                                    //会议类型

                                    this.submitData.Id = EditData.id;
                                    categoryCombobox = EditData.categoryCombobox;

                                    for (index in categoryCombobox) {
                                        this.categoryCombobox.value[index] = categoryCombobox[index].value;
                                        this.categoryCombobox.displayText[index] = categoryCombobox[index].displayText;
                                    }
                                    eventTypeCombobox = EditData.eventTypeCombobox;

                                    for (index in eventTypeCombobox) {
                                        this.eventTypeCombobox.value[index] = eventTypeCombobox[index].value;
                                        this.eventTypeCombobox.displayText[index] = eventTypeCombobox[index].displayText;
                                    }
                                    situationCombobox = EditData.situationCombobox;

                                    for (index in situationCombobox) {
                                        this.situationCombobox.value[index] = situationCombobox[index].value;
                                        this.situationCombobox.displayText[index] = situationCombobox[index].displayText;
                                    }
                                    priorityCombobox = EditData.priorityCombobox;

                                    for (index in priorityCombobox) {
                                        this.priorityCombobox.value[index] = priorityCombobox[index].value;
                                        this.priorityCombobox.displayText[index] = priorityCombobox[index].displayText;
                                    }
                                    privacyCombobox = EditData.privacyCombobox;

                                    for (index in privacyCombobox) {
                                        this.privacyCombobox.value[index] = privacyCombobox[index].value;
                                        this.privacyCombobox.displayText[index] = privacyCombobox[index].displayText;
                                    }
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetPlanForEdit() {
                return _ref2.apply(this, arguments);
            }

            return GetPlanForEdit;
        }()
        // plan数据提交

    }, {
        key: 'CreateOrUpdatePlan',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                var resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/schedule/CreateOrUpdateSchedule', 'post', this.submitData);

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    wx.navigateBack({
                                        delta: 2
                                    });
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function CreateOrUpdatePlan() {
                return _ref3.apply(this, arguments);
            }

            return CreateOrUpdatePlan;
        }()
        //客户 案件创建数据

    }, {
        key: 'GetGeneralComboboxList',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(keyWord) {
                for (var _len2 = arguments.length, arg = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    arg[_key2 - 1] = arguments[_key2];
                }

                var data, resData, ComboboxList, index, item;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                console.log(arg);
                                _context3.t0 = keyWord;
                                _context3.next = _context3.t0 === 'case' ? 4 : _context3.t0 === 'client' ? 11 : _context3.t0 === 'employee' ? 18 : 24;
                                break;

                            case 4:
                                data = {
                                    class: keyWord,
                                    parentId: arg[0]
                                };
                                _context3.next = 7;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 7:
                                resData = _context3.sent;

                                console.log(resData);
                                if (resData.statusCode == 200) {
                                    console.log(resData.data.result.length !== 0);
                                    if (resData.data.result.length !== 0) {
                                        ComboboxList = resData.data.result;

                                        for (index in ComboboxList) {
                                            item = ComboboxList[index];

                                            this.CaseId.value[index] = item.value;
                                            this.CaseId.displayText[index] = item.displayText;
                                            this.CaseId.index = -1;
                                        }
                                    } else {
                                        this.CaseId.value = [];
                                        this.CaseId.displayText = [];
                                        this.submitData.CaseId = '';
                                        this.CaseId.index = -1;
                                    }
                                    this.$apply();
                                }
                                return _context3.abrupt('break', 25);

                            case 11:
                                data = {
                                    class: keyWord
                                };
                                _context3.next = 14;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 14:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    ComboboxList = resData.data.result;

                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.RelationId.value[index] = item.value;
                                        this.RelationId.displayText[index] = item.displayText;
                                    }
                                }
                                this.$apply();
                                return _context3.abrupt('break', 25);

                            case 18:
                                data = {
                                    class: keyWord,
                                    shortCode: arg[0]
                                };
                                _context3.next = 21;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 21:
                                resData = _context3.sent;

                                this.$apply();
                                return _context3.abrupt('break', 25);

                            case 24:
                                return _context3.abrupt('break', 25);

                            case 25:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetGeneralComboboxList(_x) {
                return _ref4.apply(this, arguments);
            }

            return GetGeneralComboboxList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetPlanForEdit();
            this.GetGeneralComboboxList('client');
            // this.GetGeneralComboboxList('case');
            var now = new Date();
            this.dateOptions1.time = now;
            this.dateOptions.time = now;
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/schedule/plan/createDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZURldGFpbHMuanMiXSwibmFtZXMiOlsiY2xpZW50RGV0YWlsIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RhcnRUaW1lIiwiRW5kVGltZSIsIlJlbWluZFRpbWUiLCJkYXRhIiwiYWRkT3BhY2l0eSIsInN1Ym1pdERhdGEiLCJBZGRyZXNzIiwiQXR0YWNobWVudElkIiwiQ2FzZUlkIiwiQ2F0ZWdvcnkiLCJEZXNjcmlwdGlvbiIsIkV2ZW50VHlwZSIsIklkIiwiSXNBbGxEYXkiLCJJc0NvbnZlcnRlZCIsIklzSW5ib3giLCJJc01hcmsiLCJJc1JlbWluZCIsIlBhcnRpY2lwYW50IiwiUHJpb3JpdHkiLCJQcml2YWN5IiwiUmVsYXRpb25JZCIsIlJlbWFyayIsIlNpdHVhdGlvbiIsIlRhZyIsIlRpdGxlIiwiaW5wdXRDaGVja2VkIiwid2FybmluZyIsImNhdGVnb3J5Q29tYm9ib3giLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiaW5kZXgiLCJldmVudFR5cGVDb21ib2JveCIsImRhdGVPcHRpb25zIiwidGl0bGUiLCJuYW1lIiwidGltZSIsImRhdGVPcHRpb25zMSIsInNpdHVhdGlvbkNvbWJvYm94IiwicHJpb3JpdHlDb21ib2JveCIsInByaXZhY3lDb21ib2JveCIsIklzTWFya1ByaXZhY3kiLCJjaGVja2VkIiwiUmVtaW5kVGltZUluZGV4IiwiSXNSZW1pbmRDaGVja2VkIiwiaXNSZW1pbmRUaW1lIiwib3B0aW9ucyIsIlRhZ0l0ZW0iLCJUYWdWYWx1ZSIsImlmU2hvd0N1c3RvbWVyIiwid2F0Y2giLCJkYXRlRGF0YSIsIiRhcHBseSIsIm1ldGhvZHMiLCJ0b3VjaFN0YXJ0IiwidG91Y2hFbmQiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlT3JVcGRhdGVQbGFuIiwiYmluZGlucHV0IiwiZSIsImlucHV0RGF0YSIsImRldGFpbCIsInRhcmdldCIsImlkIiwiaXNDaGVja2VkIiwiYmluZGZvY3VzIiwiYmluZGJsdXIiLCJiaW5kUGlja2VyQ2hhbmdlIiwicmVzIiwiR2V0R2VuZXJhbENvbWJvYm94TGlzdCIsImRlbGV0ZVBJdGVtIiwic3BsaWNlIiwiUHZhbHVlIiwic3BsaXQiLCJ0b1N0cmluZyIsInRhZ0JpbmRjb25maXJtIiwicHVzaCIsInRhZ0JpbmRpbnB1dCIsImRlbGV0ZVRhZ0l0ZW0iLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiRWRpdERhdGEiLCJyZXN1bHQiLCJ3eCIsInNob3dMb2FkaW5nIiwibWFzayIsInN1Y2Nlc3MiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImVycm9yIiwibWVzc2FnZSIsImljb24iLCJkdXJhdGlvbiIsImtleVdvcmQiLCJhcmciLCJjbGFzcyIsInBhcmVudElkIiwibGVuZ3RoIiwiQ29tYm9ib3hMaXN0IiwiaXRlbSIsInNob3J0Q29kZSIsIkdldFBsYW5Gb3JFZGl0Iiwibm93IiwiRGF0ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixhQUF6QyxFQUF1RCx3QkFBdUIsV0FBOUUsRUFBMEYsMkJBQTBCLFdBQXBILEVBQWIsRUFBOEksV0FBVSxFQUFDLHVCQUFzQixjQUF2QixFQUFzQyx3QkFBdUIsU0FBN0QsRUFBdUUsMkJBQTBCLFNBQWpHLEVBQXhKLEVBQW9RLGNBQWEsRUFBQyx1QkFBc0IsWUFBdkIsRUFBb0MscUJBQW9CLGlCQUF4RCxFQUEwRSwyQkFBMEIsaUJBQXBHLEVBQWpSLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGtEQURFO0FBRUZDLGdEQUZFO0FBR0ZDO0FBSEUsUyxRQUtOQyxJLEdBQU87QUFD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O3VDQUlTbEIsZUFBS0MsT0FBTCxDQUNoQixrRUFEZ0IsRUFFaEIsTUFGZ0IsRUFHaEI5RSxJQUhnQixDOzs7QUFBaEIrRSx1Qzs7QUFLSixxQ0FBSzlCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBTUg7QUFDTCxpQkFBS3FELGNBQUw7QUFDQSxpQkFBS25DLHNCQUFMLENBQTRCLFFBQTVCO0FBQ0E7QUFDQSxnQkFBSW9DLE1BQU0sSUFBSUMsSUFBSixFQUFWO0FBQ0EsaUJBQUt0RSxZQUFMLENBQWtCRCxJQUFsQixHQUF5QnNFLEdBQXpCO0FBQ0EsaUJBQUt6RSxXQUFMLENBQWlCRyxJQUFqQixHQUF3QnNFLEdBQXhCO0FBQ0g7Ozs7RUFoY3FDRSxlQUFLQyxJOztrQkFBMUJsSCxZIiwiZmlsZSI6ImNyZWF0ZURldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIG15RGlzdGluY3RcclxuICAgIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcclxuICAgIGltcG9ydCBTdGFydFRpbWUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EYXRlL25vd0RhdGVUaW1lUGlja2VyJztcclxuICAgIGltcG9ydCBFbmRUaW1lIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRGF0ZS9lbmREYXRlVGltZVBpY2tlcic7XHJcbiAgICBpbXBvcnQgUmVtaW5kVGltZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU3RhcnRUaW1lXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aW1lT2JqLnN5bmNcIjpcImRhdGVPcHRpb25zXCIsXCJ2LWJpbmQ6ZGF0ZURhdGEuc3luY1wiOlwiU3RhcnRUaW1lXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiU3RhcnRUaW1lXCJ9LFwiRW5kVGltZVwiOntcInYtYmluZDp0aW1lT2JqLnN5bmNcIjpcImRhdGVPcHRpb25zMVwiLFwidi1iaW5kOmRhdGVEYXRhLnN5bmNcIjpcIkVuZFRpbWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJFbmRUaW1lXCJ9LFwiUmVtaW5kVGltZVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIlJlbWluZFRpbWVcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJSZW1pbmRUaW1lSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJSZW1pbmRUaW1lSW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBTdGFydFRpbWUsXHJcbiAgICAgICAgICAgIEVuZFRpbWUsXHJcbiAgICAgICAgICAgIFJlbWluZFRpbWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6IHtcclxuICAgICAgICAgICAgICAgIEFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBBdHRhY2htZW50SWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBDYXNlSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeTogXCJcIixcclxuICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgRW5kVGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgIEV2ZW50VHlwZTogXCJcIixcclxuICAgICAgICAgICAgICAgIElkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgSXNBbGxEYXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBJc0NvbnZlcnRlZDogXCJcIixcclxuICAgICAgICAgICAgICAgIElzSW5ib3g6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBJc01hcms6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBJc1JlbWluZDogXCJcIixcclxuICAgICAgICAgICAgICAgIFBhcnRpY2lwYW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgUHJpb3JpdHk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBQcml2YWN5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgUmVsYXRpb25JZDogXCJcIixcclxuICAgICAgICAgICAgICAgIFJlbWFyazogXCJcIixcclxuICAgICAgICAgICAgICAgIFJlbWluZFRpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBTaXR1YXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBTdGFydFRpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBUYWc6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5wdXRDaGVja2VkOiBbXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHdhcm5pbmc6IFtcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy/ml6XnqIvnsbvlnotcclxuICAgICAgICAgICAgY2F0ZWdvcnlDb21ib2JveDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+aXpeeoi+S6i+S7tuexu+Wei1xyXG4gICAgICAgICAgICBldmVudFR5cGVDb21ib2JveDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+WFs+iBlOWuouaIt+WQjeensFxyXG4gICAgICAgICAgICBSZWxhdGlvbklkOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v5YWz6IGU5qGI5Lu25ZCN56ewXHJcbiAgICAgICAgICAgIENhc2VJZDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+aXtumXtOmAieaLqeWZqFxyXG4gICAgICAgICAgICBkYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflvIDlp4vml7bpl7QnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1N0YXJ0VGltZScsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBTdGFydFRpbWU6ICcnLFxyXG4gICAgICAgICAgICBkYXRlT3B0aW9uczE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn57uT5p2f5pe26Ze0JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmRUaW1lJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEVuZFRpbWU6ICcnLFxyXG4gICAgICAgICAgICBzaXR1YXRpb25Db21ib2JveDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmlvcml0eUNvbWJvYm94OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v6ZqQ56eB6IyD5Zu0XHJcbiAgICAgICAgICAgIHByaXZhY3lDb21ib2JveDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+makOengeagh+iusFxyXG4gICAgICAgICAgICBJc01hcmtQcml2YWN5OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS+5YWl5pS26ZuG566xJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aYr+WQpuagh+iusCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy/kvJrorq7mj5DphpJcclxuICAgICAgICAgICAgUmVtaW5kVGltZToge1xyXG4gICAgICAgICAgICAgICAgLy8gdGl0bGU6JycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogWzAsIDUsIDEwLCAxNSwgMzAsIDQ1LCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDI0MCwgMzAwLCAzNjAsIDQyMCwgNDgwLCA1NDAsIDYwMCwgNjYwLCA3MjAsIDE0NDAsIDI4ODAsIDQzMjAsIDU3NjAsIDEwMDgwLCAyMDE2MF0sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogWyfml6AnLCAnNeWIhumSnycsICcxMOWIhumSnycsICcxNeWIhumSnycsICczMOWIhumSnycsICc0NeWIhumSnycsICcx5bCP5pe2JywgJzEuNeWwj+aXticsICcy5bCP5pe2JywgJzIuNeWwj+aXticsICcz5bCP5pe2JywgJzTlsI/ml7YnLCAnNeWwj+aXticsICc25bCP5pe2JywgJzflsI/ml7YnLCAnOOWwj+aXticsICc55bCP5pe2JywgJzEw5bCP5pe2JywgJzEx5bCP5pe2JywgJzAuNeWkqScsICcx5aSpJywgJzLlpKknLCAnM+WkqScsICc05aSpJywgJzHlkagnLCAnMuWRqCddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBSZW1pbmRUaW1lSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIElzUmVtaW5kOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIllcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogXCLmmK9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFwi5ZCmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgSXNSZW1pbmRDaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNSZW1pbmRUaW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgLy/ml6XnqIvmoIfnrb5cclxuICAgICAgICAgICAgVGFnOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+agh+etvicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGFnJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgVGFnSXRlbTogW11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVGFnVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAvL+aYr+WQpuaYvuekuuWuouaIt+WSjOahiOS7tlxyXG4gICAgICAgICAgICBpZlNob3dDdXN0b21lcjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3YXRjaCA9IHtcclxuICAgICAgICAgICAgU3RhcnRUaW1lKGRhdGVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU3RhcnRUaW1lID0gZGF0ZURhdGFbMF0gKyAnLycgKyBkYXRlRGF0YVsxXSArICcvJyArIGRhdGVEYXRhWzJdICsgJyAnICsgZGF0ZURhdGFbM10gKyAnOicgKyBkYXRlRGF0YVs0XSArICc6JyArIGRhdGVEYXRhWzVdXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBFbmRUaW1lKGRhdGVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRW5kVGltZSA9IGRhdGVEYXRhWzBdICsgJy8nICsgZGF0ZURhdGFbMV0gKyAnLycgKyBkYXRlRGF0YVsyXSArICcgJyArIGRhdGVEYXRhWzNdICsgJzonICsgZGF0ZURhdGFbNF0gKyAnOicgKyBkYXRlRGF0YVs1XVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUmVtaW5kVGltZUluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVtaW5kVGltZSA9IHRoaXMuUmVtaW5kVGltZS52YWx1ZVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG91Y2hFbmQoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Ym1pdERhdGEuVGl0bGUgJiYgdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uICYmIHRoaXMuc3VibWl0RGF0YS5DYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVQbGFuKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN1Ym1pdERhdGEuVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzBdID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3VibWl0RGF0YS5EZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMV0gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJtaXREYXRhLkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1syXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZGlucHV0KGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dERhdGEgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1RpdGxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlRpdGxlID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Rlc2NyaWJlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0NoZWNrZWQoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICdJc01hcmsnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc01hcmtQcml2YWN5WzFdLmNoZWNrZWQgPSAhdGhpcy5Jc01hcmtQcml2YWN5WzFdLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSXNNYXJrUHJpdmFjeVsxXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Jc01hcmsgPSAnWSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzTWFyayA9ICdOJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09ICdQcml2YWN5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSXNNYXJrUHJpdmFjeVswXS5jaGVja2VkID0gIXRoaXMuSXNNYXJrUHJpdmFjeVswXS5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLklzTWFya1ByaXZhY3lbMF0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUHJpdmFjeSA9ICdZJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUHJpdmFjeSA9ICdOJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBJc1JlbWluZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuSXNSZW1pbmRDaGVja2VkID0gIXRoaXMuSXNSZW1pbmRDaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSXNSZW1pbmRDaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzUmVtaW5kID0gdGhpcy5Jc1JlbWluZFswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVtaW5kVGltZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Jc1JlbWluZCA9IHRoaXMuSXNSZW1pbmRbMV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlbWluZFRpbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbWluZFRpbWVJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlJlbWluZFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZGZvY3VzKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2hlY2tlZFtpbmRleF0gPSAhdGhpcy5pbnB1dENoZWNrZWRbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZGJsdXIoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRDaGVja2VkW2luZGV4XSA9ICF0aGlzLmlucHV0Q2hlY2tlZFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kUGlja2VyQ2hhbmdlKHJlcywgZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYXRlZ29yeUNvbWJvYm94JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUNvbWJvYm94LmluZGV4ID0gK2UuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5Q29tYm9ib3gudmFsdWVbdGhpcy5jYXRlZ29yeUNvbWJvYm94LmluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaG93Q3VzdG9tZXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2hvd0N1c3RvbWVyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdldmVudFR5cGVDb21ib2JveCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlQ29tYm9ib3guaW5kZXggPSArZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5FdmVudFR5cGUgPSB0aGlzLmV2ZW50VHlwZUNvbWJvYm94LnZhbHVlW3RoaXMuZXZlbnRUeXBlQ29tYm9ib3guaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaXR1YXRpb25Db21ib2JveCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2l0dWF0aW9uQ29tYm9ib3guaW5kZXggPSArZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TaXR1YXRpb24gPSB0aGlzLnNpdHVhdGlvbkNvbWJvYm94LnZhbHVlW3RoaXMuc2l0dWF0aW9uQ29tYm9ib3guaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmlvcml0eUNvbWJvYm94JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eUNvbWJvYm94LmluZGV4ID0gK2UuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUHJpb3JpdHkgPSB0aGlzLnByaW9yaXR5Q29tYm9ib3gudmFsdWVbdGhpcy5wcmlvcml0eUNvbWJvYm94LmluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJpdmFjeUNvbWJvYm94JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcml2YWN5Q29tYm9ib3guaW5kZXggPSArZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Qcml2YWN5ID0gdGhpcy5wcml2YWN5Q29tYm9ib3gudmFsdWVbdGhpcy5wcml2YWN5Q29tYm9ib3guaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1JlbGF0aW9uSWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbGF0aW9uSWQuaW5kZXggPSArZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5SZWxhdGlvbklkID0gdGhpcy5SZWxhdGlvbklkLnZhbHVlW3RoaXMuUmVsYXRpb25JZC5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnY2FzZScsIHRoaXMuc3VibWl0RGF0YS5SZWxhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDYXNlSWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5pbmRleCA9ICtlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhc2VJZCA9IHRoaXMuQ2FzZUlkLnZhbHVlW3RoaXMuQ2FzZUlkLmluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZVBJdGVtKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmluZGV4LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgUHZhbHVlID0gdGhpcy5zdWJtaXREYXRhLlBhcnRpY2lwYW50LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICBQdmFsdWUuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgUHZhbHVlID0gUHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQgPSBQdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0YWdCaW5kY29uZmlybSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlRhZ1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYWcuVGFnSXRlbS5wdXNoKHRoaXMuVGFnVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGFnLlRhZ0l0ZW0gPSBteURpc3RpbmN0KHRoaXMuVGFnLlRhZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGFnVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuVGFnID0gdGhpcy5UYWcuVGFnSXRlbS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0YWdCaW5kaW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYWdWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlVGFnSXRlbShpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5UYWcuVGFnSXRlbS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlRhZyA9IHRoaXMuVGFnLlRhZ0l0ZW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgR2V0UGxhbkZvckVkaXQoKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3NjaGVkdWxlL0dldFNjaGVkdWxlRm9yRWRpdCcsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBFZGl0RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAvLyB3eC5zZXRTdG9yYWdlU3luYygnbWVldGluZ1Jvb21EYXRhJyxFZGl0RGF0YS5tZWV0aW5nUm9vbUNvbWJvYm94KTtcclxuICAgICAgICAgICAgICAgIC8v5Lya6K6u57G75Z6LXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSWQgPSBFZGl0RGF0YS5pZDtcclxuICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUNvbWJvYm94ID0gRWRpdERhdGEuY2F0ZWdvcnlDb21ib2JveFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gY2F0ZWdvcnlDb21ib2JveCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlDb21ib2JveC52YWx1ZVtpbmRleF0gPSBjYXRlZ29yeUNvbWJvYm94W2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5Q29tYm9ib3guZGlzcGxheVRleHRbaW5kZXhdID0gY2F0ZWdvcnlDb21ib2JveFtpbmRleF0uZGlzcGxheVRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUeXBlQ29tYm9ib3ggPSBFZGl0RGF0YS5ldmVudFR5cGVDb21ib2JveFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZXZlbnRUeXBlQ29tYm9ib3gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50VHlwZUNvbWJvYm94LnZhbHVlW2luZGV4XSA9IGV2ZW50VHlwZUNvbWJvYm94W2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50VHlwZUNvbWJvYm94LmRpc3BsYXlUZXh0W2luZGV4XSA9IGV2ZW50VHlwZUNvbWJvYm94W2luZGV4XS5kaXNwbGF5VGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzaXR1YXRpb25Db21ib2JveCA9IEVkaXREYXRhLnNpdHVhdGlvbkNvbWJvYm94XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBzaXR1YXRpb25Db21ib2JveCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l0dWF0aW9uQ29tYm9ib3gudmFsdWVbaW5kZXhdID0gc2l0dWF0aW9uQ29tYm9ib3hbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l0dWF0aW9uQ29tYm9ib3guZGlzcGxheVRleHRbaW5kZXhdID0gc2l0dWF0aW9uQ29tYm9ib3hbaW5kZXhdLmRpc3BsYXlUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHByaW9yaXR5Q29tYm9ib3ggPSBFZGl0RGF0YS5wcmlvcml0eUNvbWJvYm94XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwcmlvcml0eUNvbWJvYm94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eUNvbWJvYm94LnZhbHVlW2luZGV4XSA9IHByaW9yaXR5Q29tYm9ib3hbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHlDb21ib2JveC5kaXNwbGF5VGV4dFtpbmRleF0gPSBwcmlvcml0eUNvbWJvYm94W2luZGV4XS5kaXNwbGF5VGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwcml2YWN5Q29tYm9ib3ggPSBFZGl0RGF0YS5wcml2YWN5Q29tYm9ib3hcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHByaXZhY3lDb21ib2JveCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpdmFjeUNvbWJvYm94LnZhbHVlW2luZGV4XSA9IHByaXZhY3lDb21ib2JveFtpbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcml2YWN5Q29tYm9ib3guZGlzcGxheVRleHRbaW5kZXhdID0gcHJpdmFjeUNvbWJvYm94W2luZGV4XS5kaXNwbGF5VGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwbGFu5pWw5o2u5o+Q5LqkXHJcbiAgICAgICAgYXN5bmMgQ3JlYXRlT3JVcGRhdGVQbGFuKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvc2NoZWR1bGUvQ3JlYXRlT3JVcGRhdGVTY2hlZHVsZScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WuouaItyDmoYjku7bliJvlu7rmlbDmja5cclxuICAgICAgICBhc3luYyBHZXRHZW5lcmFsQ29tYm9ib3hMaXN0KGtleVdvcmQsIC4uLmFyZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleVdvcmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoga2V5V29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IGFyZ1swXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2dlbmVyYWxDb2RlQ29tYm9TZXJ2aWNlL0dldEdlbmVyYWxDb21ib2JveExpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGggIT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIENvbWJvYm94TGlzdCA9IHJlc0RhdGEuZGF0YS5yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIENvbWJvYm94TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gQ29tYm9ib3hMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC52YWx1ZVtpbmRleF0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmRpc3BsYXlUZXh0W2luZGV4XSA9IGl0ZW0uZGlzcGxheVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQuaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLnZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5kaXNwbGF5VGV4dCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhc2VJZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQuaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsaWVudCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBrZXlXb3JkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQ29tYm9ib3hMaXN0ID0gcmVzRGF0YS5kYXRhLnJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb21ib2JveExpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gQ29tYm9ib3hMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVsYXRpb25JZC52YWx1ZVtpbmRleF0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWxhdGlvbklkLmRpc3BsYXlUZXh0W2luZGV4XSA9IGl0ZW0uZGlzcGxheVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wbG95ZWUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoga2V5V29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRDb2RlOiBhcmdbMF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9nZW5lcmFsQ29kZUNvbWJvU2VydmljZS9HZXRHZW5lcmFsQ29tYm9ib3hMaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLkdldFBsYW5Gb3JFZGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnY2xpZW50Jyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnY2FzZScpO1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9uczEudGltZSA9IG5vdztcclxuICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9ucy50aW1lID0gbm93O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19