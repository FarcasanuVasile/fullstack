import { Action } from '@ngrx/store';

export enum ConversationsActionsType {
  FetchConversationsStartAction = '[Conversations] Fetch Conversations Start Action',
  FetchConversationsSuccessAction = '[Conversations] Fetch Conversations Success Action',
  LoadConversationsAction = '[Conversations] Load Conversations Action',
  CreateNewConversationAction = '[Conversations] Create New Conversation Action',
  EditConversationAction = '[Conversations] Edit Conversation Action',
}

export class CreateConversation implements Action {
  readonly type = ConversationsActionsType.CreateNewConversationAction;
  constructor(public payload) {}
}

export class EditConversation implements Action {
  readonly type = ConversationsActionsType.EditConversationAction;
  constructor(public payload) {}
}

export class LoadConversations implements Action {
  readonly type = ConversationsActionsType.LoadConversationsAction;
  constructor(public payload: any) {}
}

export type ConversationsActions =
  | CreateConversation
  | EditConversation
  | LoadConversations;
