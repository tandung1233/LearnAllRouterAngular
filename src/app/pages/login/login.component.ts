import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}
  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.authService.isLoggedIn = true;
    } 
  }
}
