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

var cascadePicker = function (_wepy$component) {
    _inherits(cascadePicker, _wepy$component);

    function cascadePicker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, cascadePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cascadePicker.__proto__ || Object.getPrototypeOf(cascadePicker)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            pickerData: {
                type: Object
            },
            pickerIndex: {
                type: Array
            }
        }, _this.data = {
            pickerData: '请选择'
        }, _this.components = {}, _this.methods = {
            changePickerDataColumn: function changePickerDataColumn(e) {
                console.log(e);
                console.log(e.detail.column, e.detail.value);
                var nextRegion = this.RegionData[e.detail.column][e.detail.value];
                console.log(nextRegion);
                this.GetRegion(e.detail.column + 1, nextRegion.depth + 1, nextRegion.id);
            },
            changePickerData: function changePickerData(e) {
                var pickerData = [];
                for (var index in e.detail.value) {
                    pickerData[index] = this.pickerDataArray[index][e.detail.value[index]];
                }
                this.pickerData = pickerData.join('/');
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(cascadePicker, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return cascadePicker;
}(_wepy2.default.component);

exports.default = cascadePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2NhZGVQaWNrZXIuanMiXSwibmFtZXMiOlsiY2FzY2FkZVBpY2tlciIsInByb3BzIiwicGlja2VyRGF0YSIsInR5cGUiLCJPYmplY3QiLCJwaWNrZXJJbmRleCIsIkFycmF5IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiY2hhbmdlUGlja2VyRGF0YUNvbHVtbiIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29sdW1uIiwidmFsdWUiLCJuZXh0UmVnaW9uIiwiUmVnaW9uRGF0YSIsIkdldFJlZ2lvbiIsImRlcHRoIiwiaWQiLCJjaGFuZ2VQaWNrZXJEYXRhIiwiaW5kZXgiLCJwaWNrZXJEYXRhQXJyYXkiLCJqb2luIiwiJGFwcGx5IiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFZO0FBQ1JDLHNCQUFNQztBQURFLGFBRFI7QUFJSkMseUJBQVk7QUFDUkYsc0JBQUtHO0FBREc7QUFKUixTLFFBUVJDLEksR0FBTztBQUNITCx3QkFBWTtBQURULFMsUUFHUE0sVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ05DLGtDQURNLGtDQUNpQkMsQ0FEakIsRUFDb0I7QUFDdEJDLHdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBRixDQUFTQyxNQUFyQixFQUE2QkosRUFBRUcsTUFBRixDQUFTRSxLQUF0QztBQUNBLG9CQUFJQyxhQUFhLEtBQUtDLFVBQUwsQ0FBZ0JQLEVBQUVHLE1BQUYsQ0FBU0MsTUFBekIsRUFBaUNKLEVBQUVHLE1BQUYsQ0FBU0UsS0FBMUMsQ0FBakI7QUFDQUosd0JBQVFDLEdBQVIsQ0FBWUksVUFBWjtBQUNBLHFCQUFLRSxTQUFMLENBQWVSLEVBQUVHLE1BQUYsQ0FBU0MsTUFBVCxHQUFrQixDQUFqQyxFQUFvQ0UsV0FBV0csS0FBWCxHQUFtQixDQUF2RCxFQUEwREgsV0FBV0ksRUFBckU7QUFDSCxhQVBLO0FBUU5DLDRCQVJNLDRCQVFXWCxDQVJYLEVBUWM7QUFDaEIsb0JBQUlULGFBQWEsRUFBakI7QUFDQSxxQkFBSyxJQUFJcUIsS0FBVCxJQUFrQlosRUFBRUcsTUFBRixDQUFTRSxLQUEzQixFQUFrQztBQUM5QmQsK0JBQVdxQixLQUFYLElBQW9CLEtBQUtDLGVBQUwsQ0FBcUJELEtBQXJCLEVBQTRCWixFQUFFRyxNQUFGLENBQVNFLEtBQVQsQ0FBZU8sS0FBZixDQUE1QixDQUFwQjtBQUNIO0FBQ0QscUJBQUtyQixVQUFMLEdBQWtCQSxXQUFXdUIsSUFBWCxDQUFnQixHQUFoQixDQUFsQjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0g7QUFmSyxTLFFBaUJWQyxNLEdBQVMsRSxRQUNUQyxLLEdBQVEsRSxRQUNSQyxRLEdBQVcsRTs7Ozs7aUNBQ0YsQ0FBRTs7O2lDQUNGLENBQUU7Ozs7RUFsQzRCQyxlQUFLQyxTOztrQkFBM0IvQixhIiwiZmlsZSI6ImNhc2NhZGVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXNjYWRlUGlja2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIHBpY2tlckRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaWNrZXJJbmRleDp7XG4gICAgICAgICAgICAgICAgdHlwZTpBcnJheVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcGlja2VyRGF0YTogJ+ivt+mAieaLqScsXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoYW5nZVBpY2tlckRhdGFDb2x1bW4oZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLmNvbHVtbiwgZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0UmVnaW9uID0gdGhpcy5SZWdpb25EYXRhW2UuZGV0YWlsLmNvbHVtbl1bZS5kZXRhaWwudmFsdWVdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5leHRSZWdpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0UmVnaW9uKGUuZGV0YWlsLmNvbHVtbiArIDEsIG5leHRSZWdpb24uZGVwdGggKyAxLCBuZXh0UmVnaW9uLmlkKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZVBpY2tlckRhdGEoZSkge1xuICAgICAgICAgICAgICAgIHZhciBwaWNrZXJEYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZS5kZXRhaWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyRGF0YVtpbmRleF0gPSB0aGlzLnBpY2tlckRhdGFBcnJheVtpbmRleF1bZS5kZXRhaWwudmFsdWVbaW5kZXhdXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlckRhdGEgPSBwaWNrZXJEYXRhLmpvaW4oJy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge307XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIG9uTG9hZCgpIHt9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=