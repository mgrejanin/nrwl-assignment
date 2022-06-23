import { Ticket } from '@acme/shared-models';
import { TicketsQuery } from '@acme/tickets/data-access';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'acme-tickets-feature-details',
  templateUrl: './tickets-feature-details.component.html',
  styleUrls: ['./tickets-feature-details.component.scss'],
})
export class TicketsFeatureDetailsComponent {
  readonly activeTicket$: Observable<Ticket | undefined>;

  constructor(private ticketsQuery: TicketsQuery) {
    this.activeTicket$ = this.ticketsQuery.activeTicket$;
  }
}
