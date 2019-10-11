'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchCaseClient = function (_wepy$page) {
    _inherits(searchCaseClient, _wepy$page);

    function searchCaseClient() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, searchCaseClient);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchCaseClient.__proto__ || Object.getPrototypeOf(searchCaseClient)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            searchData: {},
            myinvoice: [],
            pageNumber: 1,
            totalCount: 0,
            searchValue: '',
            class: '',
            parentId: '',
            text: '请选择关联客户'
        }, _this.methods = {
            submitData: function submitData() {
                this.myinvoice = [];
                this.pageNumber = 1;
                this.getbill();
            },
            submitSearch: function submitSearch(e) {
                this.searchValue = e.detail.value;
                this.GetGeneralComboboxList();
                this.$apply();
            },
            into: function into(item) {
                console.log(item);
                item.class = this.class;
                var pages = getCurrentPages();
                var prevPage = pages[pages.length - 2]; //上一个页面
                // this.searchData.keyWord = value;
                if (prevPage) {
                    prevPage.isRefresh(item);
                }
                wx.navigateBack({
                    delta: 1
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(searchCaseClient, [{
        key: 'GetGeneralComboboxList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    class: this.class,
                                    name: this.searchValue,
                                    parentId: this.parentId,
                                    shortCode: null
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/common/GetGeneralComboboxList', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (resData.statusCode == 200) {
                                    this.myinvoice = resData.data.result;
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetGeneralComboboxList() {
                return _ref2.apply(this, arguments);
            }

            return GetGeneralComboboxList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            console.log(options);
            if (options.class.includes('case')) this.text = '请选择关联案件';
            this.class = options.class;
            if (options.parentId) {
                this.parentId = options.parentId;
                this.GetGeneralComboboxList();
            }
        }
    }]);

    return searchCaseClient;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(searchCaseClient , 'pages/modules/myTaskCourse/caseClientSearch/searchCaseClient'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaENhc2VDbGllbnQuanMiXSwibmFtZXMiOlsic2VhcmNoQ2FzZUNsaWVudCIsImRhdGEiLCJzZWFyY2hEYXRhIiwibXlpbnZvaWNlIiwicGFnZU51bWJlciIsInRvdGFsQ291bnQiLCJzZWFyY2hWYWx1ZSIsImNsYXNzIiwicGFyZW50SWQiLCJ0ZXh0IiwibWV0aG9kcyIsInN1Ym1pdERhdGEiLCJnZXRiaWxsIiwic3VibWl0U2VhcmNoIiwiZSIsImRldGFpbCIsInZhbHVlIiwiR2V0R2VuZXJhbENvbWJvYm94TGlzdCIsIiRhcHBseSIsImludG8iLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicHJldlBhZ2UiLCJsZW5ndGgiLCJpc1JlZnJlc2giLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwibmFtZSIsInNob3J0Q29kZSIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJvcHRpb25zIiwiaW5jbHVkZXMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGdCOzs7Ozs7Ozs7Ozs7Ozs4TUFDakJDLEksR0FBTztBQUNIQyx3QkFBWSxFQURUO0FBRUhDLHVCQUFXLEVBRlI7QUFHSEMsd0JBQVksQ0FIVDtBQUlIQyx3QkFBWSxDQUpUO0FBS0hDLHlCQUFhLEVBTFY7QUFNSEMsbUJBQU0sRUFOSDtBQU9IQyxzQkFBUyxFQVBOO0FBUUhDLGtCQUFLO0FBUkYsUyxRQVVQQyxPLEdBQVU7QUFDTkMsc0JBRE0sd0JBQ007QUFDUixxQkFBS1IsU0FBTCxHQUFlLEVBQWY7QUFDQSxxQkFBS0MsVUFBTCxHQUFnQixDQUFoQjtBQUNBLHFCQUFLUSxPQUFMO0FBQ0gsYUFMSztBQU1OQyx3QkFOTSx3QkFNT0MsQ0FOUCxFQU1VO0FBQ1oscUJBQUtSLFdBQUwsR0FBbUJRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDQSxxQkFBS0Msc0JBQUw7QUFDQSxxQkFBS0MsTUFBTDtBQUNILGFBVks7QUFXTkMsZ0JBWE0sZ0JBV0RDLElBWEMsRUFXSztBQUNQQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0FBLHFCQUFLYixLQUFMLEdBQVcsS0FBS0EsS0FBaEI7QUFDQSxvQkFBSWdCLFFBQVFDLGlCQUFaO0FBQ0Esb0JBQUlDLFdBQVdGLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBSk8sQ0FJaUM7QUFDeEM7QUFDQSxvQkFBSUQsUUFBSixFQUFjO0FBQ1ZBLDZCQUFTRSxTQUFULENBQW1CUCxJQUFuQjtBQUNIO0FBQ0RRLG1CQUFHQyxZQUFILENBQWdCO0FBQ1pDLDJCQUFPO0FBREssaUJBQWhCO0FBR0g7QUF2QkssUzs7Ozs7Ozs7Ozs7O0FBMEJGN0Isb0MsR0FBSztBQUNMTSwyQ0FBTyxLQUFLQSxLQURQO0FBRUx3QiwwQ0FBSyxLQUFLekIsV0FGTDtBQUdMRSw4Q0FBVSxLQUFLQSxRQUhWO0FBSUx3QiwrQ0FBVztBQUpOLGlDOzt1Q0FNVUMsZUFBS0MsT0FBTCxDQUNmLGlEQURlLEVBRWYsTUFGZSxFQUdmakMsSUFIZSxDOzs7QUFBZmtDLHVDOztBQUtKLG9DQUFHQSxRQUFRQyxVQUFSLElBQW9CLEdBQXZCLEVBQTJCO0FBQ3ZCLHlDQUFLakMsU0FBTCxHQUFlZ0MsUUFBUWxDLElBQVIsQ0FBYW9DLE1BQTVCO0FBQ0EseUNBQUtuQixNQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFFRW9CLE8sRUFBUztBQUNaakIsb0JBQVFDLEdBQVIsQ0FBWWdCLE9BQVo7QUFDQSxnQkFBR0EsUUFBUS9CLEtBQVIsQ0FBY2dDLFFBQWQsQ0FBdUIsTUFBdkIsQ0FBSCxFQUNBLEtBQUs5QixJQUFMLEdBQVksU0FBWjtBQUNBLGlCQUFLRixLQUFMLEdBQVcrQixRQUFRL0IsS0FBbkI7QUFDQSxnQkFBRytCLFFBQVE5QixRQUFYLEVBQW9CO0FBQ2hCLHFCQUFLQSxRQUFMLEdBQWdCOEIsUUFBUTlCLFFBQXhCO0FBQ0EscUJBQUtTLHNCQUFMO0FBQ0g7QUFDSjs7OztFQTlEeUN1QixlQUFLQyxJOztrQkFBOUJ6QyxnQiIsImZpbGUiOiJzZWFyY2hDYXNlQ2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29maWcvYWpheC5qcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ2FzZUNsaWVudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzZWFyY2hEYXRhOiB7fSxcbiAgICAgICAgICAgIG15aW52b2ljZTogW10sXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxuICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGNsYXNzOicnLFxuICAgICAgICAgICAgcGFyZW50SWQ6JycsXG4gICAgICAgICAgICB0ZXh0Oifor7fpgInmi6nlhbPogZTlrqLmiLcnXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzdWJtaXREYXRhKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5teWludm9pY2U9W107XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyPTE7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRiaWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0U2VhcmNoKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29tYm9ib3hMaXN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRvKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3M9dGhpcy5jbGFzcztcbiAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlYXJjaERhdGEua2V5V29yZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2UGFnZS5pc1JlZnJlc2goaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYXN5bmMgR2V0R2VuZXJhbENvbWJvYm94TGlzdCgpe1xuICAgICAgICAgICAgdmFyIGRhdGE9e1xuICAgICAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzLFxuICAgICAgICAgICAgICAgIG5hbWU6dGhpcy5zZWFyY2hWYWx1ZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRJZDogdGhpcy5wYXJlbnRJZCxcbiAgICAgICAgICAgICAgICBzaG9ydENvZGU6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YT0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAgICAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jb21tb24vR2V0R2VuZXJhbENvbWJvYm94TGlzdCcsXG4gICAgICAgICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLm15aW52b2ljZT1yZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4gICAgICAgICAgICBpZihvcHRpb25zLmNsYXNzLmluY2x1ZGVzKCdjYXNlJykpXG4gICAgICAgICAgICB0aGlzLnRleHQgPSAn6K+36YCJ5oup5YWz6IGU5qGI5Lu2J1xuICAgICAgICAgICAgdGhpcy5jbGFzcz1vcHRpb25zLmNsYXNzO1xuICAgICAgICAgICAgaWYob3B0aW9ucy5wYXJlbnRJZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRJZCA9IG9wdGlvbnMucGFyZW50SWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXRHZW5lcmFsQ29tYm9ib3hMaXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuIl19