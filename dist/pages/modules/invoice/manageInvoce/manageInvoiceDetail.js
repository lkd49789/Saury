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
            invoiceDataDetail: {},
            invoiceDetailId: ''
        }, _this.methods = {
            toAuditing: function toAuditing(type) {
                _wepy2.default.navigateTo({
                    url: './manageInvoiceExamine?id=' + this.invoiceDataDetail.id + '&type=' + type
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.invoiceDetailId = options.id;
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.getbill();
        }
        //获取账单

    }, {
        key: 'getbill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
                var resData, creationTime, index, billingsCreationTime, operationsCreationTime;
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
                                return _ajax2.default.getData('/api/services/web/financialInvoice/GetInvoice', 'post', {
                                    id: this.invoiceDetailId
                                });

                            case 3:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 7 : _context.t0 === 403 ? 14 : _context.t0 === 500 ? 18 : 22;
                                break;

                            case 7:
                                this.invoiceDataDetail = resData.data.result;
                                creationTime = (0, _api.formatDate)(this.invoiceDataDetail.creationTime);

                                this.invoiceDataDetail.creationTime = creationTime[0] + '-' + creationTime[1] + '-' + creationTime[2] + ' ' + creationTime[3] + ':' + creationTime[4] + ':' + creationTime[5];
                                for (index in this.invoiceDataDetail.invoiceBillings) {
                                    billingsCreationTime = (0, _api.formatDate)(this.invoiceDataDetail.invoiceBillings[index].creationTime);

                                    this.invoiceDataDetail.invoiceBillings[index].creationTime = billingsCreationTime[0] + '-' + billingsCreationTime[1] + '-' + billingsCreationTime[2] + ' ' + billingsCreationTime[3] + ':' + billingsCreationTime[4] + ':' + billingsCreationTime[5];
                                }
                                for (index in this.invoiceDataDetail.invoiceOperations) {
                                    operationsCreationTime = (0, _api.formatDate)(this.invoiceDataDetail.invoiceOperations[index].creationTime);

                                    this.invoiceDataDetail.invoiceOperations[index].creationTime = operationsCreationTime[0] + '-' + operationsCreationTime[1] + '-' + operationsCreationTime[2] + ' ' + operationsCreationTime[3] + ':' + operationsCreationTime[4] + ':' + operationsCreationTime[5];
                                }
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
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/invoice/manageInvoce/manageInvoiceDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUludm9pY2VEZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiZGF0YSIsImludm9pY2VEYXRhRGV0YWlsIiwiaW52b2ljZURldGFpbElkIiwibWV0aG9kcyIsInRvQXVkaXRpbmciLCJ0eXBlIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpZCIsIm9wdGlvbnMiLCIkYXBwbHkiLCJnZXRiaWxsIiwibnVtIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInN1Y2Nlc3MiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiY3JlYXRpb25UaW1lIiwiaW5kZXgiLCJpbnZvaWNlQmlsbGluZ3MiLCJiaWxsaW5nc0NyZWF0aW9uVGltZSIsImludm9pY2VPcGVyYXRpb25zIiwib3BlcmF0aW9uc0NyZWF0aW9uVGltZSIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0hDLCtCQUFtQixFQURoQjtBQUVIQyw2QkFBaUI7QUFGZCxTLFFBSVBDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsSUFETCxFQUNXO0FBQ2JDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLCtCQUErQixLQUFLUCxpQkFBTCxDQUF1QlEsRUFBdEQsR0FBMEQsUUFBMUQsR0FBcUVKO0FBRDlELGlCQUFoQjtBQUdIO0FBTEssUzs7Ozs7K0JBT0hLLE8sRUFBUztBQUNaLGlCQUFLUixlQUFMLEdBQXVCUSxRQUFRRCxFQUEvQjtBQUNBLGlCQUFLRSxNQUFMO0FBQ0g7OztpQ0FDUTtBQUNMLGlCQUFLQyxPQUFMO0FBQ0g7QUFDRDs7Ozs7aUdBQ2NDLEc7Ozs7OztBQUNWQyxtQ0FBR0MsV0FBSCxDQUFlO0FBQ1hDLDJDQUFPLFlBREksRUFDVTtBQUNyQkMsMENBQU0sSUFGSyxFQUVDO0FBQ1pDLDZDQUFTLHNCQUFPLENBQUU7QUFIUCxpQ0FBZjs7dUNBS29CQyxlQUFLQyxPQUFMLENBQ2hCLCtDQURnQixFQUVoQixNQUZnQixFQUVSO0FBQ0pYLHdDQUFJLEtBQUtQO0FBREwsaUNBRlEsQzs7O0FBQWhCbUIsdUM7OENBTUlBLFFBQVFDLFU7Z0VBQ1AsRyx1QkFjQSxHLHdCQUtBLEc7Ozs7QUFsQkQscUNBQUtyQixpQkFBTCxHQUF5Qm9CLFFBQVFyQixJQUFSLENBQWF1QixNQUF0QztBQUNJQyw0QyxHQUFlLHFCQUFXLEtBQUt2QixpQkFBTCxDQUF1QnVCLFlBQWxDLEM7O0FBQ25CLHFDQUFLdkIsaUJBQUwsQ0FBdUJ1QixZQUF2QixHQUFxQ0EsYUFBYSxDQUFiLElBQWdCLEdBQWhCLEdBQW9CQSxhQUFhLENBQWIsQ0FBcEIsR0FBb0MsR0FBcEMsR0FBd0NBLGFBQWEsQ0FBYixDQUF4QyxHQUF3RCxHQUF4RCxHQUE0REEsYUFBYSxDQUFiLENBQTVELEdBQTRFLEdBQTVFLEdBQWdGQSxhQUFhLENBQWIsQ0FBaEYsR0FBZ0csR0FBaEcsR0FBb0dBLGFBQWEsQ0FBYixDQUF6STtBQUNBLHFDQUFTQyxLQUFULElBQWtCLEtBQUt4QixpQkFBTCxDQUF1QnlCLGVBQXpDLEVBQTBEO0FBQ2xEQyx3REFEa0QsR0FDM0IscUJBQVcsS0FBSzFCLGlCQUFMLENBQXVCeUIsZUFBdkIsQ0FBdUNELEtBQXZDLEVBQThDRCxZQUF6RCxDQUQyQjs7QUFFckQseUNBQUt2QixpQkFBTCxDQUF1QnlCLGVBQXZCLENBQXVDRCxLQUF2QyxFQUE4Q0QsWUFBOUMsR0FBMkRHLHFCQUFxQixDQUFyQixJQUF3QixHQUF4QixHQUE0QkEscUJBQXFCLENBQXJCLENBQTVCLEdBQW9ELEdBQXBELEdBQXdEQSxxQkFBcUIsQ0FBckIsQ0FBeEQsR0FBZ0YsR0FBaEYsR0FBb0ZBLHFCQUFxQixDQUFyQixDQUFwRixHQUE0RyxHQUE1RyxHQUFnSEEscUJBQXFCLENBQXJCLENBQWhILEdBQXdJLEdBQXhJLEdBQTRJQSxxQkFBcUIsQ0FBckIsQ0FBdk07QUFDSjtBQUNELHFDQUFTRixLQUFULElBQWtCLEtBQUt4QixpQkFBTCxDQUF1QjJCLGlCQUF6QyxFQUE0RDtBQUNyREMsMERBRHFELEdBQzdCLHFCQUFXLEtBQUs1QixpQkFBTCxDQUF1QjJCLGlCQUF2QixDQUF5Q0gsS0FBekMsRUFBZ0RELFlBQTNELENBRDZCOztBQUV4RCx5Q0FBS3ZCLGlCQUFMLENBQXVCMkIsaUJBQXZCLENBQXlDSCxLQUF6QyxFQUFnREQsWUFBaEQsR0FBNkRLLHVCQUF1QixDQUF2QixJQUEwQixHQUExQixHQUE4QkEsdUJBQXVCLENBQXZCLENBQTlCLEdBQXdELEdBQXhELEdBQTREQSx1QkFBdUIsQ0FBdkIsQ0FBNUQsR0FBc0YsR0FBdEYsR0FBMEZBLHVCQUF1QixDQUF2QixDQUExRixHQUFvSCxHQUFwSCxHQUF3SEEsdUJBQXVCLENBQXZCLENBQXhILEdBQWtKLEdBQWxKLEdBQXNKQSx1QkFBdUIsQ0FBdkIsQ0FBbk47QUFDSDtBQUNELHFDQUFLbEIsTUFBTDs7OztBQUdBLHFDQUFLbUIsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUtyQixNQUFMOzs7O0FBR0EscUNBQUttQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3JCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeERtQkwsZUFBSzJCLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoibWFuYWdlSW52b2ljZURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXREYXRlXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGludm9pY2VEYXRhRGV0YWlsOiB7fSxcclxuICAgICAgICAgICAgaW52b2ljZURldGFpbElkOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRvQXVkaXRpbmcodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL21hbmFnZUludm9pY2VFeGFtaW5lP2lkPScgKyB0aGlzLmludm9pY2VEYXRhRGV0YWlsLmlkICsnJnR5cGU9JyArIHR5cGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmludm9pY2VEZXRhaWxJZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPlui0puWNlVxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwobnVtKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEludm9pY2UvR2V0SW52b2ljZScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pbnZvaWNlRGV0YWlsSWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2ljZURhdGFEZXRhaWwgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjcmVhdGlvblRpbWUgPSBmb3JtYXREYXRlKHRoaXMuaW52b2ljZURhdGFEZXRhaWwuY3JlYXRpb25UaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2ljZURhdGFEZXRhaWwuY3JlYXRpb25UaW1lID1jcmVhdGlvblRpbWVbMF0rJy0nK2NyZWF0aW9uVGltZVsxXSsnLScrY3JlYXRpb25UaW1lWzJdKycgJytjcmVhdGlvblRpbWVbM10rJzonK2NyZWF0aW9uVGltZVs0XSsnOicrY3JlYXRpb25UaW1lWzVdXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5pbnZvaWNlRGF0YURldGFpbC5pbnZvaWNlQmlsbGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJpbGxpbmdzQ3JlYXRpb25UaW1lID0gZm9ybWF0RGF0ZSh0aGlzLmludm9pY2VEYXRhRGV0YWlsLmludm9pY2VCaWxsaW5nc1tpbmRleF0uY3JlYXRpb25UaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZvaWNlRGF0YURldGFpbC5pbnZvaWNlQmlsbGluZ3NbaW5kZXhdLmNyZWF0aW9uVGltZT1iaWxsaW5nc0NyZWF0aW9uVGltZVswXSsnLScrYmlsbGluZ3NDcmVhdGlvblRpbWVbMV0rJy0nK2JpbGxpbmdzQ3JlYXRpb25UaW1lWzJdKycgJytiaWxsaW5nc0NyZWF0aW9uVGltZVszXSsnOicrYmlsbGluZ3NDcmVhdGlvblRpbWVbNF0rJzonK2JpbGxpbmdzQ3JlYXRpb25UaW1lWzVdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaW52b2ljZURhdGFEZXRhaWwuaW52b2ljZU9wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BlcmF0aW9uc0NyZWF0aW9uVGltZT0gZm9ybWF0RGF0ZSh0aGlzLmludm9pY2VEYXRhRGV0YWlsLmludm9pY2VPcGVyYXRpb25zW2luZGV4XS5jcmVhdGlvblRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludm9pY2VEYXRhRGV0YWlsLmludm9pY2VPcGVyYXRpb25zW2luZGV4XS5jcmVhdGlvblRpbWU9b3BlcmF0aW9uc0NyZWF0aW9uVGltZVswXSsnLScrb3BlcmF0aW9uc0NyZWF0aW9uVGltZVsxXSsnLScrb3BlcmF0aW9uc0NyZWF0aW9uVGltZVsyXSsnICcrb3BlcmF0aW9uc0NyZWF0aW9uVGltZVszXSsnOicrb3BlcmF0aW9uc0NyZWF0aW9uVGltZVs0XSsnOicrb3BlcmF0aW9uc0NyZWF0aW9uVGltZVs1XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=