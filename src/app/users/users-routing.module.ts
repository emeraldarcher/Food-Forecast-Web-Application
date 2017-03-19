import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const usersRoutes: Routes = [
    { path: 'login',  component: UserAuthenticationComponent },
    { path: 'register', component: UserRegistrationComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }
