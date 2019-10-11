'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import navbar from '../../../components/navbar';
var clientlinkmandetail = function (_wepy$page) {
  _inherits(clientlinkmandetail, _wepy$page);

  function clientlinkmandetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, clientlinkmandetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientlinkmandetail.__proto__ || Object.getPrototypeOf(clientlinkmandetail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      linker: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(clientlinkmandetail, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var index = Number(options.index);
      this.linker = wx.getStorageSync('clientData').ContactsListData[index];
    }
  }]);

  return clientlinkmandetail;
}(_wepy2.default.page);


Page(require('./../../../../../../npm/wepy/lib/wepy.js').default.$createPage(clientlinkmandetail , 'pages/modules/myclient/clientDetail/itemDetail/clientLinkmanDetail/clientLinkmanDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudExpbmttYW5EZXRhaWwuanMiXSwibmFtZXMiOlsiY2xpZW50bGlua21hbmRldGFpbCIsImRhdGEiLCJsaW5rZXIiLCJtZXRob2RzIiwib3B0aW9ucyIsImluZGV4IiwiTnVtYmVyIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIkNvbnRhY3RzTGlzdERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxtQjs7Ozs7Ozs7Ozs7Ozs7Z05BQ25CQyxJLEdBQU87QUFDTEMsY0FBUTtBQURILEssUUFHUEMsTyxHQUFVLEU7Ozs7OzJCQUNIQyxPLEVBQVM7QUFDZCxVQUFJQyxRQUFRQyxPQUFPRixRQUFRQyxLQUFmLENBQVo7QUFDQSxXQUFLSCxNQUFMLEdBQVlLLEdBQUdDLGNBQUgsQ0FBa0IsWUFBbEIsRUFBZ0NDLGdCQUFoQyxDQUFpREosS0FBakQsQ0FBWjtBQUNEOzs7O0VBUjhDSyxlQUFLQyxJOztrQkFBakNYLG1CIiwiZmlsZSI6ImNsaWVudExpbmttYW5EZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuLy8gaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjbGllbnRsaW5rbWFuZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgZGF0YSA9IHtcbiAgICBsaW5rZXI6IFtdXG4gIH07XG4gIG1ldGhvZHMgPSB7fTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB2YXIgaW5kZXggPSBOdW1iZXIob3B0aW9ucy5pbmRleCk7XG4gICAgdGhpcy5saW5rZXI9d3guZ2V0U3RvcmFnZVN5bmMoJ2NsaWVudERhdGEnKS5Db250YWN0c0xpc3REYXRhW2luZGV4XTtcbiAgfVxufVxuIl19