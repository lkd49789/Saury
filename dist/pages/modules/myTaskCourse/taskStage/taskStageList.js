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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            addOpacity: 1,
            duration: 300,
            circular: false,
            projectId: '',
            TaskStagesDatas: [],
            TasksDatas: [],
            setTimeout: '',
            viewHeight: [],
            pageNumber: [],
            current: 0,
            stageId: [],
            category: '',
            operationsNubmer: 0
        }, _this.methods = {
            // 删除任务
            longpress: function longpress(id, index) {
                var _this2 = this;

                wx.showModal({
                    title: '是否确认删除该项任务！',
                    content: '',
                    showCancel: true,
                    cancelText: '取消',
                    cancelColor: '#000000',
                    confirmText: '确定',
                    confirmColor: '#5d73fa',
                    success: function success(res) {
                        if (res.confirm) {
                            _this2.DeleteTask(id, index);
                        }
                    }
                });
            },

            // 更多选项
            moreChoose: function moreChoose(item, index) {
                var _this3 = this;

                var nextSort = this.TaskStagesDatas.length - 1 > index ? this.TaskStagesDatas[index + 1].sort : 0;
                var itemList = ['在此后添加新阶段', '新建任务', '删除'];
                wx.showActionSheet({
                    itemList: itemList,
                    itemColor: '#5d73fa',
                    success: function success(res) {
                        if (res.tapIndex == 0) {
                            wx.navigateTo({
                                url: './createtask/createStage?projectId=' + item.projectId + '&sort=' + item.sort + '&nextSort=' + nextSort
                            });
                        }
                        if (res.tapIndex == 1) {
                            wx.navigateTo({
                                url: './createtask/creatTask?projectId=' + item.projectId + '&currentStage=' + _this3.current + '&category=' + _this3.category
                            });
                        }
                        if (res.tapIndex == 2) {
                            if (item.taskCount == 0 && item.participantTaskCount == 0) {
                                _this3.DeleteTaskStage(item.id, index);
                            } else {
                                wx.showToast({
                                    title: '对不起，请先清空此阶段列表上的任务，然后再删除这个阶段列表！', //提示的内容,
                                    icon: 'none', //图标,
                                    duration: 2000, //延迟时间,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                            }
                        }
                    }
                });
            },

            //新建任务
            addTask: function addTask(projectId) {
                wx.navigateTo({
                    url: './createtask/creatTask?projectId=' + projectId + '&currentStage=' + this.current + '&category=' + this.category
                });
            },
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },

            // 创建阶段任务（最后）;
            touchEnd: function touchEnd() {
                var sort = this.TaskStagesDatas.length > 0 ? this.TaskStagesDatas[this.TaskStagesDatas.length - 1].sort : 1;
                var projectId = this.projectId;
                wx.navigateTo({
                    url: './createtask/createStage?projectId=' + projectId + '&sort=' + sort
                });
                this.addOpacity = 1;
                this.$apply();
            },

            //是否完成任务
            isChecked: function isChecked(sIndex, index, checked, id) {
                var _this4 = this;

                if (!this.TasksDatas[sIndex].items[index].childTask) {
                    this.TasksDatas[sIndex].items[index].checked = true;
                    var Timeout = setTimeout(function () {
                        _this4.TasksDatas[sIndex].items[index].checked = false;
                        _this4.$apply();
                    }, 0);
                    this.setTimeout = Timeout;
                    wx.showToast({
                        title: '请先检查子任务！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                } else if (!checked) {
                    this.CompletedTaskParticipant(id, 'Y', checked);
                    this.TasksDatas[sIndex].items[index].checked = !this.TasksDatas[sIndex].items[index].checked;
                } else {
                    this.CompletedTaskParticipant(id, 'N', checked);
                    this.TasksDatas[sIndex].items[index].checked = !this.TasksDatas[sIndex].items[index].checked;
                }
                this.$apply();
            },
            bindchange: function bindchange(e) {
                this.current = e.detail.current;
                this.$apply();
            },

            // 详情
            toTaskDetail: function toTaskDetail(id) {
                wx.navigateTo({
                    url: '../taskStage/taskDetail/taskdetail?id=' + id
                });
            }
        }, _this.watch = {
            current: function current(newValue, oldValue) {
                if (newValue !== oldValue) wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                });
            },
            operationsNubmer: function operationsNubmer(number, oldNumber) {
                if (number !== oldNumber) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    if (prevPage) {
                        prevPage.isRefresh();
                    }
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.TaskStagesDatas = [];
            this.TasksDatas = [];
            this.viewHeight = [];
            this.pageNumber = [];
            this.stageId = [];
            this.GetTaskStages();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.TasksDatas[this.current].totalCount / 100 > this.pageNumber[this.current] && this.$parent.global.netWorkString) {
                this.pageNumber[this.current] += 1;
                this.GetTasks(this.current, this.stageId[this.current]);
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
            this.$apply();
        }
        //获取任务阶段

    }, {
        key: 'GetTaskStages',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, TaskStagesDatas, TaskStagesData, index, stageId;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    projectId: this.projectId
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/GetTaskStages', 'post', data);

                            case 3:
                                TaskStagesDatas = _context.sent;

                                if (TaskStagesDatas.statusCode == 200) {
                                    TaskStagesData = TaskStagesDatas.data.result;

                                    this.TaskStagesDatas = TaskStagesData;
                                    for (index in TaskStagesData) {
                                        stageId = TaskStagesData[index].id;

                                        this.stageId[index] = TaskStagesData[index].id;
                                        this.pageNumber[index] = 1;
                                        this.viewHeight[index] = 580;
                                        this.GetTasks(index, stageId);
                                    }
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetTaskStages() {
                return _ref2.apply(this, arguments);
            }

            return GetTaskStages;
        }()
        //获取任务项

    }, {
        key: 'GetTasks',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index, stageId) {
                var data, GetTasksDatas, TasksData, childChecked, i, millTime;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                data = {
                                    pageNumber: this.pageNumber[index],
                                    pageSize: 100,
                                    stageId: stageId,
                                    projectId: this.projectId
                                };
                                _context2.next = 4;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/GetTasks', 'post', data);

                            case 4:
                                GetTasksDatas = _context2.sent;

                                if (GetTasksDatas.data.result.items.length !== 0) {
                                    TasksData = GetTasksDatas.data.result;
                                    childChecked = [];

                                    for (i in TasksData.items) {
                                        if (TasksData.items[i].isCompleted == 'Y') {
                                            TasksData.items[i]['checked'] = true;
                                        } else {
                                            TasksData.items[i]['checked'] = false;
                                        }
                                        if (TasksData.items[i].isCompleted == 'D') {
                                            TasksData.items[i]['childTask'] = false;
                                        } else {
                                            TasksData.items[i]['childTask'] = true;
                                        }
                                        if (TasksData.items[i].endTime) {
                                            millTime = new Date(TasksData.items[i].endTime).getTime() - 8 * 60 * 60 * 1000;

                                            TasksData.items[i].endTime = new Date(millTime);
                                            TasksData.items[i].endTime = (0, _api.formatTimeSymbol)(TasksData.items[i].endTime, '/');
                                        }
                                    }
                                    this.TasksDatas[index] = TasksData;
                                    this.viewHeight[index] += TasksData.items.length * 175;
                                } else {
                                    // child[index].push([])
                                    this.TasksDatas[index] = {
                                        item: [],
                                        totalCount: 0
                                    };
                                }
                                // console.log(child)
                                this.$apply();

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetTasks(_x, _x2) {
                return _ref3.apply(this, arguments);
            }

            return GetTasks;
        }()
        //完成任务

    }, {
        key: 'CompletedTaskParticipant',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, isCompleted, checked) {
                var date, data, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                wx.showLoading({
                                    title: '完成中，请稍等！', //提示的内容,
                                    mask: true //显示透明蒙层，防止触摸穿透,
                                });
                                date = new Date();
                                data = {
                                    isMark: "Y",
                                    isParticipant: "Y",
                                    isRemind: "Y",
                                    endTime: date,
                                    id: id,
                                    isCompleted: isCompleted,
                                    projectId: this.projectId
                                };
                                _context3.next = 5;
                                return _ajax2.default.getData('/api/services/web/taskParticipant/CompletedTaskParticipant', 'post', data);

                            case 5:
                                res = _context3.sent;

                                if (res.data.success) {
                                    if (res.statusCode == 200 && res.data.success) {
                                        if (!checked) {
                                            wx.showToast({
                                                title: '已完成',
                                                icon: 'none',
                                                duration: 1500,
                                                mask: false
                                            });
                                        } else {
                                            wx.showToast({
                                                title: '已取消',
                                                icon: 'none',
                                                duration: 1500,
                                                mask: false
                                            });
                                        }
                                    }
                                }

                            case 7:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function CompletedTaskParticipant(_x3, _x4, _x5) {
                return _ref4.apply(this, arguments);
            }

            return CompletedTaskParticipant;
        }()
        //删除阶段任务

    }, {
        key: 'DeleteTaskStage',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, index) {
                var resData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                id = {
                                    id: id
                                };
                                _context4.next = 3;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/DeleteTaskStage', 'post', id);

                            case 3:
                                resData = _context4.sent;

                                if (resData.statusCode == 200) {
                                    // this.TaskStagesDatas = [];
                                    // this.TasksDatas = [];
                                    this.operationsNubmer += 1;
                                    this.viewHeight = this.viewHeight.splice(index, 1);
                                    this.pageNumber = this.pageNumber.splice(index, 1);
                                    this.stageId = this.stageId.splice(index, 1);
                                    if (this.current > 0) {
                                        this.current = this.current - 1;
                                    } else {
                                        this.current = 0;
                                    }
                                    this.GetTaskStages();
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
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function DeleteTaskStage(_x6, _x7) {
                return _ref5.apply(this, arguments);
            }

            return DeleteTaskStage;
        }()
        //删除任务项

    }, {
        key: 'DeleteTask',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, index) {
                var data, resData;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                data = {
                                    id: id
                                };
                                _context5.next = 3;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/DeleteTask', 'post', data);

                            case 3:
                                resData = _context5.sent;

                                if (resData.statusCode == 200) {
                                    this.operationsNubmer += 1;
                                    this.TasksDatas.totalCount -= 1;
                                    this.TasksDatas.items = this.TasksDatas.splice(index, 1);
                                    this.current = this.current;
                                    this.GetTaskStages();
                                    this.GetTasks();
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
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function DeleteTask(_x8, _x9) {
                return _ref6.apply(this, arguments);
            }

            return DeleteTask;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.projectId = options.id;
            this.category = options.category;
            this.GetTaskStages();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh() {
            this.TaskStagesDatas = [];
            this.TasksDatas = [];
            this.viewHeight = [];
            this.pageNumber = [];
            this.stageId = [];
            this.GetTaskStages();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myTaskCourse/taskStage/taskStageList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tTdGFnZUxpc3QuanMiXSwibmFtZXMiOlsiY2xpZW50RGV0YWlsIiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsImRhdGEiLCJhZGRPcGFjaXR5IiwiZHVyYXRpb24iLCJjaXJjdWxhciIsInByb2plY3RJZCIsIlRhc2tTdGFnZXNEYXRhcyIsIlRhc2tzRGF0YXMiLCJzZXRUaW1lb3V0Iiwidmlld0hlaWdodCIsInBhZ2VOdW1iZXIiLCJjdXJyZW50Iiwic3RhZ2VJZCIsImNhdGVnb3J5Iiwib3BlcmF0aW9uc051Ym1lciIsIm1ldGhvZHMiLCJsb25ncHJlc3MiLCJpZCIsImluZGV4Iiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsIkRlbGV0ZVRhc2siLCJtb3JlQ2hvb3NlIiwiaXRlbSIsIm5leHRTb3J0IiwibGVuZ3RoIiwic29ydCIsIml0ZW1MaXN0Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUNvbG9yIiwidGFwSW5kZXgiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGFza0NvdW50IiwicGFydGljaXBhbnRUYXNrQ291bnQiLCJEZWxldGVUYXNrU3RhZ2UiLCJzaG93VG9hc3QiLCJpY29uIiwibWFzayIsImFkZFRhc2siLCJ0b3VjaFN0YXJ0IiwiJGFwcGx5IiwidG91Y2hFbmQiLCJpc0NoZWNrZWQiLCJzSW5kZXgiLCJjaGVja2VkIiwiaXRlbXMiLCJjaGlsZFRhc2siLCJUaW1lb3V0IiwiQ29tcGxldGVkVGFza1BhcnRpY2lwYW50IiwiYmluZGNoYW5nZSIsImUiLCJkZXRhaWwiLCJ0b1Rhc2tEZXRhaWwiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJudW1iZXIiLCJvbGROdW1iZXIiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwiaXNSZWZyZXNoIiwiR2V0VGFza1N0YWdlcyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJ0b3RhbENvdW50IiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJHZXRUYXNrcyIsImFqYXgiLCJnZXREYXRhIiwic3RhdHVzQ29kZSIsIlRhc2tTdGFnZXNEYXRhIiwicmVzdWx0Iiwic2hvd0xvYWRpbmciLCJwYWdlU2l6ZSIsIkdldFRhc2tzRGF0YXMiLCJUYXNrc0RhdGEiLCJjaGlsZENoZWNrZWQiLCJpIiwiaXNDb21wbGV0ZWQiLCJlbmRUaW1lIiwibWlsbFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImRhdGUiLCJpc01hcmsiLCJpc1BhcnRpY2lwYW50IiwiaXNSZW1pbmQiLCJyZXNEYXRhIiwic3BsaWNlIiwiZXJyb3IiLCJtZXNzYWdlIiwib3B0aW9ucyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2pCQyxNLEdBQVM7QUFDTEMsbUNBQXVCLElBRGxCO0FBRUxDLGlDQUFxQixNQUZoQjtBQUdMQyxnQ0FBb0IsU0FIZjtBQUlMQyxtQ0FBdUI7QUFKbEIsUyxRQU1UQyxJLEdBQU87QUFDSEMsd0JBQVksQ0FEVDtBQUVIQyxzQkFBVSxHQUZQO0FBR0hDLHNCQUFVLEtBSFA7QUFJSEMsdUJBQVcsRUFKUjtBQUtIQyw2QkFBaUIsRUFMZDtBQU1IQyx3QkFBWSxFQU5UO0FBT0hDLHdCQUFZLEVBUFQ7QUFRSEMsd0JBQVksRUFSVDtBQVNIQyx3QkFBWSxFQVRUO0FBVUhDLHFCQUFTLENBVk47QUFXSEMscUJBQVMsRUFYTjtBQVlIQyxz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TCxHQUFnQjhGLFFBQVE5RixRQUF4QjtBQUNBLGlCQUFLOEQsYUFBTDtBQUNIOzs7b0NBQ1c7QUFDUixpQkFBS3JFLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLGlCQUFLRSxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsaUJBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxpQkFBS0UsT0FBTCxHQUFlLEVBQWY7QUFDQSxpQkFBSytELGFBQUw7QUFDSDs7OztFQXBYcUNpQyxlQUFLQyxJOztrQkFBMUJsSCxZIiwiZmlsZSI6InRhc2tTdGFnZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdFRpbWVTeW1ib2xcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgY2lyY3VsYXI6IGZhbHNlLFxuICAgICAgICAgICAgcHJvamVjdElkOiAnJyxcbiAgICAgICAgICAgIFRhc2tTdGFnZXNEYXRhczogW10sXG4gICAgICAgICAgICBUYXNrc0RhdGFzOiBbXSxcbiAgICAgICAgICAgIHNldFRpbWVvdXQ6ICcnLFxuICAgICAgICAgICAgdmlld0hlaWdodDogW10sXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICBzdGFnZUlkOiBbXSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcbiAgICAgICAgICAgIG9wZXJhdGlvbnNOdWJtZXI6MCxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIOWIoOmZpOS7u+WKoVxuICAgICAgICAgICAgbG9uZ3ByZXNzKGlkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5piv5ZCm56Gu6K6k5Yig6Zmk6K+l6aG55Lu75Yqh77yBJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EZWxldGVUYXNrKGlkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDmm7TlpJrpgInpoblcbiAgICAgICAgICAgIG1vcmVDaG9vc2UoaXRlbSxpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U29ydD10aGlzLlRhc2tTdGFnZXNEYXRhcy5sZW5ndGgtMT5pbmRleD90aGlzLlRhc2tTdGFnZXNEYXRhc1tpbmRleCsxXS5zb3J0OjA7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1MaXN0ID0gWyflnKjmraTlkI7mt7vliqDmlrDpmLbmrrUnLCAn5paw5bu65Lu75YqhJywgJ+WIoOmZpCddO1xuICAgICAgICAgICAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MaXN0OiBpdGVtTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9jcmVhdGV0YXNrL2NyZWF0ZVN0YWdlP3Byb2plY3RJZD0nICsgaXRlbS5wcm9qZWN0SWQgKyAnJnNvcnQ9JyArIGl0ZW0uc29ydCsnJm5leHRTb3J0PScrbmV4dFNvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0ZXRhc2svY3JlYXRUYXNrP3Byb2plY3RJZD0nICsgaXRlbS5wcm9qZWN0SWQgKyAnJmN1cnJlbnRTdGFnZT0nICsgdGhpcy5jdXJyZW50ICsgJyZjYXRlZ29yeT0nICsgdGhpcy5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS50YXNrQ291bnQ9PTAmJml0ZW0ucGFydGljaXBhbnRUYXNrQ291bnQ9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRlbGV0ZVRhc2tTdGFnZShpdGVtLmlkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflr7nkuI3otbfvvIzor7flhYjmuIXnqbrmraTpmLbmrrXliJfooajkuIrnmoTku7vliqHvvIznhLblkI7lho3liKDpmaTov5nkuKrpmLbmrrXliJfooajvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/mlrDlu7rku7vliqFcbiAgICAgICAgICAgIGFkZFRhc2socHJvamVjdElkKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vY3JlYXRldGFzay9jcmVhdFRhc2s/cHJvamVjdElkPScgKyBwcm9qZWN0SWQgKyAnJmN1cnJlbnRTdGFnZT0nICsgdGhpcy5jdXJyZW50ICsgJyZjYXRlZ29yeT0nICsgdGhpcy5jYXRlZ29yeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Yib5bu66Zi25q615Lu75Yqh77yI5pyA5ZCO77yJO1xuICAgICAgICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvcnQ9dGhpcy5UYXNrU3RhZ2VzRGF0YXMubGVuZ3RoPjA/dGhpcy5UYXNrU3RhZ2VzRGF0YXNbdGhpcy5UYXNrU3RhZ2VzRGF0YXMubGVuZ3RoIC0gMV0uc29ydDoxO1xuICAgICAgICAgICAgICAgIHZhciBwcm9qZWN0SWQgPSB0aGlzLnByb2plY3RJZDtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9jcmVhdGV0YXNrL2NyZWF0ZVN0YWdlP3Byb2plY3RJZD0nICsgcHJvamVjdElkICsgJyZzb3J0PScgKyBzb3J0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5piv5ZCm5a6M5oiQ5Lu75YqhXG4gICAgICAgICAgICBpc0NoZWNrZWQoc0luZGV4LCBpbmRleCwgY2hlY2tlZCwgaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuVGFza3NEYXRhc1tzSW5kZXhdLml0ZW1zW2luZGV4XS5jaGlsZFRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYXNrc0RhdGFzW3NJbmRleF0uaXRlbXNbaW5kZXhdLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlRhc2tzRGF0YXNbc0luZGV4XS5pdGVtc1tpbmRleF0uY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUaW1lb3V0ID0gVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YWI5qOA5p+l5a2Q5Lu75Yqh77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21wbGV0ZWRUYXNrUGFydGljaXBhbnQoaWQsICdZJywgY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGFza3NEYXRhc1tzSW5kZXhdLml0ZW1zW2luZGV4XS5jaGVja2VkID0gIXRoaXMuVGFza3NEYXRhc1tzSW5kZXhdLml0ZW1zW2luZGV4XS5jaGVja2VkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21wbGV0ZWRUYXNrUGFydGljaXBhbnQoaWQsICdOJywgY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYXNrc0RhdGFzW3NJbmRleF0uaXRlbXNbaW5kZXhdLmNoZWNrZWQgPSAhdGhpcy5UYXNrc0RhdGFzW3NJbmRleF0uaXRlbXNbaW5kZXhdLmNoZWNrZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kY2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g6K+m5oOFXG4gICAgICAgICAgICB0b1Rhc2tEZXRhaWwoaWQpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vdGFza1N0YWdlL3Rhc2tEZXRhaWwvdGFza2RldGFpbD9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBjdXJyZW50KG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHd4LnBhZ2VTY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVyYXRpb25zTnVibWVyKG51bWJlcixvbGROdW1iZXIpe1xuICAgICAgICAgICAgICAgIGlmKG51bWJlciE9PW9sZE51bWJlcil7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5pc1JlZnJlc2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDkuIvmi4nliLfmlrBcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICAgICAgICB0aGlzLlRhc2tTdGFnZXNEYXRhcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5UYXNrc0RhdGFzID0gW107XG4gICAgICAgICAgICB0aGlzLnZpZXdIZWlnaHQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zdGFnZUlkID0gW107XG4gICAgICAgICAgICB0aGlzLkdldFRhc2tTdGFnZXMoKTtcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkuIrmi4nliqDovb1cbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLlRhc2tzRGF0YXNbdGhpcy5jdXJyZW50XS50b3RhbENvdW50IC8gMTAwID4gdGhpcy5wYWdlTnVtYmVyW3RoaXMuY3VycmVudF0gJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyW3RoaXMuY3VycmVudF0gKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldFRhc2tzKHRoaXMuY3VycmVudCwgdGhpcy5zdGFnZUlkW3RoaXMuY3VycmVudF0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lus5piv5pyJ5bqV57q/55qE77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v6I635Y+W5Lu75Yqh6Zi25q61XG4gICAgICAgIGFzeW5jIEdldFRhc2tTdGFnZXMoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMucHJvamVjdElkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgVGFza1N0YWdlc0RhdGFzID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUGxhbm5pbmcvR2V0VGFza1N0YWdlcycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKFRhc2tTdGFnZXNEYXRhcy5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgIHZhciBUYXNrU3RhZ2VzRGF0YSA9IFRhc2tTdGFnZXNEYXRhcy5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLlRhc2tTdGFnZXNEYXRhcyA9IFRhc2tTdGFnZXNEYXRhO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIFRhc2tTdGFnZXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFnZUlkID0gVGFza1N0YWdlc0RhdGFbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YWdlSWRbaW5kZXhdID0gVGFza1N0YWdlc0RhdGFbaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcltpbmRleF0gPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdIZWlnaHRbaW5kZXhdID0gNTgwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFRhc2tzKGluZGV4LCBzdGFnZUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5bku7vliqHpoblcbiAgICAgICAgYXN5bmMgR2V0VGFza3MoaW5kZXgsIHN0YWdlSWQpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyW2luZGV4XSxcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAwLFxuICAgICAgICAgICAgICAgIHN0YWdlSWQ6IHN0YWdlSWQsXG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnByb2plY3RJZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIEdldFRhc2tzRGF0YXMgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tQbGFubmluZy9HZXRUYXNrcycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChHZXRUYXNrc0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBUYXNrc0RhdGEgPSBHZXRUYXNrc0RhdGFzLmRhdGEucmVzdWx0XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ2hlY2tlZCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gVGFza3NEYXRhLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUYXNrc0RhdGEuaXRlbXNbaV0uaXNDb21wbGV0ZWQgPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrc0RhdGEuaXRlbXNbaV1bJ2NoZWNrZWQnXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tzRGF0YS5pdGVtc1tpXVsnY2hlY2tlZCddID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFza3NEYXRhLml0ZW1zW2ldLmlzQ29tcGxldGVkID09ICdEJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGFza3NEYXRhLml0ZW1zW2ldWydjaGlsZFRhc2snXSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrc0RhdGEuaXRlbXNbaV1bJ2NoaWxkVGFzayddID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChUYXNrc0RhdGEuaXRlbXNbaV0uZW5kVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlsbFRpbWU9bmV3IERhdGUoVGFza3NEYXRhLml0ZW1zW2ldLmVuZFRpbWUpLmdldFRpbWUoKS0oOCo2MCo2MCoxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lPW5ldyBEYXRlKG1pbGxUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lID0gZm9ybWF0VGltZVN5bWJvbChUYXNrc0RhdGEuaXRlbXNbaV0uZW5kVGltZSwgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLlRhc2tzRGF0YXNbaW5kZXhdID0gVGFza3NEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0hlaWdodFtpbmRleF0gKz0gVGFza3NEYXRhLml0ZW1zLmxlbmd0aCAqIDE3NTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2hpbGRbaW5kZXhdLnB1c2goW10pXG4gICAgICAgICAgICAgICAgdGhpcy5UYXNrc0RhdGFzW2luZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogW10sXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZClcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/lrozmiJDku7vliqFcbiAgICAgICAgYXN5bmMgQ29tcGxldGVkVGFza1BhcnRpY2lwYW50KGlkLCBpc0NvbXBsZXRlZCwgY2hlY2tlZCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6M5oiQ5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlzTWFyazogXCJZXCIsXG4gICAgICAgICAgICAgICAgaXNQYXJ0aWNpcGFudDogXCJZXCIsXG4gICAgICAgICAgICAgICAgaXNSZW1pbmQ6IFwiWVwiLFxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IGRhdGUsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBpc0NvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMucHJvamVjdElkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BhcnRpY2lwYW50L0NvbXBsZXRlZFRhc2tQYXJ0aWNpcGFudCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W3suWujOaIkCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey5Y+W5raIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+WIoOmZpOmYtuauteS7u+WKoVxuICAgICAgICBhc3luYyBEZWxldGVUYXNrU3RhZ2UoaWQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BsYW5uaW5nL0RlbGV0ZVRhc2tTdGFnZScsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuVGFza1N0YWdlc0RhdGFzID0gW107XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5UYXNrc0RhdGFzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25zTnVibWVyKz0xO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0hlaWdodCA9IHRoaXMudmlld0hlaWdodC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gdGhpcy5wYWdlTnVtYmVyLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlSWQgPSB0aGlzLnN0YWdlSWQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCAtIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRUYXNrU3RhZ2VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+WIoOmZpOS7u+WKoemhuVxuICAgICAgICBhc3luYyBEZWxldGVUYXNrKGlkLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUGxhbm5pbmcvRGVsZXRlVGFzaycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25zTnVibWVyKz0xO1xuICAgICAgICAgICAgICAgIHRoaXMuVGFza3NEYXRhcy50b3RhbENvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXNrc0RhdGFzLml0ZW1zID0gdGhpcy5UYXNrc0RhdGFzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0VGFza1N0YWdlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0VGFza3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RJZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gb3B0aW9ucy5jYXRlZ29yeTtcbiAgICAgICAgICAgIHRoaXMuR2V0VGFza1N0YWdlcygpO1xuICAgICAgICB9XG4gICAgICAgIGlzUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMuVGFza1N0YWdlc0RhdGFzID0gW107XG4gICAgICAgICAgICB0aGlzLlRhc2tzRGF0YXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudmlld0hlaWdodCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gW107XG4gICAgICAgICAgICB0aGlzLnN0YWdlSWQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuR2V0VGFza1N0YWdlcygpO1xuICAgICAgICB9XG4gICAgfVxuIl19