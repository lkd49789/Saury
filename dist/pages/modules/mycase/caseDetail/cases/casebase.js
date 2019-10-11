'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ajax = require('./../../../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import navbar from '../../../components/navbar';
var casebase = function (_wepy$page) {
  _inherits(casebase, _wepy$page);

  function casebase() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, casebase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = casebase.__proto__ || Object.getPrototypeOf(casebase)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      // navbar
    }, _this.data = {
      id: 0,
      caseData: {},
      categoryText1: false,
      categoryText2: false,
      agencyAuthorityData: ['未填写']
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(casebase, [{
    key: 'getCaseData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, caseData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = { id: this.id };
                // console.log(id);

                _context.next = 3;
                return _ajax2.default.getData('/api/services/web/case/GetCaseInfo', 'POST', id);

              case 3:
                caseData = _context.sent;

                // console.log(caseData);
                if (caseData.statusCode == 200) {
                  this.caseData = caseData.data.result;
                  if (this.caseData.categoryText.indexOf('常年') !== -1) {
                    this.categoryText1 = true;
                  }
                  if (this.caseData.categoryText.indexOf('诉讼') !== -1) {
                    this.categoryText2 = true;
                  }
                  // console.log(caseData.result.agencyAuthority )
                  if (this.caseData.agencyAuthority && this.caseData.agencyAuthority.length > 0) {
                    this.agencyAuthorityData = caseData.data.result.agencyAuthority.split(',');
                  }
                  this.$apply();
                } else {
                  wx.showToast({
                    title: '网络故障！',
                    icon: 'none',
                    duration: 1500,
                    mask: false
                  });
                  this.caseData = null;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCaseData() {
        return _ref2.apply(this, arguments);
      }

      return getCaseData;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // console.log(options.id);
      this.id = options.id;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getCaseData();
    }
  }]);

  return casebase;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(casebase , 'pages/modules/mycase/caseDetail/cases/casebase'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2ViYXNlLmpzIl0sIm5hbWVzIjpbImNhc2ViYXNlIiwiY29tcG9uZW50cyIsImRhdGEiLCJpZCIsImNhc2VEYXRhIiwiY2F0ZWdvcnlUZXh0MSIsImNhdGVnb3J5VGV4dDIiLCJhZ2VuY3lBdXRob3JpdHlEYXRhIiwibWV0aG9kcyIsImFqYXgiLCJnZXREYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsImNhdGVnb3J5VGV4dCIsImluZGV4T2YiLCJhZ2VuY3lBdXRob3JpdHkiLCJsZW5ndGgiLCJzcGxpdCIsIiRhcHBseSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwib3B0aW9ucyIsImdldENhc2VEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsVSxHQUFhO0FBQ1g7QUFEVyxLLFFBR2JDLEksR0FBTztBQUNMQyxVQUFJLENBREM7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxxQkFBZSxLQUhWO0FBSUxDLHFCQUFlLEtBSlY7QUFLTEMsMkJBQXFCLENBQUMsS0FBRDtBQUxoQixLLFFBT1BDLE8sR0FBVSxFOzs7Ozs7Ozs7Ozs7QUFFSkwsa0IsR0FBSyxFQUFFQSxJQUFJLEtBQUtBLEVBQVgsRTtBQUNUOzs7dUJBQ3FCTSxlQUFLQyxPQUFMLENBQ25CLG9DQURtQixFQUVuQixNQUZtQixFQUduQlAsRUFIbUIsQzs7O0FBQWpCQyx3Qjs7QUFLSjtBQUNBLG9CQUFHQSxTQUFTTyxVQUFULElBQXFCLEdBQXhCLEVBQTRCO0FBQ3hCLHVCQUFLUCxRQUFMLEdBQWdCQSxTQUFTRixJQUFULENBQWNVLE1BQTlCO0FBQ0Ysc0JBQUksS0FBS1IsUUFBTCxDQUFjUyxZQUFkLENBQTJCQyxPQUEzQixDQUFtQyxJQUFuQyxNQUE2QyxDQUFDLENBQWxELEVBQXFEO0FBQ25ELHlCQUFLVCxhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7QUFDRCxzQkFBSSxLQUFLRCxRQUFMLENBQWNTLFlBQWQsQ0FBMkJDLE9BQTNCLENBQW1DLElBQW5DLE1BQTZDLENBQUMsQ0FBbEQsRUFBcUQ7QUFDbkQseUJBQUtSLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNEO0FBQ0Esc0JBQUksS0FBS0YsUUFBTCxDQUFjVyxlQUFkLElBQStCLEtBQUtYLFFBQUwsQ0FBY1csZUFBZCxDQUE4QkMsTUFBOUIsR0FBcUMsQ0FBeEUsRUFBMkU7QUFDekUseUJBQUtULG1CQUFMLEdBQTRCSCxTQUFTRixJQUFULENBQWNVLE1BQWQsQ0FBcUJHLGVBQXJCLENBQXFDRSxLQUFyQyxDQUEyQyxHQUEzQyxDQUE1QjtBQUNEO0FBQ0QsdUJBQUtDLE1BQUw7QUFDRCxpQkFiRCxNQWFLO0FBQ0hDLHFCQUFHQyxTQUFILENBQWE7QUFDWEMsMkJBQU8sT0FESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hDLDhCQUFVLElBSEM7QUFJWEMsMEJBQU07QUFKSyxtQkFBYjtBQU1BLHVCQUFLcEIsUUFBTCxHQUFjLElBQWQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUVJcUIsTyxFQUFTO0FBQ2Q7QUFDQSxXQUFLdEIsRUFBTCxHQUFVc0IsUUFBUXRCLEVBQWxCO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUt1QixXQUFMO0FBQ0Q7Ozs7RUFsRG1DQyxlQUFLQyxJOztrQkFBdEI1QixRIiwiZmlsZSI6ImNhc2ViYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuLy8gaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjYXNlYmFzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgLy8gbmF2YmFyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaWQ6IDAsXG4gICAgY2FzZURhdGE6IHt9LFxuICAgIGNhdGVnb3J5VGV4dDE6IGZhbHNlLFxuICAgIGNhdGVnb3J5VGV4dDI6IGZhbHNlLFxuICAgIGFnZW5jeUF1dGhvcml0eURhdGE6IFsn5pyq5aGr5YaZJ11cbiAgfTtcbiAgbWV0aG9kcyA9IHt9O1xuICBhc3luYyBnZXRDYXNlRGF0YSgpIHtcbiAgICB2YXIgaWQgPSB7IGlkOiB0aGlzLmlkIH07XG4gICAgLy8gY29uc29sZS5sb2coaWQpO1xuICAgIHZhciBjYXNlRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICcvYXBpL3NlcnZpY2VzL3dlYi9jYXNlL0dldENhc2VJbmZvJyxcbiAgICAgICdQT1NUJyxcbiAgICAgIGlkXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjYXNlRGF0YSk7XG4gICAgaWYoY2FzZURhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgICAgdGhpcy5jYXNlRGF0YSA9IGNhc2VEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgaWYgKHRoaXMuY2FzZURhdGEuY2F0ZWdvcnlUZXh0LmluZGV4T2YoJ+W4uOW5tCcpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5VGV4dDEgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2FzZURhdGEuY2F0ZWdvcnlUZXh0LmluZGV4T2YoJ+ivieiuvCcpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5VGV4dDIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coY2FzZURhdGEucmVzdWx0LmFnZW5jeUF1dGhvcml0eSApXG4gICAgICBpZiAodGhpcy5jYXNlRGF0YS5hZ2VuY3lBdXRob3JpdHkmJnRoaXMuY2FzZURhdGEuYWdlbmN5QXV0aG9yaXR5Lmxlbmd0aD4wKSB7XG4gICAgICAgIHRoaXMuYWdlbmN5QXV0aG9yaXR5RGF0YSAgPSBjYXNlRGF0YS5kYXRhLnJlc3VsdC5hZ2VuY3lBdXRob3JpdHkuc3BsaXQoJywnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfWVsc2V7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+e9kee7nOaVhemanO+8gScsXG4gICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNhc2VEYXRhPW51bGxcbiAgICB9XG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zLmlkKTtcbiAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcbiAgfVxuICBvblNob3coKSB7XG4gICAgdGhpcy5nZXRDYXNlRGF0YSgpO1xuICB9XG59XG4iXX0=