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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGEBILL');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGEBILL', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGEBILL');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_MANAGEBILL', history);
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
                            var History_KeyWord_ManageBill = wx.getStorageSync('HISTORY_KEYWORD_MANAGEBILL');
                            if (History_KeyWord_ManageBill.length >= 20) {
                                History_KeyWord_ManageBill.splice(History_KeyWord_ManageBill.length - 1, 1);
                            }
                            History_KeyWord_ManageBill.unshift(value);
                            History_KeyWord_ManageBill = (0, _api.myDistinct)(History_KeyWord_ManageBill);
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGEBILL', History_KeyWord_ManageBill);
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
            var History_KeyWord_ManageBill = wx.getStorageSync('HISTORY_KEYWORD_MANAGEBILL');
            if (!History_KeyWord_ManageBill) {
                History_KeyWord_ManageBill = [];
                wx.setStorageSync('HISTORY_KEYWORD_MANAGEBILL', History_KeyWord_ManageBill);
            } else {
                this.history_keyWord_case = History_KeyWord_ManageBill;
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchMyBill , 'pages/modules/bill/search/searchManageBill'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE1hbmFnZUJpbGwuanMiXSwibmFtZXMiOlsic2VhcmNoTXlCaWxsIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ2FzZU5hbWUiLCJDbGllbnROYW1lIiwiQ3VycmVuY3kiLCJkYXRhIiwic2VhcmNoRGF0YSIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJDYXNlTmFtZVZhbHVlIiwiQ2xpZW50TmFtZVZhbHVlIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsIkN1cnJlbmN5SW5kZXgiLCJoaXN0b3J5X2tleVdvcmRfY2FzZSIsInNlYXJjaENsZW50VmFsdWUiLCJzaG93UGFnZSIsImlzU2hvd0FycmF5IiwibWV0aG9kcyIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImRhdGUiLCJkZXRhaWwiLCJiaWxsRGF0ZSIsInRhcmdldCIsImlkIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIiRhcHBseSIsImFkdmFuY2VkU2VhcmNoU3VibWl0IiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiZGVsZXRJdGVtQWxsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJyZXBsYWNlIiwiS2V5V29yZCIsIkhpc3RvcnlfS2V5V29yZF9NYW5hZ2VCaWxsIiwidW5zaGlmdCIsIndhdGNoIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsIkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcyIsInJlc3VsdCIsInB1c2giLCJpc0hpc3RvcnkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7OztBQUlBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFVBQXZDLEVBQWtELDBCQUF5QixlQUEzRSxFQUEyRiwyQkFBMEIsZUFBckgsRUFBWixFQUFrSixjQUFhLEVBQUMscUJBQW9CLFlBQXJCLEVBQWtDLDBCQUF5QixpQkFBM0QsRUFBNkUsMkJBQTBCLGlCQUF2RyxFQUEvSixFQUF5UixZQUFXLEVBQUMsdUJBQXNCLFVBQXZCLEVBQWtDLHFCQUFvQixlQUF0RCxFQUFzRSwyQkFBMEIsZUFBaEcsRUFBcFMsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMscUNBREU7QUFFRkMsdUNBRkU7QUFHRkM7QUFIRSxTLFFBS05DLEksR0FBTztBQUNIQyx3QkFBWSxFQURUO0FBRUg7QUFDQUosc0JBQVU7QUFDTkssdUJBQU8sTUFERDtBQUVOQyxzQkFBTSxVQUZBO0FBR05DLHlCQUFTO0FBSEgsYUFIUDtBQVFIQywyQkFBZSxFQVJaO0FBU0hQLHdCQUFZO0FBQ1JJLHVCQUFPLE1BREM7QUFFUkMsc0JBQU0sWUFGRTtBQUdSQyx5QkFBUztBQUhELGFBVFQ7QUFjSEUsNkJBQWlCLEVBZGQ7QUFlSDtBQUNBUCxzQkFBVTtBQUNORyx1QkFBTyxNQUREO0FBRU5DLHNCQUFNLFVBRkE7QUFHTkksdUJBQU8sRUFIRDtBQUlOQyw2QkFBYSxDQUNULEtBRFMsQ0FKUDtBQU9OSix5QkFBUztBQVBILGFBaEJQO0FB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aWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQge1xuICAgICAgICBmb3JtYXREYXRlXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBDYXNlTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IENsaWVudE5hbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBDdXJyZW5jeSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaE15QmlsbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDYXNlTmFtZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQ2FzZU5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkNhc2VOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDYXNlTmFtZVZhbHVlXCJ9LFwiQ2xpZW50TmFtZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJDbGllbnROYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJDbGllbnROYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDbGllbnROYW1lVmFsdWVcIn0sXCJDdXJyZW5jeVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkN1cnJlbmN5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiQ3VycmVuY3lJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkN1cnJlbmN5SW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgQ2FzZU5hbWUsXG4gICAgICAgICAgICBDbGllbnROYW1lLFxuICAgICAgICAgICAgQ3VycmVuY3lcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICAvL+Wnk+WQjVxuICAgICAgICAgICAgQ2FzZU5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ahiOS7tuWQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Nhc2VOYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDYXNlTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIENsaWVudE5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+WQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NsaWVudE5hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENsaWVudE5hbWVWYWx1ZTogJycsXG4gICAgICAgICAgICAvLyDor7flgYfnsbvlnotcbiAgICAgICAgICAgIEN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfotKfluIHnsbvlnosnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDdXJyZW5jeScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXG4gICAgICAgICAgICAgICAgICAgICfor7fpgInmi6knXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEN1cnJlbmN5SW5kZXg6IDAsXG4gICAgICAgICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICAgICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNob3dQYWdlOiB0cnVlLFxuICAgICAgICAgICAgaXNTaG93QXJyYXk6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaERhdGEuYmlsbERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhWydiaWxsRGF0ZSddID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RhcnRCaWxsRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuYmlsbERhdGUuc3RhcnREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmRCaWxsRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuYmlsbERhdGUuZW5kRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZHZhbmNlZFNlYXJjaFN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaERhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNlYXJjaERhdGEpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaQnOe0ouWGheWuue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZSA9ICF0aGlzLnNob3dQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtQWxsKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5piv5ZCm5Yig6Zmk77yBJywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflhajpg6jljoblj7LorrDlvZUnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjN2E3YTdhJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFQklMTCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRUJJTEwnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VCSUxMJyk7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFQklMTCcsIGhpc3RvcnkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvbmdUYXAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5ID0gdGhpcy5pc1Nob3dBcnJheS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2xlbnRWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtLktleVdvcmQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxLCAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VCaWxsID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VCSUxMJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VCaWxsLmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWFuYWdlQmlsbC5zcGxpY2UoSGlzdG9yeV9LZXlXb3JkX01hbmFnZUJpbGwubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VCaWxsLnVuc2hpZnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VCaWxsID0gbXlEaXN0aW5jdChIaXN0b3J5X0tleVdvcmRfTWFuYWdlQmlsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VCSUxMJywgSGlzdG9yeV9LZXlXb3JkX01hbmFnZUJpbGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aQnOe0ouS4uuepuizor7fph43or5XvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgQ2FzZU5hbWVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXNlTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ2xpZW50TmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNsaWVudE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEN1cnJlbmN5SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ3VycmVuY3kgPSB0aGlzLkN1cnJlbmN5LnZhbHVlW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIOWIpOaWreWIneWni+WMluWOhuWPsuaVsOaNrlxuICAgICAgICBpc0hpc3RvcnkoKSB7XG4gICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbSA9IHt9O1xuICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX01hbmFnZUJpbGwgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRUJJTEwnKTtcbiAgICAgICAgICAgIGlmICghSGlzdG9yeV9LZXlXb3JkX01hbmFnZUJpbGwpIHtcbiAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWFuYWdlQmlsbCA9IFtdO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFQklMTCcsIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VCaWxsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlID0gSGlzdG9yeV9LZXlXb3JkX01hbmFnZUJpbGw7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMnLFxuICAgICAgICAgICAgICAgICdQT1NUJywge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJDVVJSRU5DWVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DdXJyZW5jeS52YWx1ZS5wdXNoKEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtc1tpbmRleF0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVuY3kuZGlzcGxheVRleHQucHVzaChHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXNbaW5kZXhdLmRpc3BsYXlUZXh0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XG4gICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcygpXG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==