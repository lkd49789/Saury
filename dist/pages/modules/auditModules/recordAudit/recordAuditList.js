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

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var recordAuditList = function (_wepy$page) {
    _inherits(recordAuditList, _wepy$page);

    function recordAuditList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, recordAuditList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = recordAuditList.__proto__ || Object.getPrototypeOf(recordAuditList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            queryStream: {},
            refresh: false,
            ApprovalWorklogsData: [],
            totalCount: 0,
            pageNumber: 1
        }, _this.methods = {
            toSearchPage: function toSearchPage() {
                wx.navigateTo({
                    url: './search/searchRecordAudit'
                });
            },
            toLogDetail: function toLogDetail(id) {
                wx.navigateTo({
                    url: './logDetail?id=' + id
                });
            }
        }, _this.watch = {
            totalCount: function totalCount(count) {
                if (count) {
                    this.placeHolder.placeHolderShow = false;
                    this.$apply();
                }
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(recordAuditList, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.ApprovalWorklogsData = [];
            this.pageNumber = 1;
            this.queryStream = {};
            this.GetWaitApprovalWorklogs();
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
                this.GetWaitApprovalWorklogs();
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
        key: 'GetWaitApprovalWorklogs',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var Category, WorkType, KeyWord, CreationTime, WorkTime, data, resData, ApprovalWorklogsData, index, sT, eT, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                Category = this.queryStream.Category ? this.queryStream.Category : '';
                                WorkType = this.queryStream.WorkType ? this.queryStream.WorkType : '';
                                KeyWord = this.queryStream.KeyWord ? this.queryStream.KeyWord : '';
                                CreationTime = this.queryStream.CreationTime;
                                WorkTime = this.queryStream.WorkTime;
                                data = {
                                    pageSize: 10,
                                    pageNumber: this.pageNumber,
                                    KeyWord: KeyWord,
                                    Category: Category,
                                    WorkType: WorkType,
                                    CreationTime: CreationTime,
                                    WorkTime: WorkTime
                                };
                                _context.next = 8;
                                return _ajax2.default.getData('/api/services/web/worklogApproval/GetWaitApprovalWorklogs', 'post', data);

                            case 8:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 12 : _context.t0 === 403 ? 16 : _context.t0 === 500 ? 21 : 25;
                                break;

                            case 12:
                                this.totalCount = resData.data.result.totalCount;
                                if (resData.data.result.items.length !== 0) {
                                    ApprovalWorklogsData = resData.data.result.items;

                                    for (index in ApprovalWorklogsData) {
                                        ApprovalWorklogsData[index]['auditStatus'] = 'W';
                                        // 日志时间
                                        sT = (0, _api.formatDate)(ApprovalWorklogsData[index].startTime);
                                        eT = (0, _api.formatDate)(ApprovalWorklogsData[index].endTime);

                                        ApprovalWorklogsData[index].startTime = {
                                            Y: sT[0] + '/' + sT[1] + '/' + sT[2],
                                            M: sT[3] + ':' + sT[4]
                                        };
                                        ApprovalWorklogsData[index].endTime = {
                                            Y: eT[0] + '/' + eT[1] + '/' + eT[2],
                                            M: eT[3] + ':' + eT[4]
                                            //自报时间
                                        };ApprovalWorklogsData[index].selfDuration = ApprovalWorklogsData[index].selfDuration.toFixed(1);
                                    }
                                    this.ApprovalWorklogsData = this.ApprovalWorklogsData.concat(ApprovalWorklogsData);
                                    isRefresh = {
                                        isRefresh: false
                                    };

                                    wx.setStorageSync('isRefresh', isRefresh);
                                } else {
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
                                this.$apply();

                            case 27:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetWaitApprovalWorklogs() {
                return _ref2.apply(this, arguments);
            }

            return GetWaitApprovalWorklogs;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetWaitApprovalWorklogs();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh() {
            this.refresh = false;
            this.ApprovalWorklogsData = [];
            this.pageNumber = 1;
            this.GetWaitApprovalWorklogs();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            this.refresh = prevPage.data.refresh;
            var isRefresh = wx.getStorageSync('isRefresh');
            if (this.refresh || isRefresh.isRefresh) {
                this.isRefresh();
            }
        }
    }]);

    return recordAuditList;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(recordAuditList , 'pages/modules/auditModules/recordAudit/recordAuditList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZEF1ZGl0TGlzdC5qcyJdLCJuYW1lcyI6WyJyZWNvcmRBdWRpdExpc3QiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2VIb2xkZXJJbWFnZSIsImRhdGEiLCJxdWVyeVN0cmVhbSIsInJlZnJlc2giLCJBcHByb3ZhbFdvcmtsb2dzRGF0YSIsInRvdGFsQ291bnQiLCJwYWdlTnVtYmVyIiwibWV0aG9kcyIsInRvU2VhcmNoUGFnZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvTG9nRGV0YWlsIiwiaWQiLCJ3YXRjaCIsImNvdW50IiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlclNob3ciLCIkYXBwbHkiLCJtaXhpbnMiLCJHZXRXYWl0QXBwcm92YWxXb3JrbG9ncyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsIkNhdGVnb3J5IiwiV29ya1R5cGUiLCJLZXlXb3JkIiwiQ3JlYXRpb25UaW1lIiwiV29ya1RpbWUiLCJwYWdlU2l6ZSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImluZGV4Iiwic1QiLCJzdGFydFRpbWUiLCJlVCIsImVuZFRpbWUiLCJZIiwiTSIsInNlbGZEdXJhdGlvbiIsInRvRml4ZWQiLCJjb25jYXQiLCJpc1JlZnJlc2giLCJzZXRTdG9yYWdlU3luYyIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlcyIsImdl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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUs7QUFDTCxpQkFBS0UsdUJBQUw7QUFDSDs7O29DQUNVO0FBQ1AsaUJBQUtqQixPQUFMLEdBQWEsS0FBYjtBQUNBLGlCQUFLQyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLGlCQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsaUJBQUtjLHVCQUFMO0FBQ0EsaUJBQUtGLE1BQUw7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUl5QyxRQUFRQyxpQkFBWjtBQUNBLGdCQUFJQyxXQUFXRixNQUFNQSxNQUFNaEIsTUFBTixHQUFlLENBQXJCLENBQWYsQ0FGSyxDQUVtQztBQUN4QyxpQkFBS3pDLFdBQUwsR0FBaUIyRCxTQUFTNUQsSUFBVCxDQUFjQyxXQUEvQjtBQUNBLGlCQUFLQyxPQUFMLEdBQWEwRCxTQUFTNUQsSUFBVCxDQUFjRSxPQUEzQjtBQUNBLGdCQUFJbUQsWUFBWTdDLEdBQUdxRCxjQUFILENBQWtCLFdBQWxCLENBQWhCO0FBQ0EsZ0JBQUcsS0FBSzNELE9BQUwsSUFBY21ELFVBQVVBLFNBQTNCLEVBQXFDO0FBQ2pDLHFCQUFLQSxTQUFMO0FBQ0g7QUFFSjs7OztFQW5Ld0NTLGVBQUtDLEk7O2tCQUE3QjFFLGUiLCJmaWxlIjoicmVjb3JkQXVkaXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVjb3JkQXVkaXRMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGxhY2VIb2xkZXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgcGxhY2VIb2xkZXJJbWFnZSxcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHF1ZXJ5U3RyZWFtOiB7fSxcbiAgICAgICAgICAgIHJlZnJlc2g6IGZhbHNlLFxuICAgICAgICAgICAgQXBwcm92YWxXb3JrbG9nc0RhdGE6IFtdLFxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b1NlYXJjaFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vc2VhcmNoL3NlYXJjaFJlY29yZEF1ZGl0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTG9nRGV0YWlsKGlkKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vbG9nRGV0YWlsP2lkPScgKyBpZCBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2g9e1xuICAgICAgICAgICAgdG90YWxDb3VudChjb3VudCl7XG4gICAgICAgICAgICAgICAgaWYoY291bnQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICAgICAgLy8g5LiL5ouJ5Yi35pawXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5BcHByb3ZhbFdvcmtsb2dzRGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW09e307XG4gICAgICAgICAgICB0aGlzLkdldFdhaXRBcHByb3ZhbFdvcmtsb2dzKCk7XG4gICAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cbiAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5LiK5ouJ5Yqg6L29XG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXIgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRXYWl0QXBwcm92YWxXb3JrbG9ncygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRXYWl0QXBwcm92YWxXb3JrbG9ncygpIHtcbiAgICAgICAgICAgIHZhciBDYXRlZ29yeT10aGlzLnF1ZXJ5U3RyZWFtLkNhdGVnb3J5P3RoaXMucXVlcnlTdHJlYW0uQ2F0ZWdvcnk6Jyc7XG4gICAgICAgICAgICB2YXIgV29ya1R5cGU9dGhpcy5xdWVyeVN0cmVhbS5Xb3JrVHlwZT90aGlzLnF1ZXJ5U3RyZWFtLldvcmtUeXBlOicnO1xuICAgICAgICAgICAgdmFyIEtleVdvcmQ9dGhpcy5xdWVyeVN0cmVhbS5LZXlXb3JkP3RoaXMucXVlcnlTdHJlYW0uS2V5V29yZDonJztcbiAgICAgICAgICAgIHZhciBDcmVhdGlvblRpbWU9dGhpcy5xdWVyeVN0cmVhbS5DcmVhdGlvblRpbWVcbiAgICAgICAgICAgIHZhciBXb3JrVGltZT10aGlzLnF1ZXJ5U3RyZWFtLldvcmtUaW1lXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIEtleVdvcmQsXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgV29ya1R5cGUsXG4gICAgICAgICAgICAgICAgQ3JlYXRpb25UaW1lLFxuICAgICAgICAgICAgICAgIFdvcmtUaW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvd29ya2xvZ0FwcHJvdmFsL0dldFdhaXRBcHByb3ZhbFdvcmtsb2dzJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBcHByb3ZhbFdvcmtsb2dzRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBBcHByb3ZhbFdvcmtsb2dzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcHJvdmFsV29ya2xvZ3NEYXRhW2luZGV4XVsnYXVkaXRTdGF0dXMnXSA9ICdXJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDml6Xlv5fml7bpl7RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc1QgPSBmb3JtYXREYXRlKEFwcHJvdmFsV29ya2xvZ3NEYXRhW2luZGV4XS5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlVCA9IGZvcm1hdERhdGUoQXBwcm92YWxXb3JrbG9nc0RhdGFbaW5kZXhdLmVuZFRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwcm92YWxXb3JrbG9nc0RhdGFbaW5kZXhdLnN0YXJ0VGltZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWTogc1RbMF0gKyAnLycgKyBzVFsxXSArICcvJyArIHNUWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNOiBzVFszXSArICc6JyArIHNUWzRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcHJvdmFsV29ya2xvZ3NEYXRhW2luZGV4XS5lbmRUaW1lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZOiBlVFswXSArICcvJyArIGVUWzFdICsgJy8nICsgZVRbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE06IGVUWzNdICsgJzonICsgZVRbNF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/oh6rmiqXml7bpl7RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHByb3ZhbFdvcmtsb2dzRGF0YVtpbmRleF0uc2VsZkR1cmF0aW9uID0gKEFwcHJvdmFsV29ya2xvZ3NEYXRhW2luZGV4XS5zZWxmRHVyYXRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFwcHJvdmFsV29ya2xvZ3NEYXRhID0gdGhpcy5BcHByb3ZhbFdvcmtsb2dzRGF0YS5jb25jYXQoQXBwcm92YWxXb3JrbG9nc0RhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNSZWZyZXNoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVmcmVzaDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oKo5rKh5pyJ5p2D6ZmQJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruivt+axgumUmeivrycpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0V2FpdEFwcHJvdmFsV29ya2xvZ3MoKTtcbiAgICAgICAgfVxuICAgICAgICBpc1JlZnJlc2goKXtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaD1mYWxzZTtcbiAgICAgICAgICAgIHRoaXMuQXBwcm92YWxXb3JrbG9nc0RhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICB0aGlzLkdldFdhaXRBcHByb3ZhbFdvcmtsb2dzKCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtPXByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW07XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2g9cHJldlBhZ2UuZGF0YS5yZWZyZXNoXG4gICAgICAgICAgICB2YXIgaXNSZWZyZXNoID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcpO1xuICAgICAgICAgICAgaWYodGhpcy5yZWZyZXNofHxpc1JlZnJlc2guaXNSZWZyZXNoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4iXX0=