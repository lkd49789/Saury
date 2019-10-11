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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchClient = function (_wepy$page) {
  _inherits(searchClient, _wepy$page);

  function searchClient() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, searchClient);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchClient.__proto__ || Object.getPrototypeOf(searchClient)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "lawyerName": { "xmlns:v-bind": "", "v-bind:input.sync": "lawyerName", "v-bind:inputValue.sync": "lawyerNameValue", "v-bind:twoWayTitle.once": "lawyerNameValue" }, "categoryList": { "v-bind:options.sync": "categoryList", "v-bind:index.sync": "categoryListIndex", "v-bind:twoWayTitle.once": "categoryListIndex" } }, _this.$events = {}, _this.components = {
      lawyerName: _input2.default,
      categoryList: _option2.default
    }, _this.data = {
      searchData: {},
      lawyerName: {
        title: '律师',
        name: 'lawyerName',
        warning: false
        // type: 'digit',
      },
      lawyerNameValue: '',
      categoryList: {
        title: '类别',
        name: 'categoryList',
        value: [],
        displayText: [],
        warning: false
      },
      categoryListIndex: -1,
      processStatusListData: [],
      processStatusList: [],
      processStatusList1: [],
      processStatusListText: '',
      multiIndex: [0, 0],
      showPage: true,
      history_keyWord_case: [],
      searchClentValue: '',
      isShowArray: [],
      startDate: '',
      endDate: ''
    }, _this.methods = {
      bindMultiPickerChangeCategory: function bindMultiPickerChangeCategory(e) {
        var index = e.detail.value;
        var processStatusList = [];
        this.processStatusListText = this.processStatusList[0][index[0]] + '/' + this.processStatusList[1][index[1]];
        processStatusList[0] = this.processStatusListData[index[0]].items[index[1]].value;
        this.searchData.processStatusList = processStatusList;
        this.$apply();
      },
      bindMultiPickerColumnChangeCategory: function bindMultiPickerColumnChangeCategory(e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        this.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
          case 0:
            this.multiIndex[1] = 0;
            this.processStatusList[1] = this.processStatusList1[e.detail.value];
            this.$apply();
            break;
          default:
            break;
        }
        this.$apply();
      },
      bindDateChangeStart: function bindDateChangeStart(e) {
        if (this.searchData.acceptDateRange) {
          this.searchData.acceptDateRange.startDate = e.detail.value;
        } else {
          var acceptDateRange = {};
          acceptDateRange.startDate = e.detail.value;
          this.searchData.acceptDateRange = acceptDateRange;
        }
        this.startDate = e.detail.value;
        this.$apply();
      },
      bindDateChangeEnd: function bindDateChangeEnd(e) {
        if (this.searchData.acceptDateRange) {
          this.searchData.acceptDateRange.endDate = e.detail.value;
        } else {
          var acceptDateRange = {};
          acceptDateRange.endDate = e.detail.value;
          this.searchData.acceptDateRange = acceptDateRange;
        }
        this.endDate = e.detail.value;
        this.$apply();
      },
      advancedSearchSubmit: function advancedSearchSubmit() {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2]; //上一个页面
        if (prevPage) {
          prevPage.isSearchData(this.searchData);
          wx.navigateBack({
            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
          });
        }
      },
      isShowPage: function isShowPage() {
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
              _this2.history_keyWord_case = [];
              var history = wx.getStorageSync('HISTORY_KEYWORD_CASE');
              history = [];
              wx.setStorageSync('HISTORY_KEYWORD_CASE', history);
              _this2.$apply();
            }
          }
        });
      },
      deletItem: function deletItem(index) {
        this.history_keyWord_case.splice(index, 1);
        var history = wx.getStorageSync('HISTORY_KEYWORD_CASE');
        history.splice(index, 1);
        wx.setStorageSync('HISTORY_KEYWORD_CASE', history);
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
      submitSearch: function submitSearch(e) {
        var value = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");
        if (value) {
          this.searchData.filter = value;
          var pages = getCurrentPages();
          var prevPage = pages[pages.length - 2]; //上一个页面
          if (prevPage) {
            prevPage.isSearchData(this.searchData);
            wx.navigateBack({
              delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
              success: function success() {
                var History_KeyWord_Case = wx.getStorageSync('HISTORY_KEYWORD_CASE');
                if (History_KeyWord_Case.length >= 20) {
                  History_KeyWord_Case.splice(History_KeyWord_Case.length - 1, 1);
                }
                History_KeyWord_Case.unshift(value);
                History_KeyWord_Case = (0, _api.myDistinct)(History_KeyWord_Case);
                wx.setStorageSync('HISTORY_KEYWORD_CASE', History_KeyWord_Case);
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
      lawyerNameValue: function lawyerNameValue(value) {
        this.searchData.lawyerName = value;
        this.$apply();
      },
      categoryListIndex: function categoryListIndex(index) {
        var categoryList = [];
        categoryList[0] = this.categoryList.value[index];
        this.searchData.categoryList = categoryList;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(searchClient, [{
    key: 'GetCaseCategoryComboboxItems',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resData, GetCaseCategoryComboboxItems, index;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/common/GetCaseCategoryComboboxItems', 'POST');

              case 2:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  GetCaseCategoryComboboxItems = resData.data.result;

                  for (index = 0; index < GetCaseCategoryComboboxItems.length; index++) {
                    this.categoryList.displayText[index] = GetCaseCategoryComboboxItems[index].displayText;
                    this.categoryList.value[index] = GetCaseCategoryComboboxItems[index].value;
                  }
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetCaseCategoryComboboxItems() {
        return _ref2.apply(this, arguments);
      }

      return GetCaseCategoryComboboxItems;
    }()
  }, {
    key: 'GetCaseStatusComboboxItems',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var resData, GetCaseStatusComboboxItems, arr1, arr2, i, items, j;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ajax2.default.getData('/api/services/web/common/GetCaseStatusComboboxItems', 'POST');

              case 2:
                resData = _context2.sent;

                if (resData.data.success) {
                  GetCaseStatusComboboxItems = resData.data.result;
                  arr1 = [];
                  arr2 = [];

                  for (i = 0; i < GetCaseStatusComboboxItems.length; i++) {
                    arr1[i] = GetCaseStatusComboboxItems[i].displayText;
                    items = [];

                    for (j = 0; j < GetCaseStatusComboboxItems[i].items.length; j++) {
                      items[j] = GetCaseStatusComboboxItems[i].items[j].displayText;
                    }
                    arr2[i] = items;
                  }
                  this.processStatusListData = GetCaseStatusComboboxItems;
                  this.processStatusList[0] = arr1;
                  this.processStatusList[1] = arr2[0];
                  this.processStatusList1 = arr2;
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetCaseStatusComboboxItems() {
        return _ref3.apply(this, arguments);
      }

      return GetCaseStatusComboboxItems;
    }()
    // 判断初始化历史数据

  }, {
    key: 'isHistory',
    value: function isHistory() {
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      prevPage.data.queryStream = {};
      prevPage.data.refresh = false;
      var History_KeyWord_Case = wx.getStorageSync('HISTORY_KEYWORD_CASE');
      if (!History_KeyWord_Case) {
        History_KeyWord_Case = [];
        wx.setStorageSync('HISTORY_KEYWORD_CASE', History_KeyWord_Case);
      } else {
        this.history_keyWord_case = History_KeyWord_Case;
        for (var index in this.history_keyWord_case) {
          this.isShowArray[index] = false;
        }
      }
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.GetCaseCategoryComboboxItems();
      this.GetCaseStatusComboboxItems();
      this.isHistory();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return searchClient;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchClient , 'pages/modules/mycase/search/search_case'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaF9jYXNlLmpzIl0sIm5hbWVzIjpbInNlYXJjaENsaWVudCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxhd3llck5hbWUiLCJjYXRlZ29yeUxpc3QiLCJkYXRhIiwic2VhcmNoRGF0YSIsInRpdGxlIiwibmFtZSIsIndhcm5pbmciLCJsYXd5ZXJOYW1lVmFsdWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiY2F0ZWdvcnlMaXN0SW5kZXgiLCJwcm9jZXNzU3RhdHVzTGlzdERhdGEiLCJwcm9jZXNzU3RhdHVzTGlzdCIsInByb2Nlc3NTdGF0dXNMaXN0MSIsInByb2Nlc3NTdGF0dXNMaXN0VGV4dCIsIm11bHRpSW5kZXgiLCJzaG93UGFnZSIsImhpc3Rvcnlfa2V5V29yZF9jYXNlIiwic2VhcmNoQ2xlbnRWYWx1ZSIsImlzU2hvd0FycmF5Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1ldGhvZHMiLCJiaW5kTXVsdGlQaWNrZXJDaGFuZ2VDYXRlZ29yeSIsImUiLCJpbmRleCIsImRldGFpbCIsIml0ZW1zIiwiJGFwcGx5IiwiYmluZE11bHRpUGlja2VyQ29sdW1uQ2hhbmdlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiY29sdW1uIiwiYmluZERhdGVDaGFuZ2VTdGFydCIsImFjY2VwdERhdGVSYW5nZSIsImJpbmREYXRlQ2hhbmdlRW5kIiwiYWR2YW5jZWRTZWFyY2hTdWJtaXQiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwiaXNTZWFyY2hEYXRhIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImlzU2hvd1BhZ2UiLCJkZWxldEl0ZW1BbGwiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJoaXN0b3J5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImRlbGV0SXRlbSIsInNwbGljZSIsImxvbmdUYXAiLCJtYXAiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwicmVwbGFjZSIsImZpbHRlciIsIkhpc3RvcnlfS2V5V29yZF9DYXNlIiwidW5zaGlmdCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJldmVudHMiLCJ3YXRjaCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJHZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zIiwicmVzdWx0IiwiR2V0Q2FzZVN0YXR1c0NvbWJvYm94SXRlbXMiLCJhcnIxIiwiYXJyMiIsImkiLCJqIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwiaXNIaXN0b3J5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBR0E7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFlBQXZDLEVBQW9ELDBCQUF5QixpQkFBN0UsRUFBK0YsMkJBQTBCLGlCQUF6SCxFQUFkLEVBQTBKLGdCQUFlLEVBQUMsdUJBQXNCLGNBQXZCLEVBQXNDLHFCQUFvQixtQkFBMUQsRUFBOEUsMkJBQTBCLG1CQUF4RyxFQUF6SyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxpQ0FEUTtBQUVSQztBQUZRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGtCQUFZLEVBRFA7QUFFTEgsa0JBQVk7QUFDVkksZUFBTyxJQURHO0FBRVZDLGNBQU0sWUFGSTtBQUdWQyxpQkFBUztBQUNUO0FBSlUsT0FGUDtBQVFMQyx1QkFBaUIsRUFSWjtBQVNMTixvQkFBYztBQUNaRyxlQUFPLElBREs7QUFFWkMsY0FBTSxjQUZNO0FBR1pHLGVBQU8s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QW5QNkJDLGVBQUtDLEk7O2tCQUExQmhHLFkiLCJmaWxlIjoic2VhcmNoX2Nhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCB7XG4gICAgbXlEaXN0aW5jdFxuICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICBpbXBvcnQge1xuICAgIGZvcm1hdERhdGVcbiAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICBpbXBvcnQgbGF3eWVyTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gIGltcG9ydCBjYXRlZ29yeUxpc3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ2xpZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibGF3eWVyTmFtZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwibGF3eWVyTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwibGF3eWVyTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwibGF3eWVyTmFtZVZhbHVlXCJ9LFwiY2F0ZWdvcnlMaXN0XCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiY2F0ZWdvcnlMaXN0XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiY2F0ZWdvcnlMaXN0SW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjYXRlZ29yeUxpc3RJbmRleFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBsYXd5ZXJOYW1lLFxuICAgICAgY2F0ZWdvcnlMaXN0LFxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIHNlYXJjaERhdGE6IHt9LFxuICAgICAgbGF3eWVyTmFtZToge1xuICAgICAgICB0aXRsZTogJ+W+i+W4iCcsXG4gICAgICAgIG5hbWU6ICdsYXd5ZXJOYW1lJyxcbiAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgIC8vIHR5cGU6ICdkaWdpdCcsXG4gICAgICB9LFxuICAgICAgbGF3eWVyTmFtZVZhbHVlOiAnJyxcbiAgICAgIGNhdGVnb3J5TGlzdDoge1xuICAgICAgICB0aXRsZTogJ+exu+WIqycsXG4gICAgICAgIG5hbWU6ICdjYXRlZ29yeUxpc3QnLFxuICAgICAgICB2YWx1ZTogW1xuICAgICAgICBdLFxuICAgICAgICBkaXNwbGF5VGV4dDogW1xuICAgICAgICBdLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5TGlzdEluZGV4OiAtMSxcbiAgICAgIHByb2Nlc3NTdGF0dXNMaXN0RGF0YTogW10sXG4gICAgICBwcm9jZXNzU3RhdHVzTGlzdDogW10sXG4gICAgICBwcm9jZXNzU3RhdHVzTGlzdDE6IFtdLFxuICAgICAgcHJvY2Vzc1N0YXR1c0xpc3RUZXh0OiAnJyxcbiAgICAgIG11bHRpSW5kZXg6IFswLCAwXSxcbiAgICAgIHNob3dQYWdlOiB0cnVlLFxuICAgICAgaGlzdG9yeV9rZXlXb3JkX2Nhc2U6IFtdLFxuICAgICAgc2VhcmNoQ2xlbnRWYWx1ZTogJycsXG4gICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgICBzdGFydERhdGU6ICcnLFxuICAgICAgZW5kRGF0ZTogJycsXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZE11bHRpUGlja2VyQ2hhbmdlQ2F0ZWdvcnkoZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgdmFyIHByb2Nlc3NTdGF0dXNMaXN0PVtdO1xuICAgICAgICB0aGlzLnByb2Nlc3NTdGF0dXNMaXN0VGV4dCA9IHRoaXMucHJvY2Vzc1N0YXR1c0xpc3RbMF1baW5kZXhbMF1dICsgJy8nICsgdGhpcy5wcm9jZXNzU3RhdHVzTGlzdFsxXVtpbmRleFsxXV07XG4gICAgICAgIHByb2Nlc3NTdGF0dXNMaXN0WzBdID0gdGhpcy5wcm9jZXNzU3RhdHVzTGlzdERhdGFbaW5kZXhbMF1dLml0ZW1zW2luZGV4WzFdXS52YWx1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hEYXRhLnByb2Nlc3NTdGF0dXNMaXN0PXByb2Nlc3NTdGF0dXNMaXN0XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgYmluZE11bHRpUGlja2VyQ29sdW1uQ2hhbmdlQ2F0ZWdvcnkoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygn5L+u5pS555qE5YiX5Li6JywgZS5kZXRhaWwuY29sdW1uLCAn77yM5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICB0aGlzLm11bHRpSW5kZXhbZS5kZXRhaWwuY29sdW1uXSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICBzd2l0Y2ggKGUuZGV0YWlsLmNvbHVtbikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMubXVsdGlJbmRleFsxXSA9IDA7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTdGF0dXNMaXN0WzFdID0gdGhpcy5wcm9jZXNzU3RhdHVzTGlzdDFbZS5kZXRhaWwudmFsdWVdO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGJpbmREYXRlQ2hhbmdlU3RhcnQoZSkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hEYXRhLmFjY2VwdERhdGVSYW5nZSkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5hY2NlcHREYXRlUmFuZ2Uuc3RhcnREYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGFjY2VwdERhdGVSYW5nZSA9IHt9O1xuICAgICAgICAgIGFjY2VwdERhdGVSYW5nZS5zdGFydERhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuYWNjZXB0RGF0ZVJhbmdlID0gYWNjZXB0RGF0ZVJhbmdlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgYmluZERhdGVDaGFuZ2VFbmQoZSkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hEYXRhLmFjY2VwdERhdGVSYW5nZSkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5hY2NlcHREYXRlUmFuZ2UuZW5kRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBhY2NlcHREYXRlUmFuZ2UgPSB7fTtcbiAgICAgICAgICBhY2NlcHREYXRlUmFuZ2UuZW5kRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5hY2NlcHREYXRlUmFuZ2UgPSBhY2NlcHREYXRlUmFuZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmREYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgYWR2YW5jZWRTZWFyY2hTdWJtaXQoKSB7XG4gICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgaWYgKHByZXZQYWdlKSB7XG4gICAgICAgICAgcHJldlBhZ2UuaXNTZWFyY2hEYXRhKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlzU2hvd1BhZ2UoKSB7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2UgPSAhdGhpcy5zaG93UGFnZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICBjb250ZW50OiAn5YWo6YOo5Y6G5Y+y6K6w5b2VJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzdhN2E3YScsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRScpO1xuICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRScsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0UnKTtcbiAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0UnLCBoaXN0b3J5KTtcbiAgICAgIH0sXG4gICAgICBsb25nVGFwKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICB0aGlzLnNlYXJjaENsZW50VmFsdWUgPSBpdGVtO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hEYXRhLmZpbHRlcj12YWx1ZTtcbiAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgIHByZXZQYWdlLmlzU2VhcmNoRGF0YSh0aGlzLnNlYXJjaERhdGEpO1xuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgZGVsdGE6IDEsIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfQ2FzZSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRScpO1xuICAgICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfQ2FzZS5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9DYXNlLnNwbGljZShIaXN0b3J5X0tleVdvcmRfQ2FzZS5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0Nhc2UudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0Nhc2UgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZF9DYXNlKTtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0UnLCBIaXN0b3J5X0tleVdvcmRfQ2FzZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIHdhdGNoID0ge1xuICAgICAgbGF3eWVyTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoRGF0YS5sYXd5ZXJOYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnlMaXN0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgdmFyIGNhdGVnb3J5TGlzdD1bXTtcbiAgICAgICAgY2F0ZWdvcnlMaXN0WzBdID0gdGhpcy5jYXRlZ29yeUxpc3QudmFsdWVbaW5kZXhdO1xuICAgICAgICB0aGlzLnNlYXJjaERhdGEuY2F0ZWdvcnlMaXN0PWNhdGVnb3J5TGlzdDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFzeW5jIEdldENhc2VDYXRlZ29yeUNvbWJvYm94SXRlbXMoKSB7XG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zJyxcbiAgICAgICAgJ1BPU1QnXG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB2YXIgR2V0Q2FzZUNhdGVnb3J5Q29tYm9ib3hJdGVtcyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBHZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHRoaXMuY2F0ZWdvcnlMaXN0LmRpc3BsYXlUZXh0W2luZGV4XSA9IEdldENhc2VDYXRlZ29yeUNvbWJvYm94SXRlbXNbaW5kZXhdLmRpc3BsYXlUZXh0O1xuICAgICAgICAgIHRoaXMuY2F0ZWdvcnlMaXN0LnZhbHVlW2luZGV4XSA9IEdldENhc2VDYXRlZ29yeUNvbWJvYm94SXRlbXNbaW5kZXhdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIEdldENhc2VTdGF0dXNDb21ib2JveEl0ZW1zKCkge1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0Q2FzZVN0YXR1c0NvbWJvYm94SXRlbXMnLFxuICAgICAgICAnUE9TVCdcbiAgICAgIClcbiAgICAgIGlmIChyZXNEYXRhLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICB2YXIgR2V0Q2FzZVN0YXR1c0NvbWJvYm94SXRlbXMgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICB2YXIgYXJyMSA9IFtdO1xuICAgICAgICB2YXIgYXJyMiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEdldENhc2VTdGF0dXNDb21ib2JveEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJyMVtpXSA9IEdldENhc2VTdGF0dXNDb21ib2JveEl0ZW1zW2ldLmRpc3BsYXlUZXh0O1xuICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgR2V0Q2FzZVN0YXR1c0NvbWJvYm94SXRlbXNbaV0uaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW2pdID0gR2V0Q2FzZVN0YXR1c0NvbWJvYm94SXRlbXNbaV0uaXRlbXNbal0uZGlzcGxheVRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFycjJbaV0gPSBpdGVtcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2Nlc3NTdGF0dXNMaXN0RGF0YSA9IEdldENhc2VTdGF0dXNDb21ib2JveEl0ZW1zO1xuICAgICAgICB0aGlzLnByb2Nlc3NTdGF0dXNMaXN0WzBdID0gYXJyMTtcbiAgICAgICAgdGhpcy5wcm9jZXNzU3RhdHVzTGlzdFsxXSA9IGFycjJbMF07XG4gICAgICAgIHRoaXMucHJvY2Vzc1N0YXR1c0xpc3QxID0gYXJyMjtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgaXNIaXN0b3J5KCkge1xuICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9DYXNlID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DQVNFJyk7XG4gICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9DYXNlKSB7XG4gICAgICAgIEhpc3RvcnlfS2V5V29yZF9DYXNlID0gW107XG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRScsIEhpc3RvcnlfS2V5V29yZF9DYXNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IEhpc3RvcnlfS2V5V29yZF9DYXNlO1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlKSB7XG4gICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5HZXRDYXNlQ2F0ZWdvcnlDb21ib2JveEl0ZW1zKCk7XG4gICAgICB0aGlzLkdldENhc2VTdGF0dXNDb21ib2JveEl0ZW1zKCk7XG4gICAgICB0aGlzLmlzSGlzdG9yeSgpO1xuICAgIH07XG4gICAgb25TaG93KCkge307XG4gIH1cbiJdfQ==