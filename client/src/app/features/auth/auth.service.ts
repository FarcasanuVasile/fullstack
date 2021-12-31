import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private endPoint = `${environment.apiUrl}auth`;
  constructor(private http: HttpClient) {}

  login(body: any) {
    return this.http.post(this.endPoint, body);
  }
  loadUser() {
    return this.http.get(this.endPoint);
  }
  register(body: any) {
    return this.http.post(`${environment.apiUrl}users`, body);
  }
}
