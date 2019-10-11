'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import navbar from '../../../components/navbar';
var caseintroduce = function (_wepy$page) {
  _inherits(caseintroduce, _wepy$page);

  function caseintroduce() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, caseintroduce);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseintroduce.__proto__ || Object.getPrototypeOf(caseintroduce)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      description: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(caseintroduce, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      wx.getStorage({
        key: 'caseDetailData',
        success: function success(res) {
          _this2.description = res.data.caseData.description;
        }
      });
    }
  }]);

  return caseintroduce;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(caseintroduce , 'pages/modules/mycase/caseDetail/cases/caseintroduce'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VpbnRyb2R1Y2UuanMiXSwibmFtZXMiOlsiY2FzZWludHJvZHVjZSIsImNvbXBvbmVudHMiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJtZXRob2RzIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImNhc2VEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxtQkFBYTtBQURSLEssUUFHUEMsTyxHQUFVLEU7Ozs7OzZCQUNEO0FBQUE7O0FBQ1BDLFNBQUdDLFVBQUgsQ0FBYztBQUNaQyxhQUFLLGdCQURPO0FBRVpDLGlCQUFTLHNCQUFPO0FBQ2QsaUJBQUtMLFdBQUwsR0FBbUJNLElBQUlQLElBQUosQ0FBU1EsUUFBVCxDQUFrQlAsV0FBckM7QUFDRDtBQUpXLE9BQWQ7QUFNRDs7OztFQWJ3Q1EsZUFBS0MsSTs7a0JBQTNCWixhIiwiZmlsZSI6ImNhc2VpbnRyb2R1Y2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4vLyBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhc2VpbnRyb2R1Y2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgZGVzY3JpcHRpb246ICcnXG4gIH07XG4gIG1ldGhvZHMgPSB7fTtcbiAgb25Mb2FkKCkge1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnY2FzZURldGFpbERhdGEnLFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHJlcy5kYXRhLmNhc2VEYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=