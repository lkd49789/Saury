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

var searchCost = function (_wepy$page) {
    _inherits(searchCost, _wepy$page);

    function searchCost() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchCost);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchCost.__proto__ || Object.getPrototypeOf(searchCost)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
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
                        mask: false,
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_COST');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_COST', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_COST');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_COST', history);
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
                            var History_KeyWord_Cost = wx.getStorageSync('HISTORY_KEYWORD_COST');
                            if (History_KeyWord_Cost.length >= 20) {
                                History_KeyWord_Cost.splice(History_KeyWord_Cost.length - 1, 1);
                            }
                            History_KeyWord_Cost.unshift(value);
                            History_KeyWord_Cost = (0, _api.myDistinct)(History_KeyWord_Cost);
                            wx.setStorageSync('HISTORY_KEYWORD_COST', History_KeyWord_Cost);
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

    _createClass(searchCost, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_Cost = wx.getStorageSync('HISTORY_KEYWORD_COST');
            if (!History_KeyWord_Cost) {
                History_KeyWord_Cost = [];
                wx.setStorageSync('HISTORY_KEYWORD_COST', History_KeyWord_Cost);
            } else {
                this.history_keyWord_case = History_KeyWord_Cost;
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

    return searchCost;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchCost , 'pages/modules/cost/search/searchCost'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaENvc3QuanMiXSwibmFtZXMiOlsic2VhcmNoQ29zdCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2VhcmNoRGF0YSIsImhpc3Rvcnlfa2V5V29yZF9jYXNlIiwic2VhcmNoQ2xlbnRWYWx1ZSIsInNob3dQYWdlIiwiaXNTaG93QXJyYXkiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGF0ZSIsImRldGFpbCIsInZhbHVlIiwiY3JlYXRpb25UaW1lUmFuZ2UiLCJ0YXJnZXQiLCJpZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCIkYXBwbHkiLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsInF1ZXJ5U3RyZWFtIiwicmVmcmVzaCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiZGVsZXRJdGVtQWxsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJyZXBsYWNlIiwiZmlsdGVyIiwiSGlzdG9yeV9LZXlXb3JkX0Nvc3QiLCJ1bnNoaWZ0IiwiaXNIaXN0b3J5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztJQUlxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxVLEdBQVcsRSxRQUVYQyxJ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QUFMO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBNUl5QkMsZUFBS0MsSTs7a0JBQXhCbEUsVSIsImZpbGUiOiJzZWFyY2hDb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQge1xuICAgICAgICBmb3JtYXREYXRlXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaENvc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb21wb25lbnRzPXtcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICAgICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNob3dQYWdlOnRydWUsXG4gICAgICAgICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZShlKXtcbiAgICAgICAgICAgICAgIHZhciBkYXRlPWUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgaWYoIXRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWVSYW5nZSl7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhWydjcmVhdGlvblRpbWVSYW5nZSddPXt9O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0Q3JlYXRpb25UaW1lUmFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2Uuc3RhcnREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZENyZWF0aW9uVGltZVJhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZVJhbmdlLmVuZERhdGU9ZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkdmFuY2VkU2VhcmNoU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hEYXRhKTtcbiAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnNlYXJjaERhdGEpLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0gdGhpcy5zZWFyY2hEYXRhO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmsqHmnInmkJzntKLlhoXlrrnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7ICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DT1NUJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ09TVCcsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NPU1QnKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DT1NUJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uZmlsdGVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfQ29zdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ09TVCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfQ29zdC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0Nvc3Quc3BsaWNlKEhpc3RvcnlfS2V5V29yZF9Db3N0Lmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ29zdC51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ29zdCA9IG15RGlzdGluY3QoSGlzdG9yeV9LZXlXb3JkX0Nvc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ09TVCcsIEhpc3RvcnlfS2V5V29yZF9Db3N0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyDliKTmlq3liJ3lp4vljJbljoblj7LmlbDmja5cbiAgICAgICAgaXNIaXN0b3J5KCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9Db3N0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DT1NUJyk7XG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9Db3N0KSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0Nvc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NPU1QnLCBIaXN0b3J5X0tleVdvcmRfQ29zdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IEhpc3RvcnlfS2V5V29yZF9Db3N0O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==