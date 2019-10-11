'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            billDataDetail: {},
            billDetailId: '',
            billDetailNum: 1,
            contractMoney: 0,
            journalAllMoney: 0,
            costAllMoney: 0
        }, _this.methods = {
            into: function into(type) {
                _wepy2.default.navigateTo({
                    url: './manageBillDetails?id=' + this.billDataDetail.id + '&caseId=' + this.billDataDetail.caseId + '&type=' + type
                });
            },
            auditing: function auditing() {
                _wepy2.default.navigateTo({
                    url: './manageBillExamine?id=' + this.billDataDetail.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.billDetailId = options.id;
            this.getbill();
            this.$apply();
        }
    }, {
        key: 'getbill',

        // onShow() {

        // }
        //获取账单
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetBillInfoForEdit', 'post', {
                                    id: this.billDetailId
                                });

                            case 2:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 6 : _context.t0 === 403 ? 12 : _context.t0 === 500 ? 15 : 18;
                                break;

                            case 6:
                                this.billDataDetail = resData.data.result;
                                this.billDataDetail.caseRatio = this.percentage(this.billDataDetail.caseRatio);
                                this.billDataDetail.lawyerRatio = this.percentage(this.billDataDetail.lawyerRatio);
                                this.billDataDetail.discountRate = this.percentage(this.billDataDetail.discountRate);
                                // this.billDataDetail=billDataDetail;
                                this.$apply();
                                return _context.abrupt('break', 19);

                            case 12:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                return _context.abrupt('break', 19);

                            case 15:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                return _context.abrupt('break', 19);

                            case 18:
                                return _context.abrupt('break', 19);

                            case 19:
                                this.billDetailNum++;
                                this.$apply();
                                this.charge();
                                this.journal();
                                this.cost();

                            case 24:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getbill() {
                return _ref2.apply(this, arguments);
            }

            return getbill;
        }()
        //转化百分比

    }, {
        key: 'percentage',
        value: function percentage(data) {
            if (data !== 0) {
                data = Number(data).toFixed(2) + '%';
            }
            return data;
        }
        //合同信息

    }, {
        key: 'charge',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetCasePaySummary', 'post', {
                                    billingId: this.billDataDetail.id,
                                    id: this.billDataDetail.caseId
                                });

                            case 2:
                                resData = _context2.sent;
                                _context2.t0 = resData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 6 : _context2.t0 === 403 ? 9 : _context2.t0 === 500 ? 13 : 17;
                                break;

                            case 6:
                                console.log(resData);
                                this.contractMoney = resData.data.result.amount;
                                return _context2.abrupt('break', 18);

                            case 9:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 18);

                            case 13:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 18);

                            case 17:
                                return _context2.abrupt('break', 18);

                            case 18:
                                this.$apply();

                            case 19:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function charge() {
                return _ref3.apply(this, arguments);
            }

            return charge;
        }()
        //日志清单

    }, {
        key: 'journal',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(num) {
                var resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetBillinglogSummary', 'post', {
                                    billingId: this.billDataDetail.id,
                                    caseId: this.billDataDetail.caseId
                                });

                            case 2:
                                resData = _context3.sent;
                                _context3.t0 = resData.statusCode;
                                _context3.next = _context3.t0 === 200 ? 6 : _context3.t0 === 403 ? 9 : _context3.t0 === 500 ? 13 : 17;
                                break;

                            case 6:
                                console.log(resData);
                                this.journalAllMoney = resData.data.result.amount;
                                return _context3.abrupt('break', 18);

                            case 9:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context3.abrupt('break', 18);

                            case 13:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context3.abrupt('break', 18);

                            case 17:
                                return _context3.abrupt('break', 18);

                            case 18:
                                this.$apply();

                            case 19:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function journal(_x) {
                return _ref4.apply(this, arguments);
            }

            return journal;
        }()
        //费用清单

    }, {
        key: 'cost',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(num) {
                var resData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetChargeSummary', 'post', {
                                    billingId: this.billDataDetail.id,
                                    caseId: this.billDataDetail.caseId,
                                    pageNumber: 1,
                                    pageSize: 10
                                });

                            case 2:
                                resData = _context4.sent;
                                _context4.t0 = resData.statusCode;
                                _context4.next = _context4.t0 === 200 ? 6 : _context4.t0 === 403 ? 9 : _context4.t0 === 500 ? 13 : 17;
                                break;

                            case 6:
                                console.log(resData);
                                this.costAllMoney = resData.data.result.amount;
                                return _context4.abrupt('break', 18);

                            case 9:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context4.abrupt('break', 18);

                            case 13:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context4.abrupt('break', 18);

                            case 17:
                                return _context4.abrupt('break', 18);

                            case 18:
                                this.$apply();

                            case 19:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function cost(_x2) {
                return _ref5.apply(this, arguments);
            }

            return cost;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/bill/manageBill/manageBillDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUJpbGxEZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiZGF0YSIsImJpbGxEYXRhRGV0YWlsIiwiYmlsbERldGFpbElkIiwiYmlsbERldGFpbE51bSIsImNvbnRyYWN0TW9uZXkiLCJqb3VybmFsQWxsTW9uZXkiLCJjb3N0QWxsTW9uZXkiLCJtZXRob2RzIiwiaW50byIsInR5cGUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImlkIiwiY2FzZUlkIiwiYXVkaXRpbmciLCJvcHRpb25zIiwiZ2V0YmlsbCIsIiRhcHBseSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJjYXNlUmF0aW8iLCJwZXJjZW50YWdlIiwibGF3eWVyUmF0aW8iLCJkaXNjb3VudFJhdGUiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsImNoYXJnZSIsImpvdXJuYWwiLCJjb3N0IiwiTnVtYmVyIiwidG9GaXhlZCIsImJpbGxpbmdJZCIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJudW0iLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDSEMsNEJBQWdCLEVBRGI7QUFFSEMsMEJBQWMsRUFGWDtBQUdIQywyQkFBZSxDQUhaO0FBSUhDLDJCQUFjLENBSlg7QUFLSEMsNkJBQWlCLENBTGQ7QUFNSEMsMEJBQWM7QUFOWCxTLFFBUVBDLE8sR0FBVTtBQUNOQyxnQkFETSxnQkFDREMsSUFEQyxFQUNLO0FBQ1BDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLDRCQUE0QixLQUFLWCxjQUFMLENBQW9CWSxFQUFoRCxHQUFxRCxVQUFyRCxHQUFrRSxLQUFL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QUFuQztBQUNBLHFDQUFLWixNQUFMOzs7O0FBR0EscUNBQUtVLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLWixNQUFMOzs7Ozs7O0FBS1IscUNBQUtBLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5SjJCUixlQUFLaUMsSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJtYW5hZ2VCaWxsRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGJpbGxEYXRhRGV0YWlsOiB7fSxcclxuICAgICAgICAgICAgYmlsbERldGFpbElkOiAnJyxcclxuICAgICAgICAgICAgYmlsbERldGFpbE51bTogMSxcclxuICAgICAgICAgICAgY29udHJhY3RNb25leTowLFxyXG4gICAgICAgICAgICBqb3VybmFsQWxsTW9uZXk6IDAsXHJcbiAgICAgICAgICAgIGNvc3RBbGxNb25leTogMCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGludG8odHlwZSkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL21hbmFnZUJpbGxEZXRhaWxzP2lkPScgKyB0aGlzLmJpbGxEYXRhRGV0YWlsLmlkICsgJyZjYXNlSWQ9JyArIHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZUlkICsgJyZ0eXBlPScgKyB0eXBlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXVkaXRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vbWFuYWdlQmlsbEV4YW1pbmU/aWQ9JyArIHRoaXMuYmlsbERhdGFEZXRhaWwuaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmlsbERldGFpbElkID0gb3B0aW9ucy5pZDtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBvblNob3coKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL+iOt+WPlui0puWNlVxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEJpbGxpbmcvR2V0QmlsbEluZm9Gb3JFZGl0JyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmJpbGxEZXRhaWxJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbC5jYXNlUmF0aW89dGhpcy5wZXJjZW50YWdlKHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZVJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhRGV0YWlsLmxhd3llclJhdGlvPXRoaXMucGVyY2VudGFnZSh0aGlzLmJpbGxEYXRhRGV0YWlsLmxhd3llclJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhRGV0YWlsLmRpc2NvdW50UmF0ZT10aGlzLnBlcmNlbnRhZ2UodGhpcy5iaWxsRGF0YURldGFpbC5kaXNjb3VudFJhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYmlsbERhdGFEZXRhaWw9YmlsbERhdGFEZXRhaWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmlsbERldGFpbE51bSsrO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJnZSgpXHJcbiAgICAgICAgICAgIHRoaXMuam91cm5hbCgpXHJcbiAgICAgICAgICAgIHRoaXMuY29zdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6L2s5YyW55m+5YiG5q+UXHJcbiAgICAgICAgcGVyY2VudGFnZShkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YSE9PTApe1xyXG4gICAgICAgICAgICAgICBkYXRhPShOdW1iZXIoZGF0YSkudG9GaXhlZCgyKSkrJyUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lkIjlkIzkv6Hmga9cclxuICAgICAgICBhc3luYyBjaGFyZ2UoKSB7IFxyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxCaWxsaW5nL0dldENhc2VQYXlTdW1tYXJ5JyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdJZDogdGhpcy5iaWxsRGF0YURldGFpbC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5iaWxsRGF0YURldGFpbC5jYXNlSWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJhY3RNb25leSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ml6Xlv5fmuIXljZVcclxuICAgICAgICBhc3luYyBqb3VybmFsKG51bSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxCaWxsaW5nL0dldEJpbGxpbmdsb2dTdW1tYXJ5JyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdJZDogdGhpcy5iaWxsRGF0YURldGFpbC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNlSWQ6IHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZUlkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qb3VybmFsQWxsTW9uZXkgPSByZXNEYXRhLmRhdGEucmVzdWx0LmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6LS555So5riF5Y2VXHJcbiAgICAgICAgYXN5bmMgY29zdChudW0pIHtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQmlsbGluZy9HZXRDaGFyZ2VTdW1tYXJ5JyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdJZDogdGhpcy5iaWxsRGF0YURldGFpbC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNlSWQ6IHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0QWxsTW9uZXkgPSByZXNEYXRhLmRhdGEucmVzdWx0LmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=