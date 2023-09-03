import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example2-template-reference-variable',
  templateUrl: './example2-template-reference-variable.component.html',
  styleUrls: ['./example2-template-reference-variable.component.css'],
})
export class Example2TemplateReferenceVariableComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];
  contact!: contact;
  ngOnInit() {
    this.contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'Mumbai',
        street: 'Perry Cross Rd',
        pincode: '400050',
      },
    };
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });
  }
  onSubmit(contactForm: any) {
    console.log(this.contactForm.value);
  }
  setDefaults() {
    this.contactForm.setValue(this.contact);
  }
  changeCountry() {
    this.contactForm.controls['country'].setValue('1');
  }
  patchValue() {
    let obj = {
      firstname: 'Rahul',
      lastname: 'Dravid',
      email: 'rahul@gmail.com',
    };

    this.contactForm.control.patchValue(obj);
  }
  changeAddress() {
    let obj = {
      city: 'Bangalore',
      street: 'Brigade Road',
      pincode: '600100',
    };
    let address = this.contactForm.controls['address'] as FormGroup;
    address.patchValue(obj);
  }
  reset() {
    this.contactForm.reset();
  }
  resetForm() {
    this.contactForm.resetForm();
  }
}
export class contact {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  gender: string = '';
  isMarried: boolean = false;
  country: string = '';
  address: {
    city: string;
    street: string;
    pincode: string;
  } = { city: '', street: '', pincode: '' };
}
export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
