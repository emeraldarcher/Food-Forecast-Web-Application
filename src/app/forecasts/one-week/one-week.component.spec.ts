import { TestBed } from '@angular/core/testing';
import { OneWeekComponent } from './one-week.component';

describe('OneWeek', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [OneWeekComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(OneWeekComponent);
    expect(fixture.componentInstance instanceof OneWeekComponent).toBe(true, 'should create OneWeekComponent');
  });
});
