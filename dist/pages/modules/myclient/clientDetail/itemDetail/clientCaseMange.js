'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _placeHolderImage = require('./../../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientCaseMange = function (_wepy$page) {
    _inherits(clientCaseMange, _wepy$page);

    function clientCaseMange() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientCaseMange);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientCaseMange.__proto__ || Object.getPrototypeOf(clientCaseMange)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            clientId: '',
            clientCaseMangeData: [],
            clientCaseMangeTotalCount: 0,
            pageNumber: 1
        }, _this.methods = {
            toCaseDetail: function toCaseDetail(id) {
                wx.navigateTo({
                    url: '../../../mycase/caseDetail/casedetail?id=' + id + '&clientId=' + this.clientId
                });
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientCaseMange, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.clientCaseMangeData = [], this.clientCaseMangeTotalCount = 0;
            this.getStorageData();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
    }, {
        key: 'onReachBottom',

        //上拉加载
        value: function onReachBottom() {
            if (this.clientCaseMangeTotalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.getManageData();
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
        }
        // 获取本地缓存数据 

    }, {
        key: 'getStorageData',
        value: function getStorageData() {
            var clientCaseMangeData = wx.getStorageSync('clientDatas').CaseManageData.items;
            this.formatData(clientCaseMangeData);
            this.clientCaseMangeTotalCount = wx.getStorageSync('clientDatas').CaseManageData.totalCount;
        }
        // 获取网络数据

    }, {
        key: 'getManageData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, manageDatas, manageData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    ClientId: this.clientId,
                                    pageNumber: this.pageNumber,
                                    pageSize: 10
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseManage/GetCaseManage', 'post', data);

                            case 3:
                                manageDatas = _context.sent;

                                if (manageDatas.statusCode == 200 && manageDatas.data.result.items.length !== 0) {
                                    manageData = manageDatas.data.result.items;

                                    this.formatData(manageData);
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getManageData() {
                return _ref2.apply(this, arguments);
            }

            return getManageData;
        }()
        //格式化数据

    }, {
        key: 'formatData',
        value: function formatData(data) {
            for (var index in data) {
                switch (data[index].status) {
                    case 'N':
                        data[index]['statusColor'] = '#ff9900';
                        break;
                    case 'A':
                        data[index]['statusColor'] = '#5d73fa';
                        break;
                    case 'C':
                        data[index]['statusColor'] = '#069400';
                        break;
                    default:
                        break;
                }
                data[index].acceptDateText = data[index].acceptDateText.replace(/-/g, '/');
            }
            this.clientCaseMangeData = this.clientCaseMangeData.concat(data);
            var CaseManageData = wx.getStorageSync('clientDatas');
            CaseManageData.CaseManageData.items = this.clientCaseMangeData;
            wx.setStorageSync('clientDatas', CaseManageData);
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.clientId = options.id;
            this.getStorageData();
        }
    }]);

    return clientCaseMange;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(clientCaseMange , 'pages/modules/myclient/clientDetail/itemDetail/clientCaseMange'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudENhc2VNYW5nZS5qcyJdLCJuYW1lcyI6WyJjbGllbnRDYXNlTWFuZ2UiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2VIb2xkZXJJbWFnZSIsImRhdGEiLCJjbGllbnRJZCIsImNsaWVudENhc2VNYW5nZURhdGEiLCJjbGllbnRDYXNlTWFuZ2VUb3RhbENvdW50IiwicGFnZU51bWJlciIsIm1ldGhvZHMiLCJ0b0Nhc2VEZXRhaWwiLCJpZCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIm1peGlucyIsImdldFN0b3JhZ2VEYXRhIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRhcHBseSIsIiRwYXJlbnQiLCJnbG9iYWwiLCJuZXRXb3JrU3RyaW5nIiwiZ2V0TWFuYWdlRGF0YSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImdldFN0b3JhZ2VTeW5jIiwiQ2FzZU1hbmFnZURhdGEiLCJpdGVtcyIsImZvcm1hdERhdGEiLCJ0b3RhbENvdW50IiwiQ2xpZW50SWQiLCJwYWdlU2l6ZSIsImFqYXgiLCJnZXREYXRhIiwibWFuYWdlRGF0YXMiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwibGVuZ3RoIiwibWFuYWdlRGF0YSIsImluZGV4Iiwic3RhdHVzIiwiYWNjZXB0RGF0ZVRleHQiLCJyZXBsYWNlIiwiY29uY2F0Iiwic2V0U3RvcmFnZVN5bmMiLCJvcHRpb25zIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7NE1BQ2JD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QUssR0FBTDtBQUNJeEMsNkJBQUt1QyxLQUFMLEVBQVksYUFBWixJQUE2QixTQUE3QjtBQUNBO0FBQ0oseUJBQUssR0FBTDtBQUNJdkMsNkJBQUt1QyxLQUFMLEVBQVksYUFBWixJQUE2QixTQUE3QjtBQUNBO0FBQ0oseUJBQUssR0FBTDtBQUNJdkMsNkJBQUt1QyxLQUFMLEVBQVksYUFBWixJQUE2QixTQUE3QjtBQUNBO0FBQ0o7QUFDSTtBQVhSO0FBYUF2QyxxQkFBS3VDLEtBQUwsRUFBWUUsY0FBWixHQUE2QnpDLEtBQUt1QyxLQUFMLEVBQVlFLGNBQVosQ0FBMkJDLE9BQTNCLENBQW1DLElBQW5DLEVBQXlDLEdBQXpDLENBQTdCO0FBQ0g7QUFDRCxpQkFBS3hDLG1CQUFMLEdBQTJCLEtBQUtBLG1CQUFMLENBQXlCeUMsTUFBekIsQ0FBZ0MzQyxJQUFoQyxDQUEzQjtBQUNBLGdCQUFJMEIsaUJBQWdCbEIsR0FBR2lCLGNBQUgsQ0FBa0IsYUFBbEIsQ0FBcEI7QUFDQUMsMkJBQWVBLGNBQWYsQ0FBOEJDLEtBQTlCLEdBQW9DLEtBQUt6QixtQkFBekM7QUFDQU0sZUFBR29DLGNBQUgsQ0FBa0IsYUFBbEIsRUFBaUNsQixjQUFqQztBQUNBLGlCQUFLWCxNQUFMO0FBQ0g7OzsrQkFDTThCLE8sRUFBUztBQUNaLGlCQUFLNUMsUUFBTCxHQUFnQjRDLFFBQVF0QyxFQUF4QjtBQUNBLGlCQUFLSyxjQUFMO0FBQ0g7Ozs7RUE3R3dDa0MsZUFBS0MsSTs7a0JBQTdCMUQsZSIsImZpbGUiOiJjbGllbnRDYXNlTWFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsaWVudENhc2VNYW5nZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAgICAgcGxhY2VIb2xkZXJJbWFnZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNsaWVudENhc2VNYW5nZURhdGE6IFtdLFxuICAgICAgICAgICAgICAgIGNsaWVudENhc2VNYW5nZVRvdGFsQ291bnQ6IDAsXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgICAgIHRvQ2FzZURldGFpbChpZCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uLy4uLy4uL215Y2FzZS9jYXNlRGV0YWlsL2Nhc2VkZXRhaWw/aWQ9JytpZCsnJmNsaWVudElkPScrdGhpcy5jbGllbnRJZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICAgICAgICAgIC8vIOS4i+aLieWIt+aWsFxuICAgICAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRDYXNlTWFuZ2VEYXRhID0gW10sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50Q2FzZU1hbmdlVG90YWxDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxuICAgICAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8v5LiK5ouJ5Yqg6L29XG4gICAgICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWVudENhc2VNYW5nZVRvdGFsQ291bnQgLyAxMCA+IHRoaXMucGFnZU51bWJlciAmJiB0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWFuYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g6I635Y+W5pys5Zyw57yT5a2Y5pWw5o2uIFxuICAgICAgICAgICAgZ2V0U3RvcmFnZURhdGEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudENhc2VNYW5nZURhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnY2xpZW50RGF0YXMnKS5DYXNlTWFuYWdlRGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdERhdGEoY2xpZW50Q2FzZU1hbmdlRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRDYXNlTWFuZ2VUb3RhbENvdW50ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NsaWVudERhdGFzJykuQ2FzZU1hbmFnZURhdGEudG90YWxDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDojrflj5bnvZHnu5zmlbDmja5cbiAgICAgICAgYXN5bmMgIGdldE1hbmFnZURhdGEoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50SWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZToxMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYW5hZ2VEYXRhcz1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZU1hbmFnZS9HZXRDYXNlTWFuYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG1hbmFnZURhdGFzLnN0YXR1c0NvZGU9PTIwMCYmbWFuYWdlRGF0YXMuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFuYWdlRGF0YT1tYW5hZ2VEYXRhcy5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0RGF0YShtYW5hZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy/moLzlvI/ljJbmlbDmja5cbiAgICAgICAgZm9ybWF0RGF0YShkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhW2luZGV4XS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjZmY5OTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bJ3N0YXR1c0NvbG9yJ10gPSAnIzVkNzNmYSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdWydzdGF0dXNDb2xvciddID0gJyMwNjk0MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhW2luZGV4XS5hY2NlcHREYXRlVGV4dCA9IGRhdGFbaW5kZXhdLmFjY2VwdERhdGVUZXh0LnJlcGxhY2UoLy0vZywgJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xpZW50Q2FzZU1hbmdlRGF0YSA9IHRoaXMuY2xpZW50Q2FzZU1hbmdlRGF0YS5jb25jYXQoZGF0YSk7XG4gICAgICAgICAgICB2YXIgQ2FzZU1hbmFnZURhdGE9IHd4LmdldFN0b3JhZ2VTeW5jKCdjbGllbnREYXRhcycpO1xuICAgICAgICAgICAgQ2FzZU1hbmFnZURhdGEuQ2FzZU1hbmFnZURhdGEuaXRlbXM9dGhpcy5jbGllbnRDYXNlTWFuZ2VEYXRhXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY2xpZW50RGF0YXMnLCBDYXNlTWFuYWdlRGF0YSk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudElkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RvcmFnZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==