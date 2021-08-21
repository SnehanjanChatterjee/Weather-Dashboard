import { Component, Input, OnInit } from '@angular/core';
// import { EChartsOption } from 'echarts';
import { EChartOption } from 'echarts';
import { Daily, OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';

@Component({
  selector: 'app-daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.css']
})
export class DailyChartComponent implements OnInit {

  chartweatherData: OneAPICallModel;
  eChartOptions: EChartOption;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set weatherData(data: OneAPICallModel) {
    this.chartweatherData = data;
    if (this.chartweatherData && this.chartweatherData.daily && this.chartweatherData.daily.length > 0) {
      console.log("In daily-chart ", this.chartweatherData);
      this.smoothChart(this.chartweatherData.daily);
    }
  }

  smoothChart(dailyData: Daily[]) {
    this.eChartOptions = {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    };
  }

}
