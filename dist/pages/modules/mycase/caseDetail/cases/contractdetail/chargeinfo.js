'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chargeinfo = function (_wepy$page) {
  _inherits(chargeinfo, _wepy$page);

  function chargeinfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, chargeinfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = chargeinfo.__proto__ || Object.getPrototypeOf(chargeinfo)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      indicatorDots: true,
      duration: 300,
      circular: true,
      current: 0,
      contractForEditData: {},
      lawyerChargeData: {},
      normalChargeListData: {},
      riskChargeListData: {},
      userId: [],
      userPhoto: [],
      normalPayAmount: 0,
      riskPayAmount: 0
    }, _this.methods = {
      bindchange: function bindchange(e) {
        this.current = e.detail.current;
        this.$apply();
      }
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(chargeinfo, [{
    key: 'getContractData',
    value: function getContractData(payStyle) {
      var _this2 = this;

      wx.getStorage({
        key: 'caseDetailData',
        success: function success(res) {
          _this2.contractForEditData = res.data.contractForEditData;
          for (var index in payStyle) {
            switch (payStyle[index]) {
              case '1':
                // 正常收费
                _this2.normalChargeListData = res.data.contractForEditData.caseCharges.normalChargeList;
                //1.判断是否使用账单
                for (var index in _this2.normalChargeListData) {
                  //2.计算总额
                  _this2.normalPayAmount += _this2.normalChargeListData[index].payAmount;
                  //3.处理日期
                  _this2.normalChargeListData[index].payDate = _this2.normalChargeListData[index].payDate.split('T')[0];
                }
                break;
              case '2':
                //风险收费
                _this2.riskChargeListData = res.data.contractForEditData.caseCharges.riskChargeList;
                //计算总额
                var sum = _this2.riskChargeListData.reduce(function (pre, cur, index) {
                  if (_this2.riskChargeListData[index].payAmount !== '' || _this2.riskChargeListData[index].riskBasicAmount !== '') {
                    return cur.payAmount + cur.riskBasicAmount + pre;
                  }
                }, 0);
                _this2.riskPayAmount = sum;
                break;
              case '3':
                //按小时收费
                var lawyerChargeData = res.data.contractForEditData.caseCharges.lawyerChargeList;
                for (var index in lawyerChargeData) {
                  lawyerChargeData[index].chargeRatio = (Number(lawyerChargeData[index].chargeRatio) * 100).toFixed() + '%';
                }
                _this2.getUserPhoto(lawyerChargeData);
                _this2.lawyerChargeData = lawyerChargeData;
                break;
              default:
                break;
            }
          }
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'getUserPhoto',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(lawyerChargeData) {
        var index, http, avatarData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = regeneratorRuntime.keys(lawyerChargeData);

              case 1:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 10;
                  break;
                }

                index = _context.t1.value;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + lawyerChargeData[index].userId;
                _context.next = 6;
                return _ajax2.default.getAavatar(http);

              case 6:
                avatarData = _context.sent;

                this.userPhoto[index] = avatarData;
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

      function getUserPhoto(_x) {
        return _ref2.apply(this, arguments);
      }

      return getUserPhoto;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var payStyle = options.payStyle.split(',');
      this.getContractData(payStyle);
    }
  }]);

  return chargeinfo;
}(_wepy2.default.page);


Page(require('./../../../../../../npm/wepy/lib/wepy.js').default.$createPage(chargeinfo , 'pages/modules/mycase/caseDetail/cases/contractdetail/chargeinfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnZWluZm8uanMiXSwibmFtZXMiOlsiY2hhcmdlaW5mbyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW5kaWNhdG9yRG90cyIsImR1cmF0aW9uIiwiY2lyY3VsYXIiLCJjdXJyZW50IiwiY29udHJhY3RGb3JFZGl0RGF0YSIsImxhd3llckNoYXJnZURhdGEiLCJub3JtYWxDaGFyZ2VMaXN0RGF0YSIsInJpc2tDaGFyZ2VMaXN0RGF0YSIsInVzZXJJZCIsInVzZXJQaG90byIsIm5vcm1hbFBheUFtb3VudCIsInJpc2tQYXlBbW91bnQiLCJtZXRob2RzIiwiYmluZGNoYW5nZSIsImUiLCJkZXRhaWwiLCIkYXBwbHkiLCJ3YXRjaCIsInBheVN0eWxlIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImluZGV4IiwiY2FzZUNoYXJnZXMiLCJub3JtYWxDaGFyZ2VMaXN0IiwicGF5QW1vdW50IiwicGF5RGF0ZSIsInNwbGl0Iiwicmlza0NoYXJnZUxpc3QiLCJzdW0iLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJyaXNrQmFzaWNBbW91bnQiLCJsYXd5ZXJDaGFyZ2VMaXN0IiwiY2hhcmdlUmF0aW8iLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiZ2V0VXNlclBob3RvIiwiaHR0cCIsImFqYXgiLCJnZXRBYXZhdGFyIiwiYXZhdGFyRGF0YSIsIm9wdGlvbnMiLCJnZXRDb250cmFjdERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLHFCQUFlLElBRFY7QUFFTEMsZ0JBQVUsR0FGTDtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGVBQVMsQ0FKSjtBQUtMQywyQkFBcUIsRUFMaEI7QUFNTEMsd0JBQWtCLEVBTmI7QUFPTEMsNEJBQXNCLEVBUGpCO0FBUUxDLDBCQUFvQixFQVJmO0FB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RixxQkFBSzVCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFFSzZCLE8sRUFBUztBQUNkLFVBQUkzQixXQUFXMkIsUUFBUTNCLFFBQVIsQ0FBaUJXLEtBQWpCLENBQXVCLEdBQXZCLENBQWY7QUFDQSxXQUFLaUIsZUFBTCxDQUFxQjVCLFFBQXJCO0FBQ0Q7Ozs7RUFwRnFDNkIsZUFBS0MsSTs7a0JBQXhCbkQsVSIsImZpbGUiOiJjaGFyZ2VpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjaGFyZ2VpbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgZGF0YSA9IHtcbiAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgY2lyY3VsYXI6IHRydWUsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgY29udHJhY3RGb3JFZGl0RGF0YToge30sXG4gICAgICBsYXd5ZXJDaGFyZ2VEYXRhOiB7fSxcbiAgICAgIG5vcm1hbENoYXJnZUxpc3REYXRhOiB7fSxcbiAgICAgIHJpc2tDaGFyZ2VMaXN0RGF0YToge30sXG4gICAgICB1c2VySWQ6IFtdLFxuICAgICAgdXNlclBob3RvOiBbXSxcbiAgICAgIG5vcm1hbFBheUFtb3VudDogMCxcbiAgICAgIHJpc2tQYXlBbW91bnQ6IDAsXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZGNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3YXRjaCA9IHtcbiAgICB9XG4gICAgZ2V0Q29udHJhY3REYXRhKHBheVN0eWxlKSB7XG4gICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnY2FzZURldGFpbERhdGEnLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIHRoaXMuY29udHJhY3RGb3JFZGl0RGF0YSA9IHJlcy5kYXRhLmNvbnRyYWN0Rm9yRWRpdERhdGE7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gcGF5U3R5bGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocGF5U3R5bGVbaW5kZXhdKSB7XG4gICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgIC8vIOato+W4uOaUtui0uVxuICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsQ2hhcmdlTGlzdERhdGEgPVxuICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuY29udHJhY3RGb3JFZGl0RGF0YS5jYXNlQ2hhcmdlcy5ub3JtYWxDaGFyZ2VMaXN0O1xuICAgICAgICAgICAgICAgIC8vMS7liKTmlq3mmK/lkKbkvb/nlKjotKbljZVcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLm5vcm1hbENoYXJnZUxpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAvLzIu6K6h566X5oC76aKdXG4gICAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbFBheUFtb3VudCArPSB0aGlzLm5vcm1hbENoYXJnZUxpc3REYXRhW2luZGV4XS5wYXlBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAvLzMu5aSE55CG5pel5pyfXG4gICAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbENoYXJnZUxpc3REYXRhW2luZGV4XS5wYXlEYXRlID0gdGhpcy5ub3JtYWxDaGFyZ2VMaXN0RGF0YVtpbmRleF0ucGF5RGF0ZS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAvL+mjjumZqeaUtui0uVxuICAgICAgICAgICAgICAgIHRoaXMucmlza0NoYXJnZUxpc3REYXRhID1cbiAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLmNvbnRyYWN0Rm9yRWRpdERhdGEuY2FzZUNoYXJnZXMucmlza0NoYXJnZUxpc3Q7XG4gICAgICAgICAgICAgICAgLy/orqHnrpfmgLvpop1cbiAgICAgICAgICAgICAgICB2YXIgc3VtPSB0aGlzLnJpc2tDaGFyZ2VMaXN0RGF0YS5yZWR1Y2UoKHByZSxjdXIsaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgICBpZiggdGhpcy5yaXNrQ2hhcmdlTGlzdERhdGFbaW5kZXhdLnBheUFtb3VudCAhPT0gJycgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXNrQ2hhcmdlTGlzdERhdGFbaW5kZXhdLnJpc2tCYXNpY0Ftb3VudCAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihjdXIucGF5QW1vdW50K2N1ci5yaXNrQmFzaWNBbW91bnQrcHJlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sMClcbiAgICAgICAgICAgICAgICB0aGlzLnJpc2tQYXlBbW91bnQ9c3VtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAvL+aMieWwj+aXtuaUtui0uVxuICAgICAgICAgICAgICAgIHZhciBsYXd5ZXJDaGFyZ2VEYXRhID0gcmVzLmRhdGEuY29udHJhY3RGb3JFZGl0RGF0YS5jYXNlQ2hhcmdlcy5sYXd5ZXJDaGFyZ2VMaXN0O1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggaW4gbGF3eWVyQ2hhcmdlRGF0YSl7XG4gICAgICAgICAgICAgICAgICBsYXd5ZXJDaGFyZ2VEYXRhW2luZGV4XS5jaGFyZ2VSYXRpbz0gKE51bWJlcihsYXd5ZXJDaGFyZ2VEYXRhW2luZGV4XS5jaGFyZ2VSYXRpbykqMTAwKS50b0ZpeGVkKCkrJyUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJQaG90byhsYXd5ZXJDaGFyZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhd3llckNoYXJnZURhdGEgPWxhd3llckNoYXJnZURhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBnZXRVc2VyUGhvdG8obGF3eWVyQ2hhcmdlRGF0YSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggaW4gbGF3eWVyQ2hhcmdlRGF0YSkge1xuICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBsYXd5ZXJDaGFyZ2VEYXRhW2luZGV4XS51c2VySWQ7XG4gICAgICAgIHZhciBhdmF0YXJEYXRhID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xuICAgICAgICB0aGlzLnVzZXJQaG90b1tpbmRleF0gPSBhdmF0YXJEYXRhO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHZhciBwYXlTdHlsZSA9IG9wdGlvbnMucGF5U3R5bGUuc3BsaXQoJywnKTtcbiAgICAgIHRoaXMuZ2V0Q29udHJhY3REYXRhKHBheVN0eWxlKTtcbiAgICB9XG4gIH1cbiJdfQ==