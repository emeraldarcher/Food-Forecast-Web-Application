import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    MainComponent,
    NavComponent,
    HomeComponent
  ],
  bootstrap: [ MainComponent ]
})

export class AppModule { }
