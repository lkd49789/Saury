'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseLawyerLinkerList = function (_wepy$page) {
  _inherits(caseLawyerLinkerList, _wepy$page);

  function caseLawyerLinkerList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, caseLawyerLinkerList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseLawyerLinkerList.__proto__ || Object.getPrototypeOf(caseLawyerLinkerList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ""
    }, _this.data = {
      addImage: '../../../../images/upload-add.png',
      applicant: {},
      caseId: '',
      dutiesData: [],
      lawyerListData: [],
      isShowChooseLawyer: false,
      showSubBtn: false,
      currentIndex: 0,
      submitData: [],
      inputValue: ''
    }, _this.components = {}, _this.methods = {
      submitData: function submitData() {
        // addLawyerData
        var subAry = [];
        var caseLawyerLinkerList = wx.getStorageSync('CREATE_CASELAWYERLINKERLIST_DATA');
        for (var dutiesData_index in this.dutiesData) {
          for (var addLawyerData_index in this.dutiesData[dutiesData_index].addLawyerData) {
            var subData = {
              caseId: this.caseId,
              lawyerRole: this.dutiesData[dutiesData_index].id,
              userId: ''
            };
            if (this.dutiesData[dutiesData_index].addLawyerData[addLawyerData_index].length !== 0) {
              subData.userId = +this.dutiesData[dutiesData_index].addLawyerData[addLawyerData_index].userId;
              subAry.push(subData);
              if (this.dutiesData[dutiesData_index].id == 'M') {
                caseLawyerLinkerList.name = this.dutiesData[dutiesData_index].addLawyerData[addLawyerData_index].name;
                caseLawyerLinkerList.categoryName = '负责人';
              }
            }
          }
        }
        var isPrincipal = subAry.some(function (item) {
          return item.lawyerRole == 'M';
        });
        if (isPrincipal) {
          caseLawyerLinkerList.count = subAry.length;
          var storageData = caseLawyerLinkerList;
          this.CreateOrUpdateCaseLawyer(subAry, storageData);
        } else {
          wx.showToast({
            title: '负责人不能为空！', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: false, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
        }
        this.$apply();
      },
      blur: function blur(e) {
        if (e.detail.value == '') {
          this.GetMyCommonlyUsedEmployees();
        }
      },
      searchData: function searchData(e) {
        this.inputValue = e.detail.value;
        this.$apply();
      },
      deleteItem: function deleteItem(dutiesData_index, userId) {
        for (var index in this.dutiesData[dutiesData_index].addLawyerData) {
          if (this.dutiesData[dutiesData_index].addLawyerData[index].userId == userId) {
            this.dutiesData[dutiesData_index].addLawyerData.splice(index, 1);
          }
          // if(this.dutiesData[dutiesData_index].id=='C'){
          //   this.dutiesData[dutiesData_index].isShowAddImage=true;
          // }
        }
        this.$apply();
      },
      addLawyerData: function addLawyerData(id, name, avatar, categoryName) {
        var _dutiesData$currentIn;

        var showData = [{
          avatar: avatar,
          name: name,
          userId: id,
          categoryName: categoryName
        }];
        var showDatas = (0, _api.myObjDistinct)(showData, this.dutiesData[this.currentIndex].addLawyerData, 'userId');
        (_dutiesData$currentIn = this.dutiesData[this.currentIndex].addLawyerData).push.apply(_dutiesData$currentIn, _toConsumableArray(showDatas));
        this.isShowChooseLawyer = false;
        this.$apply();
      },
      isMask: function isMask(e) {
        if (e.currentTarget.id == 'Mask') {
          this.isShowChooseLawyer = false;
        }
        this.$apply();
      },
      isShowChooseLawyer: function isShowChooseLawyer(index, id) {
        this.currentIndex = index;
        this.isShowChooseLawyer = true;
        this.$apply();
      }
    }, _this.events = {}, _this.watch = {
      inputValue: function inputValue(value) {
        if (value == '') {
          this.GetMyCommonlyUsedEmployees();
        } else {
          this.GetEmployees(value);
        }
      },
      dutiesData: function dutiesData(data) {
        for (var index in data) {
          switch (data[index].id) {
            case 'M':
              if (data[index].addLawyerData.length > 0) {
                this.dutiesData[index].isShowAddImage = false;
              } else if (data[index].addLawyerData.length == 0) {
                this.dutiesData[index].isShowAddImage = true;
              }
              break;
            case 'C':
              if (data[index].addLawyerData.length > 0) {
                this.dutiesData[index].isShowAddImage = false;
              } else if (data[index].addLawyerData.length == 0) {
                this.dutiesData[index].isShowAddImage = true;
              }
              break;
            default:
              break;
          }
        }
        this.$apply();
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(caseLawyerLinkerList, [{
    key: 'CreateOrUpdateCaseLawyer',

    //提交选中律师
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(subData, storageData) {
        var resData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({
                  title: 'Loading...', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {
                    wx.setStorageSync('CREATE_CASELAWYERLINKERLIST_DATA', storageData);
                    wx.setStorage({
                      key: 'CREATE_CASELAWYERLINKERLIST_DATA',
                      data: storageData,
                      success: function success() {
                        wx.navigateBack({
                          delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                      }
                    });
                  }
                });
                _context.next = 3;
                return _ajax2.default.getData('/api/services/web/caseLawyer/CreateOrUpdateCaseLawyer', 'post', subData);

              case 3:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  console.log('提交成功');
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function CreateOrUpdateCaseLawyer(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return CreateOrUpdateCaseLawyer;
    }()
    //获取已有案件联系人

  }, {
    key: 'GetCaseChargeList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var resData, GetCaseChargeList, i, len, lawyerData, http, j, leng;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeList', 'post', {
                  id: this.caseId
                });

              case 2:
                resData = _context2.sent;

                if (!(resData.statusCode == 200 && resData.data.result.length !== 0)) {
                  _context2.next = 18;
                  break;
                }

                GetCaseChargeList = resData.data.result.lawyerChargeList;
                i = 0, len = GetCaseChargeList.length;

              case 6:
                if (!(i < len)) {
                  _context2.next = 17;
                  break;
                }

                lawyerData = {
                  name: GetCaseChargeList[i].employeeName,
                  userId: GetCaseChargeList[i].userId,
                  avatar: ''
                };
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + GetCaseChargeList[i].userId;
                _context2.next = 11;
                return _ajax2.default.getAavatar(http);

              case 11:
                lawyerData.avatar = _context2.sent;

                for (j = 0, leng = this.dutiesData.length; j < leng; j++) {
                  if (GetCaseChargeList[i].lawyerRole == this.dutiesData[j].id) {
                    this.dutiesData[j].addLawyerData.push(lawyerData);
                  }
                }
                if (i == len - 1) {
                  this.showSubBtn = true;
                  wx.hideLoading();
                }

              case 14:
                i++;
                _context2.next = 6;
                break;

              case 17:
                this.$apply();

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetCaseChargeList() {
        return _ref3.apply(this, arguments);
      }

      return GetCaseChargeList;
    }()
    //获取职责

  }, {
    key: 'GetGeneralCodeComboOutput',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data, resData, GetCaseChargeList, applicant, userId, index, item;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {
                  class: "CACBT",
                  depth: 0,
                  isMaxDepth: true,
                  isRecursive: false
                };
                _context3.next = 3;
                return _ajax2.default.getData('/api/services/web/common/GetGeneralCodeComboOutput', 'post', data);

              case 3:
                resData = _context3.sent;
                _context3.next = 6;
                return _ajax2.default.getData('/api/services/web/case/GetCaseChargeList', 'post', {
                  id: this.caseId
                });

              case 6:
                GetCaseChargeList = _context3.sent;

                if (resData.statusCode == 200 && GetCaseChargeList.statusCode == 200) {
                  this.dutiesData = resData.data.result;
                  applicant = this.$parent.global.userInfo;
                  userId = applicant.id.toString();

                  for (index in this.dutiesData) {
                    this.dutiesData[index].addLawyerData = [];
                    this.dutiesData[index].isShowAddImage = true;
                    if (this.dutiesData[index].id == 'C') {
                      this.dutiesData[index].isShowAddImage = false;
                      if (GetCaseChargeList.data.result.lawyerChargeList.length == 0) {
                        this.showSubBtn = true;
                        item = {
                          avatar: applicant.userAvatar,
                          name: applicant.name,
                          userId: userId
                        };

                        this.dutiesData[index].addLawyerData.push(item);
                        //  this.submitData.push({
                        //   caseId: this.caseId,
                        //   lawyerRole: 'C',
                        //   userId: userId
                        // })
                      }
                    }
                    if (this.dutiesData[index].id == 'M') {
                      this.dutiesData[index].warningText = '只能选择一个人';
                    }
                  }
                }
                this.$apply();

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetGeneralCodeComboOutput() {
        return _ref4.apply(this, arguments);
      }

      return GetGeneralCodeComboOutput;
    }()
    //获取相关律师

  }, {
    key: 'GetMyCommonlyUsedEmployees',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var resData, lawyerListData, index, http;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _ajax2.default.getData('/api/services/web/common/GetMyCommonlyUsedEmployees', 'post', {
                  id: 6
                });

              case 2:
                resData = _context4.sent;

                if (!(resData.statusCode == 200)) {
                  _context4.next = 16;
                  break;
                }

                lawyerListData = resData.data.result;
                _context4.t0 = regeneratorRuntime.keys(lawyerListData);

              case 6:
                if ((_context4.t1 = _context4.t0()).done) {
                  _context4.next = 14;
                  break;
                }

                index = _context4.t1.value;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + lawyerListData[index].id;
                _context4.next = 11;
                return _ajax2.default.getAavatar(http);

              case 11:
                lawyerListData[index].avatar = _context4.sent;
                _context4.next = 6;
                break;

              case 14:
                this.lawyerListData = lawyerListData;
                this.$apply();

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GetMyCommonlyUsedEmployees() {
        return _ref5.apply(this, arguments);
      }

      return GetMyCommonlyUsedEmployees;
    }()
    //搜索律师

  }, {
    key: 'GetEmployees',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(filter) {
        var data, resData, lawyerListData, index, http;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = {
                  caseId: null,
                  category: null,
                  filter: filter,
                  name: null,
                  organizationUnitId: null,
                  pageNumber: 1,
                  pageSize: 10
                };
                _context5.next = 3;
                return _ajax2.default.getData('/api/services/web/common/GetEmployees', 'post', data);

              case 3:
                resData = _context5.sent;

                if (!(resData.statusCode == 200)) {
                  _context5.next = 17;
                  break;
                }

                lawyerListData = resData.data.result.items;
                _context5.t0 = regeneratorRuntime.keys(lawyerListData);

              case 7:
                if ((_context5.t1 = _context5.t0()).done) {
                  _context5.next = 15;
                  break;
                }

                index = _context5.t1.value;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + lawyerListData[index].id;
                _context5.next = 12;
                return _ajax2.default.getAavatar(http);

              case 12:
                lawyerListData[index].avatar = _context5.sent;
                _context5.next = 7;
                break;

              case 15:
                this.lawyerListData = lawyerListData;
                this.$apply();

              case 17:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function GetEmployees(_x3) {
        return _ref6.apply(this, arguments);
      }

      return GetEmployees;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.caseId = options.id;
      // this.caseId = '2B709BCC-2760-E911-AC1B-B0D9BF31DAD7';
      this.applicant = this.$parent.global.userInfo;
      this.GetGeneralCodeComboOutput();
      this.GetMyCommonlyUsedEmployees();
      this.GetCaseChargeList();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return caseLawyerLinkerList;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(caseLawyerLinkerList , 'pages/modules/myRegister/caseLawyerLinker/caseLawyerLinkerList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VMYXd5ZXJMaW5rZXJMaXN0LmpzIl0sIm5hbWVzIjpbImNhc2VMYXd5ZXJMaW5rZXJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhZGRJbWFnZSIsImFwcGxpY2FudCIsImNhc2VJZCIsImR1dGllc0RhdGEiLCJsYXd5ZXJMaXN0RGF0YSIsImlzU2hvd0Nob29zZUxhd3llciIsInNob3dTdWJCdG4iLCJjdXJyZW50SW5kZXgiLCJzdWJtaXREYXRhIiwiaW5wdXRWYWx1ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwic3ViQXJ5Iiwid3giLCJnZXRTdG9yYWdlU3luYyIsImR1dGllc0RhdGFfaW5kZXgiLCJhZGRMYXd5ZXJEYXRhX2luZGV4IiwiYWRkTGF3eWVyRGF0YSIsInN1YkRhdGEiLCJsYXd5ZXJSb2xlIiwiaWQiLCJ1c2VySWQiLCJsZW5ndGgiLCJwdXNoIiwibmFtZSIsImNhdGVnb3J5TmFtZSIsImlzUHJpbmNpcGFsIiwic29tZSIsIml0ZW0iLCJjb3VudCIsInN0b3JhZ2VEYXRhIiwiQ3JlYXRlT3JVcGRhdGVDYXNlTGF3eWVyIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsIiRhcHBseSIsImJsdXIiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJHZXRNeUNvbW1vbmx5VXNlZEVtcGxveWVlcyIsInNlYXJjaERhdGEiLCJkZWxldGVJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJhdmF0YXIiLCJzaG93RGF0YSIsInNob3dEYXRhcyIsImlzTWFzayIsImN1cnJlbnRUYXJnZXQiLCJldmVudHMiLCJ3YXRjaCIsIkdldEVtcGxveWVlcyIsImlzU2hvd0FkZEltYWdlIiwiY29tcHV0ZWQiLCJzaG93TG9hZGluZyIsInNldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZSIsImtleSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJHZXRDYXNlQ2hhcmdlTGlzdCIsImxhd3llckNoYXJnZUxpc3QiLCJpIiwibGVuIiwibGF3eWVyRGF0YSIsImVtcGxveWVlTmFtZSIsImh0dHAiLCJnZXRBYXZhdGFyIiwiaiIsImxlbmciLCJoaWRlTG9hZGluZyIsImNsYXNzIiwiZGVwdGgiLCJpc01heERlcHRoIiwiaXNSZWN1cnNpdmUiLCIkcGFyZW50IiwiZ2xvYmFsIiwidXNlckluZm8iLCJ0b1N0cmluZyIsInVzZXJBdmF0YXIiLCJ3YXJuaW5nVGV4dCIsImZpbHRlciIsImNhdGVnb3J5Iiwib3JnYW5pemF0aW9uVW5pdElkIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwiaXRlbXMiLCJvcHRpb25zIiwiR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxvQjs7Ozs7Ozs7Ozs7Ozs7a05BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLG1DQURMO0FBRUxDLGlCQUFXLEVBRk47QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGtCQUFZLEVBSlA7QUFLTEMsc0JBQWdCLEVBTFg7QUFNTEMsMEJBQW9CLEtBTmY7QUFPTEMsa0JBQVksS0FQUDtBQVFMQyxvQkFBYyxDQVJUO0FBU0xDLGtCQUFZLEVBVFA7QUFVTEMsa0JBQVk7QUFWUCxLLFFBWVBDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNSSCxnQkFEUSx3QkFDSztBQUNYO0FBQ0EsWUFBSUksU0FBUyxFQUFiO0FBQ0EsWUFBSWhCLHVCQUF1QmlCLEdBQUdDLGNBQUgsQ0FBa0Isa0NBQWxCLENBQTNCO0FBQ0EsYUFBSyxJQUFJQyxnQkFBVCxJQUE2QixLQUFLWixVQUFsQyxFQUE4QztBQUM1QyxlQUFLLElBQUlhLG1CQUFULElBQWdD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ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gIGltcG9ydCB7XG4gICAgbXlPYmpEaXN0aW5jdFxuICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhc2VMYXd5ZXJMaW5rZXJMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlwiLFxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIGFkZEltYWdlOiAnLi4vLi4vLi4vLi4vaW1hZ2VzL3VwbG9hZC1hZGQucG5nJyxcbiAgICAgIGFwcGxpY2FudDoge30sXG4gICAgICBjYXNlSWQ6ICcnLFxuICAgICAgZHV0aWVzRGF0YTogW10sXG4gICAgICBsYXd5ZXJMaXN0RGF0YTogW10sXG4gICAgICBpc1Nob3dDaG9vc2VMYXd5ZXI6IGZhbHNlLFxuICAgICAgc2hvd1N1YkJ0bjogZmFsc2UsXG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBzdWJtaXREYXRhOiBbXSxcbiAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIH07XG4gICAgY29tcG9uZW50cyA9IHt9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzdWJtaXREYXRhKCkge1xuICAgICAgICAvLyBhZGRMYXd5ZXJEYXRhXG4gICAgICAgIHZhciBzdWJBcnkgPSBbXTtcbiAgICAgICAgdmFyIGNhc2VMYXd5ZXJMaW5rZXJMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DQVNFTEFXWUVSTElOS0VSTElTVF9EQVRBJyk7XG4gICAgICAgIGZvciAodmFyIGR1dGllc0RhdGFfaW5kZXggaW4gdGhpcy5kdXRpZXNEYXRhKSB7XG4gICAgICAgICAgZm9yICh2YXIgYWRkTGF3eWVyRGF0YV9pbmRleCBpbiB0aGlzLmR1dGllc0RhdGFbZHV0aWVzRGF0YV9pbmRleF0uYWRkTGF3eWVyRGF0YSkge1xuICAgICAgICAgICAgdmFyIHN1YkRhdGEgPSB7XG4gICAgICAgICAgICAgIGNhc2VJZDogdGhpcy5jYXNlSWQsXG4gICAgICAgICAgICAgIGxhd3llclJvbGU6IHRoaXMuZHV0aWVzRGF0YVtkdXRpZXNEYXRhX2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgdXNlcklkOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZHV0aWVzRGF0YVtkdXRpZXNEYXRhX2luZGV4XS5hZGRMYXd5ZXJEYXRhW2FkZExhd3llckRhdGFfaW5kZXhdLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBzdWJEYXRhLnVzZXJJZCA9ICt0aGlzLmR1dGllc0RhdGFbZHV0aWVzRGF0YV9pbmRleF0uYWRkTGF3eWVyRGF0YVthZGRMYXd5ZXJEYXRhX2luZGV4XS51c2VySWQ7XG4gICAgICAgICAgICAgIHN1YkFyeS5wdXNoKHN1YkRhdGEpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5kdXRpZXNEYXRhW2R1dGllc0RhdGFfaW5kZXhdLmlkID09ICdNJykge1xuICAgICAgICAgICAgICAgIGNhc2VMYXd5ZXJMaW5rZXJMaXN0Lm5hbWUgPSB0aGlzLmR1dGllc0RhdGFbZHV0aWVzRGF0YV9pbmRleF0uYWRkTGF3eWVyRGF0YVthZGRMYXd5ZXJEYXRhX2luZGV4XS5uYW1lO1xuICAgICAgICAgICAgICAgIGNhc2VMYXd5ZXJMaW5rZXJMaXN0LmNhdGVnb3J5TmFtZSA9ICfotJ/otKPkuronO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpc1ByaW5jaXBhbCA9IHN1YkFyeS5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0ubGF3eWVyUm9sZSA9PSAnTSdcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGlzUHJpbmNpcGFsKSB7XG4gICAgICAgICAgY2FzZUxhd3llckxpbmtlckxpc3QuY291bnQgPSBzdWJBcnkubGVuZ3RoO1xuICAgICAgICAgIHZhciBzdG9yYWdlRGF0YSA9IGNhc2VMYXd5ZXJMaW5rZXJMaXN0O1xuICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVDYXNlTGF3eWVyKHN1YkFyeSwgc3RvcmFnZURhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+i0n+i0o+S6uuS4jeiDveS4uuepuu+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgYmx1cihlKSB7XG4gICAgICAgIGlmIChlLmRldGFpbC52YWx1ZSA9PSAnJykge1xuICAgICAgICAgIHRoaXMuR2V0TXlDb21tb25seVVzZWRFbXBsb3llZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNlYXJjaERhdGEoZSkge1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVJdGVtKGR1dGllc0RhdGFfaW5kZXgsIHVzZXJJZCkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmR1dGllc0RhdGFbZHV0aWVzRGF0YV9pbmRleF0uYWRkTGF3eWVyRGF0YSkge1xuICAgICAgICAgIGlmICh0aGlzLmR1dGllc0RhdGFbZHV0aWVzRGF0YV9pbmRleF0uYWRkTGF3eWVyRGF0YVtpbmRleF0udXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5kdXRpZXNEYXRhW2R1dGllc0RhdGFfaW5kZXhdLmFkZExhd3llckRhdGEuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpZih0aGlzLmR1dGllc0RhdGFbZHV0aWVzRGF0YV9pbmRleF0uaWQ9PSdDJyl7XG4gICAgICAgICAgLy8gICB0aGlzLmR1dGllc0RhdGFbZHV0aWVzRGF0YV9pbmRleF0uaXNTaG93QWRkSW1hZ2U9dHJ1ZTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBhZGRMYXd5ZXJEYXRhKGlkLCBuYW1lLCBhdmF0YXIsIGNhdGVnb3J5TmFtZSkge1xuICAgICAgICB2YXIgc2hvd0RhdGEgPSBbe1xuICAgICAgICAgIGF2YXRhcjogYXZhdGFyLFxuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdXNlcklkOiBpZCxcbiAgICAgICAgICBjYXRlZ29yeU5hbWVcbiAgICAgICAgfV1cbiAgICAgICAgdmFyIHNob3dEYXRhcyA9IG15T2JqRGlzdGluY3Qoc2hvd0RhdGEsIHRoaXMuZHV0aWVzRGF0YVt0aGlzLmN1cnJlbnRJbmRleF0uYWRkTGF3eWVyRGF0YSwgJ3VzZXJJZCcpO1xuICAgICAgICB0aGlzLmR1dGllc0RhdGFbdGhpcy5jdXJyZW50SW5kZXhdLmFkZExhd3llckRhdGEucHVzaCguLi5zaG93RGF0YXMpXG4gICAgICAgIHRoaXMuaXNTaG93Q2hvb3NlTGF3eWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgaXNNYXNrKGUpIHtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5pZCA9PSAnTWFzaycpIHtcbiAgICAgICAgICB0aGlzLmlzU2hvd0Nob29zZUxhd3llciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgaXNTaG93Q2hvb3NlTGF3eWVyKGluZGV4LCBpZCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmlzU2hvd0Nob29zZUxhd3llciA9IHRydWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBldmVudHMgPSB7fTtcbiAgICB3YXRjaCA9IHtcbiAgICAgIGlucHV0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09ICcnKSB7XG4gICAgICAgICAgdGhpcy5HZXRNeUNvbW1vbmx5VXNlZEVtcGxveWVlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuR2V0RW1wbG95ZWVzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGR1dGllc0RhdGEoZGF0YSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgc3dpdGNoIChkYXRhW2luZGV4XS5pZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgIGlmIChkYXRhW2luZGV4XS5hZGRMYXd5ZXJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1dGllc0RhdGFbaW5kZXhdLmlzU2hvd0FkZEltYWdlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVtpbmRleF0uYWRkTGF3eWVyRGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHV0aWVzRGF0YVtpbmRleF0uaXNTaG93QWRkSW1hZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgIGlmIChkYXRhW2luZGV4XS5hZGRMYXd5ZXJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1dGllc0RhdGFbaW5kZXhdLmlzU2hvd0FkZEltYWdlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVtpbmRleF0uYWRkTGF3eWVyRGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHV0aWVzRGF0YVtpbmRleF0uaXNTaG93QWRkSW1hZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb21wdXRlZCA9IHt9O1xuICAgIC8v5o+Q5Lqk6YCJ5Lit5b6L5biIXG4gICAgYXN5bmMgQ3JlYXRlT3JVcGRhdGVDYXNlTGF3eWVyKHN1YkRhdGEsIHN0b3JhZ2VEYXRhKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NBU0VMQVdZRVJMSU5LRVJMSVNUX0RBVEEnLCBzdG9yYWdlRGF0YSlcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogJ0NSRUFURV9DQVNFTEFXWUVSTElOS0VSTElTVF9EQVRBJyxcbiAgICAgICAgICAgIGRhdGE6IHN0b3JhZ2VEYXRhLFxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlTGF3eWVyL0NyZWF0ZU9yVXBkYXRlQ2FzZUxhd3llcicsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAgc3ViRGF0YVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+aPkOS6pOaIkOWKnycpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL+iOt+WPluW3suacieahiOS7tuiBlOezu+S6ulxuICAgIGFzeW5jIEdldENhc2VDaGFyZ2VMaXN0KCkge1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldENhc2VDaGFyZ2VMaXN0JyxcbiAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgaWQ6IHRoaXMuY2FzZUlkXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwICYmIHJlc0RhdGEuZGF0YS5yZXN1bHQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHZhciBHZXRDYXNlQ2hhcmdlTGlzdCA9IHJlc0RhdGEuZGF0YS5yZXN1bHQubGF3eWVyQ2hhcmdlTGlzdDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IEdldENhc2VDaGFyZ2VMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIGxhd3llckRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBHZXRDYXNlQ2hhcmdlTGlzdFtpXS5lbXBsb3llZU5hbWUsXG4gICAgICAgICAgICB1c2VySWQ6IEdldENhc2VDaGFyZ2VMaXN0W2ldLnVzZXJJZCxcbiAgICAgICAgICAgIGF2YXRhcjogJycsXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArIEdldENhc2VDaGFyZ2VMaXN0W2ldLnVzZXJJZDtcbiAgICAgICAgICBsYXd5ZXJEYXRhLmF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuZyA9IHRoaXMuZHV0aWVzRGF0YS5sZW5ndGg7IGogPCBsZW5nOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChHZXRDYXNlQ2hhcmdlTGlzdFtpXS5sYXd5ZXJSb2xlID09IHRoaXMuZHV0aWVzRGF0YVtqXS5pZCkge1xuICAgICAgICAgICAgICB0aGlzLmR1dGllc0RhdGFbal0uYWRkTGF3eWVyRGF0YS5wdXNoKGxhd3llckRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTdWJCdG4gPSB0cnVlXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL+iOt+WPluiBjOi0o1xuICAgIGFzeW5jIEdldEdlbmVyYWxDb2RlQ29tYm9PdXRwdXQoKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IFwiQ0FDQlRcIixcbiAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgIGlzTWF4RGVwdGg6IHRydWUsXG4gICAgICAgIGlzUmVjdXJzaXZlOiBmYWxzZVxuICAgICAgfVxuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCcsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAgZGF0YVxuICAgICAgKVxuICAgICAgdmFyIEdldENhc2VDaGFyZ2VMaXN0ID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZS9HZXRDYXNlQ2hhcmdlTGlzdCcsXG4gICAgICAgICdwb3N0Jywge1xuICAgICAgICAgIGlkOiB0aGlzLmNhc2VJZFxuICAgICAgICB9XG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCAmJiBHZXRDYXNlQ2hhcmdlTGlzdC5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLmR1dGllc0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICB2YXIgYXBwbGljYW50ID0gdGhpcy4kcGFyZW50Lmdsb2JhbC51c2VySW5mbztcbiAgICAgICAgdmFyIHVzZXJJZCA9IGFwcGxpY2FudC5pZC50b1N0cmluZygpXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuZHV0aWVzRGF0YSkge1xuICAgICAgICAgIHRoaXMuZHV0aWVzRGF0YVtpbmRleF0uYWRkTGF3eWVyRGF0YSA9IFtdO1xuICAgICAgICAgIHRoaXMuZHV0aWVzRGF0YVtpbmRleF0uaXNTaG93QWRkSW1hZ2UgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLmR1dGllc0RhdGFbaW5kZXhdLmlkID09ICdDJykge1xuICAgICAgICAgICAgdGhpcy5kdXRpZXNEYXRhW2luZGV4XS5pc1Nob3dBZGRJbWFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKEdldENhc2VDaGFyZ2VMaXN0LmRhdGEucmVzdWx0Lmxhd3llckNoYXJnZUxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93U3ViQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGFwcGxpY2FudC51c2VyQXZhdGFyLFxuICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2FudC5uYW1lLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZHV0aWVzRGF0YVtpbmRleF0uYWRkTGF3eWVyRGF0YS5wdXNoKFxuICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAvLyAgdGhpcy5zdWJtaXREYXRhLnB1c2goe1xuICAgICAgICAgICAgICAvLyAgIGNhc2VJZDogdGhpcy5jYXNlSWQsXG4gICAgICAgICAgICAgIC8vICAgbGF3eWVyUm9sZTogJ0MnLFxuICAgICAgICAgICAgICAvLyAgIHVzZXJJZDogdXNlcklkXG4gICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmR1dGllc0RhdGFbaW5kZXhdLmlkID09ICdNJykge1xuICAgICAgICAgICAgdGhpcy5kdXRpZXNEYXRhW2luZGV4XS53YXJuaW5nVGV4dCA9ICflj6rog73pgInmi6nkuIDkuKrkuronO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgLy/ojrflj5bnm7jlhbPlvovluIhcbiAgICBhc3luYyBHZXRNeUNvbW1vbmx5VXNlZEVtcGxveWVlcygpIHtcbiAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY29tbW9uL0dldE15Q29tbW9ubHlVc2VkRW1wbG95ZWVzJyxcbiAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgaWQ6IDZcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgdmFyIGxhd3llckxpc3REYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gbGF3eWVyTGlzdERhdGEpIHtcbiAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBsYXd5ZXJMaXN0RGF0YVtpbmRleF0uaWQ7XG4gICAgICAgICAgbGF3eWVyTGlzdERhdGFbaW5kZXhdLmF2YXRhciA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhd3llckxpc3REYXRhID0gbGF3eWVyTGlzdERhdGFcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy/mkJzntKLlvovluIhcbiAgICBhc3luYyBHZXRFbXBsb3llZXMoZmlsdGVyKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgY2FzZUlkOiBudWxsLFxuICAgICAgICBjYXRlZ29yeTogbnVsbCxcbiAgICAgICAgZmlsdGVyLFxuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICBvcmdhbml6YXRpb25Vbml0SWQ6IG51bGwsXG4gICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgIHBhZ2VTaXplOiAxMFxuICAgICAgfVxuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0RW1wbG95ZWVzJyxcbiAgICAgICAgJ3Bvc3QnLFxuICAgICAgICBkYXRhXG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgbGF3eWVyTGlzdERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zO1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBsYXd5ZXJMaXN0RGF0YSkge1xuICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArIGxhd3llckxpc3REYXRhW2luZGV4XS5pZDtcbiAgICAgICAgICBsYXd5ZXJMaXN0RGF0YVtpbmRleF0uYXZhdGFyID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF3eWVyTGlzdERhdGEgPSBsYXd5ZXJMaXN0RGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5jYXNlSWQgPSBvcHRpb25zLmlkO1xuICAgICAgLy8gdGhpcy5jYXNlSWQgPSAnMkI3MDlCQ0MtMjc2MC1FOTExLUFDMUItQjBEOUJGMzFEQUQ3JztcbiAgICAgIHRoaXMuYXBwbGljYW50ID0gdGhpcy4kcGFyZW50Lmdsb2JhbC51c2VySW5mbztcbiAgICAgIHRoaXMuR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCgpO1xuICAgICAgdGhpcy5HZXRNeUNvbW1vbmx5VXNlZEVtcGxveWVlcygpO1xuICAgICAgdGhpcy5HZXRDYXNlQ2hhcmdlTGlzdCgpO1xuICAgIH07XG4gICAgb25TaG93KCkge307XG4gIH1cbiJdfQ==