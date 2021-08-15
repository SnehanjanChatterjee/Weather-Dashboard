import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/Models/weather.models';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cityName: string = '';
  currentWeatherData: CurrentWeather;
  pageLoading: boolean = false;
  showErrorDiv: boolean = false;
  errorMessage: string = '';
  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getCurrentWeatherByCityName() {

    this.pageLoading = true;
    this._weatherService.loadCurrentWeatherByCityName(this.cityName).subscribe(
      responseWeatherData => {
        window.setTimeout(() => {
          this.currentWeatherData = responseWeatherData;
          console.log(this.currentWeatherData);
          this.pageLoading = false;
          this.showErrorDiv = false;
        }, 2000);
      },
      responseWeatherError => {
        console.log("responseWeatherError = ", responseWeatherError);
        this.currentWeatherData = null;
        this.errorMessage = responseWeatherError;
        this.showErrorDiv = true;
        this.pageLoading = false;
      },
      () => {
        console.log('getCurrentWeatherByCityName Completed');
      }
    );
  }

  updateDataOnSwitchSelection(data: any) {
    this.currentWeatherData = data;
  }

}
