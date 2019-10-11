'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import navbar from '../../../components/navbar';
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
      caseContractList: {},
      TimeList: [],
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
        // if(fileClass)
        console.log(fileClass);
        if (this.progress[progressIndex] !== 100) {
          this.stopProgress[progressIndex] = !this.stopProgress[progressIndex];
          var http = '/api/services/web/document/GetDocumentFile?id=' + fileId;
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
              // console.log(res)
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
      // 预览文件

    }, _this.downloadFile = function (http, fileClass, progressIndex) {
      var fileClass = fileClass.replace('.', '').toLowerCase();
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
    key: 'onLoad',
    value: function onLoad() {
      var _this3 = this;

      wx.getStorage({
        key: 'caseDetailData',
        success: function success(res) {
          console.log(res.data.caseData.caseContractList);
          _this3.caseContractList = res.data.caseData.caseContractList;
          if (res.data.caseData.caseContractList.length !== 0) {
            var cacheData = [];
            for (var index in res.data.caseData.caseContractList) {
              _this3.progress[index] = 0;
              cacheData[index] = 0;
              _this3.stopProgress[index] = false;
              // 处理时间
              _this3.TimeList.push(res.data.caseData.caseContractList[index].creationTime.split('T')[0]);
              //文件类型图标处理
              var iconClass = res.data.caseData.caseContractList[index].extension.toLowerCase();
              // console.log(iconClass);
              switch (iconClass) {
                case '.pdf':
                  _this3.fileIcon[index] = 'icon-pdfpng1';
                  _this3.fileColor[index] = '#e20000';
                  break;
                case '.png':
                  _this3.fileIcon[index] = 'icon-pdfpng1';
                  _this3.fileColor[index] = '#e20000';
                  break;
                case '.xls':
                  _this3.fileIcon[index] = 'icon-exl1';
                  _this3.fileColor[index] = '#069400';
                  break;
                case '.xlsx':
                  _this3.fileIcon[index] = 'icon-exl1';
                  _this3.fileColor[index] = '#069400';
                  break;
                case '.docx':
                  _this3.fileIcon[index] = 'icon-wold1';
                  _this3.fileColor[index] = '#009dff';
                  break;
                case '.doc':
                  _this3.fileIcon[index] = 'icon-wold1';
                  _this3.fileColor[index] = '#009dff';
                  break;
                case '.jpg':
                  _this3.fileIcon[index] = 'icon-jpggeshi';
                  _this3.fileColor[index] = '#ff9900';
                  break;
                case '.mp4':
                  _this3.fileIcon[index] = 'icon-shipinwenjian';
                  _this3.fileColor[index] = '#fc5959';
                  break;
                default:
                  _this3.fileIcon[index] = 'icon-weizhiwenjiangeshi';
                  _this3.fileColor[index] = '#7a7a7a';
                  break;
              }
            }
            wx.setStorage({
              key: 'cacheDownLoadData',
              data: cacheData
            });
          }
        }
      });
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }]);

  return contractdoc;
}(_wepy2.default.page);


