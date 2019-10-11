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

var _DateTimePicker = require('./../../../../components/Date/DateTimePicker.js');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "StartTime": { "xmlns:v-bind": "", "v-bind:timeObj.sync": "dateOptions", "v-bind:dateData.sync": "StartTime", "v-bind:twoWayTitle.once": "StartTime" }, "EndTime": { "v-bind:timeObj.sync": "dateOptions1", "v-bind:dateData.sync": "EndTime", "v-bind:twoWayTitle.once": "EndTime" } }, _this.$events = {}, _this.components = {
            StartTime: _DateTimePicker2.default,
            EndTime: _DateTimePicker2.default
        }, _this.data = {
            title: '',
            addOpacity: 1,
            submitData: {},
            inputChecked: [false, false, false],
            warning: [false, false, false],
            // 类别
            Category: null,
            //客户名称
            ClientId: {
                value: [],
                displayText: [],
                index: -1
            },
            //案件名称
            CaseId: {
                value: [],
                displayText: [],
                index: -1
            },
            //时间选择器
            dateOptions: {
                title: '开始时间',
                name: 'StartTime',
                isChecked: false,
                time: '',
                date: true
            },
            StartTime: '',
            dateOptions1: {
                title: '结束时间',
                name: 'endTime',
                isChecked: false,
                time: '',
                date: false
            },
            EndTime: '',
            // 自报时长
            SelfDuration: 0,
            //工作类别
            WorkType: {
                value: [],
                displayText: [],
                index: -1
            },
            //参与人
            Participant: {
                value: [],
                displayText: [],
                index: []
            },
            // 描述
            Description: '',
            //备注
            Remark: '',
            Timeout: '',
            isData: false
            // Start:0,
            // End:0
        }, _this.watch = {
            StartTime: function StartTime(start) {
                this.submitData.StartTime = start[0] + '/' + start[1] + '/' + start[2] + ' ' + start[3] + ':' + start[4] + ':' + start[5];
                // this.Start=new Date(this.submitData.StartTime).getTime();
                this.$apply();
            },
            EndTime: function EndTime(end) {
                this.submitData.EndTime = end[0] + '/' + end[1] + '/' + end[2] + ' ' + end[3] + ':' + end[4] + ':' + end[5];
                this.$apply();
            },
            SelfDuration: function SelfDuration(value) {
                if (value > 24) {
                    this.warning[3] = true;
                } else {
                    this.warning[3] = false;
                    this.submitData.SelfDuration = value;
                }
            }
        }, _this.computed = {
            SelfDuration: function SelfDuration() {
                var start = new Date(this.submitData.StartTime).getTime();
                var end = new Date(this.submitData.EndTime).getTime();
                var time = end - start;
                var hours = time / 3600000 < 1 ? 0 : (time / 3600000).toFixed(1);
                var minute = time % 3600000 / 60000 > 0 ? (time % 3600000 / 60000 / 60).toFixed(2) : 0;
                var mistiming = (Number(hours) + Number(minute)).toFixed(2);
                return mistiming;
            }
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.WorkType && this.submitData.Description) {
                    this.CreateOrUpdateWorklog(this.submitData);
                } else {
                    this.addOpacity = 1;
                    if (!this.submitData.Description) {
                        this.warning[1] = true;
                    }
                    if (!this.submitData.WorkType) {
                        this.warning[0] = true;
                    }
                    if (!this.submitData.Category) {
                        this.warning[2] = true;
                    }
                    if (!this.submitData.StartTime) {
                        this.dateOptions.isData = true;
                    }
                    if (!this.submitData.EndTime) {
                        this.dateOptions1.isData = true;
                    }
                }
                this.$apply();
            },

            // submitData(){

            //     this.$apply();
            // },
            deletePItem: function deletePItem(index) {
                this.Participant.index.splice(index, 1);
                var Pvalue = this.submitData.Participant.split(',');
                Pvalue.splice(index, 1);
                Pvalue = Pvalue.toString();
                this.submitData.Participant = Pvalue;
                this.$apply();
            },
            bindPickerChange: function bindPickerChange(res, e) {
                switch (res) {
                    case 'Category':
                        this.warning[2] = false;
                        this.submitData.Category = e.detail.value;
                        break;
                    case 'WorkType':
                        this.warning[0] = false;
                        this.WorkType.index = +e.detail.value;
                        this.submitData.WorkType = this.WorkType.value[this.WorkType.index];
                        break;
                    case 'ClientId':
                        this.ClientId.index = +e.detail.value;
                        this.submitData.ClientId = this.ClientId.value[this.ClientId.index];
                        this.GetGeneralComboboxList('case', this.isData, this.ClientId.value[this.ClientId.index]);
                        this.GetGeneralComboboxList('employee', this.isData);
                        break;
                    case 'CaseId':
                        this.CaseId.index = +e.detail.value;
                        this.submitData.CaseId = this.CaseId.value[this.CaseId.index];
                        this.GetGeneralComboboxList('employee', this.isData, this.CaseId.value[this.CaseId.index]);
                        break;
                        break;
                    case 'Participant':
                        this.warning[3] = false;
                        this.Participant.index.push(+e.detail.value);
                        (0, _api.myDistinct)(this.Participant.index);
                        var Pindex = this.Participant.index;
                        var Pvalue = [];
                        for (var index in Pindex) {
                            Pvalue[index] = this.Participant.value[Pindex[index]];
                        }
                        this.submitData.Participant = Pvalue.toString();
                        break;
                    default:
                        break;
                }
                this.$apply();
            },
            bindinput: function bindinput(e) {
                var inputData = e.detail.value;
                switch (e.target.id) {
                    case 'Description':
                        if (inputData) {
                            this.warning[1] = false;
                            this.submitData.Description = e.detail.value;
                        } else {
                            this.warning[1] = true;
                        }
                        break;
                    case 'Remark':
                        this.submitData.Remark = e.detail.value;
                        break;
                    case 'SelfDuration':
                        if (+e.detail.value > 24) {
                            this.warning[3] = true;
                        } else {
                            this.warning[3] = false;
                            this.submitData.SelfDuration = e.detail.value;
                        }
                        break;
                    default:
                        break;
                }
                this.$apply();
            },

            // input获取焦点
            bindfocus: function bindfocus(index, e) {
                if (e.target.id == 'Description' && !e.detail.value) {
                    this.warning[1] = true;
                }
                this.inputChecked[index] = !this.inputChecked[index];
                this.$apply();
            },

            //input失去焦点
            bindblur: function bindblur(index) {
                this.inputChecked[index] = !this.inputChecked[index];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'GetWorklogForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var formatData, resData, WorklogForEditData, categoryCombobox, i, workType, index, WorkType;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!data.isData) {
                                    _context.next = 8;
                                    break;
                                }

                                formatData = {
                                    id: data.id,
                                    clientid: data.clientId,
                                    caseid: data.caseId,
                                    isconverted: true
                                };
                                _context.next = 4;
                                return _ajax2.default.getData('/api/services/web/worklog/GetWorklogForEdit', 'post', formatData);

                            case 4:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    WorklogForEditData = resData.data.result;

                                    console.log(WorklogForEditData);
                                    //类别
                                    categoryCombobox = WorklogForEditData.categoryCombobox;

                                    for (i = 0; i < categoryCombobox.length; i++) {
                                        if (categoryCombobox[i].isSelected) {
                                            categoryCombobox[i]['isShow'] = true;
                                            this.submitData.Category = categoryCombobox[i].value;
                                        }
                                    }
                                    this.Category = categoryCombobox;
                                    //客户名称
                                    this.submitData.ClientId = WorklogForEditData.clientId;
                                    this.ClientId.value[0] = WorklogForEditData.clientId;
                                    this.ClientId.displayText[0] = WorklogForEditData.clientName;
                                    this.ClientId.index = 0;
                                    this.ClientId.isSelected = true;
                                    // if(WorklogForEditData.clientId){
                                    //     var ClientIdValue=this.ClientId.value;
                                    //     for(var index in ClientIdValue){
                                    //         if(ClientIdValue[index]==WorklogForEditData.clientId){
                                    //             this.ClientId.index=index;
                                    //         }
                                    //     }
                                    // }
                                    // 案件名称
                                    this.submitData.CaseId = WorklogForEditData.caseId;
                                    this.CaseId.value[0] = WorklogForEditData.caseId;
                                    this.CaseId.displayText[0] = WorklogForEditData.caseName;
                                    this.CaseId.index = 0;
                                    this.CaseId.isSelected = true;
                                    // if(WorklogForEditData.caseId){
                                    //     var CaseIdValue=this.CaseId.value;
                                    //     for(var index in CaseIdValue){
                                    //         if(CaseIdValue[index]==WorklogForEditData.caseId){
                                    //             this.CaseId.index=index;
                                    //         }
                                    //     }
                                    // }
                                    //工作类别
                                    this.submitData.WorkType = WorklogForEditData.workType;
                                    workType = WorklogForEditData.workType;

                                    for (index in WorklogForEditData.workTypeCombobox) {
                                        this.WorkType.value[index] = WorklogForEditData.workTypeCombobox[index].value;
                                        this.WorkType.displayText[index] = WorklogForEditData.workTypeCombobox[index].displayText;
                                    }
                                    this.WorkType.isSelected = true;
                                    if (workType) {
                                        WorkType = this.WorkType.value;

                                        for (index in WorkType) {
                                            if (WorkType[index] == workType) {
                                                this.WorkType.index = index;
                                            }
                                        }
                                    }
                                    //参与人
                                    this.submitData.Participant = WorklogForEditData.participant;
                                    //自报时长
                                    this.submitData.SelfDuration = WorklogForEditData.selfDuration;
                                    this.SelfDuration = WorklogForEditData.selfDuration;
                                    //描述
                                    this.submitData.Description = WorklogForEditData.description;
                                    this.Description = WorklogForEditData.description;
                                    //备注
                                    this.submitData.Remark = WorklogForEditData.remark;
                                    this.Remark = WorklogForEditData.remark;
                                    this.submitData.IsConverted = 'True';
                                    this.submitData.Origin = data.id;
                                    this.submitData.Id = data.id;
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: '网络故障',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }
                                _context.next = 13;
                                break;

                            case 8:
                                formatData = {};
                                _context.next = 11;
                                return _ajax2.default.getData('/api/services/web/worklog/GetWorklogForEdit', 'post', formatData);

                            case 11:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    WorklogForEditData = resData.data.result;

                                    this.submitData.Id = WorklogForEditData.id;
                                    //类别
                                    categoryCombobox = WorklogForEditData.categoryCombobox;

                                    this.Category = categoryCombobox;
                                    //工作类别
                                    for (index in WorklogForEditData.workTypeCombobox) {
                                        this.WorkType.value[index] = WorklogForEditData.workTypeCombobox[index].value;
                                        this.WorkType.displayText[index] = WorklogForEditData.workTypeCombobox[index].displayText;
                                    }
                                } else {
                                    wx.showToast({
                                        title: '网络故障',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 13:
                                this.$apply();

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetWorklogForEdit(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetWorklogForEdit;
        }()
    }, {
        key: 'GetGeneralComboboxList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(keyWord, isData) {
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
                                _context2.next = _context2.t0 === 'case' ? 3 : _context2.t0 === 'client' ? 9 : _context2.t0 === 'employee' ? 16 : 23;
                                break;

                            case 3:
                                data = {
                                    class: keyWord,
                                    parentId: _args2.length <= 2 ? undefined : _args2[2]
                                };
                                _context2.next = 6;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 6:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    console.log(resData.data.result.length !== 0);
                                    if (resData.data.result.length !== 0) {
                                        ComboboxList = resData.data.result;

                                        for (index in ComboboxList) {
                                            item = ComboboxList[index];

                                            this.CaseId.value[index] = item.value;
                                            this.CaseId.displayText[index] = item.displayText;
                                            if (isData) {
                                                this.CaseId.isSelected = true;
                                            } else {
                                                this.CaseId.isSelected = false;
                                            }
                                            this.CaseId.index = -1;
                                        }
                                    } else {
                                        this.submitData.CaseId = '';
                                        this.CaseId.index = -1;
                                        this.CaseId.value = [];
                                        this.CaseId.displayText = [];
                                    }
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 24);

                            case 9:
                                data = {
                                    class: keyWord,
                                    parentId: ""
                                };
                                _context2.next = 12;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 12:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    ComboboxList = resData.data.result;

                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.ClientId.value[index] = item.value;
                                        this.ClientId.displayText[index] = item.displayText;
                                        if (isData) {
                                            this.ClientId.isSelected = true;
                                        } else {
                                            this.ClientId.isSelected = false;
                                        }
                                    }
                                }
                                this.$apply();
                                return _context2.abrupt('break', 24);

                            case 16:
                                data = {
                                    class: keyWord,
                                    shortCode: _args2.length <= 2 ? undefined : _args2[2]
                                };
                                _context2.next = 19;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 19:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.Participant.value = [];
                                    this.Participant.displayText = [];
                                    this.Participant.isSelected = false;
                                    this.Participant.index = [];
                                    ComboboxList = resData.data.result;

                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.Participant.value[index] = item.value;
                                        this.Participant.displayText[index] = item.displayText;
                                        if (isData) {
                                            this.Participant.isSelected = true;
                                        } else {
                                            this.Participant.isSelected = false;
                                        }
                                    }
                                }
                                this.$apply();
                                return _context2.abrupt('break', 24);

                            case 23:
                                return _context2.abrupt('break', 24);

                            case 24:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetGeneralComboboxList(_x2, _x3) {
                return _ref3.apply(this, arguments);
            }

            return GetGeneralComboboxList;
        }()
    }, {
        key: 'CreateOrUpdateWorklog',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
                var _this2 = this;

                var resData, isRefresh;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/worklog/CreateOrUpdateWorklog', 'post', data);

                            case 3:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    isRefresh = wx.getStorageSync('isRefresh');

                                    isRefresh.isRefresh = true;
                                    wx.setStorageSync('isRefresh', isRefresh);
                                    if (this.isData) {
                                        wx.navigateBack({
                                            delta: 2
                                        });
                                    } else {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }
                                } else {
                                    wx.showToast({
                                        title: '提交失败！',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: true
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function CreateOrUpdateWorklog(_x4) {
                return _ref4.apply(this, arguments);
            }

            return CreateOrUpdateWorklog;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var data = JSON.parse(options.data);
            this.isData = data.isData;
            // this.GetGeneralComboboxList('case',data.isData);
            this.GetGeneralComboboxList('client', data.isData);
            this.GetGeneralComboboxList('employee', data.isData);
            if (data.isData) {
                this.dateOptions.time = data.startTime.Y + ' ' + data.startTime.M;
                this.dateOptions1.time = data.endTime.Y + ' ' + data.endTime.M;
                this.dateOptions1.date = true;
                this.dateOptions.isChecked = true;
                this.submitData.IsConverted = 'true', this.title = "转化参与工作日志";
                this.GetWorklogForEdit(data);
            } else {
                var now = new Date();
                this.dateOptions1.time = now;
                this.dateOptions.time = now;
                this.submitData.IsConverted = 'False';
                // this.submitData.SelfDuration = 0;
                this.title = "创建工作日志";
                this.GetWorklogForEdit(data);
            }
            this.$apply();
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            // clearTimeout(this.Timeout);
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myRecord/creatWorkRecord/creatWorkRecord'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0V29ya1JlY29yZC5qcyJdLCJuYW1lcyI6WyJjbGllbnREZXRhaWwiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGFydFRpbWUiLCJFbmRUaW1lIiwiZGF0YSIsInRpdGxlIiwiYWRkT3BhY2l0eSIsInN1Ym1pdERhdGEiLCJpbnB1dENoZWNrZWQiLCJ3YXJuaW5nIiwiQ2F0ZWdvcnkiLCJDbGllbnRJZCIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJpbmRleCIsIkNhc2VJZCIsImRhdGVPcHRpb25zIiwibmFtZSIsImlzQ2hlY2tlZCIsInRpbWUiLCJkYXRlIiwiZGF0ZU9wdGlvbnMxIiwiU2VsZkR1cmF0aW9uIiwiV29ya1R5cGUiLCJQYXJ0aWNpcGFudCIsIkRlc2NyaXB0aW9uIiwiUmVtYXJrIiwiVGltZW91dCIsImlzRGF0YSIsIndhdGNoIiwic3RhcnQiLCIkYXBwbHkiLCJlbmQiLCJjb21wdXRlZCIsIkRhdGUiLCJnZXRUaW1lIiwiaG91cnMiLCJ0b0ZpeGVkIiwibWludXRlIiwibWlzdGltaW5nIiwiTnVtYmVyIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCJ0b3VjaEVuZCIsIkNyZWF0ZU9yVXBkYXRlV29ya2xvZyIsImRlbGV0ZVBJdGVtIiwic3BsaWNlIiwiUHZhbHVlIiwic3BsaXQiLCJ0b1N0cmluZyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJyZXMiLCJlIiwiZGV0YWlsIiwiR2V0R2VuZXJhbENvbWJvYm94TGlzdCIsInB1c2giLCJQaW5kZXgiLCJiaW5kaW5wdXQiLCJpbnB1dERhdGEiLCJ0YXJnZXQiLCJpZCIsImJpbmRmb2N1cyIsImJpbmRibHVyIiwiZm9ybWF0RGF0YSIsImNsaWVudGlkIiwiY2xpZW50SWQiLCJjYXNlaWQiLCJjYXNlSWQiLCJpc2NvbnZlcnRlZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJXb3JrbG9nRm9yRWRpdERhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlDb21ib2JveCIsImkiLCJsZW5ndGgiLCJpc1NlbGVjdGVkIiwiY2xpZW50TmFtZSIsImNhc2VOYW1lIiwid29ya1R5cGUiLCJ3b3JrVHlwZUNvbWJvYm94IiwicGFydGljaXBhbnQiLCJzZWxmRHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsInJlbWFyayIsIklzQ29udmVydGVkIiwiT3JpZ2luIiwiSWQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJrZXlXb3JkIiwiY2xhc3MiLCJwYXJlbnRJZCIsIkNvbWJvYm94TGlzdCIsIml0ZW0iLCJzaG9ydENvZGUiLCJzaG93TG9hZGluZyIsInN1Y2Nlc3MiLCJpc1JlZnJlc2giLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwic3RhcnRUaW1lIiwiWSIsIk0iLCJlbmRUaW1lIiwiR2V0V29ya2xvZ0ZvckVkaXQiLCJub3ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixhQUF6QyxFQUF1RCx3QkFBdUIsV0FBOUUsRUFBMEYsMkJBQTBCLFdBQXBILEVBQWIsRUFBOEksV0FBVSxFQUFDLHVCQUFzQixjQUF2QixFQUFzQyx3QkFBdUIsU0FBN0QsRUFBdUUsMkJBQTBCLFNBQWpHLEVBQXhKLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLCtDQURFO0FBRUZDO0FBRkUsUyxRQUlOQyxJLEdBQU87QUFDSEMsbUJBQU8sRUFESjtBQUVIQyx3QkFBWSxDQUZUO0FBR0hDLHdCQUFZLEVBSFQ7QUFNSEMsMEJBQWMsQ0FDVixL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QXVCOUcsS0FBS2dILE9BQUwsQ0FBYUQsQ0FBN0Q7QUFDQSxxQkFBSzlGLFlBQUwsQ0FBa0JELElBQWxCLEdBQXlCLElBQXpCO0FBQ0EscUJBQUtKLFdBQUwsQ0FBaUJFLFNBQWpCLEdBQTZCLElBQTdCO0FBQ0EscUJBQUtYLFVBQUwsQ0FBZ0JrRixXQUFoQixHQUE4QixNQUE5QixFQUNJLEtBQUtwRixLQUFMLEdBQWEsVUFEakI7QUFFQSxxQkFBS2dILGlCQUFMLENBQXVCakgsSUFBdkI7QUFDSCxhQVJELE1BUU87QUFDSCxvQkFBSWtILE1BQU0sSUFBSXBGLElBQUosRUFBVjtBQUNBLHFCQUFLYixZQUFMLENBQWtCRixJQUFsQixHQUF5Qm1HLEdBQXpCO0FBQ0EscUJBQUt0RyxXQUFMLENBQWlCRyxJQUFqQixHQUF3Qm1HLEdBQXhCO0FBQ0EscUJBQUsvRyxVQUFMLENBQWdCa0YsV0FBaEIsR0FBOEIsT0FBOUI7QUFDQTtBQUNBLHFCQUFLcEYsS0FBTCxHQUFhLFFBQWI7QUFDQSxxQkFBS2dILGlCQUFMLENBQXVCakgsSUFBdkI7QUFDSDtBQUNELGlCQUFLMkIsTUFBTDtBQUNIOzs7bUNBQ1U7QUFDUDtBQUNIOzs7O0VBM2ZxQ3dGLGVBQUtDLEk7O2tCQUExQjNILFkiLCJmaWxlIjoiY3JlYXRXb3JrUmVjb3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQge1xuICAgICAgICBteURpc3RpbmN0XG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBTdGFydFRpbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9EYXRlL0RhdGVUaW1lUGlja2VyJztcbiAgICBpbXBvcnQgRW5kVGltZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0RhdGUvRGF0ZVRpbWVQaWNrZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsaWVudERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdGFydFRpbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpbWVPYmouc3luY1wiOlwiZGF0ZU9wdGlvbnNcIixcInYtYmluZDpkYXRlRGF0YS5zeW5jXCI6XCJTdGFydFRpbWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJTdGFydFRpbWVcIn0sXCJFbmRUaW1lXCI6e1widi1iaW5kOnRpbWVPYmouc3luY1wiOlwiZGF0ZU9wdGlvbnMxXCIsXCJ2LWJpbmQ6ZGF0ZURhdGEuc3luY1wiOlwiRW5kVGltZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkVuZFRpbWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgU3RhcnRUaW1lLFxuICAgICAgICAgICAgRW5kVGltZVxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgYWRkT3BhY2l0eTogMSxcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0Q2hlY2tlZDogW1xuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHdhcm5pbmc6IFtcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIOexu+WIq1xuICAgICAgICAgICAgQ2F0ZWdvcnk6IG51bGwsXG4gICAgICAgICAgICAvL+WuouaIt+WQjeensFxuICAgICAgICAgICAgQ2xpZW50SWQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIGluZGV4OiAtMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+ahiOS7tuWQjeensFxuICAgICAgICAgICAgQ2FzZUlkOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/ml7bpl7TpgInmi6nlmahcbiAgICAgICAgICAgIGRhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflvIDlp4vml7bpl7QnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTdGFydFRpbWUnLFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICBkYXRlT3B0aW9uczE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e7k+adn+aXtumXtCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VuZFRpbWUnLFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFbmRUaW1lOiAnJyxcbiAgICAgICAgICAgIC8vIOiHquaKpeaXtumVv1xuICAgICAgICAgICAgU2VsZkR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgLy/lt6XkvZznsbvliKtcbiAgICAgICAgICAgIFdvcmtUeXBlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/lj4LkuI7kurpcbiAgICAgICAgICAgIFBhcnRpY2lwYW50OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICBpbmRleDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5o+P6L+wXG4gICAgICAgICAgICBEZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAvL+Wkh+azqFxuICAgICAgICAgICAgUmVtYXJrOiAnJyxcbiAgICAgICAgICAgIFRpbWVvdXQ6ICcnLFxuICAgICAgICAgICAgaXNEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFN0YXJ0OjAsXG4gICAgICAgICAgICAvLyBFbmQ6MFxuICAgICAgICB9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIFN0YXJ0VGltZShzdGFydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TdGFydFRpbWUgPSBzdGFydFswXSArICcvJyArIHN0YXJ0WzFdICsgJy8nICsgc3RhcnRbMl0gKyAnICcgKyBzdGFydFszXSArICc6JyArIHN0YXJ0WzRdICsgJzonICsgc3RhcnRbNV07XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5TdGFydD1uZXcgRGF0ZSh0aGlzLnN1Ym1pdERhdGEuU3RhcnRUaW1lKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFbmRUaW1lKGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5FbmRUaW1lID0gZW5kWzBdICsgJy8nICsgZW5kWzFdICsgJy8nICsgZW5kWzJdICsgJyAnICsgZW5kWzNdICsgJzonICsgZW5kWzRdICsgJzonICsgZW5kWzVdXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTZWxmRHVyYXRpb24odmFsdWUpe1xuICAgICAgICAgICAgICAgICBpZih2YWx1ZT4yNCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1szXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzNdID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlNlbGZEdXJhdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQ9e1xuICAgICAgICAgICAgU2VsZkR1cmF0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUodGhpcy5zdWJtaXREYXRhLlN0YXJ0VGltZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBuZXcgRGF0ZSh0aGlzLnN1Ym1pdERhdGEuRW5kVGltZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lPWVuZC1zdGFydDtcbiAgICAgICAgICAgICAgICB2YXIgIGhvdXJzPXRpbWUvMzYwMDAwMDwxPzA6KHRpbWUvMzYwMDAwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICB2YXIgIG1pbnV0ZT10aW1lJTM2MDAwMDAvNjAwMDA+MD8odGltZSUzNjAwMDAwLzYwMDAwLzYwKS50b0ZpeGVkKDIpOjA7XG4gICAgICAgICAgICAgICAgdmFyIG1pc3RpbWluZz0oTnVtYmVyKGhvdXJzKStOdW1iZXIobWludXRlKSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIG1pc3RpbWluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG91Y2hTdGFydCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaEVuZCgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pdERhdGEuV29ya1R5cGUmJnRoaXMuc3VibWl0RGF0YS5EZXNjcmlwdGlvbil7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlV29ya2xvZyh0aGlzLnN1Ym1pdERhdGEpOyAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5PTE7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdERhdGEuRGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzFdPXRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5zdWJtaXREYXRhLldvcmtUeXBlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1swXT10cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc3VibWl0RGF0YS5DYXRlZ29yeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMl09dHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdERhdGEuU3RhcnRUaW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZU9wdGlvbnMuaXNEYXRhPXRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc3VibWl0RGF0YS5FbmRUaW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZU9wdGlvbnMxLmlzRGF0YT10cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBzdWJtaXREYXRhKCl7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgZGVsZXRlUEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmluZGV4LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIFB2YWx1ZSA9IHRoaXMuc3VibWl0RGF0YS5QYXJ0aWNpcGFudC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIFB2YWx1ZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgUHZhbHVlID0gUHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlBhcnRpY2lwYW50ID0gUHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBpY2tlckNoYW5nZShyZXMsIGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDYXRlZ29yeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5DYXRlZ29yeSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1dvcmtUeXBlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1swXSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLldvcmtUeXBlLmluZGV4ID0gK2UuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLldvcmtUeXBlID0gdGhpcy5Xb3JrVHlwZS52YWx1ZVt0aGlzLldvcmtUeXBlLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDbGllbnRJZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudElkLmluZGV4ID0gK2UuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNsaWVudElkID0gdGhpcy5DbGllbnRJZC52YWx1ZVt0aGlzLkNsaWVudElkLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnY2FzZScsIHRoaXMuaXNEYXRhLCB0aGlzLkNsaWVudElkLnZhbHVlW3RoaXMuQ2xpZW50SWQuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnZW1wbG95ZWUnLCB0aGlzLmlzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ2FzZUlkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmluZGV4ID0gK2UuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhc2VJZCA9IHRoaXMuQ2FzZUlkLnZhbHVlW3RoaXMuQ2FzZUlkLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnZW1wbG95ZWUnLCB0aGlzLmlzRGF0YSwgdGhpcy5DYXNlSWQudmFsdWVbdGhpcy5DYXNlSWQuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhcnRpY2lwYW50JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1szXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5pbmRleC5wdXNoKCtlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBteURpc3RpbmN0KHRoaXMuUGFydGljaXBhbnQuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFBpbmRleCA9IHRoaXMuUGFydGljaXBhbnQuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgUHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBQaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdmFsdWVbaW5kZXhdID0gdGhpcy5QYXJ0aWNpcGFudC52YWx1ZVtQaW5kZXhbaW5kZXhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5QYXJ0aWNpcGFudCA9IFB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kaW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dERhdGEgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRGVzY3JpcHRpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzFdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdSZW1hcmsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlJlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2VsZkR1cmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgrZS5kZXRhaWwudmFsdWUgPiAyNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1szXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzNdID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU2VsZkR1cmF0aW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gaW5wdXTojrflj5bnhKbngrlcbiAgICAgICAgICAgIGJpbmRmb2N1cyhpbmRleCwgZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAnRGVzY3JpcHRpb24nICYmICFlLmRldGFpbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2hlY2tlZFtpbmRleF0gPSAhdGhpcy5pbnB1dENoZWNrZWRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy9pbnB1dOWkseWOu+eEpueCuVxuICAgICAgICAgICAgYmluZGJsdXIoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2hlY2tlZFtpbmRleF0gPSAhdGhpcy5pbnB1dENoZWNrZWRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBhc3luYyBHZXRXb3JrbG9nRm9yRWRpdChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5pc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudGlkOiBkYXRhLmNsaWVudElkLFxuICAgICAgICAgICAgICAgICAgICBjYXNlaWQ6IGRhdGEuY2FzZUlkLFxuICAgICAgICAgICAgICAgICAgICBpc2NvbnZlcnRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi93b3JrbG9nL0dldFdvcmtsb2dGb3JFZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXREYXRhXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBXb3JrbG9nRm9yRWRpdERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhXb3JrbG9nRm9yRWRpdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL+exu+WIq1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlDb21ib2JveCA9IFdvcmtsb2dGb3JFZGl0RGF0YS5jYXRlZ29yeUNvbWJvYm94O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3J5Q29tYm9ib3gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUNvbWJvYm94W2ldLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNvbWJvYm94W2ldWydpc1Nob3cnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhdGVnb3J5ID0gY2F0ZWdvcnlDb21ib2JveFtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5ID0gY2F0ZWdvcnlDb21ib2JveDtcbiAgICAgICAgICAgICAgICAgICAgLy/lrqLmiLflkI3np7BcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNsaWVudElkID0gV29ya2xvZ0ZvckVkaXREYXRhLmNsaWVudElkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudElkLnZhbHVlWzBdID0gV29ya2xvZ0ZvckVkaXREYXRhLmNsaWVudElkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudElkLmRpc3BsYXlUZXh0WzBdID0gV29ya2xvZ0ZvckVkaXREYXRhLmNsaWVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50SWQuaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudElkLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZihXb3JrbG9nRm9yRWRpdERhdGEuY2xpZW50SWQpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIENsaWVudElkVmFsdWU9dGhpcy5DbGllbnRJZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvcih2YXIgaW5kZXggaW4gQ2xpZW50SWRWYWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYoQ2xpZW50SWRWYWx1ZVtpbmRleF09PVdvcmtsb2dGb3JFZGl0RGF0YS5jbGllbnRJZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuQ2xpZW50SWQuaW5kZXg9aW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOahiOS7tuWQjeensFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2FzZUlkID0gV29ya2xvZ0ZvckVkaXREYXRhLmNhc2VJZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQudmFsdWVbMF0gPSBXb3JrbG9nRm9yRWRpdERhdGEuY2FzZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5kaXNwbGF5VGV4dFswXSA9IFdvcmtsb2dGb3JFZGl0RGF0YS5jYXNlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQuaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoV29ya2xvZ0ZvckVkaXREYXRhLmNhc2VJZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgQ2FzZUlkVmFsdWU9dGhpcy5DYXNlSWQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmb3IodmFyIGluZGV4IGluIENhc2VJZFZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZihDYXNlSWRWYWx1ZVtpbmRleF09PVdvcmtsb2dGb3JFZGl0RGF0YS5jYXNlSWQpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLkNhc2VJZC5pbmRleD1pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgLy/lt6XkvZznsbvliKtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLldvcmtUeXBlID0gV29ya2xvZ0ZvckVkaXREYXRhLndvcmtUeXBlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgd29ya1R5cGUgPSBXb3JrbG9nRm9yRWRpdERhdGEud29ya1R5cGVcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gV29ya2xvZ0ZvckVkaXREYXRhLndvcmtUeXBlQ29tYm9ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV29ya1R5cGUudmFsdWVbaW5kZXhdID0gV29ya2xvZ0ZvckVkaXREYXRhLndvcmtUeXBlQ29tYm9ib3hbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Xb3JrVHlwZS5kaXNwbGF5VGV4dFtpbmRleF0gPSBXb3JrbG9nRm9yRWRpdERhdGEud29ya1R5cGVDb21ib2JveFtpbmRleF0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Xb3JrVHlwZS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdvcmtUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgV29ya1R5cGUgPSB0aGlzLldvcmtUeXBlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gV29ya1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoV29ya1R5cGVbaW5kZXhdID09IHdvcmtUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV29ya1R5cGUuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy/lj4LkuI7kurpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlBhcnRpY2lwYW50ID0gV29ya2xvZ0ZvckVkaXREYXRhLnBhcnRpY2lwYW50O1xuICAgICAgICAgICAgICAgICAgICAvL+iHquaKpeaXtumVv1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU2VsZkR1cmF0aW9uID0gV29ya2xvZ0ZvckVkaXREYXRhLnNlbGZEdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZWxmRHVyYXRpb24gPSBXb3JrbG9nRm9yRWRpdERhdGEuc2VsZkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAvL+aPj+i/sFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRGVzY3JpcHRpb24gPSBXb3JrbG9nRm9yRWRpdERhdGEuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRGVzY3JpcHRpb24gPSBXb3JrbG9nRm9yRWRpdERhdGEuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIC8v5aSH5rOoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5SZW1hcmsgPSBXb3JrbG9nRm9yRWRpdERhdGEucmVtYXJrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbWFyayA9IFdvcmtsb2dGb3JFZGl0RGF0YS5yZW1hcms7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Jc0NvbnZlcnRlZCA9ICdUcnVlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLk9yaWdpbiA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5JZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6ZqcJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdERhdGEgPSB7fVxuICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvd29ya2xvZy9HZXRXb3JrbG9nRm9yRWRpdCcsXG4gICAgICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0RGF0YVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgV29ya2xvZ0ZvckVkaXREYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklkID0gV29ya2xvZ0ZvckVkaXREYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAvL+exu+WIq1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlDb21ib2JveCA9IFdvcmtsb2dGb3JFZGl0RGF0YS5jYXRlZ29yeUNvbWJvYm94O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5ID0gY2F0ZWdvcnlDb21ib2JveDtcbiAgICAgICAgICAgICAgICAgICAgLy/lt6XkvZznsbvliKtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gV29ya2xvZ0ZvckVkaXREYXRhLndvcmtUeXBlQ29tYm9ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV29ya1R5cGUudmFsdWVbaW5kZXhdID0gV29ya2xvZ0ZvckVkaXREYXRhLndvcmtUeXBlQ29tYm9ib3hbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Xb3JrVHlwZS5kaXNwbGF5VGV4dFtpbmRleF0gPSBXb3JrbG9nRm9yRWRpdERhdGEud29ya1R5cGVDb21ib2JveFtpbmRleF0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zmlYXpmpwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRHZW5lcmFsQ29tYm9ib3hMaXN0KGtleVdvcmQsIGlzRGF0YSwgLi4uYXJnKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleVdvcmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjYXNlJzpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoga2V5V29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBhcmdbMF0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIENvbWJvYm94TGlzdCA9IHJlc0RhdGEuZGF0YS5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb21ib2JveExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBDb21ib2JveExpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC52YWx1ZVtpbmRleF0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5kaXNwbGF5VGV4dFtpbmRleF0gPSBpdGVtLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhc2VJZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQudmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5kaXNwbGF5VGV4dCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjbGllbnQnOlxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBrZXlXb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9nZW5lcmFsQ29kZUNvbWJvU2VydmljZS9HZXRHZW5lcmFsQ29tYm9ib3hMaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIENvbWJvYm94TGlzdCA9IHJlc0RhdGEuZGF0YS5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIENvbWJvYm94TGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gQ29tYm9ib3hMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudElkLnZhbHVlW2luZGV4XSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGllbnRJZC5kaXNwbGF5VGV4dFtpbmRleF0gPSBpdGVtLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGllbnRJZC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudElkLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdlbXBsb3llZSc6XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGtleVdvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9ydENvZGU6IGFyZ1swXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2dlbmVyYWxDb2RlQ29tYm9TZXJ2aWNlL0dldEdlbmVyYWxDb21ib2JveExpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LnZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmRpc3BsYXlUZXh0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDb21ib2JveExpc3QgPSByZXNEYXRhLmRhdGEucmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb21ib2JveExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IENvbWJvYm94TGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC52YWx1ZVtpbmRleF0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuZGlzcGxheVRleHRbaW5kZXhdID0gaXRlbS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgQ3JlYXRlT3JVcGRhdGVXb3JrbG9nKGRhdGEpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi93b3JrbG9nL0NyZWF0ZU9yVXBkYXRlV29ya2xvZycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBpc1JlZnJlc2ggPSB3eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgaXNSZWZyZXNoLmlzUmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcsIGlzUmVmcmVzaCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc0RhdGEgPSBkYXRhLmlzRGF0YTtcbiAgICAgICAgICAgIC8vIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgnY2FzZScsZGF0YS5pc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29tYm9ib3hMaXN0KCdjbGllbnQnLCBkYXRhLmlzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb21ib2JveExpc3QoJ2VtcGxveWVlJywgZGF0YS5pc0RhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9ucy50aW1lID0gZGF0YS5zdGFydFRpbWUuWSArICcgJyArIGRhdGEuc3RhcnRUaW1lLk07XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9uczEudGltZSA9IGRhdGEuZW5kVGltZS5ZICsgJyAnICsgZGF0YS5lbmRUaW1lLk07XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9uczEuZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9ucy5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Jc0NvbnZlcnRlZCA9ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwi6L2s5YyW5Y+C5LiO5bel5L2c5pel5b+XXCJcbiAgICAgICAgICAgICAgICB0aGlzLkdldFdvcmtsb2dGb3JFZGl0KGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVPcHRpb25zMS50aW1lID0gbm93O1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZU9wdGlvbnMudGltZSA9IG5vdztcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNDb252ZXJ0ZWQgPSAnRmFsc2UnO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3VibWl0RGF0YS5TZWxmRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBcIuWIm+W7uuW3peS9nOaXpeW/l1wiXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRXb3JrbG9nRm9yRWRpdChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25VbmxvYWQoKSB7XG4gICAgICAgICAgICAvLyBjbGVhclRpbWVvdXQodGhpcy5UaW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==