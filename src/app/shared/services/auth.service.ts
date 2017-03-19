/**
 * Created by corne on 3/11/2017.
 */
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    authUrl = 'whatevertheapiurlis';
    headers = {};

    constructor(private router: Router, private activatedRoute: ActivatedRoute){ }

    login(email: string, password: string): void {
        // let url = `${this.authUrl}/login`;
        // http.post(url, this.headers)
        //     .then(response => {localStorage.setItem('user', response); })
        //     .catch(error => console.log(error));
        localStorage.setItem('user', 'temp');

        // Redirect the user to original request
        let path = this.activatedRoute.queryParams['returnUrl'];
        if (!path) {
            path = 'forecasts';
        }
        this.router.navigate([path]);
    }

    logout() {
        localStorage.removeItem('user');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }
}
