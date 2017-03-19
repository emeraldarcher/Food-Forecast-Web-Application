import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { LoginComponent } from './user-authentication/user-authentication.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
