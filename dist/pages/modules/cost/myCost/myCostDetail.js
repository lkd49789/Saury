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

var myCostDetail = function (_wepy$page) {
    _inherits(myCostDetail, _wepy$page);

    function myCostDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, myCostDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myCostDetail.__proto__ || Object.getPrototypeOf(myCostDetail)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            costData: {},
            invoiceDetailId: '',
            avatar: []
        }, _this.methods = {
            toFOR: function toFOR() {
                wx.navigateTo({
                    url: '../myCost/financialOperationRecord?invoiceDetailId=' + this.invoiceDetailId
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(myCostDetail, [{
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
                                return _ajax2.default.getData('/api/services/web/financialCharge/SubmitCharge', 'post', {
                                    id: this.costData.id
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

    return myCostDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(myCostDetail , 'pages/modules/cost/myCost/myCostDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Q29zdERldGFpbC5qcyJdLCJuYW1lcyI6WyJteUNvc3REZXRhaWwiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvc3REYXRhIiwiaW52b2ljZURldGFpbElkIiwiYXZhdGFyIiwibWV0aG9kcyIsInRvRk9SIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3B0aW9ucyIsImlkIiwiZ2V0YmlsbCIsIiRhcHBseSIsIm51bSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwic3VjY2VzcyIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiY3JlYXRpb25UaW1lIiwiaXRlbSIsImNoYXJnZUl0ZW1zIiwiY2hhcmdlRGF0ZSIsImNoYXJnZVJhdGUiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiaW5kZXgiLCJpbnZvaWNlQmlsbGluZ3MiLCJ3b3JrZmxvd3MiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsImFkZE9wYWNpdHkiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwicmVmcmVzaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNIQyxzQkFBVSxFQURQO0FBRUhDLDZCQUFpQixFQUZkO0FBR0hDLG9CQUFRO0FBSEwsUyxRQUtQQyxPLEdBQVU7QUFDUEMsaUJBRE8sbUJBQ0M7QUFDSEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSyx3REFBd0QsS0FBS047QUFEeEQsaUJBQWQ7QUFHSDtBQUxLLFM7Ozs7OytCQU9ITyxPLEVBQVM7QUFDWixpQkFBS1AsZUFBTCxHQUF1Qk8sUUFB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QVlGLE9BQVo7QUFDSW1CLHFDLEdBQVFDLGlCO0FBQ1JDLHdDLEdBQVdGLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDOztBQUNmRCx5Q0FBU3pDLElBQVQsQ0FBYzJDLE9BQWQsR0FBd0IsSUFBeEI7QUFDQXJDLG1DQUFHc0MsWUFBSCxDQUFnQjtBQUNaQywyQ0FBTztBQURLLGlDQUFoQjtBQUdBLHFDQUFLakMsTUFBTDs7OztBQUdBLHFDQUFLdUIsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUt6QixNQUFMOzs7O0FBR0EscUNBQUt1QixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS3pCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEcwQmtDLGVBQUtDLEk7O2tCQUExQmpELFkiLCJmaWxlIjoibXlDb3N0RGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJ0AvdXRpbHMvY29maWcvYWpheC5qcydcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgZm9ybWF0RGF0ZSxcclxuICAgICAgICBmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJ0AvdXRpbHMvY29maWcvYXBpLmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG15Q29zdERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNvc3REYXRhOiB7fSxcclxuICAgICAgICAgICAgaW52b2ljZURldGFpbElkOiAnJyxcclxuICAgICAgICAgICAgYXZhdGFyOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICB0b0ZPUigpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL215Q29zdC9maW5hbmNpYWxPcGVyYXRpb25SZWNvcmQ/aW52b2ljZURldGFpbElkPScgKyB0aGlzLmludm9pY2VEZXRhaWxJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmludm9pY2VEZXRhaWxJZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5botKbljZVcclxuICAgICAgICBhc3luYyBnZXRiaWxsKG51bSkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxDaGFyZ2UvR2V0Q2hhcmdlJyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmludm9pY2VEZXRhaWxJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEuY3JlYXRpb25UaW1lID0gZm9ybWF0VGltZSh0aGlzLmNvc3REYXRhLmNyZWF0aW9uVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiB0aGlzLmNvc3REYXRhLmNoYXJnZUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEuY2hhcmdlSXRlbXNbaXRlbV0uY2hhcmdlRGF0ZSA9IGZvcm1hdFRpbWUodGhpcy5jb3N0RGF0YS5jaGFyZ2VJdGVtc1tpdGVtXS5jaGFyZ2VEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0RGF0YS5jaGFyZ2VJdGVtc1tpdGVtXS5jaGFyZ2VSYXRlID0gKE51bWJlcih0aGlzLmNvc3REYXRhLmNoYXJnZUl0ZW1zW2l0ZW1dLmNoYXJnZVJhdGUpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzW2luZGV4XS5jcmVhdGlvblRpbWUgPSBmb3JtYXRUaW1lKHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzW2luZGV4XS5jcmVhdGlvblRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuY29zdERhdGEud29ya2Zsb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdERhdGEud29ya2Zsb3dzW2luZGV4XS5jcmVhdGlvblRpbWUgPSBmb3JtYXRUaW1lKHRoaXMuY29zdERhdGEud29ya2Zsb3dzW2luZGV4XS5jcmVhdGlvblRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBodHRwID0gXCIvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPVwiICsgdGhpcy5jb3N0RGF0YS53b3JrZmxvd3NbaW5kZXhdLmNyZWF0b3JVc2VySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb3N0RGF0YS53b3JrZmxvd3NbaW5kZXhdLmF2YXRhciA9IGF2YXRhcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPkemAgeWuoeaguFxyXG4gICAgICAgIGFzeW5jIHRvQXVkaXRpbmcoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxDaGFyZ2UvU3VibWl0Q2hhcmdlJyxcclxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmNvc3REYXRhLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19