import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForecastsComponent } from './forecasts.component';
import { OneWeekComponent } from './one-week/one-week.component';
import { TwoWeekComponent } from './two-week/two-week.component';
import { ProvidersModule } from '../shared/providers/providers.module';
import { CanActivateViaAuthGuard } from '../shared/providers/auth-guard.provider';

const myForecastRoutes: Routes = [
    {
        path: 'forecasts',
        component: ForecastsComponent,
        canActivate: [CanActivateViaAuthGuard],
        children: [
            { path: '', redirectTo: 'weekly-forecast', pathMatch: 'full' },
            { path: 'weekly-forecast',  component: OneWeekComponent },
            { path: 'bi-weekly-forecast', component: TwoWeekComponent }
        ]
    },

];
@NgModule({
    imports: [
        ProvidersModule,
        RouterModule.forChild(myForecastRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ForecastsRoutingModule { }
