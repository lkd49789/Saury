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
            history_keyWord_case: [],
            searchClentValue: '',
            showPage: true,
            isShowArray: []
        }, _this.methods = {
            bindDateChange: function bindDateChange(e) {
                var date = e.detail.value;
                if (!this.searchData.creationTimeRange) {
                    this.searchData['creationTimeRange'] = {};
                }
                switch (e.target.id) {
                    case 'startCreationTimeRange':
                        this.searchData.creationTimeRange.startDate = date;
                        break;
                    case 'endCreationTimeRange':
                        this.searchData.creationTimeRange.endDate = date;
                        break;
                }
                this.$apply();
            },
            advancedSearchSubmit: function advancedSearchSubmit() {
                console.log(this.searchData);
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
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            },
            showPage: function showPage() {
                this.showPage = !this.showPage;
                this.$apply();
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
                            _this2.history_keyWord_case = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_MYNOICE');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_MYNOICE', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_MYNOICE');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_MYNOICE', history);
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
                            var History_KeyWord_MyNoice = wx.getStorageSync('HISTORY_KEYWORD_MYNOICE');
                            if (History_KeyWord_MyNoice.length >= 20) {
                                History_KeyWord_MyNoice.splice(History_KeyWord_MyNoice.length - 1, 1);
                            }
                            History_KeyWord_MyNoice.unshift(value);
                            History_KeyWord_MyNoice = (0, _api.myDistinct)(History_KeyWord_MyNoice);
                            wx.setStorageSync('HISTORY_KEYWORD_MYNOICE', History_KeyWord_MyNoice);
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
            var History_KeyWord_MyNoice = wx.getStorageSync('HISTORY_KEYWORD_MYNOICE');
            if (!History_KeyWord_MyNoice) {
                History_KeyWord_MyNoice = [];
                wx.setStorageSync('HISTORY_KEYWORD_MYNOICE', History_KeyWord_MyNoice);
            } else {
                this.history_keyWord_case = History_KeyWord_MyNoice;
                for (var index in this.history_keyWord_case) {
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchMyBill , 'pages/modules/invoice/search/searchMyNoice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE15Tm9pY2UuanMiXSwibmFtZXMiOlsic2VhcmNoTXlCaWxsIiwiY29tcG9uZW50cyIsImRhdGEiLCJzZWFyY2hEYXRhIiwiaGlzdG9yeV9rZXlXb3JkX2Nhc2UiLCJzZWFyY2hDbGVudFZhbHVlIiwic2hvd1BhZ2UiLCJpc1Nob3dBcnJheSIsIm1ldGhvZHMiLCJiaW5kRGF0ZUNoYW5nZSIsImUiLCJkYXRlIiwiZGV0YWlsIiwidmFsdWUiLCJjcmVhdGlvblRpbWVSYW5nZSIsInRhcmdldCIsImlkIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIiRhcHBseSIsImFkdmFuY2VkU2VhcmNoU3VibWl0IiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJkZWxldEl0ZW1BbGwiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwicmVzIiwiY29uZmlybSIsImhpc3RvcnkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiZGVsZXRJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJsb25nVGFwIiwibWFwIiwiaXRlbSIsInN1Ym1pdFNlYXJjaCIsInJlcGxhY2UiLCJmaWx0ZXIiLCJIaXN0b3J5X0tleVdvcmRfTXlOb2ljZSIsInVuc2hpZnQiLCJpc0hpc3RvcnkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLFUsR0FBVyxF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QUNMLGlCQUFLNkMsU0FBTDtBQUNIOzs7aUNBQ1EsQ0FBRTs7OztFQTVJMkJDLGVBQUtDLEk7O2tCQUExQmxFLFkiLCJmaWxlIjoic2VhcmNoTXlOb2ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7XG4gICAgICAgIG15RGlzdGluY3RcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgZm9ybWF0RGF0ZVxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hNeUJpbGwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb21wb25lbnRzPXtcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICAgICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNob3dQYWdlOnRydWUsXG4gICAgICAgICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZShlKXtcbiAgICAgICAgICAgICAgIHZhciBkYXRlPWUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgaWYoIXRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWVSYW5nZSl7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhWydjcmVhdGlvblRpbWVSYW5nZSddPXt9O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0Q3JlYXRpb25UaW1lUmFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2Uuc3RhcnREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZENyZWF0aW9uVGltZVJhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZVJhbmdlLmVuZERhdGU9ZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkdmFuY2VkU2VhcmNoU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hEYXRhKTtcbiAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnNlYXJjaERhdGEpLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0gdGhpcy5zZWFyY2hEYXRhO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmsqHmnInmkJzntKLlhoXlrrnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7ICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NWU5PSUNFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlOT0lDRScsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01ZTk9JQ0UnKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NWU5PSUNFJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uZmlsdGVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTXlOb2ljZSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlOT0lDRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfTXlOb2ljZS5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX015Tm9pY2Uuc3BsaWNlKEhpc3RvcnlfS2V5V29yZF9NeU5vaWNlLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTXlOb2ljZS51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTXlOb2ljZSA9IG15RGlzdGluY3QoSGlzdG9yeV9LZXlXb3JkX015Tm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTVlOT0lDRScsIEhpc3RvcnlfS2V5V29yZF9NeU5vaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyDliKTmlq3liJ3lp4vljJbljoblj7LmlbDmja5cbiAgICAgICAgaXNIaXN0b3J5KCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9NeU5vaWNlID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NWU5PSUNFJyk7XG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9NeU5vaWNlKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX015Tm9pY2UgPSBbXTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01ZTk9JQ0UnLCBIaXN0b3J5X0tleVdvcmRfTXlOb2ljZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IEhpc3RvcnlfS2V5V29yZF9NeU5vaWNlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==