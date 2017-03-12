import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { NavigationModule } from '../navigation/navigation.module';

import { ForecastsRoutingModule } from './forecasts-routing.module';

import { ForecastsComponent } from './forecasts.component';
import { OneWeekComponent } from './one-week/one-week.component';
import { TwoWeekComponent } from './two-week/two-week.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        NavigationModule,

        ForecastsRoutingModule
    ],
    declarations: [
        ForecastsComponent,
        OneWeekComponent,
        TwoWeekComponent
    ],
    exports: [
        ForecastsComponent,
        OneWeekComponent,
        TwoWeekComponent
    ]
})

export class ForecastsModule { }
