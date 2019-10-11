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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var applyAuditList = function (_wepy$page) {
    _inherits(applyAuditList, _wepy$page);

    function applyAuditList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, applyAuditList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = applyAuditList.__proto__ || Object.getPrototypeOf(applyAuditList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            queryStream: {},
            refresh: false,
            waitData: [],
            totalCount: 0,
            pageNumber: 1
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({ url: './search/searchApplyAudit' });
            },
            toApplyDetail: function toApplyDetail(id, status) {
                wx.navigateTo({
                    url: './applyAuditDetail?id=' + id
                });
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(applyAuditList, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.waitData = [];
            this.pageNumber = 1;
            this.queryStream = {};
            this.GetApplyPageList();
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
                this.GetApplyPageList();
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
        key: 'GetApplyPageList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var Keyword, EName, DepartmentId, VacationType, data, resData, ApplyPageList, index, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                Keyword = this.queryStream.Keyword ? this.queryStream.Keyword : '';
                                EName = this.queryStream.EName ? this.queryStream.EName : '';
                                DepartmentId = this.queryStream.DepartmentId ? this.queryStream.DepartmentId : '';
                                VacationType = this.queryStream.VacationType ? this.queryStream.VacationType : '';
                                data = {
                                    pageSize: 10,
                                    pageNumber: this.pageNumber,
                                    Status: 'W',
                                    Keyword: Keyword,
                                    EName: EName,
                                    DepartmentId: DepartmentId,
                                    VacationType: VacationType
                                };
                                _context.next = 7;
                                return _ajax2.default.getData('/api/services/web/vacationManage/GetApplyPageList', 'post', data);

                            case 7:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 11 : _context.t0 === 403 ? 14 : _context.t0 === 500 ? 19 : 23;
                                break;

                            case 11:
                                if (resData.data.result.items.length !== 0) {
                                    ApplyPageList = resData.data.result.items;

                                    this.totalCount = resData.data.result.totalCount;
                                    for (index in ApplyPageList) {
                                        ApplyPageList[index]['auditStatus'] = 'W';
                                    }
                                    this.waitData = this.waitData.concat(ApplyPageList);
                                    isRefresh = {
                                        isRefresh: false
                                    };

                                    wx.setStorageSync('isRefresh', isRefresh);
                                } else {
                                    this.placeHolder.placeHolderImageIndex = 0;
                                    this.placeHolder.placeHolderShow = true;
                                }
                                this.$apply();
                                return _context.abrupt('break', 24);

                            case 14:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 24);

                            case 19:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 23:
                                return _context.abrupt('break', 24);

                            case 24:
                                this.$apply();

                            case 25:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetApplyPageList() {
                return _ref2.apply(this, arguments);
            }

            return GetApplyPageList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetApplyPageList();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh() {
            this.waitData = [];
            this.pageNumber = 1;
            this.GetApplyPageList();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var isRefresh = wx.getStorageSync('isRefresh');
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            var refresh = prevPage.data.refresh;
            console.log(refresh, isRefresh.isRefresh);
            if (refresh || isRefresh.isRefresh) {
                prevPage.data.refresh = false;
                this.isRefresh();
            }
        }
    }]);

    return applyAuditList;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(applyAuditList , 'pages/modules/auditModules/applyAudit/applyAuditList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5QXVkaXRMaXN0LmpzIl0sIm5hbWVzIjpbImFwcGx5QXVkaXRMaXN0IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJkYXRhIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwid2FpdERhdGEiLCJ0b3RhbENvdW50IiwicGFnZU51bWJlciIsIm1ldGhvZHMiLCJ0b1NlYXJjaCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvQXBwbHlEZXRhaWwiLCJpZCIsInN0YXR1cyIsIm1peGlucyIsIkdldEFwcGx5UGFnZUxpc3QiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiJGFwcGx5IiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJLZXl3b3JkIiwiRU5hbWUiLCJEZXBhcnRtZW50SWQiLCJWYWNhdGlvblR5cGUiLCJwYWdlU2l6ZSIsIlN0YXR1cyIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsIkFwcGx5UGFnZUxpc3QiLCJpbmRleCIsImNvbmNhdCIsImlzUmVmcmVzaCIsInNldFN0b3JhZ2VTeW5jIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RvcmFnZVN5bmMiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztB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cUNBQUs3QixNQUFMOzs7Ozs7QUFJVCxxQ0FBS0EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVLO0FBQ0wsaUJBQUtILGdCQUFMO0FBQ0g7OztvQ0FDVTtBQUNQLGlCQUFLWixRQUFMLEdBQWMsRUFBZDtBQUNBLGlCQUFLRSxVQUFMLEdBQWdCLENBQWhCO0FBQ0EsaUJBQUtVLGdCQUFMO0FBQ0EsaUJBQUtHLE1BQUw7QUFDSDs7O2lDQUNPO0FBQ0osZ0JBQUl5QixZQUFXbkMsR0FBRzBDLGNBQUgsQ0FBa0IsV0FBbEIsQ0FBZjtBQUNBLGdCQUFJQyxRQUFRQyxpQkFBWjtBQUNBLGdCQUFJQyxXQUFXRixNQUFNQSxNQUFNWixNQUFOLEdBQWUsQ0FBckIsQ0FBZixDQUhJLENBR29DO0FBQ3hDLGlCQUFLdEMsV0FBTCxHQUFpQm9ELFNBQVNyRCxJQUFULENBQWNDLFdBQS9CO0FBQ0EsZ0JBQUlDLFVBQVFtRCxTQUFTckQsSUFBVCxDQUFjRSxPQUExQjtBQUNBOEMsb0JBQVFDLEdBQVIsQ0FBWS9DLE9BQVosRUFBb0J5QyxVQUFVQSxTQUE5QjtBQUNBLGdCQUFHekMsV0FBU3lDLFVBQVVBLFNBQXRCLEVBQWdDO0FBQzVCVSx5QkFBU3JELElBQVQsQ0FBY0UsT0FBZCxHQUFzQixLQUF0QjtBQUNBLHFCQUFLeUMsU0FBTDtBQUNIO0FBRUo7Ozs7RUE3SXVDVyxlQUFLQyxJOztrQkFBNUJsRSxjIiwiZmlsZSI6ImFwcGx5QXVkaXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGFwcGx5QXVkaXRMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGxhY2VIb2xkZXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgcGxhY2VIb2xkZXJJbWFnZSxcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHF1ZXJ5U3RyZWFtOnt9LFxuICAgICAgICAgICAgcmVmcmVzaDpmYWxzZSxcbiAgICAgICAgICAgIHdhaXREYXRhOltdLFxuICAgICAgICAgICAgdG90YWxDb3VudDowLFxuICAgICAgICAgICAgcGFnZU51bWJlcjoxLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG9TZWFyY2goKXtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9zZWFyY2gvc2VhcmNoQXBwbHlBdWRpdCcgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9BcHBseURldGFpbChpZCxzdGF0dXMpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2FwcGx5QXVkaXREZXRhaWw/aWQ9JytpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zIF07XG4gICAgICAgIC8vIOS4i+aLieWIt+aWsFxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMud2FpdERhdGE9W107XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXI9MTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW09e307XG4gICAgICAgICAgICB0aGlzLkdldEFwcGx5UGFnZUxpc3QoKTtcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkuIrmi4nliqDovb1cbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQvIDEwID4gdGhpcy5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyKz0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBcHBseVBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lus5piv5pyJ5bqV57q/55qE77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0QXBwbHlQYWdlTGlzdCgpe1xuICAgICAgICAgICAgICAgIHZhciBLZXl3b3JkID0gIHRoaXMucXVlcnlTdHJlYW0uS2V5d29yZD90aGlzLnF1ZXJ5U3RyZWFtLktleXdvcmQ6Jyc7XG4gICAgICAgICAgICAgICAgdmFyIEVOYW1lID0gIHRoaXMucXVlcnlTdHJlYW0uRU5hbWU/dGhpcy5xdWVyeVN0cmVhbS5FTmFtZTonJztcbiAgICAgICAgICAgICAgICB2YXIgRGVwYXJ0bWVudElkID0gIHRoaXMucXVlcnlTdHJlYW0uRGVwYXJ0bWVudElkP3RoaXMucXVlcnlTdHJlYW0uRGVwYXJ0bWVudElkOicnO1xuICAgICAgICAgICAgICAgIHZhciBWYWNhdGlvblR5cGUgPSAgdGhpcy5xdWVyeVN0cmVhbS5WYWNhdGlvblR5cGU/dGhpcy5xdWVyeVN0cmVhbS5WYWNhdGlvblR5cGU6Jyc7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGE9e1xuICAgICAgICAgICAgICAgIHBhZ2VTaXplOjEwLFxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6dGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIFN0YXR1czonVycsXG4gICAgICAgICAgICAgICAgS2V5d29yZCxcbiAgICAgICAgICAgICAgICBFTmFtZSxcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50SWQsXG4gICAgICAgICAgICAgICAgVmFjYXRpb25UeXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3ZhY2F0aW9uTWFuYWdlL0dldEFwcGx5UGFnZUxpc3QnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgICAgICBpZihyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEFwcGx5UGFnZUxpc3Q9cmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudD0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBBcHBseVBhZ2VMaXN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBseVBhZ2VMaXN0W2luZGV4XVsnYXVkaXRTdGF0dXMnXT0nVydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0RGF0YT10aGlzLndhaXREYXRhLmNvbmNhdChBcHBseVBhZ2VMaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICBpc1JlZnJlc2g9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlZnJlc2g6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4PTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdz10cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oKo5rKh5pyJ5p2D6ZmQJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXg9MztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93PXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleD0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdz10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLkdldEFwcGx5UGFnZUxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpc1JlZnJlc2goKXtcbiAgICAgICAgICAgIHRoaXMud2FpdERhdGE9W107XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXI9MTtcbiAgICAgICAgICAgIHRoaXMuR2V0QXBwbHlQYWdlTGlzdCgpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKXtcbiAgICAgICAgICAgIHZhciBpc1JlZnJlc2g9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKTtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtPXByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW07XG4gICAgICAgICAgICB2YXIgcmVmcmVzaD1wcmV2UGFnZS5kYXRhLnJlZnJlc2g7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWZyZXNoLGlzUmVmcmVzaC5pc1JlZnJlc2gpO1xuICAgICAgICAgICAgaWYocmVmcmVzaHx8aXNSZWZyZXNoLmlzUmVmcmVzaCl7XG4gICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==