import { Injectable } from '@angular/core';
import { IConversation } from 'src/app/core/models/conversation.model';

@Injectable({ providedIn: 'root' })
export class MessengerService {
  conversations: IConversation[] = [];
  constructor() {}
}
