import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,

        UsersRoutingModule
    ],
    declarations: [
        UserAuthenticationComponent,
        UserRegistrationComponent
    ],
    exports: [
        UserAuthenticationComponent,
        UserRegistrationComponent
    ]
})

export class UsersModule { }
