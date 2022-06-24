import { User } from '@acme/shared-models';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { UsersState, UsersStore } from './users.store';

@Injectable()
export class UsersQuery extends QueryEntity<UsersState> {
  users$: Observable<User[]>;
  constructor(protected override store: UsersStore) {
    super(store);

    this.users$ = this.selectAll();
  }
}
