<style lang="less">
  .body {
    height: 100%;
    padding: 28rpx;
  }
  .header {
    display: flex;
    align-items: center;
    font-size: 28rpx;
    position: relative;
  }
  .circle {
    .avatar {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
    }
  }
  .msg {
    margin-left: 40rpx;
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 48rpx;
    color: #2a2a2a;
  }
  .phone {
    color: #7a7a7a;
  }
  .partner {
    display: inline-block;
    height: 100%;
    line-height: 100%;
    color: #7a7a7a;
    font-size: 28rpx;
    margin-left: 40rpx; // margin-bottom: 35rpx;
    vertical-align: center;
  }
  .empty {
    flex: 1;
    height: 106rpx;
  }
  //右箭头
  .toright {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 20px;
    height: 40px;
  }
  // ###################################
  .nav-content {
    padding: 50rpx;
    display: flex;
    border-bottom: 1px solid #dedede;
    font-size: 28rpx;
    color: #7a7a7a;
    align-items: center; // justify-content: center;
  }
  .nav-content text {
    display: block;
    text-align: center;
  }
  .line {
    border-right: 1px solid #dedede;
    height: 44rpx;
    vertical-align: center; // text-align:
  }
  .nav-content view {
    margin: 0 auto;
  }
  .bot {
    margin-bottom: 12rpx;
    font-weight: bold;
    color: #2a2a2a;
    font-size: 30rpx;
  }
  .footer,
  .middle {
    margin-top: 44rpx;
    padding: 0 24rpx;
    box-shadow: 0px 8rpx 30rpx rgba(65, 98, 213, 0.25);
    border-radius: 20rpx;
    font-size: 28rpx;
    color: #7a7a7a;
  }
  .inline {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dedede;
    height: 120rpx;
    line-height: 120rpx;
  }
  .share {
    background: #fafafa;
    box-sizing: inherit;
    color: #7a7a7a;
    padding: 0;
    width: 100%;
    font-size: 28rpx;
    text-align: left;
  }
  .share::after {
    border: 0;
  }
  .inline:last-child {
    border-bottom: 0;
  }
  .left-icon {
    margin-right: 24rpx;
  }
  //test
  .icon {
    // font-size: 30rpx;
    // border: 1px solid #2a2a2a;
    text-align: center;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
  //向上弹出框
  Page {
    /* background: #1baceb; */
    position: absolute;
    font-size: 36rpx;
    width: 100%;
    height: 100%;
    display: block;
    background: #fafafa;
    overflow-y: hidden;
    .extra-word {
      height: 100%;
    }
  }
</style>

<template>
  <view style="height:100%;width:100%;">
    <view class="body">
      <view class="header">
        <view class="circle" >
          <image class="avatar" src="{{tempFilePaths}}" mode="aspectFill" />
        </view>
        <view class="msg">
          <text class="name">{{meData.name}} <text class="partner">{{meData.category||'未填写'}}</text></text>
          <text class="phone">{{meData.phone||'未填写'}}</text>
        </view>
        <!-- 增加一个空白的区域用于点击使用 -->
        <view class="empty" @tap="tobasedata"></view>
        <icon class="toright iconfont icon-chakanjiantou" style="font-size:40rpx;color:#b2b2b2"></icon>
      </view>
      <view class="nav-content">
        <view class="case-nav" @tap="toCase">
          <text class="case-count bot">{{personAnnualCounts[0]||0}}</text>
          <text class="case">案件</text>
        </view>
        <view class="line"></view>
        <view class="clientele-nav" @tap="toClient">
          <text class="clientele-count bot">{{personAnnualCounts[1]||0}}</text>
          <text class="clientele">客户</text>
        </view>
        <view class="line"></view>
        <view class="hour-nav" @tap="toLog">
          <text class="hour-count bot">{{personAnnualCounts[2]||0}}</text>
          <text class="hour">小时</text>
        </view>
        <view class="line"></view>
        <view class="money-nav" @tap="toBill">
          <text class="money-count bot">{{personAnnualCounts[3]||0}}</text>
          <text class="money">金额</text>
        </view>
      </view>
      <view class="middle">
        <view class="inline" @tap="torecord">
          <icon class="icon left-icon iconfont icon-gerenlvli" style="font-size:40rpx; color:#2a2a2a"></icon>
          <view class="record">我的履历</view>
        </view>
        <view class="inline" @tap="toBusinessCard">
          <icon class="icon left-icon iconfont icon-laodongguanxi" style="font-size:40rpx; color:#2a2a2a"></icon>
          <view class="relation">我的名片</view>
        </view>
        <view class="inline" @tap="tolaborRelation">
          <icon class="icon left-icon iconfont icon-laodongguanxi" style="font-size:40rpx; color:#2a2a2a"></icon>
          <view class="relation">劳动关系</view>
        </view>
      </view>
      <view class="footer">
        <view class="inline">
          <button open-type="share" class='share'>
                <icon class="icon left-icon iconfont icon-fenxiang" style="font-size:38rpx; color:#2a2a2a"></icon>
                分享
                </button>
        </view>
        <view class="inline" @tap="totools">
          <icon class="icon left-icon iconfont icon-shezhi" style="font-size:40rpx; color:#2a2a2a"></icon>
          <view class="tools">设置</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  import wepy from 'wepy';
  import 'wepy-async-function';
  import ajax from '../../utils/cofig/ajax.js';
  export default class mineIndex extends wepy.page {
    data = {
      isScroll: true,
      tempFilePaths: '../../images/avatar.png',
      personAnnualCounts: [],
      meData: {
        name: '',
        category: '',
        phone: ''
      },
      currentUserId: 0
    };
    methods = {
      toCase(){
        wx.navigateTo({ url: '../modules/mycase/mycase' });
      },
      toClient(){
        wx.navigateTo({ url: '../modules/myclient/myClientList' });
      },
      toLog(){
        wx.navigateTo({ url: '../modules/myRecord/workRecord' });
      },
      toBill(){
        wx.navigateTo({ url: '../modules/bill/myBill/myBill' });
      },
      // webView() {
      //   wx.navigateTo({
      //     url: './webView/viewView'
      //   });
      // },
      onShareAppMessage(res) {
        return {
          title: '律智荟--法律圈智能汇聚平台',
          path: '/pages/mine/index',
          imageUrl: '../../images/ShareAppMessage.jpg',
        }
      },
      // //上传头像
      // tophoto() {
      //   var that = this;
      //   wx.chooseImage({
      //     count: 1, // 默认9
      //     sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      //     success: function(res) {
      //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      //       console.log(res.tempFilePaths[0]);
      //       var tempFilePaths = res.tempFilePaths[0];
      //       that.uploadFile(tempFilePaths)
      //       that.tempFilePaths = tempFilePaths;
      //       // this.$apply();
      //     }
      //   });
      // },
      //我的名片
      toBusinessCard(){
        wepy.navigateTo({ url: './myBusinessCard/myBusinessCard?id='+this.currentUserId});
      },
      // 跳转基本信息
      tobasedata() {
        wepy.navigateTo({
          url: '../mine/data/basedata'
        });
      },
      //跳转至我的履历页面
      torecord() {
        wepy.navigateTo({
          url: '../mine/myrecord/record?id=' + this.currentUserId
        });
      },
      // 跳转至劳动合同信息页面
      tolaborRelation() {
        wepy.navigateTo({
          url: '../mine/laborRelation/labor-relation'
        });
      },
      totools() {
        wepy.navigateTo({
          url: '../mine/tools'
        });
      }
    };
    // 获取'案件''客户''时间''金额'数据
    async GetPersonAnnualCounts() {
      var PersonAnnualCounts = await ajax.getData(
        '/api/services/web/analyzeStatistics/GetPersonAnnualCounts',
        'post'
      )
      // console.log(PersonAnnualCounts)
      if (PersonAnnualCounts.statusCode == 200 && PersonAnnualCounts.data.result.length !== 0) {
        var data = PersonAnnualCounts.data.result;
        for (var idx in data) {
          switch (data[idx].name) {
            case 'Case':
              this.personAnnualCounts[0] = data[idx].value.toFixed();
              break;
            case 'Client':
              this.personAnnualCounts[1] = data[idx].value.toFixed();
              break;
            case 'Worklog':
              this.personAnnualCounts[2] = data[idx].value.toFixed();
              break;
            case 'Finance':
              this.personAnnualCounts[3] = data[idx].value.toFixed();
              break;
            default:
              break;
          }
        }
      }
      this.$apply();
    }
    //获取用户基本信息
    async GetMe() {
      var getMeData = await ajax.getData(
        '/api/services/web/personal/GetMe',
        'post'
      )
      this.meData.name = getMeData.data.result.name;
      this.meData.category = getMeData.data.result.category;
      this.meData.phone = getMeData.data.result.phone;
      // 本地缓存meData的数据
      wx.setStorageSync('meData', getMeData.data.result);
      this.$apply();
    }
    // async uploadFile(tempFilePaths) {
    //   var imageData = await ajax.uploadFile(
    //     '/api/services/web/personal/UploadPhoto',
    //     tempFilePaths
    //   )
    //   var data = JSON.parse(imageData.data).result;
    //   var formData = {
    //     option: {
    //       url: data,
    //       x: 0,
    //       y: 0,
    //       width: 0,
    //       height: 0,
    //       targetWidth: 0,
    //       targetHeight: 0
    //     }
    //   }
    //   var userImageData = await ajax.getData(
    //     '/api/services/web/personal/cropPhoto',
    //     'post',
    //     data
    //   )
    //   console.log(userImageData)
    // }
    // onLoad(){
      
    // }
    onShow(){
      this.currentUserId = this.$parent.global.userInfo.id;
      this.tempFilePaths = this.$parent.global.userInfo.userAvatar;
      this.GetMe();
      this.GetPersonAnnualCounts();
    }
  }
</script>