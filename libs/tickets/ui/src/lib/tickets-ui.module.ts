import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { TicketsUiAddTicketDialogComponent } from './add-ticket-dialog/tickets-ui-add-ticket-dialog.component';
import { TicketsUiListComponent } from './list/tickets-ui-list.component';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [TicketsUiListComponent, TicketsUiAddTicketDialogComponent],
  exports: [TicketsUiListComponent],
})
export class TicketsUiModule {}
