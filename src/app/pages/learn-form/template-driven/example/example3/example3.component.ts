import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
})
export class Example3Component {
  title = 'Template driven forms';

  @ViewChild('contactForm') contactForm!: NgForm;

  contact!: contact;

  ngOnInit() {
    this.contact = {
      firstname: '',
      lastname: '',
      gender: 'male',
      isToc: true,
      email: '',
    };
  }

  onSubmit(contactForm: any) {
    console.log(this.contactForm.value);
  }
  test(value: any) {
    console.log(value);
  }
}

export class contact {
  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  isToc: boolean = false;
  email: string = '';
}
