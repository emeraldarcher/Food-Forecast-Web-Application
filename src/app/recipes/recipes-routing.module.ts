import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { ProvidersModule } from '../shared/providers/providers.module';
import { CanActivateViaAuthGuard } from '../shared/providers/auth-guard.provider';

const recipesRoutes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [CanActivateViaAuthGuard],
        children: [
            { path: '', redirectTo: 'recipe-search', pathMatch: 'full' },
            { path: 'recipe-search',  component: RecipeSearchComponent },
            { path: ':{id}', component: RecipeComponent }
        ]
    },

];
@NgModule({
    imports: [
        ProvidersModule,
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule { }
