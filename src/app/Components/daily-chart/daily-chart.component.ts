import { Component, Input, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { WeatherService } from 'src/app/Services/weather.service';

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
  unitTypeValue: string;
  theme: string = 'light';

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this._weatherService.getUnitType().subscribe((res: any) => {  
      this.unitTypeValue = (res) ? '°F' : '°C';
    })
  }

  @Input() cityName: string;

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
      title: {
        show: true,
        text: 'Daily min, max temperature of ' + this.cityName
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        show: true,
        type: 'plain'
      },
      xAxis: {
        name: 'Day',
        type: 'category',
        data: this.xAxisData
      },
      yAxis: {
        name: 'Temperature(' + this.unitTypeValue + ')',
        type: 'value'
      },
      series: [
        {
          name: 'Min temperature',
          data: this.seriesData1,
          type: 'line',
          smooth: true
        },
        {
          name: 'Max temperature',
          data: this.seriesData2,
          type: 'line',
          smooth: true
        }
      ]
    };
  }

}
