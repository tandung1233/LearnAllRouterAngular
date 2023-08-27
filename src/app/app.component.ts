import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router, UrlTree } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.autoLogin();
    // this.router.events
    //   // .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((data: any) => {
    //     console.log(data);
    //   });
    // const tree: UrlTree = this.router.createUrlTree(['/users'], {
    //   queryParams: { lang: 'en' },
    //   fragment: 'main',
    // });
    // this.router.navigateByUrl(tree);
  }
}
