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
            buttonImage: '../../../../images/test.png',
            addOpacity: 1,
            submitData: {},
            result: [],
            remark: {
                title: '审核意见',
                name: 'remark',
                warning: false,
                type: 'text',
                options: true
            },
            remarkValue: ''
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                this.addOpacity = 1;
                if (this.submitData.status == 'R' && this.submitData.approveMemo) {
                    this.ProcessOrderItem();
                } else if (this.submitData.status == 'A') {
                    this.ProcessOrderItem();
                } else {
                    wx.showToast({
                        title: '请填写必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
                this.$apply();
            },
            bindPickerChang: function bindPickerChang(e) {
                var value = e.detail.value;
                this.submitData.status = value;
                this.remark.warning = value == 'A' ? false : true;
                this.$apply();
            }
        }, _this.watch = {
            remarkValue: function remarkValue(value) {
                this.submitData.approveMemo = value;
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
                                return _ajax2.default.getData('/api/services/web/caseFileStamp/ApproveCaseFile', 'post', this.submitData);

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
        key: 'GetGeneralCodeComboboxItems',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, result;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboboxItems', 'post', {
                                    Id: "DESZT"
                                });

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    result = resData.data.result;

                                    result = result.filter(function (data) {
                                        return data.value !== 'W';
                                    });
                                    this.result = result;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetGeneralCodeComboboxItems() {
                return _ref3.apply(this, arguments);
            }

            return GetGeneralCodeComboboxItems;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.submitData.parentId = options.id;
            this.submitData.approveUser = this.$parent.global.userInfo.id;
            this.GetGeneralCodeComboboxItems();
            this.$apply();
        }
    }]);

    return auditCase;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(auditCase , 'pages/modules/auditModules/approveAudit/approveAudit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmVBdWRpdC5qcyJdLCJuYW1lcyI6WyJhdWRpdENhc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJyZW1hcmsiLCJkYXRhIiwiYnV0dG9uSW1hZ2UiLCJhZGRPcGFjaXR5Iiwic3VibWl0RGF0YSIsInJlc3VsdCIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJ0eXBlIiwib3B0aW9ucyIsInJlbWFya1ZhbHVlIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsInN0YXR1cyIsImFwcHJvdmVNZW1vIiwiUHJvY2Vzc09yZGVySXRlbSIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJiaW5kUGlja2VyQ2hhbmciLCJlIiwidmFsdWUiLCJkZXRhaWwiLCJ3YXRjaCIsInNob3dMb2FkaW5nIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsImlzUmVmcmVzaCIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImVycm9yIiwibWVzc2FnZSIsIklkIiwiZmlsdGVyIiwicGFyZW50SWQiLCJpZCIsImFwcHJvdmVVc2VyIiwiJHBhcmVudCIsImdsb2JhbCIsInVzZXJJbmZvIiwiR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsUUFBdkMsRUFBZ0QsMEJBQXlCLGFBQXpFLEVBQXVGLDJCQUEwQixhQUFqSCxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FB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QUNuQjdCLDBDQURtQixHQUNaNEIsUUFBUWhDLElBQVIsQ0FBYUksTUFERDs7QUFFdkJBLDZDQUFPQSxPQUFPc0MsTUFBUCxDQUFjLFVBQUMxQyxJQUFELEVBQVE7QUFDekIsK0NBQU9BLEtBQUswQixLQUFMLEtBQWEsR0FBcEI7QUFDSCxxQ0FGTSxDQUFQO0FBR0EseUNBQUt0QixNQUFMLEdBQVlBLE1BQVo7QUFDQSx5Q0FBS1MsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUVKLE8sRUFBUztBQUNaLGlCQUFLTixVQUFMLENBQWdCd0MsUUFBaEIsR0FBeUJsQyxRQUFRbUMsRUFBakM7QUFDQSxpQkFBS3pDLFVBQUwsQ0FBZ0IwQyxXQUFoQixHQUE0QixLQUFLQyxPQUFMLENBQWFDLE1BQWIsQ0FBb0JDLFFBQXBCLENBQTZCSixFQUF6RDtBQUNBLGlCQUFLSywyQkFBTDtBQUNBLGlCQUFLcEMsTUFBTDtBQUNIOzs7O0VBM0drQ3FDLGVBQUtDLEk7O2tCQUF2QnpELFMiLCJmaWxlIjoiYXBwcm92ZUF1ZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgcmVtYXJrIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGF1ZGl0Q2FzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJyZW1hcmtcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcInJlbWFya1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwicmVtYXJrVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJyZW1hcmtWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICByZW1hcmtcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGJ1dHRvbkltYWdlOicuLi8uLi8uLi8uLi9pbWFnZXMvdGVzdC5wbmcnLFxuICAgICAgICAgICAgYWRkT3BhY2l0eToxLFxuICAgICAgICAgICAgc3VibWl0RGF0YTp7fSxcbiAgICAgICAgICAgIHJlc3VsdDogW10sXG4gICAgICAgICAgICByZW1hcms6e1xuICAgICAgICAgICAgICAgIHRpdGxlOiflrqHmoLjmhI/op4EnLFxuICAgICAgICAgICAgICAgIG5hbWU6J3JlbWFyaycsXG4gICAgICAgICAgICAgICAgd2FybmluZzpmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOid0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOnRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1hcmtWYWx1ZTonJ1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG91Y2hTdGFydCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eT0wLjY7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaEVuZCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eT0xO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3VibWl0RGF0YS5zdGF0dXM9PSdSJyYmdGhpcy5zdWJtaXREYXRhLmFwcHJvdmVNZW1vKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcm9jZXNzT3JkZXJJdGVtKCk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdWJtaXREYXRhLnN0YXR1cz09J0EnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcm9jZXNzT3JkZXJJdGVtKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7floavlhpnlv4XloavpobnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZyhlKXtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLnN0YXR1cz12YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFyay53YXJuaW5nPXZhbHVlPT0nQSc/ZmFsc2U6dHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaD17XG4gICAgICAgICAgICByZW1hcmtWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLmFwcHJvdmVNZW1vPXZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgUHJvY2Vzc09yZGVySXRlbSgpe1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczooKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlRmlsZVN0YW1wL0FwcHJvdmVDYXNlRmlsZScsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgIHZhciAgaXNSZWZyZXNoPXd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICBpc1JlZnJlc2guaXNSZWZyZXNoPXRydWU7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcsIGlzUmVmcmVzaCk7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCl7XG4gICAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgSWQ6IFwiREVTWlRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0PXJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0PXJlc3VsdC5maWx0ZXIoKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnZhbHVlIT09J1cnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdD1yZXN1bHRcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEucGFyZW50SWQ9b3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5hcHByb3ZlVXNlcj10aGlzLiRwYXJlbnQuZ2xvYmFsLnVzZXJJbmZvLmlkO1xuICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMoKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=