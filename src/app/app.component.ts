import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="message$ | async as msg">
      {{ msg }}
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  readonly message$: Observable<string>;

  constructor(private readonly service: NotificationService) {
    this.message$ = this.service.message$;

    this.message$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v) => console.log(v));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
