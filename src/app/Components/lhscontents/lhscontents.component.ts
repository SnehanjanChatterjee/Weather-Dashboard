import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { IconUrl } from 'src/app/appConfig';
import { CELCIUS, FAHRENHEIT } from 'src/app/Constants/weather-dashboard-constants';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { CurrentWeather } from 'src/app/Models/weather.models';
import { LocalDateTime, LocalDateTimeByUnixTimestamp } from 'src/app/Services/weather-helper';
import { WeatherService } from 'src/app/Services/weather.service';
import * as i18nIsoCountries from 'i18n-iso-countries';

@Component({
  selector: 'app-lhscontents',
  templateUrl: './lhscontents.component.html',
  styleUrls: ['./lhscontents.component.css']
})
export class LHSContentsComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  cityName: string = '';
  countryName: string = '';
  unitTypeFahrenheit: boolean = false;
  displayUnitType: string = CELCIUS;
  iconurl: string = '';
  currentDatetime: Date;
  currentTemp: number;
  todayMinTemp: number;
  todayMaxTemp: number;
  weatherDescrption: string = '';
  sunriseTime: Date;
  sunsetTime: Date;
  errorMsg: string;

  locationWeatherData: CurrentWeather;
  OneCallLocationWeatherData: OneAPICallModel;
  excludes: any;

  @Input()
  set oneCallWeatherData(data: OneAPICallModel) {
    this.OneCallLocationWeatherData = data;
    if(this.OneCallLocationWeatherData) {

      this.iconurl = IconUrl + this.OneCallLocationWeatherData.current.weather[0].icon + '@4x.png';

      this.currentDatetime = LocalDateTime(this.OneCallLocationWeatherData.timezone_offset);

      this.currentTemp = this.OneCallLocationWeatherData.current.temp;
      this.todayMinTemp = this.locationWeatherData.main.temp_min;
      this.todayMaxTemp = this.locationWeatherData.main.temp_max;

      this.weatherDescrption = this.locationWeatherData.weather[0].description;

      this.sunriseTime = LocalDateTimeByUnixTimestamp(this.OneCallLocationWeatherData.current.sunrise, this.OneCallLocationWeatherData.timezone_offset);
      this.sunsetTime = LocalDateTimeByUnixTimestamp(this.OneCallLocationWeatherData.current.sunset, this.OneCallLocationWeatherData.timezone_offset);

      if (this.locationWeatherData && this.locationWeatherData.name) {
        this.cityName = this.locationWeatherData.name;
        // this.countryName = this.locationWeatherData.sys.country;
        var countries = require("i18n-iso-countries");
        // console.log(countries.getNames("en", {select: "official"}));
        this.countryName = countries.getName(this.locationWeatherData.sys.country, "en", {select: "official"});
      }
      // console.log("IconUrl", this.iconurl, "\n", "currentDatetime", this.currentDatetime);
    }
  }

  @Input()
  set weatherData(data: CurrentWeather) {
    this.locationWeatherData = data;
    // if (this.locationWeatherData && this.locationWeatherData.name) {
    //   this.cityName = this.locationWeatherData.name;
    // }
  }

  @Input()
  set excludesArray(array: any) {
    this.excludes = array;
    // console.log("In LHS excludes = ", this.excludes);
  }

  @Output() onUnitTypeChange: any = new EventEmitter<CurrentWeather>();

  ngOnInit(): void {
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  }

  handleSwitchSelection() {
    this._weatherService.setUnitType(this.unitTypeFahrenheit);
    if (this.OneCallLocationWeatherData && this.cityName) {
      // this.cityName = this.OneCallLocationWeatherData.timezone.split('/')[1];
      this._weatherService.loadCurrentWeatherByCityName(this.cityName).pipe(
        switchMap(data => {
          this.locationWeatherData = data;
          // console.log("In LHS locationWeatherData = \n", data);
          return this._weatherService.loadOneAPICallDataByCurrentData(data, this.excludes);
        }))
        .subscribe(
          responseWeatherData => {
          this.OneCallLocationWeatherData = responseWeatherData;
          this.displayUnitType = this.unitTypeFahrenheit ? FAHRENHEIT : CELCIUS;
          this.onUnitTypeChange.emit(this.OneCallLocationWeatherData);
        },
        responseWeather => {
          this.errorMsg = responseWeather;
          // console.log(responseWeather);
        },
        () => {
          // console.log("handleSwitchSelection() Completed");
        }
      );
    } else {
      this.displayUnitType = this.unitTypeFahrenheit ? FAHRENHEIT : CELCIUS;
    }
  }

}
