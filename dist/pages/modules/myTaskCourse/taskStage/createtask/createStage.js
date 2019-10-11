'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _input = require('./../../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clientDetail = function (_wepy$page) {
    _inherits(clientDetail, _wepy$page);

    function clientDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, clientDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Name": { "xmlns:v-bind": "", "v-bind:input.sync": "Name", "v-bind:inputValue.sync": "NameValue", "v-bind:twoWayTitle.once": "NameValue" }, "Remark": { "v-bind:input.sync": "Remark", "v-bind:inputValue.sync": "RemarkValue", "v-bind:twoWayTitle.once": "RemarkValue" } }, _this.$events = {}, _this.components = {
            Name: _input2.default,
            Remark: _input2.default
        }, _this.data = {
            addOpacity: 1,
            submitData: {
                Id: "",
                Name: "",
                ProjectId: "",
                Remark: ""
            },
            Name: {
                title: '阶段名称',
                name: 'Name',
                options: false,
                warning: false
            },
            NameValue: '',
            Remark: {
                title: '备注',
                name: 'Remark',
                options: true,
                warning: false
            },
            RemarkValue: ''
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                if (this.submitData.Name) {
                    this.CreateOrUpdateTaskStage();
                } else {
                    this.addOpacity = 1;
                    this.Name.warning = true;
                }
                this.$apply();
            }
        }, _this.watch = {
            NameValue: function NameValue(value) {
                this.submitData.Name = value;
                this.$apply();
            },
            RemarkValue: function RemarkValue(value) {
                this.submitData.Remark = value;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'CreateOrUpdateTaskStage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resData, pages, prevPage, prevPages;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: '提交中，请稍等！', //提示的内容,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success() {}
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/CreateOrUpdateTaskStage', 'post', this.submitData);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    this.addOpacity = 1;
                                    pages = getCurrentPages();
                                    prevPage = pages[pages.length - 2]; //上一个页面

                                    prevPages = pages[pages.length - 3]; //上一个页面

                                    if (prevPage) {
                                        prevPage.isRefresh();
                                        prevPages.isRefresh ? prevPages.isRefresh() : '';
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }
                                    this.$apply();
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

            function CreateOrUpdateTaskStage() {
                return _ref2.apply(this, arguments);
            }

            return CreateOrUpdateTaskStage;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            console.log(options);
            this.submitData.ProjectId = options.projectId;
            if (options.nextSort) {
                this.submitData.Sort = +options.nextSort > +options.sort ? ((Number(options.sort) + Number(options.nextSort)) / 2).toFixed(0) : +options.sort * 100;
            } else {
                this.submitData.Sort = +options.sort == 1 ? 1 : +options.sort * 100;
            }
            this.$apply();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myTaskCourse/taskStage/createtask/createStage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZVN0YWdlLmpzIl0sIm5hbWVzIjpbImNsaWVudERldGFpbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIk5hbWUiLCJpbnB1dDEiLCJSZW1hcmsiLCJpbnB1dDIiLCJkYXRhIiwiYWRkT3BhY2l0eSIsInN1Ym1pdERhdGEiLCJJZCIsIlByb2plY3RJZCIsInRpdGxlIiwibmFtZSIsIm9wdGlvbnMiLCJ3YXJuaW5nIiwiTmFtZVZhbHVlIiwiUmVtYXJrVmFsdWUiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsIiRhcHBseSIsInRvdWNoRW5kIiwiQ3JlYXRlT3JVcGRhdGVUYXNrU3RhZ2UiLCJ3YXRjaCIsInZhbHVlIiwid3giLCJzaG93TG9hZGluZyIsIm1hc2siLCJzdWNjZXNzIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJsZW5ndGgiLCJwcmV2UGFnZXMiLCJpc1JlZnJlc2giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dUb2FzdCIsImVycm9yIiwibWVzc2FnZSIsImljb24iLCJkdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0SWQiLCJuZXh0U29ydCIsIlNvcnQiLCJzb3J0IiwiTnVtYmVyIiwidG9GaXhlZCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE1BQXZDLEVBQThDLDBCQUF5QixXQUF2RSxFQUFtRiwyQkFBMEIsV0FBN0csRUFBUixFQUFrSSxVQUFTLEVBQUMscUJBQW9CLFFBQXJCLEVBQThCLDBCQUF5QixhQUF2RCxFQUFxRSwyQkFBMEIsYUFBL0YsRUFBM0ksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsa0JBQU1DLGVBREo7QUFFRkMsb0JBQVFDO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsd0JBQVksQ0FEVDtBQUVIQyx3QkFBWTtBQUNSQyxvQkFBSSxFQURJO0FBRVJQLHNCQUFNLEVBRkU7QUFHUlEsMkJBQVcsRUFISDtBQUlSTix3QkFBUTtBQUpBLGFBRlQ7QUFRSEYsa0JBQU07QUFDRlMsdUJBQU8sTUFETDtBQUVGQyxzQkFBTSxNQUZKO0FBR0ZDLHlCQUFTLEtBSFA7QUFJRkMseUJBQVM7QUFKUCxhQVJIO0FBY0hDLHVCQUFXLEVBZFI7QUFlSFgsb0JBQVE7QUFDSk8sdUJBQU8sSUFESDtBQUVKQyxzQkFBTSxRQUZGO0FBR0pDLHlCQUFTLElBSEw7QUFJSkMseUJBQVM7QUFKTCxhQWZMO0FBcUJIRSx5QkFBYTtBQXJCVixTLFFBdUJQQyxPLEdBQVU7QUFDTkMsc0JBRE0sd0JBQ087QUFDVCxxQkFBS1gsVUFBTCxHQUFrQixHQUFsQjtBQUNBLHFCQUFLWSxNQUFMO0FBQ0gsYUFKSztBQUtOQyxvQkFMTSxzQkFLSztBQUNQLG9CQUFJLEtBQUtaLFVBQUwsQ0FBZ0JOLElBQXBCLEVBQTBCO0FBQ3RCLHlCQUFLbUIsdUJBQUw7QUFDSCxpQkFGRCxNQUVPO0FBQ0gseUJBQUtkLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSx5QkFBS0wsSUFBTCxDQUFVWSxPQUFWLEdBQW9CLElBQXBCO0FBQ0g7QUFDRCxxQkFBS0ssTUFBTDtBQUNIO0FBYkssUyxRQWVWRyxLLEdBQVE7QUFDSlAscUJBREkscUJBQ01RLEtBRE4sRUFDYTtBQUNiLHFCQUFLZixVQUFMLENBQWdCTixJQUFoQixHQUF1QnFCLEtBQXZCO0FBQ0EscUJBQUtKLE1BQUw7QUFDSCxhQUpHO0FBS0pILHVCQUxJLHVCQUtRTyxLQUxSLEVBS2U7QUFDZixxQkFBS2YsVUFBTCxDQUFnQkosTUFBaEIsR0FBeUJtQixLQUF6QjtBQUNBLHFCQUFLSixNQUFMO0FBQ0g7QUFSRyxTOzs7Ozs7Ozs7Ozs7QUFXSkssbUNBQUdDLFdBQUgsQ0FBZTtBQUNYZCwyQ0FBTyxVQURJLEVBQ1E7QUFDbkJlLDBDQUFNLElBRkssRUFFQztBQUNaQyw2Q0FBUyxtQkFBTSxDQUNkO0FBSlUsaUNBQWY7O3VDQU1vQkMsZUFBS0MsT0FBTCxDQUNoQix3REFEZ0IsRUFFaEIsTUFGZ0IsRUFHaEIsS0FBS3JCLFVBSFcsQzs7O0FBQWhCc0IsdUM7O0FBS0osb0NBQUlBLFFBQVFDLFVBQVIsSUFBc0IsR0FBMUIsRUFBK0I7QUFDM0IseUNBQUt4QixVQUFMLEdBQWtCLENBQWxCO0FBQ0l5Qix5Q0FGdUIsR0FFZkMsaUJBRmU7QUFHdkJDLDRDQUh1QixHQUdaRixNQUFNQSxNQUFNRyxNQUFOLEdBQWUsQ0FBckIsQ0FIWSxFQUdhOztBQUNwQ0MsNkNBSnVCLEdBSVhKLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUpXLEVBSWM7O0FBQ3pDLHdDQUFJRCxRQUFKLEVBQWM7QUFDVkEsaURBQVNHLFNBQVQ7QUFDREQsa0RBQVVDLFNBQVYsR0FBb0JELFVBQVVDLFNBQVYsRUFBcEIsR0FBMEMsRUFBMUM7QUFDQ2IsMkNBQUdjLFlBQUgsQ0FBZ0I7QUFDWkMsbURBQU87QUFESyx5Q0FBaEI7QUFHSDtBQUNELHlDQUFLcEIsTUFBTDtBQUNILGlDQWJELE1BYU87QUFDSEssdUNBQUdnQixTQUFILENBQWE7QUFDVDdCLCtDQUFPbUIsUUFBUXhCLElBQVIsQ0FBYW1DLEtBQWIsQ0FBbUJDLE9BRGpCO0FBRVRDLDhDQUFNLE1BRkc7QUFHVEMsa0RBQVUsSUFIRDtBQUlUbEIsOENBQU07QUFKRyxxQ0FBYjtBQU1IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUViLE8sRUFBUztBQUNaZ0Msb0JBQVFDLEdBQVIsQ0FBWWpDLE9BQVo7QUFDQSxpQkFBS0wsVUFBTCxDQUFnQkUsU0FBaEIsR0FBNEJHLFFBQVFrQyxTQUFwQztBQUNBLGdCQUFJbEMsUUFBUW1DLFFBQVosRUFBc0I7QUFDbEIscUJBQUt4QyxVQUFMLENBQWdCeUMsSUFBaEIsR0FBdUIsQ0FBQ3BDLFFBQVFtQyxRQUFULEdBQW9CLENBQUNuQyxRQUFRcUMsSUFBN0IsR0FBb0MsQ0FBQyxDQUFDQyxPQUFPdEMsUUFBUXFDLElBQWYsSUFBdUJDLE9BQU90QyxRQUFRbUMsUUFBZixDQUF4QixJQUFvRCxDQUFyRCxFQUF3REksT0FBeEQsQ0FBZ0UsQ0FBaEUsQ0FBcEMsR0FBMEcsQ0FBQ3ZDLFFBQVFxQyxJQUFWLEdBQWtCLEdBQWxKO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUsxQyxVQUFMLENBQWdCeUMsSUFBaEIsR0FBdUIsQ0FBQ3BDLFFBQVFxQyxJQUFULElBQWlCLENBQWpCLEdBQXFCLENBQXJCLEdBQTBCLENBQUNyQyxRQUFRcUMsSUFBVixHQUFrQixHQUFsRTtBQUNIO0FBQ0QsaUJBQUsvQixNQUFMO0FBQ0g7Ozs7RUFuR3FDa0MsZUFBS0MsSTs7a0JBQTFCekQsWSIsImZpbGUiOiJjcmVhdGVTdGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBpbnB1dDEgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBpbnB1dDIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsaWVudERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJOYW1lXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJOYW1lXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJOYW1lVmFsdWVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJOYW1lVmFsdWVcIn0sXCJSZW1hcmtcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiUmVtYXJrXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJSZW1hcmtWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlJlbWFya1ZhbHVlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIE5hbWU6IGlucHV0MSxcbiAgICAgICAgICAgIFJlbWFyazogaW5wdXQyLFxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYWRkT3BhY2l0eTogMSxcbiAgICAgICAgICAgIHN1Ym1pdERhdGE6IHtcbiAgICAgICAgICAgICAgICBJZDogXCJcIixcbiAgICAgICAgICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIFByb2plY3RJZDogXCJcIixcbiAgICAgICAgICAgICAgICBSZW1hcms6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6Zi25q615ZCN56ewJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTmFtZVZhbHVlOiAnJyxcbiAgICAgICAgICAgIFJlbWFyazoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSH5rOoJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVtYXJrJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlbWFya1ZhbHVlOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0RGF0YS5OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlT3JVcGRhdGVUYXNrU3RhZ2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk5hbWUud2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgTmFtZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLk5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlbWFya1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlJlbWFyayA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIENyZWF0ZU9yVXBkYXRlVGFza1N0YWdlKCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5Lit77yM6K+356iN562J77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tQbGFubmluZy9DcmVhdGVPclVwZGF0ZVRhc2tTdGFnZScsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZXMgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAzXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgcHJldlBhZ2VzLmlzUmVmcmVzaD9wcmV2UGFnZXMuaXNSZWZyZXNoKCk6Jyc7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNEYXRhLmRhdGEuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlByb2plY3RJZCA9IG9wdGlvbnMucHJvamVjdElkO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubmV4dFNvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuU29ydCA9ICtvcHRpb25zLm5leHRTb3J0ID4gK29wdGlvbnMuc29ydCA/ICgoTnVtYmVyKG9wdGlvbnMuc29ydCkgKyBOdW1iZXIob3B0aW9ucy5uZXh0U29ydCkpIC8gMikudG9GaXhlZCgwKSA6ICgrb3B0aW9ucy5zb3J0KSAqIDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlNvcnQgPSArb3B0aW9ucy5zb3J0ID09IDEgPyAxIDogKCtvcHRpb25zLnNvcnQpICogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgfVxuIl19