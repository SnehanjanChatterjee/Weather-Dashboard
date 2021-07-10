import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CELCIUS } from 'src/app/Constants/weather-dashboard-constants';
import { CurrentWeather } from 'src/app/Models/weather.models';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-lhscontents',
  templateUrl: './lhscontents.component.html',
  styleUrls: ['./lhscontents.component.css']
})
export class LHSContentsComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }
  cityName: string = 'Kolkata';
  unitType: boolean = false;

  @Input() locationWeatherData: CurrentWeather;
  @Output() onUnitTypeChange: any = new EventEmitter<CurrentWeather>();

  ngOnInit(): void {
  }

  handleSwitchSelection() {
    this._weatherService.setUnitType(this.unitType);
    this._weatherService.loadCurrentWeatherByCityName(this.cityName).subscribe(
      data => {
        this.locationWeatherData = data;
        this.onUnitTypeChange.emit(this.locationWeatherData);
      }
    );
  }

}
