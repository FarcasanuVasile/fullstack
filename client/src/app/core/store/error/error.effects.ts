import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, of, switchMap, tap } from 'rxjs';

import * as fromErrorActions from './error.actions';
@Injectable()
export class ErrorEffects {
  disposeError = createEffect((): any =>
    this.actions$.pipe(
      ofType(fromErrorActions.ErrorActionTypes.AddNewError),
      delay(5000),
      map((errorData: fromErrorActions.AddNewError) => {
        return new fromErrorActions.DisposeError();
      })
    )
  );

  constructor(private actions$: Actions) {}
}
