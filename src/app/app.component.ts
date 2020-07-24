import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyService } from './my.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="message$ | async as msg" class="error-msg">
      {{ msg }}
    </div>

    <div *ngIf="result$ | async as result">
      {{ result | json }}
    </div>

    <button (click)="triggerPlainError()">plain error</button>
    <button (click)="triggerHttpError()">http error</button>
    <button (click)="triggerRxjsError()">rxjs error</button>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly message$: Observable<string>;
  result$: Observable<any>;

  constructor(
    private readonly notificationService: NotificationService,
    private readonly myService: MyService
  ) {
    this.message$ = this.notificationService.message$;

    this.message$.subscribe((v) => {
      console.log('the message stream has been updated: ', v);
    });
  }

  triggerHttpError() {
    this.result$ = this.myService.httpError();
  }

  triggerRxjsError() {
    this.result$ = this.myService.rxjsError();
  }

  triggerPlainError() {
    this.myService.plainError();
  }
}
