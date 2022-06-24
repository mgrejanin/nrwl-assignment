import { Ticket, User } from '@acme/shared-models';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'acme-tickets-ui-details',
  templateUrl: './tickets-ui-details.component.html',
  styleUrls: ['./tickets-ui-details.component.scss'],
})
export class TicketsUiDetailsComponent {
  @Input() ticket!: Ticket | null;
  @Input() assignee!: User | null;
  @Input() users!: User[];

  @Output() assigneTicket = new EventEmitter<{
    id: number;
    assigneeId: number;
  }>();
  @Output() completeTicket = new EventEmitter<{
    id: number;
    complete: boolean;
  }>();
}
