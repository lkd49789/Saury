//微信获取后台数据
var localhost = "http://www.ailinkedlaw.com:8081";
// let localhost = "https://www.ailinkedlaw.com";

let urlArr = ['/api/services/app/Account/IsTenantAvailable','/api/TokenAuth/Authenticate']  //不需要token的地址

var getData = ({url, method = 'post', header, data = ''}) => {
  return new Promise((resolve, reject) => {
    let token = wx.getStorageSync('access')
    // if(!header && !urlArr.includes(url)){
    //   header = { Authorization: 'Bearer ' + token }
    // }
    if(!urlArr.includes(url) && token && !header){
      header = { Authorization: 'Bearer ' + token }
    }
    // wx.showLoading({
    //   title: 'loading...',
    // })
    wx.request({
      url: localhost + url,
      method,
      header,
      data,
      success(res) {
        resolve(res);
        // if(res.data.success){
        //   resolve(res);
        // }else{
        //   let title = "网络请求错误"
        //   if(res.data.error.message)
        //   title = res.data.error.message
        //   wx.showToast({
        //     title,
        //     icon: 'none',
        //     duration: 3000,
        //     mask: false
        //   });
        // }
      },
      fail(err) {
        reject(err.success);
      },
      complete(){
        wx.hideLoading();
      }
    });
  })

};
var getAavatar = http => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'access',
      success: res => {
        wx.downloadFile({
          header: {
            'Content-Type': 'image/jpeg',
            Authorization: 'Bearer ' + res.data
          },
          url: localhost + http,
          success: res => {
            resolve(res.tempFilePath);
          },
          fail: () => { },
          complete: () => {
            wx.hideLoading();
          }
        });
      }
    });
  })

};
var getUserAvatar = http => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'access',
      success: res => {
        wx.downloadFile({
          header: {
            'Content-Type': 'image/jpeg',
            Authorization: 'Bearer ' + res.data
          },
          url: localhost + http,
          success: res => {
            resolve(res);
          },
          fail: () => { },
          complete: () => {
            wx.hideLoading();
          }
        });
      }
    });
  })

};
var preView = (http,fileClass) => {
  var fileClass = fileClass.replace('.', '').toLowerCase();
  if (fileClass !== 'folder') {
    // } else {
    wx.getStorage({
      key: 'access',
      success: res => {
        var downloadTask=  wx.downloadFile({
          header: {
            'content-type': 'application/octet-stream',
            Authorization: 'Bearer ' + res.data
          },
          url:
            localhost+http,
          success: res => {
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
                  success: res => {
                    // this.file.push(res.data);
                    console.log('打开文件');

                  },

                  fail: err => {
                    wx.showToast({
                      title: '暂不支持此文件预览！',
                      icon: 'none',
                      duration: 1500,
                      mask: false,
                    });
                  }
                });
                // this.showView = !this.showView;
                break;
            }
          },
          fail: err => {
            console.log(err);
          },
          complete: () => {
            wx.hideLoading()
          }
        });
        downloadTask.onProgressUpdate((res) => {
        //  return
          // this.$apply();
          // console.log(r)
          console.log('下载进度', res.progress);
          // console.log('已经下载的数据长度', r.totalBytesWritten)
          // console.log('预期需要下载的数据总长度', r.totalBytesExpectedToWrite)
        })
      }
    });
  }
}

var uploadFile = (http,filePath,formData,name = 'jpg') => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'access',
      success: token => {
        wx.uploadFile({
          url: localhost + http,
          filePath: filePath,
          name,
          formData:formData,
          header: {
            Authorization: 'Bearer ' + token.data,
          },
          success: res => {
            resolve(res);
          },
          fail: err => {
            reject(err);
          },
          complete: () => {
            wx.hideLoading();
          }
        });
      }
    });
  })
}

// var ifOverdue = newFunction();

module.exports = {
  getData,
  getAavatar,
  getUserAvatar,
  preView,
  // downloadFile,
  uploadFile
}