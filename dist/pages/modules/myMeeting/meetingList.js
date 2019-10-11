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

var _api = require('./../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientDetail = function (_wepy$page) {
    _inherits(clientDetail, _wepy$page);

    function clientDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
            MeetingsData: [],
            pageNumber: 1,
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: './search/searchMeeting'
                });
            },
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },

            //创建页面
            touchEnd: function touchEnd() {
                var _this2 = this;

                wx.navigateTo({
                    url: './creatMeeting/creatMeeting',
                    success: function success() {
                        _this2.addOpacity = 1;
                        _this2.$apply();
                    }
                });
            },

            //跳转至详情页
            toMeetingDetail: function toMeetingDetail(id, status) {
                wx.navigateTo({
                    url: '../myMeeting/meetingDetail/meetingDetail?id=' + id + '&status=' + status
                });
            },
            ishowFilter: function ishowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            },
            filter: function filter(name) {
                this.MeetingsData = [];
                this.pageNumber = 1;
                switch (name) {
                    case 'cteateTime':
                        this.GetMeetings('CreationTime desc');
                        break;
                    case 'id':
                        this.GetMeetings('Id desc');
                        break;
                    default:
                        break;
                }
            }
        }, _this.mixins = [_mixin2.default], _this.watch = {
            isRefresh: function isRefresh(newVlue) {
                if (newVlue) {
                    this.MeetingsData = [], this.pageNumber = 1;
                    this.GetMeetings();
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.MeetingsData = [], this.pageNumber = 1;
            this.queryStream = {};
            this.GetMeetings();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }

        //上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.GetMeetings();
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
        key: 'GetMeetings',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sort) {
                var KeyWord, Category, Level, MeetingRoomId, MeetingTime, CreationTime, Status, Subject, Title, data, meetingsData, resData, index, start, end, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中，请稍等！',
                                    mask: true
                                });
                                this.sorting = sort ? sort : this.sorting;
                                KeyWord = this.queryStream.KeyWord ? this.queryStream.KeyWord : '';
                                Category = this.queryStream.Category ? this.queryStream.Category : '';
                                Level = this.queryStream.Level ? this.queryStream.Level : '';
                                MeetingRoomId = this.queryStream.MeetingRoomId ? this.queryStream.MeetingRoomId : '';
                                MeetingTime = this.queryStream.MeetingTime ? this.queryStream.MeetingTime : '';
                                CreationTime = this.queryStream.CreationTime ? this.queryStream.CreationTime : '';
                                Status = this.queryStream.Status ? this.queryStream.Status : '';
                                Subject = this.queryStream.Subject ? this.queryStream.Subject : '';
                                Title = this.queryStream.Title ? this.queryStream.Title : '';
                                data = {
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    Category: Category,
                                    KeyWord: KeyWord,
                                    Level: Level,
                                    MeetingRoomId: MeetingRoomId,
                                    MeetingTime: MeetingTime,
                                    CreationTime: CreationTime,
                                    Status: Status,
                                    Subject: Subject,
                                    Title: Title,
                                    sorting: this.sorting
                                };
                                _context.next = 14;
                                return _ajax2.default.getData('/api/services/web/meeting/GetMeetings', 'post', data);

                            case 14:
                                meetingsData = _context.sent;
                                _context.t0 = meetingsData.statusCode;
                                _context.next = _context.t0 === 200 ? 18 : _context.t0 === 403 ? 51 : _context.t0 === 500 ? 56 : 60;
                                break;

                            case 18:
                                if (!(meetingsData.data.result.items.length !== 0)) {
                                    _context.next = 46;
                                    break;
                                }

                                this.totalCount = meetingsData.data.result.totalCount;
                                resData = meetingsData.data.result.items;
                                _context.t1 = regeneratorRuntime.keys(resData);

                            case 22:
                                if ((_context.t2 = _context.t1()).done) {
                                    _context.next = 41;
                                    break;
                                }

                                index = _context.t2.value;
                                start = (0, _api.formatDate)(resData[index].startTime);

                                resData[index].startTime = start[0] + '/' + start[1] + '/' + start[2] + ' ' + start[3] + ':' + start[4];
                                end = (0, _api.formatDate)(resData[index].endTime);

                                resData[index].endTime = end[3] + ':' + end[4];
                                _context.t3 = resData[index].statusId;
                                _context.next = _context.t3 === 'D' ? 31 : _context.t3 === 'C' ? 33 : _context.t3 === 'A' ? 35 : 37;
                                break;

                            case 31:
                                resData[index]['statusColor'] = "#ff9900";
                                return _context.abrupt('break', 39);

                            case 33:
                                resData[index]['statusColor'] = "#009dff";
                                return _context.abrupt('break', 39);

                            case 35:
                                resData[index]['statusColor'] = "#069400";
                                return _context.abrupt('break', 39);

                            case 37:
                                resData[index]['statusColor'] = "#ff9900";
                                return _context.abrupt('break', 39);

                            case 39:
                                _context.next = 22;
                                break;

                            case 41:
                                this.MeetingsData = this.MeetingsData.concat(resData);
                                isRefresh = {
                                    isRefresh: false
                                };

                                wx.setStorageSync('isRefresh', isRefresh);
                                _context.next = 49;
                                break;

                            case 46:
                                console.log('数据为空');
                                this.placeHolder.placeHolderImageIndex = 0;
                                this.placeHolder.placeHolderShow = true;

                            case 49:
                                this.$apply();
                                return _context.abrupt('break', 61);

                            case 51:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 61);

                            case 56:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 60:
                                return _context.abrupt('break', 61);

                            case 61:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetMeetings(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetMeetings;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetMeetings();
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
                this.MeetingsData = [], this.pageNumber = 1;
                this.GetMeetings();
            }
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myMeeting/meetingList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmdMaXN0LmpzIl0sIm5hbWVzIjpbImNsaWVudERldGFpbCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwiZGF0YSIsInF1ZXJ5U3RyZWFtIiwicmVmcmVzaCIsImFkZE9wYWNpdHkiLCJNZWV0aW5nc0RhdGEiLCJwYWdlTnVtYmVyIiwiaXNTaG93Iiwic29ydGluZyIsIm1ldGhvZHMiLCJ0b1NlYXJjaCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsInN1Y2Nlc3MiLCJ0b01lZXRpbmdEZXRhaWwiLCJpZCIsInN0YXR1cyIsImlzaG93RmlsdGVyIiwiZmlsdGVyIiwibmFtZSIsIkdldE1lZXRpbmdzIiwibWl4aW5zIiwid2F0Y2giLCJpc1JlZnJlc2giLCJuZXdWbHVlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInRvdGFsQ291bnQiLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInNvcnQiLCJzaG93TG9hZGluZyIsIktleVdvcmQiLCJDYXRlZ29yeSIsIkxldmVsIiwiTWVldGluZ1Jvb21JZCIsIk1lZXRpbmdUaW1lIiwiQ3JlYXRpb25UaW1lIiwiU3RhdHVzIiwiU3ViamVjdCIsIlRpdGxlIiwicGFnZVNpemUiLCJhamF4IiwiZ2V0RGF0YSIsIm1lZXRpbmdzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsInJlc0RhdGEiLCJpbmRleCIsInN0YXJ0Iiwic3RhcnRUaW1lIiwiZW5kIiwiZW5kVGltZSIsInN0YXR1c0lkIiwiY29uY2F0Iiwic2V0U3RvcmFnZVN5bmMiLCJjb25zb2xlIiwibG9nIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJnZXRTdG9yYWdlU3luYyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLE0sR0FBUztBQUNMQyxtQ0FBdUIsSUFEbEI7QUFFTEMsaUNBQXFCLE1BRmhCO0FBR0xDLGdDQUFvQixTQUhmO0FBSUxDLG1DQUF1QjtBQUpsQixTLFFBTVZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwyQkFBMEIsYUFBN0MsRUFBMkQsMkJBQTBCLGFBQXJGLEVBQXBCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMseUJBQWEsRUFEVjtBQUVIQyxxQkFBUyxLQUZOO0FBR0hDLHdCQUFZLENBSFQ7QUFJSEMsMEJBQWMsRUFKWDtBQUtIQyx3QkFBWSxDQUxUO0FBTUhDLG9CQUFRLEtBTkw7QUFPSEMscUJBQVM7QUFQTixTLFFBU1BDLE8sR0FBVTtBQUNOQyxvQkFETSxzQkFDSztBQUNQQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQUxLO0FBTU5DLHNCQU5NLHdCQU1PO0FBQ1QscUJBQUtWLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxxQkFBS1csTUFBTDtBQUNILGFBVEs7O0FBVU47QUFDQUMsb0JBWE0sc0JBV0s7QUFBQTs7QUFDUEwsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSyw2QkFESztBQUVWSSw2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J3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG4gICAgaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9taXhpbi5qcyc7XG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wbGFjZUhvbGRlckltYWdlJztcbiAgICBpbXBvcnQge1xuICAgICAgICBmb3JtYXREYXRlXG4gICAgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGxhY2VIb2xkZXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgcGxhY2VIb2xkZXJJbWFnZVxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcXVlcnlTdHJlYW06IHt9LFxuICAgICAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICAgICAgICBhZGRPcGFjaXR5OiAxLFxuICAgICAgICAgICAgTWVldGluZ3NEYXRhOiBbXSxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgICAgICAgc29ydGluZzogJydcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvU2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL3NlYXJjaC9zZWFyY2hNZWV0aW5nJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/liJvlu7rpobXpnaJcbiAgICAgICAgICAgIHRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0TWVldGluZy9jcmVhdE1lZXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v6Lez6L2s6Iez6K+m5oOF6aG1XG4gICAgICAgICAgICB0b01lZXRpbmdEZXRhaWwoaWQsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9teU1lZXRpbmcvbWVldGluZ0RldGFpbC9tZWV0aW5nRGV0YWlsP2lkPScgKyBpZCArICcmc3RhdHVzPScgKyBzdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc2hvd0ZpbHRlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvdyA9ICF0aGlzLmlzU2hvd1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsdGVyKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk1lZXRpbmdzRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N0ZWF0ZVRpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRNZWV0aW5ncygnQ3JlYXRpb25UaW1lIGRlc2MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0TWVldGluZ3MoJ0lkIGRlc2MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgaXNSZWZyZXNoKG5ld1ZsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3Vmx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1lZXRpbmdzRGF0YSA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldE1lZXRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOS4i+aLieWIt+aWsFxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMuTWVldGluZ3NEYXRhID0gW10sXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMVxuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5HZXRNZWV0aW5ncygpO1xuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC8v5LiK5ouJ5Yqg6L29XG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXIgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRNZWV0aW5ncygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRNZWV0aW5ncyhzb3J0KSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK3vvIzor7fnqI3nrYnvvIEnLFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc29ydGluZyA9IHNvcnQgPyBzb3J0IDogdGhpcy5zb3J0aW5nO1xuICAgICAgICAgICAgdmFyIEtleVdvcmQgPSB0aGlzLnF1ZXJ5U3RyZWFtLktleVdvcmQgPyB0aGlzLnF1ZXJ5U3RyZWFtLktleVdvcmQgOiAnJztcbiAgICAgICAgICAgIHZhciBDYXRlZ29yeSA9IHRoaXMucXVlcnlTdHJlYW0uQ2F0ZWdvcnkgPyB0aGlzLnF1ZXJ5U3RyZWFtLkNhdGVnb3J5IDogJyc7XG4gICAgICAgICAgICB2YXIgTGV2ZWwgPSB0aGlzLnF1ZXJ5U3RyZWFtLkxldmVsID8gdGhpcy5xdWVyeVN0cmVhbS5MZXZlbCA6ICcnO1xuICAgICAgICAgICAgdmFyIE1lZXRpbmdSb29tSWQgPSB0aGlzLnF1ZXJ5U3RyZWFtLk1lZXRpbmdSb29tSWQgPyB0aGlzLnF1ZXJ5U3RyZWFtLk1lZXRpbmdSb29tSWQgOiAnJztcbiAgICAgICAgICAgIHZhciBNZWV0aW5nVGltZSA9IHRoaXMucXVlcnlTdHJlYW0uTWVldGluZ1RpbWUgPyB0aGlzLnF1ZXJ5U3RyZWFtLk1lZXRpbmdUaW1lIDogJyc7XG4gICAgICAgICAgICB2YXIgQ3JlYXRpb25UaW1lID0gdGhpcy5xdWVyeVN0cmVhbS5DcmVhdGlvblRpbWUgPyB0aGlzLnF1ZXJ5U3RyZWFtLkNyZWF0aW9uVGltZSA6ICcnO1xuICAgICAgICAgICAgdmFyIFN0YXR1cyA9IHRoaXMucXVlcnlTdHJlYW0uU3RhdHVzID8gdGhpcy5xdWVyeVN0cmVhbS5TdGF0dXMgOiAnJztcbiAgICAgICAgICAgIHZhciBTdWJqZWN0ID0gdGhpcy5xdWVyeVN0cmVhbS5TdWJqZWN0ID8gdGhpcy5xdWVyeVN0cmVhbS5TdWJqZWN0IDogJyc7XG4gICAgICAgICAgICB2YXIgVGl0bGUgPSB0aGlzLnF1ZXJ5U3RyZWFtLlRpdGxlID8gdGhpcy5xdWVyeVN0cmVhbS5UaXRsZSA6ICcnO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICBDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBLZXlXb3JkLFxuICAgICAgICAgICAgICAgIExldmVsLFxuICAgICAgICAgICAgICAgIE1lZXRpbmdSb29tSWQsXG4gICAgICAgICAgICAgICAgTWVldGluZ1RpbWUsXG4gICAgICAgICAgICAgICAgQ3JlYXRpb25UaW1lLFxuICAgICAgICAgICAgICAgIFN0YXR1cyxcbiAgICAgICAgICAgICAgICBTdWJqZWN0LFxuICAgICAgICAgICAgICAgIFRpdGxlLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRoaXMuc29ydGluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbWVldGluZ3NEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9tZWV0aW5nL0dldE1lZXRpbmdzJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc3dpdGNoIChtZWV0aW5nc0RhdGEuc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAobWVldGluZ3NEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gbWVldGluZ3NEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzRGF0YSA9IG1lZXRpbmdzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHJlc0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBmb3JtYXREYXRlKHJlc0RhdGFbaW5kZXhdLnN0YXJ0VGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhW2luZGV4XS5zdGFydFRpbWUgPXN0YXJ0WzBdKycvJytzdGFydFsxXSsnLycrc3RhcnRbMl0rJyAnK3N0YXJ0WzNdICsgJzonICsgc3RhcnRbNF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gZm9ybWF0RGF0ZShyZXNEYXRhW2luZGV4XS5lbmRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhW2luZGV4XS5lbmRUaW1lID0gZW5kWzNdICsgJzonICsgZW5kWzRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YVtpbmRleF0uc3RhdHVzSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9IFwiI2ZmOTkwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9IFwiIzAwOWRmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9IFwiIzA2OTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0RhdGFbaW5kZXhdWydzdGF0dXNDb2xvciddID0gXCIjZmY5OTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWVldGluZ3NEYXRhID0gdGhpcy5NZWV0aW5nc0RhdGEuY29uY2F0KHJlc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVmcmVzaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlZnJlc2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJywgaXNSZWZyZXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7kuLrnqbonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLkdldE1lZXRpbmdzKCk7XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgdmFyIGlzUmVmcmVzaCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKTtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbTtcbiAgICAgICAgICAgIGlmIChwcmV2UGFnZS5kYXRhLnJlZnJlc2ggfHwgaXNSZWZyZXNoLmlzUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuTWVldGluZ3NEYXRhID0gW10sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDFcbiAgICAgICAgICAgICAgICB0aGlzLkdldE1lZXRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=