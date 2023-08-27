import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Vì link các đường link trên menu là đứng nên khai báo 1 mảng cho khỏe
  listNav = [
    { name: 'Home', link: '', icon: 'fa-house-user' },
    { name: 'About', link: 'about', icon: 'fa-circle-info' },
    { name: 'News', link: 'news', icon: 'fa-newspaper' },
    { name: 'Seller', link: 'seller', icon: 'fa-cart-shopping' },
    { name: 'Buyer', link: 'buyer', icon: 'fa-bag-shopping' },
    { name: 'Learn Form', link: 'learn-form', icon: 'fa-bag-shopping' },
  ];
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}
