import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ff-nav',
  templateUrl: 'nav.component.pug',
  styleUrls: ['nav.component.scss']
})

export class NavComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
