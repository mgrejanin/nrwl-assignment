import { Ticket } from '@acme/shared-models';
import { TicketsStatusToFilter } from '@acme/tickets-utils';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay, filter, map, Observable, retryWhen } from 'rxjs';
import { TicketsQuery } from './tickets.query';
import { TicketsStore } from './tickets.store';

@Injectable()
export class TicketsService {
  constructor(
    private ticketsStore: TicketsStore,
    private ticketsQuery: TicketsQuery,
    private httpClient: HttpClient,
    private snackbar: MatSnackBar,
    private route: Router
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

  updateFilter(filter: TicketsStatusToFilter): void {
    this.ticketsStore.update({
      filter,
    });
  }

  setActiveTicket(id: number) {
    this.ticketsQuery.isLoading$
      .pipe(
        map((isLoading) => {
          if (isLoading) {
            throw { message: 'loading state' };
          }

          if (!this.ticketsQuery.hasEntity(id)) {
            throw { message: 'not found' };
          }

          this.ticketsStore.setActive(id);
          return true;
        }),
        retryWhen((error: Observable<{ message: string }>) =>
          error.pipe(
            filter(({ message }) => {
              if (message === 'loading state') {
                return true;
              }

              if (message === 'not found') {
                this.snackbar.open('Ticket ID not found', 'Close', {
                  duration: 5000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                });
                this.route.navigate(['tickets']);
                return false;
              }

              return false;
            }),
            delay(500)
          )
        )
      )
      .subscribe();
  }

  assignTicket(ticketId: number, assigneeId: number) {
    return this.httpClient
      .put<void>(`/api/tickets/${ticketId}/assign/${assigneeId}`, {})
      .subscribe(() => this.ticketsStore.updateActive({ assigneeId }));
  }

  complete(ticketId: number, completed: boolean) {
    if (completed) {
      return this.httpClient
        .put<void>(`/api/tickets/${ticketId}/complete`, {})
        .subscribe(() => this.ticketsStore.updateActive({ completed }));
    }

    return this.httpClient
      .delete<void>(`/api/tickets/${ticketId}/complete`)
      .subscribe(() => this.ticketsStore.updateActive({ completed }));
  }

  // remove(id: ID) {
  //   this.ticketsStore.remove(id);
  // }
}
