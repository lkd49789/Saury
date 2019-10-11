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

var manageInvoice = function (_wepy$page) {
    _inherits(manageInvoice, _wepy$page);

    function manageInvoice() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, manageInvoice);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = manageInvoice.__proto__ || Object.getPrototypeOf(manageInvoice)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
                    default:
                        break;
                }
            }
        }, _this.data = {
            myinvoice: [],
            pageNumber: 1,
            totalCount: 0,
            navbars: ['待处理', '已开票', '已领取', '已作废', '已退回'],
            currentTab: 0,
            state: "UnHandled",
            queryStream: {},
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: '../search/searchManageNoice'
                });
            },
            into: function into(item) {
                this.$apply();
                _wepy2.default.navigateTo({
                    url: './manageInvoiceDetail?id=' + item.id
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

    _createClass(manageInvoice, [{
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
                                return _ajax2.default.getData('/api/services/web/financialInvoice/GetInvoices', 'post', {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    status: state,
                                    creationTimeRange: creationTimeRange,
                                    filter: filter,
                                    sorting: this.sorting,
                                    creatorUserName: this.queryStream.creatorUserName
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
            var data = pages[pages.length - 1].data; //上一个页面

            this.queryStream = data.queryStream;
            if (data.refresh) {
                data.refresh = false;
                this.myinvoice = [];
                this.pageNumber = 1;
                this.getbill(this.state);
            }
        }
    }]);

    return manageInvoice;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(manageInvoice , 'pages/modules/invoice/manageInvoce/manageInvoice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUludm9pY2UuanMiXSwibmFtZXMiOlsibWFuYWdlSW52b2ljZSIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwibmF2YmFyIiwibWl4aW5zIiwid2F0Y2giLCJjdXJyZW50VGFiIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsInd4IiwicGFnZVNjcm9sbFRvIiwic2Nyb2xsVG9wIiwiZHVyYXRpb24iLCJnZXRiaWxsIiwiZGF0YSIsIm15aW52b2ljZSIsInBhZ2VOdW1iZXIiLCJ0b3RhbENvdW50IiwibmF2YmFycyIsInN0YXRlIiwicXVlcnlTdHJlYW0iLCJpc1Nob3ciLCJzb3J0aW5nIiwibWV0aG9kcyIsInRvU2VhcmNoIiwibmF2aWdhdGVUbyIsInVybCIsImludG8iLCJpdGVtIiwiJGFwcGx5Iiwid2VweSIsImlkIiwiZmlsdGVyIiwibmFtZSIsImlzc2hvd0ZpbHRlciIsIiRwYXJlbnQiLCJnbG9iYWwiLCJuZXRXb3JrU3RyaW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJzb3J0IiwiY3JlYXRpb25UaW1lUmFuZ2UiLCJhamF4IiwiZ2V0RGF0YSIsInBhZ2VTaXplIiwic3RhdHVzIiwiY3JlYXRvclVzZXJOYW1lIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImNvbmNhdCIsImluZGV4IiwiY3JlYXRpb25UaW1lIiwic3BsaXQiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVyU2hvdyIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZUhvbGRlckltYWdl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QVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EscUNBQUtILFdBQUwsQ0FBaUJJLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLSixXQUFMLENBQWlCQyxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLaEMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUtIO0FBQ0wsaUJBQUtoQixPQUFMLENBQWEsS0FBS00sS0FBbEI7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUkrQyxRQUFRQyxpQkFBWjtBQURLLGdCQUVDckQsSUFGRCxHQUVVb0QsTUFBTUEsTUFBTVgsTUFBTixHQUFlLENBQXJCLENBRlYsQ0FFQ3pDLElBRkQsRUFFbUM7O0FBQ3hDLGlCQUFLTSxXQUFMLEdBQW1CTixLQUFLTSxXQUF4QjtBQUNBLGdCQUFJTixLQUFLc0QsT0FBVCxFQUFrQjtBQUNkdEQscUJBQUtzRCxPQUFMLEdBQWUsS0FBZjtBQUNBLHFCQUFLckQsU0FBTCxHQUFpQixFQUFqQjtBQUNBLHFCQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EscUJBQUtILE9BQUwsQ0FBYSxLQUFLTSxLQUFsQjtBQUNIO0FBQ0o7Ozs7RUF2TXNDVyxlQUFLdUMsSTs7a0JBQTNCN0UsYSIsImZpbGUiOiJtYW5hZ2VJbnZvaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xyXG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wbGFjZUhvbGRlckltYWdlJztcclxuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xyXG4gICAgaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGZvcm1hdFRpbWVcclxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hbmFnZUludm9pY2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclRvcDogJyNmNGY0ZjQnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcclxuICAgICAgICB9O1xyXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1widi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGxhY2VIb2xkZXJcIn0sXCJuYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdmJhcnMub25jZVwiOlwibmF2YmFyc1wiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlLFxyXG4gICAgICAgICAgICBuYXZiYXJcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdXHJcbiAgICAgICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsIC8v5rua5Yqo5Yiw6aG16Z2i55qE55uu5qCH5L2N572u77yI5Y2V5L2NcHjvvIksXHJcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwIC8v5rua5Yqo5Yqo55S755qE5pe26ZW/77yM6buY6K6kMzAwbXPvvIzljZXkvY0gbXMsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIlVuSGFuZGxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoXCJJbnZvaWNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoXCJDbGFpbWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIkNhbmNlbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbChcIlJldHVybmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgbXlpbnZvaWNlOiBbXSxcclxuICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcclxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcclxuICAgICAgICAgICAgbmF2YmFyczogWyflvoXlpITnkIYnLCAn5bey5byA56WoJywgJ+W3sumihuWPlicsICflt7LkvZzlup8nLCAn5bey6YCA5ZueJ10sXHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDAsXHJcbiAgICAgICAgICAgIHN0YXRlOiBcIlVuSGFuZGxlZFwiLFxyXG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXHJcbiAgICAgICAgICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNvcnRpbmc6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0b1NlYXJjaCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL3NlYXJjaC9zZWFyY2hNYW5hZ2VOb2ljZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRvKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9tYW5hZ2VJbnZvaWNlRGV0YWlsP2lkPScgKyBpdGVtLmlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVyKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3RlYXRlVGltZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlLCdDcmVhdGlvblRpbWUgZGVzYycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSwnQ2FzZU5hbWUgZGVzYycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc3Nob3dGaWx0ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvdyA9ICF0aGlzLmlzU2hvd1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgLyAxMCA+IHRoaXMucGFnZU51bWJlciAmJiB0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lus5piv5pyJ5bqV57q/55qE77yBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSl77yBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxyXG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5Y+R56WoXHJcbiAgICAgICAgYXN5bmMgZ2V0YmlsbChzdGF0ZSxzb3J0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB0aGlzLnNvcnRpbmcgPSBzb3J0ID8gc29ydCA6IHRoaXMuc29ydGluZztcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMucXVlcnlTdHJlYW0uZmlsdGVyID8gdGhpcy5xdWVyeVN0cmVhbS5maWx0ZXIgOiAnJztcclxuICAgICAgICAgICAgdmFyIGNyZWF0aW9uVGltZVJhbmdlID0gdGhpcy5xdWVyeVN0cmVhbS5jcmVhdGlvblRpbWVSYW5nZSA/IHRoaXMucXVlcnlTdHJlYW0uY3JlYXRpb25UaW1lUmFuZ2UgOiAnJztcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsSW52b2ljZS9HZXRJbnZvaWNlcycsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpb25UaW1lUmFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRoaXMuc29ydGluZyxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdG9yVXNlck5hbWU6dGhpcy5xdWVyeVN0cmVhbS5jcmVhdG9yVXNlck5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSB0aGlzLm15aW52b2ljZS5jb25jYXQocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLm15aW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlW2luZGV4XS5jcmVhdGlvblRpbWUgPSB0aGlzLm15aW52b2ljZVtpbmRleF0uY3JlYXRpb25UaW1lLnNwbGl0KCdUJylbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruS4uuepuicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLm15aW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlW2luZGV4XS5jcmVhdGlvblRpbWUgPSB0aGlzLm15aW52b2ljZVtpbmRleF0uY3JlYXRpb25UaW1lLnNwbGl0KCdUJylbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5Li656m6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGxldCB7IGRhdGEgfSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdOyAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gZGF0YS5xdWVyeVN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5yZWZyZXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiJdfQ==