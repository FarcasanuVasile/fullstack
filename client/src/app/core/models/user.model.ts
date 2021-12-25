export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  createdOn: string;
  modifiedOn: string;
  avatarPath: string;
  isActive: boolean;
  type: string;
}
export class User implements IUser {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public username: string,
    public password: string,
    public createdOn: string,
    public modifiedOn: string,
    public avatarPath: string,
    public isActive: boolean,
    public type: string
  ) {}
}
