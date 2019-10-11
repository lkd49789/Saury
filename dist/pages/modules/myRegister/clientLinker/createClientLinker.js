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

var createClientLinker = function (_wepy$page) {
    _inherits(createClientLinker, _wepy$page);

    function createClientLinker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, createClientLinker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createClientLinker.__proto__ || Object.getPrototypeOf(createClientLinker)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "ENName": { "v-bind:input.sync": "ENName", "v-bind:inputValue.sync": "ENNameValue", "v-bind:twoWayTitle.once": "ENNameValue" }, "Sex": { "v-bind:options.sync": "Sex", "v-bind:index.sync": "SexIndex", "v-bind:twoWayTitle.once": "SexIndex" }, "Duty": { "v-bind:options.sync": "Duty", "v-bind:index.sync": "DutyIndex", "v-bind:twoWayTitle.once": "DutyIndex" }, "WorkPhone": { "v-bind:input.sync": "WorkPhone", "v-bind:inputValue.sync": "WorkPhoneValue", "v-bind:twoWayTitle.once": "WorkPhoneValue" }, "Landline": { "v-bind:input.sync": "Landline", "v-bind:inputValue.sync": "LandlineValue", "v-bind:twoWayTitle.once": "LandlineValue" }, "WorkEmail": { "v-bind:input.sync": "WorkEmail", "v-bind:inputValue.sync": "WorkEmailValue", "v-bind:twoWayTitle.once": "WorkEmailValue" }, "Fax": { "v-bind:input.sync": "Fax", "v-bind:inputValue.sync": "FaxValue", "v-bind:twoWayTitle.once": "FaxValue" }, "Company": { "v-bind:input.sync": "Company", "v-bind:inputValue.sync": "CompanyValue", "v-bind:twoWayTitle.once": "CompanyValue" }, "Address": { "v-bind:input.sync": "Address", "v-bind:inputValue.sync": "AddressValue", "v-bind:twoWayTitle.once": "AddressValue" }, "PersonDescription": { "v-bind:input.sync": "PersonDescription", "v-bind:inputValue.sync": "PersonDescriptionValue", "v-bind:twoWayTitle.once": "PersonDescriptionValue" } }, _this.$events = {}, _this.components = {
            Name: _input2.default,
            ENName: _input2.default,
            Sex: _option2.default,
            Duty: _option2.default,
            WorkPhone: _input2.default,
            Landline: _input2.default,
            WorkEmail: _input2.default,
            Fax: _input2.default,
            Company: _input2.default,
            Address: _input2.default,
            PersonDescription: _input2.default
        }, _this.data = {
            addOpacity: 1,
            clientLinkerCacheData: {},
            isClientCacheData: false,
            isPreIndex: 0,
            submitData: {
                // /api/services/web/clientContacts/CreateOrUpdateClientContactsBasic
                // Address: "地址"
                // CaseId: ""
                // ClientId: "CL20180300045"
                // Company: "公司"
                // Duty: "GM"
                // ENCompany: " "
                // ENName: "英文名"
                // Fax: "传真"
                // Id: ""
                // Landline: "座机"
                // Name: "姓名"
                // PersonDescription: "个人描述"
                // Post: ""
                // Region: ""
                // Sex: "M"
                // WorkEmail: "邮箱地址"
                // WorkPhone: "工作电话"
            },
            // 姓名
            Name: {
                title: '姓名',
                name: 'Name',
                warning: true,
                type: 'text',
                options: false
            },
            NameValue: '',
            // 英文名
            ENName: {
                title: '英文名',
                name: 'ENName',
                warning: false,
                type: 'text',
                options: false
            },
            ENNameValue: '',
            //性别
            Sex: {
                title: '性别',
                name: 'Sex',
                value: [""],
                displayText: ["请选择"],
                warning: false
            },
            SexIndex: 0,
            //职位
            Duty: {
                title: '职位',
                name: 'Duty',
                value: [""],
                displayText: ["请选择"],
                warning: false
            },
            DutyIndex: 0,
            //工作电话
            WorkPhone: {
                title: '工作电话',
                name: 'WorkPhone',
                warning: true,
                type: 'text',
                options: false
            },
            WorkPhoneValue: '',
            //座机
            Landline: {
                title: '座机',
                name: 'Landline',
                warning: false,
                type: 'text',
                options: false
            },
            LandlineValue: '',
            //邮箱地址
            WorkEmail: {
                title: '邮箱地址',
                name: 'WorkEmail',
                warning: true,
                type: 'text',
                options: false
            },
            WorkEmailValue: '',
            // 传真
            Fax: {
                title: '传真',
                name: 'Fax',
                warning: false,
                type: 'text',
                options: false
            },
            FaxValue: '',
            // 公司
            Company: {
                title: '公司',
                name: 'Company',
                warning: true,
                type: 'text',
                options: true
            },
            CompanyValue: '',
            // 地址
            Address: {
                title: '地址',
                name: 'Address',
                warning: false,
                type: 'text',
                options: true
            },
            AddressValue: '',
            // 个人描述
            PersonDescription: {
                title: '个人描述',
                name: 'PersonDescription',
                warning: false,
                type: 'text',
                options: true
            },
            PersonDescriptionValue: ''
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.Name && this.submitData.WorkPhone && this.submitData.WorkEmail && this.submitData.Company) {
                    wx.showLoading({
                        title: 'Loading...', //提示的内容,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    this.CreateOrUpdateClientContactsBasic();
                } else {
                    this.addOpacity = 1;
                    wx.showToast({
                        title: '请填写必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false //显示透明蒙层，防止触摸穿透,
                    });
                }
            }
        }, _this.events = {}, _this.watch = {
            NameValue: function NameValue(value) {
                this.submitData.Name = value;
                this.$apply();
            },
            ENNameValue: function ENNameValue(value) {
                this.submitData.ENName = value;
                this.$apply();
            },
            SexIndex: function SexIndex(index) {
                this.submitData.Sex = this.Sex.value[index];
                this.$apply();
            },
            DutyIndex: function DutyIndex(index) {
                this.submitData.Duty = this.Duty.value[index];
                this.$apply();
            },
            WorkPhoneValue: function WorkPhoneValue(value) {
                this.submitData.WorkPhone = value;
                this.$apply();
            },
            LandlineValue: function LandlineValue(value) {
                this.submitData.Landline = value;
                this.$apply();
            },
            WorkEmailValue: function WorkEmailValue(value) {
                this.submitData.WorkEmail = value;
                this.$apply();
            },
            FaxValue: function FaxValue(value) {
                this.submitData.Fax = value;
                this.$apply();
            },
            CompanyValue: function CompanyValue(value) {
                this.submitData.Company = value;
                this.$apply();
            },
            AddressValue: function AddressValue(value) {
                this.submitData.Address = value;
                this.$apply();
            },
            PersonDescriptionValue: function PersonDescriptionValue(value) {
                this.submitData.PersonDescription = value;
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(createClientLinker, [{
        key: 'filterData',
        value: function filterData(data) {
            var backData = {
                value: [''],
                displayText: ['请选择']
            };
            for (var index = 0; index < data.length; index++) {
                backData.value[index + 1] = data[index].value;
                backData.displayText[index + 1] = data[index].displayText;
            }
            return backData;
        }
        //获取职位

    }, {
        key: 'GetClientContactsForEdit',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, GetClientContactsForEditData, SexData, Sex_index, DutyData, Duty_index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/clientContacts/GetClientContactsForEdit', 'post', {});

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    GetClientContactsForEditData = resData.data.result;
                                    //性别

                                    SexData = this.filterData(GetClientContactsForEditData.genderCombobox);

                                    this.Sex.value = SexData.value;
                                    this.Sex.displayText = SexData.displayText;
                                    if (this.isClientCacheData) {
                                        if (this.clientLinkerCacheData.sex) {
                                            for (Sex_index in this.Sex.value) {
                                                if (this.Sex.value[Sex_index] == this.clientLinkerCacheData.sex) {
                                                    this.SexIndex = Sex_index;
                                                }
                                            }
                                        }
                                    } else {
                                        this.SexIndex = 0;
                                    }
                                    //职位
                                    DutyData = this.filterData(GetClientContactsForEditData.dutyCombobox);

                                    this.Duty.value = DutyData.value;
                                    this.Duty.displayText = DutyData.displayText;
                                    if (this.isClientCacheData) {
                                        if (this.clientLinkerCacheData.duty) {
                                            for (Duty_index in this.Duty.value) {
                                                if (this.Duty.value[Duty_index] == this.clientLinkerCacheData.duty) {
                                                    this.DutyIndex = Duty_index;
                                                }
                                            }
                                        }
                                    } else {
                                        this.DutyIndex = 0;
                                    }
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClientContactsForEdit() {
                return _ref2.apply(this, arguments);
            }

            return GetClientContactsForEdit;
        }()
        //提交数据

    }, {
        key: 'CreateOrUpdateClientContactsBasic',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                var resData, clientlinkerdata, create_clientlinkerlist_data, http, linkerPhotoData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/clientContacts/CreateOrUpdateClientContactsBasic', 'post', this.submitData);

                            case 2:
                                resData = _context2.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context2.next = 13;
                                    break;
                                }

                                clientlinkerdata = resData.data.result;
                                create_clientlinkerlist_data = wx.getStorageSync('CREATE_CLIENTLINKERLIST_DATA');

                                if (this.isClientCacheData) {
                                    create_clientlinkerlist_data[this.isPreIndex] = clientlinkerdata;
                                } else {
                                    create_clientlinkerlist_data.push(clientlinkerdata);
                                }
                                http = '/api/services/web/clientContacts/GetClientContactAvatar?id=' + clientlinkerdata.id;
                                _context2.next = 10;
                                return _ajax2.default.getAavatar(http);

                            case 10:
                                linkerPhotoData = _context2.sent;

                                clientlinkerdata.avatar = linkerPhotoData;
                                wx.setStorage({
                                    key: 'CREATE_CLIENTLINKERLIST_DATA',
                                    data: create_clientlinkerlist_data,
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

                            case 13:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function CreateOrUpdateClientContactsBasic() {
                return _ref3.apply(this, arguments);
            }

            return CreateOrUpdateClientContactsBasic;
        }()
        //获取客户信息

    }, {
        key: 'GetClient',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var resData, clientData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _ajax2.default.getData('/api/services/web/client/GetClient', 'post', {
                                    id: this.submitData.ClientId
                                });

                            case 2:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    clientData = resData.data.result;

                                    this.CompanyValue = clientData.name;
                                    this.AddressValue = clientData.address;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetClient() {
                return _ref4.apply(this, arguments);
            }

            return GetClient;
        }()
        //缓存中获取客户信息

    }, {
        key: 'getCacheClientData',
        value: function getCacheClientData(data) {
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            this.submitData.ClientId = data.clientId;
            this.submitData.Id = data.id;
            this.NameValue = data.name;
            this.ENNameValue = data.enName;
            this.WorkPhoneValue = data.workPhone;
            this.LandlineValue = data.landline;
            this.WorkEmailValue = data.workEmail;
            this.FaxValue = data.fax;
            this.CompanyValue = data.company;
            this.AddressValue = data.address;
            this.PersonDescriptionValue = data.personDescription;
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            if (options.id) {
                this.submitData.ClientId = options.id;
                this.GetClient();
            }
            if (options.index) {
                var clientLinkerCacheData = wx.getStorageSync('CREATE_CLIENTLINKERLIST_DATA')[options.index];
                this.clientLinkerCacheData = clientLinkerCacheData;
                this.isClientCacheData = true;
                this.isPreIndex = +options.index;
                this.getCacheClientData(clientLinkerCacheData);
            }
            this.GetClientContactsForEdit();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return createClientLinker;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(createClientLinker , 'pages/modules/myRegister/clientLinker/createClientLinker'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUNsaWVudExpbmtlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnRMaW5rZXIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJOYW1lIiwiRU5OYW1lIiwiU2V4IiwiRHV0eSIsIldvcmtQaG9uZSIsIkxhbmRsaW5lIiwiV29ya0VtYWlsIiwiRmF4IiwiQ29tcGFueSIsIkFkZHJlc3MiLCJQZXJzb25EZXNjcmlwdGlvbiIsImRhdGEiLCJhZGRPcGFjaXR5IiwiY2xpZW50TGlua2VyQ2FjaGVEYXRhIiwiaXNDbGllbnRDYWNoZURhdGEiLCJpc1ByZUluZGV4Iiwic3VibWl0RGF0YSIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJ0eXBlIiwib3B0aW9ucyIsIk5hbWVWYWx1ZSIsIkVOTmFtZVZhbHVlIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsIlNleEluZGV4IiwiRHV0eUluZGV4IiwiV29ya1Bob25lVmFsdWUiLCJMYW5kbGluZVZhbHVlIiwiV29ya0VtYWlsVmFsdWUiLCJGYXhWYWx1ZSIsIkNvbXBhbnlWYWx1ZSIsIkFkZHJlc3NWYWx1ZSIsIlBlcnNvbkRlc2NyaXB0aW9uVmFsdWUiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsIiRhcHBseSIsInRvdWNoRW5kIiwid3giLCJzaG93TG9hZGluZyIsIm1hc2siLCJzdWNjZXNzIiwiQ3JlYXRlT3JVcGRhdGVDbGllbnRDb250YWN0c0Jhc2ljIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZXZlbnRzIiwid2F0Y2giLCJpbmRleCIsImNvbXB1dGVkIiwiYmFja0RhdGEiLCJsZW5ndGgiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiR2V0Q2xpZW50Q29udGFjdHNGb3JFZGl0RGF0YSIsInJlc3VsdCIsIlNleERhdGEiLCJmaWx0ZXJEYXRhIiwiZ2VuZGVyQ29tYm9ib3giLCJzZXgiLCJTZXhfaW5kZXgiLCJEdXR5RGF0YSIsImR1dHlDb21ib2JveCIsImR1dHkiLCJEdXR5X2luZGV4IiwiY2xpZW50bGlua2VyZGF0YSIsImNyZWF0ZV9jbGllbnRsaW5rZXJsaXN0X2RhdGEiLCJnZXRTdG9yYWdlU3luYyIsInB1c2giLCJodHRwIiwiaWQiLCJnZXRBYXZhdGFyIiwibGlua2VyUGhvdG9EYXRhIiwiYXZhdGFyIiwic2V0U3RvcmFnZSIsImtleSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiQ2xpZW50SWQiLCJjbGllbnREYXRhIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRJZCIsIklkIiwiZW5OYW1lIiwid29ya1Bob25lIiwibGFuZGxpbmUiLCJ3b3JrRW1haWwiLCJmYXgiLCJjb21wYW55IiwicGVyc29uRGVzY3JpcHRpb24iLCJHZXRDbGllbnQiLCJnZXRDYWNoZUNsaWVudERhdGEiLCJHZXRDbGllbnRDb250YWN0c0ZvckVkaXQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBU3FCQSxrQjs7Ozs7Ozs7Ozs7Ozs7a05BQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixNQUF2QyxFQUE4QywwQkFBeUIsV0FBdkUsRUFBbUYsMkJBQTBCLFdBQTdHLEVBQVIsRUFBa0ksVUFBUyxFQUFDLHFCQUFvQixRQUFyQixFQUE4QiwwQkFBeUIsYUFBdkQsRUFBcUUsMkJBQTBCLGFBQS9GLEVBQTNJLEVBQXlQLE9BQU0sRUFBQyx1QkFBc0IsS0FBdkIsRUFBNkIscUJBQW9CLFVBQWpELEVBQTRELDJCQUEwQixVQUF0RixFQUEvUCxFQUFpVyxRQUFPLEVBQUMsdUJBQXNCLE1BQXZCLEVBQThCLHFCQUFvQixXQUFsRCxFQUE4RCwyQkFBMEIsV0FBeEYsRUFBeFcsRUFBNmMsYUFBWSxFQUFDLHFCQUFvQixXQUFyQixFQUFpQywwQkFBeUIsZ0JBQTFELEVBQTJFLDJCQUEwQixnQkFBckcsRUFBemQsRUFBZ2xCLFlBQVcsRUFBQyxxQkFBb0IsVUFBckIsRUFBZ0MsMEJBQXlCLGVBQXpELEVBQXlFLDJCQUEwQixlQUFuRyxFQUEzbEIsRUFBK3NCLGFBQVksRUFBQyxxQkFBb0IsV0FBckIsRUFBaUMsMEJBQXlCLGdCQUExRCxFQUEyRSwyQkFBMEIsZ0JBQXJHLEVBQTN0QixFQUFrMUIsT0FBTSxFQUFDLHFCQUFvQixLQUFyQixFQUEyQiwwQkFBeUIsVUFBcEQsRUFBK0QsMkJBQTBCLFVBQXpGLEVBQXgxQixFQUE2N0IsV0FBVSxFQUFDLHFCQUFvQixTQUFyQixFQUErQiwwQkFBeUIsY0FBeEQsRUFBdUUsMkJBQTBCLGNBQWpHLEVBQXY4QixFQUF3akMsV0FBVSxFQUFDLHFCQUFvQixTQUFyQixFQUErQiwwQkFBeUIsY0FBeEQsRUFBdUUsMkJBQTBCLGNBQWpHLEVBQWxrQyxFQUFtckMscUJBQW9CLEVBQUMscUJBQW9CLG1CQUFyQixFQUF5QywwQkFBeUIsd0JBQWxFLEVBQTJGLDJCQUEwQix3QkFBckgsRUFBdnNDLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlDQURFO0FBRUZDLG1DQUZFO0FBR0ZDLGlDQUhFO0FBSUZDLGtDQUpFO0FBS0ZDLHNDQUxFO0FBTUZDLHFDQU5FO0FBT0ZDLHNDQVBFO0FBUUZDLGdDQVJFO0FBU0ZDLG9DQVRFO0FBVUZDLG9DQVZFO0FBV0ZDO0FBWEUsUyxRQWFOQyxJLEdBQU87QUFDSEMsd0JBQVksQ0FEVDtBQUVIQyxtQ0FBdUIsRUFGcEI7QUFHSEMsK0JBQWtCLEtBSGY7QUFJSEMsd0JBQVksQ0FKVDtBQUtIQyx3QkFBWTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCUSxhQUxUO0FBeUJIO0FBQ0FoQixrQkFBTTtBQUNGaUIsdUJBQU8sSUFETDtBQUVGQyxzQkFBTSxNQUZKO0FBR0ZDLHlCQUFTLElBSFA7QUFJRkMsc0JBQU0sTUFKSjtBQUtGQyx5QkFBUztBQUxQLGFBMUJIO0FBaUNIQyx1QkFBVyxFQWpDUjtBQWtDSDtBQUNBckIsb0JBQVE7QUFDSmdCLHVCQUFPLEtBREg7QUFFSkMsc0JBQU0sUUFGRjtBQUdKQyx5QkFBUyxLQUhMO0FBSUpDLHNCQUFNLE1BSkY7QUFLSkMseUJBQVM7QUFMTCxhQW5DTDtBQTBDSEUseUJBQWEsRUExQ1Y7QUEyQ0g7QUFDQXJCLGlCQUFLO0FBQ0RlLHVCQUFPLElBRE47QUFFREMsc0JBQU0sS0FGTDtBQUdETSx1QkFBTyxDQUFDLEVBQUQsQ0FITjtBQUlEQyw2QkFBYSxDQUFDLEtBQUQsQ0FKWjtBQUtETix5QkFBUztBQUxSLGFBNUNGO0FBbURITyxzQkFBVSxDQW5EUDtBQW9ESDtBQUNBdkIsa0JBQU07QUFDRmMsdUJBQU8sSUFETDtBQUVGQyxzQkFBTSxNQUZKO0FBR0ZNLHVCQUFPLENBQUMsRUFBRCxDQUhMO0FBSUZDLDZCQUFhLENBQUMsS0FBRCxDQUpYO0FBS0ZOLHlCQUFTO0FBTFAsYUFyREg7QUE0REhRLHVCQUFXLENBNURSO0FBNkRIO0FBQ0F2Qix1QkFBVztBQUNQYSx1QkFBTyxNQURBO0FBRVBDLHNCQUFNLFdBRkM7QUFHUEMseUJBQVMsSUFIRjtBQUlQQyxzQkFBTSxNQUpDO0FBS1BDLHlCQUFTO0FBTEYsYUE5RFI7QUFxRUhPLDRCQUFnQixFQXJFYjtBQXNFSDtBQUNBdkIsc0JBQVU7QUFDTlksdUJBQU8sSUFERDtBQUVOQyxzQkFBTSxVQUZBO0FBR05DLHlCQUFTLEtBSEg7QUFJTkMsc0JBQU0sTUFKQTtBQUtOQyx5QkFBUztBQUxILGFBdkVQO0FBOEVIUSwyQkFBZSxFQTlFWjtBQStFSDtBQUNBdkIsdUJBQVc7QUFDUFcsdUJBQU8sTUFEQTtBQUVQQyxzQkFBTSxXQUZDO0FBR1BDLHlCQUFTLElBSEY7QUFJUEMsc0JBQU0sTUFKQztBQUtQQyx5QkFBUztBQUxGLGFBaEZSO0FBdUZIUyw0QkFBZ0IsRUF2RmI7QUF3Rkg7QUFDQXZCLGlCQUFLO0FBQ0RVLHVCQUFPLElBRE47QUFFREMsc0JBQU0sS0FGTDtBQUdEQyx5QkFBUyxLQUhSO0FBSURDLHNCQUFNLE1BSkw7QUFLREMseUJBQVM7QUFMUixhQXpGRjtBQWdHSFUsc0JBQVUsRUFoR1A7QUFpR0g7QUFDQXZCLHFCQUFTO0FBQ0xTLHVCQUFPLElBREY7QUFFTEMsc0JBQU0sU0FGRDtBQUdMQyx5QkFBUyxJQUhKO0FBSUxDLHNCQUFNLE1BSkQ7QUFLTEMseUJBQVM7QUFMSixhQWxHTjtBQXlHSFcsMEJBQWMsRUF6R1g7QUEwR0g7QUFDQXZCLHFCQUFTO0FBQ0xRLHVCQUFPLElBREY7QUFFTEMsc0JBQU0sU0FGRDtBQUdMQyx5QkFBUyxLQUhKO0FBSUxDLHNCQUFNLE1BSkQ7QUFLTEMseUJBQVM7QUFMSixhQTNHTjtBQWtISFksMEJBQWMsRUFsSFg7QUFtSEg7QUFDQXZCLCtCQUFtQjtBQUNmTyx1QkFBTyxNQURRO0FBRWZDLHNCQUFNLG1CQUZTO0FBR2ZDLHlCQUFTLEtBSE07QUFJZkMsc0JBQU0sTUFKUztBQUtmQyx5QkFBUztBQUxNLGFBcEhoQjtBQTJISGEsb0NBQXdCO0FBM0hyQixTLFFBNkhQQyxPLEdBQVU7QUFDTkMsc0JBRE0sd0JBQ087QUFDVCxxQkFBS3hCLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxxQkFBS3lCLE1BQUw7QUFDSCxhQUpLO0FBS05DLG9CQUxNLHNCQUtLO0FBQ1Asb0JBQUksS0FBS3RCLFVBQUwsQ0FBZ0JoQixJQUFoQixJQUF3QixLQUFLZ0IsVUFBTCxDQUFnQlosU0FBeEMsSUFBcUQsS0FBS1ksVUFBTCxDQUFnQlYsU0FBckUsSUFBa0YsS0FBS1UsVUFBTCxDQUFnQlIsT0FBdEcsRUFBK0c7QUFDM0crQix1QkFBR0MsV0FBSCxDQUFlO0FBQ1h2QiwrQkFBTyxZQURJLEVBQ1U7QUFDckJ3Qiw4QkFBTSxJQUZLLEVBRUM7QUFDWkMsaUNBQVMsc0JBQU8sQ0FBRTtBQUhQLHFCQUFmO0FBS0EseUJBQUtDLGlDQUFMO0FBQ0gsaUJBUEQsTUFPTztBQUNILHlCQUFLL0IsVUFBTCxHQUFrQixDQUFsQjtBQUNBMkIsdUJBQUdLLFNBQUgsQ0FBYTtBQUNUM0IsK0JBQU8sU0FERSxFQUNTO0FBQ2xCNEIsOEJBQU0sTUFGRyxFQUVLO0FBQ2RDLGtDQUFVLElBSEQsRUFHTztBQUNoQkwsOEJBQU0sS0FKRyxDQUlJO0FBSkoscUJBQWI7QUFNSDtBQUNKO0FBdEJLLFMsUUF3QlZNLE0sR0FBUyxFLFFBQ1RDLEssR0FBUTtBQUNKMUIscUJBREkscUJBQ01FLEtBRE4sRUFDYTtBQUNiLHFCQUFLUixVQUFMLENBQWdCaEIsSUFBaEIsR0FBdUJ3QixLQUF2QjtBQUNBLHFCQUFLYSxNQUFMO0FBQ0gsYUFKRztBQUtKZCx1QkFMSSx1QkFLUUMsS0FMUixFQUtlO0FBQ2YscUJBQUtSLFVBQUwsQ0FBZ0JmLE1BQWhCLEdBQXlCdUIsS0FBekI7QUFDQSxxQkFBS2EsTUFBTDtBQUNILGFBUkc7QUFTSlgsb0JBVEksb0JBU0t1QixLQVRMLEVBU1k7QUFDWixxQkFBS2pDLFVBQUwsQ0FBZ0JkLEdBQWhCLEdBQXNCLEtBQUtBLEdBQUwsQ0FBU3NCLEtBQVQsQ0FBZXlCLEtBQWYsQ0FBdEI7QUFDQSxxQkFBS1osTUFBTDtBQUNILGFBWkc7QUFhSlYscUJBYkkscUJBYU1zQixLQWJOLEVBYWE7QUFDYixxQkFBS2pDLFVBQUwsQ0FBZ0JiLElBQWhCLEdBQXVCLEtBQUtBLElBQUwsQ0FBVXFCLEtBQVYsQ0FBZ0J5QixLQUFoQixDQUF2QjtBQUNBLHFCQUFLWixNQUFMO0FBQ0gsYUFoQkc7QUFpQkpULDBCQWpCSSwwQkFpQldKLEtBakJYLEVBaUJrQjtBQUNsQixxQkFBS1IsVUFBTCxDQUFnQlosU0FBaEIsR0FBNEJvQixLQUE1QjtBQUNBLHFCQUFLYSxNQUFMO0FBQ0gsYUFwQkc7QUFxQkpSLHlCQXJCSSx5QkFxQlVMLEtBckJWLEVBcUJpQjtBQUNqQixxQkFBS1IsVUFBTCxDQUFnQlgsUUFBaEIsR0FBMkJtQixLQUEzQjtBQUNBLHFCQUFLYSxNQUFMO0FBQ0gsYUF4Qkc7QUF5QkpQLDBCQXpCSSwwQkF5QldOLEtBekJYLEVBeUJrQjtBQUNsQixxQkFBS1IsVUFBTCxDQUFnQlYsU0FBaEIsR0FBNEJrQixLQUE1QjtBQUNBLHFCQUFLYSxNQUFMO0FBQ0gsYUE1Qkc7QUE2QkpOLG9CQTdCSSxvQkE2QktQLEtBN0JMLEVBNkJZO0FBQ1oscUJBQUtSLFVBQUwsQ0FBZ0JULEdBQWhCLEdBQXNCaUIsS0FBdEI7QUFDQSxxQkFBS2EsTUFBTDtBQUNILGFBaENHO0FBaUNKTCx3QkFqQ0ksd0JBaUNTUixLQWpDVCxFQWlDZ0I7QUFDaEIscUJBQUtSLFVBQUwsQ0FBZ0JSLE9BQWhCLEdBQTBCZ0IsS0FBMUI7QUFDQSxxQkFBS2EsTUFBTDtBQUNILGFBcENHO0FBcUNKSix3QkFyQ0ksd0JBcUNTVCxLQXJDVCxFQXFDZ0I7QUFDaEIscUJBQUtSLFVBQUwsQ0FBZ0JQLE9BQWhCLEdBQTBCZSxLQUExQjtBQUNBLHFCQUFLYSxNQUFMO0FBQ0gsYUF4Q0c7QUF5Q0pILGtDQXpDSSxrQ0F5Q21CVixLQXpDbkIsRUF5QzBCO0FBQzFCLHFCQUFLUixVQUFMLENBQWdCTixpQkFBaEIsR0FBb0NjLEtBQXBDO0FBQ0EscUJBQUthLE1BQUw7QUFDSDtBQTVDRyxTLFFBOENSYSxRLEdBQVcsRTs7Ozs7bUNBQ0F2QyxJLEVBQU07QUFDYixnQkFBSXdDLFdBQVc7QUFDWDNCLHVCQUFPLENBQUMsRUFBRCxDQURJO0FBRVhDLDZCQUFhLENBQUMsS0FBRDtBQUZGLGFBQWY7QUFJQSxpQkFBSyxJQUFJd0IsUUFBUSxDQUFqQixFQUFvQkEsUUFBUXRDLEtBQUt5QyxNQUFqQyxFQUF5Q0gsT0FBekMsRUFBa0Q7QUFDOUNFLHlCQUFTM0IsS0FBVCxDQUFleUIsUUFBUSxDQUF2QixJQUE0QnRDLEtBQUtzQyxLQUFMLEVBQVl6QixLQUF4QztBQUNBMkIseUJBQVMxQixXQUFULENBQXFCd0IsUUFBUSxDQUE3QixJQUFrQ3RDLEtBQUtzQyxLQUFMLEVBQVl4QixXQUE5QztBQUNIO0FBQ0QsbUJBQU8wQixRQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs7O3VDQUV3QkUsZUFBS0MsT0FBTCxDQUNoQiwyREFEZ0IsRUFFaEIsTUFGZ0IsRUFFUixFQUZRLEM7OztBQUFoQkMsdUM7O0FBSUosb0NBQUlBLFFBQVFDLFVBQVIsSUFBc0IsR0FBMUIsRUFBK0I7QUFDdkJDLGdFQUR1QixHQUNRRixRQUFRNUMsSUFBUixDQUFhK0MsTUFEckI7QUFFM0I7O0FBQ0lDLDJDQUh1QixHQUdiLEtBQUtDLFVBQUwsQ0FBZ0JILDZCQUE2QkksY0FBN0MsQ0FIYTs7QUFJM0IseUNBQUszRCxHQUFMLENBQVNzQixLQUFULEdBQWlCbUMsUUFBUW5DLEtBQXpCO0FBQ0EseUNBQUt0QixHQUFMLENBQVN1QixXQUFULEdBQXVCa0MsUUFBUWxDLFdBQS9CO0FBQ0Esd0NBQUksS0FBS1gsaUJBQVQsRUFBNEI7QUFDeEIsNENBQUksS0FBS0QscUJBQUwsQ0FBMkJpRCxHQUEvQixFQUFvQztBQUNoQyxpREFBU0MsU0FBVCxJQUFzQixLQUFLN0QsR0FBTCxDQUFTc0IsS0FBL0IsRUFBc0M7QUFDbEMsb0RBQUksS0FBS3RCLEdBQUwsQ0FBU3NCLEtBQVQsQ0FBZXVDLFNBQWYsS0FBNkIsS0FBS2xELHFCQUFMLENBQTJCaUQsR0FBNUQsRUFBaUU7QUFDN0QseURBQUtwQyxRQUFMLEdBQWdCcUMsU0FBaEI7QUFDSDtBQUNKO0FBQ0o7QUFDSixxQ0FSRCxNQVFLO0FBQ0QsNkNBQUtyQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0g7QUFDRDtBQUNJc0MsNENBbEJ1QixHQWtCWixLQUFLSixVQUFMLENBQWdCSCw2QkFBNkJRLFlBQTdDLENBbEJZOztBQW1CM0IseUNBQUs5RCxJQUFMLENBQVVxQixLQUFWLEdBQWtCd0MsU0FBU3hDLEtBQTNCO0FBQ0EseUNBQUtyQixJQUFMLENBQVVzQixXQUFWLEdBQXdCdUMsU0FBU3ZDLFdBQWpDO0FBQ0Esd0NBQUksS0FBS1gsaUJBQVQsRUFBNEI7QUFDeEIsNENBQUksS0FBS0QscUJBQUwsQ0FBMkJxRCxJQUEvQixFQUFxQztBQUNqQyxpREFBU0MsVUFBVCxJQUF1QixLQUFLaEUsSUFBTCxDQUFVcUIsS0FBakMsRUFBd0M7QUFDcEMsb0RBQUksS0FBS3JCLElBQUwsQ0FBVXFCLEtBQVYsQ0FBZ0IyQyxVQUFoQixLQUErQixLQUFLdEQscUJBQUwsQ0FBMkJxRCxJQUE5RCxFQUFvRTtBQUNoRSx5REFBS3ZDLFNBQUwsR0FBaUJ3QyxVQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLHFDQVJELE1BUUs7QUFDQSw2Q0FBS3hDLFNBQUwsR0FBaUIsQ0FBakI7QUFDSjtBQUVKO0FBQ0QscUNBQUtVLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSjs7Ozs7Ozs7Ozs7Ozs7dUNBRXdCZ0IsZUFBS0MsT0FBTCxDQUNoQixvRUFEZ0IsRUFFaEIsTUFGZ0IsRUFHaEIsS0FBS3RDLFVBSFcsQzs7O0FBQWhCdUMsdUM7O3NDQUtBQSxRQUFRQyxVQUFSLElBQXNCLEc7Ozs7O0FBQ2xCWSxnRCxHQUFtQmIsUUFBUTVDLElBQVIsQ0FBYStDLE07QUFDaENXLDRELEdBQStCOUIsR0FBRytCLGNBQUgsQ0FBa0IsOEJBQWxCLEM7O0FBQ25DLG9DQUFHLEtBQUt4RCxpQkFBUixFQUEwQjtBQUNyQnVELGlFQUE2QixLQUFLdEQsVUFBbEMsSUFBOENxRCxnQkFBOUM7QUFDSixpQ0FGRCxNQUVLO0FBQ0RDLGlFQUE2QkUsSUFBN0IsQ0FBa0NILGdCQUFsQztBQUNIO0FBQ0dJLG9DLEdBQ0EsZ0VBQWdFSixpQkFBaUJLLEU7O3VDQUNyRHBCLGVBQUtxQixVQUFMLENBQWdCRixJQUFoQixDOzs7QUFBeEJHLCtDOztBQUNSUCxpREFBaUJRLE1BQWpCLEdBQTBCRCxlQUExQjtBQUNBcEMsbUNBQUdzQyxVQUFILENBQWM7QUFDVkMseUNBQUssOEJBREs7QUFFVm5FLDBDQUFNMEQsNEJBRkk7QUFHVjNCLDZDQUFTLG1CQUFNO0FBQ1hILDJDQUFHSyxTQUFILENBQWE7QUFDVDNCLG1EQUFPLE1BREUsRUFDTTtBQUNmNEIsa0RBQU0sU0FGRyxFQUVRO0FBQ2pCQyxzREFBVSxJQUhELEVBR087QUFDaEJMLGtEQUFNLElBSkcsRUFJRztBQUNaQyxxREFBUyxzQkFBTztBQUNaLHVEQUFLOUIsVUFBTCxHQUFrQixDQUFsQjtBQUNBMkIsbURBQUd3QyxZQUFILENBQWdCO0FBQ1pDLDJEQUFPLENBREssQ0FDSDtBQURHLGlEQUFoQjtBQUdIO0FBVlEseUNBQWI7QUFZSDtBQWhCUyxpQ0FBZDs7Ozs7Ozs7Ozs7Ozs7OztBQW9CUjs7Ozs7Ozs7Ozs7O3VDQUV3QjNCLGVBQUtDLE9BQUwsQ0FDaEIsb0NBRGdCLEVBRWhCLE1BRmdCLEVBRVI7QUFDSm1CLHdDQUFJLEtBQUt6RCxVQUFMLENBQWdCaUU7QUFEaEIsaUNBRlEsQzs7O0FBQWhCMUIsdUM7O0FBTUosb0NBQUlBLFFBQVFDLFVBQVIsSUFBc0IsR0FBMUIsRUFBK0I7QUFDdkIwQiw4Q0FEdUIsR0FDVjNCLFFBQVE1QyxJQUFSLENBQWErQyxNQURIOztBQUUzQix5Q0FBSzFCLFlBQUwsR0FBb0JrRCxXQUFXaEUsSUFBL0I7QUFDQSx5Q0FBS2UsWUFBTCxHQUFvQmlELFdBQVdDLE9BQS9CO0FBQ0EseUNBQUs5QyxNQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTDs7OzsyQ0FDbUIxQixJLEVBQU07QUFDckJ5RSxvQkFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0VELG9CQUFRQyxHQUFSLENBQVkxRSxJQUFaO0FBQ0Z5RSxvQkFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0EsaUJBQUtyRSxVQUFMLENBQWdCaUUsUUFBaEIsR0FBeUJ0RSxLQUFLMkUsUUFBOUI7QUFDQSxpQkFBS3RFLFVBQUwsQ0FBZ0J1RSxFQUFoQixHQUFtQjVFLEtBQUs4RCxFQUF4QjtBQUNBLGlCQUFLbkQsU0FBTCxHQUFpQlgsS0FBS08sSUFBdEI7QUFDQSxpQkFBS0ssV0FBTCxHQUFtQlosS0FBSzZFLE1BQXhCO0FBQ0EsaUJBQUs1RCxjQUFMLEdBQW9CakIsS0FBSzhFLFNBQXpCO0FBQ0EsaUJBQUs1RCxhQUFMLEdBQW1CbEIsS0FBSytFLFFBQXhCO0FBQ0EsaUJBQUs1RCxjQUFMLEdBQW9CbkIsS0FBS2dGLFNBQXpCO0FBQ0EsaUJBQUs1RCxRQUFMLEdBQWNwQixLQUFLaUYsR0FBbkI7QUFDQSxpQkFBSzVELFlBQUwsR0FBa0JyQixLQUFLa0YsT0FBdkI7QUFDQSxpQkFBSzVELFlBQUwsR0FBa0J0QixLQUFLd0UsT0FBdkI7QUFDQSxpQkFBS2pELHNCQUFMLEdBQTRCdkIsS0FBS21GLGlCQUFqQztBQUNIOzs7K0JBQ016RSxPLEVBQVM7QUFDWixnQkFBSUEsUUFBUW9ELEVBQVosRUFBZ0I7QUFDWixxQkFBS3pELFVBQUwsQ0FBZ0JpRSxRQUFoQixHQUEyQjVELFFBQVFvRCxFQUFuQztBQUNBLHFCQUFLc0IsU0FBTDtBQUNIO0FBQ0QsZ0JBQUkxRSxRQUFRNEIsS0FBWixFQUFtQjtBQUNmLG9CQUFJcEMsd0JBQXdCMEIsR0FBRytCLGNBQUgsQ0FBa0IsOEJBQWxCLEVBQWtEakQsUUFBUTRCLEtBQTFELENBQTVCO0FBQ0EscUJBQUtwQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0EscUJBQUtDLGlCQUFMLEdBQXVCLElBQXZCO0FBQ0EscUJBQUtDLFVBQUwsR0FBa0IsQ0FBQ00sUUFBUTRCLEtBQTNCO0FBQ0EscUJBQUsrQyxrQkFBTCxDQUF3Qm5GLHFCQUF4QjtBQUNIO0FBQ0QsaUJBQUtvRix3QkFBTDtBQUNIOzs7aUNBQ1EsQ0FBRTs7OztFQWhXaUNDLGVBQUtDLEk7O2tCQUFoQ3hHLGtCIiwiZmlsZSI6ImNyZWF0ZUNsaWVudExpbmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBOYW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgRU5OYW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgRHV0eSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCBTZXggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgV29ya1Bob25lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgTGFuZGxpbmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBXb3JrRW1haWwgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBGYXggZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBDb21wYW55IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgQWRkcmVzcyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IFBlcnNvbkRlc2NyaXB0aW9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGVDbGllbnRMaW5rZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiTmFtZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTmFtZVZhbHVlXCJ9LFwiRU5OYW1lXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkVOTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRU5OYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJFTk5hbWVWYWx1ZVwifSxcIlNleFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIlNleFwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIlNleEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiU2V4SW5kZXhcIn0sXCJEdXR5XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiRHV0eVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkR1dHlJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkR1dHlJbmRleFwifSxcIldvcmtQaG9uZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJXb3JrUGhvbmVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIldvcmtQaG9uZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiV29ya1Bob25lVmFsdWVcIn0sXCJMYW5kbGluZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJMYW5kbGluZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiTGFuZGxpbmVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkxhbmRsaW5lVmFsdWVcIn0sXCJXb3JrRW1haWxcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiV29ya0VtYWlsXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJXb3JrRW1haWxWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIldvcmtFbWFpbFZhbHVlXCJ9LFwiRmF4XCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkZheFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRmF4VmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJGYXhWYWx1ZVwifSxcIkNvbXBhbnlcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQ29tcGFueVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiQ29tcGFueVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ29tcGFueVZhbHVlXCJ9LFwiQWRkcmVzc1wiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJBZGRyZXNzXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJBZGRyZXNzVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJBZGRyZXNzVmFsdWVcIn0sXCJQZXJzb25EZXNjcmlwdGlvblwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJQZXJzb25EZXNjcmlwdGlvblwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiUGVyc29uRGVzY3JpcHRpb25WYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlBlcnNvbkRlc2NyaXB0aW9uVmFsdWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgTmFtZSxcbiAgICAgICAgICAgIEVOTmFtZSxcbiAgICAgICAgICAgIFNleCxcbiAgICAgICAgICAgIER1dHksXG4gICAgICAgICAgICBXb3JrUGhvbmUsXG4gICAgICAgICAgICBMYW5kbGluZSxcbiAgICAgICAgICAgIFdvcmtFbWFpbCxcbiAgICAgICAgICAgIEZheCxcbiAgICAgICAgICAgIENvbXBhbnksXG4gICAgICAgICAgICBBZGRyZXNzLFxuICAgICAgICAgICAgUGVyc29uRGVzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICAgICAgICBjbGllbnRMaW5rZXJDYWNoZURhdGE6IHt9LFxuICAgICAgICAgICAgaXNDbGllbnRDYWNoZURhdGE6ZmFsc2UsXG4gICAgICAgICAgICBpc1ByZUluZGV4OiAwLFxuICAgICAgICAgICAgc3VibWl0RGF0YToge1xuICAgICAgICAgICAgICAgIC8vIC9hcGkvc2VydmljZXMvd2ViL2NsaWVudENvbnRhY3RzL0NyZWF0ZU9yVXBkYXRlQ2xpZW50Q29udGFjdHNCYXNpY1xuICAgICAgICAgICAgICAgIC8vIEFkZHJlc3M6IFwi5Zyw5Z2AXCJcbiAgICAgICAgICAgICAgICAvLyBDYXNlSWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBDbGllbnRJZDogXCJDTDIwMTgwMzAwMDQ1XCJcbiAgICAgICAgICAgICAgICAvLyBDb21wYW55OiBcIuWFrOWPuFwiXG4gICAgICAgICAgICAgICAgLy8gRHV0eTogXCJHTVwiXG4gICAgICAgICAgICAgICAgLy8gRU5Db21wYW55OiBcIiBcIlxuICAgICAgICAgICAgICAgIC8vIEVOTmFtZTogXCLoi7HmloflkI1cIlxuICAgICAgICAgICAgICAgIC8vIEZheDogXCLkvKDnnJ9cIlxuICAgICAgICAgICAgICAgIC8vIElkOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gTGFuZGxpbmU6IFwi5bqn5py6XCJcbiAgICAgICAgICAgICAgICAvLyBOYW1lOiBcIuWnk+WQjVwiXG4gICAgICAgICAgICAgICAgLy8gUGVyc29uRGVzY3JpcHRpb246IFwi5Liq5Lq65o+P6L+wXCJcbiAgICAgICAgICAgICAgICAvLyBQb3N0OiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gUmVnaW9uOiBcIlwiXG4gICAgICAgICAgICAgICAgLy8gU2V4OiBcIk1cIlxuICAgICAgICAgICAgICAgIC8vIFdvcmtFbWFpbDogXCLpgq7nrrHlnLDlnYBcIlxuICAgICAgICAgICAgICAgIC8vIFdvcmtQaG9uZTogXCLlt6XkvZznlLXor51cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOWnk+WQjVxuICAgICAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aeT5ZCNJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBOYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy8g6Iux5paH5ZCNXG4gICAgICAgICAgICBFTk5hbWU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+iLseaWh+WQjScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VOTmFtZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRU5OYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/mgKfliKtcbiAgICAgICAgICAgIFNleDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5oCn5YirJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2V4JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1wiXCJdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTZXhJbmRleDogMCxcbiAgICAgICAgICAgIC8v6IGM5L2NXG4gICAgICAgICAgICBEdXR5OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfogYzkvY0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdEdXR5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1wiXCJdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBEdXR5SW5kZXg6IDAsXG4gICAgICAgICAgICAvL+W3peS9nOeUteivnVxuICAgICAgICAgICAgV29ya1Bob25lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflt6XkvZznlLXor50nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXb3JrUGhvbmUnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgV29ya1Bob25lVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/luqfmnLpcbiAgICAgICAgICAgIExhbmRsaW5lOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfluqfmnLonLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdMYW5kbGluZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTGFuZGxpbmVWYWx1ZTogJycsXG4gICAgICAgICAgICAvL+mCrueuseWcsOWdgFxuICAgICAgICAgICAgV29ya0VtYWlsOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpgq7nrrHlnLDlnYAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXb3JrRW1haWwnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgV29ya0VtYWlsVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy8g5Lyg55yfXG4gICAgICAgICAgICBGYXg6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S8oOecnycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZheCcsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRmF4VmFsdWU6ICcnLFxuICAgICAgICAgICAgLy8g5YWs5Y+4XG4gICAgICAgICAgICBDb21wYW55OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflhazlj7gnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDb21wYW55JyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ29tcGFueVZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8vIOWcsOWdgFxuICAgICAgICAgICAgQWRkcmVzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zyw5Z2AJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBBZGRyZXNzVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy8g5Liq5Lq65o+P6L+wXG4gICAgICAgICAgICBQZXJzb25EZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Liq5Lq65o+P6L+wJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGVyc29uRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUGVyc29uRGVzY3JpcHRpb25WYWx1ZTogJycsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Ym1pdERhdGEuTmFtZSAmJiB0aGlzLnN1Ym1pdERhdGEuV29ya1Bob25lICYmIHRoaXMuc3VibWl0RGF0YS5Xb3JrRW1haWwgJiYgdGhpcy5zdWJtaXREYXRhLkNvbXBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVPclVwZGF0ZUNsaWVudENvbnRhY3RzQmFzaWMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7floavlhpnlv4XloavpobnvvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLk5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVOTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkVOTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU2V4SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU2V4ID0gdGhpcy5TZXgudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRHV0eUluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkR1dHkgPSB0aGlzLkR1dHkudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgV29ya1Bob25lVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuV29ya1Bob25lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMYW5kbGluZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkxhbmRsaW5lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBXb3JrRW1haWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5Xb3JrRW1haWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEZheFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkZheCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ29tcGFueVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNvbXBhbnkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEFkZHJlc3NWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5BZGRyZXNzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQZXJzb25EZXNjcmlwdGlvblZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlBlcnNvbkRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIGZpbHRlckRhdGEoZGF0YSkge1xuICAgICAgICAgICAgdmFyIGJhY2tEYXRhID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBbJyddLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbJ+ivt+mAieaLqSddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBiYWNrRGF0YS52YWx1ZVtpbmRleCArIDFdID0gZGF0YVtpbmRleF0udmFsdWVcbiAgICAgICAgICAgICAgICBiYWNrRGF0YS5kaXNwbGF5VGV4dFtpbmRleCArIDFdID0gZGF0YVtpbmRleF0uZGlzcGxheVRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiYWNrRGF0YVxuICAgICAgICB9XG4gICAgICAgIC8v6I635Y+W6IGM5L2NXG4gICAgICAgIGFzeW5jIEdldENsaWVudENvbnRhY3RzRm9yRWRpdCgpIHtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRDb250YWN0cy9HZXRDbGllbnRDb250YWN0c0ZvckVkaXQnLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge31cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIEdldENsaWVudENvbnRhY3RzRm9yRWRpdERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8v5oCn5YirXG4gICAgICAgICAgICAgICAgdmFyIFNleERhdGEgPSB0aGlzLmZpbHRlckRhdGEoR2V0Q2xpZW50Q29udGFjdHNGb3JFZGl0RGF0YS5nZW5kZXJDb21ib2JveCk7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXgudmFsdWUgPSBTZXhEYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V4LmRpc3BsYXlUZXh0ID0gU2V4RGF0YS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NsaWVudENhY2hlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGllbnRMaW5rZXJDYWNoZURhdGEuc2V4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBTZXhfaW5kZXggaW4gdGhpcy5TZXgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5TZXgudmFsdWVbU2V4X2luZGV4XSA9PSB0aGlzLmNsaWVudExpbmtlckNhY2hlRGF0YS5zZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXhJbmRleCA9IFNleF9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXhJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8v6IGM5L2NXG4gICAgICAgICAgICAgICAgdmFyIER1dHlEYXRhID0gdGhpcy5maWx0ZXJEYXRhKEdldENsaWVudENvbnRhY3RzRm9yRWRpdERhdGEuZHV0eUNvbWJvYm94KTtcbiAgICAgICAgICAgICAgICB0aGlzLkR1dHkudmFsdWUgPSBEdXR5RGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLkR1dHkuZGlzcGxheVRleHQgPSBEdXR5RGF0YS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NsaWVudENhY2hlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGllbnRMaW5rZXJDYWNoZURhdGEuZHV0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgRHV0eV9pbmRleCBpbiB0aGlzLkR1dHkudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5EdXR5LnZhbHVlW0R1dHlfaW5kZXhdID09IHRoaXMuY2xpZW50TGlua2VyQ2FjaGVEYXRhLmR1dHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EdXR5SW5kZXggPSBEdXR5X2luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5EdXR5SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+aPkOS6pOaVsOaNrlxuICAgICAgICBhc3luYyBDcmVhdGVPclVwZGF0ZUNsaWVudENvbnRhY3RzQmFzaWMoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50Q29udGFjdHMvQ3JlYXRlT3JVcGRhdGVDbGllbnRDb250YWN0c0Jhc2ljJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRsaW5rZXJkYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB2YXIgY3JlYXRlX2NsaWVudGxpbmtlcmxpc3RfZGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ0xJRU5UTElOS0VSTElTVF9EQVRBJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc0NsaWVudENhY2hlRGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICBjcmVhdGVfY2xpZW50bGlua2VybGlzdF9kYXRhW3RoaXMuaXNQcmVJbmRleF09Y2xpZW50bGlua2VyZGF0YTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlX2NsaWVudGxpbmtlcmxpc3RfZGF0YS5wdXNoKGNsaWVudGxpbmtlcmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaHR0cCA9XG4gICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRDb250YWN0cy9HZXRDbGllbnRDb250YWN0QXZhdGFyP2lkPScgKyBjbGllbnRsaW5rZXJkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlua2VyUGhvdG9EYXRhID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xuICAgICAgICAgICAgICAgIGNsaWVudGxpbmtlcmRhdGEuYXZhdGFyID0gbGlua2VyUGhvdG9EYXRhO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdDUkVBVEVfQ0xJRU5UTElOS0VSTElTVF9EQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3JlYXRlX2NsaWVudGxpbmtlcmxpc3RfZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOWujOaIkCcsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5blrqLmiLfkv6Hmga9cbiAgICAgICAgYXN5bmMgR2V0Q2xpZW50KCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NsaWVudC9HZXRDbGllbnQnLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zdWJtaXREYXRhLkNsaWVudElkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50RGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5Db21wYW55VmFsdWUgPSBjbGllbnREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5BZGRyZXNzVmFsdWUgPSBjbGllbnREYXRhLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+e8k+WtmOS4reiOt+WPluWuouaIt+S/oeaBr1xuICAgICAgICBnZXRDYWNoZUNsaWVudERhdGEoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNsaWVudElkPWRhdGEuY2xpZW50SWQ7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuSWQ9ZGF0YS5pZDtcbiAgICAgICAgICAgIHRoaXMuTmFtZVZhbHVlID0gZGF0YS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5FTk5hbWVWYWx1ZSA9IGRhdGEuZW5OYW1lO1xuICAgICAgICAgICAgdGhpcy5Xb3JrUGhvbmVWYWx1ZT1kYXRhLndvcmtQaG9uZTtcbiAgICAgICAgICAgIHRoaXMuTGFuZGxpbmVWYWx1ZT1kYXRhLmxhbmRsaW5lO1xuICAgICAgICAgICAgdGhpcy5Xb3JrRW1haWxWYWx1ZT1kYXRhLndvcmtFbWFpbDtcbiAgICAgICAgICAgIHRoaXMuRmF4VmFsdWU9ZGF0YS5mYXg7XG4gICAgICAgICAgICB0aGlzLkNvbXBhbnlWYWx1ZT1kYXRhLmNvbXBhbnk7XG4gICAgICAgICAgICB0aGlzLkFkZHJlc3NWYWx1ZT1kYXRhLmFkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLlBlcnNvbkRlc2NyaXB0aW9uVmFsdWU9ZGF0YS5wZXJzb25EZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuQ2xpZW50SWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRMaW5rZXJDYWNoZURhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NMSUVOVExJTktFUkxJU1RfREFUQScpW29wdGlvbnMuaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50TGlua2VyQ2FjaGVEYXRhID0gY2xpZW50TGlua2VyQ2FjaGVEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGllbnRDYWNoZURhdGE9dHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJlSW5kZXggPSArb3B0aW9ucy5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENhY2hlQ2xpZW50RGF0YShjbGllbnRMaW5rZXJDYWNoZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRDb250YWN0c0ZvckVkaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge307XG4gICAgfVxuIl19