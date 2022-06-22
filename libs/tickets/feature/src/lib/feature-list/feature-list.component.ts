import { ApiService } from '@acme/tickets/data-access';
import { Component } from '@angular/core';

@Component({
  selector: 'acme-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent {
  tickets$ = this.api.tickets();
  users$ = this.api.users();
  constructor(private api: ApiService) {
    console.log('alo');
  }
}
