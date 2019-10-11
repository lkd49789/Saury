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

var createConflict = function (_wepy$page) {
    _inherits(createConflict, _wepy$page);

    function createConflict() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, createConflict);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createConflict.__proto__ || Object.getPrototypeOf(createConflict)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "name": { "xmlns:v-bind": "", "v-bind:input.sync": "name", "v-bind:inputValue.sync": "nameValue", "v-bind:twoWayTitle.once": "nameValue" }, "address": { "v-bind:input.sync": "address", "v-bind:inputValue.sync": "addressValue", "v-bind:twoWayTitle.once": "addressValue" }, "cardId": { "v-bind:input.sync": "cardId", "v-bind:inputValue.sync": "cardIdValue", "v-bind:twoWayTitle.once": "cardIdValue" }, "email": { "v-bind:input.sync": "email", "v-bind:inputValue.sync": "emailValue", "v-bind:twoWayTitle.once": "emailValue" }, "enName": { "v-bind:input.sync": "enName", "v-bind:inputValue.sync": "enNameValue", "v-bind:twoWayTitle.once": "enNameValue" }, "linker": { "v-bind:input.sync": "linker", "v-bind:inputValue.sync": "linkerValue", "v-bind:twoWayTitle.once": "linkerValue" }, "phone": { "v-bind:input.sync": "phone", "v-bind:inputValue.sync": "phoneValue", "v-bind:twoWayTitle.once": "phoneValue" }, "remark": { "v-bind:input.sync": "remark", "v-bind:inputValue.sync": "remarkValue", "v-bind:twoWayTitle.once": "remarkValue" }, "category": { "v-bind:options.sync": "category", "v-bind:index.sync": "categoryIndex", "v-bind:twoWayTitle.once": "categoryIndex" }, "legalType": { "v-bind:options.sync": "legalType", "v-bind:index.sync": "legalTypeIndex", "v-bind:twoWayTitle.once": "legalTypeIndex" } }, _this.$events = {}, _this.components = {
            name: _input2.default,
            address: _input2.default,
            cardId: _input2.default,
            email: _input2.default,
            enName: _input2.default,
            linker: _input2.default,
            phone: _input2.default,
            remark: _input2.default,
            category: _option2.default,
            legalType: _option2.default
        }, _this.data = {
            addOpacity: 1,
            conflictInfo: {},
            isConflictInfo: false,
            prevListPage: false,
            id: 0,
            cacheData: {
                // address: "地址"
                // cardId: "身份证"
                // caseId: ""
                // category: "委托方"
                // email: "邮箱"
                // enName: "英文"
                // id: "temp35161554820211"
                // legalType: "首席执行官"
                // linker: "联系人"
                // name: "中文"
                // phone: "电话"
                // remark: "备注"
            },
            // 中文
            name: {
                title: '中文名称',
                name: 'name',
                warning: true,
                type: 'text',
                options: false
            },
            nameValue: '',
            //英文
            enName: {
                title: '英文名称',
                name: 'enName',
                warning: false,
                type: 'text',
                options: false
            },
            enNameValue: '',
            //类别（必填）
            category: {
                title: '类别',
                name: 'category',
                value: [""],
                displayText: ["请选择"],
                warning: true
            },
            categoryIndex: 0,
            //联系人
            linker: {
                title: '联系人',
                name: 'linker',
                warning: false,
                type: 'text',
                options: false
            },
            linkerValue: '',
            //职务类型
            legalType: {
                title: '职务类型',
                name: 'legalType',
                value: [""],
                displayText: ["请选择"],
                warning: false
            },
            legalTypeIndex: 0,
            //电话
            phone: {
                title: '电话',
                name: 'phone',
                warning: false,
                type: 'text',
                options: false
            },
            phoneValue: '',
            //邮箱地址
            email: {
                title: '邮箱地址',
                name: 'email',
                warning: false,
                type: 'text',
                options: false
            },
            emailValue: '',
            //身份证
            cardId: {
                title: '身份证',
                name: 'cardId',
                warning: false,
                type: 'text',
                options: false
            },
            cardIdValue: '',
            //地址
            address: {
                title: '地址',
                name: 'address',
                warning: false,
                type: 'text',
                options: false
            },
            addressValue: '',
            //备注
            remark: {
                title: '备注',
                name: 'remark',
                warning: false,
                type: 'text',
                options: true
            },
            remarkValue: ''
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                var _this2 = this;

                if (this.cacheData.name && this.cacheData.category) {
                    this.cacheData.id = 'temp_' + this.random(1, 1000000000000000);
                    var create_conflictlist_data = wx.getStorageSync('CREATE_CONFLICTLIST_DATA');
                    if (this.isConflictInfo) {
                        create_conflictlist_data[this.id] = this.cacheData;
                    } else {
                        create_conflictlist_data.push(this.cacheData);
                    }
                    wx.setStorage({
                        key: 'CREATE_CONFLICTLIST_DATA',
                        data: create_conflictlist_data,
                        success: function success() {
                            wx.showToast({
                                title: '提交完成', //提示的内容,
                                icon: 'success', //图标,
                                duration: 2000, //延迟时间,
                                mask: true, //显示透明蒙层，防止触摸穿透,
                                success: function success(res) {
                                    _this2.addOpacity = 1;
                                    if (_this2.prevListPage || _this2.id) {
                                        wx.navigateBack({
                                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                        });
                                    } else {
                                        wx.redirectTo({
                                            url: './conflictList'
                                        });
                                    }
                                }
                            });
                        }
                    });
                } else {
                    this.addOpacity = 1;
                    // this.name.warning=true;
                    // this.category.warning=true;
                    wx.showToast({
                        title: '请填写必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false //显示透明蒙层，防止触摸穿透,
                    });
                }
            }
        }, _this.events = {}, _this.watch = {
            nameValue: function nameValue(value) {
                this.cacheData.name = value;
                this.$apply();
            },
            enNameValue: function enNameValue(value) {
                this.cacheData.enName = value;
                this.$apply();
            },
            categoryIndex: function categoryIndex(index) {
                this.cacheData.category = this.category.displayText[index];
                // this.cacheData.categoryText = this.category.displayText[index];
                this.$apply();
            },
            legalTypeIndex: function legalTypeIndex(index) {
                this.cacheData.legalType = this.legalType.value[index];
                this.cacheData.legalTypeText = this.legalType.displayText[index];
                this.$apply();
            },
            linkerValue: function linkerValue(value) {
                this.cacheData.linker = value;
                this.$apply();
            },
            phoneValue: function phoneValue(value) {
                this.cacheData.phone = value;
                this.$apply();
            },
            emailValue: function emailValue(value) {
                this.cacheData.email = value;
                this.$apply();
            },
            cardIdValue: function cardIdValue(value) {
                this.cacheData.cardId = value;
                this.$apply();
            },
            addressValue: function addressValue(value) {
                this.cacheData.address = value;
                this.$apply();
            },
            remarkValue: function remarkValue(value) {
                this.cacheData.remark = value;
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(createConflict, [{
        key: 'random',

        //随机数
        value: function random(lower, upper) {
            return Math.floor(Math.random() * (upper - lower + 1)) + lower;
        }
        //获取案件业务子类

    }, {
        key: 'GetGeneralCodeComboOutput',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(keyWords, ParentId) {
                var Depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var data, resData, value, displayText, index, category_index, legalType_index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                ParentId = ParentId || '';
                                data = {
                                    Class: keyWords,
                                    Depth: Depth,
                                    IsMaxDepth: true,
                                    ParentId: ParentId,
                                    IsRecursive: false
                                    // isAll: true
                                };
                                _context.next = 4;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboOutput', 'post', data);

                            case 4:
                                resData = _context.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context.next = 21;
                                    break;
                                }

                                value = [''];
                                displayText = ['请选择'];

                                for (index = 0; index < resData.data.result.length; index++) {
                                    value[index + 1] = resData.data.result[index].id;
                                    displayText[index + 1] = resData.data.result[index].name;
                                }
                                _context.t0 = keyWords;
                                _context.next = _context.t0 === "CACL" ? 12 : _context.t0 === "CLCDT" ? 16 : 20;
                                break;

                            case 12:
                                this.category.value = value;
                                this.category.displayText = displayText;
                                if (this.isConflictInfo) {
                                    for (category_index in this.category.value) {
                                        if (this.category.displayText[category_index] == this.conflictInfo.category) {
                                            this.categoryIndex = category_index;
                                        }
                                    }
                                } else {
                                    this.categoryIndex = 0;
                                }
                                return _context.abrupt('break', 21);

                            case 16:
                                this.legalType.value = value;
                                this.legalType.displayText = displayText;
                                if (this.isConflictInfo) {
                                    for (legalType_index in this.legalType.value) {
                                        if (this.legalType.value[legalType_index] == this.conflictInfo.legalType) {
                                            this.legalTypeIndex = legalType_index;
                                        }
                                    }
                                } else {
                                    this.legalTypeIndex = 0;
                                }
                                return _context.abrupt('break', 21);

                            case 20:
                                return _context.abrupt('break', 21);

                            case 21:
                                this.$apply();

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetGeneralCodeComboOutput(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralCodeComboOutput;
        }()
    }, {
        key: 'fillData',
        value: function fillData() {
            this.nameValue = this.conflictInfo.name;
            this.enNameValue = this.conflictInfo.enName;
            this.linkerValue = this.conflictInfo.linker;
            this.phoneValue = this.conflictInfo.phone;
            this.emailValue = this.conflictInfo.email;
            this.cardIdValue = this.conflictInfo.cardId;
            this.addressValue = this.conflictInfo.address;
            this.remarkValue = this.conflictInfo.remark;
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            console.log(options.listPage, options.id);
            var conflictInfoData = wx.getStorageSync('CREATE_CONFLICTLIST_DATA');
            if (conflictInfoData.length !== 0 && !options.listPage && !options.id) {
                wx.redirectTo({
                    url: './conflictList'
                });
            } else if (options.listPage) {
                this.prevListPage = true;
            } else if (options.id) {
                this.conflictInfo = conflictInfoData[+options.id];
                this.isConflictInfo = true;
                this.id = options.id;
            }
            this.fillData();
            this.GetGeneralCodeComboOutput('CACL');
            this.GetGeneralCodeComboOutput('CLCDT');
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return createConflict;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(createConflict , 'pages/modules/myRegister/conflict/createConflict'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbmZsaWN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibmFtZSIsImFkZHJlc3MiLCJjYXJkSWQiLCJlbWFpbCIsImVuTmFtZSIsImxpbmtlciIsInBob25lIiwicmVtYXJrIiwiY2F0ZWdvcnkiLCJsZWdhbFR5cGUiLCJkYXRhIiwiYWRkT3BhY2l0eSIsImNvbmZsaWN0SW5mbyIsImlzQ29uZmxpY3RJbmZvIiwicHJldkxpc3RQYWdlIiwiaWQiLCJjYWNoZURhdGEiLCJ0aXRsZSIsIndhcm5pbmciLCJ0eXBlIiwib3B0aW9ucyIsIm5hbWVWYWx1ZSIsImVuTmFtZVZhbHVlIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsImNhdGVnb3J5SW5kZXgiLCJsaW5rZXJWYWx1ZSIsImxlZ2FsVHlwZUluZGV4IiwicGhvbmVWYWx1ZSIsImVtYWlsVmFsdWUiLCJjYXJkSWRWYWx1ZSIsImFkZHJlc3NWYWx1ZSIsInJlbWFya1ZhbHVlIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsInJhbmRvbSIsImNyZWF0ZV9jb25mbGljdGxpc3RfZGF0YSIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJwdXNoIiwic2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJyZWRpcmVjdFRvIiwidXJsIiwiZXZlbnRzIiwid2F0Y2giLCJpbmRleCIsImxlZ2FsVHlwZVRleHQiLCJjb21wdXRlZCIsImxvd2VyIiwidXBwZXIiLCJNYXRoIiwiZmxvb3IiLCJrZXlXb3JkcyIsIlBhcmVudElkIiwiRGVwdGgiLCJDbGFzcyIsIklzTWF4RGVwdGgiLCJJc1JlY3Vyc2l2ZSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJsZW5ndGgiLCJjYXRlZ29yeV9pbmRleCIsImxlZ2FsVHlwZV9pbmRleCIsImNvbnNvbGUiLCJsb2ciLCJsaXN0UGFnZSIsImNvbmZsaWN0SW5mb0RhdGEiLCJmaWxsRGF0YSIsIkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OzswTUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE1BQXZDLEVBQThDLDBCQUF5QixXQUF2RSxFQUFtRiwyQkFBMEIsV0FBN0csRUFBUixFQUFrSSxXQUFVLEVBQUMscUJBQW9CLFNBQXJCLEVBQStCLDBCQUF5QixjQUF4RCxFQUF1RSwyQkFBMEIsY0FBakcsRUFBNUksRUFBNlAsVUFBUyxFQUFDLHFCQUFvQixRQUFyQixFQUE4QiwwQkFBeUIsYUFBdkQsRUFBcUUsMkJBQTBCLGFBQS9GLEVBQXRRLEVBQW9YLFNBQVEsRUFBQyxxQkFBb0IsT0FBckIsRUFBNkIsMEJBQXlCLFlBQXRELEVBQW1FLDJCQUEwQixZQUE3RixFQUE1WCxFQUF1ZSxVQUFTLEVBQUMscUJBQW9CLFFBQXJCLEVBQThCLDBCQUF5QixhQUF2RCxFQUFxRSwyQkFBMEIsYUFBL0YsRUFBaGYsRUFBOGxCLFVBQVMsRUFBQyxxQkFBb0IsUUFBckIsRUFBOEIsMEJBQXlCLGFBQXZELEVBQXFFLDJCQUEwQixhQUEvRixFQUF2bUIsRUFBcXRCLFNBQVEsRUFBQyxxQkFBb0IsT0FBckIsRUFBNkIsMEJBQXlCLFlBQXRELEVBQW1FLDJCQUEwQixZQUE3RixFQUE3dEIsRUFBdzBCLFVBQVMsRUFBQyxxQkFBb0IsUUFBckIsRUFBOEIsMEJBQXlCLGFBQXZELEVBQXFFLDJCQUEwQixhQUEvRixFQUFqMUIsRUFBKzdCLFlBQVcsRUFBQyx1QkFBc0IsVUFBdkIsRUFB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SztBQURLLGlCQUFkO0FBR0gsYUFKRCxNQUlPLElBQUloQyxRQUFRMEQsUUFBWixFQUFzQjtBQUN6QixxQkFBS2hFLFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxhQUZNLE1BRUEsSUFBSU0sUUFBUUwsRUFBWixFQUFnQjtBQUNuQixxQkFBS0gsWUFBTCxHQUFvQm1FLGlCQUFpQixDQUFDM0QsUUFBUUwsRUFBMUIsQ0FBcEI7QUFDQSxxQkFBS0YsY0FBTCxHQUFzQixJQUF0QjtBQUNBLHFCQUFLRSxFQUFMLEdBQVVLLFFBQVFMLEVBQWxCO0FBQ0g7QUFDRCxpQkFBS2lFLFFBQUw7QUFDQSxpQkFBS0MseUJBQUwsQ0FBK0IsTUFBL0I7QUFDQSxpQkFBS0EseUJBQUwsQ0FBK0IsT0FBL0I7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUF4VDZCQyxlQUFLQyxJOztrQkFBNUJ4RixjIiwiZmlsZSI6ImNyZWF0ZUNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IG5hbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBhZGRyZXNzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgY2FyZElkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgZW1haWwgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBlbk5hbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBsaW5rZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBwaG9uZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IHJlbWFyayBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IGxlZ2FsVHlwZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNyZWF0ZUNvbmZsaWN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcIm5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIm5hbWVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIm5hbWVWYWx1ZVwifSxcImFkZHJlc3NcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiYWRkcmVzc1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiYWRkcmVzc1ZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiYWRkcmVzc1ZhbHVlXCJ9LFwiY2FyZElkXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImNhcmRJZFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiY2FyZElkVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjYXJkSWRWYWx1ZVwifSxcImVtYWlsXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcImVtYWlsXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJlbWFpbFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiZW1haWxWYWx1ZVwifSxcImVuTmFtZVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJlbk5hbWVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcImVuTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiZW5OYW1lVmFsdWVcIn0sXCJsaW5rZXJcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwibGlua2VyXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJsaW5rZXJWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImxpbmtlclZhbHVlXCJ9LFwicGhvbmVcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwicGhvbmVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcInBob25lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwaG9uZVZhbHVlXCJ9LFwicmVtYXJrXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcInJlbWFya1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwicmVtYXJrVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJyZW1hcmtWYWx1ZVwifSxcImNhdGVnb3J5XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiY2F0ZWdvcnlcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJjYXRlZ29yeUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY2F0ZWdvcnlJbmRleFwifSxcImxlZ2FsVHlwZVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImxlZ2FsVHlwZVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcImxlZ2FsVHlwZUluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwibGVnYWxUeXBlSW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBjYXJkSWQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIGVuTmFtZSxcbiAgICAgICAgICAgIGxpbmtlcixcbiAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgcmVtYXJrLFxuICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICBsZWdhbFR5cGVcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICAgICAgICBjb25mbGljdEluZm86IHt9LFxuICAgICAgICAgICAgaXNDb25mbGljdEluZm86IGZhbHNlLFxuICAgICAgICAgICAgcHJldkxpc3RQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgY2FjaGVEYXRhOiB7XG4gICAgICAgICAgICAgICAgLy8gYWRkcmVzczogXCLlnLDlnYBcIlxuICAgICAgICAgICAgICAgIC8vIGNhcmRJZDogXCLouqvku73or4FcIlxuICAgICAgICAgICAgICAgIC8vIGNhc2VJZDogXCJcIlxuICAgICAgICAgICAgICAgIC8vIGNhdGVnb3J5OiBcIuWnlOaJmOaWuVwiXG4gICAgICAgICAgICAgICAgLy8gZW1haWw6IFwi6YKu566xXCJcbiAgICAgICAgICAgICAgICAvLyBlbk5hbWU6IFwi6Iux5paHXCJcbiAgICAgICAgICAgICAgICAvLyBpZDogXCJ0ZW1wMzUxNjE1NTQ4MjAyMTFcIlxuICAgICAgICAgICAgICAgIC8vIGxlZ2FsVHlwZTogXCLpppbluK3miafooYzlrphcIlxuICAgICAgICAgICAgICAgIC8vIGxpbmtlcjogXCLogZTns7vkurpcIlxuICAgICAgICAgICAgICAgIC8vIG5hbWU6IFwi5Lit5paHXCJcbiAgICAgICAgICAgICAgICAvLyBwaG9uZTogXCLnlLXor51cIlxuICAgICAgICAgICAgICAgIC8vIHJlbWFyazogXCLlpIfms6hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOS4reaWh1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lit5paH5ZCN56ewJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/oi7HmlodcbiAgICAgICAgICAgIGVuTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6Iux5paH5ZCN56ewJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW5OYW1lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbk5hbWVWYWx1ZTogJycsXG4gICAgICAgICAgICAvL+exu+WIq++8iOW/heWhq++8iVxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+exu+WIqycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1wiXCJdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3J5SW5kZXg6IDAsXG4gICAgICAgICAgICAvL+iBlOezu+S6ulxuICAgICAgICAgICAgbGlua2VyOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfogZTns7vkuronLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdsaW5rZXInLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmtlclZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v6IGM5Yqh57G75Z6LXG4gICAgICAgICAgICBsZWdhbFR5cGU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+iBjOWKoeexu+WeiycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xlZ2FsVHlwZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcIlwiXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1wi6K+36YCJ5oupXCJdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnYWxUeXBlSW5kZXg6IDAsXG4gICAgICAgICAgICAvL+eUteivnVxuICAgICAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eUteivnScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Bob25lJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaG9uZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v6YKu566x5Zyw5Z2AXG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6YKu566x5Zyw5Z2AJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/ouqvku73or4FcbiAgICAgICAgICAgIGNhcmRJZDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6Lqr5Lu96K+BJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2FyZElkJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXJkSWRWYWx1ZTogJycsXG4gICAgICAgICAgICAvL+WcsOWdgFxuICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zyw5Z2AJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWRkcmVzcycsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzc1ZhbHVlOiAnJyxcbiAgICAgICAgICAgIC8v5aSH5rOoXG4gICAgICAgICAgICByZW1hcms6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+Wkh+azqCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3JlbWFyaycsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1hcmtWYWx1ZTogJycsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlRGF0YS5uYW1lICYmIHRoaXMuY2FjaGVEYXRhLmNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVEYXRhLmlkID0gJ3RlbXBfJyt0aGlzLnJhbmRvbSgxLDEwMDAwMDAwMDAwMDAwMDApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3JlYXRlX2NvbmZsaWN0bGlzdF9kYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DT05GTElDVExJU1RfREFUQScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbmZsaWN0SW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlX2NvbmZsaWN0bGlzdF9kYXRhW3RoaXMuaWRdID0gdGhpcy5jYWNoZURhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVfY29uZmxpY3RsaXN0X2RhdGEucHVzaCh0aGlzLmNhY2hlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdDUkVBVEVfQ09ORkxJQ1RMSVNUX0RBVEEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY3JlYXRlX2NvbmZsaWN0bGlzdF9kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5a6M5oiQJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldkxpc3RQYWdlIHx8IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NvbmZsaWN0TGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5hbWUud2FybmluZz10cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhdGVnb3J5Lndhcm5pbmc9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBuYW1lVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlRGF0YS5uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbk5hbWVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVEYXRhLmVuTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcnlJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVEYXRhLmNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeS5kaXNwbGF5VGV4dFtpbmRleF07XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYWNoZURhdGEuY2F0ZWdvcnlUZXh0ID0gdGhpcy5jYXRlZ29yeS5kaXNwbGF5VGV4dFtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdhbFR5cGVJbmRleChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVEYXRhLmxlZ2FsVHlwZSA9IHRoaXMubGVnYWxUeXBlLnZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlRGF0YS5sZWdhbFR5cGVUZXh0ID0gdGhpcy5sZWdhbFR5cGUuZGlzcGxheVRleHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua2VyVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlRGF0YS5saW5rZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBob25lVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlRGF0YS5waG9uZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1haWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVEYXRhLmVtYWlsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXJkSWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVEYXRhLmNhcmRJZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzc1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZURhdGEuYWRkcmVzcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtYXJrVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlRGF0YS5yZW1hcmsgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgLy/pmo/mnLrmlbBcbiAgICAgICAgcmFuZG9tKGxvd2VyLCB1cHBlcikge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyICsgMSkpICsgbG93ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5bmoYjku7bkuJrliqHlrZDnsbtcbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvZGVDb21ib091dHB1dChrZXlXb3JkcywgUGFyZW50SWQsIERlcHRoID0gMCkge1xuICAgICAgICAgICAgUGFyZW50SWQgPSBQYXJlbnRJZCB8fCAnJztcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIENsYXNzOiBrZXlXb3JkcyxcbiAgICAgICAgICAgICAgICBEZXB0aCxcbiAgICAgICAgICAgICAgICBJc01heERlcHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIFBhcmVudElkLFxuICAgICAgICAgICAgICAgIElzUmVjdXJzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBpc0FsbDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBbJyddO1xuICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5VGV4dCA9IFsn6K+36YCJ5oupJ107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4ICsgMV0gPSByZXNEYXRhLmRhdGEucmVzdWx0W2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRleHRbaW5kZXggKyAxXSA9IHJlc0RhdGEuZGF0YS5yZXN1bHRbaW5kZXhdLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5V29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNBQ0xcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkuZGlzcGxheVRleHQgPSBkaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uZmxpY3RJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgY2F0ZWdvcnlfaW5kZXggaW4gdGhpcy5jYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yeS5kaXNwbGF5VGV4dFtjYXRlZ29yeV9pbmRleF0gPT0gdGhpcy5jb25mbGljdEluZm8uY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJbmRleCA9IGNhdGVnb3J5X2luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDTENEVFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWdhbFR5cGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVnYWxUeXBlLmRpc3BsYXlUZXh0ID0gZGlzcGxheVRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbmZsaWN0SW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGxlZ2FsVHlwZV9pbmRleCBpbiB0aGlzLmxlZ2FsVHlwZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWdhbFR5cGUudmFsdWVbbGVnYWxUeXBlX2luZGV4XSA9PSB0aGlzLmNvbmZsaWN0SW5mby5sZWdhbFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVnYWxUeXBlSW5kZXggPSBsZWdhbFR5cGVfaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVnYWxUeXBlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGZpbGxEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy5uYW1lVmFsdWUgPSB0aGlzLmNvbmZsaWN0SW5mby5uYW1lO1xuICAgICAgICAgICAgdGhpcy5lbk5hbWVWYWx1ZSA9IHRoaXMuY29uZmxpY3RJbmZvLmVuTmFtZTtcbiAgICAgICAgICAgIHRoaXMubGlua2VyVmFsdWUgPSB0aGlzLmNvbmZsaWN0SW5mby5saW5rZXI7XG4gICAgICAgICAgICB0aGlzLnBob25lVmFsdWUgPSB0aGlzLmNvbmZsaWN0SW5mby5waG9uZTtcbiAgICAgICAgICAgIHRoaXMuZW1haWxWYWx1ZSA9IHRoaXMuY29uZmxpY3RJbmZvLmVtYWlsO1xuICAgICAgICAgICAgdGhpcy5jYXJkSWRWYWx1ZSA9IHRoaXMuY29uZmxpY3RJbmZvLmNhcmRJZDtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc1ZhbHVlID0gdGhpcy5jb25mbGljdEluZm8uYWRkcmVzcztcbiAgICAgICAgICAgIHRoaXMucmVtYXJrVmFsdWUgPSB0aGlzLmNvbmZsaWN0SW5mby5yZW1hcms7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMubGlzdFBhZ2UgLG9wdGlvbnMuaWQpXG4gICAgICAgICAgICB2YXIgY29uZmxpY3RJbmZvRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ09ORkxJQ1RMSVNUX0RBVEEnKTtcbiAgICAgICAgICAgIGlmIChjb25mbGljdEluZm9EYXRhLmxlbmd0aCAhPT0gMCAmJiAhb3B0aW9ucy5saXN0UGFnZSAmJiAhb3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NvbmZsaWN0TGlzdCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5saXN0UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldkxpc3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RJbmZvID0gY29uZmxpY3RJbmZvRGF0YVsrb3B0aW9ucy5pZF07XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbmZsaWN0SW5mbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpbGxEYXRhKCk7XG4gICAgICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoJ0NBQ0wnKTtcbiAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgnQ0xDRFQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge307XG4gICAgfVxuIl19