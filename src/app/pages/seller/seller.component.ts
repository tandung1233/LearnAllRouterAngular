import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent {
  constructor(
    private router: Router,
    private router12: ActivatedRoute,
    private authService: AuthService
  ) {}
  navigateToAboutWithQueryParams() {
    this.router.navigate(['/about'], {
      queryParams: { order: 'popular', age: '18' },
    });
  }
}
