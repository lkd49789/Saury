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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = function (_wepy$page) {
  _inherits(index, _wepy$page);

  function index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      LaborRelationData: {},
      contractDate: '',
      icon: []
    }, _this.methods = {
      preview: function preview(name, fileId, fileName) {
        if (name == 'attachment') {
          var http = '/api/services/web/personal/DownloadLaborRelationAttachment?id=' + fileId;
          var fileClass = '.' + fileName.split('.')[1];
          _ajax2.default.preView(http, fileClass);
        } else if (name == 'agreement') {
          var http = '/api/services/web/personal/DownloadLaborRelationAgreement?id=' + fileId;
          var fileClass = '.' + fileName.split('.')[1];
          _ajax2.default.preView(http, fileClass);
        }
      },
      tobianji: function tobianji() {
        _wepy2.default.navigateTo({
          url: '../laborRelation/labor-compile'
        });
      },
      toajunct: function toajunct() {
        _wepy2.default.navigateTo({
          url: '../laborRelation/labor-adjunct'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(index, [{
    key: 'GetLaborRelation',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var LaborRelationData, startDate, endDate, agreementIcon, attachmentIcon;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ajax2.default.getData('/api/services/web/personal/GetLaborRelation', 'post');

              case 2:
                LaborRelationData = _context.sent;

                if (LaborRelationData.statusCode == 200 && LaborRelationData.data.result !== null) {
                  LaborRelationData = LaborRelationData.data.result;

                  this.LaborRelationData = LaborRelationData;
                  LaborRelationData.signDate = LaborRelationData.signDate.split('T')[0];
                  LaborRelationData.positiveDate = LaborRelationData.positiveDate.split('T')[0];
                  //合同期限
                  startDate = LaborRelationData.startDate.split('T')[0];
                  endDate = LaborRelationData.endDate.split('T')[0];

                  this.contractDate = startDate + '--' + endDate;
                  //附件处理
                  agreementIcon = LaborRelationData.agreement.name.split('.')[1];
                  attachmentIcon = LaborRelationData.attachment.name.split('.')[1];

                  this.setIcon(agreementIcon, 0);
                  this.setIcon(attachmentIcon, 1);
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetLaborRelation() {
        return _ref2.apply(this, arguments);
      }

      return GetLaborRelation;
    }()
  }, {
    key: 'setIcon',
    value: function setIcon(fileClass, index) {
      switch (fileClass) {
        case 'pdf':
          var iconfont = {};
          iconfont['icon'] = 'icon-pdfpng1';
          iconfont['color'] = '#e20000';
          this.icon[index] = iconfont;
          break;
        case 'png':
          var iconfont = {};
          iconfont['icon'] = 'icon-pdfpng1';
          iconfont['color'] = '#e20000';
          this.icon[index] = iconfont;
          break;
        case 'docx':
          var iconfont = {};
          iconfont['icon'] = 'icon-wold1';
          iconfont['color'] = '#009dff';
          this.icon[index] = iconfont;
          break;
        case 'doc':
          var iconfont = {};
          iconfont['icon'] = 'icon-wold1';
          iconfont['color'] = '#009dff';
          this.icon[index] = iconfont;
          break;
        case 'xls':
          var iconfont = {};
          iconfont['icon'] = 'icon-exl1';
          iconfont['color'] = '#069400';
          this.icon[index] = iconfont;
          break;
        case 'xlsx':
          var iconfont = {};
          iconfont['icon'] = 'icon-exl1';
          iconfont['color'] = '#069400';
          this.icon[index] = iconfont;
          break;
        case 'jpg':
          var iconfont = {};
          iconfont['icon'] = 'icon-jpggeshi';
          iconfont['color'] = '#ff9900';
          this.icon[index] = iconfont;
          break;
        default:
          var iconfont = {};
          iconfont['icon'] = 'icon-weizhiwenjiangeshi';
          iconfont['color'] = '#7a7a7a';
          this.icon[index] = iconfont;
          break;
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.GetLaborRelation();
    }
  }]);

  return index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(index , 'pages/mine/laborRelation/labor-relation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYm9yLXJlbGF0aW9uLmpzIl0sIm5hbWVzIjpbImluZGV4IiwiZGF0YSIsIkxhYm9yUmVsYXRpb25EYXRhIiwiY29udHJhY3REYXRlIiwiaWNvbiIsIm1ldGhvZHMiLCJwcmV2aWV3IiwibmFtZSIsImZpbGVJZCIsImZpbGVOYW1lIiwiaHR0cCIsImZpbGVDbGFzcyIsInNwbGl0IiwiYWpheCIsInByZVZpZXciLCJ0b2JpYW5qaSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9hanVuY3QiLCJnZXREYXRhIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsInNpZ25EYXRlIiwicG9zaXRpdmVEYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImFncmVlbWVudEljb24iLCJhZ3JlZW1lbnQiLCJhdHRhY2htZW50SWNvbiIsImF0dGFjaG1lbnQiLCJzZXRJY29uIiwiJGFwcGx5IiwiaWNvbmZvbnQiLCJHZXRMYWJvclJlbGF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLHlCQUFtQixFQURkO0FBRUxDLG9CQUFjLEVBRlQ7QUFHTEMsWUFBTTtBQUhELEssUUFLUEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0FDLElBREEsRUFDTUMsTUFETixFQUNjQyxRQURkLEVBQ3dCO0FBQzlCLFlBQUlGLFFBQVEsWUFBWixFQUEwQjtBQUN4QixjQUFJRyxPQUFPLG1FQUFtRUYsTUFBOUU7QUFDQSxjQUFJRyxZQUFZLE1BQU1GLFNBQVNHLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQXRCO0FBQ0FDLHlCQUFLQyxPQUFMLENBQWFKLElBQWIsRUFBbUJDLFNBQW5CO0FBQ0QsU0FKRCxNQUlPLElBQUlKLFFBQVEsV0FBWixFQUF5QjtBQUM5QixjQUFJRyxPQUFPLGtFQUFrRUYsTUFBN0U7QUFDQSxjQUFJRyxZQUFZLE1BQU1GLFNB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O0FBQ0E7QUFDRixhQUFLLEtBQUw7QUFDRSxjQUFJQSxXQUFXLEVBQWY7QUFDQUEsbUJBQVMsTUFBVCxJQUFtQixXQUFuQjtBQUNBQSxtQkFBUyxPQUFULElBQW9CLFNBQXBCO0FBQ0EsZUFBSzdCLElBQUwsQ0FBVUosS0FBVixJQUFtQmlDLFFBQW5CO0FBQ0E7QUFDRixhQUFLLE1BQUw7QUFDRSxjQUFJQSxXQUFXLEVBQWY7QUFDQUEsbUJBQVMsTUFBVCxJQUFtQixXQUFuQjtBQUNBQSxtQkFBUyxPQUFULElBQW9CLFNBQXBCO0FBQ0EsZUFBSzdCLElBQUwsQ0FBVUosS0FBVixJQUFtQmlDLFFBQW5CO0FBQ0E7QUFDRixhQUFLLEtBQUw7QUFDRSxjQUFJQSxXQUFXLEVBQWY7QUFDQUEsbUJBQVMsTUFBVCxJQUFtQixlQUFuQjtBQUNBQSxtQkFBUyxPQUFULElBQW9CLFNBQXBCO0FBQ0EsZUFBSzdCLElBQUwsQ0FBVUosS0FBVixJQUFtQmlDLFFBQW5CO0FBQ0E7QUFDRjtBQUNFLGNBQUlBLFdBQVcsRUFBZjtBQUNBQSxtQkFBUyxNQUFULElBQW1CLHlCQUFuQjtBQUNBQSxtQkFBUyxPQUFULElBQW9CLFNBQXBCO0FBQ0EsZUFBSzdCLElBQUwsQ0FBVUosS0FBVixJQUFtQmlDLFFBQW5CO0FBQ0E7QUFoREo7QUFrREQ7Ozs2QkFDUTtBQUNQLFdBQUtDLGdCQUFMO0FBQ0Q7Ozs7RUF6R2dDbEIsZUFBS21CLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoibGFib3ItcmVsYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBhamF4IGZyb20gJy4uLy4uLy4uL3V0aWxzLy9jb2ZpZy9hamF4LmpzJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIExhYm9yUmVsYXRpb25EYXRhOiB7fSxcbiAgICAgIGNvbnRyYWN0RGF0ZTogJycsXG4gICAgICBpY29uOiBbXVxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHByZXZpZXcobmFtZSwgZmlsZUlkLCBmaWxlTmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PSAnYXR0YWNobWVudCcpIHtcbiAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9Eb3dubG9hZExhYm9yUmVsYXRpb25BdHRhY2htZW50P2lkPScgKyBmaWxlSWRcbiAgICAgICAgICB2YXIgZmlsZUNsYXNzID0gJy4nICsgZmlsZU5hbWUuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICBhamF4LnByZVZpZXcoaHR0cCwgZmlsZUNsYXNzKVxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gJ2FncmVlbWVudCcpIHtcbiAgICAgICAgICB2YXIgaHR0cCA9ICcvYXBpL3NlcnZpY2VzL3dlYi9wZXJzb25hbC9Eb3dubG9hZExhYm9yUmVsYXRpb25BZ3JlZW1lbnQ/aWQ9JyArIGZpbGVJZFxuICAgICAgICAgIHZhciBmaWxlQ2xhc3MgPSAnLicgKyBmaWxlTmFtZS5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgIGFqYXgucHJlVmlldyhodHRwLCBmaWxlQ2xhc3MpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2JpYW5qaSgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9sYWJvclJlbGF0aW9uL2xhYm9yLWNvbXBpbGUnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHRvYWp1bmN0KCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL2xhYm9yUmVsYXRpb24vbGFib3ItYWRqdW5jdCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBhc3luYyBHZXRMYWJvclJlbGF0aW9uKCkge1xuICAgICAgdmFyIExhYm9yUmVsYXRpb25EYXRhID0gYXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0TGFib3JSZWxhdGlvbicsXG4gICAgICAgICdwb3N0J1xuICAgICAgKVxuICAgICAgaWYgKExhYm9yUmVsYXRpb25EYXRhLnN0YXR1c0NvZGUgPT0gMjAwICYmIExhYm9yUmVsYXRpb25EYXRhLmRhdGEucmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBMYWJvclJlbGF0aW9uRGF0YSA9IExhYm9yUmVsYXRpb25EYXRhLmRhdGEucmVzdWx0XG4gICAgICAgIHRoaXMuTGFib3JSZWxhdGlvbkRhdGEgPSBMYWJvclJlbGF0aW9uRGF0YTtcbiAgICAgICAgTGFib3JSZWxhdGlvbkRhdGEuc2lnbkRhdGU9TGFib3JSZWxhdGlvbkRhdGEuc2lnbkRhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgTGFib3JSZWxhdGlvbkRhdGEucG9zaXRpdmVEYXRlPUxhYm9yUmVsYXRpb25EYXRhLnBvc2l0aXZlRGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgICAgICAvL+WQiOWQjOacn+mZkFxuICAgICAgICB2YXIgc3RhcnREYXRlID0gTGFib3JSZWxhdGlvbkRhdGEuc3RhcnREYXRlLnNwbGl0KCdUJylbMF07XG4gICAgICAgIHZhciBlbmREYXRlID0gTGFib3JSZWxhdGlvbkRhdGEuZW5kRGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgICAgICB0aGlzLmNvbnRyYWN0RGF0ZSA9IHN0YXJ0RGF0ZSArICctLScgKyBlbmREYXRlO1xuICAgICAgICAvL+mZhOS7tuWkhOeQhlxuICAgICAgICB2YXIgYWdyZWVtZW50SWNvbiA9IExhYm9yUmVsYXRpb25EYXRhLmFncmVlbWVudC5uYW1lLnNwbGl0KCcuJylbMV07XG4gICAgICAgIHZhciBhdHRhY2htZW50SWNvbiA9IExhYm9yUmVsYXRpb25EYXRhLmF0dGFjaG1lbnQubmFtZS5zcGxpdCgnLicpWzFdO1xuICAgICAgICB0aGlzLnNldEljb24oYWdyZWVtZW50SWNvbiwgMCk7XG4gICAgICAgIHRoaXMuc2V0SWNvbihhdHRhY2htZW50SWNvbiwgMSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNldEljb24oZmlsZUNsYXNzLCBpbmRleCkge1xuICAgICAgc3dpdGNoIChmaWxlQ2xhc3MpIHtcbiAgICAgICAgY2FzZSAncGRmJzpcbiAgICAgICAgICB2YXIgaWNvbmZvbnQgPSB7fTtcbiAgICAgICAgICBpY29uZm9udFsnaWNvbiddID0gJ2ljb24tcGRmcG5nMSc7XG4gICAgICAgICAgaWNvbmZvbnRbJ2NvbG9yJ10gPSAnI2UyMDAwMCc7XG4gICAgICAgICAgdGhpcy5pY29uW2luZGV4XSA9IGljb25mb250O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xuICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi1wZGZwbmcxJztcbiAgICAgICAgICBpY29uZm9udFsnY29sb3InXSA9ICcjZTIwMDAwJztcbiAgICAgICAgICB0aGlzLmljb25baW5kZXhdID0gaWNvbmZvbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RvY3gnOlxuICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xuICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi13b2xkMSc7XG4gICAgICAgICAgaWNvbmZvbnRbJ2NvbG9yJ10gPSAnIzAwOWRmZic7XG4gICAgICAgICAgdGhpcy5pY29uW2luZGV4XSA9IGljb25mb250O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb2MnOlxuICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xuICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi13b2xkMSc7XG4gICAgICAgICAgaWNvbmZvbnRbJ2NvbG9yJ10gPSAnIzAwOWRmZic7XG4gICAgICAgICAgdGhpcy5pY29uW2luZGV4XSA9IGljb25mb250O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd4bHMnOlxuICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xuICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICBpY29uZm9udFsnY29sb3InXSA9ICcjMDY5NDAwJztcbiAgICAgICAgICB0aGlzLmljb25baW5kZXhdID0gaWNvbmZvbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3hsc3gnOlxuICAgICAgICAgIHZhciBpY29uZm9udCA9IHt9O1xuICAgICAgICAgIGljb25mb250WydpY29uJ10gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICBpY29uZm9udFsnY29sb3InXSA9ICcjMDY5NDAwJztcbiAgICAgICAgICB0aGlzLmljb25baW5kZXhdID0gaWNvbmZvbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgdmFyIGljb25mb250ID0ge307XG4gICAgICAgICAgaWNvbmZvbnRbJ2ljb24nXSA9ICdpY29uLWpwZ2dlc2hpJztcbiAgICAgICAgICBpY29uZm9udFsnY29sb3InXSA9ICcjZmY5OTAwJztcbiAgICAgICAgICB0aGlzLmljb25baW5kZXhdID0gaWNvbmZvbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFyIGljb25mb250ID0ge307XG4gICAgICAgICAgaWNvbmZvbnRbJ2ljb24nXSA9ICdpY29uLXdlaXpoaXdlbmppYW5nZXNoaSc7XG4gICAgICAgICAgaWNvbmZvbnRbJ2NvbG9yJ10gPSAnIzdhN2E3YSc7XG4gICAgICAgICAgdGhpcy5pY29uW2luZGV4XSA9IGljb25mb250O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLkdldExhYm9yUmVsYXRpb24oKVxuICAgIH1cbiAgfVxuIl19