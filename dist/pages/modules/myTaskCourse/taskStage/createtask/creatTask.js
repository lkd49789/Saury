'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _api = require('./../../../../../utils/cofig/api.js');

var _input = require('./../../../../../components/picker/input.js');

var _input2 = _interopRequireDefault(_input);

var _option = require('./../../../../../components/picker/option.js');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var creatTask = function (_wepy$page) {
    _inherits(creatTask, _wepy$page);

    function creatTask() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, creatTask);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = creatTask.__proto__ || Object.getPrototypeOf(creatTask)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Title": { "xmlns:v-bind": "", "v-bind:input.sync": "Title", "v-bind:inputValue.sync": "TitleValue", "v-bind:twoWayTitle.once": "TitleValue" }, "Description": { "v-bind:input.sync": "Description", "v-bind:inputValue.sync": "DescriptionValue", "v-bind:twoWayTitle.once": "DescriptionValue" }, "EmployeeId": { "v-bind:options.sync": "EmployeeId", "v-bind:index.sync": "EmployeeIdIndex", "v-bind:twoWayTitle.once": "EmployeeIdIndex" }, "Address": { "v-bind:input.sync": "Address", "v-bind:inputValue.sync": "AddressValue", "v-bind:twoWayTitle.once": "AddressValue" } }, _this.$events = {}, _this.components = {
            Title: _input2.default,
            Description: _input2.default,
            EmployeeId: _option2.default,
            Address: _input2.default
        }, _this.data = {
            addOpacity: 1,
            category: '',
            submitData: {
                // StageId: "a36c8e32292b0016",
                // Id: "temp_8254025ccc8eceb6"
                // ProjectId: "59C85492-438E-E811-8884-F6126329C109"
                // checkItems: [{id: "temp_1", title: "1zi", sort: 0, checked: false, isCompleted: "N"},…]
            },
            Title: {
                title: '标题',
                name: 'Title',
                options: false,
                warning: false
                // type:'digit',
            },
            TitleValue: '',
            Description: {
                title: '任务详情',
                name: 'Description',
                options: false,
                warning: false
                // type:'digit',
            },
            DescriptionValue: '',
            EmployeeId: {
                title: '分配人',
                name: 'EmployeeId',
                value: [],
                displayText: [],
                warning: false
            },
            EmployeeIdIndex: -1,
            Participant: {
                value: [],
                displayText: [],
                warning: false,
                ParticipantArray: []
            },
            ParticipantIndex: -1,
            Tag: {
                title: '标签',
                name: 'Tag',
                options: false,
                TagItem: []
            },
            TagValue: '',
            Address: {
                title: '地址',
                name: 'Address',
                options: false,
                warning: false
                // type:'digit',
            },
            AddressValue: '',
            //添加子任务
            isShowChild: false,
            childTask: [],
            childTitle: '',
            throught: []
            //标签
        }, _this.methods = {
            touchStart: function touchStart() {
                this.addOpacity = 0.6;
                this.$apply();
            },
            touchEnd: function touchEnd() {
                this.addOpacity = 1;
                var condition1 = this.JudgeIsTrue(this.submitData.Title && this.submitData.Description && this.submitData.Participant);
                var condition2 = this.JudgeIsTrue(this.submitData.Title && this.submitData.Description && this.category == '2' && this.submitData.Participant);
                console.log(condition1, condition2);
                if (condition1 || condition2) {
                    wx.setStorageSync('taskNextPage', this.submitData);
                    wx.navigateTo({
                        url: './creatTaskAll'
                    });
                } else {
                    if (!this.submitData.Title) {
                        this.Title.warning = true;
                    }
                    if (!this.submitData.Description) {
                        this.Description.warning = true;
                    }
                    if (!this.submitData.Participant) {
                        this.Participant.warning = true;
                    }
                    if (!this.submitData.EmployeeId) {
                        this.EmployeeId.warning = true;
                    }
                }
            },
            bindPickerChange: function bindPickerChange(e) {
                var chooseIndex = Number(e.detail.value);
                this.Participant.warning = false;
                this.Participant.ParticipantArray.push(chooseIndex);
                (0, _api.myDistinct)(this.Participant.ParticipantArray);
                var Pvalue = [];
                for (var index in this.Participant.ParticipantArray) {
                    Pvalue[index] = this.Participant.value[this.Participant.ParticipantArray[index]];
                }
                this.submitData.Participant = Pvalue.toString();
                this.$apply();
            },
            deletePItem: function deletePItem(index) {
                this.Participant.ParticipantArray.splice(index, 1);
                var Pvalue = this.submitData.Participant.split(',');
                Pvalue.splice(index, 1);
                Pvalue = Pvalue.toString();
                this.submitData.Participant = Pvalue;
                this.$apply();
            },
            addChild: function addChild() {
                this.isShowChild = !this.isShowChild;
                this.getScroll();
                this.$apply();
            },
            childBindconfirm: function childBindconfirm() {
                if (this.childTitle) {
                    var childData = {
                        isCompleted: 'N',
                        checked: false,
                        id: 'temp_' + this.childTask.length,
                        sort: this.childTask.length,
                        title: this.childTitle
                    };
                    this.childTitle = '';
                    this.childTask.push(childData);
                    this.throught.push(false);
                    this.submitData.checkItems = this.childTask;
                    this.isShowChild = !this.isShowChild;
                    this.$apply();
                } else {
                    this.isShowChild = !this.isShowChild;
                }
            },
            childBindinput: function childBindinput(e) {
                if (e.detail.value) {
                    this.childTitle = e.detail.value;
                }
                this.$apply();
            },
            isCompleted: function isCompleted(index, checked) {
                console.log(checked);
                if (checked) {
                    this.childTask[index].isCompleted = 'N';
                    this.childTask[index].checked = false;
                    this.throught[index] = false;
                } else {
                    this.childTask[index].isCompleted = 'Y';
                    this.childTask[index].checked = true;
                    this.throught[index] = true;
                }
                this.submitData.checkItems = this.childTask;
                this.$apply();
            },
            deleteChild: function deleteChild(index) {
                this.childTask.splice(index, 1);
                this.submitData.checkItems = this.childTask;
                this.$apply();
            },
            tagBindconfirm: function tagBindconfirm() {
                if (this.TagValue) {
                    this.Tag.TagItem.push(this.TagValue);
                    this.Tag.TagItem = (0, _api.myDistinct)(this.Tag.TagItem);
                    this.TagValue = '';
                    this.submitData.Tag = this.Tag.TagItem.toString();
                    this.$apply();
                } else {
                    return;
                }
            },
            tagBindinput: function tagBindinput(e) {
                if (e.detail.value) {
                    this.TagValue = e.detail.value;
                }
                this.$apply();
            },
            deleteTagItem: function deleteTagItem(index) {
                this.Tag.TagItem.splice(index, 1);
                this.submitData.Tag = this.Tag.TagItem.toString();
                this.$apply();
            }
        }, _this.watch = {
            TitleValue: function TitleValue(value) {
                this.submitData.Title = value;
                this.$apply();
            },
            DescriptionValue: function DescriptionValue(value) {
                this.submitData.Description = value;
                this.$apply();
            },
            EmployeeIdIndex: function EmployeeIdIndex(index) {
                this.submitData.EmployeeId = this.EmployeeId.value[index];
                this.$apply();
            },
            AddressValue: function AddressValue(value) {
                this.submitData.Address = value;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(creatTask, [{
        key: 'getScroll',
        value: function getScroll() {
            var that = this;
            //   if(that.scrollTop )
            wx.createSelectorQuery().select('.winHeight').boundingClientRect(function (rect) {
                wx.pageScrollTo({
                    scrollTop: rect.bottom,
                    duration: 0
                });
            }).exec();
        }
    }, {
        key: 'JudgeIsTrue',
        value: function JudgeIsTrue(condition) {
            return condition ? true : false;
        }
    }, {
        key: 'GetCaseLawyers',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(projectId) {
                var data, resData, CaseLawyersData, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    caseId: projectId
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseLawyer/GetCaseLawyers', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    CaseLawyersData = resData.data.result;

                                    if (CaseLawyersData.length > 0) {
                                        //律师/参与人
                                        for (index in CaseLawyersData) {
                                            this.EmployeeId.displayText[index] = CaseLawyersData[index].employeeName;
                                            this.EmployeeId.value[index] = CaseLawyersData[index].userId;
                                            this.Participant.displayText[index] = CaseLawyersData[index].employeeName;
                                            this.Participant.value[index] = CaseLawyersData[index].userId;
                                        }
                                        // console.log()
                                        // this.submitData.EmployeeId = this.EmployeeId.value[0];
                                        (0, _api.myDistinct)(this.EmployeeId.displayText);
                                        (0, _api.myDistinct)(this.EmployeeId.value);
                                        (0, _api.myDistinct)(this.Participant.displayText);
                                        (0, _api.myDistinct)(this.Participant.value);
                                        for (index in this.EmployeeId.value) {
                                            if (this.EmployeeId.value[index] == this.$parent.global.userInfo.id) {
                                                this.EmployeeIdIndex = index;
                                            }
                                        }
                                        this.$apply();
                                    } else {
                                        this.GetGeneralComboboxList();
                                    }
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message,
                                        icon: 'none',
                                        duration: 1500,
                                        mask: false
                                    });
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseLawyers(_x) {
                return _ref2.apply(this, arguments);
            }

            return GetCaseLawyers;
        }()
    }, {
        key: 'GetGeneralComboboxList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var resData, CaseLawyersData, index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralComboboxList', 'post', {
                                    name: "",
                                    class: "employee",
                                    parentId: "",
                                    shortCode: ''
                                });

                            case 2:
                                resData = _context2.sent;

                                if (resData.statusCode == 200) {
                                    CaseLawyersData = resData.data.result;
                                    //律师/参与人

                                    for (index in CaseLawyersData) {
                                        this.EmployeeId.displayText[index] = CaseLawyersData[index].displayText;
                                        this.EmployeeId.value[index] = CaseLawyersData[index].value;
                                        this.Participant.displayText[index] = CaseLawyersData[index].displayText;
                                        this.Participant.value[index] = CaseLawyersData[index].value;
                                    }
                                    for (index in this.EmployeeId.value) {
                                        if (this.EmployeeId.value[index] == this.$parent.global.userInfo.id) {
                                            this.EmployeeIdIndex = index;
                                        }
                                    }
                                    // console.log()
                                    // this.submitData.EmployeeId = this.EmployeeId.value[0];
                                    this.$apply();
                                } else {
                                    wx.showToast({
                                        title: resData.data.error.message, //提示的内容,
                                        icon: 'none', //图标,
                                        duration: 2000, //延迟时间,
                                        mask: true, //显示透明蒙层，防止触摸穿透,
                                        success: function success(res) {}
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function GetGeneralComboboxList() {
                return _ref3.apply(this, arguments);
            }

            return GetGeneralComboboxList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            console.log(options);
            var projectId = options.projectId;
            this.submitData.ProjectId = options.projectId;
            this.submitData.currentStage = options.currentStage;
            this.category = options.category;
            var time = new Date().getTime();
            this.submitData.Id = 'temp_' + time; //生成Id
            this.GetCaseLawyers(projectId);
            this.$apply();
        }
    }]);

    return creatTask;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(creatTask , 'pages/modules/myTaskCourse/taskStage/createtask/creatTask'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0VGFzay5qcyJdLCJuYW1lcyI6WyJjcmVhdFRhc2siLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiRW1wbG95ZWVJZCIsIkFkZHJlc3MiLCJkYXRhIiwiYWRkT3BhY2l0eSIsImNhdGVnb3J5Iiwic3VibWl0RGF0YSIsInRpdGxlIiwibmFtZSIsIm9wdGlvbnMiLCJ3YXJuaW5nIiwiVGl0bGVWYWx1ZSIsIkRlc2NyaXB0aW9uVmFsdWUiLCJ2YWx1ZSIsImRpc3BsYXlUZXh0IiwiRW1wbG95ZWVJZEluZGV4IiwiUGFydGljaXBhbnQiLCJQYXJ0aWNpcGFudEFycmF5IiwiUGFydGljaXBhbnRJbmRleCIsIlRhZyIsIlRhZ0l0ZW0iLCJUYWdWYWx1ZSIsIkFkZHJlc3NWYWx1ZSIsImlzU2hvd0NoaWxkIiwiY2hpbGRUYXNrIiwiY2hpbGRUaXRsZSIsInRocm91Z2h0IiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCIkYXBwbHkiLCJ0b3VjaEVuZCIsImNvbmRpdGlvbjEiLCJKdWRnZUlzVHJ1ZSIsImNvbmRpdGlvbjIiLCJjb25zb2xlIiwibG9nIiwid3giLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImNob29zZUluZGV4IiwiTnVtYmVyIiwiZGV0YWlsIiwicHVzaCIsIlB2YWx1ZSIsImluZGV4IiwidG9TdHJpbmciLCJkZWxldGVQSXRlbSIsInNwbGljZSIsInNwbGl0IiwiYWRkQ2hpbGQiLCJnZXRTY3JvbGwiLCJjaGlsZEJpbmRjb25maXJtIiwiY2hpbGREYXRhIiwiaXNDb21wbGV0ZWQiLCJjaGVja2VkIiwiaWQiLCJsZW5ndGgiLCJzb3J0IiwiY2hlY2tJdGVtcyIsImNoaWxkQmluZGlucHV0IiwiZGVsZXRlQ2hpbGQiLCJ0YWdCaW5kY29uZmlybSIsInRhZ0JpbmRpbnB1dCIsImRlbGV0ZVRhZ0l0ZW0iLCJ3YXRjaCIsInRoYXQiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImJvdHRvbSIsImR1cmF0aW9uIiwiZXhlYyIsImNvbmRpdGlvbiIsInByb2plY3RJZCIsImNhc2VJZCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJDYXNlTGF3eWVyc0RhdGEiLCJyZXN1bHQiLCJlbXBsb3llZU5hbWUiLCJ1c2VySWQiLCIkcGFyZW50IiwiZ2xvYmFsIiwidXNlckluZm8iLCJHZXRHZW5lcmFsQ29tYm9ib3hMaXN0Iiwic2hvd1RvYXN0IiwiZXJyb3IiLCJtZXNzYWdlIiwiaWNvbiIsIm1hc2siLCJjbGFzcyIsInBhcmVudElkIiwic2hvcnRDb2RlIiwic3VjY2VzcyIsIlByb2plY3RJZCIsImN1cnJlbnRTdGFnZSIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIklkIiwiR2V0Q2FzZUxhd3llcnMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLDBCQUF5QixZQUF4RSxFQUFxRiwyQkFBMEIsWUFBL0csRUFBVCxFQUFzSSxlQUFjLEVBQUMscUJBQW9CLGFBQXJCLEVBQW1DLDBCQUF5QixrQkFBNUQsRUFBK0UsMkJBQTBCLGtCQUF6RyxFQUFwSixFQUFpUixjQUFhLEVBQUMsdUJBQXNCLFlBQXZCLEVBQW9DLHFCQUFvQixpQkFBeEQsRUFBMEUsMkJBQTBCLGlCQUFwRyxFQUE5UixFQUFxWixXQUFVLEVBQUMscUJBQW9CLFNBQXJCLEVBQStCLDBCQUF5QixjQUF4RCxFQUF1RSwyQkFBMEIsY0FB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QixHQUE0QjdGLFFBQVFzRSxTQUFwQztBQUNBLGlCQUFLekUsVUFBTCxDQUFnQmlHLFlBQWhCLEdBQStCOUYsUUFBUThGLFlBQXZDO0FBQ0EsaUJBQUtsRyxRQUFMLEdBQWdCSSxRQUFRSixRQUF4QjtBQUNBLGdCQUFJbUcsT0FBTyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBWDtBQUNBLGlCQUFLcEcsVUFBTCxDQUFnQnFHLEVBQWhCLEdBQXFCLFVBQVVILElBQS9CLENBUFksQ0FPeUI7QUFDckMsaUJBQUtJLGNBQUwsQ0FBb0I3QixTQUFwQjtBQUNBLGlCQUFLbEQsTUFBTDtBQUNIOzs7O0VBOVRrQ2dGLGVBQUtDLEk7O2tCQUF2QnBILFMiLCJmaWxlIjoiY3JlYXRUYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgaW1wb3J0IHtcbiAgICAgICAgbXlEaXN0aW5jdFxuICAgIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYXBpLmpzJztcbiAgICBpbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvaW5wdXQnO1xuICAgIGltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgaW1wb3J0IEVtcGxveWVlSWQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9waWNrZXIvb3B0aW9uJztcbiAgICBpbXBvcnQgQWRkcmVzcyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BpY2tlci9pbnB1dCc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRUYXNrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlRpdGxlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbnB1dC5zeW5jXCI6XCJUaXRsZVwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiVGl0bGVWYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIlRpdGxlVmFsdWVcIn0sXCJEZXNjcmlwdGlvblwiOntcInYtYmluZDppbnB1dC5zeW5jXCI6XCJEZXNjcmlwdGlvblwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiRGVzY3JpcHRpb25WYWx1ZVwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkRlc2NyaXB0aW9uVmFsdWVcIn0sXCJFbXBsb3llZUlkXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiRW1wbG95ZWVJZFwiLFwidi1iaW5kOmluZGV4LnN5bmNcIjpcIkVtcGxveWVlSWRJbmRleFwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcIkVtcGxveWVlSWRJbmRleFwifSxcIkFkZHJlc3NcIjp7XCJ2LWJpbmQ6aW5wdXQuc3luY1wiOlwiQWRkcmVzc1wiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiQWRkcmVzc1ZhbHVlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwiQWRkcmVzc1ZhbHVlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIFRpdGxlLFxuICAgICAgICAgICAgRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBFbXBsb3llZUlkLFxuICAgICAgICAgICAgQWRkcmVzcyxcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFkZE9wYWNpdHk6IDEsXG4gICAgICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgICAgICBzdWJtaXREYXRhOiB7XG4gICAgICAgICAgICAgICAgLy8gU3RhZ2VJZDogXCJhMzZjOGUzMjI5MmIwMDE2XCIsXG4gICAgICAgICAgICAgICAgLy8gSWQ6IFwidGVtcF84MjU0MDI1Y2NjOGVjZWI2XCJcbiAgICAgICAgICAgICAgICAvLyBQcm9qZWN0SWQ6IFwiNTlDODU0OTItNDM4RS1FODExLTg4ODQtRjYxMjYzMjlDMTA5XCJcbiAgICAgICAgICAgICAgICAvLyBjaGVja0l0ZW1zOiBbe2lkOiBcInRlbXBfMVwiLCB0aXRsZTogXCIxemlcIiwgc29ydDogMCwgY2hlY2tlZDogZmFsc2UsIGlzQ29tcGxldGVkOiBcIk5cIn0s4oCmXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmoIfpopgnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaXRsZScsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gdHlwZTonZGlnaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFRpdGxlVmFsdWU6ICcnLFxuICAgICAgICAgICAgRGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S7u+WKoeivpuaDhScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyB0eXBlOidkaWdpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRGVzY3JpcHRpb25WYWx1ZTogJycsXG4gICAgICAgICAgICBFbXBsb3llZUlkOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliIbphY3kuronLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbXBsb3llZUlkJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQ6IFtdLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRW1wbG95ZWVJZEluZGV4OiAtMSxcbiAgICAgICAgICAgIFBhcnRpY2lwYW50OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiBbXSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBQYXJ0aWNpcGFudEFycmF5OiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFBhcnRpY2lwYW50SW5kZXg6IC0xLFxuICAgICAgICAgICAgVGFnOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmoIfnrb4nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdUYWcnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFRhZ0l0ZW06IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVGFnVmFsdWU6ICcnLFxuICAgICAgICAgICAgQWRkcmVzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zyw5Z2AJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gdHlwZTonZGlnaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEFkZHJlc3NWYWx1ZTogJycsXG4gICAgICAgICAgICAvL+a3u+WKoOWtkOS7u+WKoVxuICAgICAgICAgICAgaXNTaG93Q2hpbGQ6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRUYXNrOiBbXSxcbiAgICAgICAgICAgIGNoaWxkVGl0bGU6ICcnLFxuICAgICAgICAgICAgdGhyb3VnaHQ6IFtdLFxuICAgICAgICAgICAgLy/moIfnrb5cbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMC42O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZGl0aW9uMT10aGlzLkp1ZGdlSXNUcnVlKHRoaXMuc3VibWl0RGF0YS5UaXRsZSAmJiB0aGlzLnN1Ym1pdERhdGEuRGVzY3JpcHRpb24gJiYgdGhpcy5zdWJtaXREYXRhLlBhcnRpY2lwYW50IClcbiAgICAgICAgICAgICAgICB2YXIgY29uZGl0aW9uMj10aGlzLkp1ZGdlSXNUcnVlKHRoaXMuc3VibWl0RGF0YS5UaXRsZSAgJiYgdGhpcy5zdWJtaXREYXRhLkRlc2NyaXB0aW9uICYmIHRoaXMuY2F0ZWdvcnkgPT0gJzInJiZ0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZGl0aW9uMSxjb25kaXRpb24yKVxuICAgICAgICAgICAgICAgIGlmICggY29uZGl0aW9uMXx8Y29uZGl0aW9uMikge1xuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndGFza05leHRQYWdlJywgdGhpcy5zdWJtaXREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuL2NyZWF0VGFza0FsbCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN1Ym1pdERhdGEuVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVGl0bGUud2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN1Ym1pdERhdGEuRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRGVzY3JpcHRpb24ud2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQud2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN1Ym1pdERhdGEuRW1wbG95ZWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZUlkLndhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHZhciBjaG9vc2VJbmRleCA9IE51bWJlcihlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC53YXJuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5QYXJ0aWNpcGFudEFycmF5LnB1c2goY2hvb3NlSW5kZXgpO1xuICAgICAgICAgICAgICAgIG15RGlzdGluY3QodGhpcy5QYXJ0aWNpcGFudC5QYXJ0aWNpcGFudEFycmF5KTtcbiAgICAgICAgICAgICAgICB2YXIgUHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5QYXJ0aWNpcGFudC5QYXJ0aWNpcGFudEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIFB2YWx1ZVtpbmRleF0gPSB0aGlzLlBhcnRpY2lwYW50LnZhbHVlW3RoaXMuUGFydGljaXBhbnQuUGFydGljaXBhbnRBcnJheVtpbmRleF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUGFydGljaXBhbnQgPSBQdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVBJdGVtKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC5QYXJ0aWNpcGFudEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdmFyIFB2YWx1ZSA9IHRoaXMuc3VibWl0RGF0YS5QYXJ0aWNpcGFudC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIFB2YWx1ZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgUHZhbHVlID0gUHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLlBhcnRpY2lwYW50ID0gUHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkQ2hpbGQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dDaGlsZCA9ICF0aGlzLmlzU2hvd0NoaWxkO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2Nyb2xsKClcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkQmluZGNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6ICdOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICd0ZW1wXycgKyB0aGlzLmNoaWxkVGFzay5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLmNoaWxkVGFzay5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5jaGlsZFRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRUaXRsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkVGFzay5wdXNoKGNoaWxkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3VnaHQucHVzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5jaGVja0l0ZW1zID0gdGhpcy5jaGlsZFRhc2s7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93Q2hpbGQgPSAhdGhpcy5pc1Nob3dDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd0NoaWxkID0gIXRoaXMuaXNTaG93Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkQmluZGlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZFRpdGxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNDb21wbGV0ZWQoaW5kZXgsIGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VkKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkVGFza1tpbmRleF0uaXNDb21wbGV0ZWQgPSAnTic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRUYXNrW2luZGV4XS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3VnaHRbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZFRhc2tbaW5kZXhdLmlzQ29tcGxldGVkID0gJ1knO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkVGFza1tpbmRleF0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3VnaHRbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLmNoZWNrSXRlbXMgPSB0aGlzLmNoaWxkVGFzaztcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZUNoaWxkKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZFRhc2suc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuY2hlY2tJdGVtcyA9IHRoaXMuY2hpbGRUYXNrO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnQmluZGNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuVGFnVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYWcuVGFnSXRlbS5wdXNoKHRoaXMuVGFnVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlRhZy5UYWdJdGVtID0gbXlEaXN0aW5jdCh0aGlzLlRhZy5UYWdJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYWdWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuVGFnID0gdGhpcy5UYWcuVGFnSXRlbS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdCaW5kaW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmRldGFpbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlRhZ1ZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlVGFnSXRlbShpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuVGFnLlRhZ0l0ZW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuVGFnID0gdGhpcy5UYWcuVGFnSXRlbS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhdGNoID0ge1xuICAgICAgICAgICAgVGl0bGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5UaXRsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRGVzY3JpcHRpb25WYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5EZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRW1wbG95ZWVJZEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkVtcGxveWVlSWQgPSB0aGlzLkVtcGxveWVlSWQudmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQWRkcmVzc1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXREYXRhLkFkZHJlc3MgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBnZXRTY3JvbGwoKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAvLyAgIGlmKHRoYXQuc2Nyb2xsVG9wIClcbiAgICAgICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoJy53aW5IZWlnaHQnKVxuICAgICAgICAgICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiByZWN0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmV4ZWMoKTtcbiAgICAgICAgfVxuICAgICAgICBKdWRnZUlzVHJ1ZShjb25kaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbj90cnVlOmZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIEdldENhc2VMYXd5ZXJzKHByb2plY3RJZCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2FzZUlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZUxhd3llci9HZXRDYXNlTGF3eWVycycsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBDYXNlTGF3eWVyc0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChDYXNlTGF3eWVyc0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL+W+i+W4iC/lj4LkuI7kurpcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gQ2FzZUxhd3llcnNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkVtcGxveWVlSWQuZGlzcGxheVRleHRbaW5kZXhdID0gQ2FzZUxhd3llcnNEYXRhW2luZGV4XS5lbXBsb3llZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkVtcGxveWVlSWQudmFsdWVbaW5kZXhdID0gQ2FzZUxhd3llcnNEYXRhW2luZGV4XS51c2VySWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBhcnRpY2lwYW50LmRpc3BsYXlUZXh0W2luZGV4XSA9IENhc2VMYXd5ZXJzRGF0YVtpbmRleF0uZW1wbG95ZWVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC52YWx1ZVtpbmRleF0gPSBDYXNlTGF3eWVyc0RhdGFbaW5kZXhdLnVzZXJJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3VibWl0RGF0YS5FbXBsb3llZUlkID0gdGhpcy5FbXBsb3llZUlkLnZhbHVlWzBdO1xuICAgICAgICAgICAgICAgICAgICBteURpc3RpbmN0KHRoaXMuRW1wbG95ZWVJZC5kaXNwbGF5VGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIG15RGlzdGluY3QodGhpcy5FbXBsb3llZUlkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbXlEaXN0aW5jdCh0aGlzLlBhcnRpY2lwYW50LmRpc3BsYXlUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgbXlEaXN0aW5jdCh0aGlzLlBhcnRpY2lwYW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5FbXBsb3llZUlkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5FbXBsb3llZUlkLnZhbHVlW2luZGV4XSA9PSB0aGlzLiRwYXJlbnQuZ2xvYmFsLnVzZXJJbmZvLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZUlkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2V0R2VuZXJhbENvbWJvYm94TGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBHZXRHZW5lcmFsQ29tYm9ib3hMaXN0KCkge1xuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRHZW5lcmFsQ29tYm9ib3hMaXN0JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZW1wbG95ZWVcIixcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0Q29kZTogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocmVzRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBDYXNlTGF3eWVyc0RhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8v5b6L5biIL+WPguS4juS6ulxuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIENhc2VMYXd5ZXJzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkVtcGxveWVlSWQuZGlzcGxheVRleHRbaW5kZXhdID0gQ2FzZUxhd3llcnNEYXRhW2luZGV4XS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZUlkLnZhbHVlW2luZGV4XSA9IENhc2VMYXd5ZXJzRGF0YVtpbmRleF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGFydGljaXBhbnQuZGlzcGxheVRleHRbaW5kZXhdID0gQ2FzZUxhd3llcnNEYXRhW2luZGV4XS5kaXNwbGF5VGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QYXJ0aWNpcGFudC52YWx1ZVtpbmRleF0gPSBDYXNlTGF3eWVyc0RhdGFbaW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLkVtcGxveWVlSWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuRW1wbG95ZWVJZC52YWx1ZVtpbmRleF0gPT0gdGhpcy4kcGFyZW50Lmdsb2JhbC51c2VySW5mby5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FbXBsb3llZUlkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdWJtaXREYXRhLkVtcGxveWVlSWQgPSB0aGlzLkVtcGxveWVlSWQudmFsdWVbMF07XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc0RhdGEuZGF0YS5lcnJvci5tZXNzYWdlLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4gICAgICAgICAgICB2YXIgcHJvamVjdElkID0gb3B0aW9ucy5wcm9qZWN0SWQ7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuUHJvamVjdElkID0gb3B0aW9ucy5wcm9qZWN0SWQ7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEuY3VycmVudFN0YWdlID0gb3B0aW9ucy5jdXJyZW50U3RhZ2U7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gb3B0aW9ucy5jYXRlZ29yeVxuICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YS5JZCA9ICd0ZW1wXycgKyB0aW1lOyAvL+eUn+aIkElkXG4gICAgICAgICAgICB0aGlzLkdldENhc2VMYXd5ZXJzKHByb2plY3RJZCk7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgfVxuIl19