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

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      navbars: {
        twoWay: true
      },
      currentTab: {
        twoWay: true
      }
    }, _this.data = {}, _this.methods = {
      navbarTap: function navbarTap(index) {
        this.currentTab = index;
        this.$emit('navbarIndex', index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // modules() {}


  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsIm5hdmJhcnMiLCJ0d29XYXkiLCJjdXJyZW50VGFiIiwiZGF0YSIsIm1ldGhvZHMiLCJuYXZiYXJUYXAiLCJpbmRleCIsIiRlbWl0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsSyxHQUFRO0FBQ05DLGVBQVM7QUFDUEMsZ0JBQVE7QUFERCxPQURIO0FBSU5DLGtCQUFZO0FBQ1ZELGdCQUFRO0FBREU7QUFKTixLLFFBUVJFLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxLQURGLEVBQ1M7QUFDZixhQUFLSixVQUFMLEdBQWtCSSxLQUFsQjtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxLQUExQjtBQUNEO0FBSk8sSzs7QUFEVjs7OztFQVYrQkUsZUFBS0MsUzs7a0JBQWpCWCxHIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgbmF2YmFyczoge1xyXG4gICAgICB0d29XYXk6IHRydWVcclxuICAgIH0sXHJcbiAgICBjdXJyZW50VGFiOiB7XHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfVxyXG4gIH07XHJcbiAgZGF0YSA9IHt9O1xyXG4gIC8vIG1vZHVsZXMoKSB7fVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBuYXZiYXJUYXAoaW5kZXgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGFiID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ25hdmJhckluZGV4JywgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19