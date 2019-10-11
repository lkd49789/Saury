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

var searchRegister = function (_wepy$page) {
    _inherits(searchRegister, _wepy$page);

    function searchRegister() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchRegister);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchRegister.__proto__ || Object.getPrototypeOf(searchRegister)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "ClientName": { "v-bind:input.sync": "ClientName", "v-bind:inputValue.sync": "ClientNameValue", "v-bind:twoWayTitle.once": "ClientNameValue" }, "LawyerRole": { "v-bind:options.sync": "LawyerRole", "v-bind:index.sync": "LawyerRoleIndex", "v-bind:twoWayTitle.once": "LawyerRoleIndex" } }, _this.$events = {}, _this.components = {
            Name: _input2.default,
            ClientName: _input2.default,
            LawyerRole: _option2.default
        }, _this.data = {
            searchData: {},
            History_KeyWord: [],
            searchKeyWords: '',
            showPage: true,
            isShowArray: [],
            Name: {
                title: '案件名称',
                name: 'Name',
                warning: false
            },
            NameValue: '',
            ClientName: {
                title: '客户名称',
                name: 'ClientName',
                warning: false
            },
            ClientNameValue: '',
            LawyerRole: {
                title: '参案角色',
                name: 'LawyerRole',
                value: [''],
                displayText: ['请选择'],
                warning: false
            },
            LawyerRoleIndex: 0,
            //案件类别
            Category: [],
            //状态
            Status: [],
            isProcessStatus: false,
            //立案流程状态
            ProcessStatus: [],
            ProcessStatusData: []
        }, _this.methods = {
            checkboxChangeProcessStatus: function checkboxChangeProcessStatus(e) {
                if (e.detail.value.length !== 0) {
                    this.searchData.ProcessStatus = e.detail.value.join(',');
                } else {
                    this.searchData.ProcessStatus = '';
                }
                this.$apply();
            },
            radioChange: function radioChange(e) {
                this.isProcessStatus = true;
                this.searchData.Status = e.detail.value;
                this.statusFilter(e.detail.value);
                this.$apply();
            },
            checkboxChange: function checkboxChange(e) {
                if (e.detail.value.length !== 0) {
                    this.searchData.Category = e.detail.value.join(',');
                } else {
                    this.searchData.Category = '';
                }
                this.$apply();
            },
            bindDateChange: function bindDateChange(e) {
                switch (e.currentTarget.id) {
                    case 'startAcceptDate':
                        this.searchData.AcceptDate.StartDate = e.detail.value;
                        break;
                    case 'endAcceptDate':
                        this.searchData.AcceptDate.EndDate = e.detail.value;
                        break;
                    case 'startCreateDate':
                        this.searchData.CreationTime.StartDate = e.detail.value;
                        break;
                    case 'endCreateDate':
                        this.searchData.CreationTime.EndDate = e.detail.value;
                        break;
                    default:
                        break;
                }
                this.$apply();
            },
            advancedSearchSubmit: function advancedSearchSubmit() {
                if (Object.keys(this.searchData).length !== 0) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    if (prevPage) {
                        prevPage.isRefresh(this.searchData);
                    }
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
                            _this2.History_KeyWord = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_REGISTER');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_REGISTER', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.History_KeyWord.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_REGISTER');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_REGISTER', history);
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
                this.searchKeyWords = item;
                this.$apply();
            },
            submitSearch: function submitSearch(e) {
                var value = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
                if (value) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    if (prevPage) {
                        this.searchData.KeyWord = e.detail.value;
                        prevPage.isRefresh(this.searchData);
                    }
                    wx.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        success: function success() {
                            var History_KeyWord = wx.getStorageSync('HISTORY_KEYWORD_REGISTER');
                            if (History_KeyWord.length >= 20) {
                                History_KeyWord.splice(History_KeyWord.length - 1, 1);
                            }
                            History_KeyWord.unshift(value);
                            History_KeyWord = (0, _api.myDistinct)(History_KeyWord);
                            wx.setStorageSync('HISTORY_KEYWORD_REGISTER', History_KeyWord);
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
            NameValue: function NameValue(value) {
                this.searchData.Name = value;
                this.$apply();
            },
            ClientNameValue: function ClientNameValue(value) {
                this.searchData.ClientName = value;
                this.$apply();
            },
            LawyerRoleIndex: function LawyerRoleIndex(index) {
                this.searchData.LawyerRole = this.LawyerRole.value[index];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchRegister, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord = wx.getStorageSync('HISTORY_KEYWORD_REGISTER');
            if (!History_KeyWord) {
                History_KeyWord = [];
                wx.setStorageSync('HISTORY_KEYWORD_REGISTER', History_KeyWord);
            } else {
                this.History_KeyWord = History_KeyWord;
                for (var index in this.History_KeyWord) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
        //状态数据过滤

    }, {
        key: 'statusFilter',
        value: function statusFilter(status) {
            var ProcessStatusData = this.ProcessStatusData;
            this.ProcessStatus = ProcessStatusData.filter(function (item) {
                return item.value.substr(0, 1) == status;
            });
        }
        //获取代编辑数据

    }, {
        key: 'GetCaseApplyListSearchInput',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, CaseApplyListSearchInputDatas, lawyerRoleList_index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/caseApplication/GetCaseApplyListSearchInput', 'post');

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    CaseApplyListSearchInputDatas = resData.data.result;

                                    for (lawyerRoleList_index in CaseApplyListSearchInputDatas.lawyerRoleList) {
                                        this.LawyerRole.value.push(CaseApplyListSearchInputDatas.lawyerRoleList[lawyerRoleList_index].value);
                                        this.LawyerRole.displayText.push(CaseApplyListSearchInputDatas.lawyerRoleList[lawyerRoleList_index].displayText);
                                    }
                                    this.Category = CaseApplyListSearchInputDatas.categoryList;
                                    this.Status = CaseApplyListSearchInputDatas.statusList;
                                    this.ProcessStatusData = CaseApplyListSearchInputDatas.processStatusList;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseApplyListSearchInput() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseApplyListSearchInput;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.searchData.CreationTime = {
                StartDate: '',
                EndDate: ''
            };
            this.searchData.AcceptDate = {
                StartDate: '',
                EndDate: ''
            };
            this.isHistory();
            this.GetCaseApplyListSearchInput();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchRegister;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchRegister , 'pages/modules/myRegister/search/search_register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaF9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJzZWFyY2hSZWdpc3RlciIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIk5hbWUiLCJDbGllbnROYW1lIiwiTGF3eWVyUm9sZSIsImRhdGEiLCJzZWFyY2hEYXRhIiwiSGlzdG9yeV9LZXlXb3JkIiwic2VhcmNoS2V5V29yZHMiLCJzaG93UGFnZSIsImlzU2hvd0FycmF5IiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsIk5hbWVWYWx1ZSIsIkNsaWVudE5hbWVWYWx1ZSIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJMYXd5ZXJSb2xlSW5kZXgiLCJDYXRlZ29yeSIsIlN0YXR1cyIsImlzUHJvY2Vzc1N0YXR1cyIsIlByb2Nlc3NTdGF0dXMiLCJQcm9jZXNzU3RhdHVzRGF0YSIsIm1ldGhvZHMiLCJjaGVja2JveENoYW5nZVByb2Nlc3NTdGF0dXMiLCJlIiwiZGV0YWlsIiwibGVuZ3RoIiwiam9pbiIsIiRhcHBseSIsInJhZGlvQ2hhbmdlIiwic3RhdHVzRmlsdGVyIiwiY2hlY2tib3hDaGFuZ2UiLCJiaW5kRGF0ZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIkFjY2VwdERhdGUiLCJTdGFydERhdGUiLCJFbmREYXRlIiwiQ3JlYXRpb25UaW1lIiwiYWR2YW5jZWRTZWFyY2hTdWJtaXQiLCJPYmplY3QiLCJrZXlzIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImlzUmVmcmVzaCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImRlbGV0SXRlbUFsbCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJyZXMiLCJjb25maXJtIiwiaGlzdG9yeSIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJkZWxldEl0ZW0iLCJpbmRleCIsInNwbGljZSIsImxvbmdUYXAiLCJtYXAiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwicmVwbGFjZSIsIktleVdvcmQiLCJ1bnNoaWZ0Iiwid2F0Y2giLCJxdWVyeVN0cmVhbSIsInJlZnJlc2giLCJzdGF0dXMiLCJmaWx0ZXIiLCJzdWJzdHIiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiQ2FzZUFwcGx5TGlzdFNlYXJjaElucHV0RGF0YXMiLCJyZXN1bHQiLCJsYXd5ZXJSb2xlTGlzdF9pbmRleCIsImxhd3llclJvbGVMaXN0IiwicHVzaCIsImNhdGVnb3J5TGlzdCIsInN0YXR1c0xpc3QiLCJwcm9jZXNzU3RhdHVzTGlzdCIsImlzSGlzdG9yeSIsIkdldENhc2VBcHBseUxpc3RTZWFyY2hJbnB1dCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUdBOzs7O0FBSUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsTUFBdkMsRUFBOEMsMEJBQXlCLFdBQXZFLEVBQW1GLDJCQUEwQixXQUE3RyxFQUFSLEVBQWtJLGNBQWEsRUFBQyxxQkFBb0IsWUFBckIsRUFBa0MsMEJBQXlCLGlCQUEzRCxFQUE2RSwyQkFBMEIsaUJBQXZHLEVBQS9JLEVBQXlRLGNBQWEsRUFBQyx1QkFBc0IsWUFBdkIsRUFBb0MscUJBQW9CLGlCQUF4RCxFQUEwRSwyQkFBMEIsaUJBQXBHLEVBQXRSLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlDQURFO0FBRUZDLHVDQUZFO0FBR0ZDO0FBSEUsUyxRQUtOQyxJLEdBQU87QUFDSEMsd0JBQVksRUFEVDtBQUVIQyw2QkFBaUIsRUFG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QixFQUVoQixNQUZnQixDOzs7QUFBaEJDLHVDOztBQUlKLG9DQUFJQSxRQUFRQyxVQUFSLElBQXNCLEdBQTFCLEVBQStCO0FBQ3ZCQyxpRUFEdUIsR0FDU0YsUUFBUWxGLElBQVIsQ0FBYXFGLE1BRHRCOztBQUUzQix5Q0FBU0Msb0JBQVQsSUFBaUNGLDhCQUE4QkcsY0FBL0QsRUFBK0U7QUFDM0UsNkNBQUt4RixVQUFMLENBQWdCWSxLQUFoQixDQUFzQjZFLElBQXRCLENBQTJCSiw4QkFBOEJHLGNBQTlCLENBQTZDRCxvQkFBN0MsRUFBbUUzRSxLQUE5RjtBQUNBLDZDQUFLWixVQUFMLENBQWdCYSxXQUFoQixDQUE0QjRFLElBQTVCLENBQWlDSiw4QkFBOEJHLGNBQTlCLENBQTZDRCxvQkFBN0MsRUFBbUUxRSxXQUFwRztBQUNIO0FBQ0QseUNBQUtFLFFBQUwsR0FBZ0JzRSw4QkFBOEJLLFlBQTlDO0FBQ0EseUNBQUsxRSxNQUFMLEdBQVlxRSw4QkFBOEJNLFVBQTFDO0FBQ0EseUNBQUt4RSxpQkFBTCxHQUF1QmtFLDhCQUE4Qk8saUJBQXJEO0FBQ0g7QUFDRCxxQ0FBS2xFLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFSztBQUNMLGlCQUFLeEIsVUFBTCxDQUFnQmtDLFlBQWhCLEdBQStCO0FBQzNCRiwyQkFBVSxFQURpQjtBQUUzQkMseUJBQVE7QUFGbUIsYUFBL0I7QUFJQSxpQkFBS2pDLFVBQUwsQ0FBZ0IrQixVQUFoQixHQUE2QjtBQUN6QkMsMkJBQVUsRUFEZTtBQUV6QkMseUJBQVE7QUFGaUIsYUFBN0I7QUFJQSxpQkFBSzBELFNBQUw7QUFDQSxpQkFBS0MsMkJBQUw7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUE1UDZCQyxlQUFLQyxJOztrQkFBNUJ2RyxjIiwiZmlsZSI6InNlYXJjaF9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIG15RGlzdGluY3RcclxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXREYXRlXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBpbXBvcnQgTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XHJcbiAgICBpbXBvcnQgQ2xpZW50TmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XHJcbiAgICBpbXBvcnQgTGF3eWVyUm9sZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoUmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJOYW1lXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJOYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJOYW1lVmFsdWVcIn0sXCJDbGllbnROYW1lXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkNsaWVudE5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkNsaWVudE5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkNsaWVudE5hbWVWYWx1ZVwifSxcIkxhd3llclJvbGVcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJMYXd5ZXJSb2xlXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiTGF3eWVyUm9sZUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTGF3eWVyUm9sZUluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgTmFtZSxcclxuICAgICAgICAgICAgQ2xpZW50TmFtZSxcclxuICAgICAgICAgICAgTGF3eWVyUm9sZVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hEYXRhOiB7fSxcclxuICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoS2V5V29yZHM6ICcnLFxyXG4gICAgICAgICAgICBzaG93UGFnZTogdHJ1ZSxcclxuICAgICAgICAgICAgaXNTaG93QXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBOYW1lOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ahiOS7tuWQjeensCcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgTmFtZVZhbHVlOiAnJyxcclxuICAgICAgICAgICAgQ2xpZW50TmFtZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqLmiLflkI3np7AnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NsaWVudE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIENsaWVudE5hbWVWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIExhd3llclJvbGU6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+C5qGI6KeS6ImyJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdMYXd5ZXJSb2xlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbJyddLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAn6K+36YCJ5oupJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIExhd3llclJvbGVJbmRleDogMCxcclxuICAgICAgICAgICAgLy/moYjku7bnsbvliKtcclxuICAgICAgICAgICAgQ2F0ZWdvcnk6IFtdLFxyXG4gICAgICAgICAgICAvL+eKtuaAgVxyXG4gICAgICAgICAgICBTdGF0dXM6W10sXHJcbiAgICAgICAgICAgIGlzUHJvY2Vzc1N0YXR1czpmYWxzZSxcclxuICAgICAgICAgICAgLy/nq4vmoYjmtYHnqIvnirbmgIFcclxuICAgICAgICAgICAgUHJvY2Vzc1N0YXR1czpbXSxcclxuICAgICAgICAgICAgUHJvY2Vzc1N0YXR1c0RhdGE6W10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBjaGVja2JveENoYW5nZVByb2Nlc3NTdGF0dXMoZSl7XHJcbiAgICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5Qcm9jZXNzU3RhdHVzID0gZS5kZXRhaWwudmFsdWUuam9pbignLCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5Qcm9jZXNzU3RhdHVzID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhZGlvQ2hhbmdlKGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Byb2Nlc3NTdGF0dXM9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5TdGF0dXM9ZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0ZpbHRlcihlLmRldGFpbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja2JveENoYW5nZShlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNhdGVnb3J5ID0gZS5kZXRhaWwudmFsdWUuam9pbignLCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0QWNjZXB0RGF0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5BY2NlcHREYXRlLlN0YXJ0RGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmRBY2NlcHREYXRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkFjY2VwdERhdGUuRW5kRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdGFydENyZWF0ZURhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ3JlYXRpb25UaW1lLlN0YXJ0RGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmRDcmVhdGVEYXRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNyZWF0aW9uVGltZS5FbmREYXRlID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWR2YW5jZWRTZWFyY2hTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zZWFyY2hEYXRhKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcclxuICAgICAgICAgICAgICAgICAgICBpZihwcmV2UGFnZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmlzUmVmcmVzaCh0aGlzLnNlYXJjaERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5rKh5pyJ5pCc57Si5YaF5a6577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5piv5ZCm5Yig6Zmk77yBJywgLy/mj5DnpLrnmoTmoIfpopgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSGlzdG9yeV9LZXlXb3JkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVHSVNURVInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVHSVNURVInLCBoaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcnlfS2V5V29yZC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFR0lTVEVSJyk7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFR0lTVEVSJywgaGlzdG9yeSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvbmdUYXAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaXN0b3J5KGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoS2V5V29yZHMgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWl0U2VhcmNoKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByZXZQYWdlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLktleVdvcmQ9ZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmlzUmVmcmVzaCh0aGlzLnNlYXJjaERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUdJU1RFUicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEhpc3RvcnlfS2V5V29yZC5sZW5ndGggPj0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmQuc3BsaWNlKEhpc3RvcnlfS2V5V29yZC5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZC51bnNoaWZ0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZCA9IG15RGlzdGluY3QoSGlzdG9yeV9LZXlXb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVHSVNURVInLCBIaXN0b3J5X0tleVdvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aQnOe0ouS4uuepuizor7fph43or5XvvIEnLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdhdGNoID0ge1xyXG4gICAgICAgICAgICBOYW1lVmFsdWUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBDbGllbnROYW1lVmFsdWUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DbGllbnROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBMYXd5ZXJSb2xlSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5MYXd5ZXJSb2xlID0gdGhpcy5MYXd5ZXJSb2xlLnZhbHVlW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIOWIpOaWreWIneWni+WMluWOhuWPsuaVsOaNrlxyXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XHJcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUdJU1RFUicpO1xyXG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZCkge1xyXG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkID0gW107XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFR0lTVEVSJywgSGlzdG9yeV9LZXlXb3JkKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5IaXN0b3J5X0tleVdvcmQgPSBIaXN0b3J5X0tleVdvcmQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLkhpc3RvcnlfS2V5V29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nirbmgIHmlbDmja7ov4fmu6RcclxuICAgICAgICBzdGF0dXNGaWx0ZXIoc3RhdHVzKXtcclxuICAgICAgICAgICAgdmFyIFByb2Nlc3NTdGF0dXNEYXRhPXRoaXMuUHJvY2Vzc1N0YXR1c0RhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuUHJvY2Vzc1N0YXR1cz1Qcm9jZXNzU3RhdHVzRGF0YS5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS5zdWJzdHIoMCwgMSk9PXN0YXR1c1xyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bku6PnvJbovpHmlbDmja5cclxuICAgICAgICBhc3luYyBHZXRDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXQoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VBcHBsaWNhdGlvbi9HZXRDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBsYXd5ZXJSb2xlTGlzdF9pbmRleCBpbiBDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcy5sYXd5ZXJSb2xlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTGF3eWVyUm9sZS52YWx1ZS5wdXNoKENhc2VBcHBseUxpc3RTZWFyY2hJbnB1dERhdGFzLmxhd3llclJvbGVMaXN0W2xhd3llclJvbGVMaXN0X2luZGV4XS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MYXd5ZXJSb2xlLmRpc3BsYXlUZXh0LnB1c2goQ2FzZUFwcGx5TGlzdFNlYXJjaElucHV0RGF0YXMubGF3eWVyUm9sZUxpc3RbbGF3eWVyUm9sZUxpc3RfaW5kZXhdLmRpc3BsYXlUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnkgPSBDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcy5jYXRlZ29yeUxpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cz1DYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcy5zdGF0dXNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Qcm9jZXNzU3RhdHVzRGF0YT1DYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcy5wcm9jZXNzU3RhdHVzTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DcmVhdGlvblRpbWUgPSB7XHJcbiAgICAgICAgICAgICAgICBTdGFydERhdGU6JycsXHJcbiAgICAgICAgICAgICAgICBFbmREYXRlOicnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQWNjZXB0RGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIFN0YXJ0RGF0ZTonJyxcclxuICAgICAgICAgICAgICAgIEVuZERhdGU6JycsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUFwcGx5TGlzdFNlYXJjaElucHV0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblNob3coKSB7fTtcclxuICAgIH1cclxuIl19