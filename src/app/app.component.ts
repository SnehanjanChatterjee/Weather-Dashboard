import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-Dashboard';

  // tslint:disable-next-line:variable-name
  constructor(private _weatherService: WeatherService, private spinner: NgxSpinnerService) {
    this._weatherService.getShowSpinner().subscribe( (showSpinner) => {
      if (showSpinner) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
