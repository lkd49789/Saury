'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _mixin = require('./../../../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _navbar = require('./../../../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _api = require('./../../../../../utils/cofig/api.js');

var _placeHolderImage = require('./../../../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseDetailAudit = function (_wepy$page) {
    _inherits(caseDetailAudit, _wepy$page);

    function caseDetailAudit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, caseDetailAudit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = caseDetailAudit.__proto__ || Object.getPrototypeOf(caseDetailAudit)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" }, "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
            placeHolderImage: _placeHolderImage2.default,
            navbar: _navbar2.default
        }, _this.data = {
            noDataImage: '../../../../../images/noData.png',
            addOpacity: 1,
            currentTab: 0,
            navbars: ['案件', '客户', '律师', '合同', '检索结果'],
            showAudit: false, //审核按钮是否显示
            CaseInfoData: {},
            clientData: {},
            lawyer: [{
                name: '负责人',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '主办律师',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '协办律师',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '督办律师',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '案源人',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '律师助理',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '业务秘书',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '承办律师',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }, {
                name: '申请人',
                chargeRatio: [],
                allocRatio: [],
                employeeName: [],
                avatar: []
            }],
            OrderItemData: {}
        }, _this.methods = {
            // 跳转至客户方本案联系人
            toClientLinkMan: function toClientLinkMan() {
                wx.navigateTo({ url: '../../../myclient/clientDetail/itemDetail/clientLinkman?id=' + this.CaseInfoData.clientId + '&caseId=' + this.CaseInfoData.id });
            },
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                this.addOpacity = 1;
                wx.navigateTo({
                    url: './auditCase'
                });
            },

            //文件预览
            preView: function preView(fileId, fileClass) {
                fileClass = fileClass.replace('.', '').toLowerCase();
                if (fileClass == 'pdf' || fileClass == 'png' || fileClass == 'xsl' || fileClass == 'xlsx' || fileClass == 'jpg' || fileClass == 'doc' || fileClass == 'docx') {
                    var http = '/api/services/web/document/GetDocumentFile?id=' + fileId;
                    _ajax2.default.preView(http, fileClass);
                } else {
                    wx.showToast({
                        title: '暂不支持此文件预览！',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                }
            }
        }, _this.mixins = [_mixin2.default], _this.watch = {
            currentTab: function currentTab() {
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(caseDetailAudit, [{
        key: 'GetCaseInfo',

        //立案审核信息数据
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var data, resData, CaseInfoData, index, http, linkerPhoto, caseLawyerList, caseContractList;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    id: id
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'post', data);

                            case 3:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 7 : _context.t0 === 403 ? 89 : _context.t0 === 500 ? 94 : 98;
                                break;

                            case 7:
                                if (!(resData.data.result.length !== 0)) {
                                    _context.next = 84;
                                    break;
                                }

                                CaseInfoData = resData.data.result;
                                //保密状态颜色

                                _context.t1 = CaseInfoData.secretLevel;
                                _context.next = _context.t1 === '1' ? 12 : _context.t1 === '2' ? 14 : _context.t1 === '3' ? 16 : _context.t1 === '4' ? 18 : 20;
                                break;

                            case 12:
                                CaseInfoData['secretLevelColor'] = '#069400';
                                return _context.abrupt('break', 21);

                            case 14:
                                CaseInfoData['secretLevelColor'] = '#009dff';
                                return _context.abrupt('break', 21);

                            case 16:
                                CaseInfoData['secretLevelColor'] = '#ff9900';
                                return _context.abrupt('break', 21);

                            case 18:
                                CaseInfoData['secretLevelColor'] = '#e20000';
                                return _context.abrupt('break', 21);

                            case 20:
                                return _context.abrupt('break', 21);

                            case 21:
                                //代理权限
                                if (CaseInfoData.agencyAuthority) {
                                    CaseInfoData.agencyAuthority = CaseInfoData.agencyAuthority.split(',');
                                } else {
                                    CaseInfoData.agencyAuthority = ['未填写'];
                                }
                                //客户联系人头像
                                _context.t2 = regeneratorRuntime.keys(CaseInfoData.caseContactsList);

                            case 23:
                                if ((_context.t3 = _context.t2()).done) {
                                    _context.next = 33;
                                    break;
                                }

                                index = _context.t3.value;
                                id = CaseInfoData.caseContactsList[index].id;
                                http = '/api/services/web/clientContacts/GetClientContactAvatar?id=' + id;
                                _context.next = 29;
                                return _ajax2.default.getUserAvatar(http);

                            case 29:
                                linkerPhoto = _context.sent;

                                if (linkerPhoto.statusCode == 200) {
                                    CaseInfoData.caseContactsList[index]['avatar'] = linkerPhoto.tempFilePath;
                                } else {
                                    wx.showToast({
                                        title: '部分数据异常！',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }
                                _context.next = 23;
                                break;

                            case 33:
                                caseLawyerList = CaseInfoData.caseLawyerList;
                                //律师

                                this.getLawyer(caseLawyerList);
                                //合同
                                caseContractList = CaseInfoData.caseContractList;
                                _context.t4 = regeneratorRuntime.keys(caseContractList);

                            case 37:
                                if ((_context.t5 = _context.t4()).done) {
                                    _context.next = 79;
                                    break;
                                }

                                index = _context.t5.value;

                                caseContractList[index].extension = caseContractList[index].extension.toLowerCase();
                                _context.t6 = caseContractList[index].extension;
                                _context.next = _context.t6 === '.pdf' ? 43 : _context.t6 === '.ppt' ? 46 : _context.t6 === '.pptx' ? 49 : _context.t6 === '.png' ? 52 : _context.t6 === '.xls' ? 55 : _context.t6 === '.xlsx' ? 58 : _context.t6 === '.docx' ? 61 : _context.t6 === '.doc' ? 64 : _context.t6 === '.jpg' ? 67 : _context.t6 === '.mp4' ? 70 : 73;
                                break;

                            case 43:
                                caseContractList[index].fileIcon = 'icon-pdfpng1';
                                caseContractList[index].fileColor = '#e20000';
                                return _context.abrupt('break', 76);

                            case 46:
                                caseContractList[index].fileIcon = 'icon-pdfpng1';
                                caseContractList[index].fileColor = '#e20000';
                                return _context.abrupt('break', 76);

                            case 49:
                                caseContractList[index].fileIcon = 'icon-pdfpng1';
                                caseContractList[index].fileColor = '#e20000';
                                return _context.abrupt('break', 76);

                            case 52:
                                caseContractList[index].fileIcon = 'icon-pdfpng1';
                                caseContractList[index].fileColor = '#e20000';
                                return _context.abrupt('break', 76);

                            case 55:
                                caseContractList[index].fileIcon = 'icon-exl1';
                                caseContractList[index].fileColor = '#069400';
                                return _context.abrupt('break', 76);

                            case 58:
                                caseContractList[index].fileIcon = 'icon-exl1';
                                caseContractList[index].fileColor = '#069400';
                                return _context.abrupt('break', 76);

                            case 61:
                                caseContractList[index].fileIcon = 'icon-wold1';
                                caseContractList[index].fileColor = '#009dff';
                                return _context.abrupt('break', 76);

                            case 64:
                                caseContractList[index].fileIcon = 'icon-wold1';
                                caseContractList[index].fileColor = '#009dff';
                                return _context.abrupt('break', 76);

                            case 67:
                                caseContractList[index].fileIcon = 'icon-jpggeshi';
                                caseContractList[index].fileColor = '#ff9900';
                                return _context.abrupt('break', 76);

                            case 70:
                                caseContractList[index].fileIcon = 'icon-shipinwenjian';
                                caseContractList[index].fileColor = '#fc5959';
                                return _context.abrupt('break', 76);

                            case 73:
                                caseContractList[index].fileIcon = 'icon-weizhiwenjiangeshi';
                                caseContractList[index].fileColor = '#7a7a7a';
                                return _context.abrupt('break', 76);

                            case 76:
                                caseContractList[index].creationTime = (0, _api.formatTimeSymbol)(caseContractList[index].creationTime, '/');
                                _context.next = 37;
                                break;

                            case 79:
                                this.CaseInfoData = CaseInfoData;
                                if (this.CaseInfoData.status == 'N') {
                                    this.showAudit = true;
                                } else {
                                    this.showAudit = false;
                                }
                                this.GetClient(this.CaseInfoData.clientId);
                                _context.next = 87;
                                break;

                            case 84:
                                console.log('数据为空');
                                this.placeHolder.placeHolderImageIndex = 0;
                                this.placeHolder.placeHolderShow = true;

                            case 87:
                                this.$apply();
                                return _context.abrupt('break', 99);

                            case 89:
                                console.log('您没有权限');
                                this.placeHolder.placeHolderImageIndex = 3;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();
                                return _context.abrupt('break', 99);

                            case 94:
                                console.log('数据请求错误');
                                this.placeHolder.placeHolderImageIndex = 1;
                                this.placeHolder.placeHolderShow = true;
                                this.$apply();

                            case 98:
                                return _context.abrupt('break', 99);

                            case 99:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseInfo(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetCaseInfo;
        }()
        //律师

    }, {
        key: 'getLawyer',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(caseLawyerList) {
                var index, http, resData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.t0 = regeneratorRuntime.keys(caseLawyerList);

                            case 1:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 59;
                                    break;
                                }

                                index = _context2.t1.value;

                                // this.GetAvatar();
                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + caseLawyerList[index].userId;
                                _context2.next = 6;
                                return _ajax2.default.getUserAvatar(http);

                            case 6:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    caseLawyerList[index]['avatar'] = resData.tempFilePath;
                                }
                                _context2.t2 = caseLawyerList[index].lawyerRole;
                                _context2.next = _context2.t2 === 'M' ? 11 : _context2.t2 === '0' ? 16 : _context2.t2 === '1' ? 21 : _context2.t2 === '2' ? 26 : _context2.t2 === '3' ? 31 : _context2.t2 === '4' ? 36 : _context2.t2 === '5' ? 41 : _context2.t2 === '6' ? 46 : _context2.t2 === 'C' ? 51 : 56;
                                break;

                            case 11:
                                this.lawyer[0].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[0].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[0].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[0].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 16:
                                this.lawyer[1].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[1].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[1].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[1].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 21:
                                this.lawyer[2].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[2].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[2].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[2].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 26:
                                this.lawyer[3].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[3].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[3].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[3].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 31:
                                this.lawyer[4].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[4].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[4].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[4].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 36:
                                this.lawyer[5].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[5].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[5].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[5].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 41:
                                this.lawyer[6].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[6].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[6].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[6].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 46:
                                this.lawyer[7].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[7].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[7].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[7].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 51:
                                this.lawyer[8].chargeRatio.push(caseLawyerList[index].chargeRatio);
                                this.lawyer[8].allocRatio.push(caseLawyerList[index].allocRatio);
                                this.lawyer[8].employeeName.push(caseLawyerList[index].employeeName);
                                this.lawyer[8].avatar.push(caseLawyerList[index].avatar);
                                return _context2.abrupt('break', 57);

                            case 56:
                                return _context2.abrupt('break', 57);

                            case 57:
                                _context2.next = 1;
                                break;

                            case 59:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getLawyer(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getLawyer;
        }()
        //获取客户信息

    }, {
        key: 'GetClient',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(clientId) {
                var data, resData, clientData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    id: clientId
                                };
                                _context3.next = 3;
                                return _ajax2.default.getData('/api/services/web/client/GetClient', 'post', data);

                            case 3:
                                resData = _context3.sent;

                                if (resData.statusCode == 200) {
                                    clientData = resData.data.result;

                                    if (clientData.birthday) {
                                        clientData.birthday = clientData.birthday.split('T')[0];
                                    }
                                    this.clientData = clientData;
                                } else {
                                    wx.showToast({
                                        title: '网络出差中！',
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function GetClient(_x3) {
                return _ref4.apply(this, arguments);
            }

            return GetClient;
        }()
        // //获取律师头像
        // async GetAvatar(id, index) {
        //     var http = '/api/services/web/personal/GetEmployeePhoto?id=' + id
        //     var resData = await ajax.getUserAvatar(http)
        //     if (resData.statusCode == 200) {
        //         return resData.tempFilePath;
        //     }
        // }
        //检索结果

    }, {
        key: 'GetOrderItem',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
                var data, resData, OrderItemData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                data = {
                                    id: id
                                };
                                _context4.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseOrder/GetOrderItem', 'post', data);

                            case 3:
                                resData = _context4.sent;

                                if (resData.statusCode == 200) {
                                    OrderItemData = resData.data.result.conflictList[0];

                                    console.log(OrderItemData);
                                    this.OrderItemData = OrderItemData;
                                    this.GetCaseInfo(OrderItemData.caseId);
                                    //完成时间
                                    OrderItemData.completeTime = (0, _api.formatTimeSymbol)(this.OrderItemData.completeTime, '/');
                                    if (this.OrderItemData.conflictCondition.conflictList.length > 0) {
                                        //关键字中文
                                        this.OrderItemData.conflictCondition.conflictList[0].searchName = this.OrderItemData.conflictCondition.conflictList[0].searchName.split(',');
                                        //关键字英文 
                                        this.OrderItemData.conflictCondition.conflictList[0].searchEnName = this.OrderItemData.conflictCondition.conflictList[0].searchEnName.split(',');
                                    }
                                    wx.setStorage({
                                        key: 'OrderItem',
                                        data: resData.data.result
                                    });
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function GetOrderItem(_x4) {
                return _ref5.apply(this, arguments);
            }

            return GetOrderItem;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.GetOrderItem(options.id);
            this.$apply();
        }
    }]);

    return caseDetailAudit;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(caseDetailAudit , 'pages/modules/auditModules/caseAudit/caseDetailAudit/caseDetailAudit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VEZXRhaWxBdWRpdC5qcyJdLCJuYW1lcyI6WyJjYXNlRGV0YWlsQXVkaXQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwbGFjZUhvbGRlckltYWdlIiwibmF2YmFyIiwiZGF0YSIsIm5vRGF0YUltYWdlIiwiYWRkT3BhY2l0eSIsImN1cnJlbnRUYWIiLCJuYXZiYXJzIiwic2hvd0F1ZGl0IiwiQ2FzZUluZm9EYXRhIiwiY2xpZW50RGF0YSIsImxhd3llciIsIm5hbWUiLCJjaGFyZ2VSYXRpbyIsImFsbG9jUmF0aW8iLCJlbXBsb3llZU5hbWUiLCJhdmF0YXIiLCJPcmRlckl0ZW1EYXRhIiwibWV0aG9kcyIsInRvQ2xpZW50TGlua01hbiIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImNsaWVudElkIiwiaWQiLCJ0b3VjaFN0YXJ0IiwiJGFwcGx5IiwidG91Y2hFbmQiLCJwcmVWaWV3IiwiZmlsZUlkIiwiZmlsZUNsYXNzIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiaHR0cCIsImFqYXgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJtaXhpbnMiLCJ3YXRjaCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsImxlbmd0aCIsInNlY3JldExldmVsIiwiYWdlbmN5QXV0aG9yaXR5Iiwic3BsaXQiLCJjYXNlQ29udGFjdHNMaXN0IiwiaW5kZXgiLCJnZXRVc2VyQXZhdGFyIiwibGlua2VyUGhvdG8iLCJ0ZW1wRmlsZVBhdGgiLCJjYXNlTGF3eWVyTGlzdCIsImdldExhd3llciIsImNhc2VDb250cmFjdExpc3QiLCJleHRlbnNpb24iLCJmaWxlSWNvbiIsImZpbGVDb2xvciIsImNyZWF0aW9uVGltZSIsInN0YXR1cyIsIkdldENsaWVudCIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVyU2hvdyIsInVzZXJJZCIsImxhd3llclJvbGUiLCJwdXNoIiwiYmlydGhkYXkiLCJjb25mbGljdExpc3QiLCJHZXRDYXNlSW5mbyIsImNhc2VJZCIsImNvbXBsZXRlVGltZSIsImNvbmZsaWN0Q29uZGl0aW9uIiwic2VhcmNoTmFtZSIsInNlYXJjaEVuTmFtZSIsInNldFN0b3JhZ2UiLCJrZXkiLCJvcHRpb25zIiwiR2V0T3JkZXJJdGVtIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxlOzs7Ozs7Ozs7Ozs7Ozs0TUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxvQkFBbUIsRUFBQywyQkFBMEIsYUFBM0IsRUFBeUMsMkJBQTBCLGFBQW5FLEVBQXBCLEVBQXNHLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUEvRyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyx3REFERTtBQUVGQztBQUZFLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHlCQUFhLGtDQURWO0FBRUhDLHdCQUFZLENBRlQ7QUFHSEMsd0JBQVksQ0FIVDtBQUlIQyxxQkFBUyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixNQUF6QixDQUpOO0FBS0hDLHVCQUFXLEtBTFIsRUFLZTtBQUNsQkMsMEJBQWMsRUFOWDtBQU9IQyx3QkFBWSxFQVBUO0FBUUhDLG9CQUFRLENBQUM7QUFDREMsc0JBQU0sS0FETDtBQUVEQyw2QkFBYSxFQUZaO0FBR0RDLDRCQUFZLEVBSFg7QUFJREMsOEJBQWMsRUFKYjtBQUtEQyx3QkFBUTtBQUxQLGFBQUQsRUFPSjtBQUNJSixzQkFBTSxNQURWO0FBRUlDLDZCQUFh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Q1osaUJBQUtDLFlBQUwsQ0FBa0JELFFBQVE1RCxFQUExQjtBQUNBLGlCQUFLRSxNQUFMO0FBQ0g7Ozs7RUE1WXdDNEQsZUFBS0MsSTs7a0JBQTdCM0YsZSIsImZpbGUiOiJjYXNlRGV0YWlsQXVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJ1xuICAgIGltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvbWl4aW4uanMnO1xuICAgIGltcG9ydCBuYXZiYXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuICAgIGltcG9ydCB7XG4gICAgICAgIGZvcm1hdFRpbWVTeW1ib2xcbiAgICB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FwaS5qcyc7XG4gICAgaW1wb3J0IHBsYWNlSG9sZGVySW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wbGFjZUhvbGRlckltYWdlJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXNlRGV0YWlsQXVkaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGxhY2VIb2xkZXJJbWFnZVwiOntcInYtYmluZDpwbGFjZUhvbGRlci5zeW5jXCI6XCJwbGFjZUhvbGRlclwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcInBsYWNlSG9sZGVyXCJ9LFwibmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZiYXJzLm9uY2VcIjpcIm5hdmJhcnNcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJjdXJyZW50VGFiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHBsYWNlSG9sZGVySW1hZ2UsXG4gICAgICAgICAgICBuYXZiYXIsXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBub0RhdGFJbWFnZTogJy4uLy4uLy4uLy4uLy4uL2ltYWdlcy9ub0RhdGEucG5nJyxcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwLFxuICAgICAgICAgICAgbmF2YmFyczogWyfmoYjku7YnLCAn5a6i5oi3JywgJ+W+i+W4iCcsICflkIjlkIwnLCAn5qOA57Si57uT5p6cJ10sXG4gICAgICAgICAgICBzaG93QXVkaXQ6IGZhbHNlLCAvL+WuoeaguOaMiemSruaYr+WQpuaYvuekulxuICAgICAgICAgICAgQ2FzZUluZm9EYXRhOiB7fSxcbiAgICAgICAgICAgIGNsaWVudERhdGE6IHt9LFxuICAgICAgICAgICAgbGF3eWVyOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6LSf6LSj5Lq6JyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Li75Yqe5b6L5biIJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y2P5Yqe5b6L5biIJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn552j5Yqe5b6L5biIJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5qGI5rqQ5Lq6JyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5b6L5biI5Yqp55CGJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Lia5Yqh56eY5LmmJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5om/5Yqe5b6L5biIJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn55Sz6K+35Lq6JyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUmF0aW86IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxvY1JhdGlvOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgT3JkZXJJdGVtRGF0YToge31cbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIOi3s+i9rOiHs+WuouaIt+aWueacrOahiOiBlOezu+S6ulxuICAgICAgICAgICAgdG9DbGllbnRMaW5rTWFuKCl7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogJy4uLy4uLy4uL215Y2xpZW50L2NsaWVudERldGFpbC9pdGVtRGV0YWlsL2NsaWVudExpbmttYW4/aWQ9JysgdGhpcy5DYXNlSW5mb0RhdGEuY2xpZW50SWQrJyZjYXNlSWQ9Jyt0aGlzLkNhc2VJbmZvRGF0YS5pZH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi9hdWRpdENhc2UnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/mlofku7bpooTop4hcbiAgICAgICAgICAgIHByZVZpZXcoZmlsZUlkLCBmaWxlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBmaWxlQ2xhc3MgPSBmaWxlQ2xhc3MucmVwbGFjZSgnLicsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlQ2xhc3MgPT0gJ3BkZicgfHwgZmlsZUNsYXNzID09ICdwbmcnIHx8IGZpbGVDbGFzcyA9PSAneHNsJyB8fCBmaWxlQ2xhc3MgPT0gJ3hsc3gnIHx8IGZpbGVDbGFzcyA9PSAnanBnJyB8fCBmaWxlQ2xhc3MgPT0gJ2RvYycgfHwgZmlsZUNsYXNzID09ICdkb2N4Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9kb2N1bWVudC9HZXREb2N1bWVudEZpbGU/aWQ9JyArIGZpbGVJZDtcbiAgICAgICAgICAgICAgICAgICAgYWpheC5wcmVWaWV3KGh0dHAsIGZpbGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pqC5LiN5pSv5oyB5q2k5paH5Lu26aKE6KeI77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgY3VycmVudFRhYigpIHtcbiAgICAgICAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v56uL5qGI5a6h5qC45L+h5oGv5pWw5o2uXG4gICAgICAgIGFzeW5jIEdldENhc2VJbmZvKGlkKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2UvR2V0Q2FzZUluZm8nLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc0RhdGEuc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5kYXRhLnJlc3VsdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDYXNlSW5mb0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/kv53lr4bnirbmgIHpopzoibJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoQ2FzZUluZm9EYXRhLnNlY3JldExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhc2VJbmZvRGF0YVsnc2VjcmV0TGV2ZWxDb2xvciddID0gJyMwNjk0MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXNlSW5mb0RhdGFbJ3NlY3JldExldmVsQ29sb3InXSA9ICcjMDA5ZGZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUluZm9EYXRhWydzZWNyZXRMZXZlbENvbG9yJ10gPSAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhc2VJbmZvRGF0YVsnc2VjcmV0TGV2ZWxDb2xvciddID0gJyNlMjAwMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy/ku6PnkIbmnYPpmZBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDYXNlSW5mb0RhdGEuYWdlbmN5QXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUluZm9EYXRhLmFnZW5jeUF1dGhvcml0eSA9IENhc2VJbmZvRGF0YS5hZ2VuY3lBdXRob3JpdHkuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXNlSW5mb0RhdGEuYWdlbmN5QXV0aG9yaXR5ID0gWyfmnKrloavlhpknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a6i5oi36IGU57O75Lq65aS05YOPXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBDYXNlSW5mb0RhdGEuY2FzZUNvbnRhY3RzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IENhc2VJbmZvRGF0YS5jYXNlQ29udGFjdHNMaXN0W2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jbGllbnRDb250YWN0cy9HZXRDbGllbnRDb250YWN0QXZhdGFyP2lkPScgKyBpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlua2VyUGhvdG8gPSBhd2FpdCBhamF4LmdldFVzZXJBdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtlclBob3RvLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhc2VJbmZvRGF0YS5jYXNlQ29udGFjdHNMaXN0W2luZGV4XVsnYXZhdGFyJ10gPSBsaW5rZXJQaG90by50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfpg6jliIbmlbDmja7lvILluLjvvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FzZUxhd3llckxpc3QgPSBDYXNlSW5mb0RhdGEuY2FzZUxhd3llckxpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+W+i+W4iFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRMYXd5ZXIoY2FzZUxhd3llckxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/lkIjlkIxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXNlQ29udHJhY3RMaXN0ID0gQ2FzZUluZm9EYXRhLmNhc2VDb250cmFjdExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBjYXNlQ29udHJhY3RMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZXh0ZW5zaW9uID0gY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcucGRmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVJY29uID0gJ2ljb24tcGRmcG5nMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlQ29sb3IgPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnBwdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlSWNvbiA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZmlsZUNvbG9yID0gJyNlMjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5wcHR4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVJY29uID0gJ2ljb24tcGRmcG5nMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlQ29sb3IgPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnBuZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlSWNvbiA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZmlsZUNvbG9yID0gJyNlMjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy54bHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZmlsZUljb24gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVDb2xvciA9ICcjMDY5NDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcueGxzeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlSWNvbiA9ICdpY29uLWV4bDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZmlsZUNvbG9yID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2N4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVJY29uID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZmlsZUNvbG9yID0gJyMwMDlkZmYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUNvbnRyYWN0TGlzdFtpbmRleF0uZmlsZUljb24gPSAnaWNvbi13b2xkMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlQ29sb3IgPSAnIzAwOWRmZic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLmpwZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlSWNvbiA9ICdpY29uLWpwZ2dlc2hpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVDb2xvciA9ICcjZmY5OTAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcubXA0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVJY29uID0gJ2ljb24tc2hpcGlud2Vuamlhbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5maWxlQ29sb3IgPSAnI2ZjNTk1OSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVJY29uID0gJ2ljb24td2Vpemhpd2Vuamlhbmdlc2hpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmZpbGVDb2xvciA9ICcjN2E3YTdhJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlQ29udHJhY3RMaXN0W2luZGV4XS5jcmVhdGlvblRpbWUgPSBmb3JtYXRUaW1lU3ltYm9sKGNhc2VDb250cmFjdExpc3RbaW5kZXhdLmNyZWF0aW9uVGltZSwgJy8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYXNlSW5mb0RhdGEgPSBDYXNlSW5mb0RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5DYXNlSW5mb0RhdGEuc3RhdHVzID09ICdOJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0F1ZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QXVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0Q2xpZW50KHRoaXMuQ2FzZUluZm9EYXRhLmNsaWVudElkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7kuLrnqbonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aCqOayoeacieadg+mZkCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7or7fmsYLplJnor68nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+W+i+W4iFxuICAgICAgICBhc3luYyBnZXRMYXd5ZXIoY2FzZUxhd3llckxpc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIGNhc2VMYXd5ZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5HZXRBdmF0YXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9HZXRFbXBsb3llZVBob3RvP2lkPScgKyBjYXNlTGF3eWVyTGlzdFtpbmRleF0udXNlcklkXG4gICAgICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldFVzZXJBdmF0YXIoaHR0cClcbiAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlTGF3eWVyTGlzdFtpbmRleF1bJ2F2YXRhciddID0gcmVzRGF0YS50ZW1wRmlsZVBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2FzZUxhd3llckxpc3RbaW5kZXhdLmxhd3llclJvbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llclswXS5jaGFyZ2VSYXRpby5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5jaGFyZ2VSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzBdLmFsbG9jUmF0aW8ucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uYWxsb2NSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzBdLmVtcGxveWVlTmFtZS5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5lbXBsb3llZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llclswXS5hdmF0YXIucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbMV0uY2hhcmdlUmF0aW8ucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uY2hhcmdlUmF0aW8pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llclsxXS5hbGxvY1JhdGlvLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmFsbG9jUmF0aW8pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llclsxXS5lbXBsb3llZU5hbWUucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uZW1wbG95ZWVOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbMV0uYXZhdGFyLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmF2YXRhcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzJdLmNoYXJnZVJhdGlvLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmNoYXJnZVJhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbMl0uYWxsb2NSYXRpby5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5hbGxvY1JhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbMl0uZW1wbG95ZWVOYW1lLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmVtcGxveWVlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzJdLmF2YXRhci5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llclszXS5jaGFyZ2VSYXRpby5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5jaGFyZ2VSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzNdLmFsbG9jUmF0aW8ucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uYWxsb2NSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzNdLmVtcGxveWVlTmFtZS5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5lbXBsb3llZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llclszXS5hdmF0YXIucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbNF0uY2hhcmdlUmF0aW8ucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uY2hhcmdlUmF0aW8pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llcls0XS5hbGxvY1JhdGlvLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmFsbG9jUmF0aW8pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llcls0XS5lbXBsb3llZU5hbWUucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uZW1wbG95ZWVOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbNF0uYXZhdGFyLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmF2YXRhcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzVdLmNoYXJnZVJhdGlvLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmNoYXJnZVJhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbNV0uYWxsb2NSYXRpby5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5hbGxvY1JhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbNV0uZW1wbG95ZWVOYW1lLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmVtcGxveWVlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzVdLmF2YXRhci5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llcls2XS5jaGFyZ2VSYXRpby5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5jaGFyZ2VSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzZdLmFsbG9jUmF0aW8ucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uYWxsb2NSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzZdLmVtcGxveWVlTmFtZS5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5lbXBsb3llZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llcls2XS5hdmF0YXIucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbN10uY2hhcmdlUmF0aW8ucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uY2hhcmdlUmF0aW8pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llcls3XS5hbGxvY1JhdGlvLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmFsbG9jUmF0aW8pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhd3llcls3XS5lbXBsb3llZU5hbWUucHVzaChjYXNlTGF3eWVyTGlzdFtpbmRleF0uZW1wbG95ZWVOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbN10uYXZhdGFyLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmF2YXRhcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzhdLmNoYXJnZVJhdGlvLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmNoYXJnZVJhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbOF0uYWxsb2NSYXRpby5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5hbGxvY1JhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXd5ZXJbOF0uZW1wbG95ZWVOYW1lLnB1c2goY2FzZUxhd3llckxpc3RbaW5kZXhdLmVtcGxveWVlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF3eWVyWzhdLmF2YXRhci5wdXNoKGNhc2VMYXd5ZXJMaXN0W2luZGV4XS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+iOt+WPluWuouaIt+S/oeaBr1xuICAgICAgICBhc3luYyBHZXRDbGllbnQoY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBjbGllbnRJZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NsaWVudC9HZXRDbGllbnQnLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnREYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihjbGllbnREYXRhLmJpcnRoZGF5KXtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50RGF0YS5iaXJ0aGRheT1jbGllbnREYXRhLmJpcnRoZGF5LnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnREYXRhID0gY2xpZW50RGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlh7rlt67kuK3vvIEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLy/ojrflj5blvovluIjlpLTlg49cbiAgICAgICAgLy8gYXN5bmMgR2V0QXZhdGFyKGlkLCBpbmRleCkge1xuICAgICAgICAvLyAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgaWRcbiAgICAgICAgLy8gICAgIHZhciByZXNEYXRhID0gYXdhaXQgYWpheC5nZXRVc2VyQXZhdGFyKGh0dHApXG4gICAgICAgIC8vICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiByZXNEYXRhLnRlbXBGaWxlUGF0aDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvL+ajgOe0oue7k+aenFxuICAgICAgICBhc3luYyBHZXRPcmRlckl0ZW0oaWQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VPcmRlci9HZXRPcmRlckl0ZW0nLFxuICAgICAgICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBPcmRlckl0ZW1EYXRhID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5jb25mbGljdExpc3RbMF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coT3JkZXJJdGVtRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5PcmRlckl0ZW1EYXRhID0gT3JkZXJJdGVtRGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLkdldENhc2VJbmZvKE9yZGVySXRlbURhdGEuY2FzZUlkKTtcbiAgICAgICAgICAgICAgICAvL+WujOaIkOaXtumXtFxuICAgICAgICAgICAgICAgIE9yZGVySXRlbURhdGEuY29tcGxldGVUaW1lID0gZm9ybWF0VGltZVN5bWJvbCh0aGlzLk9yZGVySXRlbURhdGEuY29tcGxldGVUaW1lLCAnLycpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuT3JkZXJJdGVtRGF0YS5jb25mbGljdENvbmRpdGlvbi5jb25mbGljdExpc3QubGVuZ3RoPjApIHtcbiAgICAgICAgICAgICAgICAgICAgLy/lhbPplK7lrZfkuK3mlodcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PcmRlckl0ZW1EYXRhLmNvbmZsaWN0Q29uZGl0aW9uLmNvbmZsaWN0TGlzdFswXS5zZWFyY2hOYW1lID0gdGhpcy5PcmRlckl0ZW1EYXRhLmNvbmZsaWN0Q29uZGl0aW9uLmNvbmZsaWN0TGlzdFswXS5zZWFyY2hOYW1lLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgLy/lhbPplK7lrZfoi7HmlocgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT3JkZXJJdGVtRGF0YS5jb25mbGljdENvbmRpdGlvbi5jb25mbGljdExpc3RbMF0uc2VhcmNoRW5OYW1lID0gdGhpcy5PcmRlckl0ZW1EYXRhLmNvbmZsaWN0Q29uZGl0aW9uLmNvbmZsaWN0TGlzdFswXS5zZWFyY2hFbk5hbWUuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnT3JkZXJJdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzRGF0YS5kYXRhLnJlc3VsdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuR2V0T3JkZXJJdGVtKG9wdGlvbnMuaWQpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==