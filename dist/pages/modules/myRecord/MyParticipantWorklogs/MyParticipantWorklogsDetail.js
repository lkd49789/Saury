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

var _api = require('./../../../../utils/cofig/api.js');

var _placeHolderImage = require('./../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = clientDetail.__proto__ || Object.getPrototypeOf(clientDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "xmlns:v-bind": "", "v-bind:placeHolder.sync": "placeHolder" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default
        }, _this.data = {
            MPWorklogsDetailData: {}
        }, _this.methods = {
            toLogDetail: function toLogDetail(id) {
                wx.navigateTo({
                    url: "../myLogdetail/logdetail?id=" + id + "&chooseMe=true"
                });
            }
        }, _this.mixins = [_mixin2.default], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(clientDetail, [{
        key: 'Date',
        value: function Date(data) {
            var dateTime = data;
            var sT = (0, _api.formatDate)(dateTime.startTime);
            var eT = (0, _api.formatDate)(dateTime.startTime);
            dateTime.startTime = {
                Y: sT[0] + '/' + sT[1] + '/' + sT[2],
                M: sT[3] + ':' + sT[4]
            };
            dateTime.endTime = {
                Y: eT[0] + '/' + eT[1] + '/' + eT[2],
                M: eT[3] + ':' + eT[4]
            };
            return dateTime;
        }
        // 获取日志提醒参与信息

    }, {
        key: 'GetMyParticipantWorklogs',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var GetMyParticipantWorklogs, MPWorklogsDetailData, index, isRefresh;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ajax2.default.getData('/api/services/web/worklog/GetMyParticipantWorklogs', 'post');

                            case 2:
                                GetMyParticipantWorklogs = _context.sent;
                                _context.t0 = GetMyParticipantWorklogs.statusCode;
                                _context.next = _context.t0 === 200 ? 6 : _context.t0 === 403 ? 9 : _context.t0 === 500 ? 14 : 18;
                                break;

                            case 6:
                                if (GetMyParticipantWorklogs.data.result.length !== 0) {
                                    MPWorklogsDetailData = GetMyParticipantWorklogs.data.result;

                                    for (index in MPWorklogsDetailData) {
                                        MPWorklogsDetailData[index] = this.Date(MPWorklogsDetailData[index]);
                                    }
                                    this.MPWorklogsDetailData = MPWorklogsDetailData;
                                } else {
                                    isRefresh = wx.getStorageSync('isRefresh');

                                    isRefresh.isRefresh = true;
                                    wx.setStorageSync('isRefresh', isRefresh);
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }
                                this.$apply();
                                return _context.abrupt('break', 19);

                            case 9:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 19);

                            case 14:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 18:
                                return _context.abrupt('break', 19);

                            case 19:

                                this.$apply();

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetMyParticipantWorklogs() {
                return _ref2.apply(this, arguments);
            }

            return GetMyParticipantWorklogs;
        }()
    }, {
        key: 'onShow',
        value: function onShow() {
            this.GetMyParticipantWorklogs();
        }
    }]);

    return clientDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(clientDetail , 'pages/modules/myRecord/MyParticipantWorklogs/MyParticipantWorklogsDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk15UGFydGljaXBhbnRXb3JrbG9nc0RldGFpbC5qcyJdLCJuYW1lcyI6WyJjbGllbnREZXRhaWwiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwiZGF0YSIsIk1QV29ya2xvZ3NEZXRhaWxEYXRhIiwibWV0aG9kcyIsInRvTG9nRGV0YWlsIiwiaWQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJtaXhpbnMiLCJkYXRlVGltZSIsInNUIiwic3RhcnRUaW1lIiwiZVQiLCJZIiwiTSIsImVuZFRpbWUiLCJhamF4IiwiZ2V0RGF0YSIsIkdldE15UGFydGljaXBhbnRXb3JrbG9ncyIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJsZW5ndGgiLCJpbmRleCIsIkRhdGUiLCJpc1JlZnJlc2giLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwicGxhY2VIb2xkZXIiLCJwbGFjZUhvbGRlckltYWdlSW5kZXgiLCJwbGFjZUhvbGRlclNob3ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwyQkFBMEIsYUFBN0MsRUFBcEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyxrQ0FBcUI7QUFEbEIsUyxRQUdQQyxPLEdBQVU7QUFDTkMsdUJBRE0sdUJBQ01DLEVBRE4sRUFDUztBQUNYQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLGlDQUErQkgsRUFBL0IsR0FBa0M7QUFEN0IsaUJBQWQ7QUFHSDtBQUxLLFMsUUFPVkksTSxHQUFTLENBQUNBLGVBQUQsQzs7Ozs7NkJBQ0pSLEksRUFBSztBQUNOLGdCQUFJUyxXQUFTVCxJQUFiO0FBQ0EsZ0JBQUlVLEtBQUcscUJBQVdELFNBQVNFLFNBQXBCLENBQVA7QUFDQSxnQkFBSUMsS0FBRyxxQkFBV0gsU0FBU0UsU0FBcEIsQ0FBUDtBQUNBRixxQkFBU0UsU0FBVCxHQUFtQjtBQUNuQkUsbUJBQUVILEdBQUcsQ0FBSCxJQUFNLEdBQU4sR0FBVUEsR0FBRyxDQUFILENBQVYsR0FBZ0IsR0FBaEIsR0FBb0JBLEdBQUcsQ0FBSCxDQURIO0FBRW5CSSxtQkFBRUosR0FBRyxDQUFILElBQU0sR0FBTixHQUFVQSxHQUFHLENBQUg7QUFGTyxhQUFuQjtBQUlBRCxxQkFBU00sT0FBVCxHQUFpQjtBQUNqQkYsbUJBQUVELEdBQUcsQ0FBSCxJQUFNLEdBQU4sR0FBVUEsR0FBRyxDQUFILENBQVYsR0FBZ0IsR0FBaEIsR0FBb0JBLEdBQUcsQ0FBSCxDQURMO0FBRWpCRSxtQkFBRUYsR0FBRyxDQUFILElBQU0sR0FBTixHQUFVQSxHQUFHLENBQUg7QUFGSyxhQUFqQjtBQUlBLG1CQUFPSCxRQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs7O3VDQUV3Q08sZUFBS0MsT0FBTCxDQUNwQyxvREFEb0MsRUFFcEMsTUFGb0MsQzs7O0FBQWhDQyx3RDs4Q0FJSUEseUJBQXlCQyxVO2dFQUN4QixHLHVCQWlCQyxHLHVCQU1ELEc7Ozs7QUF0QkQsb0NBQUdELHlCQUF5QmxCLElBQXpCLENBQThCb0IsTUFBOUIsQ0FBcUNDLE1BQXJDLEtBQThDLENBQWpELEVBQW1EO0FBQzNDcEIsd0RBRDJDLEdBQ3JCaUIseUJBQXlCbEIsSUFBekIsQ0FBOEJvQixNQURUOztBQUUvQyx5Q0FBUUUsS0FBUixJQUFrQnJCLG9CQUFsQixFQUF1QztBQUN2Q0EsNkRBQXFCcUIsS0FBckIsSUFBNEIsS0FBS0MsSUFBTCxDQUFVdEIscUJBQXFCcUIsS0FBckIsQ0FBVixDQUE1QjtBQUNDO0FBQ0QseUNBQUtyQixvQkFBTCxHQUEwQkEsb0JBQTFCO0FBQ0gsaUNBTkQsTUFNSztBQUNHdUIsNkNBREgsR0FDYW5CLEdBQUdvQixjQUFILENBQWtCLFdBQWxCLENBRGI7O0FBRUdELDhDQUFVQSxTQUFWLEdBQW9CLElBQXBCO0FBQ0FuQix1Q0FBR3FCLGNBQUgsQ0FBa0IsV0FBbEIsRUFBOEJGLFNBQTlCO0FBQ0puQix1Q0FBR3NCLFlBQUgsQ0FBZ0I7QUFDWkMsK0NBQU87QUFESyxxQ0FBaEI7QUFHSDtBQUNBLHFDQUFLQyxNQUFMOzs7O0FBR0dDLHdDQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLHFDQUFLQyxXQUFMLENBQWlCQyxxQkFBakIsR0FBdUMsQ0FBdkM7QUFDQSxxQ0FBS0QsV0FBTCxDQUFpQkUsZUFBakIsR0FBaUMsSUFBakM7QUFDQyxxQ0FBS0wsTUFBTDs7OztBQUdMQyx3Q0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxxQ0FBS0MsV0FBTCxDQUFpQkMscUJBQWpCLEdBQXVDLENBQXZDO0FBQ0EscUNBQUtELFdBQUwsQ0FBaUJFLGVBQWpCLEdBQWlDLElBQWpDO0FBQ0MscUNBQUtMLE1BQUw7Ozs7Ozs7QUFLWCxxQ0FBS0EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVNO0FBQ1AsaUJBQUtYLHdCQUFMO0FBQ0E7Ozs7RUEzRXFDaUIsZUFBS0MsSTs7a0JBQTFCMUMsWSIsImZpbGUiOiJNeVBhcnRpY2lwYW50V29ya2xvZ3NEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xuICAgIGltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgcGxhY2VIb2xkZXJJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BsYWNlSG9sZGVySW1hZ2UnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsaWVudERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwbGFjZUhvbGRlckltYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBwbGFjZUhvbGRlckltYWdlXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBNUFdvcmtsb2dzRGV0YWlsRGF0YTp7fVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG9Mb2dEZXRhaWwoaWQpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLi4vbXlMb2dkZXRhaWwvbG9nZGV0YWlsP2lkPVwiK2lkK1wiJmNob29zZU1lPXRydWVcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zIF07XG4gICAgICAgIERhdGUoZGF0YSl7XG4gICAgICAgICAgICB2YXIgZGF0ZVRpbWU9ZGF0YTtcbiAgICAgICAgICAgIHZhciBzVD1mb3JtYXREYXRlKGRhdGVUaW1lLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICB2YXIgZVQ9Zm9ybWF0RGF0ZShkYXRlVGltZS5zdGFydFRpbWUpXG4gICAgICAgICAgICBkYXRlVGltZS5zdGFydFRpbWU9e1xuICAgICAgICAgICAgWTpzVFswXSsnLycrc1RbMV0rJy8nK3NUWzJdLFxuICAgICAgICAgICAgTTpzVFszXSsnOicrc1RbNF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGVUaW1lLmVuZFRpbWU9e1xuICAgICAgICAgICAgWTplVFswXSsnLycrZVRbMV0rJy8nK2VUWzJdLFxuICAgICAgICAgICAgTTplVFszXSsnOicrZVRbNF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRlVGltZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDojrflj5bml6Xlv5fmj5DphpLlj4LkuI7kv6Hmga9cbiAgICAgICAgYXN5bmMgR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzKCl7XG4gICAgICAgICAgICB2YXIgR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzID1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvd29ya2xvZy9HZXRNeVBhcnRpY2lwYW50V29ya2xvZ3MnLFxuICAgICAgICAgICAgJ3Bvc3QnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzd2l0Y2ggKEdldE15UGFydGljaXBhbnRXb3JrbG9ncy5zdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgIGlmKEdldE15UGFydGljaXBhbnRXb3JrbG9ncy5kYXRhLnJlc3VsdC5sZW5ndGghPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBNUFdvcmtsb2dzRGV0YWlsRGF0YT0gR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiAgTVBXb3JrbG9nc0RldGFpbERhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgTVBXb3JrbG9nc0RldGFpbERhdGFbaW5kZXhdPXRoaXMuRGF0ZShNUFdvcmtsb2dzRGV0YWlsRGF0YVtpbmRleF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1QV29ya2xvZ3NEZXRhaWxEYXRhPU1QV29ya2xvZ3NEZXRhaWxEYXRhO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1JlZnJlc2g9d3guZ2V0U3RvcmFnZVN5bmMoJ2lzUmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVmcmVzaC5pc1JlZnJlc2g9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNSZWZyZXNoJyxpc1JlZnJlc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmgqjmsqHmnInmnYPpmZAnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleD0zO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3c9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruivt+axgumUmeivrycpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4PTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93PXRydWU7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKXtcbiAgICAgICAgIHRoaXMuR2V0TXlQYXJ0aWNpcGFudFdvcmtsb2dzKClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==