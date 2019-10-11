'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myRegisterList = function (_wepy$page) {
    _inherits(myRegisterList, _wepy$page);

    function myRegisterList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, myRegisterList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myRegisterList.__proto__ || Object.getPrototypeOf(myRegisterList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true,
            backgroundTextStyle: 'dark',
            backgroundColorTop: '#f4f4f4',
            backgroundColorBottom: '#f4f4f4'
        }, _this.data = {
            queryStream: {},
            pageNumber: 1,
            pageSize: 10,
            totalCount: 0,
            CaseRecordListDatas: []
        }, _this.methods = {
            toSearch: function toSearch() {
                wx.navigateTo({
                    url: './search/search_register'
                });
            },
            operations: function operations(item) {
                var opition = item.operations.map(function (item) {
                    return item.text;
                });
                wx.showActionSheet({
                    itemList: opition, //按钮的文字数组，数组长度最大为6个,
                    //   itemColor: '#000000', //按钮的文字颜色,
                    success: function success(res) {
                        var className = item.operations[res.tapIndex].className;
                        switch (className) {
                            case 'Info':
                                wx.navigateTo({
                                    url: '../mycase/caseDetail/casedetail?id=' + item.id + '&clientId=' + item.clientId
                                });
                                break;
                            case 'OrderInfo':
                                wx.navigateTo({
                                    url: '../conflictRetrieval/auditedResults/auditedResults?id=' + item.orderItemId + '&caseId=' + item.id
                                });
                                // wx.showToast({
                                //   title: '此功能暂未开放！', //提示的内容,
                                //   icon: 'none', //图标,
                                //   duration: 2000, //延迟时间,
                                //   mask: false, //显示透明蒙层，防止触摸穿透,
                                //   success: res => {}
                                // });
                                break;
                            case 'EditCaseApply':
                                if (item.processStatus == 'NK') {
                                    console.log(item);
                                    wx.navigateTo({
                                        url: './caseChargeAndContract/lawyerChargeInfo?id=' + item.id
                                    });
                                    // wx.showActionSheet({
                                    //     itemList:['相册或相机拍照','本地文件'],
                                    //     success : re =>{
                                    //         if(re.tapIndex === 0){
                                    //             wx.chooseImage({
                                    //                 count: 1,
                                    //                 sizeType: ['original', 'compressed'],
                                    //                 sourceType: ['album', 'camera'],
                                    //                 success : res =>{
                                    //                     // tempFilePath可以作为img标签的src属性显示图片
                                    //                     const tempFilePaths = res.tempFilePaths
                                    //                     console.log(tempFilePaths);
                                    //                     this.uploadFile(tempFilePaths[0],item.id)
                                    //                 }
                                    //             })
                                    //         }else{
                                    //             wx.chooseMessageFile({
                                    //                 count: 1,
                                    //                 type: 'file',
                                    //                 success : res =>{
                                    //                     // tempFilePath可以作为img标签的src属性显示图片
                                    //                     const tempFilePaths = res.tempFilePaths
                                    //                     console.log(tempFilePaths);
                                    //                     this.uploadFile(tempFilePaths[0],item.id)

                                    //                 }
                                    //             })
                                    //         }
                                    //     },
                                    //     fail (res) {
                                    //         console.log(res.errMsg)
                                    //     }
                                    // })
                                    return false;
                                    wx.showModal({
                                        title: '提示', //提示的标题,
                                        content: '此功能需要打开APP或者登录网页版进行操作', //提示的内容,
                                        showCancel: true, //是否显示取消按钮,
                                        cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                                        cancelColor: '#000000', //取消按钮的文字颜色,
                                        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                                        confirmColor: '#5d73fa', //确定按钮的文字颜色,
                                        success: function success(res) {
                                            if (res.confirm) {
                                                console.log('用户点击确定');
                                            } else if (res.cancel) {
                                                console.log('用户点击取消');
                                            }
                                        }
                                    });
                                } else {
                                    wx.navigateTo({
                                        url: './register?id=' + item.id
                                    });
                                }
                                break;

                            default:
                                break;
                        }
                    }
                });
            },
            toRegistDetail: function toRegistDetail(id, clientId) {
                wx.navigateTo({
                    url: '../mycase/caseDetail/casedetail?id=' + id + '&clientId=' + clientId
                });
            },
            touchEnd: function touchEnd() {
                wx.navigateTo({
                    url: '../myRegister/register'
                });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(myRegisterList, [{
        key: 'GetCaseRecordList',

        //   // 上传合同附件
        //     async uploadFile(file,caseid){
        //         wx.showLoading({
        //             title: '上传中', //提示的内容,
        //             mask: true, //显示透明蒙层，防止触摸穿透,
        //             success: res => {}
        //         });
        //          let resData = await ajax.uploadFile('/api/services/web/document/uploadCaseContract',
        //          file,
        //          {caseid},
        //          'file'
        //          )
        //          wx.hideLoading()
        //          if(resData.statusCode==200){
        //             wx.showToast({
        //                 title: '成功',
        //                 icon: 'success',
        //                 duration: 2000
        //             }) 
        //          }else{
        //              wx.showToast({
        //                  title:result.error.message , //提示的内容,
        //                  icon: 'none', //图标,
        //                  duration: 2000, //延迟时间,
        //                  mask: false, //显示透明蒙层，防止触摸穿透,
        //                  success: res => {}
        //              });
        //          }
        //         } 
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, _CaseRecordListDatas, CaseRecordListDatas;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: 'Loading...', //提示的内容,
                                    mask: false, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                data = {
                                    AcceptDate: {
                                        StartDate: "",
                                        EndDate: ""
                                    },
                                    CaseId: "",
                                    Category: "",
                                    ClientId: "",
                                    ClientName: "",
                                    CreationTime: {
                                        StartDate: "",
                                        EndDate: ""
                                    },
                                    Id: "",
                                    KeyWord: "",
                                    Lawyer: "",
                                    LawyerName: "",
                                    LawyerRole: "",
                                    Name: "",
                                    ProcessStatus: "",
                                    Status: "",
                                    pageNumber: this.pageNumber,
                                    pageSize: this.pageSize,
                                    sorting: ""
                                };

                                if (Object.keys(this.queryStream).length !== 0) {
                                    data.KeyWord = this.queryStream.KeyWord || '';
                                    data.AcceptDate.StartDate = this.queryStream.hasOwnProperty('AcceptDate') ? this.queryStream.AcceptDate.StartDate : '';
                                    data.AcceptDate.EndDate = this.queryStream.hasOwnProperty('AcceptDate') ? this.queryStream.AcceptDate.EndDate : '';
                                    data.CreationTime.EndDate = this.queryStream.hasOwnProperty('CreationTime') ? this.queryStream.CreationTime.EndDate : '';
                                    data.CreationTime.StartDate = this.queryStream.hasOwnProperty('CreationTime') ? this.queryStream.CreationTime.StartDate : '';
                                    data.Status = this.queryStream.Status || '';
                                    data.ProcessStatus = this.queryStream.ProcessStatus || '';
                                    data.Category = this.queryStream.Category || '';
                                    data.Name = this.queryStream.Name || '';
                                    data.ClientName = this.queryStream.ClientName || '';
                                    data.LawyerRole = this.queryStream.LawyerRole || '';
                                }
                                _context.next = 5;
                                return _ajax2.default.getData('/api/services/web/caseApplication/GetCaseRecordList', 'post', data);

                            case 5:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    CaseRecordListDatas = resData.data.result;

                                    this.totalCount = CaseRecordListDatas.totalCount;
                                    // for (var index in CaseRecordListDatas.items) {
                                    //     if (CaseRecordListDatas.items[index].processStatus == 'NI' || CaseRecordListDatas.items[index].processStatus == 'NK') {
                                    //         CaseRecordListDatas.items[index].operations.push({
                                    //             text: '编辑',
                                    //             className:'Aduit'
                                    //         })
                                    //     }
                                    // }
                                    (_CaseRecordListDatas = this.CaseRecordListDatas).push.apply(_CaseRecordListDatas, _toConsumableArray(CaseRecordListDatas.items));
                                }
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseRecordList() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseRecordList;
        }()
        // 下拉刷新

    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            this.queryStream = {};
            this.CaseRecordListDatas = [], this.pageNumber = 1;
            this.GetCaseRecordList();
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.totalCount / 10 > this.pageNumber) {
                this.pageNumber += 1;
                this.GetCaseRecordList();
            }
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetCaseRecordList();
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh(searchData) {
            if (searchData) {
                this.queryStream = searchData;
            }
            this.CaseRecordListDatas = [];
            this.pageNumber = 1;
            this.GetCaseRecordList();
        }
        // onShow() {
        //     var pages = getCurrentPages();
        //     var prevPage = pages[pages.length - 1];
        //     if (prevPage.data.refresh) {
        //         this.queryStream = prevPage.data.queryStream;
        //         prevPage.data.refresh = false;
        //         this.CaseRecordListDatas = [];
        //         this.pageNumber = 1;
        //         this.GetCaseRecordList();
        //     }
        // };

    }]);

    return myRegisterList;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(myRegisterList , 'pages/modules/myRegister/myRegisterList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15UmVnaXN0ZXJMaXN0LmpzIl0sIm5hbWVzIjpbIm15UmVnaXN0ZXJMaXN0IiwiY29uZmlnIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvclRvcCIsImJhY2tncm91bmRDb2xvckJvdHRvbSIsImRhdGEiLCJxdWVyeVN0cmVhbSIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInRvdGFsQ291bnQiLCJDYXNlUmVjb3JkTGlzdERhdGFzIiwibWV0aG9kcyIsInRvU2VhcmNoIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3BlcmF0aW9ucyIsIml0ZW0iLCJvcGl0aW9uIiwibWFwIiwidGV4dCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0Iiwic3VjY2VzcyIsImNsYXNzTmFtZSIsInJlcyIsInRhcEluZGV4IiwiaWQiLCJjbGllbnRJZCIsIm9yZGVySXRlbUlkIiwicHJvY2Vzc1N0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJjb25maXJtIiwiY2FuY2VsIiwidG9SZWdpc3REZXRhaWwiLCJ0b3VjaEVuZCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJzaG93TG9hZGluZyIsIm1hc2siLCJBY2NlcHREYXRlIiwiU3RhcnREYXRlIiwiRW5kRGF0ZSIsIkNhc2VJZCIsIkNhdGVnb3J5IiwiQ2xpZW50SWQiLCJDbGllbnROYW1lIiwiQ3JlYXRpb25UaW1lIiwiSWQiLCJLZXlXb3JkIiwiTGF3eWVyIiwiTGF3eWVyTmFtZSIsIkxhd3llclJvbGUiLCJOYW1lIiwiUHJvY2Vzc1N0YXR1cyIsIlN0YXR1cyIsInNvcnRpbmciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJhamF4IiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwicHVzaCIsIml0ZW1zIiwiJGFwcGx5IiwiR2V0Q2FzZVJlY29yZExpc3QiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwic2VhcmNoRGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxjOzs7Ozs7Ozs7Ozs7OzswTUFDakJDLE0sR0FBUztBQUNMQyxtQ0FBdUIsSUFEbEI7QUFFTEMsaUNBQXFCLE1BRmhCO0FBR0xDLGdDQUFvQixTQUhmO0FBSUxDLG1DQUF1QjtBQUpsQixTLFFBTVRDLEksR0FBTztBQUNIQyx5QkFBYSxFQURWO0FBRUhDLHdCQUFZLENBRlQ7QUFHSEMsc0JBQVUsRUFIUDtBQUlIQyx3QkFBWSxDQUpUO0FBS0hDLGlDQUFxQjtBQUxsQixTLFFBT1BDLE8sR0FBVTtBQUNOQyxvQkFETSxzQkFDSztBQUNQQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQUxLO0FBTU5DLHNCQU5NLHNCQU1LQyxJQU5MLEVBTVc7QUFDYixvQkFBSUMsVUFBVUQsS0FBS0QsVUFBTCxDQUFnQkcsR0FBaEIsQ0FBb0IsVUFBQ0YsSUFBRDtBQUFBLDJCQUFVQSxLQUFLRyxJQUFmO0FBQUEsaUJBQXBCLENBQWQ7QUFDQVAsbUJBQUdRLGVBQUgsQ0FBbUI7QUFDZkMsOEJBQVVKLE9BREssRUFDSTtBQUNuQjtBQUNBSyw2QkFBUyxzQkFBTztBQUNaLDRCQUFJQyxZQUFVUCxLQUFLRCxVQUFMLENBQWdCUyxJQUFJQyxRQUFwQixFQUE4QkYsU0FBNUM7QUFDQSxnQ0FBUUEsU0FBUjtBQUNJLGlDQUFLLE1BQUw7QUFDSVgsbUNBQUdDLFVBQUgsQ0FBYztBQUNWQyx5Q0FBSyx3Q0FBd0NFLEtBQUtVLEVBQTdDLEdBQWtELFlBQWxELEdBQWlFVixLQUFLVztBQURqRSxpQ0FBZDtBQUdBO0FBQ0osaUNBQUssV0FBTDtBQUNJZixtQ0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlDQUFLLDJEQUEyREUsS0FBS1ksV0FBaEUsR0FBOEUsVUFBOUUsR0FBMkZaLEtBQUtVO0FBRDNGLGlDQUFkO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKLGlDQUFLLGVBQUw7QUFDSSxvQ0FBR1YsS0FBS2EsYUFBTCxJQUFvQixJQUF2QixFQUE0QjtBQUN4QkMsNENBQVFDLEdBQVIsQ0FBWWYsSUFBWjtBQUNBSix1Q0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLDZDQUFLLGlEQUFpREUsS0FBS1U7QUFEakQscUNBQWQ7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUFPLEtBQVA7QUFDQWQsdUNBQUdvQixTQUFILENBQWE7QUFDTEMsK0NBQU8sSUFERixFQUNRO0FBQ2JDLGlEQUFTLHVCQUZKLEVBRTZCO0FBQ2xDQyxvREFBWSxJQUhQLEVBR2E7QUFDbEJDLG9EQUFZLElBSlAsRUFJYTtBQUNsQkMscURBQWEsU0FMUixFQUttQjtBQUN4QkMscURBQWEsSUFOUixFQU1jO0FBQ25CQyxzREFBYyxTQVBULEVBT29CO0FBQ3pCakIsaURBQVMsc0JBQU87QUFDWixnREFBSUUsSUFBSWdCLE9BQVIsRUFBaUI7QUFDYlYsd0RBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsNkNBRkQsTUFFTyxJQUFJUCxJQUFJaUIsTUFBUixFQUFnQjtBQUNuQlgsd0RBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSjtBQWRJLHFDQUFiO0FBZ0JILGlDQXZERCxNQXVESztBQUNEbkIsdUNBQUdDLFVBQUgsQ0FBYztBQUNOQyw2Q0FBSyxtQkFBbUJFLEtBQUtVO0FBRHZCLHFDQUFkO0FBR0g7QUFDRDs7QUFFSjtBQUNJO0FBbEZSO0FBb0ZIO0FBekZjLGlCQUFuQjtBQTJGSCxhQW5HSztBQW9HTmdCLDBCQXBHTSwwQkFvR1NoQixFQXBHVCxFQW9HYUMsUUFwR2IsRUFvR3VCO0FBQ3pCZixtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLHdDQUF3Q1ksRUFBeEMsR0FBNkMsWUFBN0MsR0FBNERDO0FBRHZELGlCQUFkO0FBR0gsYUF4R0s7QUF5R05nQixvQkF6R00sc0JBeUdLO0FBQ1AvQixtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSDtBQTdHSyxTLFFBK0dWOEIsTSxHQUFTLEUsUUFDVEMsSyxHQUFRLEUsUUFDUkMsUSxHQUFXLEU7Ozs7OztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUVRbEMsbUNBQUdtQyxXQUFILENBQWU7QUFDWGQsMkNBQU8sWUFESSxFQUNVO0FBQ3JCZSwwQ0FBTSxLQUZLLEVBRUU7QUFDYjFCLDZDQUFTLHNCQUFPLENBQUU7QUFIUCxpQ0FBZjtBQUtJbEIsb0MsR0FBTztBQUNQNkMsZ0RBQVk7QUFDUkMsbURBQVcsRUFESDtBQUVSQyxpREFBUztBQUZELHFDQURMO0FBS1BDLDRDQUFRLEVBTEQ7QUFNUEMsOENBQVUsRUFOSDtBQU9QQyw4Q0FBVSxFQVBIO0FBUVBDLGdEQUFZLEVBUkw7QUFTUEMsa0RBQWM7QUFDVk4sbURBQVcsRUFERDtBQUVWQyxpREFBUztBQUZDLHFDQVRQO0FBYVBNLHdDQUFJLEVBYkc7QUFjUEMsNkNBQVMsRUFkRjtBQWVQQyw0Q0FBUSxFQWZEO0FBZ0JQQyxnREFBWSxFQWhCTDtBQWlCUEMsZ0RBQVksRUFqQkw7QUFrQlBDLDBDQUFNLEVBbEJDO0FBbUJQQyxtREFBZSxFQW5CUjtBQW9CUEMsNENBQVEsRUFwQkQ7QUFxQlAxRCxnREFBWSxLQUFLQSxVQXJCVjtBQXNCUEMsOENBQVUsS0FBS0EsUUF0QlI7QUF1QlAwRCw2Q0FBUztBQXZCRixpQzs7QUF5Qlgsb0NBQUlDLE9BQU9DLElBQVAsQ0FBWSxLQUFLOUQsV0FBakIsRUFBOEIrRCxNQUE5QixLQUF5QyxDQUE3QyxFQUFnRDtBQUM1Q2hFLHlDQUFLc0QsT0FBTCxHQUFlLEtBQUtyRCxXQUFMLENBQWlCcUQsT0FBakIsSUFBNEIsRUFBM0M7QUFDQXRELHlDQUFLNkMsVUFBTCxDQUFnQkMsU0FBaEIsR0FBNEIsS0FBSzdDLFdBQUwsQ0FBaUJnRSxjQUFqQixDQUFnQyxZQUFoQyxJQUFnRCxLQUFLaEUsV0FBTCxDQUFpQjRDLFVBQWpCLENBQTRCQyxTQUE1RSxHQUF3RixFQUFwSDtBQUNBOUMseUNBQUs2QyxVQUFMLENBQWdCRSxPQUFoQixHQUEwQixLQUFLOUMsV0FBTCxDQUFpQmdFLGNBQWpCLENBQWdDLFlBQWhDLElBQWdELEtBQUtoRSxXQUFMLENBQWlCNEMsVUFBakIsQ0FBNEJFLE9BQTVFLEdBQXNGLEVBQWhIO0FBQ0EvQyx5Q0FBS29ELFlBQUwsQ0FBa0JMLE9BQWxCLEdBQTRCLEtBQUs5QyxXQUFMLENBQWlCZ0UsY0FBakIsQ0FBZ0MsY0FBaEMsSUFBa0QsS0FBS2hFLFdBQUwsQ0FBaUJtRCxZQUFqQixDQUE4QkwsT0FBaEYsR0FBMEYsRUFBdEg7QUFDQS9DLHlDQUFLb0QsWUFBTCxDQUFrQk4sU0FBbEIsR0FBOEIsS0FBSzdDLFdBQUwsQ0FBaUJnRSxjQUFqQixDQUFnQyxjQUFoQyxJQUFrRCxLQUFLaEUsV0FBTCxDQUFpQm1ELFlBQWpCLENBQThCTixTQUFoRixHQUE0RixFQUExSDtBQUNBOUMseUNBQUs0RCxNQUFMLEdBQWMsS0FBSzNELFdBQUwsQ0FBaUIyRCxNQUFqQixJQUEyQixFQUF6QztBQUNBNUQseUNBQUsyRCxhQUFMLEdBQXFCLEtBQUsxRCxXQUFMLENBQWlCMEQsYUFBakIsSUFBa0MsRUFBdkQ7QUFDQTNELHlDQUFLaUQsUUFBTCxHQUFnQixLQUFLaEQsV0FBTCxDQUFpQmdELFFBQWpCLElBQTZCLEVBQTdDO0FBQ0FqRCx5Q0FBSzBELElBQUwsR0FBWSxLQUFLekQsV0FBTCxDQUFpQnlELElBQWpCLElBQXlCLEVBQXJDO0FBQ0ExRCx5Q0FBS21ELFVBQUwsR0FBa0IsS0FBS2xELFdBQUwsQ0FBaUJrRCxVQUFqQixJQUErQixFQUFqRDtBQUNBbkQseUNBQUt5RCxVQUFMLEdBQWtCLEtBQUt4RCxXQUFMLENBQWlCd0QsVUFBakIsSUFBK0IsRUFBakQ7QUFDSDs7dUNBQ21CUyxlQUFLQyxPQUFMLENBQ2hCLHFEQURnQixFQUVoQixNQUZnQixFQUdoQm5FLElBSGdCLEM7OztBQUFoQm9FLHVDOztBQUtKLG9DQUFJQSxRQUFRQyxVQUFSLElBQXNCLEdBQTFCLEVBQStCO0FBQ3ZCaEUsdURBRHVCLEdBQ0QrRCxRQUFRcEUsSUFBUixDQUFhc0UsTUFEWjs7QUFFM0IseUNBQUtsRSxVQUFMLEdBQWtCQyxvQkFBb0JELFVBQXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFLQyxtQkFBTCxFQUF5QmtFLElBQXpCLGdEQUFpQ2xFLG9CQUFvQm1FLEtBQXJEO0FBQ0g7QUFDRCxxQ0FBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVKOzs7OzRDQUNvQjtBQUNoQixpQkFBS3hFLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxpQkFBS0ksbUJBQUwsR0FBMkIsRUFBM0IsRUFDSSxLQUFLSCxVQUFMLEdBQWtCLENBRHRCO0FBRUEsaUJBQUt3RSxpQkFBTDtBQUNBbEUsZUFBR21FLHdCQUFILEdBTGdCLENBS2U7QUFDL0JuRSxlQUFHb0UsbUJBQUgsR0FOZ0IsQ0FNVTtBQUM3Qjs7O3dDQUNlO0FBQ1osZ0JBQUksS0FBS3hFLFVBQUwsR0FBa0IsRUFBbEIsR0FBdUIsS0FBS0YsVUFBaEMsRUFBNEM7QUFDeEMscUJBQUtBLFVBQUwsSUFBbUIsQ0FBbkI7QUFDQSxxQkFBS3dFLGlCQUFMO0FBQ0g7QUFDRCxpQkFBS0QsTUFBTDtBQUNIOzs7aUNBQ1E7QUFDTCxpQkFBS0MsaUJBQUw7QUFDSDs7O2tDQUNTRyxVLEVBQVc7QUFDakIsZ0JBQUdBLFVBQUgsRUFBYztBQUNULHFCQUFLNUUsV0FBTCxHQUFpQjRFLFVBQWpCO0FBQ0o7QUFDRCxpQkFBS3hFLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsaUJBQUtILFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxpQkFBS3dFLGlCQUFMO0FBQ0g7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQWxRd0NJLGVBQUtDLEk7O2tCQUE1QnJGLGMiLCJmaWxlIjoibXlSZWdpc3Rlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnQC91dGlscy9jb2ZpZy9hamF4LmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG15UmVnaXN0ZXJMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JUb3A6ICcjZjRmNGY0JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yQm90dG9tOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmVhbToge30sXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcclxuICAgICAgICAgICAgQ2FzZVJlY29yZExpc3REYXRhczogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0b1NlYXJjaCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vc2VhcmNoL3NlYXJjaF9yZWdpc3RlcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcGVyYXRpb25zKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcGl0aW9uID0gaXRlbS5vcGVyYXRpb25zLm1hcCgoaXRlbSkgPT4gaXRlbS50ZXh0KVxyXG4gICAgICAgICAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdDogb3BpdGlvbiwgLy/mjInpkq7nmoTmloflrZfmlbDnu4TvvIzmlbDnu4Tplb/luqbmnIDlpKfkuLo25LiqLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaXRlbUNvbG9yOiAnIzAwMDAwMCcsIC8v5oyJ6ZKu55qE5paH5a2X6aKc6ImyLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWU9aXRlbS5vcGVyYXRpb25zW3Jlcy50YXBJbmRleF0uY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSW5mbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uL215Y2FzZS9jYXNlRGV0YWlsL2Nhc2VkZXRhaWw/aWQ9JyArIGl0ZW0uaWQgKyAnJmNsaWVudElkPScgKyBpdGVtLmNsaWVudElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdPcmRlckluZm8nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9jb25mbGljdFJldHJpZXZhbC9hdWRpdGVkUmVzdWx0cy9hdWRpdGVkUmVzdWx0cz9pZD0nICsgaXRlbS5vcmRlckl0ZW1JZCArICcmY2FzZUlkPScgKyBpdGVtLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRpdGxlOiAn5q2k5Yqf6IO95pqC5pyq5byA5pS+77yBJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbWFzazogZmFsc2UsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgc3VjY2VzczogcmVzID0+IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdFZGl0Q2FzZUFwcGx5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnByb2Nlc3NTdGF0dXM9PSdOSycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2Nhc2VDaGFyZ2VBbmRDb250cmFjdC9sYXd5ZXJDaGFyZ2VJbmZvP2lkPScgKyBpdGVtLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaXRlbUxpc3Q6Wyfnm7jlhozmiJbnm7jmnLrmi43nhacnLCfmnKzlnLDmlofku7YnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN1Y2Nlc3MgOiByZSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZihyZS50YXBJbmRleCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3MgOiByZXMgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlKHRlbXBGaWxlUGF0aHNbMF0saXRlbS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgd3guY2hvb3NlTWVzc2FnZUZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzIDogcmVzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZSh0ZW1wRmlsZVBhdGhzWzBdLGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZhaWwgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsIC8v5o+Q56S655qE5qCH6aKYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmraTlip/og73pnIDopoHmiZPlvIBBUFDmiJbogIXnmbvlvZXnvZHpobXniYjov5vooYzmk43kvZwnLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLCAvL+aYr+WQpuaYvuekuuWPlua2iOaMiemSrixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfvvIzpu5jorqTkuLrlj5bmtojvvIzmnIDlpJogNCDkuKrlrZfnrKYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjMDAwMDAwJywgLy/lj5bmtojmjInpkq7nmoTmloflrZfpopzoibIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponLCAvL+ehruWumuaMiemSrueahOaWh+Wtl++8jOm7mOiupOS4uuWPlua2iO+8jOacgOWkmiA0IOS4quWtl+espixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjNWQ3M2ZhJywgLy/noa7lrprmjInpkq7nmoTmloflrZfpopzoibIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL3JlZ2lzdGVyP2lkPScgKyBpdGVtLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvUmVnaXN0RGV0YWlsKGlkLCBjbGllbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbXljYXNlL2Nhc2VEZXRhaWwvY2FzZWRldGFpbD9pZD0nICsgaWQgKyAnJmNsaWVudElkPScgKyBjbGllbnRJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvdWNoRW5kKCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vbXlSZWdpc3Rlci9yZWdpc3RlcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHdhdGNoID0ge307XHJcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcclxuICAgIC8vICAgLy8g5LiK5Lyg5ZCI5ZCM6ZmE5Lu2XHJcbiAgICAvLyAgICAgYXN5bmMgdXBsb2FkRmlsZShmaWxlLGNhc2VpZCl7XHJcbiAgICAvLyAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAn5LiK5Lyg5LitJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAvLyAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgIC8vICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgIGxldCByZXNEYXRhID0gYXdhaXQgYWpheC51cGxvYWRGaWxlKCcvYXBpL3NlcnZpY2VzL3dlYi9kb2N1bWVudC91cGxvYWRDYXNlQ29udHJhY3QnLFxyXG4gICAgLy8gICAgICAgICAgZmlsZSxcclxuICAgIC8vICAgICAgICAgIHtjYXNlaWR9LFxyXG4gICAgLy8gICAgICAgICAgJ2ZpbGUnXHJcbiAgICAvLyAgICAgICAgICApXHJcbiAgICAvLyAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAvLyAgICAgICAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XHJcbiAgICAvLyAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgIC8vICAgICAgICAgICAgIH0pIFxyXG4gICAgLy8gICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgdGl0bGU6cmVzdWx0LmVycm9yLm1lc3NhZ2UgLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxyXG4gICAgLy8gICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9IFxyXG4gICAgICAgIGFzeW5jIEdldENhc2VSZWNvcmRMaXN0KCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHREYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhcnREYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZERhdGU6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBDYXNlSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeTogXCJcIixcclxuICAgICAgICAgICAgICAgIENsaWVudElkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgQ2xpZW50TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIENyZWF0aW9uVGltZToge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0RGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFbmREYXRlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBLZXlXb3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgTGF3eWVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgTGF3eWVyTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIExhd3llclJvbGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc1N0YXR1czogXCJcIixcclxuICAgICAgICAgICAgICAgIFN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMucGFnZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgc29ydGluZzogXCJcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5xdWVyeVN0cmVhbSkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLktleVdvcmQgPSB0aGlzLnF1ZXJ5U3RyZWFtLktleVdvcmQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBkYXRhLkFjY2VwdERhdGUuU3RhcnREYXRlID0gdGhpcy5xdWVyeVN0cmVhbS5oYXNPd25Qcm9wZXJ0eSgnQWNjZXB0RGF0ZScpID8gdGhpcy5xdWVyeVN0cmVhbS5BY2NlcHREYXRlLlN0YXJ0RGF0ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5BY2NlcHREYXRlLkVuZERhdGUgPSB0aGlzLnF1ZXJ5U3RyZWFtLmhhc093blByb3BlcnR5KCdBY2NlcHREYXRlJykgPyB0aGlzLnF1ZXJ5U3RyZWFtLkFjY2VwdERhdGUuRW5kRGF0ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5DcmVhdGlvblRpbWUuRW5kRGF0ZSA9IHRoaXMucXVlcnlTdHJlYW0uaGFzT3duUHJvcGVydHkoJ0NyZWF0aW9uVGltZScpID8gdGhpcy5xdWVyeVN0cmVhbS5DcmVhdGlvblRpbWUuRW5kRGF0ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5DcmVhdGlvblRpbWUuU3RhcnREYXRlID0gdGhpcy5xdWVyeVN0cmVhbS5oYXNPd25Qcm9wZXJ0eSgnQ3JlYXRpb25UaW1lJykgPyB0aGlzLnF1ZXJ5U3RyZWFtLkNyZWF0aW9uVGltZS5TdGFydERhdGUgOiAnJztcclxuICAgICAgICAgICAgICAgIGRhdGEuU3RhdHVzID0gdGhpcy5xdWVyeVN0cmVhbS5TdGF0dXMgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBkYXRhLlByb2Nlc3NTdGF0dXMgPSB0aGlzLnF1ZXJ5U3RyZWFtLlByb2Nlc3NTdGF0dXMgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBkYXRhLkNhdGVnb3J5ID0gdGhpcy5xdWVyeVN0cmVhbS5DYXRlZ29yeSB8fCAnJztcclxuICAgICAgICAgICAgICAgIGRhdGEuTmFtZSA9IHRoaXMucXVlcnlTdHJlYW0uTmFtZSB8fCAnJztcclxuICAgICAgICAgICAgICAgIGRhdGEuQ2xpZW50TmFtZSA9IHRoaXMucXVlcnlTdHJlYW0uQ2xpZW50TmFtZSB8fCAnJztcclxuICAgICAgICAgICAgICAgIGRhdGEuTGF3eWVyUm9sZSA9IHRoaXMucXVlcnlTdHJlYW0uTGF3eWVyUm9sZSB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcclxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlQXBwbGljYXRpb24vR2V0Q2FzZVJlY29yZExpc3QnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmIChyZXNEYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgQ2FzZVJlY29yZExpc3REYXRhcyA9IHJlc0RhdGEuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSBDYXNlUmVjb3JkTGlzdERhdGFzLnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBpbmRleCBpbiBDYXNlUmVjb3JkTGlzdERhdGFzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKENhc2VSZWNvcmRMaXN0RGF0YXMuaXRlbXNbaW5kZXhdLnByb2Nlc3NTdGF0dXMgPT0gJ05JJyB8fCBDYXNlUmVjb3JkTGlzdERhdGFzLml0ZW1zW2luZGV4XS5wcm9jZXNzU3RhdHVzID09ICdOSycpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgQ2FzZVJlY29yZExpc3REYXRhcy5pdGVtc1tpbmRleF0ub3BlcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRleHQ6ICfnvJbovpEnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lOidBZHVpdCdcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNhc2VSZWNvcmRMaXN0RGF0YXMucHVzaCguLi5DYXNlUmVjb3JkTGlzdERhdGFzLml0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkuIvmi4nliLfmlrBcclxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLkNhc2VSZWNvcmRMaXN0RGF0YXMgPSBbXSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZVJlY29yZExpc3QoKTtcclxuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7IC8v5a6M5oiQ5YGc5q2i5Yqg6L29XHJcbiAgICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgLy/lgZzmraLkuIvmi4nliLfmlrBcclxuICAgICAgICB9XHJcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCAvIDEwID4gdGhpcy5wYWdlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgKz0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2FzZVJlY29yZExpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0Q2FzZVJlY29yZExpc3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzUmVmcmVzaChzZWFyY2hEYXRhKXtcclxuICAgICAgICAgICAgaWYoc2VhcmNoRGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeVN0cmVhbT1zZWFyY2hEYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuQ2FzZVJlY29yZExpc3REYXRhcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLkdldENhc2VSZWNvcmRMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG9uU2hvdygpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgLy8gICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIC8vICAgICBpZiAocHJldlBhZ2UuZGF0YS5yZWZyZXNoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnF1ZXJ5U3RyZWFtID0gcHJldlBhZ2UuZGF0YS5xdWVyeVN0cmVhbTtcclxuICAgICAgICAvLyAgICAgICAgIHByZXZQYWdlLmRhdGEucmVmcmVzaCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5DYXNlUmVjb3JkTGlzdERhdGFzID0gW107XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HZXRDYXNlUmVjb3JkTGlzdCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfTtcclxuICAgIH1cclxuIl19