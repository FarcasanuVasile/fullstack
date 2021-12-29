import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  FetchUserStartAction = '[Auth] Fetch User Start Action',
  FetchUserEndAction = '[Auth] Fetch User End Action',
  LoginStartAction = '[Auth] Login Start Action',
  LoginEndAction = '[Auth] Login End Action',
  LogoutStartAction = '[Auth] Logout Start Action',
  LogoutEndAction = '[Auth] Logout End Action',
}

export class StartLogin implements Action {
  readonly type = AuthActionTypes.LoginStartAction;
  constructor(public payload) {}
}
export class StartLogout implements Action {
  readonly type = AuthActionTypes.LogoutStartAction;
}
export type AuthActions = StartLogin | StartLogout;
