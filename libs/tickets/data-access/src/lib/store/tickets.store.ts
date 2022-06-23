import { Ticket } from '@acme/shared-models';
import { TicketsStatusToFilter } from '@acme/tickets-utils';
import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';

export interface TicketsState extends EntityState<Ticket, number>, ActiveState {
  filter: TicketsStatusToFilter;
}

@Injectable()
@StoreConfig({ name: 'tickets' })
export class TicketsStore extends EntityStore<TicketsState> {
  constructor() {
    super({ filter: TicketsStatusToFilter.ALL });
  }
}
