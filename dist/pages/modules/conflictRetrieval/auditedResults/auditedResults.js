'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var auditedResults = function (_wepy$page) {
    _inherits(auditedResults, _wepy$page);

    function auditedResults() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, auditedResults);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = auditedResults.__proto__ || Object.getPrototypeOf(auditedResults)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: ""
        }, _this.data = {
            caseInfoData: {},
            OrderItemData: {}
        }, _this.components = {}, _this.methods = {
            toAuditedResultDetail: function toAuditedResultDetail(id) {
                wx.navigateTo({ url: './auditedResultDetail?id=' + id });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(auditedResults, [{
        key: 'GetOrderItem',

        //检索结果
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var resData, OrderItemData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/caseOrder/GetOrderItem', 'post', {
                                    id: id
                                });

                            case 2:
                                resData = _context.sent;

                                console.log(resData.data.result);
                                if (resData.statusCode == 200) {
                                    OrderItemData = resData.data.result;
                                    //完成时间 completeTime

                                    OrderItemData.completeTime = OrderItemData.completeTime ? OrderItemData.completeTime.split('T')[0] : '';
                                    // switch (OrderItemData.conflictCondition.result) {
                                    //     case 'NoConflict':
                                    //         OrderItemData.conflictCondition.statusColor='#069400'
                                    //         break;
                                    //     case 'HasConflict':
                                    //         OrderItemData.conflictCondition.statusColor='#e20000'
                                    //         break;
                                    //     case 'CreationRefuse':
                                    //         OrderItemData.conflictCondition.statusColor='#e20000'
                                    //         break;
                                    //     default:
                                    //         OrderItemData.conflictCondition.statusColor='#e20000'
                                    //         break;
                                    // }
                                    this.OrderItemData = OrderItemData;
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetOrderItem(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetOrderItem;
        }()
        //案件信息

    }, {
        key: 'GetCaseInfo',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(caseId) {
                var resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'post', {
                                    id: caseId
                                });

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.caseInfoData = resData.data.result;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetCaseInfo(_x2) {
                return _ref3.apply(this, arguments);
            }

            return GetCaseInfo;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.GetCaseInfo(options.caseId);
            this.GetOrderItem(options.id);
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return auditedResults;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(auditedResults , 'pages/modules/conflictRetrieval/auditedResults/auditedResults'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0ZWRSZXN1bHRzLmpzIl0sIm5hbWVzIjpbImF1ZGl0ZWRSZXN1bHRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYXNlSW5mb0RhdGEiLCJPcmRlckl0ZW1EYXRhIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJ0b0F1ZGl0ZWRSZXN1bHREZXRhaWwiLCJpZCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwic3RhdHVzQ29kZSIsImNvbXBsZXRlVGltZSIsInNwbGl0IiwiJGFwcGx5IiwiY2FzZUlkIiwib3B0aW9ucyIsIkdldENhc2VJbmZvIiwiR2V0T3JkZXJJdGVtIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxjOzs7Ozs7Ozs7Ozs7OzswTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsMEJBQWMsRUFEWDtBQUVIQywyQkFBZTtBQUZaLFMsUUFJUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ05DLGlDQURNLGlDQUNnQkMsRUFEaEIsRUFDbUI7QUFDckJDLG1CQUFHQyxVQUFILENBQWMsRUFBRUMsS0FBSyw4QkFBNEJILEVBQW5DLEVBQWQ7QUFDSDtBQUhLLFMsUUFLVkksTSxHQUFTLEUsUUFDVEMsSyxHQUFRLEUsUUFDUkMsUSxHQUFXLEU7Ozs7OztBQUNYOztpR0FDbUJOLEU7Ozs7Ozs7dUNBQ0tPLGVBQUtDLE9BQUwsQ0FDaEIsMENBRGdCLEVBRWhCLE1BRmdCLEVBRVI7QUFDSlI7QUFESSxpQ0FGUSxDOzs7QUFBaEJTLHVDOztBQU1KQyx3Q0FBUUMsR0FBUixDQUFZRixRQUFRZixJQUFSLENBQWFrQixNQUF6QjtBQUNBLG9DQUFJSCxRQUFRSSxVQUFSLElBQXNCLEdBQTFCLEVBQStCO0FBQ3ZCakIsaURBRHVCLEdBQ1BhLFFBQVFmLElBQVIsQ0FBYWtCLE1BRE47QUFFM0I7O0FBQ0FoQixrREFBY2tCLFlBQWQsR0FBNkJsQixjQUFja0IsWUFBZCxHQUEyQmxCLGNBQWNrQixZQUFkLENBQTJCQyxLQUEzQixDQUFpQyxHQUFqQyxFQUFzQyxDQUF0QyxDQUEzQixHQUFvRSxFQUFqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBS25CLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EseUNBQUtvQixNQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTDs7Ozs7a0dBQ2tCQyxNOzs7Ozs7O3VDQUNNVixlQUFLQyxPQUFMLENBQ2hCLG9DQURnQixFQUVoQixNQUZnQixFQUVSO0FBQ0pSLHdDQUFJaUI7QUFEQSxpQ0FGUSxDOzs7QUFBaEJSLHVDOztBQU1KLG9DQUFJQSxRQUFRSSxVQUFSLElBQXNCLEdBQTFCLEVBQStCO0FBQzNCLHlDQUFLbEIsWUFBTCxHQUFvQmMsUUFBUWYsSUFBUixDQUFha0IsTUFBakM7QUFDSDtBQUNELHFDQUFLSSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUdFLE8sRUFBUztBQUNaLGlCQUFLQyxXQUFMLENBQWlCRCxRQUFRRCxNQUF6QjtBQUNBLGlCQUFLRyxZQUFMLENBQWtCRixRQUFRbEIsRUFBMUI7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUFqRTZCcUIsZUFBS0MsSTs7a0JBQTVCL0IsYyIsImZpbGUiOiJhdWRpdGVkUmVzdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdFRpbWVTeW1ib2xcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXVkaXRlZFJlc3VsdHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlwiLFxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2FzZUluZm9EYXRhOiB7fSxcbiAgICAgICAgICAgIE9yZGVySXRlbURhdGE6IHt9LFxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b0F1ZGl0ZWRSZXN1bHREZXRhaWwoaWQpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL2F1ZGl0ZWRSZXN1bHREZXRhaWw/aWQ9JytpZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge307XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIC8v5qOA57Si57uT5p6cXG4gICAgICAgIGFzeW5jIEdldE9yZGVySXRlbShpZCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VPcmRlci9HZXRPcmRlckl0ZW0nLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEuZGF0YS5yZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgT3JkZXJJdGVtRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy/lrozmiJDml7bpl7QgY29tcGxldGVUaW1lXG4gICAgICAgICAgICAgICAgT3JkZXJJdGVtRGF0YS5jb21wbGV0ZVRpbWUgPSBPcmRlckl0ZW1EYXRhLmNvbXBsZXRlVGltZT9PcmRlckl0ZW1EYXRhLmNvbXBsZXRlVGltZS5zcGxpdCgnVCcpWzBdOicnO1xuICAgICAgICAgICAgICAgIC8vIHN3aXRjaCAoT3JkZXJJdGVtRGF0YS5jb25mbGljdENvbmRpdGlvbi5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2FzZSAnTm9Db25mbGljdCc6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBPcmRlckl0ZW1EYXRhLmNvbmZsaWN0Q29uZGl0aW9uLnN0YXR1c0NvbG9yPScjMDY5NDAwJ1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgJ0hhc0NvbmZsaWN0JzpcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIE9yZGVySXRlbURhdGEuY29uZmxpY3RDb25kaXRpb24uc3RhdHVzQ29sb3I9JyNlMjAwMDAnXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyAgICAgY2FzZSAnQ3JlYXRpb25SZWZ1c2UnOlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgT3JkZXJJdGVtRGF0YS5jb25mbGljdENvbmRpdGlvbi5zdGF0dXNDb2xvcj0nI2UyMDAwMCdcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgT3JkZXJJdGVtRGF0YS5jb25mbGljdENvbmRpdGlvbi5zdGF0dXNDb2xvcj0nI2UyMDAwMCdcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLk9yZGVySXRlbURhdGEgPSBPcmRlckl0ZW1EYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/moYjku7bkv6Hmga9cbiAgICAgICAgYXN5bmMgR2V0Q2FzZUluZm8oY2FzZUlkKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlSW5mbycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjYXNlSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzZUluZm9EYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUluZm8ob3B0aW9ucy5jYXNlSWQpO1xuICAgICAgICAgICAgdGhpcy5HZXRPcmRlckl0ZW0ob3B0aW9ucy5pZCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==