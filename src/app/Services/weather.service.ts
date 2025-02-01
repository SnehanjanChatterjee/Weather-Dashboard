import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentWeatherModel } from '../Models/weather.models';
import { CELCIUS_UNIT, FAHRENHEIT_UNIT } from '../Constants/weather-dashboard-constants';
import { OneAPICallModel } from '../Models/OneAPICallModel.models';
import { Api, APIUrl } from '../Constants/url-constants';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  private unitTypeSubject = new BehaviorSubject<boolean>(false);
  // private showSpinner = new BehaviorSubject<boolean>(false);
  private showSpinner = new Subject<boolean>();
  // private Stored_API_Key = environment.OPENWEATHER_API_KEY;
  private Stored_API_Key = APIKey;

  loadCurrentWeatherByCityName(cityName: string): Observable<CurrentWeatherModel> {

    let unit = (this.unitTypeSubject.getValue()) ? FAHRENHEIT_UNIT : CELCIUS_UNIT;

    const url = APIUrl + Api.endpoints.weather + '?q=' + cityName + '&appid=' + this.Stored_API_Key + '&units=' + unit;
    return this._http.get<CurrentWeatherModel>(url).pipe(catchError(this.errorHandler));

  }

  loadCurrentWeatherByCoordinates(latitude: number, longitude: number): Observable<CurrentWeatherModel> {

    let unit = (this.unitTypeSubject.getValue()) ? FAHRENHEIT_UNIT : CELCIUS_UNIT;

    const url = APIUrl + Api.endpoints.weather + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + this.Stored_API_Key + '&units=' + unit;
    return this._http.get<CurrentWeatherModel>(url).pipe(catchError(this.errorHandler));

  }

  loadOneAPICallDataByCurrentData(currentWeatherData: CurrentWeatherModel, excludes: any): Observable<OneAPICallModel> {

    let unit = (this.unitTypeSubject.getValue()) ? FAHRENHEIT_UNIT : CELCIUS_UNIT;

    let excludesString = '';
    excludes.forEach((value, index) => {
      excludesString += value;
      if (index !== excludes.length - 1) {
        excludesString += ',';
      }
    });
    // console.log(excludesString);

    let url = '';
    if (excludesString && excludes.length > 0) {
      url = APIUrl + Api.endpoints.oneCall + '?lat=' + currentWeatherData.coord.lat + '&lon=' + currentWeatherData.coord.lon +
      '&exclude=' + excludesString + '&appid=' + this.Stored_API_Key + '&units=' + unit;
    } else {
      url = APIUrl + Api.endpoints.oneCall + '?lat=' + currentWeatherData.coord.lat + '&lon=' + currentWeatherData.coord.lon +
      '&appid=' + this.Stored_API_Key + '&units=' + unit;
    }
    return this._http.get<OneAPICallModel>(url).pipe(catchError(this.errorHandler));

  }

  setUnitType(unitType: boolean) {
    this.unitTypeSubject.next(unitType);
  }

  getUnitType(): Observable<boolean> {
    return this.unitTypeSubject.asObservable();
  }

  setShowSpinner(showSpinnerValue: boolean) {
    this.showSpinner.next(showSpinnerValue);
  }

  getShowSpinner(): Observable<boolean> {
    return this.showSpinner.asObservable();
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
