import * as fromAuthActions from './auth.actions';

export interface IState {
  user: {};
  isAuth: boolean;
  isLoading: boolean;
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
    case fromAuthActions.AuthActionTypes.LoginSuccessAction:
      return {
        ...state,
        isLoading: true,
      };

    case fromAuthActions.AuthActionTypes.LoadUserAction:
      console.log('load user');
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload,
      };

    case fromAuthActions.AuthActionTypes.LogoutAction:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
}
