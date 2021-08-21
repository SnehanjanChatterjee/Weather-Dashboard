import { Component, Input, OnInit } from '@angular/core';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';

@Component({
  selector: 'app-daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.css']
})
export class DailyChartComponent implements OnInit {

  chartweatherData: OneAPICallModel;
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set weatherData(data: OneAPICallModel) {
    this.chartweatherData = data;
    console.log("In daily-chart ", this.chartweatherData);
  }

}
