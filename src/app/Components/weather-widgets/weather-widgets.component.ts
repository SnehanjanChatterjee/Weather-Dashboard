import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { CurrentWeatherModel } from 'src/app/Models/weather.models';

@Component({
  selector: 'app-weather-widgets',
  templateUrl: './weather-widgets.component.html',
  styleUrls: ['./weather-widgets.component.css']
})
export class WeatherWidgetsComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }

  OneCallweather: OneAPICallModel;
  currentWeather: CurrentWeatherModel;
  gaugeElement: ElementRef;
  gaugeFillElement: ElementRef;
  gaugeCoverElement: ElementRef;

  @ViewChild('gauge') set gaugeEl(value: ElementRef) {
    this.gaugeElement = value;
  };
  @ViewChild('gaugeFill') set gaugeFillEl(value: ElementRef) {
    this.gaugeFillElement = value;
  };
  @ViewChild('gaugeCover') set gaugeCoverEl(value: ElementRef) {
    this.gaugeCoverElement = value;
    if (this.OneCallweather && this.gaugeCoverElement) {
      this.setGaugeValue(this.OneCallweather.current.humidity * 0.01);
    }
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  @Input() set weatherData(weather: OneAPICallModel) {
    this.OneCallweather = weather;
    if (this.OneCallweather && this.gaugeCoverElement) {
      this.setGaugeValue(this.OneCallweather.current.humidity * 0.01);
    }
  }

  @Input() set currentWeatherData(weather: CurrentWeatherModel) {
    this.currentWeather = weather;
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  setGaugeValue(value) {
    if (value < 0 || value > 1) {
      return;
    }
    this.renderer.setStyle(this.gaugeFillElement.nativeElement, 'transform', 'rotate(' + (value / 2) + 'turn)');
    // this.renderer.createText(this.gaugeCoverElement.nativeElement, value);
  }

}

