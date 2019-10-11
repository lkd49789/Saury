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

var PrincipalInfo = function (_wepy$page) {
  _inherits(PrincipalInfo, _wepy$page);

  function PrincipalInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PrincipalInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PrincipalInfo.__proto__ || Object.getPrototypeOf(PrincipalInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ""
    }, _this.$repeat = {}, _this.$props = { "LegalPerson": { "xmlns:v-bind": "", "v-bind:options.sync": "LegalPerson", "v-bind:index.sync": "LegalPersonIndex", "v-bind:twoWayTitle.once": "LegalPersonIndex" }, "LegalDuty": { "v-bind:options.sync": "LegalDuty", "v-bind:index.sync": "LegalDutyIndex", "v-bind:twoWayTitle.once": "LegalDutyIndex" }, "Nation": { "v-bind:options.sync": "Nation", "v-bind:index.sync": "NationIndex", "v-bind:twoWayTitle.once": "NationIndex" }, "Linker": { "v-bind:input.sync": "Linker", "v-bind:inputValue.sync": "LinkerValue", "v-bind:twoWayTitle.once": "LinkerValue" }, "Landline": { "v-bind:input.sync": "Landline", "v-bind:inputValue.sync": "LandlineValue", "v-bind:twoWayTitle.once": "LandlineValue" }, "Fax": { "v-bind:input.sync": "Fax", "v-bind:inputValue.sync": "FaxValue", "v-bind:twoWayTitle.once": "FaxValue" }, "CardNo": { "v-bind:input.sync": "CardNo", "v-bind:inputValue.sync": "CardNoValue", "v-bind:twoWayTitle.once": "CardNoValue" }, "Occupation": { "v-bind:input.sync": "Occupation", "v-bind:inputValue.sync": "OccupationValue", "v-bind:twoWayTitle.once": "OccupationValue" }, "Email": { "v-bind:input.sync": "Email", "v-bind:inputValue.sync": "EmailValue", "v-bind:twoWayTitle.once": "EmailValue" } }, _this.$events = {}, _this.components = {
      LegalPerson: _option2.default,
      LegalDuty: _option2.default,
      Nation: _option2.default,
      Linker: _input2.default,
      Landline: _input2.default,
      Fax: _input2.default,
      CardNo: _input2.default,
      Occupation: _input2.default,
      Email: _input2.default
    }, _this.data = {
      addOpacity: 1,
      submitData: {},
      isShow: false,
      //代表类型
      LegalPerson: {
        title: '代表类型',
        name: 'LegalPerson',
        value: [""],
        displayText: ["请选择"],
        warning: false
      },
      LegalPersonIndex: 0,
      //客户联系人
      Linker: {
        title: '客户联系人',
        name: 'Linker',
        warning: false,
        type: 'text',
        options: false
      },
      LinkerValue: '',
      //职位
      LegalDuty: {
        title: '职位',
        name: 'LegalDuty',
        value: [""],
        displayText: ["请选择"],
        warning: false
      },
      LegalDutyIndex: 0,
      //座机
      Landline: {
        title: '座机',
        name: 'Landline',
        warning: false,
        type: 'text',
        options: false
      },
      LandlineValue: '',
      //传真
      Fax: {
        title: '传真',
        name: 'Fax',
        warning: false,
        type: 'text',
        options: false
      },
      FaxValue: '',
      //自然人
      //身份证
      CardNo: {
        title: '身份证',
        name: 'CardNo',
        warning: true,
        type: 'text',
        options: false
      },
      CardNoValue: '',
      //名族
      Nation: {
        title: '名族',
        name: 'Nation',
        value: [""],
        displayText: ["请选择"],
        warning: false
      },
      NationIndex: 0,
      //职业
      Occupation: {
        title: '职业',
        name: 'Occupation',
        warning: false,
        type: 'text',
        options: false
      },
      OccupationValue: '',
      Email: {
        title: '邮箱',
        name: 'Email',
        warning: false,
        type: 'text',
        options: false
      },
      EmailValue: ''
    }, _this.methods = {
      touchEnd: function touchEnd() {
        if (this.isShow || this.submitData.CardNo) {
          this.CreateOrUpdateClientBasic(this.submitData);
        } else {
          this.CardNo.warning = true;
          this.addOpacity = 1;
          wx.showToast({
            title: '请填写必填项！', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
        }
        this.$apply();
      },
      touchStart: function touchStart() {
        this.addOpacity = 0.6;
        this.$apply();
      },
      bindDateChange: function bindDateChange(e) {
        this.submitData.Birthday = e.detail.value;
        this.$apply();
      }
    }, _this.events = {}, _this.watch = {
      LegalPersonIndex: function LegalPersonIndex(index) {
        this.submitData.LegalPerson = this.LegalPerson.value[index];
        this.$apply();
      },
      LegalDutyIndex: function LegalDutyIndex(index) {
        this.submitData.LegalDuty = this.LegalDuty.value[index];
        this.$apply();
      },
      NationIndex: function NationIndex(index) {
        this.submitData.Nation = this.Nation.value[index];
        this.$apply();
      },
      LinkerValue: function LinkerValue(value) {
        this.submitData.Linker = value;
        this.$apply();
      },
      LandlineValue: function LandlineValue(value) {
        this.submitData.Landline = value;
        this.$apply();
      },
      FaxValue: function FaxValue(value) {
        this.submitData.Fax = value;
        this.$apply();
      },
      CardNoValue: function CardNoValue(value) {
        this.submitData.CardNo = value;
        this.$apply();
      },
      OccupationValue: function OccupationValue(value) {
        this.submitData.Occupation = value;
        this.$apply();
      },
      EmailValue: function EmailValue(value) {
        this.submitData.Email = value;
        this.$apply();
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PrincipalInfo, [{
    key: 'GetClientForEdit',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resData, GetClientForEdit_data, LegalPersonData, LegalDutyData, NationData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/client/GetClientForEdit', 'post', {});

              case 2:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  GetClientForEdit_data = resData.data.result;
                  //代表类型

                  LegalPersonData = this.cacheData(GetClientForEdit_data.legalPersonCombobox);

                  this.LegalPerson.value = this.LegalPerson.value.concat(LegalPersonData.value);
                  this.LegalPerson.displayText = this.LegalPerson.displayText.concat(LegalPersonData.displayText);
                  // //职位
                  LegalDutyData = this.cacheData(GetClientForEdit_data.legalDutyCombobox);

                  this.LegalDuty.value = this.LegalDuty.value.concat(LegalDutyData.value);
                  this.LegalDuty.displayText = this.LegalDuty.displayText.concat(LegalDutyData.displayText);
                  //民族
                  NationData = this.cacheData(GetClientForEdit_data.nationCombobox);

                  this.Nation.value = this.Nation.value.concat(NationData.value);
                  this.Nation.displayText = this.Nation.displayText.concat(NationData.displayText);
                }
                this.$apply();

              case 5:
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
  }, {
    key: 'CreateOrUpdateClientBasic',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var _this2 = this;

        var resData, pages, prevPage;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showLoading({
                  title: '提交中，请稍等！', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success() {
                    _this2.addOpacity = 1;
                    _this2.$apply();
                  }
                });
                _context2.next = 3;
                return _ajax2.default.getData('/api/services/web/client/CreateOrUpdateClientBasic', 'post', data);

              case 3:
                resData = _context2.sent;

                if (resData.statusCode == 200) {
                  pages = getCurrentPages();
                  prevPage = pages[pages.length - 3]; //上两个页面

                  if (prevPage) {
                    prevPage.isDataRefresh(resData.data.result.id);
                    wx.navigateBack({
                      delta: 2 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                    });
                  }
                } else {
                  wx.showToast({
                    title: resData.data.error.message, //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: true, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                  });
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function CreateOrUpdateClientBasic(_x) {
        return _ref3.apply(this, arguments);
      }

      return CreateOrUpdateClientBasic;
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
    value: function onLoad() {
      var _this3 = this;

      wx.getStorage({
        key: 'CLIENT_CREATE_DATA',
        success: function success(res) {
          console.log(res.data);
          _this3.submitData = res.data;
          if (_this3.submitData.Category == '10' || _this3.submitData.Category == '100') {
            _this3.isShow = false;
          } else {
            _this3.isShow = true;
          }
          _this3.$apply();
        },
        fail: function fail() {},
        complete: function complete() {}
      });
      this.GetClientForEdit();
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      wx.removeStorage({
        key: 'CLIENT_CREATE_DATA',
        success: function success(res) {
          console.log("===创建客户数据已清除======");
        }
      });
    }
  }]);

  return PrincipalInfo;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(PrincipalInfo , 'pages/modules/myclient/createClient/createClientPrincipalInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUNsaWVudFByaW5jaXBhbEluZm8uanMiXSwibmFtZXMiOlsiUHJpbmNpcGFsSW5mbyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJMZWdhbFBlcnNvbiIsIkxlZ2FsRHV0eSIsIk5hdGlvbiIsIkxpbmtlciIsIkxhbmRsaW5lIiwiRmF4IiwiQ2FyZE5vIiwiT2NjdXBhdGlvbiIsIkVtYWlsIiwiZGF0YSIsImFkZE9wYWNpdHkiLCJzdWJtaXREYXRhIiwiaXNTaG93IiwidGl0bGUiLCJuYW1lIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsIndhcm5pbmciLCJMZWdhbFBlcnNvbkluZGV4IiwidHlwZSIsIm9wdGlvbnMiLCJMaW5rZXJWYWx1ZSIsIkxlZ2FsRHV0eUluZGV4IiwiTGFuZGxpbmVWYWx1ZSIsIkZheFZhbHVlIiwiQ2FyZE5vVmFsdWUiLCJOYXRpb25JbmRleCIsIk9jY3VwYXRpb25WYWx1ZSIsIkVtYWlsVmFsdWUiLCJtZXRob2RzIiwidG91Y2hFbmQiLCJDcmVhdGVPclVwZGF0ZUNsaWVudEJhc2ljIiwid3giLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsIiRhcHBseSIsInRvdWNoU3RhcnQiLCJiaW5kRGF0ZUNoYW5nZSIsImUiLCJCaXJ0aGRheSIsImRldGFpbCIsImV2ZW50cyIsIndhdGNoIiwiaW5kZXgiLCJjb21wdXRlZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJHZXRDbGllbnRGb3JFZGl0X2RhdGEiLCJyZXN1bHQiLCJMZWdhbFBlcnNvbkRhdGEiLCJjYWNoZURhdGEiLCJsZWdhbFBlcnNvbkNvbWJvYm94IiwiY29uY2F0IiwiTGVnYWxEdXR5RGF0YSIsImxlZ2FsRHV0eUNvbWJvYm94IiwiTmF0aW9uRGF0YSIsIm5hdGlvbkNvbWJvYm94Iiwic2hvd0xvYWRpbmciLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwiaXNEYXRhUmVmcmVzaCIsImlkIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJmaWx0ZXJEYXRhIiwiZ2V0U3RvcmFnZSIsImtleSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJDYXRlZ29yeSIsImZhaWwiLCJjb21wbGV0ZSIsIkdldENsaWVudEZvckVkaXQiLCJyZW1vdmVTdG9yYWdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQVFxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixhQUF6QyxFQUF1RCxxQkFBb0Isa0JBQTNFLEVBQThGLDJCQUEwQixrQkFBeEgsRUFBZixFQUEySixhQUFZLEVBQUMsdUJBQXNCLFdBQXZCLEVBQW1DLHFCQUFvQixnQkFBdkQsRUFBd0UsMkJBQTBCLGdCQUFsRyxFQUF2SyxFQUEyUixVQUFTLEVBQUMsdUJBQXNCLFFBQXZCLEVBQWdDLHFCQUFvQixhQUFwRCxFQUFrRSwyQkFBMEIsYUFBNUYsRUFBcFMsRUFBK1ksVUFBUyxFQUFDLHFCQUFvQixRQUFyQixFQUE4QiwwQkFBeUIsYUFBdkQsRUFBcUUsMkJBQTBCLGFBQS9GLEVBQXhaLEVBQXNnQixZQUFXLEVBQUMscUJBQW9CLFVBQXJCLEVBQWdDLDBCQUF5QixlQUF6RCxFQUF5RSwyQkFBMEIsZUFBbkcsRUFBamhCLEVBQXFvQixPQUFNLEVBQUMscUJBQW9CLEtBQXJCLEVBQTJCLDBCQUF5QixVQUFwRCxFQUErRCwyQkFBMEIsVUFBekYsRUFBM29CLEVBQWd2QixVQUFTLEVBQUMscUJBQW9CLFFBQXJCLEVBQThCLDBCQUF5Qixh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QUwsR0FBa0JpRSxJQUFJbkUsSUFBdEI7QUFDQSxjQUFJLE9BQUtFLFVBQUwsQ0FBZ0JvRSxRQUFoQixJQUE0QixJQUE1QixJQUFvQyxPQUFLcEUsVUFBTCxDQUFnQm9FLFFBQWhCLElBQTRCLEtBQXBFLEVBQTJFO0FBQ3pFLG1CQUFLbkUsTUFBTCxHQUFjLEtBQWQ7QUFDRCxXQUZELE1BRU87QUFDTCxtQkFBS0EsTUFBTCxHQUFjLElBQWQ7QUFDRDtBQUNELGlCQUFLMEIsTUFBTDtBQUNELFNBWFc7QUFZWjBDLGNBQU0sZ0JBQU0sQ0FBRSxDQVpGO0FBYVpDLGtCQUFVLG9CQUFNLENBQUU7QUFiTixPQUFkO0FBZUEsV0FBS0MsZ0JBQUw7QUFDRDs7OytCQUNVO0FBQ1RsRCxTQUFHbUQsYUFBSCxDQUFpQjtBQUNmUixhQUFLLG9CQURVO0FBRWZ0QyxlQUZlLG1CQUVQdUMsR0FGTyxFQUVGO0FBQ1hDLGtCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF2UXdDTSxlQUFLQyxJOztrQkFBM0I1RixhIiwiZmlsZSI6ImNyZWF0ZUNsaWVudFByaW5jaXBhbEluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICBpbXBvcnQgTGlua2VyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgaW1wb3J0IExlZ2FsUGVyc29uIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gIGltcG9ydCBMZWdhbER1dHkgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgaW1wb3J0IE5hdGlvbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICBpbXBvcnQgTGFuZGxpbmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICBpbXBvcnQgRmF4IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgaW1wb3J0IEVtYWlsIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgaW1wb3J0IENhcmRObyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gIGltcG9ydCBPY2N1cGF0aW9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbmNpcGFsSW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCJcIixcbiAgICB9O1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJMZWdhbFBlcnNvblwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJMZWdhbFBlcnNvblwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkxlZ2FsUGVyc29uSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJMZWdhbFBlcnNvbkluZGV4XCJ9LFwiTGVnYWxEdXR5XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiTGVnYWxEdXR5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiTGVnYWxEdXR5SW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJMZWdhbER1dHlJbmRleFwifSxcIk5hdGlvblwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcIk5hdGlvblwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIk5hdGlvbkluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTmF0aW9uSW5kZXhcIn0sXCJMaW5rZXJcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiTGlua2VyXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJMaW5rZXJWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkxpbmtlclZhbHVlXCJ9LFwiTGFuZGxpbmVcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiTGFuZGxpbmVcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkxhbmRsaW5lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJMYW5kbGluZVZhbHVlXCJ9LFwiRmF4XCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkZheFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRmF4VmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJGYXhWYWx1ZVwifSxcIkNhcmROb1wiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJDYXJkTm9cIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkNhcmROb1ZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ2FyZE5vVmFsdWVcIn0sXCJPY2N1cGF0aW9uXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIk9jY3VwYXRpb25cIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIk9jY3VwYXRpb25WYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIk9jY3VwYXRpb25WYWx1ZVwifSxcIkVtYWlsXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkVtYWlsXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJFbWFpbFZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiRW1haWxWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBMZWdhbFBlcnNvbixcbiAgICAgIExlZ2FsRHV0eSxcbiAgICAgIE5hdGlvbixcbiAgICAgIExpbmtlcixcbiAgICAgIExhbmRsaW5lLFxuICAgICAgRmF4LFxuICAgICAgQ2FyZE5vLFxuICAgICAgT2NjdXBhdGlvbixcbiAgICAgIEVtYWlsXG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgYWRkT3BhY2l0eTogMSxcbiAgICAgIHN1Ym1pdERhdGE6IHt9LFxuICAgICAgaXNTaG93OiBmYWxzZSxcbiAgICAgIC8v5Luj6KGo57G75Z6LXG4gICAgICBMZWdhbFBlcnNvbjoge1xuICAgICAgICB0aXRsZTogJ+S7o+ihqOexu+WeiycsXG4gICAgICAgIG5hbWU6ICdMZWdhbFBlcnNvbicsXG4gICAgICAgIHZhbHVlOiBbXCJcIl0sXG4gICAgICAgIGRpc3BsYXlUZXh0OiBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgTGVnYWxQZXJzb25JbmRleDogMCxcbiAgICAgIC8v5a6i5oi36IGU57O75Lq6XG4gICAgICBMaW5rZXI6IHtcbiAgICAgICAgdGl0bGU6ICflrqLmiLfogZTns7vkuronLFxuICAgICAgICBuYW1lOiAnTGlua2VyJyxcbiAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgIH0sXG4gICAgICBMaW5rZXJWYWx1ZTogJycsXG4gICAgICAvL+iBjOS9jVxuICAgICAgTGVnYWxEdXR5OiB7XG4gICAgICAgIHRpdGxlOiAn6IGM5L2NJyxcbiAgICAgICAgbmFtZTogJ0xlZ2FsRHV0eScsXG4gICAgICAgIHZhbHVlOiBbXCJcIl0sXG4gICAgICAgIGRpc3BsYXlUZXh0OiBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgTGVnYWxEdXR5SW5kZXg6IDAsXG4gICAgICAvL+W6p+aculxuICAgICAgTGFuZGxpbmU6IHtcbiAgICAgICAgdGl0bGU6ICfluqfmnLonLFxuICAgICAgICBuYW1lOiAnTGFuZGxpbmUnLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIExhbmRsaW5lVmFsdWU6ICcnLFxuICAgICAgLy/kvKDnnJ9cbiAgICAgIEZheDoge1xuICAgICAgICB0aXRsZTogJ+S8oOecnycsXG4gICAgICAgIG5hbWU6ICdGYXgnLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIEZheFZhbHVlOiAnJyxcbiAgICAgIC8v6Ieq54S25Lq6XG4gICAgICAvL+i6q+S7veivgVxuICAgICAgQ2FyZE5vOiB7XG4gICAgICAgIHRpdGxlOiAn6Lqr5Lu96K+BJyxcbiAgICAgICAgbmFtZTogJ0NhcmRObycsXG4gICAgICAgIHdhcm5pbmc6IHRydWUsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgIH0sXG4gICAgICBDYXJkTm9WYWx1ZTogJycsXG4gICAgICAvL+WQjeaXj1xuICAgICAgTmF0aW9uOiB7XG4gICAgICAgIHRpdGxlOiAn5ZCN5pePJyxcbiAgICAgICAgbmFtZTogJ05hdGlvbicsXG4gICAgICAgIHZhbHVlOiBbXCJcIl0sXG4gICAgICAgIGRpc3BsYXlUZXh0OiBbXCLor7fpgInmi6lcIl0sXG4gICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgTmF0aW9uSW5kZXg6IDAsXG4gICAgICAvL+iBjOS4mlxuICAgICAgT2NjdXBhdGlvbjoge1xuICAgICAgICB0aXRsZTogJ+iBjOS4micsXG4gICAgICAgIG5hbWU6ICdPY2N1cGF0aW9uJyxcbiAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgb3B0aW9uczogZmFsc2VcbiAgICAgIH0sXG4gICAgICBPY2N1cGF0aW9uVmFsdWU6ICcnLFxuICAgICAgRW1haWw6IHtcbiAgICAgICAgdGl0bGU6ICfpgq7nrrEnLFxuICAgICAgICBuYW1lOiAnRW1haWwnLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBvcHRpb25zOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIEVtYWlsVmFsdWU6ICcnLFxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvdWNoRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Nob3cgfHwgdGhpcy5zdWJtaXREYXRhLkNhcmRObykge1xuICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVDbGllbnRCYXNpYyh0aGlzLnN1Ym1pdERhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuQ2FyZE5vLndhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDE7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWRkT3BhY2l0eSA9IDAuNjtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc3VibWl0RGF0YS5CaXJ0aGRheSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgZXZlbnRzID0ge307XG4gICAgd2F0Y2ggPSB7XG4gICAgICBMZWdhbFBlcnNvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3VibWl0RGF0YS5MZWdhbFBlcnNvbiA9IHRoaXMuTGVnYWxQZXJzb24udmFsdWVbaW5kZXhdO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIExlZ2FsRHV0eUluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3VibWl0RGF0YS5MZWdhbER1dHkgPSB0aGlzLkxlZ2FsRHV0eS52YWx1ZVtpbmRleF07XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgTmF0aW9uSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zdWJtaXREYXRhLk5hdGlvbiA9IHRoaXMuTmF0aW9uLnZhbHVlW2luZGV4XTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBMaW5rZXJWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTGlua2VyID0gdmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgTGFuZGxpbmVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEuTGFuZGxpbmUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBGYXhWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEuRmF4ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgQ2FyZE5vVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdWJtaXREYXRhLkNhcmRObyA9IHZhbHVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIE9jY3VwYXRpb25WYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEuT2NjdXBhdGlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIEVtYWlsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdWJtaXREYXRhLkVtYWlsID0gdmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb21wdXRlZCA9IHt9O1xuICAgIGFzeW5jIEdldENsaWVudEZvckVkaXQoKSB7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NsaWVudC9HZXRDbGllbnRGb3JFZGl0JyxcbiAgICAgICAgJ3Bvc3QnLCB7fVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgdmFyIEdldENsaWVudEZvckVkaXRfZGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgIC8v5Luj6KGo57G75Z6LXG4gICAgICAgIHZhciBMZWdhbFBlcnNvbkRhdGEgPSB0aGlzLmNhY2hlRGF0YShHZXRDbGllbnRGb3JFZGl0X2RhdGEubGVnYWxQZXJzb25Db21ib2JveClcbiAgICAgICAgdGhpcy5MZWdhbFBlcnNvbi52YWx1ZSA9IHRoaXMuTGVnYWxQZXJzb24udmFsdWUuY29uY2F0KExlZ2FsUGVyc29uRGF0YS52YWx1ZSk7XG4gICAgICAgIHRoaXMuTGVnYWxQZXJzb24uZGlzcGxheVRleHQgPSB0aGlzLkxlZ2FsUGVyc29uLmRpc3BsYXlUZXh0LmNvbmNhdChMZWdhbFBlcnNvbkRhdGEuZGlzcGxheVRleHQpO1xuICAgICAgICAvLyAvL+iBjOS9jVxuICAgICAgICB2YXIgTGVnYWxEdXR5RGF0YSA9IHRoaXMuY2FjaGVEYXRhKEdldENsaWVudEZvckVkaXRfZGF0YS5sZWdhbER1dHlDb21ib2JveClcbiAgICAgICAgdGhpcy5MZWdhbER1dHkudmFsdWUgPSB0aGlzLkxlZ2FsRHV0eS52YWx1ZS5jb25jYXQoTGVnYWxEdXR5RGF0YS52YWx1ZSk7XG4gICAgICAgIHRoaXMuTGVnYWxEdXR5LmRpc3BsYXlUZXh0ID0gdGhpcy5MZWdhbER1dHkuZGlzcGxheVRleHQuY29uY2F0KExlZ2FsRHV0eURhdGEuZGlzcGxheVRleHQpO1xuICAgICAgICAvL+awkeaXj1xuICAgICAgICB2YXIgTmF0aW9uRGF0YSA9IHRoaXMuY2FjaGVEYXRhKEdldENsaWVudEZvckVkaXRfZGF0YS5uYXRpb25Db21ib2JveClcbiAgICAgICAgdGhpcy5OYXRpb24udmFsdWUgPSB0aGlzLk5hdGlvbi52YWx1ZS5jb25jYXQoTmF0aW9uRGF0YS52YWx1ZSk7XG4gICAgICAgIHRoaXMuTmF0aW9uLmRpc3BsYXlUZXh0ID0gdGhpcy5OYXRpb24uZGlzcGxheVRleHQuY29uY2F0KE5hdGlvbkRhdGEuZGlzcGxheVRleHQpO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgYXN5bmMgQ3JlYXRlT3JVcGRhdGVDbGllbnRCYXNpYyhkYXRhKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50L0NyZWF0ZU9yVXBkYXRlQ2xpZW50QmFzaWMnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAzXTsgLy/kuIrkuKTkuKrpobXpnaJcbiAgICAgICAgaWYgKHByZXZQYWdlKSB7XG4gICAgICAgICAgcHJldlBhZ2UuaXNEYXRhUmVmcmVzaChyZXNEYXRhLmRhdGEucmVzdWx0LmlkKTtcbiAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDIgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZXJyb3IubWVzc2FnZSwgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjYWNoZURhdGEoZGF0YSkge1xuICAgICAgdmFyIHZhbHVlID0gW107XG4gICAgICB2YXIgZGlzcGxheVRleHQgPSBbXTtcbiAgICAgIGZvciAodmFyIGluZGV4IGluIGRhdGEpIHtcbiAgICAgICAgdmFsdWVbaW5kZXhdID0gZGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgIGRpc3BsYXlUZXh0W2luZGV4XSA9IGRhdGFbaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgfVxuICAgICAgdmFyIGZpbHRlckRhdGEgPSB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBkaXNwbGF5VGV4dFxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbHRlckRhdGFcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ0NMSUVOVF9DUkVBVEVfREFUQScsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICBpZiAodGhpcy5zdWJtaXREYXRhLkNhdGVnb3J5ID09ICcxMCcgfHwgdGhpcy5zdWJtaXREYXRhLkNhdGVnb3J5ID09ICcxMDAnKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XG4gICAgICB9KVxuICAgICAgdGhpcy5HZXRDbGllbnRGb3JFZGl0KCk7XG4gICAgfTtcbiAgICBvblVubG9hZCgpIHtcbiAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDTElFTlRfQ1JFQVRFX0RBVEEnLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT095Yib5bu65a6i5oi35pWw5o2u5bey5riF6ZmkPT09PT09XCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=