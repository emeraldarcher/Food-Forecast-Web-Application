import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  templateUrl: 'user-authentication.component.pug',
  styleUrls: ['user-authentication.component.scss']
})

export class UserAuthenticationComponent {
  private email: string;
  private password: string;

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password);
  }
}

