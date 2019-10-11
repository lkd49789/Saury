'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _pactDoc = require('./../../../utils/cofig/pactDoc.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pactDoc = function (_wepy$page) {
    _inherits(pactDoc, _wepy$page);

    function pactDoc() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, pactDoc);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pactDoc.__proto__ || Object.getPrototypeOf(pactDoc)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            nodes: '',
            height: 0,
            viewHeight: 0,
            isShowBtn: false
        }, _this.components = {}, _this.methods = {
            backPage: function backPage() {
                var pages = getCurrentPages();
                var currPage = pages[pages.length - 1]; // 当前页
                var prevPage = pages[pages.length - 2]; // 上一个页面
                // 如果存在上一页
                if (prevPage) {
                    // 可以调用上一页的函数
                    prevPage.changeIsAgree(true);
                    wx.navigateBack({
                        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                    });
                }
            }
        }, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(pactDoc, [{
        key: 'onPageScroll',
        value: function onPageScroll(e) {
            if (e.scrollTop >= this.height - this.viewHeight) {
                this.isShowBtn = true;
                this.$apply();
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            wx.getSystemInfo({
                success: function success(res) {
                    _this2.viewHeight = res.screenHeight;
                }
            });
            this.nodes = _pactDoc.text;
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            var _this3 = this;

            wx.createSelectorQuery().select('.container').boundingClientRect(function (rect) {
                _this3.height = rect.height;
                _this3.$apply();
            }).exec();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return pactDoc;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(pactDoc , 'pages/modules/zzbangVip/pactDoc'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY3REb2MuanMiXSwibmFtZXMiOlsicGFjdERvYyIsImRhdGEiLCJub2RlcyIsImhlaWdodCIsInZpZXdIZWlnaHQiLCJpc1Nob3dCdG4iLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImJhY2tQYWdlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdXJyUGFnZSIsImxlbmd0aCIsInByZXZQYWdlIiwiY2hhbmdlSXNBZ3JlZSIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJ3YXRjaCIsImNvbXB1dGVkIiwiZSIsInNjcm9sbFRvcCIsIiRhcHBseSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwic2NyZWVuSGVpZ2h0IiwidGV4dCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiZXhlYyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDakJDLEksR0FBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLG9CQUFRLENBRkw7QUFHSEMsd0JBQVksQ0FIVDtBQUlIQyx1QkFBVztBQUpSLFMsUUFNUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ05DLG9CQURNLHNCQUNLO0FBQ1Asb0JBQUlDLFFBQVFDLGlCQUFaO0FBQ0Esb0JBQUlDLFdBQVdGLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBRk8sQ0FFaUM7QUFDeEMsb0JBQUlDLFdBQVdKLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBSE8sQ0FHaUM7QUFDeEM7QUFDQSxvQkFBSUMsUUFBSixFQUFjO0FBQ1Y7QUFDQUEsNkJBQVNDLGFBQVQsQ0FBdUIsSUFBdkI7QUFDQUMsdUJBQUdDLFlBQUgsQ0FBZ0I7QUFDWkMsK0JBQU8sQ0FESyxDQUNIO0FBREcscUJBQWhCO0FBR0g7QUFDSjtBQWJLLFMsUUFlVkMsSyxHQUFRLEUsUUFDUkMsUSxHQUFXLEU7Ozs7O3FDQUNFQyxDLEVBQUc7QUFDWixnQkFBSUEsRUFBRUMsU0FBRixJQUFlLEtBQUtsQixNQUFMLEdBQWMsS0FBS0MsVUFBdEMsRUFBa0Q7QUFDOUMscUJBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxxQkFBS2lCLE1BQUw7QUFDSDtBQUNKOzs7aUNBQ1E7QUFBQTs7QUFDTFAsZUFBR1EsYUFBSCxDQUFpQjtBQUNiQyx5QkFBUyxzQkFBTztBQUNaLDJCQUFLcEIsVUFBTCxHQUFrQnFCLElBQUlDLFlBQXRCO0FBQ0g7QUFIWSxhQUFqQjtBQUtBLGlCQUFLeEIsS0FBTCxHQUFheUIsYUFBYjtBQUNIOzs7a0NBQ1M7QUFBQTs7QUFDTlosZUFBR2EsbUJBQUgsR0FBeUJDLE1BQXpCLENBQWdDLFlBQWhDLEVBQThDQyxrQkFBOUMsQ0FBaUUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZFLHVCQUFLNUIsTUFBTCxHQUFjNEIsS0FBSzVCLE1BQW5CO0FBQ0EsdUJBQUttQixNQUFMO0FBQ0gsYUFIRCxFQUdHVSxJQUhIO0FBSUg7OztpQ0FDUSxDQUFFOzs7O0VBN0NzQkMsZUFBS0MsSTs7a0JBQXJCbEMsTyIsImZpbGUiOiJwYWN0RG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgdGV4dFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvcGFjdERvYy5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFjdERvYyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBub2RlczogJycsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICB2aWV3SGVpZ2h0OiAwLFxuICAgICAgICAgICAgaXNTaG93QnRuOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmFja1BhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8vIOW9k+WJjemhtVxuICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvLyDkuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlrZjlnKjkuIrkuIDpobVcbiAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul6LCD55So5LiK5LiA6aG155qE5Ye95pWwXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmNoYW5nZUlzQWdyZWUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2ggPSB7fTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgb25QYWdlU2Nyb2xsKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnNjcm9sbFRvcCA+PSB0aGlzLmhlaWdodCAtIHRoaXMudmlld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QnRuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdIZWlnaHQgPSByZXMuc2NyZWVuSGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlcyA9IHRleHQ7XG4gICAgICAgIH07XG4gICAgICAgIG9uUmVhZHkoKSB7XG4gICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcuY29udGFpbmVyJykuYm91bmRpbmdDbGllbnRSZWN0KChyZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSkuZXhlYygpO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==