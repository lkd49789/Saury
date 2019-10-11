'use strict';

//微信获取后台数据
var localhost = "https://www.ailinkedlaw.com";
var getData = function getData(http, method) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  return new Promise(function (resolve, reject) {
    wx.getStorage({
      key: 'access',
      success: function success(token) {
        wx.request({
          url: localhost + http,
          method: method,
          header: {
            Authorization: 'Bearer ' + token.data
          },
          data: data,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err.success);
          },
          complete: function complete() {
            wx.hideLoading();
          }
        });
      }
    });
  });
};
var getAavatar = function getAavatar(http) {
  return new Promise(function (resolve, reject) {
    wx.getStorage({
      key: 'access',
      success: function success(res) {
        wx.downloadFile({
          header: {
            'Content-Type': 'image/jpeg',
            Authorization: 'Bearer ' + res.data
          },
          url: localhost + http,
          success: function success(res) {
            resolve(res.tempFilePath);
          },
          fail: function fail() {},
          complete: function complete() {
            wx.hideLoading();
          }
        });
      }
    });
  });
};
var getUserAvatar = function getUserAvatar(http) {
  return new Promise(function (resolve, reject) {
    wx.getStorage({
      key: 'access',
      success: function success(res) {
        wx.downloadFile({
          header: {
            'Content-Type': 'image/jpeg',
            Authorization: 'Bearer ' + res.data
          },
          url: localhost + http,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail() {},
          complete: function complete() {
            wx.hideLoading();
          }
        });
      }
    });
  });
};
var preView = function preView(http, fileClass) {
  var fileClass = fileClass.replace('.', '').toLowerCase();
  if (fileClass !== 'folder') {
    // } else {
    wx.getStorage({
      key: 'access',
      success: function success(res) {
        var downloadTask = wx.downloadFile({
          header: {
            'content-type': 'application/octet-stream',
            Authorization: 'Bearer ' + res.data
          },
          url: localhost + http,
          success: function success(res) {
            var filePath = res.tempFilePath;
            // this.showView = !this.showView;
            console.log(res);
            switch (fileClass) {
              case 'jpg':
                wx.previewImage({
                  current: res.tempFilePath, // 当前显示图片的http链接
                  urls: [res.tempFilePath] // 需要预览的图片http链接列表
                });
                break;
              case 'png':
                wx.previewImage({
                  current: res.tempFilePath, // 当前显示图片的http链接
                  urls: [res.tempFilePath] // 需要预览的图片http链接列表
                });
                break;
              default:
                wx.openDocument({
                  filePath: filePath,
                  fileType: fileClass,
                  success: function success(res) {
                    // this.file.push(res.data);
                    console.log('打开文件');
                  },

                  fail: function fail(err) {
                    wx.showToast({
                      title: '暂不支持此文件预览！',
                      icon: 'none',
                      duration: 1500,
                      mask: false
                    });
                  }
                });
                // this.showView = !this.showView;
                break;
            }
          },
          fail: function fail(err) {
            console.log(err);
          },
          complete: function complete() {
            wx.hideLoading();
          }
        });
        downloadTask.onProgressUpdate(function (res) {
          //  return
          // this.$apply();
          // console.log(r)
          console.log('下载进度', res.progress);
          // console.log('已经下载的数据长度', r.totalBytesWritten)
          // console.log('预期需要下载的数据总长度', r.totalBytesExpectedToWrite)
        });
      }
    });
  }
};

var uploadFile = function uploadFile(http, filePath, formData) {
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'jpg';

  return new Promise(function (resolve, reject) {
    wx.getStorage({
      key: 'access',
      success: function success(token) {
        wx.uploadFile({
          url: localhost + http,
          filePath: filePath,
          name: name,
          formData: formData,
          header: {
            Authorization: 'Bearer ' + token.data
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            wx.hideLoading();
          }
        });
      }
    });
  });
};

// var ifOverdue = newFunction();

