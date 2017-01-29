import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    MainComponent,
    NavComponent
  ],
  bootstrap: [ MainComponent ]
})

export class AppModule { }
