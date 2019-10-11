'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _navbar = require('./../../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _api = require('./../../../../../utils/cofig/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var taskdetail = function (_wepy$page) {
    _inherits(taskdetail, _wepy$page);

    function taskdetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, taskdetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = taskdetail.__proto__ || Object.getPrototypeOf(taskdetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            navbar: _navbar2.default
        }, _this.data = {
            // Refresh:false,
            currentTab: 0,
            navbars: ['任务详情', '讨论'],
            taskData: {},
            tag: [],
            endTime: '',
            fileIcon: [],
            fileColor: [],
            avatar: [],
            id: 0,
            isChecked: [],
            // 讨论数据
            userId: 0, //用户ID
            userImage: '', //用户头像
            // parentIndex: 0,
            // parentSIndex: 0,
            showIsAccept: false,
            CommentsDatas: [],
            fileInfo: [], //文件信息
            pageSize: 10,
            pageNumber: 1,
            totalCount: 0,
            msgData: '', //文字信息
            scrollTop: 0,
            sendShow: false, //控制发送文件或图片的底部弹框开关
            imageData: [],
            showVideo: false,
            videoPath: '',
            //拒绝参与弹窗
            refuseRemark: '', //拒绝原因
            participateView: false,
            warning: false,
            //添加子任务
            childName: '',
            childView: false,
            TextCount: 0
        }, _this.methods = {
            // 删除子任务
            longpress: function longpress(index) {
                var _this2 = this;

                if (this.taskData.isCompleted !== 'Y' && this.taskData.isAccept == 'Y') {
                    wx.showModal({
                        title: '是否确认删除子任务',
                        content: '',
                        showCancel: true,
                        cancelText: '取消',
                        cancelColor: '#000000',
                        confirmText: '确定',
                        confirmColor: '#5d73fa',
                        success: function success(res) {
                            if (res.confirm) {
                                _this2.DeleteSubTask(index);
                            }
                        }
                    });
                }
            },

            //添加提交子任务名称
            submitChildName: function submitChildName() {
                if (this.childName.length !== 0) {
                    this.CreateOrUpdateSubTask();
                } else {
                    wx.showToast({
                        title: '子任务名称不能为空！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                }
            },

            //子任务输入框数据
            childNameInput: function childNameInput(e) {
                this.childName = e.detail.value;
                this.$apply();
            },

            //显示添加子任务
            addChild: function addChild() {
                // if(this.taskData.isCompleted=='N'){
                this.childView = true;
                this.$apply();
                // }
            },

            //关闭子任务
            childCancel: function childCancel() {
                this.childName = '';
                this.childView = false;
                this.$apply();
            },

            //编辑操作
            operation: function operation() {
                var _this3 = this;

                wx.showActionSheet({
                    itemList: ['完成任务', '删除任务'],
                    itemColor: '#5d73fa',
                    success: function success(res) {
                        if (res.tapIndex == 0) {
                            var parentChecked = _this3.isChecked.every(function (i) {
                                return i === true;
                            });
                            console.log(parentChecked);
                            if (parentChecked) {
                                _this3.CompletedTaskParticipant('Y');
                            } else {
                                wx.showToast({
                                    title: '检查子任务是否全部完成！',
                                    icon: 'none',
                                    duration: 1500,
                                    mask: false
                                });
                            }
                        }
                        if (res.tapIndex == 1) {
                            wx.showModal({
                                title: '是否确认删除该任务！',
                                content: '',
                                showCancel: true,
                                cancelText: '取消',
                                cancelColor: '#000000',
                                confirmText: '确定',
                                confirmColor: '#5d73fa',
                                success: function success(res) {
                                    if (res.confirm) {
                                        _this3.DeleteTask();
                                    }
                                }
                            });
                        }
                    }
                });
            },

            //拒绝参与
            //拒绝原因
            bindinput: function bindinput(e) {
                this.refuseRemark = e.detail.value;
                this.warning = false;
                this.$apply();
            },
            bindblur: function bindblur() {
                if (!this.refuseRemark) {
                    this.warning = true;
                }
            },

            // 拒绝确定
            comfirmParticipation: function comfirmParticipation() {
                if (this.refuseRemark) {
                    this.ConfirmTaskParticipant('R');
                } else {
                    this.warning = true;
                }
            },

            //隐藏
            cancelView: function cancelView() {
                this.participateView = false;
            },

            //显示
            noAccept: function noAccept() {
                this.participateView = true;
            },

            //参与任务
            accept: function accept() {
                this.ConfirmTaskParticipant('Y');
            },

            // 关闭视频
            colseVideo: function colseVideo(e) {
                console.log(e);
                if (e.target.id = 'videoView') {
                    this.showVideo = false;
                } else {
                    return;
                }
            },

            // 发送视频
            chooseVideo: function chooseVideo() {
                var _this4 = this;

                wx.chooseVideo({
                    sourceType: ['album', 'camera'],
                    maxDuration: 60,
                    camera: 'back',
                    success: function success(res) {
                        console.log(res);
                        var tempFilePath = res.tempFilePath;
                        var thumbTempFilePath = res.thumbTempFilePath;
                        var time = new Date();
                        var creationTime = _api2.default.formatTime(time);
                        _this4.uploadFile('video', tempFilePath, creationTime, thumbTempFilePath);
                        _this4.getScroll();
                    }
                });
            },

            // 发送图片
            chooseImage: function chooseImage() {
                var _this5 = this;

                wx.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success: function success(res) {
                        // tempFilePath可以作为img标签的src属性显示图片
                        console.log(res);
                        var tempFilePaths = res.tempFilePaths[0];
                        var time = new Date();
                        var creationTime = _api2.default.formatTime(time);
                        _this5.uploadFile('image', tempFilePaths, creationTime);
                        _this5.getScroll();
                    }
                });
            },
            bindfocus: function bindfocus(e) {
                // this.sendShow=false;
                this.getScroll();
            },
            showSend: function showSend() {
                this.getScroll();
                this.sendShow = !this.sendShow;
            },

            // 发送信息
            sendMsg: function sendMsg(e) {
                //  this.CommentsDatas=[];
                var msg = e.detail.value;
                this.getComment(msg);
                // var pageNumber= this.pageNumber
                this.setData({
                    msgData: ''
                });
                var time = new Date();
                var creationTime = _api2.default.formatTime(time);
                console.log(creationTime);
                var msgInfo = {
                    message: msg,
                    creatorUserId: this.userId,
                    avatar: this.userImage,
                    creationTime: creationTime
                };
                this.fileInfo.unshift(msgInfo);
                this.getScroll();
                this.$apply();
            },

            //加载更多讨论消息
            loadMore: function loadMore() {
                var that = this;
                that.pageNumber += 1;
                that.GetComments();
            },

            //   预览
            preView: function preView(fileId, fileClass, fileSize, filePath) {
                var _this6 = this;

                console.log(fileId, fileClass, fileSize, filePath);
                wx.showLoading({
                    title: '加载中，请稍等！',
                    mask: true
                });
                if (fileId == null) {
                    wx.previewImage({
                        current: filePath, // 当前显示图片的http链接
                        urls: [filePath] // 需要预览的图片http链接列表
                    });
                } else {
                    var http = '/api/services/web/taskAttachment/GetDocumentFile?id=' + fileId;
                    switch (fileClass) {
                        case '.jpg':
                            _ajax2.default.preView(http, fileClass);
                            break;
                        case '.png':
                            _ajax2.default.preView(http, fileClass);
                            break;
                        case '.xls':
                            _ajax2.default.preView(http, fileClass);
                            break;
                        case '.xlsx':
                            _ajax2.default.preView(http, fileClass);
                            break;
                        case '.docx':
                            _ajax2.default.preView(http, fileClass);
                            break;
                        case '.doc':
                            _ajax2.default.preView(http, fileClass);
                            break;
                        case '.pdf':
                            _ajax2.default.preView(http, fileClass);
                            break;
                        case '.mp4':
                            this.showVideo = true;
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
                                            // console.log(res);
                                            _this6.videoPath = res.tempFilePath;
                                            _this6.$apply();
                                        },
                                        fail: function fail(err) {
                                            console.log(err);
                                        },
                                        complete: function complete() {
                                            wx.hideLoading();
                                        }
                                    });
                                    downloadTask.onProgressUpdate(function (r) {
                                        console.log(r);
                                        console.log('下载进度', r.progress);
                                        console.log('已经下载的数据长度', r.totalBytesWritten);
                                        console.log('预期需要下载的数据总长度', r.totalBytesExpectedToWrite);
                                    });
                                }
                            });
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
                }
            },

            //点击选中完成任务
            isCompleted: function isCompleted(item, index, isChecked) {
                if (this.taskData.isCompleted !== 'Y' && this.taskData.isAccept == 'Y') {
                    this.isChecked[index] = !this.isChecked[index];
                    var data = {
                        formVisible: false,
                        parentTaskId: this.taskData.id,
                        projectId: this.taskData.projectId,
                        stageId: this.taskData.stageId,
                        tempText: ''
                    };
                    data.completedTime = item.completedTime || '';
                    data.id = item.id || '';
                    data.isCompleted = isChecked ? 'N' : 'Y';
                    data.sort = item.sort || '';
                    data.title = item.title || '';
                    this.changeChildStatus(data, isChecked);
                    this.$apply();
                }
            }
        }, _this.watch = {
            currentTab: function currentTab(newCurrent, oldCurrent) {
                if (newCurrent !== oldCurrent) {
                    if (newCurrent == 0) {
                        if (wx.pageScrollTo) {
                            wx.pageScrollTo({
                                scrollTop: 0,
                                duration: 0
                            });
                        }
                        this.sendShow = false;
                    }
                    if (newCurrent == 1) {
                        this.getScroll();
                        this.$apply();
                    }
                }
            },
            childName: function childName(value) {
                console.log(value);
                this.TextCount = value.length;
                this.$apply();
            },
            isChecked: function isChecked(newData, oldData) {
                if (newData !== oldData) {
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    console.log(prevPage);
                    if (prevPage) {
                        prevPage.isRefresh();
                    }
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(taskdetail, [{
        key: 'changeChildStatus',

        // 完成任务上传数据
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, isChecked) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    duration: 200,
                                    mask: true,
                                    success: function success() {}
                                });
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/CreateOrUpdateSubTask', 'post', data);

                            case 3:
                                res = _context.sent;

                                if (res.statusCode == 200) {
                                    if (isChecked) {
                                        wx.showToast({
                                            title: '已完成',
                                            icon: 'none',
                                            duration: 500,
                                            mask: false
                                        });
                                    } else {
                                        wx.showToast({
                                            title: '已取消',
                                            icon: 'none',
                                            duration: 500,
                                            mask: false
                                        });
                                    }
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function changeChildStatus(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return changeChildStatus;
        }()
        // 设置scrollTop

    }, {
        key: 'getScroll',
        value: function getScroll() {
            var that = this;
            //   if(that.scrollTop )
            wx.createSelectorQuery().select('.winHeight').boundingClientRect(function (rect) {
                // console.log(parseInt(parseInt(rect.bottom)*that.pageNumber*10))
                that.scrollTop = parseInt(parseInt(rect.bottom) * that.pageNumber * 10);
                wx.pageScrollTo({
                    scrollTop: that.scrollTop,
                    duration: 0
                });
            }).exec();
        }
        // 获得任务详情

    }, {
        key: 'getTask',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var id, _ref4, data, taskData, millTime, index, iconClass, http, avatarData;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    mask: false
                                });
                                id = {
                                    id: this.id
                                };
                                _context2.next = 4;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/GetTask', 'post', id);

                            case 4:
                                _ref4 = _context2.sent;
                                data = _ref4.data;
                                taskData = data;
                                //是否显示编辑图标

                                if (taskData.result.isAccept == 'N') {
                                    this.showIsAccept = true;
                                } else {
                                    this.showIsAccept = false;
                                }
                                // 标签
                                // console.log(taskData.result.tag);
                                if (taskData.result.tag !== '' && taskData.result.tag !== null) {
                                    this.tag = taskData.result.tag.split(',');
                                } else {
                                    this.tag[0] = '标签未知';
                                }
                                if (taskData.result.startTime !== null && taskData.result.endTime !== null) {
                                    millTime = new Date(taskData.result.endTime).getTime() - 8 * 60 * 60 * 1000;

                                    taskData.result.endTime = new Date(millTime);
                                    taskData.result.endTime = _api2.default.formatTimeSymbol(taskData.result.endTime, '-');
                                    //任务时长
                                    taskData.result.taskDuration = this.getInervalHour(taskData.result.startTime, taskData.result.endTime);
                                }
                                if (taskData.result.estimate) {
                                    taskData.result.estimate = taskData.result.estimate.toFixed(1);
                                }
                                //子任务

                                if (!(taskData.result.checkItems.length !== 0)) {
                                    _context2.next = 25;
                                    break;
                                }

                                _context2.t0 = regeneratorRuntime.keys(taskData.result.checkItems);

                            case 13:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 25;
                                    break;
                                }

                                index = _context2.t1.value;
                                _context2.t2 = taskData.result.checkItems[index].isCompleted;
                                _context2.next = _context2.t2 === 'Y' ? 18 : _context2.t2 === 'N' ? 20 : 22;
                                break;

                            case 18:
                                this.isChecked[index] = true;
                                return _context2.abrupt('break', 23);

                            case 20:
                                this.isChecked[index] = false;
                                return _context2.abrupt('break', 23);

                            case 22:
                                return _context2.abrupt('break', 23);

                            case 23:
                                _context2.next = 13;
                                break;

                            case 25:
                                if (!(taskData.result.attachments !== null)) {
                                    _context2.next = 66;
                                    break;
                                }

                                _context2.t3 = regeneratorRuntime.keys(taskData.result.attachments);

                            case 27:
                                if ((_context2.t4 = _context2.t3()).done) {
                                    _context2.next = 66;
                                    break;
                                }

                                index = _context2.t4.value;

                                taskData.result.attachments[index].size = (taskData.result.attachments[index].size / 1024).toFixed(0) > 1024 ? (taskData.result.attachments[index].size / 1024 / 1024).toFixed(0) + 'Mb' : (taskData.result.attachments[index].size / 1024).toFixed(0) + 'Kb';
                                iconClass = taskData.result.attachments[index].extension;
                                _context2.t5 = iconClass;
                                _context2.next = _context2.t5 === '.pdf' ? 34 : _context2.t5 === '.png' ? 37 : _context2.t5 === '.xls' ? 40 : _context2.t5 === '.xlsx' ? 43 : _context2.t5 === '.docx' ? 46 : _context2.t5 === '.doc' ? 49 : _context2.t5 === '.jpg' ? 52 : _context2.t5 === '.jpeg' ? 55 : _context2.t5 === 'folder' ? 58 : 61;
                                break;

                            case 34:
                                this.fileIcon.push('icon-pdfpng1');
                                this.fileColor.push('#e20000');
                                return _context2.abrupt('break', 64);

                            case 37:
                                this.fileIcon.push('icon-pdfpng1');
                                this.fileColor.push('#e20000');
                                return _context2.abrupt('break', 64);

                            case 40:
                                this.fileIcon.push('icon-exl1');
                                this.fileColor.push('#069400');
                                return _context2.abrupt('break', 64);

                            case 43:
                                this.fileIcon.push('icon-exl1');
                                this.fileColor.push('#069400');
                                return _context2.abrupt('break', 64);

                            case 46:
                                this.fileIcon.push('icon-wold1');
                                this.fileColor.push('#009dff');
                                return _context2.abrupt('break', 64);

                            case 49:
                                this.fileIcon.push('icon-wold1');
                                this.fileColor.push('#009dff');
                                return _context2.abrupt('break', 64);

                            case 52:
                                this.fileIcon.push('icon-jpggeshi');
                                this.fileColor.push('#ff9900');
                                return _context2.abrupt('break', 64);

                            case 55:
                                this.fileIcon.push('icon-jpggeshi');
                                this.fileColor.push('#ff9900');
                                return _context2.abrupt('break', 64);

                            case 58:
                                this.fileIcon.push('icon-wendang');
                                this.fileColor.push('#ff9900');
                                return _context2.abrupt('break', 64);

                            case 61:
                                this.fileIcon.push('icon-weizhiwenjiangeshi');
                                this.fileColor.push('#7a7a7a');
                                return _context2.abrupt('break', 64);

                            case 64:
                                _context2.next = 27;
                                break;

                            case 66:
                                if (!(taskData.result.participants !== '' && taskData.result.participants !== null)) {
                                    _context2.next = 78;
                                    break;
                                }

                                _context2.t6 = regeneratorRuntime.keys(taskData.result.participants);

                            case 68:
                                if ((_context2.t7 = _context2.t6()).done) {
                                    _context2.next = 78;
                                    break;
                                }

                                index = _context2.t7.value;
                                id = taskData.result.participants[index].employeeId;
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + id;
                                _context2.next = 74;
                                return _ajax2.default.getAavatar(http);

                            case 74:
                                avatarData = _context2.sent;

                                this.avatar[index] = avatarData;
                                _context2.next = 68;
                                break;

                            case 78:
                                this.taskData = taskData.result;
                                this.$apply();
                                // console.log(taskData.result.tag.split(','))

                            case 80:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getTask() {
                return _ref3.apply(this, arguments);
            }

            return getTask;
        }()
        //获得讨论内容

    }, {
        key: 'GetComments',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var data, CommentsDatas, arr, index, obj, file, extension, http, image, avatarData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    mask: false
                                });
                                // if (wx.pageScrollTo) {
                                // }
                                data = {
                                    TaskId: this.id,
                                    pageNumber: this.pageNumber,
                                    pageSize: this.pageSize
                                };
                                _context3.next = 4;
                                return _ajax2.default.getData('/api/services/web/taskComment/GetComments', 'post', data);

                            case 4:
                                CommentsDatas = _context3.sent;

                                this.CommentsDatas = CommentsDatas.data.result.item;
                                this.totalCount = CommentsDatas.data.result.totalCount;
                                arr = [];
                                _context3.t0 = regeneratorRuntime.keys(CommentsDatas.data.result.items);

                            case 9:
                                if ((_context3.t1 = _context3.t0()).done) {
                                    _context3.next = 79;
                                    break;
                                }

                                index = _context3.t1.value;
                                obj = {};

                                arr[index] = obj;

                                if (!(CommentsDatas.data.result.items[index].file !== null)) {
                                    _context3.next = 64;
                                    break;
                                }

                                file = CommentsDatas.data.result.items[index].file;

                                obj['size'] = file.size;
                                obj['extension'] = file.extension.toLowerCase();
                                obj['name'] = file.name;
                                obj['id'] = file.id;
                                obj['message'] = null;
                                extension = file.extension.toLowerCase();
                                _context3.t2 = extension;
                                _context3.next = _context3.t2 === '.jpg' ? 24 : _context3.t2 === '.png' ? 33 : _context3.t2 === '.xls' ? 41 : _context3.t2 === '.xlsx' ? 44 : _context3.t2 === '.docx' ? 47 : _context3.t2 === '.doc' ? 50 : _context3.t2 === '.pdf' ? 53 : _context3.t2 === '.mp4' ? 56 : 59;
                                break;

                            case 24:
                                obj['icon'] = '';
                                obj['color'] = '';
                                http = '/api/services/web/taskAttachment/GetDocumentFile?id=' + file.id;
                                _context3.next = 29;
                                return _ajax2.default.getAavatar(http);

                            case 29:
                                image = _context3.sent;

                                console.log(image);
                                obj['image'] = image;
                                return _context3.abrupt('break', 62);

                            case 33:
                                obj['icon'] = '';
                                obj['color'] = '';
                                http = '/api/services/web/taskAttachment/GetDocumentFile?id=' + file.id;
                                _context3.next = 38;
                                return _ajax2.default.getAavatar(http);

                            case 38:
                                image = _context3.sent;

                                obj['image'] = image;
                                return _context3.abrupt('break', 62);

                            case 41:
                                obj['icon'] = 'icon-exl1';
                                obj['color'] = '#069400';
                                return _context3.abrupt('break', 62);

                            case 44:
                                obj['icon'] = 'icon-exl1';
                                obj['color'] = '#069400';
                                return _context3.abrupt('break', 62);

                            case 47:
                                obj['icon'] = 'icon-wold1';
                                obj['color'] = '#009dff';
                                return _context3.abrupt('break', 62);

                            case 50:
                                obj['icon'] = 'icon-wold1';
                                obj['color'] = '#009dff';
                                return _context3.abrupt('break', 62);

                            case 53:
                                obj['icon'] = 'icon-pdfpng1';
                                obj['color'] = '#e20000';
                                return _context3.abrupt('break', 62);

                            case 56:
                                obj['icon'] = 'icon-shipinwenjian';
                                obj['color'] = '#fc5959';
                                return _context3.abrupt('break', 62);

                            case 59:
                                obj['icon'] = 'icon-weizhiwenjiangeshi';
                                obj['color'] = '#7a7a7a';
                                return _context3.abrupt('break', 62);

                            case 62:
                                _context3.next = 65;
                                break;

                            case 64:
                                if (CommentsDatas.result.items[index].message !== null) {
                                    obj['message'] = CommentsDatas.result.items[index].message;
                                }

                            case 65:
                                if (!(CommentsDatas.result.items[index].creatorUserId !== this.userId)) {
                                    _context3.next = 74;
                                    break;
                                }

                                obj['creatorUserId'] = CommentsDatas.result.items[index].creatorUserId;
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + CommentsDatas.result.items[index].creatorUserId;
                                _context3.next = 70;
                                return _ajax2.default.getAavatar(http);

                            case 70:
                                avatarData = _context3.sent;

                                obj['avatar'] = avatarData;
                                _context3.next = 76;
                                break;

                            case 74:
                                obj['creatorUserId'] = this.userId;
                                obj['avatar'] = this.userImage;

                            case 76:
                                // 日期
                                // if (this.CommentsDatas[index].creationTime !== '' && this.CommentsDatas[index].creationTime !== null) {
                                obj['creationTime'] = CommentsDatas.result.items[index].creationTime.replace(/[a-zA-Z]/g, ' ').split('.')[0];
                                // }
                                _context3.next = 9;
                                break;

                            case 79:
                                if (this.pageNumber > 1) {
                                    // this.CommentsDatas = this.CommentsDatas.concat(CommentsDatas.result.items)
                                    this.fileInfo = this.fileInfo.concat(arr);
                                } else {
                                    // this.CommentsDatas = CommentsDatas.result.items;
                                    this.fileInfo = arr;
                                }
                                this.$apply();

                            case 81:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetComments() {
                return _ref5.apply(this, arguments);
            }

            return GetComments;
        }()
        // 发送文本信息

    }, {
        key: 'getComment',
        value: function getComment(msg) {
            var data = {
                comment: {
                    taskId: this.id,
                    message: msg
                }
            };
            wx.showLoading({
                title: '发送中',
                mask: true
            });
            _ajax2.default.getData('/api/services/web/taskComment/CreateComment', 'post', data);
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2]; //上一个页面
            if (prevPage) {
                prevPage.isRefresh();
            }
        }
        //上传图片

    }, {
        key: 'uploadFile',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(choose, tempFilePaths, creationTime, cover) {
                var data, infoData, imageInfoData, extension, imageInfo, videoInfoData, vidieoInfo, pages, prevPage;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                // var creationTimes =
                                data = {
                                    chunk: 0,
                                    chunks: 1,
                                    id: this.id,
                                    file: '(binary)'
                                };
                                _context4.next = 3;
                                return _ajax2.default.uploadFile('/api/services/web/taskComment/uploadAttachment', tempFilePaths, data);

                            case 3:
                                infoData = _context4.sent;

                                console.log(infoData);
                                if (choose == 'image') {
                                    imageInfoData = JSON.parse(infoData.data).result;

                                    console.log(imageInfoData);
                                    if (infoData.statusCode == 200) {
                                        extension = imageInfoData.extension.toLowerCase();
                                        imageInfo = {
                                            size: imageInfoData.size,
                                            extension: extension,
                                            name: imageInfoData.name,
                                            id: imageInfoData.id,
                                            message: null,
                                            image: tempFilePaths,
                                            creatorUserId: this.userId,
                                            avatar: this.userImage,
                                            creationTime: creationTime
                                        };

                                        this.fileInfo.unshift(imageInfo);
                                        this.getScroll();
                                        this.$apply();
                                    } else {
                                        wx.showToast({
                                            title: '服务器异常',
                                            icon: 'none',
                                            duration: 1500,
                                            mask: false
                                        });
                                    }
                                } else if (choose == 'video') {
                                    videoInfoData = JSON.parse(infoData.data).result;

                                    console.log(videoInfoData);
                                    if (infoData.statusCode == 200) {
                                        extension = videoInfoData.extension.toLowerCase();
                                        vidieoInfo = {
                                            size: videoInfoData.size,
                                            extension: extension,
                                            name: videoInfoData.name,
                                            id: videoInfoData.id,
                                            message: null,
                                            image: cover,
                                            creatorUserId: this.userId,
                                            avatar: this.userImage,
                                            creationTime: creationTime,
                                            icon: 'icon-shipinwenjian',
                                            color: '#fc5959'
                                        };

                                        this.fileInfo.unshift(vidieoInfo);
                                        this.getScroll();
                                        this.$apply();
                                    } else {
                                        wx.showToast({
                                            title: '服务器异常',
                                            icon: 'none',
                                            duration: 1500,
                                            mask: false
                                        });
                                    }
                                }
                                if (infoData.statusCode == 200) {
                                    pages = getCurrentPages();
                                    prevPage = pages[pages.length - 2]; //上一个页面

                                    if (prevPage) {
                                        prevPage.isRefresh();
                                    }
                                }

                            case 7:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function uploadFile(_x3, _x4, _x5, _x6) {
                return _ref6.apply(this, arguments);
            }

            return uploadFile;
        }()
        //是否参与

    }, {
        key: 'ConfirmTaskParticipant',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(isAccept) {
                var data, resData;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    mask: true
                                });
                                data = {
                                    projectId: this.taskData.projectId,
                                    stageId: this.taskData.stageId,
                                    taskId: this.taskData.id,
                                    isAccept: isAccept,
                                    remark: this.refuseRemark
                                };
                                _context5.next = 4;
                                return _ajax2.default.getData('/api/services/web/taskParticipant/ConfirmTaskParticipant', 'post', data);

                            case 4:
                                resData = _context5.sent;

                                console.log(resData);
                                if (resData.statusCode == 200) {
                                    this.participateView = false;
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                } else {
                                    wx.showToast({
                                        title: '提交失败',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function ConfirmTaskParticipant(_x7) {
                return _ref7.apply(this, arguments);
            }

            return ConfirmTaskParticipant;
        }()
        //添加子任务

    }, {
        key: 'CreateOrUpdateSubTask',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var id, data, resData;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    mask: true
                                });

                                if (!(this.taskData.isAccept == 'Y')) {
                                    _context6.next = 8;
                                    break;
                                }

                                id = 'temp_' + this.taskData.checkItems.length;
                                data = {
                                    id: id,
                                    isCompleted: "N",
                                    parentTaskId: this.taskData.id,
                                    projectId: this.taskData.projectId,
                                    sort: this.taskData.checkItems.length,
                                    stageId: this.taskData.stageId,
                                    title: this.childName
                                };
                                _context6.next = 6;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/CreateOrUpdateSubTask', 'post', data);

                            case 6:
                                resData = _context6.sent;

                                if (resData.statusCode == 200) {
                                    this.childName = '';
                                    this.childView = false;
                                    this.getTask();
                                } else {
                                    wx.showToast({
                                        title: '添加失败！',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 8:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function CreateOrUpdateSubTask() {
                return _ref8.apply(this, arguments);
            }

            return CreateOrUpdateSubTask;
        }()
        //删除子任务

    }, {
        key: 'DeleteSubTask',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(index) {
                var data, resData, pages, prevPage;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    mask: true
                                });

                                if (!(this.taskData.isAccept == 'Y')) {
                                    _context7.next = 7;
                                    break;
                                }

                                data = {
                                    id: this.taskData.checkItems[index].id
                                };
                                _context7.next = 5;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/DeleteSubTask', 'post', data);

                            case 5:
                                resData = _context7.sent;

                                if (resData.statusCode == 200) {
                                    pages = getCurrentPages();
                                    prevPage = pages[pages.length - 2]; //上一个页面

                                    if (prevPage) {
                                        prevPage.isRefresh();
                                    }
                                    this.getTask();
                                } else {
                                    wx.showToast({
                                        title: '删除失败！',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 7:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function DeleteSubTask(_x8) {
                return _ref9.apply(this, arguments);
            }

            return DeleteSubTask;
        }()
        //完成父级页面任务

    }, {
        key: 'CompletedTaskParticipant',
        value: function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(isCompleted) {
                var date, data, res;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    mask: true,
                                    success: function success() {
                                        var pages = getCurrentPages();
                                        var prevPage = pages[pages.length - 2]; //上一个页面
                                        console.log(prevPage);
                                        if (prevPage) {
                                            prevPage.isRefresh();
                                            wx.navigateBack({
                                                delta: 1
                                            });
                                        }
                                    }
                                });
                                date = new Date();
                                data = {
                                    isMark: "Y",
                                    isParticipant: "Y",
                                    isRemind: "Y",
                                    endTime: date,
                                    id: this.taskData.id,
                                    isCompleted: isCompleted,
                                    projectId: this.taskData.projectId
                                };
                                _context8.next = 5;
                                return _ajax2.default.getData('/api/services/web/taskParticipant/CompletedTaskParticipant', 'post', data);

                            case 5:
                                res = _context8.sent;

                                if (res.data.success) {
                                    if (res.statusCode == 200 && res.data.success) {
                                        console.log('完成');
                                    } else {
                                        wx.showToast({
                                            title: '网络问题！',
                                            icon: 'none',
                                            duration: 1500,
                                            mask: false
                                        });
                                    }
                                }

                            case 7:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function CompletedTaskParticipant(_x9) {
                return _ref10.apply(this, arguments);
            }

            return CompletedTaskParticipant;
        }()
        //删除该项任务

    }, {
        key: 'DeleteTask',
        value: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var data, resData, pages, prevPage;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                wx.showLoading({
                                    title: '加载中,请稍等!',
                                    mask: true
                                });
                                data = {
                                    id: this.taskData.id
                                };
                                _context9.next = 4;
                                return _ajax2.default.getData('/api/services/web/taskPlanning/DeleteTask', 'post', data);

                            case 4:
                                resData = _context9.sent;

                                if (resData.statusCode == 200) {
                                    pages = getCurrentPages();
                                    prevPage = pages[pages.length - 2]; //上一个页面

                                    console.log(prevPage);
                                    if (prevPage) {
                                        prevPage.isRefresh();
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 6:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function DeleteTask() {
                return _ref11.apply(this, arguments);
            }

            return DeleteTask;
        }()
    }, {
        key: 'getInervalHour',
        value: function getInervalHour(startDate, endDate) {
            startDate = new Date(startDate).getTime();
            endDate = new Date(endDate).getTime();
            var ms = endDate - startDate;
            if (ms < 0) return 0;
            return Math.floor(Number(ms / 3600000));
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.id = options.id;
            var userInfo = this.$parent.global.userInfo;
            this.userImage = userInfo.userAvatar;
            this.userId = userInfo.id;
            this.getTask();
            this.GetComments();
            this.$apply();
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {}
    }]);

    return taskdetail;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(taskdetail , 'pages/modules/myTaskCourse/taskStage/taskDetail/taskdetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tkZXRhaWwuanMiXSwibmFtZXMiOlsidGFza2RldGFpbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hdmJhciIsImRhdGEiLCJjdXJyZW50VGFiIiwibmF2YmFycyIsInRhc2tEYXRhIiwidGFnIiwiZW5kVGltZSIsImZpbGVJY29uIiwiZmlsZUNvbG9yIiwiYXZhdGFyIiwiaWQiLCJpc0NoZWNrZWQiLCJ1c2VySWQiLCJ1c2VySW1hZ2UiLCJzaG93SXNBY2NlcHQiLCJDb21tZW50c0RhdGFzIiwiZmlsZUluZm8iLCJwYWdlU2l6ZSIsInBhZ2VOdW1iZXIiLCJ0b3RhbENvdW50IiwibXNnRGF0YSIsInNjcm9sbFRvcCIsInNlbmRTaG93IiwiaW1hZ2VEYXRhIiwic2hvd1ZpZGVvIiwidmlkZW9QYXRoIiwicmVmdXNlUmVtYXJrIiwicGFydGljaXBhdGVWaWV3Iiwid2FybmluZyIsImNoaWxkTmFtZSIsImNoaWxkVmlldyIsIlRleHRDb3VudCIsIm1ldGhvZHMiLCJsb25ncHJlc3MiLCJpbmRleCIsImlzQ29tcGxldGVkIiwiaXNBY2NlcHQiLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiRGVsZXRlU3ViVGFzayIsInN1Ym1pdENoaWxkTmFtZSIsImxlbmd0aCIsIkNyZWF0ZU9yVXBkYXRlU3ViVGFzayIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJjaGlsZE5hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsImFkZENoaWxkIiwiY2hpbGRDYW5jZWwiLCJvcGVyYXRpb24iLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsIml0ZW1Db2xvciIsInRhcEluZGV4IiwicGFyZW50Q2hlY2tlZCIsImV2ZXJ5IiwiaSIsImNvbnNvbGUiLCJsb2ciLCJDb21wbGV0ZWRUYXNrUGFydGljaXBhbnQiLCJEZWxldGVUYXNrIiwiYmluZGlucHV0IiwiYmluZGJsdXIiLCJjb21maXJtUGFydGljaXBhdGlvbiIsIkNvbmZpcm1UYXNrUGFydGljaXBhbnQiLCJjYW5jZWxWaWV3Iiwibm9BY2NlcHQiLCJhY2NlcHQiLCJjb2xzZVZpZGVvIiwidGFyZ2V0IiwiY2hvb3NlVmlkZW8iLCJzb3VyY2VUeXBlIiwibWF4RHVyYXRpb24iLCJjYW1lcmEiLCJ0ZW1wRmlsZVBhdGgiLCJ0aHVtYlRlbXBGaWxlUGF0aCIsInRpbWUiLCJEYXRlIiwiY3JlYXRpb25UaW1lIiwiYXBpIiwiZm9ybWF0VGltZSIsInVwbG9hZEZpbGUiLCJnZXRTY3JvbGwiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwiYmluZGZvY3VzIiwic2hvd1NlbmQiLCJzZW5kTXNnIiwibXNnIiwiZ2V0Q29tbWVudCIsInNldERhdGEiLCJtc2dJbmZvIiwibWVzc2FnZSIsImNyZWF0b3JVc2VySWQiLCJ1bnNoaWZ0IiwibG9hZE1vcmUiLCJ0aGF0IiwiR2V0Q29tbWVudHMiLCJwcmVWaWV3IiwiZmlsZUlkIiwiZmlsZUNsYXNzIiwiZmlsZVNpemUiLCJmaWxlUGF0aCIsInNob3dMb2FkaW5nIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJodHRwIiwiYWpheCIsImdldFN0b3JhZ2UiLCJrZXkiLCJkb3dubG9hZFRhc2siLCJkb3dubG9hZEZpbGUiLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwidXJsIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJvblByb2dyZXNzVXBkYXRlIiwiciIsInByb2dyZXNzIiwidG90YWxCeXRlc1dyaXR0ZW4iLCJ0b3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlIiwiaXRlbSIsImZvcm1WaXNpYmxlIiwicGFyZW50VGFza0lkIiwicHJvamVjdElkIiwic3RhZ2VJZCIsInRlbXBUZXh0IiwiY29tcGxldGVkVGltZSIsInNvcnQiLCJjaGFuZ2VDaGlsZFN0YXR1cyIsIndhdGNoIiwibmV3Q3VycmVudCIsIm9sZEN1cnJlbnQiLCJwYWdlU2Nyb2xsVG8iLCJuZXdEYXRhIiwib2xkRGF0YSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJpc1JlZnJlc2giLCJnZXREYXRhIiwic3RhdHVzQ29kZSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwicGFyc2VJbnQiLCJib3R0b20iLCJleGVjIiwicmVzdWx0Iiwic3BsaXQiLCJzdGFydFRpbWUiLCJtaWxsVGltZSIsImdldFRpbWUiLCJmb3JtYXRUaW1lU3ltYm9sIiwidGFza0R1cmF0aW9uIiwiZ2V0SW5lcnZhbEhvdXIiLCJlc3RpbWF0ZSIsInRvRml4ZWQiLCJjaGVja0l0ZW1zIiwiYXR0YWNobWVudHMiLCJzaXplIiwiaWNvbkNsYXNzIiwiZXh0ZW5zaW9uIiwicHVzaCIsInBhcnRpY2lwYW50cyIsImVtcGxveWVlSWQiLCJnZXRBYXZhdGFyIiwiYXZhdGFyRGF0YSIsIlRhc2tJZCIsImFyciIsIml0ZW1zIiwib2JqIiwiZmlsZSIsInRvTG93ZXJDYXNlIiwibmFtZSIsImltYWdlIiwicmVwbGFjZSIsImNvbmNhdCIsImNvbW1lbnQiLCJ0YXNrSWQiLCJjaG9vc2UiLCJjb3ZlciIsImNodW5rIiwiY2h1bmtzIiwiaW5mb0RhdGEiLCJpbWFnZUluZm9EYXRhIiwiSlNPTiIsInBhcnNlIiwiaW1hZ2VJbmZvIiwidmlkZW9JbmZvRGF0YSIsInZpZGllb0luZm8iLCJjb2xvciIsInJlbWFyayIsInJlc0RhdGEiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFRhc2siLCJkYXRlIiwiaXNNYXJrIiwiaXNQYXJ0aWNpcGFudCIsImlzUmVtaW5kIiwiZXJyb3IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwibXMiLCJNYXRoIiwiZmxvb3IiLCJOdW1iZXIiLCJvcHRpb25zIiwidXNlckluZm8iLCIkcGFyZW50IiwiZ2xvYmFsIiwidXNlckF2YXRhciIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSDtBQUNBQyx3QkFBWSxDQUZUO0FBR0hDLHFCQUFTLENBQUMsTUFBRCxFQUFTLElBQVQsQ0FITjtBQUlIQyxzQkFBVSxFQUpQO0FBS0hDLGlCQUFLLEVBTEY7QUFNSEMscUJBQVMsRUFOTjtBQU9IQyxzQkFBVSxFQVBQO0FBUUhDLHVCQUFXLEVBUlI7QUFTSEMsb0JBQVEsRUFUTDtBQVVIQyxnQkFBSSxDQVZEO0FBV0hDLHVCQUFXLEVBWFI7QUFZSDtBQUNBQyxvQkFBUSxDQWJMLEVBYVE7QUFDWEMsdUJBQVcsRUFkUixFQWNZO0FBQ2Y7QUFDQTtBQUNBQywwQkFBYyxLQWpCWDtBQWtCSEMsMkJBQWUsRUFsQlo7QUFtQkhDLHNCQUFVLEVBbkJQLEVBbUJXO0FBQ2RDLHNCQUFVLEVBcEJQO0FBcUJIQyx3QkFBWSxDQXJCVDtBQXNCSEMsd0JBQVksQ0F0QlQ7QUF1QkhDLHFCQUFTLEVBdkJOLEVBdUJVO0FBQ2JDLHVCQUFXLENBeEJSO0FBeUJIQyxzQkFBVSxLQXpCUCxFQXlCYztBQUNqQkMsdUJBQVcsRUExQlI7QUEyQkhDLHVCQUFXLEtBM0JSO0FBNEJIQyx1QkFBVyxFQTVCUjtBQTZCSDtBQUNBQywwQkFBYyxFQTlCWCxFQThCZTtBQUNsQkMsNkJBQWlCLEtBL0Jk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QkFBS3hHLFdBQUw7QUFDQSxpQkFBS3JELE1BQUw7QUFDSDs7O21DQUNVLENBQUU7Ozs7RUFsOEJ1QjhLLGVBQUtDLEk7O2tCQUF4QmpQLFUiLCJmaWxlIjoidGFza2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyB0YXNrZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2YmFycy5vbmNlXCI6XCJuYXZiYXJzXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBuYXZiYXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8vIFJlZnJlc2g6ZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwLFxuICAgICAgICAgICAgbmF2YmFyczogWyfku7vliqHor6bmg4UnLCAn6K6o6K66J10sXG4gICAgICAgICAgICB0YXNrRGF0YToge30sXG4gICAgICAgICAgICB0YWc6IFtdLFxuICAgICAgICAgICAgZW5kVGltZTogJycsXG4gICAgICAgICAgICBmaWxlSWNvbjogW10sXG4gICAgICAgICAgICBmaWxlQ29sb3I6IFtdLFxuICAgICAgICAgICAgYXZhdGFyOiBbXSxcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgaXNDaGVja2VkOiBbXSxcbiAgICAgICAgICAgIC8vIOiuqOiuuuaVsOaNrlxuICAgICAgICAgICAgdXNlcklkOiAwLCAvL+eUqOaIt0lEXG4gICAgICAgICAgICB1c2VySW1hZ2U6ICcnLCAvL+eUqOaIt+WktOWDj1xuICAgICAgICAgICAgLy8gcGFyZW50SW5kZXg6IDAsXG4gICAgICAgICAgICAvLyBwYXJlbnRTSW5kZXg6IDAsXG4gICAgICAgICAgICBzaG93SXNBY2NlcHQ6IGZhbHNlLFxuICAgICAgICAgICAgQ29tbWVudHNEYXRhczogW10sXG4gICAgICAgICAgICBmaWxlSW5mbzogW10sIC8v5paH5Lu25L+h5oGvXG4gICAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgIG1zZ0RhdGE6ICcnLCAvL+aWh+Wtl+S/oeaBr1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgc2VuZFNob3c6IGZhbHNlLCAvL+aOp+WItuWPkemAgeaWh+S7tuaIluWbvueJh+eahOW6lemDqOW8ueahhuW8gOWFs1xuICAgICAgICAgICAgaW1hZ2VEYXRhOiBbXSxcbiAgICAgICAgICAgIHNob3dWaWRlbzogZmFsc2UsXG4gICAgICAgICAgICB2aWRlb1BhdGg6ICcnLFxuICAgICAgICAgICAgLy/mi5Lnu53lj4LkuI7lvLnnqpdcbiAgICAgICAgICAgIHJlZnVzZVJlbWFyazogJycsIC8v5ouS57ud5Y6f5ZugXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZVZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAvL+a3u+WKoOWtkOS7u+WKoVxuICAgICAgICAgICAgY2hpbGROYW1lOiAnJyxcbiAgICAgICAgICAgIGNoaWxkVmlldzogZmFsc2UsXG4gICAgICAgICAgICBUZXh0Q291bnQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvLyDliKDpmaTlrZDku7vliqFcbiAgICAgICAgICAgIGxvbmdwcmVzcyhpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhc2tEYXRhLmlzQ29tcGxldGVkICE9PSAnWScgJiYgdGhpcy50YXNrRGF0YS5pc0FjY2VwdCA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5piv5ZCm56Gu6K6k5Yig6Zmk5a2Q5Lu75YqhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM1ZDczZmEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EZWxldGVTdWJUYXNrKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+a3u+WKoOaPkOS6pOWtkOS7u+WKoeWQjeensFxuICAgICAgICAgICAgc3VibWl0Q2hpbGROYW1lKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkTmFtZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVPclVwZGF0ZVN1YlRhc2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflrZDku7vliqHlkI3np7DkuI3og73kuLrnqbrvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5a2Q5Lu75Yqh6L6T5YWl5qGG5pWw5o2uXG4gICAgICAgICAgICBjaGlsZE5hbWVJbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5pi+56S65re75Yqg5a2Q5Lu75YqhXG4gICAgICAgICAgICBhZGRDaGlsZCgpIHtcbiAgICAgICAgICAgICAgICAvLyBpZih0aGlzLnRhc2tEYXRhLmlzQ29tcGxldGVkPT0nTicpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRWaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+WFs+mXreWtkOS7u+WKoVxuICAgICAgICAgICAgY2hpbGRDYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/nvJbovpHmk43kvZxcbiAgICAgICAgICAgIG9wZXJhdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdDogWyflrozmiJDku7vliqEnLCAn5Yig6Zmk5Lu75YqhJ10sXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db2xvcjogJyM1ZDczZmEnLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5ldmVyeShpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyZW50Q2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db21wbGV0ZWRUYXNrUGFydGljaXBhbnQoJ1knKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmo4Dmn6XlrZDku7vliqHmmK/lkKblhajpg6jlrozmiJDvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmmK/lkKbnoa7orqTliKDpmaTor6Xku7vliqHvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiAnIzVkNzNmYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRlbGV0ZVRhc2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+aLkue7neWPguS4jlxuICAgICAgICAgICAgLy/mi5Lnu53ljp/lm6BcbiAgICAgICAgICAgIGJpbmRpbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZ1c2VSZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRibHVyKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWZ1c2VSZW1hcmspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5ouS57ud56Gu5a6aXG4gICAgICAgICAgICBjb21maXJtUGFydGljaXBhdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWZ1c2VSZW1hcmspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db25maXJtVGFza1BhcnRpY2lwYW50KCdSJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/pmpDol49cbiAgICAgICAgICAgIGNhbmNlbFZpZXcoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNpcGF0ZVZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+aYvuekulxuICAgICAgICAgICAgbm9BY2NlcHQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNpcGF0ZVZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5Y+C5LiO5Lu75YqhXG4gICAgICAgICAgICBhY2NlcHQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db25maXJtVGFza1BhcnRpY2lwYW50KCdZJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5YWz6Zet6KeG6aKRXG4gICAgICAgICAgICBjb2xzZVZpZGVvKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICBpZiAoKGUudGFyZ2V0LmlkID0gJ3ZpZGVvVmlldycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZGVvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDlj5HpgIHop4bpopFcbiAgICAgICAgICAgIGNob29zZVZpZGVvKCkge1xuICAgICAgICAgICAgICAgIHd4LmNob29zZVZpZGVvKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICAgICAgICAgICAgbWF4RHVyYXRpb246IDYwLFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmE6ICdiYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aHVtYlRlbXBGaWxlUGF0aCA9IHJlcy50aHVtYlRlbXBGaWxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjcmVhdGlvblRpbWUgPSBhcGkuZm9ybWF0VGltZSh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmlkZW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGlvblRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJUZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Y+R6YCB5Zu+54mHXG4gICAgICAgICAgICBjaG9vc2VJbWFnZSgpIHtcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3JlYXRpb25UaW1lID0gYXBpLmZvcm1hdFRpbWUodGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGUoJ2ltYWdlJywgdGVtcEZpbGVQYXRocywgY3JlYXRpb25UaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kZm9jdXMoZSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VuZFNob3c9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTY3JvbGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93U2VuZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFNob3cgPSAhdGhpcy5zZW5kU2hvdztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDlj5HpgIHkv6Hmga9cbiAgICAgICAgICAgIHNlbmRNc2coZSkge1xuICAgICAgICAgICAgICAgIC8vICB0aGlzLkNvbW1lbnRzRGF0YXM9W107XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tbWVudChtc2cpO1xuICAgICAgICAgICAgICAgIC8vIHZhciBwYWdlTnVtYmVyPSB0aGlzLnBhZ2VOdW1iZXJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBtc2dEYXRhOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgY3JlYXRpb25UaW1lID0gYXBpLmZvcm1hdFRpbWUodGltZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3JlYXRpb25UaW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgbXNnSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdG9yVXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB0aGlzLnVzZXJJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpb25UaW1lOiBjcmVhdGlvblRpbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUluZm8udW5zaGlmdChtc2dJbmZvKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/liqDovb3mm7TlpJrorqjorrrmtojmga9cbiAgICAgICAgICAgIGxvYWRNb3JlKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGF0LnBhZ2VOdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGF0LkdldENvbW1lbnRzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICDpooTop4hcbiAgICAgICAgICAgIHByZVZpZXcoZmlsZUlkLCBmaWxlQ2xhc3MsIGZpbGVTaXplLCBmaWxlUGF0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVJZCwgZmlsZUNsYXNzLCBmaWxlU2l6ZSwgZmlsZVBhdGgpO1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK3vvIzor7fnqI3nrYnvvIEnLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGVJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBmaWxlUGF0aCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsczogW2ZpbGVQYXRoXSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBodHRwID1cbiAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrQXR0YWNobWVudC9HZXREb2N1bWVudEZpbGU/aWQ9JyArIGZpbGVJZDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmaWxlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5qcGcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFqYXgucHJlVmlldyhodHRwLCBmaWxlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnBuZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWpheC5wcmVWaWV3KGh0dHAsIGZpbGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcueGxzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhamF4LnByZVZpZXcoaHR0cCwgZmlsZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy54bHN4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhamF4LnByZVZpZXcoaHR0cCwgZmlsZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2N4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhamF4LnByZVZpZXcoaHR0cCwgZmlsZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFqYXgucHJlVmlldyhodHRwLCBmaWxlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnBkZic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWpheC5wcmVWaWV3KGh0dHAsIGZpbGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcubXA0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWRlbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2FjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG93bmxvYWRUYXNrID0gd3guZG93bmxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyByZXMuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWlsaW5rZWRsYXcuY29tJyArIGh0dHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlb1BhdGggPSByZXMudGVtcEZpbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZShyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LiL6L296L+b5bqmJywgci5wcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W3sue7j+S4i+i9veeahOaVsOaNrumVv+W6picsIHIudG90YWxCeXRlc1dyaXR0ZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn6aKE5pyf6ZyA6KaB5LiL6L2955qE5pWw5o2u5oC76ZW/5bqmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci50b3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5paH5Lu25qC85byP5LiN5pSv5oyB77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+eCueWHu+mAieS4reWujOaIkOS7u+WKoVxuICAgICAgICAgICAgaXNDb21wbGV0ZWQoaXRlbSwgaW5kZXgsIGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhc2tEYXRhLmlzQ29tcGxldGVkICE9PSAnWScgJiYgdGhpcy50YXNrRGF0YS5pc0FjY2VwdCA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NoZWNrZWRbaW5kZXhdID0gIXRoaXMuaXNDaGVja2VkW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRUYXNrSWQ6IHRoaXMudGFza0RhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMudGFza0RhdGEucHJvamVjdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VJZDogdGhpcy50YXNrRGF0YS5zdGFnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbXBsZXRlZFRpbWUgPSBpdGVtLmNvbXBsZXRlZFRpbWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWQgPSBpdGVtLmlkIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmlzQ29tcGxldGVkID0gaXNDaGVja2VkID8gJ04nIDogJ1knO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNvcnQgPSBpdGVtLnNvcnQgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGl0bGUgPSBpdGVtLnRpdGxlIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNoaWxkU3RhdHVzKGRhdGEsIGlzQ2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRUYWIobmV3Q3VycmVudCwgb2xkQ3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdDdXJyZW50ICE9PSBvbGRDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDdXJyZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3eC5wYWdlU2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0N1cnJlbnQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGROYW1lKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuVGV4dENvdW50ID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNDaGVja2VkKG5ld0RhdGEsIG9sZERhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YSAhPT0gb2xkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5pc1JlZnJlc2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8g5a6M5oiQ5Lu75Yqh5LiK5Lyg5pWw5o2uXG4gICAgICAgIGFzeW5jIGNoYW5nZUNoaWxkU3RhdHVzKGRhdGEsIGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitLOivt+eojeetiSEnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUGxhbm5pbmcvQ3JlYXRlT3JVcGRhdGVTdWJUYXNrJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W3suWujOaIkCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey5Y+W5raIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6K6+572uc2Nyb2xsVG9wXG4gICAgICAgIGdldFNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIC8vICAgaWYodGhhdC5zY3JvbGxUb3AgKVxuICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAgICAgICAgICAgLnNlbGVjdCgnLndpbkhlaWdodCcpXG4gICAgICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KHBhcnNlSW50KHJlY3QuYm90dG9tKSp0aGF0LnBhZ2VOdW1iZXIqMTApKVxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNjcm9sbFRvcCA9IHBhcnNlSW50KHBhcnNlSW50KHJlY3QuYm90dG9tKSAqIHRoYXQucGFnZU51bWJlciAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhhdC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5leGVjKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635b6X5Lu75Yqh6K+m5oOFXG4gICAgICAgIGFzeW5jIGdldFRhc2soKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0s6K+356iN562JIScsXG4gICAgICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGlkID0ge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrUGxhbm5pbmcvR2V0VGFzaycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIHRhc2tEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIC8v5piv5ZCm5pi+56S657yW6L6R5Zu+5qCHXG4gICAgICAgICAgICBpZiAodGFza0RhdGEucmVzdWx0LmlzQWNjZXB0ID09ICdOJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0lzQWNjZXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SXNBY2NlcHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOagh+etvlxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza0RhdGEucmVzdWx0LnRhZyk7XG4gICAgICAgICAgICBpZiAodGFza0RhdGEucmVzdWx0LnRhZyAhPT0gJycgJiYgdGFza0RhdGEucmVzdWx0LnRhZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFnID0gdGFza0RhdGEucmVzdWx0LnRhZy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ1swXSA9ICfmoIfnrb7mnKrnn6UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhc2tEYXRhLnJlc3VsdC5zdGFydFRpbWUgIT09IG51bGwgJiYgdGFza0RhdGEucmVzdWx0LmVuZFRpbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlsbFRpbWU9bmV3IERhdGUodGFza0RhdGEucmVzdWx0LmVuZFRpbWUpLmdldFRpbWUoKS0oOCo2MCo2MCoxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEucmVzdWx0LmVuZFRpbWU9bmV3IERhdGUobWlsbFRpbWUpO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnJlc3VsdC5lbmRUaW1lID0gYXBpLmZvcm1hdFRpbWVTeW1ib2wodGFza0RhdGEucmVzdWx0LmVuZFRpbWUsICctJylcbiAgICAgICAgICAgICAgICAvL+S7u+WKoeaXtumVv1xuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnJlc3VsdC50YXNrRHVyYXRpb24gPSB0aGlzLmdldEluZXJ2YWxIb3VyKHRhc2tEYXRhLnJlc3VsdC5zdGFydFRpbWUsIHRhc2tEYXRhLnJlc3VsdC5lbmRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXNrRGF0YS5yZXN1bHQuZXN0aW1hdGUpIHtcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS5yZXN1bHQuZXN0aW1hdGUgPSB0YXNrRGF0YS5yZXN1bHQuZXN0aW1hdGUudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v5a2Q5Lu75YqhXG4gICAgICAgICAgICBpZiAodGFza0RhdGEucmVzdWx0LmNoZWNrSXRlbXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGFza0RhdGEucmVzdWx0LmNoZWNrSXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0YXNrRGF0YS5yZXN1bHQuY2hlY2tJdGVtc1tpbmRleF0uaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1knOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDaGVja2VkW2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2hlY2tlZFtpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v6ZmE5Lu25Zu+5qCHXG4gICAgICAgICAgICBpZiAodGFza0RhdGEucmVzdWx0LmF0dGFjaG1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGFza0RhdGEucmVzdWx0LmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLnJlc3VsdC5hdHRhY2htZW50c1tpbmRleF0uc2l6ZT0odGFza0RhdGEucmVzdWx0LmF0dGFjaG1lbnRzW2luZGV4XS5zaXplLzEwMjQpLnRvRml4ZWQoMCk+MTAyND8odGFza0RhdGEucmVzdWx0LmF0dGFjaG1lbnRzW2luZGV4XS5zaXplLzEwMjQvMTAyNCkudG9GaXhlZCgwKSsnTWInOih0YXNrRGF0YS5yZXN1bHQuYXR0YWNobWVudHNbaW5kZXhdLnNpemUvMTAyNCkudG9GaXhlZCgwKSsnS2InO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvbkNsYXNzID0gdGFza0RhdGEucmVzdWx0LmF0dGFjaG1lbnRzW2luZGV4XS5leHRlbnNpb247XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaWNvbkNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcucGRmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJY29uLnB1c2goJ2ljb24tcGRmcG5nMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUNvbG9yLnB1c2goJyNlMjAwMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5wbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUljb24ucHVzaCgnaWNvbi1wZGZwbmcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3IucHVzaCgnI2UyMDAwMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnhscyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbi5wdXNoKCdpY29uLWV4bDEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvci5wdXNoKCcjMDY5NDAwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcueGxzeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbi5wdXNoKCdpY29uLWV4bDEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvci5wdXNoKCcjMDY5NDAwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcuZG9jeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbi5wdXNoKCdpY29uLXdvbGQxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3IucHVzaCgnIzAwOWRmZicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLmRvYyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbi5wdXNoKCdpY29uLXdvbGQxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3IucHVzaCgnIzAwOWRmZicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLmpwZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbi5wdXNoKCdpY29uLWpwZ2dlc2hpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlQ29sb3IucHVzaCgnI2ZmOTkwMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLmpwZWcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUljb24ucHVzaCgnaWNvbi1qcGdnZXNoaScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUNvbG9yLnB1c2goJyNmZjk5MDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZvbGRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSWNvbi5wdXNoKCdpY29uLXdlbmRhbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvci5wdXNoKCcjZmY5OTAwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUljb24ucHVzaCgnaWNvbi13ZWl6aGl3ZW5qaWFuZ2VzaGknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVDb2xvci5wdXNoKCcjN2E3YTdhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WPguS4juS6uuWktOWDj1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnJlc3VsdC5wYXJ0aWNpcGFudHMgIT09ICcnICYmXG4gICAgICAgICAgICAgICAgdGFza0RhdGEucmVzdWx0LnBhcnRpY2lwYW50cyAhPT0gbnVsbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGFza0RhdGEucmVzdWx0LnBhcnRpY2lwYW50cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSB0YXNrRGF0YS5yZXN1bHQucGFydGljaXBhbnRzW2luZGV4XS5lbXBsb3llZUlkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBpZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YXRhckRhdGEgPSBhd2FpdCBhamF4LmdldEFhdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyW2luZGV4XSA9IGF2YXRhckRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50YXNrRGF0YSA9IHRhc2tEYXRhLnJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrRGF0YS5yZXN1bHQudGFnLnNwbGl0KCcsJykpXG4gICAgICAgIH1cbiAgICAgICAgLy/ojrflvpforqjorrrlhoXlrrlcbiAgICAgICAgYXN5bmMgR2V0Q29tbWVudHMoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0s6K+356iN562JIScsXG4gICAgICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaWYgKHd4LnBhZ2VTY3JvbGxUbykge1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgVGFza0lkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMucGFnZU51bWJlcixcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBDb21tZW50c0RhdGFzID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrQ29tbWVudC9HZXRDb21tZW50cycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLkNvbW1lbnRzRGF0YXMgPSBDb21tZW50c0RhdGFzLmRhdGEucmVzdWx0Lml0ZW07XG4gICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSBDb21tZW50c0RhdGFzLmRhdGEucmVzdWx0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDb21tZW50c0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgIGFycltpbmRleF0gPSBvYmo7XG4gICAgICAgICAgICAgICAgaWYgKENvbW1lbnRzRGF0YXMuZGF0YS5yZXN1bHQuaXRlbXNbaW5kZXhdLmZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBDb21tZW50c0RhdGFzLmRhdGEucmVzdWx0Lml0ZW1zW2luZGV4XS5maWxlO1xuICAgICAgICAgICAgICAgICAgICBvYmpbJ3NpemUnXSA9IGZpbGUuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqWydleHRlbnNpb24nXSA9IGZpbGUuZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIG9ialsnbmFtZSddID0gZmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBvYmpbJ2lkJ10gPSBmaWxlLmlkO1xuICAgICAgICAgICAgICAgICAgICBvYmpbJ21lc3NhZ2UnXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHRlbnNpb24gPSBmaWxlLmV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLmpwZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqWydpY29uJ10gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2NvbG9yJ10gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi90YXNrQXR0YWNobWVudC9HZXREb2N1bWVudEZpbGU/aWQ9JyArIGZpbGUuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2ltYWdlJ10gPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5wbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnaWNvbiddID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqWydjb2xvciddID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0dHAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza0F0dGFjaG1lbnQvR2V0RG9jdW1lbnRGaWxlP2lkPScgKyBmaWxlLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IGF3YWl0IGFqYXguZ2V0QWF2YXRhcihodHRwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2ltYWdlJ10gPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy54bHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnaWNvbiddID0gJ2ljb24tZXhsMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqWydjb2xvciddID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnhsc3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnaWNvbiddID0gJ2ljb24tZXhsMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqWydjb2xvciddID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLmRvY3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnaWNvbiddID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnY29sb3InXSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnaWNvbiddID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnY29sb3InXSA9ICcjMDA5ZGZmJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5wZGYnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnaWNvbiddID0gJ2ljb24tcGRmcG5nMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqWydjb2xvciddID0gJyNlMjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLm1wNCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqWydpY29uJ10gPSAnaWNvbi1zaGlwaW53ZW5qaWFuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2NvbG9yJ10gPSAnI2ZjNTk1OSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialsnaWNvbiddID0gJ2ljb24td2Vpemhpd2Vuamlhbmdlc2hpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2NvbG9yJ10gPSAnIzdhN2E3YSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKENvbW1lbnRzRGF0YXMucmVzdWx0Lml0ZW1zW2luZGV4XS5tZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialsnbWVzc2FnZSddID0gQ29tbWVudHNEYXRhcy5yZXN1bHQuaXRlbXNbaW5kZXhdLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWktOWDj1xuICAgICAgICAgICAgICAgIGlmIChDb21tZW50c0RhdGFzLnJlc3VsdC5pdGVtc1tpbmRleF0uY3JlYXRvclVzZXJJZCAhPT0gdGhpcy51c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqWydjcmVhdG9yVXNlcklkJ10gPSBDb21tZW50c0RhdGFzLnJlc3VsdC5pdGVtc1tpbmRleF0uY3JlYXRvclVzZXJJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0dHAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50c0RhdGFzLnJlc3VsdC5pdGVtc1tpbmRleF0uY3JlYXRvclVzZXJJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YXRhckRhdGEgPSBhd2FpdCBhamF4LmdldEFhdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgICAgIG9ialsnYXZhdGFyJ10gPSBhdmF0YXJEYXRhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialsnY3JlYXRvclVzZXJJZCddID0gdGhpcy51c2VySWQ7XG4gICAgICAgICAgICAgICAgICAgIG9ialsnYXZhdGFyJ10gPSB0aGlzLnVzZXJJbWFnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5pel5pyfXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuQ29tbWVudHNEYXRhc1tpbmRleF0uY3JlYXRpb25UaW1lICE9PSAnJyAmJiB0aGlzLkNvbW1lbnRzRGF0YXNbaW5kZXhdLmNyZWF0aW9uVGltZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9ialsnY3JlYXRpb25UaW1lJ10gPSBDb21tZW50c0RhdGFzLnJlc3VsdC5pdGVtc1tcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICBdLmNyZWF0aW9uVGltZS5yZXBsYWNlKC9bYS16QS1aXS9nLCAnICcpLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZU51bWJlciA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkNvbW1lbnRzRGF0YXMgPSB0aGlzLkNvbW1lbnRzRGF0YXMuY29uY2F0KENvbW1lbnRzRGF0YXMucmVzdWx0Lml0ZW1zKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUluZm8gPSB0aGlzLmZpbGVJbmZvLmNvbmNhdChhcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkNvbW1lbnRzRGF0YXMgPSBDb21tZW50c0RhdGFzLnJlc3VsdC5pdGVtcztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbmZvID0gYXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlj5HpgIHmlofmnKzkv6Hmga9cbiAgICAgICAgZ2V0Q29tbWVudChtc2cpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0lkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtc2dcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5LitJyxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFqYXguZ2V0RGF0YSgnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza0NvbW1lbnQvQ3JlYXRlQ29tbWVudCcsICdwb3N0JywgZGF0YSk7XG4gICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICBwcmV2UGFnZS5pc1JlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+S4iuS8oOWbvueJh1xuICAgICAgICBhc3luYyB1cGxvYWRGaWxlKGNob29zZSwgdGVtcEZpbGVQYXRocywgY3JlYXRpb25UaW1lLCBjb3Zlcikge1xuICAgICAgICAgICAgLy8gdmFyIGNyZWF0aW9uVGltZXMgPVxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2h1bms6IDAsXG4gICAgICAgICAgICAgICAgY2h1bmtzOiAxLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIGZpbGU6ICcoYmluYXJ5KSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgaW5mb0RhdGEgPSBhd2FpdCBhamF4LnVwbG9hZEZpbGUoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tDb21tZW50L3VwbG9hZEF0dGFjaG1lbnQnLFxuICAgICAgICAgICAgICAgIHRlbXBGaWxlUGF0aHMsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm9EYXRhKTtcbiAgICAgICAgICAgIGlmIChjaG9vc2UgPT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZUluZm9EYXRhID0gSlNPTi5wYXJzZShpbmZvRGF0YS5kYXRhKS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VJbmZvRGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZm9EYXRhLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHRlbnNpb24gPSBpbWFnZUluZm9EYXRhLmV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogaW1hZ2VJbmZvRGF0YS5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBleHRlbnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbWFnZUluZm9EYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaW1hZ2VJbmZvRGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogdGVtcEZpbGVQYXRocyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB0aGlzLnVzZXJJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aW9uVGltZTogY3JlYXRpb25UaW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUluZm8udW5zaGlmdChpbWFnZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+acjeWKoeWZqOW8guW4uCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hvb3NlID09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW9JbmZvRGF0YSA9IEpTT04ucGFyc2UoaW5mb0RhdGEuZGF0YSkucmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZGVvSW5mb0RhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChpbmZvRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gdmlkZW9JbmZvRGF0YS5leHRlbnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGllb0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiB2aWRlb0luZm9EYXRhLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IGV4dGVuc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHZpZGVvSW5mb0RhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2aWRlb0luZm9EYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBjb3ZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB0aGlzLnVzZXJJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aW9uVGltZTogY3JlYXRpb25UaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ljb24tc2hpcGlud2VuamlhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmYzU5NTknXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUluZm8udW5zaGlmdCh2aWRpZW9JbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmnI3liqHlmajlvILluLgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpbmZvRGF0YS5zdGF0dXNDb2RlID09IDIwMCl7XG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmlzUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/mmK/lkKblj4LkuI5cbiAgICAgICAgYXN5bmMgQ29uZmlybVRhc2tQYXJ0aWNpcGFudChpc0FjY2VwdCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitLOivt+eojeetiSEnLFxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnRhc2tEYXRhLnByb2plY3RJZCxcbiAgICAgICAgICAgICAgICBzdGFnZUlkOiB0aGlzLnRhc2tEYXRhLnN0YWdlSWQsXG4gICAgICAgICAgICAgICAgdGFza0lkOiB0aGlzLnRhc2tEYXRhLmlkLFxuICAgICAgICAgICAgICAgIGlzQWNjZXB0OiBpc0FjY2VwdCxcbiAgICAgICAgICAgICAgICByZW1hcms6IHRoaXMucmVmdXNlUmVtYXJrXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3Rhc2tQYXJ0aWNpcGFudC9Db25maXJtVGFza1BhcnRpY2lwYW50JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0RhdGEpXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljaXBhdGVWaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+a3u+WKoOWtkOS7u+WKoVxuICAgICAgICBhc3luYyBDcmVhdGVPclVwZGF0ZVN1YlRhc2soKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0s6K+356iN562JIScsXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy50YXNrRGF0YS5pc0FjY2VwdCA9PSAnWScpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAndGVtcF8nICsgdGhpcy50YXNrRGF0YS5jaGVja0l0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogXCJOXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRhc2tJZDogdGhpcy50YXNrRGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnRhc2tEYXRhLnByb2plY3RJZCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50YXNrRGF0YS5jaGVja0l0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VJZDogdGhpcy50YXNrRGF0YS5zdGFnZUlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5jaGlsZE5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BsYW5uaW5nL0NyZWF0ZU9yVXBkYXRlU3ViVGFzaycsXG4gICAgICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRhc2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmt7vliqDlpLHotKXvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Yig6Zmk5a2Q5Lu75YqhXG4gICAgICAgIGFzeW5jIERlbGV0ZVN1YlRhc2soaW5kZXgpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSzor7fnqI3nrYkhJyxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tEYXRhLmlzQWNjZXB0ID09ICdZJykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy50YXNrRGF0YS5jaGVja0l0ZW1zW2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BsYW5uaW5nL0RlbGV0ZVN1YlRhc2snLFxuICAgICAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmlzUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGFzaygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOWksei0pe+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/lrozmiJDniLbnuqfpobXpnaLku7vliqFcbiAgICAgICAgYXN5bmMgQ29tcGxldGVkVGFza1BhcnRpY2lwYW50KGlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0s6K+356iN562JIScsXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJldlBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZQYWdlLmlzUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpc01hcms6IFwiWVwiLFxuICAgICAgICAgICAgICAgIGlzUGFydGljaXBhbnQ6IFwiWVwiLFxuICAgICAgICAgICAgICAgIGlzUmVtaW5kOiBcIllcIixcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiBkYXRlLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnRhc2tEYXRhLmlkLFxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBpc0NvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMudGFza0RhdGEucHJvamVjdElkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BhcnRpY2lwYW50L0NvbXBsZXRlZFRhc2tQYXJ0aWNpcGFudCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflrozmiJAnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOmXrumimO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/liKDpmaTor6Xpobnku7vliqFcbiAgICAgICAgYXN5bmMgRGVsZXRlVGFzaygpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSzor7fnqI3nrYkhJyxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnRhc2tEYXRhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvdGFza1BsYW5uaW5nL0RlbGV0ZVRhc2snLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldlBhZ2UuaXNSZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzRGF0YS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEluZXJ2YWxIb3VyKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuICAgICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKS5nZXRUaW1lKClcbiAgICAgICAgICAgIGVuZERhdGU9IG5ldyBEYXRlKGVuZERhdGUpLmdldFRpbWUoKVxuICAgICAgICAgICAgdmFyIG1zID0gZW5kRGF0ZSAtIHN0YXJ0RGF0ZTtcbiAgICAgICAgICAgIGlmIChtcyA8IDApIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKG1zIC8gMzYwMDAwMCkpXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdmFyIHVzZXJJbmZvID0gdGhpcy4kcGFyZW50Lmdsb2JhbC51c2VySW5mbztcbiAgICAgICAgICAgIHRoaXMudXNlckltYWdlID0gdXNlckluZm8udXNlckF2YXRhcjtcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlckluZm8uaWQ7XG4gICAgICAgICAgICB0aGlzLmdldFRhc2soKTtcbiAgICAgICAgICAgIHRoaXMuR2V0Q29tbWVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgb25VbmxvYWQoKSB7fVxuICAgIH1cbiJdfQ==