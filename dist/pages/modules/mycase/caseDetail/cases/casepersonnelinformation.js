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

var casepersonnelinformaition = function (_wepy$page) {
  _inherits(casepersonnelinformaition, _wepy$page);

  function casepersonnelinformaition() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, casepersonnelinformaition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = casepersonnelinformaition.__proto__ || Object.getPrototypeOf(casepersonnelinformaition)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      lawyerGroupData: {},
      userPhoto: [],
      lawyerRoleText: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(casepersonnelinformaition, [{
    key: 'getLawyerGroup',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var lawyerGroupData, index, http, avatarData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/caseLawyer/GetCaseLawyersWithGroup', 'post', { caseId: this.caseId });

              case 2:
                lawyerGroupData = _context.sent;

                if (!(lawyerGroupData.statusCode == 200)) {
                  _context.next = 20;
                  break;
                }

                lawyerGroupData = lawyerGroupData.data.result;
                // 获取图片

                _context.t0 = regeneratorRuntime.keys(lawyerGroupData);

              case 6:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 16;
                  break;
                }

                index = _context.t1.value;
                http = '/api/services/web/personal/GetEmployeePhoto?id=' + lawyerGroupData[index].userId;
                _context.next = 11;
                return _ajax2.default.getAavatar(http);

              case 11:
                avatarData = _context.sent;

                this.userPhoto[index] = avatarData;
                // 处理字符串
                lawyerGroupData[index].lawyerRoleText = lawyerGroupData[index].lawyerRoleText.replace(/、/g, '/');
                _context.next = 6;
                break;

              case 16:
                this.lawyerGroupData = lawyerGroupData;
                this.$apply();
                _context.next = 21;
                break;

              case 20:
                wx.showToast({
                  title: '网络故障！',
                  icon: 'none',
                  duration: 1500,
                  mask: false
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLawyerGroup() {
        return _ref2.apply(this, arguments);
      }

      return getLawyerGroup;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.caseId = options.id;
      this.getLawyerGroup();
    }
  }]);

  return casepersonnelinformaition;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(casepersonnelinformaition , 'pages/modules/mycase/caseDetail/cases/casepersonnelinformation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VwZXJzb25uZWxpbmZvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJjYXNlcGVyc29ubmVsaW5mb3JtYWl0aW9uIiwiZGF0YSIsImxhd3llckdyb3VwRGF0YSIsInVzZXJQaG90byIsImxhd3llclJvbGVUZXh0IiwibWV0aG9kcyIsImFqYXgiLCJnZXREYXRhIiwiY2FzZUlkIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsImluZGV4IiwiaHR0cCIsInVzZXJJZCIsImdldEFhdmF0YXIiLCJhdmF0YXJEYXRhIiwicmVwbGFjZSIsIiRhcHBseSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwib3B0aW9ucyIsImlkIiwiZ2V0TGF3eWVyR3JvdXAiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLHlCOzs7Ozs7Ozs7Ozs7Ozs0TkFDbkJDLEksR0FBTztBQUNMQyx1QkFBaUIsRUFEWjtBQUVMQyxpQkFBVyxFQUZOO0FBR0xDLHNCQUFnQjtBQUhYLEssUUFLUEMsTyxHQUFVLEU7Ozs7Ozs7Ozs7Ozs7dUJBR29CQyxlQUFLQyxPQUFMLENBQzFCLHNEQUQwQixFQUUxQixNQUYwQixFQUcxQixFQUFFQyxRQUFRLEtBQUtBLE1BQWYsRUFIMEIsQzs7O0FBQXhCTiwrQjs7c0JBS0RBLGdCQUFnQk8sVUFBaEIsSUFBNEIsRzs7Ozs7QUFDdkJQLCtCLEdBQWdCQSxnQkFBZ0JELElBQWhCLENBQXFCUyxNO0FBQ3pDOztzREFDa0JSLGU7Ozs7Ozs7O0FBQVRTLHFCO0FBQ0hDLG9CLEdBQU8sb0RBQW9EVixnQkFBZ0JTLEtBQWhCLEVBQXVCRSxNOzt1QkFDL0RQLGVBQUtRLFVBQUwsQ0FBZ0JGLElBQWhCLEM7OztBQUFuQkcsMEI7O0FBQ0oscUJBQUtaLFNBQUwsQ0FBZVEsS0FBZixJQUFzQkksVUFBdEI7QUFDQTtBQUNBYixnQ0FBZ0JTLEtBQWhCLEVBQXVCUCxjQUF2QixHQUFzQ0YsZ0JBQWdCUyxLQUFoQixFQUF1QlAsY0FBdkIsQ0FBc0NZLE9BQXRDLENBQThDLElBQTlDLEVBQW9ELEdBQXBELENBQXRDOzs7OztBQUVGLHFCQUFLZCxlQUFMLEdBQXFCQSxlQUFyQjtBQUNBLHFCQUFLZSxNQUFMOzs7OztBQUVGQyxtQkFBR0MsU0FBSCxDQUFhO0FBQ1RDLHlCQUFPLE9BREU7QUFFVEMsd0JBQU0sTUFGRztBQUdUQyw0QkFBVSxJQUhEO0FBSVRDLHdCQUFNO0FBSkcsaUJBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFRR0MsTyxFQUFTO0FBQ2QsV0FBS2hCLE1BQUwsR0FBWWdCLFFBQVFDLEVBQXBCO0FBQ0EsV0FBS0MsY0FBTDtBQUNEOzs7O0VBdENvREMsZUFBS0MsSTs7a0JBQXZDNUIseUIiLCJmaWxlIjoiY2FzZXBlcnNvbm5lbGluZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvZmlnL2FqYXguanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FzZXBlcnNvbm5lbGluZm9ybWFpdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgbGF3eWVyR3JvdXBEYXRhOiB7fSxcbiAgICB1c2VyUGhvdG86IFtdLFxuICAgIGxhd3llclJvbGVUZXh0OiBbXVxuICB9O1xuICBtZXRob2RzID0ge1xuICB9O1xuICBhc3luYyBnZXRMYXd5ZXJHcm91cCgpIHtcbiAgICB2YXIgbGF3eWVyR3JvdXBEYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2Nhc2VMYXd5ZXIvR2V0Q2FzZUxhd3llcnNXaXRoR3JvdXAnLFxuICAgICAgJ3Bvc3QnLFxuICAgICAgeyBjYXNlSWQ6IHRoaXMuY2FzZUlkIH1cbiAgICApO1xuICAgIGlmKGxhd3llckdyb3VwRGF0YS5zdGF0dXNDb2RlPT0yMDApe1xuICAgICAgICB2YXIgbGF3eWVyR3JvdXBEYXRhPWxhd3llckdyb3VwRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAgICAgLy8g6I635Y+W5Zu+54mHXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIGxhd3llckdyb3VwRGF0YSkge1xuICAgICAgICAgIHZhciBodHRwID0gJy9hcGkvc2VydmljZXMvd2ViL3BlcnNvbmFsL0dldEVtcGxveWVlUGhvdG8/aWQ9JyArIGxhd3llckdyb3VwRGF0YVtpbmRleF0udXNlcklkO1xuICAgICAgICAgIHZhciBhdmF0YXJEYXRhID0gYXdhaXQgYWpheC5nZXRBYXZhdGFyKGh0dHApO1xuICAgICAgICAgIHRoaXMudXNlclBob3RvW2luZGV4XT1hdmF0YXJEYXRhO1xuICAgICAgICAgIC8vIOWkhOeQhuWtl+espuS4slxuICAgICAgICAgIGxhd3llckdyb3VwRGF0YVtpbmRleF0ubGF3eWVyUm9sZVRleHQ9bGF3eWVyR3JvdXBEYXRhW2luZGV4XS5sYXd5ZXJSb2xlVGV4dC5yZXBsYWNlKC/jgIEvZywgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhd3llckdyb3VwRGF0YT1sYXd5ZXJHcm91cERhdGE7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfWVsc2V7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn572R57uc5pWF6Zqc77yBJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5jYXNlSWQ9b3B0aW9ucy5pZDtcbiAgICB0aGlzLmdldExhd3llckdyb3VwKCk7XG4gIH1cblxufVxuIl19