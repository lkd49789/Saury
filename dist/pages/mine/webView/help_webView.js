'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var webView = function (_wepy$page) {
    _inherits(webView, _wepy$page);

    function webView() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, webView);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = webView.__proto__ || Object.getPrototypeOf(webView)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            src: 'http://help.ailinkedlaw.com/'
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(webView, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return webView;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(webView , 'pages/mine/webView/help_webView'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBfd2ViVmlldy5qcyJdLCJuYW1lcyI6WyJ3ZWJWaWV3IiwiZGF0YSIsInNyYyIsIm1ldGhvZHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2pCQyxJLEdBQU87QUFDSEMsaUJBQUs7QUFERixTLFFBR1BDLE8sR0FBVSxFOzs7OztpQ0FDRCxDQUFFOzs7O0VBTHNCQyxlQUFLQyxJOztrQkFBckJMLE8iLCJmaWxlIjoiaGVscF93ZWJWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd2ViVmlldyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzcmM6ICdodHRwOi8vaGVscC5haWxpbmtlZGxhdy5jb20vJ1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge307XG4gICAgICAgIG9uTG9hZCgpIHt9XG4gICAgfVxuIl19