import { Ticket } from '@acme/shared-models';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { TicketsUiAddTicketDialogComponent } from '../add-ticket-dialog/tickets-ui-add-ticket-dialog.component';

@Component({
  selector: 'acme-tickets-ui-list',
  templateUrl: './tickets-ui-list.component.html',
  styleUrls: ['./tickets-ui-list.component.scss'],
})
export class TicketsUiListComponent {
  columnsToDisplay: string[] = ['id', 'description'];

  @Input() tickets: Ticket[] = [];

  @Output() addTicket = new EventEmitter<string>();
  @Output() openTicketDetails = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  openAddTicketDialog() {
    const dialogRef = this.dialog.open(TicketsUiAddTicketDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(filter((description: string) => !!description))
      .subscribe((description: string) => {
        this.addTicket.emit(description);
      });
  }
}
