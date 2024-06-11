import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckerService {
  BASE_URL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  checkNumber(value: number): Observable<string> {
    const url = `${this.BASE_URL}${value}`;
    const options = { responseType: 'text' as const };
    return this.http.get(url, options);
  }
}
