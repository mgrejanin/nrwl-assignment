import { Ticket } from '@acme/shared-models';
import { TicketsStatusToFilter } from '@acme/tickets-utils';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TicketsState extends EntityState<Ticket> {
  filter: TicketsStatusToFilter;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tickets' })
export class TicketsStore extends EntityStore<TicketsState> {
  constructor() {
    super();
  }
}
