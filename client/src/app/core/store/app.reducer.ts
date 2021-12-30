import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromError from './error/error.reducer';

export interface AppState {
  auth: fromAuth.IState;
  error: fromError.IState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  error: fromError.errorReducer,
};
