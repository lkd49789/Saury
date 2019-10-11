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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/bill/manageBill/manageBillDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUJpbGxEZXRhaWxzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibmF2YmFyIiwiZGF0YSIsImlkIiwiYmlsbElkIiwidHlwZUlkIiwiYmlsbERhdGFEZXRhaWwiLCJuYXZiYXJzIiwiY3VycmVudFRhYiIsIm1ldGhvZHMiLCJlIiwiSWQiLCJjYXNlSWQiLCJ0eXBlIiwiZ2V0YmlsbCIsImFqYXgiLCJnZXREYXRhIiwiYmlsbGluZ0lkIiwicmVzRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiaW5kZXgiLCJjYXNlUGF5cyIsIm5vcm1hbENoYXJnZUxpc3QiLCJwYXlEYXRlIiwiJGFwcGx5IiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJsb2dMaXN0IiwiaXRlbXMiLCJzdGFydFRpbWUiLCJjaGFyZ2VMaXN0IiwiY2hhcmdlRGF0ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELDBCQUF5QixZQUE1RSxFQUF5RixjQUFhLEVBQXRHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsbUJBQWtCLGNBQW5CLEVBQVYsRSxRQUNUQyxVLEdBQWE7QUFDRkMsb0JBQVFBO0FBRE4sUyxRQUdOQyxJLEdBQU87QUFDSEMsZ0JBQUksRUFERDtBQUVIQyxvQkFBUSxFQUZMO0FBR0hDLG9CQUFRLENBSEw7QUFJSEMsNEJBQWdCLEVBSmI7QUFLSEMscUJBQVMsQ0FBQyxN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RWhCLE1BRmdCLEVBRVI7QUFDSkMsK0NBQVcsS0FBS04sRUFEWjtBQUVKQyw0Q0FBUSxLQUFLQSxNQUZUO0FBR0ptQixnREFBWSxDQUhSO0FBSUpDLDhDQUFVO0FBSk4saUNBRlEsQzs7O0FBQWhCZCx1Qzs4Q0FTSUEsUUFBUUcsVTtnRUFDUCxHLHdCQU9BLEcsd0JBS0EsRzs7OztBQVhERix3Q0FBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0EscUNBQUtaLGNBQUwsR0FBc0JZLFFBQVFoQixJQUFSLENBQWFvQixNQUFiLENBQW9CYyxVQUExQztBQUNBLHFDQUFTYixLQUFULElBQWtCLEtBQUtqQixjQUFMLENBQW9CNEIsS0FBdEMsRUFBNkM7QUFDekMseUNBQUs1QixjQUFMLENBQW9CNEIsS0FBcEIsQ0FBMEJYLEtBQTFCLEVBQWlDYyxVQUFqQyxHQUE4QyxxQkFBVyxLQUFLL0IsY0FBTCxDQUFvQjRCLEtBQXBCLENBQTBCWCxLQUExQixFQUFpQ2MsVUFBNUMsQ0FBOUM7QUFDSDs7OztBQUdELHFDQUFLVCxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS0gsTUFBTDs7OztBQUdBLHFDQUFLQyxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS0gsTUFBTDs7Ozs7OztBQUtSLHFDQUFLQSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEh1QlcsZUFBS0MsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJtYW5hZ2VCaWxsRGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xyXG4gICAgaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGZvcm1hdFRpbWVcclxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZiYXJzLm9uY2VcIjpcIm5hdmJhcnNcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJuYXZiYXJcIjp7XCJ2LW9uOmN1cnJlbnRUYWJcIjpcIm5hdmJhckNoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBuYXZiYXI6IG5hdmJhclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICBiaWxsSWQ6ICcnLFxyXG4gICAgICAgICAgICB0eXBlSWQ6IDEsXHJcbiAgICAgICAgICAgIGJpbGxEYXRhRGV0YWlsOiB7fSxcclxuICAgICAgICAgICAgbmF2YmFyczogWyflrprpop3mlLbotLknLCAn6aOO6Zmp5pS26LS5J10sXHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge307XHJcbiAgICAgICAgb25Mb2FkKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5JZCA9IGUuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzZUlkID0gZS5jYXNlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUlkID0gZS50eXBlXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/ojrflj5botKbljZVcclxuICAgICAgICBhc3luYyBnZXRiaWxsKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlSWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEJpbGxpbmcvR2V0Q2FzZVBheVN1bW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWxsaW5nSWQ6IHRoaXMuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmNhc2VJZCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuYmlsbERhdGFEZXRhaWwuY2FzZVBheXMubm9ybWFsQ2hhcmdlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbC5jYXNlUGF5cy5ub3JtYWxDaGFyZ2VMaXN0W2luZGV4XS5wYXlEYXRlID0gZm9ybWF0VGltZSh0aGlzLmJpbGxEYXRhRGV0YWlsLmNhc2VQYXlzLm5vcm1hbENoYXJnZUxpc3RbaW5kZXhdLnBheURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlSWQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEJpbGxpbmcvR2V0QmlsbGluZ2xvZ1N1bW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWxsaW5nSWQ6IHRoaXMuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VJZDogdGhpcy5jYXNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbCA9IHJlc0RhdGEuZGF0YS5yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5iaWxsRGF0YURldGFpbC5sb2dMaXN0Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhRGV0YWlsLmxvZ0xpc3QuaXRlbXNbaW5kZXhdLnN0YXJ0VGltZSA9IGZvcm1hdFRpbWUodGhpcy5iaWxsRGF0YURldGFpbC5sb2dMaXN0Lml0ZW1zW2luZGV4XS5zdGFydFRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZUlkID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxCaWxsaW5nL0dldENoYXJnZVN1bW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWxsaW5nSWQ6IHRoaXMuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VJZDogdGhpcy5jYXNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWxsRGF0YURldGFpbCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuY2hhcmdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmJpbGxEYXRhRGV0YWlsLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbGxEYXRhRGV0YWlsLml0ZW1zW2luZGV4XS5jaGFyZ2VEYXRlID0gZm9ybWF0VGltZSh0aGlzLmJpbGxEYXRhRGV0YWlsLml0ZW1zW2luZGV4XS5jaGFyZ2VEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19