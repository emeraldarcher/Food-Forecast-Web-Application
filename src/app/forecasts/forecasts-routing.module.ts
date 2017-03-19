import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForecastsComponent } from './forecasts.component';
import { OneWeekComponent } from './one-week/one-week.component';
import { TwoWeekComponent } from './two-week/two-week.component';
import { ProvidersModule } from '../providers/providers.module';
import { CanActivateViaAuthGuard } from '../providers/auth-guard.provider';

const myForecastRoutes: Routes = [
    {
        path: 'forecasts',
        component: ForecastsComponent,
        canActivate: [CanActivateViaAuthGuard],
        children: [
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
