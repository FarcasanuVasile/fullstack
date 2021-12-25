export interface IConversation {
  users: [];
  messages: [];
  createdOn: Date;
  modifiedOn: Date;
  isDeleted: boolean;
}
export class Conversation {
  constructor(
    public users: [],
    public messages: [],
    public createdOn: Date,
    public modifiedOn: Date,
    public isDeleted: boolean
  ) {}
}
