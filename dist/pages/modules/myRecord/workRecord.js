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

var _api = require('./../../../utils/cofig/api.js');

var _placeHolderImage = require('./../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var workRecord = function (_wepy$page) {
    _inherits(workRecord, _wepy$page);

    function workRecord() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, workRecord);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = workRecord.__proto__ || Object.getPrototypeOf(workRecord)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            isSearchRefresh: false,
            refresh: false,
            queryStream: {},
            addOpacity: 1,
            MyParticipantWorklogsCount: 0,
            MyWorklogsData: [],
            pageNumber: 1,
            totalCount: 0,
            isShow: false,
            sorting: ''
        }, _this.methods = {
            filter: function filter(name) {
                this.MyWorklogsData = [];
                this.pageNumber = 1;
                switch (name) {
                    case 'cteateTime':
                        this.GetMyWorklogs('CreationTime desc');
                        break;
                    case 'recordTime':
                        this.GetMyWorklogs('StartTime desc');
                        break;
                    case 'case':
                        this.GetMyWorklogs('CaseName desc');
                        break;
                    default:
                        break;
                }
            },
            ishowFilter: function ishowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            },
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: './search/search_record'
                });
            },
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                var _this2 = this;

                var data = {
                    isData: false
                };
                data = JSON.stringify(data);
                wx.navigateTo({
                    url: './creatWorkRecord/creatWorkRecord?data=' + data,
                    success: function success() {
                        _this2.addOpacity = 1;
                        _this2.$apply();
                    }
                });
            },
            toCreatWorkRecord: function toCreatWorkRecord() {
                var data = {
                    isData: false
                };
                data = JSON.stringify(data);
                wx.navigateTo({
                    url: './creatWorkRecord/creatWorkRecord?data=' + data
                });
            },
            toStatisticsDetail: function toStatisticsDetail() {
                wx.navigateTo({
                    url: './logsStatistics/statisticsDetail'
                });
            },
            toLogDetail: function toLogDetail(id) {
                wx.navigateTo({
                    url: './myLogdetail/logdetail?id=' + id
                });
            },

            //转换日志列表
            toMPworkLogsDetail: function toMPworkLogsDetail() {
                wx.navigateTo({
                    url: './MyParticipantWorklogs/MyParticipantWorklogsDetail'
                });
            }
        }, _this.mixins = [_mixin2.default], _this.watch = {
            totalCount: function totalCount(count) {
                if (count == 0) {
                    this.placeHolder.placeHolderImageIndex = 0;
                    this.placeHolder.placeHolderShow = true;
                } else {
                    this.placeHolder.placeHolderShow = false;
                }
            },
            MyParticipantWorklogsCount: function MyParticipantWorklogsCount(count) {
                if (count == 0) {
                    this.placeHolder.placeHolderImageIndex = 0;
                    this.placeHolder.placeHolderShow = true;
                } else {
                    this.placeHolder.placeHolderShow = false;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(workRecord, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.MyWorklogsData = [];
            this.pageNumber = 1;
            this.MyParticipantWorklogsCount = 0;
            this.queryStream = {};
            this.GetMyParticipantWorklogs();
            this.GetMyWorklogs();
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
                this.GetMyWorklogs();
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
        key: 'GetMyParticipantWorklogs',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var GetMyParticipantWorklogs, MyParticipantWorklogsData, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/worklog/GetMyParticipantWorklogs', 'post');

                            case 2:
                                GetMyParticipantWorklogs = _context.sent;

                                if (GetMyParticipantWorklogs.statusCode == 200 && GetMyParticipantWorklogs.data.result.length !== 0) {
                                    MyParticipantWorklogsData = GetMyParticipantWorklogs.data.result;

                                    this.MyParticipantWorklogsCount = MyParticipantWorklogsData.length;
                                    isRefresh = {
                                        isRefresh: false
                                    };

                                    wx.setStorageSync('isRefresh', isRefresh);
                                    // console.log(MyParticipantWorklogsData);
                                } else {
                                    if (GetMyParticipantWorklogs.data.result.length == 0) {
                                        this.MyParticipantWorklogsCount = 0;
                                    }
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetMyParticipantWorklogs() {
                return _ref2.apply(this, arguments);
            }

            return GetMyParticipantWorklogs;
        }()
    }, {
        key: 'GetMyWorklogs',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sort) {
                var KeyWord, data, MyWorklogsData, getData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.sorting = sort ? sort : this.sorting;
                                KeyWord = this.queryStream.KeyWord ? this.queryStream.KeyWord : '';
                                data = {
                                    EmployeeId: this.$parent.global.userInfo.id,
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    KeyWord: KeyWord,
                                    sorting: this.sorting
                                };
                                _context2.next = 5;
                                return _ajax2.default.getData('/api/services/web/worklog/GetMyWorklogs', 'post', data);

                            case 5:
                                MyWorklogsData = _context2.sent;
                                _context2.t0 = MyWorklogsData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 9 : _context2.t0 === 403 ? 13 : _context2.t0 === 500 ? 18 : 22;
                                break;

                            case 9:
                                this.totalCount = MyWorklogsData.data.result.totalCount;
                                if (MyWorklogsData.data.result.items.length !== 0) {
                                    getData = MyWorklogsData.data.result;

                                    this.formatData(getData.items);
                                } else {
                                    this.placeHolder.placeHolderImageIndex = 0;
                                    this.placeHolder.placeHolderShow = true;
                                }
                                this.$apply();
                                return _context2.abrupt('break', 23);

                            case 13:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 23);

                            case 18:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 22:
                                return _context2.abrupt('break', 23);

                            case 23:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetMyWorklogs(_x) {
                return _ref3.apply(this, arguments);
            }

            return GetMyWorklogs;
        }()
    }, {
        key: 'formatData',
        value: function formatData(data) {
            var logsData = data;
            for (var index in logsData) {
                var startTime = logsData[index].startTime;
                var endTime = logsData[index].endTime;
                var sT = (0, _api.formatDate)(startTime);
                var eT = (0, _api.formatDate)(endTime);
                logsData[index]['sTime'] = {
                    Y: sT[0] + '/' + sT[1] + '/' + sT[2],
                    M: sT[3] + ':' + sT[4]
                };
                logsData[index]['eTime'] = {
                    Y: eT[0] + '/' + eT[1] + '/' + eT[2],
                    M: eT[3] + ':' + eT[4]
                };
                switch (logsData[index].processStatus) {
                    case "A":
                        logsData[index]['statusColor'] = "#069400";
                        break;
                    case "R":
                        logsData[index]['statusColor'] = "#e20000";
                        break;
                    case "N":
                        logsData[index]['statusColor'] = "#ff9900";
                        break;
                    default:
                        break;
                }
                logsData[index].selfDuration = logsData[index].selfDuration.toFixed(1);
            }
            this.MyWorklogsData = this.MyWorklogsData.concat(logsData);
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetMyParticipantWorklogs();
            this.GetMyWorklogs();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh() {
            this.MyParticipantWorklogsCount = 0;
            this.MyWorklogsData = [];
            this.pageNumber = 1;
            this.GetMyWorklogs();
            this.GetMyParticipantWorklogs();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; //上一个页面
            this.queryStream = prevPage.data.queryStream;
            var isRefresh = wx.getStorageSync('isRefresh');
            if (prevPage.data.refresh || isRefresh.isRefresh) {
                prevPage.data.refresh = false;
                this.isRefresh();
            }
            this.$apply();
        }
    }]);

    return workRecord;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(workRecord , 'pages/modules/myRecord/workRecord'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtSZWNvcmQuanMiXSwibmFtZXMiOlsid29ya1JlY29yZCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JUb3AiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwiZGF0YSIsImlzU2VhcmNoUmVmcmVzaCIsInJlZnJlc2giLCJxdWVyeVN0cmVhbSIsImFkZE9wYWNpdHkiLCJNeVBhcnRpY2lwYW50V29ya2xvZ3NDb3VudCIsIk15V29ya2xvZ3NEYXRhIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJpc1Nob3ciLCJzb3J0aW5nIiwibWV0aG9kcyIsImZpbHRlciIsIm5hbWUiLCJHZXRNeVdvcmtsb2dzIiwiaXNob3dGaWx0ZXIiLCIkYXBwbHkiLCJ0b1NlYXJjaCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvdWNoU3RhcnQiLCJ0b3VjaEVuZCIsImlzRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwidG9DcmVhdFdvcmtSZWNvcmQiLCJ0b1N0YXRpc3RpY3NEZXRhaWwiLCJ0b0xvZ0RldGFpbCIsImlkIiwidG9NUHdvcmtMb2dzRGV0YWlsIiwibWl4aW5zIiwid2F0Y2giLCJjb3VudCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwiR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRwYXJlbnQiLCJnbG9iYWwiLCJuZXRXb3JrU3RyaW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiYWpheCIsImdldERhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwibGVuZ3RoIiwiTXlQYXJ0aWNpcGFudFdvcmtsb2dzRGF0YSIsImlzUmVmcmVzaCIsInNldFN0b3JhZ2VTeW5jIiwic29ydCIsIktleVdvcmQiLCJFbXBsb3llZUlkIiwidXNlckluZm8iLCJwYWdlU2l6ZSIsIml0ZW1zIiwiZm9ybWF0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsb2dzRGF0YSIsImluZGV4Iiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInNUIiwiZVQiLCJZIiwiTSIsInByb2Nlc3NTdGF0dXMiLCJzZWxmRHVyYXRpb24iLCJ0b0ZpeGVkIiwiY29uY2F0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImdldFN0b3JhZ2VTeW5jIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxNLEdBQVM7QUFDTEMsbUNBQXVCLElBRGxCO0FBRUxDLGlDQUFxQixNQUZoQjtBQUdMQyxnQ0FBb0IsU0FIZjtBQUlMQyxtQ0FBdUI7QUFKbEIsUyxRQU1WQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsb0JBQW1CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMkJBQTBCLGFBQTdDLEVBQXBCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMsNkJBQWlCLEtBRGQ7QUFFSEMscUJBQVMsS0FGTjtBQUdIQyx5QkFBYSxFQUhWO0FBSUhDLHdCQUFZLENBSlQ7QUFLSEMsd0NBQTRCLENBTHpCO0FBTUhDLDRCQUFnQixFQU5iO0FBT0hDLHdCQUFZLENBUFQ7QUFRSEMsd0JBQVksQ0FSVDtBQVNIQyxvQkFBUSxLQVRMO0FBVUhDLHFCQUFTO0FBVk4sUyxRQVlQQyxPLEdBQVU7QUFDTkMsa0JBRE0sa0JBQ0NDLElBREQsRUFDTztBQUNULHFCQUFLUCxjQUFMLEdBQXNCLEVBQXRCO0FB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SCxDQUFrQixXQUFsQixDQUFoQjtBQUNBLGdCQUFJRCxTQUFTaEYsSUFBVCxDQUFjRSxPQUFkLElBQXlCcUQsVUFBVUEsU0FBdkMsRUFBa0Q7QUFDOUN5Qix5QkFBU2hGLElBQVQsQ0FBY0UsT0FBZCxHQUF3QixLQUF4QjtBQUNBLHFCQUFLcUQsU0FBTDtBQUNIO0FBQ0QsaUJBQUt2QyxNQUFMO0FBQ0g7Ozs7RUExUW1Da0UsZUFBS0MsSTs7a0JBQXhCOUYsVSIsImZpbGUiOiJ3b3JrUmVjb3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQge1xuICAgICAgICBmb3JtYXREYXRlXG4gICAgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd29ya1JlY29yZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclRvcDogJyNmNGY0ZjQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXG4gICAgICAgIH07XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc1NlYXJjaFJlZnJlc2g6IGZhbHNlLFxuICAgICAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXG4gICAgICAgICAgICBhZGRPcGFjaXR5OiAxLFxuICAgICAgICAgICAgTXlQYXJ0aWNpcGFudFdvcmtsb2dzQ291bnQ6IDAsXG4gICAgICAgICAgICBNeVdvcmtsb2dzRGF0YTogW10sXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICAgICAgICBzb3J0aW5nOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZmlsdGVyKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk15V29ya2xvZ3NEYXRhID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3RlYXRlVGltZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldE15V29ya2xvZ3MoJ0NyZWF0aW9uVGltZSBkZXNjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWNvcmRUaW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0TXlXb3JrbG9ncygnU3RhcnRUaW1lIGRlc2MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRNeVdvcmtsb2dzKCdDYXNlTmFtZSBkZXNjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzaG93RmlsdGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gIXRoaXMuaXNTaG93XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1NlYXJjaCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9zZWFyY2gvc2VhcmNoX3JlY29yZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBpc0RhdGE6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9jcmVhdFdvcmtSZWNvcmQvY3JlYXRXb3JrUmVjb3JkP2RhdGE9JyArIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9DcmVhdFdvcmtSZWNvcmQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRGF0YTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0V29ya1JlY29yZC9jcmVhdFdvcmtSZWNvcmQ/ZGF0YT0nICsgZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvU3RhdGlzdGljc0RldGFpbCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9sb2dzU3RhdGlzdGljcy9zdGF0aXN0aWNzRGV0YWlsJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTG9nRGV0YWlsKGlkKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vbXlMb2dkZXRhaWwvbG9nZGV0YWlsP2lkPScgKyBpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v6L2s5o2i5pel5b+X5YiX6KGoXG4gICAgICAgICAgICB0b01Qd29ya0xvZ3NEZXRhaWwoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vTXlQYXJ0aWNpcGFudFdvcmtsb2dzL015UGFydGljaXBhbnRXb3JrbG9nc0RldGFpbCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgdG90YWxDb3VudChjb3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE15UGFydGljaXBhbnRXb3JrbG9nc0NvdW50KGNvdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5LiL5ouJ5Yi35pawXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5NeVdvcmtsb2dzRGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMuTXlQYXJ0aWNpcGFudFdvcmtsb2dzQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5HZXRNeVBhcnRpY2lwYW50V29ya2xvZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0TXlXb3JrbG9ncygpO1xuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOS4iuaLieWKoOi9vVxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyICYmIHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0TXlXb3JrbG9ncygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS7rOaYr+acieW6lee6v+eahO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zov57mjqXlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRNeVBhcnRpY2lwYW50V29ya2xvZ3MoKSB7XG4gICAgICAgICAgICB2YXIgR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi93b3JrbG9nL0dldE15UGFydGljaXBhbnRXb3JrbG9ncycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzLnN0YXR1c0NvZGUgPT0gMjAwICYmIEdldE15UGFydGljaXBhbnRXb3JrbG9ncy5kYXRhLnJlc3VsdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgTXlQYXJ0aWNpcGFudFdvcmtsb2dzRGF0YSA9IEdldE15UGFydGljaXBhbnRXb3JrbG9ncy5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLk15UGFydGljaXBhbnRXb3JrbG9nc0NvdW50ID0gTXlQYXJ0aWNpcGFudFdvcmtsb2dzRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGlzUmVmcmVzaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJywgaXNSZWZyZXNoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhNeVBhcnRpY2lwYW50V29ya2xvZ3NEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKEdldE15UGFydGljaXBhbnRXb3JrbG9ncy5kYXRhLnJlc3VsdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk15UGFydGljaXBhbnRXb3JrbG9nc0NvdW50ID0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRNeVdvcmtsb2dzKHNvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGluZyA9IHNvcnQgPyBzb3J0IDogdGhpcy5zb3J0aW5nO1xuICAgICAgICAgICAgdmFyIEtleVdvcmQgPSB0aGlzLnF1ZXJ5U3RyZWFtLktleVdvcmQgPyB0aGlzLnF1ZXJ5U3RyZWFtLktleVdvcmQgOiAnJztcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIEVtcGxveWVlSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWwudXNlckluZm8uaWQsXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICBLZXlXb3JkOiBLZXlXb3JkLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IHRoaXMuc29ydGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIE15V29ya2xvZ3NEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi93b3JrbG9nL0dldE15V29ya2xvZ3MnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzd2l0Y2ggKE15V29ya2xvZ3NEYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gTXlXb3JrbG9nc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE15V29ya2xvZ3NEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldERhdGEgPSBNeVdvcmtsb2dzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0RGF0YShnZXREYXRhLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JtYXREYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBsb2dzRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBsb2dzRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydFRpbWUgPSBsb2dzRGF0YVtpbmRleF0uc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIHZhciBlbmRUaW1lID0gbG9nc0RhdGFbaW5kZXhdLmVuZFRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIHNUID0gZm9ybWF0RGF0ZShzdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIHZhciBlVCA9IGZvcm1hdERhdGUoZW5kVGltZSk7XG4gICAgICAgICAgICAgICAgbG9nc0RhdGFbaW5kZXhdWydzVGltZSddID0ge1xuICAgICAgICAgICAgICAgICAgICBZOiBzVFswXSArICcvJyArIHNUWzFdICsgJy8nICsgc1RbMl0sXG4gICAgICAgICAgICAgICAgICAgIE06IHNUWzNdICsgJzonICsgc1RbNF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9nc0RhdGFbaW5kZXhdWydlVGltZSddID0ge1xuICAgICAgICAgICAgICAgICAgICBZOiBlVFswXSArICcvJyArIGVUWzFdICsgJy8nICsgZVRbMl0sXG4gICAgICAgICAgICAgICAgICAgIE06IGVUWzNdICsgJzonICsgZVRbNF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChsb2dzRGF0YVtpbmRleF0ucHJvY2Vzc1N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nc0RhdGFbaW5kZXhdWydzdGF0dXNDb2xvciddID0gXCIjMDY5NDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nc0RhdGFbaW5kZXhdWydzdGF0dXNDb2xvciddID0gXCIjZTIwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nc0RhdGFbaW5kZXhdWydzdGF0dXNDb2xvciddID0gXCIjZmY5OTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvZ3NEYXRhW2luZGV4XS5zZWxmRHVyYXRpb24gPSBsb2dzRGF0YVtpbmRleF0uc2VsZkR1cmF0aW9uLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLk15V29ya2xvZ3NEYXRhID0gdGhpcy5NeVdvcmtsb2dzRGF0YS5jb25jYXQobG9nc0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzKCk7XG4gICAgICAgICAgICB0aGlzLkdldE15V29ya2xvZ3MoKTtcbiAgICAgICAgfVxuICAgICAgICBpc1JlZnJlc2goKSB7XG4gICAgICAgICAgICB0aGlzLk15UGFydGljaXBhbnRXb3JrbG9nc0NvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuTXlXb3JrbG9nc0RhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICB0aGlzLkdldE15V29ya2xvZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzKCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbTtcbiAgICAgICAgICAgIHZhciBpc1JlZnJlc2ggPSB3eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgICAgICBpZiAocHJldlBhZ2UuZGF0YS5yZWZyZXNoIHx8IGlzUmVmcmVzaC5pc1JlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==