import { Ticket } from '@acme/shared-models';
import { TicketsStatusToFilter } from '@acme/tickets-utils';
import { TicketsQuery, TicketsService } from '@acme/tickets/data-access';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'acme-tickets-feature-list',
  templateUrl: './tickets-feature-list.component.html',
  styleUrls: ['./tickets-feature-list.component.scss'],
})
export class TicketsFeatureListComponent implements OnInit {
  readonly tickets$!: Observable<Ticket[]>;

  constructor(
    private ticketsService: TicketsService,
    private ticketsQuery: TicketsQuery
  ) {
    this.tickets$ = this.ticketsQuery.tickets$;
  }

  ngOnInit(): void {
    this.ticketsService.getTickets();
  }

  onAddTicket(description: string): void {
    this.ticketsService.addTicket({ description });
  }

  onFilterTickets(filter: TicketsStatusToFilter) {
    this.ticketsService.updateFilter(filter);
  }
}
