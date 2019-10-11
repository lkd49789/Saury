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
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default
        }, _this.mixins = [_mixin2.default], _this.watch = {
            currentTab: function currentTab(newValue, oldValue) {
                switch (newValue) {
                    case 0:
                        this.getbill("");
                        break;
                    case 1:
                        this.getbill("WaitForConfirmed");
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
            navbars: ['全部', '待确认', '待分配'],
            currentTab: 0,
            state: "",
            queryStream: {},
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: '../search/searchReceivables'
                });
            },
            into: function into(item) {
                _wepy2.default.navigateTo({
                    url: './myReceivablesDetail?id=' + item.id
                });
            },
            filter: function filter(name) {
                this.myinvoice = [];
                this.pageNumber = 1;
                switch (name) {
                    case 'cteateTime':
                        this.getbill(this.state, 'CreationTime desc');
                        break;
                    case 'case':
                        this.getbill(this.state, 'CaseName desc');
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
            this.pageNumber = 1;
            this.getbill(this.state);
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        //获取发票

    }, {
        key: 'getbill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state, sort) {
                var filter, resData, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state !== state) {
                                    this.pageNumber = 1;
                                }
                                this.sorting = sort ? sort : this.sorting;
                                filter = this.queryStream.filter ? this.queryStream.filter : '';
                                _context.next = 5;
                                return _ajax2.default.getData('/api/services/web/financialReceipt/GetUserReceipts', 'post', {
                                    isRoleFilter: true,
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    status: state,
                                    filter: filter,
                                    sorting: this.sorting
                                });

                            case 5:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 9 : _context.t0 === 403 ? 12 : _context.t0 === 500 ? 17 : 21;
                                break;

                            case 9:
                                if (this.state == state) {
                                    if (resData.data.result.items.length !== 0) {
                                        this.myinvoice = this.myinvoice.concat(resData.data.result.items);
                                        this.totalCount = resData.data.result.totalCount;
                                        for (index in this.myinvoice) {
                                            this.myinvoice[index].creationTime = this.myinvoice[index].creationTime.split('T')[0];
                                        }
                                        this.placeHolder.placeHolderShow = false;
                                        this.$apply();
                                    } else {
                                        console.log('数据为空');
                                        this.myinvoice = [];
                                        this.placeHolder.placeHolderImageIndex = 0;
                                        this.placeHolder.placeHolderShow = true;
                                    }
                                } else {
                                    if (resData.data.result.items.length !== 0) {
                                        this.myinvoice = resData.data.result.items;
                                        for (index in this.myinvoice) {
                                            this.myinvoice[index].creationTime = this.myinvoice[index].creationTime.split('T')[0];
                                        }
                                        this.state = state;
                                        this.totalCount = resData.data.result.totalCount;
                                        this.placeHolder.placeHolderShow = false;
                                        this.$apply();
                                    } else {
                                        console.log('数据为空');
                                        this.billData = [];
                                        this.state = state;
                                        this.placeHolder.placeHolderImageIndex = 0;
                                        this.placeHolder.placeHolderShow = true;
                                    }
                                }
                                this.$apply();
                                return _context.abrupt('break', 22);

                            case 12:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 22);

                            case 17:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 21:
                                return _context.abrupt('break', 22);

                            case 22:
                            case 'end':
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
        key: 'onLoad',
        value: function onLoad() {
            this.getbill(this.state);
        }
    }, {
        key: 'onShow',
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/receivables/myReceivables/myReceivables'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15UmVjZWl2YWJsZXMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2VIb2xkZXJJbWFnZSIsIm5hdmJhciIsIm1peGlucyIsIndhdGNoIiwiY3VycmVudFRhYiIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJnZXRiaWxsIiwiZGF0YSIsIm15aW52b2ljZSIsInBhZ2VOdW1iZXIiLCJ0b3RhbENvdW50IiwibmF2YmFycyIsInN0YXRlIiwicXVlcnlTdHJlYW0iLCJpc1Nob3ciLCJzb3J0aW5nIiwibWV0aG9kcyIsInRvU2VhcmNoIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW50byIsIml0ZW0iLCJ3ZXB5IiwiaWQiLCJmaWx0ZXIiLCJuYW1lIiwiaXNzaG93RmlsdGVyIiwiJGFwcGx5IiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwic29ydCIsImFqYXgiLCJnZXREYXRhIiwiaXNSb2xlRmlsdGVyIiwicGFnZVNpemUiLCJzdGF0dXMiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsIml0ZW1zIiwibGVuZ3RoIiwiY29uY2F0IiwiaW5kZXgiLCJjcmVhdGlvblRpbWUiLCJzcGxpdCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJTaG93IiwiY29uc29sZSIsImxvZyIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsImJpbGxEYXRhIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsInJl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Q0FBY3dELE9BQWxCLEVBQTJCO0FBQ3ZCRCx5QkFBU3ZELElBQVQsQ0FBY3dELE9BQWQsR0FBd0IsS0FBeEI7QUFDQSxxQkFBS3ZELFNBQUwsR0FBaUIsRUFBakI7QUFDQSxxQkFBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLHFCQUFLSCxPQUFMLENBQWEsS0FBS00sS0FBbEI7QUFDSDtBQUNKOzs7O0VBM0w4QlcsZUFBS3lDLEk7O2tCQUFuQjNFLEsiLCJmaWxlIjoibXlSZWNlaXZhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcclxuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XHJcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcclxuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwbGFjZUhvbGRlclwifSxcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2UsXHJcbiAgICAgICAgICAgIG5hdmJhclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWl4aW5zID0gW21peGluc11cclxuICAgICAgICB3YXRjaCA9IHtcclxuICAgICAgICAgICAgY3VycmVudFRhYihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoXCJXYWl0Rm9yQ29uZmlybWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIldhaXRGb3JBc3NpZ25lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG15aW52b2ljZTogW10sXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIG5hdmJhcnM6IFsn5YWo6YOoJywgJ+W+heehruiupCcsICflvoXliIbphY0nXSxcclxuICAgICAgICAgICAgY3VycmVudFRhYjogMCxcclxuICAgICAgICAgICAgc3RhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyZWFtOiB7fSxcclxuICAgICAgICAgICAgaXNTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc29ydGluZzogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRvU2VhcmNoKCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vc2VhcmNoL3NlYXJjaFJlY2VpdmFibGVzJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludG8oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL215UmVjZWl2YWJsZXNEZXRhaWw/aWQ9JyArIGl0ZW0uaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWx0ZXIobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjdGVhdGVUaW1lJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUsICdDcmVhdGlvblRpbWUgZGVzYycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSwgJ0Nhc2VOYW1lIGRlc2MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNzaG93RmlsdGVyKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3dcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXIgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgKz0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPluWPkeelqFxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwoc3RhdGUsIHNvcnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zb3J0aW5nID0gc29ydCA/IHNvcnQgOiB0aGlzLnNvcnRpbmc7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnF1ZXJ5U3RyZWFtLmZpbHRlciA/IHRoaXMucXVlcnlTdHJlYW0uZmlsdGVyIDogJyc7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbFJlY2VpcHQvR2V0VXNlclJlY2VpcHRzJyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUm9sZUZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRoaXMuc29ydGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IHRoaXMubXlpbnZvaWNlLmNvbmNhdChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMubXlpbnZvaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2VbaW5kZXhdLmNyZWF0aW9uVGltZSA9IHRoaXMubXlpbnZvaWNlW2luZGV4XS5jcmVhdGlvblRpbWUuc3BsaXQoJ1QnKVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5Li656m6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5teWludm9pY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZVtpbmRleF0uY3JlYXRpb25UaW1lID0gdGhpcy5teWludm9pY2VbaW5kZXhdLmNyZWF0aW9uVGltZS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruS4uuepuicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdOyAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKHByZXZQYWdlLmRhdGEucmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiJdfQ==