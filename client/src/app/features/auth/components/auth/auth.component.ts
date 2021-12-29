import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../auth.service';
import * as fromAuthReducer from '../../store/auth.reducer';
import * as AuthActions from '../../store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoading: boolean = false;
  user = null;
  token: string = '';
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private store: Store<fromAuthReducer.AppState>
  ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.authService.login(this.authForm.value).subscribe((token: any) => {
      localStorage.setItem('token', token.token);
      this.authService.loadUser().subscribe((user) => {
        this.store.dispatch(new AuthActions.StartLogin({ ...user }));
      });
    });
    this.store.select('authState').subscribe((state) => {
      console.log(state);
    });
  }
}
