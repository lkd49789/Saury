'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _placeHolderImage = require('./../../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientBaseInfo = function (_wepy$page) {
    _inherits(clientBaseInfo, _wepy$page);

    function clientBaseInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientBaseInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientBaseInfo.__proto__ || Object.getPrototypeOf(clientBaseInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            clientBaseData: {}
        }, _this.methods = {}, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientBaseInfo, [{
        key: 'GetClient',

        //获取客户信息
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/client/GetClient', 'post', { id: id });

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    this.clientBaseData = resData.data.result;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClient(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetClient;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            if (options.id) {
                this.GetClient(options.id);
            } else {
                var clientBaseData = wx.getStorageSync('clientData').clientBaseInfoData;
                this.clientBaseData = clientBaseData;
                if (this.clientBaseData.birthday !== null) {
                    this.clientBaseData.birthday = this.clientBaseData.birthday.split('T')[0];
                }
            }
            this.$apply();
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            wx.removeStorage({
                key: 'clientData',
                success: function success(res) {
                    console.log("===客户数据已清除======");
                }
            });
        }
    }]);

    return clientBaseInfo;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(clientBaseInfo , 'pages/modules/myclient/clientDetail/itemDetail/clientBaseInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudEJhc2VJbmZvLmpzIl0sIm5hbWVzIjpbImNsaWVudEJhc2VJbmZvIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2VIb2xkZXJJbWFnZSIsImRhdGEiLCJjbGllbnRCYXNlRGF0YSIsIm1ldGhvZHMiLCJtaXhpbnMiLCJpZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCIkYXBwbHkiLCJvcHRpb25zIiwiR2V0Q2xpZW50Iiwid3giLCJnZXRTdG9yYWdlU3luYyIsImNsaWVudEJhc2VJbmZvRGF0YSIsImJpcnRoZGF5Iiwic3BsaXQiLCJyZW1vdmVTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxjOzs7Ozs7Ozs7Ozs7OzswTUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwyQkFBMEIsYUFBN0MsRUFBcEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyw0QkFBZ0I7QUFEYixTLFFBR1BDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxDQUFDQSxlQUFELEM7Ozs7OztBQUNSOztpR0FDZUMsRTs7Ozs7Ozt1Q0FDRUMsZUFBS0MsT0FBTCxDQUNkLG9DQURjLEVBRWQsTUFGYyxFQUdkLEVBQUNGLE1BQUQsRUFIYyxDOzs7QUFBZEcsdUM7O0FBS0osb0NBQUdBLFFBQVFDLFVBQVIsSUFBb0IsR0FBdkIsRUFBMkI7QUFDdkIseUNBQUtQLGNBQUwsR0FBb0JNLFFBQVFQLElBQVIsQ0FBYVMsTUFBakM7QUFDQSx5Q0FBS0MsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRU1DLE8sRUFBUztBQUNaLGdCQUFHQSxRQUFRUCxFQUFYLEVBQWM7QUFDVixxQkFBS1EsU0FBTCxDQUFlRCxRQUFRUCxFQUF2QjtBQUNILGFBRkQsTUFFSztBQUNBLG9CQUFJSCxpQkFBaUJZLEdBQUdDLGNBQUgsQ0FBa0IsWUFBbEIsRUFBZ0NDLGtCQUFyRDtBQUNBLHFCQUFLZCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLG9CQUFHLEtBQUtBLGNBQUwsQ0FBb0JlLFFBQXBCLEtBQStCLElBQWxDLEVBQXVDO0FBQ25DLHlCQUFLZixjQUFMLENBQW9CZSxRQUFwQixHQUE2QixLQUFLZixjQUFMLENBQW9CZSxRQUFwQixDQUE2QkMsS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsQ0FBN0I7QUFDSDtBQUNMO0FBQ0QsaUJBQUtQLE1BQUw7QUFDSDs7O21DQUNVO0FBQ1BHLGVBQUdLLGFBQUgsQ0FBaUI7QUFDYkMscUJBQUssWUFEUTtBQUViQyx1QkFGYSxtQkFFTEMsR0FGSyxFQUVBO0FBQ2JDLDRCQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDQztBQUpZLGFBQWpCO0FBTUg7Ozs7RUEzQ3VDQyxlQUFLQyxJOztrQkFBNUIvQixjIiwiZmlsZSI6ImNsaWVudEJhc2VJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsaWVudEJhc2VJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBsYWNlSG9sZGVySW1hZ2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2VcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNsaWVudEJhc2VEYXRhOiB7fVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge307XG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xuICAgICAgICAgLy/ojrflj5blrqLmiLfkv6Hmga9cbiAgICAgICAgYXN5bmMgR2V0Q2xpZW50KGlkKXtcbiAgICAgICAgdmFyIHJlc0RhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NsaWVudC9HZXRDbGllbnQnLFxuICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAge2lkfVxuICAgICAgICApXG4gICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGE9cmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgaWYob3B0aW9ucy5pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRDbGllbnQob3B0aW9ucy5pZClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICB2YXIgY2xpZW50QmFzZURhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnY2xpZW50RGF0YScpLmNsaWVudEJhc2VJbmZvRGF0YTtcbiAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRCYXNlRGF0YSA9IGNsaWVudEJhc2VEYXRhO1xuICAgICAgICAgICAgICAgICBpZih0aGlzLmNsaWVudEJhc2VEYXRhLmJpcnRoZGF5IT09bnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLmJpcnRoZGF5PXRoaXMuY2xpZW50QmFzZURhdGEuYmlydGhkYXkuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblVubG9hZCgpIHtcbiAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgIGtleTogJ2NsaWVudERhdGEnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT3lrqLmiLfmlbDmja7lt7LmuIXpmaQ9PT09PT1cIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19