import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicketsQuery } from './store/tickets.query';
import { TicketsService } from './store/tickets.service';
import { TicketsStore } from './store/tickets.store';

@NgModule({
  imports: [CommonModule],
  providers: [TicketsService, TicketsStore, TicketsQuery],
})
export class TicketsDataAccessModule {}
