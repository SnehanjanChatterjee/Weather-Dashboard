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
  xAxisData: string[] = [];
  seriesData1: number[] = [];
  seriesData2: number[] = [];

  chartOptions: EChartOption = {
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

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set weatherData(data: OneAPICallModel) {
    this.chartweatherData = data;
    if (this.chartweatherData && this.chartweatherData.daily && this.chartweatherData.daily.length > 0) {
      console.log("In daily-chart ", this.chartweatherData);
      this.xAxisData = [];
      this.seriesData1 = [];
      this.seriesData2 = [];
      this.chartweatherData.daily.forEach(element => {
        this.xAxisData.push(element.dt.toString());
        this.seriesData1.push(element.temp.min);
        this.seriesData2.push(element.temp.max);
      });
      this.smoothLineChart();
    }
  }

  smoothLineChart() {
    this.eChartOptions = {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: this.xAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: this.seriesData1,
          type: 'line',
          smooth: true
        },
        {
          data: this.seriesData2,
          type: 'line',
          smooth: true
        }
      ]
    };
  }

}
