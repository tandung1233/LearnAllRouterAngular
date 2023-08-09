import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
// Mảng chứa các router
const routes: Routes = [
  // pathMatch: 'full' đã được thêm vào route mặc định để đảm bảo chỉ khớp khi URL hoàn toàn trùng khớp.
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  // Cái forRoot này quan trọng khởi tạo và cấu hình Router Module trong Angular, cho phép bạn quản lý việc điều hướng và hiển thị các thành phần khác nhau của ứng dụng dựa trên các route khác nhau.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
