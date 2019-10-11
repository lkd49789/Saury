'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _pickerOption = require('./../../../components/picker/pickerOption.js');

var _pickerOption2 = _interopRequireDefault(_pickerOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createProject = function (_wepy$page) {
  _inherits(createProject, _wepy$page);

  function createProject() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, createProject);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = createProject.__proto__ || Object.getPrototypeOf(createProject)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "Description": { "v-bind:input.sync": "Description", "v-bind:inputValue.sync": "DescriptionValue", "v-bind:twoWayTitle.once": "DescriptionValue" }, "Privacy": { "v-bind:options.sync": "Privacy", "v-bind:index.sync": "PrivacyIndex", "v-bind:twoWayTitle.once": "PrivacyIndex" }, "TemplateId": { "v-bind:options.sync": "TemplateId", "v-bind:index.sync": "TemplateIdIndex", "v-bind:twoWayTitle.once": "TemplateIdIndex" } }, _this.$events = {}, _this.components = {
      Name: _input2.default,
      Description: _input2.default,
      Privacy: _pickerOption2.default,
      TemplateId: _pickerOption2.default
    }, _this.data = {
      subData: {
        CaseId: "",
        Category: "",
        ClientId: "",
        Cover: "",
        CreationTime: "",
        Description: "",
        Id: "",
        Name: "",
        Privacy: "",
        TemplateId: "",
        inputTemplate: "",
        StageIds: '',
        checkbox: ''
      },
      Category: [],
      ClientIdValue: '',
      CaseIdValue: '',
      CoverImage: '',
      Name: {
        title: '项目名称',
        name: 'Name',
        warning: true
      },
      NameValue: '',
      Description: {
        title: '项目描述',
        name: 'Description',
        warning: false,
        isShow: true
      },
      DescriptionValue: '',
      inputTemplate: [{
        displayText: '自定义数据',
        value: '-1',
        checked: true
      }, {
        displayText: '个人模板',
        value: '0'
      }, {
        displayText: '系统模板',
        value: '1'
      }],
      Privacy: {
        title: '项目隐私性',
        name: 'Privacy',
        data: [{
          displayText: '私有项目',
          value: '1'
        }, {
          displayText: '公开项目',
          value: '0'
        }],
        key: 'displayText',
        warning: false
      },
      PrivacyIndex: 0,
      TemplateId: {
        name: 'TemplateId',
        data: [],
        key: 'name',
        warning: false
      },
      TemplateIdIndex: -1,
      TemplateIdArrayIndex: [0, 0],
      TemplateIdArray: [],
      TemplateIdDataArray: [],
      TemplateIdText: '请选择',
      //模板阶段
      applicationStages: []
    }, _this.methods = {
      deleteValue: function deleteValue(keywords) {
        switch (keywords) {
          case 'ClientIdValue':
            this.ClientIdValue = '';
            this.subData.ClientId = '';
            break;
          case 'CaseIdValue':
            this.CaseIdValue = '';
            this.subData.CaseId = '';
            break;

          default:
            break;
        }
        this.$apply();
      },
      SubmitData: function SubmitData() {
        if (this.subData.Category !== '2' && this.subData.Category) {
          this.CreateOrUpdateTaskProject();
        } else if (this.subData.Category == '2' && this.subData.Name) {
          this.CreateOrUpdateTaskProject();
        } else {
          wx.showToast({
            title: '请填写必填项！', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: false, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
        }
      },
      checkboxChange: function checkboxChange(e) {
        console.log(e.detail.value);
        this.subData.checkbox = e.detail.value[e.detail.value.length - 1];
        this.subData.StageIds = e.detail.value.toString();
        this.$apply();
      },
      bindMultiPickerChange: function bindMultiPickerChange(e) {
        var value = e.detail.value;
        this.TemplateIdArrayIndex = value;
        if (this.TemplateIdArray[1][value[1]]) {
          this.TemplateIdText = this.TemplateIdArray[0][value[0]] + '/' + this.TemplateIdArray[1][value[1]];
          this.subData.TemplateId = this.TemplateIdDataArray[value[0]].templates[value[1]].id;
          this.GetApplicationStages(this.subData.TemplateId);
        } else {
          this.TemplateIdText = this.TemplateIdArray[0][value[0]];
          this.applicationStages = [];
          this.subData.checkbox = '';
          this.subData.StageIds = [];
        }
        this.$apply();
      },
      bindMultiPickerColumnChange: function bindMultiPickerColumnChange(e) {
        if (e.detail.column == 0) {
          this.TemplateIdArrayIndex[1] = 0;
          this.TemplateIdArray[1] = [];
          this.GetApplicationTemplatesWithGroup(e.detail.value);
        }
        this.$apply();
      },
      radioChangeTemplate: function radioChangeTemplate(e) {
        this.subData.inputTemplate = e.detail.value;
        this.TemplateId.data = [];
        this.subData.TemplateId = '';
        this.applicationStages = [];
        this.subData.checkbox = '';
        this.subData.StageIds = '';
        switch (e.detail.value) {
          case '0':
            this.TemplateIdIndex = -1;
            this.GetTemplatesWithGroup();
            break;
          case '1':
            this.TemplateIdArrayIndex = [0, 0];
            this.TemplateIdText = '';
            this.TemplateIdArray = [[], []];
            this.GetApplicationTemplatesWithGroup(0);
            break;
          default:
            this.TemplateIdIndex = -1;
            break;
        }
        this.$apply();
      },
      upLoadImage: function upLoadImage() {
        var _this2 = this;

        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths;
            _this2.UploadProjectCover(tempFilePaths[0]);
          }
        });
      },
      radioChange: function radioChange(e) {
        this.NameValue = '';
        this.subData.Name = '';
        this.ClientIdValue = '';
        this.subData.ClientId = '';
        this.CaseIdValue = '';
        this.subData.CaseId = '';
        this.subData.Category = e.detail.value;
        this.$apply();
      },
      chooseClientName: function chooseClientName() {
        wx.navigateTo({
          url: './caseClientSearch/searchCaseClient?class=client'
        });
      },
      chooseCaseIdName: function chooseCaseIdName() {
        if (this.subData.ClientId) {
          wx.navigateTo({
            url: './caseClientSearch/searchCaseClient?class=case' + '&parentId=' + this.subData.ClientId
          });
        } else {
          wx.navigateTo({
            url: './caseClientSearch/searchCaseClient?class=case'
          });
        }
      }
    }, _this.watch = {
      TemplateIdIndex: function TemplateIdIndex(index) {
        if (this.subData.inputTemplate == '0' && this.TemplateId.data.length > 0) {
          this.subData.TemplateId = this.TemplateId.data[index].id;
          this.GetStages(this.subData.TemplateId);
        }
        this.$apply();
      },
      NameValue: function NameValue(value) {
        this.subData.Name = value;
        this.$apply();
      },
      DescriptionValue: function DescriptionValue(value) {
        this.subData.Description = value;
        this.$apply();
      },
      PrivacyIndex: function PrivacyIndex(index) {
        this.subData.Privacy = this.Privacy.data[index].value;
        this.$apply();
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(createProject, [{
    key: 'GetGeneralCodeComboOutput',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboOutput', 'post', {
                  class: "TPCT"
                });

              case 2:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  this.Category = resData.data.result;
                  this.$apply();
                } else {
                  wx.showToast({
                    title: '网络错误！', //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: false, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                  });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetGeneralCodeComboOutput() {
        return _ref2.apply(this, arguments);
      }

      return GetGeneralCodeComboOutput;
    }()
  }, {
    key: 'GetTemplatesWithGroup',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var resData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ajax2.default.getData('/api/services/web/taskTemplate/GetTemplatesWithGroup', 'post', {});

              case 2:
                resData = _context2.sent;

                if (resData.statusCode == 200) {
                  this.TemplateId.data = resData.data.result.items[0].templates;
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetTemplatesWithGroup() {
        return _ref3.apply(this, arguments);
      }

      return GetTemplatesWithGroup;
    }()
  }, {
    key: 'GetApplicationTemplatesWithGroup',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(index) {
        var resData, TemplateIdData, i, j;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ajax2.default.getData('/api/services/web/taskTemplate/GetApplicationTemplatesWithGroup', 'post', {});

              case 2:
                resData = _context3.sent;

                if (resData.statusCode == 200) {
                  TemplateIdData = resData.data.result.items;

                  this.TemplateIdDataArray = TemplateIdData;
                  if (!index) {
                    for (i = 0; i < TemplateIdData.length; i++) {
                      this.TemplateIdArray[0].push(TemplateIdData[i].name);
                    }
                    for (j = 0; j < TemplateIdData[0].templates.length; j++) {
                      this.TemplateIdArray[1][j] = TemplateIdData[0].templates[j].name;
                    }
                  } else {
                    if (TemplateIdData[index].templates) {
                      for (j = 0; j < TemplateIdData[index].templates.length; j++) {
                        this.TemplateIdArray[1][j] = TemplateIdData[index].templates[j].name;
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

      function GetApplicationTemplatesWithGroup(_x) {
        return _ref4.apply(this, arguments);
      }

      return GetApplicationTemplatesWithGroup;
    }()
  }, {
    key: 'GetApplicationStages',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(templateId) {
        var resData, applicationStages, Stages;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _ajax2.default.getData('/api/services/web/taskTemplate/GetApplicationStages', 'post', {
                  templateId: templateId
                });

              case 2:
                resData = _context4.sent;

                if (resData.statusCode == 200) {
                  applicationStages = resData.data.result.items;

                  applicationStages.map(function (item) {
                    item.checked = true;
                    return item;
                  });
                  Stages = applicationStages.map(function (item, index) {
                    return item.id;
                  });

                  this.subData.StageIds = Stages.toString();
                  this.subData.checkbox = Stages[Stages.length - 1];
                  this.applicationStages = applicationStages;
                  if (this.applicationStages.length > 0) {
                    this.pageScrollToBottom();
                  }
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GetApplicationStages(_x2) {
        return _ref5.apply(this, arguments);
      }

      return GetApplicationStages;
    }()
  }, {
    key: 'GetStages',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(templateId) {
        var resData, applicationStages, Stages;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _ajax2.default.getData('/api/services/web/taskTemplate/GetStages', 'post', {
                  templateId: templateId
                });

              case 2:
                resData = _context5.sent;

                if (resData.statusCode == 200) {
                  applicationStages = resData.data.result.items;

                  applicationStages.map(function (item) {
                    item.checked = true;
                    return item;
                  });
                  Stages = applicationStages.map(function (item, index) {
                    return item.id;
                  });

                  this.subData.StageIds = Stages.toString();
                  this.subData.checkbox = Stages[Stages.length - 1];
                  this.applicationStages = applicationStages;
                  if (this.applicationStages.length > 0) {
                    this.pageScrollToBottom();
                  }
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function GetStages(_x3) {
        return _ref6.apply(this, arguments);
      }

      return GetStages;
    }()
    //提交数据

  }, {
    key: 'CreateOrUpdateTaskProject',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var resData;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _ajax2.default.getData('/api/services/web/taskProject/CreateOrUpdateTaskProject', 'post', this.subData);

              case 2:
                resData = _context6.sent;

                console.log(resData);
                if (resData.statusCode == 200) {
                  wx.showLoading({
                    title: 'Loading...', //提示的内容,
                    mask: true, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {
                      var pages = getCurrentPages();
                      var prevPage = pages[pages.length - 2]; //上一个页面
                      if (prevPage) {
                        prevPage.isRefresh();
                        wx.navigateBack({
                          delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                      }
                    }
                  });
                } else {
                  wx.showToast({
                    title: resData.data.error.message, //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: false, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                  });
                }

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function CreateOrUpdateTaskProject() {
        return _ref7.apply(this, arguments);
      }

      return CreateOrUpdateTaskProject;
    }()
    //上传图片

  }, {
    key: 'UploadProjectCover',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(image) {
        var resData, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                wx.showLoading({
                  title: 'Loading...', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                _context7.next = 3;
                return _ajax2.default.uploadFile('/api/services/web/taskProject/UploadProjectCover', image, {
                  Id: this.subData.Id
                });

              case 3:
                resData = _context7.sent;
                result = JSON.parse(resData.data);

                if (resData.statusCode == 200) {
                  this.subData.Cover = result.result;
                  this.CoverImage = image;
                } else {
                  wx.showToast({
                    title: result.error.message, //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: false, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                  });
                }
                this.$apply();

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function UploadProjectCover(_x4) {
        return _ref8.apply(this, arguments);
      }

      return UploadProjectCover;
    }()
  }, {
    key: 'isRefresh',
    value: function isRefresh(item) {
      console.log(item);
      if (item.class == "client") {
        if (this.subData.Category == '1') {
          this.ClientIdValue = item.displayText;
          this.subData.ClientId = item.value;
          this.subData.Name = item.displayText;
        } else {
          this.ClientIdValue = item.displayText;
          this.subData.ClientId = item.value;
        }
      } else if (item.class == "case") {
        this.CaseIdValue = item.displayText;
        this.subData.CaseId = item.value;
        this.subData.Name = item.displayText;
      } else this.$apply();
    }
  }, {
    key: 'pageScrollToBottom',
    value: function pageScrollToBottom() {
      wx.createSelectorQuery().select('#container').boundingClientRect(function (rect) {
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.bottom
        });
      }).exec();
    }
    //随机数

  }, {
    key: 'random',
    value: function random(lower, upper) {
      return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.subData.Id = 'temp_' + this.random(0, 100000000000);
      this.subData.inputTemplate = this.inputTemplate[0].value;
      this.subData.Privacy = this.Privacy.data[0].value;
      this.GetGeneralCodeComboOutput();
      this.GetTemplatesWithGroup();
    }
  }]);

  return createProject;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(createProject , 'pages/modules/myTaskCourse/createProject'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZVByb2plY3QuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJvamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIk5hbWUiLCJEZXNjcmlwdGlvbiIsIlByaXZhY3kiLCJUZW1wbGF0ZUlkIiwiZGF0YSIsInN1YkRhdGEiLCJDYXNlSWQiLCJDYXRlZ29yeSIsIkNsaWVudElkIiwiQ292ZXIiLCJDcmVhdGlvblRpbWUiLCJJZCIsImlucHV0VGVtcGxhdGUiLCJTdGFnZUlkcyIsImNoZWNrYm94IiwiQ2xpZW50SWRWYWx1ZSIsIkNhc2VJZFZhbHVlIiwiQ292ZXJJbWFnZSIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJOYW1lVmFsdWUiLCJpc1Nob3ciLCJEZXNjcmlwdGlvblZhbHVlIiwiZGlzcGxheVRleHQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJrZXkiLCJQcml2YWN5SW5kZXgiLCJUZW1wbGF0ZUlkSW5kZXgiLCJUZW1wbGF0ZUlkQXJyYXlJbmRleCIsIlRlbXBsYXRlSWRBcnJheSIsIlRlbXBsYXRlSWREYXRhQXJyYXkiLCJUZW1wbGF0ZUlkVGV4dCIsImFwcGxpY2F0aW9uU3RhZ2VzIiwibWV0aG9kcyIsImRlbGV0ZVZhbHVlIiwia2V5d29yZHMiLCIkYXBwbHkiLCJTdWJtaXREYXRhIiwiQ3JlYXRlT3JVcGRhdGVUYXNrUHJvamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJjaGVja2JveENoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwibGVuZ3RoIiwidG9TdHJpbmciLCJiaW5kTXVsdGlQaWNrZXJDaGFuZ2UiLCJ0ZW1wbGF0ZXMiLCJpZCIsIkdldEFwcGxpY2F0aW9uU3RhZ2VzIiwiYmluZE11bHRpUGlja2VyQ29sdW1uQ2hhbmdlIiwiY29sdW1uIiwiR2V0QXBwbGljYXRpb25UZW1wbGF0ZXNXaXRoR3JvdXAiLCJyYWRpb0NoYW5nZVRlbXBsYXRlIiwiR2V0VGVtcGxhdGVzV2l0aEdyb3VwIiwidXBMb2FkSW1hZ2UiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIlVwbG9hZFByb2plY3RDb3ZlciIsInJhZGlvQ2hhbmdlIiwiY2hvb3NlQ2xpZW50TmFtZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjaG9vc2VDYXNlSWROYW1lIiwid2F0Y2giLCJpbmRleCIsIkdldFN0YWdlcyIsImNvbXB1dGVkIiwiYWpheCIsImdldERhdGEiLCJjbGFzcyIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiaXRlbXMiLCJUZW1wbGF0ZUlkRGF0YSIsImkiLCJwdXNoIiwiaiIsInRlbXBsYXRlSWQiLCJtYXAiLCJpdGVtIiwiU3RhZ2VzIiwicGFnZVNjcm9sbFRvQm90dG9tIiwic2hvd0xvYWRpbmciLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwiaXNSZWZyZXNoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJpbWFnZSIsInVwbG9hZEZpbGUiLCJKU09OIiwicGFyc2UiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImJvdHRvbSIsImV4ZWMiLCJsb3dlciIsInVwcGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixNQUF2QyxFQUE4QywwQkFBeUIs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S0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLE1BQWlCSCxRQUFRRCxLQUFSLEdBQWdCLENBQWpDLENBQVgsSUFBa0RBLEtBQXpEO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtoSCxPQUFMLENBQWFNLEVBQWIsR0FBa0IsVUFBVSxLQUFLOEcsTUFBTCxDQUFZLENBQVosRUFBZSxZQUFmLENBQTVCO0FBQ0EsV0FBS3BILE9BQUwsQ0FBYU8sYUFBYixHQUE2QixLQUFLQSxhQUFMLENBQW1CLENBQW5CLEVBQXNCYSxLQUFuRDtBQUNBLFdBQUtwQixPQUFMLENBQWFILE9BQWIsR0FBcUIsS0FBS0EsT0FBTCxDQUFhRSxJQUFiLENBQWtCLENBQWxCLEVBQXFCcUIsS0FBMUM7QUFDQSxXQUFLaUcseUJBQUw7QUFDQSxXQUFLNUQscUJBQUw7QUFDRDs7OztFQXpid0M2RCxlQUFLQyxJOztrQkFBM0JqSSxhIiwiZmlsZSI6ImNyZWF0ZVByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICBpbXBvcnQgTmFtZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gIGltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gIGltcG9ydCBQcml2YWN5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlck9wdGlvbic7XG4gIGltcG9ydCBUZW1wbGF0ZUlkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlck9wdGlvbic7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNyZWF0ZVByb2plY3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJOYW1lXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJOYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJOYW1lVmFsdWVcIn0sXCJEZXNjcmlwdGlvblwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJEZXNjcmlwdGlvblwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRGVzY3JpcHRpb25WYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkRlc2NyaXB0aW9uVmFsdWVcIn0sXCJQcml2YWN5XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiUHJpdmFjeVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIlByaXZhY3lJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlByaXZhY3lJbmRleFwifSxcIlRlbXBsYXRlSWRcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJUZW1wbGF0ZUlkXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiVGVtcGxhdGVJZEluZGV4XCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiVGVtcGxhdGVJZEluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIE5hbWUsXG4gICAgICBEZXNjcmlwdGlvbixcbiAgICAgIFByaXZhY3ksXG4gICAgICBUZW1wbGF0ZUlkXG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgc3ViRGF0YToge1xuICAgICAgICBDYXNlSWQ6IFwiXCIsXG4gICAgICAgIENhdGVnb3J5OiBcIlwiLFxuICAgICAgICBDbGllbnRJZDogXCJcIixcbiAgICAgICAgQ292ZXI6IFwiXCIsXG4gICAgICAgIENyZWF0aW9uVGltZTogXCJcIixcbiAgICAgICAgRGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIElkOiBcIlwiLFxuICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICBQcml2YWN5OiBcIlwiLFxuICAgICAgICBUZW1wbGF0ZUlkOiBcIlwiLFxuICAgICAgICBpbnB1dFRlbXBsYXRlOiBcIlwiLFxuICAgICAgICBTdGFnZUlkczonJyxcbiAgICAgICAgY2hlY2tib3g6JycsXG4gICAgICB9LFxuICAgICAgQ2F0ZWdvcnk6IFtdLFxuICAgICAgQ2xpZW50SWRWYWx1ZTogJycsXG4gICAgICBDYXNlSWRWYWx1ZTogJycsXG4gICAgICBDb3ZlckltYWdlOicnLFxuICAgICAgTmFtZToge1xuICAgICAgICB0aXRsZTogJ+mhueebruWQjeensCcsXG4gICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBOYW1lVmFsdWU6ICcnLFxuICAgICAgRGVzY3JpcHRpb246IHtcbiAgICAgICAgdGl0bGU6ICfpobnnm67mj4/ov7AnLFxuICAgICAgICBuYW1lOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICB9LFxuICAgICAgRGVzY3JpcHRpb25WYWx1ZTogJycsXG4gICAgICBpbnB1dFRlbXBsYXRlOiBbe1xuICAgICAgICAgIGRpc3BsYXlUZXh0OiAn6Ieq5a6a5LmJ5pWw5o2uJyxcbiAgICAgICAgICB2YWx1ZTogJy0xJyxcbiAgICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dDogJ+S4quS6uuaooeadvycsXG4gICAgICAgICAgdmFsdWU6JzAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dDogJ+ezu+e7n+aooeadvycsXG4gICAgICAgICAgdmFsdWU6ICcxJ1xuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFByaXZhY3k6IHtcbiAgICAgICAgdGl0bGU6ICfpobnnm67pmpDnp4HmgKcnLFxuICAgICAgICBuYW1lOiAnUHJpdmFjeScsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXNwbGF5VGV4dDogJ+engeaciemhueebricsXG4gICAgICAgICAgICB2YWx1ZTogJzEnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXNwbGF5VGV4dDogJ+WFrOW8gOmhueebricsXG4gICAgICAgICAgICB2YWx1ZTogJzAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcbiAgICAgICAgXSxcbiAgICAgICAga2V5OiAnZGlzcGxheVRleHQnLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIFByaXZhY3lJbmRleDogMCxcbiAgICAgIFRlbXBsYXRlSWQ6IHtcbiAgICAgICAgbmFtZTogJ1RlbXBsYXRlSWQnLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAga2V5OiAnbmFtZScsXG4gICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgVGVtcGxhdGVJZEluZGV4OiAtMSxcbiAgICAgIFRlbXBsYXRlSWRBcnJheUluZGV4OiBbMCwgMF0sXG4gICAgICBUZW1wbGF0ZUlkQXJyYXk6IFtdLFxuICAgICAgVGVtcGxhdGVJZERhdGFBcnJheTogW10sXG4gICAgICBUZW1wbGF0ZUlkVGV4dDogJ+ivt+mAieaLqScsXG4gICAgICAvL+aooeadv+mYtuautVxuICAgICAgYXBwbGljYXRpb25TdGFnZXM6IFtdXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgZGVsZXRlVmFsdWUoa2V5d29yZHMpe1xuICAgICAgICBzd2l0Y2ggKGtleXdvcmRzKSB7XG4gICAgICAgICAgY2FzZSAnQ2xpZW50SWRWYWx1ZSc6XG4gICAgICAgICAgICB0aGlzLkNsaWVudElkVmFsdWU9Jyc7XG4gICAgICAgICAgICB0aGlzLnN1YkRhdGEuQ2xpZW50SWQ9Jyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdDYXNlSWRWYWx1ZSc6XG4gICAgICAgICAgICB0aGlzLkNhc2VJZFZhbHVlPScnO1xuICAgICAgICAgICAgdGhpcy5zdWJEYXRhLkNhc2VJZD0nJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBTdWJtaXREYXRhKCl7XG4gICAgICAgIGlmKHRoaXMuc3ViRGF0YS5DYXRlZ29yeSE9PScyJyYmdGhpcy5zdWJEYXRhLkNhdGVnb3J5KXtcbiAgICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlVGFza1Byb2plY3QoKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdWJEYXRhLkNhdGVnb3J5PT0nMicmJnRoaXMuc3ViRGF0YS5OYW1lKXtcbiAgICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlVGFza1Byb2plY3QoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5b+F5aGr6aG577yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjaGVja2JveENoYW5nZShlKXtcbiAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIHRoaXMuc3ViRGF0YS5jaGVja2JveD1lLmRldGFpbC52YWx1ZVtlLmRldGFpbC52YWx1ZS5sZW5ndGgtMV07XG4gICAgICAgIHRoaXMuc3ViRGF0YS5TdGFnZUlkcz1lLmRldGFpbC52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGJpbmRNdWx0aVBpY2tlckNoYW5nZShlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLlRlbXBsYXRlSWRBcnJheUluZGV4ID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLlRlbXBsYXRlSWRBcnJheVsxXVt2YWx1ZVsxXV0pIHtcbiAgICAgICAgICB0aGlzLlRlbXBsYXRlSWRUZXh0ID0gdGhpcy5UZW1wbGF0ZUlkQXJyYXlbMF1bdmFsdWVbMF1dICsgJy8nICsgdGhpcy5UZW1wbGF0ZUlkQXJyYXlbMV1bdmFsdWVbMV1dXG4gICAgICAgICAgdGhpcy5zdWJEYXRhLlRlbXBsYXRlSWQgPSB0aGlzLlRlbXBsYXRlSWREYXRhQXJyYXlbdmFsdWVbMF1dLnRlbXBsYXRlc1t2YWx1ZVsxXV0uaWQ7XG4gICAgICAgICAgdGhpcy5HZXRBcHBsaWNhdGlvblN0YWdlcyh0aGlzLnN1YkRhdGEuVGVtcGxhdGVJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5UZW1wbGF0ZUlkVGV4dCA9IHRoaXMuVGVtcGxhdGVJZEFycmF5WzBdW3ZhbHVlWzBdXTtcbiAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhZ2VzPVtdO1xuICAgICAgICAgIHRoaXMuc3ViRGF0YS5jaGVja2JveD0nJztcbiAgICAgICAgICB0aGlzLnN1YkRhdGEuU3RhZ2VJZHM9W107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2UoZSkge1xuICAgICAgICBpZiAoZS5kZXRhaWwuY29sdW1uID09IDApIHtcbiAgICAgICAgICB0aGlzLlRlbXBsYXRlSWRBcnJheUluZGV4WzFdID0gMDtcbiAgICAgICAgICB0aGlzLlRlbXBsYXRlSWRBcnJheVsxXSA9IFtdO1xuICAgICAgICAgIHRoaXMuR2V0QXBwbGljYXRpb25UZW1wbGF0ZXNXaXRoR3JvdXAoZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgcmFkaW9DaGFuZ2VUZW1wbGF0ZShlKSB7XG4gICAgICAgIHRoaXMuc3ViRGF0YS5pbnB1dFRlbXBsYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIHRoaXMuVGVtcGxhdGVJZC5kYXRhID0gW107XG4gICAgICAgIHRoaXMuc3ViRGF0YS5UZW1wbGF0ZUlkID0gJyc7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGFnZXM9W107XG4gICAgICAgIHRoaXMuc3ViRGF0YS5jaGVja2JveD0nJztcbiAgICAgICAgdGhpcy5zdWJEYXRhLlN0YWdlSWRzPScnO1xuICAgICAgICBzd2l0Y2ggKGUuZGV0YWlsLnZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICB0aGlzLlRlbXBsYXRlSWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5HZXRUZW1wbGF0ZXNXaXRoR3JvdXAoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgdGhpcy5UZW1wbGF0ZUlkQXJyYXlJbmRleCA9IFswLCAwXTtcbiAgICAgICAgICAgIHRoaXMuVGVtcGxhdGVJZFRleHQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuVGVtcGxhdGVJZEFycmF5ID0gW1xuICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIHRoaXMuR2V0QXBwbGljYXRpb25UZW1wbGF0ZXNXaXRoR3JvdXAoMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5UZW1wbGF0ZUlkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgdXBMb2FkSW1hZ2UoKSB7XG4gICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgdGhpcy5VcGxvYWRQcm9qZWN0Q292ZXIodGVtcEZpbGVQYXRoc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHJhZGlvQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5OYW1lVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5zdWJEYXRhLk5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5DbGllbnRJZFZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuc3ViRGF0YS5DbGllbnRJZCA9ICcnO1xuICAgICAgICB0aGlzLkNhc2VJZFZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuc3ViRGF0YS5DYXNlSWQgPSAnJztcbiAgICAgICAgdGhpcy5zdWJEYXRhLkNhdGVnb3J5ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgY2hvb3NlQ2xpZW50TmFtZSgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9jYXNlQ2xpZW50U2VhcmNoL3NlYXJjaENhc2VDbGllbnQ/Y2xhc3M9Y2xpZW50J1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjaG9vc2VDYXNlSWROYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJEYXRhLkNsaWVudElkKSB7XG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL2Nhc2VDbGllbnRTZWFyY2gvc2VhcmNoQ2FzZUNsaWVudD9jbGFzcz1jYXNlJyArICcmcGFyZW50SWQ9JyArIHRoaXMuc3ViRGF0YS5DbGllbnRJZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi9jYXNlQ2xpZW50U2VhcmNoL3NlYXJjaENhc2VDbGllbnQ/Y2xhc3M9Y2FzZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2F0Y2ggPSB7XG4gICAgICBUZW1wbGF0ZUlkSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViRGF0YS5pbnB1dFRlbXBsYXRlID09ICcwJyAmJiB0aGlzLlRlbXBsYXRlSWQuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5zdWJEYXRhLlRlbXBsYXRlSWQgPSB0aGlzLlRlbXBsYXRlSWQuZGF0YVtpbmRleF0uaWQ7XG4gICAgICAgICAgdGhpcy5HZXRTdGFnZXModGhpcy5zdWJEYXRhLlRlbXBsYXRlSWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3ViRGF0YS5OYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgRGVzY3JpcHRpb25WYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnN1YkRhdGEuRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBQcml2YWN5SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zdWJEYXRhLlByaXZhY3kgPSB0aGlzLlByaXZhY3kuZGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb21wdXRlZCA9IHt9O1xuICAgIGFzeW5jIEdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoKSB7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0JyxcbiAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgY2xhc3M6IFwiVFBDVFwiLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLkNhdGVnb3J5ID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor6/vvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBHZXRUZW1wbGF0ZXNXaXRoR3JvdXAoKSB7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tUZW1wbGF0ZS9HZXRUZW1wbGF0ZXNXaXRoR3JvdXAnLFxuICAgICAgICAncG9zdCcsIHt9XG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLlRlbXBsYXRlSWQuZGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXNbMF0udGVtcGxhdGVzO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBHZXRBcHBsaWNhdGlvblRlbXBsYXRlc1dpdGhHcm91cChpbmRleCkge1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrVGVtcGxhdGUvR2V0QXBwbGljYXRpb25UZW1wbGF0ZXNXaXRoR3JvdXAnLFxuICAgICAgICAncG9zdCcsIHt9XG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgVGVtcGxhdGVJZERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICB0aGlzLlRlbXBsYXRlSWREYXRhQXJyYXkgPSBUZW1wbGF0ZUlkRGF0YTtcbiAgICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVGVtcGxhdGVJZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuVGVtcGxhdGVJZEFycmF5WzBdLnB1c2goVGVtcGxhdGVJZERhdGFbaV0ubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgVGVtcGxhdGVJZERhdGFbMF0udGVtcGxhdGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLlRlbXBsYXRlSWRBcnJheVsxXVtqXSA9IFRlbXBsYXRlSWREYXRhWzBdLnRlbXBsYXRlc1tqXS5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoVGVtcGxhdGVJZERhdGFbaW5kZXhdLnRlbXBsYXRlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBUZW1wbGF0ZUlkRGF0YVtpbmRleF0udGVtcGxhdGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHRoaXMuVGVtcGxhdGVJZEFycmF5WzFdW2pdID0gVGVtcGxhdGVJZERhdGFbaW5kZXhdLnRlbXBsYXRlc1tqXS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgYXN5bmMgR2V0QXBwbGljYXRpb25TdGFnZXModGVtcGxhdGVJZCkge1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrVGVtcGxhdGUvR2V0QXBwbGljYXRpb25TdGFnZXMnLFxuICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICB0ZW1wbGF0ZUlkXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHZhciBhcHBsaWNhdGlvblN0YWdlcyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RhZ2VzLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICBpdGVtLmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KVxuICAgICAgICB2YXIgU3RhZ2VzPWFwcGxpY2F0aW9uU3RhZ2VzLm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc3ViRGF0YS5TdGFnZUlkcz1TdGFnZXMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zdWJEYXRhLmNoZWNrYm94PVN0YWdlc1tTdGFnZXMubGVuZ3RoLTFdO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhZ2VzID0gYXBwbGljYXRpb25TdGFnZXM7XG4gICAgICAgIGlmKHRoaXMuYXBwbGljYXRpb25TdGFnZXMubGVuZ3RoPjApe1xuICAgICAgICAgIHRoaXMucGFnZVNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBHZXRTdGFnZXModGVtcGxhdGVJZCl7XG4gICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrVGVtcGxhdGUvR2V0U3RhZ2VzJyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICB7XG4gICAgICAgICAgdGVtcGxhdGVJZFxuICAgICAgICB9XG4gICAgICApXG4gICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgIHZhciBhcHBsaWNhdGlvblN0YWdlcyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RhZ2VzLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICBpdGVtLmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KVxuICAgICAgICB2YXIgU3RhZ2VzPWFwcGxpY2F0aW9uU3RhZ2VzLm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc3ViRGF0YS5TdGFnZUlkcz1TdGFnZXMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zdWJEYXRhLmNoZWNrYm94PVN0YWdlc1tTdGFnZXMubGVuZ3RoLTFdO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhZ2VzID0gYXBwbGljYXRpb25TdGFnZXM7XG4gICAgICAgIGlmKHRoaXMuYXBwbGljYXRpb25TdGFnZXMubGVuZ3RoPjApe1xuICAgICAgICAgIHRoaXMucGFnZVNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy/mj5DkuqTmlbDmja5cbiAgICBhc3luYyBDcmVhdGVPclVwZGF0ZVRhc2tQcm9qZWN0KCl7XG4gICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUHJvamVjdC9DcmVhdGVPclVwZGF0ZVRhc2tQcm9qZWN0JyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICB0aGlzLnN1YkRhdGFcbiAgICAgIClcbiAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpO1xuICAgICAgaWYocmVzRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5pc1JlZnJlc2goKTtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZXJyb3IubWVzc2FnZSwgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy/kuIrkvKDlm77niYdcbiAgICBhc3luYyBVcGxvYWRQcm9qZWN0Q292ZXIoaW1hZ2Upe1xuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgfSk7XG4gICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LnVwbG9hZEZpbGUoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUHJvamVjdC9VcGxvYWRQcm9qZWN0Q292ZXInLFxuICAgICAgICBpbWFnZSxcbiAgICAgICAge1xuICAgICAgICAgIElkOnRoaXMuc3ViRGF0YS5JZFxuICAgICAgICB9XG4gICAgICApXG4gICAgICB2YXIgcmVzdWx0PUpTT04ucGFyc2UocmVzRGF0YS5kYXRhKTtcbiAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgdGhpcy5zdWJEYXRhLkNvdmVyPXJlc3VsdC5yZXN1bHQ7IFxuICAgICAgICB0aGlzLkNvdmVySW1hZ2U9aW1hZ2U7ICAgICAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOnJlc3VsdC5lcnJvci5tZXNzYWdlICwgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIGlzUmVmcmVzaChpdGVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgaWYgKGl0ZW0uY2xhc3MgPT0gXCJjbGllbnRcIikge1xuICAgICAgICBpZih0aGlzLnN1YkRhdGEuQ2F0ZWdvcnk9PScxJyl7XG4gICAgICAgICAgdGhpcy5DbGllbnRJZFZhbHVlID0gaXRlbS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICB0aGlzLnN1YkRhdGEuQ2xpZW50SWQgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgIHRoaXMuc3ViRGF0YS5OYW1lPWl0ZW0uZGlzcGxheVRleHQ7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuQ2xpZW50SWRWYWx1ZSA9IGl0ZW0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgdGhpcy5zdWJEYXRhLkNsaWVudElkID0gaXRlbS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpdGVtLmNsYXNzID09IFwiY2FzZVwiKSB7XG4gICAgICAgIHRoaXMuQ2FzZUlkVmFsdWUgPSBpdGVtLmRpc3BsYXlUZXh0O1xuICAgICAgICB0aGlzLnN1YkRhdGEuQ2FzZUlkID0gaXRlbS52YWx1ZTtcbiAgICAgICAgdGhpcy5zdWJEYXRhLk5hbWUgPSBpdGVtLmRpc3BsYXlUZXh0O1xuICAgICAgfWVsc2UgXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBwYWdlU2Nyb2xsVG9Cb3R0b20oKXtcbiAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJyNjb250YWluZXInKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlY3QpPT57XG4gICAgICAgICAgLy8g5L2/6aG16Z2i5rua5Yqo5Yiw5bqV6YOoXG4gICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogcmVjdC5ib3R0b21cbiAgICAgICAgICB9KVxuICAgICAgICB9KS5leGVjKClcbiAgICB9XG4gICAgLy/pmo/mnLrmlbBcbiAgICByYW5kb20obG93ZXIsIHVwcGVyKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIgKyAxKSkgKyBsb3dlcjtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5zdWJEYXRhLklkID0gJ3RlbXBfJyArIHRoaXMucmFuZG9tKDAsIDEwMDAwMDAwMDAwMCk7XG4gICAgICB0aGlzLnN1YkRhdGEuaW5wdXRUZW1wbGF0ZSA9IHRoaXMuaW5wdXRUZW1wbGF0ZVswXS52YWx1ZTtcbiAgICAgIHRoaXMuc3ViRGF0YS5Qcml2YWN5PXRoaXMuUHJpdmFjeS5kYXRhWzBdLnZhbHVlO1xuICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCk7XG4gICAgICB0aGlzLkdldFRlbXBsYXRlc1dpdGhHcm91cCgpO1xuICAgIH07XG4gIH1cbiJdfQ==