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

var auditResultsDetail = function (_wepy$page) {
    _inherits(auditResultsDetail, _wepy$page);

    function auditResultsDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, auditResultsDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = auditResultsDetail.__proto__ || Object.getPrototypeOf(auditResultsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            approvalList: []
        }, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(auditResultsDetail, [{
        key: 'getAvatar',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var index, http;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.t0 = regeneratorRuntime.keys(this.approvalList);

                            case 1:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 10;
                                    break;
                                }

                                index = _context.t1.value;

                                this.approvalList[index].approvalDateText = (0, _api.formatTime)(this.approvalList[index].approvalDate);
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + this.approvalList[index].employeeId;
                                _context.next = 7;
                                return _ajax2.default.getAavatar(http);

                            case 7:
                                this.approvalList[index].avatar = _context.sent;
                                _context.next = 1;
                                break;

                            case 10:
                                this.$apply();

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAvatar() {
                return _ref2.apply(this, arguments);
            }

            return getAvatar;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var approvalList = JSON.parse(options.approvalList);
            this.approvalList = approvalList;
            this.getAvatar();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return auditResultsDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(auditResultsDetail , 'pages/modules/myRecord/myLogdetail/auditResultsDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0UmVzdWx0c0RldGFpbC5qcyJdLCJuYW1lcyI6WyJhdWRpdFJlc3VsdHNEZXRhaWwiLCJkYXRhIiwiYXBwcm92YWxMaXN0IiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiaW5kZXgiLCJhcHByb3ZhbERhdGVUZXh0IiwiYXBwcm92YWxEYXRlIiwiaHR0cCIsImVtcGxveWVlSWQiLCJhamF4IiwiZ2V0QWF2YXRhciIsImF2YXRhciIsIiRhcHBseSIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJnZXRBdmF0YXIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGtCOzs7Ozs7Ozs7Ozs7OztrTkFDakJDLEksR0FBTztBQUNIQywwQkFBYztBQURYLFMsUUFHUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVLEUsUUFDVkMsTSxHQUFTLEUsUUFDVEMsSyxHQUFRLEUsUUFDUkMsUSxHQUFXLEU7Ozs7Ozs7Ozs7OztzRUFFVyxLQUFLTCxZOzs7Ozs7OztBQUFkTSxxQzs7QUFDTCxxQ0FBS04sWUFBTCxDQUFrQk0sS0FBbEIsRUFBeUJDLGdCQUF6QixHQUEwQyxxQkFBVyxLQUFLUCxZQUFMLENBQWtCTSxLQUFsQixFQUF5QkUsWUFBcEMsQ0FBMUM7QUFDSUMsb0MsR0FBTyxvREFBb0QsS0FBS1QsWUFBTCxDQUFrQk0sS0FBbEIsRUFBeUJJLFU7O3VDQUNoREMsZUFBS0MsVUFBTCxDQUFnQkgsSUFBaEIsQzs7O0FBQXhDLHFDQUFLVCxZQUFMLENBQWtCTSxLQUFsQixFQUF5Qk8sTTs7Ozs7QUFFN0IscUNBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFFR0MsTyxFQUFTO0FBQ1osZ0JBQUlmLGVBQWVnQixLQUFLQyxLQUFMLENBQVdGLFFBQVFmLFlBQW5CLENBQW5CO0FBQ0EsaUJBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsaUJBQUtrQixTQUFMO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBdEJpQ0MsZUFBS0MsSTs7a0JBQWhDdEIsa0IiLCJmaWxlIjoiYXVkaXRSZXN1bHRzRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtmb3JtYXRUaW1lfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXVkaXRSZXN1bHRzRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFwcHJvdmFsTGlzdDogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBtZXRob2RzID0ge307XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB3YXRjaCA9IHt9O1xuICAgICAgICBjb21wdXRlZCA9IHt9O1xuICAgICAgICBhc3luYyBnZXRBdmF0YXIoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmFwcHJvdmFsTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwcm92YWxMaXN0W2luZGV4XS5hcHByb3ZhbERhdGVUZXh0PWZvcm1hdFRpbWUodGhpcy5hcHByb3ZhbExpc3RbaW5kZXhdLmFwcHJvdmFsRGF0ZSlcbiAgICAgICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyB0aGlzLmFwcHJvdmFsTGlzdFtpbmRleF0uZW1wbG95ZWVJZDtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcHJvdmFsTGlzdFtpbmRleF0uYXZhdGFyID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgYXBwcm92YWxMaXN0ID0gSlNPTi5wYXJzZShvcHRpb25zLmFwcHJvdmFsTGlzdCk7XG4gICAgICAgICAgICB0aGlzLmFwcHJvdmFsTGlzdCA9IGFwcHJvdmFsTGlzdDtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXZhdGFyKCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==