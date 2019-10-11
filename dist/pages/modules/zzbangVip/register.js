'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _thirdParty_ajax = require('./../../../utils/cofig/thirdParty_ajax.js');

var _thirdParty_ajax2 = _interopRequireDefault(_thirdParty_ajax);

var _input = require('./../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//其他


var register = function (_wepy$page) {
    _inherits(register, _wepy$page);

    function register() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, register);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = register.__proto__ || Object.getPrototypeOf(register)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "PhoneNo": { "v-bind:input.sync": "PhoneNo", "v-bind:inputValue.sync": "PhoneNoValue", "v-bind:twoWayTitle.once": "PhoneNoValue" }, "Email": { "v-bind:input.sync": "Email", "v-bind:inputValue.sync": "EmailValue", "v-bind:twoWayTitle.once": "EmailValue" }, "CertificateNo": { "v-bind:input.sync": "CertificateNo", "v-bind:inputValue.sync": "CertificateNoValue", "v-bind:twoWayTitle.once": "CertificateNoValue" }, "Address": { "v-bind:input.sync": "Address", "v-bind:inputValue.sync": "AddressValue", "v-bind:twoWayTitle.once": "AddressValue" }, "IdCardNo": { "v-bind:input.sync": "IdCardNo", "v-bind:inputValue.sync": "IdCardNoValue", "v-bind:twoWayTitle.once": "IdCardNoValue" }, "LawFirm": { "v-bind:input.sync": "LawFirm", "v-bind:inputValue.sync": "LawFirmValue", "v-bind:twoWayTitle.once": "LawFirmValue" }, "Introduce": { "v-bind:input.sync": "Introduce", "v-bind:inputValue.sync": "IntroduceValue", "v-bind:twoWayTitle.once": "IntroduceValue" } }, _this.$events = {}, _this.components = {
            Name: _input2.default,
            PhoneNo: _input2.default,
            Email: _input2.default,
            CertificateNo: _input2.default,
            Address: _input2.default,
            IdCardNo: _input2.default,
            LawFirm: _input2.default,
            Introduce: _input2.default
        }, _this.data = {
            subRegisterInfo: {},
            IdCardUpImage: '',
            IdCardDownImage: '',
            CertificatePictureImage: '',
            InspectionPictureImage: '',
            Name: {
                title: '姓名',
                name: 'Name',
                warning: false
            },
            NameValue: '',
            IdCardNo: {
                title: '身份证号',
                name: 'IdCardNo',
                warning: false
            },
            IdCardNoValue: '',
            Address: {
                title: '详细地址',
                name: 'Address',
                warning: false
            },
            AddressValue: '',
            PhoneNo: {
                title: '电话',
                name: 'PhoneNo',
                warning: false
            },
            PhoneNoValue: '',
            Email: {
                title: '邮箱',
                name: 'Email',
                warning: false
            },
            EmailValue: '',
            CertificateNo: {
                title: '职业证号',
                name: 'CertificateNo',
                warning: false
            },
            CertificateNoValue: '',
            //地区
            region: [],
            LawFirm: {
                title: '律所',
                name: 'LawFirm',
                warning: false
            },
            LawFirmValue: '',
            Introduce: {
                title: '简介',
                name: 'Introduce',
                warning: false,
                options: true
            },
            IntroduceValue: '',
            isAgree: false
        }, _this.methods = {
            subRegisterInfo: function subRegisterInfo() {
                if (Object.keys(this.subRegisterInfo).length >= 14 && this.isAgree) {
                    this.subRegisterInfo.LawFirm = this.LawFirmValue || '';
                    this.subRegisterInfo.Introduce = this.IntroduceValue || '';
                    this.$apply();
                    this.RegisterLawyer();
                } else {
                    wx.showToast({
                        title: '请输入必填项！', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: false, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            },
            addImage: function addImage(e) {
                var _this2 = this;

                wx.chooseImage({
                    count: '1', //最多可以选择的图片张数,
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function success(res) {
                        var filePath = res.tempFilePaths[0];
                        switch (e.currentTarget.id) {
                            case "IdCardUpPicture":
                                _this2.IdCardUpImage = filePath;
                                _this2.subRegisterInfo.IdCardUp = filePath;
                                break;
                            case "IdCardDownPicture":
                                _this2.IdCardDownImage = filePath;
                                _this2.subRegisterInfo.IdCardDown = filePath;
                                break;
                            case "CertificatePicture":
                                _this2.CertificatePictureImage = filePath;
                                _this2.subRegisterInfo.CertificatePicture = filePath;
                                break;
                            case "InspectionPicture":
                                _this2.InspectionPictureImage = filePath;
                                _this2.subRegisterInfo.InspectionPicture = filePath;
                                break;
                            default:
                                break;
                        }
                        _this2.$apply();
                    },
                    fail: function fail() {},
                    complete: function complete() {}
                });
            },
            changePickerData: function changePickerData(e) {
                var region = e.detail.value;
                this.region = region;
                this.subRegisterInfo.Province = region[0];
                this.subRegisterInfo.City = region[1];
                this.subRegisterInfo.Area = region[2];
                this.$apply();
            },
            readyPact: function readyPact() {
                wx.navigateTo({
                    url: './pactDoc'
                });
            },
            isAgree: function isAgree() {
                this.isAgree = !this.isAgree;
                this.$apply();
            }
        }, _this.events = {}, _this.watch = {
            NameValue: function NameValue(value) {
                this.subRegisterInfo.Name = value;
                this.$apply();
            },
            IdCardNoValue: function IdCardNoValue(value) {
                this.subRegisterInfo.IdCardNo = value;
                this.$apply();
            },
            AddressValue: function AddressValue(value) {
                this.subRegisterInfo.Address = value;
                this.$apply();
            },
            PhoneNoValue: function PhoneNoValue(value) {
                this.subRegisterInfo.PhoneNo = value;
                this.$apply();
            },
            EmailValue: function EmailValue(value) {
                this.subRegisterInfo.Email = value;
                this.$apply();
            },
            CertificateNoValue: function CertificateNoValue(value) {
                this.subRegisterInfo.CertificateNo = value;
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(register, [{
        key: 'RegisterLawyer',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, pages, currPage, prevPage;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _context.next = 3;
                                return _thirdParty_ajax2.default.getData('/Register/RegisterLawyer', 'POST', this.subRegisterInfo);

                            case 3:
                                resData = _context.sent;

                                if (resData.data.data.status) {
                                    pages = getCurrentPages();
                                    currPage = pages[pages.length - 1]; // 当前页

                                    prevPage = pages[pages.length - 2]; // 上一个页面
                                    // 如果存在上一页

                                    if (prevPage) {
                                        // 可以调用上一页的函数
                                        prevPage.isRefresh(true, this.subRegisterInfo.PlatformMemberId);
                                        wx.navigateBack({
                                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                        });
                                    }
                                } else {
                                    wx.showToast({
                                        title: resData.data.data.msg, //提示的内容,
                                        icon: 'success', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: true, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function RegisterLawyer() {
                return _ref2.apply(this, arguments);
            }

            return RegisterLawyer;
        }()
    }, {
        key: 'changeIsAgree',
        value: function changeIsAgree(isAgree) {
            this.isAgree = isAgree;
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            if (this.$parent.global.userInfo.id && this.$parent.global.tenant.id) {
                this.subRegisterInfo.PlatformMemberId = this.$parent.global.tenant.id.toString() + this.$parent.global.userInfo.id.toString();
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return register;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(register , 'pages/modules/zzbangVip/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiTmFtZSIsIlBob25lTm8iLCJFbWFpbCIsIkNlcnRpZmljYXRlTm8iLCJBZGRyZXNzIiwiSWRDYXJkTm8iLCJMYXdGaXJtIiwiSW50cm9kdWNlIiwiZGF0YSIsInN1YlJlZ2lzdGVySW5mbyIsIklkQ2FyZFVwSW1hZ2UiLCJJZENhcmREb3duSW1hZ2UiLCJDZXJ0aWZpY2F0ZVBpY3R1cmVJbWFnZSIsIkluc3BlY3Rpb25QaWN0dXJlSW1hZ2UiLCJ0aXRsZSIsIm5hbWUiLCJ3YXJuaW5nIiwiTmFtZVZhbHVlIiwiSWRDYXJkTm9WYWx1ZSIsIkFkZHJlc3NWYWx1ZSIsIlBob25lTm9WYWx1ZSIsIkVtYWlsVmFsdWUiLCJDZXJ0aWZpY2F0ZU5vVmFsdWUiLCJyZWdpb24iLCJMYXdGaXJtVmFsdWUiLCJvcHRpb25zIiwiSW50cm9kdWNlVmFsdWUiLCJpc0FncmVlIiwibWV0aG9kcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCIkYXBwbHkiLCJSZWdpc3Rlckxhd3llciIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJhZGRJbWFnZSIsImUiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiZmlsZVBhdGgiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiY3VycmVudFRhcmdldCIsImlkIiwiSWRDYXJkVXAiLCJJZENhcmREb3duIiwiQ2VydGlmaWNhdGVQaWN0dXJlIiwiSW5zcGVjdGlvblBpY3R1cmUiLCJmYWlsIiwiY29tcGxldGUiLCJjaGFuZ2VQaWNrZXJEYXRhIiwiZGV0YWlsIiwidmFsdWUiLCJQcm92aW5jZSIsIkNpdHkiLCJBcmVhIiwicmVhZHlQYWN0IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJzaG93TG9hZGluZyIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1cyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiY3VyclBhZ2UiLCJwcmV2UGFnZSIsImlzUmVmcmVzaCIsIlBsYXRmb3JtTWVtYmVySWQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1zZyIsIiRwYXJlbnQiLCJnbG9iYWwiLCJ1c2VySW5mbyIsInRlbmFudCIsInRvU3RyaW5nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQU1BOzs7SUFHcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsTUFBdkMsRUFBOEMsMEJBQXlCLFdBQXZFLEVBQW1GLDJCQUEwQixXQUE3RyxFQUFSLEVBQWtJLFdBQVUsRUFBQyxxQkFBb0IsU0FBckIsRUFBK0IsMEJBQXlCLGNBQXhELEVBQXVFLDJCQUEwQixjQUFqRyxFQUE1SSxFQUE2UCxTQUFRLEVBQUMscUJBQW9CLE9BQXJCLEVBQTZCLDBCQUF5QixZQUF0RCxFQUFtRSwyQkFBMEIsWUFBN0YsRUFBclEsRUFBZ1gsaUJBQWdCLEVBQUMscUJBQW9CLGVBQXJCLEVBQXFDLDBCQUF5QixvQkFBOUQsRUFBbUYsMkJBQTBCLG9CQUE3RyxFQUFoWSxFQUFtZ0IsV0FBVSxFQUFDLHFCQUFvQixTQUFyQixFQUErQiwwQkFBeUIsY0FBeEQsRUFBdUUsMkJBQTBCLGNBQWpHLEVBQTdnQixFQUE4bkIsWUFBVyxFQUFDLHFCQUFvQixVQUFyQixFQUFnQywwQkFBeUIsZUFBekQsRUFBeUUsMkJBQTBCLGVBQW5HLEVBQXpvQixFQUE2dkIsV0FBVSxFQUFDLHFCQUFvQixTQUFyQixFQUErQiwwQkFBeUIsY0FBeEQsRUFBdUUsMkJBQTBCLGNBQWpHLEVBQXZ3QixFQUF3M0IsYUFBWSxFQUFDLHFCQUFvQixXQUFyQixFQUFpQywwQkFBeUIsZ0JBQTFELEVBQTJFLDJCQUEwQixnQkFBckcsRUFBcDRCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlDQURFO0FBRUZDLG9DQUZFO0FBR0ZDLGtDQUhFO0FBSUZDLDBDQUpFO0FBS0ZDLG9DQUxFO0FBTUZDLHFDQU5FO0FBT0ZDLG9DQVBFO0FBUUZDO0FBUkUsUyxRQVVOQyxJLEdBQU87QUFDSEMsNkJBQWlCLEVBRGQ7QUFFSEMsMkJBQWUsRUFGWjtBQUdIQyw2QkFBaUIsRUFIZDtBQUlIQyxxQ0FBeUIsRUFKdEI7QUFLSEMsb0NBQXdCLEVBTHJCO0FBTUhiLGtCQUFNO0FBQ0ZjLHVCQUFPLElBREw7QUFFRkMsc0JBQU0sTUFGSjtBQUdGQyx5QkFBUztBQUhQLGFBTkg7QUFXSEMsdUJBQVcsRUFYUjtBQVlIWixzQkFBVTtBQUNOUyx1QkFBTyxNQUREO0FBRU5DLHNCQUFNLFVBRkE7QUFHTkMseUJBQVM7QUFISCxhQVpQO0FBaUJIRSwyQkFBZSxFQWpCWjtBQWtCSGQscUJBQVM7QUFDTFUsdUJBQU8sTUFERjtBQUVMQyxzQkFBTSxTQUZEO0FBR0xDLHlCQUFTO0FBSEosYUFsQk47QUF1QkhHLDBCQUFjLEVBdkJYO0FBd0JIbEIscUJBQVM7QUFDTGEsdUJBQU8sSUFERjtBQUVMQyxzQkFBTSxTQUZEO0FBR0xDLHlCQUFTO0FBSEosYUF4Qk47QUE2QkhJLDBCQUFjLEVBN0JYO0FBOEJIbEIsbUJBQU87QUFDSFksdUJBQU8sSUFESjtBQUVIQyxzQkFBTSxPQUZIO0FBR0hDLHlCQUFTO0FBSE4sYUE5Qko7QUFtQ0hLLHdCQUFZLEVBbkNUO0FBb0NIbEIsMkJBQWU7QUFDWFcsdUJBQU8sTUFESTtBQUVYQyxzQkFBTSxlQUZLO0FBR1hDLHlCQUFTO0FBSEUsYUFwQ1o7QUF5Q0hNLGdDQUFvQixFQXpDakI7QUEwQ0g7QUFDQUMsb0JBQVEsRUEzQ0w7QUE0Q0hqQixxQkFBUztBQUNMUSx1QkFBTyxJQURGO0FBRUxDLHNCQUFNLFNBRkQ7QUFHTEMseUJBQVM7QUFISixhQTVDTjtBQWlESFEsMEJBQWMsRUFqRFg7QUFrREhqQix1QkFBVztBQUNQTyx1QkFBTyxJQURBO0FBRVBDLHNCQUFNLFdBRkM7QUFHUEMseUJBQVMsS0FIRjtBQUlQUyx5QkFBUztBQUpGLGFBbERSO0FBd0RIQyw0QkFBZ0IsRUF4RGI7QUF5REhDLHFCQUFTO0FBekROLFMsUUEyRFBDLE8sR0FBVTtBQUNObkIsMkJBRE0sNkJBQ1k7QUFDZCxvQkFBSW9CLE9BQU9DLElBQVAsQ0FBWSxLQUFLckIsZUFBakIsRUFBa0NzQixNQUFsQyxJQUE0QyxFQUE1QyxJQUFrRCxLQUFLSixPQUEzRCxFQUFvRTtBQUNoRSx5QkFBS2xCLGVBQUwsQ0FBcUJILE9BQXJCLEdBQStCLEtBQUtrQixZQUFMLElBQXFCLEVBQXBEO0FBQ0EseUJBQUtmLGVBQUwsQ0FBcUJGLFNBQXJCLEdBQWlDLEtBQUttQixjQUFMLElBQXVCLEVBQXhEO0FBQ0EseUJBQUtNLE1BQUw7QUFDQSx5QkFBS0MsY0FBTDtBQUNILGlCQUxELE1BS087QUFDSEMsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUckIsK0JBQU8sU0FERSxFQUNTO0FBQ2xCc0IsOEJBQU0sTUFGRyxFQUVLO0FBQ2RDLGtDQUFVLElBSEQsRUFHTztBQUNoQkMsOEJBQU0sS0FKRyxFQUlJO0FBQ2JDLGlDQUFTLHNCQUFPLENBQUU7QUFMVCxxQkFBYjtBQU9IO0FBQ0osYUFoQks7QUFpQk5DLG9CQWpCTSxvQkFpQkdDLENBakJILEVBaUJNO0FBQUE7O0FBQ1JQLG1CQUFHUSxXQUFILENBQWU7QUFDWEMsMkJBQU8sR0FESSxFQUNDO0FBQ1pDLDhCQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGQyxFQUUyQjtBQUN0Q0MsZ0NBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhELEVBR3NCO0FBQ2pDTiw2QkFBUyxzQkFBTztBQUNaLDRCQUFJTyxXQUFXQyxJQUFJQyxhQUFKLENBQWtCLENBQWxCLENBQWY7QUFDQSxnQ0FBUVAsRUFBRVEsYUFBRixDQUFnQkMsRUFBeEI7QUFDSSxpQ0FBSyxpQkFBTDtBQUNJLHVDQUFLeEMsYUFBTCxHQUFxQm9DLFFBQXJCO0FBQ0EsdUNBQUtyQyxlQUFMLENBQXFCMEMsUUFBckIsR0FBZ0NMLFFBQWhDO0FBQ0E7QUFDSixpQ0FBSyxtQkFBTDtBQUNJLHVDQUFLbkMsZUFBTCxHQUF1Qm1DLFFBQXZCO0FBQ0EsdUNBQUtyQyxlQUFMLENBQXFCMkMsVUFBckIsR0FBa0NOLFFBQWxDO0FBQ0E7QUFDSixpQ0FBSyxvQkFBTDtBQUNJLHVDQUFLbEMsdUJBQUwsR0FBK0JrQyxRQUEvQjtBQUNBLHVDQUFLckMsZUFBTCxDQUFxQjRDLGtCQUFyQixHQUEwQ1AsUUFBMUM7QUFDQTtBQUNKLGlDQUFLLG1CQUFMO0FBQ0ksdUNBQUtqQyxzQkFBTCxHQUE4QmlDLFFBQTlCO0FBQ0EsdUNBQUtyQyxlQUFMLENBQXFCNkMsaUJBQXJCLEdBQXlDUixRQUF6QztBQUNBO0FBQ0o7QUFDSTtBQWxCUjtBQW9CQSwrQkFBS2QsTUFBTDtBQUNILHFCQTNCVTtBQTRCWHVCLDBCQUFNLGdCQUFNLENBQUUsQ0E1Qkg7QUE2QlhDLDhCQUFVLG9CQUFNLENBQUU7QUE3QlAsaUJBQWY7QUErQkgsYUFqREs7QUFrRE5DLDRCQWxETSw0QkFrRFdoQixDQWxEWCxFQWtEYztBQUNoQixvQkFBSWxCLFNBQVNrQixFQUFFaUIsTUFBRixDQUFTQyxLQUF0QjtBQUNBLHFCQUFLcEMsTUFBTCxHQUFjQSxNQUFkO0FBQ0EscUJBQUtkLGVBQUwsQ0FBcUJtRCxRQUFyQixHQUFnQ3JDLE9BQU8sQ0FBUCxDQUFoQztBQUNBLHFCQUFLZCxlQUFMLENBQXFCb0QsSUFBckIsR0FBNEJ0QyxPQUFPLENBQVAsQ0FBNUI7QUFDQSxxQkFBS2QsZUFBTCxDQUFxQnFELElBQXJCLEdBQTRCdkMsT0FBTyxDQUFQLENBQTVCO0FBQ0EscUJBQUtTLE1BQUw7QUFDSCxhQXpESztBQTBETitCLHFCQTFETSx1QkEwRE07QUFDUjdCLG1CQUFHOEIsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQTlESztBQStETnRDLG1CQS9ETSxxQkErREk7QUFDTixxQkFBS0EsT0FBTCxHQUFlLENBQUMsS0FBS0EsT0FBckI7QUFDQSxxQkFBS0ssTUFBTDtBQUNIO0FBbEVLLFMsUUFvRVZrQyxNLEdBQVMsRSxRQUNUQyxLLEdBQVE7QUFDSmxELHFCQURJLHFCQUNNMEMsS0FETixFQUNhO0FBQ2IscUJBQUtsRCxlQUFMLENBQXFCVCxJQUFyQixHQUE0QjJELEtBQTVCO0FBQ0EscUJBQUszQixNQUFMO0FBQ0gsYUFKRztBQUtKZCx5QkFMSSx5QkFLVXlDLEtBTFYsRUFLaUI7QUFDakIscUJBQUtsRCxlQUFMLENBQXFCSixRQUFyQixHQUFnQ3NELEtBQWhDO0FBQ0EscUJBQUszQixNQUFMO0FBQ0gsYUFSRztBQVNKYix3QkFUSSx3QkFTU3dDLEtBVFQsRUFTZ0I7QUFDaEIscUJBQUtsRCxlQUFMLENBQXFCTCxPQUFyQixHQUErQnVELEtBQS9CO0FBQ0EscUJBQUszQixNQUFMO0FBQ0gsYUFaRztBQWFKWix3QkFiSSx3QkFhU3VDLEtBYlQsRUFhZ0I7QUFDaEIscUJBQUtsRCxlQUFMLENBQXFCUixPQUFyQixHQUErQjBELEtBQS9CO0FBQ0EscUJBQUszQixNQUFMO0FBQ0gsYUFoQkc7QUFpQkpYLHNCQWpCSSxzQkFpQk9zQyxLQWpCUCxFQWlCYztBQUNkLHFCQUFLbEQsZUFBTCxDQUFxQlAsS0FBckIsR0FBNkJ5RCxLQUE3QjtBQUNBLHFCQUFLM0IsTUFBTDtBQUNILGFBcEJHO0FBcUJKViw4QkFyQkksOEJBcUJlcUMsS0FyQmYsRUFxQnNCO0FBQ3RCLHFCQUFLbEQsZUFBTCxDQUFxQk4sYUFBckIsR0FBcUN3RCxLQUFyQztBQUNBLHFCQUFLM0IsTUFBTDtBQUNIO0FBeEJHLFMsUUEwQlJvQyxRLEdBQVcsRTs7Ozs7Ozs7Ozs7O0FBRVBsQyxtQ0FBR21DLFdBQUgsQ0FBZTtBQUNYdkQsMkNBQU8sWUFESSxFQUNVO0FBQ3JCd0IsMENBQU0sSUFGSyxFQUVDO0FBQ1pDLDZDQUFTLHNCQUFPLENBQ2Y7QUFKVSxpQ0FBZjs7dUNBTW9CK0IsMEJBQUtDLE9BQUwsQ0FDaEIsMEJBRGdCLEVBRWhCLE1BRmdCLEVBR2hCLEtBQUs5RCxlQUhXLEM7OztBQUFoQitELHVDOztBQUtKLG9DQUFJQSxRQUFRaEUsSUFBUixDQUFhQSxJQUFiLENBQWtCaUUsTUFBdEIsRUFBOEI7QUFDdEJDLHlDQURzQixHQUNkQyxpQkFEYztBQUVsQkMsNENBRmtCLEdBRVBGLE1BQU1BLE1BQU0zQyxNQUFOLEdBQWUsQ0FBckIsQ0FGTyxFQUVrQjs7QUFDcEM4Qyw0Q0FIa0IsR0FHUEgsTUFBTUEsTUFBTTNDLE1BQU4sR0FBZSxDQUFyQixDQUhPLEVBR2tCO0FBQ3hDOztBQUNBLHdDQUFJOEMsUUFBSixFQUFjO0FBQ1Y7QUFDQUEsaURBQVNDLFNBQVQsQ0FBbUIsSUFBbkIsRUFBd0IsS0FBS3JFLGVBQUwsQ0FBcUJzRSxnQkFBN0M7QUFDQTdDLDJDQUFHOEMsWUFBSCxDQUFnQjtBQUNaQyxtREFBTyxDQURLLENBQ0g7QUFERyx5Q0FBaEI7QUFHSDtBQUNSLGlDQVpELE1BWU87QUFDSC9DLHVDQUFHQyxTQUFILENBQWE7QUFDVHJCLCtDQUFPMEQsUUFBUWhFLElBQVIsQ0FBYUEsSUFBYixDQUFrQjBFLEdBRGhCLEVBQ3FCO0FBQzlCOUMsOENBQU0sU0FGRyxFQUVRO0FBQ2pCQyxrREFBVSxJQUhELEVBR087QUFDaEJDLDhDQUFNLElBSkcsRUFJRztBQUNaQyxpREFBUyxzQkFBTyxDQUFFO0FBTFQscUNBQWI7QUFPSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUVTWixPLEVBQVM7QUFDbkIsaUJBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGlCQUFLSyxNQUFMO0FBQ0g7OztpQ0FDUTtBQUNMLGdCQUFHLEtBQUttRCxPQUFMLENBQWFDLE1BQWIsQ0FBb0JDLFFBQXBCLENBQTZCbkMsRUFBN0IsSUFBaUMsS0FBS2lDLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkUsTUFBcEIsQ0FBMkJwQyxFQUEvRCxFQUFrRTtBQUM5RCxxQkFBS3pDLGVBQUwsQ0FBcUJzRSxnQkFBckIsR0FBdUMsS0FBS0ksT0FBTCxDQUFhQyxNQUFiLENBQW9CRSxNQUFwQixDQUEyQnBDLEVBQTNCLENBQThCcUMsUUFBOUIsS0FBMkMsS0FBS0osT0FBTCxDQUFhQyxNQUFiLENBQW9CQyxRQUFwQixDQUE2Qm5DLEVBQTdCLENBQWdDcUMsUUFBaEMsRUFBbEY7QUFDSDtBQUNKOzs7aUNBQ1EsQ0FBRTs7OztFQXBOdUJDLGVBQUtDLEk7O2tCQUF0QjlGLFEiLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy90aGlyZFBhcnR5X2FqYXguanMnO1xuICAgIGltcG9ydCBOYW1lIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgUGhvbmVObyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IEVtYWlsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGlja2VyL2lucHV0JztcbiAgICBpbXBvcnQgQ2VydGlmaWNhdGVObyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IEFkZHJlc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBJZENhcmRObyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgLy/lhbbku5ZcbiAgICBpbXBvcnQgTGF3RmlybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IEludHJvZHVjZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiTmFtZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiTmFtZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiTmFtZVZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiTmFtZVZhbHVlXCJ9LFwiUGhvbmVOb1wiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJQaG9uZU5vXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJQaG9uZU5vVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJQaG9uZU5vVmFsdWVcIn0sXCJFbWFpbFwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJFbWFpbFwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRW1haWxWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkVtYWlsVmFsdWVcIn0sXCJDZXJ0aWZpY2F0ZU5vXCI6e1widi1iaW5kOmlucHV0LnN5bmNcIjpcIkNlcnRpZmljYXRlTm9cIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIkNlcnRpZmljYXRlTm9WYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkNlcnRpZmljYXRlTm9WYWx1ZVwifSxcIkFkZHJlc3NcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQWRkcmVzc1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiQWRkcmVzc1ZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQWRkcmVzc1ZhbHVlXCJ9LFwiSWRDYXJkTm9cIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiSWRDYXJkTm9cIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcIklkQ2FyZE5vVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJJZENhcmROb1ZhbHVlXCJ9LFwiTGF3RmlybVwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJMYXdGaXJtXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJMYXdGaXJtVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJMYXdGaXJtVmFsdWVcIn0sXCJJbnRyb2R1Y2VcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiSW50cm9kdWNlXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJJbnRyb2R1Y2VWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkludHJvZHVjZVZhbHVlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIE5hbWUsXG4gICAgICAgICAgICBQaG9uZU5vLFxuICAgICAgICAgICAgRW1haWwsXG4gICAgICAgICAgICBDZXJ0aWZpY2F0ZU5vLFxuICAgICAgICAgICAgQWRkcmVzcyxcbiAgICAgICAgICAgIElkQ2FyZE5vLFxuICAgICAgICAgICAgTGF3RmlybSxcbiAgICAgICAgICAgIEludHJvZHVjZVxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3ViUmVnaXN0ZXJJbmZvOiB7fSxcbiAgICAgICAgICAgIElkQ2FyZFVwSW1hZ2U6ICcnLFxuICAgICAgICAgICAgSWRDYXJkRG93bkltYWdlOiAnJyxcbiAgICAgICAgICAgIENlcnRpZmljYXRlUGljdHVyZUltYWdlOiAnJyxcbiAgICAgICAgICAgIEluc3BlY3Rpb25QaWN0dXJlSW1hZ2U6ICcnLFxuICAgICAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aeT5ZCNJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIElkQ2FyZE5vOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfouqvku73or4Hlj7cnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdJZENhcmRObycsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSWRDYXJkTm9WYWx1ZTogJycsXG4gICAgICAgICAgICBBZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfor6bnu4blnLDlnYAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBBZGRyZXNzVmFsdWU6ICcnLFxuICAgICAgICAgICAgUGhvbmVObzoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn55S16K+dJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGhvbmVObycsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUGhvbmVOb1ZhbHVlOiAnJyxcbiAgICAgICAgICAgIEVtYWlsOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpgq7nrrEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbWFpbCcsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRW1haWxWYWx1ZTogJycsXG4gICAgICAgICAgICBDZXJ0aWZpY2F0ZU5vOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfogYzkuJror4Hlj7cnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDZXJ0aWZpY2F0ZU5vJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBDZXJ0aWZpY2F0ZU5vVmFsdWU6ICcnLFxuICAgICAgICAgICAgLy/lnLDljLpcbiAgICAgICAgICAgIHJlZ2lvbjogW10sXG4gICAgICAgICAgICBMYXdGaXJtOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflvovmiYAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdMYXdGaXJtJyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMYXdGaXJtVmFsdWU6ICcnLFxuICAgICAgICAgICAgSW50cm9kdWNlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnroDku4snLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdJbnRyb2R1Y2UnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSW50cm9kdWNlVmFsdWU6ICcnLFxuICAgICAgICAgICAgaXNBZ3JlZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzdWJSZWdpc3RlckluZm8oKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3ViUmVnaXN0ZXJJbmZvKS5sZW5ndGggPj0gMTQgJiYgdGhpcy5pc0FncmVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViUmVnaXN0ZXJJbmZvLkxhd0Zpcm0gPSB0aGlzLkxhd0Zpcm1WYWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJSZWdpc3RlckluZm8uSW50cm9kdWNlID0gdGhpcy5JbnRyb2R1Y2VWYWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWdpc3Rlckxhd3llcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeW/heWhq+mhue+8gScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkSW1hZ2UoZSkge1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6ICcxJywgLy/mnIDlpJrlj6/ku6XpgInmi6nnmoTlm77niYflvKDmlbAsXG4gICAgICAgICAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY3VycmVudFRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJJZENhcmRVcFBpY3R1cmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JZENhcmRVcEltYWdlID0gZmlsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViUmVnaXN0ZXJJbmZvLklkQ2FyZFVwID0gZmlsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJJZENhcmREb3duUGljdHVyZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLklkQ2FyZERvd25JbWFnZSA9IGZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YlJlZ2lzdGVySW5mby5JZENhcmREb3duID0gZmlsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDZXJ0aWZpY2F0ZVBpY3R1cmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DZXJ0aWZpY2F0ZVBpY3R1cmVJbWFnZSA9IGZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YlJlZ2lzdGVySW5mby5DZXJ0aWZpY2F0ZVBpY3R1cmUgPSBmaWxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkluc3BlY3Rpb25QaWN0dXJlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5zcGVjdGlvblBpY3R1cmVJbWFnZSA9IGZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YlJlZ2lzdGVySW5mby5JbnNwZWN0aW9uUGljdHVyZSA9IGZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VQaWNrZXJEYXRhKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVnaW9uID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YlJlZ2lzdGVySW5mby5Qcm92aW5jZSA9IHJlZ2lvblswXTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YlJlZ2lzdGVySW5mby5DaXR5ID0gcmVnaW9uWzFdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViUmVnaXN0ZXJJbmZvLkFyZWEgPSByZWdpb25bMl07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWFkeVBhY3QoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vcGFjdERvYydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0FncmVlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBZ3JlZSA9ICF0aGlzLmlzQWdyZWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIE5hbWVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViUmVnaXN0ZXJJbmZvLk5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSWRDYXJkTm9WYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViUmVnaXN0ZXJJbmZvLklkQ2FyZE5vID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEFkZHJlc3NWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViUmVnaXN0ZXJJbmZvLkFkZHJlc3MgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUGhvbmVOb1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJSZWdpc3RlckluZm8uUGhvbmVObyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFbWFpbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJSZWdpc3RlckluZm8uRW1haWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQ2VydGlmaWNhdGVOb1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJSZWdpc3RlckluZm8uQ2VydGlmaWNhdGVObyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgYXN5bmMgUmVnaXN0ZXJMYXd5ZXIoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvUmVnaXN0ZXIvUmVnaXN0ZXJMYXd5ZXInLFxuICAgICAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICAgICB0aGlzLnN1YlJlZ2lzdGVySW5mb1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuZGF0YS5kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyclBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTsgLy8g5b2T5YmN6aG1XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvLyDkuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5a2Y5Zyo5LiK5LiA6aG1XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul6LCD55So5LiK5LiA6aG155qE5Ye95pWwXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5pc1JlZnJlc2godHJ1ZSx0aGlzLnN1YlJlZ2lzdGVySW5mby5QbGF0Zm9ybU1lbWJlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5kYXRhLm1zZywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoYW5nZUlzQWdyZWUoaXNBZ3JlZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FncmVlID0gaXNBZ3JlZTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuJHBhcmVudC5nbG9iYWwudXNlckluZm8uaWQmJnRoaXMuJHBhcmVudC5nbG9iYWwudGVuYW50LmlkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YlJlZ2lzdGVySW5mby5QbGF0Zm9ybU1lbWJlcklkID10aGlzLiRwYXJlbnQuZ2xvYmFsLnRlbmFudC5pZC50b1N0cmluZygpICsgdGhpcy4kcGFyZW50Lmdsb2JhbC51c2VySW5mby5pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvblNob3coKSB7fTtcbiAgICB9XG4iXX0=