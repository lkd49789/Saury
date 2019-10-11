'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var auditCase = function (_wepy$page) {
    _inherits(auditCase, _wepy$page);

    function auditCase() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, auditCase);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = auditCase.__proto__ || Object.getPrototypeOf(auditCase)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "remark": { "xmlns:v-bind": "", "v-bind:input.sync": "remark", "v-bind:inputValue.sync": "remarkValue", "v-bind:twoWayTitle.once": "remarkValue" } }, _this.$events = {}, _this.components = {
            remark: _input2.default
        }, _this.data = {
            submitData: {},
            result: [],
            remark: {
                title: '审核意见',
                name: 'remark',
                warning: true,
                type: 'digit',
                options: true
            },
            remarkValue: ''
        }, _this.methods = {
            touchEnd: function touchEnd() {
                if (this.submitData.result == "WaitForTransfer") {
                    this.ProcessOrderItem();
                } else if (this.submitData.result !== "WaitForTransfer" && this.submitData.result) {
                    this.remark.warning = true;
                    wx.showToast({
                        title: '审核意见不能为空！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
                this.$apply();
            },
            bindPickerChang: function bindPickerChang(e) {
                console.log(e.detail.value);
                this.submitData.result = e.detail.value;
            }
        }, _this.watch = {
            remarkValue: function remarkValue(value) {
                this.submitData.remark = value;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(auditCase, [{
        key: 'ProcessOrderItem',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var resData, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseCreation/ProcessOrderItem', 'post', this.submitData);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    isRefresh = wx.getStorageSync('isRefresh');

                                    isRefresh.isRefresh = true;
                                    wx.setStorageSync('isRefresh', isRefresh);
                                    wx.navigateBack({
                                        delta: 2
                                    });
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function ProcessOrderItem() {
                return _ref2.apply(this, arguments);
            }

            return ProcessOrderItem;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var OrderItem = wx.getStorageSync('OrderItem');
            OrderItem.getCreationResultList[0].isSelected = true;
            this.result = OrderItem.getCreationResultList;
            this.submitData.result = OrderItem.getCreationResultList[0].value;
            this.submitData.id = OrderItem.id;
            this.submitData.caseId = OrderItem.caseId;
            this.$apply();
        }
    }]);

    return auditCase;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(auditCase , 'pages/modules/auditModules/caseAudit/caseDetailAudit/auditCase'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0Q2FzZS5qcyJdLCJuYW1lcyI6WyJhdWRpdENhc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJyZW1hcmsiLCJkYXRhIiwic3VibWl0RGF0YSIsInJlc3VsdCIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJ0eXBlIiwib3B0aW9ucyIsInJlbWFya1ZhbHVlIiwibWV0aG9kcyIsInRvdWNoRW5kIiwiUHJvY2Vzc09yZGVySXRlbSIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCIkYXBwbHkiLCJiaW5kUGlja2VyQ2hhbmciLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwid2F0Y2giLCJzaG93TG9hZGluZyIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJpc1JlZnJlc2giLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJPcmRlckl0ZW0iLCJnZXRDcmVhdGlvblJlc3VsdExpc3QiLCJpc1NlbGVjdGVkIiwiaWQiLCJjYXNlSWQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixRQUF2QyxFQUFnRCwwQkFBeUIsYUFBekUsRUFBdUYsMkJBQTBCLGFBQWpILEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyx3QkFBVyxFQURSO0FBRUhDLG9CQUFRLEVBRkw7QUFHSEgsb0JBQU87QUFDSEksdUJBQU0sTUFESDtBQUVI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WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCByZW1hcmsgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXVkaXRDYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInJlbWFya1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwicmVtYXJrXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJyZW1hcmtWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInJlbWFya1ZhbHVlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHJlbWFya1xuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3VibWl0RGF0YTp7fSxcbiAgICAgICAgICAgIHJlc3VsdDogW10sXG4gICAgICAgICAgICByZW1hcms6e1xuICAgICAgICAgICAgICAgIHRpdGxlOiflrqHmoLjmhI/op4EnLFxuICAgICAgICAgICAgICAgIG5hbWU6J3JlbWFyaycsXG4gICAgICAgICAgICAgICAgd2FybmluZzp0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6J2RpZ2l0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOnRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1hcmtWYWx1ZTonJ1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG91Y2hFbmQoKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdWJtaXREYXRhLnJlc3VsdD09XCJXYWl0Rm9yVHJhbnNmZXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlByb2Nlc3NPcmRlckl0ZW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdWJtaXREYXRhLnJlc3VsdCE9PVwiV2FpdEZvclRyYW5zZmVyXCImJnRoaXMuc3VibWl0RGF0YS5yZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1hcmsud2FybmluZz10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflrqHmoLjmhI/op4HkuI3og73kuLrnqbrvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kUGlja2VyQ2hhbmcoZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLnJlc3VsdD1lLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaD17XG4gICAgICAgICAgICByZW1hcmtWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLnJlbWFyaz12YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIFByb2Nlc3NPcmRlckl0ZW0oKXtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZUNyZWF0aW9uL1Byb2Nlc3NPcmRlckl0ZW0nLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB2YXIgIGlzUmVmcmVzaD13eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgaXNSZWZyZXNoLmlzUmVmcmVzaD10cnVlO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHZhciBPcmRlckl0ZW09d3guZ2V0U3RvcmFnZVN5bmMoJ09yZGVySXRlbScpOyBcbiAgICAgICAgICAgIE9yZGVySXRlbS5nZXRDcmVhdGlvblJlc3VsdExpc3RbMF0uaXNTZWxlY3RlZD10cnVlO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgID0gT3JkZXJJdGVtLmdldENyZWF0aW9uUmVzdWx0TGlzdDtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5yZXN1bHQ9IE9yZGVySXRlbS5nZXRDcmVhdGlvblJlc3VsdExpc3RbMF0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuaWQ9T3JkZXJJdGVtLmlkO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLmNhc2VJZD1PcmRlckl0ZW0uY2FzZUlkO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==