<!--  -->
<style lang='less'>
    .container {
        .pageTitle {
            height: 104rpx;
            font-size: 48rpx; // padding-left: 28rpx;
            color: #2a2a2a;
            line-height: 104rpx;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #dedede;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: #fff;
            z-index: 9999;
            padding-left: 28rpx;
            .titleIcon {
                margin-right: 28rpx;
                padding-right: 28rpx;
                display: flex;
                >icon {
                    color: #5d73fa;
                    font-size: 60rpx
                }
            }
        }
        .messages-list {
            margin-top: 149rpx;
            >view:not(:first-child) {
                margin-top: 44rpx;
            } // >view:not(:last-child) {
            //     margin-top: 44rpx;
            // }
            .msg-item {
                display: flex;
                align-items: center;
                .item-checkbox {
                    margin-left: 28rpx
                }
                .item-content {
                    margin: 0 28rpx;
                    display: flex;
                    align-items: center;
                    box-shadow: 0px 8px 30px rgba(65, 98, 213, 0.25);
                    border-radius: 20rpx;
                    padding: 30rpx 24rpx;
                    width: 100%;
                    position: relative;
                    .signed {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                        background: #fff;
                        border-radius: 20rpx;
                        opacity: 0.6;
                    }
                    >view:first-child {
                        width: 15%;
                        margin-right: 20rpx;
                        >image {
                            height: 80rpx;
                            width: 80rpx;
                            border-radius: 50%;
                        }
                    }
                    >view:nth-child(2) {
                        width: 85%;
                        display: flex;
                        flex-direction: column;
                        >view {
                            margin-bottom: 14rpx;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                }
            }
        }
        .msg-tools {
            height: 104rpx;
            line-height: 104rpx;
            display: flex; // justify-content: space-between;
            align-items: center;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #fff;
            z-index: 9999;
            font-size: 34rpx;
            padding-right: 28rpx;
            >view {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        @keyframes showTools {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        .animation {
            animation: showTools 1s linear;
        }
    }
</style>

<template>
    <view class='container'>
        <view class="pageTitle">
            <text>消息</text>
            <view class="titleIcon">
                <!-- <icon class="iconfont icon-xiaoxileixingfenlei" style="margin-right:20rpx"></icon> -->
                <icon class="iconfont icon-quanxuan" @tap="showTools"></icon>
            </view>
        </view>
        <view class="messages-list" style="margin-bottom:{{showTools?'148rpx':'44rpx'}}">
            <repeat for="{{GetUserNotifications_data}}" key="index" index="index" item="item">
                <view class="msg-item">
                    <view class="item-checkbox" wx:if="{{showTools}}">
                        <checkbox value="{{item.name}}" checked="{{isDisabled[index]}}" color="#5d73fa" catchtap="sign('{{item.id}}','{{index}}','{{item.state}}')" />
                    </view>
                    <view class="item-content" bindlongpress="deleteNotification('{{item.id}}','{{index}}')">
                        <view>
                            <image src="{{EmployeePhoto[index]}}" mode="scaleToFill" lazy-load="false" />
                        </view>
                        <view @tap="jump_page('{{item}}','{{index}}')">
                            <view>
                                <text>{{item.TextTile}}</text>
                                <text style="color:#7a7a7a">{{item.notification.creationTime}}</text>
                            </view>
                            <text style="color:#7a7a7a">{{item.notification.data.message}}</text>
                        </view>
                        <view class="signed" wx:if="{{item.state==1}}" @tap="jump_page('{{item}}','{{index}}')"></view>
                    </view>
                </view>
            </repeat>
        </view>
        <view class="msg-tools {{showTools?'animation':''}}" wx:if="{{showTools}}">
            <view @tap="all_checked" style="color:#5d73fa">
                <text wx:if="{{!all_checked}}">全选</text>
                <text wx:else="{{!all_checked}}">取消全选</text>
            </view>
            <view style="color:{{show_sign?'#5d73fa':'#7a7a7a'}}" @tap="isAllComlated"> <text>已读</text></view>
            <view style="color:{{delet_id.length!==0?'#e20000':'#7a7a7a'}}" @tap="DeleteUserNotifications"> <text>删除</text></view>
        </view>
        <placeHolderImage :placeHolder.sync="placeHolder" />
    </view>
</template>

<script>
    import wepy from 'wepy';
    import ajax from '@/utils/cofig/ajax.js';
    import mixins from '@/utils/cofig/mixin.js';
    import placeHolderImage from '@/components/placeHolderImage';
    import {
        beautify_time
    } from '@/utils/cofig/api.js';
    export default class message extends wepy.page {
        config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4',
        };
        data = {
            showTools: false,
            totalCount: 0,
            maxResultCount: 10,
            skipCount: 0,
            GetUserNotifications_data: [],
            EmployeePhoto: [],
            isDisabled: [],
            sign_id: [],
            sign_id_all: [],
            delet_id: [],
            delet_id_all: [],
            all_checked: false,
            show_sign: false,
        };
        components = {
            placeHolderImage
        };
        methods = {
            // 跳转
            jump_page(item,index) {
                console.log(item.linkPage, item.notification.data.properties.id, item.notification.notificationName, item.id, index, item.state);
                // e20c1211-1939-4ec0-ae31-e7946eae33f2
                if (item.state == 0) {
                    this.SetNotificationAsRead(item.id, index);
                }
                switch (item.notification.notificationName) {
                    case 'App.Financial.Receipt.WaitForAssigned':
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id + '&type=1',
                        });
                        break;
                    case 'App.Financial.Receipt.WaitForConfirmed':
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id + '&type=0',
                        });
                        break;
                    case 'App.Financial.Receipt.WaitForClaimed':
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id + '&type=0',
                        });
                        break;
                    default:
                        wx.navigateTo({
                            url: item.linkPage + '?id=' + item.notification.data.properties.id,
                        });
                        break;
                }
            },
            //全选
            all_checked() {
                this.all_checked = !this.all_checked;
                if (this.all_checked) {
                    this.isDisabled = this.isDisabled.map(item => {
                        return item = true;
                    })
                    this.sign_id = this.sign_id_all;
                    this.delet_id = this.delet_id_all;
                } else {
                    this.isDisabled = this.isDisabled.map(item => {
                        return item = false;
                    })
                    this.sign_id = [];
                    this.delet_id = [];
                }
                this.$apply();
            },
            //单选
            sign(id, index, state) {
                this.isDisabled[index] = !this.isDisabled[index];
                if (this.isDisabled[index]) {
                    this.delet_id = [...this.delet_id, id];
                    if (state == 0) {
                        this.sign_id = [...this.sign_id, id];
                    } else {
                        this.sign_id = [...this.sign_id, null];
                    }
                } else {
                    this.delet_id.splice(this.delet_id.indexOf(id), 1);
                    // if (state == 0) {
                    this.sign_id.splice(this.sign_id.indexOf(id), 1);
                    // }
                }
            },
            // 批量完成
            isAllComlated() {
                if (this.show_sign) {
                    var id = [];
                    for (var index=0,len=this.sign_id.length;index<len;index++ ) {
                        if (this.sign_id[index] !== null) {
                            id.push(this.sign_id[index]);
                        }
                    }
                    this.SetAllNotificationsAsRead(id);
                } else {
                    console.log('1123')
                }
            },
            //删除提醒消息
            deleteNotification(id, index) {
                if (!this.showTools) {
                    wx.showModal({
                        title: '是否确认！', //提示的标题,
                        content: '一旦删除将无法恢复！', //提示的内容,
                        showCancel: true, //是否显示取消按钮,
                        cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                        cancelColor: '#7a7a7a', //取消按钮的文字颜色,
                        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                        confirmColor: '#5d73fa', //确定按钮的文字颜色,
                        success: res => {
                            if (res.confirm) {
                                this.showTools = false;
                                this.DeleteUserNotification(id, index)
                            }
                        }
                    });
                }
            },
            //批量删除
            DeleteUserNotifications() {
                wx.showModal({
                    title: '是否确认！', //提示的标题,
                    content: '一旦删除将无法恢复！', //提示的内容,
                    showCancel: true, //是否显示取消按钮,
                    cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                    cancelColor: '#7a7a7a', //取消按钮的文字颜色,
                    confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: '#5d73fa', //确定按钮的文字颜色,
                    success: res => {
                        if (res.confirm) {
                            this.showTools = false;
                            this.DeleteUserNotifications()
                        }
                    }
                });
            },
            showTools() {
                this.showTools = !this.showTools;
                this.sign_id = [];
                this.delet_id = [];
                this.all_checked = false;
                if(this.showTools){
                    this.GetUserNotifications(false,'0');
                }else{
                    this.GetUserNotifications(false);
                }
                this.isDisabled = this.isDisabled.map(item => {
                    item = false
                    return item
                })
                this.$apply();
            }
        };
        mixins = [mixins]
        events = {};
        watch = {
            isDisabled(value) {
                var all_checked = value.every(item => {
                    return item == true
                })
                if (all_checked) {
                    this.all_checked = true
                } else {
                    this.all_checked = false
                }
            },
            sign_id(value) {
                var isSign = value.every(item => {
                    return item == null
                })
                if (!isSign) {
                    this.show_sign = true;
                } else {
                    this.show_sign = false;
                }
            }
        };
        computed = {};
        //上拉加载
        onReachBottom() {
            if (this.totalCount / (this.skipCount+10) > 1 && this.$parent.global.netWorkString) {
                this.skipCount += 10;
                if(this.showTools){
                    this.GetUserNotifications(true,'0');
                }else{
                    this.GetUserNotifications(true);
                }
                
                this.$apply();
            } else {
                if (this.$parent.global.netWorkString) {
                    wx.showToast({
                        title: '我们是有底线的！',
                        icon: 'none',
                        duration: 1500,
                        mask: false,
                    });
                } else {
                    wx.showToast({
                        title: '网络连接失败！',
                        icon: 'none',
                        duration: 1500,
                        mask: false,
                    });
                }
            }
        }
        //下拉刷新
        onPullDownRefresh() {
            this.sign_id = [];
            this.delet_id = [];
            this.showTools = false;
            this.GetUserNotifications(false);
            this.$apply();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
        //获取通知消息
        async GetUserNotifications(isRresh,state='') {
            wx.showLoading({
                title: 'Loading...', //提示的内容,
                mask: true, //显示透明蒙层，防止触摸穿透,
            });
            if (!isRresh) {
                this.skipCount = 0;
                this.sign_id = [];
                this.delet_id = [];
                this.GetUserNotifications_data = [];
                this.EmployeePhoto = [];
                this.isDisabled = [];
                this.all_checked = false;
            }
            var data = {
                maxResultCount: this.maxResultCount,
                notificationName: "",
                skipCount: this.skipCount,
                state,
            }
            var resData = await ajax.getData(
                '/api/services/app/notification/GetWechatMiniUserNotifications',
                'POST',
                data
            )
            switch (resData.statusCode) {
                case 200:
                    if (resData.data.result.totalCount !== 0) {
                        this.totalCount = resData.data.result.totalCount;
                        var UserNotifications_Data = resData.data.result.items;
                        var isDisabled = [];
                        UserNotifications_Data.forEach( item =>{
                             item.notification.creationTime = beautify_time(item.notification.creationTime)
                            switch (item.notification.notificationName) {
                                case 'App.Financial.Billings.Returned':
                                    item.TextTile = '账单-已退回';
                                    item.linkPage = '../../modules/bill/myBill/myBillDetail';
                                    break;
                                case 'App.Works.Task.Confirmed':
                                    item.TextTile = '任务-已参与';
                                    item.linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                    break;
                                case 'App.Works.Task.Comment.Created':
                                    item.TextTile = '任务-新消息';
                                    item.linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                    break;
                                case 'App.Works.Log.Returned':
                                    item.TextTile = '工作日志-已退回';
                                    item.linkPage = '../../modules/myRecord/myLogdetail/logdetail';
                                    break;
                                case 'App.HumanResource.Attendance.Approved':
                                    item.TextTile = '请假-已审核';
                                    item.linkPage = '../../modules/myApplyList/myApplyDetail/myApplyDetail';
                                    break
                                case 'App.Works.Task.WaitForConfirmed':
                                    item.TextTile = '任务-待确认'
                                    item.linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                    break
                                case 'App.Works.Meeting.Rejected':
                                    item.TextTile = '会议-已拒绝'
                                    item.linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                    break
                                case 'App.HumanResource.Attendance.Created':
                                    item.TextTile = '请假-待审核'
                                    item.linkPage = '../../modules/auditModules/applyAudit/applyAuditDetail';
                                    break
                                case 'App.HumanResource.Attendance.Returned':
                                    item.TextTile = '请假-已退回'
                                    item.linkPage = '../../modules/myApplyList/myApplyDetail/myApplyDetail';
                                    break
                                case 'App.HumanResource.Attendance.Returned':
                                    item.TextTile = '请假-已退回'
                                    item.linkPage = '../../modules/myApplyList/myApplyDetail/myApplyDetail';
                                    break
                                case 'App.Financial.Billings.Approved':
                                    item.TextTile = '账单-已审核';
                                    item.linkPage = '../../modules/bill/myBill/myBillDetail';
                                    break;
                                case 'App.Financial.Billings.Created':
                                    item.TextTile = '账单-待处理';
                                    item.linkPage = '../../modules/bill/manageBill/manageBillDetail';
                                    break;
                                case 'App.Financial.Invoice.Returned':
                                    item.TextTile = '发票-已退回';
                                    item.linkPage = '../../modules/invoice/myInvoce/myinvoiceDetail';
                                    break;
                                case 'App.Works.Meeting.Confirmed':
                                    item.TextTile = '会议-已参与';
                                    item.linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                    break;
                                case 'App.Works.Meeting.StartRemind':
                                    item.TextTile = '会议-即将开始';
                                    item.linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                    break;
                                case 'App.Financial.Charge.WaitForApproved':
                                    item.TextTile = '费用-待审核';
                                    item.linkPage = '../../modules/cost/manageCost/manageCostDetail';
                                    break;
                                case 'App.Works.Task.Archived':
                                    item.TextTile = '任务-已归档';
                                    item.linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                    break;
                                case 'App.Financial.Invoice.Canceled':
                                    item.TextTile = '发票-已作废';
                                    item.linkPage = '../../modules/invoice/myInvoce/myinvoiceDetail';
                                    break;
                                case 'App.Works.Meeting.MeetingMinutesCompleted':
                                    item.TextTile = '会议-纪要-已完成';
                                    item.linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                    break;
                                case 'App.Works.Log.Approved':
                                    item.TextTile = '工作日志-已审核';
                                    item.linkPage = '../../modules/myRecord/myLogdetail/logdetail';
                                    break;
                                case 'App.Works.Meeting.Reminded':
                                    item.TextTile = '会议-预设提醒';
                                    item.linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                    break;
                                case 'App.Financial.Receipt.WaitForConfirmed':
                                    item.TextTile = '收款-待确认';
                                    item.linkPage = '../../modules/receivables/manageReceivables/manageReceivablesDetail';
                                    break;
                                case 'App.Financial.Receipt.WaitForClaimed':
                                    item.TextTile = '收款-待认领';
                                    item.linkPage = '../../modules/receivables/manageReceivables/manageReceivablesDetail';
                                    break;
                                case 'App.Financial.Charge.Returned':
                                    item.TextTile = '费用-已退回';
                                    item.linkPage = '../../modules/cost/myCost/costDetail';
                                    break;
                                case 'App.Works.Log.Created':
                                    item.TextTile = '工作日志-已参与';
                                    item.linkPage = '../../modules/myRecord/myLogdetail/logdetail';
                                    break;
                                case 'App.Financial.Charge.Approved':
                                    item.TextTile = '费用-已审核';
                                    item.linkPage = '../../modules/cost/myCost/costDetail';
                                    break;
                                case 'App.Works.Task.Rejected':
                                    item.TextTile = '任务-已拒绝';
                                    item.linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                    break;
                                case 'App.Works.Meeting.Created':
                                    item.TextTile = '会议-新会议';
                                    item.linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                    break;
                                case 'App.Works.Meeting.WaitApproved':
                                    item.TextTile = '会议-待参与';
                                    item.linkPage = '../../modules/myMeeting/meetingDetail/meetingDetail';
                                    break;
                                case 'App.Works.Task.Completed':
                                    item.TextTile = '任务-已完成';
                                    item.linkPage = '../../modules/myTaskCourse/taskStage/taskDetail/taskdetail';
                                    break;
                                case 'App.Works.Log.WaitApproved':
                                    item.TextTile = '工作日志-待审核';
                                    item.linkPage = '../../modules/auditModules/recordAudit/logDetail';
                                    break;
                                case 'App.Financial.Invoice.WaitForRegistered':
                                    item.TextTile = '发票-待开票';
                                    item.linkPage = '../../modules/invoice/manageInvoce/manageInvoiceDetail';
                                    break;
                                case 'App.Financial.Receipt.WaitForClaimed':
                                    item.TextTile = '发票-待领取';
                                    item.linkPage = '../../modules/invoice/manageInvoce/manageInvoiceDetail';
                                    break;
                                case 'App.Business.CaseCreation.Created':
                                    item.TextTile = '立案-待审核';
                                    item.linkPage = '../../modules/auditModules/caseAudit/caseDetailAudit/caseDetailAudit';
                                    break;
                                case 'App.Business.StampFiles.Returned':
                                    item.TextTile = '文书报审-已退回';
                                    item.linkPage = '../../modules/auditModules/approveAudit/approveDetail';
                                    break;
                                case 'App.Business.StampFiles.Created':
                                    item.TextTile = '文书报审-待审核';
                                    item.linkPage = '../../modules/auditModules/approveAudit/approveDetail';
                                    break;
                                case 'App.Business.StampFiles.Approved':
                                    item.TextTile = '文书报审-已审核';
                                    item.linkPage = '../../modules/auditModules/approveAudit/approveDetail';
                                    break;
                            }
                            isDisabled.push(false)
                        })
                        console.log(1)
                        this.GetPhoto(UserNotifications_Data, isRresh);
                        this.GetState(UserNotifications_Data, isRresh);
                        if (isRresh) {
                            this.isDisabled = [...this.isDisabled, ...isDisabled];
                            this.GetUserNotifications_data = [...this.GetUserNotifications_data, ...UserNotifications_Data];
                        } else {
                            this.isDisabled = isDisabled;
                            this.GetUserNotifications_data = UserNotifications_Data;
                        }
                    } else {
                        this.placeHolder.placeHolderImageIndex = 0;
                        this.placeHolder.placeHolderShow = true;
                    }
                    this.$apply();
                    break;
                case 403:
                    this.placeHolder.placeHolderImageIndex = 3;
                    this.placeHolder.placeHolderShow = true;
                    this.$apply();
                    break;
                case 500:
                    this.placeHolder.placeHolderImageIndex = 1;
                    this.placeHolder.placeHolderShow = true;
                    this.$apply();
                    break;
            }
            this.$apply();
        }
        //获取头像
        async GetPhoto(data, refresh) {
            var avatarData = []
            for (var index in data) {
                var http = '/api/services/web/personal/GetEmployeePhoto?id=' + data[index].notification.data.properties.creatorUserId;
                var resData = await ajax.getUserAvatar(http);
                avatarData[index] = resData.tempFilePath;
            }
            refresh ? this.EmployeePhoto = [...this.EmployeePhoto, ...avatarData] : this.EmployeePhoto = avatarData;
            this.$apply();
        }
        GetState(data, refresh) {
            var sign_id_all = [];
            var delet_id_all = []
            data.forEach((item,index) =>{
                delet_id_all[index] = item.id
                item.state == 0 ? sign_id_all[index] = item.id : sign_id_all[index] = null;
            })
            if (refresh) {
                this.delet_id_all = [...this.delet_id_all, ...delet_id_all]
                this.sign_id_all = [...this.sign_id_all, ...sign_id_all]
            } else {
                this.delet_id_all = delet_id_all;
                this.sign_id_all = sign_id_all;
            }
            this.$apply();
        }
        //标记
        async SetNotificationAsRead(id, index) {
            wx.showLoading({
                title: 'Loading...', //提示的内容,
                mask: true, //显示透明蒙层，防止触摸穿透,
                success: res => {
                    this.GetUserNotifications_data[index].state = 1;
                }
            });
            var data = {
                id
            }
            var resData = await ajax.getData(
                '/api/services/app/notification/SetNotificationAsRead',
                'POST',
                data
            )
            if (resData.data.success) {
                console.log('完成')
            }
        }
        //批量标记
        async SetAllNotificationsAsRead(id) {
            wx.showLoading({
                title: 'Loading...', //提示的内容,
                mask: true, //显示透明蒙层，防止触摸穿透,
                success: res => {
                    this.sign_id = [];
                    this.delet_id = [];
                    
                    this.GetUserNotifications(false);
                    this.$apply();
                }
            });
            var resData = await ajax.getData(
                '/api/services/app/notification/SetNotificationsAsRead',
                'POST',
                id
            )
            if(resData.statusCode==200){
                this.showTools = false;
            }
        }
        //删除消息
        async DeleteUserNotification(id, index) {
            wx.showLoading({
                title: 'Loading...', //提示的内容,
                mask: true, //显示透明蒙层，防止触摸穿透,
                success: res => {
                    this.GetUserNotifications_data.splice(index, 1);
                    this.EmployeePhoto.splice(index, 1);
                    this.isDisabled.splice(index, 1);;
                    this.delet_id_all.splice(index, 1);
                    this.sign_id_all.splice(index, 1);
                    this.$apply();
                }
            });
            var data = {
                id
            }
            var resData = await ajax.getData(
                '/api/services/app/notification/DeleteUserNotification',
                'POST',
                data
            )
            if (resData.data.success) {
                console.log('删除成功')
            }
        }
        //批量删除
        async DeleteUserNotifications() {
            wx.showLoading({
                title: 'Loading...', //提示的内容,
                mask: true, //显示透明蒙层，防止触摸穿透,
                success: res => {
                    this.GetUserNotifications(false);
                }
            });
            var data = this.delet_id
            var resData = await ajax.getData(
                '/api/services/app/notification/DeleteUserNotifications',
                'POST',
                data
            )
            if(resData.success){
                console.log('多选删除完成')
            }
        }
        onLoad() {
            this.GetUserNotifications(false);
        };
        onShow() {};
    }
</script>

