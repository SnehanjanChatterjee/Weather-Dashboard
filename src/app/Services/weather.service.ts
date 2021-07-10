import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentWeather } from '../Models/weather.models';
import { Api, APIKey, APIUrl } from '../appConfig';
import { METRIC_UNIT } from '../Constants/weather-dashboard-constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  loadCurrentWeatherByCityName(cityName: string): Observable<CurrentWeather> {
    
    const url = APIUrl + Api.endpoints.weather + '?q=' + cityName + '&appid=' + APIKey + '&units=' + METRIC_UNIT;
    return this._http.get<CurrentWeather>(url).pipe(catchError(this.errorHandler));
    
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
