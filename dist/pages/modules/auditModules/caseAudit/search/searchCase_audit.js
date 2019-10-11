'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../../../../utils/cofig/api.js');

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchCaseAudit = function (_wepy$page) {
  _inherits(searchCaseAudit, _wepy$page);

  function searchCaseAudit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, searchCaseAudit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchCaseAudit.__proto__ || Object.getPrototypeOf(searchCaseAudit)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      searchData: {},
      history_keyWord_case: [],
      searchClentValue: '',
      isShowArray: []
    }, _this.methods = {
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
              var history = wx.getStorageSync('HISTORY_KEYWORD_CASE_AUDIT');
              history = [];
              wx.setStorageSync('HISTORY_KEYWORD_CASE_AUDIT', history);
              _this2.$apply();
            }
          }
        });
      },
      deletItem: function deletItem(index) {
        this.history_keyWord_case.splice(index, 1);
        var history = wx.getStorageSync('HISTORY_KEYWORD_CASE_AUDIT');
        history.splice(index, 1);
        wx.setStorageSync('HISTORY_KEYWORD_CASE_AUDIT', history);
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
          prevPage.data.queryStream.KeyWord = e.detail.value;
          prevPage.data.refresh = true;
          wx.navigateBack({
            delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            success: function success() {
              var History_KeyWord_Case_Audit = wx.getStorageSync('HISTORY_KEYWORD_CASE_AUDIT');
              if (History_KeyWord_Case_Audit.length >= 20) {
                History_KeyWord_Case_Audit.splice(History_KeyWord_Case_Audit.length - 1, 1);
              }
              History_KeyWord_Case_Audit.unshift(value);
              History_KeyWord_Case_Audit = (0, _api.myDistinct)(History_KeyWord_Case_Audit);
              wx.setStorageSync('HISTORY_KEYWORD_CASE_AUDIT', History_KeyWord_Case_Audit);
            }
          });
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
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(searchCaseAudit, [{
    key: 'isHistory',

    // 判断初始化历史数据
    value: function isHistory() {
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      prevPage.data.queryStream = {};
      prevPage.data.refresh = false;
      var History_KeyWord_Case_Audit = wx.getStorageSync('HISTORY_KEYWORD_CASE_AUDIT');
      if (!History_KeyWord_Case_Audit) {
        History_KeyWord_Case_Audit = [];
        wx.setStorageSync('HISTORY_KEYWORD_CASE_AUDIT', History_KeyWord_Case_Audit);
      } else {
        this.history_keyWord_case = History_KeyWord_Case_Audit;
        for (var index in this.history_keyWord_case) {
          this.isShowArray[index] = false;
        }
      }
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.isHistory();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return searchCaseAudit;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(searchCaseAudit , 'pages/modules/auditModules/caseAudit/search/searchCase_audit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaENhc2VfYXVkaXQuanMiXSwibmFtZXMiOlsic2VhcmNoQ2FzZUF1ZGl0IiwiZGF0YSIsInNlYXJjaERhdGEiLCJoaXN0b3J5X2tleVdvcmRfY2FzZSIsInNlYXJjaENsZW50VmFsdWUiLCJpc1Nob3dBcnJheSIsIm1ldGhvZHMiLCJkZWxldEl0ZW1BbGwiLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiaGlzdG9yeSIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJkZWxldEl0ZW0iLCJpbmRleCIsInNwbGljZSIsImxvbmdUYXAiLCJtYXAiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwiZSIsInZhbHVlIiwiZGV0YWlsIiwicmVwbGFjZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJsZW5ndGgiLCJxdWVyeVN0cmVhbSIsIktleVdvcmQiLCJyZWZyZXNoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJIaXN0b3J5X0tleVdvcmRfQ2FzZV9BdWRpdCIsInVuc2hpZnQiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwid2F0Y2giLCJpc0hpc3RvcnkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUxDLDRCQUFzQixFQUZqQjtBQUdMQyx3QkFBa0IsRUFIYjtBQUlMQyxtQkFBYTtBQUpSLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGtCQURRLDBCQUNPO0FBQUE7O0FBQ2JDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYQyxpQkFB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O0FBTFAsV0FBYjtBQU9EO0FBQ0Y7QUFwRU8sSyxRQXNFVmlDLEssR0FBUSxFOzs7Ozs7QUFFUjtnQ0FDWTtBQUNWLFVBQUlmLFFBQVFDLGlCQUFaO0FBQ0EsVUFBSUMsV0FBV0YsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQWYsQ0FGVSxDQUU4QjtBQUN4Q0QsZUFBU3BDLElBQVQsQ0FBY3NDLFdBQWQsR0FBNEIsRUFBNUI7QUFDQUYsZUFBU3BDLElBQVQsQ0FBY3dDLE9BQWQsR0FBd0IsS0FBeEI7QUFDQSxVQUFJRyw2QkFBNkJwQyxHQUFHYSxjQUFILENBQWtCLDRCQUFsQixDQUFqQztBQUNBLFVBQUksQ0FBQ3VCLDBCQUFMLEVBQWlDO0FBQy9CQSxxQ0FBNkIsRUFBN0I7QUFDQXBDLFdBQUdjLGNBQUgsQ0FBa0IsNEJBQWxCLEVBQWdEc0IsMEJBQWhEO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS3pDLG9CQUFMLEdBQTRCeUMsMEJBQTVCO0FBQ0EsYUFBSyxJQUFJbkIsS0FBVCxJQUFrQixLQUFLdEIsb0JBQXZCLEVBQTZDO0FBQzNDLGVBQUtFLFdBQUwsQ0FBaUJvQixLQUFqQixJQUEwQixLQUExQjtBQUNEO0FBQ0Y7QUFDRCxXQUFLRixNQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUs0QixTQUFMO0FBQ0Q7Ozs2QkFDUSxDQUFFOzs7O0VBcEdnQ0MsZUFBS0MsSTs7a0JBQTdCckQsZSIsImZpbGUiOiJzZWFyY2hDYXNlX2F1ZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQge1xuICAgIG15RGlzdGluY3RcbiAgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgaW1wb3J0IHtcbiAgICBmb3JtYXREYXRlXG4gIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ2FzZUF1ZGl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgc2VhcmNoRGF0YToge30sXG4gICAgICBoaXN0b3J5X2tleVdvcmRfY2FzZTogW10sXG4gICAgICBzZWFyY2hDbGVudFZhbHVlOiAnJyxcbiAgICAgIGlzU2hvd0FycmF5OiBbXSxcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBkZWxldEl0ZW1BbGwoKSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfnoa7orqTmmK/lkKbliKDpmaTvvIEnLCAvL+aPkOekuueahOagh+mimCxcbiAgICAgICAgICBjb250ZW50OiAn5YWo6YOo5Y6G5Y+y6K6w5b2VJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj5bmtojmjInpkq4sXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzdhN2E3YScsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgLy/noa7lrprmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IFtdO1xuICAgICAgICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRV9BVURJVCcpO1xuICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRV9BVURJVCcsIGhpc3RvcnkpO1xuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZGVsZXRJdGVtKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VfQVVESVQnKTtcbiAgICAgICAgaGlzdG9yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX0NBU0VfQVVESVQnLCBoaXN0b3J5KTtcbiAgICAgIH0sXG4gICAgICBsb25nVGFwKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICB0aGlzLnNlYXJjaENsZW50VmFsdWUgPSBpdGVtO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbS5LZXlXb3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDEsIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DQVNFX0FVRElUJyk7XG4gICAgICAgICAgICAgIGlmIChIaXN0b3J5X0tleVdvcmRfQ2FzZV9BdWRpdC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfQ2FzZV9BdWRpdC5zcGxpY2UoSGlzdG9yeV9LZXlXb3JkX0Nhc2VfQXVkaXQubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgSGlzdG9yeV9LZXlXb3JkX0Nhc2VfQXVkaXQudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0ID0gbXlEaXN0aW5jdChIaXN0b3J5X0tleVdvcmRfQ2FzZV9BdWRpdCk7XG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRV9BVURJVCcsIEhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pCc57Si5Li656m6LOivt+mHjeivle+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHdhdGNoID0ge1xuICAgIH07XG4gICAgLy8g5Yik5pat5Yid5aeL5YyW5Y6G5Y+y5pWw5o2uXG4gICAgaXNIaXN0b3J5KCkge1xuICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgIHByZXZQYWdlLmRhdGEucXVlcnlTdHJlYW0gPSB7fTtcbiAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xuICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9DQVNFX0FVRElUJyk7XG4gICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0KSB7XG4gICAgICAgIEhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0ID0gW107XG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfQ0FTRV9BVURJVCcsIEhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSA9IEhpc3RvcnlfS2V5V29yZF9DYXNlX0F1ZGl0O1xuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlKSB7XG4gICAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5pc0hpc3RvcnkoKTtcbiAgICB9O1xuICAgIG9uU2hvdygpIHt9O1xuICB9XG4iXX0=