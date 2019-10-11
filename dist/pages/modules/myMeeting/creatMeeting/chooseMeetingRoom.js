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

var clientDetail = function (_wepy$page) {
    _inherits(clientDetail, _wepy$page);

    function clientDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            submitData: {},
            addOpacity: 1,
            meetingRoomCombobox: {
                value: [],
                displayText: [],
                index: -1,
                isSelected: false
            },
            meetingRoomData: {}
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.MeetingRoomId) {
                    this.CreateOrUpdateMeeting(this.submitData);
                } else {
                    this.addOpacity = 1;
                    this.meetingRoomCombobox.isSelected = true;
                }
            },
            bindPickerChange: function bindPickerChange(e) {
                this.meetingRoomCombobox.isSelected = false;
                this.meetingRoomCombobox.index = +e.detail.value;
                this.submitData.MeetingRoomId = this.meetingRoomCombobox.value[this.meetingRoomCombobox.index];
                this.GetMeetingRoom(this.meetingRoomCombobox.value[this.meetingRoomCombobox.index]);
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'CreateOrUpdateMeeting',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
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
                                        _this2.addOpacity = 1;
                                        _this2.$apply();
                                    }
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/meeting/CreateOrUpdateMeeting', 'post', data);

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
                                        title: '该会议室正在使用中！',
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

            function CreateOrUpdateMeeting(_x) {
                return _ref2.apply(this, arguments);
            }

            return CreateOrUpdateMeeting;
        }()
    }, {
        key: 'GetMeetingRoom',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
                var roomId, resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                roomId = {
                                    id: id
                                };
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/meetingRoom/GetMeetingRoom', 'post', roomId);

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.meetingRoomData = resData.data.result;
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetMeetingRoom(_x2) {
                return _ref3.apply(this, arguments);
            }

            return GetMeetingRoom;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var meetingRoomData = wx.getStorageSync('meetingRoomData');
            this.submitData = wx.getStorageSync('creatMeetingData');
            for (var index in meetingRoomData) {
                this.meetingRoomCombobox.value[index] = meetingRoomData[index].value;
                this.meetingRoomCombobox.displayText[index] = meetingRoomData[index].displayText;
            }
            this.$apply();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myMeeting/creatMeeting/chooseMeetingRoom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZU1lZXRpbmdSb29tLmpzIl0sIm5hbWVzIjpbImNsaWVudERldGFpbCIsImNvbXBvbmVudHMiLCJkYXRhIiwic3VibWl0RGF0YSIsImFkZE9wYWNpdHkiLCJtZWV0aW5nUm9vbUNvbWJvYm94IiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsImluZGV4IiwiaXNTZWxlY3RlZCIsIm1lZXRpbmdSb29tRGF0YSIsIm1ldGhvZHMiLCJ0b3VjaFN0YXJ0IiwiJGFwcGx5IiwidG91Y2hFbmQiLCJNZWV0aW5nUm9vbUlkIiwiQ3JlYXRlT3JVcGRhdGVNZWV0aW5nIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJHZXRNZWV0aW5nUm9vbSIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsImlzUmVmcmVzaCIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImlkIiwicm9vbUlkIiwicmVzdWx0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNIQyx3QkFBVyxFQURSO0FBRUhDLHdCQUFXLENBRlI7QUFHSEMsaUNBQW9CO0FBQ2hCQyx1QkFBTyxFQURTO0FBRWhCQyw2QkFBYSxFQUZHO0FBR2hCQyx1QkFBTyxDQUFDLENBSFE7QUFJaEJDLDRCQUFXO0FBSkssYUFIakI7QUFTSEMsNkJBQWdCO0FBVGIsUyxRQVdQQyxPLEdBQVU7QUFDTkMsc0JBRE0sd0JBQ007QUFDUixxQkFBS1IsVUFBTCxHQUFrQixHQUFsQjtBQUNBLHFCQUFLUyxNQUFMO0FBQ0gsYUFKSztBQUtOQyxvQkFMTSxzQkFLSTtBQUNOLG9CQUFHLEtBQUtYLFVBQUwsQ0FBZ0JZLGFBQW5CLEVBQWlDO0FBQzdCLHlCQUFLQyxxQkFBTCxDQUEyQixLQUFLYixVQUFoQztBQUNILGlCQUZELE1BRUs7QUFDRCx5QkFBS0MsVUFBTCxHQUFnQixDQUFoQjtBQUNBLHlCQUFLQyxtQkFBTCxDQUF5QkksVUFBekIsR0FBb0MsSUFBcEM7QUFDSDtBQUNKLGFBWks7QUFhTlEsNEJBYk0sNEJBYVdDLENBYlgsRUFhYTtBQUNmLHFCQUFLYixtQkFBTCxDQUF5QkksVUFBekIsR0FBb0MsS0FBcEM7QUFDQSxxQkFBS0osbUJBQUwsQ0FBeUJHLEtBQXpCLEdBQStCLENBQUNVLEVBQUVDLE1BQUYsQ0FBU2IsS0FBekM7QUFDQSxxQkFBS0gsVUFBTCxDQUFnQlksYUFBaEIsR0FBOEIsS0FBS1YsbUJBQUwsQ0FBeUJDLEtBQXpCLENBQStCLEtBQUtELG1CQUFMLENBQXlCRyxLQUF4RCxDQUE5QjtBQUNBLHFCQUFLWSxjQUFMLENBQW9CLEtBQUtmLG1CQUFMLENBQXlCQyxLQUF6QixDQUErQixLQUFLRCxtQkFBTCxDQUF5QkcsS0FBeEQsQ0FBcEI7QUFDQSxxQkFBS0ssTUFBTDtBQUNIO0FBbkJLLFM7Ozs7OztpR0FxQmtCWCxJOzs7Ozs7OztBQUN4Qm1CLG1DQUFHQyxXQUFILENBQWU7QUFDWEMsMkNBQU8sVUFESSxFQUNRO0FBQ25CQywwQ0FBTSxJQUZLLEVBRUM7QUFDWkMsNkNBQVEsbUJBQUk7QUFDUiwrQ0FBS3JCLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSwrQ0FBS1MsTUFBTDtBQUNIO0FBTlUsaUNBQWY7O3VDQVFrQmEsZUFBS0MsT0FBTCxDQUNkLGlEQURjLEVBRWQsTUFGYyxFQUdkekIsSUFIYyxDOzs7QUFBZDBCLHVDOztBQUtKLG9DQUFHQSxRQUFRQyxVQUFSLElBQW9CLEdBQXZCLEVBQTJCO0FBQ3BCQyw2Q0FEb0IsR0FDVlQsR0FBR1UsY0FBSCxDQUFrQixXQUFsQixDQURVOztBQUV2QkQsOENBQVVBLFNBQVYsR0FBb0IsSUFBcEI7QUFDQVQsdUNBQUdXLGNBQUgsQ0FBa0IsV0FBbEIsRUFBOEJGLFNBQTlCO0FBQ0FULHVDQUFHWSxZQUFILENBQWdCO0FBQ1pDLCtDQUFPO0FBREsscUNBQWhCO0FBR0gsaUNBUEQsTUFPSztBQUNEYix1Q0FBR2MsU0FBSCxDQUFhO0FBQ1RaLCtDQUFPLFlBREU7QUFFVGEsOENBQU0sTUFGRztBQUdUQyxrREFBVSxJQUhEO0FBSVRiLDhDQUFNO0FBSkcscUNBQWI7QUFNSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FFZ0JjLEU7Ozs7OztBQUNiQyxzQyxHQUFPO0FBQ1BELHdDQUFHQTtBQURJLGlDOzt1Q0FHT1osZUFBS0MsT0FBTCxDQUNkLDhDQURjLEVBRWQsTUFGYyxFQUdkWSxNQUhjLEM7OztBQUFkWCx1Qzs7QUFLSixvQ0FBR0EsUUFBUUMsVUFBUixJQUFvQixHQUF2QixFQUEyQjtBQUN2Qix5Q0FBS25CLGVBQUwsR0FBcUJrQixRQUFRMUIsSUFBUixDQUFhc0MsTUFBbEM7QUFDSDtBQUNELHFDQUFLM0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVLO0FBQ0wsZ0JBQUlILGtCQUFnQlcsR0FBR1UsY0FBSCxDQUFrQixpQkFBbEIsQ0FBcEI7QUFDQSxpQkFBSzVCLFVBQUwsR0FBZ0JrQixHQUFHVSxjQUFILENBQWtCLGtCQUFsQixDQUFoQjtBQUNBLGlCQUFJLElBQUl2QixLQUFSLElBQWlCRSxlQUFqQixFQUFpQztBQUM3QixxQkFBS0wsbUJBQUwsQ0FBeUJDLEtBQXpCLENBQStCRSxLQUEvQixJQUFzQ0UsZ0JBQWdCRixLQUFoQixFQUF1QkYsS0FBN0Q7QUFDQSxxQkFBS0QsbUJBQUwsQ0FBeUJFLFdBQXpCLENBQXFDQyxLQUFyQyxJQUE0Q0UsZ0JBQWdCRixLQUFoQixFQUF1QkQsV0FBbkU7QUFDSDtBQUNELGlCQUFLTSxNQUFMO0FBQ0g7Ozs7RUF2RnFDNEIsZUFBS0MsSTs7a0JBQTFCMUMsWSIsImZpbGUiOiJjaG9vc2VNZWV0aW5nUm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xpZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6e30sXG4gICAgICAgICAgICBhZGRPcGFjaXR5OjEsXG4gICAgICAgICAgICBtZWV0aW5nUm9vbUNvbWJvYm94OntcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIGluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOmZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVldGluZ1Jvb21EYXRhOnt9XG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pdERhdGEuTWVldGluZ1Jvb21JZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVNZWV0aW5nKHRoaXMuc3VibWl0RGF0YSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eT0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZXRpbmdSb29tQ29tYm9ib3guaXNTZWxlY3RlZD10cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWV0aW5nUm9vbUNvbWJvYm94LmlzU2VsZWN0ZWQ9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWV0aW5nUm9vbUNvbWJvYm94LmluZGV4PStlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTWVldGluZ1Jvb21JZD10aGlzLm1lZXRpbmdSb29tQ29tYm9ib3gudmFsdWVbdGhpcy5tZWV0aW5nUm9vbUNvbWJvYm94LmluZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldE1lZXRpbmdSb29tKHRoaXMubWVldGluZ1Jvb21Db21ib2JveC52YWx1ZVt0aGlzLm1lZXRpbmdSb29tQ29tYm9ib3guaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhc3luYyBDcmVhdGVPclVwZGF0ZU1lZXRpbmcoZGF0YSl7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK3vvIzor7fnqI3nrYnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOigpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL21lZXRpbmcvQ3JlYXRlT3JVcGRhdGVNZWV0aW5nJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgdmFyIGlzUmVmcmVzaD13eC5nZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgaXNSZWZyZXNoLmlzUmVmcmVzaD10cnVlO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpc1JlZnJlc2gnLGlzUmVmcmVzaCk7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+l5Lya6K6u5a6k5q2j5Zyo5L2/55So5Lit77yBJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0TWVldGluZ1Jvb20oaWQpe1xuICAgICAgICAgICAgdmFyIHJvb21JZD17XG4gICAgICAgICAgICAgICAgaWQ6aWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvbWVldGluZ1Jvb20vR2V0TWVldGluZ1Jvb20nLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICByb29tSWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1lZXRpbmdSb29tRGF0YT1yZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB2YXIgbWVldGluZ1Jvb21EYXRhPXd4LmdldFN0b3JhZ2VTeW5jKCdtZWV0aW5nUm9vbURhdGEnKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YT13eC5nZXRTdG9yYWdlU3luYygnY3JlYXRNZWV0aW5nRGF0YScpO1xuICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBtZWV0aW5nUm9vbURhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMubWVldGluZ1Jvb21Db21ib2JveC52YWx1ZVtpbmRleF09bWVldGluZ1Jvb21EYXRhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lZXRpbmdSb29tQ29tYm9ib3guZGlzcGxheVRleHRbaW5kZXhdPW1lZXRpbmdSb29tRGF0YVtpbmRleF0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG5cbiAgICB9XG4iXX0=