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

  gaugeHumidityElement: ElementRef;
  gaugeHumidityFillElement: ElementRef;
  gaugeHumidityCoverElement: ElementRef;

  gaugeCloudElement: ElementRef;
  gaugeCloudFillElement: ElementRef;
  gaugeCloudCoverElement: ElementRef;

  gaugeUVIElement: ElementRef;
  gaugeUVIFillElement: ElementRef;
  gaugeUVICoverElement: ElementRef;

  widgetNames = {
    humidity: 'Humidity',
    pressure: 'Pressure',
    uvi: 'UVI',
    uv_index: 'UV Index',
    cloudiness: 'Cloudiness',
    wind: 'Wind'
  }

  @ViewChild('gaugeHumidity') set gaugeHumidityEl(value: ElementRef) {
    this.gaugeHumidityElement = value;
  };
  @ViewChild('gaugeHumidityFill') set gaugeHumidityFillEl(value: ElementRef) {
    this.gaugeHumidityFillElement = value;
  };
  @ViewChild('gaugeHumidityCover') set gaugeHumidityCoverEl(value: ElementRef) {
    this.gaugeHumidityCoverElement = value;
    if (this.OneCallweather && this.gaugeHumidityCoverElement) {
      this.setGaugeValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
    }
  };

  @ViewChild('gaugeCloud') set gaugeCloudEl(value: ElementRef) {
    this.gaugeCloudElement = value;
  };
  @ViewChild('gaugeCloudFill') set gaugeCloudFillEl(value: ElementRef) {
    this.gaugeCloudFillElement = value;
  };
  @ViewChild('gaugeCloudCover') set gaugeCloudCoverEl(value: ElementRef) {
    this.gaugeCloudCoverElement = value;
    if (this.OneCallweather && this.gaugeCloudCoverElement) {
      this.setGaugeValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
    }
  };

  @ViewChild('gaugeUVI') set gaugeUVIEl(value: ElementRef) {
    this.gaugeUVIElement = value;
  };
  @ViewChild('gaugeUVIFill') set gaugeUVIFillEl(value: ElementRef) {
    this.gaugeUVIFillElement = value;
  };
  @ViewChild('gaugeUVICover') set gaugeUVICoverEl(value: ElementRef) {
    this.gaugeUVICoverElement = value;
    if (this.OneCallweather && this.gaugeUVICoverElement) {
      this.setGaugeValue(this.OneCallweather.current.uvi / 8, this.gaugeUVICoverElement);
    }
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  @Input() set weatherData(weather: OneAPICallModel) {
    this.OneCallweather = weather;
    if (this.OneCallweather && this.gaugeCloudCoverElement && this.gaugeHumidityCoverElement) {
      this.setGaugeValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
      this.setGaugeValue(this.OneCallweather.current.uvi / 8, this.gaugeUVIFillElement);
      this.setGaugeValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
    }
  }

  @Input() set currentWeatherData(weather: CurrentWeatherModel) {
    this.currentWeather = weather;
  }

  setGaugeValue(value: number, element: ElementRef) {
    if (value <= 0 || value > 1) {
      return;
    }
    this.renderer.setStyle(element.nativeElement, 'transform', 'rotate(' + (value / 2) + 'turn)');
    // this.renderer.createText(this.gaugeCoverElement.nativeElement, value);
  }

  setThresholdColour(value: number) {
    if (value <= 0) {
      return '#b4c0be';
    } else if (value > 0 && value <= 20) {
      return 'red';
    } else if (value > 20 && value <= 60) {
      return 'orange';
    } else if (value > 60 && value <= 90) {
      return '#eded02';
    } else if (value > 90) {
      return 'green';
    }
  }

  setUVIThresholdColour(value: number) {
    if (value <= 0) {
      return '#b4c0be';
    } else if (value > 0 && value <= 2) { // You can safely enjoy being outside!
      return 'green';
    } else if (value > 2 && value <= 7) { // Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!
      return '#eded02';
    } else if (value > 7) { // Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!
      return 'red';
    }
  }

}

