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

var contractdoc = function (_wepy$page) {
    _inherits(contractdoc, _wepy$page);

    function contractdoc() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, contractdoc);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = contractdoc.__proto__ || Object.getPrototypeOf(contractdoc)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            logAttachmentList: {},
            fileIcon: [],
            fileColor: [],
            showVideo: false,
            videoPath: '',
            progress: [],
            stopProgress: []
        }, _this.methods = {
            myCatchTouch: function myCatchTouch() {
                console.log('禁止滑动');
                return;
            },
            colseVideo: function colseVideo(e) {
                console.log(e);
                if (e.target.id = "videoView") {
                    this.showVideo = false;
                }
            },
            preview: function preview(fileId, fileClass, progressIndex, fileSize) {
                var _this2 = this;

                var fileClass = fileClass.replace('.', '').toLowerCase();
                if (this.progress[progressIndex] !== 100) {
                    this.stopProgress[progressIndex] = !this.stopProgress[progressIndex];
                    var http = '/api/services/web/worklogAttachment/GetDocumentFile?id=' + fileId;
                    switch (fileClass) {
                        case 'jpg':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        case 'png':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        case 'xls':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        case 'xlsx':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        case 'docx':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        case 'doc':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        case 'pdf':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        case 'mp4':
                            this.downloadFile(http, fileClass, progressIndex);
                            break;
                        default:
                            wx.showToast({
                                title: '文件格式不支持！',
                                icon: 'none',
                                duration: 1500,
                                mask: false
                            });
                            break;
                    }
                } else {
                    //在获取缓存中的数据
                    wx.getStorage({
                        key: 'cacheDownLoadData',
                        success: function success(res) {
                            var filePath = res.data[progressIndex];
                            switch (fileClass) {
                                case 'jpg':
                                    wx.previewImage({
                                        current: filePath, // 当前显示图片的http链接
                                        urls: [filePath] // 需要预览的图片http链接列表
                                    });
                                    break;
                                case 'png':
                                    wx.previewImage({
                                        current: filePath, // 当前显示图片的http链接
                                        urls: [filePath] // 需要预览的图片http链接列表
                                    });
                                    break;
                                case 'mp4':
                                    _this2.videoPath = filePath;
                                    _this2.showVideo = true;
                                    _this2.$apply();
                                    break;
                                default:
                                    wx.openDocument({
                                        filePath: filePath,
                                        fileType: fileClass,
                                        success: function success(res) {
                                            console.log('打开文件');
                                        },
                                        fail: function fail(err) {
                                            console.log(err);
                                        }
                                    });
                                    break;
                                    _this2.$apply();
                            }
                        }
                    });
                }
            }
        }, _this.downloadFile = function (http, fileClass, progressIndex) {
            console.log(http, fileClass, progressIndex);
            var fileClass = fileClass.toLowerCase();
            if (fileClass !== 'folder') {
                wx.getStorage({
                    key: 'access',
                    success: function success(res) {
                        var downloadTask = wx.downloadFile({
                            header: {
                                'content-type': 'application/octet-stream',
                                Authorization: 'Bearer ' + res.data
                            },
                            url: 'https://www.ailinkedlaw.com' + http,
                            success: function success(res) {
                                var filePath = res.tempFilePath;
                                var cacheData = wx.getStorageSync('cacheDownLoadData');
                                cacheData[progressIndex] = filePath;
                                wx.setStorageSync('cacheDownLoadData', cacheData);
                            },
                            fail: function fail(err) {
                                console.log(err);
                            },
                            complete: function complete() {
                                wx.hideLoading();
                            }
                        });
                        downloadTask.onProgressUpdate(function (res) {
                            if (_this.stopProgress[progressIndex]) {
                                _this.progress[progressIndex] = res.progress;
                                _this.$apply();
                            } else {
                                downloadTask.abort();
                            }
                        });
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(contractdoc, [{
        key: 'getDocumentData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var logId, resData, logAttachmentList, cacheData, index, iconClass;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                logId = {
                                    id: id
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/worklog/GetWorklog', 'post', logId);

                            case 3:
                                resData = _context.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context.next = 52;
                                    break;
                                }

                                this.logAttachmentList = resData.data.result.attachmentList;
                                logAttachmentList = resData.data.result.attachmentList;

                                if (!(logAttachmentList.length !== 0)) {
                                    _context.next = 50;
                                    break;
                                }

                                cacheData = [];
                                _context.t0 = regeneratorRuntime.keys(logAttachmentList);

                            case 10:
                                if ((_context.t1 = _context.t0()).done) {
                                    _context.next = 49;
                                    break;
                                }

                                index = _context.t1.value;

                                this.progress[index] = 0;
                                cacheData[index] = 0;
                                this.stopProgress[index] = false;
                                //文件类型图标处理
                                iconClass = logAttachmentList[index].extension.toLowerCase();
                                // console.log(iconClass);

                                _context.t2 = iconClass;
                                _context.next = _context.t2 === '.pdf' ? 19 : _context.t2 === '.png' ? 22 : _context.t2 === '.xls' ? 25 : _context.t2 === '.xlsx' ? 28 : _context.t2 === '.docx' ? 31 : _context.t2 === '.doc' ? 34 : _context.t2 === '.jpg' ? 37 : _context.t2 === '.mp4' ? 40 : 43;
                                break;

                            case 19:
                                this.fileIcon[index] = 'icon-pdfpng1';
                                this.fileColor[index] = '#e20000';
                                return _context.abrupt('break', 46);

                            case 22:
                                this.fileIcon[index] = 'icon-pdfpng1';
                                this.fileColor[index] = '#e20000';
                                return _context.abrupt('break', 46);

                            case 25:
                                this.fileIcon[index] = 'icon-exl1';
                                this.fileColor[index] = '#069400';
                                return _context.abrupt('break', 46);

                            case 28:
                                this.fileIcon[index] = 'icon-exl1';
                                this.fileColor[index] = '#069400';
                                return _context.abrupt('break', 46);

                            case 31:
                                this.fileIcon[index] = 'icon-wold1';
                                this.fileColor[index] = '#009dff';
                                return _context.abrupt('break', 46);

                            case 34:
                                this.fileIcon[index] = 'icon-wold1';
                                this.fileColor[index] = '#009dff';
                                return _context.abrupt('break', 46);

                            case 37:
                                this.fileIcon[index] = 'icon-jpggeshi';
                                this.fileColor[index] = '#ff9900';
                                return _context.abrupt('break', 46);

                            case 40:
                                this.fileIcon[index] = 'icon-shipinwenjian';
                                this.fileColor[index] = '#fc5959';
                                return _context.abrupt('break', 46);

                            case 43:
                                this.fileIcon[index] = 'icon-weizhiwenjiangeshi';
                                this.fileColor[index] = '#7a7a7a';
                                return _context.abrupt('break', 46);

                            case 46:
                                this.$apply();
                                _context.next = 10;
                                break;

                            case 49:
                                wx.setStorage({
                                    key: 'cacheDownLoadData',
                                    data: cacheData
                                });

                            case 50:
                                _context.next = 53;
                                break;

                            case 52:
                                wx.showToast({
                                    title: '网络故障，请重试！', //提示的内容,
                                    icon: 'none', //图标,
                                    duration: 2000, //延迟时间,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });

                            case 53:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getDocumentData(_x) {
                return _ref2.apply(this, arguments);
            }

            return getDocumentData;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.getDocumentData(options.id);
        }
    }, {
        key: 'onHide',
        value: function onHide() {}
    }]);

    return contractdoc;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(contractdoc , 'pages/modules/myRecord/logDoc/document'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbImNvbnRyYWN0ZG9jIiwiY29tcG9uZW50cyIsImRhdGEiLCJsb2dBdHRhY2htZW50TGlzdCIsImZpbGVJY29uIiwiZmlsZUNvbG9yIiwic2hvd1ZpZGVvIiwidmlkZW9QYXRoIiwicHJvZ3Jlc3MiLCJzdG9wUHJvZ3Jlc3MiLCJtZXRob2RzIiwibXlDYXRjaFRvdWNoIiwiY29uc29sZSIsImxvZyIsImNvbHNlVmlkZW8iLCJlIiwidGFyZ2V0IiwiaWQiLCJwcmV2aWV3IiwiZmlsZUlkIiwiZmlsZUNsYXNzIiwicHJvZ3Jlc3NJbmRleCIsImZpbGVTaXplIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiaHR0cCIsImRvd25sb2FkRmlsZSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJmaWxlUGF0aCIsInJlcyIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiJGFwcGx5Iiwib3BlbkRvY3VtZW50IiwiZmlsZVR5cGUiLCJmYWlsIiwiZXJyIiwiZG93bmxvYWRUYXNrIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInVybCIsInRlbXBGaWxlUGF0aCIsImNhY2hlRGF0YSIsImdldFN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwib25Qcm9ncmVzc1VwZGF0ZSIsImFib3J0IiwibG9nSWQiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiYXR0YWNobWVudExpc3QiLCJsZW5ndGgiLCJpbmRleCIsImljb25DbGFzcyIsImV4dGVuc2lvbiIsInNldFN0b3JhZ2UiLCJvcHRpb25zIiwiZ2V0RG9jdW1lbnREYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7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Ozs7O0FBR1IscUNBQUt6QixNQUFMOzs7OztBQUVKZCxtQ0FBRzBDLFVBQUgsQ0FBYztBQUNWbkMseUNBQUssbUJBREs7QUFFVmhDLDBDQUFNaUQ7QUFGSSxpQ0FBZDs7Ozs7OztBQU1KeEIsbUNBQUdDLFNBQUgsQ0FBYTtBQUNUQywyQ0FBTyxXQURFLEVBQ1c7QUFDcEJDLDBDQUFNLE1BRkcsRUFFSztBQUNkQyw4Q0FBVSxJQUhELEVBR087QUFDaEJDLDBDQUFNLElBSkcsRUFJRztBQUNaRyw2Q0FBUyxzQkFBTyxDQUFFO0FBTFQsaUNBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFTRG1DLE8sRUFBUztBQUNaLGlCQUFLQyxlQUFMLENBQXFCRCxRQUFRckQsRUFBN0I7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUEvTjBCdUQsZUFBS0MsSTs7a0JBQXpCekUsVyIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRyYWN0ZG9jIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbG9nQXR0YWNobWVudExpc3Q6e30sXG4gICAgICAgICAgICBmaWxlSWNvbjogW10sXG4gICAgICAgICAgICBmaWxlQ29sb3I6IFtdLFxuICAgICAgICAgICAgc2hvd1ZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZGVvUGF0aDogJycsXG4gICAgICAgICAgICBwcm9ncmVzczogW10sXG4gICAgICAgICAgICBzdG9wUHJvZ3Jlc3M6IFtdXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBteUNhdGNoVG91Y2goKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+emgeatoua7keWKqCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xzZVZpZGVvKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9IFwidmlkZW9WaWV3XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VmlkZW8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmlldyhmaWxlSWQsIGZpbGVDbGFzcywgcHJvZ3Jlc3NJbmRleCwgZmlsZVNpemUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUNsYXNzID0gZmlsZUNsYXNzLnJlcGxhY2UoJy4nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1twcm9ncmVzc0luZGV4XSAhPT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcFByb2dyZXNzW3Byb2dyZXNzSW5kZXhdID0gIXRoaXMuc3RvcFByb2dyZXNzW3Byb2dyZXNzSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3dvcmtsb2dBdHRhY2htZW50L0dldERvY3VtZW50RmlsZT9pZD0nICsgZmlsZUlkO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZpbGVDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShodHRwLCBmaWxlQ2xhc3MsIHByb2dyZXNzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShodHRwLCBmaWxlQ2xhc3MsIHByb2dyZXNzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAneGxzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShodHRwLCBmaWxlQ2xhc3MsIHByb2dyZXNzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAneGxzeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUoaHR0cCwgZmlsZUNsYXNzLCBwcm9ncmVzc0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RvY3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKGh0dHAsIGZpbGVDbGFzcywgcHJvZ3Jlc3NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkb2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKGh0dHAsIGZpbGVDbGFzcywgcHJvZ3Jlc3NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwZGYnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKGh0dHAsIGZpbGVDbGFzcywgcHJvZ3Jlc3NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtcDQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKGh0dHAsIGZpbGVDbGFzcywgcHJvZ3Jlc3NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5paH5Lu25qC85byP5LiN5pSv5oyB77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL+WcqOiOt+WPlue8k+WtmOS4reeahOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NhY2hlRG93bkxvYWREYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVQYXRoID0gcmVzLmRhdGFbcHJvZ3Jlc3NJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZpbGVDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBmaWxlUGF0aCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybHM6IFtmaWxlUGF0aF0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogZmlsZVBhdGgsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxzOiBbZmlsZVBhdGhdIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21wNCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGF0aCA9IGZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gub3BlbkRvY3VtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVR5cGU6IGZpbGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5paH5Lu2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb3dubG9hZEZpbGUgPSAoaHR0cCwgZmlsZUNsYXNzLCBwcm9ncmVzc0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhodHRwLCBmaWxlQ2xhc3MsIHByb2dyZXNzSW5kZXgpO1xuICAgICAgICAgICAgdmFyIGZpbGVDbGFzcyA9IGZpbGVDbGFzcy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGZpbGVDbGFzcyAhPT0gJ2ZvbGRlcicpIHtcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnYWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb3dubG9hZFRhc2sgPSB3eC5kb3dubG9hZEZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5haWxpbmtlZGxhdy5jb20nICsgaHR0cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FjaGVEYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NhY2hlRG93bkxvYWREYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlRGF0YVtwcm9ncmVzc0luZGV4XSA9IGZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY2FjaGVEb3duTG9hZERhdGEnLCBjYWNoZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcFByb2dyZXNzW3Byb2dyZXNzSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NbcHJvZ3Jlc3NJbmRleF0gPSByZXMucHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFRhc2suYWJvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXREb2N1bWVudERhdGEoaWQpIHtcbiAgICAgICAgICAgIHZhciBsb2dJZCA9IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi93b3JrbG9nL0dldFdvcmtsb2cnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBsb2dJZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0F0dGFjaG1lbnRMaXN0PXJlc0RhdGEuZGF0YS5yZXN1bHQuYXR0YWNobWVudExpc3Q7XG4gICAgICAgICAgICAgICAgdmFyIGxvZ0F0dGFjaG1lbnRMaXN0PXJlc0RhdGEuZGF0YS5yZXN1bHQuYXR0YWNobWVudExpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKGxvZ0F0dGFjaG1lbnRMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FjaGVEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIGxvZ0F0dGFjaG1lbnRMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzW2luZGV4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZURhdGFbaW5kZXhdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcFByb2dyZXNzW2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/mlofku7bnsbvlnovlm77moIflpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBsb2dBdHRhY2htZW50TGlzdFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5leHRlbnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGljb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGljb25DbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5wZGYnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5wbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy54bHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLWV4bDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnIzA2OTQwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy54bHN4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3JbaW5kZXhdID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcuZG9jeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUljb25baW5kZXhdID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnIzAwOWRmZic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXdvbGQxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3JbaW5kZXhdID0gJyMwMDlkZmYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcuanBnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi1qcGdnZXNoaSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjZmY5OTAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLm1wNCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUljb25baW5kZXhdID0gJ2ljb24tc2hpcGlud2Vuamlhbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjZmM1OTU5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi13ZWl6aGl3ZW5qaWFuZ2VzaGknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnIzdhN2E3YSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NhY2hlRG93bkxvYWREYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNhY2hlRGF0YVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6Zqc77yM6K+36YeN6K+V77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmdldERvY3VtZW50RGF0YShvcHRpb25zLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBvbkhpZGUoKSB7fVxuICAgIH1cbiJdfQ==