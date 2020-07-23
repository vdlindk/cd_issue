import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  constructor(private readonly service: NotificationService) {}

  handleError(error: any): void {
    const logMsg = (error && error.message) || error;

    this.service.showMsg(logMsg);
  }
}
