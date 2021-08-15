import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconUrl } from 'src/app/appConfig';
import { CELCIUS, FAHRENHEIT } from 'src/app/Constants/weather-dashboard-constants';
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

  cityName: string = 'Kolkata';
  unitTypeFahrenheit: boolean = false;
  displayUnitType: string = CELCIUS;
  iconurl: string = '';
  currentDatetime: string;
  errorMsg: string;

  locationWeatherData: CurrentWeather;

  @Input()
  set weatherData(data: CurrentWeather) {
    this.locationWeatherData = data;
    if(this.locationWeatherData) {
      this.iconurl = IconUrl + this.locationWeatherData.weather[0].icon + '.png';
      this.currentDatetime = ConvertUnixToUTC(this.locationWeatherData.dt);
      console.log("IconUrl", this.iconurl, "\n", "currentDatetime", this.currentDatetime);
    }
  }

  @Output() onUnitTypeChange: any = new EventEmitter<CurrentWeather>();

  ngOnInit(): void {
  }

  handleSwitchSelection() {
    this._weatherService.setUnitType(this.unitTypeFahrenheit);
    if (this.locationWeatherData && this.locationWeatherData.name) {
      this._weatherService.loadCurrentWeatherByCityName(this.locationWeatherData.name).subscribe(
        data => {
          this.locationWeatherData = data;
          this.displayUnitType = this.unitTypeFahrenheit ? FAHRENHEIT : CELCIUS;
          this.onUnitTypeChange.emit(this.locationWeatherData);
        },
        responseError => {
          this.errorMsg = responseError;
          console.log(responseError);
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
