'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

var _DateTimePicker = require('./../../../../../components/Date/DateTimePicker.js');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var creatTaskAll = function (_wepy$page) {
    _inherits(creatTaskAll, _wepy$page);

    function creatTaskAll() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, creatTaskAll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = creatTaskAll.__proto__ || Object.getPrototypeOf(creatTaskAll)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "StageId": { "xmlns:v-bind": "", "v-bind:options.sync": "StageId", "v-bind:index.sync": "StageIdIndex", "v-bind:twoWayTitle.once": "StageIdIndex" }, "StartTime": { "v-bind:timeObj.sync": "StartDate", "v-bind:dateData.sync": "StartTime", "v-bind:twoWayTitle.once": "StartTime" }, "EndTime": { "v-bind:timeObj.sync": "EndDate", "v-bind:dateData.sync": "EndTime", "v-bind:twoWayTitle.once": "EndTime" }, "Estimate": { "v-bind:input.sync": "Estimate", "v-bind:inputValue.sync": "EstimateValue", "v-bind:twoWayTitle.once": "EstimateValue" }, "Priority": { "v-bind:options.sync": "Priority", "v-bind:index.sync": "PriorityIndex", "v-bind:twoWayTitle.once": "PriorityIndex" }, "RemindTime": { "v-bind:options.sync": "RemindTime", "v-bind:index.sync": "RemindTimeIndex", "v-bind:twoWayTitle.once": "RemindTimeIndex", "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            StageId: _option2.default,
            StartTime: _DateTimePicker2.default,
            EndTime: _DateTimePicker2.default,
            Estimate: _input2.default,
            Priority: _option2.default,
            RemindTime: _option2.default
        }, _this.data = {
            // submitData:{
            // Address: "地址地址地址"
            // AttachmentId: ""
            // Description: "任务详情详情"
            // EmployeeId: "84"
            // EndTime: "2018-08-27 13:24:41"
            // Estimate: "9999999999"
            // Id: "temp_557fec23d57551d8"
            // IsCase: "1"
            // IsMark: "Y"
            // IsRemind: "Y"
            // MarkColor: ""
            // ParentTaskId: ""
            // Participant: "84,151"
            // Priority: "URGENT"
            // ProjectId: "59C85492-438E-E811-8884-F6126329C109"
            // RemindTime: "45"
            // StageId: "8472b6b282bade56"
            // StartTime: "2018-08-15 13:30:26"
            // Tag: "b'q,fdsf"
            // Title: "标题标题标题标题标题标题标题"
            // checkItems: []
            // subtaskaddinput: ""
            // },
            addOpacity: 1,
            submitData: {},

            StageId: {
                title: '任务阶段',
                name: 'StageId',
                value: [],
                displayText: [],
                warning: false
            },
            // 时间
            StageIdIndex: 0,
            StartDate: {
                title: '开始时间',
                name: 'StartTime',
                isChecked: false,
                time: '',
                date: true
            },
            StartTime: '',
            EndDate: {
                title: '结束时间',
                name: 'endTime',
                isChecked: false,
                time: '',
                date: false
            },
            EndTime: '',
            // *********************
            //预计时间
            Estimate: {
                title: '预估时长（小时）',
                name: 'Estimate',
                options: false,
                warning: false
                // type:'digit',
            },
            EstimateValue: '',
            Priority: {
                title: '优先级',
                name: 'Priority',
                value: [],
                displayText: [],
                warning: false
            },
            PriorityIndex: -1,
            //会议提醒
            RemindTime: {
                // title:'',
                value: [0, 5, 10, 15, 30, 45, 60, 90, 120, 150, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 1440, 2880, 4320, 5760, 10080, 20160],
                displayText: ['无', '5分钟', '10分钟', '15分钟', '30分钟', '45分钟', '1小时', '1.5小时', '2小时', '2.5小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '9小时', '10小时', '11小时', '0.5天', '1天', '2天', '3天', '4天', '1周', '2周']
            },
            RemindTimeIndex: 0,
            IsRemind: [{ value: "Y", displayText: "是" }, { value: "N", displayText: "否" }],
            IsRemindChecked: false,
            isRemindTime: false,
            IsMark: [],
            IsMarkChecked: false
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                wx.removeStorage({
                    key: 'taskNextPage'
                });
                delete this.submitData.currentStage;
                this.CreateOrUpdateTask();
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
            IsMark: function IsMark() {
                this.IsMarkChecked = !this.IsMarkChecked;
                if (this.IsMarkChecked) {
                    this.submitData.IsMark = this.IsMark[0].value;
                } else {
                    this.submitData.IsMark = this.IsMark[1].value;
                }
            }
        }, _this.watch = {
            StageIdIndex: function StageIdIndex(index) {
                this.submitData.StageId = this.StageId.value[index];
                this.$apply();
            },
            StartTime: function StartTime(dateData) {
                var StartDate = dateData[0] + '-' + dateData[1] + '-' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.submitData.StartTime = StartDate;
                this.millDif();
                this.$apply();
            },
            EndTime: function EndTime(dateData) {
                this.submitData.EndTime = dateData[0] + '-' + dateData[1] + '-' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.millDif();
                this.$apply();
            },
            EstimateValue: function EstimateValue(value) {
                this.submitData.Estimate = value;
                this.$apply();
            },
            PriorityIndex: function PriorityIndex(index) {
                this.submitData.Priority = this.Priority.value[index];
                this.$apply();
            },
            RemindTimeIndex: function RemindTimeIndex(index) {
                this.submitData.RemindTime = this.RemindTime.value[index];
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(creatTaskAll, [{
        key: 'GetTaskForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, projectId) {
                var data, resData, TaskForEdit, index, Pindex;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    id: '',
                                    projectid: projectId,
                                    stageid: id
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/GetTaskForEdit', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    TaskForEdit = resData.data.result;
                                    //阶段

                                    for (index in TaskForEdit.stageCombobox) {
                                        this.StageId.value[index] = TaskForEdit.stageCombobox[index].value;
                                        this.StageId.displayText[index] = TaskForEdit.stageCombobox[index].displayText;
                                        this.submitData.StageId = TaskForEdit.stageCombobox[this.StageIdIndex].value;
                                    }
                                    //优先级
                                    for (Pindex in TaskForEdit.priorityCombobox) {
                                        this.Priority.value[Pindex] = TaskForEdit.priorityCombobox[Pindex].value;
                                        this.Priority.displayText[Pindex] = TaskForEdit.priorityCombobox[Pindex].displayText;
                                    }
                                    //是否提醒
                                    this.IsRemind = TaskForEdit.isRemindCombobox;
                                    // 是否标记
                                    this.IsMark = TaskForEdit.isMarkCombobox;
                                    this.$apply();
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
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetTaskForEdit(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return GetTaskForEdit;
        }()
    }, {
        key: 'CreateOrUpdateTask',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, pages, prevPage, prevPages;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {}
                                });
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/CreateOrUpdateTask', 'post', this.submitData);

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.addOpacity = 1;
                                    pages = getCurrentPages();
                                    prevPage = pages[pages.length - 3]; //上一个页面

                                    prevPages = pages[pages.length - 4]; //上一个页面

                                    if (prevPage && prevPages) {
                                        prevPage.isRefresh();
                                        prevPages.isRefresh ? prevPages.isRefresh() : '';
                                        wx.navigateBack({
                                            delta: 2
                                        });
                                    }
                                    this.$apply();
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

            function CreateOrUpdateTask() {
                return _ref3.apply(this, arguments);
            }

            return CreateOrUpdateTask;
        }()
    }, {
        key: 'millDif',
        value: function millDif() {
            if (this.submitData.StartTime && this.submitData.EndTime) {
                var StartDateTime = new Date(this.submitData.StartTime).getTime();
                var EndDateTime = new Date(this.submitData.EndTime).getTime();
                var millDif = EndDateTime - StartDateTime;
                var hours = '';
                if (millDif >= 10 * 1000) {
                    hours = (millDif / (3600 * 1000)).toFixed(1);
                } else {
                    hours = 0;
                    wx.showToast({
                        title: '时差有误！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
                this.EstimateValue = hours;
                this.submitData.Estimate = hours;
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.submitData = wx.getStorageSync('taskNextPage');
            this.StageIdIndex = Number(this.submitData.currentStage);
            this.EndDate.time = new Date();
            this.StartDate.time = new Date();
            this.EstimateValue = 1;
            this.$apply();
            this.GetTaskForEdit(this.submitData.stageId, this.submitData.ProjectId);
        }
    }]);

    return creatTaskAll;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(creatTaskAll , 'pages/modules/myTaskCourse/taskStage/createtask/creatTaskAll'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0VGFza0FsbC5qcyJdLCJuYW1lcyI6WyJjcmVhdFRhc2tBbGwiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGFnZUlkIiwiU3RhcnRUaW1lIiwiRW5kVGltZSIsIkVzdGltYXRlIiwiUHJpb3JpdHkiLCJSZW1pbmRUaW1lIiwiZGF0YSIsImFkZE9wYWNpdHkiLCJzdWJtaXREYXRhIiwidGl0bGUiLCJuYW1lIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsIndhcm5pbmciLCJTdGFnZUlkSW5kZXgiLCJTdGFydERhdGUiLCJpc0NoZWNrZWQiLCJ0aW1lIiwiZGF0ZSIsIkVuZERhdGUiLCJvcHRpb25zIiwiRXN0aW1hdGVWYWx1ZSIsIlByaW9yaXR5SW5kZXgiLCJSZW1pbmRUaW1lSW5kZXgiLCJJc1JlbWluZCIsIklzUmVtaW5kQ2hlY2tlZCIsImlzUmVtaW5kVGltZSIsIklzTWFyayIsIklzTWFya0NoZWNrZWQiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsIiRhcHBseSIsInRvdWNoRW5kIiwid3giLCJyZW1vdmVTdG9yYWdlIiwia2V5IiwiY3VycmVudFN0YWdlIiwiQ3JlYXRlT3JVcGRhdGVUYXNrIiwid2F0Y2giLCJpbmRleCIsImRhdGVEYXRhIiwibWlsbERpZiIsImNvbXB1dGVkIiwiaWQiLCJwcm9qZWN0SWQiLCJwcm9qZWN0aWQiLCJzdGFnZWlkIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsIlRhc2tGb3JFZGl0IiwicmVzdWx0Iiwic3RhZ2VDb21ib2JveCIsIlBpbmRleCIsInByaW9yaXR5Q29tYm9ib3giLCJpc1JlbWluZENvbWJvYm94IiwiaXNNYXJrQ29tYm9ib3giLCJzaG93VG9hc3QiLCJlcnJvciIsIm1lc3NhZ2UiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic2hvd0xvYWRpbmciLCJzdWNjZXNzIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsInByZXZQYWdlcyIsImlzUmVmcmVzaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiU3RhcnREYXRlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiRW5kRGF0ZVRpbWUiLCJob3VycyIsInRvRml4ZWQiLCJnZXRTdG9yYWdlU3luYyIsIk51bWJlciIsIkdldFRhc2tGb3JFZGl0Iiwic3RhZ2VJZCIsIlByb2plY3RJZCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztJQUdxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUFtRCxxQkFBb0IsY0FBdkUsRUFBc0YsMkJBQTBCLGNBQWhILEVBQVgsRUFBMkksYUFBWSxFQUFDLHVCQUFzQixXQUF2QixFQUFtQyx3QkFBdUIsV0FBMUQsRUFBc0UsMkJBQTBCLFdBQWhHLEVBQXZKLEVBQW9RLFdBQVUsRUFBQyx1QkFBc0IsU0FBdkIsRUFBaUMsd0JBQXVCLFNBQXhELEVBQWtFLDJCQUEwQixTQUE1RixFQUE5USxFQUFxWCxZQUFXLEVBQUMscUJBQW9CLFVBQXJCLEVBQWdDLDBCQUF5QixlQUF6RCxFQUF5RSwyQkFBMEIsZUFBbkcsRUFBaFksRUFBb2YsWUFBVyxFQUFDLHVCQUFzQixVQUF2QixFQUFrQyxxQkFBb0IsZUFBdEQsRUFBc0UsMkJBQTBCLGVBQWhHLEVBQS9mLEVBQWduQixjQUFhLEVBQUMsdUJBQXNCLFlBQXZCLEVBQW9DLHFCQUFvQixpQkFBeEQsRUFBMEUsMkJBQTBCLGlCQUFwRyxFQUFzSCxZQUFXLEVBQWpJLEVBQTduQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxxQ0FERTtBQUVGQywrQ0FGRTtBQUdGQyw2Q0FIRTtBQUlGQyxxQ0FKRTtBQUtGQyxzQ0FMRTtBQU1GQztBQU5F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Q0FBa0IsY0FBbEIsQ0FBaEI7QUFDQSxpQkFBS2xFLFlBQUwsR0FBa0JtRSxPQUFPLEtBQUt6RSxVQUFMLENBQWdCNEIsWUFBdkIsQ0FBbEI7QUFDQSxpQkFBS2pCLE9BQUwsQ0FBYUYsSUFBYixHQUFrQixJQUFJMEQsSUFBSixFQUFsQjtBQUNBLGlCQUFLNUQsU0FBTCxDQUFlRSxJQUFmLEdBQW9CLElBQUkwRCxJQUFKLEVBQXBCO0FBQ0EsaUJBQUt0RCxhQUFMLEdBQW1CLENBQW5CO0FBQ0EsaUJBQUtVLE1BQUw7QUFDQSxpQkFBS21ELGNBQUwsQ0FBb0IsS0FBSzFFLFVBQUwsQ0FBZ0IyRSxPQUFwQyxFQUE0QyxLQUFLM0UsVUFBTCxDQUFnQjRFLFNBQTVEO0FBQ0g7Ozs7RUFuUnFDQyxlQUFLQyxJOztrQkFBMUIzRixZIiwiZmlsZSI6ImNyZWF0VGFza0FsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBFc3RpbWF0ZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFN0YWdlSWQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgUmVtaW5kVGltZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBTdGFydFRpbWUgZnJvbScuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0RhdGUvRGF0ZVRpbWVQaWNrZXInO1xuICAgIGltcG9ydCBFbmRUaW1lIGZyb20nLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9EYXRlL0RhdGVUaW1lUGlja2VyJztcbiAgICBpbXBvcnQgUHJpb3JpdHkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJzsgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRUYXNrQWxsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN0YWdlSWRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiU3RhZ2VJZFwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIlN0YWdlSWRJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlN0YWdlSWRJbmRleFwifSxcIlN0YXJ0VGltZVwiOntcInYtYmluZDp0aW1lT2JqLnN5bmNcIjpcIlN0YXJ0RGF0ZVwiLFwidi1iaW5kOmRhdGVEYXRhLnN5bmNcIjpcIlN0YXJ0VGltZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlN0YXJ0VGltZVwifSxcIkVuZFRpbWVcIjp7XCJ2LWJpbmQ6dGltZU9iai5zeW5jXCI6XCJFbmREYXRlXCIsXCJ2LWJpbmQ6ZGF0ZURhdGEuc3luY1wiOlwiRW5kVGltZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkVuZFRpbWVcIn0sXCJFc3RpbWF0ZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJFc3RpbWF0ZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRXN0aW1hdGVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkVzdGltYXRlVmFsdWVcIn0sXCJQcmlvcml0eVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIlByaW9yaXR5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiUHJpb3JpdHlJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlByaW9yaXR5SW5kZXhcIn0sXCJSZW1pbmRUaW1lXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiUmVtaW5kVGltZVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIlJlbWluZFRpbWVJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlJlbWluZFRpbWVJbmRleFwiLFwieG1sbnM6d3hcIjpcIlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBTdGFnZUlkLFxuICAgICAgICAgICAgU3RhcnRUaW1lLFxuICAgICAgICAgICAgRW5kVGltZSxcbiAgICAgICAgICAgIEVzdGltYXRlLFxuICAgICAgICAgICAgUHJpb3JpdHksXG4gICAgICAgICAgICBSZW1pbmRUaW1lLFxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLy8gc3VibWl0RGF0YTp7XG4gICAgICAgICAgICAgICAgLy8gQWRkcmVzczogXCLlnLDlnYDlnLDlnYDlnLDlnYBcIlxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaG1lbnRJZDogXCJcIlxuICAgICAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uOiBcIuS7u+WKoeivpuaDheivpuaDhVwiXG4gICAgICAgICAgICAgICAgLy8gRW1wbG95ZWVJZDogXCI4NFwiXG4gICAgICAgICAgICAgICAgLy8gRW5kVGltZTogXCIyMDE4LTA4LTI3IDEzOjI0OjQxXCJcbiAgICAgICAgICAgICAgICAvLyBFc3RpbWF0ZTogXCI5OTk5OTk5OTk5XCJcbiAgICAgICAgICAgICAgICAvLyBJZDogXCJ0ZW1wXzU1N2ZlYzIzZDU3NTUxZDhcIlxuICAgICAgICAgICAgICAgIC8vIElzQ2FzZTogXCIxXCJcbiAgICAgICAgICAgICAgICAvLyBJc01hcms6IFwiWVwiXG4gICAgICAgICAgICAgICAgLy8gSXNSZW1pbmQ6IFwiWVwiXG4gICAgICAgICAgICAgICAgLy8gTWFya0NvbG9yOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gUGFyZW50VGFza0lkOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gUGFydGljaXBhbnQ6IFwiODQsMTUxXCJcbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eTogXCJVUkdFTlRcIlxuICAgICAgICAgICAgICAgIC8vIFByb2plY3RJZDogXCI1OUM4NTQ5Mi00MzhFLUU4MTEtODg4NC1GNjEyNjMyOUMxMDlcIlxuICAgICAgICAgICAgICAgIC8vIFJlbWluZFRpbWU6IFwiNDVcIlxuICAgICAgICAgICAgICAgIC8vIFN0YWdlSWQ6IFwiODQ3MmI2YjI4MmJhZGU1NlwiXG4gICAgICAgICAgICAgICAgLy8gU3RhcnRUaW1lOiBcIjIwMTgtMDgtMTUgMTM6MzA6MjZcIlxuICAgICAgICAgICAgICAgIC8vIFRhZzogXCJiJ3EsZmRzZlwiXG4gICAgICAgICAgICAgICAgLy8gVGl0bGU6IFwi5qCH6aKY5qCH6aKY5qCH6aKY5qCH6aKY5qCH6aKY5qCH6aKY5qCH6aKYXCJcbiAgICAgICAgICAgICAgICAvLyBjaGVja0l0ZW1zOiBbXVxuICAgICAgICAgICAgICAgIC8vIHN1YnRhc2thZGRpbnB1dDogXCJcIlxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6MSxcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6e1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgXG4gICAgICAgICAgICBTdGFnZUlkOntcbiAgICAgICAgICAgICAgICB0aXRsZTon5Lu75Yqh6Zi25q61JyxcbiAgICAgICAgICAgICAgICBuYW1lOidTdGFnZUlkJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTpbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDpbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOmZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5pe26Ze0XG4gICAgICAgICAgICBTdGFnZUlkSW5kZXg6MCxcbiAgICAgICAgICAgIFN0YXJ0RGF0ZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5byA5aeL5pe26Ze0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3RhcnRUaW1lJyxcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6ZmFsc2UsXG4gICAgICAgICAgICAgICAgdGltZTonJyxcbiAgICAgICAgICAgICAgICBkYXRlOnRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgRW5kRGF0ZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn57uT5p2f5pe26Ze0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW5kVGltZScsXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkOmZhbHNlLFxuICAgICAgICAgICAgICAgIHRpbWU6JycsXG4gICAgICAgICAgICAgICAgZGF0ZTpmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVuZFRpbWU6ICcnLFxuICAgICAgICAgICAgLy8gKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAvL+mihOiuoeaXtumXtFxuICAgICAgICAgICAgRXN0aW1hdGU6e1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6aKE5Lyw5pe26ZW/77yI5bCP5pe277yJJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXN0aW1hdGUnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIHR5cGU6J2RpZ2l0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFc3RpbWF0ZVZhbHVlOicnLFxuICAgICAgICAgICAgUHJpb3JpdHk6e1xuICAgICAgICAgICAgICAgIHRpdGxlOifkvJjlhYjnuqcnLFxuICAgICAgICAgICAgICAgIG5hbWU6J1ByaW9yaXR5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTpbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDpbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOmZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUHJpb3JpdHlJbmRleDotMSxcbiAgICAgICAgICAgLy/kvJrorq7mj5DphpJcbiAgICAgICAgICAgIFJlbWluZFRpbWU6e1xuICAgICAgICAgICAgICAgIC8vIHRpdGxlOicnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbMCw1LDEwLDE1LDMwLDQ1LDYwLDkwLDEyMCwxNTAsMTgwLDI0MCwzMDAsMzYwLDQyMCw0ODAsNTQwLDYwMCw2NjAsNzIwLDE0NDAsMjg4MCw0MzIwLDU3NjAsMTAwODAsMjAxNjBdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbJ+aXoCcsJzXliIbpkp8nLCcxMOWIhumSnycsJzE15YiG6ZKfJywnMzDliIbpkp8nLCc0NeWIhumSnycsJzHlsI/ml7YnLCcxLjXlsI/ml7YnLCcy5bCP5pe2JywnMi415bCP5pe2JywnM+Wwj+aXticsJzTlsI/ml7YnLCc15bCP5pe2JywnNuWwj+aXticsJzflsI/ml7YnLCc45bCP5pe2JywnOeWwj+aXticsJzEw5bCP5pe2JywnMTHlsI/ml7YnLCcwLjXlpKknLCcx5aSpJywnMuWkqScsJzPlpKknLCc05aSpJywnMeWRqCcsJzLlkagnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZW1pbmRUaW1lSW5kZXg6MCxcbiAgICAgICAgICAgIElzUmVtaW5kOltcbiAgICAgICAgICAgICAgIHt2YWx1ZTogXCJZXCIsIGRpc3BsYXlUZXh0OiBcIuaYr1wifSxcbiAgICAgICAgICAgICAgICB7dmFsdWU6IFwiTlwiLCBkaXNwbGF5VGV4dDogXCLlkKZcIn1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBJc1JlbWluZENoZWNrZWQ6ZmFsc2UsXG4gICAgICAgICAgICBpc1JlbWluZFRpbWU6ZmFsc2UsXG4gICAgICAgICAgICBJc01hcms6W10sXG4gICAgICAgICAgICBJc01hcmtDaGVja2VkOmZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG91Y2hTdGFydCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoRW5kKCl7XG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Rhc2tOZXh0UGFnZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zdWJtaXREYXRhLmN1cnJlbnRTdGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlVGFzaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIElzUmVtaW5kKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5Jc1JlbWluZENoZWNrZWQ9IXRoaXMuSXNSZW1pbmRDaGVja2VkO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuSXNSZW1pbmRDaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzUmVtaW5kPXRoaXMuSXNSZW1pbmRbMF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVtaW5kVGltZT10cnVlO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNSZW1pbmQ9dGhpcy5Jc1JlbWluZFsxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZW1pbmRUaW1lPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW1pbmRUaW1lSW5kZXg9MDtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5SZW1pbmRUaW1lPTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSXNNYXJrKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5Jc01hcmtDaGVja2VkPSF0aGlzLklzTWFya0NoZWNrZWQ7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5Jc01hcmtDaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzTWFyaz10aGlzLklzTWFya1swXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzTWFyaz10aGlzLklzTWFya1sxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IFxuICAgICAgICB3YXRjaD17XG4gICAgICAgICAgICBTdGFnZUlkSW5kZXgoaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TdGFnZUlkPXRoaXMuU3RhZ2VJZC52YWx1ZVtpbmRleF1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFN0YXJ0VGltZShkYXRlRGF0YSl7XG4gICAgICAgICAgICAgICAgdmFyIFN0YXJ0RGF0ZT1kYXRlRGF0YVswXSsnLScrZGF0ZURhdGFbMV0rJy0nK2RhdGVEYXRhWzJdKycgJytkYXRlRGF0YVszXSsnOicrZGF0ZURhdGFbNF0rJzonK2RhdGVEYXRhWzVdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TdGFydFRpbWU9U3RhcnREYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMubWlsbERpZigpXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFbmRUaW1lKGRhdGVEYXRhKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRW5kVGltZT1kYXRlRGF0YVswXSsnLScrZGF0ZURhdGFbMV0rJy0nK2RhdGVEYXRhWzJdKycgJytkYXRlRGF0YVszXSsnOicrZGF0ZURhdGFbNF0rJzonK2RhdGVEYXRhWzVdO1xuICAgICAgICAgICAgICAgIHRoaXMubWlsbERpZigpXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFc3RpbWF0ZVZhbHVlKHZhbHVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRXN0aW1hdGU9dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQcmlvcml0eUluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUHJpb3JpdHk9dGhpcy5Qcmlvcml0eS52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTsgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVtaW5kVGltZUluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVtaW5kVGltZT10aGlzLlJlbWluZFRpbWUudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbWlsbERpZih2YWx1ZSl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Fc3RpbWF0ZVZhbHVlPXZhbHVlO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3VibWl0RGF0YS5Fc3RpbWF0ZT12YWx1ZTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9O1xuICAgICAgICBjb21wdXRlZD0ge1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRUYXNrRm9yRWRpdChpZCxwcm9qZWN0SWQpe1xuICAgICAgICAgICAgdmFyIGRhdGE9e1xuICAgICAgICAgICAgICAgIGlkOiAnJywgXG4gICAgICAgICAgICAgICAgcHJvamVjdGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgc3RhZ2VpZDogaWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tQbGFubmluZy9HZXRUYXNrRm9yRWRpdCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgICAgICAgICAgdmFyIFRhc2tGb3JFZGl0PXJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy/pmLbmrrVcbiAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIFRhc2tGb3JFZGl0LnN0YWdlQ29tYm9ib3gpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YWdlSWQudmFsdWVbaW5kZXhdPVRhc2tGb3JFZGl0LnN0YWdlQ29tYm9ib3hbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YWdlSWQuZGlzcGxheVRleHRbaW5kZXhdPVRhc2tGb3JFZGl0LnN0YWdlQ29tYm9ib3hbaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU3RhZ2VJZD1UYXNrRm9yRWRpdC5zdGFnZUNvbWJvYm94W3RoaXMuU3RhZ2VJZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/kvJjlhYjnuqdcbiAgICAgICAgICAgICAgICBmb3IodmFyIFBpbmRleCBpbiBUYXNrRm9yRWRpdC5wcmlvcml0eUNvbWJvYm94KXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcmlvcml0eS52YWx1ZVtQaW5kZXhdPVRhc2tGb3JFZGl0LnByaW9yaXR5Q29tYm9ib3hbUGluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcmlvcml0eS5kaXNwbGF5VGV4dFtQaW5kZXhdPVRhc2tGb3JFZGl0LnByaW9yaXR5Q29tYm9ib3hbUGluZGV4XS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/mmK/lkKbmj5DphpJcbiAgICAgICAgICAgICAgICB0aGlzLklzUmVtaW5kID1UYXNrRm9yRWRpdC5pc1JlbWluZENvbWJvYm94O1xuICAgICAgICAgICAgICAgIC8vIOaYr+WQpuagh+iusFxuICAgICAgICAgICAgICAgIHRoaXMuSXNNYXJrPVRhc2tGb3JFZGl0LmlzTWFya0NvbWJvYm94O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIENyZWF0ZU9yVXBkYXRlVGFzaygpe1xuICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUGxhbm5pbmcvQ3JlYXRlT3JVcGRhdGVUYXNrJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDNdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2VzID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gNF07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZSYmcHJldlBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5pc1JlZnJlc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQYWdlcy5pc1JlZnJlc2g/cHJldlBhZ2VzLmlzUmVmcmVzaCgpOicnO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICBtaWxsRGlmKCl7XG4gICAgICAgICAgICBpZih0aGlzLnN1Ym1pdERhdGEuU3RhcnRUaW1lJiZ0aGlzLnN1Ym1pdERhdGEuRW5kVGltZSl7XG4gICAgICAgICAgICAgICAgdmFyIFN0YXJ0RGF0ZVRpbWU9IG5ldyBEYXRlKHRoaXMuc3VibWl0RGF0YS5TdGFydFRpbWUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB2YXIgRW5kRGF0ZVRpbWU9IG5ldyBEYXRlKHRoaXMuc3VibWl0RGF0YS5FbmRUaW1lKS5nZXRUaW1lKCk7IFxuICAgICAgICAgICAgICAgIHZhciBtaWxsRGlmPUVuZERhdGVUaW1lLVN0YXJ0RGF0ZVRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIGhvdXJzPScnO1xuICAgICAgICAgICAgICAgIGlmKG1pbGxEaWY+PTEwKjEwMDApeyAgIFxuICAgICAgICAgICAgICAgICAgICBob3Vycz0obWlsbERpZi8oMzYwMCoxMDAwKSkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaG91cnM9MDtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aXtuW3ruacieivr++8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuRXN0aW1hdGVWYWx1ZT1ob3VycztcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRXN0aW1hdGU9aG91cnM7XG4gICAgICAgIH1cbiAgICAgICAgICAgfSBcbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhPXd4LmdldFN0b3JhZ2VTeW5jKCd0YXNrTmV4dFBhZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuU3RhZ2VJZEluZGV4PU51bWJlcih0aGlzLnN1Ym1pdERhdGEuY3VycmVudFN0YWdlKTtcbiAgICAgICAgICAgIHRoaXMuRW5kRGF0ZS50aW1lPW5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLlN0YXJ0RGF0ZS50aW1lPW5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLkVzdGltYXRlVmFsdWU9MTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB0aGlzLkdldFRhc2tGb3JFZGl0KHRoaXMuc3VibWl0RGF0YS5zdGFnZUlkLHRoaXMuc3VibWl0RGF0YS5Qcm9qZWN0SWQpO1xuICAgICAgICB9XG4gICAgfVxuIl19