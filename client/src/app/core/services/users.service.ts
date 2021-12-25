import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  usersChanged = new Subject<User[]>();
  private users: User[] = [
    new User(
      '1',
      'Vasile',
      'Farcasanu',
      'tytti_x@yahoo.com',
      'tytti_x',
      '123456',
      '1640353462134',
      '1640353462134',
      './assets/download.png',
      true,
      'Admin'
    ),
    new User(
      '2',
      'Vasile',
      'Farcasanu',
      'tytti_x@yahoo.com',
      'tytti_x',
      '123456',
      '1640353462134',
      '1640353462134',
      './assets/download.png',
      true,
      'Admin'
    ),
    new User(
      '3',
      'Vasile',
      'Farcasanu',
      'tytti_x@yahoo.com',
      'tytti_x',
      '123456',
      '1640353462134',
      '1640353462134',
      './assets/download.png',
      true,
      'Admin'
    ),
    new User(
      '4',
      'Vasile',
      'Farcasanu',
      'tytti_x@yahoo.com',
      'tytti_x',
      '123456',
      '1640353462134',
      '1640353462134',
      './assets/download.png',
      true,
      'Admin'
    ),
  ];

  getUsers() {
    return this.users.slice();
  }
  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }
}
