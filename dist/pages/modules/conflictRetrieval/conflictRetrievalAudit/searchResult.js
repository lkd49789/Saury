'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchResult = function (_wepy$page) {
    _inherits(searchResult, _wepy$page);

    function searchResult() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchResult);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchResult.__proto__ || Object.getPrototypeOf(searchResult)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            searchResult: [], //查询条件
            caseCheckListFilterDatas: [],
            totalCount: 0,
            pageNumber: 1,
            pageSize: 10,
            conditionKey: 'clientName',
            isAllChecked: true,
            filterKeys: {
                displayText: ['客户名称', '负责人', '案件类别', '状态'],
                value: ['clientName', 'caseManager', 'caseCategory', 'caseStatus'],
                key_index: 0
            },
            submitData: []
        }, _this.components = {}, _this.methods = {
            isAllChecked: function isAllChecked() {
                this.isAllChecked = !this.isAllChecked;
                for (var i = 0; i < this.caseCheckListFilterDatas.length; i++) {
                    if (this.isAllChecked) {
                        this.caseCheckListFilterDatas[i].isGroupChecked = true;
                        this.caseCheckListFilterDatas[i].items.map(function (item) {
                            return item.isChecked = true;
                        });
                    } else {
                        this.caseCheckListFilterDatas[i].isGroupChecked = false;
                        this.caseCheckListFilterDatas[i].items.map(function (item) {
                            return item.isChecked = false;
                        });
                    }
                }
                this.$apply();
            },
            isGroupChecked: function isGroupChecked(index) {
                this.caseCheckListFilterDatas[index].isGroupChecked = !this.caseCheckListFilterDatas[index].isGroupChecked;
                if (this.caseCheckListFilterDatas[index].isGroupChecked) {
                    this.caseCheckListFilterDatas[index].items.map(function (item) {
                        return item.isChecked = true;
                    });
                } else {
                    this.caseCheckListFilterDatas[index].items.map(function (item) {
                        return item.isChecked = false;
                    });
                }
                this.$apply();
            },
            nextPage: function nextPage() {
                var subData = [];
                for (var i = 0, len = this.caseCheckListFilterDatas.length; i < len; i++) {
                    for (var j = 0, _len2 = this.caseCheckListFilterDatas[i].items.length; j < _len2; j++) {
                        if (this.caseCheckListFilterDatas[i].items[j].isChecked) {
                            subData.push(this.caseCheckListFilterDatas[i].items[j]);
                        }
                    }
                }
                var Create_ConflictCheck_Data = wx.getStorageSync('CREATE_CONFLICTCHECK_DATA');
                Create_ConflictCheck_Data.checkResults = subData;
                wx.setStorage({
                    key: 'CREATE_CONFLICTCHECK_DATA',
                    data: Create_ConflictCheck_Data,
                    success: function success() {
                        wx.navigateTo({
                            url: './subSearchResult'
                        });
                    }
                });
            },
            isFold: function isFold(index) {
                this.caseCheckListFilterDatas[index].isFold = !this.caseCheckListFilterDatas[index].isFold;
                this.$apply();
            },
            isChecked: function isChecked(index, index_item) {
                this.caseCheckListFilterDatas[index].items[index_item].isChecked = !this.caseCheckListFilterDatas[index].items[index_item].isChecked;
            },
            isShowLitigantList: function isShowLitigantList(index, index_item) {
                this.caseCheckListFilterDatas[index].items[index_item].isShowLitigantList = !this.caseCheckListFilterDatas[index].items[index_item].isShowLitigantList;
            },
            bindPickerChange: function bindPickerChange(e) {
                this.filterKeys.key_index = e.detail.value;
                this.pageNumber = 1;
                this.caseCheckListFilterDatas = [];
                switch (this.filterKeys.value[e.detail.value]) {
                    case 'clientName':
                        this.conditionKey = "clientName";
                        break;
                    case 'caseManager':
                        this.conditionKey = "caseManager";
                        break;
                    case 'caseCategory':
                        this.conditionKey = "caseCategory";
                        break;
                    case 'caseStatus':
                        this.conditionKey = "caseStatusText";
                        break;
                    default:
                        break;
                }
                this.GetCaseCheckList();
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            caseCheckListFilterDatas: function caseCheckListFilterDatas(value) {
                for (var i = 0; i < value.length; i++) {
                    this.caseCheckListFilterDatas[i].isGroupChecked = value[i].items.every(function (item) {
                        return item.isChecked;
                    });
                }
                this.isAllChecked = value.every(function (item) {
                    return item.isGroupChecked;
                });
            },
            filterKeys: function filterKeys(value, oldValue) {
                if (value.key_index !== oldValue.key_index) {
                    wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 0
                    });
                }
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchResult, [{
        key: 'filterData',
        value: function filterData(data, key) {
            var filter = this.caseCheckListFilterDatas;
            for (var i = 0, len = data.length; i < len; i++) {
                var obj = {};
                if (filter.length == 0 || data[i][key] == 'null') {
                    var obj = {};
                    obj.items = [];
                    obj.title = data[i][key];
                    obj.isFold = false;
                    obj.isGroupChecked = true;
                    obj.items.push(data[i]);
                    filter.push(obj);
                } else {
                    for (var j = 0; j < filter.length; j++) {
                        if (data[i][key] == filter[j].title) {
                            var items = data[i];
                            filter[j].items.push(items);
                            break;
                        } else {
                            if (j == filter.length - 1) {
                                var obj = {};
                                obj.title = data[i][key];
                                obj.isFold = false;
                                obj.isGroupChecked = true;
                                filter.push(obj);
                                obj.items = [];
                                obj.items.push(data[i]);
                                break;
                            }
                        }
                    }
                }
            }
            this.caseCheckListFilterDatas = filter;
            this.$apply();
        }
        // 下拉刷新

    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.caseCheckListFilterDatas = [], this.pageNumber = 1;
            this.GetCaseCheckList();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
        //上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber) {
                this.pageNumber += 1;
                this.GetCaseCheckList();
            } else {
                wx.showToast({
                    title: '已经到底了！', //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: false, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                });
            }
        }
    }, {
        key: 'GetCaseCheckList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var searchResult, resData, caseCheckListDatas, i, len;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                searchResult = this.searchResult;

                                searchResult.pageNumber = this.pageNumber;
                                searchResult.pageSize = this.pageSize;
                                _context.next = 6;
                                return _ajax2.default.getData('/api/services/web/caseCheck/GetCaseCheckList', 'post', searchResult);

                            case 6:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    if (resData.data.result.totalCount > 0) {
                                        this.totalCount = resData.data.result.totalCount;
                                        caseCheckListDatas = resData.data.result.items;

                                        for (i = 0, len = caseCheckListDatas.length; i < len; i++) {
                                            caseCheckListDatas[i].isChecked = true;
                                            caseCheckListDatas[i].isShowLitigantList = false;
                                        }
                                        this.filterData(caseCheckListDatas, this.conditionKey);
                                    }
                                }
                                this.$apply();

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseCheckList() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseCheckList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.searchResult = JSON.parse(options.jsonResult);
            this.GetCaseCheckList();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return searchResult;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchResult , 'pages/modules/conflictRetrieval/conflictRetrievalAudit/searchResult'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFJlc3VsdC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hSZXN1bHQiLCJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiYmFja2dyb3VuZENvbG9yQm90dG9tIiwiZGF0YSIsImNhc2VDaGVja0xpc3RGaWx0ZXJEYXRhcyIsInRvdGFsQ291bnQiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJjb25kaXRpb25LZXkiLCJpc0FsbENoZWNrZWQiLCJmaWx0ZXJLZXlzIiwiZGlzcGxheVRleHQiLCJ2YWx1ZSIsImtleV9pbmRleCIsInN1Ym1pdERhdGEiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImkiLCJsZW5ndGgiLCJpc0dyb3VwQ2hlY2tlZCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImlzQ2hlY2tlZCIsIiRhcHBseSIsImluZGV4IiwibmV4dFBhZ2UiLCJzdWJEYXRhIiwibGVuIiwiaiIsInB1c2giLCJDcmVhdGVfQ29uZmxpY3RDaGVja19EYXRhIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImNoZWNrUmVzdWx0cyIsInNldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwibmF2aWdhdGVUbyIsInVybCIsImlzRm9sZCIsImluZGV4X2l0ZW0iLCJpc1Nob3dMaXRpZ2FudExpc3QiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsIkdldENhc2VDaGVja0xpc3QiLCJldmVudHMiLCJ3YXRjaCIsImV2ZXJ5Iiwib2xkVmFsdWUiLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJkdXJhdGlvbiIsImNvbXB1dGVkIiwiZmlsdGVyIiwib2JqIiwidGl0bGUiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwic2hvd1RvYXN0IiwiaWNvbiIsIm1hc2siLCJzaG93TG9hZGluZyIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJjYXNlQ2hlY2tMaXN0RGF0YXMiLCJmaWx0ZXJEYXRhIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsImpzb25SZXN1bHQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsTSxHQUFTO0FBQ0xDLG1DQUF1QixJQURsQjtBQUVMQyxpQ0FBcUIsTUFGaEI7QUFHTEMsZ0NBQW9CLFNBSGY7QUFJTEMsbUNBQXVCO0FBSmxCLFMsUUFNVEMsSSxHQUFPO0FBQ0hOLDBCQUFjLEVBRFgsRUFDZTtBQUNsQk8sc0NBQTBCLEVBRnZCO0FBR0hDLHdCQUFZLENBSFQ7QUFJSEMsd0JBQVksQ0FKVDtBQUtIQyxzQkFBVSxFQUxQO0FBTUhDLDBCQUFjLFlBTlg7QUFPSEMsMEJBQWEsSUFQVjtBQVFIQyx3QkFBWTtBQUNSQyw2QkFBYSxDQUNULE1BRFMsRUFFVCxLQUZTLEVBR1QsTUFIUyxFQUlULElBSlMsQ0FETDtBQU9SQyx1QkFBTyxDQUNILFlBREcsRUFFSCxhQUZHLEVBR0gsY0FIRyxFQUlILFlBSkcsQ0FQQztBQWFSQywyQkFBVztBQWJILGFBUlQ7QUF1QkhDLHdCQUFZO0FBdkJULFMsUUF5QlBDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNOUCx3QkFETSwwQkFDUTtBQUNWLHFCQUFLQSxZQUFMLEdBQWtCLENBQUMsS0FBS0EsWUFBeEI7QUFDQSxxQkFBSSxJQUFJUSxJQUFFLENBQVYsRUFBWUEsSUFBRSxLQUFLYix3QkFBTCxDQUE4QmMsTUFBNUMsRUFBbURELEdBQW5ELEVBQXVEO0FBQ25ELHdCQUFHLEtBQUtSLFlBQVIsRUFBcUI7QUFDaEIsNkJBQUtMLHdCQUFMLENBQThCYSxDQUE5QixFQUFpQ0UsY0FBakMsR0FBZ0QsSUFBaEQ7QUFDRCw2QkFBS2Ysd0JBQUwsQ0FBOEJhLENBQTlCLEVBQWlDRyxLQUFqQyxDQUF1Q0MsR0FBdkMsQ0FBMkMsVUFB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RCxFQUEwRFgsR0FBMUQsRUFBK0Q7QUFDM0RvRCwrREFBbUJwRCxDQUFuQixFQUFzQk0sU0FBdEIsR0FBa0MsSUFBbEM7QUFDQThDLCtEQUFtQnBELENBQW5CLEVBQXNCeUIsa0JBQXRCLEdBQTJDLEtBQTNDO0FBQ0g7QUFDRCw2Q0FBSzRCLFVBQUwsQ0FBZ0JELGtCQUFoQixFQUFvQyxLQUFLN0QsWUFBekM7QUFDSDtBQUNKO0FBQ0QscUNBQUtnQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBR0crQyxPLEVBQVM7QUFDWixpQkFBSzFFLFlBQUwsR0FBb0IyRSxLQUFLQyxLQUFMLENBQVdGLFFBQVFHLFVBQW5CLENBQXBCO0FBQ0EsaUJBQUs1QixnQkFBTDtBQUNIOzs7aUNBQ1EsQ0FBRTs7OztFQXZPMkI2QixlQUFLQyxJOztrQkFBMUIvRSxZIiwiZmlsZSI6InNlYXJjaFJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaFJlc3VsdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclRvcDogJyNmNGY0ZjQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQ6IFtdLCAvL+afpeivouadoeS7tlxuICAgICAgICAgICAgY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzOiBbXSxcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgY29uZGl0aW9uS2V5OiAnY2xpZW50TmFtZScsXG4gICAgICAgICAgICBpc0FsbENoZWNrZWQ6dHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlcktleXM6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dDogW1xuICAgICAgICAgICAgICAgICAgICAn5a6i5oi35ZCN56ewJyxcbiAgICAgICAgICAgICAgICAgICAgJ+i0n+i0o+S6uicsXG4gICAgICAgICAgICAgICAgICAgICfmoYjku7bnsbvliKsnLFxuICAgICAgICAgICAgICAgICAgICAn54q25oCBJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2NsaWVudE5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAnY2FzZU1hbmFnZXInLFxuICAgICAgICAgICAgICAgICAgICAnY2FzZUNhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICAgICAgJ2Nhc2VTdGF0dXMnXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBrZXlfaW5kZXg6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0RGF0YTogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaXNBbGxDaGVja2VkKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FsbENoZWNrZWQ9IXRoaXMuaXNBbGxDaGVja2VkO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNBbGxDaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja0xpc3RGaWx0ZXJEYXRhc1tpXS5pc0dyb3VwQ2hlY2tlZD10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaV0uaXRlbXMubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNDaGVja2VkPXRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaV0uaXNHcm91cENoZWNrZWQ9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaV0uaXRlbXMubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlzQ2hlY2tlZD1mYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNHcm91cENoZWNrZWQoaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzW2luZGV4XS5pc0dyb3VwQ2hlY2tlZCA9ICF0aGlzLmNhc2VDaGVja0xpc3RGaWx0ZXJEYXRhc1tpbmRleF0uaXNHcm91cENoZWNrZWQ7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaW5kZXhdLmlzR3JvdXBDaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaW5kZXhdLml0ZW1zLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlzQ2hlY2tlZD10cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja0xpc3RGaWx0ZXJEYXRhc1tpbmRleF0uaXRlbXMubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNDaGVja2VkPWZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1YkRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHRoaXMuY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzW2ldLml0ZW1zLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaV0uaXRlbXNbal0uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViRGF0YS5wdXNoKHRoaXMuY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzW2ldLml0ZW1zW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgQ3JlYXRlX0NvbmZsaWN0Q2hlY2tfRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdDUkVBVEVfQ09ORkxJQ1RDSEVDS19EQVRBJyk7XG4gICAgICAgICAgICAgICAgQ3JlYXRlX0NvbmZsaWN0Q2hlY2tfRGF0YS5jaGVja1Jlc3VsdHMgPSBzdWJEYXRhO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdDUkVBVEVfQ09ORkxJQ1RDSEVDS19EQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogQ3JlYXRlX0NvbmZsaWN0Q2hlY2tfRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9zdWJTZWFyY2hSZXN1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRm9sZChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzW2luZGV4XS5pc0ZvbGQgPSAhdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaW5kZXhdLmlzRm9sZDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQ2hlY2tlZChpbmRleCwgaW5kZXhfaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzW2luZGV4XS5pdGVtc1tpbmRleF9pdGVtXS5pc0NoZWNrZWQgPSAhdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXNbaW5kZXhdLml0ZW1zW2luZGV4X2l0ZW1dLmlzQ2hlY2tlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1Nob3dMaXRpZ2FudExpc3QoaW5kZXgsIGluZGV4X2l0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja0xpc3RGaWx0ZXJEYXRhc1tpbmRleF0uaXRlbXNbaW5kZXhfaXRlbV0uaXNTaG93TGl0aWdhbnRMaXN0ID0gIXRoaXMuY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzW2luZGV4XS5pdGVtc1tpbmRleF9pdGVtXS5pc1Nob3dMaXRpZ2FudExpc3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBpY2tlckNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJLZXlzLmtleV9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZmlsdGVyS2V5cy52YWx1ZVtlLmRldGFpbC52YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpZW50TmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbktleSA9IFwiY2xpZW50TmFtZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2VNYW5hZ2VyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uS2V5ID0gXCJjYXNlTWFuYWdlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2VDYXRlZ29yeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbktleSA9IFwiY2FzZUNhdGVnb3J5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2FzZVN0YXR1cyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbktleSA9IFwiY2FzZVN0YXR1c1RleHRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZUNoZWNrTGlzdCgpXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgY2FzZUNoZWNrTGlzdEZpbHRlckRhdGFzKHZhbHVlKXtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPHZhbHVlLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VDaGVja0xpc3RGaWx0ZXJEYXRhc1tpXS5pc0dyb3VwQ2hlY2tlZD12YWx1ZVtpXS5pdGVtcy5ldmVyeSgoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlzQ2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsQ2hlY2tlZD12YWx1ZS5ldmVyeSgoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNHcm91cENoZWNrZWRcbiAgICAgICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsdGVyS2V5cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUua2V5X2luZGV4ICE9PSBvbGRWYWx1ZS5rZXlfaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZpbHRlckRhdGEoZGF0YSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLmxlbmd0aCA9PSAwIHx8IGRhdGFbaV1ba2V5XSA9PSAnbnVsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9XG4gICAgICAgICAgICAgICAgICAgIG9iai5pdGVtcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIG9iai50aXRsZSA9IGRhdGFbaV1ba2V5XVxuICAgICAgICAgICAgICAgICAgICBvYmouaXNGb2xkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG9iai5pc0dyb3VwQ2hlY2tlZD10cnVlO1xuICAgICAgICAgICAgICAgICAgICBvYmouaXRlbXMucHVzaChkYXRhW2ldKVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucHVzaChvYmopXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWx0ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldW2tleV0gPT0gZmlsdGVyW2pdLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gZGF0YVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcltqXS5pdGVtcy5wdXNoKGl0ZW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGZpbHRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoudGl0bGUgPSBkYXRhW2ldW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pc0ZvbGQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmlzR3JvdXBDaGVja2VkPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLml0ZW1zID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLml0ZW1zLnB1c2goZGF0YVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhc2VDaGVja0xpc3RGaWx0ZXJEYXRhcyA9IGZpbHRlcjtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5LiL5ouJ5Yi35pawXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgdGhpcy5jYXNlQ2hlY2tMaXN0RmlsdGVyRGF0YXMgPSBbXSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ2hlY2tMaXN0KCk7XG4gICAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTsgLy/lrozmiJDlgZzmraLliqDovb1cbiAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcbiAgICAgICAgfVxuICAgICAgICAvL+S4iuaLieWKoOi9vVxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRDYXNlQ2hlY2tMaXN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey57uP5Yiw5bqV5LqG77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRDYXNlQ2hlY2tMaXN0KCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc2VhcmNoUmVzdWx0ID0gdGhpcy5zZWFyY2hSZXN1bHQ7XG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQucGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlcjtcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZUNoZWNrL0dldENhc2VDaGVja0xpc3QnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQudG90YWxDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gcmVzRGF0YS5kYXRhLnJlc3VsdC50b3RhbENvdW50XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXNlQ2hlY2tMaXN0RGF0YXMgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXNlQ2hlY2tMaXN0RGF0YXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDaGVja0xpc3REYXRhc1tpXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNoZWNrTGlzdERhdGFzW2ldLmlzU2hvd0xpdGlnYW50TGlzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKGNhc2VDaGVja0xpc3REYXRhcywgdGhpcy5jb25kaXRpb25LZXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHt9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMuanNvblJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VDaGVja0xpc3QoKTtcbiAgICAgICAgfTtcbiAgICAgICAgb25TaG93KCkge307XG4gICAgfVxuIl19