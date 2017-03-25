import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { NavigationModule } from '../shared/navigation/navigation.module';

import { ShoppingRoutingModule } from './shopping-routing.module';

import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        NavigationModule,

        ShoppingRoutingModule
    ],
    declarations: [
        ShoppingComponent,
        ShoppingListComponent
    ],
    exports: [
        ShoppingComponent,
        ShoppingListComponent
    ]
})

export class ShoppingModule { }
