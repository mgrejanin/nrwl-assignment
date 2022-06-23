import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'acme-tickets-ui-add-ticket-dialog',
  templateUrl: './tickets-ui-add-ticket-dialog.component.html',
  styleUrls: ['./tickets-ui-add-ticket-dialog.component.scss'],
})
export class TicketsUiAddTicketDialogComponent {
  description!: string;

  constructor(
    public dialogRef: MatDialogRef<TicketsUiAddTicketDialogComponent>
  ) {}

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
