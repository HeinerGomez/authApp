import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public authService: AuthService) {
    authService.handleAuthentication();
  }

  login() {
    this.authService.login();
  }

  salir() {
    this.authService.logout();
  }


}
