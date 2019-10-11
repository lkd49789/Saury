'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _navbar = require('./../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var conflictRetrievalList = function (_wepy$page) {
    _inherits(conflictRetrievalList, _wepy$page);

    function conflictRetrievalList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, conflictRetrievalList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = conflictRetrievalList.__proto__ || Object.getPrototypeOf(conflictRetrievalList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            currentTab: 0,
            navbars: ['待检索', '已检索'],
            placeHolderImage: '../../../images/noData.png',
            caseChecksData: [],
            pageSize: 10,
            pageNumber: 1,
            totalCount: 0,
            queryStream: {},
            isDialog: false,
            remarkValue: '',
            TextCount: 0,
            isFilterBox: false,
            caseChecksDataIndex: 0,
            status: '0',
            sorting: ''
        }, _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            navbar: _navbar2.default
        }, _this.methods = {
            //筛选
            filter: function filter(KeyWord) {
                this.isFilterBox = false;
                this.caseChecksData = [];
                this.pageNumber = 1;
                switch (KeyWord) {
                    case 'cteateTime':
                        this.sorting = 'CreationTime desc';
                        this.GetCaseChecks();
                        break;
                    case 'completeTime':
                        this.sorting = 'AcceptDate desc';
                        this.GetCaseChecks();
                        break;
                    case 'AcceptDate':
                        this.sorting = 'AcceptDate desc';
                        this.GetCaseChecks();
                        break;
                    default:
                        break;
                }
                this.$apply();
            },

            //控制筛选是否显示
            isShowFilter: function isShowFilter() {
                this.isFilterBox = !this.isFilterBox;
                this.$apply();
            },

            //前往搜索页面
            toSearch: function toSearch() {
                wx.navigateTo({ url: './search/conflictSearch' });
            },

            // 提交退回信息
            subReturnRemark: function subReturnRemark() {
                var caseId = this.caseChecksData[this.caseChecksDataIndex].caseId;
                var id = this.caseChecksData[this.caseChecksDataIndex].id;
                this.ProcessOrderItem(caseId, id);
            },

            //退回备注
            bindinput: function bindinput(e) {
                this.remarkValue = e.detail.value;
                this.$apply();
            },
            closeDialog: function closeDialog() {
                this.isDialog = false;
                this.$apply();
            },
            operations: function operations(item, caseChecksDataIndex) {
                var _this2 = this;

                var opition = item.operations.map(function (item) {
                    return item.text;
                });
                wx.showActionSheet({
                    itemList: opition, //按钮的文字数组，数组长度最大为6个,
                    //   itemColor: '#000000', //按钮的文字颜色,
                    success: function success(res) {
                        switch (res.tapIndex) {
                            case 0:
                                switch (item.operations[0].className) {
                                    case 'Check':
                                        wx.navigateTo({
                                            url: './conflictRetrievalAudit/conflictRetrievalDetail?id=' + item.id + '&caseId=' + item.caseId
                                        });
                                        break;
                                    case 'Return':
                                        _this2.isDialog = !_this2.isDialog;
                                        _this2.caseChecksDataIndex = caseChecksDataIndex;
                                        break;
                                    case 'View':
                                        wx.navigateTo({
                                            url: './auditedResults/auditedResults?id=' + item.id + '&caseId=' + item.caseId
                                        });
                                        break;
                                    default:
                                        break;
                                }
                                break;
                            case 1:
                                if (item.operations[1].className == 'Check') {
                                    wx.navigateTo({
                                        url: './conflictRetrievalAudit/conflictRetrievalDetail?id=' + item.id + '&caseId=' + item.caseId
                                    });
                                } else if (item.operations[1].className == 'Return') {
                                    _this2.isDialog = !_this2.isDialog;
                                    _this2.caseChecksDataIndex = caseChecksDataIndex;
                                }
                                break;
                        }
                        _this2.$apply();
                    }
                });
            }
        }, _this.events = {}, _this.watch = {
            currentTab: function currentTab(cur) {
                if (cur == 0) {
                    this.status = '0';
                } else if (cur == 1) {
                    this.status = '1';
                }
                this.caseChecksData = [];
                this.pageNumber = 1;
                this.GetCaseChecks();
                this.$apply();
            },
            remarkValue: function remarkValue(value) {
                this.TextCount = value.length;
                this.$apply();
            },
            isDialog: function isDialog(value) {
                if (!value) {
                    this.remarkValue = '';
                }
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(conflictRetrievalList, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.caseChecksData = [];
            this.pageNumber = 1;
            this.queryStream = {};
            this.sorting = '';
            this.GetCaseChecks();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.GetCaseChecks();
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
    }, {
        key: 'GetCaseChecks',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, _caseChecksData, caseChecksData;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                data = {
                                    CaseCategory: "",
                                    CaseName: "",
                                    ClientName: "",
                                    EndDate: "",
                                    KeyWord: "",
                                    StartDate: "",
                                    Status: this.status,
                                    pageNumber: this.pageNumber,
                                    pageSize: this.pageSize,
                                    sorting: this.sorting
                                };

                                if (Object.keys(this.queryStream).length > 0) {
                                    data.CaseCategory = this.queryStream.CaseCategory;
                                    data.CaseName = this.queryStream.CaseName;
                                    data.ClientName = this.queryStream.ClientName;
                                    data.EndDate = this.queryStream.EndDate;
                                    data.KeyWord = this.queryStream.KeyWord;
                                    data.StartDate = this.queryStream.StartDate;
                                }
                                _context.next = 5;
                                return _ajax2.default.getData('/api/services/web/caseCheck/GetCaseChecks', 'post', data);

                            case 5:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    caseChecksData = resData.data.result.items;

                                    this.totalCount = resData.data.result.totalCount;
                                    (_caseChecksData = this.caseChecksData).push.apply(_caseChecksData, _toConsumableArray(caseChecksData));
                                }
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseChecks() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseChecks;
        }()
    }, {
        key: 'ProcessOrderItem',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(caseId, id) {
                var _this3 = this;

                var data, resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        _this3.caseChecksData = [];
                                        _this3.pageNumber = 1;
                                        _this3.queryStream = {};
                                        _this3.isDialog = false;
                                        _this3.GetCaseChecks();
                                        _this3.$apply();
                                    }
                                });
                                data = {
                                    caseId: caseId,
                                    checkResults: [],
                                    id: id,
                                    remark: this.remarkValue,
                                    result: "ConflictReturn"
                                };
                                _context2.next = 4;
                                return _ajax2.default.getData('/api/services/web/caseCheck/ProcessOrderItem', 'post', data);

                            case 4:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    console.log('退回完成');
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function ProcessOrderItem(_x, _x2) {
                return _ref3.apply(this, arguments);
            }

            return ProcessOrderItem;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetCaseChecks();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh(searchData) {
            if (searchData) {
                this.queryStream = searchData;
            }
            this.caseChecksData = [];
            this.pageNumber = 1;
            this.GetCaseChecks();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var pages = getCurrentPages(); //获取当前页面信息栈
            var prevPage = pages[pages.length - 1]; //获取上一个页面信息栈
            if (prevPage.data.refresh) {
                this.queryStream = prevPage.data.queryStream;
                prevPage.data.refresh = false;
                this.caseChecksData = [];
                this.pageNumber = 1;
                this.GetCaseChecks();
            }
        }
    }]);

    return conflictRetrievalList;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(conflictRetrievalList , 'pages/modules/conflictRetrieval/conflictRetrievalList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0UmV0cmlldmFsTGlzdC5qcyJdLCJuYW1lcyI6WyJjb25mbGljdFJldHJpZXZhbExpc3QiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJuYXZiYXJzIiwicGxhY2VIb2xkZXJJbWFnZSIsImNhc2VDaGVja3NEYXRhIiwicGFnZVNpemUiLCJwYWdlTnVtYmVyIiwidG90YWxDb3VudCIsInF1ZXJ5U3RyZWFtIiwiaXNEaWFsb2ciLCJyZW1hcmtWYWx1ZSIsIlRleHRDb3VudCIsImlzRmlsdGVyQm94IiwiY2FzZUNoZWNrc0RhdGFJbmRleCIsInN0YXR1cyIsInNvcnRpbmciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJuYXZiYXIiLCJtZXRob2RzIiwiZmlsdGVyIiwiS2V5V29yZCIsIkdldENhc2VDaGVja3MiLCIkYXBwbHkiLCJpc1Nob3dGaWx0ZXIiLCJ0b1NlYXJjaCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInN1YlJldHVyblJlbWFyayIsImNhc2VJZCIsImlkIiwiUHJvY2Vzc09yZGVySXRlbSIsImJpbmRpbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNsb3NlRGlhbG9nIiwib3BlcmF0aW9ucyIsIml0ZW0iLCJvcGl0aW9uIiwibWFwIiwidGV4dCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0Iiwic3VjY2VzcyIsInJlcyIsInRhcEluZGV4IiwiY2xhc3NOYW1lIiwiZXZlbnRzIiwid2F0Y2giLCJjdXIiLCJsZW5ndGgiLCJjb21wdXRlZCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInNob3dMb2FkaW5nIiwiQ2FzZUNhdGVnb3J5IiwiQ2FzZU5hbWUiLCJDbGllbnROYW1lIiwiRW5kRGF0ZSIsIlN0YXJ0RGF0ZSIsIlN0YXR1cyIsIk9iamVjdCIsImtleXMiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiaXRlbXMiLCJwdXNoIiwiY2hlY2tSZXN1bHRzIiwicmVtYXJrIiwiY29uc29sZSIsImxvZyIsInNlYXJjaERhdGEiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicmVmcmVzaCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLHFCOzs7Ozs7Ozs7Ozs7Ozt3TkFDakJDLE0sR0FBUztBQUNMQyxtQ0FBdUIsSUFEbEI7QUFFTEMsaUNBQXFCLE1BRmhCO0FBR0xDLGdDQUFvQixTQUhmO0FBSUxDLG1DQUF1QjtBQUpsQixTLFFBTVRDLEksR0FBTztBQUNIQyx3QkFBWSxDQURUO0FBRUhDLHFCQUFTLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FGTjtBQUdIQyw4QkFBa0IsNEJBSGY7QUFJSEMsNEJBQWdCLEVBSmI7QUFLSEMsc0JBQVUsRUFMUDtBQU1IQyx3QkFBWSxDQU5UO0FBT0hDLHdCQUFZLENBUFQ7QUFRSEMseUJBQWEsRUFSVjtBQVNIQyxzQkFBVSxLQVRQO0FBVUhDLHlCQUFhLEVBVlY7QUFXSEMsdUJBQVcsQ0FYUjtBQVlIQyx5QkFBWSxLQVpUO0FBYUhDLGlDQUFxQixDQWJsQjtBQWNIQyxvQkFBUSxHQWRMO0FBZUhDLHFCQUFRO0FBZkwsUyxRQWlCUkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUFWLEUsUUFD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QUNKOzs7O0VBN1E4Q21FLGVBQUtDLEk7O2tCQUFuQ2xHLHFCIiwiZmlsZSI6ImNvbmZsaWN0UmV0cmlldmFsTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbmZsaWN0UmV0cmlldmFsTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclRvcDogJyNmNGY0ZjQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwLFxuICAgICAgICAgICAgbmF2YmFyczogWyflvoXmo4DntKInLCAn5bey5qOA57SiJ10sXG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL25vRGF0YS5wbmcnLFxuICAgICAgICAgICAgY2FzZUNoZWNrc0RhdGE6IFtdLFxuICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXG4gICAgICAgICAgICBpc0RpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICByZW1hcmtWYWx1ZTogJycsXG4gICAgICAgICAgICBUZXh0Q291bnQ6IDAsXG4gICAgICAgICAgICBpc0ZpbHRlckJveDpmYWxzZSxcbiAgICAgICAgICAgIGNhc2VDaGVja3NEYXRhSW5kZXg6IDAsXG4gICAgICAgICAgICBzdGF0dXM6ICcwJyxcbiAgICAgICAgICAgIHNvcnRpbmc6JycsXG4gICAgICAgIH07XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJuYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdmJhcnMub25jZVwiOlwibmF2YmFyc1wiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvL+etm+mAiVxuICAgICAgICAgICAgZmlsdGVyKEtleVdvcmQpe1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaWx0ZXJCb3g9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tzRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChLZXlXb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N0ZWF0ZVRpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0aW5nPSdDcmVhdGlvblRpbWUgZGVzYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VDaGVja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb21wbGV0ZVRpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0aW5nPSdBY2NlcHREYXRlIGRlc2MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ2hlY2tzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQWNjZXB0RGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRpbmc9J0FjY2VwdERhdGUgZGVzYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VDaGVja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/mjqfliLbnrZvpgInmmK/lkKbmmL7npLpcbiAgICAgICAgICAgIGlzU2hvd0ZpbHRlcigpe1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaWx0ZXJCb3g9IXRoaXMuaXNGaWx0ZXJCb3g7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+WJjeW+gOaQnOe0oumhtemdolxuICAgICAgICAgICAgdG9TZWFyY2goKXtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9zZWFyY2gvY29uZmxpY3RTZWFyY2gnIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOaPkOS6pOmAgOWbnuS/oeaBr1xuICAgICAgICAgICAgc3ViUmV0dXJuUmVtYXJrKCkge1xuICAgICAgICAgICAgICAgIHZhciBjYXNlSWQgPSB0aGlzLmNhc2VDaGVja3NEYXRhW3RoaXMuY2FzZUNoZWNrc0RhdGFJbmRleF0uY2FzZUlkXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gdGhpcy5jYXNlQ2hlY2tzRGF0YVt0aGlzLmNhc2VDaGVja3NEYXRhSW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgdGhpcy5Qcm9jZXNzT3JkZXJJdGVtKGNhc2VJZCwgaWQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/pgIDlm57lpIfms6hcbiAgICAgICAgICAgIGJpbmRpbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1hcmtWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VEaWFsb2coKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RpYWxvZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlcmF0aW9ucyhpdGVtLCBjYXNlQ2hlY2tzRGF0YUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIG9waXRpb24gPSBpdGVtLm9wZXJhdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MaXN0OiBvcGl0aW9uLCAvL+aMiemSrueahOaWh+Wtl+aVsOe7hO+8jOaVsOe7hOmVv+W6puacgOWkp+S4ujbkuKosXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaXRlbUNvbG9yOiAnIzAwMDAwMCcsIC8v5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5vcGVyYXRpb25zWzBdLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ2hlY2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NvbmZsaWN0UmV0cmlldmFsQXVkaXQvY29uZmxpY3RSZXRyaWV2YWxEZXRhaWw/aWQ9JyArIGl0ZW0uaWQgKyAnJmNhc2VJZD0nICsgaXRlbS5jYXNlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1JldHVybic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RpYWxvZyA9ICF0aGlzLmlzRGlhbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tzRGF0YUluZGV4ID0gY2FzZUNoZWNrc0RhdGFJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ZpZXcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2F1ZGl0ZWRSZXN1bHRzL2F1ZGl0ZWRSZXN1bHRzP2lkPScgKyBpdGVtLmlkKyAnJmNhc2VJZD0nICsgaXRlbS5jYXNlSWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ub3BlcmF0aW9uc1sxXS5jbGFzc05hbWUgPT0gJ0NoZWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9jb25mbGljdFJldHJpZXZhbEF1ZGl0L2NvbmZsaWN0UmV0cmlldmFsRGV0YWlsP2lkPScgKyBpdGVtLmlkICsgJyZjYXNlSWQ9JyArIGl0ZW0uY2FzZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLm9wZXJhdGlvbnNbMV0uY2xhc3NOYW1lID09ICdSZXR1cm4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGlhbG9nID0gIXRoaXMuaXNEaWFsb2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja3NEYXRhSW5kZXggPSBjYXNlQ2hlY2tzRGF0YUluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBjdXJyZW50VGFiKGN1cikge1xuICAgICAgICAgICAgICAgIGlmIChjdXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcwJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ciA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJzEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FzZUNoZWNrc0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUNoZWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtYXJrVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRleHRDb3VudCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRGlhbG9nKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbWFya1ZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIC8vIOS4i+aLieWIt+aWsFxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzZUNoZWNrc0RhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICB0aGlzLnNvcnRpbmc9Jyc7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VDaGVja3MoKTtcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxuICAgICAgICB9XG4gICAgICAgIC8vIOS4iuaLieWKoOi9vVxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUNoZWNrcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIEdldENhc2VDaGVja3MoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBDYXNlQ2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgQ2FzZU5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgQ2xpZW50TmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBFbmREYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIEtleVdvcmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgU3RhcnREYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIFN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6dGhpcy5zb3J0aW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnF1ZXJ5U3RyZWFtKS5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAgZGF0YS5DYXNlQ2F0ZWdvcnk9dGhpcy5xdWVyeVN0cmVhbS5DYXNlQ2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgZGF0YS5DYXNlTmFtZT10aGlzLnF1ZXJ5U3RyZWFtLkNhc2VOYW1lO1xuICAgICAgICAgICAgICAgIGRhdGEuQ2xpZW50TmFtZT10aGlzLnF1ZXJ5U3RyZWFtLkNsaWVudE5hbWU7XG4gICAgICAgICAgICAgICAgZGF0YS5FbmREYXRlPXRoaXMucXVlcnlTdHJlYW0uRW5kRGF0ZTtcbiAgICAgICAgICAgICAgICBkYXRhLktleVdvcmQ9dGhpcy5xdWVyeVN0cmVhbS5LZXlXb3JkO1xuICAgICAgICAgICAgICAgIGRhdGEuU3RhcnREYXRlPXRoaXMucXVlcnlTdHJlYW0uU3RhcnREYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VDaGVjay9HZXRDYXNlQ2hlY2tzJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FzZUNoZWNrc0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja3NEYXRhLnB1c2goLi4uY2FzZUNoZWNrc0RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBQcm9jZXNzT3JkZXJJdGVtKGNhc2VJZCwgaWQpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja3NEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RpYWxvZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VDaGVja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2FzZUlkLFxuICAgICAgICAgICAgICAgIGNoZWNrUmVzdWx0czogW10sXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcmVtYXJrOiB0aGlzLnJlbWFya1ZhbHVlLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogXCJDb25mbGljdFJldHVyblwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VDaGVjay9Qcm9jZXNzT3JkZXJJdGVtJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6YCA5Zue5a6M5oiQJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VDaGVja3MoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaXNSZWZyZXNoKHNlYXJjaERhdGEpe1xuICAgICAgICAgICAgaWYoc2VhcmNoRGF0YSl7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbT1zZWFyY2hEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tzRGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUNoZWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpOyAvL+iOt+WPluW9k+WJjemhtemdouS/oeaBr+agiFxuICAgICAgICAgICAgbGV0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gLy/ojrflj5bkuIrkuIDkuKrpobXpnaLkv6Hmga/moIhcbiAgICAgICAgICAgIGlmIChwcmV2UGFnZS5kYXRhLnJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbTtcbiAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja3NEYXRhID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VDaGVja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4iXX0=