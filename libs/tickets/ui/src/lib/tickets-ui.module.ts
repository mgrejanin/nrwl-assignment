import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TicketsUiAddTicketDialogComponent } from './components/add-ticket-dialog/tickets-ui-add-ticket-dialog.component';
import { TicketsUiDetailsComponent } from './components/details/tickets-ui-details.component';
import { TicketsUiListComponent } from './components/list/tickets-ui-list.component';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule,
    RouterModule,
  ],
  declarations: [
    TicketsUiListComponent,
    TicketsUiAddTicketDialogComponent,
    TicketsUiDetailsComponent,
  ],
  exports: [TicketsUiListComponent, TicketsUiDetailsComponent],
})
export class TicketsUiModule {}
