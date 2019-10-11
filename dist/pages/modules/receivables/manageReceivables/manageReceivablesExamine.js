'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

var _mixin = require('./../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _api = require('./../../../../utils/cofig/api.js');

var _pickerDate = require('./../../../../components/picker/pickerDate.js');

var _pickerDate2 = _interopRequireDefault(_pickerDate);

var _pickerOption = require('./../../../../components/picker/pickerOption.js');

var _pickerOption2 = _interopRequireDefault(_pickerOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var manageReceivablesExamine = function (_wepy$page) {
    _inherits(manageReceivablesExamine, _wepy$page);

    function manageReceivablesExamine() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, manageReceivablesExamine);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = manageReceivablesExamine.__proto__ || Object.getPrototypeOf(manageReceivablesExamine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "acceptDateRange": { "v-bind:pickerData.once": "acceptDateRange", "v-bind:twoWayTitle.once": "acceptDateRange" }, "organizationUnitId": { "v-bind:options.sync": "organizationUnitId", "v-bind:index.sync": "organizationUnitIdIndex", "v-bind:twoWayTitle.once": "organizationUnitIdIndex" }, "category": { "v-bind:options.sync": "category", "v-bind:index.sync": "categoryIndex", "v-bind:twoWayTitle.once": "categoryIndex" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            acceptDateRange: _pickerDate2.default,
            organizationUnitId: _pickerOption2.default,
            category: _pickerOption2.default
        }, _this.mixins = [_mixin2.default], _this.data = {
            acceptDateRange: {
                title: '收案时间',
                startDateData: '',
                endDateData: ''
            },
            organizationUnitId: {
                title: '组织结构',
                key: 'displayName',
                name: 'organizationUnitId',
                data: [],
                warning: false
            },
            organizationUnitIdIndex: -1,
            category: {
                title: '案件类别',
                key: 'displayText',
                name: 'category',
                data: [],
                warning: false
            },
            categoryIndex: -1,
            searchData: {},
            myinvoice: [],
            pageNumber: 1,
            totalCount: 0,
            currentTab: 0,
            searchClentValue: '',
            isShowPage: false
        }, _this.methods = {
            submitData: function submitData() {
                this.myinvoice = [];
                this.pageNumber = 1;
                this.getbill();
            },
            isShowPage: function isShowPage() {
                this.isShowPage = !this.isShowPage;
                this.$apply();
            },
            submitSearch: function submitSearch(e) {
                this.pageNumber = 1;
                this.myinvoice = [];
                var searchKeys = e.detail.value;
                this.searchClentValue = searchKeys;
                this.getbill(searchKeys);
                this.$apply();
            },
            into: function into(item) {
                var pages = getCurrentPages();
                var prevPage = pages[pages.length - 2]; //上一个页面
                // this.searchData.keyWord = value;
                if (prevPage) {
                    prevPage.isRefresh(item);
                }
                wx.navigateBack({
                    delta: 1
                });
            }
        }, _this.watch = {
            acceptDateRange: function acceptDateRange(data) {
                if (!this.searchData.acceptDateRange) {
                    this.searchData.acceptDateRange = {};
                }
                this.searchData.acceptDateRange.startDate = data.startDateData;
                this.searchData.acceptDateRange.endDate = data.endDateData;
                this.$apply();
            },
            organizationUnitIdIndex: function organizationUnitIdIndex(index) {
                this.searchData.organizationUnitId = this.organizationUnitId.data[index].id;
                this.$apply();
            },
            categoryIndex: function categoryIndex(index) {
                this.searchData.category = this.category.data[index].value;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(manageReceivablesExamine, [{
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.getbill(this.state);
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
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.myinvoice = [];
            this.searchClentValue = '';
            this.pageNumber = 1;
            this.getbill();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        //获取数据

    }, {
        key: 'getbill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filter) {
                var _this2 = this;

                var filters, argData, resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        _this2.isShowPage = false;
                                        _this2.searchData = {};
                                        _this2.$apply();
                                    }
                                });
                                filters = filter || this.searchClentValue;
                                argData = {
                                    category: null,
                                    filter: filters,
                                    hasClosingCase: false,
                                    isCurrentUser: true,
                                    organizationUnitId: null,
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    status: "A",
                                    acceptDateRange: null
                                };

                                if (Object.keys(this.searchData).length > 0) {
                                    argData.category = this.searchData.category || '';
                                    argData.organizationUnitId = this.searchData.organizationUnitId || '';
                                    argData.acceptDateRange = this.searchData.acceptDateRange || '';
                                }
                                _context.next = 6;
                                return _ajax2.default.getData('/api/services/web/common/GetCases', 'post', argData);

                            case 6:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 10 : _context.t0 === 403 ? 13 : _context.t0 === 500 ? 18 : 22;
                                break;

                            case 10:
                                if (resData.data.result.items.length !== 0) {
                                    this.myinvoice = this.myinvoice.concat(resData.data.result.items);
                                    this.totalCount = resData.data.result.totalCount;
                                    this.placeHolder.placeHolderShow = false;
                                    this.$apply();
                                } else {
                                    console.log('数据为空');
                                    this.myinvoice = [];
                                    this.placeHolder.placeHolderImageIndex = 0;
                                    this.placeHolder.placeHolderShow = true;
                                }
                                this.$apply();
                                return _context.abrupt('break', 23);

                            case 13:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 23);

                            case 18:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 22:
                                return _context.abrupt('break', 23);

                            case 23:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getbill(_x) {
                return _ref2.apply(this, arguments);
            }

            return getbill;
        }()
    }, {
        key: 'GetOrganizations',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetOrganizations', 'post', {});

                            case 2:
                                resData = _context2.sent;

                                console.log(resData);
                                if (resData.statusCode == 200) {
                                    this.organizationUnitId.data = resData.data.result;
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: '网络出现问题！', //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetOrganizations() {
                return _ref3.apply(this, arguments);
            }

            return GetOrganizations;
        }()
    }, {
        key: 'GetCaseCategoryComboboxItems',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetCaseCategoryComboboxItems', 'post', {});

                            case 2:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    this.category.data = resData.data.result;
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: '网络出现问题！', //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetCaseCategoryComboboxItems() {
                return _ref4.apply(this, arguments);
            }

            return GetCaseCategoryComboboxItems;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.getbill();
            this.GetOrganizations();
            this.GetCaseCategoryComboboxItems();
        }
    }]);

    return manageReceivablesExamine;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(manageReceivablesExamine , 'pages/modules/receivables/manageReceivables/manageReceivablesExamine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZVJlY2VpdmFibGVzRXhhbWluZS5qcyJdLCJuYW1lcyI6WyJtYW5hZ2VSZWNlaXZhYmxlc0V4YW1pbmUiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2VIb2xkZXJJbWFnZSIsImFjY2VwdERhdGVSYW5nZSIsIm9yZ2FuaXphdGlvblVuaXRJZCIsImNhdGVnb3J5IiwibWl4aW5zIiwiZGF0YSIsInRpdGxlIiwic3RhcnREYXRlRGF0YSIsImVuZERhdGVEYXRhIiwia2V5IiwibmFtZSIsIndhcm5pbmciLCJvcmdhbml6YXRpb25Vbml0SWRJbmRleCIsImNhdGVnb3J5SW5kZXgiLCJzZWFyY2hEYXRhIiwibXlpbnZvaWNlIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJjdXJyZW50VGFiIiwic2VhcmNoQ2xlbnRWYWx1ZSIsImlzU2hvd1BhZ2UiLCJtZXRob2RzIiwic3VibWl0RGF0YSIsImdldGJpbGwiLCIkYXBwbHkiLCJzdWJtaXRTZWFyY2giLCJlIiwic2VhcmNoS2V5cyIsImRldGFpbCIsInZhbHVlIiwiaW50byIsIml0ZW0iLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwiaXNSZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIndhdGNoIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImluZGV4IiwiaWQiLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInN0YXRlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJmaWx0ZXIiLCJzaG93TG9hZGluZyIsInN1Y2Nlc3MiLCJmaWx0ZXJzIiwiYXJnRGF0YSIsImhhc0Nsb3NpbmdDYXNlIiwiaXNDdXJyZW50VXNlciIsInBhZ2VTaXplIiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImNvbmNhdCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJTaG93IiwiY29uc29sZSIsImxvZyIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsIkdldE9yZ2FuaXphdGlvbnMiLCJHZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHdCOzs7Ozs7Ozs7Ozs7Ozs4TkFDakJDLE0sR0FBUztBQUNMQyxtQ0FBdUIsSUFEbEI7QUFFTEMsaUNBQXFCLE1BRmhCO0FBR0xDLGdDQUFvQixTQUhmO0FBSUxDLG1DQUF1QjtBQUpsQixTLFFBTVZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwyQkFBMEIsYUFBN0MsRUFBMkQsMkJBQTBCLGFBQXJGLEVBQXBCLEVBQXdILG1CQUFrQixFQUFDLDBCQUF5QixpQkFBMUIsRUFBNEMsMkJBQTBCLGlCQUF0RSxFQUExSSxFQUFtTyxzQkFBcUIsRUFBQyx1QkFBc0Isb0JBQXZCLEVBQTRDLHFCQUFvQix5QkFBaEUsRUFBMEYsMkJBQTBCLHlCQUFwSCxFQUF4UCxFQUF1WSxZQUFXLEVBQUMsdUJBQXNCLFVBQXZCLEVBQWtDLHFCQUFvQixlQUF0RCxFQUFzRSwyQkFBMEIsZUFBaEcsRUFBbFosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsd0RBREU7QUFFRkMsaURBRkU7QUFHRkMsc0RBSEU7QUFJRkM7QUFKRSxTLFFBTU5D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LEVBSGMsQzs7O0FBQWRDLHVDOztBQUtKLG9DQUFHQSxRQUFRQyxVQUFSLElBQW9CLEdBQXZCLEVBQTJCO0FBQ3ZCLHlDQUFLbEUsUUFBTCxDQUFjRSxJQUFkLEdBQW1CK0QsUUFBUS9ELElBQVIsQ0FBYWlFLE1BQWhDO0FBQ0EseUNBQUs5QyxNQUFMO0FBQ0gsaUNBSEQsTUFHSztBQUNEYSx1Q0FBR1ksU0FBSCxDQUFhO0FBQ1gzQywrQ0FBTyxTQURJLEVBQ087QUFDbEI0Qyw4Q0FBTSxNQUZLLEVBRUc7QUFDZEMsa0RBQVUsSUFIQyxFQUdLO0FBQ2hCQyw4Q0FBTSxLQUpLLEVBSUU7QUFDYkssaURBQVMsc0JBQU8sQ0FBRTtBQUxQLHFDQUFiO0FBT0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFSTtBQUNMLGlCQUFLbEMsT0FBTDtBQUNBLGlCQUFLdUQsZ0JBQUw7QUFDQSxpQkFBS0MsNEJBQUw7QUFDSDs7OztFQXhPaURDLGVBQUtDLEk7O2tCQUF0QzNGLHdCIiwiZmlsZSI6Im1hbmFnZVJlY2VpdmFibGVzRXhhbWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcclxuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XHJcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgZm9ybWF0VGltZVxyXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xyXG4gICAgaW1wb3J0IGFjY2VwdERhdGVSYW5nZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJEYXRlJ1xyXG4gICAgaW1wb3J0IG9yZ2FuaXphdGlvblVuaXRJZCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nXHJcbiAgICBpbXBvcnQgY2F0ZWdvcnkgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvcGlja2VyT3B0aW9uJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWFuYWdlUmVjZWl2YWJsZXNFeGFtaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGxhY2VIb2xkZXJJbWFnZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwbGFjZUhvbGRlclwifSxcImFjY2VwdERhdGVSYW5nZVwiOntcInYtYmluZDpwaWNrZXJEYXRhLm9uY2VcIjpcImFjY2VwdERhdGVSYW5nZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImFjY2VwdERhdGVSYW5nZVwifSxcIm9yZ2FuaXphdGlvblVuaXRJZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIm9yZ2FuaXphdGlvblVuaXRJZFwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIm9yZ2FuaXphdGlvblVuaXRJZEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwib3JnYW5pemF0aW9uVW5pdElkSW5kZXhcIn0sXCJjYXRlZ29yeVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImNhdGVnb3J5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiY2F0ZWdvcnlJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNhdGVnb3J5SW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlLFxyXG4gICAgICAgICAgICBhY2NlcHREYXRlUmFuZ2UsXHJcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvblVuaXRJZCxcclxuICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYWNjZXB0RGF0ZVJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtuahiOaXtumXtCcsXHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGVEYXRhOiAnJyxcclxuICAgICAgICAgICAgICAgIGVuZERhdGVEYXRhOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgb3JnYW5pemF0aW9uVW5pdElkOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e7hOe7h+e7k+aehCcsXHJcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5TmFtZScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3JnYW5pemF0aW9uVW5pdElkJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uVW5pdElkSW5kZXg6IC0xLFxyXG4gICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qGI5Lu257G75YirJyxcclxuICAgICAgICAgICAgICAgIGtleTogJ2Rpc3BsYXlUZXh0JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SW5kZXg6IC0xLFxyXG4gICAgICAgICAgICBzZWFyY2hEYXRhOiB7fSxcclxuICAgICAgICAgICAgbXlpbnZvaWNlOiBbXSxcclxuICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcclxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcclxuICAgICAgICAgICAgY3VycmVudFRhYjogMCxcclxuICAgICAgICAgICAgc2VhcmNoQ2xlbnRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGlzU2hvd1BhZ2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBzdWJtaXREYXRhKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZT1bXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcj0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzU2hvd1BhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd1BhZ2UgPSAhdGhpcy5pc1Nob3dQYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWl0U2VhcmNoKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaEtleXMgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2xlbnRWYWx1ZSA9IHNlYXJjaEtleXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoc2VhcmNoS2V5cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRvKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlYXJjaERhdGEua2V5V29yZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgICAgIGFjY2VwdERhdGVSYW5nZShkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoRGF0YS5hY2NlcHREYXRlUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuYWNjZXB0RGF0ZVJhbmdlID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuYWNjZXB0RGF0ZVJhbmdlLnN0YXJ0RGF0ZSA9IGRhdGEuc3RhcnREYXRlRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5hY2NlcHREYXRlUmFuZ2UuZW5kRGF0ZSA9IGRhdGEuZW5kRGF0ZURhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmdhbml6YXRpb25Vbml0SWRJbmRleChpbmRleCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEub3JnYW5pemF0aW9uVW5pdElkPXRoaXMub3JnYW5pemF0aW9uVW5pdElkLmRhdGFbaW5kZXhdLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJbmRleChpbmRleCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY2F0ZWdvcnk9dGhpcy5jYXRlZ29yeS5kYXRhW2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2xlbnRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmdldGJpbGwoKTtcclxuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XHJcbiAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bmlbDmja5cclxuICAgICAgICBhc3luYyBnZXRiaWxsKGZpbHRlcikge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dQYWdlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGE9e307XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGZpbHRlcnMgPSBmaWx0ZXIgfHwgdGhpcy5zZWFyY2hDbGVudFZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgYXJnRGF0YT17XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVycyxcclxuICAgICAgICAgICAgICAgIGhhc0Nsb3NpbmdDYXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzQ3VycmVudFVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb25Vbml0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiQVwiLFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0RGF0ZVJhbmdlOm51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5zZWFyY2hEYXRhKS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBhcmdEYXRhLmNhdGVnb3J5PXRoaXMuc2VhcmNoRGF0YS5jYXRlZ29yeXx8Jyc7XHJcbiAgICAgICAgICAgICAgICBhcmdEYXRhLm9yZ2FuaXphdGlvblVuaXRJZD10aGlzLnNlYXJjaERhdGEub3JnYW5pemF0aW9uVW5pdElkfHwnJztcclxuICAgICAgICAgICAgICAgIGFyZ0RhdGEuYWNjZXB0RGF0ZVJhbmdlPXRoaXMuc2VhcmNoRGF0YS5hY2NlcHREYXRlUmFuZ2V8fCcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRDYXNlcycsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsYXJnRGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gdGhpcy5teWludm9pY2UuY29uY2F0KHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruS4uuepuicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgR2V0T3JnYW5pemF0aW9ucygpe1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldE9yZ2FuaXphdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmdhbml6YXRpb25Vbml0SWQuZGF0YT1yZXNEYXRhLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOWHuueOsOmXrumimO+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXHJcbiAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBHZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zKCl7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0Q2FzZUNhdGVnb3J5Q29tYm9ib3hJdGVtcycsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICB7fVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkuZGF0YT1yZXNEYXRhLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOWHuueOsOmXrumimO+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXHJcbiAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLkdldE9yZ2FuaXphdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuIl19