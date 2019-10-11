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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "returnInvoice": { "xmlns:v-bind": "", "v-bind:input.sync": "returnInvoice", "v-bind:inputValue.sync": "returnInvoiceValue", "v-bind:twoWayTitle.once": "returnInvoiceValue" } }, _this.$events = {}, _this.components = {
            returnInvoice: _input2.default
        }, _this.data = {
            addOpacity: 1,
            id: '',
            creatorUserId: '',
            billDataDetail: {},
            returnInvoiceValue: '',
            returnInvoice: {
                title: '退回原因 ',
                name: 'returnInvoice',
                warning: true,
                options: true
            }
        }, _this.methods = {
            submitData: function submitData() {
                if (this.returnInvoiceValue !== '') {
                    this.auditing();
                } else {
                    this.returnInvoice.warning = true;
                    this.$apply();
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(e) {
            this.id = e.id;
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
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/financialCharge/ReturnCharge', 'post', {
                                    Id: this.id,
                                    Remark: this.returnInvoiceValue
                                });

                            case 3:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 7 : _context.t0 === 403 ? 13 : _context.t0 === 500 ? 17 : 21;
                                break;

                            case 7:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 3];

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 2
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

            function auditing() {
                return _ref2.apply(this, arguments);
            }

            return auditing;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/cost/manageCost/manageCostExamine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUNvc3RFeGFtaW5lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmV0dXJuSW52b2ljZSIsImlucHV0MSIsImRhdGEiLCJhZGRPcGFjaXR5IiwiaWQiLCJjcmVhdG9yVXNlcklkIiwiYmlsbERhdGFEZXRhaWwiLCJyZXR1cm5JbnZvaWNlVmFsdWUiLCJ0aXRsZSIsIm5hbWUiLCJ3YXJuaW5nIiwib3B0aW9ucyIsIm1ldGhvZHMiLCJzdWJtaXREYXRhIiwiYXVkaXRpbmciLCIkYXBwbHkiLCJlIiwid3giLCJzaG93TG9hZGluZyIsIm1hc2siLCJzdWNjZXNzIiwiYWpheCIsImdldERhdGEiLCJJZCIsIlJlbWFyayIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsInJlZnJlc2giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixlQUF2QyxFQUF1RCwwQkFBeUIsb0JBQWhGLEVBQXFHLDJCQUEwQixvQkFBL0gsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsMkJBQWVDO0FBRGIsUyxRQUdOQyxJLEdBQU87QUFDSEMsd0JBQVksQ0FEVDtBQUVIQyxnQkFBSSxFQUZEO0FBR0hDLDJCQUFlLEVBSFo7QUFJSEMsNEJBQWdCLEVBSmI7QUFLSEMsZ0NBQW9CLEVBTGpCO0FBTUhQLDJCQUFlO0FBQ1hRLHVCQUFPLE9BREk7QUFFWEMsc0JBQU0sZUFGSztBQUdYQyx5QkFBUyxJQUhFO0FBSVhDLHlCQUFRO0FBSkc7QUFOWixTLFFBYU5DLE8sR0FBUztBQUNQQyxzQkFETyx3QkFDSztBQUNQLG9CQUFJLEtBQUtOLGtCQUFMLEtBQTRCLEVBQWhDLEVBQW9DO0FBQ2hDLHlCQUFLTyxRQUFMO0FBQ0gsaUJBRkQsTUFFSztBQUNELHlCQUFLZCxhQUFMLENBQW1CVSxPQUFuQixHQUEyQixJQUEzQjtBQUNBLHlCQUFLSyxNQUFMO0FBQ0g7QUFDTDtBQVJNLFM7Ozs7OytCQVVIQyxDLEVBQUc7QUFDTixpQkFBS1osRUFBTCxHQUFVWSxFQUFFWixFQUFaO0FBQ0EsaUJBQUtXLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7O0FBRUdFLG1DQUFHQyxXQUFILENBQWU7QUFDWFYsMkNBQU8sVUFESSxFQUNRO0FBQ25CVywwQ0FBTSxJQUZLLEVBRUM7QUFDWkMsNkNBQVMsbUJBQU07QUFDWCwrQ0FBS2pCLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSwrQ0FBS1ksTUFBTDtBQUNIO0FBTlUsaUNBQWY7O3VDQVFvQk0sZUFBS0MsT0FBTCxDQUNoQixnREFEZ0IsRUFFaEIsTUFGZ0IsRUFFUjtBQUNKQyx3Q0FBSSxLQUFLbkIsRUFETDtBQUVKb0IsNENBQVEsS0FBS2pCO0FBRlQsaUNBRlEsQzs7O0FBQWhCa0IsdUM7OENBT0lBLFFBQVFDLFU7Z0VBQ1AsRyx1QkFTQSxHLHdCQUtBLEc7Ozs7QUFiR0MscUMsR0FBUUMsaUI7QUFDUkMsd0MsR0FBV0YsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLEM7O0FBQ2ZELHlDQUFTM0IsSUFBVCxDQUFjNkIsT0FBZCxHQUF3QixJQUF4QjtBQUNBZCxtQ0FBR2UsWUFBSCxDQUFnQjtBQUNaQywyQ0FBTztBQURLLGlDQUFoQjtBQUdBLHFDQUFLbEIsTUFBTDs7OztBQUdBLHFDQUFLbUIsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUtyQixNQUFMOzs7O0FBR0EscUNBQUttQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3JCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcEVtQnNCLGVBQUtDLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoibWFuYWdlQ29zdEV4YW1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcclxuICAgIGltcG9ydCBpbnB1dDEgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInJldHVybkludm9pY2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcInJldHVybkludm9pY2VcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcInJldHVybkludm9pY2VWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInJldHVybkludm9pY2VWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIHJldHVybkludm9pY2U6IGlucHV0MSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRvclVzZXJJZDogJycsXHJcbiAgICAgICAgICAgIGJpbGxEYXRhRGV0YWlsOiB7fSxcclxuICAgICAgICAgICAgcmV0dXJuSW52b2ljZVZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcmV0dXJuSW52b2ljZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpgIDlm57ljp/lm6AgJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXR1cm5JbnZvaWNlJyxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOnRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgICBtZXRob2RzPSB7XHJcbiAgICAgICAgICAgc3VibWl0RGF0YSgpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmV0dXJuSW52b2ljZVZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaXRpbmcoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5JbnZvaWNlLndhcm5pbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGUuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFzeW5jIGF1ZGl0aW5nKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQ2hhcmdlL1JldHVybkNoYXJnZScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBSZW1hcms6IHRoaXMucmV0dXJuSW52b2ljZVZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAzXTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19