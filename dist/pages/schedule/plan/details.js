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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            id: 0,
            planLogData: {},
            passCount: 0,
            avatar: []
        }, _this.methods = {
            preview: function preview(fileId, fileName) {
                console.log(fileId, fileName);
                var http = '/api/services/web/scheduleAttachment/GetDocumentFile?id=' + fileId;
                var fileClass = '.' + fileName.split('.')[1];
                _ajax2.default.preView(http, fileClass);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'GetPlanlog',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var id, _ref3, data, planLogData, i, phttp, Avatar, iconfont;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                id = {
                                    id: this.id
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/schedule/GetSchedule', 'post', id);

                            case 3:
                                _ref3 = _context.sent;
                                data = _ref3.data;
                                planLogData = data;

                                planLogData.result.tag = planLogData.result.tag.split(',');
                                planLogData.result.startTime = (0, _api.formatTimeSymbol)(planLogData.result.startTime, '/');
                                planLogData.result.endTime = (0, _api.formatTimeSymbol)(planLogData.result.endTime, '/');

                                //会议参与人
                                _context.t0 = regeneratorRuntime.keys(planLogData.result.participantList);

                            case 10:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 20;
                                    break;
                                }

                                i = _context.t1.value;

                                //头像
                                phttp = '/api/services/web/personal/GetEmployeePhoto?id=' + planLogData.result.participantList[i].employeeId;
                                _context.next = 15;
                                return _ajax2.default.getUserAvatar(phttp);

                            case 15:
                                Avatar = _context.sent;

                                planLogData.result.participantList[i].employeeAvatar = Avatar.tempFilePath;
                                //状态
                                planLogData.result.participantList[i].status = planLogData.result.participantList[i].status.replace(/\s+/g, "");
                                _context.next = 10;
                                break;

                            case 20:
                                _context.t2 = regeneratorRuntime.keys(planLogData.result.attachmentList);

                            case 21:
                                if ((_context.t3 = _context.t2()).done) {
                                    _context.next = 68;
                                    break;
                                }

                                i = _context.t3.value;
                                _context.t4 = planLogData.result.attachmentList[i].extension.split('.')[1];
                                _context.next = _context.t4 === 'pdf' ? 26 : _context.t4 === 'png' ? 31 : _context.t4 === 'docx' ? 36 : _context.t4 === 'doc' ? 41 : _context.t4 === 'xls' ? 46 : _context.t4 === 'xlsx' ? 51 : _context.t4 === 'jpg' ? 56 : 61;
                                break;

                            case 26:
                                iconfont = {};

                                iconfont['icon'] = 'icon-pdfpng1';
                                iconfont['color'] = '#e20000';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 31:
                                iconfont = {};

                                iconfont['icon'] = 'icon-pdfpng1';
                                iconfont['color'] = '#e20000';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 36:
                                iconfont = {};

                                iconfont['icon'] = 'icon-wold1';
                                iconfont['color'] = '#009dff';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 41:
                                iconfont = {};

                                iconfont['icon'] = 'icon-wold1';
                                iconfont['color'] = '#009dff';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 46:
                                iconfont = {};

                                iconfont['icon'] = 'icon-exl1';
                                iconfont['color'] = '#069400';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 51:
                                iconfont = {};

                                iconfont['icon'] = 'icon-exl1';
                                iconfont['color'] = '#069400';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 56:
                                iconfont = {};

                                iconfont['icon'] = 'icon-jpggeshi';
                                iconfont['color'] = '#ff9900';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 61:
                                iconfont = {};

                                iconfont['icon'] = 'icon-weizhiwenjiangeshi';
                                iconfont['color'] = '#7a7a7a';
                                planLogData.result.attachmentList[i].icon = iconfont;
                                return _context.abrupt('break', 66);

                            case 66:
                                _context.next = 21;
                                break;

                            case 68:
                                this.planLogData = planLogData.result;
                                this.$apply();

                            case 70:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetPlanlog() {
                return _ref2.apply(this, arguments);
            }

            return GetPlanlog;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.id = options.id;
            this.GetPlanlog();
            this.$apply();
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/schedule/plan/details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiZGF0YSIsImlkIiwicGxhbkxvZ0RhdGEiLCJwYXNzQ291bnQiLCJhdmF0YXIiLCJtZXRob2RzIiwicHJldmlldyIsImZpbGVJZCIsImZpbGVOYW1lIiwiY29uc29sZSIsImxvZyIsImh0dHAiLCJmaWxlQ2xhc3MiLCJzcGxpdCIsImFqYXgiLCJwcmVWaWV3IiwiZ2V0RGF0YSIsInJlc3VsdCIsInRhZyIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJwYXJ0aWNpcGFudExpc3QiLCJpIiwicGh0dHAiLCJlbXBsb3llZUlkIiwiZ2V0VXNlckF2YXRhciIsIkF2YXRhciIsImVtcGxveWVlQXZhdGFyIiwidGVtcEZpbGVQYXRoIiwic3RhdHVzIiwicmVwbGFjZSIsImF0dGFjaG1lbnRMaXN0IiwiZXh0ZW5zaW9uIiwiaWNvbmZvbnQiLCJpY29uIiwiJGFwcGx5Iiwib3B0aW9ucyIsIkdldFBsYW5sb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0hDLGdCQUFJLENBREQ7QUFFSEMseUJBQWEsRUFGVjtBQUdIQyx1QkFBVyxDQUhSO0FBSUhDLG9CQUFRO0FBSkwsUyxRQU1QQyxPLEdBQVU7QUFDTkMsbUJBRE0sbUJBQ0VDLE1BREYsRUFDVUMsUUFEVixFQUNvQjtBQUN0QkMsd0JBQVFDLEdBQVIsQ0FBWUgsTUFBWixFQUFvQkMsUUFBcEI7QUFDQSxvQkFBSUcsT0FBTyw2REFBNkRKLE1BQXhFO0FBQ0Esb0JBQUlLLFlBQVksTUFBTUosU0FBU0ssS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBdEI7QUFDQUMsK0JBQUtDLE9BQUwsQ0FBYUosSUFBYixFQUFtQkMsU0FBbkI7QUFDSDtBQU5LLFM7Ozs7Ozs7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QUNmQSx5Q0FBUyxNQUFULElBQW1CLFdBQW5CO0FBQ0FBLHlDQUFTLE9BQVQsSUFBb0IsU0FBcEI7QUFDQS9CLDRDQUFZZSxNQUFaLENBQW1CYyxjQUFuQixDQUFrQ1QsQ0FBbEMsRUFBcUNZLElBQXJDLEdBQTRDRCxRQUE1Qzs7OztBQUdJQSx3QyxHQUFXLEU7O0FBQ2ZBLHlDQUFTLE1BQVQsSUFBbUIsZUFBbkI7QUFDQUEseUNBQVMsT0FBVCxJQUFvQixTQUFwQjtBQUNBL0IsNENBQVllLE1BQVosQ0FBbUJjLGNBQW5CLENBQWtDVCxDQUFsQyxFQUFxQ1ksSUFBckMsR0FBNENELFFBQTVDOzs7O0FBR0lBLHdDLEdBQVcsRTs7QUFDZkEseUNBQVMsTUFBVCxJQUFtQix5QkFBbkI7QUFDQUEseUNBQVMsT0FBVCxJQUFvQixTQUFwQjtBQUNBL0IsNENBQVllLE1BQVosQ0FBbUJjLGNBQW5CLENBQWtDVCxDQUFsQyxFQUFxQ1ksSUFBckMsR0FBNENELFFBQTVDOzs7Ozs7OztBQUlaLHFDQUFLL0IsV0FBTCxHQUFtQkEsWUFBWWUsTUFBL0I7QUFDQSxxQ0FBS2tCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFFR0MsTyxFQUFTO0FBQ1osaUJBQUtuQyxFQUFMLEdBQVVtQyxRQUFRbkMsRUFBbEI7QUFDQSxpQkFBS29DLFVBQUw7QUFDQSxpQkFBS0YsTUFBTDtBQUNIOzs7O0VBbkc4QkcsZUFBS0MsSTs7a0JBQW5CekMsSyIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBmb3JtYXRUaW1lU3ltYm9sXHJcbiAgICB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBwbGFuTG9nRGF0YToge30sXHJcbiAgICAgICAgICAgIHBhc3NDb3VudDogMCxcclxuICAgICAgICAgICAgYXZhdGFyOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgcHJldmlldyhmaWxlSWQsIGZpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlSWQsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3NjaGVkdWxlQXR0YWNobWVudC9HZXREb2N1bWVudEZpbGU/aWQ9JyArIGZpbGVJZFxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVDbGFzcyA9ICcuJyArIGZpbGVOYW1lLnNwbGl0KCcuJylbMV07XHJcbiAgICAgICAgICAgICAgICBhamF4LnByZVZpZXcoaHR0cCwgZmlsZUNsYXNzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXN5bmMgR2V0UGxhbmxvZygpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHsgZGF0YSB9ID0gYXdhaXQgYWpheC5nZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3NjaGVkdWxlL0dldFNjaGVkdWxlJyxcclxuICAgICAgICAgICAgICAgICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgdmFyIHBsYW5Mb2dEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgcGxhbkxvZ0RhdGEucmVzdWx0LnRhZyA9IHBsYW5Mb2dEYXRhLnJlc3VsdC50YWcuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICBwbGFuTG9nRGF0YS5yZXN1bHQuc3RhcnRUaW1lID0gZm9ybWF0VGltZVN5bWJvbChwbGFuTG9nRGF0YS5yZXN1bHQuc3RhcnRUaW1lLCAnLycpXHJcbiAgICAgICAgICAgIHBsYW5Mb2dEYXRhLnJlc3VsdC5lbmRUaW1lID0gZm9ybWF0VGltZVN5bWJvbChwbGFuTG9nRGF0YS5yZXN1bHQuZW5kVGltZSwgJy8nKVxyXG5cclxuICAgICAgICAgICAgIC8v5Lya6K6u5Y+C5LiO5Lq6XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gIHBsYW5Mb2dEYXRhLnJlc3VsdC5wYXJ0aWNpcGFudExpc3QpIHtcclxuICAgICAgICAgICAgICAgLy/lpLTlg49cclxuICAgICAgICAgICAgICAgIHZhciBwaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBwbGFuTG9nRGF0YS5yZXN1bHQucGFydGljaXBhbnRMaXN0W2ldLmVtcGxveWVlSWRcclxuICAgICAgICAgICAgICAgIHZhciBBdmF0YXIgPSBhd2FpdCBhamF4LmdldFVzZXJBdmF0YXIocGh0dHApO1xyXG4gICAgICAgICAgICAgICAgcGxhbkxvZ0RhdGEucmVzdWx0LnBhcnRpY2lwYW50TGlzdFtpXS5lbXBsb3llZUF2YXRhciA9IEF2YXRhci50ZW1wRmlsZVBhdGg7XHJcbiAgICAgICAgICAgICAgICAvL+eKtuaAgVxyXG4gICAgICAgICAgICAgICAgIHBsYW5Mb2dEYXRhLnJlc3VsdC5wYXJ0aWNpcGFudExpc3RbaV0uc3RhdHVzPXBsYW5Mb2dEYXRhLnJlc3VsdC5wYXJ0aWNpcGFudExpc3RbaV0uc3RhdHVzLnJlcGxhY2UoL1xccysvZyxcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBwbGFuTG9nRGF0YS5yZXN1bHQuYXR0YWNobWVudExpc3QpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGxhbkxvZ0RhdGEucmVzdWx0LmF0dGFjaG1lbnRMaXN0W2ldLmV4dGVuc2lvbi5zcGxpdCgnLicpWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGRmJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGljb25mb250ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi1wZGZwbmcxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbmZvbnRbJ2NvbG9yJ10gPSAnI2UyMDAwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5Mb2dEYXRhLnJlc3VsdC5hdHRhY2htZW50TGlzdFtpXS5pY29uID0gaWNvbmZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BuZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uZm9udFsnaWNvbiddID0gJ2ljb24tcGRmcG5nMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25mb250Wydjb2xvciddID0gJyNlMjAwMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuTG9nRGF0YS5yZXN1bHQuYXR0YWNobWVudExpc3RbaV0uaWNvbiA9IGljb25mb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkb2N4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGljb25mb250ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi13b2xkMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25mb250Wydjb2xvciddID0gJyMwMDlkZmYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuTG9nRGF0YS5yZXN1bHQuYXR0YWNobWVudExpc3RbaV0uaWNvbiA9IGljb25mb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkb2MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWNvbmZvbnQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbmZvbnRbJ2ljb24nXSA9ICdpY29uLXdvbGQxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbmZvbnRbJ2NvbG9yJ10gPSAnIzAwOWRmZic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5Mb2dEYXRhLnJlc3VsdC5hdHRhY2htZW50TGlzdFtpXS5pY29uID0gaWNvbmZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3hscyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uZm9udFsnaWNvbiddID0gJ2ljb24tZXhsMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25mb250Wydjb2xvciddID0gJyMwNjk0MDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuTG9nRGF0YS5yZXN1bHQuYXR0YWNobWVudExpc3RbaV0uaWNvbiA9IGljb25mb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd4bHN4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGljb25mb250ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi1leGwxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbmZvbnRbJ2NvbG9yJ10gPSAnIzA2OTQwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5Mb2dEYXRhLnJlc3VsdC5hdHRhY2htZW50TGlzdFtpXS5pY29uID0gaWNvbmZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pwZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uZm9udFsnaWNvbiddID0gJ2ljb24tanBnZ2VzaGknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uZm9udFsnY29sb3InXSA9ICcjZmY5OTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbkxvZ0RhdGEucmVzdWx0LmF0dGFjaG1lbnRMaXN0W2ldLmljb24gPSBpY29uZm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGljb25mb250ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi13ZWl6aGl3ZW5qaWFuZ2VzaGknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uZm9udFsnY29sb3InXSA9ICcjN2E3YTdhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbkxvZ0RhdGEucmVzdWx0LmF0dGFjaG1lbnRMaXN0W2ldLmljb24gPSBpY29uZm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wbGFuTG9nRGF0YSA9IHBsYW5Mb2dEYXRhLnJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0UGxhbmxvZygpO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19