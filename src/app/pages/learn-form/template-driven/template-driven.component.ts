import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  check = false
  onSubmit(formData: any) {
    console.log('Dữ liệu người dùng:', formData);
  }
  // contents: string[] = [
  //   `Ví dụ đơn giản nhất(lấy giá trị của form 2 cách sử dụng [(ngModel]="biến ts dùng để nếu edit
  // có sẵn dữ liệu") hoặc cách dưới đây để lấy dữ liệu khi nhập)`,
  //   'Gom nhóm các phần tử trong form lại sử dụng ngModelGroup',
  //   '4. Gom nhóm các phần tử trong form lại sử dụng ngModelGroup',
  // ];
  contents = ['content', 'content', 'content'];
  // templates: { [key: string]: any } = {};
  templates: any = ['content1', 'content2', 'content3'];
}
