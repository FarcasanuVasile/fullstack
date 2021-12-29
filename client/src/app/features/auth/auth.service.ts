import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from 'src/app/app.config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private endPoint = `${appConfig.apiUrl}auth`;
  constructor(private http: HttpClient) {}

  login(body: any) {
    return this.http.post(this.endPoint, body);
  }
  loadUser() {
    return this.http.get(this.endPoint);
  }
  register(body: any) {
    return this.http.post(`${appConfig.apiUrl}users`, body);
  }
}