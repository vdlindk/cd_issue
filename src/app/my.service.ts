import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private readonly httpClient: HttpClient) {}

  my(params: any = {}): Observable<any> {
    const options = { params };
    return this.httpClient.get('http://give.me/404', options);
  }
}
