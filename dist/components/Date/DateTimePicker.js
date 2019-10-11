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

var TimePicker = function (_wepy$component) {
    _inherits(TimePicker, _wepy$component);

    function TimePicker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TimePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
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
                console.log(e);
                this.dateTime = e.detail.value;
                this.dateData = [this.dateTimeArray[0][this.dateTime[0]], this.dateTimeArray[1][this.dateTime[1]], this.dateTimeArray[2][this.dateTime[2]], this.dateTimeArray[3][this.dateTime[3]], this.dateTimeArray[4][this.dateTime[4]], this.dateTimeArray[5][this.dateTime[5]]];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TimePicker, [{
        key: 'onLoad',
        value: function onLoad() {
            // console.log(this.timeObj);
            // 获取完整的年月日 时分秒，以及默认显示的数组
            var nowDate = this.timeObj.time;
            nowDate = new Date(new Date(nowDate).getTime() + 8 * 3600000);
            var date = (0, _api.formatTime)(nowDate);
            var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear, date);
            if (!this.timeObj.date) {
                if (obj.dateTime[3] < 23) {
                    obj.dateTime[3] += 1;
                } else if (obj.dateTime[3] == 23) {
                    obj.dateTime[3] = 0;
                }
            }
            this.dateTime = obj.dateTime;
            this.dateTimeArray = obj.dateTimeArray;
            this.dateData = [this.dateTimeArray[0][this.dateTime[0]], this.dateTimeArray[1][this.dateTime[1]], this.dateTimeArray[2][this.dateTime[2]], this.dateTimeArray[3][this.dateTime[3]], this.dateTimeArray[4][this.dateTime[4]], this.dateTimeArray[5][this.dateTime[5]]];
            this.$apply();
        }
    }]);

    return TimePicker;
}(_wepy2.default.component);

