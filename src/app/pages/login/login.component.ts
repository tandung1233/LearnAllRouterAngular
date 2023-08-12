import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;
  constructor(
    private authService: AuthService,
    public message: MessageService
  ) {}
  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.authService.isLoggedIn = true;
      this.message.showSuccess('Chào mừng bạn đến với trang web chúng tôi');
    } else {
      this.loginError = true;
    }
  }
}
