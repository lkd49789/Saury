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

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchMyBill.__proto__ || Object.getPrototypeOf(searchMyBill)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "creationTimeRange": { "xmlns:v-bind": "", "v-bind:pickerData.once": "creationTimeRange", "v-bind:twoWayTitle.once": "creationTimeRange" }, "creatorUserName": { "v-bind:input.sync": "creatorUserName", "v-bind:inputValue.sync": "creatorUserNameValue", "v-bind:twoWayTitle.once": "creatorUserNameValue" } }, _this.$events = {}, _this.components = {
            creationTimeRange: _pickerDate2.default,
            creatorUserName: _input2.default
        }, _this.data = {
            searchData: {},
            creationTimeRange: {
                title: '申请时间',
                startDateData: '',
                endDateData: ''
            },
            creatorUserName: {
                title: '申请人',
                name: 'creatorUserName',
                warning: false
            },
            creatorUserNameValue: '',
            history_keyWord_case: [],
            searchClentValue: '',
            showPage: true,
            isShowArray: []
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGENOICE');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGENOICE', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGENOICE');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_MANAGENOICE', history);
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
                            var History_KeyWord_ManageNoice = wx.getStorageSync('HISTORY_KEYWORD_MANAGENOICE');
                            if (History_KeyWord_ManageNoice.length >= 20) {
                                History_KeyWord_ManageNoice.splice(History_KeyWord_ManageNoice.length - 1, 1);
                            }
                            History_KeyWord_ManageNoice.unshift(value);
                            History_KeyWord_ManageNoice = (0, _api.myDistinct)(History_KeyWord_ManageNoice);
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGENOICE', History_KeyWord_ManageNoice);
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
        }, _this.watch = {
            creationTimeRange: function creationTimeRange(date) {
                if (!this.searchData.creationTimeRange) {
                    this.searchData.creationTimeRange = {};
                }
                this.searchData.creationTimeRange.startDate = date.startDateData;
                this.searchData.creationTimeRange.endDate = date.endDateData;
                this.$apply();
            },
            creatorUserNameValue: function creatorUserNameValue(value) {
                this.searchData.creatorUserName = value;
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
            var History_KeyWord_ManageNoice = wx.getStorageSync('HISTORY_KEYWORD_MANAGENOICE');
            if (!History_KeyWord_ManageNoice) {
                History_KeyWord_ManageNoice = [];
                wx.setStorageSync('HISTORY_KEYWORD_MANAGENOICE', History_KeyWord_ManageNoice);
            } else {
                this.history_keyWord_case = History_KeyWord_ManageNoice;
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchMyBill , 'pages/modules/invoice/search/searchManageNoice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE1hbmFnZU5vaWNlLmpzIl0sIm5hbWVzIjpbInNlYXJjaE15QmlsbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNyZWF0aW9uVGltZVJhbmdlIiwiY3JlYXRvclVzZXJOYW1lIiwiZGF0YSIsInNlYXJjaERhdGEiLCJ0aXRsZSIsInN0YXJ0RGF0ZURhdGEiLCJlbmREYXRlRGF0YSIsIm5hbWUiLCJ3YXJuaW5nIiwiY3JlYXRvclVzZXJOYW1lVmFsdWUiLCJoaXN0b3J5X2tleVdvcmRfY2FzZSIsInNlYXJjaENsZW50VmFsdWUiLCJzaG93UGFnZSIsImlzU2hvd0FycmF5IiwibWV0aG9kcyIsImFkdmFuY2VkU2VhcmNoU3VibWl0IiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiJGFwcGx5IiwiZGVsZXRJdGVtQWxsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJlIiwidmFsdWUiLCJkZXRhaWwiLCJyZXBsYWNlIiwiZmlsdGVyIiwiSGlzdG9yeV9LZXlXb3JkX01hbmFnZU5vaWNlIiwidW5zaGlmdCIsIndhdGNoIiwiZGF0ZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJpc0hpc3RvcnkiLCJ3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Ozs7Ozs7QUFjTjtvQ0FDWTtBQUNSLGdCQUFJYixRQUFRQyxpQkFBWjtBQUNBLGdCQUFJQyxXQUFXRixNQUFNQSxNQUFNRCxNQUFOLEdBQWUsQ0FBckIsQ0FBZixDQUZRLENBRWdDO0FBQ3hDRyxxQkFBU3JCLElBQVQsQ0FBY3NCLFdBQWQsR0FBNEIsRUFBNUI7QUFDQUQscUJBQVNyQixJQUFULENBQWN1QixPQUFkLEdBQXdCLEtBQXhCO0FBQ0EsZ0JBQUltQyw4QkFBOEJsQyxHQUFHb0IsY0FBSCxDQUFrQiw2QkFBbEIsQ0FBbEM7QUFDQSxnQkFBSSxDQUFDYywyQkFBTCxFQUFrQztBQUM5QkEsOENBQThCLEVBQTlCO0FBQ0FsQyxtQkFBR3FCLGNBQUgsQ0FBa0IsNkJBQWxCLEVBQWlEYSwyQkFBakQ7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS2xELG9CQUFMLEdBQTRCa0QsMkJBQTVCO0FBQ0EscUJBQUssSUFBSVgsS0FBVCxJQUFrQixLQUFLdkMsb0JBQXZCLEVBQTZDO0FBQ3pDLHlCQUFLRyxXQUFMLENBQWlCb0MsS0FBakIsSUFBMEIsS0FBMUI7QUFDSDtBQUNKO0FBQ0QsaUJBQUtmLE1BQUw7QUFDSDs7O2lDQUNRO0FBQ0wsaUJBQUtnQyxTQUFMO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBM0oyQkMsZUFBS0MsSTs7a0JBQTFCekUsWSIsImZpbGUiOiJzZWFyY2hNYW5hZ2VOb2ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7XG4gICAgICAgIG15RGlzdGluY3RcbiAgICB9IGZyb20gJ0AvdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICdAL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJ0AvdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgY3JlYXRpb25UaW1lUmFuZ2UgZnJvbSAnQC9jb21wb25lbnRzL3BpY2tlci9waWNrZXJEYXRlJztcbiAgICBpbXBvcnQgY3JlYXRvclVzZXJOYW1lIGZyb20gJ0AvY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaE15QmlsbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjcmVhdGlvblRpbWVSYW5nZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGlja2VyRGF0YS5vbmNlXCI6XCJjcmVhdGlvblRpbWVSYW5nZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNyZWF0aW9uVGltZVJhbmdlXCJ9LFwiY3JlYXRvclVzZXJOYW1lXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImNyZWF0b3JVc2VyTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiY3JlYXRvclVzZXJOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjcmVhdG9yVXNlck5hbWVWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9e1xuICAgICAgICAgICAgY3JlYXRpb25UaW1lUmFuZ2UsXG4gICAgICAgICAgICBjcmVhdG9yVXNlck5hbWVcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICAgY3JlYXRpb25UaW1lUmFuZ2U6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eUs+ivt+aXtumXtCcsXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlRGF0YTogJycsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZURhdGE6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRvclVzZXJOYW1lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnlLPor7fkuronLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjcmVhdG9yVXNlck5hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0b3JVc2VyTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIGhpc3Rvcnlfa2V5V29yZF9jYXNlOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaENsZW50VmFsdWU6ICcnLFxuICAgICAgICAgICAgc2hvd1BhZ2U6dHJ1ZSxcbiAgICAgICAgICAgIGlzU2hvd0FycmF5OiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGFkdmFuY2VkU2VhcmNoU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hEYXRhKVxuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaQnOe0ouWGheWuue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93UGFnZSgpIHsgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UgPSAhdGhpcy5zaG93UGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0SXRlbUFsbCgpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaYr+WQpuWIoOmZpO+8gScsIC8v5o+Q56S655qE5qCH6aKYLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5YWo6YOo5Y6G5Y+y6K6w5b2VJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzdhN2E3YScsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjNWQ3M2ZhJywgLy/noa7lrprmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRU5PSUNFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFTk9JQ0UnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VOT0lDRScpO1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRU5PSUNFJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uZmlsdGVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTWFuYWdlTm9pY2UgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRU5PSUNFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VOb2ljZS5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX01hbmFnZU5vaWNlLnNwbGljZShIaXN0b3J5X0tleVdvcmRfTWFuYWdlTm9pY2UubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VOb2ljZS51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWFuYWdlTm9pY2UgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VOb2ljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VOT0lDRScsIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VOb2ljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2F0Y2g9e1xuICAgICAgICAgICAgY3JlYXRpb25UaW1lUmFuZ2UoZGF0ZSl7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZVJhbmdlID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWVSYW5nZS5zdGFydERhdGUgPSBkYXRlLnN0YXJ0RGF0ZURhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZVJhbmdlLmVuZERhdGUgPSBkYXRlLmVuZERhdGVEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRvclVzZXJOYW1lVmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRvclVzZXJOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTWFuYWdlTm9pY2UgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRU5PSUNFJyk7XG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9NYW5hZ2VOb2ljZSkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VOb2ljZSA9IFtdO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFTk9JQ0UnLCBIaXN0b3J5X0tleVdvcmRfTWFuYWdlTm9pY2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBIaXN0b3J5X0tleVdvcmRfTWFuYWdlTm9pY2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5pc0hpc3RvcnkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge307XG4gICAgfVxuIl19