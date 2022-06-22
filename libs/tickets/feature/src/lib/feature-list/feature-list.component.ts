import { Ticket } from '@acme/shared-models';
import { TicketsQuery, TicketsService } from '@acme/tickets/data-access';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'acme-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  readonly tickets$!: Observable<Ticket[]>;

  constructor(
    private ticketsService: TicketsService,
    ticketsQuery: TicketsQuery
  ) {
    this.tickets$ = ticketsQuery.tickets$;
  }

  ngOnInit(): void {
    this.ticketsService.get();
  }
}
