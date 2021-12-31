export interface IState {
  conversations: [];
}

const initialState: IState = {
  conversations: [],
};

export function conversationsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
