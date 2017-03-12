import { TestBed } from '@angular/core/testing';
import { ForecastsComponent } from './forecasts.component';

describe('Forecasts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ForecastsComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(ForecastsComponent);
    expect(fixture.componentInstance instanceof ForecastsComponent).toBe(true, 'should create ForecastsComponent');
  });
});
