function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Components/daily-chart/daily-chart.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Components/daily-chart/daily-chart.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DailyChartComponent */

  /***/
  function srcAppComponentsDailyChartDailyChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DailyChartComponent", function () {
      return DailyChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/weather-helper */
    "./src/app/Services/weather-helper.ts");
    /* harmony import */


    var src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/weather.service */
    "./src/app/Services/weather.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");

    function DailyChartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r13.eChartOptions);
      }
    }

    var DailyChartComponent =
    /*#__PURE__*/
    function () {
      function DailyChartComponent(_weatherService, datePipe) {
        _classCallCheck(this, DailyChartComponent);

        this._weatherService = _weatherService;
        this.datePipe = datePipe;
        this.xAxisData = [];
        this.seriesData1 = [];
        this.seriesData2 = [];
        this.minYAxisValue = 0;
        this.maxYAxisValue = 0;
        this.theme = 'light';
      }

      _createClass(DailyChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._weatherService.getUnitType().subscribe(function (res) {
            _this.unitTypeValue = res ? '°F' : '°C';
          });
        }
      }, {
        key: "weatherData",
        set: function set(data) {
          var _this2 = this;

          this.chartweatherData = data;

          if (this.chartweatherData && this.chartweatherData.daily && this.chartweatherData.daily.length > 0) {
            // console.log("In daily-chart ", this.chartweatherData);
            this.xAxisData = [];
            this.seriesData1 = [];
            this.seriesData2 = [];
            this.chartweatherData.daily.forEach(function (element) {
              var newDateTime = Object(src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_1__["LocalDateTimeByUnixTimestamp"])(element.dt, _this2.chartweatherData.timezone_offset); // let dayOfWeek = DAYS.filter(day => day.id === newDateTime.getDay())[0].day;

              var xAxisArrayValue = _this2.datePipe.transform(newDateTime, 'dd/MM');

              _this2.xAxisData.push(xAxisArrayValue);

              _this2.seriesData1.push(element.temp.min);

              _this2.seriesData2.push(element.temp.max);
            });
            var min_value = Math.min(Math.min.apply(Math, _toConsumableArray(this.seriesData1)), Math.min.apply(Math, _toConsumableArray(this.seriesData2)));
            var max_value = Math.max(Math.max.apply(Math, _toConsumableArray(this.seriesData1)), Math.max.apply(Math, _toConsumableArray(this.seriesData2)));
            this.minYAxisValue = Math.floor(min_value / 10) * 10;
            this.maxYAxisValue = Math.ceil(max_value / 10) * 10;
            this.smoothLineChart();
          }
        }
      }, {
        key: "smoothLineChart",
        value: function smoothLineChart() {
          this.eChartOptions = {
            title: {
              show: true,
              text: Object(src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_1__["TitleCase"])(this.cityName)
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              show: true,
              type: 'plain'
            },
            xAxis: {
              name: 'Day',
              type: 'category',
              data: this.xAxisData
            },
            yAxis: {
              name: 'Temperature (' + this.unitTypeValue + ')',
              type: 'value',
              min: this.minYAxisValue,
              max: this.maxYAxisValue
            },
            series: [{
              name: 'Min temperature',
              data: this.seriesData1,
              type: 'line',
              smooth: true
            }, {
              name: 'Max temperature',
              data: this.seriesData2,
              type: 'line',
              smooth: true
            }]
          };
        }
      }]);

      return DailyChartComponent;
    }();

    DailyChartComponent.ɵfac = function DailyChartComponent_Factory(t) {
      return new (t || DailyChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]));
    };

    DailyChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DailyChartComponent,
      selectors: [["app-daily-chart"]],
      inputs: {
        cityName: "cityName",
        weatherData: "weatherData"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "chartDiv", 4, "ngIf"], [1, "chartDiv"], [1, "card", "chartCard", "mx-auto"], [1, "card-body", "chartCardBody"], ["echarts", "", 1, "demo-chart", 2, "height", "350px !important", 3, "options"]],
      template: function DailyChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DailyChartComponent_div_0_Template, 4, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eChartOptions && ctx.chartweatherData && ctx.chartweatherData.daily && ctx.chartweatherData.daily.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsDirective"]],
      styles: [".chartDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .chartDiv[_ngcontent-%COMP%] {\r\n        padding: 0px 2px;\r\n    }\r\n}\r\n\r\n.chartCard[_ngcontent-%COMP%] {\r\n    border-radius: 30px;\r\n    background-color: #fff;\r\n    \r\n    \r\n    width: 800px;\r\n    height: 350px;\r\n}\r\n\r\n.chartCard[_ngcontent-%COMP%]:hover {\r\n    \r\n    \r\n    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);\r\n    -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);\r\n    -moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kYWlseS1jaGFydC9kYWlseS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQjt3QkFDb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrRUFBa0U7SUFDbEUsNkNBQTZDO0lBQzdDLDJDQUEyQztJQUMzQyxtREFBbUQ7SUFDbkQsZ0RBQWdEO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kYWlseS1jaGFydC9kYWlseS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0RGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2hhcnREaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGFydENhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvKiBUaGlzIGlzIG5vdCByZXNwb25zaXZlICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDQzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7ICovXHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4uY2hhcnRDYXJkOmhvdmVyIHtcclxuICAgIC8qIGJveC1zaGFkb3c6IDIwcHggMjBweCA2MHB4ICNiZWJlYmUsIC0yMHB4IC0yMHB4IDYwcHggI2ZmZmZmZjsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsMzMsMzMsLjIpOyAgKi9cclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-daily-chart',
          templateUrl: './daily-chart.component.html',
          styleUrls: ['./daily-chart.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      }, {
        cityName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weatherData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Components/lhscontents/lhscontents.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Components/lhscontents/lhscontents.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LHSContentsComponent */

  /***/
  function srcAppComponentsLhscontentsLhscontentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LHSContentsComponent", function () {
      return LHSContentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_appConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/appConfig */
    "./src/app/appConfig.ts");
    /* harmony import */


    var src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Constants/weather-dashboard-constants */
    "./src/app/Constants/weather-dashboard-constants.ts");
    /* harmony import */


    var src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/weather-helper */
    "./src/app/Services/weather-helper.ts");
    /* harmony import */


    var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! i18n-iso-countries */
    "./node_modules/i18n-iso-countries/index.js");
    /* harmony import */


    var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/weather.service */
    "./src/app/Services/weather.service.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LHSContentsComponent_div_10_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2103");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LHSContentsComponent_div_10_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2109");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LHSContentsComponent_div_10_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2103");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LHSContentsComponent_div_10_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2109");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LHSContentsComponent_div_10_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2103");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LHSContentsComponent_div_10_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2109");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LHSContentsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LHSContentsComponent_div_10_span_5_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LHSContentsComponent_div_10_span_6_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LHSContentsComponent_div_10_span_12_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LHSContentsComponent_div_10_span_13_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LHSContentsComponent_div_10_span_18_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LHSContentsComponent_div_10_span_19_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "lord-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "lord-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "lord-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 17, ctx_r6.currentTemp, "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Min: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 20, ctx_r6.todayMinTemp, "1.0-0"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Max: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 23, ctx_r6.todayMaxTemp, "1.0-0"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunrise: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 26, ctx_r6.sunriseTime, "h:mm a"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunset: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 29, ctx_r6.sunsetTime, "h:mm a"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 32, ctx_r6.weatherDescrption));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0", ctx_r6.cityName, ", ", ctx_r6.countryName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 34, ctx_r6.currentDatetime, "EEEE, MMM d, y"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 37, ctx_r6.currentDatetime, "h:mm a"), " ");
      }
    }

    var LHSContentsComponent =
    /*#__PURE__*/
    function () {
      function LHSContentsComponent(_weatherService) {
        _classCallCheck(this, LHSContentsComponent);

        this._weatherService = _weatherService;
        this.cityName = '';
        this.countryName = '';
        this.unitTypeFahrenheit = false;
        this.displayUnitType = src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["CELCIUS"];
        this.iconurl = '';
        this.weatherDescrption = '';
        this.onUnitTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LHSContentsComponent, [{
        key: "oneCallWeatherData",
        set: function set(data) {
          this.OneCallLocationWeatherData = data;

          if (this.OneCallLocationWeatherData) {
            this.iconurl = src_app_appConfig__WEBPACK_IMPORTED_MODULE_2__["IconUrl"] + this.OneCallLocationWeatherData.current.weather[0].icon + '@4x.png';
            this.currentDatetime = Object(src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_4__["LocalDateTime"])(this.OneCallLocationWeatherData.timezone_offset);
            this.currentTemp = this.OneCallLocationWeatherData.current.temp; // this.todayMinTemp = this.locationWeatherData.main.temp_min;
            // this.todayMaxTemp = this.locationWeatherData.main.temp_max;

            this.todayMinTemp = this.OneCallLocationWeatherData.daily[0].temp.min;
            this.todayMaxTemp = this.OneCallLocationWeatherData.daily[0].temp.max;
            this.weatherDescrption = this.locationWeatherData.weather[0].description;
            this.sunriseTime = Object(src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_4__["LocalDateTimeByUnixTimestamp"])(this.OneCallLocationWeatherData.current.sunrise, this.OneCallLocationWeatherData.timezone_offset);
            this.sunsetTime = Object(src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_4__["LocalDateTimeByUnixTimestamp"])(this.OneCallLocationWeatherData.current.sunset, this.OneCallLocationWeatherData.timezone_offset);

            if (this.locationWeatherData && this.locationWeatherData.name) {
              this.cityName = this.locationWeatherData.name; // this.countryName = this.locationWeatherData.sys.country;

              var countries = __webpack_require__(
              /*! i18n-iso-countries */
              "./node_modules/i18n-iso-countries/index.js"); // console.log(countries.getNames("en", {select: "official"}));


              this.countryName = countries.getName(this.locationWeatherData.sys.country, "en", {
                select: "official"
              });
            } // console.log("IconUrl", this.iconurl, "\n", "currentDatetime", this.currentDatetime);

          }
        }
      }, {
        key: "weatherData",
        set: function set(data) {
          this.locationWeatherData = data; // if (this.locationWeatherData && this.locationWeatherData.name) {
          //   this.cityName = this.locationWeatherData.name;
          // }
        }
      }, {
        key: "excludesArray",
        set: function set(array) {
          this.excludes = array; // console.log("In LHS excludes = ", this.excludes);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__["registerLocale"](__webpack_require__(
          /*! i18n-iso-countries/langs/en.json */
          "./node_modules/i18n-iso-countries/langs/en.json"));
        }
      }, {
        key: "handleSwitchSelection",
        value: function handleSwitchSelection() {
          var _this3 = this;

          this._weatherService.setUnitType(this.unitTypeFahrenheit);

          if (this.OneCallLocationWeatherData && this.cityName) {
            // this.cityName = this.OneCallLocationWeatherData.timezone.split('/')[1];
            this._weatherService.loadCurrentWeatherByCityName(this.cityName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (data) {
              _this3.locationWeatherData = data; // console.log("In LHS locationWeatherData = \n", data);

              return _this3._weatherService.loadOneAPICallDataByCurrentData(data, _this3.excludes);
            })).subscribe(function (responseWeatherData) {
              _this3.OneCallLocationWeatherData = responseWeatherData;
              _this3.displayUnitType = _this3.unitTypeFahrenheit ? src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["FAHRENHEIT"] : src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["CELCIUS"];

              _this3.onUnitTypeChange.emit(_this3.OneCallLocationWeatherData);
            }, function (responseWeather) {
              _this3.errorMsg = responseWeather; // console.log(responseWeather);
            }, function () {// console.log("handleSwitchSelection() Completed");
            });
          } else {
            this.displayUnitType = this.unitTypeFahrenheit ? src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["FAHRENHEIT"] : src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["CELCIUS"];
          }
        }
      }]);

      return LHSContentsComponent;
    }();

    LHSContentsComponent.ɵfac = function LHSContentsComponent_Factory(t) {
      return new (t || LHSContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"]));
    };

    LHSContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LHSContentsComponent,
      selectors: [["app-lhscontents"]],
      inputs: {
        oneCallWeatherData: "oneCallWeatherData",
        weatherData: "weatherData",
        excludesArray: "excludesArray"
      },
      outputs: {
        onUnitTypeChange: "onUnitTypeChange"
      },
      decls: 11,
      vars: 2,
      consts: [["id", "mainLHSDiv"], [1, "unitToggler"], [1, "unitTogglerContentCel"], [1, "unitTogglerContent"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [1, "unitTogglerContentFah"], ["class", "tempCityInfo", 4, "ngIf"], [1, "tempCityInfo"], [1, "temp"], [1, "tempValue"], [4, "ngIf"], [1, "tempMinMax", "my-2"], [1, "tempMin"], [1, "tempMinValue"], [1, "tempMax"], [1, "tempMaxValue"], [1, "sunRiseSunset", "my-2"], [1, "sunRiseDiv"], ["aria-hidden", "true", 1, "fa", "fa-sun-o"], [1, "sunSetDiv"], ["aria-hidden", "true", 1, "fa", "fa-moon-o"], [1, "weatherIconDiv"], ["alt", "Icon", 1, "weatherIcon", 3, "src"], [1, "weatherDesc"], [1, "cityInfo", "mx-1"], ["src", "https://cdn.lordicon.com/zzcjjxew.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"], [1, "timeInfo", "my-2", "d-grid", "gap-2"], [1, "timeInfoDate"], ["src", "https://cdn.lordicon.com/gmzxduhd.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"], [1, "timeInfoTime"], ["src", "https://cdn.lordicon.com/kbtmbyzy.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"]],
      template: function LHSContentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2103");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-slide-toggle", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LHSContentsComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) {
            return ctx.unitTypeFahrenheit = $event;
          })("change", function LHSContentsComponent_Template_mat_slide_toggle_change_6_listener() {
            return ctx.handleSwitchSelection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2109");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LHSContentsComponent_div_10_Template, 47, 40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.unitTypeFahrenheit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OneCallLocationWeatherData);
        }
      },
      directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n#mainLHSDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n.unitToggler[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.unitTogglerContent[_ngcontent-%COMP%], .unitTogglerContentCel[_ngcontent-%COMP%], .unitTogglerContentFah[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n.tempCityInfo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 65px;\r\n}\r\n\r\n.weatherIconDiv[_ngcontent-%COMP%] {\r\n    height: 130px;\r\n}\r\n\r\n.weatherIcon[_ngcontent-%COMP%] {\r\n    max-height: 80%;\r\n    max-width: 100%\r\n}\r\n\r\n.weatherIcon[_ngcontent-%COMP%], .weatherDesc[_ngcontent-%COMP%] {\r\n    \r\n    text-align: center;\r\n}\r\n\r\n.weatherDesc[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.cityInfo[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.timeInfoDate[_ngcontent-%COMP%], .timeInfoTime[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.tempMinMax[_ngcontent-%COMP%], .sunRiseSunset[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9saHNjb250ZW50cy9saHNjb250ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2xoc2NvbnRlbnRzL2xoc2NvbnRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI21haW5MSFNEaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnVuaXRUb2dnbGVyIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51bml0VG9nZ2xlckNvbnRlbnQsIC51bml0VG9nZ2xlckNvbnRlbnRDZWwsIC51bml0VG9nZ2xlckNvbnRlbnRGYWgge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGVtcENpdHlJbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGVtcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbn1cclxuXHJcbi53ZWF0aGVySWNvbkRpdiB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4ud2VhdGhlckljb24ge1xyXG4gICAgbWF4LWhlaWdodDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi53ZWF0aGVySWNvbiwgLndlYXRoZXJEZXNjIHtcclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2VhdGhlckRlc2Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2l0eUluZm8ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGltZUluZm9EYXRlLCAudGltZUluZm9UaW1lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnRlbXBNaW5NYXgsIC5zdW5SaXNlU3Vuc2V0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LHSContentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lhscontents',
          templateUrl: './lhscontents.component.html',
          styleUrls: ['./lhscontents.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"]
        }];
      }, {
        oneCallWeatherData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weatherData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        excludesArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onUnitTypeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Constants/weather-dashboard-constants */
    "./src/app/Constants/weather-dashboard-constants.ts");
    /* harmony import */


    var src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/weather.service */
    "./src/app/Services/weather.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../lhscontents/lhscontents.component */
    "./src/app/Components/lhscontents/lhscontents.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../daily-chart/daily-chart.component */
    "./src/app/Components/daily-chart/daily-chart.component.ts");

    function MainComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_span_12_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.cityName = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_div_13_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.showErrorDiv = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "height.px": a0
      };
    };

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(_weatherService, spinner) {
        _classCallCheck(this, MainComponent);

        this._weatherService = _weatherService;
        this.spinner = spinner;
        this.cityName = ''; // pageLoading: boolean = false;

        this.showErrorDiv = false;
        this.errorMessage = '';
        this.excludes = [src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["OneCallExcludes"].Minutely, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["OneCallExcludes"].Hourly];
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCurrentWeatherByCityName",
        value: function getCurrentWeatherByCityName() {
          var _this4 = this;

          // this.pageLoading = true;
          // this.spinner.show();
          this._weatherService.setShowSpinner(true);

          this._weatherService.loadCurrentWeatherByCityName(this.cityName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (data) {
            _this4.currentWeatherData = data; // console.log("In main currentWeatherData = \n", this.currentWeatherData);
            // console.log("In main excludes =", this.excludes);

            return _this4._weatherService.loadOneAPICallDataByCurrentData(data, _this4.excludes);
          })).subscribe(function (responseWeatherData) {
            window.setTimeout(function () {
              _this4.oneCallWeatherData = responseWeatherData; // console.log("In main.ts this.oneCallWeatherData = \n", this.oneCallWeatherData);
              // this.pageLoading = false;
              // this.spinner.hide();

              _this4._weatherService.setShowSpinner(false);

              _this4.showErrorDiv = false;
            }, 2000);
          }, function (responseWeatherError) {
            // console.log("responseWeatherError = ", responseWeatherError);
            _this4.oneCallWeatherData = null; // this.errorMessage = responseWeatherError;

            _this4.errorMessage = _this4.cityName === '' || _this4.cityName === null ? 'Please enter city name' : 'Incorrect city name';
            _this4.showErrorDiv = true; // this.pageLoading = false;
            // this.spinner.hide();

            _this4._weatherService.setShowSpinner(false);
          }, function () {// console.log('getCurrentWeatherByCityName Completed');
          });
        }
      }, {
        key: "updateDataOnSwitchSelection",
        value: function updateDataOnSwitchSelection(data) {
          this.oneCallWeatherData = data;
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown() {
          this.showErrorDiv = false;
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 15,
      vars: 11,
      consts: [["id", "shellDiv", 1, "container-fluid", "overflow-auto"], [1, "row"], [1, "col-md-3", 2, "padding", "0"], [3, "weatherData", "oneCallWeatherData", "excludesArray", "onUnitTypeChange"], [1, "col-md-9", 2, "padding", "0"], ["id", "mainDiv"], ["id", "searchDiv", 3, "ngStyle"], ["id", "searchDivInput", 1, "input-group"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["src", "https://cdn.lordicon.com/msoeawqm.json", "trigger", "click", "colors", "primary:#121331,secondary:#08a88a", "stroke", "100", 3, "click"], ["type", "text", "placeholder", "Enter City Name", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter", "keydown"], ["class", "input-group-text", "id", "basic-addon1", 3, "click", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [3, "weatherData", "cityName"], ["id", "basic-addon1", 1, "input-group-text", 3, "click"], [1, "fa", "fa-times"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-lhscontents", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onUnitTypeChange", function MainComponent_Template_app_lhscontents_onUnitTypeChange_3_listener($event) {
            return ctx.updateDataOnSwitchSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "lord-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_lord_icon_click_10_listener() {
            return ctx.getCurrentWeatherByCityName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.cityName = $event;
          })("keyup.enter", function MainComponent_Template_input_keyup_enter_11_listener() {
            return ctx.getCurrentWeatherByCityName();
          })("keydown", function MainComponent_Template_input_keydown_11_listener() {
            return ctx.onKeyDown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainComponent_span_12_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainComponent_div_13_Template, 4, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-daily-chart", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weatherData", ctx.currentWeatherData)("oneCallWeatherData", ctx.oneCallWeatherData)("excludesArray", ctx.excludes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.showErrorDiv ? 150 : 100));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrorDiv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weatherData", ctx.oneCallWeatherData)("cityName", ctx.cityName);
        }
      },
      directives: [_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_5__["LHSContentsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_8__["DailyChartComponent"]],
      styles: ["#shellDiv[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  overflow: auto;\r\n}\r\n\r\n#mainDiv[_ngcontent-%COMP%] {\r\n  \r\n  backdrop-filter: blur(16px) saturate(180%);\r\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n  background-color: rgba(255, 255, 255, 0.75);\r\n  \r\n  border-radius: 12px 0px 0px 12px;\r\n  border: 1px solid rgba(209, 213, 219, 0.3);\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  justify-content: flex-start;\r\n  \r\n  \r\n  width: 100%;\r\n  height: 100vh;\r\n  \r\n  z-index: 10;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #mainDiv[_ngcontent-%COMP%] {\r\n    border-radius: 12px 12px 0px 0px;\r\n  }\r\n}\r\n\r\n#searchDiv[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  \r\n  border-radius: 12px;\r\n  height: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#searchDivInput[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  border-radius: 30px;\r\n  background-color: white;\r\n  height: 40px;\r\n  width: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  border-radius: 30px;\r\n  height: 40px;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  font-size: 40px;\r\n  text-indent: -9999em;\r\n  overflow: hidden;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  \r\n  \r\n  transform: translateZ(0);\r\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n  top: 50%;\r\n  left: 50%;\r\n  position: absolute;\r\n  z-index: 9999;\r\n}\r\n\r\n@-webkit-keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  5%, 95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  10%, 59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n\r\n@keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  5%, 95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  10%, 59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes round {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes round {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrREFBa0Q7RUFDbEQsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUhBQXVIO0VBQ3ZILDJCQUEyQjtFQUMzQixpSEFBaUg7RUFDakgseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBR3hCLHdCQUF3QjtFQUN4QixxRUFBcUU7RUFDckUsNkRBQTZEO0VBQzdELFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsbUhBQW1IO0VBQ3JIO0VBQ0E7SUFDRSxtSEFBbUg7RUFDckg7RUFDQTtJQUNFLG1KQUFtSjtFQUNySjtFQUNBO0lBQ0Usa0pBQWtKO0VBQ3BKO0VBQ0E7SUFDRSxnSkFBZ0o7RUFDbEo7RUFDQTtJQUNFLG1IQUFtSDtFQUNySDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtSEFBbUg7RUFDckg7RUFDQTtJQUNFLG1IQUFtSDtFQUNySDtFQUNBO0lBQ0UsbUpBQW1KO0VBQ3JKO0VBQ0E7SUFDRSxrSkFBa0o7RUFDcEo7RUFDQTtJQUNFLGdKQUFnSjtFQUNsSjtFQUNBO0lBQ0UsbUhBQW1IO0VBQ3JIO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLHVCQUF1QjtFQUN6QjtFQUNBO0lBRUUseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLHVCQUF1QjtFQUN6QjtFQUNBO0lBRUUseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NoZWxsRGl2IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jbWFpbkRpdiB7XHJcbiAgLyogR2xhc3Ntb3JwaGlzbSAqL1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIC8qIEdsYXNzbW9ycGhpc20gZW5kcyovXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwcHggMHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDksIDIxMywgMjE5LCAwLjMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBBbG9uZyB0aGUgY3Jvc3MgYXhpcywgdGhlIGNyb3NzLWF4aXMgc2l6ZSBpcyB0aGUgbWF4aW11bSBvZiB0aGUgZmxleC1ncm93LCBmbGV4LXNocmluaywgYW5kIGZsZXgtYmFzaXMgcHJvcGVydGllcy4gKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLyogQWxvbmcgdGhlIG1haW4gYXhpcywgdGhlIG1haW4tYXhpcyBzaXplIGlzIHRoZSBzdW0gb2YgdGhlIGZsZXgtZ3JvdywgZmxleC1zaHJpbmssIGFuZCBmbGV4LWJhc2lzIHByb3BlcnRpZXMuICovXHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAjbWFpbkRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMHB4IDBweDtcclxuICB9XHJcbn1cclxuXHJcbiNzZWFyY2hEaXYge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWFyY2hEaXZJbnB1dCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLyogbWFyZ2luOiA3MnB4IGF1dG87ICovXHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxuICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ2IHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICA1JSwgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwJSwgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWQ2IHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICA1JSwgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDEwJSwgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Constants/weather-dashboard-constants.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Constants/weather-dashboard-constants.ts ***!
    \**********************************************************/

  /*! exports provided: CELCIUS_UNIT, KELVIN_UNIT, FAHRENHEIT_UNIT, FAHRENHEIT, CELCIUS, OneCallExcludes, DAYS */

  /***/
  function srcAppConstantsWeatherDashboardConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CELCIUS_UNIT", function () {
      return CELCIUS_UNIT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KELVIN_UNIT", function () {
      return KELVIN_UNIT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FAHRENHEIT_UNIT", function () {
      return FAHRENHEIT_UNIT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FAHRENHEIT", function () {
      return FAHRENHEIT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CELCIUS", function () {
      return CELCIUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OneCallExcludes", function () {
      return OneCallExcludes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DAYS", function () {
      return DAYS;
    });

    var CELCIUS_UNIT = 'metric'; // Celsius unit 

    var KELVIN_UNIT = 'standard'; // Kelvin unit (default)

    var FAHRENHEIT_UNIT = 'imperial'; // Kelvin unit (default)

    var FAHRENHEIT = 'fahrenheit';
    var CELCIUS = 'celcius';
    var OneCallExcludes = {
      Current: 'current',
      Minutely: 'minutely',
      Hourly: 'hourly',
      Daily: 'daily',
      Alerts: 'alerts'
    };
    var DAYS = [{
      id: 0,
      day: 'Sunday'
    }, {
      id: 1,
      day: 'Monday'
    }, {
      id: 2,
      day: 'Tuesday'
    }, {
      id: 3,
      day: 'Wednesday'
    }, {
      id: 4,
      day: 'Thursday'
    }, {
      id: 5,
      day: 'Friday'
    }, {
      id: 6,
      day: 'Saturday'
    }];
    /***/
  },

  /***/
  "./src/app/Services/weather-helper.ts":
  /*!********************************************!*\
    !*** ./src/app/Services/weather-helper.ts ***!
    \********************************************/

  /*! exports provided: KelvinToCelsius, CelsiusToKelvin, ConvertUnixToUTC, LocalDateTime, LocalDateTimeByUnixTimestamp, TitleCase */

  /***/
  function srcAppServicesWeatherHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KelvinToCelsius", function () {
      return KelvinToCelsius;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CelsiusToKelvin", function () {
      return CelsiusToKelvin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConvertUnixToUTC", function () {
      return ConvertUnixToUTC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalDateTime", function () {
      return LocalDateTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalDateTimeByUnixTimestamp", function () {
      return LocalDateTimeByUnixTimestamp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleCase", function () {
      return TitleCase;
    });

    function KelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    }

    function CelsiusToKelvin(celsius) {
      return celsius + 273.15;
    }

    function ConvertUnixToUTC(unixTime) {
      // console.log("In helper file", new Date(unixTime * 1000).toISOString().slice(0, 19).replace('T', ' ').concat(' UTC'));
      // return new Date(unixTime * 1000).toISOString().slice(0, 19).replace('T', ' ').concat(' UTC');
      return new Date(unixTime * 1000).toISOString().slice(0, 19).replace('T', ' ');
    }

    function LocalDateTime(timezoneOffset) {
      var currentDate = new Date();
      var localTime = currentDate.getTime();
      var localOffset = currentDate.getTimezoneOffset() * 60000;
      var utc = localTime + localOffset;
      var dateTime = utc + 1000 * timezoneOffset; // console.log("In helper file LocalDateTime()", new Date(dateTime));

      return new Date(dateTime);
    }

    function LocalDateTimeByUnixTimestamp(ut, timezoneOffset) {
      var dateTime = new Date(0); // The 0 there is the key, which sets the date to the epoch

      dateTime.setUTCSeconds(ut); // console.log("dateTime = ", dateTime);

      return dateTime;
    }

    function TitleCase(str) {
      return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
    /***/

  },

  /***/
  "./src/app/Services/weather.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/Services/weather.service.ts ***!
    \*********************************************/

  /*! exports provided: WeatherService */

  /***/
  function srcAppServicesWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
      return WeatherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _appConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../appConfig */
    "./src/app/appConfig.ts");
    /* harmony import */


    var _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Constants/weather-dashboard-constants */
    "./src/app/Constants/weather-dashboard-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WeatherService =
    /*#__PURE__*/
    function () {
      function WeatherService(_http) {
        _classCallCheck(this, WeatherService);

        this._http = _http;
        this.unitTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.showSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
      }

      _createClass(WeatherService, [{
        key: "loadCurrentWeatherByCityName",
        value: function loadCurrentWeatherByCityName(cityName) {
          var unit = this.unitTypeSubject.getValue() ? _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_4__["FAHRENHEIT_UNIT"] : _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_4__["CELCIUS_UNIT"];
          var url = _appConfig__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + _appConfig__WEBPACK_IMPORTED_MODULE_3__["Api"].endpoints.weather + '?q=' + cityName + '&appid=' + _appConfig__WEBPACK_IMPORTED_MODULE_3__["APIKey"] + '&units=' + unit;
          return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "loadOneAPICallDataByCurrentData",
        value: function loadOneAPICallDataByCurrentData(currentWeatherData, excludes) {
          var unit = this.unitTypeSubject.getValue() ? _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_4__["FAHRENHEIT_UNIT"] : _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_4__["CELCIUS_UNIT"];
          var excludesString = '';
          excludes.forEach(function (value, index) {
            excludesString += value;

            if (index !== excludes.length - 1) {
              excludesString += ',';
            }
          }); // console.log(excludesString);

          var url = '';

          if (excludesString && excludes.length > 0) {
            url = _appConfig__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + _appConfig__WEBPACK_IMPORTED_MODULE_3__["Api"].endpoints.oneCall + '?lat=' + currentWeatherData.coord.lat + '&lon=' + currentWeatherData.coord.lon + '&exclude=' + excludesString + '&appid=' + _appConfig__WEBPACK_IMPORTED_MODULE_3__["APIKey"] + '&units=' + unit;
          } else {
            url = _appConfig__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + _appConfig__WEBPACK_IMPORTED_MODULE_3__["Api"].endpoints.oneCall + '?lat=' + currentWeatherData.coord.lat + '&lon=' + currentWeatherData.coord.lon + '&appid=' + _appConfig__WEBPACK_IMPORTED_MODULE_3__["APIKey"] + '&units=' + unit;
          }

          return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "setUnitType",
        value: function setUnitType(unitType) {
          this.unitTypeSubject.next(unitType);
        }
      }, {
        key: "getUnitType",
        value: function getUnitType() {
          return this.unitTypeSubject.asObservable();
        }
      }, {
        key: "setShowSpinner",
        value: function setShowSpinner(showSpinnerValue) {
          this.showSpinner.next(showSpinnerValue);
        }
      }, {
        key: "getShowSpinner",
        value: function getShowSpinner() {
          return this.showSpinner.asObservable();
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          console.error(error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message || "Server Error");
        }
      }]);

      return WeatherService;
    }();

    WeatherService.ɵfac = function WeatherService_Factory(t) {
      return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WeatherService,
      factory: WeatherService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Services/weather.service */
    "./src/app/Services/weather.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(_weatherService, spinner) {
      var _this5 = this;

      _classCallCheck(this, AppComponent);

      this._weatherService = _weatherService;
      this.spinner = spinner;
      this.title = 'Weather-Dashboard';

      this._weatherService.getShowSpinner().subscribe(function (showSpinner) {
        if (showSpinner) {
          _this5.spinner.show();
        } else {
          _this5.spinner.hide();
        }
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 1,
      consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "line-scale-party", 3, "fullScreen"], [2, "color", "white"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _Services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/main/main.component */
    "./src/app/Components/main/main.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _Components_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/lhscontents/lhscontents.component */
    "./src/app/Components/lhscontents/lhscontents.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _Components_daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Components/daily-chart/daily-chart.component */
    "./src/app/Components/daily-chart/daily-chart.component.ts");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var lord_icon_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! lord-icon-element */
    "./node_modules/lord-icon-element/build/lord-icon-element.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! lottie-web */
    "./node_modules/lottie-web/build/player/lottie.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_18___default =
    /*#__PURE__*/
    __webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);

      Object(lord_icon_element__WEBPACK_IMPORTED_MODULE_17__["defineLordIconElement"])(lottie_web__WEBPACK_IMPORTED_MODULE_18___default.a.loadAnimation);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"].forRoot({
        /**
         * This will import all modules from echarts.
         * If you only need custom modules,
         * please refer to [Custom Build] section.
         */
        echarts: function echarts() {
          return __webpack_require__.e(
          /*! import() | echarts */
          "echarts").then(__webpack_require__.t.bind(null,
          /*! echarts */
          "./node_modules/echarts/index.js", 7));
        }
      }), ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _Components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _Components_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_5__["LHSContentsComponent"], _Components_daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_14__["DailyChartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _Components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _Components_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_5__["LHSContentsComponent"], _Components_daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_14__["DailyChartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"].forRoot({
            /**
             * This will import all modules from echarts.
             * If you only need custom modules,
             * please refer to [Custom Build] section.
             */
            echarts: function echarts() {
              return __webpack_require__.e(
              /*! import() | echarts */
              "echarts").then(__webpack_require__.t.bind(null,
              /*! echarts */
              "./node_modules/echarts/index.js", 7));
            }
          }), ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Components/main/main.component */
    "./src/app/Components/main/main.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _Components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
    }, {
      path: '**',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
    /***/

  },

  /***/
  "./src/app/appConfig.ts":
  /*!******************************!*\
    !*** ./src/app/appConfig.ts ***!
    \******************************/

  /*! exports provided: APIUrl, IconUrl, APIKey, Api */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIUrl", function () {
      return APIUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconUrl", function () {
      return IconUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIKey", function () {
      return APIKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Api", function () {
      return Api;
    });

    var APIUrl = 'https://api.openweathermap.org/data/2.5/';
    var IconUrl = 'http://openweathermap.org/img/wn/';
    var APIKey = '0dd5542d536e51ce47540ed11c8f0ebc';
    var Api = {
      endpoints: {
        weather: '/weather',
        box: '/box/city',
        find: '/find',
        oneCall: '/onecall'
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Projects\Weather App\Weather-Dashboard\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map