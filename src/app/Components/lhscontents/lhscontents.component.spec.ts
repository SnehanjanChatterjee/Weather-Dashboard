import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LHSContentsComponent } from './lhscontents.component';

describe('LHSContentsComponent', () => {
  let component: LHSContentsComponent;
  let fixture: ComponentFixture<LHSContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LHSContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LHSContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
