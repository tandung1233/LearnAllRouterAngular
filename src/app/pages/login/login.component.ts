import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;
  constructor(private authService: AuthService, public toastr: ToastrService) {}
  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.authService.isLoggedIn = true;
      this.toastr.success('Đăng nhập thành công', 'Success', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'decreasing',
      });
    } else {
      this.loginError = true;
    }
  }
}
