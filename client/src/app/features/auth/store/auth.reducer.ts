import * as fromAuthActions from './auth.actions';

export interface IState {
  user: {};
  isAuth: boolean;
  isLoading: false;
  token: string;
}
const initialState: IState = {
  user: null,
  isAuth: false,
  isLoading: false,
  token: null,
};

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
