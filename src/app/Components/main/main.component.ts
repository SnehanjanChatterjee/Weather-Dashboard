import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurrentWeatherModel } from 'src/app/Models/weather.models';
import { WeatherService } from 'src/app/Services/weather.service';
import { switchMap } from 'rxjs/operators';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { IconClasses, OneCallExcludes, ToastMessageType } from 'src/app/Constants/weather-dashboard-constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ToasterNotification } from 'src/app/Models/common.models';
import { TitleCase } from 'src/app/Services/weather-helper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cityName = '';
  currentWeatherData: CurrentWeatherModel;
  singleCallWeatherData: OneAPICallModel;
  // pageLoading: boolean = false;
  showErrorDiv = false;
  showErrorPopup = false;
  errorMessage = '';
  excludes = [OneCallExcludes.Minutely, OneCallExcludes.Hourly];
  latitude: number;
  longitude: number;
  htmlGeolocationMessage = '';
  toastMessageObject: ToasterNotification = {
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
    iconClasses: IconClasses
  };
  @ViewChild('myinput') myInputField: ElementRef;

  // tslint:disable-next-line:variable-name
  constructor(private _weatherService: WeatherService, private spinner: NgxSpinnerService, private toastr: ToastrService) {
    if (this.cityName === '' || this.cityName === null) {
      this.getLocationByHTMLNavigator();
    }
  }

  ngOnInit(): void {
  }

  getCurrentWeatherByCityName() {

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
            this.singleCallWeatherData = responseWeatherData;
            // console.log("In main.ts this.singleCallWeatherData = \n", this.singleCallWeatherData);
            this._weatherService.setShowSpinner(false);
            this.errorMessage = 'Showing weather data for ' + TitleCase(this.cityName);
            this.showToastMessage(this.errorMessage, ToastMessageType.SUCCESS);
          }, 2000);
        },
        responseWeatherError => {
          // console.log("responseWeatherError = ", responseWeatherError);
          this.singleCallWeatherData = null;
          this._weatherService.setShowSpinner(false);
          this.errorMessage = (this.cityName === '' || this.cityName === null) ? 'Please enter city name' : 'Incorrect city name';
          this.showToastMessage(this.errorMessage, ToastMessageType.ERROR);
        },
        () => {
          // console.log('getCurrentWeatherByCityName Completed');
        }
      );
  }

  updateDataOnSwitchSelection(data: any) {
    this.singleCallWeatherData = data;
  }

  onKeyDown() {
    // this.showErrorDiv = false;
    this.toastr.clear();
  }

  getLocationByHTMLNavigator() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        if (this.latitude && this.longitude) {
          this.getCurrentWeatherByGeoLocation();
        }
      }, (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            this.htmlGeolocationMessage = 'User denied the request for Geolocation.';
            this.showToastMessage(this.htmlGeolocationMessage, ToastMessageType.ERROR);
            break;
          case error.POSITION_UNAVAILABLE:
            this.htmlGeolocationMessage = 'Location information is unavailable.';
            this.showToastMessage(this.htmlGeolocationMessage, ToastMessageType.ERROR);
            break;
          case error.TIMEOUT:
            this.htmlGeolocationMessage = 'The request to get user location timed out.';
            this.showToastMessage(this.htmlGeolocationMessage, ToastMessageType.ERROR);
            break;
        }
      }
      );
    } else {
      this.htmlGeolocationMessage = 'Geolocation is not supported by this browser.';
      this.showToastMessage(this.htmlGeolocationMessage, ToastMessageType.WARNING);
    }
  }

  getCurrentWeatherByGeoLocation() {
    this._weatherService.setShowSpinner(true);
    this._weatherService.loadCurrentWeatherByCoordinates(this.latitude, this.longitude).subscribe(
      responseWeatherData => {
        window.setTimeout(() => {
          if (responseWeatherData) {
            this.currentWeatherData = responseWeatherData;
            this.cityName = this.currentWeatherData.name;
            this._weatherService.setShowSpinner(false);
            this.getCurrentWeatherByCityName();
          }
        }, 2000);
      },
      responseWeatherError => {
        this.currentWeatherData = null;
        this._weatherService.setShowSpinner(false);
      },
      () => {
        // console.log('getCurrentWeatherByGeoLocation Completed');
      }
    );
  }

  showToastMessage(message: string, errorType: string) {
    if (errorType === ToastMessageType.ERROR) {
      this.toastr.error(message, ToastMessageType.ERROR, this.toastMessageObject);
    } else if (errorType === ToastMessageType.SUCCESS) {
      this.toastr.success(message, ToastMessageType.SUCCESS, this.toastMessageObject);
    } else if (errorType === ToastMessageType.WARNING) {
      this.toastr.success(message, ToastMessageType.WARNING, this.toastMessageObject);
    }
  }

  clearInputField() {
    this.cityName = '';
    this.myInputField.nativeElement.focus();
  }

}
