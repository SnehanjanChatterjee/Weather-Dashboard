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
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r54.eChartOptions);
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
      styles: [".chartDiv[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n@media screen and (max-width: 768px) {\n    .chartDiv[_ngcontent-%COMP%] {\n        padding: 0px 2px;\n    }\n}\n\n.chartCard[_ngcontent-%COMP%] {\n    border-radius: 30px;\n    background-color: #fff;\n    \n    \n    width: 900px;\n    height: 300px;\n    box-shadow: var(--inside-box-shadow2);\n    -webkit-box-shadow: var(--inside-box-shadow2);\n    -moz-box-shadow: var(--inside-box-shadow2);\n}\n\n.chartCard[_ngcontent-%COMP%]:hover {\n    box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\n    -webkit-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\n    -moz-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\n}\n\n.chart[_ngcontent-%COMP%] {\n    height: 300px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kYWlseS1jaGFydC9kYWlseS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQjt3QkFDb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNkNBQTZDO0lBQzdDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLCtEQUErRDtJQUMvRCx1RUFBdUU7SUFDdkUsb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kYWlseS1jaGFydC9kYWlseS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0RGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jaGFydERpdiB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAycHg7XG4gICAgfVxufVxuXG4uY2hhcnRDYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLyogVGhpcyBpcyBub3QgcmVzcG9uc2l2ZSAqL1xuICAgIC8qIG1hcmdpbi1yaWdodDogNDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7ICovXG4gICAgd2lkdGg6IDkwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XG4gICAgLW1vei1ib3gtc2hhZG93OiB2YXIoLS1pbnNpZGUtYm94LXNoYWRvdzIpO1xufVxuXG4uY2hhcnRDYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93My13aGl0ZSksIHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93My13aGl0ZSksIHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XG4gICAgLW1vei1ib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93My13aGl0ZSksIHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XG59XG5cbi5jaGFydCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "lord-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "lord-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "lord-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 18, ctx_r47.currentTemp, "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Min: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 21, ctx_r47.todayMinTemp, "1.0-0"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Max: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 24, ctx_r47.todayMaxTemp, "1.0-0"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.displayUnitType === "celcius");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.displayUnitType === "fahrenheit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunrise: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 27, ctx_r47.sunriseTime, "h:mm a"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunset: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 30, ctx_r47.sunsetTime, "h:mm a"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r47.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 33, ctx_r47.weatherDescrption));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r47.countryFlag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0", ctx_r47.cityName, ", ", ctx_r47.countryName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 35, ctx_r47.currentDatetime, "EEEE, MMM d, y"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 38, ctx_r47.currentDatetime, "h:mm a"), " ");
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
        this.countryFlag = '';
        this.onUnitTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LHSContentsComponent, [{
        key: "oneCallWeatherData",
        set: function set(data) {
          this.OneCallLocationWeatherData = data;

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
              });
              this.countryFlag = src_app_Constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["FlagURUL"] + this.locationWeatherData.sys.country.toString() + src_app_Constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["FlagType"] + src_app_Constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["FlagSize"];
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
      consts: [["id", "mainLHSDiv"], [1, "unitToggler"], [1, "unitTogglerContentCel"], [1, "unitTogglerContent"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [1, "unitTogglerContentFah"], ["class", "tempCityInfo", 4, "ngIf"], [1, "tempCityInfo"], [1, "temp"], [1, "tempValue"], [4, "ngIf"], [1, "tempMinMax", "my-2"], [1, "tempMin"], [1, "tempMinValue"], [1, "tempMax"], [1, "tempMaxValue"], [1, "sunRiseSunset", "my-2"], [1, "sunRiseDiv"], ["aria-hidden", "true", 1, "fa", "fa-sun-o"], [1, "sunSetDiv"], ["aria-hidden", "true", 1, "fa", "fa-moon-o"], [1, "weatherIconDiv"], ["alt", "Icon", 1, "weatherIcon", 3, "src"], [1, "weatherDesc"], [1, "cityInfo", "mx-1"], ["alt", "Country Flag", 3, "src"], ["src", "https://cdn.lordicon.com/zzcjjxew.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"], [1, "timeInfo", "my-2", "d-grid", "gap-2"], [1, "timeInfoDate"], ["src", "https://cdn.lordicon.com/gmzxduhd.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"], [1, "timeInfoTime"], ["src", "https://cdn.lordicon.com/kbtmbyzy.json", "trigger", "loop", "colors", "primary:#ffffff,secondary:#ffffff", 2, "width", "50px", "height", "50px"]],
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
      styles: ["*[_ngcontent-%COMP%] {\n    color: white;\n}\n\n#mainLHSDiv[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    min-width: 100%;\n    min-height: 100%;\n}\n\n.unitToggler[_ngcontent-%COMP%] {\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unitTogglerContent[_ngcontent-%COMP%], .unitTogglerContentCel[_ngcontent-%COMP%], .unitTogglerContentFah[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-size: 20px;\n}\n\n.tempCityInfo[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.temp[_ngcontent-%COMP%] {\n    color: white;\n    text-align: center;\n    font-size: 65px;\n}\n\n.weatherIconDiv[_ngcontent-%COMP%] {\n    height: 130px;\n}\n\n.weatherIcon[_ngcontent-%COMP%] {\n    max-height: 80%;\n    max-width: 100%\n}\n\n.weatherIcon[_ngcontent-%COMP%], .weatherDesc[_ngcontent-%COMP%] {\n    \n    text-align: center;\n}\n\n.weatherDesc[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.cityInfo[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: center;\n    margin-top: -20px;\n}\n\n.timeInfoDate[_ngcontent-%COMP%], .timeInfoTime[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 20px;\n}\n\n.tempMinMax[_ngcontent-%COMP%], .sunRiseSunset[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9saHNjb250ZW50cy9saHNjb250ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9saHNjb250ZW50cy9saHNjb250ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jbWFpbkxIU0RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4udW5pdFRvZ2dsZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi51bml0VG9nZ2xlckNvbnRlbnQsIC51bml0VG9nZ2xlckNvbnRlbnRDZWwsIC51bml0VG9nZ2xlckNvbnRlbnRGYWgge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50ZW1wQ2l0eUluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGVtcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDY1cHg7XG59XG5cbi53ZWF0aGVySWNvbkRpdiB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbn1cblxuLndlYXRoZXJJY29uIHtcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlXG59XG5cbi53ZWF0aGVySWNvbiwgLndlYXRoZXJEZXNjIHtcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyRGVzYyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2l0eUluZm8ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50aW1lSW5mb0RhdGUsIC50aW1lSW5mb1RpbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50ZW1wTWluTWF4LCAuc3VuUmlzZVN1bnNldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"]
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
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
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

    function MainComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_span_12_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.cityName = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
              _this4.oneCallWeatherData = responseWeatherData; // console.log("In main.ts this.oneCallWeatherData = \n", this.oneCallWeatherData);

              _this4._weatherService.setShowSpinner(false);

              _this4.errorMessage = 'Showing weather data for ' + Object(src_app_Services_weather_helper__WEBPACK_IMPORTED_MODULE_3__["TitleCase"])(_this4.cityName);

              _this4.showToastMessage(_this4.errorMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].SUCCESS);
            }, 2000);
          }, function (responseWeatherError) {
            // console.log("responseWeatherError = ", responseWeatherError);
            _this4.oneCallWeatherData = null;

            _this4._weatherService.setShowSpinner(false);

            _this4.errorMessage = _this4.cityName === '' || _this4.cityName === null ? 'Please enter city name' : 'Incorrect city name';

            _this4.showToastMessage(_this4.errorMessage, src_app_Constants_weather_dashboard_constants__WEBPACK_IMPORTED_MODULE_2__["ToastMessageType"].ERROR);
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
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 15,
      vars: 12,
      consts: [["id", "shellDiv", 1, "container-fluid", "overflow-auto"], [1, "row"], [1, "col-md-3", 2, "padding", "0"], [3, "weatherData", "oneCallWeatherData", "excludesArray", "onUnitTypeChange"], [1, "col-md-9", 2, "padding", "0"], ["id", "mainDiv", 1, "glassmorphDiv2"], ["id", "searchDiv", 3, "ngStyle"], ["id", "searchDivInput", 1, "input-group"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["src", "https://cdn.lordicon.com/msoeawqm.json", "trigger", "click", "colors", "primary:#121331,secondary:#08a88a", "stroke", "100", 3, "click"], ["type", "text", "placeholder", "Enter City Name", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter", "keydown"], ["class", "input-group-text", "id", "basic-addon1", 3, "click", 4, "ngIf"], [3, "weatherData", "cityName"], [3, "currentWeatherData", "weatherData"], ["id", "basic-addon1", 1, "input-group-text", 3, "click"], [1, "fa", "fa-times"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-daily-chart", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-weather-widgets", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weatherData", ctx.currentWeatherData)("oneCallWeatherData", ctx.oneCallWeatherData)("excludesArray", ctx.excludes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.showErrorDiv ? 150 : 100));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weatherData", ctx.oneCallWeatherData)("cityName", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentWeatherData", ctx.currentWeatherData)("weatherData", ctx.oneCallWeatherData);
        }
      },
      directives: [_lhscontents_lhscontents_component__WEBPACK_IMPORTED_MODULE_7__["LHSContentsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _daily_chart_daily_chart_component__WEBPACK_IMPORTED_MODULE_10__["DailyChartComponent"], _weather_widgets_weather_widgets_component__WEBPACK_IMPORTED_MODULE_11__["WeatherWidgetsComponent"]],
      styles: ["#shellDiv[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n}\n\n#mainDiv[_ngcontent-%COMP%] {\n  border-radius: 12px 0px 0px 12px;\n  border: 1px solid rgba(209, 213, 219, 0.3);\n  display: flex;\n  flex-direction: column;\n  \n  justify-content: flex-start;\n  \n  \n  width: 100%;\n  height: 100vh;\n  \n  z-index: 10;\n}\n\n@media screen and (max-width: 768px) {\n  #mainDiv[_ngcontent-%COMP%] {\n    border-radius: 12px 12px 0px 0px;\n    height: 100%;\n    padding: 5px;\n    margin: 0px;\n  }\n}\n\n#searchDiv[_ngcontent-%COMP%] {\n  max-width: 100%;\n  \n  border-radius: 12px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#searchDivInput[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  background-color: white;\n  height: 40px;\n  width: 50px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  height: 40px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 40px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  \n  \n  transform: translateZ(0);\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  z-index: 9999;\n}\n\n@-webkit-keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n\n@keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n\n@-webkit-keyframes round {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes round {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVIQUF1SDtFQUN2SCwyQkFBMkI7RUFDM0IsaUhBQWlIO0VBQ2pILHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUd4Qix3QkFBd0I7RUFDeEIscUVBQXFFO0VBQ3JFLDZEQUE2RDtFQUM3RCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLG1IQUFtSDtFQUNySDtFQUNBO0lBQ0UsbUhBQW1IO0VBQ3JIO0VBQ0E7SUFDRSxtSkFBbUo7RUFDcko7RUFDQTtJQUNFLGtKQUFrSjtFQUNwSjtFQUNBO0lBQ0UsZ0pBQWdKO0VBQ2xKO0VBQ0E7SUFDRSxtSEFBbUg7RUFDckg7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUhBQW1IO0VBQ3JIO0VBQ0E7SUFDRSxtSEFBbUg7RUFDckg7RUFDQTtJQUNFLG1KQUFtSjtFQUNySjtFQUNBO0lBQ0Usa0pBQWtKO0VBQ3BKO0VBQ0E7SUFDRSxnSkFBZ0o7RUFDbEo7RUFDQTtJQUNFLG1IQUFtSDtFQUNySDtBQUNGOztBQUVBO0VBQ0U7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUVFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUVFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaGVsbERpdiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jbWFpbkRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMHB4IDBweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwOSwgMjEzLCAyMTksIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIEFsb25nIHRoZSBjcm9zcyBheGlzLCB0aGUgY3Jvc3MtYXhpcyBzaXplIGlzIHRoZSBtYXhpbXVtIG9mIHRoZSBmbGV4LWdyb3csIGZsZXgtc2hyaW5rLCBhbmQgZmxleC1iYXNpcyBwcm9wZXJ0aWVzLiAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC8qIEFsb25nIHRoZSBtYWluIGF4aXMsIHRoZSBtYWluLWF4aXMgc2l6ZSBpcyB0aGUgc3VtIG9mIHRoZSBmbGV4LWdyb3csIGZsZXgtc2hyaW5rLCBhbmQgZmxleC1iYXNpcyBwcm9wZXJ0aWVzLiAqL1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICB6LWluZGV4OiAxMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI21haW5EaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwcHggMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuI3NlYXJjaERpdiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2VhcmNoRGl2SW5wdXQge1xuICB3aWR0aDogNjAlO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubG9hZGVyIHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIG1hcmdpbjogNzJweCBhdXRvOyAqL1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcbiAgYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDYge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcbiAgfVxuICA1JSwgOTUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICB9XG4gIDEwJSwgNTklIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XG4gIH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcbiAgfVxuICAzOCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZDYge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcbiAgfVxuICA1JSwgOTUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICB9XG4gIDEwJSwgNTklIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XG4gIH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcbiAgfVxuICAzOCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3VuZCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm91bmQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */"]
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
      }, null);
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["gaugeHumidity"];
    var _c1 = ["gaugeHumidityFill"];
    var _c2 = ["gaugeHumidityCover"];
    var _c3 = ["gaugeCloud"];
    var _c4 = ["gaugeCloudFill"];
    var _c5 = ["gaugeCloudCover"];

    function WeatherWidgetsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Humidity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cloudiness");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 10, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r55.OneCallweather.current.humidity, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pressure ", ctx_r55.OneCallweather.current.pressure, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("UVI ", ctx_r55.OneCallweather.current.uvi, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r55.OneCallweather.current.clouds, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wind ", ctx_r55.OneCallweather.current.wind_speed, "");
      }
    }

    var WeatherWidgetsComponent =
    /*#__PURE__*/
    function () {
      function WeatherWidgetsComponent(renderer) {
        _classCallCheck(this, WeatherWidgetsComponent);

        this.renderer = renderer;
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
            this.setGaugeValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
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
            this.setGaugeValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "weatherData",
        set: function set(weather) {
          this.OneCallweather = weather;

          if (this.OneCallweather && this.gaugeCloudCoverElement && this.gaugeHumidityCoverElement) {
            this.setGaugeValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
            this.setGaugeValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
          }
        }
      }, {
        key: "currentWeatherData",
        set: function set(weather) {
          this.currentWeather = weather;
        }
      }, {
        key: "isEmptyObject",
        value: function isEmptyObject(obj) {
          return obj && Object.keys(obj).length === 0;
        }
      }, {
        key: "setGaugeValue",
        value: function setGaugeValue(value, element) {
          if (value < 0 || value > 1) {
            return;
          }

          this.renderer.setStyle(element.nativeElement, 'transform', 'rotate(' + value / 2 + 'turn)'); // this.renderer.createText(this.gaugeCoverElement.nativeElement, value);
        }
      }]);

      return WeatherWidgetsComponent;
    }();

    WeatherWidgetsComponent.ɵfac = function WeatherWidgetsComponent_Factory(t) {
      return new (t || WeatherWidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
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
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeHumidityEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeHumidityFillEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeHumidityCoverEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeCloudEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeCloudFillEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gaugeCloudCoverEl = _t.first);
        }
      },
      inputs: {
        weatherData: "weatherData",
        currentWeatherData: "currentWeatherData"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "widgetsMainDiv", 4, "ngIf"], [1, "widgetsMainDiv"], [1, "card", "widgetsCard", "humidity"], [1, "card-body", "widgetsCardBody"], [1, "widgetTitle"], [1, "widgetBody"], [1, "gauge"], ["gaugeHumidity", ""], [1, "gauge__body"], ["gaugeHumidityBody", ""], [1, "gauge__fill"], ["gaugeHumidityFill", ""], [1, "gauge__cover"], ["gaugeHumidityCover", ""], [1, "card", "widgetsCard", "pressure"], [1, "card-body"], [1, "card", "widgetsCard", "uvi"], [1, "card", "widgetsCard", "clouds"], ["gaugeCloud", ""], ["gaugeCloudBody", ""], ["gaugeCloudFill", ""], ["gaugeCloudCover", ""], [1, "card", "widgetsCard", "wind"]],
      template: function WeatherWidgetsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherWidgetsComponent_div_0_Template, 43, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OneCallweather && ctx.OneCallweather != undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".widgetsMainDiv[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n}\n\n.widgetsCard[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    border-radius: 30px;\n    margin: 40px 0px 5px 0px;\n    box-shadow: var(--inside-box-shadow2);\n    -webkit-box-shadow: var(--inside-box-shadow2);\n    -moz-box-shadow: var(--inside-box-shadow2);\n}\n\n.widgetsCard[_ngcontent-%COMP%]:hover {\n    box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\n    -webkit-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\n    -moz-box-shadow: var(--box-shadow3-white), var(--inside-box-shadow2);\n}\n\n.widgetsCardBody[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.widgetTitle[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 20px;\n}\n\n.widgetBody[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 30px 5px;\n}\n\n.gauge[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 150px;\n    \n    font-size: 24px;\n    color: #004033;\n}\n\n.gauge__body[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 0;\n    padding-bottom: 50%;\n    background: #b4c0be;\n    position: relative;\n    border-top-left-radius: 100% 200%;\n    border-top-right-radius: 100% 200%;\n    overflow: hidden;\n}\n\n.gauge__fill[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: inherit;\n    height: 100%;\n    background: #7a5aec;\n    transform-origin: center top;\n    transform: rotate(0.25turn);\n    transition: transform 0.2s ease-out;\n}\n\n.gauge__cover[_ngcontent-%COMP%] {\n    width: 75%;\n    height: 150%;\n    background: #ffffff;\n    border-radius: 50%;\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translateX(-50%);\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 25%;\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLXdpZGdldHMvd2VhdGhlci13aWRnZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixxQ0FBcUM7SUFDckMsNkNBQTZDO0lBQzdDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLCtEQUErRDtJQUMvRCx1RUFBdUU7SUFDdkUsb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLXdpZGdldHMvd2VhdGhlci13aWRnZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0c01haW5EaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi53aWRnZXRzQ2FyZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW46IDQwcHggMHB4IDVweCAwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWluc2lkZS1ib3gtc2hhZG93Mik7XG4gICAgLW1vei1ib3gtc2hhZG93OiB2YXIoLS1pbnNpZGUtYm94LXNoYWRvdzIpO1xufVxuXG4ud2lkZ2V0c0NhcmQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3czLXdoaXRlKSwgdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3czLXdoaXRlKSwgdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3czLXdoaXRlKSwgdmFyKC0taW5zaWRlLWJveC1zaGFkb3cyKTtcbn1cblxuLndpZGdldHNDYXJkQm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi53aWRnZXRUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLndpZGdldEJvZHkge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4IDVweDtcbn1cblxuLmdhdWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIC8qIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmOyAqL1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzAwNDAzMztcbn1cblxuLmdhdWdlX19ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjYjRjMGJlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlIDIwMCU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCUgMjAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ2F1Z2VfX2ZpbGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzdhNWFlYztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDAuMjV0dXJuKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbn1cblxuLmdhdWdlX19jb3ZlciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDE1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLyogVGV4dCAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWidgetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-weather-widgets',
          templateUrl: './weather-widgets.component.html',
          styleUrls: ['./weather-widgets.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
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

  /*! exports provided: APIUrl, IconUrl, Api, FlagURUL, FlagType, FlagSize */

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
    var FlagSize = "/64.png";
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WeatherService =
    /*#__PURE__*/
    function () {
      function WeatherService(_http) {
        _classCallCheck(this, WeatherService);

        this._http = _http;
        this.unitTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); // private showSpinner = new BehaviorSubject<boolean>(false);

        this.showSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.Stored_API_Key = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].OPENWEATHER_API_KEY;
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
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(_weatherService, spinner) {
      var _this7 = this;

      _classCallCheck(this, AppComponent);

      this._weatherService = _weatherService;
      this.spinner = spinner;
      this.title = 'Weather-Dashboard';

      this._weatherService.getShowSpinner().subscribe(function (showSpinner) {
        if (showSpinner) {
          _this7.spinner.show();
        } else {
          _this7.spinner.hide();
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
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
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
    }); // This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy


    var environment = {
      production: false,
      OPENWEATHER_API_KEY: 'undefined'
    };
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
    /*! /home/runner/work/Weather-Dashboard/Weather-Dashboard/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map