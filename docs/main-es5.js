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
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r11.eChartOptions);
      }
    }

    var DailyChartComponent =
    /*#__PURE__*/
    function () {
      function DailyChartComponent(_weatherService, datePipe, _changeDetectorRef) {
        _classCallCheck(this, DailyChartComponent);

        this._weatherService = _weatherService;
        this.datePipe = datePipe;
        this._changeDetectorRef = _changeDetectorRef;
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

          this.chartweatherData = data; // this._changeDetectorRef.markForCheck();

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
      return new (t || DailyChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
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
      consts: [["class", "chartDiv", 4, "ngIf"], [1, "chartDiv"], [1, "card", "chartCard", "mx-auto"], [1, "card-body", "chartCardBody"], ["echarts", "", 1, "demo-chart", "chart", 3, "options"]],
      template: function DailyChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DailyChartComponent_div_0_Template, 4, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eChartOptions && ctx.chartweatherData && ctx.chartweatherData.daily && ctx.chartweatherData.daily.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsDirective"]],
      styles: [".chartDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .chartDiv[_ngcontent-%COMP%] {\r\n        padding: 0px 2px;\r\n    }\r\n}\r\n\r\n.chartCard[_ngcontent-%COMP%] {\r\n    border-radius: 30px;\r\n    background-color: #fff;\r\n    \r\n    \r\n    width: 900px;\r\n    height: 300px;\r\n    box-shadow: var(--inside-box-shadow2);\r\n    -webkit-box-shadow: var(--inside-box-shadow2);\r\n    -moz-box-shadow: var(--inside-box-shadow2);\r\n}\r\n\r\n.chartCard[_ngcontent-%COMP%]:hover {\r\n    box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\r\n    -webkit-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\r\n    -moz-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\r\n}\r\n\r\n.chart[_ngcontent-%COMP%] {\r\n    height: 300px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kYWlseS1jaGFydC9kYWlseS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQjt3QkFDb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNkNBQTZDO0lBQzdDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLCtEQUErRDtJQUMvRCx1RUFBdUU7SUFDdkUsb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kYWlseS1jaGFydC9kYWlseS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0RGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2hhcnREaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGFydENhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvKiBUaGlzIGlzIG5vdCByZXNwb25zaXZlICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDQzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7ICovXHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcclxufVxyXG5cclxuLmNoYXJ0Q2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93My13aGl0ZSksIHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3czLXdoaXRlKSwgdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzMtd2hpdGUpLCB2YXIoLS1pbnNpZGUtYm94LXNoYWRvdzIpO1xyXG59XHJcblxyXG4uY2hhcnQge1xyXG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-daily-chart',
          templateUrl: './daily-chart.component.html',
          styleUrls: ['./daily-chart.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
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


    var src_app_Constants_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Constants/url-constants */
    "./src/app/Constants/url-constants.ts");
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "lord-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "lord-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "lord-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 18, ctx_r4.currentTemp, "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Min: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 21, ctx_r4.todayMinTemp, "1.0-0"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Max: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 24, ctx_r4.todayMaxTemp, "1.0-0"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunrise: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 27, ctx_r4.sunriseTime, "h:mm a"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunset: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 30, ctx_r4.sunsetTime, "h:mm a"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 33, ctx_r4.weatherDescrption));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.countryFlagUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0", ctx_r4.cityName, ", ", ctx_r4.countryName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 35, ctx_r4.currentDatetime, "EEEE, MMM d, y"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 38, ctx_r4.currentDatetime, "h:mm a"), " ");
      }
    }

    var LHSContentsComponent =
    /*#__PURE__*/
    function () {
      function LHSContentsComponent(_weatherService, _changeDetectorRef) {
        _classCallCheck(this, LHSContentsComponent);

        this._weatherService = _weatherService;
        this._changeDetectorRef = _changeDetectorRef;
        this.cityName = '';
        this.countryName = '';
        this.unitTypeFahrenheit = false;
        this.displayUnitType = src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["CELCIUS"];
        this.iconurl = '';
        this.weatherDescrption = '';
        this.countryFlagUrl = '';
        this.onUnitTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LHSContentsComponent, [{
        key: "singleCallWeatherData",
        set: function set(data) {
          this.OneCallLocationWeatherData = data; // this._changeDetectorRef.markForCheck();

          if (this.OneCallLocationWeatherData) {
            this.iconurl = src_app_Constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["IconUrl"] + this.OneCallLocationWeatherData.current.weather[0].icon + '@4x.png';
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
              }); // this.countryFlagUrl = FlagURUL + this.locationWeatherData.sys.country.toString() + FlagType + FlagSize; // API not working

              this.countryFlagUrl = src_app_Constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["ContryFlagsAPI_URL"] + src_app_Constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["ContryFlagsAPI_FILE_TYPE"].PNG + this.locationWeatherData.sys.country.toString();
            } // console.log("IconUrl", this.iconurl, "\n", "currentDatetime", this.currentDatetime);

          }
        }
      }, {
        key: "weatherData",
        set: function set(data) {
          this.locationWeatherData = data; // this._changeDetectorRef.markForCheck();
          // if (this.locationWeatherData && this.locationWeatherData.name) {
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
      return new (t || LHSContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    LHSContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LHSContentsComponent,
      selectors: [["app-lhscontents"]],
      inputs: {
        singleCallWeatherData: "singleCallWeatherData",
        weatherData: "weatherData",
        excludesArray: "excludesArray"
      },
      outputs: {
        onUnitTypeChange: "onUnitTypeChange"
      },
      decls: 11,
      vars: 2,
      consts: [["id", "mainLHSDiv"], [1, "unitToggler"], [1, "unitTogglerContentCel"], [1, "unitTogglerContent"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [1, "unitTogglerContentFah"], ["class", "tempCityInfo", 4, "ngIf"], [1, "tempCityInfo"], [1, "temp"], [1, "tempValue"], [4, "ngIf"], [1, "tempMinMax", "my-2"], [1, "tempMin"], [1, "tempMinValue"], [1, "tempMax"], [1, "tempMaxValue"], [1, "sunRiseSunset", "my-2"], [1, "sunRiseDiv"], ["aria-hidden", "true", 1, "fa", "fa-sun-o"], [1, "sunSetDiv"], ["aria-hidden", "true", 1, "fa", "fa-moon-o"], [1, "weatherIconDiv"], ["alt", "Icon", 1, "weatherIcon", 3, "src"], [1, "weatherDesc"], [1, "cityInfo", "mx-1"], [1, "countryFlagDiv"], ["alt", "Country Flag", 1, "countryFlag", 3, "src"], ["src", "https://cdn.lordicon.com/zzcjjxew.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"], [1, "timeInfo", "my-2", "d-grid", "gap-2"], [1, "timeInfoDate"], ["src", "https://cdn.lordicon.com/gmzxduhd.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"], [1, "timeInfoTime"], ["src", "https://cdn.lordicon.com/kbtmbyzy.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LHSContentsComponent_div_10_Template, 49, 41, "div", 6);

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
      styles: ["*[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n#mainLHSDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n.unitToggler[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.unitTogglerContent[_ngcontent-%COMP%], .unitTogglerContentCel[_ngcontent-%COMP%], .unitTogglerContentFah[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n.tempCityInfo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.temp[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 65px;\r\n}\r\n\r\n.weatherIconDiv[_ngcontent-%COMP%] {\r\n    height: 130px;\r\n}\r\n\r\n.weatherIcon[_ngcontent-%COMP%] {\r\n    max-height: 80%;\r\n    max-width: 100%\r\n}\r\n\r\n.weatherIcon[_ngcontent-%COMP%], .weatherDesc[_ngcontent-%COMP%] {\r\n    \r\n    text-align: center;\r\n}\r\n\r\n.weatherDesc[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.cityInfo[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-top: -20px;\r\n}\r\n\r\n.timeInfoDate[_ngcontent-%COMP%], .timeInfoTime[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.tempMinMax[_ngcontent-%COMP%], .sunRiseSunset[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.countryFlagDiv[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.countryFlag[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n    width: 30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9saHNjb250ZW50cy9saHNjb250ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbGhzY29udGVudHMvbGhzY29udGVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbWFpbkxIU0RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udW5pdFRvZ2dsZXIge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnVuaXRUb2dnbGVyQ29udGVudCwgLnVuaXRUb2dnbGVyQ29udGVudENlbCwgLnVuaXRUb2dnbGVyQ29udGVudEZhaCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50ZW1wQ2l0eUluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxufVxyXG5cclxuLndlYXRoZXJJY29uRGl2IHtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbi53ZWF0aGVySWNvbiB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLndlYXRoZXJJY29uLCAud2VhdGhlckRlc2Mge1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZWF0aGVyRGVzYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaXR5SW5mbyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuLnRpbWVJbmZvRGF0ZSwgLnRpbWVJbmZvVGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50ZW1wTWluTWF4LCAuc3VuUmlzZVN1bnNldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5RmxhZ0RpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jb3VudHJ5RmxhZyB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LHSContentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lhscontents',
          templateUrl: './lhscontents.component.html',
          styleUrls: ['./lhscontents.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        singleCallWeatherData: [{
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


    var src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/weather-helper */
    "./src/app/Services/weather-helper.ts");
    /* harmony import */


    var src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/weather.service */
    "./src/app/Services/weather.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../lhscontents/lhscontents.component */
    "./src/app/Components/lhscontents/lhscontents.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../daily-chart/daily-chart.component */
    "./src/app/Components/daily-chart/daily-chart.component.ts");
    /* harmony import */


    var _weather_widgets_weather_widgets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../weather-widgets/weather-widgets.component */
    "./src/app/Components/weather-widgets/weather-widgets.component.ts");

    var _c0 = ["myinput"];

    function MainComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_span_13_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.clearInputField();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "height.px": a0
      };
    };

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(_weatherService, spinner, toastr) {
        _classCallCheck(this, MainComponent);

        this._weatherService = _weatherService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.cityName = ''; // pageLoading: boolean = false;

        this.showErrorDiv = false;
        this.showErrorPopup = false;
        this.errorMessage = '';
        this.excludes = [src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["OneCallExcludes"].Minutely, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["OneCallExcludes"].Hourly];
        this.htmlGeolocationMessage = '';
        this.toastMessageObject = {
          closeButton: true,
          timeOut: 2000,
          extendedTimeOut: 1000,
          easing: 'ease-in',
          easeTime: 300,
          progressBar: true,
          progressAnimation: 'increasing',
          toastClass: 'ngx-toastr',
          positionClass: 'toast-top-right',
          titleClass: 'toast-title',
          messageClass: 'toast-message',
          tapToDismiss: true,
          onActivateTick: false,
          preventDuplicates: true,
          iconClasses: src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["IconClasses"]
        };

        if (this.cityName === '' || this.cityName === null) {
          this.getLocationByHTMLNavigator();
        }
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCurrentWeatherByCityName",
        value: function getCurrentWeatherByCityName() {
          var _this4 = this;

          this._weatherService.setShowSpinner(true);

          this._weatherService.loadCurrentWeatherByCityName(this.cityName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (data) {
            _this4.currentWeatherData = data; // console.log("In main currentWeatherData = \n", this.currentWeatherData);
            // console.log("In main excludes =", this.excludes);

            return _this4._weatherService.loadOneAPICallDataByCurrentData(data, _this4.excludes);
          })).subscribe(function (responseWeatherData) {
            window.setTimeout(function () {
              _this4.singleCallWeatherData = responseWeatherData; // console.log("In main.ts this.singleCallWeatherData = \n", this.singleCallWeatherData);

              _this4._weatherService.setShowSpinner(false);

              _this4.errorMessage = 'Showing weather data for ' + Object(src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_3__["TitleCase"])(_this4.cityName);

              _this4.showToastMessage(_this4.errorMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].SUCCESS);
            }, 2000);
          }, function (responseWeatherError) {
            // console.log("responseWeatherError = ", responseWeatherError);
            _this4.singleCallWeatherData = null;

            _this4._weatherService.setShowSpinner(false);

            _this4.errorMessage = _this4.cityName === '' || _this4.cityName === null ? 'Please enter city name' : 'Incorrect city name';

            _this4.showToastMessage(_this4.errorMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].ERROR);
          }, function () {// console.log('getCurrentWeatherByCityName Completed');
          });
        }
      }, {
        key: "updateDataOnSwitchSelection",
        value: function updateDataOnSwitchSelection(data) {
          this.singleCallWeatherData = data;
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown() {
          // this.showErrorDiv = false;
          this.toastr.clear();
        }
      }, {
        key: "getLocationByHTMLNavigator",
        value: function getLocationByHTMLNavigator() {
          var _this5 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this5.latitude = position.coords.latitude;
              _this5.longitude = position.coords.longitude;

              if (_this5.latitude && _this5.longitude) {
                _this5.getCurrentWeatherByGeoLocation();
              }
            }, function (error) {
              switch (error.code) {
                case error.PERMISSION_DENIED:
                  _this5.htmlGeolocationMessage = 'User denied the request for Geolocation.';

                  _this5.showToastMessage(_this5.htmlGeolocationMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].ERROR);

                  break;

                case error.POSITION_UNAVAILABLE:
                  _this5.htmlGeolocationMessage = 'Location information is unavailable.';

                  _this5.showToastMessage(_this5.htmlGeolocationMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].ERROR);

                  break;

                case error.TIMEOUT:
                  _this5.htmlGeolocationMessage = 'The request to get user location timed out.';

                  _this5.showToastMessage(_this5.htmlGeolocationMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].ERROR);

                  break;
              }
            });
          } else {
            this.htmlGeolocationMessage = 'Geolocation is not supported by this browser.';
            this.showToastMessage(this.htmlGeolocationMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].WARNING);
          }
        }
      }, {
        key: "getCurrentWeatherByGeoLocation",
        value: function getCurrentWeatherByGeoLocation() {
          var _this6 = this;

          this._weatherService.setShowSpinner(true);

          this._weatherService.loadCurrentWeatherByCoordinates(this.latitude, this.longitude).subscribe(function (responseWeatherData) {
            window.setTimeout(function () {
              if (responseWeatherData) {
                _this6.currentWeatherData = responseWeatherData;
                _this6.cityName = _this6.currentWeatherData.name;

                _this6._weatherService.setShowSpinner(false);

                _this6.getCurrentWeatherByCityName();
              }
            }, 2000);
          }, function (responseWeatherError) {
            _this6.currentWeatherData = null;

            _this6._weatherService.setShowSpinner(false);
          }, function () {// console.log('getCurrentWeatherByGeoLocation Completed');
          });
        }
      }, {
        key: "showToastMessage",
        value: function showToastMessage(message, errorType) {
          if (errorType === src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].ERROR) {
            this.toastr.error(message, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].ERROR, this.toastMessageObject);
          } else if (errorType === src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].SUCCESS) {
            this.toastr.success(message, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].SUCCESS, this.toastMessageObject);
          } else if (errorType === src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].WARNING) {
            this.toastr.success(message, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].WARNING, this.toastMessageObject);
          }
        }
      }, {
        key: "clearInputField",
        value: function clearInputField() {
          this.cityName = '';
          this.myInputField.nativeElement.focus();
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      viewQuery: function MainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputField = _t.first);
        }
      },
      decls: 16,
      vars: 12,
      consts: [["id", "shellDiv", 1, "container-fluid", "overflow-auto"], [1, "row"], [1, "col-md-3", 2, "padding", "0"], [3, "weatherData", "singleCallWeatherData", "excludesArray", "onUnitTypeChange"], [1, "col-md-9", 2, "padding", "0"], ["id", "mainDiv", 1, "glassmorphDiv2"], ["id", "searchDiv", 3, "ngStyle"], ["id", "searchDivInput", 1, "input-group"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["src", "https://cdn.lordicon.com/msoeawqm.json", "trigger", "click", "colors", "primary:#121331,secondary:#08a88a", "stroke", "100", 3, "click"], ["type", "text", "placeholder", "Enter City Name", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter", "keydown"], ["myinput", ""], ["class", "input-group-text", "id", "basic-addon1", 3, "click", 4, "ngIf"], [3, "weatherData", "cityName"], [3, "currentWeatherData", "weatherData"], ["id", "basic-addon1", 1, "input-group-text", 3, "click"], [1, "fa", "fa-times"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.cityName = $event;
          })("keyup.enter", function MainComponent_Template_input_keyup_enter_11_listener() {
            return ctx.getCurrentWeatherByCityName();
          })("keydown", function MainComponent_Template_input_keydown_11_listener() {
            return ctx.onKeyDown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainComponent_span_13_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-daily-chart", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-weather-widgets", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weatherData", ctx.currentWeatherData)("singleCallWeatherData", ctx.singleCallWeatherData)("excludesArray", ctx.excludes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.showErrorDiv ? 150 : 100));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weatherData", ctx.singleCallWeatherData)("cityName", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentWeatherData", ctx.currentWeatherData)("weatherData", ctx.singleCallWeatherData);
        }
      },
      directives: [_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_7__["LHSContentsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_10__["DailyChartComponent"], _weather_widgets_weather_widgets_component__WEBPACK_IMPORTED_MODULE_11__["WeatherWidgetsComponent"]],
      styles: ["#shellDiv[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  overflow: auto;\r\n}\r\n\r\n#mainDiv[_ngcontent-%COMP%] {\r\n  border-radius: 12px 0px 0px 12px;\r\n  border: 1px solid rgba(209, 213, 219, 0.3);\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  justify-content: flex-start;\r\n  \r\n  \r\n  width: 100%;\r\n  height: 100vh;\r\n  \r\n  z-index: 10;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #mainDiv[_ngcontent-%COMP%] {\r\n    border-radius: 12px 12px 0px 0px;\r\n    height: 100%;\r\n    padding: 5px;\r\n    margin: 0px;\r\n  }\r\n}\r\n\r\n#searchDiv[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  \r\n  border-radius: 12px;\r\n  height: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#searchDivInput[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  border-radius: 30px;\r\n  background-color: white;\r\n  height: 40px;\r\n  width: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  border-radius: 30px;\r\n  height: 40px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  \r\n  box-shadow: inset 0 0 6px #2e2eea;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  font-size: 40px;\r\n  text-indent: -9999em;\r\n  overflow: hidden;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  \r\n  \r\n  transform: translateZ(0);\r\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n  top: 50%;\r\n  left: 50%;\r\n  position: absolute;\r\n  z-index: 9999;\r\n}\r\n\r\n@-webkit-keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n\r\n  5%, 95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n\r\n  10%, 59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n\r\n@keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n\r\n  5%, 95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n\r\n  10%, 59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes round {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes round {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVIQUF1SDtFQUN2SCwyQkFBMkI7RUFDM0IsaUhBQWlIO0VBQ2pILHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFHRSx3Q0FBd0M7RUFDeEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFHeEIsd0JBQXdCO0VBQ3hCLHFFQUFxRTtFQUNyRSw2REFBNkQ7RUFDN0QsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxtSEFBbUg7RUFDckg7O0VBRUE7SUFDRSxtSEFBbUg7RUFDckg7O0VBRUE7SUFDRSxtSkFBbUo7RUFDcko7O0VBRUE7SUFDRSxrSkFBa0o7RUFDcEo7O0VBRUE7SUFDRSxnSkFBZ0o7RUFDbEo7O0VBRUE7SUFDRSxtSEFBbUg7RUFDckg7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUhBQW1IO0VBQ3JIOztFQUVBO0lBQ0UsbUhBQW1IO0VBQ3JIOztFQUVBO0lBQ0UsbUpBQW1KO0VBQ3JKOztFQUVBO0lBQ0Usa0pBQWtKO0VBQ3BKOztFQUVBO0lBQ0UsZ0pBQWdKO0VBQ2xKOztFQUVBO0lBQ0UsbUhBQW1IO0VBQ3JIO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUVFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFFRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFFRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2hlbGxEaXYge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNtYWluRGl2IHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4IDBweCAwcHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwOSwgMjEzLCAyMTksIDAuMyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIEFsb25nIHRoZSBjcm9zcyBheGlzLCB0aGUgY3Jvc3MtYXhpcyBzaXplIGlzIHRoZSBtYXhpbXVtIG9mIHRoZSBmbGV4LWdyb3csIGZsZXgtc2hyaW5rLCBhbmQgZmxleC1iYXNpcyBwcm9wZXJ0aWVzLiAqL1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAvKiBBbG9uZyB0aGUgbWFpbiBheGlzLCB0aGUgbWFpbi1heGlzIHNpemUgaXMgdGhlIHN1bSBvZiB0aGUgZmxleC1ncm93LCBmbGV4LXNocmluaywgYW5kIGZsZXgtYmFzaXMgcHJvcGVydGllcy4gKi9cclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNtYWluRGl2IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jc2VhcmNoRGl2IHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jc2VhcmNoRGl2SW5wdXQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggIzJlMmVlYTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggIzJlMmVlYTtcclxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwOyAqL1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggIzJlMmVlYTtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLyogbWFyZ2luOiA3MnB4IGF1dG87ICovXHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxuICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ2IHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuXHJcbiAgNSUsIDk1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuXHJcbiAgMTAlLCA1OSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuXHJcbiAgMzglIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZDYge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG5cclxuICA1JSwgOTUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG5cclxuICAxMCUsIDU5JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG5cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdW5kIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdW5kIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59Il19 */"]
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
          type: src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, {
        myInputField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["myinput"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Components/weather-widgets/weather-widgets.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/weather-widgets/weather-widgets.component.ts ***!
    \*************************************************************************/

  /*! exports provided: WeatherWidgetsComponent */

  /***/
  function srcAppComponentsWeatherWidgetsWeatherWidgetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherWidgetsComponent", function () {
      return WeatherWidgetsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/weather.service */
    "./src/app/Services/weather.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["gaugeHumidity"];
    var _c1 = ["gaugeHumidityFill"];
    var _c2 = ["gaugeHumidityCover"];
    var _c3 = ["gaugeCloud"];
    var _c4 = ["gaugeCloudFill"];
    var _c5 = ["gaugeCloudCover"];
    var _c6 = ["gaugeUVI"];
    var _c7 = ["gaugeUVIFill"];
    var _c8 = ["gaugeUVICover"];
    var _c9 = ["gaugeWind"];
    var _c10 = ["gaugeWindFill"];
    var _c11 = ["gaugeWindCover"];

    var _c12 = function _c12(a0) {
      return {
        background: a0
      };
    };

    function WeatherWidgetsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 12, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "8+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 12, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 12, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14, 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "73+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.widgetNames.humidity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/" + ctx_r12.widgetNames.humidity + ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r12.widgetNames.humidity + "Icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c12, ctx_r12.setThresholdColour(ctx_r12.OneCallweather.current.humidity)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.OneCallweather.current.humidity, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.widgetNames.uv_index);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/" + ctx_r12.widgetNames.uvi + ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r12.widgetNames.uvi + "Icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c12, ctx_r12.setUVIThresholdColour(ctx_r12.OneCallweather.current.uvi)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.OneCallweather.current.uvi);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.widgetNames.cloudiness);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/" + ctx_r12.widgetNames.cloudiness + ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r12.widgetNames.cloudiness + "Icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c12, ctx_r12.setThresholdColour(ctx_r12.OneCallweather.current.clouds)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.OneCallweather.current.clouds, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.widgetNames.wind);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/" + ctx_r12.widgetNames.wind + ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r12.widgetNames.wind + "Icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c12, ctx_r12.setWindThresholdColour(ctx_r12.OneCallweather.current.wind_speed)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.OneCallweather.current.wind_speed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.windSpeedUnit);
      }
    }

    var WeatherWidgetsComponent =
    /*#__PURE__*/
    function () {
      function WeatherWidgetsComponent(renderer, _weatherSrvc, _changeDetectorRef) {
        _classCallCheck(this, WeatherWidgetsComponent);

        this.renderer = renderer;
        this._weatherSrvc = _weatherSrvc;
        this._changeDetectorRef = _changeDetectorRef;
        this.widgetNames = {
          humidity: 'Humidity',
          pressure: 'Pressure',
          uvi: 'UVI',
          uv_index: 'UV Index',
          cloudiness: 'Cloudiness',
          wind: 'Wind'
        };
        this.windSpeedUnit = '';
      }

      _createClass(WeatherWidgetsComponent, [{
        key: "gaugeHumidityEl",
        set: function set(value) {
          this.gaugeHumidityElement = value;
        }
      }, {
        key: "gaugeHumidityFillEl",
        set: function set(value) {
          this.gaugeHumidityFillElement = value;
        }
      }, {
        key: "gaugeHumidityCoverEl",
        set: function set(value) {
          this.gaugeHumidityCoverElement = value;

          if (this.OneCallweather && this.gaugeHumidityCoverElement) {
            this.setGaugeTurnValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
          }
        }
      }, {
        key: "gaugeCloudEl",
        set: function set(value) {
          this.gaugeCloudElement = value;
        }
      }, {
        key: "gaugeCloudFillEl",
        set: function set(value) {
          this.gaugeCloudFillElement = value;
        }
      }, {
        key: "gaugeCloudCoverEl",
        set: function set(value) {
          this.gaugeCloudCoverElement = value;

          if (this.OneCallweather && this.gaugeCloudCoverElement) {
            this.setGaugeTurnValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
          }
        }
      }, {
        key: "gaugeUVIEl",
        set: function set(value) {
          this.gaugeUVIElement = value;
        }
      }, {
        key: "gaugeUVIFillEl",
        set: function set(value) {
          this.gaugeUVIFillElement = value;
        }
      }, {
        key: "gaugeUVICoverEl",
        set: function set(value) {
          this.gaugeUVICoverElement = value;

          if (this.OneCallweather && this.gaugeUVICoverElement) {
            this.setGaugeRoundedTurnValue(this.OneCallweather.current.uvi / 8, this.gaugeUVIFillElement);
          }
        }
      }, {
        key: "gaugeWindEl",
        set: function set(value) {
          this.gaugeWindElement = value;
        }
      }, {
        key: "gaugeWindFillEl",
        set: function set(value) {
          this.gaugeWindFillElement = value;
        }
      }, {
        key: "gaugeWindCoverEl",
        set: function set(value) {
          this.gaugeWindCoverElement = value;

          if (this.OneCallweather && this.gaugeWindCoverElement) {
            this.setGaugeRoundedTurnValue(this.OneCallweather.current.wind_speed * 0.01, this.gaugeWindFillElement);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this._weatherSrvc.getUnitType().subscribe(function (unitType) {
            _this7.windSpeedUnit = unitType ? 'mi/hr' : 'm/s'; // unitType = true means Celcius (metric) unit.
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "weatherData",
        set: function set(weather) {
          this.OneCallweather = weather; // this._changeDetectorRef.markForCheck();

          if (this.OneCallweather && this.gaugeCloudCoverElement && this.gaugeHumidityCoverElement && this.gaugeUVICoverElement && this.gaugeWindCoverElement) {
            this.setGaugeTurnValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
            this.setGaugeRoundedTurnValue(this.OneCallweather.current.uvi / 8, this.gaugeUVIFillElement);
            this.setGaugeTurnValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
            this.setGaugeRoundedTurnValue(this.OneCallweather.current.wind_speed * 0.01, this.gaugeWindFillElement);
          }
        }
      }, {
        key: "currentWeatherData",
        set: function set(weather) {
          this.currentWeather = weather; // this._changeDetectorRef.markForCheck();
        }
      }, {
        key: "setGaugeTurnValue",
        value: function setGaugeTurnValue(value, fillElement) {
          if (value <= 0 || value > 1) {
            return;
          }

          this.renderer.setStyle(fillElement.nativeElement, 'transform', 'rotate(' + value / 2 + 'turn)'); // this.renderer.createText(this.gaugeCoverElement.nativeElement, value);
        }
      }, {
        key: "setGaugeRoundedTurnValue",
        value: function setGaugeRoundedTurnValue(value, fillElement) {
          var rounded = Math.round(value * 10) / 10;
          var rotateBy = rounded / 2;

          if (value > 0 && rounded === 0) {
            rotateBy = 0.1;
          }

          if (value <= 0 || value > 1) {
            return;
          }

          this.renderer.setStyle(fillElement.nativeElement, 'transform', 'rotate(' + rotateBy + 'turn)'); // this.renderer.createText(this.gaugeCoverElement.nativeElement, value);
        }
      }, {
        key: "setThresholdColour",
        value: function setThresholdColour(value) {
          if (value <= 0) {
            return '#b4c0be';
          } else if (value > 0 && value <= 20) {
            return 'red';
          } else if (value > 20 && value <= 60) {
            return 'orange';
          } else if (value > 60 && value <= 90) {
            return '#eded02';
          } else if (value > 90) {
            return 'green';
          }
        }
      }, {
        key: "setUVIThresholdColour",
        value: function setUVIThresholdColour(value) {
          if (value <= 0) {
            return '#b4c0be';
          } else if (value > 0 && value <= 2) {
            // You can safely enjoy being outside!
            return 'green';
          } else if (value > 2 && value <= 7) {
            // Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!
            return '#eded02';
          } else if (value > 7) {
            // Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!
            return 'red';
          }
        }
      }, {
        key: "setWindThresholdColour",
        value: function setWindThresholdColour(value) {
          if (value <= 1) {
            return '#b4c0be';
          } else if (value > 1 && value <= 3) {
            return '#50eded';
          } else if (value > 3 && value <= 7) {
            return '#14d7d7';
          } else if (value > 7 && value <= 12) {
            return '#00cc00';
          } else if (value > 12 && value <= 18) {
            return '#00ff00';
          } else if (value > 18 && value <= 24) {
            return '#99ff33';
          } else if (value > 24 && value <= 31) {
            return '#ccff33';
          } else if (value > 31 && value <= 38) {
            return '#ffff00';
          } else if (value > 38 && value <= 46) {
            return '#ffcc00';
          } else if (value > 46 && value <= 54) {
            return '#ff9933';
          } else if (value > 54 && value <= 63) {
            return '#ff9933';
          } else if (value > 63 && value <= 72) {
            return '#ff5050';
          } else if (value > 72) {
            return '#ff0000';
          }
        }
      }]);

      return WeatherWidgetsComponent;
    }();

    WeatherWidgetsComponent.ɵfac = function WeatherWidgetsComponent_Factory(t) {
      return new (t || WeatherWidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    WeatherWidgetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeatherWidgetsComponent,
      selectors: [["app-weather-widgets"]],
      viewQuery: function WeatherWidgetsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeHumidityEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeHumidityFillEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeHumidityCoverEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeCloudEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeCloudFillEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeCloudCoverEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeUVIEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeUVIFillEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeUVICoverEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeWindEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeWindFillEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeWindCoverEl = _t.first);
        }
      },
      inputs: {
        weatherData: "weatherData",
        currentWeatherData: "currentWeatherData"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "widgetsMainDiv", 4, "ngIf"], [1, "widgetsMainDiv"], [1, "card", "widgetsCard", "humidity"], [1, "card-body", "widgetsCardBody"], [1, "widgetTitle"], [1, "widgetIconDiv"], [3, "src", "alt"], [1, "widgetGaugeMeter"], [1, "gauge"], ["gaugeHumidity", ""], [1, "gauge__body"], ["gaugeHumidityBody", ""], [1, "gauge__fill", 3, "ngStyle"], ["gaugeHumidityFill", ""], [1, "gauge__cover"], ["gaugeHumidityCover", ""], [1, "gaugeThresholdsDiv"], [1, "start"], [1, "end"], [1, "card", "widgetsCard", "uvi"], ["gaugeUVI", ""], ["gaugeUVIBody", ""], ["gaugeUVIFill", ""], ["gaugeUVICover", ""], [1, "card", "widgetsCard", "clouds"], ["gaugeCloud", ""], ["gaugeCloudBody", ""], ["gaugeCloudFill", ""], ["gaugeCloudCover", ""], [1, "card", "widgetsCard", "wind"], ["gaugeWind", ""], ["gaugeWindBody", ""], ["gaugeWindFill", ""], ["gaugeWindCover", ""], [1, "widgetUnitDiv"]],
      template: function WeatherWidgetsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherWidgetsComponent_div_0_Template, 91, 29, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OneCallweather && ctx.OneCallweather != undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".widgetsMainDiv[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    flex-wrap: wrap;\r\n    margin-top: 20px;\r\n}\r\n\r\n.widgetsCard[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 30px;\r\n    margin: 40px 0px 5px 0px;\r\n    box-shadow: var(--inside-box-shadow2);\r\n    -webkit-box-shadow: var(--inside-box-shadow2);\r\n    -moz-box-shadow: var(--inside-box-shadow2);\r\n}\r\n\r\n.widgetsCard[_ngcontent-%COMP%]:hover {\r\n    box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\r\n    -webkit-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\r\n    -moz-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\r\n}\r\n\r\n.widgetsCardBody[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.widgetTitle[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    margin-top: -8px;\r\n}\r\n\r\n.widgetIconDiv[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 30%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 5px 0px 5px;\r\n}\r\n\r\n.widgetIconDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.widgetGaugeMeter[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 5px 5px 4px;\r\n    \r\n    width: 130px;\r\n}\r\n\r\n.gauge[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 150px;\r\n    \r\n    font-size: 18px;\r\n    color: #004033;\r\n}\r\n\r\n.gauge__body[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 0;\r\n    padding-bottom: 50%;\r\n    background: #b4c0be;\r\n    position: relative;\r\n    border-top-left-radius: 100% 200%;\r\n    border-top-right-radius: 100% 200%;\r\n    overflow: hidden;\r\n}\r\n\r\n.gauge__fill[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    width: inherit;\r\n    height: 100%;\r\n    \r\n    transform-origin: center top;\r\n    transform: rotate(0.25turn);\r\n    transition: transform 0.2s ease-out;\r\n}\r\n\r\n.gauge__cover[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 150%;\r\n    background: #ffffff;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-bottom: 25%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.gaugeThresholdsDiv[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-right: -8px;\r\n}\r\n\r\n.widgetUnitDiv[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin-left: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLXdpZGdldHMvd2VhdGhlci13aWRnZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixxQ0FBcUM7SUFDckMsNkNBQTZDO0lBQzdDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLCtEQUErRDtJQUMvRCx1RUFBdUU7SUFDdkUsb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvd2VhdGhlci13aWRnZXRzL3dlYXRoZXItd2lkZ2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldHNNYWluRGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi53aWRnZXRzQ2FyZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogNDBweCAwcHggNXB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XHJcbn1cclxuXHJcbi53aWRnZXRzQ2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93My13aGl0ZSksIHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3czLXdoaXRlKSwgdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdzMtd2hpdGUpLCB2YXIoLS1pbnNpZGUtYm94LXNoYWRvdzIpO1xyXG59XHJcblxyXG4ud2lkZ2V0c0NhcmRCb2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2lkZ2V0VGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuLndpZGdldEljb25EaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAwcHggNXB4O1xyXG59XHJcblxyXG4ud2lkZ2V0SWNvbkRpdiBpbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi53aWRnZXRHYXVnZU1ldGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNHB4O1xyXG4gICAgLyogaGVpZ2h0OiA0MHB4OyAqL1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4uZ2F1Z2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgLyogZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwNDAzMztcclxufVxyXG5cclxuLmdhdWdlX19ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNiNGMwYmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlIDIwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJSAyMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmdhdWdlX19maWxsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICM3YTVhZWM7ICovXHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMC4yNXR1cm4pO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5nYXVnZV9fY292ZXIge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMTUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIC8qIFRleHQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmdhdWdlVGhyZXNob2xkc0RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG59XHJcblxyXG4ud2lkZ2V0VW5pdERpdiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWidgetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-weather-widgets',
          templateUrl: './weather-widgets.component.html',
          styleUrls: ['./weather-widgets.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        gaugeHumidityEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeHumidity']
        }],
        gaugeHumidityFillEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeHumidityFill']
        }],
        gaugeHumidityCoverEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeHumidityCover']
        }],
        gaugeCloudEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeCloud']
        }],
        gaugeCloudFillEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeCloudFill']
        }],
        gaugeCloudCoverEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeCloudCover']
        }],
        gaugeUVIEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeUVI']
        }],
        gaugeUVIFillEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeUVIFill']
        }],
        gaugeUVICoverEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeUVICover']
        }],
        gaugeWindEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeWind']
        }],
        gaugeWindFillEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeWindFill']
        }],
        gaugeWindCoverEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['gaugeWindCover']
        }],
        weatherData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentWeatherData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Constants/url-constants.ts":
  /*!********************************************!*\
    !*** ./src/app/Constants/url-constants.ts ***!
    \********************************************/

  /*! exports provided: APIUrl, IconUrl, Api, FlagURUL, FlagType, FlagSize, ContryFlagsAPI_URL, ContryFlagsAPI_FILE_TYPE */

  /***/
  function srcAppConstantsUrlConstantsTs(module, __webpack_exports__, __webpack_require__) {
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


    __webpack_require__.d(__webpack_exports__, "Api", function () {
      return Api;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagURUL", function () {
      return FlagURUL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagType", function () {
      return FlagType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagSize", function () {
      return FlagSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContryFlagsAPI_URL", function () {
      return ContryFlagsAPI_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContryFlagsAPI_FILE_TYPE", function () {
      return ContryFlagsAPI_FILE_TYPE;
    });

    var APIUrl = 'https://api.openweathermap.org/data/2.5/';
    var IconUrl = 'http://openweathermap.org/img/wn/';
    var Api = {
      endpoints: {
        weather: '/weather',
        box: '/box/city',
        find: '/find',
        oneCall: '/onecall'
      }
    }; // https://www.countryflags.io/

    var FlagURUL = 'https://www.countryflags.io/';
    var FlagType = "/shiny";
    var FlagSize = "/64.png"; // https://www.countryflagsapi.com/

    var ContryFlagsAPI_URL = 'https://countryflagsapi.com/';
    var ContryFlagsAPI_FILE_TYPE = {
      PNG: 'png/',
      SVG: 'svg/'
    }; // export const ContryFlagsAPI_CODE = "/64.png";

    /***/
  },

  /***/
  "./src/app/Constants/weather-dashboard-constants.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Constants/weather-dashboard-constants.ts ***!
    \**********************************************************/

  /*! exports provided: CELCIUS_UNIT, KELVIN_UNIT, FAHRENHEIT_UNIT, FAHRENHEIT, CELCIUS, OneCallExcludes, DAYS, ToastMessageType, IconClasses */

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
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastMessageType", function () {
      return ToastMessageType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconClasses", function () {
      return IconClasses;
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
    var ToastMessageType = {
      ERROR: 'Error',
      WARNING: 'Warning',
      INFO: 'Info',
      SUCCESS: 'Success'
    };
    var IconClasses = {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    };
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


    var _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Constants/weather-dashboard-constants */
    "./src/app/Constants/weather-dashboard-constants.ts");
    /* harmony import */


    var _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Constants/url-constants */
    "./src/app/Constants/url-constants.ts");
    /* harmony import */


    var _appConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../appConfig */
    "./src/app/appConfig.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import { environment } from 'src/environments/environment';


    var WeatherService =
    /*#__PURE__*/
    function () {
      function WeatherService(_http) {
        _classCallCheck(this, WeatherService);

        this._http = _http;
        this.unitTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); // private showSpinner = new BehaviorSubject<boolean>(false);

        this.showSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // private Stored_API_Key = environment.OPENWEATHER_API_KEY;

        this.Stored_API_Key = _appConfig__WEBPACK_IMPORTED_MODULE_5__["APIKey"];
      }

      _createClass(WeatherService, [{
        key: "loadCurrentWeatherByCityName",
        value: function loadCurrentWeatherByCityName(cityName) {
          var unit = this.unitTypeSubject.getValue() ? _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["FAHRENHEIT_UNIT"] : _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["CELCIUS_UNIT"];
          var url = _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["Api"].endpoints.weather + '?q=' + cityName + '&appid=' + this.Stored_API_Key + '&units=' + unit;
          return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "loadCurrentWeatherByCoordinates",
        value: function loadCurrentWeatherByCoordinates(latitude, longitude) {
          var unit = this.unitTypeSubject.getValue() ? _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["FAHRENHEIT_UNIT"] : _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["CELCIUS_UNIT"];
          var url = _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["Api"].endpoints.weather + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + this.Stored_API_Key + '&units=' + unit;
          return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "loadOneAPICallDataByCurrentData",
        value: function loadOneAPICallDataByCurrentData(currentWeatherData, excludes) {
          var unit = this.unitTypeSubject.getValue() ? _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["FAHRENHEIT_UNIT"] : _Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_3__["CELCIUS_UNIT"];
          var excludesString = '';
          excludes.forEach(function (value, index) {
            excludesString += value;

            if (index !== excludes.length - 1) {
              excludesString += ',';
            }
          }); // console.log(excludesString);

          var url = '';

          if (excludesString && excludes.length > 0) {
            url = _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["Api"].endpoints.oneCall + '?lat=' + currentWeatherData.coord.lat + '&lon=' + currentWeatherData.coord.lon + '&exclude=' + excludesString + '&appid=' + this.Stored_API_Key + '&units=' + unit;
          } else {
            url = _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + _Constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["Api"].endpoints.oneCall + '?lat=' + currentWeatherData.coord.lat + '&lon=' + currentWeatherData.coord.lon + '&appid=' + this.Stored_API_Key + '&units=' + unit;
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
      return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
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
      var _this8 = this;

      _classCallCheck(this, AppComponent);

      this._weatherService = _weatherService;
      this.spinner = spinner;
      this.title = 'Weather-Dashboard';

      this._weatherService.getShowSpinner().subscribe(function (showSpinner) {
        if (showSpinner) {
          _this8.spinner.show();
        } else {
          _this8.spinner.hide();
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _Components_weather_widgets_weather_widgets_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Components/weather-widgets/weather-widgets.component */
    "./src/app/Components/weather-widgets/weather-widgets.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
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
      }), ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot() // ToastrModule added
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _Components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _Components_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_5__["LHSContentsComponent"], _Components_daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_14__["DailyChartComponent"], _Components_weather_widgets_weather_widgets_component__WEBPACK_IMPORTED_MODULE_21__["WeatherWidgetsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _Components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _Components_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_5__["LHSContentsComponent"], _Components_daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_14__["DailyChartComponent"], _Components_weather_widgets_weather_widgets_component__WEBPACK_IMPORTED_MODULE_21__["WeatherWidgetsComponent"]],
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
          }), ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot() // ToastrModule added
          ],
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

  /*! exports provided: APIKey, openweather */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIKey", function () {
      return APIKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "openweather", function () {
      return openweather;
    });

    var APIKey = '0dd5542d536e51ce47540ed11c8f0ebc';
    var openweather = {
      openweather: {
        apiKey: '0dd5542d536e51ce47540ed11c8f0ebc'
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