module.exports = {
  getData: getData,
  getAavatar: getAavatar,
  getUserAvatar: getUserAvatar,
  preView: preView,
  // downloadFile,
  uploadFile: uploadFile
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiXSwibmFtZXMiOlsibG9jYWxob3N0IiwiZ2V0RGF0YSIsImh0dHAiLCJtZXRob2QiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVxdWVzdCIsInVybCIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInJlcyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwiZ2V0QWF2YXRhciIsImRvd25sb2FkRmlsZSIsInRlbXBGaWxlUGF0aCIsImdldFVzZXJBdmF0YXIiLCJwcmVWaWV3IiwiZmlsZUNsYXNzIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZG93bmxvYWRUYXNrIiwiZmlsZVBhdGgiLCJjb25zb2xlIiwibG9nIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJvcGVuRG9jdW1lbnQiLCJmaWxlVHlwZSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsIm9uUHJvZ3Jlc3NVcGRhdGUiLCJwcm9ncmVzcyIsInVwbG9hZEZpbGUiLCJmb3JtRGF0YSIsIm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsWUFBWSw2QkFBaEI7QUFDQSxJQUFJQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLEVBQTZCO0FBQUEsTUFBZEMsSUFBYyx1RUFBUCxFQUFPOztBQUN6QyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLE9BQUdDLFVBQUgsQ0FBYztBQUNaQyxXQUFLLFFBRE87QUFFWkMsZUFBUyx3QkFBUztBQUNoQkgsV0FBR0ksT0FBSCxDQUFXO0FBQ1RDLGVBQUtiLFlBQVlFLElBRFI7QUFFVEMsa0JBQVFBLE1BRkM7QUFHVFcsa0JBQVE7QUFDTkMsMkJBQWUs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akMsa0JBQVE7QUFDTkMsMkJBQWUsWUFBWUMsTUFBTVo7QUFEM0IsV0FMSTtBQVFaTyxtQkFBUyxzQkFBTztBQUNkTCxvQkFBUVcsR0FBUjtBQUNELFdBVlc7QUFXWkMsZ0JBQU0sbUJBQU87QUFDWFgsbUJBQU9ZLEdBQVA7QUFDRCxXQWJXO0FBY1pDLG9CQUFVLG9CQUFNO0FBQ2RaLGVBQUdhLFdBQUg7QUFDRDtBQWhCVyxTQUFkO0FBa0JEO0FBckJXLEtBQWQ7QUF1QkQsR0F4Qk0sQ0FBUDtBQXlCRCxDQTFCRDs7QUE0QkE7O0FBRUE0QixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZqRCxrQkFEZTtBQUVmcUIsd0JBRmU7QUFHZkcsOEJBSGU7QUFJZkMsa0JBSmU7QUFLZjtBQUNBb0I7QUFOZSxDQUFqQiIsImZpbGUiOiJhamF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/lvq7kv6Hojrflj5blkI7lj7DmlbDmja5cbnZhciBsb2NhbGhvc3QgPSBcImh0dHBzOi8vd3d3LmFpbGlua2VkbGF3LmNvbVwiO1xudmFyIGdldERhdGEgPSAoaHR0cCwgbWV0aG9kLCBkYXRhID0gJycpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2FjY2VzcycsXG4gICAgICBzdWNjZXNzOiB0b2tlbiA9PiB7XG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogbG9jYWxob3N0ICsgaHR0cCxcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLmRhdGEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVyci5zdWNjZXNzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pXG5cbn07XG52YXIgZ2V0QWF2YXRhciA9IGh0dHAgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnYWNjZXNzJyxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIHd4LmRvd25sb2FkRmlsZSh7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2ltYWdlL2pwZWcnLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgcmVzLmRhdGFcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVybDogbG9jYWxob3N0ICsgaHR0cCxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMudGVtcEZpbGVQYXRoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6ICgpID0+IHsgfSxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KVxuXG59O1xudmFyIGdldFVzZXJBdmF0YXIgPSBodHRwID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2FjY2VzcycsXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICB3eC5kb3dubG9hZEZpbGUoe1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdpbWFnZS9qcGVnJyxcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHJlcy5kYXRhXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmw6IGxvY2FsaG9zdCArIGh0dHAsXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6ICgpID0+IHsgfSxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KVxuXG59O1xudmFyIHByZVZpZXcgPSAoaHR0cCxmaWxlQ2xhc3MpID0+IHtcbiAgdmFyIGZpbGVDbGFzcyA9IGZpbGVDbGFzcy5yZXBsYWNlKCcuJywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChmaWxlQ2xhc3MgIT09ICdmb2xkZXInKSB7XG4gICAgLy8gfSBlbHNlIHtcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2FjY2VzcycsXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICB2YXIgZG93bmxvYWRUYXNrPSAgd3guZG93bmxvYWRGaWxlKHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHJlcy5kYXRhXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmw6XG4gICAgICAgICAgICBsb2NhbGhvc3QraHR0cCxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgdmFyIGZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd1ZpZXcgPSAhdGhpcy5zaG93VmlldztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBzd2l0Y2ggKGZpbGVDbGFzcykge1xuICAgICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50OiByZXMudGVtcEZpbGVQYXRoLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAgICAgICAgICAgICB1cmxzOiBbcmVzLnRlbXBGaWxlUGF0aF0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50OiByZXMudGVtcEZpbGVQYXRoLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAgICAgICAgICAgICB1cmxzOiBbcmVzLnRlbXBGaWxlUGF0aF0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHd4Lm9wZW5Eb2N1bWVudCh7XG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICBmaWxlVHlwZTogZmlsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5maWxlLnB1c2gocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5paH5Lu2Jyk7XG5cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmmoLkuI3mlK/mjIHmraTmlofku7bpooTop4jvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93VmlldyA9ICF0aGlzLnNob3dWaWV3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvd25sb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKChyZXMpID0+IHtcbiAgICAgICAgLy8gIHJldHVyblxuICAgICAgICAgIC8vIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocilcbiAgICAgICAgICBjb25zb2xlLmxvZygn5LiL6L296L+b5bqmJywgcmVzLnByb2dyZXNzKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5bey57uP5LiL6L2955qE5pWw5o2u6ZW/5bqmJywgci50b3RhbEJ5dGVzV3JpdHRlbilcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6aKE5pyf6ZyA6KaB5LiL6L2955qE5pWw5o2u5oC76ZW/5bqmJywgci50b3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbnZhciB1cGxvYWRGaWxlID0gKGh0dHAsZmlsZVBhdGgsZm9ybURhdGEsbmFtZSA9ICdqcGcnKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdhY2Nlc3MnLFxuICAgICAgc3VjY2VzczogdG9rZW4gPT4ge1xuICAgICAgICB3eC51cGxvYWRGaWxlKHtcbiAgICAgICAgICB1cmw6IGxvY2FsaG9zdCArIGh0dHAsXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZm9ybURhdGE6Zm9ybURhdGEsXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbi5kYXRhLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pXG59XG5cbi8vIHZhciBpZk92ZXJkdWUgPSBuZXdGdW5jdGlvbigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0RGF0YSxcbiAgZ2V0QWF2YXRhcixcbiAgZ2V0VXNlckF2YXRhcixcbiAgcHJlVmlldyxcbiAgLy8gZG93bmxvYWRGaWxlLFxuICB1cGxvYWRGaWxlXG59XG4iXX0=