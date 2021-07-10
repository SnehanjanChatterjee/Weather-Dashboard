import { Injectable } from '@angular/core';
import { appConfig } from '../Constants/weather-dashboard-constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentWeather } from '../Models/weather.models';
import { APIKey } from '../appConfig';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  loadCurrentWeatherByCityName(cityName: string): Observable<CurrentWeather> {
    
    const url = appConfig.remoteHost + appConfig.api.endpoints.weather + '?q=' + cityName + '&appid=' + APIKey;
    return this._http.get<CurrentWeather>(url).pipe(catchError(this.errorHandler));
    
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
