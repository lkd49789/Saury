'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConflictInterestPreflight = function (_wepy$page) {
    _inherits(ConflictInterestPreflight, _wepy$page);

    function ConflictInterestPreflight() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ConflictInterestPreflight);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConflictInterestPreflight.__proto__ || Object.getPrototypeOf(ConflictInterestPreflight)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: false,
            backgroundTextStyle: 'dark',
            //   backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            keyWord: '',
            pageNumber: 1,
            totalCount: 0,
            keyWordArray: [],
            ConflictCaseListData: []
        }, _this.components = {}, _this.methods = {
            toggleBtn: function toggleBtn(item, index) {
                this.ConflictCaseListData[index].isUnfoldData = !item.isUnfoldData;
                this.$apply();
            },
            deleteItem: function deleteItem(index) {
                this.keyWordArray.splice(index, 1);
                this.pageNumber = 1;
                this.ConflictCaseListData = [];
                this.GetPreConflictCaseList();
            },
            keyWordValue: function keyWordValue(e) {
                this.keyWord = e.detail.value;
                this.$apply();
            },
            searchKeyWord: function searchKeyWord() {
                if (this.keyWord.length > 0) {
                    this.pageNumber = 1;
                    this.keyWordArray = [];
                    this.ConflictCaseListData = [];
                    this.GetPreConflictCaseList();
                    this.$apply();
                } else {
                    wx.showToast({
                        title: '请输入检索关键词！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            }
        }, _this.events = {}, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ConflictInterestPreflight, [{
        key: 'onReachBottom',

        // 上拉加载
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber && this.$parent.global.netWorkString) {
                this.pageNumber += 1;
                this.GetPreConflictCaseList();
            } else {
                if (this.$parent.global.netWorkString) {
                    wx.showToast({
                        title: '我们是有底线的！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                } else {
                    wx.showToast({
                        title: '网络连接失败！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                }
            }
        }
    }, {
        key: 'GetPreConflictCaseList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var data, resData, _ConflictCaseListData, ConflictCaseListData, index, keyWordArray, keyWord;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        _this2.keyWord = '';
                                        _this2.$apply();
                                    }
                                });
                                data = {
                                    KeyWord: this.keyWordArray[this.keyWordArray.length - 1],
                                    pageNumber: this.pageNumber,
                                    pageSize: 10
                                };

                                data.KeyWord = this.keyWordArray[this.keyWordArray.length - 1] || this.keyWord;
                                _context.next = 5;
                                return _ajax2.default.getData('/api/services/web/case/GetPreConflictCaseList', 'post', data);

                            case 5:
                                resData = _context.sent;

                                if (resData.statusCode == 200 && resData.data.result.totalCount > 0) {
                                    this.totalCount = resData.data.result.totalCount;
                                    ConflictCaseListData = resData.data.result.items;

                                    for (index in ConflictCaseListData) {
                                        ConflictCaseListData[index].acceptDate = ConflictCaseListData[index].acceptDate.split('T')[0];
                                        ConflictCaseListData[index].isUnfoldData = false;
                                    }
                                    if (this.keyWordArray.length == 0) {
                                        keyWordArray = [];

                                        for (index in ConflictCaseListData) {
                                            keyWord = ConflictCaseListData[index].keyWord.split(',');

                                            keyWordArray.push.apply(keyWordArray, _toConsumableArray(keyWord));
                                        }
                                        this.keyWordArray = (0, _api.myDistinct)(keyWordArray);
                                    }
                                    (_ConflictCaseListData = this.ConflictCaseListData).push.apply(_ConflictCaseListData, _toConsumableArray(ConflictCaseListData));
                                } else {
                                    if (resData.data.result.totalCount == 0) {
                                        wx.showToast({
                                            title: '没有找到检索相关信息！', //提示的内容,
                                            icon: 'none', //图标,
                                            duration: 2000, //延迟时间,
                                            mask: false, //显示透明蒙层，防止触摸穿透,
                                            success: function success(res) {}
                                        });
                                    }
                                }
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetPreConflictCaseList() {
                return _ref2.apply(this, arguments);
            }

            return GetPreConflictCaseList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return ConflictInterestPreflight;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(ConflictInterestPreflight , 'pages/modules/ConflictInterestPreflight/ConflictInterestPreflight'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZsaWN0SW50ZXJlc3RQcmVmbGlnaHQuanMiXSwibmFtZXMiOlsiQ29uZmxpY3RJbnRlcmVzdFByZWZsaWdodCIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3JCb3R0b20iLCJkYXRhIiwia2V5V29yZCIsInBhZ2VOdW1iZXIiLCJ0b3RhbENvdW50Iiwia2V5V29yZEFycmF5IiwiQ29uZmxpY3RDYXNlTGlzdERhdGEiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInRvZ2dsZUJ0biIsIml0ZW0iLCJpbmRleCIsImlzVW5mb2xkRGF0YSIsIiRhcHBseSIsImRlbGV0ZUl0ZW0iLCJzcGxpY2UiLCJHZXRQcmVDb25mbGljdENhc2VMaXN0Iiwia2V5V29yZFZhbHVlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VhcmNoS2V5V29yZCIsImxlbmd0aCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImV2ZW50cyIsIndhdGNoIiwiJHBhcmVudCIsImdsb2JhbCIsIm5ldFdvcmtTdHJpbmciLCJzaG93TG9hZGluZyIsIktleVdvcmQiLCJwYWdlU2l6ZSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImFjY2VwdERhdGUiLCJzcGxpdCIsInB1c2giLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEseUI7Ozs7Ozs7Ozs7Ozs7O2dPQUNqQkMsTSxHQUFTO0FBQ1hDLG1DQUF1QixLQURaO0FBRVhDLGlDQUFxQixNQUZWO0FBR2I7QUFDRUMsbUNBQXVCO0FBSlosUyxRQU1UQyxJLEdBQU87QUFDSEMscUJBQVMsRUFETjtBQUVIQyx3QkFBWSxDQUZUO0FBR0hDLHdCQUFZLENBSFQ7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RUFDVztBQUN0QkMsa0RBQU0sTUFGSyxFQUVHO0FBQ2RDLHNEQUFVLElBSEMsRUFHSztBQUNoQkMsa0RBQU0sS0FKSyxFQUlFO0FBQ2JDLHFEQUFTLHNCQUFPLENBQUU7QUFMUCx5Q0FBYjtBQU9IO0FBRUo7QUFDRCxxQ0FBS2hCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFSyxDQUFFOzs7aUNBQ0YsQ0FBRTs7OztFQS9Id0NrQyxlQUFLQyxJOztrQkFBdkNwRCx5QiIsImZpbGUiOiJDb25mbGljdEludGVyZXN0UHJlZmxpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtteURpc3RpbmN0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZsaWN0SW50ZXJlc3RQcmVmbGlnaHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgIC8vICAgYmFja2dyb3VuZENvbG9yVG9wOiAnI2Y0ZjRmNCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3JCb3R0b206ICcjZjRmNGY0JyxcbiAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAga2V5V29yZDogJycsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgIGtleVdvcmRBcnJheTogW10sXG4gICAgICAgICAgICBDb25mbGljdENhc2VMaXN0RGF0YTogW10sXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvZ2dsZUJ0bihpdGVtLGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLkNvbmZsaWN0Q2FzZUxpc3REYXRhW2luZGV4XS5pc1VuZm9sZERhdGE9IWl0ZW0uaXNVbmZvbGREYXRhXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVJdGVtKGluZGV4KXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVdvcmRBcnJheS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyPTE7XG4gICAgICAgICAgICAgICAgdGhpcy5Db25mbGljdENhc2VMaXN0RGF0YT1bXTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldFByZUNvbmZsaWN0Q2FzZUxpc3QoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXlXb3JkVmFsdWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5V29yZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VhcmNoS2V5V29yZCgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmtleVdvcmQubGVuZ3RoPjApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXI9MTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlXb3JkQXJyYXk9W107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ29uZmxpY3RDYXNlTGlzdERhdGE9W107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0UHJlQ29uZmxpY3RDYXNlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5qOA57Si5YWz6ZSu6K+N77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgIH07XG4gICAgLy8g5LiK5ouJ5Yqg6L29XG4gICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgLyAxMCA+IHRoaXMucGFnZU51bWJlciAmJiB0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgIHRoaXMuR2V0UHJlQ29uZmxpY3RDYXNlTGlzdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsLm5ldFdvcmtTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHku6zmmK/mnInlupXnur/nmoTvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOi/nuaOpeWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGFzeW5jIEdldFByZUNvbmZsaWN0Q2FzZUxpc3QoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMua2V5V29yZD0nJztcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgS2V5V29yZDp0aGlzLmtleVdvcmRBcnJheVt0aGlzLmtleVdvcmRBcnJheS5sZW5ndGgtMV0sXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuS2V5V29yZD10aGlzLmtleVdvcmRBcnJheVt0aGlzLmtleVdvcmRBcnJheS5sZW5ndGgtMV18fHRoaXMua2V5V29yZDtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldFByZUNvbmZsaWN0Q2FzZUxpc3QnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCYmcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50PjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSByZXNEYXRhLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgdmFyIENvbmZsaWN0Q2FzZUxpc3REYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb25mbGljdENhc2VMaXN0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBDb25mbGljdENhc2VMaXN0RGF0YVtpbmRleF0uYWNjZXB0RGF0ZSA9IENvbmZsaWN0Q2FzZUxpc3REYXRhW2luZGV4XS5hY2NlcHREYXRlLnNwbGl0KCdUJylbMF07XG4gICAgICAgICAgICAgICAgICAgIENvbmZsaWN0Q2FzZUxpc3REYXRhW2luZGV4XS5pc1VuZm9sZERhdGE9ZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMua2V5V29yZEFycmF5Lmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlXb3JkQXJyYXk9W107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIENvbmZsaWN0Q2FzZUxpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5V29yZD1Db25mbGljdENhc2VMaXN0RGF0YVtpbmRleF0ua2V5V29yZC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5V29yZEFycmF5LnB1c2goLi4ua2V5V29yZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVdvcmRBcnJheT1teURpc3RpbmN0KGtleVdvcmRBcnJheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuQ29uZmxpY3RDYXNlTGlzdERhdGEucHVzaCguLi5Db25mbGljdENhc2VMaXN0RGF0YSk7XG4gICAgICAgICAgICB9ZWxzZXsgXG4gICAgICAgICAgICAgICAgaWYocmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieaJvuWIsOajgOe0ouebuOWFs+S/oeaBr++8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHt9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=