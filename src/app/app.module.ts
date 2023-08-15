import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { SellerComponent } from './pages/seller/seller.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    SellerComponent,
    BuyerComponent,
    NotFoundComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatBadgeModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
