import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromError from './error/error.reducer';
import * as fromUsers from './users/users.reducer';
import * as fromConversations from './conversations/conversations.reducer';

export interface AppState {
  auth: fromAuth.IState;
  error: fromError.IState;
  users: fromUsers.IState;
  conversations: fromConversations.IState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  error: fromError.errorReducer,
  users: fromUsers.usersReducer,
  conversations: fromConversations.conversationsReducer,
};
