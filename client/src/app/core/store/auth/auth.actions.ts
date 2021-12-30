import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  FetchUserStartAction = '[Auth] Fetch User Start Action',
  FetchUserEndAction = '[Auth] Fetch User End Action',
  LoginStartAction = '[Auth] Login Start Action',
  LoginSuccessAction = '[Auth] Login Success Action',
  LogoutStartAction = '[Auth] Logout Start Action',
  LogoutEndAction = '[Auth] Logout End Action',
}

export class LoginStart implements Action {
  readonly type = AuthActionTypes.LoginStartAction;
  constructor(public payload: any) {}
}
export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccessAction;
  constructor() {}
}
export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutStartAction;
}
export type AuthActions = LoginStart | Logout | LoginSuccess;
