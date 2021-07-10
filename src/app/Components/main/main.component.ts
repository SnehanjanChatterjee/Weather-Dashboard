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
  currentWeatherData: CurrentWeather;
  pageLoading: boolean = true;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeatherByCityName();
  }

  getCurrentWeatherByCityName() {
    this._weatherService.loadCurrentWeatherByCityName(this.cityName).subscribe(
      responseWeatherData => {
        window.setTimeout(() => {
          this.currentWeatherData = responseWeatherData;
          console.log(this.currentWeatherData);
          this.pageLoading = false;
        }, 2000);
      },
      responseProductError => {
        console.log(responseProductError);
        this.currentWeatherData = null;
      }
    );
  }

  updateDataOnSwitchSelection(data: any) {
    this.currentWeatherData = data;
  }

}
