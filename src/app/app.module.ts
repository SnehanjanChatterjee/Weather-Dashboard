import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LHSContentsComponent } from './Components/lhscontents/lhscontents.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DailyChartComponent } from './Components/daily-chart/daily-chart.component';
import { DatePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { WeatherWidgetsComponent } from './Components/weather-widgets/weather-widgets.component';
import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  BarChart,
  GridComponent,
  CanvasRenderer]
);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LHSContentsComponent,
    DailyChartComponent,
    WeatherWidgetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxEchartsModule.forRoot({ echarts }),
    NgxEchartsDirective,
    NgxSpinnerModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [DatePipe, provideEchartsCore({ echarts })],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
  }
}
