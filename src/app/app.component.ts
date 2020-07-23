import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyService } from './my.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="message$ | async as msg">
      {{ msg }}
    </div>
    <div *ngIf="notificationService.msg">
      {{ notificationService.msg }}
    </div>
    <div *ngIf="msg">
      {{ msg }}
    </div>
    <pre *ngIf="result$ | async as result">{{ result | json }}</pre>
    <button (click)="onClick()">trigger error</button>
    <!--  <router-outlet></router-outlet> -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  readonly message$: Observable<string>;
  result$: Observable<any>;
  msg: string;

  constructor(
    readonly notificationService: NotificationService,
    private readonly myService: MyService
  ) {
    this.message$ = this.notificationService.message$;

    this.message$.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      console.log('the message stream has been updated: ', v);
      this.msg = v;
    });
  }

  onClick() {
    this.result$ = this.myService.my();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
