import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/Models/weather.models';

@Component({
  selector: 'app-lhscontents',
  templateUrl: './lhscontents.component.html',
  styleUrls: ['./lhscontents.component.css']
})
export class LHSContentsComponent implements OnInit {

  constructor() { }

  @Input() locationWeatherData: CurrentWeather;

  ngOnInit(): void {
  }

}
