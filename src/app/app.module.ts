import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { ErrorsModule } from './errors/errors.module';
import { UsersModule } from './users/users.module';
import { ForecastsModule } from './forecasts/forecasts.module';
import { NavigationModule } from './shared/navigation/navigation.module';
import { ServicesModule } from './services/services.module';
import { ProvidersModule } from './providers/providers.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,

        ErrorsModule,
        UsersModule,
        NavigationModule,
        ForecastsModule,
        ServicesModule,
        ProvidersModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
