'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "returnInvoice": { "xmlns:v-bind": "", "v-bind:input.sync": "returnInvoice", "v-bind:inputValue.sync": "returnInvoiceValue", "v-bind:twoWayTitle.once": "returnInvoiceValue" }, "registerInvoice": { "v-bind:input.sync": "registerInvoice", "v-bind:inputValue.sync": "registerInvoiceValue", "v-bind:twoWayTitle.once": "registerInvoiceValue" }, "cancelInvoice": { "v-bind:input.sync": "cancelInvoice", "v-bind:inputValue.sync": "cancelInvoiceValue", "v-bind:twoWayTitle.once": "cancelInvoiceValue" }, "claimInvoice": { "v-bind:input.sync": "claimInvoice", "v-bind:inputValue.sync": "claimInvoiceValue", "v-bind:twoWayTitle.once": "claimInvoiceValue" }, "claimInvoiceId": { "v-bind:options.sync": "claimInvoiceId", "v-bind:index.sync": "claimInvoiceIdIndex", "v-bind:twoWayTitle.once": "claimInvoiceIdIndex" } }, _this.$events = {}, _this.components = {
            returnInvoice: _input2.default,
            registerInvoice: _input2.default,
            cancelInvoice: _input2.default,
            claimInvoice: _input2.default,
            claimInvoiceId: _option2.default
        }, _this.data = {
            addOpacity: 1,
            type: '',
            id: '',
            creatorUserId: '',
            billDataDetail: {},
            returnInvoiceValue: '',
            returnInvoice: {
                title: '退回原因 ',
                name: 'returnInvoice',
                warning: false,
                options: true
            },
            registerInvoiceValue: '',
            registerInvoice: {
                title: '发票编号',
                name: 'registerInvoice',
                warning: false,
                options: true
            },
            cancelInvoiceValue: '',
            cancelInvoice: {
                title: '作废原因 ',
                name: 'cancelInvoice',
                warning: false,
                options: true
            },
            claimInvoiceValue: '',
            claimInvoice: {
                title: '备注 ',
                name: 'claimInvoice',
                warning: false,
                options: true
            },
            claimInvoiceId: {
                title: '领用人',
                name: 'VacationType',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            claimInvoiceIdIndex: 0,
            claimInvoiceData: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(e) {
            this.id = e.id;
            this.type = e.type;
            this.displayText();
            this.$apply();
        }
    }, {
        key: 'auditing',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var resData, pages, prevPage;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.t0 = this.type;
                                _context.next = _context.t0 === '0' ? 3 : _context.t0 === '1' ? 30 : _context.t0 === '2' ? 57 : _context.t0 === '3' ? 84 : 111;
                                break;

                            case 3:
                                if (!(this.returnInvoiceValue == '')) {
                                    _context.next = 7;
                                    break;
                                }

                                this.returnInvoice.warning = true;
                                this.$apply();
                                return _context.abrupt('break', 112);

                            case 7:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 10;
                                return _ajax2.default.getData('/api/services/web/financialInvoice/ReturnInvoice', 'post', {
                                    Id: this.id,
                                    Remark: this.returnInvoiceValue
                                });

                            case 10:
                                resData = _context.sent;
                                _context.t1 = resData.statusCode;
                                _context.next = _context.t1 === 200 ? 14 : _context.t1 === 403 ? 20 : _context.t1 === 500 ? 24 : 28;
                                break;

                            case 14:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 3];

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 2
                                });
                                this.$apply();
                                return _context.abrupt('break', 29);

                            case 20:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 29);

                            case 24:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 29);

                            case 28:
                                return _context.abrupt('break', 29);

                            case 29:
                                return _context.abrupt('break', 112);

                            case 30:
                                if (!(this.registerInvoiceValue == '')) {
                                    _context.next = 34;
                                    break;
                                }

                                this.registerInvoice.warning = true;
                                this.$apply();
                                return _context.abrupt('break', 112);

                            case 34:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 37;
                                return _ajax2.default.getData('/api/services/web/financialInvoice/RegisterInvoice', 'post', {
                                    invoiceId: this.id,
                                    invoiceNo: this.registerInvoiceValue
                                });

                            case 37:
                                resData = _context.sent;
                                _context.t2 = resData.statusCode;
                                _context.next = _context.t2 === 200 ? 41 : _context.t2 === 403 ? 47 : _context.t2 === 500 ? 51 : 55;
                                break;

                            case 41:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 3];

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 2
                                });
                                this.$apply();
                                return _context.abrupt('break', 56);

                            case 47:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 56);

                            case 51:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 56);

                            case 55:
                                return _context.abrupt('break', 56);

                            case 56:
                                return _context.abrupt('break', 112);

                            case 57:
                                if (!(this.cancelInvoiceValue == '')) {
                                    _context.next = 61;
                                    break;
                                }

                                this.cancelInvoice.warning = true;
                                this.$apply();
                                return _context.abrupt('break', 112);

                            case 61:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 64;
                                return _ajax2.default.getData('/api/services/web/financialInvoice/CancelInvoice', 'post', {
                                    Id: this.id,
                                    Remark: this.cancelInvoiceValue
                                });

                            case 64:
                                resData = _context.sent;
                                _context.t3 = resData.statusCode;
                                _context.next = _context.t3 === 200 ? 68 : _context.t3 === 403 ? 74 : _context.t3 === 500 ? 78 : 82;
                                break;

                            case 68:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 3];

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 2
                                });
                                this.$apply();
                                return _context.abrupt('break', 83);

                            case 74:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 83);

                            case 78:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 83);

                            case 82:
                                return _context.abrupt('break', 83);

                            case 83:
                                return _context.abrupt('break', 112);

                            case 84:
                                if (!(this.claimInvoiceIdIndex == 0)) {
                                    _context.next = 88;
                                    break;
                                }

                                this.claimInvoiceId.warning = true;
                                this.$apply();
                                return _context.abrupt('break', 112);

                            case 88:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 91;
                                return _ajax2.default.getData('/api/services/web/financialInvoice/ClaimInvoice', 'post', {
                                    InvoiceId: this.id,
                                    UserName: this.claimInvoiceData[this.claimInvoiceIdIndex - 1].name,
                                    UserId: this.claimInvoiceData[this.claimInvoiceIdIndex - 1].id,
                                    Remark: this.claimInvoiceValue
                                });

                            case 91:
                                resData = _context.sent;
                                _context.t4 = resData.statusCode;
                                _context.next = _context.t4 === 200 ? 95 : _context.t4 === 403 ? 101 : _context.t4 === 500 ? 105 : 109;
                                break;

                            case 95:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 3];

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 2
                                });
                                this.$apply();
                                return _context.abrupt('break', 110);

                            case 101:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 110);

                            case 105:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 110);

                            case 109:
                                return _context.abrupt('break', 110);

                            case 110:
                                return _context.abrupt('break', 112);

                            case 111:
                                return _context.abrupt('break', 112);

                            case 112:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function auditing() {
                return _ref2.apply(this, arguments);
            }

            return auditing;
        }()
    }, {
        key: 'displayText',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, i;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetEmployees', 'post', {
                                    pageNumber: 1,
                                    pageSize: 100
                                });

                            case 2:
                                resData = _context2.sent;
                                _context2.t0 = resData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 6 : _context2.t0 === 403 ? 10 : _context2.t0 === 500 ? 14 : 18;
                                break;

                            case 6:
                                this.claimInvoiceData = resData.data.result.items;
                                for (i in resData.data.result.items) {
                                    this.claimInvoiceId.displayText = this.claimInvoiceId.displayText.concat(resData.data.result.items[i].name);
                                }
                                this.$apply();
                                return _context2.abrupt('break', 19);

                            case 10:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 19);

                            case 14:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 19);

                            case 18:
                                return _context2.abrupt('break', 19);

                            case 19:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function displayText() {
                return _ref3.apply(this, arguments);
            }

            return displayText;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/invoice/manageInvoce/manageInvoiceExamine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUludm9pY2VFeGFtaW5lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmV0dXJuSW52b2ljZSIsImlucHV0MSIsInJlZ2lzdGVySW52b2ljZSIsImlucHV0MiIsImNhbmNlbEludm9pY2UiLCJpbnB1dDMiLCJjbGFpbUludm9pY2UiLCJpbnB1dDQiLCJjbGFpbUludm9pY2VJZCIsIm9wdGlvbiIsImRhdGEiLCJhZGRPcGFjaXR5IiwidHlwZSIsImlkIiwiY3JlYXRvclVzZXJJZCIsImJpbGxEYXRhRGV0YWlsIiwicmV0dXJuSW52b2ljZVZhbHVlIiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsIm9wdGlvbnMiLCJyZWdpc3Rlckludm9pY2VWYWx1ZSIsImNhbmNlbEludm9pY2VWYWx1ZSIsImNsYWltSW52b2ljZVZhbHVlIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsImNsYWltSW52b2ljZUlkSW5kZXgiLCJjbGFpbUludm9pY2VEYXRhIiwiZSIsIiRhcHBseSIsInd4Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwic3VjY2VzcyIsImFqYXgiLCJnZXREYXRhIiwiSWQiLCJSZW1hcmsiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJsZW5ndGgiLCJyZWZyZXNoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsImludm9pY2VJZCIsImludm9pY2VObyIsIkludm9pY2VJZCIsIlVzZXJOYW1lIiwiVXNlcklkIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwicmVzdWx0IiwiaXRlbXMiLCJpIiwiY29uY2F0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLGVBQXZDLEVBQXVELDBCQUF5QixvQkFBaEYsRUFBcUcsMkJBQTBCLG9CQUEvSCxFQUFqQixFQUFzSyxtQkFBa0IsRUFBQyxxQkFBb0IsaUJBQXJCLEVBQXVDLDBCQUF5QixzQkFBaEUsRUFBdUYsMkJBQTBCLHNCQUFqSCxFQUF4TCxFQUFpVSxpQkFBZ0IsRUFBQyxxQkFBb0IsZUFBckIsRUFBcUMsMEJBQXlCLG9CQUE5RCxFQUFtRiwyQkFBMEIsb0JBQTdHLEVBQWpWLEVBQW9kLGdCQUFlLEVBQUMscUJBQW9CLGNBQXJCLEVBQW9DLDBCQUF5QixtQkFBN0QsRUFBaUYsMkJBQTBCLG1CQUEzRyxFQUFuZSxFQUFtbUIsa0JBQWlCLEVBQUMsdUJBQXNCLGdCQUF2QixFQUF3QyxxQkFBb0IscUJBQTVELEVBQWtGLDJCQUEwQixxQkFBNUcsRUFBcG5CLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLDJCQUFlQyxlQURiO0FBRUZDLDZCQUFpQkMsZUFGZjtBQUdGQywyQkFBZUMsZUFIYjtBQUlGQywwQkFBY0MsZUFKWjtBQUtGQyw0QkFBZ0JDO0FBTGQsUyxRQU9OQyxJLEdBQU87QUFDSEMsd0JBQVksQ0FEVDtBQUVIQyxrQkFBTSxFQUZIO0FBR0hDLGdCQUFJLEVBSEQ7QUFJSEMsMkJBQWUsRUFKWjtBQUtIQyw0QkFBZ0IsRUFMYjtBQU1IQyxnQ0FBb0IsRUFOakI7QUFPSGhCLDJCQUFlO0FBQ1hpQix1QkFBTyxPQURJO0FBRVhDLHNCQUFNLGVBRks7QUFHWEMseUJBQVMsS0FIRTtBQUlYQyx5QkFBUTtBQUpHLGFBUFo7QUFhSEMsa0NBQXNCLEVBYm5CO0FBY0huQiw2QkFBaUI7QUFDYmUsdUJBQU8sTUFETTtBQUViQyxzQkFBTSxpQkFGTztBQUdiQyx5QkFBUyxLQUhJO0FBSWJDLHlCQUFRO0FBSkssYUFkZDtBQW9CSEUsZ0NBQW9CLEVBcEJqQjtBQXFCSGxCLDJCQUFlO0FBQ1hhLHVCQUFPLE9BREk7QUFFWEMsc0JBQU0sZUFGSztBQUdYQyx5QkFBUyxLQUhFO0FBSVhDLHlCQUFRO0FBSkcsYUFyQlo7QUEyQkhHLCtCQUFtQixFQTNCaEI7QUE0QkhqQiwwQkFBYztBQUNWVyx1QkFBTyxLQURHO0FBRVZDLHNCQUFNLGNBRkk7QUFHVkMseUJBQVMsS0FIQztBQUlWQyx5QkFBUTtBQUpFLGFBNUJYO0FBa0NIWiw0QkFBZ0I7QUFDWlMsdUJBQU8sS0FESztBQUVaQyxzQkFBTSxjQUZNO0FBR1pNLHVCQUFPLEVBSEs7QUFJWkMsNkJBQWEsQ0FBQyxLQUFELENBSkQ7QUFLWk4seUJBQVM7QUFMRyxhQWxDYjtBQXlDSE8saUNBQXFCLENBekNsQjtBQTBDSEMsOEJBQWtCO0FBMUNmLFM7Ozs7OytCQTRDQUMsQyxFQUFHO0FBQ04saUJBQUtmLEVBQUwsR0FBVWUsRUFBRWYsRUFBWjtBQUNBLGlCQUFLRCxJQUFMLEdBQVlnQixFQUFFaEIsSUFBZDtBQUNBLGlCQUFLYSxXQUFMO0FBQ0EsaUJBQUtJLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7OzhDQUVXLEtBQUtqQixJO2dFQUNKLEcsdUJBNkNBLEcsd0JBNkNBLEcsd0JBNkNBLEc7Ozs7c0NBdElHLEtBQUtJLGtCQUFMLElBQTJCLEU7Ozs7O0FBQzNCLHFDQUFLaEIsYUFBTCxDQUFtQm1CLE9BQW5CLEdBQTZCLElBQTdCO0FBQ0EscUNBQUtVLE1BQUw7Ozs7QUFHSkMsbUNBQUdDLFdBQUgsQ0FBZTtBQUNYZCwyQ0FBTyxVQURJLEVBQ1E7QUFDbkJlLDBDQUFNLElBRkssRUFFQztBQUNaQyw2Q0FBUyxtQkFBTTtBQUNYLCtDQUFLdEIsVUFBTCxHQUFrQixDQUFsQjtBQUNBLCtDQUFLa0IsTUFBTDtBQUNIO0FBTlUsaUNBQWY7O3VDQVFvQkssZUFBS0MsT0FBTCxDQUNoQixrREFEZ0IsRUFFaEIsTUFGZ0IsRUFFUjtBQUNKQyx3Q0FBSSxLQUFLdkIsRUFETDtBQUVKd0IsNENBQVEsS0FBS3JCO0FBRlQsaUNBRlEsQzs7O0FBQWhCc0IsdUM7OENBT0lBLFFBQVFDLFU7Z0VBQ1AsRyx3QkFTQSxHLHdCQUtBLEc7Ozs7QUFiR0MscUMsR0FBUUMsaUI7QUFDUkMsd0MsR0FBV0YsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLEM7O0FBQ2ZELHlDQUFTaEMsSUFBVCxDQUFja0MsT0FBZCxHQUF3QixJQUF4QjtBQUNBZCxtQ0FBR2UsWUFBSCxDQUFnQjtBQUNaQywyQ0FBTztBQURLLGlDQUFoQjtBQUdBLHFDQUFLakIsTUFBTDs7OztBQUdBLHFDQUFLa0IsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUtwQixNQUFMOzs7O0FBR0EscUNBQUtrQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3BCLE1BQUw7Ozs7Ozs7Ozs7c0NBT0osS0FBS1Isb0JBQUwsSUFBNkIsRTs7Ozs7QUFDN0IscUNBQUtuQixlQUFMLENBQXFCaUIsT0FBckIsR0FBK0IsSUFBL0I7QUFDQSxxQ0FBS1UsTUFBTDs7OztBQUdKQyxtQ0FBR0MsV0FBSCxDQUFlO0FBQ1hkLDJDQUFPLFVBREksRUFDUTtBQUNuQmUsMENBQU0sSUFGSyxFQUVDO0FBQ1pDLDZDQUFTLG1CQUFNO0FBQ1gsK0NBQUt0QixVQUFMLEdBQWtCLENBQWxCO0FBQ0EsK0NBQUtrQixNQUFMO0FBQ0g7QUFOVSxpQ0FBZjs7dUNBUW9CSyxlQUFLQyxPQUFMLENBQ2hCLG9EQURnQixFQUVoQixNQUZnQixFQUVSO0FBQ0plLCtDQUFXLEtBQUtyQyxFQURaO0FBRUpzQywrQ0FBVyxLQUFLOUI7QUFGWixpQ0FGUSxDOzs7QUFBaEJpQix1Qzs4Q0FPSUEsUUFBUUMsVTtnRUFDUCxHLHdCQVNBLEcsd0JBS0EsRzs7OztBQWJHQyxxQyxHQUFRQyxpQjtBQUNSQyx3QyxHQUFXRixNQUFNQSxNQUFNRyxNQUFOLEdBQWUsQ0FBckIsQzs7QUFDZkQseUNBQVNoQyxJQUFULENBQWNrQyxPQUFkLEdBQXdCLElBQXhCO0FBQ0FkLG1DQUFHZSxZQUFILENBQWdCO0FBQ1pDLDJDQUFPO0FBREssaUNBQWhCO0FBR0EscUNBQUtqQixNQUFMOzs7O0FBR0EscUNBQUtrQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3BCLE1BQUw7Ozs7QUFHQSxxQ0FBS2tCLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLcEIsTUFBTDs7Ozs7Ozs7OztzQ0FPTCxLQUFLUCxrQkFBTCxJQUF5QixFOzs7OztBQUN4QixxQ0FBS2xCLGFBQUwsQ0FBbUJlLE9BQW5CLEdBQTZCLElBQTdCO0FBQ0EscUNBQUtVLE1BQUw7Ozs7QUFHSkMsbUNBQUdDLFdBQUgsQ0FBZTtBQUNYZCwyQ0FBTyxVQURJLEVBQ1E7QUFDbkJlLDBDQUFNLElBRkssRUFFQztBQUNaQyw2Q0FBUyxtQkFBTTtBQUNYLCtDQUFLdEIsVUFBTCxHQUFrQixDQUFsQjtBQUNBLCtDQUFLa0IsTUFBTDtBQUNIO0FBTlUsaUNBQWY7O3VDQVFvQkssZUFBS0MsT0FBTCxDQUNoQixrREFEZ0IsRUFFaEIsTUFGZ0IsRUFFUjtBQUNKQyx3Q0FBSSxLQUFLdkIsRUFETDtBQUVKd0IsNENBQVEsS0FBS2Y7QUFGVCxpQ0FGUSxDOzs7QUFBaEJnQix1Qzs4Q0FPSUEsUUFBUUMsVTtnRUFDUCxHLHdCQVNBLEcsd0JBS0EsRzs7OztBQWJHQyxxQyxHQUFRQyxpQjtBQUNSQyx3QyxHQUFXRixNQUFNQSxNQUFNRyxNQUFOLEdBQWUsQ0FBckIsQzs7QUFDZkQseUNBQVNoQyxJQUFULENBQWNrQyxPQUFkLEdBQXdCLElBQXhCO0FBQ0FkLG1DQUFHZSxZQUFILENBQWdCO0FBQ1pDLDJDQUFPO0FBREssaUNBQWhCO0FBR0EscUNBQUtqQixNQUFMOzs7O0FBR0EscUNBQUtrQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3BCLE1BQUw7Ozs7QUFHQSxxQ0FBS2tCLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLcEIsTUFBTDs7Ozs7Ozs7OztzQ0FPSixLQUFLSCxtQkFBTCxJQUE0QixDOzs7OztBQUM1QixxQ0FBS2xCLGNBQUwsQ0FBb0JXLE9BQXBCLEdBQThCLElBQTlCO0FBQ0EscUNBQUtVLE1BQUw7Ozs7QUFHSkMsbUNBQUdDLFdBQUgsQ0FBZTtBQUNYZCwyQ0FBTyxVQURJLEVBQ1E7QUFDbkJlLDBDQUFNLElBRkssRUFFQztBQUNaQyw2Q0FBUyxtQkFBTTtBQUNYLCtDQUFLdEIsVUFBTCxHQUFrQixDQUFsQjtBQUNBLCtDQUFLa0IsTUFBTDtBQUNIO0FBTlUsaUNBQWY7O3VDQVFvQkssZUFBS0MsT0FBTCxDQUNoQixpREFEZ0IsRUFFaEIsTUFGZ0IsRUFFUjtBQUNKaUIsK0NBQVcsS0FBS3ZDLEVBRFo7QUFFSndDLDhDQUFVLEtBQUsxQixnQkFBTCxDQUFzQixLQUFLRCxtQkFBTCxHQUEyQixDQUFqRCxFQUFvRFIsSUFGMUQ7QUFHSm9DLDRDQUFRLEtBQUszQixnQkFBTCxDQUFzQixLQUFLRCxtQkFBTCxHQUEyQixDQUFqRCxFQUFvRGIsRUFIeEQ7QUFJSndCLDRDQUFRLEtBQUtkO0FBSlQsaUNBRlEsQzs7O0FBQWhCZSx1Qzs4Q0FTSUEsUUFBUUMsVTtnRUFDUCxHLHdCQVNBLEcseUJBS0EsRzs7OztBQWJHQyxxQyxHQUFRQyxpQjtBQUNSQyx3QyxHQUFXRixNQUFNQSxNQUFNRyxNQUFOLEdBQWUsQ0FBckIsQzs7QUFDZkQseUNBQVNoQyxJQUFULENBQWNrQyxPQUFkLEdBQXdCLElBQXhCO0FBQ0FkLG1DQUFHZSxZQUFILENBQWdCO0FBQ1pDLDJDQUFPO0FBREssaUNBQWhCO0FBR0EscUNBQUtqQixNQUFMOzs7O0FBR0EscUNBQUtrQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3BCLE1BQUw7Ozs7QUFHQSxxQ0FBS2tCLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLcEIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQVdJSyxlQUFLQyxPQUFMLENBQ2hCLHVDQURnQixFQUVoQixNQUZnQixFQUVSO0FBQ0pvQixnREFBWSxDQURSO0FBRUpDLDhDQUFVO0FBRk4saUNBRlEsQzs7O0FBQWhCbEIsdUM7K0NBT0lBLFFBQVFDLFU7a0VBQ1AsRyx3QkFPQSxHLHlCQUtBLEc7Ozs7QUFYRCxxQ0FBS1osZ0JBQUwsR0FBd0JXLFFBQVE1QixJQUFSLENBQWErQyxNQUFiLENBQW9CQyxLQUE1QztBQUNBLHFDQUFTQyxDQUFULElBQWNyQixRQUFRNUIsSUFBUixDQUFhK0MsTUFBYixDQUFvQkMsS0FBbEMsRUFBeUM7QUFDckMseUNBQUtsRCxjQUFMLENBQW9CaUIsV0FBcEIsR0FBa0MsS0FBS2pCLGNBQUwsQ0FBb0JpQixXQUFwQixDQUFnQ21DLE1BQWhDLENBQXVDdEIsUUFBUTVCLElBQVIsQ0FBYStDLE1BQWIsQ0FBb0JDLEtBQXBCLENBQTBCQyxDQUExQixFQUE2QnpDLElBQXBFLENBQWxDO0FBQ0g7QUFDRCxxQ0FBS1csTUFBTDs7OztBQUdBLHFDQUFLa0IsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUtwQixNQUFMOzs7O0FBR0EscUNBQUtrQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3BCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBalJtQmdDLGVBQUtDLEk7O2tCQUFuQm5FLEsiLCJmaWxlIjoibWFuYWdlSW52b2ljZUV4YW1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcclxuICAgIGltcG9ydCBpbnB1dDEgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnXHJcbiAgICBpbXBvcnQgaW5wdXQyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0J1xyXG4gICAgaW1wb3J0IGlucHV0MyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCdcclxuICAgIGltcG9ydCBpbnB1dDQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnXHJcbiAgICBpbXBvcnQgb3B0aW9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbidcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicmV0dXJuSW52b2ljZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwicmV0dXJuSW52b2ljZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwicmV0dXJuSW52b2ljZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicmV0dXJuSW52b2ljZVZhbHVlXCJ9LFwicmVnaXN0ZXJJbnZvaWNlXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcInJlZ2lzdGVySW52b2ljZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwicmVnaXN0ZXJJbnZvaWNlVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJyZWdpc3Rlckludm9pY2VWYWx1ZVwifSxcImNhbmNlbEludm9pY2VcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiY2FuY2VsSW52b2ljZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiY2FuY2VsSW52b2ljZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY2FuY2VsSW52b2ljZVZhbHVlXCJ9LFwiY2xhaW1JbnZvaWNlXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImNsYWltSW52b2ljZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiY2xhaW1JbnZvaWNlVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjbGFpbUludm9pY2VWYWx1ZVwifSxcImNsYWltSW52b2ljZUlkXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiY2xhaW1JbnZvaWNlSWRcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJjbGFpbUludm9pY2VJZEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY2xhaW1JbnZvaWNlSWRJbmRleFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIHJldHVybkludm9pY2U6IGlucHV0MSxcclxuICAgICAgICAgICAgcmVnaXN0ZXJJbnZvaWNlOiBpbnB1dDIsXHJcbiAgICAgICAgICAgIGNhbmNlbEludm9pY2U6IGlucHV0MyxcclxuICAgICAgICAgICAgY2xhaW1JbnZvaWNlOiBpbnB1dDQsXHJcbiAgICAgICAgICAgIGNsYWltSW52b2ljZUlkOiBvcHRpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0b3JVc2VySWQ6ICcnLFxyXG4gICAgICAgICAgICBiaWxsRGF0YURldGFpbDoge30sXHJcbiAgICAgICAgICAgIHJldHVybkludm9pY2VWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHJldHVybkludm9pY2U6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6YCA5Zue5Y6f5ZugICcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncmV0dXJuSW52b2ljZScsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6dHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWdpc3Rlckludm9pY2VWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHJlZ2lzdGVySW52b2ljZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5HnpajnvJblj7cnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3JlZ2lzdGVySW52b2ljZScsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6dHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxJbnZvaWNlVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBjYW5jZWxJbnZvaWNlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S9nOW6n+WOn+WboCAnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NhbmNlbEludm9pY2UnLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOnRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xhaW1JbnZvaWNlVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBjbGFpbUludm9pY2U6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSH5rOoICcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xhaW1JbnZvaWNlJyxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczp0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsYWltSW52b2ljZUlkOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+mihueUqOS6uicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVmFjYXRpb25UeXBlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbJ+ivt+mAieaLqSddLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsYWltSW52b2ljZUlkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGNsYWltSW52b2ljZURhdGE6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbkxvYWQoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gZS5pZDtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gZS50eXBlXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRleHQoKVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhc3luYyBhdWRpdGluZygpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldHVybkludm9pY2VWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVybkludm9pY2Uud2FybmluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEludm9pY2UvUmV0dXJuSW52b2ljZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1hcms6IHRoaXMucmV0dXJuSW52b2ljZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWdpc3Rlckludm9pY2VWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW52b2ljZS53YXJuaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsSW52b2ljZS9SZWdpc3Rlckludm9pY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2VJZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2VObzogdGhpcy5yZWdpc3Rlckludm9pY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jYW5jZWxJbnZvaWNlVmFsdWU9PScnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxJbnZvaWNlLndhcm5pbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxJbnZvaWNlL0NhbmNlbEludm9pY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtYXJrOiB0aGlzLmNhbmNlbEludm9pY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1JbnZvaWNlSWRJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhaW1JbnZvaWNlSWQud2FybmluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEludm9pY2UvQ2xhaW1JbnZvaWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTmFtZTogdGhpcy5jbGFpbUludm9pY2VEYXRhW3RoaXMuY2xhaW1JbnZvaWNlSWRJbmRleCAtIDFdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySWQ6IHRoaXMuY2xhaW1JbnZvaWNlRGF0YVt0aGlzLmNsYWltSW52b2ljZUlkSW5kZXggLSAxXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbWFyazogdGhpcy5jbGFpbUludm9pY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBkaXNwbGF5VGV4dCgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldEVtcGxveWVlcycsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhaW1JbnZvaWNlRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFpbUludm9pY2VJZC5kaXNwbGF5VGV4dCA9IHRoaXMuY2xhaW1JbnZvaWNlSWQuZGlzcGxheVRleHQuY29uY2F0KHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXNbaV0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19