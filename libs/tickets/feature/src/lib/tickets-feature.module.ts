import { TicketsUiModule } from '@acme/tickets/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureListComponent } from './feature-list/feature-list.component';

@NgModule({
  imports: [
    CommonModule,
    TicketsUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: FeatureListComponent },
    ]),
  ],
  declarations: [FeatureListComponent],
})
export class TicketsFeatureModule {}
