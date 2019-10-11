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

var _navbar = require('./../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var taskProject = function (_wepy$page) {
    _inherits(taskProject, _wepy$page);

    function taskProject() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, taskProject);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = taskProject.__proto__ || Object.getPrototypeOf(taskProject)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            navbar: _navbar2.default
        }, _this.data = {
            queryStream: {},
            currentTab: 0,
            navbars: ['我的', '公开'],
            CasePublicProject: {
                totalCount: 0,
                items: [],
                pageNumber: 1
            },
            CasePublicProjectImage: [],
            CasePrivateProject: {
                totalCount: 0,
                items: [],
                pageNumber: 1
            },
            CasePrivateProjectImage: [],
            isShow: false,
            sorting: ''
        }, _this.methods = {
            createProject: function createProject() {
                wx.navigateTo({ url: './createProject' });
            },
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: './search/searchTask'
                });
            },
            toTaskList: function toTaskList(projectId, category) {
                category = category.trim();
                wx.navigateTo({
                    url: './taskStage/taskStageList?id=' + projectId + '&category=' + category
                });
            },
            filter: function filter(name) {
                this.MyWorklogsData = [];
                this.pageNumber = 1;
                this.isShow = false;
                switch (name) {
                    case 'cteateTime':
                        this.sorting = 'CreationTime desc';
                        if (this.currentTab == 0) {
                            this.GetCasePrivateProject();
                        } else if (this.currentTab == 1) {
                            this.GetCasePublicProject();
                        }

                        break;
                }
            },
            ishowFilter: function ishowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            }
        }, _this.watch = {
            currentTab: function currentTab(newValue, oldValue) {
                if (newValue !== oldValue) {
                    wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 0
                    });
                }
                switch (newValue) {
                    case 0:
                        this.CasePrivateProject = {
                            totalCount: 0,
                            items: [],
                            pageNumber: 1
                        }, this.CasePrivateProjectImage = [];
                        this.GetCasePrivateProject();
                        break;
                    case 1:
                        this.CasePublicProject = {
                            totalCount: 0,
                            items: [],
                            pageNumber: 1
                        }, this.CasePublicProjectImage = [], this.GetCasePublicProject();
                        break;

                    default:
                        break;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(taskProject, [{
        key: 'onReachBottom',

        // 上拉加载
        value: function onReachBottom() {
            if (this.currentTab == 0) {
                if (this.CasePrivateProject.totalCount / 10 > this.CasePrivateProject.pageNumber && this.$parent.global.netWorkString) {
                    this.CasePrivateProject.pageNumber += 1;
                    this.GetCasePrivateProject();
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
            if (this.currentTab == 1) {
                if (this.CasePublicProject.totalCount / 10 > this.CasePublicProject.pageNumber && this.$parent.global.netWorkString) {
                    this.CasePublicProject.pageNumber += 1;
                    this.GetCasePublicProject();
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
            this.$apply();
        }
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.queryStream = {};
            this.sorting = '';
            if (this.currentTab == 0) {
                this.CasePrivateProject = {
                    totalCount: 0,
                    items: [],
                    pageNumber: 1
                }, this.CasePrivateProjectImage = [];
                this.GetCasePrivateProject();
            } else if (this.currentTab == 1) {
                this.CasePublicProject = {
                    totalCount: 0,
                    items: [],
                    pageNumber: 1
                }, this.CasePublicProjectImage = [], this.GetCasePublicProject();
            }
            this.$apply();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
    }, {
        key: 'getImage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var CasePublicProjectImage, index, id, http, ProjectCoverData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(data.length !== 0)) {
                                    _context.next = 15;
                                    break;
                                }

                                CasePublicProjectImage = [];
                                _context.t0 = regeneratorRuntime.keys(data);

                            case 3:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 13;
                                    break;
                                }

                                index = _context.t1.value;
                                id = data[index].id;
                                http = '/api/services/web/taskProject/GetProjectCover?id=' + id;
                                _context.next = 9;
                                return _ajax2.default.getUserAvatar(http);

                            case 9:
                                ProjectCoverData = _context.sent;

                                CasePublicProjectImage[index] = ProjectCoverData.tempFilePath;
                                _context.next = 3;
                                break;

                            case 13:
                                this.CasePublicProjectImage = this.CasePublicProjectImage.concat(CasePublicProjectImage);
                                this.$apply();

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getImage(_x) {
                return _ref2.apply(this, arguments);
            }

            return getImage;
        }()
    }, {
        key: 'getImage2',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
                var CasePrivateProjectImage, index, id, http, ProjectCoverData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!(data.length !== 0)) {
                                    _context2.next = 15;
                                    break;
                                }

                                CasePrivateProjectImage = [];
                                _context2.t0 = regeneratorRuntime.keys(data);

                            case 3:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 13;
                                    break;
                                }

                                index = _context2.t1.value;
                                id = data[index].id;
                                http = '/api/services/web/taskProject/GetProjectCover?id=' + id;
                                _context2.next = 9;
                                return _ajax2.default.getUserAvatar(http);

                            case 9:
                                ProjectCoverData = _context2.sent;

                                CasePrivateProjectImage[index] = ProjectCoverData.tempFilePath;
                                _context2.next = 3;
                                break;

                            case 13:
                                this.CasePrivateProjectImage = this.CasePrivateProjectImage.concat(CasePrivateProjectImage);
                                this.$apply();

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getImage2(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getImage2;
        }()
    }, {
        key: 'GetCasePublicProject',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var data, resData, CasePublicProject, index, category;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                this.sorting = this.sorting || '';
                                wx.showLoading({
                                    title: '加载中，请稍等！',
                                    mask: true
                                });
                                data = {
                                    pageNumber: this.CasePublicProject.pageNumber,
                                    pageSize: 10,
                                    privacy: "0",
                                    sorting: this.sorting
                                };

                                if (Object.keys(this.queryStream).length > 0) {
                                    Object.assign(data, this.queryStream);
                                }
                                // data.name =  this.queryStream.name || '';
                                _context3.next = 6;
                                return _ajax2.default.getData('/api/services/web/taskProject/GetTaskProjects', 'post', data);

                            case 6:
                                resData = _context3.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context3.next = 33;
                                    break;
                                }

                                if (!(resData.data.result.items.length !== 0)) {
                                    _context3.next = 31;
                                    break;
                                }

                                CasePublicProject = resData.data.result.items;
                                _context3.t0 = regeneratorRuntime.keys(CasePublicProject);

                            case 11:
                                if ((_context3.t1 = _context3.t0()).done) {
                                    _context3.next = 26;
                                    break;
                                }

                                index = _context3.t1.value;
                                category = CasePublicProject[index].category.replace(/\s+/g, "");
                                _context3.t2 = category;
                                _context3.next = _context3.t2 === '0' ? 17 : _context3.t2 === '1' ? 19 : _context3.t2 === '2' ? 21 : 23;
                                break;

                            case 17:
                                CasePublicProject[index]['caseTypeColor'] = '#5d73fa';
                                return _context3.abrupt('break', 24);

                            case 19:
                                CasePublicProject[index]['caseTypeColor'] = '#009dff';
                                return _context3.abrupt('break', 24);

                            case 21:
                                CasePublicProject[index]['caseTypeColor'] = '#ff9900';
                                return _context3.abrupt('break', 24);

                            case 23:
                                return _context3.abrupt('break', 24);

                            case 24:
                                _context3.next = 11;
                                break;

                            case 26:
                                this.CasePublicProject.items = this.CasePublicProject.items.concat(CasePublicProject);
                                this.CasePublicProject.totalCount = resData.data.result.totalCount;
                                this.getImage(CasePublicProject);
                                _context3.next = 32;
                                break;

                            case 31:
                                wx.showToast({
                                    title: '数据为空！', //提示的内容,
                                    icon: 'none', //图标,
                                    duration: 2000, //延迟时间,
                                    mask: false, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });

                            case 32:
                                this.$apply();

                            case 33:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetCasePublicProject() {
                return _ref4.apply(this, arguments);
            }

            return GetCasePublicProject;
        }()
    }, {
        key: 'GetCasePrivateProject',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sort) {
                var data, resData, CasePrivateProject, index, category;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                this.sorting = sort || this.sorting;
                                wx.showLoading({
                                    title: '加载中，请稍等！',
                                    mask: true
                                });
                                data = {
                                    pageNumber: this.CasePrivateProject.pageNumber,
                                    pageSize: 10,
                                    privacy: "1",
                                    sorting: this.sorting
                                };

                                if (Object.keys(this.queryStream).length > 0) {
                                    Object.assign(data, this.queryStream);
                                }
                                _context4.next = 6;
                                return _ajax2.default.getData('/api/services/web/taskProject/GetTaskProjects', 'post', data);

                            case 6:
                                resData = _context4.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context4.next = 33;
                                    break;
                                }

                                if (!(resData.data.result.items.length !== 0)) {
                                    _context4.next = 31;
                                    break;
                                }

                                CasePrivateProject = resData.data.result.items;
                                _context4.t0 = regeneratorRuntime.keys(CasePrivateProject);

                            case 11:
                                if ((_context4.t1 = _context4.t0()).done) {
                                    _context4.next = 26;
                                    break;
                                }

                                index = _context4.t1.value;
                                category = CasePrivateProject[index].category.replace(/\s+/g, "");
                                _context4.t2 = category;
                                _context4.next = _context4.t2 === '0' ? 17 : _context4.t2 === '1' ? 19 : _context4.t2 === '2' ? 21 : 23;
                                break;

                            case 17:
                                CasePrivateProject[index]['caseTypeColor'] = '#5d73fa';
                                return _context4.abrupt('break', 24);

                            case 19:
                                CasePrivateProject[index]['caseTypeColor'] = '#009dff';
                                return _context4.abrupt('break', 24);

                            case 21:
                                CasePrivateProject[index]['caseTypeColor'] = '#ff9900';
                                return _context4.abrupt('break', 24);

                            case 23:
                                return _context4.abrupt('break', 24);

                            case 24:
                                _context4.next = 11;
                                break;

                            case 26:
                                this.CasePrivateProject.items = this.CasePrivateProject.items.concat(CasePrivateProject);
                                this.CasePrivateProject.totalCount = resData.data.result.totalCount;
                                this.getImage2(CasePrivateProject);
                                _context4.next = 32;
                                break;

                            case 31:
                                wx.showToast({
                                    title: '数据为空！', //提示的内容,
                                    icon: 'none', //图标,
                                    duration: 2000, //延迟时间,
                                    mask: false, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });

                            case 32:
                                this.$apply();

                            case 33:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function GetCasePrivateProject(_x3) {
                return _ref5.apply(this, arguments);
            }

            return GetCasePrivateProject;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetCasePrivateProject();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh(name) {
            if (name) {
                this.queryStream.name = name;
            } else {
                this.queryStream = {};
            }
            this.sorting = '';
            if (this.currentTab == 1) {
                this.currentTab = 0;
            }
            this.CasePrivateProject = {
                totalCount: 0,
                items: [],
                pageNumber: 1
            }, this.CasePrivateProjectImage = [];
            this.GetCasePrivateProject();
            this.$apply();
        }
        //高级搜索返回数据

    }, {
        key: 'advancedSearchBackData',
        value: function advancedSearchBackData(searchData) {
            this.queryStream = searchData;
            if (this.currentTab == 0) {
                this.CasePrivateProject = {
                    totalCount: 0,
                    items: [],
                    pageNumber: 1
                }, this.CasePrivateProjectImage = [];
                this.GetCasePrivateProject();
            } else {
                this.currentTab = 0;
            }
            this.$apply();
        }
    }]);

    return taskProject;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(taskProject , 'pages/modules/myTaskCourse/taskProject'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tQcm9qZWN0LmpzIl0sIm5hbWVzIjpbInRhc2tQcm9qZWN0IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hdmJhciIsImRhdGEiLCJxdWVyeVN0cmVhbSIsImN1cnJlbnRUYWIiLCJuYXZiYXJzIiwiQ2FzZVB1YmxpY1Byb2plY3QiLCJ0b3RhbENvdW50IiwiaXRlbXMiLCJwYWdlTnVtYmVyIiwiQ2FzZVB1YmxpY1Byb2plY3RJbWFnZSIsIkNhc2VQcml2YXRlUHJvamVjdCIsIkNhc2VQcml2YXRlUHJvamVjdEltYWdlIiwiaXNTaG93Iiwic29ydGluZyIsIm1ldGhvZHMiLCJjcmVhdGVQcm9qZWN0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9TZWFyY2giLCJ0b1Rhc2tMaXN0IiwicHJvamVjdElkIiwiY2F0ZWdvcnkiLCJ0cmltIiwiZmlsdGVyIiwibmFtZSIsIk15V29ya2xvZ3NEYXRhIiwiR2V0Q2FzZVByaXZhdGVQcm9qZWN0IiwiR2V0Q2FzZVB1YmxpY1Byb2plY3QiLCJpc2hvd0ZpbHRlciIsIiRhcHBseSIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImR1cmF0aW9uIiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImxlbmd0aCIsImluZGV4IiwiaWQiLCJodHRwIiwiYWpheCIsImdldFVzZXJBdmF0YXIiLCJQcm9qZWN0Q292ZXJEYXRhIiwidGVtcEZpbGVQYXRoIiwiY29uY2F0Iiwic2hvd0xvYWRpbmciLCJwYWdlU2l6ZSIsInByaXZhY3kiLCJPYmplY3QiLCJrZXlzIiwiYXNzaWduIiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwicmVwbGFjZSIsImdldEltYWdlIiwic3VjY2VzcyIsInNvcnQiLCJnZXRJbWFnZTIiLCJzZWFyY2hEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsbUNBQXVCLElBRGxCO0FBRUxDLGlDQUFxQixNQUZoQjtBQUdMQyxnQ0FBb0IsU0FIZjtBQUlMQyxtQ0FBdUI7QUFKbEIsUyxRQU1WQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUFtRCwwQkFBeUIsWUFBNUUsRUFBeUYsMkJBQTBCLFlBQW5ILEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyx5QkFBYSxFQURWO0FBRUhDLHdCQUFZLENBRlQ7QUFHSEMscUJBQVMsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUhOO0FBSUhDLCtCQUFtQjtBQUNmQyw0QkFBWSxDQURHO0FBRWZDLHVCQUFPLEVBRlE7QUFHZkMsNEJBQVk7QUFIRyxhQUpoQjtBQVNIQyxvQ0FBd0IsRUFUckI7QUFVSEMsZ0NBQW9CO0FBQ2hCSiw0QkFBWSxDQURJO0FBRWhCQyx1QkFBTyxFQUZTO0FBR2hCQyw0QkFBWTtBQUhJLGFBVmpCO0FBZUhHLHFDQUF5QixFQWZ0QjtBQWdCSEMsb0JBQVEsS0FoQkw7QUFpQkhDLHFCQUFTO0FBakJOLFMsUUFtQlBDLE8sR0FBVTtBQUNOQyx5QkFETSwyQkFDUztBQUNYQyxtQkFBR0MsVUFBSCxDQUFjLEVBQUVDLEtBQUssaUJBQVAsRUFBZDtBQUNILGFB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QUFhLEVBQWI7QUFDQSxnQkFBRyxLQUFLVixVQUFMLElBQWlCLENBQXBCLEVBQXNCO0FBQ2xCLHFCQUFLQSxVQUFMLEdBQWdCLENBQWhCO0FBQ0g7QUFDRCxpQkFBS08sa0JBQUwsR0FBMEI7QUFDdEJKLDRCQUFZLENBRFU7QUFFdEJDLHVCQUFPLEVBRmU7QUFHdEJDLDRCQUFZO0FBSFUsYUFBMUIsRUFLQSxLQUFLRyx1QkFBTCxHQUErQixFQUwvQjtBQU1BLGlCQUFLZ0IscUJBQUw7QUFDQSxpQkFBS0csTUFBTDtBQUNIO0FBQ0Q7Ozs7K0NBQ3VCd0MsVSxFQUFXO0FBQzlCLGlCQUFLcEUsV0FBTCxHQUFpQm9FLFVBQWpCO0FBQ0EsZ0JBQUcsS0FBS25FLFVBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIscUJBQUtPLGtCQUFMLEdBQTBCO0FBQzFCSixnQ0FBWSxDQURjO0FBRTFCQywyQkFBTyxFQUZtQjtBQUcxQkMsZ0NBQVk7QUFIYyxpQkFBMUIsRUFLQSxLQUFLRyx1QkFBTCxHQUErQixFQUwvQjtBQU1BLHFCQUFLZ0IscUJBQUw7QUFDSCxhQVJELE1BUUs7QUFDRCxxQkFBS3hCLFVBQUwsR0FBZ0IsQ0FBaEI7QUFDSDtBQUNELGlCQUFLMkIsTUFBTDtBQUNIOzs7O0VBelZvQ3lDLGVBQUtDLEk7O2tCQUF6QmxGLFciLCJmaWxlIjoidGFza1Byb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2tQcm9qZWN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBuYXZiYXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHF1ZXJ5U3RyZWFtOiB7fSxcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgICAgICAgICBuYXZiYXJzOiBbJ+aIkeeahCcsICflhazlvIAnXSxcbiAgICAgICAgICAgIENhc2VQdWJsaWNQcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENhc2VQdWJsaWNQcm9qZWN0SW1hZ2U6IFtdLFxuICAgICAgICAgICAgQ2FzZVByaXZhdGVQcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENhc2VQcml2YXRlUHJvamVjdEltYWdlOiBbXSxcbiAgICAgICAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICAgICAgICBzb3J0aW5nOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdCgpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL2NyZWF0ZVByb2plY3QnIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvU2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL3NlYXJjaC9zZWFyY2hUYXNrJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvVGFza0xpc3QocHJvamVjdElkLGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9Y2F0ZWdvcnkudHJpbSgpXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vdGFza1N0YWdlL3Rhc2tTdGFnZUxpc3Q/aWQ9JyArIHByb2plY3RJZCsnJmNhdGVnb3J5PScrY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWx0ZXIobmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuTXlXb3JrbG9nc0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N0ZWF0ZVRpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0aW5nPSdDcmVhdGlvblRpbWUgZGVzYydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFRhYj09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRDYXNlUHJpdmF0ZVByb2plY3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jdXJyZW50VGFiPT0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VQdWJsaWNQcm9qZWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzaG93RmlsdGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gIXRoaXMuaXNTaG93XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgY3VycmVudFRhYihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnBhZ2VTY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlUHJpdmF0ZVByb2plY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5DYXNlUHJpdmF0ZVByb2plY3RJbWFnZSA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRDYXNlUHJpdmF0ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlUHVibGljUHJvamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZVB1YmxpY1Byb2plY3RJbWFnZSA9IFtdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VQdWJsaWNQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDkuIrmi4nliqDovb1cbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLkNhc2VQcml2YXRlUHJvamVjdC50b3RhbENvdW50IC8gMTAgPiB0aGlzLkNhc2VQcml2YXRlUHJvamVjdC5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VQcml2YXRlUHJvamVjdC5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZVByaXZhdGVQcm9qZWN0KCk7ICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSl77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLkNhc2VQdWJsaWNQcm9qZWN0LnRvdGFsQ291bnQgLyAxMCA+IHRoaXMuQ2FzZVB1YmxpY1Byb2plY3QucGFnZU51bWJlciAmJiB0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlUHVibGljUHJvamVjdC5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZVB1YmxpY1Byb2plY3QoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lus5piv5pyJ5bqV57q/55qE77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgIHRoaXMuc29ydGluZz0nJztcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FzZVByaXZhdGVQcm9qZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuQ2FzZVByaXZhdGVQcm9qZWN0SW1hZ2UgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZVByaXZhdGVQcm9qZWN0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRhYiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5DYXNlUHVibGljUHJvamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZVB1YmxpY1Byb2plY3RJbWFnZSA9IFtdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VQdWJsaWNQcm9qZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0SW1hZ2UoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIENhc2VQdWJsaWNQcm9qZWN0SW1hZ2UgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGRhdGFbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUHJvamVjdC9HZXRQcm9qZWN0Q292ZXI/aWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgICAgIHZhciBQcm9qZWN0Q292ZXJEYXRhID0gYXdhaXQgYWpheC5nZXRVc2VyQXZhdGFyKGh0dHApO1xuICAgICAgICAgICAgICAgICAgICBDYXNlUHVibGljUHJvamVjdEltYWdlW2luZGV4XSA9IFByb2plY3RDb3ZlckRhdGEudGVtcEZpbGVQYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLkNhc2VQdWJsaWNQcm9qZWN0SW1hZ2UgPSB0aGlzLkNhc2VQdWJsaWNQcm9qZWN0SW1hZ2UuY29uY2F0KENhc2VQdWJsaWNQcm9qZWN0SW1hZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0SW1hZ2UyKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBDYXNlUHJpdmF0ZVByb2plY3RJbWFnZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gZGF0YVtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tQcm9qZWN0L0dldFByb2plY3RDb3Zlcj9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIFByb2plY3RDb3ZlckRhdGEgPSBhd2FpdCBhamF4LmdldFVzZXJBdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgICAgIENhc2VQcml2YXRlUHJvamVjdEltYWdlW2luZGV4XSA9IFByb2plY3RDb3ZlckRhdGEudGVtcEZpbGVQYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLkNhc2VQcml2YXRlUHJvamVjdEltYWdlID0gdGhpcy5DYXNlUHJpdmF0ZVByb2plY3RJbWFnZS5jb25jYXQoQ2FzZVByaXZhdGVQcm9qZWN0SW1hZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0Q2FzZVB1YmxpY1Byb2plY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRpbmcgPSAgdGhpcy5zb3J0aW5nfHwnJztcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4re+8jOivt+eojeetie+8gScsXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5DYXNlUHVibGljUHJvamVjdC5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICBwcml2YWN5OiBcIjBcIixcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMucXVlcnlTdHJlYW0pLmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsdGhpcy5xdWVyeVN0cmVhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkYXRhLm5hbWUgPSAgdGhpcy5xdWVyeVN0cmVhbS5uYW1lIHx8ICcnO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tQcm9qZWN0L0dldFRhc2tQcm9qZWN0cycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDYXNlUHVibGljUHJvamVjdCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDYXNlUHVibGljUHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeSA9IENhc2VQdWJsaWNQcm9qZWN0W2luZGV4XS5jYXRlZ29yeS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhc2VQdWJsaWNQcm9qZWN0W2luZGV4XVsnY2FzZVR5cGVDb2xvciddID0gJyM1ZDczZmEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXNlUHVibGljUHJvamVjdFtpbmRleF1bJ2Nhc2VUeXBlQ29sb3InXSA9ICcjMDA5ZGZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZVB1YmxpY1Byb2plY3RbaW5kZXhdWydjYXNlVHlwZUNvbG9yJ10gPSAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlUHVibGljUHJvamVjdC5pdGVtcyA9IHRoaXMuQ2FzZVB1YmxpY1Byb2plY3QuaXRlbXMuY29uY2F0KENhc2VQdWJsaWNQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZVB1YmxpY1Byb2plY3QudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2UoQ2FzZVB1YmxpY1Byb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlbDmja7kuLrnqbrvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRDYXNlUHJpdmF0ZVByb2plY3Qoc29ydCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0aW5nID0gIHNvcnQgfHx0aGlzLnNvcnRpbmc7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK3vvIzor7fnqI3nrYnvvIEnLFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuQ2FzZVByaXZhdGVQcm9qZWN0LnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgICAgIHByaXZhY3k6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRoaXMuc29ydGluZyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMucXVlcnlTdHJlYW0pLmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsdGhpcy5xdWVyeVN0cmVhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1Byb2plY3QvR2V0VGFza1Byb2plY3RzJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDYXNlUHJpdmF0ZVByb2plY3QgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gQ2FzZVByaXZhdGVQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5ID0gQ2FzZVByaXZhdGVQcm9qZWN0W2luZGV4XS5jYXRlZ29yeS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhc2VQcml2YXRlUHJvamVjdFtpbmRleF1bJ2Nhc2VUeXBlQ29sb3InXSA9ICcjNWQ3M2ZhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZVByaXZhdGVQcm9qZWN0W2luZGV4XVsnY2FzZVR5cGVDb2xvciddID0gJyMwMDlkZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXNlUHJpdmF0ZVByb2plY3RbaW5kZXhdWydjYXNlVHlwZUNvbG9yJ10gPSAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlUHJpdmF0ZVByb2plY3QuaXRlbXMgPSB0aGlzLkNhc2VQcml2YXRlUHJvamVjdC5pdGVtcy5jb25jYXQoQ2FzZVByaXZhdGVQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FzZVByaXZhdGVQcm9qZWN0LnRvdGFsQ291bnQgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEltYWdlMihDYXNlUHJpdmF0ZVByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlbDmja7kuLrnqbrvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VQcml2YXRlUHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlzUmVmcmVzaChuYW1lKSB7XG4gICAgICAgICAgICBpZihuYW1lKXtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtLm5hbWU9bmFtZVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbT17fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc29ydGluZz0nJztcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFRhYj09MSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiPTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkNhc2VQcml2YXRlUHJvamVjdCA9IHtcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5DYXNlUHJpdmF0ZVByb2plY3RJbWFnZSA9IFtdXG4gICAgICAgICAgICB0aGlzLkdldENhc2VQcml2YXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+mrmOe6p+aQnOe0oui/lOWbnuaVsOaNrlxuICAgICAgICBhZHZhbmNlZFNlYXJjaEJhY2tEYXRhKHNlYXJjaERhdGEpe1xuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbT1zZWFyY2hEYXRhO1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50VGFiPT0wKXtcbiAgICAgICAgICAgICAgICB0aGlzLkNhc2VQcml2YXRlUHJvamVjdCA9IHtcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLkNhc2VQcml2YXRlUHJvamVjdEltYWdlID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VQcml2YXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiPTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0gICBcbiAgICB9XG4iXX0=