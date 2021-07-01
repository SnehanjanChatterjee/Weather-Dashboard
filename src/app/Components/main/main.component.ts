import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/Models/weather.models';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cityName: string = 'Kolkata';
  weatherData: CurrentWeather[];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeatherByCityName();
  }

  getCurrentWeatherByCityName() {
    this._weatherService.loadCurrentWeatherByCityName(this.cityName).subscribe(
      responseWeatherData => {
        this.weatherData = responseWeatherData;
        console.log(this.weatherData);
        // this.showMsgDiv = false;
      },
      responseProductError => {
        this.weatherData = null;
        // this.errMsg = responseProductError;
        // console.log(this.errMsg);
      }
    );
  }

}
