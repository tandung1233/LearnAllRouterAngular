import { Component, ElementRef, ViewChild } from '@angular/core';
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
  // Vì nó không nằm trong struct directive nào nên ta đặt static true để lấy được nó trong ngOnInit luôn
  @ViewChild('usernameInput', { static: true }) usernameInput!: ElementRef;

  constructor(
    private authService: AuthService,
    public message: MessageService
  ) {}
  ngOnInit(): void {
    // Mặc định khi vào sẽ focus username luôn
    this.usernameInput.nativeElement.focus();
  }
  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.authService.isLoggedIn = true;
      this.message.showSuccess('Chào mừng bạn đến với trang web chúng tôi');
    } else {
      this.loginError = true;
    }
  }
}
