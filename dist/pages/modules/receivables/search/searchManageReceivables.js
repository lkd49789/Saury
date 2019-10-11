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

var _pickerDate = require('./../../../../components/picker/pickerDate.js');

var _pickerDate2 = _interopRequireDefault(_pickerDate);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchMyBill.__proto__ || Object.getPrototypeOf(searchMyBill)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "creationTimeRange": { "xmlns:v-bind": "", "v-bind:pickerData.once": "creationTimeRange", "v-bind:twoWayTitle.once": "creationTimeRange" } }, _this.$events = {}, _this.components = {
            creationTimeRange: _pickerDate2.default
        }, _this.data = {
            searchData: {},
            creationTimeRange: {
                title: '收款日期',
                startDateData: '',
                endDateData: ''
            },
            History_KeyWord_ManageReceivables: [],
            searchClentValue: '',
            isShowArray: [],
            showPage: true
        }, _this.watch = {
            creationTimeRange: function creationTimeRange(date) {
                if (!this.searchData.creationTimeRange) {
                    this.searchData.creationTimeRange = {};
                }
                this.searchData.creationTimeRange.startDate = date.startDateData;
                this.searchData.creationTimeRange.endDate = date.endDateData;
            }
        }, _this.methods = {
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
                            _this2.History_KeyWord_ManageReceivables = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.History_KeyWord_ManageReceivables.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES', history);
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
                            var History_KeyWord_ManageReceivables = wx.getStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES');
                            if (History_KeyWord_ManageReceivables.length >= 20) {
                                History_KeyWord_ManageReceivables.splice(History_KeyWord_ManageReceivables.length - 1, 1);
                            }
                            History_KeyWord_ManageReceivables.unshift(value);
                            History_KeyWord_ManageReceivables = (0, _api.myDistinct)(History_KeyWord_ManageReceivables);
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES', History_KeyWord_ManageReceivables);
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
            },
            showPage: function showPage() {
                this.showPage = !this.showPage;
                this.$apply();
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
            var History_KeyWord_ManageReceivables = wx.getStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES');
            if (!History_KeyWord_ManageReceivables) {
                History_KeyWord_ManageReceivables = [];
                wx.setStorageSync('HISTORY_KEYWORD_MANAGERECEIVABLES', History_KeyWord_ManageReceivables);
            } else {
                this.History_KeyWord_ManageReceivables = History_KeyWord_ManageReceivables;
                for (var index in this.History_KeyWord_ManageReceivables) {
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchMyBill , 'pages/modules/receivables/search/searchManageReceivables'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE1hbmFnZVJlY2VpdmFibGVzLmpzIl0sIm5hbWVzIjpbInNlYXJjaE15QmlsbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNyZWF0aW9uVGltZVJhbmdlIiwiZGF0YSIsInNlYXJjaERhdGEiLCJ0aXRsZSIsInN0YXJ0RGF0ZURhdGEiLCJlbmREYXRlRGF0YSIsIkhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcyIsInNlYXJjaENsZW50VmFsdWUiLCJpc1Nob3dBcnJheSIsInNob3dQYWdlIiwid2F0Y2giLCJkYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1ldGhvZHMiLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsInF1ZXJ5U3RyZWFtIiwicmVmcmVzaCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImRlbGV0SXRlbUFsbCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJyZXMiLCJjb25maXJtIiwiaGlzdG9yeSIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJkZWxldEl0ZW0iLCJpbmRleCIsInNwbGljZSIsImxvbmdUYXAiLCJtYXAiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwiZSIsInZhbHVlIiwiZGV0YWlsIiwicmVwbGFjZSIsImZpbHRlciIsInVuc2hpZnQiLCJpc0hpc3RvcnkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7OztBQUlBOzs7Ozs7Ozs7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QUFJMkMsS0FBVCxJQUFrQixLQUFLM0MsaUNBQXZCLEVBQTBEO0FBQ3RELHlCQUFLRSxXQUFMLENBQWlCeUMsS0FBakIsSUFBMEIsS0FBMUI7QUFDSDtBQUNKO0FBQ0QsaUJBQUtGLE1BQUw7QUFDSDs7O2lDQUNRO0FBQ0wsaUJBQUtjLFNBQUw7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUFoSjJCQyxlQUFLQyxJOztrQkFBMUJwRSxZIiwiZmlsZSI6InNlYXJjaE1hbmFnZVJlY2VpdmFibGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnQC91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBhamF4IGZyb20gJ0AvdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgZm9ybWF0RGF0ZVxuICAgIH0gZnJvbSAnQC91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBjcmVhdGlvblRpbWVSYW5nZSBmcm9tICdAL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlckRhdGUnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaE15QmlsbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjcmVhdGlvblRpbWVSYW5nZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGlja2VyRGF0YS5vbmNlXCI6XCJjcmVhdGlvblRpbWVSYW5nZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNyZWF0aW9uVGltZVJhbmdlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XG4gICAgICAgICAgICBjcmVhdGlvblRpbWVSYW5nZVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzZWFyY2hEYXRhOiB7fSxcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZVJhbmdlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmlLbmrL7ml6XmnJ8nLFxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZURhdGE6ICcnLFxuICAgICAgICAgICAgICAgIGVuZERhdGVEYXRhOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlczogW10sXG4gICAgICAgICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGlzU2hvd0FycmF5OiBbXSxcbiAgICAgICAgICAgIHNob3dQYWdlOnRydWVcbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBjcmVhdGlvblRpbWVSYW5nZShkYXRlKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWVSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2UgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZVJhbmdlLnN0YXJ0RGF0ZSA9IGRhdGUuc3RhcnREYXRlRGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2UuZW5kRGF0ZSA9IGRhdGUuZW5kRGF0ZURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGFkdmFuY2VkU2VhcmNoU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hEYXRhKVxuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaQnOe0ouWGheWuue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaXN0b3J5X0tleVdvcmRfTWFuYWdlUmVjZWl2YWJsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFUkVDRUlWQUJMRVMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VSRUNFSVZBQkxFUycsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VSRUNFSVZBQkxFUycpO1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRVJFQ0VJVkFCTEVTJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uZmlsdGVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTWFuYWdlUmVjZWl2YWJsZXMgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRVJFQ0VJVkFCTEVTJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcy5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX01hbmFnZVJlY2VpdmFibGVzLnNwbGljZShIaXN0b3J5X0tleVdvcmRfTWFuYWdlUmVjZWl2YWJsZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcy51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWFuYWdlUmVjZWl2YWJsZXMgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VSRUNFSVZBQkxFUycsIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93UGFnZSgpIHsgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UgPSAhdGhpcy5zaG93UGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICB9O1xuICAgICAgICAvLyDliKTmlq3liJ3lp4vljJbljoblj7LmlbDmja5cbiAgICAgICAgaXNIaXN0b3J5KCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFUkVDRUlWQUJMRVMnKTtcbiAgICAgICAgICAgIGlmICghSGlzdG9yeV9LZXlXb3JkX01hbmFnZVJlY2VpdmFibGVzKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX01hbmFnZVJlY2VpdmFibGVzID0gW107XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VSRUNFSVZBQkxFUycsIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VSZWNlaXZhYmxlcylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5IaXN0b3J5X0tleVdvcmRfTWFuYWdlUmVjZWl2YWJsZXMgPSBIaXN0b3J5X0tleVdvcmRfTWFuYWdlUmVjZWl2YWJsZXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5IaXN0b3J5X0tleVdvcmRfTWFuYWdlUmVjZWl2YWJsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==