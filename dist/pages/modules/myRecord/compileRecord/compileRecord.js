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

var clientDetailCompile = function (_wepy$page) {
    _inherits(clientDetailCompile, _wepy$page);

    function clientDetailCompile() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientDetailCompile);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetailCompile.__proto__ || Object.getPrototypeOf(clientDetailCompile)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "StartTime": { "xmlns:v-bind": "", "v-bind:timeObj.sync": "dateOptions", "v-bind:dateData.sync": "StartTime", "v-bind:twoWayTitle.once": "StartTime" }, "EndTime": { "v-bind:timeObj.sync": "dateOptions1", "v-bind:dateData.sync": "EndTime", "v-bind:twoWayTitle.once": "EndTime" } }, _this.$events = {}, _this.components = {
            StartTime: _DateTimePicker2.default,
            EndTime: _DateTimePicker2.default
        }, _this.data = {
            addOpacity: 1,
            optionsData: {},
            title: '',
            submitData: {
                // AttachmentId: "",
                // CaseId: "082C13A4-9543-E811-8884-F6126329C109",
                // Category: "0",
                // ClientId: "CL20180400075",
                // Description: "描述",
                // End: "16:00",
                // EndTime: "2018-10-18 16:00:00",
                // Id: "WL7ea15d16e6a98c3a",
                // IsConverted: "False",
                // Origin: "WLb004f5eeda32ebe1",
                // Participant: "84,86,164",
                // Remark: "备注",
                // SelfDuration: "10",
                // Start: "15:00",
                // StartTime: "2018-10-18 15:00:00",
                // WorkDate: "2018-10-18",
                // WorkType: "05"
            },
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
                // isChecked:false,
                time: '',
                date: true
            },
            StartTime: '',
            dateOptions1: {
                title: '结束时间',
                name: 'endTime',
                // isChecked:false,
                time: '',
                date: false
            },
            EndTime: '',
            // 自报时长
            SelfDuration: '',
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
        }, _this.watch = {
            StartTime: function StartTime(start) {
                this.submitData.StartTime = start[0] + '/' + start[1] + '/' + start[2] + ' ' + start[3] + ':' + start[4] + ':' + start[5];
                this.$apply();
            },
            EndTime: function EndTime(end) {
                this.submitData.EndTime = end[0] + '/' + end[1] + '/' + end[2] + ' ' + end[3] + ':' + end[4] + ':' + end[5];
                this.$apply();
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
                        this.GetCaseComboboxList(this.ClientId.value[this.ClientId.index]);
                        this.EmployeeComboboxList();
                        break;
                    case 'CaseId':
                        this.CaseId.index = +e.detail.value;
                        this.submitData.CaseId = this.CaseId.value[this.CaseId.index];
                        this.EmployeeComboboxList(this.CaseId.value[this.CaseId.index]);
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
                            this.submitData.Description = e.detail.value;
                            this.warning[1] = false;
                        } else {
                            this.warning[1] = true;
                            this.submitData.Description = '';
                        }
                        this.$apply();
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

    _createClass(clientDetailCompile, [{
        key: 'GetWorklogForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var formatData, resData, WorklogForEditData, categoryCombobox, i, workType, index, WorkType, participantValue, Pindex;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                formatData = {
                                    id: data.id,
                                    clientid: data.clientId,
                                    caseid: data.caseId
                                    // isconverted: true,
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/worklog/GetWorklogForEdit', 'post', formatData);

                            case 3:
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
                                    this.GetClientComboboxList(WorklogForEditData.clientId);
                                    // 案件名称
                                    this.submitData.CaseId = WorklogForEditData.caseId;
                                    this.GetCaseComboboxList(WorklogForEditData.clientId, WorklogForEditData.caseId);
                                    //工作类别
                                    this.submitData.WorkType = WorklogForEditData.workType;
                                    workType = WorklogForEditData.workType;

                                    for (index in WorklogForEditData.workTypeCombobox) {
                                        this.WorkType.value[index] = WorklogForEditData.workTypeCombobox[index].value;
                                        this.WorkType.displayText[index] = WorklogForEditData.workTypeCombobox[index].displayText;
                                    }
                                    // this.WorkType.isSelected=true;
                                    if (workType) {
                                        WorkType = this.WorkType.value;

                                        for (index in WorkType) {
                                            if (WorkType[index] == workType) {
                                                this.WorkType.index = index;
                                            }
                                        }
                                    }
                                    //参与人
                                    // if(WorklogForEditData.isConverted){
                                    participantValue = [];

                                    for (Pindex in WorklogForEditData.participantCombobox) {
                                        participantValue.push(WorklogForEditData.participantCombobox[Pindex].value);
                                    }
                                    this.submitData.Participant = participantValue.toString();
                                    this.GetEmployeeComboboxList(participantValue);
                                    this.Participant.isSelected = true;
                                    // }else{
                                    //     this.Participant.isSelected=false;
                                    // }
                                    //自报时长
                                    this.submitData.SelfDuration = WorklogForEditData.selfDuration;
                                    this.SelfDuration = WorklogForEditData.selfDuration;
                                    //描述
                                    this.submitData.Description = WorklogForEditData.description;
                                    this.Description = WorklogForEditData.description;
                                    //备注
                                    this.submitData.Remark = WorklogForEditData.remark;
                                    this.Remark = WorklogForEditData.remark;
                                    if (WorklogForEditData.IsConverted) {
                                        this.submitData.IsConverted = WorklogForEditData.IsConverted;
                                    }
                                    this.submitData.Origin = WorklogForEditData.origin;
                                    this.submitData.Id = WorklogForEditData.id;
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: '网络故障',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }
                                this.$apply();

                            case 6:
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
        key: 'GetCaseComboboxList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(clientId, caseId) {
                var data, resData, ComboboxList, index, item;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = {
                                    class: 'case',
                                    parentId: clientId
                                };
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.submitData.CaseId = '';
                                    this.CaseId.index = -1;
                                    this.CaseId.value = [];
                                    this.CaseId.displayText = [];
                                    ComboboxList = resData.data.result;

                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.CaseId.value[index] = item.value;
                                        this.CaseId.displayText[index] = item.displayText;
                                        if (this.CaseId.value[index] == caseId) {
                                            this.CaseId.index = index;
                                        }
                                    }
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetCaseComboboxList(_x2, _x3) {
                return _ref3.apply(this, arguments);
            }

            return GetCaseComboboxList;
        }()
    }, {
        key: 'GetClientComboboxList',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(clientValue) {
                var data, resData, ComboboxList, index, item;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    class: 'client',
                                    parentId: ""
                                };
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 3:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    ComboboxList = resData.data.result;

                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.ClientId.value[index] = item.value;
                                        this.ClientId.displayText[index] = item.displayText;
                                        if (item.value == clientValue) {
                                            this.ClientId.index = index;
                                        }
                                    }
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetClientComboboxList(_x4) {
                return _ref4.apply(this, arguments);
            }

            return GetClientComboboxList;
        }()
    }, {
        key: 'GetEmployeeComboboxList',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(participantValue) {
                var data, resData, ComboboxList, index, item, pIndex;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                data = {
                                    class: 'employee',
                                    shortCode: this.optionsData.caseId
                                };
                                _context4.next = 3;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 3:
                                resData = _context4.sent;

                                if (resData.statusCode == 200) {
                                    ComboboxList = resData.data.result;
                                    // this.Participant.value=[];
                                    // this.Participant.displayText=[];
                                    // this.Participant.isSelected=false;
                                    // this.Participant.index=[];

                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.Participant.value[index] = item.value;
                                        this.Participant.displayText[index] = item.displayText;
                                        for (pIndex in participantValue) {
                                            if (participantValue[pIndex] == item.value) {
                                                this.Participant.index.push(index);
                                            }
                                        }
                                    }
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function GetEmployeeComboboxList(_x5) {
                return _ref5.apply(this, arguments);
            }

            return GetEmployeeComboboxList;
        }()
    }, {
        key: 'EmployeeComboboxList',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var data,
                    resData,
                    ComboboxList,
                    index,
                    item,
                    _args5 = arguments;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                data = {
                                    class: 'employee',
                                    shortCode: _args5.length <= 0 ? undefined : _args5[0]
                                };
                                _context5.next = 3;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralComboboxList', 'post', data);

                            case 3:
                                resData = _context5.sent;

                                if (resData.statusCode == 200) {
                                    this.Participant.value = [];
                                    this.Participant.displayText = [];
                                    this.Participant.index = [];
                                    this.submitData.Participant = '';
                                    ComboboxList = resData.data.result;

                                    for (index in ComboboxList) {
                                        item = ComboboxList[index];

                                        this.Participant.value[index] = item.value;
                                        this.Participant.displayText[index] = item.displayText;
                                    }
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function EmployeeComboboxList() {
                return _ref6.apply(this, arguments);
            }

            return EmployeeComboboxList;
        }()
    }, {
        key: 'CreateOrUpdateWorklog',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
                var _this2 = this;

                var resData, isRefresh;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context6.next = 3;
                                return _ajax2.default.getData('/api/services/web/worklog/CreateOrUpdateWorklog', 'post', data);

                            case 3:
                                resData = _context6.sent;

                                if (resData.statusCode == 200) {
                                    isRefresh = wx.getStorageSync('isRefresh');

                                    isRefresh.isRefresh = true;
                                    wx.setStorageSync('isRefresh', isRefresh);
                                    wx.navigateBack({
                                        delta: 1
                                    });
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
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function CreateOrUpdateWorklog(_x6) {
                return _ref7.apply(this, arguments);
            }

            return CreateOrUpdateWorklog;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var data = JSON.parse(options.data);
            this.optionsData = data;
            this.dateOptions.time = data.startTime.Y + ' ' + data.startTime.M;
            this.dateOptions1.time = data.endTime.Y + ' ' + data.endTime.M;
            this.dateOptions1.date = true;
            this.title = "编辑工作日志";
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onReady',
        value: function onReady() {
            this.GetWorklogForEdit(this.optionsData);
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            // clearTimeout(this.Timeout);
        }
    }]);

    return clientDetailCompile;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetailCompile , 'pages/modules/myRecord/compileRecord/compileRecord'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBpbGVSZWNvcmQuanMiXSwibmFtZXMiOlsiY2xpZW50RGV0YWlsQ29tcGlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlN0YXJ0VGltZSIsIkVuZFRpbWUiLCJkYXRhIiwiYWRkT3BhY2l0eSIsIm9wdGlvbnNEYXRhIiwidGl0bGUiLCJzdWJtaXREYXRhIiwiaW5wdXRDaGVja2VkIiwid2FybmluZyIsIkNhdGVnb3J5IiwiQ2xpZW50SWQiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiaW5kZXgiLCJDYXNlSWQiLCJkYXRlT3B0aW9ucyIsIm5hbWUiLCJ0aW1lIiwiZGF0ZSIsImRhdGVPcHRpb25zMSIsIlNlbGZEdXJhdGlvbiIsIldvcmtUeXBlIiwiUGFydGljaXBhbnQiLCJEZXNjcmlwdGlvbiIsIlJlbWFyayIsIlRpbWVvdXQiLCJpc0RhdGEiLCJ3YXRjaCIsInN0YXJ0IiwiJGFwcGx5IiwiZW5kIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCJ0b3VjaEVuZCIsIkNyZWF0ZU9yVXBkYXRlV29ya2xvZyIsImRlbGV0ZVBJdGVtIiwic3BsaWNlIiwiUHZhbHVlIiwic3BsaXQiLCJ0b1N0cmluZyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJyZXMiLCJlIiwiZGV0YWlsIiwiR2V0Q2FzZUNvbWJvYm94TGlzdCIsIkVtcGxveWVlQ29tYm9ib3hMaXN0IiwicHVzaCIsIlBpbmRleCIsImJpbmRpbnB1dCIsImlucHV0RGF0YSIsInRhcmdldCIsImlkIiwiYmluZGZvY3VzIiwiYmluZGJsdXIiLCJmb3JtYXREYXRhIiwiY2xpZW50aWQiLCJjbGllbnRJZCIsImNhc2VpZCIsImNhc2VJZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJXb3JrbG9nRm9yRWRpdERhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlDb21ib2JveCIsImkiLCJsZW5ndGgiLCJpc1NlbGVjdGVkIiwiR2V0Q2xpZW50Q29tYm9ib3hMaXN0Iiwid29ya1R5cGUiLCJ3b3JrVHlwZUNvbWJvYm94IiwicGFydGljaXBhbnRWYWx1ZSIsInBhcnRpY2lwYW50Q29tYm9ib3giLCJHZXRFbXBsb3llZUNvbWJvYm94TGlzdCIsInNlbGZEdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwicmVtYXJrIiwiSXNDb252ZXJ0ZWQiLCJPcmlnaW4iLCJvcmlnaW4iLCJJZCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImNsYXNzIiwicGFyZW50SWQiLCJDb21ib2JveExpc3QiLCJpdGVtIiwiY2xpZW50VmFsdWUiLCJzaG9ydENvZGUiLCJwSW5kZXgiLCJzaG93TG9hZGluZyIsInN1Y2Nlc3MiLCJpc1JlZnJlc2giLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwic3RhcnRUaW1lIiwiWSIsIk0iLCJlbmRUaW1lIiwiR2V0V29ya2xvZ0ZvckVkaXQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7O29OQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsYUFBekMsRUFBdUQsd0JBQXVCLFdBQTlFLEVBQTBGLDJCQUEwQixXQUFwSCxFQUFiLEVBQThJLFdBQVUsRUFBQyx1QkFBc0IsY0FBdkIsRUFBc0Msd0JBQXVCLFNBQTdELEVBQXVFLDJCQUEwQixTQUFqRyxFQUF4SixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQywrQ0FERTtBQUVGQztBQUZFLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHdCQUFXLENBRFI7QUFFSEMseUJBQWEsRUFGVjtBQUdIQyxtQkFBTyxFQUhKO0FBSUhDLHdCQUFZ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Ozs7Ozs7Ozs7OytCQUVFZSxPLEVBQVM7QUFDWixnQkFBSXJHLE9BQU9zRyxLQUFLQyxLQUFMLENBQVdGLFFBQVFyRyxJQUFuQixDQUFYO0FBQ0EsaUJBQUtFLFdBQUwsR0FBbUJGLElBQW5CO0FBQ0EsaUJBQUthLFdBQUwsQ0FBaUJFLElBQWpCLEdBQXdCZixLQUFLd0csU0FBTCxDQUFlQyxDQUFmLEdBQW1CLEdBQW5CLEdBQXlCekcsS0FBS3dHLFNBQUwsQ0FBZUUsQ0FBaEU7QUFDQSxpQkFBS3pGLFlBQUwsQ0FBa0JGLElBQWxCLEdBQXlCZixLQUFLMkcsT0FBTCxDQUFhRixDQUFiLEdBQWlCLEdBQWpCLEdBQXVCekcsS0FBSzJHLE9BQUwsQ0FBYUQsQ0FBN0Q7QUFDQSxpQkFBS3pGLFlBQUwsQ0FBa0JELElBQWxCLEdBQXlCLElBQXpCO0FBQ0EsaUJBQUtiLEtBQUwsR0FBYSxRQUFiO0FBQ0EsaUJBQUt3QixNQUFMO0FBQ0g7OztpQ0FDUSxDQUNSOzs7a0NBQ1M7QUFDTixpQkFBS2lGLGlCQUFMLENBQXVCLEtBQUsxRyxXQUE1QjtBQUNIOzs7bUNBQ1U7QUFDUDtBQUNIOzs7O0VBcmM0QzJHLGVBQUtDLEk7O2tCQUFqQ3JILG1CIiwiZmlsZSI6ImNvbXBpbGVSZWNvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCB7XG4gICAgICAgIG15RGlzdGluY3RcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IFN0YXJ0VGltZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0RhdGUvRGF0ZVRpbWVQaWNrZXInO1xuICAgIGltcG9ydCBFbmRUaW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvRGF0ZS9EYXRlVGltZVBpY2tlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsQ29tcGlsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdGFydFRpbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpbWVPYmouc3luY1wiOlwiZGF0ZU9wdGlvbnNcIixcInYtYmluZDpkYXRlRGF0YS5zeW5jXCI6XCJTdGFydFRpbWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJTdGFydFRpbWVcIn0sXCJFbmRUaW1lXCI6e1widi1iaW5kOnRpbWVPYmouc3luY1wiOlwiZGF0ZU9wdGlvbnMxXCIsXCJ2LWJpbmQ6ZGF0ZURhdGEuc3luY1wiOlwiRW5kVGltZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkVuZFRpbWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgU3RhcnRUaW1lLFxuICAgICAgICAgICAgRW5kVGltZVxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYWRkT3BhY2l0eToxLFxuICAgICAgICAgICAgb3B0aW9uc0RhdGE6IHt9LFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgc3VibWl0RGF0YToge1xuICAgICAgICAgICAgICAgIC8vIEF0dGFjaG1lbnRJZDogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBDYXNlSWQ6IFwiMDgyQzEzQTQtOTU0My1FODExLTg4ODQtRjYxMjYzMjlDMTA5XCIsXG4gICAgICAgICAgICAgICAgLy8gQ2F0ZWdvcnk6IFwiMFwiLFxuICAgICAgICAgICAgICAgIC8vIENsaWVudElkOiBcIkNMMjAxODA0MDAwNzVcIixcbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvbjogXCLmj4/ov7BcIixcbiAgICAgICAgICAgICAgICAvLyBFbmQ6IFwiMTY6MDBcIixcbiAgICAgICAgICAgICAgICAvLyBFbmRUaW1lOiBcIjIwMTgtMTAtMTggMTY6MDA6MDBcIixcbiAgICAgICAgICAgICAgICAvLyBJZDogXCJXTDdlYTE1ZDE2ZTZhOThjM2FcIixcbiAgICAgICAgICAgICAgICAvLyBJc0NvbnZlcnRlZDogXCJGYWxzZVwiLFxuICAgICAgICAgICAgICAgIC8vIE9yaWdpbjogXCJXTGIwMDRmNWVlZGEzMmViZTFcIixcbiAgICAgICAgICAgICAgICAvLyBQYXJ0aWNpcGFudDogXCI4NCw4NiwxNjRcIixcbiAgICAgICAgICAgICAgICAvLyBSZW1hcms6IFwi5aSH5rOoXCIsXG4gICAgICAgICAgICAgICAgLy8gU2VsZkR1cmF0aW9uOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQ6IFwiMTU6MDBcIixcbiAgICAgICAgICAgICAgICAvLyBTdGFydFRpbWU6IFwiMjAxOC0xMC0xOCAxNTowMDowMFwiLFxuICAgICAgICAgICAgICAgIC8vIFdvcmtEYXRlOiBcIjIwMTgtMTAtMThcIixcbiAgICAgICAgICAgICAgICAvLyBXb3JrVHlwZTogXCIwNVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRDaGVja2VkOiBbXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2FybmluZzogW1xuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8g57G75YirXG4gICAgICAgICAgICBDYXRlZ29yeTogbnVsbCxcbiAgICAgICAgICAgIC8v5a6i5oi35ZCN56ewXG4gICAgICAgICAgICBDbGllbnRJZDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5qGI5Lu25ZCN56ewXG4gICAgICAgICAgICBDYXNlSWQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIGluZGV4OiAtMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+aXtumXtOmAieaLqeWZqFxuICAgICAgICAgICAgZGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+W8gOWni+aXtumXtCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1N0YXJ0VGltZScsXG4gICAgICAgICAgICAgICAgLy8gaXNDaGVja2VkOmZhbHNlLFxuICAgICAgICAgICAgICAgIHRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRhdGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgZGF0ZU9wdGlvbnMxOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnu5PmnZ/ml7bpl7QnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbmRUaW1lJyxcbiAgICAgICAgICAgICAgICAvLyBpc0NoZWNrZWQ6ZmFsc2UsXG4gICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFbmRUaW1lOiAnJyxcbiAgICAgICAgICAgIC8vIOiHquaKpeaXtumVv1xuICAgICAgICAgICAgU2VsZkR1cmF0aW9uOiAnJyxcbiAgICAgICAgICAgIC8v5bel5L2c57G75YirXG4gICAgICAgICAgICBXb3JrVHlwZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5Y+C5LiO5Lq6XG4gICAgICAgICAgICBQYXJ0aWNpcGFudDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXG4gICAgICAgICAgICAgICAgaW5kZXg6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOaPj+i/sFxuICAgICAgICAgICAgRGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgLy/lpIfms6hcbiAgICAgICAgICAgIFJlbWFyazogJycsXG4gICAgICAgICAgICBUaW1lb3V0OiAnJyxcbiAgICAgICAgICAgIGlzRGF0YTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgU3RhcnRUaW1lKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlN0YXJ0VGltZSA9IHN0YXJ0WzBdICsgJy8nICsgc3RhcnRbMV0gKyAnLycgKyBzdGFydFsyXSArICcgJyArIHN0YXJ0WzNdICsgJzonICsgc3RhcnRbNF0gKyAnOicgKyBzdGFydFs1XVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRW5kVGltZShlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRW5kVGltZSA9IGVuZFswXSArICcvJyArIGVuZFsxXSArICcvJyArIGVuZFsyXSArICcgJyArIGVuZFszXSArICc6JyArIGVuZFs0XSArICc6JyArIGVuZFs1XVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG91Y2hTdGFydCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoRW5kKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0RGF0YS5Xb3JrVHlwZSAmJiB0aGlzLnN1Ym1pdERhdGEuRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVPclVwZGF0ZVdvcmtsb2codGhpcy5zdWJtaXREYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMV0gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN1Ym1pdERhdGEuV29ya1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1swXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3VibWl0RGF0YS5DYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzJdID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJtaXREYXRhLlN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9ucy5pc0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJtaXREYXRhLkVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZU9wdGlvbnMxLmlzRGF0YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVQSXRlbShpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuaW5kZXguc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB2YXIgUHZhbHVlID0gdGhpcy5zdWJtaXREYXRhLlBhcnRpY2lwYW50LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgUHZhbHVlLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICBQdmFsdWUgPSBQdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQgPSBQdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kUGlja2VyQ2hhbmdlKHJlcywgZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NhdGVnb3J5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1syXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhdGVnb3J5ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnV29ya1R5cGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzBdID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV29ya1R5cGUuaW5kZXggPSArZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuV29ya1R5cGUgPSB0aGlzLldvcmtUeXBlLnZhbHVlW3RoaXMuV29ya1R5cGUuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NsaWVudElkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50SWQuaW5kZXggPSArZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2xpZW50SWQgPSB0aGlzLkNsaWVudElkLnZhbHVlW3RoaXMuQ2xpZW50SWQuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ29tYm9ib3hMaXN0KHRoaXMuQ2xpZW50SWQudmFsdWVbdGhpcy5DbGllbnRJZC5pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZUNvbWJvYm94TGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Nhc2VJZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5pbmRleCA9ICtlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5DYXNlSWQgPSB0aGlzLkNhc2VJZC52YWx1ZVt0aGlzLkNhc2VJZC5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkVtcGxveWVlQ29tYm9ib3hMaXN0KHRoaXMuQ2FzZUlkLnZhbHVlW3RoaXMuQ2FzZUlkLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYXJ0aWNpcGFudCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbM10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuaW5kZXgucHVzaCgrZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlEaXN0aW5jdCh0aGlzLlBhcnRpY2lwYW50LmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBQaW5kZXggPSB0aGlzLlBhcnRpY2lwYW50LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gUGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHZhbHVlW2luZGV4XSA9IHRoaXMuUGFydGljaXBhbnQudmFsdWVbUGluZGV4W2luZGV4XV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQgPSBQdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZGlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXREYXRhID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdEZXNjcmlwdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzFdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1sxXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1JlbWFyayc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTZWxmRHVyYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCtlLmRldGFpbC52YWx1ZSA+IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzNdID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbM10gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TZWxmRHVyYXRpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBpbnB1dOiOt+WPlueEpueCuVxuICAgICAgICAgICAgYmluZGZvY3VzKGluZGV4LCBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICdEZXNjcmlwdGlvbicgJiYgIWUuZGV0YWlsLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1sxXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRDaGVja2VkW2luZGV4XSA9ICF0aGlzLmlucHV0Q2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL2lucHV05aSx5Y6754Sm54K5XG4gICAgICAgICAgICBiaW5kYmx1cihpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRDaGVja2VkW2luZGV4XSA9ICF0aGlzLmlucHV0Q2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGFzeW5jIEdldFdvcmtsb2dGb3JFZGl0KGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBmb3JtYXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgIGNsaWVudGlkOiBkYXRhLmNsaWVudElkLFxuICAgICAgICAgICAgICAgIGNhc2VpZDogZGF0YS5jYXNlSWQsXG4gICAgICAgICAgICAgICAgLy8gaXNjb252ZXJ0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvd29ya2xvZy9HZXRXb3JrbG9nRm9yRWRpdCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGZvcm1hdERhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIFdvcmtsb2dGb3JFZGl0RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coV29ya2xvZ0ZvckVkaXREYXRhKTtcbiAgICAgICAgICAgICAgICAvL+exu+WIq1xuICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUNvbWJvYm94ID0gV29ya2xvZ0ZvckVkaXREYXRhLmNhdGVnb3J5Q29tYm9ib3g7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXRlZ29yeUNvbWJvYm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUNvbWJvYm94W2ldLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q29tYm9ib3hbaV1bJ2lzU2hvdyddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5DYXRlZ29yeSA9IGNhdGVnb3J5Q29tYm9ib3hbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeSA9IGNhdGVnb3J5Q29tYm9ib3g7XG4gICAgICAgICAgICAgICAgLy/lrqLmiLflkI3np7BcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2xpZW50SWQgPSBXb3JrbG9nRm9yRWRpdERhdGEuY2xpZW50SWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRDb21ib2JveExpc3QoV29ya2xvZ0ZvckVkaXREYXRhLmNsaWVudElkKTtcbiAgICAgICAgICAgICAgICAvLyDmoYjku7blkI3np7BcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2FzZUlkID0gV29ya2xvZ0ZvckVkaXREYXRhLmNhc2VJZDtcbiAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VDb21ib2JveExpc3QoV29ya2xvZ0ZvckVkaXREYXRhLmNsaWVudElkLCBXb3JrbG9nRm9yRWRpdERhdGEuY2FzZUlkKTtcbiAgICAgICAgICAgICAgICAvL+W3peS9nOexu+WIq1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Xb3JrVHlwZSA9IFdvcmtsb2dGb3JFZGl0RGF0YS53b3JrVHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgd29ya1R5cGUgPSBXb3JrbG9nRm9yRWRpdERhdGEud29ya1R5cGVcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBXb3JrbG9nRm9yRWRpdERhdGEud29ya1R5cGVDb21ib2JveCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLldvcmtUeXBlLnZhbHVlW2luZGV4XSA9IFdvcmtsb2dGb3JFZGl0RGF0YS53b3JrVHlwZUNvbWJvYm94W2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Xb3JrVHlwZS5kaXNwbGF5VGV4dFtpbmRleF0gPSBXb3JrbG9nRm9yRWRpdERhdGEud29ya1R5cGVDb21ib2JveFtpbmRleF0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuV29ya1R5cGUuaXNTZWxlY3RlZD10cnVlO1xuICAgICAgICAgICAgICAgIGlmICh3b3JrVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgV29ya1R5cGUgPSB0aGlzLldvcmtUeXBlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBXb3JrVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFdvcmtUeXBlW2luZGV4XSA9PSB3b3JrVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV29ya1R5cGUuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+WPguS4juS6ulxuICAgICAgICAgICAgICAgIC8vIGlmKFdvcmtsb2dGb3JFZGl0RGF0YS5pc0NvbnZlcnRlZCl7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRpY2lwYW50VmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBQaW5kZXggaW4gV29ya2xvZ0ZvckVkaXREYXRhLnBhcnRpY2lwYW50Q29tYm9ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRWYWx1ZS5wdXNoKFdvcmtsb2dGb3JFZGl0RGF0YS5wYXJ0aWNpcGFudENvbWJvYm94W1BpbmRleF0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQgPSBwYXJ0aWNpcGFudFZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRFbXBsb3llZUNvbWJvYm94TGlzdChwYXJ0aWNpcGFudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLlBhcnRpY2lwYW50LmlzU2VsZWN0ZWQ9ZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8v6Ieq5oql5pe26ZW/XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlNlbGZEdXJhdGlvbiA9IFdvcmtsb2dGb3JFZGl0RGF0YS5zZWxmRHVyYXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5TZWxmRHVyYXRpb24gPSBXb3JrbG9nRm9yRWRpdERhdGEuc2VsZkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIC8v5o+P6L+wXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uID0gV29ya2xvZ0ZvckVkaXREYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuRGVzY3JpcHRpb24gPSBXb3JrbG9nRm9yRWRpdERhdGEuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgLy/lpIfms6hcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVtYXJrID0gV29ya2xvZ0ZvckVkaXREYXRhLnJlbWFyaztcbiAgICAgICAgICAgICAgICB0aGlzLlJlbWFyayA9IFdvcmtsb2dGb3JFZGl0RGF0YS5yZW1hcms7XG4gICAgICAgICAgICAgICAgaWYgKFdvcmtsb2dGb3JFZGl0RGF0YS5Jc0NvbnZlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNDb252ZXJ0ZWQgPSBXb3JrbG9nRm9yRWRpdERhdGEuSXNDb252ZXJ0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5PcmlnaW4gPSBXb3JrbG9nRm9yRWRpdERhdGEub3JpZ2luXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklkID0gV29ya2xvZ0ZvckVkaXREYXRhLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6ZqcJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIEdldENhc2VDb21ib2JveExpc3QoY2xpZW50SWQsIGNhc2VJZCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdjYXNlJyxcbiAgICAgICAgICAgICAgICBwYXJlbnRJZDogY2xpZW50SWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhc2VJZCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQudmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLkNhc2VJZC5kaXNwbGF5VGV4dCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBDb21ib2JveExpc3QgPSByZXNEYXRhLmRhdGEucmVzdWx0XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gQ29tYm9ib3hMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gQ29tYm9ib3hMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQudmFsdWVbaW5kZXhdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSWQuZGlzcGxheVRleHRbaW5kZXhdID0gaXRlbS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ2FzZUlkLnZhbHVlW2luZGV4XSA9PSBjYXNlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUlkLmluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIEdldENsaWVudENvbWJvYm94TGlzdChjbGllbnRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdjbGllbnQnLFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIENvbWJvYm94TGlzdCA9IHJlc0RhdGEuZGF0YS5yZXN1bHRcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb21ib2JveExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBDb21ib2JveExpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudElkLnZhbHVlW2luZGV4XSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50SWQuZGlzcGxheVRleHRbaW5kZXhdID0gaXRlbS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT0gY2xpZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50SWQuaW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRFbXBsb3llZUNvbWJvYm94TGlzdChwYXJ0aWNpcGFudFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2VtcGxveWVlJyxcbiAgICAgICAgICAgICAgICBzaG9ydENvZGU6IHRoaXMub3B0aW9uc0RhdGEuY2FzZUlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIENvbWJvYm94TGlzdCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5QYXJ0aWNpcGFudC52YWx1ZT1bXTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLlBhcnRpY2lwYW50LmRpc3BsYXlUZXh0PVtdO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuUGFydGljaXBhbnQuaXNTZWxlY3RlZD1mYWxzZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLlBhcnRpY2lwYW50LmluZGV4PVtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIENvbWJvYm94TGlzdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IENvbWJvYm94TGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQudmFsdWVbaW5kZXhdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5kaXNwbGF5VGV4dFtpbmRleF0gPSBpdGVtLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwSW5kZXggaW4gcGFydGljaXBhbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRpY2lwYW50VmFsdWVbcEluZGV4XSA9PSBpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5pbmRleC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgRW1wbG95ZWVDb21ib2JveExpc3QoLi4uYXJnKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ2VtcGxveWVlJyxcbiAgICAgICAgICAgICAgICBzaG9ydENvZGU6IGFyZ1swXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2dlbmVyYWxDb2RlQ29tYm9TZXJ2aWNlL0dldEdlbmVyYWxDb21ib2JveExpc3QnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQudmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmRpc3BsYXlUZXh0ID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5pbmRleCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5QYXJ0aWNpcGFudCA9ICcnO1xuICAgICAgICAgICAgICAgIHZhciBDb21ib2JveExpc3QgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIENvbWJvYm94TGlzdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IENvbWJvYm94TGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQudmFsdWVbaW5kZXhdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5kaXNwbGF5VGV4dFtpbmRleF0gPSBpdGVtLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgQ3JlYXRlT3JVcGRhdGVXb3JrbG9nKGRhdGEpIHtcbiAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICBzdWNjZXNzOigpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2cvQ3JlYXRlT3JVcGRhdGVXb3JrbG9nJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgIHZhciBpc1JlZnJlc2ggPSB3eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JlZnJlc2guaXNSZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uob3B0aW9ucy5kYXRhKVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLmRhdGVPcHRpb25zLnRpbWUgPSBkYXRhLnN0YXJ0VGltZS5ZICsgJyAnICsgZGF0YS5zdGFydFRpbWUuTTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZU9wdGlvbnMxLnRpbWUgPSBkYXRhLmVuZFRpbWUuWSArICcgJyArIGRhdGEuZW5kVGltZS5NO1xuICAgICAgICAgICAgdGhpcy5kYXRlT3B0aW9uczEuZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gXCLnvJbovpHlt6XkvZzml6Xlv5dcIlxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgIH1cbiAgICAgICAgb25SZWFkeSgpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0V29ya2xvZ0ZvckVkaXQodGhpcy5vcHRpb25zRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgb25VbmxvYWQoKSB7XG4gICAgICAgICAgICAvLyBjbGVhclRpbWVvdXQodGhpcy5UaW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==