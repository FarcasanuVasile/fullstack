export interface IState {
  users: [];
}
const initialState: IState = {
  users: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
