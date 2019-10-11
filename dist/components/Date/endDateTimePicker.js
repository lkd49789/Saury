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
            // console.log(this.timeObj);
            // 获取完整的年月日 时分秒，以及默认显示的数组
            var nowDate = this.timeObj.time;
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

    return test;
}(_wepy2.default.component);

exports.default = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZERhdGVUaW1lUGlja2VyLmpzIl0sIm5hbWVzIjpbImRhdGVUaW1lUGlja2VyIiwicmVxdWlyZSIsInRlc3QiLCJwcm9wcyIsInRpbWVPYmoiLCJ0eXBlIiwiT2JqZWN0IiwiZGF0ZURhdGEiLCJTdHJpbmciLCJ0d29XYXkiLCJkYXRhIiwiZGF0ZVRpbWVBcnJheSIsImRhdGVUaW1lIiwibWV0aG9kcyIsImNoYW5nZURhdGVUaW1lQ29sdW1uIiwiZSIsImFyciIsImRhdGVBcnIiLCJkZXRhaWwiLCJjb2x1bW4iLCJ2YWx1ZSIsImdldE1vbnRoRGF5IiwiJGFwcGx5IiwiY2hhbmdlRGF0ZVRpbWUiLCJub3dEYXRlIiwidGltZSIsImRhdGUiLCJvYmoiLCJzdGFydFllYXIiLCJlbmRZZWFyIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7Ozs7Ozs7OztBQURBLElBQUlBLGlCQUFpQkMsUUFBUSxxQ0FBUixDQUFyQjs7SUFFcUJDLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsSyxHQUFRO0FBQ0pDLHFCQUFTO0FBQ0xDLHNCQUFNQztBQURELGFBREw7QUFJSkMsc0JBQVM7QUFDTEYsc0JBQUtHLE1BREE7QUFFTEMsd0JBQVE7QUFGSDtBQUpMLFMsUUFTUkMsSSxHQUFPO0FBQ0hDLDJCQUFlLElBRFo7QUFFSEMsc0JBQVU7QUFGUCxTLFFBSVBDLE8sR0FBVTtBQUNMQyxnQ0FESyxnQ0FDZ0JDLENBRGhCLEVBQ2tCO0FBQ3BCLG9CQUFJQyxNQUFNLEtBQUtKLFFBQWY7QUFBQSxvQkFBeUJLLFVBQVUsS0FBS04sYUFBeEM7QUFDQUssb0JBQUlELEVBQUVHLE1BQUYsQ0FBU0MsTUFBYixJQUF1QkosRUFBRUcsTUFBRixDQUFTRSxLQUFoQztBQUNBSCx3QkFBUSxDQUFSLElBQWFqQixlQUFlcUIsV0FBZixDQUEyQkosUUFBUSxDQUFSLEVBQVdELElBQUksQ0FBSixDQUFYLENBQTNCLEVBQStDQyxRQUFRLENBQVIsRUFBV0QsSUFBSSxDQUFKLENBQVgsQ0FBL0MsQ0FBYjtBQUNBLHFCQUFLTCxhQUFMLEdBQW1CTSxPQUFuQjtBQUNBLHFCQUFLTCxRQUFMLEdBQWNJLEdBQWQ7QUFDQSxxQkFBS00sTUFBTDtBQUNDLGFBUkM7QUFTTkMsMEJBVE0sMEJBU1NSLENBVFQsRUFTWTtBQUNkLHFCQUFLSCxRQUFMLEdBQWdCRyxFQUFFRyxNQUFGLENBQVNFLEtBQXpCO0FBQ0EscUJBQUtiLFFBQUwsR0FBYyxDQUFDLEtBQUtJLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBdEIsQ0FBRCxFQUF5QyxLQUFLRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQXpDLEVBQWlGLEtBQUtELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBdEIsQ0FBakYsRUFBeUgsS0FBS0QsYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUF6SCxFQUFpSyxLQUFLRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQWpLLEVBQXlNLEtBQUtELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBdEIsQ0FBek0sQ0FBZDtBQUNBLHFCQUFLVSxNQUFMO0FBQ0g7QUFiSyxTOzs7OztpQ0FlRDtBQUNMO0FBQ0E7QUFDRCxnQkFBSUUsVUFBUSxLQUFLcEIsT0FBTCxDQUFhcUIsSUFBekI7QUFDQyxnQkFBSUMsT0FBTSxxQkFBV0YsT0FBWCxDQUFWO0FBQ0EsZ0JBQUlHLE1BQU0zQixlQUFlQSxjQUFmLENBQThCLEtBQUtVLElBQUwsQ0FBVWtCLFNBQXhDLEVBQW1ELEtBQUtsQixJQUFMLENBQVVtQixPQUE3RCxFQUFxRUgsSUFBckUsQ0FBVjtBQUNBLGdCQUFHLENBQUMsS0FBS3RCLE9BQUwsQ0FBYXNCLElBQWpCLEVBQXNCO0FBQ2pCLG9CQUFHQyxJQUFJZixRQUFKLENBQWEsQ0FBYixJQUFnQixFQUFuQixFQUFzQjtBQUNuQmUsd0JBQUlmLFFBQUosQ0FBYSxDQUFiLEtBQWlCLENBQWpCO0FBQ0gsaUJBRkEsTUFFSyxJQUFHZSxJQUFJZixRQUFKLENBQWEsQ0FBYixLQUFpQixFQUFwQixFQUF1QjtBQUN6QmUsd0JBQUlmLFFBQUosQ0FBYSxDQUFiLElBQWdCLENBQWhCO0FBQ0g7QUFDSjtBQUNELGlCQUFLQSxRQUFMLEdBQWVlLElBQUlmLFFBQW5CO0FBQ0EsaUJBQUtELGFBQUwsR0FBcUJnQixJQUFJaEIsYUFBekI7QUFDQSxpQkFBS0osUUFBTCxHQUFjLENBQUMsS0FBS0ksYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUFELEVBQXlDLEtBQUtELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBdEIsQ0FBekMsRUFBaUYsS0FBS0QsYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUFqRixFQUF5SCxLQUFLRCxhQUFMLENBQW1CLENBQW5CLEVBQXNCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQXRCLENBQXpILEVBQWlLLEtBQUtELGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBdEIsQ0FBakssRUFBeU0sS0FBS0QsYUFBTCxDQUFtQixDQUFuQixFQUFzQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF0QixDQUF6TSxDQUFkO0FBQ0EsaUJBQUtVLE1BQUw7QUFDSDs7OztFQTlDNkJRLGVBQUtDLFM7O2tCQUFsQjdCLEkiLCJmaWxlIjoiZW5kRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICB2YXIgZGF0ZVRpbWVQaWNrZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jb2ZpZy9kYXRlVGltZVBpY2tlci5qcycpO1xuICAgIGltcG9ydCB7Zm9ybWF0VGltZX0gZnJvbSAnLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIHRpbWVPYmo6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRlRGF0YTp7XG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBkYXRlVGltZUFycmF5OiBudWxsLFxuICAgICAgICAgICAgZGF0ZVRpbWU6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAgY2hhbmdlRGF0ZVRpbWVDb2x1bW4oZSl7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IHRoaXMuZGF0ZVRpbWUsIGRhdGVBcnIgPSB0aGlzLmRhdGVUaW1lQXJyYXk7XG4gICAgICAgICAgICAgICAgYXJyW2UuZGV0YWlsLmNvbHVtbl0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBkYXRlQXJyWzJdID0gZGF0ZVRpbWVQaWNrZXIuZ2V0TW9udGhEYXkoZGF0ZUFyclswXVthcnJbMF1dLCBkYXRlQXJyWzFdW2FyclsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBcnJheT1kYXRlQXJyO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWU9YXJyO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZURhdGVUaW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRGF0YT1bdGhpcy5kYXRlVGltZUFycmF5WzBdW3RoaXMuZGF0ZVRpbWVbMF1dLHRoaXMuZGF0ZVRpbWVBcnJheVsxXVt0aGlzLmRhdGVUaW1lWzFdXSx0aGlzLmRhdGVUaW1lQXJyYXlbMl1bdGhpcy5kYXRlVGltZVsyXV0sdGhpcy5kYXRlVGltZUFycmF5WzNdW3RoaXMuZGF0ZVRpbWVbM11dLHRoaXMuZGF0ZVRpbWVBcnJheVs0XVt0aGlzLmRhdGVUaW1lWzRdXSx0aGlzLmRhdGVUaW1lQXJyYXlbNV1bdGhpcy5kYXRlVGltZVs1XV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRpbWVPYmopO1xuICAgICAgICAgICAgLy8g6I635Y+W5a6M5pW055qE5bm05pyI5pelIOaXtuWIhuenku+8jOS7peWPium7mOiupOaYvuekuueahOaVsOe7hFxuICAgICAgICAgICB2YXIgbm93RGF0ZT10aGlzLnRpbWVPYmoudGltZTtcbiAgICAgICAgICAgIHZhciBkYXRlPSBmb3JtYXRUaW1lKG5vd0RhdGUpXG4gICAgICAgICAgICB2YXIgb2JqID0gZGF0ZVRpbWVQaWNrZXIuZGF0ZVRpbWVQaWNrZXIodGhpcy5kYXRhLnN0YXJ0WWVhciwgdGhpcy5kYXRhLmVuZFllYXIsZGF0ZSk7XG4gICAgICAgICAgICBpZighdGhpcy50aW1lT2JqLmRhdGUpe1xuICAgICAgICAgICAgICAgICBpZihvYmouZGF0ZVRpbWVbM108MjMpe1xuICAgICAgICAgICAgICAgICAgICBvYmouZGF0ZVRpbWVbM10rPTFcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmouZGF0ZVRpbWVbM109PTIzKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRhdGVUaW1lWzNdPTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lPSBvYmouZGF0ZVRpbWU7XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQXJyYXkgPSBvYmouZGF0ZVRpbWVBcnJheSBcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGE9W3RoaXMuZGF0ZVRpbWVBcnJheVswXVt0aGlzLmRhdGVUaW1lWzBdXSx0aGlzLmRhdGVUaW1lQXJyYXlbMV1bdGhpcy5kYXRlVGltZVsxXV0sdGhpcy5kYXRlVGltZUFycmF5WzJdW3RoaXMuZGF0ZVRpbWVbMl1dLHRoaXMuZGF0ZVRpbWVBcnJheVszXVt0aGlzLmRhdGVUaW1lWzNdXSx0aGlzLmRhdGVUaW1lQXJyYXlbNF1bdGhpcy5kYXRlVGltZVs0XV0sdGhpcy5kYXRlVGltZUFycmF5WzVdW3RoaXMuZGF0ZVRpbWVbNV1dXTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==