import { TicketsService } from '@acme/tickets/data-access';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acme-tickets-feature-container',
  templateUrl: './tickets-feature-container.component.html',
})
export class TicketsFeatureContainerComponent implements OnInit {
  constructor(private ticketsService: TicketsService) {}

  ngOnInit(): void {
    this.ticketsService.getTickets();
  }
}
