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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchRecord = function (_wepy$page) {
  _inherits(searchRecord, _wepy$page);

  function searchRecord() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, searchRecord);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchRecord.__proto__ || Object.getPrototypeOf(searchRecord)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
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
              var history = wx.getStorageSync('HISTORY_KEYWORD_RECORD');
              history = [];
              wx.setStorageSync('HISTORY_KEYWORD_RECORD', history);
              _this2.$apply();
            }
          }
        });
      },
      deletItem: function deletItem(index) {
        this.history_keyWord_case.splice(index, 1);
        var history = wx.getStorageSync('HISTORY_KEYWORD_RECORD');
        history.splice(index, 1);
        wx.setStorageSync('HISTORY_KEYWORD_RECORD', history);
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
              var History_KeyWord_Record = wx.getStorageSync('HISTORY_KEYWORD_RECORD');
              if (History_KeyWord_Record.length >= 20) {
                History_KeyWord_Record.splice(History_KeyWord_Record.length - 1, 1);
              }
              History_KeyWord_Record.unshift(value);
              History_KeyWord_Record = (0, _api.myDistinct)(History_KeyWord_Record);
              wx.setStorageSync('HISTORY_KEYWORD_RECORD', History_KeyWord_Record);
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

  _createClass(searchRecord, [{
    key: 'isHistory',

    // 判断初始化历史数据
    value: function isHistory() {
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      prevPage.data.queryStream = {};
      prevPage.data.refresh = false;
      var History_KeyWord_Record = wx.getStorageSync('HISTORY_KEYWORD_RECORD');
      if (!History_KeyWord_Record) {
        History_KeyWord_Record = [];
        wx.setStorageSync('HISTORY_KEYWORD_RECORD', History_KeyWord_Record);
      } else {
        this.history_keyWord_case = History_KeyWord_Record;
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

  return searchRecord;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchRecord , 'pages/modules/myRecord/search/search_record'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaF9yZWNvcmQuanMiXSwibmFtZXMiOlsic2VhcmNoUmVjb3JkIiwiZGF0YSIsInNlYXJjaERhdGEiLCJoaXN0b3J5X2tleVdvcmRfY2FzZSIsInNlYXJjaENsZW50VmFsdWUiLCJpc1Nob3dBcnJheSIsIm1ldGhvZHMiLCJkZWxldEl0ZW1BbGwiLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiaGlzdG9yeSIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJkZWxldEl0ZW0iLCJpbmRleCIsInNwbGljZSIsImxvbmdUYXAiLCJtYXAiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwiZSIsInZhbHVlIiwiZGV0YWlsIiwicmVwbGFjZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJsZW5ndGgiLCJxdWVyeVN0cmVhbSIsIktleVdvcmQiLCJyZWZyZXNoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJIaXN0b3J5X0tleVdvcmRfUmVjb3JkIiwidW5zaGlmdCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJ3YXRjaCIsImlzSGlzdG9yeSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7SUFJcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSSxHQUFPO0FBQ0xDLGtCQUFZLEVBRFA7QUFHTEMsNEJBQXNCLEVBSGpCO0FBSUxDLHdCQUFrQixFQUpiO0FBS0xDLG1CQUFhO0FBTFIsSyxRQU9QQyxPLEdBQVU7QUFDUkMsa0JBRFEsMEJBQ087QUFBQTs7QUFDYkMsV0FBR0MsU0FBSCxDQUFhO0FBQ1hDLGlCQUFPLFNBREksRUFD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O0FBT0Q7QUFDRjtBQXBFTyxLLFFBc0VWaUMsSyxHQUFRLEU7Ozs7OztBQUVSO2dDQUNZO0FBQ1YsVUFBSWYsUUFBUUMsaUJBQVo7QUFDQSxVQUFJQyxXQUFXRixNQUFNQSxNQUFNRyxNQUFOLEdBQWUsQ0FBckIsQ0FBZixDQUZVLENBRThCO0FBQ3hDRCxlQUFTcEMsSUFBVCxDQUFjc0MsV0FBZCxHQUE0QixFQUE1QjtBQUNBRixlQUFTcEMsSUFBVCxDQUFjd0MsT0FBZCxHQUF3QixLQUF4QjtBQUNBLFVBQUlHLHlCQUF5QnBDLEdBQUdhLGNBQUgsQ0FBa0Isd0JBQWxCLENBQTdCO0FBQ0EsVUFBSSxDQUFDdUIsc0JBQUwsRUFBNkI7QUFDM0JBLGlDQUF5QixFQUF6QjtBQUNBcEMsV0FBR2MsY0FBSCxDQUFrQix3QkFBbEIsRUFBNENzQixzQkFBNUM7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLekMsb0JBQUwsR0FBNEJ5QyxzQkFBNUI7QUFDQSxhQUFLLElBQUluQixLQUFULElBQWtCLEtBQUt0QixvQkFBdkIsRUFBNkM7QUFDM0MsZUFBS0UsV0FBTCxDQUFpQm9CLEtBQWpCLElBQTBCLEtBQTFCO0FBQ0Q7QUFDRjtBQUNELFdBQUtGLE1BQUw7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBSzRCLFNBQUw7QUFDRDs7OzZCQUNRLENBQUU7Ozs7RUFyRzZCQyxlQUFLQyxJOztrQkFBMUJyRCxZIiwiZmlsZSI6InNlYXJjaF9yZWNvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCB7XG4gICAgbXlEaXN0aW5jdFxuICB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICBpbXBvcnQge1xuICAgIGZvcm1hdERhdGVcbiAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hSZWNvcmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBzZWFyY2hEYXRhOiB7XG4gICAgICB9LFxuICAgICAgaGlzdG9yeV9rZXlXb3JkX2Nhc2U6IFtdLFxuICAgICAgc2VhcmNoQ2xlbnRWYWx1ZTogJycsXG4gICAgICBpc1Nob3dBcnJheTogW10sXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgZGVsZXRJdGVtQWxsKCkge1xuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5piv5ZCm5Yig6Zmk77yBJywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgY29udGVudDogJ+WFqOmDqOWOhuWPsuiusOW9lScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxuICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICBjYW5jZWxDb2xvcjogJyM3YTdhN2EnLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGlzdG9yeV9rZXlXb3JkX2Nhc2UgPSBbXTtcbiAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ09SRCcpO1xuICAgICAgICAgICAgICBoaXN0b3J5ID0gW107XG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVDT1JEJywgaGlzdG9yeSk7XG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkZWxldEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB2YXIgaGlzdG9yeSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVDT1JEJyk7XG4gICAgICAgIGhpc3Rvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0hJU1RPUllfS0VZV09SRF9SRUNPUkQnLCBoaXN0b3J5KTtcbiAgICAgIH0sXG4gICAgICBsb25nVGFwKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaXNTaG93QXJyYXkgPSB0aGlzLmlzU2hvd0FycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pc1Nob3dBcnJheVtpbmRleF0gPSB0cnVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGhpc3RvcnkoaXRlbSkge1xuICAgICAgICB0aGlzLnNlYXJjaENsZW50VmFsdWUgPSBpdGVtO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdFNlYXJjaChlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbS5LZXlXb3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDEsIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgdmFyIEhpc3RvcnlfS2V5V29yZF9SZWNvcmQgPSB3eC5nZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ09SRCcpO1xuICAgICAgICAgICAgICBpZiAoSGlzdG9yeV9LZXlXb3JkX1JlY29yZC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgICBIaXN0b3J5X0tleVdvcmRfUmVjb3JkLnNwbGljZShIaXN0b3J5X0tleVdvcmRfUmVjb3JkLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9SZWNvcmQudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgIEhpc3RvcnlfS2V5V29yZF9SZWNvcmQgPSBteURpc3RpbmN0KEhpc3RvcnlfS2V5V29yZF9SZWNvcmQpO1xuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ09SRCcsIEhpc3RvcnlfS2V5V29yZF9SZWNvcmQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmkJzntKLkuLrnqbos6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2F0Y2ggPSB7XG4gICAgfTtcbiAgICAvLyDliKTmlq3liJ3lp4vljJbljoblj7LmlbDmja5cbiAgICBpc0hpc3RvcnkoKSB7XG4gICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbSA9IHt9O1xuICAgICAgcHJldlBhZ2UuZGF0YS5yZWZyZXNoID0gZmFsc2U7XG4gICAgICB2YXIgSGlzdG9yeV9LZXlXb3JkX1JlY29yZCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdISVNUT1JZX0tFWVdPUkRfUkVDT1JEJyk7XG4gICAgICBpZiAoIUhpc3RvcnlfS2V5V29yZF9SZWNvcmQpIHtcbiAgICAgICAgSGlzdG9yeV9LZXlXb3JkX1JlY29yZCA9IFtdO1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnSElTVE9SWV9LRVlXT1JEX1JFQ09SRCcsIEhpc3RvcnlfS2V5V29yZF9SZWNvcmQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpc3Rvcnlfa2V5V29yZF9jYXNlID0gSGlzdG9yeV9LZXlXb3JkX1JlY29yZDtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5oaXN0b3J5X2tleVdvcmRfY2FzZSkge1xuICAgICAgICAgIHRoaXMuaXNTaG93QXJyYXlbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuaXNIaXN0b3J5KCk7XG4gICAgfTtcbiAgICBvblNob3coKSB7fTtcbiAgfVxuIl19