exports.default = TimePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhdGVUaW1lUGlja2VyLmpzIl0sIm5hbWVzIjpbImRhdGVUaW1lUGlja2VyIiwicmVxdWlyZSIsIlRpbWVQaWNrZXIiLCJwcm9wcyIsInRpbWVPYmoiLCJ0eXBlIiwiT2JqZWN0IiwiZGF0ZURhdGEiLCJTdHJpbmciLCJ0d29XYXkiLCJkYXRhIiwiZGF0ZVRpbWVBcnJheSIsImRhdGVUaW1lIiwibWV0aG9kcyIsImNoYW5nZURhdGVUaW1lQ29sdW1uIiwiZSIsImFyciIsImRhdGVBcnIiLCJkZXRhaWwiLCJjb2x1bW4iLCJ2YWx1ZSIsImdldE1vbnRoRGF5IiwiJGFwcGx5IiwiY2hhbmdlRGF0ZVRpbWUiLCJjb25zb2xlIiwibG9nIiwibm93RGF0ZSIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImRhdGUiLCJvYmoiLCJzdGFydFllYXIiLCJlbmRZZWFyIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7Ozs7Ozs7OztBQURBLElBQUlBLGlCQUFpQkMsUUFBUSxxQ0FBUixDQUFyQjs7SUFFcUJDLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsSyxHQUFRO0FBQ0pDLHFCQUFTO0FBQ0xDLHNCQUFNQztBQURELGFBREw7QUFJSkMsc0JBQVM7QUFDTEYsc0JBQUtHLE1BREE7QUFFTEMsd0JBQVE7QUFGSDtBQUpMLFMsUUFTUkMsSSxHQUFPO0FBQ0hDLDJCQUFlLElBRFo7QUFFSEMsc0JBQVU7QUFGUCxTLFFBSVBDLE8sR0FBVTtBQUNOQyxnQ0FETSxnQ0FDZUMsQ0FEZixFQUNpQjtBQUNuQixvQkFBSUMsTUFBTSxLQUFLSixRQUFmO0FBQUEsb0JBQXlCSyxVQUFVLEtBQUtOLGFBQXhDO0FBQ0FLLG9CQUFJRCxFQUFFRyxNQUFGLENBQVNDLE1BQWIsSUFBdUJKLEVBQUVHLE1BQUYsQ0FBU0UsS0FBaEM7QUFDQUgsd0JBQVEsQ0FBUixJQUFhakIsZUFBZXFCLFdBQWYsQ0FBMkJKLFFBQVEsQ0FBUixFQUFXRCxJQUFJ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O0VBaERtQ1ksZUFBS0MsUzs7a0JBQXhCakMsVSIsImZpbGUiOiJEYXRlVGltZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIHZhciBkYXRlVGltZVBpY2tlciA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvZmlnL2RhdGVUaW1lUGlja2VyLmpzJyk7XG4gICAgaW1wb3J0IHtmb3JtYXRUaW1lfSBmcm9tICcuLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQaWNrZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgdGltZU9iajoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGVEYXRhOntcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGRhdGVUaW1lQXJyYXk6IG51bGwsXG4gICAgICAgICAgICBkYXRlVGltZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoYW5nZURhdGVUaW1lQ29sdW1uKGUpe1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSB0aGlzLmRhdGVUaW1lLCBkYXRlQXJyID0gdGhpcy5kYXRlVGltZUFycmF5O1xuICAgICAgICAgICAgICAgIGFycltlLmRldGFpbC5jb2x1bW5dID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgZGF0ZUFyclsyXSA9IGRhdGVUaW1lUGlja2VyLmdldE1vbnRoRGF5KGRhdGVBcnJbMF1bYXJyWzBdXSwgZGF0ZUFyclsxXVthcnJbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQXJyYXk9ZGF0ZUFycjtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lPWFycjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VEYXRlVGltZShlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZURhdGE9W3RoaXMuZGF0ZVRpbWVBcnJheVswXVt0aGlzLmRhdGVUaW1lWzBdXSx0aGlzLmRhdGVUaW1lQXJyYXlbMV1bdGhpcy5kYXRlVGltZVsxXV0sdGhpcy5kYXRlVGltZUFycmF5WzJdW3RoaXMuZGF0ZVRpbWVbMl1dLHRoaXMuZGF0ZVRpbWVBcnJheVszXVt0aGlzLmRhdGVUaW1lWzNdXSx0aGlzLmRhdGVUaW1lQXJyYXlbNF1bdGhpcy5kYXRlVGltZVs0XV0sdGhpcy5kYXRlVGltZUFycmF5WzVdW3RoaXMuZGF0ZVRpbWVbNV1dXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50aW1lT2JqKTtcbiAgICAgICAgICAgIC8vIOiOt+WPluWujOaVtOeahOW5tOaciOaXpSDml7bliIbnp5LvvIzku6Xlj4rpu5jorqTmmL7npLrnmoTmlbDnu4RcbiAgICAgICAgICAgdmFyIG5vd0RhdGU9dGhpcy50aW1lT2JqLnRpbWU7XG4gICAgICAgICAgICBub3dEYXRlID0gbmV3IERhdGUobmV3IERhdGUobm93RGF0ZSkuZ2V0VGltZSgpKzggKiAzNjAwMDAwKTtcbiAgICAgICAgICAgIHZhciBkYXRlPSBmb3JtYXRUaW1lKG5vd0RhdGUpXG4gICAgICAgICAgICB2YXIgb2JqID0gZGF0ZVRpbWVQaWNrZXIuZGF0ZVRpbWVQaWNrZXIodGhpcy5kYXRhLnN0YXJ0WWVhciwgdGhpcy5kYXRhLmVuZFllYXIsZGF0ZSk7XG4gICAgICAgICAgICBpZighdGhpcy50aW1lT2JqLmRhdGUpe1xuICAgICAgICAgICAgICAgICBpZihvYmouZGF0ZVRpbWVbM108MjMpe1xuICAgICAgICAgICAgICAgICAgICBvYmouZGF0ZVRpbWVbM10rPTFcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmouZGF0ZVRpbWVbM109PTIzKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRhdGVUaW1lWzNdPTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lPSBvYmouZGF0ZVRpbWU7XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQXJyYXkgPSBvYmouZGF0ZVRpbWVBcnJheSBcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGE9W3RoaXMuZGF0ZVRpbWVBcnJheVswXVt0aGlzLmRhdGVUaW1lWzBdXSx0aGlzLmRhdGVUaW1lQXJyYXlbMV1bdGhpcy5kYXRlVGltZVsxXV0sdGhpcy5kYXRlVGltZUFycmF5WzJdW3RoaXMuZGF0ZVRpbWVbMl1dLHRoaXMuZGF0ZVRpbWVBcnJheVszXVt0aGlzLmRhdGVUaW1lWzNdXSx0aGlzLmRhdGVUaW1lQXJyYXlbNF1bdGhpcy5kYXRlVGltZVs0XV0sdGhpcy5kYXRlVGltZUFycmF5WzVdW3RoaXMuZGF0ZVRpbWVbNV1dXTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==