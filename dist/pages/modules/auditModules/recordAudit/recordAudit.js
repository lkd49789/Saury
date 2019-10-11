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

var recordAudit = function (_wepy$page) {
    _inherits(recordAudit, _wepy$page);

    function recordAudit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, recordAudit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = recordAudit.__proto__ || Object.getPrototypeOf(recordAudit)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "businessDuration": { "xmlns:v-bind": "", "v-bind:input.sync": "businessDuration", "v-bind:inputValue.sync": "businessDurationValue", "v-bind:twoWayTitle.once": "businessDurationValue" }, "billDuration": { "v-bind:input.sync": "billDuration", "v-bind:inputValue.sync": "billDurationValue", "v-bind:twoWayTitle.once": "billDurationValue" }, "approvalRemark": { "v-bind:input.sync": "approvalRemark", "v-bind:inputValue.sync": "approvalRemarkValue", "v-bind:twoWayTitle.once": "approvalRemarkValue" } }, _this.$events = {}, _this.components = {
            businessDuration: _input2.default,
            billDuration: _input2.default,
            approvalRemark: _input2.default
        }, _this.data = {
            addOpacity: 1,
            selfDuration: 0,
            submitData: {
                //    "id": "WL13ae9116540d566d",
                //     "businessDuration": 0,
                //     "billDuration": 0,
                //     "approvalResult": "R",
                //     "approvalRemark": "拒绝"
            },
            businessDuration: {
                title: '业务时长（小时）',
                name: 'businessDuration',
                options: false,
                warning: false
            },
            businessDurationValue: '',
            billDuration: {
                title: '账单时长（小时）',
                name: 'billDuration',
                options: false,
                warning: false
            },
            billDurationValue: '',
            isPass: [{
                value: 'A',
                displayText: '通过审核',
                isChecked: false
            }, {
                value: 'R',
                displayText: "审核退回",
                isChecked: false
            }],
            approvalRemark: {
                title: '审核意见',
                name: 'approvalRemark',
                options: true,
                warning: false
            },
            approvalRemarkValue: '',
            warning: false
        }, _this.watch = {
            businessDurationValue: function businessDurationValue(value) {
                this.submitData.businessDuration = Number(value);
                this.$apply();
            },
            billDurationValue: function billDurationValue(value) {
                this.submitData.billDuration = Number(value);
                this.$apply();
            },
            approvalRemarkValue: function approvalRemarkValue(value) {
                this.submitData.approvalRemark = value;
                this.$apply();
            }
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.approvalResult) {
                    switch (this.submitData.approvalResult) {
                        case 'A':
                            this.SaveWorklogApproval(this.submitData);
                            break;
                        case 'R':
                            if (this.submitData.approvalRemark) {
                                this.SaveWorklogApproval(this.submitData);
                            } else {
                                this.approvalRemark.warning = true;
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
            submitData: function submitData() {},
            bindPickerChange: function bindPickerChange(e) {
                this.submitData.approvalResult = e.detail.value;
                this.$apply();
            },
            click: function click() {
                this.warning = false;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(recordAudit, [{
        key: 'SaveWorklogApproval',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var _this2 = this;

                var subData, resData, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                subData = [data];
                                _context.next = 4;
                                return _ajax2.default.getData('/api/services/web/worklogApproval/SaveWorklogApproval', 'post', subData);

                            case 4:
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
                                        title: '审核失败！',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: true
                                    });
                                }
                                this.$apply();

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function SaveWorklogApproval(_x) {
                return _ref2.apply(this, arguments);
            }

            return SaveWorklogApproval;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var parentData = JSON.parse(options.data);
            console.log(options.data);
            this.submitData.id = parentData.id;
            this.selfDuration = parentData.selfDuration;
            // this.businessDurationValue = parentData.businessDuration !== 0 || parentData.selfDuration 
            // this.billDurationValue = parentData.billDuration !== 0 || parentData.selfDuration 
            this.businessDurationValue = parentData.businessDuration;
            this.billDurationValue = parentData.billDuration;
            this.$apply();
        }
    }]);

    return recordAudit;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(recordAudit , 'pages/modules/auditModules/recordAudit/recordAudit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZEF1ZGl0LmpzIl0sIm5hbWVzIjpbInJlY29yZEF1ZGl0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYnVzaW5lc3NEdXJhdGlvbiIsImlucHV0MSIsImJpbGxEdXJhdGlvbiIsImlucHV0MiIsImFwcHJvdmFsUmVtYXJrIiwiaW5wdXQzIiwiZGF0YSIsImFkZE9wYWNpdHkiLCJzZWxmRHVyYXRpb24iLCJzdWJtaXREYXRhIiwidGl0bGUiLCJuYW1lIiwib3B0aW9ucyIsIndhcm5pbmciLCJidXNpbmVzc0R1cmF0aW9uVmFsdWUiLCJiaWxsRHVyYXRpb25WYWx1ZSIsImlzUGFzcyIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJpc0NoZWNrZWQiLCJhcHByb3ZhbFJlbWFya1ZhbHVlIiwid2F0Y2giLCJOdW1iZXIiLCIkYXBwbHkiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsInRvdWNoRW5kIiwiYXBwcm92YWxSZXN1bHQiLCJTYXZlV29ya2xvZ0FwcHJvdmFsIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJjbGljayIsInd4Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwic3VjY2VzcyIsInN1YkRhdGEiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiaXNSZWZyZXNoIiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFyZW50RGF0YSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFo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QUNaLGdCQUFJc0MsYUFBYUMsS0FBS0MsS0FBTCxDQUFXeEMsUUFBUU4sSUFBbkIsQ0FBakI7QUFDQStDLG9CQUFRQyxHQUFSLENBQVkxQyxRQUFRTixJQUFwQjtBQUNBLGlCQUFLRyxVQUFMLENBQWdCOEMsRUFBaEIsR0FBcUJMLFdBQVdLLEVBQWhDO0FBQ0EsaUJBQUsvQyxZQUFMLEdBQW9CMEMsV0FBVzFDLFlBQS9CO0FBQ0E7QUFDQTtBQUNBLGlCQUFLTSxxQkFBTCxHQUE2Qm9DLFdBQVdsRCxnQkFBeEM7QUFDQSxpQkFBS2UsaUJBQUwsR0FBeUJtQyxXQUFXaEQsWUFBcEM7QUFDQSxpQkFBS3FCLE1BQUw7QUFDSDs7OztFQXZKb0NpQyxlQUFLQyxJOztrQkFBekI5RCxXIiwiZmlsZSI6InJlY29yZEF1ZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IGlucHV0MSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IGlucHV0MiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IGlucHV0MyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVjb3JkQXVkaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYnVzaW5lc3NEdXJhdGlvblwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiYnVzaW5lc3NEdXJhdGlvblwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiYnVzaW5lc3NEdXJhdGlvblZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiYnVzaW5lc3NEdXJhdGlvblZhbHVlXCJ9LFwiYmlsbER1cmF0aW9uXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImJpbGxEdXJhdGlvblwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiYmlsbER1cmF0aW9uVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJiaWxsRHVyYXRpb25WYWx1ZVwifSxcImFwcHJvdmFsUmVtYXJrXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImFwcHJvdmFsUmVtYXJrXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJhcHByb3ZhbFJlbWFya1ZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiYXBwcm92YWxSZW1hcmtWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBidXNpbmVzc0R1cmF0aW9uOiBpbnB1dDEsXG4gICAgICAgICAgICBiaWxsRHVyYXRpb246IGlucHV0MixcbiAgICAgICAgICAgIGFwcHJvdmFsUmVtYXJrOiBpbnB1dDNcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6MSxcbiAgICAgICAgICAgIHNlbGZEdXJhdGlvbjogMCxcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6IHtcbiAgICAgICAgICAgICAgICAvLyAgICBcImlkXCI6IFwiV0wxM2FlOTExNjU0MGQ1NjZkXCIsXG4gICAgICAgICAgICAgICAgLy8gICAgIFwiYnVzaW5lc3NEdXJhdGlvblwiOiAwLFxuICAgICAgICAgICAgICAgIC8vICAgICBcImJpbGxEdXJhdGlvblwiOiAwLFxuICAgICAgICAgICAgICAgIC8vICAgICBcImFwcHJvdmFsUmVzdWx0XCI6IFwiUlwiLFxuICAgICAgICAgICAgICAgIC8vICAgICBcImFwcHJvdmFsUmVtYXJrXCI6IFwi5ouS57udXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXNpbmVzc0R1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuJrliqHml7bplb/vvIjlsI/ml7bvvIknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdidXNpbmVzc0R1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXNpbmVzc0R1cmF0aW9uVmFsdWU6ICcnLFxuICAgICAgICAgICAgYmlsbER1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfotKbljZXml7bplb/vvIjlsI/ml7bvvIknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdiaWxsRHVyYXRpb24nLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbGxEdXJhdGlvblZhbHVlOiAnJyxcbiAgICAgICAgICAgIGlzUGFzczogW3tcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdBJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6ICfpgJrov4flrqHmoLgnLFxuICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1InLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogXCLlrqHmoLjpgIDlm55cIixcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXBwcm92YWxSZW1hcms6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuoeaguOaEj+ingScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2FwcHJvdmFsUmVtYXJrJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFwcHJvdmFsUmVtYXJrVmFsdWU6ICcnLFxuICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBidXNpbmVzc0R1cmF0aW9uVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuYnVzaW5lc3NEdXJhdGlvbiA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaWxsRHVyYXRpb25WYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5iaWxsRHVyYXRpb24gPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXBwcm92YWxSZW1hcmtWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5hcHByb3ZhbFJlbWFyayA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJtaXREYXRhLmFwcHJvdmFsUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zdWJtaXREYXRhLmFwcHJvdmFsUmVzdWx0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2F2ZVdvcmtsb2dBcHByb3ZhbCh0aGlzLnN1Ym1pdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUic6ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdWJtaXREYXRhLmFwcHJvdmFsUmVtYXJrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNhdmVXb3JrbG9nQXBwcm92YWwodGhpcy5zdWJtaXREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcHJvdmFsUmVtYXJrLndhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0RGF0YSgpIHtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBpY2tlckNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLmFwcHJvdmFsUmVzdWx0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGljaygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhc3luYyBTYXZlV29ya2xvZ0FwcHJvdmFsKGRhdGEpIHtcbiAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICBzdWNjZXNzOigpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN1YkRhdGEgPSBbXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2dBcHByb3ZhbC9TYXZlV29ya2xvZ0FwcHJvdmFsJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgc3ViRGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgdmFyIGlzUmVmcmVzaCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoLmlzUmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLCBpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6h5qC45aSx6LSl77yBJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnREYXRhID0gSlNPTi5wYXJzZShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5pZCA9IHBhcmVudERhdGEuaWQ7XG4gICAgICAgICAgICB0aGlzLnNlbGZEdXJhdGlvbiA9IHBhcmVudERhdGEuc2VsZkR1cmF0aW9uO1xuICAgICAgICAgICAgLy8gdGhpcy5idXNpbmVzc0R1cmF0aW9uVmFsdWUgPSBwYXJlbnREYXRhLmJ1c2luZXNzRHVyYXRpb24gIT09IDAgfHwgcGFyZW50RGF0YS5zZWxmRHVyYXRpb24gXG4gICAgICAgICAgICAvLyB0aGlzLmJpbGxEdXJhdGlvblZhbHVlID0gcGFyZW50RGF0YS5iaWxsRHVyYXRpb24gIT09IDAgfHwgcGFyZW50RGF0YS5zZWxmRHVyYXRpb24gXG4gICAgICAgICAgICB0aGlzLmJ1c2luZXNzRHVyYXRpb25WYWx1ZSA9IHBhcmVudERhdGEuYnVzaW5lc3NEdXJhdGlvblxuICAgICAgICAgICAgdGhpcy5iaWxsRHVyYXRpb25WYWx1ZSA9IHBhcmVudERhdGEuYmlsbER1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgfVxuIl19