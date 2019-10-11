'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _ajax = require('./../../../utils/cofig/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseData = function (_wepy$page) {
  _inherits(baseData, _wepy$page);

  function baseData() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, baseData);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = baseData.__proto__ || Object.getPrototypeOf(baseData)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" } }, _this.$events = {}, _this.components = {
      navbar: _navbar2.default
    }, _this.data = {
      currentTab: 0,
      navbars: ['人员信息', '联系方式', '业务信息'],
      baseData: {},
      laborRelationData: {}
    }, _this.methods = {
      toCreatDate: function toCreatDate() {
        _wepy2.default.navigateTo({
          url: '../data/create-data'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(baseData, [{
    key: 'GetMe',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/personal/GetMe', 'post', {});

              case 2:
                resData = _context.sent;

                if (resData.statusCode == 200) {
                  this.baseData = resData.data.result;
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetMe() {
        return _ref2.apply(this, arguments);
      }

      return GetMe;
    }()
  }, {
    key: 'GetLaborRelation',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var resData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ajax2.default.getData('/api/services/web/personal/GetLaborRelation', 'post', {});

              case 2:
                resData = _context2.sent;

                if (resData.statusCode == 200) {
                  this.laborRelationData = resData.data.result;
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetLaborRelation() {
        return _ref3.apply(this, arguments);
      }

      return GetLaborRelation;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.GetMe();
      this.GetLaborRelation();
    }
  }]);

  return baseData;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(baseData , 'pages/mine/data/basedata'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VkYXRhLmpzIl0sIm5hbWVzIjpbImJhc2VEYXRhIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibmF2YmFyIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJuYXZiYXJzIiwibGFib3JSZWxhdGlvbkRhdGEiLCJtZXRob2RzIiwidG9DcmVhdERhdGUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImFqYXgiLCJnZXREYXRhIiwicmVzRGF0YSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCIkYXBwbHkiLCJHZXRNZSIsIkdldExhYm9yUmVsYXRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUdaQyxJLEdBQU87QUFDTEMsa0JBQVksQ0FEUDtBQUVMQyxlQUFTLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsQ0FGSjtBQUdMUixnQkFBUyxFQUhKO0FBSUxTLHlCQUFrQjtBQUpiLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNNO0FBQ1pDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7Ozs7Ozs7Ozt1QkFRV0MsZUFBS0MsT0FBTCxDQUNqQixrQ0FEaUIsRUFFakIsTUFGaUIsRUFHakIsRUFIaUIsQzs7O0FBQWZDLHVCOztBQUtKLG9CQUFHQSxRQUFRQyxVQUFSLElBQW9CLEdBQXZCLEVBQTJCO0FBQ3pCLHVCQUFLbEIsUUFBTCxHQUFjaUIsUUFBUVgsSUFBUixDQUFhYSxNQUEzQjtBQUNBLHVCQUFLQyxNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdpQkwsZUFBS0MsT0FBTCxDQUNoQiw2Q0FEZ0IsRUFFaEIsTUFGZ0IsRUFHaEIsRUFIZ0IsQzs7O0FBQWRDLHVCOztBQUtKLG9CQUFHQSxRQUFRQyxVQUFSLElBQW9CLEdBQXZCLEVBQTJCO0FBQ3pCLHVCQUFLVCxpQkFBTCxHQUF1QlEsUUFBUVgsSUFBUixDQUFhYSxNQUFwQztBQUNBLHVCQUFLQyxNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTTtBQUNQLFdBQUtDLEtBQUw7QUFDQSxXQUFLQyxnQkFBTDtBQUNEOzs7O0VBN0NtQ1YsZUFBS1csSTs7a0JBQXRCdkIsUSIsImZpbGUiOiJiYXNlZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYXNlRGF0YSBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJuYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdmJhcnMub25jZVwiOlwibmF2YmFyc1wiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG5hdmJhclxuICB9O1xuICBkYXRhID0ge1xuICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgbmF2YmFyczogWyfkurrlkZjkv6Hmga8nLCAn6IGU57O75pa55byPJywgJ+S4muWKoeS/oeaBryddLFxuICAgIGJhc2VEYXRhOnt9LFxuICAgIGxhYm9yUmVsYXRpb25EYXRhOnt9LFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIHRvQ3JlYXREYXRlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vZGF0YS9jcmVhdGUtZGF0YSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgYXN5bmMgR2V0TWUoKXtcbiAgICB2YXIgcmVzRGF0YSA9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldE1lJyxcbiAgICAgICdwb3N0JyxcbiAgICAgIHt9XG4gICAgKVxuICAgIGlmKHJlc0RhdGEuc3RhdHVzQ29kZT09MjAwKXtcbiAgICAgIHRoaXMuYmFzZURhdGE9cmVzRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIEdldExhYm9yUmVsYXRpb24oKXtcbiAgICB2YXIgcmVzRGF0YT1hd2FpdCBhamF4LmdldERhdGEoXG4gICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0TGFib3JSZWxhdGlvbicsXG4gICAgICAncG9zdCcsXG4gICAgICB7fVxuICAgIClcbiAgICBpZihyZXNEYXRhLnN0YXR1c0NvZGU9PTIwMCl7XG4gICAgICB0aGlzLmxhYm9yUmVsYXRpb25EYXRhPXJlc0RhdGEuZGF0YS5yZXN1bHQ7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5HZXRNZSgpO1xuICAgIHRoaXMuR2V0TGFib3JSZWxhdGlvbigpO1xuICB9XG59XG4iXX0=