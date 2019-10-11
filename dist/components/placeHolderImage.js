'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var placeHoldImage = function (_wepy$component) {
    _inherits(placeHoldImage, _wepy$component);

    function placeHoldImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, placeHoldImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = placeHoldImage.__proto__ || Object.getPrototypeOf(placeHoldImage)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            placeHolder: {
                type: Object,
                twoWay: true
            }
        }, _this.data = {
            placeHolderImage: ['/images/noData.png', '/images/noRequest.png', '/images/noNet.png', '/images/noTaccredit.png']
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return placeHoldImage;
}(_wepy2.default.component);

exports.default = placeHoldImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlSG9sZGVySW1hZ2UuanMiXSwibmFtZXMiOlsicGxhY2VIb2xkSW1hZ2UiLCJwcm9wcyIsInBsYWNlSG9sZGVyIiwidHlwZSIsIk9iamVjdCIsInR3b1dheSIsImRhdGEiLCJwbGFjZUhvbGRlckltYWdlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNuQkMsSyxHQUFRO0FBQ0xDLHlCQUFZO0FBQ1JDLHNCQUFLQyxNQURHO0FBRVJDLHdCQUFRO0FBRkE7QUFEUCxTLFFBTVJDLEksR0FBSztBQUNEQyw4QkFBaUIsQ0FDYixvQkFEYSxFQUViLHVCQUZhLEVBR2IsbUJBSGEsRUFJYix5QkFKYTtBQURoQixTOzs7O0VBUHFDQyxlQUFLQyxTOztrQkFBNUJULGMiLCJmaWxlIjoicGxhY2VIb2xkZXJJbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwbGFjZUhvbGRJbWFnZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgIHBsYWNlSG9sZGVyOntcbiAgICAgICAgIHR5cGU6T2JqZWN0LFxuICAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgIH1cbiAgfTtcbiAgZGF0YT17XG4gICAgICBwbGFjZUhvbGRlckltYWdlOltcbiAgICAgICAgICAnL2ltYWdlcy9ub0RhdGEucG5nJyxcbiAgICAgICAgICAnL2ltYWdlcy9ub1JlcXVlc3QucG5nJyxcbiAgICAgICAgICAnL2ltYWdlcy9ub05ldC5wbmcnLFxuICAgICAgICAgICcvaW1hZ2VzL25vVGFjY3JlZGl0LnBuZycsXG4gICAgICBdXG4gIH1cbn1cbiJdfQ==