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

var createRiskCharge = function (_wepy$page) {
    _inherits(createRiskCharge, _wepy$page);

    function createRiskCharge() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, createRiskCharge);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createRiskCharge.__proto__ || Object.getPrototypeOf(createRiskCharge)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "RiskBasicAmount": { "xmlns:v-bind": "", "v-bind:input.sync": "RiskBasicAmount", "v-bind:inputValue.sync": "RiskBasicAmountValue", "v-bind:twoWayTitle.once": "RiskBasicAmountValue" }, "PayAmount": { "v-bind:input.sync": "PayAmount", "v-bind:inputValue.sync": "PayAmountValue", "v-bind:twoWayTitle.once": "PayAmountValue" }, "Remark": { "v-bind:input.sync": "Remark", "v-bind:inputValue.sync": "RemarkValue", "v-bind:twoWayTitle.once": "RemarkValue" } }, _this.$events = {}, _this.components = {
            RiskBasicAmount: _input2.default,
            PayAmount: _input2.default,
            Remark: _input2.default
        }, _this.data = {
            //判断title
            pageStatus: 0,
            //风险收费
            subCaseRiskChargeData: {
                // CaseId: "1E584DE0-3166-E911-AC1B-B0D9BF31DAD7",
                // Id: "",
                // IsAcceptable: "Y",
                // PayAmount: "333333",
                // Remark: "儿我热无若",
                // RiskBasicAmount: "55555555555",
                // UseBill: "Y"
            },
            RiskBasicAmount: {
                title: '风险金额',
                name: 'RiskBasicAmount',
                warning: true,
                type: 'number'
            },
            RiskBasicAmountValue: '',
            PayAmount: {
                title: '基本金额',
                name: 'PayPeriod',
                warning: false,
                type: 'number'
            },
            PayAmountValue: '',
            Remark: {
                title: '风险达成条件',
                name: 'Remark',
                warning: false,
                options: true,
                type: 'text'
            },
            RemarkValue: '',
            //使用账单
            UseBill: {
                title: '使用账单',
                UseBill: [{
                    value: 'Y',
                    displayText: '是',
                    isSelected: false
                }, {
                    value: 'N',
                    displayText: '否',
                    isSelected: false
                }]
            },
            UseBillChecked: '',
            //可收款
            IsAcceptable: {
                title: '可收款',
                IsAcceptable: [{
                    value: 'Y',
                    displayText: '是',
                    isSelected: false
                }, {
                    value: 'N',
                    displayText: '否',
                    isSelected: false
                }]
            },
            IsAcceptableChecked: ''
        }, _this.methods = {
            submitData: function submitData() {
                if (this.RiskBasicAmountValue) {
                    this.CreateOrUpdateCaseRiskCharge();
                } else {
                    wx.showToast({
                        title: '请填写必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            },
            isUseBill: function isUseBill() {
                this.UseBillChecked = !this.UseBillChecked;
                this.$apply();
            },
            IsAcceptable: function IsAcceptable() {
                this.IsAcceptableChecked = !this.IsAcceptableChecked;
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            RiskBasicAmountValue: function RiskBasicAmountValue(value) {
                this.subCaseRiskChargeData.RiskBasicAmount = value;
                this.$apply();
            },
            RemarkValue: function RemarkValue(value) {
                this.subCaseRiskChargeData.Remark = value;
                this.$apply();
            },
            PayAmountValue: function PayAmountValue(value) {
                this.subCaseRiskChargeData.PayAmount = value;
                this.$apply();
            },
            UseBillChecked: function UseBillChecked(checked) {
                if (checked) {
                    this.subCaseRiskChargeData.UseBill = this.UseBill.UseBill[0].value;
                } else {
                    this.subCaseRiskChargeData.UseBill = this.UseBill.UseBill[1].value;
                }
                this.$apply();
            },
            IsAcceptableChecked: function IsAcceptableChecked(checked) {
                if (checked) {
                    this.subCaseRiskChargeData.IsAcceptable = this.IsAcceptable.IsAcceptable[0].value;
                } else {
                    this.subCaseRiskChargeData.IsAcceptable = this.IsAcceptable.IsAcceptable[1].value;
                }
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(createRiskCharge, [{
        key: 'CreateOrUpdateCaseRiskCharge',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        wx.navigateBack({
                                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                        });
                                    }
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/casePayDetail/CreateOrUpdateCaseRiskCharge', 'post', this.subCaseRiskChargeData);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    console.log('提交成功');
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function CreateOrUpdateCaseRiskCharge() {
                return _ref2.apply(this, arguments);
            }

            return CreateOrUpdateCaseRiskCharge;
        }()
        //获取待编辑的数据

    }, {
        key: 'GetPendingeEditData',
        value: function GetPendingeEditData(chargeId) {
            var riskChargeDataList = wx.getStorageSync('RISK_CHARGELIST_DATAS');
            var risklChargeData = {};
            for (var index in riskChargeDataList) {
                if (riskChargeDataList[index].id == chargeId) {
                    risklChargeData = riskChargeDataList[index];
                }
            }
            if (Object.keys(risklChargeData).length !== 0) {
                this.RiskBasicAmountValue = risklChargeData.riskBasicAmount;
                this.subCaseRiskChargeData.id = risklChargeData.id;
                this.PayAmountValue = risklChargeData.payAmount;
                this.RemarkValue = risklChargeData.remark;
                if (risklChargeData.useBill == 'Y') {
                    this.UseBillChecked = true;
                } else {
                    this.UseBillChecked = false;
                }
                if (risklChargeData.isAcceptable == 'Y') {
                    this.IsAcceptableChecked = true;
                } else {
                    this.IsAcceptableChecked = false;
                }
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.subCaseRiskChargeData.CaseId = options.caseId;
            this.pageStatus = options.status;
            if (options.id) {
                this.GetPendingeEditData(options.id);
            } else {
                this.subCaseRiskChargeData.id = '';
                this.UseBillChecked = false;
                this.IsAcceptableChecked = false;
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return createRiskCharge;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(createRiskCharge , 'pages/modules/myRegister/caseChargeAndContract/createRiskCharge'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZVJpc2tDaGFyZ2UuanMiXSwibmFtZXMiOlsiY3JlYXRlUmlza0NoYXJnZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlJpc2tCYXNpY0Ftb3VudCIsIlBheUFtb3VudCIsIlJlbWFyayIsImRhdGEiLCJwYWdlU3RhdHVzIiwic3ViQ2FzZVJpc2tDaGFyZ2VEYXRhIiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsInR5cGUiLCJSaXNrQmFzaWNBbW91bnRWYWx1ZSIsIlBheUFtb3VudFZhbHVlIiwib3B0aW9ucyIsIlJlbWFya1ZhbHVlIiwiVXNlQmlsbCIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJpc1NlbGVjdGVkIiwiVXNlQmlsbENoZWNrZWQiLCJJc0FjY2VwdGFibGUiLCJJc0FjY2VwdGFibGVDaGVja2VkIiwibWV0aG9kcyIsInN1Ym1pdERhdGEiLCJDcmVhdGVPclVwZGF0ZUNhc2VSaXNrQ2hhcmdlIiwid3giLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImlzVXNlQmlsbCIsIiRhcHBseSIsImV2ZW50cyIsIndhdGNoIiwiY2hlY2tlZCIsImNvbXB1dGVkIiwic2hvd0xvYWRpbmciLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwiY2hhcmdlSWQiLCJyaXNrQ2hhcmdlRGF0YUxpc3QiLCJnZXRTdG9yYWdlU3luYyIsInJpc2tsQ2hhcmdlRGF0YSIsImluZGV4IiwiaWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicmlza0Jhc2ljQW1vdW50IiwicGF5QW1vdW50IiwicmVtYXJrIiwidXNlQmlsbCIsImlzQWNjZXB0YWJsZSIsIkNhc2VJZCIsImNhc2VJZCIsInN0YXR1cyIsIkdldFBlbmRpbmdlRWRpdERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7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QUFxQztBQUNqQyx5QkFBS3RDLG1CQUFMLEdBQXlCLElBQXpCO0FBQ0gsaUJBRkQsTUFFSztBQUNELHlCQUFLQSxtQkFBTCxHQUF5QixLQUF6QjtBQUNIO0FBQ0o7QUFDSjs7OytCQUVNUixPLEVBQVM7QUFDWixpQkFBS1AscUJBQUwsQ0FBMkJzRCxNQUEzQixHQUFrQy9DLFFBQVFnRCxNQUExQztBQUNBLGlCQUFLeEQsVUFBTCxHQUFrQlEsUUFBUWlELE1BQTFCO0FBQ0EsZ0JBQUlqRCxRQUFRc0MsRUFBWixFQUFnQjtBQUNaLHFCQUFLWSxtQkFBTCxDQUF5QmxELFFBQVFzQyxFQUFqQztBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLN0MscUJBQUwsQ0FBMkI2QyxFQUEzQixHQUE4QixFQUE5QjtBQUNBLHFCQUFLaEMsY0FBTCxHQUFzQixLQUF0QjtBQUNBLHFCQUFLRSxtQkFBTCxHQUEyQixLQUEzQjtBQUNIO0FBQ0o7OztpQ0FDUSxDQUFFOzs7O0VBN0wrQjJDLGVBQUtDLEk7O2tCQUE5QnJFLGdCIiwiZmlsZSI6ImNyZWF0ZVJpc2tDaGFyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XHJcbiAgICBpbXBvcnQgUmlza0Jhc2ljQW1vdW50IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcclxuICAgIGltcG9ydCBQYXlBbW91bnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xyXG4gICAgaW1wb3J0IFJlbWFyayBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGVSaXNrQ2hhcmdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUmlza0Jhc2ljQW1vdW50XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJSaXNrQmFzaWNBbW91bnRcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlJpc2tCYXNpY0Ftb3VudFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiUmlza0Jhc2ljQW1vdW50VmFsdWVcIn0sXCJQYXlBbW91bnRcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiUGF5QW1vdW50XCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJQYXlBbW91bnRWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlBheUFtb3VudFZhbHVlXCJ9LFwiUmVtYXJrXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIlJlbWFya1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiUmVtYXJrVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJSZW1hcmtWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIFJpc2tCYXNpY0Ftb3VudCxcclxuICAgICAgICAgICAgUGF5QW1vdW50LFxyXG4gICAgICAgICAgICBSZW1hcmtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIC8v5Yik5patdGl0bGVcclxuICAgICAgICAgICAgcGFnZVN0YXR1czogMCxcclxuICAgICAgICAgICAgLy/po47pmanmlLbotLlcclxuICAgICAgICAgICAgc3ViQ2FzZVJpc2tDaGFyZ2VEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXNlSWQ6IFwiMUU1ODRERTAtMzE2Ni1FOTExLUFDMUItQjBEOUJGMzFEQUQ3XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBJZDogXCJcIixcclxuICAgICAgICAgICAgICAgIC8vIElzQWNjZXB0YWJsZTogXCJZXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBQYXlBbW91bnQ6IFwiMzMzMzMzXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1hcms6IFwi5YS/5oiR54Ot5peg6IulXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBSaXNrQmFzaWNBbW91bnQ6IFwiNTU1NTU1NTU1NTVcIixcclxuICAgICAgICAgICAgICAgIC8vIFVzZUJpbGw6IFwiWVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFJpc2tCYXNpY0Ftb3VudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpo47pmanph5Hpop0nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1Jpc2tCYXNpY0Ftb3VudCcsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFJpc2tCYXNpY0Ftb3VudFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgUGF5QW1vdW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WfuuacrOmHkeminScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGF5UGVyaW9kJyxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFBheUFtb3VudFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgUmVtYXJrOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+mjjumZqei+vuaIkOadoeS7ticsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVtYXJrJyxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUmVtYXJrVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAvL+S9v+eUqOi0puWNlVxyXG4gICAgICAgICAgICBVc2VCaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S9v+eUqOi0puWNlScsXHJcbiAgICAgICAgICAgICAgICBVc2VCaWxsOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogJ+aYrycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ04nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogJ+WQpicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBVc2VCaWxsQ2hlY2tlZDogJycsXHJcbiAgICAgICAgICAgIC8v5Y+v5pS25qy+XHJcbiAgICAgICAgICAgIElzQWNjZXB0YWJsZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj6/mlLbmrL4nLFxyXG4gICAgICAgICAgICAgICAgSXNBY2NlcHRhYmxlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogJ+aYrycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ04nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogJ+WQpicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBJc0FjY2VwdGFibGVDaGVja2VkOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdERhdGEoKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuUmlza0Jhc2ljQW1vdW50VmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVDYXNlUmlza0NoYXJnZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNVc2VCaWxsKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Vc2VCaWxsQ2hlY2tlZCA9ICF0aGlzLlVzZUJpbGxDaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgSXNBY2NlcHRhYmxlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Jc0FjY2VwdGFibGVDaGVja2VkID0gIXRoaXMuSXNBY2NlcHRhYmxlQ2hlY2tlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHdhdGNoID0ge1xyXG4gICAgICAgICAgICBSaXNrQmFzaWNBbW91bnRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGEuUmlza0Jhc2ljQW1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBSZW1hcmtWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGEuUmVtYXJrID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQYXlBbW91bnRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGEuUGF5QW1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBVc2VCaWxsQ2hlY2tlZChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViQ2FzZVJpc2tDaGFyZ2VEYXRhLlVzZUJpbGwgPSB0aGlzLlVzZUJpbGwuVXNlQmlsbFswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGEuVXNlQmlsbCA9IHRoaXMuVXNlQmlsbC5Vc2VCaWxsWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgSXNBY2NlcHRhYmxlQ2hlY2tlZChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViQ2FzZVJpc2tDaGFyZ2VEYXRhLklzQWNjZXB0YWJsZSA9IHRoaXMuSXNBY2NlcHRhYmxlLklzQWNjZXB0YWJsZVswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGEuSXNBY2NlcHRhYmxlID0gdGhpcy5Jc0FjY2VwdGFibGUuSXNBY2NlcHRhYmxlWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXN5bmMgQ3JlYXRlT3JVcGRhdGVDYXNlUmlza0NoYXJnZSgpe1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlUGF5RGV0YWlsL0NyZWF0ZU9yVXBkYXRlQ2FzZVJpc2tDaGFyZ2UnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o+Q5Lqk5oiQ5YqfJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iOt+WPluW+hee8lui+keeahOaVsOaNrlxyXG4gICAgICAgIEdldFBlbmRpbmdlRWRpdERhdGEoY2hhcmdlSWQpe1xyXG4gICAgICAgICAgICB2YXIgcmlza0NoYXJnZURhdGFMaXN0PSB3eC5nZXRTdG9yYWdlU3luYygnUklTS19DSEFSR0VMSVNUX0RBVEFTJyk7XHJcbiAgICAgICAgICAgIHZhciByaXNrbENoYXJnZURhdGE9e307XHJcbiAgICAgICAgICAgIGZvcih2YXIgaW5kZXggaW4gcmlza0NoYXJnZURhdGFMaXN0KXtcclxuICAgICAgICAgICAgICAgIGlmKHJpc2tDaGFyZ2VEYXRhTGlzdFtpbmRleF0uaWQ9PWNoYXJnZUlkKXtcclxuICAgICAgICAgICAgICAgICAgICByaXNrbENoYXJnZURhdGE9cmlza0NoYXJnZURhdGFMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyhyaXNrbENoYXJnZURhdGEpLmxlbmd0aCE9PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SaXNrQmFzaWNBbW91bnRWYWx1ZT1yaXNrbENoYXJnZURhdGEucmlza0Jhc2ljQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGEuaWQ9cmlza2xDaGFyZ2VEYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QYXlBbW91bnRWYWx1ZT1yaXNrbENoYXJnZURhdGEucGF5QW1vdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZW1hcmtWYWx1ZT1yaXNrbENoYXJnZURhdGEucmVtYXJrO1xyXG4gICAgICAgICAgICAgICAgaWYocmlza2xDaGFyZ2VEYXRhLnVzZUJpbGw9PSdZJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuVXNlQmlsbENoZWNrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXNlQmlsbENoZWNrZWQ9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihyaXNrbENoYXJnZURhdGEuaXNBY2NlcHRhYmxlPT0nWScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSXNBY2NlcHRhYmxlQ2hlY2tlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc0FjY2VwdGFibGVDaGVja2VkPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXB1dGVkID0ge307XHJcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJDYXNlUmlza0NoYXJnZURhdGEuQ2FzZUlkPW9wdGlvbnMuY2FzZUlkO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VTdGF0dXMgPSBvcHRpb25zLnN0YXR1cztcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0UGVuZGluZ2VFZGl0RGF0YShvcHRpb25zLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViQ2FzZVJpc2tDaGFyZ2VEYXRhLmlkPScnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Vc2VCaWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Jc0FjY2VwdGFibGVDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uU2hvdygpIHt9O1xyXG4gICAgfVxyXG4iXX0=