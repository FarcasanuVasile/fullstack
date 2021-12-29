import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../../features/auth/store/auth.reducer';

export interface AppState {
  auth: fromAuth.IState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
};
