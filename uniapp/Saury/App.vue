<script>
	export default {
		data(){
			return{
				userInfo: {},
				netWorkString: true,
				options:{},
				currentUserId:0,
				tenant:{},
			}
		},
		onLaunch: function() {
			// 判断是否有网
			      wx.onNetworkStatusChange(res => {
			        if (res.isConnected) {
			          this.netWorkString = true;
			        } else {
			          this.netWorkString = false;
			        }
			      });
			      if(Object.keys(this.userInfo).length==0){
			        this.GetCurrentLoginInformations();
			      }
		},
		onShow: function(options) {
			this.options=options;
			      wx.login({
			        success: res => {
			          var code = res.code;
			          wx.getSetting({
			            success: res => {
			              var accessToken=wx.getStorageSync('access');
			              if (res.authSetting['scope.userInfo']) {
			                wx.getUserInfo({
			                  withCredentials: true,
			                  success: res => {
			                    uni.request({
			                      url: 'https://www.ailinkedlaw.com/api/Account/GetWechatUserInfo', //接口地址
			                      data: {
			                        code: code,
			                        encryptedData: res.encryptedData,
			                        iv: res.iv,
			                        rawData: res.rawData,
			                        signature: res.signature
			                      },
			                      method: "POST",
			                      header: {
			                        'content-type': 'application/json' //默认值
			                      },
			                      success: res => {
			                        if (res.data.result.accessToken) {
			                          try {
			                            wx.setStorageSync('access', res.data.result.accessToken);
			                          } catch (err) {
			                            console.log(err);
			                          }
			                        } else {
			                          wx.redirectTo({
			                            url: '/pages/login/choosePageLogin'
			                          });
			                        }
			                      }
			                    })
			                  }
			                });
			              }else if(!accessToken || !res.authSetting['scope.userInfo']){
			                //  wx.redirectTo({
			                //       url: '/pages/login/choosePageLogin'
			                //   });
			              }
			            }
			          })
			        }
			      })
			      //检查是否存在新版本
			      wx.getUpdateManager().onCheckForUpdate((res) => {
			        // 请求完新版本信息的回调
			        if (res.hasUpdate) { //如果有新版本
			          // 小程序有新版本，会主动触发下载操作（无需开发者触发）
			          wx.getUpdateManager().onUpdateReady(() => { //当新版本下载完成，会进行回调
			            wx.showModal({
			              title: '更新提示',
			              content: '新版本已经准备好，单击确定重启应用',
			              showCancel: false,
			              success: (res) => {
			                if (res.confirm) {
			                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			                  wx.getUpdateManager().applyUpdate();
			                }
			              }
			            })
			          })
			          // 小程序有新版本，会主动触发下载操作（无需开发者触发）
			          wx.getUpdateManager().onUpdateFailed(() => { //当新版本下载失败，会进行回调
			            wx.showModal({
			              title: '提示',
			              content: '检查到有新版本，但下载失败，请检查网络设置',
			              showCancel: false,
			            })
			          })
			        }
			      });
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
