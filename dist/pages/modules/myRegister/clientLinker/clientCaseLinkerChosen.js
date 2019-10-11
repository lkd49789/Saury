'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../../utils/cofig/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientCaseLinkerChosen = function (_wepy$page) {
    _inherits(clientCaseLinkerChosen, _wepy$page);

    function clientCaseLinkerChosen() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientCaseLinkerChosen);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientCaseLinkerChosen.__proto__ || Object.getPrototypeOf(clientCaseLinkerChosen)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            subCaseInfoData: {},
            ClientId: '',
            clientListData: [],
            isClientCount: false
        }, _this.components = {}, _this.methods = {
            toClientCaseLinkerList: function toClientCaseLinkerList() {
                wx.navigateTo({
                    url: './clientCaseLinkerList?id=' + this.ClientId
                });
            },
            toclientLinkerDetail: function toclientLinkerDetail(id) {
                wx.navigateTo({
                    url: '../../myclient/clientDetail/itemDetail/clientLinkmanDetail/clientLinkmanDetail?id=' + id
                });
            },
            operator: function operator(index, id) {
                var _this2 = this;

                wx.showActionSheet({
                    itemList: ['编辑', '删除'],
                    success: function success(res) {
                        console.log(res.tapIndex);
                        switch (res.tapIndex) {
                            case 0:
                                wx.navigateTo({
                                    url: './createClientLinker?index=' + index
                                });
                                break;
                            case 1:
                                _this2.clientListData.splice(index, 1);
                                _this2.subCaseInfoData.CaseContactsList = _this2.subCaseInfoData.CaseContactsList.filter(function (item) {
                                    return item !== id;
                                });
                                wx.setStorageSync('CREATE_CLIENTLINKERLIST_DATA', _this2.clientListData);
                                break;
                            default:
                                break;
                        }
                        _this2.$apply();
                    },
                    fail: function fail(res) {
                        console.log(res.errMsg);
                    }
                });
            },
            toCreateClientLinker: function toCreateClientLinker() {
                wx.navigateTo({
                    url: './createClientLinker?id=' + this.ClientId
                });
            }
        }, _this.events = {}, _this.watch = {
            clientListData: function clientListData(data) {
                var CaseContactsList = [];
                for (var index in data) {
                    CaseContactsList[index] = data[index].id;
                }
                this.subCaseInfoData.CaseContactsList = CaseContactsList;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientCaseLinkerChosen, [{
        key: 'CreateOrUpdateCaseGeneralInfo',

        //案件基本信息提交
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/case/CreateOrUpdateCaseGeneralInfo', 'post', this.subCaseInfoData);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    wx.setStorageSync('CREATE_CASEINFO_DATA', this.subCaseInfoData);
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function CreateOrUpdateCaseGeneralInfo() {
                return _ref2.apply(this, arguments);
            }

            return CreateOrUpdateCaseGeneralInfo;
        }()
        // 获取客户头像

    }, {
        key: 'getClientAavatar',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var i, id, http, linkerPhotoData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.t0 = regeneratorRuntime.keys(this.clientListData);

                            case 1:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 11;
                                    break;
                                }

                                i = _context2.t1.value;
                                id = this.clientListData[i].id;
                                http = '/api/services/web/clientContacts/GetClientContactAvatar?id=' + id;
                                _context2.next = 7;
                                return _ajax2.default.getAavatar(http);

                            case 7:
                                linkerPhotoData = _context2.sent;

                                this.clientListData[i].avatar = linkerPhotoData;
                                _context2.next = 1;
                                break;

                            case 11:
                                wx.setStorage({
                                    key: 'CREATE_CLIENTLINKERLIST_DATA',
                                    data: this.clientListData
                                });
                                this.$apply();

                            case 13:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getClientAavatar() {
                return _ref3.apply(this, arguments);
            }

            return getClientAavatar;
        }()
        //获取客户联系人数量

    }, {
        key: 'GetClientContactsCount',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var data, resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    CaseId: "",
                                    ClientId: this.ClientId,
                                    pageNumber: 1,
                                    pageSize: 10,
                                    sorting: ""
                                };
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/common/GetClientContacts', 'post', data);

                            case 3:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    this.isClientCount = resData.data.result.totalCount !== 0 ? true : false;
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetClientContactsCount() {
                return _ref4.apply(this, arguments);
            }

            return GetClientContactsCount;
        }()
        // 获取判断缓存数据

    }, {
        key: 'getClientCacheData',
        value: function getClientCacheData() {
            var clientLinkerCacheDatas = wx.getStorageSync('CREATE_CLIENTLINKERLIST_DATA');
            if (clientLinkerCacheDatas.length !== 0) {
                this.clientListData = clientLinkerCacheDatas;
            }
            this.$apply();
        }
        //获取客户方本案联系人

    }, {
        key: 'GetCaseClientContacts',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
                var resData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseClientContacts', 'post', {
                                    id: id
                                });

                            case 2:
                                resData = _context4.sent;

                                if (resData.statusCode == 200) {
                                    this.clientListData = resData.data.result;
                                    this.getClientAavatar();
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function GetCaseClientContacts(_x) {
                return _ref5.apply(this, arguments);
            }

            return GetCaseClientContacts;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.ClientId = options.id || "";
            var create_caseinfo_data = wx.getStorageSync('CREATE_CASEINFO_DATA');
            this.subCaseInfoData = create_caseinfo_data;
            this.GetCaseClientContacts(create_caseinfo_data.Id);
            this.GetClientContactsCount();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.getClientCacheData();
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            this.CreateOrUpdateCaseGeneralInfo();
        }
    }]);

    return clientCaseLinkerChosen;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientCaseLinkerChosen , 'pages/modules/myRegister/clientLinker/clientCaseLinkerChosen'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudENhc2VMaW5rZXJDaG9zZW4uanMiXSwibmFtZXMiOlsiY2xpZW50Q2FzZUxpbmtlckNob3NlbiIsImRhdGEiLCJzdWJDYXNlSW5mb0RhdGEiLCJDbGllbnRJZCIsImNsaWVudExpc3REYXRhIiwiaXNDbGllbnRDb3VudCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwidG9DbGllbnRDYXNlTGlua2VyTGlzdCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvY2xpZW50TGlua2VyRGV0YWlsIiwiaWQiLCJvcGVyYXRvciIsImluZGV4Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInRhcEluZGV4Iiwic3BsaWNlIiwiQ2FzZUNvbnRhY3RzTGlzdCIsImZpbHRlciIsIml0ZW0iLCJzZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImZhaWwiLCJlcnJNc2ciLCJ0b0NyZWF0ZUNsaWVudExpbmtlciIsImV2ZW50cyIsIndhdGNoIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwic2hvd1RvYXN0IiwiZXJyb3IiLCJtZXNzYWdlIiwiaWNvbiIsImR1cmF0aW9uIiwiaSIsImh0dHAiLCJnZXRBYXZhdGFyIiwibGlua2VyUGhvdG9EYXRhIiwiYXZhdGFyIiwic2V0U3RvcmFnZSIsImtleSIsIkNhc2VJZCIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInNvcnRpbmciLCJyZXN1bHQiLCJ0b3RhbENvdW50IiwiY2xpZW50TGlua2VyQ2FjaGVEYXRhcyIsImdldFN0b3JhZ2VTeW5jIiwibGVuZ3RoIiwiZ2V0Q2xpZW50QWF2YXRhciIsIm9wdGlvbnMiLCJjcmVhdGVfY2FzZWluZm9fZGF0YSIsIkdldENhc2VDbGllbnRDb250YWN0cyIsIklkIiwiR2V0Q2xpZW50Q29udGFjdHNDb3VudCIsImdldENsaWVudENhY2hlRGF0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Q0FBN0I7QUFDQSxnQkFBSUQsdUJBQXVCRSxNQUF2QixLQUFrQyxDQUF0QyxFQUF5QztBQUNyQyxxQkFBS3pELGNBQUwsR0FBc0J1RCxzQkFBdEI7QUFDSDtBQUNELGlCQUFLL0IsTUFBTDtBQUNIO0FBQ0Q7Ozs7O2tHQUM0QmYsRTs7Ozs7Ozt1Q0FDTndCLGVBQUtDLE9BQUwsQ0FDZCw4Q0FEYyxFQUVkLE1BRmMsRUFHZDtBQUNJekI7QUFESixpQ0FIYyxDOzs7QUFBZDBCLHVDOztBQU9KLG9DQUFHQSxRQUFRQyxVQUFSLElBQW9CLEdBQXZCLEVBQTJCO0FBQ3ZCLHlDQUFLcEMsY0FBTCxHQUFvQm1DLFFBQVF0QyxJQUFSLENBQWF3RCxNQUFqQztBQUNBLHlDQUFLSyxnQkFBTDtBQUNBLHlDQUFLbEMsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUVtQyxPLEVBQVM7QUFDWixpQkFBSzVELFFBQUwsR0FBZ0I0RCxRQUFRbEQsRUFBUixJQUFjLEVBQTlCO0FBQ0EsZ0JBQUltRCx1QkFBcUJ2RCxHQUFHbUQsY0FBSCxDQUFrQixzQkFBbEIsQ0FBekI7QUFDQSxpQkFBSzFELGVBQUwsR0FBcUI4RCxvQkFBckI7QUFDQSxpQkFBS0MscUJBQUwsQ0FBMkJELHFCQUFxQkUsRUFBaEQ7QUFDQSxpQkFBS0Msc0JBQUw7QUFDSDs7O2lDQUNRO0FBQ0wsaUJBQUtDLGtCQUFMO0FBQ0g7OzttQ0FDUztBQUNOLGlCQUFLQyw2QkFBTDtBQUNIOzs7O0VBM0orQ0MsZUFBS0MsSTs7a0JBQXBDdkUsc0IiLCJmaWxlIjoiY2xpZW50Q2FzZUxpbmtlckNob3Nlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBteURpc3RpbmN0IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcydcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjbGllbnRDYXNlTGlua2VyQ2hvc2VuIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN1YkNhc2VJbmZvRGF0YTp7fSxcbiAgICAgICAgICAgIENsaWVudElkOiAnJyxcbiAgICAgICAgICAgIGNsaWVudExpc3REYXRhOiBbXSxcbiAgICAgICAgICAgIGlzQ2xpZW50Q291bnQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b0NsaWVudENhc2VMaW5rZXJMaXN0KCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NsaWVudENhc2VMaW5rZXJMaXN0P2lkPScgKyB0aGlzLkNsaWVudElkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9jbGllbnRMaW5rZXJEZXRhaWwoaWQpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vLi4vbXljbGllbnQvY2xpZW50RGV0YWlsL2l0ZW1EZXRhaWwvY2xpZW50TGlua21hbkRldGFpbC9jbGllbnRMaW5rbWFuRGV0YWlsP2lkPScgKyBpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZXJhdG9yKGluZGV4LGlkKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3Q6IFsn57yW6L6RJywgJ+WIoOmZpCddLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFwSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0ZUNsaWVudExpbmtlcj9pbmRleD0nICsgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRMaXN0RGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlSW5mb0RhdGEuQ2FzZUNvbnRhY3RzTGlzdD10aGlzLnN1YkNhc2VJbmZvRGF0YS5DYXNlQ29udGFjdHNMaXN0LmZpbHRlcigoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0hPT1pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NMSUVOVExJTktFUkxJU1RfREFUQScsIHRoaXMuY2xpZW50TGlzdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvQ3JlYXRlQ2xpZW50TGlua2VyKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0ZUNsaWVudExpbmtlcj9pZD0nICsgdGhpcy5DbGllbnRJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIGNsaWVudExpc3REYXRhKGRhdGEpe1xuICAgICAgICAgICAgICAgIHZhciBDYXNlQ29udGFjdHNMaXN0PVtdXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgQ2FzZUNvbnRhY3RzTGlzdFtpbmRleF09ZGF0YVtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3ViQ2FzZUluZm9EYXRhLkNhc2VDb250YWN0c0xpc3Q9Q2FzZUNvbnRhY3RzTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgIC8v5qGI5Lu25Z+65pys5L+h5oGv5o+Q5LqkXG4gICAgICAgIGFzeW5jIENyZWF0ZU9yVXBkYXRlQ2FzZUdlbmVyYWxJbmZvKCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9DcmVhdGVPclVwZGF0ZUNhc2VHZW5lcmFsSW5mbycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIHRoaXMuc3ViQ2FzZUluZm9EYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ0FTRUlORk9fREFUQScsdGhpcy5zdWJDYXNlSW5mb0RhdGEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W5a6i5oi35aS05YOPXG4gICAgICAgIGFzeW5jIGdldENsaWVudEFhdmF0YXIoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuY2xpZW50TGlzdERhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmNsaWVudExpc3REYXRhW2ldLmlkO1xuICAgICAgICAgICAgICAgIHZhciBodHRwID1cbiAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NsaWVudENvbnRhY3RzL0dldENsaWVudENvbnRhY3RBdmF0YXI/aWQ9JyArIGlkO1xuICAgICAgICAgICAgICAgIHZhciBsaW5rZXJQaG90b0RhdGEgPSBhd2FpdCBhamF4LmdldEFhdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50TGlzdERhdGFbaV0uYXZhdGFyID0gbGlua2VyUGhvdG9EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAga2V5OiAnQ1JFQVRFX0NMSUVOVExJTktFUkxJU1RfREFUQScsXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5jbGllbnRMaXN0RGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v6I635Y+W5a6i5oi36IGU57O75Lq65pWw6YePXG4gICAgICAgIGFzeW5jIEdldENsaWVudENvbnRhY3RzQ291bnQoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBDYXNlSWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgQ2xpZW50SWQ6IHRoaXMuQ2xpZW50SWQsXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgc29ydGluZzogXCJcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0Q2xpZW50Q29udGFjdHMnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGllbnRDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudCAhPT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOiOt+WPluWIpOaWree8k+WtmOaVsOaNrlxuICAgICAgICBnZXRDbGllbnRDYWNoZURhdGEoKSB7XG4gICAgICAgICAgICB2YXIgY2xpZW50TGlua2VyQ2FjaGVEYXRhcyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ0xJRU5UTElOS0VSTElTVF9EQVRBJyk7XG4gICAgICAgICAgICBpZiAoY2xpZW50TGlua2VyQ2FjaGVEYXRhcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudExpc3REYXRhID0gY2xpZW50TGlua2VyQ2FjaGVEYXRhcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5blrqLmiLfmlrnmnKzmoYjogZTns7vkurpcbiAgICAgICAgYXN5bmMgR2V0Q2FzZUNsaWVudENvbnRhY3RzKGlkKXtcbiAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlQ2xpZW50Q29udGFjdHMnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50TGlzdERhdGE9cmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENsaWVudEFhdmF0YXIoKVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50SWQgPSBvcHRpb25zLmlkIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgY3JlYXRlX2Nhc2VpbmZvX2RhdGE9d3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DQVNFSU5GT19EQVRBJyk7XG4gICAgICAgICAgICB0aGlzLnN1YkNhc2VJbmZvRGF0YT1jcmVhdGVfY2FzZWluZm9fZGF0YTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUNsaWVudENvbnRhY3RzKGNyZWF0ZV9jYXNlaW5mb19kYXRhLklkKVxuICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRDb250YWN0c0NvdW50KCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50Q2FjaGVEYXRhKCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uVW5sb2FkKCl7XG4gICAgICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlQ2FzZUdlbmVyYWxJbmZvKCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=