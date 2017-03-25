import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { ErrorsModule } from './errors/errors.module';
import { UsersModule } from './users/users.module';
import { ForecastsModule } from './forecasts/forecasts.module';
import { RecipesModule } from './recipes/recipes.module';
import { NavigationModule } from './shared/navigation/navigation.module';
import { ServicesModule } from './shared/services/services.module';
import { ProvidersModule } from './shared/providers/providers.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,

        ErrorsModule,
        UsersModule,
        ForecastsModule,
        RecipesModule,
        ServicesModule,
        ProvidersModule,

        AppRoutingModule,
        NavigationModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
