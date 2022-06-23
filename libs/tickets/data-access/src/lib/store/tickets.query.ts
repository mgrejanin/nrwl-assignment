import { Ticket } from '@acme/shared-models';
import { TicketsStatusToFilter } from '@acme/tickets-utils';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable, switchMap } from 'rxjs';
import { TicketsState, TicketsStore } from './tickets.store';

@Injectable()
export class TicketsQuery extends QueryEntity<TicketsState> {
  tickets$: Observable<Ticket[]>;
  activeTicket$: Observable<Ticket | undefined>;
  statusToFilter$: Observable<TicketsStatusToFilter>;
  isLoading$: Observable<boolean>;

  constructor(protected override store: TicketsStore) {
    super(store);

    this.isLoading$ = this.selectLoading();
    this.activeTicket$ = this.selectActive();
    this.statusToFilter$ = this.select((state) => state.filter);
    this.tickets$ = this.statusToFilter$.pipe(
      switchMap((filter) =>
        this.selectAll({
          filterBy: (ticket) => {
            if (filter === TicketsStatusToFilter.PENDING) {
              return ticket.completed === false;
            }

            if (filter === TicketsStatusToFilter.COMPLETED) {
              return ticket.completed === true;
            }

            return true;
          },
        })
      )
    );
  }
}
