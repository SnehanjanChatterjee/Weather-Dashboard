import { Component, Input, OnInit } from '@angular/core';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { CurrentWeatherModel } from 'src/app/Models/weather.models';

@Component({
  selector: 'app-weather-widgets',
  templateUrl: './weather-widgets.component.html',
  styleUrls: ['./weather-widgets.component.css']
})
export class WeatherWidgetsComponent implements OnInit {

  constructor() { }

  OneCallweather: OneAPICallModel;
  currentWeather: CurrentWeatherModel;

  ngOnInit(): void {
  }

  @Input() set weatherData(weather: OneAPICallModel) {
    this.OneCallweather = weather;
  }
  
  @Input() set currentWeatherData(weather: CurrentWeatherModel) {
    this.currentWeather = weather;
  }

}
