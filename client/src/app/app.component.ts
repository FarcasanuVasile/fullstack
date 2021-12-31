import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.reducer';
import * as AuthActions from './core/store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  isAutheticated: boolean = false;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('auth').subscribe((authState) => {
      console.log(authState);
      this.isAutheticated = authState.isAuth;
    });
    const token = localStorage.getItem('token');
    if (token && !this.isAutheticated)
      this.store.dispatch(new AuthActions.LoginSuccess(token));
  }
  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
