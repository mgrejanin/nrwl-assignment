import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TicketsUiAddTicketDialogComponent } from './components/add-ticket-dialog/tickets-ui-add-ticket-dialog.component';
import { TicketsUiListComponent } from './components/list/tickets-ui-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule,
    RouterModule,
  ],
  declarations: [TicketsUiListComponent, TicketsUiAddTicketDialogComponent],
  exports: [TicketsUiListComponent],
})
export class TicketsUiModule {}
