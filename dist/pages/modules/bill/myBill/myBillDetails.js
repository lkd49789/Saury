'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _navbar = require('./../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "xmlns:v-on": "" } }, _this.$events = { "navbar": { "v-on:currentTab": "navbarChange" } }, _this.components = {
            navbar: _navbar2.default
        }, _this.data = {
            id: '',
            billId: '',
            typeId: 1,
            billDataDetail: {},
            navbars: ['定额收费', '风险收费'],
            currentTab: 0
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(e) {
            this.Id = e.id;
            this.caseId = e.caseId;
            this.typeId = e.type;
            this.getbill();
        }
    }, {
        key: 'getbill',

        //获取账单
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.typeId == 1)) {
                                    _context.next = 24;
                                    break;
                                }

                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetCasePaySummary', 'post', {
                                    billingId: this.Id,
                                    id: this.caseId
                                });

                            case 3:
                                resData = _context.sent;

                                console.log(resData);
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 8 : _context.t0 === 403 ? 13 : _context.t0 === 500 ? 17 : 21;
                                break;

                            case 8:
                                console.log(resData);
                                this.billDataDetail = resData.data.result;
                                for (index in this.billDataDetail.casePays.normalChargeList) {
                                    this.billDataDetail.casePays.normalChargeList[index].payDate = (0, _api.formatTime)(this.billDataDetail.casePays.normalChargeList[index].payDate);
                                }
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
                                _context.next = 68;
                                break;

                            case 24:
                                if (!(this.typeId == 2)) {
                                    _context.next = 47;
                                    break;
                                }

                                _context.next = 27;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetBillinglogSummary', 'post', {
                                    billingId: this.Id,
                                    caseId: this.caseId,
                                    pageNumber: 1,
                                    pageSize: 10
                                });

                            case 27:
                                resData = _context.sent;
                                _context.t1 = resData.statusCode;
                                _context.next = _context.t1 === 200 ? 31 : _context.t1 === 403 ? 35 : _context.t1 === 500 ? 39 : 43;
                                break;

                            case 31:
                                console.log(resData);
                                this.billDataDetail = resData.data.result;
                                for (index in this.billDataDetail.logList.items) {
                                    this.billDataDetail.logList.items[index].startTime = (0, _api.formatTime)(this.billDataDetail.logList.items[index].startTime);
                                }
                                return _context.abrupt('break', 44);

                            case 35:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 44);

                            case 39:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 44);

                            case 43:
                                return _context.abrupt('break', 44);

                            case 44:
                                this.$apply();
                                _context.next = 68;
                                break;

                            case 47:
                                if (!(this.typeId == 3)) {
                                    _context.next = 68;
                                    break;
                                }

                                _context.next = 50;
                                return _ajax2.default.getData('/api/services/web/financialBilling/GetChargeSummary', 'post', {
                                    billingId: this.Id,
                                    caseId: this.caseId,
                                    pageNumber: 1,
                                    pageSize: 10
                                });

                            case 50:
                                resData = _context.sent;
                                _context.t2 = resData.statusCode;
                                _context.next = _context.t2 === 200 ? 54 : _context.t2 === 403 ? 58 : _context.t2 === 500 ? 62 : 66;
                                break;

                            case 54:
                                console.log(resData);
                                this.billDataDetail = resData.data.result.chargeList;
                                for (index in this.billDataDetail.items) {
                                    this.billDataDetail.items[index].chargeDate = (0, _api.formatTime)(this.billDataDetail.items[index].chargeDate);
                                }
                                return _context.abrupt('break', 67);

                            case 58:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 67);

                            case 62:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 67);

                            case 66:
                                return _context.abrupt('break', 67);

                            case 67:
                                this.$apply();

                            case 68:
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
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/bill/myBill/myBillDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15QmlsbERldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJuYXZiYXIiLCJkYXRhIiwiaWQiLCJiaWxsSWQiLCJ0eXBlSWQiLCJiaWxsRGF0YURldGFpbCIsIm5hdmJhcnMiLCJjdXJyZW50VGFiIiwibWV0aG9kcyIsImUiLCJJZCIsImNhc2VJZCIsInR5cGUiLCJnZXRiaWxsIiwiYWpheCIsImdldERhdGEiLCJiaWxsaW5nSWQiLCJyZXNEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpbmRleCIsImNhc2VQYXlzIiwibm9ybWFsQ2hhcmdlTGlzdCIsInBheURhdGUiLCIkYXBwbHkiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsImxvZ0xpc3QiLCJpdGVtcyIsInN0YXJ0VGltZSIsImNoYXJnZUxpc3QiLCJjaGFyZ2VEYXRlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLGNBQWEsRUFBdEcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFQUFDLFVBQVMsRUFBQyxtQkFBa0IsY0FBbkIsRUFBVixFLFFBQ1RDLFUsR0FBYTtBQUNGQyxvQkFBUUE7QUFETixTLFFBR05DLEksR0FBTztBQUNIQyxnQkFBSSxFQUREO0FBRUhDLG9CQUFRLEVBRkw7QUFHSEMsb0JBQVEsQ0FITDtBQUlIQyw0QkFBZ0IsRUFKYjtBQUtIQyxxQkFBUyxDQUFDLE1BQUQs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TUFGZ0IsRUFFUjtBQUNKQywrQ0FBVyxLQUFLTixFQURaO0FBRUpDLDRDQUFRLEtBQUtBLE1BRlQ7QUFHSm1CLGdEQUFZLENBSFI7QUFJSkMsOENBQVU7QUFKTixpQ0FGUSxDOzs7QUFBaEJkLHVDOzhDQVNJQSxRQUFRRyxVO2dFQUNQLEcsd0JBT0EsRyx3QkFLQSxHOzs7O0FBWERGLHdDQUFRQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxxQ0FBS1osY0FBTCxHQUFzQlksUUFBUWhCLElBQVIsQ0FBYW9CLE1BQWIsQ0FBb0JjLFVBQTFDO0FBQ0EscUNBQVNiLEtBQVQsSUFBa0IsS0FBS2pCLGNBQUwsQ0FBb0I0QixLQUF0QyxFQUE2QztBQUN6Qyx5Q0FBSzVCLGNBQUwsQ0FBb0I0QixLQUFwQixDQUEwQlgsS0FBMUIsRUFBaUNjLFVBQWpDLEdBQThDLHFCQUFXLEtBQUsvQixjQUFMLENBQW9CNEIsS0FBcEIsQ0FBMEJYLEtBQTFCLEVBQWlDYyxVQUE1QyxDQUE5QztBQUNIOzs7O0FBR0QscUNBQUtULFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLSCxNQUFMOzs7O0FBR0EscUNBQUtDLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLSCxNQUFMOzs7Ozs7O0FBS1IscUNBQUtBLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0SHVCVyxlQUFLQyxJOztrQkFBbkIzQyxLIiwiZmlsZSI6Im15QmlsbERldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcclxuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wibmF2YmFyXCI6e1widi1vbjpjdXJyZW50VGFiXCI6XCJuYXZiYXJDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgbmF2YmFyOiBuYXZiYXJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgICAgYmlsbElkOiAnJyxcclxuICAgICAgICAgICAgdHlwZUlkOiAxLFxyXG4gICAgICAgICAgICBiaWxsRGF0YURldGFpbDoge30sXHJcbiAgICAgICAgICAgIG5hdmJhcnM6IFsn5a6a6aKd5pS26LS5JywgJ+mjjumZqeaUtui0uSddLFxyXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHt9O1xyXG4gICAgICAgIG9uTG9hZChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSWQgPSBlLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmNhc2VJZCA9IGUuY2FzZUlkO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVJZCA9IGUudHlwZVxyXG4gICAgICAgICAgICB0aGlzLmdldGJpbGwoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v6I635Y+W6LSm5Y2VXHJcbiAgICAgICAgYXN5bmMgZ2V0YmlsbCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZUlkID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxCaWxsaW5nL0dldENhc2VQYXlTdW1tYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlsbGluZ0lkOiB0aGlzLklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5jYXNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmlsbERhdGFEZXRhaWwgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmJpbGxEYXRhRGV0YWlsLmNhc2VQYXlzLm5vcm1hbENoYXJnZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZVBheXMubm9ybWFsQ2hhcmdlTGlzdFtpbmRleF0ucGF5RGF0ZSA9IGZvcm1hdFRpbWUodGhpcy5iaWxsRGF0YURldGFpbC5jYXNlUGF5cy5ub3JtYWxDaGFyZ2VMaXN0W2luZGV4XS5wYXlEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZUlkID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxCaWxsaW5nL0dldEJpbGxpbmdsb2dTdW1tYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlsbGluZ0lkOiB0aGlzLklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlSWQ6IHRoaXMuY2FzZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmlsbERhdGFEZXRhaWwgPSByZXNEYXRhLmRhdGEucmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuYmlsbERhdGFEZXRhaWwubG9nTGlzdC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbC5sb2dMaXN0Lml0ZW1zW2luZGV4XS5zdGFydFRpbWUgPSBmb3JtYXRUaW1lKHRoaXMuYmlsbERhdGFEZXRhaWwubG9nTGlzdC5pdGVtc1tpbmRleF0uc3RhcnRUaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGVJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQmlsbGluZy9HZXRDaGFyZ2VTdW1tYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlsbGluZ0lkOiB0aGlzLklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlSWQ6IHRoaXMuY2FzZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmlsbERhdGFEZXRhaWwgPSByZXNEYXRhLmRhdGEucmVzdWx0LmNoYXJnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5iaWxsRGF0YURldGFpbC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbC5pdGVtc1tpbmRleF0uY2hhcmdlRGF0ZSA9IGZvcm1hdFRpbWUodGhpcy5iaWxsRGF0YURldGFpbC5pdGVtc1tpbmRleF0uY2hhcmdlRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==