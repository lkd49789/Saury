'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _navbar = require('./../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

var _option = require('./../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

var _wxcharts = require('./../../../../utils/cofig/wxcharts.js');

var _wxcharts2 = _interopRequireDefault(_wxcharts);

var _api = require('./../../../../utils/cofig/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientStatistics = function (_wepy$page) {
    _inherits(clientStatistics, _wepy$page);

    function clientStatistics() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientStatistics);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientStatistics.__proto__ || Object.getPrototypeOf(clientStatistics)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" }, "year": { "v-bind:options.sync": "year", "v-bind:index.sync": "yearIndex", "v-bind:twoWayTitle.once": "yearIndex" }, "category": { "v-bind:options.sync": "category", "v-bind:index.sync": "categoryIndex", "v-bind:twoWayTitle.once": "categoryIndex" }, "years": { "v-bind:options.sync": "years", "v-bind:index.sync": "yearsIndex", "v-bind:twoWayTitle.once": "yearsIndex" }, "categorys": { "v-bind:options.sync": "categorys", "v-bind:index.sync": "categorysIndex", "v-bind:twoWayTitle.once": "categorysIndex" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default,
            year: _option2.default,
            category: _option2.default,
            years: _option2.default,
            categorys: _option2.default
        }, _this.data = {
            currentTab: 0,
            navbars: ['增长统计图', '客户年度统计图'],
            year: {
                title: '同比：',
                name: 'year',
                value: [],
                displayText: [],
                warning: false
                // type:'digit',
            },
            yearIndex: 1,
            category: {
                title: '图标类型',
                name: 'category',
                value: ['line', 'column'],
                displayText: ['折线图', '柱状图'],
                warning: false
                // type:'digit',
            },
            categoryIndex: 0,
            years: {
                title: '统计年：',
                name: 'years',
                value: [],
                displayText: [],
                warning: false
                // type:'digit',
            },
            yearsIndex: 0,
            categorys: {
                title: '图标类型',
                name: 'categorys',
                value: ["casecategory", 'category', "region", "origin"],
                displayText: ["案件类别", "客户类型", "客户地区", "客户来源"],
                warning: false
                // type:'digit',
            },
            categorysIndex: 0,
            seriesData: {},
            pieSeriesData: {},
            lineChart: null,
            pieSeriesCount: 0
        }, _this.methods = {
            touchHandler: function touchHandler(e) {
                this.lineChart.showToolTip(e, {
                    format: function format(item, category) {
                        // console.log(e);
                        return category + ' ' + '合计数量：' + item.data;
                    }
                });
                this.lineChart.scrollStart(e);
            },
            bindscroll: function bindscroll(e) {
                this.lineChart.scroll(e);
            },
            touchEnd: function touchEnd(e) {
                this.lineChart.scrollEnd(e);
            }
        }, _this.mixins = [_mixin2.default], _this.watch = {
            currentTab: function currentTab(current) {
                if (current == 0) {
                    this.GetClientTotalStatistics();
                } else if (current == 1) {
                    this.GetYearClientStatistics();
                }
            },
            yearIndex: function yearIndex() {
                this.GetClientTotalStatistics();
            },
            categoryIndex: function categoryIndex() {
                this.GetClientTotalStatistics();
            },
            yearsIndex: function yearsIndex() {
                this.GetYearClientStatistics();
            },
            categorysIndex: function categorysIndex() {
                this.GetYearClientStatistics();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientStatistics, [{
        key: 'GetClientTotalStatistics',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, ClientTotalStatistics, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    comparisonRange: this.year.value[this.yearIndex],
                                    filter: "",
                                    filterName: "",
                                    modeValue: 0,
                                    statisticsMode: 0
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/clientStatistics/GetClientBasicTotal', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    console.log(resData.data.result);
                                    ClientTotalStatistics = resData.data.result;

                                    this.canvas(ClientTotalStatistics.categorys, ClientTotalStatistics.seriesData);
                                    for (index in ClientTotalStatistics.seriesData) {
                                        ClientTotalStatistics.seriesData[index].data;
                                        ClientTotalStatistics.seriesData[index]['sum'] = (0, _api.getSum)(ClientTotalStatistics.seriesData[index].data);
                                    }
                                    this.seriesData = ClientTotalStatistics.seriesData.reverse();
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: resData.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClientTotalStatistics() {
                return _ref2.apply(this, arguments);
            }

            return GetClientTotalStatistics;
        }()
    }, {
        key: 'GetYearClientStatistics',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var data, resData, seriesData, pieSeriesCount, index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = {
                                    Year: this.years.value[this.yearsIndex],
                                    category: this.categorys.value[this.categorysIndex],
                                    categoryName: this.categorys.displayText[this.categorysIndex],
                                    comparisonRange: 2,
                                    filter: "",
                                    filterName: "",
                                    modeValue: 0,
                                    statisticsMode: 0
                                };
                                _context2.next = 3;
                                return _ajax2.default.getData('/api/services/web/clientStatistics/GetClientYearTotal', 'post', data);

                            case 3:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    seriesData = resData.data.result.seriesData;
                                    pieSeriesCount = 0;

                                    for (index in seriesData) {
                                        seriesData[index]['data'] = Number(seriesData[index].value);
                                        seriesData[index].value = null;
                                        pieSeriesCount += seriesData[index].data;
                                    }
                                    this.pieSeriesCount = pieSeriesCount;
                                    if (this.pieSeriesCount == 0) {
                                        seriesData = [{
                                            data: 100,
                                            name: '暂无数据！'
                                        }];
                                        this.pieSeriesData = seriesData;
                                    }
                                    this.pieSeriesData = seriesData;
                                    this.piecanvas(seriesData);
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: resData.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetYearClientStatistics() {
                return _ref3.apply(this, arguments);
            }

            return GetYearClientStatistics;
        }()
    }, {
        key: 'canvas',
        value: function canvas(categories, series) {
            var windowWidth = 320;
            try {
                var res = wx.getSystemInfoSync();
                windowWidth = res.windowWidth;
                console.log(windowWidth);
            } catch (e) {
                // do something when get system info failed
            }
            if (this.category.value[this.categoryIndex] == 'line') {
                var dataLabel = false;
            } else {
                var dataLabel = true;
            }
            this.lineChart = new _wxcharts2.default({
                width: windowWidth,
                height: 300,
                animation: true,
                canvasId: 'clientCanvas',
                type: this.category.value[this.categoryIndex],
                disablePieStroke: false,
                dataLabel: dataLabel,
                legend: true,
                categories: categories,
                series: series,
                dataPointShape: true,
                enableScroll: true
            });
            this.$apply();
        }
    }, {
        key: 'piecanvas',
        value: function piecanvas(series) {
            var windowWidth = 320;
            try {
                var res = wx.getSystemInfoSync();
                windowWidth = res.windowWidth;
                console.log(windowWidth);
            } catch (e) {
                // do something when get system info failed
            }
            new _wxcharts2.default({
                width: windowWidth,
                height: 300,
                animation: true,
                canvasId: 'clientYearsCanvas',
                type: 'pie',
                // disablePieStroke: false,
                dataLabel: true,
                // legend: true,
                series: series
            });
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            for (var i = 6; i > 0; i--) {
                this.year.value.unshift(i);
                this.year.displayText.unshift(i + '年');
            }
            var date = new Date().getFullYear();
            for (var i = 0; i < 10; i++) {
                this.years.value.push(date - i);
                this.years.displayText.push(date - i);
            }
            this.GetClientTotalStatistics();

            // this.canvas();
            this.$apply();
        }
    }]);

    return clientStatistics;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientStatistics , 'pages/modules/myclient/clientDetail/clientStatistics'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudFN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiY2xpZW50U3RhdGlzdGljcyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJuYXZiYXIiLCJ5ZWFyIiwiY2F0ZWdvcnkiLCJ5ZWFycyIsImNhdGVnb3J5cyIsImRhdGEiLCJjdXJyZW50VGFiIiwibmF2YmFycyIsInRpdGxlIiwibmFtZSIsInZhbHVlIiwiZGlzcGxheVRleHQiLCJ3YXJuaW5nIiwieWVhckluZGV4IiwiY2F0ZWdvcnlJbmRleCIsInllYXJzSW5kZXgiLCJjYXRlZ29yeXNJbmRleCIsInNlcmllc0RhdGEiLCJwaWVTZXJpZXNEYXRhIiwibGluZUNoYXJ0IiwicGllU2VyaWVzQ291bnQiLCJtZXRob2RzIiwidG91Y2hIYW5kbGVyIiwiZSIsInNob3dUb29sVGlwIiwiZm9ybWF0IiwiaXRlbSIsInNjcm9sbFN0YXJ0IiwiYmluZHNjcm9sbCIsInNjcm9sbCIsInRvdWNoRW5kIiwic2Nyb2xsRW5kIiwibWl4aW5zIiwid2F0Y2giLCJjdXJyZW50IiwiR2V0Q2xpZW50VG90YWxTdGF0aXN0aWNzIiwiR2V0WWVhckNsaWVudFN0YXRpc3RpY3MiLCJjb21wYXJpc29uUmFuZ2UiLCJmaWx0ZXIiLCJmaWx0ZXJOYW1lIiwibW9kZVZhbHVlIiwic3RhdGlzdGljc01vZGUiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsIkNsaWVudFRvdGFsU3RhdGlzdGljcyIsImNhbnZhcyIsImluZGV4IiwicmV2ZXJzZSIsIiRhcHBseSIsInd4Iiwic2hvd1RvYXN0IiwibWVzc2FnZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJZZWFyIiwiY2F0ZWdvcnlOYW1lIiwiTnVtYmVyIiwicGllY2FudmFzIiwiY2F0ZWdvcmllcyIsInNlcmllcyIsIndpbmRvd1dpZHRoIiwicmVzIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJkYXRhTGFiZWwiLCJ3eENoYXJ0cyIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwiY2FudmFzSWQiLCJ0eXBlIiwiZGlzYWJsZVBpZVN0cm9rZSIsImxlZ2VuZCIsImRhdGFQb2ludFNoYXBlIiwiZW5hYmxlU2Nyb2xsIiwiaSIsInVuc2hpZnQiLCJkYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicHVzaCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLGdCOzs7Ozs7Ozs7Ozs7Ozs4TUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQywyQkFBMEIsYUFBM0IsRUFBeUMsMkJBQTBCLGFBQW5FLEVBQXBCLEVBQXNHLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUEvRyxFQUFnUCxRQUFPLEVBQUMsdUJBQXNCLE1BQXZCLEVBQThCLHFCQUFvQixXQUFsRCxFQUE4RCwyQkFBMEIsV0FBeEYsRUFBdlAsRUFBNFYsWUFBVyxFQUFDLHVCQUFzQixVQUF2QixFQUFrQyxxQkFBb0IsZUFBdEQsRUFBc0UsMkJBQTBCLGVBQWhHLEVBQXZXLEVBQXdkLFNBQVEsRUFBQyx1QkFBc0IsT0FBdkIsRUFBK0IscUJBQW9CLFlBQW5ELEVBQWdFLDJCQUEwQixZQUExRixFQUFoZSxFQUF3a0IsYUFBWSxFQUFDLHVCQUFzQixXQUF2QixFQUFtQyxxQkFBb0IsZ0JBQXZELEVBQXdFLDJCQUEwQixnQkFBbEcsRUFBcGxCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLHdEQURFO0FBRUZDLG9DQUZFO0FBR0ZDLGtDQUhFO0FBSUZDLHNDQUpFO0FBS0ZDLG1DQUxFO0FB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O0FBSVRDLDBCQUFVLG1CQUpEO0FBS1RDLHNCQUFNLEtBTEc7QUFNVDtBQUNBTiwyQkFBVyxJQVBGO0FBUVQ7QUFDQUosd0JBQVFBO0FBVEMsYUFBYjtBQVdBLGlCQUFLWixNQUFMO0FBQ0g7OztpQ0FDUTtBQUNMLGlCQUFLLElBQUkyQixJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQ3hCLHFCQUFLL0UsSUFBTCxDQUFVUyxLQUFWLENBQWdCdUUsT0FBaEIsQ0FBd0JELENBQXhCO0FBQ0EscUJBQUsvRSxJQUFMLENBQVVVLFdBQVYsQ0FBc0JzRSxPQUF0QixDQUE4QkQsSUFBSSxHQUFsQztBQUNIO0FBQ0QsZ0JBQUlFLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQVg7QUFDQSxpQkFBSyxJQUFJSixJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQ3pCLHFCQUFLN0UsS0FBTCxDQUFXTyxLQUFYLENBQWlCMkUsSUFBakIsQ0FBc0JILE9BQU9GLENBQTdCO0FBQ0EscUJBQUs3RSxLQUFMLENBQVdRLFdBQVgsQ0FBdUIwRSxJQUF2QixDQUE0QkgsT0FBT0YsQ0FBbkM7QUFDSDtBQUNELGlCQUFLN0Msd0JBQUw7O0FBRUE7QUFDQSxpQkFBS2tCLE1BQUw7QUFDSDs7OztFQTlPeUNpQyxlQUFLQyxJOztrQkFBOUI3RixnQiIsImZpbGUiOiJjbGllbnRTdGF0aXN0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGltcG9ydCB5ZWFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IHllYXJzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL29wdGlvbic7XG4gICAgaW1wb3J0IGNhdGVnb3J5cyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9vcHRpb24nO1xuICAgIGltcG9ydCB3eENoYXJ0cyBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy93eGNoYXJ0cy5qcyc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgZ2V0U3VtXG4gICAgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsaWVudFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGxhY2VIb2xkZXJJbWFnZVwiOntcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInBsYWNlSG9sZGVyXCJ9LFwibmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZiYXJzLm9uY2VcIjpcIm5hdmJhcnNcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjdXJyZW50VGFiXCJ9LFwieWVhclwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcInllYXJcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJ5ZWFySW5kZXhcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJ5ZWFySW5kZXhcIn0sXCJjYXRlZ29yeVwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImNhdGVnb3J5XCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwiY2F0ZWdvcnlJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNhdGVnb3J5SW5kZXhcIn0sXCJ5ZWFyc1wiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcInllYXJzXCIsXCJ2LWJpbmQ6aW5kZXguc3luY1wiOlwieWVhcnNJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInllYXJzSW5kZXhcIn0sXCJjYXRlZ29yeXNcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJjYXRlZ29yeXNcIixcInYtYmluZDppbmRleC5zeW5jXCI6XCJjYXRlZ29yeXNJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImNhdGVnb3J5c0luZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2UsXG4gICAgICAgICAgICBuYXZiYXIsXG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIGNhdGVnb3J5cyxcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgICAgICAgICBuYXZiYXJzOiBbJ+WinumVv+e7n+iuoeWbvicsICflrqLmiLflubTluqbnu5/orqHlm74nLCBdLFxuICAgICAgICAgICAgeWVhcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5ZCM5q+U77yaJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAneWVhcicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyB0eXBlOidkaWdpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhckluZGV4OiAxLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+Wbvuagh+exu+WeiycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogWydsaW5lJywgJ2NvbHVtbiddLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbJ+aKmOe6v+WbvicsICfmn7Hnirblm74nXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyB0eXBlOidkaWdpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcnlJbmRleDogMCxcbiAgICAgICAgICAgIHllYXJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnu5/orqHlubTvvJonLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd5ZWFycycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyB0eXBlOidkaWdpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhcnNJbmRleDogMCxcbiAgICAgICAgICAgIGNhdGVnb3J5czoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zu+5qCH57G75Z6LJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1wiY2FzZWNhdGVnb3J5XCIsICdjYXRlZ29yeScsIFwicmVnaW9uXCIsIFwib3JpZ2luXCJdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXCLmoYjku7bnsbvliKtcIiwgXCLlrqLmiLfnsbvlnotcIiwgXCLlrqLmiLflnLDljLpcIiwgXCLlrqLmiLfmnaXmupBcIl0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gdHlwZTonZGlnaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3J5c0luZGV4OiAwLFxuICAgICAgICAgICAgc2VyaWVzRGF0YToge30sXG4gICAgICAgICAgICBwaWVTZXJpZXNEYXRhOnt9LFxuICAgICAgICAgICAgbGluZUNoYXJ0OiBudWxsLFxuICAgICAgICAgICAgcGllU2VyaWVzQ291bnQ6MFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG91Y2hIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVDaGFydC5zaG93VG9vbFRpcChlLCB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oaXRlbSwgY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5ICsgJyAnICsgJ+WQiOiuoeaVsOmHj++8micgKyBpdGVtLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0LnNjcm9sbFN0YXJ0KGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRzY3JvbGwoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0LnNjcm9sbChlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoRW5kKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVDaGFydC5zY3JvbGxFbmQoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgY3VycmVudFRhYihjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldENsaWVudFRvdGFsU3RhdGlzdGljcygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0WWVhckNsaWVudFN0YXRpc3RpY3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhckluZGV4KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50VG90YWxTdGF0aXN0aWNzKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yeUluZGV4KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50VG90YWxTdGF0aXN0aWNzKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5ZWFyc0luZGV4KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0WWVhckNsaWVudFN0YXRpc3RpY3MoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yeXNJbmRleCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkdldFllYXJDbGllbnRTdGF0aXN0aWNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgR2V0Q2xpZW50VG90YWxTdGF0aXN0aWNzKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY29tcGFyaXNvblJhbmdlOiB0aGlzLnllYXIudmFsdWVbdGhpcy55ZWFySW5kZXhdLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgICAgICAgICAgICBmaWx0ZXJOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGVWYWx1ZTogMCxcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWNzTW9kZTogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRTdGF0aXN0aWNzL0dldENsaWVudEJhc2ljVG90YWwnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEuZGF0YS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIHZhciBDbGllbnRUb3RhbFN0YXRpc3RpY3MgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzKENsaWVudFRvdGFsU3RhdGlzdGljcy5jYXRlZ29yeXMsIENsaWVudFRvdGFsU3RhdGlzdGljcy5zZXJpZXNEYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDbGllbnRUb3RhbFN0YXRpc3RpY3Muc2VyaWVzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBDbGllbnRUb3RhbFN0YXRpc3RpY3Muc2VyaWVzRGF0YVtpbmRleF0uZGF0YVxuICAgICAgICAgICAgICAgICAgICBDbGllbnRUb3RhbFN0YXRpc3RpY3Muc2VyaWVzRGF0YVtpbmRleF1bJ3N1bSddID0gZ2V0U3VtKENsaWVudFRvdGFsU3RhdGlzdGljcy5zZXJpZXNEYXRhW2luZGV4XS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpZXNEYXRhID0gQ2xpZW50VG90YWxTdGF0aXN0aWNzLnNlcmllc0RhdGEucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNEYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRZZWFyQ2xpZW50U3RhdGlzdGljcygpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFllYXI6IHRoaXMueWVhcnMudmFsdWVbdGhpcy55ZWFyc0luZGV4XSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeXMudmFsdWVbdGhpcy5jYXRlZ29yeXNJbmRleF0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiB0aGlzLmNhdGVnb3J5cy5kaXNwbGF5VGV4dFt0aGlzLmNhdGVnb3J5c0luZGV4XSxcbiAgICAgICAgICAgICAgICBjb21wYXJpc29uUmFuZ2U6IDIsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZpbHRlck5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kZVZhbHVlOiAwLFxuICAgICAgICAgICAgICAgIHN0YXRpc3RpY3NNb2RlOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGE9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2xpZW50U3RhdGlzdGljcy9HZXRDbGllbnRZZWFyVG90YWwnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICAgICAgICAgICAgdmFyIHNlcmllc0RhdGE9cmVzRGF0YS5kYXRhLnJlc3VsdC5zZXJpZXNEYXRhO1xuICAgICAgICAgICAgICAgIHZhciBwaWVTZXJpZXNDb3VudD0wXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBzZXJpZXNEYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzRGF0YVtpbmRleF1bJ2RhdGEnXT0gTnVtYmVyKHNlcmllc0RhdGFbaW5kZXhdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzRGF0YVtpbmRleF0udmFsdWU9bnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcGllU2VyaWVzQ291bnQrPXNlcmllc0RhdGFbaW5kZXhdLmRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB0aGlzLnBpZVNlcmllc0NvdW50PXBpZVNlcmllc0NvdW50O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucGllU2VyaWVzQ291bnQ9PTApe1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXNEYXRhPVt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOjEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6J+aaguaXoOaVsOaNru+8gSdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB0aGlzLnBpZVNlcmllc0RhdGE9c2VyaWVzRGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5waWVTZXJpZXNEYXRhPXNlcmllc0RhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjYW52YXMoc2VyaWVzRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNEYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyhjYXRlZ29yaWVzLCBzZXJpZXMpIHtcbiAgICAgICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IDMyMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93V2lkdGgpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdoZW4gZ2V0IHN5c3RlbSBpbmZvIGZhaWxlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnkudmFsdWVbdGhpcy5jYXRlZ29yeUluZGV4XSA9PSAnbGluZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUxhYmVsID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGFMYWJlbCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGluZUNoYXJ0ID0gbmV3IHd4Q2hhcnRzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbnZhc0lkOiAnY2xpZW50Q2FudmFzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmNhdGVnb3J5LnZhbHVlW3RoaXMuY2F0ZWdvcnlJbmRleF0sXG4gICAgICAgICAgICAgICAgZGlzYWJsZVBpZVN0cm9rZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsOiBkYXRhTGFiZWwsXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgICAgICAgICAgICAgZGF0YVBvaW50U2hhcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW5hYmxlU2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgcGllY2FudmFzKHNlcmllcykge1xuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gMzIwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3dXaWR0aClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBzb21ldGhpbmcgd2hlbiBnZXQgc3lzdGVtIGluZm8gZmFpbGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXcgd3hDaGFydHMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgY2FudmFzSWQ6ICdjbGllbnRZZWFyc0NhbnZhcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZVBpZVN0cm9rZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIGxlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZXJpZXM6IHNlcmllcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSA2OyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyLnZhbHVlLnVuc2hpZnQoaSk7XG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyLmRpc3BsYXlUZXh0LnVuc2hpZnQoaSArICflubQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ZWFycy52YWx1ZS5wdXNoKGRhdGUgLSBpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXJzLmRpc3BsYXlUZXh0LnB1c2goZGF0ZSAtIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRUb3RhbFN0YXRpc3RpY3MoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMoKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=