import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { NavigationModule } from '../shared/navigation/navigation.module';

import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        NavigationModule,

        RecipesRoutingModule
    ],
    declarations: [
        RecipesComponent,
        RecipeSearchComponent,
        RecipeComponent
    ],
    exports: [
        RecipesComponent,
        RecipeSearchComponent,
        RecipeComponent
    ]
})

export class RecipesModule { }
