import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private readonly httpClient: HttpClient) {}

  httpError(): Observable<any> {
    return this.httpClient.get('http://give.me/404');
  }

  rxjsError(): Observable<any> {
    return throwError(new Error('rxjs - error'));
  }

  plainError(): any {
    throw new Error('plain error');
  }
}
