'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var schedule = function (_wepy$page) {
    _inherits(schedule, _wepy$page);

    function schedule() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, schedule);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = schedule.__proto__ || Object.getPrototypeOf(schedule)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            viewHeight: 0,
            lastY: 0,
            listHeight: 0.75,
            startDate: '',
            endDate: '',
            nowDate_Year: '',
            nowDate_Month: '',
            nowDate_Day: '',
            mouthCh: '',
            date: ['日', '一', '二', '三', '四', '五', '六'],
            isToday: '',
            dateArr: [],
            dateArrSmall: '',
            ifDateSmall: true,
            schedule_data: []
        }, _this.components = {}, _this.methods = {
            bindDateChange: function bindDateChange(e) {
                this.nowDate_Year = e.detail.value.split('-')[0];
                this.nowDate_Month = e.detail.value.split('-')[1];
                this.mouthC(this.nowDate_Month);
                this.dateInit(this.nowDate_Year, this.nowDate_Month);
                this.isToday = this.nowDate_Year + '-' + this.nowDate_Month + '-01';
                for (var i = 0; i < this.dateArr.length; i++) {
                    if (this.dateArr[i].isToday == this.isToday) {
                        this.dateArrSmall = this.dateArr.slice(parseInt(i / 7) * 7, parseInt(i / 7) * 7 + 7);
                    }
                }
                this.GetScheduleCenterForCalendar(this.isToday);
                if (this.ifDateSmall) {
                    this.ifDateSmall = false;
                    this.listHeight = 0.5;
                }
                this.$apply();
            },
            handletouchtart: function handletouchtart(event) {
                this.lastY = event.touches[0].pageY;
                this.$apply();
            },
            handletouchmove: function handletouchmove(event) {
                var currentY = event.touches[0].pageY;
                var ty = currentY - this.lastY;
                if (Math.abs(ty) > 50) {
                    if (ty < 0) {
                        this.listHeight = 0.75;
                        this.ifDateSmall = true;
                    } else if (ty >= 0) {
                        this.listHeight = 0.5;
                        this.ifDateSmall = false;
                    }
                    this.lastY = currentY;
                    this.$apply();
                }
            },
            getToday: function getToday(isToday) {
                this.isToday = isToday;
                for (var i = 0; i < this.dateArr.length; i++) {
                    if (this.dateArr[i].isToday == this.isToday) {
                        this.dateArrSmall = this.dateArr.slice(parseInt(i / 7) * 7, parseInt(i / 7) * 7 + 7);
                    }
                }
                this.GetScheduleCenterForCalendar(isToday);
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            // ty(value) {
            // }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(schedule, [{
        key: 'getViewPoint',
        value: function getViewPoint() {
            var _this2 = this;

            wx.getSystemInfo({
                success: function success(res) {
                    var clientHeight = res.windowHeight;
                    var clientWidth = res.windowWidth;
                    var ratio = 750 / clientWidth;
                    var height = clientHeight * ratio;
                    _this2.viewHeight = height;
                    _this2.$apply();
                }
            });
        }
    }, {
        key: 'mouthC',
        value: function mouthC(mouth) {
            mouth = mouth.toString();
            switch (mouth) {
                case '01':
                    this.mouthCh = '一';
                    break;
                case '02':
                    this.mouthCh = '二';
                    break;
                case '03':
                    this.mouthCh = '三';
                    break;
                case '04':
                    this.mouthCh = '四';
                    break;
                case '05':
                    this.mouthCh = '五';
                    break;
                case '06':
                    this.mouthCh = '六';
                    break;
                case '07':
                    this.mouthCh = '七';
                    break;
                case '08':
                    this.mouthCh = '八';
                    break;
                case '09':
                    this.mouthCh = '九';
                    break;
                case '10':
                    this.mouthCh = '十';
                    break;
                case '11':
                    this.mouthCh = '十一';
                    break;
                case '12':
                    this.mouthCh = '十二';
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'dateInit',
        value: function dateInit(setYear, setMonth) {
            var dateArr = [];
            var arrLen = 0;
            var now = setYear ? new Date(setYear, setMonth) : new Date();
            var year = setYear || now.getFullYear();
            var month = setMonth || now.getMonth();
            var startWeek = new Date(year + '/' + month + '/' + 1).getDay();
            var dayNums = new Date(parseInt(year), parseInt(month), 0).getDate();
            arrLen = startWeek + dayNums;
            var obj = {};
            var num = 0;
            for (var i = 0; i < arrLen; i++) {
                if (i >= startWeek) {
                    num = i - startWeek + 1;
                    if (num < 10) {
                        num = '0' + num;
                    }
                    obj = {
                        isToday: '' + year + '-' + month + '-' + num,
                        dateNum: num
                    };
                } else {
                    obj = {};
                }
                dateArr[i] = obj;
            }
            this.dateArr = dateArr;
            for (var i = 0; i < this.dateArr.length; i++) {
                if (this.dateArr[i].isToday == this.isToday) {
                    this.dateArrSmall = this.dateArr.slice(parseInt(i / 7) * 7, parseInt(i / 7) * 7 + 7);
                }
            }
            this.$apply();
        }
    }, {
        key: 'GetScheduleCenterForCalendar',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(now_day) {
                var date, startDate, endDate, timeStamp, timeStamp2, data, resData, screeningData, i, timeStart, timeEnd;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.schedule_data = [];
                                // console.log(now_day);
                                wx.showLoading({
                                    title: '加载中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                date = Date.parse(new Date(now_day));
                                startDate = new Date(date - 24 * 3600000);
                                endDate = new Date(date + 24 * 3600000);
                                timeStamp = new Date(this.isToday).getTime() - 28800000;
                                timeStamp2 = new Date(this.isToday).getTime() + 57600000;
                                data = {
                                    CaseId: "",
                                    CaseName: "",
                                    ClientId: "",
                                    ClientName: "",
                                    EndTime: '',
                                    KeyWord: "",
                                    StartTime: '',
                                    category: 'Schedule',
                                    creationTime: {
                                        startDate: "",
                                        endDate: ""
                                    },
                                    dataNumber: 100,
                                    dateRange: {
                                        startDate: startDate,
                                        endDate: endDate
                                    },
                                    isCurrent: true
                                };
                                _context.next = 10;
                                return _ajax2.default.getData('/api/services/web/schedule/GetScheduleCenterForCalendar', 'post', data);

                            case 10:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 14 : _context.t0 === 403 ? 16 : _context.t0 === 500 ? 20 : 24;
                                break;

                            case 14:
                                if (resData.data.result.schedules.length !== 0) {
                                    screeningData = [];

                                    for (i in resData.data.result.schedules) {
                                        timeStart = new Date(resData.data.result.schedules[i].start).getTime();
                                        timeEnd = new Date(resData.data.result.schedules[i].end).getTime();

                                        if (!(timeStart > timeStamp2 || timeEnd < timeStamp)) {
                                            screeningData.push(resData.data.result.schedules[i]);
                                        }
                                    }
                                    console.log(screeningData);
                                    if (screeningData.length !== 0) {
                                        this.schedule_data = screeningData;
                                    } else {
                                        // this.placeHolder.placeHolderImageIndex = 0;
                                        // this.placeHolder.placeHolderShow = true;
                                    }
                                } else {
                                        // this.placeHolder.placeHolderImageIndex = 0;
                                        // this.placeHolder.placeHolderShow = true;
                                    }
                                return _context.abrupt('break', 25);

                            case 16:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 25);

                            case 20:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 25);

                            case 24:
                                return _context.abrupt('break', 25);

                            case 25:
                                this.$apply();

                            case 26:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetScheduleCenterForCalendar(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetScheduleCenterForCalendar;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var now_Date = new Date();
            this.nowDate_Year = now_Date.getFullYear();
            this.nowDate_Month = now_Date.getMonth() + 1;
            this.startDate = now_Date.getFullYear() - 50;
            this.endDate = now_Date.getFullYear() + 50;
            if (this.nowDate_Month < 10) {
                this.nowDate_Month = '' + 0 + this.nowDate_Month;
            }
            this.nowDate_Day = now_Date.getDate();
            if (this.nowDate_Day < 10) {
                this.nowDate_Day = '' + 0 + this.nowDate_Day;
            }
            this.isToday = this.nowDate_Year + '-' + this.nowDate_Month + '-' + this.nowDate_Day;
            this.mouthC(this.nowDate_Month);
            this.dateInit(this.nowDate_Year, this.nowDate_Month);
            this.GetScheduleCenterForCalendar(now_Date);
            this.getViewPoint();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return schedule;
}(_wepy2.default.page);

exports.default = schedule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15U2NoZWR1bGUuanMiXSwibmFtZXMiOlsic2NoZWR1bGUiLCJkYXRhIiwidmlld0hlaWdodCIsImxhc3RZIiwibGlzdEhlaWdodCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJub3dEYXRlX1llYXIiLCJub3dEYXRlX01vbnRoIiwibm93RGF0ZV9EYXkiLCJtb3V0aENoIiwiZGF0ZSIsImlzVG9kYXkiLCJkYXRlQXJyIiwiZGF0ZUFyclNtYWxsIiwiaWZEYXRlU21hbGwiLCJzY2hlZHVsZV9kYXRhIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJiaW5kRGF0ZUNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInNwbGl0IiwibW91dGhDIiwiZGF0ZUluaXQiLCJpIiwibGVuZ3RoIiwic2xpY2UiLCJwYXJzZUludCIsIkdldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXIiLCIkYXBwbHkiLCJoYW5kbGV0b3VjaHRhcnQiLCJldmVudCIsInRvdWNoZXMiLCJwYWdlWSIsImhhbmRsZXRvdWNobW92ZSIsImN1cnJlbnRZIiwidHkiLCJNYXRoIiwiYWJzIiwiZ2V0VG9kYXkiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid3giLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImNsaWVudEhlaWdodCIsIndpbmRvd0hlaWdodCIsImNsaWVudFdpZHRoIiwid2luZG93V2lkdGgiLCJyYXRpbyIsImhlaWdodCIsIm1vdXRoIiwidG9TdHJpbmciLCJzZXRZZWFyIiwic2V0TW9udGgiLCJhcnJMZW4iLCJub3ciLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsInN0YXJ0V2VlayIsImdldERheSIsImRheU51bXMiLCJnZXREYXRlIiwib2JqIiwibnVtIiwiZGF0ZU51bSIsIm5vd19kYXkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInBhcnNlIiwidGltZVN0YW1wIiwiZ2V0VGltZSIsInRpbWVTdGFtcDIiLCJDYXNlSWQiLCJDYXNlTmFtZSIsIkNsaWVudElkIiwiQ2xpZW50TmFtZSIsIkVuZFRpbWUiLCJLZXlXb3JkIiwiU3RhcnRUaW1lIiwiY2F0ZWdvcnkiLCJjcmVhdGlvblRpbWUiLCJkYXRhTnVtYmVyIiwiZGF0ZVJhbmdlIiwiaXNDdXJyZW50IiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsInNjaGVkdWxlcyIsInNjcmVlbmluZ0RhdGEiLCJ0aW1lU3RhcnQiLCJzdGFydCIsInRpbWVFbmQiLCJlbmQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInBsYWNlSG9sZGVyIiwicGxhY2VIb2xkZXJJbWFnZUluZGV4IiwicGxhY2VIb2xkZXJTaG93Iiwibm93X0RhdGUiLCJnZXRWaWV3UG9pbnQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsSSxHQUFPO0FBQ0hDLHdCQUFZLENBRFQ7QUFFSEMsbUJBQU8sQ0FGSjtBQUdIQyx3QkFBWSxJQUhUO0FBSUhDLHVCQUFXLEVBSlI7QUFLSEMscUJBQVMsRUFMTjtBQU1IQywwQkFBYyxFQU5YO0FBT0hDLDJCQUFlLEVBUFo7QUFRSEMseUJBQWEsRUFSVjtBQVNIQyxxQkFBUyxFQVROO0FBVUhDLGtCQUFNLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBVkg7QUFXSEMscUJBQVMsRUFYTjtBQVlIQyxxQkFBUyxFQVpOO0FBYUhDLDBCQUFjLEVBYlg7QUFjSEMseUJBQWEsSUFkVjtBQWVIQywyQkFBZTtBQWZaLFMsUUFpQlBDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNOQywwQkFETSwwQkFDU0MsQ0FEVCxFQUNZO0FBQ2QscUJBQUtiLFlBQUwsR0FBb0JhLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFl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S0FBS0wsWUFBTCxHQUFvQixHQUFwQixHQUEwQixLQUFLQyxhQUEvQixHQUErQyxHQUEvQyxHQUFxRCxLQUFLQyxXQUF6RTtBQUNBLGlCQUFLZSxNQUFMLENBQVksS0FBS2hCLGFBQWpCO0FBQ0EsaUJBQUtpQixRQUFMLENBQWMsS0FBS2xCLFlBQW5CLEVBQWlDLEtBQUtDLGFBQXRDO0FBQ0EsaUJBQUtzQiw0QkFBTCxDQUFrQ2dGLFFBQWxDO0FBQ0EsaUJBQUtDLFlBQUw7QUFDQSxpQkFBS2hGLE1BQUw7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUFuUXVCaUYsZUFBS0MsSTs7a0JBQXRCakgsUSIsImZpbGUiOiJteVNjaGVkdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NoZWR1bGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdmlld0hlaWdodDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAwLFxuICAgICAgICAgICAgbGlzdEhlaWdodDogMC43NSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJycsXG4gICAgICAgICAgICBlbmREYXRlOiAnJyxcbiAgICAgICAgICAgIG5vd0RhdGVfWWVhcjogJycsXG4gICAgICAgICAgICBub3dEYXRlX01vbnRoOiAnJyxcbiAgICAgICAgICAgIG5vd0RhdGVfRGF5OiAnJyxcbiAgICAgICAgICAgIG1vdXRoQ2g6ICcnLFxuICAgICAgICAgICAgZGF0ZTogWyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXSxcbiAgICAgICAgICAgIGlzVG9kYXk6ICcnLFxuICAgICAgICAgICAgZGF0ZUFycjogW10sXG4gICAgICAgICAgICBkYXRlQXJyU21hbGw6ICcnLFxuICAgICAgICAgICAgaWZEYXRlU21hbGw6IHRydWUsXG4gICAgICAgICAgICBzY2hlZHVsZV9kYXRhOiBbXVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dEYXRlX1llYXIgPSBlLmRldGFpbC52YWx1ZS5zcGxpdCgnLScpWzBdXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dEYXRlX01vbnRoID0gZS5kZXRhaWwudmFsdWUuc3BsaXQoJy0nKVsxXVxuICAgICAgICAgICAgICAgIHRoaXMubW91dGhDKHRoaXMubm93RGF0ZV9Nb250aClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVJbml0KHRoaXMubm93RGF0ZV9ZZWFyLCB0aGlzLm5vd0RhdGVfTW9udGgpXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RvZGF5ID0gdGhpcy5ub3dEYXRlX1llYXIgKyAnLScgKyB0aGlzLm5vd0RhdGVfTW9udGggKyAnLTAxJztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRlQXJyW2ldLmlzVG9kYXkgPT0gdGhpcy5pc1RvZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJTbWFsbCA9IHRoaXMuZGF0ZUFyci5zbGljZShwYXJzZUludChpIC8gNykgKiA3LCBwYXJzZUludChpIC8gNykgKiA3ICsgNylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLkdldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXIodGhpcy5pc1RvZGF5KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZkRhdGVTbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmRGF0ZVNtYWxsID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SGVpZ2h0ID0gMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxldG91Y2h0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZXRvdWNobW92ZShldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgbGV0IHR5ID0gY3VycmVudFkgLSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0eSkgPiA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIZWlnaHQgPSAwLjc1O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZkRhdGVTbWFsbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RIZWlnaHQgPSAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWZEYXRlU21hbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VycmVudFlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9kYXkoaXNUb2RheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUb2RheSA9IGlzVG9kYXlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRlQXJyW2ldLmlzVG9kYXkgPT0gdGhpcy5pc1RvZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJTbWFsbCA9IHRoaXMuZGF0ZUFyci5zbGljZShwYXJzZUludChpIC8gNykgKiA3LCBwYXJzZUludChpIC8gNykgKiA3ICsgNylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLkdldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXIoaXNUb2RheSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgLy8gdHkodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgZ2V0Vmlld1BvaW50KCkge1xuICAgICAgICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudFdpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSA3NTAgLyBjbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGNsaWVudEhlaWdodCAqIHJhdGlvO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtb3V0aEMobW91dGgpIHtcbiAgICAgICAgICAgIG1vdXRoID0gbW91dGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHN3aXRjaCAobW91dGgpIHtcbiAgICAgICAgICAgICAgICBjYXNlICcwMSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuIAnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwMic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuownO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwMyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuIknO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwNCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICflm5snO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwNSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkupQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwNic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICflha0nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwNyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuIMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwOCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICflhasnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcwOSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuZ0nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcxMCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfljYEnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcxMSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfljYHkuIAnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcxMic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfljYHkuownO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRlSW5pdChzZXRZZWFyLCBzZXRNb250aCkge1xuICAgICAgICAgICAgdmFyIGRhdGVBcnIgPSBbXVxuICAgICAgICAgICAgdmFyIGFyckxlbiA9IDBcbiAgICAgICAgICAgIHZhciBub3cgPSBzZXRZZWFyID8gbmV3IERhdGUoc2V0WWVhciwgc2V0TW9udGgpIDogbmV3IERhdGUoKVxuICAgICAgICAgICAgdmFyIHllYXIgPSBzZXRZZWFyIHx8IG5vdy5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICB2YXIgbW9udGggPSBzZXRNb250aCB8fCBub3cuZ2V0TW9udGgoKVxuICAgICAgICAgICAgdmFyIHN0YXJ0V2VlayA9IG5ldyBEYXRlKHllYXIgKyAnLycgKyBtb250aCArICcvJyArIDEpLmdldERheSgpXG4gICAgICAgICAgICB2YXIgZGF5TnVtcyA9IG5ldyBEYXRlKHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCksIDApLmdldERhdGUoKVxuICAgICAgICAgICAgYXJyTGVuID0gc3RhcnRXZWVrICsgZGF5TnVtc1xuICAgICAgICAgICAgdmFyIG9iaiA9IHt9XG4gICAgICAgICAgICB2YXIgbnVtID0gMFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID49IHN0YXJ0V2Vlaykge1xuICAgICAgICAgICAgICAgICAgICBudW0gPSBpIC0gc3RhcnRXZWVrICsgMVxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9ICcwJyArIG51bVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kYXk6ICcnICsgeWVhciArICctJyArIG1vbnRoICsgJy0nICsgbnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU51bTogbnVtLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID0ge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0ZUFycltpXSA9IG9ialxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRlQXJyID0gZGF0ZUFyclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRlQXJyW2ldLmlzVG9kYXkgPT0gdGhpcy5pc1RvZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUFyclNtYWxsID0gdGhpcy5kYXRlQXJyLnNsaWNlKHBhcnNlSW50KGkgLyA3KSAqIDcsIHBhcnNlSW50KGkgLyA3KSAqIDcgKyA3KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRTY2hlZHVsZUNlbnRlckZvckNhbGVuZGFyKG5vd19kYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVfZGF0YSA9IFtdXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dfZGF5KTtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4re+8jOivt+eojeetie+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IERhdGUucGFyc2UobmV3IERhdGUobm93X2RheSkpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGRhdGUgLSAyNCAqIDM2MDAwMDApO1xuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShkYXRlICsgMjQgKiAzNjAwMDAwKTtcbiAgICAgICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSh0aGlzLmlzVG9kYXkpLmdldFRpbWUoKSAtIDI4ODAwMDAwXG4gICAgICAgICAgICB2YXIgdGltZVN0YW1wMiA9IG5ldyBEYXRlKHRoaXMuaXNUb2RheSkuZ2V0VGltZSgpICsgNTc2MDAwMDBcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIENhc2VJZDogXCJcIixcbiAgICAgICAgICAgICAgICBDYXNlTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBDbGllbnRJZDogXCJcIixcbiAgICAgICAgICAgICAgICBDbGllbnROYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIEVuZFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIEtleVdvcmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgU3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ1NjaGVkdWxlJyxcbiAgICAgICAgICAgICAgICBjcmVhdGlvblRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YU51bWJlcjogMTAwLFxuICAgICAgICAgICAgICAgIGRhdGVSYW5nZToge1xuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlzQ3VycmVudDogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9zY2hlZHVsZS9HZXRTY2hlZHVsZUNlbnRlckZvckNhbGVuZGFyJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzRGF0YS5zdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JlZW5pbmdEYXRhID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcmVzRGF0YS5kYXRhLnJlc3VsdC5zY2hlZHVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZVN0YXJ0ID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC5zY2hlZHVsZXNbaV0uc3RhcnQpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lRW5kID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC5zY2hlZHVsZXNbaV0uZW5kKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aW1lU3RhcnQgPiB0aW1lU3RhbXAyIHx8IHRpbWVFbmQgPCB0aW1lU3RhbXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbmluZ0RhdGEucHVzaChyZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JlZW5pbmdEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmVlbmluZ0RhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZV9kYXRhID0gc2NyZWVuaW5nRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICBsZXQgbm93X0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5ub3dEYXRlX1llYXIgPSBub3dfRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgdGhpcy5ub3dEYXRlX01vbnRoID0gbm93X0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5vd19EYXRlLmdldEZ1bGxZZWFyKCkgLSA1MDtcbiAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IG5vd19EYXRlLmdldEZ1bGxZZWFyKCkgKyA1MDtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vd0RhdGVfTW9udGggPCAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm93RGF0ZV9Nb250aCA9ICcnICsgMCArIHRoaXMubm93RGF0ZV9Nb250aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3dEYXRlX0RheSA9IG5vd19EYXRlLmdldERhdGUoKVxuICAgICAgICAgICAgaWYgKHRoaXMubm93RGF0ZV9EYXkgPCAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm93RGF0ZV9EYXkgPSAnJyArIDAgKyB0aGlzLm5vd0RhdGVfRGF5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzVG9kYXkgPSB0aGlzLm5vd0RhdGVfWWVhciArICctJyArIHRoaXMubm93RGF0ZV9Nb250aCArICctJyArIHRoaXMubm93RGF0ZV9EYXlcbiAgICAgICAgICAgIHRoaXMubW91dGhDKHRoaXMubm93RGF0ZV9Nb250aCk7XG4gICAgICAgICAgICB0aGlzLmRhdGVJbml0KHRoaXMubm93RGF0ZV9ZZWFyLCB0aGlzLm5vd0RhdGVfTW9udGgpO1xuICAgICAgICAgICAgdGhpcy5HZXRTY2hlZHVsZUNlbnRlckZvckNhbGVuZGFyKG5vd19EYXRlKVxuICAgICAgICAgICAgdGhpcy5nZXRWaWV3UG9pbnQoKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==