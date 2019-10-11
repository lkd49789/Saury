'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import navbar from '../../../components/navbar';
var tools = function (_wepy$page) {
    _inherits(tools, _wepy$page);

    function tools() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, tools);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tools.__proto__ || Object.getPrototypeOf(tools)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            // navbar
        }, _this.data = {
            toolsItem: [{
                icon: 'icon-qingchuhuancun',
                text: '清除缓存',
                name: 'clearCache'
            },
            // {
            //     icon:'icon-bangzhufankui',
            //     text:'帮助与反馈',
            //     name:'hleap',
            //     link:'./webView/help_webView'
            // },
            {
                icon: 'icon-guanyuwomen',
                text: '关于我们',
                name: 'about',
                link: './webView/viewView'
            }]
        }, _this.methods = {
            click: function click(name) {
                switch (name) {
                    case 'clearCache':
                        var access = wx.getStorageSync('access');
                        _wepy2.default.clearStorageSync();
                        _wepy2.default.clearStorage({
                            success: function success() {
                                wx.setStorageSync('access', access);
                                wx.showToast({
                                    title: '清除完成！',
                                    icon: 'none',
                                    duration: 1500,
                                    mask: false
                                });
                            },
                            fail: function fail() {
                                wx.showToast({
                                    title: '清除失败！',
                                    icon: 'none',
                                    duration: 1500,
                                    mask: false
                                });
                            }
                        });
                        break;
                    case 'hleap':
                        wx.navigateTo({ url: './webView/help_webView' });
                        break;
                    case 'about':
                        wx.navigateTo({ url: './webView/viewView' });
                        break;
                    default:
                        break;
                }
            },
            quit: function quit() {
                wx.removeStorageSync('access');
                if (_wepy2.default.getStorageSync('access') == '') {
                    wx.reLaunch({
                        url: '../login/choosePageLogin'
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(tools, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return tools;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(tools , 'pages/mine/tools'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzLmpzIl0sIm5hbWVzIjpbInRvb2xzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0b29sc0l0ZW0iLCJpY29uIiwidGV4dCIsIm5hbWUiLCJsaW5rIiwibWV0aG9kcyIsImNsaWNrIiwiYWNjZXNzIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIndlcHkiLCJjbGVhclN0b3JhZ2VTeW5jIiwiY2xlYXJTdG9yYWdlIiwic3VjY2VzcyIsInNldFN0b3JhZ2VTeW5jIiwic2hvd1RvYXN0IiwidGl0bGUiLCJkdXJhdGlvbiIsIm1hc2siLCJmYWlsIiwibmF2aWdhdGVUbyIsInVybCIsInF1aXQiLCJyZW1vdmVTdG9yYWdlU3luYyIsInJlTGF1bmNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLFUsR0FBYTtBQUNUO0FBRFMsUyxRQUdiQyxJLEdBQU87QUFDSEMsdUJBQVUsQ0FDTjtBQUNJQyxzQkFBSyxxQkFEVDtBQUVJQyxzQkFBSyxNQUZUO0FBR0lDLHNCQUFLO0FBSFQsYUFETTtBQU1OO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0lGLHNCQUFLLGtCQURUO0FBRUlDLHNCQUFLLE1BRlQ7QUFHSUMsc0JBQUssT0FIVDtBQUlJQyxzQkFBSztBQUpULGFBWk07QUFEUCxTLFFBcUJQQyxPLEdBQVU7QUFDTkMsaUJBRE0saUJBQ0FILElBREEsRUFDSztBQUNSLHdCQUFRQSxJQUFSO0FBQ0kseUJBQUssWUFBTDtBQUNFLDRCQUFJSSxTQUFTQyxHQUFHQyxjQUFILENBQWtCLFFBQWxCLENBQWI7QUFDQUMsdUNBQUtDLGdCQUFMO0FBQ0FELHVDQUFLRSxZQUFMLENBQWtCO0FBQ2RDLHFDQUFRLG1CQUFJO0FBQ1JMLG1DQUFHTSxjQUFILENBQWtCLFFBQWxCLEVBQTRCUCxNQUE1QjtBQUNBQyxtQ0FBR08sU0FBSCxDQUFhO0FBQ1RDLDJDQUFPLE9BREU7QUFFVGYsMENBQU0sTUFGRztBQUdUZ0IsOENBQVUsSUFIRDtBQUlUQywwQ0FBTTtBQUpHLGlDQUFiO0FBTUgsNkJBVGE7QUFVZEMsa0NBQUssZ0JBQUk7QUFDTFgsbUNBQUdPLFNBQUgsQ0FBYTtBQUNUQywyQ0FBTyxPQURFO0FBRVRmLDBDQUFNLE1BRkc7QUFHVGdCLDhDQUFVLElBSEQ7QUFJVEMsMENBQU07QUFKRyxpQ0FBYjtBQU1IO0FBakJhLHlCQUFsQjtBQW1CRTtBQUNILHlCQUFLLE9BQUw7QUFDSVYsMkJBQUdZLFVBQUgsQ0FBYyxFQUFFQyxLQUFLLHdCQUFQLEVBQWQ7QUFDSjtBQUNBLHlCQUFLLE9BQUw7QUFDSWIsMkJBQUdZLFVBQUgsQ0FBYyxFQUFFQyxLQUFLLG9CQUFQLEVBQWQ7QUFDSjtBQUNEO0FBQ0k7QUEvQlI7QUFpQ0YsYUFuQ0s7QUFvQ05DLGdCQXBDTSxrQkFvQ0M7QUFDSGQsbUJBQUdlLGlCQUFILENBQXFCLFFBQXJCO0FBQ0Esb0JBQUliLGVBQUtELGNBQUwsQ0FBb0IsUUFBcEIsS0FBK0IsRUFBbkMsRUFBdUM7QUFDbkNELHVCQUFHZ0IsUUFBSCxDQUFZO0FBQ1JILDZCQUFLO0FBREcscUJBQVo7QUFHSDtBQUNKO0FBM0NLLFM7Ozs7O2lDQTZDRCxDQUFFOzs7O0VBdEVvQlgsZUFBS2UsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJ0b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIC8vIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvb2xzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIC8vIG5hdmJhclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdG9vbHNJdGVtOltcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246J2ljb24tcWluZ2NodWh1YW5jdW4nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OifmuIXpmaTnvJPlrZgnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOidjbGVhckNhY2hlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgICBpY29uOidpY29uLWJhbmd6aHVmYW5rdWknLFxuICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0OifluK7liqnkuI7lj43ppognLFxuICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOidobGVhcCcsXG4gICAgICAgICAgICAgICAgLy8gICAgIGxpbms6Jy4vd2ViVmlldy9oZWxwX3dlYlZpZXcnXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246J2ljb24tZ3Vhbnl1d29tZW4nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiflhbPkuo7miJHku6wnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOidhYm91dCcsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6Jy4vd2ViVmlldy92aWV3VmlldydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2xpY2sobmFtZSl7XG4gICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICBjYXNlICdjbGVhckNhY2hlJzpcbiAgICAgICAgICAgICAgICAgICAgIHZhciBhY2Nlc3M9ICB3eC5nZXRTdG9yYWdlU3luYygnYWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgICB3ZXB5LmNsZWFyU3RvcmFnZVN5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgIHdlcHkuY2xlYXJTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOigpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdhY2Nlc3MnLCBhY2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmuIXpmaTlrozmiJDvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOigpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+a4hemZpOWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hsZWFwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL3dlYlZpZXcvaGVscF93ZWJWaWV3J30pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWJvdXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4vd2ViVmlldy92aWV3Vmlldyd9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1aXQoKSB7XG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ2FjY2VzcycpO1xuICAgICAgICAgICAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhY2Nlc3MnKT09JycpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbG9naW4vY2hvb3NlUGFnZUxvZ2luJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZCgpIHt9XG4gICAgfVxuIl19