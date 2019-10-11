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

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchApply = function (_wepy$page) {
    _inherits(searchApply, _wepy$page);

    function searchApply() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchApply);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchApply.__proto__ || Object.getPrototypeOf(searchApply)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Status": { "xmlns:v-bind": "", "v-bind:options.sync": "Status", "v-bind:index.sync": "StatusIndex", "v-bind:twoWayTitle.once": "StatusIndex" }, "VacationType": { "v-bind:options.sync": "VacationType", "v-bind:index.sync": "VacationTypeIndex", "v-bind:twoWayTitle.once": "VacationTypeIndex" } }, _this.$events = {}, _this.components = {
            Status: _option2.default,
            VacationType: _option2.default
        }, _this.data = {
            searchData: {},
            // 状态
            Status: {
                title: '状态',
                name: 'Status',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            StatusIndex: 0,
            // 请假类型
            VacationType: {
                title: '请假类型',
                name: 'VacationType',
                value: [],
                displayText: ['请选择'],
                warning: false
            },
            VacationTypeIndex: 0,
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
                        this.searchData.creationTimeRange.StartDate = date;
                        break;
                    case 'endCreationTimeRange':
                        this.searchData.creationTimeRange.EndDate = date;
                        break;
                }
                this.$apply();
            },
            advancedSearchSubmit: function advancedSearchSubmit() {
                if (Object.keys(this.searchData).length !== 0) {
                    var pages = getCurrentPages();
                    console.log(pages);
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_APPLY');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_APPLY', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_APPLY');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_APPLY', history);
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
                    console.log(prevPage);
                    prevPage.data.queryStream.Keyword = e.detail.value;
                    prevPage.data.refresh = true;
                    wx.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        success: function success() {
                            var History_KeyWord_Apply = wx.getStorageSync('HISTORY_KEYWORD_APPLY');
                            if (History_KeyWord_Apply.length >= 20) {
                                History_KeyWord_Apply.splice(History_KeyWord_Apply.length - 1, 1);
                            }
                            History_KeyWord_Apply.unshift(value);
                            History_KeyWord_Apply = (0, _api.myDistinct)(History_KeyWord_Apply);
                            wx.setStorageSync('HISTORY_KEYWORD_APPLY', History_KeyWord_Apply);
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
            StatusIndex: function StatusIndex(index) {
                this.searchData.Status = this.Status.value[index - 1];
                this.$apply();
            },
            VacationTypeIndex: function VacationTypeIndex(index) {
                this.searchData.VacationType = this.VacationType.value[index - 1];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchApply, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_Apply = wx.getStorageSync('HISTORY_KEYWORD_APPLY');
            if (!History_KeyWord_Apply) {
                History_KeyWord_Apply = [];
                wx.setStorageSync('HISTORY_KEYWORD_APPLY', History_KeyWord_Apply);
            } else {
                this.history_keyWord_case = History_KeyWord_Apply;
                for (var index in this.history_keyWord_case) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
    }, {
        key: 'GetGeneralCodeComboboxItems',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var resData, GetGeneralCodeComboboxItems, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboboxItems', 'POST', { id: id });

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    GetGeneralCodeComboboxItems = resData.data.result;

                                    if (id == "QJ") {
                                        for (index in GetGeneralCodeComboboxItems) {
                                            this.VacationType.value.push(GetGeneralCodeComboboxItems[index].value);
                                            this.VacationType.displayText.push(GetGeneralCodeComboboxItems[index].displayText);
                                        }
                                    } else if (id == "DESZT") {
                                        for (index in GetGeneralCodeComboboxItems) {
                                            this.Status.value.push(GetGeneralCodeComboboxItems[index].value);
                                            this.Status.displayText.push(GetGeneralCodeComboboxItems[index].displayText);
                                        }
                                    }
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetGeneralCodeComboboxItems(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralCodeComboboxItems;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetGeneralCodeComboboxItems('QJ');
            this.GetGeneralCodeComboboxItems('DESZT');
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchApply;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchApply , 'pages/modules/myApplyList/search/searchMyApply'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaE15QXBwbHkuanMiXSwibmFtZXMiOlsic2VhcmNoQXBwbHkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGF0dXMiLCJWYWNhdGlvblR5cGUiLCJkYXRhIiwic2VhcmNoRGF0YSIsInRpdGxlIiwibmFtZSIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJ3YXJuaW5nIiwiU3RhdHVzSW5kZXgiLCJWYWNhdGlvblR5cGVJbmRleCIsImhpc3Rvcnlfa2V5V29yZF9jYXNlIiwic2VhcmNoQ2xlbnRWYWx1ZSIsInNob3dQYWdlIiwiaXNTaG93QXJyYXkiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGF0ZSIsImRldGFpbCIsImNyZWF0aW9uVGltZVJhbmdlIiwidGFyZ2V0IiwiaWQiLCJTdGFydERhdGUiLCJFbmREYXRlIiwiJGFwcGx5IiwiYWR2YW5jZWRTZWFyY2hTdWJtaXQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjb25zb2xlIiwibG9nIiwicHJldlBhZ2UiLCJxdWVyeVN0cmVhbSIsInJlZnJlc2giLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJkZWxldEl0ZW1BbGwiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwicmVzIiwiY29uZmlybSIsImhpc3RvcnkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiZGVsZXRJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJsb25nVGFwIiwibWFwIiwiaXRlbSIsInN1Ym1pdFNlYXJjaCIsInJlcGxhY2UiLCJLZXl3b3JkIiwiSGlzdG9yeV9LZXlXb3JkX0FwcGx5IiwidW5zaGlmdCIsIndhdGNoIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsIkdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcyIsInJlc3VsdCIsInB1c2giLCJpc0hpc3RvcnkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixRQUF6QyxFQUFrRCxxQkFBb0IsYUFBdEUsRUFBb0YsMkJBQTBCLGFBQTlHLEVBQVYsRUFBdUksZ0JBQWUsRUFBQyx1QkFBc0IsY0FBdkIsRUFBc0MscUJBQW9CLG1CQUExRCxFQUE4RSwyQkFBMEIsbUJBQXhHLEVBQXRKLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFXO0FBQ0FDLG9DQURBO0FBRUFDO0FBRkEsUyxRQUlKQyxJLEdBQU87QUFDSEMsd0JBQVksRUFEVDtBQUVIO0FBQ0FILG9CQUFRO0FBQ0pJLHVCQUFPLElBREg7QUFFSkMsc0JBQU0sUUFGRjtBQUdKQyx1QkFBTyxFQUhIO0FBSUpDLDZCQUFhLENBQ1QsS0FEUyxDQUpUO0FBT0pDLHlCQUFTO0FBUEwsYUFITDtBQVlIQyx5QkFBYSxDQVpWO0FBYUg7QUFDQVIsMEJBQWM7QUFDVkcsdUJBQU8sTUFERztBQUVWQyxzQkFBTSxjQUZJO0FBR1ZDLHVCQUFPLEVBSEc7QUFJVkMsNkJBQWEsQ0FDUixLQURRLENBSkg7QUFPVkMseUJBQVM7QUFQQyxhQWRYO0FBdUJIRSwrQkFBbUIsQ0F2QmhCO0FBd0JIQyxrQ0FBc0IsRUF4Qm5CO0FBeUJIQyw4QkFBa0IsRUF6QmY7QUEwQkhDLHNCQUFTLElBMUJOO0FBMkJIQyx5QkFBYTtBQTNCVixTLFFBNkJQQyxPLEdBQVU7QUFDTkMsMEJBRE0sMEJBQ1NDLENBRFQsRUFDVztBQUNkLG9CQUFJQyxPQUFLRCxF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QUFMLENBQWlDLElBQWpDO0FBQ0EsaUJBQUtBLDJCQUFMLENBQWlDLE9BQWpDO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBMU0wQkksZUFBS0MsSTs7a0JBQXpCcEYsVyIsImZpbGUiOiJzZWFyY2hNeUFwcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQge1xuICAgICAgICBmb3JtYXREYXRlXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBTdGF0dXMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgVmFjYXRpb25UeXBlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQXBwbHkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiU3RhdHVzXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIlN0YXR1c1wiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIlN0YXR1c0luZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiU3RhdHVzSW5kZXhcIn0sXCJWYWNhdGlvblR5cGVcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJWYWNhdGlvblR5cGVcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJWYWNhdGlvblR5cGVJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlZhY2F0aW9uVHlwZUluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XG4gICAgICAgICAgICBTdGF0dXMsXG4gICAgICAgICAgICBWYWNhdGlvblR5cGVcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICAvLyDnirbmgIFcbiAgICAgICAgICAgIFN0YXR1czoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn54q25oCBJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3RhdHVzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcbiAgICAgICAgICAgICAgICAgICAgJ+ivt+mAieaLqSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU3RhdHVzSW5kZXg6IDAsXG4gICAgICAgICAgICAvLyDor7flgYfnsbvlnotcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YGH57G75Z6LJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVmFjYXRpb25UeXBlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICfor7fpgInmi6knXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZUluZGV4OiAwLFxuICAgICAgICAgICAgaGlzdG9yeV9rZXlXb3JkX2Nhc2U6IFtdLFxuICAgICAgICAgICAgc2VhcmNoQ2xlbnRWYWx1ZTogJycsXG4gICAgICAgICAgICBzaG93UGFnZTp0cnVlLFxuICAgICAgICAgICAgaXNTaG93QXJyYXk6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICB2YXIgZGF0ZT1lLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgIGlmKCF0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lUmFuZ2Upe1xuICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YVsnY3JlYXRpb25UaW1lUmFuZ2UnXT17fTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICBjYXNlICdzdGFydENyZWF0aW9uVGltZVJhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZVJhbmdlLlN0YXJ0RGF0ZT1kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICBjYXNlICdlbmRDcmVhdGlvblRpbWVSYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWVSYW5nZS5FbmREYXRlPWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZHZhbmNlZFNlYXJjaFN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoIT09MCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0gdGhpcy5zZWFyY2hEYXRhO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmsqHmnInmkJzntKLlhoXlrrnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7ICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlID0gIXRoaXMuc2hvd1BhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBMWScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0FQUExZJywgaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0SXRlbShpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQVBQTFknKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBMWScsIGhpc3RvcnkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvbmdUYXAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5ID0gdGhpcy5pc1Nob3dBcnJheS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2xlbnRWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2UGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0uS2V5d29yZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEsIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX0FwcGx5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBMWScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfQXBwbHkubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9BcHBseS5zcGxpY2UoSGlzdG9yeV9LZXlXb3JkX0FwcGx5Lmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQXBwbHkudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0FwcGx5ID0gbXlEaXN0aW5jdChIaXN0b3J5X0tleVdvcmRfQXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQVBQTFknLCBIaXN0b3J5X0tleVdvcmRfQXBwbHkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aQnOe0ouS4uuepuizor7fph43or5XvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgU3RhdHVzSW5kZXgoaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5TdGF0dXM9dGhpcy5TdGF0dXMudmFsdWVbaW5kZXgtMV07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBWYWNhdGlvblR5cGVJbmRleChpbmRleCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLlZhY2F0aW9uVHlwZT10aGlzLlZhY2F0aW9uVHlwZS52YWx1ZVtpbmRleC0xXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfQXBwbHkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0FQUExZJyk7XG4gICAgICAgICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9BcHBseSkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9BcHBseSA9IFtdO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQVBQTFknLCBIaXN0b3J5X0tleVdvcmRfQXBwbHkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBIaXN0b3J5X0tleVdvcmRfQXBwbHk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKGlkKXtcbiAgICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMnLFxuICAgICAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICAgICB7aWR9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICAgICAgICAgIHZhciBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXM9cmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihpZD09XCJRSlwiKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlZhY2F0aW9uVHlwZS52YWx1ZS5wdXNoKEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtc1tpbmRleF0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVmFjYXRpb25UeXBlLmRpc3BsYXlUZXh0LnB1c2goR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zW2luZGV4XS5kaXNwbGF5VGV4dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoaWQ9PVwiREVTWlRcIil7XG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggaW4gR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMudmFsdWUucHVzaChHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXNbaW5kZXhdLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cy5kaXNwbGF5VGV4dC5wdXNoKEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtc1tpbmRleF0uZGlzcGxheVRleHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmlzSGlzdG9yeSgpO1xuICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMoJ1FKJylcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zKCdERVNaVCcpXG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==