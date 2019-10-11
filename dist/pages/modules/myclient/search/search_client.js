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

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchClient = function (_wepy$page) {
    _inherits(searchClient, _wepy$page);

    function searchClient() {
        var _ref, _this$data;

        var _temp, _this, _ret;

        _classCallCheck(this, searchClient);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchClient.__proto__ || Object.getPrototypeOf(searchClient)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "Id": { "v-bind:input.sync": "Id", "v-bind:inputValue.sync": "IdValue", "v-bind:twoWayTitle.once": "IdValue" }, "OrganizationUnitId": { "v-bind:options.sync": "OrganizationUnitId", "v-bind:index.sync": "OrganizationUnitIdIndex", "v-bind:twoWayTitle.once": "OrganizationUnitIdIndex" }, "ImportLevel": { "v-bind:options.sync": "ImportLevel", "v-bind:index.sync": "ImportLevelIndex", "v-bind:twoWayTitle.once": "ImportLevelIndex" }, "Origin": { "v-bind:options.sync": "Origin", "v-bind:index.sync": "OriginIndex", "v-bind:twoWayTitle.once": "OriginIndex" }, "ClientType": { "v-bind:options.sync": "ClientType", "v-bind:index.sync": "ClientTypeIndex", "v-bind:twoWayTitle.once": "ClientTypeIndex" } }, _this.$events = {}, _this.components = {
            Name: _input2.default,
            Id: _input2.default,
            OrganizationUnitId: _option2.default,
            ImportLevel: _option2.default,
            Origin: _option2.default,
            ClientType: _option2.default
        }, _this.data = (_this$data = {
            region: [0, 0, 0, 0],
            regionText: '',
            id: 1,
            multiArray: [],
            multiArrayId: [],
            searchData: {
                Category: "",
                ClientType: "",
                CreationTime: { StartDate: '', EndDate: '' },
                Id: "",
                ImportLevel: "",
                IndustryType: "",
                IsAll: true,
                KeyWord: "",
                Name: "",
                OrganizationUnitId: "",
                Origin: "",
                Region: "",
                pageNumber: 1,
                pageSize: 10,
                sorting: ""
            },
            showPage: true,
            history_keyWord_client: [],
            searchClentValue: '',
            isShowArray: [],
            startDate: '',
            endDate: '',
            Name: {
                title: '客户名称',
                name: 'Name',
                warning: false,
                type: 'text'
            },
            NameValue: '',
            Id: {
                title: '客户编号',
                name: 'Id',
                warning: false,
                type: 'text'
            },
            IdValue: '',
            OrganizationUnitId: {
                title: '组织结构',
                name: 'OrganizationUnitId',
                value: [],
                displayText: [],
                warning: false
            },
            OrganizationUnitIdIndex: -1,
            ImportLevel: {
                title: '重要级别',
                name: 'ImportLevel',
                value: [],
                displayText: [],
                warning: false
            },
            ImportLevelIndex: -1,
            Origin: {
                title: '客户来源',
                name: 'Origin',
                value: [],
                displayText: [],
                warning: false
            },
            OriginIndex: -1,
            ClientType: {
                title: '客户类型',
                name: 'ClientType',
                value: [],
                displayText: [],
                warning: false
            },
            ClientTypeIndex: -1,
            // Category: [],
            // CategoryData: [],
            // IndustryType: [],
            pickerData: ''
        }, _defineProperty(_this$data, 'region', []), _defineProperty(_this$data, 'customItem', ''), _defineProperty(_this$data, 'getCategoryArr', []), _defineProperty(_this$data, 'Category', [[], [], []]), _defineProperty(_this$data, 'CategoryIndex', [0, 0, 0]), _defineProperty(_this$data, 'CategoryTrue', true), _defineProperty(_this$data, 'getTradeArr', []), _defineProperty(_this$data, 'IndustryType', [[], [], [], []]), _defineProperty(_this$data, 'IndustryTypeIndex', [0, 0, 0, 0]), _defineProperty(_this$data, 'tradeTrue', true), _this$data), _this.methods = {
            bindMultiPickerChange: function bindMultiPickerChange(e) {
                var one = this.multiArray[0][this.region[0]];
                var two = this.multiArray[1].length > 0 ? '/' + this.multiArray[1][this.region[1]] : '';
                var three = this.multiArray[2].length > 0 ? '/' + this.multiArray[2][this.region[2]] : '';
                var five = this.multiArray[3].length > 0 ? '/' + this.multiArray[3][this.region[3]] : '';
                this.regionText = one + two + three + five;
                for (var i = this.multiArray.length - 1; i >= 0; i--) {
                    if (this.multiArray[i].length > 0) {
                        this.searchData.Region = this.multiArrayId[i][this.region[i]];
                        break;
                    }
                }
            },
            bindMultiPickerColumnChange: function bindMultiPickerColumnChange(e) {
                console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
                if (e.detail.column < 3) {
                    this.num = e.detail.column + 2;
                    this.getRegion(e.detail.column + 2, this.multiArrayId[e.detail.column][e.detail.value]);
                    this.region[e.detail.column] = e.detail.value;
                }
            },
            getData: function getData(type) {
                if (type == "Category") {
                    this.Category = [[], [], []];
                    this.$apply();
                    this.GetGeneralCodeComboOutput('CLKL', 0, '');
                    this.CategoryTrue = false;
                } else if (type == "IndustryType") {
                    this.IndustryType = [[], [], [], []];
                    this.$apply();
                    this.GetGeneralCodeComboOutput('CLIDT', 0, '');
                    this.tradeTrue = false;
                }
            },
            change: function change(type) {
                if (type == "Category") {
                    if (this.Category[1].length == 0) {
                        this.getCategoryArr = this.Category[0][this.CategoryIndex[0]].name;
                        this.searchData.Category = this.Category[0][this.CategoryIndex[0]].id;
                    } else if (this.Category[2].length == 0) {
                        this.getCategoryArr = this.Category[0][this.CategoryIndex[0]].name + '/' + this.Category[1][this.CategoryIndex[1]].name;
                        this.searchData.Category = this.Category[1][this.CategoryIndex[1]].id;
                    } else {
                        this.getCategoryArr = this.Category[0][this.CategoryIndex[0]].name + '/' + this.Category[1][this.CategoryIndex[1]].name + '/' + this.Category[2][this.CategoryIndex[2]].name;
                        this.searchData.Category = this.Category[2][this.CategoryIndex[2]].id;
                    }
                } else if (type == "IndustryType") {
                    if (this.IndustryType[1].length == 0) {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name;
                        this.searchData.IndustryType = this.IndustryType[0][this.IndustryTypeIndex[0]].id;
                    } else if (this.IndustryType[2].length == 0) {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name + '/' + this.IndustryType[1][this.IndustryTypeIndex[1]].name;
                        this.searchData.IndustryType = this.IndustryType[1][this.IndustryTypeIndex[1]].id;
                    } else if (this.IndustryType[3].length == 0) {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name + '/' + this.IndustryType[1][this.IndustryTypeIndex[1]].name + '/' + this.IndustryType[2][this.IndustryTypeIndex[2]].name;
                        this.searchData.IndustryType = this.IndustryType[2][this.IndustryTypeIndex[2]].id;
                    } else {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name + '/' + this.IndustryType[1][this.IndustryTypeIndex[1]].name + '/' + this.IndustryType[3][this.IndustryTypeIndex[3]].name + '/' + this.IndustryType[3][this.IndustryTypeIndex[3]].name;
                        this.searchData.IndustryType = this.IndustryType[3][this.IndustryTypeIndex[3]].id;
                    }
                }
                this.$apply();
            },
            bindMultiPickerColumnChangeCategory: function bindMultiPickerColumnChangeCategory(e) {
                console.log(e);
                switch (e.detail.column) {
                    case 0:
                        this.Category[1] = [];
                        this.Category[2] = [];
                        this.GetGeneralCodeComboOutput("CLKL", 1, this.Category[0][e.detail.value].id);
                        this.CategoryIndex[0] = e.detail.value;
                        this.CategoryIndex[1] = 0;
                        this.CategoryIndex[2] = 0;
                        break;
                    case 1:
                        this.Category[2] = [];
                        this.GetGeneralCodeComboOutput("CLKL", 2, this.Category[1][e.detail.value].id);
                        this.CategoryIndex[1] = e.detail.value;
                        this.CategoryIndex[2] = 0;
                        break;
                    case 2:
                        this.CategoryIndex[2] = e.detail.value;
                        break;
                }
                this.$apply();
            },
            bindMultiPickerColumnChangeCategory2: function bindMultiPickerColumnChangeCategory2(e) {
                switch (e.detail.column) {
                    case 0:
                        this.IndustryType[1] = [];
                        this.IndustryType[2] = [];
                        this.IndustryType[3] = [];
                        this.GetGeneralCodeComboOutput("CLIDT", 1, this.IndustryType[0][e.detail.value].id);
                        this.IndustryTypeIndex[0] = e.detail.value;
                        this.IndustryTypeIndex[1] = 0;
                        this.IndustryTypeIndex[2] = 0;
                        this.IndustryTypeIndex[3] = 0;
                        break;
                    case 1:
                        this.IndustryType[2] = [];
                        this.IndustryType[3] = [];
                        this.GetGeneralCodeComboOutput("CLIDT", 2, this.IndustryType[1][e.detail.value].id);
                        this.IndustryTypeIndex[1] = e.detail.value;
                        this.IndustryTypeIndex[2] = 0;
                        this.IndustryTypeIndex[3] = 0;
                        break;
                    case 2:
                        this.IndustryType[3] = [];
                        this.GetGeneralCodeComboOutput("CLIDT", 3, this.IndustryType[2][e.detail.value].id);
                        this.IndustryTypeIndex[2] = e.detail.value;
                        this.IndustryTypeIndex[3] = 0;
                        break;
                    case 3:
                        this.IndustryTypeIndex[3] = e.detail.value;
                    default:
                        break;
                }
                this.$apply();
            },
            changePickerData: function changePickerData(e) {
                console.log(e);
                this.region = e.detail.value;
                this.searchData.Region = e.detail.postcode;
                this.$apply();
            },
            bindDateChangeStart: function bindDateChangeStart(e) {
                if (this.searchData.CreationTime) {
                    this.searchData.CreationTime.startDate = e.detail.value;
                } else {
                    var CreationTime = {};
                    CreationTime.startDate = e.detail.value;
                    this.searchData.CreationTime = CreationTime;
                }
                this.startDate = e.detail.value;
                this.$apply();
            },
            bindDateChangeEnd: function bindDateChangeEnd(e) {
                if (this.searchData.CreationTime) {
                    this.searchData.CreationTime.endDate = e.detail.value;
                } else {
                    var CreationTime = {};
                    CreationTime.endDate = e.detail.value;
                    this.searchData.CreationTime = CreationTime;
                }
                this.endDate = e.detail.value;
                this.$apply();
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
                            _this2.history_keyWord_client = [];
                            var history = wx.getStorageSync('HISTORY_KEYWORD_CLIENT');
                            history = [];
                            wx.setStorageSync('HISTORY_KEYWORD_CLIENT', history);
                            _this2.$apply();
                        }
                    }
                });
            },
            deletItem: function deletItem(index) {
                this.history_keyWord_client.splice(index, 1);
                var history = wx.getStorageSync('HISTORY_KEYWORD_CLIENT');
                history.splice(index, 1);
                wx.setStorageSync('HISTORY_KEYWORD_CLIENT', history);
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
            advancedSearchSubmit: function advancedSearchSubmit() {
                var resData = _ajax2.default.getData('/api/services/web/client/GetClients', 'post', this.searchData);
                var pages = getCurrentPages();
                var prevPage = pages[pages.length - 2]; //上一个页面
                if (prevPage) {
                    prevPage.isRefresh(this.searchData);
                    wx.navigateBack({
                        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                    });
                }
            },
            submitSearch: function submitSearch(e) {
                var value = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
                if (value) {
                    var pages = getCurrentPages();
                    this.searchData.KeyWord = e.detail.value;
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    if (prevPage) {
                        prevPage.isRefresh(this.searchData);
                        wx.navigateBack({
                            delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                            success: function success() {
                                var History_KeyWord_Client = wx.getStorageSync('HISTORY_KEYWORD_CLIENT');
                                if (History_KeyWord_Client.length >= 20) {
                                    History_KeyWord_Client.splice(History_KeyWord_Client.length - 1, 1);
                                }
                                History_KeyWord_Client.unshift(value);
                                History_KeyWord_Client = (0, _api.myDistinct)(History_KeyWord_Client);
                                wx.setStorageSync('HISTORY_KEYWORD_CLIENT', History_KeyWord_Client);
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
        }, _this.events = {}, _this.watch = {
            NameValue: function NameValue(value) {
                this.searchData.Name = value;
                this.$apply();
            },
            IdValue: function IdValue(value) {
                this.searchData.Id = value;
                this.$apply();
            },
            ImportLevelIndex: function ImportLevelIndex(index) {
                this.searchData.ImportLevel = this.ImportLevel.value[index];
                this.$apply();
            },
            OriginIndex: function OriginIndex(index) {
                this.searchData.Origin = this.Origin.value[index];
                this.$apply();
            },
            ClientTypeIndex: function ClientTypeIndex(index) {
                this.searchData.ClientType = this.ClientType.value[index];
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchClient, [{
        key: 'isHistory',

        // 判断初始化历史数据
        value: function isHistory() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            prevPage.data.queryStream = {};
            prevPage.data.refresh = false;
            var History_KeyWord_Client = wx.getStorageSync('HISTORY_KEYWORD_CLIENT');
            if (!History_KeyWord_Client) {
                History_KeyWord_Client = [];
                wx.setStorageSync('HISTORY_KEYWORD_CLIENT', History_KeyWord_Client);
            } else {
                this.history_keyWord_client = History_KeyWord_Client;
                for (var index in this.history_keyWord_client) {
                    this.isShowArray[index] = false;
                }
            }
            this.$apply();
        }
        //获取业务类型

    }, {
        key: 'GetGeneralCodeComboOutput',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(keyWords, Depth, ParentId) {
                var data, resData, i, _i;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    Class: keyWords,
                                    Depth: Depth,
                                    IsMaxDepth: true,
                                    ParentId: ParentId,
                                    IsRecursive: false
                                    // isAll: true
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboOutput', 'post', data);

                            case 3:
                                resData = _context.sent;

                                // console.log(resData);
                                // console.log(keyWords,Depth,ParentId);
                                if (resData.statusCode == 200 && resData.data.result.length !== 0 && keyWords == "CLIDT") {
                                    for (i = 0; i < resData.data.result.length; i++) {
                                        this.IndustryType[Depth].push(resData.data.result[i]);
                                    }
                                    if (Depth < 4) {
                                        this.GetGeneralCodeComboOutput("CLIDT", Depth + 1, this.IndustryType[Depth][0].id);
                                    }
                                    this.$apply();
                                }
                                if (resData.statusCode == 200 && resData.data.result.length !== 0 && keyWords == "CLKL") {
                                    for (_i = 0; _i < resData.data.result.length; _i++) {
                                        this.Category[Depth].push(resData.data.result[_i]);
                                    }
                                    console.log(Depth);
                                    // if (this.Category[Depth].length == 0) {
                                    //     this.Category[Depth].push({name:"无"})
                                    // }
                                    if (Depth < 2) {
                                        this.GetGeneralCodeComboOutput("CLKL", Depth + 1, this.Category[Depth][0].id);
                                    }
                                    this.$apply();
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetGeneralCodeComboOutput(_x, _x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralCodeComboOutput;
        }()
        //检索条件信息

    }, {
        key: 'GetSearchForClients',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, SearchForClients_data, index_Import, Origin_index, ClientType_index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/client/GetSearchForClients', 'post');

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    SearchForClients_data = resData.data.result;

                                    for (index_Import in SearchForClients_data.importantLevelCombobox) {
                                        this.ImportLevel.value[index_Import] = SearchForClients_data.importantLevelCombobox[index_Import].value;
                                        this.ImportLevel.displayText[index_Import] = SearchForClients_data.importantLevelCombobox[index_Import].displayText;
                                    }
                                    for (Origin_index in SearchForClients_data.customerOriginCombobox) {
                                        this.Origin.value[Origin_index] = SearchForClients_data.customerOriginCombobox[Origin_index].value;
                                        this.Origin.displayText[Origin_index] = SearchForClients_data.customerOriginCombobox[Origin_index].displayText;
                                    }
                                    for (ClientType_index in SearchForClients_data.customerTypeCombobox) {
                                        this.ClientType.value[ClientType_index] = SearchForClients_data.customerTypeCombobox[ClientType_index].value;
                                        this.ClientType.displayText[ClientType_index] = SearchForClients_data.customerTypeCombobox[ClientType_index].displayText;
                                    }
                                    this.$apply();
                                } else {
                                    wx.showLoading({
                                        title: '网络故障，请检查！', //提示的内容,
                                        mask: true, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetSearchForClients() {
                return _ref3.apply(this, arguments);
            }

            return GetSearchForClients;
        }()
        /* 获取地区 */

    }, {
        key: 'getRegion',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var Depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var ParentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "100000";

                var _ref5, data, i;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetRegion', 'post', {
                                    Class: "region",
                                    Depth: Depth,
                                    IsMaxDepth: true,
                                    IsRecursive: false,
                                    ParentId: ParentId
                                });

                            case 2:
                                _ref5 = _context3.sent;
                                data = _ref5.data;

                                if (data.result.length < 1) {
                                    this.num = 5;
                                    for (i = Depth - 1; i < 4; i++) {
                                        this.multiArray[i] = [];
                                    }
                                } else {
                                    this.multiArray[Depth - 1] = data.result.map(function (item) {
                                        return item.name;
                                    });
                                    this.multiArrayId[Depth - 1] = data.result.map(function (item) {
                                        return item.id;
                                    });
                                }
                                this.$apply();
                                this.region[this.num - 1] = 0;
                                this.num++;
                                if (this.num < 5) {
                                    this.getRegion(this.num, this.multiArrayId[Depth - 1][0]);
                                }

                            case 9:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getRegion() {
                return _ref4.apply(this, arguments);
            }

            return getRegion;
        }()
        /* 高级搜索 */
        // search

    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.isHistory();
            this.GetSearchForClients();
            // this.GetGeneralCodeComboOutput("CLKL",0,'');
            // this.GetGeneralCodeComboOutput("CLIDT",0,'');
            this.getRegion();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.num = 1;
        }
    }]);

    return searchClient;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchClient , 'pages/modules/myclient/search/search_client'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaF9jbGllbnQuanMiXSwibmFtZXMiOlsic2VhcmNoQ2xpZW50IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiTmFtZSIsIklkIiwiT3JnYW5pemF0aW9uVW5pdElkIiwiSW1wb3J0TGV2ZWwiLCJPcmlnaW4iLCJDbGllbnRUeXBlIiwiZGF0YSIsInJlZ2lvbiIsInJlZ2lvblRleHQiLCJpZCIsIm11bHRpQXJyYXkiLCJtdWx0aUFycmF5SWQiLCJzZWFyY2hEYXRhIiwiQ2F0ZWdvcnkiLCJDcmVhdGlvblRpbWUiLCJTdGFydERhdGUiLCJFbmREYXRlIiwiSW5kdXN0cnlUeXBlIiwiSXNBbGwiLCJLZXlXb3JkIiwiUmVnaW9uIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwic29ydGluZyIsInNob3dQYWdlIiwiaGlzdG9yeV9rZXlXb3JkX2NsaWVudCIsInNlYXJjaENsZW50VmFsdWUiLCJpc1Nob3dBcnJheSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0aXRsZSIsIm5hbWUiLCJ3YXJuaW5nIiwidHlwZSIsIk5hbWVWYWx1ZSIsIklkVmFsdWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiT3JnYW5pemF0aW9uVW5pdElkSW5kZXgiLCJJbXBvcnRMZXZlbEluZGV4IiwiT3JpZ2luSW5kZXgiLCJDbGllbnRUeXBlSW5kZXgiLCJwaWNrZXJEYXRhIiwibWV0aG9kcyIsImJpbmRNdWx0aVBpY2tlckNoYW5nZSIsImUiLCJvbmUiLCJ0d28iLCJsZW5ndGgiLCJ0aHJlZSIsImZpdmUiLCJpIiwiYmluZE11bHRpUGlja2VyQ29sdW1uQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbHVtbiIsIm51bSIsImdldFJlZ2lvbiIsImdldERhdGEiLCIkYXBwbHkiLCJHZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0IiwiQ2F0ZWdvcnlUcnVlIiwidHJhZGVUcnVlIiwiY2hhbmdlIiwiZ2V0Q2F0ZWdvcnlBcnIiLCJDYXRlZ29yeUluZGV4IiwiZ2V0VHJhZGVBcnIiLCJJbmR1c3RyeVR5cGVJbmRleCIsImJpbmRNdWx0aVBpY2tlckNvbHVtbkNoYW5nZUNhdGVnb3J5IiwiYmluZE11bHRpUGlja2VyQ29sdW1uQ2hhbmdlQ2F0ZWdvcnkyIiwiY2hhbmdlUGlja2VyRGF0YSIsInBvc3Rjb2RlIiwiYmluZERhdGVDaGFuZ2VTdGFydCIsImJpbmREYXRlQ2hhbmdlRW5kIiwiZGVsZXRJdGVtQWxsIiwid3giLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwibG9uZ1RhcCIsIm1hcCIsIml0ZW0iLCJhZHZhbmNlZFNlYXJjaFN1Ym1pdCIsInJlc0RhdGEiLCJhamF4IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImlzUmVmcmVzaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic3VibWl0U2VhcmNoIiwicmVwbGFjZSIsIkhpc3RvcnlfS2V5V29yZF9DbGllbnQiLCJ1bnNoaWZ0Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJxdWVyeVN0cmVhbSIsInJlZnJlc2giLCJrZXlXb3JkcyIsIkRlcHRoIiwiUGFyZW50SWQiLCJDbGFzcyIsIklzTWF4RGVwdGgiLCJJc1JlY3Vyc2l2ZSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJwdXNoIiwiU2VhcmNoRm9yQ2xpZW50c19kYXRhIiwiaW5kZXhfSW1wb3J0IiwiaW1wb3J0YW50TGV2ZWxDb21ib2JveCIsIk9yaWdpbl9pbmRleCIsImN1c3RvbWVyT3JpZ2luQ29tYm9ib3giLCJDbGllbnRUeXBlX2luZGV4IiwiY3VzdG9tZXJUeXBlQ29tYm9ib3giLCJzaG93TG9hZGluZyIsImlzSGlzdG9yeSIsIkdldFNlYXJjaEZvckNsaWVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7OztBQUlBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsTUFBdkMsRUFBOEMsMEJBQXlCLFdBQXZFLEVBQW1GLDJCQUEwQixXQUE3RyxFQUFSLEVBQWtJLE1BQUssRUFBQyxxQkFBb0IsSUFBckIsRUFBMEIsMEJBQXlCLFNBQW5ELEVBQTZELDJCQUEwQixTQUF2RixFQUF2SSxFQUF5TyxzQkFBcUIsRUFBQyx1QkFBc0Isb0JBQXZCLEVBQTRDLHFCQUFvQix5QkFBaEUsRUFBMEYsMkJBQTBCLHlCQUFwSCxFQUE5UCxFQUE2WSxlQUFjLEVBQUMsdUJBQXNCLGFBQXZCLEVBQXFDLHFCQUFvQixrQkFBekQsRUFBNEUsMkJBQTBCLGtCQUF0RyxFQUEzWixFQUFxaEIsVUFBUyxFQUFDLHVCQUFzQixRQUF2QixFQUFnQyxxQkFBb0IsYUFBcEQsRUFBa0UsMkJBQTBCLGFBQTVGLEVBQTloQixFQUF5b0IsY0FBYSxFQUFDLHVCQUFzQixZQUF2QixFQUFvQyxxQkFBb0IsaUJBQXhELEVBQTBFLDJCQUEwQixpQkFBcEcsRUFBdHBCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlDQURFO0FBRUZDLCtCQUZFO0FBR0ZDLGdEQUhFO0FBSUZDLHlDQUpFO0FBS0ZDLG9DQUxFO0FBTUZDO0FBTkUsUyxRQVFOQyxJO0FBQ0lDLG9CQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDO0FBQ1BDLHdCQUFXLEU7QUFDWEMsZ0JBQUcsQztBQUNIQyx3QkFBWSxFO0FBQ1pDLDBCQUFh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QXhCLEVBQTBCO0FBQ3RCLHlDQUFLUyxHQUFMLEdBQVcsQ0FBWDtBQUNBLHlDQUFRTixDQUFSLEdBQVlvRSxRQUFRLENBQXBCLEVBQXdCcEUsSUFBSSxDQUE1QixFQUE4QkEsR0FBOUIsRUFBa0M7QUFDOUIsNkNBQUt6QyxVQUFMLENBQWdCeUMsQ0FBaEIsSUFBcUIsRUFBckI7QUFDSDtBQUNKLGlDQUxELE1BS0s7QUFDRCx5Q0FBS3pDLFVBQUwsQ0FBZ0I2RyxRQUFRLENBQXhCLElBQTZCakgsS0FBS3VILE1BQUwsQ0FBWS9CLEdBQVosQ0FBZ0I7QUFBQSwrQ0FBUUMsS0FBS2hFLElBQWI7QUFBQSxxQ0FBaEIsQ0FBN0I7QUFDQSx5Q0FBS3BCLFlBQUwsQ0FBa0I0RyxRQUFRLENBQTFCLElBQStCakgsS0FBS3VILE1BQUwsQ0FBWS9CLEdBQVosQ0FBZ0I7QUFBQSwrQ0FBUUMsS0FBS3RGLEVBQWI7QUFBQSxxQ0FBaEIsQ0FBL0I7QUFDSDtBQUNELHFDQUFLbUQsTUFBTDtBQUNBLHFDQUFLckQsTUFBTCxDQUFZLEtBQUtrRCxHQUFMLEdBQVcsQ0FBdkIsSUFBNEIsQ0FBNUI7QUFDQSxxQ0FBS0EsR0FBTDtBQUNBLG9DQUFHLEtBQUtBLEdBQUwsR0FBVyxDQUFkLEVBQWdCO0FBQ1oseUNBQUtDLFNBQUwsQ0FBZSxLQUFLRCxHQUFwQixFQUF3QixLQUFLOUMsWUFBTCxDQUFrQjRHLFFBQVEsQ0FBMUIsRUFBNkIsQ0FBN0IsQ0FBeEI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQUVMO0FBQ0E7Ozs7aUNBQ1M7QUFDTCxpQkFBS2dCLFNBQUw7QUFDQSxpQkFBS0MsbUJBQUw7QUFDQTtBQUNBO0FBQ0EsaUJBQUs5RSxTQUFMO0FBQ0g7OztpQ0FDUTtBQUNMLGlCQUFLRCxHQUFMLEdBQVcsQ0FBWDtBQUNIOzs7O0VBN2ZxQ2dGLGVBQUtDLEk7O2tCQUExQi9JLFkiLCJmaWxlIjoic2VhcmNoX2NsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7XG4gICAgICAgIG15RGlzdGluY3RcbiAgICB9IGZyb20gJ0AvdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgYWpheCBmcm9tICdAL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdERhdGVcbiAgICB9IGZyb20gJ0AvdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgTmFtZSBmcm9tICdAL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgSWQgZnJvbSAnQC9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IE9yZ2FuaXphdGlvblVuaXRJZCBmcm9tICdAL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IEltcG9ydExldmVsIGZyb20gJ0AvY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgT3JpZ2luIGZyb20gJ0AvY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgQ2xpZW50VHlwZSBmcm9tICdAL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ2xpZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk5hbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcIk5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIk5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIk5hbWVWYWx1ZVwifSxcIklkXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIklkXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJJZFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiSWRWYWx1ZVwifSxcIk9yZ2FuaXphdGlvblVuaXRJZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIk9yZ2FuaXphdGlvblVuaXRJZFwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIk9yZ2FuaXphdGlvblVuaXRJZEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiT3JnYW5pemF0aW9uVW5pdElkSW5kZXhcIn0sXCJJbXBvcnRMZXZlbFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkltcG9ydExldmVsXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiSW1wb3J0TGV2ZWxJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkltcG9ydExldmVsSW5kZXhcIn0sXCJPcmlnaW5cIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJPcmlnaW5cIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJPcmlnaW5JbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIk9yaWdpbkluZGV4XCJ9LFwiQ2xpZW50VHlwZVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkNsaWVudFR5cGVcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJDbGllbnRUeXBlSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDbGllbnRUeXBlSW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgTmFtZSxcbiAgICAgICAgICAgIElkLFxuICAgICAgICAgICAgT3JnYW5pemF0aW9uVW5pdElkLFxuICAgICAgICAgICAgSW1wb3J0TGV2ZWwsXG4gICAgICAgICAgICBPcmlnaW4sXG4gICAgICAgICAgICBDbGllbnRUeXBlXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICByZWdpb246WzAsMCwwLDBdLFxuICAgICAgICAgICAgcmVnaW9uVGV4dDonJyxcbiAgICAgICAgICAgIGlkOjEsXG4gICAgICAgICAgICBtdWx0aUFycmF5OiBbXSxcbiAgICAgICAgICAgIG11bHRpQXJyYXlJZDpbXSxcbiAgICAgICAgICAgIHNlYXJjaERhdGE6IHtcbiAgICAgICAgICAgICAgICBDYXRlZ29yeTogXCJcIixcbiAgICAgICAgICAgICAgICBDbGllbnRUeXBlOiBcIlwiLFxuICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZToge1N0YXJ0RGF0ZTogJycsIEVuZERhdGU6ICcnfSxcbiAgICAgICAgICAgICAgICBJZDogXCJcIixcbiAgICAgICAgICAgICAgICBJbXBvcnRMZXZlbDogXCJcIixcbiAgICAgICAgICAgICAgICBJbmR1c3RyeVR5cGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgSXNBbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgS2V5V29yZDogXCJcIixcbiAgICAgICAgICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZDogXCJcIixcbiAgICAgICAgICAgICAgICBPcmlnaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgUmVnaW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93UGFnZTogdHJ1ZSxcbiAgICAgICAgICAgIGhpc3Rvcnlfa2V5V29yZF9jbGllbnQ6IFtdLFxuICAgICAgICAgICAgc2VhcmNoQ2xlbnRWYWx1ZTogJycsXG4gICAgICAgICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgICAgICAgICBzdGFydERhdGU6ICcnLFxuICAgICAgICAgICAgZW5kRGF0ZTogJycsXG4gICAgICAgICAgICBOYW1lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqLmiLflkI3np7AnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIElkOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqLmiLfnvJblj7cnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdJZCcsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIElkVmFsdWU6ICcnLFxuICAgICAgICAgICAgT3JnYW5pemF0aW9uVW5pdElkOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnu4Tnu4fnu5PmnoQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdPcmdhbml6YXRpb25Vbml0SWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWRJbmRleDogLTEsXG4gICAgICAgICAgICBJbXBvcnRMZXZlbDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6YeN6KaB57qn5YirJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSW1wb3J0TGV2ZWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW10sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJbXBvcnRMZXZlbEluZGV4OiAtMSxcbiAgICAgICAgICAgIE9yaWdpbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6i5oi35p2l5rqQJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnT3JpZ2luJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgT3JpZ2luSW5kZXg6IC0xLFxuICAgICAgICAgICAgQ2xpZW50VHlwZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6i5oi357G75Z6LJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2xpZW50VHlwZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENsaWVudFR5cGVJbmRleDogLTEsXG4gICAgICAgICAgICAvLyBDYXRlZ29yeTogW10sXG4gICAgICAgICAgICAvLyBDYXRlZ29yeURhdGE6IFtdLFxuICAgICAgICAgICAgLy8gSW5kdXN0cnlUeXBlOiBbXSxcbiAgICAgICAgICAgIHBpY2tlckRhdGE6ICcnLFxuICAgICAgICAgICAgcmVnaW9uOiBbXSxcbiAgICAgICAgICAgIGN1c3RvbUl0ZW06ICcnLFxuICAgICAgICAgICAgLy/kuJrliqHnsbvlnotcbiAgICAgICAgICAgIGdldENhdGVnb3J5QXJyOiBbXSxcbiAgICAgICAgICAgIENhdGVnb3J5OiBbXG4gICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBDYXRlZ29yeUluZGV4OiBbMCwgMCwgMF0sXG4gICAgICAgICAgICBDYXRlZ29yeVRydWU6IHRydWUsXG4gICAgICAgICAgICBnZXRUcmFkZUFycjogW10sXG4gICAgICAgICAgICBJbmR1c3RyeVR5cGU6IFtcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIEluZHVzdHJ5VHlwZUluZGV4OiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICB0cmFkZVRydWU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kTXVsdGlQaWNrZXJDaGFuZ2UgKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgb25lID0gdGhpcy5tdWx0aUFycmF5WzBdW3RoaXMucmVnaW9uWzBdXSAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHR3byA9IHRoaXMubXVsdGlBcnJheVsxXS5sZW5ndGggPiAwID8gJy8nKyB0aGlzLm11bHRpQXJyYXlbMV1bdGhpcy5yZWdpb25bMV1dIDogJydcbiAgICAgICAgICAgICAgICBsZXQgdGhyZWUgPSB0aGlzLm11bHRpQXJyYXlbMl0ubGVuZ3RoID4gMCA/ICcvJysgdGhpcy5tdWx0aUFycmF5WzJdW3RoaXMucmVnaW9uWzJdXSA6ICcnXG4gICAgICAgICAgICAgICAgbGV0IGZpdmUgPSB0aGlzLm11bHRpQXJyYXlbM10ubGVuZ3RoID4gMCA/ICcvJysgdGhpcy5tdWx0aUFycmF5WzNdW3RoaXMucmVnaW9uWzNdXSA6ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uVGV4dCA9IG9uZSArIHR3byArIHRocmVlICsgZml2ZVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHRoaXMubXVsdGlBcnJheS5sZW5ndGggLSAxO2kgPj0gMDtpLS0pe1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm11bHRpQXJyYXlbaV0ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuUmVnaW9uID0gdGhpcy5tdWx0aUFycmF5SWRbaV1bdGhpcy5yZWdpb25baV1dXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S/ruaUueeahOWIl+S4uicsIGUuZGV0YWlsLmNvbHVtbiwgJ++8jOWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZihlLmRldGFpbC5jb2x1bW4gPCAzKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW0gPSBlLmRldGFpbC5jb2x1bW4gKyAyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVnaW9uKGUuZGV0YWlsLmNvbHVtbiArIDIsdGhpcy5tdWx0aUFycmF5SWRbZS5kZXRhaWwuY29sdW1uXVtlLmRldGFpbC52YWx1ZV0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uW2UuZGV0YWlsLmNvbHVtbl0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0RGF0YSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJDYXRlZ29yeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnkgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0xLTCcsIDAsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeVRydWUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIkluZHVzdHJ5VHlwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0xJRFQnLCAwLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhZGVUcnVlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBcIkNhdGVnb3J5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ2F0ZWdvcnlbMV0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlBcnIgPSB0aGlzLkNhdGVnb3J5WzBdW3RoaXMuQ2F0ZWdvcnlJbmRleFswXV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeSA9IHRoaXMuQ2F0ZWdvcnlbMF1bdGhpcy5DYXRlZ29yeUluZGV4WzBdXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkNhdGVnb3J5WzJdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENhdGVnb3J5QXJyID0gdGhpcy5DYXRlZ29yeVswXVt0aGlzLkNhdGVnb3J5SW5kZXhbMF1dLm5hbWUgKyAnLycgKyB0aGlzLkNhdGVnb3J5WzFdW3RoaXMuQ2F0ZWdvcnlJbmRleFsxXV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeSA9IHRoaXMuQ2F0ZWdvcnlbMV1bdGhpcy5DYXRlZ29yeUluZGV4WzFdXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlBcnIgPSB0aGlzLkNhdGVnb3J5WzBdW3RoaXMuQ2F0ZWdvcnlJbmRleFswXV0ubmFtZSArICcvJyArIHRoaXMuQ2F0ZWdvcnlbMV1bdGhpcy5DYXRlZ29yeUluZGV4WzFdXS5uYW1lICsgJy8nICsgdGhpcy5DYXRlZ29yeVsyXVt0aGlzLkNhdGVnb3J5SW5kZXhbMl1dLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ2F0ZWdvcnkgPSB0aGlzLkNhdGVnb3J5WzJdW3RoaXMuQ2F0ZWdvcnlJbmRleFsyXV0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJJbmR1c3RyeVR5cGVcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5JbmR1c3RyeVR5cGVbMV0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhZGVBcnIgPSB0aGlzLkluZHVzdHJ5VHlwZVswXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzBdXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkluZHVzdHJ5VHlwZSA9IHRoaXMuSW5kdXN0cnlUeXBlWzBdW3RoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMF1dLmlkO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuSW5kdXN0cnlUeXBlWzJdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyYWRlQXJyID0gdGhpcy5JbmR1c3RyeVR5cGVbMF1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFswXV0ubmFtZSArICcvJyArIHRoaXMuSW5kdXN0cnlUeXBlWzFdW3RoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMV1dLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5JbmR1c3RyeVR5cGUgPSB0aGlzLkluZHVzdHJ5VHlwZVsxXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzFdXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkluZHVzdHJ5VHlwZVszXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFkZUFyciA9IHRoaXMuSW5kdXN0cnlUeXBlWzBdW3RoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMF1dLm5hbWUgKyAnLycgKyB0aGlzLkluZHVzdHJ5VHlwZVsxXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzFdXS5uYW1lICsgJy8nICsgdGhpcy5JbmR1c3RyeVR5cGVbMl1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsyXV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5JbmR1c3RyeVR5cGUgPSB0aGlzLkluZHVzdHJ5VHlwZVsyXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzJdXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhZGVBcnIgPSB0aGlzLkluZHVzdHJ5VHlwZVswXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzBdXS5uYW1lICsgJy8nICsgdGhpcy5JbmR1c3RyeVR5cGVbMV1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsxXV0ubmFtZSArICcvJyArIHRoaXMuSW5kdXN0cnlUeXBlWzNdW3RoaXMuSW5kdXN0cnlUeXBlSW5kZXhbM11dLm5hbWUgKyAnLycgKyB0aGlzLkluZHVzdHJ5VHlwZVszXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzNdXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkluZHVzdHJ5VHlwZSA9IHRoaXMuSW5kdXN0cnlUeXBlWzNdW3RoaXMuSW5kdXN0cnlUeXBlSW5kZXhbM11dLmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZE11bHRpUGlja2VyQ29sdW1uQ2hhbmdlQ2F0ZWdvcnkoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5kZXRhaWwuY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlbMV0gPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeVsyXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoXCJDTEtMXCIsIDEsIHRoaXMuQ2F0ZWdvcnlbMF1bZS5kZXRhaWwudmFsdWVdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlJbmRleFswXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5SW5kZXhbMV0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5SW5kZXhbMl0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeVsyXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoXCJDTEtMXCIsIDIsIHRoaXMuQ2F0ZWdvcnlbMV1bZS5kZXRhaWwudmFsdWVdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlJbmRleFsxXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5SW5kZXhbMl0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeUluZGV4WzJdID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZE11bHRpUGlja2VyQ29sdW1uQ2hhbmdlQ2F0ZWdvcnkyKGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuZGV0YWlsLmNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVsxXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVsyXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVszXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoXCJDTElEVFwiLCAxLCB0aGlzLkluZHVzdHJ5VHlwZVswXVtlLmRldGFpbC52YWx1ZV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFswXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzFdID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsyXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlSW5kZXhbM10gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVbMl0gPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVbM10gPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KFwiQ0xJRFRcIiwgMiwgdGhpcy5JbmR1c3RyeVR5cGVbMV1bZS5kZXRhaWwudmFsdWVdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMV0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsyXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlSW5kZXhbM10gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVbM10gPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KFwiQ0xJRFRcIiwgMywgdGhpcy5JbmR1c3RyeVR5cGVbMl1bZS5kZXRhaWwudmFsdWVdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMl0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFszXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzNdID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZVBpY2tlckRhdGEoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLlJlZ2lvbiA9IGUuZGV0YWlsLnBvc3Rjb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2VTdGFydChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoRGF0YS5DcmVhdGlvblRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNyZWF0aW9uVGltZS5zdGFydERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgQ3JlYXRpb25UaW1lID0ge307XG4gICAgICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZS5zdGFydERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLkNyZWF0aW9uVGltZSA9IENyZWF0aW9uVGltZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmREYXRlQ2hhbmdlRW5kKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hEYXRhLkNyZWF0aW9uVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ3JlYXRpb25UaW1lLmVuZERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgQ3JlYXRpb25UaW1lID0ge307XG4gICAgICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZS5lbmREYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DcmVhdGlvblRpbWUgPSBDcmVhdGlvblRpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1BhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZSA9ICF0aGlzLnNob3dQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtQWxsKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5piv5ZCm5Yig6Zmk77yBJywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflhajpg6jljoblj7LorrDlvZUnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjN2E3YTdhJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2NsaWVudCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaXN0b3J5ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DTElFTlQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DTElFTlQnLCBoaXN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2xpZW50LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NMSUVOVCcpO1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NMSUVOVCcsIGhpc3RvcnkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvbmdUYXAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5ID0gdGhpcy5pc1Nob3dBcnJheS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQ2xlbnRWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZHZhbmNlZFNlYXJjaFN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzRGF0YSA9IGFqYXguZ2V0RGF0YSgnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50L0dldENsaWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSlcbiAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLktleVdvcmQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxLCAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX0NsaWVudCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0xJRU5UJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfQ2xpZW50Lmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0NsaWVudC5zcGxpY2UoSGlzdG9yeV9LZXlXb3JkX0NsaWVudC5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ2xpZW50LnVuc2hpZnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ2xpZW50ID0gbXlEaXN0aW5jdChIaXN0b3J5X0tleVdvcmRfQ2xpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DTElFTlQnLCBIaXN0b3J5X0tleVdvcmRfQ2xpZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLk5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIElkVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuSWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEltcG9ydExldmVsSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuSW1wb3J0TGV2ZWwgPSB0aGlzLkltcG9ydExldmVsLnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE9yaWdpbkluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLk9yaWdpbiA9IHRoaXMuT3JpZ2luLnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENsaWVudFR5cGVJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DbGllbnRUeXBlID0gdGhpcy5DbGllbnRUeXBlLnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgICAgIGlzSGlzdG9yeSgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnF1ZXJ5U3RyZWFtID0ge307XG4gICAgICAgICAgICBwcmV2UGFnZS5kYXRhLnJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfQ2xpZW50ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DTElFTlQnKTtcbiAgICAgICAgICAgIGlmICghSGlzdG9yeV9LZXlXb3JkX0NsaWVudCkge1xuICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9DbGllbnQgPSBbXTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NMSUVOVCcsIEhpc3RvcnlfS2V5V29yZF9DbGllbnQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2NsaWVudCA9IEhpc3RvcnlfS2V5V29yZF9DbGllbnQ7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5oaXN0b3J5X2tleVdvcmRfY2xpZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+iOt+WPluS4muWKoeexu+Wei1xuICAgICAgICBhc3luYyBHZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KGtleVdvcmRzLCBEZXB0aCwgUGFyZW50SWQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIENsYXNzOiBrZXlXb3JkcyxcbiAgICAgICAgICAgICAgICBEZXB0aDogRGVwdGgsXG4gICAgICAgICAgICAgICAgSXNNYXhEZXB0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBQYXJlbnRJZDogUGFyZW50SWQsXG4gICAgICAgICAgICAgICAgSXNSZWN1cnNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIGlzQWxsOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNEYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleVdvcmRzLERlcHRoLFBhcmVudElkKTtcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwICYmIHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoICE9PSAwICYmIGtleVdvcmRzID09IFwiQ0xJRFRcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVtEZXB0aF0ucHVzaChyZXNEYXRhLmRhdGEucmVzdWx0W2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoRGVwdGggPCA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChcIkNMSURUXCIsIERlcHRoICsgMSwgdGhpcy5JbmR1c3RyeVR5cGVbRGVwdGhdWzBdLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDAgJiYgcmVzRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGggIT09IDAgJiYga2V5V29yZHMgPT0gXCJDTEtMXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeVtEZXB0aF0ucHVzaChyZXNEYXRhLmRhdGEucmVzdWx0W2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhEZXB0aCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuQ2F0ZWdvcnlbRGVwdGhdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuQ2F0ZWdvcnlbRGVwdGhdLnB1c2goe25hbWU6XCLml6BcIn0pXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmIChEZXB0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KFwiQ0xLTFwiLCBEZXB0aCArIDEsIHRoaXMuQ2F0ZWdvcnlbRGVwdGhdWzBdLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5qOA57Si5p2h5Lu25L+h5oGvXG4gICAgICAgIGFzeW5jIEdldFNlYXJjaEZvckNsaWVudHMoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50L0dldFNlYXJjaEZvckNsaWVudHMnLFxuICAgICAgICAgICAgICAgICdwb3N0J1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgU2VhcmNoRm9yQ2xpZW50c19kYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleF9JbXBvcnQgaW4gU2VhcmNoRm9yQ2xpZW50c19kYXRhLmltcG9ydGFudExldmVsQ29tYm9ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbXBvcnRMZXZlbC52YWx1ZVtpbmRleF9JbXBvcnRdID0gU2VhcmNoRm9yQ2xpZW50c19kYXRhLmltcG9ydGFudExldmVsQ29tYm9ib3hbaW5kZXhfSW1wb3J0XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbXBvcnRMZXZlbC5kaXNwbGF5VGV4dFtpbmRleF9JbXBvcnRdID0gU2VhcmNoRm9yQ2xpZW50c19kYXRhLmltcG9ydGFudExldmVsQ29tYm9ib3hbaW5kZXhfSW1wb3J0XS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgT3JpZ2luX2luZGV4IGluIFNlYXJjaEZvckNsaWVudHNfZGF0YS5jdXN0b21lck9yaWdpbkNvbWJvYm94KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT3JpZ2luLnZhbHVlW09yaWdpbl9pbmRleF0gPSBTZWFyY2hGb3JDbGllbnRzX2RhdGEuY3VzdG9tZXJPcmlnaW5Db21ib2JveFtPcmlnaW5faW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk9yaWdpbi5kaXNwbGF5VGV4dFtPcmlnaW5faW5kZXhdID0gU2VhcmNoRm9yQ2xpZW50c19kYXRhLmN1c3RvbWVyT3JpZ2luQ29tYm9ib3hbT3JpZ2luX2luZGV4XS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgQ2xpZW50VHlwZV9pbmRleCBpbiBTZWFyY2hGb3JDbGllbnRzX2RhdGEuY3VzdG9tZXJUeXBlQ29tYm9ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGllbnRUeXBlLnZhbHVlW0NsaWVudFR5cGVfaW5kZXhdID0gU2VhcmNoRm9yQ2xpZW50c19kYXRhLmN1c3RvbWVyVHlwZUNvbWJvYm94W0NsaWVudFR5cGVfaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNsaWVudFR5cGUuZGlzcGxheVRleHRbQ2xpZW50VHlwZV9pbmRleF0gPSBTZWFyY2hGb3JDbGllbnRzX2RhdGEuY3VzdG9tZXJUeXBlQ29tYm9ib3hbQ2xpZW50VHlwZV9pbmRleF0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zmlYXpmpzvvIzor7fmo4Dmn6XvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIOiOt+WPluWcsOWMuiAqL1xuICAgICAgICBhc3luYyBnZXRSZWdpb24oRGVwdGggPSAxLFBhcmVudElkID0gXCIxMDAwMDBcIil7XG4gICAgICAgICAgICAgdmFyIHsgZGF0YSB9ID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0UmVnaW9uJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBDbGFzczogXCJyZWdpb25cIixcbiAgICAgICAgICAgICAgICAgICAgRGVwdGgsXG4gICAgICAgICAgICAgICAgICAgIElzTWF4RGVwdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIElzUmVjdXJzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgUGFyZW50SWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihkYXRhLnJlc3VsdC5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICB0aGlzLm51bSA9IDU7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gRGVwdGggLSAxIDsgaSA8IDQ7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aUFycmF5W2ldID0gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpQXJyYXlbRGVwdGggLSAxXSA9IGRhdGEucmVzdWx0Lm1hcChpdGVtID0+IGl0ZW0ubmFtZSlcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpQXJyYXlJZFtEZXB0aCAtIDFdID0gZGF0YS5yZXN1bHQubWFwKGl0ZW0gPT4gaXRlbS5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHRoaXMucmVnaW9uW3RoaXMubnVtIC0gMV0gPSAwO1xuICAgICAgICAgICAgdGhpcy5udW0rK1xuICAgICAgICAgICAgaWYodGhpcy5udW0gPCA1KXtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZ2lvbih0aGlzLm51bSx0aGlzLm11bHRpQXJyYXlJZFtEZXB0aCAtIDFdWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIOmrmOe6p+aQnOe0oiAqL1xuICAgICAgICAvLyBzZWFyY2hcbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5pc0hpc3RvcnkoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0U2VhcmNoRm9yQ2xpZW50cygpO1xuICAgICAgICAgICAgLy8gdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KFwiQ0xLTFwiLDAsJycpO1xuICAgICAgICAgICAgLy8gdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KFwiQ0xJRFRcIiwwLCcnKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVnaW9uKClcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgdGhpcy5udW0gPSAxO1xuICAgICAgICB9O1xuICAgIH1cbiJdfQ==