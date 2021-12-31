import { Action } from '@ngrx/store';

export enum UsersActionsType {
  FetchUsersStartAction = '[Users] Fetch Users Start Action',
  FetchUsersSuccessAction = '[Users] Fetch Users Succes Action',
  LoadUsersAction = '[Users] Load Users Action',
  EditUserAction = '[Users] Edit User Action',
}

export class FetchUsersStart implements Action {
  readonly type = UsersActionsType.FetchUsersStartAction;
  constructor(public payload) {}
}

export type UsersActions = FetchUsersStart;
