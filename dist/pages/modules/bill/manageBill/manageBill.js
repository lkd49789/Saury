'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _navbar = require('./../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

var _mixin = require('./../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var manageBill = function (_wepy$page) {
    _inherits(manageBill, _wepy$page);

    function manageBill() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, manageBill);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = manageBill.__proto__ || Object.getPrototypeOf(manageBill)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default
        }, _this.mixins = [_mixin2.default], _this.data = {
            billData: [],
            pageNumber: 1,
            totalCount: 0,
            currentTab: 0,
            navbars: ['待审核', '已审核'],
            state: "N",
            queryStream: {},
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: '../search/searchManageBill'
                });
            },
            into: function into(item) {
                _wepy2.default.navigateTo({
                    url: './manageBillDetail?id=' + item.id
                });
            },
            isshowFilter: function isshowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            },
            filter: function filter(name) {
                this.billData = [];
                this.pageNumber = 1;
                switch (name) {
                    case 'cteateTime':
                        this.getbill(this.state, 'CreationTime desc');
                        break;
                    case 'id':
                        this.getbill(this.state, 'Id desc');
                        break;
                    default:
                        break;
                }
            }
        }, _this.watch = {
            currentTab: function currentTab(newValue, oldValue) {
                switch (newValue) {
                    case 0:
                        this.getbill("N");
                        break;
                    case 1:
                        this.getbill("A");
                        break;
                    default:
                        break;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(manageBill, [{
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
            this.billData = [];
            this.pageNumber = 1;
            this.getbill(this.state);
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        //获取账单

    }, {
        key: 'getbill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state, sort) {
                var CaseName, ClientName, Currency, KeyWord, billDate, resData;
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
                                CaseName = this.queryStream.CaseName ? this.queryStream.CaseName : '';
                                ClientName = this.queryStream.ClientName ? this.queryStream.ClientName : '';
                                Currency = this.queryStream.Currency ? this.queryStream.Currency : '';
                                KeyWord = this.queryStream.KeyWord ? this.queryStream.KeyWord : '';
                                billDate = this.queryStream.billDate ? this.queryStream.billDate : '';
                                _context.next = 10;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetWaitApprovalBillings', 'post', {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    ProcessStatus: state,
                                    CaseName: CaseName,
                                    ClientName: ClientName,
                                    Currency: Currency,
                                    KeyWord: KeyWord,
                                    billDate: billDate,
                                    sorting: this.sorting
                                });

                            case 10:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 14 : _context.t0 === 403 ? 17 : _context.t0 === 500 ? 22 : 26;
                                break;

                            case 14:
                                if (this.state == state) {
                                    if (resData.data.result.items.length !== 0) {
                                        this.billData = this.billData.concat(resData.data.result.items);
                                        this.totalCount = resData.data.result.totalCount;
                                        this.placeHolder.placeHolderShow = false;
                                        this.$apply();
                                    } else {
                                        console.log('数据为空');
                                        this.billData = [];
                                        this.placeHolder.placeHolderImageIndex = 0;
                                        this.placeHolder.placeHolderShow = true;
                                    }
                                } else {
                                    if (resData.data.result.items.length !== 0) {
                                        this.billData = resData.data.result.items;
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
                                return _context.abrupt('break', 27);

                            case 17:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 27);

                            case 22:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 26:
                                return _context.abrupt('break', 27);

                            case 27:
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
            this.getbill("N");
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            if (prevPage.data.refresh) {
                prevPage.data.refresh = false;
                this.billData = [];
                this.pageNumber = 1;
                this.getbill(this.state);
            }
        }
    }]);

    return manageBill;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(manageBill , 'pages/modules/bill/manageBill/manageBill'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUJpbGwuanMiXSwibmFtZXMiOlsibWFuYWdlQmlsbCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwibmF2YmFyIiwibWl4aW5zIiwiZGF0YSIsImJpbGxEYXRhIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJjdXJyZW50VGFiIiwibmF2YmFycyIsInN0YXRlIiwicXVlcnlTdHJlYW0iLCJpc1Nob3ciLCJzb3J0aW5nIiwibWV0aG9kcyIsInRvU2VhcmNoIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW50byIsIml0ZW0iLCJ3ZXB5IiwiaWQiLCJpc3Nob3dGaWx0ZXIiLCIkYXBwbHkiLCJmaWx0ZXIiLCJuYW1lIiwiZ2V0YmlsbCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIiRwYXJlbnQiLCJnbG9iYWwiLCJuZXRXb3JrU3RyaW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInNvcnQiLCJzaG93TG9hZGluZyIsInN1Y2Nlc3MiLCJDYXNlTmFtZSIsIkNsaWVudE5hbWUiLCJDdXJyZW5jeSIsIktleVdvcmQiLCJiaWxsRGF0ZSIsImFqYXgiLCJnZXREYXRhIiwicGFnZVNpemUiLCJQcm9jZXNzU3RhdHVzIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImNvbmNhdCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJTaG93IiwiY29uc29sZSIsImxvZyIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBhZ2VzIiwi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LFNBQVM5RCxJQUFULENBQWNPLFdBQWpDO0FBQ0EsZ0JBQUl1RCxTQUFTOUQsSUFBVCxDQUFjK0QsT0FBbEIsRUFBMkI7QUFDdkJELHlCQUFTOUQsSUFBVCxDQUFjK0QsT0FBZCxHQUF3QixLQUF4QjtBQUNBLHFCQUFLOUQsUUFBTCxHQUFnQixFQUFoQjtBQUNBLHFCQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EscUJBQUtxQixPQUFMLENBQWEsS0FBS2pCLEtBQWxCO0FBQ0g7QUFDSjs7OztFQTdMbUNXLGVBQUsrQyxJOztrQkFBeEI3RSxVIiwiZmlsZSI6Im1hbmFnZUJpbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XHJcbiAgICBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wbGFjZUhvbGRlckltYWdlJztcclxuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWFuYWdlQmlsbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwbGFjZUhvbGRlclwifSxcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2UsXHJcbiAgICAgICAgICAgIG5hdmJhclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYmlsbERhdGE6IFtdLFxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICB0b3RhbENvdW50OiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwLFxyXG4gICAgICAgICAgICBuYXZiYXJzOiBbJ+W+heWuoeaguCcsICflt7LlrqHmoLgnXSxcclxuICAgICAgICAgICAgc3RhdGU6IFwiTlwiLFxyXG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXHJcbiAgICAgICAgICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNvcnRpbmc6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0b1NlYXJjaCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL3NlYXJjaC9zZWFyY2hNYW5hZ2VCaWxsJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludG8oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL21hbmFnZUJpbGxEZXRhaWw/aWQ9JyArIGl0ZW0uaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgaXNzaG93RmlsdGVyKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3dcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbHRlcihuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3RlYXRlVGltZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlLCdDcmVhdGlvblRpbWUgZGVzYycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUsJ0lkIGRlc2MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdhdGNoID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50VGFiKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiTlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoXCJBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmlsbERhdGEgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPlui0puWNlVxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwoc3RhdGUsc29ydCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNvcnRpbmcgPSBzb3J0ID8gc29ydCA6IHRoaXMuc29ydGluZztcclxuICAgICAgICAgICAgdmFyIENhc2VOYW1lID0gdGhpcy5xdWVyeVN0cmVhbS5DYXNlTmFtZSA/IHRoaXMucXVlcnlTdHJlYW0uQ2FzZU5hbWUgOiAnJztcclxuICAgICAgICAgICAgdmFyIENsaWVudE5hbWUgPSB0aGlzLnF1ZXJ5U3RyZWFtLkNsaWVudE5hbWUgPyB0aGlzLnF1ZXJ5U3RyZWFtLkNsaWVudE5hbWUgOiAnJztcclxuICAgICAgICAgICAgdmFyIEN1cnJlbmN5ID0gdGhpcy5xdWVyeVN0cmVhbS5DdXJyZW5jeSA/IHRoaXMucXVlcnlTdHJlYW0uQ3VycmVuY3kgOiAnJztcclxuICAgICAgICAgICAgdmFyIEtleVdvcmQgPSB0aGlzLnF1ZXJ5U3RyZWFtLktleVdvcmQgPyB0aGlzLnF1ZXJ5U3RyZWFtLktleVdvcmQgOiAnJztcclxuICAgICAgICAgICAgdmFyIGJpbGxEYXRlID0gdGhpcy5xdWVyeVN0cmVhbS5iaWxsRGF0ZSA/IHRoaXMucXVlcnlTdHJlYW0uYmlsbERhdGUgOiAnJztcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQmlsbGluZy9HZXRXYWl0QXBwcm92YWxCaWxsaW5ncycsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2Nlc3NTdGF0dXM6IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIENhc2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIENsaWVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ3VycmVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgS2V5V29yZCxcclxuICAgICAgICAgICAgICAgICAgICBiaWxsRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YSA9IHRoaXMuYmlsbERhdGEuY29uY2F0KHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5Li656m6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5Li656m6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiTlwiKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8v5LiK5LiA5Liq6aG16Z2iXHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW0gPSBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtO1xyXG4gICAgICAgICAgICBpZiAocHJldlBhZ2UuZGF0YS5yZWZyZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmlsbERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4iXX0=