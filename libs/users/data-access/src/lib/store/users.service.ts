import { User } from '@acme/shared-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersStore } from './users.store';

@Injectable()
export class UsersService {
  constructor(private usersStore: UsersStore, private httpClient: HttpClient) {}

  getUsers(): void {
    this.httpClient.get<User[]>('/api/users').subscribe((users) => {
      this.usersStore.set(users);
    });
  }

  getUser(id: number) {
    return this.httpClient
      .get<User>(`/api/users/${id}`)
      .subscribe((user) => this.usersStore.add(user));
  }
}
