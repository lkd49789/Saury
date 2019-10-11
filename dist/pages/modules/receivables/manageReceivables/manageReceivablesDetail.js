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

var _api = require('./../../../../utils/cofig/api.js');

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "lawyerFee": { "xmlns:v-bind": "", "v-bind:input.sync": "lawyerFee", "v-bind:inputValue.sync": "lawyerFeeValue", "v-bind:twoWayTitle.once": "lawyerFeeValue" }, "caseFee": { "v-bind:input.sync": "caseFee", "v-bind:inputValue.sync": "caseFeeValue", "v-bind:twoWayTitle.once": "caseFeeValue" } }, _this.$events = {}, _this.components = {
            lawyerFee: _input2.default,
            caseFee: _input2.default
        }, _this.data = {
            costData: {},
            invoiceDetailId: '',
            avatar: [],
            getcase: {
                isCaseData: false
            },
            warning: [false],
            lawyerFee: {
                title: '律师费',
                name: 'lawyerFee',
                options: false,
                warning: false,
                type: 'digit'
            },
            lawyerFeeValue: '',
            caseFee: {
                title: '办案费',
                name: 'caseFee',
                options: false,
                warning: false,
                type: 'digit'
            },
            caseFeeValue: ''
        }, _this.methods = {
            toChange: function toChange() {
                wx.setStorageSync('getcase', this.getcase);
                _wepy2.default.navigateTo({
                    url: './manageReceivablesExamine'
                });
            },
            toAuditing: function toAuditing(type) {
                if (type == 0) {
                    if (this.getcase.ifshow && this.lawyerFeeValue && this.caseFeeValue) {
                        this.claim(this.costData.id);
                    } else {
                        if (!this.getcase.ifshow) {
                            this.warning[0] = true;
                        }
                        this.warning[0] = true;
                        if (!this.lawyerFeeValue) {
                            this.lawyerFee.warning = true;
                        }
                        if (!this.caseFeeValue) {
                            this.caseFee.warning = true;
                        }
                    }
                    if (!this.getcase.ifshow) {
                        this.warning[0] = true;
                    } else {
                        this.warning[0] = false;
                    }
                    this.warning[0] = true;
                    if (!this.lawyerFeeValue) {
                        this.lawyerFee.warning = true;
                    }
                    if (!this.caseFeeValue) {
                        this.caseFee.warning = true;
                    }
                    this.$apply();
                } else {
                    this.partner(this.costData.id);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'getbill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
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
                                return _ajax2.default.getData('/api/services/web/financialReceipt/GetReceipt', 'post', {
                                    id: this.invoiceDetailId
                                });

                            case 3:
                                resData = _context.sent;

                                console.log(resData);
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 8 : _context.t0 === 403 ? 14 : _context.t0 === 500 ? 18 : 22;
                                break;

                            case 8:
                                console.log(resData);
                                this.costData = resData.data.result;
                                if (this.costData.creationTime) this.costData.creationTime = this.costData.creationTime ? (0, _api.formatTime)(this.costData.creationTime).split(' ')[0] : '';
                                this.costData.receiptDate = this.costData.receiptDate ? (0, _api.formatTime)(this.costData.receiptDate).split(' ')[0] : '';
                                this.$apply();
                                return _context.abrupt('break', 23);

                            case 14:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 23);

                            case 18:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 23);

                            case 22:
                                return _context.abrupt('break', 23);

                            case 23:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getbill(_x) {
                return _ref2.apply(this, arguments);
            }

            return getbill;
        }()
        //发送合伙人

    }, {
        key: 'partner',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
                var _this2 = this;

                var resData, pages, prevPage;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/financialCharge/ApproveCharge', 'post', {
                                    Id: id
                                });

                            case 3:
                                resData = _context2.sent;

                                console.log(resData);
                                _context2.t0 = resData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 8 : _context2.t0 === 403 ? 14 : _context2.t0 === 500 ? 18 : 22;
                                break;

                            case 8:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 2];

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 1
                                });
                                this.$apply();
                                return _context2.abrupt('break', 23);

                            case 14:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 23);

                            case 18:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 23);

                            case 22:
                                return _context2.abrupt('break', 23);

                            case 23:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function partner(_x2) {
                return _ref3.apply(this, arguments);
            }

            return partner;
        }()
    }, {
        key: 'claim',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
                var _this3 = this;

                var resData, pages, prevPage;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this3.addOpacity = 1;
                                        _this3.$apply();
                                    }
                                });
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/financialReceipt/ClaimReceipt', 'post', {
                                    CaseFee: this.caseFeeValue,
                                    CaseId: this.getcase.caseId,
                                    Id: id,
                                    LawyerFee: this.lawyerFeeValue
                                });

                            case 3:
                                resData = _context3.sent;

                                console.log(resData);
                                _context3.t0 = resData.statusCode;
                                _context3.next = _context3.t0 === 200 ? 8 : _context3.t0 === 403 ? 14 : _context3.t0 === 500 ? 18 : 22;
                                break;

                            case 8:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 2];

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 1
                                });
                                this.$apply();
                                return _context3.abrupt('break', 23);

                            case 14:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context3.abrupt('break', 23);

                            case 18:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context3.abrupt('break', 23);

                            case 22:
                                return _context3.abrupt('break', 23);

                            case 23:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function claim(_x3) {
                return _ref4.apply(this, arguments);
            }

            return claim;
        }()
    }, {
        key: 'isRefresh',
        value: function isRefresh(item) {
            this.getcase = item;
            this.getcase.isCaseData = true;
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.invoiceDetailId = options.id;
            this.getbill();
            this.$apply();
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/receivables/manageReceivables/manageReceivablesDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZVJlY2VpdmFibGVzRGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibGF3eWVyRmVlIiwiaW5wdXQxIiwiY2FzZUZlZSIsImlucHV0MiIsImRhdGEiLCJjb3N0RGF0YSIsImludm9pY2VEZXRhaWxJZCIsImF2YXRhciIsImdldGNhc2UiLCJpc0Nhc2VEYXRhIiwid2FybmluZyIsInRpdGxlIiwibmFtZSIsIm9wdGlvbnMiLCJ0eXBlIiwibGF3eWVyRmVlVmFsdWUiLCJjYXNlRmVlVmFsdWUiLCJtZXRob2RzIiwidG9DaGFuZ2UiLCJ3eCIsInNldFN0b3JhZ2VTeW5jIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0F1ZGl0aW5nIiwiaWZzaG93IiwiY2xhaW0iLCJpZCIsIiRhcHBseSIsInBhcnRuZXIiLCJudW0iLCJzaG93TG9hZGluZyIsIm1hc2siLCJzdWNjZXNzIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJjcmVhdGlvblRpbWUiLCJzcGxpdCIsInJlY2VpcHREYXRlIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJhZGRPcGFjaXR5IiwiSWQiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwicmVmcmVzaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiQ2FzZUZlZSIsIkNhc2VJZCIsImNhc2VJZCIsIkxhd3llckZlZSIsIml0ZW0iLCJnZXRiaWxsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQU1xQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsYUFBWSxF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bXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXHJcbiAgICBpbXBvcnQgaW5wdXQxIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcclxuICAgIGltcG9ydCBpbnB1dDIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGdldFVzZXJBdmF0YXJcclxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImxhd3llckZlZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwibGF3eWVyRmVlXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJsYXd5ZXJGZWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImxhd3llckZlZVZhbHVlXCJ9LFwiY2FzZUZlZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJjYXNlRmVlXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJjYXNlRmVlVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjYXNlRmVlVmFsdWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBsYXd5ZXJGZWU6IGlucHV0MSxcclxuICAgICAgICAgICAgY2FzZUZlZTogaW5wdXQyLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgY29zdERhdGE6IHt9LFxyXG4gICAgICAgICAgICBpbnZvaWNlRGV0YWlsSWQ6ICcnLFxyXG4gICAgICAgICAgICBhdmF0YXI6IFtdLFxyXG4gICAgICAgICAgICBnZXRjYXNlOiB7XHJcbiAgICAgICAgICAgICAgICBpc0Nhc2VEYXRhOmZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdhcm5pbmc6IFtcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYXd5ZXJGZWU6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5b6L5biI6LS5JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdsYXd5ZXJGZWUnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdkaWdpdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGF3eWVyRmVlVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBjYXNlRmVlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKnuahiOi0uScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2FzZUZlZScsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RpZ2l0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXNlRmVlVmFsdWU6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdG9DaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnZ2V0Y2FzZScsIHRoaXMuZ2V0Y2FzZSk7XHJcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vbWFuYWdlUmVjZWl2YWJsZXNFeGFtaW5lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvQXVkaXRpbmcodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldGNhc2UuaWZzaG93ICYmIHRoaXMubGF3eWVyRmVlVmFsdWUgJiYgdGhpcy5jYXNlRmVlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFpbSh0aGlzLmNvc3REYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRjYXNlLmlmc2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMF0gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5sYXd5ZXJGZWVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJGZWUud2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhc2VGZWVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlRmVlLndhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRjYXNlLmlmc2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1swXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMF0gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxhd3llckZlZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyRmVlLndhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FzZUZlZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzZUZlZS53YXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRuZXIodGhpcy5jb3N0RGF0YS5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXN5bmMgZ2V0YmlsbChudW0pIHtcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsUmVjZWlwdC9HZXRSZWNlaXB0JyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmludm9pY2VEZXRhaWxJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY29zdERhdGEuY3JlYXRpb25UaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEuY3JlYXRpb25UaW1lID10aGlzLmNvc3REYXRhLmNyZWF0aW9uVGltZT9mb3JtYXRUaW1lKHRoaXMuY29zdERhdGEuY3JlYXRpb25UaW1lKS5zcGxpdCgnICcpWzBdOicnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEucmVjZWlwdERhdGUgPSB0aGlzLmNvc3REYXRhLnJlY2VpcHREYXRlP2Zvcm1hdFRpbWUodGhpcy5jb3N0RGF0YS5yZWNlaXB0RGF0ZSkuc3BsaXQoJyAnKVswXTonJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+R6YCB5ZCI5LyZ5Lq6XHJcbiAgICAgICAgYXN5bmMgcGFydG5lcihpZCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQ2hhcmdlL0FwcHJvdmVDaGFyZ2UnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IGlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgY2xhaW0oaWQpIHtcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbFJlY2VpcHQvQ2xhaW1SZWNlaXB0JyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIENhc2VGZWU6IHRoaXMuY2FzZUZlZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIENhc2VJZDogdGhpcy5nZXRjYXNlLmNhc2VJZCxcclxuICAgICAgICAgICAgICAgICAgICBJZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF3eWVyRmVlOiB0aGlzLmxhd3llckZlZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzUmVmcmVzaChpdGVtKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRjYXNlPWl0ZW07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Y2FzZS5pc0Nhc2VEYXRhPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmludm9pY2VEZXRhaWxJZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiJdfQ==