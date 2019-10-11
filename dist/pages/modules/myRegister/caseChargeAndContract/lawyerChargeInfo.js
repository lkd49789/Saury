'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lawyerChargeInfo = function (_wepy$page) {
    _inherits(lawyerChargeInfo, _wepy$page);

    function lawyerChargeInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, lawyerChargeInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = lawyerChargeInfo.__proto__ || Object.getPrototypeOf(lawyerChargeInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PaidParty": { "xmlns:v-bind": "", "v-bind:options.sync": "PaidParty", "v-bind:index.sync": "PaidPartyIndex", "v-bind:twoWayTitle.once": "PaidPartyIndex" }, "ChargeLimit": { "v-bind:input.sync": "ChargeLimit", "v-bind:inputValue.sync": "ChargeLimitValue", "v-bind:twoWayTitle.once": "ChargeLimitValue" }, "Currency": { "v-bind:options.sync": "Currency", "v-bind:index.sync": "CurrencyIndex", "v-bind:twoWayTitle.once": "CurrencyIndex" }, "ExchangeRate": { "v-bind:options.sync": "ExchangeRate", "v-bind:index.sync": "ExchangeRateIndex", "v-bind:twoWayTitle.once": "ExchangeRateIndex" }, "ExchangeRateValue": { "v-bind:input.sync": "ExchangeRateValue", "v-bind:inputValue.sync": "ExchangeRateValueValue", "v-bind:twoWayTitle.once": "ExchangeRateValueValue" }, "TargetAmount": { "v-bind:input.sync": "TargetAmount", "v-bind:inputValue.sync": "TargetAmountValue", "v-bind:twoWayTitle.once": "TargetAmountValue" }, "TargetProrate": { "v-bind:input.sync": "TargetProrate", "v-bind:inputValue.sync": "TargetProrateValue", "v-bind:twoWayTitle.once": "TargetProrateValue" }, "CostLimit": { "v-bind:input.sync": "CostLimit", "v-bind:inputValue.sync": "CostLimitValue", "v-bind:twoWayTitle.once": "CostLimitValue" }, "FreeHours": { "v-bind:input.sync": "FreeHours", "v-bind:inputValue.sync": "FreeHoursValue", "v-bind:twoWayTitle.once": "FreeHoursValue" } }, _this.$events = {}, _this.components = {
            PaidParty: _option2.default,
            ChargeLimit: _input2.default,
            Currency: _option2.default,
            ExchangeRate: _option2.default,
            ExchangeRateValue: _input2.default,
            TargetAmount: _input2.default,
            TargetProrate: _input2.default,
            CostLimit: _input2.default,
            FreeHours: _input2.default
        }, _this.data = {
            submitData: {},
            caseId: '',
            //案件项下的办案费用支出
            PaidParty: {
                title: '案件项下的办案费用支出',
                name: 'PaidParty',
                value: [''],
                displayText: ['请选择'],
                warning: false
            },
            PaidPartyIndex: 0,
            //办案费限额
            ChargeLimit: {
                title: '办案费限额',
                name: 'ChargeLimit',
                warning: false,
                type: 'text',
                options: false
            },
            ChargeLimitValue: '',
            //货币类型
            Currency: {
                title: '货币类型',
                name: 'Currency',
                value: [],
                displayText: [],
                warning: false
            },
            CurrencyIndex: 0,
            //约定汇率
            ExchangeRate: {
                title: '约定汇率',
                name: 'ExchangeRate',
                value: [],
                displayText: [],
                warning: false
            },
            ExchangeRateIndex: 0,
            //汇率
            ExchangeRateValue: {
                title: '汇率',
                name: 'ExchangeRateValue',
                warning: false,
                type: 'text',
                options: false
            },
            ExchangeRateValueValue: '',
            //使用标的
            IsTarget: {
                title: '使用标的',
                IsTarget: []
            },
            IsTargetChecked: '',
            // 标的金额
            TargetAmount: {
                title: '标的金额',
                name: 'TargetAmount',
                warning: false,
                type: 'text',
                options: false
            },
            TargetAmountValue: '',
            // 标的比例
            TargetProrate: {
                title: '标的比例（%）',
                name: 'TargetProrate',
                warning: false,
                type: 'text',
                options: false
            },
            TargetProrateValue: '',
            // 律师费用
            CostLimit: {
                title: '律师费用',
                name: 'CostLimit',
                warning: false,
                type: 'text',
                options: false,
                isDisabled: true
            },
            CostLimitValue: '',
            // 免费小时
            FreeHours: {
                title: '免费小时',
                name: 'FreeHours',
                warning: false,
                type: 'text',
                options: false
            },
            FreeHoursValue: '',
            //收费方式
            PayStyle: [],
            isNextBtn: false,
            CaseContractList: [], //附件
            docShow: false // 附件显示与否
        }, _this.methods = {
            isNextPage: function isNextPage() {
                var _this2 = this;

                if (this.isNextBtn) {
                    wx.setStorage({
                        key: 'CREATE_LAWYERCHARGE_DATA',
                        data: this.submitData,
                        success: function success() {
                            wx.navigateTo({
                                url: './chooseChargeMethod?id=' + _this2.caseId
                            });
                        }
                    });
                } else {
                    this.CreateOrUpdateCaseCharge();
                }
            },
            checkboxChange: function checkboxChange(e) {
                if (e.detail.value.length !== 0) {
                    var PayStyleValue = e.detail.value.sort();
                    this.submitData.PayStyle = PayStyleValue.join(',');
                    this.isNextBtn = true;
                } else {
                    this.submitData.PayStyle = '';
                    this.isNextBtn = false;
                }
                this.$apply();
            },
            IsTarget: function IsTarget() {
                this.IsTargetChecked = !this.IsTargetChecked;
                this.$apply();
            },
            upload: function upload() {
                var _this3 = this;

                wx.showActionSheet({
                    itemList: ['相册或相机拍照', '本地文件'],
                    success: function success(re) {
                        if (re.tapIndex === 0) {
                            wx.chooseImage({
                                count: 1,
                                sizeType: ['original', 'compressed'],
                                sourceType: ['album', 'camera'],
                                success: function success(res) {
                                    // tempFilePath可以作为img标签的src属性显示图片
                                    var tempFilePaths = res.tempFilePaths;
                                    _this3.uploadFile(tempFilePaths[0], _this3.caseId);
                                }
                            });
                        } else {
                            wx.chooseMessageFile({
                                count: 1,
                                type: 'file',
                                success: function success(res) {
                                    // tempFilePath可以作为img标签的src属性显示图片
                                    var tempFilePaths = res.tempFilePaths;
                                    _this3.uploadFile(tempFilePaths[0], _this3.caseId);
                                }
                            });
                        }
                    },
                    fail: function fail(res) {
                        console.log(res.errMsg);
                    }
                });
            }
        }, _this.events = {}, _this.watch = {
            PaidPartyIndex: function PaidPartyIndex(index) {
                this.submitData.PaidParty = this.PaidParty.value[index];
                this.$apply();
            },
            ChargeLimitValue: function ChargeLimitValue(value) {
                this.submitData.ChargeLimit = value;
                this.$apply();
            },
            CurrencyIndex: function CurrencyIndex(index) {
                this.submitData.Currency = this.Currency.value[index];
                this.$apply();
            },
            ExchangeRateIndex: function ExchangeRateIndex(index) {
                this.submitData.ExchangeRate = this.ExchangeRate.value[index];
                this.$apply();
            },
            ExchangeRateValueValue: function ExchangeRateValueValue(value) {
                this.submitData.ExchangeRateValue = value;
                this.$apply();
            },
            IsTargetChecked: function IsTargetChecked(checked) {
                if (checked) {
                    this.submitData.IsTarget = this.IsTarget.IsTarget[0].value;
                } else {
                    this.submitData.IsTarget = this.IsTarget.IsTarget[1].value;
                }
                this.$apply();
            },
            TargetAmountValue: function TargetAmountValue(value) {
                this.submitData.TargetAmount = value;
            },
            TargetProrateValue: function TargetProrateValue(value) {
                this.submitData.TargetProrate = value;
            },
            FreeHoursValue: function FreeHoursValue(value) {
                this.submitData.FreeHours = value;
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(lawyerChargeInfo, [{
        key: 'uploadFile',

        // 上传合同附件
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file, caseid) {
                var resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: '上传中', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context.next = 3;
                                return _ajax2.default.uploadFile('/api/services/web/document/uploadCaseContract', file, { caseid: caseid }, 'file');

                            case 3:
                                resData = _context.sent;

                                wx.hideLoading();
                                if (resData.statusCode == 200) {
                                    wx.showToast({
                                        title: '成功',
                                        icon: 'success',
                                        duration: 2000
                                    });
                                    this.GetCaseContractList();
                                } else {
                                    wx.showToast({
                                        title: result.error.message, //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function uploadFile(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return uploadFile;
        }()
    }, {
        key: 'GetCaseChargeAndContractForEdit',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, CaseChargeAndContractData, payStyle, payStyle_index, PayStyle_index, PaidParty, PaidParty_index, Currency, Currency_index, ExchangeRate, exchangeRate_index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeAndContractForEdit', 'post', {
                                    Id: this.caseId
                                });

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    // console.log(resData.data.result);
                                    CaseChargeAndContractData = resData.data.result;
                                    //收费方式

                                    this.PayStyle = CaseChargeAndContractData.payStyleList;
                                    if (CaseChargeAndContractData.payStyle) {
                                        this.isNextBtn = true;
                                        this.submitData.PayStyle = CaseChargeAndContractData.payStyle;
                                        payStyle = CaseChargeAndContractData.payStyle.split(',');

                                        for (payStyle_index in payStyle) {
                                            for (PayStyle_index in this.PayStyle) {
                                                if (payStyle[payStyle_index] == this.PayStyle[PayStyle_index].value) {
                                                    this.PayStyle[PayStyle_index].isSelected = true;
                                                }
                                            }
                                        }
                                    }
                                    //案件项下的办案费支出由
                                    PaidParty = this.cacheData(CaseChargeAndContractData.caWhoPayList);

                                    this.PaidParty.value = PaidParty.value;
                                    this.PaidParty.displayText = PaidParty.displayText;
                                    if (CaseChargeAndContractData.paidParty) {
                                        for (PaidParty_index in PaidParty.value) {
                                            if (PaidParty.value[PaidParty_index] == CaseChargeAndContractData.paidParty) {
                                                this.PaidPartyIndex = PaidParty_index;
                                            }
                                        }
                                    }
                                    //办案费限额
                                    this.ChargeLimitValue = CaseChargeAndContractData.chargeLimit;
                                    //货币类型
                                    Currency = this.cacheData(CaseChargeAndContractData.currencyList);

                                    this.Currency.value = Currency.value;
                                    this.Currency.displayText = Currency.displayText;
                                    if (CaseChargeAndContractData.currency) {
                                        for (Currency_index in Currency.value) {
                                            if (Currency.value[Currency_index] == CaseChargeAndContractData.currency) {
                                                this.CurrencyIndex = Currency_index;
                                            }
                                        }
                                    }
                                    //约定汇率
                                    ExchangeRate = this.cacheData(CaseChargeAndContractData.rateRoleList);

                                    this.ExchangeRate.value = ExchangeRate.value;
                                    this.ExchangeRate.displayText = ExchangeRate.displayText;
                                    if (CaseChargeAndContractData.exchangeRate) {
                                        for (exchangeRate_index in ExchangeRate.value) {
                                            if (ExchangeRate.value[exchangeRate_index] == CaseChargeAndContractData.exchangeRate) {
                                                this.ExchangeRateIndex = exchangeRate_index;
                                            }
                                        }
                                    }
                                    //汇率
                                    this.ExchangeRateValueValue = CaseChargeAndContractData.exchangeRateValue;
                                    //是否标的
                                    this.IsTarget.IsTarget = CaseChargeAndContractData.whetherList;
                                    if (CaseChargeAndContractData.isTarget == 'Y') {
                                        this.IsTargetChecked = true;
                                    } else {
                                        this.IsTargetChecked = false;
                                    }
                                    //标的金额
                                    this.TargetAmountValue = CaseChargeAndContractData.targetAmount;
                                    //标的比例
                                    this.TargetProrateValue = CaseChargeAndContractData.TargetProrate;
                                    //律师费用
                                    this.CostLimitValue = CaseChargeAndContractData.costLimit;
                                    this.$apply();
                                    //免费小时
                                    this.FreeHoursValue = CaseChargeAndContractData.freeHours;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetCaseChargeAndContractForEdit() {
                return _ref3.apply(this, arguments);
            }

            return GetCaseChargeAndContractForEdit;
        }()
        //提交数据

    }, {
        key: 'CreateOrUpdateCaseCharge',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/case/CreateOrUpdateCaseCharge', 'post', this.submitData);

                            case 3:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    wx.setStorage({
                                        key: 'CREATE_LAWYERCHARGE_DATA',
                                        data: this.submitData,
                                        success: function success() {
                                            wx.navigateBack({
                                                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                            });
                                        }
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function CreateOrUpdateCaseCharge() {
                return _ref4.apply(this, arguments);
            }

            return CreateOrUpdateCaseCharge;
        }()
    }, {
        key: 'cacheData',
        value: function cacheData(data) {
            var filterData = {
                value: [''],
                displayText: ['请选择']
            };
            for (var index = 0; index < data.length; index++) {
                filterData.value[index + 1] = data[index].value;
                filterData.displayText[index + 1] = data[index].displayText;
            }
            return filterData;
        }
    }, {
        key: 'GetCaseContractList',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _ref6, data;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _ajax2.default.getData('/api/services/web/document/GetCaseContractList', 'post', { id: this.caseId });

                            case 2:
                                _ref6 = _context4.sent;
                                data = _ref6.data;

                                console.log(data.result);
                                if (data.result.length > 0) {
                                    data.result[0].creationTime = data.result[0].creationTime.split('T')[0];this.CaseContractList = data.result;
                                    this.docShow = true;
                                }
                                this.$apply();

                            case 7:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function GetCaseContractList() {
                return _ref5.apply(this, arguments);
            }

            return GetCaseContractList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.caseId = options.id;
            // this.caseId = '894A9A68-AA61-E911-AC1B-B0D9BF31DAD7'
            this.submitData = {
                AllocBaseAmount: "0",
                AllocStyle: "1",
                Category: "",
                ChargeLimit: "",
                CostLimit: "",
                Currency: "",
                ExchangeRate: "",
                ExchangeRateValue: "",
                FreeHours: "",
                Id: options.id,
                IsTarget: "",
                LimitFee: "",
                LimitHour: "",
                PaidParty: "",
                PayDetailHourly: "2",
                PayDetailQuota: "1",
                PayDetailRisk: "1",
                PayPeriod: "",
                PayStyle: "",
                TargetAmount: "",
                TargetProrate: "",
                allocstyle: ""
            }, this.GetCaseChargeAndContractForEdit();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.GetCaseContractList();
        }
    }]);

    return lawyerChargeInfo;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(lawyerChargeInfo , 'pages/modules/myRegister/caseChargeAndContract/lawyerChargeInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhd3llckNoYXJnZUluZm8uanMiXSwibmFtZXMiOlsibGF3eWVyQ2hhcmdlSW5mbyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBhaWRQYXJ0eSIsIkNoYXJnZUxpbWl0IiwiQ3VycmVuY3kiLCJFeGNoYW5nZVJhdGUiLCJFeGNoYW5nZVJhdGVWYWx1ZSIsIlRhcmdldEFtb3VudCIsIlRhcmdldFByb3JhdGUiLCJDb3N0TGltaXQiLCJGcmVlSG91cnMiLCJkYXRhIiwic3VibWl0RGF0YSIsImNhc2VJZCIsInRpdGxlIiwibmFtZSIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJ3YXJuaW5nIiwiUGFpZFBhcnR5SW5kZXgiLCJ0eXBlIiwib3B0aW9ucyIsIkNoYXJnZUxpbWl0VmFsdWUiLCJDdXJyZW5jeUluZGV4IiwiRXhjaGFuZ2VSYXRlSW5kZXgiLCJFeGNoYW5nZVJhdGVWYWx1ZVZhbHVlIiwiSXNUYXJnZXQiLCJJc1RhcmdldENoZWNrZWQiLCJUYXJnZXRBbW91bnRWYWx1ZSIsIlRhcmdldFByb3JhdGVWYWx1ZSIsImlzRGlzYWJsZWQiLCJDb3N0TGltaXRWYWx1ZSIsIkZyZWVIb3Vyc1ZhbHVlIiwiUGF5U3R5bGUiLCJpc05leHRCdG4iLCJDYXNlQ29udHJhY3RMaXN0IiwiZG9jU2hvdyIsIm1ldGhvZHMiLCJpc05leHRQYWdlIiwid3giLCJzZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJDcmVhdGVPclVwZGF0ZUNhc2VDaGFyZ2UiLCJjaGVja2JveENoYW5nZSIsImUiLCJkZXRhaWwiLCJsZW5ndGgiLCJQYXlTdHlsZVZhbHVlIiwic29ydCIsImpvaW4iLCIkYXBwbHkiLCJ1cGxvYWQiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInJlIiwidGFwSW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwidGVtcEZpbGVQYXRocyIsInJlcyIsInVwbG9hZEZpbGUiLCJjaG9vc2VNZXNzYWdlRmlsZSIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZXJyTXNnIiwiZXZlbnRzIiwid2F0Y2giLCJpbmRleCIsImNoZWNrZWQiLCJjb21wdXRlZCIsImZpbGUiLCJjYXNlaWQiLCJzaG93TG9hZGluZyIsIm1hc2siLCJhamF4IiwicmVzRGF0YSIsImhpZGVMb2FkaW5nIiwic3RhdHVzQ29kZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIkdldENhc2VDb250cmFjdExpc3QiLCJyZXN1bHQiLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXREYXRhIiwiSWQiLCJDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhIiwicGF5U3R5bGVMaXN0IiwicGF5U3R5bGUiLCJzcGxpdCIsInBheVN0eWxlX2luZGV4IiwiUGF5U3R5bGVfaW5kZXgiLCJpc1NlbGVjdGVkIiwiY2FjaGVEYXRhIiwiY2FXaG9QYXlMaXN0IiwicGFpZFBhcnR5IiwiUGFpZFBhcnR5X2luZGV4IiwiY2hhcmdlTGltaXQiLCJjdXJyZW5jeUxpc3QiLCJjdXJyZW5jeSIsIkN1cnJlbmN5X2luZGV4IiwicmF0ZVJvbGVMaXN0IiwiZXhjaGFuZ2VSYXRlIiwiZXhjaGFuZ2VSYXRlX2luZGV4IiwiZXhjaGFuZ2VSYXRlVmFsdWUiLCJ3aGV0aGVyTGlzdCIsImlzVGFyZ2V0IiwidGFyZ2V0QW1vdW50IiwiY29zdExpbWl0IiwiZnJlZUhvdXJzIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJmaWx0ZXJEYXRhIiwiaWQiLCJjcmVhdGlvblRpbWUiLCJBbGxvY0Jhc2VBbW91bnQiLCJBbGxvY1N0eWxlIiwiQ2F0ZWdvcnkiLCJMaW1pdEZlZSIsIkxpbWl0SG91ciIsIlBheURldGFpbEhvdXJseSIsIlBheURldGFpbFF1b3RhIiwiUGF5RGV0YWlsUmlzayIsIlBheVBlcmlvZCIsImFsbG9jc3R5bGUiLCJHZXRDYXNlQ2hhcmdlQW5kQ29udHJhY3RGb3JFZGl0Iiwid2VweSIsInBhZ2UiXSwibWFw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SzZFLE1BQUwsQ0FBWSxDQUFaLEVBQWVpQyxZQUFmLENBQTRCekIsS0FBNUIsQ0FBa0MsR0FBbEMsRUFBdUMsQ0FBdkMsQ0FBL0IsQ0FBeUUsS0FBSzdELGdCQUFMLEdBQXlCeEIsS0FBSzZFLE1BQTlCO0FBQ3pFLHlDQUFLcEQsT0FBTCxHQUFlLElBQWY7QUFDTDtBQUNELHFDQUFLaUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUVJaEMsTyxFQUFTO0FBQ1osaUJBQUtSLE1BQUwsR0FBY1EsUUFBUW1HLEVBQXRCO0FBQ0E7QUFDQSxpQkFBSzVHLFVBQUwsR0FBa0I7QUFDVjhHLGlDQUFpQixHQURQO0FBRVZDLDRCQUFZLEdBRkY7QUFHVkMsMEJBQVUsRUFIQTtBQUlWekgsNkJBQWEsRUFKSDtBQUtWTSwyQkFBVyxFQUxEO0FBTVZMLDBCQUFVLEVBTkE7QUFPVkMsOEJBQWMsRUFQSjtBQVFWQyxtQ0FBbUIsRUFSVDtBQVNWSSwyQkFBVyxFQVREO0FBVVZrRixvQkFBSXZFLFFBQVFtRyxFQVZGO0FBV1Y5RiwwQkFBVSxFQVhBO0FBWVZtRywwQkFBVSxFQVpBO0FBYVZDLDJCQUFXLEVBYkQ7QUFjVjVILDJCQUFXLEVBZEQ7QUFlVjZILGlDQUFpQixHQWZQO0FBZ0JWQyxnQ0FBZ0IsR0FoQk47QUFpQlZDLCtCQUFlLEdBakJMO0FBa0JWQywyQkFBVyxFQWxCRDtBQW1CVmpHLDBCQUFVLEVBbkJBO0FBb0JWMUIsOEJBQWMsRUFwQko7QUFxQlZDLCtCQUFlLEVBckJMO0FBc0JWMkgsNEJBQVk7QUF0QkYsYUFBbEIsRUF3QkksS0FBS0MsK0JBQUwsRUF4Qko7QUF5Qkg7OztpQ0FFUTtBQUNMLGlCQUFLN0MsbUJBQUw7QUFDSDs7OztFQXJaeUM4QyxlQUFLQyxJOztrQkFBOUJ6SSxnQiIsImZpbGUiOiJsYXd5ZXJDaGFyZ2VJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgUGFpZFBhcnR5IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IENoYXJnZUxpbWl0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgQ3VycmVuY3kgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgRXhjaGFuZ2VSYXRlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IEV4Y2hhbmdlUmF0ZVZhbHVlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgVGFyZ2V0QW1vdW50IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgVGFyZ2V0UHJvcmF0ZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IENvc3RMaW1pdCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IEZyZWVIb3VycyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGF3eWVyQ2hhcmdlSW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQYWlkUGFydHlcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiUGFpZFBhcnR5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiUGFpZFBhcnR5SW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJQYWlkUGFydHlJbmRleFwifSxcIkNoYXJnZUxpbWl0XCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkNoYXJnZUxpbWl0XCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJDaGFyZ2VMaW1pdFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ2hhcmdlTGltaXRWYWx1ZVwifSxcIkN1cnJlbmN5XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiQ3VycmVuY3lcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJDdXJyZW5jeUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ3VycmVuY3lJbmRleFwifSxcIkV4Y2hhbmdlUmF0ZVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkV4Y2hhbmdlUmF0ZVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkV4Y2hhbmdlUmF0ZUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiRXhjaGFuZ2VSYXRlSW5kZXhcIn0sXCJFeGNoYW5nZVJhdGVWYWx1ZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJFeGNoYW5nZVJhdGVWYWx1ZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRXhjaGFuZ2VSYXRlVmFsdWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkV4Y2hhbmdlUmF0ZVZhbHVlVmFsdWVcIn0sXCJUYXJnZXRBbW91bnRcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiVGFyZ2V0QW1vdW50XCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJUYXJnZXRBbW91bnRWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlRhcmdldEFtb3VudFZhbHVlXCJ9LFwiVGFyZ2V0UHJvcmF0ZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJUYXJnZXRQcm9yYXRlXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJUYXJnZXRQcm9yYXRlVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJUYXJnZXRQcm9yYXRlVmFsdWVcIn0sXCJDb3N0TGltaXRcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQ29zdExpbWl0XCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJDb3N0TGltaXRWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkNvc3RMaW1pdFZhbHVlXCJ9LFwiRnJlZUhvdXJzXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkZyZWVIb3Vyc1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRnJlZUhvdXJzVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJGcmVlSG91cnNWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBQYWlkUGFydHksXG4gICAgICAgICAgICBDaGFyZ2VMaW1pdCxcbiAgICAgICAgICAgIEN1cnJlbmN5LFxuICAgICAgICAgICAgRXhjaGFuZ2VSYXRlLFxuICAgICAgICAgICAgRXhjaGFuZ2VSYXRlVmFsdWUsXG4gICAgICAgICAgICBUYXJnZXRBbW91bnQsXG4gICAgICAgICAgICBUYXJnZXRQcm9yYXRlLFxuICAgICAgICAgICAgQ29zdExpbWl0LFxuICAgICAgICAgICAgRnJlZUhvdXJzXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdWJtaXREYXRhOiB7fSxcbiAgICAgICAgICAgIGNhc2VJZDogJycsXG4gICAgICAgICAgICAvL+ahiOS7tumhueS4i+eahOWKnuahiOi0ueeUqOaUr+WHulxuICAgICAgICAgICAgUGFpZFBhcnR5OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmoYjku7bpobnkuIvnmoTlip7moYjotLnnlKjmlK/lh7onLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWlkUGFydHknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbJyddLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbJ+ivt+mAieaLqSddLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUGFpZFBhcnR5SW5kZXg6IDAsXG4gICAgICAgICAgICAvL+WKnuahiOi0uemZkOminVxuICAgICAgICAgICAgQ2hhcmdlTGltaXQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKnuahiOi0uemZkOminScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NoYXJnZUxpbWl0JyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDaGFyZ2VMaW1pdFZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v6LSn5biB57G75Z6LXG4gICAgICAgICAgICBDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6LSn5biB57G75Z6LJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ3VycmVuY3knLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDdXJyZW5jeUluZGV4OiAwLFxuICAgICAgICAgICAgLy/nuqblrprmsYfnjodcbiAgICAgICAgICAgIEV4Y2hhbmdlUmF0ZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn57qm5a6a5rGH546HJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXhjaGFuZ2VSYXRlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRXhjaGFuZ2VSYXRlSW5kZXg6IDAsXG4gICAgICAgICAgICAvL+axh+eOh1xuICAgICAgICAgICAgRXhjaGFuZ2VSYXRlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+axh+eOhycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0V4Y2hhbmdlUmF0ZVZhbHVlJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFeGNoYW5nZVJhdGVWYWx1ZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v5L2/55So5qCH55qEXG4gICAgICAgICAgICBJc1RhcmdldDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5L2/55So5qCH55qEJyxcbiAgICAgICAgICAgICAgICBJc1RhcmdldDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSXNUYXJnZXRDaGVja2VkOiAnJyxcbiAgICAgICAgICAgIC8vIOagh+eahOmHkeminVxuICAgICAgICAgICAgVGFyZ2V0QW1vdW50OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmoIfnmoTph5Hpop0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdUYXJnZXRBbW91bnQnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRhcmdldEFtb3VudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8vIOagh+eahOavlOS+i1xuICAgICAgICAgICAgVGFyZ2V0UHJvcmF0ZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qCH55qE5q+U5L6L77yIJe+8iScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RhcmdldFByb3JhdGUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRhcmdldFByb3JhdGVWYWx1ZTogJycsXG4gICAgICAgICAgICAvLyDlvovluIjotLnnlKhcbiAgICAgICAgICAgIENvc3RMaW1pdDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5b6L5biI6LS555SoJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ29zdExpbWl0JyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNEaXNhYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENvc3RMaW1pdFZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8vIOWFjei0ueWwj+aXtlxuICAgICAgICAgICAgRnJlZUhvdXJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflhY3otLnlsI/ml7YnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdGcmVlSG91cnMnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBGcmVlSG91cnNWYWx1ZTogJycsXG4gICAgICAgICAgICAvL+aUtui0ueaWueW8j1xuICAgICAgICAgICAgUGF5U3R5bGU6IFtdLFxuICAgICAgICAgICAgaXNOZXh0QnRuOiBmYWxzZSxcbiAgICAgICAgICAgIENhc2VDb250cmFjdExpc3Q6W10sICAgLy/pmYTku7ZcbiAgICAgICAgICAgIGRvY1Nob3c6ZmFsc2UgICAvLyDpmYTku7bmmL7npLrkuI7lkKZcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGlzTmV4dFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNOZXh0QnRuKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnQ1JFQVRFX0xBV1lFUkNIQVJHRV9EQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3VibWl0RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9jaG9vc2VDaGFyZ2VNZXRob2Q/aWQ9JyArIHRoaXMuY2FzZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVDYXNlQ2hhcmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBQYXlTdHlsZVZhbHVlID0gZS5kZXRhaWwudmFsdWUuc29ydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGF5U3R5bGUgPSBQYXlTdHlsZVZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTmV4dEJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGF5U3R5bGU9JydcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc05leHRCdG4gPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIElzVGFyZ2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuSXNUYXJnZXRDaGVja2VkID0gIXRoaXMuSXNUYXJnZXRDaGVja2VkO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBsb2FkKCl7IFxuICAgICAgICAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgICAgICBpdGVtTGlzdDpbJ+ebuOWGjOaIluebuOacuuaLjeeFpycsJ+acrOWcsOaWh+S7tiddLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgOiByZSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYocmUudGFwSW5kZXggPT09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgOiByZXMgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlKHRlbXBGaWxlUGF0aHNbMF0sdGhpcy5jYXNlSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5jaG9vc2VNZXNzYWdlRmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgOiByZXMgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlKHRlbXBGaWxlUGF0aHNbMF0sdGhpcy5jYXNlSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbCAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICAvLyDkuIrkvKDlkIjlkIzpmYTku7ZcbiAgICAgICAgYXN5bmMgdXBsb2FkRmlsZShmaWxlLGNhc2VpZCl7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuIrkvKDkuK0nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIGxldCByZXNEYXRhID0gYXdhaXQgYWpheC51cGxvYWRGaWxlKCcvYXBpL3NlcnZpY2VzL3dlYi9kb2N1bWVudC91cGxvYWRDYXNlQ29udHJhY3QnLFxuICAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICAge2Nhc2VpZH0sXG4gICAgICAgICAgICAgJ2ZpbGUnXG4gICAgICAgICAgICAgKVxuICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ29udHJhY3RMaXN0KCkgICAgIFxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgdGl0bGU6cmVzdWx0LmVycm9yLm1lc3NhZ2UgLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgUGFpZFBhcnR5SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFpZFBhcnR5ID0gdGhpcy5QYWlkUGFydHkudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ2hhcmdlTGltaXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5DaGFyZ2VMaW1pdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ3VycmVuY3lJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5DdXJyZW5jeSA9IHRoaXMuQ3VycmVuY3kudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRXhjaGFuZ2VSYXRlSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRXhjaGFuZ2VSYXRlID0gdGhpcy5FeGNoYW5nZVJhdGUudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRXhjaGFuZ2VSYXRlVmFsdWVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5FeGNoYW5nZVJhdGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSXNUYXJnZXRDaGVja2VkKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNUYXJnZXQgPSB0aGlzLklzVGFyZ2V0LklzVGFyZ2V0WzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Jc1RhcmdldCA9IHRoaXMuSXNUYXJnZXQuSXNUYXJnZXRbMV0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVGFyZ2V0QW1vdW50VmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuVGFyZ2V0QW1vdW50ID0gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVGFyZ2V0UHJvcmF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlRhcmdldFByb3JhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBGcmVlSG91cnNWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5GcmVlSG91cnMgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIGFzeW5jIEdldENhc2VDaGFyZ2VBbmRDb250cmFjdEZvckVkaXQoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlQ2hhcmdlQW5kQ29udHJhY3RGb3JFZGl0JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHRoaXMuY2FzZUlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNEYXRhLmRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB2YXIgQ2FzZUNoYXJnZUFuZENvbnRyYWN0RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy/mlLbotLnmlrnlvI9cbiAgICAgICAgICAgICAgICB0aGlzLlBheVN0eWxlID0gQ2FzZUNoYXJnZUFuZENvbnRyYWN0RGF0YS5wYXlTdHlsZUxpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEucGF5U3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc05leHRCdG4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGF5U3R5bGUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLnBheVN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGF5U3R5bGUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLnBheVN0eWxlLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcGF5U3R5bGVfaW5kZXggaW4gcGF5U3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFBheVN0eWxlX2luZGV4IGluIHRoaXMuUGF5U3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF5U3R5bGVbcGF5U3R5bGVfaW5kZXhdID09IHRoaXMuUGF5U3R5bGVbUGF5U3R5bGVfaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5U3R5bGVbUGF5U3R5bGVfaW5kZXhdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+ahiOS7tumhueS4i+eahOWKnuahiOi0ueaUr+WHuueUsVxuICAgICAgICAgICAgICAgIHZhciBQYWlkUGFydHkgPSB0aGlzLmNhY2hlRGF0YShDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmNhV2hvUGF5TGlzdClcbiAgICAgICAgICAgICAgICB0aGlzLlBhaWRQYXJ0eS52YWx1ZSA9IFBhaWRQYXJ0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBhaWRQYXJ0eS5kaXNwbGF5VGV4dCA9IFBhaWRQYXJ0eS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoQ2FzZUNoYXJnZUFuZENvbnRyYWN0RGF0YS5wYWlkUGFydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgUGFpZFBhcnR5X2luZGV4IGluIFBhaWRQYXJ0eS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFBhaWRQYXJ0eS52YWx1ZVtQYWlkUGFydHlfaW5kZXhdID09IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEucGFpZFBhcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYWlkUGFydHlJbmRleCA9IFBhaWRQYXJ0eV9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+WKnuahiOi0uemZkOminVxuICAgICAgICAgICAgICAgIHRoaXMuQ2hhcmdlTGltaXRWYWx1ZSA9IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEuY2hhcmdlTGltaXQ7XG4gICAgICAgICAgICAgICAgLy/otKfluIHnsbvlnotcbiAgICAgICAgICAgICAgICB2YXIgQ3VycmVuY3kgPSB0aGlzLmNhY2hlRGF0YShDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmN1cnJlbmN5TGlzdClcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbmN5LnZhbHVlID0gQ3VycmVuY3kudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5DdXJyZW5jeS5kaXNwbGF5VGV4dCA9IEN1cnJlbmN5LmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgIGlmIChDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEN1cnJlbmN5X2luZGV4IGluIEN1cnJlbmN5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ3VycmVuY3kudmFsdWVbQ3VycmVuY3lfaW5kZXhdID09IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEuY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbmN5SW5kZXggPSBDdXJyZW5jeV9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+e6puWumuaxh+eOh1xuICAgICAgICAgICAgICAgIHZhciBFeGNoYW5nZVJhdGUgPSB0aGlzLmNhY2hlRGF0YShDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLnJhdGVSb2xlTGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5FeGNoYW5nZVJhdGUudmFsdWUgPSBFeGNoYW5nZVJhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5FeGNoYW5nZVJhdGUuZGlzcGxheVRleHQgPSBFeGNoYW5nZVJhdGUuZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEuZXhjaGFuZ2VSYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGV4Y2hhbmdlUmF0ZV9pbmRleCBpbiBFeGNoYW5nZVJhdGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChFeGNoYW5nZVJhdGUudmFsdWVbZXhjaGFuZ2VSYXRlX2luZGV4XSA9PSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmV4Y2hhbmdlUmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRXhjaGFuZ2VSYXRlSW5kZXggPSBleGNoYW5nZVJhdGVfaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+axh+eOh1xuICAgICAgICAgICAgICAgIHRoaXMuRXhjaGFuZ2VSYXRlVmFsdWVWYWx1ZSA9IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEuZXhjaGFuZ2VSYXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgLy/mmK/lkKbmoIfnmoRcbiAgICAgICAgICAgICAgICB0aGlzLklzVGFyZ2V0LklzVGFyZ2V0ID0gQ2FzZUNoYXJnZUFuZENvbnRyYWN0RGF0YS53aGV0aGVyTGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoQ2FzZUNoYXJnZUFuZENvbnRyYWN0RGF0YS5pc1RhcmdldCA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc1RhcmdldENoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSXNUYXJnZXRDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8v5qCH55qE6YeR6aKdXG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRBbW91bnRWYWx1ZSA9IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEudGFyZ2V0QW1vdW50O1xuICAgICAgICAgICAgICAgIC8v5qCH55qE5q+U5L6LXG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRQcm9yYXRlVmFsdWUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLlRhcmdldFByb3JhdGU7XG4gICAgICAgICAgICAgICAgLy/lvovluIjotLnnlKhcbiAgICAgICAgICAgICAgICB0aGlzLkNvc3RMaW1pdFZhbHVlID0gQ2FzZUNoYXJnZUFuZENvbnRyYWN0RGF0YS5jb3N0TGltaXQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAvL+WFjei0ueWwj+aXtlxuICAgICAgICAgICAgICAgIHRoaXMuRnJlZUhvdXJzVmFsdWUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmZyZWVIb3VycztcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5o+Q5Lqk5pWw5o2uXG4gICAgICAgIGFzeW5jIENyZWF0ZU9yVXBkYXRlQ2FzZUNoYXJnZSgpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvQ3JlYXRlT3JVcGRhdGVDYXNlQ2hhcmdlJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdDUkVBVEVfTEFXWUVSQ0hBUkdFX0RBVEEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnN1Ym1pdERhdGEsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYWNoZURhdGEoZGF0YSkge1xuICAgICAgICAgICAgdmFyIGZpbHRlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFsnJ10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFsn6K+36YCJ5oupJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGZpbHRlckRhdGEudmFsdWVbaW5kZXggKyAxXSA9IGRhdGFbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgIGZpbHRlckRhdGEuZGlzcGxheVRleHRbaW5kZXggKyAxXSA9IGRhdGFbaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckRhdGFcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRDYXNlQ29udHJhY3RMaXN0KCl7XG4gICAgICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBhamF4LmdldERhdGEoJy9hcGkvc2VydmljZXMvd2ViL2RvY3VtZW50L0dldENhc2VDb250cmFjdExpc3QnLCdwb3N0Jyx7aWQ6dGhpcy5jYXNlSWR9KSBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0IClcbiAgICAgICAgICAgaWYoIGRhdGEucmVzdWx0Lmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgICAgICAgZGF0YS5yZXN1bHRbMF0uY3JlYXRpb25UaW1lID0gIGRhdGEucmVzdWx0WzBdLmNyZWF0aW9uVGltZS5zcGxpdCgnVCcpWzBdO3RoaXMuQ2FzZUNvbnRyYWN0TGlzdCA9ICBkYXRhLnJlc3VsdDsgICAgIFxuICAgICAgICAgICAgICAgICB0aGlzLmRvY1Nob3cgPSB0cnVlO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5jYXNlSWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgLy8gdGhpcy5jYXNlSWQgPSAnODk0QTlBNjgtQUE2MS1FOTExLUFDMUItQjBEOUJGMzFEQUQ3J1xuICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBBbGxvY0Jhc2VBbW91bnQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICBBbGxvY1N0eWxlOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIENoYXJnZUxpbWl0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBDb3N0TGltaXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIEN1cnJlbmN5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBFeGNoYW5nZVJhdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIEV4Y2hhbmdlUmF0ZVZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBGcmVlSG91cnM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIElkOiBvcHRpb25zLmlkLFxuICAgICAgICAgICAgICAgICAgICBJc1RhcmdldDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgTGltaXRGZWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIExpbWl0SG91cjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgUGFpZFBhcnR5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBQYXlEZXRhaWxIb3VybHk6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICBQYXlEZXRhaWxRdW90YTogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFBheURldGFpbFJpc2s6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBQYXlQZXJpb2Q6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFBheVN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBUYXJnZXRBbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFRhcmdldFByb3JhdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsbG9jc3R5bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VDaGFyZ2VBbmRDb250cmFjdEZvckVkaXQoKVxuICAgICAgICB9O1xuXG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUNvbnRyYWN0TGlzdCgpXG4gICAgICAgIH07XG4gICAgfVxuIl19