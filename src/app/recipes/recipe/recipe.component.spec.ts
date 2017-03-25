import { TestBed } from '@angular/core/testing';
import { RecipeComponent } from './recipe.component';

describe('Recipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [RecipeComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(RecipeComponent);
    expect(fixture.componentInstance instanceof RecipeComponent).toBe(true, 'should create RecipeComponent');
  });
});
