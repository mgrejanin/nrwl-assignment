import { Ticket } from '@acme/shared-models';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export type TicketsState = EntityState<Ticket>;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tickets' })
export class TicketsStore extends EntityStore<TicketsState> {
  constructor() {
    super();
  }
}
