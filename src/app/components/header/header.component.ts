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
    { name: 'Home', link: '' },
    { name: 'About', link: 'about' },
    { name: 'News', link: 'news' },
    { name: 'Seller', link: 'seller' },
    { name: 'Buyer', link: 'buyer' },
  ];
  constructor(public authService: AuthService) { }
  ngOnInit(): void {
    
  }
}
