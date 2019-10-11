'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _DateTimePicker = require('./../../../../components/Date/DateTimePicker.js');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientDetail = function (_wepy$page) {
    _inherits(clientDetail, _wepy$page);

    function clientDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "StartTime": { "xmlns:v-bind": "", "v-bind:timeObj.sync": "StartDate", "v-bind:dateData.sync": "StartTime", "v-bind:twoWayTitle.once": "StartTime" }, "EndTime": { "v-bind:timeObj.sync": "EndDate", "v-bind:dateData.sync": "EndTime", "v-bind:twoWayTitle.once": "EndTime" }, "VacationDay": { "v-bind:input.sync": "VacationDay", "v-bind:inputValue.sync": "VacationDayValue", "v-bind:twoWayTitle.once": "VacationDayValue" }, "TotalDay": { "v-bind:input.sync": "TotalDay", "v-bind:inputValue.sync": "TotalDayValue", "v-bind:twoWayTitle.once": "TotalDayValue" }, "Memo": { "v-bind:input.sync": "Memo", "v-bind:inputValue.sync": "MemoValue", "v-bind:twoWayTitle.once": "MemoValue" }, "VacationType": { "v-bind:options.sync": "VacationType", "v-bind:index.sync": "VacationTypeIndex", "v-bind:twoWayTitle.once": "VacationTypeIndex" } }, _this.$events = {}, _this.components = {
            StartTime: _DateTimePicker2.default,
            EndTime: _DateTimePicker2.default,
            VacationDay: _input2.default,
            TotalDay: _input2.default,
            Memo: _input2.default,
            VacationType: _option2.default
        }, _this.data = {
            // 按钮透明度
            addOpacity: 1,
            // 年假
            annualVacation: 0,
            annualVacationShow: false,
            //时间选择器
            submitData: {
                // EndDate: "2018-10-31 14:50",
                // Id: "e20a1e0e-143a-4b93-b277-f90f4eec90bf",
                // Memo: "备注",
                // StartDate: "2018-10-26 17:50",
                // TotalDay: "5",
                // VacationDay: "10",
                // VacationType: "04",
            },
            StartDate: {
                title: '开始时间',
                name: 'StartTime',
                isChecked: false,
                time: '',
                date: true
            },
            StartTime: '',
            EndDate: {
                title: '结束时间',
                name: 'endTime',
                isChecked: false,
                time: '',
                date: false
            },
            EndTime: '',
            VacationDay: {
                title: '请假期间节假日天数',
                name: 'VacationDay',
                warning: false,
                type: 'digit'
            },
            VacationDayValue: '',
            TotalDay: {
                title: '请假天数',
                name: 'TotalDay',
                warning: false,
                type: 'digit'
            },
            TotalDayValue: '',
            Memo: {
                title: '请假原由',
                name: 'VacationDay',
                options: true,
                warning: false
            },
            MemoValue: '',
            VacationType: {
                title: '请假类型',
                name: 'VacationType',
                value: [],
                displayText: [],
                warning: false
            },
            VacationTypeIndex: 0
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.VacationType && this.submitData.TotalDay) {
                    switch (this.submitData.VacationType) {
                        case '03':
                            if (Number(+this.annualVacation) > Number(+this.submitData.TotalDay)) {
                                this.CreateOrEditEmployeeVacationApply(this.submitData);
                            } else {
                                this.addOpacity = 1;
                                wx.showToast({
                                    title: '年假剩余不足！', //提示的内容,
                                    icon: 'none', //图标,
                                    duration: 2000, //延迟时间,
                                    mask: false, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                            }
                            break;
                        default:
                            this.CreateOrEditEmployeeVacationApply(this.submitData);
                            break;
                    }
                } else {
                    this.addOpacity = 1;
                    if (!this.submitData.VacationType) {
                        this.VacationType.warning = true;
                    }
                    if (!this.submitData.TotalDay) {
                        this.TotalDay.warning = true;
                    }
                    this.$apply();
                }
            }
        }, _this.watch = {
            StartTime: function StartTime(dateData) {
                this.submitData.StartDate = dateData[0] + '/' + dateData[1] + '/' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.$apply();
            },
            EndTime: function EndTime(dateData) {
                this.submitData.EndDate = dateData[0] + '/' + dateData[1] + '/' + dateData[2] + ' ' + dateData[3] + ':' + dateData[4] + ':' + dateData[5];
                this.$apply();
            },
            VacationTypeIndex: function VacationTypeIndex(index) {
                this.submitData.VacationType = this.VacationType.value[index];
                if (this.submitData.VacationType == '03') {
                    this.annualVacationShow = true;
                } else {
                    this.annualVacationShow = false;
                }
                this.$apply();
            },
            MemoValue: function MemoValue(value) {
                this.submitData.Memo = value;
                this.$apply();
            },
            TotalDayValue: function TotalDayValue(value) {
                this.submitData.TotalDay = value;
                this.$apply();
            },
            VacationDayValue: function VacationDayValue(value) {
                this.submitData.VacationDay = value;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'GetGeneralCodeCombobox',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, GeneralCodeComboboxData, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    class: 'QJ'
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/generalCodeComboService/GetGeneralCodeCombobox', 'post', data);

                            case 3:
                                resData = _context.sent;

                                console.log(resData);
                                if (resData.statusCode == 200) {
                                    GeneralCodeComboboxData = resData.data.result;

                                    for (index in GeneralCodeComboboxData) {
                                        this.VacationType.value[index] = GeneralCodeComboboxData[index].value;
                                        this.VacationType.displayText[index] = GeneralCodeComboboxData[index].displayText;
                                    }
                                }
                                this.$apply();

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetGeneralCodeCombobox() {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralCodeCombobox;
        }()
        // 提交数据

    }, {
        key: 'CreateOrEditEmployeeVacationApply',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
                var _this2 = this;

                var resData, isRefresh;
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
                                return _ajax2.default.getData('/api/services/web/employeeVacation/CreateOrEditEmployeeVacationApply', 'post', data);

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    isRefresh = wx.getStorageSync('isRefresh');

                                    isRefresh.isRefresh = 'true';
                                    wx.setStorageSync('isRefresh', isRefresh);
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                } else {
                                    wx.showToast({
                                        title: '提交失败！请检查必填项！',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function CreateOrEditEmployeeVacationApply(_x) {
                return _ref3.apply(this, arguments);
            }

            return CreateOrEditEmployeeVacationApply;
        }()
        //获取年假

    }, {
        key: 'GetVacationDays',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var data, resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    id: this.$parent.global.userInfo.id
                                };
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/employeeVacation/GetVacationDays', 'POST', data);

                            case 3:
                                resData = _context3.sent;

                                if (resData.success) {
                                    this.annualVacation = resData.result;
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetVacationDays() {
                return _ref4.apply(this, arguments);
            }

            return GetVacationDays;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var now = new Date();
            this.EndDate.time = now;
            this.StartDate.time = now;
            this.submitData.Id = '';
            this.GetGeneralCodeCombobox();
            this.GetVacationDays();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myApplyList/createApply/createApply'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUFwcGx5LmpzIl0sIm5hbWVzIjpbImNsaWVudERldGFpbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlN0YXJ0VGltZSIsIkVuZFRpbWUiLCJWYWNhdGlvbkRheSIsImlucHV0MSIsIlRvdGFsRGF5IiwiaW5wdXQyIiwiTWVtbyIsImlucHV0MyIsIlZhY2F0aW9uVHlwZSIsIm9wdGlvbiIsImRhdGEiLCJhZGRPcGFjaXR5IiwiYW5udWFsVmFjYXRpb24iLCJhbm51YWxWYWNhdGlvblNob3ciLCJzdWJtaXREYXRhIiwiU3RhcnREYXRlIiwidGl0bGUiLCJuYW1lIiwiaXNDaGVja2VkIiwidGltZSIsImRhdGUiLCJFbmREYXRlIiwid2FybmluZyIsInR5cGUiLCJWYWNhdGlvbkRheVZhbHVlIiwiVG90YWxEYXlWYWx1ZSIsIm9wdGlvbnMiLCJNZW1vVmFsdWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiVmFjYXRpb25UeXBlSW5kZXgiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsIiRhcHBseSIsInRvdWNoRW5kIiwiTnVtYmVyIiwiQ3JlYXRlT3JFZGl0RW1wbG95ZWVWYWNhdGlvbkFwcGx5Iiwid3giLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsIndhdGNoIiwiZGF0ZURhdGEiLCJpbmRleCIsImNsYXNzIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJHZW5lcmFsQ29kZUNvbWJvYm94RGF0YSIsInJlc3VsdCIsInNob3dMb2FkaW5nIiwiaXNSZWZyZXNoIiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiaWQiLCIkcGFyZW50IiwiZ2xvYmFsIiwidXNlckluZm8iLCJub3ciLCJEYXRlIiwiSWQiLCJHZXRHZW5lcmFsQ29kZUNvbWJvYm94IiwiR2V0VmFjYXRp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dEI7QUFDQW5CLHVDQUFHcUIsY0FBSCxDQUFrQixXQUFsQixFQUErQkYsU0FBL0I7QUFDQW5CLHVDQUFHc0IsWUFBSCxDQUFnQjtBQUNaQywrQ0FBTztBQURLLHFDQUFoQjtBQUdILGlDQVBELE1BT087QUFDSHZCLHVDQUFHQyxTQUFILENBQWE7QUFDVHRCLCtDQUFPLGNBREU7QUFFVHVCLDhDQUFNLE1BRkc7QUFHVEMsa0RBQVUsSUFIRDtBQUlUQyw4Q0FBTTtBQUpHLHFDQUFiO0FBTUg7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTDs7Ozs7Ozs7Ozs7QUFFUS9CLG9DLEdBQU87QUFDUG1ELHdDQUFJLEtBQUtDLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkMsUUFBcEIsQ0FBNkJIO0FBRDFCLGlDOzt1Q0FHU2QsZUFBS0MsT0FBTCxDQUNoQixvREFEZ0IsRUFFaEIsTUFGZ0IsRUFHaEJ0QyxJQUhnQixDOzs7QUFBaEJ1Qyx1Qzs7QUFLSixvQ0FBSUEsUUFBUVAsT0FBWixFQUFxQjtBQUNqQix5Q0FBSzlCLGNBQUwsR0FBc0JxQyxRQUFRSyxNQUE5QjtBQUNBLHlDQUFLckIsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUk7QUFDTCxnQkFBSWdDLE1BQU0sSUFBSUMsSUFBSixFQUFWO0FBQ0EsaUJBQUs3QyxPQUFMLENBQWFGLElBQWIsR0FBb0I4QyxHQUFwQjtBQUNBLGlCQUFLbEQsU0FBTCxDQUFlSSxJQUFmLEdBQXNCOEMsR0FBdEI7QUFDQSxpQkFBS25ELFVBQUwsQ0FBZ0JxRCxFQUFoQixHQUFxQixFQUFyQjtBQUNBLGlCQUFLQyxzQkFBTDtBQUNBLGlCQUFLQyxlQUFMO0FBQ0g7Ozs7RUF2TnFDQyxlQUFLQyxJOztrQkFBMUI1RSxZIiwiZmlsZSI6ImNyZWF0ZUFwcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgU3RhcnRUaW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvRGF0ZS9EYXRlVGltZVBpY2tlcic7XG4gICAgaW1wb3J0IEVuZFRpbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9EYXRlL0RhdGVUaW1lUGlja2VyJztcbiAgICBpbXBvcnQgaW5wdXQxIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgaW5wdXQyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgaW5wdXQzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgb3B0aW9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN0YXJ0VGltZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGltZU9iai5zeW5jXCI6XCJTdGFydERhdGVcIixcInYtYmluZDpkYXRlRGF0YS5zeW5jXCI6XCJTdGFydFRpbWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJTdGFydFRpbWVcIn0sXCJFbmRUaW1lXCI6e1widi1iaW5kOnRpbWVPYmouc3luY1wiOlwiRW5kRGF0ZVwiLFwidi1iaW5kOmRhdGVEYXRhLnN5bmNcIjpcIkVuZFRpbWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJFbmRUaW1lXCJ9LFwiVmFjYXRpb25EYXlcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiVmFjYXRpb25EYXlcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlZhY2F0aW9uRGF5VmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJWYWNhdGlvbkRheVZhbHVlXCJ9LFwiVG90YWxEYXlcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiVG90YWxEYXlcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlRvdGFsRGF5VmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJUb3RhbERheVZhbHVlXCJ9LFwiTWVtb1wiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJNZW1vXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJNZW1vVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJNZW1vVmFsdWVcIn0sXCJWYWNhdGlvblR5cGVcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJWYWNhdGlvblR5cGVcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJWYWNhdGlvblR5cGVJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlZhY2F0aW9uVHlwZUluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIFN0YXJ0VGltZSxcbiAgICAgICAgICAgIEVuZFRpbWUsXG4gICAgICAgICAgICBWYWNhdGlvbkRheTogaW5wdXQxLFxuICAgICAgICAgICAgVG90YWxEYXk6IGlucHV0MixcbiAgICAgICAgICAgIE1lbW86IGlucHV0MyxcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZTogb3B0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAvLyDmjInpkq7pgI/mmI7luqZcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICAgICAgICAvLyDlubTlgYdcbiAgICAgICAgICAgIGFubnVhbFZhY2F0aW9uOiAwLFxuICAgICAgICAgICAgYW5udWFsVmFjYXRpb25TaG93OiBmYWxzZSxcbiAgICAgICAgICAgIC8v5pe26Ze06YCJ5oup5ZmoXG4gICAgICAgICAgICBzdWJtaXREYXRhOiB7XG4gICAgICAgICAgICAgICAgLy8gRW5kRGF0ZTogXCIyMDE4LTEwLTMxIDE0OjUwXCIsXG4gICAgICAgICAgICAgICAgLy8gSWQ6IFwiZTIwYTFlMGUtMTQzYS00YjkzLWIyNzctZjkwZjRlZWM5MGJmXCIsXG4gICAgICAgICAgICAgICAgLy8gTWVtbzogXCLlpIfms6hcIixcbiAgICAgICAgICAgICAgICAvLyBTdGFydERhdGU6IFwiMjAxOC0xMC0yNiAxNzo1MFwiLFxuICAgICAgICAgICAgICAgIC8vIFRvdGFsRGF5OiBcIjVcIixcbiAgICAgICAgICAgICAgICAvLyBWYWNhdGlvbkRheTogXCIxMFwiLFxuICAgICAgICAgICAgICAgIC8vIFZhY2F0aW9uVHlwZTogXCIwNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFN0YXJ0RGF0ZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5byA5aeL5pe26Ze0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3RhcnRUaW1lJyxcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRhdGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgRW5kRGF0ZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn57uT5p2f5pe26Ze0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW5kVGltZScsXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aW1lOiAnJyxcbiAgICAgICAgICAgICAgICBkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVuZFRpbWU6ICcnLFxuICAgICAgICAgICAgVmFjYXRpb25EYXk6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+WBh+acn+mXtOiKguWBh+aXpeWkqeaVsCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1ZhY2F0aW9uRGF5JyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGlnaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFZhY2F0aW9uRGF5VmFsdWU6ICcnLFxuICAgICAgICAgICAgVG90YWxEYXk6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+WBh+WkqeaVsCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RvdGFsRGF5JyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGlnaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRvdGFsRGF5VmFsdWU6ICcnLFxuICAgICAgICAgICAgTWVtbzoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YGH5Y6f55SxJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVmFjYXRpb25EYXknLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTWVtb1ZhbHVlOiAnJyxcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YGH57G75Z6LJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVmFjYXRpb25UeXBlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVmFjYXRpb25UeXBlSW5kZXg6IDAsXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0RGF0YS5WYWNhdGlvblR5cGUgJiYgdGhpcy5zdWJtaXREYXRhLlRvdGFsRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zdWJtaXREYXRhLlZhY2F0aW9uVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnMDMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoK3RoaXMuYW5udWFsVmFjYXRpb24pID4gTnVtYmVyKCt0aGlzLnN1Ym1pdERhdGEuVG90YWxEYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JFZGl0RW1wbG95ZWVWYWNhdGlvbkFwcGx5KHRoaXMuc3VibWl0RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W5tOWBh+WJqeS9meS4jei2s++8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JFZGl0RW1wbG95ZWVWYWNhdGlvbkFwcGx5KHRoaXMuc3VibWl0RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3VibWl0RGF0YS5WYWNhdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVmFjYXRpb25UeXBlLndhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJtaXREYXRhLlRvdGFsRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlRvdGFsRGF5Lndhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgU3RhcnRUaW1lKGRhdGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlN0YXJ0RGF0ZSA9IGRhdGVEYXRhWzBdICsgJy8nICsgZGF0ZURhdGFbMV0gKyAnLycgKyBkYXRlRGF0YVsyXSArICcgJyArIGRhdGVEYXRhWzNdICsgJzonICsgZGF0ZURhdGFbNF0gKyAnOicgKyBkYXRlRGF0YVs1XTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVuZFRpbWUoZGF0ZURhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRW5kRGF0ZSA9IGRhdGVEYXRhWzBdICsgJy8nICsgZGF0ZURhdGFbMV0gKyAnLycgKyBkYXRlRGF0YVsyXSArICcgJyArIGRhdGVEYXRhWzNdICsgJzonICsgZGF0ZURhdGFbNF0gKyAnOicgKyBkYXRlRGF0YVs1XTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZUluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlZhY2F0aW9uVHlwZSA9IHRoaXMuVmFjYXRpb25UeXBlLnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJtaXREYXRhLlZhY2F0aW9uVHlwZSA9PSAnMDMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5udWFsVmFjYXRpb25TaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFubnVhbFZhY2F0aW9uU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE1lbW9WYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5NZW1vID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBUb3RhbERheVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlRvdGFsRGF5ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBWYWNhdGlvbkRheVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlZhY2F0aW9uRGF5ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvZGVDb21ib2JveCgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAnUUonXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZ2VuZXJhbENvZGVDb21ib1NlcnZpY2UvR2V0R2VuZXJhbENvZGVDb21ib2JveCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgR2VuZXJhbENvZGVDb21ib2JveERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIEdlbmVyYWxDb2RlQ29tYm9ib3hEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVmFjYXRpb25UeXBlLnZhbHVlW2luZGV4XSA9IEdlbmVyYWxDb2RlQ29tYm9ib3hEYXRhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5WYWNhdGlvblR5cGUuZGlzcGxheVRleHRbaW5kZXhdID0gR2VuZXJhbENvZGVDb21ib2JveERhdGFbaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5o+Q5Lqk5pWw5o2uXG4gICAgICAgIGFzeW5jIENyZWF0ZU9yRWRpdEVtcGxveWVlVmFjYXRpb25BcHBseShkYXRhKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZW1wbG95ZWVWYWNhdGlvbi9DcmVhdGVPckVkaXRFbXBsb3llZVZhY2F0aW9uQXBwbHknLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBpc1JlZnJlc2ggPSB3eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgaXNSZWZyZXNoLmlzUmVmcmVzaCA9ICd0cnVlJ1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5aSx6LSl77yB6K+35qOA5p+l5b+F5aGr6aG577yBJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5blubTlgYdcbiAgICAgICAgYXN5bmMgR2V0VmFjYXRpb25EYXlzKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuJHBhcmVudC5nbG9iYWwudXNlckluZm8uaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9lbXBsb3llZVZhY2F0aW9uL0dldFZhY2F0aW9uRGF5cycsXG4gICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFubnVhbFZhY2F0aW9uID0gcmVzRGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuRW5kRGF0ZS50aW1lID0gbm93O1xuICAgICAgICAgICAgdGhpcy5TdGFydERhdGUudGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5JZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvYm94KCk7XG4gICAgICAgICAgICB0aGlzLkdldFZhY2F0aW9uRGF5cygpO1xuICAgICAgICB9XG4gICAgfVxuIl19