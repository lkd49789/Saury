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
            costData: {},
            invoiceDetailId: '',
            avatar: []
        }, _this.methods = {
            toFOR: function toFOR() {
                wx.navigateTo({
                    url: '../myCost/financialOperationRecord?invoiceDetailId=' + this.invoiceDetailId
                });
            },
            toAuditing: function toAuditing(type) {
                if (type == 0) {
                    _wepy2.default.navigateTo({
                        url: './manageCostExamine?id=' + this.costData.id + '&type=' + type
                    });
                } else {
                    this.approval(this.costData.id);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.invoiceDetailId = options.id;
            this.getbill();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
        //获取账单

    }, {
        key: 'getbill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
                var resData, item, index;
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
                                return _ajax2.default.getData('/api/services/web/financialCharge/GetCharge', 'post', {
                                    id: this.invoiceDetailId
                                });

                            case 3:
                                resData = _context.sent;

                                console.log(resData);
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 8 : _context.t0 === 403 ? 15 : _context.t0 === 500 ? 19 : 23;
                                break;

                            case 8:
                                this.costData = resData.data.result;
                                this.costData.creationTime = (0, _api.formatTime)(this.costData.creationTime);
                                for (item in this.costData.chargeItems) {
                                    this.costData.chargeItems[item].chargeDate = (0, _api.formatTime)(this.costData.chargeItems[item].chargeDate);
                                    this.costData.chargeItems[item].chargeRate = (Number(this.costData.chargeItems[item].chargeRate) * 100).toFixed(2) + '%';
                                }
                                for (index in this.costData.invoiceBillings) {
                                    this.costData.invoiceBillings[index].creationTime = (0, _api.formatTime)(this.costData.invoiceBillings[index].creationTime);
                                }
                                for (index in this.costData.workflows) {
                                    this.costData.workflows[index].creationTime = (0, _api.formatTime)(this.costData.workflows[index].creationTime);
                                    // var http = "/api/services/web/personal/GetEmployeePhoto?id=" + this.costData.workflows[index].creatorUserId
                                    // var avatar = await ajax.getAavatar(http);
                                    // this.costData.workflows[index].avatar = avatar;
                                    // this.$apply();
                                }

                                this.$apply();
                                return _context.abrupt('break', 24);

                            case 15:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 24);

                            case 19:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 24);

                            case 23:
                                return _context.abrupt('break', 24);

                            case 24:
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
    }, {
        key: 'approval',
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

            function approval(_x2) {
                return _ref3.apply(this, arguments);
            }

            return approval;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/cost/manageCost/manageCostDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUNvc3REZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvc3REYXRhIiwiaW52b2ljZURldGFpbElkIiwiYXZhdGFyIiwibWV0aG9kcyIsInRvRk9SIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9BdWRpdGluZyIsInR5cGUiLCJ3ZXB5IiwiaWQiLCJhcHByb3ZhbCIsIm9wdGlvbnMiLCJnZXRiaWxsIiwiJGFwcGx5IiwibnVtIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJjcmVhdGlvblRpbWUiLCJpdGVtIiwiY2hhcmdlSXRlbXMiLCJjaGFyZ2VEYXRlIiwiY2hhcmdlUmF0ZSIsIk51bWJlciIsInRvRml4ZWQiLCJpbmRleCIsImludm9pY2VCaWxsaW5ncyIsIndvcmtmbG93cyIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwiYWRkT3BhY2l0eSIsIklkIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsInJlZnJlc2giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNIQyxzQkFBVSxFQURQO0FBRUhDLDZCQUFpQixFQUZkO0FBR0hDLG9CQUFRO0FBSEwsUyxRQUtQQyxPLEdBQVU7QUFDSkMsaUJBREksbUJBQ0k7QUFDTkMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSyx3REFBd0QsS0FBS047QUFEeEQsaUJBQWQ7QUFHSCxhQUxLO0FBTU5PLHNCQU5NLHNC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O0FBQ25CQywwQ0FBTSxJQUZLLEVBRUM7QUFDWkMsNkNBQVMsbUJBQU07QUFDWCwrQ0FBS3FCLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSwrQ0FBSzFCLE1BQUw7QUFDSDtBQU5VLGlDQUFmOzt1Q0FRb0JNLGVBQUtDLE9BQUwsQ0FDaEIsaURBRGdCLEVBRWhCLE1BRmdCLEVBRVI7QUFDSm9CLHdDQUFJL0I7QUFEQSxpQ0FGUSxDOzs7QUFBaEJZLHVDOztBQU1KQyx3Q0FBUUMsR0FBUixDQUFZRixPQUFaOytDQUNRQSxRQUFRRyxVO2tFQUNQLEcsd0JBU0EsRyx5QkFLQSxHOzs7O0FBYkdpQixxQyxHQUFRQyxpQjtBQUNSQyx3QyxHQUFXRixNQUFNQSxNQUFNRyxNQUFOLEdBQWUsQ0FBckIsQzs7QUFDZkQseUNBQVM5QyxJQUFULENBQWNnRCxPQUFkLEdBQXdCLElBQXhCO0FBQ0ExQyxtQ0FBRzJDLFlBQUgsQ0FBZ0I7QUFDWkMsMkNBQU87QUFESyxpQ0FBaEI7QUFHQSxxQ0FBS2xDLE1BQUw7Ozs7QUFHQSxxQ0FBS3VCLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLekIsTUFBTDs7OztBQUdBLHFDQUFLdUIsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUt6QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxIbUJMLGVBQUt3QyxJOztrQkFBbkJyRCxLIiwiZmlsZSI6Im1hbmFnZUNvc3REZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgZm9ybWF0RGF0ZSxmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNvc3REYXRhOiB7fSxcclxuICAgICAgICAgICAgaW52b2ljZURldGFpbElkOiAnJyxcclxuICAgICAgICAgICAgYXZhdGFyOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgICB0b0ZPUigpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL215Q29zdC9maW5hbmNpYWxPcGVyYXRpb25SZWNvcmQ/aW52b2ljZURldGFpbElkPScgKyB0aGlzLmludm9pY2VEZXRhaWxJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvQXVkaXRpbmcodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4vbWFuYWdlQ29zdEV4YW1pbmU/aWQ9JyArIHRoaXMuY29zdERhdGEuaWQgKyAnJnR5cGU9JyArIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHByb3ZhbCh0aGlzLmNvc3REYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmludm9pY2VEZXRhaWxJZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5botKbljZVcclxuICAgICAgICBhc3luYyBnZXRiaWxsKG51bSkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxDaGFyZ2UvR2V0Q2hhcmdlJyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmludm9pY2VEZXRhaWxJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0RGF0YS5jcmVhdGlvblRpbWUgPWZvcm1hdFRpbWUodGhpcy5jb3N0RGF0YS5jcmVhdGlvblRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiB0aGlzLmNvc3REYXRhLmNoYXJnZUl0ZW1zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0RGF0YS5jaGFyZ2VJdGVtc1tpdGVtXS5jaGFyZ2VEYXRlPWZvcm1hdFRpbWUodGhpcy5jb3N0RGF0YS5jaGFyZ2VJdGVtc1tpdGVtXS5jaGFyZ2VEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0RGF0YS5jaGFyZ2VJdGVtc1tpdGVtXS5jaGFyZ2VSYXRlPShOdW1iZXIodGhpcy5jb3N0RGF0YS5jaGFyZ2VJdGVtc1tpdGVtXS5jaGFyZ2VSYXRlKSoxMDApLnRvRml4ZWQoMikrJyUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzW2luZGV4XS5jcmVhdGlvblRpbWU9Zm9ybWF0VGltZSh0aGlzLmNvc3REYXRhLmludm9pY2VCaWxsaW5nc1tpbmRleF0uY3JlYXRpb25UaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmNvc3REYXRhLndvcmtmbG93cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvc3REYXRhLndvcmtmbG93c1tpbmRleF0uY3JlYXRpb25UaW1lPWZvcm1hdFRpbWUodGhpcy5jb3N0RGF0YS53b3JrZmxvd3NbaW5kZXhdLmNyZWF0aW9uVGltZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGh0dHAgPSBcIi9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9XCIgKyB0aGlzLmNvc3REYXRhLndvcmtmbG93c1tpbmRleF0uY3JlYXRvclVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYXZhdGFyID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvc3REYXRhLndvcmtmbG93c1tpbmRleF0uYXZhdGFyID0gYXZhdGFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGFwcHJvdmFsKGlkKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxDaGFyZ2UvQXBwcm92ZUNoYXJnZScsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19