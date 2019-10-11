'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateTimePicker = require('./../utils/cofig/dateTimePicker.js');

var test = function (_wepy$component) {
    _inherits(test, _wepy$component);

    function test() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, test);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = test.__proto__ || Object.getPrototypeOf(test)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            timeOption: {
                type: Object
            }
        }, _this.data = {
            cur: true,
            show: false,
            dateTimeArray: null,
            dateTime: null
        }, _this.methods = {
            changeDateTime: function changeDateTime(e) {
                this.dateTime = e.detail.value;
                if (e.active) {
                    this.cur = false;
                    this.show = true;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(test, [{
        key: 'onLoad',
        value: function onLoad() {
            // 获取完整的年月日 时分秒，以及默认显示的数组
            var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
            this.dateTime = obj.dateTime;
            this.dateTimeArray = obj.dateTimeArray;
            this.$apply();
        }
    }]);

    return test;
}(_wepy2.default.component);

exports.default = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVPcHRpb24uanMiXSwibmFtZXMiOlsiZGF0ZVRpbWVQaWNrZXIiLCJyZXF1aXJlIiwidGVzdCIsInByb3BzIiwidGltZU9wdGlvbiIsInR5cGUiLCJPYmplY3QiLCJkYXRhIiwiY3VyIiwic2hvdyIsImRhdGVUaW1lQXJyYXkiLCJkYXRlVGltZSIsIm1ldGhvZHMiLCJjaGFuZ2VEYXRlVGltZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjdGl2ZSIsIm9iaiIsInN0YXJ0WWVhciIsImVuZFllYXIiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsaUJBQWlCQyxRQUFRLGtDQUFSLENBQXJCOztJQUNxQkMsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxLLEdBQVE7QUFDSkMsd0JBQVk7QUFDUkMsc0JBQU1DO0FBREU7QUFEUixTLFFBS1JDLEksR0FBTztBQUNIQyxpQkFBSyxJQURGO0FBRUhDLGtCQUFNLEtBRkg7QUFHSEMsMkJBQWUsSUFIWjtBQUlIQyxzQkFBVTtBQUpQLFMsUUFNUEMsTyxHQUFVO0FBQ05DLDBCQURNLDBCQUNTQyxDQURULEVBQ1k7QUFDZCxxQkFBS0gsUUFBTCxHQUFnQkcsRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNBLG9CQUFJRixFQUFFRyxNQUFOLEVBQWM7QUFDVix5QkFBS1QsR0FBTCxHQUFXLEtBQVg7QUFDQSx5QkFBS0MsSUFBTCxHQUFZLElBQVo7QUFDSDtBQUNKO0FBUEssUzs7Ozs7aUNBU0Q7QUFDTDtBQUNBLGdCQUFJUyxNQUFNbEIsZUFBZUEsY0FBZixDQUE4QixLQUFLTyxJQUFMLENBQVVZLFNBQXhDLEVBQW1ELEtBQUtaLElBQUwsQ0FBVWEsT0FBN0QsQ0FBVjtBQUNBLGlCQUFLVCxRQUFMLEdBQWdCTyxJQUFJUCxRQUFwQjtBQUNBLGlCQUFLRCxhQUFMLEdBQXFCUSxJQUFJUixhQUF6QjtBQUNBLGlCQUFLVyxNQUFMO0FBQ0g7Ozs7RUEzQjZCQyxlQUFLQyxTOztrQkFBbEJyQixJIiwiZmlsZSI6InRpbWVPcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgdmFyIGRhdGVUaW1lUGlja2VyID0gcmVxdWlyZSgnLi4vdXRpbHMvY29maWcvZGF0ZVRpbWVQaWNrZXIuanMnKVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgICAgdGltZU9wdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGN1cjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGVUaW1lQXJyYXk6IG51bGwsXHJcbiAgICAgICAgICAgIGRhdGVUaW1lOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgY2hhbmdlRGF0ZVRpbWUoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXIgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgLy8g6I635Y+W5a6M5pW055qE5bm05pyI5pelIOaXtuWIhuenku+8jOS7peWPium7mOiupOaYvuekuueahOaVsOe7hFxyXG4gICAgICAgICAgICB2YXIgb2JqID0gZGF0ZVRpbWVQaWNrZXIuZGF0ZVRpbWVQaWNrZXIodGhpcy5kYXRhLnN0YXJ0WWVhciwgdGhpcy5kYXRhLmVuZFllYXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lID0gb2JqLmRhdGVUaW1lXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBcnJheSA9IG9iai5kYXRlVGltZUFycmF5XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==