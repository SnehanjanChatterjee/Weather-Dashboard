import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentWeather } from '../Models/weather.models';
import { Api, APIKey, APIUrl } from '../appConfig';
import { CELCIUS_UNIT, FAHRENHEIT_UNIT, OneCallExcludes } from '../Constants/weather-dashboard-constants';
import { OneAPICallModel } from '../Models/OneAPICallModel.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  private unitTypeSubject = new BehaviorSubject<boolean>(false);
  private showSpinner = new BehaviorSubject<boolean>(false);

  loadCurrentWeatherByCityName(cityName: string): Observable<CurrentWeather> {

    let unit = (this.unitTypeSubject.getValue()) ? FAHRENHEIT_UNIT : CELCIUS_UNIT;
    
    const url = APIUrl + Api.endpoints.weather + '?q=' + cityName + '&appid=' + APIKey + '&units=' + unit;
    return this._http.get<CurrentWeather>(url).pipe(catchError(this.errorHandler));
    
  }
  
  loadCurrentWeatherByCoordinates(latitude: number, longitude: number): Observable<CurrentWeather> {

    let unit = (this.unitTypeSubject.getValue()) ? FAHRENHEIT_UNIT : CELCIUS_UNIT;
    
    const url = APIUrl + Api.endpoints.weather + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey + '&units=' + unit;
    return this._http.get<CurrentWeather>(url).pipe(catchError(this.errorHandler));
    
  }
  
  loadOneAPICallDataByCurrentData(currentWeatherData: CurrentWeather, excludes: any): Observable<OneAPICallModel> {

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
      '&exclude=' + excludesString + '&appid=' + APIKey + '&units=' + unit;
    } else {
      url = APIUrl + Api.endpoints.oneCall + '?lat=' + currentWeatherData.coord.lat + '&lon=' + currentWeatherData.coord.lon + 
      '&appid=' + APIKey + '&units=' + unit;
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
