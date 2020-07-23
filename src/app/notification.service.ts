import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  private readonly msg$ = new Subject<string>();
  readonly message$ = this.msg$.asObservable();
  msg: string;

  showMsg(msg: string) {
    this.msg$.next(msg);
    this.msg = msg;
  }

  clearMsg() {
    this.msg$.next(null);
  }

  constructor() {}
}
