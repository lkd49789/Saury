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

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            clientId: '',
            clientData: {},
            contactsListData: [],
            // CaseManageData:[],
            CaseManageTotalCount: 0,
            RecordsDataCount: 0,
            RecordsDate: {}
        }, _this.methods = {
            toClientBaseInfo: function toClientBaseInfo() {
                wx.navigateTo({
                    url: '../clientDetail/itemDetail/clientBaseInfo'
                });
            },
            toClientLinkman: function toClientLinkman() {
                wx.navigateTo({
                    url: '../clientDetail/itemDetail/clientLinkman?id=' + this.clientId
                });
            },
            toClientCaseMange: function toClientCaseMange() {
                wx.navigateTo({
                    url: '../clientDetail/itemDetail/clientCaseMange?id=' + this.clientId
                });
            },
            toRecordsList: function toRecordsList() {
                wx.navigateTo({
                    url: '../clientDetail/itemDetail/recordsList'
                });
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'GetClientContactsList',

        //获取客户联系人；
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, ContactsListData, index, http, contactAvatar, clientData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    ClientId: this.clientId,
                                    pageNumber: 1,
                                    pageSize: 10
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/clientContacts/GetClientContactsList', 'post', data);

                            case 3:
                                ContactsListData = _context.sent;

                                if (!(ContactsListData.statusCode == 200 && ContactsListData.data.result.items.length !== 0)) {
                                    _context.next = 23;
                                    break;
                                }

                                ContactsListData = ContactsListData.data.result.items;

                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context.t0 = regeneratorRuntime.keys(ContactsListData);

                            case 8:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 18;
                                    break;
                                }

                                index = _context.t1.value;
                                http = '/api/services/web/clientContacts/GetClientContactAvatar?id=' + ContactsListData[index].id;
                                _context.next = 13;
                                return _ajax2.default.getUserAvatar(http);

                            case 13:
                                contactAvatar = _context.sent;

                                if (contactAvatar.statusCode == 200) {
                                    ContactsListData[index].avatar = contactAvatar.tempFilePath;
                                }
                                this.$apply();
                                _context.next = 8;
                                break;

                            case 18:
                                this.contactsListData = ContactsListData;
                                clientData = wx.getStorageSync('clientData');

                                clientData['ContactsListData'] = ContactsListData;
                                wx.setStorageSync('clientData', clientData);
                                this.$apply();

                            case 23:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClientContactsList() {
                return _ref2.apply(this, arguments);
            }

            return GetClientContactsList;
        }()
        //获取关联案件

    }, {
        key: 'GetCaseManage',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var data, CaseManageData, clientData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = {
                                    ClientId: this.clientId,
                                    pageNumber: 1,
                                    pageSize: 10
                                };
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseManage/GetCaseManage', 'post', data);

                            case 3:
                                CaseManageData = _context2.sent;

                                if (CaseManageData.statusCode == 200 && CaseManageData.data.result.items.length !== 0) {
                                    this.CaseManageTotalCount = CaseManageData.data.result.totalCount;
                                    clientData = wx.getStorageSync('clientDatas');

                                    clientData['CaseManageData'] = CaseManageData.data.result;
                                    wx.setStorageSync('clientDatas', clientData);
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetCaseManage() {
                return _ref3.apply(this, arguments);
            }

            return GetCaseManage;
        }()
        //获取拜访记录

    }, {
        key: 'GetVisitRecords',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var data, VisitRecordsDatas, RecordsDate, RecordsDatas, index, clientData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    ClientId: this.clientId,
                                    pageNumber: 1,
                                    pageSize: 10
                                };
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/clientVisitServiceRecords/GetVisitRecords', 'post', data);

                            case 3:
                                VisitRecordsDatas = _context3.sent;

                                if (VisitRecordsDatas.statusCode == 200 && VisitRecordsDatas.data.result.items.length !== 0) {
                                    this.RecordsDataCount = VisitRecordsDatas.data.result.totalCount;
                                    RecordsDate = {};

                                    RecordsDate['startDate'] = VisitRecordsDatas.data.result.items[0].startDateText.replace(/-/g, '/');
                                    RecordsDate['endDate'] = VisitRecordsDatas.data.result.items[0].endDateText.replace(/-/g, '/');
                                    this.RecordsDate = RecordsDate;
                                    RecordsDatas = VisitRecordsDatas.data.result;

                                    for (index in RecordsDatas.items) {
                                        RecordsDatas.items[index].startDateText = RecordsDatas.items[index].startDateText.replace(/-/g, '/');
                                        RecordsDatas.items[index].startDateText = RecordsDatas.items[index].startDateText.replace(/-/g, '/');
                                    }
                                    clientData = wx.getStorageSync('clientData');

                                    clientData['RecordsDatas'] = RecordsDatas;
                                    wx.setStorageSync('clientData', clientData);
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetVisitRecords() {
                return _ref4.apply(this, arguments);
            }

            return GetVisitRecords;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.clientData = wx.getStorageSync('clientDatas').clientDetailDatas[options.index];
            this.clientId = wx.getStorageSync('clientDatas').clientDetailDatas[options.index].id;
            var clientData = {
                clientBaseInfoData: this.clientData
            };
            wx.setStorageSync('clientData', clientData);
            this.GetClientContactsList();
            this.GetCaseManage();
            this.GetVisitRecords();
            this.$apply();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myclient/clientDetail/clientDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudERldGFpbC5qcyJdLCJuYW1lcyI6WyJjbGllbnREZXRhaWwiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwiZGF0YSIsImNsaWVudElkIiwiY2xpZW50RGF0YSIsImNvbnRhY3RzTGlzdERhdGEiLCJDYXNlTWFuYWdlVG90YWxDb3VudCIsIlJlY29yZHNEYXRhQ291bnQiLCJSZWNvcmRzRGF0ZSIsIm1ldGhvZHMiLCJ0b0NsaWVudEJhc2VJbmZvIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9DbGllbnRMaW5rbWFuIiwidG9DbGllbnRDYXNlTWFuZ2UiLCJ0b1JlY29yZHNMaXN0IiwibWl4aW5zIiwiQ2xpZW50SWQiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJhamF4IiwiZ2V0RGF0YSIsIkNvbnRhY3RzTGlzdERhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiaXRlbXMiLCJsZW5ndGgiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInN1Y2Nlc3MiLCJpbmRleCIsImh0dHAiLCJpZCIsImdldFVzZXJBdmF0YXIiLCJjb250YWN0QXZhdGFyIiwiYXZhdGFyIiwidGVtcEZpbGVQYXRoIiwiJGFwcGx5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsIkNhc2VNYW5hZ2VEYXRhIiwidG90YWxDb3VudCIsIlZpc2l0UmVjb3Jkc0RhdGFzIiwic3RhcnREYXRlVGV4dCIsInJlcGxhY2UiLCJlbmREYXRlVGV4dCIsIlJlY29yZHNEYXRhcyIsIm9wdGlvbnMiLCJjbGllbnREZXRhaWxEYXRhcyIsImNsaWVudEJhc2VJbmZvRGF0YSIsIkdldENsaWVudENvbnRhY3RzTGlzdCIsIkdldENhc2VNYW5hZ2UiLCJHZXRWaXNpdFJlY29yZHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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Q0EsaUJBQUtDLGFBQUw7QUFDQSxpQkFBS0MsZUFBTDtBQUNBLGlCQUFLZixNQUFMO0FBQ0g7Ozs7RUFySXFDZ0IsZUFBS0MsSTs7a0JBQTFCNUQsWSIsImZpbGUiOiJjbGllbnREZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xuICAgIGltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2VcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNsaWVudElkOicnLFxuICAgICAgICAgICAgY2xpZW50RGF0YTp7fSxcbiAgICAgICAgICAgIGNvbnRhY3RzTGlzdERhdGE6W10sXG4gICAgICAgICAgICAvLyBDYXNlTWFuYWdlRGF0YTpbXSxcbiAgICAgICAgICAgIENhc2VNYW5hZ2VUb3RhbENvdW50OjAsXG4gICAgICAgICAgICBSZWNvcmRzRGF0YUNvdW50OjAsXG4gICAgICAgICAgICBSZWNvcmRzRGF0ZTp7fVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG9DbGllbnRCYXNlSW5mbygpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9jbGllbnREZXRhaWwvaXRlbURldGFpbC9jbGllbnRCYXNlSW5mbydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0NsaWVudExpbmttYW4oKXtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vY2xpZW50RGV0YWlsL2l0ZW1EZXRhaWwvY2xpZW50TGlua21hbj9pZD0nK3RoaXMuY2xpZW50SWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0NsaWVudENhc2VNYW5nZSgpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9jbGllbnREZXRhaWwvaXRlbURldGFpbC9jbGllbnRDYXNlTWFuZ2U/aWQ9Jyt0aGlzLmNsaWVudElkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9SZWNvcmRzTGlzdCgpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9jbGllbnREZXRhaWwvaXRlbURldGFpbC9yZWNvcmRzTGlzdCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbWl4aW5zID0gW21peGlucyBdO1xuICAgICAgICAvL+iOt+WPluWuouaIt+iBlOezu+S6uu+8m1xuICAgICAgICBhc3luYyBHZXRDbGllbnRDb250YWN0c0xpc3QoKXtcbiAgICAgICAgICAgIHZhciBkYXRhPXtcbiAgICAgICAgICAgICAgICBDbGllbnRJZDp0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIENvbnRhY3RzTGlzdERhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRDb250YWN0cy9HZXRDbGllbnRDb250YWN0c0xpc3QnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihDb250YWN0c0xpc3REYXRhLnN0YXR1c0NvZGU9PTIwMCYmQ29udGFjdHNMaXN0RGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGghPT0wKXtcbiAgICAgICAgICAgICAgICB2YXIgQ29udGFjdHNMaXN0RGF0YT1Db250YWN0c0xpc3REYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIENvbnRhY3RzTGlzdERhdGEpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cD0nL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50Q29udGFjdHMvR2V0Q2xpZW50Q29udGFjdEF2YXRhcj9pZD0nK0NvbnRhY3RzTGlzdERhdGFbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdEF2YXRhcj1hd2FpdCBhamF4LmdldFVzZXJBdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRhY3RBdmF0YXIuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RzTGlzdERhdGFbaW5kZXhdLmF2YXRhcj1jb250YWN0QXZhdGFyLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RzTGlzdERhdGE9Q29udGFjdHNMaXN0RGF0YTtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdjbGllbnREYXRhJyk7XG4gICAgICAgICAgICAgICAgY2xpZW50RGF0YVsnQ29udGFjdHNMaXN0RGF0YSddPUNvbnRhY3RzTGlzdERhdGE7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2NsaWVudERhdGEnLCBjbGllbnREYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICAvL+iOt+WPluWFs+iBlOahiOS7tlxuICAgICAgICBhc3luYyBHZXRDYXNlTWFuYWdlKCl7XG4gICAgICAgICAgICAgdmFyIGRhdGE9e1xuICAgICAgICAgICAgICAgIENsaWVudElkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgQ2FzZU1hbmFnZURhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlTWFuYWdlL0dldENhc2VNYW5hZ2UnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihDYXNlTWFuYWdlRGF0YS5zdGF0dXNDb2RlPT0yMDAmJkNhc2VNYW5hZ2VEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FzZU1hbmFnZVRvdGFsQ291bnQ9Q2FzZU1hbmFnZURhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50RGF0YT13eC5nZXRTdG9yYWdlU3luYygnY2xpZW50RGF0YXMnKTtcbiAgICAgICAgICAgICAgICBjbGllbnREYXRhWydDYXNlTWFuYWdlRGF0YSddPUNhc2VNYW5hZ2VEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjbGllbnREYXRhcycsIGNsaWVudERhdGEpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5bmi5zorr/orrDlvZVcbiAgICAgICAgYXN5bmMgIEdldFZpc2l0UmVjb3Jkcygpe1xuICAgICAgICAgICAgdmFyIGRhdGE9e1xuICAgICAgICAgICAgICAgIENsaWVudElkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgVmlzaXRSZWNvcmRzRGF0YXM9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRWaXNpdFNlcnZpY2VSZWNvcmRzL0dldFZpc2l0UmVjb3JkcycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKFZpc2l0UmVjb3Jkc0RhdGFzLnN0YXR1c0NvZGU9PTIwMCYmVmlzaXRSZWNvcmRzRGF0YXMuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgdGhpcy5SZWNvcmRzRGF0YUNvdW50PVZpc2l0UmVjb3Jkc0RhdGFzLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgdmFyICBSZWNvcmRzRGF0ZT17fTtcbiAgICAgICAgICAgICAgICBSZWNvcmRzRGF0ZVsnc3RhcnREYXRlJ109VmlzaXRSZWNvcmRzRGF0YXMuZGF0YS5yZXN1bHQuaXRlbXNbMF0uc3RhcnREYXRlVGV4dC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgICAgICAgICAgUmVjb3Jkc0RhdGVbJ2VuZERhdGUnXT1WaXNpdFJlY29yZHNEYXRhcy5kYXRhLnJlc3VsdC5pdGVtc1swXS5lbmREYXRlVGV4dC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5SZWNvcmRzRGF0ZT1SZWNvcmRzRGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgIFJlY29yZHNEYXRhcz1WaXNpdFJlY29yZHNEYXRhcy5kYXRhLnJlc3VsdFxuICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggaW4gUmVjb3Jkc0RhdGFzLml0ZW1zKXtcbiAgICAgICAgICAgICAgICAgICAgUmVjb3Jkc0RhdGFzLml0ZW1zW2luZGV4XS5zdGFydERhdGVUZXh0PVJlY29yZHNEYXRhcy5pdGVtc1tpbmRleF0uc3RhcnREYXRlVGV4dC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgICAgICAgICAgICAgIFJlY29yZHNEYXRhcy5pdGVtc1tpbmRleF0uc3RhcnREYXRlVGV4dD1SZWNvcmRzRGF0YXMuaXRlbXNbaW5kZXhdLnN0YXJ0RGF0ZVRleHQucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdjbGllbnREYXRhJyk7XG4gICAgICAgICAgICAgICAgY2xpZW50RGF0YVsnUmVjb3Jkc0RhdGFzJ109UmVjb3Jkc0RhdGFzO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjbGllbnREYXRhJywgY2xpZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5jbGllbnREYXRhPXd4LmdldFN0b3JhZ2VTeW5jKCdjbGllbnREYXRhcycpLmNsaWVudERldGFpbERhdGFzW29wdGlvbnMuaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5jbGllbnRJZD13eC5nZXRTdG9yYWdlU3luYygnY2xpZW50RGF0YXMnKS5jbGllbnREZXRhaWxEYXRhc1tvcHRpb25zLmluZGV4XS5pZDtcbiAgICAgICAgICAgIHZhciBjbGllbnREYXRhPXtcbiAgICAgICAgICAgICAgICBjbGllbnRCYXNlSW5mb0RhdGE6dGhpcy5jbGllbnREYXRhXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2NsaWVudERhdGEnLCBjbGllbnREYXRhKTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50Q29udGFjdHNMaXN0KCk7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VNYW5hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0VmlzaXRSZWNvcmRzKCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgfVxuIl19