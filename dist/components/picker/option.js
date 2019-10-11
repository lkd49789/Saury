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
        value: function onLoad() {}
    }]);

    return options;
}(_wepy2.default.component);

exports.default = options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwicHJvcHMiLCJ0eXBlIiwiT2JqZWN0IiwiaW5kZXgiLCJOdW1iZXIiLCJ0d29XYXkiLCJkYXRhIiwiaXNXYXJuaW5nIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ3YXJuaW5nIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2hCQyxLLEdBQVE7QUFDTEQscUJBQVM7QUFDTEUsc0JBQU1DO0FBREQsYUFESjtBQUlMQyxtQkFBTztBQUNIRixzQkFBTUcsTUFESDtBQUVIQyx3QkFBUTtBQUZMO0FBSkYsUyxRQVNUQyxJLEdBQU87QUFDSEMsdUJBQVU7QUFEUCxTLFFBR1BDLE8sR0FBVTtBQUNOQyw0QkFETSw0QkFDV0MsQ0FEWCxFQUNhO0FBQ2Ysb0JBQUdBLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxLQUFpQixDQUFwQixFQUFzQjtBQUNsQix5QkFBS1QsS0FBTCxHQUFXTyxFQUFFQyxNQUFGLENBQVNDLEtBQXBCO0FBQ0EseUJBQUtiLE9BQUwsQ0FBYWMsT0FBYixHQUFxQixLQUFyQjtBQUNIO0FBQ0QscUJBQUtDLE1BQUw7QUFDSDtBQVBLLFM7Ozs7O2lDQVNELENBQ1I7Ozs7RUF2QmdDQyxlQUFLQyxTOztrQkFBckJqQixPIiwiZmlsZSI6Im9wdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG9wdGlvbnMgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmRleDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzV2FybmluZzpmYWxzZSxcbiAgICAgICAgfTsgICBcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICAgaWYoZS5kZXRhaWwudmFsdWUhPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleD1lLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLndhcm5pbmc9ZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=