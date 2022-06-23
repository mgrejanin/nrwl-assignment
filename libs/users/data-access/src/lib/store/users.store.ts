import { User } from '@acme/shared-models';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export type UsersState = EntityState<User, number>;

@Injectable()
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super();
  }
}
