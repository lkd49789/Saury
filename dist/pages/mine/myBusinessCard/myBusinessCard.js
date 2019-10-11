'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myBusinessCard = function (_wepy$page) {
    _inherits(myBusinessCard, _wepy$page);

    function myBusinessCard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, myBusinessCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myBusinessCard.__proto__ || Object.getPrototypeOf(myBusinessCard)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: "个人名片",
            navigationBarBackgroundColor: '#ffffff',
            navigationBarTextStyle: 'black'
        }, _this.data = {
            id: '',
            currentAvatar: '',
            baseData: {},
            resumeData: {},
            viewSize: 0,
            isShowWorkList: true,
            isShowProjectList: true,
            isCard: false
        }, _this.components = {}, _this.methods = {
            dial: function dial() {
                wx.makePhoneCall({
                    phoneNumber: this.baseData.phone
                });
            },

            // map(){
            //     wx.navigateTo({ url: './map' });
            // },
            contactNow: function contactNow() {
                var _this2 = this;

                wx.showActionSheet({
                    itemList: ['立即呼叫', '保存至通讯录'], //按钮的文字数组，数组长度最大为6个,
                    itemColor: '#5d73fa', //按钮的文字颜色,
                    success: function success(res) {
                        switch (res.tapIndex) {
                            case 0:
                                wx.makePhoneCall({
                                    phoneNumber: _this2.baseData.phone
                                    //  success
                                });
                                break;
                            case 1:
                                wx.addPhoneContact({
                                    //   photoFilePath: ,
                                    //   nickName: ,
                                    //   lastName: ,
                                    //   middleName: ,
                                    firstName: _this2.baseData.name,
                                    mobilePhoneNumber: _this2.baseData.phone,
                                    //   weChatNumber: ,
                                    //   email: ,
                                    success: function success(result) {
                                        console.log(result);
                                    },
                                    fail: function fail() {},
                                    complete: function complete() {}
                                });
                                break;
                        }
                    }
                });
            },
            toggleWorkList: function toggleWorkList() {
                this.isShowWorkList = !this.isShowWorkList;
                this.$apply();
            },
            toggleProjectList: function toggleProjectList() {
                this.isShowProjectList = !this.isShowProjectList;
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(myBusinessCard, [{
        key: 'GetMe',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/personal/GetEmployee', 'post', {
                                    id: this.id
                                });

                            case 2:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    this.baseData = resData.data.result;
                                    // this.baseData.goodBusiness=null;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetMe() {
                return _ref2.apply(this, arguments);
            }

            return GetMe;
        }()
    }, {
        key: 'GetResume',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, _resumeData$projectEx;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/employeeResume/GetResume', 'post', {
                                    id: this.id
                                });

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    this.resumeData = resData.data.result;
                                    (_resumeData$projectEx = this.resumeData.projectExperiences).push.apply(_resumeData$projectEx, _toConsumableArray(this.resumeData.firmProjectExperiences));
                                    this.resumeData.workExperiences.forEach(function (item) {
                                        item.startDate = item.startDate.split('T')[0];
                                        item.endDate = item.endDate.split('T')[0];
                                    });
                                    this.resumeData.projectExperiences.forEach(function (item) {
                                        item.startDate = item.startDate.split('T')[0];
                                        item.endDate = item.endDate.split('T')[0];
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetResume() {
                return _ref3.apply(this, arguments);
            }

            return GetResume;
        }()
    }, {
        key: 'GetEmployeePhoto',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var http, imageURL;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + this.id;
                                _context3.next = 3;
                                return _ajax2.default.getAavatar(http);

                            case 3:
                                imageURL = _context3.sent;

                                this.urlTobase64(imageURL);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetEmployeePhoto() {
                return _ref4.apply(this, arguments);
            }

            return GetEmployeePhoto;
        }()
    }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage(res) {
            if (res.from === 'button') {
                // 来自页面内转发按钮
                console.log(res.target);
            }
            return {
                title: '\u5F8B\u667A\u835F-' + this.baseData.name + '\u5F8B\u5E08\u7535\u5B50\u540D\u7247\uFF0C\u8BF7\u60A8\u60E0\u5B58\uFF1B',
                path: '/pages/mine/myBusinessCard/myBusinessCard?originalFirm=' + this.baseData.originalFirm + '&name=' + this.baseData.name + '&phone=' + this.baseData.phone + '&perEmail=' + this.baseData.perEmail + '&homeAddress=' + this.baseData.homeAddress + '&goodBusiness=' + this.baseData.goodBusiness + '&currentAvatar=' + this.currentAvatar,
                success: function success(res) {
                    console.log("转发成功:" + JSON.stringify(res));
                }
            };
        }
    }, {
        key: 'urlTobase64',
        value: function urlTobase64(url) {
            var _this3 = this;

            wx.getFileSystemManager().readFile({
                filePath: url, //选择图片返回的相对路径
                encoding: 'base64', //编码格式
                success: function success(res) {
                    //成功的回调
                    var base64 = 'data:image/png;base64,' + res.data;
                    base64 = base64.replace(/[\r\n]/g, "");
                    _this3.currentAvatar = base64;
                    _this3.$apply();
                }
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var _this4 = this;

            if (options.id) {
                this.id = options.id;
                this.GetEmployeePhoto();
                this.GetMe();
                this.GetResume();
            } else {
                this.baseData = options;
                this.currentAvatar = options.currentAvatar;
                this.isCard = true;
            }
            this.viewSize = wx.getSystemInfo({
                success: function success(res) {
                    _this4.viewSize = res.windowWidth;
                    _this4.$apply();
                }
            });
        }
    }]);

    return myBusinessCard;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(myBusinessCard , 'pages/mine/myBusinessCard/myBusinessCard'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15QnVzaW5lc3NDYXJkLmpzIl0sIm5hbWVzIjpbIm15QnVzaW5lc3NDYXJkIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsImlkIiwiY3VycmVudEF2YXRhciIsImJhc2VEYXRhIiwicmVzdW1lRGF0YSIsInZpZXdTaXplIiwiaXNTaG93V29ya0xpc3QiLCJpc1Nob3dQcm9qZWN0TGlzdCIsImlzQ2FyZCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZGlhbCIsInd4IiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwicGhvbmUiLCJjb250YWN0Tm93Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJpdGVtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwidGFwSW5kZXgiLCJhZGRQaG9uZUNvbnRhY3QiLCJmaXJzdE5hbWUiLCJuYW1lIiwibW9iaWxlUGhvbmVOdW1iZXIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImNvbXBsZXRlIiwidG9nZ2xlV29ya0xpc3QiLCIkYXBwbHkiLCJ0b2dnbGVQcm9qZWN0TGlzdCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicHJvamVjdEV4cGVyaWVuY2VzIiwicHVzaCIsImZpcm1Qcm9qZWN0RXhwZXJpZW5jZXMiLCJ3b3JrRXhwZXJpZW5jZXMiLCJmb3JFYWNoIiwiaXRlbSIsInN0YXJ0RGF0ZSIsInNwbGl0IiwiZW5kRGF0ZSIsImh0dHAiLCJnZXRBYXZhdGFyIiwiaW1hZ2VVUkwiLCJ1cmxUb2Jhc2U2NCIsImZyb20iLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJvcmlnaW5hbEZpcm0iLCJwZXJFbWFpbCIsImhvbWVBZGRyZXNzIiwiZ29vZEJ1c2luZXNzIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImdldEZpbGVTeXN0ZW1NYW5hZ2VyIiwicmVhZEZpbGUiLCJmaWxlUGF0aCIsImVuY29kaW5nIiwiYmFzZTY0IiwicmVwbGFjZSIsIm9wdGlvbnMiLCJHZXRFbXBsb3llZVBob3RvIiwiR2V0TWUiLCJHZXRSZXN1bWUiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUNxQkEsYzs7Ozs7Ozs7Ozs7Ozs7ME1BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDBDQUE4QixTQUZ6QjtBQUdMQyxvQ0FBd0I7QUFIbkIsUyxRQUtUQyxJLEdBQU87QUFDSEMsZ0JBQUksRUFERDtBQUVIQywyQkFBZSxFQUZaO0FBR0hDLHNCQUFVLEVBSFA7QUFJSEMsd0JBQVksRUFKVDtBQUtIQyxzQkFBVSxDQUxQO0FBTUhDLDRCQUFnQixJQU5iO0FBT0hDLCtCQUFtQixJQVBoQjtBQVFIQyxvQkFBUTtBQVJMLFMsUUFVUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ05DLGdCQURNLGtCQUNDO0FBQ0hDLG1CQUFHQyxhQUFILENBQWlCO0FBQ2JDLGlDQUFhLEtBQUtYLFFBQUwsQ0FBY1k7QUFEZCxpQkFBakI7QUFHSCxhQUxLOztBQU1OO0FBQ0E7QUFDQTtBQUNBQyxzQkFUTSx3QkFTTztBQUFBOztBQUNUSixtQkFBR0ssZUFBSCxDQUFtQjtBQUNmQyw4QkFBVSxDQUFDLE1BQUQsRUFBUyxRQUFULENBREssRUFDZTtBQUM5QkMsK0JBQVcsU0FGSSxFQUVPO0FBQ3RCQyw2QkFBUyxzQkFBTztBQUNaLGdDQUFRQyxJQUFJQyxRQUFaO0FBQ0ksaUNBQUssQ0FBTDtBQUNJVixtQ0FBR0MsYUFBSCxDQUFpQjtBQUNiQyxpREFBYSxPQUFLWCxRQUFMLENBQWNZO0FBQzNCO0FBRmEsaUNBQWpCO0FBSUE7QUFDSixpQ0FBSyxDQUFMO0FBQ0lILG1DQUFHVyxlQUFILENB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QVF0RSxhQUE3QjtBQUNBLHFCQUFLTSxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBQ0QsaUJBQUtILFFBQUwsR0FBZ0JPLEdBQUdnRSxhQUFILENBQWlCO0FBQzdCeEQseUJBQVMsc0JBQU87QUFDWiwyQkFBS2YsUUFBTCxHQUFnQmdCLElBQUl3RCxXQUFwQjtBQUNBLDJCQUFLNUMsTUFBTDtBQUNIO0FBSjRCLGFBQWpCLENBQWhCO0FBTUg7Ozs7RUF4SnVDNkMsZUFBS0MsSTs7a0JBQTVCcEYsYyIsImZpbGUiOiJteUJ1c2luZXNzQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJ0AvdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXlCdXNpbmVzc0NhcmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuS4quS6uuWQjeeJh1wiLFxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgY3VycmVudEF2YXRhcjogJycsXG4gICAgICAgICAgICBiYXNlRGF0YToge30sXG4gICAgICAgICAgICByZXN1bWVEYXRhOiB7fSxcbiAgICAgICAgICAgIHZpZXdTaXplOiAwLFxuICAgICAgICAgICAgaXNTaG93V29ya0xpc3Q6IHRydWUsXG4gICAgICAgICAgICBpc1Nob3dQcm9qZWN0TGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzQ2FyZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZGlhbCgpIHtcbiAgICAgICAgICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuYmFzZURhdGEucGhvbmVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBtYXAoKXtcbiAgICAgICAgICAgIC8vICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9tYXAnIH0pO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNvbnRhY3ROb3coKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3Q6IFsn56uL5Y2z5ZG85Y+rJywgJ+S/neWtmOiHs+mAmuiur+W9lSddLCAvL+aMiemSrueahOaWh+Wtl+aVsOe7hO+8jOaVsOe7hOmVv+W6puacgOWkp+S4ujbkuKosXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db2xvcjogJyM1ZDczZmEnLCAvL+aMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLnRhcEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLmJhc2VEYXRhLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guYWRkUGhvbmVDb250YWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcGhvdG9GaWxlUGF0aDogLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBuaWNrTmFtZTogLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBsYXN0TmFtZTogLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBtaWRkbGVOYW1lOiAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMuYmFzZURhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBob25lTnVtYmVyOiB0aGlzLmJhc2VEYXRhLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3ZUNoYXROdW1iZXI6ICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZW1haWw6ICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlV29ya0xpc3QoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dXb3JrTGlzdCA9ICF0aGlzLmlzU2hvd1dvcmtMaXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dQcm9qZWN0TGlzdCA9ICF0aGlzLmlzU2hvd1Byb2plY3RMaXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7fTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgYXN5bmMgR2V0TWUoKSB7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWUnLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlRGF0YSA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5iYXNlRGF0YS5nb29kQnVzaW5lc3M9bnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIEdldFJlc3VtZSgpIHtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9lbXBsb3llZVJlc3VtZS9HZXRSZXN1bWUnLFxuICAgICAgICAgICAgICAgICdwb3N0Jywge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWVEYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VtZURhdGEucHJvamVjdEV4cGVyaWVuY2VzLnB1c2goLi4udGhpcy5yZXN1bWVEYXRhLmZpcm1Qcm9qZWN0RXhwZXJpZW5jZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWVEYXRhLndvcmtFeHBlcmllbmNlcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZERhdGUgPSBpdGVtLmVuZERhdGUuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWVEYXRhLnByb2plY3RFeHBlcmllbmNlcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnREYXRlID0gaXRlbS5zdGFydERhdGUuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZERhdGUgPSBpdGVtLmVuZERhdGUuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRFbXBsb3llZVBob3RvKCkge1xuICAgICAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgdGhpcy5pZDtcbiAgICAgICAgICAgIHZhciBpbWFnZVVSTCA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICAgIHRoaXMudXJsVG9iYXNlNjQoaW1hZ2VVUkwpO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBg5b6L5pm66I2fLSR7dGhpcy5iYXNlRGF0YS5uYW1lfeW+i+W4iOeUteWtkOWQjeeJh++8jOivt+aCqOaDoOWtmO+8m2AsXG4gICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9taW5lL215QnVzaW5lc3NDYXJkL215QnVzaW5lc3NDYXJkP29yaWdpbmFsRmlybT0nICsgdGhpcy5iYXNlRGF0YS5vcmlnaW5hbEZpcm0gKyAnJm5hbWU9JyArIHRoaXMuYmFzZURhdGEubmFtZSArICcmcGhvbmU9JyArIHRoaXMuYmFzZURhdGEucGhvbmUgKyAnJnBlckVtYWlsPScgKyB0aGlzLmJhc2VEYXRhLnBlckVtYWlsICsgJyZob21lQWRkcmVzcz0nICsgdGhpcy5iYXNlRGF0YS5ob21lQWRkcmVzcyArICcmZ29vZEJ1c2luZXNzPScgKyB0aGlzLmJhc2VEYXRhLmdvb2RCdXNpbmVzcyArICcmY3VycmVudEF2YXRhcj0nICsgdGhpcy5jdXJyZW50QXZhdGFyLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L2s5Y+R5oiQ5YqfOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVybFRvYmFzZTY0KHVybCkge1xuICAgICAgICAgICAgd3guZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKS5yZWFkRmlsZSh7XG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHVybCwgLy/pgInmi6nlm77niYfov5Tlm57nmoTnm7jlr7not6/lvoRcbiAgICAgICAgICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NCcsIC8v57yW56CB5qC85byPXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgLy/miJDlip/nmoTlm57osINcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2U2NCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvW1xcclxcbl0vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEF2YXRhciA9IGJhc2U2NDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0RW1wbG95ZWVQaG90bygpO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0TWUoKVxuICAgICAgICAgICAgICAgIHRoaXMuR2V0UmVzdW1lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZURhdGEgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEF2YXRhciA9IG9wdGlvbnMuY3VycmVudEF2YXRhcjtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZXdTaXplID0gd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U2l6ZSA9IHJlcy53aW5kb3dXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4iXX0=