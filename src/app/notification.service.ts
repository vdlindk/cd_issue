import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly msg$ = new Subject<string>();
  readonly message$ = this.msg$.asObservable();

  showMsg(msg: string) {
    this.msg$.next(msg);
  }

  clearMsg() {
    this.msg$.next(null);
  }

  constructor() {}
}
