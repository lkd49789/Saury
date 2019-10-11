'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateTimePicker = require('./../../utils/cofig/dateTimePicker.js');

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
            timeObj: {
                type: Object
            },
            dateData: {
                type: String,
                twoWay: true
            }
        }, _this.data = {
            dateTimeArray: null,
            dateTime: null
        }, _this.methods = {
            changeDateTimeColumn: function changeDateTimeColumn(e) {
                var arr = this.dateTime,
                    dateArr = this.dateTimeArray;
                arr[e.detail.column] = e.detail.value;
                dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
                this.dateTimeArray = dateArr;
                this.dateTime = arr;
                this.$apply();
            },
            changeDateTime: function changeDateTime(e) {
                this.dateTime = e.detail.value;
                this.dateData = [this.dateTimeArray[0][this.dateTime[0]], this.dateTimeArray[1][this.dateTime[1]], this.dateTimeArray[2][this.dateTime[2]], this.dateTimeArray[3][this.dateTime[3]], this.dateTimeArray[4][this.dateTime[4]], this.dateTimeArray[5][this.dateTime[5]]];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(test, [{
        key: 'onLoad',
        value: function onLoad() {
            // 获取完整的年月日 时分秒，以及默认显示的数组
            var nowDate = this.timeObj.time;
            var date = (0, _api.formatTime)(nowDate);
            var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear, date);
            this.dateTime = obj.dateTime;
            this.dateTimeArray = obj.dateTimeArray;
            this.dateData = [this.dateTimeArray[0][this.dateTime[0]], this.dateTimeArray[1][this.dateTime[1]], this.dateTimeArray[2][this.dateTime[2]], this.dateTimeArray[3][this.dateTime[3]], this.dateTimeArray[4][this.dateTime[4]], this.dateTimeArray[5][this.dateTime[5]]];
            this.$apply();
        }
    }]);

    return test;
}(_wepy2.default.component);

