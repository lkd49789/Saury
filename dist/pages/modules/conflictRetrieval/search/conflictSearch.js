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

var conflictSearch = function (_wepy$page) {
    _inherits(conflictSearch, _wepy$page);

    function conflictSearch() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, conflictSearch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = conflictSearch.__proto__ || Object.getPrototypeOf(conflictSearch)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "CaseName": { "xmlns:v-bind": "", "v-bind:input.sync": "CaseName", "v-bind:inputValue.sync": "CaseNameValue", "v-bind:twoWayTitle.once": "CaseNameValue" }, "ClientName": { "v-bind:input.sync": "ClientName", "v-bind:inputValue.sync": "ClientNameValue", "v-bind:twoWayTitle.once": "ClientNameeValue" }, "CaseCategory": { "v-bind:options.sync": "CaseCategory", "v-bind:index.sync": "CaseCategoryIndex", "v-bind:twoWayTitle.once": "CaseCategoryIndex" } }, _this.$events = {}, _this.components = {
            CaseName: _input2.default,
            ClientName: _input2.default,
            CaseCategory: _option2.default
        }, _this.data = {
            searchData: {
                CaseCategory: "",
                CaseName: "",
                ClientName: "",
                EndDate: "",
                KeyWord: "",
                StartDate: ""
            },
            History_KeyWord_CaseConflict: [],
            searchKeyWords: '',
            showPage: true,
            isShowArray: [],
            CaseName: {
                title: '案件名称',
                name: 'CaseName',
                warning: false
            },
            CaseNameValue: '',
            ClientName: {
                title: '客户名称',
                name: 'ClientName',
                warning: false
            },
            ClientNameValue: '',
            CaseCategory: {
                title: '案件类别',
                name: 'CaseCategory',
                value: [''],
                displayText: ['请选择'],
                warning: false
            },
            CaseCategoryIndex: 0,
            //案件类别
            Category: [],
            //状态
            Status: [],
            isProcessStatus: false,
            //立案流程状态
            ProcessStatus: []
        }, _this.methods = {
            bindDateChange: function bindDateChange(e) {
                switch (e.currentTarget.id) {
                    case 'StartDate':
                        this.searchData.StartDate = e.detail.value;
                        break;
                    case 'EndDate':
                        this.searchData.EndDate = e.detail.value;
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
                            _this2.History_KeyWord_CaseConflict = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_CASECONFLICT');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_CASECONFLICT', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.History_KeyWord_CaseConflict.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_CASECONFLICT');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_CASECONFLICT', history);
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
                    this.searchData.KeyWord = e.detail.value;
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    if (prevPage) {
                        prevPage.isRefresh(this.searchData);
                    }
                    wx.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        success: function success() {
                            var History_KeyWord_CaseConflict = wx.getStorageSync('HISTORY_KEYWORD_CASECONFLICT');
                            if (History_KeyWord_CaseConflict.length >= 20) {
                                History_KeyWord_CaseConflict.splice(History_KeyWord_CaseConflict.length - 1, 1);
                            }
                            History_KeyWord_CaseConflict.unshift(value);
                            History_KeyWord_CaseConflict = (0, _api.myDistinct)(History_KeyWord_CaseConflict);
                            wx.setStorageSync('HISTORY_KEYWORD_CASECONFLICT', History_KeyWord_CaseConflict);
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
            CaseNameValue: function CaseNameValue(value) {
                this.searchData.CaseName = value;
                this.$apply();
            },
            ClientNameValue: function ClientNameValue(value) {
                this.searchData.ClientName = value;
                this.$apply();
            },
            CaseCategoryIndex: function CaseCategoryIndex(index) {
                this.searchData.CaseCategory = this.CaseCategory.value[index];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(conflictSearch, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_CaseConflict = wx.getStorageSync('HISTORY_KEYWORD_CASECONFLICT');
            if (!History_KeyWord_CaseConflict) {
                History_KeyWord_CaseConflict = [];
                wx.setStorageSync('HISTORY_KEYWORD_CASECONFLICT', History_KeyWord_CaseConflict);
            } else {
                this.History_KeyWord_CaseConflict = History_KeyWord_CaseConflict;
                for (var index in this.History_KeyWord_CaseConflict) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
        //获取案件类别

    }, {
        key: 'GetCaseCategoryComboboxItems',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, caseCatogory, i, len;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetCaseCategoryComboboxItems', 'post');

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    caseCatogory = resData.data.result;

                                    console.log(caseCatogory);
                                    for (i = 0, len = caseCatogory.length; i < len; i++) {
                                        this.CaseCategory.value[i + 1] = caseCatogory[i].value;
                                        this.CaseCategory.displayText[i + 1] = caseCatogory[i].displayText;
                                    }
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseCategoryComboboxItems() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseCategoryComboboxItems;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetCaseCategoryComboboxItems();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return conflictSearch;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(conflictSearch , 'pages/modules/conflictRetrieval/search/conflictSearch'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0U2VhcmNoLmpzIl0sIm5hbWVzIjpbImNvbmZsaWN0U2VhcmNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ2FzZU5hbWUiLCJDbGllbnROYW1lIiwiQ2FzZUNhdGVnb3J5IiwiZGF0YSIsInNlYXJjaERhdGEiLCJFbmREYXRlIiwiS2V5V29yZCIsIlN0YXJ0RGF0ZSIsIkhpc3RvcnlfS2V5V29yZF9DYXNlQ29uZmxpY3QiLCJzZWFyY2hLZXlXb3JkcyIsInNob3dQYWdlIiwiaXNTaG93QXJyYXkiLCJ0aXRsZSIsIm5hbWUiLCJ3YXJuaW5nIiwiQ2FzZU5hbWVWYWx1ZSIsIkNsaWVudE5hbWVWYWx1ZSIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJDYXNlQ2F0ZWdvcnlJbmRleCIsIkNhdGVnb3J5IiwiU3RhdHVzIiwiaXNQcm9jZXNzU3RhdHVzIiwiUHJvY2Vzc1N0YXR1cyIsIm1ldGhvZHMiLCJiaW5kRGF0ZUNoYW5nZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwiaXNSZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiZGVsZXRJdGVtQWxsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJyZXBsYWNlIiwidW5zaGlmdCIsIndhdGNoIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsImNhc2VDYXRvZ29yeSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuIiwiaXNIaXN0b3J5IiwiR2V0Q2FzZUNhdGVnb3J5Q29tYm9ib3hJdGVtcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUdBOzs7O0FBSUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsVUFBdkMsRUFBa0QsMEJBQXlCLGVBQTNFLEVBQTJGLDJCQUEwQixlQUFySCxFQUFaLEVBQWtKLGNBQWEsRUFBQyxxQkFBb0IsWUFBckIsRUFBa0MsMEJBQXlCLGlCQUEzRCxFQUE2RSwyQkFBMEIsa0JBQXZHLEVBQS9KLEVBQTBSLGdCQUFlLEVBQUMsdUJBQXNCLGNBQXZCLEVBQXNDLHFCQUFvQixtQkFBMUQsRUFBOEUsMkJBQTBCLG1CQUF4RyxFQUF6UyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxxQ0FERTtBQUVGQyx1Q0FGRTtBQUdGQztBQUhFLFMsUUFLTkMsSSxHQUFPO0FBQ0hDLHdCQUFZO0FBQ1JGLDhCQUFjLEVBRE47QUFFUkYsMEJBQVUsRUFGRjtBQUdSQyw0QkFBWSxFQUhKO0FBSVJJLHlCQUFTLEVBSkQ7QUFLUkMseUJBQVMsRUFMRDtBQU1SQywyQkFBVztBQU5ILGFBRFQ7QUFTSEMsMENBQThCLEVBVDNCO0FBVUhDLDRCQUFnQixFQVZiO0FBV0hDLHNCQUFVLElBWFA7QUFZSEMseUJBQWEsRUFaVjtBQWFIWCxzQkFBVTtBQUNOWSx1QkFBTyxNQUREO0FBRU5DLHNCQUFNLFVBRkE7QUFHTkMseUJBQVM7QUFI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QUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUs7QUFDTCxpQkFBS29ELFNBQUw7QUFDQSxpQkFBS0MsNEJBQUw7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUFuTjZCQyxlQUFLQyxJOztrQkFBNUIxRixjIiwiZmlsZSI6ImNvbmZsaWN0U2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQge1xuICAgICAgICBmb3JtYXREYXRlXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBDYXNlTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IENsaWVudE5hbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBDYXNlQ2F0ZWdvcnkgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjb25mbGljdFNlYXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDYXNlTmFtZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQ2FzZU5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkNhc2VOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDYXNlTmFtZVZhbHVlXCJ9LFwiQ2xpZW50TmFtZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJDbGllbnROYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJDbGllbnROYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDbGllbnROYW1lZVZhbHVlXCJ9LFwiQ2FzZUNhdGVnb3J5XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiQ2FzZUNhdGVnb3J5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiQ2FzZUNhdGVnb3J5SW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDYXNlQ2F0ZWdvcnlJbmRleFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBDYXNlTmFtZSxcbiAgICAgICAgICAgIENsaWVudE5hbWUsXG4gICAgICAgICAgICBDYXNlQ2F0ZWdvcnlcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge1xuICAgICAgICAgICAgICAgIENhc2VDYXRlZ29yeTogXCJcIixcbiAgICAgICAgICAgICAgICBDYXNlTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBDbGllbnROYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIEVuZERhdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgS2V5V29yZDogXCJcIixcbiAgICAgICAgICAgICAgICBTdGFydERhdGU6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0Nhc2VDb25mbGljdDogW10sXG4gICAgICAgICAgICBzZWFyY2hLZXlXb3JkczogJycsXG4gICAgICAgICAgICBzaG93UGFnZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzU2hvd0FycmF5OiBbXSxcbiAgICAgICAgICAgIENhc2VOYW1lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmoYjku7blkI3np7AnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDYXNlTmFtZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ2FzZU5hbWVWYWx1ZTogJycsXG4gICAgICAgICAgICBDbGllbnROYW1lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqLmiLflkI3np7AnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDbGllbnROYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnROYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgQ2FzZUNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmoYjku7bnsbvliKsnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDYXNlQ2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbJyddLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXG4gICAgICAgICAgICAgICAgICAgICfor7fpgInmi6knXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENhc2VDYXRlZ29yeUluZGV4OiAwLFxuICAgICAgICAgICAgLy/moYjku7bnsbvliKtcbiAgICAgICAgICAgIENhdGVnb3J5OiBbXSxcbiAgICAgICAgICAgIC8v54q25oCBXG4gICAgICAgICAgICBTdGF0dXM6W10sXG4gICAgICAgICAgICBpc1Byb2Nlc3NTdGF0dXM6ZmFsc2UsXG4gICAgICAgICAgICAvL+eri+ahiOa1geeoi+eKtuaAgVxuICAgICAgICAgICAgUHJvY2Vzc1N0YXR1czpbXVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jdXJyZW50VGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N0YXJ0RGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuU3RhcnREYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRW5kRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuRW5kRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWR2YW5jZWRTZWFyY2hTdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJldlBhZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5rKh5pyJ5pCc57Si5YaF5a6577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VDT05GTElDVCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VDT05GTElDVCcsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcnlfS2V5V29yZF9DYXNlQ29uZmxpY3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRUNPTkZMSUNUJyk7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRUNPTkZMSUNUJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hLZXlXb3JkcyA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLktleVdvcmQ9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJldlBhZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxLCAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9DYXNlQ29uZmxpY3QgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VDT05GTElDVCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0Lmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0LnNwbGljZShIaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0Lmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0LnVuc2hpZnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9DYXNlQ29uZmxpY3QgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZF9DYXNlQ29uZmxpY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRUNPTkZMSUNUJywgSGlzdG9yeV9LZXlXb3JkX0Nhc2VDb25mbGljdClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBDYXNlTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNhc2VOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnROYW1lVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ2xpZW50TmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ2FzZUNhdGVnb3J5SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ2FzZUNhdGVnb3J5ID0gdGhpcy5DYXNlQ2F0ZWdvcnkudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIOWIpOaWreWIneWni+WMluWOhuWPsuaVsOaNrlxuICAgICAgICBpc0hpc3RvcnkoKSB7XG4gICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbSA9IHt9O1xuICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX0Nhc2VDb25mbGljdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRUNPTkZMSUNUJyk7XG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9DYXNlQ29uZmxpY3QpIHtcbiAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0ID0gW107XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DQVNFQ09ORkxJQ1QnLCBIaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcnlfS2V5V29yZF9DYXNlQ29uZmxpY3QgPSBIaXN0b3J5X0tleVdvcmRfQ2FzZUNvbmZsaWN0O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuSGlzdG9yeV9LZXlXb3JkX0Nhc2VDb25mbGljdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5bmoYjku7bnsbvliKtcbiAgICAgICBhc3luYyBHZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zKCl7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zJyxcbiAgICAgICAgICAgICAgICAncG9zdCdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB2YXIgY2FzZUNhdG9nb3J5PXJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FzZUNhdG9nb3J5KVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9MCxsZW49Y2FzZUNhdG9nb3J5Lmxlbmd0aDtpPGxlbjtpKyspe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhc2VDYXRlZ29yeS52YWx1ZVtpKzFdPWNhc2VDYXRvZ29yeVtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlQ2F0ZWdvcnkuZGlzcGxheVRleHRbaSsxXT1jYXNlQ2F0b2dvcnlbaV0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmlzSGlzdG9yeSgpO1xuICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zKCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==