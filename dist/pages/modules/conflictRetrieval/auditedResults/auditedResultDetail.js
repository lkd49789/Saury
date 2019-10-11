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

var auditedResultDetail = function (_wepy$page) {
    _inherits(auditedResultDetail, _wepy$page);

    function auditedResultDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, auditedResultDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = auditedResultDetail.__proto__ || Object.getPrototypeOf(auditedResultDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: ""
        }, _this.data = {
            OrderItemData: {}
        }, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(auditedResultDetail, [{
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

                                if (resData.statusCode == 200) {
                                    OrderItemData = resData.data.result;

                                    console.log(OrderItemData);
                                    //完成时间
                                    OrderItemData.completeTime = OrderItemData.completeTime.split('T')[0];
                                    this.OrderItemData = OrderItemData;
                                    this.$apply();
                                }

                            case 4:
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
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.GetOrderItem(options.id);
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return auditedResultDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(auditedResultDetail , 'pages/modules/conflictRetrieval/auditedResults/auditedResultDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0ZWRSZXN1bHREZXRhaWwuanMiXSwibmFtZXMiOlsiYXVkaXRlZFJlc3VsdERldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiT3JkZXJJdGVtRGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsImlkIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZVRpbWUiLCJzcGxpdCIsIiRhcHBseSIsIm9wdGlvbnMiLCJHZXRPcmRlckl0ZW0iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLG1COzs7Ozs7Ozs7Ozs7OztvTkFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsMkJBQWU7QUFEWixTLFFBR1BDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFLFFBQ1RDLEssR0FBUSxFLFFBQ1JDLFEsR0FBVyxFOzs7Ozs7QUFDWDs7aUdBQ21CQyxFOzs7Ozs7O3VDQUNLQyxlQUFLQyxPQUFMLENBQ2hCLDBDQURnQixFQUVoQixNQUZnQixFQUVSO0FBQ0pGO0FBREksaUNBRlEsQzs7O0FBQWhCRyx1Qzs7QUFNSixvQ0FBSUEsUUFBUUMsVUFBUixJQUFzQixHQUExQixFQUErQjtBQUN2QlYsaURBRHVCLEdBQ1BTLFFBQVFWLElBQVIsQ0FBYVksTUFETjs7QUFFM0JDLDRDQUFRQyxHQUFSLENBQVliLGFBQVo7QUFDQTtBQUNBQSxrREFBY2MsWUFBZCxHQUE2QmQsY0FBY2MsWUFBZCxDQUEyQkMsS0FBM0IsQ0FBaUMsR0FBakMsRUFBc0MsQ0FBdEMsQ0FBN0I7QUFDQSx5Q0FBS2YsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSx5Q0FBS2dCLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUVFQyxPLEVBQVM7QUFDWixpQkFBS0MsWUFBTCxDQUFrQkQsUUFBUVgsRUFBMUI7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUFoQ2tDYSxlQUFLQyxJOztrQkFBakN4QixtQiIsImZpbGUiOiJhdWRpdGVkUmVzdWx0RGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgZm9ybWF0VGltZVN5bWJvbFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhdWRpdGVkUmVzdWx0RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJcIixcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIE9yZGVySXRlbURhdGE6IHt9LFxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7fTtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge307XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIC8v5qOA57Si57uT5p6cXG4gICAgICAgIGFzeW5jIEdldE9yZGVySXRlbShpZCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VPcmRlci9HZXRPcmRlckl0ZW0nLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIE9yZGVySXRlbURhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE9yZGVySXRlbURhdGEpO1xuICAgICAgICAgICAgICAgIC8v5a6M5oiQ5pe26Ze0XG4gICAgICAgICAgICAgICAgT3JkZXJJdGVtRGF0YS5jb21wbGV0ZVRpbWUgPSBPcmRlckl0ZW1EYXRhLmNvbXBsZXRlVGltZS5zcGxpdCgnVCcpWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuT3JkZXJJdGVtRGF0YSA9IE9yZGVySXRlbURhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5HZXRPcmRlckl0ZW0ob3B0aW9ucy5pZCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==