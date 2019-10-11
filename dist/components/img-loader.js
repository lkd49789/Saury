'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListAnother = function (_wepy$component) {
    _inherits(ListAnother, _wepy$component);

    function ListAnother() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ListAnother);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListAnother.__proto__ || Object.getPrototypeOf(ListAnother)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            imgLoadList: [],
            defaultCallback: function defaultCallback() {},
            callbacks: {},
            imgInfo: {}
        }, _this.methods = {
            imgOnLoad: function imgOnLoad(ev) {
                var src = ev.currentTarget.dataset.src,
                    width = ev.detail.width,
                    height = ev.detail.height;

                // 记录已下载图片的尺寸信息
                this.imgInfo[src] = { width: width, height: height };
                this.removeFromLoadList(src);
                this.runCallback(null, { src: src, width: width, height: height });
            },
            imgOnLoadError: function imgOnLoadError(ev) {
                var src = ev.currentTarget.dataset.src;
                this.removeFromLoadList(src);
                this.runCallback('Loading failed', { src: src });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ListAnother, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log('img-loader组件加载成功~');
        }
    }, {
        key: 'load',
        value: function load(src, callback) {
            if (!src) return;

            var list = this.imgLoadList,
                imgInfo = this.imgInfo[src];

            if (callback) this.callbacks[src] = callback;

            //已经加载成功过的，直接回调
            if (imgInfo) {
                this._runCallback(null, {
                    src: src,
                    width: imgInfo.width,
                    height: imgInfo.height
                });

                //新的未在下载队列中的
            } else if (list.indexOf(src) == -1) {
                list.push(src);
                this.imgLoadList = list;
            }
            this.$apply();
        }

        /** 将图片从下载队列中移除 */

    }, {
        key: 'removeFromLoadList',
        value: function removeFromLoadList(src) {
            var list = this.imgLoadList;
            list.splice(list.indexOf(src), 1);
            this.imgLoadList = list;
        }

        /** 执行回调 */

    }, {
        key: 'runCallback',
        value: function runCallback(err, data) {
            var callback = this.callbacks[data.src] || this.defaultCallback;
            callback(err, data);
            delete this.callbacks[data.src];
        }
    }]);

    return ListAnother;
}(_wepy2.default.component);

