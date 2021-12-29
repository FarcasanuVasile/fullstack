import * as fromAuthActions from './auth.actions';
import { User } from 'src/app/core/models/user.model';

export interface IAuthState {
  user: {};
  isAuth: boolean;
  isLoading: false;
  token: string;
}
const initialState: IAuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
  token: null,
};

export interface AppState {
  authState: IAuthState;
}

export function authReducer(
  state = initialState,
  action: fromAuthActions.AuthActions
) {
  switch (action.type) {
    case fromAuthActions.AuthActionTypes.LoginStartAction:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case fromAuthActions.AuthActionTypes.LogoutStartAction:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
}
