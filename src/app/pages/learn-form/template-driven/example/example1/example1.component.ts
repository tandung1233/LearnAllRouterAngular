import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
})
export class Example1Component {
  onSubmit(loginForm: any) {
    // Đây là nơi bạn xử lý dữ liệu đăng nhập sau khi form được submit
    // Ví dụ: gửi dữ liệu đăng nhập đến server hoặc xử lý local
    console.log('Form submitted:  ', loginForm.value);
  }
}
