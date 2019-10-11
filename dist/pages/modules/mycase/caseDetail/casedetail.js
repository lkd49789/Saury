'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../../npm/wepy-async-function/index.js');

var _navbar = require('./../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../../utils/cofig/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseDetail = function (_wepy$page) {
  _inherits(caseDetail, _wepy$page);

  function caseDetail() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, caseDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseDetail.__proto__ || Object.getPrototypeOf(caseDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
      navbar: _navbar2.default
    }, _this.data = (_this$data = {
      task: false,
      currentTab: 0,
      navbars: ['案件', '客户', '任务', '文档', '日志', '开庭', '财务'],
      winHeight1: '',
      winHeight2: '',
      circular: false,
      // autoplay: false,
      duration: 300
    }, _defineProperty(_this$data, 'circular', true), _defineProperty(_this$data, 'enablebacktotop', true), _defineProperty(_this$data, 'toggle', false), _defineProperty(_this$data, 'chooseSize', false), _defineProperty(_this$data, 'taskchooseSize', false), _defineProperty(_this$data, 'courtchooseSize', false), _defineProperty(_this$data, 'confirmTaskChoose', false), _defineProperty(_this$data, 'isAcceptChoose', false), _defineProperty(_this$data, 'placeholderImage', '../../../../images/noData.png'), _defineProperty(_this$data, 'animationData', []), _defineProperty(_this$data, 'id', 0), _defineProperty(_this$data, 'userId', []), _defineProperty(_this$data, 'clientId', ''), _defineProperty(_this$data, 'caseDetailData', {
      caseData: {
        caseDetail: {},
        userPhoto: []
      },
      clientData: {
        clientAllData: {},
        linkerPhoto: [],
        linkerTotalCount: 0,
        linkerData: {},
        clientContactsListData: {},
        clientContactsListLastData: {},
        contactLength: 0,
        birthday: ''
      },
      //任务
      taskDatas: {
        TaskStagesDatas: [],
        TasksDatas: [],
        setTimeout: '',
        viewHeight: [],
        pageNumber: [],
        current: 0,
        stageId: []
      },
      //文档数据
      documentDatas: {
        documentData: {},
        fileIcon: [],
        fileColor: [],
        filePath: [],
        lastPathClass: [],
        lastPathId: [],
        SyncPath: "",
        isValue: false,
        searchDocValue: '',
        fixedPath: {
          lastPathClass: '',
          lastPathId: 'M43',
          filePath: '首页'
        }
      },
      workLogsDatas: {
        workLogData: {},
        selfDuration: 0,
        businessDuration: 0,
        billDuration: 0,
        startTime: [],
        endTime: [],
        avatarData: [],
        processStatus: []
      },
      CourtsDatas: {
        CourtsData: {},
        endYear: [],
        endHour: [],
        startYear: [],
        startHour: []
      },
      //财务
      AmountDatas: {
        PageNumber: [1, 1, 1, 1],
        AmountData: [],
        AmountDataHeight: 0,
        AmountCurrent: 0,
        UserCaseBillingItem: [],
        UserCaseBillingHeight: 0,
        UserInvoicesItem: [],
        UserInvoicesItemHeight: 0,
        UserInvoicesDate: [],
        UserReceiptsItemHeight: 0,
        UserReceiptsItem: [],
        UserReceiptsDate: [],
        UserChargesItemHeight: 0,
        UserChargesItem: [],
        UserChargesDate: []
      }
    }), _this$data), _this.methods = {
      //任务
      //新建任务
      addTask: function addTask(projectId) {
        wx.navigateTo({
          url: '../../myTaskCourse/taskStage/createtask/creatTask?projectId=' + projectId + '&currentStage=' + this.caseDetailData.taskDatas.current + '&category=' + 0
        });
      },

      //是否完成任务
      isChecked: function isChecked(sIndex, index, checked, id) {
        var _this2 = this;

        if (!this.caseDetailData.taskDatas.TasksDatas[sIndex].items[index].childTask) {
          this.caseDetailData.taskDatas.TasksDatas[sIndex].items[index].checked = true;
          var Timeout = setTimeout(function () {
            _this2.caseDetailData.taskDatas.TasksDatas[sIndex].items[index].checked = false;
            _this2.$apply();
          }, 0);
          this.caseDetailData.taskDatas.setTimeout = Timeout;
          wx.showToast({
            title: '请先检查子任务！',
            icon: 'none',
            duration: 1500,
            mask: false
          });
        } else if (!checked) {
          this.CompletedTaskParticipant(id, 'Y', checked);
          this.caseDetailData.taskDatas.TasksDatas[sIndex].items[index].checked = !this.caseDetailData.taskDatas.TasksDatas[sIndex].items[index].checked;
        } else {
          this.CompletedTaskParticipant(id, 'N', checked);
          this.caseDetailData.taskDatas.TasksDatas[sIndex].items[index].checked = !this.caseDetailData.taskDatas.TasksDatas[sIndex].items[index].checked;
        };
        this.$apply();
      },

      // 去详情页面
      toTaskDetail: function toTaskDetail(id) {
        wx.navigateTo({
          url: '../../myTaskCourse/taskStage/taskDetail/taskdetail?id=' + id
        });
      },

      // 更多选项
      moreChoose: function moreChoose(item, index) {
        var _this3 = this;

        var nextSort = this.caseDetailData.taskDatas.TaskStagesDatas.length - 1 > index ? this.caseDetailData.taskDatas.TaskStagesDatas[index + 1].sort : 0;
        var itemList = ['在此后添加新阶段', '新建任务', '删除'];
        wx.showActionSheet({
          itemList: itemList,
          itemColor: '#5d73fa',
          success: function success(res) {
            if (res.tapIndex == 0) {
              wx.navigateTo({
                url: '../../myTaskCourse/taskStage/createtask/createStage?projectId=' + item.projectId + '&sort=' + item.sort + '&nextSort=' + nextSort
              });
            }
            if (res.tapIndex == 1) {
              wx.navigateTo({
                url: '../../myTaskCourse/taskStage/createtask/creatTask?projectId=' + item.projectId + '&currentStage=' + _this3.caseDetailData.taskDatas.current + '&category=' + 0
              });
            }
            if (res.tapIndex == 2) {
              if (item.taskCount == 0 && item.participantTaskCount == 0) {
                _this3.DeleteTaskStage(item.id, index);
              } else {
                wx.showToast({
                  title: '对不起，请先清空此阶段列表上的任务，然后再删除这个阶段列表！', //提示的内容,
                  icon: 'none', //图标,
                  duration: 2000, //延迟时间,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
              }
            }
          }
        });
      },

      // 删除任务
      longpress: function longpress(id) {
        var _this4 = this;

        wx.showModal({
          title: '是否确认删除该项任务！',
          content: '',
          showCancel: true,
          cancelText: '取消',
          cancelColor: '#000000',
          confirmText: '确定',
          confirmColor: '#5d73fa',
          success: function success(res) {
            if (res.confirm) {
              _this4.DeleteTask(id);
            }
          }
        });
      },

      //开庭显示按钮
      courtShow: function courtShow(index) {
        if (this.caseDetailData.CourtsDatas.CourtsData[index].operations !== null) {
          var operations = this.caseDetailData.CourtsDatas.CourtsData[index].operations;
          var option = [];
          for (var i in operations) {
            option[i] = operations[i].text;
          }
          wx.showActionSheet({
            itemList: option, //显示的列表项
            success: function success(res) {
              //res.tapIndex点击的列表项
              // console.log(res)
              if (option[res.tapIndex] == '删除') {
                // console.log(111);
              }
              if (option[res.tapIndex] == '修改') {
                // console.log(222);
              }
              if (option[res.tapIndex] == '查看') {
                wx.showToast({
                  title: '用户没有权限',
                  icon: 'none',
                  duration: 1000,
                  mask: false
                });
              }
              // if(res.tapIndex){}
              // console.log(that[res.tapIndex])
            },
            fail: function fail(res) {},
            complete: function complete(res) {}
          });
        } else {
          wx.showToast({
            title: '用户没有权限',
            icon: 'none',
            duration: 1000,
            mask: false
          });
        }
      },

      // 任务滑动切换数据
      taskBindChange: function taskBindChange(e) {
        this.caseDetailData.taskDatas.current = e.detail.current;
        this.$apply();
      },

      // //财务滑动切换数据
      getAmountData: function getAmountData(e) {
        if (wx.pageScrollTo) {
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
          });
        }
        this.caseDetailData.AmountDatas.AmountCurrent = e.detail.current;
        if (e.detail.current == 0) {
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserCaseBillingHeight;
        }
        if (e.detail.current == 1) {
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserInvoicesItemHeight;
        }
        if (e.detail.current == 2) {
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserReceiptsItemHeight;
        }
        if (e.detail.current == 3) {
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserChargesItemHeight;
        }
      },

      // 文档返回上几层
      goBack: function goBack(id, docClass, index) {
        if (index >= 0) {
          this.caseDetailData.documentDatas.lastPathClass.splice(index + 1, this.caseDetailData.documentDatas.lastPathClass.length - index);
          this.caseDetailData.documentDatas.lastPathId.splice(index + 1, this.caseDetailData.documentDatas.lastPathId.length - index);
          this.caseDetailData.documentDatas.filePath.splice(index + 1, this.caseDetailData.documentDatas.filePath.length - index);
          this.getDocumentData(id, docClass);
        } else {
          this.caseDetailData.documentDatas.filePath = [];
          this.caseDetailData.documentDatas.lastPathClass = [];
          this.caseDetailData.documentDatas.lastPathId = [];
          this.getDocumentData(this.id, 'M1');
        }
      },

      // 文档预览
      preview: function preview(id, fileClass, docClass, textPath) {
        var _this5 = this;

        var fileClass = fileClass.replace('.', '').toLowerCase();
        if (fileClass !== 'folder') {
          wx.getStorage({
            key: 'access',
            success: function success(res) {
              wx.downloadFile({
                header: {
                  'content-type': 'application/octet-stream',
                  Authorization: 'Bearer ' + res.data
                },
                url: 'https://www.ailinkedlaw.com/api/services/web/document/GetDocumentFile?id=' + id,
                success: function success(res) {
                  var filePath = res.tempFilePath;
                  // this.showView = !this.showView;
                  // console.log(filePath);
                  switch (fileClass) {
                    case 'jpg':
                      wx.previewImage({
                        current: res.tempFilePath, // 当前显示图片的http链接
                        urls: [res.tempFilePath] // 需要预览的图片http链接列表
                      });
                      break;
                    case 'png':
                      wx.previewImage({
                        current: res.tempFilePath, // 当前显示图片的http链接
                        urls: [res.tempFilePath] // 需要预览的图片http链接列表
                      });
                      break;
                    default:
                      wx.openDocument({
                        filePath: filePath,
                        fileType: fileClass,
                        success: function success(res) {
                          // this.file.push(res.data);
                          console.log('打开文件');
                          // this.$apply();
                        },
                        fail: function fail(err) {
                          console.log(err);
                        }
                      });
                      // this.showView = !this.showView;
                      break;
                  }
                  _this5.$apply();
                },
                fail: function fail(err) {
                  console.log(err);
                }
              });
            }
          });
        } else {
          this.getDocumentData(id, docClass);
          this.caseDetailData.documentDatas.lastPathClass.push(docClass);
          this.caseDetailData.documentDatas.lastPathId.push(id);
          var filePath = textPath.split('/');
          filePath = '/' + filePath[filePath.length - 1];
          this.caseDetailData.documentDatas.filePath.push(filePath);
          // if(this.caseDetailData.documentDatas.searchDocValue){
          //   this.caseDetailData.documentDatas.filePath=filePath
          // }else{

          // }
        }
      },

      //文档搜索
      searchDoc: function searchDoc(e) {
        var value = e.detail.value;
        this.caseDetailData.documentDatas.searchDocValue = value;
        this.caseDetailData.documentDatas.isValue = value ? true : false;
        var docClass = '';
        var parentId = '';
        if (this.caseDetailData.documentDatas.filePath.length > 0) {
          docClass = this.caseDetailData.documentDatas.lastPathClass[this.caseDetailData.documentDatas.lastPathClass.length - 1];
          parentId = this.caseDetailData.documentDatas.lastPathId[this.caseDetailData.documentDatas.lastPathId.length - 1];
        } else {
          docClass = 'M1';
          parentId = this.id;
        }
        this.getDocumentData(parentId, docClass, value);
        this.$apply();
      },

      //清除搜索
      clearDoc: function clearDoc() {
        this.caseDetailData.documentDatas.isValue = false;
        this.caseDetailData.documentDatas.searchDocValue = '';
        this.getDocumentData(this.id, 'M1');
        this.$apply();
      },

      // 案件基本信息页面
      tocasebase: function tocasebase() {
        wx.navigateTo({
          url: './cases/casebase?id=' + this.id
        });
      },

      // 案情简介页面
      tocaseintroduce: function tocaseintroduce() {
        wx.navigateTo({
          url: './cases/caseintroduce?'
        });
      },

      //案件人员信息
      tocasepersonnelin: function tocasepersonnelin() {
        wx.navigateTo({
          url: './cases/casepersonnelinformation?id=' + this.id
        });
        // }
      },

      // 跳转到利益冲突列表
      toconflictinterest: function toconflictinterest() {
        if (this.caseDetailData.caseData.caseDetail.caseClientRelationList.length > 0) {
          wx.navigateTo({
            url: './cases/conflictinterest/conflictinterest?id=' + this.id
          });
        }
      },

      // 跳转到合同详情页面
      tocontractinfo: function tocontractinfo() {
        wx.navigateTo({
          url: './cases/contractdetail/contractinfo?'
        });
      },

      //跳转至客户基本信息页
      toclientbase: function toclientbase() {
        wx.navigateTo({
          url: '../../myclient/clientDetail/itemDetail/clientBaseInfo'
        });
      },

      // 跳转至客户联系人页
      toclientlinkman: function toclientlinkman() {
        wx.navigateTo({
          url: '../../myclient/clientDetail/itemDetail/clientLinkman?id=' + this.clientId + '&caseId=' + this.id + '&title=客户方本案联系人'
        });
      },

      //跳转至拜访记录页
      tovisitrecord: function tovisitrecord() {
        wx.navigateTo({
          url: '../../myclient/clientDetail/itemDetail/recordsList'
        });
      },
      tocreate: function tocreate(e) {
        if (this.currentTab == 2) {
          this.toCreateTasks();
        }
        if (this.currentTab == 5) {
          wx.navigateTo({
            url: './task/taskdetail'
          });
        }
      },

      // 日志详情
      tologdetail: function tologdetail(id) {
        wx.navigateTo({
          url: '../../myRecord/myLogdetail/logdetail?id=' + id
        });
      }
    }, _this.watch = {
      currentTab: function currentTab(current) {
        if (wx.pageScrollTo) {
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
          });
        }
      }
    }, _this.computed = {
      AmountDataHeight: function AmountDataHeight() {
        if (this.caseDetailData.AmountDatas.AmountCurrent == 0) {
          // if(this.caseDetailData.AmountDatas.AmountCurrent=0){
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserCaseBillingHeight;
          // this.$apply();
          // }
        }
        if (this.caseDetailData.AmountDatas.AmountCurrent == 1) {
          // if(this.caseDetailData.AmountDatas.AmountCurrent=0){
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserInvoicesItemHeight;
          // this.$apply();
          // }
        }
        if (this.caseDetailData.AmountDatas.AmountCurrent == 2) {
          // if(this.caseDetailData.AmountDatas.AmountCurrent=0){
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserReceiptsItemHeight;
          // this.$apply();
          // }
        }
        if (this.caseDetailData.AmountDatas.AmountCurrent == 3) {
          // if(this.caseDetailData.AmountDatas.AmountCurrent=0){
          this.caseDetailData.AmountDatas.AmountDataHeight = this.caseDetailData.AmountDatas.UserChargesItemHeight;
          // this.$apply();
          // }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(caseDetail, [{
    key: 'toCreateTasks',

    // 创建阶段任务（最后）;
    value: function toCreateTasks() {
      var sort = this.caseDetailData.taskDatas.TaskStagesDatas.length - 1;
      var projectId = this.id;
      if (this.task) wx.navigateTo({
        url: '../../myTaskCourse/taskStage/createtask/createStage?projectId=' + projectId + '&sort=' + sort
      });else wx.navigateTo({ url: '../../myTaskCourse/createProject' });
    }
    //案件信息

  }, {
    key: 'getCaseData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, caseData, caseLawyerList, userIds, index, http, userAvatar, contractForEditData, caseDetailData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({
                  title: '加载中,请稍等!',
                  mask: false
                });
                id = {
                  id: this.id
                };
                _context.next = 4;
                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'POST', id);

              case 4:
                caseData = _context.sent;

                if (!(caseData.statusCode == 200 && caseData.data.result !== null)) {
                  _context.next = 30;
                  break;
                }

                this.caseDetailData.caseData.caseDetail = caseData.data.result;
                // this.clientId = caseData.data.result.clientId;
                caseLawyerList = caseData.data.result.caseLawyerList;
                // 头像Id去重

                userIds = [];

                for (index in caseLawyerList) {
                  userIds[index] = caseLawyerList[index].userId;
                }
                this.userId = _api2.default.myDistinct(userIds);
                //头像处理
                _context.t0 = regeneratorRuntime.keys(this.userId);

              case 12:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 21;
                  break;
                }

                index = _context.t1.value;

                // console.log(this.userId[index])
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + this.userId[index];
                _context.next = 17;
                return _ajax2.default.getUserAvatar(http);

              case 17:
                userAvatar = _context.sent;

                // console.log(userAvatar);
                if (userAvatar.statusCode == 200) {
                  this.caseDetailData.caseData.userPhoto[index] = userAvatar.tempFilePath;
                  this.$apply();
                } else {
                  wx.showToast({
                    title: '网络故障!',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }
                _context.next = 12;
                break;

              case 21:
                _context.next = 23;
                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeBasic', 'post', id);

              case 23:
                contractForEditData = _context.sent;

                if (contractForEditData.statusCode == 200) {
                  //付款方式字符串替换
                  this.caseDetailData.caseData.contractForEditData = contractForEditData.data.result;
                  if (contractForEditData.data.result.payStyleText !== null) {
                    this.caseDetailData.caseData.payStyleText = contractForEditData.data.result.payStyleText.replace(/,/g, '+');
                  } else {
                    this.caseDetailData.caseData.payStyleText = '未填写';
                  }
                } else {
                  wx.showToast({
                    title: '数据异常,部分数据无法正常显示',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }
                // 将数据保存到本地
                caseDetailData = {
                  caseData: this.caseDetailData.caseData.caseDetail,
                  contractForEditData: this.caseDetailData.caseData.contractForEditData,
                  payStyleText: this.caseDetailData.caseData.payStyleText
                  // userPhoto: this.caseDetailData.caseData.userPhoto
                };

                wx.setStorage({
                  key: 'caseDetailData',
                  data: caseDetailData
                });
                this.$apply();
                _context.next = 31;
                break;

              case 30:
                if (caseData.statusCode !== 200) {
                  wx.showToast({
                    title: '网络故障!',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                  this.caseDetailData.caseData.caseDetail = null;
                } else if (caseData.data.result == null) {
                  this.caseDetailData.caseData.caseDetail = null;
                }

              case 31:
                this.$apply();

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCaseData() {
        return _ref2.apply(this, arguments);
      }

      return getCaseData;
    }()
    //客户信息

  }, {
    key: 'getClient',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var clientId, clientData, clientLinkerData, index, id, http, linkerPhoto, recordId, clientContactsListData, ContactsListData, RecordsDatas, clientAllData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                clientId = {
                  id: this.clientId
                };
                _context2.next = 3;
                return _ajax2.default.getData('/api/services/web/client/GetClient', 'post', clientId);

              case 3:
                clientData = _context2.sent;

                if (!(clientData.statusCode == 200 && clientData.data.result !== null)) {
                  _context2.next = 42;
                  break;
                }

                // console.log(clientData.result);
                this.caseDetailData.clientData.clientAllData = clientData.data.result;
                // 出生日期处理
                if (clientData.data.result.birthday !== null) {
                  this.caseDetailData.clientData.birthday = clientData.data.result.birthday.split('T')[0].toString();
                } else {
                  this.caseDetailData.clientData.birthday = '未填写';
                }
                // 客户联系人
                clientId = {
                  caseId: this.id,
                  ClientId: this.clientId,
                  pageNumber: 1,
                  pageSize: 10
                };
                _context2.next = 10;
                return _ajax2.default.getData('/api/services/web/clientContacts/GetClientContactsList', 'post', clientId);

              case 10:
                clientLinkerData = _context2.sent;

                if (!(clientLinkerData.statusCode == 200)) {
                  _context2.next = 29;
                  break;
                }

                this.caseDetailData.clientData.linkerData = clientLinkerData.data.result.items;
                this.caseDetailData.clientData.linkerTotalCount = clientLinkerData.data.result.totalCount;
                clientLinkerData = clientLinkerData.data.result.items;
                _context2.t0 = regeneratorRuntime.keys(clientLinkerData);

              case 16:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 26;
                  break;
                }

                index = _context2.t1.value;
                id = clientLinkerData[index].id;
                http = '/api/services/web/clientContacts/GetClientContactAvatar?id=' + id;
                _context2.next = 22;
                return _ajax2.default.getUserAvatar(http);

              case 22:
                linkerPhoto = _context2.sent;

                if (linkerPhoto.statusCode == 200) {
                  this.caseDetailData.clientData.linkerPhoto[index] = linkerPhoto.tempFilePath;
                  this.caseDetailData.clientData.linkerData[index]['avatar'] = linkerPhoto.tempFilePath;
                } else {
                  wx.showToast({
                    title: '部分数据异常！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }
                _context2.next = 16;
                break;

              case 26:
                this.$apply();
                _context2.next = 30;
                break;

              case 29:
                wx.showToast({
                  title: '部分数据异常！',
                  icon: 'none',
                  duration: 1500,
                  mask: false
                });

              case 30:
                // 拜访记录
                recordId = {
                  clientId: this.clientId,
                  pageNumber: 1,
                  pageSize: 10
                };
                _context2.next = 33;
                return _ajax2.default.getData('/api/services/web/clientVisitServiceRecords/GetVisitRecords', 'post', recordId);

              case 33:
                clientContactsListData = _context2.sent;

                if (clientContactsListData.statusCode == 200 && clientContactsListData.data.result.items.length !== 0) {
                  this.caseDetailData.clientData.clientContactsListData = clientContactsListData.data.result.items;
                  this.caseDetailData.clientData.contactLength = clientContactsListData.data.result.totalCount;
                  // 拜访记录最新时间
                  this.caseDetailData.clientData.clientContactsListLastData = clientContactsListData.data.result.items[0];
                }
                // 客户联系人缓存数据
                ContactsListData = {
                  items: this.caseDetailData.clientData.linkerData,
                  totalCount: this.caseDetailData.clientData.linkerTotalCount
                  // 拜访记录缓存数据
                };
                RecordsDatas = {
                  items: this.caseDetailData.clientData.clientContactsListData,
                  totalCount: this.caseDetailData.clientData.recordsToatalCount
                  // 本地存储
                };
                clientAllData = {
                  clientBaseInfoData: this.caseDetailData.clientData.clientAllData, //客户详情信息
                  ContactsListData: ContactsListData, //客户联系人
                  RecordsDatas: RecordsDatas //拜访记录,
                };

                wx.setStorageSync('clientData', clientAllData);
                this.$apply();
                _context2.next = 43;
                break;

              case 42:
                if (clientData.statusCode !== 200) {
                  this.caseDetailData.clientData.clientAllData = null;
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                } else if (clientData.data.result == null) {
                  this.caseDetailData.clientData.clientAllData = null;
                }

              case 43:
                this.$apply();

              case 44:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getClient() {
        return _ref3.apply(this, arguments);
      }

      return getClient;
    }()
    //任务
    //获取任务阶段

  }, {
    key: 'GetTaskStages',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data, TaskProjectBasic, TaskStagesDatas, TaskStagesData, index, stageId;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {
                  projectId: this.id
                };
                _context3.next = 3;
                return _ajax2.default.getData('/api/services/web/taskProject/GetTaskProjectBasic', 'post', { id: this.id });

              case 3:
                TaskProjectBasic = _context3.sent;

                if (TaskProjectBasic.data.result.id) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt('return', false);

              case 8:
                this.task = true;

              case 9:
                _context3.next = 11;
                return _ajax2.default.getData('/api/services/web/taskPlanning/GetTaskStages', 'post', data);

              case 11:
                TaskStagesDatas = _context3.sent;
                _context3.t0 = TaskStagesDatas.statusCode;
                _context3.next = _context3.t0 === 200 ? 15 : _context3.t0 === 403 ? 17 : _context3.t0 === 500 ? 22 : 26;
                break;

              case 15:
                if (TaskStagesDatas.data.result.length !== 0) {
                  // console.log(TaskStagesDatas.data.result);
                  TaskStagesData = TaskStagesDatas.data.result;

                  this.caseDetailData.taskDatas.TaskStagesDatas = TaskStagesData;
                  for (index in TaskStagesData) {
                    stageId = TaskStagesData[index].id;

                    this.caseDetailData.taskDatas.stageId[index] = TaskStagesData[index].id;
                    this.caseDetailData.taskDatas.pageNumber[index] = 1;
                    this.caseDetailData.taskDatas.viewHeight[index] = 500;
                    this.GetTasks(index, stageId);
                  }
                  this.$apply();
                }
                return _context3.abrupt('break', 27);

              case 17:
                console.log('您没有权限');
                this.placeHolder.placeHolderImageIndex = 3;
                this.placeHolder.placeHolderShow = true;
                this.$apply();
                return _context3.abrupt('break', 27);

              case 22:
                console.log('数据请求错误');
                this.placeHolder.placeHolderImageIndex = 1;
                this.placeHolder.placeHolderShow = true;
                this.$apply();

              case 26:
                return _context3.abrupt('break', 27);

              case 27:
                this.$apply();

              case 28:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetTaskStages() {
        return _ref4.apply(this, arguments);
      }

      return GetTaskStages;
    }()
    //获取任务项

  }, {
    key: 'GetTasks',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(index, stageId) {
        var data, GetTasksDatas, TasksData, childChecked, i, hourTime, millTime;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = {
                  pageNumber: this.caseDetailData.taskDatas.pageNumber[index],
                  pageSize: 100,
                  stageId: stageId,
                  projectId: this.id
                };
                _context4.next = 3;
                return _ajax2.default.getData('/api/services/web/taskPlanning/GetTasks', 'post', data);

              case 3:
                GetTasksDatas = _context4.sent;

                if (GetTasksDatas.data.result.items.length !== 0) {
                  TasksData = GetTasksDatas.data.result;
                  childChecked = [];

                  for (i in TasksData.items) {
                    if (TasksData.items[i].isCompleted == 'Y') {
                      TasksData.items[i]['checked'] = true;
                    } else {
                      TasksData.items[i]['checked'] = false;
                    }
                    if (TasksData.items[i].isCompleted == 'D') {
                      TasksData.items[i]['childTask'] = false;
                    } else {
                      TasksData.items[i]['childTask'] = true;
                    }
                    if (TasksData.items[i].endTime) {
                      // TasksData.items[i].endTime = api.formatTimeSymbol(TasksData.items[i].endTime, '/');
                      hourTime = new Date(TasksData.items[i].endTime).getHours();

                      if (hourTime > 7 && hourTime < 25) {
                        millTime = new Date(TasksData.items[i].endTime).getTime() - 8 * 60 * 60 * 1000;

                        TasksData.items[i].endTime = new Date(millTime);
                      } else {
                        millTime = 16 * 60 * 60 * 1000 + new Date(TasksData.items[i].endTime).getTime();

                        TasksData.items[i].endTime = new Date(millTime);
                      }
                      TasksData.items[i].endTime = _api2.default.formatTimeSymbol(TasksData.items[i].endTime, '-');
                    }
                  }
                  this.caseDetailData.taskDatas.TasksDatas[index] = TasksData;
                  this.caseDetailData.taskDatas.viewHeight[index] += TasksData.items.length * 175;
                } else {
                  // child[index].push([])
                  this.caseDetailData.taskDatas.TasksDatas[index] = {
                    item: [],
                    totalCount: 0
                  };
                }
                // console.log(child)
                this.$apply();

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GetTasks(_x, _x2) {
        return _ref5.apply(this, arguments);
      }

      return GetTasks;
    }()
    //完成任务

  }, {
    key: 'CompletedTaskParticipant',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, isCompleted, checked) {
        var date, data, res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                date = new Date();
                data = {
                  isMark: "Y",
                  isParticipant: "Y",
                  isRemind: "Y",
                  endTime: date,
                  id: id,
                  isCompleted: isCompleted,
                  projectId: this.id
                };
                _context5.next = 4;
                return _ajax2.default.getData('/api/services/web/taskParticipant/CompletedTaskParticipant', 'post', data);

              case 4:
                res = _context5.sent;

                if (res.data.success) {
                  if (res.statusCode == 200 && res.data.success) {
                    if (!checked) {
                      wx.showToast({
                        title: '已完成',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                      });
                    } else {
                      wx.showToast({
                        title: '已取消',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                      });
                    }
                  }
                }

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function CompletedTaskParticipant(_x3, _x4, _x5) {
        return _ref6.apply(this, arguments);
      }

      return CompletedTaskParticipant;
    }()
    //删除阶段任务

  }, {
    key: 'DeleteTaskStage',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id, index) {
        var resData;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _ajax2.default.getData('/api/services/web/taskPlanning/DeleteTaskStage', 'post', {
                  id: id
                });

              case 2:
                resData = _context6.sent;

                if (resData.statusCode == 200) {
                  this.caseDetailData.taskDatas.viewHeight = this.caseDetailData.taskDatas.viewHeight.splice(index, 1);
                  this.caseDetailData.taskDatas.pageNumber = this.caseDetailData.taskDatas.pageNumber.splice(index, 1);
                  this.caseDetailData.taskDatas.stageId = this.caseDetailData.taskDatas.stageId.splice(index, 1);
                  if (this.current > 0) {
                    this.current = this.current - 1;
                  } else {
                    this.current = 0;
                  }
                  if (this.caseDetailData.taskDatas.current > 0) {
                    this.caseDetailData.taskDatas.current = this.caseDetailData.taskDatas.current - 1;
                  } else {
                    this.caseDetailData.taskDatas.current = 0;
                  }
                  this.GetTaskStages();
                  this.$apply();
                } else {
                  wx.showToast({
                    title: resData.data.error.message,
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function DeleteTaskStage(_x6, _x7) {
        return _ref7.apply(this, arguments);
      }

      return DeleteTaskStage;
    }()
    //删除任务项

  }, {
    key: 'DeleteTask',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
        var data, resData;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                data = {
                  id: id
                };
                _context7.next = 3;
                return _ajax2.default.getData('/api/services/web/taskPlanning/DeleteTask', 'post', data);

              case 3:
                resData = _context7.sent;

                if (resData.statusCode == 200) {
                  this.caseDetailData.taskDatas.TasksDatas.totalCount -= 1;
                  this.caseDetailData.taskDatas.TasksDatas.items = this.caseDetailData.taskDatas.TasksDatas.splice(index, 1);
                  this.caseDetailData.taskDatas.current = this.caseDetailData.taskDatas.current;
                  this.GetTaskStages();
                  this.GetTasks();
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
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function DeleteTask(_x8) {
        return _ref8.apply(this, arguments);
      }

      return DeleteTask;
    }()
    //文档

  }, {
    key: 'getDocumentData',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(docClass, parentId, keyWords) {
        var keyWord, data, documentData, document, index, iconClass;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                keyWord = keyWords || '';
                data = {
                  // SyncPath: this.SyncPath,
                  caseId: this.id,
                  docClass: docClass,
                  isRight: 0,
                  myFile: false,
                  onlyFile: false,
                  pageNumber: 1,
                  pageSize: 50,
                  parentId: parentId,
                  sorting: 'Name asc',
                  title: keyWord,
                  topClass: 'M1'
                };
                _context8.next = 4;
                return _ajax2.default.getData('/api/services/web/document/GetDocumentsWithFolders', 'post', data);

              case 4:
                documentData = _context8.sent;

                if (!(documentData.statusCode == 200 && documentData.data.result.items.length > 0)) {
                  _context8.next = 46;
                  break;
                }

                // this.caseDetailData.documentDatas.searchDocValue='';
                // this.caseDetailData.documentDatas.isValue=false;
                this.caseDetailData.documentDatas.documentData = documentData.data.result.items;
                document = documentData.data.result.items;
                //图标 颜色

                _context8.t0 = regeneratorRuntime.keys(document);

              case 9:
                if ((_context8.t1 = _context8.t0()).done) {
                  _context8.next = 44;
                  break;
                }

                index = _context8.t1.value;

                //  this.caseDetailData.documentDatas.pathText.push(text)
                iconClass = document[index].fileExtension.toLowerCase();
                _context8.t2 = iconClass;
                _context8.next = _context8.t2 === '.pdf' ? 15 : _context8.t2 === '.png' ? 18 : _context8.t2 === '.xls' ? 21 : _context8.t2 === '.xlsx' ? 24 : _context8.t2 === '.docx' ? 27 : _context8.t2 === '.doc' ? 30 : _context8.t2 === '.jpg' ? 33 : _context8.t2 === 'folder' ? 36 : 39;
                break;

              case 15:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-pdfpng1';
                this.caseDetailData.documentDatas.fileColor[index] = '#e20000';
                return _context8.abrupt('break', 42);

              case 18:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-pdfpng1';
                this.caseDetailData.documentDatas.fileColor[index] = '#e20000';
                return _context8.abrupt('break', 42);

              case 21:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-exl1';
                this.caseDetailData.documentDatas.fileColor[index] = '#069400';
                return _context8.abrupt('break', 42);

              case 24:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-exl1';
                this.caseDetailData.documentDatas.fileColor[index] = '#069400';
                return _context8.abrupt('break', 42);

              case 27:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-wold1';
                this.caseDetailData.documentDatas.fileColor[index] = '#009dff';
                return _context8.abrupt('break', 42);

              case 30:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-wold1';
                this.caseDetailData.documentDatas.fileColor[index] = '#009dff';
                return _context8.abrupt('break', 42);

              case 33:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-jpggeshi';
                this.caseDetailData.documentDatas.fileColor[index] = '#ff9900';
                return _context8.abrupt('break', 42);

              case 36:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-wendang';
                this.caseDetailData.documentDatas.fileColor[index] = '#ff9900';
                return _context8.abrupt('break', 42);

              case 39:
                this.caseDetailData.documentDatas.fileIcon[index] = 'icon-weizhiwenjiangeshi';
                this.caseDetailData.documentDatas.fileColor[index] = '#7a7a7a';
                return _context8.abrupt('break', 42);

              case 42:
                _context8.next = 9;
                break;

              case 44:
                _context8.next = 47;
                break;

              case 46:
                if (documentData.statusCode !== 200) {
                  this.caseDetailData.documentDatas.documentData = [];
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                } else if (documentData.data.result.items.length == 0) {
                  this.caseDetailData.documentDatas.documentData = [];
                }

              case 47:
                this.$apply();

              case 48:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getDocumentData(_x9, _x10, _x11) {
        return _ref9.apply(this, arguments);
      }

      return getDocumentData;
    }()
    //日志

  }, {
    key: 'getWorkLogs',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var data, workLogsData, workLogData, index, http, avatarData;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                data = {
                  caseId: this.id,
                  keyword: '',
                  pageNumber: 1,
                  pageSize: 10,
                  sorting: 'StartTime Desc'
                };
                _context9.next = 3;
                return _ajax2.default.getData('/api/services/web/worklog/GetWorklogs', 'post', data);

              case 3:
                workLogsData = _context9.sent;

                if (!(workLogsData.statusCode == 200 && workLogsData.data.result.items.length !== 0)) {
                  _context9.next = 34;
                  break;
                }

                this.caseDetailData.workLogsDatas.workLogData = workLogsData.data.result.items;
                workLogData = workLogsData.data.result.items;

                this.caseDetailData.workLogsDatas.selfDuration = workLogData.reduce(function (pre, cur) {
                  console.log(cur);
                  return cur.selfDuration + pre;
                });
                _context9.t0 = regeneratorRuntime.keys(workLogData);

              case 9:
                if ((_context9.t1 = _context9.t0()).done) {
                  _context9.next = 32;
                  break;
                }

                index = _context9.t1.value;

                // this.caseDetailData.workLogsDatas.selfDuration += Number(
                //   workLogData[index].selfDuration.toFixed(2)
                // ); //自报时长
                this.caseDetailData.workLogsDatas.businessDuration += Number(workLogData[index].businessDuration.toFixed(2)); //业务时长
                this.caseDetailData.workLogsDatas.billDuration += Number(workLogData[index].billDuration.toFixed(2)); //账单时长
                // 开始结束时间处理
                this.caseDetailData.workLogsDatas.startTime[index] = workLogData[index].startTime.replace(/[a-zA-Z]/g, ' ').split(' ');
                this.caseDetailData.workLogsDatas.endTime[index] = workLogData[index].endTime.replace(/[a-zA-Z]/g, ' ').split(' ');
                //创建人头像
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + workLogData[index].employeeId;
                _context9.next = 18;
                return _ajax2.default.getUserAvatar(http);

              case 18:
                avatarData = _context9.sent;

                // console.log(avatarData)
                // avatarData.statusCode=100
                if (avatarData.statusCode == 200) {
                  this.caseDetailData.workLogsDatas.avatarData[index] = avatarData.tempFilePath;
                } else {
                  wx.showToast({
                    title: '网络故障！部分数据无法正常显示',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                }
                //审核状态
                _context9.t2 = workLogData[index].processStatus;
                _context9.next = _context9.t2 === 'A' ? 23 : _context9.t2 === 'N' ? 25 : _context9.t2 === 'R' ? 27 : 29;
                break;

              case 23:
                this.caseDetailData.workLogsDatas.processStatus[index] = '#339933';
                return _context9.abrupt('break', 30);

              case 25:
                this.caseDetailData.workLogsDatas.processStatus[index] = '#009dff';
                return _context9.abrupt('break', 30);

              case 27:
                this.caseDetailData.workLogsDatas.processStatus[index] = '#e20000';
                return _context9.abrupt('break', 30);

              case 29:
                return _context9.abrupt('break', 30);

              case 30:
                _context9.next = 9;
                break;

              case 32:
                _context9.next = 35;
                break;

              case 34:
                if (workLogsData.statusCode !== 200) {
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                  this.caseDetailData.workLogsDatas.workLogData = [];
                } else if (workLogsData.data.result.items.length == 0) {
                  this.caseDetailData.workLogsDatas.workLogData = [];
                }

              case 35:
                this.$apply();

              case 36:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getWorkLogs() {
        return _ref10.apply(this, arguments);
      }

      return getWorkLogs;
    }()
    //开庭

  }, {
    key: 'GetCourts',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var data, CourtsDatas, index;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                data = {
                  caseId: this.id,
                  keyword: '',
                  pageNumber: 1,
                  pageSize: 20,
                  sorting: 'StartTime Desc'
                };
                _context10.next = 3;
                return _ajax2.default.getData('/api/services/web/caseCourt/GetCourts', 'post', data);

              case 3:
                CourtsDatas = _context10.sent;

                // console.log(CourtsDatas)
                // // CourtsDatas.statusData=100;
                // CourtsDatas.data.result.items=[]
                if (CourtsDatas.statusCode == 200 && CourtsDatas.data.result.items.length !== 0) {
                  this.caseDetailData.CourtsDatas.CourtsData = CourtsDatas.data.result.items;
                  CourtsDatas = CourtsDatas.data.result.items;

                  for (index in CourtsDatas) {
                    this.caseDetailData.CourtsDatas.endYear[index] = CourtsDatas[index].endTime.split('T')[0].replace(/-/g, '/');
                    this.caseDetailData.CourtsDatas.endHour[index] = CourtsDatas[index].endTime.split('T')[1].replace('Z', ' ');
                    this.caseDetailData.CourtsDatas.startYear[index] = CourtsDatas[index].startTime.split('T')[0].replace(/-/g, '/');
                    this.caseDetailData.CourtsDatas.startHour[index] = CourtsDatas[index].startTime.split('T')[1].replace('Z', ' ');
                    // console.log(CourtsDatas[index].endTime.split('T')[1].replace('Z', ' '));
                  }
                } else {
                  if (CourtsDatas.statusCode !== 200) {
                    wx.showToast({
                      title: '网络故障！',
                      icon: 'none',
                      duration: 1500,
                      mask: false
                    });
                    this.caseDetailData.CourtsDatas.CourtsData = [];
                  } else if (CourtsDatas.data.result.items.length == 0) {
                    this.caseDetailData.CourtsDatas.CourtsData = [];
                  }
                }
                this.$apply();

              case 6:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function GetCourts() {
        return _ref11.apply(this, arguments);
      }

      return GetCourts;
    }()
    //财务
    //账单

  }, {
    key: 'GetUserCaseBilling',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var id, UserCaseBillingCount, UserCaseBilling, itemId, UserCaseBillingItem, index;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                id = {
                  caseId: this.id,
                  isRoleFilter: true,
                  statusList: ['A']
                };
                _context11.next = 3;
                return _ajax2.default.getData('/api/services/web/financialBilling/GetUserBillingsCount', 'POST', id);

              case 3:
                UserCaseBillingCount = _context11.sent;

                if (!(UserCaseBillingCount.statusCode == 200 && UserCaseBillingCount.data.result !== null)) {
                  _context11.next = 39;
                  break;
                }

                UserCaseBilling = {};

                UserCaseBilling['UserCaseBillingCount'] = UserCaseBillingCount.data.result.items.length !== 0 ? UserCaseBillingCount.data.result.items[0].total : 0;
                itemId = {
                  caseId: this.id,
                  pageNumber: this.caseDetailData.AmountDatas.PageNumber[0],
                  pageSize: 10
                };
                _context11.next = 10;
                return _ajax2.default.getData('/api/services/web/financialBilling/GetMyBillings', 'POST', itemId);

              case 10:
                UserCaseBillingItem = _context11.sent;

                if (!(UserCaseBillingItem.statusCode == 200)) {
                  _context11.next = 35;
                  break;
                }

                UserCaseBilling['UserCaseBillingTotalCount'] = UserCaseBillingItem.data.result.totalCount.toString(2);
                // if(this.caseDetailData.AmountDatas.PageNumber[0]=1){
                // console.log(UserCaseBillingItem.data.result.items.length);
                this.caseDetailData.AmountDatas.UserCaseBillingHeight += UserCaseBillingItem.data.result.items.length * 200;
                UserCaseBillingItem = UserCaseBillingItem.data.result.items;
                _context11.t0 = regeneratorRuntime.keys(UserCaseBillingItem);

              case 16:
                if ((_context11.t1 = _context11.t0()).done) {
                  _context11.next = 32;
                  break;
                }

                index = _context11.t1.value;
                _context11.t2 = UserCaseBillingItem[index].processStatusText;
                _context11.next = _context11.t2 === '预开账单' ? 21 : _context11.t2 === '等待审核' ? 23 : _context11.t2 === '审核退回' ? 25 : _context11.t2 === '审核通过' ? 27 : 29;
                break;

              case 21:
                UserCaseBillingItem[index]['textColor'] = '#009DFF';
                return _context11.abrupt('break', 30);

              case 23:
                UserCaseBillingItem[index]['textColor'] = '#ff9900';
                return _context11.abrupt('break', 30);

              case 25:
                UserCaseBillingItem[index]['textColor'] = '#e20000';
                return _context11.abrupt('break', 30);

              case 27:
                UserCaseBillingItem[index]['textColor'] = '#069400';
                return _context11.abrupt('break', 30);

              case 29:
                return _context11.abrupt('break', 30);

              case 30:
                _context11.next = 16;
                break;

              case 32:
                this.caseDetailData.AmountDatas.UserCaseBillingItem = this.caseDetailData.AmountDatas.UserCaseBillingItem.concat(UserCaseBillingItem);
                _context11.next = 36;
                break;

              case 35:
                wx.showToast({
                  title: '网络故障，部分数据无法加载！',
                  icon: 'none',
                  duration: 1500,
                  mask: false
                });

              case 36:
                this.caseDetailData.AmountDatas.AmountData[0] = UserCaseBilling;
                _context11.next = 40;
                break;

              case 39:
                if (UserCaseBillingCount.statusCode !== 200) {
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                  this.caseDetailData.AmountDatas.UserCaseBillingCount = null;
                } else if (UserCaseBillingCount.data.result == null) {
                  this.caseDetailData.AmountDatas.UserCaseBillingCount = null;
                }

              case 40:
                this.$apply();

              case 41:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function GetUserCaseBilling() {
        return _ref12.apply(this, arguments);
      }

      return GetUserCaseBilling;
    }()
    //发票

  }, {
    key: 'GetUserCaseInvoice',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var id, UserCaseInvoiceCount, UserCaseInvoice, itemId, UserInvoicesItem, date, index;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                id = {
                  caseId: this.id,
                  isRoleFilter: true,
                  statusList: ["Claimed"]
                };
                _context12.next = 3;
                return _ajax2.default.getData('/api/services/web/financialInvoice/GetUserInvoicesCount', 'post', id);

              case 3:
                UserCaseInvoiceCount = _context12.sent;

                if (!(UserCaseInvoiceCount.statusCode == 200)) {
                  _context12.next = 43;
                  break;
                }

                UserCaseInvoice = UserCaseInvoiceCount.data.result.items[0];

                this.caseDetailData.AmountDatas.AmountData[1] = UserCaseInvoice;
                itemId = {
                  caseId: this.id,
                  pageNumber: this.caseDetailData.AmountDatas.PageNumber[1],
                  pageSize: 10
                };
                _context12.next = 10;
                return _ajax2.default.getData('/api/services/web/financialInvoice/GetUserInvoices', 'post', itemId);

              case 10:
                UserInvoicesItem = _context12.sent;

                if (!(UserInvoicesItem.statusCode == 200 && UserInvoicesItem.data.result.items.length !== 0)) {
                  _context12.next = 40;
                  break;
                }

                // UserCaseInvoice['UserInvoicesTotalCount'] =
                //   UserInvoicesItem.data.result.totalCount;
                UserInvoicesItem = UserInvoicesItem.data.result.items;

                this.caseDetailData.AmountDatas.UserInvoicesItemHeight += UserInvoicesItem.length * 250;
                date = [];
                _context12.t0 = regeneratorRuntime.keys(UserInvoicesItem);

              case 16:
                if ((_context12.t1 = _context12.t0()).done) {
                  _context12.next = 38;
                  break;
                }

                index = _context12.t1.value;

                date[index] = UserInvoicesItem[index].creationTime.split('T')[0];
                _context12.t2 = UserInvoicesItem[index].statusName;
                _context12.next = _context12.t2 === '已领取' ? 22 : _context12.t2 === '未提交' ? 24 : _context12.t2 === '待处理' ? 26 : _context12.t2 === '已退回' ? 28 : _context12.t2 === '已开票' ? 30 : _context12.t2 === '已到账' ? 31 : _context12.t2 === '未到账' ? 32 : _context12.t2 === '部分到账' ? 33 : 35;
                break;

              case 22:
                UserInvoicesItem[index]['statusColor'] = '#069400';
                return _context12.abrupt('break', 36);

              case 24:
                UserInvoicesItem[index]['statusColor'] = '#5d73fa';
                return _context12.abrupt('break', 36);

              case 26:
                UserInvoicesItem[index]['statusColor'] = '#ff9900';
                return _context12.abrupt('break', 36);

              case 28:
                UserInvoicesItem[index]['statusColor'] = '#e20000';
                return _context12.abrupt('break', 36);

              case 30:
                UserInvoicesItem[index]['statusColor'] = '#009dff';

              case 31:
                UserInvoicesItem[index]['statusColor'] = '#069400';

              case 32:
                UserInvoicesItem[index]['statusColor'] = '#e20000';

              case 33:
                UserInvoicesItem[index]['statusColor'] = '#009dff';
                return _context12.abrupt('break', 36);

              case 35:
                return _context12.abrupt('break', 36);

              case 36:
                _context12.next = 16;
                break;

              case 38:
                this.caseDetailData.AmountDatas.UserInvoicesDate = this.caseDetailData.AmountDatas.UserInvoicesDate.concat(date);
                this.caseDetailData.AmountDatas.UserInvoicesItem = this.caseDetailData.AmountDatas.UserInvoicesItem.concat(UserInvoicesItem);

              case 40:
                this.caseDetailData.AmountDatas.AmountData[1] = UserCaseInvoice;
                _context12.next = 44;
                break;

              case 43:
                if (UserCaseInvoiceCount.statusCode !== 200) {
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                  this.caseDetailData.AmountDatas.UserCaseInvoiceCount = null;
                } else if (UserCaseInvoiceCount.data.result == null) {
                  this.caseDetailData.AmountDatas.UserCaseInvoiceCount = null;
                }

              case 44:
                this.$apply();

              case 45:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function GetUserCaseInvoice() {
        return _ref13.apply(this, arguments);
      }

      return GetUserCaseInvoice;
    }()
    // 收款

  }, {
    key: 'GetUserCaseReceiptCount',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var id, UserCaseReceiptCount, UserCaseReceipt, itemId, UserReceiptsItem, date, index;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                id = {
                  caseId: this.id
                };
                _context13.next = 3;
                return _ajax2.default.getData('/api/services/web/financialReceipt/GetUserReceiptsCount', 'post', id);

              case 3:
                UserCaseReceiptCount = _context13.sent;

                if (!(UserCaseReceiptCount.statusCode == 200)) {
                  _context13.next = 44;
                  break;
                }

                UserCaseReceipt = UserCaseReceiptCount.data.result.items[1];
                itemId = {
                  caseId: this.id,
                  pageNumber: this.caseDetailData.AmountDatas.PageNumber[2],
                  pageSize: 10
                };
                _context13.next = 9;
                return _ajax2.default.getData('/api/services/web/financialReceipt/GetUserReceipts', 'post', itemId);

              case 9:
                UserReceiptsItem = _context13.sent;

                if (!(UserReceiptsItem.statusCode == 200)) {
                  _context13.next = 40;
                  break;
                }

                // UserCaseReceipt['UserReceiptsTotalCount'] =
                //   UserReceiptsItem.data.result.totalCount;
                UserReceiptsItem = UserReceiptsItem.data.result.items;

                this.caseDetailData.AmountDatas.UserReceiptsItemHeight += UserReceiptsItem.length * 250;
                date = [];
                _context13.t0 = regeneratorRuntime.keys(UserReceiptsItem);

              case 15:
                if ((_context13.t1 = _context13.t0()).done) {
                  _context13.next = 36;
                  break;
                }

                index = _context13.t1.value;

                date[index] = UserReceiptsItem[index].creationTime.split('T')[0];
                _context13.t2 = UserReceiptsItem[index].statusName;
                _context13.next = _context13.t2 === '已领取' ? 21 : _context13.t2 === '未领取' ? 23 : _context13.t2 === '待确认' ? 25 : _context13.t2 === '待分配' ? 27 : _context13.t2 === '未提交' ? 29 : _context13.t2 === '已分配' ? 31 : 33;
                break;

              case 21:
                UserReceiptsItem[index]['statusColor'] = '#069400';
                return _context13.abrupt('break', 34);

              case 23:
                UserReceiptsItem[index]['statusColor'] = '#ff9900';
                return _context13.abrupt('break', 34);

              case 25:
                UserReceiptsItem[index]['statusColor'] = '#ff9900';
                return _context13.abrupt('break', 34);

              case 27:
                UserReceiptsItem[index]['statusColor'] = '#ff9900';
                return _context13.abrupt('break', 34);

              case 29:
                UserReceiptsItem[index]['statusColor'] = '#5d73fa';
                return _context13.abrupt('break', 34);

              case 31:
                UserReceiptsItem[index]['statusColor'] = '#069400';
                return _context13.abrupt('break', 34);

              case 33:
                return _context13.abrupt('break', 34);

              case 34:
                _context13.next = 15;
                break;

              case 36:
                this.caseDetailData.AmountDatas.UserReceiptsDate = this.caseDetailData.AmountDatas.UserReceiptsDate.concat(date);
                this.caseDetailData.AmountDatas.UserReceiptsItem = this.caseDetailData.AmountDatas.UserReceiptsItem.concat(UserReceiptsItem);
                _context13.next = 41;
                break;

              case 40:
                wx.showToast({
                  title: '网络故障！部分数据无法加载',
                  icon: 'none',
                  duration: 1500,
                  mask: false
                });

              case 41:
                this.caseDetailData.AmountDatas.AmountData[2] = UserCaseReceipt;
                _context13.next = 45;
                break;

              case 44:
                if (UserCaseReceiptCount.statusCode !== 200) {
                  this.caseDetailData.AmountDatas.UserCaseReceiptCount = null;
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                } else if (UserCaseReceiptCount.data.result == null) {
                  this.caseDetailData.AmountDatas.UserCaseReceiptCount = null;
                }

              case 45:
                this.$apply();

              case 46:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function GetUserCaseReceiptCount() {
        return _ref14.apply(this, arguments);
      }

      return GetUserCaseReceiptCount;
    }()
    // 费用

  }, {
    key: 'GetUserCaseChargeCount',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var id, UserCaseChargeCount, UserCaseCharge, itemId, UserChargesItem, date, index;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                id = {
                  caseId: this.id
                };
                _context14.next = 3;
                return _ajax2.default.getData('/api/services/web/financialCharge/GetUserChargesCount', 'post', id);

              case 3:
                UserCaseChargeCount = _context14.sent;

                if (!(UserCaseChargeCount.statusCode == 200 && UserCaseChargeCount.data.result !== null)) {
                  _context14.next = 38;
                  break;
                }

                UserCaseCharge = UserCaseChargeCount.data.result.items[0];
                itemId = {
                  caseId: this.id,
                  pageNumber: this.caseDetailData.AmountDatas.PageNumber[3],
                  pageSize: 10
                };
                _context14.next = 9;
                return _ajax2.default.getData('/api/services/web/financialCharge/GetUserCharges', 'post', itemId);

              case 9:
                UserChargesItem = _context14.sent;

                if (!(UserChargesItem.statusCode == 200)) {
                  _context14.next = 34;
                  break;
                }

                // UserCaseCharge['UserChargesTotalCount'] =
                //   UserChargesItem.data.result.totalCount;
                UserChargesItem = UserChargesItem.data.result.items;

                this.caseDetailData.AmountDatas.UserChargesItemHeight += UserChargesItem.length * 250;
                date = [];
                _context14.t0 = regeneratorRuntime.keys(UserChargesItem);

              case 15:
                if ((_context14.t1 = _context14.t0()).done) {
                  _context14.next = 30;
                  break;
                }

                index = _context14.t1.value;

                date[index] = UserChargesItem[index].creationTime.split('T')[0];
                _context14.t2 = UserChargesItem[index].statusName;
                _context14.next = _context14.t2 === '待审核' ? 21 : _context14.t2 === '已审核' ? 23 : _context14.t2 === '已退回' ? 25 : 27;
                break;

              case 21:
                UserChargesItem[index]['statusColor'] = '#ff9900';
                return _context14.abrupt('break', 28);

              case 23:
                UserChargesItem[index]['statusColor'] = '#069400';
                return _context14.abrupt('break', 28);

              case 25:
                UserChargesItem[index]['statusColor'] = '#e20000';
                return _context14.abrupt('break', 28);

              case 27:
                return _context14.abrupt('break', 28);

              case 28:
                _context14.next = 15;
                break;

              case 30:
                this.caseDetailData.AmountDatas.UserChargesDate = this.caseDetailData.AmountDatas.UserChargesDate.concat(date);
                this.caseDetailData.AmountDatas.UserChargesItem = this.caseDetailData.AmountDatas.UserChargesItem.concat(UserChargesItem);
                _context14.next = 35;
                break;

              case 34:
                wx.showToast({
                  title: '网络故障！部分数据无法正常加载',
                  icon: 'none',
                  duration: 1500,
                  mask: false
                });

              case 35:
                // console.log(UserCaseCharge);
                this.caseDetailData.AmountDatas.AmountData[3] = UserCaseCharge;
                _context14.next = 39;
                break;

              case 38:
                if (UserCaseChargeCount.statusCode !== 200) {
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                  this.caseDetailData.AmountDatas.UserCaseChargeCount = null;
                } else if (UserCaseChargeCount.data.result == null) {
                  this.caseDetailData.AmountDatas.UserCaseChargeCount = null;
                }

              case 39:
                this.$apply();

              case 40:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function GetUserCaseChargeCount() {
        return _ref15.apply(this, arguments);
      }

      return GetUserCaseChargeCount;
    }()
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (this.currentTab == 6) {
        switch (this.caseDetailData.AmountDatas.AmountCurrent) {
          case 0:
            if (this.caseDetailData.AmountDatas.AmountData[0].UserCaseBillingTotalCount / 10 > this.caseDetailData.AmountDatas.PageNumber[0]) {
              this.caseDetailData.AmountDatas.PageNumber[0] += 1;
              // this.caseDetailData.AmountDatas.AmountDataHeight=this.caseDetailData.AmountDatas.UserCaseBillingHeight
              this.GetUserCaseBilling();
              this.$apply();
            } else {
              wx.showToast({
                title: '到底了',
                icon: 'none',
                duration: 1500,
                mask: false
              });
            }
            break;
          case 1:
            if (this.caseDetailData.AmountDatas.AmountData[1].count / 10 > this.caseDetailData.AmountDatas.PageNumber[1]) {
              this.caseDetailData.AmountDatas.PageNumber[1] += 1;
              // this.caseDetailData.AmountDatas.AmountDataHeight=this.caseDetailData.AmountDatas.UserCaseBillingHeight
              this.GetUserCaseInvoice();
              this.$apply();
            } else {
              wx.showToast({
                title: '到底了',
                icon: 'none',
                duration: 1500,
                mask: false
              });
            }
            break;
          case 2:
            if (this.caseDetailData.AmountDatas.AmountData[2].count / 10 > this.caseDetailData.AmountDatas.PageNumber[2]) {
              this.caseDetailData.AmountDatas.PageNumber[2] += 1;
              // this.caseDetailData.AmountDatas.AmountDataHeight=this.caseDetailData.AmountDatas.UserCaseBillingHeight
              this.GetUserCaseReceiptCount();
              this.$apply();
            } else {
              wx.showToast({
                title: '到底了',
                icon: 'none',
                duration: 1500,
                mask: false
              });
            }
            break;
          case 3:
            if (this.caseDetailData.AmountDatas.AmountData[3].count / 10 > this.caseDetailData.AmountDatas.PageNumber[3]) {
              this.caseDetailData.AmountDatas.PageNumber[3] += 1;
              // this.caseDetailData.AmountDatas.AmountDataHeight=this.caseDetailData.AmountDatas.UserCaseBillingHeight
              this.GetUserCaseChargeCount();
              this.$apply();
            } else {
              wx.showToast({
                title: '到底了',
                icon: 'none',
                duration: 1500,
                mask: false
              });
            }
            break;
          default:
            break;
        }
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.id = options.id;
      this.SyncPath = "M0,M1," + options.id;
      this.clientId = options.clientId;
      this.docClass = options.id;
      this.caseDetailData.documentDatas.fixedPath.lastPathClass = options.id;
      this.getCaseData();
      this.getClient();
      this.GetTaskStages();
      this.getDocumentData(options.id, 'M1');
      this.getWorkLogs();
      this.GetCourts();
      //财务加载
      this.GetUserCaseBilling();
      this.GetUserCaseReceiptCount();
      this.GetUserCaseInvoice();
      this.GetUserCaseChargeCount();
      this.$apply();
    }
  }, {
    key: 'isRefresh',
    value: function isRefresh() {
      this.caseDetailData.taskDatas.TaskStagesDatas = [];
      this.caseDetailData.taskDatas.TasksDatas = [];
      this.caseDetailData.taskDatas.viewHeight = [];
      this.caseDetailData.taskDatas.pageNumber = [];
      this.caseDetailData.taskDatas.stageId = [];
      this.GetTaskStages();
      this.GetTasks();
      this.$apply();
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {}
  }]);

  return caseDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(caseDetail , 'pages/modules/mycase/caseDetail/casedetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VkZXRhaWwuanMiXSwibmFtZXMiOlsiY2FzZURldGFpbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hdmJhciIsImRhdGEiLCJ0YXNrIiwiY3VycmVudFRhYiIsIm5hdmJhcnMiLCJ3aW5IZWlnaHQxIiwid2luSGVpZ2h0MiIsImNpcmN1bGFyIiwiZHVyYXRpb24iLCJjYXNlRGF0YSIsInVzZXJQaG90byIsImNsaWVudERhdGEiLCJjbGllbnRBbGxEYXRhIiwibGlua2VyUGhvdG8iLCJsaW5rZXJUb3RhbENvdW50IiwibGlua2VyRGF0YSIsImNsaWVudENvbnRhY3RzTGlzdERhdGEiLCJjbGllbnRDb250YWN0c0xpc3RMYXN0RGF0YSIsImNvbnRhY3RMZW5ndGgiLCJiaXJ0aGRheSIsInRhc2tEYXRhcyIsIlRhc2tTdGFnZXNEYXRhcyIsIlRhc2tzRGF0YXMiLCJzZXRUaW1lb3V0Iiwidmlld0hlaWdodCIsInBhZ2VOdW1iZXIiLCJjdXJyZW50Iiwic3RhZ2VJZCIsImRvY3VtZW50RGF0YXMiLCJkb2N1bWVudERhdGEiLCJmaWxlSWNvbiIsImZpbGVDb2xvciIsImZpbGVQYXRoIiwibGFzdFBhdGhDbGFzcyIsImxhc3RQYXRoSWQiLCJTeW5jUGF0aCIsImlzVmFsdWUiLCJzZWFyY2hEb2NWYWx1ZSIsImZpeGVkUGF0aCIsIndvcmtMb2dzRGF0YXMiLCJ3b3JrTG9nRGF0YSIsInNlbGZEdXJhdGlvbiIsImJ1c2luZXNzRHVyYXRpb24iLCJiaWxsRHVyYXRpb24iLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiYXZhdGFyRGF0YSIsInByb2Nlc3NTdGF0dXMiLCJDb3VydHNEYXRhcyIsIkNvdXJ0c0RhdGEiLCJlbmRZZWFyIiwiZW5kSG91ciIsInN0YXJ0WWVhciIsInN0YXJ0SG91ciIsIkFtb3VudERhdGFzIiwiUGFnZU51bWJlciIsIkFtb3VudERhdGEiLCJBbW91bnREYXRhSGVpZ2h0IiwiQW1vdW50Q3VycmVudCIsIlVzZXJDYXNlQmlsbGluZ0l0ZW0iLCJVc2VyQ2FzZUJpbGxpbmdIZWlnaHQiLCJVc2VySW52b2ljZXNJdGVtIiwiVXNlckludm9pY2VzSXRlbUhlaWdodCIsIlVzZXJJbnZvaWNlc0RhdGUiLCJVc2VyUmVjZWlwdHNJdGVtSGVpZ2h0IiwiVXNlclJlY2VpcHRzSXRlbSIsIlVzZXJSZWNlaXB0c0RhdGUiLCJVc2VyQ2hhcmdlc0l0ZW1IZWlnaHQiLCJVc2VyQ2hhcmdlc0l0ZW0iLCJVc2VyQ2hhcmdlc0RhdGUiLCJtZXRob2RzIiwiYWRkVGFzayIsInByb2plY3RJZCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImNhc2VEZXRhaWxEYXRhIiwiaXNDaGVja2VkIiwic0luZGV4IiwiaW5kZXgiLCJjaGVja2VkIiwiaWQiLCJpdGVtcyIsImNoaWxkVGFzayIsIlRpbWVvdXQiLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiQ29tcGxldGVkVGFza1BhcnRpY2lwYW50IiwidG9UYXNrRGV0YWlsIiwibW9yZUNob29zZSIsIml0ZW0iLCJuZXh0U29ydCIsImxlbmd0aCIsInNvcnQiLCJpdGVtTGlzdCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1Db2xvciIsInN1Y2Nlc3MiLCJyZXMiLCJ0YXBJbmRleCIsInRhc2tDb3VudCIsInBhcnRpY2lwYW50VGFza0NvdW50IiwiRGVsZXRlVGFza1N0YWdlIiwibG9uZ3ByZXNzIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsImNvbmZpcm0iLCJEZWxldGVUYXNrIiwiY291cnRTaG93Iiwib3BlcmF0aW9ucyIsIm9wdGlvbiIsImkiLCJ0ZXh0IiwiZmFpbCIsImNvbXBsZXRlIiwidGFza0JpbmRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiZ2V0QW1vdW50RGF0YSIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImdvQmFjayIsImRvY0NsYXNzIiwic3BsaWNlIiwiZ2V0RG9jdW1lbnREYXRhIiwicHJldmlldyIsImZpbGVDbGFzcyIsInRleHRQYXRoIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZ2V0U3RvcmFnZSIsImtleSIsImRvd25sb2FkRmlsZSIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJ0ZW1wRmlsZVBhdGgiLCJwcmV2aWV3SW1hZ2UiLCJ1cmxzIiwib3BlbkRvY3VtZW50IiwiZmlsZVR5cGUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicHVzaCIsInNwbGl0Iiwic2VhcmNoRG9jIiwidmFsdWUiLCJwYXJlbnRJZCIsImNsZWFyRG9jIiwidG9jYXNlYmFzZSIsInRvY2FzZWludHJvZHVjZSIsInRvY2FzZXBlcnNvbm5lbGluIiwidG9jb25mbGljdGludGVyZXN0IiwiY2FzZUNsaWVudFJlbGF0aW9uTGlzdCIsInRvY29udHJhY3RpbmZvIiwidG9jbGllbnRiYXNlIiwidG9jbGllbnRsaW5rbWFuIiwiY2xpZW50SWQiLCJ0b3Zpc2l0cmVjb3JkIiwidG9jcmVhdGUiLCJ0b0NyZWF0ZVRhc2tzIiwidG9sb2dkZXRhaWwiLCJ3YXRjaCIsImNvbXB1dGVkIiwic2hvd0xvYWRpbmciLCJhamF4IiwiZ2V0RGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJjYXNlTGF3eWVyTGlzdCIsInVzZXJJZHMiLCJ1c2VySWQiLCJhcGkiLCJteURpc3RpbmN0IiwiaHR0cCIsImdldFVzZXJBdmF0YXIiLCJ1c2VyQXZhdGFyIiwiY29udHJhY3RGb3JFZGl0RGF0YSIsInBheVN0eWxlVGV4dCIsInNldFN0b3JhZ2UiLCJ0b1N0cmluZyIsImNhc2VJZCIsIkNsaWVudElkIiwicGFnZVNpemUiLCJjbGllbnRMaW5rZXJEYXRhIiwidG90YWxDb3VudCIsInJlY29yZElkIiwiQ29udGFjdHNMaXN0RGF0YSIsIlJlY29yZHNEYXRhcyIsInJlY29yZHNUb2F0YWxDb3VudCIsImNsaWVudEJhc2VJbmZvRGF0YSIsInNldFN0b3JhZ2VTeW5jIiwiVGFza1Byb2plY3RCYXNpYyIsIlRhc2tTdGFnZXNEYXRhIiwiR2V0VGFza3MiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsIkdldFRhc2tzRGF0YXMiLCJUYXNrc0RhdGEiLCJjaGlsZENoZWNrZWQiLCJpc0NvbXBsZXRlZCIsImhvdXJUaW1lIiwiRGF0ZSIsImdldEhvdXJzIiwibWlsbFRpbWUiLCJnZXRUaW1lIiwiZm9ybWF0VGltZVN5bWJvbCIsImRhdGUiLCJpc01hcmsiLCJpc1BhcnRpY2lwYW50IiwiaXNSZW1pbmQiLCJyZXNEYXRhIiwiR2V0VGFza1N0YWdlcyIsImVycm9yIiwibWVzc2FnZSIsImtleVdvcmRzIiwia2V5V29yZCIsImlzUmlnaHQiLCJteUZpbGUiLCJvbmx5RmlsZSIsInNvcnRpbmciLCJ0b3BDbGFzcyIsImRvY3VtZW50IiwiaWNvbkNsYXNzIiwiZmlsZUV4dGVuc2lvbiIsImtleXdvcmQiLCJ3b3JrTG9nc0RhdGEiLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiZW1wbG95ZWVJZCIsImlzUm9sZUZpbHRlciIsInN0YXR1c0xpc3QiLCJVc2VyQ2FzZUJpbGxpbmdDb3VudCIsIlVzZXJDYXNlQmlsbGluZyIsInRvdGFsIiwiaXRlbUlkIiwicHJvY2Vzc1N0YXR1c1RleHQiLCJjb25jYXQiLCJVc2VyQ2FzZUludm9pY2VDb3VudCIsIlVzZXJDYXNlSW52b2ljZSIsImNyZWF0aW9uVGltZSIsInN0YXR1c05hbWUiLCJVc2VyQ2FzZVJlY2VpcHRDb3VudCIsIlVzZXJDYXNlUmVjZWlwdCIsIlVzZXJDYXNlQ2hhcmdlQ291bnQiLCJVc2VyQ2FzZUNoYXJnZSIsIlVzZXJDYXNlQmlsbGluZ1RvdGFsQ291bnQiLCJHZXRVc2VyQ2FzZUJpbGxpbmciLCJjb3VudCIsIkdldFVzZXJDYXNlSW52b2ljZSIsIkdldFVzZXJDYXNlUmVjZWlwdENvdW50IiwiR2V0VXNlckNhc2VDaGFyZ2VDb3VudCIsIm9wdGlvbnMiLCJnZXRDYXNlRGF0YSIsImdldENsaWVudCIsImdldFdvcmtMb2dzIiwiR2V0Q291cnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJO0FBQ0VDLFlBQUssSztBQUNMQyxrQkFBWSxDO0FBQ1pDLGVBQVMsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQztBQUNUQyxrQkFBWSxFO0FBQ1pDLGtCQUFZLEU7QUFDWkMsZ0JBQVUsSztBQUNWO0FBQ0FDLGdCQUFVOytDQUNBLEksa0RBRU8sSSx5Q0FDVCxLLDZDQUNJLEssaURBQ0ksSyxrREFDQyxLLG9EQUNFLEssaURBQ0gsSyxtREFFRSwrQixnREFFSCxFLHFDQUVYLEMseUNBQ0ksRSwyQ0FDRSxFLGlEQUNNO0FBQ2RDLGdCQUFVO0FBQ1JkLG9CQUFZLEVBREo7QUFFUmUsbUJBQVc7QUFGSCxPQURJO0FBS2RDLGtCQUFZO0FBQ1ZDLHVCQUFlLEVBREw7QUFFVkMscUJBQWEsRUFGSDtBQUdWQywwQkFBa0IsQ0FIUjtBQUlWQyxvQkFBWSxFQUpGO0FBS1ZDLGdDQUF3QixFQUxkO0FBTVZDLG9DQUE0QixFQU5sQjtBQU9WQyx1QkFBZSxDQVBMO0FBUVZDLGtCQUFVO0FBUkEsT0FMRTtBQWVkO0FBQ0FDLGlCQUFXO0FBQ1RDLHlCQUFpQixFQURSO0FBRVRDLG9CQUFZLEVBRkg7QUFHVEMsb0JBQVksRUFISDtBQUlUQyxvQkFBWSxFQUpIO0FBS1RDLG9CQUFZLEVBTEg7QUFNVEMsaUJBQVMsQ0FOQTtBQU9UQyxpQkFBUztBQVBBLE9BaEJHO0FBeUJkO0FBQ0FDLHFCQUFlO0FBQ2JDLHNCQUFjLEVBREQ7QUFFYkMsa0JBQVUsRUFGRztBQUdiQyxtQkFBVyxFQUhFO0FBSWJDLGtCQUFVLEVBSkc7QUFLYkMsdUJBQWUsRUFMRjtBQU1iQyxvQkFBWSxFQU5DO0FBT2JDLGtCQUFTLEVBUEk7QUFRYkMsaUJBQVMsS0FSSTtBQVNiQyx3QkFBZSxFQVRGO0FBVWJDLG1CQUFVO0FBQ1JMLHlCQUFjLEVBRE47QUFFUkMsc0JBQVcsS0FGSDtBQUdSRixvQkFBUztBQUhEO0FBVkcsT0ExQkQ7QUEwQ2RPLHFCQUFlO0FBQ2JDLHFCQUFhLEVBREE7QUFFYkMsc0JBQWMsQ0FGRDtBQUdiQywwQkFBa0IsQ0FITDtBQUliQyxzQkFBYyxDQUpEO0FBS2JDLG1CQUFXLEVBTEU7QUFNYkMsaUJBQVMsRUFOSTtBQU9iQyxvQkFBWSxFQVBDO0FBUWJDLHVCQUFlO0FBUkYsT0ExQ0Q7QUFvRGRDLG1CQUFhO0FBQ1hDLG9CQUFZLEVBREQ7QUFFWEMsaUJBQVMsRUFGRTtBQUdYQyxpQkFBUyxFQUhFO0FBSVhDLG1CQUFXLEVBSkE7QUFLWEMsbUJBQVc7QUFMQSxPQXBEQztBQTJEZDtBQUNBQyxtQkFBYTtBQUNYQyxvQkFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FERDtBQUVYQyxvQkFBWSxFQUZEO0FBR1hDLDBCQUFrQixDQUhQO0FBSVhDLHVCQUFlLENBSko7QUFLWEMsNkJBQXFCLEVBTFY7QUFNWEMsK0JBQXVCLENBTlo7QUFPWEMsMEJBQWtCLEVBUFA7QUFRWEMsZ0NBQXdCLENBUmI7QUFTWEMsMEJBQWtCLEVBVFA7QUFVWEMsZ0NBQXdCLENBVmI7QUFXWEMsMEJBQWtCLEVBWFA7QUFZWEMsMEJBQWtCLEVBWlA7QUFhWEMsK0JBQXVCLENBYlo7QUFjWEMseUJBQWlCLEVBZE47QUFlWEMseUJBQWlCO0FBZk47QUE1REMsSyxzQkErRWxCQyxPLEdBQVU7QUFDUjtBQUNBO0FBQ0FDLGFBSFEsbUJBR0FDLFNBSEEsRUFHVztBQUNqQkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUssaUVBQWlFSCxTQUFqRSxHQUE2RSxnQkFBN0UsR0FBZ0csS0FBS0ksY0FBTCxDQUFvQnhELFNBQXBCLENBQThCTSxPQUE5SCxHQUF3SSxZQUF4SSxHQUF1SjtBQURoSixTQUFkO0FBR0QsT0FQTzs7QUFRUjtBQUNBbUQsZUFUUSxxQkFTRUMsTUFURixFQVNVQyxLQVRWLEVBU2lCQyxPQVRqQixFQVMwQkMsRUFUMUIsRUFTOEI7QUFBQTs7QUFDcEMsWUFBSSxDQUFDLEtBQUtMLGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkUsVUFBOUIsQ0FBeUN3RCxNQUF6QyxFQUFpREksS0FBakQsQ0FBdURILEtBQXZELEVBQThESSxTQUFuRSxFQUE4RTtBQUM1RSxlQUFLUCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJFLFVBQTlCLENBQXlDd0QsTUFBekMsRUFBaURJLEtBQWpELENBQXVESCxLQUF2RCxFQUE4REMsT0FBOUQsR0FBd0UsSUFBeEU7QUFDQSxjQUFJSSxVQUFVN0QsV0FBVyxZQUFNO0FBQzdCLG1CQUFLcUQsY0FBTCxDQUFvQnhELFNBQXBCLENBQThCRSxVQUE5QixDQUF5Q3dELE1BQXpDLEVBQWlESSxLQUFqRCxDQUF1REgsS0FBdkQsRUFBOERDLE9BQTlELEdBQXdFLEtBQXhFO0FBQ0EsbUJBQUtLLE1BQUw7QUFDRCxXQUhhLEVBR1gsQ0FIVyxDQUFkO0FBSUEsZUFBS1QsY0FBTCxDQUFvQnhELFNBQXBCLENBQThCRyxVQUE5QixHQUEyQzZELE9BQTNDO0FBQ0FYLGFBQUdhLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxVQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWGhGLHNCQUFVLElBSEM7QUFJWGlGLGtCQUFNO0FBSkssV0FBYjtBQU1ELFNBYkQsTUFhTyxJQUFJLENBQUNULE9BQUwsRUFBYztBQUNuQixlQUFLVSx3QkFBTCxDQUE4QlQsRUFBOUIsRUFBa0MsR0FBbEMsRUFBdUNELE9BQXZDO0FBQ0EsZUFBS0osY0FBTCxDQUFvQnhELFNBQXBCLENBQThCRSxVQUE5QixDQUF5Q3dELE1BQXpDLEVBQWlESSxLQUFqRCxDQUF1REgsS0FBdkQsRUFBOERDLE9BQTlELEdBQXdFLENBQUMsS0FBS0osY0FBTCxDQUFvQnhELFNBQXBCLENBQThCRSxVQUE5QixDQUF5Q3dELE1BQXpDLEVBQWlESSxLQUFqRCxDQUF1REgsS0FBdkQsRUFBOERDLE9BQXZJO0FBQ0QsU0FITSxNQUdBO0FBQ0wsZUFBS1Usd0JBQUwsQ0FBOEJULEVBQTlCLEVBQWtDLEdBQWxDLEVBQXVDRCxPQUF2QztBQUNBLGVBQUtKLGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkUsVUFBOUIsQ0FBeUN3RCxNQUF6QyxFQUFpREksS0FBakQsQ0FBdURILEtBQXZELEVBQThEQyxPQUE5RCxHQUF3RSxDQUFDLEtBQUtKLGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkUsVUFBOUIsQ0FBeUN3RCxNQUF6QyxFQUFpREksS0FBakQsQ0FBdURILEtBQXZELEVBQThEQyxPQUF2STtBQUNEO0FBQ0QsYUFBS0ssTUFBTDtBQUNELE9BL0JPOztBQWdDUjtBQUNBTSxrQkFqQ1Esd0JBaUNLVixFQWpDTCxFQWlDUztBQUNmUixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSywyREFBMkRNO0FBRHBELFNBQWQ7QUFHRCxPQXJDTzs7QUFzQ1I7QUFDQVcsZ0JBdkNRLHNCQXVDR0MsSUF2Q0gsRUF1Q1NkLEtBdkNULEVBdUNnQjtBQUFBOztBQUN0QixZQUFJZSxXQUFXLEtBQUtsQixjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJDLGVBQTlCLENBQThDMEUsTUFBOUMsR0FBdUQsQ0FBdkQsR0FBMkRoQixLQUEzRCxHQUFtRSxLQUFLSCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJDLGVBQTlCLENBQThDMEQsUUFBUSxDQUF0RCxFQUF5RGlCLElBQTVILEdBQW1JLENBQWxKO0FBQ0EsWUFBSUMsV0FBVyxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLElBQXJCLENBQWY7QUFDQXhCLFdBQUd5QixlQUFILENBQW1CO0FBQ2pCRCxvQkFBVUEsUUFETztBQUVqQkUscUJBQVcsU0FGTTtBQUdqQkMsbUJBQVMsc0JBQU87QUFDZCxnQkFBSUMsSUFBSUMsUUFBSixJQUFnQixDQUFwQixFQUF1QjtBQUNyQjdCLGlCQUFHQyxVQUFILENBQWM7QUFDWkMscUJBQUssbUVBQW1Fa0IsS0FBS3JCLFNBQXhFLEdBQW9GLFFBQXBGLEdBQStGcUIsS0FBS0csSUFBcEcsR0FBMkcsWUFBM0csR0FBMEhGO0FBRG5ILGVBQWQ7QUFHRDtBQUNELGdCQUFJTyxJQUFJQyxRQUFKLElBQWdCLENBQXBCLEVBQXVCO0FBQ3JCN0IsaUJBQUdDLFVBQUgsQ0FBYztBQUNaQyxxQkFBSyxpRUFBaUVrQixLQUFLckIsU0FBdEUsR0FBa0YsZ0JBQWxGLEdBQXFHLE9BQUtJLGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4Qk0sT0FBbkksR0FBNkksWUFBN0ksR0FBNEo7QUFEckosZUFBZDtBQUdEO0FBQ0QsZ0JBQUkyRSxJQUFJQyxRQUFKLElBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGtCQUFJVCxLQUFLVSxTQUFMLElBQWtCLENBQWxCLElBQXVCVixLQUFLVyxvQkFBTCxJQUE2QixDQUF4RCxFQUEyRDtBQUN6RCx1QkFBS0MsZUFBTCxDQUFxQlosS0FBS1osRUFBMUIsRUFBOEJGLEtBQTlCO0FBQ0QsZUFGRCxNQUVPO0FBQ0xOLG1CQUFHYSxTQUFILENBQWE7QUFDWEMseUJBQU8sZ0NBREksRUFDOEI7QUFDekNDLHdCQUFNLE1BRkssRUFFRztBQUNkaEYsNEJBQVUsSUFIQyxFQUdLO0FBQ2hCaUYsd0JBQU0sSUFKSyxFQUlDO0FBQ1pXLDJCQUFTLHNCQUFPLENBQUU7QUFMUCxpQkFBYjtBQU9EO0FBQ0Y7QUFDRjtBQTNCZ0IsU0FBbkI7QUE2QkQsT0F2RU87O0FBd0VSO0FBQ0FNLGVBekVRLHFCQXlFRXpCLEVBekVGLEVBeUVNO0FBQUE7O0FBQ1pSLFdBQUdrQyxTQUFILENBQWE7QUFDWHBCLGlCQUFPLGFBREk7QUFFWHFCLG1CQUFTLEVBRkU7QUFHWEMsc0JBQVksSUFIRDtBQUlYQyxzQkFBWSxJQUpEO0FBS1hDLHVCQUFhLFNBTEY7QUFNWEMsdUJBQWEsSUFORjtBQU9YQyx3QkFBYyxTQVBIO0FBUVhiLG1CQUFTLHNCQUFPO0FBQ2QsZ0JBQUlDLElBQUlhLE9BQVIsRUFBaUI7QUFDZixxQkFBS0MsVUFBTCxDQUFnQmxDLEVBQWhCO0FBQ0Q7QUFDRjtBQVpVLFNBQWI7QUFjRCxPQXhGTzs7QUF5RlI7QUFDQW1DLGVBMUZRLHFCQTBGRXJDLEtBMUZGLEVBMEZTO0FBQ2YsWUFDRSxLQUFLSCxjQUFMLENBQW9CNUIsV0FBcEIsQ0FBZ0NDLFVBQWhDLENBQTJDOEIsS0FBM0MsRUFBa0RzQyxVQUFsRCxLQUFpRSxJQURuRSxFQUVFO0FBQ0EsY0FBSUEsYUFBYSxLQUFLekMsY0FBTCxDQUFvQjVCLFdBQXBCLENBQWdDQyxVQUFoQyxDQUEyQzhCLEtBQTNDLEVBQ2RzQyxVQURIO0FBRUEsY0FBSUMsU0FBUyxFQUFiO0FBQ0EsZUFBSyxJQUFJQyxDQUFULElBQWNGLFVBQWQsRUFBMEI7QUFDeEJDLG1CQUFPQyxDQUFQLElBQVlGLFdBQVdFLENBQVgsRUFBY0MsSUFBMUI7QUFDRDtBQUNEL0MsYUFBR3lCLGVBQUgsQ0FBbUI7QUFDakJELHNCQUFVcUIsTUFETyxFQUNDO0FBQ2xCbEIscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjtBQUNBO0FBQ0Esa0JBQUlpQixPQUFPakIsSUFBSUMsUUFBWCxLQUF3QixJQUE1QixFQUFrQztBQUNoQztBQUNEO0FBQ0Qsa0JBQUlnQixPQUFPakIsSUFBSUMsUUFBWCxLQUF3QixJQUE1QixFQUFrQztBQUNoQztBQUNEO0FBQ0Qsa0JBQUlnQixPQUFPakIsSUFBSUMsUUFBWCxLQUF3QixJQUE1QixFQUFrQztBQUNoQzdCLG1CQUFHYSxTQUFILENBQWE7QUFDWEMseUJBQU8sUUFESTtBQUVYQyx3QkFBTSxNQUZLO0FBR1hoRiw0QkFBVSxJQUhDO0FBSVhpRix3QkFBTTtBQUpLLGlCQUFiO0FBTUQ7QUFDRDtBQUNBO0FBQ0QsYUFyQmdCO0FBc0JqQmdDLGtCQUFNLGNBQVNwQixHQUFULEVBQWMsQ0FBRSxDQXRCTDtBQXVCakJxQixzQkFBVSxrQkFBU3JCLEdBQVQsRUFBYyxDQUFFO0FBdkJULFdBQW5CO0FBeUJELFNBbENELE1Ba0NPO0FBQ0w1QixhQUFHYSxTQUFILENBQWE7QUFDWEMsbUJBQU8sUUFESTtBQUVYQyxrQkFBTSxNQUZLO0FBR1hoRixzQkFBVSxJQUhDO0FBSVhpRixrQkFBTTtBQUpLLFdBQWI7QUFNRDtBQUNGLE9BcklPOztBQXNJUjtBQUNBa0Msb0JBdklRLDBCQXVJT0MsQ0F2SVAsRUF1SVU7QUFDaEIsYUFBS2hELGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4Qk0sT0FBOUIsR0FBd0NrRyxFQUFFQyxNQUFGLENBQVNuRyxPQUFqRDtBQUNBLGFBQUsyRCxNQUFMO0FBQ0QsT0ExSU87O0FBMklSO0FBQ0F5QyxtQkE1SVEseUJBNElNRixDQTVJTixFQTRJUztBQUNmLFlBQUluRCxHQUFHc0QsWUFBUCxFQUFxQjtBQUNuQnRELGFBQUdzRCxZQUFILENBQWdCO0FBQ2RDLHVCQUFXLENBREc7QUFFZHhILHNCQUFVO0FBRkksV0FBaEI7QUFJRDtBQUNELGFBQUtvRSxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NJLGFBQWhDLEdBQWdEa0UsRUFBRUMsTUFBRixDQUFTbkcsT0FBekQ7QUFDQSxZQUFJa0csRUFBRUMsTUFBRixDQUFTbkcsT0FBVCxJQUFvQixDQUF4QixFQUEyQjtBQUN6QixlQUFLa0QsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRyxnQkFBaEMsR0FBbUQsS0FBS21CLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ00scUJBQW5GO0FBQ0Q7QUFDRCxZQUFJZ0UsRUFBRUMsTUFBRixDQUFTbkcsT0FBVCxJQUFvQixDQUF4QixFQUEyQjtBQUN6QixlQUFLa0QsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRyxnQkFBaEMsR0FBbUQsS0FBS21CLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ1Esc0JBQW5GO0FBQ0Q7QUFDRCxZQUFJOEQsRUFBRUMsTUFBRixDQUFTbkcsT0FBVCxJQUFvQixDQUF4QixFQUEyQjtBQUN6QixlQUFLa0QsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRyxnQkFBaEMsR0FBbUQsS0FBS21CLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ1Usc0JBQW5GO0FBQ0Q7QUFDRCxZQUFJNEQsRUFBRUMsTUFBRixDQUFTbkcsT0FBVCxJQUFvQixDQUF4QixFQUEyQjtBQUN6QixlQUFLa0QsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRyxnQkFBaEMsR0FBbUQsS0FBS21CLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ2EscUJBQW5GO0FBQ0Q7QUFDRixPQWhLTzs7QUFpS1I7QUFDQThELFlBbEtRLGtCQWtLRGhELEVBbEtDLEVBa0tHaUQsUUFsS0gsRUFrS2FuRCxLQWxLYixFQWtLb0I7QUFDMUIsWUFBR0EsU0FBTyxDQUFWLEVBQVk7QUFDVixlQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NLLGFBQWxDLENBQWdEa0csTUFBaEQsQ0FDRXBELFFBQU0sQ0FEUixFQUVFLEtBQUtILGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0ssYUFBbEMsQ0FBZ0Q4RCxNQUFoRCxHQUF5RGhCLEtBRjNEO0FBSUEsZUFBS0gsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDTSxVQUFsQyxDQUE2Q2lHLE1BQTdDLENBQ0VwRCxRQUFNLENBRFIsRUFFRSxLQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NNLFVBQWxDLENBQTZDNkQsTUFBN0MsR0FBc0RoQixLQUZ4RDtBQUlBLGVBQUtILGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0ksUUFBbEMsQ0FBMkNtRyxNQUEzQyxDQUNFcEQsUUFBTSxDQURSLEVBRUUsS0FBS0gsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDSSxRQUFsQyxDQUEyQytELE1BQTNDLEdBQW9EaEIsS0FGdEQ7QUFJQSxlQUFLcUQsZUFBTCxDQUFxQm5ELEVBQXJCLEVBQXlCaUQsUUFBekI7QUFDRCxTQWRELE1BY0s7QUFDRixlQUFLdEQsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDSSxRQUFsQyxHQUEyQyxFQUEzQztBQUNBLGVBQUs0QyxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NLLGFBQWxDLEdBQWdELEVBQWhEO0FBQ0EsZUFBSzJDLGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ00sVUFBbEMsR0FBNkMsRUFBN0M7QUFDQSxlQUFLa0csZUFBTCxDQUFxQixLQUFLbkQsRUFBMUIsRUFBOEIsSUFBOUI7QUFDRjtBQUVGLE9BeExPOztBQXlMUjtBQUNBb0QsYUExTFEsbUJBMExBcEQsRUExTEEsRUEwTElxRCxTQTFMSixFQTBMZUosUUExTGYsRUEwTHlCSyxRQTFMekIsRUEwTG1DO0FBQUE7O0FBQ3pDLFlBQUlELFlBQVlBLFVBQVVFLE9BQVYsQ0FBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkJDLFdBQTNCLEVBQWhCO0FBQ0EsWUFBSUgsY0FBYyxRQUFsQixFQUE0QjtBQUMxQjdELGFBQUdpRSxVQUFILENBQWM7QUFDWkMsaUJBQUssUUFETztBQUVadkMscUJBQVMsc0JBQU87QUFDZDNCLGlCQUFHbUUsWUFBSCxDQUFnQjtBQUNkQyx3QkFBUTtBQUNOLGtDQUFnQiwwQkFEVjtBQUVOQyxpQ0FBZSxZQUFZekMsSUFBSXBHO0FBRnpCLGlCQURNO0FBS2QwRSxxQkFBSyw4RUFDSE0sRUFOWTtBQU9kbUIseUJBQVMsc0JBQU87QUFDZCxzQkFBSXBFLFdBQVdxRSxJQUFJMEMsWUFBbkI7QUFDQTtBQUNBO0FBQ0EsMEJBQVFULFNBQVI7QUFDRSx5QkFBSyxLQUFMO0FBQ0U3RCx5QkFBR3VFLFlBQUgsQ0FBZ0I7QUFDZHRILGlDQUFTMkUsSUFBSTBDLFlBREMsRUFDYTtBQUMzQkUsOEJBQU0sQ0FBQzVDLElBQUkwQyxZQUFMLENBRlEsQ0FFVztBQUZYLHVCQUFoQjtBQUlBO0FBQ0YseUJBQUssS0FBTDtBQUNFdEUseUJBQUd1RSxZQUFILENBQWdCO0FBQ2R0SCxpQ0FBUzJFLElBQUkwQyxZQURDLEVBQ2E7QUFDM0JFLDhCQUFNLENBQUM1QyxJQUFJMEMsWUFBTCxDQUZRLENBRVc7QUFGWCx1QkFBaEI7QUFJQTtBQUNGO0FBQ0V0RSx5QkFBR3lFLFlBQUgsQ0FBZ0I7QUFDZGxILGtDQUFVQSxRQURJO0FBRWRtSCxrQ0FBVWIsU0FGSTtBQUdkbEMsaUNBQVMsc0JBQU87QUFDZDtBQUNBZ0Qsa0NBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDRCx5QkFQYTtBQVFkNUIsOEJBQU0sbUJBQU87QUFDWDJCLGtDQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDRDtBQVZhLHVCQUFoQjtBQVlBO0FBQ0E7QUEzQko7QUE2QkEseUJBQUtqRSxNQUFMO0FBQ0QsaUJBekNhO0FBMENkb0Msc0JBQU0sbUJBQU87QUFDWDJCLDBCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDRDtBQTVDYSxlQUFoQjtBQThDRDtBQWpEVyxXQUFkO0FBbURELFNBcERELE1Bb0RPO0FBQ0wsZUFBS2xCLGVBQUwsQ0FBcUJuRCxFQUFyQixFQUF5QmlELFFBQXpCO0FBQ0EsZUFBS3RELGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0ssYUFBbEMsQ0FBZ0RzSCxJQUFoRCxDQUFxRHJCLFFBQXJEO0FBQ0EsZUFBS3RELGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ00sVUFBbEMsQ0FBNkNxSCxJQUE3QyxDQUFrRHRFLEVBQWxEO0FBQ0EsY0FBSWpELFdBQVd1RyxTQUFTaUIsS0FBVCxDQUFlLEdBQWYsQ0FBZjtBQUNBeEgscUJBQVcsTUFBTUEsU0FBU0EsU0FBUytELE1BQVQsR0FBa0IsQ0FBM0IsQ0FBakI7QUFDQSxlQUFLbkIsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDSSxRQUFsQyxDQUEyQ3VILElBQTNDLENBQWdEdkgsUUFBaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDRDtBQUNGLE9BN1BPOztBQThQUjtBQUNBeUgsZUEvUFEscUJBK1BFN0IsQ0EvUEYsRUErUEs7QUFDWCxZQUFJOEIsUUFBUTlCLEVBQUVDLE1BQUYsQ0FBUzZCLEtBQXJCO0FBQ0EsYUFBSzlFLGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ1MsY0FBbEMsR0FBaURxSCxLQUFqRDtBQUNBLGFBQUs5RSxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NRLE9BQWxDLEdBQTBDc0gsUUFBTSxJQUFOLEdBQVcsS0FBckQ7QUFDQSxZQUFJeEIsV0FBUyxFQUFiO0FBQ0EsWUFBSXlCLFdBQVMsRUFBYjtBQUNBLFlBQUcsS0FBSy9FLGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0ksUUFBbEMsQ0FBMkMrRCxNQUEzQyxHQUFrRCxDQUFyRCxFQUF1RDtBQUNwRG1DLHFCQUFTLEtBQUt0RCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NLLGFBQWxDLENBQWdELEtBQUsyQyxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NLLGFBQWxDLENBQWdEOEQsTUFBaEQsR0FBdUQsQ0FBdkcsQ0FBVDtBQUNBNEQscUJBQVMsS0FBSy9FLGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ00sVUFBbEMsQ0FBNkMsS0FBSzBDLGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ00sVUFBbEMsQ0FBNkM2RCxNQUE3QyxHQUFvRCxDQUFqRyxDQUFUO0FBQ0YsU0FIRCxNQUdLO0FBQ0htQyxxQkFBUyxJQUFUO0FBQ0F5QixxQkFBUyxLQUFLMUUsRUFBZDtBQUNEO0FBQ0QsYUFBS21ELGVBQUwsQ0FBcUJ1QixRQUFyQixFQUErQnpCLFFBQS9CLEVBQXdDd0IsS0FBeEM7QUFDQSxhQUFLckUsTUFBTDtBQUNELE9BOVFPOztBQStRUjtBQUNBdUUsY0FoUlEsc0JBZ1JFO0FBQ1IsYUFBS2hGLGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ1EsT0FBbEMsR0FBMEMsS0FBMUM7QUFDQSxhQUFLd0MsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDUyxjQUFsQyxHQUFpRCxFQUFqRDtBQUNBLGFBQUsrRixlQUFMLENBQXFCLEtBQUtuRCxFQUExQixFQUE4QixJQUE5QjtBQUNBLGFBQUtJLE1BQUw7QUFDRCxPQXJSTzs7QUFzUlI7QUFDQXdFLGdCQXZSUSx3QkF1Uks7QUFDWHBGLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLLHlCQUF5QixLQUFLTTtBQUR2QixTQUFkO0FBR0QsT0EzUk87O0FBNFJSO0FBQ0E2RSxxQkE3UlEsNkJBNlJVO0FBQ2hCckYsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0FqU087O0FBa1NSO0FBQ0FvRix1QkFuU1EsK0JBbVNZO0FBQ2xCdEYsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUsseUNBQXlDLEtBQUtNO0FBRHZDLFNBQWQ7QUFHQTtBQUNELE9BeFNPOztBQXlTUjtBQUNBK0Usd0JBMVNRLGdDQTBTYTtBQUNuQixZQUFJLEtBQUtwRixjQUFMLENBQW9CbkUsUUFBcEIsQ0FBNkJkLFVBQTdCLENBQXdDc0ssc0JBQXhDLENBQStEbEUsTUFBL0QsR0FBd0UsQ0FBNUUsRUFBK0U7QUFDN0V0QixhQUFHQyxVQUFILENBQWM7QUFDWkMsaUJBQUssa0RBQWtELEtBQUtNO0FBRGhELFdBQWQ7QUFHRDtBQUNGLE9BaFRPOztBQWlUUjtBQUNBaUYsb0JBbFRRLDRCQWtUUztBQUNmekYsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0F0VE87O0FBdVRSO0FBQ0F3RixrQkF4VFEsMEJBd1RPO0FBQ2IxRixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQTVUTzs7QUE2VFI7QUFDQXlGLHFCQTlUUSw2QkE4VFU7QUFDaEIzRixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyw2REFBNkQsS0FBSzBGLFFBQWxFLEdBQTZFLFVBQTdFLEdBQTBGLEtBQUtwRixFQUEvRixHQUFvRztBQUQ3RixTQUFkO0FBR0QsT0FsVU87O0FBbVVSO0FBQ0FxRixtQkFwVVEsMkJBb1VRO0FBQ2Q3RixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQXhVTztBQXlVUjRGLGNBelVRLG9CQXlVQzNDLENBelVELEVBeVVJO0FBQ1YsWUFBSSxLQUFLekgsVUFBTCxJQUFtQixDQUF2QixFQUEwQjtBQUN4QixlQUFLcUssYUFBTDtBQUNEO0FBQ0QsWUFBSSxLQUFLckssVUFBTCxJQUFtQixDQUF2QixFQUEwQjtBQUN4QnNFLGFBQUdDLFVBQUgsQ0FBYztBQUNaQyxpQkFBSztBQURPLFdBQWQ7QUFHRDtBQUNGLE9BbFZPOztBQW1WUjtBQUNBOEYsaUJBcFZRLHVCQW9WSXhGLEVBcFZKLEVBb1ZRO0FBQ2RSLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLLDZDQUE2Q007QUFEdEMsU0FBZDtBQUdEO0FBeFZPLEssUUEwVlZ5RixLLEdBQVE7QUFDTnZLLGdCQURNLHNCQUNLdUIsT0FETCxFQUNjO0FBQ2xCLFlBQUkrQyxHQUFHc0QsWUFBUCxFQUFxQjtBQUNuQnRELGFBQUdzRCxZQUFILENBQWdCO0FBQ2RDLHVCQUFXLENBREc7QUFFZHhILHNCQUFVO0FBRkksV0FBaEI7QUFJRDtBQUNGO0FBUkssSyxRQVVSbUssUSxHQUFXO0FBQ1RsSCxzQkFEUyw4QkFDVTtBQUNqQixZQUFJLEtBQUttQixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NJLGFBQWhDLElBQWlELENBQXJELEVBQXdEO0FBQ3REO0FBQ0EsZUFBS2tCLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0csZ0JBQWhDLEdBQW1ELEtBQUttQixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NNLHFCQUFuRjtBQUNBO0FBQ0E7QUFDRDtBQUNELFlBQUksS0FBS2dCLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0ksYUFBaEMsSUFBaUQsQ0FBckQsRUFBd0Q7QUFDdEQ7QUFDQSxlQUFLa0IsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRyxnQkFBaEMsR0FBbUQsS0FBS21CLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ1Esc0JBQW5GO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsWUFBSSxLQUFLYyxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NJLGFBQWhDLElBQWlELENBQXJELEVBQXdEO0FBQ3REO0FBQ0EsZUFBS2tCLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0csZ0JBQWhDLEdBQW1ELEtBQUttQixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NVLHNCQUFuRjtBQUNBO0FBQ0E7QUFDRDtBQUNELFlBQUksS0FBS1ksY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDSSxhQUFoQyxJQUFpRCxDQUFyRCxFQUF3RDtBQUN0RDtBQUNBLGVBQUtrQixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NHLGdCQUFoQyxHQUFtRCxLQUFLbUIsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDYSxxQkFBbkY7QUFDQTtBQUNBO0FBQ0Q7QUFDRjtBQTFCUSxLOzs7Ozs7QUE0Qlg7b0NBQ2dCO0FBQ2QsVUFBSTZCLE9BQU8sS0FBS3BCLGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkMsZUFBOUIsQ0FBOEMwRSxNQUE5QyxHQUF1RCxDQUFsRTtBQUNBLFVBQUl2QixZQUFZLEtBQUtTLEVBQXJCO0FBQ0EsVUFBRyxLQUFLL0UsSUFBUixFQUNBdUUsR0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGFBQUssbUVBQW1FSCxTQUFuRSxHQUErRSxRQUEvRSxHQUEwRndCO0FBRG5GLE9BQWQsRUFEQSxLQUtBdkIsR0FBR0MsVUFBSCxDQUFjLEVBQUVDLEtBQUssa0NBQVAsRUFBZDtBQUNEO0FBQ0Q7Ozs7Ozs7Ozs7O0FBRUVGLG1CQUFHbUcsV0FBSCxDQUFlO0FBQ1hyRix5QkFBTyxVQURJO0FBRVhFLHdCQUFNO0FBRkssaUJBQWY7QUFJSVIsa0IsR0FBSztBQUNQQSxzQkFBSSxLQUFLQTtBQURGLGlCOzt1QkFHWTRGLGVBQUtDLE9BQUwsQ0FDbkIsb0NBRG1CLEVBRW5CLE1BRm1CLEVBR25CN0YsRUFIbUIsQzs7O0FBQWpCeEUsd0I7O3NCQU1BQSxTQUFTc0ssVUFBVCxJQUF1QixHQUF2QixJQUE4QnRLLFNBQVNSLElBQVQsQ0FBYytLLE1BQWQsS0FBeUIsSTs7Ozs7QUFFekQscUJBQUtwRyxjQUFMLENBQW9CbkUsUUFBcEIsQ0FBNkJkLFVBQTdCLEdBQTBDYyxTQUFTUixJQUFULENBQWMrSyxNQUF4RDtBQUNBO0FBQ0lDLDhCLEdBQWlCeEssU0FBU1IsSUFBVCxDQUFjK0ssTUFBZCxDQUFxQkMsYztBQUMxQzs7QUFDSUMsdUIsR0FBVSxFOztBQUNkLHFCQUFTbkcsS0FBVCxJQUFrQmtHLGNBQWxCLEVBQWtDO0FBQ2hDQywwQkFBUW5HLEtBQVIsSUFBaUJrRyxlQUFlbEcsS0FBZixFQUFzQm9HLE1BQXZDO0FBQ0Q7QUFDRCxxQkFBS0EsTUFBTCxHQUFjQyxjQUFJQyxVQUFKLENBQWVILE9BQWYsQ0FBZDtBQUNBO3NEQUNrQixLQUFLQyxNOzs7Ozs7OztBQUFkcEcscUI7O0FBQ1A7QUFDSXVHLG9CLEdBQ0Ysb0RBQ0EsS0FBS0gsTUFBTCxDQUFZcEcsS0FBWixDOzt1QkFDcUI4RixlQUFLVSxhQUFMLENBQW1CRCxJQUFuQixDOzs7QUFBbkJFLDBCOztBQUNKO0FBQ0Esb0JBQUlBLFdBQVdULFVBQVgsSUFBeUIsR0FBN0IsRUFBa0M7QUFDaEMsdUJBQUtuRyxjQUFMLENBQW9CbkUsUUFBcEIsQ0FBNkJDLFNBQTdCLENBQXVDcUUsS0FBdkMsSUFDRXlHLFdBQVd6QyxZQURiO0FBRUEsdUJBQUsxRCxNQUFMO0FBQ0QsaUJBSkQsTUFJTztBQUNMWixxQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPLE9BREk7QUFFWEMsMEJBQU0sTUFGSztBQUdYaEYsOEJBQVUsSUFIQztBQUlYaUYsMEJBQU07QUFKSyxtQkFBYjtBQU1EOzs7Ozs7dUJBRzZCb0YsZUFBS0MsT0FBTCxDQUM5QiwyQ0FEOEIsRUFFOUIsTUFGOEIsRUFHOUI3RixFQUg4QixDOzs7QUFBNUJ3RyxtQzs7QUFLSixvQkFBSUEsb0JBQW9CVixVQUFwQixJQUFrQyxHQUF0QyxFQUEyQztBQUN6QztBQUNBLHVCQUFLbkcsY0FBTCxDQUFvQm5FLFFBQXBCLENBQTZCZ0wsbUJBQTdCLEdBQ0VBLG9CQUFvQnhMLElBQXBCLENBQXlCK0ssTUFEM0I7QUFFQSxzQkFBSVMsb0JBQW9CeEwsSUFBcEIsQ0FBeUIrSyxNQUF6QixDQUFnQ1UsWUFBaEMsS0FBaUQsSUFBckQsRUFBMkQ7QUFDekQseUJBQUs5RyxjQUFMLENBQW9CbkUsUUFBcEIsQ0FBNkJpTCxZQUE3QixHQUE0Q0Qsb0JBQW9CeEwsSUFBcEIsQ0FBeUIrSyxNQUF6QixDQUFnQ1UsWUFBaEMsQ0FBNkNsRCxPQUE3QyxDQUMxQyxJQUQwQyxFQUUxQyxHQUYwQyxDQUE1QztBQUlELG1CQUxELE1BS087QUFDTCx5QkFBSzVELGNBQUwsQ0FBb0JuRSxRQUFwQixDQUE2QmlMLFlBQTdCLEdBQTRDLEtBQTVDO0FBQ0Q7QUFDRixpQkFaRCxNQVlPO0FBQ0xqSCxxQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPLGlCQURJO0FBRVhDLDBCQUFNLE1BRks7QUFHWGhGLDhCQUFVLElBSEM7QUFJWGlGLDBCQUFNO0FBSkssbUJBQWI7QUFNRDtBQUNEO0FBQ0liLDhCLEdBQWlCO0FBQ25CbkUsNEJBQVUsS0FBS21FLGNBQUwsQ0FBb0JuRSxRQUFwQixDQUE2QmQsVUFEcEI7QUFFbkI4TCx1Q0FBcUIsS0FBSzdHLGNBQUwsQ0FBb0JuRSxRQUFwQixDQUE2QmdMLG1CQUYvQjtBQUduQkMsZ0NBQWMsS0FBSzlHLGNBQUwsQ0FBb0JuRSxRQUFwQixDQUE2QmlMO0FBQzNDO0FBSm1CLGlCOztBQU1yQmpILG1CQUFHa0gsVUFBSCxDQUFjO0FBQ1poRCx1QkFBSyxnQkFETztBQUVaMUksd0JBQU0yRTtBQUZNLGlCQUFkO0FBSUEscUJBQUtTLE1BQUw7Ozs7O0FBRUEsb0JBQUk1RSxTQUFTc0ssVUFBVCxLQUF3QixHQUE1QixFQUFpQztBQUMvQnRHLHFCQUFHYSxTQUFILENBQWE7QUFDWEMsMkJBQU8sT0FESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hoRiw4QkFBVSxJQUhDO0FBSVhpRiwwQkFBTTtBQUpLLG1CQUFiO0FBTUEsdUJBQUtiLGNBQUwsQ0FBb0JuRSxRQUFwQixDQUE2QmQsVUFBN0IsR0FBMEMsSUFBMUM7QUFDRCxpQkFSRCxNQVFPLElBQUljLFNBQVNSLElBQVQsQ0FBYytLLE1BQWQsSUFBd0IsSUFBNUIsRUFBa0M7QUFDdkMsdUJBQUtwRyxjQUFMLENBQW9CbkUsUUFBcEIsQ0FBNkJkLFVBQTdCLEdBQTBDLElBQTFDO0FBQ0Q7OztBQUVILHFCQUFLMEYsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVGOzs7Ozs7Ozs7OztBQUVNZ0Ysd0IsR0FBVztBQUNicEYsc0JBQUksS0FBS29GO0FBREksaUI7O3VCQUdRUSxlQUFLQyxPQUFMLENBQ3JCLG9DQURxQixFQUVyQixNQUZxQixFQUdyQlQsUUFIcUIsQzs7O0FBQW5CMUosMEI7O3NCQU9BQSxXQUFXb0ssVUFBWCxJQUF5QixHQUF6QixJQUFnQ3BLLFdBQVdWLElBQVgsQ0FBZ0IrSyxNQUFoQixLQUEyQixJOzs7OztBQUM3RDtBQUNBLHFCQUFLcEcsY0FBTCxDQUFvQmpFLFVBQXBCLENBQStCQyxhQUEvQixHQUErQ0QsV0FBV1YsSUFBWCxDQUFnQitLLE1BQS9EO0FBQ0E7QUFDQSxvQkFBSXJLLFdBQVdWLElBQVgsQ0FBZ0IrSyxNQUFoQixDQUF1QjdKLFFBQXZCLEtBQW9DLElBQXhDLEVBQThDO0FBQzVDLHVCQUFLeUQsY0FBTCxDQUFvQmpFLFVBQXBCLENBQStCUSxRQUEvQixHQUEwQ1IsV0FBV1YsSUFBWCxDQUFnQitLLE1BQWhCLENBQXVCN0osUUFBdkIsQ0FDdkNxSSxLQUR1QyxDQUNqQyxHQURpQyxFQUM1QixDQUQ0QixFQUV2Q29DLFFBRnVDLEVBQTFDO0FBR0QsaUJBSkQsTUFJTztBQUNMLHVCQUFLaEgsY0FBTCxDQUFvQmpFLFVBQXBCLENBQStCUSxRQUEvQixHQUEwQyxLQUExQztBQUNEO0FBQ0Q7QUFDSWtKLHdCLEdBQVc7QUFDYndCLDBCQUFRLEtBQUs1RyxFQURBO0FBRWI2Ryw0QkFBVSxLQUFLekIsUUFGRjtBQUdiNUksOEJBQVksQ0FIQztBQUlic0ssNEJBQVU7QUFKRyxpQjs7dUJBTWNsQixlQUFLQyxPQUFMLENBQzNCLHdEQUQyQixFQUUzQixNQUYyQixFQUczQlQsUUFIMkIsQzs7O0FBQXpCMkIsZ0M7O3NCQU1BQSxpQkFBaUJqQixVQUFqQixJQUErQixHOzs7OztBQUNqQyxxQkFBS25HLGNBQUwsQ0FBb0JqRSxVQUFwQixDQUErQkksVUFBL0IsR0FDRWlMLGlCQUFpQi9MLElBQWpCLENBQXNCK0ssTUFBdEIsQ0FBNkI5RixLQUQvQjtBQUVBLHFCQUFLTixjQUFMLENBQW9CakUsVUFBcEIsQ0FBK0JHLGdCQUEvQixHQUFrRGtMLGlCQUFpQi9MLElBQWpCLENBQXNCK0ssTUFBdEIsQ0FBNkJpQixVQUEvRTtBQUNJRCxnQyxHQUFtQkEsaUJBQWlCL0wsSUFBakIsQ0FBc0IrSyxNQUF0QixDQUE2QjlGLEs7dURBQ2xDOEcsZ0I7Ozs7Ozs7O0FBQVRqSCxxQjtBQUNIRSxrQixHQUFLK0csaUJBQWlCakgsS0FBakIsRUFBd0JFLEU7QUFDN0JxRyxvQixHQUNGLGdFQUFnRXJHLEU7O3VCQUMxQzRGLGVBQUtVLGFBQUwsQ0FBbUJELElBQW5CLEM7OztBQUFwQnpLLDJCOztBQUNKLG9CQUFJQSxZQUFZa0ssVUFBWixJQUEwQixHQUE5QixFQUFtQztBQUNqQyx1QkFBS25HLGNBQUwsQ0FBb0JqRSxVQUFwQixDQUErQkUsV0FBL0IsQ0FBMkNrRSxLQUEzQyxJQUNFbEUsWUFBWWtJLFlBRGQ7QUFFQSx1QkFBS25FLGNBQUwsQ0FBb0JqRSxVQUFwQixDQUErQkksVUFBL0IsQ0FBMENnRSxLQUExQyxFQUFpRCxRQUFqRCxJQUE2RGxFLFlBQVlrSSxZQUF6RTtBQUNELGlCQUpELE1BSU87QUFDTHRFLHFCQUFHYSxTQUFILENBQWE7QUFDWEMsMkJBQU8sU0FESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hoRiw4QkFBVSxJQUhDO0FBSVhpRiwwQkFBTTtBQUpLLG1CQUFiO0FBTUQ7Ozs7O0FBRUgscUJBQUtKLE1BQUw7Ozs7O0FBRUFaLG1CQUFHYSxTQUFILENBQWE7QUFDWEMseUJBQU8sU0FESTtBQUVYQyx3QkFBTSxNQUZLO0FBR1hoRiw0QkFBVSxJQUhDO0FBSVhpRix3QkFBTTtBQUpLLGlCQUFiOzs7QUFPRjtBQUNJeUcsd0IsR0FBVztBQUNiN0IsNEJBQVUsS0FBS0EsUUFERjtBQUViNUksOEJBQVksQ0FGQztBQUdic0ssNEJBQVU7QUFIRyxpQjs7dUJBS29CbEIsZUFBS0MsT0FBTCxDQUNqQyw2REFEaUMsRUFFakMsTUFGaUMsRUFHakNvQixRQUhpQyxDOzs7QUFBL0JsTCxzQzs7QUFLSixvQkFBSUEsdUJBQXVCK0osVUFBdkIsSUFBcUMsR0FBckMsSUFBNEMvSix1QkFBdUJmLElBQXZCLENBQTRCK0ssTUFBNUIsQ0FBbUM5RixLQUFuQyxDQUF5Q2EsTUFBekMsS0FBb0QsQ0FBcEcsRUFBdUc7QUFDckcsdUJBQUtuQixjQUFMLENBQW9CakUsVUFBcEIsQ0FBK0JLLHNCQUEvQixHQUNFQSx1QkFBdUJmLElBQXZCLENBQTRCK0ssTUFBNUIsQ0FBbUM5RixLQURyQztBQUVBLHVCQUFLTixjQUFMLENBQW9CakUsVUFBcEIsQ0FBK0JPLGFBQS9CLEdBQStDRix1QkFBdUJmLElBQXZCLENBQTRCK0ssTUFBNUIsQ0FBbUNpQixVQUFsRjtBQUNBO0FBQ0EsdUJBQUtySCxjQUFMLENBQW9CakUsVUFBcEIsQ0FBK0JNLDBCQUEvQixHQUNFRCx1QkFBdUJmLElBQXZCLENBQTRCK0ssTUFBNUIsQ0FBbUM5RixLQUFuQyxDQUF5QyxDQUF6QyxDQURGO0FBRUQ7QUFDRDtBQUNJaUgsZ0MsR0FBbUI7QUFDckJqSCx5QkFBTyxLQUFLTixjQUFMLENBQW9CakUsVUFBcEIsQ0FBK0JJLFVBRGpCO0FBRXJCa0wsOEJBQVksS0FBS3JILGNBQUwsQ0FBb0JqRSxVQUFwQixDQUErQkc7QUFFN0M7QUFKdUIsaUI7QUFLbkJzTCw0QixHQUFlO0FBQ2pCbEgseUJBQU8sS0FBS04sY0FBTCxDQUFvQmpFLFVBQXBCLENBQStCSyxzQkFEckI7QUFFakJpTCw4QkFBWSxLQUFLckgsY0FBTCxDQUFvQmpFLFVBQXBCLENBQStCMEw7QUFFN0M7QUFKbUIsaUI7QUFLZnpMLDZCLEdBQWdCO0FBQ2xCMEwsc0NBQW9CLEtBQUsxSCxjQUFMLENBQW9CakUsVUFBcEIsQ0FBK0JDLGFBRGpDLEVBQ2dEO0FBQ2xFdUwsb0NBQWtCQSxnQkFGQSxFQUVrQjtBQUNwQ0MsZ0NBQWNBLFlBSEksQ0FHVTtBQUhWLGlCOztBQUtwQjNILG1CQUFHOEgsY0FBSCxDQUFrQixZQUFsQixFQUFnQzNMLGFBQWhDO0FBQ0EscUJBQUt5RSxNQUFMOzs7OztBQUVBLG9CQUFJMUUsV0FBV29LLFVBQVgsS0FBMEIsR0FBOUIsRUFBbUM7QUFDakMsdUJBQUtuRyxjQUFMLENBQW9CakUsVUFBcEIsQ0FBK0JDLGFBQS9CLEdBQStDLElBQS9DO0FBQ0E2RCxxQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPLE9BREk7QUFFWEMsMEJBQU0sTUFGSztBQUdYaEYsOEJBQVUsSUFIQztBQUlYaUYsMEJBQU07QUFKSyxtQkFBYjtBQU1ELGlCQVJELE1BUU8sSUFBSTlFLFdBQVdWLElBQVgsQ0FBZ0IrSyxNQUFoQixJQUEwQixJQUE5QixFQUFvQztBQUN6Qyx1QkFBS3BHLGNBQUwsQ0FBb0JqRSxVQUFwQixDQUErQkMsYUFBL0IsR0FBK0MsSUFBL0M7QUFDRDs7O0FBRUgscUJBQUt5RSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUY7QUFDQTs7Ozs7Ozs7Ozs7QUFFTXBGLG9CLEdBQU87QUFDVHVFLDZCQUFXLEtBQUtTO0FBRFAsaUI7O3VCQUdrQjRGLGVBQUtDLE9BQUwsQ0FDM0IsbURBRDJCLEVBRTNCLE1BRjJCLEVBRzNCLEVBQUM3RixJQUFHLEtBQUtBLEVBQVQsRUFIMkIsQzs7O0FBQXpCdUgsZ0M7O29CQUtBQSxpQkFBaUJ2TSxJQUFqQixDQUFzQitLLE1BQXRCLENBQTZCL0YsRTs7Ozs7a0RBQzFCLEs7OztBQUVQLHFCQUFLL0UsSUFBTCxHQUFZLElBQVo7Ozs7dUJBQzRCMkssZUFBS0MsT0FBTCxDQUMxQiw4Q0FEMEIsRUFFMUIsTUFGMEIsRUFHMUI3SyxJQUgwQixDOzs7QUFBeEJvQiwrQjsrQkFLSUEsZ0JBQWdCMEosVTtrREFDakIsRyx5QkFlQSxHLHlCQU1BLEc7Ozs7QUFwQkgsb0JBQUkxSixnQkFBZ0JwQixJQUFoQixDQUFxQitLLE1BQXJCLENBQTRCakYsTUFBNUIsS0FBdUMsQ0FBM0MsRUFBOEM7QUFDNUM7QUFDSTBHLGdDQUZ3QyxHQUV2QnBMLGdCQUFnQnBCLElBQWhCLENBQXFCK0ssTUFGRTs7QUFHNUMsdUJBQUtwRyxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJDLGVBQTlCLEdBQWdEb0wsY0FBaEQ7QUFDQSx1QkFBUzFILEtBQVQsSUFBa0IwSCxjQUFsQixFQUFrQztBQUM1QjlLLDJCQUQ0QixHQUNsQjhLLGVBQWUxSCxLQUFmLEVBQXNCRSxFQURKOztBQUVoQyx5QkFBS0wsY0FBTCxDQUFvQnhELFNBQXBCLENBQThCTyxPQUE5QixDQUFzQ29ELEtBQXRDLElBQStDMEgsZUFBZTFILEtBQWYsRUFBc0JFLEVBQXJFO0FBQ0EseUJBQUtMLGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkssVUFBOUIsQ0FBeUNzRCxLQUF6QyxJQUFrRCxDQUFsRDtBQUNBLHlCQUFLSCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJJLFVBQTlCLENBQXlDdUQsS0FBekMsSUFBa0QsR0FBbEQ7QUFDQSx5QkFBSzJILFFBQUwsQ0FBYzNILEtBQWQsRUFBcUJwRCxPQUFyQjtBQUNEO0FBQ0QsdUJBQUswRCxNQUFMO0FBQ0Q7Ozs7QUFHRCtELHdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLHFCQUFLc0QsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXlDLENBQXpDO0FBQ0EscUJBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQW1DLElBQW5DO0FBQ0EscUJBQUt4SCxNQUFMOzs7O0FBR0ErRCx3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxxQkFBS3NELFdBQUwsQ0FBaUJDLHFCQUFqQixHQUF5QyxDQUF6QztBQUNBLHFCQUFLRCxXQUFMLENBQWlCRSxlQUFqQixHQUFtQyxJQUFuQztBQUNBLHFCQUFLeEgsTUFBTDs7Ozs7O0FBSUoscUJBQUtBLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRjs7Ozs7NEZBQ2VOLEssRUFBT3BELE87Ozs7OztBQUNoQjFCLG9CLEdBQU87QUFDVHdCLDhCQUFZLEtBQUttRCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJLLFVBQTlCLENBQXlDc0QsS0FBekMsQ0FESDtBQUVUZ0gsNEJBQVUsR0FGRDtBQUdUcEssMkJBQVNBLE9BSEE7QUFJVDZDLDZCQUFXLEtBQUtTO0FBSlAsaUI7O3VCQU1lNEYsZUFBS0MsT0FBTCxDQUN4Qix5Q0FEd0IsRUFFeEIsTUFGd0IsRUFHeEI3SyxJQUh3QixDOzs7QUFBdEI2TSw2Qjs7QUFLSixvQkFBSUEsY0FBYzdNLElBQWQsQ0FBbUIrSyxNQUFuQixDQUEwQjlGLEtBQTFCLENBQWdDYSxNQUFoQyxLQUEyQyxDQUEvQyxFQUFrRDtBQUM1Q2dILDJCQUQ0QyxHQUNoQ0QsY0FBYzdNLElBQWQsQ0FBbUIrSyxNQURhO0FBRTVDZ0MsOEJBRjRDLEdBRTdCLEVBRjZCOztBQUdoRCx1QkFBU3pGLENBQVQsSUFBY3dGLFVBQVU3SCxLQUF4QixFQUErQjtBQUM3Qix3QkFBSTZILFVBQVU3SCxLQUFWLENBQWdCcUMsQ0FBaEIsRUFBbUIwRixXQUFuQixJQUFrQyxHQUF0QyxFQUEyQztBQUN6Q0YsZ0NBQVU3SCxLQUFWLENBQWdCcUMsQ0FBaEIsRUFBbUIsU0FBbkIsSUFBZ0MsSUFBaEM7QUFDRCxxQkFGRCxNQUVPO0FBQ0x3RixnQ0FBVTdILEtBQVYsQ0FBZ0JxQyxDQUFoQixFQUFtQixTQUFuQixJQUFnQyxLQUFoQztBQUNEO0FBQ0Qsd0JBQUl3RixVQUFVN0gsS0FBVixDQUFnQnFDLENBQWhCLEVBQW1CMEYsV0FBbkIsSUFBa0MsR0FBdEMsRUFBMkM7QUFDekNGLGdDQUFVN0gsS0FBVixDQUFnQnFDLENBQWhCLEVBQW1CLFdBQW5CLElBQWtDLEtBQWxDO0FBQ0QscUJBRkQsTUFFTztBQUNMd0YsZ0NBQVU3SCxLQUFWLENBQWdCcUMsQ0FBaEIsRUFBbUIsV0FBbkIsSUFBa0MsSUFBbEM7QUFDRDtBQUNELHdCQUFJd0YsVUFBVTdILEtBQVYsQ0FBZ0JxQyxDQUFoQixFQUFtQjFFLE9BQXZCLEVBQWdDO0FBQzlCO0FBQ0lxSyw4QkFGMEIsR0FFakIsSUFBSUMsSUFBSixDQUFTSixVQUFVN0gsS0FBVixDQUFnQnFDLENBQWhCLEVBQW1CMUUsT0FBNUIsRUFBcUN1SyxRQUFyQyxFQUZpQjs7QUFHMUIsMEJBQUdGLFdBQVMsQ0FBVCxJQUFZQSxXQUFTLEVBQXhCLEVBQTJCO0FBQ25CRyxnQ0FEbUIsR0FDVixJQUFJRixJQUFKLENBQVNKLFVBQVU3SCxLQUFWLENBQWdCcUMsQ0FBaEIsRUFBbUIxRSxPQUE1QixFQUFxQ3lLLE9BQXJDLEtBQWdELElBQUUsRUFBRixHQUFLLEVBQUwsR0FBUSxJQUQ5Qzs7QUFFdkJQLGtDQUFVN0gsS0FBVixDQUFnQnFDLENBQWhCLEVBQW1CMUUsT0FBbkIsR0FBMkIsSUFBSXNLLElBQUosQ0FBU0UsUUFBVCxDQUEzQjtBQUNILHVCQUhELE1BR0s7QUFDR0EsZ0NBREgsR0FDYSxLQUFHLEVBQUgsR0FBTSxFQUFOLEdBQVMsSUFBVixHQUFnQixJQUFJRixJQUFKLENBQVNKLFVBQVU3SCxLQUFWLENBQWdCcUMsQ0FBaEIsRUFBbUIxRSxPQUE1QixFQUFxQ3lLLE9BQXJDLEVBRDVCOztBQUVGUCxrQ0FBVTdILEtBQVYsQ0FBZ0JxQyxDQUFoQixFQUFtQjFFLE9BQW5CLEdBQTJCLElBQUlzSyxJQUFKLENBQVNFLFFBQVQsQ0FBM0I7QUFDRjtBQUNITixnQ0FBVTdILEtBQVYsQ0FBZ0JxQyxDQUFoQixFQUFtQjFFLE9BQW5CLEdBQTZCdUksY0FBSW1DLGdCQUFKLENBQXFCUixVQUFVN0gsS0FBVixDQUFnQnFDLENBQWhCLEVBQW1CMUUsT0FBeEMsRUFBaUQsR0FBakQsQ0FBN0I7QUFDSDtBQUNGO0FBQ0QsdUJBQUsrQixjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJFLFVBQTlCLENBQXlDeUQsS0FBekMsSUFBa0RnSSxTQUFsRDtBQUNBLHVCQUFLbkksY0FBTCxDQUFvQnhELFNBQXBCLENBQThCSSxVQUE5QixDQUF5Q3VELEtBQXpDLEtBQW1EZ0ksVUFBVTdILEtBQVYsQ0FBZ0JhLE1BQWhCLEdBQXlCLEdBQTVFO0FBQ0QsaUJBN0JELE1BNkJPO0FBQ0w7QUFDQSx1QkFBS25CLGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkUsVUFBOUIsQ0FBeUN5RCxLQUF6QyxJQUFrRDtBQUNoRGMsMEJBQU0sRUFEMEM7QUFFaERvRyxnQ0FBWTtBQUZvQyxtQkFBbEQ7QUFJRDtBQUNEO0FBQ0EscUJBQUs1RyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUY7Ozs7OzRGQUMrQkosRSxFQUFJZ0ksVyxFQUFhakksTzs7Ozs7O0FBQzFDd0ksb0IsR0FBTyxJQUFJTCxJQUFKLEU7QUFDUGxOLG9CLEdBQU87QUFDVHdOLDBCQUFRLEdBREM7QUFFVEMsaUNBQWUsR0FGTjtBQUdUQyw0QkFBVSxHQUhEO0FBSVQ5SywyQkFBUzJLLElBSkE7QUFLVHZJLHNCQUFJQSxFQUxLO0FBTVRnSSwrQkFBYUEsV0FOSjtBQU9UekksNkJBQVcsS0FBS1M7QUFQUCxpQjs7dUJBU0s0RixlQUFLQyxPQUFMLENBQ2QsNERBRGMsRUFFZCxNQUZjLEVBR2Q3SyxJQUhjLEM7OztBQUFab0csbUI7O0FBS0osb0JBQUlBLElBQUlwRyxJQUFKLENBQVNtRyxPQUFiLEVBQXNCO0FBQ3BCLHNCQUFJQyxJQUFJMEUsVUFBSixJQUFrQixHQUFsQixJQUF5QjFFLElBQUlwRyxJQUFKLENBQVNtRyxPQUF0QyxFQUErQztBQUM3Qyx3QkFBSSxDQUFDcEIsT0FBTCxFQUFjO0FBQ1pQLHlCQUFHYSxTQUFILENBQWE7QUFDWEMsK0JBQU8sS0FESTtBQUVYQyw4QkFBTSxNQUZLO0FBR1hoRixrQ0FBVSxJQUhDO0FBSVhpRiw4QkFBTTtBQUpLLHVCQUFiO0FBTUQscUJBUEQsTUFPTztBQUNMaEIseUJBQUdhLFNBQUgsQ0FBYTtBQUNYQywrQkFBTyxLQURJO0FBRVhDLDhCQUFNLE1BRks7QUFHWGhGLGtDQUFVLElBSEM7QUFJWGlGLDhCQUFNO0FBSkssdUJBQWI7QUFNRDtBQUNGO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSDs7Ozs7NEZBQ3NCUixFLEVBQUlGLEs7Ozs7Ozs7dUJBQ0o4RixlQUFLQyxPQUFMLENBQ2xCLGdEQURrQixFQUVsQixNQUZrQixFQUVWO0FBQ043RixzQkFBSUE7QUFERSxpQkFGVSxDOzs7QUFBaEIySSx1Qjs7QUFNSixvQkFBSUEsUUFBUTdDLFVBQVIsSUFBc0IsR0FBMUIsRUFBK0I7QUFDN0IsdUJBQUtuRyxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJJLFVBQTlCLEdBQTJDLEtBQUtvRCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJJLFVBQTlCLENBQXlDMkcsTUFBekMsQ0FBZ0RwRCxLQUFoRCxFQUF1RCxDQUF2RCxDQUEzQztBQUNBLHVCQUFLSCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJLLFVBQTlCLEdBQTJDLEtBQUttRCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJLLFVBQTlCLENBQXlDMEcsTUFBekMsQ0FBZ0RwRCxLQUFoRCxFQUF1RCxDQUF2RCxDQUEzQztBQUNBLHVCQUFLSCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJPLE9BQTlCLEdBQXdDLEtBQUtpRCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJPLE9BQTlCLENBQXNDd0csTUFBdEMsQ0FBNkNwRCxLQUE3QyxFQUFvRCxDQUFwRCxDQUF4QztBQUNBLHNCQUFJLEtBQUtyRCxPQUFMLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEIseUJBQUtBLE9BQUwsR0FBZSxLQUFLQSxPQUFMLEdBQWUsQ0FBOUI7QUFDRCxtQkFGRCxNQUVPO0FBQ0wseUJBQUtBLE9BQUwsR0FBZSxDQUFmO0FBQ0Q7QUFDRCxzQkFBSSxLQUFLa0QsY0FBTCxDQUFvQnhELFNBQXBCLENBQThCTSxPQUE5QixHQUF3QyxDQUE1QyxFQUErQztBQUM3Qyx5QkFBS2tELGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4Qk0sT0FBOUIsR0FBd0MsS0FBS2tELGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4Qk0sT0FBOUIsR0FBd0MsQ0FBaEY7QUFDRCxtQkFGRCxNQUVPO0FBQ0wseUJBQUtrRCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJNLE9BQTlCLEdBQXdDLENBQXhDO0FBQ0Q7QUFDRCx1QkFBS21NLGFBQUw7QUFDQSx1QkFBS3hJLE1BQUw7QUFDRCxpQkFoQkQsTUFnQk87QUFDTFoscUJBQUdhLFNBQUgsQ0FBYTtBQUNYQywyQkFBT3FJLFFBQVEzTixJQUFSLENBQWE2TixLQUFiLENBQW1CQyxPQURmO0FBRVh2SSwwQkFBTSxNQUZLO0FBR1hoRiw4QkFBVSxJQUhDO0FBSVhpRiwwQkFBTTtBQUpLLG1CQUFiO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSDs7Ozs7NEZBQ2lCUixFOzs7Ozs7QUFDWGhGLG9CLEdBQU87QUFDVGdGO0FBRFMsaUI7O3VCQUdTNEYsZUFBS0MsT0FBTCxDQUNsQiwyQ0FEa0IsRUFFbEIsTUFGa0IsRUFHbEI3SyxJQUhrQixDOzs7QUFBaEIyTix1Qjs7QUFLSixvQkFBSUEsUUFBUTdDLFVBQVIsSUFBc0IsR0FBMUIsRUFBK0I7QUFDN0IsdUJBQUtuRyxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJFLFVBQTlCLENBQXlDMkssVUFBekMsSUFBdUQsQ0FBdkQ7QUFDQSx1QkFBS3JILGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkUsVUFBOUIsQ0FBeUM0RCxLQUF6QyxHQUFpRCxLQUFLTixjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJFLFVBQTlCLENBQXlDNkcsTUFBekMsQ0FBZ0RwRCxLQUFoRCxFQUF1RCxDQUF2RCxDQUFqRDtBQUNBLHVCQUFLSCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJNLE9BQTlCLEdBQXdDLEtBQUtrRCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJNLE9BQXRFO0FBQ0EsdUJBQUttTSxhQUFMO0FBQ0EsdUJBQUtuQixRQUFMO0FBQ0EsdUJBQUtySCxNQUFMO0FBQ0QsaUJBUEQsTUFPTztBQUNMWixxQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPcUksUUFBUTNOLElBQVIsQ0FBYTZOLEtBQWIsQ0FBbUJDLE9BRGY7QUFFWHZJLDBCQUFNLE1BRks7QUFHWGhGLDhCQUFVLElBSEM7QUFJWGlGLDBCQUFNO0FBSkssbUJBQWI7QUFNRDs7Ozs7Ozs7Ozs7Ozs7OztBQUVIOzs7Ozs0RkFDc0J5QyxRLEVBQVV5QixRLEVBQVVxRSxROzs7Ozs7QUFDcENDLHVCLEdBQVVELFlBQVksRTtBQUN0Qi9OLG9CLEdBQU87QUFDVDtBQUNBNEwsMEJBQVEsS0FBSzVHLEVBRko7QUFHVGlELDRCQUFVQSxRQUhEO0FBSVRnRywyQkFBUyxDQUpBO0FBS1RDLDBCQUFRLEtBTEM7QUFNVEMsNEJBQVUsS0FORDtBQU9UM00sOEJBQVksQ0FQSDtBQVFUc0ssNEJBQVUsRUFSRDtBQVNUcEMsNEJBQVVBLFFBVEQ7QUFVVDBFLDJCQUFTLFVBVkE7QUFXVDlJLHlCQUFPMEksT0FYRTtBQVlUSyw0QkFBVTtBQVpELGlCOzt1QkFjY3pELGVBQUtDLE9BQUwsQ0FDdkIsb0RBRHVCLEVBRXZCLE1BRnVCLEVBR3ZCN0ssSUFIdUIsQzs7O0FBQXJCNEIsNEI7O3NCQU1GQSxhQUFha0osVUFBYixJQUEyQixHQUEzQixJQUFnQ2xKLGFBQWE1QixJQUFiLENBQWtCK0ssTUFBbEIsQ0FBeUI5RixLQUF6QixDQUErQmEsTUFBL0IsR0FBc0MsQzs7Ozs7QUFFdEU7QUFDQTtBQUNBLHFCQUFLbkIsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDQyxZQUFsQyxHQUFnREEsYUFBYTVCLElBQWIsQ0FBa0IrSyxNQUFsQixDQUF5QjlGLEtBQXpFO0FBQ0lxSix3QixHQUFXMU0sYUFBYTVCLElBQWIsQ0FBa0IrSyxNQUFsQixDQUF5QjlGLEs7QUFDeEM7O3VEQUNrQnFKLFE7Ozs7Ozs7O0FBQVR4SixxQjs7QUFDUDtBQUNJeUoseUIsR0FBWUQsU0FBU3hKLEtBQVQsRUFBZ0IwSixhQUFoQixDQUE4QmhHLFdBQTlCLEU7K0JBQ1IrRixTO2tEQUNELE0seUJBSUEsTSx5QkFJQSxNLHlCQUlBLE8seUJBSUEsTyx5QkFJQSxNLHlCQUlBLE0seUJBSUEsUTs7OztBQTNCSCxxQkFBSzVKLGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0UsUUFBbEMsQ0FBMkNpRCxLQUEzQyxJQUFvRCxjQUFwRDtBQUNBLHFCQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NHLFNBQWxDLENBQTRDZ0QsS0FBNUMsSUFBcUQsU0FBckQ7Ozs7QUFHQSxxQkFBS0gsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDRSxRQUFsQyxDQUEyQ2lELEtBQTNDLElBQW9ELGNBQXBEO0FBQ0EscUJBQUtILGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0csU0FBbEMsQ0FBNENnRCxLQUE1QyxJQUFxRCxTQUFyRDs7OztBQUdBLHFCQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NFLFFBQWxDLENBQTJDaUQsS0FBM0MsSUFBb0QsV0FBcEQ7QUFDQSxxQkFBS0gsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDRyxTQUFsQyxDQUE0Q2dELEtBQTVDLElBQXFELFNBQXJEOzs7O0FBR0EscUJBQUtILGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0UsUUFBbEMsQ0FBMkNpRCxLQUEzQyxJQUFvRCxXQUFwRDtBQUNBLHFCQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NHLFNBQWxDLENBQTRDZ0QsS0FBNUMsSUFBcUQsU0FBckQ7Ozs7QUFHQSxxQkFBS0gsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDRSxRQUFsQyxDQUEyQ2lELEtBQTNDLElBQW9ELFlBQXBEO0FBQ0EscUJBQUtILGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0csU0FBbEMsQ0FBNENnRCxLQUE1QyxJQUFxRCxTQUFyRDs7OztBQUdBLHFCQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NFLFFBQWxDLENBQTJDaUQsS0FBM0MsSUFBb0QsWUFBcEQ7QUFDQSxxQkFBS0gsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDRyxTQUFsQyxDQUE0Q2dELEtBQTVDLElBQXFELFNBQXJEOzs7O0FBR0EscUJBQUtILGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0UsUUFBbEMsQ0FBMkNpRCxLQUEzQyxJQUFvRCxlQUFwRDtBQUNBLHFCQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NHLFNBQWxDLENBQTRDZ0QsS0FBNUMsSUFBcUQsU0FBckQ7Ozs7QUFHQSxxQkFBS0gsY0FBTCxDQUFvQmhELGFBQXBCLENBQWtDRSxRQUFsQyxDQUEyQ2lELEtBQTNDLElBQW9ELGNBQXBEO0FBQ0EscUJBQUtILGNBQUwsQ0FBb0JoRCxhQUFwQixDQUFrQ0csU0FBbEMsQ0FBNENnRCxLQUE1QyxJQUFxRCxTQUFyRDs7OztBQUdBLHFCQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NFLFFBQWxDLENBQTJDaUQsS0FBM0MsSUFDRSx5QkFERjtBQUVBLHFCQUFLSCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NHLFNBQWxDLENBQTRDZ0QsS0FBNUMsSUFBcUQsU0FBckQ7Ozs7Ozs7Ozs7OztBQUtOLG9CQUFJbEQsYUFBYWtKLFVBQWIsS0FBNEIsR0FBaEMsRUFBcUM7QUFDbkMsdUJBQUtuRyxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NDLFlBQWxDLEdBQWlELEVBQWpEO0FBQ0E0QyxxQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPLE9BREk7QUFFWEMsMEJBQU0sTUFGSztBQUdYaEYsOEJBQVUsSUFIQztBQUlYaUYsMEJBQU07QUFKSyxtQkFBYjtBQU1ELGlCQVJELE1BUU8sSUFBSTVELGFBQWE1QixJQUFiLENBQWtCK0ssTUFBbEIsQ0FBeUI5RixLQUF6QixDQUErQmEsTUFBL0IsSUFBeUMsQ0FBN0MsRUFBZ0Q7QUFDckQsdUJBQUtuQixjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NDLFlBQWxDLEdBQWlELEVBQWpEO0FBQ0Q7OztBQUVILHFCQUFLd0QsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVGOzs7Ozs7Ozs7OztBQUVNcEYsb0IsR0FBTztBQUNUNEwsMEJBQVEsS0FBSzVHLEVBREo7QUFFVHlKLDJCQUFTLEVBRkE7QUFHVGpOLDhCQUFZLENBSEg7QUFJVHNLLDRCQUFVLEVBSkQ7QUFLVHNDLDJCQUFTO0FBTEEsaUI7O3VCQU9jeEQsZUFBS0MsT0FBTCxDQUN2Qix1Q0FEdUIsRUFFdkIsTUFGdUIsRUFHdkI3SyxJQUh1QixDOzs7QUFBckIwTyw0Qjs7c0JBUUZBLGFBQWE1RCxVQUFiLElBQTJCLEdBQTNCLElBQ0E0RCxhQUFhMU8sSUFBYixDQUFrQitLLE1BQWxCLENBQXlCOUYsS0FBekIsQ0FBK0JhLE1BQS9CLEtBQTBDLEM7Ozs7O0FBRTFDLHFCQUFLbkIsY0FBTCxDQUFvQnJDLGFBQXBCLENBQWtDQyxXQUFsQyxHQUNFbU0sYUFBYTFPLElBQWIsQ0FBa0IrSyxNQUFsQixDQUF5QjlGLEtBRDNCO0FBRUkxQywyQixHQUFjbU0sYUFBYTFPLElBQWIsQ0FBa0IrSyxNQUFsQixDQUF5QjlGLEs7O0FBQzNDLHFCQUFLTixjQUFMLENBQW9CckMsYUFBcEIsQ0FBa0NFLFlBQWxDLEdBQStDRCxZQUFZb00sTUFBWixDQUFtQixVQUFDQyxHQUFELEVBQUtDLEdBQUwsRUFBVztBQUN4RTFGLDBCQUFRQyxHQUFSLENBQVl5RixHQUFaO0FBQ0QseUJBQU9BLElBQUlyTSxZQUFKLEdBQWlCb00sR0FBeEI7QUFDSCxpQkFIOEMsQ0FBL0M7dURBSWtCck0sVzs7Ozs7Ozs7QUFBVHVDLHFCOztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFCQUFLSCxjQUFMLENBQW9CckMsYUFBcEIsQ0FBa0NHLGdCQUFsQyxJQUFzRHFNLE9BQ3BEdk0sWUFBWXVDLEtBQVosRUFBbUJyQyxnQkFBbkIsQ0FBb0NzTSxPQUFwQyxDQUE0QyxDQUE1QyxDQURvRCxDQUF0RCxDLENBRUc7QUFDSCxxQkFBS3BLLGNBQUwsQ0FBb0JyQyxhQUFwQixDQUFrQ0ksWUFBbEMsSUFBa0RvTSxPQUNoRHZNLFlBQVl1QyxLQUFaLEVBQW1CcEMsWUFBbkIsQ0FBZ0NxTSxPQUFoQyxDQUF3QyxDQUF4QyxDQURnRCxDQUFsRCxDLENBRUc7QUFDSDtBQUNBLHFCQUFLcEssY0FBTCxDQUFvQnJDLGFBQXBCLENBQWtDSyxTQUFsQyxDQUE0Q21DLEtBQTVDLElBQXFEdkMsWUFDakR1QyxLQURpRCxFQUVqRG5DLFNBRmlELENBR2xENEYsT0FIa0QsQ0FHMUMsV0FIMEMsRUFHN0IsR0FINkIsRUFJbERnQixLQUprRCxDQUk1QyxHQUo0QyxDQUFyRDtBQUtBLHFCQUFLNUUsY0FBTCxDQUFvQnJDLGFBQXBCLENBQWtDTSxPQUFsQyxDQUEwQ2tDLEtBQTFDLElBQW1EdkMsWUFDL0N1QyxLQUQrQyxFQUUvQ2xDLE9BRitDLENBR2hEMkYsT0FIZ0QsQ0FHeEMsV0FId0MsRUFHM0IsR0FIMkIsRUFJaERnQixLQUpnRCxDQUkxQyxHQUowQyxDQUFuRDtBQUtBO0FBQ0k4QixvQixHQUNGLG9EQUNBOUksWUFBWXVDLEtBQVosRUFBbUJrSyxVOzt1QkFDRXBFLGVBQUtVLGFBQUwsQ0FBbUJELElBQW5CLEM7OztBQUFuQnhJLDBCOztBQUNKO0FBQ0E7QUFDQSxvQkFBSUEsV0FBV2lJLFVBQVgsSUFBeUIsR0FBN0IsRUFBa0M7QUFDaEMsdUJBQUtuRyxjQUFMLENBQW9CckMsYUFBcEIsQ0FBa0NPLFVBQWxDLENBQTZDaUMsS0FBN0MsSUFDRWpDLFdBQVdpRyxZQURiO0FBRUQsaUJBSEQsTUFHTztBQUNMdEUscUJBQUdhLFNBQUgsQ0FBYTtBQUNYQywyQkFBTyxpQkFESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hoRiw4QkFBVSxJQUhDO0FBSVhpRiwwQkFBTTtBQUpLLG1CQUFiO0FBTUQ7QUFDRDsrQkFDUWpELFlBQVl1QyxLQUFaLEVBQW1CaEMsYTtrREFDcEIsRyx5QkFHQSxHLHlCQUdBLEc7Ozs7QUFMSCxxQkFBSzZCLGNBQUwsQ0FBb0JyQyxhQUFwQixDQUFrQ1EsYUFBbEMsQ0FBZ0RnQyxLQUFoRCxJQUF5RCxTQUF6RDs7OztBQUdBLHFCQUFLSCxjQUFMLENBQW9CckMsYUFBcEIsQ0FBa0NRLGFBQWxDLENBQWdEZ0MsS0FBaEQsSUFBeUQsU0FBekQ7Ozs7QUFHQSxxQkFBS0gsY0FBTCxDQUFvQnJDLGFBQXBCLENBQWtDUSxhQUFsQyxDQUFnRGdDLEtBQWhELElBQXlELFNBQXpEOzs7Ozs7Ozs7Ozs7Ozs7QUFPTixvQkFBSTRKLGFBQWE1RCxVQUFiLEtBQTRCLEdBQWhDLEVBQXFDO0FBQ25DdEcscUJBQUdhLFNBQUgsQ0FBYTtBQUNYQywyQkFBTyxPQURJO0FBRVhDLDBCQUFNLE1BRks7QUFHWGhGLDhCQUFVLElBSEM7QUFJWGlGLDBCQUFNO0FBSkssbUJBQWI7QUFNQSx1QkFBS2IsY0FBTCxDQUFvQnJDLGFBQXBCLENBQWtDQyxXQUFsQyxHQUFnRCxFQUFoRDtBQUNELGlCQVJELE1BUU8sSUFBSW1NLGFBQWExTyxJQUFiLENBQWtCK0ssTUFBbEIsQ0FBeUI5RixLQUF6QixDQUErQmEsTUFBL0IsSUFBeUMsQ0FBN0MsRUFBZ0Q7QUFDckQsdUJBQUtuQixjQUFMLENBQW9CckMsYUFBcEIsQ0FBa0NDLFdBQWxDLEdBQWdELEVBQWhEO0FBQ0Q7OztBQUVILHFCQUFLNkMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVGOzs7Ozs7Ozs7OztBQUVNcEYsb0IsR0FBTztBQUNUNEwsMEJBQVEsS0FBSzVHLEVBREo7QUFFVHlKLDJCQUFTLEVBRkE7QUFHVGpOLDhCQUFZLENBSEg7QUFJVHNLLDRCQUFVLEVBSkQ7QUFLVHNDLDJCQUFTO0FBTEEsaUI7O3VCQU9heEQsZUFBS0MsT0FBTCxDQUN0Qix1Q0FEc0IsRUFFdEIsTUFGc0IsRUFHdEI3SyxJQUhzQixDOzs7QUFBcEIrQywyQjs7QUFLSjtBQUNBO0FBQ0E7QUFDQSxvQkFDRUEsWUFBWStILFVBQVosSUFBMEIsR0FBMUIsSUFDQS9ILFlBQVkvQyxJQUFaLENBQWlCK0ssTUFBakIsQ0FBd0I5RixLQUF4QixDQUE4QmEsTUFBOUIsS0FBeUMsQ0FGM0MsRUFHRTtBQUNBLHVCQUFLbkIsY0FBTCxDQUFvQjVCLFdBQXBCLENBQWdDQyxVQUFoQyxHQUNFRCxZQUFZL0MsSUFBWixDQUFpQitLLE1BQWpCLENBQXdCOUYsS0FEMUI7QUFFSWxDLDZCQUhKLEdBR2tCQSxZQUFZL0MsSUFBWixDQUFpQitLLE1BQWpCLENBQXdCOUYsS0FIMUM7O0FBSUEsdUJBQVNILEtBQVQsSUFBa0IvQixXQUFsQixFQUErQjtBQUM3Qix5QkFBSzRCLGNBQUwsQ0FBb0I1QixXQUFwQixDQUFnQ0UsT0FBaEMsQ0FBd0M2QixLQUF4QyxJQUFpRC9CLFlBQzdDK0IsS0FENkMsRUFFN0NsQyxPQUY2QyxDQUc5QzJHLEtBSDhDLENBR3hDLEdBSHdDLEVBR25DLENBSG1DLEVBSTlDaEIsT0FKOEMsQ0FJdEMsSUFKc0MsRUFJaEMsR0FKZ0MsQ0FBakQ7QUFLQSx5QkFBSzVELGNBQUwsQ0FBb0I1QixXQUFwQixDQUFnQ0csT0FBaEMsQ0FBd0M0QixLQUF4QyxJQUFpRC9CLFlBQzdDK0IsS0FENkMsRUFFN0NsQyxPQUY2QyxDQUc5QzJHLEtBSDhDLENBR3hDLEdBSHdDLEVBR25DLENBSG1DLEVBSTlDaEIsT0FKOEMsQ0FJdEMsR0FKc0MsRUFJakMsR0FKaUMsQ0FBakQ7QUFLQSx5QkFBSzVELGNBQUwsQ0FBb0I1QixXQUFwQixDQUFnQ0ksU0FBaEMsQ0FBMEMyQixLQUExQyxJQUFtRC9CLFlBQy9DK0IsS0FEK0MsRUFFL0NuQyxTQUYrQyxDQUdoRDRHLEtBSGdELENBRzFDLEdBSDBDLEVBR3JDLENBSHFDLEVBSWhEaEIsT0FKZ0QsQ0FJeEMsSUFKd0MsRUFJbEMsR0FKa0MsQ0FBbkQ7QUFLQSx5QkFBSzVELGNBQUwsQ0FBb0I1QixXQUFwQixDQUFnQ0ssU0FBaEMsQ0FBMEMwQixLQUExQyxJQUFtRC9CLFlBQy9DK0IsS0FEK0MsRUFFL0NuQyxTQUYrQyxDQUdoRDRHLEtBSGdELENBRzFDLEdBSDBDLEVBR3JDLENBSHFDLEVBSWhEaEIsT0FKZ0QsQ0FJeEMsR0FKd0MsRUFJbkMsR0FKbUMsQ0FBbkQ7QUFLQTtBQUNEO0FBQ0YsaUJBOUJELE1BOEJPO0FBQ0wsc0JBQUl4RixZQUFZK0gsVUFBWixLQUEyQixHQUEvQixFQUFvQztBQUNsQ3RHLHVCQUFHYSxTQUFILENBQWE7QUFDWEMsNkJBQU8sT0FESTtBQUVYQyw0QkFBTSxNQUZLO0FBR1hoRixnQ0FBVSxJQUhDO0FBSVhpRiw0QkFBTTtBQUpLLHFCQUFiO0FBTUEseUJBQUtiLGNBQUwsQ0FBb0I1QixXQUFwQixDQUFnQ0MsVUFBaEMsR0FBNkMsRUFBN0M7QUFDRCxtQkFSRCxNQVFPLElBQUlELFlBQVkvQyxJQUFaLENBQWlCK0ssTUFBakIsQ0FBd0I5RixLQUF4QixDQUE4QmEsTUFBOUIsSUFBd0MsQ0FBNUMsRUFBK0M7QUFDcEQseUJBQUtuQixjQUFMLENBQW9CNUIsV0FBcEIsQ0FBZ0NDLFVBQWhDLEdBQTZDLEVBQTdDO0FBQ0Q7QUFDRjtBQUNELHFCQUFLb0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7O0FBRU1KLGtCLEdBQUs7QUFDUDRHLDBCQUFRLEtBQUs1RyxFQUROO0FBRVBpSyxnQ0FBYyxJQUZQO0FBR1BDLDhCQUFZLENBQUMsR0FBRDtBQUhMLGlCOzt1QkFLd0J0RSxlQUFLQyxPQUFMLENBQy9CLHlEQUQrQixFQUUvQixNQUYrQixFQUcvQjdGLEVBSCtCLEM7OztBQUE3Qm1LLG9DOztzQkFLQUEscUJBQXFCckUsVUFBckIsSUFBbUMsR0FBbkMsSUFBMENxRSxxQkFBcUJuUCxJQUFyQixDQUEwQitLLE1BQTFCLEtBQXFDLEk7Ozs7O0FBQzdFcUUsK0IsR0FBa0IsRTs7QUFDdEJBLGdDQUFnQixzQkFBaEIsSUFBMENELHFCQUFxQm5QLElBQXJCLENBQTBCK0ssTUFBMUIsQ0FBaUM5RixLQUFqQyxDQUF1Q2EsTUFBdkMsS0FBa0QsQ0FBbEQsR0FBc0RxSixxQkFBcUJuUCxJQUFyQixDQUEwQitLLE1BQTFCLENBQWlDOUYsS0FBakMsQ0FBdUMsQ0FBdkMsRUFBMENvSyxLQUFoRyxHQUF3RyxDQUFsSjtBQUNJQyxzQixHQUFTO0FBQ1gxRCwwQkFBUSxLQUFLNUcsRUFERjtBQUVYeEQsOEJBQVksS0FBS21ELGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0MsVUFBaEMsQ0FBMkMsQ0FBM0MsQ0FGRDtBQUdYd0ksNEJBQVU7QUFIQyxpQjs7dUJBS21CbEIsZUFBS0MsT0FBTCxDQUM5QixrREFEOEIsRUFFOUIsTUFGOEIsRUFHOUJ5RSxNQUg4QixDOzs7QUFBNUI1TCxtQzs7c0JBTUFBLG9CQUFvQm9ILFVBQXBCLElBQWtDLEc7Ozs7O0FBQ3BDc0UsZ0NBQWdCLDJCQUFoQixJQUNFMUwsb0JBQW9CMUQsSUFBcEIsQ0FBeUIrSyxNQUF6QixDQUFnQ2lCLFVBQWhDLENBQTJDTCxRQUEzQyxDQUFvRCxDQUFwRCxDQURGO0FBRUE7QUFDQTtBQUNBLHFCQUFLaEgsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDTSxxQkFBaEMsSUFDRUQsb0JBQW9CMUQsSUFBcEIsQ0FBeUIrSyxNQUF6QixDQUFnQzlGLEtBQWhDLENBQXNDYSxNQUF0QyxHQUErQyxHQURqRDtBQUVJcEMsbUMsR0FBc0JBLG9CQUFvQjFELElBQXBCLENBQXlCK0ssTUFBekIsQ0FBZ0M5RixLO3dEQUN4Q3ZCLG1COzs7Ozs7OztBQUFUb0IscUI7Z0NBQ0NwQixvQkFBb0JvQixLQUFwQixFQUEyQnlLLGlCO29EQUM1QixNLDBCQUdBLE0sMEJBR0EsTSwwQkFHQSxNOzs7O0FBUkg3TCxvQ0FBb0JvQixLQUFwQixFQUEyQixXQUEzQixJQUEwQyxTQUExQzs7OztBQUdBcEIsb0NBQW9Cb0IsS0FBcEIsRUFBMkIsV0FBM0IsSUFBMEMsU0FBMUM7Ozs7QUFHQXBCLG9DQUFvQm9CLEtBQXBCLEVBQTJCLFdBQTNCLElBQTBDLFNBQTFDOzs7O0FBR0FwQixvQ0FBb0JvQixLQUFwQixFQUEyQixXQUEzQixJQUEwQyxTQUExQzs7Ozs7Ozs7Ozs7QUFNTixxQkFBS0gsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDSyxtQkFBaEMsR0FBc0QsS0FBS2lCLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0ssbUJBQWhDLENBQW9EOEwsTUFBcEQsQ0FDcEQ5TCxtQkFEb0QsQ0FBdEQ7Ozs7O0FBSUFjLG1CQUFHYSxTQUFILENBQWE7QUFDWEMseUJBQU8sZ0JBREk7QUFFWEMsd0JBQU0sTUFGSztBQUdYaEYsNEJBQVUsSUFIQztBQUlYaUYsd0JBQU07QUFKSyxpQkFBYjs7O0FBT0YscUJBQUtiLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0UsVUFBaEMsQ0FBMkMsQ0FBM0MsSUFBZ0Q2TCxlQUFoRDs7Ozs7QUFFQSxvQkFBSUQscUJBQXFCckUsVUFBckIsS0FBb0MsR0FBeEMsRUFBNkM7QUFDM0N0RyxxQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPLE9BREk7QUFFWEMsMEJBQU0sTUFGSztBQUdYaEYsOEJBQVUsSUFIQztBQUlYaUYsMEJBQU07QUFKSyxtQkFBYjtBQU1BLHVCQUFLYixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0M4TCxvQkFBaEMsR0FBdUQsSUFBdkQ7QUFDRCxpQkFSRCxNQVFPLElBQUlBLHFCQUFxQm5QLElBQXJCLENBQTBCK0ssTUFBMUIsSUFBb0MsSUFBeEMsRUFBOEM7QUFDbkQsdUJBQUtwRyxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0M4TCxvQkFBaEMsR0FBdUQsSUFBdkQ7QUFDRDs7O0FBRUgscUJBQUsvSixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUY7Ozs7Ozs7Ozs7O0FBRU1KLGtCLEdBQUs7QUFDUDRHLDBCQUFRLEtBQUs1RyxFQUROO0FBRVBpSyxnQ0FBYyxJQUZQO0FBR1BDLDhCQUFZLENBQUMsU0FBRDtBQUhMLGlCOzt1QkFLd0J0RSxlQUFLQyxPQUFMLENBQy9CLHlEQUQrQixFQUUvQixNQUYrQixFQUcvQjdGLEVBSCtCLEM7OztBQUE3QnlLLG9DOztzQkFLQUEscUJBQXFCM0UsVUFBckIsSUFBbUMsRzs7Ozs7QUFDakM0RSwrQixHQUFrQkQscUJBQXFCelAsSUFBckIsQ0FBMEIrSyxNQUExQixDQUFpQzlGLEtBQWpDLENBQXVDLENBQXZDLEM7O0FBQ3RCLHFCQUFLTixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NFLFVBQWhDLENBQTJDLENBQTNDLElBQWdEbU0sZUFBaEQ7QUFDSUosc0IsR0FBUztBQUNYMUQsMEJBQVEsS0FBSzVHLEVBREY7QUFFWHhELDhCQUFZLEtBQUttRCxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NDLFVBQWhDLENBQTJDLENBQTNDLENBRkQ7QUFHWHdJLDRCQUFVO0FBSEMsaUI7O3VCQUtnQmxCLGVBQUtDLE9BQUwsQ0FDM0Isb0RBRDJCLEVBRTNCLE1BRjJCLEVBRzNCeUUsTUFIMkIsQzs7O0FBQXpCMUwsZ0M7O3NCQU9GQSxpQkFBaUJrSCxVQUFqQixJQUErQixHQUEvQixJQUNBbEgsaUJBQWlCNUQsSUFBakIsQ0FBc0IrSyxNQUF0QixDQUE2QjlGLEtBQTdCLENBQW1DYSxNQUFuQyxLQUE4QyxDOzs7OztBQUU5QztBQUNBO0FBQ0lsQyxnQyxHQUFtQkEsaUJBQWlCNUQsSUFBakIsQ0FBc0IrSyxNQUF0QixDQUE2QjlGLEs7O0FBQ3BELHFCQUFLTixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NRLHNCQUFoQyxJQUNFRCxpQkFBaUJrQyxNQUFqQixHQUEwQixHQUQ1QjtBQUVJeUgsb0IsR0FBTyxFO3dEQUNPM0osZ0I7Ozs7Ozs7O0FBQVRrQixxQjs7QUFDUHlJLHFCQUFLekksS0FBTCxJQUFjbEIsaUJBQWlCa0IsS0FBakIsRUFBd0I2SyxZQUF4QixDQUFxQ3BHLEtBQXJDLENBQTJDLEdBQTNDLEVBQWdELENBQWhELENBQWQ7Z0NBQ1EzRixpQkFBaUJrQixLQUFqQixFQUF3QjhLLFU7b0RBQ3pCLEssMEJBR0EsSywwQkFHQSxLLDBCQUdBLEssMEJBR0EsSywwQkFFQSxLLDBCQUVBLEssMEJBRUEsTTs7OztBQWpCSGhNLGlDQUFpQmtCLEtBQWpCLEVBQXdCLGFBQXhCLElBQXlDLFNBQXpDOzs7O0FBR0FsQixpQ0FBaUJrQixLQUFqQixFQUF3QixhQUF4QixJQUF5QyxTQUF6Qzs7OztBQUdBbEIsaUNBQWlCa0IsS0FBakIsRUFBd0IsYUFBeEIsSUFBeUMsU0FBekM7Ozs7QUFHQWxCLGlDQUFpQmtCLEtBQWpCLEVBQXdCLGFBQXhCLElBQXlDLFNBQXpDOzs7O0FBR0FsQixpQ0FBaUJrQixLQUFqQixFQUF3QixhQUF4QixJQUF5QyxTQUF6Qzs7O0FBRUFsQixpQ0FBaUJrQixLQUFqQixFQUF3QixhQUF4QixJQUF5QyxTQUF6Qzs7O0FBRUFsQixpQ0FBaUJrQixLQUFqQixFQUF3QixhQUF4QixJQUF5QyxTQUF6Qzs7O0FBRUFsQixpQ0FBaUJrQixLQUFqQixFQUF3QixhQUF4QixJQUF5QyxTQUF6Qzs7Ozs7Ozs7Ozs7QUFNTixxQkFBS0gsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDUyxnQkFBaEMsR0FBbUQsS0FBS2EsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDUyxnQkFBaEMsQ0FBaUQwTCxNQUFqRCxDQUNqRGpDLElBRGlELENBQW5EO0FBR0EscUJBQUs1SSxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NPLGdCQUFoQyxHQUFtRCxLQUFLZSxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NPLGdCQUFoQyxDQUFpRDRMLE1BQWpELENBQ2pENUwsZ0JBRGlELENBQW5EOzs7QUFJRixxQkFBS2UsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRSxVQUFoQyxDQUEyQyxDQUEzQyxJQUFnRG1NLGVBQWhEOzs7OztBQUVBLG9CQUFJRCxxQkFBcUIzRSxVQUFyQixLQUFvQyxHQUF4QyxFQUE2QztBQUMzQ3RHLHFCQUFHYSxTQUFILENBQWE7QUFDWEMsMkJBQU8sT0FESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hoRiw4QkFBVSxJQUhDO0FBSVhpRiwwQkFBTTtBQUpLLG1CQUFiO0FBTUEsdUJBQUtiLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ29NLG9CQUFoQyxHQUF1RCxJQUF2RDtBQUNELGlCQVJELE1BUU8sSUFBSUEscUJBQXFCelAsSUFBckIsQ0FBMEIrSyxNQUExQixJQUFvQyxJQUF4QyxFQUE4QztBQUNuRCx1QkFBS3BHLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ29NLG9CQUFoQyxHQUF1RCxJQUF2RDtBQUNEOzs7QUFFSCxxQkFBS3JLLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRjs7Ozs7Ozs7Ozs7QUFFTUosa0IsR0FBSztBQUNQNEcsMEJBQVEsS0FBSzVHO0FBRE4saUI7O3VCQUd3QjRGLGVBQUtDLE9BQUwsQ0FDL0IseURBRCtCLEVBRS9CLE1BRitCLEVBRy9CN0YsRUFIK0IsQzs7O0FBQTdCNkssb0M7O3NCQU1GQSxxQkFBcUIvRSxVQUFyQixJQUFtQyxHOzs7OztBQUUvQmdGLCtCLEdBQWtCRCxxQkFBcUI3UCxJQUFyQixDQUEwQitLLE1BQTFCLENBQWlDOUYsS0FBakMsQ0FBdUMsQ0FBdkMsQztBQUNsQnFLLHNCLEdBQVM7QUFDWDFELDBCQUFRLEtBQUs1RyxFQURGO0FBRVh4RCw4QkFBWSxLQUFLbUQsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDQyxVQUFoQyxDQUEyQyxDQUEzQyxDQUZEO0FBR1h3SSw0QkFBVTtBQUhDLGlCOzt1QkFLZ0JsQixlQUFLQyxPQUFMLENBQzNCLG9EQUQyQixFQUUzQixNQUYyQixFQUczQnlFLE1BSDJCLEM7OztBQUF6QnRMLGdDOztzQkFLQUEsaUJBQWlCOEcsVUFBakIsSUFBK0IsRzs7Ozs7QUFDakM7QUFDQTtBQUNJOUcsZ0MsR0FBbUJBLGlCQUFpQmhFLElBQWpCLENBQXNCK0ssTUFBdEIsQ0FBNkI5RixLOztBQUNwRCxxQkFBS04sY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDVSxzQkFBaEMsSUFDRUMsaUJBQWlCOEIsTUFBakIsR0FBMEIsR0FENUI7QUFFSXlILG9CLEdBQU8sRTt3REFDT3ZKLGdCOzs7Ozs7OztBQUFUYyxxQjs7QUFDUHlJLHFCQUFLekksS0FBTCxJQUFjZCxpQkFBaUJjLEtBQWpCLEVBQXdCNkssWUFBeEIsQ0FBcUNwRyxLQUFyQyxDQUEyQyxHQUEzQyxFQUFnRCxDQUFoRCxDQUFkO2dDQUNRdkYsaUJBQWlCYyxLQUFqQixFQUF3QjhLLFU7b0RBQ3pCLEssMEJBR0EsSywwQkFHQSxLLDBCQUdBLEssMEJBR0EsSywwQkFHQSxLOzs7O0FBZEg1TCxpQ0FBaUJjLEtBQWpCLEVBQXdCLGFBQXhCLElBQXlDLFNBQXpDOzs7O0FBR0FkLGlDQUFpQmMsS0FBakIsRUFBd0IsYUFBeEIsSUFBeUMsU0FBekM7Ozs7QUFHQWQsaUNBQWlCYyxLQUFqQixFQUF3QixhQUF4QixJQUF5QyxTQUF6Qzs7OztBQUdBZCxpQ0FBaUJjLEtBQWpCLEVBQXdCLGFBQXhCLElBQXlDLFNBQXpDOzs7O0FBR0FkLGlDQUFpQmMsS0FBakIsRUFBd0IsYUFBeEIsSUFBeUMsU0FBekM7Ozs7QUFHQWQsaUNBQWlCYyxLQUFqQixFQUF3QixhQUF4QixJQUF5QyxTQUF6Qzs7Ozs7Ozs7Ozs7QUFNTixxQkFBS0gsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDWSxnQkFBaEMsR0FBbUQsS0FBS1UsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDWSxnQkFBaEMsQ0FBaUR1TCxNQUFqRCxDQUNqRGpDLElBRGlELENBQW5EO0FBR0EscUJBQUs1SSxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NXLGdCQUFoQyxHQUFtRCxLQUFLVyxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NXLGdCQUFoQyxDQUFpRHdMLE1BQWpELENBQ2pEeEwsZ0JBRGlELENBQW5EOzs7OztBQUlBUSxtQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLHlCQUFPLGVBREk7QUFFWEMsd0JBQU0sTUFGSztBQUdYaEYsNEJBQVUsSUFIQztBQUlYaUYsd0JBQU07QUFKSyxpQkFBYjs7O0FBT0YscUJBQUtiLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0UsVUFBaEMsQ0FBMkMsQ0FBM0MsSUFBZ0R1TSxlQUFoRDs7Ozs7QUFFQSxvQkFBSUQscUJBQXFCL0UsVUFBckIsS0FBb0MsR0FBeEMsRUFBNkM7QUFDM0MsdUJBQUtuRyxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0N3TSxvQkFBaEMsR0FBdUQsSUFBdkQ7QUFDQXJMLHFCQUFHYSxTQUFILENBQWE7QUFDWEMsMkJBQU8sT0FESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hoRiw4QkFBVSxJQUhDO0FBSVhpRiwwQkFBTTtBQUpLLG1CQUFiO0FBTUQsaUJBUkQsTUFRTyxJQUFJcUsscUJBQXFCN1AsSUFBckIsQ0FBMEIrSyxNQUExQixJQUFvQyxJQUF4QyxFQUE4QztBQUNuRCx1QkFBS3BHLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ3dNLG9CQUFoQyxHQUF1RCxJQUF2RDtBQUNEOzs7QUFFSCxxQkFBS3pLLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRjs7Ozs7Ozs7Ozs7QUFFTUosa0IsR0FBSztBQUNQNEcsMEJBQVEsS0FBSzVHO0FBRE4saUI7O3VCQUd1QjRGLGVBQUtDLE9BQUwsQ0FDOUIsdURBRDhCLEVBRTlCLE1BRjhCLEVBRzlCN0YsRUFIOEIsQzs7O0FBQTVCK0ssbUM7O3NCQU1GQSxvQkFBb0JqRixVQUFwQixJQUFrQyxHQUFsQyxJQUNBaUYsb0JBQW9CL1AsSUFBcEIsQ0FBeUIrSyxNQUF6QixLQUFvQyxJOzs7OztBQUVoQ2lGLDhCLEdBQWlCRCxvQkFBb0IvUCxJQUFwQixDQUF5QitLLE1BQXpCLENBQWdDOUYsS0FBaEMsQ0FBc0MsQ0FBdEMsQztBQUNqQnFLLHNCLEdBQVM7QUFDWDFELDBCQUFRLEtBQUs1RyxFQURGO0FBRVh4RCw4QkFBWSxLQUFLbUQsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDQyxVQUFoQyxDQUEyQyxDQUEzQyxDQUZEO0FBR1h3SSw0QkFBVTtBQUhDLGlCOzt1QkFLZWxCLGVBQUtDLE9BQUwsQ0FDMUIsa0RBRDBCLEVBRTFCLE1BRjBCLEVBRzFCeUUsTUFIMEIsQzs7O0FBQXhCbkwsK0I7O3NCQU1BQSxnQkFBZ0IyRyxVQUFoQixJQUE4QixHOzs7OztBQUNoQztBQUNBO0FBQ0kzRywrQixHQUFrQkEsZ0JBQWdCbkUsSUFBaEIsQ0FBcUIrSyxNQUFyQixDQUE0QjlGLEs7O0FBQ2xELHFCQUFLTixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NhLHFCQUFoQyxJQUNFQyxnQkFBZ0IyQixNQUFoQixHQUF5QixHQUQzQjtBQUVJeUgsb0IsR0FBTyxFO3dEQUNPcEosZTs7Ozs7Ozs7QUFBVFcscUI7O0FBQ1B5SSxxQkFBS3pJLEtBQUwsSUFBY1gsZ0JBQWdCVyxLQUFoQixFQUF1QjZLLFlBQXZCLENBQW9DcEcsS0FBcEMsQ0FBMEMsR0FBMUMsRUFBK0MsQ0FBL0MsQ0FBZDtnQ0FDUXBGLGdCQUFnQlcsS0FBaEIsRUFBdUI4SyxVO29EQUN4QixLLDBCQUdBLEssMEJBR0EsSzs7OztBQUxIekwsZ0NBQWdCVyxLQUFoQixFQUF1QixhQUF2QixJQUF3QyxTQUF4Qzs7OztBQUdBWCxnQ0FBZ0JXLEtBQWhCLEVBQXVCLGFBQXZCLElBQXdDLFNBQXhDOzs7O0FBR0FYLGdDQUFnQlcsS0FBaEIsRUFBdUIsYUFBdkIsSUFBd0MsU0FBeEM7Ozs7Ozs7Ozs7O0FBTU4scUJBQUtILGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ2UsZUFBaEMsR0FBa0QsS0FBS08sY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDZSxlQUFoQyxDQUFnRG9MLE1BQWhELENBQ2hEakMsSUFEZ0QsQ0FBbEQ7QUFHQSxxQkFBSzVJLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ2MsZUFBaEMsR0FBa0QsS0FBS1EsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDYyxlQUFoQyxDQUFnRHFMLE1BQWhELENBQ2hEckwsZUFEZ0QsQ0FBbEQ7Ozs7O0FBSUFLLG1CQUFHYSxTQUFILENBQWE7QUFDWEMseUJBQU8saUJBREk7QUFFWEMsd0JBQU0sTUFGSztBQUdYaEYsNEJBQVUsSUFIQztBQUlYaUYsd0JBQU07QUFKSyxpQkFBYjs7O0FBT0Y7QUFDQSxxQkFBS2IsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRSxVQUFoQyxDQUEyQyxDQUEzQyxJQUFnRHlNLGNBQWhEOzs7OztBQUVBLG9CQUFJRCxvQkFBb0JqRixVQUFwQixLQUFtQyxHQUF2QyxFQUE0QztBQUMxQ3RHLHFCQUFHYSxTQUFILENBQWE7QUFDWEMsMkJBQU8sT0FESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hoRiw4QkFBVSxJQUhDO0FBSVhpRiwwQkFBTTtBQUpLLG1CQUFiO0FBTUEsdUJBQUtiLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQzBNLG1CQUFoQyxHQUFzRCxJQUF0RDtBQUNELGlCQVJELE1BUU8sSUFBSUEsb0JBQW9CL1AsSUFBcEIsQ0FBeUIrSyxNQUF6QixJQUFtQyxJQUF2QyxFQUE2QztBQUNsRCx1QkFBS3BHLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQzBNLG1CQUFoQyxHQUFzRCxJQUF0RDtBQUNEOzs7QUFFSCxxQkFBSzNLLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FFYztBQUNkLFVBQUksS0FBS2xGLFVBQUwsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsZ0JBQVEsS0FBS3lFLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0ksYUFBeEM7QUFDRSxlQUFLLENBQUw7QUFDRSxnQkFDRSxLQUFLa0IsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRSxVQUFoQyxDQUEyQyxDQUEzQyxFQUNDME0seUJBREQsR0FFQSxFQUZBLEdBR0EsS0FBS3RMLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0MsVUFBaEMsQ0FBMkMsQ0FBM0MsQ0FKRixFQUtFO0FBQ0EsbUJBQUtxQixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NDLFVBQWhDLENBQTJDLENBQTNDLEtBQWlELENBQWpEO0FBQ0E7QUFDQSxtQkFBSzRNLGtCQUFMO0FBQ0EsbUJBQUs5SyxNQUFMO0FBQ0QsYUFWRCxNQVVPO0FBQ0xaLGlCQUFHYSxTQUFILENBQWE7QUFDWEMsdUJBQU8sS0FESTtBQUVYQyxzQkFBTSxNQUZLO0FBR1hoRiwwQkFBVSxJQUhDO0FBSVhpRixzQkFBTTtBQUpLLGVBQWI7QUFNRDtBQUNEO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsZ0JBQ0UsS0FBS2IsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRSxVQUFoQyxDQUEyQyxDQUEzQyxFQUNDNE0sS0FERCxHQUVBLEVBRkEsR0FHQSxLQUFLeEwsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDQyxVQUFoQyxDQUEyQyxDQUEzQyxDQUpGLEVBS0U7QUFDQSxtQkFBS3FCLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0MsVUFBaEMsQ0FBMkMsQ0FBM0MsS0FBaUQsQ0FBakQ7QUFDQTtBQUNBLG1CQUFLOE0sa0JBQUw7QUFDQSxtQkFBS2hMLE1BQUw7QUFDRCxhQVZELE1BVU87QUFDTFosaUJBQUdhLFNBQUgsQ0FBYTtBQUNYQyx1QkFBTyxLQURJO0FBRVhDLHNCQUFNLE1BRks7QUFHWGhGLDBCQUFVLElBSEM7QUFJWGlGLHNCQUFNO0FBSkssZUFBYjtBQU1EO0FBQ0Q7QUFDRixlQUFLLENBQUw7QUFDRSxnQkFDRSxLQUFLYixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NFLFVBQWhDLENBQTJDLENBQTNDLEVBQThDNE0sS0FBOUMsR0FDQSxFQURBLEdBRUEsS0FBS3hMLGNBQUwsQ0FBb0J0QixXQUFwQixDQUFnQ0MsVUFBaEMsQ0FBMkMsQ0FBM0MsQ0FIRixFQUlFO0FBQ0EsbUJBQUtxQixjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NDLFVBQWhDLENBQTJDLENBQTNDLEtBQWlELENBQWpEO0FBQ0E7QUFDQSxtQkFBSytNLHVCQUFMO0FBQ0EsbUJBQUtqTCxNQUFMO0FBQ0QsYUFURCxNQVNPO0FBQ0xaLGlCQUFHYSxTQUFILENBQWE7QUFDWEMsdUJBQU8sS0FESTtBQUVYQyxzQkFBTSxNQUZLO0FBR1hoRiwwQkFBVSxJQUhDO0FBSVhpRixzQkFBTTtBQUpLLGVBQWI7QUFNRDtBQUNEO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsZ0JBQ0UsS0FBS2IsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDRSxVQUFoQyxDQUEyQyxDQUEzQyxFQUE4QzRNLEtBQTlDLEdBQ0EsRUFEQSxHQUVBLEtBQUt4TCxjQUFMLENBQW9CdEIsV0FBcEIsQ0FBZ0NDLFVBQWhDLENBQTJDLENBQTNDLENBSEYsRUFJRTtBQUNBLG1CQUFLcUIsY0FBTCxDQUFvQnRCLFdBQXBCLENBQWdDQyxVQUFoQyxDQUEyQyxDQUEzQyxLQUFpRCxDQUFqRDtBQUNBO0FBQ0EsbUJBQUtnTixzQkFBTDtBQUNBLG1CQUFLbEwsTUFBTDtBQUNELGFBVEQsTUFTTztBQUNMWixpQkFBR2EsU0FBSCxDQUFhO0FBQ1hDLHVCQUFPLEtBREk7QUFFWEMsc0JBQU0sTUFGSztBQUdYaEYsMEJBQVUsSUFIQztBQUlYaUYsc0JBQU07QUFKSyxlQUFiO0FBTUQ7QUFDRDtBQUNGO0FBQ0U7QUFoRko7QUFrRkQ7QUFDRjs7OzJCQUNNK0ssTyxFQUFTO0FBQ2QsV0FBS3ZMLEVBQUwsR0FBVXVMLFFBQVF2TCxFQUFsQjtBQUNBLFdBQUs5QyxRQUFMLEdBQWMsV0FBU3FPLFFBQVF2TCxFQUEvQjtBQUNBLFdBQUtvRixRQUFMLEdBQWdCbUcsUUFBUW5HLFFBQXhCO0FBQ0EsV0FBS25DLFFBQUwsR0FBZ0JzSSxRQUFRdkwsRUFBeEI7QUFDQSxXQUFLTCxjQUFMLENBQW9CaEQsYUFBcEIsQ0FBa0NVLFNBQWxDLENBQTRDTCxhQUE1QyxHQUEyRHVPLFFBQVF2TCxFQUFuRTtBQUNBLFdBQUt3TCxXQUFMO0FBQ0EsV0FBS0MsU0FBTDtBQUNBLFdBQUs3QyxhQUFMO0FBQ0EsV0FBS3pGLGVBQUwsQ0FBcUJvSSxRQUFRdkwsRUFBN0IsRUFBaUMsSUFBakM7QUFDQSxXQUFLMEwsV0FBTDtBQUNBLFdBQUtDLFNBQUw7QUFDQTtBQUNBLFdBQUtULGtCQUFMO0FBQ0EsV0FBS0csdUJBQUw7QUFDQSxXQUFLRCxrQkFBTDtBQUNBLFdBQUtFLHNCQUFMO0FBQ0EsV0FBS2xMLE1BQUw7QUFDRDs7O2dDQUNXO0FBQ1YsV0FBS1QsY0FBTCxDQUFvQnhELFNBQXBCLENBQThCQyxlQUE5QixHQUFnRCxFQUFoRDtBQUNBLFdBQUt1RCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJFLFVBQTlCLEdBQTJDLEVBQTNDO0FBQ0EsV0FBS3NELGNBQUwsQ0FBb0J4RCxTQUFwQixDQUE4QkksVUFBOUIsR0FBMkMsRUFBM0M7QUFDQSxXQUFLb0QsY0FBTCxDQUFvQnhELFNBQXBCLENBQThCSyxVQUE5QixHQUEyQyxFQUEzQztBQUNBLFdBQUttRCxjQUFMLENBQW9CeEQsU0FBcEIsQ0FBOEJPLE9BQTlCLEdBQXdDLEVBQXhDO0FBQ0EsV0FBS2tNLGFBQUw7QUFDQSxXQUFLbkIsUUFBTDtBQUNBLFdBQUtySCxNQUFMO0FBQ0Q7Ozs2QkFDUSxDQUFFOzs7K0JBQ0EsQ0FBRTs7OztFQXRsRHlCd0wsZUFBS0MsSTs7a0JBQXhCblIsVSIsImZpbGUiOiJjYXNlZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xuICBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbiAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FzZURldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBuYXZiYXJcbiAgICB9O1xuICAgIGRhdGEgPSB7XG4gICAgICB0YXNrOmZhbHNlLFxuICAgICAgY3VycmVudFRhYjogMCxcbiAgICAgIG5hdmJhcnM6IFsn5qGI5Lu2JywgJ+WuouaItycsICfku7vliqEnLCAn5paH5qGjJywgJ+aXpeW/lycsICflvIDluq0nLCAn6LSi5YqhJ10sXG4gICAgICB3aW5IZWlnaHQxOiAnJyxcbiAgICAgIHdpbkhlaWdodDI6ICcnLFxuICAgICAgY2lyY3VsYXI6IGZhbHNlLFxuICAgICAgLy8gYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGNpcmN1bGFyOiB0cnVlLFxuICAgICAgLy8gYWRkSGVpZ2h0OiAnJyxcbiAgICAgIGVuYWJsZWJhY2t0b3RvcDogdHJ1ZSxcbiAgICAgIHRvZ2dsZTogZmFsc2UsXG4gICAgICBjaG9vc2VTaXplOiBmYWxzZSxcbiAgICAgIHRhc2tjaG9vc2VTaXplOiBmYWxzZSxcbiAgICAgIGNvdXJ0Y2hvb3NlU2l6ZTogZmFsc2UsXG4gICAgICBjb25maXJtVGFza0Nob29zZTogZmFsc2UsXG4gICAgICBpc0FjY2VwdENob29zZTogZmFsc2UsXG4gICAgICAvLyDljaDkvY3lm75cbiAgICAgIHBsYWNlaG9sZGVySW1hZ2U6ICcuLi8uLi8uLi8uLi9pbWFnZXMvbm9EYXRhLnBuZycsXG4gICAgICAvLyBsb2doaWRlOiB0cnVlXG4gICAgICBhbmltYXRpb25EYXRhOiBbXSxcbiAgICAgIC8vIOiOt+WPluaVsOaNrlxuICAgICAgaWQ6IDAsXG4gICAgICB1c2VySWQ6IFtdLFxuICAgICAgY2xpZW50SWQ6ICcnLFxuICAgICAgY2FzZURldGFpbERhdGE6IHtcbiAgICAgICAgY2FzZURhdGE6IHtcbiAgICAgICAgICBjYXNlRGV0YWlsOiB7fSxcbiAgICAgICAgICB1c2VyUGhvdG86IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGNsaWVudERhdGE6IHtcbiAgICAgICAgICBjbGllbnRBbGxEYXRhOiB7fSxcbiAgICAgICAgICBsaW5rZXJQaG90bzogW10sXG4gICAgICAgICAgbGlua2VyVG90YWxDb3VudDogMCxcbiAgICAgICAgICBsaW5rZXJEYXRhOiB7fSxcbiAgICAgICAgICBjbGllbnRDb250YWN0c0xpc3REYXRhOiB7fSxcbiAgICAgICAgICBjbGllbnRDb250YWN0c0xpc3RMYXN0RGF0YToge30sXG4gICAgICAgICAgY29udGFjdExlbmd0aDogMCxcbiAgICAgICAgICBiaXJ0aGRheTogJydcbiAgICAgICAgfSxcbiAgICAgICAgLy/ku7vliqFcbiAgICAgICAgdGFza0RhdGFzOiB7XG4gICAgICAgICAgVGFza1N0YWdlc0RhdGFzOiBbXSxcbiAgICAgICAgICBUYXNrc0RhdGFzOiBbXSxcbiAgICAgICAgICBzZXRUaW1lb3V0OiAnJyxcbiAgICAgICAgICB2aWV3SGVpZ2h0OiBbXSxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBbXSxcbiAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgIHN0YWdlSWQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICAvL+aWh+aho+aVsOaNrlxuICAgICAgICBkb2N1bWVudERhdGFzOiB7XG4gICAgICAgICAgZG9jdW1lbnREYXRhOiB7fSxcbiAgICAgICAgICBmaWxlSWNvbjogW10sXG4gICAgICAgICAgZmlsZUNvbG9yOiBbXSxcbiAgICAgICAgICBmaWxlUGF0aDogW10sXG4gICAgICAgICAgbGFzdFBhdGhDbGFzczogW10sXG4gICAgICAgICAgbGFzdFBhdGhJZDogW10sXG4gICAgICAgICAgU3luY1BhdGg6XCJcIixcbiAgICAgICAgICBpc1ZhbHVlOiBmYWxzZSxcbiAgICAgICAgICBzZWFyY2hEb2NWYWx1ZTonJyxcbiAgICAgICAgICBmaXhlZFBhdGg6e1xuICAgICAgICAgICAgbGFzdFBhdGhDbGFzczonJyxcbiAgICAgICAgICAgIGxhc3RQYXRoSWQ6J000MycsXG4gICAgICAgICAgICBmaWxlUGF0aDon6aaW6aG1J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd29ya0xvZ3NEYXRhczoge1xuICAgICAgICAgIHdvcmtMb2dEYXRhOiB7fSxcbiAgICAgICAgICBzZWxmRHVyYXRpb246IDAsXG4gICAgICAgICAgYnVzaW5lc3NEdXJhdGlvbjogMCxcbiAgICAgICAgICBiaWxsRHVyYXRpb246IDAsXG4gICAgICAgICAgc3RhcnRUaW1lOiBbXSxcbiAgICAgICAgICBlbmRUaW1lOiBbXSxcbiAgICAgICAgICBhdmF0YXJEYXRhOiBbXSxcbiAgICAgICAgICBwcm9jZXNzU3RhdHVzOiBbXVxuICAgICAgICB9LFxuICAgICAgICBDb3VydHNEYXRhczoge1xuICAgICAgICAgIENvdXJ0c0RhdGE6IHt9LFxuICAgICAgICAgIGVuZFllYXI6IFtdLFxuICAgICAgICAgIGVuZEhvdXI6IFtdLFxuICAgICAgICAgIHN0YXJ0WWVhcjogW10sXG4gICAgICAgICAgc3RhcnRIb3VyOiBbXVxuICAgICAgICB9LFxuICAgICAgICAvL+i0ouWKoVxuICAgICAgICBBbW91bnREYXRhczoge1xuICAgICAgICAgIFBhZ2VOdW1iZXI6IFsxLCAxLCAxLCAxXSxcbiAgICAgICAgICBBbW91bnREYXRhOiBbXSxcbiAgICAgICAgICBBbW91bnREYXRhSGVpZ2h0OiAwLFxuICAgICAgICAgIEFtb3VudEN1cnJlbnQ6IDAsXG4gICAgICAgICAgVXNlckNhc2VCaWxsaW5nSXRlbTogW10sXG4gICAgICAgICAgVXNlckNhc2VCaWxsaW5nSGVpZ2h0OiAwLFxuICAgICAgICAgIFVzZXJJbnZvaWNlc0l0ZW06IFtdLFxuICAgICAgICAgIFVzZXJJbnZvaWNlc0l0ZW1IZWlnaHQ6IDAsXG4gICAgICAgICAgVXNlckludm9pY2VzRGF0ZTogW10sXG4gICAgICAgICAgVXNlclJlY2VpcHRzSXRlbUhlaWdodDogMCxcbiAgICAgICAgICBVc2VyUmVjZWlwdHNJdGVtOiBbXSxcbiAgICAgICAgICBVc2VyUmVjZWlwdHNEYXRlOiBbXSxcbiAgICAgICAgICBVc2VyQ2hhcmdlc0l0ZW1IZWlnaHQ6IDAsXG4gICAgICAgICAgVXNlckNoYXJnZXNJdGVtOiBbXSxcbiAgICAgICAgICBVc2VyQ2hhcmdlc0RhdGU6IFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvL+S7u+WKoVxuICAgICAgLy/mlrDlu7rku7vliqFcbiAgICAgIGFkZFRhc2socHJvamVjdElkKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uLy4uL215VGFza0NvdXJzZS90YXNrU3RhZ2UvY3JlYXRldGFzay9jcmVhdFRhc2s/cHJvamVjdElkPScgKyBwcm9qZWN0SWQgKyAnJmN1cnJlbnRTdGFnZT0nICsgdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuY3VycmVudCArICcmY2F0ZWdvcnk9JyArIDBcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy/mmK/lkKblrozmiJDku7vliqFcbiAgICAgIGlzQ2hlY2tlZChzSW5kZXgsIGluZGV4LCBjaGVja2VkLCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLlRhc2tzRGF0YXNbc0luZGV4XS5pdGVtc1tpbmRleF0uY2hpbGRUYXNrKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuVGFza3NEYXRhc1tzSW5kZXhdLml0ZW1zW2luZGV4XS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgIHZhciBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5UYXNrc0RhdGFzW3NJbmRleF0uaXRlbXNbaW5kZXhdLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5zZXRUaW1lb3V0ID0gVGltZW91dDtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7flhYjmo4Dmn6XlrZDku7vliqHvvIEnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuQ29tcGxldGVkVGFza1BhcnRpY2lwYW50KGlkLCAnWScsIGNoZWNrZWQpO1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLlRhc2tzRGF0YXNbc0luZGV4XS5pdGVtc1tpbmRleF0uY2hlY2tlZCA9ICF0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5UYXNrc0RhdGFzW3NJbmRleF0uaXRlbXNbaW5kZXhdLmNoZWNrZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLkNvbXBsZXRlZFRhc2tQYXJ0aWNpcGFudChpZCwgJ04nLCBjaGVja2VkKVxuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLlRhc2tzRGF0YXNbc0luZGV4XS5pdGVtc1tpbmRleF0uY2hlY2tlZCA9ICF0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5UYXNrc0RhdGFzW3NJbmRleF0uaXRlbXNbaW5kZXhdLmNoZWNrZWRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICAvLyDljrvor6bmg4XpobXpnaJcbiAgICAgIHRvVGFza0RldGFpbChpZCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi8uLi9teVRhc2tDb3Vyc2UvdGFza1N0YWdlL3Rhc2tEZXRhaWwvdGFza2RldGFpbD9pZD0nICsgaWRcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy8g5pu05aSa6YCJ6aG5XG4gICAgICBtb3JlQ2hvb3NlKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBuZXh0U29ydCA9IHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLlRhc2tTdGFnZXNEYXRhcy5sZW5ndGggLSAxID4gaW5kZXggPyB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5UYXNrU3RhZ2VzRGF0YXNbaW5kZXggKyAxXS5zb3J0IDogMDtcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gWyflnKjmraTlkI7mt7vliqDmlrDpmLbmrrUnLCAn5paw5bu65Lu75YqhJywgJ+WIoOmZpCddO1xuICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgIGl0ZW1MaXN0OiBpdGVtTGlzdCxcbiAgICAgICAgICBpdGVtQ29sb3I6ICcjNWQ3M2ZhJyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJy4uLy4uL215VGFza0NvdXJzZS90YXNrU3RhZ2UvY3JlYXRldGFzay9jcmVhdGVTdGFnZT9wcm9qZWN0SWQ9JyArIGl0ZW0ucHJvamVjdElkICsgJyZzb3J0PScgKyBpdGVtLnNvcnQgKyAnJm5leHRTb3J0PScgKyBuZXh0U29ydFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi8uLi9teVRhc2tDb3Vyc2UvdGFza1N0YWdlL2NyZWF0ZXRhc2svY3JlYXRUYXNrP3Byb2plY3RJZD0nICsgaXRlbS5wcm9qZWN0SWQgKyAnJmN1cnJlbnRTdGFnZT0nICsgdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuY3VycmVudCArICcmY2F0ZWdvcnk9JyArIDBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0udGFza0NvdW50ID09IDAgJiYgaXRlbS5wYXJ0aWNpcGFudFRhc2tDb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5EZWxldGVUYXNrU3RhZ2UoaXRlbS5pZCwgaW5kZXgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WvueS4jei1t++8jOivt+WFiOa4heepuuatpOmYtuauteWIl+ihqOS4iueahOS7u+WKoe+8jOeEtuWQjuWGjeWIoOmZpOi/meS4qumYtuauteWIl+ihqO+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8vIOWIoOmZpOS7u+WKoVxuICAgICAgbG9uZ3ByZXNzKGlkKSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmmK/lkKbnoa7orqTliKDpmaTor6Xpobnku7vliqHvvIEnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsXG4gICAgICAgICAgY2FuY2VsQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICB0aGlzLkRlbGV0ZVRhc2soaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy/lvIDluq3mmL7npLrmjInpkq5cbiAgICAgIGNvdXJ0U2hvdyhpbmRleCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5Db3VydHNEYXRhcy5Db3VydHNEYXRhW2luZGV4XS5vcGVyYXRpb25zICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIHZhciBvcGVyYXRpb25zID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5Db3VydHNEYXRhcy5Db3VydHNEYXRhW2luZGV4XVxuICAgICAgICAgICAgLm9wZXJhdGlvbnM7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gb3BlcmF0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9uW2ldID0gb3BlcmF0aW9uc1tpXS50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgaXRlbUxpc3Q6IG9wdGlvbiwgLy/mmL7npLrnmoTliJfooajpoblcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAvL3Jlcy50YXBJbmRleOeCueWHu+eahOWIl+ihqOmhuVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgIGlmIChvcHRpb25bcmVzLnRhcEluZGV4XSA9PSAn5Yig6ZmkJykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDExMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbltyZXMudGFwSW5kZXhdID09ICfkv67mlLknKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coMjIyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob3B0aW9uW3Jlcy50YXBJbmRleF0gPT0gJ+afpeeciycpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnlKjmiLfmsqHmnInmnYPpmZAnLFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGlmKHJlcy50YXBJbmRleCl7fVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGF0W3Jlcy50YXBJbmRleF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7fSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXMpIHt9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn55So5oi35rKh5pyJ5p2D6ZmQJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIOS7u+WKoea7keWKqOWIh+aNouaVsOaNrlxuICAgICAgdGFza0JpbmRDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5jdXJyZW50ID0gZS5kZXRhaWwuY3VycmVudDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICAvLyAvL+i0ouWKoea7keWKqOWIh+aNouaVsOaNrlxuICAgICAgZ2V0QW1vdW50RGF0YShlKSB7XG4gICAgICAgIGlmICh3eC5wYWdlU2Nyb2xsVG8pIHtcbiAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudEN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgICBpZiAoZS5kZXRhaWwuY3VycmVudCA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnREYXRhSGVpZ2h0ID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUJpbGxpbmdIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuZGV0YWlsLmN1cnJlbnQgPT0gMSkge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuQW1vdW50RGF0YUhlaWdodCA9IHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckludm9pY2VzSXRlbUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5kZXRhaWwuY3VycmVudCA9PSAyKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnREYXRhSGVpZ2h0ID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyUmVjZWlwdHNJdGVtSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmRldGFpbC5jdXJyZW50ID09IDMpIHtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFIZWlnaHQgPSB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJDaGFyZ2VzSXRlbUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIOaWh+aho+i/lOWbnuS4iuWHoOWxglxuICAgICAgZ29CYWNrKGlkLCBkb2NDbGFzcywgaW5kZXgpIHtcbiAgICAgICAgaWYoaW5kZXg+PTApe1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5sYXN0UGF0aENsYXNzLnNwbGljZShcbiAgICAgICAgICAgIGluZGV4KzEsXG4gICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMubGFzdFBhdGhDbGFzcy5sZW5ndGggLSBpbmRleFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmxhc3RQYXRoSWQuc3BsaWNlKFxuICAgICAgICAgICAgaW5kZXgrMSxcbiAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5sYXN0UGF0aElkLmxlbmd0aCAtIGluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZmlsZVBhdGguc3BsaWNlKFxuICAgICAgICAgICAgaW5kZXgrMSxcbiAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5maWxlUGF0aC5sZW5ndGggLSBpbmRleFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5nZXREb2N1bWVudERhdGEoaWQsIGRvY0NsYXNzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5maWxlUGF0aD1bXTtcbiAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmxhc3RQYXRoQ2xhc3M9W107XG4gICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5sYXN0UGF0aElkPVtdO1xuICAgICAgICAgICB0aGlzLmdldERvY3VtZW50RGF0YSh0aGlzLmlkLCAnTTEnKTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9LFxuICAgICAgLy8g5paH5qGj6aKE6KeIXG4gICAgICBwcmV2aWV3KGlkLCBmaWxlQ2xhc3MsIGRvY0NsYXNzLCB0ZXh0UGF0aCkge1xuICAgICAgICB2YXIgZmlsZUNsYXNzID0gZmlsZUNsYXNzLnJlcGxhY2UoJy4nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGZpbGVDbGFzcyAhPT0gJ2ZvbGRlcicpIHtcbiAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogJ2FjY2VzcycsXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICB3eC5kb3dubG9hZEZpbGUoe1xuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgcmVzLmRhdGFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFpbGlua2VkbGF3LmNvbS9hcGkvc2VydmljZXMvd2ViL2RvY3VtZW50L0dldERvY3VtZW50RmlsZT9pZD0nICtcbiAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICB2YXIgZmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93VmlldyA9ICF0aGlzLnNob3dWaWV3O1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZVBhdGgpO1xuICAgICAgICAgICAgICAgICAgc3dpdGNoIChmaWxlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogcmVzLnRlbXBGaWxlUGF0aCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsczogW3Jlcy50ZW1wRmlsZVBhdGhdIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogcmVzLnRlbXBGaWxlUGF0aCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsczogW3Jlcy50ZW1wRmlsZVBhdGhdIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICB3eC5vcGVuRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVR5cGU6IGZpbGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZmlsZS5wdXNoKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOaWh+S7ticpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93VmlldyA9ICF0aGlzLnNob3dWaWV3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZXREb2N1bWVudERhdGEoaWQsIGRvY0NsYXNzKTtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMubGFzdFBhdGhDbGFzcy5wdXNoKGRvY0NsYXNzKTtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMubGFzdFBhdGhJZC5wdXNoKGlkKTtcbiAgICAgICAgICB2YXIgZmlsZVBhdGggPSB0ZXh0UGF0aC5zcGxpdCgnLycpO1xuICAgICAgICAgIGZpbGVQYXRoID0gJy8nICsgZmlsZVBhdGhbZmlsZVBhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVQYXRoLnB1c2goZmlsZVBhdGgpO1xuICAgICAgICAgIC8vIGlmKHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5zZWFyY2hEb2NWYWx1ZSl7XG4gICAgICAgICAgLy8gICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZmlsZVBhdGg9ZmlsZVBhdGhcbiAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8v5paH5qGj5pCc57SiXG4gICAgICBzZWFyY2hEb2MoZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLnNlYXJjaERvY1ZhbHVlPXZhbHVlO1xuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuaXNWYWx1ZT12YWx1ZT90cnVlOmZhbHNlO1xuICAgICAgICB2YXIgZG9jQ2xhc3M9Jyc7XG4gICAgICAgIHZhciBwYXJlbnRJZD0nJztcbiAgICAgICAgaWYodGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVQYXRoLmxlbmd0aD4wKXtcbiAgICAgICAgICAgZG9jQ2xhc3M9dGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmxhc3RQYXRoQ2xhc3NbdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmxhc3RQYXRoQ2xhc3MubGVuZ3RoLTFdO1xuICAgICAgICAgICBwYXJlbnRJZD10aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMubGFzdFBhdGhJZFt0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMubGFzdFBhdGhJZC5sZW5ndGgtMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGRvY0NsYXNzPSdNMSc7XG4gICAgICAgICAgcGFyZW50SWQ9dGhpcy5pZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldERvY3VtZW50RGF0YShwYXJlbnRJZCwgZG9jQ2xhc3MsdmFsdWUpXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgLy/muIXpmaTmkJzntKJcbiAgICAgIGNsZWFyRG9jKCl7XG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5pc1ZhbHVlPWZhbHNlO1xuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuc2VhcmNoRG9jVmFsdWU9Jyc7XG4gICAgICAgIHRoaXMuZ2V0RG9jdW1lbnREYXRhKHRoaXMuaWQsICdNMScpO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIC8vIOahiOS7tuWfuuacrOS/oeaBr+mhtemdolxuICAgICAgdG9jYXNlYmFzZSgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9jYXNlcy9jYXNlYmFzZT9pZD0nICsgdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAvLyDmoYjmg4XnroDku4vpobXpnaJcbiAgICAgIHRvY2FzZWludHJvZHVjZSgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9jYXNlcy9jYXNlaW50cm9kdWNlPydcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy/moYjku7bkurrlkZjkv6Hmga9cbiAgICAgIHRvY2FzZXBlcnNvbm5lbGluKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL2Nhc2VzL2Nhc2VwZXJzb25uZWxpbmZvcm1hdGlvbj9pZD0nICsgdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICAgIC8vIOi3s+i9rOWIsOWIqeebiuWGsueqgeWIl+ihqFxuICAgICAgdG9jb25mbGljdGludGVyZXN0KCkge1xuICAgICAgICBpZiAodGhpcy5jYXNlRGV0YWlsRGF0YS5jYXNlRGF0YS5jYXNlRGV0YWlsLmNhc2VDbGllbnRSZWxhdGlvbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi9jYXNlcy9jb25mbGljdGludGVyZXN0L2NvbmZsaWN0aW50ZXJlc3Q/aWQ9JyArIHRoaXMuaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIOi3s+i9rOWIsOWQiOWQjOivpuaDhemhtemdolxuICAgICAgdG9jb250cmFjdGluZm8oKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vY2FzZXMvY29udHJhY3RkZXRhaWwvY29udHJhY3RpbmZvPydcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy/ot7Povazoh7PlrqLmiLfln7rmnKzkv6Hmga/pobVcbiAgICAgIHRvY2xpZW50YmFzZSgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vLi4vbXljbGllbnQvY2xpZW50RGV0YWlsL2l0ZW1EZXRhaWwvY2xpZW50QmFzZUluZm8nXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8vIOi3s+i9rOiHs+WuouaIt+iBlOezu+S6uumhtVxuICAgICAgdG9jbGllbnRsaW5rbWFuKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi8uLi9teWNsaWVudC9jbGllbnREZXRhaWwvaXRlbURldGFpbC9jbGllbnRMaW5rbWFuP2lkPScgKyB0aGlzLmNsaWVudElkICsgJyZjYXNlSWQ9JyArIHRoaXMuaWQgKyAnJnRpdGxlPeWuouaIt+aWueacrOahiOiBlOezu+S6uidcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy/ot7Povazoh7Pmi5zorr/orrDlvZXpobVcbiAgICAgIHRvdmlzaXRyZWNvcmQoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uLy4uL215Y2xpZW50L2NsaWVudERldGFpbC9pdGVtRGV0YWlsL3JlY29yZHNMaXN0J1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0b2NyZWF0ZShlKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMikge1xuICAgICAgICAgIHRoaXMudG9DcmVhdGVUYXNrcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gNSkge1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi90YXNrL3Rhc2tkZXRhaWwnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyDml6Xlv5for6bmg4VcbiAgICAgIHRvbG9nZGV0YWlsKGlkKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uLy4uL215UmVjb3JkL215TG9nZGV0YWlsL2xvZ2RldGFpbD9pZD0nICsgaWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3YXRjaCA9IHtcbiAgICAgIGN1cnJlbnRUYWIoY3VycmVudCkge1xuICAgICAgICBpZiAod3gucGFnZVNjcm9sbFRvKSB7XG4gICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIEFtb3VudERhdGFIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudEN1cnJlbnQgPT0gMCkge1xuICAgICAgICAgIC8vIGlmKHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuQW1vdW50Q3VycmVudD0wKXtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFIZWlnaHQgPSB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJDYXNlQmlsbGluZ0hlaWdodDtcbiAgICAgICAgICAvLyB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnRDdXJyZW50ID09IDEpIHtcbiAgICAgICAgICAvLyBpZih0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudEN1cnJlbnQ9MCl7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnREYXRhSGVpZ2h0ID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VySW52b2ljZXNJdGVtSGVpZ2h0O1xuICAgICAgICAgIC8vIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudEN1cnJlbnQgPT0gMikge1xuICAgICAgICAgIC8vIGlmKHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuQW1vdW50Q3VycmVudD0wKXtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFIZWlnaHQgPSB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJSZWNlaXB0c0l0ZW1IZWlnaHQ7XG4gICAgICAgICAgLy8gdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuQW1vdW50Q3VycmVudCA9PSAzKSB7XG4gICAgICAgICAgLy8gaWYodGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnRDdXJyZW50PTApe1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuQW1vdW50RGF0YUhlaWdodCA9IHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckNoYXJnZXNJdGVtSGVpZ2h0O1xuICAgICAgICAgIC8vIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyDliJvlu7rpmLbmrrXku7vliqHvvIjmnIDlkI7vvIk7XG4gICAgdG9DcmVhdGVUYXNrcygpIHtcbiAgICAgIHZhciBzb3J0ID0gdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuVGFza1N0YWdlc0RhdGFzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgcHJvamVjdElkID0gdGhpcy5pZDtcbiAgICAgIGlmKHRoaXMudGFzaylcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi8uLi9teVRhc2tDb3Vyc2UvdGFza1N0YWdlL2NyZWF0ZXRhc2svY3JlYXRlU3RhZ2U/cHJvamVjdElkPScgKyBwcm9qZWN0SWQgKyAnJnNvcnQ9JyArIHNvcnRcbiAgICAgIH0pO1xuICAgICAgZWxzZVxuICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4uLy4uL215VGFza0NvdXJzZS9jcmVhdGVQcm9qZWN0JyB9KTtcbiAgICB9XG4gICAgLy/moYjku7bkv6Hmga9cbiAgICBhc3luYyBnZXRDYXNlRGF0YSgpIHtcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSzor7fnqI3nrYkhJyxcbiAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIHZhciBpZCA9IHtcbiAgICAgICAgaWQ6IHRoaXMuaWRcbiAgICAgIH07XG4gICAgICB2YXIgY2FzZURhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldENhc2VJbmZvJyxcbiAgICAgICAgJ1BPU1QnLFxuICAgICAgICBpZFxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNhc2VEYXRhLmRhdGEucmVzdWx0KTtcbiAgICAgIGlmIChjYXNlRGF0YS5zdGF0dXNDb2RlID09IDIwMCAmJiBjYXNlRGF0YS5kYXRhLnJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5jYXNlRGF0YS5jYXNlRGV0YWlsID0gY2FzZURhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgIC8vIHRoaXMuY2xpZW50SWQgPSBjYXNlRGF0YS5kYXRhLnJlc3VsdC5jbGllbnRJZDtcbiAgICAgICAgdmFyIGNhc2VMYXd5ZXJMaXN0ID0gY2FzZURhdGEuZGF0YS5yZXN1bHQuY2FzZUxhd3llckxpc3Q7XG4gICAgICAgIC8vIOWktOWDj0lk5Y676YeNXG4gICAgICAgIHZhciB1c2VySWRzID0gW107XG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIGNhc2VMYXd5ZXJMaXN0KSB7XG4gICAgICAgICAgdXNlcklkc1tpbmRleF0gPSBjYXNlTGF3eWVyTGlzdFtpbmRleF0udXNlcklkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXNlcklkID0gYXBpLm15RGlzdGluY3QodXNlcklkcyk7XG4gICAgICAgIC8v5aS05YOP5aSE55CGXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMudXNlcklkKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51c2VySWRbaW5kZXhdKVxuICAgICAgICAgIHZhciBodHRwID1cbiAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgK1xuICAgICAgICAgICAgdGhpcy51c2VySWRbaW5kZXhdO1xuICAgICAgICAgIHZhciB1c2VyQXZhdGFyID0gYXdhaXQgYWpheC5nZXRVc2VyQXZhdGFyKGh0dHApO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJBdmF0YXIpO1xuICAgICAgICAgIGlmICh1c2VyQXZhdGFyLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNhc2VEYXRhLnVzZXJQaG90b1tpbmRleF0gPVxuICAgICAgICAgICAgICB1c2VyQXZhdGFyLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6ZqcIScsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5LuY5qy+5pa55byP5pWw5o2uXG4gICAgICAgIHZhciBjb250cmFjdEZvckVkaXREYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldENhc2VDaGFyZ2VCYXNpYycsXG4gICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgIGlkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb250cmFjdEZvckVkaXREYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgLy/ku5jmrL7mlrnlvI/lrZfnrKbkuLLmm7/mjaJcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNhc2VEYXRhLmNvbnRyYWN0Rm9yRWRpdERhdGEgPVxuICAgICAgICAgICAgY29udHJhY3RGb3JFZGl0RGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICBpZiAoY29udHJhY3RGb3JFZGl0RGF0YS5kYXRhLnJlc3VsdC5wYXlTdHlsZVRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuY2FzZURhdGEucGF5U3R5bGVUZXh0ID0gY29udHJhY3RGb3JFZGl0RGF0YS5kYXRhLnJlc3VsdC5wYXlTdHlsZVRleHQucmVwbGFjZShcbiAgICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgICAgJysnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNhc2VEYXRhLnBheVN0eWxlVGV4dCA9ICfmnKrloavlhpknO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmlbDmja7lvILluLgs6YOo5YiG5pWw5o2u5peg5rOV5q2j5bi45pi+56S6JyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlsIbmlbDmja7kv53lrZjliLDmnKzlnLBcbiAgICAgICAgdmFyIGNhc2VEZXRhaWxEYXRhID0ge1xuICAgICAgICAgIGNhc2VEYXRhOiB0aGlzLmNhc2VEZXRhaWxEYXRhLmNhc2VEYXRhLmNhc2VEZXRhaWwsXG4gICAgICAgICAgY29udHJhY3RGb3JFZGl0RGF0YTogdGhpcy5jYXNlRGV0YWlsRGF0YS5jYXNlRGF0YS5jb250cmFjdEZvckVkaXREYXRhLFxuICAgICAgICAgIHBheVN0eWxlVGV4dDogdGhpcy5jYXNlRGV0YWlsRGF0YS5jYXNlRGF0YS5wYXlTdHlsZVRleHRcbiAgICAgICAgICAvLyB1c2VyUGhvdG86IHRoaXMuY2FzZURldGFpbERhdGEuY2FzZURhdGEudXNlclBob3RvXG4gICAgICAgIH07XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogJ2Nhc2VEZXRhaWxEYXRhJyxcbiAgICAgICAgICBkYXRhOiBjYXNlRGV0YWlsRGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYXNlRGF0YS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zmlYXpmpwhJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNhc2VEYXRhLmNhc2VEZXRhaWwgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGNhc2VEYXRhLmRhdGEucmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNhc2VEYXRhLmNhc2VEZXRhaWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvL+WuouaIt+S/oeaBr1xuICAgIGFzeW5jIGdldENsaWVudCgpIHtcbiAgICAgIHZhciBjbGllbnRJZCA9IHtcbiAgICAgICAgaWQ6IHRoaXMuY2xpZW50SWRcbiAgICAgIH07XG4gICAgICB2YXIgY2xpZW50RGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NsaWVudC9HZXRDbGllbnQnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGNsaWVudElkXG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coY2xpZW50RGF0YSwgXCJcYuWuouaIt+iBlOezu+S6ulwiKTtcbiAgICAgIC8vIGNsaWVudERhdGEuZGF0YS5yZXN1bHQ9bnVsbDtcbiAgICAgIGlmIChjbGllbnREYXRhLnN0YXR1c0NvZGUgPT0gMjAwICYmIGNsaWVudERhdGEuZGF0YS5yZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2xpZW50RGF0YS5yZXN1bHQpO1xuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNsaWVudERhdGEuY2xpZW50QWxsRGF0YSA9IGNsaWVudERhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgIC8vIOWHuueUn+aXpeacn+WkhOeQhlxuICAgICAgICBpZiAoY2xpZW50RGF0YS5kYXRhLnJlc3VsdC5iaXJ0aGRheSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuY2xpZW50RGF0YS5iaXJ0aGRheSA9IGNsaWVudERhdGEuZGF0YS5yZXN1bHQuYmlydGhkYXlcbiAgICAgICAgICAgIC5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNsaWVudERhdGEuYmlydGhkYXkgPSAn5pyq5aGr5YaZJztcbiAgICAgICAgfVxuICAgICAgICAvLyDlrqLmiLfogZTns7vkurpcbiAgICAgICAgdmFyIGNsaWVudElkID0ge1xuICAgICAgICAgIGNhc2VJZDogdGhpcy5pZCxcbiAgICAgICAgICBDbGllbnRJZDogdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgIHBhZ2VTaXplOiAxMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgY2xpZW50TGlua2VyRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50Q29udGFjdHMvR2V0Q2xpZW50Q29udGFjdHNMaXN0JyxcbiAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgY2xpZW50SWRcbiAgICAgICAgKTtcbiAgICAgICAgLy8g5a6i5oi36IGU57O75Lq65aS05YOPXG4gICAgICAgIGlmIChjbGllbnRMaW5rZXJEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLmxpbmtlckRhdGEgPVxuICAgICAgICAgICAgY2xpZW50TGlua2VyRGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNsaWVudERhdGEubGlua2VyVG90YWxDb3VudCA9IGNsaWVudExpbmtlckRhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICB2YXIgY2xpZW50TGlua2VyRGF0YSA9IGNsaWVudExpbmtlckRhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gY2xpZW50TGlua2VyRGF0YSkge1xuICAgICAgICAgICAgdmFyIGlkID0gY2xpZW50TGlua2VyRGF0YVtpbmRleF0uaWQ7XG4gICAgICAgICAgICB2YXIgaHR0cCA9XG4gICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRDb250YWN0cy9HZXRDbGllbnRDb250YWN0QXZhdGFyP2lkPScgKyBpZDtcbiAgICAgICAgICAgIHZhciBsaW5rZXJQaG90byA9IGF3YWl0IGFqYXguZ2V0VXNlckF2YXRhcihodHRwKTtcbiAgICAgICAgICAgIGlmIChsaW5rZXJQaG90by5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNsaWVudERhdGEubGlua2VyUGhvdG9baW5kZXhdID1cbiAgICAgICAgICAgICAgICBsaW5rZXJQaG90by50ZW1wRmlsZVBhdGg7XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuY2xpZW50RGF0YS5saW5rZXJEYXRhW2luZGV4XVsnYXZhdGFyJ10gPSBsaW5rZXJQaG90by50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpg6jliIbmlbDmja7lvILluLjvvIEnLFxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfpg6jliIbmlbDmja7lvILluLjvvIEnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaLnOiuv+iusOW9lVxuICAgICAgICB2YXIgcmVjb3JkSWQgPSB7XG4gICAgICAgICAgY2xpZW50SWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgcGFnZU51bWJlcjogMSxcbiAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjbGllbnRDb250YWN0c0xpc3REYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRWaXNpdFNlcnZpY2VSZWNvcmRzL0dldFZpc2l0UmVjb3JkcycsXG4gICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgIHJlY29yZElkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjbGllbnRDb250YWN0c0xpc3REYXRhLnN0YXR1c0NvZGUgPT0gMjAwICYmIGNsaWVudENvbnRhY3RzTGlzdERhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLmNsaWVudENvbnRhY3RzTGlzdERhdGEgPVxuICAgICAgICAgICAgY2xpZW50Q29udGFjdHNMaXN0RGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmNsaWVudERhdGEuY29udGFjdExlbmd0aCA9IGNsaWVudENvbnRhY3RzTGlzdERhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudFxuICAgICAgICAgIC8vIOaLnOiuv+iusOW9leacgOaWsOaXtumXtFxuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuY2xpZW50RGF0YS5jbGllbnRDb250YWN0c0xpc3RMYXN0RGF0YSA9XG4gICAgICAgICAgICBjbGllbnRDb250YWN0c0xpc3REYXRhLmRhdGEucmVzdWx0Lml0ZW1zWzBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWuouaIt+iBlOezu+S6uue8k+WtmOaVsOaNrlxuICAgICAgICB2YXIgQ29udGFjdHNMaXN0RGF0YSA9IHtcbiAgICAgICAgICBpdGVtczogdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLmxpbmtlckRhdGEsXG4gICAgICAgICAgdG90YWxDb3VudDogdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLmxpbmtlclRvdGFsQ291bnRcbiAgICAgICAgfVxuICAgICAgICAvLyDmi5zorr/orrDlvZXnvJPlrZjmlbDmja5cbiAgICAgICAgdmFyIFJlY29yZHNEYXRhcyA9IHtcbiAgICAgICAgICBpdGVtczogdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLmNsaWVudENvbnRhY3RzTGlzdERhdGEsXG4gICAgICAgICAgdG90YWxDb3VudDogdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLnJlY29yZHNUb2F0YWxDb3VudFxuICAgICAgICB9XG4gICAgICAgIC8vIOacrOWcsOWtmOWCqFxuICAgICAgICB2YXIgY2xpZW50QWxsRGF0YSA9IHtcbiAgICAgICAgICBjbGllbnRCYXNlSW5mb0RhdGE6IHRoaXMuY2FzZURldGFpbERhdGEuY2xpZW50RGF0YS5jbGllbnRBbGxEYXRhLCAvL+WuouaIt+ivpuaDheS/oeaBr1xuICAgICAgICAgIENvbnRhY3RzTGlzdERhdGE6IENvbnRhY3RzTGlzdERhdGEsIC8v5a6i5oi36IGU57O75Lq6XG4gICAgICAgICAgUmVjb3Jkc0RhdGFzOiBSZWNvcmRzRGF0YXMsIC8v5ouc6K6/6K6w5b2VLFxuICAgICAgICB9O1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY2xpZW50RGF0YScsIGNsaWVudEFsbERhdGEpO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNsaWVudERhdGEuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLmNsaWVudEFsbERhdGEgPSBudWxsO1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xpZW50RGF0YS5kYXRhLnJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5jbGllbnREYXRhLmNsaWVudEFsbERhdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvL+S7u+WKoVxuICAgIC8v6I635Y+W5Lu75Yqh6Zi25q61XG4gICAgYXN5bmMgR2V0VGFza1N0YWdlcygpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuaWRcbiAgICAgIH1cbiAgICAgIHZhciBUYXNrUHJvamVjdEJhc2ljID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1Byb2plY3QvR2V0VGFza1Byb2plY3RCYXNpYycsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAge2lkOnRoaXMuaWR9XG4gICAgICApXG4gICAgICBpZighVGFza1Byb2plY3RCYXNpYy5kYXRhLnJlc3VsdC5pZClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2VcbiAgICAgIHRoaXMudGFzayA9IHRydWU7XG4gICAgICB2YXIgVGFza1N0YWdlc0RhdGFzID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BsYW5uaW5nL0dldFRhc2tTdGFnZXMnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIHN3aXRjaCAoVGFza1N0YWdlc0RhdGFzLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgaWYgKFRhc2tTdGFnZXNEYXRhcy5kYXRhLnJlc3VsdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tTdGFnZXNEYXRhcy5kYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICB2YXIgVGFza1N0YWdlc0RhdGEgPSBUYXNrU3RhZ2VzRGF0YXMuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5UYXNrU3RhZ2VzRGF0YXMgPSBUYXNrU3RhZ2VzRGF0YTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIFRhc2tTdGFnZXNEYXRhKSB7XG4gICAgICAgICAgICAgIHZhciBzdGFnZUlkID0gVGFza1N0YWdlc0RhdGFbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5zdGFnZUlkW2luZGV4XSA9IFRhc2tTdGFnZXNEYXRhW2luZGV4XS5pZFxuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5wYWdlTnVtYmVyW2luZGV4XSA9IDE7XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLnZpZXdIZWlnaHRbaW5kZXhdID0gNTAwO1xuICAgICAgICAgICAgICB0aGlzLkdldFRhc2tzKGluZGV4LCBzdGFnZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICBjb25zb2xlLmxvZygn5oKo5rKh5pyJ5p2D6ZmQJyk7XG4gICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAzO1xuICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u6K+35rGC6ZSZ6K+vJylcbiAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XG4gICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvL+iOt+WPluS7u+WKoemhuVxuICAgIGFzeW5jIEdldFRhc2tzKGluZGV4LCBzdGFnZUlkKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgcGFnZU51bWJlcjogdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMucGFnZU51bWJlcltpbmRleF0sXG4gICAgICAgIHBhZ2VTaXplOiAxMDAsXG4gICAgICAgIHN0YWdlSWQ6IHN0YWdlSWQsXG4gICAgICAgIHByb2plY3RJZDogdGhpcy5pZFxuICAgICAgfVxuICAgICAgdmFyIEdldFRhc2tzRGF0YXMgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUGxhbm5pbmcvR2V0VGFza3MnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIGlmIChHZXRUYXNrc0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB2YXIgVGFza3NEYXRhID0gR2V0VGFza3NEYXRhcy5kYXRhLnJlc3VsdFxuICAgICAgICB2YXIgY2hpbGRDaGVja2VkID0gW107XG4gICAgICAgIGZvciAodmFyIGkgaW4gVGFza3NEYXRhLml0ZW1zKSB7XG4gICAgICAgICAgaWYgKFRhc2tzRGF0YS5pdGVtc1tpXS5pc0NvbXBsZXRlZCA9PSAnWScpIHtcbiAgICAgICAgICAgIFRhc2tzRGF0YS5pdGVtc1tpXVsnY2hlY2tlZCddID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUYXNrc0RhdGEuaXRlbXNbaV1bJ2NoZWNrZWQnXSA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChUYXNrc0RhdGEuaXRlbXNbaV0uaXNDb21wbGV0ZWQgPT0gJ0QnKSB7XG4gICAgICAgICAgICBUYXNrc0RhdGEuaXRlbXNbaV1bJ2NoaWxkVGFzayddID0gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGFza3NEYXRhLml0ZW1zW2ldWydjaGlsZFRhc2snXSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lKSB7XG4gICAgICAgICAgICAvLyBUYXNrc0RhdGEuaXRlbXNbaV0uZW5kVGltZSA9IGFwaS5mb3JtYXRUaW1lU3ltYm9sKFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lLCAnLycpO1xuICAgICAgICAgICAgdmFyIGhvdXJUaW1lPW5ldyBEYXRlKFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lKS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGlmKGhvdXJUaW1lPjcmJmhvdXJUaW1lPDI1KXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbGxUaW1lPW5ldyBEYXRlKFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lKS5nZXRUaW1lKCktKDgqNjAqNjAqMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lPW5ldyBEYXRlKG1pbGxUaW1lKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbGxUaW1lPSgxNio2MCo2MCoxMDAwKStuZXcgRGF0ZShUYXNrc0RhdGEuaXRlbXNbaV0uZW5kVGltZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgIFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lPW5ldyBEYXRlKG1pbGxUaW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFRhc2tzRGF0YS5pdGVtc1tpXS5lbmRUaW1lID0gYXBpLmZvcm1hdFRpbWVTeW1ib2woVGFza3NEYXRhLml0ZW1zW2ldLmVuZFRpbWUsICctJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuVGFza3NEYXRhc1tpbmRleF0gPSBUYXNrc0RhdGE7XG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLnZpZXdIZWlnaHRbaW5kZXhdICs9IFRhc2tzRGF0YS5pdGVtcy5sZW5ndGggKiAxNzU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjaGlsZFtpbmRleF0ucHVzaChbXSlcbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuVGFza3NEYXRhc1tpbmRleF0gPSB7XG4gICAgICAgICAgaXRlbTogW10sXG4gICAgICAgICAgdG90YWxDb3VudDogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZClcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIC8v5a6M5oiQ5Lu75YqhXG4gICAgYXN5bmMgQ29tcGxldGVkVGFza1BhcnRpY2lwYW50KGlkLCBpc0NvbXBsZXRlZCwgY2hlY2tlZCkge1xuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGlzTWFyazogXCJZXCIsXG4gICAgICAgIGlzUGFydGljaXBhbnQ6IFwiWVwiLFxuICAgICAgICBpc1JlbWluZDogXCJZXCIsXG4gICAgICAgIGVuZFRpbWU6IGRhdGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGlzQ29tcGxldGVkLFxuICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuaWRcbiAgICAgIH07XG4gICAgICB2YXIgcmVzID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BhcnRpY2lwYW50L0NvbXBsZXRlZFRhc2tQYXJ0aWNpcGFudCcsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAgZGF0YVxuICAgICAgKVxuICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+W3suWujOaIkCcsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5bey5Y+W5raIJyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy/liKDpmaTpmLbmrrXku7vliqFcbiAgICBhc3luYyBEZWxldGVUYXNrU3RhZ2UoaWQsIGluZGV4KSB7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tQbGFubmluZy9EZWxldGVUYXNrU3RhZ2UnLFxuICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMudmlld0hlaWdodCA9IHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLnZpZXdIZWlnaHQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5wYWdlTnVtYmVyID0gdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMucGFnZU51bWJlci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLnN0YWdlSWQgPSB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5zdGFnZUlkLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IDApIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLmN1cnJlbnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuY3VycmVudCA9IHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLmN1cnJlbnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLmN1cnJlbnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuR2V0VGFza1N0YWdlcygpO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy/liKDpmaTku7vliqHpoblcbiAgICBhc3luYyBEZWxldGVUYXNrKGlkKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BsYW5uaW5nL0RlbGV0ZVRhc2snLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLlRhc2tzRGF0YXMudG90YWxDb3VudCAtPSAxO1xuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5UYXNrc0RhdGFzLml0ZW1zID0gdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuVGFza3NEYXRhcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5jdXJyZW50ID0gdGhpcy5jYXNlRGV0YWlsRGF0YS50YXNrRGF0YXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5HZXRUYXNrU3RhZ2VzKCk7XG4gICAgICAgIHRoaXMuR2V0VGFza3MoKTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8v5paH5qGjXG4gICAgYXN5bmMgZ2V0RG9jdW1lbnREYXRhKGRvY0NsYXNzLCBwYXJlbnRJZCwga2V5V29yZHMpIHtcbiAgICAgIHZhciBrZXlXb3JkID0ga2V5V29yZHMgfHwgJyc7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgLy8gU3luY1BhdGg6IHRoaXMuU3luY1BhdGgsXG4gICAgICAgIGNhc2VJZDogdGhpcy5pZCxcbiAgICAgICAgZG9jQ2xhc3M6IGRvY0NsYXNzLFxuICAgICAgICBpc1JpZ2h0OiAwLFxuICAgICAgICBteUZpbGU6IGZhbHNlLFxuICAgICAgICBvbmx5RmlsZTogZmFsc2UsXG4gICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgIHBhZ2VTaXplOiA1MCxcbiAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkLFxuICAgICAgICBzb3J0aW5nOiAnTmFtZSBhc2MnLFxuICAgICAgICB0aXRsZToga2V5V29yZCxcbiAgICAgICAgdG9wQ2xhc3M6ICdNMSdcbiAgICAgIH07XG4gICAgICB2YXIgZG9jdW1lbnREYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZG9jdW1lbnQvR2V0RG9jdW1lbnRzV2l0aEZvbGRlcnMnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIGRvY3VtZW50RGF0YS5zdGF0dXNDb2RlID09IDIwMCYmZG9jdW1lbnREYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aD4wXG4gICAgICApIHtcbiAgICAgICAgLy8gdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLnNlYXJjaERvY1ZhbHVlPScnO1xuICAgICAgICAvLyB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuaXNWYWx1ZT1mYWxzZTtcbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmRvY3VtZW50RGF0YSA9ZG9jdW1lbnREYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICB2YXIgZG9jdW1lbnQgPSBkb2N1bWVudERhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgIC8v5Zu+5qCHIOminOiJslxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkb2N1bWVudCkge1xuICAgICAgICAgIC8vICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMucGF0aFRleHQucHVzaCh0ZXh0KVxuICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBkb2N1bWVudFtpbmRleF0uZmlsZUV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHN3aXRjaCAoaWNvbkNsYXNzKSB7XG4gICAgICAgICAgICBjYXNlICcucGRmJzpcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjZTIwMDAwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcucG5nJzpcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjZTIwMDAwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcueGxzJzpcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLWV4bDEnO1xuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjMDY5NDAwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcueGxzeCc6XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVDb2xvcltpbmRleF0gPSAnIzA2OTQwMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLmRvY3gnOlxuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZmlsZUljb25baW5kZXhdID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcuZG9jJzpcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXdvbGQxJztcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVDb2xvcltpbmRleF0gPSAnIzAwOWRmZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLmpwZyc6XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi1qcGdnZXNoaSc7XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5maWxlQ29sb3JbaW5kZXhdID0gJyNmZjk5MDAnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvbGRlcic6XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuZG9jdW1lbnREYXRhcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi13ZW5kYW5nJztcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVDb2xvcltpbmRleF0gPSAnI2ZmOTkwMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVJY29uW2luZGV4XSA9XG4gICAgICAgICAgICAgICAgJ2ljb24td2Vpemhpd2Vuamlhbmdlc2hpJztcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpbGVDb2xvcltpbmRleF0gPSAnIzdhN2E3YSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50RGF0YS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZG9jdW1lbnREYXRhID0gW107XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6Zqc77yBJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudERhdGEuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLmRvY3VtZW50RGF0YXMuZG9jdW1lbnREYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIC8v5pel5b+XXG4gICAgYXN5bmMgZ2V0V29ya0xvZ3MoKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgY2FzZUlkOiB0aGlzLmlkLFxuICAgICAgICBrZXl3b3JkOiAnJyxcbiAgICAgICAgcGFnZU51bWJlcjogMSxcbiAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICBzb3J0aW5nOiAnU3RhcnRUaW1lIERlc2MnXG4gICAgICB9O1xuICAgICAgdmFyIHdvcmtMb2dzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2cvR2V0V29ya2xvZ3MnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgICk7XG4gICAgICAvLyB3b3JrTG9nc0RhdGEuc3RhdHVzQ29kZT0zMDBcbiAgICAgIC8vIHdvcmtMb2dzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcz1bXVxuICAgICAgaWYgKFxuICAgICAgICB3b3JrTG9nc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDAgJiZcbiAgICAgICAgd29ya0xvZ3NEYXRhLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEud29ya0xvZ3NEYXRhcy53b3JrTG9nRGF0YSA9XG4gICAgICAgICAgd29ya0xvZ3NEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICB2YXIgd29ya0xvZ0RhdGEgPSB3b3JrTG9nc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEud29ya0xvZ3NEYXRhcy5zZWxmRHVyYXRpb249d29ya0xvZ0RhdGEucmVkdWNlKChwcmUsY3VyKT0+e1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cilcbiAgICAgICAgICAgIHJldHVybiBjdXIuc2VsZkR1cmF0aW9uK3ByZTtcbiAgICAgICAgfSwpXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHdvcmtMb2dEYXRhKSB7XG4gICAgICAgICAgLy8gdGhpcy5jYXNlRGV0YWlsRGF0YS53b3JrTG9nc0RhdGFzLnNlbGZEdXJhdGlvbiArPSBOdW1iZXIoXG4gICAgICAgICAgLy8gICB3b3JrTG9nRGF0YVtpbmRleF0uc2VsZkR1cmF0aW9uLnRvRml4ZWQoMilcbiAgICAgICAgICAvLyApOyAvL+iHquaKpeaXtumVv1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEud29ya0xvZ3NEYXRhcy5idXNpbmVzc0R1cmF0aW9uICs9IE51bWJlcihcbiAgICAgICAgICAgIHdvcmtMb2dEYXRhW2luZGV4XS5idXNpbmVzc0R1cmF0aW9uLnRvRml4ZWQoMilcbiAgICAgICAgICApOyAvL+S4muWKoeaXtumVv1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEud29ya0xvZ3NEYXRhcy5iaWxsRHVyYXRpb24gKz0gTnVtYmVyKFxuICAgICAgICAgICAgd29ya0xvZ0RhdGFbaW5kZXhdLmJpbGxEdXJhdGlvbi50b0ZpeGVkKDIpXG4gICAgICAgICAgKTsgLy/otKbljZXml7bplb9cbiAgICAgICAgICAvLyDlvIDlp4vnu5PmnZ/ml7bpl7TlpITnkIZcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLndvcmtMb2dzRGF0YXMuc3RhcnRUaW1lW2luZGV4XSA9IHdvcmtMb2dEYXRhW1xuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgXS5zdGFydFRpbWVcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bYS16QS1aXS9nLCAnICcpXG4gICAgICAgICAgICAuc3BsaXQoJyAnKTtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLndvcmtMb2dzRGF0YXMuZW5kVGltZVtpbmRleF0gPSB3b3JrTG9nRGF0YVtcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIF0uZW5kVGltZVxuICAgICAgICAgICAgLnJlcGxhY2UoL1thLXpBLVpdL2csICcgJylcbiAgICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICAgIC8v5Yib5bu65Lq65aS05YOPXG4gICAgICAgICAgdmFyIGh0dHAgPVxuICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArXG4gICAgICAgICAgICB3b3JrTG9nRGF0YVtpbmRleF0uZW1wbG95ZWVJZDtcbiAgICAgICAgICB2YXIgYXZhdGFyRGF0YSA9IGF3YWl0IGFqYXguZ2V0VXNlckF2YXRhcihodHRwKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdmF0YXJEYXRhKVxuICAgICAgICAgIC8vIGF2YXRhckRhdGEuc3RhdHVzQ29kZT0xMDBcbiAgICAgICAgICBpZiAoYXZhdGFyRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS53b3JrTG9nc0RhdGFzLmF2YXRhckRhdGFbaW5kZXhdID1cbiAgICAgICAgICAgICAgYXZhdGFyRGF0YS50ZW1wRmlsZVBhdGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6Zqc77yB6YOo5YiG5pWw5o2u5peg5rOV5q2j5bi45pi+56S6JyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL+WuoeaguOeKtuaAgVxuICAgICAgICAgIHN3aXRjaCAod29ya0xvZ0RhdGFbaW5kZXhdLnByb2Nlc3NTdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLndvcmtMb2dzRGF0YXMucHJvY2Vzc1N0YXR1c1tpbmRleF0gPSAnIzMzOTkzMyc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEud29ya0xvZ3NEYXRhcy5wcm9jZXNzU3RhdHVzW2luZGV4XSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSJzpcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS53b3JrTG9nc0RhdGFzLnByb2Nlc3NTdGF0dXNbaW5kZXhdID0gJyNlMjAwMDAnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHdvcmtMb2dzRGF0YS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zmlYXpmpzvvIEnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEud29ya0xvZ3NEYXRhcy53b3JrTG9nRGF0YSA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHdvcmtMb2dzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEud29ya0xvZ3NEYXRhcy53b3JrTG9nRGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvL+W8gOW6rVxuICAgIGFzeW5jIEdldENvdXJ0cygpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBjYXNlSWQ6IHRoaXMuaWQsXG4gICAgICAgIGtleXdvcmQ6ICcnLFxuICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICBwYWdlU2l6ZTogMjAsXG4gICAgICAgIHNvcnRpbmc6ICdTdGFydFRpbWUgRGVzYydcbiAgICAgIH07XG4gICAgICB2YXIgQ291cnRzRGF0YXMgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlQ291cnQvR2V0Q291cnRzJyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICBkYXRhXG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coQ291cnRzRGF0YXMpXG4gICAgICAvLyAvLyBDb3VydHNEYXRhcy5zdGF0dXNEYXRhPTEwMDtcbiAgICAgIC8vIENvdXJ0c0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zPVtdXG4gICAgICBpZiAoXG4gICAgICAgIENvdXJ0c0RhdGFzLnN0YXR1c0NvZGUgPT0gMjAwICYmXG4gICAgICAgIENvdXJ0c0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQ291cnRzRGF0YXMuQ291cnRzRGF0YSA9XG4gICAgICAgICAgQ291cnRzRGF0YXMuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgIHZhciBDb3VydHNEYXRhcyA9IENvdXJ0c0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb3VydHNEYXRhcykge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQ291cnRzRGF0YXMuZW5kWWVhcltpbmRleF0gPSBDb3VydHNEYXRhc1tcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIF0uZW5kVGltZVxuICAgICAgICAgICAgLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5Db3VydHNEYXRhcy5lbmRIb3VyW2luZGV4XSA9IENvdXJ0c0RhdGFzW1xuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgXS5lbmRUaW1lXG4gICAgICAgICAgICAuc3BsaXQoJ1QnKVsxXVxuICAgICAgICAgICAgLnJlcGxhY2UoJ1onLCAnICcpO1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQ291cnRzRGF0YXMuc3RhcnRZZWFyW2luZGV4XSA9IENvdXJ0c0RhdGFzW1xuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgXS5zdGFydFRpbWVcbiAgICAgICAgICAgIC5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQ291cnRzRGF0YXMuc3RhcnRIb3VyW2luZGV4XSA9IENvdXJ0c0RhdGFzW1xuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgXS5zdGFydFRpbWVcbiAgICAgICAgICAgIC5zcGxpdCgnVCcpWzFdXG4gICAgICAgICAgICAucmVwbGFjZSgnWicsICcgJyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coQ291cnRzRGF0YXNbaW5kZXhdLmVuZFRpbWUuc3BsaXQoJ1QnKVsxXS5yZXBsYWNlKCdaJywgJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChDb3VydHNEYXRhcy5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zmlYXpmpzvvIEnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQ291cnRzRGF0YXMuQ291cnRzRGF0YSA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKENvdXJ0c0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5Db3VydHNEYXRhcy5Db3VydHNEYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIC8v6LSi5YqhXG4gICAgLy/otKbljZVcbiAgICBhc3luYyBHZXRVc2VyQ2FzZUJpbGxpbmcoKSB7XG4gICAgICB2YXIgaWQgPSB7XG4gICAgICAgIGNhc2VJZDogdGhpcy5pZCxcbiAgICAgICAgaXNSb2xlRmlsdGVyOiB0cnVlLFxuICAgICAgICBzdGF0dXNMaXN0OiBbJ0EnXVxuICAgICAgfTtcbiAgICAgIHZhciBVc2VyQ2FzZUJpbGxpbmdDb3VudCA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbEJpbGxpbmcvR2V0VXNlckJpbGxpbmdzQ291bnQnLFxuICAgICAgICAnUE9TVCcsXG4gICAgICAgIGlkXG4gICAgICApO1xuICAgICAgaWYgKFVzZXJDYXNlQmlsbGluZ0NvdW50LnN0YXR1c0NvZGUgPT0gMjAwICYmIFVzZXJDYXNlQmlsbGluZ0NvdW50LmRhdGEucmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBVc2VyQ2FzZUJpbGxpbmcgPSB7fTtcbiAgICAgICAgVXNlckNhc2VCaWxsaW5nWydVc2VyQ2FzZUJpbGxpbmdDb3VudCddID0gVXNlckNhc2VCaWxsaW5nQ291bnQuZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwID8gVXNlckNhc2VCaWxsaW5nQ291bnQuZGF0YS5yZXN1bHQuaXRlbXNbMF0udG90YWwgOiAwO1xuICAgICAgICB2YXIgaXRlbUlkID0ge1xuICAgICAgICAgIGNhc2VJZDogdGhpcy5pZCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlBhZ2VOdW1iZXJbMF0sXG4gICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgVXNlckNhc2VCaWxsaW5nSXRlbSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsQmlsbGluZy9HZXRNeUJpbGxpbmdzJyxcbiAgICAgICAgICAnUE9TVCcsXG4gICAgICAgICAgaXRlbUlkXG4gICAgICAgICk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFVzZXJDYXNlQmlsbGluZ0l0ZW0pO1xuICAgICAgICBpZiAoVXNlckNhc2VCaWxsaW5nSXRlbS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgIFVzZXJDYXNlQmlsbGluZ1snVXNlckNhc2VCaWxsaW5nVG90YWxDb3VudCddID1cbiAgICAgICAgICAgIFVzZXJDYXNlQmlsbGluZ0l0ZW0uZGF0YS5yZXN1bHQudG90YWxDb3VudC50b1N0cmluZygyKTtcbiAgICAgICAgICAvLyBpZih0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlBhZ2VOdW1iZXJbMF09MSl7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coVXNlckNhc2VCaWxsaW5nSXRlbS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGgpO1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckNhc2VCaWxsaW5nSGVpZ2h0ICs9XG4gICAgICAgICAgICBVc2VyQ2FzZUJpbGxpbmdJdGVtLmRhdGEucmVzdWx0Lml0ZW1zLmxlbmd0aCAqIDIwMDtcbiAgICAgICAgICB2YXIgVXNlckNhc2VCaWxsaW5nSXRlbSA9IFVzZXJDYXNlQmlsbGluZ0l0ZW0uZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gVXNlckNhc2VCaWxsaW5nSXRlbSkge1xuICAgICAgICAgICAgc3dpdGNoIChVc2VyQ2FzZUJpbGxpbmdJdGVtW2luZGV4XS5wcm9jZXNzU3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgICBjYXNlICfpooTlvIDotKbljZUnOlxuICAgICAgICAgICAgICAgIFVzZXJDYXNlQmlsbGluZ0l0ZW1baW5kZXhdWyd0ZXh0Q29sb3InXSA9ICcjMDA5REZGJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAn562J5b6F5a6h5qC4JzpcbiAgICAgICAgICAgICAgICBVc2VyQ2FzZUJpbGxpbmdJdGVtW2luZGV4XVsndGV4dENvbG9yJ10gPSAnI2ZmOTkwMCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ+WuoeaguOmAgOWbnic6XG4gICAgICAgICAgICAgICAgVXNlckNhc2VCaWxsaW5nSXRlbVtpbmRleF1bJ3RleHRDb2xvciddID0gJyNlMjAwMDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICflrqHmoLjpgJrov4cnOlxuICAgICAgICAgICAgICAgIFVzZXJDYXNlQmlsbGluZ0l0ZW1baW5kZXhdWyd0ZXh0Q29sb3InXSA9ICcjMDY5NDAwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUJpbGxpbmdJdGVtID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUJpbGxpbmdJdGVtLmNvbmNhdChcbiAgICAgICAgICAgIFVzZXJDYXNlQmlsbGluZ0l0ZW1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8jOmDqOWIhuaVsOaNruaXoOazleWKoOi9ve+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnREYXRhWzBdID0gVXNlckNhc2VCaWxsaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFVzZXJDYXNlQmlsbGluZ0NvdW50LnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUJpbGxpbmdDb3VudCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoVXNlckNhc2VCaWxsaW5nQ291bnQuZGF0YS5yZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckNhc2VCaWxsaW5nQ291bnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvL+WPkeelqFxuICAgIGFzeW5jIEdldFVzZXJDYXNlSW52b2ljZSgpIHtcbiAgICAgIHZhciBpZCA9IHtcbiAgICAgICAgY2FzZUlkOiB0aGlzLmlkLFxuICAgICAgICBpc1JvbGVGaWx0ZXI6IHRydWUsXG4gICAgICAgIHN0YXR1c0xpc3Q6IFtcIkNsYWltZWRcIl1cbiAgICAgIH07XG4gICAgICB2YXIgVXNlckNhc2VJbnZvaWNlQ291bnQgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxJbnZvaWNlL0dldFVzZXJJbnZvaWNlc0NvdW50JyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICBpZFxuICAgICAgKTtcbiAgICAgIGlmIChVc2VyQ2FzZUludm9pY2VDb3VudC5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgVXNlckNhc2VJbnZvaWNlID0gVXNlckNhc2VJbnZvaWNlQ291bnQuZGF0YS5yZXN1bHQuaXRlbXNbMF07XG4gICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuQW1vdW50RGF0YVsxXSA9IFVzZXJDYXNlSW52b2ljZTtcbiAgICAgICAgdmFyIGl0ZW1JZCA9IHtcbiAgICAgICAgICBjYXNlSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5QYWdlTnVtYmVyWzFdLFxuICAgICAgICAgIHBhZ2VTaXplOiAxMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgVXNlckludm9pY2VzSXRlbSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvZmluYW5jaWFsSW52b2ljZS9HZXRVc2VySW52b2ljZXMnLFxuICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICBpdGVtSWRcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVXNlckludm9pY2VzSXRlbS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgVXNlckludm9pY2VzSXRlbS5zdGF0dXNDb2RlID09IDIwMCAmJlxuICAgICAgICAgIFVzZXJJbnZvaWNlc0l0ZW0uZGF0YS5yZXN1bHQuaXRlbXMubGVuZ3RoICE9PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFVzZXJDYXNlSW52b2ljZVsnVXNlckludm9pY2VzVG90YWxDb3VudCddID1cbiAgICAgICAgICAvLyAgIFVzZXJJbnZvaWNlc0l0ZW0uZGF0YS5yZXN1bHQudG90YWxDb3VudDtcbiAgICAgICAgICB2YXIgVXNlckludm9pY2VzSXRlbSA9IFVzZXJJbnZvaWNlc0l0ZW0uZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VySW52b2ljZXNJdGVtSGVpZ2h0ICs9XG4gICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtLmxlbmd0aCAqIDI1MDtcbiAgICAgICAgICB2YXIgZGF0ZSA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIFVzZXJJbnZvaWNlc0l0ZW0pIHtcbiAgICAgICAgICAgIGRhdGVbaW5kZXhdID0gVXNlckludm9pY2VzSXRlbVtpbmRleF0uY3JlYXRpb25UaW1lLnNwbGl0KCdUJylbMF07XG4gICAgICAgICAgICBzd2l0Y2ggKFVzZXJJbnZvaWNlc0l0ZW1baW5kZXhdLnN0YXR1c05hbWUpIHtcbiAgICAgICAgICAgICAgY2FzZSAn5bey6aKG5Y+WJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjMDY5NDAwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAn5pyq5o+Q5LqkJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjNWQ3M2ZhJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAn5b6F5aSE55CGJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjZmY5OTAwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAn5bey6YCA5ZueJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjZTIwMDAwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAn5bey5byA56WoJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgY2FzZSAn5bey5Yiw6LSmJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjMDY5NDAwJztcbiAgICAgICAgICAgICAgY2FzZSAn5pyq5Yiw6LSmJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjZTIwMDAwJztcbiAgICAgICAgICAgICAgY2FzZSAn6YOo5YiG5Yiw6LSmJzpcbiAgICAgICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VySW52b2ljZXNEYXRlID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VySW52b2ljZXNEYXRlLmNvbmNhdChcbiAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckludm9pY2VzSXRlbSA9IHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckludm9pY2VzSXRlbS5jb25jYXQoXG4gICAgICAgICAgICBVc2VySW52b2ljZXNJdGVtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFbMV0gPSBVc2VyQ2FzZUludm9pY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoVXNlckNhc2VJbnZvaWNlQ291bnQuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6Zqc77yBJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJDYXNlSW52b2ljZUNvdW50ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChVc2VyQ2FzZUludm9pY2VDb3VudC5kYXRhLnJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUludm9pY2VDb3VudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIC8vIOaUtuasvlxuICAgIGFzeW5jIEdldFVzZXJDYXNlUmVjZWlwdENvdW50KCkge1xuICAgICAgdmFyIGlkID0ge1xuICAgICAgICBjYXNlSWQ6IHRoaXMuaWRcbiAgICAgIH07XG4gICAgICB2YXIgVXNlckNhc2VSZWNlaXB0Q291bnQgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxSZWNlaXB0L0dldFVzZXJSZWNlaXB0c0NvdW50JyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICBpZFxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgVXNlckNhc2VSZWNlaXB0Q291bnQuc3RhdHVzQ29kZSA9PSAyMDBcbiAgICAgICkge1xuICAgICAgICB2YXIgVXNlckNhc2VSZWNlaXB0ID0gVXNlckNhc2VSZWNlaXB0Q291bnQuZGF0YS5yZXN1bHQuaXRlbXNbMV07XG4gICAgICAgIHZhciBpdGVtSWQgPSB7XG4gICAgICAgICAgY2FzZUlkOiB0aGlzLmlkLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuUGFnZU51bWJlclsyXSxcbiAgICAgICAgICBwYWdlU2l6ZTogMTBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIFVzZXJSZWNlaXB0c0l0ZW0gPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbFJlY2VpcHQvR2V0VXNlclJlY2VpcHRzJyxcbiAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgaXRlbUlkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChVc2VyUmVjZWlwdHNJdGVtLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgLy8gVXNlckNhc2VSZWNlaXB0WydVc2VyUmVjZWlwdHNUb3RhbENvdW50J10gPVxuICAgICAgICAgIC8vICAgVXNlclJlY2VpcHRzSXRlbS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xuICAgICAgICAgIHZhciBVc2VyUmVjZWlwdHNJdGVtID0gVXNlclJlY2VpcHRzSXRlbS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJSZWNlaXB0c0l0ZW1IZWlnaHQgKz1cbiAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW0ubGVuZ3RoICogMjUwO1xuICAgICAgICAgIHZhciBkYXRlID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gVXNlclJlY2VpcHRzSXRlbSkge1xuICAgICAgICAgICAgZGF0ZVtpbmRleF0gPSBVc2VyUmVjZWlwdHNJdGVtW2luZGV4XS5jcmVhdGlvblRpbWUuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgICAgIHN3aXRjaCAoVXNlclJlY2VpcHRzSXRlbVtpbmRleF0uc3RhdHVzTmFtZSkge1xuICAgICAgICAgICAgICBjYXNlICflt7Lpooblj5YnOlxuICAgICAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW1baW5kZXhdWydzdGF0dXNDb2xvciddID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICfmnKrpooblj5YnOlxuICAgICAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW1baW5kZXhdWydzdGF0dXNDb2xvciddID0gJyNmZjk5MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICflvoXnoa7orqQnOlxuICAgICAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW1baW5kZXhdWydzdGF0dXNDb2xvciddID0gJyNmZjk5MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICflvoXliIbphY0nOlxuICAgICAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW1baW5kZXhdWydzdGF0dXNDb2xvciddID0gJyNmZjk5MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICfmnKrmj5DkuqQnOlxuICAgICAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW1baW5kZXhdWydzdGF0dXNDb2xvciddID0gJyM1ZDczZmEnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICflt7LliIbphY0nOlxuICAgICAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW1baW5kZXhdWydzdGF0dXNDb2xvciddID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJSZWNlaXB0c0RhdGUgPSB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJSZWNlaXB0c0RhdGUuY29uY2F0KFxuICAgICAgICAgICAgZGF0ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyUmVjZWlwdHNJdGVtID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyUmVjZWlwdHNJdGVtLmNvbmNhdChcbiAgICAgICAgICAgIFVzZXJSZWNlaXB0c0l0ZW1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8gemDqOWIhuaVsOaNruaXoOazleWKoOi9vScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnREYXRhWzJdID0gVXNlckNhc2VSZWNlaXB0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFVzZXJDYXNlUmVjZWlwdENvdW50LnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckNhc2VSZWNlaXB0Q291bnQgPSBudWxsO1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoVXNlckNhc2VSZWNlaXB0Q291bnQuZGF0YS5yZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckNhc2VSZWNlaXB0Q291bnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvLyDotLnnlKhcbiAgICBhc3luYyBHZXRVc2VyQ2FzZUNoYXJnZUNvdW50KCkge1xuICAgICAgdmFyIGlkID0ge1xuICAgICAgICBjYXNlSWQ6IHRoaXMuaWRcbiAgICAgIH07XG4gICAgICB2YXIgVXNlckNhc2VDaGFyZ2VDb3VudCA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2ZpbmFuY2lhbENoYXJnZS9HZXRVc2VyQ2hhcmdlc0NvdW50JyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICBpZFxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgVXNlckNhc2VDaGFyZ2VDb3VudC5zdGF0dXNDb2RlID09IDIwMCAmJlxuICAgICAgICBVc2VyQ2FzZUNoYXJnZUNvdW50LmRhdGEucmVzdWx0ICE9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdmFyIFVzZXJDYXNlQ2hhcmdlID0gVXNlckNhc2VDaGFyZ2VDb3VudC5kYXRhLnJlc3VsdC5pdGVtc1swXTtcbiAgICAgICAgdmFyIGl0ZW1JZCA9IHtcbiAgICAgICAgICBjYXNlSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5QYWdlTnVtYmVyWzNdLFxuICAgICAgICAgIHBhZ2VTaXplOiAxMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgVXNlckNoYXJnZXNJdGVtID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9maW5hbmNpYWxDaGFyZ2UvR2V0VXNlckNoYXJnZXMnLFxuICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICBpdGVtSWRcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVXNlckNoYXJnZXNJdGVtKVxuICAgICAgICBpZiAoVXNlckNoYXJnZXNJdGVtLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgLy8gVXNlckNhc2VDaGFyZ2VbJ1VzZXJDaGFyZ2VzVG90YWxDb3VudCddID1cbiAgICAgICAgICAvLyAgIFVzZXJDaGFyZ2VzSXRlbS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xuICAgICAgICAgIHZhciBVc2VyQ2hhcmdlc0l0ZW0gPSBVc2VyQ2hhcmdlc0l0ZW0uZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2hhcmdlc0l0ZW1IZWlnaHQgKz1cbiAgICAgICAgICAgIFVzZXJDaGFyZ2VzSXRlbS5sZW5ndGggKiAyNTA7XG4gICAgICAgICAgdmFyIGRhdGUgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBVc2VyQ2hhcmdlc0l0ZW0pIHtcbiAgICAgICAgICAgIGRhdGVbaW5kZXhdID0gVXNlckNoYXJnZXNJdGVtW2luZGV4XS5jcmVhdGlvblRpbWUuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgICAgIHN3aXRjaCAoVXNlckNoYXJnZXNJdGVtW2luZGV4XS5zdGF0dXNOYW1lKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ+W+heWuoeaguCc6XG4gICAgICAgICAgICAgICAgVXNlckNoYXJnZXNJdGVtW2luZGV4XVsnc3RhdHVzQ29sb3InXSA9ICcjZmY5OTAwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAn5bey5a6h5qC4JzpcbiAgICAgICAgICAgICAgICBVc2VyQ2hhcmdlc0l0ZW1baW5kZXhdWydzdGF0dXNDb2xvciddID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICflt7LpgIDlm54nOlxuICAgICAgICAgICAgICAgIFVzZXJDaGFyZ2VzSXRlbVtpbmRleF1bJ3N0YXR1c0NvbG9yJ10gPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuVXNlckNoYXJnZXNEYXRlID0gdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2hhcmdlc0RhdGUuY29uY2F0KFxuICAgICAgICAgICAgZGF0ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2hhcmdlc0l0ZW0gPSB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJDaGFyZ2VzSXRlbS5jb25jYXQoXG4gICAgICAgICAgICBVc2VyQ2hhcmdlc0l0ZW1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8gemDqOWIhuaVsOaNruaXoOazleato+W4uOWKoOi9vScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coVXNlckNhc2VDaGFyZ2UpO1xuICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFbM10gPSBVc2VyQ2FzZUNoYXJnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChVc2VyQ2FzZUNoYXJnZUNvdW50LnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUNoYXJnZUNvdW50ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChVc2VyQ2FzZUNoYXJnZUNvdW50LmRhdGEucmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJDYXNlQ2hhcmdlQ291bnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFRhYiA9PSA2KSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnRDdXJyZW50KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFbMF1cbiAgICAgICAgICAgICAgLlVzZXJDYXNlQmlsbGluZ1RvdGFsQ291bnQgL1xuICAgICAgICAgICAgICAxMCA+XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuUGFnZU51bWJlclswXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuUGFnZU51bWJlclswXSArPSAxO1xuICAgICAgICAgICAgICAvLyB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFIZWlnaHQ9dGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUJpbGxpbmdIZWlnaHRcbiAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyQ2FzZUJpbGxpbmcoKTtcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliLDlupXkuoYnLFxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5BbW91bnREYXRhWzFdXG4gICAgICAgICAgICAgIC5jb3VudCAvXG4gICAgICAgICAgICAgIDEwID5cbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5QYWdlTnVtYmVyWzFdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5QYWdlTnVtYmVyWzFdICs9IDE7XG4gICAgICAgICAgICAgIC8vIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuQW1vdW50RGF0YUhlaWdodD10aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLlVzZXJDYXNlQmlsbGluZ0hlaWdodFxuICAgICAgICAgICAgICB0aGlzLkdldFVzZXJDYXNlSW52b2ljZSgpO1xuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WIsOW6leS6hicsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFbMl0uY291bnQgL1xuICAgICAgICAgICAgICAxMCA+XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuUGFnZU51bWJlclsyXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuUGFnZU51bWJlclsyXSArPSAxO1xuICAgICAgICAgICAgICAvLyB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFIZWlnaHQ9dGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUJpbGxpbmdIZWlnaHRcbiAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyQ2FzZVJlY2VpcHRDb3VudCgpO1xuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WIsOW6leS6hicsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFbM10uY291bnQgL1xuICAgICAgICAgICAgICAxMCA+XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuUGFnZU51bWJlclszXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2FzZURldGFpbERhdGEuQW1vdW50RGF0YXMuUGFnZU51bWJlclszXSArPSAxO1xuICAgICAgICAgICAgICAvLyB0aGlzLmNhc2VEZXRhaWxEYXRhLkFtb3VudERhdGFzLkFtb3VudERhdGFIZWlnaHQ9dGhpcy5jYXNlRGV0YWlsRGF0YS5BbW91bnREYXRhcy5Vc2VyQ2FzZUJpbGxpbmdIZWlnaHRcbiAgICAgICAgICAgICAgdGhpcy5HZXRVc2VyQ2FzZUNoYXJnZUNvdW50KCk7XG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yiw5bqV5LqGJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgdGhpcy5TeW5jUGF0aD1cIk0wLE0xLFwiK29wdGlvbnMuaWQ7XG4gICAgICB0aGlzLmNsaWVudElkID0gb3B0aW9ucy5jbGllbnRJZDtcbiAgICAgIHRoaXMuZG9jQ2xhc3MgPSBvcHRpb25zLmlkO1xuICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YS5kb2N1bWVudERhdGFzLmZpeGVkUGF0aC5sYXN0UGF0aENsYXNzID1vcHRpb25zLmlkO1xuICAgICAgdGhpcy5nZXRDYXNlRGF0YSgpO1xuICAgICAgdGhpcy5nZXRDbGllbnQoKTtcbiAgICAgIHRoaXMuR2V0VGFza1N0YWdlcygpO1xuICAgICAgdGhpcy5nZXREb2N1bWVudERhdGEob3B0aW9ucy5pZCwgJ00xJyk7XG4gICAgICB0aGlzLmdldFdvcmtMb2dzKCk7XG4gICAgICB0aGlzLkdldENvdXJ0cygpO1xuICAgICAgLy/otKLliqHliqDovb1cbiAgICAgIHRoaXMuR2V0VXNlckNhc2VCaWxsaW5nKCk7XG4gICAgICB0aGlzLkdldFVzZXJDYXNlUmVjZWlwdENvdW50KCk7XG4gICAgICB0aGlzLkdldFVzZXJDYXNlSW52b2ljZSgpO1xuICAgICAgdGhpcy5HZXRVc2VyQ2FzZUNoYXJnZUNvdW50KCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBpc1JlZnJlc2goKSB7XG4gICAgICB0aGlzLmNhc2VEZXRhaWxEYXRhLnRhc2tEYXRhcy5UYXNrU3RhZ2VzRGF0YXMgPSBbXTtcbiAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLlRhc2tzRGF0YXMgPSBbXTtcbiAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLnZpZXdIZWlnaHQgPSBbXTtcbiAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLnBhZ2VOdW1iZXIgPSBbXTtcbiAgICAgIHRoaXMuY2FzZURldGFpbERhdGEudGFza0RhdGFzLnN0YWdlSWQgPSBbXTtcbiAgICAgIHRoaXMuR2V0VGFza1N0YWdlcygpO1xuICAgICAgdGhpcy5HZXRUYXNrcygpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25IaWRlKCkge31cbiAgICBvblVubG9hZCgpIHt9XG4gIH1cbiJdfQ==