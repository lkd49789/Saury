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

var createNomalCharge = function (_wepy$page) {
    _inherits(createNomalCharge, _wepy$page);

    function createNomalCharge() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, createNomalCharge);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createNomalCharge.__proto__ || Object.getPrototypeOf(createNomalCharge)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PayAmount": { "xmlns:v-bind": "", "v-bind:input.sync": "PayAmount", "v-bind:inputValue.sync": "PayAmountValue", "v-bind:twoWayTitle.once": "PayAmountValue" }, "Remark": { "v-bind:input.sync": "Remark", "v-bind:inputValue.sync": "RemarkValue", "v-bind:twoWayTitle.once": "RemarkValue" } }, _this.$events = {}, _this.components = {
            PayAmount: _input2.default,
            Remark: _input2.default
        }, _this.data = {
            //判断一次性与分阶段
            pageStatus: 0,
            //正常收费
            subNormalChargeData: {
                // CaseId: "1E584DE0-3166-E911-AC1B-B0D9BF31DAD7",
                // CprUseBill: "Y",
                // Id: "",
                // PayAmount: "12332113",
                // PayDate: "2019-04-30",
                // Remark: "定额备注",
                // UseBill: "Y",
            },
            //付款日期
            PayDate: '',
            PayDateWarning: true,
            PayAmount: {
                title: '收款金额',
                name: 'PayPeriod',
                warning: true,
                type: 'number'
            },
            PayAmountValue: '',
            Remark: {
                title: '备注',
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
            UseBillChecked: ''
        }, _this.methods = {
            submitData: function submitData() {
                if (this.PayDate && this.PayAmountValue) {
                    this.CreateOrUpdateCaseNormalCharge();
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
            PayDateChange: function PayDateChange(e) {
                this.PayDate = e.detail.value;
                this.$apply();
            },
            isUseBill: function isUseBill() {
                this.UseBillChecked = !this.UseBillChecked;
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            RemarkValue: function RemarkValue(value) {
                this.subNormalChargeData.Remark = value;
                this.$apply();
            },
            PayAmountValue: function PayAmountValue(value) {
                this.subNormalChargeData.PayAmount = value;
                this.$apply();
            },
            PayDate: function PayDate(date) {
                this.PayDateWarning = false;
                this.subNormalChargeData.PayDate = date;
                this.$apply();
            },
            UseBillChecked: function UseBillChecked(checked) {
                if (checked) {
                    this.subNormalChargeData.UseBill = this.UseBill.UseBill[0].value;
                    this.subNormalChargeData.CprUseBill = this.UseBill.UseBill[0].value;
                } else {
                    this.subNormalChargeData.UseBill = this.UseBill.UseBill[1].value;
                    this.subNormalChargeData.CprUseBill = this.UseBill.UseBill[1].value;
                }
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(createNomalCharge, [{
        key: 'CreateOrUpdateCaseNormalCharge',
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
                                return _ajax2.default.getData('/api/services/web/casePayDetail/CreateOrUpdateCaseNormalCharge', 'post', this.subNormalChargeData);

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

            function CreateOrUpdateCaseNormalCharge() {
                return _ref2.apply(this, arguments);
            }

            return CreateOrUpdateCaseNormalCharge;
        }()
        //获取待编辑的数据

    }, {
        key: 'GetPendingeEditData',
        value: function GetPendingeEditData(chargeId) {
            var nomalChargeDataList = wx.getStorageSync('NORMAL_CHARGELIST_DATAS');
            var nomalChargeData = {};
            for (var index in nomalChargeDataList) {
                if (nomalChargeDataList[index].id == chargeId) {
                    nomalChargeData = nomalChargeDataList[index];
                }
            }
            if (Object.keys(nomalChargeData).length !== 0) {
                this.PayDate = nomalChargeData.payDate;
                this.subNormalChargeData.id = nomalChargeData.id;
                this.PayAmountValue = nomalChargeData.payAmount;
                this.RemarkValue = nomalChargeData.remark;
                if (nomalChargeData.useBill == 'Y') {
                    this.UseBillChecked = true;
                } else {
                    this.UseBillChecked = false;
                }
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.subNormalChargeData.CaseId = options.caseId;
            this.pageStatus = options.status;
            if (options.id) {
                this.GetPendingeEditData(options.id);
            } else {
                this.subNormalChargeData.id = '';
                this.UseBillChecked = false;
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return createNomalCharge;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(createNomalCharge , 'pages/modules/myRegister/caseChargeAndContract/createNomalCharge'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZU5vbWFsQ2hhcmdlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZU5vbWFsQ2hhcmdlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUGF5QW1vdW50IiwiUmVtYXJrIiwiZGF0YSIsInBhZ2VTdGF0dXMiLCJzdWJOb3JtYWxDaGFyZ2VEYXRhIiwiUGF5RGF0ZSIsIlBheURhdGVXYXJuaW5nIiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsInR5cGUiLCJQYXlBbW91bnRWYWx1ZSIsIm9wdGlvbnMiLCJSZW1hcmtWYWx1ZSIsIlVzZUJpbGwiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiaXNTZWxlY3RlZCIsIlVzZUJpbGxDaGVja2VkIiwibWV0aG9kcyIsInN1Ym1pdERhdGEiLCJDcmVhdGVPclVwZGF0ZUNhc2VOb3JtYWxDaGFyZ2UiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiUGF5RGF0ZUNoYW5nZSIsImUiLCJkZXRhaWwiLCIkYXBwbHkiLCJpc1VzZUJpbGwiLCJldmVudHMiLCJ3YXRjaCIsImRhdGUiLCJjaGVja2VkIiwiQ3ByVXNlQmlsbCIsImNvbXB1dGVkIiwic2hvd0xvYWRpbmciLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwiY2hhcmdlSWQiLCJub21hbENoYXJnZURhdGFMaXN0IiwiZ2V0U3RvcmFnZVN5bmMiLCJub21hbENoYXJnZURhdGEiLCJpbmRleCIsImlkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBheURhdGUiLCJwYXlBbW91bnQiLCJyZW1hcmsiLCJ1c2VCaWxsIiwiQ2FzZUlkIiwiY2FzZUlkIiwic3RhdHVzIiwiR2V0UGVuZGluZ2VFZGl0RGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7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QkwsUUFBbEMsRUFBMkM7QUFDdkNHLHNDQUFnQkYsb0JBQW9CRyxLQUFwQixDQUFoQjtBQUNIO0FBQ0o7QUFDRCxnQkFBR0UsT0FBT0MsSUFBUCxDQUFZSixlQUFaLEVBQTZCSyxNQUE3QixLQUFzQyxDQUF6QyxFQUEyQztBQUN2QyxxQkFBS25ELE9BQUwsR0FBYThDLGdCQUFnQk0sT0FBN0I7QUFDQSxxQkFBS3JELG1CQUFMLENBQXlCaUQsRUFBekIsR0FBNEJGLGdCQUFnQkUsRUFBNUM7QUFDQSxxQkFBSzFDLGNBQUwsR0FBb0J3QyxnQkFBZ0JPLFNBQXBDO0FBQ0EscUJBQUs3QyxXQUFMLEdBQWlCc0MsZ0JBQWdCUSxNQUFqQztBQUNBLG9CQUFHUixnQkFBZ0JTLE9BQWhCLElBQXlCLEdBQTVCLEVBQWdDO0FBQzNCLHlCQUFLMUMsY0FBTCxHQUFvQixJQUFwQjtBQUNKLGlCQUZELE1BRUs7QUFDRCx5QkFBS0EsY0FBTCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7QUFDSjs7OytCQUVNTixPLEVBQVM7QUFDWixpQkFBS1IsbUJBQUwsQ0FBeUJ5RCxNQUF6QixHQUFnQ2pELFFBQVFrRCxNQUF4QztBQUNBLGlCQUFLM0QsVUFBTCxHQUFrQlMsUUFBUW1ELE1BQTFCO0FBQ0EsZ0JBQUluRCxRQUFReUMsRUFBWixFQUFnQjtBQUNaLHFCQUFLVyxtQkFBTCxDQUF5QnBELFFBQVF5QyxFQUFqQztBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLakQsbUJBQUwsQ0FBeUJpRCxFQUF6QixHQUE0QixFQUE1QjtBQUNBLHFCQUFLbkMsY0FBTCxHQUFzQixLQUF0QjtBQUNIO0FBQ0o7OztpQ0FDUSxDQUFFOzs7O0VBN0pnQytDLGVBQUtDLEk7O2tCQUEvQnZFLGlCIiwiZmlsZSI6ImNyZWF0ZU5vbWFsQ2hhcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xyXG4gICAgaW1wb3J0IFBheUFtb3VudCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XHJcbiAgICBpbXBvcnQgUmVtYXJrIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNyZWF0ZU5vbWFsQ2hhcmdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUGF5QW1vdW50XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJQYXlBbW91bnRcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlBheUFtb3VudFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiUGF5QW1vdW50VmFsdWVcIn0sXCJSZW1hcmtcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiUmVtYXJrXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJSZW1hcmtWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlJlbWFya1ZhbHVlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgUGF5QW1vdW50LFxyXG4gICAgICAgICAgICBSZW1hcmtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5LiA5qyh5oCn5LiO5YiG6Zi25q61XHJcbiAgICAgICAgICAgIHBhZ2VTdGF0dXM6IDAsXHJcbiAgICAgICAgICAgIC8v5q2j5bi45pS26LS5XHJcbiAgICAgICAgICAgIHN1Yk5vcm1hbENoYXJnZURhdGE6IHtcclxuICAgICAgICAgICAgICAgIC8vIENhc2VJZDogXCIxRTU4NERFMC0zMTY2LUU5MTEtQUMxQi1CMEQ5QkYzMURBRDdcIixcclxuICAgICAgICAgICAgICAgIC8vIENwclVzZUJpbGw6IFwiWVwiLFxyXG4gICAgICAgICAgICAgICAgLy8gSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBQYXlBbW91bnQ6IFwiMTIzMzIxMTNcIixcclxuICAgICAgICAgICAgICAgIC8vIFBheURhdGU6IFwiMjAxOS0wNC0zMFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gUmVtYXJrOiBcIuWumumineWkh+azqFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gVXNlQmlsbDogXCJZXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v5LuY5qy+5pel5pyfXHJcbiAgICAgICAgICAgIFBheURhdGU6ICcnLFxyXG4gICAgICAgICAgICBQYXlEYXRlV2FybmluZzp0cnVlLFxyXG4gICAgICAgICAgICBQYXlBbW91bnQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS25qy+6YeR6aKdJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYXlQZXJpb2QnLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQYXlBbW91bnRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIFJlbWFyazoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflpIfms6gnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JlbWFyaycsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFJlbWFya1ZhbHVlOiAnJyxcclxuICAgICAgICAgICAgLy/kvb/nlKjotKbljZVcclxuICAgICAgICAgICAgVXNlQmlsbDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkvb/nlKjotKbljZUnLFxyXG4gICAgICAgICAgICAgICAgVXNlQmlsbDogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdZJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6ICfmmK8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdOJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6ICflkKYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVXNlQmlsbENoZWNrZWQ6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgc3VibWl0RGF0YSgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5QYXlEYXRlJiZ0aGlzLlBheUFtb3VudFZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlQ2FzZU5vcm1hbENoYXJnZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUGF5RGF0ZUNoYW5nZShlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBheURhdGUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzVXNlQmlsbCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVXNlQmlsbENoZWNrZWQgPSAhdGhpcy5Vc2VCaWxsQ2hlY2tlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHdhdGNoID0ge1xyXG4gICAgICAgICAgICBSZW1hcmtWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJOb3JtYWxDaGFyZ2VEYXRhLlJlbWFyayA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUGF5QW1vdW50VmFsdWUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViTm9ybWFsQ2hhcmdlRGF0YS5QYXlBbW91bnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFBheURhdGUoZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QYXlEYXRlV2FybmluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViTm9ybWFsQ2hhcmdlRGF0YS5QYXlEYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFVzZUJpbGxDaGVja2VkKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJOb3JtYWxDaGFyZ2VEYXRhLlVzZUJpbGwgPSB0aGlzLlVzZUJpbGwuVXNlQmlsbFswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yk5vcm1hbENoYXJnZURhdGEuQ3ByVXNlQmlsbCA9IHRoaXMuVXNlQmlsbC5Vc2VCaWxsWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yk5vcm1hbENoYXJnZURhdGEuVXNlQmlsbCA9IHRoaXMuVXNlQmlsbC5Vc2VCaWxsWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViTm9ybWFsQ2hhcmdlRGF0YS5DcHJVc2VCaWxsID0gdGhpcy5Vc2VCaWxsLlVzZUJpbGxbMV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhc3luYyBDcmVhdGVPclVwZGF0ZUNhc2VOb3JtYWxDaGFyZ2UoKXtcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZVBheURldGFpbC9DcmVhdGVPclVwZGF0ZUNhc2VOb3JtYWxDaGFyZ2UnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJOb3JtYWxDaGFyZ2VEYXRhXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkOS6pOaIkOWKnycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5blvoXnvJbovpHnmoTmlbDmja5cclxuICAgICAgICBHZXRQZW5kaW5nZUVkaXREYXRhKGNoYXJnZUlkKXtcclxuICAgICAgICAgICAgdmFyIG5vbWFsQ2hhcmdlRGF0YUxpc3Q9IHd4LmdldFN0b3JhZ2VTeW5jKCdOT1JNQUxfQ0hBUkdFTElTVF9EQVRBUycpO1xyXG4gICAgICAgICAgICB2YXIgbm9tYWxDaGFyZ2VEYXRhPXt9O1xyXG4gICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIG5vbWFsQ2hhcmdlRGF0YUxpc3Qpe1xyXG4gICAgICAgICAgICAgICAgaWYobm9tYWxDaGFyZ2VEYXRhTGlzdFtpbmRleF0uaWQ9PWNoYXJnZUlkKXtcclxuICAgICAgICAgICAgICAgICAgICBub21hbENoYXJnZURhdGE9bm9tYWxDaGFyZ2VEYXRhTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMobm9tYWxDaGFyZ2VEYXRhKS5sZW5ndGghPT0wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuUGF5RGF0ZT1ub21hbENoYXJnZURhdGEucGF5RGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViTm9ybWFsQ2hhcmdlRGF0YS5pZD1ub21hbENoYXJnZURhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBheUFtb3VudFZhbHVlPW5vbWFsQ2hhcmdlRGF0YS5wYXlBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbWFya1ZhbHVlPW5vbWFsQ2hhcmdlRGF0YS5yZW1hcms7XHJcbiAgICAgICAgICAgICAgICBpZihub21hbENoYXJnZURhdGEudXNlQmlsbD09J1knKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc2VCaWxsQ2hlY2tlZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Vc2VCaWxsQ2hlY2tlZD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wdXRlZCA9IHt9O1xyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViTm9ybWFsQ2hhcmdlRGF0YS5DYXNlSWQ9b3B0aW9ucy5jYXNlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRQZW5kaW5nZUVkaXREYXRhKG9wdGlvbnMuaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJOb3JtYWxDaGFyZ2VEYXRhLmlkPScnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Vc2VCaWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblNob3coKSB7fTtcclxuICAgIH1cclxuIl19