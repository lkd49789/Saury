'use strict';

var zzbang_Localhost = 'https://www.zzbang.vip';
var zzbang_PublicKey = '6165E1E3C6D717A7';
//债主帮（第三方）
var getData = function getData(http, method, data) {
  data.PublicKey = zzbang_PublicKey;
  return new Promise(function (resolve, reject) {
    wx.request({
      url: zzbang_Localhost + http,
      method: method,
      data: data,
      success: function success(res) {
        resolve(res);
        wx.hideLoading();
      },
      fail: function fail(err) {
        reject(err.success);
      },
      complete: function complete() {}
    });
  });
};
module.exports = {
  getData: getData
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkUGFydHlfYWpheC5qcyJdLCJuYW1lcyI6WyJ6emJhbmdfTG9jYWxob3N0IiwienpiYW5nX1B1YmxpY0tleSIsImdldERhdGEiLCJodHRwIiwibWV0aG9kIiwiZGF0YSIsIlB1YmxpY0tleSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid3giLCJyZXF1ZXN0IiwidXJsIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxtQkFBbUIsd0JBQXZCO0FBQ0EsSUFBSUMsbUJBQW1CLGtCQUF2QjtBQUNBO0FBQ0EsSUFBSUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxJQUFmLEVBQXdCO0FBQ2xDQSxPQUFLQyxTQUFMLEdBQWlCTCxnQkFBakI7QUFDQSxTQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLE9BQUdDLE9BQUgsQ0FBVztBQUNQQyxXQUFLWixtQkFBbUJHLElBRGpCO0FBRVBDLGNBQVFBLE1BRkQ7QUFHUEMsWUFBTUEsSUFIQztBQUlQUSxlQUFTLHNCQUFPO0FBQ2RMLGdCQUFRTSxHQUFSO0FBQ0FKLFdBQUdLLFdBQUg7QUFDRCxPQVBNO0FBUVBDLFlBQU0sbUJBQU87QUFDWFAsZUFBT1EsSUFBSUosT0FBWDtBQUNELE9BVk07QUFXUEssZ0JBQVUsb0JBQU0sQ0FFZjtBQWJNLEtBQVg7QUFlSCxHQWhCTSxDQUFQO0FBaUJILENBbkJEO0FBb0JBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JsQjtBQURhLENBQWpCIiwiZmlsZSI6InRoaXJkUGFydHlfYWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB6emJhbmdfTG9jYWxob3N0ID0gJ2h0dHBzOi8vd3d3Lnp6YmFuZy52aXAnO1xubGV0IHp6YmFuZ19QdWJsaWNLZXkgPSAnNjE2NUUxRTNDNkQ3MTdBNyc7XG4vL+WAuuS4u+W4ru+8iOesrOS4ieaWue+8iVxubGV0IGdldERhdGEgPSAoaHR0cCwgbWV0aG9kLCBkYXRhKSA9PiB7XG4gICAgZGF0YS5QdWJsaWNLZXkgPSB6emJhbmdfUHVibGljS2V5O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB6emJhbmdfTG9jYWxob3N0ICsgaHR0cCxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH0pXG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0RGF0YVxufSJdfQ==