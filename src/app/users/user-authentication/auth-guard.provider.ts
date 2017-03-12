/**
 * Created by corne on 3/11/2017.
 */
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: AuthService) {}

    canActivate(): boolean {
        return this.authService.isLoggedIn();
    }
}
