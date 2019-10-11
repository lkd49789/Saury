'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _navbar = require('./../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
        }, _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            navbar: _navbar2.default
        }, _this.data = {
            myinvoice: [],
            pageNumber: 1,
            totalCount: 0,
            navbars: ['待审核', '已退回', '已审核'],
            currentTab: 0,
            state: "WaitForApproved",
            queryStream: {},
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: '../search/searchCost'
                });
            },
            into: function into(item) {
                this.$apply();
                _wepy2.default.navigateTo({
                    url: './myCostDetail?id=' + item.id
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
                this.$apply();
            },
            isshowFilter: function isshowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            }
        }, _this.watch = {
            currentTab: function currentTab(newValue, oldValue) {
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                });
                this.myinvoice = [];
                this.pageNumber = 1;
                switch (newValue) {
                    case 0:
                        this.state = 'WaitForApproved';
                        this.getbill("WaitForApproved");
                        break;
                    case 1:
                        this.state = 'Returned';
                        this.getbill("Returned");
                        break;
                    case 2:
                        this.state = 'Approved';
                        this.getbill("Approved");
                        break;
                    default:
                        break;
                }
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
                var filter, creationTimeRange, resData, _myinvoice, myinvoice, index;

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
                                return _ajax2.default.getData('/api/services/web/financialCharge/GetUserCharges', 'post', {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    status: state,
                                    filter: filter,
                                    creationTimeRange: creationTimeRange,
                                    sorting: this.sorting
                                });

                            case 6:
                                resData = _context.sent;

                                if (resData.statusCode == 200 && resData.data.result.items.length !== 0) {
                                    this.totalCount = resData.data.result.totalCount;
                                    myinvoice = resData.data.result.items;

                                    for (index in myinvoice) {
                                        myinvoice[index].creationTime = myinvoice[index].creationTime.split('T')[0];
                                    }
                                    (_myinvoice = this.myinvoice).push.apply(_myinvoice, _toConsumableArray(myinvoice));
                                    this.$apply();
                                } else if (resData.data.result.items.length == 0) {
                                    wx.showToast({
                                        title: '没有再多数据了！', //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 8:
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/cost/myCost/myCost'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Q29zdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJuYXZiYXIiLCJkYXRhIiwibXlpbnZvaWNlIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJuYXZiYXJzIiwiY3VycmVudFRhYiIsInN0YXRlIiwicXVlcnlTdHJlYW0iLCJpc1Nob3ciLCJzb3J0aW5nIiwibWV0aG9kcyIsInRvU2VhcmNoIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW50byIsIml0ZW0iLCIkYXBwbHkiLCJ3ZXB5IiwiaWQiLCJmaWx0ZXIiLCJuYW1lIiwiZ2V0YmlsbCIsImlzc2hvd0ZpbHRlciIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImR1cmF0aW9uIiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInNvcnQiLCJjcmVhdGlvblRpbWVSYW5nZSIsImFqYXgiLCJnZXREYXRhIiwicGFnZVNpemUiLCJzdGF0dXMiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsIml0ZW1zIiwibGVuZ3RoIiwiaW5kZXgiLCJjcmVhdGlvblRpbWUiLCJzcGxpdCIsInB1c2giLCJzdWNjZXNzIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsInJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7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QUFLMUMsV0FBTCxHQUFtQmtELFNBQVN6RCxJQUFULENBQWNPLFdBQWpDO0FBQ0EsZ0JBQUlrRCxTQUFTekQsSUFBVCxDQUFjMEQsT0FBbEIsRUFBMkI7QUFDdkJELHlCQUFTekQsSUFBVCxDQUFjMEQsT0FBZCxHQUF3QixLQUF4QjtBQUNBLHFCQUFLekQsU0FBTCxHQUFpQixFQUFqQjtBQUNBLHFCQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EscUJBQUtvQixPQUFMLENBQWEsS0FBS2hCLEtBQWxCO0FBQ0g7QUFDSjs7OztFQXJLOEJZLGVBQUt5QyxJOztrQkFBbkJ0RSxLIiwiZmlsZSI6Im15Q29zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcclxuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xyXG4gICAgaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGZvcm1hdFRpbWVcclxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZiYXJzLm9uY2VcIjpcIm5hdmJhcnNcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjdXJyZW50VGFiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgbmF2YmFyXHJcbiAgICAgICAgfTtcclxuICAgICAgIFxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG15aW52b2ljZTogW10sXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIG5hdmJhcnM6IFsn5b6F5a6h5qC4JywgJ+W3sumAgOWbnicsICflt7LlrqHmoLgnXSxcclxuICAgICAgICAgICAgY3VycmVudFRhYjogMCxcclxuICAgICAgICAgICAgc3RhdGU6IFwiV2FpdEZvckFwcHJvdmVkXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyZWFtOnt9LFxyXG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBzb3J0aW5nOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdG9TZWFyY2goKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9zZWFyY2gvc2VhcmNoQ29zdCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRvKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9teUNvc3REZXRhaWw/aWQ9JyArIGl0ZW0uaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWx0ZXIobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjdGVhdGVUaW1lJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUsICdDcmVhdGlvblRpbWUgZGVzYycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSwgJ0Nhc2VOYW1lIGRlc2MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNzaG93RmlsdGVyKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3dcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3YXRjaCA9IHtcclxuICAgICAgICAgICAgY3VycmVudFRhYihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGU9J1dhaXRGb3JBcHByb3ZlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiV2FpdEZvckFwcHJvdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGU9J1JldHVybmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoXCJSZXR1cm5lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlPSdBcHByb3ZlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiQXBwcm92ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XHJcbiAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5blj5HnpahcclxuICAgICAgICBhc3luYyBnZXRiaWxsKHN0YXRlLHNvcnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHRoaXMuc29ydGluZyA9IHNvcnQgPyBzb3J0IDogdGhpcy5zb3J0aW5nO1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyPXRoaXMucXVlcnlTdHJlYW0uZmlsdGVyP3RoaXMucXVlcnlTdHJlYW0uZmlsdGVyOicnO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRpb25UaW1lUmFuZ2U9dGhpcy5xdWVyeVN0cmVhbS5jcmVhdGlvblRpbWVSYW5nZT90aGlzLnF1ZXJ5U3RyZWFtLmNyZWF0aW9uVGltZVJhbmdlOicnO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxDaGFyZ2UvR2V0VXNlckNoYXJnZXMnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGlvblRpbWVSYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0aW5nOnRoaXMuc29ydGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwJiZyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXlpbnZvaWNlPXJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gbXlpbnZvaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15aW52b2ljZVtpbmRleF0uY3JlYXRpb25UaW1lID0gbXlpbnZvaWNlW2luZGV4XS5jcmVhdGlvblRpbWUuc3BsaXQoJ1QnKVswXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZS5wdXNoKC4uLm15aW52b2ljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieWGjeWkmuaVsOaNruS6hu+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXHJcbiAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdOyAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKHByZXZQYWdlLmRhdGEucmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiJdfQ==