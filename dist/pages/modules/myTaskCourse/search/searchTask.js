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

var _pickerDate = require('./../../../../components/picker/pickerDate.js');

var _pickerDate2 = _interopRequireDefault(_pickerDate);

var _pickerOption = require('./../../../../components/picker/pickerOption.js');

var _pickerOption2 = _interopRequireDefault(_pickerOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchTask = function (_wepy$page) {
  _inherits(searchTask, _wepy$page);

  function searchTask() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, searchTask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchTask.__proto__ || Object.getPrototypeOf(searchTask)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "CaseName": { "xmlns:v-bind": "", "v-bind:input.sync": "CaseName", "v-bind:inputValue.sync": "CaseNameValue", "v-bind:twoWayTitle.once": "CaseNameValue" }, "ClientName": { "v-bind:input.sync": "ClientName", "v-bind:inputValue.sync": "ClientNameValue", "v-bind:twoWayTitle.once": "ClientNameValue" }, "creationTime": { "v-bind:pickerData.once": "creationTime", "v-bind:twoWayTitle.once": "creationTime" }, "Category": { "v-bind:options.sync": "Category", "v-bind:index.sync": "CategoryIndex", "v-bind:twoWayTitle.once": "CategoryIndex" }, "IsArchive": { "v-bind:options.sync": "IsArchive", "v-bind:index.sync": "IsArchiveIndex", "v-bind:twoWayTitle.once": "IsArchiveIndex" }, "Name": { "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" } }, _this.$events = {}, _this.components = {
      CaseName: _input2.default,
      ClientName: _input2.default,
      creationTime: _pickerDate2.default,
      Category: _pickerOption2.default,
      IsArchive: _pickerOption2.default,
      Name: _input2.default
    }, _this.data = {
      IsArchive: {
        title: '是否归档',
        key: 'displayText',
        name: 'IsArchive',
        data: [{ value: "Y", displayText: "是", isSelected: false }, { value: "N", displayText: "否", isSelected: false }],
        warning: false
      },
      IsArchiveIndex: -1,
      Category: {
        title: '类别',
        key: 'name',
        name: 'Category',
        data: [],
        warning: false
      },
      CategoryIndex: -1,
      creationTime: {
        title: '开始时间',
        startDateData: '',
        endDateData: ''
      },
      Name: {
        title: '项目名称',
        name: 'Name',
        warning: false
      },
      NameValue: '',
      CaseName: {
        title: '案件名称',
        name: 'CaseName',
        warning: false,
        disabled: true
      },
      CaseNameValue: '',
      ClientName: {
        title: '客户名称',
        name: 'ClientName',
        warning: false
      },
      ClientNameValue: '',
      searchData: {},
      history_keyWord_case: [],
      searchClentValue: '',
      isShowArray: [],
      showPage: false
    }, _this.methods = {
      advancedSearch: function advancedSearch() {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2]; //上一个页面
        if (prevPage) {
          prevPage.advancedSearchBackData(this.searchData);
          wx.navigateBack({
            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
          });
        }
      },
      toCaseSearchPage: function toCaseSearchPage() {
        wx.navigateTo({ url: '../../receivables/manageReceivables/manageReceivablesExamine' });
        this.$apply();
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
              var history = wx.getStorageSync('HISTORY_KEYWORD_TASK');
              history = [];
              wx.setStorageSync('HISTORY_KEYWORD_TASK', history);
              _this2.$apply();
            }
          }
        });
      },
      deletItem: function deletItem(index) {
        this.history_keyWord_case.splice(index, 1);
        var history = wx.getStorageSync('HISTORY_KEYWORD_TASK');
        history.splice(index, 1);
        wx.setStorageSync('HISTORY_KEYWORD_TASK', history);
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
          var pages = getCurrentPages();
          var prevPage = pages[pages.length - 2]; //上一个页面
          if (prevPage) {
            prevPage.isRefresh(e.detail.value);
            wx.navigateBack({
              delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
              success: function success() {
                var History_KeyWord_Task = wx.getStorageSync('HISTORY_KEYWORD_TASK');
                if (History_KeyWord_Task.length >= 20) {
                  History_KeyWord_Task.splice(History_KeyWord_Task.length - 1, 1);
                }
                History_KeyWord_Task.unshift(value);
                History_KeyWord_Task = (0, _api.myDistinct)(History_KeyWord_Task);
                wx.setStorageSync('HISTORY_KEYWORD_TASK', History_KeyWord_Task);
              }
            });
            this.$apply();
          }
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
    }, _this.watch = {
      IsArchiveIndex: function IsArchiveIndex(index) {
        this.searchData.IsArchive = this.IsArchive.data[index].value;
        this.$apply();
      },
      CategoryIndex: function CategoryIndex(index) {
        this.searchData.Category = this.Category.data[index].id;
        this.$apply();
      },
      creationTime: function creationTime(data) {
        if (!this.searchData.creationTime) {
          this.searchData.creationTime = {};
        }
        this.searchData.creationTime.StartDate = data.startDateData;
        this.searchData.creationTime.EndDate = data.endDateData;
        this.$apply();
      },
      NameValue: function NameValue(value) {
        this.searchData.Name = value;
        this.$apply();
      },
      ClientNameValue: function ClientNameValue(value) {
        this.searchData.ClientName = value;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(searchTask, [{
    key: 'isHistory',

    // 判断初始化历史数据
    value: function isHistory() {
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      prevPage.data.queryStream = {};
      prevPage.data.refresh = false;
      var History_KeyWord_Task = wx.getStorageSync('HISTORY_KEYWORD_TASK');
      if (!History_KeyWord_Task) {
        History_KeyWord_Task = [];
        wx.setStorageSync('HISTORY_KEYWORD_TASK', History_KeyWord_Task);
      } else {
        this.history_keyWord_case = History_KeyWord_Task;
        for (var index in this.history_keyWord_case) {
          this.isShowArray[index] = false;
        }
      }
      this.$apply();
    }
  }, {
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
                  this.Category.data = resData.data.result;
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
    key: 'isRefresh',
    value: function isRefresh(caseInfoData) {
      this.CaseNameValue = caseInfoData.name;
      this.searchData.CaseName = caseInfoData.name;
      this.searchData.CaseId = caseInfoData.id;
      this.ClientNameValue = caseInfoData.clientName;
      this.searchData.ClientName = caseInfoData.clientName;
      this.searchData.ClientId = caseInfoData.clientId;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.isHistory();
      this.GetGeneralCodeComboOutput();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return searchTask;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchTask , 'pages/modules/myTaskCourse/search/searchTask'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFRhc2suanMiXSwibmFtZXMiOlsic2VhcmNoVGFzayIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkNhc2VOYW1lIiwiQ2xpZW50TmFtZSIsImNyZWF0aW9uVGltZSIsIkNhdGVnb3J5IiwiSXNBcmNoaXZlIiwiTmFtZSIsImRhdGEiLCJ0aXRsZSIsImtleSIsIm5hbWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiaXNTZWxlY3RlZCIsIndhcm5pbmciLCJJc0FyY2hpdmVJbmRleCIsIkNhdGVnb3J5SW5kZXgiLCJzdGFydERhdGVEYXRhIiwiZW5kRGF0ZURhdGEiLCJOYW1lVmFsdWUiLCJkaXNhYmxlZCIsIkNhc2VOYW1lVmFsdWUiLCJDbGllbnROYW1lVmFsdWUiLCJzZWFyY2hEYXRhIiwiaGlzdG9yeV9rZXlXb3JkX2Nhc2UiLCJzZWFyY2hDbGVudFZhbHVlIiwiaXNTaG93QXJyYXkiLCJzaG93UGFnZSIsIm1ldGhvZHMiLCJhZHZhbmNlZFNlYXJjaCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJsZW5ndGgiLCJhZHZhbmNlZFNlYXJjaEJhY2tEYXRhIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInRvQ2FzZVNlYXJjaFBhZ2UiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiJGFwcGx5IiwiaXNTaG93UGFnZSIsImRlbGV0SXRlbUFsbCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImhpc3RvcnkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiZGVsZXRJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJsb25nVGFwIiwibWFwIiwiaXRlbSIsInN1Ym1pdFNlYXJjaCIsImUiLCJkZXRhaWwiLCJyZXBsYWNlIiwiaXNSZWZyZXNoIiwiSGlzdG9yeV9LZXlXb3JkX1Rhc2siLCJ1bnNoaWZ0Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsIndhdGNoIiwiaWQiLCJTdGFydERhdGUiLCJFbmREYXRlIiwicXVlcnlTdHJlYW0iLCJyZWZyZXNoIiwiYWpheCIsImdldERhdGEiLCJjbGFzcyIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiY2FzZUluZm9EYXRhIiwiQ2FzZUlkIiwiY2xpZW50TmFtZSIsIkNsaWVudElkIiwiY2xpZW50SWQiLCJpc0hpc3RvcnkiLCJHZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBR0E7Ozs7QUFJQTs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsVUFBdkMsRUFBa0QsMEJBQXlCLGVBQTNFLEVBQTJGLDJCQUEwQixlQUFySCxFQUFaLEVBQWtKLGNBQWEsRUFBQyxxQkFBb0IsWUFBckIsRUFBa0MsMEJBQXlCLGlCQUEzRCxFQUE2RSwyQkFBMEIsaUJBQXZHLEVBQS9KLEVBQXlSLGdCQUFlLEVBQUMsMEJBQXlCLGNBQTFCLEVBQXlDLDJCQUEwQixjQUFuRSxFQUF4UyxFQUEyWCxZQUFXLEVBQUMsdUJBQXNCLFVBQXZCLEVBQWtDLHFCQUFvQixlQUF0RCxFQUFzRSwyQkFBMEIsZUFBaEcsRUFBdFksRUFBdWYsYUFBWSxFQUFDLHVCQUFzQixXQUF2QixFQUFtQyxxQkFBb0IsZ0JBQXZELEVBQXdFLDJCQUEwQixnQkFBbEcsRUFBbmdCLEVBQXVuQixRQUFPLEVBQUMscUJBQW9CLE1BQXJCLEVBQTRCLDBCQUF5QixXQUFyRCxFQUFpRSwyQkFBMEIsV0FBM0YsRUFBOW5CLEUsUUFDVEMsTyxHQUFVLEUs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TDtBQUNEOzs7Ozs7Ozs7Ozt1QkFFbUJ1QyxlQUFLQyxPQUFMLENBQ2hCLG9EQURnQixFQUVoQixNQUZnQixFQUdoQjtBQUNJQyx5QkFBTztBQURYLGlCQUhnQixDOzs7QUFBZEMsdUI7O0FBT0osb0JBQUdBLFFBQVFDLFVBQVIsSUFBb0IsR0FBdkIsRUFBMkI7QUFDekIsdUJBQUtoRixRQUFMLENBQWNHLElBQWQsR0FBbUI0RSxRQUFRNUUsSUFBUixDQUFhOEUsTUFBaEM7QUFDQSx1QkFBSzVDLE1BQUw7QUFDRCxpQkFIRCxNQUdLO0FBQ0hOLHFCQUFHbUMsU0FBSCxDQUFhO0FBQ1g5RCwyQkFBTyxPQURJLEVBQ0s7QUFDaEIrRCwwQkFBTSxNQUZLLEVBRUc7QUFDZEMsOEJBQVUsSUFIQyxFQUdLO0FBQ2hCQywwQkFBTSxLQUpLLEVBSUU7QUFDYnRCLDZCQUFTLHNCQUFPLENBQUU7QUFMUCxtQkFBYjtBQU9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRU9tQyxZLEVBQWE7QUFDckIsV0FBS2pFLGFBQUwsR0FBbUJpRSxhQUFhNUUsSUFBaEM7QUFDQSxXQUFLYSxVQUFMLENBQWdCdEIsUUFBaEIsR0FBeUJxRixhQUFhNUUsSUFBdEM7QUFDQSxXQUFLYSxVQUFMLENBQWdCZ0UsTUFBaEIsR0FBdUJELGFBQWFYLEVBQXBDO0FBQ0EsV0FBS3JELGVBQUwsR0FBcUJnRSxhQUFhRSxVQUFsQztBQUNBLFdBQUtqRSxVQUFMLENBQWdCckIsVUFBaEIsR0FBMkJvRixhQUFhRSxVQUF4QztBQUNBLFdBQUtqRSxVQUFMLENBQWdCa0UsUUFBaEIsR0FBeUJILGFBQWFJLFFBQXRDO0FBQ0EsV0FBS2pELE1BQUw7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS2tELFNBQUw7QUFDQSxXQUFLQyx5QkFBTDtBQUNEOzs7NkJBQ1EsQ0FBRTs7OztFQXBPMkJDLGVBQUtDLEk7O2tCQUF4QmxHLFUiLCJmaWxlIjoic2VhcmNoVGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IHtcbiAgICBteURpc3RpbmN0XG4gIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gIGltcG9ydCB7XG4gICAgZm9ybWF0RGF0ZVxuICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIGltcG9ydCBDYXNlTmFtZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCdcbiAgaW1wb3J0IENsaWVudE5hbWUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnXG4gIGltcG9ydCBOYW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0J1xuICBpbXBvcnQgY3JlYXRpb25UaW1lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlckRhdGUnXG4gIGltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9waWNrZXJPcHRpb24nXG4gIGltcG9ydCBJc0FyY2hpdmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvcGlja2VyT3B0aW9uJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hUYXNrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQ2FzZU5hbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcIkNhc2VOYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJDYXNlTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ2FzZU5hbWVWYWx1ZVwifSxcIkNsaWVudE5hbWVcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQ2xpZW50TmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiQ2xpZW50TmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQ2xpZW50TmFtZVZhbHVlXCJ9LFwiY3JlYXRpb25UaW1lXCI6e1widi1iaW5kOnBpY2tlckRhdGEub25jZVwiOlwiY3JlYXRpb25UaW1lXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3JlYXRpb25UaW1lXCJ9LFwiQ2F0ZWdvcnlcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJDYXRlZ29yeVwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkNhdGVnb3J5SW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJDYXRlZ29yeUluZGV4XCJ9LFwiSXNBcmNoaXZlXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiSXNBcmNoaXZlXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiSXNBcmNoaXZlSW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJJc0FyY2hpdmVJbmRleFwifSxcIk5hbWVcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTmFtZVZhbHVlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XG4gICAgICBDYXNlTmFtZSxcbiAgICAgIENsaWVudE5hbWUsXG4gICAgICBjcmVhdGlvblRpbWUsXG4gICAgICBDYXRlZ29yeSxcbiAgICAgIElzQXJjaGl2ZSxcbiAgICAgIE5hbWVcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIElzQXJjaGl2ZTp7XG4gICAgICAgIHRpdGxlOiAn5piv5ZCm5b2S5qGjJyxcbiAgICAgICAga2V5OiAnZGlzcGxheVRleHQnLFxuICAgICAgICBuYW1lOiAnSXNBcmNoaXZlJyxcbiAgICAgICAgZGF0YTogW3t2YWx1ZTogXCJZXCIsIGRpc3BsYXlUZXh0OiBcIuaYr1wiLCBpc1NlbGVjdGVkOiBmYWxzZX0sIFxuICAgICAgIHt2YWx1ZTogXCJOXCIsIGRpc3BsYXlUZXh0OiBcIuWQplwiLCBpc1NlbGVjdGVkOiBmYWxzZX0gXSxcbiAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgIH0sXG4gICAgICBJc0FyY2hpdmVJbmRleDotMSxcbiAgICAgIENhdGVnb3J5OiB7XG4gICAgICAgICAgdGl0bGU6ICfnsbvliKsnLFxuICAgICAgICAgIGtleTogJ25hbWUnLFxuICAgICAgICAgIG5hbWU6ICdDYXRlZ29yeScsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgd2FybmluZzogZmFsc2VcbiAgICAgIH0sXG4gICAgICBDYXRlZ29yeUluZGV4OiAtMSxcbiAgICAgIGNyZWF0aW9uVGltZTp7XG4gICAgICAgIHRpdGxlOiAn5byA5aeL5pe26Ze0JyxcbiAgICAgICAgc3RhcnREYXRlRGF0YTogJycsXG4gICAgICAgIGVuZERhdGVEYXRhOiAnJ1xuICAgICAgfSxcbiAgICAgIE5hbWU6IHtcbiAgICAgICAgICB0aXRsZTogJ+mhueebruWQjeensCcsXG4gICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBOYW1lVmFsdWU6ICcnLFxuICAgICAgQ2FzZU5hbWU6IHtcbiAgICAgICAgICB0aXRsZTogJ+ahiOS7tuWQjeensCcsXG4gICAgICAgICAgbmFtZTogJ0Nhc2VOYW1lJyxcbiAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICBkaXNhYmxlZDp0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIENhc2VOYW1lVmFsdWU6ICcnLFxuICAgICAgQ2xpZW50TmFtZToge1xuICAgICAgICAgIHRpdGxlOiAn5a6i5oi35ZCN56ewJyxcbiAgICAgICAgICBuYW1lOiAnQ2xpZW50TmFtZScsXG4gICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBDbGllbnROYW1lVmFsdWU6ICcnLFxuICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgIGlzU2hvd0FycmF5OiBbXSxcbiAgICAgIHNob3dQYWdlOmZhbHNlLFxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFkdmFuY2VkU2VhcmNoKCl7XG4gICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICBpZihwcmV2UGFnZSl7XG4gICAgICAgICAgICBwcmV2UGFnZS5hZHZhbmNlZFNlYXJjaEJhY2tEYXRhKHRoaXMuc2VhcmNoRGF0YSk7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9DYXNlU2VhcmNoUGFnZSgpe1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi4vLi4vcmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXMvbWFuYWdlUmVjZWl2YWJsZXNFeGFtaW5lJyB9KTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTsgICAgICAgIFxuICAgICAgfSxcbiAgICAgIGlzU2hvd1BhZ2UoKXtcbiAgICAgICAgdGhpcy5zaG93UGFnZT0hdGhpcy5zaG93UGFnZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICBjb250ZW50OiAn5YWo6YOo5Y6G5Y+y6K6w5b2VJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzdhN2E3YScsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfVEFTSycpO1xuICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfVEFTSycsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1RBU0snKTtcbiAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1RBU0snLCBoaXN0b3J5KTtcbiAgICAgIH0sXG4gICAgICBsb25nVGFwKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICB0aGlzLnNlYXJjaENsZW50VmFsdWUgPSBpdGVtO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgaWYocHJldlBhZ2Upe1xuICAgICAgICAgIHByZXZQYWdlLmlzUmVmcmVzaChlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxLCAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBIaXN0b3J5X0tleVdvcmRfVGFzayA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfVEFTSycpO1xuICAgICAgICAgICAgICBpZiAoSGlzdG9yeV9LZXlXb3JkX1Rhc2subGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX1Rhc2suc3BsaWNlKEhpc3RvcnlfS2V5V29yZF9UYXNrLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9UYXNrLnVuc2hpZnQodmFsdWUpO1xuICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfVGFzayA9IG15RGlzdGluY3QoSGlzdG9yeV9LZXlXb3JkX1Rhc2spO1xuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1RBU0snLCBIaXN0b3J5X0tleVdvcmRfVGFzaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2F0Y2ggPSB7XG4gICAgICBJc0FyY2hpdmVJbmRleChpbmRleCl7XG4gICAgICAgIHRoaXMuc2VhcmNoRGF0YS5Jc0FyY2hpdmU9dGhpcy5Jc0FyY2hpdmUuZGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgQ2F0ZWdvcnlJbmRleChpbmRleCl7XG4gICAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXRlZ29yeT10aGlzLkNhdGVnb3J5LmRhdGFbaW5kZXhdLmlkO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgICBjcmVhdGlvblRpbWUoZGF0YSkge1xuICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hEYXRhLmNyZWF0aW9uVGltZSkge1xuICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuY3JlYXRpb25UaW1lID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWUuU3RhcnREYXRlID0gZGF0YS5zdGFydERhdGVEYXRhO1xuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5jcmVhdGlvblRpbWUuRW5kRGF0ZSA9IGRhdGEuZW5kRGF0ZURhdGE7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBOYW1lVmFsdWUodmFsdWUpe1xuICAgICAgICB0aGlzLnNlYXJjaERhdGEuTmFtZT12YWx1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBDbGllbnROYW1lVmFsdWUodmFsdWUpe1xuICAgICAgICB0aGlzLnNlYXJjaERhdGEuQ2xpZW50TmFtZT12YWx1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICAvLyDliKTmlq3liJ3lp4vljJbljoblj7LmlbDmja5cbiAgICBpc0hpc3RvcnkoKSB7XG4gICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbSA9IHt9O1xuICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XG4gICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX1Rhc2sgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1RBU0snKTtcbiAgICAgIGlmICghSGlzdG9yeV9LZXlXb3JkX1Rhc2spIHtcbiAgICAgICAgSGlzdG9yeV9LZXlXb3JkX1Rhc2sgPSBbXTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9UQVNLJywgSGlzdG9yeV9LZXlXb3JkX1Rhc2spXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlID0gSGlzdG9yeV9LZXlXb3JkX1Rhc2s7XG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UpIHtcbiAgICAgICAgICB0aGlzLmlzU2hvd0FycmF5W2luZGV4XSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBhc3luYyBHZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCl7XG4gICAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0R2VuZXJhbENvZGVDb21ib091dHB1dCcsXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xhc3M6IFwiVFBDVFwiLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgIHRoaXMuQ2F0ZWdvcnkuZGF0YT1yZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor6/vvIEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpc1JlZnJlc2goY2FzZUluZm9EYXRhKXtcbiAgICAgIHRoaXMuQ2FzZU5hbWVWYWx1ZT1jYXNlSW5mb0RhdGEubmFtZTtcbiAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXNlTmFtZT1jYXNlSW5mb0RhdGEubmFtZTtcbiAgICAgIHRoaXMuc2VhcmNoRGF0YS5DYXNlSWQ9Y2FzZUluZm9EYXRhLmlkO1xuICAgICAgdGhpcy5DbGllbnROYW1lVmFsdWU9Y2FzZUluZm9EYXRhLmNsaWVudE5hbWU7XG4gICAgICB0aGlzLnNlYXJjaERhdGEuQ2xpZW50TmFtZT1jYXNlSW5mb0RhdGEuY2xpZW50TmFtZTtcbiAgICAgIHRoaXMuc2VhcmNoRGF0YS5DbGllbnRJZD1jYXNlSW5mb0RhdGEuY2xpZW50SWQ7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLmlzSGlzdG9yeSgpO1xuICAgICAgdGhpcy5HZXRHZW5lcmFsQ29kZUNvbWJvT3V0cHV0KCk7XG4gICAgfTtcbiAgICBvblNob3coKSB7fTtcbiAgfVxuIl19