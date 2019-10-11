'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var conflictinterest = function (_wepy$page) {
  _inherits(conflictinterest, _wepy$page);

  function conflictinterest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, conflictinterest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = conflictinterest.__proto__ || Object.getPrototypeOf(conflictinterest)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      caseClientRelationList: {}
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(conflictinterest, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      wx.getStorage({
        key: 'caseDetailData',
        success: function success(res) {
          // console.log(res.data.caseData);
          _this2.caseClientRelationList = res.data.caseData.caseClientRelationList[option.index];
        }
      });
      this.$apply();
    }
  }]);

  return conflictinterest;
}(_wepy2.default.page);


Page(require('./../../../../../../npm/wepy/lib/wepy.js').default.$createPage(conflictinterest , 'pages/modules/mycase/caseDetail/cases/conflictinterest/conflictinterest-detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0aW50ZXJlc3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbImNvbmZsaWN0aW50ZXJlc3QiLCJkYXRhIiwiY2FzZUNsaWVudFJlbGF0aW9uTGlzdCIsIm1ldGhvZHMiLCJvcHRpb24iLCJ3eCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiY2FzZURhdGEiLCJpbmRleCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxnQjs7Ozs7Ozs7Ozs7Ozs7ME1BQ25CQyxJLEdBQU87QUFDTEMsOEJBQXdCO0FBRG5CLEssUUFHUEMsTyxHQUFVLEU7Ozs7OzJCQUNIQyxNLEVBQVE7QUFBQTs7QUFDYkMsU0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGFBQUssZ0JBRE87QUFFWkMsaUJBQVMsc0JBQU87QUFDZDtBQUNBLGlCQUFLTixzQkFBTCxHQUNFTyxJQUFJUixJQUFKLENBQVNTLFFBQVQsQ0FBa0JSLHNCQUFsQixDQUF5Q0UsT0FBT08sS0FBaEQsQ0FERjtBQUVEO0FBTlcsT0FBZDtBQVFBLFdBQUtDLE1BQUw7QUFDRDs7OztFQWYyQ0MsZUFBS0MsSTs7a0JBQTlCZCxnQiIsImZpbGUiOiJjb25mbGljdGludGVyZXN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb25mbGljdGludGVyZXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgZGF0YSA9IHtcbiAgICBjYXNlQ2xpZW50UmVsYXRpb25MaXN0OiB7fVxuICB9O1xuICBtZXRob2RzID0ge307XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2Nhc2VEZXRhaWxEYXRhJyxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLmNhc2VEYXRhKTtcbiAgICAgICAgdGhpcy5jYXNlQ2xpZW50UmVsYXRpb25MaXN0ID1cbiAgICAgICAgICByZXMuZGF0YS5jYXNlRGF0YS5jYXNlQ2xpZW50UmVsYXRpb25MaXN0W29wdGlvbi5pbmRleF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxufVxuIl19