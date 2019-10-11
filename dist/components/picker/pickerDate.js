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

var pickerDate = function (_wepy$component) {
    _inherits(pickerDate, _wepy$component);

    function pickerDate() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, pickerDate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pickerDate.__proto__ || Object.getPrototypeOf(pickerDate)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            pickerData: {
                type: Object,
                twoWay: true
            }
        }, _this.data = {}, _this.methods = {
            bindDateChange: function bindDateChange(e) {
                switch (e.currentTarget.id) {
                    case 'startDate':
                        this.pickerData.startDateData = e.detail.value;
                        break;
                    case 'endDate':
                        this.pickerData.endDateData = e.detail.value;
                        break;
                    default:
                        break;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(pickerDate, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return pickerDate;
}(_wepy2.default.component);

exports.default = pickerDate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlckRhdGUuanMiXSwibmFtZXMiOlsicGlja2VyRGF0ZSIsInByb3BzIiwicGlja2VyRGF0YSIsInR5cGUiLCJPYmplY3QiLCJ0d29XYXkiLCJkYXRhIiwibWV0aG9kcyIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInN0YXJ0RGF0ZURhdGEiLCJkZXRhaWwiLCJ2YWx1ZSIsImVuZERhdGVEYXRhIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxLLEdBQVE7QUFDSkMsd0JBQVk7QUFDUkMsc0JBQU1DLE1BREU7QUFFUkMsd0JBQVE7QUFGQTtBQURSLFMsUUFNUkMsSSxHQUFPLEUsUUFFUEMsTyxHQUFVO0FBQ05DLDBCQURNLDBCQUNTQyxDQURULEVBQ1k7QUFDZCx3QkFBUUEsRUFBRUMsYUFBRixDQUFnQkMsRUFBeEI7QUFDSSx5QkFBSyxXQUFMO0FBQ0ksNkJBQUtULFVBQUwsQ0FBZ0JVLGFBQWhCLEdBQThCSCxFQUFFSSxNQUFGLENBQVNDLEtBQXZDO0FBQ0E7QUFDSix5QkFBSyxTQUFMO0FBQ0ksNkJBQUtaLFVBQUwsQ0FBZ0JhLFdBQWhCLEdBQTRCTixFQUFFSSxNQUFGLENBQVNDLEtBQXJDO0FBQ0E7QUFDSjtBQUNJO0FBUlI7QUFVSDtBQVpLLFM7Ozs7O2lDQWNELENBQUU7Ozs7RUF2QnlCRSxlQUFLQyxTOztrQkFBeEJqQixVIiwiZmlsZSI6InBpY2tlckRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwaWNrZXJEYXRlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIHBpY2tlckRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmN1cnJlbnRUYXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RhcnREYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyRGF0YS5zdGFydERhdGVEYXRhPWUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZERhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJEYXRhLmVuZERhdGVEYXRhPWUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQoKSB7fVxuICAgIH1cbiJdfQ==