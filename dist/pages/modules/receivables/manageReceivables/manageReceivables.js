"use strict";

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

var _navbar = require('./../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: "dark",
            backgroundColorTop: "#f4f4f4",
            backgroundColorBottom: "#f4f4f4"
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default
        }, _this.mixins = [_mixin2.default], _this.watch = {
            currentTab: function currentTab(newValue, oldValue) {
                wx.pageScrollTo({
                    scrollTop: 0, //滚动到页面的目标位置（单位px）,
                    duration: 0 //滚动动画的时长，默认300ms，单位 ms,
                });
                switch (newValue) {
                    case 0:
                        this.getbill("UnClaimed");
                        // this.state = "UnClaimed";
                        break;
                    case 1:
                        this.getbill("Claimed");
                        break;
                    case 2:
                        this.getbill("WaitForAssigned");
                        break;
                    default:
                        break;
                }
            }
        }, _this.data = {
            myinvoice: [],
            pageNumber: 1,
            totalCount: 0,
            navbars: ["未认领", "已认领", "待分配"],
            currentTab: 0,
            state: "UnClaimed",
            queryStream: "",
            isShow: false,
            sorting: ""
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: "../search/searchManageReceivables"
                });
            },
            into: function into(item) {
                this.$apply();
                if (this.state !== "WaitForAssigned") {
                    _wepy2.default.navigateTo({
                        url: "./manageReceivablesDetail?id=" + item.id
                    });
                }
            },
            filter: function filter(name) {
                this.myinvoice = [];
                this.pageNumber = 1;
                switch (name) {
                    case "cteateTime":
                        this.getbill(this.state, "CreationTime desc");
                        break;
                    case "case":
                        this.getbill(this.state, "CaseName desc");
                        break;
                    default:
                        break;
                }
            },
            isshowFilter: function isshowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "onReachBottom",
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.getbill(this.state);
            } else {
                if (this.$parent.global.netWorkString) {
                    wx.showToast({
                        title: "我们是有底线的！",
                        icon: "none",
                        duration: 1500,
                        mask: false
                    });
                } else {
                    wx.showToast({
                        title: "网络连接失败！",
                        icon: "none",
                        duration: 1500,
                        mask: false
                    });
                }
            }
            this.$apply();
        }
    }, {
        key: "onPullDownRefresh",
        value: function onPullDownRefresh() {
            this.myinvoice = [];
            this.pageNumber = 1;
            this.getbill(this.state);
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        //获取发票

    }, {
        key: "getbill",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state, sort) {
                var filter, creationTimeRange, resData, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                if (this.state !== state) {
                                    this.pageNumber = 1;
                                }
                                this.sorting = sort ? sort : this.sorting;
                                filter = this.queryStream.filter ? this.queryStream.filter : "";
                                creationTimeRange = this.queryStream.creationTimeRange;
                                _context.next = 7;
                                return _ajax2.default.getData("/api/services/web/financialReceipt/GetReceipts", "post", {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    status: state,
                                    filter: filter,
                                    sorting: this.sorting,
                                    creationTimeRange: creationTimeRange
                                });

                            case 7:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 11 : _context.t0 === 403 ? 16 : _context.t0 === 500 ? 21 : 25;
                                break;

                            case 11:
                                console.log(this.state);
                                console.log(state);
                                if (this.state == state) {
                                    if (resData.data.result.items.length !== 0) {
                                        this.myinvoice = this.myinvoice.concat(resData.data.result.items);
                                        this.totalCount = resData.data.result.totalCount;
                                        for (index in this.myinvoice) {
                                            if (this.myinvoice[index].receiptDate) {
                                                this.myinvoice[index].receiptDate = this.myinvoice[index].receiptDate.split("T")[0];
                                            }
                                        }
                                        this.placeHolder.placeHolderShow = false;
                                        this.$apply();
                                    } else {
                                        console.log("数据为空");
                                        this.myinvoice = [];
                                        this.placeHolder.placeHolderImageIndex = 0;
                                        this.placeHolder.placeHolderShow = true;
                                    }
                                } else {
                                    if (resData.data.result.items.length !== 0) {
                                        this.myinvoice = resData.data.result.items;
                                        for (index in this.myinvoice) {
                                            if (this.myinvoice[index].receiptDate) {
                                                this.myinvoice[index].receiptDate = this.myinvoice[index].receiptDate.split("T")[0];
                                            }
                                        }
                                        this.state = state;
                                        this.totalCount = resData.data.result.totalCount;
                                        this.placeHolder.placeHolderShow = false;
                                        this.$apply();
                                    } else {
                                        console.log("数据为空");
                                        this.billData = [];
                                        this.placeHolder.placeHolderImageIndex = 0;
                                        this.placeHolder.placeHolderShow = true;
                                    }
                                }
                                this.$apply();
                                return _context.abrupt("break", 26);

                            case 16:
                                console.log("您没有权限");
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt("break", 26);

                            case 21:
                                console.log("数据请求错误");
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 25:
                                return _context.abrupt("break", 26);

                            case 26:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getbill(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return getbill;
        }()
    }, {
        key: "onLoad",
        value: function onLoad() {
            this.getbill(this.state);
        }
    }, {
        key: "onShow",
        value: function onShow() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            if (prevPage.data.refresh) {
                prevPage.data.refresh = false;
                this.myinvoice = [];
                this.pageNumber = 1;
                this.getbill(this.state);
            }
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/receivables/manageReceivables/manageReceivables'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZVJlY2VpdmFibGVzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJuYXZiYXIiLCJtaXhpbnMiLCJ3YXRjaCIsImN1cnJlbnRUYWIiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwid3giLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJkdXJhdGlvbiIsImdldGJpbGwiLCJkYXRhIiwibXlpbnZvaWNlIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJuYXZiYXJzIiwic3RhdGUiLCJxdWVyeVN0cmVhbSIsImlzU2hvdyIsInNvcnRpbmciLCJtZXRob2RzIiwidG9TZWFyY2giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW50byIsIml0ZW0iLCIkYXBwbHkiLCJ3ZXB5IiwiaWQiLCJmaWx0ZXIiLCJuYW1lIiwiaXNzaG93RmlsdGVyIiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInNvcnQiLCJzaG93TG9hZGluZyIsInN1Y2Nlc3MiLCJjcmVhdGlvblRpbWVSYW5nZSIsImFqYXgiLCJnZXREYXRhIiwicGFnZVNpemUiLCJzdGF0dXMiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImNvbmNhdCIsImluZGV4IiwicmVjZWlwdERhdGUiLCJzcGxpdCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJTaG93IiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwiYmlsbERhdGEiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxtQ0FBdUIsSUFEbEI7QUFFTEMsaUNBQXFCLE1BRmhCO0FBR0xDLGdDQUFvQixTQUhmO0FBSUxDLG1DQUF1QjtBQUpsQixTLFFBTVZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQywyQkFBMEIsYUFBM0IsRUFBeUMsMkJBQTBCLGFBQW5FLEVBQXBCLEVBQXNHLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUEvRyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyx3REFERTtBQUVGQztBQUZFLFMsUUFJTkMsTSxHQUFTLENBQUNBLGVBQUQsQyxRQUNUQyxLLEdBQVE7QUFDSkMsc0JBREksc0JBQ09DLFFBRFAsRUFDaUJDLFFBRGpCLEVBQzJCO0FBQzNCQyxtQkFBR0MsWUFBSCxDQUFnQjtBQUNkQywrQkFBVyxDQURHLEVBQ0E7QUFDZEMsOEJBQVUsQ0FGSSxDQUVGO0FBRkUsaUJBQWhCO0FBSUEsd0JBQVFMLFFBQVI7QUFDSSx5QkFBSyxDQUFMO0FBQ0ksNkJBQUtNLE9BQUwsQ0FBYSxXQUFiO0FBQ0E7QUFDQTtBQUNKLHlCQUFLLENBQUw7QUFDSSw2QkFBS0EsT0FBTCxDQUFhLFNBQWI7QUFDQTtBQUNKLHlCQUFLLENBQUw7QUFDSSw2QkFBS0EsT0FBTCxDQUFhLGlCQUFiO0FBQ0E7QUFDSjtBQUNJO0FBWlI7QUFjSDtBQXBCRyxTLFFBc0JSQyxJLEdBQU87QUFDSEMsdUJBQVcsRUFEUjtBQUVIQyx3QkFBWSxDQUZU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QUFHQXlCLHdDQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLHFDQUFLUSxXQUFMLENBQWlCRSxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0YsV0FBTCxDQUFpQkMsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS25DLE1BQUw7Ozs7QUFHQXlCLHdDQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLHFDQUFLUSxXQUFMLENBQWlCRSxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0YsV0FBTCxDQUFpQkMsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS25DLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FLSDtBQUNMLGlCQUFLaEIsT0FBTCxDQUFhLEtBQUtNLEtBQWxCO0FBQ0g7OztpQ0FDUTtBQUNMLGdCQUFJZ0QsUUFBUUMsaUJBQVo7QUFDQSxnQkFBSUMsV0FBV0YsTUFBTUEsTUFBTVQsTUFBTixHQUFlLENBQXJCLENBQWYsQ0FGSyxDQUVtQztBQUN4QyxpQkFBS3RDLFdBQUwsR0FBbUJpRCxTQUFTdkQsSUFBVCxDQUFjTSxXQUFqQztBQUNBLGdCQUFJaUQsU0FBU3ZELElBQVQsQ0FBY3dELE9BQWxCLEVBQTJCO0FBQ3ZCRCx5QkFBU3ZELElBQVQsQ0FBY3dELE9BQWQsR0FBd0IsS0FBeEI7QUFDQSxxQkFBS3ZELFNBQUwsR0FBaUIsRUFBakI7QUFDQSxxQkFBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLHFCQUFLSCxPQUFMLENBQWEsS0FBS00sS0FBbEI7QUFDSDtBQUNKOzs7O0VBdE44QlcsZUFBS3lDLEk7O2tCQUFuQi9FLEsiLCJmaWxlIjoibWFuYWdlUmVjZWl2YWJsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qc1wiO1xyXG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZVwiO1xyXG4gICAgaW1wb3J0IG1peGlucyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanNcIjtcclxuICAgIGltcG9ydCBuYXZiYXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGZvcm1hdFRpbWVcclxuICAgIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qc1wiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiBcImRhcmtcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiBcIiNmNGY0ZjRcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiBcIiNmNGY0ZjRcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwbGFjZUhvbGRlclwifSxcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2UsXHJcbiAgICAgICAgICAgIG5hdmJhclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XHJcbiAgICAgICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsIC8v5rua5Yqo5Yiw6aG16Z2i55qE55uu5qCH5L2N572u77yI5Y2V5L2NcHjvvIksXHJcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwIC8v5rua5Yqo5Yqo55S755qE5pe26ZW/77yM6buY6K6kMzAwbXPvvIzljZXkvY0gbXMsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIlVuQ2xhaW1lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IFwiVW5DbGFpbWVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiQ2xhaW1lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoXCJXYWl0Rm9yQXNzaWduZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBteWludm9pY2U6IFtdLFxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICB0b3RhbENvdW50OiAwLFxyXG4gICAgICAgICAgICBuYXZiYXJzOiBbXCLmnKrorqTpooZcIiwgXCLlt7LorqTpooZcIiwgXCLlvoXliIbphY1cIl0sXHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDAsXHJcbiAgICAgICAgICAgIHN0YXRlOiBcIlVuQ2xhaW1lZFwiLFxyXG4gICAgICAgICAgICBxdWVyeVN0cmVhbTogXCJcIixcclxuICAgICAgICAgICAgaXNTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc29ydGluZzogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdG9TZWFyY2goKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLi4vc2VhcmNoL3NlYXJjaE1hbmFnZVJlY2VpdmFibGVzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRvKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gXCJXYWl0Rm9yQXNzaWduZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIuL21hbmFnZVJlY2VpdmFibGVzRGV0YWlsP2lkPVwiICsgaXRlbS5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWx0ZXIobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3RlYXRlVGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSwgXCJDcmVhdGlvblRpbWUgZGVzY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNhc2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUsIFwiQ2FzZU5hbWUgZGVzY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzc2hvd0ZpbHRlcigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gIXRoaXMuaXNTaG93O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZ1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaIkeS7rOaYr+acieW6lee6v+eahO+8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIue9kee7nOi/nuaOpeWksei0pe+8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XHJcbiAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5blj5HnpahcclxuICAgICAgICBhc3luYyBnZXRiaWxsKHN0YXRlLCBzb3J0KSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNvcnRpbmcgPSBzb3J0ID8gc29ydCA6IHRoaXMuc29ydGluZztcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMucXVlcnlTdHJlYW0uZmlsdGVyID8gdGhpcy5xdWVyeVN0cmVhbS5maWx0ZXIgOiBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRpb25UaW1lUmFuZ2UgPSB0aGlzLnF1ZXJ5U3RyZWFtLmNyZWF0aW9uVGltZVJhbmdlO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgIFwiL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsUmVjZWlwdC9HZXRSZWNlaXB0c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJwb3N0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRoaXMuc29ydGluZyxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGlvblRpbWVSYW5nZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSB0aGlzLm15aW52b2ljZS5jb25jYXQocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLm15aW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubXlpbnZvaWNlW2luZGV4XS5yZWNlaXB0RGF0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlW2luZGV4XS5yZWNlaXB0RGF0ZSA9IHRoaXMubXlpbnZvaWNlW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0ucmVjZWlwdERhdGUuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlbDmja7kuLrnqbpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLm15aW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm15aW52b2ljZVtpbmRleF0ucmVjZWlwdERhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZVtpbmRleF0ucmVjZWlwdERhdGUgPSB0aGlzLm15aW52b2ljZVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnJlY2VpcHREYXRlLnNwbGl0KFwiVFwiKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pWw5o2u5Li656m6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaCqOayoeacieadg+mZkFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaVsOaNruivt+axgumUmeivr1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTsgLy/kuIrkuIDkuKrpobXpnaJcclxuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbSA9IHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW07XHJcbiAgICAgICAgICAgIGlmIChwcmV2UGFnZS5kYXRhLnJlZnJlc2gpIHtcclxuICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==