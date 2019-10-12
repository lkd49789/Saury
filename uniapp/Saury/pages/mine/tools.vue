<!--  -->
<style lang="less">
    .body {
        height: 100%;
        .container-title {
            height: 104rpx;
            font-size: 48rpx;
            padding-left: 28rpx;
            color: #2a2a2a;
            line-height: 104rpx;
            border-bottom: 1px solid #dedede;
            margin-bottom: 14rpx;
        }
        .tools-item {
            padding:0 28rpx;
            >view{
                display: flex;
                align-items: center;
                >view:first-child{  
                    width:10%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right:10rpx;
                }
                >view:last-child{
                    width:85%;
                    padding:30rpx 0;
                    border-bottom: 1px solid #dedede;
                }
            }
        }
        .quit {
            position: fixed;
            bottom: 0;
            width: 100%;
            background: #fff;
            border-top: 1px solid #dfdfdf;
            height: 98rpx;
            font-size: 40rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
        }
        .border-blur {
            height: 30rpx;
            width: 100%;
            background: #f4f4f4;
        }
    }
</style>

<template>
    <!-- <view></view> -->
    <!-- <text></text> -->
    <view class="body">
        <view class="container-title">
            <text class="title-text">设置</text>
        </view>
        <view class="tools-item">
            <repeat for="{{toolsItem}}" key="index" index="index" item="item">
                <view @tap="click('{{item.name}}')">
                    <view>
                        <icon class="iconfont {{item.icon}}" style="font-size:40rpx"></icon>
                    </view>
                    <view>
                        <text>{{item.text}}</text>
                    </view>
                </view>
            </repeat>
        </view>
        <view class="quit" @tap="quit">
            <text>退出登录</text>
        </view>
    </view>
</template>

<script>
    import wepy from 'wepy';
    // import navbar from '@/components/navbar';
    export default class tools extends wepy.page {
        components = {
            // navbar
        };
        data = {
            toolsItem:[
                {
                    icon:'icon-qingchuhuancun',
                    text:'清除缓存',
                    name:'clearCache'
                },
                // {
                //     icon:'icon-bangzhufankui',
                //     text:'帮助与反馈',
                //     name:'hleap',
                //     link:'./webView/help_webView'
                // },
                {
                    icon:'icon-guanyuwomen',
                    text:'关于我们',
                    name:'about',
                    link:'./webView/viewView'
                },
            ]
        };
        methods = {
            click(name){
               switch (name) {
                   case 'clearCache':
                     var access=  wx.getStorageSync('access');
                     wepy.clearStorageSync();
                     wepy.clearStorage({
                         success:()=>{
                             wx.setStorageSync('access', access);
                             wx.showToast({
                                 title: '清除完成！',
                                 icon: 'none',
                                 duration: 1500,
                                 mask: false,
                             });
                         },
                         fail:()=>{
                             wx.showToast({
                                 title: '清除失败！',
                                 icon: 'none',
                                 duration: 1500,
                                 mask: false,
                             });
                         }
                     });
                       break;
                    case 'hleap':
                        wx.navigateTo({ url: './webView/help_webView'});
                    break;
                    case 'about':
                        wx.navigateTo({ url: './webView/viewView'});
                    break;
                   default:
                       break;
               } 
            },
            quit() {
                wx.removeStorageSync('access');
                if (wepy.getStorageSync('access')=='') {
                    wx.reLaunch({
                        url: '../login/choosePageLogin'
                    });
                }
            }
        };
        onLoad() {}
    }
</script>