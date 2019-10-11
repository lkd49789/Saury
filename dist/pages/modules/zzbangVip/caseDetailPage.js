'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _thirdParty_ajax = require('./../../../utils/cofig/thirdParty_ajax.js');

var _thirdParty_ajax2 = _interopRequireDefault(_thirdParty_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseDetailPage = function (_wepy$page) {
    _inherits(caseDetailPage, _wepy$page);

    function caseDetailPage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, caseDetailPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseDetailPage.__proto__ || Object.getPrototypeOf(caseDetailPage)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            CaseType: '',
            PlatformMemberId: '',
            CaseId: '',
            caseDetailData: {},
            isShowCaseQR: false,
            caseQRCodeUrl: ''
        }, _this.methods = {
            PreviewQRcode: function PreviewQRcode() {
                wx.previewImage({
                    current: this.caseQRCodeUrl,
                    urls: [this.caseQRCodeUrl], //需要预览的图片链接列表,
                    success: function success() {
                        console.log('预览成功');
                    }
                });
            },
            taskCase: function taskCase() {
                if (this.PlatformMemberId.length !== 0) {
                    this.TakeCase();
                } else {
                    wx.showModal({
                        title: '提示', //提示的标题,
                        content: '用户需登陆，方可接案！', //提示的内容,
                        showCancel: true, //是否显示取消按钮,
                        cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                        cancelColor: '#000000', //取消按钮的文字颜色,
                        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                        confirmColor: '#5d73fa', //确定按钮的文字颜色,
                        success: function success(res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: './register'
                                });
                            } else if (res.cancel) {
                                console.log('用户点击取消');
                            }
                        }
                    });
                }
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(caseDetailPage, [{
        key: 'GetCaseDetail',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, caseDetailData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _thirdParty_ajax2.default.getData('/Cases/GetCaseDetail', 'GET', {
                                    CaseId: this.CaseId,
                                    PlatformMemberId: this.PlatformMemberId
                                });

                            case 2:
                                resData = _context.sent;

                                if (!resData.data.data.status) {
                                    _context.next = 18;
                                    break;
                                }

                                caseDetailData = resData.data.data.data;
                                _context.t0 = caseDetailData.Type;
                                _context.next = _context.t0 === 1 ? 8 : _context.t0 === 2 ? 10 : _context.t0 === 3 ? 12 : _context.t0 === 4 ? 14 : 16;
                                break;

                            case 8:
                                caseDetailData.Type = '个人借款';
                                return _context.abrupt('break', 16);

                            case 10:
                                caseDetailData.Type = '个人应收';
                                return _context.abrupt('break', 16);

                            case 12:
                                caseDetailData.Type = '企业借款';
                                return _context.abrupt('break', 16);

                            case 14:
                                caseDetailData.Type = '企业应收';
                                return _context.abrupt('break', 16);

                            case 16:
                                caseDetailData.ExecuteArea = caseDetailData.ExecuteArea.split('/')[1] ? caseDetailData.ExecuteArea : caseDetailData.ExecuteArea.split('/')[0];
                                this.caseDetailData = resData.data.data.data;

                            case 18:
                                this.$apply();

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseDetail() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseDetail;
        }()
        //接案

    }, {
        key: 'TakeCase',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, pages, currPage, prevPage;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context2.next = 3;
                                return _thirdParty_ajax2.default.getData('/Cases/TakeCase', 'GET', {
                                    PlatformMemberId: this.PlatformMemberId,
                                    CaseId: this.CaseId
                                });

                            case 3:
                                resData = _context2.sent;

                                if (resData.data.data.status) {
                                    pages = getCurrentPages();
                                    currPage = pages[pages.length - 1]; // 当前页

                                    prevPage = pages[pages.length - 2]; // 上一个页面
                                    // 如果存在上一页

                                    if (prevPage) {
                                        // 可以调用上一页的函数
                                        prevPage.isRefresh(true);
                                        wx.navigateBack({
                                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                        });
                                    }
                                } else {
                                    wx.showToast({
                                        title: resData.data.data.msg, //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: false, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function TakeCase() {
                return _ref3.apply(this, arguments);
            }

            return TakeCase;
        }()
        //获取二维码

    }, {
        key: 'GetCaseQRCodeUrl',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var resData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _thirdParty_ajax2.default.getData('/Cases/GetCaseQRCodeUrl', 'GET', {
                                    PlatformMemberId: this.PlatformMemberId,
                                    CaseId: this.CaseId
                                });

                            case 2:
                                resData = _context3.sent;

                                if (resData.data.data.status) {
                                    this.caseQRCodeUrl = resData.data.data.url;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetCaseQRCodeUrl() {
                return _ref4.apply(this, arguments);
            }

            return GetCaseQRCodeUrl;
        }()
    }, {
        key: 'isRefresh',
        value: function isRefresh(refresh, PlatformMemberId) {
            if (refresh) {
                this.PlatformMemberId = PlatformMemberId;
            }
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.CaseType = options.CaseType;
            this.PlatformMemberId = options.PlatformMemberId || '';
            this.CaseId = options.CaseId;
            this.GetCaseDetail();
            if (this.CaseType !== '1' && this.CaseType !== '2') {
                this.isShowCaseQR = true;
                this.GetCaseQRCodeUrl();
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return caseDetailPage;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(caseDetailPage , 'pages/modules/zzbangVip/caseDetailPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VEZXRhaWxQYWdlLmpzIl0sIm5hbWVzIjpbImNhc2VEZXRhaWxQYWdlIiwiZGF0YSIsIkNhc2VUeXBlIiwiUGxhdGZvcm1NZW1iZXJJZCIsIkNhc2VJZCIsImNhc2VEZXRhaWxEYXRhIiwiaXNTaG93Q2FzZVFSIiwiY2FzZVFSQ29kZVVybCIsIm1ldGhvZHMiLCJQcmV2aWV3UVJjb2RlIiwid3giLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwidGFza0Nhc2UiLCJsZW5ndGgiLCJUYWtlQ2FzZSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInJlcyIsImNvbmZpcm0iLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY2FuY2VsIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1cyIsIlR5cGUiLCJFeGVjdXRlQXJlYSIsInNwbGl0IiwiJGFwcGx5Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdXJyUGFnZSIsInByZXZQYWdlIiwiaXNSZWZyZXNoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93VG9hc3QiLCJtc2ciLCJpY29uIiwiZHVyYXRpb24iLCJyZWZyZXNoIiwib3B0aW9ucyIsIkdldENhc2VEZXRhaWwiLCJHZXRDYXNlUVJDb2RlVXJsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxjOzs7Ozs7Ozs7Ozs7OzswTUFDakJDLEksR0FBTztBQUNIQyxzQkFBVSxFQURQO0FBRUhDLDhCQUFrQixFQUZmO0FBR0hDLG9CQUFRLEVBSEw7QUFJSEMsNEJBQWdCLEVBSmI7QUFLSEMs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aUJBQUtDLGdCQUFMLEdBQXdCdUQsUUFBUXZELGdCQUFSLElBQTBCLEVBQWxEO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY3NELFFBQVF0RCxNQUF0QjtBQUNBLGlCQUFLdUQsYUFBTDtBQUNBLGdCQUFHLEtBQUt6RCxRQUFMLEtBQWdCLEdBQWhCLElBQXFCLEtBQUtBLFFBQUwsS0FBZ0IsR0FBeEMsRUFBNEM7QUFDeEMscUJBQUtJLFlBQUwsR0FBa0IsSUFBbEI7QUFDQSxxQkFBS3NELGdCQUFMO0FBQ0g7QUFDSjs7O2lDQUNRLENBQUU7Ozs7RUEvSTZCQyxlQUFLQyxJOztrQkFBNUI5RCxjIiwiZmlsZSI6ImNhc2VEZXRhaWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29maWcvdGhpcmRQYXJ0eV9hamF4LmpzJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhc2VEZXRhaWxQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIENhc2VUeXBlOiAnJyxcbiAgICAgICAgICAgIFBsYXRmb3JtTWVtYmVySWQ6ICcnLFxuICAgICAgICAgICAgQ2FzZUlkOiAnJyxcbiAgICAgICAgICAgIGNhc2VEZXRhaWxEYXRhOiB7fSxcbiAgICAgICAgICAgIGlzU2hvd0Nhc2VRUjpmYWxzZSxcbiAgICAgICAgICAgIGNhc2VRUkNvZGVVcmw6JycsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBQcmV2aWV3UVJjb2RlKCl7XG4gICAgICAgICAgICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDp0aGlzLmNhc2VRUkNvZGVVcmwsXG4gICAgICAgICAgICAgICAgICB1cmxzOiBbdGhpcy5jYXNlUVJDb2RlVXJsXSAsLy/pnIDopoHpooTop4jnmoTlm77niYfpk77mjqXliJfooagsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOigpPT57XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+mihOiniOaIkOWKnycpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFza0Nhc2UoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxhdGZvcm1NZW1iZXJJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYWtlQ2FzZSgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JywgLy/mj5DnpLrnmoTmoIfpopgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn55So5oi36ZyA55m76ZmG77yM5pa55Y+v5o6l5qGI77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLCAvL+WPlua2iOaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzAwMDAwMCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLCAvL+ehruWumuaMiemSrueahOaWh+Wtl+minOiJsixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9yZWdpc3RlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7fTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgYXN5bmMgR2V0Q2FzZURldGFpbCgpIHtcbiAgICAgICAgICAgIGxldCByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvQ2FzZXMvR2V0Q2FzZURldGFpbCcsXG4gICAgICAgICAgICAgICAgJ0dFVCcsIHtcbiAgICAgICAgICAgICAgICAgICAgQ2FzZUlkOiB0aGlzLkNhc2VJZCxcbiAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm1NZW1iZXJJZDp0aGlzLlBsYXRmb3JtTWVtYmVySWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLmRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhc2VEZXRhaWxEYXRhID0gcmVzRGF0YS5kYXRhLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNhc2VEZXRhaWxEYXRhLlR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZURldGFpbERhdGEuVHlwZSA9ICfkuKrkurrlgJ/mrL4nXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZURldGFpbERhdGEuVHlwZSA9ICfkuKrkurrlupTmlLYnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZURldGFpbERhdGEuVHlwZSA9ICfkvIHkuJrlgJ/mrL4nXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZURldGFpbERhdGEuVHlwZSA9ICfkvIHkuJrlupTmlLYnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZURldGFpbERhdGEuRXhlY3V0ZUFyZWEgPSBjYXNlRGV0YWlsRGF0YS5FeGVjdXRlQXJlYS5zcGxpdCgnLycpWzFdID8gY2FzZURldGFpbERhdGEuRXhlY3V0ZUFyZWEgOiBjYXNlRGV0YWlsRGF0YS5FeGVjdXRlQXJlYS5zcGxpdCgnLycpWzBdXG4gICAgICAgICAgICAgICAgdGhpcy5jYXNlRGV0YWlsRGF0YSA9IHJlc0RhdGEuZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v5o6l5qGIXG4gICAgICAgIGFzeW5jIFRha2VDYXNlKCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL0Nhc2VzL1Rha2VDYXNlJyxcbiAgICAgICAgICAgICAgICAnR0VUJywge1xuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1lbWJlcklkOiB0aGlzLlBsYXRmb3JtTWVtYmVySWQsXG4gICAgICAgICAgICAgICAgICAgIENhc2VJZDogdGhpcy5DYXNlSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLmRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07IC8vIOW9k+WJjemhtVxuICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvLyDkuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlrZjlnKjkuIrkuIDpobVcbiAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul6LCD55So5LiK5LiA6aG155qE5Ye95pWwXG4gICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmlzUmVmcmVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmRhdGEubXNnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v6I635Y+W5LqM57u056CBXG4gICAgICAgIGFzeW5jIEdldENhc2VRUkNvZGVVcmwoKXtcbiAgICAgICAgICAgdmFyIHJlc0RhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgJy9DYXNlcy9HZXRDYXNlUVJDb2RlVXJsJyxcbiAgICAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1lbWJlcklkOiB0aGlzLlBsYXRmb3JtTWVtYmVySWQsXG4gICAgICAgICAgICAgICAgICAgIENhc2VJZDogdGhpcy5DYXNlSWRcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgKVxuICAgICAgICAgICBpZihyZXNEYXRhLmRhdGEuZGF0YS5zdGF0dXMpe1xuICAgICAgICAgICAgICAgdGhpcy5jYXNlUVJDb2RlVXJsPXJlc0RhdGEuZGF0YS5kYXRhLnVybDtcbiAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpc1JlZnJlc2gocmVmcmVzaCwgUGxhdGZvcm1NZW1iZXJJZCkge1xuICAgICAgICAgICAgaWYgKHJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXRmb3JtTWVtYmVySWQgPSBQbGF0Zm9ybU1lbWJlcklkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLkNhc2VUeXBlID0gb3B0aW9ucy5DYXNlVHlwZTtcbiAgICAgICAgICAgIHRoaXMuUGxhdGZvcm1NZW1iZXJJZCA9IG9wdGlvbnMuUGxhdGZvcm1NZW1iZXJJZHx8Jyc7XG4gICAgICAgICAgICB0aGlzLkNhc2VJZCA9IG9wdGlvbnMuQ2FzZUlkO1xuICAgICAgICAgICAgdGhpcy5HZXRDYXNlRGV0YWlsKCk7XG4gICAgICAgICAgICBpZih0aGlzLkNhc2VUeXBlIT09JzEnJiZ0aGlzLkNhc2VUeXBlIT09JzInKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0Nhc2VRUj10cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZVFSQ29kZVVybCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=