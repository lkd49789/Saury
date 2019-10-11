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
                wx.pageScrollTo({
                    scrollTop: 0, //滚动到页面的目标位置（单位px）,
                    duration: 0 //滚动动画的时长，默认300ms，单位 ms,
                });
                switch (newValue) {
                    case 0:
                        this.getbill("UnHandled");
                        break;
                    case 1:
                        this.getbill("Invoiced");
                        break;
                    case 2:
                        this.getbill("Claimed");
                        break;
                    case 3:
                        this.getbill("Canceled");
                        break;
                    case 4:
                        this.getbill("Returned");
                        break;
                    case 5:
                        this.getbill("UnSubmitted");
                        break;
                    default:
                        break;
                }
            }
        }, _this.data = {
            myinvoice: [],
            pageNumber: 1,
            totalCount: 0,
            navbars: ['待处理', '已开票', '已领取', '已作废', '已退回', '未提交'],
            currentTab: 0,
            state: "UnHandled",
            queryStream: {},
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: '../search/searchMyNoice'
                });
            },
            into: function into(item) {
                this.$apply();
                _wepy2.default.navigateTo({
                    url: './myinvoiceDetail?id=' + item.id
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
                var filter, creationTimeRange, resData, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state !== state) {
                                    this.pageNumber = 1;
                                }
                                this.sorting = sort ? sort : this.sorting;
                                filter = this.queryStream.filter ? this.queryStream.filter : '';
                                creationTimeRange = this.queryStream.creationTimeRange ? this.queryStream.creationTimeRange : '';
                                _context.next = 6;
                                return _ajax2.default.getData('/api/services/web/financialInvoice/GetUserInvoices', 'post', {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    status: state,
                                    creationTimeRange: creationTimeRange,
                                    filter: filter,
                                    sorting: this.sorting
                                });

                            case 6:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 10 : _context.t0 === 403 ? 13 : _context.t0 === 500 ? 18 : 22;
                                break;

                            case 10:
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/invoice/myInvoce/myinvoice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15aW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwibmF2YmFyIiwibWl4aW5zIiwid2F0Y2giLCJjdXJyZW50VGFiIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsInd4IiwicGFnZVNjcm9sbFRvIiwic2Nyb2xsVG9wIiwiZHVyYXRpb24iLCJnZXRiaWxsIiwiZGF0YSIsIm15aW52b2ljZSIsInBhZ2VOdW1iZXIiLCJ0b3RhbENvdW50IiwibmF2YmFycyIsInN0YXRlIiwicXVlcnlTdHJlYW0iLCJpc1Nob3ciLCJzb3J0aW5nIiwibWV0aG9kcyIsInRvU2VhcmNoIiwibmF2aWdhdGVUbyIsInVybCIsImludG8iLCJpdGVtIiwiJGFwcGx5Iiwid2VweSIsImlkIiwiZmlsdGVyIiwibmFtZSIsImlzc2hvd0ZpbHRlciIsIiRwYXJlbnQiLCJnbG9iYWwiLCJuZXRXb3JrU3RyaW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJzb3J0IiwiY3JlYXRpb25UaW1lUmFuZ2UiLCJhamF4IiwiZ2V0RGF0YSIsInBhZ2VTaXplIiwic3RhdHVzIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImNvbmNhdCIsImluZGV4IiwiY3JlYXRpb25UaW1lIiwic3BsaXQiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVyU2hvdyIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJiaWxsRGF0YSIsInBhZ2VzIiwiZ2V0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O0FBQ0EscUNBQUsvQixNQUFMOzs7O0FBR0FnQyx3Q0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxxQ0FBS0gsV0FBTCxDQUFpQkkscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtKLFdBQUwsQ0FBaUJDLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUsvQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBS0g7QUFDTCxpQkFBS2hCLE9BQUwsQ0FBYSxLQUFLTSxLQUFsQjtBQUNIOzs7aUNBQ1E7QUFDTCxnQkFBSThDLFFBQVFDLGlCQUFaO0FBQ0EsZ0JBQUlDLFdBQVdGLE1BQU1BLE1BQU1YLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBRkssQ0FFbUM7QUFDeEMsaUJBQUtsQyxXQUFMLEdBQW1CK0MsU0FBU3JELElBQVQsQ0FBY00sV0FBakM7QUFDQSxnQkFBSStDLFNBQVNyRCxJQUFULENBQWNzRCxPQUFsQixFQUEyQjtBQUN2QkQseUJBQVNyRCxJQUFULENBQWNzRCxPQUFkLEdBQXdCLEtBQXhCO0FBQ0EscUJBQUtyRCxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EscUJBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxxQkFBS0gsT0FBTCxDQUFhLEtBQUtNLEtBQWxCO0FBQ0g7QUFDSjs7OztFQTFNOEJXLGVBQUt1QyxJOztrQkFBbkI3RSxLIiwiZmlsZSI6Im15aW52b2ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcclxuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XHJcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcclxuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwbGFjZUhvbGRlclwifSxcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2UsXHJcbiAgICAgICAgICAgIG5hdmJhclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWl4aW5zID0gW21peGluc11cclxuICAgICAgICB3YXRjaCA9IHtcclxuICAgICAgICAgICAgY3VycmVudFRhYihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHd4LnBhZ2VTY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCwgLy/mu5rliqjliLDpobXpnaLnmoTnm67moIfkvY3nva7vvIjljZXkvY1weO+8iSxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAgLy/mu5rliqjliqjnlLvnmoTml7bplb/vvIzpu5jorqQzMDBtc++8jOWNleS9jSBtcyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiVW5IYW5kbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIkludm9pY2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIkNsYWltZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiQ2FuY2VsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiUmV0dXJuZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiVW5TdWJtaXR0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBteWludm9pY2U6IFtdLFxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICB0b3RhbENvdW50OiAwLFxyXG4gICAgICAgICAgICBuYXZiYXJzOiBbJ+W+heWkhOeQhicsICflt7LlvIDnpagnLCAn5bey6aKG5Y+WJywgJ+W3suS9nOW6nycsICflt7LpgIDlm54nLCAn5pyq5o+Q5LqkJ10sXHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDAsXHJcbiAgICAgICAgICAgIHN0YXRlOiBcIlVuSGFuZGxlZFwiLFxyXG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXHJcbiAgICAgICAgICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNvcnRpbmc6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0b1NlYXJjaCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL3NlYXJjaC9zZWFyY2hNeU5vaWNlJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludG8oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL215aW52b2ljZURldGFpbD9pZD0nICsgaXRlbS5pZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbHRlcihuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N0ZWF0ZVRpbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSwnQ3JlYXRpb25UaW1lIGRlc2MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYXNlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUsJ0Nhc2VOYW1lIGRlc2MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNzaG93RmlsdGVyKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3dcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXIgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgKz0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPluWPkeelqFxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwoc3RhdGUsc29ydCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNvcnRpbmcgPSBzb3J0ID8gc29ydCA6IHRoaXMuc29ydGluZztcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMucXVlcnlTdHJlYW0uZmlsdGVyID8gdGhpcy5xdWVyeVN0cmVhbS5maWx0ZXIgOiAnJztcclxuICAgICAgICAgICAgdmFyIGNyZWF0aW9uVGltZVJhbmdlID0gdGhpcy5xdWVyeVN0cmVhbS5jcmVhdGlvblRpbWVSYW5nZSA/IHRoaXMucXVlcnlTdHJlYW0uY3JlYXRpb25UaW1lUmFuZ2UgOiAnJztcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsSW52b2ljZS9HZXRVc2VySW52b2ljZXMnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW9uVGltZVJhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmcgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gdGhpcy5teWludm9pY2UuY29uY2F0KHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5teWludm9pY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZVtpbmRleF0uY3JlYXRpb25UaW1lID0gdGhpcy5teWludm9pY2VbaW5kZXhdLmNyZWF0aW9uVGltZS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7kuLrnqbonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5teWludm9pY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZVtpbmRleF0uY3JlYXRpb25UaW1lID0gdGhpcy5teWludm9pY2VbaW5kZXhdLmNyZWF0aW9uVGltZS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruS4uuepuicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdOyAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKHByZXZQYWdlLmRhdGEucmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiJdfQ==