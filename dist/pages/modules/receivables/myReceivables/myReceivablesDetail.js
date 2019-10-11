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
            receivablesData: {},
            id: '',
            avatar: []
        }, _this.methods = {
            toAuditing: function toAuditing(type) {
                if (type == '0') {
                    this.return(this.id);
                } else {
                    this.approval(this.id);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.id = options.id;
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.getbill();
        }
        //

    }, {
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
                                    id: this.id
                                });

                            case 3:
                                resData = _context.sent;

                                console.log(resData);
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 8 : _context.t0 === 403 ? 13 : _context.t0 === 500 ? 17 : 21;
                                break;

                            case 8:
                                console.log(resData);
                                this.receivablesData = resData.data.result;
                                this.receivablesData.creationTime = this.receivablesData.creationTime.split('T')[0];
                                // for (var index in this.costData.invoiceBillings) {
                                //     this.costData.invoiceBillings[index].creationTime = formatTime(this.costData.invoiceBillings[index].creationTime)
                                // }
                                // for (var index in this.costData.workflows) {
                                //     this.costData.workflows[index].creationTime = formatTime(this.costData.workflows[index].creationTime)
                                //     var http = "/api/services/web/personal/GetEmployeePhoto?id=" + this.costData.workflows[index].creatorUserId
                                //     var avatar = await ajax.getAavatar(http);
                                //     this.avatar[index] = avatar;
                                //     this.$apply();
                                // }
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

            function getbill(_x) {
                return _ref2.apply(this, arguments);
            }

            return getbill;
        }()
    }, {
        key: 'return',
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
                                        _this2.$apply();
                                    }
                                });
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/financialReceipt/ReturnReceipt', 'post', {
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

            function _return(_x2) {
                return _ref3.apply(this, arguments);
            }

            return _return;
        }()
    }, {
        key: 'approval',
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
                                return _ajax2.default.getData('/api/services/web/financialReceipt/ConfirmReceipt', 'post', {
                                    Id: id
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

            function approval(_x3) {
                return _ref4.apply(this, arguments);
            }

            return approval;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/receivables/myReceivables/myReceivablesDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15UmVjZWl2YWJsZXNEZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiZGF0YSIsInJlY2VpdmFibGVzRGF0YSIsImlkIiwiYXZhdGFyIiwibWV0aG9kcyIsInRvQXVkaXRpbmciLCJ0eXBlIiwicmV0dXJuIiwiYXBwcm92YWwiLCJvcHRpb25zIiwiJGFwcGx5IiwiZ2V0YmlsbCIsIm51bSIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJjcmVhdGlvblRpbWUiLCJzcGxpdCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwiSWQiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwicmVmcmVzaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiYWRkT3BhY2l0eSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQU1xQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDSEMsNkJBQWlCLEVBRGQ7QUFFSEMsZ0JBQUksRUFGRDtBQUdIQyxvQkFBUTtBQUhMLFMsUUFLUEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxJQURMLEVBQ1c7QUFDYixvQkFBSUEsUUFBUSxHQUFaLEVBQWlCO0FBQ2IseUJBQUtDLE1BQUwsQ0FBWSxLQUFLTCxFQUFqQjtBQUNILGlCQUZELE1BRU87QUFDSCx5QkFBS00sUUFBTCxDQUFjLEtBQUtOLEVBQW5CO0FBQ0g7QUFDSjtBQVBLLFM7Ozs7OytCQVNITyxPLEVBQVM7QUFDWixpQkFBS1AsRUFBTCxHQUFVTyxRQUFRUCxFQUFsQjtBQUNBLGlCQUFLUSxN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QyxHQUFSLENBQVlGLE9BQVo7K0NBQ1FBLFFBQVFHLFU7a0VBQ1AsRyx3QkFTQSxHLHlCQUtBLEc7Ozs7QUFiRFEscUMsR0FBUUMsaUI7QUFDSkMsd0MsR0FBV0YsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLEM7O0FBQ2ZELHlDQUFTakMsSUFBVCxDQUFjbUMsT0FBZCxHQUF3QixJQUF4QjtBQUNBdEIsbUNBQUd1QixZQUFILENBQWdCO0FBQ1pDLDJDQUFPO0FBREssaUNBQWhCO0FBR0EscUNBQUszQixNQUFMOzs7O0FBR0EscUNBQUtpQixXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsQ0FBekM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQSxxQ0FBS25CLE1BQUw7Ozs7QUFHQSxxQ0FBS2lCLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLbkIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3SW1CNkIsZUFBS0MsSTs7a0JBQW5CMUMsSyIsImZpbGUiOiJteVJlY2VpdmFibGVzRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGZvcm1hdFRpbWVcclxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgZ2V0VXNlckF2YXRhclxyXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb21wb25lbnRzID0ge307XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgcmVjZWl2YWJsZXNEYXRhOiB7fSxcclxuICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICBhdmF0YXI6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0b0F1ZGl0aW5nKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwcm92YWwodGhpcy5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGFzeW5jIGdldGJpbGwobnVtKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbFJlY2VpcHQvR2V0UmVjZWlwdCcsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2YWJsZXNEYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmFibGVzRGF0YS5jcmVhdGlvblRpbWUgPSB0aGlzLnJlY2VpdmFibGVzRGF0YS5jcmVhdGlvblRpbWUuc3BsaXQoJ1QnKVswXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGluZGV4IGluIHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzW2luZGV4XS5jcmVhdGlvblRpbWUgPSBmb3JtYXRUaW1lKHRoaXMuY29zdERhdGEuaW52b2ljZUJpbGxpbmdzW2luZGV4XS5jcmVhdGlvblRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGluZGV4IGluIHRoaXMuY29zdERhdGEud29ya2Zsb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY29zdERhdGEud29ya2Zsb3dzW2luZGV4XS5jcmVhdGlvblRpbWUgPSBmb3JtYXRUaW1lKHRoaXMuY29zdERhdGEud29ya2Zsb3dzW2luZGV4XS5jcmVhdGlvblRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBodHRwID0gXCIvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPVwiICsgdGhpcy5jb3N0RGF0YS53b3JrZmxvd3NbaW5kZXhdLmNyZWF0b3JVc2VySWRcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hdmF0YXJbaW5kZXhdID0gYXZhdGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIHJldHVybihpZCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbFJlY2VpcHQvUmV0dXJuUmVjZWlwdCcsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBhcHByb3ZhbChpZCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsUmVjZWlwdC9Db25maXJtUmVjZWlwdCcsXHJcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=