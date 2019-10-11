'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../../../utils/cofig/api.js');

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchApplyAudit = function (_wepy$page) {
    _inherits(searchApplyAudit, _wepy$page);

    function searchApplyAudit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchApplyAudit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchApplyAudit.__proto__ || Object.getPrototypeOf(searchApplyAudit)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "caseName": { "v-bind:input.sync": "caseName", "v-bind:inputValue.sync": "caseNameValue", "v-bind:twoWayTitle.once": "caseNameValue" }, "clientUser": { "v-bind:input.sync": "clientUser", "v-bind:inputValue.sync": "clientUserValue", "v-bind:twoWayTitle.once": "clientUserValue" }, "serialId": { "xmlns:v-bind": "", "v-bind:input.sync": "serialId", "v-bind:inputValue.sync": "serialIdValue", "v-bind:twoWayTitle.once": "serialIdValue" } }, _this.$events = {}, _this.components = {
            caseName: _input2.default,
            clientUser: _input2.default,
            serialId: _input2.default,
            Status: _option2.default
        }, _this.data = {
            startDate: '',
            endDate: '',
            //案件编号
            serialId: {
                title: '案件编号',
                name: 'serialId',
                warning: false
            },
            serialIdValue: '',
            //案件名称
            caseName: {
                title: '案件名称',
                name: 'caseName',
                warning: false
            },
            caseNameValue: '',
            //客户编号
            clientUser: {
                title: '客户名称',
                name: 'clientUser',
                warning: false
            },
            clientUserValue: '',
            // 状态
            Status: {
                title: '状态',
                name: 'Status',
                value: [],
                displayText: [],
                warning: false
            },
            StatusIndex: -1,
            searchData: {
                CreationTime: {
                    StartDate: "",
                    EndDate: ""
                }
            },
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_APPROVE');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_APPROVE', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_APPROVE');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_APPROVE', history);
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
            bindDateChangeStart: function bindDateChangeStart(e) {
                this.searchData.CreationTime.StartDate = e.detail.value;
                this.startDate = e.detail.value;
                this.$apply();
            },
            bindDateChangeEnd: function bindDateChangeEnd(e) {
                this.searchData.CreationTime.EndDate = e.detail.value;
                this.endDate = e.detail.value;
                this.$apply();
            },
            submitSearch: function submitSearch(e) {
                var value = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
                if (value) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    prevPage.data.queryStream.Keyword = e.detail.value;
                    prevPage.data.refresh = true;
                    wx.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        success: function success() {
                            var History_KeyWord_Approve = wx.getStorageSync('HISTORY_KEYWORD_APPROVE');
                            if (History_KeyWord_Approve.length >= 20) {
                                History_KeyWord_Approve.splice(History_KeyWord_Approve.length - 1, 1);
                            }
                            History_KeyWord_Approve.unshift(value);
                            History_KeyWord_Approve = (0, _api.myDistinct)(History_KeyWord_Approve);
                            wx.setStorageSync('HISTORY_KEYWORD_APPROVE', History_KeyWord_Approve);
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
            serialIdValue: function serialIdValue(value) {
                this.searchData.serialId = value;
                this.$apply();
            },
            caseNameValue: function caseNameValue(value) {
                this.searchData.caseName = value;
                this.$apply();
            },
            clientUserValue: function clientUserValue(value) {
                this.searchData.clientUser = value;
                this.$apply();
            },
            StatusIndex: function StatusIndex(index) {
                this.searchData.Status = this.Status.value[index];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchApplyAudit, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_Approve = wx.getStorageSync('HISTORY_KEYWORD_APPROVE');
            if (!History_KeyWord_Approve) {
                History_KeyWord_Approve = [];
                wx.setStorageSync('HISTORY_KEYWORD_APPROVE', History_KeyWord_Approve);
            } else {
                this.history_keyWord_case = History_KeyWord_Approve;
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
                var resData, statusItem, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboboxItems', 'post', {
                                    Id: "DESZT"
                                });

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    statusItem = resData.data.result;

                                    for (index in statusItem) {
                                        this.Status.value[index] = statusItem[index].value;
                                        this.Status.displayText[index] = statusItem[index].displayText;
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

    return searchApplyAudit;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(searchApplyAudit , 'pages/modules/auditModules/approveAudit/search/searchApprove'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaEFwcHJvdmUuanMiXSwibmFtZXMiOlsic2VhcmNoQXBwbHlBdWRpdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhc2VOYW1lIiwiY2xpZW50VXNlciIsInNlcmlhbElkIiwiU3RhdHVzIiwiZGF0YSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0aXRsZSIsIm5hbWUiLCJ3YXJuaW5nIiwic2VyaWFsSWRWYWx1ZSIsImNhc2VOYW1lVmFsdWUiLCJjbGllbnRVc2VyVmFsdWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiU3RhdHVzSW5kZXgiLCJzZWFyY2hEYXRhIiwiQ3JlYXRpb25UaW1lIiwiU3RhcnREYXRlIiwiRW5kRGF0ZSIsImhpc3Rvcnlfa2V5V29yZF9jYXNlIiwic2VhcmNoQ2xlbnRWYWx1ZSIsInNob3dQYWdlIiwiaXNTaG93QXJyYXkiLCJtZXRob2RzIiwiYWR2YW5jZWRTZWFyY2hTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJxdWVyeVN0cmVhbSIsInJlZnJlc2giLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCIkYXBwbHkiLCJkZWxldEl0ZW1BbGwiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwicmVzIiwiY29uZmlybSIsImhpc3RvcnkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiZGVsZXRJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJsb25nVGFwIiwibWFwIiwiaXRlbSIsImJpbmREYXRlQ2hhbmdlU3RhcnQiLCJlIiwiZGV0YWlsIiwiYmluZERhdGVDaGFuZ2VFbmQiLCJzdWJtaXRTZWFyY2giLCJyZXBsYWNlIiwiS2V5d29yZCIsIkhpc3RvcnlfS2V5V29yZF9BcHByb3ZlIiwidW5zaGlmdCIsIndhdGNoIiwiYWpheCIsImdldERhdGEiLCJJZCIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwic3RhdHVzSXRlbSIsInJlc3VsdCIsImlzSGlzdG9yeSIsIkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUdBOzs7O0FBSUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGdCOzs7Ozs7Ozs7Ozs7Ozs4TUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMscUJBQW9CLFVBQXJCLEVBQWdDLDBCQUF5QixlQUF6RCxFQUF5RSwyQkFBMEIsZUFBbkcsRUFBWixFQUFnSSxjQUFhLEVBQUMscUJBQW9CLFlBQXJCLEVBQWtDLDBCQUF5QixpQkFBM0QsRUFBNkUsMkJBQTBCLGlCQUF2RyxFQUE3SSxFQUF1USxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFVBQXZDLEVBQWtELDBCQUF5QixlQUEzRSxFQUEyRiwyQkFBMEIsZUFBckgsRUFBbFIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQVc7QUFDQUMscUNBREE7QUFFQUMsdUNBRkE7QUFHQUMscUNBSEE7QUFJQUM7QUFKQSxTLFFBTUpDLEksR0FBTztBQUNIQyx1QkFBVyxFQURSO0FBRUhDLHFCQUFTLEVBRk47QUFHSDtBQUNBSixzQkFBVTtBQUNOSyx1QkFBTyxNQUREO0FBRU5DLHNCQUFNLFVBRkE7QUFHTkMseUJBQVM7QUFISCxhQUpQO0FBU0hDLDJCQUFlLEVBVFo7QUFVSDtBQUNBVixzQkFBVTtBQUNOTyx1QkFBTyxNQUREO0FBRU5DLHNCQUFNLFVBRkE7QUFHTkMseUJBQVM7QUFISCxhQVhQO0FBZ0JIRSwyQkFBZSxFQWhCWjtBQWlCSDtBQUNBVix3QkFBWTtBQUNS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UixJQUFpQm9CLFVBQWpCLEVBQTRCO0FBQ3hCLDZDQUFLNUUsTUFBTCxDQUFZVSxLQUFaLENBQWtCOEMsS0FBbEIsSUFBeUJvQixXQUFXcEIsS0FBWCxFQUFrQjlDLEtBQTNDO0FBQ0EsNkNBQUtWLE1BQUwsQ0FBWVcsV0FBWixDQUF3QjZDLEtBQXhCLElBQStCb0IsV0FBV3BCLEtBQVgsRUFBa0I3QyxXQUFqRDtBQUNIO0FBQ0QseUNBQUs4QixNQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFSTtBQUNMLGlCQUFLcUMsU0FBTDtBQUNBLGlCQUFLQywyQkFBTDtBQUNIOzs7aUNBQ1EsQ0FBRTs7OztFQXZOK0JDLGVBQUtDLEk7O2tCQUE5QnpGLGdCIiwiZmlsZSI6InNlYXJjaEFwcHJvdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQge1xuICAgICAgICBteURpc3RpbmN0XG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IGNhc2VOYW1lIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgc2VyaWFsSWQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBjbGllbnRVc2VyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQXBwbHlBdWRpdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjYXNlTmFtZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJjYXNlTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiY2FzZU5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNhc2VOYW1lVmFsdWVcIn0sXCJjbGllbnRVc2VyXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImNsaWVudFVzZXJcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcImNsaWVudFVzZXJWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNsaWVudFVzZXJWYWx1ZVwifSxcInNlcmlhbElkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJzZXJpYWxJZFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwic2VyaWFsSWRWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInNlcmlhbElkVmFsdWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzPXtcbiAgICAgICAgICAgIGNhc2VOYW1lLFxuICAgICAgICAgICAgY2xpZW50VXNlcixcbiAgICAgICAgICAgIHNlcmlhbElkLFxuICAgICAgICAgICAgU3RhdHVzLFxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdGFydERhdGU6ICcnLFxuICAgICAgICAgICAgZW5kRGF0ZTogJycsXG4gICAgICAgICAgICAvL+ahiOS7tue8luWPt1xuICAgICAgICAgICAgc2VyaWFsSWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ahiOS7tue8luWPtycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NlcmlhbElkJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpYWxJZFZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v5qGI5Lu25ZCN56ewXG4gICAgICAgICAgICBjYXNlTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qGI5Lu25ZCN56ewJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2FzZU5hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2VOYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/lrqLmiLfnvJblj7dcbiAgICAgICAgICAgIGNsaWVudFVzZXI6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+WQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NsaWVudFVzZXInLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWVudFVzZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAvLyDnirbmgIFcbiAgICAgICAgICAgIFN0YXR1czoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn54q25oCBJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3RhdHVzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU3RhdHVzSW5kZXg6IC0xLFxuICAgICAgICAgICAgc2VhcmNoRGF0YToge1xuICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZToge1xuICAgICAgICAgICAgICAgICAgICBTdGFydERhdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIEVuZERhdGU6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpc3Rvcnlfa2V5V29yZF9jYXNlOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaENsZW50VmFsdWU6ICcnLFxuICAgICAgICAgICAgc2hvd1BhZ2U6dHJ1ZSxcbiAgICAgICAgICAgIGlzU2hvd0FycmF5OiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGFkdmFuY2VkU2VhcmNoU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hEYXRhKVxuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaQnOe0ouWGheWuue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBST1ZFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQVBQUk9WRScsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0FQUFJPVkUnKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBST1ZFJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmREYXRlQ2hhbmdlU3RhcnQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DcmVhdGlvblRpbWUuU3RhcnREYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmREYXRlQ2hhbmdlRW5kKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ3JlYXRpb25UaW1lLkVuZERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uS2V5d29yZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEsIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX0FwcHJvdmUgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0FQUFJPVkUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSGlzdG9yeV9LZXlXb3JkX0FwcHJvdmUubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9BcHByb3ZlLnNwbGljZShIaXN0b3J5X0tleVdvcmRfQXBwcm92ZS5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0FwcHJvdmUudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0FwcHJvdmUgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZF9BcHByb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0FQUFJPVkUnLCBIaXN0b3J5X0tleVdvcmRfQXBwcm92ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBzZXJpYWxJZFZhbHVlKHZhbHVlKXtcbiAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5zZXJpYWxJZD12YWx1ZTtcbiAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzZU5hbWVWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY2FzZU5hbWU9dmFsdWU7XG4gICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWVudFVzZXJWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY2xpZW50VXNlcj12YWx1ZTtcbiAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU3RhdHVzSW5kZXgoaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5TdGF0dXM9dGhpcy5TdGF0dXMudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyDliKTmlq3liJ3lp4vljJbljoblj7LmlbDmja5cbiAgICAgICAgaXNIaXN0b3J5KCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9BcHByb3ZlID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBST1ZFJyk7XG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9BcHByb3ZlKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0FwcHJvdmUgPSBbXTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0FQUFJPVkUnLCBIaXN0b3J5X0tleVdvcmRfQXBwcm92ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IEhpc3RvcnlfS2V5V29yZF9BcHByb3ZlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgICBhc3luYyBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMoKXtcbiAgICAgICAgICAgICAgdmFyIHJlc0RhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBJZDogXCJERVNaVFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgIHZhciBzdGF0dXNJdGVtPXJlc0RhdGEuZGF0YS5yZXN1bHRcbiAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIHN0YXR1c0l0ZW0pe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cy52YWx1ZVtpbmRleF09c3RhdHVzSXRlbVtpbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzLmRpc3BsYXlUZXh0W2luZGV4XT1zdGF0dXNJdGVtW2luZGV4XS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmlzSGlzdG9yeSgpO1xuICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMoKVxuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=