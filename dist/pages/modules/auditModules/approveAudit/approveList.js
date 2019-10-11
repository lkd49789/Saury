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

var approveList = function (_wepy$page) {
    _inherits(approveList, _wepy$page);

    function approveList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, approveList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = approveList.__proto__ || Object.getPrototypeOf(approveList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            currentTab: 0,
            navbars: ['待审核', '已审核', '已退回'],
            pageNumber_w: 1,
            pageNumber_A: 1,
            pageNumber_R: 1,
            pageSize: 10,
            GetApproveCaseFileListData_W: [],
            GetApproveCaseFileListData_A: [],
            GetApproveCaseFileListData_R: [],
            totalCount_W: 0,
            totalCount_A: 0,
            totalCount_R: 0,
            queryStream: {}
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default
        }, _this.mixins = [_mixin2.default], _this.methods = {
            toApproveDetailAudit: function toApproveDetailAudit(id) {
                wx.navigateTo({ url: './approveDetail?id=' + id });
            },
            toSearch: function toSearch() {
                wx.navigateTo({ url: './search/searchApprove' });
            }
        }, _this.watch = {
            currentTab: function currentTab(current) {
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                });
                switch (current) {
                    case 0:
                        if (this.totalCount_W == 0) {
                            this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
                            this.placeHolder.placeHolderShow = true;
                        } else {
                            this.placeHolder.placeHolderShow = false;
                        }
                        break;
                    case 1:
                        if (this.totalCount_A == 0) {
                            this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
                            this.placeHolder.placeHolderShow = true;
                        } else {
                            this.placeHolder.placeHolderShow = false;
                        }
                        break;
                    case 2:
                        if (this.totalCount_R == 0) {
                            this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
                            this.placeHolder.placeHolderShow = true;
                        } else {
                            this.placeHolder.placeHolderShow = false;
                        }
                        break;

                    default:
                        break;
                }
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(approveList, [{
        key: 'GetApproveCaseFileList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageNumber, status) {
                var Status, serialId, filter, clientUser, caseName, CreationTime, data, resData, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                Status = this.queryStream.Status ? this.queryStream.Status : '';
                                serialId = this.queryStream.serialId ? this.queryStream.serialId : '';
                                filter = this.queryStream.Keyword ? this.queryStream.Keyword : '';
                                clientUser = this.queryStream.clientUser ? this.queryStream.clientUser : '';
                                caseName = this.queryStream.caseName ? this.queryStream.caseName : '';
                                CreationTime = this.queryStream.CreationTime ? this.queryStream.CreationTime : '';
                                data = {
                                    Status: Status,
                                    filter: filter,
                                    caseName: caseName,
                                    clientUser: clientUser,
                                    CreationTime: CreationTime,
                                    serialId: serialId,
                                    pageNumber: pageNumber,
                                    pageSize: this.pageSize,
                                    sorting: "",
                                    // pageCount: 0,
                                    status: status
                                };
                                _context.next = 9;
                                return _ajax2.default.getData('/api/services/web/caseFileStampManage/GetApproveCaseFileList', 'post', data);

                            case 9:
                                resData = _context.sent;
                                _context.t0 = status;
                                _context.next = _context.t0 === 'W' ? 13 : _context.t0 === 'A' ? 15 : _context.t0 === 'R' ? 17 : 19;
                                break;

                            case 13:
                                this.totalCount_W = resData.data.result.totalCount;
                                return _context.abrupt('break', 20);

                            case 15:
                                this.totalCount_A = resData.data.result.totalCount;
                                return _context.abrupt('break', 20);

                            case 17:
                                this.totalCount_R = resData.data.result.totalCount;
                                return _context.abrupt('break', 20);

                            case 19:
                                return _context.abrupt('break', 20);

                            case 20:
                                _context.t1 = resData.statusCode;
                                _context.next = _context.t1 === 200 ? 23 : _context.t1 === 403 ? 50 : _context.t1 === 500 ? 54 : 57;
                                break;

                            case 23:
                                if (!(resData.data.result.items.length !== 0)) {
                                    _context.next = 38;
                                    break;
                                }

                                _context.t2 = status;
                                _context.next = _context.t2 === 'W' ? 27 : _context.t2 === 'A' ? 29 : _context.t2 === 'R' ? 31 : 33;
                                break;

                            case 27:
                                this.GetApproveCaseFileListData_W = this.GetApproveCaseFileListData_W.concat(resData.data.result.items);
                                return _context.abrupt('break', 34);

                            case 29:

                                this.GetApproveCaseFileListData_A = this.GetApproveCaseFileListData_A.concat(resData.data.result.items);
                                return _context.abrupt('break', 34);

                            case 31:

                                this.GetApproveCaseFileListData_R = this.GetApproveCaseFileListData_R.concat(resData.data.result.items);
                                return _context.abrupt('break', 34);

                            case 33:
                                return _context.abrupt('break', 34);

                            case 34:
                                isRefresh = {
                                    isRefresh: false
                                };

                                wx.setStorageSync('isRefresh', isRefresh);
                                _context.next = 48;
                                break;

                            case 38:
                                _context.t3 = status;
                                _context.next = _context.t3 === 'W' ? 41 : _context.t3 === 'A' ? 43 : _context.t3 === 'R' ? 45 : 47;
                                break;

                            case 41:
                                this.placeHolderImageIndex_0 = 0;
                                return _context.abrupt('break', 48);

                            case 43:
                                this.placeHolderImageIndex_1 = 0;
                                return _context.abrupt('break', 48);

                            case 45:
                                this.placeHolderImageIndex_2 = 0;
                                return _context.abrupt('break', 48);

                            case 47:
                                return _context.abrupt('break', 48);

                            case 48:
                                this.$apply();
                                return _context.abrupt('break', 58);

                            case 50:
                                console.log('您没有权限');
                                this.placeHolderImageIndex_1 = 3;
                                this.$apply();
                                return _context.abrupt('break', 58);

                            case 54:
                                console.log('数据请求错误');
                                this.placeHolderImageIndex_1 = 1;
                                this.$apply();

                            case 57:
                                return _context.abrupt('break', 58);

                            case 58:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetApproveCaseFileList(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return GetApproveCaseFileList;
        }()
        // 下拉刷新

    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.placeHolder.placeHolderShow = false;
            this.queryStream = {};
            switch (this.currentTab) {
                case 0:
                    this.pageNumber_W = 1;
                    this.GetApproveCaseFileListData_W = [];
                    this.GetApproveCaseFileList(this.pageNumber_W, 'W');
                    break;
                case 1:
                    this.pageNumber_A = 1;
                    this.GetApproveCaseFileListData_A = [];
                    this.GetApproveCaseFileList(this.pageNumber_A, 'A');
                    break;
                default:
                    this.pageNumber_R = 1;
                    this.GetApproveCaseFileListData_R = [];
                    this.GetApproveCaseFileList(this.pageNumber_R, 'R');
                    break;
            }
            this.$apply();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            switch (this.currentTab) {
                case 0:
                    if (this.totalCount_W / 10 > this.pageNumber_W && this.$parent.global.netWorkString) {
                        this.pageNumber_W += 1;
                        this.GetApproveCaseFileList(this.pageNumber_W, 'W');
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
                    break;
                case 1:
                    if (this.totalCount_A / 10 > this.pageNumber_W && this.$parent.global.netWorkString) {
                        this.pageNumber_A += 1;
                        this.GetApproveCaseFileList(this.pageNumber_A, 'W');
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
                    break;
                default:
                    if (this.totalCount_R / 10 > this.pageNumber_R && this.$parent.global.netWorkString) {
                        this.pageNumber_R += 1;
                        this.GetApproveCaseFileList(this.pageNumber_R, 'W');
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
                    break;
            }
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetApproveCaseFileList(this.pageNumber_w, 'W');
            this.GetApproveCaseFileList(this.pageNumber_A, 'A');
            this.GetApproveCaseFileList(this.pageNumber_R, 'R');
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh() {
            this.currentTab = 0;
            this.pageNumber_W = 1;
            this.GetApproveCaseFileListData_W = [];
            this.pageNumber_A = 1;
            this.GetApproveCaseFileListData_A = [];
            this.pageNumber_R = 1;
            this.GetApproveCaseFileListData_R = [];
            this.GetApproveCaseFileList(this.pageNumber_w, 'W');
            this.GetApproveCaseFileList(this.pageNumber_A, 'A');
            this.GetApproveCaseFileList(this.pageNumber_R, 'R');
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var isRefresh = wx.getStorageSync('isRefresh') || false;
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            var refresh = prevPage.data.refresh || false;
            console.log(refresh, isRefresh.isRefresh);
            if (isRefresh.isRefresh || refresh) {
                prevPage.data.refresh = false;
                this.isRefresh();
            }
            this.$apply();
        }
    }]);

    return approveList;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(approveList , 'pages/modules/auditModules/approveAudit/approveList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmVMaXN0LmpzIl0sIm5hbWVzIjpbImFwcHJvdmVMaXN0IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsImRhdGEiLCJjdXJyZW50VGFiIiwibmF2YmFycyIsInBhZ2VOdW1iZXJfdyIsInBhZ2VOdW1iZXJfQSIsInBhZ2VOdW1iZXJfUiIsInBhZ2VTaXplIiwiR2V0QXBwcm92ZUNhc2VGaWxlTGlzdERhdGFfVyIsIkdldEFwcHJvdmVDYXNlRmlsZUxpc3REYXRhX0EiLCJHZXRBcHByb3ZlQ2FzZUZpbGVMaXN0RGF0YV9SIiwidG90YWxDb3VudF9XIiwidG90YWxDb3VudF9BIiwidG90YWxDb3VudF9SIiwicXVlcnlTdHJlYW0iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwibmF2YmFyIiwibWl4aW5zIiwibWV0aG9kcyIsInRvQXBwcm92ZURldGFpbEF1ZGl0IiwiaWQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1NlYXJjaCIsIndhdGNoIiwiY3VycmVudCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImR1cmF0aW9uIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlckltYWdlSW5kZXhfMCIsInBsYWNlSG9sZGVyU2hvdyIsImNvbXB1dGVkIiwicGFnZU51bWJlciIsInN0YXR1cyIsIlN0YXR1cyIsInNlcmlhbElkIiwiZmlsdGVyIiwiS2V5d29yZCIsImNsaWVudFVzZXIiLCJjYXNlTmFtZSIsIkNyZWF0aW9uVGltZSIsInNvcnRpbmciLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJyZXN1bHQiLCJ0b3RhbENvdW50Iiwic3RhdHVzQ29kZSIsIml0ZW1zIiwibGVuZ3RoIiwiY29uY2F0IiwiaXNSZWZyZXNoIiwic2V0U3RvcmFnZVN5bmMiLCJwbGFjZUhvbGRlckltYWdlSW5kZXhfMSIsInBsYWNlSG9sZGVySW1hZ2VJbmRleF8yIiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsInBhZ2VOdW1iZXJfVyIsIkdldEFwcHJvdmVDYXNlRmlsZUxpc3QiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiZ2V0U3RvcmFnZVN5bmMiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicmVmcmVzaCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQzs7OztBQUNEOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsbUNBQXVCLElBRGxCO0FBRUxDLGlDQUFxQixNQUZoQjtBQUdMQyxnQ0FBb0IsU0FIZjtBQUlMQyxtQ0FBdUI7QUFKbEIsUyxRQU1UQyxJLEdBQU87QUFDSEMsd0JBQVcsQ0FEUjtBQUVIQyxxQkFBUyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUZOO0FBR0hDLDBCQUFjLENBSFg7QUFJSEMsMEJBQWMsQ0FKWDtBQUtIQywwQkFBYyxDQUxYO0FBTUhDLHNCQUFVLEVBTlA7QUFPSEMsMENBQThCLEVBUDNCO0FBUUhDLDBDQUE4QixFQVIzQjtBQVNIQywwQ0FBOEIsRUFUM0I7QUFVSEMsMEJBQWMsQ0FWWDtBQVdIQywwQkFBYyxDQVhYO0FBWUhDLDBCQUFjLENBWlg7QUFhSEMseUJBQVk7QUFiVCxTLFFBZVJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQywyQkFBMEIsYUFBM0IsRUFBeUMsMkJBQTBCLGFBQW5FLEVBQXBCLEVBQXNHLFVBQVMsRUFB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LGlCQUFLK0QsWUFBTCxHQUFvQixDQUFwQjtBQUNBLGlCQUFLekQsNEJBQUwsR0FBb0MsRUFBcEM7QUFDQSxpQkFBS0gsWUFBTCxHQUFvQixDQUFwQjtBQUNBLGlCQUFLSSw0QkFBTCxHQUFvQyxFQUFwQztBQUNBLGlCQUFLSCxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsaUJBQUtJLDRCQUFMLEdBQW9DLEVBQXBDO0FBQ0EsaUJBQUt3RCxzQkFBTCxDQUE0QixLQUFLOUQsWUFBakMsRUFBK0MsR0FBL0M7QUFDQSxpQkFBSzhELHNCQUFMLENBQTRCLEtBQUs3RCxZQUFqQyxFQUErQyxHQUEvQztBQUNBLGlCQUFLNkQsc0JBQUwsQ0FBNEIsS0FBSzVELFlBQWpDLEVBQStDLEdBQS9DO0FBQ0EsaUJBQUt3RCxNQUFMO0FBQ0g7OztpQ0FDTztBQUNKLGdCQUFJSixZQUFXakMsR0FBR21ELGNBQUgsQ0FBa0IsV0FBbEIsS0FBZ0MsS0FBL0M7QUFDQSxnQkFBSUMsUUFBUUMsaUJBQVo7QUFDQSxnQkFBSUMsV0FBV0YsTUFBTUEsTUFBTXJCLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBSEksQ0FHb0M7QUFDeEMsaUJBQUsxQyxXQUFMLEdBQWlCaUUsU0FBUzlFLElBQVQsQ0FBY2EsV0FBL0I7QUFDQSxnQkFBSWtFLFVBQVFELFNBQVM5RSxJQUFULENBQWMrRSxPQUFkLElBQXVCLEtBQW5DO0FBQ0FqQixvQkFBUUMsR0FBUixDQUFZZ0IsT0FBWixFQUFvQnRCLFVBQVVBLFNBQTlCO0FBQ0EsZ0JBQUdBLFVBQVVBLFNBQVYsSUFBcUJzQixPQUF4QixFQUFnQztBQUM1QkQseUJBQVM5RSxJQUFULENBQWMrRSxPQUFkLEdBQXNCLEtBQXRCO0FBQ0EscUJBQUt0QixTQUFMO0FBQ0g7QUFDRCxpQkFBS0ksTUFBTDtBQUNIOzs7O0VBdFNvQ21CLGVBQUtDLEk7O2tCQUF6QnZGLFciLCJmaWxlIjoiYXBwcm92ZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICAgaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9taXhpbi5qcyc7XG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wbGFjZUhvbGRlckltYWdlJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhcHByb3ZlTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclRvcDogJyNmNGY0ZjQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjdXJyZW50VGFiOjAsXG4gICAgICAgICAgICBuYXZiYXJzOiBbJ+W+heWuoeaguCcsICflt7LlrqHmoLgnLCAn5bey6YCA5ZueJ10sXG4gICAgICAgICAgICBwYWdlTnVtYmVyX3c6IDEsXG4gICAgICAgICAgICBwYWdlTnVtYmVyX0E6IDEsXG4gICAgICAgICAgICBwYWdlTnVtYmVyX1I6IDEsXG4gICAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICBHZXRBcHByb3ZlQ2FzZUZpbGVMaXN0RGF0YV9XOiBbXSxcbiAgICAgICAgICAgIEdldEFwcHJvdmVDYXNlRmlsZUxpc3REYXRhX0E6IFtdLFxuICAgICAgICAgICAgR2V0QXBwcm92ZUNhc2VGaWxlTGlzdERhdGFfUjogW10sXG4gICAgICAgICAgICB0b3RhbENvdW50X1c6IDAsXG4gICAgICAgICAgICB0b3RhbENvdW50X0E6IDAsXG4gICAgICAgICAgICB0b3RhbENvdW50X1I6IDAsXG4gICAgICAgICAgICBxdWVyeVN0cmVhbTp7fSxcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwbGFjZUhvbGRlclwifSxcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlLFxuICAgICAgICAgICAgbmF2YmFyLFxuICAgICAgICB9O1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvQXBwcm92ZURldGFpbEF1ZGl0KGlkKXtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9hcHByb3ZlRGV0YWlsP2lkPScraWQgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9TZWFyY2goKXtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9zZWFyY2gvc2VhcmNoQXBwcm92ZSd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICAgY3VycmVudFRhYihjdXJyZW50KXtcbiAgICAgICAgICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnRfVz09MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnRfQT09MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudF9SPT0wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgYXN5bmMgR2V0QXBwcm92ZUNhc2VGaWxlTGlzdChwYWdlTnVtYmVyLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIHZhciBTdGF0dXMgPSAgdGhpcy5xdWVyeVN0cmVhbS5TdGF0dXM/dGhpcy5xdWVyeVN0cmVhbS5TdGF0dXM6Jyc7XG4gICAgICAgICAgICB2YXIgc2VyaWFsSWQgPSAgdGhpcy5xdWVyeVN0cmVhbS5zZXJpYWxJZD90aGlzLnF1ZXJ5U3RyZWFtLnNlcmlhbElkOicnO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9ICB0aGlzLnF1ZXJ5U3RyZWFtLktleXdvcmQ/dGhpcy5xdWVyeVN0cmVhbS5LZXl3b3JkOicnO1xuICAgICAgICAgICAgdmFyIGNsaWVudFVzZXIgPSAgdGhpcy5xdWVyeVN0cmVhbS5jbGllbnRVc2VyP3RoaXMucXVlcnlTdHJlYW0uY2xpZW50VXNlcjonJztcbiAgICAgICAgICAgIHZhciBjYXNlTmFtZSA9ICB0aGlzLnF1ZXJ5U3RyZWFtLmNhc2VOYW1lP3RoaXMucXVlcnlTdHJlYW0uY2FzZU5hbWU6Jyc7XG4gICAgICAgICAgICB2YXIgQ3JlYXRpb25UaW1lID0gIHRoaXMucXVlcnlTdHJlYW0uQ3JlYXRpb25UaW1lP3RoaXMucXVlcnlTdHJlYW0uQ3JlYXRpb25UaW1lOicnO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgU3RhdHVzLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBjYXNlTmFtZSxcbiAgICAgICAgICAgICAgICBjbGllbnRVc2VyLFxuICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZSxcbiAgICAgICAgICAgICAgICBzZXJpYWxJZCxcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiBwYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IFwiXCIsXG4gICAgICAgICAgICAgICAgLy8gcGFnZUNvdW50OiAwLFxuICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZUZpbGVTdGFtcE1hbmFnZS9HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50X1cgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50X0EgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1InOlxuICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50X1IgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEFwcHJvdmVDYXNlRmlsZUxpc3REYXRhX1cgPSB0aGlzLkdldEFwcHJvdmVDYXNlRmlsZUxpc3REYXRhX1cuY29uY2F0KHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0RGF0YV9BID0gdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0RGF0YV9BLmNvbmNhdChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0QXBwcm92ZUNhc2VGaWxlTGlzdERhdGFfUiA9IHRoaXMuR2V0QXBwcm92ZUNhc2VGaWxlTGlzdERhdGFfUi5jb25jYXQocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVmcmVzaD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJywgaXNSZWZyZXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzAgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlckltYWdlSW5kZXhfMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1InOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8yID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmgqjmsqHmnInmnYPpmZAnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlckltYWdlSW5kZXhfMSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u6K+35rGC6ZSZ6K+vJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlckltYWdlSW5kZXhfMSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5LiL5ouJ5Yi35pawXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW09e307XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFRhYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyX1cgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEFwcHJvdmVDYXNlRmlsZUxpc3REYXRhX1cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0KHRoaXMucGFnZU51bWJlcl9XLCAnVycpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyX0EgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEFwcHJvdmVDYXNlRmlsZUxpc3REYXRhX0EgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0KHRoaXMucGFnZU51bWJlcl9BLCAnQScpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcl9SID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0RGF0YV9SID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0QXBwcm92ZUNhc2VGaWxlTGlzdCh0aGlzLnBhZ2VOdW1iZXJfUiwgJ1InKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cbiAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcbiAgICAgICAgfVxuICAgICAgICAvLyDkuIrmi4nliqDovb1cbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50VGFiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50X1cgLyAxMCA+IHRoaXMucGFnZU51bWJlcl9XICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyX1cgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0QXBwcm92ZUNhc2VGaWxlTGlzdCh0aGlzLnBhZ2VOdW1iZXJfVywgJ1cnKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lus5piv5pyJ5bqV57q/55qE77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSl77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50X0EgLyAxMCA+IHRoaXMucGFnZU51bWJlcl9XICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcl9BICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0KHRoaXMucGFnZU51bWJlcl9BLCAnVycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lus5piv5pyJ5bqV57q/55qE77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnRfUiAvIDEwID4gdGhpcy5wYWdlTnVtYmVyX1IgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXJfUiArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0KHRoaXMucGFnZU51bWJlcl9SLCAnVycpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0KHRoaXMucGFnZU51bWJlcl93LCAnVycpXG4gICAgICAgICAgICB0aGlzLkdldEFwcHJvdmVDYXNlRmlsZUxpc3QodGhpcy5wYWdlTnVtYmVyX0EsICdBJylcbiAgICAgICAgICAgIHRoaXMuR2V0QXBwcm92ZUNhc2VGaWxlTGlzdCh0aGlzLnBhZ2VOdW1iZXJfUiwgJ1InKVxuICAgICAgICB9O1xuICAgICAgICBpc1JlZnJlc2goKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYj0wO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyX1cgPSAxO1xuICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0RGF0YV9XID0gW107XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXJfQSA9IDE7XG4gICAgICAgICAgICB0aGlzLkdldEFwcHJvdmVDYXNlRmlsZUxpc3REYXRhX0EgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcl9SID0gMTtcbiAgICAgICAgICAgIHRoaXMuR2V0QXBwcm92ZUNhc2VGaWxlTGlzdERhdGFfUiA9IFtdO1xuICAgICAgICAgICAgdGhpcy5HZXRBcHByb3ZlQ2FzZUZpbGVMaXN0KHRoaXMucGFnZU51bWJlcl93LCAnVycpXG4gICAgICAgICAgICB0aGlzLkdldEFwcHJvdmVDYXNlRmlsZUxpc3QodGhpcy5wYWdlTnVtYmVyX0EsICdBJylcbiAgICAgICAgICAgIHRoaXMuR2V0QXBwcm92ZUNhc2VGaWxlTGlzdCh0aGlzLnBhZ2VOdW1iZXJfUiwgJ1InKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKXtcbiAgICAgICAgICAgIHZhciBpc1JlZnJlc2g9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKXx8ZmFsc2U7XG4gICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbT1wcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtO1xuICAgICAgICAgICAgdmFyIHJlZnJlc2g9cHJldlBhZ2UuZGF0YS5yZWZyZXNofHxmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZnJlc2gsaXNSZWZyZXNoLmlzUmVmcmVzaCk7XG4gICAgICAgICAgICBpZihpc1JlZnJlc2guaXNSZWZyZXNofHxyZWZyZXNoKXtcbiAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2g9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7IFxuICAgICAgICB9XG4gICAgfVxuIl19