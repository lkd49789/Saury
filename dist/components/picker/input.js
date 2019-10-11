"use strict";

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

var input = function (_wepy$component) {
    _inherits(input, _wepy$component);

    function input() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, input);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = input.__proto__ || Object.getPrototypeOf(input)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            inputChecked: false,
            isShow: false
        }, _this.props = {
            input: {
                type: Object
            },
            inputValue: {
                type: String,
                twoWay: true
            }
        }, _this.methods = {
            bindinput: function bindinput(e) {
                var value = e.detail.value;
                this.input.warning = value ? false : true;
                this.inputValue = value;
                this.$apply();
            },
            bindfocus: function bindfocus() {
                this.inputChecked = !this.inputChecked;
                this.$apply();
            },
            bindblur: function bindblur(e) {
                this.inputChecked = !this.inputChecked;
                if (this.isWarning && e.detail.value == "") {
                    this.input.warning = true;
                }
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(input, [{
        key: "onLoad",
        value: function onLoad() {
            this.isShow = this.input.options || false;
            this.input.disabled = this.input.disabled || false;
            this.$apply();
        }
    }]);

    return input;
}(_wepy2.default.component);

exports.default = input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbImlucHV0IiwiZGF0YSIsImlucHV0Q2hlY2tlZCIsImlzU2hvdyIsInByb3BzIiwidHlwZSIsIk9iamVjdCIsImlucHV0VmFsdWUiLCJTdHJpbmciLCJ0d29XYXkiLCJtZXRob2RzIiwiYmluZGlucHV0IiwiZSIsInZhbHVlIiwiZGV0YWlsIiwid2FybmluZyIsIiRhcHBseSIsImJpbmRmb2N1cyIsImJpbmRibHVyIiwiaXNXYXJuaW5nIiwib3B0aW9ucyIsImRpc2FibGVkIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsMEJBQWMsS0FEWDtBQUVIQyxvQkFBTztBQUZKLFMsUUFJUEMsSyxHQUFRO0FBQ0pKLG1CQUFPO0FBQ0hLLHNCQUFNQztBQURILGFBREg7QUFJSkMsd0JBQVk7QUFDUkYsc0JBQU1HLE1BREU7QUFFUkMsd0JBQVE7QUFGQTtBQUpSLFMsUUFTUkMsTyxHQUFVO0FBQ05DLHFCQURNLHFCQUNJQyxDQURKLEVBQ087QUFDVCxvQkFBSUMsUUFBT0QsRUFBRUUsTUFBRixDQUFTRCxLQUFwQjtBQUNBLHFCQUFLYixLQUFMLENBQVdlLE9BQVgsR0FBbUJGLFFBQU0sS0FBTixHQUFZLElBQS9CO0FBQ0EscUJBQUtOLFVBQUwsR0FBa0JNLEtBQWxCO0FBQ0EscUJBQUtHLE1BQUw7QUFDSCxhQU5LO0FBT05DLHFCQVBNLHVCQU9NO0FBQ1IscUJBQUtmLFlBQUwsR0FBb0IsQ0FBQyxLQUFLQSxZQUExQjtBQUNBLHFCQUFLYyxNQUFMO0FBQ0gsYUFWSztBQVdORSxvQkFYTSxvQkFXR04sQ0FYSCxFQVdNO0FBQ1IscUJBQUtWLFlBQUwsR0FBb0IsQ0FBQyxLQUFLQSxZQUExQjtBQUNBLG9CQUFHLEtBQUtpQixTQUFMLElBQWdCUCxFQUFFRSxNQUFGLENBQVNELEtBQVQsSUFBZ0IsRUFBbkMsRUFBc0M7QUFDbEMseUJBQUtiLEtBQUwsQ0FBV2UsT0FBWCxHQUFtQixJQUFuQjtBQUNIO0FBQ0QscUJBQUtDLE1BQUw7QUFDSDtBQWpCSyxTOzs7OztpQ0FtQkQ7QUFDTCxpQkFBS2IsTUFBTCxHQUFZLEtBQUtILEtBQUwsQ0FBV29CLE9BQVgsSUFBb0IsS0FBaEM7QUFDQSxpQkFBS3BCLEtBQUwsQ0FBV3FCLFFBQVgsR0FBb0IsS0FBS3JCLEtBQUwsQ0FBV3FCLFFBQVgsSUFBcUIsS0FBekM7QUFDQSxpQkFBS0wsTUFBTDtBQUNIOzs7O0VBckM4Qk0sZUFBS0MsUzs7a0JBQW5CdkIsSyIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGlucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaW5wdXRDaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2hvdzpmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kaW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZT0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC53YXJuaW5nPXZhbHVlP2ZhbHNlOnRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRmb2N1cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2hlY2tlZCA9ICF0aGlzLmlucHV0Q2hlY2tlZFxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZGJsdXIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRDaGVja2VkID0gIXRoaXMuaW5wdXRDaGVja2VkXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc1dhcm5pbmcmJmUuZGV0YWlsLnZhbHVlPT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC53YXJuaW5nPXRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTaG93PXRoaXMuaW5wdXQub3B0aW9uc3x8ZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc2FibGVkPXRoaXMuaW5wdXQuZGlzYWJsZWR8fGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==