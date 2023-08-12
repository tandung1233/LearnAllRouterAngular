import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(public toastr: ToastrService) {}
  showSuccess(message = '', title = 'Success') {
    this.toastr.success(message, title, {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-bottom-left',
    });
  }
  showError(message = '', title = 'Error') {
    this.toastr.error(message, title, {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-bottom-left',
    });
  }
  showInfo(message = '', title = 'Info') {
    this.toastr.info(message, title, {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-bottom-left',
    });
  }
  showWarning(message = '', title = 'Warning') {
    this.toastr.warning(message, title, {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-bottom-left',
    });
  }
}
