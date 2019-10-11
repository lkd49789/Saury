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

var searchCost = function (_wepy$page) {
    _inherits(searchCost, _wepy$page);

    function searchCost() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchCost);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchCost.__proto__ || Object.getPrototypeOf(searchCost)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "creationTimeRange": { "xmlns:v-bind": "", "v-bind:pickerData.once": "creationTimeRange", "v-bind:twoWayTitle.once": "creationTimeRange" }, "creatorUserName": { "v-bind:input.sync": "creatorUserName", "v-bind:inputValue.sync": "creatorUserNameValue", "v-bind:twoWayTitle.once": "creatorUserNameValue" } }, _this.$events = {}, _this.components = {
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
                title: '报销人',
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGECOST');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGECOST', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_MANAGECOST');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_MANAGECOST', history);
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
                            var History_KeyWord_ManageCost = wx.getStorageSync('HISTORY_KEYWORD_MANAGECOST');
                            if (History_KeyWord_ManageCost.length >= 20) {
                                History_KeyWord_ManageCost.splice(History_KeyWord_ManageCost.length - 1, 1);
                            }
                            History_KeyWord_ManageCost.unshift(value);
                            History_KeyWord_ManageCost = (0, _api.myDistinct)(History_KeyWord_ManageCost);
                            wx.setStorageSync('HISTORY_KEYWORD_MANAGECOST', History_KeyWord_ManageCost);
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

    _createClass(searchCost, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_ManageCost = wx.getStorageSync('HISTORY_KEYWORD_MANAGECOST');
            if (!History_KeyWord_ManageCost) {
                History_KeyWord_ManageCost = [];
                wx.setStorageSync('HISTORY_KEYWORD_MANAGECOST', History_KeyWord_ManageCost);
            } else {
                this.history_keyWord_case = History_KeyWord_ManageCost;
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchCost , 'pages/modules/cost/search/searchManageCost'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE1hbmFnZUNvc3QuanMiXSwibmFtZXMiOlsic2VhcmNoQ29zdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNyZWF0aW9uVGltZVJhbmdlIiwiY3JlYXRvclVzZXJOYW1lIiwiZGF0YSIsInNlYXJjaERhdGEiLCJ0aXRsZSIsInN0YXJ0RGF0ZURhdGEiLCJlbmREYXRlRGF0YSIsIm5hbWUiLCJ3YXJuaW5nIiwiY3JlYXRvclVzZXJOYW1lVmFsdWUiLCJoaXN0b3J5X2tleVdvcmRfY2FzZSIsInNlYXJjaENsZW50VmFsdWUiLCJzaG93UGFnZSIsImlzU2hvd0FycmF5IiwibWV0aG9kcyIsImFkdmFuY2VkU2VhcmNoU3VibWl0IiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiJGFwcGx5IiwiZGVsZXRJdGVtQWxsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJlIiwidmFsdWUiLCJkZXRhaWwiLCJyZXBsYWNlIiwiZmlsdGVyIiwiSGlzdG9yeV9LZXlXb3JkX01hbmFnZUNvc3QiLCJ1bnNoaWZ0Iiwid2F0Y2giLCJkYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImlzSGlzdG9yeSIsIndlcHki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TjtvQ0FDWTtBQUNSLGdCQUFJYixRQUFRQyxpQkFBWjtBQUNBLGdCQUFJQyxXQUFXRixNQUFNQSxNQUFNRCxNQUFOLEdBQWUsQ0FBckIsQ0FBZixDQUZRLENBRWdDO0FBQ3hDRyxxQkFBU3JCLElBQVQsQ0FBY3NCLFdBQWQsR0FBNEIsRUFBNUI7QUFDQUQscUJBQVNyQixJQUFULENBQWN1QixPQUFkLEdBQXdCLEtBQXhCO0FBQ0EsZ0JBQUltQyw2QkFBNkJsQyxHQUFHb0IsY0FBSCxDQUFrQiw0QkFBbEIsQ0FBakM7QUFDQSxnQkFBSSxDQUFDYywwQkFBTCxFQUFpQztBQUM3QkEsNkNBQTZCLEVBQTdCO0FBQ0FsQyxtQkFBR3FCLGNBQUgsQ0FBa0IsNEJBQWxCLEVBQWdEYSwwQkFBaEQ7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS2xELG9CQUFMLEdBQTRCa0QsMEJBQTVCO0FBQ0EscUJBQUssSUFBSVgsS0FBVCxJQUFrQixLQUFLdkMsb0JBQXZCLEVBQTZDO0FBQ3pDLHlCQUFLRyxXQUFMLENBQWlCb0MsS0FBakIsSUFBMEIsS0FBMUI7QUFDSDtBQUNKO0FBQ0QsaUJBQUtmLE1BQUw7QUFDSDs7O2lDQUNRO0FBQ0wsaUJBQUtnQyxTQUFMO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBM0p5QkMsZUFBS0MsSTs7a0JBQXhCekUsVSIsImZpbGUiOiJzZWFyY2hNYW5hZ2VDb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnQC91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBhamF4IGZyb20gJ0AvdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgZm9ybWF0RGF0ZVxuICAgIH0gZnJvbSAnQC91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBjcmVhdGlvblRpbWVSYW5nZSBmcm9tICdAL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlckRhdGUnO1xuICAgIGltcG9ydCBjcmVhdG9yVXNlck5hbWUgZnJvbSAnQC9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ29zdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjcmVhdGlvblRpbWVSYW5nZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGlja2VyRGF0YS5vbmNlXCI6XCJjcmVhdGlvblRpbWVSYW5nZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNyZWF0aW9uVGltZVJhbmdlXCJ9LFwiY3JlYXRvclVzZXJOYW1lXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImNyZWF0b3JVc2VyTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiY3JlYXRvclVzZXJOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjcmVhdG9yVXNlck5hbWVWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9e1xuICAgICAgICAgICAgY3JlYXRpb25UaW1lUmFuZ2UsXG4gICAgICAgICAgICBjcmVhdG9yVXNlck5hbWVcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICAgY3JlYXRpb25UaW1lUmFuZ2U6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eUs+ivt+aXtumXtCcsXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlRGF0YTogJycsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZURhdGE6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRvclVzZXJOYW1lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmiqXplIDkuronLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjcmVhdG9yVXNlck5hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0b3JVc2VyTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIGhpc3Rvcnlfa2V5V29yZF9jYXNlOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaENsZW50VmFsdWU6ICcnLFxuICAgICAgICAgICAgc2hvd1BhZ2U6dHJ1ZSxcbiAgICAgICAgICAgIGlzU2hvd0FycmF5OiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGFkdmFuY2VkU2VhcmNoU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hEYXRhKTtcbiAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnNlYXJjaERhdGEpLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0gdGhpcy5zZWFyY2hEYXRhO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmsqHmnInmkJzntKLlhoXlrrnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7ICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VDT1NUJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFQ09TVCcsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX01BTkFHRUNPU1QnKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VDT1NUJywgaGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZ1RhcChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeShpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hDbGVudFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uZmlsdGVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTWFuYWdlQ29zdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFQ09TVCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfTWFuYWdlQ29zdC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX01hbmFnZUNvc3Quc3BsaWNlKEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VDb3N0Lmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWFuYWdlQ29zdC51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfTWFuYWdlQ29zdCA9IG15RGlzdGluY3QoSGlzdG9yeV9LZXlXb3JkX01hbmFnZUNvc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFQ09TVCcsIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VDb3N0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaD17XG4gICAgICAgICAgICBjcmVhdGlvblRpbWVSYW5nZShkYXRlKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWVSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2UgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZVJhbmdlLnN0YXJ0RGF0ZSA9IGRhdGUuc3RhcnREYXRlRGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2UuZW5kRGF0ZSA9IGRhdGUuZW5kRGF0ZURhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdG9yVXNlck5hbWVWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5jcmVhdG9yVXNlck5hbWU9dmFsdWU7XG4gICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfTWFuYWdlQ29zdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfTUFOQUdFQ09TVCcpO1xuICAgICAgICAgICAgaWYgKCFIaXN0b3J5X0tleVdvcmRfTWFuYWdlQ29zdCkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9NYW5hZ2VDb3N0ID0gW107XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9NQU5BR0VDT1NUJywgSGlzdG9yeV9LZXlXb3JkX01hbmFnZUNvc3QpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBIaXN0b3J5X0tleVdvcmRfTWFuYWdlQ29zdDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmlzSGlzdG9yeSgpO1xuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=