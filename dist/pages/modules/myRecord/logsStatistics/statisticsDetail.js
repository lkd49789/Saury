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

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statisticsDetail = function (_wepy$page) {
    _inherits(statisticsDetail, _wepy$page);

    function statisticsDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, statisticsDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = statisticsDetail.__proto__ || Object.getPrototypeOf(statisticsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            userAvatar: '',
            nowTime: '',
            endDate: '',
            startDate: '',
            WorklogsForScheduleData: []
        }, _this.methods = {
            bindDateChange: function bindDateChange(e) {
                this.nowTime = e.detail.value;
                console.log(e.detail.value);
                this.getStartDate(e.detail.value);
                this.getEndDate(e.detail.value);
                this.GetWorklogsForSchedule();
                this.$apply();
            },
            tostaticsRecord: function tostaticsRecord() {
                wx.navigateTo({ url: './statisticsCovers/statisticsRecord' });
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(statisticsDetail, [{
        key: 'GetWorklogsForSchedule',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, WorklogsForScheduleData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    year: 2018,
                                    month: 10,
                                    // EmployeeId: this.$parent.global.userInfo.id,
                                    pageNumber: 1,
                                    pageSize: 10
                                    // workTime:{
                                    //     endDate: this.endDate,
                                    //     startDate: this.startDate
                                    // }
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/worklogAnalysis/GetWorklogStatistics', 'post', data);

                            case 3:
                                WorklogsForScheduleData = _context.sent;
                                _context.t0 = WorklogsForScheduleData.statusCode;
                                _context.next = _context.t0 === 200 ? 7 : _context.t0 === 403 ? 10 : _context.t0 === 500 ? 15 : 19;
                                break;

                            case 7:
                                if (WorklogsForScheduleData.data.result.items.length !== 0) {
                                    this.WorklogsForScheduleData = WorklogsForScheduleData.data.result.items;
                                    this.placeHolder.placeHolderShow = false;
                                    console.log(WorklogsForScheduleData.data.result.items);
                                } else {
                                    console.log('数据为空');
                                    this.placeHolder.placeHolderImageIndex = 0;
                                    this.placeHolder.placeHolderShow = true;
                                }
                                this.$apply();
                                return _context.abrupt('break', 20);

                            case 10:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 20);

                            case 15:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 19:
                                return _context.abrupt('break', 20);

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetWorklogsForSchedule() {
                return _ref2.apply(this, arguments);
            }

            return GetWorklogsForSchedule;
        }()
    }, {
        key: 'getEndDate',
        value: function getEndDate(date) {
            var month = new Date(date).getMonth() + 1;
            var year = new Date(date).getFullYear();
            month += 1;
            if (month > 12) {
                year += 2;
                month = 1;
            }
            this.endDate = year + '-' + this.formatNumber(month);
        }
    }, {
        key: 'getStartDate',
        value: function getStartDate(date) {
            var month = new Date(date).getMonth() + 1;
            var year = new Date(date).getFullYear();
            month = month - 1;
            if (month === 0) {
                year -= 1;
                month = 12;
            }
            console.log(month);
            this.startDate = year + '-' + this.formatNumber(month);
        }
    }, {
        key: 'getNowTime',
        value: function getNowTime() {
            var date = new Date();
            this.getStartDate(date);
            this.getEndDate(date);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = month < 10 ? '0' + month : month;
            var day = date.getDate();
            day = day < 10 ? '0' + day : day;
            var nowTime = year + '-' + month;
            this.nowTime = nowTime;
            this.$apply();
        }
    }, {
        key: 'formatNumber',
        value: function formatNumber(num) {
            num = num.toString();
            return num[1] ? num : '0' + num;
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.userAvatar = this.$parent.global.userInfo.userAvatar;
            this.getNowTime();
            this.GetWorklogsForSchedule();
            this.$apply();
        }
    }]);

    return statisticsDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(statisticsDetail , 'pages/modules/myRecord/logsStatistics/statisticsDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NEZXRhaWwuanMiXSwibmFtZXMiOlsic3RhdGlzdGljc0RldGFpbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBsYWNlSG9sZGVySW1hZ2UiLCJkYXRhIiwidXNlckF2YXRhciIsIm5vd1RpbWUiLCJlbmREYXRlIiwic3RhcnREYXRlIiwiV29ya2xvZ3NGb3JTY2hlZHVsZURhdGEiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhcnREYXRlIiwiZ2V0RW5kRGF0ZSIsIkdldFdvcmtsb2dzRm9yU2NoZWR1bGUiLCIkYXBwbHkiLCJ0b3N0YXRpY3NSZWNvcmQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJtaXhpbnMiLCJ5ZWFyIiwibW9udGgiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJhamF4IiwiZ2V0RGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJTaG93IiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwiZGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZm9ybWF0TnVtYmVyIiwiZGF5IiwiZ2V0RGF0ZSIsIm51bSIsInRvU3RyaW5nIiwiJHBhcmVudCIsImdsb2JhbCIsInVzZXJJbmZvIiwiZ2V0Tm93VGltZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGdCOzs7Ozs7Ozs7Ozs7Ozs4TUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwyQkFBMEIsYUFBN0MsRUFBcEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyx3QkFBVyxFQURSO0FBRUhDLHFCQUFRLEVBRkw7QUFHSEMscUJBQVEsRUFITDtBQUlIQyx1QkFBVSxFQUpQO0FBS0hDLHFDQUF3QjtBQUxyQixTLFFBT1BDLE8sR0FBVTtBQUNOQywwQkFETSwwQkFDU0MsQ0FEVCxFQUNXO0FBQ2IscUJBQUtOLE9BQUwsR0FBYU0sRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNBQyx3QkFBUUMsR0FBUixDQUFZSixFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0EscUJBQUtHLFlBQUwsQ0FBa0JMLEVBQUVDLE1BQUYsQ0FBU0MsS0FBM0I7QUFDQSxxQkFBS0ksVUFBTCxDQUFnQk4sRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNBLHFCQUFLSyxzQkFBTDtBQUNBLHFCQUFLQyxNQUFMO0FBQ0gsYUFSSztBQVNOQywyQkFUTSw2QkFTVztBQUNiQyxtQkFBR0MsVUFBSCxDQUFjLEVBQUVDLEtBQUsscUNBQVAsRUFBZDtBQUNIO0FBWEssUyxRQWFWQyxNLEdBQVMsQ0FBQ0EsZUFBRCxDOzs7Ozs7Ozs7Ozs7QUFFRHJCLG9DLEdBQUs7QUFDTHNCLDBDQUFNLElBREQ7QUFFTEMsMkNBQU8sRUFGRjtBQUdMO0FBQ0FDLGdEQUFZLENBSlA7QUFLTEMsOENBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQVRLLGlDOzt1Q0FXeUJDLGVBQUtDLE9BQUwsQ0FDOUIsd0RBRDhCLEVBRTlCLE1BRjhCLEVBRzlCM0IsSUFIOEIsQzs7O0FBQTlCSyx1RDs4Q0FLSUEsd0JBQXdCdUIsVTtnRUFDdkIsRyx1QkFZQyxHLHdCQU1ELEc7Ozs7QUFqQkQsb0NBQUd2Qix3QkFBd0JMLElBQXhCLENBQTZCNkIsTUFBN0IsQ0FBb0NDLEtBQXBDLENBQTBDQyxNQUExQyxLQUFtRCxDQUF0RCxFQUF3RDtBQUNwRCx5Q0FBSzFCLHVCQUFMLEdBQTZCQSx3QkFBd0JMLElBQXhCLENBQTZCNkIsTUFBN0IsQ0FBb0NDLEtBQWpFO0FBQ0EseUNBQUtFLFdBQUwsQ0FBaUJDLGVBQWpCLEdBQWlDLEtBQWpDO0FBQ0F0Qiw0Q0FBUUMsR0FBUixDQUFZUCx3QkFBd0JMLElBQXhCLENBQTZCNkIsTUFBN0IsQ0FBb0NDLEtBQWhEO0FBQ0gsaUNBSkQsTUFJSztBQUNEbkIsNENBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EseUNBQUtvQixXQUFMLENBQWlCRSxxQkFBakIsR0FBdUMsQ0FBdkM7QUFDQSx5Q0FBS0YsV0FBTCxDQUFpQkMsZUFBakIsR0FBaUMsSUFBakM7QUFDSDtBQUNBLHFDQUFLakIsTUFBTDs7OztBQUdHTCx3Q0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxxQ0FBS29CLFdBQUwsQ0FBaUJFLHFCQUFqQixHQUF1QyxDQUF2QztBQUNBLHFDQUFLRixXQUFMLENBQWlCQyxlQUFqQixHQUFpQyxJQUFqQztBQUNDLHFDQUFLakIsTUFBTDs7OztBQUdMTCx3Q0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxxQ0FBS29CLFdBQUwsQ0FBaUJFLHFCQUFqQixHQUF1QyxDQUF2QztBQUNBLHFDQUFLRixXQUFMLENBQWlCQyxlQUFqQixHQUFpQyxJQUFqQztBQUNDLHFDQUFLakIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUtGbUIsSSxFQUFLO0FBQ1osZ0JBQUlaLFFBQU0sSUFBSWEsSUFBSixDQUFTRCxJQUFULEVBQWVFLFFBQWYsS0FBNEIsQ0FBdEM7QUFDQSxnQkFBSWYsT0FBTyxJQUFJYyxJQUFKLENBQVNELElBQVQsRUFBZUcsV0FBZixFQUFYO0FBQ0FmLHFCQUFPLENBQVA7QUFDQSxnQkFBR0EsUUFBTSxFQUFULEVBQVk7QUFDUkQsd0JBQU0sQ0FBTjtBQUNBQyx3QkFBTSxDQUFOO0FBQ0g7QUFDRCxpQkFBS3BCLE9BQUwsR0FBYW1CLE9BQUssR0FBTCxHQUFTLEtBQUtpQixZQUFMLENBQWtCaEIsS0FBbEIsQ0FBdEI7QUFDSDs7O3FDQUNZWSxJLEVBQUs7QUFDZCxnQkFBSVosUUFBTSxJQUFJYSxJQUFKLENBQVNELElBQVQsRUFBZUUsUUFBZixLQUEwQixDQUFwQztBQUNBLGdCQUFJZixPQUFPLElBQUljLElBQUosQ0FBU0QsSUFBVCxFQUFlRyxXQUFmLEVBQVg7QUFDRGYsb0JBQU1BLFFBQU0sQ0FBWjtBQUNDLGdCQUFHQSxVQUFRLENBQVgsRUFBYTtBQUNURCx3QkFBTSxDQUFOO0FBQ0FDLHdCQUFNLEVBQU47QUFDSDtBQUNEWixvQkFBUUMsR0FBUixDQUFZVyxLQUFaO0FBQ0EsaUJBQUtuQixTQUFMLEdBQWVrQixPQUFLLEdBQUwsR0FBUyxLQUFLaUIsWUFBTCxDQUFrQmhCLEtBQWxCLENBQXhCO0FBQ0g7OztxQ0FDVztBQUNSLGdCQUFJWSxPQUFLLElBQUlDLElBQUosRUFBVDtBQUNBLGlCQUFLdkIsWUFBTCxDQUFrQnNCLElBQWxCO0FBQ0EsaUJBQUtyQixVQUFMLENBQWdCcUIsSUFBaEI7QUFDQSxnQkFBSWIsT0FBT2EsS0FBS0csV0FBTCxFQUFYO0FBQ0EsZ0JBQUlmLFFBQVFZLEtBQUtFLFFBQUwsS0FBa0IsQ0FBOUI7QUFDQWQsb0JBQU1BLFFBQU0sRUFBTixHQUFTLE1BQUlBLEtBQWIsR0FBbUJBLEtBQXpCO0FBQ0EsZ0JBQUlpQixNQUFNTCxLQUFLTSxPQUFMLEVBQVY7QUFDQUQsa0JBQUlBLE1BQUksRUFBSixHQUFPLE1BQUlBLEdBQVgsR0FBZUEsR0FBbkI7QUFDQSxnQkFBSXRDLFVBQVFvQixPQUFLLEdBQUwsR0FBU0MsS0FBckI7QUFDQSxpQkFBS3JCLE9BQUwsR0FBYUEsT0FBYjtBQUNBLGlCQUFLYyxNQUFMO0FBQ0g7OztxQ0FDWTBCLEcsRUFBSTtBQUNiQSxrQkFBSUEsSUFBSUMsUUFBSixFQUFKO0FBQ0EsbUJBQU9ELElBQUksQ0FBSixJQUFPQSxHQUFQLEdBQVcsTUFBSUEsR0FBdEI7QUFDSDs7O2lDQUNRO0FBQ0wsaUJBQUt6QyxVQUFMLEdBQWdCLEtBQUsyQyxPQUFMLENBQWFDLE1BQWIsQ0FBb0JDLFFBQXBCLENBQTZCN0MsVUFBN0M7QUFDQSxpQkFBSzhDLFVBQUw7QUFDQSxpQkFBS2hDLHNCQUFMO0FBQ0EsaUJBQUtDLE1BQUw7QUFDSDs7OztFQXBIeUNnQyxlQUFLQyxJOztrQkFBOUJ2RCxnQiIsImZpbGUiOiJzdGF0aXN0aWNzRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcydcbiAgICBpbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL21peGluLmpzJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXRpc3RpY3NEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGxhY2VIb2xkZXJJbWFnZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2VIb2xkZXIuc3luY1wiOlwicGxhY2VIb2xkZXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgcGxhY2VIb2xkZXJJbWFnZVxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdXNlckF2YXRhcjonJyxcbiAgICAgICAgICAgIG5vd1RpbWU6JycsXG4gICAgICAgICAgICBlbmREYXRlOicnLFxuICAgICAgICAgICAgc3RhcnREYXRlOicnLFxuICAgICAgICAgICAgV29ya2xvZ3NGb3JTY2hlZHVsZURhdGE6W11cbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmREYXRlQ2hhbmdlKGUpe1xuICAgICAgICAgICAgICAgIHRoaXMubm93VGltZT1lLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmdldFN0YXJ0RGF0ZShlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFbmREYXRlKGUuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldFdvcmtsb2dzRm9yU2NoZWR1bGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvc3RhdGljc1JlY29yZCgpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL3N0YXRpc3RpY3NDb3ZlcnMvc3RhdGlzdGljc1JlY29yZCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG1peGlucyA9IFttaXhpbnMgXTtcbiAgICAgICBhc3luYyBHZXRXb3JrbG9nc0ZvclNjaGVkdWxlKCl7XG4gICAgICAgICAgICB2YXIgZGF0YT17XG4gICAgICAgICAgICAgICAgeWVhcjogMjAxOCxcbiAgICAgICAgICAgICAgICBtb250aDogMTAsXG4gICAgICAgICAgICAgICAgLy8gRW1wbG95ZWVJZDogdGhpcy4kcGFyZW50Lmdsb2JhbC51c2VySW5mby5pZCxcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICAvLyB3b3JrVGltZTp7XG4gICAgICAgICAgICAgICAgLy8gICAgIGVuZERhdGU6IHRoaXMuZW5kRGF0ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBXb3JrbG9nc0ZvclNjaGVkdWxlRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2dBbmFseXNpcy9HZXRXb3JrbG9nU3RhdGlzdGljcycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHN3aXRjaCAoV29ya2xvZ3NGb3JTY2hlZHVsZURhdGEuc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgICAgICBpZihXb3JrbG9nc0ZvclNjaGVkdWxlRGF0YS5kYXRhLnJlc3VsdC5pdGVtcy5sZW5ndGghPT0wKXsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV29ya2xvZ3NGb3JTY2hlZHVsZURhdGE9V29ya2xvZ3NGb3JTY2hlZHVsZURhdGEuZGF0YS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdz1mYWxzZTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFdvcmtsb2dzRm9yU2NoZWR1bGVEYXRhLmRhdGEucmVzdWx0Lml0ZW1zKSA7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruS4uuepuicpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4PTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdz10cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oKo5rKh5pyJ5p2D6ZmQJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXg9MztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93PXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleD0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdz10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0RW5kRGF0ZShkYXRlKXtcbiAgICAgICAgICAgIHZhciBtb250aD1uZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIG1vbnRoKz0xXG4gICAgICAgICAgICBpZihtb250aD4xMil7XG4gICAgICAgICAgICAgICAgeWVhcis9MjtcbiAgICAgICAgICAgICAgICBtb250aD0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZERhdGU9eWVhcisnLScrdGhpcy5mb3JtYXROdW1iZXIobW9udGgpIFxuICAgICAgICB9XG4gICAgICAgIGdldFN0YXJ0RGF0ZShkYXRlKXtcbiAgICAgICAgICAgIHZhciBtb250aD1uZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpKzE7XG4gICAgICAgICAgICB2YXIgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgIG1vbnRoPW1vbnRoLTFcbiAgICAgICAgICAgIGlmKG1vbnRoPT09MCl7XG4gICAgICAgICAgICAgICAgeWVhci09MTtcbiAgICAgICAgICAgICAgICBtb250aD0xMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cobW9udGgpXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZT15ZWFyKyctJyt0aGlzLmZvcm1hdE51bWJlcihtb250aCkgXG4gICAgICAgIH1cbiAgICAgICAgZ2V0Tm93VGltZSgpe1xuICAgICAgICAgICAgdmFyIGRhdGU9bmV3IERhdGUoKVxuICAgICAgICAgICAgdGhpcy5nZXRTdGFydERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmdldEVuZERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICBtb250aD1tb250aDwxMD8nMCcrbW9udGg6bW9udGg7XG4gICAgICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgIGRheT1kYXk8MTA/JzAnK2RheTpkYXk7XG4gICAgICAgICAgICB2YXIgbm93VGltZT15ZWFyKyctJyttb250aDtcbiAgICAgICAgICAgIHRoaXMubm93VGltZT1ub3dUaW1lO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXROdW1iZXIobnVtKXtcbiAgICAgICAgICAgIG51bT1udW0udG9TdHJpbmcoKVxuICAgICAgICAgICAgcmV0dXJuIG51bVsxXT9udW06JzAnK251bVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckF2YXRhcj10aGlzLiRwYXJlbnQuZ2xvYmFsLnVzZXJJbmZvLnVzZXJBdmF0YXI7XG4gICAgICAgICAgICB0aGlzLmdldE5vd1RpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuR2V0V29ya2xvZ3NGb3JTY2hlZHVsZSgpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==