exports.default = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vd0RhdGVUaW1lUGlja2VyLmpzIl0sIm5hbWVzIjpbImRhdGVUaW1lUGlja2VyIiwicmVxdWlyZSIsInRlc3QiLCJwcm9wcyIsInRpbWVPYmoiLCJ0eXBlIiwiT2JqZWN0IiwiZGF0ZURhdGEiLCJTdHJpbmciLCJ0d29XYXkiLCJkYXRhIiwiZGF0ZVRpbWVBcnJheSIsImRhdGVUaW1lIiwibWV0aG9kcyIsImNoYW5nZURhdGVUaW1lQ29sdW1uIiwiZSIsImFyciIsImRhdGVBcnIiLCJkZXRhaWwiLCJjb2x1bW4iLCJ2YWx1ZSIsImdldE1vbnRoRGF5IiwiJGFwcGx5IiwiY2hhbmdlRGF0ZVRpbWUiLCJub3dEYXRlIiwidGltZSIsImRhdGUiLCJvYmoiLCJzdGFydFllYXIiLCJlbmRZZWFyIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7Ozs7Ozs7OztBQURBLElBQUlBLGlCQUFpQkMsUUFBUSxxQ0FBUixDQUFyQjs7SUFFcUJDLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsSyxHQUFRO0FBQ0pDLHFCQUFTO0FBQ0xDLHNCQUFNQztBQURELGFBREw7QUFJSkMsc0JBQVM7QUFDTEYsc0JBQUtHLE1BREE7QUFFTEMsd0JBQVE7QUFGSDtBQUpMLFMsUUFTUkMsSSxHQUFPO0FBQ0hDLDJCQUFlLElBRFo7QUFFSEMsc0JBQVU7QUFGUCxTLFFBSVBDLE8sR0FBVTtBQUNOQyxnQ0FETSxnQ0FDZUMsQ0FEZixFQUNpQjtBQUNuQixvQkFBSUMsTUFBTSxLQUFLSixRQUFmO0FBQUEsb0JBQXlCSyxVQUFVLEtBQUtOLGFBQXhDO0FBQ0FLLG9CQUFJRCxFQUFFRyxNQUFGLENBQVNDLE1BQWIsSUFBdUJKLEVBQUVHLE1BQUYsQ0FBU0UsS0FBaEM7QUFDQUgsd0JBQVEsQ0FBUixJQUFhakIsZUFBZXFCLFdBQWYsQ0FBMkJKLFFBQVEsQ0FBUixFQUFXRCxJQUFJLENBQUosQ0FBWCxDQUEzQixFQUErQ0MsUUFBUSxDQUFSLEVBQVdELElBQUksQ0FBSixDQUFYLENBQS9DLENBQWI7QUFDQSxxQkFBS0wsYUFBTCxHQUFtQk0sT0FBbkI7QUFDQSxxQkFBS0wsUUFBTCxHQUFjSSxHQUFkO0FBQ0EscUJBQUtNLE1BQUw7QUFDQyxhQVJDO0FBU05DLDBCQVRNLDBCQVNTUixDQVRULEVBU1k7QUFDZCxxQkFBS0gsUUFBTCxHQUFnQkcsRUFBRUcsTUFBRixDQUFTRSxLQUF6QjtBQUNBLHFCQUFLYixRQUFMLEdBQWMsQ0FBQyxLQUFLSSxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQUQsRUFBeUMsS0FBS0QsYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUF6QyxFQUFpRixLQUFLRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQWpGLEVBQXlILEtBQUtELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBdEIsQ0FBekgsRUFBaUssS0FBS0QsYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUFqSyxFQUF5TSxLQUFLRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQXpNLENBQWQ7QUFDQSxxQkFBS1UsTUFBTDtBQUNIO0FBYkssUzs7Ozs7aUNBZUQ7QUFDTDtBQUNBLGdCQUFJRSxVQUFRLEtBQUtwQixPQUFMLENBQWFxQixJQUF6QjtBQUNBLGdCQUFJQyxPQUFNLHFCQUFXRixPQUFYLENBQVY7QUFDQSxnQkFBSUcsTUFBTTNCLGVBQWVBLGNBQWYsQ0FBOEIsS0FBS1UsSUFBTCxDQUFVa0IsU0FBeEMsRUFBbUQsS0FBS2xCLElBQUwsQ0FBVW1CLE9BQTdELEVBQXFFSCxJQUFyRSxDQUFWO0FBQ0EsaUJBQUtkLFFBQUwsR0FBZWUsSUFBSWYsUUFBbkI7QUFDQSxpQkFBS0QsYUFBTCxHQUFxQmdCLElBQUloQixhQUF6QjtBQUNBLGlCQUFLSixRQUFMLEdBQWMsQ0FBQyxLQUFLSSxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQUQsRUFBeUMsS0FBS0QsYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUF6QyxFQUFpRixLQUFLRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQWpGLEVBQXlILEtBQUtELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBdEIsQ0FBekgsRUFBaUssS0FBS0QsYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUFqSyxFQUF5TSxLQUFLRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQXpNLENBQWQ7QUFDQSxpQkFBS1UsTUFBTDtBQUNIOzs7O0VBdEM2QlEsZUFBS0MsUzs7a0JBQWxCN0IsSSIsImZpbGUiOiJub3dEYXRlVGltZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIHZhciBkYXRlVGltZVBpY2tlciA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvZmlnL2RhdGVUaW1lUGlja2VyLmpzJyk7XG4gICAgaW1wb3J0IHtmb3JtYXRUaW1lfSBmcm9tICcuLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgdGltZU9iajoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGVEYXRhOntcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGRhdGVUaW1lQXJyYXk6IG51bGwsXG4gICAgICAgICAgICBkYXRlVGltZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoYW5nZURhdGVUaW1lQ29sdW1uKGUpe1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSB0aGlzLmRhdGVUaW1lLCBkYXRlQXJyID0gdGhpcy5kYXRlVGltZUFycmF5O1xuICAgICAgICAgICAgICAgIGFycltlLmRldGFpbC5jb2x1bW5dID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgZGF0ZUFyclsyXSA9IGRhdGVUaW1lUGlja2VyLmdldE1vbnRoRGF5KGRhdGVBcnJbMF1bYXJyWzBdXSwgZGF0ZUFyclsxXVthcnJbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQXJyYXk9ZGF0ZUFycjtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lPWFycjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VEYXRlVGltZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRGF0YT1bdGhpcy5kYXRlVGltZUFycmF5WzBdW3RoaXMuZGF0ZVRpbWVbMF1dLHRoaXMuZGF0ZVRpbWVBcnJheVsxXVt0aGlzLmRhdGVUaW1lWzFdXSx0aGlzLmRhdGVUaW1lQXJyYXlbMl1bdGhpcy5kYXRlVGltZVsyXV0sdGhpcy5kYXRlVGltZUFycmF5WzNdW3RoaXMuZGF0ZVRpbWVbM11dLHRoaXMuZGF0ZVRpbWVBcnJheVs0XVt0aGlzLmRhdGVUaW1lWzRdXSx0aGlzLmRhdGVUaW1lQXJyYXlbNV1bdGhpcy5kYXRlVGltZVs1XV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICAvLyDojrflj5blrozmlbTnmoTlubTmnIjml6Ug5pe25YiG56eS77yM5Lul5Y+K6buY6K6k5pi+56S655qE5pWw57uEXG4gICAgICAgICAgICB2YXIgbm93RGF0ZT10aGlzLnRpbWVPYmoudGltZTtcbiAgICAgICAgICAgIHZhciBkYXRlPSBmb3JtYXRUaW1lKG5vd0RhdGUpXG4gICAgICAgICAgICB2YXIgb2JqID0gZGF0ZVRpbWVQaWNrZXIuZGF0ZVRpbWVQaWNrZXIodGhpcy5kYXRhLnN0YXJ0WWVhciwgdGhpcy5kYXRhLmVuZFllYXIsZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lPSBvYmouZGF0ZVRpbWVcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBcnJheSA9IG9iai5kYXRlVGltZUFycmF5IFxuICAgICAgICAgICAgdGhpcy5kYXRlRGF0YT1bdGhpcy5kYXRlVGltZUFycmF5WzBdW3RoaXMuZGF0ZVRpbWVbMF1dLHRoaXMuZGF0ZVRpbWVBcnJheVsxXVt0aGlzLmRhdGVUaW1lWzFdXSx0aGlzLmRhdGVUaW1lQXJyYXlbMl1bdGhpcy5kYXRlVGltZVsyXV0sdGhpcy5kYXRlVGltZUFycmF5WzNdW3RoaXMuZGF0ZVRpbWVbM11dLHRoaXMuZGF0ZVRpbWVBcnJheVs0XVt0aGlzLmRhdGVUaW1lWzRdXSx0aGlzLmRhdGVUaW1lQXJyYXlbNV1bdGhpcy5kYXRlVGltZVs1XV1dO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19