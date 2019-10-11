'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var subSearchResult = function (_wepy$page) {
    _inherits(subSearchResult, _wepy$page);

    function subSearchResult() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, subSearchResult);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = subSearchResult.__proto__ || Object.getPrototypeOf(subSearchResult)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "remark": { "xmlns:v-bind": "", "v-bind:input.sync": "remark", "v-bind:inputValue.sync": "remarkValue", "v-bind:twoWayTitle.once": "remarkValue" } }, _this.$events = {}, _this.components = {
            remark: _input2.default
        }, _this.data = {
            submitData: {},
            caseCheckResultSource: [{
                value: "HasConflict",
                displayText: "已经检索，有冲突",
                isSelected: false
            }, {
                value: "NoConflict",
                displayText: "已经检索，无冲突",
                isSelected: false
            }],
            remark: {
                title: '备注',
                name: 'remark',
                warning: false,
                type: 'text',
                options: true
            },
            remarkValue: ''
        }, _this.methods = {
            submitData: function submitData() {
                if (this.submitData.result) {
                    this.ProcessOrderItem();
                } else {
                    wx.showToast({
                        title: '请选择检索结果', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            },
            radioChange: function radioChange(e) {
                this.submitData.result = e.detail.value;
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            remarkValue: function remarkValue(value) {
                this.submitData.remark = value;
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(subSearchResult, [{
        key: 'ProcessOrderItem',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var pages, prevPage, resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                pages = getCurrentPages(); //获取当前页面信息栈

                                prevPage = pages[pages.length - 2]; //获取上一个页面信息栈

                                console.log(prevPage);
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {
                                        wx.removeStorage({
                                            key: 'CREATE_CONFLICTCHECK_DATA',
                                            success: function success(res) {
                                                var pages = getCurrentPages(); //获取当前页面信息栈
                                                if (prevPage.route == 'pages/modules/conflictRetrieval/conflictRetrievalAudit/searchResult') {
                                                    var prevPage_three = pages[pages.length - 4]; //获取上一个页面信息栈
                                                    prevPage_two.isRefresh();
                                                    wx.navigateBack({
                                                        delta: 3 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                                    });
                                                } else {
                                                    var _prevPage_two = pages[pages.length - 3]; //获取上一个页面信息栈
                                                    _prevPage_two.isRefresh();
                                                    wx.navigateBack({
                                                        delta: 2 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                                    });
                                                }
                                            }
                                        });
                                    }
                                });
                                _context.next = 6;
                                return _ajax2.default.getData('/api/services/web/caseCheck/ProcessOrderItem', 'post', this.submitData);

                            case 6:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    console.log('提交成功');
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message, //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: true, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function ProcessOrderItem() {
                return _ref2.apply(this, arguments);
            }

            return ProcessOrderItem;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var Create_ConflictCheck_Data = wx.getStorageSync('CREATE_CONFLICTCHECK_DATA');
            for (var i = 0, len = Create_ConflictCheck_Data.conflictList.length; i < len; i++) {
                Create_ConflictCheck_Data.conflictList[i].searchName = Create_ConflictCheck_Data.conflictList[i].searchName.join(',');
                Create_ConflictCheck_Data.conflictList[i].searchEnName = Create_ConflictCheck_Data.conflictList[i].searchEnName.join(',');
            }
            this.submitData = Create_ConflictCheck_Data;
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return subSearchResult;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(subSearchResult , 'pages/modules/conflictRetrieval/conflictRetrievalAudit/subSearchResult'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YlNlYXJjaFJlc3VsdC5qcyJdLCJuYW1lcyI6WyJzdWJTZWFyY2hSZXN1bHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJyZW1hcmsiLCJkYXRhIiwic3VibWl0RGF0YSIsImNhc2VDaGVja1Jlc3VsdFNvdXJjZSIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJpc1NlbGVjdGVkIiwidGl0bGUiLCJuYW1lIiwid2FybmluZyIsInR5cGUiLCJvcHRpb25zIiwicmVtYXJrVmFsdWUiLCJtZXRob2RzIiwicmVzdWx0IiwiUHJvY2Vzc09yZGVySXRlbSIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJyYWRpb0NoYW5nZSIsImUiLCJkZXRhaWwiLCIkYXBwbHkiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzaG93TG9hZGluZyIsInJlbW92ZVN0b3JhZ2UiLCJrZXkiLCJyb3V0ZSIsInByZXZQYWdlX3RocmVlIiwicHJldlBhZ2VfdHdvIiwiaXNSZWZyZXNoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJtZXNzYWdlIiwiQ3JlYXRlX0NvbmZsaWN0Q2hlY2tfRGF0YSIsImdldFN0b3JhZ2VTeW5jIiwiaSIsImxlbiIsImNvbmZsaWN0TGlzdCIsInNlYXJjaE5hbWUiLCJqb2luIiwic2VhcmNoRW5OYW1lIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGU7Ozs7Ozs7Ozs7Ozs7OzRNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixF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TztBQUNIbEIsdUNBQUdDLFNBQUgsQ0FBYTtBQUNUViwrQ0FBT3VDLFFBQVE3QyxJQUFSLENBQWErQyxLQUFiLENBQW1CQyxPQURqQixFQUMwQjtBQUNuQy9CLDhDQUFNLE1BRkcsRUFFSztBQUNkQyxrREFBVSxJQUhELEVBR087QUFDaEJDLDhDQUFNLElBSkcsRUFJRztBQUNaQyxpREFBUyxzQkFBTyxDQUFFO0FBTFQscUNBQWI7QUFPSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVJO0FBQ0wsZ0JBQUk2Qiw0QkFBNEJsQyxHQUFHbUMsY0FBSCxDQUFrQiwyQkFBbEIsQ0FBaEM7QUFDQSxpQkFBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTUgsMEJBQTBCSSxZQUExQixDQUF1Q3RCLE1BQTdELEVBQXFFb0IsSUFBSUMsR0FBekUsRUFBOEVELEdBQTlFLEVBQW1GO0FBQy9FRiwwQ0FBMEJJLFlBQTFCLENBQXVDRixDQUF2QyxFQUEwQ0csVUFBMUMsR0FBdURMLDBCQUEwQkksWUFBMUIsQ0FBdUNGLENBQXZDLEVBQTBDRyxVQUExQyxDQUFxREMsSUFBckQsQ0FBMEQsR0FBMUQsQ0FBdkQ7QUFDQU4sMENBQTBCSSxZQUExQixDQUF1Q0YsQ0FBdkMsRUFBMENLLFlBQTFDLEdBQXlEUCwwQkFBMEJJLFlBQTFCLENBQXVDRixDQUF2QyxFQUEwQ0ssWUFBMUMsQ0FBdURELElBQXZELENBQTRELEdBQTVELENBQXpEO0FBQ0g7QUFDRCxpQkFBS3RELFVBQUwsR0FBa0JnRCx5QkFBbEI7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUE5RzhCUSxlQUFLQyxJOztrQkFBN0JoRSxlIiwiZmlsZSI6InN1YlNlYXJjaFJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCByZW1hcmsgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHN1YlNlYXJjaFJlc3VsdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJyZW1hcmtcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlucHV0LnN5bmNcIjpcInJlbWFya1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwicmVtYXJrVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJyZW1hcmtWYWx1ZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICByZW1hcmtcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6IHt9LFxuICAgICAgICAgICAgY2FzZUNoZWNrUmVzdWx0U291cmNlOiBbe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJIYXNDb25mbGljdFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogXCLlt7Lnu4/mo4DntKLvvIzmnInlhrLnqoFcIixcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTm9Db25mbGljdFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogXCLlt7Lnu4/mo4DntKLvvIzml6DlhrLnqoFcIixcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlbWFyazoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSH5rOoJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncmVtYXJrJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbWFya1ZhbHVlOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc3VibWl0RGF0YSgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pdERhdGEucmVzdWx0KXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qcm9jZXNzT3JkZXJJdGVtKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nmo4DntKLnu5PmnpwnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYWRpb0NoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLnJlc3VsdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICByZW1hcmtWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5yZW1hcmsgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb21wdXRlZCA9IHt9O1xuICAgICAgICBhc3luYyBQcm9jZXNzT3JkZXJJdGVtKCkge1xuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7IC8v6I635Y+W5b2T5YmN6aG16Z2i5L+h5oGv5qCIXG4gICAgICAgICAgICBsZXQgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXSAvL+iOt+WPluS4iuS4gOS4qumhtemdouS/oeaBr+agiFxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJldlBhZ2UpO1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnQ1JFQVRFX0NPTkZMSUNUQ0hFQ0tfREFUQScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpOyAvL+iOt+WPluW9k+WJjemhtemdouS/oeaBr+agiFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZS5yb3V0ZSA9PSAncGFnZXMvbW9kdWxlcy9jb25mbGljdFJldHJpZXZhbC9jb25mbGljdFJldHJpZXZhbEF1ZGl0L3NlYXJjaFJlc3VsdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZQYWdlX3RocmVlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gNF0gLy/ojrflj5bkuIrkuIDkuKrpobXpnaLkv6Hmga/moIhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2VfdHdvLmlzUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDMgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlBhZ2VfdHdvID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gM10gLy/ojrflj5bkuIrkuIDkuKrpobXpnaLkv6Hmga/moIhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2VfdHdvLmlzUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDIgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VDaGVjay9Qcm9jZXNzT3JkZXJJdGVtJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5DkuqTmiJDlip8nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB2YXIgQ3JlYXRlX0NvbmZsaWN0Q2hlY2tfRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ09ORkxJQ1RDSEVDS19EQVRBJylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBDcmVhdGVfQ29uZmxpY3RDaGVja19EYXRhLmNvbmZsaWN0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIENyZWF0ZV9Db25mbGljdENoZWNrX0RhdGEuY29uZmxpY3RMaXN0W2ldLnNlYXJjaE5hbWUgPSBDcmVhdGVfQ29uZmxpY3RDaGVja19EYXRhLmNvbmZsaWN0TGlzdFtpXS5zZWFyY2hOYW1lLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICBDcmVhdGVfQ29uZmxpY3RDaGVja19EYXRhLmNvbmZsaWN0TGlzdFtpXS5zZWFyY2hFbk5hbWUgPSBDcmVhdGVfQ29uZmxpY3RDaGVja19EYXRhLmNvbmZsaWN0TGlzdFtpXS5zZWFyY2hFbk5hbWUuam9pbignLCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhID0gQ3JlYXRlX0NvbmZsaWN0Q2hlY2tfRGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge307XG4gICAgfVxuIl19