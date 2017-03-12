import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AuthService } from './user-authentication/auth.service';
import { CanActivateViaAuthGuard } from './user-authentication/auth-guard.provider';
import { UsersRoutingModule } from './users-routing.module';

import { LoginComponent } from './user-authentication/login.component';

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
    providers: [
        AuthService,
        CanActivateViaAuthGuard
    ],
    exports: [
        LoginComponent,
        // AuthService,
        CanActivateViaAuthGuard
    ]
})

export class UsersModule { }
