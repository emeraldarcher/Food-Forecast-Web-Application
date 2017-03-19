/**
 * Created by corne on 3/11/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isLoggedIn()) {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        }

        return this.authService.isLoggedIn();
    }
}
