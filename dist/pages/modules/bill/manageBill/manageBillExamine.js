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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            id: '',
            billDataDetail: {},
            warning: [false, false],
            auditings: [{
                value: '0',
                name: '审核通过',
                ProcessStatus: 'A',
                isShow: false
            }, {
                value: '1',
                name: '审核退回',
                ProcessStatus: 'R',
                isShow: false
            }],
            audtingsSelect: '',
            remark: '',
            inputChecked: [false, false]
        }, _this.methods = {
            bindfocus: function bindfocus(index, e) {
                if (e.target.id == 'Description' && !e.detail.value) {
                    this.warning[1] = true;
                }
                this.inputChecked[index] = !this.inputChecked[index];
                this.$apply();
            },

            //input失去焦点
            bindblur: function bindblur(index) {
                this.inputChecked[index] = !this.inputChecked[index];
                this.$apply();
            },
            bindPickerChange: function bindPickerChange(e) {
                console.log(e);
                this.audtingsSelect = this.auditings[e.detail.value].ProcessStatus;
            },
            bindinput: function bindinput(e) {
                if (e.detail.value) {
                    this.warning[1] = false;
                    this.remark = e.detail.value;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(e) {
            this.id = e.id;
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
                                if (!(this.audtingsSelect == '')) {
                                    _context.next = 4;
                                    break;
                                }

                                this.warning[0] = true;
                                _context.next = 31;
                                break;

                            case 4:
                                if (!(this.audtingsSelect == 'R' && this.remark == '')) {
                                    _context.next = 9;
                                    break;
                                }

                                this.warning[0] = false;
                                this.warning[1] = true;
                                _context.next = 31;
                                break;

                            case 9:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 12;
                                return _ajax2.default.getData('/api/services/web/financialBilling/ApprovalBilling', 'post', {
                                    Id: this.id,
                                    ProcessStatus: this.audtingsSelect,
                                    Remark: this.remark
                                });

                            case 12:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 16 : _context.t0 === 403 ? 22 : _context.t0 === 500 ? 26 : 30;
                                break;

                            case 16:
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 3]; //上两个页面

                                prevPage.data.refresh = true;
                                wx.navigateBack({
                                    delta: 2
                                });
                                this.$apply();
                                return _context.abrupt('break', 31);

                            case 22:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 31);

                            case 26:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 31);

                            case 30:
                                return _context.abrupt('break', 31);

                            case 31:
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/modules/bill/manageBill/manageBillExamine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZUJpbGxFeGFtaW5lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImlkIiwiYmlsbERhdGFEZXRhaWwiLCJ3YXJuaW5nIiwiYXVkaXRpbmdzIiwidmFsdWUiLCJuYW1lIiwiUHJvY2Vzc1N0YXR1cyIsImlzU2hvdyIsImF1ZHRpbmdzU2VsZWN0IiwicmVtYXJrIiwiaW5wdXRDaGVja2VkIiwibWV0aG9kcyIsImJpbmRmb2N1cyIsImluZGV4IiwiZSIsInRhcmdldCIsImRldGFpbCIsIiRhcHBseSIsImJpbmRibHVyIiwiYmluZFBpY2tlckNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJiaW5kaW5wdXQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwic3VjY2VzcyIsImFkZE9wYWNpdHkiLCJhamF4IiwiZ2V0RGF0YSIsIklkIiwiUmVtYXJrIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwicmVmcmVzaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLGdCQUFJLEVBREQ7QUFFSEMsNEJBQWdCLEVBRmI7QUFHSEMscUJBQVMsQ0FDTCxLQURLLEVBRUwsS0FGSyxDQUhOO0FBT0hDLHVCQUFXLENBQUM7QUFDSkMsdUJBQU8sR0FESDtBQUVKQyxzQkFBTSxNQUZGO0FBR0pDLCtCQUFlLEdBSFg7QUFJSkMsd0JBQVE7QUFKSixhQUFELEVBTVA7QUFDSUgsdUJBQU8sR0FEWDtBQUVJQyxzQkFBTSxNQUZWO0FBR0lDLCtCQUFlLEdBSG5CO0FBSUlDLHdCQUFRO0FBSlosYUFO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QWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLM0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoR2U0QixlQUFLQyxJOztrQkFBbkJoRCxLIiwiZmlsZSI6Im1hbmFnZUJpbGxFeGFtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICBiaWxsRGF0YURldGFpbDoge30sXHJcbiAgICAgICAgICAgIHdhcm5pbmc6IFtcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGF1ZGl0aW5nczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICflrqHmoLjpgJrov4cnLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2Nlc3NTdGF0dXM6ICdBJyxcclxuICAgICAgICAgICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICflrqHmoLjpgIDlm54nLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2Nlc3NTdGF0dXM6ICdSJyxcclxuICAgICAgICAgICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYXVkdGluZ3NTZWxlY3Q6ICcnLFxyXG4gICAgICAgICAgICByZW1hcms6ICcnLFxyXG4gICAgICAgICAgICAgaW5wdXRDaGVja2VkOiBbXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgYmluZGZvY3VzKGluZGV4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gJ0Rlc2NyaXB0aW9uJyAmJiAhZS5kZXRhaWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdbMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dENoZWNrZWRbaW5kZXhdID0gIXRoaXMuaW5wdXRDaGVja2VkW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAvL2lucHV05aSx5Y6754Sm54K5XHJcbiAgICAgICAgICAgIGJpbmRibHVyKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2hlY2tlZFtpbmRleF0gPSAhdGhpcy5pbnB1dENoZWNrZWRbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZFBpY2tlckNoYW5nZShlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkdGluZ3NTZWxlY3QgPSB0aGlzLmF1ZGl0aW5nc1tlLmRldGFpbC52YWx1ZV0uUHJvY2Vzc1N0YXR1c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kaW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25Mb2FkKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGUuaWQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhc3luYyBhdWRpdGluZygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXVkdGluZ3NTZWxlY3QgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1swXSA9IHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1ZHRpbmdzU2VsZWN0ID09ICdSJyAmJiB0aGlzLnJlbWFyayA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nWzBdID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1sxXSA9IHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxCaWxsaW5nL0FwcHJvdmFsQmlsbGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9jZXNzU3RhdHVzOiB0aGlzLmF1ZHRpbmdzU2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1hcms6IHRoaXMucmVtYXJrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAzXTsgLy/kuIrkuKTkuKrpobXpnaJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19