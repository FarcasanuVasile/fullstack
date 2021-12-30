import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as fromAuthActions from './auth.actions';
import * as fromErrorActions from '../error/error.actions';
@Injectable()
export class AuthEffects {
  loginStart$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(fromAuthActions.AuthActionTypes.LoginStartAction),
      switchMap((authData: fromAuthActions.LoginStart) => {
        return this.http
          .post<any>('http://localhost:5000/api/auth', authData.payload)
          .pipe(
            switchMap((resData) => {
              localStorage.setItem('token', resData.token);
              return of(new fromAuthActions.LoginSuccess(resData.token));
            }),
            catchError((error) => {
              return of(
                new fromErrorActions.AddNewError({
                  type: 'danger',
                  message: error.error.message,
                })
              );
            })
          );
      })
    )
  );
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.AuthActionTypes.LoginSuccessAction),
      switchMap((userData: fromAuthActions.LoginSuccess) => {
        return this.http.get('http://localhost:5000/api/auth').pipe(
          switchMap((resData) => {
            console.log(resData);
            return of(new fromAuthActions.LoadUser(resData));
          }),
          catchError((error) => {
            return of(
              new fromErrorActions.AddNewError({
                type: 'danger',
                message: error.error.message,
              })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
