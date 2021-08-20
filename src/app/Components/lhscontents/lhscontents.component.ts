import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { IconUrl } from 'src/app/appConfig';
import { CELCIUS, FAHRENHEIT } from 'src/app/Constants/weather-dashboard-constants';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { CurrentWeather } from 'src/app/Models/weather.models';
import { ConvertUnixToUTC } from 'src/app/Services/weather-helper';
import { WeatherService } from 'src/app/Services/weather.service';

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
  currentDatetime: string;
  currentTemp: number;
  errorMsg: string;

  locationWeatherData: CurrentWeather;
  OneCallLocationWeatherData: OneAPICallModel;

  @Input()
  set oneCallWeatherData(data: OneAPICallModel) {
    this.OneCallLocationWeatherData = data;
    if(this.OneCallLocationWeatherData) {
      this.iconurl = IconUrl + this.OneCallLocationWeatherData.current.weather[0].icon + '@4x.png';
      this.currentDatetime = ConvertUnixToUTC(this.OneCallLocationWeatherData.current.dt);
      this.currentTemp = this.OneCallLocationWeatherData.current.temp;
      if (this.locationWeatherData && this.locationWeatherData.name) {
        this.cityName = this.locationWeatherData.name;
        this.countryName = this.locationWeatherData.sys.country;
      }
      console.log("IconUrl", this.iconurl, "\n", "currentDatetime", this.currentDatetime);
    }
  }

  @Input()
  set weatherData(data: CurrentWeather) {
    this.locationWeatherData = data;
    // if (this.locationWeatherData && this.locationWeatherData.name) {
    //   this.cityName = this.locationWeatherData.name;
    // }
  }

  @Output() onUnitTypeChange: any = new EventEmitter<CurrentWeather>();

  ngOnInit(): void {
  }

  handleSwitchSelection() {
    this._weatherService.setUnitType(this.unitTypeFahrenheit);
    if (this.OneCallLocationWeatherData && this.cityName) {
      // this.cityName = this.OneCallLocationWeatherData.timezone.split('/')[1];
      this._weatherService.loadCurrentWeatherByCityName(this.cityName).pipe(
        switchMap(data => {
          this.locationWeatherData = data;
          console.log("In LHS locationWeatherData = \n", data);
          return this._weatherService.loadOneAPICallDataByCurrentData(data, []);
        }))
        .subscribe(
          responseWeatherData => {
          this.OneCallLocationWeatherData = responseWeatherData;
          this.displayUnitType = this.unitTypeFahrenheit ? FAHRENHEIT : CELCIUS;
          this.onUnitTypeChange.emit(this.OneCallLocationWeatherData);
        },
        responseWeather => {
          this.errorMsg = responseWeather;
          console.log(responseWeather);
        },
        () => {
          console.log("handleSwitchSelection() Completed");
        }
      );
    } else {
      this.displayUnitType = this.unitTypeFahrenheit ? FAHRENHEIT : CELCIUS;
    }
  }

}
