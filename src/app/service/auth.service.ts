import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Đây là service để xử lý login
// Mình đặt providedIn: 'root' nghĩa là nó chỉ tạo ra 1 đối tượng thôi còn như anh đức không để root thì vào component nào nó sẽ tạo ra 1 đối tượng và gọi
// Ở đây khi vào trang Home web lần đầu thì có 2 chổ xài cái này đó là headerComponent và AppComponent nó chỉ new 1 cái cho tât cả sử dụng
// Nếu không biết cứ console ở constructor là thấy ngay
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor(private router: Router) {
    console.log('au đã được khởi tạo');
  }
  // Đây là function login do mình viết dự án thực tế thì củng sẽ gần giống như vậy mình lưu vào localStorage 5 ngày nếu tài khoản mật khẩu chính xác
  login(username: string, password: string): boolean {
    if (username === '1' && password === '1') {
      this.isLoggedIn = true;
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 5); // Hạn là 5 ngày sau ngày hiện tại
      localStorage.setItem('expirationDate', expirationDate.toString());
      this.router.navigate(['/']);
      return true;
    } else return false;
  }
  // Khi đăng xuất đơn giản chỉ cần xóa cái local store đi là xong
  logOut() {
    localStorage.removeItem('expirationDate');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
  // Cái này mình gọi ở AppComponent nếu người dùng còn local store thì mình cho trạng thái đăng nhập là có
  autoLogin() {
    const expirationDate = localStorage.getItem('expirationDate');
    if (expirationDate && new Date() < new Date(expirationDate)) {
      this.isLoggedIn = true;
    }
  }
}
