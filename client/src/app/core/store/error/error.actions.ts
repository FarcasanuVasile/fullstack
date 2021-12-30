import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  SetNewError = '[Error] Set new error',
}

export class AddNewError implements Action {
  readonly type = ErrorActionTypes.SetNewError;
  constructor(public payload: { type: string; message: string }) {}
}
export type ErrorActions = AddNewError;
