import { TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('Nav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [NavComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(NavComponent);
    expect(fixture.componentInstance instanceof NavComponent).toBe(true, 'should create NavComponent');
  });
});
