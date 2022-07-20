import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ContryFlagsAPI_FILE_TYPE, ContryFlagsAPI_URL, FlagSize, FlagType, FlagURUL, IconUrl } from 'src/app/Constants/url-constants';
import { CELCIUS, FAHRENHEIT } from 'src/app/Constants/weather-dashboard-constants';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { CurrentWeatherModel } from 'src/app/Models/weather.models';
import { LocalDateTime, LocalDateTimeByUnixTimestamp } from 'src/app/Services/weather-helper';
import { WeatherService } from 'src/app/Services/weather.service';
import * as i18nIsoCountries from 'i18n-iso-countries';

@Component({
  selector: 'app-lhscontents',
  templateUrl: './lhscontents.component.html',
  styleUrls: ['./lhscontents.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LHSContentsComponent implements OnInit {

  constructor(private _weatherService: WeatherService, private _changeDetectorRef: ChangeDetectorRef) { }

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
  countryFlagUrl: string = '';

  locationWeatherData: CurrentWeatherModel;
  OneCallLocationWeatherData: OneAPICallModel;
  excludes: any;

  @Input()
  set singleCallWeatherData(data: OneAPICallModel) {
    this.OneCallLocationWeatherData = data;
    // this._changeDetectorRef.markForCheck();
    if(this.OneCallLocationWeatherData) {

      this.iconurl = IconUrl + this.OneCallLocationWeatherData.current.weather[0].icon + '@4x.png';

      this.currentDatetime = LocalDateTime(this.OneCallLocationWeatherData.timezone_offset);

      this.currentTemp = this.OneCallLocationWeatherData.current.temp;
      // this.todayMinTemp = this.locationWeatherData.main.temp_min;
      // this.todayMaxTemp = this.locationWeatherData.main.temp_max;
      this.todayMinTemp = this.OneCallLocationWeatherData.daily[0].temp.min;
      this.todayMaxTemp = this.OneCallLocationWeatherData.daily[0].temp.max;

      this.weatherDescrption = this.locationWeatherData.weather[0].description;

      this.sunriseTime = LocalDateTimeByUnixTimestamp(this.OneCallLocationWeatherData.current.sunrise, this.OneCallLocationWeatherData.timezone_offset);
      this.sunsetTime = LocalDateTimeByUnixTimestamp(this.OneCallLocationWeatherData.current.sunset, this.OneCallLocationWeatherData.timezone_offset);

      if (this.locationWeatherData && this.locationWeatherData.name) {
        this.cityName = this.locationWeatherData.name;
        // this.countryName = this.locationWeatherData.sys.country;
        var countries = require("i18n-iso-countries");
        // console.log(countries.getNames("en", {select: "official"}));
        this.countryName = countries.getName(this.locationWeatherData.sys.country, "en", {select: "official"});
        // this.countryFlagUrl = FlagURUL + this.locationWeatherData.sys.country.toString() + FlagType + FlagSize; // API not working
        this.countryFlagUrl = ContryFlagsAPI_URL + ContryFlagsAPI_FILE_TYPE.PNG + this.locationWeatherData.sys.country.toString();
      }
      // console.log("IconUrl", this.iconurl, "\n", "currentDatetime", this.currentDatetime);
    }
  }

  @Input()
  set weatherData(data: CurrentWeatherModel) {
    this.locationWeatherData = data;
    // this._changeDetectorRef.markForCheck();
    // if (this.locationWeatherData && this.locationWeatherData.name) {
    //   this.cityName = this.locationWeatherData.name;
    // }
  }

  @Input()
  set excludesArray(array: any) {
    this.excludes = array;
    // console.log("In LHS excludes = ", this.excludes);
  }

  @Output() onUnitTypeChange: any = new EventEmitter<CurrentWeatherModel>();

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