Page(require('./../../../../../../npm/wepy/lib/wepy.js').default.$createPage(contractdoc , 'pages/modules/mycase/caseDetail/cases/contractdetail/contractdoc'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0ZG9jLmpzIl0sIm5hbWVzIjpbImNvbnRyYWN0ZG9jIiwiY29tcG9uZW50cyIsImRhdGEiLCJjYXNlQ29udHJhY3RMaXN0IiwiVGltZUxpc3QiLCJmaWxlSWNvbiIsImZpbGVDb2xvciIsInNob3dWaWRlbyIsInZpZGVvUGF0aCIsInByb2dyZXNzIiwic3RvcFByb2dyZXNzIiwibWV0aG9kcyIsIm15Q2F0Y2hUb3VjaCIsImNvbnNvbGUiLCJsb2ciLCJjb2xzZVZpZGVvIiwiZSIsInRhcmdldCIsImlkIiwicHJldmlldyIsImZpbGVJZCIsImZpbGVDbGFzcyIsInByb2dyZXNzSW5kZXgiLCJmaWxlU2l6ZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImh0dHAiLCJkb3dubG9hZEZpbGUiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwiZmlsZVBhdGgiLCJyZXMiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsIiRhcHBseSIsIm9wZW5Eb2N1bWVudCIsImZpbGVUeXBlIiwiZmFpbCIsImVyciIsImRvd25sb2FkVGFzayIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJ1cmwiLCJ0ZW1wRmlsZVBhdGgiLCJjYWNoZURhdGEiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsIm9uUHJvZ3Jlc3NVcGRhdGUiLCJhYm9ydCIsImNhc2VEYXRhIiwibGVuZ3RoIiwiaW5kZXgiLCJwdXNoIiwiY3JlYXRpb25UaW1lIiwic3BsaXQiLCJpY29uQ2xhc3MiLCJleHRlbnNpb24iLCJzZXRTdG9yYWdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLFUsR0FBYSxFLFFB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QkFBS3hELFFBQUwsQ0FBY3dELEtBQWQsSUFBdUIsZUFBdkI7QUFDQSx5QkFBS3ZELFNBQUwsQ0FBZXVELEtBQWYsSUFBd0IsU0FBeEI7QUFDQTtBQUNGLHFCQUFLLE1BQUw7QUFDRSx5QkFBS3hELFFBQUwsQ0FBY3dELEtBQWQsSUFBdUIsb0JBQXZCO0FBQ0EseUJBQUt2RCxTQUFMLENBQWV1RCxLQUFmLElBQXdCLFNBQXhCO0FBQ0E7QUFDRjtBQUNFLHlCQUFLeEQsUUFBTCxDQUFjd0QsS0FBZCxJQUF1Qix5QkFBdkI7QUFDQSx5QkFBS3ZELFNBQUwsQ0FBZXVELEtBQWYsSUFBd0IsU0FBeEI7QUFDQTtBQXBDSjtBQXNDRDtBQUNEakMsZUFBR3VDLFVBQUgsQ0FBYztBQUNWaEMsbUJBQUssbUJBREs7QUFFVmpDLG9CQUFNa0Q7QUFGSSxhQUFkO0FBSUQ7QUFDRjtBQWxFVyxPQUFkO0FBb0VEOzs7NkJBQ1EsQ0FBRTs7OztFQTVONEJnQixlQUFLQyxJOztrQkFBekJyRSxXIiwiZmlsZSI6ImNvbnRyYWN0ZG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuLy8gaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb250cmFjdGRvYyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBjYXNlQ29udHJhY3RMaXN0OiB7fSxcbiAgICBUaW1lTGlzdDogW10sXG4gICAgZmlsZUljb246IFtdLFxuICAgIGZpbGVDb2xvcjogW10sXG4gICAgc2hvd1ZpZGVvOmZhbHNlLFxuICAgIHZpZGVvUGF0aDonJyxcbiAgICBwcm9ncmVzczpbXSxcbiAgICBzdG9wUHJvZ3Jlc3M6W11cbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICAgbXlDYXRjaFRvdWNoKCkge1xuICAgICAgY29uc29sZS5sb2coJ+emgeatoua7keWKqCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH0sXG4gICAgY29sc2VWaWRlbyhlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBpZihlLnRhcmdldC5pZD1cInZpZGVvVmlld1wiKXtcbiAgICAgIHRoaXMuc2hvd1ZpZGVvPWZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJldmlldyhmaWxlSWQsIGZpbGVDbGFzcyxwcm9ncmVzc0luZGV4LGZpbGVTaXplKXtcbiAgICAgIHZhciBmaWxlQ2xhc3MgPSBmaWxlQ2xhc3MucmVwbGFjZSgnLicsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gaWYoZmlsZUNsYXNzKVxuICAgICAgY29uc29sZS5sb2coZmlsZUNsYXNzKTtcbiAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbcHJvZ3Jlc3NJbmRleF0hPT0xMDApe1xuICAgICAgICB0aGlzLnN0b3BQcm9ncmVzc1twcm9ncmVzc0luZGV4XT0hdGhpcy5zdG9wUHJvZ3Jlc3NbcHJvZ3Jlc3NJbmRleF1cbiAgICAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvZG9jdW1lbnQvR2V0RG9jdW1lbnRGaWxlP2lkPScgKyBmaWxlSWRcbiAgICAgICAgICAgICAgc3dpdGNoIChmaWxlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShodHRwLCBmaWxlQ2xhc3MscHJvZ3Jlc3NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKGh0dHAsIGZpbGVDbGFzcyxwcm9ncmVzc0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAneGxzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUoaHR0cCwgZmlsZUNsYXNzLHByb2dyZXNzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICd4bHN4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUoaHR0cCwgZmlsZUNsYXNzLHByb2dyZXNzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkb2N4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUoaHR0cCwgZmlsZUNsYXNzLHByb2dyZXNzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkb2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKGh0dHAsIGZpbGVDbGFzcyxwcm9ncmVzc0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGRmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShodHRwLCBmaWxlQ2xhc3MscHJvZ3Jlc3NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21wNCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKGh0dHAsIGZpbGVDbGFzcyxwcm9ncmVzc0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aWh+S7tuagvOW8j+S4jeaUr+aMge+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICAvL+WcqOiOt+WPlue8k+WtmOS4reeahOaVsOaNrlxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6ICdjYWNoZURvd25Mb2FkRGF0YScsXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIHZhciBmaWxlUGF0aD1yZXMuZGF0YVtwcm9ncmVzc0luZGV4XVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgIHN3aXRjaCAoZmlsZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICAgICAgICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGZpbGVQYXRoLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxzOiBbZmlsZVBhdGhdIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogZmlsZVBhdGgsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybHM6IFtmaWxlUGF0aF0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtcDQnOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QYXRoPWZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZGVvPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICB3eC5vcGVuRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVR5cGU6IGZpbGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDmlofku7YnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICB9XG4gICAgLy8g6aKE6KeI5paH5Lu2XG4gIH07XG4gIGRvd25sb2FkRmlsZSA9IChodHRwLGZpbGVDbGFzcyxwcm9ncmVzc0luZGV4KSA9PiB7XG4gICAgdmFyIGZpbGVDbGFzcyA9IGZpbGVDbGFzcy5yZXBsYWNlKCcuJywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGZpbGVDbGFzcyAhPT0gJ2ZvbGRlcicpIHtcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgIGtleTogJ2FjY2VzcycsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGRvd25sb2FkVGFzaz0gIHd4LmRvd25sb2FkRmlsZSh7XG4gICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyByZXMuZGF0YVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHVybDonaHR0cHM6Ly93d3cuYWlsaW5rZWRsYXcuY29tJytodHRwLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICB2YXIgZmlsZVBhdGg9cmVzLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICB2YXIgY2FjaGVEYXRhPXd4LmdldFN0b3JhZ2VTeW5jKCdjYWNoZURvd25Mb2FkRGF0YScpO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZURhdGFbcHJvZ3Jlc3NJbmRleF09ZmlsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjYWNoZURvd25Mb2FkRGF0YScsIGNhY2hlRGF0YSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRvd25sb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RvcFByb2dyZXNzW3Byb2dyZXNzSW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1twcm9ncmVzc0luZGV4XT1yZXMucHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFRhc2suYWJvcnQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gIG9uTG9hZCgpIHtcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2Nhc2VEZXRhaWxEYXRhJyxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmNhc2VEYXRhLmNhc2VDb250cmFjdExpc3QpO1xuICAgICAgICB0aGlzLmNhc2VDb250cmFjdExpc3QgPSByZXMuZGF0YS5jYXNlRGF0YS5jYXNlQ29udHJhY3RMaXN0O1xuICAgICAgICBpZiAocmVzLmRhdGEuY2FzZURhdGEuY2FzZUNvbnRyYWN0TGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICB2YXIgY2FjaGVEYXRhPVtdO1xuICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHJlcy5kYXRhLmNhc2VEYXRhLmNhc2VDb250cmFjdExpc3QpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NbaW5kZXhdPTA7XG4gICAgICAgICAgICBjYWNoZURhdGFbaW5kZXhdPTA7XG4gICAgICAgICAgICB0aGlzLnN0b3BQcm9ncmVzc1tpbmRleF09ZmFsc2U7XG4gICAgICAgICAgICAvLyDlpITnkIbml7bpl7RcbiAgICAgICAgICAgIHRoaXMuVGltZUxpc3QucHVzaChcbiAgICAgICAgICAgICAgcmVzLmRhdGEuY2FzZURhdGEuY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uY3JlYXRpb25UaW1lLnNwbGl0KFxuICAgICAgICAgICAgICAgICdUJ1xuICAgICAgICAgICAgICApWzBdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy/mlofku7bnsbvlnovlm77moIflpITnkIZcbiAgICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSByZXMuZGF0YS5jYXNlRGF0YS5jYXNlQ29udHJhY3RMaXN0W1xuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgXS5leHRlbnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGljb25DbGFzcyk7XG4gICAgICAgICAgICBzd2l0Y2ggKGljb25DbGFzcykge1xuICAgICAgICAgICAgICBjYXNlICcucGRmJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjZTIwMDAwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnLnBuZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi1wZGZwbmcxJztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJy54bHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUljb25baW5kZXhdID0gJ2ljb24tZXhsMSc7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3JbaW5kZXhdID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcueGxzeCc6XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnIzA2OTQwMCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJy5kb2N4JzpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXdvbGQxJztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvcltpbmRleF0gPSAnIzAwOWRmZic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJy5kb2MnOlxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUljb25baW5kZXhdID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnLmpwZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbltpbmRleF0gPSAnaWNvbi1qcGdnZXNoaSc7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3JbaW5kZXhdID0gJyNmZjk5MDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcubXA0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXNoaXBpbndlbmppYW4nO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUNvbG9yW2luZGV4XSA9ICcjZmM1OTU5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uW2luZGV4XSA9ICdpY29uLXdlaXpoaXdlbmppYW5nZXNoaSc7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3JbaW5kZXhdID0gJyM3YTdhN2EnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAga2V5OiAnY2FjaGVEb3duTG9hZERhdGEnLFxuICAgICAgICAgICAgICBkYXRhOiBjYWNoZURhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9uSGlkZSgpIHt9XG59XG4iXX0=