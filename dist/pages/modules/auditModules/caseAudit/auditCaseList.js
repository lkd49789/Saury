'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var autitCaseList = function (_wepy$page) {
    _inherits(autitCaseList, _wepy$page);

    function autitCaseList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, autitCaseList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = autitCaseList.__proto__ || Object.getPrototypeOf(autitCaseList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default
        }, _this.data = {
            refresh: false,
            isSearchRefresh: false,
            queryStream: {},
            currentTab: 0,
            navbars: ['待审核'],
            pageNumber: [1, 1],
            waitCreationsData: {},
            alreadyCreationsData: {}
        }, _this.watch = {
            currentTab: function currentTab(current) {
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                });
                if (current == 0) {
                    if (!this.waitCreationsData.totalCount) {
                        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
                        this.placeHolder.placeHolderShow = true;
                    } else {
                        this.placeHolder.placeHolderShow = false;
                    }
                    this.$apply();
                }
                if (current == 1) {
                    if (!this.alreadyCreationsData.totalCount) {
                        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
                        this.placeHolder.placeHolderShow = true;
                    } else {
                        this.placeHolder.placeHolderShow = false;
                    }
                    this.$apply();
                }
            }
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({ url: './search/searchCase_audit' });
            },
            toCaseDetailAudit: function toCaseDetailAudit(orderId) {
                wx.navigateTo({
                    url: './caseDetailAudit/caseDetailAudit?id=' + orderId
                });
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(autitCaseList, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.placeHolder.placeHolderShow = false;
            if (this.currentTab == 0) {
                this.pageNumber[0] = 1, this.waitCreationsData = {};
                this.GetWaitCaseCreations();
            } else if (this.currentTab == 1) {
                this.pageNumber[1] = 1, this.alreadyCreationsData = {};
                this.GetAlreadyCaseCreations();
            }
            this.$apply();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.currentTab == 0) {
                if (this.waitCreationsData.totalCount / 10 > this.pageNumber[0] && this.$parent.global.netWorkString) {
                    this.pageNumber[0] += 1;
                    this.GetWaitCaseCreations();
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
                if (this.alreadyCreationsData.totalCount / 10 > this.pageNumber[1] && this.$parent.global.netWorkString) {
                    this.pageNumber[1] += 1;
                    this.GetAlreadyCaseCreations();
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
        key: 'GetWaitCaseCreations',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    arg[_key2] = arguments[_key2];
                }

                var keyWord, data, resData, waitCreationsData, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                keyWord = arg[0] ? arg[0].KeyWord : '';
                                data = {
                                    keyWord: keyWord,
                                    status: '',
                                    sorting: 'AcceptDate desc',
                                    pageNumber: this.pageNumber[0],
                                    pageSize: 10
                                };
                                _context.next = 4;
                                return _ajax2.default.getData('/api/services/web/caseCreation/GetCaseCreations', 'post', data);

                            case 4:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 8 : _context.t0 === 403 ? 12 : _context.t0 === 500 ? 18 : 23;
                                break;

                            case 8:
                                this.waitCreationsData['totalCount'] = resData.data.result.totalCount;
                                if (resData.data.result.items.length !== 0) {
                                    waitCreationsData = resData.data.result.items;

                                    if (this.waitCreationsData.items) {
                                        this.waitCreationsData.items = this.waitCreationsData.items.concat(waitCreationsData);
                                    } else {
                                        this.waitCreationsData['items'] = waitCreationsData;
                                    }
                                    isRefresh = {
                                        isRefresh: false
                                    };

                                    wx.setStorageSync('isRefresh', isRefresh);
                                } else {
                                    this.placeHolder.placeHolderImageIndex = 0;
                                    this.placeHolder.placeHolderShow = true;
                                    this.placeHolderImageIndex_0 = 0;
                                }
                                this.$apply();
                                return _context.abrupt('break', 24);

                            case 12:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.placeHolderImageIndex_0 = 3;
                                this.$apply();
                                return _context.abrupt('break', 24);

                            case 18:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.placeHolderImageIndex_0 = 1;
                                this.$apply();

                            case 23:
                                return _context.abrupt('break', 24);

                            case 24:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetWaitCaseCreations() {
                return _ref2.apply(this, arguments);
            }

            return GetWaitCaseCreations;
        }()
    }, {
        key: 'GetAlreadyCaseCreations',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                for (var _len3 = arguments.length, arg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    arg[_key3] = arguments[_key3];
                }

                var keyWord, data, resData, alreadyCreationsData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                keyWord = arg[0] ? arg[0].KeyWord : '';

                                wx.showLoading({
                                    title: '加载中，请稍等！',
                                    mask: true
                                });
                                data = {
                                    keyWord: keyWord,
                                    status: '1',
                                    sorting: "",
                                    pageNumber: this.pageNumber[1],
                                    pageSize: 10
                                };
                                _context2.next = 5;
                                return _ajax2.default.getData('/api/services/web/caseCreation/GetCaseCreations', 'post', data);

                            case 5:
                                resData = _context2.sent;
                                _context2.t0 = resData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 9 : _context2.t0 === 403 ? 13 : _context2.t0 === 500 ? 17 : 20;
                                break;

                            case 9:
                                this.alreadyCreationsData['totalCount'] = resData.data.result.totalCount;
                                if (resData.data.result.items.length !== 0) {
                                    alreadyCreationsData = resData.data.result.items;

                                    console.log(alreadyCreationsData);
                                    if (this.alreadyCreationsData.items) {
                                        this.alreadyCreationsData.items = this.alreadyCreationsData.items.concat(alreadyCreationsData);
                                    } else {
                                        this.alreadyCreationsData['items'] = alreadyCreationsData;
                                    }
                                    this.$apply();
                                } else {
                                    this.placeHolderImageIndex_1 = 0;
                                }
                                this.$apply();
                                return _context2.abrupt('break', 21);

                            case 13:
                                console.log('您没有权限');
                                this.placeHolderImageIndex_1 = 3;
                                this.$apply();
                                return _context2.abrupt('break', 21);

                            case 17:
                                console.log('数据请求错误');
                                this.placeHolderImageIndex_1 = 1;
                                this.$apply();

                            case 20:
                                return _context2.abrupt('break', 21);

                            case 21:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetAlreadyCaseCreations() {
                return _ref3.apply(this, arguments);
            }

            return GetAlreadyCaseCreations;
        }()
    }, {
        key: 'isRefresh',
        value: function isRefresh() {
            this.refresh = false;
            this.pageNumber = [1, 1], this.waitCreationsData = {};
            this.alreadyCreationsData = {};
            this.currentTab = 0;
            this.GetWaitCaseCreations(arguments.length <= 0 ? undefined : arguments[0]);
            this.GetAlreadyCaseCreations(arguments.length <= 0 ? undefined : arguments[0]);
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetWaitCaseCreations();
            this.GetAlreadyCaseCreations();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            var queryStream = prevPage.data.queryStream;
            var isRefresh = wx.getStorageSync('isRefresh');
            if (prevPage.data.refresh) {
                prevPage.data.refresh = false;
                this.isRefresh(queryStream);
            } else {
                if (isRefresh.isRefresh) {
                    this.isRefresh();
                }
            }
            this.$apply();
        }
    }]);

    return autitCaseList;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(autitCaseList , 'pages/modules/auditModules/caseAudit/auditCaseList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0Q2FzZUxpc3QuanMiXSwibmFtZXMiOlsiYXV0aXRDYXNlTGlzdCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwibmF2YmFyIiwiZGF0YSIsInJlZnJlc2giLCJpc1NlYXJjaFJlZnJlc2giLCJxdWVyeVN0cmVhbSIsImN1cnJlbnRUYWIiLCJuYXZiYXJzIiwicGFnZU51bWJlciIsIndhaXRDcmVhdGlvbnNEYXRhIiwiYWxyZWFkeUNyZWF0aW9uc0RhdGEiLCJ3YXRjaCIsImN1cnJlbnQiLCJ3eCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImR1cmF0aW9uIiwidG90YWxDb3VudCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJJbWFnZUluZGV4XzAiLCJwbGFjZUhvbGRlclNob3ciLCIkYXBwbHkiLCJwbGFjZUhvbGRlckltYWdlSW5kZXhfMSIsIm1ldGhvZHMiLCJ0b1NlYXJjaCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0Nhc2VEZXRhaWxBdWRpdCIsIm9yZGVySWQiLCJtaXhpbnMiLCJHZXRXYWl0Q2FzZUNyZWF0aW9ucyIsIkdldEFscmVhZHlDYXNlQ3JlYXRpb25zIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRwYXJlbnQiLCJnbG9iYWwiLCJuZXRXb3JrU3RyaW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImFyZyIsImtleVdvcmQiLCJLZXlXb3JkIiwic3RhdHVzIiwic29ydGluZyIsInBhZ2VTaXplIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsIml0ZW1zIiwibGVuZ3RoIiwiY29uY2F0IiwiaXNSZWZyZXNoIiwic2V0U3RvcmFnZVN5bmMiLCJjb25zb2xlIiwibG9nIiwic2hvd0xvYWRpbmciLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwiZ2V0U3RvcmFnZVN5bmMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUNqQkMsTSxHQUFTO0FBQ0xDLG1DQUF1QixJQURsQjtBQUVMQyxpQ0FBcUIsTUFGaEI7QUFHTEMsZ0NBQW9CLFNBSGY7QUFJTEMsbUNBQXVCO0FBSmxCLFMsUUFNVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLG9CQUFtQixFQUFDLDJCQUEwQixhQUEzQixFQUF5QywyQkFBMEIsYUFBbkUsRUFBcEIsRUFBc0csVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUFtRCwwQkFBeUIsWUFBNUUsRUFBeUYsMkJBQTBCLFlBQW5ILEVBQS9HLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLHdEQURFO0FBRUZDO0FBRkUsUyxRQUlOQyxJLEdBQU87QUFDSEMscUJBQVMsS0FETjtBQUVIQyw2QkFBZ0IsS0FGYjtBQUdIQyx5QkFBYSxFQUhWO0FBSUhDLHdCQUFZLENBSlQ7QUFLSEMscUJBQVMsQ0FBQyxLQUFELENBTE47QUFNSEMsd0JBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixDQU5UO0FBT0hDLCtCQUFtQixFQVBoQjtBQVFIQyxrQ0FBc0I7QUFSbkIsUyxRQVVQQyxLLEdBQU07QUFDRkwsc0JBREUsc0JBQ1NNLE9BRFQsRUFDaUI7QUFDZEMsbUJBQUdDLFlBQUgsQ0FBZ0I7QUFDVEMsK0JBQVcsQ0FERjtBQUVUQyw4QkFBVTtBQUZELGlCQUFoQjtBQUlELG9CQUFHSixXQUFTLENBQVosRUFBYztB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QTdQc0MyQyxlQUFLQyxJOztrQkFBM0I1RSxhIiwiZmlsZSI6ImF1ZGl0Q2FzZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXV0aXRDYXNlTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclRvcDogJyNmNGY0ZjQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXG4gICAgICAgIH07XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1widi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGxhY2VIb2xkZXJcIn0sXCJuYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdmJhcnMub25jZVwiOlwibmF2YmFyc1wiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgcGxhY2VIb2xkZXJJbWFnZSxcbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICAgICAgICBpc1NlYXJjaFJlZnJlc2g6ZmFsc2UsXG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwLFxuICAgICAgICAgICAgbmF2YmFyczogWyflvoXlrqHmoLgnLF0sXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBbMSwgMV0sXG4gICAgICAgICAgICB3YWl0Q3JlYXRpb25zRGF0YToge30sXG4gICAgICAgICAgICBhbHJlYWR5Q3JlYXRpb25zRGF0YToge30sXG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoPXtcbiAgICAgICAgICAgIGN1cnJlbnRUYWIoY3VycmVudCl7XG4gICAgICAgICAgICAgICAgIHd4LnBhZ2VTY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLndhaXRDcmVhdGlvbnNEYXRhLnRvdGFsQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gdGhpcy5wbGFjZUhvbGRlckltYWdlSW5kZXhfMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudD09MSl7XG4gICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxyZWFkeUNyZWF0aW9uc0RhdGEudG90YWxDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDkuIvmi4nliLfmlrBcbiAgICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFRhYj09MCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyWzBdPSAxLFxuICAgICAgICAgICAgICAgIHRoaXMud2FpdENyZWF0aW9uc0RhdGE9e307XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRXYWl0Q2FzZUNyZWF0aW9ucygpOyAgXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmN1cnJlbnRUYWI9PTEpe1xuICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXJbMV09IDEsXG4gICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5Q3JlYXRpb25zRGF0YT17fTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldEFscmVhZHlDYXNlQ3JlYXRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgICAgIH1cbiAgICAgICAgLy8g5LiK5ouJ5Yqg6L29XG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRUYWI9PTApe1xuICAgICAgICAgICAgICAgICBpZiAodGhpcy53YWl0Q3JlYXRpb25zRGF0YS50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXJbMF0gJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyWzBdICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRXYWl0Q2FzZUNyZWF0aW9ucygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50VGFiPT0xKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbHJlYWR5Q3JlYXRpb25zRGF0YS50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXJbMV0gJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyWzFdICs9IDE7XG4gICAgICAgICAgICAgICAgIHRoaXMuR2V0QWxyZWFkeUNhc2VDcmVhdGlvbnMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSl77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvU2VhcmNoKCl7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4vc2VhcmNoL3NlYXJjaENhc2VfYXVkaXQnIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvQ2FzZURldGFpbEF1ZGl0KG9yZGVySWQpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2Nhc2VEZXRhaWxBdWRpdC9jYXNlRGV0YWlsQXVkaXQ/aWQ9JytvcmRlcklkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xuICAgICAgICBhc3luYyBHZXRXYWl0Q2FzZUNyZWF0aW9ucyguLi5hcmcpIHtcbiAgICAgICAgICAgIHZhciBrZXlXb3JkPWFyZ1swXT9hcmdbMF0uS2V5V29yZDonJztcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGtleVdvcmQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiAnQWNjZXB0RGF0ZSBkZXNjJyxcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXJbMF0sXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZUNyZWF0aW9uL0dldENhc2VDcmVhdGlvbnMnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXRDcmVhdGlvbnNEYXRhWyd0b3RhbENvdW50J10gPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdhaXRDcmVhdGlvbnNEYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMud2FpdENyZWF0aW9uc0RhdGEuaXRlbXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdENyZWF0aW9uc0RhdGEuaXRlbXMgPXRoaXMud2FpdENyZWF0aW9uc0RhdGEuaXRlbXMuY29uY2F0KHdhaXRDcmVhdGlvbnNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdENyZWF0aW9uc0RhdGFbJ2l0ZW1zJ10gPSB3YWl0Q3JlYXRpb25zRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAgaXNSZWZyZXNoPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJywgaXNSZWZyZXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzA9MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8wPTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u6K+35rGC6ZSZ6K+vJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlckltYWdlSW5kZXhfMD0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIEdldEFscmVhZHlDYXNlQ3JlYXRpb25zKC4uLmFyZykge1xuICAgICAgICAgICAgdmFyIGtleVdvcmQ9YXJnWzBdP2FyZ1swXS5LZXlXb3JkOicnO1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit77yM6K+356iN562J77yBJyxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBrZXlXb3JkLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJzEnLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyWzFdLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VDcmVhdGlvbi9HZXRDYXNlQ3JlYXRpb25zJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5Q3JlYXRpb25zRGF0YVsndG90YWxDb3VudCddID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHJlYWR5Q3JlYXRpb25zRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbHJlYWR5Q3JlYXRpb25zRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFscmVhZHlDcmVhdGlvbnNEYXRhLml0ZW1zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDcmVhdGlvbnNEYXRhLml0ZW1zID10aGlzLmFscmVhZHlDcmVhdGlvbnNEYXRhLml0ZW1zLmNvbmNhdChhbHJlYWR5Q3JlYXRpb25zRGF0YSkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5Q3JlYXRpb25zRGF0YVsnaXRlbXMnXT1hbHJlYWR5Q3JlYXRpb25zRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzEgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oKo5rKh5pyJ5p2D6ZmQJyk7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8xID0gMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8xID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpc1JlZnJlc2goLi4ua2V5X3dvcmQpe1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoPWZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyPSBbMSwgMV0sXG4gICAgICAgICAgICB0aGlzLndhaXRDcmVhdGlvbnNEYXRhPXt9O1xuICAgICAgICAgICAgdGhpcy5hbHJlYWR5Q3JlYXRpb25zRGF0YT17fTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYj0wO1xuICAgICAgICAgICAgdGhpcy5HZXRXYWl0Q2FzZUNyZWF0aW9ucyhrZXlfd29yZFswXSk7XG4gICAgICAgICAgICB0aGlzLkdldEFscmVhZHlDYXNlQ3JlYXRpb25zKGtleV93b3JkWzBdKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5HZXRXYWl0Q2FzZUNyZWF0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5HZXRBbHJlYWR5Q2FzZUNyZWF0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpe1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgIHZhciBxdWVyeVN0cmVhbSA9IHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW07XG4gICAgICAgICAgICB2YXIgaXNSZWZyZXNoPSB3eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgICAgICBpZihwcmV2UGFnZS5kYXRhLnJlZnJlc2gpe1xuICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaD1mYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVmcmVzaChxdWVyeVN0cmVhbSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihpc1JlZnJlc2guaXNSZWZyZXNoKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlZnJlc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiJdfQ==