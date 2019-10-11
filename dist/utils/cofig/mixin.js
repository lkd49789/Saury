'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testMixin = function (_wepy$mixin) {
  _inherits(testMixin, _wepy$mixin);

  function testMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, testMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = testMixin.__proto__ || Object.getPrototypeOf(testMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      placeHolderImageIndex_0: 0,
      placeHolderImageIndex_1: 0,
      placeHolderImageIndex_2: 0,
      placeHolderImageIndex_3: 0,
      placeHolder: {
        placeHolderImageIndex: 0,
        placeHolderShow: false
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(testMixin, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      if (!this.$parent.global.netWorkString) {
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_2;
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_3;
        this.placeHolder.placeHolderShow = true;
        console.log('网络错误');
      } else {
        this.placeHolder.placeHolderShow = false;
      }
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // if (!this.$parent.global.netWorkString) {
      //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
      //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
      //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_2;
      //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_3;
      //   this.placeHolder.placeHolderShow = true;
      //   console.log('网络错误')
      // } else { 
      //   this.placeHolder.placeHolderShow = false;
      // }
      // this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      if (!this.$parent.global.netWorkString) {
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_2;
        this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_3;
        this.placeHolder.placeHolderShow = true;
        console.log('网络错误');
      } else {
        this.placeHolder.placeHolderShow = false;
      }
    }
  }]);

  return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGluLmpzIl0sIm5hbWVzIjpbInRlc3RNaXhpbiIsImRhdGEiLCJwbGFjZUhvbGRlckltYWdlSW5kZXhfMCIsInBsYWNlSG9sZGVySW1hZ2VJbmRleF8xIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4XzIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXhfMyIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93IiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5Iiwid2VweSIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQywrQkFBd0IsQ0FEbkI7QUFFTEMsK0JBQXdCLENBRm5CO0FBR0xDLCtCQUF3QixDQUhuQjtBQUlMQywrQkFBd0IsQ0FKbkI7QUFLTEMsbUJBQWE7QUFDWEMsK0JBQXNCLENBRFg7QUFFWEMseUJBQWlCO0FBRk47QUFMUixLOzs7Ozt3Q0FVYTtBQUNsQixVQUFJLENBQUMsS0FBS0MsT0FBTCxDQUFhQyxNQUFiLENBQW9CQyxhQUF6QixFQUF3QztBQUN0QyxhQUFLTCxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsS0FBS0wsdUJBQTlDO0FBQ0EsYUFBS0ksV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLEtBQUtKLHVCQUE5QztBQUNBLGFBQUtHLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxLQUFLSCx1QkFBOUM7QUFDQSxhQUFLRSxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsS0FBS0YsdUJBQTlDO0FBQ0EsYUFBS0MsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsYUFBS1AsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsS0FBbkM7QUFDRDtBQUNELFdBQUtNLE1BQUw7QUFDRDs7OzZCQUNRO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJLENBQUMsS0FBS0wsT0FBTCxDQUFhQyxNQUFiLENBQW9CQyxhQUF6QixFQUF3QztBQUN0QyxhQUFLTCxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsS0FBS0wsdUJBQTlDO0FBQ0EsYUFBS0ksV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLEtBQUtKLHVCQUE5QztBQUNBLGFBQUtHLFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxLQUFLSCx1QkFBOUM7QUFDQSxhQUFLRSxXQUFMLENBQWlCQyxxQkFBakIsR0FBeUMsS0FBS0YsdUJBQTlDO0FBQ0EsYUFBS0MsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsSUFBbkM7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsYUFBS1AsV0FBTCxDQUFpQkUsZUFBakIsR0FBbUMsS0FBbkM7QUFDRDtBQUNGOzs7O0VBaERvQ08sZUFBS0MsSzs7a0JBQXZCaEIsUyIsImZpbGUiOiJtaXhpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0TWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgZGF0YSA9IHtcbiAgICBwbGFjZUhvbGRlckltYWdlSW5kZXhfMDowLFxuICAgIHBsYWNlSG9sZGVySW1hZ2VJbmRleF8xOjAsXG4gICAgcGxhY2VIb2xkZXJJbWFnZUluZGV4XzI6MCxcbiAgICBwbGFjZUhvbGRlckltYWdlSW5kZXhfMzowLFxuICAgIHBsYWNlSG9sZGVyOiB7XG4gICAgICBwbGFjZUhvbGRlckltYWdlSW5kZXg6MCxcbiAgICAgIHBsYWNlSG9sZGVyU2hvdzogZmFsc2UsXG4gICAgfSAgXG4gIH07XG4gIG9uUHVsbERvd25SZWZyZXNoKCkgeyBcbiAgICBpZiAoIXRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8wO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8xO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8yO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8zO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coJ+e9kee7nOmUmeivrycpXG4gICAgfSBlbHNlIHsgXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLiRhcHBseSgpO1xuICB9O1xuICBvbkxvYWQoKSB7IFxuICAgIC8vIGlmICghdGhpcy4kcGFyZW50Lmdsb2JhbC5uZXRXb3JrU3RyaW5nKSB7XG4gICAgLy8gICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzA7XG4gICAgLy8gICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzE7XG4gICAgLy8gICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzI7XG4gICAgLy8gICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzM7XG4gICAgLy8gICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgLy8gICBjb25zb2xlLmxvZygn572R57uc6ZSZ6K+vJylcbiAgICAvLyB9IGVsc2UgeyBcbiAgICAvLyAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XG4gICAgLy8gfVxuICAgIC8vIHRoaXMuJGFwcGx5KCk7XG4gIH1cbiAgb25TaG93KCkgeyBcbiAgICBpZiAoIXRoaXMuJHBhcmVudC5nbG9iYWwubmV0V29ya1N0cmluZykge1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8wO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8xO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8yO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8zO1xuICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coJ+e9kee7nOmUmeivrycpXG4gICAgfSBlbHNlIHsgXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19