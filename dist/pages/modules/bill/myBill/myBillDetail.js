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
                    url: './myBillDetails?id=' + this.billDataDetail.id + '&caseId=' + this.billDataDetail.caseId + '&type=' + type
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.billDetailId = options.id;
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.getbill();
        }
        //发送审核

    }, {
        key: 'toAuditing',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var resData, pages, prevPage;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/financialBilling/SendApprovalBilling', 'post', {
                                    id: this.billDataDetail.id
                                });

                            case 3:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 7 : _context.t0 === 403 ? 13 : _context.t0 === 500 ? 17 : 21;
                                break;

                            case 7:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 2]; //上一个页面

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 1
                                });

                                this.$apply();
                                return _context.abrupt('break', 22);

                            case 13:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 22);

                            case 17:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 22);

                            case 21:
                                return _context.abrupt('break', 22);

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function toAuditing() {
                return _ref2.apply(this, arguments);
            }

            return toAuditing;
        }()
        //获取账单

    }, {
        key: 'getbill',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(num) {
                var resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetBillInfoForEdit', 'post', {
                                    id: this.billDetailId
                                });

                            case 2:
                                resData = _context2.sent;
                                _context2.t0 = resData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 6 : _context2.t0 === 403 ? 8 : _context2.t0 === 500 ? 12 : 16;
                                break;

                            case 6:
                                this.billDataDetail = resData.data.result;
                                return _context2.abrupt('break', 17);

                            case 8:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 17);

                            case 12:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 17);

                            case 16:
                                return _context2.abrupt('break', 17);

                            case 17:
                                this.billDetailNum++;
                                this.$apply();
                                this.charge();
                                this.journal();
                                this.cost();

                            case 22:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getbill(_x) {
                return _ref3.apply(this, arguments);
            }

            return getbill;
        }()
        //合同信息

    }, {
        key: 'charge',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetCasePaySummary', 'post', {
                                    billingId: this.billDataDetail.id,
                                    id: this.billDataDetail.caseId
                                });

                            case 2:
                                resData = _context3.sent;
                                _context3.t0 = resData.statusCode;
                                _context3.next = _context3.t0 === 200 ? 6 : _context3.t0 === 403 ? 9 : _context3.t0 === 500 ? 13 : 17;
                                break;

                            case 6:
                                console.log(resData);
                                this.contractMoney = resData.data.result.amount;
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

            function charge() {
                return _ref4.apply(this, arguments);
            }

            return charge;
        }()
        //日志清单

    }, {
        key: 'journal',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(num) {
                var resData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetBillinglogSummary', 'post', {
                                    billingId: this.billDataDetail.id,
                                    caseId: this.billDataDetail.caseId
                                });

                            case 2:
                                resData = _context4.sent;
                                _context4.t0 = resData.statusCode;
                                _context4.next = _context4.t0 === 200 ? 6 : _context4.t0 === 403 ? 9 : _context4.t0 === 500 ? 13 : 17;
                                break;

                            case 6:
                                console.log(resData);
                                this.journalAllMoney = resData.data.result.amount;
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

            function journal(_x2) {
                return _ref5.apply(this, arguments);
            }

            return journal;
        }()
        //费用清单

    }, {
        key: 'cost',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(num) {
                var resData;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetChargeSummary', 'post', {
                                    billingId: this.billDataDetail.id,
                                    caseId: this.billDataDetail.caseId,
                                    pageNumber: 1,
                                    pageSize: 10
                                });

                            case 2:
                                resData = _context5.sent;
                                _context5.t0 = resData.statusCode;
                                _context5.next = _context5.t0 === 200 ? 6 : _context5.t0 === 403 ? 9 : _context5.t0 === 500 ? 13 : 17;
                                break;

                            case 6:
                                console.log(resData);
                                this.costAllMoney = resData.data.result.amount;
                                return _context5.abrupt('break', 18);

                            case 9:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context5.abrupt('break', 18);

                            case 13:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context5.abrupt('break', 18);

                            case 17:
                                return _context5.abrupt('break', 18);

                            case 18:
                                this.$apply();

                            case 19:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function cost(_x3) {
                return _ref6.apply(this, arguments);
            }

            return cost;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/bill/myBill/myBillDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15QmlsbERldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbXBvbmVudHMiLCJkYXRhIiwiYmlsbERhdGFEZXRhaWwiLCJiaWxsRGV0YWlsSWQiLCJiaWxsRGV0YWlsTnVtIiwiY29udHJhY3RNb25leSIsImpvdXJuYWxBbGxNb25leSIsImNvc3RBbGxNb25leSIsIm1ldGhvZHMiLCJpbnRvIiwidHlwZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaWQiLCJjYXNlSWQiLCJvcHRpb25zIiwiJGFwcGx5IiwiZ2V0YmlsbCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwiYWRkT3BhY2l0eSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwicmVmcmVzaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJudW0iLCJyZXN1bHQiLCJjaGFyZ2UiLCJqb3VybmFsIiwiY29zdCIsImJpbGxpbmdJZCIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDSEMsNEJBQWdCLEVBRGI7QUFFSEMsMEJBQWMsRUFGWDtBQUdIQywyQkFBZSxDQUhaO0FBSUhDLDJCQUFlLENBSlo7QUFLSEMsNkJBQWlCLENBTGQ7QUFNSEMsMEJBQWM7QUFOWCxTLFFBUVBDLE8sR0FBVTtBQUNOQyxnQkFETSxnQkFDREMsSUFEQyxFQUNLO0FBQ1BDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLHdCQUF3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QUFLYixjQUFMLENBQW9CYSxNQUZ4QjtBQUdKaUMsZ0RBQVksQ0FIUjtBQUlKQyw4Q0FBVTtBQUpOLGlDQUZRLEM7OztBQUFoQnRCLHVDOytDQVNJQSxRQUFRQyxVO2tFQUNQLEcsd0JBSUEsRyx3QkFLQSxHOzs7O0FBUkRpQix3Q0FBUUMsR0FBUixDQUFZbkIsT0FBWjtBQUNBLHFDQUFLcEIsWUFBTCxHQUFvQm9CLFFBQVExQixJQUFSLENBQWF1QyxNQUFiLENBQW9CTyxNQUF4Qzs7OztBQUdBLHFDQUFLWCxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3JCLE1BQUw7Ozs7QUFHQSxxQ0FBS21CLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLckIsTUFBTDs7Ozs7OztBQUtSLHFDQUFLQSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkwyQk4sZUFBS3VDLEk7O2tCQUFuQm5ELEsiLCJmaWxlIjoibXlCaWxsRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGJpbGxEYXRhRGV0YWlsOiB7fSxcclxuICAgICAgICAgICAgYmlsbERldGFpbElkOiAnJyxcclxuICAgICAgICAgICAgYmlsbERldGFpbE51bTogMSxcclxuICAgICAgICAgICAgY29udHJhY3RNb25leTogMCxcclxuICAgICAgICAgICAgam91cm5hbEFsbE1vbmV5OiAwLFxyXG4gICAgICAgICAgICBjb3N0QWxsTW9uZXk6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBpbnRvKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9teUJpbGxEZXRhaWxzP2lkPScgKyB0aGlzLmJpbGxEYXRhRGV0YWlsLmlkICsgJyZjYXNlSWQ9JyArIHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZUlkICsgJyZ0eXBlPScgKyB0eXBlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmlsbERldGFpbElkID0gb3B0aW9ucy5pZDtcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRiaWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+R6YCB5a6h5qC4XHJcbiAgICAgICAgYXN5bmMgdG9BdWRpdGluZygpIHtcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEJpbGxpbmcvU2VuZEFwcHJvdmFsQmlsbGluZycsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5iaWxsRGF0YURldGFpbC5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPlui0puWNlVxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwobnVtKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEJpbGxpbmcvR2V0QmlsbEluZm9Gb3JFZGl0JyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmJpbGxEZXRhaWxJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbCA9IHJlc0RhdGEuZGF0YS5yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJpbGxEZXRhaWxOdW0rKztcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyZ2UoKVxyXG4gICAgICAgICAgICB0aGlzLmpvdXJuYWwoKVxyXG4gICAgICAgICAgICB0aGlzLmNvc3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WQiOWQjOS/oeaBr1xyXG4gICAgICAgIGFzeW5jIGNoYXJnZSgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQmlsbGluZy9HZXRDYXNlUGF5U3VtbWFyeScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBiaWxsaW5nSWQ6IHRoaXMuYmlsbERhdGFEZXRhaWwuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZUlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyYWN0TW9uZXkgPSByZXNEYXRhLmRhdGEucmVzdWx0LmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pel5b+X5riF5Y2VXHJcbiAgICAgICAgYXN5bmMgam91cm5hbChudW0pIHtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQmlsbGluZy9HZXRCaWxsaW5nbG9nU3VtbWFyeScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBiaWxsaW5nSWQ6IHRoaXMuYmlsbERhdGFEZXRhaWwuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZUlkOiB0aGlzLmJpbGxEYXRhRGV0YWlsLmNhc2VJZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuam91cm5hbEFsbE1vbmV5ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+i0ueeUqOa4heWNlVxyXG4gICAgICAgIGFzeW5jIGNvc3QobnVtKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEJpbGxpbmcvR2V0Q2hhcmdlU3VtbWFyeScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBiaWxsaW5nSWQ6IHRoaXMuYmlsbERhdGFEZXRhaWwuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZUlkOiB0aGlzLmJpbGxEYXRhRGV0YWlsLmNhc2VJZCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0QWxsTW9uZXkgPSByZXNEYXRhLmRhdGEucmVzdWx0LmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=