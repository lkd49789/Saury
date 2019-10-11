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

var financialOperationRecord = function (_wepy$page) {
    _inherits(financialOperationRecord, _wepy$page);

    function financialOperationRecord() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, financialOperationRecord);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = financialOperationRecord.__proto__ || Object.getPrototypeOf(financialOperationRecord)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            workflows: []
        }, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(financialOperationRecord, [{
        key: 'getbill',

        //获取账单
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, index, http, avatar;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/financialCharge/GetCharge', 'post', {
                                    id: this.invoiceDetailId
                                });

                            case 3:
                                resData = _context.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context.next = 19;
                                    break;
                                }

                                this.workflows = resData.data.result.workflows;
                                // this.$apply();
                                _context.t0 = regeneratorRuntime.keys(this.workflows);

                            case 7:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 18;
                                    break;
                                }

                                index = _context.t1.value;

                                this.workflows[index].creationTime = (0, _api.formatTime)(this.workflows[index].creationTime);
                                http = "/api/services/web/personal/GetEmployeePhoto?id=" + this.workflows[index].creatorUserId;
                                _context.next = 13;
                                return _ajax2.default.getAavatar(http);

                            case 13:
                                avatar = _context.sent;

                                this.workflows[index].avatar = avatar;
                                this.$apply();
                                _context.next = 7;
                                break;

                            case 18:
                                this.$apply();

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getbill() {
                return _ref2.apply(this, arguments);
            }

            return getbill;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.invoiceDetailId = options.invoiceDetailId;
            this.getbill();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return financialOperationRecord;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(financialOperationRecord , 'pages/modules/cost/myCost/financialOperationRecord'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFuY2lhbE9wZXJhdGlvblJlY29yZC5qcyJdLCJuYW1lcyI6WyJmaW5hbmNpYWxPcGVyYXRpb25SZWNvcmQiLCJkYXRhIiwid29ya2Zsb3dzIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInN1Y2Nlc3MiLCJhamF4IiwiZ2V0RGF0YSIsImlkIiwiaW52b2ljZURldGFpbElkIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpbmRleCIsImNyZWF0aW9uVGltZSIsImh0dHAiLCJjcmVhdG9yVXNlcklkIiwiZ2V0QWF2YXRhciIsImF2YXRhciIsIiRhcHBseSIsIm9wdGlvbnMiLCJnZXRiaWxsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSx3Qjs7Ozs7Ozs7Ozs7Ozs7OE5BQ25CQyxJLEdBQU87QUFDSEMsdUJBQVU7QUFEUCxTLFFBSVBDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7Ozs7QUFDVjs7Ozs7Ozs7QUFFT0MsbUNBQUdDLFdBQUgsQ0FBZTtBQUNYQywyQ0FBTyxZQURJLEVBQ1U7QUFDckJDLDBDQUFNLElBRkssRUFFQztBQUNaQyw2Q0FBUyxzQkFBTyxDQUFFO0FBSFAsaUNBQWY7O3VDQUtvQkMsZUFBS0MsT0FBTCxDQUNoQiw2Q0FEZ0IsRUFFaEIsTUFGZ0IsRUFFUjtBQUNKQyx3Q0FBSSxLQUFLQztBQURMLGlDQUZRLEM7OztBQUFoQkMsdUM7O3NDQU1EQSxRQUFRQyxVQUFSLElBQW9CLEc7Ozs7O0FBQ25CLHFDQUFLaEIsU0FBTCxHQUFpQmUsUUFBUWhCLElBQVIsQ0FBYWtCLE1BQWIsQ0FBb0JqQixTQUFyQztBQUNBO3NFQUNrQixLQUFLQSxTOzs7Ozs7OztBQUFka0IscUM7O0FBQ0wscUNBQUtsQixTQUFMLENBQWVrQixLQUFmLEVBQXNCQyxZQUF0QixHQUFtQyxxQkFBVyxLQUFLbkIsU0FBTCxDQUFla0IsS0FBZixFQUFzQkMsWUFBakMsQ0FBbkM7QUFDSUMsb0MsR0FBTyxvREFBb0QsS0FBS3BCLFNBQUwsQ0FBZWtCLEtBQWYsRUFBc0JHLGE7O3VDQUNsRVYsZUFBS1csVUFBTCxDQUFnQkYsSUFBaEIsQzs7O0FBQWZHLHNDOztBQUNKLHFDQUFLdkIsU0FBTCxDQUFla0IsS0FBZixFQUFzQkssTUFBdEIsR0FBK0JBLE1BQS9CO0FBQ0EscUNBQUtDLE1BQUw7Ozs7O0FBRUgscUNBQUtBLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFJTkMsTyxFQUFTO0FBQ1osaUJBQUtYLGVBQUwsR0FBcUJXLFFBQVFYLGVBQTdCO0FBQ0EsaUJBQUtZLE9BQUw7QUFDQSxpQkFBS0YsTUFBTDtBQUNGOzs7aUNBRU8sQ0FBRzs7OztFQS9Dd0NHLGVBQUtDLEk7O2tCQUF0QzlCLHdCIiwiZmlsZSI6ImZpbmFuY2lhbE9wZXJhdGlvblJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgaW1wb3J0IHtmb3JtYXRUaW1lfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZpbmFuY2lhbE9wZXJhdGlvblJlY29yZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgICAgd29ya2Zsb3dzOltdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudHMgPSB7fTtcblxuICAgIG1ldGhvZHMgPSB7fTtcblxuICAgIGV2ZW50cyA9IHt9O1xuXG4gICAgd2F0Y2ggPSB7fTtcblxuICAgIGNvbXB1dGVkID0ge307XG4gICAgIC8v6I635Y+W6LSm5Y2VXG4gICAgICAgIGFzeW5jIGdldGJpbGwoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxDaGFyZ2UvR2V0Q2hhcmdlJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaW52b2ljZURldGFpbElkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmtmbG93cyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQud29ya2Zsb3dzO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy53b3JrZmxvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JrZmxvd3NbaW5kZXhdLmNyZWF0aW9uVGltZT1mb3JtYXRUaW1lKHRoaXMud29ya2Zsb3dzW2luZGV4XS5jcmVhdGlvblRpbWUpXG4gICAgICAgICAgICAgICAgICAgIHZhciBodHRwID0gXCIvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPVwiICsgdGhpcy53b3JrZmxvd3NbaW5kZXhdLmNyZWF0b3JVc2VySWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JrZmxvd3NbaW5kZXhdLmF2YXRhciA9IGF2YXRhcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbnZvaWNlRGV0YWlsSWQ9b3B0aW9ucy5pbnZvaWNlRGV0YWlsSWQ7XG4gICAgICAgIHRoaXMuZ2V0YmlsbCgpO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICB9O1xuXG4gICAgb25TaG93KCkgeyB9O1xuICB9XG4iXX0=