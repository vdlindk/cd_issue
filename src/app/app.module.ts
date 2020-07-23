import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyErrorHandler } from './my-error-handler';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    NotificationService,
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
