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

var _pickerOption = require('./../../../../components/picker/pickerOption.js');

var _pickerOption2 = _interopRequireDefault(_pickerOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseInfo = function (_wepy$page) {
    _inherits(caseInfo, _wepy$page);

    function caseInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, caseInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseInfo.__proto__ || Object.getPrototypeOf(caseInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "ReasonSupplement": { "v-bind:input.sync": "ReasonSupplement", "v-bind:inputValue.sync": "ReasonSupplementValue", "v-bind:twoWayTitle.once": "ReasonSupplementValue" }, "MattersEntrusted": { "v-bind:input.sync": "MattersEntrusted", "v-bind:inputValue.sync": "MattersEntrustedValue", "v-bind:twoWayTitle.once": "MattersEntrustedValue" }, "Description": { "v-bind:input.sync": "Description", "v-bind:inputValue.sync": "DescriptionValue", "v-bind:twoWayTitle.once": "DescriptionValue" }, "Category": { "v-bind:options.sync": "Category", "v-bind:index.sync": "CategoryIndex", "v-bind:twoWayTitle.once": "CategoryIndex" }, "OrganizationUnitId": { "v-bind:options.sync": "OrganizationUnitId", "v-bind:index.sync": "OrganizationUnitIdIndex", "v-bind:twoWayTitle.once": "OrganizationUnitIdIndex" }, "Partition": { "v-bind:options.sync": "Partition", "v-bind:index.sync": "PartitionIndex", "v-bind:twoWayTitle.once": "PartitionIndex" }, "Language": { "v-bind:options.sync": "Language", "v-bind:index.sync": "LanguageIndex", "v-bind:twoWayTitle.once": "LanguageIndex" }, "SecretLevel": { "v-bind:options.sync": "SecretLevel", "v-bind:index.sync": "SecretLevelIndex", "v-bind:twoWayTitle.once": "SecretLevelIndex" }, "Stage": { "v-bind:options.sync": "Stage", "v-bind:index.sync": "StageIndex", "v-bind:twoWayTitle.once": "StageIndex" }, "Agent": { "v-bind:options.sync": "Agent", "v-bind:index.sync": "AgentIndex", "v-bind:twoWayTitle.once": "AgentIndex" }, "ImportLevel": { "v-bind:options.sync": "ImportLevel", "v-bind:index.sync": "ImportLevelIndex", "v-bind:twoWayTitle.once": "ImportLevelIndex" } }, _this.$events = {}, _this.components = {
            Name: _input2.default,
            ReasonSupplement: _input2.default,
            MattersEntrusted: _input2.default,
            Description: _input2.default,
            Category: _option2.default,
            OrganizationUnitId: _option2.default,
            Partition: _option2.default,
            Language: _option2.default,
            SecretLevel: _option2.default,
            Stage: _option2.default,
            AgencyAuthority: _option2.default,
            Agent: _option2.default,
            ImportLevel: _pickerOption2.default
        }, _this.data = {
            addOpacity: 1,
            AcceptDateWarning: true,
            caseInfoData: {},
            isCaseInfoData: false,
            submitData: {
                // AcceptDateText: "",
                // AgencyAuthority: "", //代理权限
                // Agent: "", //代理方
                // CaseClientRelationList: [],
                // CaseContactsList: [],
                // Category: "",
                // ClientId: "",
                // ClientName: "",
                // Description: "",
                // EndDate: "",
                // Id: "",
                // ImportLevel: "",
                // IsForeign: "",
                // IsLegal: "",
                // IsTemp: "N",
                // Language: "",
                // MattersEntrusted: "", //委托事项
                // Name: "",
                // OrganizationUnitId: "",
                // Partition: "",
                // ProcessStatus: "",
                // ReasonSupplement: "", //补充案由
                // SecretLevel: "",
                // SerialId: "",
                // Stage: "",
                // StartDate: "",
                // Status: "",
                // SubCategory_id: "" ,//案件子类
                // SubCategory:''
            },
            //案件名称
            Name: {
                title: '案件名称',
                name: 'Name',
                warning: true,
                type: 'text',
                options: false
            },
            NameValue: '',
            //案由分类
            Reason: {
                title: '案由分类',
                name: 'Reason',
                value: [[], [], []],
                displayText: [["请选择"], ["请选择"], ["请选择"]],
                content: ''
            },
            ReasonIndex: [0, 0, 0],
            //补充案由
            ReasonSupplement: {
                title: '补充案由',
                name: 'ReasonSupplement',
                warning: false,
                type: 'text',
                options: true
            },
            ReasonSupplementValue: '',
            //委托事项
            MattersEntrusted: {
                title: '委托事项',
                name: 'MattersEntrusted',
                warning: false,
                type: 'text',
                options: true
            },
            MattersEntrustedValue: '',
            // //案件名称
            // Name: {
            //     title: '案件名称',
            //     name: 'Name',
            //     warning: true,
            //     type: 'text',
            //     options: false
            // },
            // NameValue: '',
            //案件类别
            Category: {
                title: '案件类别',
                name: 'Category',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            CategoryIndex: 0,
            //案件业务划分
            Partition: {
                title: '案件业务划分',
                name: 'Partition',
                value: [""],
                displayText: ["请选择"],
                warning: false
            },
            PartitionIndex: 0,
            //案件业务子类
            SubCategory: {
                title: '案件业务子类',
                name: 'SubCategory',
                value: [[], []],
                displayText: [["请选择"], ["请选择"]],
                content: ''
            },
            SubCategoryIndex: [0, 0],
            //案件阶段
            Stage: {
                title: '案件阶段',
                name: 'Stage',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            StageIndex: 0,
            //组织结构
            OrganizationUnitId: {
                title: '组织结构',
                name: 'OrganizationUnitId',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            OrganizationUnitIdIndex: 0,
            //书写语言
            Language: {
                title: '书写语言',
                name: 'Language',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            LanguageIndex: 0,
            //保密级别
            SecretLevel: {
                title: '保密级别',
                name: 'SecretLevel',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            SecretLevelIndex: 0,
            //代理权限
            AgencyAuthority: {
                value: [],
                displayText: []
            },
            AgencyAuthorityData: [],
            //代理方
            Agent: {
                title: '代理方',
                name: 'Agent',
                value: [""],
                displayText: ["请选择"],
                warning: false
            },
            AgentIndex: 0,
            AgentData: [],
            //是否涉外
            IsForeign: {
                title: '是否涉外',
                checked: false,
                IsForeign: []
            },
            //是否法律援助
            IsLegal: {
                title: '是否法律援助',
                checked: false,
                IsLegal: []
            },
            // 重要级别
            ImportLevel: {
                title: '重要级别',
                key: 'displayText',
                name: 'ImportLevel',
                data: [],
                warning: false
            },
            ImportLevelIndex: -1,

            //案情介绍
            Description: {
                title: '案情介绍',
                name: 'Description',
                warning: true,
                type: 'text',
                options: true
            },
            DescriptionValue: ''
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.Name && this.submitData.Description && this.submitData.Category && this.submitData.AcceptDateText && this.submitData.OrganizationUnitId && this.submitData.Language && this.submitData.SecretLevel) {
                    this.CreateOrUpdateCaseGeneralInfo();
                } else {
                    this.addOpacity = 1;
                    // this.AcceptDateWarning = true;
                    // this.Stage.warning = true;
                    // this.Category.warning = true;
                    wx.showToast({
                        title: '请填写必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false //显示透明蒙层，防止触摸穿透,
                    });
                }
            },

            //删除已选权限
            deletePItem: function deletePItem(index) {
                this.AgencyAuthorityData.splice(index, 1);
                var Pvalue = this.submitData.AgencyAuthority.split(',');
                Pvalue.splice(index, 1);
                Pvalue = Pvalue.toString();
                this.submitData.AgencyAuthority = Pvalue;
                this.$apply();
            },

            //权限
            bindPickerChangeAgencyAuthorityData: function bindPickerChangeAgencyAuthorityData(e) {
                if (+e.detail.value > 0) {
                    this.AgencyAuthorityData.push(+e.detail.value);
                    (0, _api.myDistinct)(this.AgencyAuthorityData);
                    var Pindex = this.AgencyAuthorityData;
                    var Pvalue = [];
                    for (var index in Pindex) {
                        Pvalue[index] = this.AgencyAuthority.value[Pindex[index]];
                    }
                    this.submitData.AgencyAuthority = Pvalue.toString();
                }
            },

            //开始时间
            bindStartDateDateChange: function bindStartDateDateChange(e) {
                this.submitData.StartDate = e.detail.value;
                this.$apply();
            },

            //结束时间
            bindEndDateDateChange: function bindEndDateDateChange(e) {
                this.submitData.EndDate = e.detail.value;
                this.$apply();
            },

            // isImportLevel() {
            //     this.ImportLevel.checked = !this.ImportLevel.checked;
            //     if (this.ImportLevel.checked) {
            //         this.submitData.ImportLevel = this.ImportLevel.ImportLevel[0].value;
            //     } else {
            //         this.submitData.ImportLevel = this.ImportLevel.ImportLevel[1].value;
            //     }
            //     this.$apply()
            // },
            Legal: function Legal() {
                this.IsLegal.checked = !this.IsLegal.checked;
                if (this.IsLegal.checked) {
                    this.submitData.IsLegal = this.IsLegal.IsLegal[0].value;
                } else {
                    this.submitData.IsLegal = this.IsLegal.IsLegal[1].value;
                }
                this.$apply();
            },
            IsForeign: function IsForeign() {
                this.IsForeign.checked = !this.IsForeign.checked;
                if (this.IsForeign.checked) {
                    this.submitData.IsForeign = this.IsForeign.IsForeign[0].value;
                } else {
                    this.submitData.IsForeign = this.IsForeign.IsForeign[1].value;
                }
                this.$apply();
            },
            bindAcceptDateChange: function bindAcceptDateChange(e) {
                if (e.detail.value) {
                    this.AcceptDateWarning = false;
                    this.submitData.AcceptDateText = e.detail.value;
                    this.submitData.AcceptDate = e.detail.value;
                } else {
                    this.AcceptDateWarning = true;
                }
                this.$apply();
            },
            bindcolumnSubCategoryChange: function bindcolumnSubCategoryChange(e) {
                this.isCaseInfoData = false;
                switch (e.detail.column) {
                    case 0:
                        if (e.detail.value !== 0) {
                            this.GetGeneralCodeComboOutput('CACT', this.SubCategory.value[0][e.detail.value], 6, true);
                        } else {
                            this.SubCategory.value[1] = [''];
                            this.SubCategory.displayText[1] = ['请选择'];
                        }
                        this.SubCategoryIndex[0] = e.detail.value;
                        this.SubCategoryIndex[1] = 0;
                        break;
                    case 1:
                        this.SubCategoryIndex[1] = e.detail.value;
                }
                this.$apply();
            },
            bindcolumnReasonChange: function bindcolumnReasonChange(e) {
                this.isCaseInfoData = false;
                switch (e.detail.column) {
                    case 0:
                        if (e.detail.value !== 0) {
                            this.GetGeneralCodeComboOutput('CAAY', this.Reason.value[0][e.detail.value], 6, true);
                        } else {
                            this.Reason.value[1] = [''];
                            this.Reason.displayText[1] = ['请选择'];
                            this.Reason.value[2] = [''];
                            this.Reason.displayText[2] = ['请选择'];
                        }
                        this.ReasonIndex[0] = e.detail.value;
                        this.ReasonIndex[1] = 0;
                        this.ReasonIndex[2] = 0;
                        break;
                    case 1:
                        if (e.detail.value !== 0) {
                            this.GetGeneralCodeComboOutput('CAAY', this.Reason.value[1][e.detail.value], 7, true);
                        } else {
                            this.Reason.value[2] = [''];
                            this.Reason.displayText[2] = ['请选择'];
                        }
                        this.ReasonIndex[1] = e.detail.value;
                        this.ReasonIndex[2] = 0;
                        break;
                    case 2:
                        this.ReasonIndex[2] = e.detail.value;
                        break;
                }
                this.$apply();
            },
            dateChange: function dateChange(type) {
                switch (type) {
                    case 'CACT':
                        if (this.SubCategoryIndex[1] == 0) {
                            this.SubCategory.content = this.SubCategory.displayText[0][this.SubCategoryIndex[0]];
                            this.submitData.SubCategory = this.SubCategory.value[0][this.SubCategoryIndex[0]];
                        } else {
                            this.SubCategory.content = this.SubCategory.displayText[0][this.SubCategoryIndex[0]] + '/' + this.SubCategory.displayText[1][this.SubCategoryIndex[1]];
                            this.submitData.SubCategory = this.SubCategory.value[0][this.SubCategoryIndex[0]] + ',' + this.SubCategory.value[1][this.SubCategoryIndex[1]];
                        }
                        break;
                    case 'CAAY':
                        if (this.ReasonIndex[1] == 0) {
                            this.Reason.content = this.Reason.displayText[0][this.ReasonIndex[0]];
                            this.submitData.Reason = this.Reason.value[0][this.ReasonIndex[0]];
                        } else if (this.ReasonIndex[2] == 0) {
                            this.Reason.content = this.Reason.displayText[0][this.ReasonIndex[0]] + '/' + this.Reason.displayText[1][this.ReasonIndex[1]];
                            this.submitData.Reason = this.Reason.value[0][this.ReasonIndex[0]] + ',' + this.Reason.value[1][this.ReasonIndex[1]];
                        } else {
                            this.Reason.content = this.Reason.displayText[0][this.ReasonIndex[0]] + '/' + this.Reason.displayText[1][this.ReasonIndex[1]] + '/' + this.Reason.displayText[2][this.ReasonIndex[2]];
                            this.submitData.Reason = this.Reason.value[0][this.ReasonIndex[0]] + ',' + this.Reason.value[1][this.ReasonIndex[1]] + ',' + this.Reason.value[2][this.ReasonIndex[2]];
                        }
                        break;
                    default:
                        break;
                }
            }
        }, _this.events = {}, _this.watch = {
            SubCategoryIndex: function SubCategoryIndex(index, oldIndex) {
                if (this.isCaseInfoData) {
                    if (this.SubCategoryIndex[1] == 0) {
                        this.SubCategory.content = this.SubCategory.displayText[0][this.SubCategoryIndex[0]];
                        this.submitData.SubCategory = this.SubCategory.value[0][this.SubCategoryIndex[0]];
                    } else {
                        this.SubCategory.content = this.SubCategory.displayText[0][this.SubCategoryIndex[0]] + '/' + this.SubCategory.displayText[1][this.SubCategoryIndex[1]];
                        this.submitData.SubCategory = this.SubCategory.value[0][this.SubCategoryIndex[0]] + ',' + this.SubCategory.value[1][this.SubCategoryIndex[1]];
                    }
                }
            },
            ReasonIndex: function ReasonIndex(_ReasonIndex) {
                if (this.isCaseInfoData) {
                    if (this.ReasonIndex[1] == 0) {
                        this.Reason.content = this.Reason.displayText[0][this.ReasonIndex[0]];
                        this.submitData.Reason = this.Reason.value[0][this.ReasonIndex[0]];
                    } else if (this.ReasonIndex[2] == 0) {
                        this.Reason.content = this.Reason.displayText[0][this.ReasonIndex[0]] + '/' + this.Reason.displayText[1][this.ReasonIndex[1]];
                        this.submitData.Reason = this.Reason.value[0][this.ReasonIndex[0]] + ',' + this.Reason.value[1][this.ReasonIndex[1]];
                    } else {
                        this.Reason.content = this.Reason.displayText[0][this.ReasonIndex[0]] + '/' + this.Reason.displayText[1][this.ReasonIndex[1]] + '/' + this.Reason.displayText[2][this.ReasonIndex[2]];
                        this.submitData.Reason = this.Reason.value[0][this.ReasonIndex[0]] + ',' + this.Reason.value[1][this.ReasonIndex[1]] + ',' + this.Reason.value[2][this.ReasonIndex[2]];
                    }
                }
            },
            CategoryIndex: function CategoryIndex(index, oldIndex) {
                console.log(index, oldIndex);
                this.submitData.Category = this.Category.value[index];
                this.submitData.CategoryText = this.Category.displayText[index];
                this.GetGeneralCodeComboOutput('CABA', this.Category.value[index]);
                if (oldIndex !== 0) {
                    this.isCaseInfoData = false;
                }
                switch (this.Category.value[index]) {
                    case 'FS':
                        this.SubCategory.content = "";
                        this.GetGeneralCodeComboOutput('CACT', 'FS', 5, true);
                        this.SubCategoryIndex = [0, 0];
                        this.SubCategory.value[1] = [''];
                        this.SubCategory.displayText[1] = ['请选择'];
                        break;
                    case 'XS':
                        this.Reason.content = "";
                        this.ReasonIndex = [0, 0, 0];
                        this.GetGeneralCodeComboOutput('CASTAGE', 'XS', 0);
                        this.GetGeneralCodeComboOutput('CADQ', 'XS', 0);
                        this.GetGeneralCodeComboOutput('CAAY', 'XS', 5, true);
                        this.Reason.value[1] = [''];
                        this.Reason.displayText[1] = ['请选择'];
                        this.Reason.value[2] = [''];
                        this.Reason.displayText[2] = ['请选择'];
                        break;
                    case 'MS':
                        this.GetGeneralCodeComboOutput('CASTAGE', 'MS', 0);
                        this.GetGeneralCodeComboOutput('CADQ', 'MS', 0);
                        this.GetGeneralCodeComboOutput('CAWS', 'MS');
                        this.Reason.content = "";
                        this.ReasonIndex = [0, 0, 0];
                        this.Reason.value[1] = [''];
                        this.Reason.displayText[1] = ['请选择'];
                        this.Reason.value[2] = [''];
                        this.Reason.displayText[2] = ['请选择'];
                        this.GetGeneralCodeComboOutput('CAAY', 'MS', 5, true);
                        break;
                    case 'XZ':
                        this.GetGeneralCodeComboOutput('CASTAGE', 'XZ', 0);
                        this.GetGeneralCodeComboOutput('CADQ', 'XZ', 0);
                        this.GetGeneralCodeComboOutput('CAWS', 'XZ');
                        this.Reason.content = "";
                        this.ReasonIndex = [0, 0, 0];
                        this.Reason.value[1] = [''];
                        this.Reason.displayText[1] = ['请选择'];
                        this.Reason.value[2] = [''];
                        this.Reason.displayText[2] = ['请选择'];
                        this.GetGeneralCodeComboOutput('CAAY', 'XZ', 5, true);
                        break;
                    case 'ZS':
                        this.SubCategory.content = "";
                        this.GetGeneralCodeComboOutput('CACT', 'ZS', 5, true);
                        this.SubCategoryIndex = [0, 0];
                        this.SubCategory.value[1] = [''];
                        this.SubCategory.displayText[1] = ['请选择'];
                        break;
                    case 'ZC':
                        this.GetGeneralCodeComboOutput('CADQ', 'ZC', 0);
                        this.GetGeneralCodeComboOutput('CAWS', 'ZC');
                        break;
                    default:
                        break;
                }
                if (oldIndex !== 0 && !this.isCaseInfoData) {
                    this.isCaseInfoData = false;
                    this.AgencyAuthorityData = [];
                    this.submitData.AgencyAuthority = '';
                    this.submitData.StartDate = '';
                    this.submitData.EndDate = '';
                    this.submitData.SubCategory = '';
                    this.submitData.Stage = '';
                    this.submitData.Reason = '';
                    this.submitData.MattersEntrusted = '';
                    this.submitData.ReasonSupplement = '';
                    this.submitData.Agent = '';
                    this.ReasonSupplementValue = '';
                }
                // this.$apply();
            },
            NameValue: function NameValue(value) {
                this.submitData.Name = value;
                this.$apply();
            },
            ReasonSupplementValue: function ReasonSupplementValue(value) {
                this.submitData.ReasonSupplement = value;
                this.$apply();
            },
            MattersEntrustedValue: function MattersEntrustedValue(value) {
                this.submitData.MattersEntrusted = value;
                this.$apply();
            },
            DescriptionValue: function DescriptionValue(value) {
                this.submitData.Description = value;
                this.$apply();
            },
            PartitionIndex: function PartitionIndex(index) {
                this.submitData.Partition = this.Partition.value[index];
                this.$apply();
            },
            StageIndex: function StageIndex(index) {
                this.submitData.Stage = this.Stage.value[index];
                this.$apply();
            },
            OrganizationUnitIdIndex: function OrganizationUnitIdIndex(index) {
                this.submitData.OrganizationUnitId = this.OrganizationUnitId.value[index];
                this.$apply();
            },
            LanguageIndex: function LanguageIndex(index) {
                this.submitData.Language = this.Language.value[index];
                this.$apply();
            },
            SecretLevelIndex: function SecretLevelIndex(index) {
                this.submitData.SecretLevel = this.SecretLevel.value[index];
                this.$apply();
            },
            AgentIndex: function AgentIndex(index) {
                this.submitData.Agent = this.Agent.value[index];
                this.$apply();
            },
            ImportLevelIndex: function ImportLevelIndex(index) {
                this.submitData.ImportLevel = this.ImportLevel.data[index].value;
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(caseInfo, [{
        key: 'filterAgent',
        value: function filterAgent(data, key) {
            var ary_id = [''];
            var ary_name = ['请选择'];
            for (var index in data) {
                var reg = new RegExp(key);
                var result = reg.test(data[index].description);
                if (result) {
                    ary_id.push(data[index].id);
                    ary_name.push(data[index].name);
                }
            }
            this.Agent.value = ary_id;
            this.Agent.displayText = ary_name;
            if (this.isCaseInfoData) {
                for (var Agent_index in this.Agent.value) {
                    if (this.Agent.value[Agent_index] == this.caseInfoData.Agent) {
                        this.AgentIndex = Agent_index;
                    }
                }
            } else {
                this.AgentIndex = 0;
            }
        }
        //案件基本信息提交

    }, {
        key: 'CreateOrUpdateCaseGeneralInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/case/CreateOrUpdateCaseGeneralInfo', 'post', this.submitData);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {

                                    this.submitData.Id = resData.data.result;
                                    wx.setStorage({
                                        key: 'CREATE_CASEINFO_DATA',
                                        data: this.submitData,
                                        success: function success() {
                                            wx.showToast({
                                                title: '提交完成', //提示的内容,
                                                icon: 'success', //图标,
                                                duration: 2000, //延迟时间,
                                                mask: true, //显示透明蒙层，防止触摸穿透,
                                                success: function success(res) {
                                                    _this2.addOpacity = 1;
                                                    wx.navigateBack({
                                                        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                                    });
                                                }
                                            });
                                        }
                                    });
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function CreateOrUpdateCaseGeneralInfo() {
                return _ref2.apply(this, arguments);
            }

            return CreateOrUpdateCaseGeneralInfo;
        }()
        //案件待编辑基础数据

    }, {
        key: 'GetCaseGeneralInfo',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, caseGeneralInfoData, Category, Partition, Language, SecretLevel;
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
                                    //案件类别

                                    Category = this.cacheData(caseGeneralInfoData.caseCategoryCombobox);

                                    this.Category.value = this.Category.value.concat(Category.value);
                                    this.Category.displayText = this.Category.displayText.concat(Category.displayText);
                                    //案件业务划分
                                    Partition = this.cacheData(caseGeneralInfoData.partitionCombobox);

                                    this.Partition.value = this.Partition.value.concat(Partition.value);
                                    this.Partition.displayText = this.Partition.displayText.concat(Partition.displayText);
                                    //书面语言
                                    Language = this.cacheData(caseGeneralInfoData.caseWrittenLanguageCombobox);

                                    this.Language.value = this.Language.value.concat(Language.value);
                                    this.Language.displayText = this.Language.displayText.concat(Language.displayText);
                                    //保密级别
                                    SecretLevel = this.cacheData(caseGeneralInfoData.secretLevelCombobox);

                                    this.SecretLevel.value = this.SecretLevel.value.concat(SecretLevel.value);
                                    this.SecretLevel.displayText = this.SecretLevel.displayText.concat(SecretLevel.displayText);
                                    //是否涉外
                                    this.IsForeign.IsForeign = caseGeneralInfoData.whetherCombobox;
                                    this.submitData.IsForeign = 'N';
                                    //是否法律援助
                                    this.IsLegal.IsLegal = caseGeneralInfoData.whetherCombobox;
                                    this.submitData.IsLegal = 'N';
                                    //是否重要
                                    this.ImportLevel.data = caseGeneralInfoData.importLevelCombobox;
                                    this.fillData();
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
        //填充数据

    }, {
        key: 'fillData',
        value: function fillData() {
            if (this.isCaseInfoData) {
                //开始时间
                this.submitData.StartDate = this.caseInfoData.StartDate ? this.caseInfoData.StartDate.split('T')[0] : '';
                //结束时间
                this.submitData.EndDate = this.caseInfoData.EndDate ? this.caseInfoData.EndDate.split('T')[0] : '';
                this.NameValue = this.caseInfoData.Name;
                this.DescriptionValue = this.caseInfoData.Description;
                for (var Category_index in this.Category.value) {
                    if (this.Category.value[Category_index] == this.caseInfoData.Category) {
                        this.CategoryIndex = Category_index;
                    }
                }
                this.GetGeneralCodeComboOutput('CABA', this.caseInfoData.Category);
                for (var OrganizationUnitId_index in this.OrganizationUnitId.value) {
                    if (this.OrganizationUnitId.value[OrganizationUnitId_index] == this.caseInfoData.OrganizationUnitId) {
                        this.OrganizationUnitIdIndex = OrganizationUnitId_index;
                    }
                }
                for (var Language_index in this.Language.value) {
                    if (this.Language.value[Language_index] == this.caseInfoData.Language) {
                        this.LanguageIndex = Language_index;
                    }
                }
                for (var SecretLevel_index in this.SecretLevel.value) {
                    if (this.SecretLevel.value[SecretLevel_index] == this.caseInfoData.SecretLevel) {
                        this.SecretLevelIndex = SecretLevel_index;
                    }
                }
                if (this.caseInfoData.IsForeign == 'Y') {
                    this.IsForeign.checked = true;
                    this.submitData.IsForeign = 'Y';
                }
                if (this.caseInfoData.IsLegal == 'Y') {
                    this.IsLegal.checked = true;
                    this.submitData.IsLegal = 'Y';
                }
                if (this.caseInfoData.ImportLevel == '02') {
                    this.ImportLevelIndex = 0;
                } else {
                    this.ImportLevelIndex = 1;
                }
                switch (this.caseInfoData.Category) {
                    case 'FS':
                        // this.GetGeneralCodeComboOutput('CACT', 'FS', 5, true);
                        break;
                    case 'XS':
                        // this.GetGeneralCodeComboOutput('CAAY', 'XS', 5, true);
                        // this.GetGeneralCodeComboOutput('CASTAGE', 'XZ', 0);
                        this.ReasonSupplementValue = this.caseInfoData.ReasonSupplement;
                        break;
                    case 'MS':
                        // this.GetGeneralCodeComboOutput('CAAY', 'MS', 5, true);
                        // this.GetGeneralCodeComboOutput('CASTAGE', 'XZ', 0);
                        // this.filterAgent('MZ')
                        this.ReasonSupplementValue = this.caseInfoData.ReasonSupplement;
                        break;
                    case 'XZ':
                        // this.GetGeneralCodeComboOutput('CAAY', 'XZ', 5, true);
                        // this.GetGeneralCodeComboOutput('CASTAGE', 'XZ', 0);
                        // this.filterAgent('XZ')
                        this.ReasonSupplementValue = this.caseInfoData.ReasonSupplement;
                        break;
                    case 'ZS':
                        // this.GetGeneralCodeComboOutput('CACT', 'ZS', 5, true);
                        break;
                    case 'ZC':
                        // this.filterAgent('ZC')
                        this.MattersEntrustedValue = this.caseInfoData.MattersEntrusted;
                        break;
                    default:
                        break;
                }
            }
            this.$apply();
        }
        //获取隶属组织架构

    }, {
        key: 'GetOrganizations',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var resData, GetOrganizationsData, OrganizationUnitId_value, OrganizationUnitId_displayText, index;
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
                                    OrganizationUnitId_value = [];
                                    OrganizationUnitId_displayText = [];

                                    for (index in GetOrganizationsData) {
                                        OrganizationUnitId_value[index] = GetOrganizationsData[index].id;
                                        OrganizationUnitId_displayText[index] = GetOrganizationsData[index].displayName;
                                    }
                                    this.OrganizationUnitId.value = this.OrganizationUnitId.value.concat(OrganizationUnitId_value);
                                    this.OrganizationUnitId.displayText = this.OrganizationUnitId.displayText.concat(OrganizationUnitId_displayText);
                                    if (this.isCaseInfoData) {
                                        for (index in this.OrganizationUnitId.value) {
                                            if (this.OrganizationUnitId.value[index] == this.caseInfoData.OrganizationUnitId) {
                                                this.OrganizationUnitIdIndex = index;
                                            }
                                        }
                                    }
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
        //获取案件业务子类

    }, {
        key: 'GetGeneralCodeComboOutput',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(keyWords, ParentId) {
                var Depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var IsRecursive = arguments[3];
                var key, Pid, data, resData, value, displayText, index, SubCategory, Stage_index, AgencyAuthority, i, j, AgentData, Reason;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (keyWords == 'CAWS') {
                                    key = ParentId;
                                } else {
                                    Pid = ParentId || '';
                                }
                                IsRecursive = IsRecursive || false;
                                ParentId = ParentId || '';
                                data = {
                                    Class: keyWords,
                                    Depth: Depth,
                                    IsMaxDepth: true,
                                    ParentId: Pid,
                                    IsRecursive: IsRecursive
                                    // isAll: true
                                };
                                _context4.next = 6;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboOutput', 'post', data);

                            case 6:
                                resData = _context4.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context4.next = 38;
                                    break;
                                }

                                value = [''];
                                displayText = ['请选择'];

                                for (index = 1; index < resData.data.result.length; index++) {
                                    value[index] = resData.data.result[index].id;
                                    displayText[index] = resData.data.result[index].name;
                                }
                                _context4.t0 = keyWords;
                                _context4.next = _context4.t0 === "CACT" ? 14 : _context4.t0 === "CABA" ? 18 : _context4.t0 === "CASTAGE" ? 22 : _context4.t0 === "CADQ" ? 26 : _context4.t0 === "CAWS" ? 30 : _context4.t0 === "CAAY" ? 33 : 37;
                                break;

                            case 14:
                                this.SubCategory.value[Depth - 5] = value;
                                this.SubCategory.displayText[Depth - 5] = displayText;
                                if (this.isCaseInfoData && this.caseInfoData.SubCategory) {
                                    SubCategory = this.caseInfoData.SubCategory.split(',');

                                    if (Depth < 6) {
                                        this.GetGeneralCodeComboOutput('CACT', SubCategory[Depth - 5], Depth + 1, true);
                                    }
                                    for (index in this.SubCategory.value[Depth - 5]) {
                                        if (this.SubCategory.value[Depth - 5][index] == SubCategory[Depth - 5]) {
                                            this.SubCategoryIndex[Depth - 5] = index;
                                        }
                                    }
                                }
                                return _context4.abrupt('break', 38);

                            case 18:
                                this.Partition.value = value;
                                this.Partition.displayText = displayText;
                                if (this.isCaseInfoData) {
                                    for (index in this.Partition.value) {
                                        if (this.Partition.value[index] == this.caseInfoData.Partition) {
                                            this.PartitionIndex = index;
                                        }
                                    }
                                } else {
                                    this.PartitionIndex = 0;
                                }
                                return _context4.abrupt('break', 38);

                            case 22:
                                this.Stage.value = value;
                                this.Stage.displayText = displayText;
                                if (this.isCaseInfoData) {
                                    for (Stage_index in this.Stage.value) {
                                        if (this.Stage.value[Stage_index] == this.caseInfoData.Stage) {
                                            this.StageIndex = Stage_index;
                                        }
                                    }
                                } else {
                                    this.StageIndex = 0;
                                }
                                return _context4.abrupt('break', 38);

                            case 26:
                                this.AgencyAuthority.value = value;
                                this.AgencyAuthority.displayText = displayText;
                                if (this.isCaseInfoData && this.caseInfoData.AgencyAuthority) {
                                    AgencyAuthority = this.caseInfoData.AgencyAuthority.split(',');

                                    for (i = 0; i < AgencyAuthority.length; i++) {
                                        for (j = 0; j < this.AgencyAuthority.value.length; j++) {
                                            if (this.AgencyAuthority.value[j] == AgencyAuthority[i]) {
                                                this.AgencyAuthorityData[i] = j;
                                            }
                                        }
                                    }
                                } else {
                                    this.AgencyAuthorityData = [];
                                }
                                return _context4.abrupt('break', 38);

                            case 30:
                                AgentData = resData.data.result;

                                this.filterAgent(AgentData, key);
                                return _context4.abrupt('break', 38);

                            case 33:
                                this.Reason.value[Depth - 5] = value;
                                this.Reason.displayText[Depth - 5] = displayText;
                                if (this.isCaseInfoData && this.caseInfoData.Reason) {
                                    Reason = this.caseInfoData.Reason.split(',');

                                    if (Depth < 7) {
                                        this.GetGeneralCodeComboOutput('CAAY', Reason[Depth - 5], Depth + 1, true);
                                    }
                                    for (index in this.Reason.value[Depth - 5]) {
                                        if (this.Reason.value[Depth - 5][index] == Reason[Depth - 5]) {
                                            this.ReasonIndex[Depth - 5] = index;
                                        }
                                    }
                                }
                                return _context4.abrupt('break', 38);

                            case 37:
                                return _context4.abrupt('break', 38);

                            case 38:
                                this.$apply();

                            case 39:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function GetGeneralCodeComboOutput(_x2, _x3) {
                return _ref5.apply(this, arguments);
            }

            return GetGeneralCodeComboOutput;
        }()
    }, {
        key: 'cacheData',
        value: function cacheData(data) {
            var value = [];
            var displayText = [];
            for (var index in data) {
                value[index] = data[index].value;
                displayText[index] = data[index].displayText;
            }
            var filterData = {
                value: value,
                displayText: displayText
            };
            return filterData;
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.caseInfoData = wx.getStorageSync('CREATE_CASEINFO_DATA');
            if (Object.keys(this.caseInfoData).length !== 0) {
                this.submitData = wx.getStorageSync('CREATE_CASEINFO_DATA');
                this.isCaseInfoData = true;
            } else {
                this.submitData.ClientName = options.ClientName;
                this.submitData.ClientId = options.ClientId;
                this.submitData.CaseClientRelationList = [];
                this.submitData.CaseContactsList = [];
                this.isCaseInfoData = false;
            }
            this.$apply();
            this.GetCaseGeneralInfo();
            this.GetOrganizations();
        }
    }]);

    return caseInfo;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(caseInfo , 'pages/modules/myRegister/caseInfo/createCaseInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUNhc2VJbmZvLmpzIl0sIm5hbWVzIjpbImNhc2VJbmZvIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiTmFtZSIsIlJlYXNvblN1cHBsZW1lbnQiLCJNYXR0ZXJzRW50cnVzdGVkIiwiRGVzY3JpcHRpb24iLCJDYXRlZ29yeSIsIk9yZ2FuaXphdGlvblVuaXRJZCIsIlBhcnRpdGlvbiIsIkxhbmd1YWdlIiwiU2VjcmV0TGV2ZWwiLCJTdGFnZSIsIkFnZW5jeUF1dGhvcml0eSIsIkFnZW50IiwiSW1wb3J0TGV2ZWwiLCJkYXRhIiwiYWRkT3BhY2l0eSIsIkFjY2VwdERhdGVXYXJuaW5nIiwiY2FzZUluZm9EYXRhIiwiaXNDYXNlSW5mb0RhdGEiLCJzdWJtaXREYXRhIiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsInR5cGUiLCJvcHRpb25zIiwiTmFtZVZhbHVlIiwiUmVhc29uIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsImNvbnRlbnQiLCJSZWFzb25JbmRleCIsIlJlYXNvblN1cHBsZW1lbnRWYWx1ZSIsIk1hdHRlcnNFbnRydXN0ZWRWYWx1ZSIsIkNhdGVnb3J5SW5kZXgiLCJQYXJ0aXRpb25JbmRleCIsIlN1YkNhdGVnb3J5IiwiU3ViQ2F0ZWdvcnlJbmRleCIsIlN0YWdlSW5kZXgiLCJPcmdhbml6YXRpb25Vbml0SWRJbmRleCIsIkxhbmd1YWdlSW5kZXgiLCJTZWNyZXRMZXZlbEluZGV4IiwiQWdlbmN5QXV0aG9yaXR5RGF0YSIsIkFnZW50SW5kZXgiLCJBZ2VudERhdGEiLCJJc0ZvcmVpZ24iLCJjaGVja2VkIiwiSXNMZWdhbCIsImtleSIsIkltcG9ydExldmVsSW5kZXgiLCJEZXNjcmlwdGlvblZhbHVlIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsIkFjY2VwdERhdGVUZXh0IiwiQ3JlYXRlT3JVcGRhdGVDYXNlR2VuZXJhbEluZm8iLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJkZWxldGVQSXRlbSIsImluZGV4Iiwic3BsaWNlIiwiUHZhbHVlIiwic3BsaXQiLCJ0b1N0cmluZyIsImJpbmRQaWNrZXJDaGFuZ2VBZ2VuY3lBdXRob3JpdHlEYXRhIiwiZSIsImRldGFpbCIsInB1c2giLCJQaW5kZXgiLCJiaW5kU3RhcnREYXRlRGF0ZUNoYW5nZSIsIlN0YXJ0RGF0ZSIsImJpbmRFbmREYXRlRGF0ZUNoYW5nZSIsIkVuZERhdGUiLCJMZWdhbCIsImJpbmRBY2NlcHREYXRlQ2hhbmdlIiwiQWNjZXB0RGF0ZSIsImJpbmRjb2x1bW5TdWJDYXRlZ29yeUNoYW5nZSIsImNvbHVtbiIsIkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQiLCJiaW5kY29sdW1uUmVhc29uQ2hhbmdlIiwiZGF0ZUNoYW5nZSIsImV2ZW50cyIsIndhdGNoIiwib2xkSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiQ2F0ZWdvcnlUZXh0IiwiY29tcHV0ZWQiLCJhcnlfaWQiLCJhcnlfbmFtZSIsInJlZyIsIlJlZ0V4cCIsInJlc3VsdCIsInRlc3QiLCJkZXNjcmlwdGlvbiIsImlkIiwiQWdlbnRfaW5kZXgiLCJzaG93TG9hZGluZyIsInN1Y2Nlc3MiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiSWQiLCJzZXRTdG9yYWdlIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJjYXNlR2VuZXJhbEluZm9EYXRhIiwiY2FjaGVEYXRhIiwiY2FzZUNhdGVnb3J5Q29tYm9ib3giLCJjb25jYXQiLCJwYXJ0aXRpb25Db21ib2JveCIsImNhc2VXcml0dGVuTGFuZ3VhZ2VDb21ib2JveCIsInNlY3JldExldmVsQ29tYm9ib3giLCJ3aGV0aGVyQ29tYm9ib3giLCJpbXBvcnRMZXZlbENvbWJvYm94IiwiZmlsbERhdGEiLCJDYXRlZ29yeV9pbmRleCIsIk9yZ2FuaXphdGlvblVuaXRJZF9pbmRleCIsIkxhbmd1YWdlX2luZGV4IiwiU2VjcmV0TGV2ZWxfaW5kZXgiLCJHZXRPcmdhbml6YXRpb25zRGF0YSIsIk9yZ2FuaXphdGlvblVuaXRJZF92YWx1ZSIsIk9yZ2FuaXphdGlvblVuaXRJZF9kaXNwbGF5VGV4dCIsImRpc3BsYXlOYW1lIiwia2V5V29yZHMiLCJQYXJlbnRJZCIsIkRlcHRoIiwiSXNSZWN1cnNpdmUiLCJQaWQiLCJDbGFzcyIsIklzTWF4RGVwdGgiLCJsZW5ndGgiLCJTdGFnZV9pbmRleCIsImkiLCJqIiwiZmlsdGVyQWdlbnQiLCJmaWx0ZXJEYXRhIiwiZ2V0U3RvcmFnZVN5bmMiLCJPYmplY3QiLCJrZXlzIiwiQ2xpZW50TmFtZSIsIkNsaWVudElkIiwiQ2FzZUNsaWVudFJlbGF0aW9uTGlzdCIsIkNhc2VDb250YWN0c0xpc3QiLCJHZXRDYXNlR2VuZXJhbEluZm8iLCJHZXRPcmdhbml6YXRpb25zIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUlBOzs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE1BQXZDLEVBQThDLDBCQUF5QixXQUF2RSxFQUFtRiwyQkFBMEIsV0FBN0csRUFBUixFQUFrSSxvQkFBbUIsRUFBQyxxQkFBb0Isa0JBQXJCLEVBQXdDLDBCQUF5Qix1QkFBakUsRUFBeUYsMkJBQTBCLHVCQUFuSCxFQUFySixFQUFpUyxvQkFBbUIsRUFBQyxxQkFBb0Isa0JBQXJCLEVBQXdDLDBCQUF5Qix1QkFBakUsRUFBeUYsMkJBQTBCLHVCQUFuSCxFQUFwVCxFQUFnYyxlQUFjLEVBQUMscUJBQW9CLGFBQXJCLEVBQW1DLDBCQUF5QixrQkFBNUQsRUFBK0UsMkJBQTBCLGtCQUF6RyxFQUE5YyxFQUEya0IsWUFBVyxFQUFDLHVCQUFzQixVQUF2QixFQUFrQyxxQkFBb0IsZUFBdEQsRUFB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QWhCLEdBQXVDLEVBQXZDO0FBQ0EscUJBQUtqSSxVQUFMLENBQWdCa0ksZ0JBQWhCLEdBQWlDLEVBQWpDO0FBQ0EscUJBQUtuSSxjQUFMLEdBQXNCLEtBQXRCO0FBQ0g7QUFDRCxpQkFBS2tDLE1BQUw7QUFDQSxpQkFBS2tHLGtCQUFMO0FBQ0EsaUJBQUtDLGdCQUFMO0FBQ0g7Ozs7RUE5M0JpQ0MsZUFBS0MsSTs7a0JBQXRCN0osUSIsImZpbGUiOiJjcmVhdGVDYXNlSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7XG4gICAgICAgIG15RGlzdGluY3RcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcydcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBpbXBvcnQgTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFJlYXNvblN1cHBsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBNYXR0ZXJzRW50cnVzdGVkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBQYXJ0aXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgT3JnYW5pemF0aW9uVW5pdElkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IExhbmd1YWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IFNlY3JldExldmVsIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IFN0YWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IEFnZW5jeUF1dGhvcml0eSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBBZ2VudCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBJbXBvcnRMZXZlbCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhc2VJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk5hbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcIk5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIk5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIk5hbWVWYWx1ZVwifSxcIlJlYXNvblN1cHBsZW1lbnRcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiUmVhc29uU3VwcGxlbWVudFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiUmVhc29uU3VwcGxlbWVudFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiUmVhc29uU3VwcGxlbWVudFZhbHVlXCJ9LFwiTWF0dGVyc0VudHJ1c3RlZFwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJNYXR0ZXJzRW50cnVzdGVkXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJNYXR0ZXJzRW50cnVzdGVkVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJNYXR0ZXJzRW50cnVzdGVkVmFsdWVcIn0sXCJEZXNjcmlwdGlvblwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJEZXNjcmlwdGlvblwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRGVzY3JpcHRpb25WYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkRlc2NyaXB0aW9uVmFsdWVcIn0sXCJDYXRlZ29yeVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIkNhdGVnb3J5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiQ2F0ZWdvcnlJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkNhdGVnb3J5SW5kZXhcIn0sXCJPcmdhbml6YXRpb25Vbml0SWRcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJPcmdhbml6YXRpb25Vbml0SWRcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJPcmdhbml6YXRpb25Vbml0SWRJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIk9yZ2FuaXphdGlvblVuaXRJZEluZGV4XCJ9LFwiUGFydGl0aW9uXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiUGFydGl0aW9uXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiUGFydGl0aW9uSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJQYXJ0aXRpb25JbmRleFwifSxcIkxhbmd1YWdlXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiTGFuZ3VhZ2VcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJMYW5ndWFnZUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTGFuZ3VhZ2VJbmRleFwifSxcIlNlY3JldExldmVsXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiU2VjcmV0TGV2ZWxcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJTZWNyZXRMZXZlbEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiU2VjcmV0TGV2ZWxJbmRleFwifSxcIlN0YWdlXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiU3RhZ2VcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJTdGFnZUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiU3RhZ2VJbmRleFwifSxcIkFnZW50XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiQWdlbnRcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJBZ2VudEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQWdlbnRJbmRleFwifSxcIkltcG9ydExldmVsXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiSW1wb3J0TGV2ZWxcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJJbXBvcnRMZXZlbEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiSW1wb3J0TGV2ZWxJbmRleFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBOYW1lLFxuICAgICAgICAgICAgUmVhc29uU3VwcGxlbWVudCxcbiAgICAgICAgICAgIE1hdHRlcnNFbnRydXN0ZWQsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIENhdGVnb3J5LFxuICAgICAgICAgICAgT3JnYW5pemF0aW9uVW5pdElkLFxuICAgICAgICAgICAgUGFydGl0aW9uLFxuICAgICAgICAgICAgTGFuZ3VhZ2UsXG4gICAgICAgICAgICBTZWNyZXRMZXZlbCxcbiAgICAgICAgICAgIFN0YWdlLFxuICAgICAgICAgICAgQWdlbmN5QXV0aG9yaXR5LFxuICAgICAgICAgICAgQWdlbnQsXG4gICAgICAgICAgICBJbXBvcnRMZXZlbFxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYWRkT3BhY2l0eTogMSxcbiAgICAgICAgICAgIEFjY2VwdERhdGVXYXJuaW5nOiB0cnVlLFxuICAgICAgICAgICAgY2FzZUluZm9EYXRhOiB7fSxcbiAgICAgICAgICAgIGlzQ2FzZUluZm9EYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6IHtcbiAgICAgICAgICAgICAgICAvLyBBY2NlcHREYXRlVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBBZ2VuY3lBdXRob3JpdHk6IFwiXCIsIC8v5Luj55CG5p2D6ZmQXG4gICAgICAgICAgICAgICAgLy8gQWdlbnQ6IFwiXCIsIC8v5Luj55CG5pa5XG4gICAgICAgICAgICAgICAgLy8gQ2FzZUNsaWVudFJlbGF0aW9uTGlzdDogW10sXG4gICAgICAgICAgICAgICAgLy8gQ2FzZUNvbnRhY3RzTGlzdDogW10sXG4gICAgICAgICAgICAgICAgLy8gQ2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgLy8gQ2xpZW50SWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgLy8gQ2xpZW50TmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBFbmREYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIElkOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIEltcG9ydExldmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIElzRm9yZWlnbjogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBJc0xlZ2FsOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIElzVGVtcDogXCJOXCIsXG4gICAgICAgICAgICAgICAgLy8gTGFuZ3VhZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgLy8gTWF0dGVyc0VudHJ1c3RlZDogXCJcIiwgLy/lp5TmiZjkuovpoblcbiAgICAgICAgICAgICAgICAvLyBOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIE9yZ2FuaXphdGlvblVuaXRJZDogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBQYXJ0aXRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgLy8gUHJvY2Vzc1N0YXR1czogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBSZWFzb25TdXBwbGVtZW50OiBcIlwiLCAvL+ihpeWFheahiOeUsVxuICAgICAgICAgICAgICAgIC8vIFNlY3JldExldmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIFNlcmlhbElkOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIFN0YWdlOiBcIlwiLFxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0RGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICAvLyBTdGF0dXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgLy8gU3ViQ2F0ZWdvcnlfaWQ6IFwiXCIgLC8v5qGI5Lu25a2Q57G7XG4gICAgICAgICAgICAgICAgLy8gU3ViQ2F0ZWdvcnk6JydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+ahiOS7tuWQjeensFxuICAgICAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qGI5Lu25ZCN56ewJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBOYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/moYjnlLHliIbnsbtcbiAgICAgICAgICAgIFJlYXNvbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qGI55Sx5YiG57G7JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVhc29uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1xuICAgICAgICAgICAgICAgICAgICBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgICAgICAgICAgICAgIFtcIuivt+mAieaLqVwiXSxcbiAgICAgICAgICAgICAgICAgICAgW1wi6K+36YCJ5oupXCJdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFzb25JbmRleDogWzAsIDAsIDBdLFxuICAgICAgICAgICAgLy/ooaXlhYXmoYjnlLFcbiAgICAgICAgICAgIFJlYXNvblN1cHBsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ihpeWFheahiOeUsScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JlYXNvblN1cHBsZW1lbnQnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhc29uU3VwcGxlbWVudFZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v5aeU5omY5LqL6aG5XG4gICAgICAgICAgICBNYXR0ZXJzRW50cnVzdGVkOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflp5TmiZjkuovpobknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdNYXR0ZXJzRW50cnVzdGVkJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE1hdHRlcnNFbnRydXN0ZWRWYWx1ZTogJycsXG4gICAgICAgICAgICAvLyAvL+ahiOS7tuWQjeensFxuICAgICAgICAgICAgLy8gTmFtZToge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5qGI5Lu25ZCN56ewJyxcbiAgICAgICAgICAgIC8vICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAvLyAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAvLyAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyBOYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/moYjku7bnsbvliKtcbiAgICAgICAgICAgIENhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmoYjku7bnsbvliKsnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcIlwiXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1wi6K+36YCJ5oupXCJdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDYXRlZ29yeUluZGV4OiAwLFxuICAgICAgICAgICAgLy/moYjku7bkuJrliqHliJLliIZcbiAgICAgICAgICAgIFBhcnRpdGlvbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qGI5Lu25Lia5Yqh5YiS5YiGJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGFydGl0aW9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1wiXCJdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQYXJ0aXRpb25JbmRleDogMCxcbiAgICAgICAgICAgIC8v5qGI5Lu25Lia5Yqh5a2Q57G7XG4gICAgICAgICAgICBTdWJDYXRlZ29yeToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qGI5Lu25Lia5Yqh5a2Q57G7JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3ViQ2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcbiAgICAgICAgICAgICAgICAgICAgW1wi6K+36YCJ5oupXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCLor7fpgInmi6lcIl1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFN1YkNhdGVnb3J5SW5kZXg6IFswLCAwXSxcbiAgICAgICAgICAgIC8v5qGI5Lu26Zi25q61XG4gICAgICAgICAgICBTdGFnZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qGI5Lu26Zi25q61JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3RhZ2UnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJcIl0sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcIuivt+mAieaLqVwiXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU3RhZ2VJbmRleDogMCxcbiAgICAgICAgICAgIC8v57uE57uH57uT5p6EXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e7hOe7h+e7k+aehCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ09yZ2FuaXphdGlvblVuaXRJZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcIlwiXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1wi6K+36YCJ5oupXCJdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWRJbmRleDogMCxcbiAgICAgICAgICAgIC8v5Lmm5YaZ6K+t6KiAXG4gICAgICAgICAgICBMYW5ndWFnZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lmm5YaZ6K+t6KiAJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGFuZ3VhZ2UnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJcIl0sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcIuivt+mAieaLqVwiXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTGFuZ3VhZ2VJbmRleDogMCxcbiAgICAgICAgICAgIC8v5L+d5a+G57qn5YirXG4gICAgICAgICAgICBTZWNyZXRMZXZlbDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a+G57qn5YirJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2VjcmV0TGV2ZWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJcIl0sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtcIuivt+mAieaLqVwiXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU2VjcmV0TGV2ZWxJbmRleDogMCxcbiAgICAgICAgICAgIC8v5Luj55CG5p2D6ZmQXG4gICAgICAgICAgICBBZ2VuY3lBdXRob3JpdHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEFnZW5jeUF1dGhvcml0eURhdGE6IFtdLFxuICAgICAgICAgICAgLy/ku6PnkIbmlrlcbiAgICAgICAgICAgIEFnZW50OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfku6PnkIbmlrknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBZ2VudCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcIlwiXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1wi6K+36YCJ5oupXCJdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQWdlbnRJbmRleDogMCxcbiAgICAgICAgICAgIEFnZW50RGF0YTogW10sXG4gICAgICAgICAgICAvL+aYr+WQpua2ieWkllxuICAgICAgICAgICAgSXNGb3JlaWduOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmmK/lkKbmtonlpJYnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIElzRm9yZWlnbjogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/mmK/lkKbms5Xlvovmj7TliqlcbiAgICAgICAgICAgIElzTGVnYWw6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aYr+WQpuazleW+i+aPtOWKqScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgSXNMZWdhbDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g6YeN6KaB57qn5YirXG4gICAgICAgICAgICBJbXBvcnRMZXZlbDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6YeN6KaB57qn5YirJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkaXNwbGF5VGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ltcG9ydExldmVsJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEltcG9ydExldmVsSW5kZXg6IC0xLFxuXG4gICAgICAgICAgICAvL+ahiOaDheS7i+e7jVxuICAgICAgICAgICAgRGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ahiOaDheS7i+e7jScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRGVzY3JpcHRpb25WYWx1ZTogJycsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Ym1pdERhdGEuTmFtZSAmJiB0aGlzLnN1Ym1pdERhdGEuRGVzY3JpcHRpb24gJiYgdGhpcy5zdWJtaXREYXRhLkNhdGVnb3J5ICYmIHRoaXMuc3VibWl0RGF0YS5BY2NlcHREYXRlVGV4dCYmdGhpcy5zdWJtaXREYXRhLk9yZ2FuaXphdGlvblVuaXRJZCYmdGhpcy5zdWJtaXREYXRhLkxhbmd1YWdlJiZ0aGlzLnN1Ym1pdERhdGEuU2VjcmV0TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVDYXNlR2VuZXJhbEluZm8oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkFjY2VwdERhdGVXYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5TdGFnZS53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5DYXRlZ29yeS53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/liKDpmaTlt7LpgInmnYPpmZBcbiAgICAgICAgICAgIGRlbGV0ZVBJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5BZ2VuY3lBdXRob3JpdHlEYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIFB2YWx1ZSA9IHRoaXMuc3VibWl0RGF0YS5BZ2VuY3lBdXRob3JpdHkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBQdmFsdWUuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICAgIFB2YWx1ZSA9IFB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5BZ2VuY3lBdXRob3JpdHkgPSBQdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+adg+mZkFxuICAgICAgICAgICAgYmluZFBpY2tlckNoYW5nZUFnZW5jeUF1dGhvcml0eURhdGEoZSkge1xuICAgICAgICAgICAgICAgIGlmKCtlLmRldGFpbC52YWx1ZT4wKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZ2VuY3lBdXRob3JpdHlEYXRhLnB1c2goK2UuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbXlEaXN0aW5jdCh0aGlzLkFnZW5jeUF1dGhvcml0eURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgUGluZGV4ID0gdGhpcy5BZ2VuY3lBdXRob3JpdHlEYXRhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgUHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIFBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUHZhbHVlW2luZGV4XSA9IHRoaXMuQWdlbmN5QXV0aG9yaXR5LnZhbHVlW1BpbmRleFtpbmRleF1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5BZ2VuY3lBdXRob3JpdHkgPSBQdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/lvIDlp4vml7bpl7RcbiAgICAgICAgICAgIGJpbmRTdGFydERhdGVEYXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU3RhcnREYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+e7k+adn+aXtumXtFxuICAgICAgICAgICAgYmluZEVuZERhdGVEYXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRW5kRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gaXNJbXBvcnRMZXZlbCgpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkltcG9ydExldmVsLmNoZWNrZWQgPSAhdGhpcy5JbXBvcnRMZXZlbC5jaGVja2VkO1xuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLkltcG9ydExldmVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkltcG9ydExldmVsID0gdGhpcy5JbXBvcnRMZXZlbC5JbXBvcnRMZXZlbFswXS52YWx1ZTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSW1wb3J0TGV2ZWwgPSB0aGlzLkltcG9ydExldmVsLkltcG9ydExldmVsWzFdLnZhbHVlO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgTGVnYWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Jc0xlZ2FsLmNoZWNrZWQgPSAhdGhpcy5Jc0xlZ2FsLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSXNMZWdhbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Jc0xlZ2FsID0gdGhpcy5Jc0xlZ2FsLklzTGVnYWxbMF0udmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzTGVnYWwgPSB0aGlzLklzTGVnYWwuSXNMZWdhbFsxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIElzRm9yZWlnbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLklzRm9yZWlnbi5jaGVja2VkID0gIXRoaXMuSXNGb3JlaWduLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSXNGb3JlaWduLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLklzRm9yZWlnbiA9IHRoaXMuSXNGb3JlaWduLklzRm9yZWlnblswXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNGb3JlaWduID0gdGhpcy5Jc0ZvcmVpZ24uSXNGb3JlaWduWzFdLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEFjY2VwdERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmRldGFpbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkFjY2VwdERhdGVXYXJuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5BY2NlcHREYXRlVGV4dCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQWNjZXB0RGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWNjZXB0RGF0ZVdhcm5pbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZGNvbHVtblN1YkNhdGVnb3J5Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FzZUluZm9EYXRhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmRldGFpbC5jb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQUNUJywgdGhpcy5TdWJDYXRlZ29yeS52YWx1ZVswXVtlLmRldGFpbC52YWx1ZV0sIDYsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5LnZhbHVlWzFdID0gWycnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5LmRpc3BsYXlUZXh0WzFdID0gWyfor7fpgInmi6knXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnlJbmRleFswXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5SW5kZXhbMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnlJbmRleFsxXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kY29sdW1uUmVhc29uQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FzZUluZm9EYXRhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmRldGFpbC5jb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQUFZJywgdGhpcy5SZWFzb24udmFsdWVbMF1bZS5kZXRhaWwudmFsdWVdLCA2LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb24udmFsdWVbMV0gPSBbJyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0WzFdID0gWyfor7fpgInmi6knXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi52YWx1ZVsyXSA9IFsnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb24uZGlzcGxheVRleHRbMl0gPSBbJ+ivt+mAieaLqSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb25JbmRleFswXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbkluZGV4WzFdID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb25JbmRleFsyXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBQVknLCB0aGlzLlJlYXNvbi52YWx1ZVsxXVtlLmRldGFpbC52YWx1ZV0sIDcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi52YWx1ZVsyXSA9IFsnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb24uZGlzcGxheVRleHRbMl0gPSBbJ+ivt+mAieaLqSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb25JbmRleFsxXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbkluZGV4WzJdID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uSW5kZXhbMl0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRlQ2hhbmdlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0FDVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5TdWJDYXRlZ29yeUluZGV4WzFdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5LmNvbnRlbnQgPSB0aGlzLlN1YkNhdGVnb3J5LmRpc3BsYXlUZXh0WzBdW3RoaXMuU3ViQ2F0ZWdvcnlJbmRleFswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlN1YkNhdGVnb3J5ID0gdGhpcy5TdWJDYXRlZ29yeS52YWx1ZVswXVt0aGlzLlN1YkNhdGVnb3J5SW5kZXhbMF1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnkuY29udGVudCA9IHRoaXMuU3ViQ2F0ZWdvcnkuZGlzcGxheVRleHRbMF1bdGhpcy5TdWJDYXRlZ29yeUluZGV4WzBdXSArICcvJyArIHRoaXMuU3ViQ2F0ZWdvcnkuZGlzcGxheVRleHRbMV1bdGhpcy5TdWJDYXRlZ29yeUluZGV4WzFdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TdWJDYXRlZ29yeSA9IHRoaXMuU3ViQ2F0ZWdvcnkudmFsdWVbMF1bdGhpcy5TdWJDYXRlZ29yeUluZGV4WzBdXSArICcsJyArIHRoaXMuU3ViQ2F0ZWdvcnkudmFsdWVbMV1bdGhpcy5TdWJDYXRlZ29yeUluZGV4WzFdXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NBQVknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUmVhc29uSW5kZXhbMV0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLmNvbnRlbnQgPSB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFswXVt0aGlzLlJlYXNvbkluZGV4WzBdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVhc29uID0gdGhpcy5SZWFzb24udmFsdWVbMF1bdGhpcy5SZWFzb25JbmRleFswXV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5SZWFzb25JbmRleFsyXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb24uY29udGVudCA9IHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0WzBdW3RoaXMuUmVhc29uSW5kZXhbMF1dICsgJy8nICsgdGhpcy5SZWFzb24uZGlzcGxheVRleHRbMV1bdGhpcy5SZWFzb25JbmRleFsxXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVhc29uID0gdGhpcy5SZWFzb24udmFsdWVbMF1bdGhpcy5SZWFzb25JbmRleFswXV0gKyAnLCcgKyB0aGlzLlJlYXNvbi52YWx1ZVsxXVt0aGlzLlJlYXNvbkluZGV4WzFdXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi5jb250ZW50ID0gdGhpcy5SZWFzb24uZGlzcGxheVRleHRbMF1bdGhpcy5SZWFzb25JbmRleFswXV0gKyAnLycgKyB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFsxXVt0aGlzLlJlYXNvbkluZGV4WzFdXSArICcvJyArIHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0WzJdW3RoaXMuUmVhc29uSW5kZXhbMl1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlJlYXNvbiA9IHRoaXMuUmVhc29uLnZhbHVlWzBdW3RoaXMuUmVhc29uSW5kZXhbMF1dICsgJywnICsgdGhpcy5SZWFzb24udmFsdWVbMV1bdGhpcy5SZWFzb25JbmRleFsxXV0gKyAnLCcgKyB0aGlzLlJlYXNvbi52YWx1ZVsyXVt0aGlzLlJlYXNvbkluZGV4WzJdXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIFN1YkNhdGVnb3J5SW5kZXgoaW5kZXgsIG9sZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDYXNlSW5mb0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuU3ViQ2F0ZWdvcnlJbmRleFsxXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5LmNvbnRlbnQgPSB0aGlzLlN1YkNhdGVnb3J5LmRpc3BsYXlUZXh0WzBdW3RoaXMuU3ViQ2F0ZWdvcnlJbmRleFswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU3ViQ2F0ZWdvcnkgPSB0aGlzLlN1YkNhdGVnb3J5LnZhbHVlWzBdW3RoaXMuU3ViQ2F0ZWdvcnlJbmRleFswXV1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnkuY29udGVudCA9IHRoaXMuU3ViQ2F0ZWdvcnkuZGlzcGxheVRleHRbMF1bdGhpcy5TdWJDYXRlZ29yeUluZGV4WzBdXSArICcvJyArIHRoaXMuU3ViQ2F0ZWdvcnkuZGlzcGxheVRleHRbMV1bdGhpcy5TdWJDYXRlZ29yeUluZGV4WzFdXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlN1YkNhdGVnb3J5ID0gdGhpcy5TdWJDYXRlZ29yeS52YWx1ZVswXVt0aGlzLlN1YkNhdGVnb3J5SW5kZXhbMF1dICsgJywnICsgdGhpcy5TdWJDYXRlZ29yeS52YWx1ZVsxXVt0aGlzLlN1YkNhdGVnb3J5SW5kZXhbMV1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhc29uSW5kZXgoUmVhc29uSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nhc2VJbmZvRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5SZWFzb25JbmRleFsxXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi5jb250ZW50ID0gdGhpcy5SZWFzb24uZGlzcGxheVRleHRbMF1bdGhpcy5SZWFzb25JbmRleFswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVhc29uID0gdGhpcy5SZWFzb24udmFsdWVbMF1bdGhpcy5SZWFzb25JbmRleFswXV1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLlJlYXNvbkluZGV4WzJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLmNvbnRlbnQgPSB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFswXVt0aGlzLlJlYXNvbkluZGV4WzBdXSArICcvJyArIHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0WzFdW3RoaXMuUmVhc29uSW5kZXhbMV1dXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVhc29uID0gdGhpcy5SZWFzb24udmFsdWVbMF1bdGhpcy5SZWFzb25JbmRleFswXV0gKyAnLCcgKyB0aGlzLlJlYXNvbi52YWx1ZVsxXVt0aGlzLlJlYXNvbkluZGV4WzFdXVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb24uY29udGVudCA9IHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0WzBdW3RoaXMuUmVhc29uSW5kZXhbMF1dICsgJy8nICsgdGhpcy5SZWFzb24uZGlzcGxheVRleHRbMV1bdGhpcy5SZWFzb25JbmRleFsxXV0gKyAnLycgKyB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFsyXVt0aGlzLlJlYXNvbkluZGV4WzJdXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlJlYXNvbiA9IHRoaXMuUmVhc29uLnZhbHVlWzBdW3RoaXMuUmVhc29uSW5kZXhbMF1dICsgJywnICsgdGhpcy5SZWFzb24udmFsdWVbMV1bdGhpcy5SZWFzb25JbmRleFsxXV0gKyAnLCcgKyB0aGlzLlJlYXNvbi52YWx1ZVsyXVt0aGlzLlJlYXNvbkluZGV4WzJdXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENhdGVnb3J5SW5kZXgoaW5kZXgsIG9sZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgsIG9sZEluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2F0ZWdvcnkgPSB0aGlzLkNhdGVnb3J5LnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2F0ZWdvcnlUZXh0ID0gdGhpcy5DYXRlZ29yeS5kaXNwbGF5VGV4dFtpbmRleF1cbiAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBQkEnLCB0aGlzLkNhdGVnb3J5LnZhbHVlW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYXNlSW5mb0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLkNhdGVnb3J5LnZhbHVlW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdGUyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5LmNvbnRlbnQgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBQ1QnLCAnRlMnLCA1LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnlJbmRleCA9IFswLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnkudmFsdWVbMV0gPSBbJyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdWJDYXRlZ29yeS5kaXNwbGF5VGV4dFsxXSA9IFsn6K+36YCJ5oupJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnWFMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb24uY29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbkluZGV4ID0gWzAsIDAsIDBdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBU1RBR0UnLCAnWFMnLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FEUScsICdYUycsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQUFZJywgJ1hTJywgNSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi52YWx1ZVsxXSA9IFsnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFsxXSA9IFsn6K+36YCJ5oupJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi52YWx1ZVsyXSA9IFsnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFsyXSA9IFsn6K+36YCJ5oupJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTVMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQVNUQUdFJywgJ01TJywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBRFEnLCAnTVMnLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FXUycsICdNUycpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi5jb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uSW5kZXggPSBbMCwgMCwgMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi52YWx1ZVsxXSA9IFsnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFsxXSA9IFsn6K+36YCJ5oupJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi52YWx1ZVsyXSA9IFsnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi5kaXNwbGF5VGV4dFsyXSA9IFsn6K+36YCJ5oupJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBQVknLCAnTVMnLCA1LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdYWic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBU1RBR0UnLCAnWFonLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FEUScsICdYWicsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQVdTJywgJ1haJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLmNvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb25JbmRleCA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLnZhbHVlWzFdID0gWycnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0WzFdID0gWyfor7fpgInmi6knXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLnZhbHVlWzJdID0gWycnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0WzJdID0gWyfor7fpgInmi6knXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FBWScsICdYWicsIDUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1pTJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnkuY29udGVudCA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FDVCcsICdaUycsIDUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdWJDYXRlZ29yeUluZGV4ID0gWzAsIDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdWJDYXRlZ29yeS52YWx1ZVsxXSA9IFsnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5LmRpc3BsYXlUZXh0WzFdID0gWyfor7fpgInmi6knXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdaQyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBRFEnLCAnWkMnLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FXUycsICdaQycpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2xkSW5kZXggIT09IDAgJiYgIXRoaXMuaXNDYXNlSW5mb0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Nhc2VJbmZvRGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkFnZW5jeUF1dGhvcml0eURhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkFnZW5jeUF1dGhvcml0eSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU3RhcnREYXRlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5FbmREYXRlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TdWJDYXRlZ29yeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU3RhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlJlYXNvbiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTWF0dGVyc0VudHJ1c3RlZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUmVhc29uU3VwcGxlbWVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQWdlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb25TdXBwbGVtZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBOYW1lVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhc29uU3VwcGxlbWVudFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlJlYXNvblN1cHBsZW1lbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE1hdHRlcnNFbnRydXN0ZWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5NYXR0ZXJzRW50cnVzdGVkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBEZXNjcmlwdGlvblZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQYXJ0aXRpb25JbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5QYXJ0aXRpb24gPSB0aGlzLlBhcnRpdGlvbi52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTdGFnZUluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlN0YWdlID0gdGhpcy5TdGFnZS52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcmdhbml6YXRpb25Vbml0SWRJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Pcmdhbml6YXRpb25Vbml0SWQgPSB0aGlzLk9yZ2FuaXphdGlvblVuaXRJZC52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMYW5ndWFnZUluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkxhbmd1YWdlID0gdGhpcy5MYW5ndWFnZS52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTZWNyZXRMZXZlbEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlNlY3JldExldmVsID0gdGhpcy5TZWNyZXRMZXZlbC52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBBZ2VudEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkFnZW50ID0gdGhpcy5BZ2VudC52YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBJbXBvcnRMZXZlbEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkltcG9ydExldmVsID0gdGhpcy5JbXBvcnRMZXZlbC5kYXRhW2luZGV4XS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgZmlsdGVyQWdlbnQoZGF0YSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgYXJ5X2lkID0gWycnXTtcbiAgICAgICAgICAgIHZhciBhcnlfbmFtZSA9IFsn6K+36YCJ5oupJ107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoa2V5KTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVnLnRlc3QoZGF0YVtpbmRleF0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJ5X2lkLnB1c2goZGF0YVtpbmRleF0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBhcnlfbmFtZS5wdXNoKGRhdGFbaW5kZXhdLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuQWdlbnQudmFsdWUgPSBhcnlfaWQ7XG4gICAgICAgICAgICB0aGlzLkFnZW50LmRpc3BsYXlUZXh0ID0gYXJ5X25hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Nhc2VJbmZvRGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIEFnZW50X2luZGV4IGluIHRoaXMuQWdlbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQWdlbnQudmFsdWVbQWdlbnRfaW5kZXhdID09IHRoaXMuY2FzZUluZm9EYXRhLkFnZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFnZW50SW5kZXggPSBBZ2VudF9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5BZ2VudEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+ahiOS7tuWfuuacrOS/oeaBr+aPkOS6pFxuICAgICAgICBhc3luYyBDcmVhdGVPclVwZGF0ZUNhc2VHZW5lcmFsSW5mbygpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvQ3JlYXRlT3JVcGRhdGVDYXNlR2VuZXJhbEluZm8nLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSWQgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdDUkVBVEVfQ0FTRUlORk9fREFUQScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3VibWl0RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOWujOaIkCcsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+ahiOS7tuW+hee8lui+keWfuuehgOaVsOaNrlxuICAgICAgICBhc3luYyBHZXRDYXNlR2VuZXJhbEluZm8oKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlR2VuZXJhbEluZm8nLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xuICAgICAgICAgICAgICAgICAgICBJZDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBjYXNlR2VuZXJhbEluZm9EYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvL+ahiOS7tuexu+WIq1xuICAgICAgICAgICAgICAgIHZhciBDYXRlZ29yeSA9IHRoaXMuY2FjaGVEYXRhKGNhc2VHZW5lcmFsSW5mb0RhdGEuY2FzZUNhdGVnb3J5Q29tYm9ib3gpO1xuICAgICAgICAgICAgICAgIHRoaXMuQ2F0ZWdvcnkudmFsdWUgPSB0aGlzLkNhdGVnb3J5LnZhbHVlLmNvbmNhdChDYXRlZ29yeS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5DYXRlZ29yeS5kaXNwbGF5VGV4dCA9IHRoaXMuQ2F0ZWdvcnkuZGlzcGxheVRleHQuY29uY2F0KENhdGVnb3J5LmRpc3BsYXlUZXh0KTtcbiAgICAgICAgICAgICAgICAvL+ahiOS7tuS4muWKoeWIkuWIhlxuICAgICAgICAgICAgICAgIHZhciBQYXJ0aXRpb24gPSB0aGlzLmNhY2hlRGF0YShjYXNlR2VuZXJhbEluZm9EYXRhLnBhcnRpdGlvbkNvbWJvYm94KTtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcnRpdGlvbi52YWx1ZSA9IHRoaXMuUGFydGl0aW9uLnZhbHVlLmNvbmNhdChQYXJ0aXRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuUGFydGl0aW9uLmRpc3BsYXlUZXh0ID0gdGhpcy5QYXJ0aXRpb24uZGlzcGxheVRleHQuY29uY2F0KFBhcnRpdGlvbi5kaXNwbGF5VGV4dCk7XG4gICAgICAgICAgICAgICAgLy/kuabpnaLor63oqIBcbiAgICAgICAgICAgICAgICB2YXIgTGFuZ3VhZ2UgPSB0aGlzLmNhY2hlRGF0YShjYXNlR2VuZXJhbEluZm9EYXRhLmNhc2VXcml0dGVuTGFuZ3VhZ2VDb21ib2JveCk7XG4gICAgICAgICAgICAgICAgdGhpcy5MYW5ndWFnZS52YWx1ZSA9IHRoaXMuTGFuZ3VhZ2UudmFsdWUuY29uY2F0KExhbmd1YWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLkxhbmd1YWdlLmRpc3BsYXlUZXh0ID0gdGhpcy5MYW5ndWFnZS5kaXNwbGF5VGV4dC5jb25jYXQoTGFuZ3VhZ2UuZGlzcGxheVRleHQpO1xuICAgICAgICAgICAgICAgIC8v5L+d5a+G57qn5YirXG4gICAgICAgICAgICAgICAgdmFyIFNlY3JldExldmVsID0gdGhpcy5jYWNoZURhdGEoY2FzZUdlbmVyYWxJbmZvRGF0YS5zZWNyZXRMZXZlbENvbWJvYm94KTtcbiAgICAgICAgICAgICAgICB0aGlzLlNlY3JldExldmVsLnZhbHVlID0gdGhpcy5TZWNyZXRMZXZlbC52YWx1ZS5jb25jYXQoU2VjcmV0TGV2ZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuU2VjcmV0TGV2ZWwuZGlzcGxheVRleHQgPSB0aGlzLlNlY3JldExldmVsLmRpc3BsYXlUZXh0LmNvbmNhdChTZWNyZXRMZXZlbC5kaXNwbGF5VGV4dCk7XG4gICAgICAgICAgICAgICAgLy/mmK/lkKbmtonlpJZcbiAgICAgICAgICAgICAgICB0aGlzLklzRm9yZWlnbi5Jc0ZvcmVpZ24gPSBjYXNlR2VuZXJhbEluZm9EYXRhLndoZXRoZXJDb21ib2JveDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNGb3JlaWduID0gJ04nO1xuICAgICAgICAgICAgICAgIC8v5piv5ZCm5rOV5b6L5o+05YqpXG4gICAgICAgICAgICAgICAgdGhpcy5Jc0xlZ2FsLklzTGVnYWwgPSBjYXNlR2VuZXJhbEluZm9EYXRhLndoZXRoZXJDb21ib2JveDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNMZWdhbCA9ICdOJztcbiAgICAgICAgICAgICAgICAvL+aYr+WQpumHjeimgVxuICAgICAgICAgICAgICAgIHRoaXMuSW1wb3J0TGV2ZWwuZGF0YSA9IGNhc2VHZW5lcmFsSW5mb0RhdGEuaW1wb3J0TGV2ZWxDb21ib2JveDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v5aGr5YWF5pWw5o2uXG4gICAgICAgIGZpbGxEYXRhKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDYXNlSW5mb0RhdGEpIHtcbiAgICAgICAgICAgICAgICAvL+W8gOWni+aXtumXtFxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5TdGFydERhdGU9dGhpcy5jYXNlSW5mb0RhdGEuU3RhcnREYXRlP3RoaXMuY2FzZUluZm9EYXRhLlN0YXJ0RGF0ZS5zcGxpdCgnVCcpWzBdOicnO1xuICAgICAgICAgICAgICAgIC8v57uT5p2f5pe26Ze0XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkVuZERhdGU9dGhpcy5jYXNlSW5mb0RhdGEuRW5kRGF0ZT90aGlzLmNhc2VJbmZvRGF0YS5FbmREYXRlLnNwbGl0KCdUJylbMF06Jyc7XG4gICAgICAgICAgICAgICAgdGhpcy5OYW1lVmFsdWUgPSB0aGlzLmNhc2VJbmZvRGF0YS5OYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuRGVzY3JpcHRpb25WYWx1ZSA9IHRoaXMuY2FzZUluZm9EYXRhLkRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIENhdGVnb3J5X2luZGV4IGluIHRoaXMuQ2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ2F0ZWdvcnkudmFsdWVbQ2F0ZWdvcnlfaW5kZXhdID09IHRoaXMuY2FzZUluZm9EYXRhLkNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhdGVnb3J5SW5kZXggPSBDYXRlZ29yeV9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBQkEnLCB0aGlzLmNhc2VJbmZvRGF0YS5DYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgT3JnYW5pemF0aW9uVW5pdElkX2luZGV4IGluIHRoaXMuT3JnYW5pemF0aW9uVW5pdElkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLk9yZ2FuaXphdGlvblVuaXRJZC52YWx1ZVtPcmdhbml6YXRpb25Vbml0SWRfaW5kZXhdID09IHRoaXMuY2FzZUluZm9EYXRhLk9yZ2FuaXphdGlvblVuaXRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Pcmdhbml6YXRpb25Vbml0SWRJbmRleCA9IE9yZ2FuaXphdGlvblVuaXRJZF9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBMYW5ndWFnZV9pbmRleCBpbiB0aGlzLkxhbmd1YWdlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkxhbmd1YWdlLnZhbHVlW0xhbmd1YWdlX2luZGV4XSA9PSB0aGlzLmNhc2VJbmZvRGF0YS5MYW5ndWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5MYW5ndWFnZUluZGV4ID0gTGFuZ3VhZ2VfaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgU2VjcmV0TGV2ZWxfaW5kZXggaW4gdGhpcy5TZWNyZXRMZXZlbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5TZWNyZXRMZXZlbC52YWx1ZVtTZWNyZXRMZXZlbF9pbmRleF0gPT0gdGhpcy5jYXNlSW5mb0RhdGEuU2VjcmV0TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2VjcmV0TGV2ZWxJbmRleCA9IFNlY3JldExldmVsX2luZGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhc2VJbmZvRGF0YS5Jc0ZvcmVpZ24gPT0gJ1knKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSXNGb3JlaWduLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNGb3JlaWduID0gJ1knO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXNlSW5mb0RhdGEuSXNMZWdhbCA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc0xlZ2FsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSXNMZWdhbCA9ICdZJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FzZUluZm9EYXRhLkltcG9ydExldmVsID09ICcwMicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbXBvcnRMZXZlbEluZGV4PTA7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSW1wb3J0TGV2ZWxJbmRleD0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY2FzZUluZm9EYXRhLkNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZTJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FDVCcsICdGUycsIDUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1hTJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FBWScsICdYUycsIDUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQVNUQUdFJywgJ1haJywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvblN1cHBsZW1lbnRWYWx1ZSA9IHRoaXMuY2FzZUluZm9EYXRhLlJlYXNvblN1cHBsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdNUyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBQVknLCAnTVMnLCA1LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FTVEFHRScsICdYWicsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5maWx0ZXJBZ2VudCgnTVonKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb25TdXBwbGVtZW50VmFsdWUgPSB0aGlzLmNhc2VJbmZvRGF0YS5SZWFzb25TdXBwbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnWFonOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQUFZJywgJ1haJywgNSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBU1RBR0UnLCAnWFonLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZmlsdGVyQWdlbnQoJ1haJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uU3VwcGxlbWVudFZhbHVlID0gdGhpcy5jYXNlSW5mb0RhdGEuUmVhc29uU3VwcGxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1pTJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FDVCcsICdaUycsIDUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1pDJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZmlsdGVyQWdlbnQoJ1pDJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWF0dGVyc0VudHJ1c3RlZFZhbHVlID0gdGhpcy5jYXNlSW5mb0RhdGEuTWF0dGVyc0VudHJ1c3RlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+iOt+WPlumatuWxnue7hOe7h+aetuaehFxuICAgICAgICBhc3luYyBHZXRPcmdhbml6YXRpb25zKCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRPcmdhbml6YXRpb25zJyxcbiAgICAgICAgICAgICAgICAncG9zdCdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIEdldE9yZ2FuaXphdGlvbnNEYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB2YXIgT3JnYW5pemF0aW9uVW5pdElkX3ZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgdmFyIE9yZ2FuaXphdGlvblVuaXRJZF9kaXNwbGF5VGV4dCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIEdldE9yZ2FuaXphdGlvbnNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZF92YWx1ZVtpbmRleF0gPSBHZXRPcmdhbml6YXRpb25zRGF0YVtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvblVuaXRJZF9kaXNwbGF5VGV4dFtpbmRleF0gPSBHZXRPcmdhbml6YXRpb25zRGF0YVtpbmRleF0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuT3JnYW5pemF0aW9uVW5pdElkLnZhbHVlID0gdGhpcy5Pcmdhbml6YXRpb25Vbml0SWQudmFsdWUuY29uY2F0KE9yZ2FuaXphdGlvblVuaXRJZF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5Pcmdhbml6YXRpb25Vbml0SWQuZGlzcGxheVRleHQgPSB0aGlzLk9yZ2FuaXphdGlvblVuaXRJZC5kaXNwbGF5VGV4dC5jb25jYXQoT3JnYW5pemF0aW9uVW5pdElkX2Rpc3BsYXlUZXh0KVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2FzZUluZm9EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuT3JnYW5pemF0aW9uVW5pdElkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Pcmdhbml6YXRpb25Vbml0SWQudmFsdWVbaW5kZXhdID09IHRoaXMuY2FzZUluZm9EYXRhLk9yZ2FuaXphdGlvblVuaXRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuT3JnYW5pemF0aW9uVW5pdElkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5bmoYjku7bkuJrliqHlrZDnsbtcbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChrZXlXb3JkcywgUGFyZW50SWQsIERlcHRoID0gMCwgSXNSZWN1cnNpdmUpIHtcbiAgICAgICAgICAgIGlmIChrZXlXb3JkcyA9PSAnQ0FXUycpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gUGFyZW50SWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBQaWQgPSBQYXJlbnRJZCB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIElzUmVjdXJzaXZlID0gSXNSZWN1cnNpdmUgfHwgZmFsc2U7XG4gICAgICAgICAgICBQYXJlbnRJZCA9IFBhcmVudElkIHx8ICcnO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgQ2xhc3M6IGtleVdvcmRzLFxuICAgICAgICAgICAgICAgIERlcHRoLFxuICAgICAgICAgICAgICAgIElzTWF4RGVwdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgUGFyZW50SWQ6IFBpZCxcbiAgICAgICAgICAgICAgICBJc1JlY3Vyc2l2ZTogSXNSZWN1cnNpdmUsXG4gICAgICAgICAgICAgICAgLy8gaXNBbGw6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gWycnXTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzcGxheVRleHQgPSBbJ+ivt+mAieaLqSddO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCByZXNEYXRhLmRhdGEucmVzdWx0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleCBdID0gcmVzRGF0YS5kYXRhLnJlc3VsdFtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0W2luZGV4XSA9IHJlc0RhdGEuZGF0YS5yZXN1bHRbaW5kZXhdLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5V29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNBQ1RcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnkudmFsdWVbRGVwdGggLSA1XSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YkNhdGVnb3J5LmRpc3BsYXlUZXh0W0RlcHRoIC0gNV0gPSBkaXNwbGF5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDYXNlSW5mb0RhdGEgJiYgdGhpcy5jYXNlSW5mb0RhdGEuU3ViQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgU3ViQ2F0ZWdvcnkgPSB0aGlzLmNhc2VJbmZvRGF0YS5TdWJDYXRlZ29yeS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEZXB0aCA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCdDQUNUJywgU3ViQ2F0ZWdvcnlbRGVwdGggLSA1XSwgRGVwdGggKyAxLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5TdWJDYXRlZ29yeS52YWx1ZVtEZXB0aCAtIDVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlN1YkNhdGVnb3J5LnZhbHVlW0RlcHRoIC0gNV1baW5kZXhdID09IFN1YkNhdGVnb3J5W0RlcHRoIC0gNV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3ViQ2F0ZWdvcnlJbmRleFtEZXB0aCAtIDVdID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ0FCQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aXRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGl0aW9uLmRpc3BsYXlUZXh0ID0gZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nhc2VJbmZvRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuUGFydGl0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBhcnRpdGlvbi52YWx1ZVtpbmRleF0gPT0gdGhpcy5jYXNlSW5mb0RhdGEuUGFydGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBhcnRpdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGl0aW9uSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDQVNUQUdFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YWdlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YWdlLmRpc3BsYXlUZXh0ID0gZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nhc2VJbmZvRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFN0YWdlX2luZGV4IGluIHRoaXMuU3RhZ2UudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuU3RhZ2UudmFsdWVbU3RhZ2VfaW5kZXhdID09IHRoaXMuY2FzZUluZm9EYXRhLlN0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YWdlSW5kZXggPSBTdGFnZV9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ0FEUVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZ2VuY3lBdXRob3JpdHkudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWdlbmN5QXV0aG9yaXR5LmRpc3BsYXlUZXh0ID0gZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Nhc2VJbmZvRGF0YSAmJiB0aGlzLmNhc2VJbmZvRGF0YS5BZ2VuY3lBdXRob3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgQWdlbmN5QXV0aG9yaXR5ID0gdGhpcy5jYXNlSW5mb0RhdGEuQWdlbmN5QXV0aG9yaXR5LnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEFnZW5jeUF1dGhvcml0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQWdlbmN5QXV0aG9yaXR5LnZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5BZ2VuY3lBdXRob3JpdHkudmFsdWVbal0gPT0gQWdlbmN5QXV0aG9yaXR5W2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZ2VuY3lBdXRob3JpdHlEYXRhW2ldID0galxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFnZW5jeUF1dGhvcml0eURhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ0FXU1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEFnZW50RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckFnZW50KEFnZW50RGF0YSwga2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDQUFZXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlYXNvbi52YWx1ZVtEZXB0aCAtIDVdID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVhc29uLmRpc3BsYXlUZXh0W0RlcHRoIC0gNV0gPSBkaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2FzZUluZm9EYXRhICYmIHRoaXMuY2FzZUluZm9EYXRhLlJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBSZWFzb24gPSB0aGlzLmNhc2VJbmZvRGF0YS5SZWFzb24uc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRGVwdGggPCA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0FBWScsIFJlYXNvbltEZXB0aCAtIDVdLCBEZXB0aCArIDEsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLlJlYXNvbi52YWx1ZVtEZXB0aCAtIDVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlJlYXNvbi52YWx1ZVtEZXB0aCAtIDVdW2luZGV4XSA9PSBSZWFzb25bRGVwdGggLSA1XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWFzb25JbmRleFtEZXB0aCAtIDVdID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FjaGVEYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgdmFyIGRpc3BsYXlUZXh0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gZGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHRbaW5kZXhdID0gZGF0YVtpbmRleF0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmlsdGVyRGF0YSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckRhdGFcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykgeyBcbiAgICAgICAgICAgIHRoaXMuY2FzZUluZm9EYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DQVNFSU5GT19EQVRBJyk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jYXNlSW5mb0RhdGEpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ0FTRUlORk9fREFUQScpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDYXNlSW5mb0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2xpZW50TmFtZSA9b3B0aW9ucy5DbGllbnROYW1lO1xuICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2xpZW50SWQgPSBvcHRpb25zLkNsaWVudElkO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5DYXNlQ2xpZW50UmVsYXRpb25MaXN0PVtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5DYXNlQ29udGFjdHNMaXN0PVtdO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDYXNlSW5mb0RhdGEgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUdlbmVyYWxJbmZvKCk7XG4gICAgICAgICAgICB0aGlzLkdldE9yZ2FuaXphdGlvbnMoKTtcbiAgICAgICAgfTtcbiAgICB9XG4iXX0=