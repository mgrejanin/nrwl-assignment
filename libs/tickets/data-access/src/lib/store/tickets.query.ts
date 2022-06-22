import { Ticket } from '@acme/shared-models';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TicketsState, TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsQuery extends QueryEntity<TicketsState> {
  tickets$: Observable<Ticket[]>;

  constructor(protected override store: TicketsStore) {
    super(store);

    this.tickets$ = this.selectAll();
  }
}
