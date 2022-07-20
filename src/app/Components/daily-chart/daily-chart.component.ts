import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { min } from 'rxjs/operators';
import { DAYS } from 'src/app/Constants/weather-dashboard-constants';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { LocalDateTime, LocalDateTimeByUnixTimestamp, TitleCase } from 'src/app/Services/weather-helper';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyChartComponent implements OnInit {

  chartweatherData: OneAPICallModel;
  eChartOptions: EChartOption;
  xAxisData: string[] = [];
  seriesData1: number[] = [];
  seriesData2: number[] = [];
  minYAxisValue: number = 0;
  maxYAxisValue: number = 0;
  unitTypeValue: string;
  theme: string = 'light';

  constructor(private _weatherService: WeatherService, private datePipe: DatePipe, private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._weatherService.getUnitType().subscribe((res: any) => {  
      this.unitTypeValue = (res) ? '°F' : '°C';
    })
  }

  @Input() cityName: string;

  @Input()
  set weatherData(data: OneAPICallModel) {
    this.chartweatherData = data;
    // this._changeDetectorRef.markForCheck();
    if (this.chartweatherData && this.chartweatherData.daily && this.chartweatherData.daily.length > 0) {
      // console.log("In daily-chart ", this.chartweatherData);
      this.xAxisData = [];
      this.seriesData1 = [];
      this.seriesData2 = [];
      this.chartweatherData.daily.forEach(element => {
        
        let newDateTime = LocalDateTimeByUnixTimestamp(element.dt, this.chartweatherData.timezone_offset);
        // let dayOfWeek = DAYS.filter(day => day.id === newDateTime.getDay())[0].day;
        let xAxisArrayValue = this.datePipe.transform(newDateTime, 'dd/MM');
        this.xAxisData.push(xAxisArrayValue);

        this.seriesData1.push(element.temp.min);
        this.seriesData2.push(element.temp.max);
      });
      
      let min_value = Math.min(Math.min(...this.seriesData1), Math.min(...this.seriesData2));
      let max_value = Math.max(Math.max(...this.seriesData1), Math.max(...this.seriesData2));
      this.minYAxisValue = Math.floor(min_value / 10) * 10;
      this.maxYAxisValue = Math.ceil(max_value / 10) * 10;

      this.smoothLineChart();
    }
  }

  smoothLineChart() {
    this.eChartOptions = {
      title: {
        show: true,
        text: TitleCase(this.cityName)
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
        name: 'Temperature (' + this.unitTypeValue + ')',
        type: 'value',
        min: this.minYAxisValue,
        max: this.maxYAxisValue
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
