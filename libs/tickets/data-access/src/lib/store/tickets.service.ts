import { Ticket } from '@acme/shared-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  constructor(
    private ticketsStore: TicketsStore,
    private httpClient: HttpClient
  ) {}

  getTickets(): void {
    this.httpClient
      .get<Ticket[]>('/api/tickets')
      .subscribe((tickets) => this.ticketsStore.set(tickets));
  }

  addTicket(payload: { description: string }): void {
    this.httpClient
      .post<Ticket>('/api/tickets', payload)
      .subscribe((ticket: Ticket) => this.ticketsStore.add(ticket));
  }

  // update(id, ticket: Partial<Ticket>) {
  //   this.ticketsStore.update(id, ticket);
  // }

  // remove(id: ID) {
  //   this.ticketsStore.remove(id);
  // }
}
