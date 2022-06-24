import { TicketsDataAccessModule } from '@acme/tickets/data-access';
import { TicketsUiModule } from '@acme/tickets/ui';
import { UsersDataAccessModule } from '@acme/users/data-access';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { TicketsFeatureContainerComponent } from './container/tickets-feature-container.component';
import { TicketsFeatureDetailsComponent } from './pages/details/tickets-feature-details.component';
import { TicketsFeatureListComponent } from './pages/list/tickets-feature-list.component';

@NgModule({
  imports: [
    CommonModule,
    TicketsUiModule,
    TicketsDataAccessModule,
    UsersDataAccessModule,
    MatSnackBarModule,
    RouterModule.forChild([
      {
        path: '',
        component: TicketsFeatureContainerComponent,
        children: [
          {
            path: '',
            component: TicketsFeatureListComponent,
          },
          {
            path: 'details/:ticketId',
            component: TicketsFeatureDetailsComponent,
          },
        ],
      },
    ]),
  ],
  declarations: [
    TicketsFeatureListComponent,
    TicketsFeatureDetailsComponent,
    TicketsFeatureContainerComponent,
  ],
})
export class TicketsFeatureModule {}
