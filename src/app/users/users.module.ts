import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { UsersRoutingModule } from './users-routing.module';

import { LoginComponent } from './user-authentication/login.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,

        UsersRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})

export class UsersModule { }
