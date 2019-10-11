'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseManagement = function (_wepy$page) {
    _inherits(caseManagement, _wepy$page);

    function caseManagement() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, caseManagement);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseManagement.__proto__ || Object.getPrototypeOf(caseManagement)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            searchData: {},
            pageNumber: 1,
            totalCount: 0,
            caseManageData: [],
            avatarList: []
        }, _this.components = {}, _this.methods = {
            toSearchPage: function toSearchPage() {
                wx.navigateTo({ url: './search/search_caseManagement' });
            },
            toCaseDetail: function toCaseDetail(item) {
                wx.navigateTo({
                    url: '../mycase/caseDetail/casedetail?id=' + item.id + '&clientId=' + item.clientId
                });
            },
            operations: function operations(items, index) {
                var _this2 = this;

                var operations = items.operations.map(function (item) {
                    return item.text;
                });
                wx.showActionSheet({
                    itemList: operations, //按钮的文字数组，数组长度最大为6个,
                    //   itemColor: '#000000', //按钮的文字颜色,
                    success: function success(res) {
                        var className = items.operations[res.tapIndex].className;
                        switch (className) {
                            case 'Info':
                                wx.navigateTo({
                                    url: '../mycase/caseDetail/casedetail?id=' + items.id + '&clientId=' + items.clientId
                                });
                                break;
                            case "EditCaseApply":
                                wx.navigateTo({
                                    url: '../myRegister/register?id=' + items.id
                                });
                                break;
                            case "delete":
                                wx.showModal({
                                    title: '你确定吗？', //提示的标题,
                                    content: '是否确认删除信息？', //提示的内容,
                                    showCancel: true, //是否显示取消按钮,
                                    cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                                    cancelColor: '#000000', //取消按钮的文字颜色,
                                    confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                                    confirmColor: '#5d73fa', //确定按钮的文字颜色,
                                    success: function success(res) {
                                        if (res.confirm) {
                                            _this2.DeleteCase(items.id, index);
                                        } else if (res.cancel) {
                                            console.log('用户点击取消');
                                        }
                                    }
                                });
                                break;
                            default:
                                break;
                        }
                    }
                });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(caseManagement, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            this.caseManageData = [];
            this.pageNumber = 1;
            this.searchData = {};
            this.GetCaseManage();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.GetCaseManage();
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
    }, {
        key: 'GetCaseManage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var subData, resData, _caseManageData, caseManageData;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                subData = {
                                    sorting: "",
                                    pageNumber: this.pageNumber,
                                    pageSize: 10
                                };

                                if (Object.keys(this.searchData).length > 0) {
                                    subData = Object.assign(subData, this.searchData);
                                }
                                _context.next = 5;
                                return _ajax2.default.getData('/api/services/web/caseManage/GetCaseManage', 'post', subData);

                            case 5:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    this.totalCount = resData.data.result.totalCount;
                                    caseManageData = resData.data.result.items;

                                    this.getAavatar(caseManageData);
                                    (_caseManageData = this.caseManageData).push.apply(_caseManageData, _toConsumableArray(caseManageData));
                                }
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseManage() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseManage;
        }()
    }, {
        key: 'getAavatar',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(caseManageData) {
                var _avatarList;

                var avatarList, index_1, lawyerList, lawyerListData, index_2, http;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                avatarList = [];
                                _context2.t0 = regeneratorRuntime.keys(caseManageData);

                            case 2:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 22;
                                    break;
                                }

                                index_1 = _context2.t1.value;
                                lawyerList = caseManageData[index_1].lawyerList;
                                lawyerListData = [];
                                index_2 = 0;

                            case 7:
                                if (!(index_2 < lawyerList.length)) {
                                    _context2.next = 19;
                                    break;
                                }

                                if (!(index_2 < 6)) {
                                    _context2.next = 15;
                                    break;
                                }

                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + lawyerList[index_2].userId;
                                _context2.next = 12;
                                return _ajax2.default.getAavatar(http);

                            case 12:
                                lawyerListData[index_2] = _context2.sent;
                                _context2.next = 16;
                                break;

                            case 15:
                                return _context2.abrupt('break', 19);

                            case 16:
                                index_2++;
                                _context2.next = 7;
                                break;

                            case 19:
                                avatarList[index_1] = lawyerListData;
                                _context2.next = 2;
                                break;

                            case 22:
                                (_avatarList = this.avatarList).push.apply(_avatarList, avatarList);
                                this.$apply();

                            case 24:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getAavatar(_x) {
                return _ref3.apply(this, arguments);
            }

            return getAavatar;
        }()
        // 删除案件

    }, {
        key: 'DeleteCase',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, index) {
                var resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/case/DeleteCase', 'post', {
                                    id: id
                                });

                            case 3:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    this.caseManageData.splice(index, 1);
                                    this.avatarList.splice(index, 1);
                                    wx.showToast({
                                        title: '删除成功！', //提示的内容,
                                        icon: 'success', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                } else {
                                    console.log(resData);
                                    wx.showToast({
                                        title: resData.data.error.message, //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function DeleteCase(_x2, _x3) {
                return _ref4.apply(this, arguments);
            }

            return DeleteCase;
        }()
    }, {
        key: 'isRefresh',
        value: function isRefresh(searchData) {
            if (searchData) {
                this.searchData = searchData;
            }
            this.searchData = {};
            this.caseManageData = [];
            this.pageNumber = 1;
            this.GetCaseManage();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetCaseManage();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return caseManagement;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(caseManagement , 'pages/modules/caseManagement/caseManagement'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VNYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbImNhc2VNYW5hZ2VtZW50IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsImRhdGEiLCJzZWFyY2hEYXRhIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJjYXNlTWFuYWdlRGF0YSIsImF2YXRhckxpc3QiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInRvU2VhcmNoUGFnZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvQ2FzZURldGFpbCIsIml0ZW0iLCJpZCIsImNsaWVudElkIiwib3BlcmF0aW9ucyIsIml0ZW1zIiwiaW5kZXgiLCJtYXAiLCJ0ZXh0Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJzdWNjZXNzIiwiY2xhc3NOYW1lIiwicmVzIiwidGFwSW5kZXgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJjb25maXJtIiwiRGVsZXRlQ2FzZSIsImNhbmNlbCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiR2V0Q2FzZU1hbmFnZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkcGFyZW50IiwiZ2xvYmFsIiwibmV0V29ya1N0cmluZyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzaG93TG9hZGluZyIsInN1YkRhdGEiLCJzb3J0aW5nIiwicGFnZVNpemUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYXNzaWduIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsImdldEFhdmF0YXIiLCJwdXNoIiwiJGFwcGx5IiwiaW5kZXhfMSIsImxhd3llckxpc3QiLCJsYXd5ZXJMaXN0RGF0YSIsImluZGV4XzIiLCJodHRwIiwidXNlcklkIiwic3BsaWNlIiwiZXJyb3IiLCJtZXNzYWdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNqQkMsTSxHQUFTO0FBQ0xDLG1DQUF1QixJQURsQjtBQUVMQyxpQ0FBcUIsTUFGaEI7QUFHTEMsZ0NBQW9CLFNBSGY7QUFJTEMsbUNBQXVCO0FBSmxCLFMsUUFNVEMsSSxHQUFPO0FBQ0hDLHdCQUFXLEVBRFI7QUFFSEMsd0JBQVksQ0FGVDtBQUdIQyx3QkFBWSxDQUhUO0FBSUhDLDRCQUFnQixFQUpiO0FBS0hDLHdCQUFZO0FBTFQsUyxRQU9QQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVU7QUFDTkMsd0JBRE0sMEJBQ1E7QUFDVkMsbUJBQUdDLFVBQUgsQ0FBYyxFQUFFQyxLQUFLLGdDQUFQLEVBQWQ7QUFDSCxhQUhLO0FBSU5DLHdCQUpNLHdCQUlPQyxJQUpQLEVBSVk7QUFDYkosbUJBQUdDLFVBQUgsQ0FBYztBQUNQQyx5QkFBSyx3Q0FBd0NFLEtBQUtDLEVBQTdDLEdBQWtELFlBQWxELEdBQWlFRCxLQUFLRTtBQURwRSxpQkFBZDtBQUdKLGFBUks7QUFTTkMsc0JBVE0sc0JBU0tDLEtBVEwsRUFTWUMsS0FUWixFQVNtQjtBQUFBOztBQUNyQixvQkFBSUYsYUFBYUMsTUFBTUQsVUFBTixDQUFpQkcsR0FBakIsQ0FBcUIsVUFBQ04sSUFBRCxFQUFVO0FBQzVDLDJCQUFPQSxLQUFLTyxJQUFaO0FBQ0gsaUJBRmdCLENBQWpCO0FBR0FYLG1CQUFHWSxlQUFILENBQW1CO0FBQ2ZDLDhCQUFVTixVQURLLEVBQ087QUFDdEI7QUFDQU8sNkJBQVMsc0JBQU87QUFDWiw0QkFBSUMsWUFBWVAsTUFBTUQsVUFBTixDQUFpQlMsSUFBSUMsUUFB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IlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FzZU1hbmFnZW1lbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzZWFyY2hEYXRhOnt9LFxuICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgICAgICAgICBjYXNlTWFuYWdlRGF0YTogW10sXG4gICAgICAgICAgICBhdmF0YXJMaXN0OiBbXVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b1NlYXJjaFBhZ2UoKXtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9zZWFyY2gvc2VhcmNoX2Nhc2VNYW5hZ2VtZW50JyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0Nhc2VEZXRhaWwoaXRlbSl7XG4gICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbXljYXNlL2Nhc2VEZXRhaWwvY2FzZWRldGFpbD9pZD0nICsgaXRlbS5pZCArICcmY2xpZW50SWQ9JyArIGl0ZW0uY2xpZW50SWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlcmF0aW9ucyhpdGVtcywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IGl0ZW1zLm9wZXJhdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MaXN0OiBvcGVyYXRpb25zLCAvL+aMiemSrueahOaWh+Wtl+aVsOe7hO+8jOaVsOe7hOmVv+W6puacgOWkp+S4ujbkuKosXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaXRlbUNvbG9yOiAnIzAwMDAwMCcsIC8v5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGl0ZW1zLm9wZXJhdGlvbnNbcmVzLnRhcEluZGV4XS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0luZm8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uL215Y2FzZS9jYXNlRGV0YWlsL2Nhc2VkZXRhaWw/aWQ9JyArIGl0ZW1zLmlkICsgJyZjbGllbnRJZD0nICsgaXRlbXMuY2xpZW50SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFZGl0Q2FzZUFwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbXlSZWdpc3Rlci9yZWdpc3Rlcj9pZD0nICsgaXRlbXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L2g56Gu5a6a5ZCX77yfJywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5piv5ZCm56Gu6K6k5Yig6Zmk5L+h5oGv77yfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzAwMDAwMCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRGVsZXRlQ2FzZShpdGVtcy5pZCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7fTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgLy8g5LiL5ouJ5Yi35pawXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5jYXNlTWFuYWdlRGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YT17fTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZU1hbmFnZSgpO1xuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35pawXG4gICAgICAgIH1cbiAgICAgICAgLy8g5LiK5ouJ5Yqg6L29XG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC8gMTAgPiB0aGlzLnBhZ2VOdW1iZXIgJiYgdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRDYXNlTWFuYWdlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lus5piv5pyJ5bqV57q/55qE77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0Q2FzZU1hbmFnZSgpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN1YkRhdGE9e1xuICAgICAgICAgICAgICAgICAgICBzb3J0aW5nOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoPjApe1xuICAgICAgICAgICAgICAgIHN1YkRhdGEgPSBPYmplY3QuYXNzaWduKHN1YkRhdGEsIHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZU1hbmFnZS9HZXRDYXNlTWFuYWdlJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsIFxuICAgICAgICAgICAgICAgIHN1YkRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xuICAgICAgICAgICAgICAgIHZhciBjYXNlTWFuYWdlRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBYXZhdGFyKGNhc2VNYW5hZ2VEYXRhKVxuICAgICAgICAgICAgICAgIHRoaXMuY2FzZU1hbmFnZURhdGEucHVzaCguLi5jYXNlTWFuYWdlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldEFhdmF0YXIoY2FzZU1hbmFnZURhdGEpIHtcbiAgICAgICAgICAgIHZhciBhdmF0YXJMaXN0ID0gW11cbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4XzEgaW4gY2FzZU1hbmFnZURhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGF3eWVyTGlzdCA9IGNhc2VNYW5hZ2VEYXRhW2luZGV4XzFdLmxhd3llckxpc3Q7XG4gICAgICAgICAgICAgICAgdmFyIGxhd3llckxpc3REYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXhfMiA9IDA7IGluZGV4XzIgPCBsYXd5ZXJMaXN0Lmxlbmd0aDsgaW5kZXhfMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF8yIDwgNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgbGF3eWVyTGlzdFtpbmRleF8yXS51c2VySWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXd5ZXJMaXN0RGF0YVtpbmRleF8yXSA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF2YXRhckxpc3RbaW5kZXhfMV0gPSBsYXd5ZXJMaXN0RGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXZhdGFyTGlzdC5wdXNoKC4uLmF2YXRhckxpc3QpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDliKDpmaTmoYjku7ZcbiAgICAgICAgYXN5bmMgRGVsZXRlQ2FzZShpZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvRGVsZXRlQ2FzZScsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXNlTWFuYWdlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5Yqf77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSlcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGlzUmVmcmVzaChzZWFyY2hEYXRhKXtcbiAgICAgICAgICAgIGlmKHNlYXJjaERhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YT1zZWFyY2hEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhPXt9O1xuICAgICAgICAgICAgdGhpcy5jYXNlTWFuYWdlRGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZU1hbmFnZSgpOyAgXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5HZXRDYXNlTWFuYWdlKClcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge307XG4gICAgfVxuIl19