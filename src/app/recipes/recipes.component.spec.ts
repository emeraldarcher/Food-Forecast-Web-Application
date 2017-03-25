import { TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes.component';

describe('Recipes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [RecipesComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(RecipesComponent);
    expect(fixture.componentInstance instanceof RecipesComponent).toBe(true, 'should create RecipesComponent');
  });
});
