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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var conflictRetrievalDetail = function (_wepy$page) {
  _inherits(conflictRetrievalDetail, _wepy$page);

  function conflictRetrievalDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, conflictRetrievalDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = conflictRetrievalDetail.__proto__ || Object.getPrototypeOf(conflictRetrievalDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ""
    }, _this.data = {
      caseInfoData: {},
      caseId: '',
      conflictId: '',
      conflictCheckTotalCount: 0,
      conflictCheckListDatas: [],
      chineseKeyword: '',
      englishKeyword: '',
      switch: true,
      isAudit: false
    }, _this.components = {}, _this.methods = {
      search: function search() {
        var conflictCheckListDatas = this.conflictCheckListDatas;
        if (conflictCheckListDatas.length > 0) {
          var searchResult = {
            caseId: this.caseId,
            caseCheckList: []
          };
          for (var i = 0, len = conflictCheckListDatas.length; i < len; i++) {
            var caseCheckList = {};
            caseCheckList.checkType = conflictCheckListDatas[i].checkType;
            caseCheckList.keywordCN = conflictCheckListDatas[i].searchName.join(',');
            caseCheckList.keywordEN = conflictCheckListDatas[i].searchEnName.join(',');
            searchResult.caseCheckList.push(caseCheckList);
          }
          var result = JSON.stringify(searchResult);
          wx.navigateTo({
            url: './searchResult?jsonResult=' + result
          });
        } else {
          wx.navigateTo({
            url: './subSearchResult'
          });
        }
        var Create_ConflictCheck_Data = {
          id: this.conflictId,
          caseId: this.caseId,
          result: "",
          remark: "",
          conflictList: conflictCheckListDatas,
          checkResults: []
        };
        wx.setStorage({
          key: 'CREATE_CONFLICTCHECK_DATA',
          data: Create_ConflictCheck_Data
        });
        this.$apply();
      },
      switchChange: function switchChange(e) {
        this.switch = e.detail.value;
        this.$apply();
      },
      deletCK: function deletCK(index, keyIndex) {
        this.conflictCheckListDatas[index].searchName.splice(keyIndex, 1);
        this.$apply();
      },
      deletEK: function deletEK(index, keyIndex) {
        this.conflictCheckListDatas[index].searchEnName.splice(keyIndex, 1);
        this.$apply();
      },
      subCK: function subCK(index, e) {
        this.chineseKeyword = e.detail.value;
        this.conflictCheckListDatas[index].searchName.push(e.detail.value);
        (0, _api.myDistinct)(this.conflictCheckListDatas[index].searchName);
        this.$apply();
      },
      subEK: function subEK(index, e) {
        this.englishKeyword = e.detail.value;
        this.conflictCheckListDatas[index].searchEnName.push(e.detail.value);
        (0, _api.myDistinct)(this.conflictCheckListDatas[index].searchEnName);
        this.$apply();
      },
      toCaseDetailPage: function toCaseDetailPage() {
        wx.navigateTo({
          url: '../../mycase/caseDetail/casedetail?id=' + this.caseId + '&clientId=' + this.caseInfoData.clientId
        });
      }
    }, _this.events = {}, _this.watch = {
      conflictCheckListDatas: function conflictCheckListDatas(item) {
        if (item.length == this.conflictCheckTotalCount) {
          this.isAudit = true;
        }
      },
      switch: function _switch(newChecked, oldChecked) {
        if (newChecked !== oldChecked) {
          this.GetConflictCheckList(this.conflictId);
        }
      },
      chineseKeyword: function chineseKeyword(newVlue, oldValue) {
        if (newVlue !== oldValue) {
          this.chineseKeyword = oldValue;
          this.$apply;
        }
      },
      englishKeyword: function englishKeyword(newVlue, oldValue) {
        if (newVlue !== oldValue) {
          this.englishKeyword = oldValue;
          this.$apply;
        }
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(conflictRetrievalDetail, [{
    key: 'GetCaseInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(caseId) {
        var resData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'post', {
                  id: caseId
                });

              case 2:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  this.caseInfoData = resData.data.result;
                }
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetCaseInfo(_x) {
        return _ref2.apply(this, arguments);
      }

      return GetCaseInfo;
    }()
    //检索关键词

  }, {
    key: 'GetConflictCheckList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(conflictId) {
        var _this2 = this;

        var resData, conflictCheckListDatas, i, len;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showLoading({
                  title: 'Loading...', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                  success: function success(res) {}
                });
                _context2.next = 3;
                return _ajax2.default.getData('/api/services/web/caseCheck/GetConflictCheckList', 'post', {
                  id: conflictId
                });

              case 3:
                resData = _context2.sent;

                if (resData.statusCode == 200) {
                  this.conflictCheckTotalCount = resData.data.result.totalCount;
                  conflictCheckListDatas = resData.data.result.items;

                  this.conflictCheckListDatas = conflictCheckListDatas;
                  for (i = 0, len = this.conflictCheckListDatas.length; i < len; i++) {
                    if (this.switch) {
                      this.conflictCheckListDatas[i].searchName = this.conflictCheckListDatas[i].searchName.split(',').filter(function (item) {
                        return item;
                      });
                      this.conflictCheckListDatas[i].searchEnName = this.conflictCheckListDatas[i].searchEnName.split(',').filter(function (item) {
                        return item;
                      });
                    } else {
                      this.conflictCheckListDatas[i].searchName = this.conflictCheckListDatas[i].searchName.split(',').filter(function (item) {
                        return item;
                      }).slice(0, 1);
                      this.conflictCheckListDatas[i].searchEnName = this.conflictCheckListDatas[i].searchEnName.split(',').filter(function (item) {
                        return item;
                      }).slice(0, 1);
                    }
                  }
                } else {
                  wx.showToast({
                    title: resData.data.error.message, //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: false, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {
                      _this2.isAudit = true;
                      _this2.$apply();
                    }
                  });
                }
                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetConflictCheckList(_x2) {
        return _ref3.apply(this, arguments);
      }

      return GetConflictCheckList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.caseId = options.caseId;
      this.conflictId = options.id;
      this.GetConflictCheckList(this.conflictId);
      this.GetCaseInfo(this.caseId);
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return conflictRetrievalDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(conflictRetrievalDetail , 'pages/modules/conflictRetrieval/conflictRetrievalAudit/conflictRetrievalDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0UmV0cmlldmFsRGV0YWlsLmpzIl0sIm5hbWVzIjpbImNvbmZsaWN0UmV0cmlldmFsRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYXNlSW5mb0RhdGEiLCJjYXNlSWQiLCJjb25mbGljdElkIiwiY29uZmxpY3RDaGVja1RvdGFsQ291bnQiLCJjb25mbGljdENoZWNrTGlzdERhdGFzIiwiY2hpbmVzZUtleXdvcmQiLCJlbmdsaXNoS2V5d29yZCIsInN3aXRjaCIsImlzQXVkaXQiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInNlYXJjaCIsImxlbmd0aCIsInNlYXJjaFJlc3VsdCIsImNhc2VDaGVja0xpc3QiLCJpIiwibGVuIiwiY2hlY2tUeXBlIiwia2V5d29yZENOIiwic2VhcmNoTmFtZSIsImpvaW4iLCJrZXl3b3JkRU4iLCJzZWFyY2hFbk5hbWUiLCJwdXNoIiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIkNyZWF0ZV9Db25mbGljdENoZWNrX0RhdGEiLCJpZCIsInJlbWFyayIsImNvbmZsaWN0TGlzdCIsImNoZWNrUmVzdWx0cyIsInNldFN0b3JhZ2UiLCJrZXkiLCIkYXBwbHkiLCJzd2l0Y2hDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJkZWxldENLIiwiaW5kZXgiLCJrZXlJbmRleCIsInNwbGljZSIsImRlbGV0RUsiLCJzdWJDSyIsInN1YkVLIiwidG9DYXNlRGV0YWlsUGFnZSIsImNsaWVudElkIiwiZXZlbnRzIiwid2F0Y2giLCJpdGVtIiwibmV3Q2hlY2tlZCIsIm9sZENoZWNrZWQiLCJHZXRDb25mbGljdENoZWNrTGlzdCIsIm5ld1ZsdWUiLCJvbGRWYWx1ZSIsImNvbXB1dGVkIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwic3VjY2VzcyIsInRvdGFsQ291bnQiLCJpdGVtcyIsInNwbGl0IiwiZmlsdGVyIiwic2xpY2UiLCJzaG93VG9hc3QiLCJlcnJvciIsIm1lc3NhZ2UiLCJpY29uIiwiZHVyYXRpb24iLCJvcHRpb25zIiwiR2V0Q2FzZUluZm8iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLHVCOzs7Ozs7Ozs7Ozs7Ozt3TkFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsb0JBQWMsRUFEVDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsa0JBQVksRUFIUDtBQUlMQywrQkFBeUIsQ0FKcEI7QUFLTEMsOEJBQXdCLEVBTG5CO0FBTUxDLHNCQUFnQixFQU5YO0FBT0xDLHNCQUFnQixFQVBYO0FBUUxDLGNBQVEsSUFSSDtBQVNMQyxlQUFTO0FBVEosSyxRQVdQQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLFlBQUlQLHlCQUF5QixLQUFLQSxzQkFBbEM7QUFDQSxZQUFJQSx1QkFBdUJRLE1BQXZCLEdBQWdDLENBQXBDLEVBQXVDO0FBQ3JDLGNBQUlDLGVBQWU7QUFDakJaLG9CQUFRLEtBQUtBLE1BREk7QUFFakJhLDJCQUFlO0FBRkUsV0FBbkI7QUFJQSxlQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxNQUFNWix1QkFBdUJRLE1BQTdDLEVBQXFERyxJQUFJQyxHQUF6RCxFQUE4REQsR0FBOUQsRUFBbUU7QUFDakUsZ0JBQUlELGdCQUFnQixFQUFwQjtBQUNBQSwwQkFBY0csU0FBZCxHQUEwQmIsdUJBQXVCVyxDQUF2QixFQUEwQkUsU0FBcEQ7QUFDQUgsMEJBQWNJLFNBQWQsR0FBMEJkLHVCQUF1QlcsQ0FBdkIsRUFBMEJJLFVBQTFCLENBQXFDQyxJQUFyQyxDQUEwQyxHQUExQyxDQUExQjtBQUNBTiwwQkFBY08sU0FBZCxHQUEwQmpCLHVCQUF1QlcsQ0FBdkIsRUFBMEJPLFlBQTFC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QlcsQ0FBNUIsRUFBK0JPLFlBQS9CLENBQTRDZ0QsS0FBNUMsQ0FBa0QsR0FBbEQsRUFBdURDLE1BQXZELENBQThEO0FBQUEsK0JBQVFsQixJQUFSO0FBQUEsdUJBQTlELEVBQTRFbUIsS0FBNUUsQ0FBa0YsQ0FBbEYsRUFBcUYsQ0FBckYsQ0FBOUM7QUFDRDtBQUNGO0FBQ0YsaUJBYkQsTUFhTztBQUNMN0MscUJBQUc4QyxTQUFILENBQWE7QUFDWFIsMkJBQU9ILFFBQVEvRCxJQUFSLENBQWEyRSxLQUFiLENBQW1CQyxPQURmLEVBQ3dCO0FBQ25DQywwQkFBTSxNQUZLLEVBRUc7QUFDZEMsOEJBQVUsSUFIQyxFQUdLO0FBQ2hCWCwwQkFBTSxLQUpLLEVBSUU7QUFDYkMsNkJBQVMsc0JBQU87QUFDZCw2QkFBSzNELE9BQUwsR0FBZSxJQUFmO0FBQ0EsNkJBQUs2QixNQUFMO0FBQ0Q7QUFSVSxtQkFBYjtBQVVEO0FBQ0QscUJBQUtBLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFFS3lDLE8sRUFBUztBQUNkLFdBQUs3RSxNQUFMLEdBQWM2RSxRQUFRN0UsTUFBdEI7QUFDQSxXQUFLQyxVQUFMLEdBQWtCNEUsUUFBUS9DLEVBQTFCO0FBQ0EsV0FBS3lCLG9CQUFMLENBQTBCLEtBQUt0RCxVQUEvQjtBQUNBLFdBQUs2RSxXQUFMLENBQWlCLEtBQUs5RSxNQUF0QjtBQUNEOzs7NkJBQ1EsQ0FBRTs7OztFQXhLd0MrRSxlQUFLQyxJOztrQkFBckNyRix1QiIsImZpbGUiOiJjb25mbGljdFJldHJpZXZhbERldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gIGltcG9ydCB7XG4gICAgbXlEaXN0aW5jdFxuICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbmZsaWN0UmV0cmlldmFsRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIlwiLFxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIGNhc2VJbmZvRGF0YToge30sXG4gICAgICBjYXNlSWQ6ICcnLFxuICAgICAgY29uZmxpY3RJZDogJycsXG4gICAgICBjb25mbGljdENoZWNrVG90YWxDb3VudDogMCxcbiAgICAgIGNvbmZsaWN0Q2hlY2tMaXN0RGF0YXM6IFtdLFxuICAgICAgY2hpbmVzZUtleXdvcmQ6ICcnLFxuICAgICAgZW5nbGlzaEtleXdvcmQ6ICcnLFxuICAgICAgc3dpdGNoOiB0cnVlLFxuICAgICAgaXNBdWRpdDogZmFsc2UsXG4gICAgfTtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNlYXJjaCgpIHtcbiAgICAgICAgbGV0IGNvbmZsaWN0Q2hlY2tMaXN0RGF0YXMgPSB0aGlzLmNvbmZsaWN0Q2hlY2tMaXN0RGF0YXM7XG4gICAgICAgIGlmIChjb25mbGljdENoZWNrTGlzdERhdGFzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0ge1xuICAgICAgICAgICAgY2FzZUlkOiB0aGlzLmNhc2VJZCxcbiAgICAgICAgICAgIGNhc2VDaGVja0xpc3Q6IFtdXG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjb25mbGljdENoZWNrTGlzdERhdGFzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2FzZUNoZWNrTGlzdCA9IHt9O1xuICAgICAgICAgICAgY2FzZUNoZWNrTGlzdC5jaGVja1R5cGUgPSBjb25mbGljdENoZWNrTGlzdERhdGFzW2ldLmNoZWNrVHlwZTtcbiAgICAgICAgICAgIGNhc2VDaGVja0xpc3Qua2V5d29yZENOID0gY29uZmxpY3RDaGVja0xpc3REYXRhc1tpXS5zZWFyY2hOYW1lLmpvaW4oJywnKTtcbiAgICAgICAgICAgIGNhc2VDaGVja0xpc3Qua2V5d29yZEVOID0gY29uZmxpY3RDaGVja0xpc3REYXRhc1tpXS5zZWFyY2hFbk5hbWUuam9pbignLCcpO1xuICAgICAgICAgICAgc2VhcmNoUmVzdWx0LmNhc2VDaGVja0xpc3QucHVzaChjYXNlQ2hlY2tMaXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHNlYXJjaFJlc3VsdCk7XG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL3NlYXJjaFJlc3VsdD9qc29uUmVzdWx0PScgKyByZXN1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy4vc3ViU2VhcmNoUmVzdWx0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBDcmVhdGVfQ29uZmxpY3RDaGVja19EYXRhID0ge1xuICAgICAgICAgIGlkOiB0aGlzLmNvbmZsaWN0SWQsXG4gICAgICAgICAgY2FzZUlkOiB0aGlzLmNhc2VJZCxcbiAgICAgICAgICByZXN1bHQ6IFwiXCIsXG4gICAgICAgICAgcmVtYXJrOiBcIlwiLFxuICAgICAgICAgIGNvbmZsaWN0TGlzdDogY29uZmxpY3RDaGVja0xpc3REYXRhcyxcbiAgICAgICAgICBjaGVja1Jlc3VsdHM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiAnQ1JFQVRFX0NPTkZMSUNUQ0hFQ0tfREFUQScsXG4gICAgICAgICAgZGF0YTogQ3JlYXRlX0NvbmZsaWN0Q2hlY2tfRGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBzd2l0Y2hDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnN3aXRjaCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGRlbGV0Q0soaW5kZXgsIGtleUluZGV4KSB7XG4gICAgICAgIHRoaXMuY29uZmxpY3RDaGVja0xpc3REYXRhc1tpbmRleF0uc2VhcmNoTmFtZS5zcGxpY2Uoa2V5SW5kZXgsIDEpXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgZGVsZXRFSyhpbmRleCwga2V5SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jb25mbGljdENoZWNrTGlzdERhdGFzW2luZGV4XS5zZWFyY2hFbk5hbWUuc3BsaWNlKGtleUluZGV4LCAxKVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHN1YkNLKGluZGV4LCBlKSB7XG4gICAgICAgIHRoaXMuY2hpbmVzZUtleXdvcmQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgdGhpcy5jb25mbGljdENoZWNrTGlzdERhdGFzW2luZGV4XS5zZWFyY2hOYW1lLnB1c2goZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICBteURpc3RpbmN0KHRoaXMuY29uZmxpY3RDaGVja0xpc3REYXRhc1tpbmRleF0uc2VhcmNoTmFtZSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgc3ViRUsoaW5kZXgsIGUpIHtcbiAgICAgICAgdGhpcy5lbmdsaXNoS2V5d29yZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLmNvbmZsaWN0Q2hlY2tMaXN0RGF0YXNbaW5kZXhdLnNlYXJjaEVuTmFtZS5wdXNoKGUuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgbXlEaXN0aW5jdCh0aGlzLmNvbmZsaWN0Q2hlY2tMaXN0RGF0YXNbaW5kZXhdLnNlYXJjaEVuTmFtZSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgdG9DYXNlRGV0YWlsUGFnZSgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vLi4vbXljYXNlL2Nhc2VEZXRhaWwvY2FzZWRldGFpbD9pZD0nICsgdGhpcy5jYXNlSWQgKyAnJmNsaWVudElkPScgKyB0aGlzLmNhc2VJbmZvRGF0YS5jbGllbnRJZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIHdhdGNoID0ge1xuICAgICAgY29uZmxpY3RDaGVja0xpc3REYXRhcyhpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmxlbmd0aCA9PSB0aGlzLmNvbmZsaWN0Q2hlY2tUb3RhbENvdW50KSB7XG4gICAgICAgICAgdGhpcy5pc0F1ZGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN3aXRjaCAobmV3Q2hlY2tlZCwgb2xkQ2hlY2tlZCkge1xuICAgICAgICBpZiAobmV3Q2hlY2tlZCAhPT0gb2xkQ2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuR2V0Q29uZmxpY3RDaGVja0xpc3QodGhpcy5jb25mbGljdElkKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hpbmVzZUtleXdvcmQobmV3Vmx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG5ld1ZsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jaGluZXNlS2V5d29yZCA9IG9sZFZhbHVlO1xuICAgICAgICAgIHRoaXMuJGFwcGx5O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5nbGlzaEtleXdvcmQobmV3Vmx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG5ld1ZsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5lbmdsaXNoS2V5d29yZCA9IG9sZFZhbHVlO1xuICAgICAgICAgIHRoaXMuJGFwcGx5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb21wdXRlZCA9IHt9O1xuICAgIGFzeW5jIEdldENhc2VJbmZvKGNhc2VJZCkge1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldENhc2VJbmZvJyxcbiAgICAgICAgJ3Bvc3QnLCB7XG4gICAgICAgICAgaWQ6IGNhc2VJZFxuICAgICAgICB9XG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLmNhc2VJbmZvRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICAvL+ajgOe0ouWFs+mUruivjVxuICAgIGFzeW5jIEdldENvbmZsaWN0Q2hlY2tMaXN0KGNvbmZsaWN0SWQpIHtcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlQ2hlY2svR2V0Q29uZmxpY3RDaGVja0xpc3QnLFxuICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICBpZDogY29uZmxpY3RJZFxuICAgICAgICB9XG4gICAgICApXG4gICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICB0aGlzLmNvbmZsaWN0Q2hlY2tUb3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50O1xuICAgICAgICB2YXIgY29uZmxpY3RDaGVja0xpc3REYXRhcyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgIHRoaXMuY29uZmxpY3RDaGVja0xpc3REYXRhcyA9IGNvbmZsaWN0Q2hlY2tMaXN0RGF0YXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNvbmZsaWN0Q2hlY2tMaXN0RGF0YXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5zd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmxpY3RDaGVja0xpc3REYXRhc1tpXS5zZWFyY2hOYW1lID0gdGhpcy5jb25mbGljdENoZWNrTGlzdERhdGFzW2ldLnNlYXJjaE5hbWUuc3BsaXQoJywnKS5maWx0ZXIoaXRlbSA9PiBpdGVtKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmxpY3RDaGVja0xpc3REYXRhc1tpXS5zZWFyY2hFbk5hbWUgPSB0aGlzLmNvbmZsaWN0Q2hlY2tMaXN0RGF0YXNbaV0uc2VhcmNoRW5OYW1lLnNwbGl0KCcsJykuZmlsdGVyKGl0ZW0gPT4gaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmxpY3RDaGVja0xpc3REYXRhc1tpXS5zZWFyY2hOYW1lID0gdGhpcy5jb25mbGljdENoZWNrTGlzdERhdGFzW2ldLnNlYXJjaE5hbWUuc3BsaXQoJywnKS5maWx0ZXIoaXRlbSA9PiBpdGVtKS5zbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmxpY3RDaGVja0xpc3REYXRhc1tpXS5zZWFyY2hFbk5hbWUgPSB0aGlzLmNvbmZsaWN0Q2hlY2tMaXN0RGF0YXNbaV0uc2VhcmNoRW5OYW1lLnNwbGl0KCcsJykuZmlsdGVyKGl0ZW0gPT4gaXRlbSkuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZXJyb3IubWVzc2FnZSwgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQXVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuY2FzZUlkID0gb3B0aW9ucy5jYXNlSWQ7XG4gICAgICB0aGlzLmNvbmZsaWN0SWQgPSBvcHRpb25zLmlkO1xuICAgICAgdGhpcy5HZXRDb25mbGljdENoZWNrTGlzdCh0aGlzLmNvbmZsaWN0SWQpXG4gICAgICB0aGlzLkdldENhc2VJbmZvKHRoaXMuY2FzZUlkKTtcbiAgICB9O1xuICAgIG9uU2hvdygpIHt9O1xuICB9XG4iXX0=