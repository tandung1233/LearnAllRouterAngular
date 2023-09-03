import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-example2-two-way-binding',
  templateUrl: './example2-two-way-binding.component.html',
  styleUrls: ['./example2-two-way-binding.component.css'],
})
export class Example2TwoWayBindingComponent {
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
      address: { city: 'Mumbai', street: 'Perry Cross Rd', pincode: '400050' },
    };
  }

  onSubmit(contactForm: any) {
    console.log(this.contact);
  }

  setDefaults() {
    this.contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: { city: 'Mumbai', street: 'Perry Cross Rd', pincode: '400050' },
    };
  }

  changeCountry() {
    this.contact.country = '1';
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
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
