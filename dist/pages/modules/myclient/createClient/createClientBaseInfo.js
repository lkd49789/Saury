'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createClient = function (_wepy$page) {
    _inherits(createClient, _wepy$page);

    function createClient() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, createClient);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createClient.__proto__ || Object.getPrototypeOf(createClient)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: ""
        }, _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "EnName": { "v-bind:input.sync": "EnName", "v-bind:inputValue.sync": "EnNameValue", "v-bind:twoWayTitle.once": "EnNameValue" }, "pyName": { "v-bind:input.sync": "pyName", "v-bind:inputValue.sync": "pyNameValue", "v-bind:twoWayTitle.once": "pyNameValue" }, "Address": { "v-bind:input.sync": "Address", "v-bind:inputValue.sync": "AddressValue", "v-bind:twoWayTitle.once": "AddressValue" }, "RegisteredName": { "v-bind:input.sync": "RegisteredName", "v-bind:inputValue.sync": "RegisteredNameValue", "v-bind:twoWayTitle.once": "RegisteredNameValue" }, "RegisteredNo": { "v-bind:input.sync": "RegisteredNo", "v-bind:inputValue.sync": "RegisteredNoValue", "v-bind:twoWayTitle.once": "RegisteredNoValue" }, "OrganizationUnitId": { "v-bind:options.sync": "OrganizationUnitId", "v-bind:index.sync": "OrganizationUnitIdIndex", "v-bind:twoWayTitle.once": "OrganizationUnitIdIndex" }, "Origin": { "v-bind:options.sync": "Origin", "v-bind:index.sync": "OriginIndex", "v-bind:twoWayTitle.once": "OriginIndex" }, "Post": { "v-bind:input.sync": "Post", "v-bind:inputValue.sync": "PostValue", "v-bind:twoWayTitle.once": "PostValue" }, "HomePage": { "v-bind:input.sync": "HomePage", "v-bind:inputValue.sync": "HomePageValue", "v-bind:twoWayTitle.once": "HomePageValue" }, "Description": { "v-bind:input.sync": "Description", "v-bind:inputValue.sync": "DescriptionValue", "v-bind:twoWayTitle.once": "DescriptionValue" } }, _this.$events = {}, _this.components = {
            Name: _input2.default,
            EnName: _input2.default,
            pyName: _input2.default,
            Address: _input2.default,
            RegisteredName: _input2.default,
            RegisteredNo: _input2.default,
            OrganizationUnitId: _option2.default,
            Origin: _option2.default,
            Post: _input2.default,
            HomePage: _input2.default,
            Description: _input2.default
        }, _this.data = {
            addOpacity: 1,
            clientBaseData: {
                // Address: "地址"
                // Birthday: "2019-03-06"
                // CardNo: "123123123123123123"
                // Category: "10"
                // ClientType: "G"
                // Description: "描述"
                // Email: "ou_tong@163.com"
                // EnName: "客户名称英文"
                // Fax: ""
                // HomePage: ""
                // Id: ""
                // ImportLevel: "02"
                // IndustryType: "0211" //客户行业
                // Landline: ""
                // LegalDuty: "GM"
                // LegalPerson: "LP01"
                // Linker: ""
                // Name: "客户名称"
                // Nation: "1"
                // Occupation: "职业"
                // OrganizationUnitId: "12"
                // Origin: "02"
                // Post: ""
                // Region: "340803001"
                // RegisteredName: ""
                // RegisteredNo: ""
                // ShortName: ""
                // Tid: ""
                // TycName: ""
            },
            ClientType: [],
            Name: {
                title: '客户名称',
                name: 'Name',
                warning: true,
                type: 'text',
                options: false
            },
            NameValue: '',
            EnName: {
                title: '客户名称(英文)',
                name: 'EnName',
                warning: false,
                type: 'text',
                options: false
            },
            EnNameValue: '',
            pyName: {
                title: '客户名称缩写',
                name: 'pyName',
                warning: false,
                type: 'text',
                options: false
            },
            pyNameValue: '',
            RegisteredName: {
                title: '企业工商注册名称',
                name: 'RegisteredName',
                warning: false,
                type: 'text',
                options: false
            },
            RegisteredNameValue: '',
            RegisteredNo: {
                title: '企业公司注册号',
                name: 'RegisteredNo',
                warning: false,
                type: 'text',
                options: false
            },
            RegisteredNoValue: '',
            Address: {
                title: '客户地址',
                name: 'Address',
                warning: false,
                type: 'text',
                options: false
            },
            AddressValue: '',
            OrganizationUnitId: {
                title: '隶属组织架构',
                name: 'OrganizationUnitId',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            OrganizationUnitIdIndex: 0,
            //业务类型
            getCategoryArr: [],
            Category: [[], [], []],
            CategoryIndex: [0, 0],
            CategoryTrue: true,
            getTradeArr: [],
            IndustryType: [[], [], [], []],
            IndustryTypeIndex: [0, 0, 0, 0],
            tradeTrue: true,
            //地区
            region: [],
            // 邮编
            Post: {
                title: '邮编号码',
                name: 'Post',
                warning: false,
                type: 'number',
                options: false
            },
            PostValue: '',
            // 主页
            HomePage: {
                title: '主页',
                name: 'HomePage',
                warning: false,
                type: 'text',
                options: false
            },
            HomePageValue: '',
            //客户来源
            Origin: {
                title: '客户来源',
                name: 'OrganizationUnitId',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            OriginIndex: 0,
            //是否重要
            ImportLevel: {
                title: '是否重要',
                checked: false,
                ImportLevelData: []
            },
            // 客户描述
            Description: {
                title: '客户描述',
                name: 'Description',
                warning: false,
                options: true
            },
            DescriptionValue: ''
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                var _this2 = this;

                if (this.clientBaseData.Name && this.clientBaseData.OrganizationUnitId && this.clientBaseData.Origin) {
                    try {
                        wx.setStorageSync('CLIENT_CREATE_DATA', this.clientBaseData);
                        wx.navigateTo({ url: './createClientPrincipalInfo' });
                        this.addOpacity = 1;
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    this.OrganizationUnitId.warning = true;
                    this.Origin.warning = true;
                    wx.showToast({
                        title: '请完成必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {
                            _this2.addOpacity = 1;
                            _this2.$apply();
                        }
                    });
                }
            },
            bindPickerChang: function bindPickerChang(e) {
                this.clientBaseData.ClientType = e.detail.value;
            },

            //是否重要
            isImportLevel: function isImportLevel() {
                this.ImportLevel.checked = !this.ImportLevel.checked;
                if (this.ImportLevel.checked) {
                    this.clientBaseData.ImportLevel = this.ImportLevel.ImportLevelData[0].value;
                } else {
                    this.clientBaseData.ImportLevel = this.ImportLevel.ImportLevelData[1].value;
                }
            },
            changePickerData: function changePickerData(e) {
                console.log(e);
                this.region = e.detail.value;
                this.clientBaseData.Region = e.detail.postcode;
                this.$apply();
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
                console.log(type);
                if (type == "Category") {
                    if (this.Category[1].length == 0) {
                        this.getCategoryArr = this.Category[0][this.CategoryIndex[0]].name;
                        this.clientBaseData.Category = this.Category[0][this.CategoryIndex[0]].id;
                    } else if (this.Category[2].length == 0) {
                        this.getCategoryArr = this.Category[0][this.CategoryIndex[0]].name + '/' + this.Category[1][this.CategoryIndex[1]].name;
                        this.clientBaseData.Category = this.Category[1][this.CategoryIndex[1]].id;
                    } else {
                        this.getCategoryArr = this.Category[0][this.CategoryIndex[0]].name + '/' + this.Category[1][this.CategoryIndex[1]].name + '/' + this.Category[2][this.CategoryIndex[2]].name;
                        this.clientBaseData.Category = this.Category[2][this.CategoryIndex[2]].id;
                    }
                } else if (type == "IndustryType") {
                    if (this.IndustryType[1].length == 0) {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name;
                        this.clientBaseData.IndustryType = this.IndustryType[0][this.IndustryTypeIndex[0]].id;
                    } else if (this.IndustryType[2].length == 0) {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name + '/' + this.IndustryType[1][this.IndustryTypeIndex[1]].name;
                        this.clientBaseData.IndustryType = this.IndustryType[1][this.IndustryTypeIndex[1]].id;
                    } else if (this.IndustryType[3].length == 0) {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name + '/' + this.IndustryType[1][this.IndustryTypeIndex[1]].name + '/' + this.IndustryType[2][this.IndustryTypeIndex[2]].name;
                        this.clientBaseData.IndustryType = this.IndustryType[2][this.IndustryTypeIndex[2]].id;
                    } else {
                        this.getTradeArr = this.IndustryType[0][this.IndustryTypeIndex[0]].name + '/' + this.IndustryType[1][this.IndustryTypeIndex[1]].name + '/' + this.IndustryType[3][this.IndustryTypeIndex[3]].name + '/' + this.IndustryType[3][this.IndustryTypeIndex[3]].name;
                        this.clientBaseData.IndustryType = this.IndustryType[3][this.IndustryTypeIndex[3]].id;
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
            }
        }, _this.events = {}, _this.watch = {
            NameValue: function NameValue(value) {
                this.clientBaseData.Name = value;
                this.$apply();
            },
            EnNameValue: function EnNameValue(value) {
                this.clientBaseData.EnName = value;
                this.$apply();
            },
            pyNameValue: function pyNameValue(value) {
                this.clientBaseData.pyName = value;
                this.$apply();
            },
            RegisteredNameValue: function RegisteredNameValue(value) {
                this.clientBaseData.RegisteredName = value;
                this.$apply();
            },
            RegisteredNoValue: function RegisteredNoValue(value) {
                this.clientBaseData.RegisteredNo = value;
                this.$apply();
            },
            AddressValue: function AddressValue(value) {
                this.clientBaseData.Address = value;
                this.$apply();
            },
            PostValue: function PostValue(value) {
                this.clientBaseData.Post = value;
                this.$apply();
            },
            HomePageValue: function HomePageValue(value) {
                this.clientBaseData.HomePage = value;
                this.$apply();
            },
            DescriptionValue: function DescriptionValue(value) {
                this.clientBaseData.Description = value;
                this.$apply();
            },
            OrganizationUnitIdIndex: function OrganizationUnitIdIndex(index) {
                this.clientBaseData.OrganizationUnitId = this.OrganizationUnitId.value[index];
                this.$apply();
            },
            OriginIndex: function OriginIndex(index) {
                this.clientBaseData.Origin = this.Origin.value[index];
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(createClient, [{
        key: 'GetClientForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, GetClientForEdit_data, OriginData, Origin_value, Origin_displayText, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/client/GetClientForEdit', 'post', {});

                            case 2:
                                resData = _context.sent;

                                console.log(resData.data.result);
                                if (resData.statusCode == 200) {
                                    GetClientForEdit_data = resData.data.result;
                                    //客户类型

                                    this.ClientType = GetClientForEdit_data.customerTypeCombobox;
                                    this.clientBaseData.ClientType = this.ClientType[0].value;
                                    this.ClientType[0].isSelected = true;
                                    //客户来源
                                    OriginData = GetClientForEdit_data.customerOriginCombobox;
                                    Origin_value = [];
                                    Origin_displayText = [];

                                    for (index in OriginData) {
                                        Origin_value[index] = OriginData[index].value;
                                        Origin_displayText[index] = OriginData[index].displayText;
                                    }
                                    this.Origin.value = this.Origin.value.concat(Origin_value);
                                    this.Origin.displayText = this.Origin.displayText.concat(Origin_displayText);
                                    //是否重要
                                    this.ImportLevel.ImportLevelData = GetClientForEdit_data.importantLevelCombobox;
                                    this.clientBaseData.ImportLevel = this.ImportLevel.ImportLevelData[1].value;
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClientForEdit() {
                return _ref2.apply(this, arguments);
            }

            return GetClientForEdit;
        }()
        //获取隶属组织架构

    }, {
        key: 'GetOrganizations',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, GetOrganizationsData, OrganizationUnitId_value, OrganizationUnitId_displayText, index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetOrganizations', 'post');

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    GetOrganizationsData = resData.data.result;
                                    OrganizationUnitId_value = [];
                                    OrganizationUnitId_displayText = [];

                                    for (index in GetOrganizationsData) {
                                        OrganizationUnitId_value[index] = GetOrganizationsData[index].id;
                                        OrganizationUnitId_displayText[index] = GetOrganizationsData[index].displayName;
                                    }
                                    this.OrganizationUnitId.value = this.OrganizationUnitId.value.concat(OrganizationUnitId_value);
                                    this.OrganizationUnitId.displayText = this.OrganizationUnitId.displayText.concat(OrganizationUnitId_displayText);
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetOrganizations() {
                return _ref3.apply(this, arguments);
            }

            return GetOrganizations;
        }()
        //获取业务类型

    }, {
        key: 'GetGeneralCodeComboOutput',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(keyWords, Depth, ParentId) {
                var data, resData, i, _i;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    Class: keyWords,
                                    Depth: Depth,
                                    IsMaxDepth: true,
                                    ParentId: ParentId,
                                    IsRecursive: false
                                    // isAll: true
                                };
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboOutput', 'post', data);

                            case 3:
                                resData = _context3.sent;

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
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetGeneralCodeComboOutput(_x, _x2, _x3) {
                return _ref4.apply(this, arguments);
            }

            return GetGeneralCodeComboOutput;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetClientForEdit();
            this.GetOrganizations();
            this.GetGeneralCodeComboOutput("CLKL", 0, 0);
            this.GetGeneralCodeComboOutput("CLIDT", 0, 0);
        }
    }]);

    return createClient;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(createClient , 'pages/modules/myclient/createClient/createClientBaseInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUNsaWVudEJhc2VJbmZvLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJOYW1lIiwiRW5OYW1lIiwicHlOYW1lIiwiQWRkcmVzcyIsIlJlZ2lzdGVyZWROYW1lIiwiUmVnaXN0ZXJlZE5vIiwiT3JnYW5pemF0aW9uVW5pdElkIiwiT3JpZ2luIiwiUG9zdCIsIkhvbWVQYWdlIiwiRGVzY3JpcHRpb24iLCJkYXRhIiwiYWRkT3BhY2l0eSIsImNsaWVudEJhc2VEYXRhIiwiQ2xpZW50VHlwZSIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJ0eXBlIiwib3B0aW9ucyIsIk5hbWVWYWx1ZSIsIkVuTmFtZVZhbHVlIiwicHlOYW1lVmFsdWUiLCJSZWdpc3RlcmVkTmFtZVZhbHVlIiwiUmVnaXN0ZXJlZE5vVmFsdWUiLCJBZGRyZXNzVmFsdWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiT3JnYW5pemF0aW9uVW5pdElkSW5kZXgiLCJnZXRDYXRlZ29yeUFyciIsIkNhdGVnb3J5IiwiQ2F0ZWdvcnlJbmRleCIsIkNhdGVnb3J5VHJ1ZSIsImdldFRyYWRlQXJyIiwiSW5kdXN0cnlUeXBlIiwiSW5kdXN0cnlUeXBlSW5kZXgiLCJ0cmFkZVRydWUiLCJyZWdpb24iLCJQb3N0VmFsdWUiLCJIb21lUGFnZVZhbHVlIiwiT3JpZ2luSW5kZXgiLCJJbXBvcnRMZXZlbCIsImNoZWNrZWQiLCJJbXBvcnRMZXZlbERhdGEiLCJEZXNjcmlwdGlvblZhbHVlIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJiaW5kUGlja2VyQ2hhbmciLCJlIiwiZGV0YWlsIiwiaXNJbXBvcnRMZXZlbCIsImNoYW5nZVBpY2tlckRhdGEiLCJSZWdpb24iLCJwb3N0Y29kZSIsImdldERhdGEiLCJHZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0IiwiY2hhbmdlIiwibGVuZ3RoIiwiaWQiLCJiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2VDYXRlZ29yeSIsImNvbHVtbiIsImJpbmRNdWx0aVBpY2tlckNvbHVtbkNoYW5nZUNhdGVnb3J5MiIsImV2ZW50cyIsIndhdGNoIiwiaW5kZXgiLCJjb21wdXRlZCIsImFqYXgiLCJyZXNEYXRhIiwicmVzdWx0Iiwic3RhdHVzQ29kZSIsIkdldENsaWVudEZvckVkaXRfZGF0YSIsImN1c3RvbWVyVHlwZUNvbWJvYm94IiwiaXNTZWxlY3RlZCIsIk9yaWdpbkRhdGEiLCJjdXN0b21lck9yaWdpbkNvbWJvYm94IiwiT3JpZ2luX3ZhbHVlIiwiT3JpZ2luX2Rpc3BsYXlUZXh0IiwiY29uY2F0IiwiaW1wb3J0YW50TGV2ZWxDb21ib2JveCIsIkdldE9yZ2FuaXphdGlvbnNEYXRhIiwiT3JnYW5pemF0aW9uVW5pdElkX3ZhbHVlIiwiT3JnYW5pemF0aW9uVW5pdElkX2Rpc3BsYXlUZXh0IiwiZGlzcGxheU5hbWUiLCJrZXlXb3JkcyIsIkRlcHRoIiwiUGFyZW50SWQiLCJDbGFzcyIsIklzTWF4RGVwdGgiLCJJc1JlY3Vyc2l2ZSIsImkiLCJwdXNoIiwiR2V0Q2xpZW50Rm9yRWRpdCIsIkdldE9yZ2FuaXphdGlvbnMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixNQUF2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QXNCLEdBQXRCLElBQTZCRixRQUFRdEUsSUFBUixDQUFhdUUsTUFBYixDQUFvQlgsTUFBcEIsS0FBK0IsQ0FBNUQsSUFBaUUwQixZQUFZLE1BQWpGLEVBQXlGO0FBQ3JGLHlDQUFTTSxFQUFULEdBQWEsQ0FBYixFQUFnQkEsS0FBSXRCLFFBQVF0RSxJQUFSLENBQWF1RSxNQUFiLENBQW9CWCxNQUF4QyxFQUFnRGdDLElBQWhELEVBQXFEO0FBQ2pELDZDQUFLekUsUUFBTCxDQUFjb0UsS0FBZCxFQUFxQk0sSUFBckIsQ0FBMEJ2QixRQUFRdEUsSUFBUixDQUFhdUUsTUFBYixDQUFvQnFCLEVBQXBCLENBQTFCO0FBQ0g7QUFDRGpELDRDQUFRQyxHQUFSLENBQVkyQyxLQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQUlBLFFBQVEsQ0FBWixFQUFlO0FBQ1gsNkNBQUs3Qix5QkFBTCxDQUErQixNQUEvQixFQUF1QzZCLFFBQVEsQ0FBL0MsRUFBa0QsS0FBS3BFLFFBQUwsQ0FBY29FLEtBQWQsRUFBcUIsQ0FBckIsRUFBd0IxQixFQUExRTtBQUNIO0FBQ0QseUNBQUt6QixNQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFSTtBQUNMLGlCQUFLMEQsZ0JBQUw7QUFDQSxpQkFBS0MsZ0JBQUw7QUFDQSxpQkFBS3JDLHlCQUFMLENBQStCLE1BQS9CLEVBQXNDLENBQXRDLEVBQXdDLENBQXhDO0FBQ0EsaUJBQUtBLHlCQUFMLENBQStCLE9BQS9CLEVBQXVDLENBQXZDLEVBQXlDLENBQXpDO0FBQ0g7Ozs7RUFyZHFDc0MsZUFBS0MsSTs7a0JBQTFCbkgsWSIsImZpbGUiOiJjcmVhdGVDbGllbnRCYXNlSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBOYW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgRW5OYW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgcHlOYW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgQWRkcmVzcyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBSZWdpc3RlcmVkTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFJlZ2lzdGVyZWRObyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBPcmdhbml6YXRpb25Vbml0SWQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgT3JpZ2luIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRlQ2xpZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJcIixcbiAgICAgICAgfTtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk5hbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcIk5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIk5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIk5hbWVWYWx1ZVwifSxcIkVuTmFtZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJFbk5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkVuTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiRW5OYW1lVmFsdWVcIn0sXCJweU5hbWVcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwicHlOYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJweU5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInB5TmFtZVZhbHVlXCJ9LFwiQWRkcmVzc1wiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJBZGRyZXNzXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJBZGRyZXNzVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJBZGRyZXNzVmFsdWVcIn0sXCJSZWdpc3RlcmVkTmFtZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJSZWdpc3RlcmVkTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiUmVnaXN0ZXJlZE5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlJlZ2lzdGVyZWROYW1lVmFsdWVcIn0sXCJSZWdpc3RlcmVkTm9cIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiUmVnaXN0ZXJlZE5vXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJSZWdpc3RlcmVkTm9WYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlJlZ2lzdGVyZWROb1ZhbHVlXCJ9LFwiT3JnYW5pemF0aW9uVW5pdElkXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiT3JnYW5pemF0aW9uVW5pdElkXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiT3JnYW5pemF0aW9uVW5pdElkSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJPcmdhbml6YXRpb25Vbml0SWRJbmRleFwifSxcIk9yaWdpblwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIk9yaWdpblwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIk9yaWdpbkluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiT3JpZ2luSW5kZXhcIn0sXCJQb3N0XCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIlBvc3RcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIlBvc3RWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlBvc3RWYWx1ZVwifSxcIkhvbWVQYWdlXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkhvbWVQYWdlXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJIb21lUGFnZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiSG9tZVBhZ2VWYWx1ZVwifSxcIkRlc2NyaXB0aW9uXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkRlc2NyaXB0aW9uXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJEZXNjcmlwdGlvblZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiRGVzY3JpcHRpb25WYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBOYW1lLFxuICAgICAgICAgICAgRW5OYW1lLFxuICAgICAgICAgICAgcHlOYW1lLFxuICAgICAgICAgICAgQWRkcmVzcyxcbiAgICAgICAgICAgIFJlZ2lzdGVyZWROYW1lLFxuICAgICAgICAgICAgUmVnaXN0ZXJlZE5vLFxuICAgICAgICAgICAgT3JnYW5pemF0aW9uVW5pdElkLFxuICAgICAgICAgICAgT3JpZ2luLFxuICAgICAgICAgICAgUG9zdCxcbiAgICAgICAgICAgIEhvbWVQYWdlLFxuICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6MSxcbiAgICAgICAgICAgIGNsaWVudEJhc2VEYXRhOiB7XG4gICAgICAgICAgICAgICAgLy8gQWRkcmVzczogXCLlnLDlnYBcIlxuICAgICAgICAgICAgICAgIC8vIEJpcnRoZGF5OiBcIjIwMTktMDMtMDZcIlxuICAgICAgICAgICAgICAgIC8vIENhcmRObzogXCIxMjMxMjMxMjMxMjMxMjMxMjNcIlxuICAgICAgICAgICAgICAgIC8vIENhdGVnb3J5OiBcIjEwXCJcbiAgICAgICAgICAgICAgICAvLyBDbGllbnRUeXBlOiBcIkdcIlxuICAgICAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uOiBcIuaPj+i/sFwiXG4gICAgICAgICAgICAgICAgLy8gRW1haWw6IFwib3VfdG9uZ0AxNjMuY29tXCJcbiAgICAgICAgICAgICAgICAvLyBFbk5hbWU6IFwi5a6i5oi35ZCN56ew6Iux5paHXCJcbiAgICAgICAgICAgICAgICAvLyBGYXg6IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBIb21lUGFnZTogXCJcIlxuICAgICAgICAgICAgICAgIC8vIElkOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gSW1wb3J0TGV2ZWw6IFwiMDJcIlxuICAgICAgICAgICAgICAgIC8vIEluZHVzdHJ5VHlwZTogXCIwMjExXCIgLy/lrqLmiLfooYzkuJpcbiAgICAgICAgICAgICAgICAvLyBMYW5kbGluZTogXCJcIlxuICAgICAgICAgICAgICAgIC8vIExlZ2FsRHV0eTogXCJHTVwiXG4gICAgICAgICAgICAgICAgLy8gTGVnYWxQZXJzb246IFwiTFAwMVwiXG4gICAgICAgICAgICAgICAgLy8gTGlua2VyOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gTmFtZTogXCLlrqLmiLflkI3np7BcIlxuICAgICAgICAgICAgICAgIC8vIE5hdGlvbjogXCIxXCJcbiAgICAgICAgICAgICAgICAvLyBPY2N1cGF0aW9uOiBcIuiBjOS4mlwiXG4gICAgICAgICAgICAgICAgLy8gT3JnYW5pemF0aW9uVW5pdElkOiBcIjEyXCJcbiAgICAgICAgICAgICAgICAvLyBPcmlnaW46IFwiMDJcIlxuICAgICAgICAgICAgICAgIC8vIFBvc3Q6IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBSZWdpb246IFwiMzQwODAzMDAxXCJcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlcmVkTmFtZTogXCJcIlxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyZWRObzogXCJcIlxuICAgICAgICAgICAgICAgIC8vIFNob3J0TmFtZTogXCJcIlxuICAgICAgICAgICAgICAgIC8vIFRpZDogXCJcIlxuICAgICAgICAgICAgICAgIC8vIFR5Y05hbWU6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDbGllbnRUeXBlOiBbXSxcbiAgICAgICAgICAgIE5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+WQjeensCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIEVuTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6i5oi35ZCN56ewKOiLseaWhyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbk5hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVuTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIHB5TmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6i5oi35ZCN56ew57yp5YaZJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHlOYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBweU5hbWVWYWx1ZTogJycsXG4gICAgICAgICAgICBSZWdpc3RlcmVkTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5LyB5Lia5bel5ZWG5rOo5YaM5ZCN56ewJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVnaXN0ZXJlZE5hbWUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlZ2lzdGVyZWROYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgUmVnaXN0ZXJlZE5vOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkvIHkuJrlhazlj7jms6jlhozlj7cnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdSZWdpc3RlcmVkTm8nLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlZ2lzdGVyZWROb1ZhbHVlOiAnJyxcbiAgICAgICAgICAgIEFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+WcsOWdgCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEFkZHJlc3NWYWx1ZTogJycsXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+matuWxnue7hOe7h+aetuaehCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ09yZ2FuaXphdGlvblVuaXRJZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcIlwiXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1wi6K+36YCJ5oupXCJdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWRJbmRleDogMCxcbiAgICAgICAgICAgIC8v5Lia5Yqh57G75Z6LXG4gICAgICAgICAgICBnZXRDYXRlZ29yeUFycjogW10sXG4gICAgICAgICAgICBDYXRlZ29yeTogW1xuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQ2F0ZWdvcnlJbmRleDogWzAsMF0sXG4gICAgICAgICAgICBDYXRlZ29yeVRydWU6IHRydWUsXG4gICAgICAgICAgICBnZXRUcmFkZUFycjogW10sXG4gICAgICAgICAgICBJbmR1c3RyeVR5cGU6IFtcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIEluZHVzdHJ5VHlwZUluZGV4OiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICB0cmFkZVRydWU6IHRydWUsXG4gICAgICAgICAgICAvL+WcsOWMulxuICAgICAgICAgICAgcmVnaW9uOltdLFxuICAgICAgICAgICAgLy8g6YKu57yWXG4gICAgICAgICAgICBQb3N0OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpgq7nvJblj7fnoIEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQb3N0JyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFBvc3RWYWx1ZTogJycsXG4gICAgICAgICAgICAvLyDkuLvpobVcbiAgICAgICAgICAgIEhvbWVQYWdlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuLvpobUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdIb21lUGFnZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSG9tZVBhZ2VWYWx1ZTogJycsXG4gICAgICAgICAgICAvL+WuouaIt+adpea6kFxuICAgICAgICAgICAgT3JpZ2luOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqLmiLfmnaXmupAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdPcmdhbml6YXRpb25Vbml0SWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJcIl0sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcIuivt+mAieaLqVwiXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgT3JpZ2luSW5kZXg6MCxcbiAgICAgICAgICAgIC8v5piv5ZCm6YeN6KaBXG4gICAgICAgICAgICBJbXBvcnRMZXZlbDp7XG4gICAgICAgICAgICAgICAgdGl0bGU6J+aYr+WQpumHjeimgScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDpmYWxzZSxcbiAgICAgICAgICAgICAgICBJbXBvcnRMZXZlbERhdGE6W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIOWuouaIt+aPj+i/sFxuICAgICAgICAgICAgRGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+aPj+i/sCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIERlc2NyaXB0aW9uVmFsdWU6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG91Y2hTdGFydCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAwLjY7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaEVuZCgpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2xpZW50QmFzZURhdGEuTmFtZSYmdGhpcy5jbGllbnRCYXNlRGF0YS5Pcmdhbml6YXRpb25Vbml0SWQmJnRoaXMuY2xpZW50QmFzZURhdGEuT3JpZ2luKXtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdDTElFTlRfQ1JFQVRFX0RBVEEnLHRoaXMuY2xpZW50QmFzZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4vY3JlYXRlQ2xpZW50UHJpbmNpcGFsSW5mbycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHk9MTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT3JnYW5pemF0aW9uVW5pdElkLndhcm5pbmc9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PcmlnaW4ud2FybmluZz10cnVlO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35a6M5oiQ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eT0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZyhlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkNsaWVudFR5cGU9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/mmK/lkKbph43opoFcbiAgICAgICAgICAgIGlzSW1wb3J0TGV2ZWwoKXtcbiAgICAgICAgICAgICAgICB0aGlzLkltcG9ydExldmVsLmNoZWNrZWQ9IXRoaXMuSW1wb3J0TGV2ZWwuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBpZih0aGlzLkltcG9ydExldmVsLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkltcG9ydExldmVsPXRoaXMuSW1wb3J0TGV2ZWwuSW1wb3J0TGV2ZWxEYXRhWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkltcG9ydExldmVsPXRoaXMuSW1wb3J0TGV2ZWwuSW1wb3J0TGV2ZWxEYXRhWzFdLnZhbHVlOyAgICBcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZVBpY2tlckRhdGEoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRCYXNlRGF0YS5SZWdpb24gPSBlLmRldGFpbC5wb3N0Y29kZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldERhdGEodHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFwiQ2F0ZWdvcnlcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NMS0wnLCAwLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlUcnVlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJJbmR1c3RyeVR5cGVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NMSURUJywgMCwgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWRlVHJ1ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJDYXRlZ29yeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNhdGVnb3J5WzFdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENhdGVnb3J5QXJyID0gdGhpcy5DYXRlZ29yeVswXVt0aGlzLkNhdGVnb3J5SW5kZXhbMF1dLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkNhdGVnb3J5ID0gdGhpcy5DYXRlZ29yeVswXVt0aGlzLkNhdGVnb3J5SW5kZXhbMF1dLmlkO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuQ2F0ZWdvcnlbMl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlBcnIgPSB0aGlzLkNhdGVnb3J5WzBdW3RoaXMuQ2F0ZWdvcnlJbmRleFswXV0ubmFtZSArICcvJyArIHRoaXMuQ2F0ZWdvcnlbMV1bdGhpcy5DYXRlZ29yeUluZGV4WzFdXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRCYXNlRGF0YS5DYXRlZ29yeSA9IHRoaXMuQ2F0ZWdvcnlbMV1bdGhpcy5DYXRlZ29yeUluZGV4WzFdXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlBcnIgPSB0aGlzLkNhdGVnb3J5WzBdW3RoaXMuQ2F0ZWdvcnlJbmRleFswXV0ubmFtZSArICcvJyArIHRoaXMuQ2F0ZWdvcnlbMV1bdGhpcy5DYXRlZ29yeUluZGV4WzFdXS5uYW1lICsgJy8nICsgdGhpcy5DYXRlZ29yeVsyXVt0aGlzLkNhdGVnb3J5SW5kZXhbMl1dLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkNhdGVnb3J5ID0gdGhpcy5DYXRlZ29yeVsyXVt0aGlzLkNhdGVnb3J5SW5kZXhbMl1dLmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiSW5kdXN0cnlUeXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSW5kdXN0cnlUeXBlWzFdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyYWRlQXJyID0gdGhpcy5JbmR1c3RyeVR5cGVbMF1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFswXV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGEuSW5kdXN0cnlUeXBlID0gdGhpcy5JbmR1c3RyeVR5cGVbMF1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFswXV0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5JbmR1c3RyeVR5cGVbMl0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhZGVBcnIgPSB0aGlzLkluZHVzdHJ5VHlwZVswXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzBdXS5uYW1lICsgJy8nICsgdGhpcy5JbmR1c3RyeVR5cGVbMV1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsxXV0ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRCYXNlRGF0YS5JbmR1c3RyeVR5cGUgPSB0aGlzLkluZHVzdHJ5VHlwZVsxXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzFdXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkluZHVzdHJ5VHlwZVszXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFkZUFyciA9IHRoaXMuSW5kdXN0cnlUeXBlWzBdW3RoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMF1dLm5hbWUgKyAnLycgKyB0aGlzLkluZHVzdHJ5VHlwZVsxXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzFdXS5uYW1lICsgJy8nICsgdGhpcy5JbmR1c3RyeVR5cGVbMl1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsyXV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGEuSW5kdXN0cnlUeXBlID0gdGhpcy5JbmR1c3RyeVR5cGVbMl1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsyXV0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyYWRlQXJyID0gdGhpcy5JbmR1c3RyeVR5cGVbMF1bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFswXV0ubmFtZSArICcvJyArIHRoaXMuSW5kdXN0cnlUeXBlWzFdW3RoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMV1dLm5hbWUgKyAnLycgKyB0aGlzLkluZHVzdHJ5VHlwZVszXVt0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzNdXS5uYW1lICsgJy8nICsgdGhpcy5JbmR1c3RyeVR5cGVbM11bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFszXV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGEuSW5kdXN0cnlUeXBlID0gdGhpcy5JbmR1c3RyeVR5cGVbM11bdGhpcy5JbmR1c3RyeVR5cGVJbmRleFszXV0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2VDYXRlZ29yeShlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmRldGFpbC5jb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeVsxXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5WzJdID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChcIkNMS0xcIiwgMSwgdGhpcy5DYXRlZ29yeVswXVtlLmRldGFpbC52YWx1ZV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeUluZGV4WzBdID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlJbmRleFsxXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlJbmRleFsyXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5WzJdID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChcIkNMS0xcIiwgMiwgdGhpcy5DYXRlZ29yeVsxXVtlLmRldGFpbC52YWx1ZV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeUluZGV4WzFdID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnlJbmRleFsyXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5SW5kZXhbMl0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2VDYXRlZ29yeTIoZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5kZXRhaWwuY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlWzFdID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlWzJdID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlWzNdID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChcIkNMSURUXCIsIDEsIHRoaXMuSW5kdXN0cnlUeXBlWzBdW2UuZGV0YWlsLnZhbHVlXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzBdID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlSW5kZXhbMV0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzJdID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFszXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVsyXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVszXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoXCJDTElEVFwiLCAyLCB0aGlzLkluZHVzdHJ5VHlwZVsxXVtlLmRldGFpbC52YWx1ZV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsxXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzJdID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFszXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVszXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoXCJDTElEVFwiLCAzLCB0aGlzLkluZHVzdHJ5VHlwZVsyXVtlLmRldGFpbC52YWx1ZV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmR1c3RyeVR5cGVJbmRleFsyXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZUluZGV4WzNdID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kdXN0cnlUeXBlSW5kZXhbM10gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBOYW1lVmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGEuTmFtZT12YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVuTmFtZVZhbHVlKHZhbHVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkVuTmFtZT12YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB5TmFtZVZhbHVlKHZhbHVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLnB5TmFtZT12YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlZ2lzdGVyZWROYW1lVmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGEuUmVnaXN0ZXJlZE5hbWU9dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWdpc3RlcmVkTm9WYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRCYXNlRGF0YS5SZWdpc3RlcmVkTm89dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBBZGRyZXNzVmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGEuQWRkcmVzcz12YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSwgIFxuICAgICAgICAgICAgUG9zdFZhbHVlKHZhbHVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLlBvc3Q9dmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBIb21lUGFnZVZhbHVlKHZhbHVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkhvbWVQYWdlPXZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRGVzY3JpcHRpb25WYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRCYXNlRGF0YS5EZXNjcmlwdGlvbj12YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZEluZGV4KGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLk9yZ2FuaXphdGlvblVuaXRJZD10aGlzLk9yZ2FuaXphdGlvblVuaXRJZC52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcmlnaW5JbmRleChpbmRleCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRCYXNlRGF0YS5PcmlnaW49dGhpcy5PcmlnaW4udmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIGFzeW5jIEdldENsaWVudEZvckVkaXQoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50L0dldENsaWVudEZvckVkaXQnLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge31cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEuZGF0YS5yZXN1bHQpXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBHZXRDbGllbnRGb3JFZGl0X2RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8v5a6i5oi357G75Z6LXG4gICAgICAgICAgICAgICAgdGhpcy5DbGllbnRUeXBlID0gR2V0Q2xpZW50Rm9yRWRpdF9kYXRhLmN1c3RvbWVyVHlwZUNvbWJvYm94O1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50QmFzZURhdGEuQ2xpZW50VHlwZT10aGlzLkNsaWVudFR5cGVbMF0udmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5DbGllbnRUeXBlWzBdLmlzU2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgICAgICAgICAgICAvL+WuouaIt+adpea6kFxuICAgICAgICAgICAgICAgIHZhciBPcmlnaW5EYXRhPUdldENsaWVudEZvckVkaXRfZGF0YS5jdXN0b21lck9yaWdpbkNvbWJvYm94O1xuICAgICAgICAgICAgICAgIHZhciBPcmlnaW5fdmFsdWU9W107XG4gICAgICAgICAgICAgICAgdmFyIE9yaWdpbl9kaXNwbGF5VGV4dD1bXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBPcmlnaW5EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIE9yaWdpbl92YWx1ZVtpbmRleF0gPSBPcmlnaW5EYXRhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgT3JpZ2luX2Rpc3BsYXlUZXh0W2luZGV4XSA9IE9yaWdpbkRhdGFbaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLk9yaWdpbi52YWx1ZSA9IHRoaXMuT3JpZ2luLnZhbHVlLmNvbmNhdChPcmlnaW5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuT3JpZ2luLmRpc3BsYXlUZXh0ID0gdGhpcy5PcmlnaW4uZGlzcGxheVRleHQuY29uY2F0KE9yaWdpbl9kaXNwbGF5VGV4dCk7XG4gICAgICAgICAgICAgICAgLy/mmK/lkKbph43opoFcbiAgICAgICAgICAgICAgICB0aGlzLkltcG9ydExldmVsLkltcG9ydExldmVsRGF0YT1HZXRDbGllbnRGb3JFZGl0X2RhdGEuaW1wb3J0YW50TGV2ZWxDb21ib2JveDtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEJhc2VEYXRhLkltcG9ydExldmVsPXRoaXMuSW1wb3J0TGV2ZWwuSW1wb3J0TGV2ZWxEYXRhWzFdLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+iOt+WPlumatuWxnue7hOe7h+aetuaehFxuICAgICAgICBhc3luYyBHZXRPcmdhbml6YXRpb25zKCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRPcmdhbml6YXRpb25zJyxcbiAgICAgICAgICAgICAgICAncG9zdCdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIEdldE9yZ2FuaXphdGlvbnNEYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB2YXIgT3JnYW5pemF0aW9uVW5pdElkX3ZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgdmFyIE9yZ2FuaXphdGlvblVuaXRJZF9kaXNwbGF5VGV4dCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIEdldE9yZ2FuaXphdGlvbnNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZF92YWx1ZVtpbmRleF0gPSBHZXRPcmdhbml6YXRpb25zRGF0YVtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZF9kaXNwbGF5VGV4dFtpbmRleF0gPSBHZXRPcmdhbml6YXRpb25zRGF0YVtpbmRleF0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuT3JnYW5pemF0aW9uVW5pdElkLnZhbHVlID0gdGhpcy5Pcmdhbml6YXRpb25Vbml0SWQudmFsdWUuY29uY2F0KE9yZ2FuaXphdGlvblVuaXRJZF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5Pcmdhbml6YXRpb25Vbml0SWQuZGlzcGxheVRleHQgPSB0aGlzLk9yZ2FuaXphdGlvblVuaXRJZC5kaXNwbGF5VGV4dC5jb25jYXQoT3JnYW5pemF0aW9uVW5pdElkX2Rpc3BsYXlUZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+iOt+WPluS4muWKoeexu+Wei1xuICAgICAgICBhc3luYyBHZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KGtleVdvcmRzLCBEZXB0aCwgUGFyZW50SWQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIENsYXNzOiBrZXlXb3JkcyxcbiAgICAgICAgICAgICAgICBEZXB0aDogRGVwdGgsXG4gICAgICAgICAgICAgICAgSXNNYXhEZXB0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBQYXJlbnRJZDogUGFyZW50SWQsXG4gICAgICAgICAgICAgICAgSXNSZWN1cnNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIGlzQWxsOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNEYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleVdvcmRzLERlcHRoLFBhcmVudElkKTtcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwICYmIHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoICE9PSAwICYmIGtleVdvcmRzID09IFwiQ0xJRFRcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZHVzdHJ5VHlwZVtEZXB0aF0ucHVzaChyZXNEYXRhLmRhdGEucmVzdWx0W2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoRGVwdGggPCA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChcIkNMSURUXCIsIERlcHRoICsgMSwgdGhpcy5JbmR1c3RyeVR5cGVbRGVwdGhdWzBdLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDAgJiYgcmVzRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGggIT09IDAgJiYga2V5V29yZHMgPT0gXCJDTEtMXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeVtEZXB0aF0ucHVzaChyZXNEYXRhLmRhdGEucmVzdWx0W2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhEZXB0aCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuQ2F0ZWdvcnlbRGVwdGhdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuQ2F0ZWdvcnlbRGVwdGhdLnB1c2goe25hbWU6XCLml6BcIn0pXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmIChEZXB0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KFwiQ0xLTFwiLCBEZXB0aCArIDEsIHRoaXMuQ2F0ZWdvcnlbRGVwdGhdWzBdLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50Rm9yRWRpdCgpO1xuICAgICAgICAgICAgdGhpcy5HZXRPcmdhbml6YXRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoXCJDTEtMXCIsMCwwKTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChcIkNMSURUXCIsMCwwKTtcbiAgICAgICAgfTtcbiAgICB9XG4iXX0=