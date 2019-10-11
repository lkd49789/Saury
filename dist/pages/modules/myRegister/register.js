'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var register = function (_wepy$page) {
  _inherits(register, _wepy$page);

  function register() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = register.__proto__ || Object.getPrototypeOf(register)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      isNoCaseData: false,
      stageIdentColor: [{
        color: '#333ccc',
        isShow: true
      }, {
        color: '#9157FA',
        isShow: false
      }, {
        color: '#5d73fa',
        isShow: false
      }, {
        color: '#009dff',
        isShow: false
      }, {
        color: '#FFCB47',
        isShow: false
      }, {
        color: '#FF9900',
        isShow: false
      }],
      //客户ID
      clientId: "",
      clientData: {},
      isClientData: false,
      //案件信息
      caseId: '',
      isCaseInfoData: false,
      caseInfoData: {},
      // 冲突信息
      conflictInfoData: [],
      //客户方本案联系人
      clientLinkerData: [],
      //案件律师信息
      caseLayerLinkerListData: {},
      isCaseLayerLinkerListData: false,
      //律师费用信息
      caseLayerChargeInfoData: {},
      isShowNextIcon: false,
      isCaseLayerChargeInfoData: false
    }, _this.components = {}, _this.methods = {
      subCaseInfoData: function subCaseInfoData() {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2]; //上一个页面
        if (prevPage.route == 'pages/modules/myRegister/myRegisterList' || prevPage.route == 'pages/modules/caseManagement/caseManagement') {
          prevPage.isRefresh();
          wx.navigateBack({
            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
          });
        } else {
          wx.redirectTo({ url: './myRegisterList' });
        }
      },

      //跳转至录入律师费用信息页面
      toLawyerChargeInfo: function toLawyerChargeInfo() {
        wx.navigateTo({
          url: './caseChargeAndContract/lawyerChargeInfo?id=' + this.caseId
        });
      },

      // 案件律师信息页面
      toCaseLawyerLinker: function toCaseLawyerLinker() {
        wx.navigateTo({
          url: './caseLawyerLinker/caseLawyerLinkerList?id=' + this.caseId
        });
      },

      //跳转至客户方本案联系人创建页面
      toCreateClientCaseLinker: function toCreateClientCaseLinker() {
        wx.navigateTo({
          url: './clientLinker/clientCaseLinkerChosen?id=' + this.clientId
        });
      },

      //跳转至创建利益冲突页面
      toCreateConflict: function toCreateConflict() {
        wx.navigateTo({
          url: './conflict/createConflict'
        });
      },

      //跳转至创建案件基本信息页面
      toCreateCaseBaseInfo: function toCreateCaseBaseInfo() {
        wx.navigateTo({
          url: './caseInfo/createCaseInfo?ClientName=' + this.clientData.name + '&ClientId=' + this.clientId
        });
      },

      //跳转到客户详情页面
      toClientDetail: function toClientDetail() {
        wx.navigateTo({
          url: '../myclient/clientDetail/itemDetail/clientBaseInfo?id=' + this.clientId
        });
      },

      // 删除客户信息
      deleteClientInfo: function deleteClientInfo() {
        var _this2 = this;

        wx.showModal({
          title: '提示', //提示的标题,
          content: '是否删除已选客户信息', //提示的内容,
          showCancel: true, //是否显示取消按钮,
          cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
          cancelColor: '#000000', //取消按钮的文字颜色,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#5d73fa', //确定按钮的文字颜色,
          success: function success(res) {
            if (res.confirm) {
              _this2.clientId = "";
              _this2.clientData = {};
              var create_caseinfo_data = wx.getStorageSync('CREATE_CASEINFO_DATA');
              if (Object.keys(create_caseinfo_data).length !== 0) {
                create_caseinfo_data.ClientId = '';
                create_caseinfo_data.ClientName = '';
              }
              wx.setStorageSync('CREATE_CASEINFO_DATA', create_caseinfo_data);
              var create_clientinfo_data = wx.getStorageSync('CREATE_CLIENTINFO_DATA');
              create_clientinfo_data = {};
              wx.setStorageSync('CREATE_CLIENTINFO_DATA', create_clientinfo_data);
              _this2.$apply();
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      },
      toClientList: function toClientList() {
        wx.navigateTo({
          url: '../myclient/directory/directory'
        });
      },
      toCreateClient: function toCreateClient() {
        wx.navigateTo({
          url: '../myclient/createClient/createClientBaseInfo'
        });
      }
    }, _this.events = {}, _this.watch = {
      clientData: function clientData(data, oldData) {
        if (Object.keys(data).length !== 0 && Object.keys(this.caseInfoData).length !== 0) {
          var create_caseinfo_data = wx.getStorageSync('CREATE_CASEINFO_DATA');
          create_caseinfo_data.ClientId = this.clientId;
          create_caseinfo_data.ClientName = this.clientData.name;
          this.CreateOrUpdateCaseGeneralInfo(create_caseinfo_data);
          wx.setStorageSync('CREATE_CASEINFO_DATA', create_caseinfo_data);
        } else if (Object.keys(data).length == 0 && Object.keys(this.caseInfoData).length == 0) {
          this.stageIdentColor[1].isShow = false;
        }
        this.$apply();
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(register, [{
    key: 'CreateOrUpdateCaseGeneralInfo',

    //案件基本信息提交
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
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
                return _ajax2.default.getData('/api/services/web/case/CreateOrUpdateCaseGeneralInfo', 'post', data);

              case 3:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  wx.setStorageSync('CREATE_CASEINFO_DATA', data);
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

      function CreateOrUpdateCaseGeneralInfo(_x) {
        return _ref2.apply(this, arguments);
      }

      return CreateOrUpdateCaseGeneralInfo;
    }()
    //创建缓存池

  }, {
    key: 'cachePool',
    value: function cachePool() {
      //客户信息
      wx.setStorage({
        key: 'CREATE_CLIENTINFO_DATA',
        data: {}
      });
      //案件信息
      wx.setStorage({
        key: 'CREATE_CASEINFO_DATA',
        data: {}
      });
      //利益冲突
      wx.setStorage({
        key: 'CREATE_CONFLICTLIST_DATA',
        data: []
      });
      //客户方本案联系人
      wx.setStorage({
        key: 'CREATE_CLIENTLINKERLIST_DATA',
        data: []
      });
      //案件律师信息
      wx.setStorage({
        key: 'CREATE_CASELAWYERLINKERLIST_DATA',
        data: {}
      });
      //案件费用信息
      wx.setStorage({
        key: 'CREATE_LAWYERCHARGE_DATA',
        data: {}
      });
      //合同上传
      wx.setStorage({
        key: 'CREATE_CONTRACT_DATA',
        data: {}
      });
    }
    //获取缓存

  }, {
    key: 'getCacheData',
    value: function getCacheData() {
      var _this3 = this;

      //获取缓存中客户信息
      wx.getStorage({
        key: 'CREATE_CLIENTINFO_DATA',
        success: function success(res) {
          if (Object.keys(res.data).length !== 0) {
            _this3.clientId = res.data.id;
            // this.clientId='CL20180300045';
            _this3.clientData = res.data;
            _this3.stageIdentColor[1].isShow = true;
          }
          _this3.$apply();
        },
        fail: function fail() {},
        complete: function complete() {}
      });
      //获取缓存中案件信息
      wx.getStorage({
        key: 'CREATE_CASEINFO_DATA',
        success: function success(res) {
          if (Object.keys(res.data).length !== 0) {
            _this3.caseInfoData = res.data;
            _this3.isCaseInfoData = true;
            _this3.caseId = res.data.Id;
            _this3.isShowNextIcon = true;
            _this3.stageIdentColor[2].isShow = true;
            _this3.stageIdentColor[3].isShow = true;
            _this3.stageIdentColor[4].isShow = true;
          }
          _this3.$apply();
        },
        fail: function fail() {},
        complete: function complete() {}
      });
      //获取缓存中有冲突信息
      wx.getStorage({
        key: 'CREATE_CONFLICTLIST_DATA',
        success: function success(res) {
          _this3.conflictInfoData = res.data;
          _this3.$apply();
        },
        fail: function fail() {},
        complete: function complete() {}
      });
      //客户方本案联系人
      wx.getStorage({
        key: 'CREATE_CLIENTLINKERLIST_DATA',
        success: function success(res) {
          _this3.clientLinkerData = res.data;
          _this3.$apply();
        },
        fail: function fail() {},
        complete: function complete() {}
      });
      //获取案件律师信息
      wx.getStorage({
        key: 'CREATE_CASELAWYERLINKERLIST_DATA',
        success: function success(res) {
          if (Object.keys(res.data).length !== 0) {
            _this3.GetCaseChargeList(_this3.caseId);
          }
        },
        fail: function fail() {},
        complete: function complete() {}
      });
      //获取案件费用信息
      wx.getStorage({
        key: 'CREATE_LAWYERCHARGE_DATA',
        success: function success(res) {
          console.log(res.data);
          if (Object.keys(res.data).length !== 0) {
            _this3.GetCaseInfoData();
            _this3.caseLayerChargeInfoData = res.data;
            _this3.stageIdentColor[5].isShow = true;
            _this3.isCaseLayerChargeInfoData = true;
            _this3.$apply();
          }
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    }
    //获取客户信息

  }, {
    key: 'GetClient',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var resData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ajax2.default.getData('/api/services/web/client/GetClient', 'post', {
                  id: id
                });

              case 2:
                resData = _context2.sent;

                if (resData.statusCode == 200) {
                  this.clientId = id;
                  this.clientData = resData.data.result;
                  this.stageIdentColor[1].isShow = true;
                  wx.setStorageSync('CREATE_CLIENTINFO_DATA', resData.data.result);
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetClient(_x2) {
        return _ref3.apply(this, arguments);
      }

      return GetClient;
    }()
    //获取案件费用数据

  }, {
    key: 'GetCaseInfoData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var resData, GetCaseGeneralInfo, payStyle, payStyleText, index;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'post', {
                  Id: this.caseId
                });

              case 2:
                resData = _context3.sent;

                if (!(resData.statusCode == 200)) {
                  _context3.next = 27;
                  break;
                }

                GetCaseGeneralInfo = resData.data.result;

                this.caseLayerChargeInfoData.chargeLimit = GetCaseGeneralInfo.chargeLimit;
                this.caseLayerChargeInfoData.paidPartyText = GetCaseGeneralInfo.paidPartyText;

                if (!GetCaseGeneralInfo.payStyle) {
                  _context3.next = 26;
                  break;
                }

                payStyle = GetCaseGeneralInfo.payStyle.split(",");
                payStyleText = [];
                _context3.t0 = regeneratorRuntime.keys(payStyle);

              case 11:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 25;
                  break;
                }

                index = _context3.t1.value;
                _context3.t2 = payStyle[index];
                _context3.next = _context3.t2 === '1' ? 16 : _context3.t2 === '2' ? 18 : _context3.t2 === '3' ? 20 : 22;
                break;

              case 16:
                payStyleText.push('正常收费');
                return _context3.abrupt('break', 23);

              case 18:
                payStyleText.push('风险收费');
                return _context3.abrupt('break', 23);

              case 20:
                payStyleText.push('小时收费');
                return _context3.abrupt('break', 23);

              case 22:
                return _context3.abrupt('break', 23);

              case 23:
                _context3.next = 11;
                break;

              case 25:
                this.caseLayerChargeInfoData.payStyleText = payStyleText.join('+');

              case 26:
                this.isCaseLayerChargeInfoData = true;

              case 27:
                this.$apply();

              case 28:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetCaseInfoData() {
        return _ref4.apply(this, arguments);
      }

      return GetCaseInfoData;
    }()
    //获取案件信息

  }, {
    key: 'GetCaseInfo',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
        var resData, ary, GetCaseGeneralInfo, index, payStyle, payStyleText;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'post', {
                  Id: id
                });

              case 2:
                resData = _context4.sent;

                if (!(resData.statusCode == 200 && Object.keys(resData.data.result).length !== 0)) {
                  _context4.next = 42;
                  break;
                }

                ary = resData.data.result;
                GetCaseGeneralInfo = this.nameTo_(ary);

                this.caseInfoData = GetCaseGeneralInfo;
                // this.caseInfoStorage(GetCaseGeneralInfo);
                this.GetClient(GetCaseGeneralInfo.ClientId);
                this.isCaseInfoData = true;
                this.isShowNextIcon = true;
                this.caseId = GetCaseGeneralInfo.Id;
                this.stageIdentColor[1].isShow = true;
                this.stageIdentColor[2].isShow = true;
                this.stageIdentColor[3].isShow = true;
                this.stageIdentColor[4].isShow = true;
                //利益冲突
                this.conflictInfoData = GetCaseGeneralInfo.CaseClientRelationList;
                this.GetGeneralCodeComboOutput(GetCaseGeneralInfo.CaseClientRelationList);
                //客户方本案联系人
                this.clientLinkerData = GetCaseGeneralInfo.CaseContactsList;
                for (index in GetCaseGeneralInfo.CaseContactsList) {
                  GetCaseGeneralInfo.CaseContactsList[index] = GetCaseGeneralInfo.CaseContactsList[index].id;
                }
                //获取律师费用信息
                this.caseLayerChargeInfoData.chargeLimit = GetCaseGeneralInfo.ChargeLimit;
                this.caseLayerChargeInfoData.paidPartyText = GetCaseGeneralInfo.PaidPartyText;

                if (!GetCaseGeneralInfo.PayStyle) {
                  _context4.next = 40;
                  break;
                }

                payStyle = GetCaseGeneralInfo.PayStyle.split(",");
                payStyleText = [];
                _context4.t0 = regeneratorRuntime.keys(payStyle);

              case 25:
                if ((_context4.t1 = _context4.t0()).done) {
                  _context4.next = 39;
                  break;
                }

                index = _context4.t1.value;
                _context4.t2 = payStyle[index];
                _context4.next = _context4.t2 === '1' ? 30 : _context4.t2 === '2' ? 32 : _context4.t2 === '3' ? 34 : 36;
                break;

              case 30:
                payStyleText.push('正常收费');
                return _context4.abrupt('break', 37);

              case 32:
                payStyleText.push('风险收费');
                return _context4.abrupt('break', 37);

              case 34:
                payStyleText.push('小时收费');
                return _context4.abrupt('break', 37);

              case 36:
                return _context4.abrupt('break', 37);

              case 37:
                _context4.next = 25;
                break;

              case 39:
                this.caseLayerChargeInfoData.payStyleText = payStyleText.join('+');

              case 40:
                this.isCaseLayerChargeInfoData = true;
                wx.setStorage({
                  key: 'CREATE_CASEINFO_DATA',
                  data: GetCaseGeneralInfo
                });
                //

              case 42:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GetCaseInfo(_x3) {
        return _ref5.apply(this, arguments);
      }

      return GetCaseInfo;
    }()
    //获取已有案件律师信息

  }, {
    key: 'GetCaseChargeList',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        var resData, GetCaseChargeList, caseLayerLinkerListData, i, len;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeList', 'post', {
                  id: id
                });

              case 2:
                resData = _context5.sent;

                if (resData.statusCode == 200 && resData.data.result.lawyerChargeList.length !== 0) {
                  this.stageIdentColor[5].isShow = true;
                  this.isCaseLayerLinkerListData = true;
                  GetCaseChargeList = resData.data.result.lawyerChargeList;
                  caseLayerLinkerListData = {};

                  caseLayerLinkerListData.count = GetCaseChargeList.length;
                  for (i = 0, len = GetCaseChargeList.length; i < len; i++) {
                    if (GetCaseChargeList[i].lawyerRole == 'M') {
                      caseLayerLinkerListData.name = GetCaseChargeList[i].employeeName;
                      caseLayerLinkerListData.categoryName = GetCaseChargeList[i].lawyerRoleText;
                    }
                  }
                  this.caseLayerLinkerListData = caseLayerLinkerListData;
                  wx.setStorageSync('CREATE_CASELAWYERLINKERLIST_DATA', caseLayerLinkerListData);
                  this.$apply();
                  wx.pageScrollTo({
                    scrollTop: wx.getSystemInfoSync().windowHeight,
                    duration: 300
                  });
                }

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function GetCaseChargeList(_x4) {
        return _ref6.apply(this, arguments);
      }

      return GetCaseChargeList;
    }()
    //获取职位

  }, {
    key: 'GetGeneralCodeComboOutput',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(CaseClientRelationListData) {
        var data, resData, i, len, j, leng;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {
                  Class: "CLCDT",
                  Depth: 0,
                  IsMaxDepth: true,
                  IsRecursive: false,
                  ParentId: ""
                };
                _context6.next = 3;
                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboOutput', 'post', data);

              case 3:
                resData = _context6.sent;

                if (resData.statusCode == 200) {
                  for (i = 0, len = CaseClientRelationListData.length; i < len; i++) {
                    if (CaseClientRelationListData[i].legalType) {
                      for (j = 0, leng = resData.data.result.length; j < leng; j++) {
                        if (CaseClientRelationListData[i].legalType == resData.data.result[j].id) {
                          CaseClientRelationListData[i].legalTypeText = resData.data.result[j].name;
                        }
                      }
                    }
                  }
                  wx.setStorage({
                    key: 'CREATE_CONFLICTLIST_DATA',
                    data: CaseClientRelationListData
                  });
                  this.$apply();
                }

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function GetGeneralCodeComboOutput(_x5) {
        return _ref7.apply(this, arguments);
      }

      return GetGeneralCodeComboOutput;
    }()
  }, {
    key: 'nameTo_',
    value: function nameTo_(jsonObj) {
      var result = {};
      for (var key in jsonObj) {
        var keyval = jsonObj[key];
        key = key.replace(key[0], key[0].toUpperCase());
        result[key] = keyval;
      }
      return result;
    }
  }, {
    key: 'noCaseData',

    //没有数据时
    value: function noCaseData() {
      //客户信息
      wx.setStorage({
        key: 'CREATE_CLIENTINFO_DATA',
        data: {}
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      if (options.id) {
        this.GetCaseInfo(options.id);
        this.GetCaseChargeList(options.id);
      }
      this.cachePool();
    }
  }, {
    key: 'isDataRefresh',
    value: function isDataRefresh(clientId) {
      this.GetClient(clientId);
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getCacheData();
    }
  }]);

  return register;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(register , 'pages/modules/myRegister/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwicHJvcHMiLCJkYXRhIiwiaXNOb0Nhc2VEYXRhIiwic3RhZ2VJZGVudENvbG9yIiwiY29sb3IiLCJpc1Nob3ciLCJjbGllbnRJZCIsImNsaWVudERhdGEiLCJpc0NsaWVudERhdGEiLCJjYXNlSWQiLCJpc0Nhc2VJbmZvRGF0YSIsImNhc2VJbmZvRGF0YSIsImNvbmZsaWN0SW5mb0RhdGEiLCJjbGllbnRMaW5rZXJEYXRhIiwiY2FzZUxheWVyTGlua2VyTGlzdERhdGEiLCJpc0Nhc2VMYXllckxpbmtlckxpc3REYXRhIiwiY2FzZUxheWVyQ2hhcmdlSW5mb0RhdGEiLCJpc1Nob3dOZXh0SWNvbiIsImlzQ2FzZUxheWVyQ2hhcmdlSW5mb0RhdGEiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInN1YkNhc2VJbmZvRGF0YSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJsZW5ndGgiLCJyb3V0ZSIsImlzUmVmcmVzaCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJyZWRpcmVjdFRvIiwidXJsIiwidG9MYXd5ZXJDaGFyZ2VJbmZvIiwibmF2aWdhdGVUbyIsInRvQ2FzZUxhd3llckxpbmtlciIsInRvQ3JlYXRlQ2xpZW50Q2FzZUxpbmtlciIsInRvQ3JlYXRlQ29uZmxpY3QiLCJ0b0NyZWF0ZUNhc2VCYXNlSW5mbyIsIm5hbWUiLCJ0b0NsaWVudERldGFpbCIsImRlbGV0ZUNsaWVudEluZm8iLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImNyZWF0ZV9jYXNlaW5mb19kYXRhIiwiZ2V0U3RvcmFnZVN5bmMiLCJPYmplY3QiLCJrZXlzIiwiQ2xpZW50SWQiLCJDbGllbnROYW1lIiwic2V0U3RvcmFnZVN5bmMiLCJjcmVhdGVfY2xpZW50aW5mb19kYXRhIiwiJGFwcGx5IiwiY2FuY2VsIiwiY29uc29sZSIsImxvZyIsInRvQ2xpZW50TGlzdCIsInRvQ3JlYXRlQ2xpZW50IiwiZXZlbnRzIiwid2F0Y2giLCJvbGREYXRhIiwiQ3JlYXRlT3JVcGRhdGVDYXNlR2VuZXJhbEluZm8iLCJjb21wdXRlZCIsInNob3dMb2FkaW5nIiwibWFzayIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJzaG93VG9hc3QiLCJlcnJvciIsIm1lc3NhZ2UiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRTdG9yYWdlIiwia2V5IiwiZ2V0U3RvcmFnZSIsImlkIiwiZmFpbCIsImNvbXBsZXRlIiwiSWQiLCJHZXRDYXNlQ2hhcmdlTGlzdCIsIkdldENhc2VJbmZvRGF0YSIsInJlc3VsdCIsIkdldENhc2VHZW5lcmFsSW5mbyIsImNoYXJnZUxpbWl0IiwicGFpZFBhcnR5VGV4dCIsInBheVN0eWxlIiwic3BsaXQiLCJwYXlTdHlsZVRleHQiLCJpbmRleCIsInB1c2giLCJqb2luIiwiYXJ5IiwibmFtZVRvXyIsIkdldENsaWVudCIsIkNhc2VDbGllbnRSZWxhdGlvbkxpc3QiLCJHZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0IiwiQ2FzZUNvbnRhY3RzTGlzdCIsIkNoYXJnZUxpbWl0IiwiUGFpZFBhcnR5VGV4dCIsIlBheVN0eWxlIiwibGF3eWVyQ2hhcmdlTGlzdCIsImNvdW50IiwiaSIsImxlbiIsImxhd3llclJvbGUiLCJlbXBsb3llZU5hbWUiLCJjYXRlZ29yeU5hbWUiLCJsYXd5ZXJSb2xlVGV4dCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwiQ2FzZUNsaWVudFJlbGF0aW9uTGlzdERhdGEiLCJDbGFzcyIsIkRlcHRoIiwiSXNNYXhEZXB0aCIsIklzUmVjdXJzaXZlIiwiUGFyZW50SWQiLCJsZWdhbFR5cGUiLCJqIiwibGVuZyIsImxlZ2FsVHlwZVRleHQiLCJqc29uT2JqIiwia2V5dmFsIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwib3B0aW9ucyIsIkdldENhc2VJbmZvIiwiY2FjaGVQb29sIiwiZ2V0Q2FjaGVEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUSxFLFFBQ1JDLEksR0FBTztBQUNMQyxvQkFBYyxLQURUO0FBRUxDLHVCQUFpQixDQUFDO0FBQ2RDLGVBQU8sU0FETztBQUVkQyxnQkFBUTtBQUZNLE9BQUQsRUFJZjtBQUNFRCxlQUFPLFNBRFQ7QUFFRUMsZ0JBQVE7QUFGVixPQUplLEVBUWY7QUFDRUQsZUFBTyxTQURUO0FBRUVDLGdCQUFRO0FBRlYsT0FSZSxFQVlmO0FBQ0VELGVBQU8sU0FEVDtBQUVFQyxnQkFBUTtBQUZWLE9BWmUsRUFnQmY7QUFDRUQsZUFBTyxTQURUO0FBRUVDLGdCQUFRO0FBRlYsT0FoQmUsRUFvQmY7QUFDRUQsZUFBTyxTQURUO0FBRUVDLGdCQUFRO0FBRlYsT0FwQmUsQ0FGWjtBQTJCTDtBQUNBQyxnQkFBVSxFQTVCTDtBQTZCTEMsa0JBQVksRUE3QlA7QUE4QkxDLG9CQUFjLEtBOUJUO0FBK0JMO0FBQ0FDLGNBQVEsRUFoQ0g7QUFpQ0xDLHNCQUFnQixLQWpDWDtBQWtDTEMsb0JBQWMsRUFsQ1Q7QUFtQ0w7QUFDQUMsd0JBQWtCLEVBcENiO0FBcUNMO0FBQ0FDLHdCQUFrQixFQXRDYjtBQXVDTDtBQUNBQywrQkFBeUIsRUF4Q3BCO0FBeUNMQyxpQ0FBMkIsS0F6Q3RCO0FBMENMO0FBQ0FDLCtCQUF5QixFQTNDcEI7QUE0Q0xDLHNCQUFnQixLQTVDWDtBQTZDTEMsaUNBQTJCO0FBN0N0QixLLFFBK0NQQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVU7QUFDUkMscUJBRFEsNkJBQ1U7QUFDaEIsWUFBSUMsUUFBUUMsaUJBQVo7QUFDQSxZQUFJQyxXQUFXRixN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QkFETztBQUVabkYsMEJBQU0wSDtBQUZNLG1CQUFkO0FBSUEsdUJBQUs5RCxNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFFS3dFLE8sRUFBUztBQUNmLFVBQUl6QyxTQUFTLEVBQWI7QUFDQSxXQUFLLElBQUlSLEdBQVQsSUFBZ0JpRCxPQUFoQixFQUF5QjtBQUN2QixZQUFJQyxTQUFTRCxRQUFRakQsR0FBUixDQUFiO0FBQ0FBLGNBQU1BLElBQUltRCxPQUFKLENBQVluRCxJQUFJLENBQUosQ0FBWixFQUFvQkEsSUFBSSxDQUFKLEVBQU9vRCxXQUFQLEVBQXBCLENBQU47QUFDQTVDLGVBQU9SLEdBQVAsSUFBY2tELE1BQWQ7QUFDRDtBQUNELGFBQU8xQyxNQUFQO0FBQ0Q7Ozs7QUFDRDtpQ0FDYTtBQUNYO0FBQ0FoRSxTQUFHdUQsVUFBSCxDQUFjO0FBQ1pDLGFBQUssd0JBRE87QUFFWm5GLGNBQU07QUFGTSxPQUFkO0FBSUQ7OzsyQkFDTXdJLE8sRUFBUztBQUNkLFVBQUlBLFFBQVFuRCxFQUFaLEVBQWdCO0FBQ2QsYUFBS29ELFdBQUwsQ0FBaUJELFFBQVFuRCxFQUF6QjtBQUNBLGFBQUtJLGlCQUFMLENBQXVCK0MsUUFBUW5ELEVBQS9CO0FBQ0Q7QUFDRCxXQUFLcUQsU0FBTDtBQUNEOzs7a0NBQ2FySSxRLEVBQVU7QUFDdEIsV0FBS2tHLFNBQUwsQ0FBZWxHLFFBQWY7QUFDQSxXQUFLdUQsTUFBTDtBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLK0UsWUFBTDtBQUNEOzs7O0VBMWZtQ0MsZUFBS0MsSTs7a0JBQXRCL0ksUSIsImZpbGUiOiJyZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBwcm9wcyA9IHt9O1xuICAgIGRhdGEgPSB7XG4gICAgICBpc05vQ2FzZURhdGE6IGZhbHNlLFxuICAgICAgc3RhZ2VJZGVudENvbG9yOiBbe1xuICAgICAgICAgIGNvbG9yOiAnIzMzM2NjYycsXG4gICAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogJyM5MTU3RkEnLFxuICAgICAgICAgIGlzU2hvdzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgICAgaXNTaG93OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6ICcjMDA5ZGZmJyxcbiAgICAgICAgICBpc1Nob3c6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogJyNGRkNCNDcnLFxuICAgICAgICAgIGlzU2hvdzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOiAnI0ZGOTkwMCcsXG4gICAgICAgICAgaXNTaG93OiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgLy/lrqLmiLdJRFxuICAgICAgY2xpZW50SWQ6IFwiXCIsXG4gICAgICBjbGllbnREYXRhOiB7fSxcbiAgICAgIGlzQ2xpZW50RGF0YTogZmFsc2UsXG4gICAgICAvL+ahiOS7tuS/oeaBr1xuICAgICAgY2FzZUlkOiAnJyxcbiAgICAgIGlzQ2FzZUluZm9EYXRhOiBmYWxzZSxcbiAgICAgIGNhc2VJbmZvRGF0YToge30sXG4gICAgICAvLyDlhrLnqoHkv6Hmga9cbiAgICAgIGNvbmZsaWN0SW5mb0RhdGE6IFtdLFxuICAgICAgLy/lrqLmiLfmlrnmnKzmoYjogZTns7vkurpcbiAgICAgIGNsaWVudExpbmtlckRhdGE6IFtdLFxuICAgICAgLy/moYjku7blvovluIjkv6Hmga9cbiAgICAgIGNhc2VMYXllckxpbmtlckxpc3REYXRhOiB7fSxcbiAgICAgIGlzQ2FzZUxheWVyTGlua2VyTGlzdERhdGE6IGZhbHNlLFxuICAgICAgLy/lvovluIjotLnnlKjkv6Hmga9cbiAgICAgIGNhc2VMYXllckNoYXJnZUluZm9EYXRhOiB7fSxcbiAgICAgIGlzU2hvd05leHRJY29uOiBmYWxzZSxcbiAgICAgIGlzQ2FzZUxheWVyQ2hhcmdlSW5mb0RhdGE6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN1YkNhc2VJbmZvRGF0YSgpIHtcbiAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICBpZihwcmV2UGFnZS5yb3V0ZT09J3BhZ2VzL21vZHVsZXMvbXlSZWdpc3Rlci9teVJlZ2lzdGVyTGlzdCd8fHByZXZQYWdlLnJvdXRlPT0ncGFnZXMvbW9kdWxlcy9jYXNlTWFuYWdlbWVudC9jYXNlTWFuYWdlbWVudCcpe1xuICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKCk7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB3eC5yZWRpcmVjdFRvKHsgdXJsOiAnLi9teVJlZ2lzdGVyTGlzdCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfSxcbiAgICAgIC8v6Lez6L2s6Iez5b2V5YWl5b6L5biI6LS555So5L+h5oGv6aG16Z2iXG4gICAgICB0b0xhd3llckNoYXJnZUluZm8oKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vY2FzZUNoYXJnZUFuZENvbnRyYWN0L2xhd3llckNoYXJnZUluZm8/aWQ9JyArIHRoaXMuY2FzZUlkXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8vIOahiOS7tuW+i+W4iOS/oeaBr+mhtemdolxuICAgICAgdG9DYXNlTGF3eWVyTGlua2VyKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL2Nhc2VMYXd5ZXJMaW5rZXIvY2FzZUxhd3llckxpbmtlckxpc3Q/aWQ9JyArIHRoaXMuY2FzZUlkXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8v6Lez6L2s6Iez5a6i5oi35pa55pys5qGI6IGU57O75Lq65Yib5bu66aG16Z2iXG4gICAgICB0b0NyZWF0ZUNsaWVudENhc2VMaW5rZXIoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vY2xpZW50TGlua2VyL2NsaWVudENhc2VMaW5rZXJDaG9zZW4/aWQ9JyArIHRoaXMuY2xpZW50SWRcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy/ot7Povazoh7PliJvlu7rliKnnm4rlhrLnqoHpobXpnaJcbiAgICAgIHRvQ3JlYXRlQ29uZmxpY3QoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vY29uZmxpY3QvY3JlYXRlQ29uZmxpY3QnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8v6Lez6L2s6Iez5Yib5bu65qGI5Lu25Z+65pys5L+h5oGv6aG16Z2iXG4gICAgICB0b0NyZWF0ZUNhc2VCYXNlSW5mbygpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9jYXNlSW5mby9jcmVhdGVDYXNlSW5mbz9DbGllbnROYW1lPScgKyB0aGlzLmNsaWVudERhdGEubmFtZSArICcmQ2xpZW50SWQ9JyArIHRoaXMuY2xpZW50SWQsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8v6Lez6L2s5Yiw5a6i5oi36K+m5oOF6aG16Z2iXG4gICAgICB0b0NsaWVudERldGFpbCgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vbXljbGllbnQvY2xpZW50RGV0YWlsL2l0ZW1EZXRhaWwvY2xpZW50QmFzZUluZm8/aWQ9JyArIHRoaXMuY2xpZW50SWRcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDliKDpmaTlrqLmiLfkv6Hmga9cbiAgICAgIGRlbGV0ZUNsaWVudEluZm8oKSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICBjb250ZW50OiAn5piv5ZCm5Yig6Zmk5bey6YCJ5a6i5oi35L+h5oGvJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzAwMDAwMCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IFwiXCI7XG4gICAgICAgICAgICAgIHRoaXMuY2xpZW50RGF0YSA9IHt9O1xuICAgICAgICAgICAgICB2YXIgY3JlYXRlX2Nhc2VpbmZvX2RhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NBU0VJTkZPX0RBVEEnKTtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNyZWF0ZV9jYXNlaW5mb19kYXRhKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVfY2FzZWluZm9fZGF0YS5DbGllbnRJZCA9ICcnO1xuICAgICAgICAgICAgICAgIGNyZWF0ZV9jYXNlaW5mb19kYXRhLkNsaWVudE5hbWUgPSAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NBU0VJTkZPX0RBVEEnLCBjcmVhdGVfY2FzZWluZm9fZGF0YSlcbiAgICAgICAgICAgICAgdmFyIGNyZWF0ZV9jbGllbnRpbmZvX2RhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NMSUVOVElORk9fREFUQScpO1xuICAgICAgICAgICAgICBjcmVhdGVfY2xpZW50aW5mb19kYXRhID0ge307XG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ0xJRU5USU5GT19EQVRBJywgY3JlYXRlX2NsaWVudGluZm9fZGF0YSk7XG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0b0NsaWVudExpc3QoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL215Y2xpZW50L2RpcmVjdG9yeS9kaXJlY3RvcnknXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHRvQ3JlYXRlQ2xpZW50KCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9teWNsaWVudC9jcmVhdGVDbGllbnQvY3JlYXRlQ2xpZW50QmFzZUluZm8nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZXZlbnRzID0ge307XG4gICAgd2F0Y2ggPSB7XG4gICAgICBjbGllbnREYXRhKGRhdGEsIG9sZERhdGEpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAhPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLmNhc2VJbmZvRGF0YSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdmFyIGNyZWF0ZV9jYXNlaW5mb19kYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DQVNFSU5GT19EQVRBJyk7XG4gICAgICAgICAgY3JlYXRlX2Nhc2VpbmZvX2RhdGEuQ2xpZW50SWQgPSB0aGlzLmNsaWVudElkO1xuICAgICAgICAgIGNyZWF0ZV9jYXNlaW5mb19kYXRhLkNsaWVudE5hbWUgPSB0aGlzLmNsaWVudERhdGEubmFtZTtcbiAgICAgICAgICB0aGlzLkNyZWF0ZU9yVXBkYXRlQ2FzZUdlbmVyYWxJbmZvKGNyZWF0ZV9jYXNlaW5mb19kYXRhKTtcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NBU0VJTkZPX0RBVEEnLCBjcmVhdGVfY2FzZWluZm9fZGF0YSlcbiAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLmNhc2VJbmZvRGF0YSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICB0aGlzLnN0YWdlSWRlbnRDb2xvclsxXS5pc1Nob3cgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbXB1dGVkID0ge307XG4gICAgLy/moYjku7bln7rmnKzkv6Hmga/mj5DkuqRcbiAgICBhc3luYyBDcmVhdGVPclVwZGF0ZUNhc2VHZW5lcmFsSW5mbyhkYXRhKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICB9KTtcbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9DcmVhdGVPclVwZGF0ZUNhc2VHZW5lcmFsSW5mbycsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAgZGF0YVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DQVNFSU5GT19EQVRBJywgZGF0YSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8v5Yib5bu657yT5a2Y5rGgXG4gICAgY2FjaGVQb29sKCkge1xuICAgICAgLy/lrqLmiLfkv6Hmga9cbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDUkVBVEVfQ0xJRU5USU5GT19EQVRBJyxcbiAgICAgICAgZGF0YToge31cbiAgICAgIH0pO1xuICAgICAgLy/moYjku7bkv6Hmga9cbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDUkVBVEVfQ0FTRUlORk9fREFUQScsXG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9KTtcbiAgICAgIC8v5Yip55uK5Yay56qBXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnQ1JFQVRFX0NPTkZMSUNUTElTVF9EQVRBJyxcbiAgICAgICAgZGF0YTogW11cbiAgICAgIH0pO1xuICAgICAgLy/lrqLmiLfmlrnmnKzmoYjogZTns7vkurpcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDUkVBVEVfQ0xJRU5UTElOS0VSTElTVF9EQVRBJyxcbiAgICAgICAgZGF0YTogW11cbiAgICAgIH0pO1xuICAgICAgLy/moYjku7blvovluIjkv6Hmga9cbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDUkVBVEVfQ0FTRUxBV1lFUkxJTktFUkxJU1RfREFUQScsXG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9KTtcbiAgICAgIC8v5qGI5Lu26LS555So5L+h5oGvXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnQ1JFQVRFX0xBV1lFUkNIQVJHRV9EQVRBJyxcbiAgICAgICAgZGF0YToge31cbiAgICAgIH0pO1xuICAgICAgLy/lkIjlkIzkuIrkvKBcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDUkVBVEVfQ09OVFJBQ1RfREFUQScsXG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy/ojrflj5bnvJPlrZhcbiAgICBnZXRDYWNoZURhdGEoKSB7XG4gICAgICAvL+iOt+WPlue8k+WtmOS4reWuouaIt+S/oeaBr1xuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ0NSRUFURV9DTElFTlRJTkZPX0RBVEEnLFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlcy5kYXRhKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50SWQgPSByZXMuZGF0YS5pZDtcbiAgICAgICAgICAgIC8vIHRoaXMuY2xpZW50SWQ9J0NMMjAxODAzMDAwNDUnO1xuICAgICAgICAgICAgdGhpcy5jbGllbnREYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnN0YWdlSWRlbnRDb2xvclsxXS5pc1Nob3cgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XG4gICAgICB9KVxuICAgICAgLy/ojrflj5bnvJPlrZjkuK3moYjku7bkv6Hmga9cbiAgICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDUkVBVEVfQ0FTRUlORk9fREFUQScsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVzLmRhdGEpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYXNlSW5mb0RhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuaXNDYXNlSW5mb0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYXNlSWQgPSByZXMuZGF0YS5JZDtcbiAgICAgICAgICAgIHRoaXMuaXNTaG93TmV4dEljb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGFnZUlkZW50Q29sb3JbMl0uaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VJZGVudENvbG9yWzNdLmlzU2hvdyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YWdlSWRlbnRDb2xvcls0XS5pc1Nob3cgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XG4gICAgICB9KVxuICAgICAgLy/ojrflj5bnvJPlrZjkuK3mnInlhrLnqoHkv6Hmga9cbiAgICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdDUkVBVEVfQ09ORkxJQ1RMSVNUX0RBVEEnLFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25mbGljdEluZm9EYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgfSlcbiAgICAgIC8v5a6i5oi35pa55pys5qGI6IGU57O75Lq6XG4gICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnQ1JFQVRFX0NMSUVOVExJTktFUkxJU1RfREFUQScsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmNsaWVudExpbmtlckRhdGEgPSByZXMuZGF0YVxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgIH0pXG4gICAgICAvL+iOt+WPluahiOS7tuW+i+W4iOS/oeaBr1xuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ0NSRUFURV9DQVNFTEFXWUVSTElOS0VSTElTVF9EQVRBJyxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXMuZGF0YSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VDaGFyZ2VMaXN0KHRoaXMuY2FzZUlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgfSlcbiAgICAgIC8v6I635Y+W5qGI5Lu26LS555So5L+h5oGvXG4gICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnQ1JFQVRFX0xBV1lFUkNIQVJHRV9EQVRBJyxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXMuZGF0YSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VJbmZvRGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5jYXNlTGF5ZXJDaGFyZ2VJbmZvRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5zdGFnZUlkZW50Q29sb3JbNV0uaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNDYXNlTGF5ZXJDaGFyZ2VJbmZvRGF0YSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgfSlcbiAgICB9XG4gICAgLy/ojrflj5blrqLmiLfkv6Hmga9cbiAgICBhc3luYyBHZXRDbGllbnQoaWQpIHtcbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50L0dldENsaWVudCcsXG4gICAgICAgICdwb3N0Jywge1xuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBpZDtcbiAgICAgICAgdGhpcy5jbGllbnREYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgdGhpcy5zdGFnZUlkZW50Q29sb3JbMV0uaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DTElFTlRJTkZPX0RBVEEnLCByZXNEYXRhLmRhdGEucmVzdWx0KTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy/ojrflj5bmoYjku7botLnnlKjmlbDmja5cbiAgICBhc3luYyBHZXRDYXNlSW5mb0RhdGEoKSB7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvR2V0Q2FzZUluZm8nLFxuICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICBJZDogdGhpcy5jYXNlSWRcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgdmFyIEdldENhc2VHZW5lcmFsSW5mbyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgIHRoaXMuY2FzZUxheWVyQ2hhcmdlSW5mb0RhdGEuY2hhcmdlTGltaXQgPSBHZXRDYXNlR2VuZXJhbEluZm8uY2hhcmdlTGltaXQ7XG4gICAgICAgIHRoaXMuY2FzZUxheWVyQ2hhcmdlSW5mb0RhdGEucGFpZFBhcnR5VGV4dCA9IEdldENhc2VHZW5lcmFsSW5mby5wYWlkUGFydHlUZXh0O1xuICAgICAgICAgaWYoR2V0Q2FzZUdlbmVyYWxJbmZvLnBheVN0eWxlKSB7XG4gICAgICAgICAgdmFyIHBheVN0eWxlID0gR2V0Q2FzZUdlbmVyYWxJbmZvLnBheVN0eWxlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICB2YXIgcGF5U3R5bGVUZXh0ID0gW11cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXlTdHlsZSkge1xuICAgICAgICAgICAgc3dpdGNoIChwYXlTdHlsZVtpbmRleF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgcGF5U3R5bGVUZXh0LnB1c2goJ+ato+W4uOaUtui0uScpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIHBheVN0eWxlVGV4dC5wdXNoKCfpo47pmanmlLbotLknKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICBwYXlTdHlsZVRleHQucHVzaCgn5bCP5pe25pS26LS5JylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNhc2VMYXllckNoYXJnZUluZm9EYXRhLnBheVN0eWxlVGV4dCA9IHBheVN0eWxlVGV4dC5qb2luKCcrJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ2FzZUxheWVyQ2hhcmdlSW5mb0RhdGEgPSB0cnVlO1xuXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvL+iOt+WPluahiOS7tuS/oeaBr1xuICAgIGFzeW5jIEdldENhc2VJbmZvKGlkKSB7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvR2V0Q2FzZUluZm8nLFxuICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICBJZDogaWRcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDAgJiYgT2JqZWN0LmtleXMocmVzRGF0YS5kYXRhLnJlc3VsdCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHZhciBhcnkgPSByZXNEYXRhLmRhdGEucmVzdWx0XG4gICAgICAgIHZhciBHZXRDYXNlR2VuZXJhbEluZm8gPSB0aGlzLm5hbWVUb18oYXJ5KTtcbiAgICAgICAgdGhpcy5jYXNlSW5mb0RhdGEgPSBHZXRDYXNlR2VuZXJhbEluZm87XG4gICAgICAgIC8vIHRoaXMuY2FzZUluZm9TdG9yYWdlKEdldENhc2VHZW5lcmFsSW5mbyk7XG4gICAgICAgIHRoaXMuR2V0Q2xpZW50KEdldENhc2VHZW5lcmFsSW5mby5DbGllbnRJZCk7XG4gICAgICAgIHRoaXMuaXNDYXNlSW5mb0RhdGEgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzU2hvd05leHRJY29uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXNlSWQgPSBHZXRDYXNlR2VuZXJhbEluZm8uSWQ7XG4gICAgICAgIHRoaXMuc3RhZ2VJZGVudENvbG9yWzFdLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhZ2VJZGVudENvbG9yWzJdLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhZ2VJZGVudENvbG9yWzNdLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhZ2VJZGVudENvbG9yWzRdLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIC8v5Yip55uK5Yay56qBXG4gICAgICAgIHRoaXMuY29uZmxpY3RJbmZvRGF0YSA9IEdldENhc2VHZW5lcmFsSW5mby5DYXNlQ2xpZW50UmVsYXRpb25MaXN0O1xuICAgICAgICB0aGlzLkdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoR2V0Q2FzZUdlbmVyYWxJbmZvLkNhc2VDbGllbnRSZWxhdGlvbkxpc3QpO1xuICAgICAgICAvL+WuouaIt+aWueacrOahiOiBlOezu+S6ulxuICAgICAgICB0aGlzLmNsaWVudExpbmtlckRhdGEgPSBHZXRDYXNlR2VuZXJhbEluZm8uQ2FzZUNvbnRhY3RzTGlzdDtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gR2V0Q2FzZUdlbmVyYWxJbmZvLkNhc2VDb250YWN0c0xpc3QpIHtcbiAgICAgICAgICBHZXRDYXNlR2VuZXJhbEluZm8uQ2FzZUNvbnRhY3RzTGlzdFtpbmRleF0gPSBHZXRDYXNlR2VuZXJhbEluZm8uQ2FzZUNvbnRhY3RzTGlzdFtpbmRleF0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflj5blvovluIjotLnnlKjkv6Hmga9cbiAgICAgICAgdGhpcy5jYXNlTGF5ZXJDaGFyZ2VJbmZvRGF0YS5jaGFyZ2VMaW1pdCA9IEdldENhc2VHZW5lcmFsSW5mby5DaGFyZ2VMaW1pdDtcbiAgICAgICAgdGhpcy5jYXNlTGF5ZXJDaGFyZ2VJbmZvRGF0YS5wYWlkUGFydHlUZXh0ID0gR2V0Q2FzZUdlbmVyYWxJbmZvLlBhaWRQYXJ0eVRleHQ7XG4gICAgICAgIGlmKEdldENhc2VHZW5lcmFsSW5mby5QYXlTdHlsZSl7XG4gICAgICAgICAgdmFyIHBheVN0eWxlID0gR2V0Q2FzZUdlbmVyYWxJbmZvLlBheVN0eWxlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICB2YXIgcGF5U3R5bGVUZXh0ID0gW11cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXlTdHlsZSkge1xuICAgICAgICAgICAgc3dpdGNoIChwYXlTdHlsZVtpbmRleF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgcGF5U3R5bGVUZXh0LnB1c2goJ+ato+W4uOaUtui0uScpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIHBheVN0eWxlVGV4dC5wdXNoKCfpo47pmanmlLbotLknKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICBwYXlTdHlsZVRleHQucHVzaCgn5bCP5pe25pS26LS5JylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYXNlTGF5ZXJDaGFyZ2VJbmZvRGF0YS5wYXlTdHlsZVRleHQgPSBwYXlTdHlsZVRleHQuam9pbignKycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Nhc2VMYXllckNoYXJnZUluZm9EYXRhID0gdHJ1ZTtcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiAnQ1JFQVRFX0NBU0VJTkZPX0RBVEEnLFxuICAgICAgICAgIGRhdGE6IEdldENhc2VHZW5lcmFsSW5mb1xuICAgICAgICB9KTtcbiAgICAgICAgLy9cbiAgICAgIH1cbiAgICB9XG4gICAgLy/ojrflj5blt7LmnInmoYjku7blvovluIjkv6Hmga9cbiAgICBhc3luYyBHZXRDYXNlQ2hhcmdlTGlzdChpZCkge1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldENhc2VDaGFyZ2VMaXN0JyxcbiAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDAgJiYgcmVzRGF0YS5kYXRhLnJlc3VsdC5sYXd5ZXJDaGFyZ2VMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLnN0YWdlSWRlbnRDb2xvcls1XS5pc1Nob3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2FzZUxheWVyTGlua2VyTGlzdERhdGEgPSB0cnVlO1xuICAgICAgICB2YXIgR2V0Q2FzZUNoYXJnZUxpc3QgPSByZXNEYXRhLmRhdGEucmVzdWx0Lmxhd3llckNoYXJnZUxpc3Q7XG4gICAgICAgIHZhciBjYXNlTGF5ZXJMaW5rZXJMaXN0RGF0YSA9IHt9O1xuICAgICAgICBjYXNlTGF5ZXJMaW5rZXJMaXN0RGF0YS5jb3VudCA9IEdldENhc2VDaGFyZ2VMaXN0Lmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IEdldENhc2VDaGFyZ2VMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKEdldENhc2VDaGFyZ2VMaXN0W2ldLmxhd3llclJvbGUgPT0gJ00nKSB7XG4gICAgICAgICAgICBjYXNlTGF5ZXJMaW5rZXJMaXN0RGF0YS5uYW1lID0gR2V0Q2FzZUNoYXJnZUxpc3RbaV0uZW1wbG95ZWVOYW1lXG4gICAgICAgICAgICBjYXNlTGF5ZXJMaW5rZXJMaXN0RGF0YS5jYXRlZ29yeU5hbWUgPSBHZXRDYXNlQ2hhcmdlTGlzdFtpXS5sYXd5ZXJSb2xlVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhc2VMYXllckxpbmtlckxpc3REYXRhID0gY2FzZUxheWVyTGlua2VyTGlzdERhdGE7XG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ0FTRUxBV1lFUkxJTktFUkxJU1RfREFUQScsIGNhc2VMYXllckxpbmtlckxpc3REYXRhKVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICAgIHNjcm9sbFRvcDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICAvL+iOt+WPluiBjOS9jVxuICAgIGFzeW5jIEdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoQ2FzZUNsaWVudFJlbGF0aW9uTGlzdERhdGEpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBDbGFzczogXCJDTENEVFwiLFxuICAgICAgICBEZXB0aDogMCxcbiAgICAgICAgSXNNYXhEZXB0aDogdHJ1ZSxcbiAgICAgICAgSXNSZWN1cnNpdmU6IGZhbHNlLFxuICAgICAgICBQYXJlbnRJZDogXCJcIixcbiAgICAgIH1cbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQnLFxuICAgICAgICAncG9zdCcsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBDYXNlQ2xpZW50UmVsYXRpb25MaXN0RGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGlmIChDYXNlQ2xpZW50UmVsYXRpb25MaXN0RGF0YVtpXS5sZWdhbFR5cGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBsZW5nID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGg7IGogPCBsZW5nOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKENhc2VDbGllbnRSZWxhdGlvbkxpc3REYXRhW2ldLmxlZ2FsVHlwZSA9PSByZXNEYXRhLmRhdGEucmVzdWx0W2pdLmlkKSB7XG4gICAgICAgICAgICAgICAgQ2FzZUNsaWVudFJlbGF0aW9uTGlzdERhdGFbaV0ubGVnYWxUeXBlVGV4dCA9IHJlc0RhdGEuZGF0YS5yZXN1bHRbal0ubmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogJ0NSRUFURV9DT05GTElDVExJU1RfREFUQScsXG4gICAgICAgICAgZGF0YTogQ2FzZUNsaWVudFJlbGF0aW9uTGlzdERhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfVxuICAgIG5hbWVUb18oanNvbk9iaikge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIGpzb25PYmopIHtcbiAgICAgICAgdmFyIGtleXZhbCA9IGpzb25PYmpba2V5XTtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2Uoa2V5WzBdLCBrZXlbMF0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgIHJlc3VsdFtrZXldID0ga2V5dmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIC8v5rKh5pyJ5pWw5o2u5pe2XG4gICAgbm9DYXNlRGF0YSgpIHtcbiAgICAgIC8v5a6i5oi35L+h5oGvXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnQ1JFQVRFX0NMSUVOVElORk9fREFUQScsXG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9KTtcbiAgICB9XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICAgIHRoaXMuR2V0Q2FzZUluZm8ob3B0aW9ucy5pZCk7XG4gICAgICAgIHRoaXMuR2V0Q2FzZUNoYXJnZUxpc3Qob3B0aW9ucy5pZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNhY2hlUG9vbCgpO1xuICAgIH07XG4gICAgaXNEYXRhUmVmcmVzaChjbGllbnRJZCkge1xuICAgICAgdGhpcy5HZXRDbGllbnQoY2xpZW50SWQpXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICB0aGlzLmdldENhY2hlRGF0YSgpO1xuICAgIH07XG4gIH1cbiJdfQ==