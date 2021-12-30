import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoginStartAction = '[Auth] Login Start Action',
  LoginSuccessAction = '[Auth] Login Success Action',
  LoadUserAction = '[Auth] Load User Action',
  LogoutAction = '[Auth] Logout Start Action',
}

export class LoginStart implements Action {
  readonly type = AuthActionTypes.LoginStartAction;
  constructor(public payload: any) {}
}
export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccessAction;
  constructor(public payload: string) {}
}
export class LoadUser implements Action {
  readonly type = AuthActionTypes.LoadUserAction;
  constructor(public payload: any) {}
}
export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}
export type AuthActions = LoginStart | LoginSuccess | LoadUser | Logout;
