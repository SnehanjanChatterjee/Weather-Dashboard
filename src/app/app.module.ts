import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LHSContentsComponent,
    DailyChartComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
