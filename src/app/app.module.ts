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
import { LearnFormComponent } from './pages/learn-form/learn-form.component';
import { TemplateDrivenComponent } from './pages/learn-form/template-driven/template-driven.component';
import { ReactiveComponent } from './pages/learn-form/reactive/reactive.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Example1Component } from './pages/learn-form/template-driven/example/example1/example1.component';
import { Example2Component } from './pages/learn-form/template-driven/example/example2/example2.component';
import { Example3Component } from './pages/learn-form/template-driven/example/example3/example3.component';
import { Example4Component } from './pages/learn-form/template-driven/example/example4/example4.component';
import { Example5Component } from './pages/learn-form/template-driven/example/example5/example5.component';
import { Example2TwoWayBindingComponent } from './pages/learn-form/template-driven/example/example2/example2-two-way-binding/example2-two-way-binding.component';
import { Example2TemplateReferenceVariableComponent } from './pages/learn-form/template-driven/example/example2/example2-template-reference-variable/example2-template-reference-variable.component';
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
    LearnFormComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example2TwoWayBindingComponent,
    Example2TemplateReferenceVariableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
