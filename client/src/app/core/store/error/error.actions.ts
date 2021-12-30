import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  AddNewError = '[Error] Add new error',
  DisposeError = '[Error] Dispose error',
  ClearErrors = '[Error] Clear Errors',
}

export class AddNewError implements Action {
  readonly type = ErrorActionTypes.AddNewError;
  constructor(public payload: { type: string; message: string }) {}
}
export class DisposeError implements Action {
  readonly type = ErrorActionTypes.DisposeError;
  constructor() {}
}
export class ClearErrors implements Action {
  readonly type = ErrorActionTypes.ClearErrors;
}
export type ErrorActions = AddNewError | DisposeError | ClearErrors;
