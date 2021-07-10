import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentWeather } from '../Models/weather.models';
import { Api, APIKey, APIUrl } from '../appConfig';
import { METRIC_UNIT, STANDARD_UNIT } from '../Constants/weather-dashboard-constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  private unitTypeSubject = new BehaviorSubject<boolean>(false);

  loadCurrentWeatherByCityName(cityName: string): Observable<CurrentWeather> {

    let unit = (this.unitTypeSubject.getValue()) ? STANDARD_UNIT : METRIC_UNIT;
    
    const url = APIUrl + Api.endpoints.weather + '?q=' + cityName + '&appid=' + APIKey + '&units=' + unit;
    return this._http.get<CurrentWeather>(url).pipe(catchError(this.errorHandler));
    
  }

  setUnitType(unitType: boolean) {
    this.unitTypeSubject.next(unitType);
  }

  getUnitType(): Observable<boolean> {
    return this.unitTypeSubject.asObservable();
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
