import { TestBed } from '@angular/core/testing';
import { TwoWeekComponent } from './two-week.component';

describe('TwoWeek', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TwoWeekComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(TwoWeekComponent);
    expect(fixture.componentInstance instanceof TwoWeekComponent).toBe(true, 'should create TwoWeekComponent');
  });
});
