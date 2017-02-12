import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page_not_found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    MainComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ MainComponent ]
})

export class AppModule { }
