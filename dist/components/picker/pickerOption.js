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

var options = function (_wepy$component) {
    _inherits(options, _wepy$component);

    function options() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, options);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = options.__proto__ || Object.getPrototypeOf(options)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            options: {
                type: Object
            },
            index: {
                type: Number,
                twoWay: true
            }
        }, _this.data = {
            isWarning: false
        }, _this.methods = {
            bindPickerChange: function bindPickerChange(e) {
                if (e.detail.value !== 0) {
                    this.index = e.detail.value;
                    this.options.warning = false;
                }
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(options, [{
        key: 'onLoad',
        value: function onLoad() {
            this.options.disabled = this.options.disabled || false;
        }
    }]);

    return options;
}(_wepy2.default.component);

exports.default = options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlck9wdGlvbi5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwicHJvcHMiLCJ0eXBlIiwiT2JqZWN0IiwiaW5kZXgiLCJOdW1iZXIiLCJ0d29XYXkiLCJkYXRhIiwiaXNXYXJuaW5nIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ3YXJuaW5nIiwiJGFwcGx5IiwiZGlzYWJsZWQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDaEJDLEssR0FBUTtBQUNMRCxxQkFBUztBQUNMRSxzQkFBTUM7QUFERCxhQURKO0FBSUxDLG1CQUFPO0FBQ0hGLHNCQUFNRyxNQURIO0FBRUhDLHdCQUFRO0FBRkw7QUFKRixTLFFBU1RDLEksR0FBTztBQUNIQyx1QkFBVTtBQURQLFMsUUFHUEMsTyxHQUFVO0FBQ05DLDRCQURNLDRCQUNXQyxDQURYLEVBQ2E7QUFDZixvQkFBR0EsRUFBRUMsTUFBRixDQUFTQyxLQUFULEtBQWlCLENBQXBCLEVBQXNCO0FBQ2xCLHlCQUFLVCxLQUFMLEdBQVdPLEVBQUVDLE1BQUYsQ0FBU0MsS0FBcEI7QUFDQSx5QkFBS2IsT0FBTCxDQUFhYyxPQUFiLEdBQXFCLEtBQXJCO0FBQ0g7QUFDRCxxQkFBS0MsTUFBTDtBQUNIO0FBUEssUzs7Ozs7aUNBU0Q7QUFDSixpQkFBS2YsT0FBTCxDQUFhZ0IsUUFBYixHQUFzQixLQUFLaEIsT0FBTCxDQUFhZ0IsUUFBYixJQUF1QixLQUE3QztBQUNKOzs7O0VBeEJnQ0MsZUFBS0MsUzs7a0JBQXJCbEIsTyIsImZpbGUiOiJwaWNrZXJPcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBvcHRpb25zIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc1dhcm5pbmc6ZmFsc2UsXG4gICAgICAgIH07ICAgXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kUGlja2VyQ2hhbmdlKGUpe1xuICAgICAgICAgICAgICAgIGlmKGUuZGV0YWlsLnZhbHVlIT09MCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXg9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy53YXJuaW5nPWZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZD10aGlzLm9wdGlvbnMuZGlzYWJsZWR8fGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuIl19