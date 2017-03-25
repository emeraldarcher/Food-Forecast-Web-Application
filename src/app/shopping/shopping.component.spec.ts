import { TestBed } from '@angular/core/testing';
import { ShoppingComponent } from './shopping.component';

describe('Shopping', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ShoppingComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(ShoppingComponent);
    expect(fixture.componentInstance instanceof ShoppingComponent).toBe(true, 'should create ShoppingComponent');
  });
});
