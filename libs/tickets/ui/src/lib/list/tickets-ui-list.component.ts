import { Ticket } from '@acme/shared-models';
import { TicketsStatusToFilter } from '@acme/tickets-utils';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs/operators';
import { TicketsUiAddTicketDialogComponent } from '../add-ticket-dialog/tickets-ui-add-ticket-dialog.component';

@Component({
  selector: 'acme-tickets-ui-list',
  templateUrl: './tickets-ui-list.component.html',
  styleUrls: ['./tickets-ui-list.component.scss'],
})
export class TicketsUiListComponent {
  readonly ticketsStatusToFilter = TicketsStatusToFilter;
  readonly columnsToDisplay: string[] = [
    'id',
    'description',
    'assigneeId',
    'completed',
  ];
  dataSource: MatTableDataSource<Ticket>;
  statusToFilter: string[] = [];

  @Input() set tickets(tickets: Ticket[]) {
    this.dataSource = new MatTableDataSource<Ticket>(tickets);
  }

  @Output() addTicket = new EventEmitter<string>();
  @Output() openTicketDetails = new EventEmitter<string>();
  @Output() filterByStatus = new EventEmitter<TicketsStatusToFilter>();

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Ticket>();
    this.statusToFilter = Object.keys(this.ticketsStatusToFilter);
  }

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
