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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientCaseLinkerList = function (_wepy$page) {
    _inherits(clientCaseLinkerList, _wepy$page);

    function clientCaseLinkerList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientCaseLinkerList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientCaseLinkerList.__proto__ || Object.getPrototypeOf(clientCaseLinkerList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            ClientId: '',
            totalCount: 0,
            pageNumber: 1,
            ClientContacts_data: [],
            submitData: [],
            curTotalCount: 0,
            selectedCount: 0
        }, _this.components = {}, _this.methods = {
            subBtn: function subBtn() {
                var create_clientlinkerlist_data = wx.getStorageSync('CREATE_CLIENTLINKERLIST_DATA');
                for (var index in this.ClientContacts_data) {
                    if (this.ClientContacts_data[index].checked) {
                        this.submitData.push(this.ClientContacts_data[index]);
                    }
                }
                if (create_clientlinkerlist_data.length !== 0) {
                    var result = (0, _api.myObjDistinct)(this.submitData, create_clientlinkerlist_data, 'id');
                    create_clientlinkerlist_data.push.apply(create_clientlinkerlist_data, _toConsumableArray(result));
                } else {
                    create_clientlinkerlist_data.push.apply(create_clientlinkerlist_data, _toConsumableArray(this.submitData));
                }
                wx.setStorage({
                    key: 'CREATE_CLIENTLINKERLIST_DATA',
                    data: create_clientlinkerlist_data,
                    success: function success() {
                        wx.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                });
            },
            allselected: function allselected() {
                this.selectedCount = this.curTotalCount;
                for (var index in this.ClientContacts_data) {
                    this.ClientContacts_data[index].checked = true;
                }
                this.$apply();
            },
            checkboxChange: function checkboxChange(index) {
                console.log(index);
                if (this.ClientContacts_data[index].checked) {
                    this.ClientContacts_data[index].checked = false;
                    this.selectedCount -= 1;
                } else {
                    this.ClientContacts_data[index].checked = true;
                    this.selectedCount += 1;
                }
                this.$apply();
            },
            toclientLinkerDetail: function toclientLinkerDetail(id) {
                wx.setStorage({
                    key: 'CREATE_CLIENTCONTACTS_DATA',
                    data: this.ClientContacts_data,
                    success: function success() {
                        wx.navigateTo({
                            url: '../../myclient/clientDetail/itemDetail/clientLinkmanDetail/clientLinkmanDetail?id=' + id
                        });
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientCaseLinkerList, [{
        key: 'onReachBottom',

        // 上拉加载
        value: function onReachBottom() {
            if (this.pageNumber < this.totalCount / 10) {
                this.pageNumber += 1;
                this.GetClientContacts();
                _wepy2.default.showToast({
                    title: '加载更多...',
                    icon: 'loading',
                    mask: true
                });
            } else {
                _wepy2.default.showToast({
                    title: '没有更多...',
                    icon: 'none',
                    mask: true,
                    duration: 1000
                });
            }
        }
        //下拉刷新

    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.ClientContacts_data = [];
            this.pageNumber = 1;
            this.GetClientContacts();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
            this.$apply();
        }
        // async getClientAavatar() {
        //     for (var i in this.ClientContacts_data) {
        //         var id = this.ClientContacts_data[i].id;
        //         var http =
        //             '/api/services/web/clientContacts/GetClientContactAvatar?id=' + id;
        //         var linkerPhotoData = await ajax.getAavatar(http);
        //         this.ClientContacts_data[i]['avatar'] = linkerPhotoData;
        //     }
        //     this.$apply();
        // }

    }, {
        key: 'GetClientContacts',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, _ClientContacts_data, ClientContacts, i, id, http, linkerPhotoData;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    CaseId: "",
                                    ClientId: this.ClientId,
                                    pageNumber: this.pageNumber,
                                    pageSize: 10,
                                    sorting: ""
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/common/GetClientContacts', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context.next = 21;
                                    break;
                                }

                                ClientContacts = resData.data.result.items;

                                this.totalCount = resData.data.result.totalCount;
                                this.curTotalCount += ClientContacts.length;
                                _context.t0 = regeneratorRuntime.keys(ClientContacts);

                            case 9:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 20;
                                    break;
                                }

                                i = _context.t1.value;
                                id = ClientContacts[i].id;
                                http = '/api/services/web/clientContacts/GetClientContactAvatar?id=' + id;
                                _context.next = 15;
                                return _ajax2.default.getAavatar(http);

                            case 15:
                                linkerPhotoData = _context.sent;

                                ClientContacts[i]['avatar'] = linkerPhotoData;
                                ClientContacts[i]['checked'] = false;
                                _context.next = 9;
                                break;

                            case 20:
                                (_ClientContacts_data = this.ClientContacts_data).push.apply(_ClientContacts_data, _toConsumableArray(ClientContacts));

                            case 21:
                                this.$apply();

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClientContacts() {
                return _ref2.apply(this, arguments);
            }

            return GetClientContacts;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.ClientId = options.id;
            this.GetClientContacts();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return clientCaseLinkerList;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientCaseLinkerList , 'pages/modules/myRegister/clientLinker/clientCaseLinkerList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudENhc2VMaW5rZXJMaXN0LmpzIl0sIm5hbWVzIjpbImNsaWVudENhc2VMaW5rZXJMaXN0IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsImRhdGEiLCJDbGllbnRJZCIsInRvdGFsQ291bnQiLCJwYWdlTnVtYmVyIiwiQ2xpZW50Q29udGFjdHNfZGF0YSIsInN1Ym1pdERhdGEiLCJjdXJUb3RhbENvdW50Iiwic2VsZWN0ZWRDb3VudCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwic3ViQnRuIiwiY3JlYXRlX2NsaWVudGxpbmtlcmxpc3RfZGF0YSIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJpbmRleCIsImNoZWNrZWQiLCJwdXNoIiwibGVuZ3RoIiwicmVzdWx0Iiwic2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImFsbHNlbGVjdGVkIiwiJGFwcGx5IiwiY2hlY2tib3hDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwidG9jbGllbnRMaW5rZXJEZXRhaWwiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJHZXRDbGllbnRDb250YWN0cyIsIndlcHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiZHVyYXRpb24iLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiQ2FzZUlkIiwicGFnZVNpemUiLCJzb3J0aW5nIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsIkNsaWVudENvbnRhY3RzIiwiaXRlbXMiLCJpIiwiaHR0cCIsImdldEFhdmF0YXIiLCJsaW5rZXJQaG90b0RhdGEiLCJvcHRpb25zIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7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VUFBTCxDQUFnQkQsSUFBaEIsQzs7O0FBQXhCRSwrQzs7QUFDSkwsK0NBQWVFLENBQWYsRUFBa0IsUUFBbEIsSUFBOEJHLGVBQTlCO0FBQ0FMLCtDQUFlRSxDQUFmLEVBQWtCLFNBQWxCLElBQStCLEtBQS9COzs7OztBQUVKLDZEQUFLL0MsbUJBQUwsRUFBeUJZLElBQXpCLGdEQUFpQ2lDLGNBQWpDOzs7QUFFSixxQ0FBS3hCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFFRzhCLE8sRUFBUztBQUNaLGlCQUFLdEQsUUFBTCxHQUFnQnNELFFBQVF6QixFQUF4QjtBQUNBLGlCQUFLRyxpQkFBTDtBQUNIOzs7aUNBQ1EsQ0FBRTs7OztFQTlJbUNDLGVBQUtzQixJOztrQkFBbEM5RCxvQiIsImZpbGUiOiJjbGllbnRDYXNlTGlua2VyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIG15T2JqRGlzdGluY3RcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50Q2FzZUxpbmtlckxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJvdHRvbTogJyNmNGY0ZjQnXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBDbGllbnRJZDogJycsXG4gICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcbiAgICAgICAgICAgIENsaWVudENvbnRhY3RzX2RhdGE6IFtdLFxuICAgICAgICAgICAgc3VibWl0RGF0YTogW10sXG4gICAgICAgICAgICBjdXJUb3RhbENvdW50OiAwLFxuICAgICAgICAgICAgc2VsZWN0ZWRDb3VudDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc3ViQnRuKCkge1xuICAgICAgICAgICAgICAgIHZhciBjcmVhdGVfY2xpZW50bGlua2VybGlzdF9kYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DTElFTlRMSU5LRVJMSVNUX0RBVEEnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLkNsaWVudENvbnRhY3RzX2RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ2xpZW50Q29udGFjdHNfZGF0YVtpbmRleF0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLnB1c2godGhpcy5DbGllbnRDb250YWN0c19kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZV9jbGllbnRsaW5rZXJsaXN0X2RhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBteU9iakRpc3RpbmN0KHRoaXMuc3VibWl0RGF0YSwgY3JlYXRlX2NsaWVudGxpbmtlcmxpc3RfZGF0YSwgJ2lkJylcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlX2NsaWVudGxpbmtlcmxpc3RfZGF0YS5wdXNoKC4uLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlX2NsaWVudGxpbmtlcmxpc3RfZGF0YS5wdXNoKC4uLnRoaXMuc3VibWl0RGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0NSRUFURV9DTElFTlRMSU5LRVJMSVNUX0RBVEEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjcmVhdGVfY2xpZW50bGlua2VybGlzdF9kYXRhLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxsc2VsZWN0ZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50ID0gdGhpcy5jdXJUb3RhbENvdW50O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuQ2xpZW50Q29udGFjdHNfZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudENvbnRhY3RzX2RhdGFbaW5kZXhdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94Q2hhbmdlKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLkNsaWVudENvbnRhY3RzX2RhdGFbaW5kZXhdLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGllbnRDb250YWN0c19kYXRhW2luZGV4XS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGllbnRDb250YWN0c19kYXRhW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9jbGllbnRMaW5rZXJEZXRhaWwoaWQpIHtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQ1JFQVRFX0NMSUVOVENPTlRBQ1RTX0RBVEEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLkNsaWVudENvbnRhY3RzX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uLy4uL215Y2xpZW50L2NsaWVudERldGFpbC9pdGVtRGV0YWlsL2NsaWVudExpbmttYW5EZXRhaWwvY2xpZW50TGlua21hbkRldGFpbD9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIOS4iuaLieWKoOi9vVxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZU51bWJlciA8IHRoaXMudG90YWxDb3VudCAvIDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRDb250YWN0cygpO1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3mm7TlpJouLi4nLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieabtOWkmi4uLicsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+S4i+aLieWIt+aWsFxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50Q29udGFjdHNfZGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50Q29udGFjdHMoKTtcbiAgICAgICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpOyAvL+WujOaIkOWBnOatouWKoOi9vVxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpOyAvL+WBnOatouS4i+aLieWIt+aWsFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhc3luYyBnZXRDbGllbnRBYXZhdGFyKCkge1xuICAgICAgICAvLyAgICAgZm9yICh2YXIgaSBpbiB0aGlzLkNsaWVudENvbnRhY3RzX2RhdGEpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgaWQgPSB0aGlzLkNsaWVudENvbnRhY3RzX2RhdGFbaV0uaWQ7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGh0dHAgPVxuICAgICAgICAvLyAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50Q29udGFjdHMvR2V0Q2xpZW50Q29udGFjdEF2YXRhcj9pZD0nICsgaWQ7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGxpbmtlclBob3RvRGF0YSA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkNsaWVudENvbnRhY3RzX2RhdGFbaV1bJ2F2YXRhciddID0gbGlua2VyUGhvdG9EYXRhO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBhc3luYyBHZXRDbGllbnRDb250YWN0cygpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIENhc2VJZDogXCJcIixcbiAgICAgICAgICAgICAgICBDbGllbnRJZDogdGhpcy5DbGllbnRJZCxcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IFwiXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldENsaWVudENvbnRhY3RzJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgQ2xpZW50Q29udGFjdHMgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clRvdGFsQ291bnQgKz0gQ2xpZW50Q29udGFjdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gQ2xpZW50Q29udGFjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gQ2xpZW50Q29udGFjdHNbaV0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBodHRwID1cbiAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRDb250YWN0cy9HZXRDbGllbnRDb250YWN0QXZhdGFyP2lkPScgKyBpZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmtlclBob3RvRGF0YSA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICAgICAgICAgICAgQ2xpZW50Q29udGFjdHNbaV1bJ2F2YXRhciddID0gbGlua2VyUGhvdG9EYXRhO1xuICAgICAgICAgICAgICAgICAgICBDbGllbnRDb250YWN0c1tpXVsnY2hlY2tlZCddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50Q29udGFjdHNfZGF0YS5wdXNoKC4uLkNsaWVudENvbnRhY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50SWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRDb250YWN0cygpO1xuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=