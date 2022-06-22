import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiListComponent } from './ui-list/ui-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiListComponent],
  exports: [UiListComponent],
})
export class TicketsUiModule {}
