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
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.mixins = [_mixin2.default], _this.data = {
            billData: [],
            pageNumber: 1,
            totalCount: 0,
            queryStream: {},
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: '../search/searchMyBill'
                });
            },
            into: function into(item) {
                _wepy2.default.navigateTo({
                    url: './myBillDetail?id=' + item.id
                });
            },
            ishowFilter: function ishowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            },
            filter: function filter(name) {
                this.billData = [];
                this.pageNumber = 1;
                switch (name) {
                    case 'cteateTime':
                        this.getbill('CreationTime desc');
                        break;
                    case 'id':
                        this.getbill('Id desc');
                        break;
                    default:
                        break;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.getbill();
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
            this.getbill();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        //获取账单

    }, {
        key: 'getbill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sort) {
                var CaseName, ClientName, Currency, KeyWord, billDate, resData, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                this.sorting = sort ? sort : this.sorting;
                                CaseName = this.queryStream.CaseName ? this.queryStream.CaseName : '';
                                ClientName = this.queryStream.ClientName ? this.queryStream.ClientName : '';
                                Currency = this.queryStream.Currency ? this.queryStream.Currency : '';
                                KeyWord = this.queryStream.KeyWord ? this.queryStream.KeyWord : '';
                                billDate = this.queryStream.billDate ? this.queryStream.billDate : '';
                                _context.next = 9;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetMyBillings', 'post', {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    CaseName: CaseName,
                                    ClientName: ClientName,
                                    Currency: Currency,
                                    KeyWord: KeyWord,
                                    billDate: billDate,
                                    sorting: this.sorting
                                });

                            case 9:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 13 : _context.t0 === 403 ? 16 : _context.t0 === 500 ? 21 : 25;
                                break;

                            case 13:
                                if (resData.data.result.items.length !== 0) {
                                    this.billData = this.billData.concat(resData.data.result.items);
                                    this.totalCount = resData.data.result.totalCount;
                                    isRefresh = {
                                        isRefresh: false
                                    };

                                    wx.setStorageSync('isRefresh', isRefresh);
                                    this.$apply();
                                } else {
                                    console.log('数据为空');
                                    this.placeHolder.placeHolderImageIndex = 0;
                                    this.placeHolder.placeHolderShow = true;
                                }
                                this.$apply();
                                return _context.abrupt('break', 26);

                            case 16:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 26);

                            case 21:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 25:
                                return _context.abrupt('break', 26);

                            case 26:
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
        key: 'onLoad',
        value: function onLoad() {
            this.getbill();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            console.log(pages);
            if (prevPage.data.refresh) {
                prevPage.data.refresh = false;
                this.billData = [];
                this.pageNumber = 1;
                this.getbill();
            }
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/bill/myBill/myBill'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15QmlsbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwibWl4aW5zIiwiZGF0YSIsImJpbGxEYXRhIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJxdWVyeVN0cmVhbSIsImlzU2hvdyIsInNvcnRpbmciLCJtZXRob2RzIiwidG9TZWFyY2giLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbnRvIiwiaXRlbSIsIndlcHkiLCJpZCIsImlzaG93RmlsdGVyIiwiJGFwcGx5IiwiZmlsdGVyIiwibmFtZSIsImdldGJpbGwiLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJzb3J0Iiwic2hvd0xvYWRpbmciLCJzdWNjZXNzIiwiQ2FzZU5hbWUiLCJDbGllbnROYW1lIiwiQ3VycmVuY3kiLCJLZXlXb3JkIiwiYmlsbERhdGUiLCJhamF4IiwiZ2V0RGF0YSIsInBhZ2VTaXplIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImNvbmNhdCIsImlzUmVmcmVzaCIsInNldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsInJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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TixlQUFLNkMsSTs7a0JBQW5CdkUsSyIsImZpbGUiOiJteUJpbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XHJcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xyXG4gICAgaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9taXhpbi5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGxhY2VIb2xkZXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBiaWxsRGF0YTogW10sXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyZWFtOiB7fSxcclxuICAgICAgICAgICAgaXNTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc29ydGluZzogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRvU2VhcmNoKCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vc2VhcmNoL3NlYXJjaE15QmlsbCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRvKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9teUJpbGxEZXRhaWw/aWQ9JyArIGl0ZW0uaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc2hvd0ZpbHRlcigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gIXRoaXMuaXNTaG93XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWx0ZXIobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N0ZWF0ZVRpbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoJ0NyZWF0aW9uVGltZSBkZXNjJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoJ0lkIGRlc2MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgLyAxMCA+IHRoaXMucGFnZU51bWJlciAmJiB0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmlsbERhdGEgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKCk7XHJcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxyXG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W6LSm5Y2VXHJcbiAgICAgICAgYXN5bmMgZ2V0YmlsbChzb3J0KSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydGluZyA9IHNvcnQgPyBzb3J0IDogdGhpcy5zb3J0aW5nO1xyXG4gICAgICAgICAgICB2YXIgQ2FzZU5hbWUgPSB0aGlzLnF1ZXJ5U3RyZWFtLkNhc2VOYW1lID8gdGhpcy5xdWVyeVN0cmVhbS5DYXNlTmFtZSA6ICcnO1xyXG4gICAgICAgICAgICB2YXIgQ2xpZW50TmFtZSA9IHRoaXMucXVlcnlTdHJlYW0uQ2xpZW50TmFtZSA/IHRoaXMucXVlcnlTdHJlYW0uQ2xpZW50TmFtZSA6ICcnO1xyXG4gICAgICAgICAgICB2YXIgQ3VycmVuY3kgPSB0aGlzLnF1ZXJ5U3RyZWFtLkN1cnJlbmN5ID8gdGhpcy5xdWVyeVN0cmVhbS5DdXJyZW5jeSA6ICcnO1xyXG4gICAgICAgICAgICB2YXIgS2V5V29yZCA9IHRoaXMucXVlcnlTdHJlYW0uS2V5V29yZCA/IHRoaXMucXVlcnlTdHJlYW0uS2V5V29yZCA6ICcnO1xyXG4gICAgICAgICAgICB2YXIgYmlsbERhdGUgPSB0aGlzLnF1ZXJ5U3RyZWFtLmJpbGxEYXRlID8gdGhpcy5xdWVyeVN0cmVhbS5iaWxsRGF0ZSA6ICcnO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxCaWxsaW5nL0dldE15QmlsbGluZ3MnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBDYXNlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBDbGllbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEN1cnJlbmN5LFxyXG4gICAgICAgICAgICAgICAgICAgIEtleVdvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmlsbERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGluZzogIHRoaXMuc29ydGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmlsbERhdGEgPSB0aGlzLmJpbGxEYXRhLmNvbmNhdChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNSZWZyZXNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7kuLrnqbonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oKo5rKh5pyJ5p2D6ZmQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruivt+axgumUmeivrycpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTsgLy/kuIrkuIDkuKrpobXpnaJcclxuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbSA9IHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2VzKTtcclxuICAgICAgICAgICAgaWYgKHByZXZQYWdlLmRhdGEucmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==