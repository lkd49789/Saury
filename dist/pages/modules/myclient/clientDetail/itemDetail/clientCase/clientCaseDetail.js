'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _placeHolderImage = require('./../../../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientCaseDetail = function (_wepy$page) {
    _inherits(clientCaseDetail, _wepy$page);

    function clientCaseDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientCaseDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientCaseDetail.__proto__ || Object.getPrototypeOf(clientCaseDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            caseId: 0,
            caseDetailData: {},
            caseAvatar: []
        }, _this.methods = {}, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientCaseDetail, [{
        key: 'GetCaseInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var id, caseInfoData, caseBaseInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                id = {
                                    id: this.caseId
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'post', id);

                            case 3:
                                caseInfoData = _context.sent;
                                _context.t0 = caseInfoData.statusCode;
                                _context.next = _context.t0 === 200 ? 7 : _context.t0 === 403 ? 10 : _context.t0 === 500 ? 15 : 19;
                                break;

                            case 7:
                                if (caseInfoData.data.result !== null) {
                                    this.caseDetailData = caseInfoData.data.result;
                                    caseBaseInfo = {
                                        caseBaseInfo: caseInfoData.data.result
                                    };

                                    wx.setStorageSync('caseDetailData', caseBaseInfo);
                                } else {
                                    console.log('数据为空');
                                    this.placeHolder.placeHolderImageIndex = 0;
                                    this.placeHolder.placeHolderShow = true;
                                }
                                this.$apply();
                                return _context.abrupt('break', 20);

                            case 10:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 20);

                            case 15:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 19:
                                return _context.abrupt('break', 20);

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseInfo() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseInfo;
        }()
        // 获取案件人员头像

    }, {
        key: 'GetCaseLawyersWithGroupData',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var caseId, lawyerGroupData, index, userId, http, avatarData, caseDetailData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                caseId = { caseId: this.caseId };
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseLawyer/GetCaseLawyersWithGroup', 'post', caseId);

                            case 3:
                                lawyerGroupData = _context2.sent;

                                if (!(lawyerGroupData.statusCode == 200 && lawyerGroupData.data.result.length !== 0)) {
                                    _context2.next = 22;
                                    break;
                                }

                                lawyerGroupData = lawyerGroupData.data.result;
                                _context2.t0 = regeneratorRuntime.keys(lawyerGroupData);

                            case 7:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 19;
                                    break;
                                }

                                index = _context2.t1.value;
                                userId = lawyerGroupData[index].userId;

                                console.log(lawyerGroupData[index].userId);
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + userId;
                                _context2.next = 14;
                                return _ajax2.default.getUserAvatar(http);

                            case 14:
                                avatarData = _context2.sent;

                                this.caseAvatar[index] = avatarData.tempFilePath;
                                lawyerGroupData[index]['avatar'] = avatarData.tempFilePath;
                                _context2.next = 7;
                                break;

                            case 19:
                                caseDetailData = wx.getStorageSync('caseDetailData');

                                caseDetailData['lawyerGroupData'] = lawyerGroupData;
                                wx.setStorageSync('caseDetailData', caseDetailData);

                            case 22:
                                this.$apply();

                            case 23:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetCaseLawyersWithGroupData() {
                return _ref3.apply(this, arguments);
            }

            return GetCaseLawyersWithGroupData;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.caseId = options.id;
            this.GetCaseInfo();
            this.GetCaseLawyersWithGroupData();
        }
    }]);

    return clientCaseDetail;
}(_wepy2.default.page);

