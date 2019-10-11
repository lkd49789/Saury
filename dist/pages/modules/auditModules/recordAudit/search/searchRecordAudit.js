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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchRecordAudit = function (_wepy$page) {
    _inherits(searchRecordAudit, _wepy$page);

    function searchRecordAudit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchRecordAudit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchRecordAudit.__proto__ || Object.getPrototypeOf(searchRecordAudit)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            searchData: {
                CreationTime: {
                    EndDate: '',
                    StartDate: ''
                },
                WorkTime: {
                    EndDate: '',
                    StartDate: ''
                }

            },
            //判断是否有数据
            isData: false,
            //类别
            Category: [],
            //工作类别
            WorkType: [],
            showPage: true,
            history_keyWord_case: [],
            searchClentValue: '',
            isShowArray: [],
            startDate: '',
            endDate: '',
            startCreateDate: '',
            endCreateDate: ''
        }, _this.methods = {
            checkboxChangeCategory: function checkboxChangeCategory(e) {
                this.searchData.Category = e.detail.value.toString();
            },
            checkboxChangeWorkType: function checkboxChangeWorkType(e) {
                this.searchData.WorkType = e.detail.value.toString();
                this.$apply();
            },
            bindDateChange: function bindDateChange(e) {
                var date = e.detail.value;
                this.isData = true;
                switch (e.target.id) {
                    case 'startDate':
                        this.startDate = date;
                        this.searchData.WorkTime.StartDate = date;
                        break;
                    case 'endDate':
                        this.endDate = date;
                        this.searchData.WorkTime.EndDate = date;
                        break;
                    case 'startCreateDate':
                        this.startCreateDate = date;
                        this.searchData.CreationTime.StartDate = date;
                        break;
                    case 'endCreateDate':
                        this.endCreateDate = date;
                        this.searchData.CreationTime.EndDate = date;
                        break;
                }
                this.$apply();
            },
            advancedSearchSubmit: function advancedSearchSubmit() {
                if (this.isData || this.searchData.Category || this.searchData.WorkType) {
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_RECORD_AUDIT');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_RECORD_AUDIT', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_RECORD_AUDIT');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_RECORD_AUDIT', history);
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
                            var History_KeyWord_Record_Audit = wx.getStorageSync('HISTORY_KEYWORD_RECORD_AUDIT');
                            if (History_KeyWord_Record_Audit.length >= 20) {
                                History_KeyWord_Record_Audit.splice(History_KeyWord_Record_Audit.length - 1, 1);
                            }
                            History_KeyWord_Record_Audit.unshift(value);
                            History_KeyWord_Record_Audit = (0, _api.myDistinct)(History_KeyWord_Record_Audit);
                            wx.setStorageSync('HISTORY_KEYWORD_RECORD_AUDIT', History_KeyWord_Record_Audit);
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
        }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchRecordAudit, [{
        key: 'GetGeneralCodeComboboxItems',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var data_id, resData, comboboxItemData;
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

                                if (resData.statusCode == 200) {
                                    if (id == 'wlgz') {
                                        comboboxItemData = [];

                                        comboboxItemData = resData.data.result.slice(0, 2);
                                        this.Category = comboboxItemData;
                                    } else {
                                        this.WorkType = resData.data.result;
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

            function GetGeneralCodeComboboxItems(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralCodeComboboxItems;
        }()
        // 判断初始化历史数据

    }, {
        key: 'isHistory',
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_Record_Audit = wx.getStorageSync('HISTORY_KEYWORD_RECORD_AUDIT');
            if (!History_KeyWord_Record_Audit) {
                History_KeyWord_Record_Audit = [];
                wx.setStorageSync('HISTORY_KEYWORD_RECORD_AUDIT', History_KeyWord_Record_Audit);
            } else {
                this.history_keyWord_case = History_KeyWord_Record_Audit;
                for (var index in this.history_keyWord_case) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetGeneralCodeComboboxItems('gz');
            this.GetGeneralCodeComboboxItems('wlgz');
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchRecordAudit;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(searchRecordAudit , 'pages/modules/auditModules/recordAudit/search/searchRecordAudit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFJlY29yZEF1ZGl0LmpzIl0sIm5hbWVzIjpbInNlYXJjaFJlY29yZEF1ZGl0IiwiZGF0YSIsInNlYXJjaERhdGEiLCJDcmVhdGlvblRpbWUiLCJFbmREYXRlIiwiU3RhcnREYXRlIiwiV29ya1RpbWUiLCJpc0RhdGEiLCJDYXRlZ29yeSIsIldvcmtUeXBlIiwic2hvd1BhZ2UiLCJoaXN0b3J5X2tleVdvcmRfY2FzZSIsInNlYXJjaENsZW50VmFsdWUiLCJpc1Nob3dBcnJheSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzdGFydENyZWF0ZURhdGUiLCJlbmRDcmVhdGVEYXRlIiwibWV0aG9kcyIsImNoZWNrYm94Q2hhbmdlQ2F0ZWdvcnkiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ0b1N0cmluZyIsImNoZWNrYm94Q2hhbmdlV29ya1R5cGUiLCIkYXBwbHkiLCJiaW5kRGF0ZUNoYW5nZSIsImRhdGUiLCJ0YXJnZXQiLCJpZCIsImFkdmFuY2VkU2VhcmNoU3VibWl0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsInF1ZXJ5U3RyZWFtIiwicmVmcmVzaCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiZGVsZXRJdGVtQWxsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJyZXBsYWNlIiwiS2V5V29yZCIsIkhpc3RvcnlfS2V5V29yZF9SZWNvcmRfQXVkaXQiLCJ1bnNoaWZ0Iiwid2F0Y2giLCJkYXRhX2lkIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsImNvbWJvYm94SXRlbURhdGEiLCJyZXN1bHQiLCJzbGljZSIsImlzSGlzdG9yeSIsIkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7OztJQUlxQkEsaUI7Ozs7Ozs7Ozs7Ozs7O2dOQUNqQkMsSSxHQUFPO0FBQ0hDLHdCQUFZO0FBQ1JDLDhCQUFhO0FBQ1RDLDZCQUFRLEVBREM7QUFFVEMsK0JBQVU7QUFGRCxpQkFETDtBQUtSQywwQkFBUztBQUNMRiw2QkFBUSxFQURIO0FBRUxDLCtCQUFVO0FBRkw7O0FBTEQsYUFEVDtBQVlIO0FBQ0FFLG9CQUFPLEtBYko7QUFjSDtBQUNBQyxzQkFBUyxFQWZOO0FBZ0JIO0FBQ0FDLHNCQUFTLEVBakJOO0FBa0JIQyxzQkFBVSxJQWxCUDtBQW1CSEMsa0NBQXNCLEVBbkJuQjtBQW9CSEMsOEJBQWtCLEVBcEJmO0FBcUJIQyx5QkFBYSxFQXJCVjtBQXNCSEMsdUJBQVUsRUF0QlA7QUF1QkhDLHFCQUFRLEVBdkJMO0FBd0JIQyw2QkFBZ0IsRUF4QmI7QUF5QkhDLDJCQUFjO0FBekJYLFMsUUEyQlBDLE8sR0FBVTtBQUNOQyxrQ0FETSxrQ0FDaUJDLENBRGpCLEVBQ21CO0FBQ3JCLHFCQUFLbEIsVUFBTCxDQUFnQk0sUUFBaEIsR0FBeUJZLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxRQUFmLEVBQXpCO0FBQ0gsYUFISztBQUlOQyxrQ0FKTSxrQ0FJaUJKLENBSmpCLEVBSW1CO0FBQ3JCLHFCQUFLbEIsVUFBTCxDQUFnQk8sUUFBaEIsR0FBeUJXLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxRQUFmLEVBQXpCO0FBQ0EscUJBQUtFLE1BQUw7QUFDSCxhQVBLO0FBUVBDLDBCQVJPLDBCQVFRTixDQVJSLEVBUVU7QUFD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LGlCQUFaO0FBQ0EsZ0JBQUlDLFdBQVdGLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBRlEsQ0FFZ0M7QUFDeENELHFCQUFTaEMsSUFBVCxDQUFja0MsV0FBZCxHQUE0QixFQUE1QjtBQUNBRixxQkFBU2hDLElBQVQsQ0FBY21DLE9BQWQsR0FBd0IsS0FBeEI7QUFDQSxnQkFBSWdDLCtCQUErQi9CLEdBQUdvQixjQUFILENBQWtCLDhCQUFsQixDQUFuQztBQUNBLGdCQUFJLENBQUNXLDRCQUFMLEVBQW1DO0FBQy9CQSwrQ0FBK0IsRUFBL0I7QUFDQS9CLG1CQUFHcUIsY0FBSCxDQUFrQiw4QkFBbEIsRUFBa0RVLDRCQUFsRDtBQUNILGFBSEQsTUFHTztBQUNILHFCQUFLekQsb0JBQUwsR0FBNEJ5RCw0QkFBNUI7QUFDQSxxQkFBSyxJQUFJUixLQUFULElBQWtCLEtBQUtqRCxvQkFBdkIsRUFBNkM7QUFDekMseUJBQUtFLFdBQUwsQ0FBaUIrQyxLQUFqQixJQUEwQixLQUExQjtBQUNIO0FBQ0o7QUFDRCxpQkFBS25DLE1BQUw7QUFDSDs7O2lDQUNRO0FBQ0wsaUJBQUtzRCxTQUFMO0FBQ0EsaUJBQUtDLDJCQUFMLENBQWlDLElBQWpDO0FBQ0EsaUJBQUtBLDJCQUFMLENBQWlDLE1BQWpDO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBcE1nQ0MsZUFBS0MsSTs7a0JBQS9CbEYsaUIiLCJmaWxlIjoic2VhcmNoUmVjb3JkQXVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQge1xuICAgICAgICBteURpc3RpbmN0XG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoUmVjb3JkQXVkaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge1xuICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZTp7XG4gICAgICAgICAgICAgICAgICAgIEVuZERhdGU6JycsXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0RGF0ZTonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgV29ya1RpbWU6e1xuICAgICAgICAgICAgICAgICAgICBFbmREYXRlOicnLFxuICAgICAgICAgICAgICAgICAgICBTdGFydERhdGU6JydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmnInmlbDmja5cbiAgICAgICAgICAgIGlzRGF0YTpmYWxzZSxcbiAgICAgICAgICAgIC8v57G75YirXG4gICAgICAgICAgICBDYXRlZ29yeTpbXSxcbiAgICAgICAgICAgIC8v5bel5L2c57G75YirXG4gICAgICAgICAgICBXb3JrVHlwZTpbXSxcbiAgICAgICAgICAgIHNob3dQYWdlOiB0cnVlLFxuICAgICAgICAgICAgaGlzdG9yeV9rZXlXb3JkX2Nhc2U6IFtdLFxuICAgICAgICAgICAgc2VhcmNoQ2xlbnRWYWx1ZTogJycsXG4gICAgICAgICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgICAgICAgICBzdGFydERhdGU6JycsXG4gICAgICAgICAgICBlbmREYXRlOicnLFxuICAgICAgICAgICAgc3RhcnRDcmVhdGVEYXRlOicnLFxuICAgICAgICAgICAgZW5kQ3JlYXRlRGF0ZTonJyxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoZWNrYm94Q2hhbmdlQ2F0ZWdvcnkoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNhdGVnb3J5PWUuZGV0YWlsLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tib3hDaGFuZ2VXb3JrVHlwZShlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuV29ya1R5cGU9ZS5kZXRhaWwudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICB2YXIgZGF0ZT1lLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhPXRydWU7XG4gICAgICAgICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgY2FzZSAnc3RhcnREYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGU9ZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLldvcmtUaW1lLlN0YXJ0RGF0ZT1kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICBjYXNlICdlbmREYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5Xb3JrVGltZS5FbmREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0Q3JlYXRlRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDcmVhdGVEYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DcmVhdGlvblRpbWUuU3RhcnREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZENyZWF0ZURhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZENyZWF0ZURhdGU9ZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNyZWF0aW9uVGltZS5FbmREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgYWR2YW5jZWRTZWFyY2hTdWJtaXQoKSB7XG4gICAgICAgICAgICAgICBpZih0aGlzLmlzRGF0YXx8IHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeXx8dGhpcy5zZWFyY2hEYXRhLldvcmtUeXBlKXtcbiAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbSA9IHRoaXMuc2VhcmNoRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5rKh5pyJ5pCc57Si5YaF5a6577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNPUkRfQVVESVQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNPUkRfQVVESVQnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNPUkRfQVVESVQnKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNPUkRfQVVESVQnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb25nVGFwKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheSA9IHRoaXMuaXNTaG93QXJyYXkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaXN0b3J5KGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaENsZW50VmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0U2VhcmNoKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlLmRldGFpbC52YWx1ZS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbS5LZXlXb3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfUmVjb3JkX0F1ZGl0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNPUkRfQVVESVQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSGlzdG9yeV9LZXlXb3JkX1JlY29yZF9BdWRpdC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX1JlY29yZF9BdWRpdC5zcGxpY2UoSGlzdG9yeV9LZXlXb3JkX1JlY29yZF9BdWRpdC5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX1JlY29yZF9BdWRpdC51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfUmVjb3JkX0F1ZGl0ID0gbXlEaXN0aW5jdChIaXN0b3J5X0tleVdvcmRfUmVjb3JkX0F1ZGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ09SRF9BVURJVCcsIEhpc3RvcnlfS2V5V29yZF9SZWNvcmRfQXVkaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aQnOe0ouS4uuepuizor7fph43or5XvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge307XG4gICAgICAgIGFzeW5jICBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMoaWQpe1xuICAgICAgICAgICAgdmFyIGRhdGFfaWQ9e1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YT0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zJyxcbiAgICAgICAgICAgICAgICAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YV9pZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgIGlmKGlkPT0nd2xneicpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tYm9ib3hJdGVtRGF0YT1bXTtcbiAgICAgICAgICAgICAgICAgICAgY29tYm9ib3hJdGVtRGF0YT1yZXNEYXRhLmRhdGEucmVzdWx0LnNsaWNlKDAsMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnk9Y29tYm9ib3hJdGVtRGF0YTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Xb3JrVHlwZT1yZXNEYXRhLmRhdGEucmVzdWx0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfUmVjb3JkX0F1ZGl0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNPUkRfQVVESVQnKTtcbiAgICAgICAgICAgIGlmICghSGlzdG9yeV9LZXlXb3JkX1JlY29yZF9BdWRpdCkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9SZWNvcmRfQXVkaXQgPSBbXTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ09SRF9BVURJVCcsIEhpc3RvcnlfS2V5V29yZF9SZWNvcmRfQXVkaXQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBIaXN0b3J5X0tleVdvcmRfUmVjb3JkX0F1ZGl0O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XG4gICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcygnZ3onKTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCd3bGd6Jyk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==