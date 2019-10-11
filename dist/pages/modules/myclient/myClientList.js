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

var myClientList = function (_wepy$page) {
    _inherits(myClientList, _wepy$page);

    function myClientList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, myClientList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myClientList.__proto__ || Object.getPrototypeOf(myClientList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            IsAll: false,
            queryStream: {},
            searchData: {},
            clientsData: [],
            AnnualCountsClient: '',
            pageNumber: 1,
            totalCount: 0,
            clientY: 0,
            clientStatisticsIsShow: true,
            isShow: false,
            sorting: ''
        }, _this.methods = {
            toCreateClientPage: function toCreateClientPage() {
                wx.navigateTo({
                    url: './createClient/createClientBaseInfo'
                });
            },
            toSearchPage: function toSearchPage() {
                wx.navigateTo({
                    url: './search/search_client'
                });
            },
            toRecordClient: function toRecordClient() {
                wx.navigateTo({
                    url: './clientDetail/clientStatistics'
                });
            },
            toClientDetail: function toClientDetail(index) {
                wx.navigateTo({
                    url: './clientDetail/clientDetail?index=' + index
                });
            },
            ishowFilter: function ishowFilter() {
                this.isShow = !this.isShow;
                this.$apply();
            },
            filter: function filter(name) {
                this.clientsData = [];
                this.pageNumber = 1;
                switch (name) {
                    case 'cteateTime':
                        this.GetClients('CreationTime desc');
                        break;
                    case 'id':
                        this.GetClients('Id desc');
                        break;
                    case 'name':
                        this.GetClients('Name desc');
                        break;
                    case 'importLevel':
                        this.GetClients('ImportLevel desc');
                        break;
                    default:
                        break;
                }
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(myClientList, [{
        key: 'GetClients',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sort) {
                var data, clientsData, index, clientsDataStorage;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.sorting = sort ? sort : this.sorting;
                                data = {
                                    IsAll: this.IsAll,
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    KeyWord: '',
                                    Name: '',
                                    CreationTime: '',
                                    Region: '',
                                    Origin: '',
                                    OrganizationUnitId: '',
                                    Category: '',
                                    ClientType: '',
                                    ImportLevel: '',
                                    IndustryType: '',
                                    Id: '',
                                    sorting: this.sorting
                                };

                                if (Object.keys(this.queryStream).length > 0) {
                                    data.KeyWord = this.queryStream.KeyWord || '';
                                    data.Name = this.queryStream.Name || '';
                                    data.CreationTime = this.queryStream.CreationTime || '';
                                    data.Region = this.queryStream.Region || '';
                                    data.OrganizationUnitId = this.queryStream.OrganizationUnitId || '';
                                    data.Category = this.queryStream.Category || '';
                                    data.Origin = this.queryStream.Origin || '';
                                    data.Id = this.queryStream.Id || '';
                                    data.ClientType = this.queryStream.ClientType || '';
                                    data.ImportLevel = this.queryStream.ImportLevel || '';
                                    data.IndustryType = this.queryStream.IndustryType || '';
                                }
                                wx.showLoading({
                                    title: '数据加载中',
                                    mask: true
                                });
                                _context.next = 6;
                                return _ajax2.default.getData('/api/services/web/client/GetClients', 'post', data);

                            case 6:
                                clientsData = _context.sent;

                                this.totalCount = clientsData.data.result.totalCount;
                                _context.t0 = clientsData.statusCode;
                                _context.next = _context.t0 === 200 ? 11 : _context.t0 === 403 ? 39 : _context.t0 === 500 ? 43 : 46;
                                break;

                            case 11:
                                if (!(clientsData.data.result.items.length !== 0)) {
                                    _context.next = 35;
                                    break;
                                }

                                clientsData = clientsData.data.result.items;
                                _context.t1 = regeneratorRuntime.keys(clientsData);

                            case 14:
                                if ((_context.t2 = _context.t1()).done) {
                                    _context.next = 28;
                                    break;
                                }

                                index = _context.t2.value;
                                _context.t3 = clientsData[index].clientType;
                                _context.next = _context.t3 === 'G' ? 19 : _context.t3 === 'N' ? 21 : _context.t3 === 'V' ? 23 : 25;
                                break;

                            case 19:
                                clientsData[index]['bgcolor'] = '#069400';
                                return _context.abrupt('break', 26);

                            case 21:
                                clientsData[index]['bgcolor'] = '#ff9900';
                                return _context.abrupt('break', 26);

                            case 23:
                                clientsData[index]['bgcolor'] = '#5d73fa';
                                return _context.abrupt('break', 26);

                            case 25:
                                return _context.abrupt('break', 26);

                            case 26:
                                _context.next = 14;
                                break;

                            case 28:
                                this.GetPersonAnnualCounts();
                                this.clientsData = this.clientsData.concat(clientsData);
                                clientsDataStorage = {
                                    clientDetailDatas: this.clientsData
                                };

                                wx.setStorageSync('clientDatas', clientsDataStorage);
                                this.placeHolder.placeHolderShow = false;
                                _context.next = 37;
                                break;

                            case 35:
                                this.placeHolder.placeHolderImageIndex = 0;
                                this.placeHolder.placeHolderShow = true;

                            case 37:
                                this.$apply();
                                return _context.abrupt('break', 47);

                            case 39:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 47);

                            case 43:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 46:
                                return _context.abrupt('break', 47);

                            case 47:
                                this.$apply();

                            case 48:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClients(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetClients;
        }()
    }, {
        key: 'GetPersonAnnualCounts',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/analyzeStatistics/GetPersonAnnualCounts', //获取swiper数据
                                'post');

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.AnnualCountsClient = resData.data.result[0];
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetPersonAnnualCounts() {
                return _ref3.apply(this, arguments);
            }

            return GetPersonAnnualCounts;
        }()
        //下拉刷新

    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.clientsData = [];
            this.pageNumber = 1;
            this.queryStream = {};
            this.clientStatisticsIsShow = true;
            this.GetClients();
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
                this.GetClients();
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
        key: 'onLoad',
        value: function onLoad(options) {
            if (options.IsAll) {
                this.IsAll = options.IsAll ? true : false;
            }
            // this.sorting=this.IsAll?'Name desc':'CreationTime desc'
            this.GetClients();
            this.$apply();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh(queryStream) {
            this.queryStream = queryStream;
            this.clientsData = [];
            this.pageNumber = 1;
            this.GetClients();
            this.$apply();
        }
    }, {
        key: 'isDataRefresh',
        value: function isDataRefresh() {
            this.clientsData = [];
            this.pageNumber = 1;
            this.GetClients();
            this.$apply();
        }
    }]);

    return myClientList;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(myClientList , 'pages/modules/myclient/myClientList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Q2xpZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJteUNsaWVudExpc3QiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2VIb2xkZXJJbWFnZSIsImRhdGEiLCJJc0FsbCIsInF1ZXJ5U3RyZWFtIiwic2VhcmNoRGF0YSIsImNsaWVudHNEYXRhIiwiQW5udWFsQ291bnRzQ2xpZW50IiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJjbGllbnRZIiwiY2xpZW50U3RhdGlzdGljc0lzU2hvdyIsImlzU2hvdyIsInNvcnRpbmciLCJtZXRob2RzIiwidG9DcmVhdGVDbGllbnRQYWdlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9TZWFyY2hQYWdlIiwidG9SZWNvcmRDbGllbnQiLCJ0b0NsaWVudERldGFpbCIsImluZGV4IiwiaXNob3dGaWx0ZXIiLCIkYXBwbHkiLCJmaWx0ZXIiLCJuYW1lIiwiR2V0Q2xpZW50cyIsIm1peGlucyIsIm1peGluIiwic29ydCIsInBhZ2VTaXplIiwiS2V5V29yZCIsIk5hbWUiLCJDcmVhdGlvblRpbWUiLCJSZWdpb24iLCJPcmlnaW4iLCJPcmdhbml6YXRpb25Vbml0SWQiLCJDYXRlZ29yeSIsIkNsaWVudFR5cGUiLCJJbXBvcnRMZXZlbCIsIkluZHVzdHJ5VHlwZSIsIklkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwiYWpheCIsImdldERhdGEiLCJyZXN1bHQiLCJzdGF0dXNDb2RlIiwiaXRlbXMiLCJjbGllbnRUeXBlIiwiR2V0UGVyc29uQW5udWFsQ291bnRzIiwiY29uY2F0IiwiY2xpZW50c0RhdGFTdG9yYWdlIiwiY2xpZW50RGV0YWlsRGF0YXMiLCJzZXRTdG9yYWdlU3luYyIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJTaG93IiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicmVzRGF0YSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm9wdGlvbnMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLE0sR0FBUztBQUNMQyxtQ0FBdUIsSUFEbEI7QUFFTEMsaUNBQXFCLE1BRmhCO0FBR0xDLGdDQUFvQixTQUhmO0FBSUxDLG1DQUF1QjtBQUpsQixTLFFBTVZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwyQkFBMEIsYUFBN0MsRUFBcEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyxtQkFBTSxLQURIO0FBRUhDLHlCQUFhLEVBRlY7QUFHSEMsd0JBQVksRUFIVDtBQUlIQyx5QkFBYSxFQUpWO0FBS0hDLGdDQUFvQixFQUxqQjtBQU1IQyx3QkFBWSxDQU5UO0FBT0hDLHdCQUFZLENBUFQ7QUFRSEMscUJBQVMsQ0FSTjtBQVNIQyxvQ0FBd0IsSUFUckI7QUFVSEMsb0JBQVEsS0FWTDtBQVdIQyxxQkFBUztBQVhOLFMsUUFhUEMsTyxHQUFVO0FBQ05DLDhCQURNLGdDQUNlO0FBQ2pCQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQUxLO0FBTU5DLHdCQU5NLDBCQU1TO0FBQ1hILG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBVks7QUFXTkUs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QUdPO0FBQ0gsb0JBQUksS0FBS3VDLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkMsYUFBeEIsRUFBdUM7QUFDbkNwRCx1QkFBR3FELFNBQUgsQ0FBYTtBQUNUdEIsK0JBQU8sVUFERTtBQUVUdUIsOEJBQU0sTUFGRztBQUdUQyxrQ0FBVSxJQUhEO0FBSVR2Qiw4QkFBTTtBQUpHLHFCQUFiO0FBTUgsaUJBUEQsTUFPTztBQUNIaEMsdUJBQUdxRCxTQUFILENBQWE7QUFDVHRCLCtCQUFPLFNBREU7QUFFVHVCLDhCQUFNLE1BRkc7QUFHVEMsa0NBQVUsSUFIRDtBQUlUdkIsOEJBQU07QUFKRyxxQkFBYjtBQU1IO0FBQ0o7QUFDRCxpQkFBS3hCLE1BQUw7QUFDSDs7OytCQUNNZ0QsTyxFQUFTO0FBQ1osZ0JBQUdBLFFBQVFyRSxLQUFYLEVBQWlCO0FBQ2IscUJBQUtBLEtBQUwsR0FBV3FFLFFBQVFyRSxLQUFSLEdBQWMsSUFBZCxHQUFtQixLQUE5QjtBQUNIO0FBQ0Q7QUFDQSxpQkFBS3dCLFVBQUw7QUFDQSxpQkFBS0gsTUFBTDtBQUNIOzs7a0NBQ1NwQixXLEVBQWE7QUFDbkIsaUJBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsaUJBQUtFLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxpQkFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGlCQUFLbUIsVUFBTDtBQUNBLGlCQUFLSCxNQUFMO0FBQ0g7Ozt3Q0FDYztBQUNYLGlCQUFLbEIsV0FBTCxHQUFtQixFQUFuQjtBQUNBLGlCQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsaUJBQUttQixVQUFMO0FBQ0EsaUJBQUtILE1BQUw7QUFDSDs7OztFQWxPcUNpRCxlQUFLQyxJOztrQkFBMUJuRixZIiwiZmlsZSI6Im15Q2xpZW50TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG4gICAgaW1wb3J0IG1peGluIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG15Q2xpZW50TGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclRvcDogJyNmNGY0ZjQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXG4gICAgICAgIH07XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBJc0FsbDpmYWxzZSxcbiAgICAgICAgICAgIHF1ZXJ5U3RyZWFtOiB7fSxcbiAgICAgICAgICAgIHNlYXJjaERhdGE6IHt9LFxuICAgICAgICAgICAgY2xpZW50c0RhdGE6IFtdLFxuICAgICAgICAgICAgQW5udWFsQ291bnRzQ2xpZW50OiAnJyxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgY2xpZW50WTogMCxcbiAgICAgICAgICAgIGNsaWVudFN0YXRpc3RpY3NJc1Nob3c6IHRydWUsXG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgICAgICAgc29ydGluZzogJycsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b0NyZWF0ZUNsaWVudFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vY3JlYXRlQ2xpZW50L2NyZWF0ZUNsaWVudEJhc2VJbmZvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvU2VhcmNoUGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9zZWFyY2gvc2VhcmNoX2NsaWVudCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1JlY29yZENsaWVudCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9jbGllbnREZXRhaWwvY2xpZW50U3RhdGlzdGljcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0NsaWVudERldGFpbChpbmRleCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NsaWVudERldGFpbC9jbGllbnREZXRhaWw/aW5kZXg9JyArIGluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNob3dGaWx0ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3dcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcihuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N0ZWF0ZVRpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRzKCdDcmVhdGlvblRpbWUgZGVzYycpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRzKCdJZCBkZXNjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50cygnTmFtZSBkZXNjJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbXBvcnRMZXZlbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENsaWVudHMoJ0ltcG9ydExldmVsIGRlc2MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5dO1xuICAgICAgICBhc3luYyBHZXRDbGllbnRzKHNvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGluZyA9IHNvcnQgPyBzb3J0IDogdGhpcy5zb3J0aW5nO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgSXNBbGw6dGhpcy5Jc0FsbCxcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgICAgIEtleVdvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZTogJycsXG4gICAgICAgICAgICAgICAgUmVnaW9uOiAnJyxcbiAgICAgICAgICAgICAgICBPcmlnaW46ICcnLFxuICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZDogJycsXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnk6ICcnLFxuICAgICAgICAgICAgICAgIENsaWVudFR5cGU6ICcnLFxuICAgICAgICAgICAgICAgIEltcG9ydExldmVsOiAnJyxcbiAgICAgICAgICAgICAgICBJbmR1c3RyeVR5cGU6ICcnLFxuICAgICAgICAgICAgICAgIElkOiAnJyxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiB0aGlzLnNvcnRpbmcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5xdWVyeVN0cmVhbSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGRhdGEuS2V5V29yZCA9IHRoaXMucXVlcnlTdHJlYW0uS2V5V29yZCB8fCAnJztcbiAgICAgICAgICAgICAgICBkYXRhLk5hbWUgPSB0aGlzLnF1ZXJ5U3RyZWFtLk5hbWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgZGF0YS5DcmVhdGlvblRpbWUgPSB0aGlzLnF1ZXJ5U3RyZWFtLkNyZWF0aW9uVGltZSB8fCAnJztcbiAgICAgICAgICAgICAgICBkYXRhLlJlZ2lvbiA9IHRoaXMucXVlcnlTdHJlYW0uUmVnaW9uIHx8ICcnO1xuICAgICAgICAgICAgICAgIGRhdGEuT3JnYW5pemF0aW9uVW5pdElkID0gdGhpcy5xdWVyeVN0cmVhbS5Pcmdhbml6YXRpb25Vbml0SWQgfHwgJyc7XG4gICAgICAgICAgICAgICAgZGF0YS5DYXRlZ29yeSA9IHRoaXMucXVlcnlTdHJlYW0uQ2F0ZWdvcnkgfHwgJyc7XG4gICAgICAgICAgICAgICAgZGF0YS5PcmlnaW4gPSB0aGlzLnF1ZXJ5U3RyZWFtLk9yaWdpbiB8fCAnJztcbiAgICAgICAgICAgICAgICBkYXRhLklkID0gdGhpcy5xdWVyeVN0cmVhbS5JZCB8fCAnJztcbiAgICAgICAgICAgICAgICBkYXRhLkNsaWVudFR5cGUgPSB0aGlzLnF1ZXJ5U3RyZWFtLkNsaWVudFR5cGUgfHwgJyc7XG4gICAgICAgICAgICAgICAgZGF0YS5JbXBvcnRMZXZlbCA9IHRoaXMucXVlcnlTdHJlYW0uSW1wb3J0TGV2ZWwgfHwgJyc7XG4gICAgICAgICAgICAgICAgZGF0YS5JbmR1c3RyeVR5cGUgPSB0aGlzLnF1ZXJ5U3RyZWFtLkluZHVzdHJ5VHlwZSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aVsOaNruWKoOi9veS4rScsXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGNsaWVudHNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnQvR2V0Q2xpZW50cycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IGNsaWVudHNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGNsaWVudHNEYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWVudHNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsaWVudHNEYXRhID0gY2xpZW50c0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjbGllbnRzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2xpZW50c0RhdGFbaW5kZXhdLmNsaWVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRzRGF0YVtpbmRleF1bJ2JnY29sb3InXSA9ICcjMDY5NDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50c0RhdGFbaW5kZXhdWydiZ2NvbG9yJ10gPSAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudHNEYXRhW2luZGV4XVsnYmdjb2xvciddID0gJyM1ZDczZmEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0UGVyc29uQW5udWFsQ291bnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudHNEYXRhID0gdGhpcy5jbGllbnRzRGF0YS5jb25jYXQoY2xpZW50c0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsaWVudHNEYXRhU3RvcmFnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnREZXRhaWxEYXRhczogdGhpcy5jbGllbnRzRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjbGllbnREYXRhcycsIGNsaWVudHNEYXRhU3RvcmFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRQZXJzb25Bbm51YWxDb3VudHMoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvYW5hbHl6ZVN0YXRpc3RpY3MvR2V0UGVyc29uQW5udWFsQ291bnRzJywgLy/ojrflj5Zzd2lwZXLmlbDmja5cbiAgICAgICAgICAgICAgICAncG9zdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuQW5udWFsQ291bnRzQ2xpZW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5LiL5ouJ5Yi35pawXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnRzRGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50U3RhdGlzdGljc0lzU2hvdyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLkdldENsaWVudHMoKTtcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkuIrmi4nliqDovb1cbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgLyAxMCA+IHRoaXMucGFnZU51bWJlciAmJiB0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldENsaWVudHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6L+e5o6l5aSx6LSl77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuSXNBbGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuSXNBbGw9b3B0aW9ucy5Jc0FsbD90cnVlOmZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5zb3J0aW5nPXRoaXMuSXNBbGw/J05hbWUgZGVzYyc6J0NyZWF0aW9uVGltZSBkZXNjJ1xuICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRzKCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGlzUmVmcmVzaChxdWVyeVN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbSA9IHF1ZXJ5U3RyZWFtXG4gICAgICAgICAgICB0aGlzLmNsaWVudHNEYXRhID0gW107XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRzKCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGlzRGF0YVJlZnJlc2goKXtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50c0RhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICB0aGlzLkdldENsaWVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuIl19