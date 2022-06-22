import { Ticket } from '@acme/shared-models';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'acme-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.scss'],
})
export class UiListComponent {
  @Input() tickets!: Observable<Ticket[]>;
}
