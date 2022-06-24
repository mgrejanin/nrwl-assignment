import { Ticket, User } from '@acme/shared-models';
import { TicketsQuery, TicketsService } from '@acme/tickets/data-access';
import { UsersQuery, UsersService } from '@acme/users/data-access';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'acme-tickets-feature-details',
  templateUrl: './tickets-feature-details.component.html',
  styleUrls: ['./tickets-feature-details.component.scss'],
})
export class TicketsFeatureDetailsComponent implements OnInit {
  readonly activeTicket$: Observable<Ticket | undefined>;
  readonly users$: Observable<User[] | undefined>;
  assignee$!: Observable<User | undefined>;

  constructor(
    private ticketsQuery: TicketsQuery,
    private route: ActivatedRoute,
    private ticketsService: TicketsService,
    private usersService: UsersService,
    private usersQuery: UsersQuery
  ) {
    this.activeTicket$ = this.ticketsQuery.activeTicket$.pipe(
      tap((ticket) => {
        if (ticket?.assigneeId) {
          this.assignee$ = this.usersQuery.selectEntity(ticket.assigneeId);
        }
      })
    );
    this.users$ = this.usersQuery.users$;
  }

  ngOnInit(): void {
    this.usersService.getUsers();

    this.route.params
      .pipe(take(1))
      .subscribe((params) =>
        this.ticketsService.setActiveTicket(params['ticketId'])
      );
  }

  onAssigneTicket({
    id,
    assigneeId,
  }: {
    id: number;
    assigneeId: number;
  }): void {
    this.ticketsService.assignTicket(id, assigneeId);
  }

  onCompleteTicket({ id, complete }: { id: number; complete: boolean }) {
    this.ticketsService.complete(id, complete);
  }
}
