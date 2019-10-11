'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../../utils/cofig/api.js');

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchMeeting = function (_wepy$page) {
    _inherits(searchMeeting, _wepy$page);

    function searchMeeting() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchMeeting);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchMeeting.__proto__ || Object.getPrototypeOf(searchMeeting)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Subject": { "xmlns:v-bind": "", "v-bind:input.sync": "Subject", "v-bind:inputValue.sync": "SubjectValue", "v-bind:twoWayTitle.once": "SubjectValue" }, "Title": { "v-bind:input.sync": "Title", "v-bind:inputValue.sync": "TitleValue", "v-bind:twoWayTitle.once": "TitleValue" }, "Status": { "v-bind:options.sync": "Status", "v-bind:index.sync": "StatusIndex", "v-bind:twoWayTitle.once": "StatusIndex" }, "Category": { "v-bind:options.sync": "Category", "v-bind:index.sync": "CategoryIndex", "v-bind:twoWayTitle.once": "CategoryIndex" }, "Level": { "v-bind:options.sync": "Level", "v-bind:index.sync": "LevelIndex", "v-bind:twoWayTitle.once": "LevelIndex" }, "MeetingRoomId": { "v-bind:options.sync": "MeetingRoomId", "v-bind:index.sync": "MeetingRoomIdIndex", "v-bind:twoWayTitle.once": "MeetingRoomIdIndex" } }, _this.$events = {}, _this.components = {
            Subject: _input2.default,
            Title: _input2.default,
            Status: _option2.default,
            Category: _option2.default,
            Level: _option2.default,
            MeetingRoomId: _option2.default
        }, _this.data = {
            searchData: {},
            Subject: {
                title: '会议议题',
                name: 'Subject',
                warning: false
            },
            SubjectValue: '',
            Title: {
                title: '会议名称',
                name: 'Title',
                warning: false
            },
            TitleValue: '',
            Status: {
                title: '状态',
                name: 'Status',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            StatusIndex: 0,
            Category: {
                title: '类型',
                name: 'Category',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            CategoryIndex: 0,
            Level: {
                title: '会议级别',
                name: 'Level',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            LevelIndex: 0,
            MeetingRoomId: {
                title: '会议室',
                name: 'MeetingRoomId',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            MeetingRoomIdIndex: 0,
            history_keyWord_case: [],
            searchClentValue: '',
            showPage: true,
            isShowArray: []
        }, _this.methods = {
            advancedSearchSubmit: function advancedSearchSubmit() {
                console.log(this.searchData);
                if (Object.keys(this.searchData).length !== 0) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    prevPage.data.queryStream = this.searchData;
                    prevPage.data.refresh = true;
                    wx.navigateBack({
                        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                    });
                } else {
                    wx.showToast({
                        title: '没有搜索内容！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            },
            bindDateChange: function bindDateChange(e) {
                var date = e.detail.value;
                if (!this.searchData.MeetingTime) {
                    this.searchData['MeetingTime'] = {};
                }
                if (!this.searchData.CreationTime) {
                    this.searchData['CreationTime'] = {};
                }
                switch (e.target.id) {
                    case 'startMeetingDate':
                        this.searchData.MeetingTime.StartDate = date;
                        break;
                    case 'endMeetingDate':
                        this.searchData.MeetingTime.EndDate = date;
                        break;
                    case 'startCreateDate':
                        this.searchData.CreationTime.StartDate = date;
                        break;
                    case 'endCreateDate':
                        this.searchData.CreationTime.EndDate = date;
                        break;
                }
                this.$apply();
            },
            showPage: function showPage() {
                this.showPage = !this.showPage;
                this.$apply();
            },
            deletItemAll: function deletItemAll() {
                var _this2 = this;

                wx.showModal({
                    title: '确认是否删除！', //提示的标题,
                    content: '全部历史记录', //提示的内容,
                    showCancel: true, //是否显示取消按钮,
                    cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                    cancelColor: '#7a7a7a', //取消按钮的文字颜色,
                    confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: '#5d73fa', //确定按钮的文字颜色,
                    success: function success(res) {
                        if (res.confirm) {
                            _this2.history_keyWord_case = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_MEETING');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_MEETING', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_MEETING');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_MEETING', history);
            },
            longTap: function longTap(index) {
                this.isShowArray = this.isShowArray.map(function (item) {
                    item = false;
                    return item;
                });
                this.isShowArray[index] = true;
                this.$apply();
            },
            history: function history(item) {
                this.searchClentValue = item;
                this.$apply();
            },
            submitSearch: function submitSearch(e) {
                var value = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
                if (value) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    prevPage.data.queryStream.KeyWord = e.detail.value;
                    prevPage.data.refresh = true;
                    wx.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        success: function success() {
                            var History_KeyWord_Meeting = wx.getStorageSync('HISTORY_KEYWORD_MEETING');
                            if (History_KeyWord_Meeting.length >= 20) {
                                History_KeyWord_Meeting.splice(History_KeyWord_Meeting.length - 1, 1);
                            }
                            History_KeyWord_Meeting.unshift(value);
                            History_KeyWord_Meeting = (0, _api.myDistinct)(History_KeyWord_Meeting);
                            wx.setStorageSync('HISTORY_KEYWORD_MEETING', History_KeyWord_Meeting);
                        }
                    });
                    this.$apply();
                } else {
                    wx.showToast({
                        title: '搜索为空,请重试！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            }
        }, _this.watch = {
            SubjectValue: function SubjectValue(value) {
                this.searchData.Subject = value;
                this.$apply();
            },
            TitleValue: function TitleValue(value) {
                this.searchData.Title = value;
                this.$apply();
            },

            //会议室
            MeetingRoomIdIndex: function MeetingRoomIdIndex(index) {
                this.searchData.MeetingRoomId = this.MeetingRoomId.value[index - 1];
                this.$apply();
            },
            LevelIndex: function LevelIndex(index) {
                this.searchData.Level = this.Level.value[index - 1];
                this.$apply();
            },
            CategoryIndex: function CategoryIndex(index) {
                this.searchData.Category = this.Category.value[index - 1];
                this.$apply();
            },
            StatusIndex: function StatusIndex(index) {
                this.searchData.Status = this.Status.value[index - 1];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchMeeting, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_Meeting = wx.getStorageSync('HISTORY_KEYWORD_MEETING');
            if (!History_KeyWord_Meeting) {
                History_KeyWord_Meeting = [];
                wx.setStorageSync('HISTORY_KEYWORD_MEETING', History_KeyWord_Meeting);
            } else {
                this.history_keyWord_case = History_KeyWord_Meeting;
                for (var index in this.history_keyWord_case) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
    }, {
        key: 'GetGeneralCodeComboboxItems',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var data_id, resData, GetGeneralCodeComboboxItemsData, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data_id = {
                                    id: id
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboboxItems', 'POST', data_id);

                            case 3:
                                resData = _context.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context.next = 17;
                                    break;
                                }

                                GetGeneralCodeComboboxItemsData = resData.data.result;
                                _context.t0 = id;
                                _context.next = _context.t0 === 'MILEVEL' ? 9 : _context.t0 === 'MICT' ? 11 : _context.t0 === 'MISTATUS' ? 13 : 15;
                                break;

                            case 9:
                                for (index in GetGeneralCodeComboboxItemsData) {
                                    this.Level.value.push(GetGeneralCodeComboboxItemsData[index].value);
                                    this.Level.displayText.push(GetGeneralCodeComboboxItemsData[index].displayText);
                                }
                                return _context.abrupt('break', 16);

                            case 11:
                                for (index in GetGeneralCodeComboboxItemsData) {
                                    this.Category.value.push(GetGeneralCodeComboboxItemsData[index].value);
                                    this.Category.displayText.push(GetGeneralCodeComboboxItemsData[index].displayText);
                                }
                                return _context.abrupt('break', 16);

                            case 13:
                                for (index in GetGeneralCodeComboboxItemsData) {
                                    this.Status.value.push(GetGeneralCodeComboboxItemsData[index].value);
                                    this.Status.displayText.push(GetGeneralCodeComboboxItemsData[index].displayText);
                                }

                                return _context.abrupt('break', 16);

                            case 15:
                                return _context.abrupt('break', 16);

                            case 16:
                                this.$apply();

                            case 17:
                                console.log(resData.data.result);

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetGeneralCodeComboboxItems(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralCodeComboboxItems;
        }()
        //会议室

    }, {
        key: 'GetMeetingRoomCombobox',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, GetMeetingRoomComboboxData, index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/meetingRoom/GetMeetingRoomCombobox', 'POST');

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    GetMeetingRoomComboboxData = resData.data.result;

                                    for (index in GetMeetingRoomComboboxData) {
                                        this.MeetingRoomId.value.push(GetMeetingRoomComboboxData[index].value);
                                        this.MeetingRoomId.displayText.push(GetMeetingRoomComboboxData[index].displayText);
                                    }
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetMeetingRoomCombobox() {
                return _ref3.apply(this, arguments);
            }

            return GetMeetingRoomCombobox;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetGeneralCodeComboboxItems('MILEVEL');
            this.GetGeneralCodeComboboxItems('MICT');
            this.GetGeneralCodeComboboxItems('MISTATUS');
            this.GetMeetingRoomCombobox();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchMeeting;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchMeeting , 'pages/modules/myMeeting/search/searchMeeting'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE1lZXRpbmcuanMiXSwibmFtZXMiOlsic2VhcmNoTWVldGluZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlN1YmplY3QiLCJUaXRsZSIsIlN0YXR1cyIsIkNhdGVnb3J5IiwiTGV2ZWwiLCJNZWV0aW5nUm9vbUlkIiwiZGF0YSIsInNlYXJjaERhdGEiLCJ0aXRsZSIsIm5hbWUiLCJ3YXJuaW5nIiwiU3ViamVjdFZhbHVlIiwiVGl0bGVWYWx1ZSIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJTdGF0dXNJbmRleCIsIkNhdGVnb3J5SW5kZXgiLCJMZXZlbEluZGV4IiwiTWVldGluZ1Jvb21JZEluZGV4IiwiaGlzdG9yeV9rZXlXb3JkX2Nhc2UiLCJzZWFyY2hDbGVudFZhbHVlIiwic2hvd1BhZ2UiLCJpc1Nob3dBcnJheSIsIm1ldGhvZHMiLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsInF1ZXJ5U3RyZWFtIiwicmVmcmVzaCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImRhdGUiLCJkZXRhaWwiLCJNZWV0aW5nVGltZSIsIkNyZWF0aW9uVGltZSIsInRhcmdldCIsImlkIiwiU3RhcnREYXRlIiwiRW5kRGF0ZSIsIiRhcHBseSIsImRlbGV0SXRlbUFsbCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJyZXMiLCJjb25maXJtIiwiaGlzdG9yeSIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJkZWxldEl0ZW0iLCJpbmRleCIsInNwbGljZSIsImxvbmdUYXAiLCJtYXAiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwicmVwbGFjZSIsIktleVdvcmQiLCJIaXN0b3J5X0tleVdvcmRfTWVldGluZyIsInVuc2hpZnQiLCJ3YXRjaCIsImRhdGFfaWQiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zRGF0YSIsInJlc3VsdCIsInB1c2giLCJHZXRNZWV0aW5nUm9vbUNvbWJvYm94RGF0YSIsImlzSGlzdG9yeSIsIkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcyIsIkdldE1lZXRpbmdSb29tQ29tYm9ib3giLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7OztBQUlBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFNBQXZDLEVBQWlELDBCQUF5QixjQUExRSxFQUF5RiwyQkFBMEIsY0FBbkgsRUFBWCxFQUE4SSxTQUFRLEVBQUMscUJBQW9CLE9BQXJCLEVBQTZCLDBCQUF5QixZQUF0RCxFQUFtRSwyQkFBMEIsWUFBN0YsRUFBdEosRUFBaVEsVUFBUyxFQUFDLHVCQUFzQixRQUF2QixFQUFnQyxxQkFBb0IsYUFBcEQsRUFBa0UsMkJBQTBCLGFBQTVGLEVBQTFRLEVBQXFYLFlBQVcsRUFBQyx1QkFBc0IsVUFBdkIsRUFBa0MscUJBQW9CLGVBQXRELEVBQXNFLDJCQUEwQixlQUFoRyxFQUFoWSxFQUFpZixTQUFRLEVBQUMsdUJBQXNCLE9BQXZCLEVBQStCLHFCQUFvQixZQUFuRCxFQUFnRSwyQkFBMEIsWUFBMUYsRUFBemYsRUFBaW1CLGlCQUFnQixFQUFDLHVCQUFzQixlQUF2QixFQUF1QyxxQkFBb0Isb0JBQTNELEVBQWdGLDJCQUEwQixvQkFB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Z0NBQWdDaEIsS0FBaEMsRUFBdUN0RCxXQUFwRTtBQUNIOzs7Ozs7OztBQU1MLHFDQUFLdUMsTUFBTDs7O0FBRUo1Qix3Q0FBUUMsR0FBUixDQUFZd0QsUUFBUTVFLElBQVIsQ0FBYStFLE1BQXpCOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUo7Ozs7Ozs7Ozs7Ozt1Q0FFc0JMLGVBQUtDLE9BQUwsQ0FDZCxzREFEYyxFQUVkLE1BRmMsQzs7O0FBQWRDLHVDOztBQUlKLG9DQUFHQSxRQUFRQyxVQUFSLElBQW9CLEdBQXZCLEVBQTJCO0FBQ25CSSw4REFEbUIsR0FDUUwsUUFBUTVFLElBQVIsQ0FBYStFLE1BRHJCOztBQUV2Qix5Q0FBUWpCLEtBQVIsSUFBaUJtQiwwQkFBakIsRUFBNEM7QUFDeEMsNkNBQUtsRixhQUFMLENBQW1CUSxLQUFuQixDQUF5QnlFLElBQXpCLENBQThCQywyQkFBMkJuQixLQUEzQixFQUFrQ3ZELEtBQWhFO0FBQ0EsNkNBQUtSLGFBQUwsQ0FBbUJTLFdBQW5CLENBQStCd0UsSUFBL0IsQ0FBb0NDLDJCQUEyQm5CLEtBQTNCLEVBQWtDdEQsV0FBdEU7QUFDSDtBQUNELHlDQUFLdUMsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUk7QUFDTCxpQkFBS21DLFNBQUw7QUFDQSxpQkFBS0MsMkJBQUwsQ0FBaUMsU0FBakM7QUFDQSxpQkFBS0EsMkJBQUwsQ0FBaUMsTUFBakM7QUFDQSxpQkFBS0EsMkJBQUwsQ0FBaUMsVUFBakM7QUFDQSxpQkFBS0Msc0JBQUw7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUF0UzRCQyxlQUFLQyxJOztrQkFBM0JqRyxhIiwiZmlsZSI6InNlYXJjaE1lZXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQge1xuICAgICAgICBteURpc3RpbmN0XG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IFN1YmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBMZXZlbCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBNZWV0aW5nUm9vbUlkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoTWVldGluZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdWJqZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJTdWJqZWN0XCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJTdWJqZWN0VmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJTdWJqZWN0VmFsdWVcIn0sXCJUaXRsZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJUaXRsZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiVGl0bGVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlRpdGxlVmFsdWVcIn0sXCJTdGF0dXNcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJTdGF0dXNcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJTdGF0dXNJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlN0YXR1c0luZGV4XCJ9LFwiQ2F0ZWdvcnlcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJDYXRlZ29yeVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkNhdGVnb3J5SW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDYXRlZ29yeUluZGV4XCJ9LFwiTGV2ZWxcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJMZXZlbFwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkxldmVsSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJMZXZlbEluZGV4XCJ9LFwiTWVldGluZ1Jvb21JZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIk1lZXRpbmdSb29tSWRcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJNZWV0aW5nUm9vbUlkSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJNZWV0aW5nUm9vbUlkSW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgU3ViamVjdCxcbiAgICAgICAgICAgIFRpdGxlLFxuICAgICAgICAgICAgU3RhdHVzLFxuICAgICAgICAgICAgQ2F0ZWdvcnksXG4gICAgICAgICAgICBMZXZlbCxcbiAgICAgICAgICAgIE1lZXRpbmdSb29tSWRcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICBTdWJqZWN0OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkvJrorq7orq7popgnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTdWJqZWN0JyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTdWJqZWN0VmFsdWU6ICcnLFxuICAgICAgICAgICAgVGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S8muiuruWQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RpdGxlJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBUaXRsZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIFN0YXR1czoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn54q25oCBJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3RhdHVzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcbiAgICAgICAgICAgICAgICAgICAgJ+ivt+mAieaLqSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU3RhdHVzSW5kZXg6IDAsXG4gICAgICAgICAgICBDYXRlZ29yeToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn57G75Z6LJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1xuICAgICAgICAgICAgICAgICAgICAn6K+36YCJ5oupJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDYXRlZ29yeUluZGV4OiAwLFxuICAgICAgICAgICAgTGV2ZWw6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S8muiurue6p+WIqycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xldmVsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcbiAgICAgICAgICAgICAgICAgICAgJ+ivt+mAieaLqSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTGV2ZWxJbmRleDogMCxcbiAgICAgICAgICAgIE1lZXRpbmdSb29tSWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S8muiuruWupCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01lZXRpbmdSb29tSWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1xuICAgICAgICAgICAgICAgICAgICAn6K+36YCJ5oupJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBNZWV0aW5nUm9vbUlkSW5kZXg6IDAsXG4gICAgICAgICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICAgICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNob3dQYWdlOiB0cnVlLFxuICAgICAgICAgICAgaXNTaG93QXJyYXk6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYWR2YW5jZWRTZWFyY2hTdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hEYXRhKVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNlYXJjaERhdGEpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaQnOe0ouWGheWuue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGJpbmREYXRlQ2hhbmdlKGUpe1xuICAgICAgICAgICAgICAgdmFyIGRhdGU9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICBpZighdGhpcy5zZWFyY2hEYXRhLk1lZXRpbmdUaW1lKXtcbiAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGFbJ01lZXRpbmdUaW1lJ109e307XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBpZighdGhpcy5zZWFyY2hEYXRhLkNyZWF0aW9uVGltZSl7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhWydDcmVhdGlvblRpbWUnXT17fTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICBjYXNlICdzdGFydE1lZXRpbmdEYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLk1lZXRpbmdUaW1lLlN0YXJ0RGF0ZT1kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICBjYXNlICdlbmRNZWV0aW5nRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5NZWV0aW5nVGltZS5FbmREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0Q3JlYXRlRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DcmVhdGlvblRpbWUuU3RhcnREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZENyZWF0ZURhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ3JlYXRpb25UaW1lLkVuZERhdGU9ZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dQYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UgPSAhdGhpcy5zaG93UGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0SXRlbUFsbCgpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaYr+WQpuWIoOmZpO+8gScsIC8v5o+Q56S655qE5qCH6aKYLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5YWo6YOo5Y6G5Y+y6K6w5b2VJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzdhN2E3YScsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjNWQ3M2ZhJywgLy/noa7lrprmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01FRVRJTkcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NRUVUSU5HJywgaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0SXRlbShpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUVFVElORycpO1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01FRVRJTkcnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb25nVGFwKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheSA9IHRoaXMuaXNTaG93QXJyYXkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaXN0b3J5KGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaENsZW50VmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0U2VhcmNoKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlLmRldGFpbC52YWx1ZS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbS5LZXlXb3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTWVldGluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUVFVElORycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfTWVldGluZy5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX01lZXRpbmcuc3BsaWNlKEhpc3RvcnlfS2V5V29yZF9NZWV0aW5nLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWVldGluZy51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWVldGluZyA9IG15RGlzdGluY3QoSGlzdG9yeV9LZXlXb3JkX01lZXRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUVFVElORycsIEhpc3RvcnlfS2V5V29yZF9NZWV0aW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIFN1YmplY3RWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5TdWJqZWN0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBUaXRsZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLlRpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+S8muiuruWupFxuICAgICAgICAgICAgTWVldGluZ1Jvb21JZEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLk1lZXRpbmdSb29tSWQ9IHRoaXMuTWVldGluZ1Jvb21JZC52YWx1ZVtpbmRleC0xXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIExldmVsSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuTGV2ZWwgPSB0aGlzLkxldmVsLnZhbHVlW2luZGV4LTFdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ2F0ZWdvcnlJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeSA9IHRoaXMuQ2F0ZWdvcnkudmFsdWVbaW5kZXgtMV07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTdGF0dXNJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5TdGF0dXMgPSB0aGlzLlN0YXR1cy52YWx1ZVtpbmRleC0xXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTWVldGluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUVFVElORycpO1xuICAgICAgICAgICAgaWYgKCFIaXN0b3J5X0tleVdvcmRfTWVldGluZykge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NZWV0aW5nID0gW107XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NRUVUSU5HJywgSGlzdG9yeV9LZXlXb3JkX01lZXRpbmcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBIaXN0b3J5X0tleVdvcmRfTWVldGluZztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyAgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKGlkKXtcbiAgICAgICAgICAgIHZhciBkYXRhX2lkPXtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGE9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcycsXG4gICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGFfaWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB2YXIgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zRGF0YT0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ01JTEVWRUwnOlxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtc0RhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5MZXZlbC52YWx1ZS5wdXNoKEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtc0RhdGFbaW5kZXhdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTGV2ZWwuZGlzcGxheVRleHQucHVzaChHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5VGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdNSUNUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggaW4gR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zRGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5LnZhbHVlLnB1c2goR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zRGF0YVtpbmRleF0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeS5kaXNwbGF5VGV4dC5wdXNoKEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtc0RhdGFbaW5kZXhdLmRpc3BsYXlUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ01JU1RBVFVTJzpcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXNEYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzLnZhbHVlLnB1c2goR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zRGF0YVtpbmRleF0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMuZGlzcGxheVRleHQucHVzaChHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXNEYXRhW2luZGV4XS5kaXNwbGF5VGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEuZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIC8v5Lya6K6u5a6kXG4gICAgICAgIGFzeW5jIEdldE1lZXRpbmdSb29tQ29tYm9ib3goKXtcbiAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvbWVldGluZ1Jvb20vR2V0TWVldGluZ1Jvb21Db21ib2JveCcsXG4gICAgICAgICAgICAgICAgJ1BPU1QnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgICAgICAgICAgdmFyIEdldE1lZXRpbmdSb29tQ29tYm9ib3hEYXRhPXJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBHZXRNZWV0aW5nUm9vbUNvbWJvYm94RGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTWVldGluZ1Jvb21JZC52YWx1ZS5wdXNoKEdldE1lZXRpbmdSb29tQ29tYm9ib3hEYXRhW2luZGV4XS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTWVldGluZ1Jvb21JZC5kaXNwbGF5VGV4dC5wdXNoKEdldE1lZXRpbmdSb29tQ29tYm9ib3hEYXRhW2luZGV4XS5kaXNwbGF5VGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5pc0hpc3RvcnkoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCdNSUxFVkVMJylcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCdNSUNUJylcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCdNSVNUQVRVUycpXG4gICAgICAgICAgICB0aGlzLkdldE1lZXRpbmdSb29tQ29tYm9ib3goKTtcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge307XG4gICAgfVxuIl19