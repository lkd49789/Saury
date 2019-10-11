'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../../../utils/cofig/api.js');

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchApplyAudit = function (_wepy$page) {
    _inherits(searchApplyAudit, _wepy$page);

    function searchApplyAudit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchApplyAudit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchApplyAudit.__proto__ || Object.getPrototypeOf(searchApplyAudit)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "EName": { "xmlns:v-bind": "", "v-bind:input.sync": "EName", "v-bind:inputValue.sync": "ENameValue", "v-bind:twoWayTitle.once": "ENameValue" }, "DepartmentId": { "v-bind:options.sync": "DepartmentId", "v-bind:index.sync": "DepartmentIdIndex", "v-bind:twoWayTitle.once": "DepartmentIdIndex" }, "VacationType": { "v-bind:options.sync": "VacationType", "v-bind:index.sync": "VacationTypeIndex", "v-bind:twoWayTitle.once": "VacationTypeIndex" } }, _this.$events = {}, _this.components = {
            EName: _input2.default,
            DepartmentId: _option2.default,
            VacationType: _option2.default
        }, _this.data = {
            //姓名
            EName: {
                title: '姓名',
                name: 'EName',
                warning: false
            },
            ENameValue: '',
            // 部门
            DepartmentId: {
                title: '部门',
                name: 'DepartmentId',
                value: [],
                displayText: [],
                warning: false
            },
            DepartmentIdIndex: -1,
            // 请假类型
            VacationType: {
                title: '请假类型',
                name: 'VacationType',
                value: [],
                displayText: [],
                warning: false
            },
            VacationTypeIndex: -1,
            searchData: {},
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
                            var history = wx.getStorageSync('HISTORY_KEYWORD_APPLYAUDIT');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_APPLYAUDIT', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_case.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_APPLYAUDIT');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_APPLYAUDIT', history);
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
                    prevPage.data.queryStream.Keyword = e.detail.value;
                    prevPage.data.refresh = true;
                    wx.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        success: function success() {
                            var History_KeyWord_ApplyAudit = wx.getStorageSync('HISTORY_KEYWORD_APPLYAUDIT');
                            if (History_KeyWord_ApplyAudit.length >= 20) {
                                History_KeyWord_ApplyAudit.splice(History_KeyWord_ApplyAudit.length - 1, 1);
                            }
                            History_KeyWord_ApplyAudit.unshift(value);
                            History_KeyWord_ApplyAudit = (0, _api.myDistinct)(History_KeyWord_ApplyAudit);
                            wx.setStorageSync('HISTORY_KEYWORD_APPLYAUDIT', History_KeyWord_ApplyAudit);
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
            ENameValue: function ENameValue(value) {
                this.searchData.EName = value;
                this.$apply();
            },
            DepartmentIdIndex: function DepartmentIdIndex(index) {
                this.searchData.DepartmentId = this.DepartmentId.value[index];
                this.$apply();
            },
            VacationTypeIndex: function VacationTypeIndex(index) {
                this.searchData.VacationType = this.VacationType.value[index];
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchApplyAudit, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_ApplyAudit = wx.getStorageSync('HISTORY_KEYWORD_APPLYAUDIT');
            if (!History_KeyWord_ApplyAudit) {
                History_KeyWord_ApplyAudit = [];
                wx.setStorageSync('HISTORY_KEYWORD_APPLYAUDIT', History_KeyWord_ApplyAudit);
            } else {
                this.history_keyWord_case = History_KeyWord_ApplyAudit;
                for (var index in this.history_keyWord_case) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
        //部门

    }, {
        key: 'GetOrganizations',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, GetOrganizations, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetOrganizations', 'POST');

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    GetOrganizations = resData.data.result;

                                    for (index in GetOrganizations) {
                                        this.DepartmentId.value[index] = GetOrganizations[index].id;
                                        this.DepartmentId.displayText[index] = GetOrganizations[index].displayName;
                                    }
                                    this.$apply();
                                }
                                console.log(resData);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetOrganizations() {
                return _ref2.apply(this, arguments);
            }

            return GetOrganizations;
        }()
        //请假类型

    }, {
        key: 'GetGeneralCodeComboboxItems',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, GetGeneralCodeComboboxItems, index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboboxItems', 'POST', { id: 'QJ' });

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    GetGeneralCodeComboboxItems = resData.data.result;

                                    for (index in GetGeneralCodeComboboxItems) {
                                        this.VacationType.value[index] = GetGeneralCodeComboboxItems[index].value;
                                        this.VacationType.displayText[index] = GetGeneralCodeComboboxItems[index].displayText;
                                    }
                                    this.$apply();
                                }
                                console.log(resData);

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetGeneralCodeComboboxItems() {
                return _ref3.apply(this, arguments);
            }

            return GetGeneralCodeComboboxItems;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetOrganizations();
            this.GetGeneralCodeComboboxItems();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchApplyAudit;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(searchApplyAudit , 'pages/modules/auditModules/applyAudit/search/searchApplyAudit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaEFwcGx5QXVkaXQuanMiXSwibmFtZXMiOlsic2VhcmNoQXBwbHlBdWRpdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkVOYW1lIiwiRGVwYXJ0bWVudElkIiwiVmFjYXRpb25UeXBlIiwiZGF0YSIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJFTmFtZVZhbHVlIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsIkRlcGFydG1lbnRJZEluZGV4IiwiVmFjYXRpb25UeXBlSW5kZXgiLCJzZWFyY2hEYXRhIiwiaGlzdG9yeV9rZXlXb3JkX2Nhc2UiLCJzZWFyY2hDbGVudFZhbHVlIiwic2hvd1BhZ2UiLCJpc1Nob3dBcnJheSIsIm1ldGhvZHMiLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsInF1ZXJ5U3RyZWFtIiwicmVmcmVzaCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsIiRhcHBseSIsImRlbGV0SXRlbUFsbCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJyZXMiLCJjb25maXJtIiwiaGlzdG9yeSIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJkZWxldEl0ZW0iLCJpbmRleCIsInNwbGljZSIsImxvbmdUYXAiLCJtYXAiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwiZSIsImRldGFpbCIsInJlcGxhY2UiLCJLZXl3b3JkIiwiSGlzdG9yeV9LZXlXb3JkX0FwcGx5QXVkaXQiLCJ1bnNoaWZ0Iiwid2F0Y2giLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiR2V0T3JnYW5pemF0aW9ucyIsInJlc3VsdCIsImlkIiwiZGlzcGxheU5hbWUiLCJHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMiLCJpc0hpc3RvcnkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7OztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQywwQkFBeUIsWUFBeEUsRUFBcUYsMkJBQTBCLFlBQS9HLEVBQVQsRUFBc0ksZ0JBQWUsRUFBQyx1QkFBc0IsY0FBdkIsRUFBc0MscUJBQW9CLG1CQUExRCxFQUE4RSwyQkFBMEIsbUJBQXhHLEVBQXJKLEVBQWtSLGdCQUFlLEVBQUMsdUJBQXNCLGNBQXZCLEVBQXNDLHFCQUFvQixtQkFBMUQsRUFBOEUsMkJBQTBCLG1CQUF4RyxFQUFqUyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBVztBQUNBQyxrQ0FEQTtBQUVBQywwQ0FGQTtBQUdBQztBQUhBLFMsUUFLSkMsSSxHQUFPO0FBQ0g7QUFDQUgsbUJBQU87QUFDSEksdUJBQU8sSUFESjtBQUVIQyxzQkFBTSxPQUZIO0FBR0hDLHlCQUFTO0FBSE4sYUFGSjtBQU9IQyx3QkFBWSxFQVBUO0FBUUg7QUFDQU4sMEJBQWM7QUFDVkcsdUJBQU8sSUFERztBQUVWQyxzQkFBTSxjQUZJO0FBR1ZHLHVCQUFPLEVBSEc7QUFJVkMsNkJBQWEsRUFKSDtBQUtWSCx5QkFBUztBQUxDLGFBVFg7QUFnQkhJLCtCQUFtQixDQUFDLENBaEJqQjtBQWlCSDtBQUNBUiwwQkFBYztBQUNWRSx1QkFBTyxNQURHO0FBRVZDLHNCQUFNLGNBRkk7QUFHVkcsdUJBQU8sRUFIRztBQUlWQyw2QkFBYSxFQUpIO0FBS1ZILHlCQUFTO0FBTEMsYUFsQlg7QUF5QkhL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Ozs7Ozs7Ozs7Ozs7aUNBRUs7QUFDTCxpQkFBS08sU0FBTDtBQUNBLGlCQUFLTCxnQkFBTDtBQUNBLGlCQUFLSSwyQkFBTDtBQUNIOzs7aUNBQ1EsQ0FBRTs7OztFQTdNK0JFLGVBQUtDLEk7O2tCQUE5QmpGLGdCIiwiZmlsZSI6InNlYXJjaEFwcGx5QXVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQge1xuICAgICAgICBteURpc3RpbmN0XG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IEVOYW1lIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgRGVwYXJ0bWVudElkIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IFZhY2F0aW9uVHlwZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEFwcGx5QXVkaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiRU5hbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcIkVOYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJFTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiRU5hbWVWYWx1ZVwifSxcIkRlcGFydG1lbnRJZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkRlcGFydG1lbnRJZFwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkRlcGFydG1lbnRJZEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiRGVwYXJ0bWVudElkSW5kZXhcIn0sXCJWYWNhdGlvblR5cGVcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJWYWNhdGlvblR5cGVcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJWYWNhdGlvblR5cGVJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlZhY2F0aW9uVHlwZUluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XG4gICAgICAgICAgICBFTmFtZSxcbiAgICAgICAgICAgIERlcGFydG1lbnRJZCxcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAvL+Wnk+WQjVxuICAgICAgICAgICAgRU5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+Wnk+WQjScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VOYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8vIOmDqOmXqFxuICAgICAgICAgICAgRGVwYXJ0bWVudElkOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpg6jpl6gnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdEZXBhcnRtZW50SWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBEZXBhcnRtZW50SWRJbmRleDogLTEsXG4gICAgICAgICAgICAvLyDor7flgYfnsbvlnotcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YGH57G75Z6LJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVmFjYXRpb25UeXBlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVmFjYXRpb25UeXBlSW5kZXg6IC0xLFxuICAgICAgICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICAgICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICAgICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHNob3dQYWdlOnRydWUsXG4gICAgICAgICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBhZHZhbmNlZFNlYXJjaFN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoRGF0YSlcbiAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnNlYXJjaERhdGEpLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0gdGhpcy5zZWFyY2hEYXRhO1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmsqHmnInmkJzntKLlhoXlrrnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZSA9ICF0aGlzLnNob3dQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtQWxsKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5piv5ZCm5Yig6Zmk77yBJywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflhajpg6jljoblj7LorrDlvZUnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjN2E3YTdhJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQVBQTFlBVURJVCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0FQUExZQVVESVQnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBMWUFVRElUJyk7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQVBQTFlBVURJVCcsIGhpc3RvcnkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvbmdUYXAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5ID0gdGhpcy5pc1Nob3dBcnJheS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2xlbnRWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtLktleXdvcmQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxLCAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9BcHBseUF1ZGl0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBMWUFVRElUJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEhpc3RvcnlfS2V5V29yZF9BcHBseUF1ZGl0Lmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQXBwbHlBdWRpdC5zcGxpY2UoSGlzdG9yeV9LZXlXb3JkX0FwcGx5QXVkaXQubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9BcHBseUF1ZGl0LnVuc2hpZnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9BcHBseUF1ZGl0ID0gbXlEaXN0aW5jdChIaXN0b3J5X0tleVdvcmRfQXBwbHlBdWRpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBMWUFVRElUJywgSGlzdG9yeV9LZXlXb3JkX0FwcGx5QXVkaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aQnOe0ouS4uuepuizor7fph43or5XvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgRU5hbWVWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuRU5hbWU9dmFsdWU7XG4gICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIERlcGFydG1lbnRJZEluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuRGVwYXJ0bWVudElkPXRoaXMuRGVwYXJ0bWVudElkLnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFZhY2F0aW9uVHlwZUluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuVmFjYXRpb25UeXBlPXRoaXMuVmFjYXRpb25UeXBlLnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfQXBwbHlBdWRpdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQVBQTFlBVURJVCcpO1xuICAgICAgICAgICAgaWYgKCFIaXN0b3J5X0tleVdvcmRfQXBwbHlBdWRpdCkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9BcHBseUF1ZGl0ID0gW107XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9BUFBMWUFVRElUJywgSGlzdG9yeV9LZXlXb3JkX0FwcGx5QXVkaXQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBIaXN0b3J5X0tleVdvcmRfQXBwbHlBdWRpdDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+mDqOmXqFxuICAgICAgICBhc3luYyBHZXRPcmdhbml6YXRpb25zKCl7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRPcmdhbml6YXRpb25zJyxcbiAgICAgICAgICAgICAgICAnUE9TVCdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB2YXIgR2V0T3JnYW5pemF0aW9ucz1yZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggaW4gR2V0T3JnYW5pemF0aW9ucyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRGVwYXJ0bWVudElkLnZhbHVlW2luZGV4XT1HZXRPcmdhbml6YXRpb25zW2luZGV4XS5pZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRlcGFydG1lbnRJZC5kaXNwbGF5VGV4dFtpbmRleF09R2V0T3JnYW5pemF0aW9uc1tpbmRleF0uZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8v6K+35YGH57G75Z6LXG4gICAgICAgIGFzeW5jIEdldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcygpe1xuICAgICAgICAgICAgIHZhciByZXNEYXRhPWF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldEdlbmVyYWxDb2RlQ29tYm9ib3hJdGVtcycsXG4gICAgICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHtpZDonUUonfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB2YXIgR2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zPXJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBHZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlZhY2F0aW9uVHlwZS52YWx1ZVtpbmRleF09R2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zW2luZGV4XS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlZhY2F0aW9uVHlwZS5kaXNwbGF5VGV4dFtpbmRleF09R2V0R2VuZXJhbENvZGVDb21ib2JveEl0ZW1zW2luZGV4XS5kaXNwbGF5VGV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5pc0hpc3RvcnkoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0T3JnYW5pemF0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvYm94SXRlbXMoKVxuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=