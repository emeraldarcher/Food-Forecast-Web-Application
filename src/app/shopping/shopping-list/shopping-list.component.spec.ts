import { TestBed } from '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';

describe('ShoppingList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ShoppingListComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(ShoppingListComponent);
    expect(fixture.componentInstance instanceof ShoppingListComponent).toBe(true, 'should create ShoppingListComponent');
  });
});
