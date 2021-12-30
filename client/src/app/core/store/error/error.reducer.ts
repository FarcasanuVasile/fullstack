import * as fromErrorActions from './error.actions';
export interface IState {
  errors: { type: string; message: string }[];
}
const initialState: IState = {
  errors: [],
};
export function errorReducer(
  state = initialState,
  action: fromErrorActions.ErrorActions
) {
  switch (action.type) {
    case fromErrorActions.ErrorActionTypes.SetNewError:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    default:
      return state;
  }
}
