'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../../utils/cofig/api.js');

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchMyBill = function (_wepy$page) {
    _inherits(searchMyBill, _wepy$page);

    function searchMyBill() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchMyBill);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchMyBill.__proto__ || Object.getPrototypeOf(searchMyBill)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            searchData: {},
            History_KeyWord_Receivables: [],
            searchClentValue: '',
            isShowArray: []
        }, _this.methods = {
            advancedSearchSubmit: function advancedSearchSubmit() {
                if (Object.keys(this.searchData).length !== 0) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    prevPage.data.queryStream = this.searchData;
                    prevPage.data.refresh = true;
                    wx.navigateBack({
                        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                    });
                } else {
                    wx.showToast({
                        title: '没有搜索内容！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false,
                        success: function success(res) {}
                    });
                }
            },
            deletItemAll: function deletItemAll() {
                var _this2 = this;

                wx.showModal({
                    title: '确认是否删除！', //提示的标题,
                    content: '全部历史记录', //提示的内容,
                    showCancel: true, //是否显示取消按钮,
                    cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                    cancelColor: '#7a7a7a', //取消按钮的文字颜色,
                    confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: '#5d73fa', //确定按钮的文字颜色,
                    success: function success(res) {
                        if (res.confirm) {
                            _this2.History_KeyWord_Receivables = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_RECEIVABLES');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_RECEIVABLES', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.History_KeyWord_Receivables.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_RECEIVABLES');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_RECEIVABLES', history);
            },
            longTap: function longTap(index) {
                this.isShowArray = this.isShowArray.map(function (item) {
                    item = false;
                    return item;
                });
                this.isShowArray[index] = true;
                this.$apply();
            },
            history: function history(item) {
                this.searchClentValue = item;
                this.$apply();
            },
            submitSearch: function submitSearch(e) {
                var value = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
                if (value) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    prevPage.data.queryStream.filter = e.detail.value;
                    prevPage.data.refresh = true;
                    wx.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        success: function success() {
                            var History_KeyWord_Receivables = wx.getStorageSync('HISTORY_KEYWORD_RECEIVABLES');
                            if (History_KeyWord_Receivables.length >= 20) {
                                History_KeyWord_Receivables.splice(History_KeyWord_Receivables.length - 1, 1);
                            }
                            History_KeyWord_Receivables.unshift(value);
                            History_KeyWord_Receivables = (0, _api.myDistinct)(History_KeyWord_Receivables);
                            wx.setStorageSync('HISTORY_KEYWORD_RECEIVABLES', History_KeyWord_Receivables);
                        }
                    });
                    this.$apply();
                } else {
                    wx.showToast({
                        title: '搜索为空,请重试！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchMyBill, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_Receivables = wx.getStorageSync('HISTORY_KEYWORD_RECEIVABLES');
            if (!History_KeyWord_Receivables) {
                History_KeyWord_Receivables = [];
                wx.setStorageSync('HISTORY_KEYWORD_RECEIVABLES', History_KeyWord_Receivables);
            } else {
                this.History_KeyWord_Receivables = History_KeyWord_Receivables;
                for (var index in this.History_KeyWord_Receivables) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchMyBill;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchMyBill , 'pages/modules/receivables/search/searchReceivables'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFJlY2VpdmFibGVzLmpzIl0sIm5hbWVzIjpbInNlYXJjaE15QmlsbCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2VhcmNoRGF0YSIsIkhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcyIsInNlYXJjaENsZW50VmFsdWUiLCJpc1Nob3dBcnJheSIsIm1ldGhvZHMiLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJkZWxldEl0ZW1BbGwiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwicmVzIiwiY29uZmlybSIsImhpc3RvcnkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiJGFwcGx5IiwiZGVsZXRJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJsb25nVGFwIiwibWFwIiwiaXRlbSIsInN1Ym1pdFNlYXJjaCIsImUiLCJ2YWx1ZSIsImRldGFpbCIsInJlcGxhY2UiLCJmaWx0ZXIiLCJ1bnNoaWZ0IiwiaXNIaXN0b3J5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztJQUlxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2pCQyxVLEdBQVcsRSxRQUVYQyxJLEdBQU87QUFDSEMsd0JBQVksRUFEVDtBQUVIQyx5Q0FBNkIsRUFGMUI7QUFHSEMsOEJBQWtCLEVBSGY7QUFJSEMseUJBQWE7QUFKVixTLFFBTVBDLE8sR0FBVTtBQUNOQyxnQ0FETSxrQ0FDZ0I7QUFD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QWtCLDZCQUFsQixFQUFpRGxDLDJCQUFqRDtBQUNILGFBSEQsTUFHTztBQUNILHFCQUFLQSwyQkFBTCxHQUFtQ0EsMkJBQW5DO0FBQ0EscUJBQUssSUFBSXFDLEtBQVQsSUFBa0IsS0FBS3JDLDJCQUF2QixFQUFvRDtBQUNoRCx5QkFBS0UsV0FBTCxDQUFpQm1DLEtBQWpCLElBQTBCLEtBQTFCO0FBQ0g7QUFDSjtBQUNELGlCQUFLRixNQUFMO0FBQ0g7OztpQ0FDUTtBQUNMLGlCQUFLYyxTQUFMO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBdkgyQkMsZUFBS0MsSTs7a0JBQTFCdkQsWSIsImZpbGUiOiJzZWFyY2hSZWNlaXZhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7XG4gICAgICAgIG15RGlzdGluY3RcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgZm9ybWF0RGF0ZVxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hNeUJpbGwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb21wb25lbnRzPXtcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfUmVjZWl2YWJsZXM6IFtdLFxuICAgICAgICAgICAgc2VhcmNoQ2xlbnRWYWx1ZTogJycsXG4gICAgICAgICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBhZHZhbmNlZFNlYXJjaFN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaQnOe0ouWGheWuue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaXN0b3J5X0tleVdvcmRfUmVjZWl2YWJsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVDRUlWQUJMRVMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNFSVZBQkxFUycsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNFSVZBQkxFUycpO1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ0VJVkFCTEVTJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uZmlsdGVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfUmVjZWl2YWJsZXMgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ0VJVkFCTEVTJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcy5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX1JlY2VpdmFibGVzLnNwbGljZShIaXN0b3J5X0tleVdvcmRfUmVjZWl2YWJsZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcy51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfUmVjZWl2YWJsZXMgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNFSVZBQkxFUycsIEhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfUmVjZWl2YWJsZXMgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ0VJVkFCTEVTJyk7XG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcykge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9SZWNlaXZhYmxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVDRUlWQUJMRVMnLCBIaXN0b3J5X0tleVdvcmRfUmVjZWl2YWJsZXMpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuSGlzdG9yeV9LZXlXb3JkX1JlY2VpdmFibGVzID0gSGlzdG9yeV9LZXlXb3JkX1JlY2VpdmFibGVzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuSGlzdG9yeV9LZXlXb3JkX1JlY2VpdmFibGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmlzSGlzdG9yeSgpO1xuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=