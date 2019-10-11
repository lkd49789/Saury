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

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _pickerOption = require('./../../../../components/picker/pickerOption.js');

var _pickerOption2 = _interopRequireDefault(_pickerOption);

var _pickerDate = require('./../../../../components/picker/pickerDate.js');

var _pickerDate2 = _interopRequireDefault(_pickerDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchRegister = function (_wepy$page) {
    _inherits(searchRegister, _wepy$page);

    function searchRegister() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchRegister);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchRegister.__proto__ || Object.getPrototypeOf(searchRegister)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Id": { "xmlns:v-bind": "", "v-bind:input.sync": "Id", "v-bind:inputValue.sync": "IdValue", "v-bind:twoWayTitle.once": "IdValue" }, "Name": { "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "ClientId": { "v-bind:input.sync": "ClientId", "v-bind:inputValue.sync": "ClientIdValue", "v-bind:twoWayTitle.once": "ClientIdValue" }, "ClientName": { "v-bind:input.sync": "ClientName", "v-bind:inputValue.sync": "ClientNameValue", "v-bind:twoWayTitle.once": "ClientNameValue" }, "AcceptDate": { "v-bind:pickerData.once": "AcceptDate", "v-bind:twoWayTitle.once": "AcceptDate" }, "OrganizationUnitId": { "v-bind:options.sync": "OrganizationUnitId", "v-bind:index.sync": "OrganizationUnitIdIndex", "v-bind:twoWayTitle.once": "OrganizationUnitIdIndex" }, "SecretLevel": { "v-bind:options.sync": "SecretLevel", "v-bind:index.sync": "SecretLevelIndex", "v-bind:twoWayTitle.once": "SecretLevelIndex" }, "Language": { "v-bind:options.sync": "Language", "v-bind:index.sync": "LanguageIndex", "v-bind:twoWayTitle.once": "LanguageIndex" }, "ImportLevel": { "v-bind:options.sync": "ImportLevel", "v-bind:index.sync": "ImportLevelIndex", "v-bind:twoWayTitle.once": "ImportLevelIndex" }, "IsLegal": { "v-bind:options.sync": "IsLegal", "v-bind:index.sync": "IsLegalIndex", "v-bind:twoWayTitle.once": "IsLegalIndex" }, "IsForeign": { "v-bind:options.sync": "IsForeign", "v-bind:index.sync": "IsForeignIndex", "v-bind:twoWayTitle.once": "IsForeignIndex" } }, _this.$events = {}, _this.components = {
            Id: _input2.default,
            Name: _input2.default,
            ClientId: _input2.default,
            ClientName: _input2.default,
            AcceptDate: _pickerDate2.default,
            OrganizationUnitId: _pickerOption2.default,
            SecretLevel: _pickerOption2.default,
            Language: _pickerOption2.default,
            ImportLevel: _pickerOption2.default,
            IsLegal: _pickerOption2.default,
            IsForeign: _pickerOption2.default
        }, _this.data = {
            AcceptDate: {
                title: '收案时间',
                startDateData: '',
                endDateData: ''
            },
            searchData: {},
            History_KeyWord: [],
            searchKeyWords: '',
            showPage: true,
            isShowArray: [],
            Id: {
                title: '案件编号',
                name: 'Id',
                warning: false
            },
            IdValue: '',
            Name: {
                title: '案件名称',
                name: 'Name',
                warning: false
            },
            NameValue: '',
            ClientName: {
                title: '客户名称',
                name: 'ClientName',
                warning: false
            },
            ClientNameValue: '',
            ClientId: {
                title: '客户编号',
                name: 'ClientId',
                warning: false
            },
            ClientIdValue: '',
            OrganizationUnitId: {
                title: '组织结构',
                key: 'displayName',
                name: 'OrganizationUnitId',
                data: [],
                warning: false
            },
            OrganizationUnitIdIndex: -1,
            // 保密级别
            SecretLevel: {
                title: '保密级别',
                key: 'displayText',
                name: 'SecretLevel',
                data: [],
                warning: false
            },
            SecretLevelIndex: -1,
            // 语言
            Language: {
                title: '书写语言',
                key: 'displayText',
                name: 'Language',
                data: [],
                warning: false
            },
            LanguageIndex: -1,
            // 重要级别
            ImportLevel: {
                title: '重要级别',
                key: 'displayText',
                name: 'ImportLevel',
                data: [],
                warning: false
            },
            ImportLevelIndex: -1,
            // 是否涉外
            IsForeign: {
                title: '是否涉外',
                key: 'displayText',
                name: 'IsForeign',
                data: [],
                warning: false
            },
            IsForeignIndex: -1,
            // 是否援助
            IsLegal: {
                title: '是否援助',
                key: 'displayText',
                name: 'IsLegal',
                data: [],
                warning: false
            },
            IsLegalIndex: -1,
            //案件类别
            Category: [],
            //状态
            Status: [],
            isProcessStatus: false,
            //立案流程状态
            ProcessStatusData: [],
            ProcessStatus: []
        }, _this.methods = {
            checkboxChangeProcessStatus: function checkboxChangeProcessStatus(e) {
                if (e.detail.value.length !== 0) {
                    this.searchData.ProcessStatus = e.detail.value.join(',');
                } else {
                    this.searchData.ProcessStatus = '';
                }
                this.$apply();
            },
            radioChange: function radioChange(e) {
                this.isProcessStatus = true;
                this.searchData.Status = e.detail.value;
                this.statusFilter(e.detail.value);
                this.$apply();
            },
            checkboxChange: function checkboxChange(e) {
                if (e.detail.value.length !== 0) {
                    this.searchData.Category = e.detail.value.join(',');
                } else {
                    this.searchData.Category = '';
                }
                this.$apply();
            },
            advancedSearchSubmit: function advancedSearchSubmit() {
                if (Object.keys(this.searchData).length !== 0) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    if (prevPage) {
                        if (Object.keys(this.searchData).length > 0) {
                            prevPage.isRefresh(this.searchData);
                            wx.navigateBack({
                                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                            });
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
                            _this2.History_KeyWord = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.History_KeyWord.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT', history);
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
                this.searchKeyWords = item;
                this.$apply();
            },
            submitSearch: function submitSearch(e) {
                var value = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
                if (value) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    this.searchData.keyWord = value;
                    if (prevPage) {
                        prevPage.isRefresh(this.searchData);
                        wx.navigateBack({
                            delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                            success: function success() {
                                var History_KeyWord = wx.getStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT');
                                if (History_KeyWord.length >= 20) {
                                    History_KeyWord.splice(History_KeyWord.length - 1, 1);
                                }
                                History_KeyWord.unshift(value);
                                History_KeyWord = (0, _api.myDistinct)(History_KeyWord);
                                wx.setStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT', History_KeyWord);
                            }
                        });
                    }
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
            AcceptDate: function AcceptDate(data) {
                if (!this.searchData.AcceptDate) {
                    this.searchData.AcceptDate = {};
                }
                this.searchData.AcceptDate.StartDate = data.startDateData;
                this.searchData.AcceptDate.EndDate = data.endDateData;
                this.$apply();
            },
            IdValue: function IdValue(value) {
                this.searchData.Id = value;
                this.$apply();
            },
            NameValue: function NameValue(value) {
                this.searchData.Name = value;
                this.$apply();
            },
            ClientNameValue: function ClientNameValue(value) {
                this.searchData.ClientName = value;
                this.$apply();
            },
            ClientIdValue: function ClientIdValue(value) {
                this.searchData.ClientId = value;
                this.$apply();
            },
            OrganizationUnitIdIndex: function OrganizationUnitIdIndex(index) {
                this.searchData.OrganizationUnitId = this.OrganizationUnitId.data[index].id;
                this.$apply();
            },
            SecretLevelIndex: function SecretLevelIndex(index) {
                this.searchData.SecretLevel = this.SecretLevel.data[index].value;
                this.$apply();
            },
            LanguageIndex: function LanguageIndex(index) {
                this.searchData.Language = this.Language.data[index].value;
                this.$apply();
            },
            IsForeignIndex: function IsForeignIndex(index) {
                this.searchData.IsForeign = this.IsForeign.data[index].value;
                this.$apply();
            },
            ImportLevelIndex: function ImportLevelIndex(index) {
                this.searchData.ImportLevel = this.ImportLevel.data[index].value;
                this.$apply();
            },
            IsLegalIndex: function IsLegalIndex(index) {
                this.searchData.IsLegal = this.IsLegal.data[index].value;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchRegister, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var History_KeyWord = wx.getStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT');
            if (!History_KeyWord) {
                History_KeyWord = [];
                wx.setStorageSync('HISTORY_KEYWORD_CASEMANAGEMENT', History_KeyWord);
            } else {
                this.History_KeyWord = History_KeyWord;
                for (var index in this.History_KeyWord) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
        //获取代编辑数据

    }, {
        key: 'GetCaseApplyListSearchInput',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, CaseApplyListSearchInputDatas;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/caseApplication/GetCaseApplyListSearchInput', 'post');

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    CaseApplyListSearchInputDatas = resData.data.result;

                                    this.Category = CaseApplyListSearchInputDatas.categoryList;
                                    this.Status = CaseApplyListSearchInputDatas.statusList;
                                    this.ProcessStatusData = CaseApplyListSearchInputDatas.processStatusList;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseApplyListSearchInput() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseApplyListSearchInput;
        }()
        //案件待编辑基础数据

    }, {
        key: 'GetCaseGeneralInfo',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, caseGeneralInfoData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseGeneralInfo', 'post', {
                                    Id: ''
                                });

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    caseGeneralInfoData = resData.data.result;
                                    //书面语言

                                    this.Language.data = caseGeneralInfoData.caseWrittenLanguageCombobox;
                                    //保密级别
                                    this.SecretLevel.data = caseGeneralInfoData.secretLevelCombobox;
                                    // //是否涉外
                                    this.IsForeign.data = caseGeneralInfoData.whetherCombobox;
                                    // //是否法律援助
                                    this.IsLegal.data = caseGeneralInfoData.whetherCombobox;
                                    // //是否重要
                                    this.ImportLevel.data = caseGeneralInfoData.importLevelCombobox;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetCaseGeneralInfo() {
                return _ref3.apply(this, arguments);
            }

            return GetCaseGeneralInfo;
        }()
        //获取隶属组织架构

    }, {
        key: 'GetOrganizations',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var resData, GetOrganizationsData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetOrganizations', 'post');

                            case 2:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    GetOrganizationsData = resData.data.result;

                                    this.OrganizationUnitId.data = GetOrganizationsData;
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetOrganizations() {
                return _ref4.apply(this, arguments);
            }

            return GetOrganizations;
        }()
        //状态数据过滤

    }, {
        key: 'statusFilter',
        value: function statusFilter(status) {
            var ProcessStatusData = this.ProcessStatusData;
            this.ProcessStatus = ProcessStatusData.filter(function (item) {
                return item.value.substr(0, 1) == status;
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetCaseApplyListSearchInput();
            this.GetCaseGeneralInfo();
            this.GetOrganizations();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchRegister;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchRegister , 'pages/modules/caseManagement/search/search_caseManagement'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaF9jYXNlTWFuYWdlbWVudC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hSZWdpc3RlciIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIklkIiwiTmFtZSIsIkNsaWVudElkIiwiQ2xpZW50TmFtZSIsIkFjY2VwdERhdGUiLCJPcmdhbml6YXRpb25Vbml0SWQiLCJTZWNyZXRMZXZlbCIsIkxhbmd1YWdlIiwiSW1wb3J0TGV2ZWwiLCJJc0xlZ2FsIiwiSXNGb3JlaWduIiwiZGF0YSIsInRpdGxlIiwic3RhcnREYXRlRGF0YSIsImVuZERhdGVEYXRhIiwic2VhcmNoRGF0YSIsIkhpc3RvcnlfS2V5V29yZCIsInNlYXJjaEtleVdvcmRzIiwic2hvd1BhZ2UiLCJpc1Nob3dBcnJheSIsIm5hbWUiLCJ3YXJuaW5nIiwiSWRWYWx1ZSIsIk5hbWVWYWx1ZSIsIkNsaWVudE5hbWVWYWx1ZSIsIkNsaWVudElkVmFsdWUiLCJrZXkiLCJPcmdhbml6YXRpb25Vbml0SWRJbmRleCIsIlNlY3JldExldmVsSW5kZXgiLCJMYW5ndWFnZUluZGV4IiwiSW1wb3J0TGV2ZWxJbmRleCIsIklzRm9yZWlnbkluZGV4IiwiSXNMZWdhbEluZGV4IiwiQ2F0ZWdvcnkiLCJTdGF0dXMiLCJpc1Byb2Nlc3NTdGF0dXMiLCJQcm9jZXNzU3RhdHVzRGF0YSIsIlByb2Nlc3NTdGF0dXMiLCJtZXRob2RzIiwiY2hlY2tib3hDaGFuZ2VQcm9jZXNzU3RhdHVzIiwiZSIsImRldGFpbCIsInZhbHVlIiwibGVuZ3RoIiwiam9pbiIsIiRhcHBseSIsInJhZGlvQ2hhbmdlIiwic3RhdHVzRmlsdGVyIiwiY2hlY2tib3hDaGFuZ2UiLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsIk9iamVjdCIsImtleXMiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwiaXNSZWZyZXNoIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiZGVsZXRJdGVtQWxsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJyZXBsYWNlIiwia2V5V29yZCIsInVuc2hpZnQiLCJ3YXRjaCIsIlN0YXJ0RGF0ZSIsIkVuZERhdGUiLCJpZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcyIsInJlc3VsdCIsImNhdGVnb3J5TGlzdCIsInN0YXR1c0xpc3QiLCJwcm9jZXNzU3RhdHVzTGlzdCIsImNhc2VHZW5lcmFsSW5mb0RhdGEiLCJjYXNlV3JpdHRlbkxhbmd1YWdlQ29tYm9ib3giLCJzZWNyZXRMZXZlbENvbWJvYm94Iiwid2hldGhlckNvbWJvYm94IiwiaW1wb3J0TGV2ZWxDb21ib2JveCIsIkdldE9yZ2FuaXphdGlvbnNEYXRhIiwic3RhdHVzIiwiZmlsdGVyIiwic3Vic3RyIiwiaXNIaXN0b3J5IiwiR2V0Q2FzZUFwcGx5TGlzdFNlYXJjaElucHV0IiwiR2V0Q2FzZUdlbmVyYWxJbmZvIiwiR2V0T3JnYW5pemF0aW9ucyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUdBOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQU1xQkEsYzs7Ozs7Ozs7Ozs7Ozs7ME1BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsTUFBSyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixJQUF2QyxFQUE0Qyww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QVE7QUFDakIsZ0JBQUl0RSxvQkFBb0IsS0FBS0EsaUJBQTdCO0FBQ0EsaUJBQUtDLGFBQUwsR0FBcUJELGtCQUFrQnVFLE1BQWxCLENBQXlCLFVBQUN6QixJQUFELEVBQVU7QUFDcEQsdUJBQU9BLEtBQUt4QyxLQUFMLENBQVdrRSxNQUFYLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEtBQTJCRixNQUFsQztBQUNILGFBRm9CLENBQXJCO0FBR0g7OztpQ0FDUTtBQUNMLGlCQUFLRyxTQUFMO0FBQ0EsaUJBQUtDLDJCQUFMO0FBQ0EsaUJBQUtDLGtCQUFMO0FBQ0EsaUJBQUtDLGdCQUFMO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBaFg2QkMsZUFBS0MsSTs7a0JBQTVCdkgsYyIsImZpbGUiOiJzZWFyY2hfY2FzZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQge1xuICAgICAgICBteURpc3RpbmN0XG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IElkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IENsaWVudElkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgQ2xpZW50TmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IE9yZ2FuaXphdGlvblVuaXRJZCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGltcG9ydCBBY2NlcHREYXRlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlckRhdGUnO1xuICAgIGltcG9ydCBTZWNyZXRMZXZlbCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGltcG9ydCBMYW5ndWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGltcG9ydCBJbXBvcnRMZXZlbCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGltcG9ydCBJc0xlZ2FsIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlck9wdGlvbic7XG4gICAgaW1wb3J0IElzRm9yZWlnbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaFJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIklkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJJZFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiSWRWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIklkVmFsdWVcIn0sXCJOYW1lXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIk5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIk5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIk5hbWVWYWx1ZVwifSxcIkNsaWVudElkXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkNsaWVudElkXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJDbGllbnRJZFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ2xpZW50SWRWYWx1ZVwifSxcIkNsaWVudE5hbWVcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQ2xpZW50TmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiQ2xpZW50TmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ2xpZW50TmFtZVZhbHVlXCJ9LFwiQWNjZXB0RGF0ZVwiOntcInYtYmluZDpwaWNrZXJEYXRhLm9uY2VcIjpcIkFjY2VwdERhdGVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJBY2NlcHREYXRlXCJ9LFwiT3JnYW5pemF0aW9uVW5pdElkXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiT3JnYW5pemF0aW9uVW5pdElkXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiT3JnYW5pemF0aW9uVW5pdElkSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJPcmdhbml6YXRpb25Vbml0SWRJbmRleFwifSxcIlNlY3JldExldmVsXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiU2VjcmV0TGV2ZWxcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJTZWNyZXRMZXZlbEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiU2VjcmV0TGV2ZWxJbmRleFwifSxcIkxhbmd1YWdlXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiTGFuZ3VhZ2VcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJMYW5ndWFnZUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTGFuZ3VhZ2VJbmRleFwifSxcIkltcG9ydExldmVsXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiSW1wb3J0TGV2ZWxcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJJbXBvcnRMZXZlbEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiSW1wb3J0TGV2ZWxJbmRleFwifSxcIklzTGVnYWxcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJJc0xlZ2FsXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiSXNMZWdhbEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiSXNMZWdhbEluZGV4XCJ9LFwiSXNGb3JlaWduXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiSXNGb3JlaWduXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiSXNGb3JlaWduSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJJc0ZvcmVpZ25JbmRleFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBJZCxcbiAgICAgICAgICAgIE5hbWUsXG4gICAgICAgICAgICBDbGllbnRJZCxcbiAgICAgICAgICAgIENsaWVudE5hbWUsXG4gICAgICAgICAgICBBY2NlcHREYXRlLFxuICAgICAgICAgICAgT3JnYW5pemF0aW9uVW5pdElkLFxuICAgICAgICAgICAgU2VjcmV0TGV2ZWwsXG4gICAgICAgICAgICBMYW5ndWFnZSxcbiAgICAgICAgICAgIEltcG9ydExldmVsLFxuICAgICAgICAgICAgSXNMZWdhbCxcbiAgICAgICAgICAgIElzRm9yZWlnblxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBBY2NlcHREYXRlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmlLbmoYjml7bpl7QnLFxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZURhdGE6ICcnLFxuICAgICAgICAgICAgICAgIGVuZERhdGVEYXRhOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaERhdGE6IHt9LFxuICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaEtleVdvcmRzOiAnJyxcbiAgICAgICAgICAgIHNob3dQYWdlOiB0cnVlLFxuICAgICAgICAgICAgaXNTaG93QXJyYXk6IFtdLFxuICAgICAgICAgICAgSWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ahiOS7tue8luWPtycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0lkJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJZFZhbHVlOiAnJyxcbiAgICAgICAgICAgIE5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ahiOS7tuWQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE5hbWVWYWx1ZTogJycsXG4gICAgICAgICAgICBDbGllbnROYW1lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqLmiLflkI3np7AnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDbGllbnROYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnROYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgQ2xpZW50SWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+e8luWPtycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NsaWVudElkJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnRJZFZhbHVlOiAnJyxcbiAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn57uE57uH57uT5p6EJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5TmFtZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ09yZ2FuaXphdGlvblVuaXRJZCcsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWRJbmRleDogLTEsXG4gICAgICAgICAgICAvLyDkv53lr4bnuqfliKtcbiAgICAgICAgICAgIFNlY3JldExldmVsOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lr4bnuqfliKsnLFxuICAgICAgICAgICAgICAgIGtleTogJ2Rpc3BsYXlUZXh0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2VjcmV0TGV2ZWwnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU2VjcmV0TGV2ZWxJbmRleDogLTEsXG4gICAgICAgICAgICAvLyDor63oqIBcbiAgICAgICAgICAgIExhbmd1YWdlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuablhpnor63oqIAnLFxuICAgICAgICAgICAgICAgIGtleTogJ2Rpc3BsYXlUZXh0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGFuZ3VhZ2UnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTGFuZ3VhZ2VJbmRleDogLTEsXG4gICAgICAgICAgICAvLyDph43opoHnuqfliKtcbiAgICAgICAgICAgIEltcG9ydExldmVsOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfph43opoHnuqfliKsnLFxuICAgICAgICAgICAgICAgIGtleTogJ2Rpc3BsYXlUZXh0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSW1wb3J0TGV2ZWwnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSW1wb3J0TGV2ZWxJbmRleDogLTEsXG4gICAgICAgICAgICAvLyDmmK/lkKbmtonlpJZcbiAgICAgICAgICAgIElzRm9yZWlnbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5piv5ZCm5raJ5aSWJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5VGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0lzRm9yZWlnbicsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJc0ZvcmVpZ25JbmRleDogLTEsXG4gICAgICAgICAgICAvLyDmmK/lkKbmj7TliqlcbiAgICAgICAgICAgIElzTGVnYWw6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aYr+WQpuaPtOWKqScsXG4gICAgICAgICAgICAgICAga2V5OiAnZGlzcGxheVRleHQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdJc0xlZ2FsJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIElzTGVnYWxJbmRleDogLTEsXG4gICAgICAgICAgICAvL+ahiOS7tuexu+WIq1xuICAgICAgICAgICAgQ2F0ZWdvcnk6IFtdLFxuICAgICAgICAgICAgLy/nirbmgIFcbiAgICAgICAgICAgIFN0YXR1czogW10sXG4gICAgICAgICAgICBpc1Byb2Nlc3NTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgLy/nq4vmoYjmtYHnqIvnirbmgIFcbiAgICAgICAgICAgIFByb2Nlc3NTdGF0dXNEYXRhOiBbXSxcbiAgICAgICAgICAgIFByb2Nlc3NTdGF0dXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2hlY2tib3hDaGFuZ2VQcm9jZXNzU3RhdHVzKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5Qcm9jZXNzU3RhdHVzID0gZS5kZXRhaWwudmFsdWUuam9pbignLCcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLlByb2Nlc3NTdGF0dXMgPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhZGlvQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJvY2Vzc1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLlN0YXR1cyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzRmlsdGVyKGUuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeSA9IGUuZGV0YWlsLnZhbHVlLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeSA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWR2YW5jZWRTZWFyY2hTdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc2VhcmNoRGF0YSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zZWFyY2hEYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aQnOe0ouS4uuepuizor7fph43or5XvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmsqHmnInmkJzntKLlhoXlrrnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dQYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UgPSAhdGhpcy5zaG93UGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0SXRlbUFsbCgpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaYr+WQpuWIoOmZpO+8gScsIC8v5o+Q56S655qE5qCH6aKYLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5YWo6YOo5Y6G5Y+y6K6w5b2VJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzdhN2E3YScsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjNWQ3M2ZhJywgLy/noa7lrprmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcnlfS2V5V29yZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DQVNFTUFOQUdFTUVOVCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VNQU5BR0VNRU5UJywgaGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0SXRlbShpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuSGlzdG9yeV9LZXlXb3JkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VNQU5BR0VNRU5UJyk7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRU1BTkFHRU1FTlQnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb25nVGFwKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dBcnJheSA9IHRoaXMuaXNTaG93QXJyYXkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaXN0b3J5KGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEtleVdvcmRzID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5rZXlXb3JkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxLCAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DQVNFTUFOQUdFTUVOVCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSGlzdG9yeV9LZXlXb3JkLmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkLnNwbGljZShIaXN0b3J5X0tleVdvcmQubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkLnVuc2hpZnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmQgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRU1BTkFHRU1FTlQnLCBIaXN0b3J5X0tleVdvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIEFjY2VwdERhdGUoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hEYXRhLkFjY2VwdERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkFjY2VwdERhdGUgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkFjY2VwdERhdGUuU3RhcnREYXRlID0gZGF0YS5zdGFydERhdGVEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5BY2NlcHREYXRlLkVuZERhdGUgPSBkYXRhLmVuZERhdGVEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5JZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLk5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENsaWVudE5hbWVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DbGllbnROYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnRJZFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNsaWVudElkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWRJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5Pcmdhbml6YXRpb25Vbml0SWQgPSB0aGlzLk9yZ2FuaXphdGlvblVuaXRJZC5kYXRhW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFNlY3JldExldmVsSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuU2VjcmV0TGV2ZWwgPSB0aGlzLlNlY3JldExldmVsLmRhdGFbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTGFuZ3VhZ2VJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5MYW5ndWFnZSA9IHRoaXMuTGFuZ3VhZ2UuZGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJc0ZvcmVpZ25JbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5Jc0ZvcmVpZ24gPSB0aGlzLklzRm9yZWlnbi5kYXRhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEltcG9ydExldmVsSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuSW1wb3J0TGV2ZWwgPSB0aGlzLkltcG9ydExldmVsLmRhdGFbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSXNMZWdhbEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLklzTGVnYWwgPSB0aGlzLklzTGVnYWwuZGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIOWIpOaWreWIneWni+WMluWOhuWPsuaVsOaNrlxuICAgICAgICBpc0hpc3RvcnkoKSB7XG4gICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DQVNFTUFOQUdFTUVOVCcpO1xuICAgICAgICAgICAgaWYgKCFIaXN0b3J5X0tleVdvcmQpIHtcbiAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmQgPSBbXTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VNQU5BR0VNRU5UJywgSGlzdG9yeV9LZXlXb3JkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLkhpc3RvcnlfS2V5V29yZCA9IEhpc3RvcnlfS2V5V29yZDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLkhpc3RvcnlfS2V5V29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5bku6PnvJbovpHmlbDmja5cbiAgICAgICAgYXN5bmMgR2V0Q2FzZUFwcGx5TGlzdFNlYXJjaElucHV0KCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VBcHBsaWNhdGlvbi9HZXRDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXQnLFxuICAgICAgICAgICAgICAgICdwb3N0J1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgQ2FzZUFwcGx5TGlzdFNlYXJjaElucHV0RGF0YXMgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnkgPSBDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcy5jYXRlZ29yeUxpc3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXMgPSBDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcy5zdGF0dXNMaXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuUHJvY2Vzc1N0YXR1c0RhdGEgPSBDYXNlQXBwbHlMaXN0U2VhcmNoSW5wdXREYXRhcy5wcm9jZXNzU3RhdHVzTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/moYjku7blvoXnvJbovpHln7rnoYDmlbDmja5cbiAgICAgICAgYXN5bmMgR2V0Q2FzZUdlbmVyYWxJbmZvKCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvR2V0Q2FzZUdlbmVyYWxJbmZvJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgSWQ6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FzZUdlbmVyYWxJbmZvRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy/kuabpnaLor63oqIBcbiAgICAgICAgICAgICAgICB0aGlzLkxhbmd1YWdlLmRhdGEgPSBjYXNlR2VuZXJhbEluZm9EYXRhLmNhc2VXcml0dGVuTGFuZ3VhZ2VDb21ib2JveDtcbiAgICAgICAgICAgICAgICAvL+S/neWvhue6p+WIq1xuICAgICAgICAgICAgICAgIHRoaXMuU2VjcmV0TGV2ZWwuZGF0YSA9IGNhc2VHZW5lcmFsSW5mb0RhdGEuc2VjcmV0TGV2ZWxDb21ib2JveDtcbiAgICAgICAgICAgICAgICAvLyAvL+aYr+WQpua2ieWkllxuICAgICAgICAgICAgICAgIHRoaXMuSXNGb3JlaWduLmRhdGEgPSBjYXNlR2VuZXJhbEluZm9EYXRhLndoZXRoZXJDb21ib2JveDtcbiAgICAgICAgICAgICAgICAvLyAvL+aYr+WQpuazleW+i+aPtOWKqVxuICAgICAgICAgICAgICAgIHRoaXMuSXNMZWdhbC5kYXRhID0gY2FzZUdlbmVyYWxJbmZvRGF0YS53aGV0aGVyQ29tYm9ib3g7XG4gICAgICAgICAgICAgICAgLy8gLy/mmK/lkKbph43opoFcbiAgICAgICAgICAgICAgICB0aGlzLkltcG9ydExldmVsLmRhdGEgPSBjYXNlR2VuZXJhbEluZm9EYXRhLmltcG9ydExldmVsQ29tYm9ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v6I635Y+W6Zq25bGe57uE57uH5p625p6EXG4gICAgICAgIGFzeW5jIEdldE9yZ2FuaXphdGlvbnMoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldE9yZ2FuaXphdGlvbnMnLFxuICAgICAgICAgICAgICAgICdwb3N0J1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgR2V0T3JnYW5pemF0aW9uc0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMuT3JnYW5pemF0aW9uVW5pdElkLmRhdGEgPSBHZXRPcmdhbml6YXRpb25zRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/nirbmgIHmlbDmja7ov4fmu6RcbiAgICAgICAgc3RhdHVzRmlsdGVyKHN0YXR1cykge1xuICAgICAgICAgICAgdmFyIFByb2Nlc3NTdGF0dXNEYXRhID0gdGhpcy5Qcm9jZXNzU3RhdHVzRGF0YTtcbiAgICAgICAgICAgIHRoaXMuUHJvY2Vzc1N0YXR1cyA9IFByb2Nlc3NTdGF0dXNEYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnN1YnN0cigwLCAxKSA9PSBzdGF0dXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5pc0hpc3RvcnkoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUFwcGx5TGlzdFNlYXJjaElucHV0KCk7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VHZW5lcmFsSW5mbygpO1xuICAgICAgICAgICAgdGhpcy5HZXRPcmdhbml6YXRpb25zKCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==