exports.default = clientCaseDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudENhc2VEZXRhaWwuanMiXSwibmFtZXMiOlsiY2xpZW50Q2FzZURldGFpbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJkYXRhIiwiY2FzZUlkIiwiY2FzZURldGFpbERhdGEiLCJjYXNlQXZhdGFyIiwibWV0aG9kcyIsIm1peGlucyIsImlkIiwiYWpheCIsImdldERhdGEiLCJjYXNlSW5mb0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiY2FzZUJhc2VJbmZvIiwid3giLCJzZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsIiRhcHBseSIsImxhd3llckdyb3VwRGF0YSIsImxlbmd0aCIsImluZGV4IiwidXNlcklkIiwiaHR0cCIsImdldFVzZXJBdmF0YXIiLCJhdmF0YXJEYXRhIiwidGVtcEZpbGVQYXRoIiwiZ2V0U3RvcmFnZVN5bmMiLCJvcHRpb25zIiwiR2V0Q2FzZUluZm8iLCJHZXRDYXNlTGF3eWVyc1dpdGhHcm91cERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxnQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsb0JBQW1CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMkJBQTBCLGFBQTdDLEVBQXBCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMsb0JBQU8sQ0FESjtBQUVIQyw0QkFBZSxFQUZaO0FBR0hDLHdCQUFXO0FBSFIsUyxRQUtQQyxPLEdBQVUsRSxRQUNWQyxNLEdBQVMsQ0FBQ0EsZUFBRCxDOzs7Ozs7Ozs7Ozs7QUFFRkMsa0MsR0FBRztBQUNIQSx3Q0FBRyxLQUFLTDtBQURMLGlDOzt1Q0FHZ0JNLGVBQUtDLE9BQUwsQ0FDbkIsb0NBRG1CLEVBRW5CLE1BRm1CLEVBR25CRixFQUhtQixDOzs7QUFBbkJHLDRDOzhDQUtLQSxhQUFhQyxVO2dFQUNaLEcsdUJBY0EsRyx3QkFNQSxHOzs7O0FBbkJELG9DQUFJRCxhQUFhVCxJQUFiLENBQWtCVyxNQUFsQixLQUE0QixJQUFoQyxFQUFzQztBQUNsQyx5Q0FBS1QsY0FBTCxHQUFvQk8sYUFBYVQsSUFBYixDQUFrQlcsTUFBdEM7QUFDSUMsZ0RBRjhCLEdBRWpCO0FBQ2JBLHNEQUFhSCxhQUFhVCxJQUFiLENBQWtCVztBQURsQixxQ0FGaUI7O0FBS2xDRSx1Q0FBR0MsY0FBSCxDQUFrQixnQkFBbEIsRUFBb0NGLFlBQXBDO0FBQ0gsaUNBTkQsTUFNTztBQUNIRyw0Q0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSx5Q0FBS0MsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EseUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0g7QUFDRCxxQ0FBS0MsTUFBTDs7OztBQUdBTCx3Q0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxxQ0FBS0MsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUNBQUtDLE1BQUw7Ozs7QUFHQUwsd0NBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EscUNBQUtDLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFDQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFDQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1o7Ozs7Ozs7Ozs7O0FBRVFuQixzQyxHQUFTLEVBQUVBLFFBQVEsS0FBS0EsTUFBZixFOzt1Q0FDZU0sZUFBS0MsT0FBTCxDQUM1QixzREFENEIsRUFFNUIsTUFGNEIsRUFHNUJQLE1BSDRCLEM7OztBQUF4Qm9CLCtDOztzQ0FLREEsZ0JBQWdCWCxVQUFoQixJQUE0QixHQUE1QixJQUFpQ1csZ0JBQWdCckIsSUFBaEIsQ0FBcUJXLE1BQXJCLENBQTRCVyxNQUE1QixLQUFxQyxDOzs7OztBQUNqRUQsK0MsR0FBZ0JBLGdCQUFnQnJCLElBQWhCLENBQXFCVyxNO3VFQUN4QlUsZTs7Ozs7Ozs7QUFBVEUscUM7QUFDQUMsc0MsR0FBT0gsZ0JBQWdCRSxLQUFoQixFQUF1QkMsTTs7QUFDbENULHdDQUFRQyxHQUFSLENBQVlLLGdCQUFnQkUsS0FBaEIsRUFBdUJDLE1BQW5DO0FBQ0lDLG9DLEdBQUssb0RBQWtERCxNOzt1Q0FDdENqQixlQUFLbUIsYUFBTCxDQUFtQkQsSUFBbkIsQzs7O0FBQWpCRSwwQzs7QUFDSixxQ0FBS3hCLFVBQUwsQ0FBZ0JvQixLQUFoQixJQUF1QkksV0FBV0MsWUFBbEM7QUFDQVAsZ0RBQWdCRSxLQUFoQixFQUF1QixRQUF2QixJQUFpQ0ksV0FBV0MsWUFBNUM7Ozs7O0FBRUExQiw4QyxHQUFlVyxHQUFHZ0IsY0FBSCxDQUFrQixnQkFBbEIsQzs7QUFDbkIzQiwrQ0FBZSxpQkFBZixJQUFrQ21CLGVBQWxDO0FBQ0FSLG1DQUFHQyxjQUFILENBQWtCLGdCQUFsQixFQUFvQ1osY0FBcEM7OztBQUVKLHFDQUFLa0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUVHVSxPLEVBQVM7QUFDWixpQkFBSzdCLE1BQUwsR0FBWTZCLFFBQVF4QixFQUFwQjtBQUNBLGlCQUFLeUIsV0FBTDtBQUNBLGlCQUFLQywyQkFBTDtBQUNIOzs7O0VBakZ5Q0MsZUFBS0MsSTs7a0JBQTlCeEMsZ0IiLCJmaWxlIjoiY2xpZW50Q2FzZURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG4gICAgaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9taXhpbi5qcyc7XG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wbGFjZUhvbGRlckltYWdlJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjbGllbnRDYXNlRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2VcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNhc2VJZDowLFxuICAgICAgICAgICAgY2FzZURldGFpbERhdGE6e30sXG4gICAgICAgICAgICBjYXNlQXZhdGFyOltdXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7fTtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgICAgIGFzeW5jIEdldENhc2VJbmZvKCkge1xuICAgICAgICAgICB2YXIgaWQ9e1xuICAgICAgICAgICAgICAgaWQ6dGhpcy5jYXNlSWRcbiAgICAgICAgICAgfVxuICAgICAgICAgICB2YXIgY2FzZUluZm9EYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldENhc2VJbmZvJyxcbiAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgIClcbiAgICAgICAgICAgIHN3aXRjaCAoY2FzZUluZm9EYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhc2VJbmZvRGF0YS5kYXRhLnJlc3VsdCE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhPWNhc2VJbmZvRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXNlQmFzZUluZm89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VCYXNlSW5mbzpjYXNlSW5mb0RhdGEuZGF0YS5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjYXNlRGV0YWlsRGF0YScsIGNhc2VCYXNlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u5Li656m6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmgqjmsqHmnInmnYPpmZAnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u6K+35rGC6ZSZ6K+vJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W5qGI5Lu25Lq65ZGY5aS05YOPXG4gICAgICAgIGFzeW5jIEdldENhc2VMYXd5ZXJzV2l0aEdyb3VwRGF0YSgpe1xuICAgICAgICAgICAgdmFyIGNhc2VJZCA9IHsgY2FzZUlkOiB0aGlzLmNhc2VJZCB9O1xuICAgICAgICAgICAgdmFyIGxhd3llckdyb3VwRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlTGF3eWVyL0dldENhc2VMYXd5ZXJzV2l0aEdyb3VwJyxcbiAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgIGNhc2VJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmKGxhd3llckdyb3VwRGF0YS5zdGF0dXNDb2RlPT0yMDAmJmxhd3llckdyb3VwRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGghPT0wKXtcbiAgICAgICAgICAgICAgICB2YXIgbGF3eWVyR3JvdXBEYXRhPWxhd3llckdyb3VwRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIGxhd3llckdyb3VwRGF0YSApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlcklkPWxhd3llckdyb3VwRGF0YVtpbmRleF0udXNlcklkXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhd3llckdyb3VwRGF0YVtpbmRleF0udXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0dHA9Jy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9Jyt1c2VySWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YXRhckRhdGE9YXdhaXQgYWpheC5nZXRVc2VyQXZhdGFyKGh0dHApOyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlQXZhdGFyW2luZGV4XT1hdmF0YXJEYXRhLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgbGF3eWVyR3JvdXBEYXRhW2luZGV4XVsnYXZhdGFyJ109YXZhdGFyRGF0YS50ZW1wRmlsZVBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjYXNlRGV0YWlsRGF0YT13eC5nZXRTdG9yYWdlU3luYygnY2FzZURldGFpbERhdGEnKTtcbiAgICAgICAgICAgICAgICBjYXNlRGV0YWlsRGF0YVsnbGF3eWVyR3JvdXBEYXRhJ109bGF3eWVyR3JvdXBEYXRhO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjYXNlRGV0YWlsRGF0YScsIGNhc2VEZXRhaWxEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzZUlkPW9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VJbmZvKCk7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VMYXd5ZXJzV2l0aEdyb3VwRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuIl19