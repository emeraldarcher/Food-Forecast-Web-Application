import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { ProvidersModule } from '../shared/providers/providers.module';
import { CanActivateViaAuthGuard } from '../shared/providers/auth-guard.provider';

const recipesRoutes: Routes = [
    {
        path: 'shopping',
        component: ShoppingComponent,
        canActivate: [CanActivateViaAuthGuard],
        children: [
            { path: '', redirectTo: 'shopping-list', pathMatch: 'full' },
            { path: 'shopping-list',  component: ShoppingListComponent },
            // { path: ':{id}', component: RecipeComponent }
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
export class ShoppingRoutingModule { }
