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

var clientDetail = function (_wepy$page) {
    _inherits(clientDetail, _wepy$page);

    function clientDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "textarea": { "xmlns:v-bind": "", "v-bind:input.sync": "input", "v-bind:inputValue.sync": "inputValue", "v-bind:twoWayTitle.once": "inputValue", "fixed": "{{true}}" } }, _this.$events = {}, _this.components = {
            textarea: _input2.default
        }, _this.data = {
            addOpacity: 1,
            submitData: {},
            VacationApplyOutputData: {},
            auditStatus: '',
            isPass: [{
                value: 'A',
                displayText: '通过审核',
                isChecked: false
            }, {
                value: 'R',
                displayText: "审核退回",
                isChecked: false
            }],
            input: {
                title: '审核意见',
                name: 'approveUserText',
                options: true,
                warning: false
            },
            inputValue: '',
            warning: false
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.status) {
                    switch (this.submitData.status) {
                        case 'A':
                            this.CreateVacationApprove(this.submitData);
                            break;
                        case 'R':
                            if (this.submitData.approveMemo) {
                                this.CreateVacationApprove(this.submitData);
                            } else {
                                this.input.warning = true;
                                this.addOpacity = 1;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    this.addOpacity = 1;
                    this.warning = true;
                }
                this.$apply();
            },
            bindPickerChange: function bindPickerChange(e) {
                this.submitData.status = e.detail.value;
                this.$apply();
            },
            click: function click() {
                this.warning = false;
            }
        }, _this.watch = {
            inputValue: function inputValue(data) {
                this.submitData.approveMemo = data;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'GetVacationApplyOutput',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, VacationApplyOutputData, http, avatar;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                data = {
                                    id: this.submitData.parentId
                                };
                                _context.next = 4;
                                return _ajax2.default.getData('/api/services/web/employeeVacation/GetVacationApplyOutput', 'post', data);

                            case 4:
                                resData = _context.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context.next = 16;
                                    break;
                                }

                                VacationApplyOutputData = resData.data.result;

                                if (!VacationApplyOutputData.approveUserId) {
                                    _context.next = 13;
                                    break;
                                }

                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + VacationApplyOutputData.approveUserId;
                                _context.next = 11;
                                return _ajax2.default.getAavatar(http);

                            case 11:
                                avatar = _context.sent;

                                VacationApplyOutputData['avatar'] = avatar;

                            case 13:
                                this.VacationApplyOutputData = VacationApplyOutputData;
                                _context.next = 17;
                                break;

                            case 16:
                                wx.showToast({
                                    title: '网络出差中！',
                                    icon: 'none',
                                    duration: 1500,
                                    mask: false
                                });

                            case 17:
                                this.$apply();

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetVacationApplyOutput() {
                return _ref2.apply(this, arguments);
            }

            return GetVacationApplyOutput;
        }()
    }, {
        key: 'CreateVacationApprove',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
                var _this2 = this;

                var resData;
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
                                return _ajax2.default.getData('/api/services/web/employeeVacation/CreateVacationApprove', 'post', data);

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    wx.showToast({
                                        title: '审核完成', //提示的内容,
                                        icon: 'success', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {
                                            var isRefresh = wx.getStorageSync('isRefresh');
                                            isRefresh.isRefresh = true;
                                            wx.setStorageSync('isRefresh', isRefresh);
                                            wx.navigateBack({
                                                delta: 1
                                            });
                                        }
                                    });
                                } else {
                                    wx.showToast({
                                        title: '提交失败',
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

            function CreateVacationApprove(_x) {
                return _ref3.apply(this, arguments);
            }

            return CreateVacationApprove;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.submitData.parentId = options.id;
            if (options.status) {
                this.auditStatus = options.status;
            }
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.GetVacationApplyOutput();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myApplyList/myApplyDetail/myApplyDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15QXBwbHlEZXRhaWwuanMiXSwibmFtZXMiOlsiY2xpZW50RGV0YWlsIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGV4dGFyZWEiLCJpbnB1dCIsImRhdGEiLCJhZGRPcGFjaXR5Iiwic3VibWl0RGF0YSIsIlZhY2F0aW9uQXBwbHlPdXRwdXREYXRhIiwiYXVkaXRTdGF0dXMiLCJpc1Bhc3MiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiaXNDaGVja2VkIiwidGl0bGUiLCJuYW1lIiwib3B0aW9ucyIsIndhcm5pbmciLCJpbnB1dFZhbHVlIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsInN0YXR1cyIsIkNyZWF0ZVZhY2F0aW9uQXBwcm92ZSIsImFwcHJvdmVNZW1vIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJjbGljayIsIndhdGNoIiwid3giLCJzaG93TG9hZGluZyIsIm1hc2siLCJzdWNjZXNzIiwiaWQiLCJwYXJlbnRJZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJhcHByb3ZlVXNlcklkIiwiaHR0cCIsImdldEFhdmF0YXIiLCJhdmF0YXIiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJpc1JlZnJlc2giLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJHZXRWYWNhdGlvbkFwcGx5T3V0cHV0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0MsMEJBQXlCLFlBQXhFLEVBQXFGLDJCQUEw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VCxVQUFMLENBQWdCNkIsUUFBaEIsR0FBMkJwQixRQUFRbUIsRUFBbkM7QUFDQSxnQkFBSW5CLFFBQVFPLE1BQVosRUFBb0I7QUFDaEIscUJBQUtkLFdBQUwsR0FBbUJPLFFBQVFPLE1BQTNCO0FBQ0g7QUFDRCxpQkFBS0YsTUFBTDtBQUNIOzs7aUNBQ1E7QUFDTCxpQkFBS2lDLHNCQUFMO0FBQ0g7Ozs7RUF6SnFDQyxlQUFLQyxJOztrQkFBMUIxRCxZIiwiZmlsZSI6Im15QXBwbHlEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCBpbnB1dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRleHRhcmVhXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJpbnB1dFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiaW5wdXRWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImlucHV0VmFsdWVcIixcImZpeGVkXCI6XCJ7e3RydWV9fVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICB0ZXh0YXJlYTogaW5wdXRcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6MSxcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6IHt9LFxuICAgICAgICAgICAgVmFjYXRpb25BcHBseU91dHB1dERhdGE6IHt9LFxuICAgICAgICAgICAgYXVkaXRTdGF0dXM6ICcnLFxuICAgICAgICAgICAgaXNQYXNzOiBbe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0EnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogJ+mAmui/h+WuoeaguCcsXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnUicsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBcIuWuoeaguOmAgOWbnlwiLFxuICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6h5qC45oSP6KeBJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYXBwcm92ZVVzZXJUZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJtaXREYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3VibWl0RGF0YS5zdGF0dXMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVWYWNhdGlvbkFwcHJvdmUodGhpcy5zdWJtaXREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1InOiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3VibWl0RGF0YS5hcHByb3ZlTWVtbyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVWYWNhdGlvbkFwcHJvdmUodGhpcy5zdWJtaXREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lndhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5PTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5zdGF0dXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrKCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIGlucHV0VmFsdWUoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5hcHByb3ZlTWVtbyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRWYWNhdGlvbkFwcGx5T3V0cHV0KCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5zdWJtaXREYXRhLnBhcmVudElkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZW1wbG95ZWVWYWNhdGlvbi9HZXRWYWNhdGlvbkFwcGx5T3V0cHV0JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgVmFjYXRpb25BcHBseU91dHB1dERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChWYWNhdGlvbkFwcGx5T3V0cHV0RGF0YS5hcHByb3ZlVXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArIFZhY2F0aW9uQXBwbHlPdXRwdXREYXRhLmFwcHJvdmVVc2VySWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmF0YXIgPSBhd2FpdCBhamF4LmdldEFhdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgICAgIFZhY2F0aW9uQXBwbHlPdXRwdXREYXRhWydhdmF0YXInXSA9IGF2YXRhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5WYWNhdGlvbkFwcGx5T3V0cHV0RGF0YSA9IFZhY2F0aW9uQXBwbHlPdXRwdXREYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOWHuuW3ruS4re+8gScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBDcmVhdGVWYWNhdGlvbkFwcHJvdmUoZGF0YSkge1xuICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZW1wbG95ZWVWYWNhdGlvbi9DcmVhdGVWYWNhdGlvbkFwcHJvdmUnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6h5qC45a6M5oiQJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVmcmVzaCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVmcmVzaC5pc1JlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcsIGlzUmVmcmVzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOWksei0pScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEucGFyZW50SWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpdFN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB0aGlzLkdldFZhY2F0aW9uQXBwbHlPdXRwdXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==