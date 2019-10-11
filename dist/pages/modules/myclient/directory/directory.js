'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

var _pinyin = require('./../../../../utils/cofig/pinyin.js');

var _pinyin2 = _interopRequireDefault(_pinyin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var directory = function (_wepy$page) {
    _inherits(directory, _wepy$page);

    function directory() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, directory);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = directory.__proto__ || Object.getPrototypeOf(directory)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
            clientData: [{
                id: 1,
                region: '#',
                items: []
            }, {
                id: 2,
                region: 'A',
                items: []
            }, {
                id: 3,
                region: 'B',
                items: []
            }, {
                id: 4,
                region: 'C',
                items: []
            }, {
                id: 5,
                region: 'D',
                items: []
            }, {
                id: 6,
                region: 'E',
                items: []
            }, {
                id: 7,
                region: 'F',
                items: []
            }, {
                id: 8,
                region: 'G',
                items: []
            }, {
                id: 9,
                region: 'H',
                items: []
            }, {
                id: 10,
                region: 'I',
                items: []
            }, {
                id: 11,
                region: 'J',
                items: []
            }, {
                id: 12,
                region: 'K',
                items: []
            }, {
                id: 13,
                region: 'L',
                items: []
            }, {
                id: 14,
                region: 'M',
                items: []
            }, {
                id: 15,
                region: 'N',
                items: []
            }, {
                id: 16,
                region: 'O',
                items: []
            }, {
                id: 17,
                region: 'P',
                items: []
            }, {
                id: 18,
                region: 'Q',
                items: []
            }, {
                id: 19,
                region: 'R',
                items: []
            }, {
                id: 20,
                region: 'S',
                items: []
            }, {
                id: 21,
                region: 'T',
                items: []
            }, {
                id: 22,
                region: 'U',
                items: []
            }, {
                id: 23,
                region: 'V',
                items: []
            }, {
                id: 24,
                region: 'W',
                items: []
            }, {
                id: 25,
                region: 'X',
                items: []
            }, {
                id: 26,
                region: 'Y',
                items: []
            }, {
                id: 27,
                region: 'Z',
                items: []
            }],
            isActive: null,
            fixedTitle: "#",
            toView: 'inToView0',
            oHeight: [],
            scroolHeight: 0
        }, _this.components = {}, _this.methods = {
            addClient: function addClient(item) {
                wx.setStorage({
                    key: 'CREATE_CLIENTINFO_DATA',
                    data: item,
                    success: function success() {
                        wx.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                });
            },
            onPageScroll: function onPageScroll(e) {
                this.scroolHeight = e.detail.scrollTop;
                for (var i in this.oHeight) {
                    if (e.detail.scrollTop < this.oHeight[i].height) {
                        this.isActive = this.oHeight[i].key;
                        this.fixedTitle = this.oHeight[i].name;
                        return false;
                    }
                }
                // this.$apply()
            },

            scrollToViewFn: function scrollToViewFn(e) {
                var _id = e.target.dataset.id;
                for (var i in this.clientData) {
                    if (this.clientData[i].id === _id) {
                        this.isActive = _id;
                        this.toView = 'inToView' + _id;
                        this.$apply();
                        break;
                    }
                }
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(directory, [{
        key: 'GetClients',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, getData, i, obj, j, that, number, _loop, _i;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    Id: "",
                                    IsAll: true,
                                    Name: "",
                                    pageNumber: 1,
                                    pageSize: 1000,
                                    sorting: ""
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/common/GetClients', 'post', data);

                            case 3:
                                resData = _context.sent;
                                _context.t0 = resData.statusCode;
                                _context.next = _context.t0 === 200 ? 7 : 18;
                                break;

                            case 7:
                                getData = [];

                                for (i in resData.data.result.items) {
                                    obj = {};

                                    obj = resData.data.result.items[i];
                                    if (new RegExp('[\u4E00-\u9FA5]+').test(resData.data.result.items[i].name)) {
                                        obj.region = _pinyin2.default.ConvertPinyin(resData.data.result.items[i].name).substr(0, 1);
                                    } else {
                                        obj.region = "#";
                                    }
                                    getData.push(obj);
                                }
                                console.log(getData);
                                for (i in getData) {
                                    for (j in this.clientData) {
                                        if (this.clientData[j].region == getData[i].region) {
                                            this.clientData[j].items.push(getData[i]);
                                        }
                                    }
                                }
                                this.$apply();
                                that = this;
                                number = 0;

                                _loop = function _loop(_i) {
                                    wx.createSelectorQuery().select('#inToView' + that.clientData[_i].id).boundingClientRect(function (rect) {
                                        // console.log(rect);
                                        if (rect) {
                                            number = rect.height + number;
                                            var newArry = [{
                                                'height': number,
                                                'key': rect.dataset.id,
                                                "name": that.clientData[_i].region
                                            }];
                                            that.oHeight = that.oHeight.concat(newArry);
                                            that.$apply();
                                        }
                                    }).exec();
                                };

                                for (_i = 0; _i < that.clientData.length; ++_i) {
                                    _loop(_i);
                                }
                                this.$apply();
                                return _context.abrupt('break', 19);

                            case 18:
                                return _context.abrupt('break', 19);

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetClients() {
                return _ref2.apply(this, arguments);
            }

            return GetClients;
        }()
    }, {
        key: 'pinyinUtil',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function pinyinUtil() {
                return _ref3.apply(this, arguments);
            }

            return pinyinUtil;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.GetClients();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return directory;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(directory , 'pages/modules/myclient/directory/directory'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS5qcyJdLCJuYW1lcyI6WyJkaXJlY3RvcnkiLCJwcm9wcyIsImRhdGEiLCJjbGllbnREYXRhIiwiaWQiLCJyZWdpb24iLCJpdGVtcyIsImlzQWN0aXZlIiwiZml4ZWRUaXRsZSIsInRvVmlldyIsIm9IZWlnaHQiLCJzY3Jvb2xIZWlnaHQiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImFkZENsaWVudCIsIml0ZW0iLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvblBhZ2VTY3JvbGwiLCJlIiwiZGV0YWlsIiwic2Nyb2xsVG9wIiwiaSIsImhlaWdodCIsIm5hbWUiLCJzY3JvbGxUb1ZpZXdGbiIsIl9pZCIsInRhcmdldCIsImRhdGFzZXQiLCIkYXBwbHkiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiSWQiLCJJc0FsbCIsIk5hbWUiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJzb3J0aW5nIiwiYWpheCIsImdldERhdGEiLCJyZXNEYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsIm9iaiIsIlJlZ0V4cCIsInRlc3QiLCJQaW55aW4iLCJDb252ZXJ0UGlueWluIiwic3Vic3RyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJqIiwidGhhdCIsIm51bWJlciIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwibmV3QXJyeSIsImNvbmNhdCIsImV4ZWMiLCJsZW5ndGgiLCJHZXRDbGllbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNqQkMsSyxHQUFRLEUsUUFDUkMsSSxHQUFPO0FBQ0hDLHdCQUFZLENBQUM7QUFDVEMsb0JBQUksQ0FESztBQUVUQyx3QkFBUSxHQUZDO0FBR1RDLHVCQUFP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LENBQUU7Ozs7RUE1TndCQyxlQUFLQyxJOztrQkFBdkJ0RSxTIiwiZmlsZSI6ImRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuICAgIGltcG9ydCBQaW55aW4gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvcGlueWluLmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBkaXJlY3RvcnkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2xpZW50RGF0YTogW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICByZWdpb246ICcjJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnQScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ0InLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICByZWdpb246ICdDJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnRCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ0UnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgICAgICByZWdpb246ICdGJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnRycsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ0gnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnSScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICAgICAgICByZWdpb246ICdKJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ0snLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMTMsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnTCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxNCxcbiAgICAgICAgICAgICAgICByZWdpb246ICdNJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDE1LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ04nLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMTYsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnTycsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxNyxcbiAgICAgICAgICAgICAgICByZWdpb246ICdQJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDE4LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ1EnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMTksXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnUicsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyMCxcbiAgICAgICAgICAgICAgICByZWdpb246ICdTJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIxLFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ1QnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjIsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnVScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyMyxcbiAgICAgICAgICAgICAgICByZWdpb246ICdWJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDI0LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ1cnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjUsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiAnWCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyNixcbiAgICAgICAgICAgICAgICByZWdpb246ICdZJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDI3LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ1onLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIH0sIF0sXG4gICAgICAgICAgICBpc0FjdGl2ZTogbnVsbCxcbiAgICAgICAgICAgIGZpeGVkVGl0bGU6IFwiI1wiLFxuICAgICAgICAgICAgdG9WaWV3OiAnaW5Ub1ZpZXcwJyxcbiAgICAgICAgICAgIG9IZWlnaHQ6IFtdLFxuICAgICAgICAgICAgc2Nyb29sSGVpZ2h0OiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGFkZENsaWVudChpdGVtKXtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ0NSRUFURV9DTElFTlRJTkZPX0RBVEEnLFxuICAgICAgICAgICAgICAgICAgZGF0YTogaXRlbSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUGFnZVNjcm9sbChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3Jvb2xIZWlnaHQgPSBlLmRldGFpbC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMub0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwuc2Nyb2xsVG9wIDwgdGhpcy5vSGVpZ2h0W2ldLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMub0hlaWdodFtpXS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeGVkVGl0bGUgPSB0aGlzLm9IZWlnaHRbaV0ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxUb1ZpZXdGbjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBfaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5jbGllbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWVudERhdGFbaV0uaWQgPT09IF9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b1ZpZXc9ICdpblRvVmlldycgKyBfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgIHdhdGNoID0ge307XG4gICAgICAgIGNvbXB1dGVkID0ge307XG4gICAgICAgIGFzeW5jIEdldENsaWVudHMoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBJZDogXCJcIixcbiAgICAgICAgICAgICAgICBJc0FsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwMDAsXG4gICAgICAgICAgICAgICAgc29ydGluZzogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAgICAgICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2NvbW1vbi9HZXRDbGllbnRzJyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc3dpdGNoIChyZXNEYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdldERhdGEgPSBbXVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gcmVzRGF0YS5kYXRhLnJlc3VsdC5pdGVtc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCJbXFx1NEUwMC1cXHU5RkE1XStcIikudGVzdChyZXNEYXRhLmRhdGEucmVzdWx0Lml0ZW1zW2ldLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnJlZ2lvbiA9IFBpbnlpbi5Db252ZXJ0UGlueWluKHJlc0RhdGEuZGF0YS5yZXN1bHQuaXRlbXNbaV0ubmFtZSkuc3Vic3RyKDAsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5yZWdpb24gPSBcIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YS5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnZXREYXRhKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGdldERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gdGhpcy5jbGllbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpZW50RGF0YVtqXS5yZWdpb24gPT0gZ2V0RGF0YVtpXS5yZWdpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnREYXRhW2pdLml0ZW1zLnB1c2goZ2V0RGF0YVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY2xpZW50RGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnI2luVG9WaWV3JyArIHRoYXQuY2xpZW50RGF0YVtpXS5pZCkuYm91bmRpbmdDbGllbnRSZWN0KGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSByZWN0LmhlaWdodCArIG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0FycnkgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiByZWN0LmRhdGFzZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhhdC5jbGllbnREYXRhW2ldLnJlZ2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm9IZWlnaHQgPSB0aGF0Lm9IZWlnaHQuY29uY2F0KG5ld0FycnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5leGVjKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBwaW55aW5VdGlsKCkge31cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5HZXRDbGllbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==