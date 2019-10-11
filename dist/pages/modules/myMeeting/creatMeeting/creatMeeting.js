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

var _nowDateTimePicker = require('./../../../../components/Date/nowDateTimePicker.js');

var _nowDateTimePicker2 = _interopRequireDefault(_nowDateTimePicker);

var _endDateTimePicker = require('./../../../../components/Date/endDateTimePicker.js');

var _endDateTimePicker2 = _interopRequireDefault(_endDateTimePicker);

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _pickerOption = require('./../../../../components/picker/pickerOption.js');

var _pickerOption2 = _interopRequireDefault(_pickerOption);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "StartTime": { "v-bind:timeObj.sync": "dateOptions", "v-bind:dateData.sync": "StartTime", "v-bind:twoWayTitle.once": "StartTime" }, "EndTime": { "v-bind:timeObj.sync": "dateOptions1", "v-bind:dateData.sync": "EndTime", "v-bind:twoWayTitle.once": "EndTime" }, "Title": { "xmlns:v-bind": "", "v-bind:input.sync": "Title", "v-bind:inputValue.sync": "TitleValue", "v-bind:twoWayTitle.once": "TitleValue" }, "Category": { "v-bind:options.sync": "Category", "v-bind:index.sync": "CategoryIndex", "v-bind:twoWayTitle.once": "CategoryIndex" }, "Subject": { "v-bind:input.sync": "Subject", "v-bind:inputValue.sync": "SubjectValue", "v-bind:twoWayTitle.once": "SubjectValue" }, "ClientId": { "v-bind:options.sync": "ClientId", "v-bind:index.sync": "ClientIdIndex", "v-bind:twoWayTitle.once": "ClientIdIndex" }, "CaseId": { "v-bind:options.sync": "CaseId", "v-bind:index.sync": "CaseIdIndex", "v-bind:twoWayTitle.once": "CaseIdIndex" }, "Moderator": { "v-bind:options.sync": "Moderator", "v-bind:index.sync": "ModeratorIndex", "v-bind:twoWayTitle.once": "ModeratorIndex" }, "Linker": { "v-bind:options.sync": "Linker", "v-bind:index.sync": "LinkerIndex", "v-bind:twoWayTitle.once": "LinkerIndex" }, "Visitor": { "v-bind:input.sync": "Visitor", "v-bind:inputValue.sync": "VisitorValue", "v-bind:twoWayTitle.once": "VisitorValue" }, "Remark": { "v-bind:input.sync": "Remark", "v-bind:inputValue.sync": "RemarkValue", "v-bind:twoWayTitle.once": "RemarkValue" }, "Prepare": { "v-bind:input.sync": "Prepare", "v-bind:inputValue.sync": "PrepareValue", "v-bind:twoWayTitle.once": "PrepareValue" } }, _this.$events = {}, _this.components = {
            StartTime: _nowDateTimePicker2.default,
            EndTime: _endDateTimePicker2.default,
            Title: _input2.default, //会议名称
            Category: _pickerOption2.default, //会议类型
            Subject: _input2.default, //会议议题
            ClientId: _pickerOption2.default, //客户编款号,
            CaseId: _pickerOption2.default, //案件编号
            Moderator: _pickerOption2.default, //会议主持人
            Linker: _pickerOption2.default, //会议联系人
            Visitor: _input2.default,
            Remark: _input2.default,
            Prepare: _input2.default
        }, _this.data = {
            addOpacity: 1,
            submitData: {},
            Title: {
                title: '会议名称',
                name: 'Title',
                warning: true
            },
            TitleValue: '',
            Visitor: {
                title: '嘉宾',
                name: 'Visitor',
                warning: false
            },
            VisitorValue: '',
            Remark: {
                title: '备注',
                name: 'Remark',
                options: true,
                warning: false
            },
            RemarkValue: '',
            Prepare: {
                title: '会议准备',
                name: 'Prepare',
                options: true,
                warning: false
            },
            PrepareValue: '',
            Category: {
                title: '会议类型',
                key: 'displayText',
                name: 'Category',
                data: [],
                warning: false
            },
            CategoryIndex: -1,
            Subject: {
                title: '会议议题',
                name: 'Subject',
                warning: true
            },
            SubjectValue: '',
            ClientId: {
                title: '关联客户编号',
                key: 'displayText',
                name: 'ClientId',
                data: [],
                warning: false
            },
            ClientIdIndex: -1,
            CaseId: {
                title: '关联案件编号',
                key: 'displayText',
                name: 'CaseId',
                data: [],
                warning: false
            },
            CaseIdIndex: -1,
            //时间选择器
            dateOptions: {
                title: '开始时间',
                name: 'StartTime',
                tiem: ''
            },
            StartTime: '',
            dateOptions1: {
                title: '结束时间',
                name: 'EndTime',
                time: ''
            },
            EndTime: '',
            Moderator: {
                title: '会议主持人',
                key: 'displayText',
                name: 'Moderator',
                data: [],
                warning: true
            },
            ModeratorIndex: -1,
            Linker: {
                title: '会议联系人',
                key: 'displayText',
                name: 'Linker',
                data: [],
                warning: false
            },
            LinkerIndex: -1,
            // 会议参与人
            Participant: {
                value: [],
                displayText: [],
                index: [],
                ParticipantWarning: true
            },
            //会议级别
            Level: {
                title: '会议级别',
                value: [],
                displayText: [],
                index: -1
            },
            //会议提醒
            meetingRemind: {
                title: '会议提醒',
                value: [0, 5, 10, 15, 30, 45, 60, 90, 120, 150, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 1440, 2880, 4320, 5760, 10080, 20160],
                displayText: ['无', '5分钟', '10分钟', '15分钟', '30分钟', '45分钟', '1小时', '1.5小时', '2小时', '2.5小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '9小时', '10小时', '11小时', '0.5天', '1天', '2天', '3天', '4天', '1周', '2周'],
                index: -1
            },
            //隐私标记
            IsMarkPrivacy: [{ checked: false, title: '是否隐私' }, { checked: false, title: '是否标记' }]
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                var _this2 = this;

                if (this.submitData.Title && this.submitData.Subject && this.submitData.Moderator && this.submitData.Participant) {
                    wx.setStorageSync('creatMeetingData', this.submitData);
                    wx.navigateTo({
                        url: './chooseMeetingRoom',
                        success: function success() {
                            _this2.addOpacity = 1;
                            _this2.$apply();
                        }
                    });
                } else {
                    this.addOpacity = 1;
                    wx.showToast({
                        title: '请填写必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
                this.$apply();
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
            bindPickerChange: function bindPickerChange(res, e) {
                switch (res) {
                    case 'Participant':
                        this.Participant.index.push(+e.detail.value);
                        (0, _api.myDistinct)(this.Participant.index);
                        var Pindex = this.Participant.index;
                        var Pvalue = [];
                        for (var index in Pindex) {
                            Pvalue[index] = this.Participant.value[Pindex[index]];
                        }
                        this.submitData.Participant = Pvalue.toString();

                        break;
                    case 'Level':
                        this.Level.index = +e.detail.value;
                        this.submitData.Level = this.Level.value[this.Level.index];
                        break;
                    case 'meetingRemind':
                        this.meetingRemind.index = +e.detail.value;
                        if (this.meetingRemind.index >= 0) {
                            this.submitData.IsRemind = "Y";
                            this.submitData.RemindTime = this.meetingRemind.value[this.meetingRemind.index];
                        } else {
                            this.submitData.IsRemind = "N";
                        }
                        break;
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
            }
        }, _this.watch = {
            Participant: function Participant(data) {
                if (data.index.length > 0) {
                    this.Participant.ParticipantWarning = false;
                } else {
                    this.Participant.ParticipantWarning = true;
                }
                this.$apply();
            },
            StartTime: function StartTime(dateData) {
                this.submitData.StartTime = dateData[0] + '/' + dateData[1] + '/' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.$apply();
            },
            EndTime: function EndTime(dateData) {
                this.submitData.EndTime = dateData[0] + '/' + dateData[1] + '/' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.$apply();
            },
            TitleValue: function TitleValue(value) {
                this.submitData.Title = value;
                this.$apply();
            },
            VisitorValue: function VisitorValue(value) {
                this.submitData.Visitor = value;
                this.$apply();
            },
            RemarkValue: function RemarkValue(value) {
                this.submitData.Remark = value;
                this.$apply();
            },
            PrepareVlue: function PrepareVlue(value) {
                this.submitData.Prepare = value;
                this.$apply();
            },
            CategoryIndex: function CategoryIndex(index) {
                this.submitData.Category = this.Category.data[index].value;
                this.$apply();
            },
            SubjectValue: function SubjectValue(value) {
                this.submitData.Subject = value;
                this.$apply();
            },
            ClientIdIndex: function ClientIdIndex(index) {
                this.submitData.ClientId = this.ClientId.data[index].value;
                this.GetGeneralComboboxList('case', this.ClientId.data[index].value);
                this.GetGeneralComboboxList('employee');
                this.$apply();
            },
            CaseIdIndex: function CaseIdIndex(index) {
                this.ModeratorIndex = -1;
                this.Participant.value = [];
                this.Participant.displayText = [];
                this.LinkerIndex = -1;
                this.submitData.Participant = [];
                this.Participant.index = [];
                if (index !== -1) {
                    this.submitData.CaseId = this.CaseId.data[index].value;
                    this.GetGeneralComboboxList('employee', this.CaseId.data[index].value);
                } else {
                    this.submitData.CaseId = '';
                    this.GetGeneralComboboxList('employee');
                }
                this.$apply();
            },
            ModeratorIndex: function ModeratorIndex(index) {
                this.submitData.Moderator = index !== -1 ? this.Moderator.data[index].value : '';
                this.$apply();
            },
            LinkerIndex: function LinkerIndex(index) {
                this.submitData.Linker = index !== -1 ? this.Linker.data[index].value : '';
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'GetMeetingForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, EditData, levelCombobox, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {};
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/meeting/GetMeetingForEdit', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    EditData = resData.data.result;

                                    wx.setStorageSync('meetingRoomData', EditData.meetingRoomCombobox);
                                    console.log(EditData);
                                    //会议类型
                                    this.submitData.Id = EditData.id;
                                    this.Category.data = EditData.categoryCombobox;
                                    levelCombobox = EditData.levelCombobox;

                                    for (index in levelCombobox) {
                                        this.Level.value[index] = levelCombobox[index].value;
                                        this.Level.displayText[index] = levelCombobox[index].displayText;
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

            function GetMeetingForEdit() {
                return _ref2.apply(this, arguments);
            }

            return GetMeetingForEdit;
        }()
        //客户 案件创建数据

    }, {
        key: 'GetGeneralComboboxList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(keyWord) {
                var data,
                    resData,
                    ComboboxList,
                    index,
                    item,
                    _args2 = arguments;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.t0 = keyWord;
                                _context2.next = _context2.t0 === 'client' ? 3 : _context2.t0 === 'case' ? 9 : _context2.t0 === 'employee' ? 15 : 22;
                                break;

                            case 3:
                                data = {
                                    class: keyWord
                                };
                                _context2.next = 6;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 6:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.ClientId.data = resData.data.result;
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 23);

                            case 9:
                                data = {
                                    class: keyWord,
                                    parentId: _args2.length <= 1 ? undefined : _args2[1]
                                };
                                _context2.next = 12;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 12:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    if (resData.data.result.length !== 0) {
                                        this.CaseId.data = resData.data.result;
                                    } else {
                                        this.CaseId.data = [];
                                        this.submitData.CaseId = '';
                                        this.CaseIdIndex = -1;
                                    }
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 23);

                            case 15:
                                data = {
                                    class: keyWord,
                                    shortCode: _args2.length <= 1 ? undefined : _args2[1]
                                };
                                _context2.next = 18;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 18:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    ComboboxList = resData.data.result;

                                    this.Moderator.data = ComboboxList;
                                    this.Linker.data = ComboboxList;
                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.Participant.value[index] = item.value;
                                        this.Participant.displayText[index] = item.displayText;
                                    }
                                }
                                this.$apply();
                                return _context2.abrupt('break', 23);

                            case 22:
                                return _context2.abrupt('break', 23);

                            case 23:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetGeneralComboboxList(_x) {
                return _ref3.apply(this, arguments);
            }

            return GetGeneralComboboxList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetMeetingForEdit();
            this.GetGeneralComboboxList('client');
            this.GetGeneralComboboxList('employee');
            var now = new Date();
            this.dateOptions1.time = now;
            this.dateOptions.time = now;
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myMeeting/creatMeeting/creatMeeting'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0TWVldGluZy5qcyJdLCJuYW1lcyI6WyJjbGllbnREZXRhaWwiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGFydFRpbWUiLCJFbmRUaW1lIiwiVGl0bGUiLCJDYXRlZ29yeSIsIlN1YmplY3QiLCJDbGllbnRJZCIsIkNhc2VJZCIsIk1vZGVyYXRvciIsIkxpbmtlciIsIlZpc2l0b3IiLCJSZW1hcmsiLCJQcmVwYXJlIiwiZGF0YSIsImFkZE9wYWNpdHkiLCJzdWJtaXREYXRhIiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsIlRpdGxlVmFsdWUiLCJWaXNpdG9yVmFsdWUiLCJvcHRpb25zIiwiUmVtYXJrVmFsdWUiLCJQcmVwYXJlVmFsdWUiLCJrZXkiLCJDYXRlZ29yeUluZGV4IiwiU3ViamVjdFZhbHVlIiwiQ2xpZW50SWRJbmRleCIsIkNhc2VJZEluZGV4IiwiZGF0ZU9wdGlvbnMiLCJ0aWVtIiwiZGF0ZU9wdGlvbnMxIiwidGltZSIsIk1vZGVyYXRvckluZGV4IiwiTGlua2VySW5kZXgiLCJQYXJ0aWNpcGFudCIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJpbmRleCIsIlBhcnRpY2lwYW50V2FybmluZyIsIkxldmVsIiwibWVldGluZ1JlbWluZCIsIklzTWFya1ByaXZhY3kiLCJjaGVja2VkIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3VjY2VzcyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJpc0NoZWNrZWQiLCJlIiwidGFyZ2V0IiwiaWQiLCJJc01hcmsiLCJQcml2YWN5IiwiYmluZFBpY2tlckNoYW5nZSIsInJlcyIsInB1c2giLCJkZXRhaWwiLCJQaW5kZXgiLCJQdmFsdWUiLCJ0b1N0cmluZyIsIklzUmVtaW5kIiwiUmVtaW5kVGltZSIsImRlbGV0ZVBJdGVtIiwic3BsaWNlIiwic3BsaXQiLCJ3YXRjaCIsImxlbmd0aCIsImRhdGVEYXRhIiwiUHJlcGFyZVZsdWUiLCJHZXRHZW5lcmFsQ29tYm9ib3hMaXN0IiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsIkVkaXREYXRhIiwicmVzdWx0IiwibWVldGluZ1Jvb21Db21ib2JveCIsImNvbnNvbGUiLCJsb2ciLCJJZCIsImNhdGVnb3J5Q29tYm9ib3giLCJsZXZlbENvbWJvYm94Iiwia2V5V29yZCIsImNsYXNzIiwicGFyZW50SWQiLCJzaG9ydENvZGUiLCJDb21ib2JveExpc3QiLCJpdGVtIiwiR2V0TWVldGluZ0ZvckVkaXQiLCJub3ciLCJEYXRlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7SUFNcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyx1QkFBc0IsYUFBdkIsRUFBcUMsd0JBQXVCLFdBQTVELEVBQXdFLDJCQUEwQixXQUFsRyxFQUFiLEVBQTRILFdBQVUsRUFBQyx1QkFBc0IsY0FBdkIsRUFBc0Msd0JBQXVCLFNBQTdELEVBQXVFLDJCQUEwQixTQUFqRyxFQUF0SSxFQUFrUCxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLDBCQUF5QixZQUF4RSxFQUFxRiwyQkFBMEIsWUFBL0csRUFBMVAsRUFBdVgsWUFBVyxFQUFDLHVCQUFzQixVQUF2QixFQUFrQyxxQkFBb0IsZUFBdEQsRUFBc0UsMkJBQTBCLGVBQWhHLEVBQWxZLEVBQW1mLFdBQVUsRUFBQyxxQkFBb0IsU0FBckIsRUFBK0IsMEJBQXlCLGNBQXhELEVBQXVFLDJCQUEwQixjQUFqRyxFQUE3ZixFQUE4bUIsWUFBVyxFQUFDLHVCQUFzQixVQUF2QixFQUFrQyxxQkFBb0IsZUFBdEQs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TDtBQUNIOzs7O0FBSUdqQyxvQyxHQUFPO0FBQ1BnRiwyQ0FBT0QsT0FEQTtBQUVQRztBQUZPLGlDOzt1Q0FJU2YsZUFBS0MsT0FBTCxDQUNoQixrRUFEZ0IsRUFFaEIsTUFGZ0IsRUFHaEJwRSxJQUhnQixDOzs7QUFBaEJxRSx1Qzs7QUFLSixvQ0FBSUEsUUFBUUMsVUFBUixJQUFzQixHQUExQixFQUErQjtBQUN2QmEsZ0RBRHVCLEdBQ1JkLFFBQVFyRSxJQUFSLENBQWF3RSxNQURMOztBQUUzQix5Q0FBSzdFLFNBQUwsQ0FBZUssSUFBZixHQUFvQm1GLFlBQXBCO0FBQ0EseUNBQUt2RixNQUFMLENBQVlJLElBQVosR0FBaUJtRixZQUFqQjtBQUNBLHlDQUFTMUQsS0FBVCxJQUFrQjBELFlBQWxCLEVBQWdDO0FBQ3hCQyw0Q0FEd0IsR0FDakJELGFBQWExRCxLQUFiLENBRGlCOztBQUU1Qiw2Q0FBS0gsV0FBTCxDQUFpQkMsS0FBakIsQ0FBdUJFLEtBQXZCLElBQWdDMkQsS0FBSzdELEtBQXJDO0FBQ0EsNkNBQUtELFdBQUwsQ0FBaUJFLFdBQWpCLENBQTZCQyxLQUE3QixJQUFzQzJELEtBQUs1RCxXQUEzQztBQUNIO0FBQ0o7QUFDRCxxQ0FBS1MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FPSDtBQUNMLGlCQUFLb0QsaUJBQUw7QUFDQSxpQkFBS25CLHNCQUFMLENBQTRCLFFBQTVCO0FBQ0EsaUJBQUtBLHNCQUFMLENBQTRCLFVBQTVCO0FBQ0EsZ0JBQUlvQixNQUFJLElBQUlDLElBQUosRUFBUjtBQUNBLGlCQUFLckUsWUFBTCxDQUFrQkMsSUFBbEIsR0FBdUJtRSxHQUF2QjtBQUNBLGlCQUFLdEUsV0FBTCxDQUFpQkcsSUFBakIsR0FBc0JtRSxHQUF0QjtBQUNIOzs7O0VBbllxQ0UsZUFBS0MsSTs7a0JBQTFCMUcsWSIsImZpbGUiOiJjcmVhdE1lZXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQge215RGlzdGluY3R9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IFN0YXJ0VGltZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0RhdGUvbm93RGF0ZVRpbWVQaWNrZXInO1xuICAgIGltcG9ydCBFbmRUaW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvRGF0ZS9lbmREYXRlVGltZVBpY2tlcic7XG4gICAgaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgVmlzaXRvciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFJlbWFyayBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFByZXBhcmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGltcG9ydCBTdWJqZWN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgQ2xpZW50SWQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvcGlja2VyT3B0aW9uJztcbiAgICBpbXBvcnQgQ2FzZUlkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlck9wdGlvbic7XG4gICAgaW1wb3J0IE1vZGVyYXRvciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGltcG9ydCBMaW5rZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvcGlja2VyT3B0aW9uJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjbGllbnREZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU3RhcnRUaW1lXCI6e1widi1iaW5kOnRpbWVPYmouc3luY1wiOlwiZGF0ZU9wdGlvbnNcIixcInYtYmluZDpkYXRlRGF0YS5zeW5jXCI6XCJTdGFydFRpbWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJTdGFydFRpbWVcIn0sXCJFbmRUaW1lXCI6e1widi1iaW5kOnRpbWVPYmouc3luY1wiOlwiZGF0ZU9wdGlvbnMxXCIsXCJ2LWJpbmQ6ZGF0ZURhdGEuc3luY1wiOlwiRW5kVGltZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkVuZFRpbWVcIn0sXCJUaXRsZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiVGl0bGVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlRpdGxlVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJUaXRsZVZhbHVlXCJ9LFwiQ2F0ZWdvcnlcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJDYXRlZ29yeVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkNhdGVnb3J5SW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDYXRlZ29yeUluZGV4XCJ9LFwiU3ViamVjdFwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJTdWJqZWN0XCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJTdWJqZWN0VmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJTdWJqZWN0VmFsdWVcIn0sXCJDbGllbnRJZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkNsaWVudElkXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiQ2xpZW50SWRJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkNsaWVudElkSW5kZXhcIn0sXCJDYXNlSWRcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJDYXNlSWRcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJDYXNlSWRJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkNhc2VJZEluZGV4XCJ9LFwiTW9kZXJhdG9yXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiTW9kZXJhdG9yXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiTW9kZXJhdG9ySW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJNb2RlcmF0b3JJbmRleFwifSxcIkxpbmtlclwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkxpbmtlclwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkxpbmtlckluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTGlua2VySW5kZXhcIn0sXCJWaXNpdG9yXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIlZpc2l0b3JcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlZpc2l0b3JWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlZpc2l0b3JWYWx1ZVwifSxcIlJlbWFya1wiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJSZW1hcmtcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlJlbWFya1ZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiUmVtYXJrVmFsdWVcIn0sXCJQcmVwYXJlXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIlByZXBhcmVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlByZXBhcmVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlByZXBhcmVWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBTdGFydFRpbWUsXG4gICAgICAgICAgICBFbmRUaW1lLFxuICAgICAgICAgICAgVGl0bGUsLy/kvJrorq7lkI3np7BcbiAgICAgICAgICAgIENhdGVnb3J5LC8v5Lya6K6u57G75Z6LXG4gICAgICAgICAgICBTdWJqZWN0LC8v5Lya6K6u6K6u6aKYXG4gICAgICAgICAgICBDbGllbnRJZCwvL+WuouaIt+e8luasvuWPtyxcbiAgICAgICAgICAgIENhc2VJZCwvL+ahiOS7tue8luWPt1xuICAgICAgICAgICAgTW9kZXJhdG9yLC8v5Lya6K6u5Li75oyB5Lq6XG4gICAgICAgICAgICBMaW5rZXIsLy/kvJrorq7ogZTns7vkurpcbiAgICAgICAgICAgIFZpc2l0b3IsXG4gICAgICAgICAgICBSZW1hcmssXG4gICAgICAgICAgICBQcmVwYXJlLFxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYWRkT3BhY2l0eToxLFxuICAgICAgICAgICAgc3VibWl0RGF0YTp7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S8muiuruWQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RpdGxlJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRpdGxlVmFsdWU6ICcnLFxuICAgICAgICAgICAgVmlzaXRvcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5ZiJ5a6+JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVmlzaXRvcicsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVmlzaXRvclZhbHVlOiAnJyxcbiAgICAgICAgICAgIFJlbWFyazoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSH5rOoJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVtYXJrJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOnRydWUsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVtYXJrVmFsdWU6ICcnLFxuICAgICAgICAgICAgUHJlcGFyZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lya6K6u5YeG5aSHJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUHJlcGFyZScsXG4gICAgICAgICAgICAgICAgb3B0aW9uczp0cnVlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFByZXBhcmVWYWx1ZTogJycsXG4gICAgICAgICAgICBDYXRlZ29yeToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lya6K6u57G75Z6LJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5VGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENhdGVnb3J5SW5kZXg6IC0xLFxuICAgICAgICAgICAgU3ViamVjdDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lya6K6u6K6u6aKYJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3ViamVjdCcsXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTdWJqZWN0VmFsdWU6ICcnLFxuICAgICAgICAgICAgQ2xpZW50SWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WFs+iBlOWuouaIt+e8luWPtycsXG4gICAgICAgICAgICAgICAga2V5OiAnZGlzcGxheVRleHQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDbGllbnRJZCcsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnRJZEluZGV4OiAtMSxcbiAgICAgICAgICAgIENhc2VJZDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5YWz6IGU5qGI5Lu257yW5Y+3JyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5VGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Nhc2VJZCcsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDYXNlSWRJbmRleDogLTEsXG4gICAgICAgICAgICAvL+aXtumXtOmAieaLqeWZqFxuICAgICAgICAgICAgZGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+W8gOWni+aXtumXtCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1N0YXJ0VGltZScsXG4gICAgICAgICAgICAgICAgdGllbTonJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICBkYXRlT3B0aW9uczE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e7k+adn+aXtumXtCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZFRpbWUnLFxuICAgICAgICAgICAgICAgIHRpbWU6JydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFbmRUaW1lOiAnJyxcbiAgICAgICAgICAgIE1vZGVyYXRvcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lya6K6u5Li75oyB5Lq6JyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5VGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01vZGVyYXRvcicsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE1vZGVyYXRvckluZGV4OiAtMSxcbiAgICAgICAgICAgIExpbmtlcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lya6K6u6IGU57O75Lq6JyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5VGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xpbmtlcicsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMaW5rZXJJbmRleDogLTEsXG4gICAgICAgICAgICAvLyDkvJrorq7lj4LkuI7kurpcbiAgICAgICAgICAgIFBhcnRpY2lwYW50OntcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIGluZGV4OiBbXSxcbiAgICAgICAgICAgICAgICBQYXJ0aWNpcGFudFdhcm5pbmc6dHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5Lya6K6u57qn5YirXG4gICAgICAgICAgICBMZXZlbDp7XG4gICAgICAgICAgICAgICAgdGl0bGU6J+S8muiurue6p+WIqycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/kvJrorq7mj5DphpJcbiAgICAgICAgICAgIG1lZXRpbmdSZW1pbmQ6e1xuICAgICAgICAgICAgICAgIHRpdGxlOifkvJrorq7mj5DphpInLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbMCw1LDEwLDE1LDMwLDQ1LDYwLDkwLDEyMCwxNTAsMTgwLDI0MCwzMDAsMzYwLDQyMCw0ODAsNTQwLDYwMCw2NjAsNzIwLDE0NDAsMjg4MCw0MzIwLDU3NjAsMTAwODAsMjAxNjBdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbJ+aXoCcsJzXliIbpkp8nLCcxMOWIhumSnycsJzE15YiG6ZKfJywnMzDliIbpkp8nLCc0NeWIhumSnycsJzHlsI/ml7YnLCcxLjXlsI/ml7YnLCcy5bCP5pe2JywnMi415bCP5pe2JywnM+Wwj+aXticsJzTlsI/ml7YnLCc15bCP5pe2JywnNuWwj+aXticsJzflsI/ml7YnLCc45bCP5pe2JywnOeWwj+aXticsJzEw5bCP5pe2JywnMTHlsI/ml7YnLCcwLjXlpKknLCcx5aSpJywnMuWkqScsJzPlpKknLCc05aSpJywnMeWRqCcsJzLlkagnXSxcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/pmpDnp4HmoIforrBcbiAgICAgICAgICAgIElzTWFya1ByaXZhY3k6W1xuICAgICAgICAgICAgICAgIHtjaGVja2VkOmZhbHNlLHRpdGxlOifmmK/lkKbpmpDnp4EnfSxcbiAgICAgICAgICAgICAgICB7Y2hlY2tlZDpmYWxzZSx0aXRsZTon5piv5ZCm5qCH6K6wJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaEVuZCgpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3VibWl0RGF0YS5UaXRsZSYmdGhpcy5zdWJtaXREYXRhLlN1YmplY3QmJnRoaXMuc3VibWl0RGF0YS5Nb2RlcmF0b3ImJnRoaXMuc3VibWl0RGF0YS5QYXJ0aWNpcGFudCl7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjcmVhdE1lZXRpbmdEYXRhJywgdGhpcy5zdWJtaXREYXRhKTtcbiAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4vY2hvb3NlTWVldGluZ1Jvb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczooKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eT0xO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNDaGVja2VkKGUpe1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkPT0nSXNNYXJrJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSXNNYXJrUHJpdmFjeVsxXS5jaGVja2VkPSF0aGlzLklzTWFya1ByaXZhY3lbMV0uY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5Jc01hcmtQcml2YWN5WzFdLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzTWFyaz0nWSc7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzTWFyaz0nTic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5pZD09J1ByaXZhY3knKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc01hcmtQcml2YWN5WzBdLmNoZWNrZWQ9IXRoaXMuSXNNYXJrUHJpdmFjeVswXS5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLklzTWFya1ByaXZhY3lbMF0uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUHJpdmFjeT0nWSc7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlByaXZhY3k9J04nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBpY2tlckNoYW5nZShyZXMsIGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYXJ0aWNpcGFudCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5pbmRleC5wdXNoKCtlLmRldGFpbC52YWx1ZSkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15RGlzdGluY3QodGhpcy5QYXJ0aWNpcGFudC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFBpbmRleD10aGlzLlBhcnRpY2lwYW50LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBQdmFsdWU9W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBQaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB2YWx1ZVtpbmRleF09dGhpcy5QYXJ0aWNpcGFudC52YWx1ZVtQaW5kZXhbaW5kZXhdXTsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQ9UHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0xldmVsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTGV2ZWwuaW5kZXggPSArZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTGV2ZWw9dGhpcy5MZXZlbC52YWx1ZVt0aGlzLkxldmVsLmluZGV4XVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWVldGluZ1JlbWluZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZXRpbmdSZW1pbmQuaW5kZXg9ICtlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubWVldGluZ1JlbWluZC5pbmRleD49MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNSZW1pbmQ9XCJZXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVtaW5kVGltZT10aGlzLm1lZXRpbmdSZW1pbmQudmFsdWVbdGhpcy5tZWV0aW5nUmVtaW5kLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Jc1JlbWluZD1cIk5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlUEl0ZW0oaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuaW5kZXguc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgICAgIHZhciBQdmFsdWU9dGhpcy5zdWJtaXREYXRhLlBhcnRpY2lwYW50LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgUHZhbHVlLnNwbGljZShpbmRleCwxKVxuICAgICAgICAgICAgICAgIFB2YWx1ZT1QdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQ9UHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgd2F0Y2g9e1xuICAgICAgICAgICAgUGFydGljaXBhbnQoZGF0YSl7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5pbmRleC5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuUGFydGljaXBhbnRXYXJuaW5nPWZhbHNlO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LlBhcnRpY2lwYW50V2FybmluZz10cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFN0YXJ0VGltZShkYXRlRGF0YSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlN0YXJ0VGltZT1kYXRlRGF0YVswXSsnLycrZGF0ZURhdGFbMV0rJy8nK2RhdGVEYXRhWzJdKycgJytkYXRlRGF0YVszXSsnOicrZGF0ZURhdGFbNF0rJzonK2RhdGVEYXRhWzVdXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFbmRUaW1lKGRhdGVEYXRhKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRW5kVGltZT1kYXRlRGF0YVswXSsnLycrZGF0ZURhdGFbMV0rJy8nK2RhdGVEYXRhWzJdKycgJytkYXRlRGF0YVszXSsnOicrZGF0ZURhdGFbNF0rJzonK2RhdGVEYXRhWzVdXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBUaXRsZVZhbHVlKHZhbHVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuVGl0bGU9dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBWaXNpdG9yVmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5WaXNpdG9yPXZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVtYXJrVmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5SZW1hcms9dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQcmVwYXJlVmx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlByZXBhcmU9dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDYXRlZ29yeUluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2F0ZWdvcnk9dGhpcy5DYXRlZ29yeS5kYXRhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFN1YmplY3RWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlN1YmplY3Q9dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnRJZEluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2xpZW50SWQ9dGhpcy5DbGllbnRJZC5kYXRhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb21ib2JveExpc3QoJ2Nhc2UnLHRoaXMuQ2xpZW50SWQuZGF0YVtpbmRleF0udmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnZW1wbG95ZWUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENhc2VJZEluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVyYXRvckluZGV4PS0xO1xuICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQudmFsdWU9W107XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5kaXNwbGF5VGV4dD1bXTtcbiAgICAgICAgICAgICAgICB0aGlzLkxpbmtlckluZGV4PS0xO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5QYXJ0aWNpcGFudD1bXTtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmluZGV4PVtdO1xuICAgICAgICAgICAgICAgIGlmKGluZGV4IT09LTEpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2FzZUlkPXRoaXMuQ2FzZUlkLmRhdGFbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb21ib2JveExpc3QoJ2VtcGxveWVlJyx0aGlzLkNhc2VJZC5kYXRhW2luZGV4XS52YWx1ZSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhc2VJZD0nJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29tYm9ib3hMaXN0KCdlbXBsb3llZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTW9kZXJhdG9ySW5kZXgoaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Nb2RlcmF0b3I9aW5kZXghPT0tMT90aGlzLk1vZGVyYXRvci5kYXRhW2luZGV4XS52YWx1ZTonJztcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIExpbmtlckluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkxpbmtlcj1pbmRleCE9PS0xP3RoaXMuTGlua2VyLmRhdGFbaW5kZXhdLnZhbHVlOicnO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgYXN5bmMgR2V0TWVldGluZ0ZvckVkaXQoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL21lZXRpbmcvR2V0TWVldGluZ0ZvckVkaXQnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBFZGl0RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ21lZXRpbmdSb29tRGF0YScsRWRpdERhdGEubWVldGluZ1Jvb21Db21ib2JveCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coRWRpdERhdGEpO1xuICAgICAgICAgICAgICAgIC8v5Lya6K6u57G75Z6LXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklkPUVkaXREYXRhLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnkuZGF0YSA9IEVkaXREYXRhLmNhdGVnb3J5Q29tYm9ib3g7XG4gICAgICAgICAgICAgICAgdmFyIGxldmVsQ29tYm9ib3g9RWRpdERhdGEubGV2ZWxDb21ib2JveDtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIGxldmVsQ29tYm9ib3gpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkxldmVsLnZhbHVlW2luZGV4XSA9IGxldmVsQ29tYm9ib3hbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkxldmVsLmRpc3BsYXlUZXh0W2luZGV4XSA9IGxldmVsQ29tYm9ib3hbaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/lrqLmiLcg5qGI5Lu25Yib5bu65pWw5o2uXG4gICAgICAgIGFzeW5jIEdldEdlbmVyYWxDb21ib2JveExpc3Qoa2V5V29yZCwuLi5hcmcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5V29yZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NsaWVudCc6XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGtleVdvcmRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9nZW5lcmFsQ29kZUNvbWJvU2VydmljZS9HZXRHZW5lcmFsQ29tYm9ib3hMaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGllbnRJZC5kYXRhPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2UnOlxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBrZXlXb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6YXJnWzBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmRhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmRhdGE9W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhc2VJZD0nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZEluZGV4PS0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtcGxveWVlJzpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoga2V5V29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0Q29kZTogYXJnWzBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDb21ib2JveExpc3QgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlcmF0b3IuZGF0YT1Db21ib2JveExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTGlua2VyLmRhdGE9Q29tYm9ib3hMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb21ib2JveExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IENvbWJvYm94TGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC52YWx1ZVtpbmRleF0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuZGlzcGxheVRleHRbaW5kZXhdID0gaXRlbS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLkdldE1lZXRpbmdGb3JFZGl0KCk7XG4gICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb21ib2JveExpc3QoJ2NsaWVudCcpO1xuICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29tYm9ib3hMaXN0KCdlbXBsb3llZScpO1xuICAgICAgICAgICAgdmFyIG5vdz1uZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9uczEudGltZT1ub3c7XG4gICAgICAgICAgICB0aGlzLmRhdGVPcHRpb25zLnRpbWU9bm93O1xuICAgICAgICB9XG4gICAgfVxuIl19