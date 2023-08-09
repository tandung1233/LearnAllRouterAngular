import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Vì link các đường link trên menu là đứng nên khai báo 1 mảng cho khỏe
  listNav = [
    { name: 'Home', link: '' },
    { name: 'About', link: 'about' },
    { name: 'News', link: 'news' },
  ];
}
