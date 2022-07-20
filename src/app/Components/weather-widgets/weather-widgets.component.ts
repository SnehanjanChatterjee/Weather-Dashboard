import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OneAPICallModel } from 'src/app/Models/OneAPICallModel.models';
import { CurrentWeatherModel } from 'src/app/Models/weather.models';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-weather-widgets',
  templateUrl: './weather-widgets.component.html',
  styleUrls: ['./weather-widgets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetsComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, private _weatherSrvc: WeatherService, private _changeDetectorRef: ChangeDetectorRef) { }

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

  gaugeWindElement: ElementRef;
  gaugeWindFillElement: ElementRef;
  gaugeWindCoverElement: ElementRef;

  widgetNames = {
    humidity: 'Humidity',
    pressure: 'Pressure',
    uvi: 'UVI',
    uv_index: 'UV Index',
    cloudiness: 'Cloudiness',
    wind: 'Wind'
  }

  windSpeedUnit = '';

  @ViewChild('gaugeHumidity') set gaugeHumidityEl(value: ElementRef) {
    this.gaugeHumidityElement = value;
  };
  @ViewChild('gaugeHumidityFill') set gaugeHumidityFillEl(value: ElementRef) {
    this.gaugeHumidityFillElement = value;
  };
  @ViewChild('gaugeHumidityCover') set gaugeHumidityCoverEl(value: ElementRef) {
    this.gaugeHumidityCoverElement = value;
    if (this.OneCallweather && this.gaugeHumidityCoverElement) {
      this.setGaugeTurnValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
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
      this.setGaugeTurnValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
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
      this.setGaugeRoundedTurnValue(this.OneCallweather.current.uvi / 8, this.gaugeUVIFillElement);
    }
  };

  @ViewChild('gaugeWind') set gaugeWindEl(value: ElementRef) {
    this.gaugeWindElement = value;
  };
  @ViewChild('gaugeWindFill') set gaugeWindFillEl(value: ElementRef) {
    this.gaugeWindFillElement = value;
  };
  @ViewChild('gaugeWindCover') set gaugeWindCoverEl(value: ElementRef) {
    this.gaugeWindCoverElement = value;
    if (this.OneCallweather && this.gaugeWindCoverElement) {
      this.setGaugeRoundedTurnValue(this.OneCallweather.current.wind_speed * 0.01, this.gaugeWindFillElement);
    }
  };

  ngOnInit(): void {
    this._weatherSrvc.getUnitType().subscribe((unitType: boolean) => {
      this.windSpeedUnit = unitType ? 'mi/hr' : 'm/s'; // unitType = true means Celcius (metric) unit.
    });
  }

  ngAfterViewInit(): void {
  }

  @Input() set weatherData(weather: OneAPICallModel) {
    this.OneCallweather = weather;
    this._changeDetectorRef.markForCheck();
    if (this.OneCallweather && this.gaugeCloudCoverElement && this.gaugeHumidityCoverElement && this.gaugeUVICoverElement && this.gaugeWindCoverElement) {
      this.setGaugeTurnValue(this.OneCallweather.current.humidity * 0.01, this.gaugeHumidityFillElement);
      this.setGaugeRoundedTurnValue(this.OneCallweather.current.uvi / 8, this.gaugeUVIFillElement);
      this.setGaugeTurnValue(this.OneCallweather.current.clouds * 0.01, this.gaugeCloudFillElement);
      this.setGaugeRoundedTurnValue(this.OneCallweather.current.wind_speed * 0.01, this.gaugeWindFillElement);
    }
  }

  @Input() set currentWeatherData(weather: CurrentWeatherModel) {
    this.currentWeather = weather;
    this._changeDetectorRef.markForCheck();
  }

  setGaugeTurnValue(value: number, fillElement: ElementRef) {
    if (value <= 0 || value > 1) {
      return;
    }
    this.renderer.setStyle(fillElement.nativeElement, 'transform', 'rotate(' + (value / 2) + 'turn)');
    // this.renderer.createText(this.gaugeCoverElement.nativeElement, value);
  }

  setGaugeRoundedTurnValue(value: number, fillElement: ElementRef) {
    const rounded = Math.round(value * 10) / 10;
    let rotateBy = (rounded / 2);

    if (value > 0 && rounded === 0) {
      rotateBy = 0.1;
    }

    if (value <= 0 || value > 1) {
      return;
    }
    this.renderer.setStyle(fillElement.nativeElement, 'transform', 'rotate(' + (rotateBy) + 'turn)');
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

  setWindThresholdColour(value: number) {
    if (value <= 1) {
      return '#b4c0be';
    } else if (value > 1 && value <= 3) {
      return '#50eded';
    } else if (value > 3 && value <= 7) {
      return '#14d7d7';
    } else if (value > 7 && value <= 12) {
      return '#00cc00';
    } else if (value > 12 && value <= 18) {
      return '#00ff00';
    } else if (value > 18 && value <= 24) {
      return '#99ff33';
    } else if (value > 24 && value <= 31) {
      return '#ccff33';
    } else if (value > 31 && value <= 38) {
      return '#ffff00';
    } else if (value > 38 && value <= 46) {
      return '#ffcc00';
    } else if (value > 46 && value <= 54) {
      return '#ff9933';
    } else if (value > 54 && value <= 63) {
      return '#ff9933';
    } else if (value > 63 && value <= 72) {
      return '#ff5050';
    } else if (value > 72) {
      return '#ff0000';
    }
  }

}

