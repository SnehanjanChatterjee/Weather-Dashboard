import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/Models/weather.models';
import { WeatherService } from 'src/app/Services/weather.service';
import { switchMap } from 'rxjs/operators';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { OneCallExcludes } from 'src/app/Constants/weather-dashboard-constants';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cityName: string = '';
  currentWeatherData: CurrentWeather;
  oneCallWeatherData: OneAPICallModel;
  // pageLoading: boolean = false;
  showErrorDiv: boolean = false;
  errorMessage: string = '';
  excludes = [OneCallExcludes.Minutely, OneCallExcludes.Hourly];

  constructor(private _weatherService: WeatherService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  getCurrentWeatherByCityName() {

    // this.pageLoading = true;
    // this.spinner.show();
    this._weatherService.setShowSpinner(true);
    
    this._weatherService.loadCurrentWeatherByCityName(this.cityName).pipe(
    switchMap(data => {
      this.currentWeatherData = data;
      // console.log("In main currentWeatherData = \n", this.currentWeatherData);
      // console.log("In main excludes =", this.excludes);
      return this._weatherService.loadOneAPICallDataByCurrentData(data, this.excludes);
    }))
    .subscribe(
      responseWeatherData => {
        window.setTimeout(() => {
          this.oneCallWeatherData = responseWeatherData;
          // console.log("In main.ts this.oneCallWeatherData = \n", this.oneCallWeatherData);
          // this.pageLoading = false;
          // this.spinner.hide();
          this._weatherService.setShowSpinner(false);
          this.showErrorDiv = false;
        }, 2000);
      },
      responseWeatherError => {
        // console.log("responseWeatherError = ", responseWeatherError);
        this.oneCallWeatherData = null;
        // this.errorMessage = responseWeatherError;
        this.errorMessage = (this.cityName === '' || this.cityName === null) ? 'Please enter city name' : 'Incorrect city name';
        this.showErrorDiv = true;
        // this.pageLoading = false;
        // this.spinner.hide();
        this._weatherService.setShowSpinner(false);
      },
      () => {
        // console.log('getCurrentWeatherByCityName Completed');
      }
    );
  }

  updateDataOnSwitchSelection(data: any) {
    this.oneCallWeatherData = data;
  }

  onKeyDown() {
    this.showErrorDiv = false;
  }

}
