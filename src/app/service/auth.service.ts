import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  currentUser = '';
  constructor(private router: Router) {
    console.log('au đã được khởi tạo');
  }
  login(username: string, password: string): boolean {
    if (username === '1' && password === '1') {
      this.isLoggedIn = true;
      this.currentUser = 'Dũng';
      this.router.navigate(['/']);
      return true;
    } else return false;
  }

  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
