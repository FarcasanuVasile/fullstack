import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import * as fromAuthActions from './auth.actions';
@Injectable()
export class AuthEffects {
  @Effect() loginStart = this.actions$.pipe(
    ofType(fromAuthActions.AuthActionTypes.LoginStartAction),
    switchMap((authData: fromAuthActions.LoginStart) => {
      return this.http
        .post<any>('http://localhost:5000/api/auth', authData.payload)
        .pipe(
          map((resData) => {
            return of(new fromAuthActions.LoginSuccess());
          }),
          catchError((error) => {
            return of();
          })
        );
    })
  );
  @Effect() loadUser = this.actions$.pipe(
    ofType(fromAuthActions.AuthActionTypes.LoginSuccessAction),
    switchMap(() => {
      return this.http.get('http://localhost:5000/api/auth').pipe(
        map((resData) => console.log(resData)),
        catchError((err) => of())
      );
    })
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
