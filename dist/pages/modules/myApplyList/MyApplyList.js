'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _placeHolderImage = require('./../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myApplyList = function (_wepy$page) {
    _inherits(myApplyList, _wepy$page);

    function myApplyList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, myApplyList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myApplyList.__proto__ || Object.getPrototypeOf(myApplyList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            queryStream: {},
            refresh: false,
            addOpacity: 1,
            pageNumber: 1,
            totalCount: 0,
            MyApplyListData: [],
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: './search/searchMyApply'
                });
            },
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                var _this2 = this;

                wx.navigateTo({
                    url: './createApply/createApply',
                    success: function success() {
                        _this2.addOpacity = 1;
                        _this2.$apply();
                    }
                });
            },
            toMyApplyList: function toMyApplyList(id) {
                wx.navigateTo({
                    url: './myApplyDetail/myApplyDetail?id=' + id
                });
            },
            ishowFilter: function ishowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            },
            filter: function filter(name) {
                this.MyApplyListData = [];
                this.pageNumber = 1;
                switch (name) {
                    case 'cteateTime':
                        this.GetMyApplyList('CreationTime desc');
                        break;
                    case 'id':
                        this.GetMyApplyList('Id desc');
                        break;
                    default:
                        break;
                }
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(myApplyList, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.MyApplyListData = [];
            this.pageNumber = 1;
            this.queryStream = {};
            this.GetMyApplyList();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.GetMyApplyList();
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
        key: 'GetMyApplyList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sort) {
                var Keyword, Status, VacationType, creationTimeRange, data, resData, MyApplyListData, index, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.sorting = sort ? sort : this.sorting;
                                Keyword = this.queryStream.Keyword ? this.queryStream.Keyword : '';
                                Status = this.queryStream.Status ? this.queryStream.Status : '';
                                VacationType = this.queryStream.Keyword ? this.queryStream.VacationType : '';
                                creationTimeRange = this.queryStream.creationTimeRange ? this.queryStream.creationTimeRange : '';

                                wx.showLoading({
                                    title: '加载中，请稍等！',
                                    mask: true
                                });
                                data = {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    sorting: this.sorting,
                                    Keyword: Keyword,
                                    Status: Status,
                                    VacationType: VacationType,
                                    creationTimeRange: creationTimeRange
                                };
                                _context.next = 9;
                                return _ajax2.default.getData('/api/services/web/myVacation/GetMyApplyList', 'post', data);

                            case 9:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 13 : _context.t0 === 403 ? 41 : _context.t0 === 500 ? 46 : 50;
                                break;

                            case 13:
                                if (!(resData.data.result.items.length !== 0)) {
                                    _context.next = 36;
                                    break;
                                }

                                this.totalCount = resData.data.result.totalCount;
                                MyApplyListData = resData.data.result.items;
                                _context.t1 = regeneratorRuntime.keys(MyApplyListData);

                            case 17:
                                if ((_context.t2 = _context.t1()).done) {
                                    _context.next = 31;
                                    break;
                                }

                                index = _context.t2.value;
                                _context.t3 = MyApplyListData[index].status;
                                _context.next = _context.t3 === 'A' ? 22 : _context.t3 === 'W' ? 24 : _context.t3 === 'R' ? 26 : 28;
                                break;

                            case 22:
                                MyApplyListData[index]['statusColor'] = '#069400';
                                return _context.abrupt('break', 29);

                            case 24:
                                MyApplyListData[index]['statusColor'] = '#ff9900';
                                return _context.abrupt('break', 29);

                            case 26:
                                MyApplyListData[index]['statusColor'] = '#e20000';
                                return _context.abrupt('break', 29);

                            case 28:
                                return _context.abrupt('break', 29);

                            case 29:
                                _context.next = 17;
                                break;

                            case 31:
                                this.MyApplyListData = this.MyApplyListData.concat(MyApplyListData);
                                isRefresh = {
                                    isRefresh: false
                                };

                                wx.setStorageSync('isRefresh', isRefresh);
                                _context.next = 39;
                                break;

                            case 36:
                                console.log('数据为空');
                                this.placeHolder.placeHolderImageIndex = 0;
                                this.placeHolder.placeHolderShow = true;

                            case 39:
                                this.$apply();
                                return _context.abrupt('break', 51);

                            case 41:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 51);

                            case 46:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 50:
                                return _context.abrupt('break', 51);

                            case 51:
                                this.$apply();

                            case 52:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetMyApplyList(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetMyApplyList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetMyApplyList();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var isRefresh = wx.getStorageSync('isRefresh');
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            if (prevPage.data.refresh || isRefresh.isRefresh) {
                prevPage.data.refresh = false;
                this.MyApplyListData = [];
                this.pageNumber = 1;
                this.GetMyApplyList();
            }
        }
    }]);

    return myApplyList;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(myApplyList , 'pages/modules/myApplyList/MyApplyList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk15QXBwbHlMaXN0LmpzIl0sIm5hbWVzIjpbIm15QXBwbHlMaXN0IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJkYXRhIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwiYWRkT3BhY2l0eSIsInBhZ2VOdW1iZXIiLCJ0b3RhbENvdW50IiwiTXlBcHBseUxpc3REYXRhIiwiaXNTaG93Iiwic29ydGluZyIsIm1ldGhvZHMiLCJ0b1NlYXJjaCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsInN1Y2Nlc3MiLCJ0b015QXBwbHlMaXN0IiwiaWQiLCJpc2hvd0ZpbHRlciIsImZpbHRlciIsIm5hbWUiLCJHZXRNeUFwcGx5TGlzdCIsIm1peGlucyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInNvcnQiLCJLZXl3b3JkIiwiU3RhdHVzIiwiVmFjYXRpb25UeXBlIiwiY3JlYXRpb25UaW1lUmFuZ2UiLCJzaG93TG9hZGluZyIsInBhZ2VTaXplIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsIml0ZW1zIiwibGVuZ3RoIiwiaW5kZXgiLCJzdGF0dXMiLCJjb25jYXQiLCJpc1JlZnJlc2giLCJzZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsImdldFN0b3JhZ2VTeW5jIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O29NQUNqQkMsTSxHQUFTO0FBQ0xDLG1DQUF1QixJQURsQjtBQUVMQyxpQ0FBcUIsTUFGaEI7QUFHTEMsZ0NBQW9CLFNBSGY7QUFJTEMsbUNBQXVCO0FBSmxCLFMsUUFNVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLG9CQUFtQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixhQUE3QyxFQUEyRCwyQkFBMEIsYUFBckYsRUFBcEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyx5QkFBYSxFQURWO0FBRUhDLHFCQUFTLEtBRk47QUFHSEMsd0JBQVksQ0FIVDtBQUlIQyx3QkFBWSxDQUpUO0FBS0hDLHdCQUFZLENBTFQ7QUFNSEMsNkJBQWlCLEVBTmQ7QUFPSEMsb0JBQVEsS0FQTDtBQVFIQyxxQkFBUztBQVJOLFMsUUFVUEMsTyxHQUFVO0FBQ05DLG9CQURNLHNCQUNLO0FBQ1BDLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBTEs7QUFNTkMsc0JBTk0sd0JBTU87QUFDVCxxQkFBS1gsVUFBTCxHQUFrQixHQUFsQjtBQUNBLHFCQUFLWSxNQUFMO0FBQ0gsYUFUSztBQVVOQyxvQkFWTSxzQkFVSztBQUFBOztBQUNQTCxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLDJCQURLO0FBRVZJLDZCQUFTLG1CQUFNO0FBQ1gsK0JBQUtkLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSwrQkFBS1ksTUFBTDtBQUNIO0FBTFMsaUJBQWQ7QUFPSCxhQWxCSztBQW1CTkcseUJBbkJNLHlCQW1CUUMsRUFuQlIsRUFtQlk7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QVo7QUFDQSxxQ0FBS0MsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUszQyxNQUFMOzs7Ozs7QUFJUixxQ0FBS0EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVLO0FBQ0wsaUJBQUtRLGNBQUw7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUk2QixZQUFZekMsR0FBR2dELGNBQUgsQ0FBa0IsV0FBbEIsQ0FBaEI7QUFDQSxnQkFBSUMsUUFBUUMsaUJBQVo7QUFDQSxnQkFBSUMsV0FBV0YsTUFBTUEsTUFBTVosTUFBTixHQUFlLENBQXJCLENBQWYsQ0FISyxDQUdtQztBQUN4QyxpQkFBSy9DLFdBQUwsR0FBbUI2RCxTQUFTOUQsSUFBVCxDQUFjQyxXQUFqQztBQUNBLGdCQUFJNkQsU0FBUzlELElBQVQsQ0FBY0UsT0FBZCxJQUF5QmtELFVBQVVBLFNBQXZDLEVBQWtEO0FBQzlDVSx5QkFBUzlELElBQVQsQ0FBY0UsT0FBZCxHQUF3QixLQUF4QjtBQUNBLHFCQUFLSSxlQUFMLEdBQXVCLEVBQXZCO0FBQ0EscUJBQUtGLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxxQkFBS21CLGNBQUw7QUFDSDtBQUNKOzs7O0VBM0xvQ3dDLGVBQUtDLEk7O2tCQUF6QjNFLFciLCJmaWxlIjoiTXlBcHBseUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXlBcHBseUxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnLFxuICAgICAgICB9O1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGxhY2VIb2xkZXJJbWFnZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwbGFjZUhvbGRlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXG4gICAgICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgIE15QXBwbHlMaXN0RGF0YTogW10sXG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgICAgICAgc29ydGluZzogJydcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvU2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL3NlYXJjaC9zZWFyY2hNeUFwcGx5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vY3JlYXRlQXBwbHkvY3JlYXRlQXBwbHknLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTXlBcHBseUxpc3QoaWQpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9teUFwcGx5RGV0YWlsL215QXBwbHlEZXRhaWw/aWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNob3dGaWx0ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3dcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcihuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5NeUFwcGx5TGlzdERhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjdGVhdGVUaW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0TXlBcHBseUxpc3QoJ0NyZWF0aW9uVGltZSBkZXNjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldE15QXBwbHlMaXN0KCdJZCBkZXNjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgICAgIC8vIOS4i+aLieWIt+aWsFxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMuTXlBcHBseUxpc3REYXRhID0gW107XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5HZXRNeUFwcGx5TGlzdCgpO1xuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOS4iuaLieWKoOi9vVxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0TXlBcHBseUxpc3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSl77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0TXlBcHBseUxpc3Qoc29ydCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0aW5nID0gc29ydCA/IHNvcnQgOiB0aGlzLnNvcnRpbmc7XG4gICAgICAgICAgICB2YXIgS2V5d29yZCA9IHRoaXMucXVlcnlTdHJlYW0uS2V5d29yZCA/IHRoaXMucXVlcnlTdHJlYW0uS2V5d29yZCA6ICcnO1xuICAgICAgICAgICAgdmFyIFN0YXR1cyA9IHRoaXMucXVlcnlTdHJlYW0uU3RhdHVzID8gdGhpcy5xdWVyeVN0cmVhbS5TdGF0dXMgOiAnJztcbiAgICAgICAgICAgIHZhciBWYWNhdGlvblR5cGUgPSB0aGlzLnF1ZXJ5U3RyZWFtLktleXdvcmQgPyB0aGlzLnF1ZXJ5U3RyZWFtLlZhY2F0aW9uVHlwZSA6ICcnO1xuICAgICAgICAgICAgdmFyIGNyZWF0aW9uVGltZVJhbmdlID0gdGhpcy5xdWVyeVN0cmVhbS5jcmVhdGlvblRpbWVSYW5nZSA/IHRoaXMucXVlcnlTdHJlYW0uY3JlYXRpb25UaW1lUmFuZ2UgOiAnJztcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4re+8jOivt+eojeetie+8gScsXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmcsXG4gICAgICAgICAgICAgICAgS2V5d29yZCxcbiAgICAgICAgICAgICAgICBTdGF0dXMsXG4gICAgICAgICAgICAgICAgVmFjYXRpb25UeXBlLFxuICAgICAgICAgICAgICAgIGNyZWF0aW9uVGltZVJhbmdlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL215VmFjYXRpb24vR2V0TXlBcHBseUxpc3QnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBNeUFwcGx5TGlzdERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gTXlBcHBseUxpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChNeUFwcGx5TGlzdERhdGFbaW5kZXhdLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15QXBwbHlMaXN0RGF0YVtpbmRleF1bJ3N0YXR1c0NvbG9yJ10gPSAnIzA2OTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15QXBwbHlMaXN0RGF0YVtpbmRleF1bJ3N0YXR1c0NvbG9yJ10gPSAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15QXBwbHlMaXN0RGF0YVtpbmRleF1bJ3N0YXR1c0NvbG9yJ10gPSAnI2UyMDAwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NeUFwcGx5TGlzdERhdGEgPSB0aGlzLk15QXBwbHlMaXN0RGF0YS5jb25jYXQoTXlBcHBseUxpc3REYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1JlZnJlc2ggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcsIGlzUmVmcmVzaCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5Li656m6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmgqjmsqHmnInmnYPpmZAnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u6K+35rGC6ZSZ6K+vJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0TXlBcHBseUxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB2YXIgaXNSZWZyZXNoID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcpO1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW0gPSBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtO1xuICAgICAgICAgICAgaWYgKHByZXZQYWdlLmRhdGEucmVmcmVzaCB8fCBpc1JlZnJlc2guaXNSZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5NeUFwcGx5TGlzdERhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0TXlBcHBseUxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==