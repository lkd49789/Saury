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

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chooseChargeMethod = function (_wepy$page) {
    _inherits(chooseChargeMethod, _wepy$page);

    function chooseChargeMethod() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, chooseChargeMethod);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = chooseChargeMethod.__proto__ || Object.getPrototypeOf(chooseChargeMethod)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PayPeriod": { "xmlns:v-bind": "", "v-bind:input.sync": "PayPeriod", "v-bind:inputValue.sync": "PayPeriodValue", "v-bind:twoWayTitle.once": "PayPeriodValue" }, "LimitFee": { "v-bind:input.sync": "LimitFee", "v-bind:inputValue.sync": "LimitFeeValue", "v-bind:twoWayTitle.once": "LimitFeeValue" }, "LimitHour": { "v-bind:input.sync": "LimitHour", "v-bind:inputValue.sync": "LimitHourValue", "v-bind:twoWayTitle.once": "LimitHourValue" } }, _this.$events = {}, _this.components = {
            PayPeriod: _input2.default,
            LimitFee: _input2.default,
            LimitHour: _input2.default
        }, _this.data = {
            imageData: '../../../../images/next.png',
            currentTab: '',
            navbars: ['正常收费', '风险收费', '小时收费'],
            payStyle: [],
            submitData: {},
            caseId: '',
            //定额收费类别
            PayDetailQuota: [],
            PayDetailQuotaValue: 0,
            isAddShow: false,
            //风险收费类别
            PayDetailRisk: [],
            PayDetailRiskValue: 0,
            //小时收费类别ss
            PayDetailHourly: [],
            PayDetailHourlyValue: 0,
            //小时收费收费-账单周期
            PayPeriod: {
                title: '账单周期',
                name: 'PayPeriod',
                warning: false,
                type: 'text'
            },
            PayPeriodValue: '',
            //小时收费收费-账单金额
            LimitFee: {
                title: '账单金额',
                name: 'LimitFee',
                warning: false,
                type: 'text'
            },
            LimitFeeValue: '',
            //小时收费收费-账单小时
            LimitHour: {
                title: '账单小时',
                name: 'LimitHour',
                warning: false,
                type: 'text'
            },
            LimitHourValue: '',
            //收费方式列表
            normalChargeListDatas: [],
            riskChargeListDatas: [],
            lawyerChargeListDatas: []
        }, _this.methods = {
            navbarTap: function navbarTap(index) {
                this.currentTab = index;
                this.$apply();
            },
            submitData: function submitData() {
                var _this2 = this;

                wx.setStorage({
                    key: 'CREATE_LAWYERCHARGE_DATA',
                    data: this.submitData,
                    success: function success() {
                        wx.navigateTo({ url: './distributionInformation?caseId=' + _this2.caseId });
                    }
                });
            },

            //跳转至创建风险收费
            toCreateRiskCharge: function toCreateRiskCharge() {
                wx.navigateTo({
                    url: './createRiskCharge?status=' + this.PayDetailRiskValue + '&caseId=' + this.caseId
                });
            },

            //跳转至创建正常收费
            toCreateNomalCharge: function toCreateNomalCharge() {
                wx.navigateTo({
                    url: './createNomalCharge?status=' + this.PayDetailQuotaValue + '&caseId=' + this.caseId
                });
            },

            //修改律师费率
            modifyLawyerRate: function modifyLawyerRate(data, index, e) {
                if (data.chargeRatio !== e.detail.value.split('%')[0]) {
                    data.chargeRatio = e.detail.value.split('%')[0];
                    this.UpdateCaseLawyerCharge(data, index);
                }
            },
            riskOperating: function riskOperating(id, index, keyWords) {
                var _this3 = this;

                wx.showActionSheet({
                    itemList: ['编辑', '删除'], //按钮的文字数组，数组长度最大为6个,
                    //   itemColor: '#000000', //按钮的文字颜色,
                    success: function success(res) {
                        switch (res.tapIndex) {
                            case 0:
                                wx.navigateTo({
                                    url: './createRiskCharge?id=' + id + '&caseId=' + _this3.caseId + '&status=' + _this3.PayDetailRiskValue
                                });
                                break;
                            case 1:
                                _this3.DeleteCaseCharge(id, index, keyWords);
                                break;
                            default:
                                break;
                        }
                    }
                });
            },
            nomalOperating: function nomalOperating(id, index, keyWords) {
                var _this4 = this;

                wx.showActionSheet({
                    itemList: ['编辑', '删除'], //按钮的文字数组，数组长度最大为6个,
                    //   itemColor: '#000000', //按钮的文字颜色,
                    success: function success(res) {
                        switch (res.tapIndex) {
                            case 0:
                                wx.navigateTo({
                                    url: './createNomalCharge?id=' + id + '&caseId=' + _this4.caseId + '&status=' + _this4.PayDetailQuotaValue
                                });
                                break;
                            case 1:
                                _this4.DeleteCaseCharge(id, index, keyWords);
                                break;
                            default:
                                break;
                        }
                    }
                });
            },
            PayDetailQuota: function PayDetailQuota(e) {
                this.PayDetailQuotaValue = e.detail.value;
                this.$apply();
            },
            PayDetailRisk: function PayDetailRisk(e) {
                this.PayDetailRiskValue = e.detail.value;
                this.$apply();
            },
            PayDetailHourly: function PayDetailHourly(e) {
                this.PayDetailHourlyValue = e.detail.value;
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            //小时收费收费-账单周期
            PayPeriodValue: function PayPeriodValue(value) {
                this.submitData.PayPeriod = value;
                this.$apply();
            },

            //小时收费收费-账单金额
            LimitFeeValue: function LimitFeeValue(value) {
                this.submitData.LimitFee = value;
                this.$apply();
            },

            //小时收费收费-账单小时
            LimitHourValue: function LimitHourValue(value) {
                this.submitData.LimitHour = value;
                this.$apply();
            },
            normalChargeListDatas: function normalChargeListDatas(value) {
                if (this.PayDetailQuotaValue == 1 && value.length < 1 || this.PayDetailQuotaValue == 2) {
                    this.isAddShow = true;
                } else {
                    this.isAddShow = false;
                }
                this.$apply();
            },
            PayDetailQuotaValue: function PayDetailQuotaValue(value) {
                for (var PayDetailQuota_index in this.PayDetailQuota) {
                    if (this.PayDetailQuota[PayDetailQuota_index].value == value) {
                        this.PayDetailQuota[PayDetailQuota_index].isSelected = true;
                        this.submitData.PayDetailQuota = value;
                    } else {
                        this.PayDetailQuota[PayDetailQuota_index].isSelected = false;
                    }
                }
                if (value == 1 && this.normalChargeListDatas.length < 1 || value == 2) {
                    this.isAddShow = true;
                } else {
                    this.isAddShow = false;
                }
                this.$apply();
            },
            PayDetailRiskValue: function PayDetailRiskValue(value) {
                for (var PayDetailRisk_index in this.PayDetailRisk) {
                    if (this.PayDetailRisk[PayDetailRisk_index].value == value) {
                        this.PayDetailRisk[PayDetailRisk_index].isSelected = true;
                        this.submitData.PayDetailRisk = value;
                    } else {
                        this.PayDetailRisk[PayDetailRisk_index].isSelected = false;
                    }
                }
                this.$apply();
            },
            PayDetailHourlyValue: function PayDetailHourlyValue(value) {
                for (var PayDetailHourly_index in this.PayDetailHourly) {
                    if (this.PayDetailHourly[PayDetailHourly_index].value == value) {
                        this.PayDetailHourly[PayDetailHourly_index].isSelected = true;
                        this.submitData.PayDetailHourly = value;
                    } else {
                        this.PayDetailHourly[PayDetailHourly_index].isSelected = false;
                    }
                }
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(chooseChargeMethod, [{
        key: 'GetCaseChargeAndContractForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, CaseChargeAndContractData, payStyle, currentTab, payStyleList, payStyle_index, len, payStyleList_index, length;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeAndContractForEdit', 'post', {
                                    Id: this.caseId
                                });

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    CaseChargeAndContractData = resData.data.result;
                                    //收费方式
                                    //tab收费方式

                                    payStyle = this.submitData.PayStyle.split(',');
                                    currentTab = payStyle.map(function (item) {
                                        return Number(item);
                                    });

                                    this.currentTab = currentTab.sort()[0] - 1;
                                    payStyleList = CaseChargeAndContractData.payStyleList;

                                    for (payStyle_index = 0, len = payStyle.length; payStyle_index < len; payStyle_index++) {
                                        for (payStyleList_index = 0, length = payStyleList.length; payStyleList_index < length; payStyleList_index++) {
                                            if (payStyle[payStyle_index] == payStyleList[payStyleList_index].value) {
                                                // this.navbars[payStyle_index] = payStyleList[payStyleList_index].displayText;
                                                payStyleList[payStyleList_index].isSelected = true;
                                            }
                                        }
                                    }
                                    this.payStyle = payStyleList.map(function (item) {
                                        return item.isSelected;
                                    });
                                    //定额收费类别
                                    this.PayDetailQuota = CaseChargeAndContractData.fixedFeeCategoryList;
                                    this.PayDetailQuotaValue = CaseChargeAndContractData.payDetailQuota;
                                    //风险收费类别
                                    this.PayDetailRisk = CaseChargeAndContractData.riskFeeCategoryList;
                                    this.PayDetailRiskValue = CaseChargeAndContractData.payDetailRisk;
                                    //小时收费类别
                                    this.PayDetailHourly = CaseChargeAndContractData.hourlyRateCategoyList;
                                    this.PayDetailHourlyValue = CaseChargeAndContractData.payDetailHourly;
                                    //小时收费（周期，金额，小时）
                                    this.PayPeriodValue = CaseChargeAndContractData.payPeriod;
                                    this.LimitFeeValue = CaseChargeAndContractData.limitFee;
                                    this.LimitHourValue = CaseChargeAndContractData.limitHour;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseChargeAndContractForEdit() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseChargeAndContractForEdit;
        }()
        //定额收费类别-删除
        //收费类型列表数据

    }, {
        key: 'GetCaseChargeList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(caseId) {
                var id, resData, chargeListData, index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                id = caseId || this.caseId;
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeList', 'post', {
                                    id: id
                                });

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200 && resData.data.result.length !== 0) {
                                    console.log(resData.data.result);
                                    chargeListData = resData.data.result;

                                    for (index in chargeListData.normalChargeList) {
                                        chargeListData.normalChargeList[index].payDate = chargeListData.normalChargeList[index].payDate.split('T')[0];
                                    }
                                    this.normalChargeListDatas = chargeListData.normalChargeList;
                                    this.riskChargeListDatas = chargeListData.riskChargeList;
                                    this.lawyerChargeListDatas = chargeListData.lawyerChargeList;
                                    this.GetAvatar(chargeListData.lawyerChargeList);
                                    try {
                                        wx.setStorage({
                                            key: 'NORMAL_CHARGELIST_DATAS',
                                            data: chargeListData.normalChargeList
                                        });
                                    } catch (error) {
                                        console.log(error);
                                    }
                                    try {
                                        wx.setStorage({
                                            key: 'RISK_CHARGELIST_DATAS',
                                            data: chargeListData.riskChargeList
                                        });
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetCaseChargeList(_x) {
                return _ref3.apply(this, arguments);
            }

            return GetCaseChargeList;
        }()
    }, {
        key: 'GetAvatar',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
                var index, http;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.t0 = regeneratorRuntime.keys(data);

                            case 1:
                                if ((_context3.t1 = _context3.t0()).done) {
                                    _context3.next = 9;
                                    break;
                                }

                                index = _context3.t1.value;
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + data[index].userId;
                                _context3.next = 6;
                                return _ajax2.default.getAavatar(http);

                            case 6:
                                this.lawyerChargeListDatas[index].avatar = _context3.sent;
                                _context3.next = 1;
                                break;

                            case 9:
                                this.$apply();

                            case 10:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetAvatar(_x2) {
                return _ref4.apply(this, arguments);
            }

            return GetAvatar;
        }()
        //删除收费类别列表信息

    }, {
        key: 'DeleteCaseCharge',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, index, keyWords) {
                var resData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context4.next = 3;
                                return _ajax2.default.getData('/api/services/web/casePayDetail/DeleteCaseCharge', 'post', {
                                    id: id
                                });

                            case 3:
                                resData = _context4.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context4.next = 15;
                                    break;
                                }

                                _context4.t0 = keyWords;
                                _context4.next = _context4.t0 === 'nomal' ? 8 : _context4.t0 === 'risk' ? 11 : 14;
                                break;

                            case 8:
                                this.normalChargeListDatas.splice(index, 1);
                                // var nomalChargeList = wx.getStorageSync('NORMAL_CHARGELIST_DATAS');
                                try {
                                    wx.setStorage({
                                        key: 'NORMAL_CHARGELIST_DATAS',
                                        data: this.normalChargeListDatas
                                    });
                                } catch (error) {
                                    console.log(error);
                                }
                                return _context4.abrupt('break', 15);

                            case 11:
                                this.riskChargeListDatas.splice(index, 1);
                                try {
                                    wx.setStorage({
                                        key: 'RISK_CHARGELIST_DATAS',
                                        data: this.riskChargeListDatas
                                    });
                                } catch (error) {
                                    console.log(error);
                                }
                                return _context4.abrupt('break', 15);

                            case 14:
                                return _context4.abrupt('break', 15);

                            case 15:
                                this.$apply();

                            case 16:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function DeleteCaseCharge(_x3, _x4, _x5) {
                return _ref5.apply(this, arguments);
            }

            return DeleteCaseCharge;
        }()
        //更新律师费率

    }, {
        key: 'UpdateCaseLawyerCharge',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data, index) {
                var resData;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context5.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseLawyer/UpdateCaseLawyerCharge', 'post', data);

                            case 3:
                                resData = _context5.sent;

                                if (resData.statusCode == 200) {
                                    this.lawyerChargeListDatas[index] = data;
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function UpdateCaseLawyerCharge(_x6, _x7) {
                return _ref6.apply(this, arguments);
            }

            return UpdateCaseLawyerCharge;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.caseId = options.id;
            this.submitData = wx.getStorageSync('CREATE_LAWYERCHARGE_DATA');
            this.GetCaseChargeAndContractForEdit();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.GetCaseChargeList();
        }
    }]);

    return chooseChargeMethod;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(chooseChargeMethod , 'pages/modules/myRegister/caseChargeAndContract/chooseChargeMethod'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZUNoYXJnZU1ldGhvZC5qcyJdLCJuYW1lcyI6WyJjaG9vc2VDaGFyZ2VNZXRob2QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJQYXlQZXJpb2QiLCJMaW1pdEZlZSIsIkxpbWl0SG91ciIsImRhdGEiLCJpbWFnZURhdGEiLCJjdXJyZW50VGFiIiwibmF2YmFycyIsInBheVN0eWxlIiwic3VibWl0RGF0YSIsImNhc2VJZCIsIlBheURldGFpbFF1b3RhIiwiUGF5RGV0YWlsUXVvdGFWYWx1ZSIsImlzQWRkU2hvdyIsIlBheURldGFpbFJpc2siLCJQYXlEZXRhaWxSaXNrVmFsdWUiLCJQYXlEZXRhaWxIb3VybHkiLCJQYXlEZXRhaWxIb3VybHlWYWx1ZSIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJ0eXBlIiwiUGF5UGVyaW9kVmFsdWUiLCJMaW1pdEZlZVZhbHVlIiwiTGltaXRIb3VyVmFsdWUiLCJub3JtYWxDaGFyZ2VMaXN0RGF0YXMiLCJyaXNrQ2hhcmdlTGlzdERhdGFzIiwibGF3eWVyQ2hhcmdlTGlzdERhdGFzIiwibWV0aG9kcyIsIm5hdmJhclRhcCIsImluZGV4IiwiJGFwcGx5Iiwid3giLCJzZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0NyZWF0ZVJpc2tDaGFyZ2UiLCJ0b0NyZWF0ZU5vbWFsQ2hhcmdlIiwibW9kaWZ5TGF3eWVyUmF0ZSIsImUiLCJjaGFyZ2VSYXRpbyIsImRldGFpbCIsInZhbHVlIiwic3BsaXQiLCJVcGRhdGVDYXNlTGF3eWVyQ2hhcmdlIiwicmlza09wZXJhdGluZyIsImlkIiwia2V5V29yZHMiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInJlcyIsInRhcEluZGV4IiwiRGVsZXRlQ2FzZUNoYXJnZSIsIm5vbWFsT3BlcmF0aW5nIiwiZXZlbnRzIiwid2F0Y2giLCJsZW5ndGgiLCJQYXlEZXRhaWxRdW90YV9pbmRleCIsImlzU2VsZWN0ZWQiLCJQYXlEZXRhaWxSaXNrX2luZGV4IiwiUGF5RGV0YWlsSG91cmx5X2luZGV4IiwiY29tcHV0ZWQiLCJhamF4IiwiZ2V0RGF0YSIsIklkIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhIiwicmVzdWx0IiwiUGF5U3R5bGUiLCJtYXAiLCJpdGVtIiwiTnVtYmVyIiwic29ydCIsInBheVN0eWxlTGlzdCIsInBheVN0eWxlX2luZGV4IiwibGVuIiwicGF5U3R5bGVMaXN0X2luZGV4IiwiZml4ZWRGZWVDYXRlZ29yeUxpc3QiLCJwYXlEZXRhaWxRdW90YSIsInJpc2tGZWVDYXRlZ29yeUxpc3QiLCJwYXlEZXRhaWxSaXNrIiwiaG91cmx5UmF0ZUNhdGVnb3lMaXN0IiwicGF5RGV0YWlsSG91cmx5IiwicGF5UGVyaW9kIiwibGltaXRGZWUiLCJsaW1pdEhvdXIiLCJjb25zb2xlIiwibG9nIiwiY2hhcmdlTGlzdERhdGEiLCJub3JtYWxDaGFyZ2VMaXN0IiwicGF5RGF0ZSIsInJpc2tDaGFyZ2VMaXN0IiwibGF3eWVyQ2hhcmdlTGlzdCIsIkdldEF2YXRhciIsImVycm9yIiwiaHR0cCIsInVzZXJJZCIsImdldEFhdmF0YXIiLCJhdmF0YXIiLCJzaG93TG9hZGluZyIsIm1hc2siLCJzcGxpY2UiLCJvcHRpb25zIiwiZ2V0U3RvcmFnZVN5bmMiLCJHZXRDYXNlQ2hhcmdlQW5kQ29udHJhY3RGb3JFZGl0IiwiR2V0Q2FzZUNoYXJnZUxpc3QiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztJQUdxQkEsa0I7Ozs7Ozs7Ozs7Ozs7O2tOQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsV0FBdkMsRUFBbUQsMEJBQXlCLGdCQUE1RSxFQUE2RiwyQkFBMEIsZ0JBQXZILEVBQWIsRUFBc0osWUFB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QXpCLENBQWdDMUUsS0FBaEMsRUFBdUMsQ0FBdkM7QUFDQSxvQ0FBSTtBQUNBRSx1Q0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLDZDQUFLLHVCQURLO0FBRVY5Qiw4Q0FBTSxLQUFLc0I7QUFGRCxxQ0FBZDtBQUlILGlDQUxELENBS0UsT0FBT3VFLEtBQVAsRUFBYztBQUNaUiw0Q0FBUUMsR0FBUixDQUFZTyxLQUFaO0FBQ0g7Ozs7Ozs7QUFNYixxQ0FBS2xFLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSjs7Ozs7a0dBQzZCM0IsSSxFQUFNMEIsSzs7Ozs7O0FBQy9CRSxtQ0FBR3NFLFdBQUgsQ0FBZTtBQUNYcEYsMkNBQU8sWUFESSxFQUNVO0FBQ3JCcUYsMENBQU0sSUFGSyxFQUVDO0FBQ1pwRSw2Q0FBUyxzQkFBTyxDQUFFO0FBSFAsaUNBQWY7O3VDQUtvQjZCLGVBQUtDLE9BQUwsQ0FDaEIscURBRGdCLEVBRWhCLE1BRmdCLEVBR2hCN0QsSUFIZ0IsQzs7O0FBQWhCK0QsdUM7O0FBS0osb0NBQUlBLFFBQVFDLFVBQVIsSUFBc0IsR0FBMUIsRUFBK0I7QUFDM0IseUNBQUt6QyxxQkFBTCxDQUEyQkcsS0FBM0IsSUFBb0MxQixJQUFwQztBQUNIO0FBQ0QscUNBQUsyQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUcwRSxPLEVBQVM7QUFDWixpQkFBSy9GLE1BQUwsR0FBYytGLFFBQVF6RCxFQUF0QjtBQUNBLGlCQUFLdkMsVUFBTCxHQUFrQnVCLEdBQUcwRSxjQUFILENBQWtCLDBCQUFsQixDQUFsQjtBQUNBLGlCQUFLQywrQkFBTDtBQUNBLGlCQUFLNUUsTUFBTDtBQUNIOzs7aUNBQ1E7QUFDTCxpQkFBSzZFLGlCQUFMO0FBQ0g7Ozs7RUE3VzJDQyxlQUFLQyxJOztrQkFBaENsSCxrQiIsImZpbGUiOiJjaG9vc2VDaGFyZ2VNZXRob2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQgUGF5UGVyaW9kIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgTGltaXRGZWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBMaW1pdEhvdXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hvb3NlQ2hhcmdlTWV0aG9kIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlBheVBlcmlvZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiUGF5UGVyaW9kXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJQYXlQZXJpb2RWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlBheVBlcmlvZFZhbHVlXCJ9LFwiTGltaXRGZWVcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiTGltaXRGZWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkxpbWl0RmVlVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJMaW1pdEZlZVZhbHVlXCJ9LFwiTGltaXRIb3VyXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkxpbWl0SG91clwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiTGltaXRIb3VyVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJMaW1pdEhvdXJWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBQYXlQZXJpb2QsXG4gICAgICAgICAgICBMaW1pdEZlZSxcbiAgICAgICAgICAgIExpbWl0SG91cixcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGltYWdlRGF0YTogJy4uLy4uLy4uLy4uL2ltYWdlcy9uZXh0LnBuZycsXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAnJyxcbiAgICAgICAgICAgIG5hdmJhcnM6IFsn5q2j5bi45pS26LS5Jywn6aOO6Zmp5pS26LS5Jywn5bCP5pe25pS26LS5J10sXG4gICAgICAgICAgICBwYXlTdHlsZTogW10sXG4gICAgICAgICAgICBzdWJtaXREYXRhOiB7fSxcbiAgICAgICAgICAgIGNhc2VJZDogJycsXG4gICAgICAgICAgICAvL+WumumineaUtui0ueexu+WIq1xuICAgICAgICAgICAgUGF5RGV0YWlsUXVvdGE6IFtdLFxuICAgICAgICAgICAgUGF5RGV0YWlsUXVvdGFWYWx1ZTogMCxcbiAgICAgICAgICAgIGlzQWRkU2hvdzogZmFsc2UsXG4gICAgICAgICAgICAvL+mjjumZqeaUtui0ueexu+WIq1xuICAgICAgICAgICAgUGF5RGV0YWlsUmlzazogW10sXG4gICAgICAgICAgICBQYXlEZXRhaWxSaXNrVmFsdWU6IDAsXG4gICAgICAgICAgICAvL+Wwj+aXtuaUtui0ueexu+WIq3NzXG4gICAgICAgICAgICBQYXlEZXRhaWxIb3VybHk6IFtdLFxuICAgICAgICAgICAgUGF5RGV0YWlsSG91cmx5VmFsdWU6IDAsXG4gICAgICAgICAgICAvL+Wwj+aXtuaUtui0ueaUtui0uS3otKbljZXlkajmnJ9cbiAgICAgICAgICAgIFBheVBlcmlvZDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6LSm5Y2V5ZGo5pyfJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGF5UGVyaW9kJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUGF5UGVyaW9kVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/lsI/ml7bmlLbotLnmlLbotLkt6LSm5Y2V6YeR6aKdXG4gICAgICAgICAgICBMaW1pdEZlZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6LSm5Y2V6YeR6aKdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGltaXRGZWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMaW1pdEZlZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v5bCP5pe25pS26LS55pS26LS5Lei0puWNleWwj+aXtlxuICAgICAgICAgICAgTGltaXRIb3VyOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfotKbljZXlsI/ml7YnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdMaW1pdEhvdXInLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMaW1pdEhvdXJWYWx1ZTogJycsXG4gICAgICAgICAgICAvL+aUtui0ueaWueW8j+WIl+ihqFxuICAgICAgICAgICAgbm9ybWFsQ2hhcmdlTGlzdERhdGFzOiBbXSxcbiAgICAgICAgICAgIHJpc2tDaGFyZ2VMaXN0RGF0YXM6IFtdLFxuICAgICAgICAgICAgbGF3eWVyQ2hhcmdlTGlzdERhdGFzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG5hdmJhclRhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0RGF0YSgpIHtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQ1JFQVRFX0xBV1lFUkNIQVJHRV9EQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdWJtaXREYXRhLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9kaXN0cmlidXRpb25JbmZvcm1hdGlvbj9jYXNlSWQ9Jyt0aGlzLmNhc2VJZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+i3s+i9rOiHs+WIm+W7uumjjumZqeaUtui0uVxuICAgICAgICAgICAgdG9DcmVhdGVSaXNrQ2hhcmdlKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0ZVJpc2tDaGFyZ2U/c3RhdHVzPScgKyB0aGlzLlBheURldGFpbFJpc2tWYWx1ZSArICcmY2FzZUlkPScgKyB0aGlzLmNhc2VJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v6Lez6L2s6Iez5Yib5bu65q2j5bi45pS26LS5XG4gICAgICAgICAgICB0b0NyZWF0ZU5vbWFsQ2hhcmdlKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0ZU5vbWFsQ2hhcmdlP3N0YXR1cz0nICsgdGhpcy5QYXlEZXRhaWxRdW90YVZhbHVlICsgJyZjYXNlSWQ9JyArIHRoaXMuY2FzZUlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/kv67mlLnlvovluIjotLnnjodcbiAgICAgICAgICAgIG1vZGlmeUxhd3llclJhdGUoZGF0YSwgaW5kZXgsIGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGFyZ2VSYXRpbyAhPT0gZS5kZXRhaWwudmFsdWUuc3BsaXQoJyUnKVswXSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmNoYXJnZVJhdGlvID0gZS5kZXRhaWwudmFsdWUuc3BsaXQoJyUnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVDYXNlTGF3eWVyQ2hhcmdlKGRhdGEsIGluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByaXNrT3BlcmF0aW5nKGlkLCBpbmRleCwga2V5V29yZHMpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdDogWyfnvJbovpEnLCAn5Yig6ZmkJ10sIC8v5oyJ6ZKu55qE5paH5a2X5pWw57uE77yM5pWw57uE6ZW/5bqm5pyA5aSn5Li6NuS4qixcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpdGVtQ29sb3I6ICcjMDAwMDAwJywgLy/mjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0ZVJpc2tDaGFyZ2U/aWQ9JyArIGlkICsgJyZjYXNlSWQ9JyArIHRoaXMuY2FzZUlkICsgJyZzdGF0dXM9JyArIHRoaXMuUGF5RGV0YWlsUmlza1ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRGVsZXRlQ2FzZUNoYXJnZShpZCwgaW5kZXgsIGtleVdvcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub21hbE9wZXJhdGluZyhpZCwgaW5kZXgsIGtleVdvcmRzKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3Q6IFsn57yW6L6RJywgJ+WIoOmZpCddLCAvL+aMiemSrueahOaWh+Wtl+aVsOe7hO+8jOaVsOe7hOmVv+W6puacgOWkp+S4ujbkuKosXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaXRlbUNvbG9yOiAnIzAwMDAwMCcsIC8v5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9jcmVhdGVOb21hbENoYXJnZT9pZD0nICsgaWQgKyAnJmNhc2VJZD0nICsgdGhpcy5jYXNlSWQgKyAnJnN0YXR1cz0nICsgdGhpcy5QYXlEZXRhaWxRdW90YVZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRGVsZXRlQ2FzZUNoYXJnZShpZCwgaW5kZXgsIGtleVdvcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQYXlEZXRhaWxRdW90YShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXlEZXRhaWxRdW90YVZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFBheURldGFpbFJpc2soZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGF5RGV0YWlsUmlza1ZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFBheURldGFpbEhvdXJseShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXlEZXRhaWxIb3VybHlWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIC8v5bCP5pe25pS26LS55pS26LS5Lei0puWNleWRqOacn1xuICAgICAgICAgICAgUGF5UGVyaW9kVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGF5UGVyaW9kID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+Wwj+aXtuaUtui0ueaUtui0uS3otKbljZXph5Hpop1cbiAgICAgICAgICAgIExpbWl0RmVlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTGltaXRGZWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5bCP5pe25pS26LS55pS26LS5Lei0puWNleWwj+aXtlxuICAgICAgICAgICAgTGltaXRIb3VyVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTGltaXRIb3VyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3JtYWxDaGFyZ2VMaXN0RGF0YXModmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuUGF5RGV0YWlsUXVvdGFWYWx1ZSA9PSAxICYmIHZhbHVlLmxlbmd0aCA8IDEpIHx8ICh0aGlzLlBheURldGFpbFF1b3RhVmFsdWUgPT0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkZFNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZGRTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUGF5RGV0YWlsUXVvdGFWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIFBheURldGFpbFF1b3RhX2luZGV4IGluIHRoaXMuUGF5RGV0YWlsUXVvdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGF5RGV0YWlsUXVvdGFbUGF5RGV0YWlsUXVvdGFfaW5kZXhdLnZhbHVlID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBheURldGFpbFF1b3RhW1BheURldGFpbFF1b3RhX2luZGV4XS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5QYXlEZXRhaWxRdW90YSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXlEZXRhaWxRdW90YVtQYXlEZXRhaWxRdW90YV9pbmRleF0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgodmFsdWUgPT0gMSAmJiB0aGlzLm5vcm1hbENoYXJnZUxpc3REYXRhcy5sZW5ndGggPCAxKSB8fCAodmFsdWUgPT0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkZFNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZGRTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUGF5RGV0YWlsUmlza1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgUGF5RGV0YWlsUmlza19pbmRleCBpbiB0aGlzLlBheURldGFpbFJpc2spIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGF5RGV0YWlsUmlza1tQYXlEZXRhaWxSaXNrX2luZGV4XS52YWx1ZSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXlEZXRhaWxSaXNrW1BheURldGFpbFJpc2tfaW5kZXhdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlBheURldGFpbFJpc2sgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5RGV0YWlsUmlza1tQYXlEZXRhaWxSaXNrX2luZGV4XS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQYXlEZXRhaWxIb3VybHlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIFBheURldGFpbEhvdXJseV9pbmRleCBpbiB0aGlzLlBheURldGFpbEhvdXJseSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QYXlEZXRhaWxIb3VybHlbUGF5RGV0YWlsSG91cmx5X2luZGV4XS52YWx1ZSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXlEZXRhaWxIb3VybHlbUGF5RGV0YWlsSG91cmx5X2luZGV4XS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5QYXlEZXRhaWxIb3VybHkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGF5RGV0YWlsSG91cmx5W1BheURldGFpbEhvdXJseV9pbmRleF0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIGFzeW5jIEdldENhc2VDaGFyZ2VBbmRDb250cmFjdEZvckVkaXQoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlQ2hhcmdlQW5kQ29udHJhY3RGb3JFZGl0JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHRoaXMuY2FzZUlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgQ2FzZUNoYXJnZUFuZENvbnRyYWN0RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy/mlLbotLnmlrnlvI9cbiAgICAgICAgICAgICAgICAvL3RhYuaUtui0ueaWueW8j1xuICAgICAgICAgICAgICAgIHZhciBwYXlTdHlsZSA9IHRoaXMuc3VibWl0RGF0YS5QYXlTdHlsZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGFiPXBheVN0eWxlLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiPWN1cnJlbnRUYWIuc29ydCgpWzBdLTE7XG4gICAgICAgICAgICAgICAgdmFyIHBheVN0eWxlTGlzdCA9IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEucGF5U3R5bGVMaXN0O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHBheVN0eWxlX2luZGV4ID0gMCwgbGVuID0gcGF5U3R5bGUubGVuZ3RoOyBwYXlTdHlsZV9pbmRleCA8IGxlbjsgcGF5U3R5bGVfaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXlTdHlsZUxpc3RfaW5kZXggPSAwLCBsZW5ndGggPSBwYXlTdHlsZUxpc3QubGVuZ3RoOyBwYXlTdHlsZUxpc3RfaW5kZXggPCBsZW5ndGg7IHBheVN0eWxlTGlzdF9pbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF5U3R5bGVbcGF5U3R5bGVfaW5kZXhdID09IHBheVN0eWxlTGlzdFtwYXlTdHlsZUxpc3RfaW5kZXhdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5uYXZiYXJzW3BheVN0eWxlX2luZGV4XSA9IHBheVN0eWxlTGlzdFtwYXlTdHlsZUxpc3RfaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheVN0eWxlTGlzdFtwYXlTdHlsZUxpc3RfaW5kZXhdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGF5U3R5bGUgPSBwYXlTdHlsZUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlzU2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL+WumumineaUtui0ueexu+WIq1xuICAgICAgICAgICAgICAgIHRoaXMuUGF5RGV0YWlsUXVvdGEgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmZpeGVkRmVlQ2F0ZWdvcnlMaXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuUGF5RGV0YWlsUXVvdGFWYWx1ZSA9IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEucGF5RGV0YWlsUXVvdGE7XG4gICAgICAgICAgICAgICAgLy/po47pmanmlLbotLnnsbvliKtcbiAgICAgICAgICAgICAgICB0aGlzLlBheURldGFpbFJpc2sgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLnJpc2tGZWVDYXRlZ29yeUxpc3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXlEZXRhaWxSaXNrVmFsdWUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLnBheURldGFpbFJpc2s7XG4gICAgICAgICAgICAgICAgLy/lsI/ml7bmlLbotLnnsbvliKtcbiAgICAgICAgICAgICAgICB0aGlzLlBheURldGFpbEhvdXJseSA9IENhc2VDaGFyZ2VBbmRDb250cmFjdERhdGEuaG91cmx5UmF0ZUNhdGVnb3lMaXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuUGF5RGV0YWlsSG91cmx5VmFsdWUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLnBheURldGFpbEhvdXJseTtcbiAgICAgICAgICAgICAgICAvL+Wwj+aXtuaUtui0ue+8iOWRqOacn++8jOmHkemine+8jOWwj+aXtu+8iVxuICAgICAgICAgICAgICAgIHRoaXMuUGF5UGVyaW9kVmFsdWUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLnBheVBlcmlvZDtcbiAgICAgICAgICAgICAgICB0aGlzLkxpbWl0RmVlVmFsdWUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmxpbWl0RmVlO1xuICAgICAgICAgICAgICAgIHRoaXMuTGltaXRIb3VyVmFsdWUgPSBDYXNlQ2hhcmdlQW5kQ29udHJhY3REYXRhLmxpbWl0SG91cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/lrprpop3mlLbotLnnsbvliKst5Yig6ZmkXG4gICAgICAgIC8v5pS26LS557G75Z6L5YiX6KGo5pWw5o2uXG4gICAgICAgIGFzeW5jIEdldENhc2VDaGFyZ2VMaXN0KGNhc2VJZCkge1xuICAgICAgICAgICAgdmFyIGlkID0gY2FzZUlkIHx8IHRoaXMuY2FzZUlkO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvR2V0Q2FzZUNoYXJnZUxpc3QnLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwICYmIHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YS5kYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJnZUxpc3REYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjaGFyZ2VMaXN0RGF0YS5ub3JtYWxDaGFyZ2VMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJnZUxpc3REYXRhLm5vcm1hbENoYXJnZUxpc3RbaW5kZXhdLnBheURhdGUgPSBjaGFyZ2VMaXN0RGF0YS5ub3JtYWxDaGFyZ2VMaXN0W2luZGV4XS5wYXlEYXRlLnNwbGl0KCdUJylbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsQ2hhcmdlTGlzdERhdGFzID0gY2hhcmdlTGlzdERhdGEubm9ybWFsQ2hhcmdlTGlzdDtcbiAgICAgICAgICAgICAgICB0aGlzLnJpc2tDaGFyZ2VMaXN0RGF0YXMgPSBjaGFyZ2VMaXN0RGF0YS5yaXNrQ2hhcmdlTGlzdDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhd3llckNoYXJnZUxpc3REYXRhcyA9IGNoYXJnZUxpc3REYXRhLmxhd3llckNoYXJnZUxpc3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRBdmF0YXIoY2hhcmdlTGlzdERhdGEubGF3eWVyQ2hhcmdlTGlzdCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdOT1JNQUxfQ0hBUkdFTElTVF9EQVRBUycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFyZ2VMaXN0RGF0YS5ub3JtYWxDaGFyZ2VMaXN0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ1JJU0tfQ0hBUkdFTElTVF9EQVRBUycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjaGFyZ2VMaXN0RGF0YS5yaXNrQ2hhcmdlTGlzdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIEdldEF2YXRhcihkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgZGF0YVtpbmRleF0udXNlcklkO1xuICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyQ2hhcmdlTGlzdERhdGFzW2luZGV4XS5hdmF0YXIgPSBhd2FpdCBhamF4LmdldEFhdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v5Yig6Zmk5pS26LS557G75Yir5YiX6KGo5L+h5oGvXG4gICAgICAgIGFzeW5jIERlbGV0ZUNhc2VDaGFyZ2UoaWQsIGluZGV4LCBrZXlXb3Jkcykge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZVBheURldGFpbC9EZWxldGVDYXNlQ2hhcmdlJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5V29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9tYWwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3JtYWxDaGFyZ2VMaXN0RGF0YXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBub21hbENoYXJnZUxpc3QgPSB3eC5nZXRTdG9yYWdlU3luYygnTk9STUFMX0NIQVJHRUxJU1RfREFUQVMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ05PUk1BTF9DSEFSR0VMSVNUX0RBVEFTJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5ub3JtYWxDaGFyZ2VMaXN0RGF0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlzayc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpc2tDaGFyZ2VMaXN0RGF0YXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ1JJU0tfQ0hBUkdFTElTVF9EQVRBUycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMucmlza0NoYXJnZUxpc3REYXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+abtOaWsOW+i+W4iOi0ueeOh1xuICAgICAgICBhc3luYyBVcGRhdGVDYXNlTGF3eWVyQ2hhcmdlKGRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlTGF3eWVyL1VwZGF0ZUNhc2VMYXd5ZXJDaGFyZ2UnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyQ2hhcmdlTGlzdERhdGFzW2luZGV4XSA9IGRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzZUlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfTEFXWUVSQ0hBUkdFX0RBVEEnKTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUNoYXJnZUFuZENvbnRyYWN0Rm9yRWRpdCgpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ2hhcmdlTGlzdCgpO1xuICAgICAgICB9O1xuICAgIH1cbiJdfQ==