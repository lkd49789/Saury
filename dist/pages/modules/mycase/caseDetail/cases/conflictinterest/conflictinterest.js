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

// import navbar from '../../../components/navbar';
var conflictinterest = function (_wepy$page) {
  _inherits(conflictinterest, _wepy$page);

  function conflictinterest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, conflictinterest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = conflictinterest.__proto__ || Object.getPrototypeOf(conflictinterest)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      animationData: [],
      caseClientRelationList: {}
    }, _this.methods = {
      // chooseSize() {
      //   var animation = wepy.createAnimation({
      //     // 动画持续时间
      //     duration: 200,
      //     // 定义动画效果，当前是匀速
      //     timingFunction: 'linear'
      //   });
      //   animation.translateY(196).step();
      //   this.animationData = animation.export();
      //   this.chooseSize = !this.chooseSize;
      //   this.isScroll = false;
      //   setTimeout(() => {
      //     animation.translateY(0).step();
      //     this.setData({
      //       animationData: animation.export()
      //     });
      //   }, 100);
      // },
      // close() {
      //   var animation = wepy.createAnimation({
      //     // 动画持续时间
      //     duration: 200,
      //     // 定义动画效果，当前是匀速
      //     timingFunction: 'linear'
      //   });
      //   animation.translateY(196).step();
      //   this.animationData = animation.export();
      //   this.isScroll = true;
      //   this.chooseSize = !this.chooseSize;
      // },
      toDetail: function toDetail(index) {
        // console.log(e);
        // for (var i in this.caseClientRelationList) {
        wx.navigateTo({
          url: './conflictinterest-detail?index=' + index
        });
        this.$apply();
        // }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(conflictinterest, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      wx.getStorage({
        key: 'caseDetailData',
        success: function success(res) {
          console.log(res.data.caseData.caseClientRelationList);
          _this2.caseClientRelationList = res.data.caseData.caseClientRelationList;
        }
      });
      this.$apply();
    }
  }]);

  return conflictinterest;
}(_wepy2.default.page);


Page(require('./../../../../../../npm/wepy/lib/wepy.js').default.$createPage(conflictinterest , 'pages/modules/mycase/caseDetail/cases/conflictinterest/conflictinterest'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0aW50ZXJlc3QuanMiXSwibmFtZXMiOlsiY29uZmxpY3RpbnRlcmVzdCIsImNvbXBvbmVudHMiLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsImNhc2VDbGllbnRSZWxhdGlvbkxpc3QiLCJtZXRob2RzIiwidG9EZXRhaWwiLCJpbmRleCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIiRhcHBseSIsIm9wdGlvbnMiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJjYXNlRGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDbkJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLDhCQUF3QjtBQUZuQixLLFFBSVBDLE8sR0FBVTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxjQS9CUSxvQkErQkNDLEtBL0JELEVBK0JRO0FBQ2Q7QUFDQTtBQUNBQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyxxQ0FBcUNIO0FBRDlCLFNBQWQ7QUFHQSxhQUFLSSxNQUFMO0FBQ0E7QUFDRDtBQXZDTyxLOzs7OzsyQkF5Q0hDLE8sRUFBUztBQUFBOztBQUNkSixTQUFHSyxVQUFILENBQWM7QUFDWkMsYUFBSyxnQkFETztBQUVaQyxpQkFBUyxzQkFBTztBQUNkQyxrQkFBUUMsR0FBUixDQUFZQyxJQUFJaEIsSUFBSixDQUFTaUIsUUFBVCxDQUFrQmYsc0JBQTlCO0FBQ0EsaUJBQUtBLHNCQUFMLEdBQThCYyxJQUFJaEIsSUFBSixDQUFTaUIsUUFBVCxDQUFrQmYsc0JBQWhEO0FBQ0Q7QUFMVyxPQUFkO0FBT0EsV0FBS08sTUFBTDtBQUNEOzs7O0VBeEQyQ1MsZUFBS0MsSTs7a0JBQTlCckIsZ0IiLCJmaWxlIjoiY29uZmxpY3RpbnRlcmVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4vLyBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbmZsaWN0aW50ZXJlc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgYW5pbWF0aW9uRGF0YTogW10sXG4gICAgY2FzZUNsaWVudFJlbGF0aW9uTGlzdDoge31cbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICAvLyBjaG9vc2VTaXplKCkge1xuICAgIC8vICAgdmFyIGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAvLyAgICAgLy8g5Yqo55S75oyB57ut5pe26Ze0XG4gICAgLy8gICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgLy8gICAgIC8vIOWumuS5ieWKqOeUu+aViOaenO+8jOW9k+WJjeaYr+WMgOmAn1xuICAgIC8vICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcidcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMTk2KS5zdGVwKCk7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KCk7XG4gICAgLy8gICB0aGlzLmNob29zZVNpemUgPSAhdGhpcy5jaG9vc2VTaXplO1xuICAgIC8vICAgdGhpcy5pc1Njcm9sbCA9IGZhbHNlO1xuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKTtcbiAgICAvLyAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAvLyAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9LCAxMDApO1xuICAgIC8vIH0sXG4gICAgLy8gY2xvc2UoKSB7XG4gICAgLy8gICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgIC8vICAgICAvLyDliqjnlLvmjIHnu63ml7bpl7RcbiAgICAvLyAgICAgZHVyYXRpb246IDIwMCxcbiAgICAvLyAgICAgLy8g5a6a5LmJ5Yqo55S75pWI5p6c77yM5b2T5YmN5piv5YyA6YCfXG4gICAgLy8gICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgIC8vICAgfSk7XG4gICAgLy8gICBhbmltYXRpb24udHJhbnNsYXRlWSgxOTYpLnN0ZXAoKTtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKTtcbiAgICAvLyAgIHRoaXMuaXNTY3JvbGwgPSB0cnVlO1xuICAgIC8vICAgdGhpcy5jaG9vc2VTaXplID0gIXRoaXMuY2hvb3NlU2l6ZTtcbiAgICAvLyB9LFxuICAgIHRvRGV0YWlsKGluZGV4KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgIC8vIGZvciAodmFyIGkgaW4gdGhpcy5jYXNlQ2xpZW50UmVsYXRpb25MaXN0KSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jb25mbGljdGludGVyZXN0LWRldGFpbD9pbmRleD0nICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdjYXNlRGV0YWlsRGF0YScsXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5jYXNlRGF0YS5jYXNlQ2xpZW50UmVsYXRpb25MaXN0KTtcbiAgICAgICAgdGhpcy5jYXNlQ2xpZW50UmVsYXRpb25MaXN0ID0gcmVzLmRhdGEuY2FzZURhdGEuY2FzZUNsaWVudFJlbGF0aW9uTGlzdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG59XG4iXX0=