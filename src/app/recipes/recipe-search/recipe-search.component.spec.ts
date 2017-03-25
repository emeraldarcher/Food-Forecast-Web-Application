import { TestBed } from '@angular/core/testing';
import { RecipeSearchComponent } from './recipe-search.component';

describe('Recipe-Search', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [RecipeSearchComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(RecipeSearchComponent);
    expect(fixture.componentInstance instanceof RecipeSearchComponent).toBe(true, 'should create RecipeSearchComponent');
  });
});
