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

var searchMyBill = function (_wepy$page) {
    _inherits(searchMyBill, _wepy$page);

    function searchMyBill() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchMyBill);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchMyBill.__proto__ || Object.getPrototypeOf(searchMyBill)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "CaseName": { "xmlns:v-bind": "", "v-bind:input.sync": "CaseName", "v-bind:inputValue.sync": "CaseNameValue", "v-bind:twoWayTitle.once": "CaseNameValue" }, "ClientName": { "v-bind:input.sync": "ClientName", "v-bind:inputValue.sync": "ClientNameValue", "v-bind:twoWayTitle.once": "ClientNameValue" }, "Currency": { "v-bind:options.sync": "Currency", "v-bind:index.sync": "CurrencyIndex", "v-bind:twoWayTitle.once": "CurrencyIndex" } }, _this.$events = {}, _this.components = {
            CaseName: _input2.default,
            ClientName: _input2.default,
            Currency: _option2.default
        }, _this.data = {
            searchData: {},
            //姓名
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
            // 请假类型
            Currency: {
                title: '货币类型',
                name: 'Currency',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            CurrencyIndex: 0,
            history_keyWord_case: [],
            searchClentValue: '',
            showPage: true,
            isShowArray: []
        }, _this.methods = {
            bindDateChange: function bindDateChange(e) {
                var date = e.detail.value;
                if (!this.searchData.billDate) {
                    this.searchData['billDate'] = {};
                }
                switch (e.target.id) {
                    case 'startBillDate':
                        this.searchData.billDate.startDate = date;
                        break;
                    case 'endBillDate':
                        this.searchData.billDate.endDate = date;
                        break;
                }
                this.$apply();
            },
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_MYBILL');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_MYBILL', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_MYBILL');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_MYBILL', history);
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
                            var History_KeyWord_MyBill = wx.getStorageSync('HISTORY_KEYWORD_MYBILL');
                            if (History_KeyWord_MyBill.length >= 20) {
                                History_KeyWord_MyBill.splice(History_KeyWord_MyBill.length - 1, 1);
                            }
                            History_KeyWord_MyBill.unshift(value);
                            History_KeyWord_MyBill = (0, _api.myDistinct)(History_KeyWord_MyBill);
                            wx.setStorageSync('HISTORY_KEYWORD_MYBILL', History_KeyWord_MyBill);
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
            CurrencyIndex: function CurrencyIndex(index) {
                this.searchData.Currency = this.Currency.value[index - 1];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchMyBill, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_MyBill = wx.getStorageSync('HISTORY_KEYWORD_MYBILL');
            if (!History_KeyWord_MyBill) {
                History_KeyWord_MyBill = [];
                wx.setStorageSync('HISTORY_KEYWORD_MYBILL', History_KeyWord_MyBill);
            } else {
                this.history_keyWord_case = History_KeyWord_MyBill;
                for (var index in this.history_keyWord_case) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
    }, {
        key: 'GetGeneralCodeComboboxItems',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, GetGeneralCodeComboboxItems, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboboxItems', 'POST', {
                                    id: "CURRENCY"
                                });

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    GetGeneralCodeComboboxItems = resData.data.result;

                                    for (index in GetGeneralCodeComboboxItems) {
                                        this.Currency.value.push(GetGeneralCodeComboboxItems[index].value);
                                        this.Currency.displayText.push(GetGeneralCodeComboboxItems[index].displayText);
                                    }
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetGeneralCodeComboboxItems() {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralCodeComboboxItems;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetGeneralCodeComboboxItems();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchMyBill;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchMyBill , 'pages/modules/bill/search/searchMyBill'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE15QmlsbC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hNeUJpbGwiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDYXNlTmFtZSIsIkNsaWVudE5hbWUiLCJDdXJyZW5jeSIsImRhdGEiLCJzZWFyY2hEYXRhIiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsIkNhc2VOYW1lVmFsdWUiLCJDbGllbnROYW1lVmFsdWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiQ3VycmVuY3lJbmRleCIsImhpc3Rvcnlfa2V5V29yZF9jYXNlIiwic2VhcmNoQ2xlbnRWYWx1ZSIsInNob3dQYWdlIiwiaXNTaG93QXJyYXkiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGF0ZSIsImRldGFpbCIsImJpbGxEYXRlIiwidGFyZ2V0IiwiaWQiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiJGFwcGx5IiwiYWR2YW5jZWRTZWFyY2hTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJxdWVyeVN0cmVhbSIsInJlZnJlc2giLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJkZWxldEl0ZW1BbGwiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwicmVzIiwiY29uZmlybSIsImhpc3RvcnkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiZGVsZXRJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJsb25nVGFwIiwibWFwIiwiaXRlbSIsInN1Ym1pdFNlYXJjaCIsInJlcGxhY2UiLCJLZXlXb3JkIiwiSGlzdG9yeV9LZXlXb3JkX015QmlsbCIsInVuc2hpZnQiLCJ3YXRjaCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMiLCJyZXN1bHQiLCJwdXNoIiwiaXNIaXN0b3J5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBR0E7Ozs7QUFJQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixVQUF2QyxFQUFrRCwwQkFBeUIsZUFBM0UsRUFBMkYsMkJBQTBCLGVBQXJILEVBQVosRUFBa0osY0FBYSxFQUFDLHFCQUFvQixZQUFyQixFQUFrQywwQkFBeUIsaUJBQTNELEVBQTZFLDJCQUEwQixpQkFBdkcsRUFBL0osRUFBeVIsWUFBVyxFQUFDLHVCQUFzQixVQUF2QixFQUFrQyxxQkFBb0IsZUFBdEQsRUFBc0UsMkJBQTBCLGVBQWhHLEVBQXBTLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLHFDQURFO0FBRUZDLHVDQUZFO0FBR0ZDO0FBSEUsUyxRQUtOQyxJLEdBQU87QUFDSEMsd0JBQVksRUFEVDtBQUVIO0FBQ0FKLHNCQUFVO0FBQ05LLHVCQUFPLE1BREQ7QUFFTkMsc0JBQU0sVUFGQTtBQUdOQyx5QkFBUztBQUhILGFBSFA7QUFRSEMsMkJBQWUsRUFSWjtBQVNIUCx3QkFBWTtBQUNSSSx1QkFBTyxNQURDO0FBRVJDLHNCQUFNLFlBRkU7QUFHUkMseUJBQVM7QUFIRCxhQVRUO0FBY0hFLDZCQUFpQixFQWRkO0FBZUg7QUFDQVAsc0JBQVU7QUFDTkcsdUJBQU8sTUFERDtBQUVOQyxzQkFBTSxVQUZBO0FBR05JLHVCQUFPLEVBSEQ7QUFJTkMsNkJBQWEsQ0FDVCxLQURTLENBSlA7QUFPTkoseUJBQVM7QUFQSCxhQWhCUDtBQXlCSEssMkJB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cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQge1xuICAgICAgICBmb3JtYXREYXRlXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBDYXNlTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IENsaWVudE5hbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBDdXJyZW5jeSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaE15QmlsbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDYXNlTmFtZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQ2FzZU5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkNhc2VOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDYXNlTmFtZVZhbHVlXCJ9LFwiQ2xpZW50TmFtZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJDbGllbnROYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJDbGllbnROYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDbGllbnROYW1lVmFsdWVcIn0sXCJDdXJyZW5jeVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkN1cnJlbmN5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiQ3VycmVuY3lJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkN1cnJlbmN5SW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgQ2FzZU5hbWUsXG4gICAgICAgICAgICBDbGllbnROYW1lLFxuICAgICAgICAgICAgQ3VycmVuY3lcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICAvL+Wnk+WQjVxuICAgICAgICAgICAgQ2FzZU5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ahiOS7tuWQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Nhc2VOYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDYXNlTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIENsaWVudE5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+WQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NsaWVudE5hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENsaWVudE5hbWVWYWx1ZTogJycsXG4gICAgICAgICAgICAvLyDor7flgYfnsbvlnotcbiAgICAgICAgICAgIEN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfotKfluIHnsbvlnosnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDdXJyZW5jeScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXG4gICAgICAgICAgICAgICAgICAgICfor7fpgInmi6knXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEN1cnJlbmN5SW5kZXg6IDAsXG4gICAgICAgICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICAgICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNob3dQYWdlOiB0cnVlLFxuICAgICAgICAgICAgaXNTaG93QXJyYXk6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaERhdGEuYmlsbERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhWydiaWxsRGF0ZSddID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RhcnRCaWxsRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuYmlsbERhdGUuc3RhcnREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmRCaWxsRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuYmlsbERhdGUuZW5kRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZHZhbmNlZFNlYXJjaFN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaERhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNlYXJjaERhdGEpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaQnOe0ouWGheWuue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZSA9ICF0aGlzLnNob3dQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtQWxsKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5piv5ZCm5Yig6Zmk77yBJywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflhajpg6jljoblj7LorrDlvZUnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjN2E3YTdhJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlCSUxMJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlCSUxMJywgaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0SXRlbShpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlCSUxMJyk7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlCSUxMJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uS2V5V29yZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEsIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX015QmlsbCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlCSUxMJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEhpc3RvcnlfS2V5V29yZF9NeUJpbGwubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NeUJpbGwuc3BsaWNlKEhpc3RvcnlfS2V5V29yZF9NeUJpbGwubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NeUJpbGwudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX015QmlsbCA9IG15RGlzdGluY3QoSGlzdG9yeV9LZXlXb3JkX015QmlsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NWUJJTEwnLCBIaXN0b3J5X0tleVdvcmRfTXlCaWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIENhc2VOYW1lVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ2FzZU5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENsaWVudE5hbWVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DbGllbnROYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDdXJyZW5jeUluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkN1cnJlbmN5ID0gdGhpcy5DdXJyZW5jeS52YWx1ZVtpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyDliKTmlq3liJ3lp4vljJbljoblj7LmlbDmja5cbiAgICAgICAgaXNIaXN0b3J5KCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9NeUJpbGwgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01ZQklMTCcpO1xuICAgICAgICAgICAgaWYgKCFIaXN0b3J5X0tleVdvcmRfTXlCaWxsKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX015QmlsbCA9IFtdO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlCSUxMJywgSGlzdG9yeV9LZXlXb3JkX015QmlsbClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IEhpc3RvcnlfS2V5V29yZF9NeUJpbGw7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMnLFxuICAgICAgICAgICAgICAgICdQT1NUJywge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJDVVJSRU5DWVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DdXJyZW5jeS52YWx1ZS5wdXNoKEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtc1tpbmRleF0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVuY3kuZGlzcGxheVRleHQucHVzaChHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXNbaW5kZXhdLmRpc3BsYXlUZXh0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XG4gICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcygpXG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==