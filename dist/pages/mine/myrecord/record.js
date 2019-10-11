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

var _placeHolderImage = require('./../../../components/placeHolderImage.js');

var _placeHolderImage2 = _interopRequireDefault(_placeHolderImage);

var _mixin = require('./../../../utils/cofig/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$page) {
  _inherits(_default, _wepy$page);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "navbar": { "xmlns:v-bind": "", "v-bind:navbars.once": "navbars", "v-bind:currentTab.sync": "currentTab", "v-bind:twoWayTitle.once": "currentTab" }, "placeHolderImage": { "v-bind:placeHolder.sync": "placeHolder", "v-bind:twoWayTitle.once": "placeHolder" } }, _this.$events = {}, _this.components = {
      navbar: _navbar2.default,
      placeHolderImage: _placeHolderImage2.default
    }, _this.data = {
      //滑动
      currentTab: 0,
      navbars: ['教育背景', '工作经历', '项目经验', '社团兼职'],
      educationsData: [], //教育背景
      workExperiencesData: [], //工作经历
      projectExperiences: [], //项目经验
      socialDuites: [] //社团兼职
    }, _this.mixins = [_mixin2.default], _this.methods = {
      // 跳转至编辑页面
      tocurrent: function tocurrent() {
        if (this.currentTab == 0) {
          _wepy2.default.navigateTo({
            url: '../myrecord/add-record/bg'
          });
        }
        if (this.currentTab == 1) {
          _wepy2.default.navigateTo({
            url: '../myrecord/add-record/work-experience'
          });
        }
        if (this.currentTab == 2) {
          _wepy2.default.navigateTo({
            url: '../myrecord/add-record/project-experience'
          });
        }
      }
    }, _this.watch = {
      currentTab: function currentTab(cur) {
        switch (cur) {
          case 0:
            if (this.educationsData.length == 0) {
              this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
              this.placeHolder.placeHolderShow = true;
            } else {
              this.placeHolder.placeHolderShow = false;
            }
            break;
          case 1:
            if (this.workExperiencesData.length == 0) {
              this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
              this.placeHolder.placeHolderShow = true;
            } else {
              this.placeHolder.placeHolderShow = false;
            }
            break;
          case 2:
            if (this.projectExperiences.length == 0) {
              this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_2;
              this.placeHolder.placeHolderShow = true;
            } else {
              this.placeHolder.placeHolderShow = false;
            }
            break;
          case 3:
            if (this.socialDuites.length == 0) {
              this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_3;
              this.placeHolder.placeHolderShow = true;
            } else {
              this.placeHolder.placeHolderShow = false;
            }
            break;
          default:
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'GetResume',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userId, resumeData, educations, index, workExperiences, firmProjectExperiences, projectExperiences, _index, _index2, socialDuites;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = {
                  id: this.userId
                };
                _context.next = 3;
                return _ajax2.default.getData('/api/services/web/employeeResume/GetResume', 'post', userId);

              case 3:
                resumeData = _context.sent;
                resumeData = resumeData.data.result;
                //教育背景

                educations = resumeData.educations;

                for (index in educations) {
                  educations[index].startDate = educations[index].startDate.split('T')[0];
                  educations[index].endDate = educations[index].endDate.split('T')[0];
                }
                if (educations.length !== 0) {
                  this.educationsData = educations;
                } else {
                  this.placeHolderImageIndex_0 = 0;
                  this.placeHolder.placeHolderImageIndex = 0;
                  this.placeHolder.placeHolderShow = true;
                }
                //工作经历
                workExperiences = resumeData.workExperiences;

                for (index in workExperiences) {
                  workExperiences[index].startDate = workExperiences[index].startDate.split('T')[0];
                  workExperiences[index].endDate = workExperiences[index].endDate.split('T')[0];
                }
                if (workExperiences.length !== 0) {
                  this.workExperiencesData = workExperiences;
                } else {
                  this.placeHolderImageIndex_1 = 0;
                }
                //项目经历
                firmProjectExperiences = resumeData.firmProjectExperiences;
                projectExperiences = resumeData.projectExperiences;

                for (_index in firmProjectExperiences) {
                  firmProjectExperiences[_index]['statusText'] = '本所';
                  firmProjectExperiences[_index].startDate = firmProjectExperiences[_index].startDate.split('T')[0];
                  firmProjectExperiences[_index].endDate = firmProjectExperiences[_index].endDate.split('T')[0];
                }
                for (_index2 in projectExperiences) {
                  projectExperiences[_index2]['statusText'] = '非本所';
                  projectExperiences[_index2].startDate = projectExperiences[_index2].startDate.split('T')[0];
                  projectExperiences[_index2].endDate = projectExperiences[_index2].endDate.split('T')[0];
                }
                if (firmProjectExperiences.length !== 0 && projectExperiences.length !== 0) {
                  this.projectExperiences = firmProjectExperiences.concat(projectExperiences);
                } else {
                  this.placeHolderImageIndex_2 = 0;
                }
                //社团兼职
                socialDuites = resumeData.socialDuites;

                for (index in socialDuites) {
                  socialDuites[index].startDate = socialDuites[index].startDate.split('T')[0];
                  socialDuites[index].endDate = socialDuites[index].endDate.split('T')[0];
                }
                this.socialDuites = socialDuites;
                if (socialDuites.length !== 0) {
                  this.socialDuites = socialDuites;
                } else {
                  this.placeHolderImageIndex_3 = 0;
                }
                this.$apply();

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetResume() {
        return _ref2.apply(this, arguments);
      }

      return GetResume;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.userId = options.id;
      this.GetResume();
      this.$apply();
    }
  }]);

  return _default;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/mine/myrecord/record'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5qcyJdLCJuYW1lcyI6WyIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJuYXZiYXIiLCJwbGFjZUhvbGRlckltYWdlIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJuYXZiYXJzIiwiZWR1Y2F0aW9uc0RhdGEiLCJ3b3JrRXhwZXJpZW5jZXNEYXRhIiwicHJvamVjdEV4cGVyaWVuY2VzIiwic29jaWFsRHVpdGVzIiwibWl4aW5zIiwibWV0aG9kcyIsInRvY3VycmVudCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2F0Y2giLCJjdXIiLCJsZW5ndGgiLCJwbGFjZUhvbGRlciIsInBsYWNlSG9sZGVySW1hZ2VJbmRleCIsInBsYWNlSG9sZGVySW1hZ2VJbmRleF8wIiwicGxhY2VIb2xkZXJTaG93IiwicGxhY2VIb2xkZXJJbWFnZUluZGV4XzEiLCJwbGFjZUhvbGRlckltYWdlSW5kZXhfMiIsInBsYWNlSG9sZGVySW1hZ2VJbmRleF8zIiwidXNlcklkIiwiaWQiLCJhamF4IiwiZ2V0RGF0YSIsInJlc3VtZURhdGEiLCJyZXN1bHQiLCJlZHVjYXRpb25zIiwiaW5kZXgiLCJzdGFydERhdGUiLCJzcGxpdCIsImVuZERhdGUiLCJ3b3JrRXhwZXJpZW5jZXMiLCJmaXJtUHJvamVjdEV4cGVyaWVuY2VzIiwiY29uY2F0IiwiJGFwcGx5Iiwib3B0aW9ucyIsIkdldFJlc3VtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBRUFBLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsMEJBQXlCLFlBQTVFLEVBQXlGLDJCQUEwQixZQUFuSCxFQUFWLEVBQTJJLG9CQUFtQixFQUFDLDJCQUEwQixhQUEzQixFQUF5QywyQkFB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ckIsWTs7QUFDNUIscUJBQVF3QixLQUFSLElBQWlCeEIsWUFBakIsRUFBOEI7QUFDNUJBLCtCQUFhd0IsS0FBYixFQUFvQkMsU0FBcEIsR0FBOEJ6QixhQUFhd0IsS0FBYixFQUFvQkMsU0FBcEIsQ0FBOEJDLEtBQTlCLENBQW9DLEdBQXBDLEVBQXlDLENBQXpDLENBQTlCO0FBQ0ExQiwrQkFBYXdCLEtBQWIsRUFBb0JHLE9BQXBCLEdBQTRCM0IsYUFBYXdCLEtBQWIsRUFBb0JHLE9BQXBCLENBQTRCRCxLQUE1QixDQUFrQyxHQUFsQyxFQUF1QyxDQUF2QyxDQUE1QjtBQUNEO0FBQ0QscUJBQUsxQixZQUFMLEdBQWtCQSxZQUFsQjtBQUNBLG9CQUFHQSxhQUFhUyxNQUFiLEtBQXNCLENBQXpCLEVBQTJCO0FBQ3hCLHVCQUFLVCxZQUFMLEdBQWtCQSxZQUFsQjtBQUNGLGlCQUZELE1BRUs7QUFDRix1QkFBS2dCLHVCQUFMLEdBQThCLENBQTlCO0FBQ0Y7QUFDRCxxQkFBS2UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUVLQyxPLEVBQVM7QUFDZCxXQUFLZixNQUFMLEdBQWFlLFFBQVFkLEVBQXJCO0FBQ0EsV0FBS2UsU0FBTDtBQUNBLFdBQUtGLE1BQUw7QUFDRDs7OztFQXBKMEIzQixlQUFLOEIsSSIsImZpbGUiOiJyZWNvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgYWpheCBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9hamF4LmpzJztcbmltcG9ydCBwbGFjZUhvbGRlckltYWdlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGxhY2VIb2xkZXJJbWFnZSc7XG4gaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi8uLi91dGlscy9jb2ZpZy9taXhpbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJuYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdmJhcnMub25jZVwiOlwibmF2YmFyc1wiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnR3b1dheVRpdGxlLm9uY2VcIjpcImN1cnJlbnRUYWJcIn0sXCJwbGFjZUhvbGRlckltYWdlXCI6e1widi1iaW5kOnBsYWNlSG9sZGVyLnN5bmNcIjpcInBsYWNlSG9sZGVyXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGxhY2VIb2xkZXJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG5hdmJhcixcbiAgICBwbGFjZUhvbGRlckltYWdlXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgLy/mu5HliqhcbiAgICBjdXJyZW50VGFiOiAwLFxuICAgIG5hdmJhcnM6IFsn5pWZ6IKy6IOM5pmvJywgJ+W3peS9nOe7j+WOhicsICfpobnnm67nu4/pqownLCfnpL7lm6LlhbzogYwnXSxcbiAgICBlZHVjYXRpb25zRGF0YTpbXSwvL+aVmeiCsuiDjOaZr1xuICAgIHdvcmtFeHBlcmllbmNlc0RhdGE6W10sLy/lt6XkvZznu4/ljoZcbiAgICBwcm9qZWN0RXhwZXJpZW5jZXM6W10sLy/pobnnm67nu4/pqoxcbiAgICBzb2NpYWxEdWl0ZXM6W10vL+ekvuWbouWFvOiBjFxuICB9O1xuICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDot7Povazoh7PnvJbovpHpobXpnaJcbiAgICB0b2N1cnJlbnQoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGFiID09IDApIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9teXJlY29yZC9hZGQtcmVjb3JkL2JnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL215cmVjb3JkL2FkZC1yZWNvcmQvd29yay1leHBlcmllbmNlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMikge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL215cmVjb3JkL2FkZC1yZWNvcmQvcHJvamVjdC1leHBlcmllbmNlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICB3YXRjaD17XG4gICAgY3VycmVudFRhYihjdXIpe1xuICAgICAgc3dpdGNoIChjdXIpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGlmKHRoaXMuZWR1Y2F0aW9uc0RhdGEubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzA7XG4gICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmKHRoaXMud29ya0V4cGVyaWVuY2VzRGF0YS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4ID0gdGhpcy5wbGFjZUhvbGRlckltYWdlSW5kZXhfMTtcbiAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYodGhpcy5wcm9qZWN0RXhwZXJpZW5jZXMubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVySW1hZ2VJbmRleCA9IHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzI7XG4gICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IHRydWU7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyLnBsYWNlSG9sZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGlmKHRoaXMuc29jaWFsRHVpdGVzLmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlckltYWdlSW5kZXggPSB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8zO1xuICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIEdldFJlc3VtZSgpe1xuICAgIHZhciB1c2VySWQ9e1xuICAgICAgaWQ6dGhpcy51c2VySWRcbiAgICB9XG4gICAgdmFyIHJlc3VtZURhdGE9YXdhaXQgYWpheC5nZXREYXRhKFxuICAgICAgJy9hcGkvc2VydmljZXMvd2ViL2VtcGxveWVlUmVzdW1lL0dldFJlc3VtZScsXG4gICAgICAncG9zdCcsXG4gICAgICB1c2VySWRcbiAgICApXG4gICAgdmFyIHJlc3VtZURhdGE9cmVzdW1lRGF0YS5kYXRhLnJlc3VsdDtcbiAgICAvL+aVmeiCsuiDjOaZr1xuICAgIHZhciBlZHVjYXRpb25zID1yZXN1bWVEYXRhLmVkdWNhdGlvbnNcbiAgICAgZm9yKHZhciBpbmRleCBpbiBlZHVjYXRpb25zKXtcbiAgICAgIGVkdWNhdGlvbnNbaW5kZXhdLnN0YXJ0RGF0ZT1lZHVjYXRpb25zW2luZGV4XS5zdGFydERhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICAgIGVkdWNhdGlvbnNbaW5kZXhdLmVuZERhdGU9ZWR1Y2F0aW9uc1tpbmRleF0uZW5kRGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgIH1cbiAgICBpZihlZHVjYXRpb25zLmxlbmd0aCE9PTApe1xuICAgICAgdGhpcy5lZHVjYXRpb25zRGF0YT1lZHVjYXRpb25zO1xuICAgIH1lbHNle1xuICAgICAgIHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzAgPSAwO1xuICAgICAgIHRoaXMucGxhY2VIb2xkZXIucGxhY2VIb2xkZXJJbWFnZUluZGV4PTA7XG4gICAgICAgdGhpcy5wbGFjZUhvbGRlci5wbGFjZUhvbGRlclNob3cgPSB0cnVlO1xuICAgIH1cbiAgICAvL+W3peS9nOe7j+WOhlxuICAgdmFyIHdvcmtFeHBlcmllbmNlcz0gcmVzdW1lRGF0YS53b3JrRXhwZXJpZW5jZXM7XG4gICAgZm9yKHZhciBpbmRleCBpbiB3b3JrRXhwZXJpZW5jZXMpe1xuICAgICAgd29ya0V4cGVyaWVuY2VzW2luZGV4XS5zdGFydERhdGU9d29ya0V4cGVyaWVuY2VzW2luZGV4XS5zdGFydERhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICAgIHdvcmtFeHBlcmllbmNlc1tpbmRleF0uZW5kRGF0ZT13b3JrRXhwZXJpZW5jZXNbaW5kZXhdLmVuZERhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICB9XG4gICAgaWYod29ya0V4cGVyaWVuY2VzLmxlbmd0aCE9PTApe1xuICAgICAgdGhpcy53b3JrRXhwZXJpZW5jZXNEYXRhPXdvcmtFeHBlcmllbmNlcztcbiAgICB9ZWxzZXtcbiAgICAgICB0aGlzLnBsYWNlSG9sZGVySW1hZ2VJbmRleF8xID0gMDtcbiAgICB9XG4gICAgLy/pobnnm67nu4/ljoZcbiAgICB2YXIgZmlybVByb2plY3RFeHBlcmllbmNlcz1yZXN1bWVEYXRhLmZpcm1Qcm9qZWN0RXhwZXJpZW5jZXM7XG4gICAgdmFyIHByb2plY3RFeHBlcmllbmNlcz1yZXN1bWVEYXRhLnByb2plY3RFeHBlcmllbmNlcztcbiAgICBmb3IobGV0IGluZGV4IGluIGZpcm1Qcm9qZWN0RXhwZXJpZW5jZXMpe1xuICAgICAgZmlybVByb2plY3RFeHBlcmllbmNlc1tpbmRleF1bJ3N0YXR1c1RleHQnXT0n5pys5omAJztcbiAgICAgIGZpcm1Qcm9qZWN0RXhwZXJpZW5jZXNbaW5kZXhdLnN0YXJ0RGF0ZT1maXJtUHJvamVjdEV4cGVyaWVuY2VzW2luZGV4XS5zdGFydERhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICAgIGZpcm1Qcm9qZWN0RXhwZXJpZW5jZXNbaW5kZXhdLmVuZERhdGU9ZmlybVByb2plY3RFeHBlcmllbmNlc1tpbmRleF0uZW5kRGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgIH1cbiAgICBmb3IobGV0IGluZGV4IGluIHByb2plY3RFeHBlcmllbmNlcyl7XG4gICAgICBwcm9qZWN0RXhwZXJpZW5jZXNbaW5kZXhdWydzdGF0dXNUZXh0J109J+mdnuacrOaJgCc7XG4gICAgICBwcm9qZWN0RXhwZXJpZW5jZXNbaW5kZXhdLnN0YXJ0RGF0ZT1wcm9qZWN0RXhwZXJpZW5jZXNbaW5kZXhdLnN0YXJ0RGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgICAgcHJvamVjdEV4cGVyaWVuY2VzW2luZGV4XS5lbmREYXRlPXByb2plY3RFeHBlcmllbmNlc1tpbmRleF0uZW5kRGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgIH1cbiAgICBpZihmaXJtUHJvamVjdEV4cGVyaWVuY2VzLmxlbmd0aCE9PTAmJnByb2plY3RFeHBlcmllbmNlcy5sZW5ndGghPT0wKXtcbiAgICAgICB0aGlzLnByb2plY3RFeHBlcmllbmNlcz1maXJtUHJvamVjdEV4cGVyaWVuY2VzLmNvbmNhdChwcm9qZWN0RXhwZXJpZW5jZXMpO1xuICAgIH1lbHNle1xuICAgICAgIHRoaXMucGxhY2VIb2xkZXJJbWFnZUluZGV4XzIgPSAwO1xuICAgIH1cbiAgICAvL+ekvuWbouWFvOiBjFxuICAgIHZhciBzb2NpYWxEdWl0ZXM9cmVzdW1lRGF0YS5zb2NpYWxEdWl0ZXM7XG4gICAgZm9yKHZhciBpbmRleCBpbiBzb2NpYWxEdWl0ZXMpe1xuICAgICAgc29jaWFsRHVpdGVzW2luZGV4XS5zdGFydERhdGU9c29jaWFsRHVpdGVzW2luZGV4XS5zdGFydERhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICAgIHNvY2lhbER1aXRlc1tpbmRleF0uZW5kRGF0ZT1zb2NpYWxEdWl0ZXNbaW5kZXhdLmVuZERhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICB9XG4gICAgdGhpcy5zb2NpYWxEdWl0ZXM9c29jaWFsRHVpdGVzO1xuICAgIGlmKHNvY2lhbER1aXRlcy5sZW5ndGghPT0wKXtcbiAgICAgICB0aGlzLnNvY2lhbER1aXRlcz1zb2NpYWxEdWl0ZXM7XG4gICAgfWVsc2V7XG4gICAgICAgdGhpcy5wbGFjZUhvbGRlckltYWdlSW5kZXhfMyA9MDtcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMudXNlcklkID1vcHRpb25zLmlkO1xuICAgIHRoaXMuR2V0UmVzdW1lKClcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==