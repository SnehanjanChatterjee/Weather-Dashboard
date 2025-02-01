import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { LocalDateTimeByUnixTimestamp, TitleCase } from 'src/app/Services/weather-helper';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyChartComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _weatherService: WeatherService, private datePipe: DatePipe, private _changeDetectorRef: ChangeDetectorRef) { }

  @Input()
  set weatherData(data: OneAPICallModel) {
    this.chartWeatherData = data;
    // this._changeDetectorRef.markForCheck();
    if (this.chartWeatherData && this.chartWeatherData.daily && this.chartWeatherData.daily.length > 0) {
      // console.log("In daily-chart ", this.chartWeatherData);
      this.xAxisData = [];
      this.seriesData1 = [];
      this.seriesData2 = [];

      this.chartWeatherData.daily.forEach(element => {
        const newDateTime = LocalDateTimeByUnixTimestamp(element.dt, this.chartWeatherData.timezone_offset);
        // let dayOfWeek = DAYS.filter(day => day.id === newDateTime.getDay())[0].day;
        const xAxisArrayValue = this.datePipe.transform(newDateTime, 'dd/MM');
        this.xAxisData.push(xAxisArrayValue);

        this.seriesData1.push(element.temp.min);
        this.seriesData2.push(element.temp.max);
      });

      const minValue = Math.min(Math.min(...this.seriesData1), Math.min(...this.seriesData2));
      const maxValue = Math.max(Math.max(...this.seriesData1), Math.max(...this.seriesData2));
      this.minYAxisValue = Math.floor(minValue / 10) * 10;
      this.maxYAxisValue = Math.ceil(maxValue / 10) * 10;

      this.smoothLineChart();
    }
  }

  chartWeatherData: OneAPICallModel;
  eChartOptions: EChartsOption;
  xAxisData: string[] = [];
  seriesData1: number[] = [];
  seriesData2: number[] = [];
  minYAxisValue = 0;
  maxYAxisValue = 0;
  unitTypeValue: string;
  theme = 'light';

  @Input() cityName: string;

  ngOnInit(): void {
    this._weatherService.getUnitType().subscribe((res: any) => {
      this.unitTypeValue = (res) ? '°F' : '°C';
    });
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
