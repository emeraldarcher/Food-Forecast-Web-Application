import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user-authentication/login.component';

const usersRoutes: Routes = [
    { path: 'login',  component: LoginComponent },
    // { path: 'register', component: RegistrationComponent }
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
