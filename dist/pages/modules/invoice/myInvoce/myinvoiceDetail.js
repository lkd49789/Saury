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
            invoiceDetailId: '',
            avatar: []
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
                var resData, creationTime, index, billingsCreationTime, workflowsCreationTime, http, avatar;
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

                                console.log(resData);
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 8 : _context.t0 === 403 ? 28 : _context.t0 === 500 ? 32 : 36;
                                break;

                            case 8:
                                console.log(resData);
                                this.invoiceDataDetail = resData.data.result;
                                creationTime = (0, _api.formatDate)(this.invoiceDataDetail.creationTime);

                                this.invoiceDataDetail.creationTime = creationTime[0] + '-' + creationTime[1] + '-' + creationTime[2] + ' ' + creationTime[3] + ':' + creationTime[4] + ':' + creationTime[5];
                                for (index in this.invoiceDataDetail.invoiceBillings) {
                                    billingsCreationTime = (0, _api.formatDate)(this.invoiceDataDetail.invoiceBillings[index].creationTime);

                                    this.invoiceDataDetail.invoiceBillings[index].creationTime = billingsCreationTime[0] + '-' + billingsCreationTime[1] + '-' + billingsCreationTime[2] + ' ' + billingsCreationTime[3] + ':' + billingsCreationTime[4] + ':' + billingsCreationTime[5];
                                }
                                _context.t1 = regeneratorRuntime.keys(this.invoiceDataDetail.workflows);

                            case 14:
                                if ((_context.t2 = _context.t1()).done) {
                                    _context.next = 26;
                                    break;
                                }

                                index = _context.t2.value;
                                workflowsCreationTime = (0, _api.formatDate)(this.invoiceDataDetail.workflows[index].creationTime);

                                this.invoiceDataDetail.workflows[index].creationTime = workflowsCreationTime[0] + '-' + workflowsCreationTime[1] + '-' + workflowsCreationTime[2] + ' ' + workflowsCreationTime[3] + ':' + workflowsCreationTime[4] + ':' + workflowsCreationTime[5];
                                http = "/api/services/web/personal/GetEmployeePhoto?id=" + this.invoiceDataDetail.workflows[index].creatorUserId;
                                _context.next = 21;
                                return _ajax2.default.getAavatar(http);

                            case 21:
                                avatar = _context.sent;

                                this.avatar[index] = avatar;
                                this.$apply();
                                _context.next = 14;
                                break;

                            case 26:
                                this.$apply();
                                return _context.abrupt('break', 37);

                            case 28:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 37);

                            case 32:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 37);

                            case 36:
                                return _context.abrupt('break', 37);

                            case 37:
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
        //发送审核

    }, {
        key: 'toAuditing',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
                                return _ajax2.default.getData('/api/services/web/financialInvoice/SubmitInvoice', 'post', {
                                    id: this.invoiceDataDetail.id
                                });

                            case 3:
                                resData = _context2.sent;
                                _context2.t0 = resData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 7 : _context2.t0 === 403 ? 14 : _context2.t0 === 500 ? 18 : 22;
                                break;

                            case 7:
                                console.log(resData);
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

            function toAuditing() {
                return _ref3.apply(this, arguments);
            }

            return toAuditing;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/invoice/myInvoce/myinvoiceDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15aW52b2ljZURldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW52b2ljZURhdGFEZXRhaWwiLCJpbnZvaWNlRGV0YWlsSWQiLCJhdmF0YXIiLCJtZXRob2RzIiwib3B0aW9ucyIsImlkIiwiJGFwcGx5IiwiZ2V0YmlsbCIsIm51bSIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJjcmVhdGlvblRpbWUiLCJpbmRleCIsImludm9pY2VCaWxsaW5ncyIsImJpbGxpbmdzQ3JlYXRpb25UaW1lIiwid29ya2Zsb3dzIiwid29ya2Zsb3dzQ3JlYXRpb25UaW1lIiwiaHR0cCIsImNyZWF0b3JVc2VySWQiLCJnZXRBYXZhdGFyIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJhZGRPcGFjaXR5IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsInJlZnJlc2giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQU1xQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDSEMsK0JBQW1CLEVBRGhCO0FBRUhDLDZCQUFpQixFQUZkO0FBR0hDLG9CQUFRO0FBSEwsUyxRQUtQQyxPLEdBQVUsRTs7Ozs7K0JBRUhDLE8sRUFBUztBQUNaLGlCQUFLSCxlQUFMLEdBQXVCRyxRQUFRQyxFQUEvQjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0g7OztpQ0FDUTtBQUNMLGlCQUFLQyxPQUFMO0FBQ0g7QUFDRDs7Ozs7aUdBQ2NDLEc7Ozs7OztBQUNWQyxtQ0FBR0MsV0FBSCxDQUFlO0FBQ1hDLDJDQUFPLFlBREksRUFDVTtBQUNyQkMsMENBQU0sSUFGSyxFQUVDO0FBQ1pDLDZDQUFTLHNCQUFPLENBQUU7QUFIUCxpQ0FBZjs7dUNBS29CQyxlQUFLQyxPQUFMLENBQ2hCLCtDQURnQixFQUVoQixNQUZnQixFQUVSO0FBQ0pWLHdDQUFJLEtBQUtKO0FBREwsaUNBRlEsQzs7O0FBQWhCZSx1Qzs7QUFNSkMsd0NBQVFDLEdBQVIsQ0FBWUYsT0FBWjs4Q0FDUUEsUUFBUUcsVTtnRUFDUCxHLHVCQW1CQSxHLHdCQUtBLEc7Ozs7QUF2QkRGLHdDQUFRQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxxQ0FBS2hCLGlCQUFMLEdBQXlCZ0IsUUFBUWpCLElBQVIsQ0FBYXFCLE1BQXRDO0FBQ0lDLDRDLEdBQWUscUJBQVcsS0FBS3JCLGlCQUFMLENBQXVCcUIsWUFBbEMsQzs7QUFDbkIscUNBQUtyQixpQkFBTCxDQUF1QnFCLFlBQXZCLEdBQXFDQSxhQUFhLENBQWIsSUFBZ0IsR0FBaEIsR0FBb0JBLGFBQWEsQ0FBYixDQUFwQixHQUFvQyxHQUFwQyxHQUF3Q0EsYUFBYSxDQUFiLENBQXhDLEdBQXdELEdBQXhELEdBQTREQSxhQUFhLENBQWIsQ0FBNUQsR0FBNEUsR0FBNUUsR0FBZ0ZBLGFBQWEsQ0FBYixDQUFoRixHQUFnRyxHQUFoRyxHQUFvR0EsYUFBYSxDQUFiLENBQXpJO0FBQ0EscUNBQVNDLEtBQVQsSUFBa0IsS0FBS3RCLGlCQUFMLENBQXVCdUIsZUFBekMsRUFBMEQ7QUFDbERDLHdEQURrRCxHQUM1QixxQkFBVyxLQUFLeEIsaUJBQUwsQ0FBdUJ1QixlQUF2QixDQUF1Q0QsS0FBdkMsRUFBOENELFlBQXpELENBRDRCOztBQUV0RCx5Q0FBS3JCLGlCQUFMLENBQXVCdUIsZUFBdkIsQ0FBdUNELEtBQXZDLEVBQThDRCxZQUE5QyxHQUEyREcscUJBQXFCLENBQXJCLElBQXdCLEdBQXhCLEdBQTRCQSxxQkFBcUIsQ0FBckIsQ0FBNUIsR0FBb0QsR0FBcEQsR0FBd0RBLHFCQUFxQixDQUFyQixDQUF4RCxHQUFnRixHQUFoRixHQUFvRkEscUJBQXFCLENBQXJCLENBQXBGLEdBQTRHLEdBQTVHLEdBQWdIQSxxQkFBcUIsQ0FBckIsQ0FBaEgsR0FBd0ksR0FBeEksR0FBNElBLHFCQUFxQixDQUFyQixDQUF2TTtBQUNIO3NFQUNpQixLQUFLeEIsaUJBQUwsQ0FBdUJ5QixTOzs7Ozs7OztBQUFoQ0gscUM7QUFDREkscUQsR0FBc0IscUJBQVcsS0FBSzFCLGlCQUFMLENBQXVCeUIsU0FBdkIsQ0FBaUNILEtBQWpDLEVBQXdDRCxZQUFuRCxDOztBQUMxQixxQ0FBS3JCLGlCQUFMLENBQXVCeUIsU0FBdkIsQ0FBaUNILEtBQWpDLEVBQXdDRCxZQUF4QyxHQUF1REssc0JBQXNCLENBQXRCLElBQXlCLEdBQXpCLEdBQTZCQSxzQkFBc0IsQ0FBdEIsQ0FBN0IsR0FBc0QsR0FBdEQsR0FBMERBLHNCQUFzQixDQUF0QixDQUExRCxHQUFtRixHQUFuRixHQUF1RkEsc0JBQXNCLENBQXRCLENBQXZGLEdBQWdILEdBQWhILEdBQW9IQSxzQkFBc0IsQ0FBdEIsQ0FBcEgsR0FBNkksR0FBN0ksR0FBaUpBLHNCQUFzQixDQUF0QixDQUF4TTtBQUNJQyxvQyxHQUFPLG9EQUFvRCxLQUFLM0IsaUJBQUwsQ0FBdUJ5QixTQUF2QixDQUFpQ0gsS0FBakMsRUFBd0NNLGE7O3VDQUNwRmQsZUFBS2UsVUFBTCxDQUFnQkYsSUFBaEIsQzs7O0FBQWZ6QixzQzs7QUFDSixxQ0FBS0EsTUFBTCxDQUFZb0IsS0FBWixJQUFxQnBCLE1BQXJCO0FBQ0EscUNBQUtJLE1BQUw7Ozs7O0FBRUoscUNBQUtBLE1BQUw7Ozs7QUFHQSxxQ0FBS3dCLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLMUIsTUFBTDs7OztBQUdBLHFDQUFLd0IsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUsxQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aOzs7Ozs7Ozs7Ozs7O0FBRUlHLG1DQUFHQyxXQUFILENBQWU7QUFDWEMsMkNBQU8sVUFESSxFQUNRO0FBQ25CQywwQ0FBTSxJQUZLLEVBRUM7QUFDWkMsNkNBQVMsbUJBQU07QUFDWCwrQ0FBS29CLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSwrQ0FBSzNCLE1BQUw7QUFDSDtBQU5VLGlDQUFmOzt1Q0FRb0JRLGVBQUtDLE9BQUwsQ0FDaEIsa0RBRGdCLEVBRWhCLE1BRmdCLEVBRVI7QUFDSlYsd0NBQUksS0FBS0wsaUJBQUwsQ0FBdUJLO0FBRHZCLGlDQUZRLEM7OztBQUFoQlcsdUM7K0NBTUlBLFFBQVFHLFU7a0VBQ1AsRyx3QkFVQSxHLHlCQUtBLEc7Ozs7QUFkREYsd0NBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNJa0IscUMsR0FBUUMsaUI7QUFDUkMsd0MsR0FBV0YsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLEM7O0FBQ2ZELHlDQUFTckMsSUFBVCxDQUFjdUMsT0FBZCxHQUF3QixJQUF4QjtBQUNBN0IsbUNBQUc4QixZQUFILENBQWdCO0FBQ1pDLDJDQUFPO0FBREssaUNBQWhCO0FBR0EscUNBQUtsQyxNQUFMOzs7O0FBR0EscUNBQUt3QixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBSzFCLE1BQUw7Ozs7QUFHQSxxQ0FBS3dCLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLMUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuR21CbUMsZUFBS0MsSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJteWludm9pY2VEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgZm9ybWF0RGF0ZVxyXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBnZXRVc2VyQXZhdGFyXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7fTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBpbnZvaWNlRGF0YURldGFpbDoge30sXHJcbiAgICAgICAgICAgIGludm9pY2VEZXRhaWxJZDogJycsXHJcbiAgICAgICAgICAgIGF2YXRhcjogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmludm9pY2VEZXRhaWxJZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPlui0puWNlVxyXG4gICAgICAgIGFzeW5jIGdldGJpbGwobnVtKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEludm9pY2UvR2V0SW52b2ljZScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pbnZvaWNlRGV0YWlsSWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludm9pY2VEYXRhRGV0YWlsID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3JlYXRpb25UaW1lID0gZm9ybWF0RGF0ZSh0aGlzLmludm9pY2VEYXRhRGV0YWlsLmNyZWF0aW9uVGltZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludm9pY2VEYXRhRGV0YWlsLmNyZWF0aW9uVGltZSA9Y3JlYXRpb25UaW1lWzBdKyctJytjcmVhdGlvblRpbWVbMV0rJy0nK2NyZWF0aW9uVGltZVsyXSsnICcrY3JlYXRpb25UaW1lWzNdKyc6JytjcmVhdGlvblRpbWVbNF0rJzonK2NyZWF0aW9uVGltZVs1XVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaW52b2ljZURhdGFEZXRhaWwuaW52b2ljZUJpbGxpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiaWxsaW5nc0NyZWF0aW9uVGltZT0gZm9ybWF0RGF0ZSh0aGlzLmludm9pY2VEYXRhRGV0YWlsLmludm9pY2VCaWxsaW5nc1tpbmRleF0uY3JlYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZvaWNlRGF0YURldGFpbC5pbnZvaWNlQmlsbGluZ3NbaW5kZXhdLmNyZWF0aW9uVGltZT1iaWxsaW5nc0NyZWF0aW9uVGltZVswXSsnLScrYmlsbGluZ3NDcmVhdGlvblRpbWVbMV0rJy0nK2JpbGxpbmdzQ3JlYXRpb25UaW1lWzJdKycgJytiaWxsaW5nc0NyZWF0aW9uVGltZVszXSsnOicrYmlsbGluZ3NDcmVhdGlvblRpbWVbNF0rJzonK2JpbGxpbmdzQ3JlYXRpb25UaW1lWzVdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaW52b2ljZURhdGFEZXRhaWwud29ya2Zsb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3b3JrZmxvd3NDcmVhdGlvblRpbWU9Zm9ybWF0RGF0ZSh0aGlzLmludm9pY2VEYXRhRGV0YWlsLndvcmtmbG93c1tpbmRleF0uY3JlYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZvaWNlRGF0YURldGFpbC53b3JrZmxvd3NbaW5kZXhdLmNyZWF0aW9uVGltZSA9IHdvcmtmbG93c0NyZWF0aW9uVGltZVswXSsnLScrd29ya2Zsb3dzQ3JlYXRpb25UaW1lWzFdKyctJyt3b3JrZmxvd3NDcmVhdGlvblRpbWVbMl0rJyAnK3dvcmtmbG93c0NyZWF0aW9uVGltZVszXSsnOicrd29ya2Zsb3dzQ3JlYXRpb25UaW1lWzRdKyc6Jyt3b3JrZmxvd3NDcmVhdGlvblRpbWVbNV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0dHAgPSBcIi9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9XCIgKyB0aGlzLmludm9pY2VEYXRhRGV0YWlsLndvcmtmbG93c1tpbmRleF0uY3JlYXRvclVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXZhdGFyID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YXRhcltpbmRleF0gPSBhdmF0YXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj5HpgIHlrqHmoLhcclxuICAgICAgICBhc3luYyB0b0F1ZGl0aW5nKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsSW52b2ljZS9TdWJtaXRJbnZvaWNlJyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmludm9pY2VEYXRhRGV0YWlsLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19