exports.default = ListAnother;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1sb2FkZXIuanMiXSwibmFtZXMiOlsiTGlzdEFub3RoZXIiLCJkYXRhIiwiaW1nTG9hZExpc3QiLCJkZWZhdWx0Q2FsbGJhY2siLCJjYWxsYmFja3MiLCJpbWdJbmZvIiwibWV0aG9kcyIsImltZ09uTG9hZCIsImV2Iiwic3JjIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3aWR0aCIsImRldGFpbCIsImhlaWdodCIsInJlbW92ZUZyb21Mb2FkTGlzdCIsInJ1bkNhbGxiYWNrIiwiaW1nT25Mb2FkRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2FsbGJhY2siLCJsaXN0IiwiX3J1bkNhbGxiYWNrIiwiaW5kZXhPZiIsInB1c2giLCIkYXBwbHkiLCJzcGxpY2UiLCJlcnIiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEksR0FBTztBQUNMQyx5QkFBYSxFQURSO0FBRUxDLDZCQUFpQiwyQkFBVSxDQUFFLENBRnhCO0FBR0xDLHVCQUFXLEVBSE47QUFJTEMscUJBQVM7QUFKSixTLFFBT1BDLE8sR0FBVTtBQUNSQyxxQkFEUSxxQkFDRUMsRUFERixFQUNNO0FBQ1Ysb0JBQ0VDLE1BQU1ELEdBQUdFLGFBQUgsQ0FBaUJDLE9BQWpCLENBQXlCRixHQURqQztBQUFBLG9CQUVFRyxRQUFRSixHQUFHSyxNQUFILENBQVVELEtBRnBCO0FBQUEsb0JBR0VFLFNBQVNOLEdBQUdLLE1BQUgsQ0FBVUMsTUFIckI7O0FBS0E7QUFDQSxxQkFBS1QsT0FBTCxDQUFhSSxHQUFiLElBQW9CLEVBQUVHLFlBQUYsRUFBU0UsY0FBVCxFQUFwQjtBQUNBLHFCQUFLQyxrQkFBTCxDQUF3Qk4sR0FBeEI7QUFDQSxxQkFBS08sV0FBTCxDQUFpQixJQUFqQixFQUF1QixFQUFFUCxRQUFGLEVBQU9HLFlBQVAsRUFBY0UsY0FBZCxFQUF2QjtBQUNILGFBWE87QUFZUkcsMEJBWlEsMEJBWU9ULEVBWlAsRUFZVztBQUNmLG9CQUFJQyxNQUFNRCxHQUFHRSxhQUFILENBQWlCQyxPQUFqQixDQUF5QkYsR0FBbkM7QUFDQSxxQkFBS00sa0JBQUwsQ0FBd0JOLEdBQXhCO0FBQ0EscUJBQUtPLFdBQUwsQ0FBaUIsZ0JBQWpCLEVBQW1DLEVBQUVQLFFBQUYsRUFBbkM7QUFDSDtBQWhCTyxTOzs7OztpQ0FtQkE7QUFDTlMsb0JBQVFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNIOzs7NkJBRUlWLEcsRUFBS1csUSxFQUFVO0FBQ2xCLGdCQUFJLENBQUNYLEdBQUwsRUFBVTs7QUFFVixnQkFBSVksT0FBTyxLQUFLbkIsV0FBaEI7QUFBQSxnQkFDSUcsVUFBVSxLQUFLQSxPQUFMLENBQWFJLEdBQWIsQ0FEZDs7QUFHQSxnQkFBSVcsUUFBSixFQUNJLEtBQUtoQixTQUFMLENBQWVLLEdBQWYsSUFBc0JXLFFBQXRCOztBQUVKO0FBQ0EsZ0JBQUlmLE9BQUosRUFBYTtBQUNULHFCQUFLaUIsWUFBTCxDQUFrQixJQUFsQixFQUF3QjtBQUNwQmIseUJBQUtBLEdBRGU7QUFFcEJHLDJCQUFPUCxRQUFRTyxLQUZLO0FBR3BCRSw0QkFBUVQsUUFBUVM7QUFISSxpQkFBeEI7O0FBTUo7QUFDQyxhQVJELE1BUU8sSUFBSU8sS0FBS0UsT0FBTCxDQUFhZCxHQUFiLEtBQXFCLENBQUMsQ0FBMUIsRUFBNkI7QUFDaENZLHFCQUFLRyxJQUFMLENBQVVmLEdBQVY7QUFDQSxxQkFBS1AsV0FBTCxHQUFtQm1CLElBQW5CO0FBQ0g7QUFDRCxpQkFBS0ksTUFBTDtBQUNEOztBQUVEOzs7OzJDQUNtQmhCLEcsRUFBSztBQUNwQixnQkFBSVksT0FBTyxLQUFLbkIsV0FBaEI7QUFDQW1CLGlCQUFLSyxNQUFMLENBQVlMLEtBQUtFLE9BQUwsQ0FBYWQsR0FBYixDQUFaLEVBQStCLENBQS9CO0FBQ0EsaUJBQUtQLFdBQUwsR0FBbUJtQixJQUFuQjtBQUNIOztBQUVEOzs7O29DQUNZTSxHLEVBQUsxQixJLEVBQU07QUFDbkIsZ0JBQUltQixXQUFXLEtBQUtoQixTQUFMLENBQWVILEtBQUtRLEdBQXBCLEtBQTRCLEtBQUtOLGVBQWhEO0FBQ0FpQixxQkFBU08sR0FBVCxFQUFjMUIsSUFBZDtBQUNBLG1CQUFPLEtBQUtHLFNBQUwsQ0FBZUgsS0FBS1EsR0FBcEIsQ0FBUDtBQUNIOzs7O0VBcEVzQ21CLGVBQUtDLFM7O2tCQUF6QjdCLFciLCJmaWxlIjoiaW1nLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0QW5vdGhlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBkYXRhID0ge1xuICAgICAgaW1nTG9hZExpc3Q6IFtdLFxuICAgICAgZGVmYXVsdENhbGxiYWNrOiBmdW5jdGlvbigpe30sXG4gICAgICBjYWxsYmFja3M6IHt9LFxuICAgICAgaW1nSW5mbzoge30sXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGltZ09uTG9hZChldikge1xuICAgICAgICAgIGxldFxuICAgICAgICAgICAgc3JjID0gZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnNyYyxcbiAgICAgICAgICAgIHdpZHRoID0gZXYuZGV0YWlsLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gZXYuZGV0YWlsLmhlaWdodFxuXG4gICAgICAgICAgLy8g6K6w5b2V5bey5LiL6L295Zu+54mH55qE5bC65a+45L+h5oGvXG4gICAgICAgICAgdGhpcy5pbWdJbmZvW3NyY10gPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvYWRMaXN0KHNyYylcbiAgICAgICAgICB0aGlzLnJ1bkNhbGxiYWNrKG51bGwsIHsgc3JjLCB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgICB9LFxuICAgICAgaW1nT25Mb2FkRXJyb3IoZXYpIHtcbiAgICAgICAgICBsZXQgc3JjID0gZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnNyY1xuICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvYWRMaXN0KHNyYylcbiAgICAgICAgICB0aGlzLnJ1bkNhbGxiYWNrKCdMb2FkaW5nIGZhaWxlZCcsIHsgc3JjIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ltZy1sb2FkZXLnu4Tku7bliqDovb3miJDlip9+JylcbiAgICB9XG5cbiAgICBsb2FkKHNyYywgY2FsbGJhY2spIHtcbiAgICAgIGlmICghc3JjKSByZXR1cm47XG5cbiAgICAgIGxldCBsaXN0ID0gdGhpcy5pbWdMb2FkTGlzdCxcbiAgICAgICAgICBpbWdJbmZvID0gdGhpcy5pbWdJbmZvW3NyY11cblxuICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tzW3NyY10gPSBjYWxsYmFja1xuXG4gICAgICAvL+W3sue7j+WKoOi9veaIkOWKn+i/h+eahO+8jOebtOaOpeWbnuiwg1xuICAgICAgaWYgKGltZ0luZm8pIHtcbiAgICAgICAgICB0aGlzLl9ydW5DYWxsYmFjayhudWxsLCB7XG4gICAgICAgICAgICAgIHNyYzogc3JjLFxuICAgICAgICAgICAgICB3aWR0aDogaW1nSW5mby53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWdJbmZvLmhlaWdodFxuICAgICAgICAgIH0pXG5cbiAgICAgIC8v5paw55qE5pyq5Zyo5LiL6L296Zif5YiX5Lit55qEXG4gICAgICB9IGVsc2UgaWYgKGxpc3QuaW5kZXhPZihzcmMpID09IC0xKSB7XG4gICAgICAgICAgbGlzdC5wdXNoKHNyYylcbiAgICAgICAgICB0aGlzLmltZ0xvYWRMaXN0ID0gbGlzdFxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIC8qKiDlsIblm77niYfku47kuIvovb3pmJ/liJfkuK3np7vpmaQgKi9cbiAgICByZW1vdmVGcm9tTG9hZExpc3Qoc3JjKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5pbWdMb2FkTGlzdFxuICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2Yoc3JjKSwgMSlcbiAgICAgICAgdGhpcy5pbWdMb2FkTGlzdCA9IGxpc3RcbiAgICB9XG5cbiAgICAvKiog5omn6KGM5Zue6LCDICovXG4gICAgcnVuQ2FsbGJhY2soZXJyLCBkYXRhKSB7XG4gICAgICAgIGxldCBjYWxsYmFjayA9IHRoaXMuY2FsbGJhY2tzW2RhdGEuc3JjXSB8fCB0aGlzLmRlZmF1bHRDYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhlcnIsIGRhdGEpXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tkYXRhLnNyY11cbiAgICB9XG4gIH1cbiJdfQ==