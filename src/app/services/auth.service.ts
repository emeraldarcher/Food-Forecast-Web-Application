/**
 * Created by corne on 3/11/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    authUrl = 'whatevertheapiurlis';
    headers = {};

    constructor(){ }

    login(): void {
        // let url = `${this.authUrl}/login`;
        // http.post(url, this.headers)
        //     .then(response => {localStorage.setItem('user', response); })
        //     .catch(error => console.log(error));
        localStorage.setItem('user', 'temp');
    }

    logout() {
        localStorage.removeItem('user');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }
}
