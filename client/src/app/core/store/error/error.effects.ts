import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';

import * as fromErrorActions from './error.actions';
@Injectable()
export class ErrorEffects {
  // @Effect() dissmisError = this.actions$.pipe(
  //     ofType(fromErrorActions.ErrorActionTypes.SetNewError),
  //     switchMap
  // );
  constructor(private actions$: Actions) {}
}
