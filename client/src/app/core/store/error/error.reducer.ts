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
    case fromErrorActions.ErrorActionTypes.AddNewError:
      return {
        ...state,
        errors: [action.payload, ...state.errors],
      };
    case fromErrorActions.ErrorActionTypes.DisposeError:
      const newErrors = Array.from(state.errors);
      newErrors.pop();
      return {
        ...state,
        errors: newErrors,
      };
    default:
      return state;
  }
}
