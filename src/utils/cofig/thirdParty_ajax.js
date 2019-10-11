let zzbang_Localhost = 'https://www.zzbang.vip';
let zzbang_PublicKey = '6165E1E3C6D717A7';
//债主帮（第三方）
let getData = (http, method, data) => {
    data.PublicKey = zzbang_PublicKey;
    return new Promise((resolve, reject) => {
        wx.request({
            url: zzbang_Localhost + http,
            method: method,
            data: data,
            success: res => {
              resolve(res);
              wx.hideLoading();
            },
            fail: err => {
              reject(err.success);
            },
            complete: () => {
              
            }
          });
    })
};
module.exports = {
    getData
}