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

var conflictList = function (_wepy$page) {
    _inherits(conflictList, _wepy$page);

    function conflictList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, conflictList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = conflictList.__proto__ || Object.getPrototypeOf(conflictList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            subCaseInfoData: {},
            conflictListData: []
        }, _this.components = {}, _this.methods = {
            toConflictDetial: function toConflictDetial(index) {
                wx.navigateTo({
                    url: './conflictDetail?id=' + index
                });
            },
            compileBtn: function compileBtn(index) {
                var _this2 = this;

                console.log(index);
                wx.showModal({
                    title: '提示', //提示的标题,
                    content: '是否删除', //提示的内容,
                    showCancel: true, //是否显示取消按钮,
                    cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                    cancelColor: '#000000', //取消按钮的文字颜色,
                    confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: '#5d73fa', //确定按钮的文字颜色,
                    success: function success(res) {
                        if (res.confirm) {
                            _this2.conflictListData.splice(index, 1);
                            try {
                                wx.setStorageSync('CREATE_CONFLICTLIST_DATA', _this2.conflictListData);
                            } catch (error) {
                                console.log(error);
                            }
                            _this2.$apply();
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
                });
            },
            toCreateConflict: function toCreateConflict() {
                var createPage = 'prevPageListPage';
                wx.navigateTo({
                    url: './createConflict?listPage=' + createPage
                });
            }
        }, _this.events = {}, _this.watch = {
            conflictListData: function conflictListData(data, data1) {
                // console.log(data,data1)
                // if(data1.length!==0){
                this.subCaseInfoData.CaseClientRelationList = data;
                this.CreateOrUpdateCaseGeneralInfo();
                // }
                this.$apply();
            }
        }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(conflictList, [{
        key: 'CreateOrUpdateCaseGeneralInfo',

        //案件基本信息提交
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData;
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
                                return _ajax2.default.getData('/api/services/web/case/CreateOrUpdateCaseGeneralInfo', 'post', this.subCaseInfoData);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    wx.setStorageSync('CREATE_CASEINFO_DATA', this.subCaseInfoData);
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function CreateOrUpdateCaseGeneralInfo() {
                return _ref2.apply(this, arguments);
            }

            return CreateOrUpdateCaseGeneralInfo;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.subCaseInfoData = wx.getStorageSync('CREATE_CASEINFO_DATA');
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var conflictListData = wx.getStorageSync('CREATE_CONFLICTLIST_DATA');
            if (conflictListData.length !== 0) {
                this.conflictListData = conflictListData;
            }
        }
    }]);

    return conflictList;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(conflictList , 'pages/modules/myRegister/conflict/conflictList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJjb25mbGljdExpc3QiLCJkYXRhIiwic3ViQ2FzZUluZm9EYXRhIiwiY29uZmxpY3RMaXN0RGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwidG9Db25mbGljdERldGlhbCIsImluZGV4Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcGlsZUJ0biIsImNvbnNvbGUiLCJsb2ciLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInNwbGljZSIsInNldFN0b3JhZ2VTeW5jIiwiZXJyb3IiLCIkYXBwbHkiLCJjYW5jZWwiLCJ0b0NyZWF0ZUNvbmZsaWN0IiwiY3JlYXRlUGFnZSIsImV2ZW50cyIsIndhdGNoIiwiZGF0YTEiLCJDYXNlQ2xpZW50UmVsYXRpb25MaXN0IiwiQ3JlYXRlT3JVcGRhdGVDYXNlR2VuZXJhbEluZm8iLCJjb21wdXRlZCIsInNob3dMb2FkaW5nIiwibWFzayIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJzaG93VG9hc3QiLCJtZXNzYWdlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJsZW5ndGgiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsSSxHQUFPO0FBQ0hDLDZCQUFpQixFQURkO0FBRUhDLDhCQUFrQjtBQUZmLFMsUUFJUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ05DLDRCQURNLDRCQUNXQyxLQURYLEVBQ2tCO0FBQ3BCQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLHlCQUF5Qkg7QUFEcEIsaUJBQWQ7QUFHSCxhQUxLO0FBTU5JLHNCQU5NLHNCQU1LSixLQU5MLEVBTVk7QUFBQTs7QUFDZEssd0JBQVFDLEdBQVIsQ0FBWU4sS0FBWjtBQUNBQyxtQkFBR00sU0FBSCxDQUFhO0FBQ1RDLDJCQUFPLElBREUsRUFDSTtBQUNiQyw2QkFBUyxNQUZBLEVBRVE7QUFDakJDLGdDQUFZLElBSEgsRUFHUztBQUNsQkMsZ0NBQVksSUFKSCxFQUlTO0FBQ2xCQyxpQ0FBYSxTQUxKLEVBS2U7QUFDeEJDLGlDQUFhLElBTkosRUFNVTtBQUNuQkMsa0NBQWMsU0FQTCxFQU9nQjtBQUN6QkMsNkJBQVMsc0JBQU87QUFDWiw0QkFBSUMsSUFBSUMsT0FBUixFQUFpQjtBQUNiLG1DQUFLckIsZ0JBQUwsQ0FBc0JzQixNQUF0QixDQUE2QmxCLEtBQTdCLEVBQW9DLENBQXBDO0FBQ0EsZ0NBQUk7QUFDQUMsbUNBQUdrQixjQUFILENBQWtCLDBCQUFsQixFQUE4QyxPQUFLdkIsZ0JBQW5EO0FBQ0gsNkJBRkQsQ0FFRSxPQUFPd0IsS0FBUCxFQUFjO0FBQ1pmLHdDQUFRQyxHQUFSLENBQVljLEtBQVo7QUFDSDtBQUNELG1DQUFLQyxNQUFMO0FBQ0gseUJBUkQsTUFRTyxJQUFJTCxJQUFJTSxNQUFSLEVBQWdCO0FBQ25CakIsb0NBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSjtBQXBCUSxpQkFBYjtBQXNCSCxhQTlCSztBQStCTmlCLDRCQS9CTSw4QkErQmE7QUFDZixvQkFBSUMsYUFBYSxrQkFBakI7QUFDQXZCLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUssK0JBQStCcUI7QUFEMUIsaUJBQWQ7QUFHSDtBQXBDSyxTLFFBc0NWQyxNLEdBQVMsRSxRQUNUQyxLLEdBQVE7QUFDSjlCLDRCQURJLDRCQUNhRixJQURiLEVBQ21CaUMsS0FEbkIsRUFDMEI7QUFDMUI7QUFDQTtBQUNBLHFCQUFLaEMsZUFBTCxDQUFxQmlDLHNCQUFyQixHQUE4Q2xDLElBQTlDO0FBQ0EscUJBQUttQyw2QkFBTDtBQUNBO0FBQ0EscUJBQUtSLE1BQUw7QUFDSDtBQVJHLFMsUUFVUlMsUSxHQUFXLEU7Ozs7OztBQUNYOzs7Ozs7OztBQUVJN0IsbUNBQUc4QixXQUFILENBQWU7QUFDWHZCLDJDQUFPLFlBREksRUFDVTtBQUNyQndCLDBDQUFNLElBRkssRUFFQztBQUNaakIsNkNBQVMsc0JBQU8sQ0FBRTtBQUhQLGlDQUFmOzt1Q0FLb0JrQixlQUFLQyxPQUFMLENBQ2hCLHNEQURnQixFQUVoQixNQUZnQixFQUdoQixLQUFLdkMsZUFIVyxDOzs7QUFBaEJ3Qyx1Qzs7QUFLSixvQ0FBSUEsUUFBUUMsVUFBUixJQUFzQixHQUExQixFQUErQjtBQUMzQm5DLHVDQUFHa0IsY0FBSCxDQUFrQixzQkFBbEIsRUFBMEMsS0FBS3hCLGVBQS9DO0FBQ0gsaUNBRkQsTUFFTztBQUNITSx1Q0FBR29DLFNBQUgsQ0FBYTtBQUNUN0IsK0NBQU8yQixRQUFRekMsSUFBUixDQUFhMEIsS0FBYixDQUFtQmtCLE9BRGpCO0FBRVRDLDhDQUFNLE1BRkc7QUFHVEMsa0RBQVUsSUFIRDtBQUlUUiw4Q0FBTTtBQUpHLHFDQUFiO0FBTUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFSTtBQUNMLGlCQUFLckMsZUFBTCxHQUF1Qk0sR0FBR3dDLGNBQUgsQ0FBa0Isc0JBQWxCLENBQXZCO0FBQ0g7OztpQ0FDUTtBQUNMLGdCQUFJN0MsbUJBQW1CSyxHQUFHd0MsY0FBSCxDQUFrQiwwQkFBbEIsQ0FBdkI7QUFDQSxnQkFBSTdDLGlCQUFpQjhDLE1BQWpCLEtBQTRCLENBQWhDLEVBQW1DO0FBQy9CLHFCQUFLOUMsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNIO0FBQ0o7Ozs7RUF2RnFDK0MsZUFBS0MsSTs7a0JBQTFCbkQsWSIsImZpbGUiOiJjb25mbGljdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjb25mbGljdExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3ViQ2FzZUluZm9EYXRhOiB7fSxcbiAgICAgICAgICAgIGNvbmZsaWN0TGlzdERhdGE6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b0NvbmZsaWN0RGV0aWFsKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vY29uZmxpY3REZXRhaWw/aWQ9JyArIGluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGlsZUJ0bihpbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsIC8v5o+Q56S655qE5qCH6aKYLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5piv5ZCm5Yig6ZmkJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsIC8v5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzAwMDAwMCcsIC8v5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsIC8v56Gu5a6a5oyJ6ZKu55qE5paH5a2X77yM6buY6K6k5Li65Y+W5raI77yM5pyA5aSaIDQg5Liq5a2X56ymLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjNWQ3M2ZhJywgLy/noa7lrprmjInpkq7nmoTmloflrZfpopzoibIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0TGlzdERhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnQ1JFQVRFX0NPTkZMSUNUTElTVF9EQVRBJywgdGhpcy5jb25mbGljdExpc3REYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0NyZWF0ZUNvbmZsaWN0KCkge1xuICAgICAgICAgICAgICAgIHZhciBjcmVhdGVQYWdlID0gJ3ByZXZQYWdlTGlzdFBhZ2UnO1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0ZUNvbmZsaWN0P2xpc3RQYWdlPScgKyBjcmVhdGVQYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIGNvbmZsaWN0TGlzdERhdGEoZGF0YSwgZGF0YTEpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLGRhdGExKVxuICAgICAgICAgICAgICAgIC8vIGlmKGRhdGExLmxlbmd0aCE9PTApe1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViQ2FzZUluZm9EYXRhLkNhc2VDbGllbnRSZWxhdGlvbkxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVDYXNlR2VuZXJhbEluZm8oKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgLy/moYjku7bln7rmnKzkv6Hmga/mj5DkuqRcbiAgICAgICAgYXN5bmMgQ3JlYXRlT3JVcGRhdGVDYXNlR2VuZXJhbEluZm8oKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0NyZWF0ZU9yVXBkYXRlQ2FzZUdlbmVyYWxJbmZvJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJDYXNlSW5mb0RhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DQVNFSU5GT19EQVRBJywgdGhpcy5zdWJDYXNlSW5mb0RhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViQ2FzZUluZm9EYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DQVNFSU5GT19EQVRBJyk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIHZhciBjb25mbGljdExpc3REYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ0NSRUFURV9DT05GTElDVExJU1RfREFUQScpO1xuICAgICAgICAgICAgaWYgKGNvbmZsaWN0TGlzdERhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25mbGljdExpc3REYXRhID0gY29uZmxpY3RMaXN0RGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4iXX0=