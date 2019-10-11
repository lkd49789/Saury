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

var approveDetail = function (_wepy$page) {
    _inherits(approveDetail, _wepy$page);

    function approveDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, approveDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = approveDetail.__proto__ || Object.getPrototypeOf(approveDetail)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
            CaseFileStampOutputData: {}
        }, _this.components = {}, _this.methods = {
            previewFile: function previewFile(fileId, fileClass) {
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
            },
            toAuditPage: function toAuditPage(id) {
                wx.navigateTo({ url: './approveAudit?id=' + id });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(approveDetail, [{
        key: 'GetCaseFileStampOutput',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, resData, CaseFileStampOutputData, http, avatar;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    id: this.id
                                };
                                _context.next = 3;
                                return _ajax2.default.getData('/api/services/web/caseFileStamp/GetCaseFileStampOutput', 'post', data);

                            case 3:
                                resData = _context.sent;

                                if (!(resData.statusCode == 200)) {
                                    _context.next = 45;
                                    break;
                                }

                                CaseFileStampOutputData = resData.data.result;

                                this.CaseFileStampOutputData = CaseFileStampOutputData;
                                CaseFileStampOutputData.fileExtension = CaseFileStampOutputData.fileExtension.toLowerCase();
                                _context.t0 = CaseFileStampOutputData.fileExtension;
                                _context.next = _context.t0 === '.pdf' ? 11 : _context.t0 === '.png' ? 14 : _context.t0 === '.xls' ? 17 : _context.t0 === '.xlsx' ? 20 : _context.t0 === '.docx' ? 23 : _context.t0 === '.doc' ? 26 : _context.t0 === '.jpg' ? 29 : _context.t0 === '.mp4' ? 32 : 35;
                                break;

                            case 11:
                                CaseFileStampOutputData.fileIcon = 'icon-pdfpng1';
                                CaseFileStampOutputData.fileColor = '#e20000';
                                return _context.abrupt('break', 38);

                            case 14:
                                CaseFileStampOutputData.fileIcon = 'icon-pdfpng1';
                                CaseFileStampOutputData.fileColor = '#e20000';
                                return _context.abrupt('break', 38);

                            case 17:
                                CaseFileStampOutputData.fileIcon = 'icon-exl1';
                                CaseFileStampOutputData.fileColor = '#069400';
                                return _context.abrupt('break', 38);

                            case 20:
                                CaseFileStampOutputData.fileIcon = 'icon-exl1';
                                CaseFileStampOutputData.fileColor = '#069400';
                                return _context.abrupt('break', 38);

                            case 23:
                                CaseFileStampOutputData.fileIcon = 'icon-wold1';
                                CaseFileStampOutputData.fileColor = '#009dff';
                                return _context.abrupt('break', 38);

                            case 26:
                                CaseFileStampOutputData.fileIcon = 'icon-wold1';
                                CaseFileStampOutputData.fileColor = '#009dff';
                                return _context.abrupt('break', 38);

                            case 29:
                                CaseFileStampOutputData.fileIcon = 'icon-jpggeshi';
                                CaseFileStampOutputData.fileColor = '#ff9900';
                                return _context.abrupt('break', 38);

                            case 32:
                                CaseFileStampOutputData.fileIcon = 'icon-shipinwenjian';
                                CaseFileStampOutputData.fileColor = '#fc5959';
                                return _context.abrupt('break', 38);

                            case 35:
                                CaseFileStampOutputData.fileIcon = 'icon-weizhiwenjiangeshi';
                                CaseFileStampOutputDatafileColor = '#7a7a7a';
                                return _context.abrupt('break', 38);

                            case 38:
                                if (!CaseFileStampOutputData.approveUser) {
                                    _context.next = 44;
                                    break;
                                }

                                http = '/api/services/web/personal/GetEmployeePhoto?id=' + CaseFileStampOutputData.approveUser;
                                _context.next = 42;
                                return _ajax2.default.getAavatar(http);

                            case 42:
                                avatar = _context.sent;

                                CaseFileStampOutputData.Avatar = avatar;

                            case 44:
                                CaseFileStampOutputData.fileSize = this.formatFileSize(+CaseFileStampOutputData.fileSize);

                            case 45:
                                this.$apply();

                            case 46:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function GetCaseFileStampOutput() {
                return _ref2.apply(this, arguments);
            }

            return GetCaseFileStampOutput;
        }()
    }, {
        key: 'formatFileSize',
        value: function formatFileSize(size) {
            var fileSize = null;
            fileSize = size >= 1024 ? (size / 1024 / 1024).toFixed(2) + 'MB' : (size / 1024).toFixed(2) + 'KB';
            return fileSize;
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.id = options.id;
            this.GetCaseFileStampOutput();
            this.$apply();
        }
    }]);

    return approveDetail;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(approveDetail , 'pages/modules/auditModules/approveAudit/approveDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmVEZXRhaWwuanMiXSwibmFtZXMiOlsiYXBwcm92ZURldGFpbCIsInByb3BzIiwiZGF0YSIsIkNhc2VGaWxlU3RhbXBPdXRwdXREYXRhIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJwcmV2aWV3RmlsZSIsImZpbGVJZCIsImZpbGVDbGFzcyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImh0dHAiLCJhamF4IiwicHJlVmlldyIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwidG9BdWRpdFBhZ2UiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiZ2V0RGF0YSIsInJlc0RhdGEiLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiZmlsZUV4dGVuc2lvbiIsImZpbGVJY29uIiwiZmlsZUNvbG9yIiwiQ2FzZUZpbGVTdGFtcE91dHB1dERhdGFmaWxlQ29sb3IiLCJhcHByb3ZlVXNlciIsImdldEFhdmF0YXIiLCJhdmF0YXIiLCJBdmF0YXIiLCJmaWxlU2l6ZSIsImZvcm1hdEZpbGVTaXplIiwiJGFwcGx5Iiwic2l6ZSIsInRvRml4ZWQiLCJvcHRpb25zIiwiR2V0Q2FzZUZpbGVTdGFtcE91dHB1dCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7d01BQ2pCQyxLLEdBQVEsRSxRQUNSQyxJLEdBQU87QUFDSEMscUNBQXlCO0FBRHRCLFMsUUFHUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ05DLHVCQURNLHVCQUNNQyxNQUROLEVBQ2NDLFNBRGQsRUFDeUI7QUFDM0JBLDRCQUFXQSxVQUFVQyxPQUFWLENBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCQyxXQUEzQixFQUFYO0FBQ0Esb0JBQUlGLGFBQWEsS0FBYixJQUFvQkEsYUFBYSxLQUFqQyxJQUF3Q0Es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Q0FBeUIsQ0FBekIsSUFBNEIsSUFBdkMsR0FBNEMsQ0FBQ0QsT0FBSyxJQUFOLEVBQVlDLE9BQVosQ0FBb0IsQ0FBcEIsSUFBdUIsSUFBNUU7QUFDQSxtQkFBT0osUUFBUDtBQUNIOzs7K0JBQ01LLE8sRUFBUztBQUNaLGlCQUFLdkIsRUFBTCxHQUFVdUIsUUFBUXZCLEVBQWxCO0FBQ0EsaUJBQUt3QixzQkFBTDtBQUNBLGlCQUFLSixNQUFMO0FBQ0g7Ozs7RUFqR3NDSyxlQUFLQyxJOztrQkFBM0IvQyxhIiwiZmlsZSI6ImFwcHJvdmVEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhcHByb3ZlRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIENhc2VGaWxlU3RhbXBPdXRwdXREYXRhOiB7fVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBwcmV2aWV3RmlsZShmaWxlSWQsIGZpbGVDbGFzcykge1xuICAgICAgICAgICAgICAgIGZpbGVDbGFzcz0gZmlsZUNsYXNzLnJlcGxhY2UoJy4nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZUNsYXNzID09ICdwZGYnfHxmaWxlQ2xhc3MgPT0gJ3BuZyd8fGZpbGVDbGFzcyA9PSAneHNsJ3x8ZmlsZUNsYXNzID09ICd4bHN4J3x8ZmlsZUNsYXNzID09ICdqcGcnfHxmaWxlQ2xhc3MgPT0gJ2RvYyd8fGZpbGVDbGFzcyA9PSAnZG9jeCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvZG9jdW1lbnQvR2V0RG9jdW1lbnRGaWxlP2lkPScgKyBmaWxlSWQ7XG4gICAgICAgICAgICAgICAgICAgIGFqYXgucHJlVmlldyhodHRwLCBmaWxlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aaguS4jeaUr+aMgeatpOaWh+S7tumihOiniO+8gScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9BdWRpdFBhZ2UoaWQpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL2FwcHJvdmVBdWRpdD9pZD0nK2lkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgd2F0Y2ggPSB7fTtcbiAgICAgICAgY29tcHV0ZWQgPSB7fTtcbiAgICAgICAgYXN5bmMgR2V0Q2FzZUZpbGVTdGFtcE91dHB1dCgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFqYXguZ2V0RGF0YShcbiAgICAgICAgICAgICAgICAnL2FwaS9zZXJ2aWNlcy93ZWIvY2FzZUZpbGVTdGFtcC9HZXRDYXNlRmlsZVN0YW1wT3V0cHV0JyxcbiAgICAgICAgICAgICAgICAncG9zdCcsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEgPSByZXNEYXRhLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEgPSBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YTtcbiAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlRXh0ZW5zaW9uPUNhc2VGaWxlU3RhbXBPdXRwdXREYXRhLmZpbGVFeHRlbnNpb24udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZUV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcucGRmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIENhc2VGaWxlU3RhbXBPdXRwdXREYXRhLmZpbGVJY29uID0gJ2ljb24tcGRmcG5nMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlQ29sb3IgPSAnI2UyMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLnBuZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlSWNvbiA9ICdpY29uLXBkZnBuZzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZUNvbG9yID0gJyNlMjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJy54bHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZUljb24gPSAnaWNvbi1leGwxJztcbiAgICAgICAgICAgICAgICAgICAgICAgIENhc2VGaWxlU3RhbXBPdXRwdXREYXRhLmZpbGVDb2xvciA9ICcjMDY5NDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcueGxzeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlSWNvbiA9ICdpY29uLWV4bDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZUNvbG9yID0gJyMwNjk0MDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2N4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIENhc2VGaWxlU3RhbXBPdXRwdXREYXRhLmZpbGVJY29uID0gJ2ljb24td29sZDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZUNvbG9yID0gJyMwMDlkZmYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJy5kb2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZUljb24gPSAnaWNvbi13b2xkMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlQ29sb3IgPSAnIzAwOWRmZic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLmpwZyc6XG4gICAgICAgICAgICAgICAgICAgICAgIENhc2VGaWxlU3RhbXBPdXRwdXREYXRhLmZpbGVJY29uID0gJ2ljb24tanBnZ2VzaGknO1xuICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlQ29sb3IgPSAnI2ZmOTkwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLm1wNCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlSWNvbiA9ICdpY29uLXNoaXBpbndlbmppYW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZUNvbG9yID0gJyNmYzU5NTknO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YS5maWxlSWNvbiA9ICdpY29uLXdlaXpoaXdlbmppYW5nZXNoaSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXNlRmlsZVN0YW1wT3V0cHV0RGF0YWZpbGVDb2xvciA9ICcjN2E3YTdhJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuYXBwcm92ZVVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0dHAgPSAnL2FwaS9zZXJ2aWNlcy93ZWIvcGVyc29uYWwvR2V0RW1wbG95ZWVQaG90bz9pZD0nICsgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuYXBwcm92ZVVzZXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmF0YXIgPSBhd2FpdCBhamF4LmdldEFhdmF0YXIoaHR0cCk7XG4gICAgICAgICAgICAgICAgICAgIENhc2VGaWxlU3RhbXBPdXRwdXREYXRhLkF2YXRhciA9IGF2YXRhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZVNpemU9dGhpcy5mb3JtYXRGaWxlU2l6ZSgrQ2FzZUZpbGVTdGFtcE91dHB1dERhdGEuZmlsZVNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXRGaWxlU2l6ZShzaXplKXtcbiAgICAgICAgICAgIHZhciBmaWxlU2l6ZT1udWxsO1xuICAgICAgICAgICAgZmlsZVNpemU9c2l6ZT49MTAyND8oc2l6ZS8xMDI0LzEwMjQpLnRvRml4ZWQoMikrJ01CJzooc2l6ZS8xMDI0KS50b0ZpeGVkKDIpKydLQic7XG4gICAgICAgICAgICByZXR1cm4gZmlsZVNpemVcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGlzLkdldENhc2VGaWxlU3RhbXBPdXRwdXQoKTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH07XG4gICAgfVxuIl19