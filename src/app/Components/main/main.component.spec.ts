import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { LHSContentsComponent } from '../lhscontents/lhscontents.component';
import { WeatherWidgetsComponent } from '../weather-widgets/weather-widgets.component';
import { DailyChartComponent } from '../daily-chart/daily-chart.component';
import { DatePipe } from '@angular/common';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => { },
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => { },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule
      ],
      declarations: [MainComponent, LHSContentsComponent, WeatherWidgetsComponent, DailyChartComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: ToastrService, useValue: toastrService },
        DatePipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
