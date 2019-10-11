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
                    url: '../search/searchManageCost'
                });
            },
            into: function into(item) {
                this.$apply();
                _wepy2.default.navigateTo({
                    url: './manageCostDetail?id=' + item.id
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
                        this.state = "WaitForApproved";
                        this.getbill("WaitForApproved");
                        break;
                    case 1:
                        this.state = "Returned";
                        this.getbill("Returned");
                        break;
                    case 2:
                        this.state = "Approved";
                        this.getbill("Approved");
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
                                return _ajax2.default.getData('/api/services/web/financialCharge/GetCharges', 'post', {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    status: state,
                                    filter: filter,
                                    creationTimeRange: creationTimeRange,
                                    sorting: this.sorting,
                                    creatorUserName: this.queryStream.creatorUserName
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

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/cost/manageCost/manageCost'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUNvc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibmF2YmFyIiwiZGF0YSIsIm15aW52b2ljZSIsInBhZ2VOdW1iZXIiLCJ0b3RhbENvdW50IiwibmF2YmFycyIsImN1cnJlbnRUYWIiLCJzdGF0ZSIsInF1ZXJ5U3RyZWFtIiwiaXNTaG93Iiwic29ydGluZyIsIm1ldGhvZHMiLCJ0b1NlYXJjaCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImludG8iLCJpdGVtIiwiJGFwcGx5Iiwid2VweSIsImlkIiwiZmlsdGVyIiwibmFtZSIsImdldGJpbGwiLCJpc3Nob3dGaWx0ZXIiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJkdXJhdGlvbiIsIiRwYXJlbnQiLCJnbG9iYWwiLCJuZXRXb3JrU3RyaW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJzb3J0IiwiY3JlYXRpb25UaW1lUmFuZ2UiLCJhamF4IiwiZ2V0RGF0YSIsInBhZ2VTaXplIiwic3RhdHVzIiwiY3JlYXRvclVzZXJOYW1lIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImluZGV4IiwiY3JlYXRpb25UaW1lIiwic3BsaXQiLCJwdXNoIiwic3VjY2VzcyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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LENBRlYsQ0FFQ2xELElBRkQsRUFFbUM7O0FBQ3hDLGlCQUFLTyxXQUFMLEdBQW1CUCxLQUFLTyxXQUF4QjtBQUNBLGdCQUFJUCxLQUFLMEQsT0FBVCxFQUFrQjtBQUNkMUQscUJBQUswRCxPQUFMLEdBQWUsS0FBZjtBQUNBLHFCQUFLekQsU0FBTCxHQUFpQixFQUFqQjtBQUNBLHFCQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EscUJBQUtvQixPQUFMLENBQWEsS0FBS2hCLEtBQWxCO0FBQ0g7QUFDSjs7OztFQXBLOEJZLGVBQUt5QyxJOztrQkFBbkJ0RSxLIiwiZmlsZSI6Im1hbmFnZUNvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XHJcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcclxuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIG5hdmJhclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgbXlpbnZvaWNlOiBbXSxcclxuICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcclxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcclxuICAgICAgICAgICAgbmF2YmFyczogWyflvoXlrqHmoLgnLCAn5bey6YCA5ZueJywgJ+W3suWuoeaguCddLFxyXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwLFxyXG4gICAgICAgICAgICBzdGF0ZTogXCJXYWl0Rm9yQXBwcm92ZWRcIixcclxuICAgICAgICAgICAgcXVlcnlTdHJlYW06IHt9LFxyXG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBzb3J0aW5nOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdG9TZWFyY2goKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9zZWFyY2gvc2VhcmNoTWFuYWdlQ29zdCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRvKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9tYW5hZ2VDb3N0RGV0YWlsP2lkPScgKyBpdGVtLmlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVyKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3RlYXRlVGltZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlLCAnQ3JlYXRpb25UaW1lIGRlc2MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYXNlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUsICdDYXNlTmFtZSBkZXNjJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzc2hvd0ZpbHRlcigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gIXRoaXMuaXNTaG93XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGU9XCJXYWl0Rm9yQXBwcm92ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiV2FpdEZvckFwcHJvdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGU9XCJSZXR1cm5lZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGJpbGwoXCJSZXR1cm5lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlPVwiQXBwcm92ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKFwiQXBwcm92ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXIgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgKz0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5teWludm9pY2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPluWPkeelqFxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwoc3RhdGUsIHNvcnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zb3J0aW5nID0gc29ydCA/IHNvcnQgOiB0aGlzLnNvcnRpbmc7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnF1ZXJ5U3RyZWFtLmZpbHRlciA/IHRoaXMucXVlcnlTdHJlYW0uZmlsdGVyIDogJyc7XHJcbiAgICAgICAgICAgIHZhciBjcmVhdGlvblRpbWVSYW5nZSA9IHRoaXMucXVlcnlTdHJlYW0uY3JlYXRpb25UaW1lUmFuZ2UgPyB0aGlzLnF1ZXJ5U3RyZWFtLmNyZWF0aW9uVGltZVJhbmdlIDogJyc7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbENoYXJnZS9HZXRDaGFyZ2VzJyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMucGFnZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpb25UaW1lUmFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGluZzogdGhpcy5zb3J0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VyTmFtZTp0aGlzLnF1ZXJ5U3RyZWFtLmNyZWF0b3JVc2VyTmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCYmcmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG15aW52b2ljZT1yZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIG15aW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteWludm9pY2VbaW5kZXhdLmNyZWF0aW9uVGltZSA9IG15aW52b2ljZVtpbmRleF0uY3JlYXRpb25UaW1lLnNwbGl0KCdUJylbMF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2UucHVzaCguLi5teWludm9pY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmsqHmnInlho3lpJrmlbDmja7kuobvvIEnLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldGJpbGwodGhpcy5zdGF0ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgICBsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgbGV0IHsgZGF0YSB9ID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8v5LiK5LiA5Liq6aG16Z2iXHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW0gPSBkYXRhLnF1ZXJ5U3RyZWFtO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWZyZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnJlZnJlc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlpbnZvaWNlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuIl19