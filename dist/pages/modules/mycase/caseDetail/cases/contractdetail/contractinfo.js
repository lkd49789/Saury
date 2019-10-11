'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contractinfo = function (_wepy$page) {
  _inherits(contractinfo, _wepy$page);

  function contractinfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, contractinfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = contractinfo.__proto__ || Object.getPrototypeOf(contractinfo)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      contractinfoData: {},
      caseContractnewDate: '',
      isPayStyleText: false,
      payStyleList: []
    }, _this.methods = {
      tocintractdoc: function tocintractdoc() {
        wx.navigateTo({
          url: './contractdoc'
        });
      },
      tochargeinfo: function tochargeinfo() {
        wx.navigateTo({
          url: './chargeinfo?payStyle=' + this.contractinfoData.payStyle
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(contractinfo, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      wx.getStorage({
        key: 'caseDetailData',
        success: function success(res) {
          _this2.contractinfoData = res.data.caseData;
          if (res.data.caseData.payStyle.length > 0) {
            _this2.isPayStyleText = true;
            var payStyle = res.data.caseData.payStyle.split(',');
            for (var i in payStyle) {
              switch (payStyle[i]) {
                case '1':
                  _this2.payStyleList[i] = {
                    title: '正常收费：',
                    text: _this2.contractinfoData.payDetailQuotaText
                  };
                  break;
                case '2':
                  _this2.payStyleList[i] = {
                    title: '风险收费：',
                    text: _this2.contractinfoData.payDetailRiskText
                  };
                  break;
                case '3':
                  _this2.payStyleList[i] = {
                    title: '小时收费：',
                    text: _this2.contractinfoData.payDetailHourlyText
                  };
                  break;
              }
            }
          }
          if (res.data.caseData.caseContractList.length !== 0) {
            _this2.caseContractnewDate = res.data.caseData.caseContractList[res.data.caseData.caseContractList.length - 1].creationTime.split('T');
          }
          _this2.$apply();
        }
      });
      this.$apply();
    }
  }]);

  return contractinfo;
}(_wepy2.default.page);


Page(require('./../../../../../../npm/wepy/lib/wepy.js').default.$createPage(contractinfo , 'pages/modules/mycase/caseDetail/cases/contractdetail/contractinfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0aW5mby5qcyJdLCJuYW1lcyI6WyJjb250cmFjdGluZm8iLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbnRyYWN0aW5mb0RhdGEiLCJjYXNlQ29udHJhY3RuZXdEYXRlIiwiaXNQYXlTdHlsZVRleHQiLCJwYXlTdHlsZUxpc3QiLCJtZXRob2RzIiwidG9jaW50cmFjdGRvYyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvY2hhcmdlaW5mbyIsInBheVN0eWxlIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJjYXNlRGF0YSIsImxlbmd0aCIsInNwbGl0IiwiaSIsInRpdGxlIiwidGV4dCIsInBheURldGFpbFF1b3RhVGV4dCIsInBheURldGFpbFJpc2tUZXh0IiwicGF5RGV0YWlsSG91cmx5VGV4dCIsImNhc2VDb250cmFjdExpc3QiLCJjcmVhdGlvblRpbWUiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsd0JBQWtCLEVBRGI7QUFFTEMsMkJBQXFCLEVBRmhCO0FBR0xDLHNCQUFnQixLQUhYO0FBSUxDLG9CQUFjO0FBSlQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsbUJBRFEsMkJBQ1E7QUFDZEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0FMTztBQU1SQyxrQkFOUSwwQkFNTztBQUNiSCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSywyQkFBeUIsS0FBS1IsZ0JBQUwsQ0FBc0JVO0FBRHhDLFNBQWQ7QUFHRDtBQVZPLEs7Ozs7OzZCQVlEO0FBQUE7O0FBQ1BKLFNBQUdLLFVBQUgsQ0FBYztBQUNaQyxhQUFLLGdCQURPO0FBRVpDLGlCQUFTLHNCQUFPO0FBQ2QsaUJBQUtiLGdCQUFMLEdBQXdCYyxJQUFJZixJQUFKLENBQVNnQixRQUFqQztBQUNBLGNBQUlELElBQUlmLElBQUosQ0FBU2dCLFFBQVQsQ0FBa0JMLFFBQWxCLENBQTJCTSxNQUEzQixHQUFvQyxDQUF4QyxFQUEyQztBQUN6QyxtQkFBS2QsY0FBTCxHQUFzQixJQUF0QjtBQUNBLGdCQUFJUSxXQUFXSSxJQUFJZixJQUFKLENBQVNnQixRQUFULENBQWtCTCxRQUFsQixDQUEyQk8sS0FBM0IsQ0FBaUMsR0FBakMsQ0FBZjtBQUNBLGlCQUFLLElBQUlDLENBQVQsSUFBY1IsUUFBZCxFQUF3QjtBQUN0QixzQkFBUUEsU0FBU1EsQ0FBVCxDQUFSO0FBQ0UscUJBQUssR0FBTDtBQUNFLHlCQUFLZixZQUFMLENBQWtCZSxDQUFsQixJQUF1QjtBQUNyQkMsMkJBQU8sT0FEYztBQUVyQkMsMEJBQU0sT0FBS3BCLGdCQUFMLENBQXNCcUI7QUFGUCxtQkFBdkI7QUFJQTtBQUNGLHFCQUFLLEdBQUw7QUFDRSx5QkFBS2xCLFlBQUwsQ0FBa0JlLENBQWxCLElBQXVCO0FBQ3JCQywyQkFBTyxPQURjO0FBRXJCQywwQkFBTSxPQUFLcEIsZ0JBQUwsQ0FBc0JzQjtBQUZQLG1CQUF2QjtBQUlBO0FBQ0YscUJBQUssR0FBTDtBQUNFLHlCQUFLbkIsWUFBTCxDQUFrQmUsQ0FBbEIsSUFBdUI7QUFDckJDLDJCQUFPLE9BRGM7QUFFckJDLDBCQUFNLE9BQUtwQixnQkFBTCxDQUFzQnVCO0FBRlAsbUJBQXZCO0FBSUE7QUFsQko7QUFvQkQ7QUFDRjtBQUNELGNBQUlULElBQUlmLElBQUosQ0FBU2dCLFFBQVQsQ0FBa0JTLGdCQUFsQixDQUFtQ1IsTUFBbkMsS0FBOEMsQ0FBbEQsRUFBcUQ7QUFDbkQsbUJBQUtmLG1CQUFMLEdBQTJCYSxJQUFJZixJQUFKLENBQVNnQixRQUFULENBQWtCUyxnQkFBbEIsQ0FDekJWLElBQUlmLElBQUosQ0FBU2dCLFFBQVQsQ0FBa0JTLGdCQUFsQixDQUFtQ1IsTUFBbkMsR0FBNEMsQ0FEbkIsRUFFekJTLFlBRnlCLENBRVpSLEtBRlksQ0FFTixHQUZNLENBQTNCO0FBR0Q7QUFDRCxpQkFBS1MsTUFBTDtBQUNEO0FBcENXLE9BQWQ7QUFzQ0EsV0FBS0EsTUFBTDtBQUNEOzs7O0VBNUR1Q0MsZUFBS0MsSTs7a0JBQTFCL0IsWSIsImZpbGUiOiJjb250cmFjdGluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCB7XG4gICAgZm9ybWF0VGltZVN5bWJvbFxuICB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRyYWN0aW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29tcG9uZW50cyA9IHt9O1xuICAgIGRhdGEgPSB7XG4gICAgICBjb250cmFjdGluZm9EYXRhOiB7fSxcbiAgICAgIGNhc2VDb250cmFjdG5ld0RhdGU6ICcnLFxuICAgICAgaXNQYXlTdHlsZVRleHQ6IGZhbHNlLFxuICAgICAgcGF5U3R5bGVMaXN0OiBbXVxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvY2ludHJhY3Rkb2MoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vY29udHJhY3Rkb2MnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHRvY2hhcmdlaW5mbygpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9jaGFyZ2VpbmZvP3BheVN0eWxlPScrdGhpcy5jb250cmFjdGluZm9EYXRhLnBheVN0eWxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgb25Mb2FkKCkge1xuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ2Nhc2VEZXRhaWxEYXRhJyxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRyYWN0aW5mb0RhdGEgPSByZXMuZGF0YS5jYXNlRGF0YTtcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY2FzZURhdGEucGF5U3R5bGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pc1BheVN0eWxlVGV4dCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcGF5U3R5bGUgPSByZXMuZGF0YS5jYXNlRGF0YS5wYXlTdHlsZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBwYXlTdHlsZSkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHBheVN0eWxlW2ldKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICB0aGlzLnBheVN0eWxlTGlzdFtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmraPluLjmlLbotLnvvJonLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRyYWN0aW5mb0RhdGEucGF5RGV0YWlsUXVvdGFUZXh0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMucGF5U3R5bGVMaXN0W2ldID0ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mjjumZqeaUtui0ue+8micsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udHJhY3RpbmZvRGF0YS5wYXlEZXRhaWxSaXNrVGV4dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgICB0aGlzLnBheVN0eWxlTGlzdFtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflsI/ml7bmlLbotLnvvJonLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRyYWN0aW5mb0RhdGEucGF5RGV0YWlsSG91cmx5VGV4dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNhc2VEYXRhLmNhc2VDb250cmFjdExpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhc2VDb250cmFjdG5ld0RhdGUgPSByZXMuZGF0YS5jYXNlRGF0YS5jYXNlQ29udHJhY3RMaXN0W1xuICAgICAgICAgICAgICByZXMuZGF0YS5jYXNlRGF0YS5jYXNlQ29udHJhY3RMaXN0Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgIF0uY3JlYXRpb25UaW1lLnNwbGl0KCdUJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gIH1cbiJdfQ==