import { TicketsDataAccessModule } from '@acme/tickets/data-access';
import { TicketsUiModule } from '@acme/tickets/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicketsFeatureListComponent } from './pages/list/tickets-feature-list.component';
import { TicketsFeatureDetailsComponent } from './pages/details/tickets-feature-details.component';

@NgModule({
  imports: [
    CommonModule,
    TicketsUiModule,
    TicketsDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        component: TicketsFeatureListComponent,
      },
      {
        path: 'details/:ticketId',
        component: TicketsFeatureDetailsComponent,
      },
    ]),
  ],
  declarations: [TicketsFeatureListComponent, TicketsFeatureDetailsComponent],
})
export class TicketsFeatureModule {}
