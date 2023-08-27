import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { SellerComponent } from './pages/seller/seller.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LearnFormComponent } from './pages/learn-form/learn-form.component';
// Mảng chứa các routes nghĩa là 1 phần tử là 1 Route
const routes: Routes = [
  // pathMatch: 'full' đã được thêm vào route mặc định để đảm bảo chỉ khớp khi URL hoàn toàn trùng khớp.
  { title: 'Trang chủ', path: '', component: HomeComponent, pathMatch: 'full' },
  { title: 'Giới thiệu', path: 'about', component: AboutComponent },
  { title: 'Tin tức', path: 'news', component: NewsComponent },
  {
    title: 'Bên bán',
    path: 'seller',
    component: SellerComponent,
    // canActive là 1 mảng có thế gán nhiều guard khác nữa nhưng thông thường thì có 1 guard vì trong guard này có thể gọi gaurd khác bên trong
    canActivate: [AuthGuard],
  },
  {
    title: 'Bên mua',
    path: 'buyer',
    component: BuyerComponent,
    canActivate: [AuthGuard],
  },
  { title: 'Học form', path: 'learn-form', component: LearnFormComponent },
  { title: 'Đăng nhập', path: 'login', component: LoginComponent },
  { title: 'Không có quyền', path: '403', component: ForbiddenComponent },
  {
    title: 'Không tìm thấy trang',
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  // Cái forRoot này quan trọng khởi tạo và cấu hình Router Module trong Angular, cho phép bạn quản lý việc điều hướng và hiển thị các thành phần khác nhau của ứng dụng dựa trên các route khác nhau.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
