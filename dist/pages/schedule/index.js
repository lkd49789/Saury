'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _ajax = require('./../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _api = require('./../../utils/cofig/api.js');

var _placeHolderImage = require('./../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            addImage: '../../images/add.png',
            currentTab: 0,
            navbars: ['任务', '日程', '日志', '开庭', '会议', '请假'],
            category: '',
            //数据
            taskData: [],
            planData: [],
            journalData: [],
            courtData: [],
            meetingData: [],
            leaveData: [],
            moveX: true,
            circular: true,
            viewHeight: 0,
            listHeight: 0,
            lastY: 0,
            animationLeft: false,
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
            schedule_data: [],
            isAddImage: false
        }, _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.sync": "navbars", "v-bind:currentTab.sync": "currentTab", "xmlns:v-on": "" } }, _this.$events = { "navbar": { "v-on:currentTab": "navbarChange" } }, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default
        }, _this.methods = {
            navbarChange: function navbarChange(id) {
                this.currentTab = id;
                this.$apply();
            },
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
                this.GetAllSchedule(this.isToday);
                this.GetScheduleCenterForCalendar(this.category, this.isToday);
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
                    if (ty < 0 && this.ifDateSmall == false) {
                        this.ifDateSmall = true;
                        this.$apply();
                    } else if (ty >= 0 && this.ifDateSmall == true) {
                        this.ifDateSmall = false;
                        this.$apply();
                    }
                    this.lastY = currentY;
                    this.$apply();
                    this.getViewPoint();
                }
            },
            handletouchtartX: function handletouchtartX(event) {
                this.$apply();
            },
            handletouchmoveX: function handletouchmoveX(event) {
                // console.log(event);
                if (this.moveX) {
                    if (event.detail.dx > 200) {
                        this.moveX = false;
                        this.nowDate_Month = Number(this.nowDate_Month);
                        if (this.nowDate_Month + 1 == 13) {
                            this.nowDate_Month = 1;
                            this.nowDate_Year = this.nowDate_Year + 1;
                        } else {
                            this.nowDate_Month = this.nowDate_Month + 1;
                        }
                    } else if (event.detail.dx < -200) {
                        this.moveX = false;
                        this.nowDate_Month = Number(this.nowDate_Month);
                        if (this.nowDate_Month - 1 == 0) {
                            this.nowDate_Month = 12;
                            this.nowDate_Year = this.nowDate_Year - 1;
                        } else {
                            this.nowDate_Month = this.nowDate_Month - 1;
                        }
                    }
                    if (this.nowDate_Month < 10) {
                        this.nowDate_Month = '' + 0 + this.nowDate_Month;
                    }
                    if (Math.abs(event.detail.dx) > 200) {
                        this.mouthC(this.nowDate_Month);
                        this.dateInit(this.nowDate_Year, this.nowDate_Month);
                        this.isToday = this.nowDate_Year + '-' + this.nowDate_Month + '-01';
                        for (var i = 0; i < this.dateArr.length; i++) {
                            if (this.dateArr[i].isToday == this.isToday) {
                                this.dateArrSmall = this.dateArr.slice(parseInt(i / 7) * 7, parseInt(i / 7) * 7 + 7);
                            }
                        }
                        this.GetAllSchedule(this.isToday);
                        this.GetScheduleCenterForCalendar(this.category, this.isToday);
                        this.$apply();
                    }
                }
            },
            handletouchendX: function handletouchendX(event) {
                this.moveX = true;
                this.$apply();
            },
            intoDetails: function intoDetails(text, id) {
                if (text == 'task') {
                    wx.navigateTo({
                        url: '../modules/myTaskCourse/taskStage/taskDetail/taskdetail?id=' + id
                    });
                } else if (text == 'plan') {
                    wx.navigateTo({
                        url: 'plan/details?id=' + id
                    });
                } else if (text == 'journal') {
                    wx.navigateTo({
                        url: '../modules/myRecord/myLogdetail/logdetail?id=' + id
                    });
                } else if (text == 'count') {} else if (text == 'meeting') {
                    wx.navigateTo({
                        url: '../modules/myMeeting/meetingDetail/meetingDetail?id=' + id
                    });
                } else if (text == 'leave') {
                    wx.navigateTo({
                        url: '../modules/myApplyList/myApplyDetail/myApplyDetail?id=' + id
                    });
                }
            },
            intoAdd: function intoAdd(text) {
                switch (this.currentTab) {
                    case 1:
                        var data = {
                            isData: false
                        };
                        data = JSON.stringify(data);
                        wx.navigateTo({
                            url: 'plan/createDetails?data=' + data
                        });
                        break;
                    case 2:
                        var data = {
                            isData: false
                        };
                        data = JSON.stringify(data);
                        wx.navigateTo({
                            url: '../modules/myRecord/creatWorkRecord/creatWorkRecord?data=' + data
                        });
                        break;
                    case 4:
                        wx.navigateTo({
                            url: '../modules/myMeeting/creatMeeting/creatMeeting'
                        });
                        break;
                    case 5:
                        wx.navigateTo({
                            url: '../modules/myApplyList/createApply/createApply'
                        });
                        break;
                    default:
                        break;
                }
            },
            getToday: function getToday(isToday) {
                this.isToday = isToday;
                for (var i = 0; i < this.dateArr.length; i++) {
                    if (this.dateArr[i].isToday == this.isToday) {
                        this.dateArrSmall = this.dateArr.slice(parseInt(i / 7) * 7, parseInt(i / 7) * 7 + 7);
                    }
                }
                this.GetScheduleCenterForCalendar(this.category, isToday);
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            currentTab: function currentTab(newValue, oldValue) {
                switch (newValue) {
                    case 0:
                        this.GetScheduleCenterForCalendar('Task', this.isToday);
                        this.isAddImage = false;
                        break;
                    case 1:
                        this.GetScheduleCenterForCalendar('Schedule', this.isToday);
                        this.isAddImage = true;
                        break;
                    case 2:
                        this.GetScheduleCenterForCalendar('WorkLog', this.isToday);
                        this.isAddImage = true;
                        break;
                    case 3:
                        this.GetScheduleCenterForCalendar('CaseCourt', this.isToday);
                        this.isAddImage = false;
                        break;
                    case 4:
                        this.GetScheduleCenterForCalendar('Meeting', this.isToday);
                        this.isAddImage = true;
                        break;
                    case 5:
                        this.GetScheduleCenterForCalendar('Vacation', this.isToday);
                        this.isAddImage = true;
                        break;
                    default:
                        break;
                }
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'getViewPoint',
        value: function getViewPoint() {
            var _this2 = this;

            wx.getSystemInfo({
                success: function success(res) {
                    _this2.viewHeight = res.windowHeight;
                    var that = _this2;
                    var query = wx.createSelectorQuery();
                    query.select('.calendar_content').boundingClientRect(function (rect) {
                        that.listHeight = res.windowHeight - rect.height - 30;
                        that.$apply();
                    }).exec();
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
        key: 'GetAllSchedule',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(now_day) {
                var date, startDate, endDate, data, resData, i, timeStamp, timeStamp2, j, timeStart, timeEnd;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                date = Date.parse(new Date(now_day));
                                startDate = new Date(date - 24 * 3600 * 1000 * 90);
                                endDate = new Date(date + 24 * 3600 * 1000 * 90);
                                data = {
                                    dataNumber: 100,
                                    dateRange: {
                                        startDate: startDate,
                                        endDate: endDate
                                    },
                                    isCurrent: true
                                };
                                _context.next = 6;
                                return _ajax2.default.getData('/api/services/web/schedule/GetScheduleCenterForCalendar', 'post', data);

                            case 6:
                                resData = _context.sent;

                                for (i in this.dateArr) {
                                    if (this.dateArr[i].isToday) {
                                        timeStamp = new Date(this.dateArr[i].isToday).getTime() - 28800000;
                                        timeStamp2 = new Date(this.dateArr[i].isToday).getTime() + 57600000;

                                        for (j in resData.data.result.tasks) {
                                            timeStart = new Date(resData.data.result.tasks[j].start).getTime();
                                            timeEnd = new Date(resData.data.result.tasks[j].end).getTime();

                                            if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                                this.dateArr[i].hasData = true;
                                                this.$apply();
                                            }
                                        }
                                        for (j in resData.data.result.schedules) {
                                            timeStart = new Date(resData.data.result.schedules[j].start).getTime();
                                            timeEnd = new Date(resData.data.result.schedules[j].end).getTime();

                                            if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                                this.dateArr[i].hasData = true;
                                                this.$apply();
                                            }
                                        }
                                        for (j in resData.data.result.workLogs) {
                                            timeStart = new Date(resData.data.result.workLogs[j].start).getTime();
                                            timeEnd = new Date(resData.data.result.workLogs[j].end).getTime();

                                            if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                                this.dateArr[i].hasData = true;
                                                this.$apply();
                                            }
                                        }
                                        for (j in resData.data.result.caseCourts) {
                                            timeStart = new Date(resData.data.result.caseCourts[j].start).getTime();
                                            timeEnd = new Date(resData.data.result.caseCourts[j].end).getTime();

                                            if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                                this.dateArr[i].hasData = true;
                                                this.$apply();
                                            }
                                        }
                                        for (j in resData.data.result.meetings) {
                                            timeStart = new Date(resData.data.result.meetings[j].start).getTime();
                                            timeEnd = new Date(resData.data.result.meetings[j].end).getTime();

                                            if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                                this.dateArr[i].hasData = true;
                                                this.$apply();
                                            }
                                        }
                                        for (j in resData.data.result.vacations) {
                                            timeStart = new Date(resData.data.result.vacations[j].start).getTime();
                                            timeEnd = new Date(resData.data.result.vacations[j].end).getTime();

                                            if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                                this.dateArr[i].hasData = true;
                                                this.$apply();
                                            }
                                        }
                                    }
                                }

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetAllSchedule(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetAllSchedule;
        }()
    }, {
        key: 'GetScheduleCenterForCalendar',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(category, now_day) {
                var date, startDate, endDate, timeStamp, timeStamp2, data, resData, screeningData, i, timeStart, timeEnd;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.category = category;
                                this.schedule_data = [];
                                // console.log(now_day);
                                wx.showLoading({
                                    title: '加载中，请稍等！', //提示的内容,
                                    mask: false, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                date = Date.parse(new Date(now_day));
                                startDate = new Date(date - 24 * 3600 * 1000 * 90);
                                endDate = new Date(date + 24 * 3600 * 1000 * 90);
                                timeStamp = new Date(this.isToday).getTime() - 28800000;
                                timeStamp2 = new Date(this.isToday).getTime() + 57600000;
                                // var timeStamp = new Date(this.isToday).getTime()
                                // var timeStamp2 = new Date(this.isToday).getTime() + 24 * 3600

                                data = {
                                    CaseId: "",
                                    CaseName: "",
                                    ClientId: "",
                                    ClientName: "",
                                    end: '',
                                    KeyWord: "",
                                    start: '',
                                    category: category,
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
                                _context2.next = 11;
                                return _ajax2.default.getData('/api/services/web/schedule/GetScheduleCenterForCalendar', 'post', data);

                            case 11:
                                resData = _context2.sent;
                                _context2.t0 = resData.statusCode;
                                _context2.next = _context2.t0 === 200 ? 15 : _context2.t0 === 403 ? 44 : _context2.t0 === 500 ? 48 : 52;
                                break;

                            case 15:
                                _context2.t1 = category;
                                _context2.next = _context2.t1 === 'Task' ? 18 : _context2.t1 === 'Schedule' ? 22 : _context2.t1 === 'WorkLog' ? 26 : _context2.t1 === 'CaseCourt' ? 30 : _context2.t1 === 'Meeting' ? 34 : _context2.t1 === 'Vacation' ? 38 : 42;
                                break;

                            case 18:
                                screeningData = [];

                                for (i in resData.data.result.tasks) {
                                    timeStart = new Date(resData.data.result.tasks[i].start).getTime();
                                    timeEnd = new Date(resData.data.result.tasks[i].end).getTime();

                                    if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                        screeningData.push(resData.data.result.tasks[i]);
                                    }
                                }
                                if (screeningData.length != 0) {
                                    this.taskData = screeningData;
                                } else {
                                    this.taskData = [];
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 43);

                            case 22:
                                screeningData = [];

                                for (i in resData.data.result.schedules) {
                                    timeStart = new Date(resData.data.result.schedules[i].start).getTime();
                                    timeEnd = new Date(resData.data.result.schedules[i].end).getTime();

                                    if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                        screeningData.push(resData.data.result.schedules[i]);
                                    }
                                }
                                if (screeningData.length != 0) {
                                    for (i in screeningData) {
                                        screeningData[i].start = new Date(screeningData[i].start).toTimeString().split('GMT')[0];
                                        screeningData[i].end = new Date(screeningData[i].end).toTimeString().split('GMT')[0];
                                    }
                                    this.planData = screeningData;
                                } else {
                                    this.planData = [];
                                }
                                return _context2.abrupt('break', 43);

                            case 26:
                                screeningData = [];

                                for (i in resData.data.result.workLogs) {
                                    timeStart = new Date(resData.data.result.workLogs[i].start).getTime();
                                    timeEnd = new Date(resData.data.result.workLogs[i].end).getTime();

                                    if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                        screeningData.push(resData.data.result.workLogs[i]);
                                    }
                                }
                                if (screeningData.length != 0) {
                                    for (i in screeningData) {
                                        screeningData[i].start = (0, _api.formatTime)(screeningData[i].start);
                                    }
                                    this.journalData = screeningData;
                                    // this.placeHolder.placeHolderShow = false;
                                } else {
                                    this.journalData = [];
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 43);

                            case 30:
                                screeningData = [];

                                for (i in resData.data.result.caseCourts) {
                                    timeStart = new Date(resData.data.result.caseCourts[i].start).getTime();
                                    timeEnd = new Date(resData.data.result.caseCourts[i].end).getTime();

                                    if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                        screeningData.push(resData.data.result.caseCourts[i]);
                                    }
                                }
                                if (screeningData.length != 0) {
                                    for (i in screeningData) {
                                        screeningData[i].start = (0, _api.formatTime)(screeningData[i].start);
                                        screeningData[i].end = (0, _api.formatTime)(screeningData[i].end);
                                    }
                                    this.courtData = screeningData;
                                } else {
                                    this.courtData = [];
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 43);

                            case 34:
                                screeningData = [];

                                for (i in resData.data.result.meetings) {
                                    timeStart = new Date(resData.data.result.meetings[i].start).getTime();
                                    timeEnd = new Date(resData.data.result.meetings[i].end).getTime();

                                    if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                        screeningData.push(resData.data.result.meetings[i]);
                                    }
                                }
                                if (screeningData.length != 0) {
                                    for (i in screeningData) {
                                        screeningData[i].start = (0, _api.formatTime)(screeningData[i].start);
                                        screeningData[i].end = (0, _api.formatTime)(screeningData[i].end);
                                    }
                                    this.meetingData = screeningData;
                                    // this.placeHolder.placeHolderShow = false;
                                } else {
                                    this.meetingData = [];
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 43);

                            case 38:
                                screeningData = [];

                                for (i in resData.data.result.vacations) {
                                    timeStart = new Date(resData.data.result.vacations[i].start).getTime();
                                    timeEnd = new Date(resData.data.result.vacations[i].end).getTime();

                                    if (!(timeStart >= timeStamp2 || timeEnd < timeStamp)) {
                                        screeningData.push(resData.data.result.vacations[i]);
                                    }
                                }
                                if (screeningData.length != 0) {
                                    for (i in screeningData) {
                                        screeningData[i].start = (0, _api.formatTime)(screeningData[i].start);
                                        screeningData[i].end = (0, _api.formatTime)(screeningData[i].end);
                                    }
                                    this.leaveData = screeningData;
                                } else {
                                    this.leaveData = [];
                                    this.$apply();
                                }
                                return _context2.abrupt('break', 43);

                            case 42:
                                return _context2.abrupt('break', 43);

                            case 43:
                                return _context2.abrupt('break', 53);

                            case 44:
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 53);

                            case 48:
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context2.abrupt('break', 53);

                            case 52:
                                return _context2.abrupt('break', 53);

                            case 53:
                                this.$apply();

                            case 54:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetScheduleCenterForCalendar(_x2, _x3) {
                return _ref3.apply(this, arguments);
            }

            return GetScheduleCenterForCalendar;
        }()
        // //功能权限
        // async GetFunctionItems() {
        //     var id = {
        //         id: this.$parent.global.currentUserId
        //     }
        //     var resData = await ajax.getData(
        //         '/api/services/app/function/GetFunctionItems',
        //         'post',
        //         id
        //     )
        //     // if (resData.statusCode == 200) {
        //     //     var GetFunctionItemsData = resData.data.result.items
        //     //     for (var index in GetFunctionItemsData) {
        //     //         switch (GetFunctionItemsData[index].name) {
        //     //             case 'Pages.Works.Log.MyWorklog':
        //     //                 break;
        //     //             // case 'Pages.Business.Cases.MyProcesses':
        //     //                 // this.navbars.push('任务')
        //     //             //     break;
        //     //             // case 'Pages.Works.Meeting.MyMeeting':
        //     //             //     this.navbars.push('会议')
        //     //             //     break;
        //     //             // case 'Pages.HumanResource.Attendance.MyApplyList':
        //     //             //     this.navbars.push('请假')
        //     //             //     break;
        //     //         }
        //     //     }
        //     //     myDistinct( this.navbars);
        //     //     this.$apply();
        //     // }
        // }

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
            this.GetScheduleCenterForCalendar('Task', now_Date);
            this.getViewPoint();
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.GetScheduleCenterForCalendar(this.category, this.isToday);
            // this.GetFunctionItems();
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/schedule/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImFkZEltYWdlIiwiY3VycmVudFRhYiIsIm5hdmJhcnMiLCJjYXRlZ29yeSIsInRhc2tEYXRhIiwicGxhbkRhdGEiLCJqb3VybmFsRGF0YSIsImNvdXJ0RGF0YSIsIm1lZXRpbmdEYXRhIiwibGVhdmVEYXRhIiwibW92ZVgiLCJjaXJjdWxhciIsInZpZXdIZWlnaHQiLCJsaXN0SGVpZ2h0IiwibGFzdFkiLCJhbmltYXRpb25MZWZ0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm5vd0RhdGVfWWVhciIsIm5vd0RhdGVfTW9udGgiLCJub3dEYXRlX0RheSIsIm1vdXRoQ2giLCJkYXRlIiwiaXNUb2RheSIsImRhdGVBcnIiLCJkYXRlQXJyU21hbGwiLCJpZkRhdGVTbWFsbCIsInNjaGVkdWxlX2RhdGEiLCJpc0FkZEltYWdlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2VIb2xkZXJJbWFnZSIsIm5hdmJhciIsIm1ldGhvZHMiLCJuYXZiYXJDaGFuZ2UiLCJpZCIsIiRhcHBseSIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic3BsaXQiLCJtb3V0aEMiLCJkYXRlSW5pdCIsImkiLCJsZW5ndGgiLCJzbGljZSIsInBhcnNlSW50IiwiR2V0QWxsU2NoZWR1bGUiLCJHZXRTY2hlZHVsZUNlbnRlckZvckNhbGVuZGFyIiwiaGFuZGxldG91Y2h0YXJ0IiwiZXZlbnQiLCJ0b3VjaGVzIiwicGFnZVkiLCJoYW5kbGV0b3VjaG1vdmUiLCJjdXJyZW50WSIsInR5IiwiTWF0aCIsImFicyIsImdldFZpZXdQb2ludCIsImhhbmRsZXRvdWNodGFydFgiLCJoYW5kbGV0b3VjaG1vdmVYIiwiZHgiLCJOdW1iZXIiLCJoYW5kbGV0b3VjaGVuZFgiLCJpbnRvRGV0YWlscyIsInRleHQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbnRvQWRkIiwiaXNEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFRvZGF5IiwiZXZlbnRzIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29tcHV0ZWQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsInRoYXQiLCJxdWVyeSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiaGVpZ2h0IiwiZXhlYyIsIm1vdXRoIiwidG9TdHJpbmciLCJzZXRZZWFyIiwic2V0TW9udGgiLCJhcnJMZW4iLCJub3ciLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsInN0YXJ0V2VlayIsImdldERheSIsImRheU51bXMiLCJnZXREYXRlIiwib2JqIiwibnVtIiwiZGF0ZU51bSIsIm5vd19kYXkiLCJwYXJzZSIsImRhdGFOdW1iZXIiLCJkYXRlUmFuZ2UiLCJpc0N1cnJlbnQiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJ0aW1lU3RhbXAiLCJnZXRUaW1lIiwidGltZVN0YW1wMiIsImoiLCJyZXN1bHQiLCJ0YXNrcyIsInRpbWVTdGFydCIsInN0YXJ0IiwidGltZUVuZCIsImVuZCIsImhhc0RhdGEiLCJzY2hlZHVsZXMiLCJ3b3JrTG9ncyIsImNhc2VDb3VydHMiLCJtZWV0aW5ncyIsInZhY2F0aW9ucyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwiQ2FzZUlkIiwiQ2FzZU5hbWUiLCJDbGllbnRJZCIsIkNsaWVudE5hbWUiLCJLZXlXb3JkIiwiY3JlYXRpb25UaW1lIiwic3RhdHVzQ29kZSIsInNjcmVlbmluZ0RhdGEiLCJwdXNoIiwidG9UaW1lU3RyaW5nIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJub3dfRGF0ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FB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S0FBSyxDQUFMLEdBQVMsS0FBS0EsV0FBakM7QUFDSDtBQUNELGlCQUFLRyxPQUFMLEdBQWUsS0FBS0wsWUFBTCxHQUFvQixHQUFwQixHQUEwQixLQUFLQyxhQUEvQixHQUErQyxHQUEvQyxHQUFxRCxLQUFLQyxXQUF6RTtBQUNBLGlCQUFLd0IsTUFBTCxDQUFZLEtBQUt6QixhQUFqQjtBQUNBLGlCQUFLMEIsUUFBTCxDQUFjLEtBQUszQixZQUFuQixFQUFpQyxLQUFLQyxhQUF0QztBQUNBLGlCQUFLZ0MsNEJBQUwsQ0FBa0MsTUFBbEMsRUFBMENxRyxRQUExQztBQUNBLGlCQUFLM0YsWUFBTDtBQUNBLGlCQUFLdkIsTUFBTDtBQUNIOzs7aUNBQ1E7QUFDTCxpQkFBS2EsNEJBQUwsQ0FBa0MsS0FBS2hELFFBQXZDLEVBQWlELEtBQUtvQixPQUF0RDtBQUNBO0FBQ0g7Ozs7RUFwb0I4QmtJLGVBQUtDLEk7O2tCQUFuQjVKLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcclxuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xyXG4gICAgaW1wb3J0IHtteURpc3RpbmN0fSBmcm9tICcuLi8uLi91dGlscy9jb2ZpZy9hcGkuanMnO1xyXG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGFjZUhvbGRlckltYWdlJ1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXRUaW1lXHJcbiAgICB9IGZyb20gJy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcydcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBhZGRJbWFnZTogJy4uLy4uL2ltYWdlcy9hZGQucG5nJyxcclxuICAgICAgICAgICAgY3VycmVudFRhYjogMCxcclxuICAgICAgICAgICAgbmF2YmFyczogWyAn5Lu75YqhJywn5pel56iLJywgJ+aXpeW/lycsJ+W8gOW6rScsJ+S8muiuricsICfor7flgYcnXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICcnLFxyXG4gICAgICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgICAgICB0YXNrRGF0YTogW10sXHJcbiAgICAgICAgICAgIHBsYW5EYXRhOiBbXSxcclxuICAgICAgICAgICAgam91cm5hbERhdGE6IFtdLFxyXG4gICAgICAgICAgICBjb3VydERhdGE6IFtdLFxyXG4gICAgICAgICAgICBtZWV0aW5nRGF0YTogW10sXHJcbiAgICAgICAgICAgIGxlYXZlRGF0YTogW10sXHJcbiAgICAgICAgICAgIG1vdmVYOiB0cnVlLFxyXG4gICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgdmlld0hlaWdodDogMCxcclxuICAgICAgICAgICAgbGlzdEhlaWdodDogMCxcclxuICAgICAgICAgICAgbGFzdFk6IDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6ICcnLFxyXG4gICAgICAgICAgICBlbmREYXRlOiAnJyxcclxuICAgICAgICAgICAgbm93RGF0ZV9ZZWFyOiAnJyxcclxuICAgICAgICAgICAgbm93RGF0ZV9Nb250aDogJycsXHJcbiAgICAgICAgICAgIG5vd0RhdGVfRGF5OiAnJyxcclxuICAgICAgICAgICAgbW91dGhDaDogJycsXHJcbiAgICAgICAgICAgIGRhdGU6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXHJcbiAgICAgICAgICAgIGlzVG9kYXk6ICcnLFxyXG4gICAgICAgICAgICBkYXRlQXJyOiBbXSxcclxuICAgICAgICAgICAgZGF0ZUFyclNtYWxsOiAnJyxcclxuICAgICAgICAgICAgaWZEYXRlU21hbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHNjaGVkdWxlX2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBpc0FkZEltYWdlOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5zeW5jXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wibmF2YmFyXCI6e1widi1vbjpjdXJyZW50VGFiXCI6XCJuYXZiYXJDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgcGxhY2VIb2xkZXJJbWFnZSxcclxuICAgICAgICAgICAgbmF2YmFyOiBuYXZiYXJcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIG5hdmJhckNoYW5nZShpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gaWRcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dEYXRlX1llYXIgPSBlLmRldGFpbC52YWx1ZS5zcGxpdCgnLScpWzBdXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd0RhdGVfTW9udGggPSBlLmRldGFpbC52YWx1ZS5zcGxpdCgnLScpWzFdXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXRoQyh0aGlzLm5vd0RhdGVfTW9udGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVJbml0KHRoaXMubm93RGF0ZV9ZZWFyLCB0aGlzLm5vd0RhdGVfTW9udGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVG9kYXkgPSB0aGlzLm5vd0RhdGVfWWVhciArICctJyArIHRoaXMubm93RGF0ZV9Nb250aCArICctMDEnO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRlQXJyW2ldLmlzVG9kYXkgPT0gdGhpcy5pc1RvZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUFyclNtYWxsID0gdGhpcy5kYXRlQXJyLnNsaWNlKHBhcnNlSW50KGkgLyA3KSAqIDcsIHBhcnNlSW50KGkgLyA3KSAqIDcgKyA3KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0QWxsU2NoZWR1bGUodGhpcy5pc1RvZGF5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0U2NoZWR1bGVDZW50ZXJGb3JDYWxlbmRhcih0aGlzLmNhdGVnb3J5LCB0aGlzLmlzVG9kYXkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYW5kbGV0b3VjaHRhcnQoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYW5kbGV0b3VjaG1vdmUoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50WSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHkgPSBjdXJyZW50WSAtIHRoaXMubGFzdFk7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHkpID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHkgPCAwICYmIHRoaXMuaWZEYXRlU21hbGwgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZkRhdGVTbWFsbCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5ID49IDAgJiYgdGhpcy5pZkRhdGVTbWFsbCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWZEYXRlU21hbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnJlbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFZpZXdQb2ludCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhbmRsZXRvdWNodGFydFgoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhbmRsZXRvdWNobW92ZVgoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRldGFpbC5keCA+IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVYID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dEYXRlX01vbnRoID0gTnVtYmVyKHRoaXMubm93RGF0ZV9Nb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm93RGF0ZV9Nb250aCArIDEgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm93RGF0ZV9Nb250aCA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm93RGF0ZV9ZZWFyID0gdGhpcy5ub3dEYXRlX1llYXIgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd0RhdGVfTW9udGggPSB0aGlzLm5vd0RhdGVfTW9udGggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbC5keCA8IC0yMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm93RGF0ZV9Nb250aCA9IE51bWJlcih0aGlzLm5vd0RhdGVfTW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0RhdGVfTW9udGggLSAxID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm93RGF0ZV9Nb250aCA9IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd0RhdGVfWWVhciA9IHRoaXMubm93RGF0ZV9ZZWFyIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dEYXRlX01vbnRoID0gdGhpcy5ub3dEYXRlX01vbnRoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0RhdGVfTW9udGggPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd0RhdGVfTW9udGggPSAnJyArIDAgKyB0aGlzLm5vd0RhdGVfTW9udGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRldGFpbC5keCkgPiAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3V0aEModGhpcy5ub3dEYXRlX01vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVJbml0KHRoaXMubm93RGF0ZV9ZZWFyLCB0aGlzLm5vd0RhdGVfTW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUb2RheSA9IHRoaXMubm93RGF0ZV9ZZWFyICsgJy0nICsgdGhpcy5ub3dEYXRlX01vbnRoICsgJy0wMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRlQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRlQXJyW2ldLmlzVG9kYXkgPT0gdGhpcy5pc1RvZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyU21hbGwgPSB0aGlzLmRhdGVBcnIuc2xpY2UocGFyc2VJbnQoaSAvIDcpICogNywgcGFyc2VJbnQoaSAvIDcpICogNyArIDcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRBbGxTY2hlZHVsZSh0aGlzLmlzVG9kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXIodGhpcy5jYXRlZ29yeSwgdGhpcy5pc1RvZGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhbmRsZXRvdWNoZW5kWChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW50b0RldGFpbHModGV4dCwgaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0ID09ICd0YXNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9tb2R1bGVzL215VGFza0NvdXJzZS90YXNrU3RhZ2UvdGFza0RldGFpbC90YXNrZGV0YWlsP2lkPScgKyBpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRleHQgPT0gJ3BsYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ3BsYW4vZGV0YWlscz9pZD0nICsgaWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXh0ID09ICdqb3VybmFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9tb2R1bGVzL215UmVjb3JkL215TG9nZGV0YWlsL2xvZ2RldGFpbD9pZD0nICsgaWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXh0ID09ICdjb3VudCcpIHt9IGVsc2UgaWYgKHRleHQgPT0gJ21lZXRpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uL21vZHVsZXMvbXlNZWV0aW5nL21lZXRpbmdEZXRhaWwvbWVldGluZ0RldGFpbD9pZD0nICsgaWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXh0ID09ICdsZWF2ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbW9kdWxlcy9teUFwcGx5TGlzdC9teUFwcGx5RGV0YWlsL215QXBwbHlEZXRhaWw/aWQ9JyArIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW50b0FkZCh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFRhYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RhdGE6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ3BsYW4vY3JlYXRlRGV0YWlscz9kYXRhPScgKyBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RhdGE6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uL21vZHVsZXMvbXlSZWNvcmQvY3JlYXRXb3JrUmVjb3JkL2NyZWF0V29ya1JlY29yZD9kYXRhPScgKyBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9tb2R1bGVzL215TWVldGluZy9jcmVhdE1lZXRpbmcvY3JlYXRNZWV0aW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbW9kdWxlcy9teUFwcGx5TGlzdC9jcmVhdGVBcHBseS9jcmVhdGVBcHBseSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFRvZGF5KGlzVG9kYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUb2RheSA9IGlzVG9kYXlcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRlQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZUFycltpXS5pc1RvZGF5ID09IHRoaXMuaXNUb2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJTbWFsbCA9IHRoaXMuZGF0ZUFyci5zbGljZShwYXJzZUludChpIC8gNykgKiA3LCBwYXJzZUludChpIC8gNykgKiA3ICsgNylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXIodGhpcy5jYXRlZ29yeSwgaXNUb2RheSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBldmVudHMgPSB7fTtcclxuICAgICAgICB3YXRjaCA9IHtcclxuICAgICAgICAgICAgY3VycmVudFRhYihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2NoZWR1bGVDZW50ZXJGb3JDYWxlbmRhcignVGFzaycsIHRoaXMuaXNUb2RheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZGRJbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2NoZWR1bGVDZW50ZXJGb3JDYWxlbmRhcignU2NoZWR1bGUnLCB0aGlzLmlzVG9kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRkSW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2NoZWR1bGVDZW50ZXJGb3JDYWxlbmRhcignV29ya0xvZycsIHRoaXMuaXNUb2RheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZGRJbWFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HZXRTY2hlZHVsZUNlbnRlckZvckNhbGVuZGFyKCdDYXNlQ291cnQnLCB0aGlzLmlzVG9kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRkSW1hZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXIoJ01lZXRpbmcnLCB0aGlzLmlzVG9kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRkSW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0U2NoZWR1bGVDZW50ZXJGb3JDYWxlbmRhcignVmFjYXRpb24nLCB0aGlzLmlzVG9kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRkSW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcclxuICAgICAgICBnZXRWaWV3UG9pbnQoKSB7XHJcbiAgICAgICAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNlbGVjdCgnLmNhbGVuZGFyX2NvbnRlbnQnKS5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24ocmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3RIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0IC0gcmVjdC5oZWlnaHQgLSAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmV4ZWMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbW91dGhDKG1vdXRoKSB7XHJcbiAgICAgICAgICAgIG1vdXRoID0gbW91dGgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgc3dpdGNoIChtb3V0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDEnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuIAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDInOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuownO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuIknO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICflm5snO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkupQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDYnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICflha0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDcnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuIMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICflhasnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMDknOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfkuZ0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMTAnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfljYEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMTEnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfljYHkuIAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMTInOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91dGhDaCA9ICfljYHkuownO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRlSW5pdChzZXRZZWFyLCBzZXRNb250aCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZUFyciA9IFtdXHJcbiAgICAgICAgICAgIHZhciBhcnJMZW4gPSAwXHJcbiAgICAgICAgICAgIHZhciBub3cgPSBzZXRZZWFyID8gbmV3IERhdGUoc2V0WWVhciwgc2V0TW9udGgpIDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICB2YXIgeWVhciA9IHNldFllYXIgfHwgbm93LmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgdmFyIG1vbnRoID0gc2V0TW9udGggfHwgbm93LmdldE1vbnRoKClcclxuICAgICAgICAgICAgdmFyIHN0YXJ0V2VlayA9IG5ldyBEYXRlKHllYXIgKyAnLycgKyBtb250aCArICcvJyArIDEpLmdldERheSgpXHJcbiAgICAgICAgICAgIHZhciBkYXlOdW1zID0gbmV3IERhdGUocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSwgMCkuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICAgIGFyckxlbiA9IHN0YXJ0V2VlayArIGRheU51bXNcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHt9XHJcbiAgICAgICAgICAgIHZhciBudW0gPSAwXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyTGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID49IHN0YXJ0V2Vlaykge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IGkgLSBzdGFydFdlZWsgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9ICcwJyArIG51bVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kYXk6ICcnICsgeWVhciArICctJyArIG1vbnRoICsgJy0nICsgbnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlTnVtOiBudW0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUFycltpXSA9IG9ialxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUFyciA9IGRhdGVBcnJcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGVBcnJbaV0uaXNUb2RheSA9PSB0aGlzLmlzVG9kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJTbWFsbCA9IHRoaXMuZGF0ZUFyci5zbGljZShwYXJzZUludChpIC8gNykgKiA3LCBwYXJzZUludChpIC8gNykgKiA3ICsgNylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIEdldEFsbFNjaGVkdWxlKG5vd19kYXkpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKG5vd19kYXkpKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGRhdGUgLSAyNCAqIDM2MDAgKiAxMDAwICogOTApO1xyXG4gICAgICAgICAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGRhdGUgKyAyNCAqIDM2MDAgKiAxMDAwICogOTApO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGRhdGFOdW1iZXI6IDEwMCxcclxuICAgICAgICAgICAgICAgIGRhdGVSYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNDdXJyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3NjaGVkdWxlL0dldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZGF0ZUFycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZUFycltpXS5pc1RvZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKHRoaXMuZGF0ZUFycltpXS5pc1RvZGF5KS5nZXRUaW1lKCkgLSAyODgwMDAwMFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhbXAyID0gbmV3IERhdGUodGhpcy5kYXRlQXJyW2ldLmlzVG9kYXkpLmdldFRpbWUoKSArIDU3NjAwMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiByZXNEYXRhLmRhdGEucmVzdWx0LnRhc2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhcnQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnRhc2tzW2pdLnN0YXJ0KS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVFbmQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnRhc2tzW2pdLmVuZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCh0aW1lU3RhcnQgPj0gdGltZVN0YW1wMiB8fCB0aW1lRW5kIDwgdGltZVN0YW1wKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUFycltpXS5oYXNEYXRhID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcmVzRGF0YS5kYXRhLnJlc3VsdC5zY2hlZHVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVTdGFydCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQuc2NoZWR1bGVzW2pdLnN0YXJ0KS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVFbmQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlc1tqXS5lbmQpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgodGltZVN0YXJ0ID49IHRpbWVTdGFtcDIgfHwgdGltZUVuZCA8IHRpbWVTdGFtcCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJbaV0uaGFzRGF0YSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQud29ya0xvZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVTdGFydCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQud29ya0xvZ3Nbal0uc3RhcnQpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZUVuZCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQud29ya0xvZ3Nbal0uZW5kKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKHRpbWVTdGFydCA+PSB0aW1lU3RhbXAyIHx8IHRpbWVFbmQgPCB0aW1lU3RhbXApKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyW2ldLmhhc0RhdGEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiByZXNEYXRhLmRhdGEucmVzdWx0LmNhc2VDb3VydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVTdGFydCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQuY2FzZUNvdXJ0c1tqXS5zdGFydCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lRW5kID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC5jYXNlQ291cnRzW2pdLmVuZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCh0aW1lU3RhcnQgPj0gdGltZVN0YW1wMiB8fCB0aW1lRW5kIDwgdGltZVN0YW1wKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUFycltpXS5oYXNEYXRhID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcmVzRGF0YS5kYXRhLnJlc3VsdC5tZWV0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZVN0YXJ0ID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC5tZWV0aW5nc1tqXS5zdGFydCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lRW5kID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC5tZWV0aW5nc1tqXS5lbmQpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgodGltZVN0YXJ0ID49IHRpbWVTdGFtcDIgfHwgdGltZUVuZCA8IHRpbWVTdGFtcCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJbaV0uaGFzRGF0YSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQudmFjYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhcnQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnZhY2F0aW9uc1tqXS5zdGFydCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lRW5kID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC52YWNhdGlvbnNbal0uZW5kKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKHRpbWVTdGFydCA+PSB0aW1lU3RhbXAyIHx8IHRpbWVFbmQgPCB0aW1lU3RhbXApKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyW2ldLmhhc0RhdGEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgR2V0U2NoZWR1bGVDZW50ZXJGb3JDYWxlbmRhcihjYXRlZ29yeSwgbm93X2RheSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZV9kYXRhID0gW11cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm93X2RheSk7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gRGF0ZS5wYXJzZShuZXcgRGF0ZShub3dfZGF5KSk7XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShkYXRlIC0gMjQgKiAzNjAwICogMTAwMCAqIDkwKTtcclxuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShkYXRlICsgMjQgKiAzNjAwICogMTAwMCAqIDkwKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKHRoaXMuaXNUb2RheSkuZ2V0VGltZSgpIC0gMjg4MDAwMDBcclxuICAgICAgICAgICAgdmFyIHRpbWVTdGFtcDIgPSBuZXcgRGF0ZSh0aGlzLmlzVG9kYXkpLmdldFRpbWUoKSArIDU3NjAwMDAwXHJcbiAgICAgICAgICAgIC8vIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSh0aGlzLmlzVG9kYXkpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAvLyB2YXIgdGltZVN0YW1wMiA9IG5ldyBEYXRlKHRoaXMuaXNUb2RheSkuZ2V0VGltZSgpICsgMjQgKiAzNjAwXHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgQ2FzZUlkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgQ2FzZU5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBDbGllbnRJZDogXCJcIixcclxuICAgICAgICAgICAgICAgIENsaWVudE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgS2V5V29yZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGNyZWF0aW9uVGltZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFOdW1iZXI6IDEwMCxcclxuICAgICAgICAgICAgICAgIGRhdGVSYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNDdXJyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3NjaGVkdWxlL0dldFNjaGVkdWxlQ2VudGVyRm9yQ2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHJlc0RhdGEuZGF0YS5yZXN1bHQuc2NoZWR1bGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgc2NyZWVuaW5nRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvciAodmFyIGkgaW4gcmVzRGF0YS5kYXRhLnJlc3VsdC5zY2hlZHVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhciB0aW1lU3RhcnQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlc1tpXS5zdGFydCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2YXIgdGltZUVuZCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQuc2NoZWR1bGVzW2ldLmVuZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoISh0aW1lU3RhcnQgPiB0aW1lU3RhbXAyIHx8IHRpbWVFbmQgPCB0aW1lU3RhbXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2NyZWVuaW5nRGF0YS5wdXNoKHJlc0RhdGEuZGF0YS5yZXN1bHQuc2NoZWR1bGVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHNjcmVlbmluZ0RhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChzY3JlZW5pbmdEYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZV9kYXRhID0gc2NyZWVuaW5nRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVGFzayc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NyZWVuaW5nRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQudGFza3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZVN0YXJ0ID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC50YXNrc1tpXS5zdGFydCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVFbmQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnRhc2tzW2ldLmVuZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKHRpbWVTdGFydCA+PSB0aW1lU3RhbXAyIHx8IHRpbWVFbmQgPCB0aW1lU3RhbXApKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdEYXRhLnB1c2gocmVzRGF0YS5kYXRhLnJlc3VsdC50YXNrc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyZWVuaW5nRGF0YS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0RhdGEgPSBzY3JlZW5pbmdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tEYXRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2NoZWR1bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmVlbmluZ0RhdGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhcnQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlc1tpXS5zdGFydCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVFbmQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlc1tpXS5lbmQpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRpbWVTdGFydCA+PSB0aW1lU3RhbXAyIHx8IHRpbWVFbmQgPCB0aW1lU3RhbXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbmluZ0RhdGEucHVzaChyZXNEYXRhLmRhdGEucmVzdWx0LnNjaGVkdWxlc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyZWVuaW5nRGF0YS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gc2NyZWVuaW5nRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdEYXRhW2ldLnN0YXJ0ID0gbmV3IERhdGUoc2NyZWVuaW5nRGF0YVtpXS5zdGFydCkudG9UaW1lU3RyaW5nKCkuc3BsaXQoJ0dNVCcpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbmluZ0RhdGFbaV0uZW5kID0gbmV3IERhdGUoc2NyZWVuaW5nRGF0YVtpXS5lbmQpLnRvVGltZVN0cmluZygpLnNwbGl0KCdHTVQnKVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5EYXRhID0gc2NyZWVuaW5nRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnV29ya0xvZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NyZWVuaW5nRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQud29ya0xvZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZVN0YXJ0ID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC53b3JrTG9nc1tpXS5zdGFydCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVFbmQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LndvcmtMb2dzW2ldLmVuZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGltZVN0YXJ0ID49IHRpbWVTdGFtcDIgfHwgdGltZUVuZCA8IHRpbWVTdGFtcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuaW5nRGF0YS5wdXNoKHJlc0RhdGEuZGF0YS5yZXN1bHQud29ya0xvZ3NbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmVlbmluZ0RhdGEubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHNjcmVlbmluZ0RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuaW5nRGF0YVtpXS5zdGFydCA9IGZvcm1hdFRpbWUoc2NyZWVuaW5nRGF0YVtpXS5zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb3VybmFsRGF0YSA9IHNjcmVlbmluZ0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qb3VybmFsRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Nhc2VDb3VydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NyZWVuaW5nRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQuY2FzZUNvdXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhcnQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0LmNhc2VDb3VydHNbaV0uc3RhcnQpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lRW5kID0gbmV3IERhdGUocmVzRGF0YS5kYXRhLnJlc3VsdC5jYXNlQ291cnRzW2ldLmVuZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGltZVN0YXJ0ID49IHRpbWVTdGFtcDIgfHwgdGltZUVuZCA8IHRpbWVTdGFtcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuaW5nRGF0YS5wdXNoKHJlc0RhdGEuZGF0YS5yZXN1bHQuY2FzZUNvdXJ0c1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyZWVuaW5nRGF0YS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gc2NyZWVuaW5nRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdEYXRhW2ldLnN0YXJ0ID0gZm9ybWF0VGltZShzY3JlZW5pbmdEYXRhW2ldLnN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdEYXRhW2ldLmVuZCA9IGZvcm1hdFRpbWUoc2NyZWVuaW5nRGF0YVtpXS5lbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291cnREYXRhID0gc2NyZWVuaW5nRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VydERhdGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdNZWV0aW5nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JlZW5pbmdEYXRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcmVzRGF0YS5kYXRhLnJlc3VsdC5tZWV0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhcnQgPSBuZXcgRGF0ZShyZXNEYXRhLmRhdGEucmVzdWx0Lm1lZXRpbmdzW2ldLnN0YXJ0KS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZUVuZCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQubWVldGluZ3NbaV0uZW5kKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aW1lU3RhcnQgPj0gdGltZVN0YW1wMiB8fCB0aW1lRW5kIDwgdGltZVN0YW1wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdEYXRhLnB1c2gocmVzRGF0YS5kYXRhLnJlc3VsdC5tZWV0aW5nc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyZWVuaW5nRGF0YS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gc2NyZWVuaW5nRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdEYXRhW2ldLnN0YXJ0ID0gZm9ybWF0VGltZShzY3JlZW5pbmdEYXRhW2ldLnN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5pbmdEYXRhW2ldLmVuZCA9IGZvcm1hdFRpbWUoc2NyZWVuaW5nRGF0YVtpXS5lbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVldGluZ0RhdGEgPSBzY3JlZW5pbmdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVldGluZ0RhdGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdWYWNhdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NyZWVuaW5nRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQudmFjYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVTdGFydCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQudmFjYXRpb25zW2ldLnN0YXJ0KS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZUVuZCA9IG5ldyBEYXRlKHJlc0RhdGEuZGF0YS5yZXN1bHQudmFjYXRpb25zW2ldLmVuZCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGltZVN0YXJ0ID49IHRpbWVTdGFtcDIgfHwgdGltZUVuZCA8IHRpbWVTdGFtcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuaW5nRGF0YS5wdXNoKHJlc0RhdGEuZGF0YS5yZXN1bHQudmFjYXRpb25zW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JlZW5pbmdEYXRhLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzY3JlZW5pbmdEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbmluZ0RhdGFbaV0uc3RhcnQgPSBmb3JtYXRUaW1lKHNjcmVlbmluZ0RhdGFbaV0uc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbmluZ0RhdGFbaV0uZW5kID0gZm9ybWF0VGltZShzY3JlZW5pbmdEYXRhW2ldLmVuZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWF2ZURhdGEgPSBzY3JlZW5pbmdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYXZlRGF0YSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy/lip/og73mnYPpmZBcclxuICAgICAgICAvLyBhc3luYyBHZXRGdW5jdGlvbkl0ZW1zKCkge1xyXG4gICAgICAgIC8vICAgICB2YXIgaWQgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogdGhpcy4kcGFyZW50Lmdsb2JhbC5jdXJyZW50VXNlcklkXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXHJcbiAgICAgICAgLy8gICAgICAgICAnL2FwaS9zZXJ2aWNlcy9hcHAvZnVuY3Rpb24vR2V0RnVuY3Rpb25JdGVtcycsXHJcbiAgICAgICAgLy8gICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgLy8gICAgICAgICBpZFxyXG4gICAgICAgIC8vICAgICApXHJcbiAgICAgICAgLy8gICAgIC8vIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB2YXIgR2V0RnVuY3Rpb25JdGVtc0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zXHJcbiAgICAgICAgLy8gICAgIC8vICAgICBmb3IgKHZhciBpbmRleCBpbiBHZXRGdW5jdGlvbkl0ZW1zRGF0YSkge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgIHN3aXRjaCAoR2V0RnVuY3Rpb25JdGVtc0RhdGFbaW5kZXhdLm5hbWUpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgY2FzZSAnUGFnZXMuV29ya3MuTG9nLk15V29ya2xvZyc6XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2FzZSAnUGFnZXMuQnVzaW5lc3MuQ2FzZXMuTXlQcm9jZXNzZXMnOlxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5uYXZiYXJzLnB1c2goJ+S7u+WKoScpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2FzZSAnUGFnZXMuV29ya3MuTWVldGluZy5NeU1lZXRpbmcnOlxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5uYXZiYXJzLnB1c2goJ+S8muiuricpXHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2FzZSAnUGFnZXMuSHVtYW5SZXNvdXJjZS5BdHRlbmRhbmNlLk15QXBwbHlMaXN0JzpcclxuICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMubmF2YmFycy5wdXNoKCfor7flgYcnKVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAvLyAgICAgbXlEaXN0aW5jdCggdGhpcy5uYXZiYXJzKTtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICBsZXQgbm93X0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vd0RhdGVfWWVhciA9IG5vd19EYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm93RGF0ZV9Nb250aCA9IG5vd19EYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5vd19EYXRlLmdldEZ1bGxZZWFyKCkgLSA1MDtcclxuICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gbm93X0RhdGUuZ2V0RnVsbFllYXIoKSArIDUwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub3dEYXRlX01vbnRoIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93RGF0ZV9Nb250aCA9ICcnICsgMCArIHRoaXMubm93RGF0ZV9Nb250aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm93RGF0ZV9EYXkgPSBub3dfRGF0ZS5nZXREYXRlKClcclxuICAgICAgICAgICAgaWYgKHRoaXMubm93RGF0ZV9EYXkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dEYXRlX0RheSA9ICcnICsgMCArIHRoaXMubm93RGF0ZV9EYXlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzVG9kYXkgPSB0aGlzLm5vd0RhdGVfWWVhciArICctJyArIHRoaXMubm93RGF0ZV9Nb250aCArICctJyArIHRoaXMubm93RGF0ZV9EYXlcclxuICAgICAgICAgICAgdGhpcy5tb3V0aEModGhpcy5ub3dEYXRlX01vbnRoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRlSW5pdCh0aGlzLm5vd0RhdGVfWWVhciwgdGhpcy5ub3dEYXRlX01vbnRoKTtcclxuICAgICAgICAgICAgdGhpcy5HZXRTY2hlZHVsZUNlbnRlckZvckNhbGVuZGFyKCdUYXNrJywgbm93X0RhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Vmlld1BvaW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0U2NoZWR1bGVDZW50ZXJGb3JDYWxlbmRhcih0aGlzLmNhdGVnb3J5LCB0aGlzLmlzVG9kYXkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkdldEZ1bmN0aW9uSXRlbXMoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4iXX0=